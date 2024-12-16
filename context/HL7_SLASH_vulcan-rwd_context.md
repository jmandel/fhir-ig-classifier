File: repos/HL7_SLASH_vulcan-rwd/input/fsh/capability.fsh

Instance: CapabilityStatement-RWDServer
InstanceOf: CapabilityStatement
* name = "RealWorldDataServer"
* title = "Real World Data Server Capability Statement"
* description = "This CapabilityStatement describes the basic rules for the Real World Data server actor that is responsible for providing responses to queries submitted by Real World Data requestors. The complete list of FHIR profiles, RESTful operations, and search parameters supported by Real World Data servers are defined in this CapabilityStatement.  It is inherits from the International Patient Access server capability statement."
* status = #draft
* date = 2023-04-30
* kind = #requirements
* imports = "http://hl7.org/fhir/uv/ipa/CapabilityStatement/ipa-server|1.0.0"
* fhirVersion = #4.0.1
* format[0] = http://hl7.org/fhir/fhir-format-type#xml
* format[1] = http://hl7.org/fhir/fhir-format-type#json
* implementationGuide = "http://hl7.org/fhir/uv/ipa/ImplementationGuide/hl7.fhir.uv.ipa|1.0.0"
* rest
  * mode = #server
  * resource[0]
    * type = http://hl7.org/fhir/fhir-types#Procedure
    * profile = Canonical(ProcedureRwd)
    * interaction[0].code = #read
    * interaction[+].code = #vread
    * interaction[+].code = #search-type
    * searchParam[0]
      * name = "Interpretation"
      * definition = Canonical(ProcedureOutcomeSearchParameter)
      * type = #token
  * resource[+]
    * type = http://hl7.org/fhir/fhir-types#Encounter
    * profile = Canonical(EncounterRwd)
    * interaction[0].code = #read
    * interaction[+].code = #vread
    * interaction[+].code = #search-type
    * searchParam[0]
      * name = "DischargeDisposition"
      * definition = Canonical(EncounterDischargeDispositionSearchParameter)
      * type = #token
  * resource[+]
    * type = http://hl7.org/fhir/fhir-types#Observation
    * profile = Canonical(ObservationLaboratoryResultsRwd)
    * interaction[0].code = #read
    * interaction[+].code = #vread
    * interaction[+].code = #search-type
    * searchParam[0]
      * name = "Interpretation"
      * definition = Canonical(ObservationInterpretationSearchParameter)
      * type = #token
  * resource[+]
    * type = http://hl7.org/fhir/fhir-types#MedicationStatement
    * profile = Canonical(MedicationStatementRwd)
    * interaction[0].code = #read
    * interaction[+].code = #vread
    * interaction[+].code = #search-type
  * resource[+]
    * type = http://hl7.org/fhir/fhir-types#MedicationDispense
    * profile = Canonical(MedicationDispenseRwd)
    * interaction[0].code = #read
    * interaction[+].code = #vread
    * interaction[+].code = #search-type
  * resource[+]
    * type = http://hl7.org/fhir/fhir-types#MedicationAdministration
    * profile = Canonical(MedicationAdministrationRwd)
    * interaction[0].code = #read
    * interaction[+].code = #vread
    * interaction[+].code = #search-type


---

File: repos/HL7_SLASH_vulcan-rwd/input/fsh/encounter.fsh

Profile: EncounterRwd
Parent: Encounter
Description: "A profile on Encounter that indicates the minimum set of attributes required for finding patients who were hospitalized."
* status MS
* subject MS
* subject only Reference(http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-patient)
* period MS
* reasonCode MS
* reasonReference MS
* reasonReference only Reference(http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-condition or http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-problem-list-item or ProcedureRwd or http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-observation or ImmunizationRecommendation)
* diagnosis MS
  * condition MS
  * condition only Reference(http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-condition or http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-problem-list-item)
* hospitalization MS
  * dischargeDisposition MS


---

File: repos/HL7_SLASH_vulcan-rwd/input/fsh/example_valuesets.fsh

Alias: $ICD10CM = http://hl7.org/fhir/sid/icd-10-cm
Alias: $RxNorm = http://www.nlm.nih.gov/research/umls/rxnorm
Alias: $NDC = http://hl7.org/fhir/sid/ndc
Alias: $EMEAPRODS = http://example.org/emeaproducts
Alias: $LOINC = http://loinc.org
Alias: $SNOMED = http://snomed.info/sct
Alias: $CVX = http://hl7.org/fhir/sid/cvx

ValueSet: ExampleACSConditionCodes
Title: "ACS Example Condition Codes"
Description: "An example value set of ICD-10 codes for the Acute Coronary Syndrome use case."
* ^experimental = true
* $ICD10CM#I24.0
* $ICD10CM#I21
* $ICD10CM#I21.9
* $ICD10CM#I25.720
* $ICD10CM#I25.710
* $ICD10CM#I25.760
* $ICD10CM#I25.700
* $ICD10CM#I25.750
* $ICD10CM#I25.730
* $ICD10CM#I25.790
* $ICD10CM#I25.110
* $ICD10CM#I21.A1
* $ICD10CM#I21.4
* $ICD10CM#I21.A9
* $ICD10CM#I21.A
* $ICD10CM#I21.02
* $ICD10CM#I21.21
* $ICD10CM#I21.01
* $ICD10CM#I21.09
* $ICD10CM#I21.19
* $ICD10CM#I21.29
* $ICD10CM#I21.11
* $ICD10CM#I21.0
* $ICD10CM#I21.1
* $ICD10CM#I21.2
* $ICD10CM#I21.3
* $ICD10CM#I22
* $ICD10CM#I22.0
* $ICD10CM#I22.1
* $ICD10CM#I22.8
* $ICD10CM#I22.9
* $ICD10CM#I22.2
* $ICD10CM#I20.0

ValueSet: ExampleACSOralAntiplatelets
Title: "ACS Example Oral Antiplatelet Drug Codes"
Description: "An example value set of drug codes for oral antiplatelets for the Acute Coronary Syndrome use case."
* ^experimental = true
* codes from valueset ExampleClopidogrelCodes
* codes from valueset ExampleTicagrelorCodes
* codes from valueset ExamplePrasugrelCodes

