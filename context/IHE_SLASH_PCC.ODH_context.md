File: repos/IHE_SLASH_PCC.ODH/input/fsh/Aliases.fsh

Alias: $sct = http://snomed.info/sct
Alias: $ucum = http://unitsofmeasure.org
Alias: $loinc = http://loinc.org
Alias: $RxNorm = http://www.nlm.nih.gov/research/umls/rxnorm
Alias: $ICD10 = http://hl7.org/fhir/sid/icd-10
Alias: $ICD10-CM = http://hl7.org/fhir/sid/icd-10-cm
Alias: $ISCO08 = InternationalClassificationOfOccupations2008not
Alias: $ISICRev4 = InternationalStandardIndustrialClassificationCodesRev4
Alias: $ONETSOC = https://phinvads.cdc.gov/vads/ViewValueSet.action?id=3ED71C35-8147-492B-B88F-94953573E55F 
Alias: $SOC2010 = https://phinvads.cdc.gov/vads/ViewValueSet.action?id=044B66C7-33CF-46D5-B252-BBA8A8819EEF
Alias: $PH_OccupationalDataForHealth_ODH = http://terminology.hl7.org/CodeSystem/PHOccupationalDataForHealthODH
//Alias: $PH_OccupationalDataForHealth_ODH = https://phinvads.cdc.gov/baseStu3/CodeSystem/2.16.840.1.114222.4.5.327
//Alias: $PH_OccupationalDataForHealth_ODH = https://phinvads.cdc.gov/CodeSystem/2.16.840.1.114222.4.5.327


---

File: repos/IHE_SLASH_PCC.ODH/input/fsh/IHE_PCC_ODH_ISCO08_to_SOC2010_Concept_Mapping.fsh

Instance:     IHE-PCC-ODH-ISCO08-to-SOC2010-Concept-Mapping
InstanceOf:   ConceptMap
Title:        "ISCO08 to USA SOC 2010 Crosswalk"
Description:  "ISCO08 to USA SOC 2010 Crosswalk"
Usage:        #definition

