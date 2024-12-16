File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/codesystems/USPublicHealthCodeSystemEndpointConnectionTypeExample.fsh

CodeSystem: USPublicHealthCodeSystemEndpointConnectionTypeExample
Id: us-ph-codesystem-endpoint-connection-type-example
Title: "US Public Health CodeSystem - Endpoint Connection Type Example"
Description: "This code system contains codes that identify the HL7 FHIR File type."
* ^meta.versionId = "5"
* ^meta.lastUpdated = "2023-07-13T06:21:59.873Z"
* ^meta.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-codesystem"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^caseSensitive = true
* ^content = #complete
* #hl7-fhir-files "HL7 FHIR Files" "HL7 FHIR Files."
* #hl7-cql-files "HL7 CQL Files" "HL7 CQL Files."

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/codesystems/USPublicHealthCodeSystemForValueSetUseContext.fsh

CodeSystem: USPublicHealthCodeSystemForValueSetUseContext
Id: us-ph-codesystem-valueset-use-context
Title: "US Public Health CodeSystem for ValueSet Use Context"
Description: "The US Public Health UseContext CodeSystem contains codes for currently identified use cases for representing the use context of a ValueSet."
* ^meta.versionId = "5"
* ^meta.lastUpdated = "2023-07-13T06:22:00.198Z"
* ^meta.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-codesystem"
* ^status = #active
* ^experimental = true
* ^date = "2022-09-06"
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US
* ^caseSensitive = true
* ^content = #complete
* #ph-reporting "ValueSet is to be used in the context of public health reporting use cases." "ValueSet is to be used for the purposes of public health reporting."
* #research-reporting "ValueSet is to be used in the context of research reporting use cases." "ValueSet is to be used for the purposes of research reporting."

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/codesystems/USPublicHealthCodeSystemJurisdictionsExample.fsh

CodeSystem: USPublicHealthCodeSystemJurisdictionsExample
Id: us-ph-codesystem-jurisdictions-example
Title: "US Public Health CodeSystem Jurisdictions Example"
Description: "This code system describes example jurisdictions."
* ^meta.versionId = "14"
* ^meta.lastUpdated = "2023-07-13T06:14:15.657Z"
* ^meta.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-codesystem"
* ^url = "http://example.org/fhir/CodeSystem/us-ph-codesystem-jurisdictions-example"
* ^version = "0.1.0"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^caseSensitive = false
* ^content = #complete
* ^property[0].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-codesystem-property-required-binding-extension"
* ^property[=].extension.valueCanonical = "http://hl7.org/fhir/us/ph-library/CodeSystem/us-ph-codesystem-jurisdiction-types-example"
* ^property[=].code = #type
* ^property[=].description = "Type of public health jurisdiction."
* ^property[=].type = #code
* ^property[+].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-codesystem-property-required-binding-extension"
* ^property[=].extension.valueCanonical = "http://hl7.org/fhir/us/core/ValueSet/us-core-usps-state"
* ^property[=].code = #state
* ^property[=].description = "USPS Two Letter Alphabetic Codes."
* ^property[=].type = #code
* ^property[+].code = #postalcode
* ^property[=].description = "Postal code within the public health jurisdiction."
* ^property[=].type = #string
* #AK "ALASKA" "Alaska Department of Health and Social Services"
* #AK ^property[0].code = #type
* #AK ^property[=].valueCode = #STATE
* #AK ^property[+].code = #state
* #AK ^property[=].valueCode = #AK
* #AL "ALABAMA" "Alabama Department of Public Health"
* #AL ^property[0].code = #type
* #AL ^property[=].valueCode = #STATE
* #AL ^property[+].code = #state
* #AL ^property[=].valueCode = #AL
* #AR "ARKANSAS" "Arkansas Department of Health"
* #AR ^property[0].code = #type
* #AR ^property[=].valueCode = #STATE
* #AR ^property[+].code = #state
* #AR ^property[=].valueCode = #AR
* #AS "AMERICAN_SAMOA" "American Samoa"
* #AS ^property[0].code = #type
* #AS ^property[=].valueCode = #STATE
* #AS ^property[+].code = #state
* #AS ^property[=].valueCode = #AS
* #AZ "ARIZONA" "Arizona Department of Health Services"
* #AZ ^property[0].code = #type
* #AZ ^property[=].valueCode = #STATE
* #AZ ^property[+].code = #state
* #AZ ^property[=].valueCode = #AZ
* #CA "CALIFORNIA" "California Department of Public Health"
* #CA ^property[0].code = #type
* #CA ^property[=].valueCode = #STATE
* #CA ^property[+].code = #state
* #CA ^property[=].valueCode = #CA
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90041
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90042
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90221
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90630
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90706
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90712
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90713
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90716
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90723
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90731
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90744
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90755
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90802
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90803
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90804
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90805
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90806
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90807
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90808
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90810
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90813
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90814
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90815
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90822
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90831
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90840
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #90846
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91001
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91006
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91011
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91024
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91030
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91101
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91103
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91104
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91105
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91106
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91107
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91108
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91206
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91901
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91902
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91903
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91905
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91906
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91908
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91909
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91910
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91911
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91912
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91913
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91914
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91915
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91916
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91917
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91921
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91931
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91932
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91933
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91934
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91935
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91941
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91942
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91943
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91944
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91945
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91946
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91947
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91948
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91950
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91951
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91962
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91963
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91976
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91977
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91978
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91979
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91980
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91987
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #91990
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92003
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92004
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92007
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92008
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92009
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92010
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92011
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92013
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92014
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92018
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92019
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92020
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92021
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92022
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92023
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92024
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92025
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92026
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92027
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92028
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92029
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92030
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92033
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92036
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92037
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92038
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92039
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92040
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92046
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92049
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92051
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92052
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92054
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92055
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92056
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92057
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92058
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92059
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92060
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92061
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92064
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92065
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92066
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92067
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92068
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92069
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92070
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92071
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92072
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92074
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92075
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92078
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92079
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92081
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92082
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92083
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92084
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92085
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92086
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92088
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92090
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92091
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92092
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92093
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92096
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92101
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92102
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92103
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92104
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92105
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92106
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92107
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92108
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92109
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92110
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92111
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92112
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92113
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92114
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92115
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92116
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92117
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92118
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92119
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92120
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92121
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92122
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92123
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92124
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92126
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92127
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92128
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92129
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92130
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92131
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92132
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92133
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92134
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92135
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92136
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92137
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92138
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92139
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92140
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92142
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92143
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92145
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92147
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92149
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92150
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92152
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92153
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92154
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92155
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92158
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92159
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92160
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92161
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92162
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92163
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92164
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92165
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92166
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92167
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92168
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92169
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92170
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92171
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92172
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92173
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92174
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92175
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92176
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92177
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92178
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92179
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92182
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92184
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92186
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92187
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92190
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92191
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92192
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92193
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92194
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92195
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92196
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92197
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92198
* #CA ^property[+].code = #postalcode
* #CA ^property[=].valueString = #92199
* #CHI "ILLINOIS" "Chicago Department of Public Health"
* #CHI ^property[0].code = #type
* #CHI ^property[=].valueCode = #CITY
* #CHI ^property[+].code = #state
* #CHI ^property[=].valueCode = #IL
* #CHI ^property[+].code = #postalcode
* #CHI ^property[=].valueString = #60007
* #CHR "VIRGIN_ISLANDS" "Christiansted (Test)"
* #CHR ^property[0].code = #type
* #CHR ^property[=].valueCode = #CITY
* #CHR ^property[+].code = #state
* #CHR ^property[=].valueCode = #VI
* #CHR ^property[+].code = #postalcode
* #CHR ^property[=].valueString = #00820
* #CO "COLORADO" "Colorado Department of Public Health and Environment"
* #CO ^property[0].code = #type
* #CO ^property[=].valueCode = #STATE
* #CO ^property[+].code = #state
* #CO ^property[=].valueCode = #CO
* #CT "CONNECTICUT" "Connecticut Department of Public Health"
* #CT ^property[0].code = #type
* #CT ^property[=].valueCode = #STATE
* #CT ^property[+].code = #state
* #CT ^property[=].valueCode = #CT
* #DC "DISTRICT_OF_COLUMBIA" "District of Columbia Department of Health"
* #DC ^property[0].code = #type
* #DC ^property[=].valueCode = #STATE
* #DC ^property[+].code = #state
* #DC ^property[=].valueCode = #DC
* #DC ^property[+].code = #postalcode
* #DC ^property[=].valueString = #20002
* #DE "DELAWARE" "Delaware Health and Social Services"
* #DE ^property[0].code = #type
* #DE ^property[=].valueCode = #STATE
* #DE ^property[+].code = #state
* #DE ^property[=].valueCode = #DE
* #DED "GUAM" "Dededo"
* #DED ^property[0].code = #type
* #DED ^property[=].valueCode = #COUNTY
* #DED ^property[+].code = #state
* #DED ^property[=].valueCode = #GU
* #DED ^property[+].code = #postalcode
* #DED ^property[=].valueString = #96912
* #FL "FLORIDA" "Florida Department of Health"
* #FL ^property[0].code = #type
* #FL ^property[=].valueCode = #STATE
* #FL ^property[+].code = #state
* #FL ^property[=].valueCode = #FL
* #GA "GEORGIA" "Georgia Department of Public Health"
* #GA ^property[0].code = #type
* #GA ^property[=].valueCode = #STATE
* #GA ^property[+].code = #state
* #GA ^property[=].valueCode = #GA
* #GA ^property[+].code = #postalcode
* #GA ^property[=].valueString = #30062
* #GA ^property[+].code = #postalcode
* #GA ^property[=].valueString = #30066
* #GU "GUAM" "Guam Department of Public Health and Social Services"
* #GU ^property[0].code = #type
* #GU ^property[=].valueCode = #STATE
* #GU ^property[+].code = #state
* #GU ^property[=].valueCode = #GU
* #HI "HAWAII" "Hawaii Department of Health"
* #HI ^property[0].code = #type
* #HI ^property[=].valueCode = #STATE
* #HI ^property[+].code = #state
* #HI ^property[=].valueCode = #HI
* #HT "TEXAS" "Houston Health Department"
* #HT ^property[0].code = #type
* #HT ^property[=].valueCode = #CITY
* #HT ^property[+].code = #state
* #HT ^property[=].valueCode = #TX
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77001
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77002
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77003
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77004
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77005
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77006
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77007
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77008
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77009
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77010
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77011
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77012
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77013
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77014
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77015
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77016
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77017
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77018
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77019
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77020
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77021
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77022
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77023
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77024
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77025
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77026
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77027
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77028
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77029
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77030
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77031
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77032
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77033
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77034
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77035
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77036
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77037
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77038
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77039
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77040
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77041
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77042
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77043
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77044
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77045
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77046
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77047
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77048
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77049
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77050
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77051
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77052
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77053
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77054
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77055
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77056
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77057
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77058
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77059
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77060
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77061
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77062
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77063
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77064
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77065
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77066
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77067
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77068
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77069
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77070
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77071
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77072
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77073
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77074
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77075
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77076
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77077
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77078
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77079
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77080
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77081
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77082
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77083
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77084
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77085
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77086
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77087
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77088
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77089
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77090
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77091
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77092
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77093
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77094
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77095
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77096
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77097
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77098
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77099
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77201
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77202
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77203
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77204
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77205
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77206
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77207
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77208
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77209
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77210
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77212
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77213
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77215
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77216
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77217
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77218
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77219
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77220
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77221
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77222
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77223
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77224
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77225
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77226
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77227
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77228
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77229
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77230
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77231
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77233
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77234
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77235
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77236
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77237
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77238
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77240
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77241
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77242
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77243
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77244
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77245
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77248
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77249
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77251
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77252
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77253
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77254
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77255
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77256
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77257
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77258
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77259
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77261
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77262
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77263
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77265
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77266
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77267
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77268
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77269
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77270
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77271
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77272
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77273
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77274
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77275
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77277
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77279
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77280
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77281
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77282
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77284
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77287
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77288
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77289
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77290
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77291
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77292
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77293
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77297
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77298
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77299
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77327
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77336
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77338
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77339
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77345
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77346
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77354
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77355
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77357
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77362
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77365
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77373
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77375
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77377
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77379
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77380
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77381
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77382
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77386
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77388
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77389
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77396
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77401
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77406
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77407
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77429
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77433
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77447
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77449
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77450
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77459
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77477
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77478
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77484
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77489
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77493
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77494
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77498
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77502
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77503
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77504
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77505
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77506
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77507
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77520
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77521
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77523
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77530
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77532
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77535
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77536
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77545
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77546
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77547
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77562
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77565
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77571
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77573
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77581
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77584
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77586
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77587
* #HT ^property[+].code = #postalcode
* #HT ^property[=].valueString = #77598
* #IA "IOWA" "Iowa Department of Public Health"
* #IA ^property[0].code = #type
* #IA ^property[=].valueCode = #STATE
* #IA ^property[+].code = #state
* #IA ^property[=].valueCode = #IA
* #ID "IDAHO" "Idaho Department of Health and Welfare"
* #ID ^property[0].code = #type
* #ID ^property[=].valueCode = #STATE
* #ID ^property[+].code = #state
* #ID ^property[=].valueCode = #ID
* #IL "ILLINOIS" "Illinois Department of Public Health"
* #IL ^property[0].code = #type
* #IL ^property[=].valueCode = #STATE
* #IL ^property[+].code = #state
* #IL ^property[=].valueCode = #IL
* #IN "INDIANA" "Indiana State Department of Health"
* #IN ^property[0].code = #type
* #IN ^property[=].valueCode = #STATE
* #IN ^property[+].code = #state
* #IN ^property[=].valueCode = #IN
* #KS "KANSAS" "Kansas Department of Health and Environment"
* #KS ^property[0].code = #type
* #KS ^property[=].valueCode = #STATE
* #KS ^property[+].code = #state
* #KS ^property[=].valueCode = #KS
* #KY "KENTUCKY" "Kentucky Cabinet for Health and Family Services"
* #KY ^property[0].code = #type
* #KY ^property[=].valueCode = #STATE
* #KY ^property[+].code = #state
* #KY ^property[=].valueCode = #KY
* #LA "LOUISIANA" "Louisiana Department of Health and Hospitals"
* #LA ^property[0].code = #type
* #LA ^property[=].valueCode = #STATE
* #LA ^property[+].code = #state
* #LA ^property[=].valueCode = #LA
* #LAC "CALIFORNIA" "Los Angeles County Department of Public Health"
* #LAC ^property[0].code = #type
* #LAC ^property[=].valueCode = #COUNTY
* #LAC ^property[+].code = #state
* #LAC ^property[=].valueCode = #CA
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90001
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90002
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90003
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90004
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90005
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90006
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90007
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90008
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90009
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90010
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90011
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90012
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90013
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90014
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90015
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90016
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90017
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90018
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90019
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90020
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90021
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90022
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90023
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90024
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90025
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90026
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90027
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90028
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90029
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90030
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90031
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90032
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90033
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90034
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90035
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90036
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90037
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90038
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90039
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90040
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90041
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90042
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90043
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90044
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90045
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90046
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90047
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90048
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90049
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90050
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90051
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90052
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90053
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90054
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90055
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90056
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90057
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90058
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90059
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90060
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90061
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90062
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90063
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90064
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90065
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90066
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90067
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90068
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90069
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90070
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90071
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90072
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90073
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90074
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90075
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90076
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90077
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90078
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90079
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90080
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90081
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90082
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90083
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90084
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90086
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90087
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90088
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90089
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90091
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90093
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90094
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90095
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90096
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90097
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90099
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90101
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90102
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90103
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90174
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90185
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90201
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90202
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90209
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90210
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90211
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90212
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90213
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90220
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90221
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90222
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90223
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90224
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90230
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90231
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90232
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90233
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90239
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90240
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90241
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90242
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90245
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90247
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90248
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90249
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90250
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90251
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90254
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90255
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90260
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90261
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90262
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90263
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90264
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90265
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90266
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90267
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90270
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90272
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90274
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90275
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90277
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90278
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90280
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90290
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90291
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90292
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90293
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90294
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90295
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90296
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90301
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90302
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90303
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90304
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90305
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90306
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90307
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90308
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90309
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90310
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90311
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90312
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90313
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90397
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90398
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90401
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90402
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90403
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90404
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90405
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90406
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90407
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90408
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90409
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90410
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90411
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90501
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90502
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90503
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90504
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90505
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90506
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90507
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90508
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90509
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90510
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90601
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90602
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90603
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90604
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90605
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90606
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90607
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90608
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90609
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90610
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90612
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90637
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90638
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90639
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90640
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90650
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90651
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90652
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90659
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90660
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90661
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90662
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90665
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90670
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90671
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90701
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90702
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90703
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90704
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90706
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90707
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90710
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90711
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90712
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90713
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90714
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90715
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90716
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90717
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90723
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90731
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90732
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90733
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90734
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90744
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90745
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90746
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90747
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90748
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90749
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90755
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90845
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #90888
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91001
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91003
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91006
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91007
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91009
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91010
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91011
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91012
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91016
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91017
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91020
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91021
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91023
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91024
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91025
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91030
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91031
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91040
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91041
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91042
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91043
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91046
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91050
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91051
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91066
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91077
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91108
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91118
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91131
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91175
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91186
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91187
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91191
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91201
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91202
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91203
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91204
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91205
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91206
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91207
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91208
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91209
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91210
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91214
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91221
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91222
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91224
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91225
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91226
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91301
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91302
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91303
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91304
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91305
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91306
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91307
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91308
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91309
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91310
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91311
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91312
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91313
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91316
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91321
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91322
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91324
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91325
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91326
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91327
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91328
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91329
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91330
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91331
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91333
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91334
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91335
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91337
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91340
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91341
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91342
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91343
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91344
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91345
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91346
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91350
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91351
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91352
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91353
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91354
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91355
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91356
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91357
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91363
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91364
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91365
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91367
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91371
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91372
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91376
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91380
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91381
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91382
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91383
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91384
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91385
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91386
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91387
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91388
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91390
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91392
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91393
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91394
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91395
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91396
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91399
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91401
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91402
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91403
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91404
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91405
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91406
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91407
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91408
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91409
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91410
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91411
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91412
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91413
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91416
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91423
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91426
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91436
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91470
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91482
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91495
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91496
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91497
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91499
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91501
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91502
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91503
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91504
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91505
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91506
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91507
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91508
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91510
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91521
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91522
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91523
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91526
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91601
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91602
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91603
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91604
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91605
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91606
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91607
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91608
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91609
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91610
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91611
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91612
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91614
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91615
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91616
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91617
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91618
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91702
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91706
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91711
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91714
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91715
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91716
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91722
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91723
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91724
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91731
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91732
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91733
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91734
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91735
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91740
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91741
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91744
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91745
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91746
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91747
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91748
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91749
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91750
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91754
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91755
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91756
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91759
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91765
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91766
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91767
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91768
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91769
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91770
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91771
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91772
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91773
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91775
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91776
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91778
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91780
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91788
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91789
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91790
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91791
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91792
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91793
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91795
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91797
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91799
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91801
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91802
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91803
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91804
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91841
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91896
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #91899
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93510
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93532
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93534
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93535
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93536
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93539
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93543
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93544
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93550
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93551
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93552
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93553
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93563
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93584
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93586
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93590
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93591
* #LAC ^property[+].code = #postalcode
* #LAC ^property[=].valueString = #93599
* #MA "MASSACHUSETTS" "Massachusetts Department of Health and Human Services"
* #MA ^property[0].code = #type
* #MA ^property[=].valueCode = #STATE
* #MA ^property[+].code = #state
* #MA ^property[=].valueCode = #MA
* #MD "MARYLAND" "Maryland Department of Health and Mental Hygiene"
* #MD ^property[0].code = #type
* #MD ^property[=].valueCode = #STATE
* #MD ^property[+].code = #state
* #MD ^property[=].valueCode = #MD
* #ME "MAINE" "Maine Department of Health and Human Services"
* #ME ^property[0].code = #type
* #ME ^property[=].valueCode = #STATE
* #ME ^property[+].code = #state
* #ME ^property[=].valueCode = #ME
* #MI "MICHIGAN" "Michigan Department of Community Health"
* #MI ^property[0].code = #type
* #MI ^property[=].valueCode = #STATE
* #MI ^property[+].code = #state
* #MI ^property[=].valueCode = #MI
* #MN "MINNESOTA" "Minnesota Department of Health"
* #MN ^property[0].code = #type
* #MN ^property[=].valueCode = #STATE
* #MN ^property[+].code = #state
* #MN ^property[=].valueCode = #MN
* #MO "MISSOURI" "Missouri State Department of Health and Senior Services"
* #MO ^property[0].code = #type
* #MO ^property[=].valueCode = #STATE
* #MO ^property[+].code = #state
* #MO ^property[=].valueCode = #MO
* #MS "MISSISSIPPI" "Mississippi State Department of Health"
* #MS ^property[0].code = #type
* #MS ^property[=].valueCode = #STATE
* #MS ^property[+].code = #state
* #MS ^property[=].valueCode = #MS
* #MT "MONTANA" "Montana Department of Public Health and Human Services"
* #MT ^property[0].code = #type
* #MT ^property[=].valueCode = #STATE
* #MT ^property[+].code = #state
* #MT ^property[=].valueCode = #MT
* #NC "NORTH_CAROLINA" "North Carolina Department of Health and Human Services"
* #NC ^property[0].code = #type
* #NC ^property[=].valueCode = #STATE
* #NC ^property[+].code = #state
* #NC ^property[=].valueCode = #NC
* #ND "NORTH_DAKOTA" "North Dakota Department of Health"
* #ND ^property[0].code = #type
* #ND ^property[=].valueCode = #STATE
* #ND ^property[+].code = #state
* #ND ^property[=].valueCode = #ND
* #NE "NEBRASKA" "Nebraska Department of Health and Human Services"
* #NE ^property[0].code = #type
* #NE ^property[=].valueCode = #STATE
* #NE ^property[+].code = #state
* #NE ^property[=].valueCode = #NE
* #NH "NEW_HAMPSHIRE" "New Hampshire Department of Health and Human Services"
* #NH ^property[0].code = #type
* #NH ^property[=].valueCode = #STATE
* #NH ^property[+].code = #state
* #NH ^property[=].valueCode = #NH
* #NJ "NEW_JERSEY" "New Jersey Department of Health and Senior Services"
* #NJ ^property[0].code = #type
* #NJ ^property[=].valueCode = #STATE
* #NJ ^property[+].code = #state
* #NJ ^property[=].valueCode = #NJ
* #NM "NEW_MEXICO" "New Mexico Department of Health"
* #NM ^property[0].code = #type
* #NM ^property[=].valueCode = #STATE
* #NM ^property[+].code = #state
* #NM ^property[=].valueCode = #NM
* #NV "NEVADA" "Nevada State Health Division"
* #NV ^property[0].code = #type
* #NV ^property[=].valueCode = #STATE
* #NV ^property[+].code = #state
* #NV ^property[=].valueCode = #NV
* #NY "NEW_YORK" "New York State Department of Health"
* #NY ^property[0].code = #type
* #NY ^property[=].valueCode = #STATE
* #NY ^property[+].code = #state
* #NY ^property[=].valueCode = #NY
* #NY ^property[+].code = #postalcode
* #NY ^property[=].valueString = #10803
* #NY ^property[+].code = #postalcode
* #NY ^property[=].valueString = #11001
* #NY ^property[+].code = #postalcode
* #NY ^property[=].valueString = #11040
* #NY ^property[+].code = #postalcode
* #NY ^property[=].valueString = #11416
* #NYC "NEW_YORK" "New York City Department of Health and Mental Hygiene"
* #NYC ^property[0].code = #type
* #NYC ^property[=].valueCode = #CITY
* #NYC ^property[+].code = #state
* #NYC ^property[=].valueCode = #NY
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10001
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10002
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10003
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10004
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10005
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10006
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10007
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10008
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10009
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10010
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10011
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10012
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10013
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10014
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10016
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10017
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10018
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10019
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10020
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10021
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10022
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10023
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10024
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10025
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10026
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10027
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10028
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10029
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10030
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10031
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10032
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10033
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10034
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10035
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10036
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10037
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10038
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10039
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10040
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10041
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10043
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10044
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10045
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10055
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10060
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10065
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10069
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10075
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10080
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10081
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10087
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10090
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10101
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10102
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10103
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10104
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10105
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10106
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10107
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10108
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10109
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10110
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10111
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10112
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10113
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10114
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10115
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10116
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10117
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10118
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10119
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10120
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10121
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10122
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10123
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10124
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10125
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10126
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10128
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10129
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10130
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10131
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10132
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10133
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10138
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10150
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10151
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10152
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10153
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10154
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10155
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10156
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10157
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10158
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10159
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10160
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10162
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10163
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10164
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10165
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10166
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10167
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10168
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10169
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10170
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10171
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10172
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10173
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10174
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10175
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10176
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10177
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10178
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10179
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10185
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10199
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10203
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10211
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10212
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10213
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10242
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10249
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10256
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10258
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10259
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10260
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10261
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10265
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10268
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10269
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10270
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10271
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10272
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10273
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10274
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10275
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10276
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10277
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10278
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10279
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10280
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10281
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10282
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10285
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10286
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10301
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10302
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10303
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10304
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10305
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10306
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10307
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10308
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10309
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10310
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10311
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10312
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10313
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10314
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10451
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10452
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10453
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10454
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10455
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10456
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10457
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10458
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10459
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10460
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10461
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10462
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10463
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10464
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10465
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10466
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10467
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10468
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10469
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10470
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10471
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10472
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10473
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10474
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10475
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #10803
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11001
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11004
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11005
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11040
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11101
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11102
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11103
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11104
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11105
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11106
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11109
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11120
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11201
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11202
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11203
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11204
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11205
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11206
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11207
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11208
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11209
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11210
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11211
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11212
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11213
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11214
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11215
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11216
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11217
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11218
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11219
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11220
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11221
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11222
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11223
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11224
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11225
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11226
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11228
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11229
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11230
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11231
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11232
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11233
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11234
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11235
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11236
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11237
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11238
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11239
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11241
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11242
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11243
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11245
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11247
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11249
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11251
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11252
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11256
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11351
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11352
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11354
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11355
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11356
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11357
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11358
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11359
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11360
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11361
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11362
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11363
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11364
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11365
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11366
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11367
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11368
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11369
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11370
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11371
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11372
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11373
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11374
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11375
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11377
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11378
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11379
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11380
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11381
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11385
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11386
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11405
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11411
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11412
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11413
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11414
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11415
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11416
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11417
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11418
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11419
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11420
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11421
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11422
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11423
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11424
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11425
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11426
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11427
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11428
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11429
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11430
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11431
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11432
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11433
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11434
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11435
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11436
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11439
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11451
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11499
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11690
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11691
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11692
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11693
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11694
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11695
* #NYC ^property[+].code = #postalcode
* #NYC ^property[=].valueString = #11697
* #OH "OHIO" "Ohio Department of Health"
* #OH ^property[0].code = #type
* #OH ^property[=].valueCode = #STATE
* #OH ^property[+].code = #state
* #OH ^property[=].valueCode = #OH
* #OK "OKLAHOMA" "Oklahoma State Department of Health"
* #OK ^property[0].code = #type
* #OK ^property[=].valueCode = #STATE
* #OK ^property[+].code = #state
* #OK ^property[=].valueCode = #OK
* #OR "OREGON" "Oregon Health Authority"
* #OR ^property[0].code = #type
* #OR ^property[=].valueCode = #STATE
* #OR ^property[+].code = #state
* #OR ^property[=].valueCode = #OR
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97001
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97002
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97004
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97005
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97006
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97007
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97008
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97009
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97010
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97011
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97013
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97014
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97015
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97016
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97017
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97018
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97019
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97020
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97021
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97022
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97023
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97024
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97026
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97027
* #OR ^property[+].code = #postalcode
* #OR ^property[=].valueString = #97028
* #PA "PENNSYLVANIA" "Pennsylvania Department of Health"
* #PA ^property[0].code = #type
* #PA ^property[=].valueCode = #STATE
* #PA ^property[+].code = #state
* #PA ^property[=].valueCode = #PA
* #PHL "PENNSYLVANIA" "City of Philadelphia Department of Public Health"
* #PHL ^property[0].code = #type
* #PHL ^property[=].valueCode = #CITY
* #PHL ^property[+].code = #state
* #PHL ^property[=].valueCode = #PA
* #PR "PUERTO_RICO" "Puerto Rico"
* #PR ^property[0].code = #type
* #PR ^property[=].valueCode = #STATE
* #PR ^property[+].code = #state
* #PR ^property[=].valueCode = #PR
* #RI "RHODE_ISLAND" "Rhode Island Department of Health"
* #RI ^property[0].code = #type
* #RI ^property[=].valueCode = #STATE
* #RI ^property[+].code = #state
* #RI ^property[=].valueCode = #RI
* #SC "SOUTH_CAROLINA" "South Carolina Department of Health and Environmental Control"
* #SC ^property[0].code = #type
* #SC ^property[=].valueCode = #STATE
* #SC ^property[+].code = #state
* #SC ^property[=].valueCode = #SC
* #SD "SOUTH_DAKOTA" "South Dakota Department of Health"
* #SD ^property[0].code = #type
* #SD ^property[=].valueCode = #STATE
* #SD ^property[+].code = #state
* #SD ^property[=].valueCode = #SD
* #SDC "CALIFORNIA" "San Diego County Public Health Services"
* #SDC ^property[0].code = #type
* #SDC ^property[=].valueCode = #COUNTY
* #SDC ^property[+].code = #state
* #SDC ^property[=].valueCode = #CA
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91901
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91902
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91903
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91905
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91906
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91908
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91909
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91910
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91911
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91912
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91913
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91914
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91915
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91916
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91917
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91921
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91931
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91932
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91933
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91934
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91935
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91941
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91942
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91943
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91944
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91945
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91946
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91947
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91948
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91950
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91951
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91962
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91963
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91976
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91977
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91978
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91979
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91980
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91987
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #91990
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92003
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92004
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92007
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92008
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92009
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92010
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92011
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92013
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92014
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92018
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92019
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92020
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92021
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92022
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92023
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92024
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92025
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92026
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92027
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92028
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92029
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92030
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92033
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92036
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92037
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92038
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92039
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92040
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92046
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92049
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92051
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92052
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92054
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92055
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92056
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92057
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92058
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92059
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92060
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92061
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92064
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92065
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92066
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92067
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92068
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92069
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92070
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92071
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92072
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92074
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92075
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92078
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92079
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92081
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92082
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92083
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92084
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92085
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92086
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92088
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92090
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92091
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92092
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92093
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92096
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92101
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92102
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92103
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92104
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92105
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92106
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92107
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92108
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92109
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92110
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92111
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92112
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92113
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92114
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92115
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92116
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92117
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92118
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92119
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92120
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92121
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92122
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92123
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92124
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92126
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92127
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92128
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92129
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92130
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92131
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92132
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92133
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92134
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92135
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92136
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92137
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92138
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92139
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92140
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92142
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92143
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92145
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92147
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92149
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92150
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92152
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92153
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92154
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92155
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92158
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92159
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92160
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92161
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92162
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92163
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92164
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92165
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92166
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92167
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92168
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92169
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92170
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92171
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92172
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92173
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92174
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92175
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92176
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92177
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92178
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92179
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92182
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92184
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92186
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92187
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92190
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92191
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92192
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92193
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92194
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92195
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92196
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92197
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92198
* #SDC ^property[+].code = #postalcode
* #SDC ^property[=].valueString = #92199
* #SF "CALIFORNIA" "San Francisco"
* #SF ^property[0].code = #type
* #SF ^property[=].valueCode = #CITY
* #SF ^property[+].code = #state
* #SF ^property[=].valueCode = #CA
* #SN "NEVADA" "Southern Nevada Health District (SNHD)"
* #SN ^property[0].code = #type
* #SN ^property[=].valueCode = #DISTRICT
* #SN ^property[+].code = #state
* #SN ^property[=].valueCode = #NV
* #STC "VIRGIN_ISLANDS" "Saint Croix (Test)"
* #STC ^property[0].code = #type
* #STC ^property[=].valueCode = #COUNTY
* #STC ^property[+].code = #state
* #STC ^property[=].valueCode = #VI
* #STC ^property[+].code = #postalcode
* #STC ^property[=].valueString = #00850
* #STJ "VIRGIN_ISLANDS" "Saint John (Test)"
* #STJ ^property[0].code = #type
* #STJ ^property[=].valueCode = #COUNTY
* #STJ ^property[+].code = #state
* #STJ ^property[=].valueCode = #VI
* #STJ ^property[+].code = #postalcode
* #STJ ^property[=].valueString = #00830
* #TN "TENNESSEE" "Tennessee Department of Health"
* #TN ^property[0].code = #type
* #TN ^property[=].valueCode = #STATE
* #TN ^property[+].code = #state
* #TN ^property[=].valueCode = #TN
* #TX "TEXAS" "Texas Department of State Health Services"
* #TX ^property[0].code = #type
* #TX ^property[=].valueCode = #STATE
* #TX ^property[+].code = #state
* #TX ^property[=].valueCode = #TX
* #UT "UTAH" "Utah Department of Health"
* #UT ^property[0].code = #type
* #UT ^property[=].valueCode = #STATE
* #UT ^property[+].code = #state
* #UT ^property[=].valueCode = #UT
* #VA "VIRGINIA" "Virginia Department of Health"
* #VA ^property[0].code = #type
* #VA ^property[=].valueCode = #STATE
* #VA ^property[+].code = #state
* #VA ^property[=].valueCode = #VA
* #VI "VIRGIN_ISLANDS" "Virgin Islands Department of Health (Test)"
* #VI ^property[0].code = #type
* #VI ^property[=].valueCode = #STATE
* #VI ^property[+].code = #state
* #VI ^property[=].valueCode = #VI
* #VI ^property[+].code = #postalcode
* #VI ^property[=].valueString = #00830
* #VT "VERMONT" "Vermont Department of Health"
* #VT ^property[0].code = #type
* #VT ^property[=].valueCode = #STATE
* #VT ^property[+].code = #state
* #VT ^property[=].valueCode = #VT
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05001
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05009
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05030
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05031
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05032
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05033
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05034
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05035
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05036
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05037
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05038
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05039
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05040
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05041
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05042
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05043
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05045
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05046
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05047
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05048
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05049
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05050
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05051
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05052
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05053
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05054
* #VT ^property[+].code = #postalcode
* #VT ^property[=].valueString = #05401
* #WA "WASHINGTON" "Washington State Department of Health"
* #WA ^property[0].code = #type
* #WA ^property[=].valueCode = #STATE
* #WA ^property[+].code = #state
* #WA ^property[=].valueCode = #WA
* #WI "WISCONSIN" "Wisconsin Department of Health Services"
* #WI ^property[0].code = #type
* #WI ^property[=].valueCode = #STATE
* #WI ^property[+].code = #state
* #WI ^property[=].valueCode = #WI
* #WV "WEST_VIRGINIA" "West Virginia Department of Health and Human Resources, Bureau for Public Health"
* #WV ^property[0].code = #type
* #WV ^property[=].valueCode = #STATE
* #WV ^property[+].code = #state
* #WV ^property[=].valueCode = #WV
* #WY "WYOMING" "Wyoming Department of Health"
* #WY ^property[0].code = #type
* #WY ^property[=].valueCode = #STATE
* #WY ^property[+].code = #state
* #WY ^property[=].valueCode = #WY

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/codesystems/USPublicHealthCodeSystemJurisdictionTypesExample.fsh

CodeSystem: USPublicHealthCodeSystemJurisdictionTypesExample
Id: us-ph-codesystem-jurisdiction-types-example
Title: "US Public Health CodeSystem - Jurisdiction Types Example"
Description: "This example code system describes the possible types of jurisdictions that require public health reporting."
* ^meta.versionId = "5"
* ^meta.lastUpdated = "2023-07-13T06:14:15.064Z"
* ^meta.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-codesystem"
* ^version = "0.1.0"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^caseSensitive = false
* ^content = #complete
* #state "State" "A state-level public health agency/jurisdiction"
* #county "County" "A county-level public health agency/jurisdiction"
* #city "City" "A city-level public health agency/jurisdiction"
* #district "District" "A district-level public health agency/jurisdiction"
* #borough "Borough" "A borough-level public health agency/jurisdiction"
* #parish "Parish" "A parish/neighborhood-level public health agency/jurisdiction"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/codesystems/USPublicHealthCodeSystemMessageTypes.fsh

CodeSystem: USPublicHealthCodeSystemMessageTypes
Id: us-ph-codesystem-message-types
Title: "US Public Health CodeSystem - Message Types"
Description: "The US Public Health Message Types CodeSystem contains codes for currently identified use cases for identifying types of messages being exchanged. As further use cases are identified, codes may be added to the code system."
* ^meta.versionId = "7"
* ^meta.lastUpdated = "2023-07-13T06:14:16.293Z"
* ^meta.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-codesystem"
* ^version = "0.1.0"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US
* ^caseSensitive = true
* ^valueSet = "http://hl7.org/fhir/us/ph-library/ValueSet/us-ph-valueset-message-types"
* ^hierarchyMeaning = #is-a
* ^content = #complete
* #message-report "Indicates a message containing a report exchanged between clinical care and Public Health Agency (PHA)/Research Organization." "Indicates a message that contains data for a specific use case. Hep C, Cancer and Healthcare Surveys are example use cases etc."
* #message-report #cancer-report-message "Indicates a message containing cancer reporting data sent from clinical care to PHA." "Indicates that cancer data are present in the message being sent from clinical care to PHA."
* #message-report #cancer-response-message "Indicates a message containing cancer report response data sent from PHA to clinical care." "Indicates that a message containing response data for an already submitted cancer report is being sent from PHA to clinical care."
* #message-report #hepc-report-message "Indicates a message containing Hep C data sent from clinical care to PHA." "Indicates that Hep C data are present in the message being sent from clinical care to PHA."
* #message-report #hepc-response-message "Hep C Response Message sent from PHA to clinical care." "Indicates that a message containing response data for an already submitted Hep C report message is being sent from PHA to clinical care."
* #message-report #healthcare-survey-report-message "Indicates a message containing healthcare survey data sent from clinical care to PHA." "Indicates that healthcare survey data are present in the message being sent from clinical care to PHA."
* #message-report #healthcare-survey-response-message "Indicates a message containing healthcare survey data sent from PHA to clinical care." "Indicates that healthcare survey data are present in the response being sent from PHA to clinical care in response to a healthcare survey report message."
* #message-report #research-report-message "Indicates a message containing healthcare data sent from clinical care to Research Organization." "Indicates that research data are present in the message being sent from clinical care to Research Organization."
* #message-report #research-response-message "Indicates a message containing response data from Research Organization to clinical care." "Indicates that research data are present in the response being sent from Research Organization to clinical care in response to a submitted research report message."
* #message-report #eicr-case-report-message "Indicates a message containing electronic case report healthcare data sent from clinical care." "Indicates that electronic case report data are present in the message being sent from clinical care."
* #message-report #reportability-response-message "Indicates a message containing reportability response data in response to an electronic case report." "Indicates that reportability response data are present in the response to an electronic case report."

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/codesystems/USPublicHealthCodeSystemPlanDefinitionActions.fsh

CodeSystem: USPublicHealthCodeSystemPlanDefinitionActions
Id: us-ph-codesystem-plandefinition-actions
Title: "US Public Health CodeSystem - PlanDefinition Actions"
Description: "The US Public Health PlanDefinition Actions CodeSystem contains codes for currently identified use cases for identifying actions in PlanDefinition."
* ^meta.versionId = "9"
* ^meta.lastUpdated = "2023-07-13T06:14:16.600Z"
* ^meta.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-codesystem"
* ^version = "0.1.0"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US
* ^caseSensitive = true
* ^valueSet = "http://hl7.org/fhir/us/ph-library/ValueSet/us-ph-valueset-plandefinition-action"
* ^hierarchyMeaning = #is-a
* ^content = #complete
* #initiate-reporting-workflow "Initiate a reporting workflow" "Request the initiation of a reporting workflow for a patient for a specific context (e.g., encounter)."
* #execute-reporting-workflow "Execute a series of actions to accomplish reporting" "This is top level action that uses other defined actions to accomplish reporting for a specific context (e.g., encounter)."
* #execute-reporting-workflow #check-trigger-codes "Evaluate candidate patient's data against trigger codes to determine reportability" "Evaluate candidate patient's data against trigger codes to determine reportability."
* #execute-reporting-workflow #evaluate-condition "Evaluate condition to determine reportability" "Evaluate condition to determine reportability."
* #execute-reporting-workflow #evaluate-measure "Evaluate measure to determine reportability" "Evaluate measure to determine reportability."
* #execute-reporting-workflow #check-participant-registration "Evaluate participants in encounter for reportability" "Evaluate encounter participants such as patient, practitioner, organization on whether they have been selected for reportability."
* #execute-reporting-workflow #create-report "Create a Report containing Patient's data for patients who passed the check-reportability test" "Create a Report containing Patient's data for patients who passed the check-reportability test."
* #execute-reporting-workflow #validate-report "Validate Report against specified profiles and terminologies." "Validate Report against specified profiles and terminologies."
* #execute-reporting-workflow #submit-report "Submit the report to specified endpoint" "Submit the report to specified endpoint."
* #execute-reporting-workflow #deidentify-report "Deidentify the report before submitting the report" "Deidentify the report before submitting the report."
* #execute-reporting-workflow #anonymize-report "Anonymize the report before submitting the report" "Anonymize the report before submitting the report."
* #execute-reporting-workflow #pseudonymize-report "Pseudonymize the report before submitting the report" "Pseudonymize the report before submitting the report."
* #execute-reporting-workflow #encrypt-report "Encrypt the report before submitting the report" "Encrypt the report before submitting the report."
* #execute-reporting-workflow #complete-reporting "Complete reporting for the patient" "Complete the reporting for the patient, after which no further reports will be sent for a specific context (e.g., Encounter)."
* #execute-reporting-workflow #extract-research-data "Extract data from an EHR for one or more patients." "Extract data from an EHR for one or more patients for research purposes."
* #terminate-reporting-workflow "Terminate a reporting workflow" "Request the initiation of terminating a reporting workflow."
* #terminate-reporting-workflow #cancel-report "Cancel an already submitted report" "Cancel an already submitted report."
* #report-chronic-disease-surveillance "Report Chronic Disease Surveillance report" "This action represents the reporting of a Chronic Disease Surveillance report."

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/codesystems/USPublicHealthCodeSystemReportInitiationTypes.fsh

CodeSystem: USPublicHealthCodeSystemReportInitiationTypes
Id: us-ph-codesystem-report-initiation-types
Title: "US Public Health CodeSystem - Report Initiation Type Codes"
Description: "Thsis CodeSystem contains codes for currently identified use cases for identifying how the message was initiated."
* ^meta.versionId = "5"
* ^meta.lastUpdated = "2023-07-13T06:14:16.913Z"
* ^meta.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-codesystem"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2022-09-06"
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US
* ^caseSensitive = true
* ^valueSet = "http://hl7.org/fhir/us/ph-library/ValueSet/us-ph-valueset-report-initiation-type"
* ^hierarchyMeaning = #grouped-by
* ^content = #complete
* #subscription-notification "Indicates a report was initiation based on a Subscription Notification." "Indicates that a report creation was initiated based on a notification to a subscription topic."
* #timer-notification "Indicates a report was initiation based on a Subscription Notification." "Indicates that a report creation was initiated based on a timer expiration. The timer can be absolute or a relative timer."
* #manually-initiated "Indicates a report was initiated to a manual action by the provider." "Indicates that a report creation was initiated manually by a provider."
* #alternately-initiated "Indicates a report was initiated in an alternate way by the provider." "Indicates that a report creation was initiated in an alternate way by the provider."

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/codesystems/USPublicHealthCodeSystemTriggerDefinitionNamedEvents.fsh

CodeSystem: USPublicHealthCodeSystemTriggerDefinitionNamedEvents
Id: us-ph-codesystem-triggerdefinition-namedevents
Title: "US Public Health CodeSystem - Trigger Definition Named Events"
Description: "The US Public Health TriggerDefinition NamedEvents CodeSystem contains codes for currently identified use cases for identifying named events to subscribe to in clinical workflows."
* ^meta.versionId = "9"
* ^meta.lastUpdated = "2023-07-13T06:14:17.229Z"
* ^meta.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-codesystem"
* ^version = "0.1.0"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^caseSensitive = true
* ^valueSet = "http://hl7.org/fhir/us/ph-library/ValueSet/us-ph-valueset-triggerdefinition-namedevent"
* ^hierarchyMeaning = #is-a
* ^content = #complete
* #encounter-change "Indicates a change in the patient's encounter records" "Indicates a change in the patient's encounter records which includes starting an encounter, closing an encounter, modifying data elements of an encounter. Encounter change events would be triggered by monitoring the Encounter resource."
* #encounter-change #encounter-start "Indicates the start of an encounter" "Indicates the start of an encounter, where in encounter.period.low is populated with the start time."
* #encounter-change #encounter-close "Indicates the close of an encounter" "Indicates the closure of an encounter, where in encounter.period.high is populated with the end time."
* #encounter-change #encounter-modified "Indicates modifications to data elements of an encounter" "Indicates changes to encounter codes, times, reason codes, diagnosis, discharge dispositions, locations etc."
* #diagnosis-change "Indicates a change in the patient's diagnosis" "Indicates a change in the patient's diagnosis and it includes new diagnosis or modifications to existing diagnosis. Diagnosis change events would be triggered by monitoring the Condition resource."
* #diagnosis-change #new-diagnosis "New Diagnosis added" "Indicates that a new diagnosis has been added to the patient's chart in the EHR"
* #diagnosis-change #modified-diagnosis "Existing Diagnosis record has been modified" "Indicates that an existing diagnosis record in the patient's chart has been modified. Sometimes this is equivalent to removing an existing diagnosis record (which may have been entered in error) and adding a new diagnosis record."
* #medication-change "Indicates a change in the patient's medications" "Indicates a change in the patient's medications and it includes changes to Administered medications or Requested medications or Dispensed medications. Medication change events would be triggered by monitoring the MedicationRequest, MedicationDispense, MedicationStatement and MedicationAdministration resources."
* #medication-change #new-medication "New Medication added" "Indicates that a new MedicationRequest or MedicationDispense or MedicationAdministered or MedicationStatement has been added to the patient's chart in the EHR"
* #medication-change #modified-medication "Existing Medication record has been modified" "Indicates that an existing medication record in the patient's chart has been modified. Sometimes this is equivalent to removing an existing medication record (which may have been entered in error) and adding a new medication record."
* #labresult-change "Indicates a change in the patient's labresults" "Indicates a change in the patient's lab results and it includes new lab results or modifications to existing lab results. Changes to lab results could be because of change in the lab result values, lab test names, times or other data elements of the Observation resource where the category is laboratory. LabResult events would be triggered by monitoring the Observation resource with an Observation.category=laboratory."
* #labresult-change #new-labresult "New Lab Result added" "Indicates that a new Lab Result has been added to the patient's chart in the EHR"
* #labresult-change #modified-labresult "Existing Lab Result record has been modified" "Indicates that an existing lab result record in the patient's chart has been modified. Sometimes this is equivalent to removing an existing lab result record (which may have been entered in error) and adding a new lab result record. Changes to lab results could be because of change in the lab result values, lab test names, times or other data elements of the Observation resource where the category is laboratory."
* #order-change "Indicates a change in the patient's orders" "Indicates a change in the patient's orders and it includes new or modified ServiceRequests. Order change events would be triggered by monitoring the ServiceRequest resource."
* #order-change #new-order "New Order added" "Indicates that a new ServiceRequest has been added to the patient's chart in the EHR"
* #order-change #modified-order "Existing Order record has been modified" "Indicates that an existing ServiceRequest record in the patient's chart has been modified. Sometimes this is equivalent to removing an existing ServiceRequest record (which may have been entered in error) and adding a new ServiceRequest record."
* #procedure-change "Indicates a change in the patient's procedures" "Indicates a change in the patient's procedures and it includes new procedures or modifications to existing procedures. Procedure events would be triggered by monitoring the Procedure resource."
* #procedure-change #new-procedure "New Procedure added" "Indicates that a new procedure has been added to the patient's chart in the EHR"
* #procedure-change #modified-procedure "Existing Procedure record has been modified" "Indicates that an existing procedure record in the patient's chart has been modified. Sometimes this is equivalent to removing an existing procedure record (which may have been entered in error) and adding a new procedure record."
* #immunization-change "Indicates a change in the patient's immunizations" "Indicates a change in the patient's immunization and it includes new immunizations or modifications to existing immunization records. Immunization change events would be triggered by monitoring the Immunization resource."
* #immunization-change #new-immunization "New Immunization added" "Indicates that a new immunization has been added to the patient's chart in the EHR"
* #immunization-change #modified-immunization "Existing immunization record has been modified" "Indicates that an existing immunization record in the patient's chart has been modified. Sometimes this is equivalent to removing an existing immunization record (which may have been entered in error) and adding a new immunization record."
* #demographic-change "Indicates change in patient demographics" "Indicates that the Patient demographic attributes such as Date of Birth, Race, Ethnicity, Deceased date, Address, Telecom, Names have changed. Demographic change events would be triggered by monitoring the Patient resource."
* #received-public-health-report "Indicates receipt of a public health report" "Indicates that a public health report was submitted and received by a specific system. This event could trigger downstream processing and hence is designated as a named event."
* #received-public-health-response "Indicates receipt of a public health response for a submitted public health report" "Indicates that a public health response was received by a specific system for an already submitted public health report. This event could trigger downstream processing and hence is designated as a named event."
* #manual-notification "A Practitioner or their representatives notify the application about change in patient data" "In some cases where automated notifications are not supported, a practitioner or their representative can initiate the public health report processing by notifying the application about change in a patient's data."
* #timer-event "A Timer is setup to kick off processing." "Indicates a timer based approach to start processing."
* #timer-event #periodic-timer "Setup Periodic Timer" "Indicates that processing must be performed periodically based on a specified duration."
* #timer-event #absolute-timer "Setup Absolute Timer" "Indicates that processing must be performed at a specific time."

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/codesystems/USPublicHealthCodeSystemUsageContext.fsh

CodeSystem: USPublicHealthCodeSystemUsageContext
Id: us-ph-codesystem-usage-context
Title: "US Public Health CodeSystem - Usage Context"
Description: "This code system contains codes that identify the use context of a ValueSet or Library."
* ^meta.versionId = "4"
* ^meta.lastUpdated = "2023-07-13T06:14:17.545Z"
* ^meta.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-codesystem"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^caseSensitive = true
* ^content = #complete
* #emergent "Emergent" "The artifact is an emergent reporting specification program release."
* #program "Program" "The artifact is a reporting specification program."
* #routine "Routine" "The artifact is a routine reporting specification program release."
* #supplemental "Supplemental" "The artifact is applicable only when determining whether an event is suspected reportable."
* #triggering "Triggering" "The artifact is applicable when identifying a triggering event."
* #value-set-library "ValueSet Library" "The artifact is a ValueSet Library."

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/codesystems/USPublicHealthCodeSystemUsageContextType.fsh

CodeSystem: USPublicHealthCodeSystemUsageContextType
Id: us-ph-codesystem-usage-context-type
Title: "US Public Health CodeSystem - Usage Context Type"
Description: "This code system contains codes that identify the use context type of a ValueSet or Library."
* ^meta.versionId = "5"
* ^meta.lastUpdated = "2023-07-13T06:14:17.853Z"
* ^meta.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-codesystem"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Public Health Work Group"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^caseSensitive = true
* ^content = #complete
* #priority "Priority" "The priority designation of the reporting specifciation release (e.g. Routine, Emergent)."
* #reporting "Reporting" "The reporting workflow step in which this artifact should be used."
* #specification-type "Specification Type" "The type of specification this resource represents (e.g. Program Specification, or ValueSet Library)."

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthAddressExtension.fsh

Extension: USPublicHealthAddressExtension
Id: us-ph-address-extension
Title: "US Public Health Address Extension"
Description: "This Extension profile represents where the patient traveled to or visited as an address e.g.: country, state, city, street address (if applicable)."
* ^meta.versionId = "5"
* ^meta.lastUpdated = "2023-07-10T22:51:58.002Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^context[0].type = #element
* ^context[=].expression = "Observation.component"
* ^context[+].type = #element
* ^context[=].expression = "Observation"
* . ..1
* . ^short = "US Public Health Address Extension"
* . ^definition = "Where the patient traveled to or visited as an address e.g. country, city, street address if applicable. At least, address must contain the country."
* value[x] only Address
* value[x] MS
* value[x] ^example.label = "for Address"
* value[x] ^example.valueAddress.text = "Nadi FIJI"
* value[x] ^example.valueAddress.city = "Nadi"
* value[x] ^example.valueAddress.country = "FIJI"
* value[x].use MS
* value[x].type MS
* value[x].line MS
* value[x].city MS
* value[x].district MS
* value[x].state MS
* value[x].state from UspsTwoLetterAlphabeticCodes (preferred)
* value[x].state ^binding.description = "USPS Two Letter Alphabetic Codes"
* value[x].postalCode MS
* value[x].country 1..1 MS

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthAlternativeExpressionExtension.fsh

Extension: USPublicHealthAlternativeExpressionExtension
Id: us-ph-alternative-expression-extension
Title: "US Public Health Alternative Expression Extension"
Description: "This Extension profile represents a US Public Health Alternative Expression."
* ^meta.versionId = "8"
* ^meta.lastUpdated = "2023-07-13T22:25:43.061Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^context.type = #fhirpath
* ^context.expression = "PlanDefinition.repeat(action).condition.expression"
* . ^short = "US Public Health Alternative Expression Extension"
* . ^definition = "This extension represents a US Public Health Alternative Expression"
* . ^isModifier = false
* valueExpression only Expression

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthAsyncIndicatorExtension.fsh

Extension: USPublicHealthAsyncIndicatorExtension
Id: us-ph-async-indicator-extension
Title: "US Public Health Async Indicator Extension"
Description: "This Extension profile represents the expectation of whether messages resulting from the PlanDefinition are expected to be processed asynchronously."
* ^meta.versionId = "5"
* ^meta.lastUpdated = "2023-07-12T18:55:30.744Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US
* ^context.type = #element
* ^context.expression = "PlanDefinition"
* . ..1
* . ^short = "US Public Health Async Indicator Extension"
* value[x] 1..1
* value[x] only boolean
* value[x] ^short = "True or False."

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthCodeSystemPropertyRequiredBindingExtension.fsh

Extension: USPublicHealthCodeSystemPropertyRequiredBindingExtension
Id: us-ph-codesystem-property-required-binding-extension
Title: "US Public Health CodeSystem Property Required Binding Extension"
Description: "This Extension profile represents a reference to a ValueSet that establishes a required binding to the allowable values for a code system property."
* ^meta.versionId = "9"
* ^meta.lastUpdated = "2023-07-10T22:52:13.511Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^context.type = #fhirpath
* ^context.expression = "CodeSystem.property"
* . ^short = "US Public Health CodeSystem Property Binding Extension"
* . ^definition = "This extension represents an US Public Health CodeSystem Property Binding"
* value[x] 1..
* value[x] only canonical

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthDataEncryptedExtension.fsh

Extension: USPublicHealthDataEncryptedExtension
Id: us-ph-data-encrypted-extension
Title: "US Public Health Data Encrypted Extension"
Description: "This Exension profile indicates whether or not the data in the content bundle is encrypted."
* ^meta.versionId = "9"
* ^meta.lastUpdated = "2023-07-12T18:55:30.628Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US
* ^jurisdiction.text = "United States of America"
* ^context.type = #element
* ^context.expression = "MessageHeader"
* . 0..1
* . ^short = "US Public Health Data Encrypted Extension"
* . ^definition = "Indicates whether the data in the content bundle is encrypted or not."
* url only uri
* value[x] only boolean

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthDataEncryptionAlgorithmExtension.fsh

Extension: USPublicHealthDataEncryptionAlgorithmExtension
Id: us-ph-data-encryption-algorithm-extension
Title: "US Public Health Data Encryption Algorithm Extension"
Description: "This Extension profile represents algorithms that would be acceptable for encryption of the data prior to submitting to the data receiver."
* ^meta.versionId = "4"
* ^meta.lastUpdated = "2023-07-12T18:55:30.772Z"
* ^status = #draft
* ^experimental = false
* ^date = "2019-09-01"
* ^publisher = "HL7 International - Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US
* ^context.type = #element
* ^context.expression = "PlanDefinition"
* . 0..1
* . ^short = "US Public Health Data Encryption Algorithm"
* url only uri
* value[x] 1..1
* value[x] only code

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthDateDeterminedExtension.fsh

Extension: USPublicHealthDateDeterminedExtension
Id: us-ph-date-determined-extension
Title: "US Public Health Date Determined Extension"
Description: "This Extension profile represents the date a status or observation was determined (date of determination)."
* ^meta.versionId = "6"
* ^meta.lastUpdated = "2023-07-10T22:57:29.875Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^context[0].type = #element
* ^context[=].expression = "Observation"
* ^context[+].type = #element
* ^context[=].expression = "Observation.component"
* . ^short = "US Public Health Date Determined Extension"
* value[x] 1..
* value[x] only dateTime
* value[x] ^short = "Determination date"
* value[x] ^definition = "Represents the determination date of a status or observation"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthDateRecordedExtension.fsh

Extension: USPublicHealthDateRecordedExtension
Id: us-ph-date-recorded-extension
Title: "US Public Health Date Recorded Extension"
Description: "This Extension profile represents the date a status or observation was recorded (recorded date)."
* ^meta.versionId = "6"
* ^meta.lastUpdated = "2023-07-10T22:57:31.356Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^context[0].type = #element
* ^context[=].expression = "Observation"
* ^context[+].type = #element
* ^context[=].expression = "Observation.component"
* . ^short = "US Public Health Date Recorded Extension"
* value[x] 1..
* value[x] only dateTime
* value[x] ^short = "Recorded date"
* value[x] ^definition = "Represents the recorded date of a status or observation"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthDeterminationOfReportabilityExtension.fsh

Extension: USPublicHealthDeterminationOfReportabilityExtension
Id: us-ph-determination-of-reportability-extension
Title: "US Public Health Determination of Reportability Extension"
Description: "This Extension profile represents the determination of reportability. Reportability is \"the quality or state of being reportable or not\". Reportability does not equate to the patient having a condition or meeting a case definition (definitively being a case)."
* ^meta.versionId = "6"
* ^meta.lastUpdated = "2023-07-12T07:43:41.009Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^context.type = #element
* ^context.expression = "Observation"
* . 1..1
* . ^short = "US Public Health Determination of Reportability Extension"
* . ^definition = "This extension represents the determination of reportability. Reportability is \"the quality or state of being reportable or not\". Reportability does not equate to the patient having a condition or meeting a case definition (definitively being 'a case').\n\nFor each condition included in the eICR and the relevant public health agency(s), this element indicates the determination of whether the condition is reportable to public health. \n\nThe values that can be used for the Determination of Reportability are described below.\n\nA possible condition is:\n\n- Reportable - The information provided meets reporting criteria for an associated PHA.\n\nA possible condition:\n\n- May be Reportable - The information provided may meet reporting criteria if additional information is provided. The Reportability Response will also be able to share the information needed to definitively determine reportability.\n\nA possible condition is:\n\n- Not Reportable - The information provided conclusively does not meet reporting criteria.\n\nSome decision support systems may not be able to fully differentiate between possible conditions that are Not Reportable and those that May be Reportable if additional information is provided. In these circumstances there may only be a reportability determination of:\n\n- No Reporting Rule Met - The information provided does not meet reporting criteria or may meet reporting criteria if additional information is provided.\n\nThe determination of No Reporting Rule Met may be provided for a possible condition or for all conditions in the  eICR."
* value[x] 1..
* value[x] only CodeableConcept
* value[x] from RRVS_DeterminationOfReportability_eCR (extensible)
* value[x] ^short = "Value representing whether a condition is reportable or not."
* value[x] ^binding.description = "Determination of Reportability"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthDeterminationOfReportabilityReasonExtension.fsh

Extension: USPublicHealthDeterminationOfReportabilityReasonExtension
Id: us-ph-determination-of-reportability-reason-extension
Title: "US Public Health Determination of Reportability Reason Extension"
Description: "This Extension profile represents the reason for the determination of reportability."
* ^meta.versionId = "4"
* ^meta.lastUpdated = "2023-07-10T22:57:34.601Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^context.type = #element
* ^context.expression = "Observation"
* . ^short = "US Public Health Determination of Reportability Reason"
* . ^definition = "The reason for the determination of reportability."
* value[x] 1..
* value[x] only string or CodeableConcept

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthDeterminationOfReportabilityRuleExtension.fsh

Extension: USPublicHealthDeterminationOfReportabilityRuleExtension
Id: us-ph-determination-of-reportability-rule-extension
Title: "US Public Health Determination of Reportability Rule Extension"
Description: "This Extension profile represents a rule that led to the determination of reportability."
* ^meta.versionId = "6"
* ^meta.lastUpdated = "2023-07-12T07:41:49.254Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^context.type = #element
* ^context.expression = "Observation"
* . ^short = "US Public Health Determination of Reportability Rule Extension"
* . ^definition = "A rule that was involved in the determination of the reportability status."
* value[x] 1..
* value[x] only string

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthExpansionParametersExtension.fsh

Extension: USPublicHealthExpansionParametersExtension
Id: us-ph-expansion-parameters-extension
Title: "US Public Health Expansion Parameters Extension"
Description: "Thes Extension profile supports the definition of expansion parameters for the ValueSet."
* ^meta.versionId = "6"
* ^meta.lastUpdated = "2023-07-10T22:57:53.687Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^context.type = #element
* ^context.expression = "Library"
* . 0..1
* . ^short = "US Public Health Expansion Parameters Extension"
* . ^definition = "Supports the definition of expansion parameters for the ValueSet."
* url only uri
* value[x] only Reference(Parameters)

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthExpectedResponseTimeExtension.fsh

Extension: USPublicHealthExpectedResponseTimeExtension
Id: us-ph-expected-response-time-extension
Title: "US Public Health Expected Response Time Extension"
Description: "This Extension profile represents the maximum time the sender has to wait to get a response, beyond which the message is assumed to have failed to reach the destination."
* ^meta.versionId = "3"
* ^meta.lastUpdated = "2023-07-12T07:12:38.544Z"
* ^meta.source = "#2KA2LqwdU5yooUWP"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US
* ^context.type = #element
* ^context.expression = "PlanDefinition"
* . ..1
* . ^short = "US Public Health Expected Response Time Extension"
* url only uri
* value[x] 1..1
* value[x] only Duration
* value[x] ^short = "Response Expected in Duration."

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthFHIRQueryPatternExtension.fsh

Extension: USPublicHealthFHIRQueryPatternExtension
Id: us-ph-fhirquerypattern-extension
Title: "US Public Health FHIR Query Pattern Extension"
Description: "This Exension profile supports communicating the FHIR query for a given data requirement."
* ^meta.versionId = "8"
* ^meta.lastUpdated = "2023-07-10T22:57:58.362Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^context.type = #fhirpath
* ^context.expression = "PlanDefinition.repeat(action).input"
* . 0..*
* . ^short = "US Public Health FHIR Query Pattern Extension"
* . ^definition = "What FHIR query pattern?"
* url only uri
* value[x] only string

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthInformationRecipientExtension.fsh

Extension: USPublicHealthInformationRecipientExtension
Id: us-ph-information-recipient-extension
Title: "US Public Health Information Recipient Extension"
Description: "This Extension profile represents an intended recipient of a [US Public Health Composition](StructureDefinition-us-ph-composition.html)."
* ^meta.versionId = "7"
* ^meta.lastUpdated = "2023-07-15T00:17:06.569Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^context.type = #element
* ^context.expression = "Composition"
* value[x] only Reference(USCorePractitionerProfile or USPublicHealthPractitionerRole or USPublicHealthOrganization)
* value[x] MS

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthInitiationReasonExtension.fsh

Extension: USPublicHealthInitiationReasonExtension
Id: us-ph-initiation-reason-extension
Title: "US Public Health Initiation Reason Extension"
Description: "This Extension profile contains an explanation for the manual or alternate initiation of the public health report."
* ^meta.versionId = "5"
* ^meta.lastUpdated = "2023-07-10T22:58:02.907Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^context.type = #element
* ^context.expression = "Composition"
* . ..*
* . ^short = "Initial Case Report Initiation Reason"
* . ^definition = "Reason for manual or alternate initiation of the public health report."
* . ^isModifier = false
* value[x] 1..1 MS
* value[x] only string or CodeableConcept
* value[x] ^example[0].label = "valueString"
* value[x] ^example[=].valueString = "Free text containing the reason for the initiation"
* value[x] ^example[+].label = "valueCodeableConcept"
* value[x] ^example[=].valueCodeableConcept = $sct#772146005 "Pertussis suspected (situation)"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthInitiationTypeExtension.fsh

Extension: USPublicHealthInitiationTypeExtension
Id: us-ph-report-initiation-type-extension
Title: "US Public Health Initiation Type Extension"
Description: "This Extension profile represents whether the report was either manually initiated or alternately initiated by the provider."
* ^meta.versionId = "5"
* ^meta.lastUpdated = "2023-07-12T18:55:30.826Z"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US
* ^context.type = #element
* ^context.expression = "MessageHeader"
* . 1..1
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from USPublicHealthValueSetReportInitiationType (extensible)
* value[x] ^binding.description = "Initiation Types"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthMessageProcessingCategoryExtension.fsh

Extension: USPublicHealthMessageProcessingCategoryExtension
Id: us-ph-message-processing-category-extension
Title: "US Public Health Message Processing Category Extension"
Description: "This Extension profile indicates how systems have to deal with messages in terms of duplicates, lack of responses."
* ^meta.versionId = "6"
* ^meta.lastUpdated = "2023-07-10T22:59:18.076Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US
* ^context.type = #element
* ^context.expression = "MessageHeader"
* . 1..1
* . ^short = "US Public Health Message Processing Category Extension"
* . ^definition = "Indicates how systems have to deal with messages in terms of duplicates, lack of responses."
* url only uri
* value[x] only code
* value[x] from MessageSignificanceCategory (required)
* value[x] ^short = "The message processing requirements identified by the message"
* value[x] ^binding.description = "MessageSignificanceCategory"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthNamedEventTypeExtension.fsh

Extension: USPublicHealthNamedEventTypeExtension
Id: us-ph-named-eventtype-extension
Title: "US Public Health Named Event Type Extension"
Description: "This Extension profile indicates the types of named events to subscribe to from the EHR."
* ^meta.versionId = "7"
* ^meta.lastUpdated = "2023-07-12T08:05:13.304Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^context.type = #element
* ^context.expression = "PlanDefinition.action.trigger"
* . 1..1
* . ^short = "US Public Health Named Event Type Extension"
* . ^definition = "Indicates the types of named events to subscribe to from the EHR."
* url only uri
* value[x] only CodeableConcept
* value[x] from USPublicHealthValueSetTriggerDefinitionNamedEvent (extensible)
* value[x] ^short = "The set of named events that can be used for subscriptions"
* value[x] ^binding.description = "US Public Health TriggerDefinition NamedEvents"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthReceiverAddressExtension.fsh

Extension: USPublicHealthReceiverAddressExtension
Id: us-ph-receiver-address-extension
Title: "US Public Health Receiver Address Extension"
Description: "This Extension profile indicates the endpoint address where the report is to be sent."
* ^meta.versionId = "7"
* ^meta.lastUpdated = "2023-07-10T23:00:59.198Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US
* ^jurisdiction.text = "United States of America"
* ^context.type = #element
* ^context.expression = "PlanDefinition"
* . 0..1
* . ^short = "Indicates the address where the report has to be sent."
* . ^definition = "Indicates the address where the report has to be sent."
* url only uri
* value[x] only Reference(Endpoint)

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthReceiverJwksUrlExtension.fsh

Extension: USPublicHealthReceiverJwksUrlExtension
Id: us-ph-receiver-jwks-url-extension
Title: "US Public Health Receiver JWKS Url Extension"
Description: "This Extension profile indicates the location of the public key that needs to be used for encryption when sending data to the receiver."
* ^meta.versionId = "6"
* ^meta.lastUpdated = "2023-07-13T00:50:21.460Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US
* ^context.type = #element
* ^context.expression = "PlanDefinition"
* . 0..1
* . ^short = "US Public Health Receiver Jwks Url"
* url only uri
* value[x] 1..1
* value[x] only url

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthRelatedDataExtension.fsh

Extension: USPublicHealthRelatedDataExtension
Id: us-ph-relateddata-extension
Title: "US Public Health Related Data Extension"
Description: "The Extension profile allows indicating that an input to a parent action is an input to specific child actions. It also allows the output of one action to be identified as the input to a different action."
* ^meta.versionId = "7"
* ^meta.lastUpdated = "2023-07-10T23:01:00.733Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^context[0].type = #element
* ^context[=].expression = "PlanDefinition.action.input"
* ^context[+].type = #element
* ^context[=].expression = "PlanDefinition.action.action.input"
* ^context[+].type = #element
* ^context[=].expression = "PlanDefinition.action.output"
* ^context[+].type = #element
* ^context[=].expression = "PlanDefinition.action.action.output"
* . ..1
* . ^short = "US Public Health Related Data Extension"
* . ^definition = "Points to an existing input or output element that provides data to this input or results as output for the action."
* url only uri
* value[x] 1..1
* value[x] only string
* value[x] ^short = "The ID of the input or output element that provides data to this input or results as output."

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthTherapeuticMedicationResponseExtension.fsh

Extension: USPublicHealthTherapeuticMedicationResponseExtension
Id: us-ph-therapeutic-medication-response-extension
Title: "US Public Health Therapeutic Medication Response Extension"
Description: "This Extension profile represents a therapeutic response (as opposed to an undesired reaction) to the administration of a medication."
* ^meta.versionId = "5"
* ^meta.lastUpdated = "2023-07-12T07:14:50.932Z"
* ^version = "1.0.0"
* ^experimental = false
* ^publisher = "HL7 {site.data.fhir.ig.publisher}Health Work Group"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^context.type = #element
* ^context.expression = "MedicationAdministration"
* value[x] only CodeableConcept
* value[x] from TherapeuticResponseToMedication (extensible)
* value[x] ^binding.description = "Therapeutic Response to Medication"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthTribalAffiliationExtension.fsh

Extension: USPublicHealthTribalAffiliationExtension
Id: us-ph-tribal-affiliation-extension
Title: "US Public Health Tribal Affiliation Extension"
Description: "This Extension profile represents an affiliated tribe name and whether or not the patient is an enrolled member of that tribe."
* ^meta.versionId = "5"
* ^meta.lastUpdated = "2023-07-10T23:01:38.764Z"
* ^version = "1.0.0"
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^context.type = #element
* ^context.expression = "Patient"
* . 0..*
* . ^short = "Tribal Affiliation Extension"
* . ^definition = "Affiliated tribe name and whether or not the patient is an enrolled member"
* extension contains
    TribeName 1..1 MS and
    EnrolledTribeMember 0..1 MS
* extension[TribeName] only Extension
* extension[TribeName] ^short = "Affiliated tribe name"
* extension[TribeName] ^definition = "Affiliated tribe name"
* extension[TribeName].url 1..1
* extension[TribeName].url only uri
* extension[TribeName].value[x] 1..1
* extension[TribeName].value[x] only Coding
* extension[TribeName].value[x] from $v3-TribalEntityUS_1 (required)
* extension[TribeName].value[x] ^short = "Tribal Entity US"
* extension[TribeName].value[x] ^binding.description = "Tribal Entity US"
* extension[EnrolledTribeMember] only Extension
* extension[EnrolledTribeMember] ^short = "Enrolled tribe member"
* extension[EnrolledTribeMember] ^definition = "Enrolled tribe member"
* extension[EnrolledTribeMember].url 1..1
* extension[EnrolledTribeMember].url only uri
* extension[EnrolledTribeMember].value[x] 1..1
* extension[EnrolledTribeMember].value[x] only boolean
* url 1..1

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthTrustServiceEndpointExtension.fsh

Extension: USPublicHealthTrustServiceEndpointExtension
Id: us-ph-trust-service-endpoint-extension
Title: "US Public Health Trust Service Endpoint Extension"
Description: "This Extension profile represents the endpoint address which implements trust services and can be used by specific actions requiring trust services with appropriate authorities and policies."
* ^meta.versionId = "5"
* ^meta.lastUpdated = "2023-07-13T22:49:10.744Z"
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US
* ^context.type = #element
* ^context.expression = "PlanDefinition.action"
* . 0..1
* . ^short = "US Public Health Trust Service Endpoint"
* url only uri
* value[x] 1..1
* value[x] only Reference(USPublicHealthEndpoint)

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/extensions/USPublicHealthUsageWarningExtension.fsh

Extension: USPublicHealthUsageWarningExtension
Id: us-ph-usagewarning-extension
Title: "US Public Health Usage Warning Extension"
Description: "This Extension profile represents an extra warning about the correct use of the value set."
* ^meta.versionId = "4"
* ^meta.lastUpdated = "2023-07-10T23:01:57.387Z"
* ^version = "0.2.0"
* ^status = #draft
* ^experimental = false
* ^publisher = "{site.data.fhir.ig.publisher}"
* ^contact.name = "HL7 Public Health Work Group"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.org/Special/committees/pher"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^jurisdiction.text = "United States of America"
* ^context.type = #element
* ^context.expression = "ValueSet"
* . 0..1
* . ^short = "US Public Health Usage Warning Extension"
* . ^definition = "An extra warning about the correct use of the value set."
* url only uri
* value[x] only string

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/device-software-ymca.fsh

Instance: device-software-ymca
InstanceOf: Device
Title: "Device - Software YMCA"
Description: "Device: Software YMCA example"
Usage: #example
* identifier.system = "http://acme.com/software/client-ids"
* identifier.value = "goodhealth_id"
* manufacturer = "Acme Devices, Inc"
* type.text = "EHR"
* version.value = "10.23-23423"
* contact.system = #url
* contact.value = "http://acme.com"
* url = "http://acme.com/ymca/software/"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/expansion-parameters-us-ph.fsh

Instance: expansion-parameters-us-ph
InstanceOf: Parameters
Title: "Parameters - SNOMED US Version"
Description: "Parameters - SNOMED US Version"
Usage: #definition
* parameter[0].name = "profile-url"
* parameter[=].valueString = "dc8fd4bd-091a-424a-8a3b-6198ef136891"
* parameter[+].name = "system-version"
* parameter[=].valueString = "http://snomed.info/sct|http://snomed.info/sct/731000124108"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-core-location-city-football-stadium.fsh

Instance: us-core-location-city-football-stadium
InstanceOf: USCoreLocation
Title: "US Core Location - City Football Stadium"
Description: "US Core Location: City Football Stadium example"
Usage: #example
* status = #active
* name = "City Football Stadium"
* type = $sct#264379009 "Sports stadium (environment)"
* type.text = "City Football Stadium"
* address.line = "99 Football Stadium Road"
* address.city = "Ann Arbor"
* address.state = "MI"
* address.postalCode = "99999"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-core-practitioner-henry-seven.fsh

Instance: us-core-practitioner-henry-seven
InstanceOf: USCorePractitionerProfile
Title: "US Core Practitioner - Henry Seven"
Description: "US Core Practitioner: Henry Seven example"
Usage: #example
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339108"
* name.family = "Henry"
* name.given = "Seven"
* name.suffix = "M.D."
* telecom.system = #email
* telecom.value = "henry.seven@example.com"
* address.line = "1002 Healthcare Drive"
* address.city = "Ann Arbor"
* address.state = "MI"
* address.postalCode = "99999"
* address.country = "US"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-char-home-environment-eve-everywoman.fsh

Instance: us-ph-char-home-environment-eve-everywoman
InstanceOf: USPublicHealthCharacteristicsOfHomeEnvironment
Title: "US Public Health Characteristics of Home Environment - Eve Everywoman"
Description: "US Public Health Characteristics of Home Environment: Eve Everywoman example"
Usage: #example
* status = #final
* code = $loinc#75274-1 "Characteristics of residence"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectiveDateTime = "2016-05-18T22:33:22Z"
* valueCodeableConcept = $sct#32911000 "Homeless"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-composition-example.fsh

Instance: us-ph-composition-example
InstanceOf: USPublicHealthComposition
Title: "US Public Health Composition - Eve Everywoman"
Description: "US Public Health Composition: Eve Everywoman example"
Usage: #example
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/composition-clinicaldocument-versionNumber"
* extension[=].valueString = "1"
* extension[+].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-information-recipient-extension"
* extension[=].valueReference.reference = "PractitionerRole/us-ph-practitionerrole-henry-seven"
* extension[+].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-initiation-reason-extension"
* extension[=].valueString = "Suspicion of Zika"
* identifier.value = "c03eab8c-11e8-4d0c-ad2a-b385395e27db"
* status = #final
* type = $loinc#55751-2 "Public Health Case Report"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* encounter.reference = "Encounter/us-ph-encounter-eve-everywoman-outpatient"
* encounter.display = "Ambulatory Office Visit"
* date = "2018-01-02T22:13:23Z"
* author.reference = "PractitionerRole/us-ph-practitionerrole-henry-seven"
* author.display = "Henry Seven, MD"
* title = "US Public Health Composition Example"
* custodian.reference = "Organization/us-ph-organization-salem-medical-center"
* custodian.display = "Salem Medical Center"
* section[0].title = "History of Present Illness Section"
* section[=].code = $loinc#10164-2 "History of Present illness Narrative"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table><tr><td style=\"font-weight: bold\">title</td><td><div title=\"title\">History of Present Illness Section</div></td></tr><tr><td style=\"font-weight: bold\">code</td><td><ul style=\"list-style:none; padding-left:0; margin:0 0;\"><li><ul style=\"list-style:none; padding-left:0; margin:0 0;\"><li><div title=\"display\">History of Present illness Narrative</div> ( \n                                            <div title=\"code\">10164-2</div> ) \n                                        </li><li><div title=\"system\"><a href=\"http://loinc.org\">http://loinc.org</a></div></li></ul></li></ul></td></tr><tr><td colspan=\"2\" lang=\"en-US\" class=\"text-no-entries\"> Persistent Cough REPORTED starting on 2018/03/05 \n                            <br/> Whooping Respiration not reported \n                            <br/> Paroxysms Of Coughing REPORTED starting on 2018/03/06 \n                            <br/> Post-tussive vomiting not reported \n                        </td></tr></table></div>"
* section[+].title = "Reason for Visit Section"
* section[=].code = $loinc#29299-5 "Reason for visit Narrative"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table><tr><td style=\"font-weight: bold\">title</td><td><div title=\"title\">Reason for Visit Section</div></td></tr><tr><td style=\"font-weight: bold\">code</td><td><ul style=\"list-style:none; padding-left:0; margin:0 0;\"><li><ul style=\"list-style:none; padding-left:0; margin:0 0;\"><li><div title=\"display\">Reason for visit Narrative</div> ( \n                                            <div title=\"code\">29299-5</div> ) \n                                        </li><li><div title=\"system\"><a href=\"http://loinc.org\">http://loinc.org</a></div></li></ul></li></ul></td></tr><tr><td colspan=\"2\" lang=\"en-US\" class=\"text-no-entries\"><p>Reason for Visit: Bad cough</p></td></tr></table></div>"
* section[+].title = "Chief Complaint"
* section[=].code = $loinc#10154-3 "Chief complaint Narrative - Reported"
* section[=].text.status = #generated
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table><tr><td style=\"font-weight: bold\">title</td><td><div title=\"title\">Chief complaint Narrative - Reported</div></td></tr><tr><td style=\"font-weight: bold\">code</td><td><ul style=\"list-style:none; padding-left:0; margin:0 0;\"><li><ul style=\"list-style:none; padding-left:0; margin:0 0;\"><li><div title=\"display\">Chief complaint Narrative - Reported</div> ( \n                                            <div title=\"code\">10154-3</div> ) \n                                        </li><li><div title=\"system\"><a href=\"http://loinc.org\">http://loinc.org</a></div></li></ul></li></ul></td></tr><tr><td colspan=\"2\" lang=\"en-US\" class=\"text-no-entries\"><p>Chief Complaint: Bad cough</p></td></tr></table></div>"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-condition-encounter-diagnosis-diabetes.fsh

Instance: us-ph-condition-encounter-diagnosis-diabetes
InstanceOf: USPublicHealthConditionEncounterDiagnosis
Title: "US Public Health Condition Encounter Diagnosis - Eve Everywoman - Diabetes"
Description: "US Public Health Condition Encounter Diagnosis: Eve Everywoman - Diabetes example"
Usage: #example
* category = $condition-category#encounter-diagnosis "Encounter Diagnosis"
* code = $sct#73211009 "Diabetes mellitus (disorder)"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* onsetDateTime = "2017-08-23"
* asserter.reference = "Practitioner/us-core-practitioner-henry-seven"
* asserter.display = "Henry Seven, MD"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-condition-problem-health-concern-hypertension.fsh

Instance: us-ph-condition-problem-health-concern-hypertension
InstanceOf: USPublicHealthConditionProblemsHealthConcerns
Title: "US Public Health Condition Problem Health Concern - Eve Everywoman - Hypertension"
Description: "US Public Health Condition Problem Health Concern: Eve Everywoman - Hypertension example"
Usage: #example
* category = $condition-category#problem-list-item "Problem List Item"
* code = $sct#266287006 "(Hypertensive disease) or (hypertension) (disorder)"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* onsetDateTime = "2014-05-23"
* asserter.reference = "Practitioner/us-core-practitioner-henry-seven"
* asserter.display = "Henry Seven, MD"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-content-bundle-example.fsh

Instance: us-ph-content-bundle-example
InstanceOf: USPublicHealthContentBundle
Title: "US Public Health Content Bundle - Eve Everywoman"
Description: "US Public Health Content Bundle: Eve Everywoman example"
Usage: #example
* type = #collection
* timestamp = "2022-06-20T11:15:33-10:00"
* entry.fullUrl = "http://example.org/fhir/Patient/us-ph-patient-eve-everywoman"
* entry.resource = us-ph-patient-eve-everywoman

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-disability-status-eve-everywoman.fsh

Instance: us-ph-disability-status-eve-everywoman
InstanceOf: USPublicHealthDisabilityStatus
Title: "US Public Health Disability Status - Eve Everywoman"
Description: "US Public Health Disability Status: Eve Everywoman example"
Usage: #example
* status = #final
* code = $loinc#69856-3 "Are you deaf, or do you have serious difficulty hearing?"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectiveDateTime = "2020-11-10T22:33:22Z"
* valueBoolean = true

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-document-bundle-example.fsh

Instance: us-ph-document-bundle-example
InstanceOf: USPublicHealthDocumentBundle
Title: "US Public Health Document Bundle - Eve Everywoman"
Description: "US Public Health Document Bundle: Eve Everywoman example"
Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:2be4b4e4-6df1-4cb2-a947-c70fa0eda53b"
* type = #document
* timestamp = "2022-06-02T22:13:23Z"
* entry[0].fullUrl = "http://example.org/fhir/Composition/us-ph-composition-example"
* entry[=].resource = us-ph-composition-example
* entry[+].fullUrl = "http://example.org/fhir/Encounter/us-ph-encounter-eve-everywoman-outpatient"
* entry[=].resource = us-ph-encounter-eve-everywoman-outpatient
* entry[+].fullUrl = "http://example.org/fhir/PractitionerRole/us-ph-practitionerrole-henry-seven"
* entry[=].resource = us-ph-practitionerrole-henry-seven
* entry[+].fullUrl = "http://example.org/fhir/Patient/us-ph-patient-eve-everywoman"
* entry[=].resource = us-ph-patient-eve-everywoman
* entry[+].fullUrl = "http://example.org/fhir/Location/us-ph-location-salem-medical-center"
* entry[=].resource = us-ph-location-salem-medical-center
* entry[+].fullUrl = "http://example.org/fhir/Practitioner/us-core-practitioner-henry-seven"
* entry[=].resource = us-core-practitioner-henry-seven
* entry[+].fullUrl = "http://example.org/fhir/Condition/us-ph-condition-encounter-diagnosis-diabetes"
* entry[=].resource = us-ph-condition-encounter-diagnosis-diabetes
* entry[+].fullUrl = "http://example.org/fhir/Organization/us-ph-organization-salem-medical-center"
* entry[=].resource = us-ph-organization-salem-medical-center

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-emergency-outbreak-info-eve-everywoman.fsh

Instance: us-ph-emergency-outbreak-info-eve-everywoman
InstanceOf: USPublicHealthEmergencyOutbreakInformation
Title: "US Public Health Emergency Outbreak Information - Eve Everywoman"
Description: "US Public Health Emergency Outbreak Information: Eve Everywoman example"
Usage: #example
* status = #final
* code.text = "Employee desk distance from mail sorter"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectiveDateTime = "2020-11-18T22:33:22Z"
* valueQuantity.value = 2
* valueQuantity.unit = "m"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-encounter-eve-everywoman-outpatient.fsh

Instance: us-ph-encounter-eve-everywoman-outpatient
InstanceOf: USPublicHealthEncounter
Title: "US Public Health Encounter - Eve Everywoman"
Description: "US Public Health Encounter: Eve Everywoman example"
Usage: #example
* identifier.system = "http://hospital.smarthealthit.org"
* identifier.value = "9937012"
* status = #finished
* class = $v3-ActCode#AMB "ambulatory"
* type = $cpt#99202
* type.text = "Office Visit"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* participant.type = $v3-ParticipationType#ATND "attender"
* participant.individual.reference = "PractitionerRole/us-ph-practitionerrole-henry-seven"
* participant.individual.display = "Henry Seven, MD"
* period.start = "2018-04-01T10:00:00-05:00"
* period.end = "2018-04-02T10:15:00-05:00"
* diagnosis.condition.reference = "Condition/us-ph-condition-encounter-diagnosis-diabetes"
* location.location.reference = "Location/us-ph-location-salem-medical-center"
* location.location.display = "Clinic Bldg A, Salem Medical Center, 4444 Healthcare Drive, Ann Arbor MI, 99999"
* serviceProvider.reference = "Organization/us-ph-organization-salem-medical-center"
* serviceProvider.display = "Salem Medical Center, 22222 Health Authority Drive, Ann Arbor MI, 99999"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-endpoint-pha.fsh

Instance: us-ph-endpoint-pha
InstanceOf: USPublicHealthEndpoint
Title: "US Public Health Endpoint - Public Health Agency"
Description: "US Public Health Endpoint: Public Health Agency example"
Usage: #example
* identifier.system = "http://example.pha.org/enpoint-identifier"
* identifier.value = "pha-endpoint-id"
* status = #active
* connectionType = $endpoint-connection-type#hl7-fhir-rest
* name = "PHAReceiver"
* managingOrganization.reference = "Organization/us-ph-organization-health-authority-west"
* contact.system = #email
* contact.value = "endpointmanager@example.pha.org"
* contact.use = #work
* period.start = "2020-11-20"
* payloadType = $resource-types#Bundle
* payloadMimeType[0] = #application/fhir+xml
* payloadMimeType[+] = #application/fhir+json
* address = "http://example.pha.org/fhir"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-endpoint-salem-medical-center.fsh

Instance: us-ph-endpoint-salem-medical-center
InstanceOf: USPublicHealthEndpoint
Title: "US Public Health Endpoint - Salem Medical Center"
Description: "US Public Health Endpoint: Salem Medical Center example"
Usage: #example
* status = #active
* connectionType = $endpoint-connection-type#hl7-fhir-rest
* payloadType.text = "Reportability Response"
* address = "http://example.org/salem-medical-center/fhir"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-endpoint-ymca.fsh

Instance: us-ph-endpoint-ymca
InstanceOf: USPublicHealthEndpoint
Title: "US Public Health Endpoint - YMCA"
Description: "US Public Health Endpoint: YMCA example"
Usage: #example
* status = #active
* connectionType = $endpoint-connection-type#hl7-fhir-rest
* payloadType.text = "Reportability Response"
* address = "http://example.org/ymca/fhir"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-executable-library-rule-filters.fsh

Instance: us-ph-executable-library-rule-filters
InstanceOf: Library
Title: "US Public Health Executable Library - Rule Filters - Chlamydia Example"
Description: "US Public Health Executable Library example: Rule Filters - Chlamydia"
Usage: #example
* meta.profile[0] = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-executable-library"
* meta.profile[+] = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-computable-library"
* url = "http://hl7.org/fhir/us/ph-library/Library/us-ph-executable-library-rule-filters"
* version = "1.0.0"
* name = "RuleFilters"
* title = "Rule Filters"
* status = #active
* experimental = true
* type = $library-type#logic-library
* publisher = "{site.data.fhir.ig.publisher}"
* description = "An example logic library for eRSD - Chlamydia example."
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* jurisdiction.text = "United States of America"
* relatedArtifact[0].type = #depends-on
* relatedArtifact[=].display = "FHIR model information"
* relatedArtifact[=].resource = "http://fhir.org/guides/cqf/common/Library/FHIR-ModelInfo|4.0.1"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Library FHIRHelpers"
* relatedArtifact[=].resource = "http://fhir.org/guides/cqf/common/Library/FHIRHelpers|4.0.1"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Code system LOINC"
* relatedArtifact[=].resource = "http://loinc.org"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Code system UsageContext"
* relatedArtifact[=].resource = "http://hl7.org/fhir/us/ph-library/CodeSystem/us-ph-codesystem-usage-context-type"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Code system JurisdictionsList"
* relatedArtifact[=].resource = "http://example.org/fhir/CodeSystem/us-ph-codesystem-jurisdictions-example"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set Chlamydia Laboratory Result Trigger Codes"
* relatedArtifact[=].resource = "http://example.org/fhir/ValueSet/us-ph-triggering-valueset-chlamydia-example"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set Indeterminate or Equivocal Lab Result Value"
* relatedArtifact[=].resource = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1146.1035"
* relatedArtifact[+].type = #depends-on
* relatedArtifact[=].display = "Value set Negative or Undetected Lab Result Value"
* relatedArtifact[=].resource = "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1146.1034"
* parameter[0].name = #"Triggering Encounter"
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #Encounter
* parameter[+].name = #normalReportingDuration
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #Quantity
* parameter[+].name = #Patient
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #Patient
* parameter[+].name = #"Chlamydia Test Results"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Observation
* parameter[+].name = #"Triggering Encounters"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Encounter
* parameter[+].name = #"Encounter Location References"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Reference
* parameter[+].name = #"Locations Matching Encounter Location References"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Location
* parameter[+].name = #"Encounter Location Address"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Any
* parameter[+].name = #"Patient Address"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Any
* parameter[+].name = #Jurisdictions
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Any
* parameter[+].name = #"Encounter Address Postal Code is in Jurisdiction Codes"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Any
* parameter[+].name = #"Encounter Address State is in Jurisdiction Codes"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Any
* parameter[+].name = #"Patient Address Postal Code is in Jurisdiction Codes"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Any
* parameter[+].name = #"Patient Address State is in Jurisdiction Codes"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Any
* parameter[+].name = #"Address Exists in Jurisdiction Codes"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Jurisdiction Codes Relevant to Encounter Addresses"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Any
* parameter[+].name = #"Jurisdiction Codes Relevant to Patient Addresses"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Any
* parameter[+].name = #"Indeterminate Chlamydia Test Results"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Observation
* parameter[+].name = #"Negative Chlamydia Test Results"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Observation
* parameter[+].name = #"Reportable Triggering Codes"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Coding
* parameter[+].name = #"Encounter In Context"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #Encounter
* parameter[+].name = #"Is Encounter Within Normal Reporting Duration?"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"eICR Compositions"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Composition
* parameter[+].name = #"Existing Reportable Triggering Codes"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Coding
* parameter[+].name = #"Is Encounter Reportable and Within Normal Reporting Duration?"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Is Encounter Longer Than Normal Reporting Duration?"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Is Encounter In Progress"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Is Encounter Complete"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Is Encounter In Progress and Within Normal Reporting Duration or 72h or less after end of encounter?"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Most recent eICR"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #Composition
* parameter[+].name = #"Most recent eICR sent over 72 hours ago?"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* parameter[+].name = #"Suspected Disorder Test Results"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Observation
* parameter[+].name = #"Suspected Disorders"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"
* parameter[=].type = #Any
* parameter[+].name = #"Is Suspected Disorder?"
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].type = #boolean
* dataRequirement[0].type = #Patient
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Patient"
* dataRequirement[+].type = #Composition
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Composition"
* dataRequirement[=].mustSupport = "type"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.code = $loinc#55751-2
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "reference"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[+].type = #Patient
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Patient"
* dataRequirement[=].mustSupport[0] = "postalCode"
* dataRequirement[=].mustSupport[+] = "state"
* dataRequirement[=].mustSupport[+] = "state.value"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "reference"
* dataRequirement[=].mustSupport[+] = "location"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[=].mustSupport[0] = "address.postalCode"
* dataRequirement[=].mustSupport[+] = "address"
* dataRequirement[=].mustSupport[+] = "address.state"
* dataRequirement[=].mustSupport[+] = "postalCode"
* dataRequirement[=].mustSupport[+] = "state"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[+].type = #CodeSystem
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/CodeSystem"
* dataRequirement[=].mustSupport[0] = "jurisdictionType"
* dataRequirement[=].mustSupport[+] = "postalCode"
* dataRequirement[=].mustSupport[+] = "concept"
* dataRequirement[=].mustSupport[+] = "stateCode"
* dataRequirement[+].type = #Organization
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Organization"
* dataRequirement[+].type = #Observation
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Observation"
* dataRequirement[=].mustSupport[0] = "code"
* dataRequirement[=].mustSupport[+] = "interpretation"
* dataRequirement[=].mustSupport[+] = "value"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].codeFilter.path = "code"
* dataRequirement[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/us-ph-triggering-valueset-chlamydia-example"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[=].mustSupport[0] = "address.postalCode"
* dataRequirement[=].mustSupport[+] = "address"
* dataRequirement[=].mustSupport[+] = "address.state"
* dataRequirement[=].mustSupport[+] = "postalCode"
* dataRequirement[=].mustSupport[+] = "state"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[+].type = #CodeSystem
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/CodeSystem"
* dataRequirement[=].mustSupport[0] = "jurisdictionType"
* dataRequirement[=].mustSupport[+] = "postalCode"
* dataRequirement[=].mustSupport[+] = "concept"
* dataRequirement[=].mustSupport[+] = "stateCode"
* dataRequirement[+].type = #CodeSystem
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/CodeSystem"
* dataRequirement[=].mustSupport[0] = "jurisdictionType"
* dataRequirement[=].mustSupport[+] = "postalCode"
* dataRequirement[=].mustSupport[+] = "concept"
* dataRequirement[=].mustSupport[+] = "stateCode"
* dataRequirement[+].type = #Patient
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Patient"
* dataRequirement[=].mustSupport[0] = "postalCode"
* dataRequirement[=].mustSupport[+] = "state"
* dataRequirement[=].mustSupport[+] = "state.value"
* dataRequirement[+].type = #CodeSystem
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/CodeSystem"
* dataRequirement[=].mustSupport[0] = "jurisdictionType"
* dataRequirement[=].mustSupport[+] = "postalCode"
* dataRequirement[=].mustSupport[+] = "concept"
* dataRequirement[=].mustSupport[+] = "stateCode"
* dataRequirement[+].type = #Patient
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Patient"
* dataRequirement[=].mustSupport[0] = "postalCode"
* dataRequirement[=].mustSupport[+] = "state"
* dataRequirement[=].mustSupport[+] = "state.value"
* dataRequirement[+].type = #Composition
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Composition"
* dataRequirement[=].mustSupport = "type"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.code = $loinc#55751-2
* dataRequirement[+].type = #Observation
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Observation"
* dataRequirement[=].mustSupport[0] = "value"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[+].type = #Composition
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Composition"
* dataRequirement[=].mustSupport[0] = "section"
* dataRequirement[=].mustSupport[+] = "type"
* dataRequirement[=].codeFilter.path = "type"
* dataRequirement[=].codeFilter.code = $loinc#55751-2
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[=].mustSupport[0] = "address.postalCode"
* dataRequirement[=].mustSupport[+] = "address"
* dataRequirement[=].mustSupport[+] = "address.state"
* dataRequirement[=].mustSupport[+] = "postalCode"
* dataRequirement[=].mustSupport[+] = "state"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[+].type = #Organization
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Organization"
* dataRequirement[+].type = #Observation
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Observation"
* dataRequirement[=].mustSupport[0] = "code"
* dataRequirement[=].mustSupport[+] = "interpretation"
* dataRequirement[=].mustSupport[+] = "value"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].codeFilter.path = "code"
* dataRequirement[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/us-ph-triggering-valueset-chlamydia-example"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "period"
* dataRequirement[=].mustSupport[+] = "end"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[=].mustSupport[0] = "period"
* dataRequirement[=].mustSupport[+] = "end"
* dataRequirement[+].type = #Location
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Location"
* dataRequirement[=].mustSupport[0] = "address.postalCode"
* dataRequirement[=].mustSupport[+] = "address"
* dataRequirement[=].mustSupport[+] = "address.state"
* dataRequirement[=].mustSupport[+] = "postalCode"
* dataRequirement[=].mustSupport[+] = "state"
* dataRequirement[=].mustSupport[+] = "id"
* dataRequirement[+].type = #Encounter
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Encounter"
* dataRequirement[+].type = #CodeSystem
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/CodeSystem"
* dataRequirement[=].mustSupport[0] = "jurisdictionType"
* dataRequirement[=].mustSupport[+] = "postalCode"
* dataRequirement[=].mustSupport[+] = "concept"
* dataRequirement[=].mustSupport[+] = "stateCode"
* dataRequirement[+].type = #Observation
* dataRequirement[=].profile = "http://hl7.org/fhir/StructureDefinition/Observation"
* dataRequirement[=].mustSupport[0] = "code"
* dataRequirement[=].mustSupport[+] = "interpretation"
* dataRequirement[=].mustSupport[+] = "value"
* dataRequirement[=].mustSupport[+] = "status"
* dataRequirement[=].codeFilter.path = "code"
* dataRequirement[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/us-ph-triggering-valueset-chlamydia-example"
* content[0].contentType = #text/cql
* content[=].data = "bGlicmFyeSBSdWxlRmlsdGVycyB2ZXJzaW9uICcxLjAuMCcKCnVzaW5nIEZISVIgdmVyc2lvbiAnNC4wLjEnCgppbmNsdWRlIEZISVJIZWxwZXJzIHZlcnNpb24gJzQuMC4xJwoKY29kZXN5c3RlbSAiTE9JTkMiOiAnaHR0cDovL2xvaW5jLm9yZycKY29kZXN5c3RlbSAiVXNhZ2VDb250ZXh0IjogJ2h0dHA6Ly9obDcub3JnL2ZoaXIvdXMvZWNyL0NvZGVTeXN0ZW0vdXMtcGgtdXNhZ2UtY29udGV4dC10eXBlJwpjb2Rlc3lzdGVtICJKdXJpc2RpY3Rpb25zTGlzdCI6ICdodHRwOi8vZXhhbXBsZS5vcmcvZmhpci9Db2RlU3lzdGVtL2Vyc2QtanVyaXNkaWN0aW9ucy1leGFtcGxlJwoKLy8gT3ZlcmFsbCB0cmlnZ2VyaW5nIHZhbHVlIHNldHMsIGdyb3VwaW5ncyBvZiBhbGwgY29uZGl0aW9uLXNwZWNpZmljIHZhbHVlIHNldHMsIGdyb3VwZWQgYnkgcmVwcmVzZW50YXRpb24gaW4gdGhlIGluZm9ybWF0aW9uIG1vZGVsCnZhbHVlc2V0ICJEaWFnbm9zaXMgVHJpZ2dlciBDb2RlcyI6ICdodHRwOi8vZXhhbXBsZS5vcmcvZmhpci9WYWx1ZVNldC92YWx1ZXNldC1keHRjLWV4YW1wbGUnCnZhbHVlc2V0ICJNZWRpY2F0aW9uIFRyaWdnZXIgQ29kZXMiOiAnaHR0cDovL2V4YW1wbGUub3JnL2ZoaXIvVmFsdWVTZXQvdmFsdWVzZXQtbXJ0Yy1leGFtcGxlJwp2YWx1ZXNldCAiTGFib3JhdG9yeSBPcmRlciBUcmlnZ2VyIENvZGVzIjogJ2h0dHA6Ly9leGFtcGxlLm9yZy9maGlyL1ZhbHVlU2V0L3ZhbHVlc2V0LWxvdGMtZXhhbXBsZScKdmFsdWVzZXQgIkxhYm9yYXRvcnkgUmVzdWx0IFRyaWdnZXIgQ29kZXMiOiAnaHR0cDovL2V4YW1wbGUub3JnL2ZoaXIvVmFsdWVTZXQvdmFsdWVzZXQtbHJ0Yy1leGFtcGxlJwp2YWx1ZXNldCAiT3JnYW5pc20gU3Vic3RhbmNlIFRyaWdnZXIgQ29kZXMiOiAnaHR0cDovL2V4YW1wbGUub3JnL2ZoaXIvVmFsdWVTZXQvdmFsdWVzZXQtb3N0Yy1leGFtcGxlJwp2YWx1ZXNldCAiUHJvY2VkdXJlIFRyaWdnZXIgQ29kZXMiOiAnaHR0cDovL2V4YW1wbGUub3JnL2ZoaXIvVmFsdWVTZXQvdmFsdWVzZXQtcGN0Yy1leGFtcGxlJwp2YWx1ZXNldCAiU3VzcGVjdGVkIERpc29yZGVyIFRyaWdnZXIgQ29kZXMiOiAnaHR0cDovL2V4YW1wbGUub3JnL2ZoaXIvVmFsdWVTZXQvdmFsdWVzZXQtc2R0Yy1leGFtcGxlJwoKLy8gQ29uZGl0aW9uLXNwZWNpZmljIHRyaWdnZXJpbmcgY29kZXMsIHRoZXNlIHdvdWxkIGJlIGxpc3RlZCBmb3IgZWFjaCBjb25kaXRpb24KdmFsdWVzZXQgIkNobGFteWRpYSBMYWJvcmF0b3J5IFJlc3VsdCBUcmlnZ2VyIENvZGVzIjogJ2h0dHA6Ly9leGFtcGxlLm9yZy9maGlyL1ZhbHVlU2V0L3ZhbHVlc2V0LWNobGFteWRpYS1leGFtcGxlJwoKLy8gU3VwcGxlbWVudGFsIChvciBvcGVyYXRpb25hbCkgdmFsdWUgc2V0cyB1c2VkIGluIHN1c3BlY3RlZCByZXBvcnRhYmlsaXR5IGRldGVybWluYXRpb24gbG9naWMKdmFsdWVzZXQgIkluZGV0ZXJtaW5hdGUgb3IgRXF1aXZvY2FsIExhYiBSZXN1bHQgVmFsdWUiOiAnaHR0cDovL2N0cy5ubG0ubmloLmdvdi9maGlyL1ZhbHVlU2V0LzIuMTYuODQwLjEuMTEzNzYyLjEuNC4xMTQ2LjEwMzUnCnZhbHVlc2V0ICJOZWdhdGl2ZSBvciBVbmRldGVjdGVkIExhYiBSZXN1bHQgVmFsdWUiOiAnaHR0cDovL2N0cy5ubG0ubmloLmdvdi9maGlyL1ZhbHVlU2V0LzIuMTYuODQwLjEuMTEzNzYyLjEuNC4xMTQ2LjEwMzQnCgpjb2RlICJlSUNSQ29tcG9zaXRpb24iOiAnNTU3NTEtMicgZnJvbSAiTE9JTkMiCgpwYXJhbWV0ZXIgIlRyaWdnZXJpbmcgRW5jb3VudGVyIiBFbmNvdW50ZXIKcGFyYW1ldGVyICJub3JtYWxSZXBvcnRpbmdEdXJhdGlvbiIgZGVmYXVsdCAxNCBkYXlzCgpjb250ZXh0IFBhdGllbnQKCmRlZmluZSAiQ2hsYW15ZGlhIFRlc3QgUmVzdWx0cyI6CiAgW09ic2VydmF0aW9uOiAiQ2hsYW15ZGlhIExhYm9yYXRvcnkgUmVzdWx0IFRyaWdnZXIgQ29kZXMiXSBPCiAgICB3aGVyZSBPLnN0YXR1cyBpbiB7ICdyZWdpc3RlcmVkJywgJ3ByZWxpbWluYXJ5JywgJ2ZpbmFsJywgJ2FtZW5kZWQnLCAnY29ycmVjdGVkJyB9CgpkZWZpbmUgIlRyaWdnZXJpbmcgRW5jb3VudGVycyI6CiAgW0VuY291bnRlcl0gRQoKZGVmaW5lICJFbmNvdW50ZXIgTG9jYXRpb24gUmVmZXJlbmNlcyI6CiAgZmxhdHRlbigiVHJpZ2dlcmluZyBFbmNvdW50ZXJzIiBUcmlnZ2VyaW5nRW5jb3VudGVyCiAgICByZXR1cm4gVHJpZ2dlcmluZ0VuY291bnRlci5sb2NhdGlvbi5sb2NhdGlvbikKCmRlZmluZSAiTG9jYXRpb25zIE1hdGNoaW5nIEVuY291bnRlciBMb2NhdGlvbiBSZWZlcmVuY2VzIjoKICBbTG9jYXRpb25dIExvY2F0aW9uCiAgICB3aGVyZSBleGlzdHMgKAogICAgICAgICJFbmNvdW50ZXIgTG9jYXRpb24gUmVmZXJlbmNlcyIgTG9jYXRpb25SZWZlcmVuY2UKICAgICAgICAgIHdoZXJlICgnTG9jYXRpb24vJyArIExvY2F0aW9uLmlkKSB+IExvY2F0aW9uUmVmZXJlbmNlLnJlZmVyZW5jZQogICAgICApCgpkZWZpbmUgIkVuY291bnRlciBMb2NhdGlvbiBBZGRyZXNzIjoKICAiTG9jYXRpb25zIE1hdGNoaW5nIEVuY291bnRlciBMb2NhdGlvbiBSZWZlcmVuY2VzIiBBZGRyZXNzCiAgICByZXR1cm4gVHVwbGUgeyBzdGF0ZTogQWRkcmVzcy5hZGRyZXNzLnN0YXRlLCAgcG9zdGFsQ29kZTogQWRkcmVzcy5hZGRyZXNzLnBvc3RhbENvZGUgfQoKZGVmaW5lICJQYXRpZW50IEFkZHJlc3MiOgogIFBhdGllbnQuYWRkcmVzcyBQQQogIHJldHVybiBUdXBsZSB7IHN0YXRlOiBQQS5zdGF0ZSwgcG9zdGFsQ29kZTogUEEucG9zdGFsQ29kZSB9CgpkZWZpbmUgIkp1cmlzZGljdGlvbnMiOgogIGZsYXR0ZW4oW0NvZGVTeXN0ZW1dIEMKICAgIHJldHVybiBDLmNvbmNlcHQgQ3B0CiAgICAgIHJldHVybiBUdXBsZSB7IGp1cmlzZGljdGlvbkNvZGU6IENwdC5jb2RlLAogICAgICAgIGRlZmluaXRpb246IENwdC5kZWZpbml0aW9uLAogICAgICAgIGp1cmlzZGljdGlvblR5cGU6IENwdC5wcm9wZXJ0eSBQIHdoZXJlIFAuY29kZT0ndHlwZScgcmV0dXJuIFAudmFsdWUgYXMgRkhJUi5zdHJpbmcsCiAgICAgICAgc3RhdGVDb2RlOiBDcHQucHJvcGVydHkgUCB3aGVyZSBQLmNvZGUgPSAnc3RhdGUnIHJldHVybiBQLnZhbHVlIGFzIEZISVIuY29kZSwKICAgICAgICBwb3N0YWxDb2RlOiBDcHQucHJvcGVydHkgUCB3aGVyZSBQLmNvZGUgPSAncG9zdGFsY29kZScgcmV0dXJuIFAudmFsdWUgYXMgRkhJUi5jb2RlCiAgICAgICAgfSkKCmRlZmluZSAiRW5jb3VudGVyIEFkZHJlc3MgUG9zdGFsIENvZGUgaXMgaW4gSnVyaXNkaWN0aW9uIENvZGVzIjoKICAiSnVyaXNkaWN0aW9ucyIgSgogICAgd2l0aCAiRW5jb3VudGVyIExvY2F0aW9uIEFkZHJlc3MiIExvY2F0aW9uQWRkcmVzcwogICAgICBzdWNoIHRoYXQgTG9jYXRpb25BZGRyZXNzLnBvc3RhbENvZGUgaW4gSi5wb3N0YWxDb2RlCgpkZWZpbmUgIkVuY291bnRlciBBZGRyZXNzIFN0YXRlIGlzIGluIEp1cmlzZGljdGlvbiBDb2RlcyI6CiAgICAiSnVyaXNkaWN0aW9ucyIgSgogICAgICB3aXRoICJFbmNvdW50ZXIgTG9jYXRpb24gQWRkcmVzcyIgTG9jYXRpb25BZGRyZXNzCiAgICAgICAgc3VjaCB0aGF0IExvY2F0aW9uQWRkcmVzcy5zdGF0ZSBpbiBKLnN0YXRlQ29kZQogICAgICAgICAgYW5kICdTVEFURScgaW4gSi5qdXJpc2RpY3Rpb25UeXBlCgpkZWZpbmUgIlBhdGllbnQgQWRkcmVzcyBQb3N0YWwgQ29kZSBpcyBpbiBKdXJpc2RpY3Rpb24gQ29kZXMiOgogICJKdXJpc2RpY3Rpb25zIiBKCiAgICB3aXRoICJQYXRpZW50IEFkZHJlc3MiIFBBCiAgICAgIHN1Y2ggdGhhdCBQQS5wb3N0YWxDb2RlIGluIEoucG9zdGFsQ29kZQoKZGVmaW5lICJQYXRpZW50IEFkZHJlc3MgU3RhdGUgaXMgaW4gSnVyaXNkaWN0aW9uIENvZGVzIjoKIkp1cmlzZGljdGlvbnMiIEoKICB3aXRoICJQYXRpZW50IEFkZHJlc3MiIFBBCiAgICBzdWNoIHRoYXQgKFBBLnN0YXRlLnZhbHVlIGluIEouc3RhdGVDb2RlCiAgICAgIGFuZCAnU1RBVEUnIGluIEouanVyaXNkaWN0aW9uVHlwZSkKCmRlZmluZSAiQWRkcmVzcyBFeGlzdHMgaW4gSnVyaXNkaWN0aW9uIENvZGVzIjoKICBleGlzdHMgKAogICAgIkVuY291bnRlciBBZGRyZXNzIFN0YXRlIGlzIGluIEp1cmlzZGljdGlvbiBDb2RlcyIKICAgICAgdW5pb24gIkVuY291bnRlciBBZGRyZXNzIFBvc3RhbCBDb2RlIGlzIGluIEp1cmlzZGljdGlvbiBDb2RlcyIKICAgICAgICB1bmlvbiAiUGF0aWVudCBBZGRyZXNzIFN0YXRlIGlzIGluIEp1cmlzZGljdGlvbiBDb2RlcyIKICAgICAgICAgIHVuaW9uICJQYXRpZW50IEFkZHJlc3MgUG9zdGFsIENvZGUgaXMgaW4gSnVyaXNkaWN0aW9uIENvZGVzIgogICAgKQoKZGVmaW5lIGZ1bmN0aW9uIEVuY291bnRlckFkZHJlc3NKdXJpc2RpY3Rpb25zKCk6CiAgaWYgZXhpc3RzICgiRW5jb3VudGVyIEFkZHJlc3MgUG9zdGFsIENvZGUgaXMgaW4gSnVyaXNkaWN0aW9uIENvZGVzIikKICAgIHRoZW4gIkVuY291bnRlciBBZGRyZXNzIFBvc3RhbCBDb2RlIGlzIGluIEp1cmlzZGljdGlvbiBDb2RlcyIKICAgICAgZWxzZSAiRW5jb3VudGVyIEFkZHJlc3MgU3RhdGUgaXMgaW4gSnVyaXNkaWN0aW9uIENvZGVzIgoKZGVmaW5lIGZ1bmN0aW9uIFBhdGllbnRBZGRyZXNzSnVyaXNkaWN0aW9ucygpOgogIGlmIGV4aXN0cyAoIlBhdGllbnQgQWRkcmVzcyBQb3N0YWwgQ29kZSBpcyBpbiBKdXJpc2RpY3Rpb24gQ29kZXMiKQogICAgdGhlbiAiUGF0aWVudCBBZGRyZXNzIFBvc3RhbCBDb2RlIGlzIGluIEp1cmlzZGljdGlvbiBDb2RlcyIKICAgICAgZWxzZSAiUGF0aWVudCBBZGRyZXNzIFN0YXRlIGlzIGluIEp1cmlzZGljdGlvbiBDb2RlcyIKCmRlZmluZSAiSnVyaXNkaWN0aW9uIENvZGVzIFJlbGV2YW50IHRvIEVuY291bnRlciBBZGRyZXNzZXMiOgogIEVuY291bnRlckFkZHJlc3NKdXJpc2RpY3Rpb25zKCkKCmRlZmluZSAiSnVyaXNkaWN0aW9uIENvZGVzIFJlbGV2YW50IHRvIFBhdGllbnQgQWRkcmVzc2VzIjoKICBQYXRpZW50QWRkcmVzc0p1cmlzZGljdGlvbnMoKQoKZGVmaW5lICJJbmRldGVybWluYXRlIENobGFteWRpYSBUZXN0IFJlc3VsdHMiOgogICJDaGxhbXlkaWEgVGVzdCBSZXN1bHRzIiBPCiAgICBsZXQgb3JnYW5pemF0aW9uOiBbT3JnYW5pemF0aW9uXQogICAgd2hlcmUgKAogICAgICAoCiAgICAgICAgZXhpc3RzICgKICAgICAgICAgICAgTy5pbnRlcnByZXRhdGlvbiBpbnRlcnByZXRhdGlvbkNvbmNlcHQKICAgICAgICAgICAgICB3aGVyZSBpbnRlcnByZXRhdGlvbkNvbmNlcHQgYXMgQ29kZWFibGVDb25jZXB0IGluICJJbmRldGVybWluYXRlIG9yIEVxdWl2b2NhbCBMYWIgUmVzdWx0IFZhbHVlIgogICAgICAgICkKICAgICAgICAgIG9yIE8udmFsdWUgYXMgQ29kZWFibGVDb25jZXB0IGluICJJbmRldGVybWluYXRlIG9yIEVxdWl2b2NhbCBMYWIgUmVzdWx0IFZhbHVlIgogICAgICApCiAgICAgICAgYW5kICJBZGRyZXNzIEV4aXN0cyBpbiBKdXJpc2RpY3Rpb24gQ29kZXMiCiAgICApCgpkZWZpbmUgIk5lZ2F0aXZlIENobGFteWRpYSBUZXN0IFJlc3VsdHMiOgogICJDaGxhbXlkaWEgVGVzdCBSZXN1bHRzIiBPCiAgICBsZXQgb3JnYW5pemF0aW9uOiBbT3JnYW5pemF0aW9uXQogICAgd2hlcmUgKAogICAgICAoCiAgICAgICAgZXhpc3RzICgKICAgICAgICAgICAgTy5pbnRlcnByZXRhdGlvbiBpbnRlcnByZXRhdGlvbkNvbmNlcHQKICAgICAgICAgICAgICB3aGVyZSBpbnRlcnByZXRhdGlvbkNvbmNlcHQgYXMgQ29kZWFibGVDb25jZXB0IGluICJOZWdhdGl2ZSBvciBVbmRldGVjdGVkIExhYiBSZXN1bHQgVmFsdWUiCiAgICAgICAgKQogICAgICAgICAgb3IgTy52YWx1ZSBhcyBDb2RlYWJsZUNvbmNlcHQgaW4gIk5lZ2F0aXZlIG9yIFVuZGV0ZWN0ZWQgTGFiIFJlc3VsdCBWYWx1ZSIKICAgICAgKQogICAgICAgIGFuZCAiQWRkcmVzcyBFeGlzdHMgaW4gSnVyaXNkaWN0aW9uIENvZGVzIgogICAgKQoKZGVmaW5lICJSZXBvcnRhYmxlIFRyaWdnZXJpbmcgQ29kZXMiOgogIGZsYXR0ZW4gKCJJbmRldGVybWluYXRlIENobGFteWRpYSBUZXN0IFJlc3VsdHMiIE8gcmV0dXJuIE8uY29kZS5jb2RpbmcpCiAgICB1bmlvbiBmbGF0dGVuICgiTmVnYXRpdmUgQ2hsYW15ZGlhIFRlc3QgUmVzdWx0cyIgTyByZXR1cm4gTy5jb2RlLmNvZGluZykKICAgIC8vIC4uLiByZXBvcnRhYmxlIHRyaWdnZXJpbmcgY29kZXMgZm9yIG90aGVyIGNvbmRpdGlvbnMKCmRlZmluZSAiSXMgRW5jb3VudGVyIFdpdGhpbiBOb3JtYWwgUmVwb3J0aW5nIER1cmF0aW9uPyI6CiAgIkN1cnJlbnQgRW5jb3VudGVyIER1cmF0aW9uIigiRW5jb3VudGVyIEluIENvbnRleHQiKSA8PSAibm9ybWFsUmVwb3J0aW5nRHVyYXRpb24iCgpkZWZpbmUgIklzIEVuY291bnRlciBSZXBvcnRhYmxlIGFuZCBXaXRoaW4gTm9ybWFsIFJlcG9ydGluZyBEdXJhdGlvbj8iOgogIGV4aXN0cyAoCiAgICAiUmVwb3J0YWJsZSBUcmlnZ2VyaW5nIENvZGVzIgogICAgICBleGNlcHQgIkV4aXN0aW5nIFJlcG9ydGFibGUgVHJpZ2dlcmluZyBDb2RlcyIKICApCiAgICBhbmQgIklzIEVuY291bnRlciBXaXRoaW4gTm9ybWFsIFJlcG9ydGluZyBEdXJhdGlvbj8iCgpkZWZpbmUgIkV4aXN0aW5nIFJlcG9ydGFibGUgVHJpZ2dlcmluZyBDb2RlcyI6CiAgZmxhdHRlbiAoCiAgICAiZUlDUiBDb21wb3NpdGlvbnMiIEMKICAgICAgcmV0dXJuCiAgICAgICAgQy5zZWN0aW9uLmVudHJ5LmV4dGVuc2lvbiBFCiAgICAgICAgICB3aGVyZSBFLnVybCA9ICdodHRwOi8vaGw3Lm9yZy9maGlyL3VzL2Vjci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2VpY3ItdHJpZ2dlci1jb2RlLWZsYWctZXh0ZW5zaW9uJwogICAgICAgICAgICByZXR1cm4gKHNpbmdsZXRvbiBmcm9tIChFLmV4dGVuc2lvbiBTRSB3aGVyZSBTRS51cmwgPSAndHJpZ2dlckNvZGUnKSkudmFsdWUgYXMgQ29kaW5nCiAgKQoKZGVmaW5lIGZ1bmN0aW9uICJDdXJyZW50IEVuY291bnRlciBEdXJhdGlvbiIoZW5jb3VudGVyIEVuY291bnRlcik6CiAgUXVhbnRpdHkgewogICAgdmFsdWU6IGRlY2ltYWwgewogICAgICB2YWx1ZTogZHVyYXRpb24gaW4gZGF5cyBiZXR3ZWVuIGVuY291bnRlci5wZXJpb2Quc3RhcnQgYW5kIENvYWxlc2NlKGVuY291bnRlci5wZXJpb2QuZW5kLnZhbHVlLCBOb3coKSkKICAgIH0sCiAgICB1bml0OiBzdHJpbmcgeyB2YWx1ZTogJ2RheXMnIH0KICB9CgpkZWZpbmUgIkVuY291bnRlciBJbiBDb250ZXh0IjoKICBpZiAiVHJpZ2dlcmluZyBFbmNvdW50ZXIiIGlzIG5vdCBudWxsCiAgICB0aGVuICJUcmlnZ2VyaW5nIEVuY291bnRlciIKICAgICAgZWxzZSBzaW5nbGV0b24gZnJvbSAiVHJpZ2dlcmluZyBFbmNvdW50ZXJzIgoKZGVmaW5lICJJcyBFbmNvdW50ZXIgTG9uZ2VyIFRoYW4gTm9ybWFsIFJlcG9ydGluZyBEdXJhdGlvbj8iOgogICJDdXJyZW50IEVuY291bnRlciBEdXJhdGlvbiIoIkVuY291bnRlciBJbiBDb250ZXh0IikgPiAibm9ybWFsUmVwb3J0aW5nRHVyYXRpb24iCgpkZWZpbmUgIklzIEVuY291bnRlciBJbiBQcm9ncmVzcyI6CiAgIkVuY291bnRlciBJbiBDb250ZXh0Ii5zdGF0dXMgfiAnaW4tcHJvZ3Jlc3MnCgpkZWZpbmUgIklzIEVuY291bnRlciBDb21wbGV0ZSI6CiAgIkVuY291bnRlciBJbiBDb250ZXh0Ii5zdGF0dXMgfiAnZmluaXNoZWQnCgpkZWZpbmUgIklzIEVuY291bnRlciBJbiBQcm9ncmVzcyBhbmQgV2l0aGluIE5vcm1hbCBSZXBvcnRpbmcgRHVyYXRpb24gb3IgNzJoIG9yIGxlc3MgYWZ0ZXIgZW5kIG9mIGVuY291bnRlcj8iOgogICgKICAgICJJcyBFbmNvdW50ZXIgSW4gUHJvZ3Jlc3MiCiAgICAgIGFuZCAiSXMgRW5jb3VudGVyIFdpdGhpbiBOb3JtYWwgUmVwb3J0aW5nIER1cmF0aW9uPyIKICApCiAgICBvciAobm90IElzTnVsbCgiVHJpZ2dlcmluZyBFbmNvdW50ZXIiKSBhbmQgIlRyaWdnZXJpbmcgRW5jb3VudGVyIi5wZXJpb2QuZW5kIDcyIGhvdXJzIG9yIGxlc3MgYmVmb3JlIE5vdygpKQogICAgb3IgKGV4aXN0cyAoIlRyaWdnZXJpbmcgRW5jb3VudGVycyIpIGFuZCBzaW5nbGV0b24gZnJvbSAiVHJpZ2dlcmluZyBFbmNvdW50ZXJzIi5wZXJpb2QuZW5kIDcyIGhvdXJzIG9yIGxlc3MgYmVmb3JlIE5vdygpKQoKZGVmaW5lICJlSUNSIENvbXBvc2l0aW9ucyI6CiAgW0NvbXBvc2l0aW9uIDogImVJQ1JDb21wb3NpdGlvbiJdCgpkZWZpbmUgIk1vc3QgcmVjZW50IGVJQ1Igc2VudCBvdmVyIDcyIGhvdXJzIGFnbz8iOgogIGlmICJNb3N0IHJlY2VudCBlSUNSIiBpcyBub3QgbnVsbAogICAgdGhlbiAiTW9zdCByZWNlbnQgZUlDUiIuZGF0ZSA3MiBob3VycyBvciBtb3JlIGJlZm9yZSBOb3coKQogICAgZWxzZSBmYWxzZQoKZGVmaW5lICJNb3N0IHJlY2VudCBlSUNSIjoKICBGaXJzdCAoCiAgICAiZUlDUiBDb21wb3NpdGlvbnMiIGVJQ1JzCiAgICAgIHNvcnQgYnkgZGF0ZSBkZXNjCiAgKQoKZGVmaW5lICJTdXNwZWN0ZWQgRGlzb3JkZXIgVGVzdCBSZXN1bHRzIjoKICBbT2JzZXJ2YXRpb25dIE8KICAgIHdoZXJlIE8uc3RhdHVzIGluIHsgJ3JlZ2lzdGVyZWQnLCAncHJlbGltaW5hcnknLCAnZmluYWwnLCAnYW1lbmRlZCcsICdjb3JyZWN0ZWQnIH0KICAgICAgYW5kIE8udmFsdWUgYXMgQ29kZWFibGVDb25jZXB0IGluICJTdXNwZWN0ZWQgRGlzb3JkZXIgVHJpZ2dlciBDb2RlcyIKCmRlZmluZSAiU3VzcGVjdGVkIERpc29yZGVycyI6CiAgW0NvbmRpdGlvbjogIlN1c3BlY3RlZCBEaXNvcmRlciBUcmlnZ2VyIENvZGVzIl0KICAgIHVuaW9uIFtNZWRpY2F0aW9uUmVxdWVzdDogIlN1c3BlY3RlZCBEaXNvcmRlciBUcmlnZ2VyIENvZGVzIl0KICAgIHVuaW9uICJTdXNwZWN0ZWQgRGlzb3JkZXIgVGVzdCBSZXN1bHRzIgoKZGVmaW5lICJJcyBTdXNwZWN0ZWQgRGlzb3JkZXI/IjoKICBleGlzdHMgKAogICAgIlN1c3BlY3RlZCBEaXNvcmRlcnMiCiAgKQo="
* content[+].contentType = #application/elm+xml
* content[=].data = "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPGxpYnJhcnkgeG1sbnM9InVybjpobDctb3JnOmVsbTpyMSIgeG1sbnM6dD0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4bWxuczp4c2Q9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczpmaGlyPSJodHRwOi8vaGw3Lm9yZy9maGlyIiB4bWxuczpxZG00Mz0idXJuOmhlYWx0aGl0LWdvdjpxZG06djRfMyIgeG1sbnM6cWRtNTM9InVybjpoZWFsdGhpdC1nb3Y6cWRtOnY1XzMiIHhtbG5zOmE9InVybjpobDctb3JnOmNxbC1hbm5vdGF0aW9uczpyMSI+CiAgIDxhbm5vdGF0aW9uIHRyYW5zbGF0b3JWZXJzaW9uPSIxLjQiIHRyYW5zbGF0b3JPcHRpb25zPSJFbmFibGVBbm5vdGF0aW9ucyxFbmFibGVMb2NhdG9ycyxEaXNhYmxlTGlzdERlbW90aW9uLERpc2FibGVMaXN0UHJvbW90aW9uIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUluZm8iLz4KICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgIDxhOnMgcj0iNDM4Ij4KICAgICAgICAgPGE6cz5saWJyYXJ5IFJ1bGVGaWx0ZXJzIHZlcnNpb24gJzEuMC4wJzwvYTpzPgogICAgICA8L2E6cz4KICAgPC9hbm5vdGF0aW9uPgogICA8aWRlbnRpZmllciBpZD0iUnVsZUZpbHRlcnMiIHN5c3RlbT0iaHR0cDovL2hsNy5vcmcvZmhpci91cy9lY3IiIHZlcnNpb249IjEuMC4wIi8+CiAgIDxzY2hlbWFJZGVudGlmaWVyIGlkPSJ1cm46aGw3LW9yZzplbG0iIHZlcnNpb249InIxIi8+CiAgIDx1c2luZ3M+CiAgICAgIDxkZWYgbG9jYWxJZGVudGlmaWVyPSJTeXN0ZW0iIHVyaT0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIi8+CiAgICAgIDxkZWYgbG9jYWxJZD0iMSIgbG9jYXRvcj0iMzoxLTM6MjYiIGxvY2FsSWRlbnRpZmllcj0iRkhJUiIgdXJpPSJodHRwOi8vaGw3Lm9yZy9maGlyIiB2ZXJzaW9uPSI0LjAuMSI+CiAgICAgICAgIDxhbm5vdGF0aW9uIHhzaTp0eXBlPSJhOkFubm90YXRpb24iPgogICAgICAgICAgICA8YTpzIHI9IjEiPgogICAgICAgICAgICAgICA8YTpzPnVzaW5nIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICA8YTpzPkZISVI8L2E6cz4KICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnM+IHZlcnNpb24gJzQuMC4xJzwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICA8L2RlZj4KICAgPC91c2luZ3M+CiAgIDxpbmNsdWRlcz4KICAgICAgPGRlZiBsb2NhbElkPSIyIiBsb2NhdG9yPSI1OjEtNTozNSIgbG9jYWxJZGVudGlmaWVyPSJGSElSSGVscGVycyIgcGF0aD0iaHR0cDovL2hsNy5vcmcvZmhpci9GSElSSGVscGVycyIgdmVyc2lvbj0iNC4wLjEiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSIyIj4KICAgICAgICAgICAgICAgPGE6cz5pbmNsdWRlIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICA8YTpzPkZISVJIZWxwZXJzPC9hOnM+CiAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzPiB2ZXJzaW9uICc0LjAuMSc8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgPC9kZWY+CiAgIDwvaW5jbHVkZXM+CiAgIDxwYXJhbWV0ZXJzPgogICAgICA8ZGVmIGxvY2FsSWQ9IjE5IiBsb2NhdG9yPSIyOToxLTI5OjQyIiBuYW1lPSJUcmlnZ2VyaW5nIEVuY291bnRlciIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxhbm5vdGF0aW9uIHhzaTp0eXBlPSJhOkFubm90YXRpb24iPgogICAgICAgICAgICA8YTpzIHI9IjE5Ij4KICAgICAgICAgICAgICAgPGE6cz5wYXJhbWV0ZXIgJnF1b3Q7VHJpZ2dlcmluZyBFbmNvdW50ZXImcXVvdDsgPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iMTgiPgogICAgICAgICAgICAgICAgICA8YTpzPkVuY291bnRlcjwvYTpzPgogICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgICAgPHBhcmFtZXRlclR5cGVTcGVjaWZpZXIgbG9jYWxJZD0iMTgiIGxvY2F0b3I9IjI5OjM0LTI5OjQyIiBuYW1lPSJmaGlyOkVuY291bnRlciIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSIyMSIgbG9jYXRvcj0iMzA6MS0zMDo1MSIgbmFtZT0ibm9ybWFsUmVwb3J0aW5nRHVyYXRpb24iIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSIyMSI+CiAgICAgICAgICAgICAgIDxhOnM+cGFyYW1ldGVyICZxdW90O25vcm1hbFJlcG9ydGluZ0R1cmF0aW9uJnF1b3Q7IGRlZmF1bHQgPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iMjAiPgogICAgICAgICAgICAgICAgICA8YTpzPjE0IGRheXM8L2E6cz4KICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgIDwvYTpzPgogICAgICAgICA8L2Fubm90YXRpb24+CiAgICAgICAgIDxkZWZhdWx0IGxvY2FsSWQ9IjIwIiBsb2NhdG9yPSIzMDo0NS0zMDo1MSIgdmFsdWU9IjE0IiB1bml0PSJkYXlzIiB4c2k6dHlwZT0iUXVhbnRpdHkiLz4KICAgICAgPC9kZWY+CiAgIDwvcGFyYW1ldGVycz4KICAgPGNvZGVTeXN0ZW1zPgogICAgICA8ZGVmIGxvY2FsSWQ9IjMiIGxvY2F0b3I9Ijc6MS03OjM4IiBuYW1lPSJMT0lOQyIgaWQ9Imh0dHA6Ly9sb2luYy5vcmciIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSIzIj4KICAgICAgICAgICAgICAgPGE6cz5jb2Rlc3lzdGVtICZxdW90O0xPSU5DJnF1b3Q7OiAnaHR0cDovL2xvaW5jLm9yZyc8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iNCIgbG9jYXRvcj0iODoxLTg6OTEiIG5hbWU9IlVzYWdlQ29udGV4dCIgaWQ9Imh0dHA6Ly9obDcub3JnL2ZoaXIvdXMvZWNyL0NvZGVTeXN0ZW0vdXMtcGgtdXNhZ2UtY29udGV4dC10eXBlIiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iNCI+CiAgICAgICAgICAgICAgIDxhOnM+Y29kZXN5c3RlbSAmcXVvdDtVc2FnZUNvbnRleHQmcXVvdDs6ICdodHRwOi8vaGw3Lm9yZy9maGlyL3VzL2Vjci9Db2RlU3lzdGVtL3VzLXBoLXVzYWdlLWNvbnRleHQtdHlwZSc8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iNSIgbG9jYXRvcj0iOToxLTk6OTUiIG5hbWU9Ikp1cmlzZGljdGlvbnNMaXN0IiBpZD0iaHR0cDovL2V4YW1wbGUub3JnL2ZoaXIvQ29kZVN5c3RlbS9lcnNkLWp1cmlzZGljdGlvbnMtZXhhbXBsZSIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxhbm5vdGF0aW9uIHhzaTp0eXBlPSJhOkFubm90YXRpb24iPgogICAgICAgICAgICA8YTpzIHI9IjUiPgogICAgICAgICAgICAgICA8YTpzPmNvZGVzeXN0ZW0gJnF1b3Q7SnVyaXNkaWN0aW9uc0xpc3QmcXVvdDs6ICdodHRwOi8vZXhhbXBsZS5vcmcvZmhpci9Db2RlU3lzdGVtL2Vyc2QtanVyaXNkaWN0aW9ucy1leGFtcGxlJzwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICA8L2RlZj4KICAgPC9jb2RlU3lzdGVtcz4KICAgPHZhbHVlU2V0cz4KICAgICAgPGRlZiBsb2NhbElkPSI2IiBsb2NhdG9yPSIxMjoxLTEyOjkyIiBuYW1lPSJEaWFnbm9zaXMgVHJpZ2dlciBDb2RlcyIgaWQ9Imh0dHA6Ly9leGFtcGxlLm9yZy9maGlyL1ZhbHVlU2V0L3ZhbHVlc2V0LWR4dGMtZXhhbXBsZSIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxhbm5vdGF0aW9uIHhzaTp0eXBlPSJhOkFubm90YXRpb24iPgogICAgICAgICAgICA8YTpzIHI9IjYiPgogICAgICAgICAgICAgICA8YTpzPi8vIE92ZXJhbGwgdHJpZ2dlcmluZyB2YWx1ZSBzZXRzLCBncm91cGluZ3Mgb2YgYWxsIGNvbmRpdGlvbi1zcGVjaWZpYyB2YWx1ZSBzZXRzLCBncm91cGVkIGJ5IHJlcHJlc2VudGF0aW9uIGluIHRoZSBpbmZvcm1hdGlvbiBtb2RlbAp2YWx1ZXNldCAmcXVvdDtEaWFnbm9zaXMgVHJpZ2dlciBDb2RlcyZxdW90OzogJ2h0dHA6Ly9leGFtcGxlLm9yZy9maGlyL1ZhbHVlU2V0L3ZhbHVlc2V0LWR4dGMtZXhhbXBsZSc8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iNyIgbG9jYXRvcj0iMTM6MS0xMzo5MyIgbmFtZT0iTWVkaWNhdGlvbiBUcmlnZ2VyIENvZGVzIiBpZD0iaHR0cDovL2V4YW1wbGUub3JnL2ZoaXIvVmFsdWVTZXQvdmFsdWVzZXQtbXJ0Yy1leGFtcGxlIiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iNyI+CiAgICAgICAgICAgICAgIDxhOnM+dmFsdWVzZXQgJnF1b3Q7TWVkaWNhdGlvbiBUcmlnZ2VyIENvZGVzJnF1b3Q7OiAnaHR0cDovL2V4YW1wbGUub3JnL2ZoaXIvVmFsdWVTZXQvdmFsdWVzZXQtbXJ0Yy1leGFtcGxlJzwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSI4IiBsb2NhdG9yPSIxNDoxLTE0Ojk5IiBuYW1lPSJMYWJvcmF0b3J5IE9yZGVyIFRyaWdnZXIgQ29kZXMiIGlkPSJodHRwOi8vZXhhbXBsZS5vcmcvZmhpci9WYWx1ZVNldC92YWx1ZXNldC1sb3RjLWV4YW1wbGUiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSI4Ij4KICAgICAgICAgICAgICAgPGE6cz52YWx1ZXNldCAmcXVvdDtMYWJvcmF0b3J5IE9yZGVyIFRyaWdnZXIgQ29kZXMmcXVvdDs6ICdodHRwOi8vZXhhbXBsZS5vcmcvZmhpci9WYWx1ZVNldC92YWx1ZXNldC1sb3RjLWV4YW1wbGUnPC9hOnM+CiAgICAgICAgICAgIDwvYTpzPgogICAgICAgICA8L2Fubm90YXRpb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIGxvY2FsSWQ9IjkiIGxvY2F0b3I9IjE1OjEtMTU6MTAwIiBuYW1lPSJMYWJvcmF0b3J5IFJlc3VsdCBUcmlnZ2VyIENvZGVzIiBpZD0iaHR0cDovL2V4YW1wbGUub3JnL2ZoaXIvVmFsdWVTZXQvdmFsdWVzZXQtbHJ0Yy1leGFtcGxlIiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iOSI+CiAgICAgICAgICAgICAgIDxhOnM+dmFsdWVzZXQgJnF1b3Q7TGFib3JhdG9yeSBSZXN1bHQgVHJpZ2dlciBDb2RlcyZxdW90OzogJ2h0dHA6Ly9leGFtcGxlLm9yZy9maGlyL1ZhbHVlU2V0L3ZhbHVlc2V0LWxydGMtZXhhbXBsZSc8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iMTAiIGxvY2F0b3I9IjE2OjEtMTY6MTAxIiBuYW1lPSJPcmdhbmlzbSBTdWJzdGFuY2UgVHJpZ2dlciBDb2RlcyIgaWQ9Imh0dHA6Ly9leGFtcGxlLm9yZy9maGlyL1ZhbHVlU2V0L3ZhbHVlc2V0LW9zdGMtZXhhbXBsZSIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxhbm5vdGF0aW9uIHhzaTp0eXBlPSJhOkFubm90YXRpb24iPgogICAgICAgICAgICA8YTpzIHI9IjEwIj4KICAgICAgICAgICAgICAgPGE6cz52YWx1ZXNldCAmcXVvdDtPcmdhbmlzbSBTdWJzdGFuY2UgVHJpZ2dlciBDb2RlcyZxdW90OzogJ2h0dHA6Ly9leGFtcGxlLm9yZy9maGlyL1ZhbHVlU2V0L3ZhbHVlc2V0LW9zdGMtZXhhbXBsZSc8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iMTEiIGxvY2F0b3I9IjE3OjEtMTc6OTIiIG5hbWU9IlByb2NlZHVyZSBUcmlnZ2VyIENvZGVzIiBpZD0iaHR0cDovL2V4YW1wbGUub3JnL2ZoaXIvVmFsdWVTZXQvdmFsdWVzZXQtcGN0Yy1leGFtcGxlIiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iMTEiPgogICAgICAgICAgICAgICA8YTpzPnZhbHVlc2V0ICZxdW90O1Byb2NlZHVyZSBUcmlnZ2VyIENvZGVzJnF1b3Q7OiAnaHR0cDovL2V4YW1wbGUub3JnL2ZoaXIvVmFsdWVTZXQvdmFsdWVzZXQtcGN0Yy1leGFtcGxlJzwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSIxMiIgbG9jYXRvcj0iMTg6MS0xODoxMDEiIG5hbWU9IlN1c3BlY3RlZCBEaXNvcmRlciBUcmlnZ2VyIENvZGVzIiBpZD0iaHR0cDovL2V4YW1wbGUub3JnL2ZoaXIvVmFsdWVTZXQvdmFsdWVzZXQtc2R0Yy1leGFtcGxlIiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iMTIiPgogICAgICAgICAgICAgICA8YTpzPnZhbHVlc2V0ICZxdW90O1N1c3BlY3RlZCBEaXNvcmRlciBUcmlnZ2VyIENvZGVzJnF1b3Q7OiAnaHR0cDovL2V4YW1wbGUub3JnL2ZoaXIvVmFsdWVTZXQvdmFsdWVzZXQtc2R0Yy1leGFtcGxlJzwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSIxMyIgbG9jYXRvcj0iMjE6MS0yMToxMTUiIG5hbWU9IkNobGFteWRpYSBMYWJvcmF0b3J5IFJlc3VsdCBUcmlnZ2VyIENvZGVzIiBpZD0iaHR0cDovL2V4YW1wbGUub3JnL2ZoaXIvVmFsdWVTZXQvdmFsdWVzZXQtY2hsYW15ZGlhLWV4YW1wbGUiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSIxMyI+CiAgICAgICAgICAgICAgIDxhOnM+Ly8gQ29uZGl0aW9uLXNwZWNpZmljIHRyaWdnZXJpbmcgY29kZXMsIHRoZXNlIHdvdWxkIGJlIGxpc3RlZCBmb3IgZWFjaCBjb25kaXRpb24KdmFsdWVzZXQgJnF1b3Q7Q2hsYW15ZGlhIExhYm9yYXRvcnkgUmVzdWx0IFRyaWdnZXIgQ29kZXMmcXVvdDs6ICdodHRwOi8vZXhhbXBsZS5vcmcvZmhpci9WYWx1ZVNldC92YWx1ZXNldC1jaGxhbXlkaWEtZXhhbXBsZSc8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iMTQiIGxvY2F0b3I9IjI0OjEtMjQ6MTI2IiBuYW1lPSJJbmRldGVybWluYXRlIG9yIEVxdWl2b2NhbCBMYWIgUmVzdWx0IFZhbHVlIiBpZD0iaHR0cDovL2N0cy5ubG0ubmloLmdvdi9maGlyL1ZhbHVlU2V0LzIuMTYuODQwLjEuMTEzNzYyLjEuNC4xMTQ2LjEwMzUiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSIxNCI+CiAgICAgICAgICAgICAgIDxhOnM+Ly8gU3VwcGxlbWVudGFsIChvciBvcGVyYXRpb25hbCkgdmFsdWUgc2V0cyB1c2VkIGluIHN1c3BlY3RlZCByZXBvcnRhYmlsaXR5IGRldGVybWluYXRpb24gbG9naWMKdmFsdWVzZXQgJnF1b3Q7SW5kZXRlcm1pbmF0ZSBvciBFcXVpdm9jYWwgTGFiIFJlc3VsdCBWYWx1ZSZxdW90OzogJ2h0dHA6Ly9jdHMubmxtLm5paC5nb3YvZmhpci9WYWx1ZVNldC8yLjE2Ljg0MC4xLjExMzc2Mi4xLjQuMTE0Ni4xMDM1JzwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSIxNSIgbG9jYXRvcj0iMjU6MS0yNToxMjIiIG5hbWU9Ik5lZ2F0aXZlIG9yIFVuZGV0ZWN0ZWQgTGFiIFJlc3VsdCBWYWx1ZSIgaWQ9Imh0dHA6Ly9jdHMubmxtLm5paC5nb3YvZmhpci9WYWx1ZVNldC8yLjE2Ljg0MC4xLjExMzc2Mi4xLjQuMTE0Ni4xMDM0IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iMTUiPgogICAgICAgICAgICAgICA8YTpzPnZhbHVlc2V0ICZxdW90O05lZ2F0aXZlIG9yIFVuZGV0ZWN0ZWQgTGFiIFJlc3VsdCBWYWx1ZSZxdW90OzogJ2h0dHA6Ly9jdHMubmxtLm5paC5nb3YvZmhpci9WYWx1ZVNldC8yLjE2Ljg0MC4xLjExMzc2Mi4xLjQuMTE0Ni4xMDM0JzwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICA8L2RlZj4KICAgPC92YWx1ZVNldHM+CiAgIDxjb2Rlcz4KICAgICAgPGRlZiBsb2NhbElkPSIxNyIgbG9jYXRvcj0iMjc6MS0yNzo0NiIgbmFtZT0iZUlDUkNvbXBvc2l0aW9uIiBpZD0iNTU3NTEtMiIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxhbm5vdGF0aW9uIHhzaTp0eXBlPSJhOkFubm90YXRpb24iPgogICAgICAgICAgICA8YTpzIHI9IjE3Ij4KICAgICAgICAgICAgICAgPGE6cz5jb2RlICZxdW90O2VJQ1JDb21wb3NpdGlvbiZxdW90OzogJzU1NzUxLTInIGZyb20gPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iMTYiPgogICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O0xPSU5DJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICAgICA8Y29kZVN5c3RlbSBsb2NhbElkPSIxNiIgbG9jYXRvcj0iMjc6NDAtMjc6NDYiIG5hbWU9IkxPSU5DIi8+CiAgICAgIDwvZGVmPgogICA8L2NvZGVzPgogICA8Y29udGV4dHM+CiAgICAgIDxkZWYgbG9jYXRvcj0iMzI6MS0zMjoxNSIgbmFtZT0iUGF0aWVudCIvPgogICA8L2NvbnRleHRzPgogICA8c3RhdGVtZW50cz4KICAgICAgPGRlZiBsb2NhdG9yPSIzMjoxLTMyOjE1IiBuYW1lPSJQYXRpZW50IiBjb250ZXh0PSJQYXRpZW50Ij4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IlNpbmdsZXRvbkZyb20iPgogICAgICAgICAgICA8b3BlcmFuZCBsb2NhdG9yPSIzMjoxLTMyOjE1IiBkYXRhVHlwZT0iZmhpcjpQYXRpZW50IiB0ZW1wbGF0ZUlkPSJodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vUGF0aWVudCIgeHNpOnR5cGU9IlJldHJpZXZlIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iMzQiIGxvY2F0b3I9IjM0OjEtMzY6ODYiIG5hbWU9IkNobGFteWRpYSBUZXN0IFJlc3VsdHMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSIzNCI+CiAgICAgICAgICAgICAgIDxhOnM+ZGVmaW5lICZxdW90O0NobGFteWRpYSBUZXN0IFJlc3VsdHMmcXVvdDs6CiAgPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iMzMiPgogICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjIzIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPltPYnNlcnZhdGlvbjogPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7Q2hsYW15ZGlhIExhYm9yYXRvcnkgUmVzdWx0IFRyaWdnZXIgQ29kZXMmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+XTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IE88L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzPgogICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzIiPgogICAgICAgICAgICAgICAgICAgICA8YTpzPndoZXJlIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjMyIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPk88L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5zdGF0dXM8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiBpbiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+eyA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+J3JlZ2lzdGVyZWQnPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiwgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPidwcmVsaW1pbmFyeSc8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LCA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyOCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+J2ZpbmFsJzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4sIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4nYW1lbmRlZCc8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LCA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+J2NvcnJlY3RlZCc8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IH08L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgIDwvYTpzPgogICAgICAgICA8L2Fubm90YXRpb24+CiAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjMzIiBsb2NhdG9yPSIzNTozLTM2Ojg2IiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGxvY2FsSWQ9IjIzIiBsb2NhdG9yPSIzNTozLTM1OjYyIiBhbGlhcz0iTyI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjIyIiBsb2NhdG9yPSIzNTozLTM1OjYwIiBkYXRhVHlwZT0iZmhpcjpPYnNlcnZhdGlvbiIgdGVtcGxhdGVJZD0iaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL09ic2VydmF0aW9uIiBjb2RlUHJvcGVydHk9ImNvZGUiIGNvZGVDb21wYXJhdG9yPSJpbiIgeHNpOnR5cGU9IlJldHJpZXZlIj4KICAgICAgICAgICAgICAgICAgPGNvZGVzIGxvY2F0b3I9IjM1OjE3LTM1OjU5IiBuYW1lPSJDaGxhbXlkaWEgTGFib3JhdG9yeSBSZXN1bHQgVHJpZ2dlciBDb2RlcyIgcHJlc2VydmU9InRydWUiIHhzaTp0eXBlPSJWYWx1ZVNldFJlZiIvPgogICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICA8d2hlcmUgbG9jYWxJZD0iMzIiIGxvY2F0b3I9IjM2OjUtMzY6ODYiIHhzaTp0eXBlPSJJbiI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlRvU3RyaW5nIiBsaWJyYXJ5TmFtZT0iRkhJUkhlbHBlcnMiIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjI1IiBsb2NhdG9yPSIzNjoxMS0zNjoxOCIgcGF0aD0ic3RhdHVzIiBzY29wZT0iTyIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMzEiIGxvY2F0b3I9IjM2OjIzLTM2Ojg2IiB4c2k6dHlwZT0iTGlzdCI+CiAgICAgICAgICAgICAgICAgIDxlbGVtZW50IGxvY2FsSWQ9IjI2IiBsb2NhdG9yPSIzNjoyNS0zNjozNiIgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9InJlZ2lzdGVyZWQiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgIDxlbGVtZW50IGxvY2FsSWQ9IjI3IiBsb2NhdG9yPSIzNjozOS0zNjo1MSIgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9InByZWxpbWluYXJ5IiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICA8ZWxlbWVudCBsb2NhbElkPSIyOCIgbG9jYXRvcj0iMzY6NTQtMzY6NjAiIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJmaW5hbCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbG9jYWxJZD0iMjkiIGxvY2F0b3I9IjM2OjYzLTM2OjcxIiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iYW1lbmRlZCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbG9jYWxJZD0iMzAiIGxvY2F0b3I9IjM2Ojc0LTM2Ojg0IiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iY29ycmVjdGVkIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iMzgiIGxvY2F0b3I9IjM4OjEtMzk6MTUiIG5hbWU9IlRyaWdnZXJpbmcgRW5jb3VudGVycyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxhbm5vdGF0aW9uIHhzaTp0eXBlPSJhOkFubm90YXRpb24iPgogICAgICAgICAgICA8YTpzIHI9IjM4Ij4KICAgICAgICAgICAgICAgPGE6cz5kZWZpbmUgJnF1b3Q7VHJpZ2dlcmluZyBFbmNvdW50ZXJzJnF1b3Q7OgogIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzIHI9IjM3Ij4KICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzNiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjM1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5bRW5jb3VudGVyXTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IEU8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMzciIGxvY2F0b3I9IjM5OjMtMzk6MTUiIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgIDxzb3VyY2UgbG9jYWxJZD0iMzYiIGxvY2F0b3I9IjM5OjMtMzk6MTUiIGFsaWFzPSJFIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMzUiIGxvY2F0b3I9IjM5OjMtMzk6MTMiIGRhdGFUeXBlPSJmaGlyOkVuY291bnRlciIgdGVtcGxhdGVJZD0iaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL0VuY291bnRlciIgeHNpOnR5cGU9IlJldHJpZXZlIi8+CiAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIGxvY2FsSWQ9IjQ3IiBsb2NhdG9yPSI0MToxLTQzOjQ5IiBuYW1lPSJFbmNvdW50ZXIgTG9jYXRpb24gUmVmZXJlbmNlcyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxhbm5vdGF0aW9uIHhzaTp0eXBlPSJhOkFubm90YXRpb24iPgogICAgICAgICAgICA8YTpzIHI9IjQ3Ij4KICAgICAgICAgICAgICAgPGE6cz5kZWZpbmUgJnF1b3Q7RW5jb3VudGVyIExvY2F0aW9uIFJlZmVyZW5jZXMmcXVvdDs6CiAgPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iNDYiPgogICAgICAgICAgICAgICAgICA8YTpzPmZsYXR0ZW48L2E6cz4KICAgICAgICAgICAgICAgICAgPGE6cyByPSI0NSI+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+KDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjQ1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O1RyaWdnZXJpbmcgRW5jb3VudGVycyZxdW90OzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IFRyaWdnZXJpbmdFbmNvdW50ZXI8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNDQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnJldHVybiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNDIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjQxIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5UcmlnZ2VyaW5nRW5jb3VudGVyPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+bG9jYXRpb248L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+bG9jYXRpb248L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+KTwvYTpzPgogICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgIDwvYTpzPgogICAgICAgICA8L2Fubm90YXRpb24+CiAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjQ2IiBsb2NhdG9yPSI0MjozLTQzOjQ5IiB4c2k6dHlwZT0iRmxhdHRlbiI+CiAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjQ1IiBsb2NhdG9yPSI0MjoxMC00Mzo0OSIgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgICAgPHNvdXJjZSBsb2NhbElkPSI0MCIgbG9jYXRvcj0iNDI6MTEtNDI6NTMiIGFsaWFzPSJUcmlnZ2VyaW5nRW5jb3VudGVyIj4KICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMzkiIGxvY2F0b3I9IjQyOjExLTQyOjMzIiBuYW1lPSJUcmlnZ2VyaW5nIEVuY291bnRlcnMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICA8cmV0dXJuIGxvY2FsSWQ9IjQ0IiBsb2NhdG9yPSI0Mzo1LTQzOjQ4Ij4KICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iNDMiIGxvY2F0b3I9IjQzOjEyLTQzOjQ4IiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIGFsaWFzPSIkdGhpcyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjQyIiBsb2NhdG9yPSI0MzoxMi00MzozOSIgcGF0aD0ibG9jYXRpb24iIHNjb3BlPSJUcmlnZ2VyaW5nRW5jb3VudGVyIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgIDx3aGVyZSB4c2k6dHlwZT0iTm90Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IklzTnVsbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImxvY2F0aW9uIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9IiR0aGlzIiB4c2k6dHlwZT0iQWxpYXNSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgICAgICAgICAgICAgIDxyZXR1cm4gZGlzdGluY3Q9ImZhbHNlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gcGF0aD0ibG9jYXRpb24iIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0iJHRoaXMiIHhzaTp0eXBlPSJBbGlhc1JlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgICAgICAgICAgIDwvcmV0dXJuPgogICAgICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgICAgIDwvcmV0dXJuPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iNjIiIGxvY2F0b3I9IjQ1OjEtNTA6NyIgbmFtZT0iTG9jYXRpb25zIE1hdGNoaW5nIEVuY291bnRlciBMb2NhdGlvbiBSZWZlcmVuY2VzIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iNjIiPgogICAgICAgICAgICAgICA8YTpzPmRlZmluZSAmcXVvdDtMb2NhdGlvbnMgTWF0Y2hpbmcgRW5jb3VudGVyIExvY2F0aW9uIFJlZmVyZW5jZXMmcXVvdDs6CiAgPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iNjEiPgogICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjQ5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI0OCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNDgiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPltMb2NhdGlvbl08L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiBMb2NhdGlvbjwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgPGE6cyByPSI2MCI+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+d2hlcmUgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNjAiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPmV4aXN0cyA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI1OSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+KAogICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjU5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI1MSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNTAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O0VuY291bnRlciBMb2NhdGlvbiBSZWZlcmVuY2VzJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gTG9jYXRpb25SZWZlcmVuY2U8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNTgiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPndoZXJlIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjU4Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI1NSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+KDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjU1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI1MiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+J0xvY2F0aW9uLyc8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+ICsgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNTQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjUzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5Mb2NhdGlvbjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNTQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPmlkPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+KTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gfiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI1NyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNTYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPkxvY2F0aW9uUmVmZXJlbmNlPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI1NyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+cmVmZXJlbmNlPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgKTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iNjEiIGxvY2F0b3I9IjQ2OjMtNTA6NyIgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgPHNvdXJjZSBsb2NhbElkPSI0OSIgbG9jYXRvcj0iNDY6My00NjoyMSIgYWxpYXM9IkxvY2F0aW9uIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iNDgiIGxvY2F0b3I9IjQ2OjMtNDY6MTIiIGRhdGFUeXBlPSJmaGlyOkxvY2F0aW9uIiB0ZW1wbGF0ZUlkPSJodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vTG9jYXRpb24iIHhzaTp0eXBlPSJSZXRyaWV2ZSIvPgogICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgPHdoZXJlIGxvY2FsSWQ9IjYwIiBsb2NhdG9yPSI0Nzo1LTUwOjciIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSI1OSIgbG9jYXRvcj0iNDc6MTgtNTA6NyIgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgICAgICAgPHNvdXJjZSBsb2NhbElkPSI1MSIgbG9jYXRvcj0iNDg6OS00ODo1NyIgYWxpYXM9IkxvY2F0aW9uUmVmZXJlbmNlIj4KICAgICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iNTAiIGxvY2F0b3I9IjQ4OjktNDg6MzkiIG5hbWU9IkVuY291bnRlciBMb2NhdGlvbiBSZWZlcmVuY2VzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgPHdoZXJlIGxvY2FsSWQ9IjU4IiBsb2NhdG9yPSI0OToxMS00OTo3MyIgeHNpOnR5cGU9IkVxdWl2YWxlbnQiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSI1NSIgbG9jYXRvcj0iNDk6MTctNDk6NDMiIHhzaTp0eXBlPSJDb25jYXRlbmF0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjUyIiBsb2NhdG9yPSI0OToxOC00OToyOCIgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IkxvY2F0aW9uLyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVG9TdHJpbmciIGxpYnJhcnlOYW1lPSJGSElSSGVscGVycyIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iNTQiIGxvY2F0b3I9IjQ5OjMyLTQ5OjQyIiBwYXRoPSJpZCIgc2NvcGU9IkxvY2F0aW9uIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlRvU3RyaW5nIiBsaWJyYXJ5TmFtZT0iRkhJUkhlbHBlcnMiIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjU3IiBsb2NhdG9yPSI0OTo0Ny00OTo3MyIgcGF0aD0icmVmZXJlbmNlIiBzY29wZT0iTG9jYXRpb25SZWZlcmVuY2UiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSI3NCIgbG9jYXRvcj0iNTI6MS01NDo5MCIgbmFtZT0iRW5jb3VudGVyIExvY2F0aW9uIEFkZHJlc3MiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSI3NCI+CiAgICAgICAgICAgICAgIDxhOnM+ZGVmaW5lICZxdW90O0VuY291bnRlciBMb2NhdGlvbiBBZGRyZXNzJnF1b3Q7OgogIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzIHI9IjczIj4KICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI2NCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNjMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O0xvY2F0aW9ucyBNYXRjaGluZyBFbmNvdW50ZXIgTG9jYXRpb24gUmVmZXJlbmNlcyZxdW90OzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IEFkZHJlc3M8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzPgogICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNzIiPgogICAgICAgICAgICAgICAgICAgICA8YTpzPnJldHVybiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI3MSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+VHVwbGUgeyA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5zdGF0ZTogPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNjciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjY2Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI2NSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+QWRkcmVzczwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNjYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPmFkZHJlc3M8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI2NyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+c3RhdGU8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4sICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5wb3N0YWxDb2RlOiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI3MCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNjkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjY4Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5BZGRyZXNzPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI2OSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+YWRkcmVzczwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjcwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5wb3N0YWxDb2RlPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IH08L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iNzMiIGxvY2F0b3I9IjUzOjMtNTQ6OTAiIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgIDxzb3VyY2UgbG9jYWxJZD0iNjQiIGxvY2F0b3I9IjUzOjMtNTM6NjAiIGFsaWFzPSJBZGRyZXNzIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iNjMiIGxvY2F0b3I9IjUzOjMtNTM6NTIiIG5hbWU9IkxvY2F0aW9ucyBNYXRjaGluZyBFbmNvdW50ZXIgTG9jYXRpb24gUmVmZXJlbmNlcyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgIDxyZXR1cm4gbG9jYWxJZD0iNzIiIGxvY2F0b3I9IjU0OjUtNTQ6OTAiPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSI3MSIgbG9jYXRvcj0iNTQ6MTItNTQ6OTAiIHhzaTp0eXBlPSJUdXBsZSI+CiAgICAgICAgICAgICAgICAgIDxlbGVtZW50IG5hbWU9InN0YXRlIj4KICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIGxvY2FsSWQ9IjY3IiBsb2NhdG9yPSI1NDoyNy01NDo0NyIgcGF0aD0ic3RhdGUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbG9jYWxJZD0iNjYiIGxvY2F0b3I9IjU0OjI3LTU0OjQxIiBwYXRoPSJhZGRyZXNzIiBzY29wZT0iQWRkcmVzcyIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+CiAgICAgICAgICAgICAgICAgIDwvZWxlbWVudD4KICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0icG9zdGFsQ29kZSI+CiAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBsb2NhbElkPSI3MCIgbG9jYXRvcj0iNTQ6NjMtNTQ6ODgiIHBhdGg9InBvc3RhbENvZGUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbG9jYWxJZD0iNjkiIGxvY2F0b3I9IjU0OjYzLTU0Ojc3IiBwYXRoPSJhZGRyZXNzIiBzY29wZT0iQWRkcmVzcyIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+CiAgICAgICAgICAgICAgICAgIDwvZWxlbWVudD4KICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICA8L3JldHVybj4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSI4NCIgbG9jYXRvcj0iNTY6MS01ODo2MSIgbmFtZT0iUGF0aWVudCBBZGRyZXNzIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iODQiPgogICAgICAgICAgICAgICA8YTpzPmRlZmluZSAmcXVvdDtQYXRpZW50IEFkZHJlc3MmcXVvdDs6CiAgPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iODMiPgogICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzIHI9Ijc2Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI3NSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+UGF0aWVudC5hZGRyZXNzPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gUEE8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzPgogIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzIHI9IjgyIj4KICAgICAgICAgICAgICAgICAgICAgPGE6cz5yZXR1cm4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iODEiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPlR1cGxlIHsgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+c3RhdGU6IDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9Ijc4Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI3NyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+UEE8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9Ijc4Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5zdGF0ZTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiwgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+cG9zdGFsQ29kZTogPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iODAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9Ijc5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5QQTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iODAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnBvc3RhbENvZGU8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gfTwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSI4MyIgbG9jYXRvcj0iNTc6My01ODo2MSIgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgPHNvdXJjZSBsb2NhbElkPSI3NiIgbG9jYXRvcj0iNTc6My01NzoyMCIgYWxpYXM9IlBBIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iNzUiIGxvY2F0b3I9IjU3OjMtNTc6MTciIHBhdGg9ImFkZHJlc3MiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0iUGF0aWVudCIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgPHJldHVybiBsb2NhbElkPSI4MiIgbG9jYXRvcj0iNTg6My01ODo2MSI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjgxIiBsb2NhdG9yPSI1ODoxMC01ODo2MSIgeHNpOnR5cGU9IlR1cGxlIj4KICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0ic3RhdGUiPgogICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbG9jYWxJZD0iNzgiIGxvY2F0b3I9IjU4OjI1LTU4OjMyIiBwYXRoPSJzdGF0ZSIgc2NvcGU9IlBBIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgPC9lbGVtZW50PgogICAgICAgICAgICAgICAgICA8ZWxlbWVudCBuYW1lPSJwb3N0YWxDb2RlIj4KICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIGxvY2FsSWQ9IjgwIiBsb2NhdG9yPSI1ODo0Ny01ODo1OSIgcGF0aD0icG9zdGFsQ29kZSIgc2NvcGU9IlBBIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgPC9lbGVtZW50PgogICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgIDwvcmV0dXJuPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIGxvY2FsSWQ9IjEzNSIgbG9jYXRvcj0iNjA6MS02ODoxMCIgbmFtZT0iSnVyaXNkaWN0aW9ucyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxhbm5vdGF0aW9uIHhzaTp0eXBlPSJhOkFubm90YXRpb24iPgogICAgICAgICAgICA8YTpzIHI9IjEzNSI+CiAgICAgICAgICAgICAgIDxhOnM+ZGVmaW5lICZxdW90O0p1cmlzZGljdGlvbnMmcXVvdDs6CiAgPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iMTM0Ij4KICAgICAgICAgICAgICAgICAgPGE6cz5mbGF0dGVuPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTMzIj4KICAgICAgICAgICAgICAgICAgICAgPGE6cz4oPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTMzIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI4NiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iODUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9Ijg1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5bQ29kZVN5c3RlbV08L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiBDPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjEzMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+cmV0dXJuIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjEzMSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iODgiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9Ijg3Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5DLmNvbmNlcHQ8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiBDcHQ8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxMzAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnJldHVybiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxMjkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPlR1cGxlIHsgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+anVyaXNkaWN0aW9uQ29kZTogPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iOTAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9Ijg5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5DcHQ8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjkwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5jb2RlPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LAogICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPmRlZmluaXRpb246IDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjkyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI5MSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+Q3B0PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI5MiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+ZGVmaW5pdGlvbjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiwKICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5qdXJpc2RpY3Rpb25UeXBlOiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxMDQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9Ijk0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI5MyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+Q3B0LnByb3BlcnR5PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gUDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9Ijk4Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz53aGVyZSA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI5OCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iOTYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9Ijk1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5QPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI5NiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+Y29kZTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+PTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9Ijk3Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4ndHlwZSc8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTAzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5yZXR1cm4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTAyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxMDAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9Ijk5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5QPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxMDAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnZhbHVlPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gYXMgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTAxIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5GSElSLnN0cmluZzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LAogICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnN0YXRlQ29kZTogPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTE2Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxMDYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjEwNSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+Q3B0LnByb3BlcnR5PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gUDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjExMCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+d2hlcmUgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTEwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxMDgiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjEwNyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+UDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTA4Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5jb2RlPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gPSA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxMDkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPidzdGF0ZSc8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTE1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5yZXR1cm4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTE0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxMTIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjExMSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+UDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTEyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz52YWx1ZTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IGFzIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjExMyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+RkhJUi5jb2RlPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4sCiAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+cG9zdGFsQ29kZTogPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTI4Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxMTgiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjExNyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+Q3B0LnByb3BlcnR5PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gUDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjEyMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+d2hlcmUgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTIyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxMjAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjExOSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+UDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTIwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5jb2RlPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gPSA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxMjEiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPidwb3N0YWxjb2RlJzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxMjciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnJldHVybiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxMjYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjEyNCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTIzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5QPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxMjQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnZhbHVlPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gYXMgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTI1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5GSElSLmNvZGU8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgIH08L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzPik8L2E6cz4KICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIxMzQiIGxvY2F0b3I9IjYxOjMtNjg6MTAiIHhzaTp0eXBlPSJGbGF0dGVuIj4KICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMTMzIiBsb2NhdG9yPSI2MToxMC02ODoxMCIgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgICAgPHNvdXJjZSBsb2NhbElkPSI4NiIgbG9jYXRvcj0iNjE6MTEtNjE6MjQiIGFsaWFzPSJDIj4KICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iODUiIGxvY2F0b3I9IjYxOjExLTYxOjIyIiBkYXRhVHlwZT0iZmhpcjpDb2RlU3lzdGVtIiB0ZW1wbGF0ZUlkPSJodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vQ29kZVN5c3RlbSIgeHNpOnR5cGU9IlJldHJpZXZlIi8+CiAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICA8cmV0dXJuIGxvY2FsSWQ9IjEzMiIgbG9jYXRvcj0iNjI6NS02ODo5Ij4KICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMTMxIiBsb2NhdG9yPSI2MjoxMi02ODo5IiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIGxvY2FsSWQ9Ijg4IiBsb2NhdG9yPSI2MjoxMi02MjoyNCIgYWxpYXM9IkNwdCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9Ijg3IiBsb2NhdG9yPSI2MjoxMi02MjoyMCIgcGF0aD0iY29uY2VwdCIgc2NvcGU9IkMiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgPHJldHVybiBsb2NhbElkPSIxMzAiIGxvY2F0b3I9IjYzOjctNjg6OSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjEyOSIgbG9jYXRvcj0iNjM6MTQtNjg6OSIgeHNpOnR5cGU9IlR1cGxlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0ianVyaXNkaWN0aW9uQ29kZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBsb2NhbElkPSI5MCIgbG9jYXRvcj0iNjM6NDAtNjM6NDciIHBhdGg9ImNvZGUiIHNjb3BlPSJDcHQiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2VsZW1lbnQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbGVtZW50IG5hbWU9ImRlZmluaXRpb24iPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbG9jYWxJZD0iOTIiIGxvY2F0b3I9IjY0OjIxLTY0OjM0IiBwYXRoPSJkZWZpbml0aW9uIiBzY29wZT0iQ3B0IiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9lbGVtZW50PgogICAgICAgICAgICAgICAgICAgICAgICAgICA8ZWxlbWVudCBuYW1lPSJqdXJpc2RpY3Rpb25UeXBlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIGxvY2FsSWQ9IjEwNCIgbG9jYXRvcj0iNjU6MjctNjU6OTAiIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbG9jYWxJZD0iOTQiIGxvY2F0b3I9IjY1OjI3LTY1OjQwIiBhbGlhcz0iUCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjkzIiBsb2NhdG9yPSI2NToyNy02NTozOCIgcGF0aD0icHJvcGVydHkiIHNjb3BlPSJDcHQiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHdoZXJlIGxvY2FsSWQ9Ijk4IiBsb2NhdG9yPSI2NTo0Mi02NTo2MCIgeHNpOnR5cGU9IkVxdWFsIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVG9TdHJpbmciIGxpYnJhcnlOYW1lPSJGSElSSGVscGVycyIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iOTYiIGxvY2F0b3I9IjY1OjQ4LTY1OjUzIiBwYXRoPSJjb2RlIiBzY29wZT0iUCIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iOTciIGxvY2F0b3I9IjY1OjU1LTY1OjYwIiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0idHlwZSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJldHVybiBsb2NhbElkPSIxMDMiIGxvY2F0b3I9IjY1OjYyLTY1OjkwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMTAyIiBsb2NhdG9yPSI2NTo2OS02NTo5MCIgc3RyaWN0PSJmYWxzZSIgeHNpOnR5cGU9IkFzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMTAwIiBsb2NhdG9yPSI2NTo2OS02NTo3NSIgcGF0aD0idmFsdWUiIHNjb3BlPSJQIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFzVHlwZVNwZWNpZmllciBsb2NhbElkPSIxMDEiIGxvY2F0b3I9IjY1OjgwLTY1OjkwIiBuYW1lPSJmaGlyOnN0cmluZyIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcmV0dXJuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZhbHVlPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2VsZW1lbnQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbGVtZW50IG5hbWU9InN0YXRlQ29kZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBsb2NhbElkPSIxMTYiIGxvY2F0b3I9IjY2OjIwLTY2Ojg0IiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIGxvY2FsSWQ9IjEwNiIgbG9jYXRvcj0iNjY6MjAtNjY6MzMiIGFsaWFzPSJQIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMTA1IiBsb2NhdG9yPSI2NjoyMC02NjozMSIgcGF0aD0icHJvcGVydHkiIHNjb3BlPSJDcHQiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHdoZXJlIGxvY2FsSWQ9IjExMCIgbG9jYXRvcj0iNjY6MzUtNjY6NTYiIHhzaTp0eXBlPSJFcXVhbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlRvU3RyaW5nIiBsaWJyYXJ5TmFtZT0iRkhJUkhlbHBlcnMiIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjEwOCIgbG9jYXRvcj0iNjY6NDEtNjY6NDYiIHBhdGg9ImNvZGUiIHNjb3BlPSJQIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIxMDkiIGxvY2F0b3I9IjY2OjUwLTY2OjU2IiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0ic3RhdGUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZXR1cm4gbG9jYWxJZD0iMTE1IiBsb2NhdG9yPSI2Njo1OC02Njo4NCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjExNCIgbG9jYXRvcj0iNjY6NjUtNjY6ODQiIHN0cmljdD0iZmFsc2UiIHhzaTp0eXBlPSJBcyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjExMiIgbG9jYXRvcj0iNjY6NjUtNjY6NzEiIHBhdGg9InZhbHVlIiBzY29wZT0iUCIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhc1R5cGVTcGVjaWZpZXIgbG9jYWxJZD0iMTEzIiBsb2NhdG9yPSI2Njo3Ni02Njo4NCIgbmFtZT0iZmhpcjpjb2RlIiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yZXR1cm4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZWxlbWVudD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0icG9zdGFsQ29kZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBsb2NhbElkPSIxMjgiIGxvY2F0b3I9IjY3OjIxLTY3OjkwIiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIGxvY2FsSWQ9IjExOCIgbG9jYXRvcj0iNjc6MjEtNjc6MzQiIGFsaWFzPSJQIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMTE3IiBsb2NhdG9yPSI2NzoyMS02NzozMiIgcGF0aD0icHJvcGVydHkiIHNjb3BlPSJDcHQiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHdoZXJlIGxvY2FsSWQ9IjEyMiIgbG9jYXRvcj0iNjc6MzYtNjc6NjIiIHhzaTp0eXBlPSJFcXVhbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlRvU3RyaW5nIiBsaWJyYXJ5TmFtZT0iRkhJUkhlbHBlcnMiIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjEyMCIgbG9jYXRvcj0iNjc6NDItNjc6NDciIHBhdGg9ImNvZGUiIHNjb3BlPSJQIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIxMjEiIGxvY2F0b3I9IjY3OjUxLTY3OjYyIiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0icG9zdGFsY29kZSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJldHVybiBsb2NhbElkPSIxMjciIGxvY2F0b3I9IjY3OjY0LTY3OjkwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMTI2IiBsb2NhdG9yPSI2Nzo3MS02Nzo5MCIgc3RyaWN0PSJmYWxzZSIgeHNpOnR5cGU9IkFzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMTI0IiBsb2NhdG9yPSI2Nzo3MS02Nzo3NyIgcGF0aD0idmFsdWUiIHNjb3BlPSJQIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFzVHlwZVNwZWNpZmllciBsb2NhbElkPSIxMjUiIGxvY2F0b3I9IjY3OjgyLTY3OjkwIiBuYW1lPSJmaGlyOmNvZGUiIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JldHVybj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92YWx1ZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9lbGVtZW50PgogICAgICAgICAgICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgICAgICAgICAgIDwvcmV0dXJuPgogICAgICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgICAgIDwvcmV0dXJuPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iMTQ3IiBsb2NhdG9yPSI3MDoxLTczOjU4IiBuYW1lPSJFbmNvdW50ZXIgQWRkcmVzcyBQb3N0YWwgQ29kZSBpcyBpbiBKdXJpc2RpY3Rpb24gQ29kZXMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSIxNDciPgogICAgICAgICAgICAgICA8YTpzPmRlZmluZSAmcXVvdDtFbmNvdW50ZXIgQWRkcmVzcyBQb3N0YWwgQ29kZSBpcyBpbiBKdXJpc2RpY3Rpb24gQ29kZXMmcXVvdDs6CiAgPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iMTQ2Ij4KICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxMzciPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjEzNiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7SnVyaXNkaWN0aW9ucyZxdW90OzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IEo8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzPgogICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTQ1Ij4KICAgICAgICAgICAgICAgICAgICAgPGE6cz53aXRoIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjEzOSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTM4Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtFbmNvdW50ZXIgTG9jYXRpb24gQWRkcmVzcyZxdW90OzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IExvY2F0aW9uQWRkcmVzczwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgc3VjaCB0aGF0IDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE0NCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTQxIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxNDAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPkxvY2F0aW9uQWRkcmVzczwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTQxIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5wb3N0YWxDb2RlPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gaW4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTQzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxNDIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPko8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE0MyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+cG9zdGFsQ29kZTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgIDwvYTpzPgogICAgICAgICA8L2Fubm90YXRpb24+CiAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjE0NiIgbG9jYXRvcj0iNzE6My03Mzo1OCIgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgPHNvdXJjZSBsb2NhbElkPSIxMzciIGxvY2F0b3I9IjcxOjMtNzE6MTkiIGFsaWFzPSJKIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMTM2IiBsb2NhdG9yPSI3MTozLTcxOjE3IiBuYW1lPSJKdXJpc2RpY3Rpb25zIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgPHJlbGF0aW9uc2hpcCBsb2NhbElkPSIxNDUiIGxvY2F0b3I9IjcyOjUtNzM6NTgiIGFsaWFzPSJMb2NhdGlvbkFkZHJlc3MiIHhzaTp0eXBlPSJXaXRoIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMTM4IiBsb2NhdG9yPSI3MjoxMC03MjozNyIgbmFtZT0iRW5jb3VudGVyIExvY2F0aW9uIEFkZHJlc3MiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDxzdWNoVGhhdCBsb2NhbElkPSIxNDQiIGxvY2F0b3I9IjczOjE3LTczOjU4IiB4c2k6dHlwZT0iSW4iPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIxNDEiIGxvY2F0b3I9IjczOjE3LTczOjQyIiBwYXRoPSJwb3N0YWxDb2RlIiBzY29wZT0iTG9jYXRpb25BZGRyZXNzIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMTQzIiBsb2NhdG9yPSI3Mzo0Ny03Mzo1OCIgcGF0aD0icG9zdGFsQ29kZSIgc2NvcGU9IkoiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICA8L3N1Y2hUaGF0PgogICAgICAgICAgICA8L3JlbGF0aW9uc2hpcD4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSIxNjQiIGxvY2F0b3I9Ijc1OjEtNzk6NDMiIG5hbWU9IkVuY291bnRlciBBZGRyZXNzIFN0YXRlIGlzIGluIEp1cmlzZGljdGlvbiBDb2RlcyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxhbm5vdGF0aW9uIHhzaTp0eXBlPSJhOkFubm90YXRpb24iPgogICAgICAgICAgICA8YTpzIHI9IjE2NCI+CiAgICAgICAgICAgICAgIDxhOnM+ZGVmaW5lICZxdW90O0VuY291bnRlciBBZGRyZXNzIFN0YXRlIGlzIGluIEp1cmlzZGljdGlvbiBDb2RlcyZxdW90OzoKICAgIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzIHI9IjE2MyI+CiAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTQ5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxNDgiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O0p1cmlzZGljdGlvbnMmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiBKPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTYyIj4KICAgICAgICAgICAgICAgICAgICAgPGE6cz53aXRoIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE1MSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTUwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtFbmNvdW50ZXIgTG9jYXRpb24gQWRkcmVzcyZxdW90OzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IExvY2F0aW9uQWRkcmVzczwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICBzdWNoIHRoYXQgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTYxIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxNTYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE1MyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTUyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5Mb2NhdGlvbkFkZHJlc3M8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE1MyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+c3RhdGU8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiBpbiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxNTUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE1NCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+SjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTU1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5zdGF0ZUNvZGU8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgIGFuZCA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxNjAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE1NyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+J1NUQVRFJzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gaW4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTU5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxNTgiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPko8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE1OSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+anVyaXNkaWN0aW9uVHlwZTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIxNjMiIGxvY2F0b3I9Ijc2OjUtNzk6NDMiIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgIDxzb3VyY2UgbG9jYWxJZD0iMTQ5IiBsb2NhdG9yPSI3Njo1LTc2OjIxIiBhbGlhcz0iSiI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjE0OCIgbG9jYXRvcj0iNzY6NS03NjoxOSIgbmFtZT0iSnVyaXNkaWN0aW9ucyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgIDxyZWxhdGlvbnNoaXAgbG9jYWxJZD0iMTYyIiBsb2NhdG9yPSI3Nzo3LTc5OjQzIiBhbGlhcz0iTG9jYXRpb25BZGRyZXNzIiB4c2k6dHlwZT0iV2l0aCI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjE1MCIgbG9jYXRvcj0iNzc6MTItNzc6MzkiIG5hbWU9IkVuY291bnRlciBMb2NhdGlvbiBBZGRyZXNzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICA8c3VjaFRoYXQgbG9jYWxJZD0iMTYxIiBsb2NhdG9yPSI3ODoxOS03OTo0MyIgeHNpOnR5cGU9IkFuZCI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjE1NiIgbG9jYXRvcj0iNzg6MTktNzg6NTQiIHhzaTp0eXBlPSJJbiI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjE1MyIgbG9jYXRvcj0iNzg6MTktNzg6MzkiIHBhdGg9InN0YXRlIiBzY29wZT0iTG9jYXRpb25BZGRyZXNzIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMTU1IiBsb2NhdG9yPSI3ODo0NC03ODo1NCIgcGF0aD0ic3RhdGVDb2RlIiBzY29wZT0iSiIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMTYwIiBsb2NhdG9yPSI3OToxNS03OTo0MyIgeHNpOnR5cGU9IkluIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMTU3IiBsb2NhdG9yPSI3OToxNS03OToyMSIgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IlNUQVRFIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIGFsaWFzPSJYIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMTU5IiBsb2NhdG9yPSI3OToyNi03OTo0MyIgcGF0aD0ianVyaXNkaWN0aW9uVHlwZSIgc2NvcGU9IkoiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHJldHVybiBkaXN0aW5jdD0iZmFsc2UiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJUb1N0cmluZyIgbGlicmFyeU5hbWU9IkZISVJIZWxwZXJzIiB4c2k6dHlwZT0iRnVuY3Rpb25SZWYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJYIiB4c2k6dHlwZT0iQWxpYXNSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICAgICAgICAgICAgICA8L3JldHVybj4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvc3VjaFRoYXQ+CiAgICAgICAgICAgIDwvcmVsYXRpb25zaGlwPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIGxvY2FsSWQ9IjE3NiIgbG9jYXRvcj0iODE6MS04NDo0NSIgbmFtZT0iUGF0aWVudCBBZGRyZXNzIFBvc3RhbCBDb2RlIGlzIGluIEp1cmlzZGljdGlvbiBDb2RlcyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxhbm5vdGF0aW9uIHhzaTp0eXBlPSJhOkFubm90YXRpb24iPgogICAgICAgICAgICA8YTpzIHI9IjE3NiI+CiAgICAgICAgICAgICAgIDxhOnM+ZGVmaW5lICZxdW90O1BhdGllbnQgQWRkcmVzcyBQb3N0YWwgQ29kZSBpcyBpbiBKdXJpc2RpY3Rpb24gQ29kZXMmcXVvdDs6CiAgPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iMTc1Ij4KICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxNjYiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE2NSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7SnVyaXNkaWN0aW9ucyZxdW90OzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IEo8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzPgogICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTc0Ij4KICAgICAgICAgICAgICAgICAgICAgPGE6cz53aXRoIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE2OCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTY3Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtQYXRpZW50IEFkZHJlc3MmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiBQQTwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgc3VjaCB0aGF0IDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE3MyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTcwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxNjkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPlBBPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxNzAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnBvc3RhbENvZGU8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiBpbiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxNzIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE3MSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+SjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTcyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5wb3N0YWxDb2RlPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMTc1IiBsb2NhdG9yPSI4MjozLTg0OjQ1IiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGxvY2FsSWQ9IjE2NiIgbG9jYXRvcj0iODI6My04MjoxOSIgYWxpYXM9IkoiPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIxNjUiIGxvY2F0b3I9IjgyOjMtODI6MTciIG5hbWU9Ikp1cmlzZGljdGlvbnMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICA8cmVsYXRpb25zaGlwIGxvY2FsSWQ9IjE3NCIgbG9jYXRvcj0iODM6NS04NDo0NSIgYWxpYXM9IlBBIiB4c2k6dHlwZT0iV2l0aCI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjE2NyIgbG9jYXRvcj0iODM6MTAtODM6MjYiIG5hbWU9IlBhdGllbnQgQWRkcmVzcyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgPHN1Y2hUaGF0IGxvY2FsSWQ9IjE3MyIgbG9jYXRvcj0iODQ6MTctODQ6NDUiIHhzaTp0eXBlPSJJbiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjE3MCIgbG9jYXRvcj0iODQ6MTctODQ6MjkiIHBhdGg9InBvc3RhbENvZGUiIHNjb3BlPSJQQSIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjE3MiIgbG9jYXRvcj0iODQ6MzQtODQ6NDUiIHBhdGg9InBvc3RhbENvZGUiIHNjb3BlPSJKIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgPC9zdWNoVGhhdD4KICAgICAgICAgICAgPC9yZWxhdGlvbnNoaXA+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iMTk0IiBsb2NhdG9yPSI4NjoxLTkwOjQwIiBuYW1lPSJQYXRpZW50IEFkZHJlc3MgU3RhdGUgaXMgaW4gSnVyaXNkaWN0aW9uIENvZGVzIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iMTk0Ij4KICAgICAgICAgICAgICAgPGE6cz5kZWZpbmUgJnF1b3Q7UGF0aWVudCBBZGRyZXNzIFN0YXRlIGlzIGluIEp1cmlzZGljdGlvbiBDb2RlcyZxdW90OzoKPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iMTkzIj4KICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxNzgiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE3NyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7SnVyaXNkaWN0aW9ucyZxdW90OzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IEo8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzPgogIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzIHI9IjE5MiI+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+d2l0aCA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxODAiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE3OSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7UGF0aWVudCBBZGRyZXNzJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gUEE8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICBzdWNoIHRoYXQgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTkxIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4oPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTkxIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxODYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE4MyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTgyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxODEiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPlBBPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxODIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnN0YXRlPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTgzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz52YWx1ZTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IGluIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE4NSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTg0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5KPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxODUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnN0YXRlQ29kZTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICBhbmQgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTkwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxODciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPidTVEFURSc8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IGluIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE4OSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTg4Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5KPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxODkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPmp1cmlzZGljdGlvblR5cGU8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+KTwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIxOTMiIGxvY2F0b3I9Ijg3OjEtOTA6NDAiIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgIDxzb3VyY2UgbG9jYWxJZD0iMTc4IiBsb2NhdG9yPSI4NzoxLTg3OjE3IiBhbGlhcz0iSiI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjE3NyIgbG9jYXRvcj0iODc6MS04NzoxNSIgbmFtZT0iSnVyaXNkaWN0aW9ucyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgIDxyZWxhdGlvbnNoaXAgbG9jYWxJZD0iMTkyIiBsb2NhdG9yPSI4ODozLTkwOjQwIiBhbGlhcz0iUEEiIHhzaTp0eXBlPSJXaXRoIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMTc5IiBsb2NhdG9yPSI4ODo4LTg4OjI0IiBuYW1lPSJQYXRpZW50IEFkZHJlc3MiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDxzdWNoVGhhdCBsb2NhbElkPSIxOTEiIGxvY2F0b3I9Ijg5OjE1LTkwOjQwIiB4c2k6dHlwZT0iQW5kIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMTg2IiBsb2NhdG9yPSI4OToxNi04OTo0NCIgeHNpOnR5cGU9IkluIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMTgzIiBsb2NhdG9yPSI4OToxNi04OToyOSIgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbG9jYWxJZD0iMTgyIiBsb2NhdG9yPSI4OToxNi04OToyMyIgcGF0aD0ic3RhdGUiIHNjb3BlPSJQQSIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBhbGlhcz0iWCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjE4NSIgbG9jYXRvcj0iODk6MzQtODk6NDQiIHBhdGg9InN0YXRlQ29kZSIgc2NvcGU9IkoiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHJldHVybiBkaXN0aW5jdD0iZmFsc2UiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJUb1N0cmluZyIgbGlicmFyeU5hbWU9IkZISVJIZWxwZXJzIiB4c2k6dHlwZT0iRnVuY3Rpb25SZWYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJYIiB4c2k6dHlwZT0iQWxpYXNSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICAgICAgICAgICAgICA8L3JldHVybj4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjE5MCIgbG9jYXRvcj0iOTA6MTEtOTA6MzkiIHhzaTp0eXBlPSJJbiI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjE4NyIgbG9jYXRvcj0iOTA6MTEtOTA6MTciIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJTVEFURSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBhbGlhcz0iWCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjE4OSIgbG9jYXRvcj0iOTA6MjItOTA6MzkiIHBhdGg9Imp1cmlzZGljdGlvblR5cGUiIHNjb3BlPSJKIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZXR1cm4gZGlzdGluY3Q9ImZhbHNlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbmFtZT0iVG9TdHJpbmciIGxpYnJhcnlOYW1lPSJGSElSSGVscGVycyIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iWCIgeHNpOnR5cGU9IkFsaWFzUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9yZXR1cm4+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8L3N1Y2hUaGF0PgogICAgICAgICAgICA8L3JlbGF0aW9uc2hpcD4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSIyMDQiIGxvY2F0b3I9IjkyOjEtOTg6NSIgbmFtZT0iQWRkcmVzcyBFeGlzdHMgaW4gSnVyaXNkaWN0aW9uIENvZGVzIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iMjA0Ij4KICAgICAgICAgICAgICAgPGE6cz5kZWZpbmUgJnF1b3Q7QWRkcmVzcyBFeGlzdHMgaW4gSnVyaXNkaWN0aW9uIENvZGVzJnF1b3Q7OgogIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzIHI9IjIwMyI+CiAgICAgICAgICAgICAgICAgIDxhOnM+ZXhpc3RzIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzIHI9IjIwMiI+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+KAogICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjAyIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxOTkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE5NyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMTk1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtFbmNvdW50ZXIgQWRkcmVzcyBTdGF0ZSBpcyBpbiBKdXJpc2RpY3Rpb24gQ29kZXMmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgIHVuaW9uIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjE5NiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7RW5jb3VudGVyIEFkZHJlc3MgUG9zdGFsIENvZGUgaXMgaW4gSnVyaXNkaWN0aW9uIENvZGVzJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICB1bmlvbiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIxOTgiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O1BhdGllbnQgQWRkcmVzcyBTdGF0ZSBpcyBpbiBKdXJpc2RpY3Rpb24gQ29kZXMmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgdW5pb24gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjAwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtQYXRpZW50IEFkZHJlc3MgUG9zdGFsIENvZGUgaXMgaW4gSnVyaXNkaWN0aW9uIENvZGVzJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICk8L2E6cz4KICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIyMDMiIGxvY2F0b3I9IjkzOjMtOTg6NSIgeHNpOnR5cGU9IkV4aXN0cyI+CiAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjIwMiIgbG9jYXRvcj0iOTM6MTAtOTg6NSIgeHNpOnR5cGU9IlVuaW9uIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMTk3IiBsb2NhdG9yPSI5NDo1LTk1OjY4IiB4c2k6dHlwZT0iVW5pb24iPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIxOTUiIGxvY2F0b3I9Ijk0OjUtOTQ6NTQiIG5hbWU9IkVuY291bnRlciBBZGRyZXNzIFN0YXRlIGlzIGluIEp1cmlzZGljdGlvbiBDb2RlcyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMTk2IiBsb2NhdG9yPSI5NToxMy05NTo2OCIgbmFtZT0iRW5jb3VudGVyIEFkZHJlc3MgUG9zdGFsIENvZGUgaXMgaW4gSnVyaXNkaWN0aW9uIENvZGVzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjIwMSIgeHNpOnR5cGU9IlVuaW9uIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMTk4IiBsb2NhdG9yPSI5NjoxNS05Njo2MiIgbmFtZT0iUGF0aWVudCBBZGRyZXNzIFN0YXRlIGlzIGluIEp1cmlzZGljdGlvbiBDb2RlcyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMjAwIiBsb2NhdG9yPSI5NzoxNy05Nzo3MCIgbmFtZT0iUGF0aWVudCBBZGRyZXNzIFBvc3RhbCBDb2RlIGlzIGluIEp1cmlzZGljdGlvbiBDb2RlcyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iMjEwIiBsb2NhdG9yPSIxMDA6MS0xMDM6NjEiIG5hbWU9IkVuY291bnRlckFkZHJlc3NKdXJpc2RpY3Rpb25zIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIiB4c2k6dHlwZT0iRnVuY3Rpb25EZWYiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSIyMTAiPgogICAgICAgICAgICAgICA8YTpzPmRlZmluZSBmdW5jdGlvbiBFbmNvdW50ZXJBZGRyZXNzSnVyaXNkaWN0aW9ucygpOgogIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzIHI9IjIwOSI+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjA5Ij4KICAgICAgICAgICAgICAgICAgICAgPGE6cz5pZiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyMDYiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPmV4aXN0cyA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyMDUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPig8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyMDUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O0VuY291bnRlciBBZGRyZXNzIFBvc3RhbCBDb2RlIGlzIGluIEp1cmlzZGljdGlvbiBDb2RlcyZxdW90OzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4pPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgIHRoZW4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjA3Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtFbmNvdW50ZXIgQWRkcmVzcyBQb3N0YWwgQ29kZSBpcyBpbiBKdXJpc2RpY3Rpb24gQ29kZXMmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgIGVsc2UgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjA4Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtFbmNvdW50ZXIgQWRkcmVzcyBTdGF0ZSBpcyBpbiBKdXJpc2RpY3Rpb24gQ29kZXMmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMjA5IiBsb2NhdG9yPSIxMDE6My0xMDM6NjEiIHhzaTp0eXBlPSJJZiI+CiAgICAgICAgICAgIDxjb25kaXRpb24gbG9jYWxJZD0iMjA2IiBsb2NhdG9yPSIxMDE6Ni0xMDE6NzAiIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIyMDUiIGxvY2F0b3I9IjEwMToxMy0xMDE6NzAiIG5hbWU9IkVuY291bnRlciBBZGRyZXNzIFBvc3RhbCBDb2RlIGlzIGluIEp1cmlzZGljdGlvbiBDb2RlcyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPC9jb25kaXRpb24+CiAgICAgICAgICAgIDx0aGVuIGxvY2FsSWQ9IjIwNyIgbG9jYXRvcj0iMTAyOjEwLTEwMjo2NSIgbmFtZT0iRW5jb3VudGVyIEFkZHJlc3MgUG9zdGFsIENvZGUgaXMgaW4gSnVyaXNkaWN0aW9uIENvZGVzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8ZWxzZSBsb2NhbElkPSIyMDgiIGxvY2F0b3I9IjEwMzoxMi0xMDM6NjEiIG5hbWU9IkVuY291bnRlciBBZGRyZXNzIFN0YXRlIGlzIGluIEp1cmlzZGljdGlvbiBDb2RlcyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSIyMTYiIGxvY2F0b3I9IjEwNToxLTEwODo1OSIgbmFtZT0iUGF0aWVudEFkZHJlc3NKdXJpc2RpY3Rpb25zIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIiB4c2k6dHlwZT0iRnVuY3Rpb25EZWYiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSIyMTYiPgogICAgICAgICAgICAgICA8YTpzPmRlZmluZSBmdW5jdGlvbiBQYXRpZW50QWRkcmVzc0p1cmlzZGljdGlvbnMoKToKICA8L2E6cz4KICAgICAgICAgICAgICAgPGE6cyByPSIyMTUiPgogICAgICAgICAgICAgICAgICA8YTpzIHI9IjIxNSI+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+aWYgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjEyIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5leGlzdHMgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjExIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4oPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjExIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtQYXRpZW50IEFkZHJlc3MgUG9zdGFsIENvZGUgaXMgaW4gSnVyaXNkaWN0aW9uIENvZGVzJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPik8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgdGhlbiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyMTMiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O1BhdGllbnQgQWRkcmVzcyBQb3N0YWwgQ29kZSBpcyBpbiBKdXJpc2RpY3Rpb24gQ29kZXMmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgIGVsc2UgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjE0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtQYXRpZW50IEFkZHJlc3MgU3RhdGUgaXMgaW4gSnVyaXNkaWN0aW9uIENvZGVzJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgIDwvYTpzPgogICAgICAgICA8L2Fubm90YXRpb24+CiAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjIxNSIgbG9jYXRvcj0iMTA2OjMtMTA4OjU5IiB4c2k6dHlwZT0iSWYiPgogICAgICAgICAgICA8Y29uZGl0aW9uIGxvY2FsSWQ9IjIxMiIgbG9jYXRvcj0iMTA2OjYtMTA2OjY4IiB4c2k6dHlwZT0iRXhpc3RzIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMjExIiBsb2NhdG9yPSIxMDY6MTMtMTA2OjY4IiBuYW1lPSJQYXRpZW50IEFkZHJlc3MgUG9zdGFsIENvZGUgaXMgaW4gSnVyaXNkaWN0aW9uIENvZGVzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8L2NvbmRpdGlvbj4KICAgICAgICAgICAgPHRoZW4gbG9jYWxJZD0iMjEzIiBsb2NhdG9yPSIxMDc6MTAtMTA3OjYzIiBuYW1lPSJQYXRpZW50IEFkZHJlc3MgUG9zdGFsIENvZGUgaXMgaW4gSnVyaXNkaWN0aW9uIENvZGVzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8ZWxzZSBsb2NhbElkPSIyMTQiIGxvY2F0b3I9IjEwODoxMi0xMDg6NTkiIG5hbWU9IlBhdGllbnQgQWRkcmVzcyBTdGF0ZSBpcyBpbiBKdXJpc2RpY3Rpb24gQ29kZXMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iMjE4IiBsb2NhdG9yPSIxMTA6MS0xMTE6MzMiIG5hbWU9Ikp1cmlzZGljdGlvbiBDb2RlcyBSZWxldmFudCB0byBFbmNvdW50ZXIgQWRkcmVzc2VzIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iMjE4Ij4KICAgICAgICAgICAgICAgPGE6cz5kZWZpbmUgJnF1b3Q7SnVyaXNkaWN0aW9uIENvZGVzIFJlbGV2YW50IHRvIEVuY291bnRlciBBZGRyZXNzZXMmcXVvdDs6CiAgPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iMjE3Ij4KICAgICAgICAgICAgICAgICAgPGE6cz5FbmNvdW50ZXJBZGRyZXNzSnVyaXNkaWN0aW9ucygpPC9hOnM+CiAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIyMTciIGxvY2F0b3I9IjExMTozLTExMTozMyIgbmFtZT0iRW5jb3VudGVyQWRkcmVzc0p1cmlzZGljdGlvbnMiIHhzaTp0eXBlPSJGdW5jdGlvblJlZiIvPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSIyMjAiIGxvY2F0b3I9IjExMzoxLTExNDozMSIgbmFtZT0iSnVyaXNkaWN0aW9uIENvZGVzIFJlbGV2YW50IHRvIFBhdGllbnQgQWRkcmVzc2VzIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iMjIwIj4KICAgICAgICAgICAgICAgPGE6cz5kZWZpbmUgJnF1b3Q7SnVyaXNkaWN0aW9uIENvZGVzIFJlbGV2YW50IHRvIFBhdGllbnQgQWRkcmVzc2VzJnF1b3Q7OgogIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzIHI9IjIxOSI+CiAgICAgICAgICAgICAgICAgIDxhOnM+UGF0aWVudEFkZHJlc3NKdXJpc2RpY3Rpb25zKCk8L2E6cz4KICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgIDwvYTpzPgogICAgICAgICA8L2Fubm90YXRpb24+CiAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjIxOSIgbG9jYXRvcj0iMTE0OjMtMTE0OjMxIiBuYW1lPSJQYXRpZW50QWRkcmVzc0p1cmlzZGljdGlvbnMiIHhzaTp0eXBlPSJGdW5jdGlvblJlZiIvPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSIyNDQiIGxvY2F0b3I9IjExNjoxLTEyODo1IiBuYW1lPSJJbmRldGVybWluYXRlIENobGFteWRpYSBUZXN0IFJlc3VsdHMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSIyNDQiPgogICAgICAgICAgICAgICA8YTpzPmRlZmluZSAmcXVvdDtJbmRldGVybWluYXRlIENobGFteWRpYSBUZXN0IFJlc3VsdHMmcXVvdDs6CiAgPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iMjQzIj4KICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyMjIiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjIyMSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7Q2hsYW15ZGlhIFRlc3QgUmVzdWx0cyZxdW90OzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IE88L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzPgogICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+bGV0IDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjIyNCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+b3JnYW5pemF0aW9uOiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyMjMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPltPcmdhbml6YXRpb25dPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNDIiPgogICAgICAgICAgICAgICAgICAgICA8YTpzPndoZXJlIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI0MiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+KAogICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNDIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI0MCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+KAogICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI0MCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjMzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5leGlzdHMgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjMyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4oCiAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjIzMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjI2Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyMjUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPk8uaW50ZXJwcmV0YXRpb248L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiBpbnRlcnByZXRhdGlvbkNvbmNlcHQ8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjIzMSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+d2hlcmUgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjMxIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyMjkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjIyNyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+aW50ZXJwcmV0YXRpb25Db25jZXB0PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiBhcyA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyMjgiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPkNvZGVhYmxlQ29uY2VwdDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IGluIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjIzMCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7SW5kZXRlcm1pbmF0ZSBvciBFcXVpdm9jYWwgTGFiIFJlc3VsdCBWYWx1ZSZxdW90OzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICApPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgIG9yIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjIzOSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjM3Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyMzUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjIzNCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+TzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjM1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz52YWx1ZTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IGFzIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjIzNiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+Q29kZWFibGVDb25jZXB0PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gaW4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjM4Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtJbmRldGVybWluYXRlIG9yIEVxdWl2b2NhbCBMYWIgUmVzdWx0IFZhbHVlJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICk8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgYW5kIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI0MSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7QWRkcmVzcyBFeGlzdHMgaW4gSnVyaXNkaWN0aW9uIENvZGVzJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICk8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMjQzIiBsb2NhdG9yPSIxMTc6My0xMjg6NSIgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgPHNvdXJjZSBsb2NhbElkPSIyMjIiIGxvY2F0b3I9IjExNzozLTExNzoyOCIgYWxpYXM9Ik8iPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIyMjEiIGxvY2F0b3I9IjExNzozLTExNzoyNiIgbmFtZT0iQ2hsYW15ZGlhIFRlc3QgUmVzdWx0cyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgIDxsZXQgbG9jYWxJZD0iMjI0IiBsb2NhdG9yPSIxMTg6OS0xMTg6MzYiIGlkZW50aWZpZXI9Im9yZ2FuaXphdGlvbiI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjIyMyIgbG9jYXRvcj0iMTE4OjIzLTExODozNiIgZGF0YVR5cGU9ImZoaXI6T3JnYW5pemF0aW9uIiB0ZW1wbGF0ZUlkPSJodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vT3JnYW5pemF0aW9uIiB4c2k6dHlwZT0iUmV0cmlldmUiLz4KICAgICAgICAgICAgPC9sZXQ+CiAgICAgICAgICAgIDx3aGVyZSBsb2NhbElkPSIyNDIiIGxvY2F0b3I9IjExOTo1LTEyODo1IiB4c2k6dHlwZT0iQW5kIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMjQwIiBsb2NhdG9yPSIxMjA6Ny0xMjY6NyIgeHNpOnR5cGU9Ik9yIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMjMzIiBsb2NhdG9yPSIxMjE6OS0xMjQ6OSIgeHNpOnR5cGU9IkV4aXN0cyI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjIzMiIgbG9jYXRvcj0iMTIxOjE2LTEyNDo5IiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIGxvY2FsSWQ9IjIyNiIgbG9jYXRvcj0iMTIyOjEzLTEyMjo1MCIgYWxpYXM9ImludGVycHJldGF0aW9uQ29uY2VwdCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjIyNSIgbG9jYXRvcj0iMTIyOjEzLTEyMjoyOCIgcGF0aD0iaW50ZXJwcmV0YXRpb24iIHNjb3BlPSJPIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDx3aGVyZSBsb2NhbElkPSIyMzEiIGxvY2F0b3I9IjEyMzoxNS0xMjM6MTA5IiB4c2k6dHlwZT0iSW5WYWx1ZVNldCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlIG5hbWU9IlRvQ29uY2VwdCIgbGlicmFyeU5hbWU9IkZISVJIZWxwZXJzIiB4c2k6dHlwZT0iRnVuY3Rpb25SZWYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIyMjkiIGxvY2F0b3I9IjEyMzoyMS0xMjM6NjAiIHN0cmljdD0iZmFsc2UiIHhzaTp0eXBlPSJBcyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjIyNyIgbG9jYXRvcj0iMTIzOjIxLTEyMzo0MSIgbmFtZT0iaW50ZXJwcmV0YXRpb25Db25jZXB0IiB4c2k6dHlwZT0iQWxpYXNSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFzVHlwZVNwZWNpZmllciBsb2NhbElkPSIyMjgiIGxvY2F0b3I9IjEyMzo0Ni0xMjM6NjAiIG5hbWU9ImZoaXI6Q29kZWFibGVDb25jZXB0IiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jb2RlPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFsdWVzZXQgbG9jYWxJZD0iMjMwIiBsb2NhdG9yPSIxMjM6NjUtMTIzOjEwOSIgbmFtZT0iSW5kZXRlcm1pbmF0ZSBvciBFcXVpdm9jYWwgTGFiIFJlc3VsdCBWYWx1ZSIgcHJlc2VydmU9InRydWUiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjIzOSIgbG9jYXRvcj0iMTI1OjE0LTEyNTo4OCIgeHNpOnR5cGU9IkluVmFsdWVTZXQiPgogICAgICAgICAgICAgICAgICAgICA8Y29kZSBuYW1lPSJUb0NvbmNlcHQiIGxpYnJhcnlOYW1lPSJGSElSSGVscGVycyIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMjM3IiBsb2NhdG9yPSIxMjU6MTQtMTI1OjM5IiBzdHJpY3Q9ImZhbHNlIiB4c2k6dHlwZT0iQXMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIyMzUiIGxvY2F0b3I9IjEyNToxNC0xMjU6MjAiIHBhdGg9InZhbHVlIiBzY29wZT0iTyIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhc1R5cGVTcGVjaWZpZXIgbG9jYWxJZD0iMjM2IiBsb2NhdG9yPSIxMjU6MjUtMTI1OjM5IiBuYW1lPSJmaGlyOkNvZGVhYmxlQ29uY2VwdCIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgIDwvY29kZT4KICAgICAgICAgICAgICAgICAgICAgPHZhbHVlc2V0IGxvY2FsSWQ9IjIzOCIgbG9jYXRvcj0iMTI1OjQ0LTEyNTo4OCIgbmFtZT0iSW5kZXRlcm1pbmF0ZSBvciBFcXVpdm9jYWwgTGFiIFJlc3VsdCBWYWx1ZSIgcHJlc2VydmU9InRydWUiLz4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjI0MSIgbG9jYXRvcj0iMTI3OjEzLTEyNzo1MCIgbmFtZT0iQWRkcmVzcyBFeGlzdHMgaW4gSnVyaXNkaWN0aW9uIENvZGVzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8L3doZXJlPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIGxvY2FsSWQ9IjI2OCIgbG9jYXRvcj0iMTMwOjEtMTQyOjUiIG5hbWU9Ik5lZ2F0aXZlIENobGFteWRpYSBUZXN0IFJlc3VsdHMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSIyNjgiPgogICAgICAgICAgICAgICA8YTpzPmRlZmluZSAmcXVvdDtOZWdhdGl2ZSBDaGxhbXlkaWEgVGVzdCBSZXN1bHRzJnF1b3Q7OgogIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzIHI9IjI2NyI+CiAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjQ2Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNDUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O0NobGFteWRpYSBUZXN0IFJlc3VsdHMmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiBPPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgPGE6cz4KICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzPmxldCA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNDgiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPm9yZ2FuaXphdGlvbjogPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjQ3Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5bT3JnYW5pemF0aW9uXTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzPgogICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjY2Ij4KICAgICAgICAgICAgICAgICAgICAgPGE6cz53aGVyZSA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNjYiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPigKICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjY2Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNjQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPigKICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNjQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI1NyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+ZXhpc3RzIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI1NiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+KAogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNTYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI1MCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjQ5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5PLmludGVycHJldGF0aW9uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gaW50ZXJwcmV0YXRpb25Db25jZXB0PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNTUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPndoZXJlIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI1NSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjUzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNTEiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPmludGVycHJldGF0aW9uQ29uY2VwdDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gYXMgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjUyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5Db2RlYWJsZUNvbmNlcHQ8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiBpbiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNTQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O05lZ2F0aXZlIG9yIFVuZGV0ZWN0ZWQgTGFiIFJlc3VsdCBWYWx1ZSZxdW90OzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICApPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgIG9yIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI2MyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjYxIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNTkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI1OCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+TzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjU5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz52YWx1ZTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IGFzIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI2MCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+Q29kZWFibGVDb25jZXB0PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gaW4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjYyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtOZWdhdGl2ZSBvciBVbmRldGVjdGVkIExhYiBSZXN1bHQgVmFsdWUmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgKTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICBhbmQgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjY1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtBZGRyZXNzIEV4aXN0cyBpbiBKdXJpc2RpY3Rpb24gQ29kZXMmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgKTwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIyNjciIGxvY2F0b3I9IjEzMTozLTE0Mjo1IiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGxvY2FsSWQ9IjI0NiIgbG9jYXRvcj0iMTMxOjMtMTMxOjI4IiBhbGlhcz0iTyI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjI0NSIgbG9jYXRvcj0iMTMxOjMtMTMxOjI2IiBuYW1lPSJDaGxhbXlkaWEgVGVzdCBSZXN1bHRzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgPGxldCBsb2NhbElkPSIyNDgiIGxvY2F0b3I9IjEzMjo5LTEzMjozNiIgaWRlbnRpZmllcj0ib3JnYW5pemF0aW9uIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMjQ3IiBsb2NhdG9yPSIxMzI6MjMtMTMyOjM2IiBkYXRhVHlwZT0iZmhpcjpPcmdhbml6YXRpb24iIHRlbXBsYXRlSWQ9Imh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9Pcmdhbml6YXRpb24iIHhzaTp0eXBlPSJSZXRyaWV2ZSIvPgogICAgICAgICAgICA8L2xldD4KICAgICAgICAgICAgPHdoZXJlIGxvY2FsSWQ9IjI2NiIgbG9jYXRvcj0iMTMzOjUtMTQyOjUiIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIyNjQiIGxvY2F0b3I9IjEzNDo3LTE0MDo3IiB4c2k6dHlwZT0iT3IiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIyNTciIGxvY2F0b3I9IjEzNTo5LTEzODo5IiB4c2k6dHlwZT0iRXhpc3RzIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMjU2IiBsb2NhdG9yPSIxMzU6MTYtMTM4OjkiIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbG9jYWxJZD0iMjUwIiBsb2NhdG9yPSIxMzY6MTMtMTM2OjUwIiBhbGlhcz0iaW50ZXJwcmV0YXRpb25Db25jZXB0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMjQ5IiBsb2NhdG9yPSIxMzY6MTMtMTM2OjI4IiBwYXRoPSJpbnRlcnByZXRhdGlvbiIgc2NvcGU9Ik8iIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHdoZXJlIGxvY2FsSWQ9IjI1NSIgbG9jYXRvcj0iMTM3OjE1LTEzNzoxMDUiIHhzaTp0eXBlPSJJblZhbHVlU2V0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGUgbmFtZT0iVG9Db25jZXB0IiBsaWJyYXJ5TmFtZT0iRkhJUkhlbHBlcnMiIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjI1MyIgbG9jYXRvcj0iMTM3OjIxLTEzNzo2MCIgc3RyaWN0PSJmYWxzZSIgeHNpOnR5cGU9IkFzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMjUxIiBsb2NhdG9yPSIxMzc6MjEtMTM3OjQxIiBuYW1lPSJpbnRlcnByZXRhdGlvbkNvbmNlcHQiIHhzaTp0eXBlPSJBbGlhc1JlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXNUeXBlU3BlY2lmaWVyIGxvY2FsSWQ9IjI1MiIgbG9jYXRvcj0iMTM3OjQ2LTEzNzo2MCIgbmFtZT0iZmhpcjpDb2RlYWJsZUNvbmNlcHQiIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NvZGU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZXNldCBsb2NhbElkPSIyNTQiIGxvY2F0b3I9IjEzNzo2NS0xMzc6MTA1IiBuYW1lPSJOZWdhdGl2ZSBvciBVbmRldGVjdGVkIExhYiBSZXN1bHQgVmFsdWUiIHByZXNlcnZlPSJ0cnVlIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIyNjMiIGxvY2F0b3I9IjEzOToxNC0xMzk6ODQiIHhzaTp0eXBlPSJJblZhbHVlU2V0Ij4KICAgICAgICAgICAgICAgICAgICAgPGNvZGUgbmFtZT0iVG9Db25jZXB0IiBsaWJyYXJ5TmFtZT0iRkhJUkhlbHBlcnMiIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjI2MSIgbG9jYXRvcj0iMTM5OjE0LTEzOTozOSIgc3RyaWN0PSJmYWxzZSIgeHNpOnR5cGU9IkFzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMjU5IiBsb2NhdG9yPSIxMzk6MTQtMTM5OjIwIiBwYXRoPSJ2YWx1ZSIgc2NvcGU9Ik8iIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YXNUeXBlU3BlY2lmaWVyIGxvY2FsSWQ9IjI2MCIgbG9jYXRvcj0iMTM5OjI1LTEzOTozOSIgbmFtZT0iZmhpcjpDb2RlYWJsZUNvbmNlcHQiIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICA8L2NvZGU+CiAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZXNldCBsb2NhbElkPSIyNjIiIGxvY2F0b3I9IjEzOTo0NC0xMzk6ODQiIG5hbWU9Ik5lZ2F0aXZlIG9yIFVuZGV0ZWN0ZWQgTGFiIFJlc3VsdCBWYWx1ZSIgcHJlc2VydmU9InRydWUiLz4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjI2NSIgbG9jYXRvcj0iMTQxOjEzLTE0MTo1MCIgbmFtZT0iQWRkcmVzcyBFeGlzdHMgaW4gSnVyaXNkaWN0aW9uIENvZGVzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8L3doZXJlPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIGxvY2FsSWQ9IjI4NiIgbG9jYXRvcj0iMTQ0OjEtMTQ2Ojc2IiBuYW1lPSJSZXBvcnRhYmxlIFRyaWdnZXJpbmcgQ29kZXMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSIyODYiPgogICAgICAgICAgICAgICA8YTpzPmRlZmluZSAmcXVvdDtSZXBvcnRhYmxlIFRyaWdnZXJpbmcgQ29kZXMmcXVvdDs6CiAgPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iMjg1Ij4KICAgICAgICAgICAgICAgICAgPGE6cz5mbGF0dGVuIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzIHI9IjI4NCI+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjc1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4oPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjc1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNzAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI2OSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7SW5kZXRlcm1pbmF0ZSBDaGxhbXlkaWEgVGVzdCBSZXN1bHRzJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gTzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI3NCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+cmV0dXJuIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI3MyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjcyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNzEiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPk88L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI3MiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+Y29kZTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI3MyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+Y29kaW5nPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPik8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICB1bmlvbiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyODMiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPmZsYXR0ZW4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjgyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4oPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjgyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNzciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI3NiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7TmVnYXRpdmUgQ2hsYW15ZGlhIFRlc3QgUmVzdWx0cyZxdW90OzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IE88L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyODEiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnJldHVybiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyODAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI3OSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjc4Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5PPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyNzkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPmNvZGU8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyODAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPmNvZGluZzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4pPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIyODUiIGxvY2F0b3I9IjE0NTozLTE0Njo3NiIgeHNpOnR5cGU9IkZsYXR0ZW4iPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICAgICA8c291cmNlIGFsaWFzPSJYIj4KICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMjg0IiBsb2NhdG9yPSIxNDU6MTEtMTQ2Ojc2IiB4c2k6dHlwZT0iVW5pb24iPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iQXMiPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIyNzUiIGxvY2F0b3I9IjE0NToxMS0xNDU6NzMiIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbG9jYWxJZD0iMjcwIiBsb2NhdG9yPSIxNDU6MTItMTQ1OjUxIiBhbGlhcz0iTyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjI2OSIgbG9jYXRvcj0iMTQ1OjEyLTE0NTo0OSIgbmFtZT0iSW5kZXRlcm1pbmF0ZSBDaGxhbXlkaWEgVGVzdCBSZXN1bHRzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJldHVybiBsb2NhbElkPSIyNzQiIGxvY2F0b3I9IjE0NTo1My0xNDU6NzIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIyNzMiIGxvY2F0b3I9IjE0NTo2MC0xNDU6NzIiIHBhdGg9ImNvZGluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBsb2NhbElkPSIyNzIiIGxvY2F0b3I9IjE0NTo2MC0xNDU6NjUiIHBhdGg9ImNvZGUiIHNjb3BlPSJPIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JldHVybj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICA8YXNUeXBlU3BlY2lmaWVyIHhzaTp0eXBlPSJMaXN0VHlwZVNwZWNpZmllciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbGVtZW50VHlwZSB4c2k6dHlwZT0iQ2hvaWNlVHlwZVNwZWNpZmllciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaG9pY2UgeHNpOnR5cGU9Ikxpc3RUeXBlU3BlY2lmaWVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVsZW1lbnRUeXBlIG5hbWU9ImZoaXI6Q29kaW5nIiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY2hvaWNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2hvaWNlIG5hbWU9ImZoaXI6Q29kaW5nIiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZWxlbWVudFR5cGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXNUeXBlU3BlY2lmaWVyPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJBcyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjI4MyIgbG9jYXRvcj0iMTQ2OjExLTE0Njo3NiIgeHNpOnR5cGU9IkZsYXR0ZW4iPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIyODIiIGxvY2F0b3I9IjE0NjoxOS0xNDY6NzYiIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbG9jYWxJZD0iMjc3IiBsb2NhdG9yPSIxNDY6MjAtMTQ2OjU0IiBhbGlhcz0iTyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjI3NiIgbG9jYXRvcj0iMTQ2OjIwLTE0Njo1MiIgbmFtZT0iTmVnYXRpdmUgQ2hsYW15ZGlhIFRlc3QgUmVzdWx0cyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZXR1cm4gbG9jYWxJZD0iMjgxIiBsb2NhdG9yPSIxNDY6NTYtMTQ2Ojc1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMjgwIiBsb2NhdG9yPSIxNDY6NjMtMTQ2Ojc1IiBwYXRoPSJjb2RpbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbG9jYWxJZD0iMjc5IiBsb2NhdG9yPSIxNDY6NjMtMTQ2OjY4IiBwYXRoPSJjb2RlIiBzY29wZT0iTyIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yZXR1cm4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICA8YXNUeXBlU3BlY2lmaWVyIHhzaTp0eXBlPSJMaXN0VHlwZVNwZWNpZmllciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbGVtZW50VHlwZSB4c2k6dHlwZT0iQ2hvaWNlVHlwZVNwZWNpZmllciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaG9pY2UgeHNpOnR5cGU9Ikxpc3RUeXBlU3BlY2lmaWVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVsZW1lbnRUeXBlIG5hbWU9ImZoaXI6Q29kaW5nIiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY2hvaWNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2hvaWNlIG5hbWU9ImZoaXI6Q29kaW5nIiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZWxlbWVudFR5cGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXNUeXBlU3BlY2lmaWVyPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgIDxyZXR1cm4gZGlzdGluY3Q9ImZhbHNlIj4KICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkFzIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iWCIgeHNpOnR5cGU9IkFsaWFzUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgIDxhc1R5cGVTcGVjaWZpZXIgeHNpOnR5cGU9Ikxpc3RUeXBlU3BlY2lmaWVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGVsZW1lbnRUeXBlIG5hbWU9ImZoaXI6Q29kaW5nIiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgICAgICAgICAgICAgIDwvYXNUeXBlU3BlY2lmaWVyPgogICAgICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgICAgIDwvcmV0dXJuPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iMjkzIiBsb2NhdG9yPSIxNzY6MS0xNzk6NDkiIG5hbWU9IkVuY291bnRlciBJbiBDb250ZXh0IiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iMjkzIj4KICAgICAgICAgICAgICAgPGE6cz5kZWZpbmUgJnF1b3Q7RW5jb3VudGVyIEluIENvbnRleHQmcXVvdDs6CiAgPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iMjkyIj4KICAgICAgICAgICAgICAgICAgPGE6cz5pZiA8L2E6cz4KICAgICAgICAgICAgICAgICAgPGE6cyByPSIyODgiPgogICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI4NyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7VHJpZ2dlcmluZyBFbmNvdW50ZXImcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+IGlzIG5vdCBudWxsPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzPgogICAgdGhlbiA8L2E6cz4KICAgICAgICAgICAgICAgICAgPGE6cyByPSIyODkiPgogICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O1RyaWdnZXJpbmcgRW5jb3VudGVyJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzPgogICAgICBlbHNlIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzIHI9IjI5MSI+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+c2luZ2xldG9uIGZyb20gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjkwIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtUcmlnZ2VyaW5nIEVuY291bnRlcnMmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMjkyIiBsb2NhdG9yPSIxNzc6My0xNzk6NDkiIHhzaTp0eXBlPSJJZiI+CiAgICAgICAgICAgIDxjb25kaXRpb24gbG9jYWxJZD0iMjg4IiBsb2NhdG9yPSIxNzc6Ni0xNzc6MzkiIHhzaTp0eXBlPSJOb3QiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhdG9yPSIxNzc6Ni0xNzc6MzkiIHhzaTp0eXBlPSJJc051bGwiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIyODciIGxvY2F0b3I9IjE3Nzo2LTE3NzoyNyIgbmFtZT0iVHJpZ2dlcmluZyBFbmNvdW50ZXIiIHhzaTp0eXBlPSJQYXJhbWV0ZXJSZWYiLz4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8L2NvbmRpdGlvbj4KICAgICAgICAgICAgPHRoZW4gbG9jYWxJZD0iMjg5IiBsb2NhdG9yPSIxNzg6MTAtMTc4OjMxIiBuYW1lPSJUcmlnZ2VyaW5nIEVuY291bnRlciIgeHNpOnR5cGU9IlBhcmFtZXRlclJlZiIvPgogICAgICAgICAgICA8ZWxzZSBsb2NhbElkPSIyOTEiIGxvY2F0b3I9IjE3OToxMi0xNzk6NDkiIHhzaTp0eXBlPSJTaW5nbGV0b25Gcm9tIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMjkwIiBsb2NhdG9yPSIxNzk6MjctMTc5OjQ5IiBuYW1lPSJUcmlnZ2VyaW5nIEVuY291bnRlcnMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgIDwvZWxzZT4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSIzMTAiIGxvY2F0b3I9IjE2ODoxLTE3NDozIiBuYW1lPSJDdXJyZW50IEVuY291bnRlciBEdXJhdGlvbiIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyIgeHNpOnR5cGU9IkZ1bmN0aW9uRGVmIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iMzEwIj4KICAgICAgICAgICAgICAgPGE6cz5kZWZpbmUgZnVuY3Rpb24gJnF1b3Q7Q3VycmVudCBFbmNvdW50ZXIgRHVyYXRpb24mcXVvdDsoZW5jb3VudGVyIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzIHI9IjI5NSI+CiAgICAgICAgICAgICAgICAgIDxhOnM+RW5jb3VudGVyPC9hOnM+CiAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzPik6CiAgPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iMzA5Ij4KICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMDkiPgogICAgICAgICAgICAgICAgICAgICA8YTpzPlF1YW50aXR5IHsKICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnZhbHVlOiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMDYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPmRlY2ltYWwgewogICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz52YWx1ZTogPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzA1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5kdXJhdGlvbiBpbiBkYXlzIGJldHdlZW4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjk4Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyOTciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI5NiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+ZW5jb3VudGVyPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyOTciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnBlcmlvZDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjI5OCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+c3RhcnQ8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiBhbmQgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzA0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5Db2FsZXNjZSg8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMDIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjMwMSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzAwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIyOTkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPmVuY291bnRlcjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzAwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5wZXJpb2Q8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMDEiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPmVuZDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjMwMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+dmFsdWU8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiwgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzAzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5Ob3coKTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4pPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICB9PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cz4sCiAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz51bml0OiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMDgiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnN0cmluZyB7IDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnZhbHVlOiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMDciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPidkYXlzJzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IH08L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzPgogIH08L2E6cz4KICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIzMDkiIGxvY2F0b3I9IjE2OTozLTE3NDozIiBjbGFzc1R5cGU9ImZoaXI6UXVhbnRpdHkiIHhzaTp0eXBlPSJJbnN0YW5jZSI+CiAgICAgICAgICAgIDxlbGVtZW50IG5hbWU9InZhbHVlIj4KICAgICAgICAgICAgICAgPHZhbHVlIGxvY2FsSWQ9IjMwNiIgbG9jYXRvcj0iMTcwOjEyLTE3Mjo1IiBjbGFzc1R5cGU9ImZoaXI6ZGVjaW1hbCIgeHNpOnR5cGU9Ikluc3RhbmNlIj4KICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0idmFsdWUiPgogICAgICAgICAgICAgICAgICAgICA8dmFsdWUgeHNpOnR5cGU9IlRvRGVjaW1hbCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjMwNSIgbG9jYXRvcj0iMTcxOjE0LTE3MToxMDgiIHByZWNpc2lvbj0iRGF5IiB4c2k6dHlwZT0iRHVyYXRpb25CZXR3ZWVuIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVG9EYXRlVGltZSIgbGlicmFyeU5hbWU9IkZISVJIZWxwZXJzIiB4c2k6dHlwZT0iRnVuY3Rpb25SZWYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIyOTgiIGxvY2F0b3I9IjE3MTozOS0xNzE6NjAiIHBhdGg9InN0YXJ0IiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIGxvY2FsSWQ9IjI5NyIgbG9jYXRvcj0iMTcxOjM5LTE3MTo1NCIgcGF0aD0icGVyaW9kIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIGxvY2FsSWQ9IjI5NiIgbG9jYXRvcj0iMTcxOjM5LTE3MTo0NyIgbmFtZT0iZW5jb3VudGVyIiB4c2k6dHlwZT0iT3BlcmFuZFJlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjMwNCIgbG9jYXRvcj0iMTcxOjY2LTE3MToxMDgiIHhzaTp0eXBlPSJDb2FsZXNjZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjMwMiIgbG9jYXRvcj0iMTcxOjc1LTE3MToxMDAiIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIGxvY2FsSWQ9IjMwMSIgbG9jYXRvcj0iMTcxOjc1LTE3MTo5NCIgcGF0aD0iZW5kIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIGxvY2FsSWQ9IjMwMCIgbG9jYXRvcj0iMTcxOjc1LTE3MTo5MCIgcGF0aD0icGVyaW9kIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIGxvY2FsSWQ9IjI5OSIgbG9jYXRvcj0iMTcxOjc1LTE3MTo4MyIgbmFtZT0iZW5jb3VudGVyIiB4c2k6dHlwZT0iT3BlcmFuZFJlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMzAzIiBsb2NhdG9yPSIxNzE6MTAzLTE3MToxMDciIHhzaTp0eXBlPSJOb3ciLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+CiAgICAgICAgICAgICAgICAgIDwvZWxlbWVudD4KICAgICAgICAgICAgICAgPC92YWx1ZT4KICAgICAgICAgICAgPC9lbGVtZW50PgogICAgICAgICAgICA8ZWxlbWVudCBuYW1lPSJ1bml0Ij4KICAgICAgICAgICAgICAgPHZhbHVlIGxvY2FsSWQ9IjMwOCIgbG9jYXRvcj0iMTczOjExLTE3MzozNCIgY2xhc3NUeXBlPSJmaGlyOnN0cmluZyIgeHNpOnR5cGU9Ikluc3RhbmNlIj4KICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0idmFsdWUiPgogICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbG9jYWxJZD0iMzA3IiBsb2NhdG9yPSIxNzM6MjctMTczOjMyIiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iZGF5cyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgPC9lbGVtZW50PgogICAgICAgICAgICAgICA8L3ZhbHVlPgogICAgICAgICAgICA8L2VsZW1lbnQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgPG9wZXJhbmQgbmFtZT0iZW5jb3VudGVyIj4KICAgICAgICAgICAgPG9wZXJhbmRUeXBlU3BlY2lmaWVyIGxvY2FsSWQ9IjI5NSIgbG9jYXRvcj0iMTY4OjU2LTE2ODo2NCIgbmFtZT0iZmhpcjpFbmNvdW50ZXIiIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgPC9vcGVyYW5kPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSIzMTQiIGxvY2F0b3I9IjE0OToxLTE1MDo4MyIgbmFtZT0iSXMgRW5jb3VudGVyIFdpdGhpbiBOb3JtYWwgUmVwb3J0aW5nIER1cmF0aW9uPyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxhbm5vdGF0aW9uIHhzaTp0eXBlPSJhOkFubm90YXRpb24iPgogICAgICAgICAgICA8YTpzIHI9IjMxNCI+CiAgICAgICAgICAgICAgIDxhOnM+Ly8gLi4uIHJlcG9ydGFibGUgdHJpZ2dlcmluZyBjb2RlcyBmb3Igb3RoZXIgY29uZGl0aW9ucwpkZWZpbmUgJnF1b3Q7SXMgRW5jb3VudGVyIFdpdGhpbiBOb3JtYWwgUmVwb3J0aW5nIER1cmF0aW9uPyZxdW90OzoKICA8L2E6cz4KICAgICAgICAgICAgICAgPGE6cyByPSIzMTMiPgogICAgICAgICAgICAgICAgICA8YTpzIHI9IjMxMSI+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7Q3VycmVudCBFbmNvdW50ZXIgRHVyYXRpb24mcXVvdDsoPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMjk0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtFbmNvdW50ZXIgSW4gQ29udGV4dCZxdW90OzwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cz4pPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzPiAmbHQ7PSA8L2E6cz4KICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMTIiPgogICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O25vcm1hbFJlcG9ydGluZ0R1cmF0aW9uJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMzEzIiBsb2NhdG9yPSIxNTA6My0xNTA6ODMiIHhzaTp0eXBlPSJMZXNzT3JFcXVhbCI+CiAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlRvUXVhbnRpdHkiIGxpYnJhcnlOYW1lPSJGSElSSGVscGVycyIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMzExIiBsb2NhdG9yPSIxNTA6My0xNTA6NTQiIG5hbWU9IkN1cnJlbnQgRW5jb3VudGVyIER1cmF0aW9uIiB4c2k6dHlwZT0iRnVuY3Rpb25SZWYiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIyOTQiIGxvY2F0b3I9IjE1MDozMi0xNTA6NTMiIG5hbWU9IkVuY291bnRlciBJbiBDb250ZXh0IiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMzEyIiBsb2NhdG9yPSIxNTA6NTktMTUwOjgzIiBuYW1lPSJub3JtYWxSZXBvcnRpbmdEdXJhdGlvbiIgeHNpOnR5cGU9IlBhcmFtZXRlclJlZiIvPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIGxvY2FsSWQ9IjMxNyIgbG9jYXRvcj0iMTk4OjEtMTk5OjM1IiBuYW1lPSJlSUNSIENvbXBvc2l0aW9ucyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxhbm5vdGF0aW9uIHhzaTp0eXBlPSJhOkFubm90YXRpb24iPgogICAgICAgICAgICA8YTpzIHI9IjMxNyI+CiAgICAgICAgICAgICAgIDxhOnM+ZGVmaW5lICZxdW90O2VJQ1IgQ29tcG9zaXRpb25zJnF1b3Q7OgogIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzIHI9IjMxNiI+CiAgICAgICAgICAgICAgICAgIDxhOnM+W0NvbXBvc2l0aW9uIDogPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7ZUlDUkNvbXBvc2l0aW9uJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzPl08L2E6cz4KICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgIDwvYTpzPgogICAgICAgICA8L2Fubm90YXRpb24+CiAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjMxNiIgbG9jYXRvcj0iMTk5OjMtMTk5OjM1IiBkYXRhVHlwZT0iZmhpcjpDb21wb3NpdGlvbiIgdGVtcGxhdGVJZD0iaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL0NvbXBvc2l0aW9uIiBjb2RlUHJvcGVydHk9InR5cGUiIGNvZGVDb21wYXJhdG9yPSJ+IiB4c2k6dHlwZT0iUmV0cmlldmUiPgogICAgICAgICAgICA8Y29kZXMgeHNpOnR5cGU9IlRvTGlzdCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2F0b3I9IjE5OToxOC0xOTk6MzQiIG5hbWU9ImVJQ1JDb21wb3NpdGlvbiIgeHNpOnR5cGU9IkNvZGVSZWYiLz4KICAgICAgICAgICAgPC9jb2Rlcz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSIzNDIiIGxvY2F0b3I9IjE1OToxLTE2NjozIiBuYW1lPSJFeGlzdGluZyBSZXBvcnRhYmxlIFRyaWdnZXJpbmcgQ29kZXMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSIzNDIiPgogICAgICAgICAgICAgICA8YTpzPmRlZmluZSAmcXVvdDtFeGlzdGluZyBSZXBvcnRhYmxlIFRyaWdnZXJpbmcgQ29kZXMmcXVvdDs6CiAgPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iMzQxIj4KICAgICAgICAgICAgICAgICAgPGE6cz5mbGF0dGVuIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzIHI9IjM0MCI+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+KAogICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzQwIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMTkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjMxOCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7ZUlDUiBDb21wb3NpdGlvbnMmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiBDPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzM5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5yZXR1cm4KICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMzgiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjMyMSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzIwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5DLnNlY3Rpb24uZW50cnkuZXh0ZW5zaW9uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gRTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMjUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPndoZXJlIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjMyNSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzIzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMjIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPkU8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjMyMyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+dXJsPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gPSA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMjQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPidodHRwOi8vaGw3Lm9yZy9maGlyL3VzL2Vjci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2VpY3ItdHJpZ2dlci1jb2RlLWZsYWctZXh0ZW5zaW9uJzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMzciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnJldHVybiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMzYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjMzNCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzMzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4oPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzMzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5zaW5nbGV0b24gZnJvbSA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMzIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPig8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMzIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjMyNyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzI2Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5FLmV4dGVuc2lvbjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IFNFPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzMxIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz53aGVyZSA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMzEiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjMyOSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzI4Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5TRTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzI5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz51cmw8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiA9IDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjMzMCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+J3RyaWdnZXJDb2RlJzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4pPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4pPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMzQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnZhbHVlPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gYXMgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzM1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5Db2Rpbmc8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICApPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMzQxIiBsb2NhdG9yPSIxNjA6My0xNjY6MyIgeHNpOnR5cGU9IkZsYXR0ZW4iPgogICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIzNDAiIGxvY2F0b3I9IjE2MDoxMS0xNjY6MyIgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgICAgPHNvdXJjZSBsb2NhbElkPSIzMTkiIGxvY2F0b3I9IjE2MTo1LTE2MToyNSIgYWxpYXM9IkMiPgogICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIzMTgiIGxvY2F0b3I9IjE2MTo1LTE2MToyMyIgbmFtZT0iZUlDUiBDb21wb3NpdGlvbnMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICA8cmV0dXJuIGxvY2FsSWQ9IjMzOSIgbG9jYXRvcj0iMTYyOjctMTY1Ojk3Ij4KICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMzM4IiBsb2NhdG9yPSIxNjM6OS0xNjU6OTciIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbG9jYWxJZD0iMzIxIiBsb2NhdG9yPSIxNjM6OS0xNjM6MzUiIGFsaWFzPSJFIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMzIwIiBsb2NhdG9yPSIxNjM6OS0xNjM6MzMiIHhzaTp0eXBlPSJGbGF0dGVuIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBhbGlhcz0iJHRoaXMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iRmxhdHRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9IiR0aGlzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gcGF0aD0ic2VjdGlvbiIgc2NvcGU9IkMiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHdoZXJlIHhzaTp0eXBlPSJOb3QiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSXNOdWxsIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0iZW50cnkiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0iJHRoaXMiIHhzaTp0eXBlPSJBbGlhc1JlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJldHVybiBkaXN0aW5jdD0iZmFsc2UiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBwYXRoPSJlbnRyeSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSIkdGhpcyIgeHNpOnR5cGU9IkFsaWFzUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yZXR1cm4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHdoZXJlIHhzaTp0eXBlPSJOb3QiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSXNOdWxsIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0iZXh0ZW5zaW9uIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9IiR0aGlzIiB4c2k6dHlwZT0iQWxpYXNSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZXR1cm4gZGlzdGluY3Q9ImZhbHNlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gcGF0aD0iZXh0ZW5zaW9uIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9IiR0aGlzIiB4c2k6dHlwZT0iQWxpYXNSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JldHVybj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICA8d2hlcmUgbG9jYWxJZD0iMzI1IiBsb2NhdG9yPSIxNjQ6MTEtMTY0OjEwNSIgeHNpOnR5cGU9IkVxdWFsIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVG9TdHJpbmciIGxpYnJhcnlOYW1lPSJGSElSSGVscGVycyIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMzIzIiBsb2NhdG9yPSIxNjQ6MTctMTY0OjIxIiBwYXRoPSJ1cmwiIHNjb3BlPSJFIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIzMjQiIGxvY2F0b3I9IjE2NDoyNS0xNjQ6MTA1IiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iaHR0cDovL2hsNy5vcmcvZmhpci91cy9lY3IvU3RydWN0dXJlRGVmaW5pdGlvbi9laWNyLXRyaWdnZXItY29kZS1mbGFnLWV4dGVuc2lvbiIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgICAgICAgICAgICAgPHJldHVybiBsb2NhbElkPSIzMzciIGxvY2F0b3I9IjE2NToxMy0xNjU6OTciPgogICAgICAgICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIzMzYiIGxvY2F0b3I9IjE2NToyMC0xNjU6OTciIHN0cmljdD0iZmFsc2UiIHhzaTp0eXBlPSJBcyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjMzNCIgbG9jYXRvcj0iMTY1OjIwLTE2NTo4NyIgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbG9jYWxJZD0iMzMzIiBsb2NhdG9yPSIxNjU6MjAtMTY1OjgxIiB4c2k6dHlwZT0iU2luZ2xldG9uRnJvbSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjMzMiIgbG9jYXRvcj0iMTY1OjM2LTE2NTo4MCIgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBsb2NhbElkPSIzMjciIGxvY2F0b3I9IjE2NTozNy0xNjU6NTAiIGFsaWFzPSJTRSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjMyNiIgbG9jYXRvcj0iMTY1OjM3LTE2NTo0NyIgcGF0aD0iZXh0ZW5zaW9uIiBzY29wZT0iRSIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8d2hlcmUgbG9jYWxJZD0iMzMxIiBsb2NhdG9yPSIxNjU6NTItMTY1Ojc5IiB4c2k6dHlwZT0iRXF1YWwiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJUb1N0cmluZyIgbGlicmFyeU5hbWU9IkZISVJIZWxwZXJzIiB4c2k6dHlwZT0iRnVuY3Rpb25SZWYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIzMjkiIGxvY2F0b3I9IjE2NTo1OC0xNjU6NjMiIHBhdGg9InVybCIgc2NvcGU9IlNFIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIzMzAiIGxvY2F0b3I9IjE2NTo2Ny0xNjU6NzkiIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJ0cmlnZ2VyQ29kZSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YXNUeXBlU3BlY2lmaWVyIGxvY2FsSWQ9IjMzNSIgbG9jYXRvcj0iMTY1OjkyLTE2NTo5NyIgbmFtZT0iZmhpcjpDb2RpbmciIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICAgICAgICAgICA8L3JldHVybj4KICAgICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICAgICA8L3JldHVybj4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIGxvY2FsSWQ9IjM0OCIgbG9jYXRvcj0iMTUyOjEtMTU3OjU2IiBuYW1lPSJJcyBFbmNvdW50ZXIgUmVwb3J0YWJsZSBhbmQgV2l0aGluIE5vcm1hbCBSZXBvcnRpbmcgRHVyYXRpb24/IiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iMzQ4Ij4KICAgICAgICAgICAgICAgPGE6cz5kZWZpbmUgJnF1b3Q7SXMgRW5jb3VudGVyIFJlcG9ydGFibGUgYW5kIFdpdGhpbiBOb3JtYWwgUmVwb3J0aW5nIER1cmF0aW9uPyZxdW90OzoKICA8L2E6cz4KICAgICAgICAgICAgICAgPGE6cyByPSIzNDciPgogICAgICAgICAgICAgICAgICA8YTpzIHI9IjM0NSI+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+ZXhpc3RzIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjM0NCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+KAogICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzQ0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzMTUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O1JlcG9ydGFibGUgVHJpZ2dlcmluZyBDb2RlcyZxdW90OzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgZXhjZXB0IDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjM0MyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7RXhpc3RpbmcgUmVwb3J0YWJsZSBUcmlnZ2VyaW5nIENvZGVzJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICApPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgPGE6cz4KICAgIGFuZCA8L2E6cz4KICAgICAgICAgICAgICAgICAgPGE6cyByPSIzNDYiPgogICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O0lzIEVuY291bnRlciBXaXRoaW4gTm9ybWFsIFJlcG9ydGluZyBEdXJhdGlvbj8mcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIzNDciIGxvY2F0b3I9IjE1MzozLTE1Nzo1NiIgeHNpOnR5cGU9IkFuZCI+CiAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjM0NSIgbG9jYXRvcj0iMTUzOjMtMTU2OjMiIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIzNDQiIGxvY2F0b3I9IjE1MzoxMC0xNTY6MyIgeHNpOnR5cGU9IkV4Y2VwdCI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjMxNSIgbG9jYXRvcj0iMTU0OjUtMTU0OjMzIiBuYW1lPSJSZXBvcnRhYmxlIFRyaWdnZXJpbmcgQ29kZXMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjM0MyIgbG9jYXRvcj0iMTU1OjE0LTE1NTo1MSIgbmFtZT0iRXhpc3RpbmcgUmVwb3J0YWJsZSBUcmlnZ2VyaW5nIENvZGVzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMzQ2IiBsb2NhdG9yPSIxNTc6OS0xNTc6NTYiIG5hbWU9IklzIEVuY291bnRlciBXaXRoaW4gTm9ybWFsIFJlcG9ydGluZyBEdXJhdGlvbj8iIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iMzU1IiBsb2NhdG9yPSIxODE6MS0xODI6ODIiIG5hbWU9IklzIEVuY291bnRlciBMb25nZXIgVGhhbiBOb3JtYWwgUmVwb3J0aW5nIER1cmF0aW9uPyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxhbm5vdGF0aW9uIHhzaTp0eXBlPSJhOkFubm90YXRpb24iPgogICAgICAgICAgICA8YTpzIHI9IjM1NSI+CiAgICAgICAgICAgICAgIDxhOnM+ZGVmaW5lICZxdW90O0lzIEVuY291bnRlciBMb25nZXIgVGhhbiBOb3JtYWwgUmVwb3J0aW5nIER1cmF0aW9uPyZxdW90OzoKICA8L2E6cz4KICAgICAgICAgICAgICAgPGE6cyByPSIzNTQiPgogICAgICAgICAgICAgICAgICA8YTpzIHI9IjM1MiI+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7Q3VycmVudCBFbmNvdW50ZXIgRHVyYXRpb24mcXVvdDsoPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzUxIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtFbmNvdW50ZXIgSW4gQ29udGV4dCZxdW90OzwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cz4pPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzPiA+IDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzIHI9IjM1MyI+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7bm9ybWFsUmVwb3J0aW5nRHVyYXRpb24mcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIzNTQiIGxvY2F0b3I9IjE4MjozLTE4Mjo4MiIgeHNpOnR5cGU9IkdyZWF0ZXIiPgogICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJUb1F1YW50aXR5IiBsaWJyYXJ5TmFtZT0iRkhJUkhlbHBlcnMiIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjM1MiIgbG9jYXRvcj0iMTgyOjMtMTgyOjU0IiBuYW1lPSJDdXJyZW50IEVuY291bnRlciBEdXJhdGlvbiIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMzUxIiBsb2NhdG9yPSIxODI6MzItMTgyOjUzIiBuYW1lPSJFbmNvdW50ZXIgSW4gQ29udGV4dCIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjM1MyIgbG9jYXRvcj0iMTgyOjU4LTE4Mjo4MiIgbmFtZT0ibm9ybWFsUmVwb3J0aW5nRHVyYXRpb24iIHhzaTp0eXBlPSJQYXJhbWV0ZXJSZWYiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSIzNjAiIGxvY2F0b3I9IjE4NDoxLTE4NTo0NyIgbmFtZT0iSXMgRW5jb3VudGVyIEluIFByb2dyZXNzIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iMzYwIj4KICAgICAgICAgICAgICAgPGE6cz5kZWZpbmUgJnF1b3Q7SXMgRW5jb3VudGVyIEluIFByb2dyZXNzJnF1b3Q7OgogIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzIHI9IjM1OSI+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzU3Ij4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzNTYiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O0VuY291bnRlciBJbiBDb250ZXh0JnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzNTciPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnN0YXR1czwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnM+IH4gPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzU4Ij4KICAgICAgICAgICAgICAgICAgICAgPGE6cz4naW4tcHJvZ3Jlc3MnPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMzU5IiBsb2NhdG9yPSIxODU6My0xODU6NDciIHhzaTp0eXBlPSJFcXVpdmFsZW50Ij4KICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVG9TdHJpbmciIGxpYnJhcnlOYW1lPSJGSElSSGVscGVycyIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMzU3IiBsb2NhdG9yPSIxODU6My0xODU6MzEiIHBhdGg9InN0YXR1cyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgPHNvdXJjZSBsb2NhbElkPSIzNTYiIGxvY2F0b3I9IjE4NTozLTE4NToyNCIgbmFtZT0iRW5jb3VudGVyIEluIENvbnRleHQiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIzNTgiIGxvY2F0b3I9IjE4NTozNS0xODU6NDciIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJpbi1wcm9ncmVzcyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSIzNjUiIGxvY2F0b3I9IjE4NzoxLTE4ODo0NCIgbmFtZT0iSXMgRW5jb3VudGVyIENvbXBsZXRlIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iMzY1Ij4KICAgICAgICAgICAgICAgPGE6cz5kZWZpbmUgJnF1b3Q7SXMgRW5jb3VudGVyIENvbXBsZXRlJnF1b3Q7OgogIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzIHI9IjM2NCI+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzYyIj4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzNjEiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O0VuY291bnRlciBJbiBDb250ZXh0JnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzNjIiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnN0YXR1czwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnM+IH4gPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzYzIj4KICAgICAgICAgICAgICAgICAgICAgPGE6cz4nZmluaXNoZWQnPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iMzY0IiBsb2NhdG9yPSIxODg6My0xODg6NDQiIHhzaTp0eXBlPSJFcXVpdmFsZW50Ij4KICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVG9TdHJpbmciIGxpYnJhcnlOYW1lPSJGSElSSGVscGVycyIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMzYyIiBsb2NhdG9yPSIxODg6My0xODg6MzEiIHBhdGg9InN0YXR1cyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgPHNvdXJjZSBsb2NhbElkPSIzNjEiIGxvY2F0b3I9IjE4ODozLTE4ODoyNCIgbmFtZT0iRW5jb3VudGVyIEluIENvbnRleHQiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIzNjMiIGxvY2F0b3I9IjE4ODozNS0xODg6NDQiIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJmaW5pc2hlZCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSIzOTEiIGxvY2F0b3I9IjE5MDoxLTE5NjoxMjUiIG5hbWU9IklzIEVuY291bnRlciBJbiBQcm9ncmVzcyBhbmQgV2l0aGluIE5vcm1hbCBSZXBvcnRpbmcgRHVyYXRpb24gb3IgNzJoIG9yIGxlc3MgYWZ0ZXIgZW5kIG9mIGVuY291bnRlcj8iIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSIzOTEiPgogICAgICAgICAgICAgICA8YTpzPmRlZmluZSAmcXVvdDtJcyBFbmNvdW50ZXIgSW4gUHJvZ3Jlc3MgYW5kIFdpdGhpbiBOb3JtYWwgUmVwb3J0aW5nIER1cmF0aW9uIG9yIDcyaCBvciBsZXNzIGFmdGVyIGVuZCBvZiBlbmNvdW50ZXI/JnF1b3Q7OgogIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzIHI9IjM5MCI+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzc5Ij4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzNjgiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPigKICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjM2OCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzY2Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtJcyBFbmNvdW50ZXIgSW4gUHJvZ3Jlc3MmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgIGFuZCA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzNjciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O0lzIEVuY291bnRlciBXaXRoaW4gTm9ybWFsIFJlcG9ydGluZyBEdXJhdGlvbj8mcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICk8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICBvciA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzNzgiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPig8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzNzgiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjM3MSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+bm90IDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjM3MCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+SXNOdWxsKDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjM2OSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7VHJpZ2dlcmluZyBFbmNvdW50ZXImcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+KTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IGFuZCA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzNzciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjM3NCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzczIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzNzIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O1RyaWdnZXJpbmcgRW5jb3VudGVyJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzNzMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnBlcmlvZDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjM3NCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+ZW5kPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzc3Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzNzYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPjcyIGhvdXJzPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiBvciBsZXNzIGJlZm9yZTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzc1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5Ob3coKTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPik8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzPgogICAgb3IgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzg5Ij4KICAgICAgICAgICAgICAgICAgICAgPGE6cz4oPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzg5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzODEiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPmV4aXN0cyA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzODAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPig8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzODAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O1RyaWdnZXJpbmcgRW5jb3VudGVycyZxdW90OzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4pPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gYW5kIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjM4OCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzg1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5zaW5nbGV0b24gZnJvbSA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzODQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjM4MyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzgyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtUcmlnZ2VyaW5nIEVuY291bnRlcnMmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjM4MyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+cGVyaW9kPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzg0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5lbmQ8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzg4Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzODciPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPjcyIGhvdXJzPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiBvciBsZXNzIGJlZm9yZTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzg2Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz5Ob3coKTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzPik8L2E6cz4KICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIzOTAiIGxvY2F0b3I9IjE5MTozLTE5NjoxMjUiIHhzaTp0eXBlPSJPciI+CiAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjM3OSIgbG9jYXRvcj0iMTkxOjMtMTk1OjExMSIgeHNpOnR5cGU9Ik9yIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMzY4IiBsb2NhdG9yPSIxOTE6My0xOTQ6MyIgeHNpOnR5cGU9IkFuZCI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjM2NiIgbG9jYXRvcj0iMTkyOjUtMTkyOjMwIiBuYW1lPSJJcyBFbmNvdW50ZXIgSW4gUHJvZ3Jlc3MiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjM2NyIgbG9jYXRvcj0iMTkzOjExLTE5Mzo1OCIgbmFtZT0iSXMgRW5jb3VudGVyIFdpdGhpbiBOb3JtYWwgUmVwb3J0aW5nIER1cmF0aW9uPyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIzNzgiIGxvY2F0b3I9IjE5NTo4LTE5NToxMTEiIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIzNzEiIGxvY2F0b3I9IjE5NTo5LTE5NTo0MiIgeHNpOnR5cGU9Ik5vdCI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjM3MCIgbG9jYXRvcj0iMTk1OjEzLTE5NTo0MiIgeHNpOnR5cGU9IklzTnVsbCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjM2OSIgbG9jYXRvcj0iMTk1OjIwLTE5NTo0MSIgbmFtZT0iVHJpZ2dlcmluZyBFbmNvdW50ZXIiIHhzaTp0eXBlPSJQYXJhbWV0ZXJSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjM3NyIgbG9jYXRvcj0iMTk1OjQ4LTE5NToxMTAiIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhdG9yPSIxOTU6ODItMTk1Ojk3IiB4c2k6dHlwZT0iSW4iPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJUb0RhdGVUaW1lIiBsaWJyYXJ5TmFtZT0iRkhJUkhlbHBlcnMiIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjM3NCIgbG9jYXRvcj0iMTk1OjQ4LTE5NTo4MCIgcGF0aD0iZW5kIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIGxvY2FsSWQ9IjM3MyIgbG9jYXRvcj0iMTk1OjQ4LTE5NTo3NiIgcGF0aD0icGVyaW9kIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIGxvY2FsSWQ9IjM3MiIgbG9jYXRvcj0iMTk1OjQ4LTE5NTo2OSIgbmFtZT0iVHJpZ2dlcmluZyBFbmNvdW50ZXIiIHhzaTp0eXBlPSJQYXJhbWV0ZXJSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhdG9yPSIxOTU6ODItMTk1Ojk3IiBsb3dDbG9zZWQ9InRydWUiIGhpZ2hDbG9zZWQ9ImZhbHNlIiB4c2k6dHlwZT0iSW50ZXJ2YWwiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8bG93IGxvY2F0b3I9IjE5NToxMDYtMTk1OjExMCIgeHNpOnR5cGU9IlN1YnRyYWN0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMzc1IiBsb2NhdG9yPSIxOTU6MTA2LTE5NToxMTAiIHhzaTp0eXBlPSJOb3ciLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMzc2IiBsb2NhdG9yPSIxOTU6ODItMTk1Ojg5IiB2YWx1ZT0iNzIiIHVuaXQ9ImhvdXJzIiB4c2k6dHlwZT0iUXVhbnRpdHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sb3c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoaWdoIGxvY2FsSWQ9IjM3NSIgbG9jYXRvcj0iMTk1OjEwNi0xOTU6MTEwIiB4c2k6dHlwZT0iTm93Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhdG9yPSIxOTU6ODItMTk1Ojk3IiB4c2k6dHlwZT0iTm90Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYXRvcj0iMTk1OjgyLTE5NTo5NyIgeHNpOnR5cGU9IklzTnVsbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjM3NSIgbG9jYXRvcj0iMTk1OjEwNi0xOTU6MTEwIiB4c2k6dHlwZT0iTm93Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIzODkiIGxvY2F0b3I9IjE5Njo4LTE5NjoxMjUiIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIzODEiIGxvY2F0b3I9IjE5Njo5LTE5Njo0MCIgeHNpOnR5cGU9IkV4aXN0cyI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjM4MCIgbG9jYXRvcj0iMTk2OjE2LTE5Njo0MCIgbmFtZT0iVHJpZ2dlcmluZyBFbmNvdW50ZXJzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjM4OCIgbG9jYXRvcj0iMTk2OjQ2LTE5NjoxMjQiIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhdG9yPSIxOTY6OTYtMTk2OjExMSIgeHNpOnR5cGU9IkluIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVG9EYXRlVGltZSIgbGlicmFyeU5hbWU9IkZISVJIZWxwZXJzIiB4c2k6dHlwZT0iRnVuY3Rpb25SZWYiPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSIzODUiIGxvY2F0b3I9IjE5Njo0Ni0xOTY6OTQiIHhzaTp0eXBlPSJTaW5nbGV0b25Gcm9tIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMzg0IiBsb2NhdG9yPSIxOTY6NjEtMTk2Ojk0IiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIGFsaWFzPSIkdGhpcyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjM4MyIgbG9jYXRvcj0iMTk2OjYxLTE5Njo5MCIgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBhbGlhcz0iJHRoaXMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIzODIiIGxvY2F0b3I9IjE5Njo2MS0xOTY6ODMiIG5hbWU9IlRyaWdnZXJpbmcgRW5jb3VudGVycyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx3aGVyZSB4c2k6dHlwZT0iTm90Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IklzTnVsbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InBlcmlvZCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSIkdGhpcyIgeHNpOnR5cGU9IkFsaWFzUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3doZXJlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmV0dXJuIGRpc3RpbmN0PSJmYWxzZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIHBhdGg9InBlcmlvZCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSIkdGhpcyIgeHNpOnR5cGU9IkFsaWFzUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yZXR1cm4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx3aGVyZSB4c2k6dHlwZT0iTm90Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IklzTnVsbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImVuZCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSIkdGhpcyIgeHNpOnR5cGU9IkFsaWFzUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3doZXJlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmV0dXJuIGRpc3RpbmN0PSJmYWxzZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIHBhdGg9ImVuZCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSIkdGhpcyIgeHNpOnR5cGU9IkFsaWFzUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yZXR1cm4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2F0b3I9IjE5Njo5Ni0xOTY6MTExIiBsb3dDbG9zZWQ9InRydWUiIGhpZ2hDbG9zZWQ9ImZhbHNlIiB4c2k6dHlwZT0iSW50ZXJ2YWwiPgogICAgICAgICAgICAgICAgICAgICAgICA8bG93IGxvY2F0b3I9IjE5NjoxMjAtMTk2OjEyNCIgeHNpOnR5cGU9IlN1YnRyYWN0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMzg2IiBsb2NhdG9yPSIxOTY6MTIwLTE5NjoxMjQiIHhzaTp0eXBlPSJOb3ciLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iMzg3IiBsb2NhdG9yPSIxOTY6OTYtMTk2OjEwMyIgdmFsdWU9IjcyIiB1bml0PSJob3VycyIgeHNpOnR5cGU9IlF1YW50aXR5Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbG93PgogICAgICAgICAgICAgICAgICAgICAgICA8aGlnaCBsb2NhbElkPSIzODYiIGxvY2F0b3I9IjE5NjoxMjAtMTk2OjEyNCIgeHNpOnR5cGU9Ik5vdyIvPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYXRvcj0iMTk2Ojk2LTE5NjoxMTEiIHhzaTp0eXBlPSJOb3QiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhdG9yPSIxOTY6OTYtMTk2OjExMSIgeHNpOnR5cGU9IklzTnVsbCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjM4NiIgbG9jYXRvcj0iMTk2OjEyMC0xOTY6MTI0IiB4c2k6dHlwZT0iTm93Ii8+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBsb2NhbElkPSIzOTkiIGxvY2F0b3I9IjIwNjoxLTIxMDozIiBuYW1lPSJNb3N0IHJlY2VudCBlSUNSIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGFubm90YXRpb24geHNpOnR5cGU9ImE6QW5ub3RhdGlvbiI+CiAgICAgICAgICAgIDxhOnMgcj0iMzk5Ij4KICAgICAgICAgICAgICAgPGE6cz5kZWZpbmUgJnF1b3Q7TW9zdCByZWNlbnQgZUlDUiZxdW90OzoKICA8L2E6cz4KICAgICAgICAgICAgICAgPGE6cyByPSIzOTgiPgogICAgICAgICAgICAgICAgICA8YTpzPkZpcnN0ICgKICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzIHI9IjM5NyI+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzkzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzOTIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O2VJQ1IgQ29tcG9zaXRpb25zJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gZUlDUnM8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzOTYiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPnNvcnQgYnkgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iMzk1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSIzOTQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPmRhdGU8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IGRlc2M8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgPGE6cz4KICApPC9hOnM+CiAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIzOTgiIGxvY2F0b3I9IjIwNzozLTIxMDozIiB4c2k6dHlwZT0iRmlyc3QiPgogICAgICAgICAgICA8c291cmNlIGxvY2FsSWQ9IjM5NyIgbG9jYXRvcj0iMjA4OjUtMjA5OjIzIiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICAgICA8c291cmNlIGxvY2FsSWQ9IjM5MyIgbG9jYXRvcj0iMjA4OjUtMjA4OjI5IiBhbGlhcz0iZUlDUnMiPgogICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSIzOTIiIGxvY2F0b3I9IjIwODo1LTIwODoyMyIgbmFtZT0iZUlDUiBDb21wb3NpdGlvbnMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICA8c29ydCBsb2NhbElkPSIzOTYiIGxvY2F0b3I9IjIwOTo3LTIwOToyMyI+CiAgICAgICAgICAgICAgICAgIDxieSBsb2NhbElkPSIzOTUiIGxvY2F0b3I9IjIwOToxNS0yMDk6MjMiIGRpcmVjdGlvbj0iZGVzYyIgcGF0aD0iZGF0ZSIgeHNpOnR5cGU9IkJ5Q29sdW1uIi8+CiAgICAgICAgICAgICAgIDwvc29ydD4KICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iNDA5IiBsb2NhdG9yPSIyMDE6MS0yMDQ6MTQiIG5hbWU9Ik1vc3QgcmVjZW50IGVJQ1Igc2VudCBvdmVyIDcyIGhvdXJzIGFnbz8iIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSI0MDkiPgogICAgICAgICAgICAgICA8YTpzPmRlZmluZSAmcXVvdDtNb3N0IHJlY2VudCBlSUNSIHNlbnQgb3ZlciA3MiBob3VycyBhZ28/JnF1b3Q7OgogIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzIHI9IjQwOCI+CiAgICAgICAgICAgICAgICAgIDxhOnM+aWYgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNDAxIj4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MDAiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O01vc3QgcmVjZW50IGVJQ1ImcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+IGlzIG5vdCBudWxsPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzPgogICAgdGhlbiA8L2E6cz4KICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MDYiPgogICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjQwMyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNDAyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtNb3N0IHJlY2VudCBlSUNSJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPi48L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MDMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPmRhdGU8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzPiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MDYiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjQwNSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+NzIgaG91cnM8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IG9yIG1vcmUgYmVmb3JlPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8YTpzPiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MDQiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPk5vdygpPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MDciPgogICAgZWxzZSBmYWxzZTwvYTpzPgogICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgIDwvYW5ub3RhdGlvbj4KICAgICAgICAgPGV4cHJlc3Npb24gbG9jYWxJZD0iNDA4IiBsb2NhdG9yPSIyMDI6My0yMDQ6MTQiIHhzaTp0eXBlPSJJZiI+CiAgICAgICAgICAgIDxjb25kaXRpb24gbG9jYWxJZD0iNDAxIiBsb2NhdG9yPSIyMDI6Ni0yMDI6MzUiIHhzaTp0eXBlPSJOb3QiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhdG9yPSIyMDI6Ni0yMDI6MzUiIHhzaTp0eXBlPSJJc051bGwiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSI0MDAiIGxvY2F0b3I9IjIwMjo2LTIwMjoyMyIgbmFtZT0iTW9zdCByZWNlbnQgZUlDUiIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8L2NvbmRpdGlvbj4KICAgICAgICAgICAgPHRoZW4gbG9jYWxJZD0iNDA2IiBsb2NhdG9yPSIyMDM6MTAtMjAzOjYyIiB4c2k6dHlwZT0iU2FtZU9yQmVmb3JlIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVG9EYXRlVGltZSIgbGlicmFyeU5hbWU9IkZISVJIZWxwZXJzIiB4c2k6dHlwZT0iRnVuY3Rpb25SZWYiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSI0MDMiIGxvY2F0b3I9IjIwMzoxMC0yMDM6MzIiIHBhdGg9ImRhdGUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbG9jYWxJZD0iNDAyIiBsb2NhdG9yPSIyMDM6MTAtMjAzOjI3IiBuYW1lPSJNb3N0IHJlY2VudCBlSUNSIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYXRvcj0iMjAzOjU4LTIwMzo2MiIgeHNpOnR5cGU9IlN1YnRyYWN0Ij4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iNDA0IiBsb2NhdG9yPSIyMDM6NTgtMjAzOjYyIiB4c2k6dHlwZT0iTm93Ii8+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjQwNSIgbG9jYXRvcj0iMjAzOjM0LTIwMzo0MSIgdmFsdWU9IjcyIiB1bml0PSJob3VycyIgeHNpOnR5cGU9IlF1YW50aXR5Ii8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC90aGVuPgogICAgICAgICAgICA8ZWxzZSBsb2NhbElkPSI0MDciIGxvY2F0b3I9IjIwNDoxMC0yMDQ6MTQiIHZhbHVlVHlwZT0idDpCb29sZWFuIiB2YWx1ZT0iZmFsc2UiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iNDI5IiBsb2NhdG9yPSIyMTI6MS0yMTU6NzQiIG5hbWU9IlN1c3BlY3RlZCBEaXNvcmRlciBUZXN0IFJlc3VsdHMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSI0MjkiPgogICAgICAgICAgICAgICA8YTpzPmRlZmluZSAmcXVvdDtTdXNwZWN0ZWQgRGlzb3JkZXIgVGVzdCBSZXN1bHRzJnF1b3Q7OgogIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzIHI9IjQyOCI+CiAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNDExIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MTAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjQxMCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+W09ic2VydmF0aW9uXTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IE88L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8YTpzPgogICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNDI3Ij4KICAgICAgICAgICAgICAgICAgICAgPGE6cz53aGVyZSA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MjciPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjQyMCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNDEzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MTIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPk88L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LjwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjQxMyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+c3RhdHVzPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gaW4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNDE5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz57IDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjQxNCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+J3JlZ2lzdGVyZWQnPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiwgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNDE1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4ncHJlbGltaW5hcnknPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiwgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNDE2Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4nZmluYWwnPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiwgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNDE3Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4nYW1lbmRlZCc8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+LCA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MTgiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPidjb3JyZWN0ZWQnPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiB9PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4KICAgICAgYW5kIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjQyNiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNDI0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MjIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjQyMSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+TzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4uPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNDIyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz52YWx1ZTwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+IGFzIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzIHI9IjQyMyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+Q29kZWFibGVDb25jZXB0PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4gaW4gPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNDI1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE6cz4mcXVvdDtTdXNwZWN0ZWQgRGlzb3JkZXIgVHJpZ2dlciBDb2RlcyZxdW90OzwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgIDwvYTpzPgogICAgICAgICA8L2Fubm90YXRpb24+CiAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjQyOCIgbG9jYXRvcj0iMjEzOjMtMjE1Ojc0IiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGxvY2FsSWQ9IjQxMSIgbG9jYXRvcj0iMjEzOjMtMjEzOjE3IiBhbGlhcz0iTyI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjQxMCIgbG9jYXRvcj0iMjEzOjMtMjEzOjE1IiBkYXRhVHlwZT0iZmhpcjpPYnNlcnZhdGlvbiIgdGVtcGxhdGVJZD0iaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL09ic2VydmF0aW9uIiB4c2k6dHlwZT0iUmV0cmlldmUiLz4KICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgIDx3aGVyZSBsb2NhbElkPSI0MjciIGxvY2F0b3I9IjIxNDo1LTIxNTo3NCIgeHNpOnR5cGU9IkFuZCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjQyMCIgbG9jYXRvcj0iMjE0OjExLTIxNDo4NiIgeHNpOnR5cGU9IkluIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVG9TdHJpbmciIGxpYnJhcnlOYW1lPSJGSElSSGVscGVycyIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iNDEzIiBsb2NhdG9yPSIyMTQ6MTEtMjE0OjE4IiBwYXRoPSJzdGF0dXMiIHNjb3BlPSJPIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSI0MTkiIGxvY2F0b3I9IjIxNDoyMy0yMTQ6ODYiIHhzaTp0eXBlPSJMaXN0Ij4KICAgICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbG9jYWxJZD0iNDE0IiBsb2NhdG9yPSIyMTQ6MjUtMjE0OjM2IiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0icmVnaXN0ZXJlZCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbG9jYWxJZD0iNDE1IiBsb2NhdG9yPSIyMTQ6MzktMjE0OjUxIiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0icHJlbGltaW5hcnkiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgICAgIDxlbGVtZW50IGxvY2FsSWQ9IjQxNiIgbG9jYXRvcj0iMjE0OjU0LTIxNDo2MCIgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9ImZpbmFsIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICA8ZWxlbWVudCBsb2NhbElkPSI0MTciIGxvY2F0b3I9IjIxNDo2My0yMTQ6NzEiIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJhbWVuZGVkIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICA8ZWxlbWVudCBsb2NhbElkPSI0MTgiIGxvY2F0b3I9IjIxNDo3NC0yMTQ6ODQiIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJjb3JyZWN0ZWQiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSI0MjYiIGxvY2F0b3I9IjIxNToxMS0yMTU6NzQiIHhzaTp0eXBlPSJJblZhbHVlU2V0Ij4KICAgICAgICAgICAgICAgICAgPGNvZGUgbmFtZT0iVG9Db25jZXB0IiBsaWJyYXJ5TmFtZT0iRkhJUkhlbHBlcnMiIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjQyNCIgbG9jYXRvcj0iMjE1OjExLTIxNTozNiIgc3RyaWN0PSJmYWxzZSIgeHNpOnR5cGU9IkFzIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iNDIyIiBsb2NhdG9yPSIyMTU6MTEtMjE1OjE3IiBwYXRoPSJ2YWx1ZSIgc2NvcGU9Ik8iIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICA8YXNUeXBlU3BlY2lmaWVyIGxvY2FsSWQ9IjQyMyIgbG9jYXRvcj0iMjE1OjIyLTIxNTozNiIgbmFtZT0iZmhpcjpDb2RlYWJsZUNvbmNlcHQiIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8L2NvZGU+CiAgICAgICAgICAgICAgICAgIDx2YWx1ZXNldCBsb2NhbElkPSI0MjUiIGxvY2F0b3I9IjIxNTo0MS0yMTU6NzQiIG5hbWU9IlN1c3BlY3RlZCBEaXNvcmRlciBUcmlnZ2VyIENvZGVzIiBwcmVzZXJ2ZT0idHJ1ZSIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iNDM1IiBsb2NhdG9yPSIyMTc6MS0yMjA6NDMiIG5hbWU9IlN1c3BlY3RlZCBEaXNvcmRlcnMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8YW5ub3RhdGlvbiB4c2k6dHlwZT0iYTpBbm5vdGF0aW9uIj4KICAgICAgICAgICAgPGE6cyByPSI0MzUiPgogICAgICAgICAgICAgICA8YTpzPmRlZmluZSAmcXVvdDtTdXNwZWN0ZWQgRGlzb3JkZXJzJnF1b3Q7OgogIDwvYTpzPgogICAgICAgICAgICAgICA8YTpzIHI9IjQzNCI+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNDMyIj4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MzAiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPltDb25kaXRpb246IDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O1N1c3BlY3RlZCBEaXNvcmRlciBUcmlnZ2VyIENvZGVzJnF1b3Q7PC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPl08L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICB1bmlvbiA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MzEiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPltNZWRpY2F0aW9uUmVxdWVzdDogPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+JnF1b3Q7U3VzcGVjdGVkIERpc29yZGVyIFRyaWdnZXIgQ29kZXMmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgICAgIDxhOnM+XTwvYTpzPgogICAgICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnM+CiAgICB1bmlvbiA8L2E6cz4KICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MzMiPgogICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O1N1c3BlY3RlZCBEaXNvcmRlciBUZXN0IFJlc3VsdHMmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgIDwvYTpzPgogICAgICAgICAgICA8L2E6cz4KICAgICAgICAgPC9hbm5vdGF0aW9uPgogICAgICAgICA8ZXhwcmVzc2lvbiBsb2NhbElkPSI0MzQiIGxvY2F0b3I9IjIxODozLTIyMDo0MyIgeHNpOnR5cGU9IlVuaW9uIj4KICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkFzIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbG9jYWxJZD0iNDMyIiBsb2NhdG9yPSIyMTg6My0yMTk6NjUiIHhzaTp0eXBlPSJVbmlvbiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJBcyI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjQzMCIgbG9jYXRvcj0iMjE4OjMtMjE4OjQ5IiBkYXRhVHlwZT0iZmhpcjpDb25kaXRpb24iIHRlbXBsYXRlSWQ9Imh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9Db25kaXRpb24iIGNvZGVQcm9wZXJ0eT0iY29kZSIgY29kZUNvbXBhcmF0b3I9ImluIiB4c2k6dHlwZT0iUmV0cmlldmUiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y29kZXMgbG9jYXRvcj0iMjE4OjE1LTIxODo0OCIgbmFtZT0iU3VzcGVjdGVkIERpc29yZGVyIFRyaWdnZXIgQ29kZXMiIHByZXNlcnZlPSJ0cnVlIiB4c2k6dHlwZT0iVmFsdWVTZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICA8YXNUeXBlU3BlY2lmaWVyIHhzaTp0eXBlPSJMaXN0VHlwZVNwZWNpZmllciI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxlbGVtZW50VHlwZSB4c2k6dHlwZT0iQ2hvaWNlVHlwZVNwZWNpZmllciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaG9pY2UgbmFtZT0iZmhpcjpNZWRpY2F0aW9uUmVxdWVzdCIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2hvaWNlIG5hbWU9ImZoaXI6Q29uZGl0aW9uIiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZWxlbWVudFR5cGU+CiAgICAgICAgICAgICAgICAgICAgIDwvYXNUeXBlU3BlY2lmaWVyPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJBcyI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGxvY2FsSWQ9IjQzMSIgbG9jYXRvcj0iMjE5OjExLTIxOTo2NSIgZGF0YVR5cGU9ImZoaXI6TWVkaWNhdGlvblJlcXVlc3QiIHRlbXBsYXRlSWQ9Imh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9NZWRpY2F0aW9uUmVxdWVzdCIgY29kZVByb3BlcnR5PSJtZWRpY2F0aW9uIiBjb2RlQ29tcGFyYXRvcj0iaW4iIHhzaTp0eXBlPSJSZXRyaWV2ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlcyBsb2NhdG9yPSIyMTk6MzEtMjE5OjY0IiBuYW1lPSJTdXNwZWN0ZWQgRGlzb3JkZXIgVHJpZ2dlciBDb2RlcyIgcHJlc2VydmU9InRydWUiIHhzaTp0eXBlPSJWYWx1ZVNldFJlZiIvPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgIDxhc1R5cGVTcGVjaWZpZXIgeHNpOnR5cGU9Ikxpc3RUeXBlU3BlY2lmaWVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGVsZW1lbnRUeXBlIHhzaTp0eXBlPSJDaG9pY2VUeXBlU3BlY2lmaWVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNob2ljZSBuYW1lPSJmaGlyOk1lZGljYXRpb25SZXF1ZXN0IiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaG9pY2UgbmFtZT0iZmhpcjpDb25kaXRpb24iIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9lbGVtZW50VHlwZT4KICAgICAgICAgICAgICAgICAgICAgPC9hc1R5cGVTcGVjaWZpZXI+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8YXNUeXBlU3BlY2lmaWVyIHhzaTp0eXBlPSJMaXN0VHlwZVNwZWNpZmllciI+CiAgICAgICAgICAgICAgICAgIDxlbGVtZW50VHlwZSB4c2k6dHlwZT0iQ2hvaWNlVHlwZVNwZWNpZmllciI+CiAgICAgICAgICAgICAgICAgICAgIDxjaG9pY2UgbmFtZT0iZmhpcjpNZWRpY2F0aW9uUmVxdWVzdCIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICAgICAgICAgICAgICA8Y2hvaWNlIG5hbWU9ImZoaXI6T2JzZXJ2YXRpb24iIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgICAgICAgICAgICAgPGNob2ljZSBuYW1lPSJmaGlyOkNvbmRpdGlvbiIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICAgICAgICAgICA8L2VsZW1lbnRUeXBlPgogICAgICAgICAgICAgICA8L2FzVHlwZVNwZWNpZmllcj4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iQXMiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSI0MzMiIGxvY2F0b3I9IjIyMDoxMS0yMjA6NDMiIG5hbWU9IlN1c3BlY3RlZCBEaXNvcmRlciBUZXN0IFJlc3VsdHMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDxhc1R5cGVTcGVjaWZpZXIgeHNpOnR5cGU9Ikxpc3RUeXBlU3BlY2lmaWVyIj4KICAgICAgICAgICAgICAgICAgPGVsZW1lbnRUeXBlIHhzaTp0eXBlPSJDaG9pY2VUeXBlU3BlY2lmaWVyIj4KICAgICAgICAgICAgICAgICAgICAgPGNob2ljZSBuYW1lPSJmaGlyOk1lZGljYXRpb25SZXF1ZXN0IiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgICAgICAgICAgICAgIDxjaG9pY2UgbmFtZT0iZmhpcjpPYnNlcnZhdGlvbiIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICAgICAgICAgICAgICA8Y2hvaWNlIG5hbWU9ImZoaXI6Q29uZGl0aW9uIiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgICAgICAgICAgIDwvZWxlbWVudFR5cGU+CiAgICAgICAgICAgICAgIDwvYXNUeXBlU3BlY2lmaWVyPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbG9jYWxJZD0iNDM4IiBsb2NhdG9yPSIyMjI6MS0yMjU6MyIgbmFtZT0iSXMgU3VzcGVjdGVkIERpc29yZGVyPyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxhbm5vdGF0aW9uIHhzaTp0eXBlPSJhOkFubm90YXRpb24iPgogICAgICAgICAgICA8YTpzIHI9IjQzOCI+CiAgICAgICAgICAgICAgIDxhOnM+ZGVmaW5lICZxdW90O0lzIFN1c3BlY3RlZCBEaXNvcmRlcj8mcXVvdDs6CiAgPC9hOnM+CiAgICAgICAgICAgICAgIDxhOnMgcj0iNDM3Ij4KICAgICAgICAgICAgICAgICAgPGE6cz5leGlzdHMgPC9hOnM+CiAgICAgICAgICAgICAgICAgIDxhOnMgcj0iNDM2Ij4KICAgICAgICAgICAgICAgICAgICAgPGE6cz4oCiAgICA8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPGE6cyByPSI0MzYiPgogICAgICAgICAgICAgICAgICAgICAgICA8YTpzPiZxdW90O1N1c3BlY3RlZCBEaXNvcmRlcnMmcXVvdDs8L2E6cz4KICAgICAgICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgICAgICAgICAgIDxhOnM+CiAgKTwvYTpzPgogICAgICAgICAgICAgICAgICA8L2E6cz4KICAgICAgICAgICAgICAgPC9hOnM+CiAgICAgICAgICAgIDwvYTpzPgogICAgICAgICA8L2Fubm90YXRpb24+CiAgICAgICAgIDxleHByZXNzaW9uIGxvY2FsSWQ9IjQzNyIgbG9jYXRvcj0iMjIzOjMtMjI1OjMiIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICA8b3BlcmFuZCBsb2NhbElkPSI0MzYiIGxvY2F0b3I9IjIyMzoxMC0yMjU6MyIgbmFtZT0iU3VzcGVjdGVkIERpc29yZGVycyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgPC9zdGF0ZW1lbnRzPgo8L2xpYnJhcnk+Cg=="

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-exposure-contact-info-football-game.fsh

Instance: us-ph-exposure-contact-info-football-game
InstanceOf: USPublicHealthExposureContactInformation
Title: "US Public Health Exposure Contact Information - Football Game"
Description: "US Public Health Exposure Contact Information: Football Game example"
Usage: #example
* status = #final
* category = $v3-ActClass#EXPOS "exposure"
* category.text = "An interaction between entities that provides opportunity for transmission of a physical, chemical, or biological agent from an exposure source entity to an exposure target entity."
* code = $umls#C3841750 "Mass gathering"
* code.text = "Mass gathering (football game)"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* focus.reference = "Location/us-core-location-city-football-stadium"
* focus.display = "City Football Stadium"
* effectivePeriod.start = "2020-01-11T18:00:00Z"
* effectivePeriod.end = "2020-01-11T21:30:00Z"
* valueCodeableConcept = $sct#264379009 "Sports stadium (environment)"
* valueCodeableConcept.text = "City Football Stadium"
* component.code = $v3-ParticipationType#EXPAGNT "ExposureAgent"
* component.valueCodeableConcept = $sct#840533007 "Severe acute respiratory syndrome coronavirus 2 (organism)"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-lab-result-eve-everywoman-lymphocytes.fsh

Instance: us-ph-lab-result-eve-everywoman-lymphocytes
InstanceOf: USPublicHealthLaboratoryResultObservationProfile
Title: "US Public Health Laboratory Result - Eve Everywoman - Lymphocytes"
Description: "US Public Health Laboratory Result: Eve Everywoman - Lymphocytes example"
Usage: #example
* status = #final
* category = $observation-category#laboratory "Laboratory"
* category.text = "Laboratory"
* code = $loinc#731-0 "Lymphocytes [#/volume] in Blood by Automated count"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectiveDateTime = "2018-03-07"
* valueQuantity = 5.2 '10*3/uL'
* interpretation = $v3-ObservationInterpretation#H "High"
* referenceRange.low = 1 '10*3/uL'
* referenceRange.high = 4.8 '10*3/uL'

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-lab-result-eve-everywoman-pertussis.fsh

Instance: us-ph-lab-result-eve-everywoman-pertussis
InstanceOf: USPublicHealthLaboratoryResultObservationProfile
Title: "US Public Health Laboratory Result - Eve Everywoman - Pertussis"
Description: "US Public Health Laboratory Result: Eve Everywoman - Pertussis example"
Usage: #example
* status = #final
* category = $observation-category#laboratory "Laboratory"
* category.text = "Laboratory"
* code = $loinc#11585-7 "Bordetella pertussis Ab [Units/volume] in Serum"
* code.text = "Bordetella pertussis Ab [Units/volume] in Serum"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectiveDateTime = "2016-11-07"
* valueQuantity = 100 '[iU]/mL'
* interpretation = $v3-ObservationInterpretation#H "High"
* referenceRange.high = 45 '[iU]/mL'

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-location-salem-medical-center.fsh

Instance: us-ph-location-salem-medical-center
InstanceOf: USPublicHealthLocation
Title: "US Public Health Location - Clinic Bldg A, Salem Medical Center"
Description: "US Public Health Location: Clinic Bldg A, Salem Medical Center example"
Usage: #example
* identifier.system = "http://hl7.org.fhir/sid/us-npi"
* identifier.value = "1144221995"
* status = #active
* name = "Clinic Bldg A, Salem Medical Center"
* type = $v3-RoleCode#HOSP "Hospital"
* telecom[0].system = #phone
* telecom[=].value = "(+1) (555)555-3001"
* telecom[+].system = #fax
* telecom[=].value = "(+1) (555)555-3002"
* telecom[+].system = #email
* telecom[=].value = "mail@smc.org"
* address.line[0] = "Clinic Bldg A"
* address.line[+] = "4444 Healthcare Drive"
* address.city = "Ann Arbor"
* address.state = "MI"
* address.postalCode = "99999"
* managingOrganization.reference = "Organization/us-ph-organization-salem-medical-center"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-medadmin-eve-everywoman-azithromycin.fsh

Instance: us-ph-medadmin-eve-everywoman-azithromycin
InstanceOf: USPublicHealthMedicationAdministration
Title: "US Public Health MedicationAdministration - Eve Everywoman - Azithromycin"
Description: "US Public Health MedicationAdministration: Eve Everywoman Azithromycin example"
Usage: #example
* status = #completed
* medicationCodeableConcept = $rxnorm#248656 "Azithromycin 500 MG Oral Tablet"
* medicationCodeableConcept.text = "Azithromycin 500 MG Oral Tablet"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectivePeriod.start = "2018-03-07"
* effectivePeriod.end = "2018-03-07"
* dosage.text = "Two tablets at once"
* dosage.route = $sct#26643006 "Oral route"
* dosage.method = $sct#421521009 "Swallow - dosing instruction imperative (qualifier value)"
* dosage.dose = 2 http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm#TAB "TAB"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-medadmin-eve-everywoman-naloxone-response.fsh

Instance: us-ph-medadmin-eve-everywoman-naloxone-response
InstanceOf: USPublicHealthMedicationAdministration
Title: "US Public Health MedicationAdministration - Eve Everywoman - Naloxone"
Description: "US Public Health MedicationAdministration: Eve Everywoman - Naloxone example"
Usage: #example
* extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-therapeutic-medication-response-extension"
* extension.valueCodeableConcept = $sct#268910001 "Patient's condition improved (finding)"
* status = #completed
* medicationCodeableConcept = $rxnorm#1659929 "naloxone HCl 0.4 MG in 1 ML Injection"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectivePeriod.start = "2018-03-07"
* effectivePeriod.end = "2018-03-07"
* dosage.route = $sct#206007 "Gluteus maximus muscle"
* dosage.method = $sct#422145002 "Inject - dosing instruction imperative (qualifier value)"
* dosage.dose = 1 'mL' "mL"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-messagedefinition-contentbundle-example.fsh

Instance: us-ph-messagedefinition-contentbundle-example
InstanceOf: USPublicHealthMessageDefinition
Title: "US Public Health MessageDefinition - Cancer Report"
Description: "US Public Health MessageDefinition: Cancer Report example"
Usage: #example
* url = "http://hl7.org/fhir/us/ph-library/MessageDefinition/us-ph-messagedefinition-contentbundle-example"
* version = "1.0.0"
* status = #active
* date = "2023-01-08"
* publisher = "{site.data.fhir.ig.publisher}"
* contact.name = "HL7 Public Health Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://hl7.org/Special/committees/pher"
* jurisdiction = urn:iso:std:iso:3166#US
* eventCoding = USPublicHealthCodeSystemMessageTypes#cancer-report-message
* category = #notification
* focus.code = #Bundle
* focus.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-content-bundle"
* focus.min = 1
* focus.max = "1"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-messageheader-case-report.fsh

Instance: us-ph-messageheader-case-report
InstanceOf: USPublicHealthMessageHeader
Title: "US Public Health MessageHeader - Case Report"
Description: "US Public Health MessageHeader: Case Report example"
Usage: #example
* extension[0].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-data-encrypted-extension"
* extension[=].valueBoolean = false
* extension[+].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-message-processing-category-extension"
* extension[=].valueCode = #consequence
* eventCoding = USPublicHealthCodeSystemMessageTypes#eicr-case-report-message "Indicates a message containing electronic case report healthcare data sent from clinical care."
* destination.name = "YMCA Acme Message Gateway"
* destination.target.reference = "Device/device-software-ymca"
* destination.endpoint = "http://example.org/ymca/fhir"
* sender.reference = "Organization/us-ph-organization-salem-medical-center"
* source.name = "Acme Central Patient Registry"
* source.software = "FooBar Patient Manager"
* source.version = "3.1.45.AABB"
* source.contact.system = #phone
* source.contact.value = "+1 (555) 123 4567"
* source.endpoint = "http://example.org/salem-medical-center/fhir"
* reason = USPublicHealthCodeSystemTriggerDefinitionNamedEvents#encounter-close "Indicates the close of an encounter"
* focus.reference = "Bundle/us-ph-document-bundle-example"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-messageheader-response.fsh

Instance: us-ph-messageheader-response
InstanceOf: USPublicHealthMessageHeader
Title: "US Public Health MessageHeader - Cancer Report"
Description: "US Public Health MessageHeader: Cancer Report example"
Usage: #example
* extension[0].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-data-encrypted-extension"
* extension[=].valueBoolean = false
* extension[+].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-report-initiation-type-extension"
* extension[=].valueCodeableConcept = USPublicHealthCodeSystemReportInitiationTypes#subscription-notification
* extension[+].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-message-processing-category-extension"
* extension[=].valueCode = #consequence
* eventCoding = USPublicHealthCodeSystemMessageTypes#cancer-report-message
* destination.name = "PHA endpoint"
* destination.endpoint = "http://example.pha.org/fhir"
* sender.reference = "Organization/us-ph-organization-salem-medical-center"
* source.name = "Healthcare Organization"
* source.software = "Backend Service App"
* source.version = "3.1.45.AABB"
* source.contact.system = #phone
* source.contact.value = "+1 (917) 123 4567"
* source.endpoint = "http://example.healthcare.org/fhir"
* reason = USPublicHealthCodeSystemTriggerDefinitionNamedEvents#encounter-close
* focus.reference = "Bundle/us-ph-content-bundle-example"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-organization-acme-laboratory.fsh

Instance: us-ph-organization-acme-laboratory
InstanceOf: USPublicHealthOrganization
Title: "US Public Health Organization - Acme Labs"
Description: "US Public Health Organization: Acme Labs example"
Usage: #example
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "1144221999"
* active = true
* type = $v3-RoleCode#OUTLAB "outpatient laboratory"
* name = "Acme_Labs"
* telecom[0].system = #phone
* telecom[=].value = "+1-555-555-4444"
* telecom[+].system = #email
* telecom[=].value = "mail@acme-labs.com"
* address.line = "7777 Laboratory Drive"
* address.city = "Ann Arbor"
* address.state = "MI"
* address.postalCode = "99999"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-organization-health-authority-west.fsh

Instance: us-ph-organization-health-authority-west
InstanceOf: USPublicHealthOrganization
Title: "US Public Health Organization - Health Authority West"
Description: "US Public Health Organization: Health Authority West example"
Usage: #example
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "1144221847"
* active = true
* name = "Health Authority West"
* telecom[0].system = #phone
* telecom[=].value = "+1-555-555-3555"
* telecom[+].system = #email
* telecom[=].value = "mail@healthauthoritywest.gov"
* address.line = "7777 Health Authority Drive"
* address.city = "Ann Arbor"
* address.state = "MI"
* address.postalCode = "99999"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-organization-salem-medical-center.fsh

Instance: us-ph-organization-salem-medical-center
InstanceOf: USPublicHealthOrganization
Title: "US Public Health Organization - Salem Medical Center"
Description: "US Public Health Organization: Salem Medical Center example"
Usage: #example
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "55555555"
* active = true
* name = "Salem Medical Center"
* telecom[0].system = #phone
* telecom[=].value = "+1-555-555-1111"
* telecom[+].system = #email
* telecom[=].value = "mail@salemmedicalcenter.com"
* address.line = "22222 Health Authority Drive"
* address.city = "Ann Arbor"
* address.state = "MI"
* address.postalCode = "99999"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-organization-ymca-center.fsh

Instance: us-ph-organization-ymca-center
InstanceOf: USPublicHealthOrganization
Title: "US Public Health Organization - YMCA"
Description: "US Public Health Organization: YMCA example"
Usage: #example
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "7777788"
* active = true
* name = "YMCA"
* telecom[0].system = #phone
* telecom[=].value = "+1-555-555-7777"
* telecom[+].system = #email
* telecom[=].value = "mail@ymca.com"
* address.line = "22222 Health Authority Drive"
* address.city = "Ann Arbor"
* address.state = "MI"
* address.postalCode = "99999"
* endpoint = Reference(Endpoint/us-ph-endpoint-ymca)

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-patient-eve-everywoman.fsh

Instance: us-ph-patient-eve-everywoman
InstanceOf: USPublicHealthPatient
Title: "US Public Health Patient - Eve Everywoman"
Description: "US Public Health Patient: Eve Everywoman example"
Usage: #example
* extension[race].extension[ombCategory].url = "ombCategory"
* extension[race].extension[ombCategory].valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
* extension[race].extension[text].url = "text"
* extension[race].extension[text].valueString = "White"
* extension[race].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
* extension[ethnicity].extension[ombCategory].url = "ombCategory"
* extension[ethnicity].extension[ombCategory].valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
* extension[ethnicity].extension[text].url = "text"
* extension[ethnicity].extension[text].valueString = "Not Hispanic or Latino"
* extension[ethnicity].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* extension[birthsex].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex"
* extension[birthsex].valueCode = #F
* extension[individualGenderIdentity].extension.url = "value"
* extension[individualGenderIdentity].extension.valueCodeableConcept = $v3-NullFlavor#ASKU "asked but unknown"
* extension[individualGenderIdentity].extension.valueCodeableConcept.text = "asked but unknown"
* extension[individualGenderIdentity].url = "http://hl7.org/fhir/StructureDefinition/individual-genderIdentity"
* extension[tribalAffiliation].extension[TribeName].url = "TribeName"
* extension[tribalAffiliation].extension[TribeName].valueCoding = $v3-TribalEntityUS#91 "Fort Mojave Indian Tribe of Arizona, California & Nevada"
* extension[tribalAffiliation].extension[EnrolledTribeMember].url = "EnrolledTribeMember"
* extension[tribalAffiliation].extension[EnrolledTribeMember].valueBoolean = true
* extension[tribalAffiliation].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-tribal-affiliation-extension"
* identifier.use = #usual
* identifier.type = $v2-0203#MR "Medical Record Number"
* identifier.system = "http://hospital.smarthealthit.org"
* identifier.value = "1032702"
* active = true
* name.family = "Everywoman"
* name.given[0] = "Eve"
* name.given[+] = "L"
* telecom[0].system = #phone
* telecom[=].value = "1-(404)555-1212"
* telecom[=].use = #home
* telecom[+].system = #email
* telecom[=].value = "eve.everywoman@example.com"
* gender = #female
* birthDate = "1974-11-24"
* deceasedBoolean = false
* address.line = "2222 Home Street"
* address.city = "Ann Arbor"
* address.state = "MI"
* address.postalCode = "99999"
* address.country = "US"
* communication.language = urn:ietf:bcp:47#en "English"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-plandefinition-alt-expression-example.fsh

Instance: us-ph-plandefinition-alt-expression-example
InstanceOf: USPublicHealthPlanDefinition
Title: "US Public Health PlanDefinition - Alternative Expression"
Description: "US Public Health PlanDefinition: Alternative Expression example"
Usage: #example
* url = "http://example.org/fhir/PlanDefinition/us-ph-plandefinition-alt-expression-example"
* version = "0.1"
* name = "USPublicHealthPlanDefinitionAlternativeExpressionExample"
* title = "US Public Health PlanDefinition Alternative Expression Example"
* type = $plan-definition-type#workflow-definition "Workflow Definition"
* status = #active
* experimental = true
* date = "2022-07-31T12:32:29.858-05:00"
* publisher = "HL7 Public Health Work Group"
* description = "An example PlanDefinition"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* jurisdiction.text = "United States of America"
* effectivePeriod.start = "2020-12-01"
* relatedArtifact.type = #depends-on
* relatedArtifact.label = "RCTC Value Set Library of Trigger Codes"
* relatedArtifact.resource = "http://example.org/fhir/Library/library-rctc-example"
* action[0].id = "start-workflow"
* action[=].description = "This action represents the start of the reporting workflow in response to the encounter-start event."
* action[=].textEquivalent = "Start the reporting workflow in response to an encounter-start event"
* action[=].code = USPublicHealthCodeSystemPlanDefinitionActions#initiate-reporting-workflow "Initiate a reporting workflow"
* action[=].trigger.id = "encounter-start"
* action[=].trigger.extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-named-eventtype-extension"
* action[=].trigger.extension.valueCodeableConcept = USPublicHealthCodeSystemTriggerDefinitionNamedEvents#encounter-start "Indicates the start of an encounter"
* action[=].trigger.type = #named-event
* action[=].trigger.name = "encounter-start"
* action[=].input[0].id = "patient"
* action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-fhirquerypattern-extension"
* action[=].input[=].extension.valueString = "Patient/{{context.patientId}}"
* action[=].input[=].type = #Patient
* action[=].input[+].id = "encounter"
* action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-fhirquerypattern-extension"
* action[=].input[=].extension.valueString = "Encounter/{{context.encounterId}}"
* action[=].input[=].type = #Encounter
* action[=].relatedAction.actionId = "check-suspected-disorder"
* action[=].relatedAction.relationship = #before-start
* action[=].relatedAction.offsetDuration = 1 'h'
* action[+].id = "check-suspected-disorder"
* action[=].description = "This action represents the start of the check suspected disorder reporting workflow in response to the encounter-start event."
* action[=].textEquivalent = "Check suspected disorders for immediate reportability and setup jobs for future reportability checks."
* action[=].code = USPublicHealthCodeSystemPlanDefinitionActions#execute-reporting-workflow
* action[=].action[0].id = "is-encounter-suspected-disorder"
* action[=].action[=].description = "This action represents the check for suspected disorder reportability to create the patients eICR."
* action[=].action[=].textEquivalent = "Check Trigger Codes based on Suspected Reportable Value set."
* action[=].action[=].code = USPublicHealthCodeSystemPlanDefinitionActions#check-trigger-codes
* action[=].action[=].condition.kind = #applicability
* action[=].action[=].condition.expression.extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-alternative-expression-extension"
* action[=].action[=].condition.expression.extension.valueExpression.language = #text/cql-identifier
* action[=].action[=].condition.expression.extension.valueExpression.expression = "Is Suspected Disorder?"
* action[=].action[=].condition.expression.extension.valueExpression.reference = "http://example.org/fhir/Library/RuleFilters|1.0.0"
* action[=].action[=].condition.expression.language = #text/fhirpath
* action[=].action[=].condition.expression.expression = "%modifiedConditions.exists() or %modifiedLabResults.exists() or %modifiedMedicationOrders.exists()"
* action[=].action[=].input[0].id = "modifiedConditions"
* action[=].action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-fhirquerypattern-extension"
* action[=].action[=].input[=].extension.valueString = "Condition?patient=Patient/{{context.patientId}}"
* action[=].action[=].input[=].type = #Condition
* action[=].action[=].input[=].codeFilter.path = "code"
* action[=].action[=].input[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/valueset-sdtc-example"
* action[=].action[=].input[+].id = "modifiedLabResults"
* action[=].action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-fhirquerypattern-extension"
* action[=].action[=].input[=].extension.valueString = "Observation?patient=Patient/{{context.patientId}}"
* action[=].action[=].input[=].type = #Observation
* action[=].action[=].input[=].codeFilter.path = "value"
* action[=].action[=].input[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/valueset-sdtc-example"
* action[=].action[=].input[+].id = "modifiedMedicationOrders"
* action[=].action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-fhirquerypattern-extension"
* action[=].action[=].input[=].extension.valueString = "MedicationRequest?patient=Patient/{{context.patientId}}"
* action[=].action[=].input[=].type = #MedicationRequest
* action[=].action[=].input[=].codeFilter.path = "medication"
* action[=].action[=].input[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/valueset-sdtc-example"
* action[=].action[=].relatedAction.actionId = "create-eicr"
* action[=].action[=].relatedAction.relationship = #before-start
* action[=].action[+].id = "continue-check-reportable"
* action[=].action[=].code = USPublicHealthCodeSystemPlanDefinitionActions#evaluate-condition
* action[=].action[=].condition.kind = #applicability
* action[=].action[=].condition.expression.extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-alternative-expression-extension"
* action[=].action[=].condition.expression.extension.valueExpression.language = #text/cql-identifier
* action[=].action[=].condition.expression.extension.valueExpression.expression = "Is Encounter In Progress and Within Normal Reporting Duration or 72h or less after end of encounter?"
* action[=].action[=].condition.expression.extension.valueExpression.reference = "http://example.org/fhir/Library/RuleFilters|1.0.0"
* action[=].action[=].condition.expression.language = #text/fhirpath
* action[=].action[=].condition.expression.expression = "%encounter.where((status = 'in-progress' and period.start + 1 day * %normalReportingDuration >= now()) or (status = 'finished' and period.end + 72 hours >= now())).select(true)"
* action[=].action[=].relatedAction.actionId = "check-reportable"
* action[=].action[=].relatedAction.relationship = #before-start
* action[=].action[=].relatedAction.offsetDuration = 6 'h'
* action[+].id = "check-reportable"
* action[=].description = "This action represents the check for suspected reportability of the eICR."
* action[=].textEquivalent = "Check Reportability and setup jobs for future reportability checks."
* action[=].code = USPublicHealthCodeSystemPlanDefinitionActions#execute-reporting-workflow
* action[=].action[0].id = "is-encounter-reportable"
* action[=].action[=].description = "This action represents the check for reportability to create the patients eICR."
* action[=].action[=].textEquivalent = "Check Trigger Codes based on RCTC Value sets."
* action[=].action[=].code = USPublicHealthCodeSystemPlanDefinitionActions#check-trigger-codes
* action[=].action[=].condition.kind = #applicability
* action[=].action[=].condition.expression.extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-alternative-expression-extension"
* action[=].action[=].condition.expression.extension.valueExpression.language = #text/cql-identifier
* action[=].action[=].condition.expression.extension.valueExpression.expression = "Is Encounter Reportable and Within Normal Reporting Duration?"
* action[=].action[=].condition.expression.extension.valueExpression.reference = "http://example.org/fhir/Library/RuleFilters|1.0.0"
* action[=].action[=].condition.expression.language = #text/fhirpath
* action[=].action[=].condition.expression.expression = "%encounter.where(period.start + 1 day * %normalReportingDuration >= now()).select(true) and (%conditions.exists() or %encounters.exists() or %immunizations.exists() or %procedures.exists() or %procedureOrders.exists() or %labOrders.exists() or %labTests.exists() or %labResults.exists() or %medicationAdministrations.exists() or %medicationOrders.exists() or %medicationDispenses.exists())"
* action[=].action[=].input[0].id = "conditions"
* action[=].action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-fhirquerypattern-extension"
* action[=].action[=].input[=].extension.valueString = "Condition?patient=Patient/{{context.patientId}}"
* action[=].action[=].input[=].type = #Condition
* action[=].action[=].input[=].codeFilter.path = "code"
* action[=].action[=].input[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/valueset-dxtc-example"
* action[=].action[=].input[+].id = "encounters"
* action[=].action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].action[=].input[=].extension.valueString = "encounter"
* action[=].action[=].input[=].type = #Encounter
* action[=].action[=].input[=].codeFilter.path = "reasonCode"
* action[=].action[=].input[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/valueset-dxtc-example"
* action[=].action[=].input[+].id = "immunizations"
* action[=].action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-fhirquerypattern-extension"
* action[=].action[=].input[=].extension.valueString = "Immunization?patient=Patient/{{context.patientId}}"
* action[=].action[=].input[=].type = #Immunization
* action[=].action[=].input[=].codeFilter.path = "vaccineCode"
* action[=].action[=].input[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/valueset-mrtc-example"
* action[=].action[=].input[+].id = "labOrders"
* action[=].action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-fhirquerypattern-extension"
* action[=].action[=].input[=].extension.valueString = "ServiceRequest?patient=Patient/{{context.patientId}}"
* action[=].action[=].input[=].type = #ServiceRequest
* action[=].action[=].input[=].codeFilter.path = "code"
* action[=].action[=].input[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/valueset-lotc-example"
* action[=].action[=].input[+].id = "labTests"
* action[=].action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-fhirquerypattern-extension"
* action[=].action[=].input[=].extension.valueString = "Observation?patient=Patient/{{context.patientId}}"
* action[=].action[=].input[=].type = #Observation
* action[=].action[=].input[=].codeFilter.path = "code"
* action[=].action[=].input[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/valueset-lotc-example"
* action[=].action[=].input[+].id = "diagnosticOrders"
* action[=].action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-fhirquerypattern-extension"
* action[=].action[=].input[=].extension.valueString = "DiagnosticReport?patient=Patient/{{context.patientId}}"
* action[=].action[=].input[=].type = #DiagnosticReport
* action[=].action[=].input[=].codeFilter.path = "code"
* action[=].action[=].input[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/valueset-lotc-example"
* action[=].action[=].input[+].id = "procedureOrders"
* action[=].action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-fhirquerypattern-extension"
* action[=].action[=].input[=].extension.valueString = "ServiceRequest?patient=Patient/{{context.patientId}}"
* action[=].action[=].input[=].type = #ServiceRequest
* action[=].action[=].input[=].codeFilter.path = "code"
* action[=].action[=].input[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/valueset-pctc-example"
* action[=].action[=].input[+].id = "procedures"
* action[=].action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-fhirquerypattern-extension"
* action[=].action[=].input[=].extension.valueString = "Procedure?patient=Patient/{{context.patientId}}"
* action[=].action[=].input[=].type = #Procedure
* action[=].action[=].input[=].codeFilter.path = "code"
* action[=].action[=].input[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/valueset-pctc-example"
* action[=].action[=].input[+].id = "medicationOrders"
* action[=].action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-fhirquerypattern-extension"
* action[=].action[=].input[=].extension.valueString = "MedicationRequest?patient=Patient/{{context.patientId}}"
* action[=].action[=].input[=].type = #MedicationRequest
* action[=].action[=].input[=].codeFilter.path = "medication"
* action[=].action[=].input[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/valueset-mrtc-example"
* action[=].action[=].input[+].id = "medicationDispenses"
* action[=].action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-fhirquerypattern-extension"
* action[=].action[=].input[=].extension.valueString = "MedicationDispense?patient=Patient/{{context.patientId}}"
* action[=].action[=].input[=].type = #MedicationDispense
* action[=].action[=].input[=].codeFilter.path = "medication"
* action[=].action[=].input[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/valueset-mrtc-example"
* action[=].action[=].input[+].id = "medicationAdministrations"
* action[=].action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-fhirquerypattern-extension"
* action[=].action[=].input[=].extension.valueString = "MedicationAdministration?patient=Patient/{{context.patientId}}"
* action[=].action[=].input[=].type = #MedicationAdministration
* action[=].action[=].input[=].codeFilter.path = "medication"
* action[=].action[=].input[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/valueset-mrtc-example"
* action[=].action[=].input[+].id = "labResults"
* action[=].action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].action[=].input[=].extension.valueString = "labTests"
* action[=].action[=].input[=].type = #Observation
* action[=].action[=].input[=].codeFilter.path = "value"
* action[=].action[=].input[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/valueset-ostc-example"
* action[=].action[=].input[+].id = "diagnosticResults"
* action[=].action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].action[=].input[=].extension.valueString = "diagnosticOrders"
* action[=].action[=].input[=].type = #DiagnosticReport
* action[=].action[=].input[=].codeFilter.path = "code"
* action[=].action[=].input[=].codeFilter.valueSet = "http://example.org/fhir/ValueSet/valueset-ostc-example"
* action[=].action[=].relatedAction.actionId = "create-eicr"
* action[=].action[=].relatedAction.relationship = #before-start
* action[=].action[+].id = "check-update-eicr"
* action[=].action[=].code = USPublicHealthCodeSystemPlanDefinitionActions#evaluate-condition
* action[=].action[=].condition.kind = #applicability
* action[=].action[=].condition.expression.extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-alternative-expression-extension"
* action[=].action[=].condition.expression.extension.valueExpression.language = #text/cql-identifier
* action[=].action[=].condition.expression.extension.valueExpression.expression = "Most recent eICR sent over 72 hours ago?"
* action[=].action[=].condition.expression.extension.valueExpression.reference = "http://example.org/fhir/Library/RuleFilters|1.0.0"
* action[=].action[=].condition.expression.language = #text/fhirpath
* action[=].action[=].condition.expression.expression = "((%lasteicr.last().entry[2].resource as Bundle).entry.first().resource as Composition).date < now() - 72 hours"
* action[=].action[=].input.id = "lasteicr"
* action[=].action[=].input.extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].action[=].input.extension.valueString = "eicrreport"
* action[=].action[=].input.type = #Bundle
* action[=].action[=].input.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-document-bundle"
* action[=].action[=].relatedAction.actionId = "create-eicr"
* action[=].action[=].relatedAction.relationship = #before-start
* action[=].action[+].id = "is-encounter-in-progress"
* action[=].action[=].code = USPublicHealthCodeSystemPlanDefinitionActions#evaluate-condition
* action[=].action[=].condition.kind = #applicability
* action[=].action[=].condition.expression.extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-alternative-expression-extension"
* action[=].action[=].condition.expression.extension.valueExpression.language = #text/cql-identifier
* action[=].action[=].condition.expression.extension.valueExpression.expression = "Is Encounter In Progress and Within Normal Reporting Duration or 72h or less after end of encounter?"
* action[=].action[=].condition.expression.extension.valueExpression.reference = "http://example.org/fhir/Library/RuleFilters|1.0.0"
* action[=].action[=].condition.expression.language = #text/fhirpath
* action[=].action[=].condition.expression.expression = "%inprogressencounter.where(status = 'in-progress' and period.start + 1 day * %normalReportingDuration >= now() or (status = 'finished' and period.end + 72 hours >= now())).exists()"
* action[=].action[=].input.id = "inprogressencounter"
* action[=].action[=].input.extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].action[=].input.extension.valueString = "encounter"
* action[=].action[=].input.type = #Encounter
* action[=].action[=].relatedAction.actionId = "check-reportable"
* action[=].action[=].relatedAction.relationship = #before-start
* action[=].action[=].relatedAction.offsetDuration = 6 'h'
* action[+].id = "create-eicr"
* action[=].description = "This action represents the creation of the eICR. It subsequently calls validate."
* action[=].textEquivalent = "Create eICR"
* action[=].code = USPublicHealthCodeSystemPlanDefinitionActions#create-report
* action[=].input[0].id = "patientdata"
* action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].input[=].extension.valueString = "patient"
* action[=].input[=].type = #Patient
* action[=].input[=].profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
* action[=].input[+].id = "conditiondata"
* action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].input[=].extension.valueString = "conditions"
* action[=].input[=].type = #Condition
* action[=].input[=].profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-encounter-diagnosis"
* action[=].input[+].id = "encounterdata"
* action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].input[=].extension.valueString = "encounter"
* action[=].input[=].type = #Encounter
* action[=].input[=].profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"
* action[=].input[+].id = "mrdata"
* action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].input[=].extension.valueString = "medicationOrders"
* action[=].input[=].type = #MedicationRequest
* action[=].input[=].profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
* action[=].input[+].id = "immzdata"
* action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].input[=].extension.valueString = "immunizations"
* action[=].input[=].type = #Immunization
* action[=].input[=].profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization"
* action[=].input[+].id = "procdata"
* action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].input[=].extension.valueString = "procedures"
* action[=].input[=].type = #Procedure
* action[=].input[=].profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure"
* action[=].input[+].id = "labResultdata"
* action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].input[=].extension.valueString = "labResults"
* action[=].input[=].type = #Observation
* action[=].input[=].profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab"
* action[=].input[+].id = "labOrderdata"
* action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].input[=].extension.valueString = "labOrders"
* action[=].input[=].type = #ServiceRequest
* action[=].input[=].profile = "http://hl7.org/fhir/StructureDefinition/ServiceRequest"
* action[=].input[+].id = "diagnosticResultdata"
* action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].input[=].extension.valueString = "diagnosticResults"
* action[=].input[=].type = #DiagnosticReport
* action[=].input[=].profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab"
* action[=].input[+].id = "diagnosticOrderdata"
* action[=].input[=].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].input[=].extension.valueString = "diagnosticOrders"
* action[=].input[=].type = #DiagnosticReport
* action[=].input[=].profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab"
* action[=].output.id = "eicrreport"
* action[=].output.type = #Bundle
* action[=].output.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-document-bundle"
* action[=].relatedAction.actionId = "validate-eicr"
* action[=].relatedAction.relationship = #before-start
* action[=].action.id = "anonymize-report"
* action[=].action.extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-trust-service-endpoint-extension"
* action[=].action.extension.valueReference = Reference(Endpoint/us-ph-endpoint-pha)
* action[=].action.description = "This action is used to anonymize a identifiable report"
* action[=].action.textEquivalent = "Anonymize the report."
* action[=].action.code = USPublicHealthCodeSystemPlanDefinitionActions#anonymize-report
* action[=].action.input.id = "report-to-be-anonymized"
* action[=].action.input.extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].action.input.extension.valueString = "output-report"
* action[=].action.input.type = #Bundle
* action[=].action.output.id = "anonymized-report"
* action[=].action.output.type = #Bundle
* action[=].action.output.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-reporting-bundle"
* action[+].id = "validate-eicr"
* action[=].description = "This action represents the validation of the eICR. It subsequently calls route-and-send."
* action[=].textEquivalent = "Validate eICR"
* action[=].code = USPublicHealthCodeSystemPlanDefinitionActions#validate-report
* action[=].input.id = "generatedeicrreport"
* action[=].input.extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].input.extension.valueString = "eicrreport"
* action[=].input.type = #Bundle
* action[=].input.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-document-bundle"
* action[=].output.id = "valideicrreport"
* action[=].output.type = #Bundle
* action[=].output.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-document-bundle"
* action[=].relatedAction.actionId = "route-and-send-eicr"
* action[=].relatedAction.relationship = #before-start
* action[+].id = "route-and-send-eicr"
* action[=].description = "This action represents the routing and sending of the eICR."
* action[=].textEquivalent = "Route and send eICR"
* action[=].code = USPublicHealthCodeSystemPlanDefinitionActions#submit-report
* action[=].input.id = "validatedeicrreport"
* action[=].input.extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-relateddata-extension"
* action[=].input.extension.valueString = "valideicrreport"
* action[=].input.type = #Bundle
* action[=].input.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-document-bundle"
* action[=].output.id = "submittedeicrreport"
* action[=].output.type = #Bundle
* action[=].output.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-document-bundle"
* action[+].id = "encounter-modified"
* action[=].description = "This action represents the start of the reporting workflow in response to the encounter-modified event"
* action[=].textEquivalent = "Start the reporting workflow in response to an encounter-modified event"
* action[=].code = USPublicHealthCodeSystemPlanDefinitionActions#initiate-reporting-workflow "Initiate a reporting workflow"
* action[=].trigger.id = "encounter-modified-trigger"
* action[=].trigger.extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-named-eventtype-extension"
* action[=].trigger.extension.valueCodeableConcept = USPublicHealthCodeSystemTriggerDefinitionNamedEvents#encounter-modified "Indicates modifications to data elements of an encounter"
* action[=].trigger.type = #named-event
* action[=].trigger.name = "encounter-modified"
* action[=].condition.kind = #applicability
* action[=].condition.expression.extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-alternative-expression-extension"
* action[=].condition.expression.extension.valueExpression.language = #text/cql-identifier
* action[=].condition.expression.extension.valueExpression.expression = "Is Encounter Longer Than Normal Reporting Duration?"
* action[=].condition.expression.extension.valueExpression.reference = "http://example.org/fhir/Library/RuleFilters|1.0.0"
* action[=].condition.expression.language = #text/fhirpath
* action[=].condition.expression.expression = "%encounter.where(period.start + 1 day * %normalReportingDuration < now()).select(true)"
* action[=].relatedAction.actionId = "create-eicr"
* action[=].relatedAction.relationship = #before-start

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-plandefinition-example.fsh

Instance: us-ph-plandefinition-example
InstanceOf: USPublicHealthPlanDefinition
Title: "US Public Health PlanDefinition - Workflow Definition"
Description: "US Public Health PlanDefinition: Workflow Definition example"
Usage: #example
* extension[0].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-receiver-address-extension"
* extension[=].valueReference.reference = "Endpoint/us-ph-endpoint-ymca"
* extension[+].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-receiver-jwks-url-extension"
* extension[=].valueUrl = "http://example.org/jwks/123"
* extension[+].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-data-encryption-algorithm-extension"
* extension[=].valueCode = #RSA384
* url = "http://hl7.org/fhir/us/ph-library/PlanDefinition/us-ph-plandefinition-example"
* version = "0.1"
* name = "PlanDefinitionUSPublicHealthExample"
* title = "PlanDefinition US Public Health Example"
* type = $plan-definition-type#workflow-definition "Workflow Definition"
* status = #active
* experimental = true
* date = "2020-07-31T12:32:29.858-05:00"
* publisher = "Example Publisher"
* description = "An example US Public Health PlanDefinition"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* jurisdiction.text = "United States of America"
* effectivePeriod.start = "2020-12-01"
* library = "http://example.org/fhir/Library/RuleFilters|1.0.0"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-plandefinition-namedEvent-example.fsh

Instance: us-ph-plandefinition-namedEvent-example
InstanceOf: USPublicHealthPlanDefinition
Title: "US Public Health PlanDefinition - NamedEvent"
Description: "US Public Health PlanDefinition: NamedEvent example"
Usage: #example
* url = "http://example.org/fhir/PlanDefinition/us-ph-plandefinition-namedEvent-example"
* version = "0.1"
* name = "USPublicHealthPlanDefinitionNamedEventExample"
* title = "US Public Health PlanDefinition NamedEvent Example"
* type = $plan-definition-type#workflow-definition "Workflow Definition"
* status = #active
* experimental = true
* date = "2022-06-01T12:32:29.858-05:00"
* publisher = "HL7 Public Health Work Group"
* description = "This PlanDefinition is a PlanDefinition instance created for the purposes of demonstrating by example the usage of the US Public Health Named Event extension."
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* jurisdiction.text = "United States of America"
* effectivePeriod.start = "2022-06-01"
* action.id = "start-workflow"
* action.description = "This action represents the start of the reporting workflow in response to the encounter-start event"
* action.textEquivalent = "Start the reporting workflow in response to an encounter-start event"
* action.code = USPublicHealthCodeSystemPlanDefinitionActions#initiate-reporting-workflow "Initiate a reporting workflow"
* action.trigger.id = "encounter-start"
* action.trigger.extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-named-eventtype-extension"
* action.trigger.extension.valueCodeableConcept = USPublicHealthCodeSystemTriggerDefinitionNamedEvents#encounter-start "Indicates the start of an encounter"
* action.trigger.type = #named-event
* action.trigger.name = "encounter-start"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-postpartum-status-eve-everywoman.fsh

Instance: us-ph-postpartum-status-eve-everywoman
InstanceOf: USPublicHealthIsPostpartum
Title: "US Public Health Is Postpartum - Eve Everywoman"
Description: "US Public Health Is Postpartum: Eve Everywoman example"
Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:9701b264-0f70-47f9-bfbf-aa4f9686cd3a"
* status = #final
* code = $sct#249197004 "Maternal condition during puerperium (observable entity)"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectiveDateTime = "2018-01-05T10:15:00+10:00"
* valueCodeableConcept = $v2-0532#Y "Yes"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-practitionerrole-henry-seven.fsh

Instance: us-ph-practitionerrole-henry-seven
InstanceOf: USPublicHealthPractitionerRole
Title: "US Public Health PractitionerRole - Henry Seven"
Description: "US Public Health PractitionerRole: Henry Seven example"
Usage: #example
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339108"
* practitioner.reference = "Practitioner/us-core-practitioner-henry-seven"
* practitioner.display = "Henry Seven, MD"
* organization.reference = "Organization/us-ph-organization-salem-medical-center"
* organization.display = "Salem Medical Center"
* code = $provider-taxonomy#261QP2300X "Primary Care Clinic/Center"
* specialty = $sct#419772000 "Family practice"
* location.reference = "Location/us-ph-location-salem-medical-center"
* location.display = "Salem Medical Center"
* telecom.system = #email
* telecom.value = "henry.seven@example.com"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-pregnancy-outcome-eve-everywoman.fsh

Instance: us-ph-pregnancy-outcome-eve-everywoman
InstanceOf: USPublicHealthPregnancyOutcomeObservation
Title: "US Public Health Pregnancy Outcome - Eve Everywoman"
Description: "US Public Health Pregnancy Outcome: Eve Everywoman example"
Usage: #example
* status = #final
* code = $loinc#63893-2 "Outcome of pregnancy"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* focus.reference = "Observation/us-ph-pregnancy-status-eve-everywoman"
* focus.display = "Pregnancy (finding)"
* effectiveDateTime = "2018-01-05"
* valueCodeableConcept = $sct#21243004 "Term birth of newborn (finding)"
* component.code = $loinc#73771-8 "Birth order"
* component.valueInteger = 1

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-pregnancy-status-eve-everywoman.fsh

Instance: us-ph-pregnancy-status-eve-everywoman
InstanceOf: USPublicHealthPregnancyStatusObservation
Title: "US Public Health Pregnancy Status - Eve Everywoman"
Description: "US Public Health Pregnancy Status: Eve Everywoman example"
Usage: #example
* extension[0].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-date-recorded-extension"
* extension[=].valueDateTime = "2017-10-01"
* extension[+].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-date-determined-extension"
* extension[=].valueDateTime = "2017-10-01"
* status = #final
* code = $loinc#82810-3 "Pregnancy status"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectivePeriod.start = "2017-08-26"
* valueCodeableConcept = $sct#77386006 "Pregnancy (finding)"
* method = $sct#16310003 "Diagnostic ultrasonography (procedure)"
* component[0].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-date-determined-extension"
* component[=].extension.valueDateTime = "2017-10-01"
* component[=].code = $loinc#53691-2 "Gestational age Estimated from patient reported estimated date of conception"
* component[=].valueQuantity.value = 143
* component[=].valueQuantity.unit = "d"
* component[+].extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-date-determined-extension"
* component[=].extension.valueDateTime = "2017-10-01"
* component[=].code = $loinc#57064-8 "Delivery date Estimated from date fundal height reaches umb"
* component[=].valueDateTime = "2018-05-01"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-reportability-information-observation.fsh

Instance: us-ph-reportability-information-observation
InstanceOf: Observation
Title: "US Public Health Reportability Information Observation - Condition Reportable"
Description: "US Public Health Reportability Information Observation: Condition Reportable example"
Usage: #example
* extension[0].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-determination-of-reportability-extension"
* extension[=].valueCodeableConcept = urn:oid:2.16.840.1.114222.4.5.274#RRVS1 "Reportable"
* extension[+].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-determination-of-reportability-reason-extension"
* extension[=].valueString = "Condition is reportable"
* extension[+].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-determination-of-reportability-rule-extension"
* extension[=].valueString = "Description of rule used in reportability determination"
* status = #final
* code = urn:oid:2.16.840.1.114222.4.5.274#RRVS5 "Patient home address"
* component.code = urn:oid:2.16.840.1.114222.4.5.232#RR4 "Timeframe to report (urgency)"
* component.valueQuantity = 24 'H' "H"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-reporting-bundle-example.fsh

Instance: us-ph-reporting-bundle-example
InstanceOf: USPublicHealthReportingBundle
Title: "US Public Health Reporting Bundle - Eve Everywoman"
Description: "US Public Health Reporting Bundle: Eve Everywoman example"
Usage: #example
* type = #message
* timestamp = "2020-11-20T11:15:33-10:00"
* entry[messageHeader].fullUrl = "http://example.org/fhir/Bundle/inline-us-ph-messageheader-content-bundle"
* entry[messageHeader].resource = inline-us-ph-messageheader-content-bundle
* entry[contentBundle].fullUrl = "http://example.org/fhir/Bundle/us-ph-content-bundle-example"
* entry[contentBundle].resource = us-ph-content-bundle-example


Instance: inline-us-ph-messageheader-content-bundle
InstanceOf: USPublicHealthMessageHeader
Title: "US Public Health MessageHeader - Content Bundle"
Description: "US Public Health MessageHeader: Content Bundle example"
Usage: #inline
* extension[0].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-data-encrypted-extension"
* extension[=].valueBoolean = false
* extension[+].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-message-processing-category-extension"
* extension[=].valueCode = #consequence
* eventCoding = USPublicHealthCodeSystemMessageTypes#eicr-case-report-message "Indicates a message containing electronic case report healthcare data sent from clinical care."
* destination.name = "YMCA Acme Message Gateway"
* destination.target.reference = "Device/device-software-ymca"
* destination.endpoint = "http://example.org/ymca/fhir"
* sender.reference = "Organization/us-ph-organization-salem-medical-center"
* source.name = "Acme Central Patient Registry"
* source.software = "FooBar Patient Manager"
* source.version = "3.1.45.AABB"
* source.contact.system = #phone
* source.contact.value = "+1 (555) 123 4567"
* source.endpoint = "http://example.org/salem-medical-center/fhir"
* reason = USPublicHealthCodeSystemTriggerDefinitionNamedEvents#encounter-close "Indicates the close of an encounter"
* focus.reference = "Bundle/us-ph-content-bundle-example"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-response-bundle-example.fsh

Instance: us-ph-response-bundle-example
InstanceOf: USPublicHealthResponseBundle
Title: "US Public Health Response Bundle - Eve Everywoman"
Description: "US Public Health Response Bundle: Eve Everywoman example"
Usage: #example
* meta.versionId = "10"
* type = #message
* timestamp = "2022-11-20T11:15:33-10:00"
* entry[0].fullUrl = "MessageHeader/us-ph-messageheader-response"
* entry[=].resource = us-ph-messageheader-response
* entry[+].fullUrl = "Bundle/us-ph-content-bundle-example"
* entry[=].resource = us-ph-content-bundle-example

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-specification-bundle-example.fsh

Instance: us-ph-specification-bundle-example
InstanceOf: USPublicHealthSpecificationBundle
Title: "US Public Health Specification Bundle - Cancer Reporting"
Description: "US Public Health Specification Bundle: Cancer Reporting example"
Usage: #example
* meta.versionId = "11"
* type = #collection
* timestamp = "2022-11-20T11:15:33-10:00"
* entry[0].fullUrl = "PlanDefinition/plandefinition-cancer-example"
* entry[=].resource = plandefinition-cancer-example
* entry[+].fullUrl = "ValueSet/valueset-cancer-trigger-codes-example"
* entry[=].resource = valueset-cancer-trigger-codes-example


Instance: valueset-cancer-trigger-codes-example
InstanceOf: USPublicHealthValueSet
Usage: #inline
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/valueset-steward"
* extension[=].valueContactDetail.name = "CSTE Steward"
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/valueset-author"
* extension[=].valueContactDetail.name = "CSTE Author"
* url = "http://hl7.org/fhir/us/ph-library/ValueSet/valueset-cancer-trigger-codes-example"
* version = "3.0.0"
* name = "SNOMEDCancerCodesExample"
* title = "SNOMED Cancer Codes Example"
* status = #draft
* experimental = true
* date = "2018-08-01"
* publisher = "HL7 Public Health Work Group (http://www.hl7.org/Special/committees/pher/index.cfm)"
* contact.name = "HL7 International - Public Health"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/pher"
* description = "This example set of values contains diagnoses or problems that represent that the patient may have a potentially reportable condition regardless of the clinical presentation of the condition"
* useContext[0].code = $us-ph-codesystem-usage-context-type#priority "Priority"
* useContext[=].valueCodeableConcept = $us-ph-codesystem-usage-context#routine "Routine"
* useContext[+].code = $usage-context-type#program
* useContext[=].valueCodeableConcept = USPublicHealthCodeSystemForValueSetUseContext#ph-reporting "ValueSet is to be used in the context of public health reporting use cases."
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* jurisdiction.text = "United States of America"
* copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* compose.include.system = "http://snomed.info/sct"
* compose.include.concept.code = #281566005
* compose.include.concept.display = "Abdominothoracic neuroblastoma"

Instance: plandefinition-cancer-example
InstanceOf: USPublicHealthPlanDefinition
Usage: #inline
* extension[0].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-receiver-address-extension"
* extension[=].valueReference.reference = "Endpoint/us-ph-endpoint-salem-medical-center"
* extension[+].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-async-indicator-extension"
* extension[=].valueBoolean = true
* extension[+].url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-expected-response-time-extension"
* extension[=].valueDuration = 1 'min'
* url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/plandefinition-cancer-example"
* version = "1.0"
* name = "PlanDefinitionCancerExample"
* title = "PlanDefinition Cancer Reporting Example"
* type = $plan-definition-type#workflow-definition "Workflow Definition"
* status = #draft
* experimental = true
* date = "2020-11-04T12:32:29.858-05:00"
* publisher = "ph-library"
* description = "This is the Cancer Reporting Knowledge Artifact"
* effectivePeriod.start = "2020-11-01"
* relatedArtifact.type = #depends-on
* relatedArtifact.label = "Cancer Trigger Codes"
* relatedArtifact.resource = "http://hl7.org/fhir/us/ph-library/ValueSet/valueset-cancer-trigger-codes-example"
* action[0].id = "initiate-reporting-workflow"
* action[=].description = "This action represents the start of a reporting workflow."
* action[=].textEquivalent = "Initiate Reporting Workflow"
* action[=].code = USPublicHealthCodeSystemPlanDefinitionActions#initiate-reporting-workflow
* action[=].trigger.extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-named-eventtype-extension"
* action[=].trigger.extension.valueCodeableConcept = USPublicHealthCodeSystemTriggerDefinitionNamedEvents#encounter-close "Indicates the close of an encounter"
* action[=].trigger.type = #named-event
* action[=].trigger.name = "encounter-close"
* action[=].relatedAction.actionId = "check-trigger-codes"
* action[=].relatedAction.relationship = #before-start
* action[=].relatedAction.offsetDuration = 1 'min'
* action[+].id = "check-trigger-codes"
* action[=].description = "This action represents the execution of the checking trigger codes in the  workflow."
* action[=].textEquivalent = "Check Trigger Codes"
* action[=].action.code = USPublicHealthCodeSystemPlanDefinitionActions#check-trigger-codes
* action[=].action.condition.kind = #applicability
* action[=].action.condition.expression.language = #text/fhirpath
* action[=].action.condition.expression.expression = "Condition.code.memberof(http://hl7.org/fhir/us/ph-library/ValueSet/valueset-cancer-trigger-codes-example)"
* action[=].action.relatedAction.actionId = "create-report"
* action[=].action.relatedAction.relationship = #before-start
* action[+].id = "create-report"
* action[=].description = "This action represents the creation of a cancer report."
* action[=].textEquivalent = "Create Report"
* action[=].code = USPublicHealthCodeSystemPlanDefinitionActions#create-report

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-specification-library-example.fsh

Instance: us-ph-specification-library-example
InstanceOf: USPublicHealthSpecificationLibrary
Usage: #example
* url = "http://example.org/fhir/Library/us-ph-specification-library-example"
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:oid:2.16.840.1.114222.4.11.11111"
* version = "2020-11-01"
* name = "USPublicHealthSpecificationLibraryExample"
* title = "US Public Health Specification Library Example"
* status = #active
* experimental = true
* type = $library-type#asset-collection
* publisher = "{site.data.fhir.ig.publisher}"
* description = "Description of library"
* useContext[0].code = $us-ph-codesystem-usage-context-type#reporting "Reporting"
* useContext[=].valueCodeableConcept = $us-ph-codesystem-usage-context#triggering "Triggering"
* useContext[+].code = $us-ph-codesystem-usage-context-type#specification-type "Specification Type"
* useContext[=].valueCodeableConcept = $us-ph-codesystem-usage-context#program "Program"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* jurisdiction.text = "United States of America"
* purpose = "Purpose of library"
* effectivePeriod.start = "2020-11-01"
* relatedArtifact[0].type = #composed-of
* relatedArtifact[=].resource = "http://hl7.org/fhir/us/ph-library/PlanDefinition/us-ph-plandefinition-example"
* relatedArtifact[+].type = #composed-of
* relatedArtifact[=].resource = "http://hl7.org/fhir/us/ph-library/Library/us-ph-triggering-valueset-library-example"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-supplemental-library-example.fsh

Instance: us-ph-supplemental-library-example
InstanceOf: USPublicHealthSupplementalLibrary
Usage: #example
* url = "http://example.org/fhir/Library/us-ph-supplemental-library-example"
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:oid:2.16.840.1.114222.4.11.11112"
* version = "2022-06-01"
* name = "USPHSupplementalLibraryExample"
* title = "US Public Health Supplemental Library Example"
* status = #active
* experimental = true
* type = $library-type#asset-collection
* publisher = "{site.data.fhir.ig.publisher}"
* description = "Description of library"
* useContext[0].code = $us-ph-codesystem-usage-context-type#reporting "Reporting"
* useContext[=].valueCodeableConcept = $us-ph-codesystem-usage-context#supplemental "Supplemental"
* useContext[+].code = $us-ph-codesystem-usage-context-type#specification-type "Specification Type"
* useContext[=].valueCodeableConcept = $us-ph-codesystem-usage-context#program "Program"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* jurisdiction.text = "United States of America"
* purpose = "Purpose of library"
* effectivePeriod.start = "2020-11-01"
* relatedArtifact[0].type = #composed-of
* relatedArtifact[=].resource = "http://hl7.org/fhir/us/ph-library/Library/us-ph-executable-library-rule-filters"
* relatedArtifact[+].type = #composed-of
* relatedArtifact[=].resource = "http://hl7.org/fhir/us/ph-library/Library/us-ph-supplemental-valueset-library-example"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-supplemental-valueset-library-example.fsh

Instance: us-ph-supplemental-valueset-library-example
InstanceOf: USPublicHealthSupplementalValuesetLibrary
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-supplemental-valueset-library"
* url = "http://hl7.org/fhir/us/ph-library/Library/us-ph-supplemental-valueset-library-example"
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:oid:2.16.840.1.114222.4.11.11113"
* version = "2022-07-01"
* name = "USPublicHealthSupplementalValueSetLibraryExample"
* title = "US Public Health Supplemental ValueSet Library Example"
* status = #active
* experimental = true
* type = $library-type#asset-collection
* publisher = "{site.data.fhir.ig.publisher}"
* description = "Description of library"
* useContext[0].code = $us-ph-codesystem-usage-context-type#reporting "Reporting"
* useContext[=].valueCodeableConcept = $us-ph-codesystem-usage-context#supplemental "Supplemental"
* useContext[+].code = $us-ph-codesystem-usage-context-type#specification-type "Specification Type"
* useContext[=].valueCodeableConcept = $us-ph-codesystem-usage-context#value-set-library "ValueSet Library"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* jurisdiction.text = "United States of America"
* purpose = "Purpose of library"
* effectivePeriod.start = "2020-11-01"
* relatedArtifact.type = #composed-of
* relatedArtifact.resource = "http://hl7.org/fhir/us/ph-library/ValueSet/us-ph-valueset-supplemental-example"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-survey-practitioner-group-example.fsh

Instance: us-ph-survey-practitioner-group-example
InstanceOf: USPublicHealthSurveyPractitionerGroup
Title: "US Public Health Survey Practitioner Group - Practitioner in Survey"
Description: "US Public Health Survey Practitioner Group: Practitioner in Survey example"
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2023-07-05T23:31:37.496Z"
* type = #person
* actual = true
* managingEntity.reference = "Organization/us-ph-organization-health-authority-west"
* member.entity.reference = "Practitioner/us-core-practitioner-henry-seven"
* member.period.start = "2022-01-10"
* member.period.end = "2022-01-10"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-transportation-details-eve-everywoman.fsh

Instance: us-ph-transportation-details-eve-everywoman
InstanceOf: USPublicHealthTransportationDetails
Title: "US Public Health Transportation Details - Eve Everywoman"
Description: "US Public Health Transportation Details: Eve Everywoman example"
Usage: #example
* status = #final
* category = $v3-ActClass#TRNS "Transportation"
* category.text = "Transportation"
* code = $sct#424483007 "Transportation details (observable entity)"
* code.text = "Transportation details (observable entity)"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectiveDateTime = "2020-11-18T22:33:22Z"
* valueCodeableConcept = $sct#21812002 "Ocean liner, device (physical object)"
* valueCodeableConcept.text = "Cruise Ship"
* component[0].code.text = "Ship name"
* component[=].valueString = "Princess of the Sea"
* component[+].code.text = "Cabin number"
* component[=].valueString = "69B"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-travel-history-eve-everywoman-1999.fsh

Instance: us-ph-travel-history-eve-everywoman-1999
InstanceOf: USPublicHealthTravelHistory
Title: "US Public Health Travel History - Eve Everywoman 1999"
Description: "US Public Health Travel History: Eve Everywoman 1999 example"
Usage: #example
* status = #final
* code = $sct#420008001 "Travel"
* code.text = "Travel History"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectivePeriod.start = "1999"
* effectivePeriod.end = "2007"
* component.code = $v3-ParticipationType#LOC "Location"
* component.valueCodeableConcept.text = "Spent 8 years in the UK during the BSE outbreak"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/instances/us-ph-travel-history-eve-everywoman-201610.fsh

Instance: us-ph-travel-history-eve-everywoman-201610
InstanceOf: USPublicHealthTravelHistory
Title: "US Public Health Travel History - Eve Everywoman 201610"
Description: "US Public Health Travel History: Eve Everywoman 201610 example"
Usage: #example
* status = #final
* code = $sct#420008001 "Travel"
* code.text = "Travel History"
* subject.reference = "Patient/us-ph-patient-eve-everywoman"
* subject.display = "Eve Everywoman"
* effectivePeriod.start = "2016-10-22"
* effectivePeriod.end = "2016-10-30"
* component.extension.url = "http://hl7.org/fhir/us/ph-library/StructureDefinition/us-ph-address-extension"
* component.extension.valueAddress.line = "1170 N Rancho Robles Rd"
* component.extension.valueAddress.city = "Oracle"
* component.extension.valueAddress.state = "AZ"
* component.extension.valueAddress.postalCode = "8562"
* component.extension.valueAddress.country = "US"
* component.code = $v3-ParticipationType#LOC "Location"

---

File: repos/HL7_SLASH_fhir-us-ph-library/input/fsh/invariants/cvs-1.fsh

Invariant: cvs-1
Description: "Only one of rulesText, expression, or a compose definition SHALL be provided"
Severity: #error
Expression: "extension('http://hl7.org/fhir/StructureDefinition/valueset-rules-text').exists() xor extension('http://hl7.org/fhir/StructureDefinition/valueset-expression').exists() xor compose.exists()"
XPath: "exists(f:extension)"

---