ValueSet: ExampleClopidogrelCodes
Title: "ACS Example Clopidogrel Codes"
Description: "An example value set of codes for Clopidogrel for the Acute Coronary Syndrome use case."
* ^experimental = true
* $RxNorm#236991
* $RxNorm#1181790
* $RxNorm#1181791
* $RxNorm#32968
* $RxNorm#749195
* $NDC#50228012190
* $RxNorm#749196
* $NDC#43547048503
* $NDC#50268018412
* $NDC#43547048510
* $NDC#69367019430
* $NDC#69367019405
* $NDC#62034001773
* $NDC#64679031503
* $NDC#50268018411
* $NDC#55648031500
* $NDC#62034001711
* $NDC#16729021946
* $NDC#31722090201
* $NDC#55111067106
* $NDC#31722090290
* $NDC#55648031502
* $NDC#55111067131
* $NDC#55111067190
* $NDC#64679031501
* $NDC#55111067178
* $NDC#55111067179
* $NDC#55111067181
* $NDC#55648031501
* $NDC#64679031504
* $NDC#16729021945
* $NDC#16729021910
* $NDC#55111067130
* $NDC#64679031502
* $NDC#55111067101
* $NDC#68084075225
* $NDC#55111067148
* $NDC#60505353205
* $NDC#50228012105
* $NDC#51079055801
* $NDC#42543071401
* $NDC#55648031504
* $NDC#42543071490
* $NDC#51079055803
* $NDC#31722090205
* $NDC#60429011033
* $NDC#55111067105
* $NDC#16729021975
* $NDC#50228012130
* $NDC#68084075295
* $NDC#42543071430
* $NDC#42543071405
* $NDC#904646707
* $NDC#31722090230
* $NDC#63653133202
* $RxNorm#749198
* $NDC#63653133203
* $RxNorm#749197
* $NDC#435470485
* $NDC#425430714
* $NDC#3783628
* $NDC#167290219
* $NDC#510790558
* $NDC#556480315
* $NDC#646790315
* $NDC#680840537
* $NDC#317220902
* $RxNorm#329449
* $NDC#68071489803
* $NDC#65862035761
* $NDC#68788746309
* $NDC#68788746303
* $NDC#68645059090
* $NDC#68788746306
* $NDC#50228012405
* $NDC#50090130000
* $NDC#50228012490
* $NDC#70518047101
* $NDC#31722090105
* $NDC#61919073790
* $NDC#70518189800
* $RxNorm#309362
* $NDC#63629804501
* $NDC#31722090190
* $NDC#71335123201
* $NDC#70518151000
* $NDC#71335123202
* $NDC#53002167200
* $NDC#71335123204
* $NDC#53002167203
* $NDC#71335075203
* $NDC#70518213600
* $NDC#71335075204
* $NDC#71335123203
* $NDC#71399750002
* $NDC#70518107901
* $NDC#43547048403
* $NDC#71335075201
* $NDC#68788723803
* $NDC#71335075202
* $NDC#71205007330
* $NDC#71399750001
* $NDC#70518138300
* $NDC#71399750003
* $NDC#67046010021
* $NDC#71399750005
* $NDC#67046010015
* $NDC#71399750009
* $NDC#70518071700
* $NDC#43547048409
* $NDC#67046009915
* $NDC#43547048450
* $NDC#67046009914
* $NDC#68788723806
* $NDC#67046009960
* $NDC#68788723809
* $NDC#67046010028
* $NDC#70518107902
* $NDC#67046009921
* $NDC#71205007360
* $NDC#67046009907
* $NDC#71205007390
* $NDC#71717010109
* $NDC#67046010007
* $NDC#76519101602
* $NDC#67046009920
* $NDC#71093014204
* $NDC#70518075000
* $NDC#68071426809
* $NDC#67046010030
* $NDC#70518099100
* $NDC#67046010060
* $NDC#71335008001
* $NDC#67046010014
* $NDC#71335008002
* $NDC#67046009930
* $NDC#51407003210
* $NDC#67046009928
* $NDC#51407003230
* $NDC#71717010150
* $NDC#51407003290
* $NDC#71717010103
* $NDC#70400010110
* $NDC#68071413803
* $NDC#70400010130
* $NDC#76519101603
* $NDC#70400010190
* $NDC#71093014205
* $NDC#64980034303
* $NDC#70518047102
* $NDC#71335140902
* $NDC#55700057090
* $NDC#71335140904
* $NDC#70518099000
* $NDC#70710141700
* $NDC#71335008003
* $NDC#70771106209
* $NDC#71335008004
* $NDC#63187063990
* $NDC#71335058101
* $NDC#70771106205
* $NDC#71335058102
* $NDC#70710141703
* $NDC#71335058103
* $NDC#70518047100
* $NDC#71335058104
* $NDC#64980034309
* $NDC#31722090101
* $NDC#64980034350
* $NDC#70518107900
* $NDC#69117101001
* $NDC#50090491800
* $NDC#615801430
* $NDC#71335140901
* $NDC#68071403103
* $NDC#71335140903
* $NDC#43353026930
* $NDC#70518040000
* $NDC#615801405
* $NDC#69117101004
* $NDC#69117101002
* $NDC#70771106200
* $NDC#63629685701
* $NDC#68071331909
* $NDC#70710141705
* $NDC#50090259800
* $NDC#68071402303
* $NDC#65862035799
* $NDC#70771106203
* $NDC#93731498
* $NDC#63187063930
* $NDC#47335089481
* $NDC#68788632409
* $NDC#66116049430
* $NDC#63187036260
* $NDC#13668014190
* $NDC#69117101003
* $NDC#68788632403
* $NDC#70786006003
* $NDC#33342006007
* $NDC#68788632406
* $NDC#33261098730
* $NDC#615801439
* $NDC#60505025304
* $NDC#63187036230
* $NDC#16729021815
* $NDC#63187036290
* $NDC#64679031404
* $NDC#70518040001
* $NDC#68645043054
* $NDC#68071405709
* $NDC#70710141709
* $NDC#51079055701
* $NDC#50436998603
* $NDC#63629472802
* $NDC#43353026960
* $NDC#68788978506
* $NDC#68071157809
* $NDC#70882011630
* $NDC#47335089413
* $NDC#63187063960
* $NDC#47335089419
* $NDC#70786006001
* $NDC#68084060901
* $NDC#54458088816
* $NDC#55648031400
* $NDC#50090259801
* $NDC#60505025305
* $NDC#60505025301
* $NDC#47335089418
* $NDC#63629472801
* $NDC#60429030190
* $NDC#55111019630
* $NDC#33342006015
* $NDC#60429030110
* $NDC#65862035730
* $NDC#13668014110
* $NDC#68645044370
* $NDC#93731456
* $NDC#68788978509
* $NDC#55648031401
* $NDC#68071153303
* $NDC#16729021816
* $NDC#63629472803
* $NDC#65862035710
* $NDC#64679031401
* $NDC#60505025303
* $NDC#68084060911
* $NDC#65862035705
* $NDC#50436998601
* $NDC#13668014130
* $NDC#13668014174
* $NDC#33342006012
* $NDC#93731405
* $NDC#33261098790
* $NDC#65862035701
* $NDC#55154337600
* $NDC#43063037190
* $NDC#378362793
* $NDC#60429030130
* $NDC#904629461
* $NDC#51079055720
* $NDC#13668014101
* $NDC#13668014105
* $NDC#55111019690
* $NDC#64679031402
* $NDC#55648031404
* $NDC#43063037130
* $NDC#65162041409
* $NDC#63629472804
* $NDC#62034001501
* $NDC#47335089483
* $NDC#68151311809
* $NDC#65162041411
* $NDC#65862035790
* $NDC#53808061602
* $NDC#55111019601
* $NDC#55648031402
* $NDC#58118035706
* $NDC#68788978503
* $NDC#53808080602
* $NDC#378362777
* $NDC#33261098760
* $NDC#50228012410
* $NDC#43063037160
* $NDC#68084053611
* $NDC#58118035709
* $NDC#13668014144
* $NDC#58118035703
* $NDC#65162041450
* $NDC#53808100201
* $NDC#42543071305
* $NDC#42543071330
* $NDC#378362705
* $NDC#53808100202
* $NDC#55111019605
* $NDC#615771930
* $NDC#55154538800
* $NDC#31722090130
* $NDC#60505025302
* $NDC#16729021846
* $NDC#33261098700
* $NDC#55648031403
* $NDC#16729021810
* $NDC#60505399203
* $NDC#64679031403
* $NDC#62034001590
* $NDC#62034001530
* $NDC#61919000730
* $NDC#58118035708
* $NDC#68084053601
* $NDC#65162041403
* $NDC#615771939
* $NDC#64205035730
* $NDC#62034001577
* $NDC#50228012430
* $NDC#615771905
* $NDC#42543071390
* $NDC#42543071301
* $NDC#42543071310
* $NDC#53808102501
* $NDC#53808103101
* $NDC#33342006010
* $NDC#31722090110
* $RxNorm#213169
* $NDC#52959077830
* $NDC#63653117105
* $NDC#55289091115
* $NDC#67544050460
* $NDC#55289091130
* $NDC#13411011703
* $NDC#53808076301
* $NDC#13411011706
* $NDC#63629159801
* $NDC#67046060430
* $NDC#63629159804
* $NDC#63653117106
* $NDC#33261052830
* $NDC#66105011909
* $NDC#58864074830
* $NDC#63874056410
* $NDC#63874056490
* $NDC#66105011903
* $NDC#63629159803
* $NDC#63629159802
* $NDC#66105011901
* $NDC#67544050430
* $NDC#66105011906
* $NDC#13411011702
* $NDC#13411011709
* $NDC#66105011915
* $NDC#63874056430
* $NDC#13411011701
* $NDC#63653117103
* $NDC#63653117101
* $NDC#67544050474
* $RxNorm#573094
* $NDC#717170101
* $NDC#435470484
* $NDC#765191016
* $NDC#713350581
* $NDC#680711578
* $NDC#705180400
* $NDC#680714031
* $NDC#651620414
* $NDC#687886324
* $NDC#617860276
* $NDC#707860060
* $NDC#333420060
* $NDC#425430713
* $NDC#687887463
* $NDC#705180991
* $NDC#619190737
* $NDC#713351409
* $NDC#680714138
* $NDC#631870362
* $NDC#500904918
* $NDC#707101417
* $NDC#617860972
* $NDC#3783627
* $NDC#707711062
* $NDC#6157719
* $NDC#636294728
* $NDC#510790557
* $NDC#937314
* $NDC#544580888
* $NDC#551545388
* $NDC#607600735
* $NDC#167290218
* $NDC#661160494
* $NDC#538081025
* $NDC#686450430
* $NDC#556480314
* $NDC#619190007
* $NDC#646790314
* $NDC#317220901
* $NDC#686450443
* $NDC#521250174
* $NDC#551546278
* $RxNorm#1163766
* $RxNorm#374583
* $RxNorm#368301
* $RxNorm#1163767
* $NDC#502680184
* $NDC#636531332
* $NDC#693670194
* $NDC#502280121
* $NDC#620340017
* $NDC#551110671
* $NDC#551543488
* $NDC#605053532
* $NDC#9046467
* $NDC#604290110
* $NDC#680840752
* $NDC#551542022
* $NDC#705180195
* $NDC#9046294
* $NDC#136680141
* $NDC#551543376
* $NDC#430630371
* $NDC#493490995
* $NDC#493490990
* $NDC#521250046
* $NDC#686450590
* $NDC#500902082
* $NDC#500901300
* $NDC#636298045
* $NDC#705181898
* $NDC#705182136
* $NDC#530021672
* $NDC#705181383
* $NDC#713351232
* $NDC#713350752
* $NDC#687887238
* $NDC#680714268
* $NDC#712050073
* $NDC#705180990
* $NDC#713997500
* $NDC#705181079
* $NDC#433530269
* $NDC#572370189
* $NDC#710930142
* $NDC#691171010
* $NDC#514070032
* $NDC#705180717
* $NDC#557000570
* $NDC#708820116
* $NDC#649800343
* $NDC#504369986
* $NDC#704000101
* $NDC#636531171
* $NDC#713350080
* $NDC#605050253
* $NDC#6158014
* $NDC#605053992
* $NDC#631870639
* $NDC#687889785
* $NDC#636296857
* $NDC#670460099
* $NDC#216950665
* $NDC#680711533
* $NDC#502280124
* $NDC#680713319
* $NDC#521250960
* $NDC#680714023
* $NDC#538080616
* $NDC#680714057
* $NDC#538080806
* $NDC#538080763
* $NDC#538081002
* $NDC#548684070
* $NDC#551110196
* $NDC#548686336
* $NDC#552890911
* $NDC#332610987
* $NDC#581180357
* $NDC#473350894
* $NDC#658620357
* $NDC#521250879
* $NDC#670460604
* $NDC#604290301
* $NDC#680840536
* $NDC#620340015
* $NDC#642050357
* $NDC#681513118
* $NDC#617860123
* $NDC#521250243
* $NDC#680840609
* $NDC#551546683
* $NDC#551542016
* $NDC#545694700
* $NDC#636291598
* $NDC#499990402
* $NDC#165900288
* $NDC#242360824
* $NDC#680714898
* $NDC#500902598
* $NDC#705180750
* $NDC#705181510
* $NDC#670460100
* $NDC#705180471
* $NDC#538081031
* $NDC#50090208200
* $NDC#50090208201
* $NDC#70518019500
* $NDC#57237018999
* $NDC#57237018930
* $NDC#57237018905
* $NDC#57237018990
* $NDC#60429030101
* $NDC#60429030177
* $NDC#54868633601
* $NDC#54868633600
* $NDC#54458088810
* $NDC#60760073590
* $NDC#60760073530
* $NDC#54868407002
* $NDC#54868407000
* $NDC#54868407001
* $NDC#16590028860
* $NDC#16590028890
* $NDC#16590028830
* $NDC#21695066530
* $NDC#21695066590
* $NDC#13668014171
* $NDC#378362805
* $NDC#247187400
* $NDC#247187430
* $NDC#247187477
* $NDC#247187460
* $NDC#247187490
* $NDC#61786097219
* $NDC#64679031500
* $NDC#64679031400
* $NDC#55154668307
* $NDC#55154668304
* $NDC#55154348806
* $NDC#49999040230
* $NDC#49999040290
* $NDC#55154202200
* $NDC#55154201600
* $NDC#61786012319
* $NDC#50090130101
* $NDC#50090130100
* $NDC#54569632700
* $NDC#54569632701
* $NDC#54569470000
* $NDC#54569470002
* $NDC#61786027620
* $NDC#61786027619
* $NDC#55154627809
* $NDC#61786027602
* $NDC#68258600603
* $NDC#68084053795
* $NDC#52125024302
* $NDC#52125024319
* $NDC#52125087902
* $NDC#52125096002
* $NDC#68084053725
* $NDC#42254039590
* $NDC#42254023890
* $NDC#42254023830
* $NDC#42254039530
* $NDC#49349099519
* $NDC#49349099002
* $NDC#51138024630
* $NDC#52125004602
* $NDC#52125017402
* $NDC#24236082423
* $NDC#66267129903
* $NDC#66267069660
* $NDC#66267069615
* $NDC#49848000190
* $NDC#60505353202
* $NDC#60505353200
* $NDC#378362877
* $NDC#378362893
* $NDC#55048007830
* $NDC#68258607309
* $NDC#68258607303
* $NDC#60429030160
* $NDC#59762670002
* $NDC#54868554600
* $NDC#55154201607
* $NDC#53360133203
* $NDC#58016001407
* $NDC#58016001410
* $NDC#58016001406
* $NDC#49856025303
* $NDC#49856025304
* $NDC#67228026106
* $NDC#58016001401
* $NDC#58016001404
* $NDC#58016001409
* $NDC#67228026103
* $NDC#67544065131
* $NDC#58016001403
* $NDC#58016001408
* $NDC#49856025302
* $NDC#58016001402
* $NDC#58016001405
* $NDC#49856025301
* $NDC#58016091015
* $NDC#58016091027
* $NDC#58016091044
* $NDC#58016091079
* $NDC#58016091083
* $NDC#58016091001
* $NDC#58016091012
* $NDC#58016091089
* $NDC#24236036502
* $NDC#58016091076
* $NDC#58016091060
* $NDC#67216017101
* $NDC#58016091024
* $NDC#58016091040
* $NDC#58016091070
* $NDC#58016091069
* $NDC#58016091032
* $NDC#58016091042
* $NDC#58016091092
* $NDC#58016091091
* $NDC#58016091021
* $NDC#58016091067
* $NDC#58016091090
* $NDC#58016091004
* $NDC#58016091006
* $NDC#58016091026
* $NDC#58016091007
* $NDC#58016091081
* $NDC#67216017103
* $NDC#58016091028
* $NDC#35919117100
* $NDC#58016091084
* $NDC#58016091030
* $NDC#58016091080
* $NDC#58016091003
* $NDC#58016091000
* $NDC#24236082402
* $NDC#67216017106
* $NDC#58016091016
* $NDC#62584013150
* $NDC#58016091008
* $NDC#58016091010
* $NDC#58016091072
* $NDC#58016091097
* $NDC#58016091020
* $NDC#58016091098
* $NDC#615458331
* $NDC#58016091018
* $NDC#58016091005
* $NDC#62301007171
* $NDC#58016091073
* $NDC#58016091087
* $NDC#58016091045
* $NDC#58016091096
* $NDC#53360117100
* $NDC#67216017105
* $NDC#58016091014
* $NDC#58016091002
* $NDC#58016091050
* $NDC#58016091082
* $NDC#24236036501
* $NDC#58016091048
* $NDC#58016091099
* $NDC#58016091075
* $NDC#58016091036
* $NDC#58016091025
* $NDC#58016091035
* $NDC#58016091056
* $NDC#615458339
* $NDC#58016091009
* $NDC#58016091071
* $NDC#58016091077
* $NDC#58016001490
* $NDC#58016001400
* $NDC#49999086230
* $NDC#247227330
* $NDC#58016001430
* $NDC#247227360
* $NDC#58016001460
* $NDC#63653117110
* $NDC#63653117104
* $NDC#68115085590
* $NDC#63653117130
* $NDC#63653117109
* $NDC#68115085560
* $NDC#68115085530
* $NDC#615458363