* name = "IHE_PCC_ODH_ISCO08_to_SOC2010_Concept_Mapping"
* title = "ISCO08 to USA SOC 2010 Crosswalk"
* status = #active
* experimental = false
* date = "2024-10-23"
* description = "ISCO08 to USA SOC 2010 Crosswalk"
* group[+]
  * source = $PH_OccupationalDataForHealth_ODH
  * target = Canonical(InternationalClassificationOfOccupations2008)
  * element[+]
    * target.code = #0110   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Commissioned armed forces officers"
    * code = #55-1011 	 	
    * display = "Air Crew Officers"

  * element[+]
    * target.code = #0110   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Commissioned armed forces officers"
    * code = #55-1012 
    * display = "Aircraft Launch and Recovery Officers"

  * element[+]
    * target.code = #0110   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Commissioned armed forces officers"
    * code = #55-1013 	 	
    * display = "Armored Assault Vehicle Officers"

  * element[+]
    * target.code = #0110   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Commissioned armed forces officers"
    * code = #55-1014 	 	
    * display = "Artillery and Missile Officers"

  * element[+]
    * target.code = #0110   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Commissioned armed forces officers"
    * code = #55-1015 	 	
    * display = "Command and Control Center Officers"

  * element[+]
    * target.code = #0110   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Commissioned armed forces officers"
    * code = #55-1016 	 	
    * display = "Infantry Officers"

  * element[+]
    * target.code = #0110   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Commissioned armed forces officers"
    * code = #55-1017 	 	
    * display = "Special Forces Officers"

  * element[+]
    * target.code = #0110   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Commissioned armed forces officers"
    * code = #55-1019 	 	
    * display = "Military Officer Special and Tactical Operations Leaders, All Other"

  * element[+]
    * target.code = #0210   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Non-commissioned armed forces officers"
    * code = #55-2011 	 	
    * display = "First-Line Supervisors of Air Crew Members"

  * element[+]
    * target.code = #0210   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Non-commissioned armed forces officers"
    * code = #55-2012 	 	
    * display = "First-Line Supervisors of Weapons Specialists/Crew Members"

  * element[+]
    * target.code = #0210   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Non-commissioned armed forces officers"
    * code = #55-2013 	 	
    * display = "First-Line Supervisors of All Other Tactical Operations Specialists"

  * element[+]
    * target.code = #0310   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Armed forces occupations, other ranks"
    * code = #55-3011 	 	
    * display = "Air Crew Members"

  * element[+]
    * target.code = #0310   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Armed forces occupations, other ranks"
    * code = #55-3012 	 	
    * display = "Aircraft Launch and Recovery Specialists"

  * element[+]
    * target.code = #0310   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Armed forces occupations, other ranks"
    * code = #55-3013 	 	
    * display = "Armored Assault Vehicle Crew Members"

  * element[+]
    * target.code = #0310   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Armed forces occupations, other ranks"
    * code = #55-3014 	 	
    * display = "Artillery and Missile Crew Members"

  * element[+]
    * target.code = #0310   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Armed forces occupations, other ranks"
    * code = #55-3015 	 	
    * display = "Command and Control Center Specialists"

  * element[+]
    * target.code = #0310   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Armed forces occupations, other ranks"
    * code = #55-3016 	 	
    * display = "Infantry"

  * element[+]
    * target.code = #0310   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Armed forces occupations, other ranks"
    * code = #55-3017 	 	
    * display = "Radar and Sonar Technicians"

  * element[+]
    * target.code = #0310   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Armed forces occupations, other ranks"
    * code = #55-3018 	 	
    * display = "Special Forces"

  * element[+]
    * target.code = #0310   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Armed forces occupations, other ranks"
    * code = #55-3019 	 	
    * display = "Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other"

  * element[+]
    * target.code = #1111   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Legislators"		
    * code = #11-1031	 	
    * display = "Legislators"

  * element[+]
    * target.code = #1112   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Senior government officials"
    * code = #11-1011	 	
    * display = "Chief Executives"

  * element[+]
    * target.code = #1112   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Senior government officials"
    * code = #11-1021	 	
    * display = "General and Operations Managers"

  * element[+]
    * target.code = #1112   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Senior government officials"
    * code = #11-9161	 	
    * display = "Emergency Management Directors"

  * element[+]
    * target.code = #1113   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Traditional chiefs and heads of villages"
    * code = #11-1011	 	
    * display = "Chief Executives"

  * element[+]
    * target.code = #1113   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Traditional chiefs and heads of villages"
    * code = #11-1031	 	
    * display = "Legislators"

  * element[+]
    * target.code = #1114   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Senior officials of special-interest organizations"
    * code = #11-1021	 	
    * display = "General and Operations Managers"

  * element[+]
    * target.code = #1114   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Senior officials of special-interest organizations"
    * code = #11-2031	 	
    * display = "Public Relations and Fundraising Managers"

  * element[+]
    * target.code = #1114   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Senior officials of special-interest organizations"
    * code = #11-9199	 	
    * display = "Managers, All Other"

  * element[+]
    * target.code = #1120   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Managing directors and chief executives"
    * code = #11-1011	 	
    * display = "Chief Executives"

  * element[+]
    * target.code = #1120   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Managing directors and chief executives"
    * code = #11-1021	 	
    * display = "General and Operations Managers"

  * element[+]
    * target.code = #1211   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Finance managers"		
    * code = #11-3031	 	
    * display = "Financial Managers"

  * element[+]
    * target.code = #1212   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Human resource managers"
    * code = #11-3111	 	
    * display = "Compensation and Benefits Managers"

  * element[+]
    * target.code = #1212   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Human resource managers"
    * code = #11-3121	 	
    * display = "Human Resources Managers"

  * element[+]
    * target.code = #1212   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Human resource managers"
    * code = #11-3131	 	
    * display = "Training and Development Managers"

  * element[+]
    * target.code = #1213   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Policy and planning managers"		
    * code = #11-9199	 	
    * display = "Managers, All Other"

  * element[+]
    * target.code = #1219   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Business services and administration managers not elsewhere classified"
    * code = #11-2031	 	
    * display = "Public Relations and Fundraising Managers"

  * element[+]
    * target.code = #1219   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Business services and administration managers not elsewhere classified"
    * code = #11-3011	 	
    * display = "Administrative Services Managers"

  * element[+]
    * target.code = #1219   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Business services and administration managers not elsewhere classified"
    * code = #11-3061	 	
    * display = "Purchasing Managers"

  * element[+]
    * target.code = #1219   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Business services and administration managers not elsewhere classified"
    * code = #11-9061	 	
    * display = "Funeral Service Managers"

  * element[+]
    * target.code = #1219   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Business services and administration managers not elsewhere classified"
    * code = #11-9131	 	
    * display = "Postmasters and Mail Superintendents"

  * element[+]
    * target.code = #1219   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Business services and administration managers not elsewhere classified"
    * code = #11-9199	 	
    * display = "Managers, All Other"

  * element[+]
    * target.code = #1221   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sales and marketing managers"
    * code = #11-2021	 	
    * display = "Marketing Managers"

  * element[+]
    * target.code = #1221   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sales and marketing managers"
    * code = #11-2022	 	
    * display = "Sales Managers"

  * element[+]
    * target.code = #1222   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Advertising and public relations managers"
    * code = #11-2011	 	
    * display = "Advertising and Promotions Managers"

  * element[+]
    * target.code = #1222   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Advertising and public relations managers"
    * code = #11-2031	 	
    * display = "Public Relations and Fundraising Managers"

  * element[+]
    * target.code = #1223   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Research and development managers"
    * code = #11-9041	 	
    * display = "Architectural and Engineering Managers"

  * element[+]
    * target.code = #1223   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Research and development managers"
    * code = #11-9121	 	
    * display = "Natural Sciences Managers"

  * element[+]
    * target.code = #1311   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Agricultural and forestry production managers"		
    * code = #11-9013  	
    * display = "Farmers, Ranchers, and Other Agricultural Managers"

  * element[+]
    * target.code = #1312   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Aquaculture and fisheries production managers"		
    * code = #11-9013  	
    * display = "Farmers, Ranchers, and Other Agricultural Managers"

  * element[+]
    * target.code = #1321   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Manufacturing managers"
    * code = #11-3051  	
    * display = "Industrial Production Managers"

  * element[+]
    * target.code = #1322   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mining managers"
    * code = #11-9199  	
    * display = "Managers, All Other"

  * element[+]
    * target.code = #1323   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Construction managers"
    * code = #11-9021  	
    * display = "Construction Managers"

  * element[+]
    * target.code = #1324   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Supply, distribution and related managers"
    * code = #11-3071  	
    * display = "Transportation, Storage, and Distribution Managers"

  * element[+]
    * target.code = #1330   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Information and communications technology service managers"
    * code = #11-3021  	
    * display = "Computer and Information Systems Managers"

  * element[+]
    * target.code = #1341   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Child Care Service Managers"
    * code = #11-9031  	
    * display = "Education Administrators, Preschool and Childcare Center/Program"

  * element[+]
    * target.code = #1342   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health Service Managers"		
    * code = #11-9111  	
    * display = "Health Service Managers"

  * element[+]
    * target.code = #1343   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Aged Care Service Managers"
    * code = #11-1021  	
    * display = "General and Operations Managers"

  * element[+]
    * target.code = #1343   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Aged Care Service Managers"
    * code = #11-9111  	
    * display = "Medical and Health Services Managers"

  * element[+]
    * target.code = #1344   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Social welfare managers"		
    * code = #11-9151  	
    * display = "Social and Community Service Managers"

  * element[+]
    * target.code = #1345   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Education managers"
    * code = #11-9032	 	
    * display = "Education Administrators, Elementary and Secondary School"

  * element[+]
    * target.code = #1345   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Education managers"
    * code = #11-9033  	
    * display = "Education Administrators, Postsecondary"

  * element[+]
    * target.code = #1345   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Education managers"
    * code = #11-9039  	
    * display = "Education Administrators, All Other"

  * element[+]
    * target.code = #1346   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Financial and insurance services branch managers"
    * code = #11-1021  	
    * display = "General and Operations Managers"

  * element[+]
    * target.code = #1346   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Financial and insurance services branch managers"
    * code = #11-3031  	
    * display = "Financial Managers"

  * element[+]
    * target.code = #1349   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Professional services managers not elsewhere classified"		
    * code = #11-9199  	
    * display = "Managers, All Other"

  * element[+]
    * target.code = #1411   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Hotel managers"		
    * code = #11-9081  	
    * display = "Lodging Managers"

  * element[+]
    * target.code = #1412   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Restaurant managers"		
    * code = #11-9051  	
    * display = "Food Service Managers"

  * element[+]
    * target.code = #1420   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Retail and wholesale trade managers"		
    * code = #11-1021  	
    * display = "General and Operations Managers"

  * element[+]
    * target.code = #1431   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sports, recreation and cultural centre managers"
    * code = #11-9071  	
    * display = "Gaming Managers"

  * element[+]
    * target.code = #1431   
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sports, recreation and cultural centre managers"
    * code = #11-9199  	
    * display = "Managers, All Other"

  * element[+]
    * target.code = #1439
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Services managers not elsewhere classified"		
    * code = #11-9199  	
    * display = "Managers, All Other"

  * element[+]
    * target.code = #211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physical and earth science professionals"
    * code = #19-2099  	
    * display = "Physical Scientists, All Other"

  * element[+]
    * target.code = #2111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physicists and astronomers"
    * code = #19-2011  	
    * display = "Astronomers"

  * element[+]
    * target.code = #2111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physicists and astronomers"
    * code = #19-2012  	
    * display = "Physicists"

  * element[+]
    * target.code = #2112
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Meteorologists"
    * code = #19-2021  	
    * display = "Atmospheric and Space Scientists"

  * element[+]
    * target.code = #2113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Chemists"
    * code = #19-2031  	
    * display = "Chemists"

  * element[+]
    * target.code = #2113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Chemists"
    * code = #19-2032  	
    * display = "Materials Scientists"

  * element[+]
    * target.code = #2114
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Geologists and geophysicists"
    * code = #19-2042  	
    * display = "Geoscientists, Except Hydrologists and Geographers"

  * element[+]
    * target.code = #2114
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Geologists and geophysicists"
    * code = #19-2043  	
    * display = "Hydrologist"

  * element[+]
    * target.code = #2120
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mathematicians, actuaries and statisticians"
    * code = #15-2011  	
    * display = "Actuaries"

  * element[+]
    * target.code = #2120
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mathematicians, actuaries and statisticians"
    * code = #15-2021  	
    * display = "Mathematicians"

  * element[+]
    * target.code = #2120
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mathematicians, actuaries and statisticians"
    * code = #15-2031  	
    * display = "Operations Research Analysts"

  * element[+]
    * target.code = #2120
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mathematicians, actuaries and statisticians"
    * code = #15-2041  	
    * display = "Statisticians"

  * element[+]
    * target.code = #2120
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mathematicians, actuaries and statisticians"
    * code = #19-3022  	
    * display = "Survey Researchers"

  * element[+]
    * target.code = #2131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Biologists, botanists, zoologists and related professionals"
    * code = #19-1011  	
    * display = "Animal Scientists"

  * element[+]
    * target.code = #2131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Biologists, botanists, zoologists and related professionals"
    * code = #19-1012  	
    * display = "Food Scientists and Technologists"

  * element[+]
    * target.code = #2131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Biologists, botanists, zoologists and related professionals"
    * code = #19-1013  	
    * display = "Soil and Plant Scientists"

  * element[+]
    * target.code = #2131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Biologists, botanists, zoologists and related professionals"
    * code = #19-1021  	
    * display = "Biochemists and Biophysicists"

  * element[+]
    * target.code = #2131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Biologists, botanists, zoologists and related professionals"
    * code = #19-1022  	
    * display = "Microbiologists"

  * element[+]
    * target.code = #2131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Biologists, botanists, zoologists and related professionals"
    * code = #19-1023  	
    * display = "Zoologists and Wildlife Biologists"

  * element[+]
    * target.code = #2131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Biologists, botanists, zoologists and related professionals"
    * code = #19-1029  	
    * display = "Biological Scientists, All Other"

  * element[+]
    * target.code = #2131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Biologists, botanists, zoologists and related professionals"
    * code = #19-1041  	
    * display = "Epidemiologists"

  * element[+]
    * target.code = #2131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Biologists, botanists, zoologists and related professionals"
    * code = #19-1042  	
    * display = "Medical Scientists, Except Epidemiologists"

  * element[+]
    * target.code = #2131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Biologists, botanists, zoologists and related professionals"
    * code = #19-1099  	
    * display = "Life Scientists, All Other"

  * element[+]
    * target.code = #2132
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Farming, forestry and fisheries advisers"
    * code = #19-1013  	
    * display = "Soil and Plant Scientists"

  * element[+]
    * target.code = #2132
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Farming, forestry and fisheries advisers"
    * code = #19-1032  	
    * display = "Foresters"

  * element[+]
    * target.code = #2132
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Farming, forestry and fisheries advisers"
    * code = #25-9021  	
    * display = "Farm and Home Management Advisors"

  * element[+]
    * target.code = #2133
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Environmental protection professionals"
    * code = #19-1031  	
    * display = "Conservation Scientists"

  * element[+]
    * target.code = #2133
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Environmental protection professionals"
    * code = #19-2041  	
    * display = "Environmental Scientists and Specialists, Including Health"

  * element[+]
    * target.code = #2141
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Industrial and production engineers"
    * code = #17-2112  	
    * display = "Industrial Engineers"

  * element[+]
    * target.code = #2142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Civil engineers"
    * code = #17-2051  	
    * display = "Civil Engineers"

  * element[+]
    * target.code = #2143
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Environmental engineers"
    * code = #17-2081  	
    * display = "Environmental Engineers"

  * element[+]
    * target.code = #2144
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mechanical engineers"
    * code = #17-2011  	
    * display = "Aerospace Engineers"

  * element[+]
    * target.code = #2144
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mechanical engineers"
    * code = #17-2021  	
    * display = "Agricultural Engineers"

  * element[+]
    * target.code = #2144
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mechanical engineers"
    * code = #17-2121  	
    * display = "Marine Engineers and Naval Architects"

  * element[+]
    * target.code = #2144
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mechanical engineers"
    * code = #17-2141  	
    * display = "Mechanical Engineers"

  * element[+]
    * target.code = #2145
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Chemical engineers"
    * code = #17-2041  	
    * display = "Chemical Engineers"

  * element[+]
    * target.code = #2146
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mining engineers, metallurgists and related professionals"
    * code = #17-2131  	
    * display = "Materials Engineers"

  * element[+]
    * target.code = #2146
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mining engineers, metallurgists and related professionals"
    * code = #17-2151  	
    * display = "Mining and Geological Engineers, Including Mining Safety Engineers"

  * element[+]
    * target.code = #2146
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mining engineers, metallurgists and related professionals"
    * code = #17-2171  	
    * display = "Petroleum Engineers"

  * element[+]
    * target.code = #2146
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mining engineers, metallurgists and related professionals"
    * code = #19-2032  	
    * display = "Materials Scientists"

  * element[+]
    * target.code = #2149
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Engineering professionals not elsewhere classified"
    * code = #17-2031  	
    * display = "Biomedical Engineers"

  * element[+]
    * target.code = #2149
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Engineering professionals not elsewhere classified"
    * code = #17-2111  	
    * display = "Health and Safety Engineers, Except Mining Safety Engineers and Inspectors"

  * element[+]
    * target.code = #2149
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Engineering professionals not elsewhere classified"
    * code = #17-2131  	
    * display = "Materials Engineers"

  * element[+]
    * target.code = #2149
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Engineering professionals not elsewhere classified"
    * code = #17-2161  	
    * display = "Nuclear Engineers"

  * element[+]
    * target.code = #2149
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Engineering professionals not elsewhere classified"
    * code = #17-2199  	
    * display = "Engineers, All Other"

  * element[+]
    * target.code = #2151
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical engineers"
    * code = #17-2071  	
    * display = "Electrical Engineers"

  * element[+]
    * target.code = #2152
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electronics engineers"
    * code = #17-2061  	
    * display = "Computer Hardware Engineers"

  * element[+]
    * target.code = #2152
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electronics engineers"
    * code = #17-2072  	
    * display = "Electronics Engineers, Except Computer"

  * element[+]
    * target.code = #2153
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Telecommunications engineers"
    * code = #17-2072  	
    * display = "Electronics Engineers, Except Computer"

  * element[+]
    * target.code = #2161
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building architects"
    * code = #17-1011  	
    * display = "Architects, Except Landscape and Naval"

  * element[+]
    * target.code = #2162
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Landscape architects"
    * code = #17-1012  	
    * display = "Landscape Architects"

  * element[+]
    * target.code = #2163
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Product and garment designers"
    * code = #27-1021  	
    * display = "Commercial and Industrial Designers"

  * element[+]
    * target.code = #2163
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Product and garment designers"
    * code = #27-1022  	
    * display = "Fashion Designers"

  * element[+]
    * target.code = #2163
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Product and garment designers"
    * code = #27-1029  	
    * display = "Designers, All Other"

  * element[+]
    * target.code = #2164
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Town and traffic planners"
    * code = #19-3051  	
    * display = "Urban and Regional Planners"

  * element[+]
    * target.code = #2165
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cartographers and surveyors"
    * code = #17-1021  	
    * display = "Cartographers and Photogrammetrists"

  * element[+]
    * target.code = #2165
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cartographers and surveyors"
    * code = #17-1022  	
    * display = "Surveyors"

  * element[+]
    * target.code = #2166
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Graphic and multimedia designers"
    * code = #27-1014  	
    * display = "Multimedia Artists and Animators"

  * element[+]
    * target.code = #2166
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Graphic and multimedia designers"
    * code = #27-1024  	
    * display = "Graphic Designers"

  * element[+]
    * target.code = #2211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Generalist medical practitioners"
    * code = #29-1062  	
    * display = "Family and General Practitioners"

  * element[+]
    * target.code = #2211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Generalist medical practitioners"
    * code = #29-1063  	
    * display = "Internists, General"

  * element[+]
    * target.code = #2211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Generalist medical practitioners"
    * code = #29-1065  	
    * display = "Pediatricians, General"

  * element[+]
    * target.code = #2211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Generalist medical practitioners"
    * code = #29-1069  	
    * display = "Physicians and Surgeons, All Other"

  * element[+]
    * target.code = #2212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Specialist medical practitioners"
    * code = #29-1061  	
    * display = "Anesthesiologists"

  * element[+]
    * target.code = #2212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Specialist medical practitioners"
    * code = #29-1064  	
    * display = "Obstetricians and Gynecologists"

  * element[+]
    * target.code = #2212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Specialist medical practitioners"
    * code = #29-1066  	
    * display = "Psychiatrists"

  * element[+]
    * target.code = #2212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Specialist medical practitioners"
    * code = #29-1067  	
    * display = "Surgeons"

  * element[+]
    * target.code = #2212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Specialist medical practitioners"
    * code = #29-1069  	
    * display = "Physicians and Surgeons, All Other"

  * element[+]
    * target.code = #2221
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Nursing professionals"
    * code = #29-1141  	
    * display = "Registered Nurses"

  * element[+]
    * target.code = #2221
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Nursing professionals"
    * code = #29-1151  	
    * display = "Nurse Anesthetists"

  * element[+]
    * target.code = #2221
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Nursing professionals"
    * code = #29-1171  	
    * display = "Nurse Practitioners"

  * element[+]
    * target.code = #2222
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Midwifery professionals"
    * code = #29-1161  	
    * display = "Nurse Midwives"

  * element[+]
    * target.code = #2230
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Traditional and complementary medicine professionals"
    * code = #29-1199  	
    * display = "Health Diagnosing and Treating Practitioners, All Other"

  * element[+]
    * target.code = #2240
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Paramedical practitioners"
    * code = #29-1071  	
    * display = "Physician Assistants"

  * element[+]
    * target.code = #2250
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Veterinarians"
    * code = #29-1131  	
    * display = "Veterinarians"

  * element[+]
    * target.code = #2261
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Dentists"
    * code = #29-1021  	
    * display = "Dentists, General"

  * element[+]
    * target.code = #2261
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Dentists"
    * code = #29-1022  	
    * display = "Oral and Maxillofacial Surgeons"

  * element[+]
    * target.code = #2261
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Dentists"
    * code = #29-1023  	
    * display = "Orthodontists"

  * element[+]
    * target.code = #2261
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Dentists"
    * code = #29-1024  	
    * display = "Prosthodontists"

  * element[+]
    * target.code = #2261
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Dentists"
    * code = #29-1029  	
    * display = "Dentists, All Other Specialists"

  * element[+]
    * target.code = #2262
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Pharmacists"
    * code = #29-1051  	
    * display = "Pharmacists"

  * element[+]
    * target.code = #2263
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Environmental and occupational health and hygiene professionals"
    * code = #21-1091  	
    * display = "Health Educators"

  * element[+]
    * target.code = #2263
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Environmental and occupational health and hygiene professionals"
    * code = #29-9011  	
    * display = "Occupational Health and Safety Specialists"

  * element[+]
    * target.code = #2264
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physiotherapists"
    * code = #29-1123  	
    * display = "Physical Therapists"

  * element[+]
    * target.code = #2264
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physiotherapists"
    * code = #29-1128  	
    * display = "Exercise Physiologists"

  * element[+]
    * target.code = #2265
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Dieticians and nutritionists"
    * code = #29-1031  	
    * display = "Dietitians and Nutritionists"

  * element[+]
    * target.code = #2266
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Audiologists and speech therapists"
    * code = #29-1127  	
    * display = "Speech-Language Pathologists"

  * element[+]
    * target.code = #2266
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Audiologists and speech therapists"
    * code = #29-1181  	
    * display = "Audiologists"

  * element[+]
    * target.code = #2267
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Optometrists and ophthalmic opticians"
    * code = #29-1041  	
    * display = "Optometrists"

  * element[+]
    * target.code = #2269
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health professionals not elsewhere classified"
    * code = #29-1011  	
    * display = "Chiropractors"

  * element[+]
    * target.code = #2269
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health professionals not elsewhere classified"
    * code = #29-1081  	
    * display = "Podiatrists"

  * element[+]
    * target.code = #2269
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health professionals not elsewhere classified"
    * code = #29-1122  	
    * display = "Occupational Therapists"

  * element[+]
    * target.code = #2269
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health professionals not elsewhere classified"
    * code = #29-1125  	
    * display = "Recreational Therapists"

  * element[+]
    * target.code = #2269
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health professionals not elsewhere classified"
    * code = #29-1129  	
    * display = "Therapists, All Other"

  * element[+]
    * target.code = #2269
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health professionals not elsewhere classified"
    * code = #29-1199  	
    * display = "Health Diagnosing and Treating Practitioners, All Other"

  * element[+]
    * target.code = #2269
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health professionals not elsewhere classified"
    * code = #29-9092  	
    * display = "Genetic Counselors"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1011  	
    * display = "Business Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1021  	
    * display = "Computer Science Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1022  	
    * display = "Mathematical Science Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1031  	
    * display = "Architecture Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1032  	
    * display = "Engineering Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1041  	
    * display = "Agricultural Sciences Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1042  	
    * display = "Biological Science Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1043  	
    * display = "Forestry and Conservation Science Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1051  	
    * display = "Atmospheric, Earth, Marine, and Space Sciences Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1052  	
    * display = "Chemistry Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1053  	
    * display = "Environmental Science Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1054  	
    * display = "Physics Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1061  	
    * display = "Anthropology and Archeology Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1062  	
    * display = "Area, Ethnic, and Cultural Studies Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1063  	
    * display = "Economics Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1064  	
    * display = "Geography Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1065  	
    * display = "Political Science Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1066  	
    * display = "Psychology Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1067  	
    * display = "Sociology Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1069  	
    * display = "Social Sciences Teachers, Postsecondary, All Other"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1071  	
    * display = "Health Specialties Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1072  	
    * display = "Nursing Instructors and Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1081  	
    * display = "Education Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1082  	
    * display = "Library Science Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1111  	
    * display = "Criminal Justice and Law Enforcement Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1112  	
    * display = "Law Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1113  	
    * display = "Social Work Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1121  	
    * display = "Art, Drama, and Music Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1122  	
    * display = "Communications Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1123  	
    * display = "English Language and Literature Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1124  	
    * display = "Foreign Language and Literature Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1125  	
    * display = "History Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1126  	
    * display = "Philosophy and Religion Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1191  	
    * display = "Graduate Teaching Assistants"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1192  	
    * display = "Home Economics Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1193  	
    * display = "Recreation and Fitness Studies Teachers, Postsecondary"

  * element[+]
    * target.code = #2310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "University and higher education teachers"
    * code = #25-1199  	
    * display = "Postsecondary Teachers, All Other"

  * element[+]
    * target.code = #2320
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Vocational education teachers"
    * code = #25-1194  	
    * display = "Vocational Education Teachers, Postsecondary"

  * element[+]
    * target.code = #2320
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Vocational education teachers"
    * code = #25-2023  	
    * display = "Career/Technical Education Teachers, Middle School"

  * element[+]
    * target.code = #2320
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Vocational education teachers"
    * code = #25-2032  	
    * display = "Career/Technical Education Teachers, Secondary School"

  * element[+]
    * target.code = #2330
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Secondary education teachers"
    * code = #25-2031  	
    * display = "Secondary School Teachers, Except Special and Career/Technical Education"

  * element[+]
    * target.code = #2341
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Primary school teachers"
    * code = #25-2021  	
    * display = "Elementary School Teachers, Except Special Education"

  * element[+]
    * target.code = #2341
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Primary school teachers"
    * code = #25-2022  	
    * display = "Middle School Teachers, Except Special and Career/Technical Education"

  * element[+]
    * target.code = #2342
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Early childhood educators"
    * code = #25-2011  	
    * display = "Preschool Teachers, Except Special Education"

  * element[+]
    * target.code = #2342
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Early childhood educators"
    * code = #25-2012  	
    * display = "Kindergarten Teachers, Except Special Education"

  * element[+]
    * target.code = #2351
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Education methods specialists"
    * code = #25-9031  	
    * display = "Instructional Coordinators"

  * element[+]
    * target.code = #2352
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Special needs teachers"
    * code = #25-2051  	
    * display = "Special Education Teachers, Preschool"

  * element[+]
    * target.code = #2352
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Special needs teachers"
    * code = #25-2052  	
    * display = "Special Education Teachers, Kindergarten and Elementary School"

  * element[+]
    * target.code = #2352
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Special needs teachers"
    * code = #25-2053  	
    * display = "Special Education Teachers, Middle School"

  * element[+]
    * target.code = #2352
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Special needs teachers"
    * code = #25-2054  	
    * display = "Special Education Teachers, Secondary School"

  * element[+]
    * target.code = #2352
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Special needs teachers"
    * code = #25-2059  	
    * display = "Special Education Teachers, All Other"

  * element[+]
    * target.code = #2353
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Other language teachers"
    * code = #25-3011  	
    * display = "Adult Basic and Secondary Education and Literacy Teachers and Instructors"

  * element[+]
    * target.code = #2353
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Other language teachers"
    * code = #25-3021  	
    * display = "Self-Enrichment Education Teachers"

  * element[+]
    * target.code = #2353
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Other language teachers"
    * code = #25-3099  	
    * display = "Teachers and Instructors, All Other"

  * element[+]
    * target.code = #2354
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Other music teachers"
    * code = #25-3021  	
    * display = "Self-Enrichment Education Teachers"

  * element[+]
    * target.code = #2355
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Other arts teachers"
    * code = #25-3021  	
    * display = "Self-Enrichment Education Teachers"

  * element[+]
    * target.code = #2355
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Other arts teachers"
    * code = #25-3099  	
    * display = "Teachers and Instructors, All Other"

  * element[+]
    * target.code = #2356
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Information technology trainers"
    * code = #13-1151  	
    * display = "Training and Development Specialists"

  * element[+]
    * target.code = #2359
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Teaching professionals not elsewhere classified"
    * code = #21-1012  	
    * display = "Educational, Guidance, School, and Vocational Counselors"

  * element[+]
    * target.code = #2359
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Teaching professionals not elsewhere classified"
    * code = #25-3099  	
    * display = "Teachers and Instructors, All Other"

  * element[+]
    * target.code = #2359
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Teaching professionals not elsewhere classified"
    * code = #25-9099  	
    * display = "Education, Training, and Library Workers, All Other"

  * element[+]
    * target.code = #2411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Accountants"
    * code = #13-2011  	
    * display = "Accountants and Auditors"

  * element[+]
    * target.code = #2411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Accountants"
    * code = #13-2031  	
    * display = "Budget Analysts"

  * element[+]
    * target.code = #2411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Accountants"
    * code = #13-2082  	
    * display = "Tax Preparers"

  * element[+]
    * target.code = #2412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Financial and investment advisers"
    * code = #13-2051  	
    * display = "Financial Analysts"

  * element[+]
    * target.code = #2412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Financial and investment advisers"
    * code = #13-2052  	
    * display = "Personal Financial Advisors"

  * element[+]
    * target.code = #2413
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Financial analysts"
    * code = #13-2041  	
    * display = "Credit Analysts"

  * element[+]
    * target.code = #2413
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Financial analysts"
    * code = #13-2051  	
    * display = "Financial Analysts"

  * element[+]
    * target.code = #2413
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Financial analysts"
    * code = #13-2061  	
    * display = "Financial Examiners"

  * element[+]
    * target.code = #2421
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Management and organization analysts"
    * code = #13-1081  	
    * display = "Logisticians"

  * element[+]
    * target.code = #2421
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Management and organization analysts"
    * code = #13-1111  	
    * display = "Management Analysts"

  * element[+]
    * target.code = #2422
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Policy administration professionals"
    * code = #13-1199  	
    * display = "Business Operations Specialists, All Other"

  * element[+]
    * target.code = #2423
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personnel and careers professionals"
    * code = #13-1071  	
    * display = "Human Resources Specialists"

  * element[+]
    * target.code = #2423
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personnel and careers professionals"
    * code = #13-1075  	
    * display = "Labor Relations Specialists"

  * element[+]
    * target.code = #2423
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personnel and careers professionals"
    * code = #13-1141  	
    * display = "Compensation, Benefits, and Job Analysis Specialists"

  * element[+]
    * target.code = #2423
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personnel and careers professionals"
    * code = #21-1012  	
    * display = "Educational, Guidance, School, and Vocational Counselors"

  * element[+]
    * target.code = #2424
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Training and staff development professionals"
    * code = #13-1151  	
    * display = "Training and Development Specialists"

  * element[+]
    * target.code = #2431
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Advertising and marketing professionals"
    * code = #13-1161  	
    * display = "Market Research Analysts and Marketing Specialists"

  * element[+]
    * target.code = #2431
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Advertising and marketing professionals"
    * code = #27-3043  	
    * display = "Writers and Authors"

  * element[+]
    * target.code = #2432
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Public relations professionals"
    * code = #27-3031  	
    * display = "Public Relations Specialists"

  * element[+]
    * target.code = #2433
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Technical and medical sales professionals (excluding ICT)"
    * code = #41-1012  	
    * display = "First-Line Supervisors of Non-Retail Sales Workers"

  * element[+]
    * target.code = #2433
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Technical and medical sales professionals (excluding ICT)"
    * code = #41-4011  	
    * display = "Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products"

  * element[+]
    * target.code = #2434
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Information and communications technology sales professionals"
    * code = #41-1012  	
    * display = "First-Line Supervisors of Non-Retail Sales Workers"

  * element[+]
    * target.code = #2434
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Information and communications technology sales professionals"
    * code = #41-4011  	
    * display = "Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products"

  * element[+]
    * target.code = #2434
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Information and communications technology sales professionals"
    * code = #41-9031  	
    * display = "Sales Engineers"

  * element[+]
    * target.code = #2511
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Systems analysts"
    * code = #15-1111  	
    * display = "Computer and Information Research Scientists"

  * element[+]
    * target.code = #2511
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Systems analysts"
    * code = #15-1121  	
    * display = "Computer Systems Analysts"

  * element[+]
    * target.code = #2512
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Software developers"
    * code = #15-1132  	
    * display = "Software Developers, Applications"

  * element[+]
    * target.code = #2512
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Software developers"
    * code = #15-1133  	
    * display = "Software Developers, Systems Software"

  * element[+]
    * target.code = #2513
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Web and multimedia developers"
    * code = #15-1134  	
    * display = "Web Developers"

  * element[+]
    * target.code = #2514
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Applications programmers"
    * code = #15-1131  	
    * display = "Computer Programmers"

  * element[+]
    * target.code = #2519
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Software and applications developers and analysts not elsewhere classified"
    * code = #15-1199  	
    * display = "Computer Occupations, All Other"

  * element[+]
    * target.code = #2521
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Database designers and administrators"
    * code = #15-1141  	
    * display = "Database Administrators"

  * element[+]
    * target.code = #2522
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Systems Aministrators"
    * code = #15-1142  	
    * display = "Network and Computer Systems Administrators"

  * element[+]
    * target.code = #2523
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Computer network professionals"
    * code = #15-1143  	
    * display = "Computer Network Architects"

  * element[+]
    * target.code = #2529
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Database and network professionals not elsewhere classified"
    * code = #15-1122  	
    * display = "Information Security Analysts"

  * element[+]
    * target.code = #2529
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Database and network professionals not elsewhere classified"
    * code = #15-1199  	
    * display = "Computer Occupations, All Other"

  * element[+]
    * target.code = #2611
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Lawyers"
    * code = #23-1011  	
    * display = "Lawyers"

  * element[+]
    * target.code = #2612
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Judges"
    * code = #23-1021  	
    * display = "Administrative Law Judges, Adjudicators, and Hearing Officers"

  * element[+]
    * target.code = #2612
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Judges"
    * code = #23-1023  	
    * display = "Judges, Magistrate Judges, and Magistrates"

  * element[+]
    * target.code = #2619
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Legal professionals not elsewhere classified"
    * code = #23-1022  	
    * display = "Arbitrators, Mediators, and Conciliators"

  * element[+]
    * target.code = #2621
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Archivists and curators"
    * code = #25-4011  	
    * display = "Archivists"

  * element[+]
    * target.code = #2621
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Archivists and curators"
    * code = #25-4012  	
    * display = "Curators"

  * element[+]
    * target.code = #2622
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Librarians and related information professionals"
    * code = #25-4021  	
    * display = "Librarians"

  * element[+]
    * target.code = #2622
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Librarians and related information professionals"
    * code = #25-9011  	
    * display = "Audio-Visual and Multimedia Collections Specialists"

  * element[+]
    * target.code = #2631
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Economists"
    * code = #19-3011  	
    * display = "Economists"

  * element[+]
    * target.code = #2632
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sociologists, anthropologists and related professionals"
    * code = #19-3041  	
    * display = "Sociologists"

  * element[+]
    * target.code = #2632
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sociologists, anthropologists and related professionals"
    * code = #19-3091  	
    * display = "Anthropologists and Archeologists"

  * element[+]
    * target.code = #2632
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sociologists, anthropologists and related professionals"
    * code = #19-3092  	
    * display = "Geographers"

  * element[+]
    * target.code = #2633
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Philosophers, historians and political scientists"
    * code = #19-3093  	
    * display = "Historians"

  * element[+]
    * target.code = #2633
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Philosophers, historians and political scientists"
    * code = #19-3094  	
    * display = "Political Scientists"

  * element[+]
    * target.code = #2633
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Philosophers, historians and political scientists"
    * code = #19-3099  	
    * display = "Social Scientists and Related Workers, All Other"

  * element[+]
    * target.code = #2634
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Psychologists"
    * code = #19-3031  	
    * display = "Clinical, Counseling, and School Psychologists"

  * element[+]
    * target.code = #2634
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Psychologists"
    * code = #19-3032  	
    * display = "Industrial-Organizational Psychologists"

  * element[+]
    * target.code = #2634
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Psychologists"
    * code = #19-3039  	
    * display = "Psychologists, All Other"

  * element[+]
    * target.code = #2635
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Social work and counselling professionals"
    * code = #21-1011  	
    * display = "Substance Abuse and Behavioral Disorder Counselors"

  * element[+]
    * target.code = #2635
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Social work and counselling professionals"
    * code = #21-1013  	
    * display = "Marriage and Family Therapists"

  * element[+]
    * target.code = #2635
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Social work and counselling professionals"
    * code = #21-1014  	
    * display = "Mental Health Counselors"

  * element[+]
    * target.code = #2635
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Social work and counselling professionals"
    * code = #21-1015  	
    * display = "Rehabilitation Counselors"

  * element[+]
    * target.code = #2635
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Social work and counselling professionals"
    * code = #21-1019  	
    * display = "Counselors, All Other"

  * element[+]
    * target.code = #2635
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Social work and counselling professionals"
    * code = #21-1021  	
    * display = "Child, Family, and School Social Workers"

  * element[+]
    * target.code = #2635
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Social work and counselling professionals"
    * code = #21-1022  	
    * display = "Healthcare Social Workers"

  * element[+]
    * target.code = #2635
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Social work and counselling professionals"
    * code = #21-1023  	
    * display = "Mental Health and Substance Abuse Social Workers"

  * element[+]
    * target.code = #2635
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Social work and counselling professionals"
    * code = #21-1029  	
    * display = "Social Workers, All Other"

  * element[+]
    * target.code = #2635
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Social work and counselling professionals"
    * code = #21-1092  	
    * display = "Probation Officers and Correctional Treatment Specialists"

  * element[+]
    * target.code = #2635
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Social work and counselling professionals"
    * code = #21-1099  	
    * display = "Community and Social Service Specialists, All Other"

  * element[+]
    * target.code = #2636
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Religious professionals"
    * code = #21-2011  	
    * display = "Clergy"

  * element[+]
    * target.code = #2636
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Religious professionals"
    * code = #21-2021  	
    * display = "Directors, Religious Activities and Education"

  * element[+]
    * target.code = #2641
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Authors and related writers"
    * code = #27-3041  	
    * display = "Editors"

  * element[+]
    * target.code = #2641
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Authors and related writers"
    * code = #27-3042  	
    * display = "Technical Writers"

  * element[+]
    * target.code = #2641
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Authors and related writers"
    * code = #27-3043  	
    * display = "Writers and Authors"

  * element[+]
    * target.code = #2642
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Journalists"
    * code = #27-3022  	
    * display = "Reporters and Correspondents"

  * element[+]
    * target.code = #2642
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Journalists"
    * code = #27-3041  	
    * display = "Editors"

  * element[+]
    * target.code = #2643
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Translators, interpreters and other linguists"
    * code = #19-3099  	
    * display = "Social Scientists and Related Workers, All Other"

  * element[+]
    * target.code = #2643
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Translators, interpreters and other linguists"
    * code = #27-3091  	
    * display = "Interpreters and Translators"

  * element[+]
    * target.code = #2651
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Visual artists"
    * code = #27-1012  	
    * display = "Craft Artists"

  * element[+]
    * target.code = #2651
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Visual artists"
    * code = #27-1013  	
    * display = "Fine Artists, Including Painters, Sculptors, and Illustrators"

  * element[+]
    * target.code = #2652
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Musicians, singers and composers"
    * code = #27-2041  	
    * display = "Music Directors and Composers"

  * element[+]
    * target.code = #2652
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Musicians, singers and composers"
    * code = #27-2042  	
    * display = "Musicians and Singers"

  * element[+]
    * target.code = #2653
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Dancers and choreographers"
    * code = #27-2031  	
    * display = "Dancers"

  * element[+]
    * target.code = #2653
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Dancers and choreographers"
    * code = #27-2032  	
    * display = "Choreographers"

  * element[+]
    * target.code = #2654
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Film, stage and related directors and producers"
    * code = #27-1011  	
    * display = "Art Directors"

  * element[+]
    * target.code = #2654
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Film, stage and related directors and producers"
    * code = #27-2012  	
    * display = "Producers and Directors"

  * element[+]
    * target.code = #2654
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Film, stage and related directors and producers"
    * code = #27-4032  	
    * display = "Film and Video Editors"

  * element[+]
    * target.code = #2655
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Actors"
    * code = #27-2011  	
    * display = "Actors"

  * element[+]
    * target.code = #2656
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Announcers on radio, television and other media"
    * code = #27-3011  	
    * display = "Radio and Television Announcers"

  * element[+]
    * target.code = #2656
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Announcers on radio, television and other media"
    * code = #27-3012  	
    * display = "Public Address System and Other Announcers"

  * element[+]
    * target.code = #2656
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Announcers on radio, television and other media"
    * code = #27-3021  	
    * display = "Broadcast News Analysts"

  * element[+]
    * target.code = #2659
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Creative and performing artists not elsewhere classified"
    * code = #27-2099  	
    * display = "Entertainers and Performers, Sports and Related Workers, All Other"

  * element[+]
    * target.code = #3111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Chemical and physical science technicians"
    * code = #19-4031  	
    * display = "Chemical Technicians"

  * element[+]
    * target.code = #3111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Chemical and physical science technicians"
    * code = #19-4041  	
    * display = "Geological and Petroleum Technicians"

  * element[+]
    * target.code = #3111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Chemical and physical science technicians"
    * code = #19-4099  	
    * display = "Life, Physical, and Social Science Technicians, All Other"

  * element[+]
    * target.code = #3112
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Civil engineering technicians"
    * code = #17-3022  	
    * display = "Civil Engineering Technicians"

  * element[+]
    * target.code = #3112
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Civil engineering technicians"
    * code = #17-3031  	
    * display = "Surveying and Mapping Technicians"

  * element[+]
    * target.code = #3112
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Civil engineering technicians"
    * code = #33-1021  	
    * display = "First-Line Supervisors of Fire Fighting and Prevention Workers"

  * element[+]
    * target.code = #3112
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Civil engineering technicians"
    * code = #33-2021  	
    * display = "Fire Inspectors and Investigators"

  * element[+]
    * target.code = #3112
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Civil engineering technicians"
    * code = #47-4011  	
    * display = "Construction and Building Inspectors"

  * element[+]
    * target.code = #3113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical engineering technicians"
    * code = #17-3023  	
    * display = "Electrical and Electronics Engineering Technicians"

  * element[+]
    * target.code = #3113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical engineering technicians"
    * code = #17-3024  	
    * display = "Electro-Mechanical Technicians"

  * element[+]
    * target.code = #3114
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electronics engineering technicians"
    * code = #17-3023  	
    * display = "Electrical and Electronics Engineering Technicians"

  * element[+]
    * target.code = #3115
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mechanical engineering technicians"
    * code = #17-3021  	
    * display = "Aerospace Engineering and Operations Technicians"

  * element[+]
    * target.code = #3115
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mechanical engineering technicians"
    * code = #17-3024  	
    * display = "Electro-Mechanical Technicians"

  * element[+]
    * target.code = #3115
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mechanical engineering technicians"
    * code = #17-3027  	
    * display = "Mechanical Engineering Technicians"

  * element[+]
    * target.code = #3115
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mechanical engineering technicians"
    * code = #17-3029  	
    * display = "Engineering Technicians, Except Drafters, All Other"

  * element[+]
    * target.code = #3116
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Chemical engineering technicians"
    * code = #17-3029  	
    * display = "Engineering Technicians, Except Drafters, All Other"

  * element[+]
    * target.code = #3117
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mining and metallurgical technicians"
    * code = #17-3029  	
    * display = "Engineering Technicians, Except Drafters, All Other"

  * element[+]
    * target.code = #3117
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mining and metallurgical technicians"
    * code = #19-4041  	
    * display = "Geological and Petroleum Technicians"

  * element[+]
    * target.code = #3118
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Draughtspersons"
    * code = #17-3011  	
    * display = "Architectural and Civil Drafters"

  * element[+]
    * target.code = #3118
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Draughtspersons"
    * code = #17-3012  	
    * display = "Electrical and Electronics Drafters"

  * element[+]
    * target.code = #3118
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Draughtspersons"
    * code = #17-3013  	
    * display = "Mechanical Drafters"

  * element[+]
    * target.code = #3118
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Draughtspersons"
    * code = #17-3019  	
    * display = "Drafters, All Other"

  * element[+]
    * target.code = #3118
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Draughtspersons"
    * code = #27-1013  	
    * display = "Fine Artists, Including Painters, Sculptors, and Illustrators"

  * element[+]
    * target.code = #3119
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physical and engineering science technicians not elsewhere classified"
    * code = #17-3025  	
    * display = "Environmental Engineering Technicians"

  * element[+]
    * target.code = #3119
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physical and engineering science technicians not elsewhere classified"
    * code = #17-3026  	
    * display = "Industrial Engineering Technicians"

  * element[+]
    * target.code = #3119
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physical and engineering science technicians not elsewhere classified"
    * code = #17-3029  	
    * display = "Engineering Technicians, Except Drafters, All Other"

  * element[+]
    * target.code = #3119
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physical and engineering science technicians not elsewhere classified"
    * code = #19-4051  	
    * display = "Nuclear Technicians"

  * element[+]
    * target.code = #3119
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physical and engineering science technicians not elsewhere classified"
    * code = #19-4092  	
    * display = "Forensic Science Technicians"

  * element[+]
    * target.code = #3119
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physical and engineering science technicians not elsewhere classified"
    * code = #19-4099  	
    * display = "Life, Physical, and Social Science Technicians, All Other"

  * element[+]
    * target.code = #3119
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physical and engineering science technicians not elsewhere classified"
    * code = #33-1021  	
    * display = "First-Line Supervisors of Fire Fighting and Prevention Workers"

  * element[+]
    * target.code = #3119
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physical and engineering science technicians not elsewhere classified"
    * code = #33-2021  	
    * display = "Fire Inspectors and Investigators"

  * element[+]
    * target.code = #3119
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physical and engineering science technicians not elsewhere classified"
    * code = #33-2022  	
    * display = "Forest Fire Inspectors and Prevention Specialists"

  * element[+]
    * target.code = #3119
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physical and engineering science technicians not elsewhere classified"
    * code = #53-6041  	
    * display = "Traffic Technicians"

  * element[+]
    * target.code = #3121
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mining supervisors"
    * code = #47-1011  	
    * display = "First-Line Supervisors of Construction Trades and Extraction Workers"

  * element[+]
    * target.code = #3122
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Manufacturing supervisors"
    * code = #51-1011  	
    * display = "First-Line Supervisors of Production and Operating Workers"

  * element[+]
    * target.code = #3123
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Construction supervisors"
    * code = #47-1011  	
    * display = "First-Line Supervisors of Construction Trades and Extraction Workers"

  * element[+]
    * target.code = #3131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Power production plant operators"
    * code = #51-1011  	
    * display = "First-Line Supervisors of Production and Operating Workers"

  * element[+]
    * target.code = #3131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Power production plant operators"
    * code = #51-8011  	
    * display = "Nuclear Power Reactor Operators"

  * element[+]
    * target.code = #3131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Power production plant operators"
    * code = #51-8012  	
    * display = "Power Distributors and Dispatchers"

  * element[+]
    * target.code = #3131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Power production plant operators"
    * code = #51-8013  	
    * display = "Power Plant Operators"

  * element[+]
    * target.code = #3132
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Incinerator and water treatment plant operators"
    * code = #51-1011  	
    * display = "First-Line Supervisors of Production and Operating Workers"

  * element[+]
    * target.code = #3132
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Incinerator and water treatment plant operators"
    * code = #51-8031  	
    * display = "Water and Wastewater Treatment Plant and System Operators"

  * element[+]
    * target.code = #3132
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Incinerator and water treatment plant operators"
    * code = #51-8099  	
    * display = "Plant and System Operators, All Other"

  * element[+]
    * target.code = #3132
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Incinerator and water treatment plant operators"
    * code = #53-7072  	
    * display = "Pump Operators, Except Wellhead Pumpers"

  * element[+]
    * target.code = #3133
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Chemical processing plant controllers"
    * code = #51-8091  	
    * display = "Chemical Plant and System Operators"

  * element[+]
    * target.code = #3134
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Petroleum and natural gas refining plant operators"
    * code = #51-8092  	
    * display = "Gas Plant Operators"

  * element[+]
    * target.code = #3134
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Petroleum and natural gas refining plant operators"
    * code = #51-8093  	
    * display = "Petroleum Pump System Operators, Refinery Operators, and Gaugers"

  * element[+]
    * target.code = #3134
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Petroleum and natural gas refining plant operators"
    * code = #53-7071  	
    * display = "Gas Compressor and Gas Pumping Station Operators"

  * element[+]
    * target.code = #3134
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Petroleum and natural gas refining plant operators"
    * code = #53-7072  	
    * display = "Pump Operators, Except Wellhead Pumpers"

  * element[+]
    * target.code = #3135
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal production process controllers"
    * code = #51-4051  	
    * display = "Metal-Refining Furnace Operators and Tenders"

  * element[+]
    * target.code = #3139
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Process control technicians not elsewhere classified"
    * code = #51-4012  	
    * display = "Computer Numerically Controlled Machine Tool Programmers, Metal and Plastic"

  * element[+]
    * target.code = #3141
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Life science technicians (excluding medical)"
    * code = #19-4021  	
    * display = "Biological Technicians"

  * element[+]
    * target.code = #3141
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Life science technicians (excluding medical)"
    * code = #19-4091  	
    * display = "Environmental Science and Protection Technicians, Including Health"

  * element[+]
    * target.code = #3142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Agricultural technicians"
    * code = #19-4011  	
    * display = "Agricultural and Food Science Technicians"

  * element[+]
    * target.code = #3143
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Forestry technicians"
    * code = #19-4093  	
    * display = "Forest and Conservation Technicians"

  * element[+]
    * target.code = #315
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Ship and aircraft controllers and technicians"
    * code = #53-2022  	
    * display = "Airfield Operations Specialists"

  * element[+]
    * target.code = #3151
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Ships' engineers"
    * code = #53-1031  	
    * display = "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators"

  * element[+]
    * target.code = #3151
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Ships' engineers"
    * code = #53-5031  	
    * display = "Ship Engineers"

  * element[+]
    * target.code = #3152
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Ships' deck officers and pilots"
    * code = #53-1031  	
    * display = "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators"

  * element[+]
    * target.code = #3152
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Ships' deck officers and pilots"
    * code = #53-5021  	
    * display = "Captains, Mates, and Pilots of Water Vessels"

  * element[+]
    * target.code = #3153
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Aircraft pilots and related associate professionals"
    * code = #53-1031  	
    * display = "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators"

  * element[+]
    * target.code = #3153
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Aircraft pilots and related associate professionals"
    * code = #53-2011  	
    * display = "Airline Pilots, Copilots, and Flight Engineers"

  * element[+]
    * target.code = #3153
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Aircraft pilots and related associate professionals"
    * code = #53-2012  	
    * display = "Commercial Pilots"

  * element[+]
    * target.code = #3154
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Air traffic controllers"
    * code = #53-1031  	
    * display = "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators"

  * element[+]
    * target.code = #3154
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Air traffic controllers"
    * code = #53-2021  	
    * display = "Air Traffic Controllers"

  * element[+]
    * target.code = #3155
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Air traffic safety electronics technicians"
    * code = #17-3023  	
    * display = "Electrical and Electronics Engineering Technicians"

  * element[+]
    * target.code = #3211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Medical imaging and therapeutic equipment technicians"
    * code = #29-1124  	
    * display = "Radiation Therapists"

  * element[+]
    * target.code = #3211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Medical imaging and therapeutic equipment technicians"
    * code = #29-2032  	
    * display = "Diagnostic Medical Sonographers"

  * element[+]
    * target.code = #3211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Medical imaging and therapeutic equipment technicians"
    * code = #29-2033  	
    * display = "Nuclear Medicine Technologists"

  * element[+]
    * target.code = #3211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Medical imaging and therapeutic equipment technicians"
    * code = #29-2034  	
    * display = "Radiologic Technologists"

  * element[+]
    * target.code = #3211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Medical imaging and therapeutic equipment technicians"
    * code = #29-2035  	
    * display = "Magnetic Resonance Imaging Technologists"

  * element[+]
    * target.code = #3212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Medical and Pathology Laboratory Technicians"
    * code = #29-2011  	
    * display = "Medical and Clinical Laboratory Technologists"

  * element[+]
    * target.code = #3212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Medical and Pathology Laboratory Technicians"
    * code = #29-2012  	
    * display = "Medical and Clinical Laboratory Technicians"

  * element[+]
    * target.code = #3213
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Pharmaceutical technicians and assistants"
    * code = #29-2052  	
    * display = "Pharmacy Technicians"

  * element[+]
    * target.code = #3214
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Medical and dental prosthetic technicians"
    * code = #29-2091  	
    * display = "Orthotists and Prosthetists"

  * element[+]
    * target.code = #3214
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Medical and dental prosthetic technicians"
    * code = #29-2092  	
    * display = "Hearing Aid Specialists"

  * element[+]
    * target.code = #3214
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Medical and dental prosthetic technicians"
    * code = #51-9081  	
    * display = "Dental Laboratory Technicians"

  * element[+]
    * target.code = #3214
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Medical and dental prosthetic technicians"
    * code = #51-9082  	
    * display = "Medical Appliance Technicians"

  * element[+]
    * target.code = #3221
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Nursing associate professionals"
    * code = #29-2061  	
    * display = "Licensed Practical and Licensed Vocational Nurses"

  * element[+]
    * target.code = #3222
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Midwifery associate professionals"
    * code = #29-9099  	
    * display = "Healthcare Practitioners and Technical Workers, All Other"

  * element[+]
    * target.code = #3230
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Traditional and complementary medicine associate professionals"
    * code = #29-9099  	
    * display = "Healthcare Practitioners and Technical Workers, All Other"

  * element[+]
    * target.code = #3240
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Veterinary technicians and assistants"
    * code = #29-2056  	
    * display = "Veterinary Technologists and Technicians"

  * element[+]
    * target.code = #3240
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Veterinary technicians and assistants"
    * code = #31-9096  	
    * display = "Veterinary Assistants and Laboratory Animal Caretakers"

  * element[+]
    * target.code = #3251
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Dental assistants and therapists"
    * code = #29-2021  	
    * display = "Dental Hygienists"

  * element[+]
    * target.code = #3251
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Dental assistants and therapists"
    * code = #31-9091  	
    * display = "Dental Assistants"

  * element[+]
    * target.code = #3252
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Medical records and health information technicians"
    * code = #29-2071  	
    * display = "Medical Records and Health Information Technicians"

  * element[+]
    * target.code = #3253
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Community health workers"
    * code = #21-1094  	
    * display = "Community Health Workers"

  * element[+]
    * target.code = #3254
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Dispensing opticians"
    * code = #29-2081  	
    * display = "Opticians, Dispensing"

  * element[+]
    * target.code = #3255
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physiotherapy technicians and assistants"
    * code = #29-1199  	
    * display = "Health Diagnosing and Treating Practitioners, All Other"

  * element[+]
    * target.code = #3255
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physiotherapy technicians and assistants"
    * code = #31-2021  	
    * display = "Physical Therapist Assistants"

  * element[+]
    * target.code = #3255
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Physiotherapy technicians and assistants"
    * code = #31-9011  	
    * display = "Massage Therapists"

  * element[+]
    * target.code = #3256
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Medical assistants"
    * code = #29-2057  	
    * display = "Ophthalmic Medical Technicians"

  * element[+]
    * target.code = #3256
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Medical assistants"
    * code = #31-9092  	
    * display = "Medical Assistants"

  * element[+]
    * target.code = #3257
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Environmental and occupational health inspectors and associates"
    * code = #29-9012  	
    * display = "Occupational Health and Safety Technicians"

  * element[+]
    * target.code = #3257
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Environmental and occupational health inspectors and associates"
    * code = #45-2011  	
    * display = "Agricultural Inspectors"

  * element[+]
    * target.code = #3257
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Environmental and occupational health inspectors and associates"
    * code = #53-1031  	
    * display = "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators"

  * element[+]
    * target.code = #3257
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Environmental and occupational health inspectors and associates"
    * code = #53-6051  	
    * display = "Transportation Inspectors"

  * element[+]
    * target.code = #3258
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Ambulance workers"
    * code = #29-2041  	
    * display = "Emergency Medical Technicians and Paramedics"

  * element[+]
    * target.code = #3259
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health associate professionals not elsewhere classified"
    * code = #29-1126  	
    * display = "Respiratory Therapists"

  * element[+]
    * target.code = #3259
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health associate professionals not elsewhere classified"
    * code = #29-2031  	
    * display = "Cardiovascular Technologists and Technicians"

  * element[+]
    * target.code = #3259
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health associate professionals not elsewhere classified"
    * code = #29-2051  	
    * display = "Dietetic Technicians"

  * element[+]
    * target.code = #3259
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health associate professionals not elsewhere classified"
    * code = #29-2053  	
    * display = "Psychiatric Technicians"

  * element[+]
    * target.code = #3259
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health associate professionals not elsewhere classified"
    * code = #29-2054  	
    * display = "Respiratory Therapy Technicians"

  * element[+]
    * target.code = #3259
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health associate professionals not elsewhere classified"
    * code = #29-2055  	
    * display = "Surgical Technologists"

  * element[+]
    * target.code = #3259
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health associate professionals not elsewhere classified"
    * code = #29-2099  	
    * display = "Health Technologists and Technicians, All Other"

  * element[+]
    * target.code = #3259
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health associate professionals not elsewhere classified"
    * code = #29-9099  	
    * display = "Healthcare Practitioners and Technical Workers, All Other"

  * element[+]
    * target.code = #3259
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health associate professionals not elsewhere classified"
    * code = #31-2011  	
    * display = "Occupational Therapy Assistants"

  * element[+]
    * target.code = #3259
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health associate professionals not elsewhere classified"
    * code = #31-9099  	
    * display = "Healthcare Support Workers, All Other"

  * element[+]
    * target.code = #3311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Securities and finance dealers and brokers"
    * code = #41-1012  	
    * display = "First-Line Supervisors of Non-Retail Sales Workers"

  * element[+]
    * target.code = #3311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Securities and finance dealers and brokers"
    * code = #41-3031  	
    * display = "Securities, Commodities, and Financial Services Sales Agents"

  * element[+]
    * target.code = #3312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Credit and loans officers"
    * code = #13-2071  	
    * display = "Credit Counselors"

  * element[+]
    * target.code = #3312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Credit and loans officers"
    * code = #13-2072  	
    * display = "Loan Officers"

  * element[+]
    * target.code = #3313
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Accounting associate professionals"
    * code = #43-3031  	
    * display = "Bookkeeping, Accounting, and Auditing Clerks"

  * element[+]
    * target.code = #3314
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Statistical, mathematical and related associate professionals"
    * code = #15-2091  	
    * display = "Mathematical Technicians"

  * element[+]
    * target.code = #3314
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Statistical, mathematical and related associate professionals"
    * code = #15-2099  	
    * display = "Mathematical Science Occupations, All Other"

  * element[+]
    * target.code = #3314
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Statistical, mathematical and related associate professionals"
    * code = #19-4061  	
    * display = "Social Science Research Assistants"

  * element[+]
    * target.code = #3314
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Statistical, mathematical and related associate professionals"
    * code = #43-9111  	
    * display = "Statistical Assistants"

  * element[+]
    * target.code = #3315
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Valuers and loss assessors"
    * code = #13-1031  	
    * display = "Claims Adjusters, Examiners, and Investigators"

  * element[+]
    * target.code = #3315
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Valuers and loss assessors"
    * code = #13-1032  	
    * display = "Insurance Appraisers, Auto Damage"

  * element[+]
    * target.code = #3315
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Valuers and loss assessors"
    * code = #13-2021  	
    * display = "Appraisers and Assessors of Real Estate"

  * element[+]
    * target.code = #3321
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Insurance representatives"
    * code = #13-2053  	
    * display = "Insurance Underwriters"

  * element[+]
    * target.code = #3321
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Insurance representatives"
    * code = #41-1012  	
    * display = "First-Line Supervisors of Non-Retail Sales Workers"

  * element[+]
    * target.code = #3321
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Insurance representatives"
    * code = #41-3021  	
    * display = "Insurance Sales Agents"

  * element[+]
    * target.code = #3322
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Commercial sales representatives"
    * code = #41-1012  	
    * display = "First-Line Supervisors of Non-Retail Sales Workers"

  * element[+]
    * target.code = #3322
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Commercial sales representatives"
    * code = #41-3099  	
    * display = "Sales Representatives, Services, All Other"

  * element[+]
    * target.code = #3322
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Commercial sales representatives"
    * code = #41-4011  	
    * display = "Sales Representatives, Wholesale and Manufacturing, Technical and Scientific Products"

  * element[+]
    * target.code = #3322
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Commercial sales representatives"
    * code = #41-4012  	
    * display = "Sales Representatives, Wholesale and Manufacturing, Except Technical and Scientific Products"

  * element[+]
    * target.code = #3323
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Buyers"
    * code = #13-1021  	
    * display = "Buyers and Purchasing Agents, Farm Products"

  * element[+]
    * target.code = #3323
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Buyers"
    * code = #13-1022  	
    * display = "Wholesale and Retail Buyers, Except Farm Products"

  * element[+]
    * target.code = #3323
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Buyers"
    * code = #13-1023  	
    * display = "Purchasing Agents, Except Wholesale, Retail, and Farm Products"

  * element[+]
    * target.code = #3324
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Trade brokers"
    * code = #41-1012  	
    * display = "First-Line Supervisors of Non-Retail Sales Workers"

  * element[+]
    * target.code = #3324
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Trade brokers"
    * code = #41-3031  	
    * display = "Securities, Commodities, and Financial Services Sales Agents"

  * element[+]
    * target.code = #3324
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Trade brokers"
    * code = #43-5011  	
    * display = "Cargo and Freight Agents"

  * element[+]
    * target.code = #3331
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Clearing and Forwarding Aents"
    * code = #43-5011  	
    * display = "Cargo and Freight Agents"

  * element[+]
    * target.code = #3331
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Clearing and Forwarding Aents"
    * code = #43-5071  	
    * display = "Shipping, Receiving, and Traffic Clerks"

  * element[+]
    * target.code = #3332
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Conference and event planners"
    * code = #13-1121  	
    * display = "Meeting, Convention, and Event Planners"

  * element[+]
    * target.code = #3333
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Employment agents and contractors"
    * code = #13-1071  	
    * display = "Human Resources Specialists"

  * element[+]
    * target.code = #3333
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Employment agents and contractors"
    * code = #13-1074  	
    * display = "Farm Labor Contractors"

  * element[+]
    * target.code = #3334
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Real estate agents and property managers"
    * code = #11-9141  	
    * display = "Property, Real Estate, and Community Association Managers"

  * element[+]
    * target.code = #3334
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Real estate agents and property managers"
    * code = #41-1012  	
    * display = "First-Line Supervisors of Non-Retail Sales Workers"

  * element[+]
    * target.code = #3334
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Real estate agents and property managers"
    * code = #41-9021  	
    * display = "Real Estate Brokers"

  * element[+]
    * target.code = #3334
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Real estate agents and property managers"
    * code = #41-9022  	
    * display = "Real Estate Sales Agents"

  * element[+]
    * target.code = #3339
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Business services agents not elsewhere classified"
    * code = #13-1011  	
    * display = "Agents and Business Managers of Artists, Performers, and Athletes"

  * element[+]
    * target.code = #3339
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Business services agents not elsewhere classified"
    * code = #13-1051  	
    * display = "Cost Estimators"

  * element[+]
    * target.code = #3339
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Business services agents not elsewhere classified"
    * code = #13-1199  	
    * display = "Business Operations Specialists, All Other"

  * element[+]
    * target.code = #3339
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Business services agents not elsewhere classified"
    * code = #13-2099  	
    * display = "Financial Specialists, All Other"

  * element[+]
    * target.code = #3339
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Business services agents not elsewhere classified"
    * code = #41-1012  	
    * display = "First-Line Supervisors of Non-Retail Sales Workers"

  * element[+]
    * target.code = #3339
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Business services agents not elsewhere classified"
    * code = #41-3011  	
    * display = "Advertising Sales Agents"

  * element[+]
    * target.code = #3339
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Business services agents not elsewhere classified"
    * code = #41-3041  	
    * display = "Travel Agents"

  * element[+]
    * target.code = #3339
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Business services agents not elsewhere classified"
    * code = #41-9099  	
    * display = "Sales and Related Workers, All Other"

  * element[+]
    * target.code = #3341
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Office supervisors"
    * code = #43-1011  	
    * display = "First-Line Supervisors of Office and Administrative Support Workers"

  * element[+]
    * target.code = #3342
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Legal secretaries"
    * code = #43-6012  	
    * display = "Legal Secretaries"

  * element[+]
    * target.code = #3343
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Administrative and executive secretaries"
    * code = #23-2091  	
    * display = "Court Reporters"

  * element[+]
    * target.code = #3343
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Administrative and executive secretaries"
    * code = #43-6011  	
    * display = "Executive Secretaries and Executive Administrative Assistants"

  * element[+]
    * target.code = #3344
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Medical secretaries"
    * code = #31-9094  	
    * display = "Medical Transcriptionists"

  * element[+]
    * target.code = #3344
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Medical secretaries"
    * code = #43-6013  	
    * display = "Medical Secretaries"

  * element[+]
    * target.code = #3351
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Customs and border inspectors"
    * code = #13-1041  	
    * display = "Compliance Officers"

  * element[+]
    * target.code = #3351
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Customs and border inspectors"
    * code = #33-1012  	
    * display = "First-Line Supervisors of Police and Detectives"

  * element[+]
    * target.code = #3351
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Customs and border inspectors"
    * code = #33-3051  	
    * display = "Police and Sheriff's Patrol Officers"

  * element[+]
    * target.code = #3352
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Government tax and excise officials"
    * code = #13-2081  	
    * display = "Tax Examiners and Collectors, and Revenue Agents"

  * element[+]
    * target.code = #3353
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Government social benefits officials"
    * code = #13-1041  	
    * display = "Compliance Officers"

  * element[+]
    * target.code = #3353
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Government social benefits officials"
    * code = #43-4061  	
    * display = "Eligibility Interviewers, Government Programs"

  * element[+]
    * target.code = #3354
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Government licensing officials"
    * code = #13-1041  	
    * display = "Compliance Officers"

  * element[+]
    * target.code = #3354
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Government licensing officials"
    * code = #43-4031  	
    * display = "Court, Municipal, and License Clerks"

  * element[+]
    * target.code = #3355
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Police inspectors and detectives"
    * code = #33-1012  	
    * display = "First-Line Supervisors of Police and Detectives"

  * element[+]
    * target.code = #3355
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Police inspectors and detectives"
    * code = #33-3021  	
    * display = "Detectives and Criminal Investigators"

  * element[+]
    * target.code = #3359
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Government Regulatory AssociatePprofessionals Not Elsewhere Classified"
    * code = #45-2011  	
    * display = "Agricultural Inspectors"

  * element[+]
    * target.code = #3411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Legal and related associate professionals"
    * code = #23-1012  	
    * display = "Judicial Law Clerks"

  * element[+]
    * target.code = #3411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Legal and related associate professionals"
    * code = #23-2011  	
    * display = "Paralegals and Legal Assistants"

  * element[+]
    * target.code = #3411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Legal and related associate professionals"
    * code = #23-2093  	
    * display = "Title Examiners, Abstractors, and Searchers"

  * element[+]
    * target.code = #3411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Legal and related associate professionals"
    * code = #23-2099  	
    * display = "Legal Support Workers, All Other"

  * element[+]
    * target.code = #3411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Legal and related associate professionals"
    * code = #33-3011  	
    * display = "Bailiffs"

  * element[+]
    * target.code = #3411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Legal and related associate professionals"
    * code = #33-9021  	
    * display = "Private Detectives and Investigators"

  * element[+]
    * target.code = #3411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Legal and related associate professionals"
    * code = #33-9031  	
    * display = "Gaming Surveillance Officers and Gaming Investigators"

  * element[+]
    * target.code = #3412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Social work associate professionals"
    * code = #21-1093  	
    * display = "Social and Human Service Assistants"

  * element[+]
    * target.code = #3413
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Religious associate professionals"
    * code = #21-2099  	
    * display = "Religious Workers, All Other"

  * element[+]
    * target.code = #3421
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Athletes and sports players"
    * code = #27-2021  	
    * display = "Athletes and Sports Competitors"

  * element[+]
    * target.code = #3422
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sports coaches, instructors and officials"
    * code = #25-3021  	
    * display = "Self-Enrichment Education Teachers"

  * element[+]
    * target.code = #3422
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sports coaches, instructors and officials"
    * code = #27-2022  	
    * display = "Coaches and Scouts"

  * element[+]
    * target.code = #3422
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sports coaches, instructors and officials"
    * code = #27-2023  	
    * display = "Umpires, Referees, and Other Sports Officials"

  * element[+]
    * target.code = #3423
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fitness and Recreation Instructors and Programme Leaders"
    * code = #25-3021  	
    * display = "Self-Enrichment Education Teachers"

  * element[+]
    * target.code = #3423
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fitness and Recreation Instructors and Programme Leaders"
    * code = #29-9091  	
    * display = "Athletic Trainers"

  * element[+]
    * target.code = #3423
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fitness and Recreation Instructors and Programme Leaders"
    * code = #39-1021  	
    * display = "First-Line Supervisors of Personal Service Workers"

  * element[+]
    * target.code = #3423
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fitness and Recreation Instructors and Programme Leaders"
    * code = #39-9031  	
    * display = "Fitness Trainers and Aerobics Instructors"

  * element[+]
    * target.code = #3431
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Photographers"
    * code = #27-4021  	
    * display = "Photographers"

  * element[+]
    * target.code = #3432
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Interior designers and decorators"
    * code = #27-1025  	
    * display = "Interior Designers"

  * element[+]
    * target.code = #3432
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Interior designers and decorators"
    * code = #27-1026  	
    * display = "Merchandise Displayers and Window Trimmers"

  * element[+]
    * target.code = #3432
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Interior designers and decorators"
    * code = #27-1027  	
    * display = "Set and Exhibit Designers"

  * element[+]
    * target.code = #3433
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Gallery, museum and library technicians"
    * code = #25-4013  	
    * display = "Museum Technicians and Conservators"

  * element[+]
    * target.code = #3433
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Gallery, museum and library technicians"
    * code = #25-4031  	
    * display = "Library Technicians"

  * element[+]
    * target.code = #3433
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Gallery, museum and library technicians"
    * code = #27-1012  	
    * display = "Craft Artists"

  * element[+]
    * target.code = #3434
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Chefs"
    * code = #35-1011  	
    * display = "Chefs and Head Cooks"

  * element[+]
    * target.code = #3434
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Chefs"
    * code = #35-1012  	
    * display = "First-Line Supervisors of Food Preparation and Serving Workers"

  * element[+]
    * target.code = #3435
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Other artistic and cultural associate professionals"
    * code = #27-1019  	
    * display = "Artists and Related Workers, All Other"

  * element[+]
    * target.code = #3435
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Other artistic and cultural associate professionals"
    * code = #27-2099  	
    * display = "Entertainers and Performers, Sports and Related Workers, All Other"

  * element[+]
    * target.code = #3435
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Other artistic and cultural associate professionals"
    * code = #27-3099  	
    * display = "Media and Communication Workers, All Other"

  * element[+]
    * target.code = #3435
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Other artistic and cultural associate professionals"
    * code = #27-4099  	
    * display = "Media and Communication Equipment Workers, All Other"

  * element[+]
    * target.code = #3435
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Other artistic and cultural associate professionals"
    * code = #39-3092  	
    * display = "Costume Attendants"

  * element[+]
    * target.code = #3435
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Other artistic and cultural associate professionals"
    * code = #39-3099  	
    * display = "Entertainment Attendants and Related Workers, All Other"

  * element[+]
    * target.code = #3511
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Information and communications technology operations technicians"
    * code = #43-9011  	
    * display = "Computer Operators"

  * element[+]
    * target.code = #3512
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Information and communications technology user support technicians"
    * code = #15-1151  	
    * display = "Computer User Support Specialists"

  * element[+]
    * target.code = #3513
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Computer network and systems technicians"
    * code = #15-1152  	
    * display = "Computer Network Support Specialists"

  * element[+]
    * target.code = #3514
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Web technicians"
    * code = #15-1134  	
    * display = "Web Developers"

  * element[+]
    * target.code = #3514
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Web technicians"
    * code = #15-1142  	
    * display = "Network and Computer Systems Administrators"

  * element[+]
    * target.code = #3521
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Broadcasting and audio-visual technicians"
    * code = #27-4011  	
    * display = "Audio and Video Equipment Technicians"

  * element[+]
    * target.code = #3521
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Broadcasting and audio-visual technicians"
    * code = #27-4012  	
    * display = "Broadcast Technicians"

  * element[+]
    * target.code = #3521
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Broadcasting and audio-visual technicians"
    * code = #27-4013  	
    * display = "Radio Operators"

  * element[+]
    * target.code = #3521
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Broadcasting and audio-visual technicians"
    * code = #27-4014  	
    * display = "Sound Engineering Technicians"

  * element[+]
    * target.code = #3521
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Broadcasting and audio-visual technicians"
    * code = #27-4031  	
    * display = "Camera Operators, Television, Video, and Motion Picture"

  * element[+]
    * target.code = #3521
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Broadcasting and audio-visual technicians"
    * code = #27-4099  	
    * display = "Media and Communication Equipment Workers, All Other"

  * element[+]
    * target.code = #3522
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Telecommunications engineering technicians"
    * code = #17-3023  	
    * display = "Electrical and Electronics Engineering Technicians"

  * element[+]
    * target.code = #4110
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "General office clerks"
    * code = #43-3061  	
    * display = "Procurement Clerks"

  * element[+]
    * target.code = #4110
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "General office clerks"
    * code = #43-9061  	
    * display = "Office Clerks, General"

  * element[+]
    * target.code = #4120
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Secretaries (general)"
    * code = #43-6014  	
    * display = "Secretaries and Administrative Assistants, Except Legal, Medical, and Executive"

  * element[+]
    * target.code = #4131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Typists and word processing operators"
    * code = #43-9022  	
    * display = "Word Processors and Typists"

  * element[+]
    * target.code = #4132
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Data entry clerks"
    * code = #43-9021  	
    * display = "Data Entry Keyers"

  * element[+]
    * target.code = #4211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bank tellers and related clerks"
    * code = #43-3071  	
    * display = "Tellers"

  * element[+]
    * target.code = #4211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bank tellers and related clerks"
    * code = #43-5051  	
    * display = "Postal Service Clerks"

  * element[+]
    * target.code = #4212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bookmakers, croupiers and related gaming workers"
    * code = #39-1011  	
    * display = "Gaming Supervisors"

  * element[+]
    * target.code = #4212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bookmakers, croupiers and related gaming workers"
    * code = #39-1012  	
    * display = "Slot Supervisors"

  * element[+]
    * target.code = #4212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bookmakers, croupiers and related gaming workers"
    * code = #39-3011  	
    * display = "Gaming Dealers"

  * element[+]
    * target.code = #4212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bookmakers, croupiers and related gaming workers"
    * code = #39-3012  	
    * display = "Gaming and Sports Book Writers and Runners"

  * element[+]
    * target.code = #4212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bookmakers, croupiers and related gaming workers"
    * code = #39-3019  	
    * display = "Gaming Service Workers, All Other"

  * element[+]
    * target.code = #4212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bookmakers, croupiers and related gaming workers"
    * code = #43-3041  	
    * display = "Gaming Cage Workers"

  * element[+]
    * target.code = #4213
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Pawnbrokers and money-lenders"
    * code = #41-9099  	
    * display = "Sales and Related Workers, All Other"

  * element[+]
    * target.code = #4213
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Pawnbrokers and money-lenders"
    * code = #43-3099  	
    * display = "Financial Clerks, All Other"

  * element[+]
    * target.code = #4214
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Debt Collectors and Related Workers"
    * code = #13-1131  	
    * display = "Fundraisers"

  * element[+]
    * target.code = #4214
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Debt Collectors and Related Workers"
    * code = #43-3011  	
    * display = "Bill and Account Collectors"

  * element[+]
    * target.code = #4221
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Travel consultants and clerks"
    * code = #41-1012  	
    * display = "First-Line Supervisors of Non-Retail Sales Workers"

  * element[+]
    * target.code = #4221
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Travel consultants and clerks"
    * code = #41-3041  	
    * display = "Travel Agents"

  * element[+]
    * target.code = #4221
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Travel consultants and clerks"
    * code = #43-4181  	
    * display = "Reservation and Transportation Ticket Agents and Travel Clerks"

  * element[+]
    * target.code = #4222
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Contact centre information clerks"
    * code = #43-4051  	
    * display = "Customer Service Representatives"

  * element[+]
    * target.code = #4222
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Contact centre information clerks"
    * code = #43-4171  	
    * display = "Receptionists and Information Clerks"

  * element[+]
    * target.code = #4223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Telephone switchboard operators"
    * code = #43-2011  	
    * display = "Switchboard Operators, Including Answering Service"

  * element[+]
    * target.code = #4223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Telephone switchboard operators"
    * code = #43-2021  	
    * display = "Telephone Operators"

  * element[+]
    * target.code = #4224
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Hotel receptionists"
    * code = #39-6012  	
    * display = "Concierges"

  * element[+]
    * target.code = #4224
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Hotel receptionists"
    * code = #43-4081  	
    * display = "Hotel, Motel, and Resort Desk Clerks"

  * element[+]
    * target.code = #4225
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Inquiry Clerks"
    * code = #43-4021  	
    * display = "Correspondence Clerks"

  * element[+]
    * target.code = #4225
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Inquiry Clerks"
    * code = #43-4171  	
    * display = "Receptionists and Information Clerks"

  * element[+]
    * target.code = #4226
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Receptionists (general)"
    * code = #43-4171  	
    * display = "Receptionists and Information Clerks"

  * element[+]
    * target.code = #4227
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Survey and market research interviewers"
    * code = #43-4111  	
    * display = "Interviewers, Except Eligibility and Loan"

  * element[+]
    * target.code = #4229
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Client information workers not elsewhere classified"
    * code = #43-2099  	
    * display = "Communications Equipment Operators, All Other"

  * element[+]
    * target.code = #4229
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Client information workers not elsewhere classified"
    * code = #43-4061  	
    * display = "Eligibility Interviewers, Government Programs"

  * element[+]
    * target.code = #4229
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Client information workers not elsewhere classified"
    * code = #43-4199  	
    * display = "Information and Record Clerks, All Other"

  * element[+]
    * target.code = #4311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Accounting and bookkeeping clerks"
    * code = #43-3021  	
    * display = "Billing and Posting Clerks"

  * element[+]
    * target.code = #4311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Accounting and bookkeeping clerks"
    * code = #43-3031  	
    * display = "Bookkeeping, Accounting, and Auditing Clerks"

  * element[+]
    * target.code = #4312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Statistical, finance and insurance clerks"
    * code = #43-3099  	
    * display = "Financial Clerks, All Other"

  * element[+]
    * target.code = #4312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Statistical, finance and insurance clerks"
    * code = #43-4011  	
    * display = "Brokerage Clerks"

  * element[+]
    * target.code = #4312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Statistical, finance and insurance clerks"
    * code = #43-4041  	
    * display = "Credit Authorizers, Checkers, and Clerks"

  * element[+]
    * target.code = #4312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Statistical, finance and insurance clerks"
    * code = #43-4131  	
    * display = "Loan Interviewers and Clerks"

  * element[+]
    * target.code = #4312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Statistical, finance and insurance clerks"
    * code = #43-4141  	
    * display = "New Accounts Clerks"

  * element[+]
    * target.code = #4312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Statistical, finance and insurance clerks"
    * code = #43-9041  	
    * display = "Insurance Claims and Policy Processing Clerks"

  * element[+]
    * target.code = #4313
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Payroll clerks"
    * code = #43-3051  	
    * display = "Payroll and Timekeeping Clerks"

  * element[+]
    * target.code = #4321
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Stock clerks"
    * code = #43-5071  	
    * display = "Shipping, Receiving, and Traffic Clerks"

  * element[+]
    * target.code = #4321
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Stock clerks"
    * code = #43-5081  	
    * display = "Stock Clerks and Order Fillers"

  * element[+]
    * target.code = #4321
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Stock clerks"
    * code = #43-5111  	
    * display = "Weighers, Measurers, Checkers, and Samplers, Recordkeeping"

  * element[+]
    * target.code = #4322
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Production clerks"
    * code = #43-5061  	
    * display = "Production, Planning, and Expediting Clerks"

  * element[+]
    * target.code = #4323
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Transport clerks"
    * code = #43-5032  	
    * display = "Dispatchers, Except Police, Fire, and Ambulance"

  * element[+]
    * target.code = #4411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Library clerks"
    * code = #25-4031  	
    * display = "Library Technicians"

  * element[+]
    * target.code = #4411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Library clerks"
    * code = #43-4121  	
    * display = "Library Assistants, Clerical"

  * element[+]
    * target.code = #4412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mail carriers and sorting clerks"
    * code = #43-5021  	
    * display = "Couriers and Messengers"

  * element[+]
    * target.code = #4412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mail carriers and sorting clerks"
    * code = #43-5051  	
    * display = "Postal Service Clerks"

  * element[+]
    * target.code = #4412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mail carriers and sorting clerks"
    * code = #43-5052  	
    * display = "Postal Service Mail Carriers"

  * element[+]
    * target.code = #4412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mail carriers and sorting clerks"
    * code = #43-5053  	
    * display = "Postal Service Mail Sorters, Processors, and Processing Machine Operators"

  * element[+]
    * target.code = #4412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mail carriers and sorting clerks"
    * code = #43-9051  	
    * display = "Mail Clerks and Mail Machine Operators, Except Postal Service"

  * element[+]
    * target.code = #4413
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Coding, Proofreading and Related Clerks"		
    * code = #43-9081  	
    * display = "Proofreaders and Copy Markers"

  * element[+]
    * target.code = #4414
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Scribes and related workers"
    * code = #39-1021  	
    * display = "First-Line Supervisors of Personal Service Workers"

  * element[+]
    * target.code = #4414
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Scribes and related workers"
    * code = #39-9021  	
    * display = "Personal Care Aides"

  * element[+]
    * target.code = #4415
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Filing and copying clerks"
    * code = #43-4071  	
    * display = "File Clerks"

  * element[+]
    * target.code = #4415
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Filing and copying clerks"
    * code = #43-9071  	
    * display = "Office Machine Operators, Except Computer"

  * element[+]
    * target.code = #4416
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personnel clerks"
    * code = #43-4161  	
    * display = "Human Resources Assistants, Except Payroll and Timekeeping"

  * element[+]
    * target.code = #4419
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Clerical support workers not elsewhere classified"
    * code = #43-4021  	
    * display = "Correspondence Clerks"

  * element[+]
    * target.code = #4419
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Clerical support workers not elsewhere classified"
    * code = #43-4151  	
    * display = "Order Clerks"

  * element[+]
    * target.code = #4419
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Clerical support workers not elsewhere classified"
    * code = #43-4199  	
    * display = "Information and Record Clerks, All Other"

  * element[+]
    * target.code = #4419
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Clerical support workers not elsewhere classified"
    * code = #43-9199  	
    * display = "Office and Administrative Support Workers, All Other"

  * element[+]
    * target.code = #5111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Travel attendants and travel stewards"
    * code = #53-1031  	
    * display = "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators"

  * element[+]
    * target.code = #5111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Travel attendants and travel stewards"
    * code = #53-2031  	
    * display = "Flight Attendants"

  * element[+]
    * target.code = #5111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Travel attendants and travel stewards"
    * code = #53-6061  	
    * display = "Transportation Attendants, Except Flight Attendants"

  * element[+]
    * target.code = #5112
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Transport conductors"
    * code = #53-1031  	
    * display = "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators"

  * element[+]
    * target.code = #5112
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Transport conductors"
    * code = #53-6061  	
    * display = "Transportation Attendants, Except Flight Attendants"

  * element[+]
    * target.code = #5113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Travel guides"
    * code = #39-1021  	
    * display = "First-Line Supervisors of Personal Service Workers"

  * element[+]
    * target.code = #5113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Travel guides"
    * code = #39-7011  	
    * display = "Tour Guides and Escorts"

  * element[+]
    * target.code = #5113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Travel guides"
    * code = #39-7012  	
    * display = "Travel Guides"

  * element[+]
    * target.code = #5120
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cooks"
    * code = #35-1012  	
    * display = "First-Line Supervisors of Food Preparation and Serving Workers"

  * element[+]
    * target.code = #5120
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cooks"
    * code = #35-2012  	
    * display = "Cooks, Institution and Cafeteria"

  * element[+]
    * target.code = #5120
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cooks"
    * code = #35-2013  	
    * display = "Cooks, Private Household"

  * element[+]
    * target.code = #5120
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cooks"
    * code = #35-2014  	
    * display = "Cooks, Restaurant"

  * element[+]
    * target.code = #5120
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cooks"
    * code = #35-2015  	
    * display = "Cooks, Short Order"

  * element[+]
    * target.code = #5120
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cooks"
    * code = #35-2019  	
    * display = "Cooks, All Other"

  * element[+]
    * target.code = #5131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Waiters"
    * code = #35-3031  	
    * display = "Waiters and Waitresses"

  * element[+]
    * target.code = #5131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Waiters"
    * code = #35-3041  	
    * display = "Food Servers, Nonrestaurant"

  * element[+]
    * target.code = #5132
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bartenders"
    * code = #35-3011  	
    * display = "Bartenders"

  * element[+]
    * target.code = #5141
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Hairdressers"
    * code = #39-1021  	
    * display = "First-Line Supervisors of Personal Service Workers"

  * element[+]
    * target.code = #5141
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Hairdressers"
    * code = #39-5011  	
    * display = "Barbers"

  * element[+]
    * target.code = #5141
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Hairdressers"
    * code = #39-5012  	
    * display = "Hairdressers, Hairstylists, and Cosmetologists"

  * element[+]
    * target.code = #5142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Beauticians and related workers"
    * code = #39-1021  	
    * display = "First-Line Supervisors of Personal Service Workers"

  * element[+]
    * target.code = #5142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Beauticians and related workers"
    * code = #39-5012  	
    * display = "Hairdressers, Hairstylists, and Cosmetologists"

  * element[+]
    * target.code = #5142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Beauticians and related workers"
    * code = #39-5091  	
    * display = "Makeup Artists, Theatrical and Performance"

  * element[+]
    * target.code = #5142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Beauticians and related workers"
    * code = #39-5092  	
    * display = "Manicurists and Pedicurists"

  * element[+]
    * target.code = #5142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Beauticians and related workers"
    * code = #39-5093  	
    * display = "Shampooers"

  * element[+]
    * target.code = #5142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Beauticians and related workers"
    * code = #39-5094  	
    * display = "Skincare Specialists"

  * element[+]
    * target.code = #5151
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cleaning and housekeeping supervisors in offices, hotels and other establishments"
    * code = #37-1011  	
    * display = "First-Line Supervisors of Housekeeping and Janitorial Workers"

  * element[+]
    * target.code = #5152
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Domestic housekeepers"
    * code = #37-1011  	
    * display = "First-Line Supervisors of Housekeeping and Janitorial Workers"

  * element[+]
    * target.code = #5152
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Domestic housekeepers"
    * code = #39-9099  	
    * display = "Personal Care and Service Workers, All Other"

  * element[+]
    * target.code = #5153
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building caretakers"
    * code = #37-2011  	
    * display = "Janitors and Cleaners, Except Maids and Housekeeping Cleaners"

  * element[+]
    * target.code = #5161
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Astrologers, fortune-tellers and related workers"
    * code = #27-2099  	
    * display = "Entertainers and Performers, Sports and Related Workers, All Other"

  * element[+]
    * target.code = #5162
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Companions and valets"
    * code = #39-1021  	
    * display = "First-Line Supervisors of Personal Service Workers"

  * element[+]
    * target.code = #5162
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Companions and valets"
    * code = #39-9021  	
    * display = "Personal Care Aides"

  * element[+]
    * target.code = #5162
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Companions and valets"
    * code = #39-9099  	
    * display = "Personal Care and Service Workers, All Other"

  * element[+]
    * target.code = #5163
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Undertakers and embalmers"
    * code = #39-4011  	
    * display = "Embalmers"

  * element[+]
    * target.code = #5163
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Undertakers and embalmers"
    * code = #39-4021  	
    * display = "Funeral Attendants"

  * element[+]
    * target.code = #5163
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Undertakers and embalmers"
    * code = #39-4031  	
    * display = "Morticians, Undertakers and Funeral Directors"

  * element[+]
    * target.code = #5164
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Pet groomers and animal care workers"
    * code = #31-9096  	
    * display = "Veterinary Assistants and Laboratory Animal Caretakers"

  * element[+]
    * target.code = #5164
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Pet groomers and animal care workers"
    * code = #39-1021  	
    * display = "First-Line Supervisors of Personal Service Workers"

  * element[+]
    * target.code = #5164
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Pet groomers and animal care workers"
    * code = #39-2011  	
    * display = "Animal Trainers"

  * element[+]
    * target.code = #5164
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Pet groomers and animal care workers"
    * code = #39-2021  	
    * display = "Nonfarm Animal Caretakers"

  * element[+]
    * target.code = #5165
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Driving instructors"
    * code = #25-3021  	
    * display = "Self-Enrichment Education Teachers"

  * element[+]
    * target.code = #5169
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personal services workers not elsewhere classified"
    * code = #35-9031  	
    * display = "Hosts and Hostesses, Restaurant, Lounge, and Coffee Shop"

  * element[+]
    * target.code = #5169
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personal services workers not elsewhere classified"
    * code = #39-9099  	
    * display = "Personal Care and Service Workers, All Other"

  * element[+]
    * target.code = #5169
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personal services workers not elsewhere classified"
    * code = #39-1021  	
    * display = "First-Line Supervisors of Personal Service Workers"

  * element[+]
    * target.code = #5169
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personal services workers not elsewhere classified"
    * code = #39-9032  	
    * display = "Recreation Workers"

  * element[+]
    * target.code = #5169
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personal services workers not elsewhere classified"
    * code = #39-9041  	
    * display = "Residential Advisors"

  * element[+]
    * target.code = #5211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Stall and market salespersons"
    * code = #41-9091  	
    * display = "Door-to-Door Sales Workers, News and Street Vendors, and Related Workers"

  * element[+]
    * target.code = #5212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Street food salespersons"
    * code = #35-3041  	
    * display = "Food Servers, Nonrestaurant"

  * element[+]
    * target.code = #5212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Street food salespersons"
    * code = #41-9091  	
    * display = "Door-to-Door Sales Workers, News and Street Vendors, and Related Workers"

  * element[+]
    * target.code = #5221
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Shopkeepers"			
    * code = #11-1021  	
    * display = "General and Operations Managers"

  * element[+]
    * target.code = #5222
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Shop supervisors"
    * code = #41-1011  	
    * display = "First-Line Supervisors of Retail Sales Workers"

  * element[+]
    * target.code = #5223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Shop sales assistants"
    * code = #41-2022  	
    * display = "Parts Salespersons"

  * element[+]
    * target.code = #5223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Shop sales assistants"
    * code = #41-2031  	
    * display = "Retail Salespersons"

  * element[+]
    * target.code = #5230
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cashiers and ticket clerks"
    * code = #41-2011  	
    * display = "Cashiers"

  * element[+]
    * target.code = #5230
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cashiers and ticket clerks"
    * code = #41-2012  	
    * display = "Gaming Change Persons and Booth Cashiers"

  * element[+]
    * target.code = #5241
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fashion and other models"
    * code = #41-9012  	
    * display = "Models"

  * element[+]
    * target.code = #5242
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sales demonstrators"
    * code = #41-9011  	
    * display = "Demonstrators and Product Promoters"

  * element[+]
    * target.code = #5243
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Door-to-door Salespersons"
    * code = #41-9091  	
    * display = "Door-to-Door Sales Workers, News and Street Vendors, and Related Workers"

  * element[+]
    * target.code = #5244
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Contact centre salespersons"
    * code = #41-9041  	
    * display = "Telemarketers"

  * element[+]
    * target.code = #5245
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Service station attendants"
    * code = #53-1031  	
    * display = "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators"

  * element[+]
    * target.code = #5245
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Service station attendants"
    * code = #53-6031  	
    * display = "Automotive and Watercraft Service Attendants"

  * element[+]
    * target.code = #5246
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Food service counter attendants"
    * code = #35-3021  	
    * display = "Combined Food Preparation and Serving Workers, Including Fast Food"

  * element[+]
    * target.code = #5246
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Food service counter attendants"
    * code = #35-3022  	
    * display = "Counter Attendants, Cafeteria, Food Concession, and Coffee Shop"

  * element[+]
    * target.code = #5246
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Food service counter attendants"
    * code = #35-9011  	
    * display = "Dining Room and Cafeteria Attendants and Bartender Helpers"

  * element[+]
    * target.code = #5249
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sales workers not elsewhere classified"
    * code = #41-2021  	
    * display = "Counter and Rental Clerks"

  * element[+]
    * target.code = #5249
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sales workers not elsewhere classified"
    * code = #41-9099  	
    * display = "Sales and Related Workers, All Other"

  * element[+]
    * target.code = #5311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Child care workers"
    * code = #39-1021  	
    * display = "First-Line Supervisors of Personal Service Workers"

  * element[+]
    * target.code = #5311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Child care workers"
    * code = #39-9011  	
    * display = "Childcare Workers"

  * element[+]
    * target.code = #5312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Teachers' aides"
    * code = #25-9041  	
    * display = "Teacher Assistants"

  * element[+]
    * target.code = #5321
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health care assistants"
    * code = #31-1013  	
    * display = "Psychiatric Aides"

  * element[+]
    * target.code = #5321
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Health care assistants"
    * code = #31-1014  	
    * display = "Nursing Assistants"

  * element[+]
    * target.code = #5322
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Home-based personal care workers"
    * code = #31-1011  	
    * display = "Home Health Aides"

  * element[+]
    * target.code = #5322
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Home-based personal care workers"
    * code = #39-1021  	
    * display = "First-Line Supervisors of Personal Service Workers"

  * element[+]
    * target.code = #5322
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Home-based personal care workers"
    * code = #39-9021  	
    * display = "Personal Care Aides"

  * element[+]
    * target.code = #5329
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personal care workers in health services not elsewhere classified"
    * code = #31-1015  	
    * display = "Orderlies"

  * element[+]
    * target.code = #5329
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personal care workers in health services not elsewhere classified"
    * code = #31-2012  	
    * display = "Occupational Therapy Aides"

  * element[+]
    * target.code = #5329
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personal care workers in health services not elsewhere classified"
    * code = #31-2022  	
    * display = "Physical Therapist Aides"

  * element[+]
    * target.code = #5329
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personal care workers in health services not elsewhere classified"
    * code = #31-9091  	
    * display = "Dental Assistants"

  * element[+]
    * target.code = #5329
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personal care workers in health services not elsewhere classified"
    * code = #31-9093  	
    * display = "Medical Equipment Preparers"

  * element[+]
    * target.code = #5329
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personal care workers in health services not elsewhere classified"
    * code = #31-9095  	
    * display = "Pharmacy Aides"

  * element[+]
    * target.code = #5329
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personal care workers in health services not elsewhere classified"
    * code = #31-9097  	
    * display = "Phlebotomists"

  * element[+]
    * target.code = #5329
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Personal care workers in health services not elsewhere classified"
    * code = #31-9099  	
    * display = "Healthcare Support Workers, All Other"

  * element[+]
    * target.code = #5411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fire Fighters"
    * code = #33-1021  	
    * display = "First-Line Supervisors of Fire Fighting and Prevention Workers"

  * element[+]
    * target.code = #5411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fire Fighters"
    * code = #33-2011  	
    * display = "Firefighters"

  * element[+]
    * target.code = #5412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Police officers"
    * code = #33-1012  	
    * display = "First-Line Supervisors of Police and Detectives"

  * element[+]
    * target.code = #5412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Police officers"
    * code = #33-3051  	
    * display = "Police and Sheriff's Patrol Officers"

  * element[+]
    * target.code = #5412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Police officers"
    * code = #33-3052  	
    * display = "Transit and Railroad Police"

  * element[+]
    * target.code = #5413
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Prison guards"
    * code = #33-1011  	
    * display = "First-Line Supervisors of Correctional Officers"

  * element[+]
    * target.code = #5413
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Prison guards"
    * code = #33-3012  	
    * display = "Correctional Officers and Jailers"

  * element[+]
    * target.code = #5414
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Security guards"
    * code = #33-1099  	
    * display = "First-Line Supervisors of Protective Service Workers, All Other"

  * element[+]
    * target.code = #5414
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Security guards"
    * code = #33-9031  	
    * display = "Gaming Surveillance Officers and Gaming Investigators"

  * element[+]
    * target.code = #5414
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Security guards"
    * code = #33-9032  	
    * display = "Security Guards"

  * element[+]
    * target.code = #5414
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Security guards"
    * code = #33-9093  	
    * display = "Transportation Security Screeners"

  * element[+]
    * target.code = #5419
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Protective services workers not elsewhere classified"
    * code = #33-1099  	
    * display = "First-Line Supervisors of Protective Service Workers, All Other"

  * element[+]
    * target.code = #5419
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Protective services workers not elsewhere classified"
    * code = #33-3031  	
    * display = "Fish and Game Wardens"

  * element[+]
    * target.code = #5419
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Protective services workers not elsewhere classified"
    * code = #33-3041  	
    * display = "Parking Enforcement Workers"

  * element[+]
    * target.code = #5419
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Protective services workers not elsewhere classified"
    * code = #33-9011  	
    * display = "Animal Control Workers"

  * element[+]
    * target.code = #5419
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Protective services workers not elsewhere classified"
    * code = #33-9091  	
    * display = "Crossing Guards"

  * element[+]
    * target.code = #5419
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Protective services workers not elsewhere classified"
    * code = #33-9092  	
    * display = "Lifeguards, Ski Patrol, and Other Recreational Protective Service Workers"

  * element[+]
    * target.code = #5419
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Protective services workers not elsewhere classified"
    * code = #33-9099  	
    * display = "Protective Service Workers, All Other"

  * element[+]
    * target.code = #5419
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Protective services workers not elsewhere classified"
    * code = #43-5031  	
    * display = "Police, Fire, and Ambulance Dispatchers"

  * element[+]
    * target.code = #6111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Field crop and vegetable growers"
    * code = #45-1011  	
    * display = "First-Line Supervisors of Farming, Fishing, and Forestry Workers"

  * element[+]
    * target.code = #6111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Field crop and vegetable growers"
    * code = #45-2091  	
    * display = "Agricultural Equipment Operators"

  * element[+]
    * target.code = #6112
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Tree and shrub crop growers"
    * code = #45-1011  	
    * display = "First-Line Supervisors of Farming, Fishing, and Forestry Workers"

  * element[+]
    * target.code = #6112
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Tree and shrub crop growers"
    * code = #45-2091  	
    * display = "Agricultural Equipment Operators"

  * element[+]
    * target.code = #6113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Gardeners, horticultural and nursery growers"
    * code = #37-1012  	
    * display = "First-line Supervisor of Landscaping, Lawn Service, and Groundskeeping Workers"

  * element[+]
    * target.code = #6113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Gardeners, horticultural and nursery growers"
    * code = #37-3013  	
    * display = "Tree Trimmers and Pruners"

  * element[+]
    * target.code = #6113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Gardeners, horticultural and nursery growers"
    * code = #45-2091  	
    * display = "Agricultural Equipment Operators"

  * element[+]
    * target.code = #6114
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mixed crop growers"
    * code = #45-1011  	
    * display = "First-Line Supervisors of Farming, Fishing, and Forestry Workers"

  * element[+]
    * target.code = #6114
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mixed crop growers"
    * code = #45-2091  	
    * display = "Agricultural Equipment Operators"

  * element[+]
    * target.code = #6121
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Livestock and dairy producers"
    * code = #45-1011  	
    * display = "First-Line Supervisors of Farming, Fishing, and Forestry Workers"

  * element[+]
    * target.code = #6121
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Livestock and dairy producers"
    * code = #45-2021  	
    * display = "Animal Breeders"

  * element[+]
    * target.code = #6122
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Poultry producers"
    * code = #45-1011  	
    * display = "First-Line Supervisors of Farming, Fishing, and Forestry Workers"

  * element[+]
    * target.code = #6122
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Poultry producers"
    * code = #45-2021  	
    * display = "Animal Breeders"

  * element[+]
    * target.code = #6123
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Apiarists and sericulturists"
    * code = #45-1011  	
    * display = "First-Line Supervisors of Farming, Fishing, and Forestry Workers"

  * element[+]
    * target.code = #6123
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Apiarists and sericulturists"
    * code = #45-2021  	
    * display = "Animal Breeders"

  * element[+]
    * target.code = #6129
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Animal producers not elsewhere classified"
    * code = #45-1011  	
    * display = "First-Line Supervisors of Farming, Fishing, and Forestry Workers"

  * element[+]
    * target.code = #6129
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Animal producers not elsewhere classified"
    * code = #45-2021  	
    * display = "Animal Breeders"

  * element[+]
    * target.code = #6130
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mixed crop and animal producers"
    * code = #45-1011  	
    * display = "First-Line Supervisors of Farming, Fishing, and Forestry Workers"

  * element[+]
    * target.code = #6130
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mixed crop and animal producers"
    * code = #45-2021  	
    * display = "Animal Breeders"

  * element[+]
    * target.code = #6130
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mixed crop and animal producers"
    * code = #45-2091  	
    * display = "Agricultural Equipment Operators"

  * element[+]
    * target.code = #6210
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Forestry and related workers"
    * code = #45-1011  	
    * display = "First-Line Supervisors of Farming, Fishing, and Forestry Workers"

  * element[+]
    * target.code = #6210
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Forestry and related workers"
    * code = #45-4011  	
    * display = "Forest and Conservation Workers"

  * element[+]
    * target.code = #6210
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Forestry and related workers"
    * code = #45-4021  	
    * display = "Fallers"

  * element[+]
    * target.code = #6210
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Forestry and related workers"
    * code = #45-4022  	
    * display = "Logging Equipment Operators"

  * element[+]
    * target.code = #6210
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Forestry and related workers"
    * code = #45-4023  	
    * display = "Log Graders and Scalers"

  * element[+]
    * target.code = #6210
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Forestry and related workers"
    * code = #45-4029  	
    * display = "Logging Workers, All Other"

  * element[+]
    * target.code = #6221
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Aquaculture workers"
    * code = #45-1011  	
    * display = "First-Line Supervisors of Farming, Fishing, and Forestry Workers"

  * element[+]
    * target.code = #6221
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Aquaculture workers"
    * code = #45-2021  	
    * display = "Animal Breeders"

  * element[+]
    * target.code = #6222
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Inland and coastal waters fishery workers"
    * code = #45-1011  	
    * display = "First-Line Supervisors of Farming, Fishing, and Forestry Workers"

  * element[+]
    * target.code = #6222
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Inland and coastal waters fishery workers"
    * code = #45-3011  	
    * display = "Fishers and Related Fishing Workers"

  * element[+]
    * target.code = #6223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Deep-sea fishery workers"
    * code = #45-1011  	
    * display = "First-Line Supervisors of Farming, Fishing, and Forestry Workers"

  * element[+]
    * target.code = #6223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Deep-sea fishery workers"
    * code = #45-3011  	
    * display = "Fishers and Related Fishing Workers"

  * element[+]
    * target.code = #6224
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Hunters and trappers"
    * code = #45-1011  	
    * display = "First-Line Supervisors of Farming, Fishing, and Forestry Workers"

  * element[+]
    * target.code = #6224
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Hunters and trappers"
    * code = #45-3021  	
    * display = "Hunters and Trappers"

  * element[+]
    * target.code = #6310
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Subsistence crop farmers"
    * code = #45-2092  	
    * display = "Farmworkers and Laborers, Crop, Nursery, and Greenhouse"

  * element[+]
    * target.code = #6320
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Subsistence livestock farmers"
    * code = #45-2093  	
    * display = "Farmworkers, Farm, Ranch, and Aquacultural Animals"

  * element[+]
    * target.code = #6330
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Subsistence mixed crop and livestock farmers"
    * code = #45-2092  	
    * display = "Farmworkers and Laborers, Crop, Nursery, and Greenhouse"

  * element[+]
    * target.code = #6330
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Subsistence mixed crop and livestock farmers"
    * code = #45-2093  	
    * display = "Farmworkers, Farm, Ranch, and Aquacultural Animals"

  * element[+]
    * target.code = #6340
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Subsistence fishers, hunters, trappers and gatherers"
    * code = #45-3011  	
    * display = "Fishers and Related Fishing Workers"

  * element[+]
    * target.code = #6340
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Subsistence fishers, hunters, trappers and gatherers"
    * code = #45-3021  	
    * display = "Hunters and Trappers"

  * element[+]
    * target.code = #7111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "House builders"	
    * code = #11-9021  	
    * display = "Construction Managers"

  * element[+]
    * target.code = #7112
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bricklayers and related workers"
    * code = #47-2021  	
    * display = "Brickmasons and Blockmasons"

  * element[+]
    * target.code = #7112
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bricklayers and related workers"
    * code = #49-9045  	
    * display = "Refractory Materials Repairers, Except Brickmasons"

  * element[+]
    * target.code = #7113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Stonemasons, stone cutters, splitters and carvers"
    * code = #47-2022  	
    * display = "Stonemasons"

  * element[+]
    * target.code = #7113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Stonemasons, stone cutters, splitters and carvers"
    * code = #47-4091  	
    * display = "Segmental Pavers"

  * element[+]
    * target.code = #7114
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Concrete placers, concrete finishers and related workers"
    * code = #47-2051  	
    * display = "Cement Masons and Concrete Finishers"

  * element[+]
    * target.code = #7114
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Concrete placers, concrete finishers and related workers"
    * code = #47-2053  	
    * display = "Terrazzo Workers and Finishers"

  * element[+]
    * target.code = #7114
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Concrete placers, concrete finishers and related workers"
    * code = #47-4091  	
    * display = "Segmental Pavers"

  * element[+]
    * target.code = #7115
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Carpenters and joiners"
    * code = #47-2031  	
    * display = "Carpenters"

  * element[+]
    * target.code = #7119
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building frame and related trades workers not elsewhere classified"
    * code = #47-2231  	
    * display = "Solar Photovoltaic Installers"

  * element[+]
    * target.code = #7119
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building frame and related trades workers not elsewhere classified"
    * code = #47-4031  	
    * display = "Fence Erectors"

  * element[+]
    * target.code = #7119
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building frame and related trades workers not elsewhere classified"
    * code = #47-4041  	
    * display = "Hazardous Materials Removal Workers"

  * element[+]
    * target.code = #7119
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building frame and related trades workers not elsewhere classified"
    * code = #47-4099  	
    * display = "Construction and Related Workers, All Other"

  * element[+]
    * target.code = #7119
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building frame and related trades workers not elsewhere classified"
    * code = #49-9095  	
    * display = "Manufactured Building and Mobile Home Installers"

  * element[+]
    * target.code = #7121
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Roofers"
    * code = #47-2181  	
    * display = "Roofers"

  * element[+]
    * target.code = #7122
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Floor layers and tile setters"
    * code = #47-2041  	
    * display = "Carpet Installers"

  * element[+]
    * target.code = #7122
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Floor layers and tile setters"
    * code = #47-2042  	
    * display = "Floor Layers, Except Carpet, Wood, and Hard Tiles"

  * element[+]
    * target.code = #7122
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Floor layers and tile setters"
    * code = #47-2043  	
    * display = "Floor Sanders and Finishers"

  * element[+]
    * target.code = #7122
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Floor layers and tile setters"
    * code = #47-2044  	
    * display = "Tile and Marble Setters"

  * element[+]
    * target.code = #7123
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plasterers"
    * code = #47-2081  	
    * display = "Drywall and Ceiling Tile Installers"

  * element[+]
    * target.code = #7123
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plasterers"
    * code = #47-2082  	
    * display = "Tapers"

  * element[+]
    * target.code = #7123
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plasterers"
    * code = #47-2161  	
    * display = "Plasterers and Stucco Masons"

  * element[+]
    * target.code = #7124
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Insulation workers"
    * code = #47-2131  	
    * display = "Insulation Workers, Floor, Ceiling, and Wall"

  * element[+]
    * target.code = #7124
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Insulation workers"
    * code = #47-2132  	
    * display = "Insulation Workers, Mechanical"

  * element[+]
    * target.code = #7125
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Glaziers"
    * code = #47-2121  	
    * display = "Glaziers"

  * element[+]
    * target.code = #7126
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plumbers and pipe fitters"
    * code = #47-2151  	
    * display = "Pipelayers"

  * element[+]
    * target.code = #7126
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plumbers and pipe fitters"
    * code = #47-2152  	
    * display = "Plumbers, Pipefitters, and Steamfitters"

  * element[+]
    * target.code = #7127
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Air conditioning and refrigeration mechanics"
    * code = #49-1011  	
    * display = "First-Line Supervisors of Mechanics, Installers, and Repairers"

  * element[+]
    * target.code = #7127
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Air conditioning and refrigeration mechanics"
    * code = #49-9021  	
    * display = "Heating, Air Conditioning, and Refrigeration Mechanics and Installers"

  * element[+]
    * target.code = #7131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Painters and related workers"
    * code = #47-2141  	
    * display = "Painters, Construction and Maintenance"

  * element[+]
    * target.code = #7131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Painters and related workers"
    * code = #47-2142  	
    * display = "Paperhangers"

  * element[+]
    * target.code = #7132
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Spray painters and varnishers"
    * code = #51-9121  	
    * display = "Coating, Painting, and Spraying Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #7132
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Spray painters and varnishers"
    * code = #51-9122  	
    * display = "Painters, Transportation Equipment"

  * element[+]
    * target.code = #7133
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building structure cleaners"
    * code = #37-2019  	
    * display = "Building Cleaning Workers, All Other"

  * element[+]
    * target.code = #7211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal moulders and coremakers"
    * code = #51-4071  	
    * display = "Foundry Mold and Coremakers"

  * element[+]
    * target.code = #7211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal moulders and coremakers"
    * code = #51-4072  	
    * display = "Molding, Coremaking, and Casting Machine Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #7212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Welders and Flame Cutters"
    * code = #51-4121  	
    * display = "Welders, Cutters, Solderers, and Brazers"

  * element[+]
    * target.code = #7212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Welders and Flame Cutters"
    * code = #51-4122  	
    * display = "Welding, Soldering, and Brazing Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #7213
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sheet Metal Workers"
    * code = #47-2011  	
    * display = "Boilermakers"

  * element[+]
    * target.code = #7213
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sheet Metal Workers"
    * code = #47-2211  	
    * display = "Sheet Metal Workers"

  * element[+]
    * target.code = #7213
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sheet Metal Workers"
    * code = #51-4192  	
    * display = "Layout Workers, Metal and Plastic"

  * element[+]
    * target.code = #7214
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Structural Metal Preparers and Erectors"
    * code = #47-2171  	
    * display = "Reinforcing Iron and Rebar Workers"

  * element[+]
    * target.code = #7214
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Structural Metal Preparers and Erectors"
    * code = #47-2221  	
    * display = "Structural Iron and Steel Workers"

  * element[+]
    * target.code = #7214
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Structural Metal Preparers and Erectors"
    * code = #51-2041  	
    * display = "Structural Metal Fabricators and Fitters"

  * element[+]
    * target.code = #7215
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Riggers and cable splicers"
    * code = #49-9096  	
    * display = "Riggers"

  * element[+]
    * target.code = #7221
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Blacksmiths, hammersmiths and forging press workers"
    * code = #51-4022  	
    * display = "Forging Machine Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #7221
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Blacksmiths, hammersmiths and forging press workers"
    * code = #51-4199  	
    * display = "Metal Workers and Plastic Workers, All Other"

  * element[+]
    * target.code = #7222
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Toolmakers and related workers"
    * code = #49-9094  	
    * display = "Locksmiths and Safe Repairers"

  * element[+]
    * target.code = #7222
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Toolmakers and related workers"
    * code = #51-4012  	
    * display = "Computer Numerically Controlled Machine Tool Programmers, Metal and Plastic"

  * element[+]
    * target.code = #7222
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Toolmakers and related workers"
    * code = #51-4061  	
    * display = "Model Makers, Metal and Plastic"

  * element[+]
    * target.code = #7222
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Toolmakers and related workers"
    * code = #51-4062  	
    * display = "Patternmakers, Metal and Plastic"

  * element[+]
    * target.code = #7222
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Toolmakers and related workers"
    * code = #51-4111  	
    * display = "Tool and Die Makers"

  * element[+]
    * target.code = #7222
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Toolmakers and related workers"
    * code = #51-4192  	
    * display = "Layout Workers, Metal and Plastic"

  * element[+]
    * target.code = #7223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal Working Machine Tool Setters and Operators"
    * code = #51-4011  	
    * display = "Computer-Controlled Machine Tool Operators, Metal and Plastic"

  * element[+]
    * target.code = #7223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal Working Machine Tool Setters and Operators"
    * code = #51-4021  	
    * display = "Extruding and Drawing Machine Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #7223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal Working Machine Tool Setters and Operators"
    * code = #51-4022  	
    * display = "Forging Machine Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #7223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal Working Machine Tool Setters and Operators"
    * code = #51-4023  	
    * display = "Rolling Machine Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #7223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal Working Machine Tool Setters and Operators"
    * code = #51-4031  	
    * display = "Cutting, Punching, and Press Machine Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #7223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal Working Machine Tool Setters and Operators"
    * code = #51-4032  	
    * display = "Drilling and Boring Machine Tool Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #7223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal Working Machine Tool Setters and Operators"
    * code = #51-4033  	
    * display = "Grinding, Lapping, Polishing, and Buffing Machine Tool Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #7223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal Working Machine Tool Setters and Operators"
    * code = #51-4034  	
    * display = "Lathe and Turning Machine Tool Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #7223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal Working Machine Tool Setters and Operators"
    * code = #51-4035  	
    * display = "Milling and Planing Machine Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #7223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal Working Machine Tool Setters and Operators"
    * code = #51-4041  	
    * display = "Machinists"

  * element[+]
    * target.code = #7223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal Working Machine Tool Setters and Operators"
    * code = #51-4081  	
    * display = "Multiple Machine Tool Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #7223
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal Working Machine Tool Setters and Operators"
    * code = #51-4199  	
    * display = "Metal Workers and Plastic Workers, All Other"

  * element[+]
    * target.code = #7224
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal polishers, wheel grinders and tool sharpeners"
    * code = #51-4194  	
    * display = "Tool Grinders, Filers, and Sharpeners"

  * element[+]
    * target.code = #7224
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal polishers, wheel grinders and tool sharpeners"
    * code = #51-9022  	
    * display = "Grinding and Polishing Workers, Hand"

  * element[+]
    * target.code = #7231
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Motor vehicle mechanics and repairers"
    * code = #49-1011  	
    * display = "First-Line Supervisors of Mechanics, Installers, and Repairers"

  * element[+]
    * target.code = #7231
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Motor vehicle mechanics and repairers"
    * code = #49-3021  	
    * display = "Automotive Body and Related Repairers"

  * element[+]
    * target.code = #7231
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Motor vehicle mechanics and repairers"
    * code = #49-3022  	
    * display = "Automotive Glass Installers and Repairers"

  * element[+]
    * target.code = #7231
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Motor vehicle mechanics and repairers"
    * code = #49-3023  	
    * display = "Automotive Service Technicians and Mechanics"

  * element[+]
    * target.code = #7231
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Motor vehicle mechanics and repairers"
    * code = #49-3031  	
    * display = "Bus and Truck Mechanics and Diesel Engine Specialists"

  * element[+]
    * target.code = #7231
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Motor vehicle mechanics and repairers"
    * code = #49-3051  	
    * display = "Motorboat Mechanics and Service Technicians"

  * element[+]
    * target.code = #7231
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Motor vehicle mechanics and repairers"
    * code = #49-3052  	
    * display = "Motorcycle Mechanics"

  * element[+]
    * target.code = #7231
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Motor vehicle mechanics and repairers"
    * code = #49-3053  	
    * display = "Outdoor Power Equipment and Other Small Engine Mechanics"

  * element[+]
    * target.code = #7231
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Motor vehicle mechanics and repairers"
    * code = #49-3092  	
    * display = "Recreational Vehicle Service Technicians"

  * element[+]
    * target.code = #7231
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Motor vehicle mechanics and repairers"
    * code = #49-3093  	
    * display = "Tire Repairers and Changers"

  * element[+]
    * target.code = #7232
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Aircraft engine mechanics and repairers"
    * code = #49-1011  	
    * display = "First-Line Supervisors of Mechanics, Installers, and Repairers"

  * element[+]
    * target.code = #7232
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Aircraft engine mechanics and repairers"
    * code = #49-3011  	
    * display = "Aircraft Mechanics and Service Technicians"

  * element[+]
    * target.code = #7233
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Agricultural and industrial machinery mechanics and repairers"
    * code = #49-1011  	
    * display = "First-Line Supervisors of Mechanics, Installers, and Repairers"

  * element[+]
    * target.code = #7233
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Agricultural and industrial machinery mechanics and repairers"
    * code = #49-3041  	
    * display = "Farm Equipment Mechanics and Service Technicians"

  * element[+]
    * target.code = #7233
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Agricultural and industrial machinery mechanics and repairers"
    * code = #49-3042  	
    * display = "Mobile Heavy Equipment Mechanics, Except Engines"

  * element[+]
    * target.code = #7233
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Agricultural and industrial machinery mechanics and repairers"
    * code = #49-3043  	
    * display = "Rail Car Repairers"

  * element[+]
    * target.code = #7233
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Agricultural and industrial machinery mechanics and repairers"
    * code = #49-9041  	
    * display = "Industrial Machinery Mechanics"

  * element[+]
    * target.code = #7233
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Agricultural and industrial machinery mechanics and repairers"
    * code = #49-9043  	
    * display = "Maintenance Workers, Machinery"

  * element[+]
    * target.code = #7233
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Agricultural and industrial machinery mechanics and repairers"
    * code = #49-9044  	
    * display = "Millwrights"

  * element[+]
    * target.code = #7233
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Agricultural and industrial machinery mechanics and repairers"
    * code = #49-9045  	
    * display = "Refractory Materials Repairers, Except Brickmasons"

  * element[+]
    * target.code = #7233
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Agricultural and industrial machinery mechanics and repairers"
    * code = #49-9081  	
    * display = "Wind Turbine Service Technicians"

  * element[+]
    * target.code = #7234
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bicycle and related repairers"
    * code = #49-1011  	
    * display = "First-Line Supervisors of Mechanics, Installers, and Repairers"

  * element[+]
    * target.code = #7234
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bicycle and related repairers"
    * code = #49-3091  	
    * display = "Bicycle Repairers"

  * element[+]
    * target.code = #7311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Precision-instrument makers and repairers"
    * code = #49-1011  	
    * display = "First-Line Supervisors of Mechanics, Installers, and Repairers"

  * element[+]
    * target.code = #7311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Precision-instrument makers and repairers"
    * code = #49-9061  	
    * display = "Camera and Photographic Equipment Repairers"

  * element[+]
    * target.code = #7311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Precision-instrument makers and repairers"
    * code = #49-9062  	
    * display = "Medical Equipment Repairers"

  * element[+]
    * target.code = #7311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Precision-instrument makers and repairers"
    * code = #49-9064  	
    * display = "Watch Repairers"

  * element[+]
    * target.code = #7311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Precision-instrument makers and repairers"
    * code = #49-9069  	
    * display = "Precision Instrument and Equipment Repairers, All Other"

  * element[+]
    * target.code = #7312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Musical instrument makers and tuners"
    * code = #49-1011  	
    * display = "First-Line Supervisors of Mechanics, Installers, and Repairers"

  * element[+]
    * target.code = #7312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Musical instrument makers and tuners"
    * code = #49-9063  	
    * display = "Musical Instrument Repairers and Tuners"

  * element[+]
    * target.code = #7313
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Jewellery and Precious Metal Workers"
    * code = #51-9071  	
    * display = "Jewelers and Precious Stone and Metal Workers"

  * element[+]
    * target.code = #7314
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Potters and related workers"
    * code = #27-1012  	
    * display = "Craft Artists"

  * element[+]
    * target.code = #7314
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Potters and related workers"
    * code = #51-9195  	
    * display = "Molders, Shapers, and Casters, Except Metal and Plastic"

  * element[+]
    * target.code = #7315
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Glass makers, cutters, grinders and finishers"
    * code = #51-9022  	
    * display = "Grinding and Polishing Workers, Hand"

  * element[+]
    * target.code = #7315
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Glass makers, cutters, grinders and finishers"
    * code = #51-9031  	
    * display = "Cutters and Trimmers, Hand"

  * element[+]
    * target.code = #7315
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Glass makers, cutters, grinders and finishers"
    * code = #51-9195  	
    * display = "Molders, Shapers, and Casters, Except Metal and Plastic"

  * element[+]
    * target.code = #7316
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sign writers, decorative painters, engravers and etchers"
    * code = #51-9123  	
    * display = "Painting, Coating, and Decorating Workers"

  * element[+]
    * target.code = #7316
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sign writers, decorative painters, engravers and etchers"
    * code = #51-9194  	
    * display = "Etchers and Engravers"

  * element[+]
    * target.code = #7317
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Handicraft workers in wood, basketry and related materials"
    * code = #27-1012  	
    * display = "Craft Artists"

  * element[+]
    * target.code = #7317
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Handicraft workers in wood, basketry and related materials"
    * code = #51-7099  	
    * display = "Woodworkers, All Other"

  * element[+]
    * target.code = #7318
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Handicraft workers in textile, leather and related materials"
    * code = #51-6041  	
    * display = "Shoe and Leather Workers and Repairers"

  * element[+]
    * target.code = #7319
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Handicraft workers not elsewhere classified"
    * code = #27-1012  	
    * display = "Craft Artists"

  * element[+]
    * target.code = #7321
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Pre-press technicians"
    * code = #43-9031  	
    * display = "Desktop Publishers"

  * element[+]
    * target.code = #7321
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Pre-press technicians"
    * code = #51-5111  	
    * display = "Prepress Technicians and Workers"

  * element[+]
    * target.code = #7322
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Printers"
    * code = #51-5112  	
    * display = "Printing Press Operators"

  * element[+]
    * target.code = #7323
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Print finishing and binding workers"
    * code = #51-5113  	
    * display = "Print Binding and Finishing Workers"

  * element[+]
    * target.code = #7411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building and related electricians"
    * code = #47-2111  	
    * display = "Electricians"

  * element[+]
    * target.code = #7411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building and related electricians"
    * code = #47-2231  	
    * display = "Solar Photovoltaic Installers"

  * element[+]
    * target.code = #7412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical mechanics and fitters"
    * code = #47-4021  	
    * display = "Elevator Installers and Repairers"

  * element[+]
    * target.code = #7412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical mechanics and fitters"
    * code = #49-1011  	
    * display = "First-Line Supervisors of Mechanics, Installers, and Repairers"

  * element[+]
    * target.code = #7412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical mechanics and fitters"
    * code = #49-2092  	
    * display = "Electric Motor, Power Tool, and Related Repairers"

  * element[+]
    * target.code = #7412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical mechanics and fitters"
    * code = #49-2093  	
    * display = "Electrical and Electronics Installers and Repairers, Transportation Equipment"

  * element[+]
    * target.code = #7412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical mechanics and fitters"
    * code = #49-2094  	
    * display = "Electrical and Electronics Repairers, Commercial and Industrial Equipment"

  * element[+]
    * target.code = #7412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical mechanics and fitters"
    * code = #49-2095  	
    * display = "Electrical and Electronics Repairers, Powerhouse, Substation, and Relay"

  * element[+]
    * target.code = #7412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical mechanics and fitters"
    * code = #49-2096  	
    * display = "Electronic Equipment Installers and Repairers, Motor Vehicles"

  * element[+]
    * target.code = #7412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical mechanics and fitters"
    * code = #49-2098  	
    * display = "Security and Fire Alarm Systems Installers"

  * element[+]
    * target.code = #7412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical mechanics and fitters"
    * code = #49-3053  	
    * display = "Outdoor Power Equipment and Other Small Engine Mechanics"

  * element[+]
    * target.code = #7412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical mechanics and fitters"
    * code = #49-9011  	
    * display = "Mechanical Door Repairers"

  * element[+]
    * target.code = #7412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical mechanics and fitters"
    * code = #49-9012  	
    * display = "Control and Valve Installers and Repairers, Except Mechanical Door"

  * element[+]
    * target.code = #7412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical mechanics and fitters"
    * code = #49-9031  	
    * display = "Home Appliance Repairers"

  * element[+]
    * target.code = #7412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical mechanics and fitters"
    * code = #49-9097  	
    * display = "Signal and Track Switch Repairers"

  * element[+]
    * target.code = #7413
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical Line Installers and Repairers"
    * code = #49-1011  	
    * display = "First-Line Supervisors of Mechanics, Installers, and Repairers"

  * element[+]
    * target.code = #7413
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical Line Installers and Repairers"
    * code = #49-9051  	
    * display = "Electrical Power-Line Installers and Repairers"

  * element[+]
    * target.code = #7421
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electronics mechanics and servicers"
    * code = #49-1011  	
    * display = "First-Line Supervisors of Mechanics, Installers, and Repairers"

  * element[+]
    * target.code = #7421
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electronics mechanics and servicers"
    * code = #49-2011  	
    * display = "Computer, Automated Teller, and Office Machine Repairers"

  * element[+]
    * target.code = #7421
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electronics mechanics and servicers"
    * code = #49-2091  	
    * display = "Avionics Technicians"

  * element[+]
    * target.code = #7421
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electronics mechanics and servicers"
    * code = #49-2093  	
    * display = "Electrical and Electronics Installers and Repairers, Transportation Equipment"

  * element[+]
    * target.code = #7421
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electronics mechanics and servicers"
    * code = #49-2094  	
    * display = "Electrical and Electronics Repairers, Commercial and Industrial Equipment"

  * element[+]
    * target.code = #7421
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electronics mechanics and servicers"
    * code = #49-2095  	
    * display = "Electrical and Electronics Repairers, Powerhouse, Substation, and Relay"

  * element[+]
    * target.code = #7421
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electronics mechanics and servicers"
    * code = #49-2096  	
    * display = "Electronic Equipment Installers and Repairers, Motor Vehicles"

  * element[+]
    * target.code = #7422
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Information and communications technology installers and servicers"
    * code = #49-1011  	
    * display = "First-Line Supervisors of Mechanics, Installers, and Repairers"

  * element[+]
    * target.code = #7422
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Information and communications technology installers and servicers"
    * code = #49-2011  	
    * display = "Computer, Automated Teller, and Office Machine Repairers"

  * element[+]
    * target.code = #7422
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Information and communications technology installers and servicers"
    * code = #49-2021  	
    * display = "Radio, Cellular, and Tower Equipment Installers and Repairs"

  * element[+]
    * target.code = #7422
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Information and communications technology installers and servicers"
    * code = #49-2022  	
    * display = "Telecommunications Equipment Installers and Repairers, Except Line Installers"

  * element[+]
    * target.code = #7422
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Information and communications technology installers and servicers"
    * code = #49-2093  	
    * display = "Electrical and Electronics Installers and Repairers, Transportation Equipment"

  * element[+]
    * target.code = #7422
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Information and communications technology installers and servicers"
    * code = #49-9052  	
    * display = "Telecommunications Line Installers and Repairers"

  * element[+]
    * target.code = #7422 	
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Information and communications technology installers and servicers"
    * code = #49-2097  	
    * display = "Electronic Home Entertainment Equipment Installers and Repairers"

  * element[+]
    * target.code = #7511
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Butchers, fishmongers and related food preparers"
    * code = #51-3021  	
    * display = "Butchers and Meat Cutters"

  * element[+]
    * target.code = #7511
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Butchers, fishmongers and related food preparers"
    * code = #51-3022  	
    * display = "Meat, Poultry, and Fish Cutters and Trimmers"

  * element[+]
    * target.code = #7511
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Butchers, fishmongers and related food preparers"
    * code = #51-3023  	
    * display = "Slaughterers and Meat Packers"

  * element[+]
    * target.code = #7511
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Butchers, fishmongers and related food preparers"
    * code = #51-3091  	
    * display = "Food and Tobacco Roasting, Baking, and Drying Machine Operators and Tenders"

  * element[+]
    * target.code = #7512
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bakers, pastry-cooks and confectionery makers"
    * code = #51-3011  	
    * display = "Bakers"

  * element[+]
    * target.code = #7513
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Dairy Products Makers"
    * code = #51-3092  	
    * display = "Food Batchmakers"

  * element[+]
    * target.code = #7513
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Dairy Products Makers"
    * code = #51-9012  	
    * display = "Separating, Filtering, Clarifying, Precipitating, and Still Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #7514
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fruit, vegetable and related preservers"
    * code = #51-3093  	
    * display = "Food Cooking Machine Operators and Tenders"

  * element[+]
    * target.code = #7514
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fruit, vegetable and related preservers"
    * code = #51-3099  	
    * display = "Food Processing Workers, All Other"

  * element[+]
    * target.code = #7515
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Food and beverage tasters and graders"
    * code = #45-2011  	
    * display = "Agricultural Inspectors"

  * element[+]
    * target.code = #7515
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Food and beverage tasters and graders"
    * code = #45-2041  	
    * display = "Graders and Sorters, Agricultural Products"

  * element[+]
    * target.code = #7516
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Tobacco preparers and tobacco products makers"
    * code = #45-2041  	
    * display = "Graders and Sorters, Agricultural Products"

  * element[+]
    * target.code = #7516
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Tobacco preparers and tobacco products makers"
    * code = #51-9041  	
    * display = "Extruding, Forming, Pressing, and Compacting Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #7516
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Tobacco preparers and tobacco products makers"
    * code = #51-9195  	
    * display = "Molders, Shapers, and Casters, Except Metal and Plastic"

  * element[+]
    * target.code = #7521
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Wood treaters"
    * code = #51-9051  	
    * display = "Furnace, Kiln, Oven, Drier, and Kettle Operators and Tenders"

  * element[+]
    * target.code = #7521
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Wood treaters"
    * code = #51-9191  	
    * display = "Adhesive Bonding Machine Operators and Tenders"

  * element[+]
    * target.code = #7522
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cabinet-makers and related workers"
    * code = #51-7011  	
    * display = "Cabinetmakers and Bench Carpenters"

  * element[+]
    * target.code = #7522
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cabinet-makers and related workers"
    * code = #51-7021  	
    * display = "Furniture Finishers"

  * element[+]
    * target.code = #7522
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cabinet-makers and related workers"
    * code = #51-7031  	
    * display = "Model Makers, Wood"

  * element[+]
    * target.code = #7522
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cabinet-makers and related workers"
    * code = #51-7032  	
    * display = "Patternmakers, Wood"

  * element[+]
    * target.code = #7523
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Woodworking Machine Tool Setters and Operators"
    * code = #51-7042  	
    * display = "Woodworking Machine Setters, Operators, and Tenders, Except Sawing"

  * element[+]
    * target.code = #7531
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Tailors, dressmakers, furriers and hatters"
    * code = #51-6052  	
    * display = "Tailors, Dressmakers, and Custom Sewers"

  * element[+]
    * target.code = #7532
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Garment and Related Patternmakers and Cutters"
    * code = #51-6062  	
    * display = "Textile Cutting Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #7532
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Garment and Related Patternmakers and Cutters"
    * code = #51-6092  	
    * display = "Fabric and Apparel Patternmakers"

  * element[+]
    * target.code = #7532
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Garment and Related Patternmakers and Cutters"
    * code = #51-9031  	
    * display = "Cutters and Trimmers, Hand"

  * element[+]
    * target.code = #7533
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sewing, embroidery and related workers"
    * code = #49-9093  	
    * display = "Fabric Menders, Except Garment"

  * element[+]
    * target.code = #7533
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sewing, embroidery and related workers"
    * code = #51-6041  	
    * display = "Shoe and Leather Workers and Repairers"

  * element[+]
    * target.code = #7533
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sewing, embroidery and related workers"
    * code = #51-6051  	
    * display = "Sewers, Hand"

  * element[+]
    * target.code = #7534
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Upholsterers and related workers"
    * code = #51-6093  	
    * display = "Upholsterers"

  * element[+]
    * target.code = #7535
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Pelt dressers, tanners and fellmongers"
    * code = #45-2041  	
    * display = "Graders and Sorters, Agricultural Products"

  * element[+]
    * target.code = #7535
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Pelt dressers, tanners and fellmongers"
    * code = #51-6099  	
    * display = "Textile, Apparel, and Furnishings Workers, All Other"

  * element[+]
    * target.code = #7536
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Shoemakers and related workers"
    * code = #51-6041  	
    * display = "Shoe and Leather Workers and Repairers"

  * element[+]
    * target.code = #7541
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Underwater divers"
    * code = #49-9092  	
    * display = "Commercial Divers"

  * element[+]
    * target.code = #7542
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Shotfirers and blasters"
    * code = #47-5031  	
    * display = "Explosives Workers, Ordnance Handling Experts, and Blasters"

  * element[+]
    * target.code = #7543
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Product Graders and Testers (except Foods and Beverages)"
    * code = #51-9061  	
    * display = "Inspectors, Testers, Sorters, Samplers, and Weighers"

  * element[+]
    * target.code = #7544
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fumigators and other pest and weed controllers"
    * code = #37-1012  	
    * display = "First-line Supervisor of Landscaping, Lawn Service, and Groundskeeping Workers"

  * element[+]
    * target.code = #7544
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fumigators and other pest and weed controllers"
    * code = #37-2021  	
    * display = "Pest Control Workers"

  * element[+]
    * target.code = #7544
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fumigators and other pest and weed controllers"
    * code = #37-3012  	
    * display = "Pesticide Handlers, Sprayers, and Applicators, Vegetation"

  * element[+]
    * target.code = #7549
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Craft and related workers not elsewhere classified"
    * code = #27-1023  	
    * display = "Floral Designers"

  * element[+]
    * target.code = #7549
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Craft and related workers not elsewhere classified"
    * code = #51-9083  	
    * display = "Ophthalmic Laboratory Technicians"

  * element[+]
    * target.code = #8111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Miners and quarriers"
    * code = #47-5021  	
    * display = "Earth Drillers, Except Oil and Gas"

  * element[+]
    * target.code = #8111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Miners and quarriers"
    * code = #47-5041  	
    * display = "Continuous Mining Machine Operators"

  * element[+]
    * target.code = #8111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Miners and quarriers"
    * code = #47-5042  	
    * display = "Mine Cutting and Channeling Machine Operators"

  * element[+]
    * target.code = #8111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Miners and quarriers"
    * code = #47-5049  	
    * display = "Mining Machine Operators, All Other"

  * element[+]
    * target.code = #8111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Miners and quarriers"
    * code = #47-5051  	
    * display = "Rock Splitters, Quarry"

  * element[+]
    * target.code = #8111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Miners and quarriers"
    * code = #47-5061  	
    * display = "Roof Bolters, Mining"

  * element[+]
    * target.code = #8111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Miners and quarriers"
    * code = #53-7032  	
    * display = "Excavating and Loading Machine and Dragline Operators"

  * element[+]
    * target.code = #8111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Miners and quarriers"
    * code = #53-7033  	
    * display = "Loading Machine Operators, Underground Mining"

  * element[+]
    * target.code = #8112
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mineral and stone processing plant operators"
    * code = #51-9021  	
    * display = "Crushing, Grinding, and Polishing Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #8112
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mineral and stone processing plant operators"
    * code = #51-9192  	
    * display = "Cleaning, Washing, and Metal Pickling Equipment Operators and Tenders"

  * element[+]
    * target.code = #8113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Well drillers and borers and related workers"
    * code = #47-5011  	
    * display = "Derrick Operators, Oil and Gas"

  * element[+]
    * target.code = #8113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Well drillers and borers and related workers"
    * code = #47-5012  	
    * display = "Rotary Drill Operators, Oil and Gas"

  * element[+]
    * target.code = #8113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Well drillers and borers and related workers"
    * code = #47-5013  	
    * display = "Service Unit Operators, Oil, Gas, and Mining"

  * element[+]
    * target.code = #8113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Well drillers and borers and related workers"
    * code = #47-5021  	
    * display = "Earth Drillers, Except Oil and Gas"

  * element[+]
    * target.code = #8113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Well drillers and borers and related workers"
    * code = #47-5071  	
    * display = "Roustabouts, Oil and Gas"

  * element[+]
    * target.code = #8113
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Well drillers and borers and related workers"
    * code = #53-7073  	
    * display = "Wellhead Pumpers"

  * element[+]
    * target.code = #8114
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cement, stone and other mineral products machine operators"
    * code = #51-8099  	
    * display = "Plant and System Operators, All Other"

  * element[+]
    * target.code = #8114
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cement, stone and other mineral products machine operators"
    * code = #51-9021  	
    * display = "Crushing, Grinding, and Polishing Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #8114
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cement, stone and other mineral products machine operators"
    * code = #51-9023  	
    * display = "Mixing and Blending Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #8114
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cement, stone and other mineral products machine operators"
    * code = #51-9032  	
    * display = "Cutting and Slicing Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #8121
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal processing plant operators"
    * code = #51-4021  	
    * display = "Extruding and Drawing Machine Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #8121
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal processing plant operators"
    * code = #51-4023  	
    * display = "Rolling Machine Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #8121
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal processing plant operators"
    * code = #51-4051  	
    * display = "Metal-Refining Furnace Operators and Tenders"

  * element[+]
    * target.code = #8121
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal processing plant operators"
    * code = #51-4052  	
    * display = "Pourers and Casters, Metal"

  * element[+]
    * target.code = #8121
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal processing plant operators"
    * code = #51-4191  	
    * display = "Heat Treating Equipment Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #8122
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal finishing, plating and coating machine operators"
    * code = #51-4193  	
    * display = "Plating and Coating Machine Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #8122
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal finishing, plating and coating machine operators"
    * code = #51-9121  	
    * display = "Coating, Painting, and Spraying Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #8122
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Metal finishing, plating and coating machine operators"
    * code = #51-9192  	
    * display = "Cleaning, Washing, and Metal Pickling Equipment Operators and Tenders"

  * element[+]
    * target.code = #8131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Chemical products plant and machine operators"
    * code = #51-9011  	
    * display = "Chemical Equipment Operators and Tenders"

  * element[+]
    * target.code = #8131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Chemical products plant and machine operators"
    * code = #51-9012  	
    * display = "Separating, Filtering, Clarifying, Precipitating, and Still Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #8131
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Chemical products plant and machine operators"
    * code = #51-9195  	
    * display = "Molders, Shapers, and Casters, Except Metal and Plastic"

  * element[+]
    * target.code = #8132
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Photographic products machine operators"
    * code = #51-9151  	
    * display = "Photographic Process Workers and Processing Machine Operators"

  * element[+]
    * target.code = #8141
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Rubber products machine operators"
    * code = #51-9021  	
    * display = "Crushing, Grinding, and Polishing Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #8141
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Rubber products machine operators"
    * code = #51-9041  	
    * display = "Extruding, Forming, Pressing, and Compacting Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #8141
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Rubber products machine operators"
    * code = #51-9051  	
    * display = "Furnace, Kiln, Oven, Drier, and Kettle Operators and Tenders"

  * element[+]
    * target.code = #8141
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Rubber products machine operators"
    * code = #51-9195  	
    * display = "Molders, Shapers, and Casters, Except Metal and Plastic"

  * element[+]
    * target.code = #8141
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Rubber products machine operators"
    * code = #51-9197  	
    * display = "Tire Builders"

  * element[+]
    * target.code = #8142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plastic products machine operators"
    * code = #51-2091  	
    * display = "Fiberglass Laminators and Fabricators"

  * element[+]
    * target.code = #8142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plastic products machine operators"
    * code = #51-4021  	
    * display = "Extruding and Drawing Machine Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #8142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plastic products machine operators"
    * code = #51-4022  	
    * display = "Forging Machine Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #8142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plastic products machine operators"
    * code = #51-4023  	
    * display = "Rolling Machine Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #8142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plastic products machine operators"
    * code = #51-4031  	
    * display = "Cutting, Punching, and Press Machine Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #8142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plastic products machine operators"
    * code = #51-4032  	
    * display = "Drilling and Boring Machine Tool Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #8142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plastic products machine operators"
    * code = #51-4033  	
    * display = "Grinding, Lapping, Polishing, and Buffing Machine Tool Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #8142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plastic products machine operators"
    * code = #51-4034  	
    * display = "Lathe and Turning Machine Tool Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #8142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plastic products machine operators"
    * code = #51-4035  	
    * display = "Milling and Planing Machine Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #8142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plastic products machine operators"
    * code = #51-4072  	
    * display = "Molding, Coremaking, and Casting Machine Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #8142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plastic products machine operators"
    * code = #51-4191  	
    * display = "Heat Treating Equipment Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #8142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plastic products machine operators"
    * code = #51-4193  	
    * display = "Plating and Coating Machine Setters, Operators, and Tenders, Metal and Plastic"

  * element[+]
    * target.code = #8142
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Plastic products machine operators"
    * code = #51-4199  	
    * display = "Metal Workers and Plastic Workers, All Other"

  * element[+]
    * target.code = #8143
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Paper products machine operators"
    * code = #51-9191  	
    * display = "Adhesive Bonding Machine Operators and Tenders"

  * element[+]
    * target.code = #8143
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Paper products machine operators"
    * code = #51-9196  	
    * display = "Paper Goods Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #8151
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fibre preparing, spinning and winding machine operators"
    * code = #51-6064  	
    * display = "Textile Winding, Twisting, and Drawing Out Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #8152
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Weaving and knitting machine operators"
    * code = #51-6063  	
    * display = "Textile Knitting and Weaving Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #8153
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sewing machine operators"
    * code = #51-6031  	
    * display = "Sewing Machine Operators"

  * element[+]
    * target.code = #8154
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bleaching, dyeing and fabric cleaning machine operators"
    * code = #51-6061  	
    * display = "Textile Bleaching and Dyeing Machine Operators and Tenders"

  * element[+]
    * target.code = #8155
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fur and leather preparing machine operators"
    * code = #51-6099  	
    * display = "Textile, Apparel, and Furnishings Workers, All Other"

  * element[+]
    * target.code = #8156
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Shoemaking and related machine operators"
    * code = #51-6042  	
    * display = "Shoe Machine Operators and Tenders"

  * element[+]
    * target.code = #8157
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Laundry machine operators"
    * code = #51-6011  	
    * display = "Laundry and Dry-Cleaning Workers"

  * element[+]
    * target.code = #8159
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Textile, fur and leather products machine operators not elsewhere classified"
    * code = #51-6099  	
    * display = "Textile, Apparel, and Furnishings Workers, All Other"

  * element[+]
    * target.code = #8160
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Food and related products machine operators"
    * code = #51-3091  	
    * display = "Food and Tobacco Roasting, Baking, and Drying Machine Operators and Tenders"

  * element[+]
    * target.code = #8160
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Food and related products machine operators"
    * code = #51-3092  	
    * display = "Food Batchmakers"

  * element[+]
    * target.code = #8160
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Food and related products machine operators"
    * code = #51-3093  	
    * display = "Food Cooking Machine Operators and Tenders"

  * element[+]
    * target.code = #8160
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Food and related products machine operators"
    * code = #51-3099  	
    * display = "Food Processing Workers, All Other"

  * element[+]
    * target.code = #8160
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Food and related products machine operators"
    * code = #51-9041  	
    * display = "Extruding, Forming, Pressing, and Compacting Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #8160
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Food and related products machine operators"
    * code = #51-9193  	
    * display = "Cooling and Freezing Equipment Operators and Tenders"

  * element[+]
    * target.code = #8171
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Pulp and papermaking plant operators"
    * code = #51-9192  	
    * display = "Cleaning, Washing, and Metal Pickling Equipment Operators and Tenders"

  * element[+]
    * target.code = #8171
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Pulp and papermaking plant operators"
    * code = #51-9196  	
    * display = "Paper Goods Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #8172
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Wood processing plant operators"
    * code = #51-7041  	
    * display = "Sawing Machine Setters, Operators, and Tenders, Wood"

  * element[+]
    * target.code = #8181
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Glass and ceramics plant operators"
    * code = #51-6091  	
    * display = "Extruding and Forming Machine Setters, Operators, and Tenders, Synthetic and Glass Fibers"

  * element[+]
    * target.code = #8181
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Glass and ceramics plant operators"
    * code = #51-9021  	
    * display = "Crushing, Grinding, and Polishing Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #8181
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Glass and ceramics plant operators"
    * code = #51-9023  	
    * display = "Mixing and Blending Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #8181
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Glass and ceramics plant operators"
    * code = #51-9041  	
    * display = "Extruding, Forming, Pressing, and Compacting Machine Setters, Operators, and Tenders"

  * element[+]
    * target.code = #8181
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Glass and ceramics plant operators"
    * code = #51-9051  	
    * display = "Furnace, Kiln, Oven, Drier, and Kettle Operators and Tenders"

  * element[+]
    * target.code = #8181
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Glass and ceramics plant operators"
    * code = #51-9195  	
    * display = "Molders, Shapers, and Casters, Except Metal and Plastic"

  * element[+]
    * target.code = #8182
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Steam engine and boiler operators"
    * code = #51-8021  	
    * display = "Stationary Engineers and Boiler Operators"

  * element[+]
    * target.code = #8183
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Packing, bottling and labelling machine operators"
    * code = #51-9111  	
    * display = "Packaging and Filling Machine Operators and Tenders"

  * element[+]
    * target.code = #8189
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Stationary plant and machine operators not elsewhere classified"
    * code = #51-9141  	
    * display = "Semiconductor Processors"

  * element[+]
    * target.code = #8189
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Stationary plant and machine operators not elsewhere classified"
    * code = #51-9191  	
    * display = "Adhesive Bonding Machine Operators and Tenders"

  * element[+]
    * target.code = #8189
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Stationary plant and machine operators not elsewhere classified"
    * code = #51-9193  	
    * display = "Cooling and Freezing Equipment Operators and Tenders"

  * element[+]
    * target.code = #8189
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Stationary plant and machine operators not elsewhere classified"
    * code = #53-7011  	
    * display = "Conveyor Operators and Tenders"

  * element[+]
    * target.code = #8211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mechanical machinery assemblers"
    * code = #51-2011  	
    * display = "Aircraft Structure, Surfaces, Rigging, and Systems Assemblers"

  * element[+]
    * target.code = #8211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mechanical machinery assemblers"
    * code = #51-2031  	
    * display = "Engine and Other Machine Assemblers"

  * element[+]
    * target.code = #8212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical and electronic equipment assemblers"
    * code = #51-2021  	
    * display = "Coil Winders, Tapers, and Finishers"

  * element[+]
    * target.code = #8212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical and electronic equipment assemblers"
    * code = #51-2022  	
    * display = "Electrical and Electronic Equipment Assemblers"

  * element[+]
    * target.code = #8212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical and electronic equipment assemblers"
    * code = #51-2023  	
    * display = "Electromechanical Equipment Assemblers"

  * element[+]
    * target.code = #8212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical and electronic equipment assemblers"
    * code = #51-2093  	
    * display = "Timing Device Assemblers and Adjusters"

  * element[+]
    * target.code = #8212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Electrical and electronic equipment assemblers"
    * code = #51-9194  	
    * display = "Etchers and Engravers"

  * element[+]
    * target.code = #8219
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Assemblers not elsewhere classified"
    * code = #51-2092  	
    * display = "Team Assemblers"

  * element[+]
    * target.code = #8219
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Assemblers not elsewhere classified"
    * code = #51-2099  	
    * display = "Assemblers and Fabricators, All Other"

  * element[+]
    * target.code = #8311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Locomotive engine drivers"
    * code = #53-1031  	
    * display = "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators"

  * element[+]
    * target.code = #8311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Locomotive engine drivers"
    * code = #53-4011  	
    * display = "Locomotive Engineers"

  * element[+]
    * target.code = #8311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Locomotive engine drivers"
    * code = #53-4012  	
    * display = "Locomotive Firers"

  * element[+]
    * target.code = #8311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Locomotive engine drivers"
    * code = #53-4013  	
    * display = "Rail Yard Engineers, Dinkey Operators, and Hostlers"

  * element[+]
    * target.code = #8311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Locomotive engine drivers"
    * code = #53-4041  	
    * display = "Subway and Streetcar Operators"

  * element[+]
    * target.code = #8311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Locomotive engine drivers"
    * code = #53-7111  	
    * display = "Mine Shuttle Car Operators"

  * element[+]
    * target.code = #8312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Railway brake, signal and switch operators"
    * code = #53-1031  	
    * display = "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators"

  * element[+]
    * target.code = #8312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Railway brake, signal and switch operators"
    * code = #53-4021  	
    * display = "Railroad Brake, Signal, and Switch Operators"

  * element[+]
    * target.code = #8312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Railway brake, signal and switch operators"
    * code = #53-4031  	
    * display = "Railroad Conductors and Yardmasters"

  * element[+]
    * target.code = #8312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Railway brake, signal and switch operators"
    * code = #53-4099  	
    * display = "Rail Transportation Workers, All Other"

  * element[+]
    * target.code = #8321
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Motorcycle drivers"
    * code = #43-5021  	
    * display = "Couriers and Messengers"

  * element[+]
    * target.code = #8321
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Motorcycle drivers"
    * code = #53-1031  	
    * display = "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators"

  * element[+]
    * target.code = #8321
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Motorcycle drivers"
    * code = #53-3099  	
    * display = "Motor Vehicle Operators, All Other"

  * element[+]
    * target.code = #8322
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Car, taxi and van drivers"
    * code = #53-1031  	
    * display = "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators"

  * element[+]
    * target.code = #8322
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Car, taxi and van drivers"
    * code = #53-3011  	
    * display = "Ambulance Drivers and Attendants, Except Emergency Medical Technicians"

  * element[+]
    * target.code = #8322
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Car, taxi and van drivers"
    * code = #53-3031  	
    * display = "Driver/Sales Workers"

  * element[+]
    * target.code = #8322
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Car, taxi and van drivers"
    * code = #53-3033  	
    * display = "Light Truck or Delivery Services Drivers"

  * element[+]
    * target.code = #8322
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Car, taxi and van drivers"
    * code = #53-3041  	
    * display = "Taxi Drivers and Chauffeurs"

  * element[+]
    * target.code = #8331
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bus and tram drivers"
    * code = #53-1031  	
    * display = "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators"

  * element[+]
    * target.code = #8331
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bus and tram drivers"
    * code = #53-3021  	
    * display = "Bus Drivers, Transit and Intercity"

  * element[+]
    * target.code = #8331
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bus and tram drivers"
    * code = #53-3022  	
    * display = "Bus Drivers, School or Special Client"

  * element[+]
    * target.code = #8331
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Bus and tram drivers"
    * code = #53-4041  	
    * display = "Subway and Streetcar Operators"

  * element[+]
    * target.code = #8332
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Heavy truck and lorry drivers"
    * code = #53-1031  	
    * display = "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators"

  * element[+]
    * target.code = #8332
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Heavy truck and lorry drivers"
    * code = #53-3032  	
    * display = "Heavy and Tractor-Trailer Truck Drivers"

  * element[+]
    * target.code = #8341
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mobile farm and forestry plant operators"
    * code = #45-2091  	
    * display = "Agricultural Equipment Operators"

  * element[+]
    * target.code = #8341
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mobile farm and forestry plant operators"
    * code = #45-4022  	
    * display = "Logging Equipment Operators"

  * element[+]
    * target.code = #8342
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Earthmoving and related plant operators"
    * code = #47-2071  	
    * display = "Paving, Surfacing, and Tamping Equipment Operators"

  * element[+]
    * target.code = #8342
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Earthmoving and related plant operators"
    * code = #47-2072  	
    * display = "Pile-Driver Operators"

  * element[+]
    * target.code = #8342
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Earthmoving and related plant operators"
    * code = #47-2073  	
    * display = "Operating Engineers and Other Construction Equipment Operators"

  * element[+]
    * target.code = #8342
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Earthmoving and related plant operators"
    * code = #53-7031  	
    * display = "Dredge Operators"

  * element[+]
    * target.code = #8342
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Earthmoving and related plant operators"
    * code = #53-7032  	
    * display = "Excavating and Loading Machine and Dragline Operators"

  * element[+]
    * target.code = #8343
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Crane, hoist and related plant operators"
    * code = #39-3091  	
    * display = "Amusement and Recreation Attendants"

  * element[+]
    * target.code = #8343
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Crane, hoist and related plant operators"
    * code = #53-1031  	
    * display = "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators"

  * element[+]
    * target.code = #8343
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Crane, hoist and related plant operators"
    * code = #53-6011  	
    * display = "Bridge and Lock Tenders"

  * element[+]
    * target.code = #8343
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Crane, hoist and related plant operators"
    * code = #53-7021  	
    * display = "Crane and Tower Operators"

  * element[+]
    * target.code = #8343
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Crane, hoist and related plant operators"
    * code = #53-7041  	
    * display = "Hoist and Winch Operators"

  * element[+]
    * target.code = #8344
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Lifting truck operators"
    * code = #53-1031  	
    * display = "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators"

  * element[+]
    * target.code = #8344
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Lifting truck operators"
    * code = #53-7051  	
    * display = "Industrial Truck and Tractor Operators"

  * element[+]
    * target.code = #8350
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Ships' deck crews and related workers"
    * code = #53-5011  	
    * display = "Sailors and Marine Oilers"

  * element[+]
    * target.code = #8350
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Ships' deck crews and related workers"
    * code = #53-5022  	
    * display = "Motorboat Operators"

  * element[+]
    * target.code = #9111
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Domestic cleaners and helpers"
    * code = #37-2012  	
    * display = "Maids and Housekeeping Cleaners"

  * element[+]
    * target.code = #9112
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cleaners and helpers in offices, hotels and other establishments"
    * code = #37-2011  	
    * display = "Janitors and Cleaners, Except Maids and Housekeeping Cleaners"

  * element[+]
    * target.code = #9112
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cleaners and helpers in offices, hotels and other establishments"
    * code = #37-2012  	
    * display = "Maids and Housekeeping Cleaners"

  * element[+]
    * target.code = #9112
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Cleaners and helpers in offices, hotels and other establishments"
    * code = #53-7061  	
    * display = "Cleaners of Vehicles and Equipment"

  * element[+]
    * target.code = #9121
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Hand launderers and pressers"
    * code = #51-6021  	
    * display = "Pressers, Textile, Garment, and Related Materials"

  * element[+]
    * target.code = #9122
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Vehicle cleaners"
    * code = #53-7061  	
    * display = "Cleaners of Vehicles and Equipment"

  * element[+]
    * target.code = #9123
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Window cleaners"
    * code = #37-2011  	
    * display = "Janitors and Cleaners, Except Maids and Housekeeping Cleaners"

  * element[+]
    * target.code = #9129
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Other cleaning workers"
    * code = #37-2019  	
    * display = "Building Cleaning Workers, All Other"

  * element[+]
    * target.code = #9129
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Other cleaning workers"
    * code = #47-4071  	
    * display = "Septic Tank Servicers and Sewer Pipe Cleaners"

  * element[+]
    * target.code = #9211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Crop farm labourers"
    * code = #45-2092  	
    * display = "Farmworkers and Laborers, Crop, Nursery, and Greenhouse"

  * element[+]
    * target.code = #9211
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Crop farm labourers"
    * code = #45-2099  	
    * display = "Agricultural Workers, All Other"

  * element[+]
    * target.code = #9212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Livestock farm labourers"
    * code = #45-2093  	
    * display = "Farmworkers, Farm, Ranch, and Aquacultural Animals"

  * element[+]
    * target.code = #9212
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Livestock farm labourers"
    * code = #45-2099  	
    * display = "Agricultural Workers, All Other"

  * element[+]
    * target.code = #9213
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mixed crop and livestock farm labourers"
    * code = #45-2092  	
    * display = "Farmworkers and Laborers, Crop, Nursery, and Greenhouse"

  * element[+]
    * target.code = #9213
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mixed crop and livestock farm labourers"
    * code = #45-2093  	
    * display = "Farmworkers, Farm, Ranch, and Aquacultural Animals"

  * element[+]
    * target.code = #9213
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mixed crop and livestock farm labourers"
    * code = #45-2099  	
    * display = "Agricultural Workers, All Other"

  * element[+]
    * target.code = #9214
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Garden and horticultural labourers"
    * code = #37-3011  	
    * display = "Landscaping and Groundskeeping Workers"

  * element[+]
    * target.code = #9214
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Garden and horticultural labourers"
    * code = #37-3019  	
    * display = "Grounds Maintenance Workers, All Other"

  * element[+]
    * target.code = #9214
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Garden and horticultural labourers"
    * code = #45-2092  	
    * display = "Farmworkers and Laborers, Crop, Nursery, and Greenhouse"

  * element[+]
    * target.code = #9215
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Forestry labourers"
    * code = #45-4011  	
    * display = "Forest and Conservation Workers"

  * element[+]
    * target.code = #9215
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Forestry labourers"
    * code = #45-4029  	
    * display = "Logging Workers, All Other"

  * element[+]
    * target.code = #9216
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fishery and aquaculture labourers"
    * code = #45-2093  	
    * display = "Farmworkers, Farm, Ranch, and Aquacultural Animals"

  * element[+]
    * target.code = #9216
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fishery and aquaculture labourers"
    * code = #45-3011  	
    * display = "Fishers and Related Fishing Workers"

  * element[+]
    * target.code = #9311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mining and quarrying labourers"
    * code = #47-5081  	
    * display = "Helpers--Extraction Workers"

  * element[+]
    * target.code = #9311
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Mining and quarrying labourers"
    * code = #47-5099  	
    * display = "Extraction Workers, All Other"

  * element[+]
    * target.code = #9312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Civil engineering labourers"
    * code = #47-3019  	
    * display = "Helpers, Construction Trades, All Other"

  * element[+]
    * target.code = #9312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Civil engineering labourers"
    * code = #47-4051  	
    * display = "Highway Maintenance Workers"

  * element[+]
    * target.code = #9312
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Civil engineering labourers"
    * code = #47-4061  	
    * display = "Rail-Track Laying and Maintenance Equipment Operators"

  * element[+]
    * target.code = #9313
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building construction labourers"
    * code = #47-2061  	
    * display = "Construction Laborers"

  * element[+]
    * target.code = #9313
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building construction labourers"
    * code = #47-3011  	
    * display = "Helpers--Brickmasons, Blockmasons, Stonemasons, and Tile and Marble Setters"

  * element[+]
    * target.code = #9313
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building construction labourers"
    * code = #47-3012  	
    * display = "Helpers--Carpenters"

  * element[+]
    * target.code = #9313
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building construction labourers"
    * code = #47-3013  	
    * display = "Helpers--Electricians"

  * element[+]
    * target.code = #9313
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building construction labourers"
    * code = #47-3014  	
    * display = "Helpers--Painters, Paperhangers, Plasterers, and Stucco Masons"

  * element[+]
    * target.code = #9313
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building construction labourers"
    * code = #47-3015  	
    * display = "Helpers--Pipelayers, Plumbers, Pipefitters, and Steamfitters"

  * element[+]
    * target.code = #9313
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building construction labourers"
    * code = #47-3016  	
    * display = "Helpers--Roofers"

  * element[+]
    * target.code = #9313
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Building construction labourers"
    * code = #47-3019  	
    * display = "Helpers, Construction Trades, All Other"

  * element[+]
    * target.code = #9321
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Hand packers"
    * code = #53-7064  	
    * display = "Packers and Packagers, Hand"

  * element[+]
    * target.code = #9329
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Manufacturing labourers not elsewhere classified"
    * code = #51-9198  	
    * display = "Helpers--Production Workers"

  * element[+]
    * target.code = #9329
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Manufacturing labourers not elsewhere classified"
    * code = #51-9199  	
    * display = "Production Workers, All Other"

  * element[+]
    * target.code = #9329
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Manufacturing labourers not elsewhere classified"
    * code = #53-7062  	
    * display = "Laborers and Freight, Stock, and Material Movers, Hand"

  * element[+]
    * target.code = #9329
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Manufacturing labourers not elsewhere classified"
    * code = #53-7063  	
    * display = "Machine Feeders and Offbearers"

  * element[+]
    * target.code = #9331
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Hand and pedal vehicle drivers"
    * code = #43-5021  	
    * display = "Couriers and Messengers"

  * element[+]
    * target.code = #9331
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Hand and pedal vehicle drivers"
    * code = #53-6099  	
    * display = "Transportation Workers, All Other"

  * element[+]
    * target.code = #9331
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Hand and pedal vehicle drivers"
    * code = #53-7199  	
    * display = "Material Moving Workers, All Other"

  * element[+]
    * target.code = #9332
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Drivers of animal-drawn vehicles and machinery"
    * code = #53-6099  	
    * display = "Transportation Workers, All Other"

  * element[+]
    * target.code = #9332
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Drivers of animal-drawn vehicles and machinery"
    * code = #53-7199  	
    * display = "Material Moving Workers, All Other"

  * element[+]
    * target.code = #9333
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Freight handlers"
    * code = #53-1011  	
    * display = "Aircraft Cargo Handling Supervisors"

  * element[+]
    * target.code = #9333
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Freight handlers"
    * code = #53-1021  	
    * display = "First-Line Supervisors of Helpers, Laborers, and Material Movers, Hand"

  * element[+]
    * target.code = #9333
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Freight handlers"
    * code = #53-7062  	
    * display = "Laborers and Freight, Stock, and Material Movers, Hand"

  * element[+]
    * target.code = #9333
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Freight handlers"
    * code = #53-7121  	
    * display = "Tank Car, Truck, and Ship Loaders"

  * element[+]
    * target.code = #9334
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Shelf fillers"
    * code = #43-5081  	
    * display = "Stock Clerks and Order Fillers"

  * element[+]
    * target.code = #9411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fast food preparers"
    * code = #35-2011  	
    * display = "Cooks, Fast Food"

  * element[+]
    * target.code = #9411
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Fast food preparers"
    * code = #35-2015  	
    * display = "Cooks, Short Order"

  * element[+]
    * target.code = #9412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Kitchen helpers"
    * code = #35-2021  	
    * display = "Food Preparation Workers"

  * element[+]
    * target.code = #9412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Kitchen helpers"
    * code = #35-9011  	
    * display = "Dining Room and Cafeteria Attendants and Bartender Helpers"

  * element[+]
    * target.code = #9412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Kitchen helpers"
    * code = #35-9021  	
    * display = "Dishwashers"

  * element[+]
    * target.code = #9412
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Kitchen helpers"
    * code = #35-9099  	
    * display = "Food Preparation and Serving Related Workers, All Other"

  * element[+]
    * target.code = #9510
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Street and related service workers"
    * code = #39-9099  	
    * display = "Personal Care and Service Workers, All Other"

  * element[+]
    * target.code = #9520
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Street vendors (excluding food)"
    * code = #41-9091  	
    * display = "Door-to-Door Sales Workers, News and Street Vendors, and Related Workers"

  * element[+]
    * target.code = #9611
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Garbage and recycling collectors"
    * code = #53-1031  	
    * display = "First-Line Supervisors of Transportation and Material-Moving Machine and Vehicle Operators"

  * element[+]
    * target.code = #9611
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Garbage and recycling collectors"
    * code = #53-7081  	
    * display = "Refuse and Recyclable Material Collectors"

  * element[+]
    * target.code = #9612
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Refuse sorters"
    * code = #53-7081  	
    * display = "Refuse and Recyclable Material Collectors"

  * element[+]
    * target.code = #9613
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Sweepers and related labourers"
    * code = #37-3019  	
    * display = "Grounds Maintenance Workers, All Other"

  * element[+]
    * target.code = #9621
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Messengers, package deliverers and luggage porters"
    * code = #39-6011  	
    * display = "Baggage Porters and Bellhops"

  * element[+]
    * target.code = #9621
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Messengers, package deliverers and luggage porters"
    * code = #43-5021  	
    * display = "Couriers and Messengers"

  * element[+]
    * target.code = #9622
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Odd job persons"
    * code = #37-3019  	
    * display = "Grounds Maintenance Workers, All Other"

  * element[+]
    * target.code = #9622
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Odd job persons"
    * code = #49-9071  	
    * display = "Maintenance and Repair Workers, General"

  * element[+]
    * target.code = #9622
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Odd job persons"
    * code = #49-9098  	
    * display = "Helpers--Installation, Maintenance, and Repair Workers"

  * element[+]
    * target.code = #9622
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Odd job persons"
    * code = #49-9099  	
    * display = "Installation, Maintenance, and Repair Workers, All Other"

  * element[+]
    * target.code = #9623
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Meter readers and vending-machine collectors"
    * code = #43-5041  	
    * display = "Meter Readers, Utilities"

  * element[+]
    * target.code = #9623
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Meter readers and vending-machine collectors"
    * code = #49-9091  	
    * display = "Coin, Vending, and Amusement Machine Servicers and Repairers"

  * element[+]
    * target.code = #9624
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Water and firewood collectors"
    * code = #53-7062  	
    * display = "Laborers and Freight, Stock, and Material Movers, Hand"

  * element[+]
    * target.code = #9629
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Elementary workers not elsewhere classified"
    * code = #39-3021  	
    * display = "Motion Picture Projectionists"

  * element[+]
    * target.code = #9629
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Elementary workers not elsewhere classified"
    * code = #39-3031  	
    * display = "Ushers, Lobby Attendants, and Ticket Takers"

  * element[+]
    * target.code = #9629
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Elementary workers not elsewhere classified"
    * code = #39-3091  	
    * display = "Amusement and Recreation Attendants"

  * element[+]
    * target.code = #9629
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Elementary workers not elsewhere classified"
    * code = #39-3093  	
    * display = "Locker Room, Coatroom, and Dressing Room Attendants"

  * element[+]
    * target.code = #9629
    * target.equivalence = http://hl7.org/fhir/concept-map-equivalence#subsumes	
    * target.display = "Elementary workers not elsewhere classified"
    * code = #53-6021  	
    * display = "Parking Lot Attendants"

