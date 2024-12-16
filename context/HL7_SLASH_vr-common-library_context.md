File: repos/HL7_SLASH_vr-common-library/input/fsh/codesystems/CodeSystemCanadianProvincesVitalRecords.fsh

// // RuleSet: CanadaProvinces
// // * $provinces#AB	"Alberta"
// // * $provinces#BC	"British Columbia"
// // * $provinces#MB	"Manitoba"
// // * $provinces#NB	"New Brunswick"
// // * $provinces#NL	"Newfoundland and Labrador"
// // * $provinces#NS	"Nova Scotia"
// // * $provinces#NT	"Northwest Territories"
// // * $provinces#NU	"Nunavut"
// // * $provinces#ON	"Ontario"
// // * $provinces#PE	"Prince Edward Island"
// // * $provinces#QC	"Quebec"
// // * $provinces#SK	"Saskatchewan"
// // * $provinces#YT	"Yukon"

// CodeSystem: CodeSystemCanadianProvincesVitalRecords
// Id: CodeSystem-canadian-provinces-vr
// Title: "Canadian Provinces Vital Records -- Should be replaced by https://canadapost.ca/CodeSystem/ProvinceCodes"
// Description: "Canadian Provinces"
// * ^caseSensitive = true
// * ^experimental = false
// * #AB	"Alberta" "Alberta"
// * #BC	"British Columbia" "British Columbia"
// * #MB	"Manitoba" "Manitoba"
// * #NB	"New Brunswick" "New Brunswick"
// * #NL	"Newfoundland and Labrador" "Newfoundland and Labrador"
// * #NS	"Nova Scotia" "Nova Scotia"
// * #NT	"Northwest Territories" "Northwest Territories"
// * #NU	"Nunavut" "Nunavut"
// * #ON	"Ontario" "Ontario"
// * #PE	"Prince Edward Island" "Prince Edward Island"
// * #QC	"Quebec" "Quebec"
// * #SK	"Saskatchewan" "Saskatchewan"
// * #YT	"Yukon" "Yukon"

CodeSystem: CodeSystemUSStatesTerritoriesVitalRecords
Id: CodeSystem-us-states-territories-vr 
Title: "Code System - US States and Territories"
Description: "Surrogate for usps.com codesystem - IG Publisher found issues with that codesystem.
This codesystem is only for use in the vital records use cases supported by this Implementation guide, and should not be used elsewhere."
* ^caseSensitive = true
* ^experimental = false
* #AL  "Alabama" "Alabama"
* #AK  "Alaska" "Alaska"
* #AZ  "Arizona" "Arizona"
* #AR  "Arkansas" "Arkansas"
* #CA  "California" "California"
* #CO  "Colorado" "Colorado"
* #CT  "Connecticut" "Connecticut"
* #DE  "Delaware" "Delaware"
* #DC  "District of Columbia" "District of Columbia"
* #FL  "Florida" "Florida"
* #GA  "Georgia" "Georgia"
* #HI  "Hawaii" "Hawaii"
* #ID  "Idaho" "Idaho"
* #IL  "Illinois" "Illinois"
* #IN  "Indiana" "Indiana"
* #IA  "Iowa" "Iowa"
* #KS  "Kansas" "Kansas"
* #KY  "Kentucky" "Kentucky"
* #LA  "Louisiana" "Louisiana"
* #ME  "Maine" "Maine"
* #MD  "Maryland" "Maryland"
* #MA  "Massachusetts" "Massachusetts"
* #MI  "Michigan" "Michigan"
* #MN  "Minnesota" "Minnesota"
* #MS  "Mississippi" "Mississippi"
* #MO  "Missouri" "Missouri"
* #MT  "Montana" "Montana"
* #NE  "Nebraska" "Nebraska"
* #NV  "Nevada" "Nevada"
* #NH  "New Hampshire" "New Hampshire"
* #NJ  "New Jersey" "New Jersey"
* #NM  "New Mexico" "New Mexico"
* #NY  "New York" "New York"
* #NC  "North Carolina" "North Carolina"
* #ND  "North Dakota" "North Dakota"
* #OH  "Ohio" "Ohio"
* #OK  "Oklahoma" "Oklahoma"
* #OR  "Oregon" "Oregon"
* #PA  "Pennsylvania" "Pennsylvania"
* #RI  "Rhode Island" "Rhode Island"
* #SC  "South Carolina" "South Carolina"
* #SD  "South Dakota" "South Dakota"
* #TN  "Tennessee" "Tennessee"
* #TX  "Texas" "Texas"
* #UT  "Utah" "Utah"
* #VT  "Vermont" "Vermont"
* #VA  "Virginia" "Virginia"
* #WA  "Washington" "Washington"
* #WV  "West Virginia" "West Virginia"
* #WI  "Wisconsin" "Wisconsin"
* #WY  "Wyoming" "Wyoming"
* #AS  "American Samoa" "American Samoa"
* #GU  "Guam" "Guam"
* #MP  "Northern Mariana Islands" "Northern Mariana Islands"
* #PR  "Puerto Rico" "Puerto Rico"
* #VI  "Virgin Islands" "Virgin Islands"


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/codesystems/CodeSystemComponent.fsh

RuleSet: PlaceComponentCode(len, number)
* #EmergingIssue{len}_{number} "EmergingIssue{len}_{number}" "EmergingIssue{len}_{number}"

CodeSystem: CodeSystemComponentVitalRecords
Id: codesystem-vr-component
Title: "Code System - Local Component Codes"
Description: "Local Component Codes for observation components that lack an appropriate LOINC code.
This codesystem is only for use in the vital records use cases supported by this Implementation guide, and should not be used elsewhere."
* insert boilerplate
* ^content = #complete
* ^caseSensitive = false
* ^experimental = false 
* insert PlaceComponentCode(1,1)
* insert PlaceComponentCode(1,2)
* insert PlaceComponentCode(1,3)
* insert PlaceComponentCode(1,4)
* insert PlaceComponentCode(1,5)
* insert PlaceComponentCode(1,6)
* insert PlaceComponentCode(1,7)
* insert PlaceComponentCode(1,8)
* insert PlaceComponentCode(8,1)
* insert PlaceComponentCode(8,2)
* insert PlaceComponentCode(8,3)
* #EmergingIssue20 "EmergingIssue20" "EmergingIssue20"
* #FirstEditedCode "First Edited Race Code" "First Edited Race Code"
* #SecondEditedCode "Second Edited Race Code" "Second Edited Race Code"
* #ThirdEditedCode "Third Edited Race Code" "Third Edited Race Code"
* #FourthEditedCode "Fourth Edited Race Code" "Fourth Edited Race Code"
* #FifthEditedCode "Fifth Edited Race Code" "Fifth Edited Race Code"
* #SixthEditedCode "Sixth Edited Race Code" "Sixth Edited Race Code"
* #SeventhEditedCode "Seventh Edited Race Code" "Seventh Edited Race Code"
* #EighthEditedCode "Eighth Edited Race Code" "Eighth Edited Race Code"
* #FirstAmericanIndianCode "First Edited American Indian Race Code" "First Edited American Indian Race Code"
* #SecondAmericanIndianCode "Second Edited American Indian Race Code" "Second Edited American Indian Race Code"
* #FirstOtherAsianCode "First Edited Other Asian Race Code" "First Edited Other Asian Race Code"
* #SecondOtherAsianCode "Second Edited Other Asian Race Race Code" "Second Edited Other Asian Race Race Code"
* #FirstOtherPacificIslanderCode "First Edited Other Pacific Islander Race Code" "First Edited Other Pacific Islander Race Code"
* #SecondOtherPacificIslanderCode "First Edited Other Pacific Islander Race Code" "First Edited Other Pacific Islander Race Code"
* #FirstOtherRaceCode "First Edited Other Race Code" "First Edited Other Race Code"
* #SecondOtherRaceCode "First Edited Other Race Code" "First Edited Other Race Code"
* #RaceRecode40 "Race Recode 40" "Race Recode 40"
* #HispanicCode "Hispanic Code" "Hispanic Code"
* #HispanicCodeForLiteral "Hispanic Code for Literal" "Hispanic Code for Literal"
* #RACEMVR "Race Missing Value Reason" "Race Missing Value Reason"
* #HispanicMexican "Hispanic Mexican" "Hispanic Mexican"
* #HispanicPuertoRican "Hispanic Puerto Rican" "Hispanic Puerto Rican"
* #HispanicCuban "Hispanic Cuban" "Hispanic Cuban"
* #HispanicOther "Hispanic Other" "Hispanic Other"
* #HispanicLiteral "Hispanic Literal" "Hispanic Literal"
* #White "White" "White"
* #BlackOrAfricanAmerican "Black Or African American" "Black Or African American"
* #AmericanIndianOrAlaskanNative "American Indian Or Alaska Native" "American Indian Or Alaska Native"
* #AsianIndian "Asian Indian" "Asian Indian"
* #Chinese "Chinese" "Chinese"
* #Filipino "Filipino" "Filipino"
* #Japanese "Japanese" "Japanese"
* #Korean "Korean" "Korean"
* #Vietnamese "Vietnamese" "Vietnamese"
* #OtherAsian "Other Asian" "Other Asian"
* #NativeHawaiian "Native Hawaiian" "Native Hawaiian"
* #GuamanianOrChamorro "Guamanian Or Chamorro" "Guamanian Or Chamorro"
* #Samoan "Samoan" "Samoan"
* #OtherPacificIslander "Other Pacific Islander" "Other Pacific Islander"
* #OtherRace "Other Race" "Other Race"
* #FirstAmericanIndianOrAlaskanNativeLiteral "First American Indian Or Alaska Native Literal" "First American Indian Or Alaska Native Literal"
* #SecondAmericanIndianOrAlaskanNativeLiteral "Second American Indian Or Alaska Native Literal" "Second American Indian Or Alaska Native Literal"
* #FirstOtherAsianLiteral "First Other Asian Literal" "First Other Asian Literal"
* #SecondOtherAsianLiteral "Second Other Asian Literal" "Second Other Asian Literal"
* #FirstOtherPacificIslanderLiteral "First Other Pacific Islander Literal" "First Other Pacific Islander Literal"
* #SecondOtherPacificIslanderLiteral "Second Other Pacific Islander Literal" "Second Other Pacific Islander Literal"
* #FirstOtherRaceLiteral "First Other Race Literal" "First Other Race Literal"
* #SecondOtherRaceLiteral "Second Other Race Literal" "Second Other Race Literal"
* ^experimental = false

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/codesystems/CodeSystemCountryVitalRecords.fsh

CodeSystem: CodeSystemCountryCodeVitalRecords
Id: CodeSystem-country-code-vr
Title: "Code System - Country Codes Vital Records"
Description: "2 Letter Country Codes from GEC and ISO 3166-1.
This codesystem is only for use in the vital records use cases supported by this Implementation guide, and should not be used elsewhere."
* ^caseSensitive = false
* #AA "Aruba" "Aruba"
* #AC "Antigua And Barbuda" "Antigua And Barbuda"
* #AE "United Arab Emirates" "United Arab Emirates"
* #AF "﻿afghanistan" "﻿afghanistan"
* #AG "Algeria" "Algeria"
* #AJ "Azerbaijan" "Azerbaijan"
* #AL "Albania" "Albania"
* #AM "Armenia" "Armenia"
* #AN "Andorra" "Andorra"
* #AO "Angola" "Angola"
* #AR "Argentina" "Argentina"
* #AS "Australia" "Australia"
* #AT "Ashmore And Cartier Islands" "Ashmore And Cartier Islands"
* #AU "Austria" "Austria"
* #AV "Anguilla" "Anguilla"
* #AX "Akrotiri" "Akrotiri"
* #AY "Antarctica" "Antarctica"
* #BA "Bahrain" "Bahrain"
* #BB "Barbados" "Barbados"
* #BC "Botswana" "Botswana"
* #BD "Bermuda" "Bermuda"
* #BE "Belgium" "Belgium"
* #BF "Bahamas, The" "Bahamas, The"
* #BG "Bangladesh" "Bangladesh"
* #BH "Belize" "Belize"
* #BK "Bosnia And Herzegovina" "Bosnia And Herzegovina"
* #BL "Bolivia" "Bolivia"
* #BM "Burma, Myanmar" "Burma, Myanmar"
* #BN "Benin" "Benin"
* #BO "Belarus" "Belarus"
* #BP "Solomon Islands" "Solomon Islands"
* #BR "Brazil" "Brazil"
* #BS "Bassas Da India" "Bassas Da India"
* #BT "Bhutan" "Bhutan"
* #BU "Bulgaria" "Bulgaria"
* #BV "Bouvet Island" "Bouvet Island"
* #BX "Brunei" "Brunei"
* #BY "Burundi" "Burundi"
* #CA "Canada" "Canada"
* #CB "Cambodia" "Cambodia"
* #CD "Chad" "Chad"
* #CE "Sri Lanka" "Sri Lanka"
* #CF "Congo (brazzaville), Republic Of The Congo" "Congo (brazzaville), Republic Of The Congo"
* #CG "Congo (kinshasa), Democratic Republic Of The Congo, Zaire" "Congo (kinshasa), Democratic Republic Of The Congo, Zaire"
* #CH "China" "China"
* #CI "Chile" "Chile"
* #CJ "Cayman Islands" "Cayman Islands"
* #CK "Cocos (keeling) Islands" "Cocos (keeling) Islands"
* #CL "Central And Southern Line Islands" "Central And Southern Line Islands"
* #CM "Cameroon" "Cameroon"
* #CN "Comoros" "Comoros"
* #CO "Colombia" "Colombia"
* #CR "Coral Sea Islands" "Coral Sea Islands"
* #CS "Costa Rica" "Costa Rica"
* #CT "Central African Republic" "Central African Republic"
* #CU "Cuba" "Cuba"
* #CV "Cape Verde" "Cape Verde"
* #CW "Cook Islands" "Cook Islands"
* #CY "Cyprus" "Cyprus"
* #CZ "Czechoslovakia" "Czechoslovakia"
* #DA "Denmark" "Denmark"
* #DJ "Djibouti" "Djibouti"
* #DM "Dahomey" "Dahomey"
* #DO "Dominica" "Dominica"
* #DQ "Jarvis Island" "Jarvis Island"
* #DR "Dominican Republic" "Dominican Republic"
* #DX "Dhekelia" "Dhekelia"
* #EB "East Berlin" "East Berlin"
* #EC "Ecuador" "Ecuador"
* #EG "Egypt" "Egypt"
* #EI "Ireland" "Ireland"
* #EK "Equatorial Guinea" "Equatorial Guinea"
* #EN "Estonia" "Estonia"
* #EQ "Canton And Enderberry Islands" "Canton And Enderberry Islands"
* #ER "Eritrea" "Eritrea"
* #ES "El Salvador" "El Salvador"
* #ET "Ethiopia" "Ethiopia"
* #EU "Europa Island" "Europa Island"
* #EZ "Czech Republic" "Czech Republic"
* #FG "French Guiana" "French Guiana"
* #FI "Åland, Finland" "Åland, Finland"
* #FJ "Fiji" "Fiji"
* #FK "Falkland Islands (islas Malvinas), Islas Malvinas" "Falkland Islands (islas Malvinas), Islas Malvinas"
* #FM "Federated States Of Micronesia, Micronesia,federated States Of" "Federated States Of Micronesia, Micronesia,federated States Of"
* #FO "Faroe Islands" "Faroe Islands"
* #FP "French Polynesia, Tahiti" "French Polynesia, Tahiti"
* #FR "France" "France"
* #FS "French Southern And Antarctic Lands" "French Southern And Antarctic Lands"
* #FT "French Territory Of The Affars And Issas" "French Territory Of The Affars And Issas"
* #GA "Gambia,the" "Gambia,the"
* #GB "Gabon" "Gabon"
* #GC "East Germany, German Democratic Republic" "East Germany, German Democratic Republic"
* #GE "Federal Republic Of Germany, West Germany" "Federal Republic Of Germany, West Germany"
* #GG "Georgia" "Georgia"
* #GH "Ghana" "Ghana"
* #GI "Gibraltar" "Gibraltar"
* #GJ "Grenada" "Grenada"
* #GK "Guernsey" "Guernsey"
* #GL "Greenland" "Greenland"
* #GM "Germany" "Germany"
* #GN "Gilbert And Ellice Islands" "Gilbert And Ellice Islands"
* #GO "Glorioso Islands" "Glorioso Islands"
* #GP "Guadeloupe" "Guadeloupe"
* #GR "Greece" "Greece"
* #GS "Gilbert Islands" "Gilbert Islands"
* #GT "Guatemala" "Guatemala"
* #GV "Guinea" "Guinea"
* #GY "Guyana" "Guyana"
* #GZ "Gaza Strip" "Gaza Strip"
* #HA "Haiti" "Haiti"
* #HK "Hong Kong" "Hong Kong"
* #HM "Heard Island And Mcdonald Islands" "Heard Island And Mcdonald Islands"
* #HO "Honduras" "Honduras"
* #HQ "Howland Island" "Howland Island"
* #HR "Croatia" "Croatia"
* #HU "Hungary" "Hungary"
* #IC "Iceland" "Iceland"
* #ID "Indonesia" "Indonesia"
* #IM "Isle Of Man" "Isle Of Man"
* #IN "India" "India"
* #IO "British Indian Ocean Territory" "British Indian Ocean Territory"
* #IP "Clipperton Island" "Clipperton Island"
* #IQ "Us Miscellaneous Pacific Islands" "Us Miscellaneous Pacific Islands"
* #IR "Iran" "Iran"
* #IS "Israel" "Israel"
* #IT "Italy" "Italy"
* #IU "Israel-syria Demilitarized Zone" "Israel-syria Demilitarized Zone"
* #IV "Côte D’ivoire, Ivory Coast" "Côte D’ivoire, Ivory Coast"
* #IW "Israel-jordan Demilitarized Zone" "Israel-jordan Demilitarized Zone"
* #IY "Iraq-saudi Arabia Neutral Zone" "Iraq-saudi Arabia Neutral Zone"
* #IZ "Iraq" "Iraq"
* #JA "Japan" "Japan"
* #JE "Jersey" "Jersey"
* #JM "Jamaica" "Jamaica"
* #JN "Jan Mayen" "Jan Mayen"
* #JO "Jordan" "Jordan"
* #JQ "Johnston Atoll" "Johnston Atoll"
* #JS "Svalbard And Jan Mayen" "Svalbard And Jan Mayen"
* #JU "Juan De Nova Island" "Juan De Nova Island"
* #KE "Kenya" "Kenya"
* #KG "Kyrgyzstan" "Kyrgyzstan"
* #KN "Korea,north, North Korea" "Korea,north, North Korea"
* #KR "Kiribati" "Kiribati"
* #KS "Korea,south, South Korea" "Korea,south, South Korea"
* #KT "Christmas Island" "Christmas Island"
* #KU "Kuwait" "Kuwait"
* #KV "Kosovo" "Kosovo"
* #KZ "Kazakhstan" "Kazakhstan"
* #LA "Laos" "Laos"
* #LE "Lebanon" "Lebanon"
* #LG "Latvia" "Latvia"
* #LH "Lithuania" "Lithuania"
* #LI "Liberia" "Liberia"
* #LO "Slovakia" "Slovakia"
* #LQ "Palmyra Atoll" "Palmyra Atoll"
* #LS "Liechtenstein" "Liechtenstein"
* #LT "Lesotho" "Lesotho"
* #LU "Luxembourg" "Luxembourg"
* #LY "Libya" "Libya"
* #MA "Madagascar" "Madagascar"
* #MB "Martinique" "Martinique"
* #MC "Macau" "Macau"
* #MD "Moldova" "Moldova"
* #MF "Mayotte" "Mayotte"
* #MG "Mongolia" "Mongolia"
* #MH "Montserrat" "Montserrat"
* #MI "Malawi" "Malawi"
* #MJ "Montenegro" "Montenegro"
* #MK "Macedonia" "Macedonia"
* #ML "Mali" "Mali"
* #MN "Monaco" "Monaco"
* #MO "Morocco" "Morocco"
* #MP "Mauritius" "Mauritius"
* #MQ "Midway Islands" "Midway Islands"
* #MR "Mauritania" "Mauritania"
* #MT "Malta" "Malta"
* #MU "Oman" "Oman"
* #MV "Maldives" "Maldives"
* #MX "Mexico" "Mexico"
* #MY "Malaysia" "Malaysia"
* #MZ "Mozambique" "Mozambique"
* #NC "New Caledonia" "New Caledonia"
* #NE "Niue" "Niue"
* #NF "Norfolk Island" "Norfolk Island"
* #NG "Niger" "Niger"
* #NH "New Hebrides, Vanuatu" "New Hebrides, Vanuatu"
* #NI "Nigeria" "Nigeria"
* #NL "Bonaire, Netherlands, Saba, Saint Eustatius" "Bonaire, Netherlands, Saba, Saint Eustatius"
* #NN "Sint Maarten" "Sint Maarten"
* #NO "Norway" "Norway"
* #NP "Nepal" "Nepal"
* #NR "Nauru" "Nauru"
* #NS "Suriname" "Suriname"
* #NT "Netherlands Antilles" "Netherlands Antilles"
* #NU "Nicaragua" "Nicaragua"
* #NZ "New Zealand" "New Zealand"
* #OD "South Sudan" "South Sudan"
* #PA "Paraguay" "Paraguay"
* #PC "Pitcairn Island" "Pitcairn Island"
* #PE "Peru" "Peru"
* #PF "Paracel Islands" "Paracel Islands"
* #PG "Spratly Islands" "Spratly Islands"
* #PJ "Etorofu, Habomai,kunashiri,and Shikotan Islands" "Etorofu, Habomai,kunashiri,and Shikotan Islands"
* #PK "Pakistan" "Pakistan"
* #PL "Poland" "Poland"
* #PM "Panama" "Panama"
* #PN "Panama" "Panama"
* #PO "Azores, Portugal" "Azores, Portugal"
* #PP "Papua New Guinea" "Papua New Guinea"
* #PQ "Panama Canal Zone" "Panama Canal Zone"
* #PS "Palau" "Palau"
* #PU "Guinea-bissau" "Guinea-bissau"
* #QA "Qatar" "Qatar"
* #RE "Reunion" "Reunion"
* #RH "Rhodesia, Southern Rhodesia" "Rhodesia, Southern Rhodesia"
* #RI "Serbia" "Serbia"
* #RM "Marshall Islands" "Marshall Islands"
* #RN "Saint Martin" "Saint Martin"
* #RO "Romania" "Romania"
* #RP "Philippines" "Philippines"
* #RS "Russia" "Russia"
* #RW "Rwanda" "Rwanda"
* #SA "Saudi Arabia" "Saudi Arabia"
* #SB "Saint Pierre And Miquelon" "Saint Pierre And Miquelon"
* #SC "Nevis, Saint Kitts And Nevis" "Nevis, Saint Kitts And Nevis"
* #SE "Seychelles" "Seychelles"
* #SF "South Africa" "South Africa"
* #SG "Senegal" "Senegal"
* #SH "Saint Helena, Ascension And Tristan Da Cunha" "Saint Helena, Ascension And Tristan Da Cunha"
* #SI "Slovenia" "Slovenia"
* #SK "Sikkim" "Sikkim"
* #SL "Sierra Leone" "Sierra Leone"
* #SM "San Marino" "San Marino"
* #SN "Singapore" "Singapore"
* #SO "Somalia" "Somalia"
* #SP "Spain" "Spain"
* #SQ "Swan Islands" "Swan Islands"
* #SS "Spanish Sahara" "Spanish Sahara"
* #ST "Saint Lucia" "Saint Lucia"
* #SU "Sudan" "Sudan"
* #SV "Svalbard" "Svalbard"
* #SW "Sweden" "Sweden"
* #SX "South Georgia And South Sandwich Islands" "South Georgia And South Sandwich Islands"
* #SY "Syria" "Syria"
* #SZ "Switzerland" "Switzerland"
* #TB "Saint Barthélemy" "Saint Barthélemy"
* #TC "United Arab Emirates" "United Arab Emirates"
* #TD "Trinidad And Tobago" "Trinidad And Tobago"
* #TE "Tromelin Island" "Tromelin Island"
* #TH "Thailand" "Thailand"
* #TI "Tajikistan" "Tajikistan"
* #TK "Turks And Caicos Islands" "Turks And Caicos Islands"
* #TL "Tokelau" "Tokelau"
* #TN "Tonga" "Tonga"
* #TO "Togo" "Togo"
* #TP "Sao Tome And Principe" "Sao Tome And Principe"
* #TQ "Trust Territory Of The Pacific Islands" "Trust Territory Of The Pacific Islands"
* #TS "Tunisia" "Tunisia"
* #TT "East Timor, Timor-leste" "East Timor, Timor-leste"
* #TU "Turkey" "Turkey"
* #TV "Tuvalu" "Tuvalu"
* #TW "Taiwan" "Taiwan"
* #TX "Turkmenistan" "Turkmenistan"
* #TZ "Tanzania" "Tanzania"
* #UC "Curaçao" "Curaçao"
* #UG "Uganda" "Uganda"
* #UK "England, Great Britain, United Kingdom" "England, Great Britain, United Kingdom"
* #UP "Ukraine" "Ukraine"
* #UR "Soviet Union, Union Of Soviet Socialist Republics" "Soviet Union, Union Of Soviet Socialist Republics"
* #US "United States" "United States"
* #UV "Burkina Faso, Upper Volta" "Burkina Faso, Upper Volta"
* #UY "Uruguay" "Uruguay"
* #UZ "Uzbekistan" "Uzbekistan"
* #VC "Saint Vincent And The Grenadines" "Saint Vincent And The Grenadines"
* #VE "Venezuela" "Venezuela"
* #VI "British Virgin Islands, Virgin Islands,british" "British Virgin Islands, Virgin Islands,british"
* #VM "Vietnam" "Vietnam"
* #VN "North Vietnam" "North Vietnam"
* #VS "South Vietnam" "South Vietnam"
* #VT "Holy See, Vatican City" "Holy See, Vatican City"
* #WA "Namibia" "Namibia"
* #WB "West Berlin" "West Berlin"
* #WE "West Bank" "West Bank"
* #WF "Wallis And Futuna" "Wallis And Futuna"
* #WI "Western Sahara" "Western Sahara"
* #WQ "Wake Island" "Wake Island"
* #WS "Samoa" "Samoa"
* #WZ "Swaziland" "Swaziland"
* #YE "Yemen (sana'a)" "Yemen (sana'a)"
* #YI "Serbia And Montenegro, Yugoslavia" "Serbia And Montenegro, Yugoslavia"
* #YM "Yemen" "Yemen"
* #YQ "Ryukyu Islands,southern" "Ryukyu Islands,southern"
* #YS "Yemen (aden)" "Yemen (aden)"
* #ZA "Zambia" "Zambia"
* #ZI "Zimbabwe" "Zimbabwe"
* #ZZ "Not Classifiable" "Not Classifiable"
* ^experimental = false


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/codesystems/CodeSystemEditFlags.fsh

CodeSystem: CodeSystemEditFlagsVitalRecords
Id: CodeSystem-vr-edit-flags
Title: "Code System - Birth and Death Edit Flags Vital Records"
Description: "This code system contains codes to represent all edit flags.
This codesystem is only for use in the vital records use cases supported by this Implementation guide, and should not be used elsewhere."
* ^caseSensitive = true
* ^content = #complete
* ^experimental = false
* #0 "Edit Passed" "Edit Passed" //PHC1362
* #0off "Off" //PHC1380
* #1 "Edit Failed, Data Queried, and Verified" "Edit Failed, Data Queried, and Verified" //PHC1363
* #1queriedCorrect "Queried, and Correct" "Queried, and Correct" //PHC1494
* #1dataQueried "Data queried" "Data queried" //PHC2143
* #2 "Edit Failed, Data Queried, but not Verified" "Edit Failed, Data Queried, but not Verified" //PHC1364 
* #2pluralityQueriedInconsistent "Plurality/Set Order Queried, Inconsistent" "Plurality/Set Order Queried, Inconsistent" //PHC1495
* #3 "Edit Failed, Review Needed" "Edit Failed, Review Needed" //PHC1366
* #4 "Edit Failed, Query Needed" "Edit Failed, Query Needed" //PHC1365



// * #DEducBypass0 "Decedents Education - Edit Passed" // * #editBypass0
// * #DEducBypass1 "Decedents Education - Edit Failed, Data Queried, and Verified" // * #editBypass1
// * #DEducBypass2 "Decedents Education - Edit Failed, Data Queried, but not Verified" // * #editBypass2
// * #DEducBypass3 "Decedents Education - Edit Failed, Review Needed" // * #editBypass3
// * #DEducBypass4 "Decedents Education - Edit Failed, Query Needed" // * #editBypass4
// * #sexBypass0 "Sex - Edit Passed" // * #editBypass0
// * #sexBypass1 "Sex - Edit Failed, Data Queried, and Verified" // * #editBypass1
// * #ageBypass0 "Age - Edit Passed" // * #editBypass0
// * #ageBypass1 "Age - Edit Failed, Data Queried, and Verified" // * #editBypass1
// * #maritalBypass0 "Marital - Edit Passed" // * #editBypass0
// * #maritalBypass1 "Marital - Edit Failed, Data Queried, and Verified" // * #editBypass1
// * #maritalBypass2 "Marital - Edit Failed, Data Queried, but not Verified" // * #editBypass2
// * #maritalBypass4 "Marital - Edit Failed, Query Needed" // * #editBypass4
// * #MAgeBypass0 "Mothers Age - Edit Passed" // * #editBypass0
// * #MAgeAgeBypass1 "Mothers Age - Data Queried" // #dataQueried
// * #FAgeBypass0 "Fathers Age - Edit Passed" //PHC1362 // * #editBypass0
// * #FAgeBypass1 "Fathers Age - Data Queried" //PHC2143 // #dataQueried
// * #MEducBypass0 "Mothers Education - Edit Passed" // #editBypass0
// * #MEducBypass1 "Mothers Education - Edit Failed, Data Queried and Verified" //  #editBypass1
// * #MEducBypass2 "Mothers Education - Edit Failed, Data Queried, but not Verified" // #editBypass2
// * #FEducBypass0 "Fathers Education - Edit Passed" //  #editBypass0
// * #FEducBypass1 "Fathers Education - Edit Failed, Data Queried and Verified" //  #editBypass1
// * #FEducBypass2 "Fathers Education - Edit Failed, Data Queried, but not Verified" //  #editBypass2
// * #NPrevBypass0 "Number of Prenatal Care Visits - Edit Passed" //  #editBypass0
// * #NPrevBypass1 "Number of Prenatal Care Visits - Edit Failed, Number Verified" //  #editBypass1
// * #NPrevBypass2 "Number of Prenatal Care Visits - Edit Failed, Number not Verified" //  #editBypass2
// * #HGTBypass0 "Mothers Height - Edit Passed" // #editBypass0
// * #HGTBypass1 "Mothers Height - Edit Failed, Number Verified" // #editBypass1
// * #HGTBypass2 "Mothers Height - Edit Failed, Number not Verified" // #editBypass2
// * #PWGTBypass0 "Mothers Prepregnancy Weight - Edit Passed"  #editBypass0
// * #PWGTBypass1 "Mothers Prepregnancy Weight - Edit Failed, Number Verified" // #editBypass1
// * #PWGTBypass2 "Mothers Prepregnancy Weight - Edit Failed, Number not Verified" // #editBypass2
// * #DWGTBypass0 "Mothers Delivery Weight - Edit Passed" // #editBypass0
// * #DWGTBypass1 "Mothers Delivery Weight - Edit Failed, Number Verified" // #editBypass1
// * #DWGTBypass2 "Mothers Delivery Weight - Edit Failed, Number not Verified" // #editBypass2
// * #NPCesBypass0 "Number of Previous Cesareans - Edit Passed" // #editBypass0
// * #NPCesBypass1 "Number of Previous Cesareans - Edit Failed, Verified" // #editBypass1
// * #birthweightBypass0 "Birthweight - Off" // #off
// * #birthweightBypass1 "Birthweight - Queried data correct, out of range" // #correctOutOfRange
// * #birthweightBypass2 "Birthweight - Queried, failed birthweight/gestation edit" // #failedBirthWeightGestationEdit
// * #OWGestBypass0 "Obstetric Estimation of Gestation - Off" // #off
// * #OWGestBypass1 "Obstetric Estimation of Gestation - Queried data correct, out of range" // #correctOutOfRange
// * #pluralityBypass0 "Plurality - Off" //  #off
// * #pluralityBypass1 "Plurality - Queried, and Correct" // #correctOutOfRange
// * #pluralityBypass2 "Plurality - Plurality/Set Order Queried, Inconsistent" // #pluralityQueriedInconsistent
// * #fetalWeightBypass0 "Weight of Fetus - Off" // #off
// * #fetalWeightBypass1 "Weight of Fetus - Queried data correct, out of range" // #correctOutOfRange
// * #fetalWeightBypass2 "Weight of Fetus - Queried, failed delivery weight/gestation edit" // #failedBirthWeightGestationEdit
// * #pregnancyReportBypass0 "Pregnancy Report - Edit Passed" // #editBypass0
// * #pregnancyReportBypass1 "Pregnancy Report - Edit Failed, Data Queried, and Verified" // #editBypass1
// * #pregnancyReportBypass2 "Pregnancy Report - Edit Failed, Data Queried, but not Verified" //#editBypass2


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/codesystems/CodeSystemHispanicOriginVitalRecords.fsh

CodeSystem: CodeSystemHispanicOriginVitalRecords
Id: CodeSystem-hispanic-origin-vr
Title: "Code System - HispanicOrigin Vital Records"
Description: "HispanicOrigin from [Appendix_D_Excel_Hispanic_Origin_Code_List_Update_2011](https://www.cdc.gov/nchs/data/dvs/Appendix_D_Excel_Hispanic_Origin_Code_List_Update_2011.xls).
This codesystem is only for use in the vital records use cases supported by this Implementation guide, and should not be used elsewhere."

* ^caseSensitive = true
* ^experimental = false
* #100 "Non-Hispanic"
* #200 "Spaniard"
* #201 "Andalusian"
* #202 "Asturian"
* #203 "Castillian"
* #204 "Catalonian"
* #205 "Balearic Islander"
* #206 "Gallego"
* #207 "Valencian"
* #208 "Canarian"
* #209 "Spanish Basque"
* #210 "Mexican Checkbox"
* #211 "Mexican"
* #212 "Mexican American"
* #213 "Mexicano"
* #214 "Chicano"
* #215 "La Raza"
* #216 "Mexican American Indian"
* #217 "Caribbean (Reassigned to 290)"
* #218 "Mexico"
* #220 "Central and South America"
* #221 "Costa Rican"
* #222 "Guatemalan"
* #223 "Honduran"
* #224 "Nicaraguan"
* #225 "Panamanian"
* #226 "Salvadoran"
* #227 "Central American"
* #228 "Central American Indian"
* #229 "Canal Zone"
* #231 "Argentinean"
* #232 "Bolivian"
* #233 "Chilean"
* #234 "Colombian"
* #235 "Ecuadorian"
* #236 "Paraguayan"
* #237 "Peruvian"
* #238 "Uruguayan"
* #239 "Venezuelan"
* #240 "South American Indian"
* #241 "Criollo"
* #242 "South American"
* #250 "Latin American"
* #251 "Latin"
* #252 "Latino"
* #260 "Puerto Rican Checkbox"
* #261 "Puerto Rican"
* #270 "Cuban Checkbox"
* #271 "Cuban"
* #275 "Dominican"
* #280 "Other Spanish Checkbox"
* #281 "Hispanic"
* #282 "Spanish"
* #283 "Californio"
* #284 "Tejano"
* #285 "Nuevo Mexicano"
* #286 "Spanish American"
* #287 "Spanish American Indian"
* #288 "Meso American Indian"
* #289 "Mestizo"
* #290 "Caribbean"
* #291 "Multiple Hispanic Responses"
* #299 "Other Spanish"
* #996 "Uncodable"
* #997 "Deferred"
* #998 "Unknown"
* #999 "First Pass Reject"


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/codesystems/CodeSystemIJE.fsh

CodeSystem: CodeSystemIJEVitalRecords
Id: codesystem-ije-vr
Title: "Code System - Placeholder Code System for IJE in Vital Records"
Description: "IJE Code System Placeholder is needed to provide a URL upon which to anchor concept maps.
This codesystem is only for use in the vital records use cases supported by this Implementation guide, and should not be used elsewhere."
* ^caseSensitive = false
* ^compositional = false
* ^versionNeeded = false
* ^content = #not-present
* ^experimental = false
* ^publisher = "Centers for Disease Control, National Center for Health Statistics"
* ^useContext.code.display = "Vital Statistics"
* ^useContext.valueCodeableConcept.text = "Vital Statistics"
* ^status = #active 
//* ^valueSet = "http://hl7.org/fhir/us/vr-common-library/ValueSet/ije-vr|1.0.0"



---

File: repos/HL7_SLASH_vr-common-library/input/fsh/codesystems/CodeSystemJurisdictionsVitalRecords.fsh


CodeSystem: CodeSystemJurisdictionsVitalRecords
Id: CodeSystem-jurisdictions-vr
Title: "Code System - Jurisdictions Vital Records"
Description: "NVSS Jurisdictions that are not US States or Territories.
This codesystem is only for use in the vital records use cases supported by this Implementation guide, and should not be used elsewhere."
* ^caseSensitive = true
* #YC "New York City" "New York City"
* ^experimental = false


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/codesystems/CodeSystemLocalObservationCodesVitalRecords.fsh

CodeSystem: CodeSystemLocalObservationsCodesVitalRecords
Id: CodeSystem-local-observation-codes-vr
Title: "Code System - Local Observation Codes Vital Records"
Description: "Local Observation Codes for observations that lack an appropriate LOINC code.
This codesystem is only for use in the vital records use cases supported by this Implementation guide, and should not be used elsewhere."
* insert boilerplate
* ^content = #complete
* ^caseSensitive = false
* ^experimental = false
* ^status = #active 
* #emergingissues "Emerging Issues" "NCHS-required emerging issues data."
* #inputraceandethnicity "Input Race and Ethnicity" "Race and Ethnicity Data submitted by Jurisdictions to NCHS" 
* #codedraceandethnicity "Coded Race and Ethnicity" "Coded Race and Ethnicity Data produced by NCHS from submitted death record"
* #inputraceandethnicityDecedent "Decedent Input Race and Ethnicity" "Decedent Race and Ethnicity Data submitted by Jurisdictions to NCHS"
* #codedraceandethnicityDecedent "Decedent Coded Race and Ethnicity" "Decedent Coded Race and Ethnicity Data produced by NCHS from submitted death record"
* #inputraceandethnicityMother "Mother Input Race and Ethnicity" "Mother Race and Ethnicity Data submitted by Jurisdictions to NCHS"
* #codedraceandethnicityMother "Mother Coded Race and Ethnicity" "Mother Coded Race and Ethnicity Data produced by NCHS from submitted death record"
* #inputraceandethnicityFather "Father Input Race and Ethnicity" "Father Race and Ethnicity Data submitted by Jurisdictions to NCHS"
* #codedraceandethnicityFather "Father Coded Race and Ethnicity" "Father Coded Race and Ethnicity Data produced by NCHS from submitted death record"


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/codesystems/CodeSystemRaceCodeVitalRecords.fsh

CodeSystem: CodeSystemRaceCodeVitalRecords
Id: CodeSystem-race-code-vr
Title: "Code System - Race Code Vital Records"
Description: "RaceCode from [Appendix E Excel Race Code List Update 2001](https://www.cdc.gov/nchs/data/dvs/Appendix_E_Excel_Race_Code_List_Update_2011.xls).
This codesystem is only for use in the vital records use cases supported by this Implementation guide, and should not be used elsewhere."
* ^caseSensitive = true
* ^experimental = false
* #100 "White Checkbox"
* #101 "White"
* #102 "Arab"
* #103 "English"
* #104 "French"
* #105 "German"
* #106 "Irish"
* #107 "Italian"
* #108 "Near Easterner"
* #109 "Polish"
* #110 "Scottish"
* #111 "Armenian"
* #112 "Assyrian"
* #113 "Egyptian"
* #114 "Iranian"
* #115 "Iraqi"
* #116 "Lebanese"
* #117 "Middle East"
* #118 "Palestinian"
* #119 "Syrian"
* #120 "Other Arab"
* #121 "Afghanistani"
* #122 "Israeli"
* #123 "Californio"
* #124 "Cajun"
* #125 "EUROPEAN"
* #126 "PORTUGUESE"
* #127 "ALBANIAN"
* #128 "CROATIAN"
* #129 "CZECH"
* #130 "RUSSIAN"
* #131 "UKRANIAN"
* #132 "CZECHOSLOVAKIAN"
* #133 "BOSNIAN"
* #134 "KOSOVIAN"
* #199 "Multiple WHITE responses"
* #200 "Black Checkbox"
* #201 "Black"
* #202 "African"
* #203 "African American"
* #204 "AfroAmerican"
* #205 "Nigritian"
* #206 "Negro"
* #207 "Bahamian"
* #208 "Barbadian"
* #209 "Botswana"
* #213 "Ethiopian"
* #214 "Haitian"
* #215 "Jamaican"
* #216 "Liberian"
* #218 "Namibian"
* #219 "Nigerian"
* #220 "Other African"
* #222 "Tobago"
* #223 "Trinidad"
* #224 "West Indies"
* #225 "Zaire"
* #226 "ERITREAN"
* #227 "TOGOLESE"
* #228 "SOMALIAN"
* #299 "Multiple BLACK  or AFRICAN AMERICAN responses"
* #300 "American Indian Checkbox"
* #400 "Asian Indian Checkbox"
* #401 "Asian Indian"
* #402 "Bangladeshi"
* #403 "Bhutanese"
* #404 "Burmese"
* #405 "Cambodian"
* #410 "Chinese Checkbox"
* #411 "Chinese"
* #412 "Taiwanese"
* #420 "Filipino Checkbox"
* #421 "Filipino"
* #422 "Hmong"
* #423 "Indonesian"
* #430 "Japanese Checkbox"
* #431 "Japanese"
* #440 "Korean Checkbox"
* #441 "Korean"
* #442 "Laotian"
* #443 "Malaysian"
* #444 "Okinawan"
* #445 "Pakistani"
* #446 "Sri Lankan"
* #447 "Thai"
* #450 "Vietnamese Checkbox"
* #451 "Vietnamese"
* #460 "Other Asian Checkbox"
* #462 "Asian"
* #463 "Asiatic"
* #465 "Mongolian"
* #466 "Oriental"
* #467 "Whello"
* #468 "Yello"
* #469 "Indo Chinese"
* #470 "Iwo Jiman"
* #471 "Maldivian"
* #472 "Nepalese"
* #473 "Singaporean"
* #474 "MADAGASCAR"
* #475 "MIEN"
* #476 "TIBETAN"
* #499 "Multiple ASIAN responses"
* #500 "Native Hawaiian Checkbox"
* #501 "Native Hawaiian"
* #502 "Hawaiian"
* #503 "Part Hawaiian"
* #510 "Samoan Checkbox"
* #511 "Samoan"
* #512 "Tahitian"
* #513 "Tongan"
* #514 "Polynesian"
* #515 "Tokelauan"
* #520 "Guamanian Checkbox"
* #521 "Guamanian"
* #522 "Chamorro"
* #530 "Other Pacific Islander Checkbox"
* #531 "Mariana Islander"
* #532 "Marshallese"
* #533 "Palauan"
* #534 "Carolinian"
* #535 "Kosraean"
* #536 "Micronesian"
* #537 "Pohnpeian"
* #538 "Saipanese"
* #539 "Kirabati"
* #540 "Chuukese"
* #541 "Yapese"
* #542 "Fijian"
* #543 "Melanesian"
* #544 "Papua New Guinean"
* #545 "Solomon Islander"
* #546 "New Hebrides"
* #547 "Pacific Islander"
* #599 "Multiple NATIVE HAWAIIAN and OTHER PACIFIC ISLANDER responses"
* #600 "Other Race Checkbox"
* #601 "Argentinean"
* #602 "Bolivian"
* #604 "Central American"
* #605 "Chicano"
* #606 "Chilean"
* #607 "Colombian"
* #608 "Costa Rican"
* #609 "Cuban"
* #610 "Ecuadorian"
* #611 "Salvadoran"
* #612 "Guatemalan"
* #613 "Hispanic"
* #614 "Honduran"
* #615 "Latin American"
* #616 "Mestizo"
* #617 "Mexican"
* #618 "Nicaraguan"
* #619 "Panamanian"
* #620 "Paraguayan"
* #621 "Peruvian"
* #622 "Puerto Rican"
* #623 "Morena"
* #624 "South American"
* #625 "Spanish"
* #626 "Spanish American"
* #627 "Sudamericano"
* #628 "Uruguayan"
* #629 "Venezuelan"
* #630 "Spaniard"
* #631 "Tejano"
* #632 "Cayman Islander"
* #633 "Moroccan"
* #634 "North African"
* #635 "United Arab Emirates"
* #636 "South African"
* #637 "Azerbaijani"
* #638 "Aryan"
* #640 "Dominican Republic"
* #641 "Dominica Islander"
* #642 "Belizean"
* #643 "Bermudan"
* #644 "Aruba Islander"
* #645 "Cayenne"
* #646 "Guyanese"
* #647 "Surinam"
* #648 "Sudanese"
* #649 "Amerasian"
* #650 "Eurasian"
* #651 "Brazilian"
* #652 "Brown"
* #653 "Bushwacker"
* #655 "Cape Verdean"
* #656 "Chocolate"
* #657 "Coe Clan"
* #658 "Coffee"
* #659 "Cosmopolitan"
* #660 "Issues"
* #661 "Jackson White"
* #662 "Melungeon"
* #663 "Mixed"
* #664 "Ramp"
* #665 "Wesort"
* #666 "Mulatto"
* #667 "Moor"
* #668 "Biracial"
* #669 "Creole"
* #670 "Indian"
* #671 "Turk"
* #672 "Half Breed"
* #673 "Rainbow"
* #674 "Octoroon"
* #675 "Quadroon"
* #676 "Multiracial"
* #677 "Interracial"
* #678 "Multiethnic"
* #679 "Multinational"
* #680 "JEWISH"
* #681 "CANADIAN"
* #682 "FRENCH CANADIAN"
* #683 "IBERIAN"
* #684 "TRIGUENO"
* #685 "MALADA"
* #686 "OTHER SPANISH"
* #699 "OTHER RACE, N.E.C."
* #990 "Multiple SOME OTHER RACE responses"
* #995 "American"
* #996 "Uncodable"
* #997 "Deferred"
* #998 "UNKNOWN"
* #999 "First Pass Reject"
* #A01 "Abenaki Nation of Missiquoi"
* #A05 "Algonquian"
* #A09 "Apache"
* #A10 "Chiricahua"
* #A11 "Fort Sill Apache"
* #A12 "Jicarilla Apache"
* #A13 "Lipan Apache"
* #A14 "Mescalero Apache"
* #A15 "Oklahoma Apache"
* #A16 "Payson Tonto Apache"
* #A17 "San Carlos Apache"
* #A18 "White Mountain Apache"
* #A24 "Arapahoe"
* #A25 "Northern Arapahoe"
* #A26 "Southern Arapahoe"
* #A27 "Wind River Arapahoe"
* #A31 "Arikara"
* #A34 "Assiniboine"
* #A35 "Fort Peck Assiniboine"
* #A36 "Fort Belknap Assiniboine"
* #A38 "Assiniboine Sioux"
* #A39 "Fort Peck Assiniboine and Sioux"
* #A42 "Bannock"
* #A45 "Blackfeet"
* #A51 "Brotherton"
* #A54 "Burt Lake Band"
* #A56 "Caddo"
* #A57 "Caddo Indian Tribe of Oklahoma"
* #A58 "Caddo Adais Indians"
* #A61 "Agua Caliente Band of Cahuilla Indians"
* #A62 "Augustine"
* #A63 "Cabazon Band of Cahuilla Mission Indians"
* #A64 "Cahuilla"
* #A65 "Los Coyotes Band of Cahuilla Mission Indians"
* #A66 "Morongo Band of Cahuilla Mission Indians"
* #A67 "Santa Rosa Cahuilla"
* #A68 "Torres Martinez Band of Cahuilla Mission Indians"
* #A69 "Ramona Band or Village of Cahuilla Mission Indians"
* #A74 "CALIFORNIA TRIBES N.E.C."
* #A75 "Cahto Indian Tribe of the Laytonville Rancheria"
* #A76 "Chimariko"
* #A77 "Coast Miwok"
* #A78 "MISSION BAND"
* #A79 "Kawaiisu"
* #A80 "Kem River Paiute Council"
* #A81 "Mattole"
* #A82 "Red Wood"
* #A83 "Santa Rosa Indian Community"
* #A84 "Takelma"
* #A85 "Wappo"
* #A86 "Yana"
* #A87 "Yuki"
* #A88 "Bear River Band of Rohnerville Rancheria"
* #A89 "DIGGER"
* #A90 "WIKCHAMNI"
* #A91 "Smith River Rancheria"
* #A94 "Canadian Indian"
* #A95 "Central American Indian"
* #A96 "French American Indian"
* #A97 "Mexican American Indian"
* #A98 "South American Indian"
* #A99 "Spanish American Indian"
* #B04 "Catawba Indian Nation"
* #B07 "Cayuse"
* #B11 "Chehalis"
* #B14 "Chemakuan"
* #B15 "Hoh Indian Tribe"
* #B16 "Quileute"
* #B19 "Chemehuevi"
* #B21 "Cherokee"
* #B22 "Cherokee Alabama"
* #B23 "Cherokees of Northeast Alabama"
* #B24 "Cherokees of Southeast Alabama"
* #B25 "Georgia Eastern Cherokee"
* #B26 "Echota Cherokee"
* #B27 "Etowah Cherokee"
* #B28 "Northern Cherokee Nation of Missouri and Arkansas"
* #B29 "Tuscola"
* #B30 "United Keetoowah Band of Cherokee"
* #B31 "Western Cherokee"
* #B32 "Southeastern Cherokee Council"
* #B33 "Sac River Band of the Chickamauga Cherokee"
* #B34 "White River Band of the Chickamauga Cherokee"
* #B35 "Four Winds Cherokee"
* #B36 "Cherokee of Georgia"
* #B37 "Cherokee Shawnee"
* #B40 "Cheyenne"
* #B41 "Northern Cheyenne"
* #B42 "Southern Cheyenne"
* #B46 "Cheyenne Arapaho"
* #B49 "Chickahominy Indian Tribe"
* #B50 "Chickahominy Eastern Band"
* #B51 "WESTERN CHICKAHOMINY"
* #B53 "Chickasaw"
* #B57 "Chinook"
* #B58 "Clatsop"
* #B59 "Columbia River Chinook"
* #B60 "Kathlamet"
* #B61 "Upper Chinook"
* #B62 "Wakiakum Chinook"
* #B63 "Willapa Chinook"
* #B64 "Wishram"
* #B67 "Bad River Band of the Lake Superior Tribe"
* #B68 "Bay Mills Indian Community of the Sault Ste. Marie Band"
* #B69 "Bois Forte Nett Lake Band of Chippewa"
* #B70 "Burt Lake Chippewa"
* #B71 "Chippewa"
* #B72 "Fond du Lac"
* #B73 "Grand Portage"
* #B74 "Grand Traverse Band of Ottawa and Chippewa Indians"
* #B75 "Keweenaw Bay Indian Community of the L'Anse and Ontonagon Bands"
* #B76 "Lac Court Oreilles Band of Lake Superior Chippewa"
* #B77 "Lac du Flambeau"
* #B78 "Lac Vieux Desert Band of Lake Superior Chippewa"
* #B79 "Lake Superior"
* #B80 "Leech Lake"
* #B81 "Little Shell Chippewa"
* #B82 "Mille Lacs"
* #B83 "Minnesota Chippewa"
* #B84 "Ontonagon"
* #B85 "Red Cliff Band of Lake Superior Chippewa"
* #B86 "Red Lake Band of Chippewa Indians"
* #B87 "Saginaw Chippewa"
* #B88 "St. Croix Chippewa"
* #B89 "Sault Ste. Marie Chippewa"
* #B90 "Sokoagon Chippewa"
* #B91 "Turtle Mountain Band"
* #B92 "White Earth"
* #B93 "Swan Creek Black River Confederate Tribe"
* #C02 "Rocky Boy's Chippewa Cree"
* #C05 "Chitimacha Tribe of Louisiana"
* #C08 "Choctaw"
* #C09 "Clifton Choctaw"
* #C10 "Jena Band of Choctaw"
* #C11 "Mississippi Band of Choctaw"
* #C12 "Mowa Band of Choctaw"
* #C13 "Oklahoma Choctaw"
* #C17 "Choctaw Apache Community of Ebarb"
* #C20 "Chumash"
* #C21 "Santa Ynez"
* #C22 "San Luis Rey Mission Indian"
* #C25 "Clear Lake"
* #C26 "Coeur D'Alene"
* #C29 "Coharie"
* #C32 "Colorado River"
* #C35 "Colville"
* #C39 "Comanche"
* #C40 "Oklahoma Comanche"
* #C44 "Coos Lower Umpqua and Siuslaw"
* #C46 "Coos"
* #C47 "Coquille"
* #C48 "Costanoan"
* #C52 "Alabama Coushatta Tribes of Texas"
* #C53 "Coushatta"
* #C56 "Cowlitz"
* #C59 "Cree"
* #C64 "Alabama Creek"
* #C65 "Alabama Quassarte Tribal Town"
* #C66 "Muscogee Creek Nation"
* #C67 "Eastern Creek"
* #C68 "Eastern Muscogee"
* #C69 "Kialegee Tribal Town"
* #C70 "Lower Muscogee Creek Tama Tribal Town"
* #C71 "Machis Lower Creek Indian"
* #C72 "Poarch Band"
* #C73 "Principal Creek Indian Nation"
* #C74 "Star Clan of Muskogee Creeks"
* #C75 "Thiopthlocco Tribal Town"
* #C76 "Tuckabachee"
* #C81 "Croatan"
* #C82 "Crow"
* #C87 "Cumberland County Association for Indian People"
* #C89 "Agua Caliente"
* #C90 "Cupeno"
* #C93 "Delaware"
* #C94 "Delaware Tribe of Indians, Oklahoma"
* #C95 "Lenni Lanape"
* #C96 "Munsee"
* #C97 "Delaware Tribe of Western Oklahoma"
* #C98 "Ramapough Mountain"
* #C99 "Sand Hill Band of Delaware Indians"
* #D05 "Barona Group of Capitan Grande Band"
* #D06 "Campo Band of Diegueno Mission Indians"
* #D07 "Capitan Grande Band of Diegueno Mission Indians"
* #D08 "Cuyapaipe"
* #D09 "Diegueno"
* #D10 "La Posta Band of Diegueno Mission Indians"
* #D11 "Manzanita"
* #D12 "Mesa Grande Band of Diegueno Mission Indians"
* #D13 "San Pasqual Band of Diegueno Mission Indians"
* #D14 "Santa Ysabel Band of Diegueno Mission Indians"
* #D15 "Sycuan Band of Diegueno Mission Indians"
* #D16 "Viejas Group of Capitan Grande Band"
* #D17 "Inaja Band of Diegueno Mission Indians of the Inaja and Cosmit Reservation"
* #D18 "Jarnul Indian Village"
* #D20 "Attacapa"
* #D21 "Biloxi"
* #D22 "Georgetown"
* #D24 "Nansemond Indian Tribe"
* #D25 "Natchez"
* #D26 "Nausu Waiwash"
* #D27 "Nipmuc"
* #D28 "Golden Hill Paugussett"
* #D29 "Pocomoke Acohonock"
* #D30 "Southeastern Indians"
* #D31 "Susquehanock"
* #D33 "Tunica Biloxi"
* #D34 "Waccamaw Siouan"
* #D36 "Wicomico"
* #D37 "Mehemn Indian Tribe"
* #D42 "Esselen"
* #D44 "Fort Belknap"
* #D45 "FORT BERTHOLD"
* #D46 "Three Affiliated Tribes of North Dakota"
* #D49 "Fort McDowell MohaveApache Community"
* #D51 "ShoshoneBannock Tribes of the Fort Hall Reservation"
* #D55 "Gabrieleno"
* #D57 "Grand Ronde"
* #D58 "Guilford Native American Association"
* #D60 "Atsina"
* #D61 "Gros Ventres"
* #D62 "Fort Belknap Gros Ventres"
* #D64 "HaliwaSaponi"
* #D67 "Hidatsa"
* #D70 "Hoopa Valley Tribe"
* #D71 "Trinity"
* #D72 "Whilkut"
* #D76 "Hoopa Extension"
* #D78 "United Houma Nation"
* #D87 "Iowa"
* #D88 "Iowa of Kansas and Nebraska"
* #D89 "Iowa of Oklahoma"
* #D91 "Indians of Person County"
* #D93 "Cayuga Nation"
* #D94 "Iroquois"
* #D95 "Mohawk"
* #D96 "Oneida Nation of New York"
* #D97 "Onondaga"
* #D98 "Seneca"
* #D99 "Seneca Nation"
* #E01 "SenecaCayuga"
* #E02 "Tonawanda Band of Seneca"
* #E03 "Tuscarora"
* #E04 "Wyandotte"
* #E10 "Juaneno"
* #E13 "Kalispel Indian Community"
* #E17 "Karuk Tribe of California"
* #E21 "Kaw"
* #E24 "Kickapoo"
* #E25 "Oklahoma Kickapoo"
* #E26 "Texas Kickapoo"
* #E30 "Kiowa"
* #E31 "Oklahoma Kiowa"
* #E37 "Jamestown S'Klallam"
* #E38 "Klallam"
* #E39 "Lower Elwha Tribal Community"
* #E40 "Port Gamble Klallam"
* #E44 "Klamath"
* #E48 "Konkow"
* #E50 "Kootenai"
* #E53 "Lassik"
* #E59 "Matinecock"
* #E60 "Montauk"
* #E61 "Poospatuck"
* #E62 "Setauket"
* #E63 "LONG ISLAND"
* #E66 "La Jolla Band of Luiseno Mission Indians"
* #E67 "Luiseno"
* #E68 "Pala Band of Luiseno Mission Indians"
* #E69 "Pauma Band of Luiseno Mission Indians"
* #E70 "Pechanga Band of Luiseno Mission Indians"
* #E71 "Soboba"
* #E72 "TwentyNine Palms Band of Luiseno Mission Indians"
* #E73 "Temecula"
* #E74 "Rincon Band of Luiseno Mission Indians"
* #E78 "Lumbee"
* #E84 "Lummi"
* #E87 "Mooretown Rancheria of Maidu Indians"
* #E88 "Maidu"
* #E89 "Mountain Maidu"
* #E90 "Nisenen"
* #E91 "Mechoopda Indian Tribe of Chico Rancheria, California"
* #E92 "Berry Creek Rancheria of Maidu Indians"
* #E93 "Enterprise Rancheria"
* #E94 "Greenville Rancheria"
* #E95 "Makah"
* #F01 "Maliseet"
* #F02 "Houlton Band of Maliseet Indians"
* #F05 "Mandan"
* #F09 "Mattaponi Indian Tribe"
* #F10 "Upper Mattaponi Tribe"
* #F11 "Menominee"
* #F15 "Metrolina Nadve American Association"
* #F17 "Illinois Miami"
* #F18 "Indiana Miami"
* #F19 "Miami"
* #F20 "Oklahoma Miami"
* #F24 "Miccosukee"
* #F27 "Aroostook Band"
* #F28 "Micmac"
* #F31 "Mission Indians"
* #F32 "Cahuilla Band of Mission Indians"
* #F34 "Ione Band of Miwok Indians"
* #F35 "Shingle Springs Band of Miwok Indians"
* #F36 "MeWuk"
* #F37 "Jackson Rancheria of MeWuk Indians of California"
* #F38 "Tuolumne Band of MeWuk Indians of California"
* #F39 "Buena Vista Rancheria of MeWuk Indians of California"
* #F40 "Chicken Ranch Rancheria of MeWuk Indians"
* #F41 "Sheep Ranch Rancheria of MeWuk Indians"
* #F42 "Modoc"
* #F43 "Oklahoma Modoc"
* #F46 "Mohegan"
* #F47 "Monacan Indian Nation"
* #F49 "Mono"
* #F50 "North Fork Rancheria"
* #F51 "Cold Springs Rancheria"
* #F52 "Big Sandy Rancheria"
* #F53 "Nanticoke"
* #F56 "Nanticoke LenniLenape"
* #F57 "Narragansett"
* #F62 "Alamo Navajo"
* #F63 "Tohajiileehee Navajo"
* #F64 "Navajo"
* #F65 "Ramah Navajo"
* #F71 "Nez Perce"
* #F75 "Hassanamisco Band of the Nipmuc Nation"
* #F76 "Chaubunagungameg Nipmuc"
* #F77 "Nomlaki"
* #F78 "Paskenta Band of Nomlaki Indians"
* #F80 "Alsea"
* #F81 "Celilo"
* #F82 "Columbia"
* #F83 "Kalapuya"
* #F84 "Molalla"
* #F85 "Talakamish"
* #F86 "Tenino"
* #F87 "Tillamook"
* #F88 "Wenatchee"
* #F95 "Omaha"
* #F99 "Oneida Tribe of Wisconsin"
* #G01 "Oregon Athabaskan"
* #G04 "Osage"
* #G10 "OtoeMissouria"
* #G14 "Burt Lake Ottawa"
* #G15 "Little River Band of Ottawa Indians of Michigan"
* #G16 "Oklahoma Ottawa"
* #G17 "Ottawa"
* #G18 "Little Traverse Bay Bands of Ottawa Indians of Michigan"
* #G19 "Grand River Band of Ottawa Indians"
* #G24 "Bridgeport Paiute Indian Colony"
* #G25 "Burns Paiute Tribe"
* #G26 "Cedarville Rancheria"
* #G27 "Fort Bidwell"
* #G28 "Fort Independence"
* #G29 "Kaibab Band of Paiute Indians"
* #G30 "Las Vegas Tribe of the Las Vegas Indian Colony"
* #G32 "Lovelock Paiute Tribe of the Lovelock Indian Colony"
* #G33 "Malheur Paiute"
* #G34 "Moapa Band of Paiute"
* #G35 "Northern Paiute"
* #G37 "Paiute"
* #G38 "Pyramid Lake"
* #G39 "San Juan Southern Paiute"
* #G40 "Southern Paiute"
* #G41 "Summit Lake"
* #G42 "Utu Utu Gwaitu Paiute"
* #G43 "Walker River"
* #G44 "Yerington Paiute"
* #G45 "Yahooskin Band of Snake"
* #G47 "Susanville"
* #G48 "Winnemucca"
* #G50 "Pamunkey Indian Tribe"
* #G53 "Indian Township"
* #G54 "Passamaquoddy"
* #G55 "Pleasant Point Passamaquoddy"
* #G61 "Oklahoma Pawnee"
* #G62 "Pawnee"
* #G68 "Penobscot"
* #G72 "Oklahoma Peoria"
* #G73 "Peoria"
* #G77 "Mashantucket Pequot"
* #G78 "Pequot"
* #G79 "Paucatuck Eastern Pequot"
* #G84 "Gila River Indian Community"
* #G85 "Pima"
* #G86 "Salt River PimaMaricopa"
* #G92 "Piscataway"
* #G96 "Pit River Tribe of California"
* #G97 "Alturas Indian Rancheria"
* #G98 "Redding Rancheria"
* #G99 "Big Valley Rancheria of Pomo and Pit River Indians"
* #H01 "Central Pomo"
* #H02 "Dry Creek"
* #H03 "Eastern Pomo"
* #H04 "Kashia Band of Pomo Indians of the Stewarts Point Rancheria"
* #H05 "Northern Pomo"
* #H06 "Pomo"
* #H07 "Scotts Valley Band"
* #H08 "Stonyford"
* #H09 "Elem Indian Colony of the Sulphur Bank"
* #H10 "Sherwood Valley Rancheria of Pomo Indians of California"
* #H11 "Guidiville Rancheria of California"
* #H12 "Lytton Rancheria of California"
* #H13 "Cloverdale Rancheria"
* #H14 "Coyote Valley Band"
* #H15 "Nebraska Ponca"
* #H16 "Oklahoma Ponca"
* #H17 "Ponca"
* #H21 "Citizen Potawatomi Nation"
* #H22 "Forest County"
* #H23 "Hannahville Indian Community of Wisconsin Potawatomi"
* #H24 "Huron Potawatomi"
* #H25 "Pokagon Band of Potawatomi Indians"
* #H26 "Potawatomi"
* #H27 "Prairie Band of Potawatomi Indians"
* #H28 "Wisconsin Potawatomi"
* #H34 "Powhatan"
* #H38 "Acoma"
* #H39 "Arizona Tewa"
* #H40 "Cochiti"
* #H41 "Hopi"
* #H42 "Isleta"
* #H43 "Jemez"
* #H44 "Keres"
* #H45 "Laguna"
* #H46 "Nambe"
* #H47 "Picuris"
* #H48 "Piro"
* #H49 "Pojoaque"
* #H50 "Pueblo"
* #H51 "San Felipe"
* #H52 "San Ildefonso"
* #H53 "San Juan Pueblo"
* #H54 "SAN JUAN DE GUADELUPE"
* #H55 "San Juan"
* #H56 "Sandia"
* #H57 "Santa Ana"
* #H58 "Santa Clara"
* #H59 "Santo Domingo"
* #H60 "Taos"
* #H61 "Tesuque"
* #H62 "Tewa"
* #H63 "Ysleta Del Sur Pueblo of Texas"
* #H64 "Zia"
* #H65 "Zuni"
* #H66 "Hopland Band of Pomo Indians"
* #H67 "Manchester Band of Pomo Indians of the ManchesterPoint Arena Racheria"
* #H68 "Middletown Rancheria of Pomo Indians"
* #H69 "Pinoleville Rancheria of Pomo Indians"
* #H70 "Marietta Band of Nooksack"
* #H71 "Duwamish"
* #H72 "Kikiallus"
* #H73 "Lower Skagit"
* #H74 "Muckleshoot"
* #H75 "Nisqually"
* #H76 "Nooksack"
* #H77 "Port Madison"
* #H78 "Puget Sound Salish"
* #H79 "Puyaliup"
* #H80 "Samish"
* #H81 "SaukSuiattle"
* #H82 "Skokomish"
* #H83 "Skykomish"
* #H84 "Snohomish"
* #H85 "Snoqualmie"
* #H86 "Squaxin Island"
* #H87 "Steilacoom"
* #H88 "Stillaguamish"
* #H89 "Suquamish"
* #H90 "Swinomish"
* #H91 "Tulalip"
* #H92 "Upper Skagit"
* #H93 "Potter Valley Rancheria of Pomo Indians"
* #H94 "Redwood Valley Rancheria of Pomo Indians"
* #H95 "Robinson Rancheria of Pomo Indians"
* #H96 "Upper Lake Band of Pomo Indians of Upper Lake Rancheria"
* #H97 "Quapaw"
* #I01 "TIGUA"
* #J01 "Quinault"
* #J05 "Rappahannock Indian Tribe"
* #J07 "RenoSparks"
* #J14 "Round Valley"
* #J19 "Sac and Fox Tribe of the Mississippi in Iowa"
* #J20 "Sac and Fox Nation of Missouri in Kansas and Nebraska"
* #J21 "Sac and Fox Nation, Oklahoma"
* #J22 "Sac and Fox"
* #J28 "Salinan"
* #J31 "Salish"
* #J35 "Salish and Kootenai"
* #J36 "Pondre Band of Salish and Kootenai"
* #J39 "Schaghticoke"
* #J47 "Big Cypress"
* #J48 "Brighton"
* #J49 "Florida Seminole"
* #J50 "Hollywood Seminole"
* #J51 "Oklahoma Seminole"
* #J52 "Seminole"
* #J53 "Dania Seminole"
* #J54 "Tampa Seminole"
* #J58 "San Manual Band"
* #J59 "Serrano"
* #J62 "Shasta"
* #J63 "Quartz Valley"
* #J66 "Absentee Shawnee Tribe of Indians of Oklahoma"
* #J67 "Eastern Shawnee"
* #J68 "Shawnee"
* #J69 "Piqua Sept of Ohio Shawnee"
* #J74 "Shinnecock"
* #J78 "Shoalwater Bay"
* #J81 "Duckwater"
* #J82 "Ely"
* #J83 "Goshute"
* #J84 "PANAMINT"
* #J85 "Shoshone"
* #J86 "Skull Valley Band of Goshute Indians"
* #J88 "Death Valley TimbiSha Shoshone"
* #J89 "Northwestern Band of Shoshoni Nation of Utah"
* #J90 "Wind River Shoshone"
* #J91 "Yomba"
* #J93 "TeMoak Tribes of Western Shoshone Indians"
* #J94 "Battle Mountain"
* #J95 "Elko"
* #J96 "South Fork"
* #J97 "Wells Band"
* #J98 "Ruby Valley"
* #J99 "Odgers Ranch"
* #K01 "Duck Valley"
* #K02 "Fallen"
* #K03 "Fort McDermitt Paiute and Shoshone Tribes"
* #K04 "Shoshone Paiute"
* #K05 "Bishop"
* #K06 "Lone Pine"
* #K07 "Big Pine Band of Owens Valley PaiuteShoshone"
* #K10 "Confederated Tribes of the Siletz Reservation"
* #K16 "Blackfoot Sioux"
* #K17 "Brule Sioux"
* #K18 "Cheyenne River Sioux"
* #K19 "Crow Creek Sioux"
* #K20 "Dakota Sioux"
* #K21 "Flandreau Santee Sioux"
* #K22 "Fort Peck Sioux"
* #K23 "Lake Traverse Sioux"
* #K24 "Lower Brule Sioux"
* #K25 "Lower Sioux Indian Community of Minnesota Mdewakanton Sioux"
* #K26 "Mdewakanton Sioux"
* #K27 "Miniconjou"
* #K28 "Oglala Sioux"
* #K29 "Pine Ridge Sioux"
* #K30 "Pipestone Sioux"
* #K31 "Prairie Island Sioux"
* #K32 "Shakopee Mdewakanton Sioux Community"
* #K33 "Rosebud Sioux"
* #K34 "Sans Arc Sioux"
* #K35 "Santee Sioux of Nebraska"
* #K36 "Sioux"
* #K37 "SissetonWahpeton"
* #K38 "Sisseton Sioux"
* #K39 "Spirit Lake Sioux"
* #K40 "Standing Rock Sioux"
* #K41 "Teton Sioux"
* #K42 "Two Kettle Sioux"
* #K43 "Upper Sioux"
* #K44 "Wahpekute Sioux"
* #K45 "Wahpeton Sioux"
* #K46 "Wazhaza Sioux"
* #K47 "Yankton Sioux"
* #K48 "Yanktonai Sioux"
* #K54 "Siuslaw"
* #K59 "Spokane"
* #K67 "StockbridgeMunsee Community of Mohican Indians of Wisconsin"
* #K77 "AkChin"
* #K78 "Gila Bend"
* #K79 "San Xavier"
* #K80 "Sells"
* #K81 "Tohono O'Odham"
* #K87 "Tolowa"
* #K88 "Big Lagoon Rancheria"
* #K89 "Elk Valley Rancheria"
* #K90 "Tonkawa"
* #K93 "CherAe Indian Community of Trinidad Rancheria"
* #K94 "Tygh"
* #K97 "Umatilla"
* #L01 "Cow Creek Umpqua"
* #L02 "Umpqua"
* #L06 "Alien Canyon"
* #L07 "Uintah Ute"
* #L08 "Ute Mountain"
* #L09 "Ute"
* #L10 "Southern Ute"
* #L15 "Wailaki"
* #L19 "WallaWalla"
* #L22 "Gay Head Wampanoag"
* #L23 "Mashpee Wampanoag"
* #L24 "Wampanoag"
* #L25 "Seaconeke Wampanoag"
* #L26 "Pocasset Wampanoag"
* #L28 "Warm Springs"
* #L34 "Wascopum"
* #L38 "Alpine"
* #L39 "Carson Colony"
* #L40 "Dresslerville Colony"
* #L41 "Washoe"
* #L42 "Stewart Community"
* #L43 "Woodsfords Community"
* #L47 "Wichita"
* #L48 "Keechi"
* #L49 "Waco"
* #L50 "Tawakonie"
* #L52 "Wind River"
* #L55 "HoChunk Nation of Wisconsin"
* #L56 "Nebraska Winnebago"
* #L57 "Winnebago"
* #L66 "Wintun"
* #L67 "Cachil Dehe Band of Wintun Indians of the Colusa Rancheria"
* #L68 "Cortina Indian Rancheria of Wintun Indians"
* #L69 "Rumsey Indian Rancheria of Wintun Indians"
* #L71 "Grindstone Indian Rancheria of WintunWailaki Indians"
* #L72 "Table Bluff"
* #L73 "Wiyot"
* #L74 "Blue Lake Rancheria"
* #L79 "Yakama"
* #L85 "Yakama Cowlitz"
* #L91 "Barrio Libre"
* #L92 "Pascua Yaqui"
* #L93 "Yaqui"
* #M01 "Yavapai Apache"
* #M07 "Picayune Rancheria of Chukchansi Indians"
* #M08 "Tachi"
* #M09 "Tule River"
* #M10 "Yokuts"
* #M11 "Table Mountain Rancheria"
* #M16 "Yuchi"
* #M17 "Tia"
* #M18 "Wilono"
* #M19 "Anstohini"
* #M22 "Cocopah Tribe of Arizona"
* #M23 "Havasupai"
* #M24 "Hualapai"
* #M25 "Maricopa"
* #M26 "Fort Mojave Indian Tribe of Arizona"
* #M27 "Quechan"
* #M28 "YavapaiPrescott Tribe of the Yavapai Reservation"
* #M29 "YUMAN"
* #M34 "Resighini Rancheria"
* #M35 "Yurok"
* #M36 "COAST YUROK"
* #M41 "American Indian"
* #M42 "Tribal Response, NEC"
* #M43 "KUTENAI INDIAN"
* #M44 "Alaska Indian"
* #M47 "Alaska Native"
* #M48 "Other Alaskan, NEC"
* #M52 "Ahtna"
* #M53 "Alaskan Athabascan"
* #M54 "Alatna Village"
* #M55 "Alexander"
* #M56 "Allakaket Village"
* #M57 "Alanvik"
* #M58 "Anvik Village"
* #M59 "Arctic Village"
* #M60 "Beaver Village"
* #M61 "Birch Crcek Village"
* #M62 "Native Village of Cantwell"
* #M63 "Chalkyitsik Village"
* #M64 "Chickaloon Native Village"
* #M65 "Native Village of Chistochina"
* #M66 "Native Village of Chitina"
* #M67 "Circle Native Community"
* #M68 "COOK INLET"
* #M69 "COPPER CENTER"
* #M70 "Copper River"
* #M71 "Village of Dot Lake"
* #M72 "Doyon"
* #M73 "Native Village of Eagle"
* #M74 "Ekiutna Native Village"
* #M75 "Evansville Village"
* #M76 "Native Village of Fort Yukon"
* #M77 "Native Village of Gakona"
* #M78 "Galena Village"
* #M79 "Organized Village of Grayling"
* #M80 "Gulkana Village"
* #M81 "Healy Lake Village"
* #M82 "Holy Cross Village"
* #M83 "Hughes Village"
* #M84 "Huslia Village"
* #M85 "Village of Iliamna"
* #M86 "Village ofKaltag"
* #M87 "Native Village of Kluti Kaah"
* #M88 "Knik Tribe"
* #M89 "Koyukuk Native Village"
* #M90 "Lake Minchumina"
* #M91 "Lime Village"
* #M92 "McGrath Native Village"
* #M93 "Manley Hot Springs Village"
* #M94 "Mentasta Traditional Council"
* #M95 "Native Village of Minto"
* #M96 "Nenana Native Association"
* #M97 "Nikolai Village"
* #M98 "Ninilchik Village Traditional Council"
* #M99 "Nondalton Village"
* #N01 "Northway Village"
* #N02 "Nulato Village"
* #N03 "Pedro Bay Village"
* #N04 "Rampart Village"
* #N05 "Native Village of Ruby"
* #N06 "Village of Salamatoff"
* #N07 "Seldovia Village Tribe"
* #N08 "Slana"
* #N09 "Shageluk Native Village"
* #N10 "Native Village of Stevens"
* #N11 "Village of Stony River"
* #N12 "Takotna Village"
* #N13 "Native Village of Tanacross"
* #N14 "Tanaina"
* #N15 "Native Village of Tanana"
* #N16 "Tanana Chiefs"
* #N17 "Native Village of Tazlina"
* #N18 "Telida Village"
* #N19 "Native Village of Tetlin"
* #N20 "Tok"
* #N21 "Native Village of Tyonek"
* #N22 "Village of Venetie"
* #N23 "Wiseman"
* #N24 "Kenaitze Indian Tribe"
* #N27 "TLINGIT-HAIDA"
* #N28 "Angoon Community Association"
* #N29 "Central Council of the Tlingit and Haida Indian Tribes"
* #N30 "Chilkat Indian Village"
* #N31 "Chilkoot Indian Association"
* #N32 "Craig Community Association"
* #N33 "Douglas Indian Association"
* #N34 "Haida"
* #N35 "Hoonah Indian Association"
* #N36 "Hydaburg Cooperative Association"
* #N37 "Organized Village of Kake"
* #N38 "Organized Village of Kasaan"
* #N40 "Ketchikan Indian Corporation"
* #N41 "Klawock Cooperative Association"
* #N43 "Pelican"
* #N44 "Petersburg Indian Association"
* #N45 "Organized Village of Saxman"
* #N46 "Sitka Tribe of Alaska"
* #N47 "Tenakee Springs"
* #N48 "Tlingit"
* #N49 "Wrangell Cooperative Association"
* #N50 "Yakutat Tlingit Tribe"
* #N51 "Juneau"
* #N56 "Metlakatia Indian Community, Annette Island Reserve"
* #N57 "Tsimshian"
* #N59 "Sealaska"
* #N60 "Sealaska Corporation"
* #N64 "Southeast Alaska"
* #N65 "Skagway Village"
* #N67 "American Eskimo"
* #N68 "Eskimo"
* #N69 "Greenland Eskimo"
* #N75 "Inuit"
* #N78 "INUPIAT ESKIMO"
* #N79 "Native Village of Ambler"
* #N80 "Anaktuvuk"
* #N81 "Village of Anaktuvuk Pass"
* #N82 "Inupiat Community of the Arctic Slope"
* #N83 "Arctic Slope Corporation"
* #N84 "Atqasuk Village"
* #N85 "Native Village of Barrow hilipiat Traditional Government"
* #N86 "Bering Straits Inupiat"
* #N87 "Native Village of Brevig Mission"
* #N88 "Native Village ofBuckland"
* #N89 "Chinik Eskimo Community"
* #N90 "Native Village of Council"
* #N91 "Native Village of Deering"
* #N92 "Native Village of Elim"
* #N93 "GOLOVIN"
* #N94 "Native Village of Diomede"
* #N95 "Inupiaq"
* #N96 "Inupiat"
* #N97 "Kaktovik Village"
* #N98 "Kawerak"
* #N99 "Native Village of Kiana"
* #P01 "Native Village of Kivalina"
* #P02 "Native Village of Kobuk"
* #P03 "Native Village of Kotzebue"
* #P04 "Native Village of Koyuk"
* #P05 "Kwiguk"
* #P06 "Mauneluk Inupiat"
* #P07 "Nana Inupiat"
* #P08 "Native Village of Noatak"
* #P09 "Nome Eskimo Community"
* #P10 "Noorvik Native Community"
* #P11 "Native Village of Nuiqsut"
* #P12 "Native Village of Point Hope"
* #P13 "Native Village of Point Lay"
* #P14 "Native Village of Selawik"
* #P15 "Native Village of Shaktoolik"
* #P16 "Native Village of Shishmaref"
* #P17 "Native Village of Shungnak"
* #P18 "Village of Solomon"
* #P19 "Native Village of Teller"
* #P20 "Native Village of Unalakleet"
* #P21 "Village of Wainwright"
* #P22 "Village of Wales"
* #P23 "Village of White Mountain"
* #P24 "White Mountain Inupiat"
* #P25 "Native Village of Mary's Igloo"
* #P26 "King Island Native Community"
* #P29 "SIBERIAN ESKIMO"
* #P30 "Native Village of Gambell"
* #P31 "Native Village of Savoonga"
* #P32 "Siberian Yupik"
* #P36 "Chevak Native Village"
* #P37 "Native Village of Mekoryuk"
* #P38 "Akiachak Native Community"
* #P39 "Akiak Native Community"
* #P40 "Village of Alakanuk"
* #P41 "Native Village of Aleknagik"
* #P42 "Yupiit of Andreafski"
* #P43 "Village of Aniak"
* #P44 "Village of Atmautluak"
* #P45 "Orutsararmuit Native Village"
* #P46 "Village of Bill Moore's Slough"
* #P47 "Bristol Bay"
* #P48 "Calista"
* #P49 "Village of Chefomak"
* #P50 "Native Village of Hamilton"
* #P51 "Native Village of Chuathbaluk"
* #P52 "Village of Clark's Point"
* #P53 "Village of Crooked Creek"
* #P54 "Curyung Tribal Council"
* #P55 "Native Village of Eek"
* #P56 "Native Village of Ekuk"
* #P57 "Ekwok Village"
* #P58 "Emmonak Village"
* #P59 "Native Village of Goodnews Bay"
* #P60 "Native Village of Hooper Bay"
* #P61 "Iqurmuit Traditional Council"
* #P62 "Village of Kalskag"
* #P63 "Native Village of Kasigluk"
* #P64 "Native Village of Kipnuk"
* #P65 "New Koliganek Village Council"
* #P66 "Native Village of Kongiganak"
* #P67 "Village of Kotlik"
* #P68 "Organized Village of Kwethluk"
* #P69 "Native Village of Kwigillingok"
* #P70 "Levelock Village"
* #P71 "Village of Lower Kalskag"
* #P72 "Manokotak Village"
* #P73 "Native Village of Marshall"
* #P74 "Village of Ohogamiut"
* #P75 "Asa'carsarmiut Tribe"
* #P76 "Naknek Native Village"
* #P77 "Native Village of Napaimute"
* #P78 "Native Village of Napakiak"
* #P79 "Native Village of Napaskiak"
* #P80 "Newhalen Village"
* #P81 "New Stuyahok Village"
* #P82 "Newtek Village"
* #P83 "Native Village of Nightmute"
* #P84 "Native Village of Nunapitchuk"
* #P85 "Oscarville Traditional Village"
* #P86 "Pilot Station Traditional Village"
* #P87 "Native Village of Pitkas Point"
* #P88 "Platinum Traditional Village"
* #P89 "Portage Creek Village"
* #P90 "Native Village of Kwinhagak"
* #P91 "Village of Red Devil"
* #P92 "Native Village of Saint Michael"
* #P93 "Native Village of Scammon Bay"
* #P94 "Native Village of Sheldon's Point"
* #P95 "Village of Sleetmute"
* #P96 "Stebbins Community Association"
* #P97 "Traditional Village ofTogiak"
* #P98 "Native Village of Toksook Bay"
* #P99 "Tuluksak Native Community"
* #Q01 "MOUNTAIN VILLAGE"
* #R01 "Native Village of Tuntutuliak"
* #R02 "Native Village of Tununak"
* #R03 "Twin Hills Village"
* #R04 "Yup'ik"
* #R05 "Yup'ik Eskimo"
* #R06 "Native Village of Georgetown"
* #R07 "Algaaciq Native Village"
* #R08 "Umkumiute Native Village"
* #R09 "Chuloonawick Native Village"
* #R11 "Aleut"
* #R15 "ALUTIIQ ALEUT"
* #R16 "Alutiiq"
* #R17 "Village of Afognak"
* #R18 "Native Village of Tatitlek"
* #R19 "Ugashik Village"
* #R28 "Bristol Bay Aleut"
* #R29 "Native Village of Chignik"
* #R30 "Chignik Lake Village"
* #R31 "Egegik Village"
* #R32 "Igiugig Village"
* #R33 "Ivanoff Bay Village"
* #R34 "King Salmon"
* #R35 "Kokhanok Village"
* #R36 "Native Village of Perryville"
* #R37 "Native Village of Pilot Point"
* #R38 "Native Village of Port Heiden"
* #R43 "Native Village of Chanega"
* #R44 "Chugach Aleut"
* #R45 "Chugach Corporation"
* #R46 "Native Village of Nanwaiek"
* #R47 "Native Village of Port Graham"
* #R51 "Eyak"
* #R55 "Native Village of Akhiok"
* #R56 "Agdaagux Tribe of King Cove"
* #R57 "Native Village of Karluk"
* #R58 "Native Village of Kanatak"
* #R59 "Kodiak"
* #R60 "Koniag Aleut"
* #R61 "Native Village of Larsen Bay"
* #R62 "Village of Old Harbor"
* #R63 "Native Village of Ouzinkie"
* #R64 "Native Village of Port Lions"
* #R65 "Lesnoi Village"
* #R67 "Sugpiaq"
* #R71 "Suqpigaq"
* #R74 "UNANGAN ALEUT"
* #R75 "Native Village of Akutan"
* #R76 "Aleut Corporation"
* #R77 "Aleutian"
* #R78 "Aleutian Islander"
* #R79 "Native Village of Atka"
* #R80 "Native Village of Belkofski"
* #R81 "Native Village of Chignikn Lagoon"
* #R82 "King Cove"
* #R83 "Native Village of False Pass"
* #R84 "Native Village of Nelson Lagoon"
* #R85 "Native Village of Nikolski"
* #R86 "Pauloff Harbor Village"
* #R87 "Qagan Toyagungin Tribe of Sand Point Village"
* #R88 "Qawalangin Tribe of Unalaska"
* #R89 "Saint George"
* #R90 "Saint Paul"
* #R91 "Sand Point"
* #R92 "South Naknek Village"
* #R93 "Unangan"
* #R94 "Unalaska"
* #R95 "Native Village of Unga"
* #R96 "Kaguyak Village"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/codesystems/CodeSystemRaceRecode40VitalRecords.fsh

CodeSystem: CodeSystemRaceRecode40VitalRecords
Id: CodeSystem-race-recode-40-vr
Title: "Code System - Race Recode 40 Vital Records"
Description: "Race Recode 40
This codesystem is only for use in the vital records use cases supported by this Implementation guide, and should not be used elsewhere."
* ^caseSensitive = true
* ^experimental = false
* #01 "White"
* #02 "Black"
* #03 "American Indian or Alaskan Native (AIAN)"
* #04 "Asian Indian"
* #05 "Chinese"
* #06 "Filipino"
* #07 "Japanese"
* #08 "Korean"
* #09 "Vietnamese"
* #10 "Other or Multiple Asian"
* #11 "Hawaiian"
* #12 "Guamanian"
* #13 "Samoan"
* #14 "Other or Multiple Pacific Islander"
* #15 "Black and White"
* #16 "Black and AIAN"
* #17 "Black and Asian"
* #18 "AIAN and NHOPI"
* #19 "NHOPI and White"
* #20 "AIAN and Asian"
* #21 "AIAN and NHOPI 2"
* #22 "Asian and White"
* #23 "Asian and NHOPI"
* #24 "NHOPI and White 2"
* #25 "Black, AIAN and White"
* #26 "Black, AIAN and Asian"
* #27 "Black, AIAN and NHOPI"
* #28 "Black, Asian and White"
* #29 "Black, Asian and NHOPI"
* #30 "Black, NHOPI and White"
* #31 "AIAN, Asian and White"
* #32 "AIAN, NHOPI and White"
* #33 "AIAN, Asian and NHOPI"
* #34 "Asian, NHOPI and White"
* #35 "Black, AIAN, Asian and White"
* #36 "Black, AIAN, Asian and NHOPI"
* #37 "Black, AIAN, NHOPI and White"
* #38 "Black, Asian, NHOPI and White"
* #39 "AIAN, Asian, NHOPI and White"
* #40 "Black, AIAN, Asian, NHOPI and White"
* #99 "Unknown and Other Race"


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/conceptmaps/CM_BirthAttendantTitles.fsh

Instance: ConceptMapBirthAttendantTitlesVitalRecords
InstanceOf: ConceptMap
Title: "Birth Attendant Titles Vital Records"
Usage: #definition
* experimental = false
* insert ConceptMapIntro(BirthAttendantTitles, ValueSetBirthAttendantTitlesVitalRecords)
* insert AddGroup($IJE, $sct)
//* insert MapConcept( #1,  "MD", #112247003, "Medical Doctor") -- retired 
* insert MapConcept( #1,  "MD", #309343006, "Medical Doctor") 
* insert MapConcept( #2,  "DO", #76231001, "Osteopath")
* insert MapConcept( #3,  "CNM/CM", #445521000124102, "Advanced Practice Midwife" )
* insert MapConcept( #4,  "Other Midwife", #445531000124104, "Lay Midwife" )
* insert AddGroup($IJE, $v3-NullFlavor)
* insert MapConcept( #5,  "Other (specify\)", #OTH, "other")
* insert MapConcept( #9,  "Unknown", #UNK, "Unknown")




---

File: repos/HL7_SLASH_vr-common-library/input/fsh/conceptmaps/CM_BirthSexChild.fsh

Instance: ConceptMapBirthSexChildVitalRecords
InstanceOf: ConceptMap
Title: "Birth Sex Child Vital Records"
Usage: #definition
* experimental = false
* insert ConceptMapIntro(BirthSex, ValueSetSexAssignedAtBirthVitalRecords)
* insert AddGroup( $IJE, $v3-AdministrativeGender)
* insert MapConcept( #M,  "Male", #M, "Male")
* insert MapConcept( #F,  "Female", #F, "Female")
* insert AddGroup( $IJE, $v3-NullFlavor)
* insert MapConcept( #N,  "Not Yet Determined", #UNK, "unknown")

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/conceptmaps/CM_BirthSexFetus.fsh

Instance: ConceptMapBirthSexFetusVitalRecords
InstanceOf: ConceptMap
Title: "Birth Sex Fetus Vital Records"
Usage: #definition
* experimental = false
* insert ConceptMapIntro(BirthSex, ValueSetSexAssignedAtBirthVitalRecords)
* insert AddGroup($IJE,$v3-AdministrativeGender)
* insert MapConcept( #M,  "Male", #M, "Male")
* insert MapConcept( #F,  "Female", #F, "Female")
* insert AddGroup($IJE,$v3-NullFlavor)
* insert MapConcept( #U,  "Unknown", #UNK, "unknown")

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/conceptmaps/CM_DateOfBirthEditFlags.fsh

Instance: ConceptMapDateOfBirthEditFlagsVitalRecords
InstanceOf: ConceptMap
Title: "Date of Birth Edit Flags Vital Records"
Usage: #definition
* experimental = false
* insert ConceptMapIntro(DateOfBirthEditFlags, ValueSetDateOfBirthEditFlagsVitalRecords)
* insert AddGroup($IJE,[[Canonical(CodeSystemEditFlagsVitalRecords)]])
* insert MapConcept(#0, "Edit Passed", #0,  "Edit Passed")
* insert MapConcept(#1, "Data Queried", #1dataQueried,  "Data queried")


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/conceptmaps/CM_EditBypass01234.fsh

Instance: ConceptMapEditBypass01234VitalRecords
InstanceOf: ConceptMap
// Id: vrdr-edit-bypass-01234-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(EditBypass01234, ValueSetEditBypass01234VitalRecords)
* insert AddGroup($IJE,[[Canonical(CodeSystemEditFlagsVitalRecords)]])
* insert MapConcept(#0, "Edit Passed", #0,  "Edit Passed")
* insert MapConcept(#1, "Edit Failed\, Data Queried\, and Verified", #1,  "Edit Failed\, Data Queried\, and Verified")
* insert MapConcept(#2, "Edit Failed\, Data Queried\, but not Verified", #2,  "Edit Failed\, Data Queried\, but not Verified")
* insert MapConcept(#3, "Edit Failed\, Review Needed", #3,  "Edit Failed\, Review Needed")
* insert MapConcept(#4, "Edit Failed\, Query Needed", #4,  "Edit Failed\, Query Needed")

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/conceptmaps/CM_EducationLevel.fsh

Instance: ConceptMapEducationLevelVitalRecords
InstanceOf: ConceptMap
Title: "Education Level Vital Records"
// Id: vrdr-education-level-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(EducationLevel, ValueSetEducationLevelVitalRecords)
* insert AddGroup($IJE,$HL7_EducationLevelCS)
* insert MapConcept( #1,  "8th grade or less",#ELEM, "Elementary School")
* insert MapConcept( #2,  "9th through 12th grade; no diploma",#SEC, "Some secondary or high school education")
* insert MapConcept( #3,  "High School Graduate or GED Completed",#HS, "High School or secondary school degree complete")
* insert MapConcept( #4,  "Some college credit\, but no degree", #SCOL, "Some College education")
* insert MapConcept( #8,  "Doctorate Degree or Professional Degree",#POSTG, "Doctoral or post graduate education")
* insert AddGroup($IJE,$degreeLicenseCertificateV2)
* insert MapConcept( #5,  "Associate Degree",#AA, "Associate of Arts")
* insert MapConcept( #6,  "Bachelor's Degree",#BA, "Bachelor of Arts")
* insert MapConcept( #7,  "Master's Degree",#MA, "Master of Arts")
* insert AddGroup($IJE,$v3-NullFlavor)
* insert MapConcept( #9,  "Unknown",#UNK, "unknown")


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/conceptmaps/CM_HispanicNoUnknown.fsh

Instance: ConceptMapHispanicNoUnknownVitalRecords
InstanceOf: ConceptMap
Title: "Hispanic No Unknown Vital Records"
Usage: #definition
* experimental = false
* insert ConceptMapIntro(HispanicNoUnknown, ValueSetYesNoUnknownVitalRecords)
* insert AddGroup($IJE,$v2-0136)
* insert MapConcept( #H,  "Yes",#Y, "Yes")
* insert MapConcept( #N,  "No",#N, "No")
* insert AddGroup($IJE,$v3-NullFlavor)
* insert MapConcept( #U,  "Unknown",#UNK, "unknown")

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/conceptmaps/CM_HispanicOrigin.fsh

Instance: ConceptMapHispanicOriginVitalRecords
InstanceOf: ConceptMap
Title: "Hispanic Origin Vital Records"
// Id: vrdr-hispanic-origin-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(HispanicOrigin, ValueSetHispanicOriginVitalRecords)
* insert AddGroup($IJE,[[Canonical(CodeSystemHispanicOriginVitalRecords)]])
* insert MapConcept(#100, "Not Hispanic", #100,  "Non-Hispanic")
* insert MapConcept(#200, "Spaniard", #200,  "Spaniard")
* insert MapConcept(#201, "Andalusian", #201,  "Andalusian")
* insert MapConcept(#202, "Asturian", #202,  "Asturian")
* insert MapConcept(#203, "Castillian", #203,  "Castillian")
* insert MapConcept(#204, "Catalonian", #204,  "Catalonian")
* insert MapConcept(#205, "Balearic Islander", #205,  "Balearic Islander")
* insert MapConcept(#206, "Gallego", #206,  "Gallego")
* insert MapConcept(#207, "Valencian", #207,  "Valencian")
* insert MapConcept(#208, "Canarian", #208,  "Canarian")
* insert MapConcept(#209, "Spanish Basque", #209,  "Spanish Basque")
* insert MapConcept(#210, "Mexican Checkbox", #210,  "Mexican Checkbox")
* insert MapConcept(#211, "Mexican", #211,  "Mexican")
* insert MapConcept(#212, "Mexican American", #212,  "Mexican American")
* insert MapConcept(#213, "Mexicano", #213,  "Mexicano")
* insert MapConcept(#214, "Chicano", #214,  "Chicano")
* insert MapConcept(#215, "La Raza", #215,  "La Raza")
* insert MapConcept(#216, "Mexican American Indian", #216,  "Mexican American Indian")
* insert MapConcept(#217, "Caribbean (Reassigned to 290\)", #217,  "Caribbean (Reassigned to 290\)")
* insert MapConcept(#218, "Mexico", #218,  "Mexico")
* insert MapConcept(#220, "Central and South America", #220,  "Central and South America")
* insert MapConcept(#221, "Costa Rican", #221,  "Costa Rican")
* insert MapConcept(#222, "Guatemalan", #222,  "Guatemalan")
* insert MapConcept(#223, "Honduran", #223,  "Honduran")
* insert MapConcept(#224, "Nicaraguan", #224,  "Nicaraguan")
* insert MapConcept(#225, "Panamanian", #225,  "Panamanian")
* insert MapConcept(#226, "Salvadoran", #226,  "Salvadoran")
* insert MapConcept(#227, "Central American", #227,  "Central American")
* insert MapConcept(#228, "Central American Indian", #228,  "Central American Indian")
* insert MapConcept(#229, "Canal Zone", #229,  "Canal Zone")
* insert MapConcept(#231, "Argentinean", #231,  "Argentinean")
* insert MapConcept(#232, "Bolivian", #232,  "Bolivian")
* insert MapConcept(#233, "Chilean", #233,  "Chilean")
* insert MapConcept(#234, "Colombian", #234,  "Colombian")
* insert MapConcept(#235, "Ecuadorian", #235,  "Ecuadorian")
* insert MapConcept(#236, "Paraguayan", #236,  "Paraguayan")
* insert MapConcept(#237, "Peruvian", #237,  "Peruvian")
* insert MapConcept(#238, "Uruguayan", #238,  "Uruguayan")
* insert MapConcept(#239, "Venezuelan", #239,  "Venezuelan")
* insert MapConcept(#240, "South American Indian", #240,  "South American Indian")
* insert MapConcept(#241, "Criollo", #241,  "Criollo")
* insert MapConcept(#242, "South American", #242,  "South American")
* insert MapConcept(#250, "Latin American", #250,  "Latin American")
* insert MapConcept(#251, "Latin", #251,  "Latin")
* insert MapConcept(#252, "Latino", #252,  "Latino")
* insert MapConcept(#260, "Puerto Rican Checkbox", #260,  "Puerto Rican Checkbox")
* insert MapConcept(#261, "Puerto Rican", #261,  "Puerto Rican")
* insert MapConcept(#270, "Cuban Checkbox", #270,  "Cuban Checkbox")
* insert MapConcept(#271, "Cuban", #271,  "Cuban")
* insert MapConcept(#275, "Dominican", #275,  "Dominican")
* insert MapConcept(#280, "Other Spanish Checkbox", #280,  "Other Spanish Checkbox")
* insert MapConcept(#281, "Hispanic", #281,  "Hispanic")
* insert MapConcept(#282, "Spanish", #282,  "Spanish")
* insert MapConcept(#283, "Californio", #283,  "Californio")
* insert MapConcept(#284, "Tejano", #284,  "Tejano")
* insert MapConcept(#285, "Nuevo Mexicano", #285,  "Nuevo Mexicano")
* insert MapConcept(#286, "Spanish American", #286,  "Spanish American")
* insert MapConcept(#287, "Spanish American Indian", #287,  "Spanish American Indian")
* insert MapConcept(#288, "Meso American Indian", #288,  "Meso American Indian")
* insert MapConcept(#289, "Mestizo", #289,  "Mestizo")
* insert MapConcept(#290, "Caribbean", #290,  "Caribbean")
* insert MapConcept(#291, "Multiple Hispanic Responses", #291,  "Multiple Hispanic Responses")
* insert MapConcept(#299, "Other Spanish", #299,  "Other Spanish")
* insert MapConcept(#996, "Uncodable", #996,  "Uncodable")
* insert MapConcept(#997, "Deferred", #997,  "Deferred")
* insert MapConcept(#998, "Unknown", #998,  "Unknown")
* insert MapConcept(#999, "First Pass Reject", #999,  "First Pass Reject")


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/conceptmaps/CM_MaritalStatus.fsh

Instance: ConceptMapMaritalStatusVitalRecords
InstanceOf: ConceptMap
Title: "Marital Status Vital Records"
// Description: "Note: 'Domestic Partnership' is not supported by NCHS and will be mapped to 'U' unknown"
// Id: vrdr-marital-status-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(MaritalStatus, ValueSetMaritalStatusVitalRecords)
* description = "Note: 'Domestic Partnership' may be used by jurisdictions, but is not supported by NCHS and will be mapped to 'U' (Not Classifiable). 
IJE 'U' maps to 'UNK' (unknown) when converted to FHIR."
* insert AddGroup($IJE,$v3-MaritalStatus)
* insert MapConcept( #D,  "Divorced",#D, "Divorced")
* insert MapConcept( #A,  "Married but Separated",#L, "Legally Separated")
* insert MapConcept( #M,  "Married",#M, "Married")
* insert MapConcept( #S,  "Never Married",#S, "Never Married")
* insert MapConcept( #W,  "Widowed",#W, "Widowed")
* insert MapConcept( #U,  "Not Classifiable",#T, "Domestic Partner") //-- not yet supported by NCHS
* insert AddGroup($IJE,$v3-NullFlavor)
* insert MapConcept( #U,  "Not Classifiable",#UNK, "unknown")

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/conceptmaps/CM_PluralityEditFlags.fsh

Instance: ConceptMapPluralityEditFlagsVitalRecords
InstanceOf: ConceptMap
Title: "Plurality Edit Flags Vital Records"
Usage: #definition
* experimental = false
* insert ConceptMapIntro(PluralityEditFlags, ValueSetPluralityEditFlagsVitalRecords)
* insert AddGroup($IJE,[[Canonical(CodeSystemEditFlagsVitalRecords)]])
* insert MapConcept(#0, "Off", #0off,  "Off")
* insert MapConcept(#1, "Queried\, and Correct", #1queriedCorrect,  "Queried\, and Correct")
* insert MapConcept(#2, "Plurality/Set Order Queried\, Inconsistent", #2pluralityQueriedInconsistent,  "Plurality/Set Order Queried\, Inconsistent")


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/conceptmaps/CM_RaceCode.fsh

Instance: ConceptMapRaceCodeVitalRecords
InstanceOf: ConceptMap
Title: "Race Code Vital Records"
// Id: vrdr-race-code-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(RaceCodes, ValueSetRaceCodeVitalRecords)
* insert AddGroup($IJE,[[Canonical(CodeSystemRaceCodeVitalRecords)]])
* insert MapConcept(#100, "White Checkbox", #100,  "White Checkbox")
* insert MapConcept(#101, "White", #101,  "White")
* insert MapConcept(#102, "Arab", #102,  "Arab")
* insert MapConcept(#103, "English", #103,  "English")
* insert MapConcept(#104, "French", #104,  "French")
* insert MapConcept(#105, "German", #105,  "German")
* insert MapConcept(#106, "Irish", #106,  "Irish")
* insert MapConcept(#107, "Italian", #107,  "Italian")
* insert MapConcept(#108, "Near Easterner", #108,  "Near Easterner")
* insert MapConcept(#109, "Polish", #109,  "Polish")
* insert MapConcept(#110, "Scottish", #110,  "Scottish")
* insert MapConcept(#111, "Armenian", #111,  "Armenian")
* insert MapConcept(#112, "Assyrian", #112,  "Assyrian")
* insert MapConcept(#113, "Egyptian", #113,  "Egyptian")
* insert MapConcept(#114, "Iranian", #114,  "Iranian")
* insert MapConcept(#115, "Iraqi", #115,  "Iraqi")
* insert MapConcept(#116, "Lebanese", #116,  "Lebanese")
* insert MapConcept(#117, "Middle East", #117,  "Middle East")
* insert MapConcept(#118, "Palestinian", #118,  "Palestinian")
* insert MapConcept(#119, "Syrian", #119,  "Syrian")
* insert MapConcept(#120, "Other Arab", #120,  "Other Arab")
* insert MapConcept(#121, "Afghanistani", #121,  "Afghanistani")
* insert MapConcept(#122, "Israeli", #122,  "Israeli")
* insert MapConcept(#123, "Californio", #123,  "Californio")
* insert MapConcept(#124, "Cajun", #124,  "Cajun")
* insert MapConcept(#125, "EUROPEAN", #125,  "EUROPEAN")
* insert MapConcept(#126, "PORTUGUESE", #126,  "PORTUGUESE")
* insert MapConcept(#127, "ALBANIAN", #127,  "ALBANIAN")
* insert MapConcept(#128, "CROATIAN", #128,  "CROATIAN")
* insert MapConcept(#129, "CZECH", #129,  "CZECH")
* insert MapConcept(#130, "RUSSIAN", #130,  "RUSSIAN")
* insert MapConcept(#131, "UKRANIAN", #131,  "UKRANIAN")
* insert MapConcept(#132, "CZECHOSLOVAKIAN", #132,  "CZECHOSLOVAKIAN")
* insert MapConcept(#133, "BOSNIAN", #133,  "BOSNIAN")
* insert MapConcept(#134, "KOSOVIAN", #134,  "KOSOVIAN")
* insert MapConcept(#199, "Multiple WHITE responses", #199,  "Multiple WHITE responses")
* insert MapConcept(#200, "Black Checkbox", #200,  "Black Checkbox")
* insert MapConcept(#201, "Black", #201,  "Black")
* insert MapConcept(#202, "African", #202,  "African")
* insert MapConcept(#203, "African American", #203,  "African American")
* insert MapConcept(#204, "AfroAmerican", #204,  "AfroAmerican")
* insert MapConcept(#205, "Nigritian", #205,  "Nigritian")
* insert MapConcept(#206, "Negro", #206,  "Negro")
* insert MapConcept(#207, "Bahamian", #207,  "Bahamian")
* insert MapConcept(#208, "Barbadian", #208,  "Barbadian")
* insert MapConcept(#209, "Botswana", #209,  "Botswana")
* insert MapConcept(#213, "Ethiopian", #213,  "Ethiopian")
* insert MapConcept(#214, "Haitian", #214,  "Haitian")
* insert MapConcept(#215, "Jamaican", #215,  "Jamaican")
* insert MapConcept(#216, "Liberian", #216,  "Liberian")
* insert MapConcept(#218, "Namibian", #218,  "Namibian")
* insert MapConcept(#219, "Nigerian", #219,  "Nigerian")
* insert MapConcept(#220, "Other African", #220,  "Other African")
* insert MapConcept(#222, "Tobago", #222,  "Tobago")
* insert MapConcept(#223, "Trinidad", #223,  "Trinidad")
* insert MapConcept(#224, "West Indies", #224,  "West Indies")
* insert MapConcept(#225, "Zaire", #225,  "Zaire")
* insert MapConcept(#226, "ERITREAN", #226,  "ERITREAN")
* insert MapConcept(#227, "TOGOLESE", #227,  "TOGOLESE")
* insert MapConcept(#228, "SOMALIAN", #228,  "SOMALIAN")
* insert MapConcept(#299, "Multiple BLACK  or AFRICAN AMERICAN responses", #299,  "Multiple BLACK  or AFRICAN AMERICAN responses")
* insert MapConcept(#300, "American Indian Checkbox", #300,  "American Indian Checkbox")
* insert MapConcept(#400, "Asian Indian Checkbox", #400,  "Asian Indian Checkbox")
* insert MapConcept(#401, "Asian Indian", #401,  "Asian Indian")
* insert MapConcept(#402, "Bangladeshi", #402,  "Bangladeshi")
* insert MapConcept(#403, "Bhutanese", #403,  "Bhutanese")
* insert MapConcept(#404, "Burmese", #404,  "Burmese")
* insert MapConcept(#405, "Cambodian", #405,  "Cambodian")
* insert MapConcept(#410, "Chinese Checkbox", #410,  "Chinese Checkbox")
* insert MapConcept(#411, "Chinese", #411,  "Chinese")
* insert MapConcept(#412, "Taiwanese", #412,  "Taiwanese")
* insert MapConcept(#420, "Filipino Checkbox", #420,  "Filipino Checkbox")
* insert MapConcept(#421, "Filipino", #421,  "Filipino")
* insert MapConcept(#422, "Hmong", #422,  "Hmong")
* insert MapConcept(#423, "Indonesian", #423,  "Indonesian")
* insert MapConcept(#430, "Japanese Checkbox", #430,  "Japanese Checkbox")
* insert MapConcept(#431, "Japanese", #431,  "Japanese")
* insert MapConcept(#440, "Korean Checkbox", #440,  "Korean Checkbox")
* insert MapConcept(#441, "Korean", #441,  "Korean")
* insert MapConcept(#442, "Laotian", #442,  "Laotian")
* insert MapConcept(#443, "Malaysian", #443,  "Malaysian")
* insert MapConcept(#444, "Okinawan", #444,  "Okinawan")
* insert MapConcept(#445, "Pakistani", #445,  "Pakistani")
* insert MapConcept(#446, "Sri Lankan", #446,  "Sri Lankan")
* insert MapConcept(#447, "Thai", #447,  "Thai")
* insert MapConcept(#450, "Vietnamese Checkbox", #450,  "Vietnamese Checkbox")
* insert MapConcept(#451, "Vietnamese", #451,  "Vietnamese")
* insert MapConcept(#460, "Other Asian Checkbox", #460,  "Other Asian Checkbox")
* insert MapConcept(#462, "Asian", #462,  "Asian")
* insert MapConcept(#463, "Asiatic", #463,  "Asiatic")
* insert MapConcept(#465, "Mongolian", #465,  "Mongolian")
* insert MapConcept(#466, "Oriental", #466,  "Oriental")
* insert MapConcept(#467, "Whello", #467,  "Whello")
* insert MapConcept(#468, "Yello", #468,  "Yello")
* insert MapConcept(#469, "Indo Chinese", #469,  "Indo Chinese")
* insert MapConcept(#470, "Iwo Jiman", #470,  "Iwo Jiman")
* insert MapConcept(#471, "Maldivian", #471,  "Maldivian")
* insert MapConcept(#472, "Nepalese", #472,  "Nepalese")
* insert MapConcept(#473, "Singaporean", #473,  "Singaporean")
* insert MapConcept(#474, "MADAGASCAR", #474,  "MADAGASCAR")
* insert MapConcept(#475, "MIEN", #475,  "MIEN")
* insert MapConcept(#476, "TIBETAN", #476,  "TIBETAN")
* insert MapConcept(#499, "Multiple ASIAN responses", #499,  "Multiple ASIAN responses")
* insert MapConcept(#500, "Native Hawaiian Checkbox", #500,  "Native Hawaiian Checkbox")
* insert MapConcept(#501, "Native Hawaiian", #501,  "Native Hawaiian")
* insert MapConcept(#502, "Hawaiian", #502,  "Hawaiian")
* insert MapConcept(#503, "Part Hawaiian", #503,  "Part Hawaiian")
* insert MapConcept(#510, "Samoan Checkbox", #510,  "Samoan Checkbox")
* insert MapConcept(#511, "Samoan", #511,  "Samoan")
* insert MapConcept(#512, "Tahitian", #512,  "Tahitian")
* insert MapConcept(#513, "Tongan", #513,  "Tongan")
* insert MapConcept(#514, "Polynesian", #514,  "Polynesian")
* insert MapConcept(#515, "Tokelauan", #515,  "Tokelauan")
* insert MapConcept(#520, "Guamanian Checkbox", #520,  "Guamanian Checkbox")
* insert MapConcept(#521, "Guamanian", #521,  "Guamanian")
* insert MapConcept(#522, "Chamorro", #522,  "Chamorro")
* insert MapConcept(#530, "Other Pacific Islander Checkbox", #530,  "Other Pacific Islander Checkbox")
* insert MapConcept(#531, "Mariana Islander", #531,  "Mariana Islander")
* insert MapConcept(#532, "Marshallese", #532,  "Marshallese")
* insert MapConcept(#533, "Palauan", #533,  "Palauan")
* insert MapConcept(#534, "Carolinian", #534,  "Carolinian")
* insert MapConcept(#535, "Kosraean", #535,  "Kosraean")
* insert MapConcept(#536, "Micronesian", #536,  "Micronesian")
* insert MapConcept(#537, "Pohnpeian", #537,  "Pohnpeian")
* insert MapConcept(#538, "Saipanese", #538,  "Saipanese")
* insert MapConcept(#539, "Kirabati", #539,  "Kirabati")
* insert MapConcept(#540, "Chuukese", #540,  "Chuukese")
* insert MapConcept(#541, "Yapese", #541,  "Yapese")
* insert MapConcept(#542, "Fijian", #542,  "Fijian")
* insert MapConcept(#543, "Melanesian", #543,  "Melanesian")
* insert MapConcept(#544, "Papua New Guinean", #544,  "Papua New Guinean")
* insert MapConcept(#545, "Solomon Islander", #545,  "Solomon Islander")
* insert MapConcept(#546, "New Hebrides", #546,  "New Hebrides")
* insert MapConcept(#547, "Pacific Islander", #547,  "Pacific Islander")
* insert MapConcept(#599, "Multiple NATIVE HAWAIIAN and OTHER PACIFIC ISLANDER responses", #599,  "Multiple NATIVE HAWAIIAN and OTHER PACIFIC ISLANDER responses")
* insert MapConcept(#600, "Other Race Checkbox", #600,  "Other Race Checkbox")
* insert MapConcept(#601, "Argentinean", #601,  "Argentinean")
* insert MapConcept(#602, "Bolivian", #602,  "Bolivian")
* insert MapConcept(#604, "Central American", #604,  "Central American")
* insert MapConcept(#605, "Chicano", #605,  "Chicano")
* insert MapConcept(#606, "Chilean", #606,  "Chilean")
* insert MapConcept(#607, "Colombian", #607,  "Colombian")
* insert MapConcept(#608, "Costa Rican", #608,  "Costa Rican")
* insert MapConcept(#609, "Cuban", #609,  "Cuban")
* insert MapConcept(#610, "Ecuadorian", #610,  "Ecuadorian")
* insert MapConcept(#611, "Salvadoran", #611,  "Salvadoran")
* insert MapConcept(#612, "Guatemalan", #612,  "Guatemalan")
* insert MapConcept(#613, "Hispanic", #613,  "Hispanic")
* insert MapConcept(#614, "Honduran", #614,  "Honduran")
* insert MapConcept(#615, "Latin American", #615,  "Latin American")
* insert MapConcept(#616, "Mestizo", #616,  "Mestizo")
* insert MapConcept(#617, "Mexican", #617,  "Mexican")
* insert MapConcept(#618, "Nicaraguan", #618,  "Nicaraguan")
* insert MapConcept(#619, "Panamanian", #619,  "Panamanian")
* insert MapConcept(#620, "Paraguayan", #620,  "Paraguayan")
* insert MapConcept(#621, "Peruvian", #621,  "Peruvian")
* insert MapConcept(#622, "Puerto Rican", #622,  "Puerto Rican")
* insert MapConcept(#623, "Morena", #623,  "Morena")
* insert MapConcept(#624, "South American", #624,  "South American")
* insert MapConcept(#625, "Spanish", #625,  "Spanish")
* insert MapConcept(#626, "Spanish American", #626,  "Spanish American")
* insert MapConcept(#627, "Sudamericano", #627,  "Sudamericano")
* insert MapConcept(#628, "Uruguayan", #628,  "Uruguayan")
* insert MapConcept(#629, "Venezuelan", #629,  "Venezuelan")
* insert MapConcept(#630, "Spaniard", #630,  "Spaniard")
* insert MapConcept(#631, "Tejano", #631,  "Tejano")
* insert MapConcept(#632, "Cayman Islander", #632,  "Cayman Islander")
* insert MapConcept(#633, "Moroccan", #633,  "Moroccan")
* insert MapConcept(#634, "North African", #634,  "North African")
* insert MapConcept(#635, "United Arab Emirates", #635,  "United Arab Emirates")
* insert MapConcept(#636, "South African", #636,  "South African")
* insert MapConcept(#637, "Azerbaijani", #637,  "Azerbaijani")
* insert MapConcept(#638, "Aryan", #638,  "Aryan")
* insert MapConcept(#640, "Dominican Republic", #640,  "Dominican Republic")
* insert MapConcept(#641, "Dominica Islander", #641,  "Dominica Islander")
* insert MapConcept(#642, "Belizean", #642,  "Belizean")
* insert MapConcept(#643, "Bermudan", #643,  "Bermudan")
* insert MapConcept(#644, "Aruba Islander", #644,  "Aruba Islander")
* insert MapConcept(#645, "Cayenne", #645,  "Cayenne")
* insert MapConcept(#646, "Guyanese", #646,  "Guyanese")
* insert MapConcept(#647, "Surinam", #647,  "Surinam")
* insert MapConcept(#648, "Sudanese", #648,  "Sudanese")
* insert MapConcept(#649, "Amerasian", #649,  "Amerasian")
* insert MapConcept(#650, "Eurasian", #650,  "Eurasian")
* insert MapConcept(#651, "Brazilian", #651,  "Brazilian")
* insert MapConcept(#652, "Brown", #652,  "Brown")
* insert MapConcept(#653, "Bushwacker", #653,  "Bushwacker")
* insert MapConcept(#655, "Cape Verdean", #655,  "Cape Verdean")
* insert MapConcept(#656, "Chocolate", #656,  "Chocolate")
* insert MapConcept(#657, "Coe Clan", #657,  "Coe Clan")
* insert MapConcept(#658, "Coffee", #658,  "Coffee")
* insert MapConcept(#659, "Cosmopolitan", #659,  "Cosmopolitan")
* insert MapConcept(#660, "Issues", #660,  "Issues")
* insert MapConcept(#661, "Jackson White", #661,  "Jackson White")
* insert MapConcept(#662, "Melungeon", #662,  "Melungeon")
* insert MapConcept(#663, "Mixed", #663,  "Mixed")
* insert MapConcept(#664, "Ramp", #664,  "Ramp")
* insert MapConcept(#665, "Wesort", #665,  "Wesort")
* insert MapConcept(#666, "Mulatto", #666,  "Mulatto")
* insert MapConcept(#667, "Moor", #667,  "Moor")
* insert MapConcept(#668, "Biracial", #668,  "Biracial")
* insert MapConcept(#669, "Creole", #669,  "Creole")
* insert MapConcept(#670, "Indian", #670,  "Indian")
* insert MapConcept(#671, "Turk", #671,  "Turk")
* insert MapConcept(#672, "Half Breed", #672,  "Half Breed")
* insert MapConcept(#673, "Rainbow", #673,  "Rainbow")
* insert MapConcept(#674, "Octoroon", #674,  "Octoroon")
* insert MapConcept(#675, "Quadroon", #675,  "Quadroon")
* insert MapConcept(#676, "Multiracial", #676,  "Multiracial")
* insert MapConcept(#677, "Interracial", #677,  "Interracial")
* insert MapConcept(#678, "Multiethnic", #678,  "Multiethnic")
* insert MapConcept(#679, "Multinational", #679,  "Multinational")
* insert MapConcept(#680, "JEWISH", #680,  "JEWISH")
* insert MapConcept(#681, "CANADIAN", #681,  "CANADIAN")
* insert MapConcept(#682, "FRENCH CANADIAN", #682,  "FRENCH CANADIAN")
* insert MapConcept(#683, "IBERIAN", #683,  "IBERIAN")
* insert MapConcept(#684, "TRIGUENO", #684,  "TRIGUENO")
* insert MapConcept(#685, "MALADA", #685,  "MALADA")
* insert MapConcept(#686, "OTHER SPANISH", #686,  "OTHER SPANISH")
* insert MapConcept(#699, "OTHER RACE\, N.E.C.", #699,  "OTHER RACE\, N.E.C.")
* insert MapConcept(#990, "Multiple SOME OTHER RACE responses", #990,  "Multiple SOME OTHER RACE responses")
* insert MapConcept(#995, "American", #995,  "American")
* insert MapConcept(#996, "Uncodable", #996,  "Uncodable")
* insert MapConcept(#997, "Deferred", #997,  "Deferred")
* insert MapConcept(#998, "UNKNOWN", #998,  "UNKNOWN")
* insert MapConcept(#999, "First Pass Reject", #999,  "First Pass Reject")
* insert MapConcept(#A01, "Abenaki Nation of Missiquoi", #A01,  "Abenaki Nation of Missiquoi")
* insert MapConcept(#A05, "Algonquian", #A05,  "Algonquian")
* insert MapConcept(#A09, "Apache", #A09,  "Apache")
* insert MapConcept(#A10, "Chiricahua", #A10,  "Chiricahua")
* insert MapConcept(#A11, "Fort Sill Apache", #A11,  "Fort Sill Apache")
* insert MapConcept(#A12, "Jicarilla Apache", #A12,  "Jicarilla Apache")
* insert MapConcept(#A13, "Lipan Apache", #A13,  "Lipan Apache")
* insert MapConcept(#A14, "Mescalero Apache", #A14,  "Mescalero Apache")
* insert MapConcept(#A15, "Oklahoma Apache", #A15,  "Oklahoma Apache")
* insert MapConcept(#A16, "Payson Tonto Apache", #A16,  "Payson Tonto Apache")
* insert MapConcept(#A17, "San Carlos Apache", #A17,  "San Carlos Apache")
* insert MapConcept(#A18, "White Mountain Apache", #A18,  "White Mountain Apache")
* insert MapConcept(#A24, "Arapahoe", #A24,  "Arapahoe")
* insert MapConcept(#A25, "Northern Arapahoe", #A25,  "Northern Arapahoe")
* insert MapConcept(#A26, "Southern Arapahoe", #A26,  "Southern Arapahoe")
* insert MapConcept(#A27, "Wind River Arapahoe", #A27,  "Wind River Arapahoe")
* insert MapConcept(#A31, "Arikara", #A31,  "Arikara")
* insert MapConcept(#A34, "Assiniboine", #A34,  "Assiniboine")
* insert MapConcept(#A35, "Fort Peck Assiniboine", #A35,  "Fort Peck Assiniboine")
* insert MapConcept(#A36, "Fort Belknap Assiniboine", #A36,  "Fort Belknap Assiniboine")
* insert MapConcept(#A38, "Assiniboine Sioux", #A38,  "Assiniboine Sioux")
* insert MapConcept(#A39, "Fort Peck Assiniboine and Sioux", #A39,  "Fort Peck Assiniboine and Sioux")
* insert MapConcept(#A42, "Bannock", #A42,  "Bannock")
* insert MapConcept(#A45, "Blackfeet", #A45,  "Blackfeet")
* insert MapConcept(#A51, "Brotherton", #A51,  "Brotherton")
* insert MapConcept(#A54, "Burt Lake Band", #A54,  "Burt Lake Band")
* insert MapConcept(#A56, "Caddo", #A56,  "Caddo")
* insert MapConcept(#A57, "Caddo Indian Tribe of Oklahoma", #A57,  "Caddo Indian Tribe of Oklahoma")
* insert MapConcept(#A58, "Caddo Adais Indians", #A58,  "Caddo Adais Indians")
* insert MapConcept(#A61, "Agua Caliente Band of Cahuilla Indians", #A61,  "Agua Caliente Band of Cahuilla Indians")
* insert MapConcept(#A62, "Augustine", #A62,  "Augustine")
* insert MapConcept(#A63, "Cabazon Band of Cahuilla Mission Indians", #A63,  "Cabazon Band of Cahuilla Mission Indians")
* insert MapConcept(#A64, "Cahuilla", #A64,  "Cahuilla")
* insert MapConcept(#A65, "Los Coyotes Band of Cahuilla Mission Indians", #A65,  "Los Coyotes Band of Cahuilla Mission Indians")
* insert MapConcept(#A66, "Morongo Band of Cahuilla Mission Indians", #A66,  "Morongo Band of Cahuilla Mission Indians")
* insert MapConcept(#A67, "Santa Rosa Cahuilla", #A67,  "Santa Rosa Cahuilla")
* insert MapConcept(#A68, "Torres Martinez Band of Cahuilla Mission Indians", #A68,  "Torres Martinez Band of Cahuilla Mission Indians")
* insert MapConcept(#A69, "Ramona Band or Village of Cahuilla Mission Indians", #A69,  "Ramona Band or Village of Cahuilla Mission Indians")
* insert MapConcept(#A74, "CALIFORNIA TRIBES N.E.C.", #A74,  "CALIFORNIA TRIBES N.E.C.")
* insert MapConcept(#A75, "Cahto Indian Tribe of the Laytonville Rancheria", #A75,  "Cahto Indian Tribe of the Laytonville Rancheria")
* insert MapConcept(#A76, "Chimariko", #A76,  "Chimariko")
* insert MapConcept(#A77, "Coast Miwok", #A77,  "Coast Miwok")
* insert MapConcept(#A78, "MISSION BAND", #A78,  "MISSION BAND")
* insert MapConcept(#A79, "Kawaiisu", #A79,  "Kawaiisu")
* insert MapConcept(#A80, "Kem River Paiute Council", #A80,  "Kem River Paiute Council")
* insert MapConcept(#A81, "Mattole", #A81,  "Mattole")
* insert MapConcept(#A82, "Red Wood", #A82,  "Red Wood")
* insert MapConcept(#A83, "Santa Rosa Indian Community", #A83,  "Santa Rosa Indian Community")
* insert MapConcept(#A84, "Takelma", #A84,  "Takelma")
* insert MapConcept(#A85, "Wappo", #A85,  "Wappo")
* insert MapConcept(#A86, "Yana", #A86,  "Yana")
* insert MapConcept(#A87, "Yuki", #A87,  "Yuki")
* insert MapConcept(#A88, "Bear River Band of Rohnerville Rancheria", #A88,  "Bear River Band of Rohnerville Rancheria")
* insert MapConcept(#A89, "DIGGER", #A89,  "DIGGER")
* insert MapConcept(#A90, "WIKCHAMNI", #A90,  "WIKCHAMNI")
* insert MapConcept(#A91, "Smith River Rancheria", #A91,  "Smith River Rancheria")
* insert MapConcept(#A94, "Canadian Indian", #A94,  "Canadian Indian")
* insert MapConcept(#A95, "Central American Indian", #A95,  "Central American Indian")
* insert MapConcept(#A96, "French American Indian", #A96,  "French American Indian")
* insert MapConcept(#A97, "Mexican American Indian", #A97,  "Mexican American Indian")
* insert MapConcept(#A98, "South American Indian", #A98,  "South American Indian")
* insert MapConcept(#A99, "Spanish American Indian", #A99,  "Spanish American Indian")
* insert MapConcept(#B04, "Catawba Indian Nation", #B04,  "Catawba Indian Nation")
* insert MapConcept(#B07, "Cayuse", #B07,  "Cayuse")
* insert MapConcept(#B11, "Chehalis", #B11,  "Chehalis")
* insert MapConcept(#B14, "Chemakuan", #B14,  "Chemakuan")
* insert MapConcept(#B15, "Hoh Indian Tribe", #B15,  "Hoh Indian Tribe")
* insert MapConcept(#B16, "Quileute", #B16,  "Quileute")
* insert MapConcept(#B19, "Chemehuevi", #B19,  "Chemehuevi")
* insert MapConcept(#B21, "Cherokee", #B21,  "Cherokee")
* insert MapConcept(#B22, "Cherokee Alabama", #B22,  "Cherokee Alabama")
* insert MapConcept(#B23, "Cherokees of Northeast Alabama", #B23,  "Cherokees of Northeast Alabama")
* insert MapConcept(#B24, "Cherokees of Southeast Alabama", #B24,  "Cherokees of Southeast Alabama")
* insert MapConcept(#B25, "Georgia Eastern Cherokee", #B25,  "Georgia Eastern Cherokee")
* insert MapConcept(#B26, "Echota Cherokee", #B26,  "Echota Cherokee")
* insert MapConcept(#B27, "Etowah Cherokee", #B27,  "Etowah Cherokee")
* insert MapConcept(#B28, "Northern Cherokee Nation of Missouri and Arkansas", #B28,  "Northern Cherokee Nation of Missouri and Arkansas")
* insert MapConcept(#B29, "Tuscola", #B29,  "Tuscola")
* insert MapConcept(#B30, "United Keetoowah Band of Cherokee", #B30,  "United Keetoowah Band of Cherokee")
* insert MapConcept(#B31, "Western Cherokee", #B31,  "Western Cherokee")
* insert MapConcept(#B32, "Southeastern Cherokee Council", #B32,  "Southeastern Cherokee Council")
* insert MapConcept(#B33, "Sac River Band of the Chickamauga Cherokee", #B33,  "Sac River Band of the Chickamauga Cherokee")
* insert MapConcept(#B34, "White River Band of the Chickamauga Cherokee", #B34,  "White River Band of the Chickamauga Cherokee")
* insert MapConcept(#B35, "Four Winds Cherokee", #B35,  "Four Winds Cherokee")
* insert MapConcept(#B36, "Cherokee of Georgia", #B36,  "Cherokee of Georgia")
* insert MapConcept(#B37, "Cherokee Shawnee", #B37,  "Cherokee Shawnee")
* insert MapConcept(#B40, "Cheyenne", #B40,  "Cheyenne")
* insert MapConcept(#B41, "Northern Cheyenne", #B41,  "Northern Cheyenne")
* insert MapConcept(#B42, "Southern Cheyenne", #B42,  "Southern Cheyenne")
* insert MapConcept(#B46, "Cheyenne Arapaho", #B46,  "Cheyenne Arapaho")
* insert MapConcept(#B49, "Chickahominy Indian Tribe", #B49,  "Chickahominy Indian Tribe")
* insert MapConcept(#B50, "Chickahominy Eastern Band", #B50,  "Chickahominy Eastern Band")
* insert MapConcept(#B51, "WESTERN CHICKAHOMINY", #B51,  "WESTERN CHICKAHOMINY")
* insert MapConcept(#B53, "Chickasaw", #B53,  "Chickasaw")
* insert MapConcept(#B57, "Chinook", #B57,  "Chinook")
* insert MapConcept(#B58, "Clatsop", #B58,  "Clatsop")
* insert MapConcept(#B59, "Columbia River Chinook", #B59,  "Columbia River Chinook")
* insert MapConcept(#B60, "Kathlamet", #B60,  "Kathlamet")
* insert MapConcept(#B61, "Upper Chinook", #B61,  "Upper Chinook")
* insert MapConcept(#B62, "Wakiakum Chinook", #B62,  "Wakiakum Chinook")
* insert MapConcept(#B63, "Willapa Chinook", #B63,  "Willapa Chinook")
* insert MapConcept(#B64, "Wishram", #B64,  "Wishram")
* insert MapConcept(#B67, "Bad River Band of the Lake Superior Tribe", #B67,  "Bad River Band of the Lake Superior Tribe")
* insert MapConcept(#B68, "Bay Mills Indian Community of the Sault Ste. Marie Band", #B68,  "Bay Mills Indian Community of the Sault Ste. Marie Band")
* insert MapConcept(#B69, "Bois Forte Nett Lake Band of Chippewa", #B69,  "Bois Forte Nett Lake Band of Chippewa")
* insert MapConcept(#B70, "Burt Lake Chippewa", #B70,  "Burt Lake Chippewa")
* insert MapConcept(#B71, "Chippewa", #B71,  "Chippewa")
* insert MapConcept(#B72, "Fond du Lac", #B72,  "Fond du Lac")
* insert MapConcept(#B73, "Grand Portage", #B73,  "Grand Portage")
* insert MapConcept(#B74, "Grand Traverse Band of Ottawa and Chippewa Indians", #B74,  "Grand Traverse Band of Ottawa and Chippewa Indians")
* insert MapConcept(#B75, "Keweenaw Bay Indian Community of the L'Anse and Ontonagon Bands", #B75,  "Keweenaw Bay Indian Community of the L'Anse and Ontonagon Bands")
* insert MapConcept(#B76, "Lac Court Oreilles Band of Lake Superior Chippewa", #B76,  "Lac Court Oreilles Band of Lake Superior Chippewa")
* insert MapConcept(#B77, "Lac du Flambeau", #B77,  "Lac du Flambeau")
* insert MapConcept(#B78, "Lac Vieux Desert Band of Lake Superior Chippewa", #B78,  "Lac Vieux Desert Band of Lake Superior Chippewa")
* insert MapConcept(#B79, "Lake Superior", #B79,  "Lake Superior")
* insert MapConcept(#B80, "Leech Lake", #B80,  "Leech Lake")
* insert MapConcept(#B81, "Little Shell Chippewa", #B81,  "Little Shell Chippewa")
* insert MapConcept(#B82, "Mille Lacs", #B82,  "Mille Lacs")
* insert MapConcept(#B83, "Minnesota Chippewa", #B83,  "Minnesota Chippewa")
* insert MapConcept(#B84, "Ontonagon", #B84,  "Ontonagon")
* insert MapConcept(#B85, "Red Cliff Band of Lake Superior Chippewa", #B85,  "Red Cliff Band of Lake Superior Chippewa")
* insert MapConcept(#B86, "Red Lake Band of Chippewa Indians", #B86,  "Red Lake Band of Chippewa Indians")
* insert MapConcept(#B87, "Saginaw Chippewa", #B87,  "Saginaw Chippewa")
* insert MapConcept(#B88, "St. Croix Chippewa", #B88,  "St. Croix Chippewa")
* insert MapConcept(#B89, "Sault Ste. Marie Chippewa", #B89,  "Sault Ste. Marie Chippewa")
* insert MapConcept(#B90, "Sokoagon Chippewa", #B90,  "Sokoagon Chippewa")
* insert MapConcept(#B91, "Turtle Mountain Band", #B91,  "Turtle Mountain Band")
* insert MapConcept(#B92, "White Earth", #B92,  "White Earth")
* insert MapConcept(#B93, "Swan Creek Black River Confederate Tribe", #B93,  "Swan Creek Black River Confederate Tribe")
* insert MapConcept(#C02, "Rocky Boy's Chippewa Cree", #C02,  "Rocky Boy's Chippewa Cree")
* insert MapConcept(#C05, "Chitimacha Tribe of Louisiana", #C05,  "Chitimacha Tribe of Louisiana")
* insert MapConcept(#C08, "Choctaw", #C08,  "Choctaw")
* insert MapConcept(#C09, "Clifton Choctaw", #C09,  "Clifton Choctaw")
* insert MapConcept(#C10, "Jena Band of Choctaw", #C10,  "Jena Band of Choctaw")
* insert MapConcept(#C11, "Mississippi Band of Choctaw", #C11,  "Mississippi Band of Choctaw")
* insert MapConcept(#C12, "Mowa Band of Choctaw", #C12,  "Mowa Band of Choctaw")
* insert MapConcept(#C13, "Oklahoma Choctaw", #C13,  "Oklahoma Choctaw")
* insert MapConcept(#C17, "Choctaw Apache Community of Ebarb", #C17,  "Choctaw Apache Community of Ebarb")
* insert MapConcept(#C20, "Chumash", #C20,  "Chumash")
* insert MapConcept(#C21, "Santa Ynez", #C21,  "Santa Ynez")
* insert MapConcept(#C22, "San Luis Rey Mission Indian", #C22,  "San Luis Rey Mission Indian")
* insert MapConcept(#C25, "Clear Lake", #C25,  "Clear Lake")
* insert MapConcept(#C26, "Coeur D'Alene", #C26,  "Coeur D'Alene")
* insert MapConcept(#C29, "Coharie", #C29,  "Coharie")
* insert MapConcept(#C32, "Colorado River", #C32,  "Colorado River")
* insert MapConcept(#C35, "Colville", #C35,  "Colville")
* insert MapConcept(#C39, "Comanche", #C39,  "Comanche")
* insert MapConcept(#C40, "Oklahoma Comanche", #C40,  "Oklahoma Comanche")
* insert MapConcept(#C44, "Coos Lower Umpqua and Siuslaw", #C44,  "Coos Lower Umpqua and Siuslaw")
* insert MapConcept(#C46, "Coos", #C46,  "Coos")
* insert MapConcept(#C47, "Coquille", #C47,  "Coquille")
* insert MapConcept(#C48, "Costanoan", #C48,  "Costanoan")
* insert MapConcept(#C52, "Alabama Coushatta Tribes of Texas", #C52,  "Alabama Coushatta Tribes of Texas")
* insert MapConcept(#C53, "Coushatta", #C53,  "Coushatta")
* insert MapConcept(#C56, "Cowlitz", #C56,  "Cowlitz")
* insert MapConcept(#C59, "Cree", #C59,  "Cree")
* insert MapConcept(#C64, "Alabama Creek", #C64,  "Alabama Creek")
* insert MapConcept(#C65, "Alabama Quassarte Tribal Town", #C65,  "Alabama Quassarte Tribal Town")
* insert MapConcept(#C66, "Muscogee Creek Nation", #C66,  "Muscogee Creek Nation")
* insert MapConcept(#C67, "Eastern Creek", #C67,  "Eastern Creek")
* insert MapConcept(#C68, "Eastern Muscogee", #C68,  "Eastern Muscogee")
* insert MapConcept(#C69, "Kialegee Tribal Town", #C69,  "Kialegee Tribal Town")
* insert MapConcept(#C70, "Lower Muscogee Creek Tama Tribal Town", #C70,  "Lower Muscogee Creek Tama Tribal Town")
* insert MapConcept(#C71, "Machis Lower Creek Indian", #C71,  "Machis Lower Creek Indian")
* insert MapConcept(#C72, "Poarch Band", #C72,  "Poarch Band")
* insert MapConcept(#C73, "Principal Creek Indian Nation", #C73,  "Principal Creek Indian Nation")
* insert MapConcept(#C74, "Star Clan of Muskogee Creeks", #C74,  "Star Clan of Muskogee Creeks")
* insert MapConcept(#C75, "Thiopthlocco Tribal Town", #C75,  "Thiopthlocco Tribal Town")
* insert MapConcept(#C76, "Tuckabachee", #C76,  "Tuckabachee")
* insert MapConcept(#C81, "Croatan", #C81,  "Croatan")
* insert MapConcept(#C82, "Crow", #C82,  "Crow")
* insert MapConcept(#C87, "Cumberland County Association for Indian People", #C87,  "Cumberland County Association for Indian People")
* insert MapConcept(#C89, "Agua Caliente", #C89,  "Agua Caliente")
* insert MapConcept(#C90, "Cupeno", #C90,  "Cupeno")
* insert MapConcept(#C93, "Delaware", #C93,  "Delaware")
* insert MapConcept(#C94, "Delaware Tribe of Indians\, Oklahoma", #C94,  "Delaware Tribe of Indians\, Oklahoma")
* insert MapConcept(#C95, "Lenni Lanape", #C95,  "Lenni Lanape")
* insert MapConcept(#C96, "Munsee", #C96,  "Munsee")
* insert MapConcept(#C97, "Delaware Tribe of Western Oklahoma", #C97,  "Delaware Tribe of Western Oklahoma")
* insert MapConcept(#C98, "Ramapough Mountain", #C98,  "Ramapough Mountain")
* insert MapConcept(#C99, "Sand Hill Band of Delaware Indians", #C99,  "Sand Hill Band of Delaware Indians")
* insert MapConcept(#D05, "Barona Group of Capitan Grande Band", #D05,  "Barona Group of Capitan Grande Band")
* insert MapConcept(#D06, "Campo Band of Diegueno Mission Indians", #D06,  "Campo Band of Diegueno Mission Indians")
* insert MapConcept(#D07, "Capitan Grande Band of Diegueno Mission Indians", #D07,  "Capitan Grande Band of Diegueno Mission Indians")
* insert MapConcept(#D08, "Cuyapaipe", #D08,  "Cuyapaipe")
* insert MapConcept(#D09, "Diegueno", #D09,  "Diegueno")
* insert MapConcept(#D10, "La Posta Band of Diegueno Mission Indians", #D10,  "La Posta Band of Diegueno Mission Indians")
* insert MapConcept(#D11, "Manzanita", #D11,  "Manzanita")
* insert MapConcept(#D12, "Mesa Grande Band of Diegueno Mission Indians", #D12,  "Mesa Grande Band of Diegueno Mission Indians")
* insert MapConcept(#D13, "San Pasqual Band of Diegueno Mission Indians", #D13,  "San Pasqual Band of Diegueno Mission Indians")
* insert MapConcept(#D14, "Santa Ysabel Band of Diegueno Mission Indians", #D14,  "Santa Ysabel Band of Diegueno Mission Indians")
* insert MapConcept(#D15, "Sycuan Band of Diegueno Mission Indians", #D15,  "Sycuan Band of Diegueno Mission Indians")
* insert MapConcept(#D16, "Viejas Group of Capitan Grande Band", #D16,  "Viejas Group of Capitan Grande Band")
* insert MapConcept(#D17, "Inaja Band of Diegueno Mission Indians of the Inaja and Cosmit Reservation", #D17,  "Inaja Band of Diegueno Mission Indians of the Inaja and Cosmit Reservation")
* insert MapConcept(#D18, "Jarnul Indian Village", #D18,  "Jarnul Indian Village")
* insert MapConcept(#D20, "Attacapa", #D20,  "Attacapa")
* insert MapConcept(#D21, "Biloxi", #D21,  "Biloxi")
* insert MapConcept(#D22, "Georgetown", #D22,  "Georgetown")
* insert MapConcept(#D24, "Nansemond Indian Tribe", #D24,  "Nansemond Indian Tribe")
* insert MapConcept(#D25, "Natchez", #D25,  "Natchez")
* insert MapConcept(#D26, "Nausu Waiwash", #D26,  "Nausu Waiwash")
* insert MapConcept(#D27, "Nipmuc", #D27,  "Nipmuc")
* insert MapConcept(#D28, "Golden Hill Paugussett", #D28,  "Golden Hill Paugussett")
* insert MapConcept(#D29, "Pocomoke Acohonock", #D29,  "Pocomoke Acohonock")
* insert MapConcept(#D30, "Southeastern Indians", #D30,  "Southeastern Indians")
* insert MapConcept(#D31, "Susquehanock", #D31,  "Susquehanock")
* insert MapConcept(#D33, "Tunica Biloxi", #D33,  "Tunica Biloxi")
* insert MapConcept(#D34, "Waccamaw Siouan", #D34,  "Waccamaw Siouan")
* insert MapConcept(#D36, "Wicomico", #D36,  "Wicomico")
* insert MapConcept(#D37, "Mehemn Indian Tribe", #D37,  "Mehemn Indian Tribe")
* insert MapConcept(#D42, "Esselen", #D42,  "Esselen")
* insert MapConcept(#D44, "Fort Belknap", #D44,  "Fort Belknap")
* insert MapConcept(#D45, "FORT BERTHOLD", #D45,  "FORT BERTHOLD")
* insert MapConcept(#D46, "Three Affiliated Tribes of North Dakota", #D46,  "Three Affiliated Tribes of North Dakota")
* insert MapConcept(#D49, "Fort McDowell MohaveApache Community", #D49,  "Fort McDowell MohaveApache Community")
* insert MapConcept(#D51, "ShoshoneBannock Tribes of the Fort Hall Reservation", #D51,  "ShoshoneBannock Tribes of the Fort Hall Reservation")
* insert MapConcept(#D55, "Gabrieleno", #D55,  "Gabrieleno")
* insert MapConcept(#D57, "Grand Ronde", #D57,  "Grand Ronde")
* insert MapConcept(#D58, "Guilford Native American Association", #D58,  "Guilford Native American Association")
* insert MapConcept(#D60, "Atsina", #D60,  "Atsina")
* insert MapConcept(#D61, "Gros Ventres", #D61,  "Gros Ventres")
* insert MapConcept(#D62, "Fort Belknap Gros Ventres", #D62,  "Fort Belknap Gros Ventres")
* insert MapConcept(#D64, "HaliwaSaponi", #D64,  "HaliwaSaponi")
* insert MapConcept(#D67, "Hidatsa", #D67,  "Hidatsa")
* insert MapConcept(#D70, "Hoopa Valley Tribe", #D70,  "Hoopa Valley Tribe")
* insert MapConcept(#D71, "Trinity", #D71,  "Trinity")
* insert MapConcept(#D72, "Whilkut", #D72,  "Whilkut")
* insert MapConcept(#D76, "Hoopa Extension", #D76,  "Hoopa Extension")
* insert MapConcept(#D78, "United Houma Nation", #D78,  "United Houma Nation")
* insert MapConcept(#D87, "Iowa", #D87,  "Iowa")
* insert MapConcept(#D88, "Iowa of Kansas and Nebraska", #D88,  "Iowa of Kansas and Nebraska")
* insert MapConcept(#D89, "Iowa of Oklahoma", #D89,  "Iowa of Oklahoma")
* insert MapConcept(#D91, "Indians of Person County", #D91,  "Indians of Person County")
* insert MapConcept(#D93, "Cayuga Nation", #D93,  "Cayuga Nation")
* insert MapConcept(#D94, "Iroquois", #D94,  "Iroquois")
* insert MapConcept(#D95, "Mohawk", #D95,  "Mohawk")
* insert MapConcept(#D96, "Oneida Nation of New York", #D96,  "Oneida Nation of New York")
* insert MapConcept(#D97, "Onondaga", #D97,  "Onondaga")
* insert MapConcept(#D98, "Seneca", #D98,  "Seneca")
* insert MapConcept(#D99, "Seneca Nation", #D99,  "Seneca Nation")
* insert MapConcept(#E01, "SenecaCayuga", #E01,  "SenecaCayuga")
* insert MapConcept(#E02, "Tonawanda Band of Seneca", #E02,  "Tonawanda Band of Seneca")
* insert MapConcept(#E03, "Tuscarora", #E03,  "Tuscarora")
* insert MapConcept(#E04, "Wyandotte", #E04,  "Wyandotte")
* insert MapConcept(#E10, "Juaneno", #E10,  "Juaneno")
* insert MapConcept(#E13, "Kalispel Indian Community", #E13,  "Kalispel Indian Community")
* insert MapConcept(#E17, "Karuk Tribe of California", #E17,  "Karuk Tribe of California")
* insert MapConcept(#E21, "Kaw", #E21,  "Kaw")
* insert MapConcept(#E24, "Kickapoo", #E24,  "Kickapoo")
* insert MapConcept(#E25, "Oklahoma Kickapoo", #E25,  "Oklahoma Kickapoo")
* insert MapConcept(#E26, "Texas Kickapoo", #E26,  "Texas Kickapoo")
* insert MapConcept(#E30, "Kiowa", #E30,  "Kiowa")
* insert MapConcept(#E31, "Oklahoma Kiowa", #E31,  "Oklahoma Kiowa")
* insert MapConcept(#E37, "Jamestown S'Klallam", #E37,  "Jamestown S'Klallam")
* insert MapConcept(#E38, "Klallam", #E38,  "Klallam")
* insert MapConcept(#E39, "Lower Elwha Tribal Community", #E39,  "Lower Elwha Tribal Community")
* insert MapConcept(#E40, "Port Gamble Klallam", #E40,  "Port Gamble Klallam")
* insert MapConcept(#E44, "Klamath", #E44,  "Klamath")
* insert MapConcept(#E48, "Konkow", #E48,  "Konkow")
* insert MapConcept(#E50, "Kootenai", #E50,  "Kootenai")
* insert MapConcept(#E53, "Lassik", #E53,  "Lassik")
* insert MapConcept(#E59, "Matinecock", #E59,  "Matinecock")
* insert MapConcept(#E60, "Montauk", #E60,  "Montauk")
* insert MapConcept(#E61, "Poospatuck", #E61,  "Poospatuck")
* insert MapConcept(#E62, "Setauket", #E62,  "Setauket")
* insert MapConcept(#E63, "LONG ISLAND", #E63,  "LONG ISLAND")
* insert MapConcept(#E66, "La Jolla Band of Luiseno Mission Indians", #E66,  "La Jolla Band of Luiseno Mission Indians")
* insert MapConcept(#E67, "Luiseno", #E67,  "Luiseno")
* insert MapConcept(#E68, "Pala Band of Luiseno Mission Indians", #E68,  "Pala Band of Luiseno Mission Indians")
* insert MapConcept(#E69, "Pauma Band of Luiseno Mission Indians", #E69,  "Pauma Band of Luiseno Mission Indians")
* insert MapConcept(#E70, "Pechanga Band of Luiseno Mission Indians", #E70,  "Pechanga Band of Luiseno Mission Indians")
* insert MapConcept(#E71, "Soboba", #E71,  "Soboba")
* insert MapConcept(#E72, "TwentyNine Palms Band of Luiseno Mission Indians", #E72,  "TwentyNine Palms Band of Luiseno Mission Indians")
* insert MapConcept(#E73, "Temecula", #E73,  "Temecula")
* insert MapConcept(#E74, "Rincon Band of Luiseno Mission Indians", #E74,  "Rincon Band of Luiseno Mission Indians")
* insert MapConcept(#E78, "Lumbee", #E78,  "Lumbee")
* insert MapConcept(#E84, "Lummi", #E84,  "Lummi")
* insert MapConcept(#E87, "Mooretown Rancheria of Maidu Indians", #E87,  "Mooretown Rancheria of Maidu Indians")
* insert MapConcept(#E88, "Maidu", #E88,  "Maidu")
* insert MapConcept(#E89, "Mountain Maidu", #E89,  "Mountain Maidu")
* insert MapConcept(#E90, "Nisenen", #E90,  "Nisenen")
* insert MapConcept(#E91, "Mechoopda Indian Tribe of Chico Rancheria\, California", #E91,  "Mechoopda Indian Tribe of Chico Rancheria\, California")
* insert MapConcept(#E92, "Berry Creek Rancheria of Maidu Indians", #E92,  "Berry Creek Rancheria of Maidu Indians")
* insert MapConcept(#E93, "Enterprise Rancheria", #E93,  "Enterprise Rancheria")
* insert MapConcept(#E94, "Greenville Rancheria", #E94,  "Greenville Rancheria")
* insert MapConcept(#E95, "Makah", #E95,  "Makah")
* insert MapConcept(#F01, "Maliseet", #F01,  "Maliseet")
* insert MapConcept(#F02, "Houlton Band of Maliseet Indians", #F02,  "Houlton Band of Maliseet Indians")
* insert MapConcept(#F05, "Mandan", #F05,  "Mandan")
* insert MapConcept(#F09, "Mattaponi Indian Tribe", #F09,  "Mattaponi Indian Tribe")
* insert MapConcept(#F10, "Upper Mattaponi Tribe", #F10,  "Upper Mattaponi Tribe")
* insert MapConcept(#F11, "Menominee", #F11,  "Menominee")
* insert MapConcept(#F15, "Metrolina Nadve American Association", #F15,  "Metrolina Nadve American Association")
* insert MapConcept(#F17, "Illinois Miami", #F17,  "Illinois Miami")
* insert MapConcept(#F18, "Indiana Miami", #F18,  "Indiana Miami")
* insert MapConcept(#F19, "Miami", #F19,  "Miami")
* insert MapConcept(#F20, "Oklahoma Miami", #F20,  "Oklahoma Miami")
* insert MapConcept(#F24, "Miccosukee", #F24,  "Miccosukee")
* insert MapConcept(#F27, "Aroostook Band", #F27,  "Aroostook Band")
* insert MapConcept(#F28, "Micmac", #F28,  "Micmac")
* insert MapConcept(#F31, "Mission Indians", #F31,  "Mission Indians")
* insert MapConcept(#F32, "Cahuilla Band of Mission Indians", #F32,  "Cahuilla Band of Mission Indians")
* insert MapConcept(#F34, "Ione Band of Miwok Indians", #F34,  "Ione Band of Miwok Indians")
* insert MapConcept(#F35, "Shingle Springs Band of Miwok Indians", #F35,  "Shingle Springs Band of Miwok Indians")
* insert MapConcept(#F36, "MeWuk", #F36,  "MeWuk")
* insert MapConcept(#F37, "Jackson Rancheria of MeWuk Indians of California", #F37,  "Jackson Rancheria of MeWuk Indians of California")
* insert MapConcept(#F38, "Tuolumne Band of MeWuk Indians of California", #F38,  "Tuolumne Band of MeWuk Indians of California")
* insert MapConcept(#F39, "Buena Vista Rancheria of MeWuk Indians of California", #F39,  "Buena Vista Rancheria of MeWuk Indians of California")
* insert MapConcept(#F40, "Chicken Ranch Rancheria of MeWuk Indians", #F40,  "Chicken Ranch Rancheria of MeWuk Indians")
* insert MapConcept(#F41, "Sheep Ranch Rancheria of MeWuk Indians", #F41,  "Sheep Ranch Rancheria of MeWuk Indians")
* insert MapConcept(#F42, "Modoc", #F42,  "Modoc")
* insert MapConcept(#F43, "Oklahoma Modoc", #F43,  "Oklahoma Modoc")
* insert MapConcept(#F46, "Mohegan", #F46,  "Mohegan")
* insert MapConcept(#F47, "Monacan Indian Nation", #F47,  "Monacan Indian Nation")
* insert MapConcept(#F49, "Mono", #F49,  "Mono")
* insert MapConcept(#F50, "North Fork Rancheria", #F50,  "North Fork Rancheria")
* insert MapConcept(#F51, "Cold Springs Rancheria", #F51,  "Cold Springs Rancheria")
* insert MapConcept(#F52, "Big Sandy Rancheria", #F52,  "Big Sandy Rancheria")
* insert MapConcept(#F53, "Nanticoke", #F53,  "Nanticoke")
* insert MapConcept(#F56, "Nanticoke LenniLenape", #F56,  "Nanticoke LenniLenape")
* insert MapConcept(#F57, "Narragansett", #F57,  "Narragansett")
* insert MapConcept(#F62, "Alamo Navajo", #F62,  "Alamo Navajo")
* insert MapConcept(#F63, "Tohajiileehee Navajo", #F63,  "Tohajiileehee Navajo")
* insert MapConcept(#F64, "Navajo", #F64,  "Navajo")
* insert MapConcept(#F65, "Ramah Navajo", #F65,  "Ramah Navajo")
* insert MapConcept(#F71, "Nez Perce", #F71,  "Nez Perce")
* insert MapConcept(#F75, "Hassanamisco Band of the Nipmuc Nation", #F75,  "Hassanamisco Band of the Nipmuc Nation")
* insert MapConcept(#F76, "Chaubunagungameg Nipmuc", #F76,  "Chaubunagungameg Nipmuc")
* insert MapConcept(#F77, "Nomlaki", #F77,  "Nomlaki")
* insert MapConcept(#F78, "Paskenta Band of Nomlaki Indians", #F78,  "Paskenta Band of Nomlaki Indians")
* insert MapConcept(#F80, "Alsea", #F80,  "Alsea")
* insert MapConcept(#F81, "Celilo", #F81,  "Celilo")
* insert MapConcept(#F82, "Columbia", #F82,  "Columbia")
* insert MapConcept(#F83, "Kalapuya", #F83,  "Kalapuya")
* insert MapConcept(#F84, "Molalla", #F84,  "Molalla")
* insert MapConcept(#F85, "Talakamish", #F85,  "Talakamish")
* insert MapConcept(#F86, "Tenino", #F86,  "Tenino")
* insert MapConcept(#F87, "Tillamook", #F87,  "Tillamook")
* insert MapConcept(#F88, "Wenatchee", #F88,  "Wenatchee")
* insert MapConcept(#F95, "Omaha", #F95,  "Omaha")
* insert MapConcept(#F99, "Oneida Tribe of Wisconsin", #F99,  "Oneida Tribe of Wisconsin")
* insert MapConcept(#G01, "Oregon Athabaskan", #G01,  "Oregon Athabaskan")
* insert MapConcept(#G04, "Osage", #G04,  "Osage")
* insert MapConcept(#G10, "OtoeMissouria", #G10,  "OtoeMissouria")
* insert MapConcept(#G14, "Burt Lake Ottawa", #G14,  "Burt Lake Ottawa")
* insert MapConcept(#G15, "Little River Band of Ottawa Indians of Michigan", #G15,  "Little River Band of Ottawa Indians of Michigan")
* insert MapConcept(#G16, "Oklahoma Ottawa", #G16,  "Oklahoma Ottawa")
* insert MapConcept(#G17, "Ottawa", #G17,  "Ottawa")
* insert MapConcept(#G18, "Little Traverse Bay Bands of Ottawa Indians of Michigan", #G18,  "Little Traverse Bay Bands of Ottawa Indians of Michigan")
* insert MapConcept(#G19, "Grand River Band of Ottawa Indians", #G19,  "Grand River Band of Ottawa Indians")
* insert MapConcept(#G24, "Bridgeport Paiute Indian Colony", #G24,  "Bridgeport Paiute Indian Colony")
* insert MapConcept(#G25, "Burns Paiute Tribe", #G25,  "Burns Paiute Tribe")
* insert MapConcept(#G26, "Cedarville Rancheria", #G26,  "Cedarville Rancheria")
* insert MapConcept(#G27, "Fort Bidwell", #G27,  "Fort Bidwell")
* insert MapConcept(#G28, "Fort Independence", #G28,  "Fort Independence")
* insert MapConcept(#G29, "Kaibab Band of Paiute Indians", #G29,  "Kaibab Band of Paiute Indians")
* insert MapConcept(#G30, "Las Vegas Tribe of the Las Vegas Indian Colony", #G30,  "Las Vegas Tribe of the Las Vegas Indian Colony")
* insert MapConcept(#G32, "Lovelock Paiute Tribe of the Lovelock Indian Colony", #G32,  "Lovelock Paiute Tribe of the Lovelock Indian Colony")
* insert MapConcept(#G33, "Malheur Paiute", #G33,  "Malheur Paiute")
* insert MapConcept(#G34, "Moapa Band of Paiute", #G34,  "Moapa Band of Paiute")
* insert MapConcept(#G35, "Northern Paiute", #G35,  "Northern Paiute")
* insert MapConcept(#G37, "Paiute", #G37,  "Paiute")
* insert MapConcept(#G38, "Pyramid Lake", #G38,  "Pyramid Lake")
* insert MapConcept(#G39, "San Juan Southern Paiute", #G39,  "San Juan Southern Paiute")
* insert MapConcept(#G40, "Southern Paiute", #G40,  "Southern Paiute")
* insert MapConcept(#G41, "Summit Lake", #G41,  "Summit Lake")
* insert MapConcept(#G42, "Utu Utu Gwaitu Paiute", #G42,  "Utu Utu Gwaitu Paiute")
* insert MapConcept(#G43, "Walker River", #G43,  "Walker River")
* insert MapConcept(#G44, "Yerington Paiute", #G44,  "Yerington Paiute")
* insert MapConcept(#G45, "Yahooskin Band of Snake", #G45,  "Yahooskin Band of Snake")
* insert MapConcept(#G47, "Susanville", #G47,  "Susanville")
* insert MapConcept(#G48, "Winnemucca", #G48,  "Winnemucca")
* insert MapConcept(#G50, "Pamunkey Indian Tribe", #G50,  "Pamunkey Indian Tribe")
* insert MapConcept(#G53, "Indian Township", #G53,  "Indian Township")
* insert MapConcept(#G54, "Passamaquoddy", #G54,  "Passamaquoddy")
* insert MapConcept(#G55, "Pleasant Point Passamaquoddy", #G55,  "Pleasant Point Passamaquoddy")
* insert MapConcept(#G61, "Oklahoma Pawnee", #G61,  "Oklahoma Pawnee")
* insert MapConcept(#G62, "Pawnee", #G62,  "Pawnee")
* insert MapConcept(#G68, "Penobscot", #G68,  "Penobscot")
* insert MapConcept(#G72, "Oklahoma Peoria", #G72,  "Oklahoma Peoria")
* insert MapConcept(#G73, "Peoria", #G73,  "Peoria")
* insert MapConcept(#G77, "Mashantucket Pequot", #G77,  "Mashantucket Pequot")
* insert MapConcept(#G78, "Pequot", #G78,  "Pequot")
* insert MapConcept(#G79, "Paucatuck Eastern Pequot", #G79,  "Paucatuck Eastern Pequot")
* insert MapConcept(#G84, "Gila River Indian Community", #G84,  "Gila River Indian Community")
* insert MapConcept(#G85, "Pima", #G85,  "Pima")
* insert MapConcept(#G86, "Salt River PimaMaricopa", #G86,  "Salt River PimaMaricopa")
* insert MapConcept(#G92, "Piscataway", #G92,  "Piscataway")
* insert MapConcept(#G96, "Pit River Tribe of California", #G96,  "Pit River Tribe of California")
* insert MapConcept(#G97, "Alturas Indian Rancheria", #G97,  "Alturas Indian Rancheria")
* insert MapConcept(#G98, "Redding Rancheria", #G98,  "Redding Rancheria")
* insert MapConcept(#G99, "Big Valley Rancheria of Pomo and Pit River Indians", #G99,  "Big Valley Rancheria of Pomo and Pit River Indians")
* insert MapConcept(#H01, "Central Pomo", #H01,  "Central Pomo")
* insert MapConcept(#H02, "Dry Creek", #H02,  "Dry Creek")
* insert MapConcept(#H03, "Eastern Pomo", #H03,  "Eastern Pomo")
* insert MapConcept(#H04, "Kashia Band of Pomo Indians of the Stewarts Point Rancheria", #H04,  "Kashia Band of Pomo Indians of the Stewarts Point Rancheria")
* insert MapConcept(#H05, "Northern Pomo", #H05,  "Northern Pomo")
* insert MapConcept(#H06, "Pomo", #H06,  "Pomo")
* insert MapConcept(#H07, "Scotts Valley Band", #H07,  "Scotts Valley Band")
* insert MapConcept(#H08, "Stonyford", #H08,  "Stonyford")
* insert MapConcept(#H09, "Elem Indian Colony of the Sulphur Bank", #H09,  "Elem Indian Colony of the Sulphur Bank")
* insert MapConcept(#H10, "Sherwood Valley Rancheria of Pomo Indians of California", #H10,  "Sherwood Valley Rancheria of Pomo Indians of California")
* insert MapConcept(#H11, "Guidiville Rancheria of California", #H11,  "Guidiville Rancheria of California")
* insert MapConcept(#H12, "Lytton Rancheria of California", #H12,  "Lytton Rancheria of California")
* insert MapConcept(#H13, "Cloverdale Rancheria", #H13,  "Cloverdale Rancheria")
* insert MapConcept(#H14, "Coyote Valley Band", #H14,  "Coyote Valley Band")
* insert MapConcept(#H15, "Nebraska Ponca", #H15,  "Nebraska Ponca")
* insert MapConcept(#H16, "Oklahoma Ponca", #H16,  "Oklahoma Ponca")
* insert MapConcept(#H17, "Ponca", #H17,  "Ponca")
* insert MapConcept(#H21, "Citizen Potawatomi Nation", #H21,  "Citizen Potawatomi Nation")
* insert MapConcept(#H22, "Forest County", #H22,  "Forest County")
* insert MapConcept(#H23, "Hannahville Indian Community of Wisconsin Potawatomi", #H23,  "Hannahville Indian Community of Wisconsin Potawatomi")
* insert MapConcept(#H24, "Huron Potawatomi", #H24,  "Huron Potawatomi")
* insert MapConcept(#H25, "Pokagon Band of Potawatomi Indians", #H25,  "Pokagon Band of Potawatomi Indians")
* insert MapConcept(#H26, "Potawatomi", #H26,  "Potawatomi")
* insert MapConcept(#H27, "Prairie Band of Potawatomi Indians", #H27,  "Prairie Band of Potawatomi Indians")
* insert MapConcept(#H28, "Wisconsin Potawatomi", #H28,  "Wisconsin Potawatomi")
* insert MapConcept(#H34, "Powhatan", #H34,  "Powhatan")
* insert MapConcept(#H38, "Acoma", #H38,  "Acoma")
* insert MapConcept(#H39, "Arizona Tewa", #H39,  "Arizona Tewa")
* insert MapConcept(#H40, "Cochiti", #H40,  "Cochiti")
* insert MapConcept(#H41, "Hopi", #H41,  "Hopi")
* insert MapConcept(#H42, "Isleta", #H42,  "Isleta")
* insert MapConcept(#H43, "Jemez", #H43,  "Jemez")
* insert MapConcept(#H44, "Keres", #H44,  "Keres")
* insert MapConcept(#H45, "Laguna", #H45,  "Laguna")
* insert MapConcept(#H46, "Nambe", #H46,  "Nambe")
* insert MapConcept(#H47, "Picuris", #H47,  "Picuris")
* insert MapConcept(#H48, "Piro", #H48,  "Piro")
* insert MapConcept(#H49, "Pojoaque", #H49,  "Pojoaque")
* insert MapConcept(#H50, "Pueblo", #H50,  "Pueblo")
* insert MapConcept(#H51, "San Felipe", #H51,  "San Felipe")
* insert MapConcept(#H52, "San Ildefonso", #H52,  "San Ildefonso")
* insert MapConcept(#H53, "San Juan Pueblo", #H53,  "San Juan Pueblo")
* insert MapConcept(#H54, "SAN JUAN DE GUADELUPE", #H54,  "SAN JUAN DE GUADELUPE")
* insert MapConcept(#H55, "San Juan", #H55,  "San Juan")
* insert MapConcept(#H56, "Sandia", #H56,  "Sandia")
* insert MapConcept(#H57, "Santa Ana", #H57,  "Santa Ana")
* insert MapConcept(#H58, "Santa Clara", #H58,  "Santa Clara")
* insert MapConcept(#H59, "Santo Domingo", #H59,  "Santo Domingo")
* insert MapConcept(#H60, "Taos", #H60,  "Taos")
* insert MapConcept(#H61, "Tesuque", #H61,  "Tesuque")
* insert MapConcept(#H62, "Tewa", #H62,  "Tewa")
* insert MapConcept(#H63, "Ysleta Del Sur Pueblo of Texas", #H63,  "Ysleta Del Sur Pueblo of Texas")
* insert MapConcept(#H64, "Zia", #H64,  "Zia")
* insert MapConcept(#H65, "Zuni", #H65,  "Zuni")
* insert MapConcept(#H66, "Hopland Band of Pomo Indians", #H66,  "Hopland Band of Pomo Indians")
* insert MapConcept(#H67, "Manchester Band of Pomo Indians of the ManchesterPoint Arena Racheria", #H67,  "Manchester Band of Pomo Indians of the ManchesterPoint Arena Racheria")
* insert MapConcept(#H68, "Middletown Rancheria of Pomo Indians", #H68,  "Middletown Rancheria of Pomo Indians")
* insert MapConcept(#H69, "Pinoleville Rancheria of Pomo Indians", #H69,  "Pinoleville Rancheria of Pomo Indians")
* insert MapConcept(#H70, "Marietta Band of Nooksack", #H70,  "Marietta Band of Nooksack")
* insert MapConcept(#H71, "Duwamish", #H71,  "Duwamish")
* insert MapConcept(#H72, "Kikiallus", #H72,  "Kikiallus")
* insert MapConcept(#H73, "Lower Skagit", #H73,  "Lower Skagit")
* insert MapConcept(#H74, "Muckleshoot", #H74,  "Muckleshoot")
* insert MapConcept(#H75, "Nisqually", #H75,  "Nisqually")
* insert MapConcept(#H76, "Nooksack", #H76,  "Nooksack")
* insert MapConcept(#H77, "Port Madison", #H77,  "Port Madison")
* insert MapConcept(#H78, "Puget Sound Salish", #H78,  "Puget Sound Salish")
* insert MapConcept(#H79, "Puyaliup", #H79,  "Puyaliup")
* insert MapConcept(#H80, "Samish", #H80,  "Samish")
* insert MapConcept(#H81, "SaukSuiattle", #H81,  "SaukSuiattle")
* insert MapConcept(#H82, "Skokomish", #H82,  "Skokomish")
* insert MapConcept(#H83, "Skykomish", #H83,  "Skykomish")
* insert MapConcept(#H84, "Snohomish", #H84,  "Snohomish")
* insert MapConcept(#H85, "Snoqualmie", #H85,  "Snoqualmie")
* insert MapConcept(#H86, "Squaxin Island", #H86,  "Squaxin Island")
* insert MapConcept(#H87, "Steilacoom", #H87,  "Steilacoom")
* insert MapConcept(#H88, "Stillaguamish", #H88,  "Stillaguamish")
* insert MapConcept(#H89, "Suquamish", #H89,  "Suquamish")
* insert MapConcept(#H90, "Swinomish", #H90,  "Swinomish")
* insert MapConcept(#H91, "Tulalip", #H91,  "Tulalip")
* insert MapConcept(#H92, "Upper Skagit", #H92,  "Upper Skagit")
* insert MapConcept(#H93, "Potter Valley Rancheria of Pomo Indians", #H93,  "Potter Valley Rancheria of Pomo Indians")
* insert MapConcept(#H94, "Redwood Valley Rancheria of Pomo Indians", #H94,  "Redwood Valley Rancheria of Pomo Indians")
* insert MapConcept(#H95, "Robinson Rancheria of Pomo Indians", #H95,  "Robinson Rancheria of Pomo Indians")
* insert MapConcept(#H96, "Upper Lake Band of Pomo Indians of Upper Lake Rancheria", #H96,  "Upper Lake Band of Pomo Indians of Upper Lake Rancheria")
* insert MapConcept(#H97, "Quapaw", #H97,  "Quapaw")
* insert MapConcept(#I01, "TIGUA", #I01,  "TIGUA")
* insert MapConcept(#J01, "Quinault", #J01,  "Quinault")
* insert MapConcept(#J05, "Rappahannock Indian Tribe", #J05,  "Rappahannock Indian Tribe")
* insert MapConcept(#J07, "RenoSparks", #J07,  "RenoSparks")
* insert MapConcept(#J14, "Round Valley", #J14,  "Round Valley")
* insert MapConcept(#J19, "Sac and Fox Tribe of the Mississippi in Iowa", #J19,  "Sac and Fox Tribe of the Mississippi in Iowa")
* insert MapConcept(#J20, "Sac and Fox Nation of Missouri in Kansas and Nebraska", #J20,  "Sac and Fox Nation of Missouri in Kansas and Nebraska")
* insert MapConcept(#J21, "Sac and Fox Nation\, Oklahoma", #J21,  "Sac and Fox Nation\, Oklahoma")
* insert MapConcept(#J22, "Sac and Fox", #J22,  "Sac and Fox")
* insert MapConcept(#J28, "Salinan", #J28,  "Salinan")
* insert MapConcept(#J31, "Salish", #J31,  "Salish")
* insert MapConcept(#J35, "Salish and Kootenai", #J35,  "Salish and Kootenai")
* insert MapConcept(#J36, "Pondre Band of Salish and Kootenai", #J36,  "Pondre Band of Salish and Kootenai")
* insert MapConcept(#J39, "Schaghticoke", #J39,  "Schaghticoke")
* insert MapConcept(#J47, "Big Cypress", #J47,  "Big Cypress")
* insert MapConcept(#J48, "Brighton", #J48,  "Brighton")
* insert MapConcept(#J49, "Florida Seminole", #J49,  "Florida Seminole")
* insert MapConcept(#J50, "Hollywood Seminole", #J50,  "Hollywood Seminole")
* insert MapConcept(#J51, "Oklahoma Seminole", #J51,  "Oklahoma Seminole")
* insert MapConcept(#J52, "Seminole", #J52,  "Seminole")
* insert MapConcept(#J53, "Dania Seminole", #J53,  "Dania Seminole")
* insert MapConcept(#J54, "Tampa Seminole", #J54,  "Tampa Seminole")
* insert MapConcept(#J58, "San Manual Band", #J58,  "San Manual Band")
* insert MapConcept(#J59, "Serrano", #J59,  "Serrano")
* insert MapConcept(#J62, "Shasta", #J62,  "Shasta")
* insert MapConcept(#J63, "Quartz Valley", #J63,  "Quartz Valley")
* insert MapConcept(#J66, "Absentee Shawnee Tribe of Indians of Oklahoma", #J66,  "Absentee Shawnee Tribe of Indians of Oklahoma")
* insert MapConcept(#J67, "Eastern Shawnee", #J67,  "Eastern Shawnee")
* insert MapConcept(#J68, "Shawnee", #J68,  "Shawnee")
* insert MapConcept(#J69, "Piqua Sept of Ohio Shawnee", #J69,  "Piqua Sept of Ohio Shawnee")
* insert MapConcept(#J74, "Shinnecock", #J74,  "Shinnecock")
* insert MapConcept(#J78, "Shoalwater Bay", #J78,  "Shoalwater Bay")
* insert MapConcept(#J81, "Duckwater", #J81,  "Duckwater")
* insert MapConcept(#J82, "Ely", #J82,  "Ely")
* insert MapConcept(#J83, "Goshute", #J83,  "Goshute")
* insert MapConcept(#J84, "PANAMINT", #J84,  "PANAMINT")
* insert MapConcept(#J85, "Shoshone", #J85,  "Shoshone")
* insert MapConcept(#J86, "Skull Valley Band of Goshute Indians", #J86,  "Skull Valley Band of Goshute Indians")
* insert MapConcept(#J88, "Death Valley TimbiSha Shoshone", #J88,  "Death Valley TimbiSha Shoshone")
* insert MapConcept(#J89, "Northwestern Band of Shoshoni Nation of Utah", #J89,  "Northwestern Band of Shoshoni Nation of Utah")
* insert MapConcept(#J90, "Wind River Shoshone", #J90,  "Wind River Shoshone")
* insert MapConcept(#J91, "Yomba", #J91,  "Yomba")
* insert MapConcept(#J93, "TeMoak Tribes of Western Shoshone Indians", #J93,  "TeMoak Tribes of Western Shoshone Indians")
* insert MapConcept(#J94, "Battle Mountain", #J94,  "Battle Mountain")
* insert MapConcept(#J95, "Elko", #J95,  "Elko")
* insert MapConcept(#J96, "South Fork", #J96,  "South Fork")
* insert MapConcept(#J97, "Wells Band", #J97,  "Wells Band")
* insert MapConcept(#J98, "Ruby Valley", #J98,  "Ruby Valley")
* insert MapConcept(#J99, "Odgers Ranch", #J99,  "Odgers Ranch")
* insert MapConcept(#K01, "Duck Valley", #K01,  "Duck Valley")
* insert MapConcept(#K02, "Fallen", #K02,  "Fallen")
* insert MapConcept(#K03, "Fort McDermitt Paiute and Shoshone Tribes", #K03,  "Fort McDermitt Paiute and Shoshone Tribes")
* insert MapConcept(#K04, "Shoshone Paiute", #K04,  "Shoshone Paiute")
* insert MapConcept(#K05, "Bishop", #K05,  "Bishop")
* insert MapConcept(#K06, "Lone Pine", #K06,  "Lone Pine")
* insert MapConcept(#K07, "Big Pine Band of Owens Valley PaiuteShoshone", #K07,  "Big Pine Band of Owens Valley PaiuteShoshone")
* insert MapConcept(#K10, "Confederated Tribes of the Siletz Reservation", #K10,  "Confederated Tribes of the Siletz Reservation")
* insert MapConcept(#K16, "Blackfoot Sioux", #K16,  "Blackfoot Sioux")
* insert MapConcept(#K17, "Brule Sioux", #K17,  "Brule Sioux")
* insert MapConcept(#K18, "Cheyenne River Sioux", #K18,  "Cheyenne River Sioux")
* insert MapConcept(#K19, "Crow Creek Sioux", #K19,  "Crow Creek Sioux")
* insert MapConcept(#K20, "Dakota Sioux", #K20,  "Dakota Sioux")
* insert MapConcept(#K21, "Flandreau Santee Sioux", #K21,  "Flandreau Santee Sioux")
* insert MapConcept(#K22, "Fort Peck Sioux", #K22,  "Fort Peck Sioux")
* insert MapConcept(#K23, "Lake Traverse Sioux", #K23,  "Lake Traverse Sioux")
* insert MapConcept(#K24, "Lower Brule Sioux", #K24,  "Lower Brule Sioux")
* insert MapConcept(#K25, "Lower Sioux Indian Community of Minnesota Mdewakanton Sioux", #K25,  "Lower Sioux Indian Community of Minnesota Mdewakanton Sioux")
* insert MapConcept(#K26, "Mdewakanton Sioux", #K26,  "Mdewakanton Sioux")
* insert MapConcept(#K27, "Miniconjou", #K27,  "Miniconjou")
* insert MapConcept(#K28, "Oglala Sioux", #K28,  "Oglala Sioux")
* insert MapConcept(#K29, "Pine Ridge Sioux", #K29,  "Pine Ridge Sioux")
* insert MapConcept(#K30, "Pipestone Sioux", #K30,  "Pipestone Sioux")
* insert MapConcept(#K31, "Prairie Island Sioux", #K31,  "Prairie Island Sioux")
* insert MapConcept(#K32, "Shakopee Mdewakanton Sioux Community", #K32,  "Shakopee Mdewakanton Sioux Community")
* insert MapConcept(#K33, "Rosebud Sioux", #K33,  "Rosebud Sioux")
* insert MapConcept(#K34, "Sans Arc Sioux", #K34,  "Sans Arc Sioux")
* insert MapConcept(#K35, "Santee Sioux of Nebraska", #K35,  "Santee Sioux of Nebraska")
* insert MapConcept(#K36, "Sioux", #K36,  "Sioux")
* insert MapConcept(#K37, "SissetonWahpeton", #K37,  "SissetonWahpeton")
* insert MapConcept(#K38, "Sisseton Sioux", #K38,  "Sisseton Sioux")
* insert MapConcept(#K39, "Spirit Lake Sioux", #K39,  "Spirit Lake Sioux")
* insert MapConcept(#K40, "Standing Rock Sioux", #K40,  "Standing Rock Sioux")
* insert MapConcept(#K41, "Teton Sioux", #K41,  "Teton Sioux")
* insert MapConcept(#K42, "Two Kettle Sioux", #K42,  "Two Kettle Sioux")
* insert MapConcept(#K43, "Upper Sioux", #K43,  "Upper Sioux")
* insert MapConcept(#K44, "Wahpekute Sioux", #K44,  "Wahpekute Sioux")
* insert MapConcept(#K45, "Wahpeton Sioux", #K45,  "Wahpeton Sioux")
* insert MapConcept(#K46, "Wazhaza Sioux", #K46,  "Wazhaza Sioux")
* insert MapConcept(#K47, "Yankton Sioux", #K47,  "Yankton Sioux")
* insert MapConcept(#K48, "Yanktonai Sioux", #K48,  "Yanktonai Sioux")
* insert MapConcept(#K54, "Siuslaw", #K54,  "Siuslaw")
* insert MapConcept(#K59, "Spokane", #K59,  "Spokane")
* insert MapConcept(#K67, "StockbridgeMunsee Community of Mohican Indians of Wisconsin", #K67,  "StockbridgeMunsee Community of Mohican Indians of Wisconsin")
* insert MapConcept(#K77, "AkChin", #K77,  "AkChin")
* insert MapConcept(#K78, "Gila Bend", #K78,  "Gila Bend")
* insert MapConcept(#K79, "San Xavier", #K79,  "San Xavier")
* insert MapConcept(#K80, "Sells", #K80,  "Sells")
* insert MapConcept(#K81, "Tohono O'Odham", #K81,  "Tohono O'Odham")
* insert MapConcept(#K87, "Tolowa", #K87,  "Tolowa")
* insert MapConcept(#K88, "Big Lagoon Rancheria", #K88,  "Big Lagoon Rancheria")
* insert MapConcept(#K89, "Elk Valley Rancheria", #K89,  "Elk Valley Rancheria")
* insert MapConcept(#K90, "Tonkawa", #K90,  "Tonkawa")
* insert MapConcept(#K93, "CherAe Indian Community of Trinidad Rancheria", #K93,  "CherAe Indian Community of Trinidad Rancheria")
* insert MapConcept(#K94, "Tygh", #K94,  "Tygh")
* insert MapConcept(#K97, "Umatilla", #K97,  "Umatilla")
* insert MapConcept(#L01, "Cow Creek Umpqua", #L01,  "Cow Creek Umpqua")
* insert MapConcept(#L02, "Umpqua", #L02,  "Umpqua")
* insert MapConcept(#L06, "Alien Canyon", #L06,  "Alien Canyon")
* insert MapConcept(#L07, "Uintah Ute", #L07,  "Uintah Ute")
* insert MapConcept(#L08, "Ute Mountain", #L08,  "Ute Mountain")
* insert MapConcept(#L09, "Ute", #L09,  "Ute")
* insert MapConcept(#L10, "Southern Ute", #L10,  "Southern Ute")
* insert MapConcept(#L15, "Wailaki", #L15,  "Wailaki")
* insert MapConcept(#L19, "WallaWalla", #L19,  "WallaWalla")
* insert MapConcept(#L22, "Gay Head Wampanoag", #L22,  "Gay Head Wampanoag")
* insert MapConcept(#L23, "Mashpee Wampanoag", #L23,  "Mashpee Wampanoag")
* insert MapConcept(#L24, "Wampanoag", #L24,  "Wampanoag")
* insert MapConcept(#L25, "Seaconeke Wampanoag", #L25,  "Seaconeke Wampanoag")
* insert MapConcept(#L26, "Pocasset Wampanoag", #L26,  "Pocasset Wampanoag")
* insert MapConcept(#L28, "Warm Springs", #L28,  "Warm Springs")
* insert MapConcept(#L34, "Wascopum", #L34,  "Wascopum")
* insert MapConcept(#L38, "Alpine", #L38,  "Alpine")
* insert MapConcept(#L39, "Carson Colony", #L39,  "Carson Colony")
* insert MapConcept(#L40, "Dresslerville Colony", #L40,  "Dresslerville Colony")
* insert MapConcept(#L41, "Washoe", #L41,  "Washoe")
* insert MapConcept(#L42, "Stewart Community", #L42,  "Stewart Community")
* insert MapConcept(#L43, "Woodsfords Community", #L43,  "Woodsfords Community")
* insert MapConcept(#L47, "Wichita", #L47,  "Wichita")
* insert MapConcept(#L48, "Keechi", #L48,  "Keechi")
* insert MapConcept(#L49, "Waco", #L49,  "Waco")
* insert MapConcept(#L50, "Tawakonie", #L50,  "Tawakonie")
* insert MapConcept(#L52, "Wind River", #L52,  "Wind River")
* insert MapConcept(#L55, "HoChunk Nation of Wisconsin", #L55,  "HoChunk Nation of Wisconsin")
* insert MapConcept(#L56, "Nebraska Winnebago", #L56,  "Nebraska Winnebago")
* insert MapConcept(#L57, "Winnebago", #L57,  "Winnebago")
* insert MapConcept(#L66, "Wintun", #L66,  "Wintun")
* insert MapConcept(#L67, "Cachil Dehe Band of Wintun Indians of the Colusa Rancheria", #L67,  "Cachil Dehe Band of Wintun Indians of the Colusa Rancheria")
* insert MapConcept(#L68, "Cortina Indian Rancheria of Wintun Indians", #L68,  "Cortina Indian Rancheria of Wintun Indians")
* insert MapConcept(#L69, "Rumsey Indian Rancheria of Wintun Indians", #L69,  "Rumsey Indian Rancheria of Wintun Indians")
* insert MapConcept(#L71, "Grindstone Indian Rancheria of WintunWailaki Indians", #L71,  "Grindstone Indian Rancheria of WintunWailaki Indians")
* insert MapConcept(#L72, "Table Bluff", #L72,  "Table Bluff")
* insert MapConcept(#L73, "Wiyot", #L73,  "Wiyot")
* insert MapConcept(#L74, "Blue Lake Rancheria", #L74,  "Blue Lake Rancheria")
* insert MapConcept(#L79, "Yakama", #L79,  "Yakama")
* insert MapConcept(#L85, "Yakama Cowlitz", #L85,  "Yakama Cowlitz")
* insert MapConcept(#L91, "Barrio Libre", #L91,  "Barrio Libre")
* insert MapConcept(#L92, "Pascua Yaqui", #L92,  "Pascua Yaqui")
* insert MapConcept(#L93, "Yaqui", #L93,  "Yaqui")
* insert MapConcept(#M01, "Yavapai Apache", #M01,  "Yavapai Apache")
* insert MapConcept(#M07, "Picayune Rancheria of Chukchansi Indians", #M07,  "Picayune Rancheria of Chukchansi Indians")
* insert MapConcept(#M08, "Tachi", #M08,  "Tachi")
* insert MapConcept(#M09, "Tule River", #M09,  "Tule River")
* insert MapConcept(#M10, "Yokuts", #M10,  "Yokuts")
* insert MapConcept(#M11, "Table Mountain Rancheria", #M11,  "Table Mountain Rancheria")
* insert MapConcept(#M16, "Yuchi", #M16,  "Yuchi")
* insert MapConcept(#M17, "Tia", #M17,  "Tia")
* insert MapConcept(#M18, "Wilono", #M18,  "Wilono")
* insert MapConcept(#M19, "Anstohini", #M19,  "Anstohini")
* insert MapConcept(#M22, "Cocopah Tribe of Arizona", #M22,  "Cocopah Tribe of Arizona")
* insert MapConcept(#M23, "Havasupai", #M23,  "Havasupai")
* insert MapConcept(#M24, "Hualapai", #M24,  "Hualapai")
* insert MapConcept(#M25, "Maricopa", #M25,  "Maricopa")
* insert MapConcept(#M26, "Fort Mojave Indian Tribe of Arizona", #M26,  "Fort Mojave Indian Tribe of Arizona")
* insert MapConcept(#M27, "Quechan", #M27,  "Quechan")
* insert MapConcept(#M28, "YavapaiPrescott Tribe of the Yavapai Reservation", #M28,  "YavapaiPrescott Tribe of the Yavapai Reservation")
* insert MapConcept(#M29, "YUMAN", #M29,  "YUMAN")
* insert MapConcept(#M34, "Resighini Rancheria", #M34,  "Resighini Rancheria")
* insert MapConcept(#M35, "Yurok", #M35,  "Yurok")
* insert MapConcept(#M36, "COAST YUROK", #M36,  "COAST YUROK")
* insert MapConcept(#M41, "American Indian", #M41,  "American Indian")
* insert MapConcept(#M42, "Tribal Response\, NEC", #M42,  "Tribal Response\, NEC")
* insert MapConcept(#M43, "KUTENAI INDIAN", #M43,  "KUTENAI INDIAN")
* insert MapConcept(#M44, "Alaska Indian", #M44,  "Alaska Indian")
* insert MapConcept(#M47, "Alaska Native", #M47,  "Alaska Native")
* insert MapConcept(#M48, "Other Alaskan\, NEC", #M48,  "Other Alaskan\, NEC")
* insert MapConcept(#M52, "Ahtna", #M52,  "Ahtna")
* insert MapConcept(#M53, "Alaskan Athabascan", #M53,  "Alaskan Athabascan")
* insert MapConcept(#M54, "Alatna Village", #M54,  "Alatna Village")
* insert MapConcept(#M55, "Alexander", #M55,  "Alexander")
* insert MapConcept(#M56, "Allakaket Village", #M56,  "Allakaket Village")
* insert MapConcept(#M57, "Alanvik", #M57,  "Alanvik")
* insert MapConcept(#M58, "Anvik Village", #M58,  "Anvik Village")
* insert MapConcept(#M59, "Arctic Village", #M59,  "Arctic Village")
* insert MapConcept(#M60, "Beaver Village", #M60,  "Beaver Village")
* insert MapConcept(#M61, "Birch Crcek Village", #M61,  "Birch Crcek Village")
* insert MapConcept(#M62, "Native Village of Cantwell", #M62,  "Native Village of Cantwell")
* insert MapConcept(#M63, "Chalkyitsik Village", #M63,  "Chalkyitsik Village")
* insert MapConcept(#M64, "Chickaloon Native Village", #M64,  "Chickaloon Native Village")
* insert MapConcept(#M65, "Native Village of Chistochina", #M65,  "Native Village of Chistochina")
* insert MapConcept(#M66, "Native Village of Chitina", #M66,  "Native Village of Chitina")
* insert MapConcept(#M67, "Circle Native Community", #M67,  "Circle Native Community")
* insert MapConcept(#M68, "COOK INLET", #M68,  "COOK INLET")
* insert MapConcept(#M69, "COPPER CENTER", #M69,  "COPPER CENTER")
* insert MapConcept(#M70, "Copper River", #M70,  "Copper River")
* insert MapConcept(#M71, "Village of Dot Lake", #M71,  "Village of Dot Lake")
* insert MapConcept(#M72, "Doyon", #M72,  "Doyon")
* insert MapConcept(#M73, "Native Village of Eagle", #M73,  "Native Village of Eagle")
* insert MapConcept(#M74, "Ekiutna Native Village", #M74,  "Ekiutna Native Village")
* insert MapConcept(#M75, "Evansville Village", #M75,  "Evansville Village")
* insert MapConcept(#M76, "Native Village of Fort Yukon", #M76,  "Native Village of Fort Yukon")
* insert MapConcept(#M77, "Native Village of Gakona", #M77,  "Native Village of Gakona")
* insert MapConcept(#M78, "Galena Village", #M78,  "Galena Village")
* insert MapConcept(#M79, "Organized Village of Grayling", #M79,  "Organized Village of Grayling")
* insert MapConcept(#M80, "Gulkana Village", #M80,  "Gulkana Village")
* insert MapConcept(#M81, "Healy Lake Village", #M81,  "Healy Lake Village")
* insert MapConcept(#M82, "Holy Cross Village", #M82,  "Holy Cross Village")
* insert MapConcept(#M83, "Hughes Village", #M83,  "Hughes Village")
* insert MapConcept(#M84, "Huslia Village", #M84,  "Huslia Village")
* insert MapConcept(#M85, "Village of Iliamna", #M85,  "Village of Iliamna")
* insert MapConcept(#M86, "Village ofKaltag", #M86,  "Village ofKaltag")
* insert MapConcept(#M87, "Native Village of Kluti Kaah", #M87,  "Native Village of Kluti Kaah")
* insert MapConcept(#M88, "Knik Tribe", #M88,  "Knik Tribe")
* insert MapConcept(#M89, "Koyukuk Native Village", #M89,  "Koyukuk Native Village")
* insert MapConcept(#M90, "Lake Minchumina", #M90,  "Lake Minchumina")
* insert MapConcept(#M91, "Lime Village", #M91,  "Lime Village")
* insert MapConcept(#M92, "McGrath Native Village", #M92,  "McGrath Native Village")
* insert MapConcept(#M93, "Manley Hot Springs Village", #M93,  "Manley Hot Springs Village")
* insert MapConcept(#M94, "Mentasta Traditional Council", #M94,  "Mentasta Traditional Council")
* insert MapConcept(#M95, "Native Village of Minto", #M95,  "Native Village of Minto")
* insert MapConcept(#M96, "Nenana Native Association", #M96,  "Nenana Native Association")
* insert MapConcept(#M97, "Nikolai Village", #M97,  "Nikolai Village")
* insert MapConcept(#M98, "Ninilchik Village Traditional Council", #M98,  "Ninilchik Village Traditional Council")
* insert MapConcept(#M99, "Nondalton Village", #M99,  "Nondalton Village")
* insert MapConcept(#N01, "Northway Village", #N01,  "Northway Village")
* insert MapConcept(#N02, "Nulato Village", #N02,  "Nulato Village")
* insert MapConcept(#N03, "Pedro Bay Village", #N03,  "Pedro Bay Village")
* insert MapConcept(#N04, "Rampart Village", #N04,  "Rampart Village")
* insert MapConcept(#N05, "Native Village of Ruby", #N05,  "Native Village of Ruby")
* insert MapConcept(#N06, "Village of Salamatoff", #N06,  "Village of Salamatoff")
* insert MapConcept(#N07, "Seldovia Village Tribe", #N07,  "Seldovia Village Tribe")
* insert MapConcept(#N08, "Slana", #N08,  "Slana")
* insert MapConcept(#N09, "Shageluk Native Village", #N09,  "Shageluk Native Village")
* insert MapConcept(#N10, "Native Village of Stevens", #N10,  "Native Village of Stevens")
* insert MapConcept(#N11, "Village of Stony River", #N11,  "Village of Stony River")
* insert MapConcept(#N12, "Takotna Village", #N12,  "Takotna Village")
* insert MapConcept(#N13, "Native Village of Tanacross", #N13,  "Native Village of Tanacross")
* insert MapConcept(#N14, "Tanaina", #N14,  "Tanaina")
* insert MapConcept(#N15, "Native Village of Tanana", #N15,  "Native Village of Tanana")
* insert MapConcept(#N16, "Tanana Chiefs", #N16,  "Tanana Chiefs")
* insert MapConcept(#N17, "Native Village of Tazlina", #N17,  "Native Village of Tazlina")
* insert MapConcept(#N18, "Telida Village", #N18,  "Telida Village")
* insert MapConcept(#N19, "Native Village of Tetlin", #N19,  "Native Village of Tetlin")
* insert MapConcept(#N20, "Tok", #N20,  "Tok")
* insert MapConcept(#N21, "Native Village of Tyonek", #N21,  "Native Village of Tyonek")
* insert MapConcept(#N22, "Village of Venetie", #N22,  "Village of Venetie")
* insert MapConcept(#N23, "Wiseman", #N23,  "Wiseman")
* insert MapConcept(#N24, "Kenaitze Indian Tribe", #N24,  "Kenaitze Indian Tribe")
* insert MapConcept(#N27, "TLINGIT-HAIDA", #N27,  "TLINGIT-HAIDA")
* insert MapConcept(#N28, "Angoon Community Association", #N28,  "Angoon Community Association")
* insert MapConcept(#N29, "Central Council of the Tlingit and Haida Indian Tribes", #N29,  "Central Council of the Tlingit and Haida Indian Tribes")
* insert MapConcept(#N30, "Chilkat Indian Village", #N30,  "Chilkat Indian Village")
* insert MapConcept(#N31, "Chilkoot Indian Association", #N31,  "Chilkoot Indian Association")
* insert MapConcept(#N32, "Craig Community Association", #N32,  "Craig Community Association")
* insert MapConcept(#N33, "Douglas Indian Association", #N33,  "Douglas Indian Association")
* insert MapConcept(#N34, "Haida", #N34,  "Haida")
* insert MapConcept(#N35, "Hoonah Indian Association", #N35,  "Hoonah Indian Association")
* insert MapConcept(#N36, "Hydaburg Cooperative Association", #N36,  "Hydaburg Cooperative Association")
* insert MapConcept(#N37, "Organized Village of Kake", #N37,  "Organized Village of Kake")
* insert MapConcept(#N38, "Organized Village of Kasaan", #N38,  "Organized Village of Kasaan")
* insert MapConcept(#N40, "Ketchikan Indian Corporation", #N40,  "Ketchikan Indian Corporation")
* insert MapConcept(#N41, "Klawock Cooperative Association", #N41,  "Klawock Cooperative Association")
* insert MapConcept(#N43, "Pelican", #N43,  "Pelican")
* insert MapConcept(#N44, "Petersburg Indian Association", #N44,  "Petersburg Indian Association")
* insert MapConcept(#N45, "Organized Village of Saxman", #N45,  "Organized Village of Saxman")
* insert MapConcept(#N46, "Sitka Tribe of Alaska", #N46,  "Sitka Tribe of Alaska")
* insert MapConcept(#N47, "Tenakee Springs", #N47,  "Tenakee Springs")
* insert MapConcept(#N48, "Tlingit", #N48,  "Tlingit")
* insert MapConcept(#N49, "Wrangell Cooperative Association", #N49,  "Wrangell Cooperative Association")
* insert MapConcept(#N50, "Yakutat Tlingit Tribe", #N50,  "Yakutat Tlingit Tribe")
* insert MapConcept(#N51, "Juneau", #N51,  "Juneau")
* insert MapConcept(#N56, "Metlakatia Indian Community\, Annette Island Reserve", #N56,  "Metlakatia Indian Community\, Annette Island Reserve")
* insert MapConcept(#N57, "Tsimshian", #N57,  "Tsimshian")
* insert MapConcept(#N59, "Sealaska", #N59,  "Sealaska")
* insert MapConcept(#N60, "Sealaska Corporation", #N60,  "Sealaska Corporation")
* insert MapConcept(#N64, "Southeast Alaska", #N64,  "Southeast Alaska")
* insert MapConcept(#N65, "Skagway Village", #N65,  "Skagway Village")
* insert MapConcept(#N67, "American Eskimo", #N67,  "American Eskimo")
* insert MapConcept(#N68, "Eskimo", #N68,  "Eskimo")
* insert MapConcept(#N69, "Greenland Eskimo", #N69,  "Greenland Eskimo")
* insert MapConcept(#N75, "Inuit", #N75,  "Inuit")
* insert MapConcept(#N78, "INUPIAT ESKIMO", #N78,  "INUPIAT ESKIMO")
* insert MapConcept(#N79, "Native Village of Ambler", #N79,  "Native Village of Ambler")
* insert MapConcept(#N80, "Anaktuvuk", #N80,  "Anaktuvuk")
* insert MapConcept(#N81, "Village of Anaktuvuk Pass", #N81,  "Village of Anaktuvuk Pass")
* insert MapConcept(#N82, "Inupiat Community of the Arctic Slope", #N82,  "Inupiat Community of the Arctic Slope")
* insert MapConcept(#N83, "Arctic Slope Corporation", #N83,  "Arctic Slope Corporation")
* insert MapConcept(#N84, "Atqasuk Village", #N84,  "Atqasuk Village")
* insert MapConcept(#N85, "Native Village of Barrow hilipiat Traditional Government", #N85,  "Native Village of Barrow hilipiat Traditional Government")
* insert MapConcept(#N86, "Bering Straits Inupiat", #N86,  "Bering Straits Inupiat")
* insert MapConcept(#N87, "Native Village of Brevig Mission", #N87,  "Native Village of Brevig Mission")
* insert MapConcept(#N88, "Native Village ofBuckland", #N88,  "Native Village ofBuckland")
* insert MapConcept(#N89, "Chinik Eskimo Community", #N89,  "Chinik Eskimo Community")
* insert MapConcept(#N90, "Native Village of Council", #N90,  "Native Village of Council")
* insert MapConcept(#N91, "Native Village of Deering", #N91,  "Native Village of Deering")
* insert MapConcept(#N92, "Native Village of Elim", #N92,  "Native Village of Elim")
* insert MapConcept(#N93, "GOLOVIN", #N93,  "GOLOVIN")
* insert MapConcept(#N94, "Native Village of Diomede", #N94,  "Native Village of Diomede")
* insert MapConcept(#N95, "Inupiaq", #N95,  "Inupiaq")
* insert MapConcept(#N96, "Inupiat", #N96,  "Inupiat")
* insert MapConcept(#N97, "Kaktovik Village", #N97,  "Kaktovik Village")
* insert MapConcept(#N98, "Kawerak", #N98,  "Kawerak")
* insert MapConcept(#N99, "Native Village of Kiana", #N99,  "Native Village of Kiana")
* insert MapConcept(#P01, "Native Village of Kivalina", #P01,  "Native Village of Kivalina")
* insert MapConcept(#P02, "Native Village of Kobuk", #P02,  "Native Village of Kobuk")
* insert MapConcept(#P03, "Native Village of Kotzebue", #P03,  "Native Village of Kotzebue")
* insert MapConcept(#P04, "Native Village of Koyuk", #P04,  "Native Village of Koyuk")
* insert MapConcept(#P05, "Kwiguk", #P05,  "Kwiguk")
* insert MapConcept(#P06, "Mauneluk Inupiat", #P06,  "Mauneluk Inupiat")
* insert MapConcept(#P07, "Nana Inupiat", #P07,  "Nana Inupiat")
* insert MapConcept(#P08, "Native Village of Noatak", #P08,  "Native Village of Noatak")
* insert MapConcept(#P09, "Nome Eskimo Community", #P09,  "Nome Eskimo Community")
* insert MapConcept(#P10, "Noorvik Native Community", #P10,  "Noorvik Native Community")
* insert MapConcept(#P11, "Native Village of Nuiqsut", #P11,  "Native Village of Nuiqsut")
* insert MapConcept(#P12, "Native Village of Point Hope", #P12,  "Native Village of Point Hope")
* insert MapConcept(#P13, "Native Village of Point Lay", #P13,  "Native Village of Point Lay")
* insert MapConcept(#P14, "Native Village of Selawik", #P14,  "Native Village of Selawik")
* insert MapConcept(#P15, "Native Village of Shaktoolik", #P15,  "Native Village of Shaktoolik")
* insert MapConcept(#P16, "Native Village of Shishmaref", #P16,  "Native Village of Shishmaref")
* insert MapConcept(#P17, "Native Village of Shungnak", #P17,  "Native Village of Shungnak")
* insert MapConcept(#P18, "Village of Solomon", #P18,  "Village of Solomon")
* insert MapConcept(#P19, "Native Village of Teller", #P19,  "Native Village of Teller")
* insert MapConcept(#P20, "Native Village of Unalakleet", #P20,  "Native Village of Unalakleet")
* insert MapConcept(#P21, "Village of Wainwright", #P21,  "Village of Wainwright")
* insert MapConcept(#P22, "Village of Wales", #P22,  "Village of Wales")
* insert MapConcept(#P23, "Village of White Mountain", #P23,  "Village of White Mountain")
* insert MapConcept(#P24, "White Mountain Inupiat", #P24,  "White Mountain Inupiat")
* insert MapConcept(#P25, "Native Village of Mary's Igloo", #P25,  "Native Village of Mary's Igloo")
* insert MapConcept(#P26, "King Island Native Community", #P26,  "King Island Native Community")
* insert MapConcept(#P29, "SIBERIAN ESKIMO", #P29,  "SIBERIAN ESKIMO")
* insert MapConcept(#P30, "Native Village of Gambell", #P30,  "Native Village of Gambell")
* insert MapConcept(#P31, "Native Village of Savoonga", #P31,  "Native Village of Savoonga")
* insert MapConcept(#P32, "Siberian Yupik", #P32,  "Siberian Yupik")
* insert MapConcept(#P36, "Chevak Native Village", #P36,  "Chevak Native Village")
* insert MapConcept(#P37, "Native Village of Mekoryuk", #P37,  "Native Village of Mekoryuk")
* insert MapConcept(#P38, "Akiachak Native Community", #P38,  "Akiachak Native Community")
* insert MapConcept(#P39, "Akiak Native Community", #P39,  "Akiak Native Community")
* insert MapConcept(#P40, "Village of Alakanuk", #P40,  "Village of Alakanuk")
* insert MapConcept(#P41, "Native Village of Aleknagik", #P41,  "Native Village of Aleknagik")
* insert MapConcept(#P42, "Yupiit of Andreafski", #P42,  "Yupiit of Andreafski")
* insert MapConcept(#P43, "Village of Aniak", #P43,  "Village of Aniak")
* insert MapConcept(#P44, "Village of Atmautluak", #P44,  "Village of Atmautluak")
* insert MapConcept(#P45, "Orutsararmuit Native Village", #P45,  "Orutsararmuit Native Village")
* insert MapConcept(#P46, "Village of Bill Moore's Slough", #P46,  "Village of Bill Moore's Slough")
* insert MapConcept(#P47, "Bristol Bay", #P47,  "Bristol Bay")
* insert MapConcept(#P48, "Calista", #P48,  "Calista")
* insert MapConcept(#P49, "Village of Chefomak", #P49,  "Village of Chefomak")
* insert MapConcept(#P50, "Native Village of Hamilton", #P50,  "Native Village of Hamilton")
* insert MapConcept(#P51, "Native Village of Chuathbaluk", #P51,  "Native Village of Chuathbaluk")
* insert MapConcept(#P52, "Village of Clark's Point", #P52,  "Village of Clark's Point")
* insert MapConcept(#P53, "Village of Crooked Creek", #P53,  "Village of Crooked Creek")
* insert MapConcept(#P54, "Curyung Tribal Council", #P54,  "Curyung Tribal Council")
* insert MapConcept(#P55, "Native Village of Eek", #P55,  "Native Village of Eek")
* insert MapConcept(#P56, "Native Village of Ekuk", #P56,  "Native Village of Ekuk")
* insert MapConcept(#P57, "Ekwok Village", #P57,  "Ekwok Village")
* insert MapConcept(#P58, "Emmonak Village", #P58,  "Emmonak Village")
* insert MapConcept(#P59, "Native Village of Goodnews Bay", #P59,  "Native Village of Goodnews Bay")
* insert MapConcept(#P60, "Native Village of Hooper Bay", #P60,  "Native Village of Hooper Bay")
* insert MapConcept(#P61, "Iqurmuit Traditional Council", #P61,  "Iqurmuit Traditional Council")
* insert MapConcept(#P62, "Village of Kalskag", #P62,  "Village of Kalskag")
* insert MapConcept(#P63, "Native Village of Kasigluk", #P63,  "Native Village of Kasigluk")
* insert MapConcept(#P64, "Native Village of Kipnuk", #P64,  "Native Village of Kipnuk")
* insert MapConcept(#P65, "New Koliganek Village Council", #P65,  "New Koliganek Village Council")
* insert MapConcept(#P66, "Native Village of Kongiganak", #P66,  "Native Village of Kongiganak")
* insert MapConcept(#P67, "Village of Kotlik", #P67,  "Village of Kotlik")
* insert MapConcept(#P68, "Organized Village of Kwethluk", #P68,  "Organized Village of Kwethluk")
* insert MapConcept(#P69, "Native Village of Kwigillingok", #P69,  "Native Village of Kwigillingok")
* insert MapConcept(#P70, "Levelock Village", #P70,  "Levelock Village")
* insert MapConcept(#P71, "Village of Lower Kalskag", #P71,  "Village of Lower Kalskag")
* insert MapConcept(#P72, "Manokotak Village", #P72,  "Manokotak Village")
* insert MapConcept(#P73, "Native Village of Marshall", #P73,  "Native Village of Marshall")
* insert MapConcept(#P74, "Village of Ohogamiut", #P74,  "Village of Ohogamiut")
* insert MapConcept(#P75, "Asa'carsarmiut Tribe", #P75,  "Asa'carsarmiut Tribe")
* insert MapConcept(#P76, "Naknek Native Village", #P76,  "Naknek Native Village")
* insert MapConcept(#P77, "Native Village of Napaimute", #P77,  "Native Village of Napaimute")
* insert MapConcept(#P78, "Native Village of Napakiak", #P78,  "Native Village of Napakiak")
* insert MapConcept(#P79, "Native Village of Napaskiak", #P79,  "Native Village of Napaskiak")
* insert MapConcept(#P80, "Newhalen Village", #P80,  "Newhalen Village")
* insert MapConcept(#P81, "New Stuyahok Village", #P81,  "New Stuyahok Village")
* insert MapConcept(#P82, "Newtek Village", #P82,  "Newtek Village")
* insert MapConcept(#P83, "Native Village of Nightmute", #P83,  "Native Village of Nightmute")
* insert MapConcept(#P84, "Native Village of Nunapitchuk", #P84,  "Native Village of Nunapitchuk")
* insert MapConcept(#P85, "Oscarville Traditional Village", #P85,  "Oscarville Traditional Village")
* insert MapConcept(#P86, "Pilot Station Traditional Village", #P86,  "Pilot Station Traditional Village")
* insert MapConcept(#P87, "Native Village of Pitkas Point", #P87,  "Native Village of Pitkas Point")
* insert MapConcept(#P88, "Platinum Traditional Village", #P88,  "Platinum Traditional Village")
* insert MapConcept(#P89, "Portage Creek Village", #P89,  "Portage Creek Village")
* insert MapConcept(#P90, "Native Village of Kwinhagak", #P90,  "Native Village of Kwinhagak")
* insert MapConcept(#P91, "Village of Red Devil", #P91,  "Village of Red Devil")
* insert MapConcept(#P92, "Native Village of Saint Michael", #P92,  "Native Village of Saint Michael")
* insert MapConcept(#P93, "Native Village of Scammon Bay", #P93,  "Native Village of Scammon Bay")
* insert MapConcept(#P94, "Native Village of Sheldon's Point", #P94,  "Native Village of Sheldon's Point")
* insert MapConcept(#P95, "Village of Sleetmute", #P95,  "Village of Sleetmute")
* insert MapConcept(#P96, "Stebbins Community Association", #P96,  "Stebbins Community Association")
* insert MapConcept(#P97, "Traditional Village ofTogiak", #P97,  "Traditional Village ofTogiak")
* insert MapConcept(#P98, "Native Village of Toksook Bay", #P98,  "Native Village of Toksook Bay")
* insert MapConcept(#P99, "Tuluksak Native Community", #P99,  "Tuluksak Native Community")
* insert MapConcept(#Q01, "MOUNTAIN VILLAGE", #Q01,  "MOUNTAIN VILLAGE")
* insert MapConcept(#R01, "Native Village of Tuntutuliak", #R01,  "Native Village of Tuntutuliak")
* insert MapConcept(#R02, "Native Village of Tununak", #R02,  "Native Village of Tununak")
* insert MapConcept(#R03, "Twin Hills Village", #R03,  "Twin Hills Village")
* insert MapConcept(#R04, "Yup'ik", #R04,  "Yup'ik")
* insert MapConcept(#R05, "Yup'ik Eskimo", #R05,  "Yup'ik Eskimo")
* insert MapConcept(#R06, "Native Village of Georgetown", #R06,  "Native Village of Georgetown")
* insert MapConcept(#R07, "Algaaciq Native Village", #R07,  "Algaaciq Native Village")
* insert MapConcept(#R08, "Umkumiute Native Village", #R08,  "Umkumiute Native Village")
* insert MapConcept(#R09, "Chuloonawick Native Village", #R09,  "Chuloonawick Native Village")
* insert MapConcept(#R11, "Aleut", #R11,  "Aleut")
* insert MapConcept(#R15, "ALUTIIQ ALEUT", #R15,  "ALUTIIQ ALEUT")
* insert MapConcept(#R16, "Alutiiq", #R16,  "Alutiiq")
* insert MapConcept(#R17, "Village of Afognak", #R17,  "Village of Afognak")
* insert MapConcept(#R18, "Native Village of Tatitlek", #R18,  "Native Village of Tatitlek")
* insert MapConcept(#R19, "Ugashik Village", #R19,  "Ugashik Village")
* insert MapConcept(#R28, "Bristol Bay Aleut", #R28,  "Bristol Bay Aleut")
* insert MapConcept(#R29, "Native Village of Chignik", #R29,  "Native Village of Chignik")
* insert MapConcept(#R30, "Chignik Lake Village", #R30,  "Chignik Lake Village")
* insert MapConcept(#R31, "Egegik Village", #R31,  "Egegik Village")
* insert MapConcept(#R32, "Igiugig Village", #R32,  "Igiugig Village")
* insert MapConcept(#R33, "Ivanoff Bay Village", #R33,  "Ivanoff Bay Village")
* insert MapConcept(#R34, "King Salmon", #R34,  "King Salmon")
* insert MapConcept(#R35, "Kokhanok Village", #R35,  "Kokhanok Village")
* insert MapConcept(#R36, "Native Village of Perryville", #R36,  "Native Village of Perryville")
* insert MapConcept(#R37, "Native Village of Pilot Point", #R37,  "Native Village of Pilot Point")
* insert MapConcept(#R38, "Native Village of Port Heiden", #R38,  "Native Village of Port Heiden")
* insert MapConcept(#R43, "Native Village of Chanega", #R43,  "Native Village of Chanega")
* insert MapConcept(#R44, "Chugach Aleut", #R44,  "Chugach Aleut")
* insert MapConcept(#R45, "Chugach Corporation", #R45,  "Chugach Corporation")
* insert MapConcept(#R46, "Native Village of Nanwaiek", #R46,  "Native Village of Nanwaiek")
* insert MapConcept(#R47, "Native Village of Port Graham", #R47,  "Native Village of Port Graham")
* insert MapConcept(#R51, "Eyak", #R51,  "Eyak")
* insert MapConcept(#R55, "Native Village of Akhiok", #R55,  "Native Village of Akhiok")
* insert MapConcept(#R56, "Agdaagux Tribe of King Cove", #R56,  "Agdaagux Tribe of King Cove")
* insert MapConcept(#R57, "Native Village of Karluk", #R57,  "Native Village of Karluk")
* insert MapConcept(#R58, "Native Village of Kanatak", #R58,  "Native Village of Kanatak")
* insert MapConcept(#R59, "Kodiak", #R59,  "Kodiak")
* insert MapConcept(#R60, "Koniag Aleut", #R60,  "Koniag Aleut")
* insert MapConcept(#R61, "Native Village of Larsen Bay", #R61,  "Native Village of Larsen Bay")
* insert MapConcept(#R62, "Village of Old Harbor", #R62,  "Village of Old Harbor")
* insert MapConcept(#R63, "Native Village of Ouzinkie", #R63,  "Native Village of Ouzinkie")
* insert MapConcept(#R64, "Native Village of Port Lions", #R64,  "Native Village of Port Lions")
* insert MapConcept(#R65, "Lesnoi Village", #R65,  "Lesnoi Village")
* insert MapConcept(#R67, "Sugpiaq", #R67,  "Sugpiaq")
* insert MapConcept(#R71, "Suqpigaq", #R71,  "Suqpigaq")
* insert MapConcept(#R74, "UNANGAN ALEUT", #R74,  "UNANGAN ALEUT")
* insert MapConcept(#R75, "Native Village of Akutan", #R75,  "Native Village of Akutan")
* insert MapConcept(#R76, "Aleut Corporation", #R76,  "Aleut Corporation")
* insert MapConcept(#R77, "Aleutian", #R77,  "Aleutian")
* insert MapConcept(#R78, "Aleutian Islander", #R78,  "Aleutian Islander")
* insert MapConcept(#R79, "Native Village of Atka", #R79,  "Native Village of Atka")
* insert MapConcept(#R80, "Native Village of Belkofski", #R80,  "Native Village of Belkofski")
* insert MapConcept(#R81, "Native Village of Chignikn Lagoon", #R81,  "Native Village of Chignikn Lagoon")
* insert MapConcept(#R82, "King Cove", #R82,  "King Cove")
* insert MapConcept(#R83, "Native Village of False Pass", #R83,  "Native Village of False Pass")
* insert MapConcept(#R84, "Native Village of Nelson Lagoon", #R84,  "Native Village of Nelson Lagoon")
* insert MapConcept(#R85, "Native Village of Nikolski", #R85,  "Native Village of Nikolski")
* insert MapConcept(#R86, "Pauloff Harbor Village", #R86,  "Pauloff Harbor Village")
* insert MapConcept(#R87, "Qagan Toyagungin Tribe of Sand Point Village", #R87,  "Qagan Toyagungin Tribe of Sand Point Village")
* insert MapConcept(#R88, "Qawalangin Tribe of Unalaska", #R88,  "Qawalangin Tribe of Unalaska")
* insert MapConcept(#R89, "Saint George", #R89,  "Saint George")
* insert MapConcept(#R90, "Saint Paul", #R90,  "Saint Paul")
* insert MapConcept(#R91, "Sand Point", #R91,  "Sand Point")
* insert MapConcept(#R92, "South Naknek Village", #R92,  "South Naknek Village")
* insert MapConcept(#R93, "Unangan", #R93,  "Unangan")
* insert MapConcept(#R94, "Unalaska", #R94,  "Unalaska")
* insert MapConcept(#R95, "Native Village of Unga", #R95,  "Native Village of Unga")
* insert MapConcept(#R96, "Kaguyak Village", #R96,  "Kaguyak Village")


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/conceptmaps/CM_RaceMissingValueReason.fsh

Instance: ConceptMapRaceMissingValueReasonVitalRecords
InstanceOf: ConceptMap
Title: "Race Missing Value Reason Vital Records"
// Id: vrdr-race-missing-value-reason-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(RaceMissingValueReason, ValueSetRaceMissingValueReasonVitalRecords)
* insert AddGroup($IJE,$v3-NullFlavor)
* insert MapConcept( #S, "Sought\, but unknown",#ASKU, "asked but unknown" )
* insert MapConcept(  #C, "Not obtainable", #UNK,  "unknown")
* insert AddGroup($IJE, $v3-ActReason)
* insert MapConcept( #R, "Refused", #PREFUS,  "patient refuse") //PREFUS "patient refuse"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/conceptmaps/CM_RaceRecode40.fsh

Instance: ConceptMapRaceRecode40VitalRecords
InstanceOf: ConceptMap
Title: "Race Recode40 Vital Records"
// Id: vrdr-race-recode40-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(RaceRecode40, ValueSetRaceRecode40VitalRecords)
* insert AddGroup($IJE,[[Canonical(CodeSystemRaceRecode40VitalRecords)]])
* insert MapConcept(#01, "White", #01,  "White")
* insert MapConcept(#02, "Black", #02,  "Black")
* insert MapConcept(#03, "American Indian or Alaskan Native (AIAN\)", #03,  "American Indian or Alaskan Native (AIAN\)")
* insert MapConcept(#04, "Asian Indian", #04,  "Asian Indian")
* insert MapConcept(#05, "Chinese", #05,  "Chinese")
* insert MapConcept(#06, "Filipino", #06,  "Filipino")
* insert MapConcept(#07, "Japanese", #07,  "Japanese")
* insert MapConcept(#08, "Korean", #08,  "Korean")
* insert MapConcept(#09, "Vietnamese", #09,  "Vietnamese")
* insert MapConcept(#10, "Other or Multiple Asian", #10,  "Other or Multiple Asian")
* insert MapConcept(#11, "Hawaiian", #11,  "Hawaiian")
* insert MapConcept(#12, "Guamanian", #12,  "Guamanian")
* insert MapConcept(#13, "Samoan", #13,  "Samoan")
* insert MapConcept(#14, "Other or Multiple Pacific Islander", #14,  "Other or Multiple Pacific Islander")
* insert MapConcept(#15, "Black and White", #15,  "Black and White")
* insert MapConcept(#16, "Black and AIAN", #16,  "Black and AIAN")
* insert MapConcept(#17, "Black and Asian", #17,  "Black and Asian")
* insert MapConcept(#18, "AIAN and NHOPI", #18,  "AIAN and NHOPI")
* insert MapConcept(#19, "NHOPI and White", #19,  "NHOPI and White")
* insert MapConcept(#20, "AIAN and Asian", #20,  "AIAN and Asian")
* insert MapConcept(#21, "AIAN and NHOPI-2", #21,  "AIAN and NHOPI 2")
* insert MapConcept(#22, "Asian and White", #22,  "Asian and White")
* insert MapConcept(#23, "Asian and NHOPI", #23,  "Asian and NHOPI")
* insert MapConcept(#24, "NHOPI and White-2", #24,  "NHOPI and White 2")
* insert MapConcept(#25, "Black\, AIAN and White", #25,  "Black\, AIAN and White")
* insert MapConcept(#26, "Black\, AIAN and Asian", #26,  "Black\, AIAN and Asian")
* insert MapConcept(#27, "Black\, AIAN and NHOPI", #27,  "Black\, AIAN and NHOPI")
* insert MapConcept(#28, "Black\, Asian and White", #28,  "Black\, Asian and White")
* insert MapConcept(#29, "Black\, Asian and NHOPI", #29,  "Black\, Asian and NHOPI")
* insert MapConcept(#30, "Black\, NHOPI and White", #30,  "Black\, NHOPI and White")
* insert MapConcept(#31, "AIAN\, Asian and White", #31,  "AIAN\, Asian and White")
* insert MapConcept(#32, "AIAN\, NHOPI and White", #32,  "AIAN\, NHOPI and White")
* insert MapConcept(#33, "AIAN\, Asian and NHOPI", #33,  "AIAN\, Asian and NHOPI")
* insert MapConcept(#34, "Asian\, NHOPI and White", #34,  "Asian\, NHOPI and White")
* insert MapConcept(#35, "Black\, AIAN\, Asian and White", #35,  "Black\, AIAN\, Asian and White")
* insert MapConcept(#36, "Black\, AIAN\, Asian and NHOPI", #36,  "Black\, AIAN\, Asian and NHOPI")
* insert MapConcept(#37, "Black\, AIAN\, NHOPI and White", #37,  "Black\, AIAN\, NHOPI and White")
* insert MapConcept(#38, "Black\, Asian\, NHOPI and White", #38,  "Black\, Asian\, NHOPI and White")
* insert MapConcept(#39, "AIAN\, Asian\, NHOPI and White", #39,  "AIAN\, Asian\, NHOPI and White")
* insert MapConcept(#40, "Black\, AIAN\, Asian\, NHOPI and White", #40,  "Black\, AIAN\, Asian\, NHOPI and White")
* insert MapConcept(#99, "Unknown and Other Race", #99,  "Unknown and Other Race")


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/conceptmaps/CM_UnitsOfAge.fsh

Instance: ConceptMapUnitsOfAgeVitalRecords
InstanceOf: ConceptMap
Title: "Units Of Age Vital Records"
// Id: vrdr-units-of-age-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(UnitsOfAge, ValueSetUnitsOfAgeVitalRecords)
* insert AddGroup($IJE,$UCUM)
* insert MapConcept( #1,  "Years",#a, "Years")
* insert MapConcept( #2,  "Months",#mo, "Months")
* insert MapConcept( #4,  "Days",#d, "Days")
* insert MapConcept( #5,  "Hours",#h, "Hours")
* insert MapConcept( #6,  "Minutes",#min, "Minutes")
* insert AddGroup($IJE,$v3-NullFlavor)
* insert MapConcept( #9,  "Unknown - not classifiable",#UNK, "Unknown")

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/conceptmaps/CM_YesNoUnknownNotApplicable.fsh


Instance: ConceptMapYesNoUnknownNotApplicableVitalRecords
InstanceOf: ConceptMap
Title: "Yes No Unknown Not Applicable Vital Records"
 // Id: vrdr-yes-no-unknown-not-applicable-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(YesNoUnknownNotApplicable, ValueSetYesNoUnknownNotApplicableVitalRecords)
* insert AddGroup($IJE,$v2-0136)
* insert MapConcept( #N,  "No",#N, "No")
* insert MapConcept( #Y,  "Yes",#Y, "Yes")
* insert AddGroup($IJE,$v3-NullFlavor)
* insert MapConcept( #X,  "Not Applicable",#NA, "not applicable")
* insert MapConcept( #U,  "Unknown",#UNK, "unknown")

Instance: ConceptMapYesNoUnknownVitalRecords
InstanceOf: ConceptMap
Title: "Yes No Unknown Vital Records"
 // Id: vrdr-yes-no-unknown-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(YesNoUnknown, ValueSetYesNoUnknownVitalRecords)
* insert AddGroup($IJE,$v2-0136)
* insert MapConcept( #N,  "No",#N, "No")
* insert MapConcept( #Y,  "Yes",#Y, "Yes")
* insert AddGroup($IJE,$v3-NullFlavor)
* insert MapConcept( #U,  "Unknown",#UNK, "unknown")


Instance: ConceptMapYesNoNotApplicableVitalRecords
InstanceOf: ConceptMap
Title: "Yes No Not Applicable Vital Records"
 // Id: vrdr-not-applicable-cm
Usage: #definition
* experimental = false
* insert ConceptMapIntro(NotApplicable, ValueSetYesNoNotApplicableVitalRecords)
* insert AddGroup($IJE,$v2-0136)
* insert MapConcept( #N,  "No",#N, "No")
* insert MapConcept( #Y,  "Yes",#Y, "Yes")
* insert AddGroup($IJE,$v3-NullFlavor)
* insert MapConcept( #X,  "Not Applicable",#NA, "Not Applicable")


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/conceptmaps/DEF_ConceptMapRuleSets.fsh

RuleSet: ConceptMapIntro(name, vsname)
* name = "{name}"
* title = "{name} Concept Map"
* status = #draft
* contact.telecom.system = #url
* contact.telecom.value = "http://hl7.org/fhir"
* description = "A mapping between NCHS IJE and FHIR {name} Value Sets"
* useContext.code = http://terminology.hl7.org/CodeSystem/usage-context-type#focus
* useContext.valueCodeableConcept.text = "for IJE to FHIR alignment"
* jurisdiction = urn:iso:std:iso:3166#US
* purpose = "To help implementers map from IJE to FHIR Vocabulary"
* sourceCanonical = Canonical(ValueSetIJEVitalRecords)
* targetCanonical = Canonical({vsname})

RuleSet: MapConcept(code, display, targetcode, targetdisplay)
* group[=].element[+]
  * code = {code}
  * display = {display}
  * target
    * code = {targetcode}
    * display = {targetdisplay}
    * equivalence = #equivalent

RuleSet: AddGroup(source, target)
* group[+].target = {target}
* group[=].source = {source}

RuleSet: UnmatchedMapConcept(code, display, targetcode, targetdisplay)
* group[=].element[+]
  * code = {code}
  * display = {display}
  * target
    * equivalence = #unmatched
    * comment = {code}

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/extensions/ExtensionLocalJurisdictionIDVitalRecords.fsh

Extension: ExtensionLocationJurisdictionIdVitalRecords
Id: Extension-jurisdiction-id-vr
Title: "Location Jurisdiction Id Vital Records"
Description: "Location Jurisdiction Id (Extension) supports jurisdictions with a designator that isn't a USPS two-letter code"
* insert ExtensionContextResource(Address.state)
* url 1..1
* value[x] 1..1
* value[x] only string
* valueString from ValueSetJurisdictionVitalRecords  (required)

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/extensions/ExtensionPartialDateTimeVitalRecords.fsh

Extension: ExtensionPartialDateTimeVitalRecords
Id: Extension-partial-date-time-vr
Title: "Partial Date Time Vital Records"
Description: "Provides values of a partial dateTime for cases beyond what FHIR dateTime can support directly."
* insert ExtensionContextResource(dateTime)
* insert ExtensionContextResource(date)  //This supports birthDate, where we have a dateTime extension for birthTime...
* . ^short = "Partial Date Time"
* . ^definition = "Provides a partial date time."
* extension contains
    year 1..1 and
    month 1..1 and
    day 1..1 and
    time 1..1
* insert YearMonthDay
* extension[time] 
  * ^short = "Date Time"
  * ^definition = "The time portion of the partial date."
  * value[x] 1..1
  * value[x] only time
  * valueTime.extension contains
     $DataAbsentReason named dataabsent 0..1
  * valueTime.extension[dataabsent].value[x] from ValueSetPartialDateDataAbsentReasonVitalRecords (required)
    * ^short = "If unknown (all 9's), use code 'unknown'. If blank (all ' '), use code 'temp-unknown'"

Extension: ExtensionPartialDateVitalRecords
Id: Extension-partial-date-vr
Title: "Partial Date Vital Records"
Description: "Provides values of a partial date for cases beyond what FHIR date can support directly."
* insert boilerplate
* insert ExtensionContextResource(date)
* . ^short = "Partial Date"
* . ^definition = "Provides a partial date."
* extension contains
    year 1..1 and
    month 1..1 and
    day 1..1 
* insert YearMonthDay


// Extension: ExtensionDatePartAbsentReasonVitalRecords
// Id: ExtensionDatePartAbsentReasonVitalRecords
// Title: "Extension - Partial Date Absent Reason Vital Records"
// Description: "Provides values of a partial date (Extension).
// If a component is missing, it is assumed unknown.
// * This extension SHOULD NOT be used when the value can be expressed as a [date](https://build.fhir.org/datatypes.html#date), specifically YYYY, YYYY-MM or YYYY-MM-DD).
// * This extension SHOULD NOT be used to express that the date in its entirety is missing/unknown.  In this case a simple dataAbsent reason extension should be used on the date field.
// * This extension SHOULD be used to express missing components of date including XXXX-XX-DD, YYYY-XX-DD, XXXX-MM-DD.
// * If a component is missing, the interpretation should be equivalent to it being present, with a data absent reason of 'unknown'. If the data absent reason is other than 'unknown', the component may be included wih a data absent reason.
// When the known components of the date can be expressed as a valid date, the value SHALL be present.  So, for example 2022-XX-12, the date value should be \"2022\"."
// * insert boilerplate
// * insert ExtensionContextResource(date)
// * . ^short = "Partial Date"
// * . ^definition = "Provides a partial date."
// * extension contains
//     year 0..1 and
//     month 0..1 and
//     day 0..1 
// * insert YearMonthDay

// RuleSet: ExtensionContext(path)
// * ^context[+].type = #element
// * ^context[=].expression = "{path}"

RuleSet: YearMonthDay
* extension[year] 
  * ^short = "Date year (0-9998)"
  * ^definition = "The year portion (YYYY) of the partial date (0-9998)."
  * value[x] 1..1
  * value[x] only unsignedInt
  * valueUnsignedInt ^minValueInteger = 0
  * valueUnsignedInt ^maxValueInteger = 9998
  * valueUnsignedInt.extension contains
     $DataAbsentReason named dataabsent 0..1
  * valueUnsignedInt.extension[dataabsent].value[x] from ValueSetPartialDateDataAbsentReasonVitalRecords (required)
    * ^short = "If unknown (all 9's), use code 'unknown'. If blank (all ' '), use code 'temp-unknown'"
* extension[month] 
  * ^short = "Date month (1-12)"
  * ^definition = "The month portion (MM) of the partial date (1-12)."
  * value[x] 1..1
  * value[x] only unsignedInt
  * valueUnsignedInt ^minValueInteger = 1
  * valueUnsignedInt ^maxValueInteger = 12
  * valueUnsignedInt.extension contains
     $DataAbsentReason named dataabsent 0..1
  * valueUnsignedInt.extension[dataabsent].value[x] from ValueSetPartialDateDataAbsentReasonVitalRecords (required)
    * ^short = "If unknown (all 9's), use code 'unknown'. If blank (all ' '), use code 'temp-unknown'"
* extension[day] 
  * ^short = "Date day (1-31)"
  * ^definition = "The day portion (DD) of the partial date (1-31)."
  * value[x] 1..1
  * value[x] only unsignedInt
  * valueUnsignedInt ^minValueInteger = 1
  * valueUnsignedInt ^maxValueInteger = 31
  * valueUnsignedInt.extension contains
     $DataAbsentReason named dataabsent 0..1
  * valueUnsignedInt.extension[dataabsent].value[x] from ValueSetPartialDateDataAbsentReasonVitalRecords (required)
    * ^short = "If unknown (all 9's), use code 'unknown'. If blank (all ' '), use code 'temp-unknown'"


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/extensions/ExtensionPatientFetalDeathVitalRecords.fsh

Extension: ExtensionPatientFetalDeathVitalRecords
Context: "Patient.deceased.ofType(boolean)"
Id: Extension-patient-fetal-death-vr
Title: "Patient Fetal Death Vital Records"
Description: "The fetal death status of the patient."
* ^experimental = false
* . 0..1
  * ^short = "fetal death indicator"
  * ^definition = "If present and true, indicates that the status of the patient is fetal death."
* value[x] 1..1
* value[x] only boolean


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/extensions/ExtensionRecordIdentifiersVitalRecords.fsh

RuleSet: AuxiliaryStateIdentifier
* insert ExtensionContextResource(Meta)
* insert ExtensionContextResource(Identifier)
* value[x] 1..1
* value[x] only string
* valueString ^maxLength = 12

Extension: AuxiliaryStateIdentifier1VitalRecords
Id: AuxiliaryStateIdentifier1
Title: "Auxiliary State Identifier1 Vital Records"
Description: "The first of two twelve character strings associated by the submitted jurisdiction with a specific certificate number. Identifier1 can be provided separately, or with Identifier2"
* insert AuxiliaryStateIdentifier

Extension: AuxiliaryStateIdentifier2VitalRecords
Id: AuxiliaryStateIdentifier2
Title: "Auxiliary State Identifier2 Vital Records"
Description: "The second of two twelve character strings associated by the submitted jurisdiction with a specific certificate number. Identifier2 can be provided separately, or with Identifier1."
* insert AuxiliaryStateIdentifier

Extension: CertificateNumberVitalRecords
Id: CertificateNumber
Title: "Certificate Number"
Description: "Certificate number. Six digit number.  Leading zeroes are optional."
* insert ExtensionContextResource(Identifier)
* value[x] 1..1
* value[x] only string
* valueString ^maxLength = 6

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/extensions/ExtensionRelatedpersonBirthplaceVitalRecords.fsh

Extension: ExtensionRelatedpersonBirthplaceVitalRecords
Id: Extension-relatedperson-birthplace-vr
Title: "RelatedPerson Birth Place Vital Records"
Description: "The registered place of birth for the related person. A system may use the address.text if it doesn't store the birthPlace address in discrete elements.
This extension is the same as the [patient birthPlace extension](https://hl7.org/fhir/extensions/StructureDefinition-patient-birthPlace.html), but with relatedPerson context."
* value[x] only Address
  * ^short = "The registered place of birth of the related person."
* valueAddress 0..1
  * ^short = "The registered place of birth of the related person."
* insert ExtensionContextResource(RelatedPerson)

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/extensions/ExtensionReportedParentAgeAtDeliveryVitalRecords.fsh

Extension: ExtensionReportedParentAgeAtDeliveryVitalRecords
Id: Extension-reported-parent-age-at-delivery-vr
Title: "Reported Parent Age At Delivery Vital Records"
Description: "This Extension profile represents the reported age of the parent (either the gestational mother or the natural father - as defined by NCHS) at the delivery time of the newborn or fetus. 
A required code indicates whether the mother or father's age is provided. It can optionally contain a reference to the reporter (**US Core Patient Profile** or **US Core RelatedPerson Profile**)."
* ^experimental = false
* insert ExtensionContextResource(Patient)
* . 0..*
  * ^short = "Extension - Reported Parent Age at Delivery - Vital Records"
  * ^definition = "This Extension profile represents the reported age of the parent at the delivery time of the newborn or fetus. 
  A required code indicates whether the mother or father's age is provided. 
  It can optionally contain a reference to the reporter (US Core Patient Profile or US Core RelatedPerson Profile)."
* extension ..3
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "url"
  * ^slicing.rules = #open
* extension contains
    reportedAge 1..1 and
    motherOrFather 1..1 and
    reporter 0..1
* extension[reportedAge] only Extension
  * ^short = "Age of the parent at the time of delivery reported by another person."
  * ^definition = "Age of the parent at the time of delivery reported by another person."
  * value[x] 1..1
  * value[x] only Quantity
  * valueQuantity ^short = "Reported age in years"
    * code = $UCUM#a (exactly)
      * ^short = "year"
    * value 1..1  
* extension[motherOrFather] ^short = "Mother or Father"
* extension[motherOrFather] only Extension 
  * insert MotherOrFather
* extension[reporter] only Extension
  * ^short = "Reference to the person who reported the parent's age."
  * ^definition = "Reference to the person who reported the parent's age."
  * value[x] 1..1
  * value[x] only Reference(USCorePatientProfile or USCoreRelatedPersonProfile)

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/extensions/ExtensionWithinCityLimitsIndicatorVitalRecords.fsh

//changed to reference VRCL vs instead of phinvads vs
Extension: ExtensionWithinCityLimitsIndicatorVitalRecords
Id: Extension-within-city-limits-indicator-vr
Title: "Within City Limits Indicator Vital Records"
Description: "Used to indicate whether or not an address is within city limits. The content of the component shall be a value from the value set Yes No Unknown."
* insert ExtensionContextResource(Address)
* value[x] 1..1
* value[x] only Coding
* value[x] from ValueSetYesNoUnknownVitalRecords (required)
  * ^short = "Value set used to respond to any question that can be answered Yes, No, or Unknown."
  * ^binding.description = "Yes No Unknown (YNU)"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/extensions/SD_AddressExtensions.fsh

Extension: ExtensionCityCodeVitalRecords
Id: CityCode
Title: "City Code Vital Records"
Description: "City expressed as a numeric value.  As of the date of publication, in accordance with the NCHS Instruction Manual Part 8, Vital Records Geographic Classification, 2014 (https://www.cdc.gov/nchs/data/dvs/IMP8_2014.pdf). (Extension)"
* insert ExtensionContextResource(Address.city)
* value[x] 1..1
* value[x] only positiveInt
//* value[x] obeys digitalCityCode
* value[x] ^maxLength = 5
//* value[x] ^constraint[1].requirements = "The allowable values for city code are detailed in the NCHS Instruction Manual Part 8, Vital Records Geographic Classification, 2014 (https://www.cdc.gov/nchs/data/dvs/IMP8_2014.pdf)."
//* value[x] only string
//* valueString from $PHVSCityPlacesNCHS (required)

Extension: ExtensionDistrictCodeVitalRecords
Id: DistrictCode
Title: "District Code Vital Records"
Description: "District expressed as a numeric value.  As of the date of publication, in accordance with the NCHS Instruction Manual Part 8, Vital Records Geographic Classification, 2014 (https://www.cdc.gov/nchs/data/dvs/IMP8_2014.pdf). (Extension)"
//* insert boilerplate
* insert ExtensionContextResource(Address.district)
* value[x] 1..1
* value[x] only positiveInt
//* value[x] obeys digitalCityCode
* value[x] ^maxLength = 5
//* value[x] ^constraint[1].requirements = "The allowable values for district code are detailed in the NCHS Instruction Manual Part 8, Vital Records Geographic Classification, 2014 (https://www.cdc.gov/nchs/data/dvs/IMP8_2014.pdf)."
//* value[x] only string
//* valueString from $PHVSDivisionVitalStatisticsCounty (required)



//Invariant: digitalCityCode
//Description: "The  code is a five digit positive integer value between 00000 and 99999 with leading zeroes included. The allowable values for city code are detailed in the NCHS Instruction Manual Part 8, Vital Records Geographic Classification, 2014 (https://www.cdc.gov/nchs/data/dvs/IMP8_2014.pdf)."
//Severity: #error
// NEED TO WRITE THE INVARIANT!!!!!!  DO WE NEED THIS INVARIANT????


Extension: ExtensionPreDirectionalVitalRecords
Id: PreDirectional
Title: "PreDirectional Vital Records"
Description: "PreDirectional component of address as [defined by USPS](https://pe.usps.com/cpim/ftp/pubs/pub28/pub28.pdf)"
* insert addressextension(10)
Extension: ExtensionStreetNameVitalRecords
Id: StreetName
Title: "StreetName Vital Records"
Description: "StreetName component of address as [defined by USPS](https://pe.usps.com/cpim/ftp/pubs/pub28/pub28.pdf)"
* insert addressextension(50)
Extension: ExtensionStreetNumberVitalRecords
Id: StreetNumber
Title: "StreetNumber Vital Records"
Description: "StreetNumber component of address as [defined by USPS](https://pe.usps.com/cpim/ftp/pubs/pub28/pub28.pdf)"
* insert addressextension(10)
Extension: ExtensionStreetDesignatorVitalRecords
Id: StreetDesignator
Title: "StreetDesignator Vital Records"
Description: "StreetDesignator component of address as [defined by USPS](https://pe.usps.com/cpim/ftp/pubs/pub28/pub28.pdf)"
* insert addressextension(10)
Extension: ExtensionPostDirectionalVitalRecords
Id: PostDirectional
Title: "PostDirectional Vital Records"
Description: "PostDirectional component of address as [defined by USPS](https://pe.usps.com/cpim/ftp/pubs/pub28/pub28.pdf)"
* insert addressextension(10)
Extension: ExtensionUnitOrAptNumberVitalRecords
Id: UnitOrAptNumber
Title: "UnitOrAptNumber Vital Records"
Description: "UnitOrAptNumber component of address as [defined by USPS](https://pe.usps.com/cpim/ftp/pubs/pub28/pub28.pdf)"
* insert addressextension(10)


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/extensions/SD_BypassEditFlag.fsh

Extension: ExtensionBypassEditFlagVitalRecords
Id: BypassEditFlag
Title: "BypassEditFlag Vital Records"
Description: "Extension to hold a codeable concept from one of several valuesets."
* insert boilerplate
* value[x] 1..1
* value[x] only CodeableConcept
* insert ExtensionContextResource(integer) //multipleBirth
* insert ExtensionContextResource(CodeableConcept) //education
* insert ExtensionContextResource(date) //birthDate
* insert ExtensionContextResource(Quantity) //bfdr

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/bundle-examples-of-identifier-extensions.fsh

Instance: bundle-examples-of-identifiers
InstanceOf: Bundle
Title: "Bundle - Example of Identifier Extensions"
Description: "Bundle - Example of Identifier Extensions"
Usage: #example
* type = #collection 
* identifier.system = Canonical(CodeSystemIJEVitalRecords)
* identifier
  * value = "2019NJ15075"
  * extension[CertificateNumber].valueString = "15075"
  * extension[AuxiliaryStateIdentifier1].valueString = "444455555"
  * extension[AuxiliaryStateIdentifier2].valueString = "444455555"
* timestamp = "2019-02-11T02:05:44.434Z"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/expansion-parameters-vr-common.fsh

Instance: expansion-parameters-vr-common
InstanceOf: Parameters
Title: "expansion-parameters-vr-common"
Description: "References US SNOMED CT version."
Usage: #definition
* parameter[+]
  * name = "system-version"
  * valueString = "http://snomed.info/sct|http://snomed.info/sct/731000124108"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/observation-education-level-vr-a-freeman.fsh

Instance: observation-education-level-vr-a-freeman
InstanceOf: ObservationEducationLevelVitalRecords
Title: "Observation - Education Level example [A Freeman]"
Description: "Example of Observation-education-level-vr profile (A Freeman)"
Usage: #example
* status = #final
* code = $loinc#80913-7 "Highest level of education [US Standard Certificate of Death]"
* subject = Reference(us-core-patient-vr-a-freeman) "Patient - A Freeman"
* effectiveDateTime = "2019-12-02"
* valueCodeableConcept = $HL7_EducationLevelCS#SEC "Some secondary or high school education"
  * text = "9th through 12th grade; no diploma"


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/observation-emerging-issues-vr-a-freeman.fsh

Instance: observation-emerging-issues-vr-a-freeman
InstanceOf: ObservationEmergingIssuesVitalRecords
Title: "Observation - EmergingIssues example [A Freeman]"
Description: "Example of Observation-emerging-issues-vr profile (A Freeman)"
Usage: #example
* subject = Reference(us-core-patient-vr-a-freeman)
* status = #final
* insert AddMetaProfile(ObservationEmergingIssuesVitalRecords)
* component[EmergingIssue1_1].valueString = "H"
* component[EmergingIssue1_2].valueString = "I"
* component[EmergingIssue8_1].valueString = "Hi 8_1"
* component[EmergingIssue20].valueString = "Hi 20_1"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/observation-partial-date-time.fsh

Instance: observation-partial-date-time-example
InstanceOf: Observation
Title: "Observation - Partial Date Time Extension example"
Usage: #example
Description: "Example of an Observation with Partial Date Time"
* subject.display = "A subject"
* effectiveDateTime = "2020-11-12T16:39:40-05:00"
* performer.display = "A Performer"
* code = $loinc#81956-5 "Date+time of death"
* valueDateTime = "2020-11"
  * extension[ExtensionPartialDateTimeVitalRecords]
    * extension[day]
      * valueUnsignedInt.extension[dataabsent].valueCode = #unknown
    * extension[month].valueUnsignedInt = 11
    * extension[year].valueUnsignedInt = 2020
    * extension[time].valueTime = "12:13:14"
    * extension[time]
      * valueTime.extension[dataabsent].valueCode = #unknown
* status = #final



---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/observation-race-and-ethnicity.fsh

Instance: observation-coded-race-and-ethnicity-vr-mother 
InstanceOf: ObservationCodedRaceAndEthnicityVitalRecords
Usage: #example
Title: "Observation - CodedRaceAndEthnicity example [Mother]"
Description: "Example of coded-race-and-ethnicity-vr profile (Mother)"
* code = CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother
* status = #final
* subject.display = "NCHS generated"
* component[FirstEditedCode].valueCodeableConcept = CodeSystemRaceCodeVitalRecords#101 "White"
* component[SecondEditedCode].valueCodeableConcept = CodeSystemRaceCodeVitalRecords#122 "Israeli"
* component[FirstAmericanIndianCode].valueCodeableConcept = CodeSystemRaceCodeVitalRecords#A31 "Arikara"
* component[RaceRecode40].valueCodeableConcept = CodeSystemRaceRecode40VitalRecords#20 "AIAN and Asian"
* component[HispanicCode].valueCodeableConcept = CodeSystemHispanicOriginVitalRecords#233 "Chilean"

Instance: observation-coded-race-and-ethnicity-vr-father 
InstanceOf: ObservationCodedRaceAndEthnicityVitalRecords
Usage: #example
Title: "Observation - CodedRaceAndEthnicity example [Father]"
Description: "Example of coded-race-and-ethnicity-vr profile (Father)"
* code = CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather
* status = #final
* subject.display = "NCHS generated"
* component[FirstEditedCode].valueCodeableConcept = CodeSystemRaceCodeVitalRecords#101 "White"
* component[SecondEditedCode].valueCodeableConcept = CodeSystemRaceCodeVitalRecords#122 "Israeli"
* component[FirstAmericanIndianCode].valueCodeableConcept = CodeSystemRaceCodeVitalRecords#A31 "Arikara"
* component[RaceRecode40].valueCodeableConcept = CodeSystemRaceRecode40VitalRecords#20 "AIAN and Asian"
* component[HispanicCode].valueCodeableConcept = CodeSystemHispanicOriginVitalRecords#233 "Chilean"


Instance: observation-input-race-and-ethnicity-vr-mother 
InstanceOf: ObservationInputRaceAndEthnicityVitalRecords
Usage: #example
Title: "Observation - InputRaceAndEthnicity example [Mother]"
Description: "Example of input-race-and-ethnicity-vr profile (Mother)"
* insert AddMetaProfile(InputRaceAndEthnicity)
* code = CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother
* status = #final
* subject.display = "NCHS generated"
* component[White].valueBoolean = true
* component[BlackOrAfricanAmerican].valueBoolean = false
* component[BlackOrAfricanAmerican].valueBoolean = false
* component[AmericanIndianOrAlaskanNative].valueBoolean = true
* component[AsianIndian].valueBoolean = false
* component[Chinese].valueBoolean = false
* component[Filipino].valueBoolean = false
* component[Japanese].valueBoolean = false
* component[Korean].valueBoolean = false
* component[Vietnamese].valueBoolean = false
* component[OtherAsian].valueBoolean = true
* component[NativeHawaiian].valueBoolean = false
* component[GuamanianOrChamorro].valueBoolean = false
* component[Samoan].valueBoolean = false
* component[OtherPacificIslander].valueBoolean = false
* component[OtherRace].valueBoolean = false
* component[FirstOtherAsianLiteral].valueString = "Malaysian"
* component[FirstAmericanIndianOrAlaskanNativeLiteral].valueString = "Arikara"
* component[HispanicMexican].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicCuban].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicPuertoRican].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicOther].valueCodeableConcept = $v2-0136#N "No"


Instance: observation-input-race-and-ethnicity-vr-father 
InstanceOf: ObservationInputRaceAndEthnicityVitalRecords
Usage: #example
Title: "Observation - InputRaceAndEthnicity example [Father]"
Description: "Example of input-race-and-ethnicity-vr profile (Father)"
* insert AddMetaProfile(InputRaceAndEthnicity)
* code = CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather
* status = #final
* subject.display = "NCHS generated"
* component[White].valueBoolean = true
* component[BlackOrAfricanAmerican].valueBoolean = false
* component[BlackOrAfricanAmerican].valueBoolean = false
* component[AmericanIndianOrAlaskanNative].valueBoolean = true
* component[AsianIndian].valueBoolean = false
* component[Chinese].valueBoolean = false
* component[Filipino].valueBoolean = false
* component[Japanese].valueBoolean = false
* component[Korean].valueBoolean = false
* component[Vietnamese].valueBoolean = false
* component[OtherAsian].valueBoolean = true
* component[NativeHawaiian].valueBoolean = false
* component[GuamanianOrChamorro].valueBoolean = false
* component[Samoan].valueBoolean = false
* component[OtherPacificIslander].valueBoolean = false
* component[OtherRace].valueBoolean = false
* component[FirstOtherAsianLiteral].valueString = "Malaysian"
* component[FirstAmericanIndianOrAlaskanNativeLiteral].valueString = "Arikara"
* component[HispanicMexican].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicCuban].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicPuertoRican].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicOther].valueCodeableConcept = $v2-0136#N "No"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/patient-child-babyg-quinn-w-edit.fsh

Instance: patient-child-vr-babyg-quinn-w-edit
InstanceOf: PatientChildVitalRecords
Title: "Patient - Child example [Baby G Quinn], with Edit Flag"
Description: "Example of Patient-child-vr profile (Baby G Quinn) with Edit Flag"
Usage: #example
* insert babyquinncommon
* birthDate = "2019-02-12"
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/patient-birthTime"
    * valueDateTime = "2019-02-12T13:00:00-07:00"
* multipleBirthInteger.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#1queriedCorrect "Queried, and Correct"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/patient-child-babyg-quinn.fsh

RuleSet: babyquinncommon
* extension[race]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
  * extension[text]
    * valueString = "White"
* extension[ethnicity]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
  * extension[text]
    * valueString = "Not Hispanic or Latino"
* extension[birthsex]
  * valueCode = #F
* extension[birthPlace]
  * valueAddress
    * city = "Salt Lake City"
    * district = "Salt Lake"
    * state = "UT"
* extension[parentReportedAgeAtDelivery]
  * extension[reportedAge]
    * valueQuantity = 34 'a'
  * extension[motherOrFather]
    * valueCodeableConcept = $v3-RoleCode#MTH "mother"
* identifier
  * use = #usual
  * type = $v2-0203#MR "Medical Record Number"
  * system = "http://hospital.smarthealthit.org"
  * value = "9932702"
// NOTE TODO: this was marked usual, but could be marked official?
* name[currentLegalName]
  * family = "Quinn"
  * given[0] = "Baby"
  * given[1] = "G"
* gender = #female
* multipleBirthInteger = 1
* deceasedBoolean = false 
//* deceasedBoolean = true  // test that the invariant works.. It Works!

Instance: patient-child-vr-babyg-quinn-common
InstanceOf: PatientChildVitalRecords
Title: "Patient - Child example [Baby G Quinn]"
Description: "Example of Patient-child-vr profile (Baby G Quinn) with Reported Parent Age at Delivery and full date and time of birth"
Usage: #example
* insert babyquinncommon
* birthDate = "2019-02-12"
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/patient-birthTime"
    * valueDateTime = "2019-02-12T13:00:00-07:00"

Instance: patient-child-vr-babyg-quinn-common-1
InstanceOf: PatientChildVitalRecords
Title: "Patient - Child example [Baby G Quinn] - no birth time"
Description: "Example of Patient-child-vr profile (Baby G Quinn) with Reported Parent Age at Delivery with date of birth but no time of birth.  
Both the birthTime and partialDateTime extensions are omitted."
Usage: #example
* insert babyquinncommon
* birthDate = "2019-02-12"

Instance: patient-child-vr-babyg-quinn-common-2
InstanceOf: PatientChildVitalRecords
Title: "Patient - Child example [Baby G Quinn] - partial birth date"
Description: "Example of Patient-child-vr profile (Baby G Quinn) with Reported Parent Age at Delivery with partial date of birth - 2nd of some month in 2019.
Both the birthTime extension and the value for the birthDate field are omitted."
Usage: #example
* insert babyquinncommon
* birthDate 
  * extension[partialDateTime]
    * extension[day].valueUnsignedInt = 02
    * extension[month].valueUnsignedInt.extension[dataabsent].valueCode = #unknown
    * extension[year].valueUnsignedInt = 2019
    * extension[time].valueTime.extension[dataabsent].valueCode = #unknown


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/patient-fetal-death-example.fsh

Instance: patient-fetal-death-example
InstanceOf: Patient
Title: "Patient - Fetal Death Extension example"
Usage: #example
Description: "Example of a Patient with a Fetal Death status"
* identifier
  * use = #usual
  * type = $v2-0203#MR "Medical Record Number"
  * system = "http://hospital.smarthealthit.org"
  * value = "9932702"
* name.family = "Jones"
* gender = #female
* birthDate = "2019-01-09"
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/patient-birthTime"
    * valueDateTime = "2019-01-09T18:23:00-07:00"
* deceasedBoolean = true
* deceasedBoolean
  * extension
    * url = Canonical(ExtensionPatientFetalDeathVitalRecords)
    * valueBoolean = true
* multipleBirthInteger = 3




---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/patient-mother-birth-date-part-absent.fsh

Instance: patient-mother-vr-birth-date-part-absent
InstanceOf: PatientMotherVitalRecords
Title: "Patient - Mother Date Part Absent Reason example"
Description: "Example of Patient-mother-vr profile with Date Part Absent Reason"
Usage: #example
//* extension[USCoreRaceExtension]
* extension[race]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2054-5 "Black or African American"
  * extension[text]
    * valueString = "Black or African America"
//* extension[USCoreEthnicityExtension]
* extension[ethnicity]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2135-2 "Hispanic or Latino"
  * extension[text]
    * valueString = "Hispanic or Latino"
* extension[birthsex]
  * valueCode = #F
* extension[birthPlace]
  * valueAddress.state = "PR"
* identifier
  * use = #usual
  * type = $v2-0203#MR "Medical Record Number"
  * system = "http://hospital.smarthealthit.org"
  * value = "9992702"
* name[0]
  * use = #official
  * family = "Lee"
  * given[0] = "Carmen"
  * given[+] = "Teresa"
* name[+]
  * use = #maiden
  * family = "Santos"
  * given[0] = "Carmen"
  * given[+] = "Teresa"
* gender = #female
* birthDate = "1986"
* address
  //* extension[withinCityLimitsIndicator].valueCoding = $v2-0532#N "No"
  * extension[withinCityLimitsIndicator].valueCoding = $v2-0136#N "No"
  * use = #home
  * line = "3670 Miller Road"
  * city = "Ann Arbor"
  * state = "MI"
  * postalCode = "48103"
  * country = "US"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/patient-mother-jada-ann-quinn.fsh

Instance: patient-mother-vr-jada-ann-quinn-common
InstanceOf: PatientMotherVitalRecords
Title: "Patient - Mother example [Jada Ann Quinn]"
Description: "Example of Patient-mother-vr profile (Jada Ann Quinn)"
Usage: #example
* extension[race]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#1002-5 "American Indian or Alaska Native"
  * extension[text]
    * valueString = "White, American Indian or Alaska Native"
* extension[ethnicity]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
  * extension[text]
    * valueString = "Not Hispanic or Latino"
* extension[birthsex]
  * valueCode = #F
* extension[birthPlace]
  * valueAddress.state = "UT"
    * extension[nationalReportingJurisdictionId].valueString = "UT"
* identifier[0]
  * use = #usual
  * type = $v2-0203#SS "Social Security number"
  * system = "http://hl7.org/fhir/sid/us-ssn"
  * value = "132225986"
* identifier[+]
  * use = #usual
  * type = $v2-0203#MR "Medical Record Number"
  * system = "http://hospital.smarthealthit.org"
  * value = "1032702"
* name[0]
  * use = #official
  * family = "Quinn"
  * given[0] = "Jada"
  * given[+] = "Ann"
* name[+]
  * use = #maiden
  * family = "King"
  * given[0] = "Jada"
  * given[+] = "Ann"
* telecom[0]
  * system = #phone
  * value = "1-(404)555-1212"
  * use = #home
* telecom[+]
  * system = #email
  * value = "jadaann.quinn@example.com"
* gender = #female
* birthDate = "1985-01-15"
* address[0]
  * extension[withinCityLimitsIndicator].valueCoding = $v2-0136#Y "Yes"
  // * extension[withinCityLimitsIndicator].valueCoding = $v2-0532#Y "Yes"
  * use = #home
  * line = "1875 West Morton Avenue"
  * city = "Salt Lake City"
  * district = "Salt Lake"
  * state = "UT"
  * postalCode = "84116"
  * country = "US"
* address[+]
  * use = #billing
  * line = "1848 South 1300 East"
  * city = "Salt Lake City"
  * state = "UT"
  * postalCode = "84401"
  * country = "US"


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/pracitioner-vital-records-janet-seito.fsh

Instance: practitioner-vr-janet-seito-common
InstanceOf: PractitionerVitalRecords
Title: "Practitioner - example [Janet Seito]"
Description: "Example of Practitioner-vr profile (Janet Seito) with address extensions"
Usage: #example
* identifier
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "223347044"
* name
  * family = "Janet"
  * given = "Seito"
  * suffix = "D.O."
// This seems like a mistake (not by us)
// * name
//   * family = "Jones"
//   * given = "Avery"
//   * suffix = "M.D."
* qualification.code = $sct#76231001 "Osteopath (occupation)"
* address.line = "5590 E Lockwood Drive SW, #1"
* address.city = "Queens"
* address.state = "NY"
* address.district = "Kings"
* address.city.extension[cityCode].valuePositiveInt = 01234
* address.district.extension[districtCode].valuePositiveInt  = 321
* address.country = "US"
* address.extension[unitnumber].valueString = "#1"
* address.extension[stnum].valueString = "5590"
* address.extension[stname].valueString = "Lockwood"
* address.extension[stdesig].valueString = "Drive"
* address.extension[predir].valueString = "E"
* address.extension[postdir].valueString = "SW"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/relatedperson-father-natural-james-brandon-quinn-common.fsh

Instance: relatedperson-father-natural-vr-james-brandon-quinn-common
InstanceOf: RelatedPersonFatherNaturalVitalRecords
Title: "RelatedPerson - Father Natural example [James Brandon Quinn]"
Description: "Example of Relatedperson-father-natural-vr profile (James Brandon Quinn)"
Usage: #example
// * extension[race]
//   * extension[ombCategory].valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
//   * extension[text].valueString = "White"
// * extension[ethnicity]
//   * extension[ombCategory].valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
//   * extension[text].valueString = "Not Hispanic or Latino"
* extension[birthPlace].valueAddress.state = "NY"
  // * url = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Extension-relatedperson-birthplace-vr"
* identifier
  * type = $v2-0203#SS
  * system = "http://hl7.org/fhir/sid/us-ssn"
  * value = "132225987"
* active = true
* patient = Reference(patient-child-vr-babyg-quinn-common)
* relationship = $v3-RoleCode#NFTH "natural father"
  * text = "Natural Father"
* name
  * use = #official
  * family = "Quinn"
  * given[0] = "James"
  * given[+] = "Brandon"
* gender = #male
* birthDate = "1972-11-24"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/relatedperson-father-tom-yan-lee-common.fsh

Instance: relatedperson-father-vr-tom-yan-lee-common
InstanceOf: RelatedPersonFatherVitalRecords
Title: "RelatedPerson - Father example [Tom Yan Lee]"
Description: "Example of Relatedperson-father-vr profile (Tom Yan Lee) with partial birthdate"
Usage: #example
// * extension[race]
//   * extension[ombCategory].valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
//   * extension[text].valueString = "White"
// * extension[ethnicity]
//   * extension[ombCategory].valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
//   * extension[text].valueString = "Not Hispanic or Latino"
* extension[birthPlace].valueAddress.state = "NY"
* active = true
* patient = Reference(patient-child-vr-babyg-quinn-common) "Patient - Child (Baby G Quinn)"
* relationship = $v3-RoleCode#NFTH "natural father"
  * text = "Natural Father"
* name
  * use = #official
  * family = "Lee"
  * given[0] = "Tom"
  * given[+] = "Yan"
* gender = #male
* birthDate = "1984"
  * extension[partialDate]
    * extension[year].valueUnsignedInt = 1984 
    * extension[month].valueUnsignedInt.extension[dataabsent].valueCode = http://terminology.hl7.org/CodeSystem/data-absent-reason#temp-unknown
    * extension[day].valueUnsignedInt.extension[dataabsent].valueCode = http://terminology.hl7.org/CodeSystem/data-absent-reason#temp-unknown

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/relatedperson-father-tony-lewis-common.fsh

Instance: relatedperson-father-vr-tony-lewis-common
InstanceOf: RelatedPersonFatherVitalRecords
Title: "RelatedPerson - Adoptive Father Deceased example [Tony Lewis]"
Description: "Example of RelatedPerson-father-vr profile (adoptive father) with Deceased indicator"
Usage: #example
// * extension[race]
//   * extension[ombCategory].valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
//   * extension[text].valueString = "White"
// * extension[ethnicity]
//   * extension[ombCategory].valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
//   * extension[text].valueString = "Not Hispanic or Latino"
* extension[birthPlace].valueAddress.state = "VT"
// * extension[deceased].valueDateTime = "2022-05-21"
* active = true
* patient = Reference(patient-child-vr-babyg-quinn-common) "Patient - Child (Baby G Quinn)"
* relationship = $v3-RoleCode#ADOPTF "adoptive father"
  * text = "Adoptive Father"
* name
  * use = #official
  * family = "Lewis"
  * given = "Tony"
* gender = #male
* birthDate = "1982-01-23"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/relatedperson-mother-carol-hoffer-common.fsh

Instance: relatedperson-mother-vr-carol-hoffer-common
InstanceOf: RelatedPersonMotherVitalRecords
Title: "RelatedPerson - Adoptive Mother example [Carol Hoffer]"
Description: "Example of RelatedPerson-mother-vr profile (adoptive mother)"
Usage: #example
* extension[0]
//   * extension[0]
//     * url = "ombCategory"
//     * valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
//   * extension[+]
//     * url = "ombCategory"
//     * valueCoding = urn:oid:2.16.840.1.113883.6.238#1002-5 "American Indian or Alaska Native"
//   * extension[+]
//     * url = "text"
//     * valueString = "White, American Indian or Alaska Native"
//   * url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
// * extension[+]
//   * extension[0]
//     * url = "ombCategory"
//     * valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
//   * extension[+]
//     * url = "text"
//     * valueString = "Not Hispanic or Latino"
//   * url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* active = true
* patient = Reference(patient-child-vr-babyg-quinn-common) "Patient - Child (Baby G Quinn)"
* relationship = $v3-RoleCode#ADOPTM "adoptive mother"
  * text = "Adoptive Mother"
* name
  * use = #official
  * family = "Hoffer"
  * given = "Carol"
* gender = #female
* birthDate = "1985-03-17"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/relatedperson-parent-stepmother.fsh

Instance: relatedperson-parent-vr-stepmother
InstanceOf: RelatedPersonParentVitalRecords
Title: "RelatedPerson - Stepmother example [Susan Grant]"
Description: "Example of RelatedPerson-parent-vr profile (stepmother)"
Usage: #example
// * extension[0]
//   * extension[0]
//     * url = "ombCategory"
//     * valueCoding = urn:oid:2.16.840.1.113883.6.238#2054-5 "Black or African American"
//   * extension[+]
//     * url = "text"
//     * valueString = "Black or African America"
//   * url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
// * extension[+]
//   * extension[0]
//     * url = "ombCategory"
//     * valueCoding = urn:oid:2.16.840.1.113883.6.238#2135-2 "Hispanic or Latino"
//   * extension[+]
//     * url = "text"
//     * valueString = "Hispanic or Latino"
//   * url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* extension[birthPlace].valueAddress
  * state = "New York"
  * city = "Brooklyn"
// * extension[deceased].valueBoolean = true 
* active = true
* patient = Reference(patient-child-vr-babyg-quinn-common) "Patient - Child (Baby G Quinn)"
* relationship = $v3-RoleCode#STPMTH "stepmother"
  * text = "Stepmother"
* name
  * use = #official
  * family = "Grant"
  * given = "Susan"
* gender = #female
* birthDate = "1985-03-15"



---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/us-core-patient-vr-a-freeman.fsh

Instance: us-core-patient-vr-a-freeman
InstanceOf: USCorePatientProfile
Title: "USCorePatient - Patient example [A Freeman]"
Description: "Example of US Core Patient profile (A Freeman)"
Usage: #example
* extension[0]
  * extension[0]
    * url = "detailed"
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2029-7 "Asian Indian"
  * extension[+]
    * url = "text"
    * valueString = "Asian Indian"
  * url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
* extension[+]
  * extension[0]
    * url = "ombCategory"
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
  * extension[+]
    * url = "text"
    * valueString = "Not Hispanic or Latino"
  * url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* identifier
  * use = #usual
  * type = $v2-0203#SS "Social Security number"
    * text = "Social Security number"
  * system = "http://hospital.smarthealthit.org"
  * value = "987054321"
* active = true
* name
  * family = "Freeman"
  * given[0] = "Alice"
  * given[+] = "J."
* gender = #female
* birthDate = "1978-03-12"
* address
  * use = #home
  * line = "112 Miramar Ct"
  * city = "Danville"
  * state = "Nova Scotia"
  * country = "CA"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/instances/us-core-patient-vr-unknown-name.fsh

Instance: us-core-patient-vr-unknown-name
InstanceOf: USCorePatientProfile
Title: "USCorePatient - Patient example [Unknown Name]"
Description: "Example of US Core Patient profile (Unknown)"
Usage: #example
* identifier
  * use = #usual
  * type = $v2-0203#MR "Medical Record Number"
    * text = "Medical Record Number"
  * system = "http://hospital.smarthealthit.org"
  * value = "MR303303305"
* active = true
* name.family = "UNK"
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
    * valueCode = #unknown
* gender = #unknown

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/profiles/LocationVitalRecords.fsh

Profile: LocationVitalRecords
Parent: USCoreLocation
Id: Location-vr
Title: "Location for Vital Records"
Description: "Vital Records Location -- defines (but does not require) the standard address extensions for vital records."
* ^abstract = true 
// * name 1..1
// * description 1..1
* type ^short = "Type is used to differentiate profiles of this abstract profile"
* name ^short = "Name of Location"
* address ^short = "Address"
* address.city ^short = "Address city"
* address.state ^short = "Address state"
* address.district ^short = "Address county"
* address.country ^short = "Address country"
* address.postalCode ^short = "Address zip"
* address.line ^short = "Address text"
* address.state from ValueSetStatesTerritoriesAndProvincesVitalRecords  (required)
* address.state ^short = "State/Jurisdiction.  Use value in Jurisdiction if present."
* address.state.extension contains
    ExtensionLocationJurisdictionIdVitalRecords named nationalReportingJurisdictionId 0..1  // jurisdiction_id
* address.country from ValueSetResidenceCountryVitalRecords (required)
* insert CityCode
* insert CountyCode
* insert AddressComponents
* position 0..1
* position ^short = "Geoposition lat/long" 

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/profiles/ObservationCodedRaceAndEthnicity.fsh

Profile: ObservationCodedRaceAndEthnicityVitalRecords
Parent: Observation
Id: coded-race-and-ethnicity-vr
Title: "Observation - Coded Race and Ethnicity Vital Records"
Description: "Coded (from NCHS) Race and Ethnicity (Observation). 
This is information that is coded by NCHS based on  submitted information and sent back to jurisdictions, and will not be processed if submitted to NCHS by jurisdictions."
* code from ValueSetCodedRaceAndEthnicityPersonVitalRecords (required) //  code = ObservationsCS#codedraceandethnicity
* value[x] 0..0
* insert SubjectRelatedPattern
* component ^slicing.discriminator.type = #value
* component ^slicing.discriminator.path = "code"
* component ^slicing.rules = #open
// * insert NCHSObservationCommon
* insert obscodecomponent(FirstEditedCode,ValueSetRaceCodeVitalRecords) // First through eighth edited codes
* insert obscodecomponent(SecondEditedCode,ValueSetRaceCodeVitalRecords)
* insert obscodecomponent(ThirdEditedCode,ValueSetRaceCodeVitalRecords)
* insert obscodecomponent(FourthEditedCode,ValueSetRaceCodeVitalRecords)
* insert obscodecomponent(FifthEditedCode,ValueSetRaceCodeVitalRecords)
* insert obscodecomponent(SixthEditedCode,ValueSetRaceCodeVitalRecords)
* insert obscodecomponent(SeventhEditedCode,ValueSetRaceCodeVitalRecords)
* insert obscodecomponent(EighthEditedCode,ValueSetRaceCodeVitalRecords)
* insert obscodecomponent(FirstAmericanIndianCode,ValueSetRaceCodeVitalRecords)
* insert obscodecomponent(SecondAmericanIndianCode,ValueSetRaceCodeVitalRecords)
* insert obscodecomponent(FirstOtherAsianCode,ValueSetRaceCodeVitalRecords)
* insert obscodecomponent(SecondOtherAsianCode,ValueSetRaceCodeVitalRecords)
* insert obscodecomponent(FirstOtherPacificIslanderCode,ValueSetRaceCodeVitalRecords)
* insert obscodecomponent(SecondOtherPacificIslanderCode,ValueSetRaceCodeVitalRecords)
* insert obscodecomponent(FirstOtherRaceCode,ValueSetRaceCodeVitalRecords)
* insert obscodecomponent(SecondOtherRaceCode,ValueSetRaceCodeVitalRecords)
* insert obscodecomponent(RaceRecode40,ValueSetRaceRecode40VitalRecords)
* insert obscodecomponent(HispanicCode,ValueSetHispanicOriginVitalRecords)
* insert obscodecomponent(HispanicCodeForLiteral,ValueSetHispanicOriginVitalRecords)


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/profiles/ObservationEducationLevelVitalRecords.fsh

/*
DeathRecord:    subject = Decedent (Patient)
Birth:   subject = Child (Patient),   focus = Mother (Patient) or NaturalFather (RelatedPerson) 
Fetal Death:  subject = Fetus (Patient), focus = Mother (Patient) or NaturalFather (RelatedPerson) 

These are the same, except for the code on the Observation.  
The VitalRecords version uses a valueset that includes Mother and Father's education level. If the Decedent education level code was added in, all would be well... The valueset from VRDR will do the trick.
VRCL has a subject and focus. 

VRDR has no MS flags. VRDR has bypassEditFlag extension, VRCL does not. 
*/

Profile: ObservationEducationLevelVitalRecords
Parent: Observation
Id: Observation-education-level-vr
Title: "Observation - Education Level Vital Records"
Description: "The highest degree or level of schooling completed by the decedent or parent. 
This profile is designed to supplant similar profile in VRDR"
* code from ValueSetEducationLevelPersonVitalRecords (required) //created new valueset to include code for decedent's highest level of education, 80913-7
  * ^short = "Persons for whom education level can be reported."
  * ^binding.description = "EducationLevelPerson"
* subject 1..1
* insert SubjectRelatedPattern
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from ValueSetEducationLevelVitalRecords (required) // use VRDR valueset
  * ^short = "The collection of education levels used for vital records reporting."
  * ^binding.description = "Vital Records Education Level (NCHS)"
* value[x].extension contains
    BypassEditFlag named bypassEditFlag 0..1
* value[x].extension[bypassEditFlag].value[x] from ValueSetEditBypass01234VitalRecords (required)
* value[x].extension[bypassEditFlag].value[x] only CodeableConcept

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/profiles/ObservationEmergingIssuesVitalRecords.fsh



RuleSet: PlaceComponent(len, number)
* component contains EmergingIssue{len}_{number} 0..1
* component[EmergingIssue{len}_{number}] ^short = "EmergingIssue{len}_{number}"
* component[EmergingIssue{len}_{number}].code 1..1
* component[EmergingIssue{len}_{number}].code = CodeSystemComponentVitalRecords#EmergingIssue{len}_{number}
* component[EmergingIssue{len}_{number}].value[x] 1..1
* component[EmergingIssue{len}_{number}].value[x] only string
* component[EmergingIssue{len}_{number}].valueString ^maxLength = {len}



Profile: ObservationEmergingIssuesVitalRecords
Parent: Observation
Id: Observation-emerging-issues-vr
Title: "Observation - Emerging Issues Vital Records"
Description: "Used to send data needed to respond to emerging public health issues from jurisdictions to NCHS."
* insert RequireMetaProfile(ObservationEmergingIssuesVitalRecords)
* status 1..1
* status = #final (exactly)
* code 1..1
* code = CodeSystemLocalObservationsCodesVitalRecords#emergingissues // "NCHS-required Parameter Slots for Emerging Issues"
* subject 1..1
* subject only Reference(PatientVitalRecords) //generalized to PatientVitalRecords
* effective[x] 0..0
* value[x] 0..0
* component ^slicing.discriminator.type = #value
* component ^slicing.discriminator.path = "code"
* component ^slicing.rules = #open
* insert PlaceComponent(1,1)
* insert PlaceComponent(1,2)
* insert PlaceComponent(1,3)
* insert PlaceComponent(1,4)
* insert PlaceComponent(1,5)
* insert PlaceComponent(1,6)
* insert PlaceComponent(1,7)
* insert PlaceComponent(1,8)
* insert PlaceComponent(8,1)
* insert PlaceComponent(8,2)
* insert PlaceComponent(8,3)
* component contains EmergingIssue20 0..1
* component[EmergingIssue20] ^short = "EmergingIssue20"
* component[EmergingIssue20].code 1..1
* component[EmergingIssue20].code = CodeSystemComponentVitalRecords#EmergingIssue20
* component[EmergingIssue20].value[x] 1..1
* component[EmergingIssue20].value[x] only string
* component[EmergingIssue20].valueString ^maxLength = 20


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/profiles/ObservationInputRaceAndEthnicity.fsh

Profile: ObservationInputRaceAndEthnicityVitalRecords
Parent: Observation
Id: input-race-and-ethnicity-vr
Title: "Observation - Input Race and Ethnicity Vital Records"
Description: "Input (from EDRS or EBRS) Race and Ethnicity (Observation). This is information collected by jurisdictions and submitted to NCHS."
* code from ValueSetInputRaceAndEthnicityPersonVitalRecords (required) //  ObservationsCS#inputraceandethnicity
* value[x] 0..0
* insert SubjectRelatedPattern
* status only code
* status = #final (exactly)
* component ^slicing.discriminator.type = #value
* component ^slicing.discriminator.path = "code"
* component ^slicing.rules = #open
* insert primobscodecomponent(White,boolean)
* insert primobscodecomponent(BlackOrAfricanAmerican,boolean)
* insert primobscodecomponent(AmericanIndianOrAlaskanNative,boolean)
* insert primobscodecomponent(AsianIndian,boolean)
* insert primobscodecomponent(Chinese,boolean)
* insert primobscodecomponent(Filipino,boolean)
* insert primobscodecomponent(Japanese,boolean)
* insert primobscodecomponent(Korean,boolean)
* insert primobscodecomponent(Vietnamese,boolean)
* insert primobscodecomponent(OtherAsian,boolean)
* insert primobscodecomponent(NativeHawaiian,boolean)
* insert primobscodecomponent(GuamanianOrChamorro,boolean)
* insert primobscodecomponent(Samoan,boolean)
* insert primobscodecomponent(OtherPacificIslander,boolean)
* insert primobscodecomponent(OtherRace,boolean)
* insert primobscodecomponent(FirstAmericanIndianOrAlaskanNativeLiteral,string)
* insert primobscodecomponent(SecondAmericanIndianOrAlaskanNativeLiteral,string)
* insert primobscodecomponent(FirstOtherAsianLiteral,string)
* insert primobscodecomponent(SecondOtherAsianLiteral,string)
* insert primobscodecomponent(FirstOtherPacificIslanderLiteral,string)
* insert primobscodecomponent(SecondOtherPacificIslanderLiteral,string)
* insert primobscodecomponent(FirstOtherRaceLiteral,string)
* insert primobscodecomponent(SecondOtherRaceLiteral,string)
* insert obscodecomponent(RACEMVR,ValueSetRaceMissingValueReasonVitalRecords)
* insert obscodecomponent(HispanicMexican,ValueSetYesNoUnknownVitalRecords)
* insert obscodecomponent(HispanicPuertoRican,ValueSetYesNoUnknownVitalRecords)
* insert obscodecomponent(HispanicCuban,ValueSetYesNoUnknownVitalRecords)
* insert obscodecomponent(HispanicOther,ValueSetYesNoUnknownVitalRecords)
* insert primobscodecomponent(HispanicLiteral,string)


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/profiles/PatientChildVitalRecords.fsh

Profile: PatientChildVitalRecords
Parent: PatientVitalRecords
Id: Patient-child-vr
Title: "Patient - Child Vital Records"
Description: "The subject patient (newborn/infant/child) for whom clinical data is included in the report."
* obeys childNotDeceased
* extension[race] 
* extension[ethnicity] 
* extension[birthsex] 1.. 
  * value[x] ^short = "Sex"
* extension[birthPlace] 
  * valueAddress.state ^short = "State of Birth"
    * extension[nationalReportingJurisdictionId] ^short = "Jurisdiction of Birth"
  * valueAddress.district ^short = "District of Birth"
    * extension[districtCode] ^short = "County of birth"
  * valueAddress.city ^short = "City of Birth"
* extension[parentReportedAgeAtDelivery] ^short = "The mother or father's reported age at the time of delivery of the child"
  * extension[reportedAge].value[x] ^short = "Reported age"
  * extension[motherOrFather].valueCodeableConcept ^short = "Indicates mother/Father code"
* identifier[MRN] 
  * value ^short = "Medical record number"
  * type.coding.code ^short = "Identifier type code"
* extension[birthsex].valueCode from ValueSetSexAssignedAtBirthVitalRecords (required)
* insert childName 
* insert birthDateAndTime
* multipleBirth[x] only integer
* multipleBirth[x] 
  * .extension[bypassEditFlag].value[x]
    * ^short = "To reflect the relevant edit possibilities for plurality."
  * .extension[multipleBirthTotal] 
    * ^short = "Where a patient is a part of a multiple delivery, this is the total number of deliveries that occurred in this pregnancy."
    * value[x] ^short = "Plurality"
* deceased[x] MS
  * ^short = "Indicates if the individual is deceased or not, dateTime is preferred"


RuleSet: childName
* name MS
  * family 1.. MS
    * extension[dataAbsentReason] ^short = "When \"name not chosen\" use code \"temp-unknown\""
  * given MS
    * extension[dataAbsentReason] ^short = "When \"name not chosen\" use code \"temp-unknown\""
  * use ^short = "The use of a human name"
  * suffix ^short = "Surname suffix"

RuleSet: birthDateAndTime 
* birthDate 1..
  * ^short = "Birth Date with support for partial date and time of birth via extension.  See [Birth Date and Time]."
  * extension[partialDateTime] ^short = "Use if only partial date and time of birth is known"
  * extension[birthTime]  ^short = "Time of Birth"
  * extension[partialDateTime] 
  * extension[birthTime] 


  // * extension[datePartAbsentReason] MS 
Invariant: childNotDeceased
Description: "Patients who are marked deceased don't conform to PatientChildVitalRecords. If the deceased field is present, it must be false"
Severity: #error
* expression = "deceased.exists() implies deceased = false"
//     "(deceased.exists()
//   implies
//      (value = 'false'))"



---

File: repos/HL7_SLASH_vr-common-library/input/fsh/profiles/PatientMotherVitalRecords.fsh

Profile: PatientMotherVitalRecords
Parent: PatientVitalRecords
Id: Patient-mother-vr
Title: "Patient - Mother Vital Records"
Description: "This Patient profile represents the woman who gave birth to, or delivered the infant."
// * extension[race] 1..
//   * ^short = "If race is unknown, use UNK from the bound value set."
// * extension[ethnicity] 1..
//   * ^short = "If ethnicity is unknown omit both coded data fields."
* extension[birthPlace]
  * value[x].state from ValueSetStatesTerritoriesAndProvincesVitalRecords (required) 
  * value[x].state ^short = "State, territory, province code"
  * value[x].country ^short = "Country code"
* identifier[MRN] MS
  * type.coding.code ^short = "Code type"
  * value ^short = "Medical Record no."
* identifier[SSN] MS
  * type.coding.code ^short = "Code type"
  * value ^short = "Social Security no."
* name[currentLegalName]
* name[namePriorToFirstMarriage]
* name
  * family 1.. 
  * family ^short = "Surname"
  * given ^short = "Given name"
  * use ^short = "The use of a human name"
  * suffix ^short = "Surname suffix"
* birthDate 1..
* birthDate.extension[partialDateTime]
// * birthDate 1..
//   * extension contains ExtensionDatePartAbsentReasonVitalRecords named datePartAbsentReason 0..* MS
//   * extension[datePartAbsentReason] ^short = "Indicates reason for missing data on either the birthDate or the birthTime."
//     * ^definition = "Indicates reason for missing data on either the birthDate or the birthTime."
* birthDate.extension[bypassEditFlag] ^short = "To reflect the relevant edit possibilities for Mother's date of birth."
  * value[x] ^short = "Date edit"
* deceased[x]
  * ^short = "Indicates if the individual is deceased or not, dateTime is preferred"
* address
  * extension[withinCityLimitsIndicator]
    * value[x] ^short = "Residence inside city limits"
  * extension[stnum] ^short = "Residence street number"
  * extension[predir] ^short = "Residence predirectional"
  * extension[stname] ^short = "Residence street name"
  * extension[stdesig] ^short = "Residence street designator"
  * extension[postdir] ^short = "Residence postdirectional"
  * extension[unitnumber] ^short = "Residence unit no."
  * city.extension[cityCode] ^short = "city code"
  * district.extension[districtCode] ^short = "county code"
  * state ^short = "State"
  * country ^short = "Country"
  * line ^short = "Street address"
  * postalCode ^short = "Zip code"
  * district ^short = "County literal"
  * city ^short = "City literal"
* link
  * ^slicing.discriminator.type = #pattern
  * ^slicing.discriminator.path = "type"
  * ^slicing.description = "Slice based on link type"
  * ^slicing.ordered = false
  * ^slicing.rules = #open
* link contains mother 0..1
* link[mother] ^short = "Link to the birth mother's RelatedPerson record"
  * other only Reference(RelatedPersonMotherVitalRecords)
  //  * ^type.extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-hierarchy"
  //  * ^type.extension.valueBoolean = false
  // From Chris Moesel 10/26/23:   That extension is actually used in the FHIR core Patient SD for Patient.link.other. 
  // Since this element is a Patient.link:mother.other, one could argue that the extension already applies and does not need to be repeated in the mother slice. 
  // Sometimes you need to repeat extensions in slices for the IG Publisher to do validation correctly, 
  // but in this case, I expect it's safe to remove it. So if you have FSH explicitly adding this extension, I'd just delete those lines of FSH.
  * type = #seealso
    // * ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-hierarchy"
    // * ^extension.valueBoolean = false
* maritalStatus.text ^short = "marital status desc"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/profiles/PatientVitalRecords.fsh

Profile: PatientVitalRecords
Parent: USCorePatientProfile
Id: Patient-vr
Title: "Patient - Vital Records"
Description: "This abstract Patient profile includes common extensions and slicing used across vital records."
* ^abstract = true 
* extension contains $patient-birthPlace named birthPlace 0..1 
* extension[birthPlace] ^short = "Place of Birth for the patient should include the state and/or country"
* extension[birthPlace].valueAddress
  * country from ValueSetBirthplaceCountryVitalRecords (required)    // BPLACE_CNT
  * state from ValueSetStatesTerritoriesAndProvincesVitalRecords  (required)  // BPLACE_ST / BSTATE
  * state ^short = "State/Jurisdiction of birth.  Provide only for US or Canadian states/provinces/territories. Use value in Jurisdiction if present."
  * state.extension contains
    ExtensionLocationJurisdictionIdVitalRecords named nationalReportingJurisdictionId 0..1  // jurisdiction_id
  * district.extension contains
       DistrictCode named districtCode 0..1
  * district.extension[districtCode] ^label = "County code"
  * district.extension[districtCode] ^short = "County code"
  * city.extension contains
      CityCode named cityCode 0..1
// Add usage note that codes are from: https://ftp.cdc.gov/pub/health_Statistics/nchs/Manuals/Mortality/PLACE_CODES.txt and
  * district.extension[districtCode] ^definition = "Numeric code in accordance with the NCHS Instruction Manual Part 8, Vital Records Geographic Classification, 2014 (https://www.cdc.gov/nchs/data/dvs/IMP8_2014.pdf) and https://ftp.cdc.gov/pub/health_Statistics/nchs/Manuals/Mortality/PLACE_CODES.txt."
  * city.extension[cityCode] ^definition = "Numeric code in accordance with the NCHS Instruction Manual Part 8, Vital Records Geographic Classification, 2014 (https://www.cdc.gov/nchs/data/dvs/IMP8_2014.pdf) and https://ftp.cdc.gov/pub/health_Statistics/nchs/Manuals/Mortality/PLACE_CODES.txt."

* identifier ^slicing.discriminator.type = #pattern
  * ^slicing.discriminator.path = "type"
  * ^slicing.description = "Slice based on ID type"
  * ^slicing.ordered = false
  * ^slicing.rules = #open
* identifier contains
    MRN 0..*  and
    SSN 0..1 
* identifier[MRN] ^short = "Medical Record Number"
  * type = $v2-0203#MR
* identifier[SSN] ^short = "SSN if available and appropriate to send"
  * type = $v2-0203#SS
  * system = $ssn
* name 
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "use"
  * ^slicing.rules = #open
* name contains
    currentLegalName 0..1  and
    namePriorToFirstMarriage 0..1 
* name[currentLegalName] 
  * ^short = "current legal name"
  * use = #official (exactly)
* name[namePriorToFirstMarriage]
  * use = #maiden (exactly)
  * ^short = "Name prior to first marriage"
* name 
//  * use 1..1 
  * family // 1..
    * extension ^slicing.discriminator.type = #value
      * ^slicing.discriminator.path = "url"
      * ^slicing.rules = #open
    * extension contains $data-absent-reason named dataAbsentReason 0..1 
  * given 
    * extension ^slicing.discriminator.type = #value
      * ^slicing.discriminator.path = "url"
      * ^slicing.rules = #open
    * extension contains $data-absent-reason named dataAbsentReason 0..1 

* birthDate.extension contains
    ExtensionPartialDateTimeVitalRecords named partialDateTime 0..1 and
    $patient-birthTime named birthTime 0..1 and
    BypassEditFlag named bypassEditFlag 0..1
* birthDate.extension[partialDateTime] ^short = "partialDateTIme"
* birthDate.extension[partialDateTime] ^definition = "Alternative component representation of partial date and time. See [note on birth date and time]."
* birthDate.extension[bypassEditFlag]
  * valueCodeableConcept from ValueSetDateOfBirthEditFlagsVitalRecords (required)
  * value[x] only CodeableConcept
    * ^short = "To reflect the relevant edit possibilities for date of birth."
    * ^binding.description = "Date of Birth Edit Flags (NCHS)"
* address
  * country from ValueSetResidenceCountryVitalRecords (required)  // COUNTRYC
  * state from ValueSetStatesTerritoriesAndProvincesVitalRecords (required)  // STATEC
  * extension contains ExtensionWithinCityLimitsIndicatorVitalRecords named withinCityLimitsIndicator 0..1 
  * extension[withinCityLimitsIndicator] ^short = "Used to indicate whether or not an address is within city limits."
  * extension[withinCityLimitsIndicator] ^definition = "Used to indicate whether or not an address is within city limits."
* insert CityCode
* insert CountyCode
* insert AddressComponents
* extension contains ExtensionReportedParentAgeAtDeliveryVitalRecords named parentReportedAgeAtDelivery 0..2
* insert multipleBirths
* deceasedBoolean.extension contains ExtensionPatientFetalDeathVitalRecords named fetalDeath 0..1 
* deceasedBoolean ^short = "Boolean indicator. True if the individual is deceased."
* deceasedBoolean.extension[fetalDeath] ^short = "Boolean indicator. True if the Patient died as a fetus."
* deceasedBoolean obeys fetalDeathOnlyIfDeceased


Invariant: fetalDeathOnlyIfDeceased
Description: "Fetal death should only be indicated if Patient is deceased."
Severity: #error
* expression = 
     "(extension.where(url = 'http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Extension-patient-fetal-death-vr').exists(value.exists() and value = 'true'))
   implies
      (value.exists() and
      value = 'true')"

      // extension.where(url = 'http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Extension-patient-fetal-death-vr').value.exists() and
      // extension.where(url = 'http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Extension-patient-fetal-death-vr').value = 'true')
RuleSet: multipleBirths
* multipleBirth[x] 
  * ^short = "If not single birth - born first, second, third, etc."
  * ^definition = "If not single birth, specify born 1st, 2nd, etc. – For multiple deliveries, the order this infant was delivered in the set. Include all live births and fetal losses."
// Add Edit Flags, a la VRDR 
* multipleBirth[x].extension contains
    BypassEditFlag named bypassEditFlag 0..1 and
    PatMultipleBirthTotal named multipleBirthTotal 0..1 
* multipleBirth[x].extension[bypassEditFlag]
  * value[x] from ValueSetPluralityEditFlagsVitalRecords (required)
  * value[x] only CodeableConcept
    * ^binding.description = "Plurality Edit Flags (NCHS)"
* multipleBirth[x].extension[multipleBirthTotal] 
  * ^definition = "Where a patient is a part of a multiple delivery, this is the total number of deliveries that occurred in this pregnancy." 






---

File: repos/HL7_SLASH_vr-common-library/input/fsh/profiles/PractitionerVitalRecords.fsh

Profile: PractitionerVitalRecords
Parent: USCorePractitionerProfile
Id: Practitioner-vr
Title: "Practitioner - Vital Records"
Description: "This Practitioner profile represents a practitioner who is involved in vital records (births, fetal death, death, etc.) as a certifier or an attendant. This profile is based on the US Core Practitioner and adds a further constraint to capture the title of the practitioner."
* insert RequireMetaProfile(Profile: PractitionerVitalRecords)
// PractitionerVitalRecords uses the qualification field to differentiate between different 'attendees at birth', which iMHO is incorrect. This information would be better passed in the performer.function of some procedure/encounter relating to the birth. That would make it consistent with the way VRDR did it, and 
// it could be used for Certifier as well with appropriate constraining of the value set used for performer.function. See https://jira.hl7.org/browse/FHIR-41780
* name 1..1
* name ^short = "name"
  * text ^short = "name"
* address ^short = "address"
* address.city ^short = "city"
* address.district ^short = "county"
* address.postalCode ^short = "zip"
* insert CityCode
* insert CountyCode
* insert AddressComponents
* address.country from ValueSetResidenceCountryVitalRecords (required)
* address.state from ValueSetStatesTerritoriesAndProvincesVitalRecords (required)
* identifier[NPI] ^short = "Practitioner's NPI Number"
* qualification ^short = "Practitioner's certification, licenses, or training pertaining to the provision of care"



---

File: repos/HL7_SLASH_vr-common-library/input/fsh/profiles/RelatedPersonFatherNaturalVitalRecords.fsh

Profile: RelatedPersonFatherNaturalVitalRecords
Parent: RelatedPersonFatherVitalRecords
Id: RelatedPerson-father-natural-vr
Title: "RelatedPerson - Father Natural Vital Records"
Description: "The biological (natural) father of the newborn or fetus."
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* . ^short = "The biological father of the newborn or fetus."
* relationship 1..1
* relationship = $v3-RoleCode#NFTH
  * ^short = "natural father"
* extension[Extension-relatedperson-birthplace-vr].value[x]
  * state ^short = "Birth state"
  * country ^short = "Birth country"
* name
  * given ^short = "Father's first name"
  * use ^short = "Usage of human name"
  * family ^short = "Father's  surname"
  * suffix ^short = "Surname suffix"
* identifier[SSN]
  * value ^short = "Social Security no."
  * type.coding.code ^short = "Identifier type code"
* birthDate ^short = "Date on which the related person was born"
* birthDate.extension[bypassEditFlag] ^short = "To reflect the relevant edit possibilities for Father's date of birth."
  * value[x] ^short = "Date edit"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/profiles/RelatedPersonFatherVitalRecords.fsh


Profile: RelatedPersonFatherVitalRecords
Parent: RelatedPersonParentVitalRecords //Based on US Core Related Person Profile
Id: RelatedPerson-father-vr
Title: "RelatedPerson - Father Vital Records"
Description: "The father of the report subject. Different individuals may play different roles as the father (e.g., biological father, adoptive father, etc.).
This profile is designed to supplant the similar profile in VRDR"
* relationship from ValueSetFatherRelationshipVitalRecords (required) //better to use common vs, whereas VRDR used a fixed value (FTH) from codesystem
  * ^short = "Relationships describing the father's role relative to the subject."
  * ^binding.description = "FatherRelationship"
// Add Edit Flags, a la VRDR 
* birthDate.extension[bypassEditFlag] ^short = "To reflect the relevant edit possibilities for Father's date of birth."
  * value[x] ^short = "DOB edit flag"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/profiles/RelatedPersonMotherVitalRecords.fsh


Profile: RelatedPersonMotherVitalRecords
Parent: RelatedPersonParentVitalRecords //Based on US Core Related Person Profile
Id: RelatedPerson-mother-vr
Title: "RelatedPerson - Mother Vital Records"
Description: "The mother of the report subject. Different individuals may play different roles as the mother (e.g., biological mother, adoptive mother, etc.).
This profile is designed to supplant the similar profile in VRDR"
* relationship from ValueSetMotherRelationshipVitalRecords (required) //uses a vs, whereas VRDR used a fixed value (MTH) from codesystem
  * ^short = "Relationships describing the mother's role relative to the subject."
  * ^binding.description = "MotherRelationship"
//* gender MS - removing MS, but adding in ^short so it appears in differential
* gender
  * ^short = "Gender"
//* communication MS - removing MS, but adding in ^short so it appears in differential
* communication
  * ^short = "A language which may be used to communicate with about the patient's health"
* birthDate.extension[bypassEditFlag] ^short = "To reflect the relevant edit possibilities for Mother's date of birth."

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/profiles/RelatedPersonParentVitalRecords.fsh

Profile: RelatedPersonParentVitalRecords
Parent: USCoreRelatedPerson
Id: RelatedPerson-parent-vr
Title: "Related Person - Parent Vital Records"
Description: "The RelatedPerson profile contains constraints common to the Mother and Father profiles. Serves as resource profile for RelatedPersonMother and RelatedPersonFather. 
This profile is designed to supplant the similar profile in VRDR"
* extension contains
//    ExtensionRelatedPersonDeceasedVitalRecords named deceased 0..1 and
    ExtensionRelatedpersonBirthplaceVitalRecords named birthPlace 0..1 // and
    // USCoreRaceExtension named race 0..1 and //relaxed constraint from 1..1 to 0..1
    // USCoreEthnicityExtension named ethnicity 0..1 //relaxed constraint from 1..1 to 0..1
// * extension[race] ^short = "If race is unknown, use UNK from the bound value set."
// * extension[ethnicity] ^short = "If ethnicity is unknown omit both coded data fields."
* identifier 
  * ^slicing.discriminator.type = #pattern
  * ^slicing.discriminator.path = "type"
  * ^slicing.description = "Slice based on ID type"
  * ^slicing.ordered = false
  * ^slicing.rules = #open
* identifier contains SSN 0..1 
* identifier[SSN] ^short = "SSN if available and appropriate to send"
  * type 1..1 
  * type = $v2-0203#SS
* patient only Reference(PatientVitalRecords) //generalized to USCorePatient
* relationship 1.. 
* name 1.. 
* birthDate 
  * extension contains 
      ExtensionPartialDateVitalRecords named partialDate 0..* and
      BypassEditFlag named bypassEditFlag 0..1
  * extension[partialDate] ^short = "Provides values of a partial date"
    * ^definition = "Indicates reason for missing data on either the birthDate or the birthTime."
  * extension[bypassEditFlag]
    * valueCodeableConcept from ValueSetDateOfBirthEditFlagsVitalRecords (required)
    * value[x] only CodeableConcept
      * ^short = "To reflect the relevant edit possibilities for date of birth."
      * ^binding.description = "Date of Birth Edit Flags (NCHS)"
  // * extension contains ExtensionDatePartAbsentReasonVitalRecords named datePartAbsentReason 0..* MS
  // * extension[datePartAbsentReason] ^short = "Indicates reason for missing birthDate data."
  //   * ^definition = "Indicates reason for missing data on either the birthDate or the birthTime."
* address 
  * ^short = "Address where the related person can be contacted or visited"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/rulesets/DEF_MotherOrFather.fsh

RuleSet: MotherOrFather
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from ValueSetRoleVitalRecords (extensible)
  * ^short = "Value set used to indicate father or mother."
  * ^binding.description = "Vital Records Role"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/rulesets/DEF_Rulesets.fsh

RuleSet: SubjectRelatedPattern
* subject only Reference(PatientVitalRecords)  // Child, Fetus, or Decedent
  * ^short = "This is the subject of the report, not the parent"
* focus 0..1 // not present if subject is Decedent.  If subject is baby/fetus, focus can be Mother (Patient) or Father (relatedPerson)
* focus only Reference(PatientMotherVitalRecords or RelatedPersonParentVitalRecords) //not required, may be omitted if reporting education level of decedent, not parent. 
  * ^short = "The RelatedPerson or Patient record for the parent"



// FROM VRDR

RuleSet: CityCode
* address.city.extension contains
    CityCode named cityCode 0..1
* address.city.extension[cityCode] ^label = "City Code"
* address.city.extension[cityCode] ^short = "City Code"
* address.city.extension[cityCode] ^definition = "Numeric code from in accordance with the NCHS Instruction Manual Part 8, Vital Records Geographic Classification, 2014 (https://www.cdc.gov/nchs/data/dvs/IMP8_2014.pdf) and https://ftp.cdc.gov/pub/health_Statistics/nchs/Manuals/Mortality/PLACE_CODES.txt."

RuleSet: CountyCode
* address.district.extension contains
    DistrictCode named districtCode 0..1
* address.district.extension[districtCode] ^label = "County code"
* address.district.extension[districtCode] ^short = "County code"
// Add usage note that codes are from: https://ftp.cdc.gov/pub/health_Statistics/nchs/Manuals/Mortality/PLACE_CODES.txt and
* address.district.extension[districtCode] ^definition = "Numeric code in accordance with the NCHS Instruction Manual Part 8, Vital Records Geographic Classification, 2014 (https://www.cdc.gov/nchs/data/dvs/IMP8_2014.pdf) and https://ftp.cdc.gov/pub/health_Statistics/nchs/Manuals/Mortality/PLACE_CODES.txt."

// See https://gisweb.miamidade.gov/addresssearch/Standards/DC_USPS_Address_Standards.pdf
// for an address like: 5576 S Miami Ave E  Apt 13
RuleSet: AddressComponents
* address.extension contains
   PreDirectional named predir 0..1 and // S
   StreetNumber named stnum 0..1 and    // 5576
   StreetName named stname 0..1 and     // Miami
   StreetDesignator named stdesig 0..1 and // Ave
   PostDirectional named postdir 0..1 and // E
   UnitOrAptNumber named unitnumber 0..1 // Apt 13

RuleSet: addressextension(length)
//* . ^short = "label"
* insert ExtensionContextResource(Address)
* value[x] 1..1
* value[x] only string
//* value[x] ^maxLength = {length}
* value[x] ^short = "For NCHS Submissions this field is limited to length {length}"



RuleSet: boilerplate
// * ^status = #draft
// * ^experimental = false
// * ^date = "2022-02-08"
* ^publisher = "Health Level Seven International"
// * ^contact[0].name = "HL7 International - Public Health"
// * ^contact[=].telecom.system = #url
// * ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/pher"
// * ^contact[+].name = "Cynthia Bush, Health Scientist (Informatics), CDC/National Center for Health Statistics"
// * ^contact[=].telecom.system = #email
// * ^contact[=].telecom.value = "pdz1@cdc.gov"
// * ^contact[+].name = "AbdulMalik Shakir, FHL7, President and Chief Informatics Scientist Hi3 Solutions"
// * ^contact[=].telecom.system = #email
// * ^contact[=].telecom.value = "abdulmalik.shakir@hi3solutions.com"
// * ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
// * ^jurisdiction.text = "US Realm"


RuleSet: Extension(name, min, max, short, def, class)
* extension contains {name} {min}..{max}
* extension[{name}] ^short = "{short}"
* extension[{name}] ^definition = "{def}"
* extension[{name}].value[x] only {class}

RuleSet: CodingExtension(name, min, max, short, def, valueset)
* insert Extension({name},{min},{max},{short},{def}, Coding)
* extension[{name}].value[x] from {valueset} (required)

RuleSet: BundleSlice(name, min, max, short, def, class)
* entry contains {name} {min}..{max}
* entry[{name}] ^short = "{short}"
* entry[{name}] ^definition = "{def}"
* entry[{name}].resource only {class}
//* entry[{name}].resource.meta.profile = Canonical({class})

RuleSet: RequireMetaProfile(profile)
// * meta 1..1
// * meta.profile 1..*
// * meta.profile ^slicing.discriminator.type = #pattern
// * meta.profile ^slicing.discriminator.path = "$this"
// * meta.profile ^slicing.rules = #open
// * meta.profile ^slicing.ordered = false
// * meta.profile ^slicing.description = "Slice based on value"
// * meta.profile contains supportedProfile 1..1
// * meta.profile[supportedProfile] = Canonical({profile})
// this now does nothing
* hello

RuleSet: AddMetaProfile(profile)
//* meta.profile = Canonical({profile})
// this does nothing
* hello

RuleSet: SNOMEDCopyright
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"

RuleSet: LOINCCopyright
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"

RuleSet: ExtensionContext(path)
* ^context[+].type = #element
* ^context[=].expression = "{path}"

RuleSet: ExtensionContextResource(path)
* insert ExtensionContext({path})
//* insert ExtensionContext({path}.Extension)

RuleSet: ExtensionContextFhirpath(fhirpath)
* ^context[+].type = #fhirpath
* ^context[=].expression = "{fhirpath}"

RuleSet: ParameterSlicing
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.rules = #open
* parameter ^slicing.description = "Slicing based on the profile conformance of the sliced element"

RuleSet: ParameterName(name,short,def)
* parameter contains {name} 0..1
* parameter[{name}].name = "{name}"
* parameter[{name}] ^short = "{short}"
* parameter[{name}] ^definition = "{def}"
* parameter[{name}].extension 0..0

RuleSet: ParameterNameType(name, type, short, def)
* insert ParameterName({name},{short}, {def})
* parameter[{name}].value[x] only {type}
* parameter[{name}].value[x] 1..1
* parameter[{name}].resource 0..0
* parameter[{name}].part 0..0
* parameter[{name}].extension 0..0

RuleSet: obscodecomponent(code, valueSet)
* component contains {code} 0..1
* component[{code}].code 1..1
* component[{code}].code = CodeSystemComponentVitalRecords#{code}
* component[{code}].value[x] 1..1
* component[{code}].value[x] only CodeableConcept
* component[{code}] ^short = "{code}"
* component[{code}].value[x] from {valueSet}

RuleSet: primobscodecomponent(code, type)
* component contains {code} 0..1
* component[{code}].code 1..1
* component[{code}].code = CodeSystemComponentVitalRecords#{code}
* component[{code}].value[x] 1..1
* component[{code}].value[x] only {type}
* component[{code}] ^short = "{code}"

RuleSet: NCHSObservationCommon
* subject only Reference(PatientVitalRecords) //generalized to PatientVitalRecords
* subject ^short = "Decedent"
// * effective[x] 1..1
* effective[x] only dateTime
* effective[x] ^short = "Date/Time when added to death record"


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetBirthAttendantTitles.fsh

ValueSet: ValueSetBirthAttendantTitlesVitalRecords
Id: ValueSet-birth-attendant-titles-vr
Title: "Value Set - Birth Attendants Titles Vital Records"
Description: "This valueset contains codes to represent the type of birth attendant titles. 
It is based on the original [PHVS_BirthAttendantTitles_NCHS](https://phinvads.cdc.gov/vads/ViewValueSet.action?id=7B108BDB-5F50-482F-9E9D-643EC75364A2) PHINVADS valueset. 
This IG is the primary source for valuesets for use in vital records.

Mapping to IJE codes [here](ConceptMap-ConceptMapBirthAttendantTitlesVitalRecords.html)."
* ^experimental = false
* insert SNOMEDCopyright
//* $sct#112247003 "Medical Doctor" -- retired
* $sct#309343006 "Medical Doctor"
* $sct#76231001 "Osteopath"
* $sct#445521000124102 "Advanced Practice Midwife"
* $sct#445531000124104 "Lay Midwife"
* $v3-NullFlavor#OTH "Other"
* $v3-NullFlavor#UNK "Unknown"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetBirthPlaceCountryVitalRecords.fsh

ValueSet: ValueSetBirthplaceCountryVitalRecords
Id: ValueSet-birthplace-country-vr
Title: "Value Set - Birthplace Country Vital Records"
Description: "This valueset contains the set of codes used to represent 2 Letter Birthplace Country Codes from GEC and ISO 3166-1.  Includes historic countries that no longer exist."
* include codes from system CodeSystemCountryCodeVitalRecords
* ^experimental = false

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetCodedRaceAndEthnicityVitalRecords.fsh

ValueSet: ValueSetRaceCodeVitalRecords
Id: ValueSet-race-code-vr
Title: "Value Set - Race Code Vital Records"
Description: "This valueset contains the set of codes used to represent NCHS Race Codes.

Mapping to IJE codes [here](ConceptMap-ConceptMapRaceCodeVitalRecords.html)."
//* include codes from system RaceCodeCSCS
* CodeSystemRaceCodeVitalRecords#100 "White Checkbox"
* CodeSystemRaceCodeVitalRecords#101 "White"
* CodeSystemRaceCodeVitalRecords#102 "Arab"
* CodeSystemRaceCodeVitalRecords#103 "English"
* CodeSystemRaceCodeVitalRecords#104 "French"
* CodeSystemRaceCodeVitalRecords#105 "German"
* CodeSystemRaceCodeVitalRecords#106 "Irish"
* CodeSystemRaceCodeVitalRecords#107 "Italian"
* CodeSystemRaceCodeVitalRecords#108 "Near Easterner"
* CodeSystemRaceCodeVitalRecords#109 "Polish"
* CodeSystemRaceCodeVitalRecords#110 "Scottish"
* CodeSystemRaceCodeVitalRecords#111 "Armenian"
* CodeSystemRaceCodeVitalRecords#112 "Assyrian"
* CodeSystemRaceCodeVitalRecords#113 "Egyptian"
* CodeSystemRaceCodeVitalRecords#114 "Iranian"
* CodeSystemRaceCodeVitalRecords#115 "Iraqi"
* CodeSystemRaceCodeVitalRecords#116 "Lebanese"
* CodeSystemRaceCodeVitalRecords#117 "Middle East"
* CodeSystemRaceCodeVitalRecords#118 "Palestinian"
* CodeSystemRaceCodeVitalRecords#119 "Syrian"
* CodeSystemRaceCodeVitalRecords#120 "Other Arab"
* CodeSystemRaceCodeVitalRecords#121 "Afghanistani"
* CodeSystemRaceCodeVitalRecords#122 "Israeli"
* CodeSystemRaceCodeVitalRecords#123 "Californio"
* CodeSystemRaceCodeVitalRecords#124 "Cajun"
* CodeSystemRaceCodeVitalRecords#125 "EUROPEAN"
* CodeSystemRaceCodeVitalRecords#126 "PORTUGUESE"
* CodeSystemRaceCodeVitalRecords#127 "ALBANIAN"
* CodeSystemRaceCodeVitalRecords#128 "CROATIAN"
* CodeSystemRaceCodeVitalRecords#129 "CZECH"
* CodeSystemRaceCodeVitalRecords#130 "RUSSIAN"
* CodeSystemRaceCodeVitalRecords#131 "UKRANIAN"
* CodeSystemRaceCodeVitalRecords#132 "CZECHOSLOVAKIAN"
* CodeSystemRaceCodeVitalRecords#133 "BOSNIAN"
* CodeSystemRaceCodeVitalRecords#134 "KOSOVIAN"
* CodeSystemRaceCodeVitalRecords#199 "Multiple WHITE responses"
* CodeSystemRaceCodeVitalRecords#200 "Black Checkbox"
* CodeSystemRaceCodeVitalRecords#201 "Black"
* CodeSystemRaceCodeVitalRecords#202 "African"
* CodeSystemRaceCodeVitalRecords#203 "African American"
* CodeSystemRaceCodeVitalRecords#204 "AfroAmerican"
* CodeSystemRaceCodeVitalRecords#205 "Nigritian"
* CodeSystemRaceCodeVitalRecords#206 "Negro"
* CodeSystemRaceCodeVitalRecords#207 "Bahamian"
* CodeSystemRaceCodeVitalRecords#208 "Barbadian"
* CodeSystemRaceCodeVitalRecords#209 "Botswana"
* CodeSystemRaceCodeVitalRecords#213 "Ethiopian"
* CodeSystemRaceCodeVitalRecords#214 "Haitian"
* CodeSystemRaceCodeVitalRecords#215 "Jamaican"
* CodeSystemRaceCodeVitalRecords#216 "Liberian"
* CodeSystemRaceCodeVitalRecords#218 "Namibian"
* CodeSystemRaceCodeVitalRecords#219 "Nigerian"
* CodeSystemRaceCodeVitalRecords#220 "Other African"
* CodeSystemRaceCodeVitalRecords#222 "Tobago"
* CodeSystemRaceCodeVitalRecords#223 "Trinidad"
* CodeSystemRaceCodeVitalRecords#224 "West Indies"
* CodeSystemRaceCodeVitalRecords#225 "Zaire"
* CodeSystemRaceCodeVitalRecords#226 "ERITREAN"
* CodeSystemRaceCodeVitalRecords#227 "TOGOLESE"
* CodeSystemRaceCodeVitalRecords#228 "SOMALIAN"
* CodeSystemRaceCodeVitalRecords#299 "Multiple BLACK  or AFRICAN AMERICAN responses"
* CodeSystemRaceCodeVitalRecords#300 "American Indian Checkbox"
* CodeSystemRaceCodeVitalRecords#400 "Asian Indian Checkbox"
* CodeSystemRaceCodeVitalRecords#401 "Asian Indian"
* CodeSystemRaceCodeVitalRecords#402 "Bangladeshi"
* CodeSystemRaceCodeVitalRecords#403 "Bhutanese"
* CodeSystemRaceCodeVitalRecords#404 "Burmese"
* CodeSystemRaceCodeVitalRecords#405 "Cambodian"
* CodeSystemRaceCodeVitalRecords#410 "Chinese Checkbox"
* CodeSystemRaceCodeVitalRecords#411 "Chinese"
* CodeSystemRaceCodeVitalRecords#412 "Taiwanese"
* CodeSystemRaceCodeVitalRecords#420 "Filipino Checkbox"
* CodeSystemRaceCodeVitalRecords#421 "Filipino"
* CodeSystemRaceCodeVitalRecords#422 "Hmong"
* CodeSystemRaceCodeVitalRecords#423 "Indonesian"
* CodeSystemRaceCodeVitalRecords#430 "Japanese Checkbox"
* CodeSystemRaceCodeVitalRecords#431 "Japanese"
* CodeSystemRaceCodeVitalRecords#440 "Korean Checkbox"
* CodeSystemRaceCodeVitalRecords#441 "Korean"
* CodeSystemRaceCodeVitalRecords#442 "Laotian"
* CodeSystemRaceCodeVitalRecords#443 "Malaysian"
* CodeSystemRaceCodeVitalRecords#444 "Okinawan"
* CodeSystemRaceCodeVitalRecords#445 "Pakistani"
* CodeSystemRaceCodeVitalRecords#446 "Sri Lankan"
* CodeSystemRaceCodeVitalRecords#447 "Thai"
* CodeSystemRaceCodeVitalRecords#450 "Vietnamese Checkbox"
* CodeSystemRaceCodeVitalRecords#451 "Vietnamese"
* CodeSystemRaceCodeVitalRecords#460 "Other Asian Checkbox"
* CodeSystemRaceCodeVitalRecords#462 "Asian"
* CodeSystemRaceCodeVitalRecords#463 "Asiatic"
* CodeSystemRaceCodeVitalRecords#465 "Mongolian"
* CodeSystemRaceCodeVitalRecords#466 "Oriental"
* CodeSystemRaceCodeVitalRecords#467 "Whello"
* CodeSystemRaceCodeVitalRecords#468 "Yello"
* CodeSystemRaceCodeVitalRecords#469 "Indo Chinese"
* CodeSystemRaceCodeVitalRecords#470 "Iwo Jiman"
* CodeSystemRaceCodeVitalRecords#471 "Maldivian"
* CodeSystemRaceCodeVitalRecords#472 "Nepalese"
* CodeSystemRaceCodeVitalRecords#473 "Singaporean"
* CodeSystemRaceCodeVitalRecords#474 "MADAGASCAR"
* CodeSystemRaceCodeVitalRecords#475 "MIEN"
* CodeSystemRaceCodeVitalRecords#476 "TIBETAN"
* CodeSystemRaceCodeVitalRecords#499 "Multiple ASIAN responses"
* CodeSystemRaceCodeVitalRecords#500 "Native Hawaiian Checkbox"
* CodeSystemRaceCodeVitalRecords#501 "Native Hawaiian"
* CodeSystemRaceCodeVitalRecords#502 "Hawaiian"
* CodeSystemRaceCodeVitalRecords#503 "Part Hawaiian"
* CodeSystemRaceCodeVitalRecords#510 "Samoan Checkbox"
* CodeSystemRaceCodeVitalRecords#511 "Samoan"
* CodeSystemRaceCodeVitalRecords#512 "Tahitian"
* CodeSystemRaceCodeVitalRecords#513 "Tongan"
* CodeSystemRaceCodeVitalRecords#514 "Polynesian"
* CodeSystemRaceCodeVitalRecords#515 "Tokelauan"
* CodeSystemRaceCodeVitalRecords#520 "Guamanian Checkbox"
* CodeSystemRaceCodeVitalRecords#521 "Guamanian"
* CodeSystemRaceCodeVitalRecords#522 "Chamorro"
* CodeSystemRaceCodeVitalRecords#530 "Other Pacific Islander Checkbox"
* CodeSystemRaceCodeVitalRecords#531 "Mariana Islander"
* CodeSystemRaceCodeVitalRecords#532 "Marshallese"
* CodeSystemRaceCodeVitalRecords#533 "Palauan"
* CodeSystemRaceCodeVitalRecords#534 "Carolinian"
* CodeSystemRaceCodeVitalRecords#535 "Kosraean"
* CodeSystemRaceCodeVitalRecords#536 "Micronesian"
* CodeSystemRaceCodeVitalRecords#537 "Pohnpeian"
* CodeSystemRaceCodeVitalRecords#538 "Saipanese"
* CodeSystemRaceCodeVitalRecords#539 "Kirabati"
* CodeSystemRaceCodeVitalRecords#540 "Chuukese"
* CodeSystemRaceCodeVitalRecords#541 "Yapese"
* CodeSystemRaceCodeVitalRecords#542 "Fijian"
* CodeSystemRaceCodeVitalRecords#543 "Melanesian"
* CodeSystemRaceCodeVitalRecords#544 "Papua New Guinean"
* CodeSystemRaceCodeVitalRecords#545 "Solomon Islander"
* CodeSystemRaceCodeVitalRecords#546 "New Hebrides"
* CodeSystemRaceCodeVitalRecords#547 "Pacific Islander"
* CodeSystemRaceCodeVitalRecords#599 "Multiple NATIVE HAWAIIAN and OTHER PACIFIC ISLANDER responses"
* CodeSystemRaceCodeVitalRecords#600 "Other Race Checkbox"
* CodeSystemRaceCodeVitalRecords#601 "Argentinean"
* CodeSystemRaceCodeVitalRecords#602 "Bolivian"
* CodeSystemRaceCodeVitalRecords#604 "Central American"
* CodeSystemRaceCodeVitalRecords#605 "Chicano"
* CodeSystemRaceCodeVitalRecords#606 "Chilean"
* CodeSystemRaceCodeVitalRecords#607 "Colombian"
* CodeSystemRaceCodeVitalRecords#608 "Costa Rican"
* CodeSystemRaceCodeVitalRecords#609 "Cuban"
* CodeSystemRaceCodeVitalRecords#610 "Ecuadorian"
* CodeSystemRaceCodeVitalRecords#611 "Salvadoran"
* CodeSystemRaceCodeVitalRecords#612 "Guatemalan"
* CodeSystemRaceCodeVitalRecords#613 "Hispanic"
* CodeSystemRaceCodeVitalRecords#614 "Honduran"
* CodeSystemRaceCodeVitalRecords#615 "Latin American"
* CodeSystemRaceCodeVitalRecords#616 "Mestizo"
* CodeSystemRaceCodeVitalRecords#617 "Mexican"
* CodeSystemRaceCodeVitalRecords#618 "Nicaraguan"
* CodeSystemRaceCodeVitalRecords#619 "Panamanian"
* CodeSystemRaceCodeVitalRecords#620 "Paraguayan"
* CodeSystemRaceCodeVitalRecords#621 "Peruvian"
* CodeSystemRaceCodeVitalRecords#622 "Puerto Rican"
* CodeSystemRaceCodeVitalRecords#623 "Morena"
* CodeSystemRaceCodeVitalRecords#624 "South American"
* CodeSystemRaceCodeVitalRecords#625 "Spanish"
* CodeSystemRaceCodeVitalRecords#626 "Spanish American"
* CodeSystemRaceCodeVitalRecords#627 "Sudamericano"
* CodeSystemRaceCodeVitalRecords#628 "Uruguayan"
* CodeSystemRaceCodeVitalRecords#629 "Venezuelan"
* CodeSystemRaceCodeVitalRecords#630 "Spaniard"
* CodeSystemRaceCodeVitalRecords#631 "Tejano"
* CodeSystemRaceCodeVitalRecords#632 "Cayman Islander"
* CodeSystemRaceCodeVitalRecords#633 "Moroccan"
* CodeSystemRaceCodeVitalRecords#634 "North African"
* CodeSystemRaceCodeVitalRecords#635 "United Arab Emirates"
* CodeSystemRaceCodeVitalRecords#636 "South African"
* CodeSystemRaceCodeVitalRecords#637 "Azerbaijani"
* CodeSystemRaceCodeVitalRecords#638 "Aryan"
* CodeSystemRaceCodeVitalRecords#640 "Dominican Republic"
* CodeSystemRaceCodeVitalRecords#641 "Dominica Islander"
* CodeSystemRaceCodeVitalRecords#642 "Belizean"
* CodeSystemRaceCodeVitalRecords#643 "Bermudan"
* CodeSystemRaceCodeVitalRecords#644 "Aruba Islander"
* CodeSystemRaceCodeVitalRecords#645 "Cayenne"
* CodeSystemRaceCodeVitalRecords#646 "Guyanese"
* CodeSystemRaceCodeVitalRecords#647 "Surinam"
* CodeSystemRaceCodeVitalRecords#648 "Sudanese"
* CodeSystemRaceCodeVitalRecords#649 "Amerasian"
* CodeSystemRaceCodeVitalRecords#650 "Eurasian"
* CodeSystemRaceCodeVitalRecords#651 "Brazilian"
* CodeSystemRaceCodeVitalRecords#652 "Brown"
* CodeSystemRaceCodeVitalRecords#653 "Bushwacker"
* CodeSystemRaceCodeVitalRecords#655 "Cape Verdean"
* CodeSystemRaceCodeVitalRecords#656 "Chocolate"
* CodeSystemRaceCodeVitalRecords#657 "Coe Clan"
* CodeSystemRaceCodeVitalRecords#658 "Coffee"
* CodeSystemRaceCodeVitalRecords#659 "Cosmopolitan"
* CodeSystemRaceCodeVitalRecords#660 "Issues"
* CodeSystemRaceCodeVitalRecords#661 "Jackson White"
* CodeSystemRaceCodeVitalRecords#662 "Melungeon"
* CodeSystemRaceCodeVitalRecords#663 "Mixed"
* CodeSystemRaceCodeVitalRecords#664 "Ramp"
* CodeSystemRaceCodeVitalRecords#665 "Wesort"
* CodeSystemRaceCodeVitalRecords#666 "Mulatto"
* CodeSystemRaceCodeVitalRecords#667 "Moor"
* CodeSystemRaceCodeVitalRecords#668 "Biracial"
* CodeSystemRaceCodeVitalRecords#669 "Creole"
* CodeSystemRaceCodeVitalRecords#670 "Indian"
* CodeSystemRaceCodeVitalRecords#671 "Turk"
* CodeSystemRaceCodeVitalRecords#672 "Half Breed"
* CodeSystemRaceCodeVitalRecords#673 "Rainbow"
* CodeSystemRaceCodeVitalRecords#674 "Octoroon"
* CodeSystemRaceCodeVitalRecords#675 "Quadroon"
* CodeSystemRaceCodeVitalRecords#676 "Multiracial"
* CodeSystemRaceCodeVitalRecords#677 "Interracial"
* CodeSystemRaceCodeVitalRecords#678 "Multiethnic"
* CodeSystemRaceCodeVitalRecords#679 "Multinational"
* CodeSystemRaceCodeVitalRecords#680 "JEWISH"
* CodeSystemRaceCodeVitalRecords#681 "CANADIAN"
* CodeSystemRaceCodeVitalRecords#682 "FRENCH CANADIAN"
* CodeSystemRaceCodeVitalRecords#683 "IBERIAN"
* CodeSystemRaceCodeVitalRecords#684 "TRIGUENO"
* CodeSystemRaceCodeVitalRecords#685 "MALADA"
* CodeSystemRaceCodeVitalRecords#686 "OTHER SPANISH"
* CodeSystemRaceCodeVitalRecords#699 "OTHER RACE, N.E.C."
* CodeSystemRaceCodeVitalRecords#990 "Multiple SOME OTHER RACE responses"
* CodeSystemRaceCodeVitalRecords#995 "American"
* CodeSystemRaceCodeVitalRecords#996 "Uncodable"
* CodeSystemRaceCodeVitalRecords#997 "Deferred"
* CodeSystemRaceCodeVitalRecords#998 "UNKNOWN"
* CodeSystemRaceCodeVitalRecords#999 "First Pass Reject"
* CodeSystemRaceCodeVitalRecords#A01 "Abenaki Nation of Missiquoi"
* CodeSystemRaceCodeVitalRecords#A05 "Algonquian"
* CodeSystemRaceCodeVitalRecords#A09 "Apache"
* CodeSystemRaceCodeVitalRecords#A10 "Chiricahua"
* CodeSystemRaceCodeVitalRecords#A11 "Fort Sill Apache"
* CodeSystemRaceCodeVitalRecords#A12 "Jicarilla Apache"
* CodeSystemRaceCodeVitalRecords#A13 "Lipan Apache"
* CodeSystemRaceCodeVitalRecords#A14 "Mescalero Apache"
* CodeSystemRaceCodeVitalRecords#A15 "Oklahoma Apache"
* CodeSystemRaceCodeVitalRecords#A16 "Payson Tonto Apache"
* CodeSystemRaceCodeVitalRecords#A17 "San Carlos Apache"
* CodeSystemRaceCodeVitalRecords#A18 "White Mountain Apache"
* CodeSystemRaceCodeVitalRecords#A24 "Arapahoe"
* CodeSystemRaceCodeVitalRecords#A25 "Northern Arapahoe"
* CodeSystemRaceCodeVitalRecords#A26 "Southern Arapahoe"
* CodeSystemRaceCodeVitalRecords#A27 "Wind River Arapahoe"
* CodeSystemRaceCodeVitalRecords#A31 "Arikara"
* CodeSystemRaceCodeVitalRecords#A34 "Assiniboine"
* CodeSystemRaceCodeVitalRecords#A35 "Fort Peck Assiniboine"
* CodeSystemRaceCodeVitalRecords#A36 "Fort Belknap Assiniboine"
* CodeSystemRaceCodeVitalRecords#A38 "Assiniboine Sioux"
* CodeSystemRaceCodeVitalRecords#A39 "Fort Peck Assiniboine and Sioux"
* CodeSystemRaceCodeVitalRecords#A42 "Bannock"
* CodeSystemRaceCodeVitalRecords#A45 "Blackfeet"
* CodeSystemRaceCodeVitalRecords#A51 "Brotherton"
* CodeSystemRaceCodeVitalRecords#A54 "Burt Lake Band"
* CodeSystemRaceCodeVitalRecords#A56 "Caddo"
* CodeSystemRaceCodeVitalRecords#A57 "Caddo Indian Tribe of Oklahoma"
* CodeSystemRaceCodeVitalRecords#A58 "Caddo Adais Indians"
* CodeSystemRaceCodeVitalRecords#A61 "Agua Caliente Band of Cahuilla Indians"
* CodeSystemRaceCodeVitalRecords#A62 "Augustine"
* CodeSystemRaceCodeVitalRecords#A63 "Cabazon Band of Cahuilla Mission Indians"
* CodeSystemRaceCodeVitalRecords#A64 "Cahuilla"
* CodeSystemRaceCodeVitalRecords#A65 "Los Coyotes Band of Cahuilla Mission Indians"
* CodeSystemRaceCodeVitalRecords#A66 "Morongo Band of Cahuilla Mission Indians"
* CodeSystemRaceCodeVitalRecords#A67 "Santa Rosa Cahuilla"
* CodeSystemRaceCodeVitalRecords#A68 "Torres Martinez Band of Cahuilla Mission Indians"
* CodeSystemRaceCodeVitalRecords#A69 "Ramona Band or Village of Cahuilla Mission Indians"
* CodeSystemRaceCodeVitalRecords#A74 "CALIFORNIA TRIBES N.E.C."
* CodeSystemRaceCodeVitalRecords#A75 "Cahto Indian Tribe of the Laytonville Rancheria"
* CodeSystemRaceCodeVitalRecords#A76 "Chimariko"
* CodeSystemRaceCodeVitalRecords#A77 "Coast Miwok"
* CodeSystemRaceCodeVitalRecords#A78 "MISSION BAND"
* CodeSystemRaceCodeVitalRecords#A79 "Kawaiisu"
* CodeSystemRaceCodeVitalRecords#A80 "Kem River Paiute Council"
* CodeSystemRaceCodeVitalRecords#A81 "Mattole"
* CodeSystemRaceCodeVitalRecords#A82 "Red Wood"
* CodeSystemRaceCodeVitalRecords#A83 "Santa Rosa Indian Community"
* CodeSystemRaceCodeVitalRecords#A84 "Takelma"
* CodeSystemRaceCodeVitalRecords#A85 "Wappo"
* CodeSystemRaceCodeVitalRecords#A86 "Yana"
* CodeSystemRaceCodeVitalRecords#A87 "Yuki"
* CodeSystemRaceCodeVitalRecords#A88 "Bear River Band of Rohnerville Rancheria"
* CodeSystemRaceCodeVitalRecords#A89 "DIGGER"
* CodeSystemRaceCodeVitalRecords#A90 "WIKCHAMNI"
* CodeSystemRaceCodeVitalRecords#A91 "Smith River Rancheria"
* CodeSystemRaceCodeVitalRecords#A94 "Canadian Indian"
* CodeSystemRaceCodeVitalRecords#A95 "Central American Indian"
* CodeSystemRaceCodeVitalRecords#A96 "French American Indian"
* CodeSystemRaceCodeVitalRecords#A97 "Mexican American Indian"
* CodeSystemRaceCodeVitalRecords#A98 "South American Indian"
* CodeSystemRaceCodeVitalRecords#A99 "Spanish American Indian"
* CodeSystemRaceCodeVitalRecords#B04 "Catawba Indian Nation"
* CodeSystemRaceCodeVitalRecords#B07 "Cayuse"
* CodeSystemRaceCodeVitalRecords#B11 "Chehalis"
* CodeSystemRaceCodeVitalRecords#B14 "Chemakuan"
* CodeSystemRaceCodeVitalRecords#B15 "Hoh Indian Tribe"
* CodeSystemRaceCodeVitalRecords#B16 "Quileute"
* CodeSystemRaceCodeVitalRecords#B19 "Chemehuevi"
* CodeSystemRaceCodeVitalRecords#B21 "Cherokee"
* CodeSystemRaceCodeVitalRecords#B22 "Cherokee Alabama"
* CodeSystemRaceCodeVitalRecords#B23 "Cherokees of Northeast Alabama"
* CodeSystemRaceCodeVitalRecords#B24 "Cherokees of Southeast Alabama"
* CodeSystemRaceCodeVitalRecords#B25 "Georgia Eastern Cherokee"
* CodeSystemRaceCodeVitalRecords#B26 "Echota Cherokee"
* CodeSystemRaceCodeVitalRecords#B27 "Etowah Cherokee"
* CodeSystemRaceCodeVitalRecords#B28 "Northern Cherokee Nation of Missouri and Arkansas"
* CodeSystemRaceCodeVitalRecords#B29 "Tuscola"
* CodeSystemRaceCodeVitalRecords#B30 "United Keetoowah Band of Cherokee"
* CodeSystemRaceCodeVitalRecords#B31 "Western Cherokee"
* CodeSystemRaceCodeVitalRecords#B32 "Southeastern Cherokee Council"
* CodeSystemRaceCodeVitalRecords#B33 "Sac River Band of the Chickamauga Cherokee"
* CodeSystemRaceCodeVitalRecords#B34 "White River Band of the Chickamauga Cherokee"
* CodeSystemRaceCodeVitalRecords#B35 "Four Winds Cherokee"
* CodeSystemRaceCodeVitalRecords#B36 "Cherokee of Georgia"
* CodeSystemRaceCodeVitalRecords#B37 "Cherokee Shawnee"
* CodeSystemRaceCodeVitalRecords#B40 "Cheyenne"
* CodeSystemRaceCodeVitalRecords#B41 "Northern Cheyenne"
* CodeSystemRaceCodeVitalRecords#B42 "Southern Cheyenne"
* CodeSystemRaceCodeVitalRecords#B46 "Cheyenne Arapaho"
* CodeSystemRaceCodeVitalRecords#B49 "Chickahominy Indian Tribe"
* CodeSystemRaceCodeVitalRecords#B50 "Chickahominy Eastern Band"
* CodeSystemRaceCodeVitalRecords#B51 "WESTERN CHICKAHOMINY"
* CodeSystemRaceCodeVitalRecords#B53 "Chickasaw"
* CodeSystemRaceCodeVitalRecords#B57 "Chinook"
* CodeSystemRaceCodeVitalRecords#B58 "Clatsop"
* CodeSystemRaceCodeVitalRecords#B59 "Columbia River Chinook"
* CodeSystemRaceCodeVitalRecords#B60 "Kathlamet"
* CodeSystemRaceCodeVitalRecords#B61 "Upper Chinook"
* CodeSystemRaceCodeVitalRecords#B62 "Wakiakum Chinook"
* CodeSystemRaceCodeVitalRecords#B63 "Willapa Chinook"
* CodeSystemRaceCodeVitalRecords#B64 "Wishram"
* CodeSystemRaceCodeVitalRecords#B67 "Bad River Band of the Lake Superior Tribe"
* CodeSystemRaceCodeVitalRecords#B68 "Bay Mills Indian Community of the Sault Ste. Marie Band"
* CodeSystemRaceCodeVitalRecords#B69 "Bois Forte Nett Lake Band of Chippewa"
* CodeSystemRaceCodeVitalRecords#B70 "Burt Lake Chippewa"
* CodeSystemRaceCodeVitalRecords#B71 "Chippewa"
* CodeSystemRaceCodeVitalRecords#B72 "Fond du Lac"
* CodeSystemRaceCodeVitalRecords#B73 "Grand Portage"
* CodeSystemRaceCodeVitalRecords#B74 "Grand Traverse Band of Ottawa and Chippewa Indians"
* CodeSystemRaceCodeVitalRecords#B75 "Keweenaw Bay Indian Community of the L'Anse and Ontonagon Bands"
* CodeSystemRaceCodeVitalRecords#B76 "Lac Court Oreilles Band of Lake Superior Chippewa"
* CodeSystemRaceCodeVitalRecords#B77 "Lac du Flambeau"
* CodeSystemRaceCodeVitalRecords#B78 "Lac Vieux Desert Band of Lake Superior Chippewa"
* CodeSystemRaceCodeVitalRecords#B79 "Lake Superior"
* CodeSystemRaceCodeVitalRecords#B80 "Leech Lake"
* CodeSystemRaceCodeVitalRecords#B81 "Little Shell Chippewa"
* CodeSystemRaceCodeVitalRecords#B82 "Mille Lacs"
* CodeSystemRaceCodeVitalRecords#B83 "Minnesota Chippewa"
* CodeSystemRaceCodeVitalRecords#B84 "Ontonagon"
* CodeSystemRaceCodeVitalRecords#B85 "Red Cliff Band of Lake Superior Chippewa"
* CodeSystemRaceCodeVitalRecords#B86 "Red Lake Band of Chippewa Indians"
* CodeSystemRaceCodeVitalRecords#B87 "Saginaw Chippewa"
* CodeSystemRaceCodeVitalRecords#B88 "St. Croix Chippewa"
* CodeSystemRaceCodeVitalRecords#B89 "Sault Ste. Marie Chippewa"
* CodeSystemRaceCodeVitalRecords#B90 "Sokoagon Chippewa"
* CodeSystemRaceCodeVitalRecords#B91 "Turtle Mountain Band"
* CodeSystemRaceCodeVitalRecords#B92 "White Earth"
* CodeSystemRaceCodeVitalRecords#B93 "Swan Creek Black River Confederate Tribe"
* CodeSystemRaceCodeVitalRecords#C02 "Rocky Boy's Chippewa Cree"
* CodeSystemRaceCodeVitalRecords#C05 "Chitimacha Tribe of Louisiana"
* CodeSystemRaceCodeVitalRecords#C08 "Choctaw"
* CodeSystemRaceCodeVitalRecords#C09 "Clifton Choctaw"
* CodeSystemRaceCodeVitalRecords#C10 "Jena Band of Choctaw"
* CodeSystemRaceCodeVitalRecords#C11 "Mississippi Band of Choctaw"
* CodeSystemRaceCodeVitalRecords#C12 "Mowa Band of Choctaw"
* CodeSystemRaceCodeVitalRecords#C13 "Oklahoma Choctaw"
* CodeSystemRaceCodeVitalRecords#C17 "Choctaw Apache Community of Ebarb"
* CodeSystemRaceCodeVitalRecords#C20 "Chumash"
* CodeSystemRaceCodeVitalRecords#C21 "Santa Ynez"
* CodeSystemRaceCodeVitalRecords#C22 "San Luis Rey Mission Indian"
* CodeSystemRaceCodeVitalRecords#C25 "Clear Lake"
* CodeSystemRaceCodeVitalRecords#C26 "Coeur D'Alene"
* CodeSystemRaceCodeVitalRecords#C29 "Coharie"
* CodeSystemRaceCodeVitalRecords#C32 "Colorado River"
* CodeSystemRaceCodeVitalRecords#C35 "Colville"
* CodeSystemRaceCodeVitalRecords#C39 "Comanche"
* CodeSystemRaceCodeVitalRecords#C40 "Oklahoma Comanche"
* CodeSystemRaceCodeVitalRecords#C44 "Coos Lower Umpqua and Siuslaw"
* CodeSystemRaceCodeVitalRecords#C46 "Coos"
* CodeSystemRaceCodeVitalRecords#C47 "Coquille"
* CodeSystemRaceCodeVitalRecords#C48 "Costanoan"
* CodeSystemRaceCodeVitalRecords#C52 "Alabama Coushatta Tribes of Texas"
* CodeSystemRaceCodeVitalRecords#C53 "Coushatta"
* CodeSystemRaceCodeVitalRecords#C56 "Cowlitz"
* CodeSystemRaceCodeVitalRecords#C59 "Cree"
* CodeSystemRaceCodeVitalRecords#C64 "Alabama Creek"
* CodeSystemRaceCodeVitalRecords#C65 "Alabama Quassarte Tribal Town"
* CodeSystemRaceCodeVitalRecords#C66 "Muscogee Creek Nation"
* CodeSystemRaceCodeVitalRecords#C67 "Eastern Creek"
* CodeSystemRaceCodeVitalRecords#C68 "Eastern Muscogee"
* CodeSystemRaceCodeVitalRecords#C69 "Kialegee Tribal Town"
* CodeSystemRaceCodeVitalRecords#C70 "Lower Muscogee Creek Tama Tribal Town"
* CodeSystemRaceCodeVitalRecords#C71 "Machis Lower Creek Indian"
* CodeSystemRaceCodeVitalRecords#C72 "Poarch Band"
* CodeSystemRaceCodeVitalRecords#C73 "Principal Creek Indian Nation"
* CodeSystemRaceCodeVitalRecords#C74 "Star Clan of Muskogee Creeks"
* CodeSystemRaceCodeVitalRecords#C75 "Thiopthlocco Tribal Town"
* CodeSystemRaceCodeVitalRecords#C76 "Tuckabachee"
* CodeSystemRaceCodeVitalRecords#C81 "Croatan"
* CodeSystemRaceCodeVitalRecords#C82 "Crow"
* CodeSystemRaceCodeVitalRecords#C87 "Cumberland County Association for Indian People"
* CodeSystemRaceCodeVitalRecords#C89 "Agua Caliente"
* CodeSystemRaceCodeVitalRecords#C90 "Cupeno"
* CodeSystemRaceCodeVitalRecords#C93 "Delaware"
* CodeSystemRaceCodeVitalRecords#C94 "Delaware Tribe of Indians, Oklahoma"
* CodeSystemRaceCodeVitalRecords#C95 "Lenni Lanape"
* CodeSystemRaceCodeVitalRecords#C96 "Munsee"
* CodeSystemRaceCodeVitalRecords#C97 "Delaware Tribe of Western Oklahoma"
* CodeSystemRaceCodeVitalRecords#C98 "Ramapough Mountain"
* CodeSystemRaceCodeVitalRecords#C99 "Sand Hill Band of Delaware Indians"
* CodeSystemRaceCodeVitalRecords#D05 "Barona Group of Capitan Grande Band"
* CodeSystemRaceCodeVitalRecords#D06 "Campo Band of Diegueno Mission Indians"
* CodeSystemRaceCodeVitalRecords#D07 "Capitan Grande Band of Diegueno Mission Indians"
* CodeSystemRaceCodeVitalRecords#D08 "Cuyapaipe"
* CodeSystemRaceCodeVitalRecords#D09 "Diegueno"
* CodeSystemRaceCodeVitalRecords#D10 "La Posta Band of Diegueno Mission Indians"
* CodeSystemRaceCodeVitalRecords#D11 "Manzanita"
* CodeSystemRaceCodeVitalRecords#D12 "Mesa Grande Band of Diegueno Mission Indians"
* CodeSystemRaceCodeVitalRecords#D13 "San Pasqual Band of Diegueno Mission Indians"
* CodeSystemRaceCodeVitalRecords#D14 "Santa Ysabel Band of Diegueno Mission Indians"
* CodeSystemRaceCodeVitalRecords#D15 "Sycuan Band of Diegueno Mission Indians"
* CodeSystemRaceCodeVitalRecords#D16 "Viejas Group of Capitan Grande Band"
* CodeSystemRaceCodeVitalRecords#D17 "Inaja Band of Diegueno Mission Indians of the Inaja and Cosmit Reservation"
* CodeSystemRaceCodeVitalRecords#D18 "Jarnul Indian Village"
* CodeSystemRaceCodeVitalRecords#D20 "Attacapa"
* CodeSystemRaceCodeVitalRecords#D21 "Biloxi"
* CodeSystemRaceCodeVitalRecords#D22 "Georgetown"
* CodeSystemRaceCodeVitalRecords#D24 "Nansemond Indian Tribe"
* CodeSystemRaceCodeVitalRecords#D25 "Natchez"
* CodeSystemRaceCodeVitalRecords#D26 "Nausu Waiwash"
* CodeSystemRaceCodeVitalRecords#D27 "Nipmuc"
* CodeSystemRaceCodeVitalRecords#D28 "Golden Hill Paugussett"
* CodeSystemRaceCodeVitalRecords#D29 "Pocomoke Acohonock"
* CodeSystemRaceCodeVitalRecords#D30 "Southeastern Indians"
* CodeSystemRaceCodeVitalRecords#D31 "Susquehanock"
* CodeSystemRaceCodeVitalRecords#D33 "Tunica Biloxi"
* CodeSystemRaceCodeVitalRecords#D34 "Waccamaw Siouan"
* CodeSystemRaceCodeVitalRecords#D36 "Wicomico"
* CodeSystemRaceCodeVitalRecords#D37 "Mehemn Indian Tribe"
* CodeSystemRaceCodeVitalRecords#D42 "Esselen"
* CodeSystemRaceCodeVitalRecords#D44 "Fort Belknap"
* CodeSystemRaceCodeVitalRecords#D45 "FORT BERTHOLD"
* CodeSystemRaceCodeVitalRecords#D46 "Three Affiliated Tribes of North Dakota"
* CodeSystemRaceCodeVitalRecords#D49 "Fort McDowell MohaveApache Community"
* CodeSystemRaceCodeVitalRecords#D51 "ShoshoneBannock Tribes of the Fort Hall Reservation"
* CodeSystemRaceCodeVitalRecords#D55 "Gabrieleno"
* CodeSystemRaceCodeVitalRecords#D57 "Grand Ronde"
* CodeSystemRaceCodeVitalRecords#D58 "Guilford Native American Association"
* CodeSystemRaceCodeVitalRecords#D60 "Atsina"
* CodeSystemRaceCodeVitalRecords#D61 "Gros Ventres"
* CodeSystemRaceCodeVitalRecords#D62 "Fort Belknap Gros Ventres"
* CodeSystemRaceCodeVitalRecords#D64 "HaliwaSaponi"
* CodeSystemRaceCodeVitalRecords#D67 "Hidatsa"
* CodeSystemRaceCodeVitalRecords#D70 "Hoopa Valley Tribe"
* CodeSystemRaceCodeVitalRecords#D71 "Trinity"
* CodeSystemRaceCodeVitalRecords#D72 "Whilkut"
* CodeSystemRaceCodeVitalRecords#D76 "Hoopa Extension"
* CodeSystemRaceCodeVitalRecords#D78 "United Houma Nation"
* CodeSystemRaceCodeVitalRecords#D87 "Iowa"
* CodeSystemRaceCodeVitalRecords#D88 "Iowa of Kansas and Nebraska"
* CodeSystemRaceCodeVitalRecords#D89 "Iowa of Oklahoma"
* CodeSystemRaceCodeVitalRecords#D91 "Indians of Person County"
* CodeSystemRaceCodeVitalRecords#D93 "Cayuga Nation"
* CodeSystemRaceCodeVitalRecords#D94 "Iroquois"
* CodeSystemRaceCodeVitalRecords#D95 "Mohawk"
* CodeSystemRaceCodeVitalRecords#D96 "Oneida Nation of New York"
* CodeSystemRaceCodeVitalRecords#D97 "Onondaga"
* CodeSystemRaceCodeVitalRecords#D98 "Seneca"
* CodeSystemRaceCodeVitalRecords#D99 "Seneca Nation"
* CodeSystemRaceCodeVitalRecords#E01 "SenecaCayuga"
* CodeSystemRaceCodeVitalRecords#E02 "Tonawanda Band of Seneca"
* CodeSystemRaceCodeVitalRecords#E03 "Tuscarora"
* CodeSystemRaceCodeVitalRecords#E04 "Wyandotte"
* CodeSystemRaceCodeVitalRecords#E10 "Juaneno"
* CodeSystemRaceCodeVitalRecords#E13 "Kalispel Indian Community"
* CodeSystemRaceCodeVitalRecords#E17 "Karuk Tribe of California"
* CodeSystemRaceCodeVitalRecords#E21 "Kaw"
* CodeSystemRaceCodeVitalRecords#E24 "Kickapoo"
* CodeSystemRaceCodeVitalRecords#E25 "Oklahoma Kickapoo"
* CodeSystemRaceCodeVitalRecords#E26 "Texas Kickapoo"
* CodeSystemRaceCodeVitalRecords#E30 "Kiowa"
* CodeSystemRaceCodeVitalRecords#E31 "Oklahoma Kiowa"
* CodeSystemRaceCodeVitalRecords#E37 "Jamestown S'Klallam"
* CodeSystemRaceCodeVitalRecords#E38 "Klallam"
* CodeSystemRaceCodeVitalRecords#E39 "Lower Elwha Tribal Community"
* CodeSystemRaceCodeVitalRecords#E40 "Port Gamble Klallam"
* CodeSystemRaceCodeVitalRecords#E44 "Klamath"
* CodeSystemRaceCodeVitalRecords#E48 "Konkow"
* CodeSystemRaceCodeVitalRecords#E50 "Kootenai"
* CodeSystemRaceCodeVitalRecords#E53 "Lassik"
* CodeSystemRaceCodeVitalRecords#E59 "Matinecock"
* CodeSystemRaceCodeVitalRecords#E60 "Montauk"
* CodeSystemRaceCodeVitalRecords#E61 "Poospatuck"
* CodeSystemRaceCodeVitalRecords#E62 "Setauket"
* CodeSystemRaceCodeVitalRecords#E63 "LONG ISLAND"
* CodeSystemRaceCodeVitalRecords#E66 "La Jolla Band of Luiseno Mission Indians"
* CodeSystemRaceCodeVitalRecords#E67 "Luiseno"
* CodeSystemRaceCodeVitalRecords#E68 "Pala Band of Luiseno Mission Indians"
* CodeSystemRaceCodeVitalRecords#E69 "Pauma Band of Luiseno Mission Indians"
* CodeSystemRaceCodeVitalRecords#E70 "Pechanga Band of Luiseno Mission Indians"
* CodeSystemRaceCodeVitalRecords#E71 "Soboba"
* CodeSystemRaceCodeVitalRecords#E72 "TwentyNine Palms Band of Luiseno Mission Indians"
* CodeSystemRaceCodeVitalRecords#E73 "Temecula"
* CodeSystemRaceCodeVitalRecords#E74 "Rincon Band of Luiseno Mission Indians"
* CodeSystemRaceCodeVitalRecords#E78 "Lumbee"
* CodeSystemRaceCodeVitalRecords#E84 "Lummi"
* CodeSystemRaceCodeVitalRecords#E87 "Mooretown Rancheria of Maidu Indians"
* CodeSystemRaceCodeVitalRecords#E88 "Maidu"
* CodeSystemRaceCodeVitalRecords#E89 "Mountain Maidu"
* CodeSystemRaceCodeVitalRecords#E90 "Nisenen"
* CodeSystemRaceCodeVitalRecords#E91 "Mechoopda Indian Tribe of Chico Rancheria, California"
* CodeSystemRaceCodeVitalRecords#E92 "Berry Creek Rancheria of Maidu Indians"
* CodeSystemRaceCodeVitalRecords#E93 "Enterprise Rancheria"
* CodeSystemRaceCodeVitalRecords#E94 "Greenville Rancheria"
* CodeSystemRaceCodeVitalRecords#E95 "Makah"
* CodeSystemRaceCodeVitalRecords#F01 "Maliseet"
* CodeSystemRaceCodeVitalRecords#F02 "Houlton Band of Maliseet Indians"
* CodeSystemRaceCodeVitalRecords#F05 "Mandan"
* CodeSystemRaceCodeVitalRecords#F09 "Mattaponi Indian Tribe"
* CodeSystemRaceCodeVitalRecords#F10 "Upper Mattaponi Tribe"
* CodeSystemRaceCodeVitalRecords#F11 "Menominee"
* CodeSystemRaceCodeVitalRecords#F15 "Metrolina Nadve American Association"
* CodeSystemRaceCodeVitalRecords#F17 "Illinois Miami"
* CodeSystemRaceCodeVitalRecords#F18 "Indiana Miami"
* CodeSystemRaceCodeVitalRecords#F19 "Miami"
* CodeSystemRaceCodeVitalRecords#F20 "Oklahoma Miami"
* CodeSystemRaceCodeVitalRecords#F24 "Miccosukee"
* CodeSystemRaceCodeVitalRecords#F27 "Aroostook Band"
* CodeSystemRaceCodeVitalRecords#F28 "Micmac"
* CodeSystemRaceCodeVitalRecords#F31 "Mission Indians"
* CodeSystemRaceCodeVitalRecords#F32 "Cahuilla Band of Mission Indians"
* CodeSystemRaceCodeVitalRecords#F34 "Ione Band of Miwok Indians"
* CodeSystemRaceCodeVitalRecords#F35 "Shingle Springs Band of Miwok Indians"
* CodeSystemRaceCodeVitalRecords#F36 "MeWuk"
* CodeSystemRaceCodeVitalRecords#F37 "Jackson Rancheria of MeWuk Indians of California"
* CodeSystemRaceCodeVitalRecords#F38 "Tuolumne Band of MeWuk Indians of California"
* CodeSystemRaceCodeVitalRecords#F39 "Buena Vista Rancheria of MeWuk Indians of California"
* CodeSystemRaceCodeVitalRecords#F40 "Chicken Ranch Rancheria of MeWuk Indians"
* CodeSystemRaceCodeVitalRecords#F41 "Sheep Ranch Rancheria of MeWuk Indians"
* CodeSystemRaceCodeVitalRecords#F42 "Modoc"
* CodeSystemRaceCodeVitalRecords#F43 "Oklahoma Modoc"
* CodeSystemRaceCodeVitalRecords#F46 "Mohegan"
* CodeSystemRaceCodeVitalRecords#F47 "Monacan Indian Nation"
* CodeSystemRaceCodeVitalRecords#F49 "Mono"
* CodeSystemRaceCodeVitalRecords#F50 "North Fork Rancheria"
* CodeSystemRaceCodeVitalRecords#F51 "Cold Springs Rancheria"
* CodeSystemRaceCodeVitalRecords#F52 "Big Sandy Rancheria"
* CodeSystemRaceCodeVitalRecords#F53 "Nanticoke"
* CodeSystemRaceCodeVitalRecords#F56 "Nanticoke LenniLenape"
* CodeSystemRaceCodeVitalRecords#F57 "Narragansett"
* CodeSystemRaceCodeVitalRecords#F62 "Alamo Navajo"
* CodeSystemRaceCodeVitalRecords#F63 "Tohajiileehee Navajo"
* CodeSystemRaceCodeVitalRecords#F64 "Navajo"
* CodeSystemRaceCodeVitalRecords#F65 "Ramah Navajo"
* CodeSystemRaceCodeVitalRecords#F71 "Nez Perce"
* CodeSystemRaceCodeVitalRecords#F75 "Hassanamisco Band of the Nipmuc Nation"
* CodeSystemRaceCodeVitalRecords#F76 "Chaubunagungameg Nipmuc"
* CodeSystemRaceCodeVitalRecords#F77 "Nomlaki"
* CodeSystemRaceCodeVitalRecords#F78 "Paskenta Band of Nomlaki Indians"
* CodeSystemRaceCodeVitalRecords#F80 "Alsea"
* CodeSystemRaceCodeVitalRecords#F81 "Celilo"
* CodeSystemRaceCodeVitalRecords#F82 "Columbia"
* CodeSystemRaceCodeVitalRecords#F83 "Kalapuya"
* CodeSystemRaceCodeVitalRecords#F84 "Molalla"
* CodeSystemRaceCodeVitalRecords#F85 "Talakamish"
* CodeSystemRaceCodeVitalRecords#F86 "Tenino"
* CodeSystemRaceCodeVitalRecords#F87 "Tillamook"
* CodeSystemRaceCodeVitalRecords#F88 "Wenatchee"
* CodeSystemRaceCodeVitalRecords#F95 "Omaha"
* CodeSystemRaceCodeVitalRecords#F99 "Oneida Tribe of Wisconsin"
* CodeSystemRaceCodeVitalRecords#G01 "Oregon Athabaskan"
* CodeSystemRaceCodeVitalRecords#G04 "Osage"
* CodeSystemRaceCodeVitalRecords#G10 "OtoeMissouria"
* CodeSystemRaceCodeVitalRecords#G14 "Burt Lake Ottawa"
* CodeSystemRaceCodeVitalRecords#G15 "Little River Band of Ottawa Indians of Michigan"
* CodeSystemRaceCodeVitalRecords#G16 "Oklahoma Ottawa"
* CodeSystemRaceCodeVitalRecords#G17 "Ottawa"
* CodeSystemRaceCodeVitalRecords#G18 "Little Traverse Bay Bands of Ottawa Indians of Michigan"
* CodeSystemRaceCodeVitalRecords#G19 "Grand River Band of Ottawa Indians"
* CodeSystemRaceCodeVitalRecords#G24 "Bridgeport Paiute Indian Colony"
* CodeSystemRaceCodeVitalRecords#G25 "Burns Paiute Tribe"
* CodeSystemRaceCodeVitalRecords#G26 "Cedarville Rancheria"
* CodeSystemRaceCodeVitalRecords#G27 "Fort Bidwell"
* CodeSystemRaceCodeVitalRecords#G28 "Fort Independence"
* CodeSystemRaceCodeVitalRecords#G29 "Kaibab Band of Paiute Indians"
* CodeSystemRaceCodeVitalRecords#G30 "Las Vegas Tribe of the Las Vegas Indian Colony"
* CodeSystemRaceCodeVitalRecords#G32 "Lovelock Paiute Tribe of the Lovelock Indian Colony"
* CodeSystemRaceCodeVitalRecords#G33 "Malheur Paiute"
* CodeSystemRaceCodeVitalRecords#G34 "Moapa Band of Paiute"
* CodeSystemRaceCodeVitalRecords#G35 "Northern Paiute"
* CodeSystemRaceCodeVitalRecords#G37 "Paiute"
* CodeSystemRaceCodeVitalRecords#G38 "Pyramid Lake"
* CodeSystemRaceCodeVitalRecords#G39 "San Juan Southern Paiute"
* CodeSystemRaceCodeVitalRecords#G40 "Southern Paiute"
* CodeSystemRaceCodeVitalRecords#G41 "Summit Lake"
* CodeSystemRaceCodeVitalRecords#G42 "Utu Utu Gwaitu Paiute"
* CodeSystemRaceCodeVitalRecords#G43 "Walker River"
* CodeSystemRaceCodeVitalRecords#G44 "Yerington Paiute"
* CodeSystemRaceCodeVitalRecords#G45 "Yahooskin Band of Snake"
* CodeSystemRaceCodeVitalRecords#G47 "Susanville"
* CodeSystemRaceCodeVitalRecords#G48 "Winnemucca"
* CodeSystemRaceCodeVitalRecords#G50 "Pamunkey Indian Tribe"
* CodeSystemRaceCodeVitalRecords#G53 "Indian Township"
* CodeSystemRaceCodeVitalRecords#G54 "Passamaquoddy"
* CodeSystemRaceCodeVitalRecords#G55 "Pleasant Point Passamaquoddy"
* CodeSystemRaceCodeVitalRecords#G61 "Oklahoma Pawnee"
* CodeSystemRaceCodeVitalRecords#G62 "Pawnee"
* CodeSystemRaceCodeVitalRecords#G68 "Penobscot"
* CodeSystemRaceCodeVitalRecords#G72 "Oklahoma Peoria"
* CodeSystemRaceCodeVitalRecords#G73 "Peoria"
* CodeSystemRaceCodeVitalRecords#G77 "Mashantucket Pequot"
* CodeSystemRaceCodeVitalRecords#G78 "Pequot"
* CodeSystemRaceCodeVitalRecords#G79 "Paucatuck Eastern Pequot"
* CodeSystemRaceCodeVitalRecords#G84 "Gila River Indian Community"
* CodeSystemRaceCodeVitalRecords#G85 "Pima"
* CodeSystemRaceCodeVitalRecords#G86 "Salt River PimaMaricopa"
* CodeSystemRaceCodeVitalRecords#G92 "Piscataway"
* CodeSystemRaceCodeVitalRecords#G96 "Pit River Tribe of California"
* CodeSystemRaceCodeVitalRecords#G97 "Alturas Indian Rancheria"
* CodeSystemRaceCodeVitalRecords#G98 "Redding Rancheria"
* CodeSystemRaceCodeVitalRecords#G99 "Big Valley Rancheria of Pomo and Pit River Indians"
* CodeSystemRaceCodeVitalRecords#H01 "Central Pomo"
* CodeSystemRaceCodeVitalRecords#H02 "Dry Creek"
* CodeSystemRaceCodeVitalRecords#H03 "Eastern Pomo"
* CodeSystemRaceCodeVitalRecords#H04 "Kashia Band of Pomo Indians of the Stewarts Point Rancheria"
* CodeSystemRaceCodeVitalRecords#H05 "Northern Pomo"
* CodeSystemRaceCodeVitalRecords#H06 "Pomo"
* CodeSystemRaceCodeVitalRecords#H07 "Scotts Valley Band"
* CodeSystemRaceCodeVitalRecords#H08 "Stonyford"
* CodeSystemRaceCodeVitalRecords#H09 "Elem Indian Colony of the Sulphur Bank"
* CodeSystemRaceCodeVitalRecords#H10 "Sherwood Valley Rancheria of Pomo Indians of California"
* CodeSystemRaceCodeVitalRecords#H11 "Guidiville Rancheria of California"
* CodeSystemRaceCodeVitalRecords#H12 "Lytton Rancheria of California"
* CodeSystemRaceCodeVitalRecords#H13 "Cloverdale Rancheria"
* CodeSystemRaceCodeVitalRecords#H14 "Coyote Valley Band"
* CodeSystemRaceCodeVitalRecords#H15 "Nebraska Ponca"
* CodeSystemRaceCodeVitalRecords#H16 "Oklahoma Ponca"
* CodeSystemRaceCodeVitalRecords#H17 "Ponca"
* CodeSystemRaceCodeVitalRecords#H21 "Citizen Potawatomi Nation"
* CodeSystemRaceCodeVitalRecords#H22 "Forest County"
* CodeSystemRaceCodeVitalRecords#H23 "Hannahville Indian Community of Wisconsin Potawatomi"
* CodeSystemRaceCodeVitalRecords#H24 "Huron Potawatomi"
* CodeSystemRaceCodeVitalRecords#H25 "Pokagon Band of Potawatomi Indians"
* CodeSystemRaceCodeVitalRecords#H26 "Potawatomi"
* CodeSystemRaceCodeVitalRecords#H27 "Prairie Band of Potawatomi Indians"
* CodeSystemRaceCodeVitalRecords#H28 "Wisconsin Potawatomi"
* CodeSystemRaceCodeVitalRecords#H34 "Powhatan"
* CodeSystemRaceCodeVitalRecords#H38 "Acoma"
* CodeSystemRaceCodeVitalRecords#H39 "Arizona Tewa"
* CodeSystemRaceCodeVitalRecords#H40 "Cochiti"
* CodeSystemRaceCodeVitalRecords#H41 "Hopi"
* CodeSystemRaceCodeVitalRecords#H42 "Isleta"
* CodeSystemRaceCodeVitalRecords#H43 "Jemez"
* CodeSystemRaceCodeVitalRecords#H44 "Keres"
* CodeSystemRaceCodeVitalRecords#H45 "Laguna"
* CodeSystemRaceCodeVitalRecords#H46 "Nambe"
* CodeSystemRaceCodeVitalRecords#H47 "Picuris"
* CodeSystemRaceCodeVitalRecords#H48 "Piro"
* CodeSystemRaceCodeVitalRecords#H49 "Pojoaque"
* CodeSystemRaceCodeVitalRecords#H50 "Pueblo"
* CodeSystemRaceCodeVitalRecords#H51 "San Felipe"
* CodeSystemRaceCodeVitalRecords#H52 "San Ildefonso"
* CodeSystemRaceCodeVitalRecords#H53 "San Juan Pueblo"
* CodeSystemRaceCodeVitalRecords#H54 "SAN JUAN DE GUADELUPE"
* CodeSystemRaceCodeVitalRecords#H55 "San Juan"
* CodeSystemRaceCodeVitalRecords#H56 "Sandia"
* CodeSystemRaceCodeVitalRecords#H57 "Santa Ana"
* CodeSystemRaceCodeVitalRecords#H58 "Santa Clara"
* CodeSystemRaceCodeVitalRecords#H59 "Santo Domingo"
* CodeSystemRaceCodeVitalRecords#H60 "Taos"
* CodeSystemRaceCodeVitalRecords#H61 "Tesuque"
* CodeSystemRaceCodeVitalRecords#H62 "Tewa"
* CodeSystemRaceCodeVitalRecords#H63 "Ysleta Del Sur Pueblo of Texas"
* CodeSystemRaceCodeVitalRecords#H64 "Zia"
* CodeSystemRaceCodeVitalRecords#H65 "Zuni"
* CodeSystemRaceCodeVitalRecords#H66 "Hopland Band of Pomo Indians"
* CodeSystemRaceCodeVitalRecords#H67 "Manchester Band of Pomo Indians of the ManchesterPoint Arena Racheria"
* CodeSystemRaceCodeVitalRecords#H68 "Middletown Rancheria of Pomo Indians"
* CodeSystemRaceCodeVitalRecords#H69 "Pinoleville Rancheria of Pomo Indians"
* CodeSystemRaceCodeVitalRecords#H70 "Marietta Band of Nooksack"
* CodeSystemRaceCodeVitalRecords#H71 "Duwamish"
* CodeSystemRaceCodeVitalRecords#H72 "Kikiallus"
* CodeSystemRaceCodeVitalRecords#H73 "Lower Skagit"
* CodeSystemRaceCodeVitalRecords#H74 "Muckleshoot"
* CodeSystemRaceCodeVitalRecords#H75 "Nisqually"
* CodeSystemRaceCodeVitalRecords#H76 "Nooksack"
* CodeSystemRaceCodeVitalRecords#H77 "Port Madison"
* CodeSystemRaceCodeVitalRecords#H78 "Puget Sound Salish"
* CodeSystemRaceCodeVitalRecords#H79 "Puyaliup"
* CodeSystemRaceCodeVitalRecords#H80 "Samish"
* CodeSystemRaceCodeVitalRecords#H81 "SaukSuiattle"
* CodeSystemRaceCodeVitalRecords#H82 "Skokomish"
* CodeSystemRaceCodeVitalRecords#H83 "Skykomish"
* CodeSystemRaceCodeVitalRecords#H84 "Snohomish"
* CodeSystemRaceCodeVitalRecords#H85 "Snoqualmie"
* CodeSystemRaceCodeVitalRecords#H86 "Squaxin Island"
* CodeSystemRaceCodeVitalRecords#H87 "Steilacoom"
* CodeSystemRaceCodeVitalRecords#H88 "Stillaguamish"
* CodeSystemRaceCodeVitalRecords#H89 "Suquamish"
* CodeSystemRaceCodeVitalRecords#H90 "Swinomish"
* CodeSystemRaceCodeVitalRecords#H91 "Tulalip"
* CodeSystemRaceCodeVitalRecords#H92 "Upper Skagit"
* CodeSystemRaceCodeVitalRecords#H93 "Potter Valley Rancheria of Pomo Indians"
* CodeSystemRaceCodeVitalRecords#H94 "Redwood Valley Rancheria of Pomo Indians"
* CodeSystemRaceCodeVitalRecords#H95 "Robinson Rancheria of Pomo Indians"
* CodeSystemRaceCodeVitalRecords#H96 "Upper Lake Band of Pomo Indians of Upper Lake Rancheria"
* CodeSystemRaceCodeVitalRecords#H97 "Quapaw"
* CodeSystemRaceCodeVitalRecords#I01 "TIGUA"
* CodeSystemRaceCodeVitalRecords#J01 "Quinault"
* CodeSystemRaceCodeVitalRecords#J05 "Rappahannock Indian Tribe"
* CodeSystemRaceCodeVitalRecords#J07 "RenoSparks"
* CodeSystemRaceCodeVitalRecords#J14 "Round Valley"
* CodeSystemRaceCodeVitalRecords#J19 "Sac and Fox Tribe of the Mississippi in Iowa"
* CodeSystemRaceCodeVitalRecords#J20 "Sac and Fox Nation of Missouri in Kansas and Nebraska"
* CodeSystemRaceCodeVitalRecords#J21 "Sac and Fox Nation, Oklahoma"
* CodeSystemRaceCodeVitalRecords#J22 "Sac and Fox"
* CodeSystemRaceCodeVitalRecords#J28 "Salinan"
* CodeSystemRaceCodeVitalRecords#J31 "Salish"
* CodeSystemRaceCodeVitalRecords#J35 "Salish and Kootenai"
* CodeSystemRaceCodeVitalRecords#J36 "Pondre Band of Salish and Kootenai"
* CodeSystemRaceCodeVitalRecords#J39 "Schaghticoke"
* CodeSystemRaceCodeVitalRecords#J47 "Big Cypress"
* CodeSystemRaceCodeVitalRecords#J48 "Brighton"
* CodeSystemRaceCodeVitalRecords#J49 "Florida Seminole"
* CodeSystemRaceCodeVitalRecords#J50 "Hollywood Seminole"
* CodeSystemRaceCodeVitalRecords#J51 "Oklahoma Seminole"
* CodeSystemRaceCodeVitalRecords#J52 "Seminole"
* CodeSystemRaceCodeVitalRecords#J53 "Dania Seminole"
* CodeSystemRaceCodeVitalRecords#J54 "Tampa Seminole"
* CodeSystemRaceCodeVitalRecords#J58 "San Manual Band"
* CodeSystemRaceCodeVitalRecords#J59 "Serrano"
* CodeSystemRaceCodeVitalRecords#J62 "Shasta"
* CodeSystemRaceCodeVitalRecords#J63 "Quartz Valley"
* CodeSystemRaceCodeVitalRecords#J66 "Absentee Shawnee Tribe of Indians of Oklahoma"
* CodeSystemRaceCodeVitalRecords#J67 "Eastern Shawnee"
* CodeSystemRaceCodeVitalRecords#J68 "Shawnee"
* CodeSystemRaceCodeVitalRecords#J69 "Piqua Sept of Ohio Shawnee"
* CodeSystemRaceCodeVitalRecords#J74 "Shinnecock"
* CodeSystemRaceCodeVitalRecords#J78 "Shoalwater Bay"
* CodeSystemRaceCodeVitalRecords#J81 "Duckwater"
* CodeSystemRaceCodeVitalRecords#J82 "Ely"
* CodeSystemRaceCodeVitalRecords#J83 "Goshute"
* CodeSystemRaceCodeVitalRecords#J84 "PANAMINT"
* CodeSystemRaceCodeVitalRecords#J85 "Shoshone"
* CodeSystemRaceCodeVitalRecords#J86 "Skull Valley Band of Goshute Indians"
* CodeSystemRaceCodeVitalRecords#J88 "Death Valley TimbiSha Shoshone"
* CodeSystemRaceCodeVitalRecords#J89 "Northwestern Band of Shoshoni Nation of Utah"
* CodeSystemRaceCodeVitalRecords#J90 "Wind River Shoshone"
* CodeSystemRaceCodeVitalRecords#J91 "Yomba"
* CodeSystemRaceCodeVitalRecords#J93 "TeMoak Tribes of Western Shoshone Indians"
* CodeSystemRaceCodeVitalRecords#J94 "Battle Mountain"
* CodeSystemRaceCodeVitalRecords#J95 "Elko"
* CodeSystemRaceCodeVitalRecords#J96 "South Fork"
* CodeSystemRaceCodeVitalRecords#J97 "Wells Band"
* CodeSystemRaceCodeVitalRecords#J98 "Ruby Valley"
* CodeSystemRaceCodeVitalRecords#J99 "Odgers Ranch"
* CodeSystemRaceCodeVitalRecords#K01 "Duck Valley"
* CodeSystemRaceCodeVitalRecords#K02 "Fallen"
* CodeSystemRaceCodeVitalRecords#K03 "Fort McDermitt Paiute and Shoshone Tribes"
* CodeSystemRaceCodeVitalRecords#K04 "Shoshone Paiute"
* CodeSystemRaceCodeVitalRecords#K05 "Bishop"
* CodeSystemRaceCodeVitalRecords#K06 "Lone Pine"
* CodeSystemRaceCodeVitalRecords#K07 "Big Pine Band of Owens Valley PaiuteShoshone"
* CodeSystemRaceCodeVitalRecords#K10 "Confederated Tribes of the Siletz Reservation"
* CodeSystemRaceCodeVitalRecords#K16 "Blackfoot Sioux"
* CodeSystemRaceCodeVitalRecords#K17 "Brule Sioux"
* CodeSystemRaceCodeVitalRecords#K18 "Cheyenne River Sioux"
* CodeSystemRaceCodeVitalRecords#K19 "Crow Creek Sioux"
* CodeSystemRaceCodeVitalRecords#K20 "Dakota Sioux"
* CodeSystemRaceCodeVitalRecords#K21 "Flandreau Santee Sioux"
* CodeSystemRaceCodeVitalRecords#K22 "Fort Peck Sioux"
* CodeSystemRaceCodeVitalRecords#K23 "Lake Traverse Sioux"
* CodeSystemRaceCodeVitalRecords#K24 "Lower Brule Sioux"
* CodeSystemRaceCodeVitalRecords#K25 "Lower Sioux Indian Community of Minnesota Mdewakanton Sioux"
* CodeSystemRaceCodeVitalRecords#K26 "Mdewakanton Sioux"
* CodeSystemRaceCodeVitalRecords#K27 "Miniconjou"
* CodeSystemRaceCodeVitalRecords#K28 "Oglala Sioux"
* CodeSystemRaceCodeVitalRecords#K29 "Pine Ridge Sioux"
* CodeSystemRaceCodeVitalRecords#K30 "Pipestone Sioux"
* CodeSystemRaceCodeVitalRecords#K31 "Prairie Island Sioux"
* CodeSystemRaceCodeVitalRecords#K32 "Shakopee Mdewakanton Sioux Community"
* CodeSystemRaceCodeVitalRecords#K33 "Rosebud Sioux"
* CodeSystemRaceCodeVitalRecords#K34 "Sans Arc Sioux"
* CodeSystemRaceCodeVitalRecords#K35 "Santee Sioux of Nebraska"
* CodeSystemRaceCodeVitalRecords#K36 "Sioux"
* CodeSystemRaceCodeVitalRecords#K37 "SissetonWahpeton"
* CodeSystemRaceCodeVitalRecords#K38 "Sisseton Sioux"
* CodeSystemRaceCodeVitalRecords#K39 "Spirit Lake Sioux"
* CodeSystemRaceCodeVitalRecords#K40 "Standing Rock Sioux"
* CodeSystemRaceCodeVitalRecords#K41 "Teton Sioux"
* CodeSystemRaceCodeVitalRecords#K42 "Two Kettle Sioux"
* CodeSystemRaceCodeVitalRecords#K43 "Upper Sioux"
* CodeSystemRaceCodeVitalRecords#K44 "Wahpekute Sioux"
* CodeSystemRaceCodeVitalRecords#K45 "Wahpeton Sioux"
* CodeSystemRaceCodeVitalRecords#K46 "Wazhaza Sioux"
* CodeSystemRaceCodeVitalRecords#K47 "Yankton Sioux"
* CodeSystemRaceCodeVitalRecords#K48 "Yanktonai Sioux"
* CodeSystemRaceCodeVitalRecords#K54 "Siuslaw"
* CodeSystemRaceCodeVitalRecords#K59 "Spokane"
* CodeSystemRaceCodeVitalRecords#K67 "StockbridgeMunsee Community of Mohican Indians of Wisconsin"
* CodeSystemRaceCodeVitalRecords#K77 "AkChin"
* CodeSystemRaceCodeVitalRecords#K78 "Gila Bend"
* CodeSystemRaceCodeVitalRecords#K79 "San Xavier"
* CodeSystemRaceCodeVitalRecords#K80 "Sells"
* CodeSystemRaceCodeVitalRecords#K81 "Tohono O'Odham"
* CodeSystemRaceCodeVitalRecords#K87 "Tolowa"
* CodeSystemRaceCodeVitalRecords#K88 "Big Lagoon Rancheria"
* CodeSystemRaceCodeVitalRecords#K89 "Elk Valley Rancheria"
* CodeSystemRaceCodeVitalRecords#K90 "Tonkawa"
* CodeSystemRaceCodeVitalRecords#K93 "CherAe Indian Community of Trinidad Rancheria"
* CodeSystemRaceCodeVitalRecords#K94 "Tygh"
* CodeSystemRaceCodeVitalRecords#K97 "Umatilla"
* CodeSystemRaceCodeVitalRecords#L01 "Cow Creek Umpqua"
* CodeSystemRaceCodeVitalRecords#L02 "Umpqua"
* CodeSystemRaceCodeVitalRecords#L06 "Alien Canyon"
* CodeSystemRaceCodeVitalRecords#L07 "Uintah Ute"
* CodeSystemRaceCodeVitalRecords#L08 "Ute Mountain"
* CodeSystemRaceCodeVitalRecords#L09 "Ute"
* CodeSystemRaceCodeVitalRecords#L10 "Southern Ute"
* CodeSystemRaceCodeVitalRecords#L15 "Wailaki"
* CodeSystemRaceCodeVitalRecords#L19 "WallaWalla"
* CodeSystemRaceCodeVitalRecords#L22 "Gay Head Wampanoag"
* CodeSystemRaceCodeVitalRecords#L23 "Mashpee Wampanoag"
* CodeSystemRaceCodeVitalRecords#L24 "Wampanoag"
* CodeSystemRaceCodeVitalRecords#L25 "Seaconeke Wampanoag"
* CodeSystemRaceCodeVitalRecords#L26 "Pocasset Wampanoag"
* CodeSystemRaceCodeVitalRecords#L28 "Warm Springs"
* CodeSystemRaceCodeVitalRecords#L34 "Wascopum"
* CodeSystemRaceCodeVitalRecords#L38 "Alpine"
* CodeSystemRaceCodeVitalRecords#L39 "Carson Colony"
* CodeSystemRaceCodeVitalRecords#L40 "Dresslerville Colony"
* CodeSystemRaceCodeVitalRecords#L41 "Washoe"
* CodeSystemRaceCodeVitalRecords#L42 "Stewart Community"
* CodeSystemRaceCodeVitalRecords#L43 "Woodsfords Community"
* CodeSystemRaceCodeVitalRecords#L47 "Wichita"
* CodeSystemRaceCodeVitalRecords#L48 "Keechi"
* CodeSystemRaceCodeVitalRecords#L49 "Waco"
* CodeSystemRaceCodeVitalRecords#L50 "Tawakonie"
* CodeSystemRaceCodeVitalRecords#L52 "Wind River"
* CodeSystemRaceCodeVitalRecords#L55 "HoChunk Nation of Wisconsin"
* CodeSystemRaceCodeVitalRecords#L56 "Nebraska Winnebago"
* CodeSystemRaceCodeVitalRecords#L57 "Winnebago"
* CodeSystemRaceCodeVitalRecords#L66 "Wintun"
* CodeSystemRaceCodeVitalRecords#L67 "Cachil Dehe Band of Wintun Indians of the Colusa Rancheria"
* CodeSystemRaceCodeVitalRecords#L68 "Cortina Indian Rancheria of Wintun Indians"
* CodeSystemRaceCodeVitalRecords#L69 "Rumsey Indian Rancheria of Wintun Indians"
* CodeSystemRaceCodeVitalRecords#L71 "Grindstone Indian Rancheria of WintunWailaki Indians"
* CodeSystemRaceCodeVitalRecords#L72 "Table Bluff"
* CodeSystemRaceCodeVitalRecords#L73 "Wiyot"
* CodeSystemRaceCodeVitalRecords#L74 "Blue Lake Rancheria"
* CodeSystemRaceCodeVitalRecords#L79 "Yakama"
* CodeSystemRaceCodeVitalRecords#L85 "Yakama Cowlitz"
* CodeSystemRaceCodeVitalRecords#L91 "Barrio Libre"
* CodeSystemRaceCodeVitalRecords#L92 "Pascua Yaqui"
* CodeSystemRaceCodeVitalRecords#L93 "Yaqui"
* CodeSystemRaceCodeVitalRecords#M01 "Yavapai Apache"
* CodeSystemRaceCodeVitalRecords#M07 "Picayune Rancheria of Chukchansi Indians"
* CodeSystemRaceCodeVitalRecords#M08 "Tachi"
* CodeSystemRaceCodeVitalRecords#M09 "Tule River"
* CodeSystemRaceCodeVitalRecords#M10 "Yokuts"
* CodeSystemRaceCodeVitalRecords#M11 "Table Mountain Rancheria"
* CodeSystemRaceCodeVitalRecords#M16 "Yuchi"
* CodeSystemRaceCodeVitalRecords#M17 "Tia"
* CodeSystemRaceCodeVitalRecords#M18 "Wilono"
* CodeSystemRaceCodeVitalRecords#M19 "Anstohini"
* CodeSystemRaceCodeVitalRecords#M22 "Cocopah Tribe of Arizona"
* CodeSystemRaceCodeVitalRecords#M23 "Havasupai"
* CodeSystemRaceCodeVitalRecords#M24 "Hualapai"
* CodeSystemRaceCodeVitalRecords#M25 "Maricopa"
* CodeSystemRaceCodeVitalRecords#M26 "Fort Mojave Indian Tribe of Arizona"
* CodeSystemRaceCodeVitalRecords#M27 "Quechan"
* CodeSystemRaceCodeVitalRecords#M28 "YavapaiPrescott Tribe of the Yavapai Reservation"
* CodeSystemRaceCodeVitalRecords#M29 "YUMAN"
* CodeSystemRaceCodeVitalRecords#M34 "Resighini Rancheria"
* CodeSystemRaceCodeVitalRecords#M35 "Yurok"
* CodeSystemRaceCodeVitalRecords#M36 "COAST YUROK"
* CodeSystemRaceCodeVitalRecords#M41 "American Indian"
* CodeSystemRaceCodeVitalRecords#M42 "Tribal Response, NEC"
* CodeSystemRaceCodeVitalRecords#M43 "KUTENAI INDIAN"
* CodeSystemRaceCodeVitalRecords#M44 "Alaska Indian"
* CodeSystemRaceCodeVitalRecords#M47 "Alaska Native"
* CodeSystemRaceCodeVitalRecords#M48 "Other Alaskan, NEC"
* CodeSystemRaceCodeVitalRecords#M52 "Ahtna"
* CodeSystemRaceCodeVitalRecords#M53 "Alaskan Athabascan"
* CodeSystemRaceCodeVitalRecords#M54 "Alatna Village"
* CodeSystemRaceCodeVitalRecords#M55 "Alexander"
* CodeSystemRaceCodeVitalRecords#M56 "Allakaket Village"
* CodeSystemRaceCodeVitalRecords#M57 "Alanvik"
* CodeSystemRaceCodeVitalRecords#M58 "Anvik Village"
* CodeSystemRaceCodeVitalRecords#M59 "Arctic Village"
* CodeSystemRaceCodeVitalRecords#M60 "Beaver Village"
* CodeSystemRaceCodeVitalRecords#M61 "Birch Crcek Village"
* CodeSystemRaceCodeVitalRecords#M62 "Native Village of Cantwell"
* CodeSystemRaceCodeVitalRecords#M63 "Chalkyitsik Village"
* CodeSystemRaceCodeVitalRecords#M64 "Chickaloon Native Village"
* CodeSystemRaceCodeVitalRecords#M65 "Native Village of Chistochina"
* CodeSystemRaceCodeVitalRecords#M66 "Native Village of Chitina"
* CodeSystemRaceCodeVitalRecords#M67 "Circle Native Community"
* CodeSystemRaceCodeVitalRecords#M68 "COOK INLET"
* CodeSystemRaceCodeVitalRecords#M69 "COPPER CENTER"
* CodeSystemRaceCodeVitalRecords#M70 "Copper River"
* CodeSystemRaceCodeVitalRecords#M71 "Village of Dot Lake"
* CodeSystemRaceCodeVitalRecords#M72 "Doyon"
* CodeSystemRaceCodeVitalRecords#M73 "Native Village of Eagle"
* CodeSystemRaceCodeVitalRecords#M74 "Ekiutna Native Village"
* CodeSystemRaceCodeVitalRecords#M75 "Evansville Village"
* CodeSystemRaceCodeVitalRecords#M76 "Native Village of Fort Yukon"
* CodeSystemRaceCodeVitalRecords#M77 "Native Village of Gakona"
* CodeSystemRaceCodeVitalRecords#M78 "Galena Village"
* CodeSystemRaceCodeVitalRecords#M79 "Organized Village of Grayling"
* CodeSystemRaceCodeVitalRecords#M80 "Gulkana Village"
* CodeSystemRaceCodeVitalRecords#M81 "Healy Lake Village"
* CodeSystemRaceCodeVitalRecords#M82 "Holy Cross Village"
* CodeSystemRaceCodeVitalRecords#M83 "Hughes Village"
* CodeSystemRaceCodeVitalRecords#M84 "Huslia Village"
* CodeSystemRaceCodeVitalRecords#M85 "Village of Iliamna"
* CodeSystemRaceCodeVitalRecords#M86 "Village ofKaltag"
* CodeSystemRaceCodeVitalRecords#M87 "Native Village of Kluti Kaah"
* CodeSystemRaceCodeVitalRecords#M88 "Knik Tribe"
* CodeSystemRaceCodeVitalRecords#M89 "Koyukuk Native Village"
* CodeSystemRaceCodeVitalRecords#M90 "Lake Minchumina"
* CodeSystemRaceCodeVitalRecords#M91 "Lime Village"
* CodeSystemRaceCodeVitalRecords#M92 "McGrath Native Village"
* CodeSystemRaceCodeVitalRecords#M93 "Manley Hot Springs Village"
* CodeSystemRaceCodeVitalRecords#M94 "Mentasta Traditional Council"
* CodeSystemRaceCodeVitalRecords#M95 "Native Village of Minto"
* CodeSystemRaceCodeVitalRecords#M96 "Nenana Native Association"
* CodeSystemRaceCodeVitalRecords#M97 "Nikolai Village"
* CodeSystemRaceCodeVitalRecords#M98 "Ninilchik Village Traditional Council"
* CodeSystemRaceCodeVitalRecords#M99 "Nondalton Village"
* CodeSystemRaceCodeVitalRecords#N01 "Northway Village"
* CodeSystemRaceCodeVitalRecords#N02 "Nulato Village"
* CodeSystemRaceCodeVitalRecords#N03 "Pedro Bay Village"
* CodeSystemRaceCodeVitalRecords#N04 "Rampart Village"
* CodeSystemRaceCodeVitalRecords#N05 "Native Village of Ruby"
* CodeSystemRaceCodeVitalRecords#N06 "Village of Salamatoff"
* CodeSystemRaceCodeVitalRecords#N07 "Seldovia Village Tribe"
* CodeSystemRaceCodeVitalRecords#N08 "Slana"
* CodeSystemRaceCodeVitalRecords#N09 "Shageluk Native Village"
* CodeSystemRaceCodeVitalRecords#N10 "Native Village of Stevens"
* CodeSystemRaceCodeVitalRecords#N11 "Village of Stony River"
* CodeSystemRaceCodeVitalRecords#N12 "Takotna Village"
* CodeSystemRaceCodeVitalRecords#N13 "Native Village of Tanacross"
* CodeSystemRaceCodeVitalRecords#N14 "Tanaina"
* CodeSystemRaceCodeVitalRecords#N15 "Native Village of Tanana"
* CodeSystemRaceCodeVitalRecords#N16 "Tanana Chiefs"
* CodeSystemRaceCodeVitalRecords#N17 "Native Village of Tazlina"
* CodeSystemRaceCodeVitalRecords#N18 "Telida Village"
* CodeSystemRaceCodeVitalRecords#N19 "Native Village of Tetlin"
* CodeSystemRaceCodeVitalRecords#N20 "Tok"
* CodeSystemRaceCodeVitalRecords#N21 "Native Village of Tyonek"
* CodeSystemRaceCodeVitalRecords#N22 "Village of Venetie"
* CodeSystemRaceCodeVitalRecords#N23 "Wiseman"
* CodeSystemRaceCodeVitalRecords#N24 "Kenaitze Indian Tribe"
* CodeSystemRaceCodeVitalRecords#N27 "TLINGIT-HAIDA"
* CodeSystemRaceCodeVitalRecords#N28 "Angoon Community Association"
* CodeSystemRaceCodeVitalRecords#N29 "Central Council of the Tlingit and Haida Indian Tribes"
* CodeSystemRaceCodeVitalRecords#N30 "Chilkat Indian Village"
* CodeSystemRaceCodeVitalRecords#N31 "Chilkoot Indian Association"
* CodeSystemRaceCodeVitalRecords#N32 "Craig Community Association"
* CodeSystemRaceCodeVitalRecords#N33 "Douglas Indian Association"
* CodeSystemRaceCodeVitalRecords#N34 "Haida"
* CodeSystemRaceCodeVitalRecords#N35 "Hoonah Indian Association"
* CodeSystemRaceCodeVitalRecords#N36 "Hydaburg Cooperative Association"
* CodeSystemRaceCodeVitalRecords#N37 "Organized Village of Kake"
* CodeSystemRaceCodeVitalRecords#N38 "Organized Village of Kasaan"
* CodeSystemRaceCodeVitalRecords#N40 "Ketchikan Indian Corporation"
* CodeSystemRaceCodeVitalRecords#N41 "Klawock Cooperative Association"
* CodeSystemRaceCodeVitalRecords#N43 "Pelican"
* CodeSystemRaceCodeVitalRecords#N44 "Petersburg Indian Association"
* CodeSystemRaceCodeVitalRecords#N45 "Organized Village of Saxman"
* CodeSystemRaceCodeVitalRecords#N46 "Sitka Tribe of Alaska"
* CodeSystemRaceCodeVitalRecords#N47 "Tenakee Springs"
* CodeSystemRaceCodeVitalRecords#N48 "Tlingit"
* CodeSystemRaceCodeVitalRecords#N49 "Wrangell Cooperative Association"
* CodeSystemRaceCodeVitalRecords#N50 "Yakutat Tlingit Tribe"
* CodeSystemRaceCodeVitalRecords#N51 "Juneau"
* CodeSystemRaceCodeVitalRecords#N56 "Metlakatia Indian Community, Annette Island Reserve"
* CodeSystemRaceCodeVitalRecords#N57 "Tsimshian"
* CodeSystemRaceCodeVitalRecords#N59 "Sealaska"
* CodeSystemRaceCodeVitalRecords#N60 "Sealaska Corporation"
* CodeSystemRaceCodeVitalRecords#N64 "Southeast Alaska"
* CodeSystemRaceCodeVitalRecords#N65 "Skagway Village"
* CodeSystemRaceCodeVitalRecords#N67 "American Eskimo"
* CodeSystemRaceCodeVitalRecords#N68 "Eskimo"
* CodeSystemRaceCodeVitalRecords#N69 "Greenland Eskimo"
* CodeSystemRaceCodeVitalRecords#N75 "Inuit"
* CodeSystemRaceCodeVitalRecords#N78 "INUPIAT ESKIMO"
* CodeSystemRaceCodeVitalRecords#N79 "Native Village of Ambler"
* CodeSystemRaceCodeVitalRecords#N80 "Anaktuvuk"
* CodeSystemRaceCodeVitalRecords#N81 "Village of Anaktuvuk Pass"
* CodeSystemRaceCodeVitalRecords#N82 "Inupiat Community of the Arctic Slope"
* CodeSystemRaceCodeVitalRecords#N83 "Arctic Slope Corporation"
* CodeSystemRaceCodeVitalRecords#N84 "Atqasuk Village"
* CodeSystemRaceCodeVitalRecords#N85 "Native Village of Barrow hilipiat Traditional Government"
* CodeSystemRaceCodeVitalRecords#N86 "Bering Straits Inupiat"
* CodeSystemRaceCodeVitalRecords#N87 "Native Village of Brevig Mission"
* CodeSystemRaceCodeVitalRecords#N88 "Native Village ofBuckland"
* CodeSystemRaceCodeVitalRecords#N89 "Chinik Eskimo Community"
* CodeSystemRaceCodeVitalRecords#N90 "Native Village of Council"
* CodeSystemRaceCodeVitalRecords#N91 "Native Village of Deering"
* CodeSystemRaceCodeVitalRecords#N92 "Native Village of Elim"
* CodeSystemRaceCodeVitalRecords#N93 "GOLOVIN"
* CodeSystemRaceCodeVitalRecords#N94 "Native Village of Diomede"
* CodeSystemRaceCodeVitalRecords#N95 "Inupiaq"
* CodeSystemRaceCodeVitalRecords#N96 "Inupiat"
* CodeSystemRaceCodeVitalRecords#N97 "Kaktovik Village"
* CodeSystemRaceCodeVitalRecords#N98 "Kawerak"
* CodeSystemRaceCodeVitalRecords#N99 "Native Village of Kiana"
* CodeSystemRaceCodeVitalRecords#P01 "Native Village of Kivalina"
* CodeSystemRaceCodeVitalRecords#P02 "Native Village of Kobuk"
* CodeSystemRaceCodeVitalRecords#P03 "Native Village of Kotzebue"
* CodeSystemRaceCodeVitalRecords#P04 "Native Village of Koyuk"
* CodeSystemRaceCodeVitalRecords#P05 "Kwiguk"
* CodeSystemRaceCodeVitalRecords#P06 "Mauneluk Inupiat"
* CodeSystemRaceCodeVitalRecords#P07 "Nana Inupiat"
* CodeSystemRaceCodeVitalRecords#P08 "Native Village of Noatak"
* CodeSystemRaceCodeVitalRecords#P09 "Nome Eskimo Community"
* CodeSystemRaceCodeVitalRecords#P10 "Noorvik Native Community"
* CodeSystemRaceCodeVitalRecords#P11 "Native Village of Nuiqsut"
* CodeSystemRaceCodeVitalRecords#P12 "Native Village of Point Hope"
* CodeSystemRaceCodeVitalRecords#P13 "Native Village of Point Lay"
* CodeSystemRaceCodeVitalRecords#P14 "Native Village of Selawik"
* CodeSystemRaceCodeVitalRecords#P15 "Native Village of Shaktoolik"
* CodeSystemRaceCodeVitalRecords#P16 "Native Village of Shishmaref"
* CodeSystemRaceCodeVitalRecords#P17 "Native Village of Shungnak"
* CodeSystemRaceCodeVitalRecords#P18 "Village of Solomon"
* CodeSystemRaceCodeVitalRecords#P19 "Native Village of Teller"
* CodeSystemRaceCodeVitalRecords#P20 "Native Village of Unalakleet"
* CodeSystemRaceCodeVitalRecords#P21 "Village of Wainwright"
* CodeSystemRaceCodeVitalRecords#P22 "Village of Wales"
* CodeSystemRaceCodeVitalRecords#P23 "Village of White Mountain"
* CodeSystemRaceCodeVitalRecords#P24 "White Mountain Inupiat"
* CodeSystemRaceCodeVitalRecords#P25 "Native Village of Mary's Igloo"
* CodeSystemRaceCodeVitalRecords#P26 "King Island Native Community"
* CodeSystemRaceCodeVitalRecords#P29 "SIBERIAN ESKIMO"
* CodeSystemRaceCodeVitalRecords#P30 "Native Village of Gambell"
* CodeSystemRaceCodeVitalRecords#P31 "Native Village of Savoonga"
* CodeSystemRaceCodeVitalRecords#P32 "Siberian Yupik"
* CodeSystemRaceCodeVitalRecords#P36 "Chevak Native Village"
* CodeSystemRaceCodeVitalRecords#P37 "Native Village of Mekoryuk"
* CodeSystemRaceCodeVitalRecords#P38 "Akiachak Native Community"
* CodeSystemRaceCodeVitalRecords#P39 "Akiak Native Community"
* CodeSystemRaceCodeVitalRecords#P40 "Village of Alakanuk"
* CodeSystemRaceCodeVitalRecords#P41 "Native Village of Aleknagik"
* CodeSystemRaceCodeVitalRecords#P42 "Yupiit of Andreafski"
* CodeSystemRaceCodeVitalRecords#P43 "Village of Aniak"
* CodeSystemRaceCodeVitalRecords#P44 "Village of Atmautluak"
* CodeSystemRaceCodeVitalRecords#P45 "Orutsararmuit Native Village"
* CodeSystemRaceCodeVitalRecords#P46 "Village of Bill Moore's Slough"
* CodeSystemRaceCodeVitalRecords#P47 "Bristol Bay"
* CodeSystemRaceCodeVitalRecords#P48 "Calista"
* CodeSystemRaceCodeVitalRecords#P49 "Village of Chefomak"
* CodeSystemRaceCodeVitalRecords#P50 "Native Village of Hamilton"
* CodeSystemRaceCodeVitalRecords#P51 "Native Village of Chuathbaluk"
* CodeSystemRaceCodeVitalRecords#P52 "Village of Clark's Point"
* CodeSystemRaceCodeVitalRecords#P53 "Village of Crooked Creek"
* CodeSystemRaceCodeVitalRecords#P54 "Curyung Tribal Council"
* CodeSystemRaceCodeVitalRecords#P55 "Native Village of Eek"
* CodeSystemRaceCodeVitalRecords#P56 "Native Village of Ekuk"
* CodeSystemRaceCodeVitalRecords#P57 "Ekwok Village"
* CodeSystemRaceCodeVitalRecords#P58 "Emmonak Village"
* CodeSystemRaceCodeVitalRecords#P59 "Native Village of Goodnews Bay"
* CodeSystemRaceCodeVitalRecords#P60 "Native Village of Hooper Bay"
* CodeSystemRaceCodeVitalRecords#P61 "Iqurmuit Traditional Council"
* CodeSystemRaceCodeVitalRecords#P62 "Village of Kalskag"
* CodeSystemRaceCodeVitalRecords#P63 "Native Village of Kasigluk"
* CodeSystemRaceCodeVitalRecords#P64 "Native Village of Kipnuk"
* CodeSystemRaceCodeVitalRecords#P65 "New Koliganek Village Council"
* CodeSystemRaceCodeVitalRecords#P66 "Native Village of Kongiganak"
* CodeSystemRaceCodeVitalRecords#P67 "Village of Kotlik"
* CodeSystemRaceCodeVitalRecords#P68 "Organized Village of Kwethluk"
* CodeSystemRaceCodeVitalRecords#P69 "Native Village of Kwigillingok"
* CodeSystemRaceCodeVitalRecords#P70 "Levelock Village"
* CodeSystemRaceCodeVitalRecords#P71 "Village of Lower Kalskag"
* CodeSystemRaceCodeVitalRecords#P72 "Manokotak Village"
* CodeSystemRaceCodeVitalRecords#P73 "Native Village of Marshall"
* CodeSystemRaceCodeVitalRecords#P74 "Village of Ohogamiut"
* CodeSystemRaceCodeVitalRecords#P75 "Asa'carsarmiut Tribe"
* CodeSystemRaceCodeVitalRecords#P76 "Naknek Native Village"
* CodeSystemRaceCodeVitalRecords#P77 "Native Village of Napaimute"
* CodeSystemRaceCodeVitalRecords#P78 "Native Village of Napakiak"
* CodeSystemRaceCodeVitalRecords#P79 "Native Village of Napaskiak"
* CodeSystemRaceCodeVitalRecords#P80 "Newhalen Village"
* CodeSystemRaceCodeVitalRecords#P81 "New Stuyahok Village"
* CodeSystemRaceCodeVitalRecords#P82 "Newtek Village"
* CodeSystemRaceCodeVitalRecords#P83 "Native Village of Nightmute"
* CodeSystemRaceCodeVitalRecords#P84 "Native Village of Nunapitchuk"
* CodeSystemRaceCodeVitalRecords#P85 "Oscarville Traditional Village"
* CodeSystemRaceCodeVitalRecords#P86 "Pilot Station Traditional Village"
* CodeSystemRaceCodeVitalRecords#P87 "Native Village of Pitkas Point"
* CodeSystemRaceCodeVitalRecords#P88 "Platinum Traditional Village"
* CodeSystemRaceCodeVitalRecords#P89 "Portage Creek Village"
* CodeSystemRaceCodeVitalRecords#P90 "Native Village of Kwinhagak"
* CodeSystemRaceCodeVitalRecords#P91 "Village of Red Devil"
* CodeSystemRaceCodeVitalRecords#P92 "Native Village of Saint Michael"
* CodeSystemRaceCodeVitalRecords#P93 "Native Village of Scammon Bay"
* CodeSystemRaceCodeVitalRecords#P94 "Native Village of Sheldon's Point"
* CodeSystemRaceCodeVitalRecords#P95 "Village of Sleetmute"
* CodeSystemRaceCodeVitalRecords#P96 "Stebbins Community Association"
* CodeSystemRaceCodeVitalRecords#P97 "Traditional Village ofTogiak"
* CodeSystemRaceCodeVitalRecords#P98 "Native Village of Toksook Bay"
* CodeSystemRaceCodeVitalRecords#P99 "Tuluksak Native Community"
* CodeSystemRaceCodeVitalRecords#Q01 "MOUNTAIN VILLAGE"
* CodeSystemRaceCodeVitalRecords#R01 "Native Village of Tuntutuliak"
* CodeSystemRaceCodeVitalRecords#R02 "Native Village of Tununak"
* CodeSystemRaceCodeVitalRecords#R03 "Twin Hills Village"
* CodeSystemRaceCodeVitalRecords#R04 "Yup'ik"
* CodeSystemRaceCodeVitalRecords#R05 "Yup'ik Eskimo"
* CodeSystemRaceCodeVitalRecords#R06 "Native Village of Georgetown"
* CodeSystemRaceCodeVitalRecords#R07 "Algaaciq Native Village"
* CodeSystemRaceCodeVitalRecords#R08 "Umkumiute Native Village"
* CodeSystemRaceCodeVitalRecords#R09 "Chuloonawick Native Village"
* CodeSystemRaceCodeVitalRecords#R11 "Aleut"
* CodeSystemRaceCodeVitalRecords#R15 "ALUTIIQ ALEUT"
* CodeSystemRaceCodeVitalRecords#R16 "Alutiiq"
* CodeSystemRaceCodeVitalRecords#R17 "Village of Afognak"
* CodeSystemRaceCodeVitalRecords#R18 "Native Village of Tatitlek"
* CodeSystemRaceCodeVitalRecords#R19 "Ugashik Village"
* CodeSystemRaceCodeVitalRecords#R28 "Bristol Bay Aleut"
* CodeSystemRaceCodeVitalRecords#R29 "Native Village of Chignik"
* CodeSystemRaceCodeVitalRecords#R30 "Chignik Lake Village"
* CodeSystemRaceCodeVitalRecords#R31 "Egegik Village"
* CodeSystemRaceCodeVitalRecords#R32 "Igiugig Village"
* CodeSystemRaceCodeVitalRecords#R33 "Ivanoff Bay Village"
* CodeSystemRaceCodeVitalRecords#R34 "King Salmon"
* CodeSystemRaceCodeVitalRecords#R35 "Kokhanok Village"
* CodeSystemRaceCodeVitalRecords#R36 "Native Village of Perryville"
* CodeSystemRaceCodeVitalRecords#R37 "Native Village of Pilot Point"
* CodeSystemRaceCodeVitalRecords#R38 "Native Village of Port Heiden"
* CodeSystemRaceCodeVitalRecords#R43 "Native Village of Chanega"
* CodeSystemRaceCodeVitalRecords#R44 "Chugach Aleut"
* CodeSystemRaceCodeVitalRecords#R45 "Chugach Corporation"
* CodeSystemRaceCodeVitalRecords#R46 "Native Village of Nanwaiek"
* CodeSystemRaceCodeVitalRecords#R47 "Native Village of Port Graham"
* CodeSystemRaceCodeVitalRecords#R51 "Eyak"
* CodeSystemRaceCodeVitalRecords#R55 "Native Village of Akhiok"
* CodeSystemRaceCodeVitalRecords#R56 "Agdaagux Tribe of King Cove"
* CodeSystemRaceCodeVitalRecords#R57 "Native Village of Karluk"
* CodeSystemRaceCodeVitalRecords#R58 "Native Village of Kanatak"
* CodeSystemRaceCodeVitalRecords#R59 "Kodiak"
* CodeSystemRaceCodeVitalRecords#R60 "Koniag Aleut"
* CodeSystemRaceCodeVitalRecords#R61 "Native Village of Larsen Bay"
* CodeSystemRaceCodeVitalRecords#R62 "Village of Old Harbor"
* CodeSystemRaceCodeVitalRecords#R63 "Native Village of Ouzinkie"
* CodeSystemRaceCodeVitalRecords#R64 "Native Village of Port Lions"
* CodeSystemRaceCodeVitalRecords#R65 "Lesnoi Village"
* CodeSystemRaceCodeVitalRecords#R67 "Sugpiaq"
* CodeSystemRaceCodeVitalRecords#R71 "Suqpigaq"
* CodeSystemRaceCodeVitalRecords#R74 "UNANGAN ALEUT"
* CodeSystemRaceCodeVitalRecords#R75 "Native Village of Akutan"
* CodeSystemRaceCodeVitalRecords#R76 "Aleut Corporation"
* CodeSystemRaceCodeVitalRecords#R77 "Aleutian"
* CodeSystemRaceCodeVitalRecords#R78 "Aleutian Islander"
* CodeSystemRaceCodeVitalRecords#R79 "Native Village of Atka"
* CodeSystemRaceCodeVitalRecords#R80 "Native Village of Belkofski"
* CodeSystemRaceCodeVitalRecords#R81 "Native Village of Chignikn Lagoon"
* CodeSystemRaceCodeVitalRecords#R82 "King Cove"
* CodeSystemRaceCodeVitalRecords#R83 "Native Village of False Pass"
* CodeSystemRaceCodeVitalRecords#R84 "Native Village of Nelson Lagoon"
* CodeSystemRaceCodeVitalRecords#R85 "Native Village of Nikolski"
* CodeSystemRaceCodeVitalRecords#R86 "Pauloff Harbor Village"
* CodeSystemRaceCodeVitalRecords#R87 "Qagan Toyagungin Tribe of Sand Point Village"
* CodeSystemRaceCodeVitalRecords#R88 "Qawalangin Tribe of Unalaska"
* CodeSystemRaceCodeVitalRecords#R89 "Saint George"
* CodeSystemRaceCodeVitalRecords#R90 "Saint Paul"
* CodeSystemRaceCodeVitalRecords#R91 "Sand Point"
* CodeSystemRaceCodeVitalRecords#R92 "South Naknek Village"
* CodeSystemRaceCodeVitalRecords#R93 "Unangan"
* CodeSystemRaceCodeVitalRecords#R94 "Unalaska"
* CodeSystemRaceCodeVitalRecords#R95 "Native Village of Unga"
* CodeSystemRaceCodeVitalRecords#R96 "Kaguyak Village"
* ^experimental = false


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetDateOfBirthEditFlags.fsh

ValueSet: ValueSetDateOfBirthEditFlagsVitalRecords
Id: ValueSet-date-of-birth-edit-flags-vr 
Title: "Value Set - Date of Birth Edit Flags (NCHS) Vital Records"
Description: "This valueset contains codes to represent Date of Birth Edit Flags. 
It is based on the original [PHVS_BirthdateEditFlags_NCHS](https://phinvads.cdc.gov/vads/ViewValueSet.action?id=3BD473EE-40DD-E811-816D-0017A477041A) PHINVADS valueset. 
This IG is the primary source for valuesets for use in vital records.

Mapping to IJE codes [here](ConceptMap-ConceptMapDateOfBirthEditFlagsVitalRecords.html)."
* ^experimental = false
* CodeSystemEditFlagsVitalRecords#0 "Edit Passed" //PHC1362
* CodeSystemEditFlagsVitalRecords#1dataQueried "Data queried" //PHC2143


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetEditBypass01234VS.fsh

ValueSet: ValueSetEditBypass01234VitalRecords
Id: valueset-edit-bypass-01234-vr
Title: "Value Set - Edit Bypass 01234 Vital Records"
Description: "A subset of code values (0, 1, 2, 3, and 4) use to indicate the outcome of data validation assessment for unusual data values.

Mapping to IJE codes [here](ConceptMap-ConceptMapEditBypass01234VitalRecords.html)."
* insert boilerplate
* CodeSystemEditFlagsVitalRecords#0 "Edit Passed"
* CodeSystemEditFlagsVitalRecords#1 "Edit Failed, Data Queried, and Verified"
* CodeSystemEditFlagsVitalRecords#2 "Edit Failed, Data Queried, but not Verified"
* CodeSystemEditFlagsVitalRecords#3 "Edit Failed, Review Needed"
* CodeSystemEditFlagsVitalRecords#4 "Edit Failed, Query Needed"
* ^experimental = false

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetEducationLevelPersonVitalRecords-new.fsh

// Same as existing ValueSetEducationLevelPersonVitalRecords, with support for Decedent.
ValueSet: ValueSetEducationLevelPersonVitalRecords
Id: ValueSet-education-level-person-vr
Title: "Value Set - Education Level Person Vital Records"
Description: "This valueset contains codes that represent persons for whom education level can be reported."
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* ^experimental = false
* $loinc#87300-0 "Highest level of education Father"
* $loinc#57712-2 "Highest level of education Mother"
* $loinc#80913-7 "Highest level of education [US Standard Certificate of Death]"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetEducationLevelVitalRecords.fsh

ValueSet: ValueSetEducationLevelVitalRecords
Id: ValueSet-education-level-vr
Title: "Value Set - Education Level Vital Records"
Description: "This valueset contains the set of codes used to represent the Highest educational level achieved.

Mapping to IJE codes [here](ConceptMap-ConceptMapEducationLevelVitalRecords.html)."
* $HL7_EducationLevelCS#ELEM "Elementary School"
* $HL7_EducationLevelCS#SEC "Some secondary or high school education"
* $HL7_EducationLevelCS#HS "High School or secondary school degree complete"
* $HL7_EducationLevelCS#SCOL "Some College education"
* $degreeLicenseCertificateV2#AA "Associate's or technical degree complete"
* $degreeLicenseCertificateV2#BA "Bachelor's degree"
* $degreeLicenseCertificateV2#MA "Master's degree"
* $HL7_EducationLevelCS#POSTG "Doctoral or post graduate education"
* $v3-NullFlavor#UNK "unknown"
* ^experimental = false

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetFatherRelationshipVitalRecords.fsh

ValueSet: ValueSetFatherRelationshipVitalRecords
Id: ValueSet-father-relationship-vr
Title: "Value Set - Father Relationship Vital Records"
Description: "This valueset contains codes that represent relationships describing the father's role relative to the subject."
* ^status = #active
* ^experimental = false
* $v3-RoleCode#ADOPTF "adoptive father"
* $v3-RoleCode#FTH "father"
* $v3-RoleCode#FTHFOST "foster father"
* $v3-RoleCode#NFTH "natural father"
* $v3-RoleCode#STPFTH "stepfather"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetHisplanicOriginVitalRecords.fsh

ValueSet: ValueSetHispanicOriginVitalRecords
Id: ValueSet-hispanic-origin-vr
Title: "Value Set - HispanicOrigin Vital Records"
Description: "This valueset contains the set of codes used to represent NCHS HispanicOrigin.


Mapping to IJE codes [here](ConceptMap-ConceptMapHispanicOriginVitalRecords.html)."
//* include codes from system CodeSystemHispanicOriginVitalRecords
* CodeSystemHispanicOriginVitalRecords#100 "Non-Hispanic"
* CodeSystemHispanicOriginVitalRecords#200 "Spaniard"
* CodeSystemHispanicOriginVitalRecords#201 "Andalusian"
* CodeSystemHispanicOriginVitalRecords#202 "Asturian"
* CodeSystemHispanicOriginVitalRecords#203 "Castillian"
* CodeSystemHispanicOriginVitalRecords#204 "Catalonian"
* CodeSystemHispanicOriginVitalRecords#205 "Balearic Islander"
* CodeSystemHispanicOriginVitalRecords#206 "Gallego"
* CodeSystemHispanicOriginVitalRecords#207 "Valencian"
* CodeSystemHispanicOriginVitalRecords#208 "Canarian"
* CodeSystemHispanicOriginVitalRecords#209 "Spanish Basque"
* CodeSystemHispanicOriginVitalRecords#210 "Mexican Checkbox"
* CodeSystemHispanicOriginVitalRecords#211 "Mexican"
* CodeSystemHispanicOriginVitalRecords#212 "Mexican American"
* CodeSystemHispanicOriginVitalRecords#213 "Mexicano"
* CodeSystemHispanicOriginVitalRecords#214 "Chicano"
* CodeSystemHispanicOriginVitalRecords#215 "La Raza"
* CodeSystemHispanicOriginVitalRecords#216 "Mexican American Indian"
* CodeSystemHispanicOriginVitalRecords#217 "Caribbean (Reassigned to 290)"
* CodeSystemHispanicOriginVitalRecords#218 "Mexico"
* CodeSystemHispanicOriginVitalRecords#220 "Central and South America"
* CodeSystemHispanicOriginVitalRecords#221 "Costa Rican"
* CodeSystemHispanicOriginVitalRecords#222 "Guatemalan"
* CodeSystemHispanicOriginVitalRecords#223 "Honduran"
* CodeSystemHispanicOriginVitalRecords#224 "Nicaraguan"
* CodeSystemHispanicOriginVitalRecords#225 "Panamanian"
* CodeSystemHispanicOriginVitalRecords#226 "Salvadoran"
* CodeSystemHispanicOriginVitalRecords#227 "Central American"
* CodeSystemHispanicOriginVitalRecords#228 "Central American Indian"
* CodeSystemHispanicOriginVitalRecords#229 "Canal Zone"
* CodeSystemHispanicOriginVitalRecords#231 "Argentinean"
* CodeSystemHispanicOriginVitalRecords#232 "Bolivian"
* CodeSystemHispanicOriginVitalRecords#233 "Chilean"
* CodeSystemHispanicOriginVitalRecords#234 "Colombian"
* CodeSystemHispanicOriginVitalRecords#235 "Ecuadorian"
* CodeSystemHispanicOriginVitalRecords#236 "Paraguayan"
* CodeSystemHispanicOriginVitalRecords#237 "Peruvian"
* CodeSystemHispanicOriginVitalRecords#238 "Uruguayan"
* CodeSystemHispanicOriginVitalRecords#239 "Venezuelan"
* CodeSystemHispanicOriginVitalRecords#240 "South American Indian"
* CodeSystemHispanicOriginVitalRecords#241 "Criollo"
* CodeSystemHispanicOriginVitalRecords#242 "South American"
* CodeSystemHispanicOriginVitalRecords#250 "Latin American"
* CodeSystemHispanicOriginVitalRecords#251 "Latin"
* CodeSystemHispanicOriginVitalRecords#252 "Latino"
* CodeSystemHispanicOriginVitalRecords#260 "Puerto Rican Checkbox"
* CodeSystemHispanicOriginVitalRecords#261 "Puerto Rican"
* CodeSystemHispanicOriginVitalRecords#270 "Cuban Checkbox"
* CodeSystemHispanicOriginVitalRecords#271 "Cuban"
* CodeSystemHispanicOriginVitalRecords#275 "Dominican"
* CodeSystemHispanicOriginVitalRecords#280 "Other Spanish Checkbox"
* CodeSystemHispanicOriginVitalRecords#281 "Hispanic"
* CodeSystemHispanicOriginVitalRecords#282 "Spanish"
* CodeSystemHispanicOriginVitalRecords#283 "Californio"
* CodeSystemHispanicOriginVitalRecords#284 "Tejano"
* CodeSystemHispanicOriginVitalRecords#285 "Nuevo Mexicano"
* CodeSystemHispanicOriginVitalRecords#286 "Spanish American"
* CodeSystemHispanicOriginVitalRecords#287 "Spanish American Indian"
* CodeSystemHispanicOriginVitalRecords#288 "Meso American Indian"
* CodeSystemHispanicOriginVitalRecords#289 "Mestizo"
* CodeSystemHispanicOriginVitalRecords#290 "Caribbean"
* CodeSystemHispanicOriginVitalRecords#291 "Multiple Hispanic Responses"
* CodeSystemHispanicOriginVitalRecords#299 "Other Spanish"
* CodeSystemHispanicOriginVitalRecords#996 "Uncodable"
* CodeSystemHispanicOriginVitalRecords#997 "Deferred"
* CodeSystemHispanicOriginVitalRecords#998 "Unknown"
* CodeSystemHispanicOriginVitalRecords#999 "First Pass Reject"
* ^experimental = false

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetIJE.fsh

ValueSet: ValueSetIJEVitalRecords
Id: ValueSet-ije-vr
Title: "ValueSet - Placeholder ValueSet for Interjurisdictional Exchange (IJE) in Vital Records"
Description: "IJE ValueSet Placeholder is needed to provide a URL upon which to anchor concept maps.
This valueset is only for use in the vital records use cases supported by this Implementation guide, and should not be used elsewhere."
* ^experimental = false
* include codes from system CodeSystemIJEVitalRecords



---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetJurisdictionVitalRecords.fsh

ValueSet: ValueSetJurisdictionVitalRecords
Id: ValueSet-jurisdiction-vr
Title: "Value Set - Jurisdictions Vital Records"
Description: "This valueset contains the set of codes used to represent 2 Letter Codes for all 57 Jurisdictions Reporting Deaths to NCHS"
// * codes from valueset ValueSetUSStatesAndTerritoriesVitalRecords
* $statesCS#AL  "Alabama"
* $statesCS#AK  "Alaska"
* $statesCS#AZ  "Arizona"
* $statesCS#AR  "Arkansas"
* $statesCS#CA  "California"
* $statesCS#CO  "Colorado"
* $statesCS#CT  "Connecticut"
* $statesCS#DE  "Delaware"
* $statesCS#DC  "District of Columbia"
* $statesCS#FL  "Florida"
* $statesCS#GA  "Georgia"
* $statesCS#HI  "Hawaii"
* $statesCS#ID  "Idaho"
* $statesCS#IL  "Illinois"
* $statesCS#IN  "Indiana"
* $statesCS#IA  "Iowa"
* $statesCS#KS  "Kansas"
* $statesCS#KY  "Kentucky"
* $statesCS#LA  "Louisiana"
* $statesCS#ME  "Maine"
* $statesCS#MD  "Maryland"
* $statesCS#MA  "Massachusetts"
* $statesCS#MI  "Michigan"
* $statesCS#MN  "Minnesota"
* $statesCS#MS  "Mississippi"
* $statesCS#MO  "Missouri"
* $statesCS#MT  "Montana"
* $statesCS#NE  "Nebraska"
* $statesCS#NV  "Nevada"
* $statesCS#NH  "New Hampshire"
* $statesCS#NJ  "New Jersey"
* $statesCS#NM  "New Mexico"
* $statesCS#NY  "New York"
* $statesCS#NC  "North Carolina"
* $statesCS#ND  "North Dakota"
* $statesCS#OH  "Ohio"
* $statesCS#OK  "Oklahoma"
* $statesCS#OR  "Oregon"
* $statesCS#PA  "Pennsylvania"
* $statesCS#RI  "Rhode Island"
* $statesCS#SC  "South Carolina"
* $statesCS#SD  "South Dakota"
* $statesCS#TN  "Tennessee"
* $statesCS#TX  "Texas"
* $statesCS#UT  "Utah"
* $statesCS#VT  "Vermont"
* $statesCS#VA  "Virginia"
* $statesCS#WA  "Washington"
* $statesCS#WV  "West Virginia"
* $statesCS#WI  "Wisconsin"
* $statesCS#WY  "Wyoming"
* $statesCS#AS  "American Samoa"
* $statesCS#GU  "Guam"
* $statesCS#MP  "Northern Mariana Islands"
* $statesCS#PR  "Puerto Rico"
* $statesCS#VI  "Virgin Islands"
* CodeSystemJurisdictionsVitalRecords#YC "New York City"
* ^experimental = false

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetMaritalStatusVitalRecords.fsh

ValueSet: ValueSetMaritalStatusVitalRecords
Id: ValueSet-marital-status-vr
Title: "Value Set - Marital Status Vital Records"
Description: "The set of codes used to indicate the marital status of the decedent

Note: 'Domestic Partnership' is not supported by NCHS and will be mapped to 'U' unknown

Mapping to IJE codes [here](ConceptMap-ConceptMapMaritalStatusVitalRecords.html)." 
* $v3-MaritalStatus#D "Divorced"
* $v3-MaritalStatus#L "Legally Separated"
* $v3-MaritalStatus#M "Married"
* $v3-MaritalStatus#S "Never Married"
* $v3-MaritalStatus#W "Widowed"
* $v3-MaritalStatus#T "Domestic Partner" // not currently supported by NCHS
* $v3-NullFlavor#UNK "unknown"
* ^experimental = false

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetMotherRelationshipVitalRecords.fsh

ValueSet: ValueSetMotherRelationshipVitalRecords
Id: ValueSet-mother-relationship-vr
Title: "Value Set - Mother Relationship Vital Records"
Description: "This valueset contains codes that represent relationships describing the mother's role relative to the subject."
* ^status = #active
* ^experimental = false
* $v3-RoleCode#ADOPTM "adoptive mother"
* $v3-RoleCode#MTH "mother"
* $v3-RoleCode#GESTM "gestational mother"
* $v3-RoleCode#MTHFOST "foster mother"
* $v3-RoleCode#NMTH "natural mother"
* $v3-RoleCode#NMTHF "natural mother of fetus"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetPartialDateDataAbsentReasonVitalRecords.fsh

ValueSet: ValueSetPartialDateDataAbsentReasonVitalRecords
Id: ValueSet-partial-date-data-absent-reason-vr
Title: "Value Set - Partial Date/DateTime Data Absent Reason Vital Records"
Description: "A set of codes used to represent partial date/dateTime data absent reasons."
* ^status = #active
* ^experimental = false
* $v4-data-absent-reason#unknown "Unknown"
* $v4-data-absent-reason#temp-unknown "Temporarily Unknown"


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetPluralityEditFlags.fsh

ValueSet: ValueSetPluralityEditFlagsVitalRecords
Id: ValueSet-plurality-edit-flags-vr 
Title: "Value Set - Plurality Edit Flags (NCHS) Vital Records"
Description: "This valueset contains codes to represent Plurality Edit Flags. 
It is based on the original [PHVS_PluralityEditFlags_NCHS](https://phinvads.cdc.gov/vads/ViewValueSet.action?id=3A484C53-FDFD-E611-A856-0017A477041A) PHINVADS valueset. 
This IG is the primary source for valuesets for use in vital records.

Mapping to IJE codes [here](ConceptMap-ConceptMapPluralityEditFlagsVitalRecords.html)."
* ^experimental = false
* CodeSystemEditFlagsVitalRecords#0off "Off" //PHC1380
* CodeSystemEditFlagsVitalRecords#1queriedCorrect "Queried, and Correct" //PHC1494
* CodeSystemEditFlagsVitalRecords#2pluralityQueriedInconsistent "Plurality/Set Order Queried, Inconsistent" //PHC1495

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetRaceEthnicityPersonVitalRecords.fsh

ValueSet: ValueSetInputRaceAndEthnicityPersonVitalRecords
Id: ValueSet-input-race-and-ethnicity-person-vr
Title: "Value Set - Input Race and Ethnicity Person Vital Records"
Description: "This valueset contains codes that represent persons for whom input race and ethnicity can be reported."
* ^experimental = false
* ^status = #active 
* CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather "Father Race and Ethnicity Data submitted by Jurisdictions to NCHS" 
* CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother "Mother Race and Ethnicity Data submitted by Jurisdictions to NCHS" 
* CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityDecedent "Decedent Race and Ethnicity Data submitted by Jurisdictions to NCHS" 
* CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicity "Race and Ethnicity Data submitted by Jurisdictions to NCHS" 

ValueSet: ValueSetCodedRaceAndEthnicityPersonVitalRecords
Id: ValueSet-coded-race-and-ethnicity-person-vr
Title: "Coded Race and Ethnicity Person Vital Records"
Description: "This value set contains codes that represent persons for whom coded race and ethnicity can be reported."
* ^experimental = false
* ^status = #active 
* CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather "Father Coded Race and Ethnicity Data produced by NCHS from submitted death record"
* CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother "Mother Coded Race and Ethnicity Data produced by NCHS from submitted death record"
* CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent "Decedent Coded Race and Ethnicity Data produced by NCHS from submitted death record"
* CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicity "Coded Race and Ethnicity Data produced by NCHS from submitted death record"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetRaceMissingValueReasonVitalRecords.fsh

ValueSet: ValueSetRaceMissingValueReasonVitalRecords
Id: ValueSet-race-missing-value-reason-vr
Title: "Value Set - Race Missing Value Reason Vital Records"
Description: "This valueset contains the set of codes used to indicate the reason decedent race data is absent.

Mapping to IJE codes [here](ConceptMap-ConceptMapRaceMissingValueReasonVitalRecords.html)."
* insert boilerplate
// * CodeSystemMissingValueReasonVitalRecords#R "Refused"
* $v3-ActReason#PREFUS "patient refuse" // "R = refused"
* $v3-NullFlavor#ASKU "asked but unknown" // "S = Sought, but unknown"
* $v3-NullFlavor#UNK "unknown"            // "N = Not obtainable"
* ^experimental = false

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetRaceRecode40VitalRecords.fsh


ValueSet: ValueSetRaceRecode40VitalRecords
Id: ValueSet-race-recode-40-vr
Title: "Value Set - Race Recode 40 Vital Records"
Description: "This valueset contains the set of codes used to represent NCHS Race Recode 40.


NCHS no longer provides this data.

Mapping to IJE codes [here](ConceptMap-ConceptMapRaceRecode40VitalRecords.html)."
//* include codes from system CodeSystemRaceRecode40VitalRecords
* CodeSystemRaceRecode40VitalRecords#01 "White"
* CodeSystemRaceRecode40VitalRecords#02 "Black"
* CodeSystemRaceRecode40VitalRecords#03 "American Indian or Alaskan Native (AIAN)"
* CodeSystemRaceRecode40VitalRecords#04 "Asian Indian"
* CodeSystemRaceRecode40VitalRecords#05 "Chinese"
* CodeSystemRaceRecode40VitalRecords#06 "Filipino"
* CodeSystemRaceRecode40VitalRecords#07 "Japanese"
* CodeSystemRaceRecode40VitalRecords#08 "Korean"
* CodeSystemRaceRecode40VitalRecords#09 "Vietnamese"
* CodeSystemRaceRecode40VitalRecords#10 "Other or Multiple Asian"
* CodeSystemRaceRecode40VitalRecords#11 "Hawaiian"
* CodeSystemRaceRecode40VitalRecords#12 "Guamanian"
* CodeSystemRaceRecode40VitalRecords#13 "Samoan"
* CodeSystemRaceRecode40VitalRecords#14 "Other or Multiple Pacific Islander"
* CodeSystemRaceRecode40VitalRecords#15 "Black and White"
* CodeSystemRaceRecode40VitalRecords#16 "Black and AIAN"
* CodeSystemRaceRecode40VitalRecords#17 "Black and Asian"
* CodeSystemRaceRecode40VitalRecords#18 "AIAN and NHOPI"
* CodeSystemRaceRecode40VitalRecords#19 "NHOPI and White"
* CodeSystemRaceRecode40VitalRecords#20 "AIAN and Asian"
* CodeSystemRaceRecode40VitalRecords#21 "AIAN and NHOPI-2"
* CodeSystemRaceRecode40VitalRecords#22 "Asian and White"
* CodeSystemRaceRecode40VitalRecords#23 "Asian and NHOPI"
* CodeSystemRaceRecode40VitalRecords#24 "NHOPI and White-2"
* CodeSystemRaceRecode40VitalRecords#25 "Black, AIAN and White"
* CodeSystemRaceRecode40VitalRecords#26 "Black, AIAN and Asian"
* CodeSystemRaceRecode40VitalRecords#27 "Black, AIAN and NHOPI"
* CodeSystemRaceRecode40VitalRecords#28 "Black, Asian and White"
* CodeSystemRaceRecode40VitalRecords#29 "Black, Asian and NHOPI"
* CodeSystemRaceRecode40VitalRecords#30 "Black, NHOPI and White"
* CodeSystemRaceRecode40VitalRecords#31 "AIAN, Asian and White"
* CodeSystemRaceRecode40VitalRecords#32 "AIAN, NHOPI and White"
* CodeSystemRaceRecode40VitalRecords#33 "AIAN, Asian and NHOPI"
* CodeSystemRaceRecode40VitalRecords#34 "Asian, NHOPI and White"
* CodeSystemRaceRecode40VitalRecords#35 "Black, AIAN, Asian and White"
* CodeSystemRaceRecode40VitalRecords#36 "Black, AIAN, Asian and NHOPI"
* CodeSystemRaceRecode40VitalRecords#37 "Black, AIAN, NHOPI and White"
* CodeSystemRaceRecode40VitalRecords#38 "Black, Asian, NHOPI and White"
* CodeSystemRaceRecode40VitalRecords#39 "AIAN, Asian, NHOPI and White"
* CodeSystemRaceRecode40VitalRecords#40 "Black, AIAN, Asian, NHOPI and White"
* CodeSystemRaceRecode40VitalRecords#99 "Unknown and Other Race"
* ^experimental = false

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetResidenceCountryVitalRecords.fsh

ValueSet: ValueSetResidenceCountryVitalRecords
Id: ValueSet-residence-country-vr
Title: "Value Set - Residence Country Vital Records"
Description: "This valueset contains the set of codes used to represent 2 Letter Residence Country Codes from GEC and ISO 3166-1.  Excludes historic countries that no longer exist"
* include codes from system CodeSystemCountryCodeVitalRecords
* exclude CodeSystemCountryCodeVitalRecords#CL
* exclude CodeSystemCountryCodeVitalRecords#CZ
* exclude CodeSystemCountryCodeVitalRecords#DM
* exclude CodeSystemCountryCodeVitalRecords#EB
* exclude CodeSystemCountryCodeVitalRecords#EQ
* exclude CodeSystemCountryCodeVitalRecords#FT
* exclude CodeSystemCountryCodeVitalRecords#GC
* exclude CodeSystemCountryCodeVitalRecords#GE
* exclude CodeSystemCountryCodeVitalRecords#GN
* exclude CodeSystemCountryCodeVitalRecords#GS
* exclude CodeSystemCountryCodeVitalRecords#IQ
* exclude CodeSystemCountryCodeVitalRecords#IU
* exclude CodeSystemCountryCodeVitalRecords#IW
* exclude CodeSystemCountryCodeVitalRecords#IY
* exclude CodeSystemCountryCodeVitalRecords#JS
* exclude CodeSystemCountryCodeVitalRecords#NT
* exclude CodeSystemCountryCodeVitalRecords#PN
* exclude CodeSystemCountryCodeVitalRecords#PQ
* exclude CodeSystemCountryCodeVitalRecords#RH
* exclude CodeSystemCountryCodeVitalRecords#SK
* exclude CodeSystemCountryCodeVitalRecords#SQ
* exclude CodeSystemCountryCodeVitalRecords#SS
* exclude CodeSystemCountryCodeVitalRecords#TC
* exclude CodeSystemCountryCodeVitalRecords#TQ
* exclude CodeSystemCountryCodeVitalRecords#UR
* exclude CodeSystemCountryCodeVitalRecords#VN
* exclude CodeSystemCountryCodeVitalRecords#VS
* exclude CodeSystemCountryCodeVitalRecords#WB
* exclude CodeSystemCountryCodeVitalRecords#YE
* exclude CodeSystemCountryCodeVitalRecords#YI
* exclude CodeSystemCountryCodeVitalRecords#YQ
* exclude CodeSystemCountryCodeVitalRecords#YS
* ^experimental = false

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetRoleVitalRecords.fsh


ValueSet: ValueSetRoleVitalRecords
Id: ValueSet-role-vr
Title: "Value Set - Role Vital Records"
Description: "This value set contains codes that represent persons for whom some observations can be reported."
* ^experimental = false
* ^status = #active 
* $v3-RoleCode#FTH "father"
* $v3-RoleCode#MTH "mother"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetSexAssignedAtBirthVitalRecords.fsh

ValueSet: ValueSetSexAssignedAtBirthVitalRecords
Id: ValueSet-sex-assigned-at-birth-vr
Title: "Value Set - Sex Assigned At Birth Vital Records"
Description: "This valueset contains the subset of the US Core Birth Sex Valueset that can be used for a child or decedent fetus' Vital Records.

Mapping to IJE codes [here for child](ConceptMap-ConceptMapBirthSexChildVitalRecords.html) and [here for decedent fetus](ConceptMap-ConceptMapBirthSexFetusVitalRecords.html)."
* ^status = #active
* ^experimental = false
//* include codes from valueset BirthSex
//* exclude $v3-NullFlavor#ASKU "asked but unknown"
//* exclude $v3-NullFlavor#OTH "other"
// Change from a intensional definition by subtraction, to an extensional definition. 
* $v3-AdministrativeGender#F "Female"
* $v3-AdministrativeGender#M "Male"
* $v3-NullFlavor#UNK "Unknown"


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetStatesTerritoriesAndProvinces.fsh

ValueSet: ValueSetStatesTerritoriesAndProvincesVitalRecords
Id: ValueSet-states-territories-provinces-vr
Title: "Value Set - States, Territories and Provinces Vital Records"
Description: "This valueset contains the set of codes used to represent 2 Letter States and Provinces"
* ^copyright = "The Canadian Province codesystem is copright Canada Health Infoway"
* ^status = #active
* ^experimental = false
//* insert USStatesAndTerritories
// * insert CanadaProvinces -- this doesn't work, don't be tempted
//* codes from valueset ValueSetUSStatesAndTerritoriesVitalRecords
//* codes from system CodeSystemCanadianProvincesVitalRecords
* $statesCS#AL  "Alabama"
* $statesCS#AK  "Alaska"
* $statesCS#AZ  "Arizona"
* $statesCS#AR  "Arkansas"
* $statesCS#CA  "California"
* $statesCS#CO  "Colorado"
* $statesCS#CT  "Connecticut"
* $statesCS#DE  "Delaware"
* $statesCS#DC  "District of Columbia"
* $statesCS#FL  "Florida"
* $statesCS#GA  "Georgia"
* $statesCS#HI  "Hawaii"
* $statesCS#ID  "Idaho"
* $statesCS#IL  "Illinois"
* $statesCS#IN  "Indiana"
* $statesCS#IA  "Iowa"
* $statesCS#KS  "Kansas"
* $statesCS#KY  "Kentucky"
* $statesCS#LA  "Louisiana"
* $statesCS#ME  "Maine"
* $statesCS#MD  "Maryland"
* $statesCS#MA  "Massachusetts"
* $statesCS#MI  "Michigan"
* $statesCS#MN  "Minnesota"
* $statesCS#MS  "Mississippi"
* $statesCS#MO  "Missouri"
* $statesCS#MT  "Montana"
* $statesCS#NE  "Nebraska"
* $statesCS#NV  "Nevada"
* $statesCS#NH  "New Hampshire"
* $statesCS#NJ  "New Jersey"
* $statesCS#NM  "New Mexico"
* $statesCS#NY  "New York"
* $statesCS#NC  "North Carolina"
* $statesCS#ND  "North Dakota"
* $statesCS#OH  "Ohio"
* $statesCS#OK  "Oklahoma"
* $statesCS#OR  "Oregon"
* $statesCS#PA  "Pennsylvania"
* $statesCS#RI  "Rhode Island"
* $statesCS#SC  "South Carolina"
* $statesCS#SD  "South Dakota"
* $statesCS#TN  "Tennessee"
* $statesCS#TX  "Texas"
* $statesCS#UT  "Utah"
* $statesCS#VT  "Vermont"
* $statesCS#VA  "Virginia"
* $statesCS#WA  "Washington"
* $statesCS#WV  "West Virginia"
* $statesCS#WI  "Wisconsin"
* $statesCS#WY  "Wyoming"
* $statesCS#AS  "American Samoa"
* $statesCS#GU  "Guam"
* $statesCS#MP  "Northern Mariana Islands"
* $statesCS#PR  "Puerto Rico"
* $statesCS#VI  "Virgin Islands"
* $provincesCS#AB	"Alberta"
* $provincesCS#BC	"British Columbia" 
* $provincesCS#MB	"Manitoba" 
* $provincesCS#NB	"New Brunswick" 
* $provincesCS#NL	"Newfoundland and Labrador"
* $provincesCS#NS	"Nova Scotia"
* $provincesCS#NT	"Northwest Territories" 
* $provincesCS#NU	"Nunavut" 
* $provincesCS#ON	"Ontario" 
* $provincesCS#PE	"Prince Edward Island"
* $provincesCS#QC	"Quebec" 
* $provincesCS#SK	"Saskatchewan" 
* $provincesCS#YT	"Yukon"
//* codes from system CodeSystemCanadianProvincesVitalRecords
* $v3-NullFlavor#UNK "Unknown"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetUnitsOfAgeVitalRecords.fsh

ValueSet: ValueSetUnitsOfAgeVitalRecords
Id: ValueSet-units-of-age-vr
Title: "Value Set - Units of Age Vital Records"
Description: "This valueset contains the set of codes for specifying the units used when recording age (days, years, etc.).

Mapping to IJE codes [here](ConceptMap-ConceptMapUnitsOfAgeVitalRecords.html)."
* ^status = #active
* ^experimental = false
* $unitsofmeasure#min "Minutes"
* $unitsofmeasure#d "Days"
* $unitsofmeasure#h "Hours"
* $unitsofmeasure#mo "Months"
* $unitsofmeasure#a "Years"
* $v3-NullFlavor#UNK "unknown"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetUSStatesTerritoriesVitalRecords.fsh

ValueSet: ValueSetUSStatesAndTerritoriesVitalRecords
Id: ValueSet-usstates-territories-vr
Title: "Value Set - US States, Territories Vital Records"
Description: "This valueset contains the set of 2 Letter codes used to represent  US States and Territories"
* ^status = #active
* ^version = "1.0.0"
* ^experimental = false
//* include codes from valueset ValueSetUSStatesVitalRecords
//* include codes from valueset ValueSetUSTerritoriesVitalRecords
* $statesCS#AL  "Alabama"
* $statesCS#AK  "Alaska"
* $statesCS#AZ  "Arizona"
* $statesCS#AR  "Arkansas"
* $statesCS#CA  "California"
* $statesCS#CO  "Colorado"
* $statesCS#CT  "Connecticut"
* $statesCS#DE  "Delaware"
* $statesCS#DC  "District of Columbia"
* $statesCS#FL  "Florida"
* $statesCS#GA  "Georgia"
* $statesCS#HI  "Hawaii"
* $statesCS#ID  "Idaho"
* $statesCS#IL  "Illinois"
* $statesCS#IN  "Indiana"
* $statesCS#IA  "Iowa"
* $statesCS#KS  "Kansas"
* $statesCS#KY  "Kentucky"
* $statesCS#LA  "Louisiana"
* $statesCS#ME  "Maine"
* $statesCS#MD  "Maryland"
* $statesCS#MA  "Massachusetts"
* $statesCS#MI  "Michigan"
* $statesCS#MN  "Minnesota"
* $statesCS#MS  "Mississippi"
* $statesCS#MO  "Missouri"
* $statesCS#MT  "Montana"
* $statesCS#NE  "Nebraska"
* $statesCS#NV  "Nevada"
* $statesCS#NH  "New Hampshire"
* $statesCS#NJ  "New Jersey"
* $statesCS#NM  "New Mexico"
* $statesCS#NY  "New York"
* $statesCS#NC  "North Carolina"
* $statesCS#ND  "North Dakota"
* $statesCS#OH  "Ohio"
* $statesCS#OK  "Oklahoma"
* $statesCS#OR  "Oregon"
* $statesCS#PA  "Pennsylvania"
* $statesCS#RI  "Rhode Island"
* $statesCS#SC  "South Carolina"
* $statesCS#SD  "South Dakota"
* $statesCS#TN  "Tennessee"
* $statesCS#TX  "Texas"
* $statesCS#UT  "Utah"
* $statesCS#VT  "Vermont"
* $statesCS#VA  "Virginia"
* $statesCS#WA  "Washington"
* $statesCS#WV  "West Virginia"
* $statesCS#WI  "Wisconsin"
* $statesCS#WY  "Wyoming"
* $statesCS#AS  "American Samoa"
* $statesCS#GU  "Guam"
* $statesCS#MP  "Northern Mariana Islands"
* $statesCS#PR  "Puerto Rico"
* $statesCS#VI  "Virgin Islands"


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetUSStatesVitalRecords.fsh

ValueSet: ValueSetUSStatesVitalRecords
Id: ValueSet-usstates-vr
Title: "Value Set - US States Vital Records"
Description: "This valueset contains the set of 2 Letter codes used to represent the 50 US States and DC"
* ^status = #active
* ^version = "1.0.0"
* ^experimental = false
* $statesCS#AL  "Alabama"
* $statesCS#AK  "Alaska"
* $statesCS#AZ  "Arizona"
* $statesCS#AR  "Arkansas"
* $statesCS#CA  "California"
* $statesCS#CO  "Colorado"
* $statesCS#CT  "Connecticut"
* $statesCS#DE  "Delaware"
* $statesCS#DC  "District of Columbia"
* $statesCS#FL  "Florida"
* $statesCS#GA  "Georgia"
* $statesCS#HI  "Hawaii"
* $statesCS#ID  "Idaho"
* $statesCS#IL  "Illinois"
* $statesCS#IN  "Indiana"
* $statesCS#IA  "Iowa"
* $statesCS#KS  "Kansas"
* $statesCS#KY  "Kentucky"
* $statesCS#LA  "Louisiana"
* $statesCS#ME  "Maine"
* $statesCS#MD  "Maryland"
* $statesCS#MA  "Massachusetts"
* $statesCS#MI  "Michigan"
* $statesCS#MN  "Minnesota"
* $statesCS#MS  "Mississippi"
* $statesCS#MO  "Missouri"
* $statesCS#MT  "Montana"
* $statesCS#NE  "Nebraska"
* $statesCS#NV  "Nevada"
* $statesCS#NH  "New Hampshire"
* $statesCS#NJ  "New Jersey"
* $statesCS#NM  "New Mexico"
* $statesCS#NY  "New York"
* $statesCS#NC  "North Carolina"
* $statesCS#ND  "North Dakota"
* $statesCS#OH  "Ohio"
* $statesCS#OK  "Oklahoma"
* $statesCS#OR  "Oregon"
* $statesCS#PA  "Pennsylvania"
* $statesCS#RI  "Rhode Island"
* $statesCS#SC  "South Carolina"
* $statesCS#SD  "South Dakota"
* $statesCS#TN  "Tennessee"
* $statesCS#TX  "Texas"
* $statesCS#UT  "Utah"
* $statesCS#VT  "Vermont"
* $statesCS#VA  "Virginia"
* $statesCS#WA  "Washington"
* $statesCS#WV  "West Virginia"
* $statesCS#WI  "Wisconsin"
* $statesCS#WY  "Wyoming"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetUSTerritoriesVitalRecords.fsh

ValueSet: ValueSetUSTerritoriesVitalRecords
Id: ValueSet-usterritories-vr
Title: "Value Set - US Territories Vital Records"
Description: "This valueset contains the set of 2 Letter codes used to represent US Territories"
* ^status = #active
* ^version = "1.0.0"
* ^experimental = false
// * insert USTerritories 

// RuleSet: USTerritories 
* $statesCS#AS  "American Samoa"
* $statesCS#GU  "Guam"
* $statesCS#MP  "Northern Mariana Islands"
* $statesCS#PR  "Puerto Rico"
* $statesCS#VI  "Virgin Islands"


---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetYesNoNotApplicableVitalRecords.fsh

ValueSet: ValueSetYesNoNotApplicableVitalRecords
Id: ValueSet-yes-no-not-applicable-vr
Title: "Value Set - Yes No Not Applicable Vital Records"
Description: "A set of codes used to respond to any question that can be answered Yes, No, or Not Applicable. 
It is based on the original [Yes No Not Applicable (NCHS)[2.16.840.1.114222.4.11.7486]](https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7486) PHINVADS valueset. 
This IG is the primary source for valuesets for use in vital records.

Mapping to IJE codes [here](ConceptMap-ConceptMapYesNoNotApplicableVitalRecords.html)."
* ^status = #active
* ^experimental = false
* $v2-0136#N "No"
* $v2-0136#Y "Yes"
* $v3-NullFlavor#NA "not applicable"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetYesNoUnknownNotApplicableVitalRecords.fsh

ValueSet: ValueSetYesNoUnknownNotApplicableVitalRecords
Id: ValueSet-yes-no-unknown-not-applicable-vr
Title: "Value Set - Yes No Unknown NotApplicable Vital Records"
Description: "This valueset contains the set of codes used to respond to any question that can be answered Yes, No, Unknown, or Not Applicable.

Mapping to IJE codes [here](ConceptMap-ConceptMapYesNoUnknownNotApplicableVitalRecords.html)."
* ^status = #active
* ^experimental = false
* $v2-0136#Y "Yes"
* $v2-0136#N "No"
* $v3-NullFlavor#UNK "unknown"
* $v3-NullFlavor#NA "not applicable"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/valuesets/ValueSetYesNoUnknownVitalRecords.fsh

ValueSet: ValueSetYesNoUnknownVitalRecords
Id: ValueSet-yes-no-unknown-vr
Title: "Value Set - Yes No Unknown Vital Records"
Description: "This valueset contains the set of codes used to respond to any question that can be answered Yes, No, or Unknown.

Mapping to IJE codes [here](ConceptMap-ConceptMapYesNoUnknownVitalRecords.html)."
* ^status = #active
* ^experimental = false
* $v2-0136#N "No"
* $v2-0136#Y "Yes"
* $v3-NullFlavor#UNK "unknown"

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/aliases.fsh

Alias: $loinc = http://loinc.org
Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $unitsofmeasure = http://unitsofmeasure.org
Alias: $v2-0136 = http://terminology.hl7.org/CodeSystem/v2-0136
Alias: $sct = http://snomed.info/sct
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $v4-data-absent-reason = http://terminology.hl7.org/CodeSystem/data-absent-reason
// Alias: $v2-0005 = RaceAndEthnicityCDC // http://terminology.hl7.org/CodeSystem/v2-0005
Alias: $v3-Ethnicity = http://terminology.hl7.org/CodeSystem/v3-Ethnicity
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $v2-0532 = http://terminology.hl7.org/CodeSystem/v2-0532
Alias: $v3-AdministrativeGender = http://terminology.hl7.org/CodeSystem/v3-AdministrativeGender
Alias: $us-core-birthsex = http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex
//Alias: $CodeSystem-local-component-codes = CodesystemLocalComponentCodes 
//Alias: $CodeSystem-birth-and-fetal-death-financial-class = CodesystemLocalComponentCodes 
//Alias: $CodeSystem-vr-fetal-death-cause-or-condition = CodesystemLocalComponentCodes 
//Alias: $CodeSystem-birth-delivery-occurred = CodesystemLocalComponentCodes 

//Alias: $Extension-partial-date-time = ExtensionPartialDateTimeVitalRecords //// http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Extension-partial-date-time
//Alias: $Extension-date-year = ExtensionDateYearVitalRecords // http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Extension-date-year
//Alias: $Extension-date-month = ExtensionDateMonthVitalRecords // http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Extension-date-month
//Alias: $Extension-date-day = ExtensionDateDayVitalRecords //http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Extension-date-day
//Alias: $Extension-date-time = ExtensionDateTimeVitalRecords //  http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Extension-date-time
Alias: $patient-birthPlace = http://hl7.org/fhir/StructureDefinition/patient-birthPlace
Alias: $data-absent-reason = http://hl7.org/fhir/StructureDefinition/data-absent-reason
Alias: $patient-birthTime = http://hl7.org/fhir/StructureDefinition/patient-birthTime

//Alias: $ValueSet-yes-no-unknown = ValueSetYesNoUnknownVitalRecords
//Alias: $ValueSet-yes-no-unknown-not-applicable = ValueSetYesNoUnknownNotApplicableVitalRecords
//Alias: $ValueSet-date-establishment-approach = ValueSetDateEstablishmentApproachVitalRecords
//Alias: $ValueSet-place-of-death = ValueSetPlaceOfDeathVitalRecords
//Alias: $ValueSet-death-pregnancy-status = ValueSetPregnancyStatusVitalRecords
//Alias: $ValueSet-transportation-incident-role = ValueSetTransportationIncidentRoleVitalRecords
//Alias: $ValueSet-manner-of-death = ValueSetMannerOfDeathVitalRecords
//Alias: $ValueSet-informant-relationship-to-mother = ValueSetInformantRelationshipToMother
Alias: $v3-Ethnicity_1 = http://terminology.hl7.org/ValueSet/v3-Ethnicity
//Alias: $ValueSet-contributory-tobacco-use = ValueSetContributoryTobaccoUse //http://hl7.org/fhir/us/vr-common-library/ValueSet/ValueSet-contributory-tobacco-use
//Alias: $ValueSet-certifier-types = ValueSetCertifierTypes // http://hl7.org/fhir/us/vr-common-library/ValueSet/ValueSet-certifier-types
Alias: $IJE = http://hl7.org/fhir/us/vr-common-library/CodeSystem/codesystem-ije-vr





//   --- ALL VRDR BELOW --- 

// External CS and VS
Alias: $v2-0532 = http://terminology.hl7.org/CodeSystem/v2-0532
Alias: $admingender = http://hl7.org/fhir/administrative-gender
Alias: $maritalStatus = http://hl7.org/fhir/ValueSet/marital-status
Alias: $roleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $contactRole = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: $degreeLicenseCertificateV2 = http://terminology.hl7.org/CodeSystem/v2-0360
Alias: $HL7_EducationLevelCS = 	http://terminology.hl7.org/CodeSystem/v3-EducationLevel
Alias: $v3-ActReason = http://terminology.hl7.org/CodeSystem/v3-ActReason
Alias: $v2-0131 = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: $v2-0136 = http://terminology.hl7.org/CodeSystem/v2-0136
Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $v3-EducationLevel = http://terminology.hl7.org/CodeSystem/v3-EducationLevel
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $loinc = http://loinc.org
Alias: $sct = http://snomed.info/sct
Alias: $icd10 = http://hl7.org/fhir/sid/icd-10
Alias: $ICD10VS = http://hl7.org/fhir/ValueSet/icd-10
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $list-order = http://terminology.hl7.org/CodeSystem/list-order
Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $location-physical-type = http://terminology.hl7.org/CodeSystem/location-physical-type
Alias: $organization-type = http://terminology.hl7.org/CodeSystem/organization-type
Alias: $patient-birthPlace = http://hl7.org/fhir/StructureDefinition/patient-birthPlace
Alias: $v3-ServiceDeliveryLocationRoleType = http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType
Alias: $statesVS = http://hl7.org/fhir/us/core/ValueSet/us-core-usps-state
// Alias: $statesCS = https://www.usps.com
Alias: $statesCS = CodeSystemUSStatesTerritoriesVitalRecords
Alias: $provincesCS = https://canadapost.ca/CodeSystem/ProvinceCodes
Alias: $UCUM = http://unitsofmeasure.org
Alias: $ssn = http://hl7.org/fhir/sid/us-ssn
// Alias: $provinces = http://canadapost.ca/CodeSystem/ProvinceCodes

Alias: $dataabsentreason401 = http://hl7.org/fhir/CodeSystem/data-absent-reason|4.0.1  
Alias: $DataAbsentReason = http://hl7.org/fhir/StructureDefinition/data-absent-reason
// USCore
Alias: USCoreRelatedPerson = http://hl7.org/fhir/us/core/StructureDefinition/us-core-relatedperson
Alias: USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner


// PHINVADS ValueSets - only occupation and industry remain
Alias: $PHVS_Industry_CDC_Census2018 = http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.8066
Alias: $PHVS_Occupation_CDC_Census2018 = http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.8065
Alias: $PHVS_Industry_CDC_Census2012 = http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.8027
Alias: $PHVS_Occupation_CDC_Census2012 = http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.8026

/// VRDR CS and VS
//Alias: $Yes-No-Unknown = YesNoUnknownVS
//Alias: $Yes-No-Unknown-NotApplicable = YesNoUnknownNotApplicableVS
//Alias: $raceMissingValueReason = RaceMissingValueReasonVS
//Alias: $place-of-death = PlaceOfDeathVS
//Alias: $vrdrYesNoUnknown = YesNoUnknownVS
//Alias: $manner-of-death = MannerOfDeathVS
//Alias: $marital-status = MaritalStatusVS
//Alias: $documentSectionCodeSystem = DocumentSectionCS
//Alias: $education-level = EducationLevelVS
//Alias: $bypassEditFlagCodeSystem = BypassEditFlagCS
//Alias: $Cause-Of-Death-Condition = CauseOfDeathCondition
//Alias: $administrative-gender_1 = AdministrativeGenderVS

---

File: repos/HL7_SLASH_vr-common-library/input/fsh/changelog.md

## Change Log

### As of 15 November 2023
- ObservationParentEducationLevelVitalRecords and related example was removed (doesn't add value given ObservationEducationLevelVitalRecords exists). PatientDecedentFetusVitalRecords and related examples moved to BFDR. 

### As of 31 October 2023
- Removed ObservationRaceVitalRecords and ObservationTabulatedEthnicityVitalRecords and related instances

### As of 9 October 2023
- LocationDeathVitalRecords and LocationInjuryVitalRecords were superseded. VRDR and MDI will use SD_DeathLocation and SD_InjuryLocation profiles. 

### As of 9 October 2023

#### **Summary**
VRCL was reorganized to contain only demographic content (education, race, ethnicity, industry/occupation, and location) and key person profiles (patient, practitioner, child, decedent fetus, mother, father). New harmonized person profiles were created using an abstract patient profile. New harmonized profiles were created for coded and input race and ethnicity, and education level. Instances were updated to reference these new profiles as appropriate. Content that is specific to natality/fetal death was moved to BFDR. Content that is specific to mortality was moved to VRDR. Archived copies of these migrating profiles and instances were placed into a folder called "VRCL/superceded," as well as the old person and location profiles that are now harmonized.

#### **Harmonized Profiles**
- observationCodedRaceAndEthnicity_new
- observationEducationLevel_new
- observationInputRaceAndEthnicity_new
- patientChildVitalRecords_new
- patientDecedentFetusVitalRecords_new
- patientMotherFetusVitalRecords_new
- patientFetusVitalRecords_new
- practitionerFetusVitalRecords_new
- relatedPersonFatherFetusVitalRecords_new
- relatedPersonMotherFetusVitalRecords_new
- relatedPersonParentFetusVitalRecords_new

#### **Profiles Moving from VRCL into BFDR**

- conditionEclampsiaHypertensionVitalRecords
- conditionGestationalDiabetesVitalRecords
- conditionGestationalHypertensionVitalRecords
- conditionPrepregnancyDiabetesVitalRecords
- conditionPrepregnancyHypertensionVitalRecords
- observationApgarScoreVitalRecords
- observationBirthWeightVitalRecords
- observationGestationalAgeAtDeliveryVitalRecords
- observationInfantLivingVitalRecords
- observationLastMenstrualPeriodVitalRecords
- observationMotherDeliveryWeightVitalRecords
- observationMotherHeightVitalRecords
- observationMotherPrepregnancyWeightVitalRecords
- observationNoneOfSpecifiedPregnancyRiskFactorsVitalRecords
- observationNumberBirthsNowDeadVitalRecords
- observationNumberBirthsNowLivingVitalRecords
- observationNumberFetalDeathsThisDeliveryVitalRecords
- observationNumberLiveBirthsThisDeliveryVitalRecords
- observationNumberOtherPregnancyOutcomesVitalRecords
- observationNumberPrenatalVisitsVitalRecords
- observationNumberPreviousCesareansVitalRecords
- observationPregnancyRiskFactorVitalRecords
- observationPreviousCesareanVitalRecords
- observationPreviousPretermBirthVitalRecords
- procedureArtificialInseminationVitalRecords
- procedureAssistedFertilizationVitalRecords
- procedureInfertilityTreatmentVitalRecords

#### **Profiles Moving from VRCL into VRDR**

- observationCauseOfDeathPart1VitalRecords
- observationContributingCauseOfDeathPart2VitalRecords
- observationDeathDateVitalRecords
- observationDecedentPregnancyVitalRecords
- observationInjuryIncidentVitalRecords
- observationMannerOfDeathVitalRecords
- observationMethodOfDispositionVitalRecords
- observationTobaccoUseContributedToDeathVitalRecords
- procedureDeathCertificationVitalRecords

#### **Instances Moving from VRCL into BFDR**

- condition-eclampsia-hypertension-jada-ann-quinn
- observation-apgar-score-babyg-quinn-5-min-common
- observation-birth-weight-babyg-quinn-common
- observation-birth-weight-not-named-common
- observation-gestational-age-at-delivery-babyg-quinn-common
- observation-gestational-age-at-delivery-not-named-common
- observation-infant-living-babyg-quinn-common
- observation-last-menstrual-period-carmen-teresa-lee-common
- observation-mother-delivery-weight-carmen-teresa-lee-common
- observation-mother-height-carmen-teresa-lee-common
- observation-mother-prepregnancy-weight-carmen-teresa-lee-common
- observation-nbr-live-births-delivery-carmen-teresa-lee-common
- observation-nbr-other-pregnancy-outcomes-jada-ann-quinn-common
- observation-number-births-now-dead-carmen-teresa-lee-common
- observation-number-births-now-living-carmen-teresa-lee-common
- observation-number-deaths-this-delivery-carmen-teresa-lee-common
- observation-number-live-births-this-delivery-carmen-teresa-lee-common
- observation-number-prenatal-visits-jada-ann-quinn-common
- observation-number-previous-cesareans-carmen-teresa-lee-common
- observation-number-previous-cesareans-carmen-teresa-lee-common
- observation-pregnancy-risk-factor-carmen-teresa-lee-1-common
- observation-previous-cesarean-jada-ann-quinn-common
- procedure-artificial-insemination-jada-ann-quinn-common

#### **Instances Moving from VRCL into VRDR**

- observation-cause-of-death-part1-vr-a-freeman
- observation-contributing-cause-of-death-part2-vr-a-freeman
- observation-death-date-vr-a-freeman
- observation-decedent-pregnancy-vr-a-freeman
- observation-injury-incident-vr-a-freeman-med-ingest
- observation-manner-of-death-vr-a-freeman-accidental
- observation-tobacco-use-vr-a-freeman

#### **Other Superceded Content**

- patientChildVitalRecords
- patientDecedentFetusVitalRecords
- patientMotherVitalRecords
- practitionerVitalRecords
- relatedPersonFatherNaturalVitalRecords
- relatedPersonFatherVitalRecords
- relatedPersonMotherGestationalVitalRecords
- relatedPersonMotherVitalRecords
- relatedPersonParentVitalRecords
- observation-parent-education-level-carmen-teresa-lee-common
- observation-race-jada-ann-quinn-common
- patient-child-babyg-quinn-common
- patient-decedent-fetus-not-named-common
- patient-mother-birth-date-part-absent-common
- patient-mother-carmen-teresa-lee-common
- patient-mother-jada-ann-quinn-common
- practitioner-vital-records-janet-seito-common
- relatedperson-father-natural-tom-yan-lee-common
  
#### **Profiles Moving to VRCL from BFDR**

- patientChild_new
- patientDecedentFetus_new
- patientMother_new

#### **Profiles Moving to VRCL from VRDR**

- observationCodedRaceAndEthnicity_new
- observationInputRaceAndEthnicity_new


---

File: repos/HL7_SLASH_vr-common-library/input/includes/markdown-link-references.md

<!-- includes from sushi -->
{% include fsh-link-references.md %}
<!-- terminology -->
[USCoreConditionEncounterDiagnosis]: https://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-condition-encounter-diagnosis.html
[USCoreConditionProblemsandHealthConcerns]: https://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-condition-problems-health-concerns.html
[USCoreLocation]: https://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-location.html
[USCoreOrganization]: https://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-organization.html
[USCorePatient]: https://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-patient.html
[USCorePractitioner]: https://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-practitioner.html
[USCorePractitionerRole]: https://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-practitionerrole.html
[USCoreBirthSex]: https://hl7.org/fhir/us/core/STU5.0.1/ValueSet-birthsex.html
[QuestionnaireResponse]: https://hl7.org/fhir/R4/questionnaireresponse.html
[PatientBirthTime]: https://hl7.org/fhir/extensions/StructureDefinition-patient-birthTime.html
[PHVS_Occupation_CDC_Census2010VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7186
[PHVS_Industry_CDC_Census2010VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7187
[PHVS_Occupation_CDC_Census2012VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8026
[PHVS_Industry_CDC_Census2012VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8027
[PHVS_Occupation_CDC_Census2018VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8065
[PHVS_Industry_CDC_Census2018VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8066
[ACMESystemRejectVS]: ValueSet-vrdr-system-reject-vs.html
[HL7EncounterAdmitSourceVS]: https://hl7.org/fhir/ValueSet/encounter-admit-source
[USCoreDischargeDispositionVS]: https://hl7.org/fhir/us/core/ValueSet/us-core-discharge-disposition
[USCoreBirthSexVS]: https://hl7.org/fhir/us/core/ValueSet/birthsex

<!-- Notes/Pages -->
[PartialDatesAndTimes]: usage.html#partial-dates-and-times
[note on birth date and time]: usage.html#birth-date-and-time
[note on Child and Decedent Fetus name]: https://hl7.org/fhir/us/bfdr/2024Jan/usage.html#child-and-decedent-fetus-name
[note on patient gender]: usage.html#gender
[CityCodes]: usage.html#city-codes
[CountyCodes]: usage.html#county-codes
[StateLiterals]: usage.html#state-literals
[CountryLiterals]: usage.html#country-literals
[Handling of edit flags]: usage.html#handling-of-edit-flags
[Change Log]: change_log.html
[Changes Between Versions]: content-transitions.html
<!-- Other IGs -->
[Birth and Fetal Death Vital Reporting]: https://hl7.org/fhir/us/bfdr
[Vital Records Common Library]: https://hl7.org/fhir/us/vr-common-library
[Medicolegal Death Investigation]: https://hl7.org/fhir/us/fhir-mdi-ig/STU1.1
[Vital Records Death Reporting]: https://hl7.org/fhir/us/vrdr/
[VRFM]: https://build.fhir.org/ig/nightingaleproject/vital_records_fhir_messaging_ig/message.html#successful-death-record-submission





---

File: repos/HL7_SLASH_vr-common-library/input/includes/note-to-balloters.md

<div class="note-to-balloters" markdown="1">

####  January 2024 Ballot of STU2

This STU2 ballot addresses the following:

- Reorganization of vital-records related content and harmonization to reduce redunancy and near redundancy. See [Vital Records IG Harmonization](vr_ig_harmonization.html).
- This reorganization and harmonization includes
  - Addition of profiles supporting NCHS-standard submission of race, ethnicity, industry and occupation inputs, and return of coded race and ethnicity.
  - Inclusion of extensions used by multiple vital-records related FHIR IGs (e.g., partial dates, coded address components)
  - Movement of content (i.e., profiles, valuesets, examples) that is used exclusively in the birth and fetal death use cases to the Birth and Fetal Death Reporting IG.  As a result, the total content of this IG has seeminly shrunk.
  - Inclusion of valuesets formerly hosted in PHINVADs.  This follows the pattern established by the VRDR IG.

  For a description of the changes to VRCL from STU1.1, see the [Change table](content-transitions.html).
  
</div><!-- note-to-balloters -->

---

File: repos/HL7_SLASH_vr-common-library/input/pagecontent/change_log.md

### STU 2.0 Changes 
* Most of the changes since STU1.1 relate to [Vital Records IG Harmonization](vr_ig_harmonization.html).  For a summary of harmonization-related changes see  the [Content Transitions](content-transitions.html) page.
* Restricted data absent reasons to codes 'unknown' and 'temp-unknown' in [ExtensionPartialDateVitalRecords] and [ExtensionPartialDateTimeVitalRecords]. Added [ValueSetPartialDateDataAbsentReasonVitalRecords] 
* Replaced local codesystem for Canadian Provinces with https://canadapost.ca/CodeSystem/ProvinceCodes
* In valueset [ValueSetBirthAttendantTitlesVitalRecords] replaced retired SNOMEDCT code for Medical Doctor 112247003 with active code 309343006.
* Eliminated the local code system for missing race value reasons that was used for [ValueSetRaceMissingValueReasonVitalRecords]. Reworked the value set and concept map with NullFlavor and ActReason codes. 
* Eliminate string length limits on address extensions. Document length limits on submissions in comment.
* Eliminate Unused Extensions for Related Person (deceased, race, ethnicity).  These are not needed.
* Change [ExtensionPatientFetalDeathVitalRecords] to be a Boolean extension of Patient.deceased
* Constrain units of parent ages -- [ExtensionReportedParentAgeAtDeliveryVitalRecords].
* Add abstract profile of USCoreLocation to serve as the basis for VRDR and BFDR Location profiles.
* Added record identifiers that are used in VRDR and BFDR to common library
* Renamed [ValueSetMothersDateOfBirthEditFlagsVitalRecords](https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-mothers-date-of-birth-edit-flags-vr.html) to [ValueSetDateOfBirthEditFlagsVitalRecords] to generalize utility. 
* Eliminated  HispanicNoUknown valueset which was content-identical with [ValueSetYesNoUnknownVitalRecords].
* Consolidate [ValueSetBirthSexChildVitalRecords](https://hl7.org/fhir/us/vr-common-library/2024Jan//ValueSet/ValueSet-birth-sex-child-vr) and [ValueSetBirthSexFetusVitalRecords](https://hl7.org/fhir/us/vr-common-library/2024Jan//ValueSet/ValueSet-birth-sex-fetus-vr) into a single VS called [ValueSetSexAssignedAtBirthVitalRecords]
* Use an inline extension for motherOrFather in [ExtensionReportedParentAgeAtDeliveryVitalRecords]
* Removing Missing Value Reason codesystem ([ValueSetRaceMissingValueReasonVitalRecords] uses THO codes)
* Add Domestic Partnership to [ValueSetMaritalStatusVitalRecords]
* Restrict birth sex for newborn to M,F,U. Added [ValueSetBirthSexChildVitalRecords](https://hl7.org/fhir/us/vr-common-library/2024Jan//ValueSet/ValueSet-birth-sex-child-vr), and referenced from [PatientChildVitalRecords] 
* Added abstract patient profile [PatientVitalRecords], which is derived from [USCorePatient], and is the basis for  [PatientChildVitalRecords] and [PatientMotherVitalRecords], as well as Patient profiles in VRDR and BFDR.
* Generalization of Parent Education Level to Education Level. [ObservationEducationLevelVitalRecords] now accomodates use cases in VRDR and BFDR, with subject now a generalized [PatientVitalRecords], focus can now be a [RelatedPersonParentVitalRecords] or Mother (rather than just Mother/Father), and the addition of a bypass edit flag.  


### Previous Versions
See the change log in the ([previous versios](https://hl7.org/fhir/us/vr-common-library/STU1.1/change_log.html)).

{% include markdown-link-references.md %}

---

File: repos/HL7_SLASH_vr-common-library/input/pagecontent/content-transitions.md

<style>
    table.style1 { 
        border-collapse: collapse; 
        width: 100%; 
        table-layout: fixed;
    }  
    table.style1 tbody tr {
        border-bottom: 1px solid #dddddd;
    } 
    table.style1 tbody tr:nth-of-type(even) { 
        background-color: #f3f3f3; 
    } 
    table.style1 tbody tr:last-of-type {
        border-bottom: 2px solid #98c1d9;
    }
    table.style1 td:first-of-type {
        text-align: left;
    }
    table.style1 td:nth-of-type(2) {
        text-align: center;
    }
    table.style1 td:nth-of-type(3) {
        text-align: left;
    }
</style>
{% include transitions_documentation.md %}
<br/><br/>

### STU2 Profiles

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Previous Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='StructureDefinition-Location-vr.html'>LocationVitalRecords</a> </td><td>New </td><td> New abstract profile of USCoreLocation defining all extensions. </td></tr>
<tr><td> <a href='StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-coded-race-and-ethnicity.html'>VRDR</a> </td><td> Incorporated standard vital records approach to race & ethnicity (generalized to support all vital records use cases) </td></tr>
<tr><td> <a href='StructureDefinition-Observation-education-level-vr.html'>ObservationEducationLevelVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-parent-education-level-vr.html'>VRCL</a>  </td><td> Generalized profile now has subject set to <a href='StructureDefinition-Patient-vr.html'>patient</a>, focus set to <a href='StructureDefinition-Patient-mother-vr.html'>mother</a> or <a href='StructureDefinition-RelatedPerson-parent-vr.html'>parent</a>, and profile now includes bypassEditFlag </td></tr>
<tr><td> <a href='StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-emerging-issues.html'>VRDR</a> </td><td>Moved to VRCL to be used in BFDR (fetal birth/death) and VRDR (mortality) use cases </td></tr>
<tr><td> <a href='StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-input-race-and-ethnicity.html'>VRDR</a> </td><td> Incorporated standard vital records approach to race & ethnicity (generalized to support all vital records use cases) </td></tr>
<tr><td> <a href='StructureDefinition-Patient-child-vr.html'>PatientChildVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Patient-child-vr.html'>VRCL</a> </td><td> Now inherits from <a href='StructureDefinition-Patient-vr.html'>PatientVitalRecords</a> rather than <a href='https://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-patient.html'>USCorePatient</a>, added bypassedit flag to multiplebirth, birthTime, dataAbsentReason, partialDate no longer extensions  </td></tr>
<tr><td> <a href='StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Patient-mother-vr.html'>VRCL</a> </td><td> New profile inherits from  <a href='StructureDefinition-Patient-vr.html'>PatientVitalRecords</a> rather than <a href='https://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-patient.html'>USCorePatient</a> </td></tr>
<tr><td> <a href='StructureDefinition-Patient-vr.html'>PatientVitalRecords</a> </td><td> New </td><td> New addition, serves as a new abstract profile (parent to <a href='StructureDefinition-Patient-child-vr.html'>PatientChild</a>, <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a>, <a href='StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a>, and <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-decedent.html'>Decedent</a>) </td></tr>
<tr><td> <a href='StructureDefinition-Practitioner-vr.html'>PractitionerVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Practitioner-vr.html'>VRCL</a> </td><td> Now includes slice for qualification, optional extension for role, additional address slice items, and name field constrained to exactly one</td></tr>
<tr><td> <a href='StructureDefinition-RelatedPerson-father-natural-vr.html'>RelatedPersonFatherNaturalVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-RelatedPerson-father-natural-vr.html'>VRCL</a> </td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-RelatedPerson-father-vr.html'>RelatedPersonFatherVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-RelatedPerson-father-vr.html'>VRCL</a> </td><td> Now includes birthDate bypassEditFlag </td></tr>
<tr><td> <a href='StructureDefinition-RelatedPerson-mother-vr.html'>RelatedPersonMotherVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-RelatedPerson-mother-vr.html'>VRCL</a> </td><td> Now includes birthDate bypassEditFlag, communication field no longer MS   </td></tr>
<tr><td> <a href='StructureDefinition-RelatedPerson-parent-vr.html'>RelatedPersonParentVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-RelatedPerson-parent-vr.html'>VRCL</a> </td><td> Now includes birthDate bypassEditFlag, subject generalized to <a href='StructureDefinition-Patient-vr.html'>PatientVitalRecords</a> </td></tr>
</tbody>
</table>


### STU2 Extensions

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Previous Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='StructureDefinition-BypassEditFlag.html'>ExtensionBypassEditFlagVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-BypassEditFlag.html'>VRDR</a> </td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Extension-partial-date-vr.html'>ExtensionPartialDateVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Extension-partial-date-vr.html'>VRCL</a> </td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Extension-partial-date-time-vr.html'>ExtensionPartialDateTimeVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Extension-partial-date-time-vr.html'>VRCL</a> </td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Extension-relatedperson-birthplace-vr.html'>ExtensionRelatedpersonBirthplaceVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Extension-relatedperson-birthplace-vr.html'>VRCL</a> </td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Extension-patient-fetal-death-vr.html'>ExtensionPatientFetalDeathVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Extension-patient-fetal-death-vr.html'>VRCL</a> </td><td> Converted from flag (presence-absence) extension to Patient to Boolean valued extension to Patient.deceased </td></tr>
<tr><td> <a href='StructureDefinition-CityCode.html'>ExtensionCityCodeVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-CityCode.html'>VRDR</a> </td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-DistrictCode.html'>ExtensionDistrictCodeVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-DistrictCode.html'>VRDR</a>  </td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-PostDirectional.html'>ExtensionPostDirectionalVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-PostDirectional.html'>VRDR</a> </td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-PreDirectional.html'>ExtensionPreDirectionalVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-PreDirectional.html'>VRDR</a> </td><td>  - </td></tr>
<tr><td> <a href='StructureDefinition-Extension-reported-parent-age-at-delivery-vr.html'>ExtensionReportedParentAgeAtDeliveryVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Extension-reported-parent-age-at-delivery-vr.html'>VRCL</a>  </td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-StreetDesignator.html'>ExtensionStreetDesignatorVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-StreetDesignator.html'>VRDR</a>  </td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-StreetName.html'>ExtensionStreetNameVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-StreetName.html'>VRDR</a> </td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-StreetNumber.html'>ExtensionStreetNumberVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-StreetNumber.html'>VRDR</a> </td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-UnitOrAptNumber.html'>ExtensionUnitOrAptNumberVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-UnitOrAptNumber.html'>VRDR</a> </td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Extension-within-city-limits-indicator-vr.html'>ExtensionWithinCityLimitsIndicatorVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Extension-within-city-limits-indicator-vr.html'>VRCL</a>   </td><td> changed to reference VRCL, rather than phinvads valueset </td></tr>
<tr><td> <a href='StructureDefinition-AuxiliaryStateIdentifier1.html'>AuxiliaryStateIdentifier1</a></td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-AuxiliaryStateIdentifier1.html'>VRDR</a> </td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-AuxiliaryStateIdentifier2.html'>AuxiliaryStateIdentifier2</a></td><td> <a href='StructureDefinition-AuxiliaryStateIdentifier2.html'>VRDR</a> </td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-CertificateNumber.html'>CertificateNumber</a></td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-CertificateNumber.html'>VRDR</a> </td><td> - </td></tr>
</tbody>
</table>


### STU2 Valuesets

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Previous Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='ValueSet-ValueSet-birth-attendant-titles-vr.html'>ValueSetBirthAttendantTitlesVitalRecords</a> </td><td> <a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7111'>PHINVADS</a> </td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-birthplace-country-vr.html'>ValueSetBirthplaceCountryVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-birthplace-country-vs.html'>VRDR</a> </td><td> Incorporated standard vital records approach to address  </td></tr>
<tr><td> <a href='ValueSet-ValueSet-coded-race-and-ethnicity-person-vr.html'>ValueSetCodedRaceAndEthnicityPersonVitalRecords</a> </td><td> New </td><td> New addition, incorporated standard vital records approach to race & ethnicity (generalized to support all vital records use cases) </td></tr>
<tr><td> <a href='ValueSet-ValueSet-date-of-birth-edit-flags-vr.html'>ValueSetDateOfBirthEditFlagsVitalRecords</a> </td><td> <a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?id=3BD473EE-40DD-E811-816D-0017A477041A'>PHINVADS</a> </td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-education-level-vr.html'>ValueSetEducationLevelVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-education-level-vs.html'>VRDR</a> </td><td> replaced <a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7582'>PHINVADS</a> </td></tr>
<tr><td> <a href='ValueSet-ValueSet-education-level-person-vr.html'>ValueSetEducationLevelPersonVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/ValueSet-ValueSet-education-level-person-vr.html'>VRCL</a> </td><td> Now includes "Highest level of education [US Standard Certificate of Death]" </td></tr>
<tr><td> <a href='ValueSet-ValueSet-father-relationship-vr.html'>ValueSetFatherRelationshipVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/ValueSet-ValueSet-father-relationship-vr.html'>VRCL</a>  </td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-hispanic-origin-vr.html'>ValueSetHispanicOriginVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-hispanic-origin-vs.html'>VRDR</a> </td><td> Incorporated standard vital records approach to race & ethnicity (generalized to support all vital records use cases)  </td></tr>
<tr><td> <a href='ValueSet-ValueSet-jurisdiction-vr.html'>ValueSetJurisdictionVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-jurisdiction-vs.html'>VRDR</a>  </td><td> Incorporated standard vital records approach to address </td></tr>
<tr><td> <a href='ValueSet-ValueSet-input-race-and-ethnicity-person-vr.html'>ValueSetInputRaceAndEthnicityPersonVitalRecords</a> </td><td> New </td><td> Incorporated standard vital records approach to race & ethnicity (generalized to support all vital records use cases) </td></tr>
<tr><td> <a href='ValueSet-ValueSet-mother-relationship-vr.html'>ValueSetMotherRelationshipVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/ValueSet-ValueSet-mother-relationship-vr.html'>VRCL</a>  </td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-marital-status-vr.html'>ValueSetMaritalStatusVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-marital-status-vs.html'>VRDR</a>  </td><td> Tentatively added T for domestic partnership.  Not included in Concept Map </td></tr>
<tr><td> <a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-race-code-vs.html'>VRDR</a>  </td><td> Incorporated standard vital records approach to race & ethnicity (generalized to support all vital records use cases) </td></tr>
<tr><td> <a href='ValueSet-ValueSet-race-missing-value-reason-vr.html'>ValueSetRaceMissingValueReasonVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-race-missing-value-reason-vs.html'>VRDR</a>  </td><td> Meant to be used outside of just mortality use case  </td></tr>
<tr><td> <a href='ValueSet-ValueSet-race-recode-40-vr.html'>ValueSetRaceRecode40VitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-race-recode-40-vs.html'>VRDR</a> </td><td> Meant to be used outside of just mortality use case  </td></tr>
<tr><td> <a href='ValueSet-ValueSet-residence-country-vr.html'>ValueSetResidenceCountryVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-residence-country-vs.html'>VRDR</a>  </td><td> Incorporated standard vital records approach to address  </td></tr>
<tr><td> <a href='ValueSet-ValueSet-sex-assigned-at-birth-vr.html'>ValueSetSexAssignedAtBirthVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/core/STU5.0.1/ValueSet-birthsex.html'>USCoreBirthSex</a>  </td><td> Restricted to NCHS-specific codes </td></tr>
<tr><td> <a href='ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-states-territories-provinces-vs.html'>VRDR</a> </td><td> Incorporated standard vital records approach to address  </td></tr>
<tr><td> <a href='ValueSet-ValueSet-usstates-territories-vr.html'>ValueSetUSStatesAndTerritoriesVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-usstates-territories-vs.html'>VRDR</a> </td><td> Incorporated standard vital records approach to address  </td></tr>
<tr><td> <a href='ValueSet-ValueSet-usterritories-vr.html'>ValueSetUSTerritoriesVitalRecords</a> </td><td>New </td><td> Needed for BFDR Questionnaire  </td></tr>
<tr><td> <a href='ValueSet-ValueSet-usstates-vr.html'>ValueSetUSStatesVitalRecords</a> </td><td>New </td><td> Needed for BFDR Questionnaire  </td></tr>
<tr><td> <a href='ValueSet-ValueSet-units-of-age-vr.html'>ValueSetUnitsOfAgeVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-units-of-age-vs.html'>VRDR</a> </td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-yes-no-not-applicable-vr.html'>ValueSetYesNoNotApplicableVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/ValueSet-ValueSet-yes-no-not-applicable-vr.html'>VRCL</a> </td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/ValueSet-ValueSet-yes-no-unknown-vr.html'>VRCL</a>  </td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-yes-no-unknown-not-applicable-vr.html'>ValueSetYesNoUnknownNotApplicableVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/ValueSet-ValueSet-yes-no-unknown-not-applicable-vr.html'>VRCL</a> </td><td> - </td></tr>
<tr><td> <a href='ValueSet-valueset-edit-bypass-01234-vr.html'>ValueSetEditBypass01234VitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-edit-bypass-01234-vs.html'>VRDR</a> </td><td> Meant to be used outside of just mortality use case  </td></tr> 
<tr><td> <a href='ValueSet-ValueSet-plurality-edit-flags-vr.html'>ValueSetPluralityEditFlagsVitalRecords</a> </td><td> <a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?id=3A484C53-FDFD-E611-A856-0017A477041A'>PHINVADS</a>  </td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-role-vr.html'>ValueSetRoleVitalRecords</a> </td><td> New </td><td> New Addition </td></tr>
</tbody>
</table>


### STU2 Codesystems

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Previous Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='CodeSystem-codesystem-vr-component.html'>CodeSystemComponentVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/CodeSystem-CodeSystem-local-component-codes-vr.html'>VRCL</a>  </td><td> - </td></tr>
<tr><td> <a href='CodeSystem-CodeSystem-country-code-vr.html'>CodeSystemCountryCodeVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-country-code-cs.html'>VRDR</a>  </td><td>  Incorporated standard vital records approach to address  </td></tr>
<tr><td> <a href='CodeSystem-CodeSystem-hispanic-origin-vr.html'>CodeSystemHispanicOriginVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-hispanic-origin-cs.html'>VRDR</a>  </td><td>  Incorporated standard vital records approach to race & ethnicity (generalized to support all vital records use cases)  </td></tr>
<tr><td> <a href='CodeSystem-CodeSystem-jurisdictions-vr.html'>CodeSystemJurisdictionsVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-jurisdictions-cs.html'>VRDR</a>  </td><td>  Meant to be used outside of just mortality use case  </td></tr>
<tr><td> <a href='CodeSystem-CodeSystem-race-code-vr.html'>CodeSystemRaceCodeVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-race-code-cs.html'>VRDR</a> </td><td>  Incorporated standard vital records approach to race & ethnicity (generalized to support all vital records use cases) </td></tr>
<tr><td> <a href='CodeSystem-CodeSystem-race-recode-40-vr.html'>CodeSystemRaceRecode40VitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-race-recode-40-cs.html'>VRDR</a>  </td><td>  Incorporated standard vital records approach to race & ethnicity (generalized to support all vital records use cases)  </td></tr>
<tr><td> <a href='CodeSystem-CodeSystem-local-observation-codes-vr.html'>CodeSystemLocalObservationsCodesVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-observations-cs.html'>VRDR</a> </td><td> Includes additional codes for decedent, mother, and father use cases </td></tr>
<tr><td> <a href='CodeSystem-CodeSystem-vr-edit-flags.html'>CodeSystemEditFlagsVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-bypass-edit-flag-cs.html'>VRDR</a>  </td><td> Includes additional codes for plurality and date of birth value sets, meant to be used outside of just mortality use case  </td></tr>
</tbody>
</table>


### Removed Profiles
This section has been updated to reflect changes at ballot time, allowing the reader to follow the harmonization process.
For details on the subsequent evolution of these profiles, see their new home IG.

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Current Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Condition-eclampsia-hypertension-vr.html'>ConditionEclampsiaHypertensionVitalRecords</a></td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Condition-eclampsia-hypertension.html'>BFDR</a>  </td><td>  Only used for birth use case </td></tr> 
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Condition-gestational-diabetes-vr.html'>ConditionGestationalDiabetesVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Condition-gestational-diabetes.html'>BFDR</a>    </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Condition-gestational-hypertension-vr.html'>ConditionGestationalHypertensionVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Condition-gestational-hypertension.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Condition-prepregnancy-diabetes-vr.html'>ConditionPrepregnancyDiabetesVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Condition-prepregnancy-diabetes.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Condition-prepregnancy-hypertension-vr.html'>ConditionPrepregnancyHypertensionVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Condition-prepregnancy-hypertension.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Location-death-vr.html'>LocationDeathVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-death-location.html'>VRDR</a>   </td><td>  Only used for death use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Location-injury-vr.html'>LocationInjuryVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-injury-location.html'>VRDR</a> </td><td>  Only used for death use case </td></tr> 
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-apgar-score-vr.html'>ObservationApgarScoreVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-apgar-score.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-birth-weight-vr.html'>ObservationBirthWeightVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-birth-weight.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-cause-of-death-part1-vr.html'>ObservationCauseOfDeathPart1VitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-cause-of-death-part1.html'>VRDR</a> </td><td>  Only used for death use case </td></tr> 
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-contributing-cause-of-death-part2-vr.html'>ObservationContributingCauseOfDeathPart2VitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-cause-of-death-part2.html'>VRDR</a> </td><td>  Only used for death use case </td></tr> 
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-death-date-vr.html'>ObservationDeathDateVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-death-date.html'>VRDR</a> </td><td>  Only used for death use case </td></tr> 
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-decedent-pregnancy-vr.html'>ObservationDecedentPregnancyVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-decedent-pregnancy-status.html'>VRDR</a> </td><td>  Only used for death use case </td></tr> 
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-gestational-age-at-delivery-vr.html'>ObservationGestationalAgeAtDeliveryVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-gestational-age-at-delivery.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-infant-living-vr.html'>ObservationInfantLivingVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-infant-living.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-injury-incident-vr.html'>ObservationInjuryIncidentVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-injury-incident.html'>VRDR</a> </td><td>  Only used for death use case </td></tr> 
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-last-menstrual-period-vr.html'>ObservationLastMenstrualPeriodVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-last-menstrual-period.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-manner-of-death-vr.html'>ObservationMannerOfDeathVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-manner-of-death.html'>VRDR</a> </td><td>  Only used for death use case </td></tr> 
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-mother-delivery-weight-vr.html'>ObservationMotherDeliveryWeightVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-mother-delivery-weight.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-mother-height-vr.htm'>ObservationMotherHeightVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-mother-height.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-mother-prepregnancy-weight-vr.html'>ObservationMotherPrepregnancyWeightVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-mother-prepregnancy-weight.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-none-of-specified-pregnancy-risk-factors-vr.html'>ObservationNoneOfSpecifiedPregnancyRiskFactorsVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-none-of-specified-pregnancy-risk-factors.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-number-births-now-dead-vr.html'>ObservationNumberBirthsNowDeadVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-number-births-now-dead.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-number-births-now-living-vr.html'>ObservationNumberBirthsNowLivingVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-number-births-now-living.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-number-fetal-deaths-this-delivery-vr.html'>ObservationNumberFetalDeathsThisDeliveryVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-number-fetal-deaths-this-delivery.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-number-live-births-this-delivery-vr.html'>ObservationNumberLiveBirthsThisDeliveryVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-number-live-births-this-delivery.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-number-other-pregnancy-outcomes-vr.html'>ObservationNumberOtherPregnancyOutcomesVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-number-other-pregnancy-outcomes.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-number-prenatal-visits-vr.html'>ObservationNumberPrenatalVisitsVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-number-prenatal-visits.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-number-previous-cesareans-vr.html'>ObservationNumberPreviousCesareansVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-number-previous-cesareans.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-parent-education-level-vr.html'>ObservationParentEducationLevelVitalRecords</a> </td><td> Deleted  </td><td>  Removed (only relying on <a href='StructureDefinition-Observation-education-level-vr.html'>ObservationEducationLevelVitalRecords</a>) </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-plurality-vr.html'>ObservationPluralityVitalRecords</a> </td><td> Deleted   </td><td>  Removed (plurality is now specified with alive/dead births) </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-previous-cesarean-vr.html'>ObservationPreviousCesareanVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-previous-cesarean.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-previous-preterm-birth-vr.html'>ObservationPreviousPretermBirthVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Observation-previous-preterm-birth.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-race-vr.html'>ObservationRaceVitalRecords</a> </td><td> Deleted  </td><td>  Superseded by <a href='StructureDefinition-input-race-and-ethnicity-vr.html'>input</a> and <a href='StructureDefinition-coded-race-and-ethnicity-vr.html'>coded</a> race </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-tabulated-ethnicity-vr.html'>ObservationTabulatedEthnicityVitalRecords</a> </td><td>  Deleted  </td><td>  Use was deprecated, superseded by <a href='StructureDefinition-input-race-and-ethnicity-vr.html'>input</a> and <a href='StructureDefinition-coded-race-and-ethnicity-vr.html'>coded</a> race </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Parameters-coding-status-values-vr.html'>ParametersCodingStatusValuesVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-coding-status-values.html'>VRDR</a>    </td><td>  Only used for death use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Patient-decedent-fetus-vr.html'>PatientDecedentFetusVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Patient-decedent-fetus.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Procedure-artificial-insemination-vr.html'>ProcedureArtificialInseminationVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Procedure-artificial-insemination.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Procedure-assisted-fertilization-vr.html'>ProcedureAssistedFertilizationVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Procedure-assisted-fertilization.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Procedure-death-certification-vr.html'>ProcedureDeathCertificationVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-death-certification.html'>VRDR</a> </td><td>  Only used for death use case </td></tr> 
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Procedure-infertility-treatment-vr.html'>ProcedureInfertilityTreatmentVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/2024Jan/StructureDefinition-Procedure-infertility-treatment.html'>BFDR</a>   </td><td>  Only used for birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-RelatedPerson-mother-gestational-vr.html'>RelatedPersonMotherGestationalVitalRecords</a> </td><td>  Deleted  </td><td> Removed </td></tr>
</tbody>
</table>


### Removed Extensions

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Current Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Extension-date-day-vr.html'>ExtensionDateDayVitalRecords</a> </td><td>  Deleted  </td><td> No longer used in partial date/time extensions </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Extension-date-time-vr.html'>ExtensionDateTimeVitalRecords</a> </td><td>  Deleted  </td><td> No longer used in partial date/time extensions </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Extension-date-month-vr.html'>ExtensionDateMonthVitalRecords</a> </td><td>  Deleted  </td><td> No longer used in partial date/time extensions </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Extension-date-year-vr.html'>ExtensionDateYearVitalRecords</a> </td><td>  Deleted  </td><td> No longer used in partial date/time extensions </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Extension-relatedperson-deceased-vr.html'>ExtensionRelatedPersonDeceasedVitalRecords</a> </td><td>  Deleted  </td><td> Not needed for exchange of vital records data. </td></tr>
</tbody>
</table>


### Removed Valuesets

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Current Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/ValueSet-ValueSet-apgar-timing-vr.html'>ValueSetApgarTimingVitalRecords</a> </td><td>  <a href='https://hl7.org/fhir/us/bfdr/2024Jan/ValueSet-ValueSet-apgar-timing.html'>BFDR</a>    </td><td> Only relevant to birth use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/ValueSet-ValueSet-certifier-types-vr.html'>ValueSetCertifierTypesVitalRecords</a> </td><td>   <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-certifier-types-vs.html'>VRDR</a>    </td><td> Only relevant to mortality use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/ValueSet-ValueSet-contributory-tobacco-use-vr.html'>ValueSetContributoryTobaccoUseVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-contributory-tobacco-use-vs.html'>VRDR</a>     </td><td> Only relevant to mortality use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/ValueSet-ValueSet-date-establishment-approach-vr.html'>ValueSetDateEstablishmentApproachVitalRecords</a> </td><td> <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-date-of-death-determination-methods-vs.html'>VRDR</a>   </td><td> Only relevant to mortality use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/ValueSet-ValueSet-death-pregnancy-status-vr.html'>ValueSetDeathPregnancyStatusVitalRecords</a> </td><td>  <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-pregnancy-status-vs.html'>VRDR</a>    </td><td> Only relevant to mortality use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/ValueSet-ValueSet-intentional-reject-vr.html'>ValueSetIntentionalRejectVitalRecords</a> </td><td>  <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-intentional-reject-vs.html'>VRDR</a>   </td><td> Only relevant to mortality use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/ValueSet-ValueSet-manner-of-death-vr.html'>ValueSetMannerOfDeathVitalRecords</a> </td><td>  <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-manner-of-death-vs.html'>VRDR</a>    </td><td> Only relevant to mortality use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/ValueSet-ValueSet-place-of-death-vr.html'>ValueSetPlaceOfDeathVitalRecords</a> </td><td>  <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-place-of-death-vs.html'>VRDR</a>   </td><td> Only relevant to mortality use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/ValueSet-ValueSet-system-reject-vr.html'>ValueSetSystemRejectVitalRecords</a> </td><td>  <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-system-reject-vs.html'>VRDR</a>   </td><td> Only relevant to mortality use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/ValueSet-ValueSet-transax-conversion-vr.html'>ValueSetTransaxConversionVitalRecords</a> </td><td>  <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-transax-conversion-vs.html'>VRDR</a>   </td><td> Only relevant to mortality use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/ValueSet-ValueSet-transportation-incident-role-vr.html'>ValueSetTransportationIncidentRoleVitalRecords</a> </td><td>  <a href='https://hl7.org/fhir/us/vrdr/STU2.2/ValueSet-vrdr-transportation-incident-role-vs.html'>VRDR</a>     </td><td> Only relevant to mortality use case </td></tr>
</tbody>
</table>


### Removed Codesystems

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Current Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/CodeSystem-CodeSystem-death-pregnancy-status-vr.html'>CodeSystemDeathPregnancyStatusVitalRecords</a></td><td>  <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-CodeSystem-death-pregnancy-status.html'>VRDR</a>  </td><td> Only relevant to mortality use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/CodeSystem-CodeSystem-death-reporting-codes-vr.html'>CodeSystemDeathReportingCodesVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/mdi/STU1.1/CodeSystem-CodeSystem-vr-codes.html'>MDI</a>   </td><td> Only relevant to death investigation use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/CodeSystem-CodeSystem-intentional-reject-vr.html'>IntentionalRejectCS</a> </td><td>  <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-intentional-reject-cs.html'>VRDR</a>   </td><td> Only relevant to mortality use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/CodeSystem-CodeSystem-local-component-codes-vr.html'>CodeSystemLocalComponentCodesVitalRecords</a> </td><td>  <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-observations-cs.html'>VRDR</a>  </td><td> Only relevant to mortality use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/CodeSystem-CodeSystem-system-reject-vr.html'>CodeSystemSystemRejectVitalRecords</a> </td><td>  <a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-system-reject-cs.html'>VRDR</a> </td><td> Only relevant to mortality use case </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/CodeSystem-CodeSystem-transax-conversion-vr.html'>CodeSystemTransaxConversionVitalRecords</a> </td><td><a href='https://hl7.org/fhir/us/vrdr/STU2.2/CodeSystem-vrdr-transax-conversion-cs.html'>VRDR</a> </td><td> Only relevant to mortality use case </td></tr>

</tbody>
</table>



---

File: repos/HL7_SLASH_vr-common-library/input/pagecontent/credits.md

### Project Team
#### Project Facilitators
The Center for Disease Control (CDC), National Center for Health Statistics (NCHS), Division of Vital Records (DVS) facilitated the project in collaboration with the [NVSS Modernization Community of Practice (CoP)](https://www.cdc.gov/nchs/nvss/modernization/cop.htm), and the DVS Statistical Analysis and Surveillance Branch (SASB).
Contributors from CDC/NCHS/DVS included:
* [Paul Sutton](https://www.cdc.gov/nchs/about/organization.htm), Acting Director of DVS
* Kate Brett, DVS Office of the Director
* [Cynthia Bush](https://www.linkedin.com/in/cynthia-cindy-bush-584bb0158/), Health Scientist (Informatics), DVS Office of the Director 
* Alaina Gregory, DVS Office of the Director
* Kelly Brown, NVSS CoP team
* Bontu Fitta (Metas Solutions), NVSS CoP team
* [Prachi Mehta](https://www.linkedin.com/in/prachimehtad/), Sr Health Scientist (Informatics), Office of the Director
* Donna Hoyert,  DVS/SASB
* Joyce Martin, DVS/SASB
* Claudia Valenzuela DVS/SASB

#### STU1 and STU1.1 Specification Developers
* [Sarah Gaunt](https://www.linkedin.com/in/sarahgaunt/), Lantana

#### STU2 Specification Developers
* [Saul A. Kravitz](https://www.linkedin.com/in/skravitz/), MITRE
* [Robert Passas](https://www.linkedin.com/in/robert-passas-b2b795124/), MITRE
* [Patricia Tran](https://www.linkedin.com/in/patricia-tran-56896874/), MITRE

#### Development Team
* [Lantana Consulting Group](https://www.lantanagroup.com/), Lantana Consulting Group provides services and software for standards-based health information exchange.
* [MITRE](https://www.mitre.org/), a not-for-profit organization working in the public interest across federal, state and local governments, as well as industry and academia.

### Acknowledgements
* The development of the VRCL implementation guide by the [development team](credits.html#development-team) was performed under contract to The Centers for Disease Control (CDC), National Center for Health Statistics (NCHS), Division of Vital Records (DVS) under the direction of the [project facilitators](credits.html#project-facilitators).
* STU1 and STU1.1 versions of this guide were developed using [Trifolia-on-FHIR](https://trifolia-fhir-dev.lantanagroup.com/) and professional guidance provided by [Lantana Consulting Group](https://www.lantanagroup.com/).
* The published content of the STU2 version of this guide was developed using [FHIR Shorthand syntax](http://hl7.org/fhir/uv/shorthand/) and the [SUSHI tookit](https://fshschool.org/docs/sushi/), a free, open source toolchain from the [MITRE](https://www.mitre.org). Generous guidance on FHIR Shorthand and SUSHI was provided by [Chris Moesel](https://www.linkedin.com/in/cmoesel/).  
* The VRCL FHIR IG is a work product of the [HL7 Public Health Workgroup](http://www.hl7.org/Special/committees/pher/overview.cfm). The HL7 Project Insight reference number for this project is [1616](http://www.hl7.org/Special/committees/pher/projects.cfm?action=edit&ProjectNumber=1616).


### Testing Partners
The VRCL project team would like to express a special thanks to the following testing partners in their contributions:

* Jurisdictional Vital Records Community:

* Vendor community


{% include markdown-link-references.md %}

---

File: repos/HL7_SLASH_vr-common-library/input/pagecontent/downloads.md

### Download

You can also download:

* [this entire guide](full-ig.zip)
* the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
* the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on IHE GitHub [https://github.com/HL7/vr-common-library](https://github.com/HL7/vr-common-library).

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

---

File: repos/HL7_SLASH_vr-common-library/input/pagecontent/index.md

### Overview

This guide is a FHIR Resources (FHIR) Library to support the needs of multiple Vital Records Implementation Guides (IGs) as well as the needs of related IGs.
It does not provide any use case or scenario specific content or additional guidance on how to use these artifacts, but serves as a source for a standard set of profiles, extensions, codesystems and valuesets for reuse in multiple use case specific implementation guides focusing on the exchange of Vital Records information. Implementation details such as how and when to use a given artifact will be supplied in these guides.

### Background
The initial development of the STU1 version of this IG was motivated by the opportunity for reuse between the [Birth and Fetal Death Reporting (BFDR) ](http://hl7.org/fhir/us/bfdr/) and [Birth Defects Reporting (BDR)](https://build.fhir.org/ig/HL7/fhir-birthdefectsreporting-ig/) IGs. Following publication of STU1 versions of [BFDR](http://hl7.org/fhir/us/bfdr/) and [Medicolegal and Death Investigation (MDI)](https://hl7.org/fhir/us/mdi), an STU2 version of [Vital Records Death Reporting (VRDR) ](http://hl7.org/fhir/us/vrdr/), we have taken a broader view of reuse within these IGs as well as the anticipated needs of the as-yet unballoted [BDR](https://build.fhir.org/ig/HL7/fhir-birthdefectsreporting-ig/) to develop the STU2 content for this IG. This process is described in  [Vital Records IG Harmonization](vr_ig_harmonization.html). 

Many of the profiles previously included to support BDR have been moved to the companion STU2 version of BFDR, and the content of this IG has been focused on FHIR resources that were redundantly defined across BFDR, VRDR and MDI, representing the vital records approach to common data elements.  VRDR is the most mature of the vital records related FHIR IGs, having already moved into production usage by several jurisdictions and NCHS, and some of the patterns for FHIR implementation that were defined in the VRDR IG have been incorporated in the STU2 version of VRCL, and its companion STU2 version of BFDR.   These patterns include definition of codesystems and valuesets within this IG, in lieu of reference to [Public Health Information Network Vocabulary Access and Distribution System (PHIN VADS)](https://phinvads.cdc.gov/vads/), support for "edit flags" within existing profiles, in lieu of additional companion Observation profiles, and standardized extensions for partial dates and times, and coded components of addresses.

This profile library will provide a standard framework for inclusion by reference in multiple use case specific IGs (i.e., BFDR, BDR, VRDR, MDI)  to support interoperability among public health systems and reduce provider and implementer burden, and to streamline maintenance of the IGs.

### How to Read This Guide

This Guide is divided into several pages which are listed at the top of each page in the menu bar.

* [Home](index.html): provides the introduction and background for this I
* [Artifacts](artifacts.html): provides a list of the FHIR artifacts (profiles, examples, and value sets) defined as part of this guide.
* [Specification](the_specification.html): provides general information about the FHIR specification
* [Usage](usage.html): provides notes that are referenced by resources in this IG, and their uses in other IGs.
* [Change Log](change_log.html): provides a change history
* [STU1.1 to STU2 Changes](content-transitions.html): shows the provenance of all resources included in the STU2 version of this IG, as well as all of the disposition of the resources no longer included in this IG.
* [Downloads](downloads.html): provides links to downloadable artifacts.

### Authors

<table>
<thead>
<tr>
<th>Name</th>
<th>Email/URL</th>
</tr>
</thead>
<tbody>
<tr>
<td>HL7 International - Public Health</td>
<td><a href="http://www.hl7.org/Special/committees/pher" target="_new">http://www.hl7.org/Special/committees/pher</a></td>
</tr>
</tbody>
</table>

{% include markdown-link-references.md %}


---

File: repos/HL7_SLASH_vr-common-library/input/pagecontent/StructureDefinition-coded-race-and-ethnicity-vr-intro.md

This profile is only for use in a Vital Records Exchange. Systems looking to exchange this observation more broadly should reference US Core.

Coded race and ethnicity data is communicated for both the mother and father in the case of live birth, for the mother in the case of fetal death, and for the decdent for mortality reporting.
<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
### IJE Mapping
<details>

<summary>

<strong class='context-menu' > Natality (Mother)</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>62</td>
  <td>Mother's Race Tabulation Variable 1E</td>
  <td>MRACE1E</td>
  <td>component[FirstEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>63</td>
  <td>Mother's Race Tabulation Variable 2E</td>
  <td>MRACE2E</td>
  <td>component[SecondEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>64</td>
  <td>Mother's Race Tabulation Variable 3E</td>
  <td>MRACE3E</td>
  <td>component[ThirdEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>65</td>
  <td>Mother's Race Tabulation Variable 4E</td>
  <td>MRACE4E</td>
  <td>component[FourthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>66</td>
  <td>Mother's Race Tabulation Variable 5E</td>
  <td>MRACE5E</td>
  <td>component[FifthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>67</td>
  <td>Mother's Race Tabulation Variable 6E</td>
  <td>MRACE6E</td>
  <td>component[SixthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>68</td>
  <td>Mother's Race Tabulation Variable 7E</td>
  <td>MRACE7E</td>
  <td>component[SeventhEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>69</td>
  <td>Mother's Race Tabulation Variable 8E</td>
  <td>MRACE8E</td>
  <td>component[EighthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>70</td>
  <td>Mother's Race Tabulation Variable 16C</td>
  <td>MRACE16C</td>
  <td>component[FirstAmericanIndianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>71</td>
  <td>Mother's Race Tabulation Variable 17C</td>
  <td>MRACE17C</td>
  <td>component[SecondAmericanIndianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>72</td>
  <td>Mother's Race Tabulation Variable 18C</td>
  <td>MRACE18C</td>
  <td>component[FirstOtherAsianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>73</td>
  <td>Mother's Race Tabulation Variable 19C</td>
  <td>MRACE19C</td>
  <td>component[SecondOtherAsianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>74</td>
  <td>Mother's Race Tabulation Variable 20C</td>
  <td>MRACE20C</td>
  <td>component[FirstOtherPacificIslanderCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>75</td>
  <td>Mother's Race Tabulation Variable 21C</td>
  <td>MRACE21C</td>
  <td>component[SecondOtherPacificIslanderCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>76</td>
  <td>Mother's Race Tabulation Variable 22C</td>
  <td>MRACE22C</td>
  <td>component[FirstOtherRaceCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>77</td>
  <td>Mother's Race Tabulation Variable 23C</td>
  <td>MRACE23C</td>
  <td>component[SecondOtherRaceCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>292</td>
  <td>Mother's Hispanic Code for Literal</td>
  <td>METHNIC5C</td>
  <td>component[HispanicCodeForLiteral].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-hispanic-origin-vr.html'>ValueSetHispanicOriginVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>293</td>
  <td>Mother's Edited Hispanic Origin Code</td>
  <td>METHNICE</td>
  <td>component[HispanicCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-hispanic-origin-vr.html'>ValueSetHispanicOriginVitalRecords</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>

<details>

<summary>

<strong class='context-menu' > Natality (Father)</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>108</td>
  <td>Father's Race Tabulation Variable 1E</td>
  <td>FRACE1E</td>
  <td>component[FirstEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>109</td>
  <td>Father's Race Tabulation Variable 2E</td>
  <td>FRACE2E</td>
  <td>component[SecondEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>110</td>
  <td>Father's Race Tabulation Variable 3E</td>
  <td>FRACE3E</td>
  <td>component[ThirdEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>111</td>
  <td>Father's Race Tabulation Variable 4E</td>
  <td>FRACE4E</td>
  <td>component[FourthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>112</td>
  <td>Father's Race Tabulation Variable 5E</td>
  <td>FRACE5E</td>
  <td>component[FifthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>113</td>
  <td>Father's Race Tabulation Variable 6E</td>
  <td>FRACE6E</td>
  <td>component[SixthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>114</td>
  <td>Father's Race Tabulation Variable 7E</td>
  <td>FRACE7E</td>
  <td>component[SeventhEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>115</td>
  <td>Father's Race Tabulation Variable 8E</td>
  <td>FRACE8E</td>
  <td>component[EighthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>116</td>
  <td>Father's Race Tabulation Variable 16C</td>
  <td>FRACE16C</td>
  <td>component[FirstAmericanIndianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>117</td>
  <td>Father's Race Tabulation Variable 17C</td>
  <td>FRACE17C</td>
  <td>component[SecondAmericanIndianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>118</td>
  <td>Father's Race Tabulation Variable 18C</td>
  <td>FRACE18C</td>
  <td>component[FirstOtherAsianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>119</td>
  <td>Father's Race Tabulation Variable 19C</td>
  <td>FRACE19C</td>
  <td>component[SecondOtherAsianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>120</td>
  <td>Father's Race Tabulation Variable 20C</td>
  <td>FRACE20C</td>
  <td>component[FirstOtherPacificIslanderCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>121</td>
  <td>Father's Race Tabulation Variable 21C</td>
  <td>FRACE21C</td>
  <td>component[SecondOtherPacificIslanderCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>122</td>
  <td>Father's Race Tabulation Variable 22C</td>
  <td>FRACE22C</td>
  <td>component[FirstOtherRaceCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>123</td>
  <td>Father's Race Tabulation Variable 23C</td>
  <td>FRACE23C</td>
  <td>component[SecondOtherRaceCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>295</td>
  <td>Father's Hispanic Code for Literal</td>
  <td>FETHNIC5C</td>
  <td>component[HispanicCodeForLiteral].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-hispanic-origin-vr.html'>ValueSetHispanicOriginVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Natality</td>
  <td>296</td>
  <td>Father's Edited Hispanic Origin Code</td>
  <td>FETHNICE</td>
  <td>component[HispanicCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-hispanic-origin-vr.html'>ValueSetHispanicOriginVitalRecords</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>

<details>

<summary>

<strong class='context-menu'> Fetal Death (Mother)</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>62</td>
  <td>Mother's Race Tabulation Variable 1E</td>
  <td>MRACE1E</td>
  <td>component[FirstEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>63</td>
  <td>Mother's Race Tabulation Variable 2E</td>
  <td>MRACE2E</td>
  <td>component[SecondEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>64</td>
  <td>Mother's Race Tabulation Variable 3E</td>
  <td>MRACE3E</td>
  <td>component[ThirdEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedtraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>65</td>
  <td>Mother's Race Tabulation Variable 4E</td>
  <td>MRACE4E</td>
  <td>component[FourthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>66</td>
  <td>Mother's Race Tabulation Variable 5E</td>
  <td>MRACE5E</td>
  <td>component[FifthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>67</td>
  <td>Mother's Race Tabulation Variable 6E</td>
  <td>MRACE6E</td>
  <td>component[SixthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>68</td>
  <td>Mother's Race Tabulation Variable 7E</td>
  <td>MRACE7E</td>
  <td>component[SeventhEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>69</td>
  <td>Mother's Race Tabulation Variable 8E</td>
  <td>MRACE8E</td>
  <td>component[EighthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>70</td>
  <td>Mother's Race Tabulation Variable 16C</td>
  <td>MRACE16C</td>
  <td>component[FirstAmericanIndianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>71</td>
  <td>Mother's Race Tabulation Variable 17C</td>
  <td>MRACE17C</td>
  <td>component[SecondAmericanIndianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>72</td>
  <td>Mother's Race Tabulation Variable 18C</td>
  <td>MRACE18C</td>
  <td>component[FirstOtherAsianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>73</td>
  <td>Mother's Race Tabulation Variable 19C</td>
  <td>MRACE19C</td>
  <td>component[SecondOtherAsianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>74</td>
  <td>Mother's Race Tabulation Variable 20C</td>
  <td>MRACE20C</td>
  <td>component[FirstOtherPacificIslanderCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>75</td>
  <td>Mother's Race Tabulation Variable 21C</td>
  <td>MRACE21C</td>
  <td>component[SecondOtherPacificIslanderCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>76</td>
  <td>Mother's Race Tabulation Variable 22C</td>
  <td>MRACE22C</td>
  <td>component[FirstOtherRaceCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>77</td>
  <td>Mother's Race Tabulation Variable 23C</td>
  <td>MRACE23C</td>
  <td>component[SecondOtherRaceCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>329</td>
  <td>Mother's Hispanic Code for Literal</td>
  <td>METHNIC5C</td>
  <td>component[HispanicCodeForLiteral].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-hispanic-origin-vr.html'>ValueSetHispanicOriginVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>330</td>
  <td>Mother's Edited Hispanic Origin Code</td>
  <td>METHNICE</td>
  <td>component[HispanicCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-hispanic-origin-vr.html'>ValueSetHispanicOriginVitalRecords</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>

<details>

<summary>

<strong class='context-menu'> Fetal Death (Father)</strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>313</td>
  <td>Father's Race Tabulation Variable 1E</td>
  <td>FRACE1E</td>
  <td>component[FirstEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>314</td>
  <td>Father's Race Tabulation Variable 2E</td>
  <td>FRACE2E</td>
  <td>component[SecondEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>315</td>
  <td>Father's Race Tabulation Variable 3E</td>
  <td>FRACE3E</td>
  <td>component[ThirdEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>316</td>
  <td>Father's Race Tabulation Variable 4E</td>
  <td>FRACE4E</td>
  <td>component[FourthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>317</td>
  <td>Father's Race Tabulation Variable 5E</td>
  <td>FRACE5E</td>
  <td>component[FifthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>318</td>
  <td>Father's Race Tabulation Variable 6E</td>
  <td>FRACE6E</td>
  <td>component[SixthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>319</td>
  <td>Father's Race Tabulation Variable 7E</td>
  <td>FRACE7E</td>
  <td>component[SeventhEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>320</td>
  <td>Father's Race Tabulation Variable 8E</td>
  <td>FRACE8E</td>
  <td>component[EighthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>321</td>
  <td>Father's Race Tabulation Variable 16C</td>
  <td>FRACE16C</td>
  <td>component[FirstAmericanIndianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>322</td>
  <td>Father's Race Tabulation Variable 17C</td>
  <td>FRACE17C</td>
  <td>component[SecondAmericanIndianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>323</td>
  <td>Father's Race Tabulation Variable 18C</td>
  <td>FRACE18C</td>
  <td>component[FirstOtherAsianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>324</td>
  <td>Father's Race Tabulation Variable 19C</td>
  <td>FRACE19C</td>
  <td>component[SecondOtherAsianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>325</td>
  <td>Father's Race Tabulation Variable 20C</td>
  <td>FRACE20C</td>
  <td>component[FirstOtherPacificIslanderCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>326</td>
  <td>Father's Race Tabulation Variable 21C</td>
  <td>FRACE21C</td>
  <td>component[SecondOtherPacificIslanderCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>327</td>
  <td>Father's Race Tabulation Variable 22C</td>
  <td>FRACE22C</td>
  <td>component[FirstOtherRaceCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>328</td>
  <td>Father's Race Tabulation Variable 23C</td>
  <td>FRACE23C</td>
  <td>component[SecondOtherRaceCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>332</td>
  <td>Father's Hispanic Code for Literal</td>
  <td>FETHNIC5C</td>
  <td>component[HispanicCodeForLiteral].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-hispanic-origin-vr.html'>ValueSetHispanicOriginVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Fetal Death</td>
  <td>333</td>
  <td>Father's Edited Hispanic Origin Code</td>
  <td>FETHNICE</td>
  <td>component[HispanicCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-hispanic-origin-vr.html'>ValueSetHispanicOriginVitalRecords</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>

<details>

<summary>

<strong class='context-menu'> Mortality (Decedent) </strong>

</summary>
<table class='grid'>
<thead>
  <tr>
    <th style='text-align: center'><strong>Use Case</strong></th>
    <th><strong>#</strong></th>
    <th><strong>Description</strong></th>
    <th><strong>IJE Name</strong></th>
    <th><strong>Field</strong></th>
    <th><strong>Type</strong></th>
    <th><strong>Value Set/Comments</strong></th>
  </tr>
</thead>
<tbody>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>67</td>
  <td>First Edited Code</td>
  <td>RACE1E</td>
  <td>component[FirstEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>68</td>
  <td>Second Edited Code</td>
  <td>RACE2E</td>
  <td>component[SecondEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>69</td>
  <td>Third Edited Code</td>
  <td>RACE3E</td>
  <td>component[ThirdEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>70</td>
  <td>Fourth Edited Code</td>
  <td>RACE4E</td>
  <td>component[FourthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>71</td>
  <td>Fifth Edited Code</td>
  <td>RACE5E</td>
  <td>component[FifthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>72</td>
  <td>Sixth Edited Code</td>
  <td>RACE6E</td>
  <td>component[SixthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>73</td>
  <td>Seventh Edited Code</td>
  <td>RACE7E</td>
  <td>component[SeventhEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>74</td>
  <td>Eighth Edited Code</td>
  <td>RACE8E</td>
  <td>component[EighthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>75</td>
  <td>First American Indian Code</td>
  <td>RACE16C</td>
  <td>component[FirstAmericanIndianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>76</td>
  <td>Second American Indian Code</td>
  <td>RACE17C</td>
  <td>component[SecondAmericanIndianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>77</td>
  <td>First Other Asian Code</td>
  <td>RACE18C</td>
  <td>component[FirstOtherAsianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>78</td>
  <td>Second Other Asian Code</td>
  <td>RACE19C</td>
  <td>component[SecondOtherAsianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>79</td>
  <td>First Other Pacific Islander Code</td>
  <td>RACE20C</td>
  <td>component[FirstOtherPacificIslanderCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>80</td>
  <td>Second Other Pacific Islander Code</td>
  <td>RACE21C</td>
  <td>component[SecondOtherPacificIslanderCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>81</td>
  <td>First Other Race Code</td>
  <td>RACE22C</td>
  <td>component[FirstOtherRaceCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>82</td>
  <td>Second Other Race Code</td>
  <td>RACE23C</td>
  <td>component[SecondOtherRaceCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>160</td>
  <td>Hispanic</td>
  <td>DETHNICE</td>
  <td>component[HispanicCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-hispanic-origin-vr.html'>ValueSetHispanicOriginVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>247</td>
  <td>Hispanic Code for Literal</td>
  <td>DETHNIC5C</td>
  <td>component[HispanicCodeForLiteral].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityDecedent</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-hispanic-origin-vr.html'>ValueSetHispanicOriginVitalRecords</a></td>
</tr>
<tr>
  <td style='text-align: center'>Mortality</td>
  <td>NA</td>
  <td>Race Recode 40  (No longer provided as of 2022)</td>
  <td>*NO IJE MAPPING*</td>
  <td>component[ValueSetRaceRecode40VitalRecords].value</td>
  <td>codeable</td>
  <td><a href='ValueSet-ValueSet-race-recode-40-vr.html'>ValueSetRaceRecode40VitalRecords</a></td>
</tr>

</tbody>
</table>

</details>
<p></p>



---

File: repos/HL7_SLASH_vr-common-library/input/pagecontent/StructureDefinition-Extension-partial-date-time-vr-intro.md


If a component is missing, it is assumed unknown.
* This extension SHOULD NOT be used when the value can be expressed as a [dateTime](https://hl7.org/fhir/R4B/datatypes.html#dateTime), specifically YYYY, YYYY-MM, YYYY-MM-DD, or a full dateTime.
* This extension SHOULD NOT be used to express that the dateTime in its entirety is missing/unknown.  In this case a simple dataAbsent reason extension should be used on the dateTime.
* This extension SHOULD be used to express missing components of dateTime including XXXX-XX-DD, YYYY-XX-DD, YYYY-MM-XX, as well as all cases where the time is known, but one or more components of the date is unknown.
* If a component is missing, the interpretation should be equivalent to it being present, with a data absent reason of 'unknown' or 'temp-unknown'.  

When the known components of the date can be expressed as a valid dateTime, the value SHALL be present.  So, for example 2022-12-XX-1201212, the dateTime value should be \"2022-12\".


---

File: repos/HL7_SLASH_vr-common-library/input/pagecontent/StructureDefinition-Extension-partial-date-vr-intro.md


If a component is missing, it is assumed unknown.
* This extension SHOULD NOT be used when the value can be expressed as a [date](https://hl7.org/fhir/R4B/datatypes.html#date), specifically YYYY, YYYY-MM, YYYY-MM-DD, or a full date.
* This extension SHOULD NOT be used to express that the date in its entirety is missing/unknown.  In this case a simple dataAbsent reason extension should be used on the date.
* This extension SHOULD be used to express missing components of date including XXXX-XX-DD, YYYY-XX-DD, YYYY-MM-XX, but one or more components of the date is unknown.
* If a component is missing, the interpretation should be equivalent to it being present, with a data absent reason of 'unknown' or 'temp-unknown'.  

When the known components of the date can be expressed as a valid dateTime, the value SHALL be present.  So, for example 2022-12-XX, the dateTime value should be \"2022-12\".


---

File: repos/HL7_SLASH_vr-common-library/input/pagecontent/StructureDefinition-Extension-relatedperson-birthplace-vr-intro.md

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
### IJE Mapping


---

File: repos/HL7_SLASH_vr-common-library/input/pagecontent/StructureDefinition-Extension-within-city-limits-indicator-vr-intro.md

<style>
 .context-menu {cursor: context-menu; color: #438bca;}
 .context-menu:hover {opacity: 0.5;}
</style>
### IJE Mapping


---