ValueSet: ExamplePrasugrelCodes
Title: "ACS Example Prasugrel Codes"
Description: "An example value set of codes for Prasugrel for the Acute Coronary Syndrome use case."
* ^experimental = true
* $RxNorm#1173221
* $RxNorm#1173222
* $RxNorm#613391
* $RxNorm#855810
* $NDC#16729027310
* $NDC#60687041221
* $NDC#60687041211
* $NDC#48792782101
* $NDC#65862083010
* $NDC#65162000203
* $NDC#60505464303
* $NDC#65862083030
* $RxNorm#855812
* $NDC#67877060530
* $NDC#50090411800
* $NDC#65862083003
* $NDC#66993057630
* $NDC#43817024001
* $NDC#440060530
* $NDC#51407024830
* $NDC#378518693
* $RxNorm#855816
* $NDC#2512307
* $NDC#2512330
* $NDC#2512377
* $NDC#2512301
* $RxNorm#855814
* $NDC#606870412
* $NDC#651620002
* $NDC#167290273
* $NDC#514070248
* $NDC#4400605
* $NDC#3785186
* $NDC#500904118
* $NDC#605054643
* $NDC#438170240
* $NDC#658620830
* $NDC#678770605
* $RxNorm#855817
* $NDC#48792782201
* $NDC#16729027210
* $NDC#65162000103
* $NDC#67877060430
* $NDC#60505464203
* $NDC#43817023901
* $NDC#65862082910
* $RxNorm#855818
* $NDC#65862082903
* $NDC#66993057530
* $NDC#65862082930
* $NDC#378518593
* $NDC#440060430
* $NDC#51407024730
* $RxNorm#855820
* $NDC#2512152
* $NDC#2512101
* $NDC#2512130
* $RxNorm#855819
* $NDC#651620001
* $NDC#167290272
* $NDC#4400604
* $NDC#514070247
* $NDC#3785185
* $NDC#438170239
* $NDC#605054642
* $NDC#658620829
* $NDC#678770604
* $RxNorm#1165745
* $RxNorm#855811
* $RxNorm#855815
* $RxNorm#1165746
* $RxNorm#847020
* $NDC#25123
* $NDC#487927821
* $NDC#669930576
* $NDC#548686238
* $NDC#551541831
* $NDC#669930575
* $NDC#487927822
* $NDC#25121
* $NDC#54868623800
* $NDC#378518605
* $NDC#378518677
* $NDC#55154183100
* $NDC#378518505
* $NDC#378518577
* $NDC#54569627500
* $NDC#2475930
* $NDC#2475901
* $NDC#2475977
* $NDC#2476030
* $NDC#2476076
* $NDC#2475961

ValueSet: ExampleTicagrelorCodes
Title: "ACS Example Ticagrelor Codes"
Description: "An example value set of codes for Ticagrelor for the Acute Coronary Syndrome use case."
* ^experimental = true
* $RxNorm#1176340
* $RxNorm#1176341
* $RxNorm#1116632
* $RxNorm#1666331
* $RxNorm#1666332
* $RxNorm#1666334
* $RxNorm#1666333
* $RxNorm#1116633
* $RxNorm#1116635
* $RxNorm#1116639
* $NDC#186077718
* $NDC#186077728
* $RxNorm#1116637
* $RxNorm#1157089
* $RxNorm#1116634
* $RxNorm#1116638
* $RxNorm#1157090
* $NDC#186077694
* $NDC#186077660
* $NDC#1860776
* $NDC#69238113401
* $NDC#69238113406
* $NDC#55154961808
* $NDC#186077739
* $NDC#186077708
* $NDC#186077760
* $NDC#55154961800
* $NDC#692381134
* $NDC#1860777
* $NDC#636295292
* $NDC#551549618
* $NDC#63629529201

ValueSet: ExampleCrohnsDiseaseConditionCodes
Title: "AntiTNFA Example Condition Codes"
Description: "An example value set of ICD-10 codes for the Anti-TNFA use case for Crohn's Disease."
* ^experimental = true
* $ICD10CM#K50.0
* $ICD10CM#K50.00
* $ICD10CM#K50.01
* $ICD10CM#K50.011
* $ICD10CM#K50.012
* $ICD10CM#K50.013
* $ICD10CM#K50.014
* $ICD10CM#K50.018
* $ICD10CM#K50.019
* $ICD10CM#K50.1
* $ICD10CM#K50.10
* $ICD10CM#K50.11
* $ICD10CM#K50.111
* $ICD10CM#K50.112
* $ICD10CM#K50.113
* $ICD10CM#K50.114
* $ICD10CM#K50.118
* $ICD10CM#K50.119
* $ICD10CM#K50.8
* $ICD10CM#K50.80
* $ICD10CM#K50.81
* $ICD10CM#K50.811
* $ICD10CM#K50.812
* $ICD10CM#K50.813
* $ICD10CM#K50.814
* $ICD10CM#K50.818
* $ICD10CM#K50.819
* $ICD10CM#K50.9
* $ICD10CM#K50.90
* $ICD10CM#K50.91
* $ICD10CM#K50.911
* $ICD10CM#K50.912
* $ICD10CM#K50.913
* $ICD10CM#K50.914
* $ICD10CM#K50.918
* $ICD10CM#K50.919

ValueSet: ExampleAntiTNFADrugCodes
Title: "AntiTNFA Example Drug Codes"
Description: "An example value set of EMEA product codes for Hyrimoz and Zessly drug products."
* ^experimental = true
* $EMEAPRODS#EMEA/H/C/004647
* $EMEAPRODS#EMEA/H/C/004320