---

File: repos/IHE_SLASH_PCC.ODH/input/pagecontent/downloads.md

**Full Implementation Guide**

The entire Implementation Guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

In addition there are format specific definitions files.

- [XML](definitions.xml.zip)
- [JSON](definitions.json.zip)
- [TTL](definitions.ttl.zip)

**Examples:**

All the examples that are used in this Implementation Guide are available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)
- [TTL](examples.ttl.zip)

The source code for this Implementation Guide can be found on the [IHE PCC.ODH Github Repo](https://github.com/IHE/PCC.ODH).

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

---

File: repos/IHE_SLASH_PCC.ODH/input/pagecontent/index.md

## Overview

This IHE Implementation Guide is an International derivative of the USA specific [HL7 FHIR Profile: Occupational Data for Health (ODH), Release 1.3](https://hl7.org/fhir/us/odh/)

This Implementation Guide is a reconciled version, containing changes in response to comments received in the Sept. 2018 ballot. It has been updated to FHIR R4.0.1.

### Introduction and Guidance

This Implementation Guide (IG) contains profiles to implement support for Occupational Data for Health (ODH). ODH describes structured work information primarily designed to facilitate clinical care, including population health and value-based care. ODH also can be used to support public health reporting. ODH is not designed to support billing activities. This set of FHIR profiles is specified as a composition resource, but it is not intended to be used as a stand-alone composition. Rather, the desired content should be included in broader IGs and available as a response to requests for ODH information. Some use cases may leverage only a subset of the ODH profiles, and these should be specified within those work products. For instance, in the Vital Records Death Reporting (VRDR) IG, the data requirements for work information are limited to those in the Usual Work profile.

### Background

The majority of adults typically spend more than a third their waking hours at work. Therefore, health and work are inextricably inter-related. For example, the management of chronic conditions requires taking the patient's work environment into consideration. Work-related conditions are often first brought to the attention of a primary care provider. Some conditions related to exposure to hazards in the workplace can have a long latency, requiring knowledge of a person's work history for recognition, diagnosis, and treatment. The recognition of new conditions related to previously unknown workplace hazards has often come from astute clinicians, which requires knowledge of the patient's work. ONC has indicated recognition of the value of work information for health care. The incorporation of ODH into Electronic Health Records (EHRs) and other health IT systems presents an opportunity to improve health in relation to work. ODH provides a structure and standardization for work information that can be used across systems to take advantage of system tools for clinical decision support, population health, and public health. Research has been conducted and guidance is available to support clinicians, and the use of ODH by health IT systems can support identification of patients that would benefit the most from this knowledge.

### Scope

The Occupational Data for Health (ODH) FHIR IG covers information about a patient's work, including some voluntary work, or a patient's household members' work. ODH is designed for the social history section of a medical record, to facilitate clinical care in multiple disciplines and delivery environments. ODH can be used for clinical decision support, population health activities and value-based care, and public health reporting. The scope of the work information in ODH includes:

- Employment Status  
- Retirement Date
- Combat Zone Period
- Past or Present Job for the patient or a household member, which includes:
  - Past or Present Job Occupation
  - Past or Present Job Industry
  - Work Classification
  - Work Schedule, which includes:
    - Weekly Work Days
    - Daily Work Hours
  - Job Duty
  - Occupational Hazard
  - Employer name
  - Employer address
  - Related Subject (when it is Past or Present Job of a household member of the person)
  - Start/End Dates
  - Usual Work of the patient or a household member, which includes:
  - Usual Occupation
  - Usual Industry
  - Usual Occupation Duration
  - Related Subject (when it is Usual Work of a household member of the person)
  - Start Date

### Known Issues and Limitations

This IG includes more extensive occupational data than typically collected in current systems. The content and structure of this IG is intended to inform clinical care, support population health, and contribute to public health activities. While there may be some overlap with administrative and billing information maintained by some systems, the information in this IG is not designed to support billing and administrative needs. While multiple retirement dates are supported, the retirement date is not linked to any specific job or usual occupation.

There are required terminology vocabulary that are not yet available.

- `https://metadata.ilo.org/thesaurus.html`
- `https://www.ilo.org/global/industries-and-sectors/health-services/lang--en/index.htm`
- `http://terminology.hl7.org/CodeSystem/PHOccupationalDataForHealthODH`
- `urn:oid:2.16.840.1.114222.4.5.327`


---