ValueSet: ExampleDiabetesConditionCodes
Title: "Diabetes Example Condition Codes"
Description: "An example value set of ICD-10 codes for type 1 or Type 2 Diabetes."
* ^experimental = true
* $ICD10CM#E10.10
* $ICD10CM#E10.11
* $ICD10CM#E10.21
* $ICD10CM#E10.22
* $ICD10CM#E10.29
* $ICD10CM#E10.311
* $ICD10CM#E10.319
* $ICD10CM#E10.321
* $ICD10CM#E10.3211
* $ICD10CM#E10.3212
* $ICD10CM#E10.3213
* $ICD10CM#E10.3219
* $ICD10CM#E10.329
* $ICD10CM#E10.3291
* $ICD10CM#E10.3292
* $ICD10CM#E10.3293
* $ICD10CM#E10.3299
* $ICD10CM#E10.331
* $ICD10CM#E10.3311
* $ICD10CM#E10.3312
* $ICD10CM#E10.3313
* $ICD10CM#E10.3319
* $ICD10CM#E10.339
* $ICD10CM#E10.3391
* $ICD10CM#E10.3392
* $ICD10CM#E10.3393
* $ICD10CM#E10.3399
* $ICD10CM#E10.341
* $ICD10CM#E10.3411
* $ICD10CM#E10.3412
* $ICD10CM#E10.3413
* $ICD10CM#E10.3419
* $ICD10CM#E10.349
* $ICD10CM#E10.3491
* $ICD10CM#E10.3492
* $ICD10CM#E10.3493
* $ICD10CM#E10.3499
* $ICD10CM#E10.351
* $ICD10CM#E10.3511
* $ICD10CM#E10.3512
* $ICD10CM#E10.3513
* $ICD10CM#E10.3519
* $ICD10CM#E10.3521
* $ICD10CM#E10.3522
* $ICD10CM#E10.3523
* $ICD10CM#E10.3529
* $ICD10CM#E10.3531
* $ICD10CM#E10.3532
* $ICD10CM#E10.3533
* $ICD10CM#E10.3539
* $ICD10CM#E10.3541
* $ICD10CM#E10.3542
* $ICD10CM#E10.3543
* $ICD10CM#E10.3549
* $ICD10CM#E10.3551
* $ICD10CM#E10.3552
* $ICD10CM#E10.3553
* $ICD10CM#E10.3559
* $ICD10CM#E10.359
* $ICD10CM#E10.3591
* $ICD10CM#E10.3592
* $ICD10CM#E10.3593
* $ICD10CM#E10.3599
* $ICD10CM#E10.36
* $ICD10CM#E10.37X1
* $ICD10CM#E10.37X2
* $ICD10CM#E10.37X3
* $ICD10CM#E10.37X9
* $ICD10CM#E10.39
* $ICD10CM#E10.40
* $ICD10CM#E10.41
* $ICD10CM#E10.42
* $ICD10CM#E10.43
* $ICD10CM#E10.44
* $ICD10CM#E10.49
* $ICD10CM#E10.51
* $ICD10CM#E10.52
* $ICD10CM#E10.59
* $ICD10CM#E10.610
* $ICD10CM#E10.618
* $ICD10CM#E10.620
* $ICD10CM#E10.621
* $ICD10CM#E10.622
* $ICD10CM#E10.628
* $ICD10CM#E10.630
* $ICD10CM#E10.638
* $ICD10CM#E10.641
* $ICD10CM#E10.649
* $ICD10CM#E10.65
* $ICD10CM#E10.69
* $ICD10CM#E10.8
* $ICD10CM#E10.9
* $ICD10CM#E11.00
* $ICD10CM#E11.01
* $ICD10CM#E11.10
* $ICD10CM#E11.11
* $ICD10CM#E11.21
* $ICD10CM#E11.22
* $ICD10CM#E11.29
* $ICD10CM#E11.311
* $ICD10CM#E11.319
* $ICD10CM#E11.321
* $ICD10CM#E11.3211
* $ICD10CM#E11.3212
* $ICD10CM#E11.3213
* $ICD10CM#E11.3219
* $ICD10CM#E11.329
* $ICD10CM#E11.3291
* $ICD10CM#E11.3292
* $ICD10CM#E11.3293
* $ICD10CM#E11.3299
* $ICD10CM#E11.331
* $ICD10CM#E11.3311
* $ICD10CM#E11.3312
* $ICD10CM#E11.3313
* $ICD10CM#E11.3319
* $ICD10CM#E11.339
* $ICD10CM#E11.3391
* $ICD10CM#E11.3392
* $ICD10CM#E11.3393
* $ICD10CM#E11.3399
* $ICD10CM#E11.341
* $ICD10CM#E11.3411
* $ICD10CM#E11.3412
* $ICD10CM#E11.3413
* $ICD10CM#E11.3419
* $ICD10CM#E11.349
* $ICD10CM#E11.3491
* $ICD10CM#E11.3492
* $ICD10CM#E11.3493
* $ICD10CM#E11.3499
* $ICD10CM#E11.351
* $ICD10CM#E11.3511
* $ICD10CM#E11.3512
* $ICD10CM#E11.3513
* $ICD10CM#E11.3519
* $ICD10CM#E11.3521
* $ICD10CM#E11.3522
* $ICD10CM#E11.3523
* $ICD10CM#E11.3529
* $ICD10CM#E11.3531
* $ICD10CM#E11.3532
* $ICD10CM#E11.3533
* $ICD10CM#E11.3539
* $ICD10CM#E11.3541
* $ICD10CM#E11.3542
* $ICD10CM#E11.3543
* $ICD10CM#E11.3549
* $ICD10CM#E11.3551
* $ICD10CM#E11.3552
* $ICD10CM#E11.3553
* $ICD10CM#E11.3559
* $ICD10CM#E11.359
* $ICD10CM#E11.3591
* $ICD10CM#E11.3592
* $ICD10CM#E11.3593
* $ICD10CM#E11.3599
* $ICD10CM#E11.36
* $ICD10CM#E11.37X1
* $ICD10CM#E11.37X2
* $ICD10CM#E11.37X3
* $ICD10CM#E11.37X9
* $ICD10CM#E11.39
* $ICD10CM#E11.40
* $ICD10CM#E11.41
* $ICD10CM#E11.42
* $ICD10CM#E11.43
* $ICD10CM#E11.44
* $ICD10CM#E11.49
* $ICD10CM#E11.51
* $ICD10CM#E11.52
* $ICD10CM#E11.59
* $ICD10CM#E11.610
* $ICD10CM#E11.618
* $ICD10CM#E11.620
* $ICD10CM#E11.621
* $ICD10CM#E11.622
* $ICD10CM#E11.628
* $ICD10CM#E11.630
* $ICD10CM#E11.638
* $ICD10CM#E11.641
* $ICD10CM#E11.649
* $ICD10CM#E11.65
* $ICD10CM#E11.69
* $ICD10CM#E11.8
* $ICD10CM#E11.9

ValueSet: ExampleHbA1cTestCodes
Title: "Diabetes Example Test Codes"
Description: "An example value set of LOINC codes for HbA1c tests."
* ^experimental = true
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* $LOINC#41995-2
* $LOINC#4548-4
* $LOINC#71875-9
* $LOINC#17855-8
* $LOINC#96595-4
* $LOINC#4549-2
* $LOINC#17856-6
* $LOINC#59261-8
* $LOINC#62388-4

ValueSet: ExampleDialysisProcedureCodes
Title: "Diabetes Example Dialysis Test Codes"
Description: "An example value set of SNOMED codes representing dialysis procedures."
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* codes from system $SNOMED where concept is-a #108241001

ValueSet: ExampleCOVID19TestCodes
Title: "Covid-19 Example Test Codes"
Description: "An example value set of LOINC codes representing COVID-19 tests."
* ^experimental = true
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* $LOINC#95209-3
* $LOINC#94763-0
* $LOINC#94762-2
* $LOINC#94558-4
* $LOINC#94562-6
* $LOINC#94768-9
* $LOINC#95125-1
* $LOINC#94761-4
* $LOINC#94563-4
* $LOINC#94507-1
* $LOINC#94547-7
* $LOINC#95416-4
* $LOINC#94564-2
* $LOINC#94508-9
* $LOINC#94760-6
* $LOINC#95409-9
* $LOINC#94533-7
* $LOINC#94756-4
* $LOINC#94757-2
* $LOINC#94766-3
* $LOINC#94316-7
* $LOINC#94307-6
* $LOINC#94308-4
* $LOINC#95411-5
* $LOINC#94559-2
* $LOINC#94639-2
* $LOINC#94534-5
* $LOINC#94314-2
* $LOINC#94565-9
* $LOINC#94759-8
* $LOINC#95406-5
* $LOINC#94500-6
* $LOINC#94845-5
* $LOINC#94822-4
* $LOINC#94660-8
* $LOINC#94309-2
* $LOINC#94640-0
* $LOINC#94767-1
* $LOINC#94641-8
* $LOINC#95825-6
* $LOINC#95542-7
* $LOINC#96119-3
* $LOINC#95425-5
* $LOINC#96448-6
* $LOINC#95824-9
* $LOINC#96120-1
* $LOINC#96091-4
* $LOINC#96123-5
* $LOINC#95608-6
* $LOINC#95424-8
* $LOINC#95609-4
* $LOINC#96603-6
* $LOINC#95970-0
* $LOINC#95971-8
* $LOINC#96121-9
* $LOINC#95823-1
* $LOINC#96122-7
* $LOINC#97097-0
* $LOINC#96763-8
* $LOINC#96957-6
* $LOINC#96986-5
* $LOINC#96958-4
* $LOINC#97098-8
* $LOINC#96797-6
* $LOINC#96829-7
* $LOINC#96765-3
* $LOINC#96752-1
* $LOINC#98069-8
* $LOINC#98132-4
* $LOINC#98494-8
* $LOINC#98131-6
* $LOINC#98493-0
* $LOINC#99596-9
* $LOINC#99597-7
* $LOINC#99772-6

ValueSet: ExampleRespiratoryConditionCodes
Title: "Covid-19 Example Condition Codes"
Description: "An example value set of LOINC and SNOMED codes representing some sort of respiratory infection."
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $ICD10CM#B97.21
* $ICD10CM#B97.29
* $ICD10CM#U07.1
* $ICD10CM#J12.82
* $ICD10CM#M35.81
* $ICD10CM#U09.9
* $ICD10CM#Z11.59
* $ICD10CM#Z20.828
* $ICD10CM#B34.2
* $ICD10CM#J06.9
* $ICD10CM#J98.8
* $ICD10CM#R43.0
* $ICD10CM#R43.2
* $ICD10CM#R07.1
* $ICD10CM#R68.83
* $SNOMED#840539006
* $SNOMED#840544004
* $SNOMED#840546002
* $SNOMED#103001002
* $SNOMED#11833005
* $SNOMED#267036007
* $SNOMED#28743005
* $SNOMED#36955009
* $SNOMED#426000000
* $SNOMED#44169009
* $SNOMED#49727002
* $SNOMED#135883003
* $SNOMED#161855003
* $SNOMED#161939006
* $SNOMED#161940008
* $SNOMED#161941007
* $SNOMED#2237002
* $SNOMED#23141003
* $SNOMED#247410004
* $SNOMED#274640006
* $SNOMED#274664007
* $SNOMED#284523002
* $SNOMED#386661006
* $SNOMED#409702008
* $SNOMED#426976009
* $SNOMED#43724002
* $SNOMED#60845006
* $SNOMED#75483001

ValueSet: ExampleNonBNT162b2Codes
Title: "Covid-19 Example Vaccine Codes"
Description: "An example value set of vaccine codes representing non-BNT162b2 vaccines."
* ^experimental = true
* $CVX#212
* $CVX#207
* $CVX#221
* $CVX#228
* $CVX#229
* $CVX#230
* $CVX#211


---

File: repos/HL7_SLASH_vulcan-rwd/input/fsh/example.fsh

Instance: RWDPatient
InstanceOf: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-patient
Description: "A sample patient"
* identifier.system = "http://example.org/patient-identifiers"
* identifier.value = "1233567"
* active = true
* name.family = "Patient"
* name.given = "Sample"
* gender = #male
* birthDate = 1970-11-27
 
Instance: RWDEncounter
InstanceOf: EncounterRwd
Description: "A visit where the Real World Data patient was diagnosed and given medications."
* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#EMER
* subject = Reference(RWDPatient)
* reasonReference = Reference(RWDProblem)
* period.start = 2022-07-01
* period.end = 2022-07-03
* hospitalization.dischargeDisposition = http://terminology.hl7.org/CodeSystem/discharge-disposition#home

Instance: RWDMedicationStatementFromRequest
InstanceOf: MedicationStatementRwd
Description: "A medication statement derived from a prescription."
* status = #completed
* medicationCodeableConcept = http://www.nlm.nih.gov/research/umls/rxnorm#1116632
* subject = Reference(RWDPatient)
* effectiveDateTime = 2022-07-02
* context = Reference(RWDEncounter)
* derivedFrom = Reference(RWDMedicationRequest)

Instance: RWDMedicationRequest
InstanceOf: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-medicationrequest
Description: "A medication request showing real world data."
* status = #completed
* intent = #order
* medicationCodeableConcept = http://www.nlm.nih.gov/research/umls/rxnorm#1116632
* subject = Reference(RWDPatient)
* authoredOn = 2022-07-02

Instance: RWDMedicationStatementFromDispense
InstanceOf: MedicationStatementRwd
Description: "A medication statement derived from a dispense."
* status = #completed
* medicationCodeableConcept = http://www.nlm.nih.gov/research/umls/rxnorm#613391
* subject = Reference(RWDPatient)
* effectiveDateTime = 2022-07-02
* context = Reference(RWDEncounter)
* derivedFrom = Reference(RWDMedicationDispense)

Instance: RWDMedicationDispense
InstanceOf: MedicationDispenseRwd
Description: "A medication request showing real world data."
* status = #completed
* medicationCodeableConcept = http://www.nlm.nih.gov/research/umls/rxnorm#613391
* subject = Reference(RWDPatient)
* whenHandedOver = 2022-07-02

Instance: RWDMedicationStatementFromAdministration
InstanceOf: MedicationStatementRwd
Description: "A medication statement derived from an administration."
* status = #completed
* medicationCodeableConcept = http://www.nlm.nih.gov/research/umls/rxnorm#32968
* subject = Reference(RWDPatient)
* effectiveDateTime = 2022-07-02
* context = Reference(RWDEncounter)
* derivedFrom = Reference(RWDMedicationAdministration)

Instance: RWDMedicationAdministration
InstanceOf: MedicationAdministrationRwd
Description: "A medication request showing real world data."
* status = #completed
* medicationCodeableConcept = http://www.nlm.nih.gov/research/umls/rxnorm#32968
* subject = Reference(RWDPatient)
* effectiveDateTime = 2022-07-02

Instance: RWDProblem
InstanceOf: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-problem-list-item
Description: "A sample problem for the real world data patient."
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* code = http://snomed.info/sct#413838009
* subject = Reference(RWDPatient)
* encounter = Reference(RWDEncounter)
* recordedDate = 2022-07-01

Instance: RWDProcedure
InstanceOf: ProcedureRwd
Description: "A sample procedure for the real world data patient."
* status = #completed
* code = http://snomed.info/sct#418285008 "Angioplasty"
* subject = Reference(RWDPatient)
* performedDateTime = 2022-07-02
* outcome = http://snomed.info/sct#385669000 "Successful"

Instance: RWDLabResult
InstanceOf: ObservationLaboratoryResultsRwd
Description: "A sample lab results for the real world data patient."
* status = #final
* code = http://loinc.org#26515-7
* subject = Reference(RWDPatient)
* performer = Reference(RWDLaboratory)
* effectiveDateTime = 2022-07-01
* valueString = "200000 platelets/uL"
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#N

Instance: RWDLaboratory
InstanceOf: Organization
Description: "A sample lab."
* name = "Sample Real World Data Laboratory"


---

File: repos/HL7_SLASH_vulcan-rwd/input/fsh/medication.fsh

Profile: MedicationDispenseRwd
Parent: MedicationDispense
Description: "A profile on MedicationDispense that indicates the minimum set of attributes required for finding patients who may be taking certain medications."
* status MS
* medication[x] MS
* medicationReference only Reference(http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-medication)
* subject MS
* subject only Reference(http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-patient)
* quantity MS
* daysSupply MS
* whenHandedOver MS
* dosageInstruction MS
  * text MS

Profile: MedicationAdministrationRwd
Parent: MedicationAdministration
Description: "A profile on MedicationAdministration that indicates the minimum set of attributes required for finding patients who may be taking certain medications."
* status MS
* medication[x] MS
* medicationReference only Reference(http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-medication)
* subject MS
* subject only Reference(http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-patient)
* effective[x] MS

Profile: MedicationStatementRwd
Parent: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-medicationstatement
Description: "A profile on MedicationStatement that indicates the minimum set of attributes for use in research studies."
* derivedFrom MS
* derivedFrom ^slicing.discriminator.type = #type
* derivedFrom ^slicing.discriminator.path = "$this"
* derivedFrom ^slicing.rules = #open
* derivedFrom ^slicing.description = "Slice based on the types."
* derivedFrom contains MedicationSource 1..*
* derivedFrom[MedicationSource] only Reference(http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-medicationrequest or MedicationDispenseRwd or MedicationAdministrationRwd)


---

File: repos/HL7_SLASH_vulcan-rwd/input/fsh/observation.fsh

Profile: ObservationLaboratoryResultsRwd
Parent: http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-observation
Description: "A profile on Observation that indicates the minimum set of attributes detailing laboratory results for use in research studies."
* component MS
  * code MS
  * value[x] MS
  * interpretation MS
  * referenceRange MS

---

File: repos/HL7_SLASH_vulcan-rwd/input/fsh/procedure.fsh

Profile: ProcedureRwd
Parent: Procedure
Description: "A profile on Procedure that indicates the minimum set of attributes required for detailing a patient's procedures."
* status MS
* code MS
* subject MS
* subject only Reference(http://hl7.org/fhir/uv/ipa/StructureDefinition/ipa-patient)
* performed[x] MS
* outcome MS


---

File: repos/HL7_SLASH_vulcan-rwd/input/fsh/searchparameters.fsh

Instance: ObservationInterpretationSearchParameter
InstanceOf: SearchParameter
Usage: #definition
* name = "Interpretation"
* status = #active
* description = "A search parameter to allow searching for Observations with specific interpretations."
* code = #interpretation
* base = #Observation
* type = #token
* expression = "Observation.interpretation"

Instance: ProcedureOutcomeSearchParameter
InstanceOf: SearchParameter
Usage: #definition
* name = "Outcome"
* status = #active
* description = "A search parameter to allow searching for Procedures with specific outcomes."
* code = #outcome
* base = #Procedure
* type = #token
* expression = "Procedure.outcome"

Instance: EncounterDischargeDispositionSearchParameter
InstanceOf: SearchParameter
Usage: #definition
* name = "DischargeDisposition"
* status = #active
* description = "A search parameter to allow searching for Encounters with specific dispositions on discharge."
* code = #dischargeDisposition
* base = #Encounter
* type = #token
* expression = "Encounter.hospitalization.dischargeDisposition"



---

File: repos/HL7_SLASH_vulcan-rwd/input/pagecontent/acknowledgements.md

### Credits

This Implementation Guide was developed under the auspices of the HL7 Vulcan Real World Data work group. 

Contributing individuals and organisations are:

Current work group co-chairs: 

* **Scott Gordon** - US Food and Drug Administration
* **Damion Nero** - Pfizer

Core work group members:

* **Jean Duteau**  - Duteau Design
* **Rebecca Baker** - CDISC
* **Catherine Craven** - University of Texas Health Science Center San Antonio
* **Mike Hamidi** - Pfizer
* **Sergey Krikov** - Parexel
* **Hugh Glover** - Bluewave Informatics/HL7 BR&R

Connectathon Contributors:

* **Peter Butterfill** - Parexel
* **Qi Li** - Intersystems
* **Ron Sweeney** - Intersystems
* **Regilo Souza** - Intersystems
* **Dan Newingham** - Bioveras
* **Tasha Nagamine** - Droice Labs
* **Ashani Bhattacharya** - Droice Labs
* **Harshit Saxena** - Droice Labs

Contribution from the Schedule of Activities work group was greatly appreciated and we recognize that work groups's co-chairs:

* **Geoff Low** - Medidata/3DS
* **Michael J Ward** - TransCelerate Biopharma / Eli Lilly & Company

Project Management:

* **Shani Sampson** Vulcan
* **Michael Van Campen** Vulcan

With contributions from other members who have from time to time, or quietly, participated in meetings, attended conference calls, and supported the core team during the development process.

If you are interested in participating in the Vulcan Real World Data work group information about our calls, meetings and discussions can be found on HL7 Confluence pages [here](https://confluence.hl7.org/display/VA/Real+World+Data).


---

File: repos/HL7_SLASH_vulcan-rwd/input/pagecontent/acs.md

The following use case was used to determine the requirements for determining a patient cohort along with what data elements were necessary when retrieving clinical data:

### Evaluate the treatment of Acute Coronary Syndrome (ACS) with oral antiplatelets (OAPs)

The details of this study can be found on ClinicalTrials.gov: [NCT02190123](https://clinicaltrials.gov/ct2/show/NCT02190123).

This study is a retrospective study that was looking at the effectiveness and persistence of treatment of Acute Coronary Syndrome with oral antiplatelets.  The study size was 500 patients who had been diagnosed with an episode of Acute Coronary Syndrome and had been treated with oral antiplatelets.

#### Cohort Criteria
The patients for this study would have the following criteria:

* female or male aged 18 years or older
* have a Encounter record representing a hospitalization with an initial diagnosis of Acute Coronary Syndrome where the patient was discharged alive some time between September 2020 to September 2021 :
  * ACS is represented for this scenario one of the ICD-10 codes found in the [ACS value set](ValueSet-ExampleACSConditionCodes.html)
  * the Encounter diagnosis will point to a Condition with one of those codes
  * the Encounter will have hospitalization information included
  * the Encounter hospitalization discharge disposition code is not 'exp' (expired)
* have been given one of the codes in the value sets for [ticagrelor](ValueSet-ExampleTicagrelorCodes.html), [prasugrel](ValueSet-ExamplePrasugrelCodes.html) or [clopidogrel](ValueSet-ExampleClopidogrelCodes.html) after the date of diagnosis of ACS (as represented by the Condition or Encounter record found above)


These criteria would be represented by the following queries:

    /Patient?birthdate=le2002-09-01&gender=male,female
    /Encounter?reason-code:in=http://hl7.org/fhir/uv/vulcan-rwd/ValueSet/ExampleACSConditionCodes&date=ge2020-09-01&date=le2021-09-31&status=finished&dischargeDisposition:not=exp
    /MedicationAdministration?status=completed&effective-time=ge[Encounter-Start-Date]&
      code:in=http://hl7.org/fhir/uv/vulcan-rwd/ValueSet/ExampleACSOralAntiplatelets

The patients that were common to all three queries would then form the set of patients representing this cohort.


#### Retrieved Data
For patients that meet the criteria above, the following data, as a minimum, would be retrieved:

* patient demographics
* all Medications from the date of initial diagnosis of ACS to 1 year after diagnosis date
* all Encounters from the date of initial diagnosis of ACS to 1 year after diagnosis date, including the outcomes of the Encounters
* all Conditions from the date of initial diagnosis of ACS to 1 year after diagnosis date, showing the status of the Conditions
* other relevant Medical History from the date of initial diagnosis of ACS to 1 year after diagnosis date


---

File: repos/HL7_SLASH_vulcan-rwd/input/pagecontent/anti-tnfa.md

The following use case was used to determine the requirements for determining a patient cohort along with what data elements were necessary when retrieving clinical data:

### Anti-TNFa Treatment in Patients with Crohn's Disease

The details of this study can be found on ClinicalTrials.gov: [NCT03890445](https://clinicaltrials.gov/ct2/show/NCT03890445).

This study is a prospective, observational study that was looking at the effectiveness of treatment of Crohn's Disease with biosimilar drugs to Adalimumab and Infliximab.  The study size was 1600 patients who had been diagnosed with moderate-to-severe Crohn's Disease receiving treatment of Hyrimoz and Zessly.

#### Cohort Criteria
The patients for this study would have the following criteria:

* female or male aged 18 years or greater
* diagnosed with moderate-to-severe Crohn's Disease (K50  Crohn's disease [regional enteritis])
* treated with Hyrimoz or Zessly
* Harvey-Bradshaw index (HBI) >= 5

These criteria would be represented by the following queries:

    /Patient?birthdate=le<birthdate of 18 years before today>&gender=male,female
    /Condition?code:in=http://hl7.org/fhir/uv/vulcan-rwd/ValueSet/ExampleCrohnsDiseaseConditionCodes
    /MedicationAdministration?status=completed&code:in=http://hl7.org/fhir/uv/vulcan-rwd/ValueSet/ExampleAntiTNFADrugCodes
    /Observation?status=final&code=http://loinc.org|<code for HBI>&value-quantity=ge5

The patients would also not have the following criteria:

* Hemoglobin measurement < 8.5g/dL

This exclusion criteria would be represented by the following query:

    /Observation?status=final&code=http://loinc.org#718-7&value-quantity=le8.5|http://unitsofmeasure.org|g%2FdL


The patients that were common to the first four queries and were not found in the exclusion query would form the set of patients representing this cohort.


#### Retrieved Data
For patients that meet the criteria above, the following data, as a minimum, would be retrieved:

* patient demographics
* all Medications from the date of initial treatment of Hyrimoz or Zessly
* any Adverse Events from the date of initial treatment of Hyrimoz or Zessly
* all Inflamatory Bowel Disease (IBD) index measurements from the date of initial treatment of Hyrimoz or Zessly
* any Quality of Life (QoL) scale measurements from the date of initial treatment of Hyrimoz or Zessly


---

File: repos/HL7_SLASH_vulcan-rwd/input/pagecontent/covid.md

The following use case was used to determine the requirements for determining a patient cohort along with what data elements were necessary when retrieving clinical data:

### COVID-19 BNT162b2 Vaccine Effectiveness Study

The details of this study can be found on ClinicalTrials.gov: [NCT04848584](https://clinicaltrials.gov/ct2/show/NCT04848584).

The primary objective of this study is to determine the vaccine effectiveness of 2 doses of Pfizer-BioNTech BNT162b2 vaccine against COVID-19-associated hospitalization. There will be a large retrospective database study using two parallel study designs: a test-negative case-control design and a retrospective cohort design. Exploratory analyses of VE estimates by strain type will be conducted.

#### Cohort Criteria
The patients for this study would have the following criteria:

* female or male aged 5 years or greater
* admitted to hospital with acute respiratory infection
* received a PCR test for SARS-CoV-2


These criteria would be represented by the following queries:

    /Patient?birthdate=le<birthdate of 5 years before today>&gender=male,female
    /Condition?code:in=http://hl7.org/fhir/uv/vulcan-rwd/ValueSet/ExampleRespiratoryConditionCodes
    /Observation?status=final&code:in=http://hl7.org/fhir/uv/vulcan-rwd/ValueSet/ExampleCOVID19TestCodes

The patients would also not have the following criteria:

* patients who receive only another newly licensed or investigational SARS-CoV-2 vaccine or COVID19 prophylactic agent prior to hospitalization

This exclusion criteria would be represented by the following query:

    /Immunization?status=completed&vaccine-code:in=http://hl7.org/fhir/uv/vulcan-rwd/ValueSet/ExampleNonBNT162b2Codes


The patients that were common to the first three queries and were not found in the exclusion query would form the set of patients representing this cohort.


#### Retrieved Data
For patients that meet the criteria above, the following data, as a minimum, would be retrieved:

* patient demographics
* all Medications from the date of admittance to hospital
* all COVID test results
* all vaccination records


---

File: repos/HL7_SLASH_vulcan-rwd/input/pagecontent/diabetes.md

The following use case was used to determine the requirements for determining a patient cohort along with what data elements were necessary when retrieving clinical data:

### Type 1 or Type 2 Diabetes Treatment Patterns

The details of this study can be found on ClinicalTrials.gov: [NCT05088265](https://clinicaltrials.gov/ct2/show/NCT05088265).

This study is observational, designed to collect real world use and safety data for those using the Bigfoot Unity Diabetes Management System for 12 months.

#### Cohort Criteria
The patients for this study would have the following criteria:

* female or male aged 12 years or greater
* diagnosed with type 1 or type 2 diabetes diagnosis
* have a baseline HbA1c collected within 90 days

These criteria would be represented by the following queries:

    /Patient?birthdate=le<birthdate of 12 years before today>&gender=male,female
    /Condition?code:in=http://hl7.org/fhir/uv/vulcan-rwd/ValueSet/ExampleDiabetesConditionCodes
    /Observation?status=final&code:in=http://hl7.org/fhir/uv/vulcan-rwd/ValueSet/ExampleHbA1cTestCodes

The patients would also not have the following criteria:

* Females who are pregnant
* Persons on dialysis

This exclusion criteria would be represented by the following query:

    /Condition?code=http://hl7.org/fhir/sid/icd-10-cm|Z33.1
	/Procedure?code:in=http://hl7/org/fhir/uv/vulcan-rwd/ValueSet/ExampleDialysisProcedureCodes


The patients that were common to the first three queries and were not found in the exclusion queries would form the set of patients representing this cohort.


#### Retrieved Data
For patients that meet the criteria above, the following data, as a minimum, would be retrieved:

* patient demographics
* all HbA1c tests
* all concomitant medications


---

File: repos/HL7_SLASH_vulcan-rwd/input/pagecontent/downloads.md

### Links

This implementation guide is web-based and is intended to be browsed online.  However, for the convenience of implementers, both this implementation guide, various sub-packages of it and some of the source specifications are available for download.  The following links allow you to download various parts of this implementation guide and other referenced implementation guides for local use.

* This [full IG](full-ig.zip)
* The [resource definitions](definitions.json.zip)  from this IG for use with the FHIR validator (see below)
* The full FHIR [R4]({{site.data.fhir.path}}fhir-spec.zip) specifications
* A [validator](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator) that can be used to check FHIR resource instance validity

<!-- Todo: reference implementations -->

---

File: repos/HL7_SLASH_vulcan-rwd/input/pagecontent/healthdata.md

### Fetching Patient Records
Getting access to the EHR to be able to retrieve patient records is accomplished by following the requirements of International Patient Access.  This guide provides additional details on the needed queries and the relevant data elements that are important for supporting clinical research.  

#### Medication Summary
To receive medication summary information, a requesting system will have to query the four different Medication workflow resources to find all information about a patient's medications.

|**Resource Type**|**Query**|
|---|---|
|MedicationRequest|[base]/MedicationRequest?patient=Patient/[patient id]&authoredon=ge[history date]|
|MedicationDispense|[base]/MedicationDispense?patient=Patient/[patient id]&whenhandedover=ge[history date]|
|MedicationAdministration|[base]/MedicationAdministration?patient=Patient/[patient id]&effective-time=ge[history date]|
|MedicationStatement|[base]/MedicationStatement/patient=Patient/[patient id]&effective=ge[history date]|
{: .grid }

The [IPA MedicationRequest](http://hl7.org/fhir/uv/ipa/StructureDefinition-ipa-medicationrequest.html) and [IPA MedicationStatement](http://hl7.org/fhir/uv/ipa/StructureDefinition-ipa-medicationstatement.html) profiles along with the [IPA Medication](http://hl7.org/fhir/uv/ipa/StructureDefinition-ipa-medication.html) profile provide the necessary information that are important to RWD.  This guide defines a profile on [MedicationDispense](StructureDefinition-MedicationDispenseRwd.html) and [MedicationAdministration](StructureDefinition-MedicationAdministrationRwd.html) because those resources are important to get a complete picture of the medications that a patient is taking.  See the [Medications](medications.html) section of this guide for more information on determining a patient's medications.

#### Problem List

To receive the problem list, the following query for conditions should be made:

[base]/Condition?patient=Patient/[patient id]&recorded-date=ge[history date]

The [IPA Condition](http://hl7.org/fhir/uv/ipa/StructureDefinition-ipa-condition.html) and [IPA Problem List Item](http://hl7.org/fhir/uv/ipa/StructureDefinition-ipa-problem-list-item.html) profiles provide the necessary information for RWD.

#### History of Procedures

To receive procedures for a patient, the following query for procedures should be made:

[base]/Procedure?patient=Patient/[patient id]&date=ge[history date]

This guide defines a [Procedure](StructureDefinition-ProcedureRwd.html) profile since the IPA guide does not.

#### Diagnostic Results

To receive observation results for a patient, the following query for observations should be made:

[base]/Observation?patient=Patient/[patient id]&date=ge[history date]

This guide defines a [Laboratory Results](StructureDefinition-ObservationLaboratoryResultsRwd.html) profile that adds component observations to the base [IPA Observation](http://hl7.org/fhir/uv/ipa/StructureDefinition-ipa-observation.html) profile.

#### Patient Visits

To receive patient visits for a patient, the following query for encounters should be made:

[base]/Encounter?patient=Patient/[patient id]&date=ge[history date]

This guide defines an [Encounter](StructureDefinition-EncounterRwd.html) profile since the IPA guide does not.


---

File: repos/HL7_SLASH_vulcan-rwd/input/pagecontent/index.md

### Overview
In the context of clinical research, Real World Data (RWD) are data created in the “real world” of everyday experience, such as a routine patient visit to a healthcare provider, as opposed to data created under clearly defined protocols typical of controlled clinical trials. The primary purpose for such data, collected for a purpose other than use in a clinical trial, is in support of clinical care of patients and knowledge for their healthcare providers. However, large amounts of such information could potentially be used for the secondary purpose of supporting clinical research to analyze the data and generate supporting evidence for, as an example, a new indicated use for an already approved pharmaceutical drug or safety-related analyses.  The identification of outcomes, safety signals, or other research/regulatory insights demonstrated with the use of RWD is commonly called Real World Evidence (RWE). 

### Current Scope
The main goal of this FHIR Implementation Guide is to help define a minimal set of clinical research FHIR resources and elements in an EHR that can be utilized in an interoperable and consistent manner for clinical research objectives (e.g., academic, regulatory, etc.). This Guide defines FHIR profiles that can be used in an EHR setting to represent data that will be supportive of RWD research needs and also to retrieve relevant research data from Real World Data (RWD) sources to facilitate downstream use (directly or after transformation) for submissions to pharmaceutical regulatory agencies.  The downstream use of retrieved data is not covered in this guide but separate efforts exist to give advice for such use (for example, the [FHIR to CDISC Joint Mapping Implementation Guide](http://hl7.org/fhir/uv/cdisc-mapping/)).

Many sources of RWD exist, but for the current phase of work, the scope of this Implementation Guide is limited to the use of Electronic Health Record (EHR) systems as sources of RWD. The intent is for future iterations of the Implementation Guide to have a wider scope of RWD such as from Registries, Payer systems, and HIEs.  Additionally, our focus is currently limited to the use of EHR data for retrospective analysis of data which already exists as part of normal healthcare encounters - not data created as part of prospective clinical studies.

We are very aware that the use of EHRs as a mode of direct data collections for traditional prospective clinical trials (sometimes called “electronic source data” or “eSource” activities) is also of great interest. While this is not currently in scope of this implementation guide, we consider it highly likely that types of solutions developed for eSource and for RWD will have significant overlap.

This guide is dependent on the International Patient Access (IPA) project for a baseline dataset from which to build its profiles. IPA provides a mechanism for application to access patient information and provides a base set of profiles that are in line with the requirements of the RWD guide.  The profiles built will detail the data elements that are needed for conveying data needed for clinical research.  IPA was chosen over a regional guide like US Core because it is a more generalized representation of data and has less constraints than regional guides.  To that end, a guide that bases itself on IPA will be more highly interoperable but can be further constrained to be in line with a regional guide like US Core, Australia Core, or Canadian Core.

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="rwd_conceptual_application.png" alt="Diagram showing relationship between IPS, this guide, and other specific guides"/>
  <figcaption>Figure 1 - Real World Data Conceptual Application</figcaption>
</figure>
{::options parse_block_html="true" /}

[This page](references.html) has more information on the relationship between this guide and other foundational guides.

This guide defines the FHIR building blocks to meet use cases which will eventually mature the minimal set of common resources and elements.  It is being developed using an iterative use case approach, identifying the minimal set of EHR-based information needed to answer a small set of research questions and creating a set of FHIR profiles for representing this needed information in an EHR, then repeating the process with a new question.  As more use cases are considered, more common resources and elements will be added to the guide.  It provides an opportunity to help establish future US Core, Australia Core, Japan Core, etc. as they wish to scale their guides and profiles.  The mappings to achieve different outcomes are dependent on other projects (eg. FHIR to CDISC, FHIR to OMOP, etc.).  A different Vulcan project is exploring the [FHIR to OMOP mappings](https://confluence.hl7.org/display/VA/FHIR+to+OMOP).

#### How to use with Jurisdictional Guides
The profiles that are defined in this guide indicate, using the Must-Support designation, the FHIR data elements that are of importance in retrieving real world data from an EHR.  They can be combined with jurisdiction-specific guides like US Core or Canadian Baseline to create the superset of data elements that an EHR **SHOULD** support in order to be compliant with this guide.  In some instances, the data elements identified in this guide are completely supported by the jurisdictional profile.

As an example, the RWD Condition profile indicates the following data elements must be supported:

* category
* code
* encounter
* recordedDate
* onset[x]
* clinicalStatus
* verificationStatus

The US Core Encounter Diagnosis profile on Condition has all of those data elements as must support, therefore an EHR that is compliant with US Core will be able to handle the requirements imposed by this guide.  The Canadian Baseline Condition profile has clinicalStatus, code, and onset[x] as must support.  An EHR that is compliant with Canadian Baseline would need to support in addition category, verificationStatus, and encounter to be compliant with this guide.

It is expected that jurisdiction-specific versions of this guide would be created to express the combination of requirements imposed by the jurisdiction and this guide.


### Approach
The Vulcan Real World Data project determined that there are two phases to requesting data from an EHR:

1. Determine patients based on inclusion and exclusion criteria
2. Retrieve healthcare data for a specific patient 

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="rwd_in_scope.png" alt="Diagram showing what is in scope for the RWD IG"/>
  <figcaption>Figure 2 - What is in scope of the Real World Data Guide?</figcaption>
</figure>
{::options parse_block_html="true" /}


#### Cohort Building
The first phase is building a cohort by querying for patients based on a set of inclusion and exclusion critieria.  Although these criteria may be represented as FHIR objects, this guide does not include a process from converting the criteria expressed as FHIR instances into queries against an EHR.  Instead it presumes that the needed healthcare data is known by the requesting software in some manner.  In this phase, a number of queries are made against an EHR to narrow down the set of patients to those who meet the research study criteria.  A set of patient identifiers is retrieved and becomes input into the next phase of requesting data.  NOTE: This phase may not be necessary if the set of patients is already known for a study.  If the proper patient identifiers are known, it is possible to skip this phase and go directly to retrieving healthcare data for the known patients.  For more information about this phase, see [Cohort Building Phase](patients.html).

#### Retrieve Healthcare Data
After specific patients have been determined, the next phase is to retrieve their healthcare data.  This guide inherits from the International Patient Access and uses the IPA as the means to transfer healthcare data.

The sections in the IPA around [Gaining Access to a Patient Record](http://hl7.org/fhir/uv/ipa/access.html) and [Finding and Retrieving Patient Information](http://hl7.org/fhir/uv/ipa/fetching.html) detail how healthcare data can be retrieved.  This guide lists specific search parameters needed to find healthcare data for a specific patient and it lists the specific resources and data elements that have been deemed important to return for the purposes of research.  For information on the needed queries, see [Fetching Patient Records](healthdata.html).

### Technical Considerations
To properly implement this guide, there are a set of technical considerations besides the specific queries and profiles defined.  See [Technical Considerations](technical.html) for more details.


---

File: repos/HL7_SLASH_vulcan-rwd/input/pagecontent/medications.md

FHIR has multiple core resources for exchanging Medication information.  The [main use cases]({{site.data.fhir.path}}medications-module.html#intro) of the Medication resources concern the workflow of ordering, dispensing, and administering.  This results in a set of resources that have to be queried as a whole if trying to determine what medications an individual patient is currently taking.

#### Workflow Resources

|**Resource**|**Description**|**Use**|
|---|---|---|
|MedicationRequest|This resource represents an instruction for the supply and administration of medication to a patient.  It is used in both the inpatient (hospital) and community setting.  The 'intent' data element indicates whether the request is a plan ('proposal' or 'plan') or an actual order ('order'). | Armed with only a MedicationRequest with an intent of 'order', no actual statement of use is being made.  It can be inferred in a community setting that the patient had the order supplied and started taking the medication as instructed.  However, other resources are needed to confirm those inferences.  A MedicationRequest with a non-order intent is just a statement of planned usage and SHOULD not be used to infer actual usage. |
|MedicationDispense|This resource represents the details of a supply event where medication has been provided to a patient.  This usually happens in response to a MedicationRequest order but that is not required.| When a 'completed' MedicationDispense record is present, it is now known that a patient has received the medication.  This provides the next level of confidence in inferring that a patient has taken medication but it is still not an actual statement of use.  Knowing that the patient has the medication, it can be inferred that the patient is taking it as instructed. |
|MedicationAdministration|This resource represents an actual administration of medication to a patient.  It is principally used within care settings but is rarely found in outpatient settings.|This resource is definitive knowledge that actual administration of a medication took place.  It is an actual statement of use. |
|MedicationStatement|This is a record of use of a medication.  It is commonly used for recording non-prescription and/or recreational drugs.  It is also used when a patient states what medications they are taking, i.e. upon admission to a hospital or when asserting a set of active medications.|These statements are records of use but they may have limited information in them, i.e. no dosage or comprehensive dates, and the source of the statements need to be taken into account.|
{: .grid }

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="medication_reliability.png" alt="Diagram showing different medication resources"/>
  <figcaption>Figure 1 - Medication Resource Information</figcaption>
</figure>
{::options parse_block_html="true" /}


---

File: repos/HL7_SLASH_vulcan-rwd/input/pagecontent/patients.md

One of the basic needs of research is finding groups of patients that meet a set of criteria, for cohort feasibility determination.  In many studies, inclusion and exclusion criteria are defined.  This guide does not define how those criteria are represented in FHIR but rather assumes that the criteria is defined and can be turned into questions that can be asked of EHRs to find suitable patients.

Through the use cases that were studied, the following data elements were identified that were needed to identify patients.  Note that we are using clinical terminology in identifying the elements as opposed to the FHIR resource names.

* Patient Demographics
	* Birthdate
	* Gender
	* Death Indicator
	* Race / Ethnicity (NOTE: These were found in US studies)
* Visit
	* Reason for Visit
	* Admission and Discharge Dates
	* Discharge Disposition
* Diagnosis
	* Diagnosis Code
	* Date
	* Confirmation Flag
	* Diagnosis Type
* Lab Test
	* Test Code
	* Date
	* Value
	* Interpretation (high, low, abnormal)
* Procedure
	* Procedure Code
	* Date
	* Outcome
* Medication
	* Drug Code
	* Administration Dates
	* Order Dates

From the above data elements, it was determined that the profiles listed below are needed.

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="cohort_criterion_fhir_resources.png" alt="Diagram showing the cohort criterion mapped to FHIR resources"/>
  <figcaption>Figure 2 - Cohort Criterion FHIR Resources</figcaption>
</figure>
{::options parse_block_html="true" /}

### Cohort Building Searches

The sections below detail how a set of patients can be found that match specific search criteria using normal FHIR searching.  Depending on patient consent and data access agreements, these FHIR searches may not be possible.  The following searches, which include the current method, are different levels that could be used to determine either a cohort or whether an EHR has information that should be accessed to find a cohort:

* query for number of patients that match the search criteria
* query for a list of patient IDs that match the search criteria
* retrieve patient resources that match the search criteria (i.e. normal FHIR searching)

EHRs could use the FHIR MeasureReport resource to return the results of any of those three searches.  Details will be found in future versions of this guide.

### Conformance Expectations
This IG expects that all of the below profiles SHALL be supported by a clinical system that is providing data including the extra search parameters defined to allow proper searching of data to find and identify suitable patients.  NOTE: See the section on Medications for the specifics on the different Medication profiles.

### Patient

The [base IPA patient profile](https://hl7.org/fhir/uv/ipa/StructureDefinition-ipa-patient.html) is sufficient for our needs of searching for and retrieving patient demographic details. 

|**Clinical Element**|**FHIR Element**|
|---|---|
|Birthdate|birthDate|
|Gender|gender|
|Death Indicator|deceased|
|Race/Ethnicity|* see note below|
{: .grid }

The following search parameters defined in the base Patient resource are needed:

* birthdate
* gender
* deceased

#### Race and Ethnicity
Race and Ethnicity are not part of the base Patient resource nor are they found in the IPS Patient profile as these are not common elements found outside of the United States.  For studies that are US based and have need of searching for or retrieving the race and/or ethnicity of a patient, the US Core extensions for [Race](http://hl7.org/fhir/us/core/StructureDefinition-us-core-race.html) and [Ethnicity](http://hl7.org/fhir/us/core/StructureDefinition-us-core-ethnicity.html) provide the normally collected information and can be added to the Patient instance.

### Encounter
The FHIR Encounter resource is used for recording hospital visits (and visits in general).  To allow searching for encounters, the [Encounter profile](StructureDefinition-EncounterRwd.html) was created that indicates the minimum supported fields needed to determine if a patient has been hospitalized.

|**Clinical Element**|**FHIR Element**|
|---|---|
|Reason for Visit|reasonCode / reasonReference|
|Admission Date|period.start|
|Discharge Date|period.end|
|Discharge Disposition|hospitalization.dischargeDisposition|
{: .grid }

Along with the above elements, it was also determined that status was an important FHIR element to support.

The following search parameters defined in the base Encounter resource are needed:

* reason-code / reason-reference
* date
* status

This guide defines an [extra search parameter](SearchParameter-EncounterDischargeDispositionSearchParameter.html) on Encounter to search for the patient's disposition on discharge.

### Condition
The FHIR Condition resource is used for recording diagnoses.  Either the [base IPA Condition profile](https://hl7.org/fhir/uv/ipa/StructureDefinition-ipa-condition.html) or [base IPA Problem List Item](https://hl7.org/fhir/uv/ipa/StructureDefinition-ipa-problem-list-item.html) provide the needed data elements for searching and retrieving condition data.

|**Clinical Element**|**FHIR Element**|
|---|---|
|Diagnosis Code|code|
|Date|onset|
|Confirmation Flag|verificationStatus|
|Diagnosis Type|category|
{: .grid }

The following search parameters defined in the base Condition resource are needed:

* code
* onset-date
* verification-status
* clinical-status
* category

### Observation
The FHIR Observation resource is used for recording test results. The [Laboratory Observation Results profile](StructureDefinition-ObservationLaboratoryResultsRwd.html) was created that inherits from the [base IPA Observation  profile](https://hl7.org/fhir/uv/ipa/StructureDefinition-ipa-observation.html) and adds observation components as elements that should be supported.

|**Clinical Element**|**FHIR Element**|
|---|---|
|Test Code|code|
|Date|effective|
|Value|value|
|Interpretation|interpretation|
{: .grid }

The following search parameters defined in the base Observation resource are needed:

* code
* date
* status
* value-concept
* value-quantity
* value-string

This guide defines an [extra search parameter](SearchParameter-ObservationInterpretationSearchParameter.html) on Observation to search for Observation interpretations.

### Procedure
The FHIR Procedure resource is used for recording procedures.  The [Procedure profile](StructureDefinition-ProcedureRwd.html) was created to define the required data elements.

|**Clinical Element**|**FHIR Element**|
|---|---|
|Procedure Code|code|
|Date|performed|
|Outcome|outcome|
{: .grid }

Along with the above elements, it was also determined that status was an important FHIR element to support.

The following search parameters defined in the base Procedure resource are needed:

* code
* date
* status

This guide defines an [extra search parameter](SearchParameter-ProcedureOutcomeSearchParameter.html) on Procedure to search for Procedure outcomes.

### Medications
FHIR provides a set of resources for recording the ordering, dispensing, and administering of medications.  The MedicationAdministration resource is the prime resource for recording actual use of a medication, but that is rarely found outside of hospital settings.  For non-hospital care, the MedicationRequest, the MedicationDispense, and the MedicationStatement resources need to be searched for and have the administration inferred.  [Here](medications.html) is more information about the use of the Medication resources to determine usage.

The IPA only provides a profie on the MedicatioRequest and MedicationStatement resources.  Those are used by this guide along with new profiles on the MedicationDispense and MedicationAdministration resources.

#### Conformance Expectations
This IG does not expect every system to support all four of the Medication resources listed below.  We recognize that some systems do not capture dispenses or administrations, for example.  To conform to this guide, a clinical system SHALL support at least one of these Medication resource profiles.  Further, the expectation is that if a system DOES capture medication information, it SHALL expose this data using the profiles below.

|**Clinical Data**|**Required FHIR Profile**|
|---|---|
|Prescriptions|[MedicationRequest](https://hl7.org/fhir/uv/ipa/StructureDefinition-ipa-medicationrequest.html)|
|Dispenses|[MedicationDispense](StructureDefinition-MedicationDispenseRwd.html)|
|Administrations|[MedicationAdministration](StructureDefinition-MedicationAdministrationRwd.html)|
|Statements|[MedicationStatement](StructureDefinition-MedicationStatementRwd.html)|
{: .grid }


#### MedicationStatement
The [MedicationStatement profile](StructureDefinition-MedicationStatementRwd.html) was created that inherits from the [base IPA MedicationStatement profile](https://hl7.org/fhir/uv/ipa/StructureDefinition-ipa-medicationstatement.html) and adds derivedFrom as elements that should be supported.

The derivedFrom element SHALL be included if the MedicationStatement information was taken from a MedicationRequest, MedicationDispense, or MedicationAdministration instance.  It is not marked as mandatory because there will be instances where a MedicationStatement was directly created and not inferred from another resource instance.

|**Clinical Element**|**FHIR Element**|
|---|---|
|Drug Code|medication|
|Administration Dates|effective|
|Order Dates|n/a|
{: .grid }

The drug code can be found either as an actual code on the MedicationStatement instance or by following the reference to the Medication instance.

Along with the above elements, it was also determined that status was an important FHIR element to support.

The following search parameters defined in the base MedicationStatement are needed:

* code / medication.code
* effective
* status

#### MedicationRequest
To allow searching for prescriptions and optionally planned medication requests, the base [IPA MedicationRequest profile](https://hl7.org/fhir/uv/ipa/StructureDefinition-ipa-medicationrequest.html) shall be used.

|**Clinical Element**|**FHIR Element**|
|---|---|
|Drug Code|medication|
|Administration Dates|dosageInstruction.timing.bounds|
|Order Dates|authoredOn|
{: .grid }

Along with the above elements, it was also determined that status and intent was an important FHIR element to support.
The following search parameters defined in the base MedicationRequest are needed:

* code / medication.code
* authoredOn
* date
* intent
* status

#### MedicationDispense
To allow searching for dispenses, the [MedicationDispense profile](StructureDefinition-MedicationDispenseRwd.html) was created that indicates the minimum supported fields needed to determine if a patient has been supplied a certain medication.

|**Clinical Element**|**FHIR Element**|
|---|---|
|Drug Code|medication|
|Administration Dates|dosageInstruction.timing.bounds|
|Supply Dates|whenHandedOver|
{: .grid }

Along with the above elements, it was also determined that status was an important FHIR element to support.
The following search parameters defined in the base MedicationDispense are needed:

* code / medication.code
* whenhandedover
* status

#### MedicationAdministration
To allow searching for administrations, the [MedicationAdministration profile](StructureDefinition-MedicationAdministrationRwd.html) was created that indicates the minimum supported fields needed to determine if a patient has taken a certain medication.

|**Clinical Element**|**FHIR Element**|
|---|---|
|Drug Code|medication|
|Administration Dates|effective|
{: .grid }

Along with the above elements, it was also determined that status was an important FHIR element to support.
The following search parameters defined in the base MedicationDispense are needed:

* code / medication.code
* effective-time
* status


---

File: repos/HL7_SLASH_vulcan-rwd/input/pagecontent/references.md

### Relationship with Guides
This FHIR implementation guide has the following relationships with other FHIR implementation guides:

* [International Patient Summary](https://hl7.org/fhir/uv/ips/) - all profiles and constraints are inherited from the International Patient Summary guide.
* [US Core](http://hl7.org/fhir/us/core/) - we refer to the race and ethnicity extensions from the US Core guide.  As well, implementers in the US are recommended to implement US Core.
* [Vulcan Schedule of Activities (SOA)](http://hl7.org/fhir/uv/vulcan-schedule) - the project team that developed this guide worked closely with the Schedule of Activities project team.  It is intended that, in the future, the data retrieved via the processes in this Real Word Data guide would be useable in adding to a Schedule of Activities as defined by the SOA guide.


---

File: repos/HL7_SLASH_vulcan-rwd/input/pagecontent/technical.md

### Representing Absent and Not Known Data

When a source system supports the extended IPS request, the returned FHIR document will have sections that are required to be returned.  When those sections do not contain any data, there is some ambiguity as to whether there is no data because the patient does not have any instances of the data that is contained in that section, i.e. allergies or medications, or there is no data because the patient has not been explicitly asked.  Thus there is a need to indicate an explicit assertion of whether data is known to be absent or not is made.  The following sections are indicated as required and therefore must follow this rule:

* Medication Summary
* Problem List
* Diagnostic Results
* Allergies and Intolerances

The following sections are recommended and can either explicitly assert unknown or no known information as above or the section may just be omitted:

* Immunizations
* Medical Devices
* Vital Signs

NOTE: If a recommended or optional section is omitted, receivers SHALL not assume that no information is known but rather that it is unknown whether the patient has any information for that section.

### Must Support Element Rules

For the purposes of this implementation guide, a data element marked as MustSupport SHALL be interepreted as follows:

* Implementers creating content, either as a response to cohort building or to finding data:
  * SHALL be capable of including any data element marked as MustSupport
* Implements receiveing content, either as a response to cohort building or to finding data:
  * SHALL be capable of processing instances containing MustSupport elements without generating an error or causing the application to fail
	* SHOULD be capable of displaying MustSupport elements for human use or processing them for other purposes
	* SHALL be able to process instances containing MustSupport elements that are asserting missing information
	
#### Missing Data

##### Optional MustSupport Data Elements
If an implementer creating content does not have data to be included for optional data elements that are marked as MustSupport, they are allowed to omit the data.

##### Required MustSupport Data Elements
If an implementer creating content does not have data to be included for required data elements that are marked as MustSupport, they must include the element but are allowed to indicate that data is missing.  This can be done in one of two ways:

1. For non-coded data elements, use the Data Absent Reason extension.
2. For coded data elements with example, preferred, or extensible bindings:
  * use the text element if the source system has no coded data
	* use an appropriate exception code from the value set, if available
	* use a code from the Data Absent Reason code system
3. For coded data elements with required bindings, use the appropriate exception code from the value set

### Cross-Version Analysis
{% include cross-version-analysis.xhtml %}

### Intellectual Property Statements
{% include ip-statements.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### IG Dependencies

This IG Contains the following dependencies on other IGs.

{% include dependency-table.xhtml %}

---

