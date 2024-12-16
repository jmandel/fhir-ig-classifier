File: repos/hl7-it_SLASH_lab-report/input/fsh/codesystems/codeSystems.fsh


CodeSystem: CsTipoStruttura
Id: mds-tipo-struttura
Title: "MDS - Tipo di Struttura per Srutture di ricovero"
Description: "MDS - TIpologia di Struttura che identifica le Strutture di ricovero"
* ^experimental = false
* ^caseSensitive = true 

* ^concept[0].code = #0
* ^concept[0].display = "Azienda Ospedaliera"
* ^concept[0].definition = "Pubblico"
* ^concept[+].code = #1
* ^concept[=].display = "Ospedale a gestione diretta"
* ^concept[=].definition = "Pubblico"
* ^concept[+].code = #2.1
* ^concept[=].display = "A.O. integrata con SSN"
* ^concept[=].definition = "Pubblico"
* ^concept[+].code = #2.2
* ^concept[=].display = "A.O. integrata con Università"
* ^concept[=].definition = "Pubblico"
* ^concept[+].code = #2.3
* ^concept[=].display = "Policlinico universitario privato"
* ^concept[=].definition = "Privato (Equiparato a pubblico)"
* ^concept[+].code = #3.1
* ^concept[=].display = "IRCCS pubblico"
* ^concept[=].definition = "Pubblico"
* ^concept[+].code = #3.2
* ^concept[=].display = "IRCCS privato"
* ^concept[=].definition = "Privato (Equiparato a pubblico)"
* ^concept[+].code = #3.3
* ^concept[=].display = "IRCCS fondazione"
* ^concept[=].definition = "Privato (Equiparato a pubblico)"
* ^concept[+].code = #4
* ^concept[=].display = "Ospedale classificato o assimilato ai sensi dell'art. 1, ultimo comma, L.132/1968"
* ^concept[=].definition = "Privato (Equiparato a pubblico)"
* ^concept[+].code = #5.1
* ^concept[=].display = "Casa di cura privata accreditata"
* ^concept[=].definition = "Privata"
* ^concept[+].code = #5.2
* ^concept[=].display = "Casa di cura privata non accreditata"
* ^concept[=].definition = "Privata"
* ^concept[+].code = #8
* ^concept[=].display = "Istituto qualificato presidio della U.S.L."
* ^concept[=].definition = "Privato (Equiparato a pubblico)"
* ^concept[+].code = #9
* ^concept[=].display = "Ente di ricerca"
* ^concept[=].definition = "Privato (Equiparato a pubblico)"

CodeSystem: CsContinente
Id: istat-continente
Title: "ISTAT - Continente"
Description: "ISTAT - Continente"
* ^experimental = false
* ^caseSensitive = true 

* #1 "Europa"
* #2 "Africa"
* #3 "Asia"
* #4 "America"
* #5 "Oceania"

CodeSystem: CsRipartizionegeografica
Id: istat-ripartizione-geografica
Title: "ISTAT - Ripartizione Geografica"
Description: "ISTAT - Codice Istat della Ripartizione geografica secondo la suddivisione del territorio nazionale"
* ^experimental = false
* ^caseSensitive = true 

* #1 "Nord-ovest"
* #2 "Nord-est"
* #3 "Centro"
* #4 "Sud"
* #5 "Isole"

// CodeSystem: CsAifaNota
// Id: aifa-nota
// Title: "AIFA - Indicazioni terapeutiche (Nota AIFA)"
// Description: "AIFA - Indicazioni terapeutiche per le quali un determinato farmaco è rimborsabile a carico del Servizio Sanitario Nazionale. Conosciute come Note AIFA"
// * ^experimental = false
// * ^caseSensitive = true 
//--------------------------

CodeSystem: CsAifaAic
Id: aifa-aic
Title: "AIFA - Autorizzazione Immissione in Commercio"
Description: "AIFA - Autorizzazione Immissione in Commercio."
* ^experimental = false
* ^caseSensitive = true
//--------------------------


CodeSystem: CsMinSanRegioni
Id: minsan-regione
Title: "MDS - Codici Regioni / PPAA"
Description: "MDS - Codici Regioni / Province Autonome usati nei file FLS11."
* ^experimental = false
* ^caseSensitive = true 
* #010	"PIEMONTE"
* #020	"VALLE D'AOSTA"
* #030	"LOMBARDIA"
* #041	"PROV. AUTON. BOLZANO"
* #042	"PROV. AUTON. TRENTO"
* #050	"VENETO"
* #060	"FRIULI VENEZIA GIULIA"
* #070	"LIGURIA"
* #080	"EMILIA ROMAGNA"
* #090	"TOSCANA"
* #100	"UMBRIA"
* #110	"MARCHE"
* #120	"LAZIO"
* #130	"ABRUZZO"
* #140	"MOLISE"
* #150	"CAMPANIA"
* #160	"PUGLIA"
* #170	"BASILICATA"
* #180	"CALABRIA"
* #190	"SICILIA"
* #200	"SARDEGNA"

CodeSystem: CsIstatDug
Id: dug
Title: "ISTAT - Registro delle Denominazioni Urbanistiche Generiche (DUG)"
Description: "ISTAT - Registro delle Denominazioni Urbanistiche Generiche (DUG)"
* ^experimental = false
* ^caseSensitive = true 
* #1 "arco"
* #2 "autostrada"
* #3 "belvedere"
* #4 "calata"
* #5 "calle"
* #6 "cavalcavia"
* #7 "circonvallazione"
* #8 "corso"
* #9 "corte"
* #10 "cortile"
* #11 "discesa"
* #12 "galleria"
* #13 "gradinata"
* #14 "larghetto"
* #15 "largo"
* #16 "litoranea"
* #17 "lungargine"
* #18 "lungofiume"
* #19 "lungolago"
* #20 "lungomare"
* #21 "lungoparco"
* #22 "lungotorrente"
* #23 "molo"
* #24 "parcheggio"
* #25 "passaggio"
* #26 "passeggiata"
* #27 "percorso ciclabile"
* #28 "percorso ciclopedonale"
* #29 "percorso pedonale"
* #30 "piazza"
* #31 "piazzale"
* #32 "piazzetta"
* #33 "pista ciclabile"
* #34 "ponte"
* #35 "raccordo"
* #36 "rampa"
* #37 "ronco"
* #38 "rotatoria"
* #39 "rotonda"
* #40 "salita"
* #41 "scalinata"
* #42 "scesa"
* #43 "sentiero"
* #44 "slargo"
* #45 "sottopasso"
* #46 "sovrappasso"
* #47 "spiazzo"
* #48 "strada"
* #49 "strada antica"
* #50 "strada comunale"
* #51 "strada consortile"
* #52 "strada nuova"
* #53 "strada panoramica"
* #54 "strada poderale"
* #55 "strada privata"
* #56 "strada provinciale"
* #57 "strada regionale"
* #58 "strada statale"
* #59 "strada vecchia"
* #60 "strada vicinale"
* #61 "stradella"
* #62 "stradello"
* #63 "stradone"
* #64 "tangenziale"
* #65 "traversa"
* #66 "traversa privata"
* #67 "via"
* #68 "via antica"
* #69 "via comunale"
* #70 "via nazionale"
* #71 "via nuova"
* #72 "via panoramica"
* #73 "via privata"
* #74 "via provinciale"
* #75 "via vecchia"
* #76 "viale"
* #77 "vialetto"
* #78 "vico"
* #79 "vico chiuso"
* #80 "vico cieco"
* #81 "vico privato"
* #82 "vicoletto"
* #83 "vicolo"
* #84 "vicolo chiuso"
* #85 "vicolo cieco"
* #86 "vicolo privato"
* #87 "viottolo"

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
CodeSystem: CsItRoleCode
Id: it-V3RoleCode
Title: "HL7 Italia - HL7 V3 RoleCode (estensione)"
Description: "HL7 Italia - Estensione del Vocabolario HL7 V3 RoleCode"
//-------------------------------------------------------------------------------------------
* ^experimental = false
* ^caseSensitive = true 
* #MMG  "medico di medicina generale"
* #PLS  "pediatra di libera scelta"
* #MSD  "medico del servizio/struttura del distretto/azienda" 
* #MCA  "medico continuità assistenziale" 
* #MO  "medico ospedaliero" 
* #MSA  "medico specialista ambulatoriale" 
* #MAU  "medico di azienda ospedaliero-universitaria" 
* #GMT  "guardia medica turistica" 
* #SPA  "specialista di struttura privata accreditata" 
* #MI  "medico INAIL" 
* #MC  "medico consulente" 
* #AS "altra specializzazione" 
* #AA "altro (tirocinanti, specializzandi, etc)"
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        
CodeSystem: CsProvinceISTAT
Id: province-istat
Title: "ISTAT - Province"
Description: "ISTAT - Province"
//-------------------------------------------------------------------------------------------
//* ^url = "http://terminology.hl7.it/CodeSystem/mef-ae-province"
* ^experimental = false
* ^caseSensitive = true 
* #001	"Torino"
* #002	"Vercelli"
* #003	"Novara"
* #004	"Cuneo"
* #005	"Asti"
* #006	"Alessandria"
* #096	"Biella"
* #103	"Verbano-Cusio-Ossola"
* #007	"Valle d'Aosta/Vallée d'Aoste"
* #012	"Varese"
* #013	"Como"
* #014	"Sondrio"
* #015	"Milano"
* #016	"Bergamo"
* #017	"Brescia"
* #018	"Pavia"
* #019	"Cremona"
* #020	"Mantova"
* #097	"Lecco"
* #098	"Lodi"
* #108	"Monza e della Brianza"
* #021	"Bolzano/Bozen"
* #022	"Trento"
* #023	"Verona"
* #024	"Vicenza"
* #025	"Belluno"
* #026	"Treviso"
* #027	"Venezia"
* #028	"Padova"
* #029	"Rovigo"
* #030	"Udine"
* #031	"Gorizia"
* #032	"Trieste"
* #093	"Pordenone"
* #008	"Imperia"
* #009	"Savona"
* #010	"Genova"
* #011	"La Spezia"
* #033	"Piacenza"
* #034	"Parma"
* #035	"Reggio nell'Emilia"
* #036	"Modena"
* #037	"Bologna"
* #038	"Ferrara"
* #039	"Ravenna"
* #040	"Forlì-Cesena"
* #099	"Rimini"
* #045	"Massa-Carrara"
* #046	"Lucca"
* #047	"Pistoia"
* #048	"Firenze"
* #049	"Livorno"
* #050	"Pisa"
* #051	"Arezzo"
* #052	"Siena"
* #053	"Grosseto"
* #100	"Prato"
* #054	"Perugia"
* #055	"Terni"
* #041	"Pesaro e Urbino"
* #042	"Ancona"
* #043	"Macerata"
* #044	"Ascoli Piceno"
* #109	"Fermo"
* #056	"Viterbo"
* #057	"Rieti"
* #058	"Roma"
* #059	"Latina"
* #060	"Frosinone"
* #066	"L'Aquila"
* #067	"Teramo"
* #068	"Pescara"
* #069	"Chieti"
* #070	"Campobasso"
* #094	"Isernia"
* #061	"Caserta"
* #062	"Benevento"
* #063	"Napoli"
* #064	"Avellino"
* #065	"Salerno"
* #071	"Foggia"
* #072	"Bari"
* #073	"Taranto"
* #074	"Brindisi"
* #075	"Lecce"
* #110	"Barletta-Andria-Trani"
* #076	"Potenza"
* #077	"Matera"
* #078	"Cosenza"
* #079	"Catanzaro"
* #080	"Reggio Calabria"
* #101	"Crotone"
* #102	"Vibo Valentia"
* #081	"Trapani"
* #082	"Palermo"
* #083	"Messina"
* #084	"Agrigento"
* #085	"Caltanissetta"
* #086	"Enna"
* #087	"Catania"
* #088	"Ragusa"
* #089	"Siracusa"
* #090	"Sassari"
* #091	"Nuoro"
* #092	"Cagliari"
* #095	"Oristano"
* #111	"Sud Sardegna"


// CodeSystem: CsAnagrafiRegionali
// Id: cs-anagrafi-regionali
// Title: "Anagrafi Regionali"
// Description: "Anagrafi Regionali"
// * ^experimental = false
// * ^caseSensitive = false
// // //------------------------------------------------------------------------------------------- 
// * #2.16.840.1.113883.2.9.2.10.4.1. "Anagrafi Regionali - Piemonte"
// * #2.16.840.1.113883.2.9.2.20.4.1 "Anagrafi Regionali - Valle d`aosta"
// * #2.16.840.1.113883.2.9.2.30.4.1 "Anagrafi Regionali - Lombardia"
// * #2.16.840.1.113883.2.9.2.41.4.1 "Anagrafi Regionali - prov. auton. bolzano"
// * #2.16.840.1.113883.2.9.2.42.4.1 "Anagrafi Regionali - prov. auton. trento"
// * #2.16.840.1.113883.2.9.2.50.4.1 "Anagrafi Regionali - Veneto"
// * #2.16.840.1.113883.2.9.2.60.4.1 "Anagrafi Regionali - Friuli venezia giulia"
// * #2.16.840.1.113883.2.9.2.70.4.1 "Anagrafi Regionali - Liguria"
// * #2.16.840.1.113883.2.9.2.80.4.1 "Anagrafi Regionali - Emilia romagna"
// * #2.16.840.1.113883.2.9.2.90.4.1 "Anagrafi Regionali - Toscana"
// * #2.16.840.1.113883.2.9.2.100.4.1 "Anagrafi Regionali - Umbria"
// * #2.16.840.1.113883.2.9.2.110.4.1 "Anagrafi Regionali - Marche"
// * #2.16.840.1.113883.2.9.2.120.4.1 "Anagrafi Regionali - Lazio"
// * #2.16.840.1.113883.2.9.2.130.4.1 "Anagrafi Regionali - Abruzzo"
// * #2.16.840.1.113883.2.9.2.140.4.1 "Anagrafi Regionali - Molise"
// * #2.16.840.1.113883.2.9.2.150.4.1 "Anagrafi Regionali - Campania"
// * #2.16.840.1.113883.2.9.2.160.4.1 "Anagrafi Regionali - Puglia"
// * #2.16.840.1.113883.2.9.2.170.4.1 "Anagrafi Regionali - Basilicata"
// * #2.16.840.1.113883.2.9.2.180.4.1 "Anagrafi Regionali - Calabria"
// * #2.16.840.1.113883.2.9.2.190.4.1 "Anagrafi Regionali - Sicilia"
// * #2.16.840.1.113883.2.9.2.200.4.1 "Anagrafi Regionali - Sardegna"



// CodeSystem: CsIstatEstere
// Id: istat-unitaAmministrativeTerritorialiEstere
// Title: "ISTAT - Unita Amministrative Territoriali Estere"
// Description: "ISTAT - Unita Amministrative Territoriali Estere"
// * ^experimental = false
// * ^caseSensitive = true 
// * ^concept[0].code = #100
// * ^concept[0].display = "Italia"
// * ^concept[1].code = #201
// * ^concept[1].display = "Albania"
// * ^concept[2].code = #202
// * ^concept[2].display = "Andorra"
// * ^concept[3].code = #203
// * ^concept[3].display = "Austria"
// * ^concept[4].code = #206
// * ^concept[4].display = "Belgio"
// * ^concept[5].code = #209
// * ^concept[5].display = "Bulgaria"
// * ^concept[6].code = #212
// * ^concept[6].display = "Danimarca"
// * ^concept[7].code = #214
// * ^concept[7].display = "Finlandia"
// * ^concept[8].code = #215
// * ^concept[8].display = "Francia"
// * ^concept[9].code = #216
// * ^concept[9].display = "Germania"
// * ^concept[10].code = #219
// * ^concept[10].display = "Regno Unito"
// * ^concept[11].code = #220
// * ^concept[11].display = "Grecia"
// * ^concept[12].code = #221
// * ^concept[12].display = "Irlanda"
// * ^concept[13].code = #223
// * ^concept[13].display = "Islanda"
// * ^concept[14].code = #225
// * ^concept[14].display = "Liechtenstein"
// * ^concept[15].code = #226
// * ^concept[15].display = "Lussemburgo"
// * ^concept[16].code = #227
// * ^concept[16].display = "Malta"
// * ^concept[17].code = #229
// * ^concept[17].display = "Monaco"
// * ^concept[18].code = #231
// * ^concept[18].display = "Norvegia"
// * ^concept[19].code = #232
// * ^concept[19].display = "Paesi Bassi"
// * ^concept[20].code = #233
// * ^concept[20].display = "Polonia"
// * ^concept[21].code = #234
// * ^concept[21].display = "Portogallo"
// * ^concept[22].code = #235
// * ^concept[22].display = "Romania"
// * ^concept[23].code = #236
// * ^concept[23].display = "San Marino"
// * ^concept[24].code = #239
// * ^concept[24].display = "Spagna"
// * ^concept[25].code = #240
// * ^concept[25].display = "Svezia"
// * ^concept[26].code = #241
// * ^concept[26].display = "Svizzera"
// * ^concept[27].code = #243
// * ^concept[27].display = "Ucraina"
// * ^concept[28].code = #244
// * ^concept[28].display = "Ungheria"
// * ^concept[29].code = #245
// * ^concept[29].display = "Federazione russa"
// * ^concept[30].code = #246
// * ^concept[30].display = "Stato della Città del Vaticano"
// * ^concept[31].code = #247
// * ^concept[31].display = "Estonia"
// * ^concept[32].code = #248
// * ^concept[32].display = "Lettonia"
// * ^concept[33].code = #249
// * ^concept[33].display = "Lituania"
// * ^concept[34].code = #250
// * ^concept[34].display = "Croazia"
// * ^concept[35].code = #251
// * ^concept[35].display = "Slovenia"
// * ^concept[36].code = #252
// * ^concept[36].display = "Bosnia-Erzegovina"
// * ^concept[37].code = #253
// * ^concept[37].display = "Macedonia del Nord"
// * ^concept[38].code = #254
// * ^concept[38].display = "Moldova"
// * ^concept[39].code = #255
// * ^concept[39].display = "Slovacchia"
// * ^concept[40].code = #256
// * ^concept[40].display = "Bielorussia"
// * ^concept[41].code = #257
// * ^concept[41].display = "Repubblica ceca"
// * ^concept[42].code = #270
// * ^concept[42].display = "Montenegro"
// * ^concept[43].code = #271
// * ^concept[43].display = "Serbia"
// * ^concept[44].code = #272
// * ^concept[44].display = "Kosovo"
// * ^concept[45].code = #301
// * ^concept[45].display = "Afghanistan"
// * ^concept[46].code = #302
// * ^concept[46].display = "Arabia Saudita"
// * ^concept[47].code = #304
// * ^concept[47].display = "Bahrein"
// * ^concept[48].code = #305
// * ^concept[48].display = "Bangladesh"
// * ^concept[49].code = #306
// * ^concept[49].display = "Bhutan"
// * ^concept[50].code = #307
// * ^concept[50].display = "Myanmar/Birmania"
// * ^concept[51].code = #309
// * ^concept[51].display = "Brunei Darussalam"
// * ^concept[52].code = #310
// * ^concept[52].display = "Cambogia"
// * ^concept[53].code = #311
// * ^concept[53].display = "Sri Lanka"
// * ^concept[54].code = #314
// * ^concept[54].display = "Cina"
// * ^concept[55].code = #315
// * ^concept[55].display = "Cipro"
// * ^concept[56].code = #319
// * ^concept[56].display = "Corea del Nord"
// * ^concept[57].code = #320
// * ^concept[57].display = "Corea del Sud"
// * ^concept[58].code = #322
// * ^concept[58].display = "Emirati Arabi Uniti"
// * ^concept[59].code = #323
// * ^concept[59].display = "Filippine"
// * ^concept[60].code = #324
// * ^concept[60].display = "Palestina"
// * ^concept[61].code = #326
// * ^concept[61].display = "Giappone"
// * ^concept[62].code = #327
// * ^concept[62].display = "Giordania"
// * ^concept[63].code = #330
// * ^concept[63].display = "India"
// * ^concept[64].code = #331
// * ^concept[64].display = "Indonesia"
// * ^concept[65].code = #332
// * ^concept[65].display = "Iran"
// * ^concept[66].code = #333
// * ^concept[66].display = "Iraq"
// * ^concept[67].code = #334
// * ^concept[67].display = "Israele"
// * ^concept[68].code = #335
// * ^concept[68].display = "Kuwait"
// * ^concept[69].code = #336
// * ^concept[69].display = "Laos"
// * ^concept[70].code = #337
// * ^concept[70].display = "Libano"
// * ^concept[71].code = #338
// * ^concept[71].display = "Timor Leste"
// * ^concept[72].code = #339
// * ^concept[72].display = "Maldive"
// * ^concept[73].code = #340
// * ^concept[73].display = "Malaysia"
// * ^concept[74].code = #341
// * ^concept[74].display = "Mongolia"
// * ^concept[75].code = #342
// * ^concept[75].display = "Nepal"
// * ^concept[76].code = #343
// * ^concept[76].display = "Oman"
// * ^concept[77].code = #344
// * ^concept[77].display = "Pakistan"
// * ^concept[78].code = #345
// * ^concept[78].display = "Qatar"
// * ^concept[79].code = #346
// * ^concept[79].display = "Singapore"
// * ^concept[80].code = #348
// * ^concept[80].display = "Siria"
// * ^concept[81].code = #349
// * ^concept[81].display = "Thailandia"
// * ^concept[82].code = #351
// * ^concept[82].display = "Turchia"
// * ^concept[83].code = #353
// * ^concept[83].display = "Vietnam"
// * ^concept[84].code = #354
// * ^concept[84].display = "Yemen"
// * ^concept[85].code = #356
// * ^concept[85].display = "Kazakhstan"
// * ^concept[86].code = #357
// * ^concept[86].display = "Uzbekistan"
// * ^concept[87].code = #358
// * ^concept[87].display = "Armenia"
// * ^concept[88].code = #359
// * ^concept[88].display = "Azerbaigian"
// * ^concept[89].code = #360
// * ^concept[89].display = "Georgia"
// * ^concept[90].code = #361
// * ^concept[90].display = "Kirghizistan"
// * ^concept[91].code = #362
// * ^concept[91].display = "Tagikistan"
// * ^concept[92].code = #363
// * ^concept[92].display = "Taiwan"
// * ^concept[93].code = #364
// * ^concept[93].display = "Turkmenistan"
// * ^concept[94].code = #401
// * ^concept[94].display = "Algeria"
// * ^concept[95].code = #402
// * ^concept[95].display = "Angola"
// * ^concept[96].code = #404
// * ^concept[96].display = "Costa d'Avorio"
// * ^concept[97].code = #406
// * ^concept[97].display = "Benin"
// * ^concept[98].code = #408
// * ^concept[98].display = "Botswana"
// * ^concept[99].code = #409
// * ^concept[99].display = "Burkina Faso"
// * ^concept[100].code = #410
// * ^concept[100].display = "Burundi"
// * ^concept[101].code = #411
// * ^concept[101].display = "Camerun"
// * ^concept[102].code = #413
// * ^concept[102].display = "Capo Verde"
// * ^concept[103].code = #414
// * ^concept[103].display = "Repubblica Centrafricana"
// * ^concept[104].code = #415
// * ^concept[104].display = "Ciad"
// * ^concept[105].code = #417
// * ^concept[105].display = "Comore"
// * ^concept[106].code = #418
// * ^concept[106].display = "Congo"
// * ^concept[107].code = #419
// * ^concept[107].display = "Egitto"
// * ^concept[108].code = #420
// * ^concept[108].display = "Etiopia"
// * ^concept[109].code = #421
// * ^concept[109].display = "Gabon"
// * ^concept[110].code = #422
// * ^concept[110].display = "Gambia"
// * ^concept[111].code = #423
// * ^concept[111].display = "Ghana"
// * ^concept[112].code = #424
// * ^concept[112].display = "Gibuti"
// * ^concept[113].code = #425
// * ^concept[113].display = "Guinea"
// * ^concept[114].code = #426
// * ^concept[114].display = "Guinea-Bissau"
// * ^concept[115].code = #427
// * ^concept[115].display = "Guinea equatoriale"
// * ^concept[116].code = #428
// * ^concept[116].display = "Kenya"
// * ^concept[117].code = #429
// * ^concept[117].display = "Lesotho"
// * ^concept[118].code = #430
// * ^concept[118].display = "Liberia"
// * ^concept[119].code = #431
// * ^concept[119].display = "Libia"
// * ^concept[120].code = #432
// * ^concept[120].display = "Madagascar"
// * ^concept[121].code = #434
// * ^concept[121].display = "Malawi"
// * ^concept[122].code = #435
// * ^concept[122].display = "Mali"
// * ^concept[123].code = #436
// * ^concept[123].display = "Marocco"
// * ^concept[124].code = #437
// * ^concept[124].display = "Mauritania"
// * ^concept[125].code = #438
// * ^concept[125].display = "Maurizio"
// * ^concept[126].code = #440
// * ^concept[126].display = "Mozambico"
// * ^concept[127].code = #441
// * ^concept[127].display = "Namibia"
// * ^concept[128].code = #442
// * ^concept[128].display = "Niger"
// * ^concept[129].code = #443
// * ^concept[129].display = "Nigeria"
// * ^concept[130].code = #446
// * ^concept[130].display = "Ruanda"
// * ^concept[131].code = #448
// * ^concept[131].display = "Sao Tomé e Principe"
// * ^concept[132].code = #449
// * ^concept[132].display = "Seychelles"
// * ^concept[133].code = #450
// * ^concept[133].display = "Senegal"
// * ^concept[134].code = #451
// * ^concept[134].display = "Sierra Leone"
// * ^concept[135].code = #453
// * ^concept[135].display = "Somalia"
// * ^concept[136].code = #454
// * ^concept[136].display = "Sudafrica"
// * ^concept[137].code = #455
// * ^concept[137].display = "Sudan"
// * ^concept[138].code = #456
// * ^concept[138].display = "Eswatini"
// * ^concept[139].code = #457
// * ^concept[139].display = "Tanzania"
// * ^concept[140].code = #458
// * ^concept[140].display = "Togo"
// * ^concept[141].code = #460
// * ^concept[141].display = "Tunisia"
// * ^concept[142].code = #461
// * ^concept[142].display = "Uganda"
// * ^concept[143].code = #463
// * ^concept[143].display = "Repubblica Democratica del Congo"
// * ^concept[144].code = #464
// * ^concept[144].display = "Zambia"
// * ^concept[145].code = #465
// * ^concept[145].display = "Zimbabwe"
// * ^concept[146].code = #466
// * ^concept[146].display = "Eritrea"
// * ^concept[147].code = #467
// * ^concept[147].display = "Sud Sudan"
// * ^concept[148].code = #503
// * ^concept[148].display = "Antigua e Barbuda"
// * ^concept[149].code = #505
// * ^concept[149].display = "Bahamas"
// * ^concept[150].code = #506
// * ^concept[150].display = "Barbados"
// * ^concept[151].code = #507
// * ^concept[151].display = "Belize"
// * ^concept[152].code = #509
// * ^concept[152].display = "Canada"
// * ^concept[153].code = #513
// * ^concept[153].display = "Costa Rica"
// * ^concept[154].code = #514
// * ^concept[154].display = "Cuba"
// * ^concept[155].code = #515
// * ^concept[155].display = "Dominica"
// * ^concept[156].code = #516
// * ^concept[156].display = "Repubblica Dominicana"
// * ^concept[157].code = #517
// * ^concept[157].display = "El Salvador"
// * ^concept[158].code = #518
// * ^concept[158].display = "Giamaica"
// * ^concept[159].code = #519
// * ^concept[159].display = "Grenada"
// * ^concept[160].code = #523
// * ^concept[160].display = "Guatemala"
// * ^concept[161].code = #524
// * ^concept[161].display = "Haiti"
// * ^concept[162].code = #525
// * ^concept[162].display = "Honduras"
// * ^concept[163].code = #527
// * ^concept[163].display = "Messico"
// * ^concept[164].code = #529
// * ^concept[164].display = "Nicaragua"
// * ^concept[165].code = #530
// * ^concept[165].display = "Panama"
// * ^concept[166].code = #532
// * ^concept[166].display = "Santa Lucia"
// * ^concept[167].code = #533
// * ^concept[167].display = "Saint Vincent e Grenadine"
// * ^concept[168].code = #534
// * ^concept[168].display = "Saint Kitts e Nevis"
// * ^concept[169].code = #536
// * ^concept[169].display = "Stati Uniti d'America"
// * ^concept[170].code = #602
// * ^concept[170].display = "Argentina"
// * ^concept[171].code = #604
// * ^concept[171].display = "Bolivia"
// * ^concept[172].code = #605
// * ^concept[172].display = "Brasile"
// * ^concept[173].code = #606
// * ^concept[173].display = "Cile"
// * ^concept[174].code = #608
// * ^concept[174].display = "Colombia"
// * ^concept[175].code = #609
// * ^concept[175].display = "Ecuador"
// * ^concept[176].code = #612
// * ^concept[176].display = "Guyana"
// * ^concept[177].code = #614
// * ^concept[177].display = "Paraguay"
// * ^concept[178].code = #615
// * ^concept[178].display = "Perù"
// * ^concept[179].code = #616
// * ^concept[179].display = "Suriname"
// * ^concept[180].code = #617
// * ^concept[180].display = "Trinidad e Tobago"
// * ^concept[181].code = #618
// * ^concept[181].display = "Uruguay"
// * ^concept[182].code = #619
// * ^concept[182].display = "Venezuela"
// * ^concept[183].code = #701
// * ^concept[183].display = "Australia"
// * ^concept[184].code = #703
// * ^concept[184].display = "Figi"
// * ^concept[185].code = #708
// * ^concept[185].display = "Kiribati"
// * ^concept[186].code = #712
// * ^concept[186].display = "Isole Marshall"
// * ^concept[187].code = #713
// * ^concept[187].display = "Stati Federati di Micronesia"
// * ^concept[188].code = #715
// * ^concept[188].display = "Nauru"
// * ^concept[189].code = #719
// * ^concept[189].display = "Nuova Zelanda"
// * ^concept[190].code = #720
// * ^concept[190].display = "Palau"
// * ^concept[191].code = #721
// * ^concept[191].display = "Papua Nuova Guinea"
// * ^concept[192].code = #725
// * ^concept[192].display = "Isole Salomone"
// * ^concept[193].code = #727
// * ^concept[193].display = "Samoa"
// * ^concept[194].code = #730
// * ^concept[194].display = "Tonga"
// * ^concept[195].code = #731
// * ^concept[195].display = "Tuvalu"
// * ^concept[196].code = #732
// * ^concept[196].display = "Vanuatu"
// * ^concept[197].code = #902
// * ^concept[197].display = "Nuova Caledonia"
// * ^concept[198].code = #904
// * ^concept[198].display = "Saint-Martin (FR)"
// * ^concept[199].code = #905
// * ^concept[199].display = "Sahara occidentale"
// * ^concept[200].code = #906
// * ^concept[200].display = "Saint-Barthélemy"
// * ^concept[201].code = #908
// * ^concept[201].display = "Bermuda"
// * ^concept[202].code = #909
// * ^concept[202].display = "Isole Cook (NZ)"
// * ^concept[203].code = #910
// * ^concept[203].display = "Gibilterra"
// * ^concept[204].code = #911
// * ^concept[204].display = "Isole Cayman"
// * ^concept[205].code = #917
// * ^concept[205].display = "Anguilla"
// * ^concept[206].code = #920
// * ^concept[206].display = "Polinesia francese"
// * ^concept[207].code = #924
// * ^concept[207].display = "Isole Fær Øer"
// * ^concept[208].code = #925
// * ^concept[208].display = "Jersey"
// * ^concept[209].code = #926
// * ^concept[209].display = "Aruba"
// * ^concept[210].code = #928
// * ^concept[210].display = "Sint Maarten (NL)"
// * ^concept[211].code = #934
// * ^concept[211].display = "Groenlandia"
// * ^concept[212].code = #939
// * ^concept[212].display = "Sark"
// * ^concept[213].code = #940
// * ^concept[213].display = "Guernsey"
// * ^concept[214].code = #958
// * ^concept[214].display = "Isole Falkland (Malvine)"
// * ^concept[215].code = #959
// * ^concept[215].display = "Isola di Man"
// * ^concept[216].code = #964
// * ^concept[216].display = "Montserrat"
// * ^concept[217].code = #966
// * ^concept[217].display = "Curaçao"
// * ^concept[218].code = #972
// * ^concept[218].display = "Isole Pitcairn"
// * ^concept[219].code = #980
// * ^concept[219].display = "Saint Pierre e Miquelon"
// * ^concept[220].code = #983
// * ^concept[220].display = "Sant'Elena"
// * ^concept[221].code = #988
// * ^concept[221].display = "Terre australi e antartiche francesi"
// * ^concept[222].code = #992
// * ^concept[222].display = "Isole Turks e Caicos"
// * ^concept[223].code = #994
// * ^concept[223].display = "Isole Vergini britanniche"
// * ^concept[224].code = #997
// * ^concept[224].display = "Wallis e Futuna"
// * ^concept[225].code = #998
// * ^concept[225].display = "Altro/Non indicato/In corso di definizione"
// * ^concept[226].code = #888
// * ^concept[226].display = "Non cittadini riconosciuti"
// * ^concept[227].code = #999
// * ^concept[227].display = "Apolide"

CodeSystem: CsMDSIdStruttureInterne
Id: cs-mds-idStruttureInterne
Title: "MDS - ID Strutture Interne di Ricovero"
Description: "MDS - Identificativi Strutture Interne di Ricovero"
//-------------------------------------------------------------------------------------------
* ^experimental = false
* ^status = #active
* ^caseSensitive = true 

* #010030.01 "OSPEDALE CIVILE E.AGNELLI"
* #010030.03 "OSPEDALE DI POMARETTO"
* #010079.01 "OSPEDALE DEGLI INFERMI"
* #010079.02 "OSPEDALE CIVILE DI GIAVENO"
* #010079.04 "OSPEDALE CIVILE DI SUSA"
* #010079.05 "OSPEDALE DI VENARIA"
* #010079.06 "UNITA' AUTONOMA DI DAY SURGERY DI AVIGLI"
* #010019.01 "PRESIDIO OSPED. RIUNITO SEDE DI CIRIE'"
* #010019.03 "PRESIDIO OSPED. RIUNITO SEDE DI LANZO"
* #010023.01 "OSPEDALE CIVILE DI IVREA"
* #010023.02 "OSPEDALE CIVILE DI CUORGNE'"
* #010023.04 "SAAPA S.P.A."
* #010004.01 "OSPEDALE MAGGIORE"
* #010004.02 "OSPEDALE SANTA CROCE"
* #010004.03 "OSPEDALE SAN LORENZO"
* #010004.04 "DAY SURGERY DEL DISTRETTO DI NICHELINO"
* #010009.01 "OSPEDALE SANT'ANDREA"
* #010009.02 "OSPEDALE SS.PIETRO E PAOLO"
* #010005.01 "OSPEDALE SAN BIAGIO"
* #010005.02 "STABILIMENTO OSPEDALIERO CASTELLI"
* #010005.03 "C.O.Q. OSPEDALE MADONNA DEL POPOLO"
* #010124.01 "OSPEDALE DI MONDOVI' CN1"
* #010124.02 "NUOVO OSPEDALE DI CEVA CN1"
* #010126.01 "OSP. MAGGIORE SS. ANNUNZIATA SAVIGLIANO"
* #010126.02 "OSP. CIVILE DI SALUZZO CN1"
* #010120.01 "OSPEDALE SAN LAZZARO - ALBA"
* #010120.02 "OSPEDALE SANTO SPIRITO BRA"
* #010008.01 "PRESIDIO OSP. CARDINAL G. MASSAIA"
* #010008.02 "PRESIDIO OSPEDALIERO S. SPIRITO-VALLE BE"
* #010026.01 "OSPEDALE SANTO SPIRITO CASALE"
* #010026.03 "OSPEDALE SS. ANTONIO E MARGHERITA TORTON"
* #010026.04 "OSPEDALE SAN GIACOMO NOVI"
* #010026.05 "OSPEDALE CIVILE ACQUI"
* #010026.06 "OSPEDALE CIVILE OVADA"
* #010905.01 "OSP. MAGGIORE DELLA CARITA'"
* #010905.02 "OSPEDALE SAN ROCCO GALLIATE"
* #010907.01 "OSP.CIVILE SS.ANTONIO E BIAGIO"
* #010907.02 "OSP. INFANTILE C.ARRIGO"
* #010907.03 "CENTRO RIABILITATIVO POLIFUNZIONALE T.BO"
* #010909.01 "OSPEDALE SAN GIOVANNI BATTISTA MOLINETTE"
* #010909.02 "OSPEDALE DERMATOLOGICO SAN LAZZARO"
* #010909.04 "OSPEDALE CENTRO TRAUMATOLOGICO ORTOPEDIC"
* #010909.05 "ISTITUTO CHIRURGICO ORTOPEDICO REGINA MA"
* #010909.06 "OSPEDALE OSTETRICO GINECOLOGICO SANT'ANN"
* #010909.07 "OSPEDALE INFANTANTILE REGINA MARGHERITA"
* #030914 "OSPEDALE S. PAOLO - MILANO"
* #030915 "OSPEDALE S. CARLO BORROMEO - MILANO"
* #030056 "PRESIDIO OSPED. V. BUZZI - MILANO"
* #030057 "OSPEDALE M. MELLONI - MILANO"
* #030910 "OSPEDALE FATEBENEFRATELLI E OFTALMICO -"
* #030916 "OSPEDALE L. SACCO - MILANO"
* #030911 "ISTITUTO ORTOPEDICO GAETANO PINI - MILAN"
* #030912 "P.O. CENTRO TRAUMATOLOGICO ORTOPEDICO -"
* #030074 "OSPEDALE CIVILE G. FORNAROLI - MAGENTA"
* #030075 "OSPEDALE C.CANTU'-ABBIATEGRASSO"
* #030281.01 "OSPEDALE DI LEGNANO E CUGGIONO-LEGNANO"
* #030281.02 "OSPEDALE DI LEGNANO E CUGGIONO-LEGNANO"
* #030066 "OSPEDALE G.SALVINI-GARBAGNATE MIL.SE"
* #030073 "OSPEDALE DI CIRCOLO - RHO"
* #030087 "OSPEDALE CADUTI BOLLATESI - BOLLATE"
* #030283 "OSPEDALE G.CASATI-PASSIRANA RHO"
* #030051 "P.O.  CITTA' DI SESTO S. GIOVANNI"
* #030058 "OSPEDALE BASSINI - CINISELLO BALSAMO"
* #030071.01 "OSPEDALE S. MARIA DELLE STELLE MELZO"
* #030071.02 "OSPEDALE S. MARIA DELLE STELLE MELZO"
* #030072.01 "OSPEDALE DI  VIZZOLO PREDABISSI"
* #030072.02 "OSPEDALE DI  VIZZOLO PREDABISSI"
* #030085.01 "OSPEDALE UBOLDO - CERNUSCO S/NAVIGLIO"
* #030085.02 "OSPEDALE UBOLDO - CERNUSCO S/NAVIGLIO"
* #030067 "OSPEDALE MAGGIORE DI LODI"
* #030079 "OSPEDALE CIVICO - CODOGNO"
* #030080 "OSPEDALE ROSSI - CASALPUSTERLENGO"
* #030083 "OSPEDALE DELMATI - SANT'ANGELO LODIGIANO"
* #030010 "OSPEDALE GALMARINI - TRADATE"
* #030282.01 "PRESIDIO OSPEDALIERO DEL VERBANO"
* #030282.02 "PRESIDIO OSPEDALIERO DEL VERBANO"
* #030901.01 "PRESIDIO OSPEDALIERO DI VARESE"
* #030901.02 "PRESIDIO OSPEDALIERO DI VARESE"
* #030901.03 "PRESIDIO OSPEDALIERO DI VARESE"
* #030004 "OSPEDALE DI CIRCOLO - BUSTO ARSIZIO"
* #030006 "OSP. S. ANTONIO ABATE - GALLARATE"
* #030008 "OSP. GENERALE PROVINCIALE - SARONNO"
* #030009 "OSPEDALE A.BELLINI - SOMMA LOMBARDO"
* #030012 "OSPEDALE CARLO ONDOLI - ANGERA"
* #030022 "OSPEDALE S. ANTONIO ABATE - CANTU'"
* #030025 "OSPEDALE F. VILLA - MARIANO COMENSE"
* #030902 "OSPEDALE S. ANNA - COMO"
* #030026 "OSPEDALE ERBA-  RENALDI - MENAGGIO"
* #030042 "OSPEDALE SONDRIO"
* #030044 "OSPEDALE DI CHIAVENNA"
* #030045 "OSPEDALE  MORBEGNO"
* #030904 "OSPEDALE MORELLI - SONDALO"
* #030274.01 "OSPEDALE VALCAMONICA - ESINE"
* #030274.02 "OSPEDALE VALCAMONICA - ESINE"
* #030023 "OSPEDALE  UMBERTO I -  BELLANO"
* #030024 "OSPEDALE DI CIRCOLO S.L.MANDIC-MERATE"
* #030903 "OSPEDALE DI CIRCOLO A. MANZONI - LECCO"
* #030068 "PRESIDIO OSPEDALIERO DI DESIO"
* #030909 "OSPEDALE S.GERARDO - MONZA"
* #030070 "PRESIDIO OSPEDALIERO DI CARATE"
* #030078 "PRESIDIO OSPEDALIERO DI VIMERCATE"
* #030081 "PRESIDIO OSPEDALIERO DI GIUSSANO"
* #030082 "P.O. TRABATTONI RONZONI DI SEREGNO"
* #030132 "OSPEDALE CIVILE - S.GIOVANNI BIANCO"
* #030905 "OSPEDALE PAPA GIOVANNI XXIII - BG"
* #030131 "OSPEDALE DI TREVIGLIO E CARAVAGGIO"
* #030138 "OSP.LE SS.TRINITA'-ROMANO DI LOMBARDIA"
* #030133 "OSPEDALE PESENTI FENAROLI - ALZANO L."
* #030136 "OSPEDALE BRIOLINI - GAZZANIGA"
* #030137 "OSP.LE SS.CAPITANIO E GEROSA - LOVERE"
* #030140 "OSPEDALE BOLOGNINI - SERIATE"
* #030382 "OSPEDALE M. O. ANTONIO LOCATELLI-PIARIO"
* #030159 "PRESIDIO OSPEDALIERO DI MONTICHIARI"
* #030162 "PRESIDIO OSPEDALIERO GARDONE V.T."
* #030167 "OSPEDALE DEI BAMBINI - BRESCIA"
* #030906 "PRES.OSPEDAL.SPEDALI CIVILI BRESCIA"
* #030154.01 "PRESIDIO OSPEDALIERO DI CHIARI"
* #030154.02 "PRESIDIO OSPEDALIERO DI CHIARI"
* #030163 "PRESIDIO OSPEDALIERO DI ISEO"
* #030156 "OSPEDALE DI DESENZANO"
* #030157 "OSPEDALE CIVILE LA MEMORIA DI GAVARDO"
* #030158 "OSPEDALE DI LENO"
* #030161 "PRESIDIO OSPEDALIERO DI SALO'"
* #030183 "OSPEDALE VILLA DEI COLLI DI LONATO"
* #030184 "OSPEDALE DI MANERBIO"
* #030273 "PRESIDIO OSPEDALIERO OGLIO PO-CASALMAGGI"
* #030908 "ISTITUTI OSPITALIERI - CREMONA"
* #030227.01 "PRESIDIO OSPEDALIERO - ASOLA"
* #030227.02 "PRESIDIO OSPEDALIERO - ASOLA"
* #030239 "OSP.CIVILE DESTRA SECCHIA-PIEVE CORIANO"
* #030907 "OSPEDALE C. POMA - MANTOVA"
* #030209 "OSPEDALE MAGGIORE - CREMA"
* #030215 "OSPEDALE S. MARTA - RIVOLTA D'ADDA"
* #030189 "OSPEDALE ARNABOLDI - BRONI"
* #030190 "OSPEDALE CARLO MIRA-CASORATE PRIMO"
* #030191 "OSPEDALE S.MARTINO - MEDE"
* #030192 "OSPEDALE SS.ANNUNZIATA - VARZI"
* #030193 "OSPEDALE CIVILE - VIGEVANO"
* #030194 "OSPEDALE CIVILE - VOGHERA"
* #030203 "OSPEDALE ASILO VITTORIA - MORTARA"
* #030383 "NUOVO OSPEDALE DI BRONI E STRADELLA"
* #030936.01 "IST.AUXOLOGICO ITALIANO-I.S. S.LUCA-MILA"
* #030936.02 "IST.AUXOLOGICO ITAL.-I.S. S.MICHELE-MILA"
* #030936.03 "IRCCS OSPEDALE CAPITANIO"
* #042001.01 "PRESIDIO OSPEDALIERO S. CHIARA"
* #042001.03 "PRESIDIO OSPEDALIERO VILLA ROSA"
* #042001.04 "PRESIDIO OSPEDALIERO VILLA IGEA"
* #050201.01 "OSPEDALE S. MARTINO BELLUNO"
* #050201.03 "OSPEDALE DI AGORDO"
* #050201.04 "OSPEDALE DI PIEVE DI CADORE"
* #050202.01 "OSPEDALE DI FELTRE 'S. MARIA DEL PRATO'"
* #050202.02 "OSPEDALE DI LAMON 'CASA CHARITAS'"
* #050203.01 "OSPEDALE `SAN BASSIANO` DI BASSANO D.G."
* #050203.02 "OSPEDALE DI ASIAGO"
* #050205.01 "OSPEDALE DI ARZIGNANO"
* #050205.02 "OSPEDALE  DI LONIGO"
* #050205.03 "OSPEDALE DI MONTECCHIO"
* #050205.04 "OSPEDALE DI VALDAGNO"
* #050206.01 "PRES. OSPED. VICENZA"
* #050206.02 "PRES. OSP.  NOVENTA VICENTINA"
* #050140.01 "ASSOCIAZIONE LA NS. FAMIGLIA IRCSS MEDEA"
* #050140.02 "ASSOCIAZIONE LA NS.FAMIGLIA IRCSS MEDEA"
* #050207.01 "OSPEDALE DI CONEGLIANO"
* #050207.02 "OSPEDALE DI VITTORIO VENETO"
* #050208.01 "OSPEDALE DI CASTELFRANCO VENETO"
* #050208.02 "OSPEDALE DI MONTEBELLUNA"
* #050209.01 "OSPEDALE CA' FONCELLO"
* #050209.02 "OSPEDALE DI ODERZO"
* #050210.01 "PRESIDIO OSPEDALIERO DI PORTOGRUARO"
* #050210.02 "PRESIDIO OSPEDALIERO DI SAN DONA` DI P."
* #050210.03 "PRESIDIO OSPEDALIERO DI JESOLO"
* #050212.01 "OSPEDALE CIVILE VENEZIA"
* #050212.02 "PUNTO PRIMO INTERVENTO LIDO"
* #050212.04 "OSPEDALE DELL'ANGELO"
* #050213.01 "OSPEDALE  DI DOLO"
* #050213.02 "OSPEDALE  DI MIRANO"
* #050213.03 "OSPEDALE DI NOALE"
* #050215.01 "PRESIDIO OSPEDALIERO DI CAMPOSAMPIERO"
* #050215.02 "PRESIDIO OSPEDALIERO DI CITTADELLA"
* #050216.01 "OSPEDALE SANT`ANTONIO"
* #050216.05 "OSP. IMMACOL. CONCEZ. DI PIOVE DI SACCO"
* #050217.03 "SEDE MONTAGNANA"
* #050217.04 "SEDE CONSELVE"
* #050217.05 "OSPEDALI RIUNITI PADOVA SUD"
* #050218.01 "P.O. DI ROVIGO"
* #050218.02 "P.O. DI TRECENTA"
* #050220.04 "PRESIDIO OSP. MARZANA"
* #050220.05 "POLO OSP. DELL'EST VERONESE"
* #050220.06 "PSICHIATRIA SEZIONE B.GO TRENTO - VERONA"
* #050221.01 "OSPEDALE PER ACUTI"
* #050221.03 "OSPEDALE S.BIAGIO BOVOLONE"
* #050222.01 "OSPEDALE CIVILE ORLANDI BUSSOLENGO"
* #050222.02 "OSPEDALE ISOLA DELLA SCALA"
* #050222.04 "OSPEDALE DI MALCESINE"
* #050222.05 "OSPEDALE MAGALINI - VILLAFRANCA DI VR"
* #050912.01 "OSPEDALE CIVILE MAGGIORE"
* #050912.02 "OSPEDALE POLICLINICO"
* #060043.01 "PO Gorizia e Monfalcone sede Gorizia"
* #060043.02 "PO Gorizia e Monfalcone sede Monfalcone"
* #060044.01 "PO Latisana e Palmanova sede Latisana"
* #060044.02 "PO Latisana e Palmanova sede Palmanova"
* #060045.01 "Sede di San Daniele"
* #060045.02 "Sede di Tolmezzo"
* #060045.03 "Sede di Gemona"
* #060047.01 "PRESIDIO OSPEDALIERO SMM - SEDE UDINE"
* #060047.02 "PRESIDIO OSPEDAL. SMM - SEDE CIVIDALE"
* #060042.01 "P.O. San Vito al T. sede di S. Vito al T"
* #060042.02 "P.O. San Vito al T. sede di Spilimbergo"
* #070001.01 "STABILIMENTO OSPEDALIERO DI IMPERIA"
* #070001.02 "STABILIMENTO OSPEDALIERO DI SANREMO"
* #070001.03 "STABILIMENTO OSPEDALIERO DI BORDIGHERA"
* #070211.01 "OSPEDALE SANTA MARIA MISERICORDIA"
* #070211.02 "OSPEDALE SANTA CORONA"
* #070212.03 "OSPEDALE SAN GIUSEPPE"
* #070212.04 "OSPEDALE SAN PAOLO"
* #070051.01 "EVANGELICO Internazionale CASTELLETTO"
* #070051.02 "EVANGELICO-SAN CARLO VOLTRI"
* #070301.01 "OSPEDALE LA COLLETTA ARENZANO"
* #070301.03 "OSPEDALE PADRE ANTERO MICONE SESTRI P."
* #070301.04 "OSPEDALE VILLA SCASSI"
* #070301.05 "OSPEDALE GALLINO"
* #070039.01 "OSP. RIUNITI LEONARDI E RIBOLI LAVAGNA"
* #070039.02 "OSPEDALE CIVILE DI SESTRI LEVANTE"
* #070039.05 "OSPEDALE N.S. DI MONTALLEGRO"
* #070058.01 "OSPEDALE SANT`ANDREA LA SPEZIA"
* #070058.03 "OSPEDALE SAN NICOLO` LEVANTO"
* #070058.04 "STABILIMENTO SAN BARTOLOMEO DI SARZANA"
* #080004.01 "OSPEDALE GUGLIELMO DA SALICETO PIACENZA"
* #080004.02 "OSPEDALE BOBBIO"
* #080004.03 "OSPEDALE CASTEL SAN GIOVANNI"
* #080004.04 "OSPEDALE BORGONOVO VAL TIDONE"
* #080004.05 "OSPEDALE FIORENZUOLA D'ARDA"
* #080004.06 "CENTRO DI RECUPERO E RIABILITAZIONE FUNZ"
* #080013.01 "OSPEDALE FIDENZA"
* #080013.03 "OSPEDALE 'S.MARIA' BORGO VAL DI TARO"
* #080021.01 "OSPEDALE CIVILE GUASTALLA"
* #080021.02 "OSPEDALE S.SEBASTIANO CORREGGIO"
* #080021.03 "OSPEDALE E.FRANCHINI MONTECCHIO"
* #080021.04 "OSPEDALE G.MAGATI SCANDIANO"
* #080021.05 "OSPEDALE S.ANNA CASTELNOVO NE MONTI"
* #080031.04 "OSPEDALE B. RAMAZZINI  CARPI"
* #080031.05 "OSPEDALE SANTA MARIA BIANCA  MIRANDOLA"
* #080031.08 "OSPEDALE VIGNOLA"
* #080031.09 "OSPEDALE PAVULLO NEL FRIGNANO"
* #080031.10 "NUOVO OSPEDALE CIVILE  S.AGOSTINO - ESTE"
* #080053.01 "OSPEDALE MAGGIORE C.A. PIZZARDI"
* #080053.02 "OSPEDALE BELLARIA"
* #080053.03 "OSPEDALE DOSSETTI  BAZZANO"
* #080053.04 "OSPEDALE A. COSTA PORRETTA TERME (ALTO"
* #080053.05 "OSPEDALE VERGATO"
* #080053.06 "OSPEDALE SIMIANI LOIANO"
* #080053.07 "OSPEDALE BENTIVOGLIO"
* #080053.08 "OSPEDALE BUDRIO"
* #080053.09 "OSPEDALE S.SALVATORE  S. GIOVANNI IN P"
* #080044.01 "OSPEDALE CIVILE NUOVO S.MARIA DELLA SCA"
* #080044.02 "OSPEDALE CASTEL SAN PIETRO TERME"
* #080068.03 "OSPEDALE DEL DELTA"
* #080068.04 "OSPEDALE MAZZOLANI VANDINI ARGENTA"
* #080068.06 "STABILIMENTO OSPEDALIERO SS. ANNUNZIATA"
* #080085.01 "OSPEDALE MORGAGNI-PIERANTONI FORLI'"
* #080085.03 "OSPEDALE NEFETTI SANTA SOFIA"
* #080091.01 "OSPEDALE MAURIZIO BUFALINI CESENA"
* #080091.02 "OSPEDALE GINESIO MARCONI CESENATICO"
* #080091.03 "OSPEDALE PIETRO ANGIOLONI BAGNO DI ROM"
* #080095.01 "OSPEDALE INFERMI RIMINI"
* #080095.02 "OSPEDALE FRANCHINI SANTARCANGELO DI RO"
* #080095.03 "OSPEDALE SACRA FAMIGLIA NOVAFELTRIA"
* #080100.01 "OSPEDALE CECCARINI RICCIONE"
* #080100.02 "OSPEDALE CERVESI CATTOLICA"
* #080903.01 "AZIENDA OSPEDALIERA DI REGGIO EMILIA-S."
* #080903.02 "AZIENDA OSPEDALIERA DI REGGIO EMILIA - I"
* #090606.01 "OSPEDALE SAN JACOPO"
* #090606.02 "OSPEDALE LORENZO PACINI"
* #090629.01 "OSPEDALE S.M.ANNUNZIATA"
* #090629.02 "OSPEDALE SERRISTORI"
* #090632.01 "SANTA MARIA NUOVA"
* #090632.02 "ISTITUTO ORTOPEDICO TOSCANO"
* #090632.03 "OSP. S. GIOVANNI DI DIO TORREGALLI"
* #090632.06 "OBLATE AZIENDA SANITARIA FIRENZE"
* #090642.02 "OSPEDALE S. GIUSEPPE"
* #090642.03 "OSPEDALE SAN PIETRO IGNEO"
* #090642.04 "OSPEDALE DEGLI INFERMI"
* #090601.01 "OSP. S. ANTONIO ABATE FIVIZZANO   (MS)"
* #090601.02 "OSP. CIV. S.ANTONIO  PONTREMOLI (MS)"
* #090602.01 "STABILIMENTO OSPEDALIERO DI CARRARA"
* #090602.03 "OSPEDALE  DELLE APUANE"
* #090603.01 "OSPEDALE SANTA CROCE"
* #090603.02 "OSPEDALE SAN FRANCESCO"
* #090610.01 "P.O. F. LOTTI STABILIMENTO DI PONTEDERA"
* #090610.02 "SPDC AZIENDALE ASL5"
* #090236.01 "CASA DI CURA POGGIO DEL SOLE"
* #090236.02 "CENTRO CHIRURGICO TOSCANO SRL"
* #090624.02 "OSPEDALE DI ORBETELLO"
* #090624.03 "OSPEDALE DI PITIGLIANO"
* #090907.01 "FONDAZIONE CNR-RT G. MONASTERIO"
* #090907.02 "OSPEDALE DEL CUORE G. PASQUINUCCI"
* #100801.01 "OSPEDALE DI CITTA` DI CASTELLO"
* #100801.02 "OSPEDALE DI UMBERTIDE"
* #100803.01 "STAB.OSPEDALIERO CASTIGLIONE DEL LAGO"
* #100803.02 "STAB.OSPEDALIERO CITTA`DELLA PIEVE"
* #100803.03 "C.O.R.I. - PASSIGNANO"
* #100803.04 "STAB. OSPEDALIERO ASSISI"
* #100803.07 "STAB. OSPEDALIERO MEDIA VALLE DEL TEVERE"
* #100805.01 "OSPEDALE CIVILE SAN MATTEO DEGLI INFERMI"
* #100805.02 "OSPEDALE CIVILE DI NORCIA"
* #100805.03 "OSPEDALE S.RITA CASCIA"
* #100807.01 "STABILIMENTO OSPEDALIERO DI NARNI"
* #100807.02 "STABILIMENTO OSPEDALIERO DI AMELIA"
* #100807.03 "DOMUS GRATIAE"
* #100809.01 "OSPEDALE SAN GIOVANNI BATTISTA FOLIGNO"
* #100809.02 "STABILIMENTO DI TREVI"
* #110001.01 "OSP S. MARIA DELLA MISERICORDIA - URBINO"
* #110001.02 "OSPEDALE SS DONNINO E CARLO - PERGOLA"
* #110001.03 "OSPEDALE CELLI - CAGLI"
* #110001.04 "OSPEDALE LANCIARINI - SASSOCORVARO"
* #110001.05 "OSPEDALE CIVILE - FOSSOMBRONE"
* #110002.01 "PRESIDIO OSPEDALIERO ZT 4 - SENIGALLIA"
* #110002.02 "OSPEDALE CARLO URBANI DI JESI"
* #110002.03 "OSP. SS. BENVENUTO E ROCCO - OSIMO"
* #110002.04 "OSPEDALE CIVILE 'E.PROFILI' - FABRIANO"
* #110002.05 "OSPEDALE SANTA CASA - LORETO"
* #110002.06 "OSPEDALE GENERALE DI ZONA - CINGOLI"
* #110003.01 "OSPEDALE GENERALE DI ZONA - CIVITANOVA"
* #110003.02 "OSPEDALE GENERALE PROVINCIALE - MACERATA"
* #110003.03 "OSPEDALE S.MARIA DELLA PIETA` - CAMERINO"
* #110003.04 "OSPEDALE B.EUSTACCHIO - S. SEVERINO M."
* #110003.05 "OSPEDALE DI TREIA"
* #110003.06 "OSPEDALE DI TOLENTINO"
* #110003.07 "OSPEDALE CIVILE SANTA LUCIA - RECANATI"
* #110003.08 "OSPEDALE S.SOLLECITO - MATELICA"
* #110004.01 "OSPEDALE DI FERMO"
* #110004.02 "OSPEDALE VITTORIO EMANUELE II - AMANDOLA"
* #110005.01 "MADONNA DEL SOCCORSO - S.BENEDETTO"
* #110005.02 "OSP. GEN."
* #110901.01 "OSPEDALE SAN SALVATORE - PESARO"
* #110901.02 "OSPEDALE SANTA CROCE - FANO"
* #110905.01 "PRESIDIO OSPEDALIERO UMBERTO I°"
* #110905.02 "PRESIDIO OSPEDALIERO G.M.LANCISI"
* #110905.03 "PRESIDIO OSPEDALIERO G.SALESI"
* #110921.01 "OSPEDALE INRCA - ANCONA"
* #110921.02 "OSPEDALE INRCA - FERMO"
* #120204.01 "ALFREDO FIORINI TERRACINA"
* #120204.02 "SAN GIOVANNI DI DIO FONDI"
* #120204.03 "REGINA ELENA PRIVERNO"
* #120026.01 "OSPEDALE SANTO SPIRITO"
* #120026.02 "VILLA BETANIA"
* #120285.01 "PRESIDIO SAN FILIPPO NERI"
* #120285.03 "PRESIDIO CASSIA SANT'ANDREA"
* #120285.05 "SALUS INFIRMORUM"
* #120066.01 "OSPEDALE S.EUGENIO"
* #120066.02 "OSPEDALE CTO.A.ALESINI"
* #120044.01 "OSPEDALE SAN GIUSEPPE ALBANO L."
* #120044.02 "OSPEDALE E. DE SANTIS GENZANO"
* #120904.01 "OSPEDALE PEDIATRICO BAMBINO GESU`"
* #120904.02 "OSPEDALE PEDIATRICO BAMBINO GESU`"
* #120904.03 "OSPEDALE PEDIATRICO BAMBINO GESU`"
* #120905.01 "POLICLINICO UNIVERSITARIO A. GEMELLI"
* #120905.02 "COMPLESSO INTEGRATO COLUMBUS (C.I.C.)"
* #120908.01 "IFO - ISTITUTO REGINA ELENA"
* #120908.02 "IFO - ISTITUTO SAN GALLICANO"
* #140002.01 "OSPEDALE S. TIMOTEO- TERMOLI"
* #140002.02 "OSPEDALE G. VIETRI- LARINO"
* #140003.01 "OSPEDALE VENEZIALE- ISERNIA"
* #140003.02 "OSPEDALE CARACCIOLO AGNONE"
* #140003.03 "OSPEDALE SS. ROSARIO - VENAFRO"
* #150150.01 "OSPEDALE S.ANGELO DEI LOMBARDI"
* #150150.02 "P.SP.RIABILITATIVO DON GNOCCHI"
* #150418.01 "PO SAN GIOVANNI BOSCO"
* #150418.02 "PO LORETO MARE"
* #150418.05 "PO ASCALESI"
* #150418.06 "PRESDIO SANITARIO INTERMEDIO NAPOLI EST"
* #150419.01 "PO SAN PAOLO"
* #150419.02 "PO DEI PELLEGRINI"
* #150419.03 "PO SAN GENNARO"
* #150419.04 "PO SMDP INCURABILI"
* #150419.06 "PO  Capilupi CAPRI"
* #150415.01 "P.O. MARESCA"
* #150415.02 "P.O.  BOSCOTRECASE"
* #150416.01 "S.  LEONARDO"
* #150416.02 "NUOVO GRAGNANO"
* #150417.01 "P.O. S. MARIA DELLA MISERICORDIA"
* #150417.02 "P.O. DE LUCA E ROSSANO"
* #150436.01 "OSPEDALI RIUNITI AREA NOLANA PLESSO NOLA"
* #150436.02 "OSPED RIUNITI AREA NOLANA PLESSO POLLENA"
* #150154.01 "P.O. UMBERTO I NOCERA INFERIORE"
* #150154.02 "P.O. TORTORA PAGANI"
* #150902.01 "OSPEDALE SANTOBONO"
* #150902.02 "Ospedale Pausilipon"
* #150902.03 "P.O. S.S. Annunziata"
* #150903.01 "Azienda Ospedaliera dei Colli -P Monaldi"
* #150903.02 "Azienda Ospedaliera dei Colli -P Cotugno"
* #150903.03 "Azienda Ospedaliera dei Colli -P  CTO"
* #150904.01 "A.O. OO.RR. SANGIOVANNI DI DIO E RUGGI"
* #150904.02 "OSPEDALE AMICO G. FUCITO"
* #150904.03 "P.O. G. DA PROCIDA"
* #150904.04 "P.O. S. M. DELL'OLMO"
* #160161.01 "OSPEDALE OSTUNI"
* #160161.02 "PLESSO DI FASANO - OSPEDALE OSTUNI"
* #160170.01 "OSPEDALE PERRINO BRINDISI"
* #160170.02 "OSPEDALE BRINDISI (PLESSO MESAGNE)"
* #160170.03 "OSP.BRINDISI(PLESSO S.PIETRO VERNOTICO)"
* #160170.04 "OSP.BRINDISI (PLESSO CEGLIE MESSAPICA)"
* #160172.01 "OSPEDALE SS ANNUNZIATA - TARANTO"
* #160172.03 "OSPEDALE MOSCATI - TARANTO/STATTE"
* #160174.01 "OSPEDALE ANDRIA"
* #160174.02 "OSPEDALE ANDRIA (PLESSO CANOSA)"
* #160178.01 "OSPEDALE BISCEGLIE"
* #160178.02 "OSPEDALE BISCEGLIE (PLESSO TRANI)"
* #160158.01 "OSPEDALE SAN PAOLO-BARI"
* #160158.03 "OSPEDALE SAN PAOLO (PLESSO MOLFETTA)"
* #160158.04 "OSPEDALE SAN PAOLO (PLESSO CORATO)"
* #160158.05 "OSPEDALE SAN PAOLO (PLESSO TERLIZZI)"
* #160169.01 "OSPEDALE DI VENERE - BARI"
* #160169.03 "PLESSO TRIGGIANO-OSPEDALE DI VENERE"
* #160163.01 "OSPEDALE SAN SEVERO"
* #160163.07 "OSPEDALE SAN SEVERO (PLESSO LUCERA)"
* #160171.01 "OSPEDALE LECCE 'V FAZZI'"
* #160171.02 "PLESSO DI SAN CESARIO - OSPEDALE LECCE"
* #160907.01 "CONSORZIALE POLICLINICO BARI"
* #160907.02 "OSPEDALE GIOVANNI XXIII"
* #170901.01 "Ospedale San Carlo di Potenza"
* #170901.02 "Osp S.Francesco di Paola di Pescopagano"
* #180010.01 "Ospedale Corigliano"
* #180010.02 "Ospedale  Rossano"
* #180012.01 "Ospedale  Cetraro"
* #180012.02 "Ospedale Paola"
* #180912.01 "P.O. ANNUNZIATA"
* #180912.02 "MARIANO SANTO"
* #180912.03 "SANTA BARBARA"
* #180913.01 "Ospedale Pugliese"
* #180913.02 "Ospedale De Lellis"
* #180915.01 "Presidio Ospedaliero Riuniti"
* #180915.02 "Presidio Ospedaliero E. Morelli"
* #190922.01 "OSPEDALE GARIBALDI - CENTRO"
* #190922.04 "NUOVO OSPEDALE GARIBALDI - NESIMA"
* #190923.01 "PRESIDIO OSPEDALIERO GASPARE RODOLICO"
* #190923.02 "PRESIDIO OSPEDALIERO VITTORIO EMANUELE"
* #190923.03 "PRESIDIO OSPEDALIERO S. BAMBINO"
* #190926.01 "P.O. Villa Sofia"
* #190926.02 "C.T.O. Centro Traumatologico Ortopedico"
* #190926.03 "P.O. V. Cervello"
* #190927.01 "Ospedale Civico"
* #190927.02 "Ospedale dei Bambini G. Di Cristina"
* #190960.01 "IRCCS Centro Neurolesi"
* #190960.02 "PRESIDIO OSPEDALIERO PIEMONTE"
* #200056.01 "KINETIKA SARDEGNA s.r.l."
* #200056.02 "KINETIKA SARDEGNA s.r.l."
* #200056.03 "KINETIKA SARDEGNA s.r.l."
* #200904.01 "P. O. SAN MICHELE"
* #200904.02 "P.O. A. BUSINCO"
* #200904.03 "P.O. MICROCITEMICO"
* #200905.01 "Stabilimento Cliniche di San Pietro"
* #200905.02 "Stabilimento SS. Annunziata"
* #200906.01 "San Giovanni di Dio"
* #200906.02 "Policlinico Monserrato"

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/conceptmapa/ConceptMap-statoCivile.fsh

Instance: ConceptMap-statoCivile
InstanceOf: ConceptMap
Usage: #definition
* version = "4.0.1"
* name = "HL7_ISTAT_StatoCivile"
* title = "Mapping fra VS HL7 e Tabella ISTAT Stato Civile"
* status = #active
* experimental = true
* date = "2012-06-13"
* publisher = "HL7 Italia"
* contact.name = "HL7 Italia"
* contact.telecom.system = #url
* contact.telecom.value = "http://hl7.it"
* description = "Mapping da Value 'statoCivile' a Tabella Istat Stato Civile."
* jurisdiction = urn:iso:std:iso:3166#IT
* purpose = "Esempio di mapping fra value set."
* sourceCanonical = Canonical(VsStatoCivile) 
* targetCanonical = Canonical(VsIstatStatoCivile) 
* group[0].source = "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
* group[=].target = Canonical(CsIstatStatoCivile)
* group[=].element[0].code = #S
* group[=].element[=].display = "Never Married"
* group[=].element[=].target.code = #1
* group[=].element[=].target.extension.url = "http://hl7.org/fhir/1.0/StructureDefinition/extension-ConceptMap.element.target.equivalence"
* group[=].element[=].target.extension.valueCode = #equivalent
* group[=].element[=].target.display = "Celibe/Nubile"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #M
* group[=].element[=].display = "Married"
* group[=].element[=].target.extension.url = "http://hl7.org/fhir/1.0/StructureDefinition/extension-ConceptMap.element.target.equivalence"
* group[=].element[=].target.extension.valueCode = #equivalent
* group[=].element[=].target.code = #2
* group[=].element[=].target.display = "Coniugato/a"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #D
* group[=].element[=].display = "Divorced"
* group[=].element[=].target.extension.url = "http://hl7.org/fhir/1.0/StructureDefinition/extension-ConceptMap.element.target.equivalence"
* group[=].element[=].target.extension.valueCode = #equivalent
* group[=].element[=].target.code = #4
* group[=].element[=].target.display = "Divorziato/a"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #W
* group[=].element[=].display = "Widowed"
* group[=].element[=].target.extension.url = "http://hl7.org/fhir/1.0/StructureDefinition/extension-ConceptMap.element.target.equivalence"
* group[=].element[=].target.extension.valueCode = #equivalent
* group[=].element[=].target.code = #3
* group[=].element[=].target.display = "Vedovo/a"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #A
* group[=].element[=].display = "Annulled"
* group[=].element[=].target.extension.url = "http://hl7.org/fhir/1.0/StructureDefinition/extension-ConceptMap.element.target.equivalence"
* group[=].element[=].target.extension.valueCode = #inexact
* group[=].element[=].target.code = #9
* group[=].element[=].target.display = "Non classificabile/ignoto/n.c"
* group[=].element[=].target.equivalence = #inexact
* group[=].element[=].target.comment = "Concetto non classificato nel target, quindi associato alla classe 9  'Non classificabile/ignoto/n.c'"
* group[=].element[+].code = #L
* group[=].element[=].display = "Legally Separated"
* group[=].element[=].target.extension.url = "http://hl7.org/fhir/1.0/StructureDefinition/extension-ConceptMap.element.target.equivalence"
* group[=].element[=].target.extension.valueCode = #inexact
* group[=].element[=].target.code = #9
* group[=].element[=].target.display = "Non classificabile/ignoto/n.c"
* group[=].element[=].target.equivalence = #inexact
* group[=].element[=].target.comment = "Concetto non classificato nel target, quindi associato alla classe 9  'Non classificabile/ignoto/n.c'"
* group[+].source = "http://terminology.hl7.org/CodeSystem/v3-NullFlavor"
* group[=].target = Canonical(CsIstatStatoCivile)
* group[=].element.code = #UNK
* group[=].element.display = "Unknown"
* group[=].element[=].target.extension.url = "http://hl7.org/fhir/1.0/StructureDefinition/extension-ConceptMap.element.target.equivalence"
* group[=].element[=].target.extension.valueCode = #equivalent
* group[=].element.target.code = #9
* group[=].element.target.display = "Non classificabile/ignoto/n.c"
* group[=].element.target.equivalence = #wider
* group[=].element.target.comment = "Il target comprende concetti come 'non classificabile' che corrspondono a nullFlavor tipo UNC e/o OTH"
* group[+].source = Canonical(CsIstatStatoCivile)
* group[=].target = Canonical(CsIstatStatoCivile)
* group[=].element[0].code = #6
* group[=].element[=].display = "Unito civilmente"
* group[=].element[=].target.extension.url = "http://hl7.org/fhir/1.0/StructureDefinition/extension-ConceptMap.element.target.equivalence"
* group[=].element[=].target.extension.valueCode = #equivalent
* group[=].element[=].target.code = #6
* group[=].element[=].target.display = "Unito civilmente"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #7
* group[=].element[=].display = "Stato libero a seguito di decesso della parte unita civilmente"
* group[=].element[=].target.extension.url = "http://hl7.org/fhir/1.0/StructureDefinition/extension-ConceptMap.element.target.equivalence"
* group[=].element[=].target.extension.valueCode = #equivalent
* group[=].element[=].target.code = #7
* group[=].element[=].target.display = "Stato libero a seguito di decesso della parte unita civilmente"
* group[=].element[=].target.equivalence = #equivalent
* group[=].element[+].code = #8
* group[=].element[=].display = "Stato libero a seguito di scioglimento dell'unione"
* group[=].element[=].target.extension.url = "http://hl7.org/fhir/1.0/StructureDefinition/extension-ConceptMap.element.target.equivalence"
* group[=].element[=].target.extension.valueCode = #equivalent
* group[=].element[=].target.code = #8
* group[=].element[=].target.display = "Stato libero a seguito di scioglimento dell'unione"
* group[=].element[=].target.equivalence = #equivalent

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/bundleEsempio.fsh

Instance: Bundle-Lab-Esempio
InstanceOf: bundle-it-lab
Title: "Bundle document - Referto di Medicina di Laboratorio"
Description: "Esempio di un Bundle rappresentante un FHIR document completo di Referto di Medicina di Laboratorio."
Usage: #example

* identifier.system = "urn:ietf:rfc:39861"
* identifier.value = "urn:uuid:bfcf00e2-e2bb-4a7d-adaa-3de9d419d27e"
* type = #document
* timestamp = "2023-02-25T14:30:00+01:00"
* entry[composition].fullUrl = "urn:uuid:2ae95a5c-9094-41a3-a437-ce6d34c55a54" 
* entry[composition].resource = Composition-Lab-Esempio
* entry[patient].fullUrl = "urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5" 
* entry[patient].resource = Paziente-SSN
* entry[diagnosticReport].fullUrl = "urn:uuid:56f19992-e73e-45b5-bbdd-6d9aeb60b15a" 
* entry[diagnosticReport].resource = DiagnosticReport-Lab-Esempio
* entry[encounter].fullUrl = "urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6" 
* entry[encounter].resource = Encounter-Lab-Esempio
* entry[specimen].fullUrl = "urn:uuid:168d4960-0a0b-43af-8025-180f0965f325" 
* entry[specimen].resource = Specimen-Lab-Esempio
* entry[observation][+].fullUrl = "urn:uuid:7e2f354b-de83-4472-bd07-1571cdb50fde" 
* entry[observation][=].resource = Observation-Lab-Esempio-Glucosio
// * entry[observation][+].fullUrl = "urn:uuid:5ea6e05a-e271-4ef9-bcc1-0bd10e55c90c" 
// * entry[observation][=].resource = Observation-Lab-Esempio-Cloruro
// * entry[observation][+].fullUrl = "urn:uuid:a8a27a81-4543-45a9-8859-fa17053d963e" 
// * entry[observation][=].resource = Observation-TimedTest-T3-Lab-Esempio
// * entry[observation][+].fullUrl = "urn:uuid:a7d1b3b0-9aee-4bc7-b0f2-46d441ba6244" 
// * entry[observation][=].resource = Observation-TimedTest-T0-Lab-Esempio
// * entry[observation][+].fullUrl = "urn:uuid:a7d1b3b0-9aee-4bc7-b0f2-46d441ba6245" 
// * entry[observation][=].resource = Observation-TimedTest-T1-Lab-Esempio
// * entry[observation][+].fullUrl = "urn:uuid:9474efca-8c8a-436d-a1a4-5706a1dd057a" 
// * entry[observation][=].resource = Observation-TimedTest-T2-Lab-Esempio
// * entry[observation][+].fullUrl = "urn:uuid:a7d1b3b0-9aee-4bc7-b0f2-46d441ba6246" 
// * entry[observation][=].resource = Observation-Lab-Esempio-Elettroforesi
* entry[serviceRequest].fullUrl = "urn:uuid:463ae6fe-60d4-4b38-84b3-1008e0925678" 
* entry[serviceRequest].resource = ServiceRequest-Lab-Esempio
* entry[practitionerRole].fullUrl = "urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c" 
* entry[practitionerRole].resource = PractitionerRole-Lab-Esempio
* entry[practitioner][+].fullUrl = "urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803d" 
* entry[practitioner][=].resource = Practitioner-Lab-Esempio
* entry[practitioner][+].fullUrl = "urn:uuid:134a0bb1-aa0a-46b9-aa1e-a5d0e379e77c" 
* entry[practitioner][=].resource = Infermiere-Lab-Esempio
* entry[organization][+].fullUrl = "urn:uuid:5fd3f1a6-b2c8-44cb-8237-0b5f0a81f2a8" 
* entry[organization][=].resource = Organization-Lab-Esempio
* entry[organization][+].fullUrl = "urn:uuid:ae0365ea-d8a1-45e0-a39d-f14fac4ccfe8" 
* entry[organization][=].resource = OrganizationOperatore-Lab-Esempio
// * entry[substance].fullUrl = "urn:uuid:168d4960-0a0b-43af-8025-180f0965f326" 
// * entry[substance].resource = Specimen-Additive-Substance-Lab-Esempio
* entry[location].fullUrl = "urn:uuid:f148e54a-2046-4534-b9e9-54e7e9632224" 
* entry[location].resource = Location-Lab-Esempio
* entry[device].fullUrl = "urn:uuid:168d4960-0a0b-43af-8025-180f0965f324" 
* entry[device].resource = Device-Lab-Esempio
* entry[media].fullUrl = "urn:uuid:059927b1-7e17-409e-ae60-68cc3c0b3aea" 
* entry[media].resource = Media-Lab-Esempio










---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/compositionEsempio.fsh

Instance: Composition-Lab-Esempio
InstanceOf: composition-it-lab
Usage: #example
Description: "Esempio di Composition: esempio di referto di laboratorio."
* id = "2ae95a5c-9094-41a3-a437-ce6d34c55a54"
* extension[dataEnterer].extension[dataEnterer].valueReference = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803d)
* extension[dataEnterer].extension[tempoCompilazione].valueDateTime = "2023-02-25T10:45:00+01:00"
* language = #it-IT
* identifier.use = #official
* identifier.value = "urn:uuid:10b545ea-725c-446d-9b95-8aeb444eddf3"
* identifier.assigner.display = "Regione Lazio"
* status = #final
* category[studyType] = $loinc#18723-7 "Hematology studies (set)"
* type = http://loinc.org#11502-2 "Laboratory report"
* type.text = "Referto di laboratorio"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)
* date = "2022-03-30T11:24:26+01:00"
* author[+] = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* title = "Referto di Laboratorio"
* confidentiality = #N
* attester[legalAuthenticator].mode = #legal
* attester[legalAuthenticator].time = "2023-02-25T12:45:00+01:00"
* attester[legalAuthenticator].party = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* custodian = Reference(urn:uuid:5fd3f1a6-b2c8-44cb-8237-0b5f0a81f2a8)
* section[lab-subsections].code = $loinc#26436-6  "Laboratory studies (set)"
* section[lab-subsections].title = "Laboratory studies (set)"
* section[lab-subsections].section[+].title = "Esame del sangue"
* section[lab-subsections].section[=].code = $loinc#18723-7 "Hematology studies (set)"
* section[lab-subsections].section[=].text.status = #generated
* section[lab-subsections].section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><ul><li><table id=\"nota1\"><thead><tr><th>Esame</th><th>Metodo utilizzato per l'esame</th><th>Materiale utilizzato per l'esame</th><th>Risultato dell'esame</th><th>Commenti e note</th><th>Unità di Misura</th><th>Range di Riferimento</th><th>Criteri per il range di riferimento</th><th>Interpretazione</th><th>Allegati multimediali</th></tr></thead><tbody><tr><td>Microalbumina massa/volume in urine</td><td/><td>Urine</td><td>20</td><td/><td>mg/L</td><td> 0 - 20 </td><td/><td>N</td><td/></tr></tbody></table></li></ul></div>"
* section[lab-subsections].section[=].entry = Reference(urn:uuid:7e2f354b-de83-4472-bd07-1571cdb50fde)

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/deviceEsempio.fsh

Instance: Device-Lab-Esempio
InstanceOf: DeviceRefertoLabIt
Usage: #example
Title: "Esempio di Device"
Description: "Esempio di device utilizzato per l'analisi dell'emocromo: Analizzatore per analisi del sangue"

* id = "168d4960-0a0b-43af-8025-180f0965f324"

* deviceName.name = "Analizzatore Automatico"
* deviceName.type = #other

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/diagnosticreport_micro.fsh

Instance: Bundle-Lab-Esempio-2
InstanceOf: Bundle
Title: "Microbiologia - DiagnosticReport - Observation - Specimen"
Description: "Esempio di un Report diagnostico per esame del sangue che mette in evidenza i risultati di microbiologia."
Usage: #example

* identifier.system = "urn:ietf:rfc:39861"
* identifier.value = "urn:uuid:bfcf00e2-3de9d419d27e"
* type = #transaction
* timestamp = "2023-02-25T14:30:00+01:00"
* entry[+].fullUrl = "urn:uuid:82c40e48-8ed5-43bd-a990-ae9b16d2f641" 
* entry[=].resource = DiagnosticReport-Lab-Esempio2
* entry[=].request.method = #POST
* entry[=].request.url = "/DiagnosticReport"
* entry[+].fullUrl = "urn:uuid:20e0ab9e-2ce4-431a-adfb-6a727bd49355"
* entry[=].resource = Inline-Observation-org-id2-susc-2
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:25c5aa73-387d-4b80-9245-8e1adfa470f5"
* entry[=].resource = Inline-Observation-gs-org2
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:297c84f2-28d6-41b5-a270-6f563ef0fdfc"
* entry[=].resource = Inline-Observation-aerobic-culture
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl =  "urn:uuid:2b209d21-dc7b-4267-a089-d3b61667945a"
* entry[=].resource = Inline-Observation-wbc
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl =  "urn:uuid:333b62b2-47b0-43b5-9745-abec1f0c4656"
* entry[=].resource = Inline-Observation-gram-stain
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl =  "urn:uuid:31747c3c-0a07-4937-9529-378140609e96"
* entry[=].resource = Inline-Observation-org-id1-susc-panel
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:424aba49-cc38-4207-b9a0-c484062ecb26"
* entry[=].resource = Inline-Observation-org-id2
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl =  "urn:uuid:4bc004e5-e77b-46c7-b0d5-3dfa127b48b4"
* entry[=].resource = Inline-Observation-org-id2-susc-panel
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:4edf70e9-b332-4804-a3bf-5d1c14e9f892"
* entry[=].resource = Inline-Observation-org-id2-susc-1
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl =  "urn:uuid:516884c4-8a1f-4e5b-8492-a7dd190f1fb0"
* entry[=].resource = Inline-Observation-gs-org1
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:60f23552-dfb9-4142-95a2-911a41180c78"
* entry[=].resource = Inline-Observation-org-id1-susc-3
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:652d16a5-91d9-40fb-9c5c-3950683e5d9f"
* entry[=].resource = Inline-Observation-org-id1-susc-1
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:6b103ad8-1870-45bb-884a-86675ad404f1"
* entry[=].resource = Inline-Observation-org-id1
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:848e01c5-1565-4708-92c3-304418a43a40"
* entry[=].resource = Inline-Observation-org-id1-susc-4
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:9018b020-6e21-4afa-9131-5832132092c1"
* entry[=].resource = Inline-Observation-gs-org1-quant
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:a99f7742-c77d-4650-918b-1e9a6e28cefd"
* entry[=].resource = Inline-Observation-org-id1-growth
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:f2831756-1436-11ee-be56-0242ac120002"
* entry[=].resource = Inline-Observation-org-id2-susc-4
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:ccf32a29-d9f5-435a-9c67-e59d7104adff"
* entry[=].resource = Inline-Observation-org-id1-susc-2
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:e271a348-4f54-4667-86ed-d9ecfb7430f6"
* entry[=].resource = Inline-Observation-anaerobic-culture
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:ed8a917b-2e94-4aa9-b824-5dceee2deb90"
* entry[=].resource = Inline-Observation-org-id2-growth
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:f2e48d96-a153-46b3-a15b-58b5aa761853"
* entry[=].resource = Inline-Observation-gs-org2-quant
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:20e0ab9e-2ce4-431b-adfb-6a727bd49355"
* entry[=].resource = Inline-Observation-org-id2-susc-3
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:2ae95a5c-9094-41a3-a437-ce6d34c55a54" 
* entry[=].resource = Composition-Lab-Esempio
* entry[=].request.method = #POST
* entry[=].request.url = "/Composition"
* entry[+].fullUrl = "urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5" 
* entry[=].resource = Paziente-SSN
* entry[=].request.method = #POST
* entry[=].request.url = "/Patient"
* entry[+].fullUrl = "urn:uuid:168d4960-0a0b-43af-8025-180f0965f324" 
* entry[=].resource = Device-Lab-Esempio
* entry[=].request.method = #POST
* entry[=].request.url = "/Device"
* entry[+].fullUrl = "urn:uuid:134a0bb1-aa0a-46b9-aa1e-a5d0e379e77c" 
* entry[=].resource = Infermiere-Lab-Esempio
* entry[=].request.method = #POST
* entry[=].request.url = "/Practitioner"
* entry[+].fullUrl = "urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6" 
* entry[=].resource = Encounter-Lab-Esempio
* entry[=].request.method = #POST
* entry[=].request.url = "/Encounter"
* entry[+].fullUrl = "urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c" 
* entry[=].resource = PractitionerRole-Lab-Esempio
* entry[=].request.method = #POST
* entry[=].request.url = "/PractitionerRole"
* entry[+].fullUrl = "urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803d" 
* entry[=].resource = Practitioner-Lab-Esempio
* entry[=].request.method = #POST
* entry[=].request.url = "/Practitioner"
* entry[+].fullUrl = "urn:uuid:463ae6fe-60d4-4b38-84b3-1008e0925678" 
* entry[=].resource = ServiceRequest-Lab-Esempio
* entry[=].request.method = #POST
* entry[=].request.url = "/ServiceRequest"
* entry[+].fullUrl = "urn:uuid:5fd3f1a6-b2c8-44cb-8237-0b5f0a81f2a8" 
* entry[=].resource = Organization-Lab-Esempio
* entry[=].request.method = #POST
* entry[=].request.url = "/Organization"
* entry[+].fullUrl = "urn:uuid:7e2f354b-de83-4472-bd07-1571cdb50fde" 
* entry[=].resource = Observation-Lab-Esempio-Glucosio
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:ae0365ea-d8a1-45e0-a39d-f14fac4ccfe8" 
* entry[=].resource = OrganizationOperatore-Lab-Esempio
* entry[=].request.method = #POST
* entry[=].request.url = "/Organization"
* entry[+].fullUrl = "urn:uuid:f148e54a-2046-4534-b9e9-54e7e9632224" 
* entry[=].resource = Location-Lab-Esempio
* entry[=].request.method = #POST
* entry[=].request.url = "/Location"
* entry[+].fullUrl = "urn:uuid:168d4960-0a0b-43af-8025-180f0965f325" 
* entry[=].resource = Specimen-Lab-Esempio
* entry[=].request.method = #POST
* entry[=].request.url = "/Specimen"
* entry[+].fullUrl = "urn:uuid:168d4960-0a0b-43af-8025-180f0965f326" 
* entry[=].resource = Specimen-Additive-Substance-Lab-Esempio
* entry[=].request.method = #POST
* entry[=].request.url = "/Specimen"
// * entry[+].fullUrl = "urn:uuid:a8a27a81-4543-45a9-8859-fa17053d963e" 
// * entry[=].resource = Observation-TimedTest-T3-Lab-Esempio
// * entry[=].request.method = #POST
// * entry[=].request.url = "/Observation"

// * entry[+].fullUrl = "urn:uuid:9474efca-8c8a-436d-a1a4-5706a1dd057a" 
// * entry[=].resource = Observation-TimedTest-T2-Lab-Esempio
// * entry[=].request.method = #POST
// * entry[=].request.url = "/Observation"

* entry[+].fullUrl = "urn:uuid:a7d1b3b0-9aee-4bc7-b0f2-46d441ba6246" 
* entry[=].resource = Observation-Lab-Esempio-Elettroforesi
* entry[=].request.method = #POST
* entry[=].request.url = "/Observation"
* entry[+].fullUrl = "urn:uuid:059927b1-7e17-409e-ae60-68cc3c0b3aea" 
* entry[=].resource = Media-Lab-Esempio
* entry[=].request.method = #POST
* entry[=].request.url = "/Media"


Instance: DiagnosticReport-Lab-Esempio2
InstanceOf: diagnosticreport-it-lab
Usage: #inline
Description: "Esempio di un report diagnostico: report di un esame del sangue che mette in evidenza i risultati di microbiologia, con i collegamenti tra risultato - germe - antibiotico."
Title: "DiagnosticReport - Esempio Laboratorio"
* id = "82c40e48-8ed5-43bd-a990-ae9b16d2f641"
* status = #final
// * category = http://terminology.hl7.org/CodeSystem/v2-0074#LAB "Laboratory"
* category = $loinc#26436-6	"Laboratory studies (set)"
* extension[DiagnosticReportCompositionR5].valueReference = Reference(urn:uuid:2ae95a5c-9094-41a3-a437-ce6d34c55a54)
* identifier.use = #official
* identifier.value = "urn:uuid:10b545ea-725c-446d-9b95-8aeb444eddf3"
* code.text = "Coltura e suscettibilità batterica aerobica e anaerobica"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* specimen = Reference(urn:uuid:168d4960-0a0b-43af-8025-180f0965f325)
* result[0] = Reference(Inline-Observation-gram-stain)
* result[+] = Reference(Inline-Observation-aerobic-culture)
* result[+] = Reference(Inline-Observation-anaerobic-culture)

Instance: Inline-Observation-gram-stain
InstanceOf: ObservationGroupingRefertoLabIt
Usage: #inline
Description: "Esempio di Observation: rilevazione della colorazione di gram su campione di sangue."
* id = "333b62b2-47b0-43b5-9745-abec1f0c4656"
* status = #final
* category[laboratory] = $observation-category#laboratory
// * code = $loinc#664-3 
// * code.text = "Gram Stain"
* code = $loinc#26436-6
* code.text = "Esami di laboratorio"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer  = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* hasMember[+] = Reference(Inline-Observation-wbc) 
* hasMember[+] = Reference(Inline-Observation-gs-org1) 
* hasMember[+] = Reference(Inline-Observation-gs-org2) 
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-wbc
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "2b209d21-dc7b-4267-a089-d3b61667945a"
* status = #final
* category[laboratory] = $observation-category#laboratory
* code = $loinc#72163-9 
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueCodeableConcept = $sct#2667000 "Absent"
* valueCodeableConcept.text = "Non osservati."
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-gs-org1
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "516884c4-8a1f-4e5b-8492-a7dd190f1fb0"
* status = #final
* category[laboratory] = $observation-category#laboratory
* code = $loinc#664-3 
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
// * valueCodeableConcept = $sct#70003006 "Gram-positive cocci in clusters"
* valueCodeableConcept = $sct#8745002 "Gram-positive bacterium"
* hasMember[+] = Reference(Inline-Observation-gs-org1-quant) 
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-gs-org1-quant
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "9018b020-6e21-4afa-9131-5832132092c1"
* status = #final
* category[laboratory] = $observation-category#laboratory
* code.text = "Quantità osservata"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueCodeableConcept = $sct#441614007 "Present + out of +++"
* valueCodeableConcept.text = "+"
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-gs-org2
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "25c5aa73-387d-4b80-9245-8e1adfa470f5"
* status = #final
* category[laboratory] = $observation-category#laboratory
* code = $loinc#664-3 
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueCodeableConcept = $sct#87172008 "Gram-negative rods"

* hasMember[+] = Reference(Inline-Observation-gs-org2-quant) // Inline-Observation-gs-org2-quant
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-gs-org2-quant
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "f2e48d96-a153-46b3-a15b-58b5aa761853"
* status = #final
* category[laboratory] = $observation-category#laboratory

* code.text = "Quantità osservata"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueCodeableConcept = $sct#441517005 "Present ++ out of +++"
* valueCodeableConcept.text = "++"
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-aerobic-culture
InstanceOf: ObservationGroupingRefertoLabIt
Usage: #inline
Description: "Esempio di Observation: rilevazione coltura aerobica da campione di sangue."
* id = "297c84f2-28d6-41b5-a270-6f563ef0fdfc"
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#18718-7
 //"Coltura Aerobica"
* code.text = "Studi di marcatori cellulari"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* hasMember[+] = Reference(urn:uuid:6b103ad8-1870-45bb-884a-86675ad404f1) // Inline-Observation-org-id1
* hasMember[+] = Reference(urn:uuid:424aba49-cc38-4207-b9a0-c484062ecb26) // Inline-Observation-org-id2
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-org-id1
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "6b103ad8-1870-45bb-884a-86675ad404f1"
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#634-6 //"Coltura aerobi Microbiologia Presenza o Identità (episodio)"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueCodeableConcept = $sct#3092008 "Staphylococcus aureus"
* hasMember[+] = Reference(urn:uuid:a99f7742-c77d-4650-918b-1e9a6e28cefd) // Inline-Observation-org-id1-growth
* hasMember[+] = Reference(urn:uuid:31747c3c-0a07-4937-9529-378140609e96) // Inline-Observation-org-id1-susc-panel
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-org-id1-growth
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "a99f7742-c77d-4650-918b-1e9a6e28cefd"
* status = #final
* category[laboratory] = $observation-category#laboratory

* code.text = "Crescita di microrganismi"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueCodeableConcept = $sct#441517005 "Present ++ out of +++"
* valueCodeableConcept.text = "++"
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-org-id1-susc-panel
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "31747c3c-0a07-4937-9529-378140609e96"
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#29576-6 //"Suscettibilità batterica, panel"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* hasMember[+] = Reference(urn:uuid:652d16a5-91d9-40fb-9c5c-3950683e5d9f)
* hasMember[+] = Reference(urn:uuid:ccf32a29-d9f5-435a-9c67-e59d7104adff)
* hasMember[+] = Reference(urn:uuid:60f23552-dfb9-4142-95a2-911a41180c78)
* hasMember[+] = Reference(urn:uuid:848e01c5-1565-4708-92c3-304418a43a40)

* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-org-id1-susc-1
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "652d16a5-91d9-40fb-9c5c-3950683e5d9f"
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#18900-1 //"Cefalotina [Suscettibilità agli antibiotici]"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueQuantity.value = 2
* valueQuantity.comparator = #<=
* valueQuantity.code = #ug/mL
* valueQuantity.system = $ucum
* interpretation = $obs-interpretation#S "Susceptible"
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-org-id1-susc-2
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "ccf32a29-d9f5-435a-9c67-e59d7104adff"
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#20629-2 //"Levofloxacina [Suscettibilità agli antibiotici]"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueQuantity.value = 4
* valueQuantity.comparator = #>
* valueQuantity.code = #ug/mL
* valueQuantity.system = $ucum
* interpretation = $obs-interpretation#R "Resistant"
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-org-id1-susc-3
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "60f23552-dfb9-4142-95a2-911a41180c78"
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#18961-3 //"Oxacillina [Suscettibilità agli antibiotici]"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueQuantity.value = 0.5
* valueQuantity.code = #ug/mL
* valueQuantity.system = $ucum
* interpretation = $obs-interpretation#S "Susceptible"
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-org-id1-susc-4
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "848e01c5-1565-4708-92c3-304418a43a40"
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#19000-9 //"Vancomicina [Suscettibilità agli antibiotici]"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueQuantity.value = 1
* valueQuantity.comparator = #<=
* valueQuantity.code = #ug/mL
* valueQuantity.system = $ucum
* interpretation = $obs-interpretation#S "Susceptible"
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-org-id2
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "424aba49-cc38-4207-b9a0-c484062ecb26"
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#634-6 //"Coltura aerobi Microbiologia Presenza o Identità (episodio)"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueCodeableConcept = $sct#40886007 "Klebsiella oxytoca"
* hasMember[+] = Reference(urn:uuid:ed8a917b-2e94-4aa9-b824-5dceee2deb90) // Inline-Observation-org-id2-growth
* hasMember[+] = Reference(urn:uuid:4bc004e5-e77b-46c7-b0d5-3dfa127b48b4) // Inline-Observation-org-id2-susc-panel
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-org-id2-growth
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "ed8a917b-2e94-4aa9-b824-5dceee2deb90"
* status = #final
* category[laboratory] = $observation-category#laboratory

* code.text = "Crescita di microrganismi"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueCodeableConcept = $sct#263866000 "Scanty growth"
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-org-id2-susc-panel
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "4bc004e5-e77b-46c7-b0d5-3dfa127b48b4"
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#29576-6 //"Suscettibilità batterica, panel"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* hasMember[+] = Reference(urn:uuid:4edf70e9-b332-4804-a3bf-5d1c14e9f892)
* hasMember[+] = Reference(urn:uuid:20e0ab9e-2ce4-431a-adfb-6a727bd49355)
* hasMember[+] = Reference(urn:uuid:20e0ab9e-2ce4-431b-adfb-6a727bd49355)
* hasMember[+] = Reference(urn:uuid:f2831756-1436-11ee-be56-0242ac120002)
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-org-id2-susc-1
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "4edf70e9-b332-4804-a3bf-5d1c14e9f892"
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#18864-9 //"Ampicillina [Suscettibilità agli antibiotici]"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueQuantity.value = 16
* valueQuantity.comparator = #>
* valueQuantity.code = #ug/mL
* valueQuantity.system = $ucum
* interpretation = $obs-interpretation#R "Resistant"
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-org-id2-susc-2
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "20e0ab9e-2ce4-431a-adfb-6a727bd49355"
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#18906-8 //"Ciprofloxacina [Suscettibilità agli antibiotici]"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueQuantity.value = 0.5
* valueQuantity.comparator = #<=
* valueQuantity.code = #ug/mL
* valueQuantity.system = $ucum
* interpretation = $obs-interpretation#S "Susceptible"
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-org-id2-susc-3
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "20e0ab9e-2ce4-431b-adfb-6a727bd49355"
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#18928-2 //"Gentamicina [Suscettibilità agli antibiotici]"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueQuantity.value = 8
* valueQuantity.comparator = #>
* valueQuantity.code = #ug/mL
* valueQuantity.system = $ucum
* interpretation = $obs-interpretation#R "Resistant"
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-org-id2-susc-4
InstanceOf: ObservationRefertoLabIt
Usage: #inline
* id = "f2831756-1436-11ee-be56-0242ac120002"
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#18932-4 //"Imipenem [Suscettibilità agli antibiotici]"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueQuantity.value = 1
* valueQuantity.comparator = #<=
* valueQuantity.code = #ug/mL
* valueQuantity.system = $ucum
* interpretation = $obs-interpretation#S "Susceptible"
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

Instance: Inline-Observation-anaerobic-culture
InstanceOf: ObservationRefertoLabIt
Usage: #inline
Description: "Esempio di Observation: rilevazione coltura anaerobi da campione di sangue."
* id = "e271a348-4f54-4667-86ed-d9ecfb7430f6"
* status = #final
* category[laboratory] = $observation-category#laboratory

* code = $loinc#635-3 //"Batteri , identificato: Coltura anaerobica"
* code.text = "Coltura Anaerobi"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueCodeableConcept = $sct#264868006 "No growth"
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/diagnosticReport.fsh

Instance: DiagnosticReport-Lab-Esempio
InstanceOf: diagnosticreport-it-lab
Usage: #example
Description: "Esempio di un report diagnostico: report prodotto durante l'incontro."

* id = "56f19992-e73e-45b5-bbdd-6d9aeb60b15a"
* extension[DiagnosticReportCompositionR5].valueReference = Reference(urn:uuid:2ae95a5c-9094-41a3-a437-ce6d34c55a54)
* identifier.use = #official
* identifier.value = "urn:uuid:10b545ea-725c-446d-9b95-8aeb444eddf3"
* basedOn = Reference(urn:uuid:463ae6fe-60d4-4b38-84b3-1008e0925678)
* status = #final
// * category = $diagnosticreport-category#HM "Hematology"
* category[studyType] = $loinc#18723-7 "Hematology studies (set)"
* code = $loinc#11502-2 "Laboratory report"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)
* result[+] = Reference(urn:uuid:7e2f354b-de83-4472-bd07-1571cdb50fde)
//* result[+] = Reference(urn:uuid:5ea6e05a-e271-4ef9-bcc1-0bd10e55c90c)
* effectivePeriod.start = "2023-02-25T11:45:00+01:00"
* effectivePeriod.end = "2023-02-25T12:45:00+01:00"
* issued = "2023-02-25T12:45:00+01:00"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* specimen = Reference(urn:uuid:168d4960-0a0b-43af-8025-180f0965f325)
* conclusionCode = $sct#166921001 "Blood glucose normal"

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/encounterEsempio.fsh

Instance: Encounter-Lab-Esempio
InstanceOf: EncounterRefertoLabIt
Description: "Esempio di incontro: informazioni di base per descrivere un incontro ambulatoriale pianificato."
Usage: #example

* id = "7b06368c-7089-4f66-acc8-29e1fcbd31f6"
* status = #finished

* class.system = "http://terminology.hl7.org/CodeSystem/v3-ActCode"
* class.code = #AMB
* class.display = "ambulatory"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)


* period.start = "2023-02-25T11:45:00+01:00"
* period.end = "2023-02-25T12:45:00+01:00"


* location.location = Reference(urn:uuid:f148e54a-2046-4534-b9e9-54e7e9632224)

* basedOn = Reference(urn:uuid:463ae6fe-60d4-4b38-84b3-1008e0925678)

* participant.individual = Reference(urn:uuid:134a0bb1-aa0a-46b9-aa1e-a5d0e379e77c)
* participant.type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#SPRF "Secondary performer"


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/infermiereEsempio.fsh

Instance: Infermiere-Lab-Esempio
InstanceOf: PractitionerRefertoLabIt
Usage: #example
Description: "Esempio di un professionista sanitario: infermiere."

* id = "134a0bb1-aa0a-46b9-aa1e-a5d0e379e77c"
* identifier.use = #official
* identifier.system = "http://hl7.it/sid/codiceFiscale" 
* identifier.value = "NFRPRV80A01H501G"

* name.use = #usual
* name.family = "Infermiere"
* name.given = "Prova"

* telecom[0].system = #email
* telecom[0].value = "infermiere.prova@policlinico.it"
* telecom[0].use = #work
* telecom[0].rank = 1

* telecom[1].system = #phone
* telecom[1].value = "331793553"
* telecom[1].use = #work
* telecom[1].rank = 2

* gender = #male







---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/locationEsempio.fsh

Instance: Location-Lab-Esempio
InstanceOf: location-it-lab
Usage: #example
Description: "Esempio di location: struttura ospedaliera di Roma."

* id = "f148e54a-2046-4534-b9e9-54e7e9632224"
* identifier.use = #usual

* identifier.value = "123456"

* status = #active

* name = "Policlinico di Roma"

* alias[0] = "Poliambulatorio di Roma"

* alias[1] = "Ospedale universitario di Roma"

* type.coding.system = "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
* type.coding.code = #HOSP
* type.coding.display = "Hospital"


* telecom[0].system = #phone
* telecom[0].value = "33324567"

* address[+].city = #36023
* address[=].type = #physical
* address[=].postalCode = "00144"
* address[=].city = "ROMA"

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/mediaEsempio.fsh

Instance: Media-Lab-Esempio
InstanceOf: MediaRefertoLabIt
Usage: #example
Description: "Esempio di file multimediale: Valori di albumina ottenuti con elettroforesi."
* id = "059927b1-7e17-409e-ae60-68cc3c0b3aea"
* status = #completed
* type = $media-type#image "Image"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* createdDateTime = "2023-06-21"
* issued = "2023-06-21T14:56:18Z"
* operator = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* height = 128
* width = 128
* content.id = "a1"
* content.contentType = #image/png
* content.data = "iVBORw0KGgoAAAANSUhEUgAAADwAAAAiCAYAAAADILqZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAA9dSURBVGhDfZjpb6RXlYdPra7FZZfbW29uZ6OTEDNJCHT3QBAIjSbsEAkk0EiDNF/n3xmJL6P5jJBGiEUMgoEgMiGEhJCQtDtJp9u92t1ea9+XeX7nvm/ZbSKOfd+7n3v2e24larXaq4nE+NJ4NLYACRvHTVMjEZqCI80HpuL11H8zfHRA4H0Gjo8fAy3xBf4PTdowop08tkldP+gYMKY9CRDFx41Go63kBLFXQqxan4/CcgSiLRPQASoILghMZLJogj8uERxpfhQcPd2ZFbAnVkY4RweGvoO66nsNs5O5w8OS4zFiE0QLJ+UYgRJMXLwflbA2rqIOICL1F7EdxiBypOOc0Kg4HKu1QdPhw76o74VRx6M6HqdNrTGL5kYDs+FQ5z8IyVCxMJpxhiaERMCYj/BxqYZmGFOtA4ajcFAkPwet15/vGUOA2aAnwibToaavNRoXLt/nHETjEB7jCCVUGvMifD7v/NpwMLZOY2BdyuG+ABHDh+DzYjBGpgKW0GbckUdF7Qic6OhgrfOxUEGEcMBsZ2Td5gCmozUUxztZKWFoTkyGtiAJlbITCURC0zzydVB7AtAdW2Eyk7RkOrB3dImPhAH8lwMGvZEN+yAcjGzQHzmhMo0RUhMBInbAnKQ+5NRgXuAIKLw4Cxpz4gN+zaeyScvk0xCSgOCgcWdikAAneDm3LwtgPOARjsCkzu42h9auDqzXHVtjr2vNSj/MiT5Krz1yzTpt0C5NPyAQmol6vfLqeJzwKK2FYkiRMJEMVCZTcdQOEW/Q1xgbWaM9Iqy23Wd2bIWZjPW7I0tlYEhCoxTLGZgJWmrVutaq9qy0kLfGfgfmhlaaz9vOnZpNFTLWYH5vu2FrF85amg0J9vS6AzvYadncYtGur29bo961h84v2M9+um4nl0v2/Ocfttp+25ZOz9jLv/3Q6o2eXfzMqr36fzesPJuzb/3LmiXgQWofDYdbMFyDYbskH5RUWrWhpdCAmOlBfGEm7ZIV49lCyiWYRlPJVNK13u8P7T9/8CdHePHiir322m174sklGOvY7m7T/umF8/bu21u2tDxt6x/u2bvvbdsLX3jU3vjzHdfyhU+v2C9+86E9ujpn9WbXbm3V7TtffcLeu7JtmWzaZsp5+90fb9pnWbe/VbP9Ssee++Rp++/fXrNSPmOfemrZ3njnnn3+wor96g83bQAfn3v2tP3+zU0rQucP/uPrlslJQ7KE4VZauguX0dguv3XffvSjy3bqZMn6mO3G7Yo9f+Gcvf7WJhpK2KefOW2vvH7bVpBmaTprt+/W7BkOfOfmARpJ2In5gl25VbEUhFhvYHsHbVtHKz/5/YatwLBcYx8NbN6rW5U6jY8dIJjuYOiCyyDEYi5tzXrP1m8c+JnPfHzZLazd6duJubxlMylbRTiXEGqetW76WkD9yKmSNVt9W2OukE35eSlp1/lTzVeJB300PLRf/vSq/fo3121pcdpOlHNWrXbtyScW7c8w3OkO7Sna0tAcpjI/V3DCP/f8Q1aG+amptC2dKWFeHUtPpawMcfKheqNjL/3vNVuG4bMIqg2jZx+Zsw5MyUWmT+SsgslOz+Usl5NLDLGqrG1tVKwDk/Psk8kvnC5ZGbMWb5lswqrbbSwxaQOCwMG9hi2uzNqwg39T5mC8jSAVLBdXS5NkZTSSScMwOC6NkPL+ZsvufHBgRRjS4jq+cfrRE7bLgQpgK4/P++GF6Sn8cmjVvZatPrkAsXmPjO4GTXwYgjKFJH1iAbd/i0AjN6jtttyP58/M4CY9D0Tl5SLBZmhpRVW0Ib/P5FN2cLfuwTFXylrlfsPmYHxmsQDDCUsmRlbb6TjDihfNShfB5Tm773GhiPDqnCXNn/pY2QXrJg3DCk1A+OaKGVs4NWOzCwUroeFF2nnGFs/O2jIS1Pwc2pc2tObkStny05ivUhoQiuAU2lUUljkq6KjOYnoiTvNpTFLzeYRWmEGw+FwPMxxAqLQnoYm+Eu4xu1D088vzRT87KEq0hhgjgWWwrEJpygWWZU0Oa1MM0pm5YlYbnLYYImXz5ZQ0m4sECS0UkmmYlsM7cWhd0tTcFFdLHsTSbBpfMaQeycxxS6LhTg4DCY+4EgACgWmt0bU3xG9d+D6n9YfXmATQJ0JrXbfN9aMrkiUCv4fZO6LIhKtoU2skuE6j67eNxrX/KGj/Axoeckiz0sbPutYgGu7jGx0ShepOg9K0dn1g927s295Ww+cP7tfd58ZDGOQ+7HNIu9bBRPsciglxv4pxESZNtvDbCm7Q1TquF5l3rzOkZg9jvbbGO86c5puMy5W6+LJMNViAk+pMe14Abs1rneJDHbq0trbfsgZ+LOH6+ujjiYeLmU4HH9gi4h5sN+3+Zs02bx0QMbu28f6Ol6GiKciUcOxzX27erFhbfuPSHPqhaks7I7+HqSFKAlBCI8I6arOuCbMqWaxFpiuL6jHfxrd1Tou6BQNiSLXuY09+2CvG3S8BuUiRvRksTdanttxI12bsu4KYcUb5in38MMflf+pc2U4sFW2esvLovJVmp2yRa2oOn5IpLxABZ0kWFD3PPjTn0Xmb62t3s465KpPKuJm7yUornswE88sxV8Q9dB1JQ/pLYu5aL7OWP2pNcAklQgRA1k4JJ7U0LwGI3hSMqsTrhE9+LBxiNgetWeKJhBOD+OeYCPBDzUkjKikIGUG0NpTw3zIMa14HqIhQl6L8D0zyTWlBLiF/8nVsEOMVEhBpUwRrjcZUu59RGtzXXSxFJl/FFCUgzXeYa+OXO1x/dczTg16amAE06bewPvdh9ssdhD/4PSaNaTe4VicQvRUjkw5F18ybf7xlV6/s2JXL9+2NP922bTT3yssbnqpt3qja78iK1t+5b+tvbdnLL12zg722XxkyS/ljDYY7LRjH/+oHLTf1GsTJVLdxg5skFHUIkZkqTQyBLA5qEEQt0uSLYkSdoIRAo9ZohZh3i6XOoGnVsgaZuPxcrliFlkPQYmc4RE1hlmnNEqWL+IK010JTSv+0wqMrxLh/UDKYS1FXBW1Fxg4M6QqZXyrhj1k3rSylj9Q3ru/bfe7Scw+fsE+Q9sldephmB23ILHP4na6RItdUmWtPKeU2gXIXBcxiWefXlsmVS7hI0KAo0nrh1/miK3AT6MxxVT72iZP2GFngA4DwgoYBMZXHh5fxUfnrQw/P2YWL57z/7HNn7OlnzzCet7W1k3aGO3n1kRO29vRpT+/effOuvf/Xe36wrjFJWe6g66GJIN68fM8+uLZHwsJVhntofpOc+Q6pqZKb68xvEQBDPk9QpLyFha1/uOta1HrhlqkPsBj3bRSi0sRSNkln61W5RYjSOlcK077jAMMyoKBjOb0SDjFeQMt5HF9jaaSm4CRpKnhkKAouyriypIOPPL5kq4/Nu/k2I3OVnyrAyA/38K9dfDi8xhTNh7bFlabUtIbpv//ejt3mdpCv3ri661fXBoK4Qb2LZazz+Li9cRCuS9xDUT6Y+ciq2s+eHdJTucC9u9Uwzxke4CLlO8gIQktMh2AlgjyoQGgHQkWk6haHiSExo3u0SzBpIFXtU8SW6ekB0GRdDxwKXJ1Wz6+LVeaXcBX5n2dcCG4T4u7iY7oBvvTimn2KnPy11+/Yj3/1gV2HOdGooPc28eK/fvyu/Q+vo7d5Ab3066u2Syy4h1a3blX99XQFYW0xdg2L+At5vwKeNOx+Dp7Ab1CsLqtoSHnsyN+kCjCKlgdE1w6MVWhLerpDazCpO1Kmo8ipe7lCUlJnXi+jn//yA7t8edtuXNu3q9zd5dm8/dv3n7OvfePJIFCEKYE2IaolwfQhDitKQOBNtHkHC9lDa19BAP/Mc/PSZ1bs3//1Ofv2Nz9ud7CAqyQ+FdYo35c1thB+HUVUCFKvYAl/wFru4/9iL3wmFYCpxw3x7CYIMz0Q+JUAgwo6uhrUl7ZFrCTf5/knSWqPBKSycbtm7yD5mxDW52rwH9E4QTnzVCHrQdHvVNxjjQB2ntfTFMEvk1OOnbAL/3DSvkhQO8+D5csvPmXf/O7TNrdUsKcunLGTq2UrEC9mwSUXO8kTcYmcYZkX1LO84s7xILlInPnHZ07ZLMKQhmVNup+DhoNSwy8elrw0VvZ0t2XX/7rtLw9pWgHlYyC4hllp8xkIuXN1j9dOiZw0wT3YsXmI/uEP37Zp/Pl73/8kjPdhjgSC+xKFktCnrHXA25fXkp6N+kUlnUtaYw/rQGCHz7ex9dv4PfOZfLjjBUmevLpmZIg1noQDInVpAYYSBCQtYbJDyqsXlnIDJTtT02n//Uw4C2UQMC4Yjf13aSVbkgKE8MpQaqaANU1dhvEpSVWvI3xQwWyOV5KYK3L16NeIAVzdwqTvUgq6lnjuzZTJplibhfE0T8XS4pTly7yqOGPsP4CR1ellwxq/V0kKPBpPkVUVFSiVGpL8QKv4Tok36hJnz52adoEmWaNXkaxGL6Ssbgf2+29mHpxD4iNwDfPxR129UX+VGddwu4qP7hBokJYyFwWp8nKBhwOPbcxI78xuo89bVxE7ZGJZpKlHv66IWRgLDPgRfogCFGc76Ae3oX7fim4LpZ16O4dUgy8Uikjtj1HE1KrSb2NaIEYnIPSyAClRaLSfqtsKGs6V0Dy0u0pHo/CbFjP+A4D/ItlhAwTptaPD01N6RQkhEs1AEC8jRx4dIOJjSQqxTgtJeyByAlrEv8iImdE2b4apB8DHJ1wHiF9KPkyZCPb4Zs7qdzU45nESsrgHGEayrmFPxCOkMRIhVVO4VZw5Gn5U1I/b/tG/5r0PRHhiiLt6QntnMhA14n2HDccnkAVo3AV+FGIcAtph+eFgYJiR0XiLrUH1WiPEMkEvusMijanvgUWMaC6qA2NhDf+h1pjaHwU+HxV1o7bDZCKUeDyeFjjuiFk/l9n4tMm6ow3HRdOlG8C3+6Z43pFSVEfFN2ndsb7Au+FzOHdUA+pTwpmaD0VrJ9ZyOByWq0ErxjfRVZiM5r0ZjYXiy6M9XmKIXkqCQNqRSTcb/Udrwv7w93fh+LT68ZjjCLXQRke4pTgESg+Lj4VKjWCQASbDRyDQ9lEzh/vi5qEuIiJ0ns/F+x0XI1HfqwfmKLF02BnTGx+geTXj7qRBTQj05gRdjC+GSfvo4CEEnwbife52autziHuyDnCGPWB5V6AlAULLMXjLIWoK52Q0Poh6gkd978SrZMIaiMshyNxjQaly3N6ISgxsi4mf1MfxTdaHzWGGto+P7f8BM6U6tXvnS+YAAAAASUVORK5CYII="
* content.creation = "2023-06-21"




---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/observation_elettroforesi.fsh

Instance: Observation-Lab-Esempio-Elettroforesi
InstanceOf: ObservationRefertoLabIt
Usage: #example
Description: "Esempio di un'osservazione: rilevazione di albumina da elettroforesi."

* id = "a7d1b3b0-9aee-4bc7-b0f2-46d441ba6246"
* category[laboratory] = $observation-category#laboratory

* status = #final

* code = $loinc#2862-1 "Albumin [Mass/volume] in Serum or Plasma by Electrophoresis"
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* valueQuantity.unit = "g/dL"
* valueQuantity.code = #g/dL
* valueQuantity.system = $ucum
* valueQuantity.value = 5

* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* derivedFrom = Reference(urn:uuid:059927b1-7e17-409e-ae60-68cc3c0b3aea)

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/observationChloride.fsh

Instance: Observation-Lab-Esempio-Cloruro
InstanceOf: ObservationRefertoLabIt
Usage: #example
Description: "Esempio di un'osservazione: rilevazione di cloruro nel sangue."


* category[laboratory] = $observation-category#laboratory
* id = "5ea6e05a-e271-4ef9-bcc1-0bd10e55c90c"
* status = #final

* code = $loinc#100745-9 "Chloride [Moles/volume] in Mixed venous blood"
* effectiveDateTime = "2023-05-01"
* valueQuantity.unit = "meq/L"
* valueQuantity.code = #meq/L
* valueQuantity.system = $ucum
* valueQuantity.value = 100

* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* specimen = Reference (urn:uuid:168d4960-0a0b-43af-8025-180f0965f325)






---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/ObservationEsempio.fsh

Instance: Observation-Lab-Esempio-Glucosio
InstanceOf: ObservationDocRefertoLabIt
Usage: #example
Description: "Esempio di un'osservazione: rilevazione di glucosio nel sangue."

* id = "7e2f354b-de83-4472-bd07-1571cdb50fde"
* category[laboratory] = $observation-category#laboratory

* status = #final
* effectiveDateTime = "2022-10-25T13:35:00+01:00"

* code = $loinc#18723-7 "Hematology studies (set)"

* valueQuantity.unit = "mg/dL"
* valueQuantity.code = #mg/dL
* valueQuantity.system = $ucum
* valueQuantity.value = 70

* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)

* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* specimen = Reference (urn:uuid:168d4960-0a0b-43af-8025-180f0965f325)
* device = Reference (urn:uuid:168d4960-0a0b-43af-8025-180f0965f324)
* derivedFrom = Reference(urn:uuid:059927b1-7e17-409e-ae60-68cc3c0b3aea)

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/observationGroupEsempio.fsh

Instance: Observation-Lab-Esempio-Group
InstanceOf: ObservationGroupingRefertoLabIt
Usage: #example
Description: "Esempio di contenitore per Battery Test: rilevazione di glucosio nel sangue."


* category[laboratory] = $observation-category#laboratory

* status = #final
* code = $loinc#18723-7

* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)

* hasMember[+] = Reference(urn:uuid:7e2f354b-de83-4472-bd07-1571cdb50fde)
//* hasMember[+] = Reference(urn:uuid:5ea6e05a-e271-4ef9-bcc1-0bd10e55c90c)

* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* specimen = Reference (urn:uuid:168d4960-0a0b-43af-8025-180f0965f325)
* derivedFrom = Reference(urn:uuid:059927b1-7e17-409e-ae60-68cc3c0b3aea)

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/observationTimedTest-T0-Esempio.fsh

Instance: Observation-TimedTest-T0-Lab-Esempio
InstanceOf: ObservationRefertoLabIt
Usage: #example
Description: "Esempio di un'osservazione: rilevazione di insulina nel sangue a digiuno, dopo 30 minuti, dopo 60 minuti, dopo 90 minuti e dopo 120 minuti."

* id = "a7d1b3b0-9aee-4bc7-b0f2-46d441ba6244"
* category[laboratory] = $observation-category#laboratory
* status = #final
* code = $loinc#20448-7 "Insulin [Units/volume] in Serum or Plasma"

* valueQuantity.unit = "u[IU]/mL"
* valueQuantity.code = #u[IU]/mL
* valueQuantity.system = $ucum
* valueQuantity.value = 20

* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
//* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)

Instance: Observation-TimedTest-T1-Lab-Esempio
InstanceOf: ObservationRefertoLabIt
Usage: #example
Description: "Esempio di un'osservazione: rilevazione di insulina nel sangue dopo 30 minuti."

* id = "a7d1b3b0-9aee-4bc7-b0f2-46d441ba6245"
* category[laboratory] = $observation-category#laboratory

* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* status = #final

* code = $loinc#20448-7   "Insulin [Units/volume] in Serum or Plasma"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueQuantity.unit = "u[IU]/mL"
* valueQuantity.code = #u[IU]/mL
* valueQuantity.system = $ucum
* valueQuantity.value = 120

* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
//* extension.valueReference = Reference(urn:uuid:a7d1b3b0-9aee-4bc7-b0f2-46d441ba6244)
//* extension.url = $sequelTo
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)

Instance: Observation-TimedTest-T2-Lab-Esempio
InstanceOf: ObservationRefertoLabIt
Usage: #example
Description: "Esempio di un'osservazione: rilevazione di insulina nel sangue dopo 60 minuti."

* id = "9474efca-8c8a-436d-a1a4-5706a1dd057a"
* category[laboratory] = $observation-category#laboratory
* status = #final
* effectiveDateTime = "2022-10-25T13:35:00+01:00"
* code.coding.system = "http://loinc.org"
* code.coding.code = #20448-7 	
* code.coding.display = "Insulin [Units/volume] in Serum or Plasma"
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)
* valueQuantity.unit = "u[IU]/mL"
* valueQuantity.code = #u[IU]/mL
* valueQuantity.system = $ucum
* valueQuantity.value = 87

* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
//* extension.valueReference = Reference(urn:uuid:a7d1b3b0-9aee-4bc7-b0f2-46d441ba6245)
//* extension.url = $sequelTo
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)


Instance: Observation-TimedTest-T3-Lab-Esempio
InstanceOf: ObservationRefertoLabIt
Usage: #example
Description: "Esempio di un'osservazione: rilevazione di insulina nel sangue dopo 90 minuti."

* id = "a8a27a81-4543-45a9-8859-fa17053d963e"
* category[laboratory] = $observation-category#laboratory
* effectiveDateTime = "2022-10-25T13:35:00+01:00"

* status = #final

* code.coding.system = "http://loinc.org"
* code.coding.code = #20448-7 	
* code.coding.display = "Insulin [Units/volume] in Serum or Plasma"

* valueQuantity.unit = "u[IU]/mL"
* valueQuantity.code = #u[IU]/mL
* valueQuantity.system = $ucum
* valueQuantity.value = 70

* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
//* extension.valueReference = Reference(urn:uuid:9474efca-8c8a-436d-a1a4-5706a1dd057a)
//* extension.url = $sequelTo
* encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)
* performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)

// Instance: Observation-TimedTest-T4-Lab-Esempio
// InstanceOf: ObservationRefertoLabIt
// Usage: #example
// Description: "Esempio di un'osservazione: rilevazione di insulina nel sangue dopo 120 minuti."

// * category[laboratory] = $observation-category#laboratory
// * effectiveDateTime = "2022-10-25T13:35:00+01:00"

// * status = #final

// * code.coding.system = "http://loinc.org"
// * code.coding.code = #20448-7 	
// * code.coding.display = "Insulin [Units/volume] in Serum or Plasma"

// * valueQuantity.unit = "u[IU]/mL"
// * valueQuantity.code = #u[IU]/mL
// * valueQuantity.system = $ucum
// * valueQuantity.value = 35

// * subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)
// * extension.valueReference = Reference(urn:uuid:a8a27a81-4543-45a9-8859-fa17053d963e)
// * extension.url = $sequelTo
// * encounter = Reference(urn:uuid:7b06368c-7089-4f66-acc8-29e1fcbd31f6)
// * performer = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803c)

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/organizationEsempio.fsh

Instance: Organization-Lab-Esempio
InstanceOf: OrganizationRefertoLabIt
Usage: #example
Description: "Esempio di un'organizzazione: Azienda Sanitaria Locale."

* id = "5fd3f1a6-b2c8-44cb-8237-0b5f0a81f2a8"
* identifier[0].system = "http://hl7.it/sid/fls"
* identifier[0].value = "120201"

* identifier[1].system = "http://hl7.it/sid/vda/asl" 
* identifier[1].value = "201"

* active = true

* type =  $tipoEntita#asl "Azienda Sanitaria Locale"
* name = "Azienda Sanitara Locale Roma 1"

* contact.telecom.system = #phone
* contact.telecom.value = "06 123456"


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/OrganizationOperatoreEsempio.fsh

Instance: OrganizationOperatore-Lab-Esempio
InstanceOf: OrganizationOperatoreSanitarioRefertoLabIt
Usage: #example
Title: "Esempio di risorsa Organization che descrive le informazioni dell' operatore sanitario/socio sanitario"
Description: "Esempio di Organization: Azienda di Assistenza del paziente"

* id = "ae0365ea-d8a1-45e0-a39d-f14fac4ccfe8"
* identifier[asl].system = "http://hl7.it/sid/fls"
* identifier[asl].value = "020101"




* active = true
* type = $it-tipoEntita#asl "Azienda Sanitaria Locale"
* name = "AZIENDA U.S.L. VALLE D'AOSTA"
* telecom[0].system = #phone
* telecom[=].value = "(0165) 5431"
* telecom[+].system = #fax
* telecom[=].value = "(0165) 544587"
* telecom[+].system = #email
* telecom[=].value = "protocollo@pec.ausl.vda.it"
* telecom[+].system = #url
* telecom[=].value = "http://www.ausl.vda.it"
* address.line = "VIA GUIDO REY 1"
* address.city = "AOSTA"
* address.city.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-SC-coding"
* address.city.extension.valueCoding = $istat-unitaAmministrativeTerritoriali#007003 "AOSTA"
* address.district = "AO"
* address.state = "VALLE D'AOSTA"
* address.state.extension.url = "http://hl7.org/fhir/StructureDefinition/iso21090-SC-coding"
* address.state.extension.valueCoding = $minsan-regione#020 "VALLE D'AOSTA"
* address.postalCode = "11100"
* address.country = "IT"

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/patrictionerRoleEsempio.fsh

Instance: PractitionerRole-Lab-Esempio
InstanceOf: PractitionerRoleRefertoLabIt
Usage: #example
Description: "Esempio di un PractitionerRole: medico in ematologia clinica presso il policlinico."

* id = "dc5842a1-83b6-43c7-b063-75ae989b803c"
* identifier.use = #official
* identifier.system = "http://esempio_policlinico.it/codiceEmatologo"
* identifier.value = "12345"

* active = true


* practitioner = Reference(urn:uuid:dc5842a1-83b6-43c7-b063-75ae989b803d)


* organization = Reference(urn:uuid:5fd3f1a6-b2c8-44cb-8237-0b5f0a81f2a8)

* code.coding.system = "urn:oid:2.16.840.1.113883.2.9.6.2.7"
* code.coding.code = #2211
* code.coding.display = "Generalist Medical Practitioners"

* specialty.coding.system = "http://snomed.info/sct"
* specialty.coding.code = #394803006
* specialty.coding.display = "Clinical hematology"


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/PazienteSSN.fsh

Instance: Paziente-SSN
InstanceOf: PatientRefertoLabIt
Usage: #example
Description: "Esempio di un paziente: soggetto iscritto al Sistema Sanitario Nazionale (SSN) con rappresentazione strutturata dell'attributo birthPlace."

* id = "8472931c-fbd0-437b-9ed1-4f66472c78b5"

* extension[luogoNascita].valueAddress.line[+].extension[odonimo].valueString = "Via della Vittoria"
* extension[luogoNascita].valueAddress.line[=].extension[houseNumber].valueString = "1"
* extension[luogoNascita].valueAddress.line[=] = "Via della Vittoria, 1"
* extension[luogoNascita].valueAddress.city = "Milano"
* extension[luogoNascita].valueAddress.postalCode = "20100"
* extension[luogoNascita].valueAddress.country = "IT"
* extension[professione].valueCodeableConcept = $CS_ProfessioniIstat#1.1.3 "Dirigenti della magistratura"
* extension[titoloStudio].valueCodeableConcept = $CS_TitoloStudioIstat#40205013 "Giuridico economico aziendale"

* identifier
  * system = "http://hl7.it/sid/codiceFiscale"
  * value = "RSSMRA71E01F205E" 
  * extension[certificazioneId].extension[when].valueDateTime = "2022-05-01"

* extension[luogoNascitaCodeable].valueCodeableConcept = $istat-stati#100 "Italia"


* name.family = "Rossi"
* name.given = "Maria"

* telecom[0].system = #phone
* telecom[0].value = "3331245678"

* telecom[1].system = #email
* telecom[1].value = "maria.rossi@mail.com"

* birthDate = "1971-05-01"

* gender = #female

* address.city = "Milano"
* address.country = "IT"
* address.postalCode = "20100"
* address.line = "Via della Libertà, 52"
* address.use = #home
* address.extension[residenza].valueBoolean = true
* address.line.extension[dugCode].valueCodeableConcept  = $istat-DUG-CS#67 "via"

* contact[0].name.family = "Rossi"
* contact[0].name.given = "Luigi"
* contact[1].name.family = "Bianchi"
* contact[1].name.given = "Maria"
* contact[0].relationship.coding.code = #C
* contact[0].relationship.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0131"
* contact[0].relationship.coding.display = "Emergency Contact"
* contact[1].relationship.coding.code = #C
* contact[1].relationship.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0131"
* contact[1].relationship.coding.display = "Emergency Contact"
* contact[0].telecom.system = #phone
* contact[0].telecom.value = "3312345567"
* contact[1].telecom.system = #phone
* contact[1].telecom.value = "3311234598"
* generalPractitioner[aziendaAssistenza] = Reference(urn:uuid:ae0365ea-d8a1-45e0-a39d-f14fac4ccfe8)







---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/practitionerEsempio.fsh

Instance: Practitioner-Lab-Esempio
InstanceOf: PractitionerRefertoLabIt
Usage: #example
Description: "Esempio di un professionista sanitario: medico."

* id = "dc5842a1-83b6-43c7-b063-75ae989b803d"

* identifier.use = #official
* identifier.system = "http://hl7.it/sid/codiceFiscale" 
* identifier.value = "MDCPRV80A01H501G"

* name.use = #usual
* name.family = "Medico"
* name.given = "Prova"

* telecom[0].system = #email
* telecom[0].value = "medico.prova@policlinico.it"
* telecom[0].use = #work
* telecom[0].rank = 1

* telecom[1].system = #phone
* telecom[1].value = "331793423"
* telecom[1].use = #work
* telecom[1].rank = 2

* gender = #male


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/practitionerRoleMMGEsempio.fsh

Instance: PractitionerRoleMMG-Lab-Esempio
InstanceOf: practitionerrole-MMGPLS-it-lab
Usage: #example
Description: "Esempio di un PractitionerRole: medico di medicina generale."

* id = "dc5842a1-83b6-43c7-b063-75ae989b803k"
// * identifier.use = #official
// * identifier.system = "http://esempio_policlinico.it/codiceEmatologo"
// * identifier.value = "12345"
* identifier.use = #official
* identifier.system = "http://hl7.it/sid/codiceFiscale" 
* identifier.value = "MDCPRV80A01H501G"


* active = true

* organization = Reference(urn:uuid:5fd3f1a6-b2c8-44cb-8237-0b5f0a81f2a8)

* code.coding.system = "http://hl7.it/fhir/lab-report/CodeSystem/it-V3RoleCode"
* code.coding.code = #MMG
* code.coding.display = "medico di medicina generale"


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/serviceRequestEsempio.fsh

Instance: ServiceRequest-Lab-Esempio
InstanceOf: ServiceRequestRefertoLabIt
Usage: #example
Description: "Esempio di richiesta: prestazione richiesta facente parte di un'autorizzazione simultanea per esami di laboratorio."

* id = "463ae6fe-60d4-4b38-84b3-1008e0925678"

* identifier.value = "12345"
* identifier.period.start = "2023-03-15"
* identifier.period.end = "2023-04-15"

* status = #completed
* intent = #order

* requisition.value = "1300A4000000248"

* authoredOn = "2023-03-15"

* category.coding.system = $sct
* category.coding.code = #108252007
* category.coding.display = "Laboratory procedure"
* code.coding.system = $sct
* code.coding.code = #5357009
* code.coding.display = "Leukocyte poor blood preparation"
* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5) //$patient-url




* priority = #routine

* reasonCode.coding = $sct#4307007 "Pregestational diabetes mellitus AND/OR impaired glucose tolerance, modified White class F"

* specimen = Reference(urn:uuid:168d4960-0a0b-43af-8025-180f0965f325)


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/Specimen.fsh

Instance: Specimen-Lab-Esempio
InstanceOf: SpecimenRefertoLabIt
Usage: #example
Title: "EsempioCampione"
Description: "Esempio di campione: sangue prelevato dall'avambraccio del paziente."

* id = "168d4960-0a0b-43af-8025-180f0965f325"
//* type = $v3-SpecimenType#BLD "Whole blood"
* type.coding.system = $v3-SpecimenType
* type.coding.code = #BLD
* type.coding.display = "Whole blood"

* subject = Reference(urn:uuid:8472931c-fbd0-437b-9ed1-4f66472c78b5)

* collection.bodySite = $sct#7311008 "Anterior surface of arm"
* container.type = $sct#706052002 "Evacuated blood collection tube"
//* container.additiveReference = Reference(urn:uuid:168d4960-0a0b-43af-8025-180f0965f326)

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/examples/specimenAdditiveSubstanceEsempio.fsh

Instance: Specimen-Additive-Substance-Lab-Esempio
InstanceOf: SpecimenAdditiveSubstanceRefertoLabIt
Usage: #example
Title: "Esempio di Sostanza Additiva"
Description: "Esempio di campione: sangue prelevato dall'avambraccio del paziente."

* id = "168d4960-0a0b-43af-8025-180f0965f326"
* status = #active
* code.coding.code = #6910009
* code.coding.system = "http://snomed.info/sct"
* code.coding.display = "Sodium fluoride (substance)"


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/extensions/data-enterer-ext.fsh

Extension:   ExtDataEnterer
Id:          composition-dataenterer-it
Title:       "DataEnterer"
Description: "Persona o dispositivo che trasforma un testo dettato nel documento FHIR."
//-------------------------------------------------------------------------------------------
* ^url = "http://hl7.it/fhir/StructureDefinition/composition-dataenterer-it"
* ^context.type = #element
* ^context.expression = "Composition"
* extension contains
    dataEnterer 1..1 and
    $ext-dataEnterer-time named tempoCompilazione 0..1
* extension[dataEnterer] only Extension
* extension[dataEnterer] ^short = "Informazioni sulla persona e sull'organizzazione che ha inserito i dati."
* extension[dataEnterer].valueReference 1..
* extension[dataEnterer].valueReference only Reference(PractitionerRefertoLabIt or PractitionerRoleRefertoLabIt or Device)
* extension[dataEnterer].valueReference ^short = "Compilatore dei dati presenti in Composition."
* extension[tempoCompilazione] ^short = "Data e ora di compilazione dei dati."
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/extensions/ext-dataEnterer-time.fsh

Extension:   ExtDataEntererTIME
Id:          dataEnterer-time
Title:       "TempoCompilazione"
Description: "Riferimento temporale."
//------------------------------------------------------------------------------------------- 
* ^url = "http://hl7.it/fhir/StructureDefinition/dataEnterer-time"
* ^context.type = #element
* ^context.expression = "Composition.extension"
* value[x] only dateTime 
* valueDateTime ^short = "Data e ora di compilazione."

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/extensions/ext-patient-codeableBirth.fsh

Extension: ExtCodeableBirthPlace
Id: patient-codeableBirthPlace
Title: "Codice comune e/o stato di nascita"
Description: "Codice comune e/o stato di nascita."
* ^context.type = #element
* ^context.expression = "Patient"
* ^url = "http://hl7.it/fhir/StructureDefinition/patient-codeableBirthPlace"
* value[x] only CodeableConcept

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/extensions/ext-professione-patient.fsh

Extension: ExtProfessionePaziente
Id: patient-occupation-it
Title: "Professione del paziente"
Description: "Estensione per gestire la professione del paziente come CodeableConcept."
* ^version = "0.1.0"
* ^date = "2020-06-30T18:23:29+02:00"
* ^publisher = "HL7 Italia"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.it"
* ^jurisdiction = urn:iso:std:iso:3166#IT
* ^url = "http://hl7.it/fhir/StructureDefinition/patient-occupation-it"
* ^context.type = #element
* ^context.expression = "Patient"
* value[x] only CodeableConcept
* valueCodeableConcept 0..1
* valueCodeableConcept from $istat-professione (example)

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/extensions/ext-qualification-patient.fsh

Alias: $istat-titoloStudio = http://hl7.it/fhir/lab-report/ValueSet/istat-titoloStudio

Extension: ExtTitoloStudioPaziente
Id: patient-qualification-it
Title: "Titolo di Studio del paziente"
Description: "Estensione per gestire il Titolo di studio del paziente come CodeableConcept."
* ^version = "0.1.1"
* ^publisher = "HL7 Italia"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.it"
* ^jurisdiction = urn:iso:std:iso:3166#IT
* . ^short = "Titolo di Studio del paziente"
* . ^definition = "Estensione per gestire il Titolo di studio del paziente come CodeableConcept."
* ^url = "http://hl7.it/fhir/StructureDefinition/patient-qualification-it"
* ^context.type = #element
* ^context.expression = "Patient"
* value[x] only CodeableConcept
* valueCodeableConcept 0..1
* valueCodeableConcept from $istat-titoloStudio (example)

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/extensions/Extcertificazione.fsh

Extension: ExtRecordCertification
Id: recordCertification
Title: "Certificazione"
Description: "Estensione usata per indicare che l'informazione associata è stata certificata (od autocertificata) da una certa entità (persona, organizzazione).  L'estensione è caratterizzata da: (a) una data di certificazione o da una periodo di validità (b) un codice od un riferimento al certificatore."
* ^context[0].type = #element
* ^context[=].expression = "Address"
* ^context[+].type = #element
* ^context[=].expression = "Patient"
* ^context[+].type = #element
* ^context[=].expression = "Patient.identifier"
* . ^short = "Certificazione del record"
* . ^definition = "Identifica che un certo record paziente, o codice fiscale od indirizzo di residenza è stato certificato da una specifica entità (e.g. MEF)."
* ^url = "http://hl7.it/fhir/StructureDefinition/recordCertification"
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains
    when 0..1 and
    who 0..1 and
    rank 0..*
* extension[when] ^short = "Data/Periodo  di certificazione"
* extension[when].value[x] only dateTime or Period
* extension[who] ^short = "Entità Certificante"
* extension[who].value[x] only CodeableConcept or Reference
* extension[who].value[x] from 	VsTipoCertificatore (extensible)
* extension[rank].value[x] only decimal

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/extensions/ExtDug.fsh

Extension: ExtDug
Id: address-dug
Title: "DUG (Denominazione Urbanistica Generica)"
Description: "Denominazione Urbanistica Ufficiale."
* ^context.type = #element
* ^context.expression = "Address.line"
* ^url = "http://hl7.it/fhir/StructureDefinition/address-dug"
* value[x] only CodeableConcept
* value[x] from istat-dug (extensible)


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/extensions/OfficialAddress.fsh

Extension: OfficialAddress
Id: address-official
Title: "IndirizzoUfficiale"
Description: "Definizione dell'indirizzo inteso come indirizzo 'ufficiale' di quella persona. Il significato di indirizzo 'ufficiale' dipende dal Paese. Questa estensione consente di specificare se questo indirizzo è o non è l'indirizzo ufficiale, oppure di indicare che si tratta dell'indirizzo ufficiale di quel Paese."

* ^context.type = #element
* ^context.expression = "Address"
* . ^short = "Official Address"
* . ^definition = "This extension allows to specify if this address is or it is not the official address, or to indicate that this is the official address for that country (true assumed)."

* value[x] 1..1
* value[x] only boolean or CodeableConcept

Extension: BirthPlaceIta
Parent: $patient-birthPlace
Id: birth-place-ita
Title: "Address Birth Place"
Description: "Definizione dell'indirizzo base per la descrizione del luogo di nascita."
* value[x] only AddressItBase

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/models/lab-author.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-author.fsh
// -------------------------------------------------------------------------------				
Logical: Autore				
Id: Autore				
Title: "A.1.5 - Autore"				
Description:  """Autore (da chi è stato redatto il referto sui risultati di laboratorio o un sottoinsieme dei risultati)."""				
* identificativo 0..1 Identifier "A.1.5.1 Identificativo dell'autore" """Numero per l'identificazione dell'operatore sanitario o del dispositivo autore. Un identificatore interno assegnato da un'istituzione erogatrice di assistenza sanitaria o (preferibilmente) un identificativo nazionale dell'operatore sanitario come il numero di licenza o di registrazione. - Sistema: """				
* nome 0..* HumanName "A.1.5.2 Nome dell'autore" """Nome della persona o del dispositivo. - Sistema: """				
* organizzazione 0..* Organization "A.1.5.3 Organizzazione dell'autore" """Informazioni sull'organizzazione dell'operatore sanitario. - Sistema: """		 		
//--- END				
//--- END				
//--- END				
//--- END				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
// -------------------------------------------------------------------------------				
//  Map to FHIR R4				
// -------------------------------------------------------------------------------				
Mapping: eHNLabAuthor2Fhir				
Id: fhir				
Title: "eHN Lab Author model to FHIR R4 Map"				
Source: Autore				
Target: "hl7.org/fhir/r4"				
				
* -> "Composition.author.resolve()"				
* identificativo -> "Composition.author.resolve().ofType(PractictionerRole).practictioner.resolve().identifier"				
* identificativo -> "Composition.author.resolve().ofType(PractictionerRole).identifier"				
* nome -> "Composition.author.resolve().ofType(PractictionerRole).practictioner.resolve().name"				
* organizzazione -> "Composition.author.resolve().ofType(PractictionerRole).organization.resolve()"				
// --END				
// --END				
// --END				
// --END				
				
				
				
				


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/models/lab-legalAuth.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-legalAuth.fsh
// -------------------------------------------------------------------------------				
Logical: Firmatario				
Id: Firmatario				
Title: "A.1.6 - Firmatario"				
Description:  """Firmatario legale (La persona che si assume la responsabilità del contenuto medico del documento)."""				
* identificativo 0..1 Identifier "A.1.6.1 Identificatore dell'autenticatore legale" """Il numero di identificazione dell'operatore sanitario. Un identificativo interno assegnato da un'istituzione erogatrice di assistenza sanitaria o (preferibilmente) un'identificazione nazionale dell'operatore sanitario come il numero di licenza o di registrazione. - Sistema preferito( S): """				
* nome 0..* HumanName "A.1.6.2 Nome dell'autenticatore legale" """Nome della persona. - Sistema/i preferito/i: """				
* organizzazione 0..* Organization "A.1.6.3 Organizzazione dell'autenticatore legale" """Informazioni sull'organizzazione dell'operatore sanitario. - Sistema/i preferito/i: """		 		
* data 0..1 dateTime "A.1.6.4 Data e ora di autenticazione" """Data e ora in cui il documento è stato autorizzato. - Sistema/i preferito/i: ISO 8601"""				
//--- END				
//--- END				
//--- END				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
// -------------------------------------------------------------------------------				
//  Map to FHIR R4				
// -------------------------------------------------------------------------------				
Mapping: eHNLabLegalAuthenticator2Fhir				
Id: fhir				
Title: "eHN Lab LegalAuthenticator model to FHIR R4 Map"				
Source: Firmatario				
Target: "hl7.org/fhir/r4"				
				
* -> "Composition.attester.where(mode=http://hl7.org/fhir/composition-attestation-mode#legal)"				
* identificativo -> ".party.resolve().ofType(PractictionerRole).identifier"				
* nome -> ".party.resolve().ofType(PractictionerRole).practictioner.resolve().name"				
* organizzazione -> ".party.resolve().ofType(PractictionerRole).organization.resolve()"				
* organizzazione -> ".party.resolve().ofType(Organization)"				
* data -> ".time"				
// --END				
// --END				
// --END				
				


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/models/lab-order.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-order.fsh
// -------------------------------------------------------------------------------				
Logical: Richiesta				
Id: Richiesta				
Title: "A.2,A.3 - Richiesta"				
Description:  """Informazioni sulla richiesta (A.2) e motivazioni (A3)."""				
* dettagliRichiesta 0..1 BackboneElement "A.2 Informazioni sulla richiesta" """A.2 Informazioni sulla richiesta (Laboratory Result Report could respond to multiple test orders) """				
* dettagliRichiesta.identificativo 0..* Identifier "A.2.1 Identificativo della richiesta" """Identificativo della richiesta dell'esame di laboratorio. Ad un unico identificativo possono corrispondere più richieste."""				
* dettagliRichiesta.dateTime 0..* dateTime "A.2.2 Data ed ora della richiesta" """Data ed orario in cui è stata effettuata la richiesta - Preferred system(s): ISO 8601"""		 		
* dettagliRichiesta.mittenteRichiesta 0..* Identifier "A.2.3 Mittente della richiesta" """Operatore sanitario che invia la richiesta."""				
* dettagliRichiesta.codicePriorita 0..1 code "A.2.7 Codice priorità" """Priorità della richiesta"""				
* quesitoDiagnostico 0..* BackboneElement "A.3 Motivazione della richiesta" """A.3 Motivazione della richiesta (Laboratory Result Report could respond to multiple reasons) """				
* quesitoDiagnostico.code 0..* CodeableConcept "A.3.1 Quesito diagnostico associato alla richiesta" """Condizioni di salute che incidono sulla salute del paziente e sono importanti da conoscere per un professionista sanitario durante un incontro sanitario. Condizioni cliniche del soggetto rilevanti per l'interpretazione dei risultati.
- Sistema/i preferito/i: ICD-10 (ICD-11 when available)
- Sistema/i preferito/i: SNOMED CT
- Sistema/i preferito/i: Orphacode"""				
//--- END				
//--- END				
//--- END				
				
				
				
				
				
				
				
				
				
				
// -------------------------------------------------------------------------------				
//  Map to FHIR R4				
// -------------------------------------------------------------------------------				
Mapping: eHNLabOrder2Fhir				
Id: fhir				
Title: "eHN Lab Modello Logico Richiesta - FHIR R4 Map"				
Source: Richiesta				
Target: "hl7.org/fhir/r4"				
				
//* -> "Composition.extension('http://hl7.eu/fhir/laboratory/StructureDefinition/composition-basedOn-order-or-requisition').valueReference.resolve()"				
//* orderDetails -> "Composition.extension('http://hl7.eu/fhir/laboratory/StructureDefinition/composition-basedOn-order-or-requisition').valueReference.resolve()"				
* dettagliRichiesta.identificativo -> "ServiceRequest.identifier"				
* dettagliRichiesta.dateTime -> "ServiceRequest.authoredOn"						
* dettagliRichiesta.mittenteRichiesta -> "ServiceRequest.performer"		
* dettagliRichiesta.codicePriorita -> "ServiceRequest.priority"
* quesitoDiagnostico -> "ServiceRequest.reasonCode"				
* quesitoDiagnostico.code -> "ServiceRequest.reasonCode"				
// --END				
// --END				
// --END				


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/models/lab-organizer.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-result.fsh
// -------------------------------------------------------------------------------				
Logical: Organizer				
Id: Organizer				
Title: "A.6 - Organizer"				
Description:  """Risultato di un insieme di esami."""				
* osservazione 0..* BackboneElement "A.5.2 Dettagli dell'osservazione" """A.5.2 Dettagli dell'osservazione (il rapporto può consistere di più osservazioni) """				
* osservazione.data 0..* CodeableConcept "A.5.2.1 Data dell'osservazione" """Data e ora dell'osservazione - Sistema di codifica: ISO 8601"""				
* osservazione.codice 0..* CodeableConcept "A.5.2.3 Codice dell'osservazione" """Codice che rappresenta l'osservazione utilizzando i sistemi di codici concordati.
- Sistema/i preferito/i: LOINC
  - Sistema/i preferito/i: NPU
  - Sistema/i preferito/i: SNOMED CT"""				
* osservazione.risultato 0..* BackboneElement "A.5.2.11 Risultato dell'osservazione" """Risultato e codifica della misura relativa all'osservazione inclusi testo, risultati numerici e codificati. Il contenuto del risultato dell'osservazione varierà a seconda del tipo di osservazione.
- Sistema/i preferito/i: SNOMED CT (per i risultati in scala ordinale o nominale e codifica dei risultati)
- Sistema/i preferito/i: UCUM (per unità)"""				
//--- END				
//--- END				
//--- END				
				
				
// -------------------------------------------------------------------------------				
//  Map to FHIR R4				
// -------------------------------------------------------------------------------				
Mapping: eHNLabResultBattery2Fhir				
Id: fhir				
Title: "eHN Modello Logico Organizer - FHIR R4 Map"				
Source: Organizer				
Target: "hl7.org/fhir/r4"				
				
* -> "Observation.conformsTo('http://hl7.it/fhir/lab-report/StructureDefinition/ObservationGroupingRefertoLabIt')"				
* osservazione -> "Observation.hasMember.resolve()"				
* osservazione -> "Observation.component"				
* osservazione.data -> "Observation.effective[x]"				
* osservazione.codice -> "Observation.code"				
* osservazione.risultato -> "Observation.value[x]"				
// --END				
// --END				
// --END				


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/models/lab-recipient.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-recipient.fsh
// -------------------------------------------------------------------------------				
Logical: Destinatario				
Id: Destinatario				
Title: "A.1.4 - Informazioni Destinatario"				
Description:  """Destinatario delle informazioni (destinatario o destinatari del referto, ulteriori destinatari potrebbero essere individuati dal committente, ad es. medico di base, altro specialista), se applicabile."""				
* identificativo 0..1 Identifier "A.1.4.1 Identificativo del destinatario" """Il numero di identificazione dell'operatore sanitario.
Un identificatore interno assegnato da un istituto di assistenza sanitaria o (preferibilmente) un ID professionale sanitario nazionale come il numero di licenza o di registrazione.
Nel caso in cui il destinatario non sia un operatore sanitario, ad es. paziente, deve essere utilizzato un identificatore personale appropriato."""				
* nome 0..* HumanName "A.1.4.2 Nome del destinatario" """Person name."""				
* organizzazione 0..* Organization "A.1.4.3 Organizzazione di appartenenza del destinatario" """The healthcare provider organization information."""		 		
//--- END				
//--- END				
//--- END				
//--- END				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
// -------------------------------------------------------------------------------				
//  Map to FHIR R4				
// -------------------------------------------------------------------------------				
Mapping: eHNLabRecipient2Fhir				
Id: fhir				
Title: "eHN Lab Recipient model to FHIR R4 Map"				
Source: Destinatario				
Target: "hl7.org/fhir/r4"				
				
* -> "Organization"				
* -> "PractictionerRole"				
* -> "Practictioner"				
* -> "Patient"				
* -> "RelatedPerson"				
* identificativo -> ".identifier"				
* nome -> "Organization.name"				
* nome -> "PractictionerRole.practitioner.resolve().name"				
* nome -> "Practictioner.name"				
* nome -> "Patientn.name"				
* nome -> "RelatedPerson.name"				
* organizzazione -> "PractictionerRole.organization.resolve()"				
// --END				
// --END				
// --END				


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/models/lab-report.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-report.fsh
// -------------------------------------------------------------------------------				
Logical: RefertoLaboratorio				
Id: RefertoLaboratorio				
Title: "A - Referto di Laboratorio"				
Description:  """Referto di Laboratorio."""				
* header 1..1 BackboneElement "A.1 header del Referto di Laboratorio" """A.1 header del Referto di Laboratorio."""				
* header.soggettoReferto 1..1 SoggettoCura "A.1.1 - A1.2 Paziente/Soggetto del Referto di Laboratorio" """A.1.1 Identificativo del Paziente/Soggetto e A.1.2 relative informazioni sui contatti del Paziente/Soggetto """				
//* header.payer 0..1 PayerLabEhn "A.1.3 Health insurance and payment information" """A.1.3 Health insurance and payment information"""				
* header.destinatario 0..1 Destinatario "A.1.4 Destinatario delle informazioni" """A.1.4 Destinatario delle informazioni (destinatario o destinatari del Referto di Laboratorio, potrebbero essere identificati ulteriori destinatari, ad esempio medico di base, altro specialista), se applicabile"""				
* header.autore 0..* Autore "A.1.5 Autore" """A.1.5 Autore (da cui è stato redatto il referto dei risultati di laboratorio o un sottoinsieme dei risultati)"""				
* header.firmatario 0..* Firmatario "A.1.6 Firmatario del documento" """A.1.6 Firmatario del documento (La persona che si assume la responsabilità di validare a livello legale il contenuto del documento)"""				
* header.validatore 0..* ValidatorLabEhn "A.1.7 Validatore del documento" """A.1.7 Validatore del documento"""				
* header.metadati 1..1 BackboneElement "A.1.8 Metadata del Referto di Laboratorio" """A.1.8 Metadata del Referto di Laboratorio"""				
* header.metadati.tipo 1..1 CodeableConcept "A.1.8.1 Tipo di documento" """Codice che identifica il tipo di documento. Valore fisso ""Referto di medicina di laboratorio"" - Dizionario di codifica: LOINC"""
* header.metadati.stato 1..1 CodeableConcept "A.1.8.2 Stato del Referto" """Stato del Referto . Ad esempio, preliminare, finale. - Sistema di Codifica: hl7:DiagnosticReportStatus"""
* header.metadati.data 1..1 dateTime "A.1.8.3 Data e ora della creazione del referto" """Data e ora della creazione del report dei risultati. - Sistema di Codifica: ISO 8601"""				
* header.metadati.titolo 0..1 string "A.1.8.4 Titolo del documento" """Titolo del documento, ad esempio ""Rapporto sui risultati di laboratorio"" - Sistema di Codifica: """				
* header.metadati.custode 0..1 BackboneElement "A.1.8.5 Custode del referto" """Organizzazione incaricata della conservazione del referto di laboratorio - Sistema di Codifica: """
* ordine 0..* Richiesta "A.2-A.3 Ordine" """A.2 Informazioni sull'ordine A.3 Motivo dell'ordine"""				
* campione 0..* Campione "A.4 Informazioni sul campione" """A.4 Informazioni sul campione"""				
* risultato 0..* Risultato "A.5 Risultati dell'esame" """A.5 Risultati dell'esame"""				
* organizer 0..* Organizer "A.5 Batteria di esami" """A.5 Batteria di esami"""	
* organizer.risultato 1..* Risultato "A.5 Risultati dell'esame" """A.5 Risultati dell'esame"""	

//--- END				
//--- END				
//--- END				
				
				
				
// -------------------------------------------------------------------------------				
//  Map to FHIR R4				
// -------------------------------------------------------------------------------				
Mapping: eHNLab2Fhir				
Id: fhir				
Title: "eHN Modello Logico RefertoLaboratorio - FHIR R4 Map"				
Source: RefertoLaboratorio				
Target: "hl7.org/fhir/r4"				
				
* -> "Bundle.conformsTo('http://hl7.it/fhir/lab-report/StructureDefinition/bundle-it-lab')"				
* header -> "Composition.conformsTo('http://hl7.it/fhir/lab-report/StructureDefinition/composition-it-lab')"				
* header.soggettoReferto -> "Composition.subject"				
//* header.payer -> "ServiceRequest.conformsTo('http://hl7.eu/fhir/laboratory/StructureDefinition/ServiceRequest-eu-lab').insurance.resolve()"				
* header.destinatario -> ".extension('http://hl7.org/fhir/StructureDefinition/cqf-receivingOrganization')"				
* header.autore -> "Composition.author"				
* header.firmatario -> "Composition.attester.where(mode=http://hl7.org/fhir/composition-attestation-mode#legal)"				
* header.validatore -> "Composition.attester.where(mode=http://hl7.org/fhir/composition-attestation-mode#professional)"				
* header.metadati -> "Composition"				
* header.metadati.tipo -> "Composition.type"				
* header.metadati.stato -> "Composition.status"				
* header.metadati.data -> "Bundle.timestamp"				
* header.metadati.titolo -> "Composition.title"				
* header.metadati.custode -> "Composition.custodian"				
// * ordine -> "Composition.extension('http://hl7.eu/fhir/laboratory/StructureDefinition/composition-basedOn-order-or-requisition').valueReference.resolve()"				
// * ordine -> "Composition.extension('http://hl7.eu/fhir/laboratory/StructureDefinition/composition-basedOn-order-or-requisition').valueIdentifier"				
//* ordine -> "DiagnosticReport.conformsTo('http://hl7.it/fhir/lab-report/StructureDefinition/diagnosticreport-it-lab').basedOn.extension('http://hl7.eu/fhir/laboratory/StructureDefinition/diagnostic-report-basedOn-requisition').valueIdentifier"				
* ordine -> "DiagnosticReport.conformsTo('http://hl7.it/fhir/lab-report/StructureDefinition/diagnosticreport-it-lab').basedOn.resolve()"				
* campione -> "Observation.conformsTo('http://hl7.it/fhir/lab-report/StructureDefinition/ObservationRefertoLabIt').specimen.resolve()"				
* campione -> "DiagnosticReport.conformsTo('http://hl7.it/fhir/lab-report/StructureDefinition/diagnosticreport-it-lab').specimen.resolve()"				
* risultato -> "Composition.section:lab-no-subsections.entry.resolve()"				
* risultato -> "Composition.section:lab-subsections.section.entry.resolve()"				
* risultato -> "DiagnosticReport.conformsTo('http://hl7.it/fhir/lab-report/StructureDefinition/diagnosticreport-it-lab').result.resolve()"				
* organizer -> "Composition.section:lab-no-subsections.entry.resolve()"
* organizer -> "Composition.section:lab-subsections.section.entry.resolve()"				
* organizer -> "DiagnosticReport.conformsTo('http://hl7.it/fhir/lab-report/StructureDefinition/diagnosticreport-it-lab').result.resolve()"				
* organizer.risultato -> "Composition.section:lab-no-subsections.entry.resolve().hasMember()"				
* organizer.risultato -> "Composition.section:lab-subsections.section.entry.resolve().hasMember()"	
// --END				
// --END				
// --END				
// --END				
		


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/models/lab-result.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-result.fsh
// -------------------------------------------------------------------------------				
Logical: ResultLabEhn				
Id: Risultato				
Title: "A.5 - Risultato"				
Description:  """Risultato dell'esame."""				
* bloccoNarrativo 0..1 BackboneElement "A.5.1 Parte Narrativa del Referto di Laboratorio" """A.5.1 Parte Narrativa del Referto di Laboratorio"""				
* bloccoNarrativo.report 0..* Narrative "A.5.1.1 Report" """Referto completo (sintesi testuale del documento del Referto di laboratorio) così come emesso dal laboratorio."""				
* bloccoNarrativo.note 0..* Narrative "A.5.1.2 Commenti, interpretazione e raccomandazioni" """Commenti, ad esempio un'interpretazione testuale o consigli che accompagnano il rapporto sui risultati."""		 		
* osservazione 0..* BackboneElement "A.5.2 Dettagli dell'osservazione" """A.5.2 Dettagli dell'osservazione (il rapporto può consistere di più osservazioni) """				
* osservazione.data 0..* CodeableConcept "A.5.2.1 Data dell'osservazione" """Data e ora dell'osservazione - Sistema di codifica: ISO 8601"""				
* osservazione.codice 0..* CodeableConcept "A.5.2.3 Codice dell'osservazione" """Codice che rappresenta l'osservazione utilizzando i sistemi di codici concordati.
- Sistema/i preferito/i: LOINC
- Sistema/i preferito/i: NPU
- Sistema/i preferito/i: SNOMED CT"""				
* osservazione.codice.nome 0..* string "A.5.2.3.1 Nome dell'osservazione" """Nome completo dell'osservazione in base allo standard di codifica utilizzato."""				
* osservazione.codice.nomeConvenzionale 0..* string "A.5.2.3.2 Nome originale dell'osservazione" """Nome originale (convenzionale) dell'osservazione utilizzato dal laboratorio."""				
* osservazione.codice.displayName 0..* string "A.5.2.3.3 Nome visualizzato dell'osservazione" """Nome dell'osservazione semplificato (nome breve dell'osservazione) per la visualizzazione"""			
* osservazione.metodo 0..* CodeableConcept "A.5.2.4 Metodo di osservazione" """Metodo di osservazione (principio di misurazione) per ottenere il risultato.
- Sistema/i preferito/i: SNOMED CT"""				
* osservazione.device 0..* CodeableConcept "A.5.2.5 Dispositivo utilizzato per l'osservazione" """Informazioni sul dispositivo (analizzatore), sul kit utilizzato per il test di laboratorio e sul calibratore  (identificatore, tipo, nome, modello, produttore)
- Sistema/i preferito/i: SNOMED CT
 - Sistema/i preferito/i: EMDN"""				
* osservazione.ordine 0..* BackboneElement "A.5.2.8 Ordine" """Identifica l'esame e chi effettua l'esame."""				
* osservazione.esecutore 0..* BackboneElement "A.5.2.9 Esecutore" """Identifica l'autore e fornisce informazioni sulla provenienza dei dati (del risultato) che potrebbero non essere derivati dal referto di laboratorio stessp. """			
* osservazione.reporter 0..* BackboneElement "A.5.2.10 Reporter" """A seguito dei risultati ottenuti, ci può essere un interprete o una persona responsabile della convalida."""				
* osservazione.risultato 0..* BackboneElement "A.5.2.11 Risultato dell'osservazione" """Risultato e codifica della misura relativa all'osservazione inclusi testo, risultati numerici e codificati. Il contenuto del risultato dell'osservazione varierà a seconda del tipo di osservazione.
- Sistema/i preferito/i: SNOMED CT (per i risultati in scala ordinale o nominale e codifica dei risultati)
- Sistema/i preferito/i: UCUM (per unità)"""				
* osservazione.interprete 0..* CodeableConcept "A.5.2.12 Interpretazione dell'osservazione" """Informazioni sugli intervalli di riferimento e sull'interpretazione dei risultati.
 - Sistema/i preferito/i: SNOMED CT
 - Sistema/i preferito/i: HL7 v3 Code System ObservationInterpretation"""				
* osservazione.descrizione 0..* Narrative "A.5.2.13 Descrizione del risultato" """Commenti e rappresentazione narrativa del risultato dell'osservazione e dei risultati."""			
* osservazione.statoAccreditamento 0..* BackboneElement "A.5.2.14 Stato di accreditamento" """Stato di accreditamento del laboratorio per la particolare osservazione."""				
//--- END				
//--- END				
//--- END				
				
				
// -------------------------------------------------------------------------------				
//  Map to FHIR R4				
// -------------------------------------------------------------------------------				
Mapping: eHNLabResult2Fhir				
Id: fhir				
Title: "eHN Lab Result model to FHIR R4 Map"				
Source: Risultato				
Target: "hl7.org/fhir/r4"				
				
* -> "Observation.conformsTo('http://hl7.it/fhir/lab-report/StructureDefinition/ObservationRefertoLabIt')"				
* bloccoNarrativo -> "Composition.section.section.text"				
* bloccoNarrativo -> "Composition.section.text"				
* bloccoNarrativo -> "Composition.text"				
* bloccoNarrativo.report -> "Composition.section.section.text"				
* bloccoNarrativo.report -> "Composition.section.text"				
* bloccoNarrativo.report -> "Composition.text"				
* bloccoNarrativo.note -> "Composition.section:annotations.text"				
* osservazione -> "Observation.conformsTo('http://hl7.it/fhir/lab-report/StructureDefinition/ObservationRefertoLabIt')"				
* osservazione -> "Observation.hasMember.resolve()"				
* osservazione -> "Observation.component"				
* osservazione.data -> "Observation.effective[x]"				
* osservazione.codice -> "Observation.code"				
* osservazione.codice.nome -> "Observation.code.coding.display"				
* osservazione.codice.nomeConvenzionale -> "Observation.code.text"				
* osservazione.codice.displayName -> "Observation.code.coding.display.extension('translation')"				
* osservazione.metodo -> "Observation.method"				
* osservazione.device -> "Observation.device.resolve()"				
* osservazione.ordine -> "Observation.basedOn.resolve().ofType(ServiceRequest)"				
* osservazione.esecutore -> "Observation.performer.resolve()"				
* osservazione.risultato -> "Observation.value[x]"				
* osservazione.interprete -> "Observation.interpretation"				
* osservazione.descrizione -> "Observation.text"				
* osservazione.descrizione -> "Observation.note"								
// --END				
// --END				
// --END				


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/models/lab-specimen.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-specimen.fsh
// -------------------------------------------------------------------------------				
Logical: Campione				
Id: Campione				
Title: "A.4 - Informazioni sul Campione"				
Description:  """Informazioni sul campione."""				
* identificativo 0..1 Identifier "A.4.1 identificativo del campione" """Identificativo unicvoco del campione . Esempio: Identificativo assegnato dal sistema di campionamento, Identificativo assegnato dal laboratorio ecc. È possibile utilizzare più Identificativi. - Sistema di Codifica : """
* tipoCampione 0..* CodeableConcept "A.4.2 Tipo di campione" """Tipo biologico del campione. - Sistema di Codifica: SNOMED CT"""					 		
* dataRaccolta 0..* dateTime "A.4.4 Periodo di raccolta" """Data, ora o periodo di raccolta. - Sistema: ISO 8601"""				
* posizioneAnatomica 0..* CodeableConcept "A.4.5 Sede anatomica" """Posizione anatomica (posizione del corpo, lateralità) in cui il campione viene raccolto, ad es. Gomito, sinistra - Sistema: SNOMED CT"""						
* metodoRaccolta 0..* CodeableConcept "A.4.8 Procedura/metodo di raccolta" """Se rilevante per i risultati, il metodo per ottenere il campione. - Sistema: SNOMED CT"""				
* dataRicezione 0..* dateTime "A.4.9 Data di ricezione" """Data e ora in cui il materiale viene consegnato al laboratorio o al centro di raccolta dei campioni. - Sistema: ISO 8601"""				
//--- END				
//--- END				
//--- END				
				
				
				
// -------------------------------------------------------------------------------				
//  Map to FHIR R4				
// -------------------------------------------------------------------------------				
Mapping: eHNLabSpecimen2Fhir				
Id: fhir				
Title: "eHN Lab Specimen model to FHIR R4 Map"				
Source: Campione				
Target: "hl7.org/fhir/r4"				
				
* -> "Observation.conformsTo('http://hl7.eu/fhir/ig/xeh/StructureDefinition/Observation-results-laboratory-eu-xeh').specimen.resolve()"				
* identificativo -> "Specimen.identifier"				
* tipoCampione -> "Specimen.type"							
* dataRaccolta -> "Specimen.collection.collected[x]"				
* posizioneAnatomica -> "Specimen.collection.bodySite"									
* metodoRaccolta -> "Specimen.collection.method"				
* dataRicezione -> "Specimen.receivedTime"				
// --END				
// --END				
// --END				


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/models/lab-subject.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-subject.fsh
// -------------------------------------------------------------------------------				
Logical: SoggettoCura				
Id: SoggettoCura				
Title: "A.1.1, A.1.2 - Soggetto delle cure"				
Description:  """Paziente o Soggetto delle cure."""				
* identificazione 1..1 BackboneElement "A.1.1 Identificazione del paziente/soggetto" """A.1.1 Identificazione del paziente/soggetto"""				
* identificazione.cognome 0..* string "A.1.1.1 Cognome" """Il cognome del paziente. Questo campo può contenere più di un elemento oppure possono essere presenti più campi."""				
* identificazione.nome 0..* string "A.1.1.2 Nome" """Il nome del paziente . Questo campo può contenere più di un elemento. """		 		
* identificazione.dataNascita 0..1 dateTime "A.1.1.3 Data di nascita" """La data di nascita del paziente [ISO TS 22220]. Poiché l'età del paziente potrebbe essere importante per la corretta interpretazione dei valori dei risultati del test, è necessario fornire la data di nascita completa - Sistema/i preferito/i: data completa, senza ora, seguendo la norma ISO 8601 """				
* identificazione.identificativo 0..1 Identifier "A.1.1.4 Identificativo personale" """Un identificatore del paziente unico all'interno di un ambito definito. Esempio: ID nazionale (numero di nascita) per il paziente ceco. Potrebbero essere forniti identificatori multipli. """				
* identificazione.gender 0..1 CodeableConcept "A.1.1.5 Gender" """Questo campo deve contenere un valore valido riconosciuto per 'genere amministrativo'.
Se diverso, il "genere fisiologico" dovrebbe essere comunicato altrove Sistema: - Sistema: HL7 Administrative Gender """				
* recapito 0..* BackboneElement "A.1.2 Informazioni di contatto relative al paziente/soggetto" """A.1.2 Informazioni di contatto relative al paziente/soggetto"""				
* recapito.indirizzo 0..* Address "A.1.2.1 Indirizzo" """Indirizzi postali e di casa o ufficio. Gli indirizzi sono sempre sequenze di parti di indirizzo (ad es. riga dell'indirizzo, paese, codice postale, città) anche se i formati dell'indirizzo postale possono variare a seconda del paese Un indirizzo può includere o meno uno specifico codice d'uso, se tale attributo non è presente si assume che sia l'indirizzo di default utile per qualsiasi scopo - Sistema/i preferito/i: ISO 3166"""				
* recapito.telefono 0..* ContactPoint "A.1.2.2 Telecom" """Informazioni sui contatti di telecomunicazione (indirizzi) associati a una persona. Potrebbero essere forniti più indirizzi di telecomunicazione. - Sistema/i preferito/i: """				
//--- END				
//--- END				
//--- END				
				
				
				
				
				
				
				
				
				
				
// -------------------------------------------------------------------------------				
//  Map to FHIR R4				
// -------------------------------------------------------------------------------				
Mapping: eHNLabSubject2Fhir				
Id: fhir				
Title: "eHN Lab Subject model to FHIR R4 Map"				
Source: SoggettoCura				
Target: "hl7.org/fhir/r4"				
				
* -> "Patient.conformsTo('http://hl7.eu/fhir/laboratory/StructureDefinition/Patient-eu-lab')"				
* identificazione -> "Patient"				
* identificazione.cognome -> "Patient.name.family"				
* identificazione.nome -> "Patient.name.given"				
* identificazione.dataNascita -> "Patient.birthDate"				
* identificazione.identificativo -> "Patient.identifier"				
* identificazione.gender -> "Patient.gender"				
* recapito -> "Patient.address"				
* recapito.indirizzo -> "Patient.address"				
* recapito.telefono -> "Patient.telecom"				
// --END				
// --END				


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/models/lab-validator.fsh

// -------------------------------------------------------------------------------				
//  Logical Model				lab-validator.fsh
// -------------------------------------------------------------------------------				
Logical: ValidatorLabEhn				
Id: Validatore				
Title: "A.1.7 - Validatore"				
Description:  """Validatore del documento."""				
* identifier 0..1 Identifier "A.1.7.1 Identificativo del validatore dei risultati" """Numero di identificazione dell'operatore sanitario. Identificativo assegnato da un'istituzione erogatrice di assistenza sanitaria o (preferibilmente) un'identificativo nazionale dell'operatore sanitario come il numero di licenza o di registrazione. - Sistema: """				
* name 0..* HumanName "A.1.7.2 Nome del validatore dei risultati" """Nome della persona. - Sistema: """				
* organization 0..* Organization "A.1.7.3 Organizzazione del validatore" """Informazioni sull'organizzazione dell'operatore sanitario. - Sistema: """		 		
* dateTime 0..1 dateTime "A.1.7.4 Data e ora di convalida" """Data e ora in cui il documento è stato validato. - Sistema: ISO 8601"""				
//--- END				
//--- END				
//--- END				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
// -------------------------------------------------------------------------------				
//  Map to FHIR R4				
// -------------------------------------------------------------------------------				
Mapping: eHNLabValidator2Fhir				
Id: fhir				
Title: "eHN Lab Validator model to FHIR R4 Map"				
Source: Validatore				
Target: "hl7.org/fhir/r4"				
				
* -> "Composition.attester.where(mode=http://hl7.org/fhir/composition-attestation-mode#professional)"				
* identifier -> ".party.resolve().ofType(PractictionerRole).identifier"				
* identifier -> ".party.resolve().ofType(PractictionerRole).practictioner.resolve().identifier"				
* name -> ".party.resolve().ofType(PractictionerRole).practictioner.resolve().name"				
* organization -> ".party.resolve().ofType(PractictionerRole).organization.resolve()"				
* organization -> ".party.resolve().ofType(Organization)"				
* dateTime -> ".time"				
// --END				
// --END				
// --END				
// --END				
// --END				


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/address-it.fsh

Profile: AddressItBase
Parent: Address
Id: address-it
Title: "Address - ITA"
Description: "Descrizione di Address con parti addizionali specifiche per gli indirizzi italiani. Questo profilo struttura l'elemento  Address.line in più parti, consente la codifica di alcune di queste parti e supporta la caratterizzazine degli indirizzi di tipo Residenza. Questa prima versione è ispirata al data type Address Olandese."
* insert SetFmmandStatusRule ( 1, trial-use)
* . ^short = "Indirizzo fisico o postale"
* . ^definition = "Esiste una varietà di formati di indirizzi postali definiti in tutto il mondo. Questo profilo (address-it-base) estende il datatype base Address includendo una serie di informazioni rilevanti per esprimere gli indirizzi in Italia. \r \n \r \n Un address-it-base è un indirizzo FHIR valido; i sistemi che non supportano le estensioni utilizzate saranno in grado comunque di eseguire il rendering e lavorare con un XXXX. \r \n \r \n Un indirizzo rende alcune parti di indirizzo comunicabili separatamente. Queste parti sono necessarie in alcuni scenari d'uso italiani, ma potrebbero non avere valore per i sistemi internazionali quando le informazioni vengono inviate all'estero."
* . ^comment = "Nota: address è per indirizzi postali, non per la localizzazione fisica."
* . ^alias[0] = "Indirizzo"
* extension contains
    OfficialAddress named residenza 0..1 and
    ExtRecordCertification named certificazioneIndirizzo 0..*
* extension[residenza] ^short = "Indica l'indirizzo di residenza"
* extension[residenza] ^definition = "Indica se questo indirizzo è quello di residenza, come indirizzo 'ufficialmente registrato' address."
* extension[certificazioneIndirizzo] ^short = "Certificazione Indirizzo"
* extension[certificazioneIndirizzo] ^definition = "Indica che i dati di questo indirizzo sono stati certificati da una specifica entità"
* line ^short = "Nome completo strada (e.g. Via Corta 1, interno 2)"
* line.extension contains
    $iso21090-ADXP-streetName named odonimo 0..1 and
    ExtDug named dugCode 0..1 and
    $iso21090-ADXP-streetNameBase named denominazioneUrbanisticaUfficiale 0..1 and
    $iso21090-ADXP-houseNumber named houseNumber 0..1 and
    $iso21090-ADXP-streetNameType named denominazioneUrbanisticaGenerica 0..1
* line.extension[odonimo] ^short = "Odonimo, Toponimo Stradale"
* line.extension[odonimo] ^requirements = "Nome della Strada"
* line.extension[odonimo] ^alias[0] = "Toponimo Stradale"
* line.extension[odonimo] ^example.label = "ex-1"
* line.extension[odonimo] ^example.valueString = "Via Corta"
* line.extension[denominazioneUrbanisticaGenerica] ^short = "Denominazione Urbanistica Generica (DUG)"
* line.extension[denominazioneUrbanisticaGenerica] ^example.label = "ex-1"
* line.extension[denominazioneUrbanisticaGenerica] ^example.valueString = "Via"
* line.extension[dugCode] ^short = "Codice Denominazione Urbanistica Generica (DUG)"
* line.extension[dugCode] ^alias[0] = "specie"
* line.extension[dugCode] ^example.label = "ex-1"
* line.extension[dugCode] ^example.valueCodeableConcept = $istat-dug#67 "via"
* line.extension[denominazioneUrbanisticaUfficiale] ^short = "Denominazione Urbanistica Ufficiale (DUF)"
* line.extension[denominazioneUrbanisticaUfficiale] ^alias[0] = "denominazione"
* line.extension[denominazioneUrbanisticaUfficiale] ^example.label = "ex-1"
* line.extension[denominazioneUrbanisticaUfficiale] ^example.valueString = "Corta"
* line.extension[houseNumber] ^short = "Numero Civico"
* line.extension[houseNumber] ^requirements = "Numero Civico"
* line.extension[houseNumber] ^example.label = "ex-1"
* line.extension[houseNumber] ^example.valueString = "1"
* city ^definition = "Nome della città, paese, frazione, ecc."
* city ^alias[0] = "Comune"
* district ^short = "Nome della Provincia"
* district ^definition = "Nome dell'area amministrativa (county).\r\nPer gli indirizzi italiani è usato per indicare la Provincia"
* district ^alias[0] = "Provincia"
* district.extension contains
    $iso21090-SC-coding named codiceProvincia 0..1
* district.extension[codiceProvincia] ^sliceName = "codiceProvincia"
* district.extension[codiceProvincia] ^short = "Codice Provincia"
* state ^short = "Sotto-unità dello stato (Regione)."
* state ^definition = "Sotto-unità dello stato con limitata sovranità in uno stato oragnizzato federalmente.\r\nNel contesto italiano indica la \"Regione\""
* state ^alias[0] = "Regione"
* state.extension contains
    $iso21090-SC-coding named codiceRegione 0..1
* state.extension[codiceRegione] ^sliceName = "codiceRegione"
* state.extension[codiceRegione] ^short = "Codice Regione"
* postalCode obeys it-postal-code-pattern
  * ^comment = "I codici postali italiani hanno un pattern '[1,9]{4}'."
  * ^alias[0] = "CAP"
  * ^alias[+] = "postcode"
  

* country.extension contains
    $iso21090-SC-coding named codiceStato 0..1
* country.extension[codiceStato] ^sliceName = "codiceStato"
* country.extension[codiceStato] ^short = "Codice Stato"

// ====== Invariants ====
Invariant: it-postal-code-pattern
Description: "I codici postali italiani hanno un pattern 'nnnnn' (n intero)"
Expression: "matches('[0-9]{5}')"
XPath: "matches(@value,'[0-9]{5}')"
Severity:    #error


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/bundle-it-lab.fsh

Profile: BundleRefertoLabIt
Parent: $Bundle-eu-lab //   Bundle 
Id: bundle-it-lab
Title:    "Bundle - Lab Report"
Description: "Descrizione del contenuto informativo del report tramite il profilo della risorsa Bundle per il referto di laboratorio."
* . ^definition = "La creazione di un FHIR Document prevede la costruzione di una Bundle con le seguenti caratteristiche:\n - ′type′=document\n - identifier obbligatorio\n - prima risorsa referenziata ′Composition′ di cui ′identifier′ opzionale e ′date′ obbligatorio\n - ′timestamp′ obbligatorio\n"
* . ^short = "Bundle Referto di Laboratorio"
* insert SetFmmandStatusRule ( 1, trial-use)
//* type = #document 
* type ^short = "Tipologia di Bundle."
* identifier 1.. 
* identifier ^short = "Identificativo del FHIR Document."
* identifier.system 1..
* identifier.system ^short = "Sistema di codifica che contiene il codice identificativo."
* identifier.value 1..
* identifier.value ^short = "Valore univoco di identificazione della bundle."
* identifier ^definition = "L'identificativo è dipendente dalla versione della Bundle, e per soddisfare i requisiti di persistenza deve essere unico."
* timestamp 1..
* total 0..0
* link 0..0
* timestamp ^short = "Quando la Bundle è stata creata."
/* * entry ^slicing.discriminator[0].type = #type
* entry ^slicing.discriminator[=].path = "resource"
* entry ^slicing.rules = #open
* entry.link 0..0
* entry.fullUrl 1..1
* entry.resource 1..1
* entry.search 0..0
* entry.request 0..0
* entry.response 0..0 */
* entry ^short = "Risorse contenute nel documento FHIR."

* entry contains
   media 0..* and
   substance 0.. 
   // device 0..


* entry[composition].resource only CompositionRefertoLabIt
* entry[practitionerRole].resource only PractitionerRoleRefertoLabIt
* entry[practitioner].resource only PractitionerRefertoLabIt
* entry[organization].resource only OrganizationRefertoLabIt
* entry[patient].resource only PatientRefertoLabIt
* entry[patient] 1..1
* entry[encounter].resource only EncounterRefertoLabIt
* entry[location].resource only location-it-lab
* entry[serviceRequest].resource only ServiceRequestRefertoLabIt
* entry[diagnosticReport].resource only DiagnosticReportRefertoLabIt
* entry[observation].resource only ObservationDocRefertoLabIt  
* entry[specimen].resource only SpecimenRefertoLabIt
* entry[media].resource only media-it-lab
* entry[substance].resource only substance-additive-specimen-it-lab
* entry[location].resource only location-it-lab
// * entry[device].resource only device-it-lab

* signature ^short = "Firma digitale del documento."


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/composition-it-lab.fsh

Profile: CompositionRefertoLabIt
Parent: $Composition-eu-lab //$clinical-document 
Id: composition-it-lab
Title: "Composition - Lab Report"
Description: "Descrizione del referto di laboratorio tramite il profilo della risorsa Composition per il referto di laboratorio."

* insert SetFmmandStatusRule ( 1, trial-use)
* . ^short = "Composition Referto di Laboratorio"

* language = #it-IT
* language 1..1  
* language ^short = "Metadato che indica la lingua utilizzata per descrivere la risorsa."
* extension contains   composition-dataenterer-it named dataEnterer 0..*

* extension[dataEnterer] ^short = "Persona o dispositivo che trasforma un testo dettato nel documento FHIR."
* extension[information-recipient] ^short = "Professionisti sanitari che ricevono una copia del documento (es. MMG/PLS)."

* insert ReportIdentifierRule

* insert ReportTypeRule ( type )
/* * type from http://hl7.eu/fhir/laboratory/ValueSet/lab-reportType-eu-lab (preferred) */

* status ^short = "Stato di completezza della risorsa Composition. Lo stato della risorsa rappresenta anche lo stato del documento."
* status ^definition = "Lo stato della Composition si sviluppa generalmente solo attraverso questo elenco: passa da preliminary a final e poi può passare a amended (ovvero modificato). "

* insert ReportSubjectRule

* insert ReportStatusRule

/* * category from $diagnosticreport-category-valueset (example) */
* insert ReportCategoryRule 

* insert ReportEncounterRule

* date ^short = "Data di modifica della risorsa Composition."
* confidentiality from $conf
* confidentiality ^short = "Codice di confidenzialità della Composition."
* author only Reference(PractitionerRefertoLabIt or PractitionerRoleRefertoLabIt or PatientRefertoLabIt or OrganizationRefertoLabIt)

* author 1..
  * ^short = "Chi e/o cosa è l'autore del referto di laboratorio."
  * ^definition = "Identifies who is responsible for the information in the Laboratory Report, not necessarily who typed it in."
  * insert ReportAuthorRule

* title ^short = "Titolo o nome human-readable della Composition."
* title = "Referto di Laboratorio" 
* attester 1..*
* attester ^slicing.discriminator.type = #value
* attester ^slicing.discriminator.path = "mode"
* attester ^slicing.rules = #open
* attester ^slicing.description = "Professionisti che attestano la validità del documento."
* attester ^short = "Professionisti che attestano la validità del documento. Se la risorsa è creata a fine documentale uno degli attester dovrebbe essere il firmatario, ovvero chi allega la firma digitale al documento."
* attester ^slicing.ordered = false
* attester contains
    legalAuthenticator 0..1 and
    authenticator 0..1 
* attester[legalAuthenticator] ^short = "Firmatario del documento FHIR."
* attester[legalAuthenticator].mode 1..1
* attester[legalAuthenticator].mode = #legal
* attester[legalAuthenticator].party only Reference(PractitionerRefertoLabIt or PractitionerRoleRefertoLabIt)
* attester[legalAuthenticator].time 1..1
* attester[legalAuthenticator].time ^short = "Riferimento temporale della firma."
* attester[legalAuthenticator].party ^short = "Riferimento al firmatario."

* attester[authenticator] ^short = "Validatore del documento FHIR."
* attester[authenticator].mode 1..1
* attester[authenticator].mode = #professional
* attester[authenticator].party only Reference(PractitionerRefertoLabIt or PractitionerRoleRefertoLabIt)
* attester[authenticator].party ^short = "Riferimento al validatore."

* custodian 0..1
* custodian only Reference(OrganizationRefertoLabIt)
* custodian ^short = "Organizzazione che si occupa della conservazione del documento FHIR."

/* * relatesTo ^short = "Ulteriori risorse Composition correlate al documento."
* relatesTo.target[x] ^short = "Riferimento alla risorsa Composition correlata."
* relatesTo.target[x] only Reference  */

* section.title 1..
* section.title ^short = "Titolo della sezione."
* section.code 1..
* insert ReportTypeRule ( type )
* section.code ^short = "Codice della sezione."

* section[lab-no-subsections] ^short = "Variante 1: questa sezione presenta solo entry senza sottosezioni."
* section[lab-no-subsections].text ^short = "Sintesi testuale della sezione, per l'interpretazione dell'utente."

* section[lab-no-subsections].code from $sezione-referto-laboratorio (preferred)
* section[lab-no-subsections].entry only Reference (ObservationRefertoLabIt or ObservationGroupingRefertoLabIt or ObservationDocRefertoLabIt) // Aligned with the DR Reference (ObservationRefertoLabIt)

* section[lab-subsections].code from $sezione-referto-laboratorio (preferred)
* section[lab-subsections].section ^short = "Sottosezione strutturata della sezione principale."

* text ^short = "Sintesi testuale della sezione, per l'interpretazione dell'utente."

* section[lab-subsections].entry only Reference (ObservationRefertoLabIt or ObservationGroupingRefertoLabIt or ObservationDocRefertoLabIt) // Aligned with the DR Reference (ObservationRefertoLabIt)
* section[lab-subsections] ^short = "Variante 2: questa sezione presenta sottosezioni senza entry"

* section[annotations] ^short = "Commenti testuali"
* section[annotations] ^definition = """Rappresentazione testuale dei commenti che accompagnano il referto, come suggerimenti per la valutazione, note tecniche del laboratorio, ecc."""
* section[annotations].text ^short = "Sintesi testuale della sezione, per l'interpretazione dell'utente."








---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/device-it-lab.fsh

Profile: DeviceRefertoLabIt 
Parent: Device
Id: device-it-lab
Title: "Device - Lab Report"
Description: "Descrizione di un dispositivo tramite il profilo della risorsa Device per il referto di laboratorio."

* insert SetFmmandStatusRule ( 1, trial-use)

* . ^short = "Dispositivo coinvolto nel dominio di Referto di Laboratorio"
* . ^definition = "Il dispositivo coinvolto nel dominio di Referto di Laboratorio può essere il dispositivo di raccolta del contenuto multimediale (Media) o utilizzato nella rilevazione dell'Observation." 

* identifier ^short = "Identificativo del dispositivo, se presente."

* deviceName ^short = "Il nome del dispositivo fornito dal produttore."
* deviceName.name ^short = "Il nome che identifica il dispositivo."
* deviceName.type ^short = "Descrizione attributo: Tipologia di nome. Possibili valori:  udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other"
* deviceName.type from $typeName-device (required)
* type ^short = "Il tipo di dispositivo"
* type from $sct-device (preferred)

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/diagnosticreport-it-lab.fsh

Profile: DiagnosticReportRefertoLabIt
Parent: $DiagnosticReport-eu-lab 
Id: diagnosticreport-it-lab
Title: "DiagnosticReport - Lab Report"
Description: "Descrizione delle informazioni cliniche tramite il profilo della risorsa DiagnosticReport per il referto di laboratorio."

* insert SetFmmandStatusRule (1, trial-use)

* . ^short = "DiagnosticReport Referto di Laboratorio"
* . ^definition = "Laboratory Report DiagnosticReport"

* extension[DiagnosticReportCompositionR5] ^short = "Estensione di FHIR R5 per legare la DiagnosticReport a Composition."
* extension[DiagnosticReportCompositionR5].value[x] ^short = "Reference a Composition."
* extension[DiagnosticReportCompositionR5].value[x] only Reference(composition-it-lab)

* insert ReportIdentifierRule 

* basedOn only Reference (ServiceRequestRefertoLabIt)
* basedOn ^short = "Reference a una o più prestazioni richieste associate al referto."

* insert ReportCategoryRule 
* insert ReportSubjectRule


* status ^short = "Descrizione attributo: Stato del report clinico. Possibili valori: registered | partial | preliminary | modified | final | amended | corrected | appended | cancelled | entered-in-error | unknown"
* status from $diagn-status (required)

* insert ReportStatusRule
* encounter only Reference (EncounterRefertoLabIt) 
* encounter ^short = "Evento sanitario a cui si riferisce il Referto di Laboratorio (es. al momento della prescrizione)."

* specimen only Reference (SpecimenRefertoLabIt)
* specimen ^short = "Reference ai campioni su cui si basa la DiagnosticReport."
* performer only Reference(PractitionerRefertoLabIt or PractitionerRoleRefertoLabIt or OrganizationRefertoLabIt or CareTeam)
  * insert ReportAuthorRule
* performer ^short = "Persona o Organizzazione che partecipa all'evento clinico descritto."
* performer ^definition = "Organizzazione o Persona che è responsabile del report; non è necessariamente l'autore dei dati atomici o l'entità che ha interpretato i risultati. "
* code ^short = "Nome/codice della diagnostic report."
* code.coding ^short = "Codice definito da un sistema terminologico."
* code = $loinc#11502-2 "Laboratory report"
* insert ReportTypeRule ( code )
* result only Reference (ObservationRefertoLabIt) 
* result ^short = "Osservazioni cliniche." 
* imagingStudy 0..0 
* media ^short = "Contenuto multimediale associate al DiagnosticReport."
* media.comment ^short = "Commento sull'immagine."
* media.link only Reference(media-it-lab)
* media.link ^short = "Riferimento al contenuto multimediale."
* presentedForm ^short = "Rappresentazione testuale del Referto di Laboratorio così come emesso."

* insert ReportEncounterRule
  
* resultsInterpreter
  * insert ReportAuthorRule


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/encounter-it-lab.fsh

Profile: EncounterRefertoLabIt
Parent: Encounter
Id: encounter-it-lab
Title: "Encounter - Lab Report"
Description: "Descrizione dei dati relativi all'incontro per la specifica richiesta tramite il profilo della risorsa Encounter per il referto di laboratorio."

* insert SetFmmandStatusRule ( 1, trial-use)
* . ^short = "Encounter Referto di Laboratorio"


* subject 1..
* subject ^short = "Soggetto dell'incontro."
* subject only Reference(PatientRefertoLabIt)

* status ^short = "Descrizione attributo: Stato attuale dell'incontro. Possibili valori: planned | arrived | triaged | in-progress | onleave | finished | cancelled"
* status from $encounter-status (required)
* class ^short = "Classificazione dell'incontro con il paziente."
* class from $encounter-class (extensible)
* basedOn only Reference(ServiceRequestRefertoLabIt)
* basedOn ^short = "Reference alla ServiceRequest che ha avviato l'incontro."
* participant ^short = "Partecipanti coinvolti durante l'incontro."

* participant.individual ^short = "Persone coinvolte nell'incontro oltre il paziente."
* participant.individual only Reference(PractitionerRefertoLabIt or PractitionerRoleRefertoLabIt or RelatedPerson)

* period ^short = "L'inizio e la fine dell'incontro."
* location ^short = "Dati relativi alle strutture in cui si svolge l'incontro."
* location.location only Reference(location-it-lab)
* location.location ^short = "Struttura in cui si svolge l'incontro."


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/location-it-lab.fsh

Profile: LocationRefertoLabIt
Parent: Location
Id: location-it-lab
Title: "Location - Lab Report"
Description: "Descrizione delle informazioni relative alle strutture fisiche tramite il profilo della risorsa Location per il referto di laboratorio."
* . ^short = "Location Referto di Laboratorio."

* insert SetFmmandStatusRule ( 1, trial-use)

* identifier 1..
* identifier ^short = "Identificativo della struttura (luogo)."
* name ^short = "Nome della struttura (luogo)."

* type ^short = "Tipo di struttura sulla base dei servizi offerti."
* type from $location-type (extensible)
* address ^short = "Indirizzo fisico della struttura (luogo)."
* managingOrganization ^short = "Organizzazione responsabile della gestione della struttura (provisioning e manutenzione)."
* managingOrganization only Reference(OrganizationRefertoLabIt)

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/media-it-lab.fsh

Profile: MediaRefertoLabIt
Parent: Media
Id: media-it-lab
Title: "Media - Lab Report"
Description: "Descrizione dei contenuti multimediali tramite il profilo della risorsa Media per il referto di laboratorio."
* . ^short = "Media Referto di Laboratorio"
* insert SetFmmandStatusRule ( 1, trial-use)
* ^purpose = "Questa risorsa viene utilizzata per illustrare i contenuti multimediali legati al Referto di Laboratorio."

* status ^short = "Stato del valore del risultato."
* subject 1..
* subject only Reference(PatientRefertoLabIt)
* subject.reference ^short = "Reference Literal, Relative, URL interno o assoluto."
* subject.reference 1..
* subject ^short = "Reference al soggetto del  file multimediali."
* device ^short = "Dispositivo utilizzato per raccogliere i file multimediali."
* device only Reference(DeviceRefertoLabIt)
* content ^short = "Contenuto multimediale."
* operator only Reference(PractitionerRefertoLabIt or PractitionerRoleRefertoLabIt or OrganizationRefertoLabIt or CareTeam or PatientRefertoLabIt or DeviceRefertoLabIt or RelatedPerson)
* operator ^short = "Operatore che ha generato il contenuto multimediale."
* type ^short = "Descrizione attributo: Tipo di contenuto multimediale. Possibili valori: image | video | audio"
* type from $MediaType

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/observation-doc-it-lab.fsh

Profile: ObservationDocRefertoLabIt
Parent:  ObservationRefertoLabIt
Id: observation-doc-it-lab
Title:    "Observation Document - Lab Report"
Description: "Descrizione dei vincoli aggiuntivi per Observation-Lab Report tramite il profilo della risorsa Observation per il referto di laboratorio.."
* insert SetFmmandStatusRule ( 1, trial-use)
* status from valueset-status-obs-it

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/observation-grouping-it-lab.fsh

Profile: ObservationGroupingRefertoLabIt
Parent: ObservationRefertoLabIt
Id: observation-grouping-it-lab
Title: "Observation battery - Lab Report"
Description: "Descrizione di un inseme di esami tramite il profilo della risorsa Observation per il referto di laboratorio."
* insert SetFmmandStatusRule ( 1, trial-use)
* . ^short = "Observation battery Referto di Laboratorio"
* valueQuantity 0..0
* valueCodeableConcept 0..0
* valueRatio 0..0
* valueRange 0..0
* valueString 0..0
* valueTime 0..0
* valueDateTime 0..0
* valuePeriod 0..0
* value[x] 0..0 // this rule generate a sushi warning 
* interpretation 0..0
* referenceRange 0..0
* component 0..0

/* * code.coding.code ^short = "Codice che identifica la tipologia dell'insieme di esami."
* code.coding.code from $sezione-referto-laboratorio (preferred) */

* code from $sezione-referto-laboratorio (preferred)
* code ^short = "Codice che identifica la tipologia dell'insieme di esami."

* hasMember ^short = "Osservazioni contenenti i risultati degli esami svolti."
* hasMember 1..
/* * hasMember only Reference(ObservationRefertoLabIt) */
/* * derivedFrom ^short = "Reference dell'osservazione da cui deriva questo valore di osservazione."
* derivedFrom only Reference(ObservationRefertoLabIt) */

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/observation-it-lab.fsh

Profile: ObservationRefertoLabIt
Parent:  $Observation-resultslab-eu-lab //  Observation
Id: observation-it-lab
Title:    "Observation - Lab Report"
Description: "Descrizione delle rilevazioni cliniche tramite il profilo della risorsa Observation per il referto di laboratorio."
* . ^short = "Observation Referto di Laboratorio"
* insert SetFmmandStatusRule ( 1, trial-use)
/* * obeys ita-lab-1 */ // Non allineato con il vincolo in HL7 EU

* code from $risultato-osservazione (preferred)
* code ^short = "Tipo di osservazione tramite codice."
* status from $observation-status (required)
* status ^short = "Descrizione attributo: Stato dell'osservazione. Possibili valori: registered | preliminary | final | amended +"
* category ^short = "Codice che classifica il tipo di osservazione."
* category ^definition = "La categoria di osservazione può definire la classificazione tramite diversi livelli di dettaglio, a partire da laboratory."

* category[laboratory] ^short = "Indica genericamente che si riferisce ad un esame di Laboratorio"
* category[studyType] ^short = "Classificazione per tipo di studio"
* category[specialty] ^short = "Classificazione per specialità"

* subject 1..
* subject ^short = "Soggetto della rilevazione clinica."
* subject only Reference(PatientRefertoLabIt)

* encounter 0..1
* encounter only Reference(EncounterRefertoLabIt)
* encounter ^short = "Contesto in cui è stata prodotta l'osservazione."

* performer 1..
* performer ^short = "Soggetto responsabile dell'osservazione."
* performer only Reference(PractitionerRefertoLabIt or PractitionerRoleRefertoLabIt or OrganizationRefertoLabIt or CareTeam or RelatedPerson)

* effective[x] 1..

* value[x] ^short = "Risultato dell'osservazione."
/* * value[x] ^slicing.discriminator.type = #type
* value[x] ^slicing.discriminator.path = "$this"
* value[x] ^slicing.rules = #closed
* valueQuantity ^sliceName = "valueQuantity"  */
* valueQuantity ^short = "Risultato misurabile tramite una quantità."
* valueQuantity only QuantityLab

* hasMember only Reference(ObservationRefertoLabIt)
* hasMember ^short = "Osservazioni correlate alla risorsa."
* specimen ^short = "Reference al campione su cui si basa l'osservazione."
* specimen only Reference(SpecimenRefertoLabIt)

* interpretation ^short = "Interpretazione del risultato (Alto, Basso, Normale, ecc.)"
* referenceRange ^short = "Range di riferimento per la caratterizzazione dell'osservazione sulla base di un criterio.\nEsempio: Range di normalità per uomo adulto."
* referenceRange.low ^short = "Limite inferiore del range di riferimento, se rilevante."
* referenceRange.high ^short = "Limite superiore del range di riferimento, se rilevante."
* referenceRange.type ^short = "Contesto del range di riferimento. Esempio: Un intervallo atteso in un individuo prima della pubertà."
* referenceRange.appliesTo ^short = "Categoria della popolazione a cui si applica il range di riferimento."
* referenceRange.age ^short = "Età a cui si applica, se rilevante."
* referenceRange.text ^short = "Note testuali."
* device ^short = "Dispositivo utilizzato per ottenere l'osservazione."
* device only Reference(DeviceRefertoLabIt or DeviceMetric)
* method ^short = "Metodo di rilevazione dell'osservazione."


* method from $sct-method (preferred)
* bodySite ^short = "Sito corporeo dell'osservazione."
* derivedFrom only Reference(ObservationRefertoLabIt or MediaRefertoLabIt)
* derivedFrom ^short = "Reference dell'osservazione da cui deriva questo valore di osservazione. Ad esempio, un gap anionico calcolato o una misurazione fetale basata su un'immagine ecografica."

* valueCodeableConcept from $valueset-valuecodeableconcept-obs-it (preferred)

// => Gia presente nel profilo parent...

/* * valueCodeableConcept ^sliceName = "valueCodeableConcept"
* valueCodeableConcept ^binding.extension[0].extension[0].url = "purpose"
* valueCodeableConcept ^binding.extension[=].extension[=].valueCode = #candidate
* valueCodeableConcept ^binding.extension[=].extension[+].url = "valueSet"
* valueCodeableConcept ^binding.extension[=].extension[=].valueCanonical = $results-observation-bloodgroup
* valueCodeableConcept ^binding.extension[=].extension[+].url = "documentation"
* valueCodeableConcept ^binding.extension[=].extension[=].valueMarkdown = "Conformità aggiuntiva vincolante a un valuset di rilevazioni dei gruppi sanguigni per i valori dei risultati di laboratorio da SNOMED CT IPS per l'uso a livello globale (nelle giurisdizioni membri e non membri SNOMED)." 
* valueCodeableConcept ^binding.extension[=].url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"
* valueCodeableConcept ^binding.extension[+].extension[0].url = "purpose"
* valueCodeableConcept ^binding.extension[=].extension[=].valueCode = #candidate
* valueCodeableConcept ^binding.extension[=].extension[+].url = "valueSet"  
* valueCodeableConcept ^binding.extension[=].extension[=].valueCanonical = $results-presence-absence-snomed-ct-ips-free-set
* valueCodeableConcept ^binding.extension[=].extension[+].url = "documentation"  
* valueCodeableConcept ^binding.extension[=].extension[=].valueMarkdown = "Conformità aggiuntiva vincolante a un valuset di rilevazioni di presenza e assenza (valori qualificatori) per i valori dei risultati di laboratorio da SNOMED CT IPS per l'uso a livello globale (nelle giurisdizioni membri e non membri SNOMED)." 
* valueCodeableConcept ^binding.extension[=].url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"
* valueCodeableConcept ^binding.extension[+].extension[0].url = "purpose"
* valueCodeableConcept ^binding.extension[=].extension[=].valueCode = #candidate
* valueCodeableConcept ^binding.extension[=].extension[+].url = "valueSet"
* valueCodeableConcept ^binding.extension[=].extension[=].valueCanonical = $results-microorganism-snomed-ct-ips-free-set
* valueCodeableConcept ^binding.extension[=].extension[+].url = "documentation"
* valueCodeableConcept ^binding.extension[=].extension[=].valueMarkdown = "Conformità aggiuntiva vincolante a un valuset di rilevazioni di microrganismi per i valori dei risultati di laboratorio da SNOMED CT IPS per l'uso a livello globale (nelle giurisdizioni membri e non membri SNOMED)." 
* valueCodeableConcept ^binding.extension[=].url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding" */

/* Invariant: ita-lab-1
Description: "se  \"hasMember\" non è presente allora Observation deve avere un\" value\""
Severity: #error
Expression: "value.exists() or hasMember.exists()" */

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/organization-it-lab.fsh

Profile:  OrganizationRefertoLabIt
Parent:   Organization
Id:       organization-it-lab
Title:    "Organization - Lab Report"
Description: "Descrizione delle informazioni relative all'organizzazione tramite il profilo della risorsa Organization per il referto di laboratorio."
* . ^short = "Organization Referto di Laboratorio"
//-------------------------------------------------------------------------------------------
* insert SetFmmandStatusRule ( 1, trial-use)
* insert ImposeProfile($Organization-uv-ips)

* identifier  
* identifier ^short = "Identificativo dell'organizzazione."
* active ^short = "Indica se la risorsa è attiva."
* active	 
* type ^short = "Tipo di organizzazione."
* type	 
* type from $tipo-org (example) 
* name ^short = "Nome human-readable dell'organizzazione."
* name	 

Profile:  OrganizationOperatoreSanitarioRefertoLabIt
Parent:   OrganizationRefertoLabIt
Id:       organizationOperatore-it-lab
Title:    "Organization operatore sanitario/socio sanitario - Lab Report"
Description: "Descrizione delle informazioni relative all'operatore socio/sanitario tramite il profilo della risorsa Organization per il referto di laboratorio."
* . ^short = "Organization operatore sanitario/socio sanitario Referto di Laboratorio"

* identifier  
* identifier ^slicing.discriminator[0].type = #value
* identifier ^slicing.discriminator[0].path = "$this.system"
* identifier ^slicing.discriminator[1].type = #value
* identifier ^slicing.discriminator[1].path = "$this.value"
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Slice based on the identifier pattern"
* identifier.system 1..1  
* identifier.value 1..1  
* identifier contains 
	asl 0..1 
	and aslRegione 0..1
	and aziendaOspedaliera 0..1 
	and struttura 0..1 
	and partitaIva 0..1
	and codiceFiscale 0..1
	and strutturaInterna 0..1

* identifier[asl] ^short = "Identificativo Azienda Sanitaria Locale (FLS 11 - 6 char)"
* identifier[asl].system = "http://hl7.it/sid/fls" (exactly) // pattern

* identifier[asl].value from VsMinisteroSaluteAsl (required) //$asl

* identifier[aslRegione].system from VsUriIdAslRegione // pattern $asl
* identifier[aslRegione] ^short = "Identificativo Regionale Azienda Sanitaria Locale (FLS 11 - 3 char)"



* identifier[aziendaOspedaliera].system = "http://hl7.it/sid/hsp" (exactly)  // pattern
* identifier[aziendaOspedaliera] ^short = "Identificativo Azienda Ospedaliera"



* identifier[aziendaOspedaliera].value from VsMinisteroSaluteIdAziendeOspedaliere (required)
* identifier[struttura].system = "http://hl7.it/sid/hsp" (exactly) // pattern
* identifier[struttura] ^short = "Identificativo Struttura di Ricovero"
* identifier[struttura].value from VsMinisteroSaluteIdStrutture (required)
* identifier[strutturaInterna].system = "http://hl7.it/sid/hsp" (exactly) // pattern

* identifier[strutturaInterna].value from $minsan-idStruttureInterne (required)
* identifier[partitaIva].system = "http://hl7.it/sid/partitaIva" (exactly)  // pattern
* identifier[partitaIva] ^short = "Partita IVA Organizzazione"
* identifier[codiceFiscale].system = "http://hl7.it/sid/codiceFiscale" (exactly)  // pattern
* identifier[codiceFiscale] ^short = "Codice Fiscale Organizzazione"

* active	 
* type	 
* type from http://hl7.it/fhir/lab-report/ValueSet/tipoOrgSocioSanitaria (extensible)
* name	 

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/patient-it-lab.fsh

Profile: PatientRefertoLabIt
Parent: Patient
Id: patient-it-lab
Title: "Patient - Lab Report"
Description: "Descrizione delle informazioni del paziente nei documenti FHIR."
* . ^short = "Patient Referto di Laboratorio"

* insert SetFmmandStatusRule ( 1, trial-use)
* insert ImposeProfile ( $Patient-eu-lab )

* extension contains 
    BirthPlaceIta named luogoNascita 0..1 and 
    ExtRecordCertification named certificazione 0..1 and
    ExtCodeableBirthPlace named luogoNascitaCodeable 0..* and
    $patient-citizenship named cittadinanza 0..1 and
    ExtProfessionePaziente named professione 0..1 and
    ExtTitoloStudioPaziente named titoloStudio 0..1
* extension[luogoNascita] ^short = "Luogo di nascita." 
* extension[certificazione] ^short = "Indica che i dati presenti nella risorsa sono stati certificati da una specifica entità"
* extension[certificazione] ^definition = "Indica che i dati presenti nella risorsa (non quelli referenziati) sono stati certificati da una specifica entità"
* extension[luogoNascitaCodeable] ^binding.strength = #example
* extension[luogoNascitaCodeable] ^binding.valueSet = $istat-luogoNascita
* extension[luogoNascitaCodeable] ^short = "Codice del comune e/o dello stato di nascita"
* extension[luogoNascitaCodeable] ^definition = "Codice del comune e/o dello stato di nascita del paziente. In via eccezionle, può essere usato per indicare comune e/o stato di nascita in forma testuale"
* extension[cittadinanza] ^binding.strength = #example
* extension[cittadinanza] ^binding.valueSet = $istat-cittadinanza
* extension[cittadinanza] ^short = "Cittadinanza"
* extension[cittadinanza] ^definition = "Indica la cittadinanza del cittadino attraverso lo stato di provenienza"
* extension[professione] ^binding.strength = #preferred
* extension[professione] ^binding.valueSet = $istat-professione
* extension[professione] ^short = "Professione"
* extension[professione] ^definition = "Indica la professione del cittadino come semplice CodeableConcept"
* extension[professione] ^mustSupport = false
* extension[titoloStudio] ^binding.strength = #example
* extension[titoloStudio] ^binding.valueSet = $istat-titoloStudio
* extension[titoloStudio] ^short = "Titolo di studio"
* extension[titoloStudio] ^definition = "Indica il titolo di studio del cittadino come semplice CodeableConcept"
* extension[titoloStudio] ^mustSupport = false

* identifier  
* identifier 1..
* identifier.extension contains ExtRecordCertification named certificazioneId 0..1
* identifier.extension[certificazioneId] ^short = "Identificativo certificato (tipicamente per CF)"
* identifier.extension[certificazioneId] ^definition = "Indica che questo identificativo è stato certificato. Usato tipicamente per il Codice Fiscale."
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "$this.system"
* identifier ^slicing.rules = #open
* identifier ^short = "Identificativo del paziente."
* identifier.value 1..  
* identifier.value ^short = "ID del paziente (e.g. Codice Fiscale)."
* identifier.value ^definition = "Identifictivo del paziente."
* identifier.type from $tipoIdentificatore (extensible)
* identifier contains
    codiceFiscale 0..1   and
    anpr 0..1 and
    idRegionale 0..1 and
    codiceENI 0..1 and
    codiceANA 0..1 and
    tesseraTEAM 0..1 and
    codiceSTP 0..1
* identifier[codiceFiscale] ^short = "Codice Fiscale."
* identifier[codiceFiscale].system ^short = "Namespace per il valore dell'identifier."
* identifier[codiceFiscale].system 1..  
* identifier[codiceFiscale].system = $cf (exactly)
* identifier[codiceFiscale].value ^short = "Valore dell'identifier."
* identifier[codiceFiscale].value obeys pat-id-cf-1
* identifier[anpr] ^short = "Identificativo del paziente nell'Anagrafe nazionale della popolazione residente."
* identifier[anpr].system ^short = "Namespace per il valore dell'identifier."
* identifier[anpr].system 1..  
* identifier[anpr].system = $anpr
* identifier[idRegionale] ^short = "Identificativo Regionale."
* identifier[idRegionale].system ^short = "Namespace per il valore dell'identifier."
* identifier[idRegionale].system 1..  
* identifier[idRegionale].system from $uri-idRegionali (required)
* identifier[codiceENI] ^short = "Codice ENI."
* identifier[codiceENI].system ^short = "Namespace per il valore dell'identifier."
* identifier[codiceENI].system 1..  
* identifier[codiceENI].system from $uri-idEni (required)
* identifier[codiceANA] ^short = "Codice ANA."
* identifier[codiceANA].system ^short = "Namespace per il valore dell'identifier."
* identifier[codiceANA].system = "urn:oid:2.16.840.1.113883.2.9.4.3.15"
* identifier[codiceANA].system 1..  
* identifier[tesseraTEAM] ^short = "Tessera TEAM."
* identifier[tesseraTEAM].system ^short = "Namespace per il valore dell'identifier."
* identifier[tesseraTEAM].system = "urn:oid:2.16.840.1.113883.2.9.4.3.7"
* identifier[tesseraTEAM].system 1..  
* identifier[codiceSTP] ^short = "Codice STP." 
* identifier[codiceSTP].system ^short = "Namespace per il valore dell'identifier."
* identifier[codiceSTP].system 1..  
* identifier[codiceSTP].system from $uri-idStp (required)
* name 1..  
* name.family  
* name.given 
* name obeys it-pat-name-1
* name ^short = "Nome associato al paziente."

* telecom  
* gender  
* birthDate 1..

* address only AddressItBase
* managingOrganization ^short = "Organizzazione a cui è lasciata la custodia del dei dati del paziente."
* managingOrganization only Reference(OrganizationRefertoLabIt)
* address only AddressItBase
  
* generalPractitioner ^slicing.discriminator.type = #profile
* generalPractitioner ^slicing.discriminator.path = "$this.resolve()"
* generalPractitioner ^slicing.rules = #open
* generalPractitioner ^short = "Principale fornitore di cure del paziente."
* generalPractitioner contains
    mmgPlsRole 0..*   and
    mmgPls 0..*   and
    aziendaAssistenza 0..*  
* generalPractitioner[mmgPlsRole] only Reference(PractitionerRoleMMGPLSRefertoLabIt)
* generalPractitioner[mmgPlsRole] ^short = "Reference al ruolo MMG/PLS."
* generalPractitioner[mmgPls] ^short = "Reference al MMG/PLS."
* generalPractitioner[mmgPls] only Reference(PractitionerRefertoLabIt)
* generalPractitioner[aziendaAssistenza] ^short = "Reference all'azienda che assiste il paziente."
* generalPractitioner[aziendaAssistenza] only Reference(OrganizationOperatoreSanitarioRefertoLabIt)


Invariant: pat-id-cf-1
Description: "Il Codice Fiscale deve essere di 16 caratteri alfanumerici (3 per il cognome; 3 per il nome; 2 caratteri numerici per l'anno di nascita; 1 per il mese di nascita; 2 caratteri numerici per il giorno di nascita ed il sesso; 4 associati al Comune oppure allo Stato estero di nascita. 1 carattere di controllo."
Severity: #error
Expression: "matches('^[A-Za-z]{6}[0-9LMNPQRSTUV]{2}[A-Za-z]{1}[0-9LMNPQRSTUV]{2}[A-Za-z]{1}[0-9LMNPQRSTUV]{3}[A-Za-z]{1}$')"
XPath: "matches(@value,'^[A-Za-z]{6}[0-9LMNPQRSTUV]{2}[A-Za-z]{1}[0-9LMNPQRSTUV]{2}[A-Za-z]{1}[0-9LMNPQRSTUV]{3}[A-Za-z]{1}$')"

Invariant: it-pat-name-1
Description: "Il nome deve contenere almeno una delle aprti che compongono il nome (nome, cognome)"
Severity: #warning
Expression: "family.exists() or given.exists()"
XPath: "f:given or f:family"


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/practitioner-it-lab.fsh

Profile:  PractitionerRefertoLabIt
Parent:   Practitioner
Id:       practitioner-it-lab
Title:    "Practitioner - Lab Report"
Description: "Descrizione dei dati del professionista sanitario tramite il profilo della risorsa Practitioner per il referto di laboratorio."
* . ^short = "Practitioner Referto di Laboratorio"
* insert SetFmmandStatusRule ( 1, trial-use)
* insert ImposeProfile($Practitioner-eu-lab)
//-------------------------------------------------------------------------------------------
* identifier 
* identifier ^short = "Identificativo dell'operatore sanitario" 
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = "$this"
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Slice based on the identifier pattern"
* identifier contains codiceFiscale  0..1
* identifier[codiceFiscale]
* identifier[codiceFiscale] ^short = "Codice fiscale dell'operatore sanitario."
* identifier[codiceFiscale] ^patternIdentifier.system = "http://hl7.it/sid/codiceFiscale" 
* name 1..*
* name ^short = "Nome dell'operatore sanitario: include le informazioni minime per descrivere un operatore sanitario"

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/practitionerrole-it-lab.fsh

Profile: PractitionerRoleRefertoLabIt
Parent: PractitionerRole
Id: practitionerrole-it-lab

Title: "PractitionerRole - Lab Report"

Description: "Descrizione delle informazioni relative al ruolo del professionista sanitario tramite il profilo della risorsa PractitionerRole per il referto di laboratorio."

* . ^short = "PractitionerRole Referto di Laboratorio"

* insert SetFmmandStatusRule ( 1, trial-use)
* insert ImposeProfile($PractitionerRole-eu-lab)

* identifier ^short = "Identificativo dell'operatore (e.g. Codice Fiscale, ID Regionale)"
* period ^short = "Il periodo durante il quale il professionista è autorizzato a svolgere questi ruolo/i."


* practitioner ^short = "Professionista coinvolto nel processo di cura."
* practitioner only Reference(PractitionerRefertoLabIt)

* organization ^short = "Organizzazione cui il professionista fa parte."
* organization only Reference(OrganizationRefertoLabIt)
* code from $practitionerrole-code-lab-it (example)
* code ^short = "Ruolo/i del professionista."

Profile: PractitionerRoleMMGPLSRefertoLabIt
Parent: PractitionerRoleRefertoLabIt
Id: practitionerrole-MMGPLS-it-lab
Title: "PractitionerRole MMG/PLS - Lab Report"
Description: "Descrizione delle informazioni del MMG/PLS tramite il profilo della risorsa PractitionerRole per il referto di laboratorio."
* . ^short = "PractitionerRole MMG/PLS Referto di Laboratorio"
* code from $MMG-PLS-code-lab-it (required)
* code ^short = "Ruolo/i del professionista."
* organization only Reference(organizationOperatore-it-lab)

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/quantity-it-lab.fsh

Profile: QuantityLab
Parent: $Quantity-eu-lab 
Id: quantity-it-lab
Title: "Quantity - Lab Report"
Description: "Descrizione del valore ottenuto da una misurazione."

* insert SetFmmandStatusRule ( 1, trial-use)
* unit ^short = "Descrizione testuale dell'unità di misura."
* code 1..
* code from $ucum-valueset (required) 
* code ^short = "Descrizione codificata dell'unità di misura secondo UCUM."
* system = $ucum (exactly)
* value ^short = "Valore della misurazione."


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/servicerequest-it-lab.fsh

Profile: ServiceRequestRefertoLabIt 
Parent: $ServiceRequest-eu-lab  
Id: servicerequest-it-lab
Title: "ServiceRequest - Lab Report"
Description: "Descrizione delle informazioni della prescrizione tramite il profilo della risorsa ServiceRequest per il referto di laboratorio."
* . ^short = "ServiceRequest Referto di Laboratorio"

* insert SetFmmandStatusRule ( 1, trial-use)
* code 1..
* code from LabOrderCodes (preferred)

* identifier ^short = "Identificativo assegnato all'ordine."
* identifier 1..*  
* priority ^short = "Descrizione attributo: Priorità della richiesta. Possibili valori: routine | urgent | asap | stat"
* priority from http://hl7.org/fhir/ValueSet/request-priority (required) //mettere il nostro DEMA

* subject 1..
* subject ^short = "Soggetto cui si riferisce la richiesta."
* subject only Reference(PatientRefertoLabIt)


* requisition ^short = "Idenificativo comune a più ServiceRequest autorizzate simultaneamente. Rappresenta l'identificativo univoco della richiesta."
* quantity[x] ^short = "Molteplicità della prestazione."
* authoredOn ^short = "Data di invio della richiesta."
* reasonCode ^short = "Quesito diagnostico associato alla richiesta."
* specimen ^short = "Reference usata solo se il campione cui punta la richiesta è già stato prelevato ed esiste."
* specimen only Reference(SpecimenRefertoLabIt)
* intent ^short = "Descrizione attributo: Indica lo scopo associato ad una richiesta. Possibili valori: proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option"
* intent from  $intent-code

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/specimen-it-lab.fsh

Profile: SpecimenRefertoLabIt
Parent: $Specimen-eu-lab
Id: specimen-it-lab
Title: "Specimen - Lab Report"
Description: "Descrizione delle informazioni del campione tramite il profilo della risorsa Specimen per il referto di laboratorio."

* insert SetFmmandStatusRule ( 1, trial-use)
* . ^short = "Campione Referto di Laboratorio"
* . ^definition = "Campione Referto di Laboratorio"
* type from VsTipoCampione (preferred)
* type 1..1
* type ^short = "Tipo di campione."
* identifier ^short = "Identificativo esterno del campione (identificativo locale al LIS)"
* collection.bodySite from http://hl7.org/fhir/ValueSet/body-site (preferred)
* collection.bodySite ^short = "Sito anatomico di prelievo del campione."
* processing.additive only Reference(SpecimenAdditiveSubstanceRefertoLabIt)
* processing.additive ^short = "Additivo."
* container.type from $campione-container-lab-it (preferred)
* container.type ^short = "Tipo di dispositivo utilizzato per il contenere il campione."


* subject ^short = "Soggetto da cui è stato prelevato il campione."
* subject only Reference(PatientRefertoLabIt)


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/profiles/substance-additive-specimen-it-lab.fsh

Profile: SpecimenAdditiveSubstanceRefertoLabIt
Parent: $Substance-additive-specimen-it-lab // Substance
Id: substance-additive-specimen-it-lab
Title: "Substance (specimen additive) - Lab Report"
Description: "Descrizione dell'additivo usato sul campione tramite il profilo della risorsa Substance per il referto di laboratorio."
* insert SetFmmandStatusRule ( 1, trial-use)
* . ^short = "Substance Referto di Laboratorio"
* code ^short = "Sostanza additiva."
* code from additivo-campione-it (preferred)

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/ruleSets/ruleSet-lab.fsh

RuleSet: ImposeProfile ( profile )
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-imposeProfile].valueCanonical = {profile}


RuleSet: SetFmmandStatusRule ( fmm, status )
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = {fmm}
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status].valueCode = #{status}

RuleSet: ReportTypeRule (element)
* {element} 1..
  * ^short = "Referto di Laboratorio"
  * ^definition = "Specifica che il documento è un Referto di Laboratorio"
  * ^comment = "DiagnosticReport.code e Composition.type devono essere allineati."

RuleSet: ReportCategoryRule
* category 
  * ^short = "Report Category"
  * ^definition = "Specifies the Report Category: usually Laboratory"
  * ^comment = "DiagnosticReport.category e Composition.category  devono essere allineati."
* category[studyType]
* category[specialty]


RuleSet: ReportAuthorRule
* ^short = "Chi e/o cosa è l'autore del referto di laboratorio."
* ^definition = "Identifies who is responsible for the information in the Laboratory Report, not necessarily who typed it in."
* ^comment = "Se DiagnosticReport.resultsInterpreter esiste, anche Composition.author deve essere valorizzato. Altrimenti DiagnosticReport.performer dovrebbe essere un autore."

RuleSet: ReportStatusRule
* status 
  * ^short = "Stato del Referto" 
  * ^comment = "DiagnosticReport.status e Composition.status devono essere coerenti, vedi http://hl7.eu/fhir/laboratory/ConceptMap/ConceptMap-eu-diagRptStatus2CompStatus per il mapping."


RuleSet: ReportEncounterRule
* encounter only Reference (EncounterRefertoLabIt) 
  * ^short = "Evento sanitario a cui si riferisce il Referto di Laboratorio (es. al momento della prescrizione)."
  * ^definition = """Evento sanitario a cui si riferisce il Referto di Laboratorio (es. al momento della prescrizione)."""
  * ^comment = """This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission laboratory tests).
  DiagnosticReport e Composition devono referenziare lo stesso encounter.
  """ 
  
RuleSet: ReportSubjectRule
* subject 1..
* subject only Reference (PatientRefertoLabIt)
  * ^short = "Who and/or what this report is about"
  * ^definition = "Who or what this report is about. The report can be about a human patient, a living subject, a device (e.g. a machine), a location or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure)."
  * ^comment = "DiagnosticReport e Composition devono avere lo stesso subject"
  
RuleSet: ReportIdentifierRule
* identifier 1..1
  * ^short = "Identificativo indipendente dalla versione." 
  * ^definition = "Identifiers assigned to this Laboratory Report by the performer or other systems. It shall be common to several report versions"
  * ^comment = "Composition.identifier DEVE essere uguale ad uno dei DiagnosticReport.identifier, se ne esiste almeno uno."


RuleSet: LOINCCopyrightForVS
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* ^experimental = false

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/ruleSets/rulesets.fsh

RuleSet: SNOMEDCopyrightForVS
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* ^experimental = false

// RuleSet: LOINCCopyrightForVS
// * ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
// * ^experimental = false

RuleSet: ATCCopyrightForVS
* ^copyright =  "This artifact includes content from Anatomical Therapeutic Chemical (ATC) classification system. ATC codes are copyright World Health Organization (WHO) Collaborating Centre for Drug Statistics Methodology. Terms & Conditions in https://www.whocc.no/use_of_atc_ddd/"
* ^experimental = false

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/valuesets/comuniProvinceStati.fsh

ValueSet: VsIstatStato
Id: istat-stato
Title: "ISTAT - Stati"
Description: "ISTAT - Stati"
* ^experimental = false
//----------------------------------------
* $CS_Estero#100 "Italia"
* $CS_Estero#201 "Albania"
* $CS_Estero#202 "Andorra"
* $CS_Estero#203 "Austria"
* $CS_Estero#206 "Belgio"
* $CS_Estero#209 "Bulgaria"
* $CS_Estero#212 "Danimarca"
* $CS_Estero#214 "Finlandia"
* $CS_Estero#215 "Francia"
* $CS_Estero#216 "Germania"
* $CS_Estero#219 "Regno Unito"
* $CS_Estero#220 "Grecia"
* $CS_Estero#221 "Irlanda"
* $CS_Estero#223 "Islanda"
* $CS_Estero#225 "Liechtenstein"
* $CS_Estero#226 "Lussemburgo"
* $CS_Estero#227 "Malta"
* $CS_Estero#229 "Monaco"
* $CS_Estero#231 "Norvegia"
* $CS_Estero#232 "Paesi Bassi"
* $CS_Estero#233 "Polonia"
* $CS_Estero#234 "Portogallo"
* $CS_Estero#235 "Romania"
* $CS_Estero#236 "San Marino"
* $CS_Estero#239 "Spagna"
* $CS_Estero#240 "Svezia"
* $CS_Estero#241 "Svizzera"
* $CS_Estero#243 "Ucraina"
* $CS_Estero#244 "Ungheria"
* $CS_Estero#245 "Federazione russa"
* $CS_Estero#246 "Stato della Città del Vaticano"
* $CS_Estero#247 "Estonia"
* $CS_Estero#248 "Lettonia"
* $CS_Estero#249 "Lituania"
* $CS_Estero#250 "Croazia"
* $CS_Estero#251 "Slovenia"
* $CS_Estero#252 "Bosnia-Erzegovina"
* $CS_Estero#253 "Macedonia del Nord"
* $CS_Estero#254 "Moldova"
* $CS_Estero#255 "Slovacchia"
* $CS_Estero#256 "Bielorussia"
* $CS_Estero#257 "Repubblica ceca"
* $CS_Estero#270 "Montenegro"
* $CS_Estero#271 "Serbia"
* $CS_Estero#272 "Kosovo"
* $CS_Estero#301 "Afghanistan"
* $CS_Estero#302 "Arabia Saudita"
* $CS_Estero#304 "Bahrein"
* $CS_Estero#305 "Bangladesh"
* $CS_Estero#306 "Bhutan"
* $CS_Estero#307 "Myanmar/Birmania"
* $CS_Estero#309 "Brunei Darussalam"
* $CS_Estero#310 "Cambogia"
* $CS_Estero#311 "Sri Lanka"
* $CS_Estero#314 "Cina"
* $CS_Estero#315 "Cipro"
* $CS_Estero#319 "Corea del Nord"
* $CS_Estero#320 "Corea del Sud"
* $CS_Estero#322 "Emirati Arabi Uniti"
* $CS_Estero#323 "Filippine"
* $CS_Estero#324 "Palestina"
* $CS_Estero#326 "Giappone"
* $CS_Estero#327 "Giordania"
* $CS_Estero#330 "India"
* $CS_Estero#331 "Indonesia"
* $CS_Estero#332 "Iran"
* $CS_Estero#333 "Iraq"
* $CS_Estero#334 "Israele"
* $CS_Estero#335 "Kuwait"
* $CS_Estero#336 "Laos"
* $CS_Estero#337 "Libano"
* $CS_Estero#338 "Timor Leste"
* $CS_Estero#339 "Maldive"
* $CS_Estero#340 "Malaysia"
* $CS_Estero#341 "Mongolia"
* $CS_Estero#342 "Nepal"
* $CS_Estero#343 "Oman"
* $CS_Estero#344 "Pakistan"
* $CS_Estero#345 "Qatar"
* $CS_Estero#346 "Singapore"
* $CS_Estero#348 "Siria"
* $CS_Estero#349 "Thailandia"
* $CS_Estero#351 "Turchia"
* $CS_Estero#353 "Vietnam"
* $CS_Estero#354 "Yemen"
* $CS_Estero#356 "Kazakhstan"
* $CS_Estero#357 "Uzbekistan"
* $CS_Estero#358 "Armenia"
* $CS_Estero#359 "Azerbaigian"
* $CS_Estero#360 "Georgia"
* $CS_Estero#361 "Kirghizistan"
* $CS_Estero#362 "Tagikistan"
* $CS_Estero#363 "Taiwan"
* $CS_Estero#364 "Turkmenistan"
* $CS_Estero#401 "Algeria"
* $CS_Estero#402 "Angola"
* $CS_Estero#404 "Costa d'Avorio"
* $CS_Estero#406 "Benin"
* $CS_Estero#408 "Botswana"
* $CS_Estero#409 "Burkina Faso"
* $CS_Estero#410 "Burundi"
* $CS_Estero#411 "Camerun"
* $CS_Estero#413 "Capo Verde"
* $CS_Estero#414 "Repubblica Centrafricana"
* $CS_Estero#415 "Ciad"
* $CS_Estero#417 "Comore"
* $CS_Estero#418 "Congo"
* $CS_Estero#419 "Egitto"
* $CS_Estero#420 "Etiopia"
* $CS_Estero#421 "Gabon"
* $CS_Estero#422 "Gambia"
* $CS_Estero#423 "Ghana"
* $CS_Estero#424 "Gibuti"
* $CS_Estero#425 "Guinea"
* $CS_Estero#426 "Guinea-Bissau"
* $CS_Estero#427 "Guinea equatoriale"
* $CS_Estero#428 "Kenya"
* $CS_Estero#429 "Lesotho"
* $CS_Estero#430 "Liberia"
* $CS_Estero#431 "Libia"
* $CS_Estero#432 "Madagascar"
* $CS_Estero#434 "Malawi"
* $CS_Estero#435 "Mali"
* $CS_Estero#436 "Marocco"
* $CS_Estero#437 "Mauritania"
* $CS_Estero#438 "Maurizio"
* $CS_Estero#440 "Mozambico"
* $CS_Estero#441 "Namibia"
* $CS_Estero#442 "Niger"
* $CS_Estero#443 "Nigeria"
* $CS_Estero#446 "Ruanda"
* $CS_Estero#448 "Sao Tomé e Principe"
* $CS_Estero#449 "Seychelles"
* $CS_Estero#450 "Senegal"
* $CS_Estero#451 "Sierra Leone"
* $CS_Estero#453 "Somalia"
* $CS_Estero#454 "Sudafrica"
* $CS_Estero#455 "Sudan"
* $CS_Estero#456 "Eswatini"
* $CS_Estero#457 "Tanzania"
* $CS_Estero#458 "Togo"
* $CS_Estero#460 "Tunisia"
* $CS_Estero#461 "Uganda"
* $CS_Estero#463 "Repubblica Democratica del Congo"
* $CS_Estero#464 "Zambia"
* $CS_Estero#465 "Zimbabwe"
* $CS_Estero#466 "Eritrea"
* $CS_Estero#467 "Sud Sudan"
* $CS_Estero#503 "Antigua e Barbuda"
* $CS_Estero#505 "Bahamas"
* $CS_Estero#506 "Barbados"
* $CS_Estero#507 "Belize"
* $CS_Estero#509 "Canada"
* $CS_Estero#513 "Costa Rica"
* $CS_Estero#514 "Cuba"
* $CS_Estero#515 "Dominica"
* $CS_Estero#516 "Repubblica Dominicana"
* $CS_Estero#517 "El Salvador"
* $CS_Estero#518 "Giamaica"
* $CS_Estero#519 "Grenada"
* $CS_Estero#523 "Guatemala"
* $CS_Estero#524 "Haiti"
* $CS_Estero#525 "Honduras"
* $CS_Estero#527 "Messico"
* $CS_Estero#529 "Nicaragua"
* $CS_Estero#530 "Panama"
* $CS_Estero#532 "Santa Lucia"
* $CS_Estero#533 "Saint Vincent e Grenadine"
* $CS_Estero#534 "Saint Kitts e Nevis"
* $CS_Estero#536 "Stati Uniti d'America"
* $CS_Estero#602 "Argentina"
* $CS_Estero#604 "Bolivia"
* $CS_Estero#605 "Brasile"
* $CS_Estero#606 "Cile"
* $CS_Estero#608 "Colombia"
* $CS_Estero#609 "Ecuador"
* $CS_Estero#612 "Guyana"
* $CS_Estero#614 "Paraguay"
* $CS_Estero#615 "Perù"
* $CS_Estero#616 "Suriname"
* $CS_Estero#617 "Trinidad e Tobago"
* $CS_Estero#618 "Uruguay"
* $CS_Estero#619 "Venezuela"
* $CS_Estero#701 "Australia"
* $CS_Estero#703 "Figi"
* $CS_Estero#708 "Kiribati"
* $CS_Estero#712 "Isole Marshall"
* $CS_Estero#713 "Stati Federati di Micronesia"
* $CS_Estero#715 "Nauru"
* $CS_Estero#719 "Nuova Zelanda"
* $CS_Estero#720 "Palau"
* $CS_Estero#721 "Papua Nuova Guinea"
* $CS_Estero#725 "Isole Salomone"
* $CS_Estero#727 "Samoa"
* $CS_Estero#730 "Tonga"
* $CS_Estero#731 "Tuvalu"
* $CS_Estero#732 "Vanuatu"
* $CS_Estero#902 "Nuova Caledonia"
* $CS_Estero#904 "Saint-Martin (FR)"
* $CS_Estero#905 "Sahara occidentale"
* $CS_Estero#906 "Saint-Barthélemy"
* $CS_Estero#908 "Bermuda"
* $CS_Estero#909 "Isole Cook (NZ)"
* $CS_Estero#910 "Gibilterra"
* $CS_Estero#911 "Isole Cayman"
* $CS_Estero#917 "Anguilla"
* $CS_Estero#920 "Polinesia francese"
* $CS_Estero#924 "Isole Fær Øer"
* $CS_Estero#925 "Jersey"
* $CS_Estero#926 "Aruba"
* $CS_Estero#928 "Sint Maarten (NL)"
* $CS_Estero#934 "Groenlandia"
* $CS_Estero#939 "Sark"
* $CS_Estero#940 "Guernsey"
* $CS_Estero#958 "Isole Falkland (Malvine)"
* $CS_Estero#959 "Isola di Man"
* $CS_Estero#964 "Montserrat"
* $CS_Estero#966 "Curaçao"
* $CS_Estero#972 "Isole Pitcairn"
* $CS_Estero#980 "Saint Pierre e Miquelon"
* $CS_Estero#983 "Sant'Elena"
* $CS_Estero#988 "Terre australi e antartiche francesi"
* $CS_Estero#992 "Isole Turks e Caicos"
* $CS_Estero#994 "Isole Vergini britanniche"
* $CS_Estero#997 "Wallis e Futuna"
* $CS_Estero#998 "Altro/Non indicato/In corso di definizione"




ValueSet: VsIstatCittadinanza
Id: istat-cittadinanza
Title: "ISTAT - Cittadinanza"
Description: "ISTAT - Cittadinanza"
* ^experimental = false
//----------------------------------------
* $CS_Estero#100 "Italia"
* $CS_Estero#201 "Albania"
* $CS_Estero#202 "Andorra"
* $CS_Estero#203 "Austria"
* $CS_Estero#206 "Belgio"
* $CS_Estero#209 "Bulgaria"
* $CS_Estero#212 "Danimarca"
* $CS_Estero#214 "Finlandia"
* $CS_Estero#215 "Francia"
* $CS_Estero#216 "Germania"
* $CS_Estero#219 "Regno Unito"
* $CS_Estero#220 "Grecia"
* $CS_Estero#221 "Irlanda"
* $CS_Estero#223 "Islanda"
* $CS_Estero#225 "Liechtenstein"
* $CS_Estero#226 "Lussemburgo"
* $CS_Estero#227 "Malta"
* $CS_Estero#229 "Monaco"
* $CS_Estero#231 "Norvegia"
* $CS_Estero#232 "Paesi Bassi"
* $CS_Estero#233 "Polonia"
* $CS_Estero#234 "Portogallo"
* $CS_Estero#235 "Romania"
* $CS_Estero#236 "San Marino"
* $CS_Estero#239 "Spagna"
* $CS_Estero#240 "Svezia"
* $CS_Estero#241 "Svizzera"
* $CS_Estero#243 "Ucraina"
* $CS_Estero#244 "Ungheria"
* $CS_Estero#245 "Federazione russa"
* $CS_Estero#246 "Stato della Città del Vaticano"
* $CS_Estero#247 "Estonia"
* $CS_Estero#248 "Lettonia"
* $CS_Estero#249 "Lituania"
* $CS_Estero#250 "Croazia"
* $CS_Estero#251 "Slovenia"
* $CS_Estero#252 "Bosnia-Erzegovina"
* $CS_Estero#253 "Macedonia del Nord"
* $CS_Estero#254 "Moldova"
* $CS_Estero#255 "Slovacchia"
* $CS_Estero#256 "Bielorussia"
* $CS_Estero#257 "Repubblica ceca"
* $CS_Estero#270 "Montenegro"
* $CS_Estero#271 "Serbia"
* $CS_Estero#272 "Kosovo"
* $CS_Estero#301 "Afghanistan"
* $CS_Estero#302 "Arabia Saudita"
* $CS_Estero#304 "Bahrein"
* $CS_Estero#305 "Bangladesh"
* $CS_Estero#306 "Bhutan"
* $CS_Estero#307 "Myanmar/Birmania"
* $CS_Estero#309 "Brunei Darussalam"
* $CS_Estero#310 "Cambogia"
* $CS_Estero#311 "Sri Lanka"
* $CS_Estero#314 "Cina"
* $CS_Estero#315 "Cipro"
* $CS_Estero#319 "Corea del Nord"
* $CS_Estero#320 "Corea del Sud"
* $CS_Estero#322 "Emirati Arabi Uniti"
* $CS_Estero#323 "Filippine"
* $CS_Estero#324 "Palestina"
* $CS_Estero#326 "Giappone"
* $CS_Estero#327 "Giordania"
* $CS_Estero#330 "India"
* $CS_Estero#331 "Indonesia"
* $CS_Estero#332 "Iran"
* $CS_Estero#333 "Iraq"
* $CS_Estero#334 "Israele"
* $CS_Estero#335 "Kuwait"
* $CS_Estero#336 "Laos"
* $CS_Estero#337 "Libano"
* $CS_Estero#338 "Timor Leste"
* $CS_Estero#339 "Maldive"
* $CS_Estero#340 "Malaysia"
* $CS_Estero#341 "Mongolia"
* $CS_Estero#342 "Nepal"
* $CS_Estero#343 "Oman"
* $CS_Estero#344 "Pakistan"
* $CS_Estero#345 "Qatar"
* $CS_Estero#346 "Singapore"
* $CS_Estero#348 "Siria"
* $CS_Estero#349 "Thailandia"
* $CS_Estero#351 "Turchia"
* $CS_Estero#353 "Vietnam"
* $CS_Estero#354 "Yemen"
* $CS_Estero#356 "Kazakhstan"
* $CS_Estero#357 "Uzbekistan"
* $CS_Estero#358 "Armenia"
* $CS_Estero#359 "Azerbaigian"
* $CS_Estero#360 "Georgia"
* $CS_Estero#361 "Kirghizistan"
* $CS_Estero#362 "Tagikistan"
* $CS_Estero#363 "Taiwan"
* $CS_Estero#364 "Turkmenistan"
* $CS_Estero#401 "Algeria"
* $CS_Estero#402 "Angola"
* $CS_Estero#404 "Costa d'Avorio"
* $CS_Estero#406 "Benin"
* $CS_Estero#408 "Botswana"
* $CS_Estero#409 "Burkina Faso"
* $CS_Estero#410 "Burundi"
* $CS_Estero#411 "Camerun"
* $CS_Estero#413 "Capo Verde"
* $CS_Estero#414 "Repubblica Centrafricana"
* $CS_Estero#415 "Ciad"
* $CS_Estero#417 "Comore"
* $CS_Estero#418 "Congo"
* $CS_Estero#419 "Egitto"
* $CS_Estero#420 "Etiopia"
* $CS_Estero#421 "Gabon"
* $CS_Estero#422 "Gambia"
* $CS_Estero#423 "Ghana"
* $CS_Estero#424 "Gibuti"
* $CS_Estero#425 "Guinea"
* $CS_Estero#426 "Guinea-Bissau"
* $CS_Estero#427 "Guinea equatoriale"
* $CS_Estero#428 "Kenya"
* $CS_Estero#429 "Lesotho"
* $CS_Estero#430 "Liberia"
* $CS_Estero#431 "Libia"
* $CS_Estero#432 "Madagascar"
* $CS_Estero#434 "Malawi"
* $CS_Estero#435 "Mali"
* $CS_Estero#436 "Marocco"
* $CS_Estero#437 "Mauritania"
* $CS_Estero#438 "Maurizio"
* $CS_Estero#440 "Mozambico"
* $CS_Estero#441 "Namibia"
* $CS_Estero#442 "Niger"
* $CS_Estero#443 "Nigeria"
* $CS_Estero#446 "Ruanda"
* $CS_Estero#448 "Sao Tomé e Principe"
* $CS_Estero#449 "Seychelles"
* $CS_Estero#450 "Senegal"
* $CS_Estero#451 "Sierra Leone"
* $CS_Estero#453 "Somalia"
* $CS_Estero#454 "Sudafrica"
* $CS_Estero#455 "Sudan"
* $CS_Estero#456 "Eswatini"
* $CS_Estero#457 "Tanzania"
* $CS_Estero#458 "Togo"
* $CS_Estero#460 "Tunisia"
* $CS_Estero#461 "Uganda"
* $CS_Estero#463 "Repubblica Democratica del Congo"
* $CS_Estero#464 "Zambia"
* $CS_Estero#465 "Zimbabwe"
* $CS_Estero#466 "Eritrea"
* $CS_Estero#467 "Sud Sudan"
* $CS_Estero#503 "Antigua e Barbuda"
* $CS_Estero#505 "Bahamas"
* $CS_Estero#506 "Barbados"
* $CS_Estero#507 "Belize"
* $CS_Estero#509 "Canada"
* $CS_Estero#513 "Costa Rica"
* $CS_Estero#514 "Cuba"
* $CS_Estero#515 "Dominica"
* $CS_Estero#516 "Repubblica Dominicana"
* $CS_Estero#517 "El Salvador"
* $CS_Estero#518 "Giamaica"
* $CS_Estero#519 "Grenada"
* $CS_Estero#523 "Guatemala"
* $CS_Estero#524 "Haiti"
* $CS_Estero#525 "Honduras"
* $CS_Estero#527 "Messico"
* $CS_Estero#529 "Nicaragua"
* $CS_Estero#530 "Panama"
* $CS_Estero#532 "Santa Lucia"
* $CS_Estero#533 "Saint Vincent e Grenadine"
* $CS_Estero#534 "Saint Kitts e Nevis"
* $CS_Estero#536 "Stati Uniti d'America"
* $CS_Estero#602 "Argentina"
* $CS_Estero#604 "Bolivia"
* $CS_Estero#605 "Brasile"
* $CS_Estero#606 "Cile"
* $CS_Estero#608 "Colombia"
* $CS_Estero#609 "Ecuador"
* $CS_Estero#612 "Guyana"
* $CS_Estero#614 "Paraguay"
* $CS_Estero#615 "Perù"
* $CS_Estero#616 "Suriname"
* $CS_Estero#617 "Trinidad e Tobago"
* $CS_Estero#618 "Uruguay"
* $CS_Estero#619 "Venezuela"
* $CS_Estero#701 "Australia"
* $CS_Estero#703 "Figi"
* $CS_Estero#708 "Kiribati"
* $CS_Estero#712 "Isole Marshall"
* $CS_Estero#713 "Stati Federati di Micronesia"
* $CS_Estero#715 "Nauru"
* $CS_Estero#719 "Nuova Zelanda"
* $CS_Estero#720 "Palau"
* $CS_Estero#721 "Papua Nuova Guinea"
* $CS_Estero#725 "Isole Salomone"
* $CS_Estero#727 "Samoa"
* $CS_Estero#730 "Tonga"
* $CS_Estero#731 "Tuvalu"
* $CS_Estero#732 "Vanuatu"
* $CS_Estero#905 "Sahara occidentale"
* $CS_Estero#926 "Aruba"
* $CS_Estero#928 "Sint Maarten (NL)"
* $CS_Estero#966 "Curaçao"
* $CS_Estero#888 "Non cittadini riconosciuti"
* $CS_Estero#998 "Altro/Non indicato/In corso di definizione"
* $CS_Estero#999 "Apolide"



ValueSet: VsIstatComune
Id: istat-comune
Title: "ISTAT - Comuni"
Description: "ISTAT - Comuni più sconosciuto"
* ^experimental = false
//----------------------------------------
* include codes from system $istatUnitaAmministrativeTerritoriali  
* codes from system $CS_unitaTerritoriali
* $v3-NullFlavor#UNK "Sconosciuto"

ValueSet: VsIstatProvincia
Id: istat-provincia
Title: "ISTAT - Province"
Description: "ISTAT - Province più sconosciuto"
* ^experimental = false
//----------------------------------------
* $v3-NullFlavor#UNK "Sconosciuto"
* codes from system CsProvinceISTAT


ValueSet: VsIstatLuogoNascita
Id: istat-luogoNascita
Title: "ISTAT - Comune/Stato di Nascita"
Description: "ISTAT - Comune/Stato di Nascita"
* ^experimental = false
//----------------------------------------
* include codes from valueset VsIstatStato
* include codes from valueset VsIstatComune

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/valuesets/lab-order-codes.fsh

ValueSet: LabOrderCodes
Id: lab-orderCodes-it-lab
Title: "Codice Richiesta esame di Laboratorio [LOINC]"
Description: "Codice della richiesta per un esame di Laboratorio."


* insert LOINCCopyrightForVS
* insert SetFmmandStatusRule (1, trial-use)
* include codes from system $loinc and valueset $results-laboratory-observations-uv-ips where ORDER_OBS = "Order"
* include codes from system $loinc and valueset $results-laboratory-observations-uv-ips where ORDER_OBS = "Both"

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/valuesets/status-code.fsh

Alias: $cs-observation-code = http://hl7.org/fhir/observation-status
ValueSet:      ObservationStatusCodeLabReport
Id:	       valueset-status-obs-it
Title:	       "Observation status code"
Description:   "Valueset contenente i codici di di stato per la risorsa Observation Document - Lab Report."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* ^experimental = false
* include codes from system $cs-observation-code 
* exclude $cs-observation-code#registered
* exclude $cs-observation-code#cancelled
* exclude $cs-observation-code#unknown
* exclude $cs-observation-code#entered-in-error


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/valuesets/Valuesets_Terminology.fsh

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ValueSet: VsIcd9cm
Id: who-icd9cm
Title: "WHO ICD-9-CM"
Description: "WHO ICD-9-CM"
* ^experimental = false
//-------------------------------------------------------------------------------------------
* codes from system $icd-9-cm

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ValueSet: VsNotaAifa
// Id: aifa-nota
// Title: "AIFA Note"
// Description: "AIFA - Indicazioni terapeutiche per un determinato farmaco rimborsabile dal Servizio Sanitario Nazionale"
// //-------------------------------------------------------------------------------------------
// * ^experimental = false
// * codes from system $aifa-nota

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ValueSet: VsAic
Id: aifa-aic
Title: "AIFA AIC"
Description: "AIFA - Codice identificativo dei medicinali ad uso umano"
//-------------------------------------------------------------------------------------------
* ^experimental = false
* codes from system $aic

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ValueSet: VsAtc
// Id: who-atc
// Title: "WHO ATC"
// Description: "Sistema di classificazione anatomico, terapeutico e chimico per la classificazione sistematica dei farmaci"
// //-------------------------------------------------------------------------------------------
// * insert ATCCopyrightForVS
// * codes from system $atc

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ValueSet: VsGruppoEquivalenza
// Id: aifa-ge
// Title: "AIFA Gruppo di Equivalenza"
// Description: "AIFA Gruppo di Equivalenza"
// -------------------------------------------------------------------------------------------
// * ^experimental = false

// * codes from system $gruppo-equivalenza

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ValueSet: VsStrutturePubbliche
// Id: strutturePubbliche
// Title: "MDS - Codici strutture di ricovero pubbliche"
// Description: "MDS - Codici strutture di ricovero pubbliche"
// //-------------------------------------------------------------------------------------------
// * ^experimental = false
// * include codes from system $strutturePub where tipoStruttura = #0


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ValueSet: VsEHICPersonalIdOid
Id: oid-ehicPersonalId
Title: "EHIC Personal ID (system IDs - oid)"
Description: "Sistema di identificazione delle persone fisiche"
//-------------------------------------------------------------------------------------------
* ^experimental = false
* $oid#2.16.840.1.113883.2.9.4.3.2 "Codice Fiscale Italiano"
* $oid#2.16.840.1.113883.2.9.4.3.7 "Numero di Tessera TEAM estera"
* $oid#2.16.840.1.113883.2.9.4.3.3 "Numero di identificazione personale TEAM"
* $oid#2.16.840.1.113883.2.9.4.3.18 "Europei Non Iscritti al SSN"
* $oid#2.16.840.1.113883.2.9.4.3.17 "Stranieri Temporaneamente Presenti"
* $oid#2.16.840.1.113883.2.9.4.3.15 "Codice Anagrafica Nazionale degli Assisti"



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ValueSet: VsEHICCountryCodes
Id: iso-ehicCountryCode
Title: "ISO 3166 - EHIC Country Codes"
Description: "Codifica geografica standardizzata"
//-------------------------------------------------------------------------------------------
* ^experimental = false
* ^copyright = "ISO Maintains the copyright on the country codes, and controls it's use carefully. For further details, see the ISO 3166 Home Page"
* $iso3166#AT "Austria"
* $iso3166#BE "Belgium"
* $iso3166#BG "Bulgaria"
* $iso3166#HR "Croatia"
* $iso3166#CY "Cyprus"
* $iso3166#CZ "Czech Republic"
* $iso3166#DK "Denmark"
* $iso3166#EE "Estonia"
* $iso3166#FI "Finland"
* $iso3166#FR "France"
* $iso3166#GR "Greece"
* $iso3166#DE "Germany"
* $iso3166#HU "Hungary"
* $iso3166#IE "Ireland"
* $iso3166#IT "Italy" 
* $iso3166#LV "Latvia"
* $iso3166#LT "Lithuania" 
* $iso3166#LU "Luxembourg" 
* $iso3166#MT "Malta" 
* $iso3166#NL "Netherlands"
* $iso3166#PL "Poland"
* $iso3166#PT "Portugal" 
* $iso3166#RO "Romania"
* $iso3166#SK "Slovakia" 
* $iso3166#SI "Slovenia"
* $iso3166#ES "Spain" 
* $iso3166#SE "Sweden"
* $iso3166#IS "Iceland"
* $iso3166#LI "Liechtenstein"
* $iso3166#NO "Norway"
* $iso3166#CH "Switzerland"


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ValueSet: VsMinsanregione
Id: minsan-regione
Title: "MDS - Codici Regionali"
Description: "MDS - Codici Regionali usati nei file FLS11. La regione Trentino Alto-Adige è rappresentata dalle province autonome di cui è composta."
//-------------------------------------------------------------------------------------------
* ^experimental = false
* codes from system $MinSanRegioni



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ValueSet: VsTipoCertificatore
Id: tipoCertificatore
Title: "Tipo certificatore"
Description: "Tipo di Entità (organizzazione o persona) che ha certificato un certo record"
//-------------------------------------------------------------------------------------------
* ^experimental = false
* $CS_tipoEntita#gov
* $CS_tipoEntita#mef
* $CS_tipoEntita#regione
* $CS_tipoEntita#comune
* $CS_tipoEntita#as
* $CS_tipoEntita#asl
* $CS_tipoEntita#ric-hsp
* $CS_tipoEntita#ao
* $CS_tipoEntita#dist-san
* $V3RoleCode#subject

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ValueSet: VsTipoOrganizzazione
Id: tipoOrganizzazione
Title: "Tipo organizzazione (esempio)"
Description: "Tipo di organizzazione: value set di esempio"
//-------------------------------------------------------------------------------------------
* ^experimental = false
* codes from system $CS_tipoEntita

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ValueSet: VsTipoOrgSocioSanitaria
Id: tipoOrgSocioSanitaria
Title: "Tipo organizzazione socio-sanitaria"
Description: "Tipo di organizzazione socio-sanitaria"
//-------------------------------------------------------------------------------------------
* ^experimental = false
* $CS_tipoEntita#as
* $CS_tipoEntita#asl
* $CS_tipoEntita#ric-hsp
* $CS_tipoEntita#ao
* $CS_tipoEntita#aou
* $CS_tipoEntita#irccs
* $CS_tipoEntita#irccs-pub
* $CS_tipoEntita#irccs-priv
* $CS_tipoEntita#irccs-fond
* $CS_tipoEntita#ente-ric-hsp
* $CS_tipoEntita#osp-dir
* $CS_tipoEntita#pol-univ
* $CS_tipoEntita#cc-priv
* $CS_tipoEntita#cc-priv-a
* $CS_tipoEntita#cc-priv-na
* $CS_tipoEntita#dist-san

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ValueSet: VsMmgPlsRoles
Id: mmgOrPls
Title: "Tipo medico di famiglia"
Description: "Tipo medico di famiglia: Medico Medicina Generale o Pediatra di Libera Scelta"
//-------------------------------------------------------------------------------------------
* ^experimental = false
* $it-V3RoleCode#MMG  "medico di medicina generale"
* $it-V3RoleCode#PLS  "pediatra di libera scelta"

//=========================
// ValueSet: VsUriIdAslRegione
// Id: uri-idAslRegione
// Title: "Identificativi regionali per ASL (3 char)"
// Description: "Identificativi regionali per ASL a 3 caratteri, come da file ministeriale"
// * $uri#http://hl7.it/sid/abruzzo/asl
// * $uri#http://hl7.it/sid/basilicata/asl
// * $uri#http://hl7.it/sid/calabria/asl
// * $uri#http://hl7.it/sid/campania/asl
// * $uri#http://hl7.it/sid/rer/asl
// * $uri#http://hl7.it/sid/fvg/asl
// * $uri#http://hl7.it/sid/lazio/asl
// * $uri#http://hl7.it/sid/liguria/asl
// * $uri#http://hl7.it/sid/lombardia/asl
// * $uri#http://hl7.it/sid/marche/asl
// * $uri#http://hl7.it/sid/molise/asl
// * $uri#http://hl7.it/sid/piemonte/asl
// * $uri#http://hl7.it/sid/puglia/asl
// * $uri#http://hl7.it/sid/sardegna/asl
// * $uri#http://hl7.it/sid/sicilia/asl
// * $uri#http://hl7.it/sid/toscana/asl
// * $uri#http://hl7.it/sid/taa/asl
// * $uri#http://hl7.it/sid/apb/asl
// * $uri#http://hl7.it/sid/pat/asl
// * $uri#http://hl7.it/sid/umbria/asl
// * $uri#http://hl7.it/sid/vda/asl
// * $uri#http://hl7.it/sid/veneto/asl

Alias: VsStatoEsenzione = http://hl7.it/fhir/ValueSet/statoEsenzione

/*============= begin
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ValueSet: VsStatoEsenzione
Id: statoEsenzione
Title: "Stato Esenzioni"
Description: "Value Set basato sul vocabolario HL7 V3 ActStatus che descrive lo stato delle esenzioni. Questo value set è adottato da HL7 CDA R2 IG 'DOCUMENTO DI ESENZIONE'"
* ^experimental = false
//-------------------------------------------------------------------------------------------
* $V3ActStatus#active "attivo" // "Esenzione in corso di validità"
* $V3ActStatus#suspended  "sospeso" // "Esenzione momentaneamente sospesa (ad esempio in attesa del rinnovo di un’iscrizione temporanea)"
* $V3ActStatus#aborted  "abortito" // "Esenzione mai stata valida (ad esempio è stata assegnata per errore e il documento corrispondente era già stato prodotto in stato active)"
* $V3ActStatus#completed "completato" // "Esenzione non più in corso di validità"
* V3NullFlavor#UNK "sconosciuto"

============== END */

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ValueSet: VsIstatTitoloStudio
Id: istat-titoloStudio
Title: "ISTAT - Titolo Studio"
Description: "ISTAT - Titolo Studio"
* ^experimental = false

//-------------------------------------------------------------------------------------------
* codes from system $CS_TitoloStudioIstat

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ValueSet: VsIstatProfessionePaziente
Id: istat-professione
Title: "ISTAT - Professioni"
Description: "ISTAT - Professioni"
* ^experimental = false

//-------------------------------------------------------------------------------------------
* codes from system $CS_ProfessioniIstat


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ValueSet: VsIstatDug
Id: istat-dug
Title: "ISTAT - DUG"
Description: "ISTAT - Registro delle Denominazioni Urbanistiche Generiche (DUG)"
* ^experimental = false
* codes from system http://hl7.it/fhir/lab-report/CodeSystem/dug //http://registry.geodati.gov.it/dug

//=========================
ValueSet: VsUriIdAslRegione
Id: uri-idAslRegione
Title: "Identificativi regionali per ASL (3 char)"
Description: "Identificativi regionali per ASL a 3 caratteri, come da file ministeriale"
* ^experimental = false
* $uri#http://hl7.it/sid/abruzzo/asl
* $uri#http://hl7.it/sid/basilicata/asl
* $uri#http://hl7.it/sid/calabria/asl
* $uri#http://hl7.it/sid/campania/asl
* $uri#http://hl7.it/sid/rer/asl
* $uri#http://hl7.it/sid/fvg/asl
* $uri#http://hl7.it/sid/lazio/asl
* $uri#http://hl7.it/sid/liguria/asl
* $uri#http://hl7.it/sid/lombardia/asl
* $uri#http://hl7.it/sid/marche/asl
* $uri#http://hl7.it/sid/molise/asl
* $uri#http://hl7.it/sid/piemonte/asl
* $uri#http://hl7.it/sid/puglia/asl
* $uri#http://hl7.it/sid/sardegna/asl
* $uri#http://hl7.it/sid/sicilia/asl
* $uri#http://hl7.it/sid/toscana/asl
* $uri#http://hl7.it/sid/taa/asl
* $uri#http://hl7.it/sid/apb/asl
* $uri#http://hl7.it/sid/pat/asl
* $uri#http://hl7.it/sid/umbria/asl
* $uri#http://hl7.it/sid/vda/asl
* $uri#http://hl7.it/sid/veneto/asl

//=========================
// ValueSet: VsUriIdRegionali
// Id: uri-idRegionali
// Title: "Identificativi per anagrafi regionali"
// Description: "Identificativi per anagrafi regionali"
// * ^experimental = false
// * ^copyright = "Copyright (C) The Internet Society (2005)"
// * $uri#http://hl7.it/sid/lazio/asur  "Anagrafe Sanitaria Unica Regionale - Lazio"
// * $uri#http://hl7.it/sid/piemonte/aura  "Archivio Unico Regionale degli Assistiti - Piemonte"
// * $uri#urn:oid:2.16.840.1.113883.2.9.2.20.4.1 "MPI (angrafe unica aziendale) - Valle d'Aosta"
// * $uri#urn:oid:2.16.840.1.113883.2.9.2.50.4.1 "ANAGRAFE UNICA REGIONALE - Veneto"
// * $uri#urn:oid:2.16.840.1.113883.2.9.2.60.4.1 "Anagrafe Unica - Friuli-Venezia Giulia"
// * $uri#http://www.regione.toscana.it/sanita/cur "Centrale Unica Regionale - Toscana"
//=========================
// ValueSet: VsUriIdStp
// Id: uri-idStp
// Title: "Identificativi per codici STP regionali"
// Description: "Identificativi per codici STP regionali."
// * ^experimental = false
// * ^copyright = "Copyright (C) The Internet Society (2005)"
// * $uri#http://hl7.it/sid/stp "Codici STP"
// * $uri#http://hl7.it/sid/lazio/stp "Codici STP - Lazio"
// * $uri#http://hl7.it/sid/piemonte/stp  "Codici STP - Piemonte"
// * $uri#http://hl7.it/sid/vallee/stp "Codici STP - Valle d'Aosta"
// * $uri#urn:oid:2.16.840.1.113883.2.9.2.50.4.1.1 "Codici STP - Veneto"


//=========================
ValueSet: UriIdEni
Id: uri-idEni
Title: "Identificativi per codici ENI regionali"
Description: "Identificativi per codici ENI regionali."
* ^experimental = false
* ^copyright = "Copyright (C) The Internet Society (2005)"
* $uri#http://hl7.it/sid/eni "Codici ENI"
* $uri#http://hl7.it/sid/lazio/eni "Codici ENI - Lazio"
* $uri#http://hl7.it/sid/piemonte/eni  "Codici ENI - Piemonte"
* $uri#http://hl7.it/sid/vallee/eni "Codici ENI - Valle d'Aosta"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.50.4.1.4 "Codici ENI - Veneto"
//=========================


//----------------------------------------
ValueSet: VsMinisteroSaluteIdStrutture
Id: minsan-idStrutture
Title: "MDS - ID Strutture Ricovero"
Description: "MDS - Identificativi Strutture Ricovero (HSP11)"
* ^experimental = false
//----------------------------------------
* codes from system $UriHsp


//----------------------------------------
ValueSet: VsMinisteroSaluteIdAziendeOspedaliere
Id: minsan-idAziendeOspedaliere
Title: "MDS - ID Aziende Ospedaliere"
Description: "MDS - Aziende Ospedaliere (HSP11)"
* ^experimental = false
//----------------------------------------
* $UriHsp#010906 "AZ. OSPEDAL. S. CROCE E CARLE"
* $UriHsp#010907 "AZ. SS.ANTONIO E BIAGIO E C.ARRIGO"
* $UriHsp#010908 "OSPEDALE MAURIZIANO UMBERTO I - TORINO"
* $UriHsp#030701 "ASST GRANDE OSPEDALE METROPOLITANO NIGUA"
* $UriHsp#030702 "ASST SANTI PAOLO E CARLO"
* $UriHsp#030703 "ASST FATEBENEFRATELLI SACCO"
* $UriHsp#030704 "ASST SPEC.ORT.TRAUMATOLOGICO G.PINI/CTO"
* $UriHsp#030705 "ASST OVEST MILANESE"
* $UriHsp#030706 "ASST RHODENSE"
* $UriHsp#030707 "ASST NORD MILANO"
* $UriHsp#030708 "ASST MELEGNANO E DELLA MARTESANA"
* $UriHsp#030709 "ASST DI LODI"
* $UriHsp#030710 "ASST DEI SETTE LAGHI"
* $UriHsp#030711 "ASST DELLA VALLE OLONA"
* $UriHsp#030712 "ASST LARIANA"
* $UriHsp#030713 "ASST DELLA VALTELLINA E DELL'ALTO LARIO"
* $UriHsp#030714 "ASST DELLA VALCAMONICA"
* $UriHsp#030715 "ASST DI LECCO"
* $UriHsp#030717 "ASST DI VIMERCATE"
* $UriHsp#030718 "ASST PAPA GIOVANNI XXIII"
* $UriHsp#030719 "ASST DI BERGAMO OVEST"
* $UriHsp#030720 "ASST DI BERGAMO EST"
* $UriHsp#030721 "ASST DEGLI SPEDALI CIVILI DI BRESCIA"
* $UriHsp#030722 "ASST DELLA FRANCIACORTA"
* $UriHsp#030723 "ASST DEL GARDA"
* $UriHsp#030724 "ASST DI CREMONA"
* $UriHsp#030725 "ASST DI MANTOVA"
* $UriHsp#030726 "ASST DI CREMA"
* $UriHsp#030727 "ASST DI PAVIA"
* $UriHsp#050901 "AZIENDA OSPEDALIERA DI PADOVA"
* $UriHsp#100901 "AZIENDA OSPEDALIERA DI PERUGIA"
* $UriHsp#100902 "AZIENDA OSPEDALIERA 'S. MARIA' - TERNI"
* $UriHsp#110905 "A.O.U.OSPEDALI RIUNITI - ANCONA"
* $UriHsp#120901 "AZ.OSP.SAN CAMILLO-FORLANINI"
* $UriHsp#120902 "AZIENDA OSP. S.GIOVANNI/ADDOLORATA ROMA"
* $UriHsp#150901 "AZIENDA OSPEDALIERA 'A. CARDARELLI'"
* $UriHsp#150902 "A.O.SANTOBONO-PAUSILIPON"
* $UriHsp#150903 "A.zienda Ospedaliera dei Colli"
* $UriHsp#150905 "AZIENDA OSPEDALIERA S.G. MOSCATI"
* $UriHsp#150906 "AZIENDA OSPEDALE `G.RUMMO`"
* $UriHsp#150907 "A.O. SANT'ANNA E SAN SEBASTIANO  CASERTA"
* $UriHsp#170901 "AZIENDA OSPEDALIERA REGIONALE 'S. CARLO'"
* $UriHsp#180912 "AZIENDA OSPEDALIERA DI COSENZA"
* $UriHsp#180913 "Azienda Ospedaliera Pugliese De Lellis"
* $UriHsp#180914 "A.O. MATER DOMINI CATANZARO"
* $UriHsp#180915 "Azienda Osp.  Bianchi-Melacrino-Morelli"
* $UriHsp#190921 "A.O. per l'Emergenza Cannizzaro"
* $UriHsp#190922 "ARNAS GARIBALDI"
* $UriHsp#190924 "aorpapardopiemonte"
* $UriHsp#190926 "A.O.R Villa Sofia Cervello"
* $UriHsp#190927 "Azienda Ospedaliera 'Civico-Di Cristina-"
* $UriHsp#200904 "AZIENDA OSPEDALIERA G.BROTZU"


//----------------------------------------
// ValueSet: VsMinisteroSaluteIdAOU
// Id: minsan-idAou
// Title: "MDS - ID Aziende Ospedaliere Universitarie"
// Description: "MDS - Azienda Ospedaliera integrata con l'Università (HSP11)"
// //----------------------------------------
// // * codes from system $UriHsp where type = "2.2"
// * ^experimental = false
// * $UriHsp#010904 "AZIENDA OSPEDALIERO UNIVERSITARIA S.LUIG"
// * $UriHsp#010905 "AZIENDA OSPED. NOVARA E GALLIATE"
// * $UriHsp#010909 "AOU CITTA' DELLA SALUTE E DELLA SCIENZA"
// * $UriHsp#050912 "AZ.OSP.UNIVERSITARIA INTEGRATA VERONA"
// * $UriHsp#080902 "AZIENDA OSPEDALIERO-UNIVERSITARIA DI PAR"
// * $UriHsp#080904 "AZIENDA OSPEDALIERO-UNIVERSITARIA DI MOD"
// * $UriHsp#080908 "AZIENDA OSPEDALIERO-UNIVERSITARIA DI BOL"
// * $UriHsp#080909 "AZIENDA OSPEDALIERO-UNIVERSITARIA DI FER"
// * $UriHsp#090901 "AZIENDA OSPEDALIERO-UNIVERSITARIA PISANA"
// * $UriHsp#090902 "AZIENDA OSPEDALIERA UNIVERSITARIA SENESE"
// * $UriHsp#090903 "AZ. OSPEDALIERO - UNIVERSITARIA CAREGGI"
// * $UriHsp#090904 "AZIENDA OSPEDALIERA MEYER"
// * $UriHsp#120919 "AZIENDA OSPEDALIERA SANT`ANDREA"
// * $UriHsp#120920 "AZ. OSP. UNIV. POLICLINICO TOR VERGATA"
// * $UriHsp#150904 "A.O.OO.RR.S.GIOVANNI DI DIO E RUGGI D`AR"
// * $UriHsp#160910 "AO UNIV. 'OO RR FOGGIA'"


ValueSet: VsIstatStatoCivile
Id: istat-statoCivile-vs
Title: "ISTAT - Stato Civile"
Description: "ISTAT - Stato Civile"
//-------------------------------------------------------------------------------------------
* ^experimental = false
* ^status = #active
* include codes from  system $statoCivile


//----------------------------------------
ValueSet: VsMinisteroSaluteIdStruttureInterne
Id: minsan-idStruttureInterne
Title: "MDS - ID Strutture Interne di Ricovero"
Description: "MDS - Identificativi Strutture Interne di Ricovero"
//-------------------------------------------------------------------------------------------
* ^experimental = false
* ^status = #active

* $cs_strttureInterne#010030.01 "OSPEDALE CIVILE E.AGNELLI"
* $cs_strttureInterne#010030.03 "OSPEDALE DI POMARETTO"
* $cs_strttureInterne#010079.01 "OSPEDALE DEGLI INFERMI"
* $cs_strttureInterne#010079.02 "OSPEDALE CIVILE DI GIAVENO"
* $cs_strttureInterne#010079.04 "OSPEDALE CIVILE DI SUSA"
* $cs_strttureInterne#010079.05 "OSPEDALE DI VENARIA"
* $cs_strttureInterne#010079.06 "UNITA' AUTONOMA DI DAY SURGERY DI AVIGLI"
* $cs_strttureInterne#010019.01 "PRESIDIO OSPED. RIUNITO SEDE DI CIRIE'"
* $cs_strttureInterne#010019.03 "PRESIDIO OSPED. RIUNITO SEDE DI LANZO"
* $cs_strttureInterne#010023.01 "OSPEDALE CIVILE DI IVREA"
* $cs_strttureInterne#010023.02 "OSPEDALE CIVILE DI CUORGNE'"
* $cs_strttureInterne#010023.04 "SAAPA S.P.A."
* $cs_strttureInterne#010004.01 "OSPEDALE MAGGIORE"
* $cs_strttureInterne#010004.02 "OSPEDALE SANTA CROCE"
* $cs_strttureInterne#010004.03 "OSPEDALE SAN LORENZO"
* $cs_strttureInterne#010004.04 "DAY SURGERY DEL DISTRETTO DI NICHELINO"
* $cs_strttureInterne#010009.01 "OSPEDALE SANT'ANDREA"
* $cs_strttureInterne#010009.02 "OSPEDALE SS.PIETRO E PAOLO"
* $cs_strttureInterne#010005.01 "OSPEDALE SAN BIAGIO"
* $cs_strttureInterne#010005.02 "STABILIMENTO OSPEDALIERO CASTELLI"
* $cs_strttureInterne#010005.03 "C.O.Q. OSPEDALE MADONNA DEL POPOLO"
* $cs_strttureInterne#010124.01 "OSPEDALE DI MONDOVI' CN1"
* $cs_strttureInterne#010124.02 "NUOVO OSPEDALE DI CEVA CN1"
* $cs_strttureInterne#010126.01 "OSP. MAGGIORE SS. ANNUNZIATA SAVIGLIANO"
* $cs_strttureInterne#010126.02 "OSP. CIVILE DI SALUZZO CN1"
* $cs_strttureInterne#010120.01 "OSPEDALE SAN LAZZARO - ALBA"
* $cs_strttureInterne#010120.02 "OSPEDALE SANTO SPIRITO BRA"
* $cs_strttureInterne#010008.01 "PRESIDIO OSP. CARDINAL G. MASSAIA"
* $cs_strttureInterne#010008.02 "PRESIDIO OSPEDALIERO S. SPIRITO-VALLE BE"
* $cs_strttureInterne#010026.01 "OSPEDALE SANTO SPIRITO CASALE"
* $cs_strttureInterne#010026.03 "OSPEDALE SS. ANTONIO E MARGHERITA TORTON"
* $cs_strttureInterne#010026.04 "OSPEDALE SAN GIACOMO NOVI"
* $cs_strttureInterne#010026.05 "OSPEDALE CIVILE ACQUI"
* $cs_strttureInterne#010026.06 "OSPEDALE CIVILE OVADA"
* $cs_strttureInterne#010905.01 "OSP. MAGGIORE DELLA CARITA'"
* $cs_strttureInterne#010905.02 "OSPEDALE SAN ROCCO GALLIATE"
* $cs_strttureInterne#010907.01 "OSP.CIVILE SS.ANTONIO E BIAGIO"
* $cs_strttureInterne#010907.02 "OSP. INFANTILE C.ARRIGO"
* $cs_strttureInterne#010907.03 "CENTRO RIABILITATIVO POLIFUNZIONALE T.BO"
* $cs_strttureInterne#010909.01 "OSPEDALE SAN GIOVANNI BATTISTA MOLINETTE"
* $cs_strttureInterne#010909.02 "OSPEDALE DERMATOLOGICO SAN LAZZARO"
* $cs_strttureInterne#010909.04 "OSPEDALE CENTRO TRAUMATOLOGICO ORTOPEDIC"
* $cs_strttureInterne#010909.05 "ISTITUTO CHIRURGICO ORTOPEDICO REGINA MA"
* $cs_strttureInterne#010909.06 "OSPEDALE OSTETRICO GINECOLOGICO SANT'ANN"
* $cs_strttureInterne#010909.07 "OSPEDALE INFANTANTILE REGINA MARGHERITA"
* $cs_strttureInterne#030281.01 "OSPEDALE DI LEGNANO E CUGGIONO-LEGNANO"
* $cs_strttureInterne#030281.02 "OSPEDALE DI LEGNANO E CUGGIONO-LEGNANO"
* $cs_strttureInterne#030071.01 "OSPEDALE S. MARIA DELLE STELLE MELZO"
* $cs_strttureInterne#030071.02 "OSPEDALE S. MARIA DELLE STELLE MELZO"
* $cs_strttureInterne#030072.01 "OSPEDALE DI  VIZZOLO PREDABISSI"
* $cs_strttureInterne#030072.02 "OSPEDALE DI  VIZZOLO PREDABISSI"
* $cs_strttureInterne#030085.01 "OSPEDALE UBOLDO - CERNUSCO S/NAVIGLIO"
* $cs_strttureInterne#030085.02 "OSPEDALE UBOLDO - CERNUSCO S/NAVIGLIO"
* $cs_strttureInterne#030282.01 "PRESIDIO OSPEDALIERO DEL VERBANO"
* $cs_strttureInterne#030282.02 "PRESIDIO OSPEDALIERO DEL VERBANO"
* $cs_strttureInterne#030901.01 "PRESIDIO OSPEDALIERO DI VARESE"
* $cs_strttureInterne#030901.02 "PRESIDIO OSPEDALIERO DI VARESE"
* $cs_strttureInterne#030901.03 "PRESIDIO OSPEDALIERO DI VARESE"
* $cs_strttureInterne#030274.01 "OSPEDALE VALCAMONICA - ESINE"
* $cs_strttureInterne#030274.02 "OSPEDALE VALCAMONICA - ESINE"
* $cs_strttureInterne#030154.01 "PRESIDIO OSPEDALIERO DI CHIARI"
* $cs_strttureInterne#030154.02 "PRESIDIO OSPEDALIERO DI CHIARI"
* $cs_strttureInterne#030227.01 "PRESIDIO OSPEDALIERO - ASOLA"
* $cs_strttureInterne#030227.02 "PRESIDIO OSPEDALIERO - ASOLA"
* $cs_strttureInterne#030936.01 "IST.AUXOLOGICO ITALIANO-I.S. S.LUCA-MILA"
* $cs_strttureInterne#030936.02 "IST.AUXOLOGICO ITAL.-I.S. S.MICHELE-MILA"
* $cs_strttureInterne#030936.03 "IRCCS OSPEDALE CAPITANIO"
* $cs_strttureInterne#042001.01 "PRESIDIO OSPEDALIERO S. CHIARA"
* $cs_strttureInterne#042001.03 "PRESIDIO OSPEDALIERO VILLA ROSA"
* $cs_strttureInterne#042001.04 "PRESIDIO OSPEDALIERO VILLA IGEA"
* $cs_strttureInterne#050201.01 "OSPEDALE S. MARTINO BELLUNO"
* $cs_strttureInterne#050201.03 "OSPEDALE DI AGORDO"
* $cs_strttureInterne#050201.04 "OSPEDALE DI PIEVE DI CADORE"
* $cs_strttureInterne#050202.01 "OSPEDALE DI FELTRE 'S. MARIA DEL PRATO'"
* $cs_strttureInterne#050202.02 "OSPEDALE DI LAMON 'CASA CHARITAS'"
* $cs_strttureInterne#050203.01 "OSPEDALE `SAN BASSIANO` DI BASSANO D.G."
* $cs_strttureInterne#050203.02 "OSPEDALE DI ASIAGO"
* $cs_strttureInterne#050205.01 "OSPEDALE DI ARZIGNANO"
* $cs_strttureInterne#050205.02 "OSPEDALE  DI LONIGO"
* $cs_strttureInterne#050205.03 "OSPEDALE DI MONTECCHIO"
* $cs_strttureInterne#050205.04 "OSPEDALE DI VALDAGNO"
* $cs_strttureInterne#050206.01 "PRES. OSPED. VICENZA"
* $cs_strttureInterne#050206.02 "PRES. OSP.  NOVENTA VICENTINA"
* $cs_strttureInterne#050140.01 "ASSOCIAZIONE LA NS. FAMIGLIA IRCSS MEDEA"
* $cs_strttureInterne#050140.02 "ASSOCIAZIONE LA NS.FAMIGLIA IRCSS MEDEA"
* $cs_strttureInterne#050207.01 "OSPEDALE DI CONEGLIANO"
* $cs_strttureInterne#050207.02 "OSPEDALE DI VITTORIO VENETO"
* $cs_strttureInterne#050208.01 "OSPEDALE DI CASTELFRANCO VENETO"
* $cs_strttureInterne#050208.02 "OSPEDALE DI MONTEBELLUNA"
* $cs_strttureInterne#050209.01 "OSPEDALE CA' FONCELLO"
* $cs_strttureInterne#050209.02 "OSPEDALE DI ODERZO"
* $cs_strttureInterne#050210.01 "PRESIDIO OSPEDALIERO DI PORTOGRUARO"
* $cs_strttureInterne#050210.02 "PRESIDIO OSPEDALIERO DI SAN DONA` DI P."
* $cs_strttureInterne#050210.03 "PRESIDIO OSPEDALIERO DI JESOLO"
* $cs_strttureInterne#050212.01 "OSPEDALE CIVILE VENEZIA"
* $cs_strttureInterne#050212.02 "PUNTO PRIMO INTERVENTO LIDO"
* $cs_strttureInterne#050212.04 "OSPEDALE DELL'ANGELO"
* $cs_strttureInterne#050213.01 "OSPEDALE  DI DOLO"
* $cs_strttureInterne#050213.02 "OSPEDALE  DI MIRANO"
* $cs_strttureInterne#050213.03 "OSPEDALE DI NOALE"
* $cs_strttureInterne#050215.01 "PRESIDIO OSPEDALIERO DI CAMPOSAMPIERO"
* $cs_strttureInterne#050215.02 "PRESIDIO OSPEDALIERO DI CITTADELLA"
* $cs_strttureInterne#050216.01 "OSPEDALE SANT`ANTONIO"
* $cs_strttureInterne#050216.05 "OSP. IMMACOL. CONCEZ. DI PIOVE DI SACCO"
* $cs_strttureInterne#050217.03 "SEDE MONTAGNANA"
* $cs_strttureInterne#050217.04 "SEDE CONSELVE"
* $cs_strttureInterne#050217.05 "OSPEDALI RIUNITI PADOVA SUD"
* $cs_strttureInterne#050218.01 "P.O. DI ROVIGO"
* $cs_strttureInterne#050218.02 "P.O. DI TRECENTA"
* $cs_strttureInterne#050220.04 "PRESIDIO OSP. MARZANA"
* $cs_strttureInterne#050220.05 "POLO OSP. DELL'EST VERONESE"
* $cs_strttureInterne#050220.06 "PSICHIATRIA SEZIONE B.GO TRENTO - VERONA"
* $cs_strttureInterne#050221.01 "OSPEDALE PER ACUTI"
* $cs_strttureInterne#050221.03 "OSPEDALE S.BIAGIO BOVOLONE"
* $cs_strttureInterne#050222.01 "OSPEDALE CIVILE ORLANDI BUSSOLENGO"
* $cs_strttureInterne#050222.02 "OSPEDALE ISOLA DELLA SCALA"
* $cs_strttureInterne#050222.04 "OSPEDALE DI MALCESINE"
* $cs_strttureInterne#050222.05 "OSPEDALE MAGALINI - VILLAFRANCA DI VR"
* $cs_strttureInterne#050912.01 "OSPEDALE CIVILE MAGGIORE"
* $cs_strttureInterne#050912.02 "OSPEDALE POLICLINICO"
* $cs_strttureInterne#060043.01 "PO Gorizia e Monfalcone sede Gorizia"
* $cs_strttureInterne#060043.02 "PO Gorizia e Monfalcone sede Monfalcone"
* $cs_strttureInterne#060044.01 "PO Latisana e Palmanova sede Latisana"
* $cs_strttureInterne#060044.02 "PO Latisana e Palmanova sede Palmanova"
* $cs_strttureInterne#060045.01 "Sede di San Daniele"
* $cs_strttureInterne#060045.02 "Sede di Tolmezzo"
* $cs_strttureInterne#060045.03 "Sede di Gemona"
* $cs_strttureInterne#060047.01 "PRESIDIO OSPEDALIERO SMM - SEDE UDINE"
* $cs_strttureInterne#060047.02 "PRESIDIO OSPEDAL. SMM - SEDE CIVIDALE"
* $cs_strttureInterne#060042.01 "P.O. San Vito al T. sede di S. Vito al T"
* $cs_strttureInterne#060042.02 "P.O. San Vito al T. sede di Spilimbergo"
* $cs_strttureInterne#070001.01 "STABILIMENTO OSPEDALIERO DI IMPERIA"
* $cs_strttureInterne#070001.02 "STABILIMENTO OSPEDALIERO DI SANREMO"
* $cs_strttureInterne#070001.03 "STABILIMENTO OSPEDALIERO DI BORDIGHERA"
* $cs_strttureInterne#070211.01 "OSPEDALE SANTA MARIA MISERICORDIA"
* $cs_strttureInterne#070211.02 "OSPEDALE SANTA CORONA"
* $cs_strttureInterne#070212.03 "OSPEDALE SAN GIUSEPPE"
* $cs_strttureInterne#070212.04 "OSPEDALE SAN PAOLO"
* $cs_strttureInterne#070051.01 "EVANGELICO Internazionale CASTELLETTO"
* $cs_strttureInterne#070051.02 "EVANGELICO-SAN CARLO VOLTRI"
* $cs_strttureInterne#070301.01 "OSPEDALE LA COLLETTA ARENZANO"
* $cs_strttureInterne#070301.03 "OSPEDALE PADRE ANTERO MICONE SESTRI P."
* $cs_strttureInterne#070301.04 "OSPEDALE VILLA SCASSI"
* $cs_strttureInterne#070301.05 "OSPEDALE GALLINO"
* $cs_strttureInterne#070039.01 "OSP. RIUNITI LEONARDI E RIBOLI LAVAGNA"
* $cs_strttureInterne#070039.02 "OSPEDALE CIVILE DI SESTRI LEVANTE"
* $cs_strttureInterne#070039.05 "OSPEDALE N.S. DI MONTALLEGRO"
* $cs_strttureInterne#070058.01 "OSPEDALE SANT`ANDREA LA SPEZIA"
* $cs_strttureInterne#070058.03 "OSPEDALE SAN NICOLO` LEVANTO"
* $cs_strttureInterne#070058.04 "STABILIMENTO SAN BARTOLOMEO DI SARZANA"
* $cs_strttureInterne#080004.01 "OSPEDALE GUGLIELMO DA SALICETO PIACENZA"
* $cs_strttureInterne#080004.02 "OSPEDALE BOBBIO"
* $cs_strttureInterne#080004.03 "OSPEDALE CASTEL SAN GIOVANNI"
* $cs_strttureInterne#080004.04 "OSPEDALE BORGONOVO VAL TIDONE"
* $cs_strttureInterne#080004.05 "OSPEDALE FIORENZUOLA D'ARDA"
* $cs_strttureInterne#080004.06 "CENTRO DI RECUPERO E RIABILITAZIONE FUNZ"
* $cs_strttureInterne#080013.01 "OSPEDALE FIDENZA"
* $cs_strttureInterne#080013.03 "OSPEDALE 'S.MARIA' BORGO VAL DI TARO"
* $cs_strttureInterne#080021.01 "OSPEDALE CIVILE GUASTALLA"
* $cs_strttureInterne#080021.02 "OSPEDALE S.SEBASTIANO CORREGGIO"
* $cs_strttureInterne#080021.03 "OSPEDALE E.FRANCHINI MONTECCHIO"
* $cs_strttureInterne#080021.04 "OSPEDALE G.MAGATI SCANDIANO"
* $cs_strttureInterne#080021.05 "OSPEDALE S.ANNA CASTELNOVO NE MONTI"
* $cs_strttureInterne#080031.04 "OSPEDALE B. RAMAZZINI  CARPI"
* $cs_strttureInterne#080031.05 "OSPEDALE SANTA MARIA BIANCA  MIRANDOLA"
* $cs_strttureInterne#080031.08 "OSPEDALE VIGNOLA"
* $cs_strttureInterne#080031.09 "OSPEDALE PAVULLO NEL FRIGNANO"
* $cs_strttureInterne#080031.10 "NUOVO OSPEDALE CIVILE  S.AGOSTINO - ESTE"
* $cs_strttureInterne#080053.01 "OSPEDALE MAGGIORE C.A. PIZZARDI"
* $cs_strttureInterne#080053.02 "OSPEDALE BELLARIA"
* $cs_strttureInterne#080053.03 "OSPEDALE DOSSETTI  BAZZANO"
* $cs_strttureInterne#080053.04 "OSPEDALE A. COSTA PORRETTA TERME (ALTO"
* $cs_strttureInterne#080053.05 "OSPEDALE VERGATO"
* $cs_strttureInterne#080053.06 "OSPEDALE SIMIANI LOIANO"
* $cs_strttureInterne#080053.07 "OSPEDALE BENTIVOGLIO"
* $cs_strttureInterne#080053.08 "OSPEDALE BUDRIO"
* $cs_strttureInterne#080053.09 "OSPEDALE S.SALVATORE  S. GIOVANNI IN P"
* $cs_strttureInterne#080044.01 "OSPEDALE CIVILE NUOVO S.MARIA DELLA SCA"
* $cs_strttureInterne#080044.02 "OSPEDALE CASTEL SAN PIETRO TERME"
* $cs_strttureInterne#080068.03 "OSPEDALE DEL DELTA"
* $cs_strttureInterne#080068.04 "OSPEDALE MAZZOLANI VANDINI ARGENTA"
* $cs_strttureInterne#080068.06 "STABILIMENTO OSPEDALIERO SS. ANNUNZIATA"
* $cs_strttureInterne#080085.01 "OSPEDALE MORGAGNI-PIERANTONI FORLI'"
* $cs_strttureInterne#080085.03 "OSPEDALE NEFETTI SANTA SOFIA"
* $cs_strttureInterne#080091.01 "OSPEDALE MAURIZIO BUFALINI CESENA"
* $cs_strttureInterne#080091.02 "OSPEDALE GINESIO MARCONI CESENATICO"
* $cs_strttureInterne#080091.03 "OSPEDALE PIETRO ANGIOLONI BAGNO DI ROM"
* $cs_strttureInterne#080095.01 "OSPEDALE INFERMI RIMINI"
* $cs_strttureInterne#080095.02 "OSPEDALE FRANCHINI SANTARCANGELO DI RO"
* $cs_strttureInterne#080095.03 "OSPEDALE SACRA FAMIGLIA NOVAFELTRIA"
* $cs_strttureInterne#080100.01 "OSPEDALE CECCARINI RICCIONE"
* $cs_strttureInterne#080100.02 "OSPEDALE CERVESI CATTOLICA"
* $cs_strttureInterne#080903.01 "AZIENDA OSPEDALIERA DI REGGIO EMILIA-S."
* $cs_strttureInterne#080903.02 "AZIENDA OSPEDALIERA DI REGGIO EMILIA - I"
* $cs_strttureInterne#090606.01 "OSPEDALE SAN JACOPO"
* $cs_strttureInterne#090606.02 "OSPEDALE LORENZO PACINI"
* $cs_strttureInterne#090629.01 "OSPEDALE S.M.ANNUNZIATA"
* $cs_strttureInterne#090629.02 "OSPEDALE SERRISTORI"
* $cs_strttureInterne#090632.01 "SANTA MARIA NUOVA"
* $cs_strttureInterne#090632.02 "ISTITUTO ORTOPEDICO TOSCANO"
* $cs_strttureInterne#090632.03 "OSP. S. GIOVANNI DI DIO TORREGALLI"
* $cs_strttureInterne#090632.06 "OBLATE AZIENDA SANITARIA FIRENZE"
* $cs_strttureInterne#090642.02 "OSPEDALE S. GIUSEPPE"
* $cs_strttureInterne#090642.03 "OSPEDALE SAN PIETRO IGNEO"
* $cs_strttureInterne#090642.04 "OSPEDALE DEGLI INFERMI"
* $cs_strttureInterne#090601.01 "OSP. S. ANTONIO ABATE FIVIZZANO   (MS)"
* $cs_strttureInterne#090601.02 "OSP. CIV. S.ANTONIO  PONTREMOLI (MS)"
* $cs_strttureInterne#090602.01 "STABILIMENTO OSPEDALIERO DI CARRARA"
* $cs_strttureInterne#090602.03 "OSPEDALE  DELLE APUANE"
* $cs_strttureInterne#090603.01 "OSPEDALE SANTA CROCE"
* $cs_strttureInterne#090603.02 "OSPEDALE SAN FRANCESCO"
* $cs_strttureInterne#090610.01 "P.O. F. LOTTI STABILIMENTO DI PONTEDERA"
* $cs_strttureInterne#090610.02 "SPDC AZIENDALE ASL5"
* $cs_strttureInterne#090236.01 "CASA DI CURA POGGIO DEL SOLE"
* $cs_strttureInterne#090236.02 "CENTRO CHIRURGICO TOSCANO SRL"
* $cs_strttureInterne#090624.02 "OSPEDALE DI ORBETELLO"
* $cs_strttureInterne#090624.03 "OSPEDALE DI PITIGLIANO"
* $cs_strttureInterne#090907.01 "FONDAZIONE CNR-RT G. MONASTERIO"
* $cs_strttureInterne#090907.02 "OSPEDALE DEL CUORE G. PASQUINUCCI"
* $cs_strttureInterne#100801.01 "OSPEDALE DI CITTA` DI CASTELLO"
* $cs_strttureInterne#100801.02 "OSPEDALE DI UMBERTIDE"
* $cs_strttureInterne#100803.01 "STAB.OSPEDALIERO CASTIGLIONE DEL LAGO"
* $cs_strttureInterne#100803.02 "STAB.OSPEDALIERO CITTA`DELLA PIEVE"
* $cs_strttureInterne#100803.03 "C.O.R.I. - PASSIGNANO"
* $cs_strttureInterne#100803.04 "STAB. OSPEDALIERO ASSISI"
* $cs_strttureInterne#100803.07 "STAB. OSPEDALIERO MEDIA VALLE DEL TEVERE"
* $cs_strttureInterne#100805.01 "OSPEDALE CIVILE SAN MATTEO DEGLI INFERMI"
* $cs_strttureInterne#100805.02 "OSPEDALE CIVILE DI NORCIA"
* $cs_strttureInterne#100805.03 "OSPEDALE S.RITA CASCIA"
* $cs_strttureInterne#100807.01 "STABILIMENTO OSPEDALIERO DI NARNI"
* $cs_strttureInterne#100807.02 "STABILIMENTO OSPEDALIERO DI AMELIA"
* $cs_strttureInterne#100807.03 "DOMUS GRATIAE"
* $cs_strttureInterne#100809.01 "OSPEDALE SAN GIOVANNI BATTISTA FOLIGNO"
* $cs_strttureInterne#100809.02 "STABILIMENTO DI TREVI"
* $cs_strttureInterne#110001.01 "OSP S. MARIA DELLA MISERICORDIA - URBINO"
* $cs_strttureInterne#110001.02 "OSPEDALE SS DONNINO E CARLO - PERGOLA"
* $cs_strttureInterne#110001.03 "OSPEDALE CELLI - CAGLI"
* $cs_strttureInterne#110001.04 "OSPEDALE LANCIARINI - SASSOCORVARO"
* $cs_strttureInterne#110001.05 "OSPEDALE CIVILE - FOSSOMBRONE"
* $cs_strttureInterne#110002.01 "PRESIDIO OSPEDALIERO ZT 4 - SENIGALLIA"
* $cs_strttureInterne#110002.02 "OSPEDALE CARLO URBANI DI JESI"
* $cs_strttureInterne#110002.03 "OSP. SS. BENVENUTO E ROCCO - OSIMO"
* $cs_strttureInterne#110002.04 "OSPEDALE CIVILE 'E.PROFILI' - FABRIANO"
* $cs_strttureInterne#110002.05 "OSPEDALE SANTA CASA - LORETO"
* $cs_strttureInterne#110002.06 "OSPEDALE GENERALE DI ZONA - CINGOLI"
* $cs_strttureInterne#110003.01 "OSPEDALE GENERALE DI ZONA - CIVITANOVA"
* $cs_strttureInterne#110003.02 "OSPEDALE GENERALE PROVINCIALE - MACERATA"
* $cs_strttureInterne#110003.03 "OSPEDALE S.MARIA DELLA PIETA` - CAMERINO"
* $cs_strttureInterne#110003.04 "OSPEDALE B.EUSTACCHIO - S. SEVERINO M."
* $cs_strttureInterne#110003.05 "OSPEDALE DI TREIA"
* $cs_strttureInterne#110003.06 "OSPEDALE DI TOLENTINO"
* $cs_strttureInterne#110003.07 "OSPEDALE CIVILE SANTA LUCIA - RECANATI"
* $cs_strttureInterne#110003.08 "OSPEDALE S.SOLLECITO - MATELICA"
* $cs_strttureInterne#110004.01 "OSPEDALE DI FERMO"
* $cs_strttureInterne#110004.02 "OSPEDALE VITTORIO EMANUELE II - AMANDOLA"
* $cs_strttureInterne#110005.01 "MADONNA DEL SOCCORSO - S.BENEDETTO"
* $cs_strttureInterne#110005.02 "OSP. GEN."
* $cs_strttureInterne#110901.01 "OSPEDALE SAN SALVATORE - PESARO"
* $cs_strttureInterne#110901.02 "OSPEDALE SANTA CROCE - FANO"
* $cs_strttureInterne#110905.01 "PRESIDIO OSPEDALIERO UMBERTO I°"
* $cs_strttureInterne#110905.02 "PRESIDIO OSPEDALIERO G.M.LANCISI"
* $cs_strttureInterne#110905.03 "PRESIDIO OSPEDALIERO G.SALESI"
* $cs_strttureInterne#110921.01 "OSPEDALE INRCA - ANCONA"
* $cs_strttureInterne#110921.02 "OSPEDALE INRCA - FERMO"
* $cs_strttureInterne#120204.01 "ALFREDO FIORINI TERRACINA"
* $cs_strttureInterne#120204.02 "SAN GIOVANNI DI DIO FONDI"
* $cs_strttureInterne#120204.03 "REGINA ELENA PRIVERNO"
* $cs_strttureInterne#120026.01 "OSPEDALE SANTO SPIRITO"
* $cs_strttureInterne#120026.02 "VILLA BETANIA"
* $cs_strttureInterne#120285.01 "PRESIDIO SAN FILIPPO NERI"
* $cs_strttureInterne#120285.03 "PRESIDIO CASSIA SANT'ANDREA"
* $cs_strttureInterne#120285.05 "SALUS INFIRMORUM"
* $cs_strttureInterne#120066.01 "OSPEDALE S.EUGENIO"
* $cs_strttureInterne#120066.02 "OSPEDALE CTO.A.ALESINI"
* $cs_strttureInterne#120044.01 "OSPEDALE SAN GIUSEPPE ALBANO L."
* $cs_strttureInterne#120044.02 "OSPEDALE E. DE SANTIS GENZANO"
* $cs_strttureInterne#120904.01 "OSPEDALE PEDIATRICO BAMBINO GESU`"
* $cs_strttureInterne#120904.02 "OSPEDALE PEDIATRICO BAMBINO GESU`"
* $cs_strttureInterne#120904.03 "OSPEDALE PEDIATRICO BAMBINO GESU`"
* $cs_strttureInterne#120905.01 "POLICLINICO UNIVERSITARIO A. GEMELLI"
* $cs_strttureInterne#120905.02 "COMPLESSO INTEGRATO COLUMBUS (C.I.C.)"
* $cs_strttureInterne#120908.01 "IFO - ISTITUTO REGINA ELENA"
* $cs_strttureInterne#120908.02 "IFO - ISTITUTO SAN GALLICANO"
* $cs_strttureInterne#140002.01 "OSPEDALE S. TIMOTEO- TERMOLI"
* $cs_strttureInterne#140002.02 "OSPEDALE G. VIETRI- LARINO"
* $cs_strttureInterne#140003.01 "OSPEDALE VENEZIALE- ISERNIA"
* $cs_strttureInterne#140003.02 "OSPEDALE CARACCIOLO AGNONE"
* $cs_strttureInterne#140003.03 "OSPEDALE SS. ROSARIO - VENAFRO"
* $cs_strttureInterne#150150.01 "OSPEDALE S.ANGELO DEI LOMBARDI"
* $cs_strttureInterne#150150.02 "P.SP.RIABILITATIVO DON GNOCCHI"
* $cs_strttureInterne#150418.01 "PO SAN GIOVANNI BOSCO"
* $cs_strttureInterne#150418.02 "PO LORETO MARE"
* $cs_strttureInterne#150418.05 "PO ASCALESI"
* $cs_strttureInterne#150418.06 "PRESDIO SANITARIO INTERMEDIO NAPOLI EST"
* $cs_strttureInterne#150419.01 "PO SAN PAOLO"
* $cs_strttureInterne#150419.02 "PO DEI PELLEGRINI"
* $cs_strttureInterne#150419.03 "PO SAN GENNARO"
* $cs_strttureInterne#150419.04 "PO SMDP INCURABILI"
* $cs_strttureInterne#150419.06 "PO  Capilupi CAPRI"
* $cs_strttureInterne#150415.01 "P.O. MARESCA"
* $cs_strttureInterne#150415.02 "P.O.  BOSCOTRECASE"
* $cs_strttureInterne#150416.01 "S.  LEONARDO"
* $cs_strttureInterne#150416.02 "NUOVO GRAGNANO"
* $cs_strttureInterne#150417.01 "P.O. S. MARIA DELLA MISERICORDIA"
* $cs_strttureInterne#150417.02 "P.O. DE LUCA E ROSSANO"
* $cs_strttureInterne#150436.01 "OSPEDALI RIUNITI AREA NOLANA PLESSO NOLA"
* $cs_strttureInterne#150436.02 "OSPED RIUNITI AREA NOLANA PLESSO POLLENA"
* $cs_strttureInterne#150154.01 "P.O. UMBERTO I NOCERA INFERIORE"
* $cs_strttureInterne#150154.02 "P.O. TORTORA PAGANI"
* $cs_strttureInterne#150902.01 "OSPEDALE SANTOBONO"
* $cs_strttureInterne#150902.02 "Ospedale Pausilipon"
* $cs_strttureInterne#150902.03 "P.O. S.S. Annunziata"
* $cs_strttureInterne#150903.01 "Azienda Ospedaliera dei Colli -P Monaldi"
* $cs_strttureInterne#150903.02 "Azienda Ospedaliera dei Colli -P Cotugno"
* $cs_strttureInterne#150903.03 "Azienda Ospedaliera dei Colli -P  CTO"
* $cs_strttureInterne#150904.01 "A.O. OO.RR. SANGIOVANNI DI DIO E RUGGI"
* $cs_strttureInterne#150904.02 "OSPEDALE AMICO G. FUCITO"
* $cs_strttureInterne#150904.03 "P.O. G. DA PROCIDA"
* $cs_strttureInterne#150904.04 "P.O. S. M. DELL'OLMO"
* $cs_strttureInterne#160161.01 "OSPEDALE OSTUNI"
* $cs_strttureInterne#160161.02 "PLESSO DI FASANO - OSPEDALE OSTUNI"
* $cs_strttureInterne#160170.01 "OSPEDALE PERRINO BRINDISI"
* $cs_strttureInterne#160170.02 "OSPEDALE BRINDISI (PLESSO MESAGNE)"
* $cs_strttureInterne#160170.03 "OSP.BRINDISI(PLESSO S.PIETRO VERNOTICO)"
* $cs_strttureInterne#160170.04 "OSP.BRINDISI (PLESSO CEGLIE MESSAPICA)"
* $cs_strttureInterne#160172.01 "OSPEDALE SS ANNUNZIATA - TARANTO"
* $cs_strttureInterne#160172.03 "OSPEDALE MOSCATI - TARANTO/STATTE"
* $cs_strttureInterne#160174.01 "OSPEDALE ANDRIA"
* $cs_strttureInterne#160174.02 "OSPEDALE ANDRIA (PLESSO CANOSA)"
* $cs_strttureInterne#160178.01 "OSPEDALE BISCEGLIE"
* $cs_strttureInterne#160178.02 "OSPEDALE BISCEGLIE (PLESSO TRANI)"
* $cs_strttureInterne#160158.01 "OSPEDALE SAN PAOLO-BARI"
* $cs_strttureInterne#160158.03 "OSPEDALE SAN PAOLO (PLESSO MOLFETTA)"
* $cs_strttureInterne#160158.04 "OSPEDALE SAN PAOLO (PLESSO CORATO)"
* $cs_strttureInterne#160158.05 "OSPEDALE SAN PAOLO (PLESSO TERLIZZI)"
* $cs_strttureInterne#160169.01 "OSPEDALE DI VENERE - BARI"
* $cs_strttureInterne#160169.03 "PLESSO TRIGGIANO-OSPEDALE DI VENERE"
* $cs_strttureInterne#160163.01 "OSPEDALE SAN SEVERO"
* $cs_strttureInterne#160163.07 "OSPEDALE SAN SEVERO (PLESSO LUCERA)"
* $cs_strttureInterne#160171.01 "OSPEDALE LECCE 'V FAZZI'"
* $cs_strttureInterne#160171.02 "PLESSO DI SAN CESARIO - OSPEDALE LECCE"
* $cs_strttureInterne#160907.01 "CONSORZIALE POLICLINICO BARI"
* $cs_strttureInterne#160907.02 "OSPEDALE GIOVANNI XXIII"
* $cs_strttureInterne#170901.01 "Ospedale San Carlo di Potenza"
* $cs_strttureInterne#170901.02 "Osp S.Francesco di Paola di Pescopagano"
* $cs_strttureInterne#180010.01 "Ospedale Corigliano"
* $cs_strttureInterne#180010.02 "Ospedale  Rossano"
* $cs_strttureInterne#180012.01 "Ospedale  Cetraro"
* $cs_strttureInterne#180012.02 "Ospedale Paola"
* $cs_strttureInterne#180912.01 "P.O. ANNUNZIATA"
* $cs_strttureInterne#180912.02 "MARIANO SANTO"
* $cs_strttureInterne#180912.03 "SANTA BARBARA"
* $cs_strttureInterne#180913.01 "Ospedale Pugliese"
* $cs_strttureInterne#180913.02 "Ospedale De Lellis"
* $cs_strttureInterne#180915.01 "Presidio Ospedaliero Riuniti"
* $cs_strttureInterne#180915.02 "Presidio Ospedaliero E. Morelli"
* $cs_strttureInterne#190922.01 "OSPEDALE GARIBALDI - CENTRO"
* $cs_strttureInterne#190922.04 "NUOVO OSPEDALE GARIBALDI - NESIMA"
* $cs_strttureInterne#190923.01 "PRESIDIO OSPEDALIERO GASPARE RODOLICO"
* $cs_strttureInterne#190923.02 "PRESIDIO OSPEDALIERO VITTORIO EMANUELE"
* $cs_strttureInterne#190923.03 "PRESIDIO OSPEDALIERO S. BAMBINO"
* $cs_strttureInterne#190926.01 "P.O. Villa Sofia"
* $cs_strttureInterne#190926.02 "C.T.O. Centro Traumatologico Ortopedico"
* $cs_strttureInterne#190926.03 "P.O. V. Cervello"
* $cs_strttureInterne#190927.01 "Ospedale Civico"
* $cs_strttureInterne#190927.02 "Ospedale dei Bambini G. Di Cristina"
* $cs_strttureInterne#190960.01 "IRCCS Centro Neurolesi"
* $cs_strttureInterne#190960.02 "PRESIDIO OSPEDALIERO PIEMONTE"
* $cs_strttureInterne#200056.01 "KINETIKA SARDEGNA s.r.l."
* $cs_strttureInterne#200056.02 "KINETIKA SARDEGNA s.r.l."
* $cs_strttureInterne#200056.03 "KINETIKA SARDEGNA s.r.l."
* $cs_strttureInterne#200904.01 "P. O. SAN MICHELE"
* $cs_strttureInterne#200904.02 "P.O. A. BUSINCO"
* $cs_strttureInterne#200904.03 "P.O. MICROCITEMICO"
* $cs_strttureInterne#200905.01 "Stabilimento Cliniche di San Pietro"
* $cs_strttureInterne#200905.02 "Stabilimento SS. Annunziata"
* $cs_strttureInterne#200906.01 "San Giovanni di Dio"
* $cs_strttureInterne#200906.02 "Policlinico Monserrato"


---

File: repos/hl7-it_SLASH_lab-report/input/fsh/valuesets/valuesets.fsh

ValueSet: VsMinisteroSaluteAsl
Id: minsan-asl
Title: "MDS - ASL"
Description: "MDS - ASL"
//-------------------------------------------------------------------------------------------
* ^experimental = false
* ^status = #active
* include codes from system http://hl7.it/fhir/lab-report/CodeSystem/cs-asl


ValueSet: VsTipoCampione
Id: tipo-campione
Title: "Tipo Campione"
Description: "Tipo Campione"
//-------------------------------------------------------------------------------------------
* ^experimental = false
* ^status = #active
* include codes from system http://terminology.hl7.org/CodeSystem/v3-SpecimenType

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/valuesets/VsARegionali.fsh

ValueSet: VsAnagrafiRegionali
Id: vs-anagrafi-regionali
Title: "Anagrafi Regionali"
Description: "Anagrafi Regionali"
//-------------------------------------------------------------------------------------------
* ^experimental = false
* $uri#urn:oid:2.16.840.1.113883.2.9.2.10.4.1. "Anagrafi Regionali - Piemonte"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.20.4.1 "Anagrafi Regionali - Valle d`aosta"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.30.4.1 "Anagrafi Regionali - Lombardia"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.41.4.1 "Anagrafi Regionali - prov. auton. bolzano"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.42.4.1 "Anagrafi Regionali - prov. auton. trento"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.50.4.1 "Anagrafi Regionali - Veneto"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.60.4.1 "Anagrafi Regionali - Friuli venezia giulia"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.70.4.1 "Anagrafi Regionali - Liguria"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.80.4.1 "Anagrafi Regionali - Emilia romagna"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.90.4.1 "Anagrafi Regionali - Toscana"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.100.4.1 "Anagrafi Regionali - Umbria"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.110.4.1 "Anagrafi Regionali - Marche"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.120.4.1 "Anagrafi Regionali - Lazio"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.130.4.1 "Anagrafi Regionali - Abruzzo"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.140.4.1 "Anagrafi Regionali - Molise"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.150.4.1 "Anagrafi Regionali - Campania"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.160.4.1 "Anagrafi Regionali - Puglia"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.170.4.1 "Anagrafi Regionali - Basilicata"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.180.4.1 "Anagrafi Regionali - Calabria"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.190.4.1 "Anagrafi Regionali - Sicilia"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.200.4.1 "Anagrafi Regionali - Sardegna"

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/valuesets/VsLabReport.fsh


ValueSet: VsMicroorganismiOsservazioni
Id: results-microorganism-snomed-ct-ips-free-set
Title: "Risultato osservazione codificato - microorganismo IPS di SNOMED CT"
Description: "Valueset che include i codici per i microrganismi dal sottoinsieme SNOMED International Patient Set (IPS) di SNOMED CT."

* ^status = #active
* insert SNOMEDCopyrightForVS

* $sct#646165971000087107 "Shigella flexneri 5a (organism)"
* $sct#840533007 "Severe acute respiratory syndrome coronavirus 2 (organism)"
* $sct#767451000 "Trichinella nelsoni (organism)"
* $sct#767450004 "Trichinella nativa (organism)"
* $sct#767285001 "Streptococcus pneumoniae Danish serotype 42 (organism)"
* $sct#767284002 "Streptococcus pneumoniae Danish serotype 43 (organism)"
* $sct#767283008 "Streptococcus pneumoniae Danish serotype 44 (organism)"
* $sct#767282003 "Streptococcus pneumoniae Danish serotype 45 (organism)"
* $sct#767281005 "Streptococcus pneumoniae Danish serotype 46 (organism)"
* $sct#767275002 "Streptococcus pneumoniae Danish serotype 48 (organism)"
* $sct#767274003 "Streptococcus pneumoniae Danish serotype 40 (organism)"
* $sct#767208001 "Streptococcus pneumoniae Danish serotype 39 (organism)"
* $sct#767204004 "Streptococcus pneumoniae Danish serotype 38 (organism)"
* $sct#767202000 "Streptococcus pneumoniae serogroup 20 (organism)"
* $sct#767201007 "Streptococcus pneumoniae Danish serotype 34 (organism)"
* $sct#736946001 "Cryptococcus gattii genotype VGI (organism)"
* $sct#736945002 "Cryptococcus gattii genotype VGIII (organism)"
* $sct#736944003 "Cryptococcus neoformans var. grubii genotype VNI (organism)"
* $sct#736943009 "Cryptococcus neoformans var. grubii genotype VNII (organism)"
* $sct#733595003 "Enterohemorrhagic Escherichia coli serogroup O:nonmotile (organism)"
* $sct#732254006 "Yersinia enterocolitica serogroup O:19,8 (organism)"
* $sct#732253000 "Yersinia enterocolitica biotype 1A serotype O:19,8 (organism)"
* $sct#732210000 "Measles virus genotype G1 (organism)"
* $sct#732209005 "Measles virus genotype B1 (organism)"
* $sct#732208002 "Measles virus genotype D1 (organism)"
* $sct#732207007 "Measles virus genotype E (organism)"
* $sct#732206003 "Measles virus genotype F (organism)"
* $sct#726499009 "Fluoroquinolone resistant Shigella (organism)"
* $sct#726497006 "Fluoroquinolone resistant Campylobacter (organism)"
* $sct#726495003 "Ampicillin resistant Haemophilus influenzae (organism)"
* $sct#725473009 "Human alphaherpesvirus 3 clade 5 (organism)"
* $sct#725472004 "Human alphaherpesvirus 3 clade 4 (organism)"
* $sct#725471006 "Human alphaherpesvirus 3 clade 3 (organism)"
* $sct#725470007 "Human alphaherpesvirus 3 clade 2 (organism)"
* $sct#725469006 "Human alphaherpesvirus 3 clade 1 (organism)"
* $sct#725454005 "Mumps genotype N (organism)"
* $sct#725453004 "Mumps genotype L (organism)"
* $sct#725452009 "Mumps genotype K (organism)"
* $sct#725451002 "Mumps genotype J (organism)"
* $sct#725450001 "Mumps genotype I (organism)"
* $sct#725449001 "Mumps genotype H (organism)"
* $sct#725448009 "Mumps genotype G (organism)"
* $sct#725447004 "Mumps genotype F (organism)"
* $sct#725446008 "Mumps genotype D (organism)"
* $sct#725445007 "Mumps genotype C (organism)"
* $sct#725444006 "Mumps genotype B (organism)"
* $sct#725443000 "Mumps genotype A (organism)"
* $sct#722808002 "Vibrio vulnificus biotype 3 (organism)"
* $sct#722807007 "Vibrio vulnificus biotype 2 (organism)"
* $sct#722806003 "Vibrio vulnificus biotype 1 (organism)"
* $sct#722789000 "Toxigenic Corynebacterium diphtheriae type belfanti (organism)"
* $sct#722356002 "Neisseria meningitidis, beta lactamase positive (organism)"
* $sct#722355003 "Neisseria meningitidis, beta lactamase negative (organism)"
* $sct#722353005 "Haemophilus influenzae, beta lactamase positive (organism)"
* $sct#722351007 "Haemophilus influenzae, beta lactamase negative (organism)"
* $sct#722350008 "Toxigenic Corynebacterium diphtheriae type mitis (organism)"
* $sct#722349008 "Toxigenic Corynebacterium diphtheriae type intermedius (organism)"
* $sct#722346001 "Toxigenic Corynebacterium diphtheriae type gravis (organism)"
* $sct#722251009 "Mycobacterium simiae complex (organism)"
* $sct#722246003 "Toxigenic Corynebacterium pseudotuberculosis (organism)"
* $sct#721980008 "Shigella flexneri serovar 6 biotype Manchester (organism)"
* $sct#721920006 "Orthopoxvirus species, not Variola virus (organism)"
* $sct#721911002 "ESBL Shigella sonnei (organism)"
* $sct#720871003 "Yersinia enterocolitica biotype 1A serotype O:4,33 (organism)"
* $sct#720870002 "Yersinia enterocolitica serogroup O:4,33 (organism)"
* $sct#720869003 "Yersinia enterocolitica biotype 3 non-serotypable (organism)"
* $sct#720805006 "Yersinia enterocolitica biotype 5 serotype O:2,3 (organism)"
* $sct#720804005 "Yersinia enterocolitica biotype 4 serotype O:3 (organism)"
* $sct#720803004 "Yersinia enterocolitica biotype 3 serotype O:5,27 (organism)"
* $sct#720802009 "Yersinia enterocolitica biotype 3 serotype O:3 (organism)"
* $sct#720801002 "Yersinia enterocolitica biotype 3 serotype O:1,2,3 (organism)"
* $sct#720800001 "Yersinia enterocolitica biotype 2 serotype O:9 (organism)"
* $sct#720799000 "Yersinia enterocolitica biotype 2 serotype O:5,27 (organism)"
* $sct#720798008 "Yersinia enterocolitica biotype 1B serotype O:21 (organism)"
* $sct#720797003 "Yersinia enterocolitica biotype 1B serotype O:20 (organism)"
* $sct#720796007 "Yersinia enterocolitica biotype 1B serotype O:18 (organism)"
* $sct#720795006 "Yersinia enterocolitica biotype 1B serotype O:13a,13b (organism)"
* $sct#720794005 "Yersinia enterocolitica biotype 1B serotype O:8 (organism)"
* $sct#720793004 "Yersinia enterocolitica biotype 1B non-serotypable (organism)"
* $sct#720792009 "Yersinia enterocolitica biotype 1A serotype O:57 (organism)"
* $sct#720791002 "Yersinia enterocolitica biotype 1A serotype O:36 (organism)"
* $sct#720790001 "Yersinia enterocolitica biotype 1A serotype O:22 (organism)"
* $sct#720788002 "Yersinia enterocolitica biotype 1A serotype O:16 (organism)"
* $sct#720787007 "Yersinia enterocolitica biotype 1A serotype O:14 (organism)"
* $sct#720786003 "Yersinia enterocolitica biotype 1A serotype O:10 (organism)"
* $sct#720785004 "Yersinia enterocolitica serogroup O:7,13 (organism)"
* $sct#720784000 "Yersinia enterocolitica biotype 1A serotype O:7,13 (organism)"
* $sct#720782001 "Yersinia enterocolitica biotype 1A serotype O:7,8 (organism)"
* $sct#720781008 "Yersinia enterocolitica biotype 1A serotype O:6,31 (organism)"
* $sct#720780009 "Yersinia enterocolitica biotype 1A serotype O:6,30 (organism)"
* $sct#720779006 "Yersinia enterocolitica biotype 1A serotype O:5 (organism)"
* $sct#720778003 "Yersinia enterocolitica biotype 1A serotype O rough (organism)"
* $sct#720777008 "Yersinia enterocolitica biotype 1A non-serotypable (organism)"
* $sct#720776004 "Yersinia enterocolitica serogroup O:2,3 (organism)"
* $sct#720775000 "Yersinia enterocolitica serogroup O:1,2,3 (organism)"
* $sct#720774001 "Yersinia enterocolitica serogroup O:18 (organism)"
* $sct#720773007 "Yersinia enterocolitica serogroup O:57 (organism)"
* $sct#720772002 "Yersinia enterocolitica serogroup O:36 (organism)"
* $sct#720771009 "Yersinia enterocolitica serogroup O:22 (organism)"
* $sct#720769009 "Yersinia enterocolitica serogroup O:16 (organism)"
* $sct#720768001 "Yersinia enterocolitica serogroup O:10 (organism)"
* $sct#720767006 "Yersinia enterocolitica serogroup O:7,8 (organism)"
* $sct#720766002 "Yersinia enterocolitica serogroup O:6,31 (organism)"
* $sct#720765003 "Yersinia enterocolitica serogroup O:6,30 (organism)"
* $sct#720764004 "Yersinia enterocolitica serogroup O rough (organism)"
* $sct#720763005 "Yersinia enterocolitica biotype 5 (organism)"
* $sct#720762000 "Yersinia enterocolitica biotype 4 (organism)"
* $sct#720761007 "Yersinia enterocolitica biotype 3 (organism)"
* $sct#720760008 "Yersinia enterocolitica biotype 2 (organism)"
* $sct#720759003 "Yersinia enterocolitica biotype 1B (organism)"
* $sct#720758006 "Yersinia enterocolitica biotype 1A (organism)"
* $sct#720723009 "Clostridium botulinum Group II type E and F (organism)"
* $sct#720722004 "Clostridium botulinum Group II type B and E (organism)"
* $sct#720721006 "Clostridium botulinum Group II type B and F (organism)"
* $sct#720720007 "Clostridium botulinum Group II type F (organism)"
* $sct#720719001 "Clostridium botulinum Group II type E (organism)"
* $sct#720718009 "Clostridium botulinum Group II type B (organism)"
* $sct#720717004 "Clostridium botulinum Group I type B and F (organism)"
* $sct#720716008 "Clostridium botulinum Group I type A and F (organism)"
* $sct#720715007 "Clostridium botulinum Group I type A and B (organism)"
* $sct#720714006 "Clostridium botulinum Group I type F (organism)"
* $sct#720713000 "Clostridium botulinum Group I type B (organism)"
* $sct#720712005 "Clostridium botulinum Group I type A (organism)"
* $sct#720711003 "Clostridium botulinum Group IV (organism)"
* $sct#720710002 "Clostridium botulinum Group III (organism)"
* $sct#720709007 "Clostridium botulinum Group II (organism)"
* $sct#720708004 "Clostridium botulinum Group I (organism)"
* $sct#720325000 "Clostridium botulinum type G (organism)"
* $sct#720324001 "Clostridium botulinum Group IV type G (organism)"
* $sct#720323007 "Clostridium botulinum Group III type D (organism)"
* $sct#720312008 "Clostridium botulinum Group III type C (organism)"
* $sct#719913002 "Toxigenic Corynebacterium ulcerans (organism)"
* $sct#719028004 "Streptococcus pneumoniae Danish serotype 6D (organism)"
* $sct#718809000 "Mycobacterium parakoreense (organism)"
* $sct#718808008 "Mycobacterium minnesotense (organism)"
* $sct#716531008 "Multiple drug resistant methicillin resistant Staphylococcus aureus (organism)"
* $sct#716530009 "Non-multiple drug resistant methicillin resistant Staphylococcus aureus (organism)"
* $sct#715358008 "Streptococcus agalactiae serotype IX (organism)"
* $sct#715357003 "Streptococcus agalactiae serotype VI (organism)"
* $sct#715335005 "Vibrio cholerae serogroup O141 (organism)"
* $sct#715307006 "Carbapenem resistant Escherichia coli (organism)"
* $sct#713924007 "Non-hemolytic Streptococcus agalactiae (organism)"
* $sct#713611009 "Mycobacterium chlorophenolicum (organism)"
* $sct#712913003 "Mycobacterium europaeum (organism)"
* $sct#712912008 "Mycobacterium heraklionense (organism)"
* $sct#712911001 "Mycobacterium kyorinense (organism)"
* $sct#712910000 "Mycobacterium riyadhense (organism)"
* $sct#712909005 "Mycobacterium vulneris (organism)"
* $sct#712666003 "Vancomycin intermediate Enterococcus faecium (organism)"
* $sct#712665004 "Vancomycin resistant Enterococcus faecium (organism)"
* $sct#712664000 "Vancomycin intermediate Enterococcus faecalis (organism)"
* $sct#712663006 "Vancomycin resistant Enterococcus faecalis (organism)"
* $sct#710891006 "Methicillin resistant Staphylococcus (organism)"
* $sct#710564002 "Panton-Valentine leukocidin producing Staphylococcus aureus (organism)"
* $sct#710347001 "Toxigenic Vibrio cholerae, O1 (organism)"
* $sct#710346005 "Nontoxigenic Vibrio cholerae, O1 (organism)"
* $sct#710334006 "Vancomycin resistant enterococcus vanB strain (organism)"
* $sct#710333000 "Vancomycin resistant enterococcus vanA strain (organism)"
* $sct#710331003 "Anaerobic Campylobacter species (organism)"
* $sct#709682006 "Mycobacterium iranicum (organism)"
* $sct#708352002 "Mycobacterium algericum (organism)"
* $sct#708346003 "Mycobacterium florentinum (organism)"
* $sct#708341008 "Mycobacterium llatzerense (organism)"
* $sct#708336000 "Mycobacterium mantenii (organism)"
* $sct#708333008 "Mycobacterium paragordonae (organism)"
* $sct#708329001 "Mycobacterium senuense (organism)"
* $sct#708324006 "Mycobacterium setense (organism)"
* $sct#708319008 "Mycobacterium timonense (organism)"
* $sct#707769000 "Enterococcus faecium genotype vanB (organism)"
* $sct#707768008 "Enterococcus faecium genotype vanA (organism)"
* $sct#707767003 "Vancomycin resistant vanB2 and vanB3 Enterococcus (organism)"
* $sct#707328006 "Mycobacterium paraterrae (organism)"
* $sct#706997008 "Escherichia coli serotype O112:H2 (organism)"
* $sct#705167005 "Yersinia enterocolitica subsp. palearctica (organism)"
* $sct#705166001 "Yersinia enterocolitica subsp. enterocolitica (organism)"
* $sct#705094007 "Mycobacteroides abscessus subspecies bolletii (organism)"
* $sct#704995002 "Mycobacteroides abscessus subspecies abscessus (organism)"
* $sct#703893002 "Hepatitis B virus genotype H (organism)"
* $sct#703892007 "Hepatitis B virus genotype G (organism)"
* $sct#703891000 "Hepatitis B virus genotype F (organism)"
* $sct#703890004 "Hepatitis B virus genotype E (organism)"
* $sct#703889008 "Hepatitis B virus genotype D (organism)"
* $sct#703888000 "Hepatitis B virus genotype C (organism)"
* $sct#703887005 "Hepatitis B virus genotype B (organism)"
* $sct#703886001 "Hepatitis B virus genotype A (organism)"
* $sct#703759007 "Taenia solium adult (organism)"
* $sct#703632006 "Genus Taenia egg (organism)"
* $sct#703075004 "Mycobacterium avium subspecies hominissuis (organism)"
* $sct#699562002 "Plasmodium malariae schizont (organism)"
* $sct#699561009 "Plasmodium malariae merozoite (organism)"
* $sct#699560005 "Plasmodium vivax schizont (organism)"
* $sct#699559000 "Plasmodium vivax merozoite (organism)"
* $sct#699557003 "Plasmodium ovale schizont (organism)"
* $sct#699555006 "Plasmodium ovale merozoite (organism)"
* $sct#699553004 "Plasmodium falciparum schizont (organism)"
* $sct#699550001 "Plasmodium falciparum merozoite (organism)"
* $sct#699434006 "Genus Cyclospora oocyst (organism)"
* $sct#699416007 "Entamoeba histolytica-Entamoeba dispar complex cyst (organism)"
* $sct#699415006 "Entamoeba histolytica-Entamoeba dispar complex trophozoite (organism)"
* $sct#698216001 "Vancomycin susceptible Staphylococcus aureus (organism)"
* $sct#698215002 "Rickettsia species 364D (organism)"
* $sct#698204007 "Measles virus genotype D11 (organism)"
* $sct#698203001 "Rubella virus genotype 1J (organism)"
* $sct#698202006 "Rubella virus genotype 1I (organism)"
* $sct#698201004 "Rubella virus genotype 1H (organism)"
* $sct#698181009 "Streptococcus agalactiae serotype VIII (organism)"
* $sct#698180005 "Streptococcus agalactiae serotype VII (organism)"
* $sct#698179007 "Streptococcus agalactiae serotype V/R (organism)"
* $sct#698178004 "Streptococcus agalactiae serotype V/c (organism)"
* $sct#698177009 "Streptococcus agalactiae serotype V (organism)"
* $sct#698174002 "Streptococcus agalactiae serotype IV (organism)"
* $sct#698173008 "Streptococcus agalactiae serotype III/R (organism)"
* $sct#698172003 "Streptococcus agalactiae serotype III/c (organism)"
* $sct#698171005 "Streptococcus agalactiae serotype III (organism)"
* $sct#698170006 "Streptococcus agalactiae serotype II/R (organism)"
* $sct#698169005 "Streptococcus agalactiae serotype II/c (organism)"
* $sct#698168002 "Streptococcus agalactiae serotype II (organism)"
* $sct#698167007 "Streptococcus agalactiae serotype Ib/c (organism)"
* $sct#698166003 "Streptococcus agalactiae serotype Ib (organism)"
* $sct#698165004 "Streptococcus agalactiae serotype Ia/c (organism)"
* $sct#698164000 "Streptococcus agalactiae serotype Ia (organism)"
* $sct#698162001 "Neisseria meningitidis serogroup E (organism)"
* $sct#698160009 "Streptococcus pyogenes type emm110 (organism)"
* $sct#698159004 "Streptococcus pyogenes type emm109 (organism)"
* $sct#698158007 "Streptococcus pyogenes type emm108 (organism)"
* $sct#698157002 "Streptococcus pyogenes type emm107 (organism)"
* $sct#698156006 "Streptococcus pyogenes type emm106 (organism)"
* $sct#698155005 "Streptococcus pyogenes type emm105 (organism)"
* $sct#698154009 "Streptococcus pyogenes type emm104 (organism)"
* $sct#698153003 "Streptococcus pyogenes type emm103 (organism)"
* $sct#698152008 "Streptococcus pyogenes type emm102 (organism)"
* $sct#698151001 "Streptococcus pyogenes type emm101 (organism)"
* $sct#698150000 "Listeria monocytogenes serotype 4bx (organism)"
* $sct#698148008 "Streptococcus pneumoniae Danish serotype 47F (organism)"
* $sct#698147003 "Streptococcus pneumoniae Danish serotype 47A (organism)"
* $sct#698146007 "Streptococcus pneumoniae serogroup 47 (organism)"
* $sct#698140001 "Streptococcus pneumoniae Danish serotype 41F (organism)"
* $sct#698139003 "Streptococcus pneumoniae Danish serotype 41A (organism)"
* $sct#698138006 "Streptococcus pneumoniae serogroup 41 (organism)"
* $sct#698137001 "Streptococcus pneumoniae Danish serotype 37 (organism)"
* $sct#698136005 "Streptococcus pneumoniae Danish serotype 36 (organism)"
* $sct#698135009 "Streptococcus pneumoniae Danish serotype 35F (organism)"
* $sct#698134008 "Streptococcus pneumoniae Danish serotype 35C (organism)"
* $sct#698133002 "Streptococcus pneumoniae Danish serotype 35B (organism)"
* $sct#698132007 "Streptococcus pneumoniae Danish serotype 35A (organism)"
* $sct#698131000 "Streptococcus pneumoniae Danish serotype 33D (organism)"
* $sct#698130004 "Streptococcus pneumoniae Danish serotype 33C (organism)"
* $sct#698129009 "Streptococcus pneumoniae Danish serotype 33B (organism)"
* $sct#698128001 "Streptococcus pneumoniae Danish serotype 32F (organism)"
* $sct#698127006 "Streptococcus pneumoniae Danish serotype 32A (organism)"
* $sct#698126002 "Streptococcus pneumoniae serogroup 32 (organism)"
* $sct#698125003 "Streptococcus pneumoniae Danish serotype 27 (organism)"
* $sct#698124004 "Streptococcus pneumoniae Danish serotype 25F (organism)"
* $sct#698123005 "Streptococcus pneumoniae Danish serotype 25A (organism)"
* $sct#698122000 "Streptococcus pneumoniae serogroup 25 (organism)"
* $sct#698121007 "Streptococcus pneumoniae Danish serotype 24F (organism)"
* $sct#698120008 "Streptococcus pneumoniae Danish serotype 24B (organism)"
* $sct#698119002 "Streptococcus pneumoniae Danish serotype 24A (organism)"
* $sct#698118005 "Streptococcus pneumoniae Danish serotype 19C (organism)"
* $sct#698117000 "Streptococcus pneumoniae Danish serotype 19B (organism)"
* $sct#698116009 "Streptococcus pneumoniae Danish serotype 18F (organism)"
* $sct#698115008 "Streptococcus pneumoniae Danish serotype 18B (organism)"
* $sct#698114007 "Streptococcus pneumoniae Danish serotype 18A (organism)"
* $sct#698113001 "Streptococcus pneumoniae Danish serotype 17A (organism)"
* $sct#698112006 "Streptococcus pneumoniae Danish serotype 16F (organism)"
* $sct#698111004 "Streptococcus pneumoniae Danish serotype 16A (organism)"
* $sct#698110003 "Streptococcus pneumoniae Danish serotype 15F (organism)"
* $sct#698109008 "Streptococcus pneumoniae Danish serotype 12B (organism)"
* $sct#698108000 "Streptococcus pneumoniae Danish serotype 12A (organism)"
* $sct#698107005 "Streptococcus pneumoniae Danish serotype 11F (organism)"
* $sct#698106001 "Streptococcus pneumoniae Danish serotype 11D (organism)"
* $sct#698105002 "Streptococcus pneumoniae Danish serotype 11C (organism)"
* $sct#698104003 "Streptococcus pneumoniae Danish serotype 11B (organism)"
* $sct#698103009 "Streptococcus pneumoniae Danish serotype 10C (organism)"
* $sct#698102004 "Streptococcus pneumoniae Danish serotype 7B (organism)"
* $sct#698099004 "Streptococcus pneumoniae serogroup 24 (organism)"
* $sct#698098007 "Streptococcus pneumoniae Danish serotype 23A (organism)"
* $sct#698097002 "Streptococcus pneumoniae Danish serotype 21 (organism)"
* $sct#698096006 "Streptococcus pneumoniae Danish serotype 7C (organism)"
* $sct#698095005 "Streptococcus pneumoniae Danish serotype 6C (organism)"
* $sct#609075007 "Trichinella spiralis larva (organism)"
* $sct#609074006 "Genus Trichinella larva (organism)"
* $sct#609056002 "Trichinella spiralis adult (organism)"
* $sct#609055003 "Genus Trichinella adult (organism)"
* $sct#608966000 "Plasmodium vivax gametocyte (organism)"
* $sct#608965001 "Plasmodium ovale gametocyte (organism)"
* $sct#608964002 "Plasmodium malariae gametocyte (organism)"
* $sct#608963008 "Plasmodium falciparum gametocyte (organism)"
* $sct#608962003 "Genus Plasmodium gametocyte (organism)"
* $sct#608958009 "Cyclospora cayetanensis oocyst (organism)"
* $sct#608957004 "Genus Cryptosporidium oocyst (organism)"
* $sct#608956008 "Toxoplasma gondii trophozoite (organism)"
* $sct#608948005 "Giardia lamblia cyst (organism)"
* $sct#608946009 "Genus Giardia cyst (organism)"
* $sct#608938008 "Plasmodium vivax trophozoite (organism)"
* $sct#608937003 "Plasmodium ovale trophozoite (organism)"
* $sct#608936007 "Plasmodium malariae trophozoite (organism)"
* $sct#608935006 "Plasmodium falciparum trophozoite (organism)"
* $sct#608934005 "Genus Plasmodium trophozoite (organism)"
* $sct#608932009 "Giardia lamblia trophozoite (organism)"
* $sct#608931002 "Genus Giardia trophozoite (organism)"
* $sct#608927008 "Genus Cryptosporidium trophozoite (organism)"
* $sct#608923007 "Genus Babesia trophozoite (organism)"
* $sct#603433009 "Hepatitis C virus subtype 4e (organism)"
* $sct#603432004 "Hepatitis C virus subtype 4d (organism)"
* $sct#603431006 "Hepatitis C virus subtype 4c (organism)"
* $sct#603430007 "Hepatitis C virus subtype 4b (organism)"
* $sct#603429002 "Hepatitis C virus subtype 2c (organism)"
* $sct#603428005 "Hepatitis C virus subtype 1c (organism)"
* $sct#603427000 "Hepatitis C virus genotype 6 (organism)"
* $sct#603426009 "Hepatitis C virus genotype 5 (organism)"
* $sct#603425008 "Hepatitis C virus genotype 4 (organism)"
* $sct#603424007 "Hepatitis C virus genotype 3 (organism)"
* $sct#603423001 "Hepatitis C virus genotype 2 (organism)"
* $sct#603422006 "Hepatitis C virus genotype 1 (organism)"
* $sct#603421004 "Hepatitis C virus subtype 4a (organism)"
* $sct#603420003 "Hepatitis C virus subtype 6a (organism)"
* $sct#603419009 "Hepatitis C virus subtype 5a (organism)"
* $sct#603418001 "Hepatitis C virus subtype 3b (organism)"
* $sct#603417006 "Hepatitis C virus subtype 3a (organism)"
* $sct#603416002 "Hepatitis C virus subtype 2b (organism)"
* $sct#603415003 "Hepatitis C virus subtype 2a (organism)"
* $sct#603414004 "Hepatitis C virus subtype 1b (organism)"
* $sct#603413005 "Hepatitis C virus subtype 1a (organism)"
* $sct#450963008 "Cocal virus (organism)"
* $sct#450862004 "Cryptococcus gattii (organism)"
* $sct#450622000 "Lujo virus (organism)"
* $sct#450611004 "Legionella bozemanae (organism)"
* $sct#450597006 "Bundibugyo ebolavirus (organism)"
* $sct#450548002 "Listeria monocytogenes serotype 7 (organism)"
* $sct#450547007 "Listeria monocytogenes serotype 4e (organism)"
* $sct#450546003 "Listeria monocytogenes serotype 4d (organism)"
* $sct#450545004 "Listeria monocytogenes serotype 4ab (organism)"
* $sct#450544000 "Listeria monocytogenes serotype 4c (organism)"
* $sct#450543006 "Listeria monocytogenes serotype 4a (organism)"
* $sct#450542001 "Listeria monocytogenes serotype 3c (organism)"
* $sct#450541008 "Listeria monocytogenes serotype 3b (organism)"
* $sct#450540009 "Listeria monocytogenes serotype 3a (organism)"
* $sct#450539007 "Listeria monocytogenes serotype 4b (organism)"
* $sct#450538004 "Listeria monocytogenes serotype 1/2c (organism)"
* $sct#450537009 "Listeria monocytogenes serotype 1/2b (organism)"
* $sct#450536000 "Listeria monocytogenes serotype 1/2a (organism)"
* $sct#449411006 "Brucella inopinata (organism)"
* $sct#449024000 "Pandemic influenza A (H1N1) 2009 (organism)"
* $sct#448945001 "Campylobacter lari subspecies lari (organism)"
* $sct#448403005 "Campylobacter sputorum biovar paraureolyticus (organism)"
* $sct#448130009 "Campylobacter avium (organism)"
* $sct#447797004 "Campylobacter peloridis (organism)"
* $sct#447728001 "Campylobacter cuniculorum (organism)"
* $sct#447727006 "Campylobacter canadensis (organism)"
* $sct#446396002 "Influenza A virus subtype H1 (organism)"
* $sct#446191000 "Campylobacter lari subspecies concheus (organism)"
* $sct#445776001 "Campylobacter subantarcticus (organism)"
* $sct#444353005 "Streptococcus pneumoniae Danish serotype 28F (organism)"
* $sct#444352000 "Streptococcus pneumoniae Danish serotype 28A (organism)"
* $sct#443670000 "Streptococcus pneumoniae Danish serotype 31 (organism)"
* $sct#443401009 "Nontoxigenic Corynebacterium diphtheriae (organism)"
* $sct#443377006 "Toxigenic Corynebacterium diphtheriae (organism)"
* $sct#443240001 "Streptococcus pneumoniae Danish serotype 15C (organism)"
* $sct#443239003 "Streptococcus pneumoniae Danish serotype 15A (organism)"
* $sct#443156004 "Streptococcus pneumoniae Danish serotype 6A (organism)"
* $sct#443155000 "Streptococcus pneumoniae serogroup 28 (organism)"
* $sct#443060003 "Streptococcus pyogenes type emm11 (organism)"
* $sct#443059008 "Streptococcus pyogenes type emm111 (organism)"
* $sct#443057005 "Streptococcus pyogenes type emm30 (organism)"
* $sct#443056001 "Streptococcus pyogenes type emm31 (organism)"
* $sct#443055002 "Streptococcus pyogenes type emm32 (organism)"
* $sct#443054003 "Streptococcus pyogenes type emm33 (organism)"
* $sct#443053009 "Streptococcus pyogenes type emm100 (organism)"
* $sct#443052004 "Streptococcus pyogenes type emm7 (organism)"
* $sct#443035003 "Streptococcus pyogenes type emm83 (organism)"
* $sct#443034004 "Streptococcus pyogenes type emm84 (organism)"
* $sct#443033005 "Streptococcus pyogenes type emm85 (organism)"
* $sct#443032000 "Streptococcus pyogenes type emm86 (organism)"
* $sct#443031007 "Streptococcus pyogenes type emm70 (organism)"
* $sct#443028006 "Streptococcus pyogenes type emm10 (organism)"
* $sct#443027001 "Streptococcus pyogenes type emm60 (organism)"
* $sct#443026005 "Streptococcus pyogenes type emm8 (organism)"
* $sct#443010009 "Streptococcus pyogenes type emm117 (organism)"
* $sct#443009004 "Streptococcus pyogenes type emm53 (organism)"
* $sct#443008007 "Streptococcus pyogenes type emm54 (organism)"
* $sct#443007002 "Streptococcus pyogenes type emm55 (organism)"
* $sct#442998009 "Streptococcus pyogenes type emm18 (organism)"
* $sct#442996008 "Streptococcus pyogenes type emm78 (organism)"
* $sct#442995007 "Streptococcus pyogenes type emm119 (organism)"
* $sct#442991003 "Streptococcus pyogenes type emm69 (organism)"
* $sct#442988003 "Streptococcus pyogenes type emm15 (organism)"
* $sct#442985000 "Streptococcus pyogenes type emm52 (organism)"
* $sct#442977009 "Streptococcus pyogenes type emm92 (organism)"
* $sct#442976000 "Streptococcus pyogenes type emm93 (organism)"
* $sct#442975001 "Streptococcus pyogenes type emm94 (organism)"
* $sct#442974002 "Streptococcus pyogenes type emm95 (organism)"
* $sct#442969005 "Streptococcus pyogenes type emm22 (organism)"
* $sct#442968002 "Streptococcus pyogenes type emm23 (organism)"
* $sct#442967007 "Streptococcus pyogenes type emm24 (organism)"
* $sct#442966003 "Streptococcus pyogenes type emm25 (organism)"
* $sct#442962001 "Streptococcus pyogenes type emm112 (organism)"
* $sct#442961008 "Streptococcus pyogenes type emm74 (organism)"
* $sct#442956006 "Streptococcus pyogenes type emm120 (organism)"
* $sct#442955005 "Streptococcus pyogenes type emm121 (organism)"
* $sct#442954009 "Streptococcus pyogenes type emm71 (organism)"
* $sct#442953003 "Streptococcus pyogenes type emm72 (organism)"
* $sct#442948008 "Streptococcus pyogenes type emm62 (organism)"
* $sct#442947003 "Streptococcus pyogenes type emm63 (organism)"
* $sct#442940001 "Streptococcus pyogenes type emm79 (organism)"
* $sct#442935009 "Streptococcus pyogenes type emm64 (organism)"
* $sct#442934008 "Streptococcus pyogenes type emm65 (organism)"
* $sct#442933002 "Streptococcus pyogenes type emm66 (organism)"
* $sct#442932007 "Streptococcus pyogenes type emm67 (organism)"
* $sct#442930004 "Streptococcus pyogenes type emm42 (organism)"
* $sct#442929009 "Streptococcus pyogenes type emm43 (organism)"
* $sct#442923005 "Streptococcus pyogenes type emm19 (organism)"
* $sct#442922000 "Streptococcus pyogenes type emm20 (organism)"
* $sct#442906001 "Streptococcus pyogenes type emm82 (organism)"
* $sct#442905002 "Streptococcus pyogenes type emm56 (organism)"
* $sct#442904003 "Streptococcus pyogenes type emm57 (organism)"
* $sct#442897000 "Streptococcus pyogenes type emm16 (organism)"
* $sct#442896009 "Streptococcus pyogenes type emm17 (organism)"
* $sct#442895008 "Streptococcus pyogenes type emm21 (organism)"
* $sct#442882003 "Streptococcus pyogenes type emm13 (organism)"
* $sct#442879008 "Streptococcus pyogenes type emm115 (organism)"
* $sct#442873009 "Streptococcus pyogenes type emm59 (organism)"
* $sct#442872004 "Streptococcus pyogenes type emm6 (organism)"
* $sct#442863007 "Streptococcus pyogenes type emm116 (organism)"
* $sct#442862002 "Streptococcus pyogenes type emm68 (organism)"
* $sct#442857003 "Streptococcus pyogenes type emm80 (organism)"
* $sct#442856007 "Streptococcus pyogenes type emm81 (organism)"
* $sct#442853004 "Streptococcus pyogenes type emm47 (organism)"
* $sct#442852009 "Streptococcus pyogenes type emm49 (organism)"
* $sct#442851002 "Streptococcus pyogenes type emm50 (organism)"
* $sct#442850001 "Streptococcus pyogenes type emm51 (organism)"
* $sct#442846008 "Streptococcus pyogenes type emm75 (organism)"
* $sct#442839004 "Streptococcus pyogenes type emm87 (organism)"
* $sct#442838007 "Streptococcus pyogenes type emm88 (organism)"
* $sct#442835005 "Streptococcus pyogenes type emm113 (organism)"
* $sct#442834009 "Streptococcus pyogenes type emm114 (organism)"
* $sct#442827007 "Streptococcus pyogenes type emm29 (organism)"
* $sct#442826003 "Streptococcus pyogenes type emm34 (organism)"
* $sct#442825004 "Streptococcus pyogenes type emm35 (organism)"
* $sct#442824000 "Streptococcus pyogenes type emm36 (organism)"
* $sct#442821008 "Streptococcus pyogenes type emm9 (organism)"
* $sct#442820009 "Streptococcus pyogenes type emm91 (organism)"
* $sct#442816005 "Streptococcus pyogenes type emm46 (organism)"
* $sct#442815009 "Streptococcus pyogenes type emm96 (organism)"
* $sct#442814008 "Streptococcus pyogenes type emm97 (organism)"
* $sct#442813002 "Streptococcus pyogenes type emm3 (organism)"
* $sct#442812007 "Streptococcus pyogenes type emm37 (organism)"
* $sct#442810004 "Streptococcus pyogenes type emm98 (organism)"
* $sct#442809009 "Streptococcus pyogenes type emm99 (organism)"
* $sct#442802000 "Streptococcus pyogenes type emm38 (organism)"
* $sct#442801007 "Streptococcus pyogenes type emm39 (organism)"
* $sct#442800008 "Streptococcus pyogenes type emm40 (organism)"
* $sct#442799009 "Streptococcus pyogenes type emm41 (organism)"
* $sct#442794004 "Streptococcus pyogenes type emm45 (organism)"
* $sct#442786006 "Streptococcus pyogenes type emm26 (organism)"
* $sct#442785005 "Streptococcus pyogenes type emm27 (organism)"
* $sct#442615006 "Bermejo virus (organism)"
* $sct#442513007 "Araraquara virus (organism)"
* $sct#442505006 "Chlamydia trachomatis, serotype Ja (organism)"
* $sct#442352004 "Influenza A virus subtype H1N1 (organism)"
* $sct#442049002 "Streptococcus pneumoniae Danish serotype 33A (organism)"
* $sct#442001008 "Andes orthohantavirus (organism)"
* $sct#441723002 "Streptococcus pyogenes type emm76 (organism)"
* $sct#441666003 "Castelo dos Sonhos virus (organism)"
* $sct#441618005 "Amur virus (organism)"
* $sct#441602004 "Streptococcus pneumoniae Danish serotype 10F (organism)"
* $sct#441566007 "Streptococcus pneumoniae Danish serotype 22A (organism)"
* $sct#441523000 "Streptococcus pneumoniae serogroup 7 (organism)"
* $sct#439294004 "Streptococcus pyogenes type emm61 (organism)"
* $sct#438978005 "Streptococcus pyogenes type emm44 (organism)"
* $sct#438977000 "Streptococcus pyogenes type emm118 (organism)"
* $sct#437823001 "Rickettsia slovaca (organism)"
* $sct#437822006 "Rickettsia honei (organism)"
* $sct#433669003 "Grimontia hollisae (organism)"
* $sct#433053006 "Listeria ivanovii subspecies ivanovii (organism)"
* $sct#433052001 "Legionella gresilensis (organism)"
* $sct#433050009 "Legionella busanensis (organism)"
* $sct#433048001 "Legionella taurinensis (organism)"
* $sct#432832005 "Francisella tularensis subspecies novicida (organism)"
* $sct#432830002 "Francisella tularensis subspecies japonica (organism)"
* $sct#432714000 "Legionella beliardensis (organism)"
* $sct#432713006 "Legionella rowbothamii (organism)"
* $sct#432712001 "Legionella drozanskii (organism)"
* $sct#432580000 "Leptospira fainei (organism)"
* $sct#432579003 "Leptospira alexanderi (organism)"
* $sct#432537009 "Campylobacter lanienae (organism)"
* $sct#432460004 "Campylobacter insulaenigrae (organism)"
* $sct#432459009 "Campylobacter hyointestinalis subspecies lawsonii (organism)"
* $sct#432453005 "Legionella fallonii (organism)"
* $sct#432325006 "Legionella drancourtii (organism)"
* $sct#431990001 "Tetragenococcus solitarius (organism)"
* $sct#430983003 "Brucella abortus strain RB51 (organism)"
* $sct#430982008 "Brucella abortus, vaccinal strain 19 (organism)"
* $sct#430914003 "Mycobacterium pinnipedii (organism)"
* $sct#430579009 "Mycobacterium caprae (organism)"
* $sct#429569005 "Streptococcus pneumoniae serogroup 35 (organism)"
* $sct#429337002 "Streptococcus pyogenes type emm89 (organism)"
* $sct#429336006 "Streptococcus pyogenes type emm5 (organism)"
* $sct#428855006 "Streptococcus pyogenes type emm90 (organism)"
* $sct#428854005 "Streptococcus pyogenes type emm1 (organism)"
* $sct#428793005 "Streptococcus pyogenes type emm12 (organism)"
* $sct#428765006 "Mycobacterium terrae complex (organism)"
* $sct#428542004 "Streptococcus pyogenes type emm77 (organism)"
* $sct#428541006 "Streptococcus pyogenes type emm14 (organism)"
* $sct#428366009 "Streptococcus pneumoniae Danish serotype 13 (organism)"
* $sct#428254000 "Streptococcus pyogenes type emm58 (organism)"
* $sct#428238003 "Streptococcus pyogenes type emm2 (organism)"
* $sct#428139002 "Yersinia enterocolitica, serogroup O:14 (organism)"
* $sct#428124003 "Streptococcus pneumoniae Danish serotype 10B (organism)"
* $sct#427823008 "Streptococcus pyogenes type emm73 (organism)"
* $sct#427822003 "Streptococcus pyogenes type emm4 (organism)"
* $sct#427821005 "Streptococcus pyogenes type emm48 (organism)"
* $sct#427814005 "Streptococcus pyogenes type emm28 (organism)"
* $sct#427741005 "Streptococcus pneumoniae Danish serotype 23B (organism)"
* $sct#427706006 "Measles virus genotype D5 (organism)"
* $sct#427559006 "Rubella virus genotype 1D (organism)"
* $sct#427398000 "Rubella virus genotype 1C (organism)"
* $sct#427353006 "Measles virus genotype D7 (organism)"
* $sct#427329000 "Rubella virus genotype 2C (organism)"
* $sct#427290009 "Measles virus genotype D8 (organism)"
* $sct#427263000 "Measles virus genotype D10 (organism)"
* $sct#427182003 "Measles virus genotype C2 (organism)"
* $sct#427073007 "Measles virus genotype B3 (organism)"
* $sct#426654002 "Measles virus genotype B2 (organism)"
* $sct#426640005 "Measles virus genotype D2 (organism)"
* $sct#426612000 "Rubella virus genotype 2B (organism)"
* $sct#426558008 "Measles virus genotype A (organism)"
* $sct#426535005 "Measles virus genotype D9 (organism)"
* $sct#426424002 "Measles virus genotype H2 (organism)"
* $sct#426367009 "Rubella virus genotype 1F (organism)"
* $sct#426261008 "Measles virus genotype D4 (organism)"
* $sct#426209008 "Rubella virus genotype 1G (organism)"
* $sct#426188007 "Measles virus genotype C1 (organism)"
* $sct#426091009 "Measles virus genotype G2 (organism)"
* $sct#426085007 "Rubella virus genotype 1E (organism)"
* $sct#426028006 "Measles virus genotype D6 (organism)"
* $sct#425970007 "Measles virus genotype D3 (organism)"
* $sct#425966004 "Measles virus genotype H1 (organism)"
* $sct#425891000 "Rubella virus genotype 2A (organism)"
* $sct#425872000 "Rubella virus genotype 1a (organism)"
* $sct#425684000 "Measles virus genotype G3 (organism)"
* $sct#425415004 "Rubella virus genotype 1B (organism)"
* $sct#425092008 "Zaire virus (organism)"
* $sct#424421007 "Genus Marburgvirus (organism)"
* $sct#424206003 "Ebolavirus (organism)"
* $sct#424116003 "Sudan ebolavirus (organism)"
* $sct#423042009 "Ivory Coast ebolavirus (organism)"
* $sct#422839008 "Lake Victoria marburgvirus (organism)"
* $sct#422448009 "Reston ebolavirus (organism)"
* $sct#420364006 "Anaplasma phagocytophilum (organism)"
* $sct#420216004 "Streptococcus pneumoniae Danish serotype 22F (organism)"
* $sct#420148006 "Streptococcus pneumoniae Danish serotype 33F (organism)"
* $sct#420138009 "Streptococcus pneumoniae Danish serotype 17F (organism)"
* $sct#419915004 "Streptococcus pneumoniae Danish serotype 19F (organism)"
* $sct#419871001 "Streptococcus pneumoniae Danish serotype 5 (organism)"
* $sct#419527005 "Streptococcus pneumoniae Danish serotype 2 (organism)"
* $sct#419305002 "Streptococcus pneumoniae Danish serotype 12F (organism)"
* $sct#419167001 "Streptococcus pneumoniae Danish serotype 9A (organism)"
* $sct#419071000 "Streptococcus pneumoniae Danish serotype 11A (organism)"
* $sct#418909007 "Bacillus anthracis - virulent strain (organism)"
* $sct#418902003 "Streptococcus pneumoniae Danish serotype 6B (organism)"
* $sct#418883007 "Streptococcus pneumoniae Danish serotype 9L (organism)"
* $sct#418759005 "Streptococcus pneumoniae Danish serotype 8 (organism)"
* $sct#418451009 "Streptococcus pneumoniae Danish serotype 18C (organism)"
* $sct#418322006 "Streptococcus pneumoniae Danish serotype 9V (organism)"
* $sct#418217008 "Streptococcus pneumoniae Danish serotype 23F (organism)"
* $sct#418147001 "Streptococcus pneumoniae serogroup 18 (organism)"
* $sct#418101009 "Babesia EU1 (organism)"
* $sct#417943000 "Methicillin susceptible Staphylococcus aureus (organism)"
* $sct#417797007 "Human respiratory syncytial virus B4 (organism)"
* $sct#417796003 "Human respiratory syncytial virus B3 (organism)"
* $sct#417795004 "Human respiratory syncytial virus B2 (organism)"
* $sct#417794000 "Human respiratory syncytial virus B1 (organism)"
* $sct#417793006 "Human respiratory syncytial virus A7 (organism)"
* $sct#417792001 "Human respiratory syncytial virus A6 (organism)"
* $sct#417791008 "Human respiratory syncytial virus A5 (organism)"
* $sct#417790009 "Human respiratory syncytial virus A4 (organism)"
* $sct#417774009 "Human respiratory syncytial virus A3 (organism)"
* $sct#417773003 "Human respiratory syncytial virus A2 (organism)"
* $sct#417772008 "Human respiratory syncytial virus A1 (organism)"
* $sct#417771001 "Human respiratory syncytial virus B (organism)"
* $sct#417770000 "Human respiratory syncytial virus A (organism)"
* $sct#417722006 "Cryptosporidium hominis (organism)"
* $sct#417657001 "Bartonella vinsonii subsp. arupensis (organism)"
* $sct#417542000 "Rotavirus (organism)"
* $sct#417443008 "Klebsiella granulomatis (organism)"
* $sct#417270004 "Streptococcus pneumoniae serogroup 9 (organism)"
* $sct#417207000 "Escherichia coli, inactive (organism)"
* $sct#416961000 "Cryptosporidium felis (organism)"
* $sct#416762004 "Cryptosporidium canis (organism)"
* $sct#416679003 "Campylobacter hominis (organism)"
* $sct#416551001 "Borrelia afzelii (organism)"
* $sct#416435006 "Measles virus, viral envelope M protein variant (organism)"
* $sct#416138003 "Rotavirus group A (organism)"
* $sct#415983007 "Babesia duncani (organism)"
* $sct#415981009 "Babesia MO1 (organism)"
* $sct#415979007 "Babesia CA3 (organism)"
* $sct#415904003 "Cryptococcus neoformans serotype A (organism)"
* $sct#415864001 "Yersinia enterocolitica, not O:3; O:8; or O:5,27 (organism)"
* $sct#415863007 "Yersinia enterocolitica serogroup O:5, 27 (organism)"
* $sct#415862002 "Yersinia enterocolitica serogroup O:4,32 (organism)"
* $sct#415861009 "Yersinia enterocolitica serogroup O:2a,3 (organism)"
* $sct#415860005 "Yersinia enterocolitica serogroup O:21 (organism)"
* $sct#415859000 "Yersinia enterocolitica serogroup O:20 (organism)"
* $sct#415858008 "Yersinia enterocolitica serogroup O:19 (organism)"
* $sct#415857003 "Yersinia enterocolitica serogroup O:13a,13b (organism)"
* $sct#415856007 "Yersinia enterocolitica serogroup O:12, 25 (organism)"
* $sct#415855006 "Yersinia enterocolitica serogroup O:1,2a,3 (organism)"
* $sct#415854005 "Yersinia enterocolitica non-serogroupable (organism)"
* $sct#415820009 "Vibrio cholerae, non-O139 (organism)"
* $sct#415819003 "Vibrio cholerae, non-O1/non-O139 (organism)"
* $sct#415621005 "Streptococcus pneumoniae serogroup 10 (organism)"
* $sct#415619000 "Streptococcus pneumoniae Danish serotype 7A (organism)"
* $sct#415618008 "Streptococcus pneumoniae serogroup 6 (organism)"
* $sct#415616007 "Streptococcus pneumoniae Danish serotype 4 (organism)"
* $sct#415614005 "Streptococcus pneumoniae serogroup 33 (organism)"
* $sct#415613004 "Streptococcus pneumoniae serogroup 23 (organism)"
* $sct#415611002 "Streptococcus pneumoniae Danish serotype 19A (organism)"
* $sct#415610001 "Streptococcus pneumoniae Danish serotype 15B (organism)"
* $sct#415609006 "Streptococcus pneumoniae serogroup 15 (organism)"
* $sct#415608003 "Streptococcus pneumoniae Danish serotype 10A (organism)"
* $sct#415607008 "Streptococcus pneumoniae Danish serotype 1 (organism)"
* $sct#415534000 "Small-colony-forming beta-hemolytic group A streptococci (organism)"
* $sct#415360003 "SARS coronavirus (organism)"
* $sct#415343008 "Rickettsia, typhus group (organism)"
* $sct#415342003 "Rickettsia, spotted fever group (organism)"
* $sct#415341005 "Rickettsia felis (organism)"
* $sct#414810006 "Neisseria meningitidis non-groupable (organism)"
* $sct#414809001 "Neisseria gonorrhoeae, beta lactamase negative (organism)"
* $sct#414790002 "Mycoplasma species, not Mycoplasma pneumoniae (organism)"
* $sct#414789006 "Mycobacterium canettii (organism)"
* $sct#414754009 "Mold resembling Coccidioides immitis (organism)"
* $sct#414577006 "Large-colony-forming beta-hemolytic group A streptococci (organism)"
* $sct#413880008 "Clostridium botulinum, non-toxin production (organism)"
* $sct#413643004 "Beta-hemolytic Streptococcus, group A (organism)"
* $sct#409807008 "Penicillin resistant Streptococcus pneumoniae (organism)"
* $sct#409806004 "Multiple drug-resistant Streptococcus pneumoniae (organism)"
* $sct#409805000 "Fluoroquinolone-resistant Neisseria gonorrhoeae (organism)"
* $sct#407479009 "Influenza A virus (organism)"
* $sct#407359000 "Norovirus (organism)"
* $sct#407310004 "Enterohemorrhagic Escherichia coli, serotype O rough:H9 (organism)"
* $sct#407308001 "Enterohemorrhagic Escherichia coli, serotype O172:nonmotile (organism)"
* $sct#407306002 "Enterohemorrhagic Escherichia coli, serotype O165:H25 (organism)"
* $sct#407305003 "Enterohemorrhagic Escherichia coli, serotype O165:nonmotile (organism)"
* $sct#407303005 "Enterohemorrhagic Escherichia coli, serotype O163:H19 (organism)"
* $sct#407301007 "Enterohemorrhagic Escherichia coli, serotype O153:H25 (organism)"
* $sct#407300008 "Enterohemorrhagic Escherichia coli, serotype O153:H2 (organism)"
* $sct#407299000 "Enterohemorrhagic Escherichia coli, serotype O145:nonmotile (organism)"
* $sct#407298008 "Escherichia coli serogroup O145 (organism)"
* $sct#407297003 "Enterohemorrhagic Escherichia coli, serotype O137:H41 (organism)"
* $sct#407295006 "Enterohemorrhagic Escherichia coli, serotype O128:H45 (organism)"
* $sct#407294005 "Enterohemorrhagic Escherichia coli, serotype O128:nonmotile (organism)"
* $sct#407293004 "Enterohemorrhagic Escherichia coli, serotype O121:H19 (organism)"
* $sct#407292009 "Escherichia coli serogroup O121 (organism)"
* $sct#407291002 "Enterohemorrhagic Escherichia coli, serotype O118:H16 (organism)"
* $sct#407290001 "Enterohemorrhagic Escherichia coli, serotype O118:H12 (organism)"
* $sct#407289005 "Enterohemorrhagic Escherichia coli, serotype O118:H2 (organism)"
* $sct#407287007 "Enterohemorrhagic Escherichia coli, serotype O113:H21 (organism)"
* $sct#407285004 "Enterohemorrhagic Escherichia coli, serotype O111:H8 (organism)"
* $sct#407284000 "Enterohemorrhagic Escherichia coli, serotype O104:H21 (organism)"
* $sct#407283006 "Enterohemorrhagic Escherichia coli, serotype O104:nonmotile (organism)"
* $sct#407281008 "Enterohemorrhagic Escherichia coli, serotype O103:H2 (organism)"
* $sct#407280009 "Escherichia coli serogroup O103 (organism)"
* $sct#407279006 "Enterohemorrhagic Escherichia coli, serotype O91:H21 (organism)"
* $sct#407278003 "Enterohemorrhagic Escherichia coli, serotype O91:H10 (organism)"
* $sct#407277008 "Enterohemorrhagic Escherichia coli, serotype O91:nonmotile (organism)"
* $sct#407275000 "Enterohemorrhagic Escherichia coli, serotype O83:H1 (organism)"
* $sct#407273007 "Enterohemorrhagic Escherichia coli, serotype O79:H7 (organism)"
* $sct#407271009 "Enterohemorrhagic Escherichia coli, serotype O50:H7 (organism)"
* $sct#407269009 "Enterohemorrhagic Escherichia coli, serotype O48:H21 (organism)"
* $sct#407267006 "Enterohemorrhagic Escherichia coli, serotype O45:H2 (organism)"
* $sct#407266002 "Escherichia coli serogroup O45 (organism)"
* $sct#407265003 "Enterohemorrhagic Escherichia coli, serotype O26:H11 (organism)"
* $sct#407264004 "Enterohemorrhagic Escherichia coli, serotype O26:nonmotile (organism)"
* $sct#407263005 "Enterohemorrhagic Escherichia coli, serotype O22:H8 (organism)"
* $sct#407262000 "Enterohemorrhagic Escherichia coli, serotype O22:H5 (organism)"
* $sct#407260008 "Enterohemorrhagic Escherichia coli, serotype O14:nonmotile (organism)"
* $sct#407258006 "Enterohemorrhagic Escherichia coli, serotype O9:nonmotile (organism)"
* $sct#407256005 "Enterohemorrhagic Escherichia coli, serotype O5:nonmotile (organism)"
* $sct#407254008 "Enterohemorrhagic Escherichia coli, serotype O2:H7 (organism)"
* $sct#407253002 "Enterohemorrhagic Escherichia coli, serotype O2:H6 (organism)"
* $sct#407251000 "Enterohemorrhagic Escherichia coli, serotype O1:nonmotile (organism)"
* $sct#407222004 "Enterohemorrhagic Escherichia coli, serotype O128:H2 (organism)"
* $sct#407199008 "Enterohemorrhagic Escherichia coli, serotype O55:H7 (organism)"
* $sct#407160000 "Enterohemorrhagic Escherichia coli, serotype O111:H2 (organism)"
* $sct#407159005 "Enterohemorrhagic Escherichia coli, serotype O111:nonmotile (organism)"
* $sct#406962002 "Vancomycin intermediate Staphylococcus aureus (organism)"
* $sct#406645005 "Coccidioides posadasii (organism)"
* $sct#406504006 "Shigella sonnei (Subgroup D) (organism)"
* $sct#406503000 "Shigella flexneri serotype undetermined (Subgroup B) (organism)"
* $sct#406502005 "Shigella flexneri 5b [V:7,8] (organism)"
* $sct#406501003 "Shigella flexneri 5a [V:3,4] (organism)"
* $sct#406500002 "Shigella flexneri 4c [IV:7,8] (organism)"
* $sct#406498003 "Shigella dysenteriae 14 (organism)"
* $sct#406497008 "Shigella dysenteriae 15 (organism)"
* $sct#406496004 "Shigella dysenteriae 13 (organism)"
* $sct#406495000 "Shigella dysenteriae 12 (organism)"
* $sct#406494001 "Shigella dysenteriae 11 (organism)"
* $sct#406493007 "Shigella boydii serotype undetermined (Subgroup C) (organism)"
* $sct#406492002 "Shigella boydii 20 [Provisional Serotype SH108(99-4528)] (organism)"
* $sct#406491009 "Shigella boydii 19 [Provisional Serotype E16553] (organism)"
* $sct#406490005 "Shigella boydii 18 (organism)"
* $sct#406489001 "Shigella boydii 17 (organism)"
* $sct#406488009 "Shigella boydii 16 (organism)"
* $sct#406487004 "Provisional shigella Y394 (organism)"
* $sct#406486008 "Provisional shigella E670/74 (organism)"
* $sct#406485007 "Provisional shigella E28938 (organism)"
* $sct#406484006 "Provisional shigella 96-265 (organism)"
* $sct#406483000 "Provisional shigella 96-204 (organism)"
* $sct#406482005 "Provisional shigella 93-119 (organism)"
* $sct#406481003 "Provisional shigella 89-141 (organism)"
* $sct#406480002 "Provisional shigella 88-893 [-: (6)] (organism)"
* $sct#406479000 "Provisional shigella 3162-96 (organism)"
* $sct#406478008 "Provisional shigella 3065-93 (organism)"
* $sct#404680007 "Vancomycin resistant Staphylococcus aureus (organism)"
* $sct#401198008 "Legionella serotype (organism)"
* $sct#398620001 "Salmonella enterica subsp. indica (organism)"
* $sct#398559003 "Salmonella group O:9 (organism)"
* $sct#398508004 "Salmonella enterica subsp. enterica (organism)"
* $sct#398506000 "Vibrio cholerae, non-O1 (organism)"
* $sct#398488004 "Salmonella enterica subsp. salamae (organism)"
* $sct#398467008 "Salmonella group O:4 (organism)"
* $sct#398436006 "Salmonella group O:3,10 (organism)"
* $sct#398429005 "Salmonella group O:11 (organism)"
* $sct#398428002 "Salmonella enterica subsp. diarizonae (organism)"
* $sct#398426003 "Salmonella group O:2 (organism)"
* $sct#398393000 "Salmonella bongori (organism)"
* $sct#398371005 "Salmonella enterica subsp. houtenae (organism)"
* $sct#398367007 "Non-cholerae vibrio (organism)"
* $sct#398364000 "Salmonella group O:8 (organism)"
* $sct#398349000 "Salmonella group O:13 (organism)"
* $sct#397502001 "Salmonella enterica subsp. arizonae (organism)"
* $sct#397426001 "Toxigenic Corynebacterium (organism)"
* $sct#387798006 "Photobacterium damselae (organism)"
* $sct#385509008 "Mycobacterium elephantis (organism)"
* $sct#385508000 "Mycobacterium septicum (organism)"
* $sct#385507005 "Mycobacterium mageritense (organism)"
* $sct#385506001 "Mycobacterium murale (organism)"
* $sct#372926008 "Chlamydophila (organism)"
* $sct#363769000 "Entamoeba histolytica/Entamoeba dispar complex (organism)"
* $sct#363768008 "Streptococcus pneumoniae serogroup 11 (organism)"
* $sct#363767003 "Streptococcus pneumoniae serogroup 22 (organism)"
* $sct#363762009 "Yersinia enterocolitica serogroup O:48 (organism)"
* $sct#333873003 "Mycobacterium fortuitum subsp fortuitum (organism)"
* $sct#312411000 "Variola minor virus (organism)"
* $sct#312410004 "Variola major virus (organism)"
* $sct#312330004 "Rickettsia peacockii (organism)"
* $sct#311508002 "Sabia virus (organism)"
* $sct#311506003 "Guanarito virus (organism)"
* $sct#302561004 "Mycobacterium borstelense (organism)"
* $sct#277504006 "Spectinomycin-resistant Neisseria gonorrhoeae (organism)"
* $sct#277503000 "Cephalosporin-resistant Neisseria gonorrhoeae (organism)"
* $sct#277502005 "Tetracycline-resistant Neisseria gonorrhoeae (organism)"
* $sct#277501003 "Penicillinase-producing Neisseria gonorrhoeae (organism)"
* $sct#243639005 "Gerstmann-Straussler syndrome agent (organism)"
* $sct#243638002 "Human spongiform encephalopathy agent (organism)"
* $sct#243617008 "California serogroup Orthobunyavirus (organism)"
* $sct#243604005 "Dengue virus subgroup (organism)"
* $sct#243601002 "Eastern equine encephalitis virus (organism)"
* $sct#243568000 "Variola virus (organism)"
* $sct#243509006 "Histoplasma capsulatum var capsulatum (organism)"
* $sct#243468002 "Cryptococcus neoformans var neoformans (organism)"
* $sct#243378003 "Mycobacterium fortuitum (organism)"
* $sct#243377008 "Mycobacteroides chelonae (organism)"
* $sct#243376004 "Mycobacterium avium brunese (organism)"
* $sct#243373007 "Mycobacterium tuberculosis African II variant (organism)"
* $sct#243372002 "Mycobacterium tuberculosis African I variant (organism)"
* $sct#243371009 "Mycobacterium tuberculosis Asian variant (organism)"
* $sct#243370005 "Mycobacterium tuberculosis classical variant (organism)"
* $sct#243360008 "Ehrlichia ewingii (organism)"
* $sct#243357001 "Campylobacter sputorum biovar fecalis (organism)"
* $sct#243352007 "Bartonella bacilliformis (organism)"
* $sct#243284003 "Listeria ivanovii londoniensis (organism)"
* $sct#243255007 "Corynebacterium diphtheriae var belfanti (organism)"
* $sct#131363003 "Streptococcus pneumoniae Danish serotype 29 (organism)"
* $sct#131362008 "Streptococcus pneumoniae serogroup 16 (organism)"
* $sct#131361001 "Streptococcus pneumoniae serogroup 17 (organism)"
* $sct#131326007 "Legionella pneumophilia serogroup 14 (organism)"
* $sct#131325006 "Legionella pneumophilia serogroup 13 (organism)"
* $sct#131324005 "Legionella pneumophilia serogroup 12 (organism)"
* $sct#131323004 "Legionella pneumophilia serogroup 11 (organism)"
* $sct#131322009 "Legionella pneumophilia serogroup 10 (organism)"
* $sct#131261003 "Escherichia coli serogroup O111 (organism)"
* $sct#131260002 "Escherichia coli serogroup O26 (organism)"
* $sct#127541006 "Streptococcus pneumoniae serogroup 19 (organism)"
* $sct#127523003 "Mycobacterium wolinskyi (organism)"
* $sct#127522008 "Mycobacterium goodii (organism)"
* $sct#127512002 "Haemophilus influenzae, biotype VIII (organism)"
* $sct#127511009 "Haemophilus influenzae, biotype VII (organism)"
* $sct#127510005 "Haemophilus influenzae, biotype VI (organism)"
* $sct#127509000 "Haemophilus influenzae, biotype V (organism)"
* $sct#127508008 "Haemophilus influenzae, biotype IV (organism)"
* $sct#127507003 "Haemophilus influenzae, biotype III (organism)"
* $sct#127506007 "Haemophilus influenzae, biotype II (organism)"
* $sct#127505006 "Haemophilus influenzae, biotype I (organism)"
* $sct#125048009 "Vibrio cholerae serogroup O139 (organism)"
* $sct#125042005 "Neisseria meningitidis serogroup Z (organism)"
* $sct#125041003 "Neisseria meningitidis serogroup X (organism)"
* $sct#125036006 "Shigella boydii, serovar 15 (organism)"
* $sct#125035005 "Shigella boydii, serovar 14 (organism)"
* $sct#125034009 "Shigella boydii, serovar 13 (organism)"
* $sct#125033003 "Shigella boydii, serovar 12 (organism)"
* $sct#125032008 "Shigella boydii, serovar 11 (organism)"
* $sct#125031001 "Shigella boydii, serovar 10 (organism)"
* $sct#125030000 "Shigella boydii, serovar 9 (organism)"
* $sct#125029005 "Shigella boydii, serovar 8 (organism)"
* $sct#125028002 "Shigella boydii, serovar 7 (organism)"
* $sct#125027007 "Shigella boydii, serovar 6 (organism)"
* $sct#125026003 "Shigella boydii, serovar 5 (organism)"
* $sct#125025004 "Shigella boydii, serovar 4 (organism)"
* $sct#125024000 "Shigella boydii, serovar 3 (organism)"
* $sct#125023006 "Shigella boydii, serovar 2 (organism)"
* $sct#125022001 "Shigella boydii, serovar 1 (organism)"
* $sct#125021008 "Shigella flexneri, serovar Y (organism)"
* $sct#125020009 "Shigella flexneri, serovar X (organism)"
* $sct#125019003 "Shigella flexneri, serovar 6 (organism)"
* $sct#125018006 "Shigella flexneri, serovar 5 (organism)"
* $sct#125017001 "Shigella flexneri, serovar 4b (organism)"
* $sct#125016005 "Shigella flexneri, serovar 4a (organism)"
* $sct#125015009 "Shigella flexneri, serovar 4 (organism)"
* $sct#125014008 "Shigella flexneri, serovar 3c (organism)"
* $sct#125013002 "Shigella flexneri, serovar 3b (organism)"
* $sct#125012007 "Shigella flexneri, serovar 3a (organism)"
* $sct#125011000 "Shigella flexneri, serovar 3 (organism)"
* $sct#125010004 "Shigella flexneri, serovar 2b (organism)"
* $sct#125009009 "Shigella flexneri, serovar 2a (organism)"
* $sct#125008001 "Shigella flexneri, serovar 2 (organism)"
* $sct#125007006 "Shigella flexneri, serovar 1b (organism)"
* $sct#125006002 "Shigella flexneri, serovar 1a (organism)"
* $sct#125005003 "Shigella flexneri, serovar 1 (organism)"
* $sct#125004004 "Shigella dysenteriae, serovar 10 (organism)"
* $sct#125003005 "Shigella dysenteriae, serovar 9 (organism)"
* $sct#125002000 "Shigella dysenteriae, serovar 8 (organism)"
* $sct#125001007 "Shigella dysenteriae, serovar 7 (organism)"
* $sct#125000008 "Shigella dysenteriae, serovar 6 (organism)"
* $sct#124999008 "Shigella dysenteriae, serovar 5 (organism)"
* $sct#124998000 "Shigella dysenteriae, serovar 4 (organism)"
* $sct#124997005 "Shigella dysenteriae, serovar 3 (organism)"
* $sct#124996001 "Shigella dysenteriae, serovar 2 (organism)"
* $sct#124995002 "Shigella dysenteriae, serovar 1 (organism)"
* $sct#124994003 "Enterohemorrhagic Escherichia coli, serotype O157:non-motile (organism)"
* $sct#116665009 "Bayou virus (organism)"
* $sct#116664008 "Black Creek Canal virus (organism)"
* $sct#116663002 "Sin Nombre virus (organism)"
* $sct#116662007 "Dobrava-Belgrade virus (organism)"
* $sct#116503007 "Yersinia enterocoltica, serogroup O:8,14 (organism)"
* $sct#116502002 "Yersinia enterocolitica, serogroup O:13 (organism)"
* $sct#116500005 "Streptococcus pneumoniae serogroup 12 (organism)"
* $sct#116495007 "Scotochromogenic mycobacteria (organism)"
* $sct#116494006 "Rapid growing mycobacteria (organism)"
* $sct#116492005 "Photochromogenic mycobacteria (organism)"
* $sct#116401006 "Leptospira interrogans (organism)"
* $sct#116399000 "Burkholderia pseudomallei (organism)"
* $sct#116395006 "Enterohemorrhagic Escherichia coli (organism)"
* $sct#116386003 "Campylobacter lari (organism)"
* $sct#116380009 "Legionella micdadei (organism)"
* $sct#116379006 "Legionella maceachernii (organism)"
* $sct#116037008 "Campylobacter curvus (organism)"
* $sct#115517006 "Legionella, non-pneumophia species (organism)"
* $sct#115516002 "Legionella longbeachae, serogroup 2 (organism)"
* $sct#115515003 "Legionella longbeachae, serogroup 1 (organism)"
* $sct#115407004 "Haemophilus influenzae, not b (organism)"
* $sct#115329001 "Methicillin resistant Staphylococcus aureus (organism)"
* $sct#115328009 "Chlamydia trachomatis, serotype H (organism)"
* $sct#115319008 "Chlamydia trachomatis, serotype G (organism)"
* $sct#115318000 "Chlamydia trachomatis, serotype L3 (organism)"
* $sct#115301004 "Chlamydia trachomatis, serotype L2 (organism)"
* $sct#115300003 "Chlamydia trachomatis, serotype L1 (organism)"
* $sct#115299006 "Chlamydia trachomatis, serotype L (organism)"
* $sct#115298003 "Chlamydia trachomatis, serotype K (organism)"
* $sct#115297008 "Chlamydia trachomatis, serotype J (organism)"
* $sct#115296004 "Chlamydia trachomatis, serotype I (organism)"
* $sct#115295000 "Chlamydia trachomatis, serotype F (organism)"
* $sct#115294001 "Chlamydia trachomatis, serotype E (organism)"
* $sct#115293007 "Chlamydia trachomatis, serotype D (organism)"
* $sct#115292002 "Chlamydia trachomatis, serotype C (organism)"
* $sct#115291009 "Chlamydia trachomatis, serotype Ba (organism)"
* $sct#115290005 "Chlamydia trachomatis, serotype B (organism)"
* $sct#115289001 "Chlamydia trachomatis, serotype A (organism)"
* $sct#114229008 "Bartonella vinsonii ss vinsonii (organism)"
* $sct#114228000 "Bartonella vinsonii ss berkhoffii (organism)"
* $sct#114221006 "Rickettsia massiliae (organism)"
* $sct#114220007 "Rickettsia japonica (organism)"
* $sct#114219001 "Rickettsia helvetica (organism)"
* $sct#114218009 "Rickettsia africae (organism)"
* $sct#114217004 "Rickettsia aeschlimannii (organism)"
* $sct#113961008 "Staphylococcus aureus ss aureus (organism)"
* $sct#113861009 "Mycobacterium tuberculosis (organism)"
* $sct#113860005 "Mycobacterium triplex (organism)"
* $sct#113859000 "Mycobacterium peregrinum (organism)"
* $sct#113858008 "Mycobacterium tuberculosis complex (organism)"
* $sct#113857003 "Mycobacterium novocastrense (organism)"
* $sct#113856007 "Mycobacterium mucogenicum (organism)"
* $sct#113854005 "Mycobacterium madagascariense (organism)"
* $sct#113853004 "Mycobacterium lentiflavum (organism)"
* $sct#113852009 "Mycobacterium intermedium (organism)"
* $sct#113851002 "Mycobacterium interjectum (organism)"
* $sct#113850001 "Mycobacterium hodleri (organism)"
* $sct#113849001 "Mycobacterium hiberniae (organism)"
* $sct#113848009 "Mycobacterium hassiacum (organism)"
* $sct#113847004 "Mycobacterium cookii (organism)"
* $sct#113846008 "Mycobacterium conspicuum (organism)"
* $sct#113845007 "Mycobacterium confluentis (organism)"
* $sct#113844006 "Mycobacterium brumae (organism)"
* $sct#113842005 "Mycobacterium avium ss silvaticum (organism)"
* $sct#113841003 "Mycobacterium avium ss paratuberculosis (organism)"
* $sct#113840002 "Mycobacterium avium ss avium (organism)"
* $sct#113839004 "Mycobacterium alvei (organism)"
* $sct#113838007 "Mycobacteroides abscessus (organism)"
* $sct#113816005 "Leptospira weilii (organism)"
* $sct#113815009 "Leptospira santarosai (organism)"
* $sct#113813002 "Leptospira noguchii (organism)"
* $sct#113812007 "Leptospira meyeri (organism)"
* $sct#113811000 "Leptospira kirschneri (organism)"
* $sct#113810004 "Leptospira inadai (organism)"
* $sct#113809009 "Leptospira borgpetersenii (organism)"
* $sct#113808001 "Legionella waltersii (organism)"
* $sct#113807006 "Legionella quateirensis (organism)"
* $sct#113806002 "Legionella lytica (organism)"
* $sct#113727004 "Vancomycin resistant Enterococcus (organism)"
* $sct#113724006 "Enterococcus dispar (organism)"
* $sct#113720002 "Legionella dumoffii (organism)"
* $sct#113674000 "Burkholderia mallei (organism)"
* $sct#113565009 "Clostridium argentiense (organism)"
* $sct#113528007 "Campylobacter gracilis (organism)"
* $sct#113527002 "Campylobacter hyointestinalis ss hyointestinalis (organism)"
* $sct#113526006 "Campylobacter showae (organism)"
* $sct#113525005 "Campylobacter rectus (organism)"
* $sct#113524009 "Campylobacter jejuni ss jejuni (organism)"
* $sct#113523003 "Campylobacter jejuni ss doylei (organism)"
* $sct#113522008 "Campylobacter helveticus (organism)"
* $sct#113503004 "Borrelia valaisiana (organism)"
* $sct#113497007 "Borrelia garinii (organism)"
* $sct#113377003 "Acinetobacter genospecies 3 (organism)"
* $sct#113376007 "Acinetobacter calcoaceticus-Acinetobacter baumannii complex (organism)"
* $sct#112351003 "Vibrio cholerae serotype Inaba (organism)"
* $sct#112283007 "Escherichia coli (organism)"
* $sct#112277009 "Borrelia (organism)"
* $sct#110390006 "Entamoeba histolytica cyst (organism)"
* $sct#110389002 "Entamoeba histolytica trophozoite (organism)"
* $sct#110379001 "Mycobacterium, non-TB (organism)"
* $sct#110378009 "Salmonella enterica (organism)"
* $sct#103561005 "Cyclospora cayetanensis (organism)"
* $sct#103560006 "Cyclospora (organism)"
* $sct#103525000 "Prospect Hill virus (organism)"
* $sct#103513003 "Bartonella elizabethae (organism)"
* $sct#103512008 "Bartonella vinsonii (organism)"
* $sct#103511001 "Bartonella quintana (organism)"
* $sct#103510000 "Bartonella henselae (organism)"
* $sct#103509005 "Coxiella burnetii, phase II (organism)"
* $sct#103508002 "Coxiella burnetii, phase I (organism)"
* $sct#103500009 "Streptococcus pneumoniae Danish serotype 9N (organism)"
* $sct#103499000 "Streptococcus pneumoniae Danish serotype 7F (organism)"
* $sct#103498008 "Streptococcus pneumoniae Danish serotype 14 (organism)"
* $sct#103497003 "Streptococcus pneumoniae Danish serotype 3 (organism)"
* $sct#103483006 "Neisseria meningitidis serogroup W (organism)"
* $sct#103482001 "Neisseria meningitidis serogroup Y (organism)"
* $sct#103481008 "Neisseria meningitidis serogroup C (organism)"
* $sct#103480009 "Neisseria meningitidis serogroup B (organism)"
* $sct#103479006 "Neisseria meningitidis serogroup A (organism)"
* $sct#103476004 "Mycobacterium genavense (organism)"
* $sct#103474001 "Mycobacterium fortuitum complex (organism)"
* $sct#103471009 "Legionella pneumophila serogroup 9 (organism)"
* $sct#103470005 "Legionella pneumophila serogroup 8 (organism)"
* $sct#103469009 "Legionella pneumophila serogroup 7 (organism)"
* $sct#103468001 "Legionella pneumophila serogroup 6 (organism)"
* $sct#103467006 "Legionella pneumophila serogroup 5 (organism)"
* $sct#103466002 "Legionella pneumophila serogroup 4 (organism)"
* $sct#103465003 "Legionella pneumophila serogroup 3 (organism)"
* $sct#103464004 "Legionella pneumophila serogroup 2 (organism)"
* $sct#103463005 "Legionella pneumophila serogroup 1 (organism)"
* $sct#103462000 "Legionella worsleiensis (organism)"
* $sct#103461007 "Legionella tucsonensis (organism)"
* $sct#103460008 "Legionella shakespearei (organism)"
* $sct#103459003 "Legionella quinlivanii (organism)"
* $sct#103458006 "Legionella pneumophila ss. pneumophila (organism)"
* $sct#103457001 "Legionella pneumophila ss. pascullei (organism)"
* $sct#103456005 "Legionella pneumophila ss. fraseri (organism)"
* $sct#103455009 "Legionella nautarum (organism)"
* $sct#103454008 "Legionella moravica (organism)"
* $sct#103453002 "Legionella londiniensis (organism)"
* $sct#103452007 "Legionella lansingensis (organism)"
* $sct#103451000 "Legionella gratiana (organism)"
* $sct#103450004 "Legionella geestiana (organism)"
* $sct#103449004 "Legionella fairfieldensis (organism)"
* $sct#103448007 "Legionella brunensis (organism)"
* $sct#103447002 "Legionella adelaidensis (organism)"
* $sct#103446006 "Haemophilus influenzae type f (organism)"
* $sct#103445005 "Haemophilus influenzae type e (organism)"
* $sct#103444009 "Haemophilus influenzae type d (organism)"
* $sct#103443003 "Haemophilus influenzae type c (organism)"
* $sct#103442008 "Haemophilus influenzae type b (organism)"
* $sct#103441001 "Haemophilus influenzae type a (organism)"
* $sct#103437000 "Enterococcus raffinosus (organism)"
* $sct#103436009 "Enterococcus pseudoavium (organism)"
* $sct#103433001 "Yersinia enterocolitica serogroup O:9 (organism)"
* $sct#103432006 "Yersinia enterocolitica serogroup O:8 (organism)"
* $sct#103431004 "Yersinia enterocolitica serogroup O:5 (organism)"
* $sct#103430003 "Yersinia enterocolitica serogroup O:3 (organism)"
* $sct#103429008 "Enterohemorrhagic Escherichia coli, serotype O157:H7 (organism)"
* $sct#103428000 "Corynebacterium ulcerans (organism)"
* $sct#103427005 "Campylobacter upsaliensis (organism)"
* $sct#91524009 "Campylobacter sputorum (organism)"
* $sct#91508008 "Francisella tularensis ss. tularensis (organism)"
* $sct#91336002 "Mycobacterium porcinum (organism)"
* $sct#91288006 "Acinetobacter baumannii (organism)"
* $sct#90530002 "Yersinia pseudotuberculosis (organism)"
* $sct#90272000 "Enterococcus faecium (organism)"
* $sct#89896008 "Mycobacterium chitae (organism)"
* $sct#89709001 "Legionella jamestowniensis (organism)"
* $sct#89605004 "Legionella longbeachae (organism)"
* $sct#89331006 "Rotavirus group B (organism)"
* $sct#89293008 "Human immunodeficiency virus type I (organism)"
* $sct#88520007 "Creutzfeldt-Jakob agent (organism)"
* $sct#88274000 "Trypanosoma cruzi (organism)"
* $sct#88227009 "Rotavirus group D (organism)"
* $sct#87919008 "Trivittatus virus (organism)"
* $sct#87875008 "Enterococcus avium (organism)"
* $sct#87402003 "Campylobacter mucosalis (organism)"
* $sct#87271006 "Legionella sainthelens (organism)"
* $sct#86432002 "Babesia divergens (organism)"
* $sct#85944001 "Lassa virus (organism)"
* $sct#85908006 "Salmonella Paratyphi B (organism)"
* $sct#85738007 "Rickettsia parkeri (organism)"
* $sct#85729005 "Shigella flexneri (organism)"
* $sct#85288000 "Rickettsia sibirica (organism)"
* $sct#84955006 "Lumbo virus (organism)"
* $sct#84210007 "Campylobacter fetus (organism)"
* $sct#84180005 "Mycobacterium simiae (organism)"
* $sct#83841006 "Mycobacterium intracellulare (organism)"
* $sct#83821001 "Cryptosporidium (organism)"
* $sct#83723009 "Mycobacterium avium (organism)"
* $sct#83675005 "Corynebacterium diphtheriae type gravis (organism)"
* $sct#83617006 "Hepatitis D virus (organism)"
* $sct#83358009 "Rotavirus group F (organism)"
* $sct#83285000 "Enteropathogenic Escherichia coli (organism)"
* $sct#83088009 "Acinetobacter lwoffii (organism)"
* $sct#82550008 "Acinetobacter calcoaceticus (organism)"
* $sct#81951003 "Histoplasma (organism)"
* $sct#81701001 "Vesicular stomatitis virus (organism)"
* $sct#81665004 "Hepatitis B virus (organism)"
* $sct#80897008 "Legionella pneumophila (organism)"
* $sct#80166006 "Streptococcus pyogenes (organism)"
* $sct#79875007 "Crimean-Congo hemorrhagic fever virus (organism)"
* $sct#79817008 "Mycobacterium shimoidei (organism)"
* $sct#79437004 "Rickettsia rhipicephali (organism)"
* $sct#79284001 "Rickettsia typhi (organism)"
* $sct#79128009 "Salmonella Paratyphi A (organism)"
* $sct#78981005 "Genus Mycoplasma (organism)"
* $sct#78475006 "Hepatitis E virus (organism)"
* $sct#78444002 "Mycobacterium sphagni (organism)"
* $sct#78181009 "Giardia lamblia (organism)"
* $sct#78167007 "Cysticercus (organism)"
* $sct#78112006 "Mycobacterium phlei (organism)"
* $sct#78065002 "Enterococcus faecalis (organism)"
* $sct#77712002 "Francisella novicida (organism)"
* $sct#77352002 "Shigella (organism)"
* $sct#77235003 "San Angelo virus (organism)"
* $sct#77199003 "Rickettsia montanensis (organism)"
* $sct#77045006 "Acinetobacter haemolyticus (organism)"
* $sct#76828008 "Babesia microti (organism)"
* $sct#76776000 "Rickettsia bellii (organism)"
* $sct#76327009 "Borrelia burgdorferi (organism)"
* $sct#75356003 "Mycobacterium fortuitum ss. acetamidolytica (organism)"
* $sct#75032006 "Klebsiella (organism)"
* $sct#74917007 "Mycobacterium gadium (organism)"
* $sct#74746009 "Plasmodium vivax (organism)"
* $sct#74212009 "Mycobacterium senegalense (organism)"
* $sct#74028009 "Mycobacterium paratuberculosis (organism)"
* $sct#73852008 "Enterococcus hirae (organism)"
* $sct#73576007 "Mycobacterium malmoense (organism)"
* $sct#73525009 "Salmonella Enteritidis (organism)"
* $sct#73517007 "Bhanja virus (organism)"
* $sct#72904005 "Treponema pallidum (organism)"
* $sct#72829003 "Brucella melitensis (organism)"
* $sct#72814000 "Legionella santicrucis (organism)"
* $sct#72477006 "Mycobacterium tokaiense (organism)"
* $sct#72130005 "Mycobacterium rhodesiae (organism)"
* $sct#71489006 "Machupo virus (organism)"
* $sct#70876001 "Corynebacterium diphtheriae type intermedius (organism)"
* $sct#70801007 "Mycobacterium microti (organism)"
* $sct#70463000 "Mycobacterium gastri (organism)"
* $sct#68704007 "Neisseria gonorrhoeae (organism)"
* $sct#68684004 "Hazara virus (organism)"
* $sct#68638009 "Bovine spongiform encephalopathy agent (organism)"
* $sct#67732000 "Khasan virus (organism)"
* $sct#67168003 "Cryptococcus neoformans (organism)"
* $sct#66940008 "Mycobacterium aichiense (organism)"
* $sct#66838002 "Mycobacterium duvalii (organism)"
* $sct#66635002 "Vibrio cholerae serotype Ogawa (organism)"
* $sct#66543000 "Campylobacter jejuni (organism)"
* $sct#65615007 "Blastomyces dermatitidis (organism)"
* $sct#65613000 "Mycobacterium szulgai (organism)"
* $sct#65255000 "Yersinia enterocolitica (organism)"
* $sct#65205008 "Blastomyces (organism)"
* $sct#65186004 "Klebsiella pneumoniae ss. ozaenae (organism)"
* $sct#64979004 "California encephalitis virus (organism)"
* $sct#64930007 "Legionella spiritensis (organism)"
* $sct#64889004 "Haemophilus ducreyi (organism)"
* $sct#64694002 "Human rotavirus (organism)"
* $sct#64589009 "Campylobacter fetus ss. fetus (organism)"
* $sct#63938009 "Chlamydia trachomatis (organism)"
* $sct#62987004 "Vibrio cholerae, O1 (organism)"
* $sct#62944002 "Hepatitis C virus (organism)"
* $sct#62748005 "Borrelia hermsii (organism)"
* $sct#62644004 "Mycobacterium pulveris (organism)"
* $sct#62587007 "Jerry Slough virus (organism)"
* $sct#62496009 "Bartonella (organism)"
* $sct#62065006 "Rickettsia (organism)"
* $sct#61949005 "Toxoplasma (organism)"
* $sct#61708000 "Mycobacterium farcinogenes (organism)"
* $sct#61419001 "Giardia (organism)"
* $sct#61399004 "Keystone virus (organism)"
* $sct#60927005 "Chlamydophila psittaci variant felis (organism)"
* $sct#60817000 "Campylobacter fetus ss. venerealis (organism)"
* $sct#60588009 "Dengue virus, type 1 (organism)"
* $sct#60558000 "Mycobacterium thamnophis (organism)"
* $sct#60502008 "Francisella tularensis ss. holarctica (organism)"
* $sct#59881000 "Rabies virus (organism)"
* $sct#59774002 "Monkeypox virus (organism)"
* $sct#59250001 "Ehrlichia chaffeensis (organism)"
* $sct#59083001 "Neisseria (organism)"
* $sct#58939000 "Legionella hackeliae (organism)"
* $sct#58928003 "Campylobacter sputorum ss. sputorum (organism)"
* $sct#58923007 "Legionella cincinnatiensis (organism)"
* $sct#58869008 "Mycobacterium marinum (organism)"
* $sct#58768005 "Mycobacterium poriferae (organism)"
* $sct#58663006 "Mycobacterium xenopi (organism)"
* $sct#58503001 "Mycobacterium, avium-intracellulare group (organism)"
* $sct#58432001 "St. Louis encephalitis virus (organism)"
* $sct#58242002 "Mycobacterium leprae (organism)"
* $sct#58234003 "Arenavirus (organism)"
* $sct#57311007 "West Nile virus (organism)"
* $sct#56596006 "Histoplasma capsulatum (organism)"
* $sct#56415008 "Klebsiella pneumoniae (organism)"
* $sct#56395006 "Plasmodium malariae (organism)"
* $sct#55905000 "Vibrio vulnificus (organism)"
* $sct#55462008 "Shigella boydii (organism)"
* $sct#55288009 "Genus Vesiculovirus (organism)"
* $sct#55174004 "Human poliovirus 2 (organism)"
* $sct#55032007 "Listeria ivanovii (organism)"
* $sct#54925005 "Mycobacterium vaccae (organism)"
* $sct#54365000 "Yersinia pestis (organism)"
* $sct#53447008 "Rickettsia australis (organism)"
* $sct#53233007 "Enterococcus gallinarum (organism)"
* $sct#53114006 "Mycobacterium smegmatis (organism)"
* $sct#52779006 "Hantaan virus (organism)"
* $sct#52584002 "Measles morbillivirus (organism)"
* $sct#52462004 "Legionella cherrii (organism)"
* $sct#51526001 "Francisella tularensis (organism)"
* $sct#51504002 "Cryptosporidium parvum (organism)"
* $sct#51459000 "Mycobacterium neoaurum (organism)"
* $sct#51320008 "Mycobacterium africanum (organism)"
* $sct#50471002 "Zika virus (organism)"
* $sct#50384007 "Mumps virus (organism)"
* $sct#50269000 "Staphylococcus aureus ss. anaerobius (organism)"
* $sct#50255000 "Francisella (organism)"
* $sct#50136005 "Salmonella Typhimurium (organism)"
* $sct#49918008 "Plasmodium knowlesi (organism)"
* $sct#49445003 "Genus Hantavirus (organism)"
* $sct#48317004 "Brucella suis (organism)"
* $sct#48134004 "Mycobacterium aurum (organism)"
* $sct#47465002 "Vesicular stomatitis New Jersey virus (organism)"
* $sct#46665004 "Cryptosporidium meleagridis (organism)"
* $sct#46466005 "Bordetella (organism)"
* $sct#46464008 "Enterococcus durans (organism)"
* $sct#45838003 "Powassan virus (organism)"
* $sct#45749000 "Vibrio alginolyticus (organism)"
* $sct#45662006 "Mycobacterium terrae (organism)"
* $sct#44760001 "Mycobacterium asiaticum (organism)"
* $sct#44470000 "Haemophilus influenzae (organism)"
* $sct#44172002 "Human poliovirus (organism)"
* $sct#44106000 "Treponema pallidum ss. endemicum (organism)"
* $sct#44081006 "Kuru agent (organism)"
* $sct#43612004 "Shigella dysenteriae (organism)"
* $sct#43492007 "Group B streptococcus (organism)"
* $sct#43454006 "Treponema pallidum ss. pallidum (organism)"
* $sct#43199008 "Vibrio fluvialis (organism)"
* $sct#43091008 "Listeria seeligeri (organism)"
* $sct#41704008 "Borrelia parkeri (organism)"
* $sct#41328007 "Dengue virus, type 2 (organism)"
* $sct#41304005 "Mycobacterium obuense (organism)"
* $sct#41109008 "South River virus (organism)"
* $sct#41090000 "Chlamydophila psittaci variant bovis (organism)"
* $sct#40886007 "Klebsiella oxytoca (organism)"
* $sct#40754006 "Puumala virus (organism)"
* $sct#40740003 "Genus Trypanosoma (organism)"
* $sct#40713003 "Mycobacterium ulcerans (organism)"
* $sct#40614002 "Campylobacter coli (organism)"
* $sct#40333002 "Mycobacterium triviale (organism)"
* $sct#40039007 "Vesicular stomatitis virus, Argentina (organism)"
* $sct#39739007 "Legionella jordanis (organism)"
* $sct#38324000 "Entamoeba (organism)"
* $sct#38322001 "Legionella parisiensis (organism)"
* $sct#38004008 "Enterococcus mundtii (organism)"
* $sct#37900004 "Trichinella (organism)"
* $sct#37220005 "Histoplasma duboisii (organism)"
* $sct#37081000 "Clostridium botulinum, type D (organism)"
* $sct#36833002 "Rotavirus group G (organism)"
* $sct#36764009 "Vibrio cincinnatiensis (organism)"
* $sct#36700002 "Dengue virus, type 4 (organism)"
* $sct#36354002 "Mycobacterium tuberculosis hominis (organism)"
* $sct#36249008 "Mycobacterium komossence (organism)"
* $sct#36115006 "Human immunodeficiency virus type 2 (organism)"
* $sct#36094007 "Listeria monocytogenes (organism)"
* $sct#35439004 "Seoul virus (organism)"
* $sct#35408001 "Campylobacter (organism)"
* $sct#35029001 "Babesia (organism)"
* $sct#34872001 "Vibrio (organism)"
* $sct#34706006 "Plasmodium (organism)"
* $sct#34348001 "Dengue virus (organism)"
* $sct#34212000 "Colorado tick fever virus (organism)"
* $sct#33610009 "Attenuated Mycobacterium bovis (organism)"
* $sct#32829006 "Clostridium botulinum, type F (organism)"
* $sct#32691002 "Rickettsia conorii (organism)"
* $sct#32488009 "Salmonella Paratyphi C (organism)"
* $sct#32452004 "HAV - Hepatitis A virus (organism)"
* $sct#32178004 "Serra do Navio virus (organism)"
* $sct#31551005 "Rotavirus group C (organism)"
* $sct#31169007 "Clostridium baratii (organism)"
* $sct#30974007 "Rickettsia canadensis (organism)"
* $sct#30949009 "Enterococcus casseliflavus (organism)"
* $sct#30917009 "Clostridium tetani (organism)"
* $sct#30769009 "Rickettsia akari (organism)"
* $sct#30434006 "La Crosse virus (organism)"
* $sct#30345008 "Treponema (organism)"
* $sct#30020004 "Plasmodium falciparum (organism)"
* $sct#29724001 "Orthopoxvirus (organism)"
* $sct#29680004 "Ureaplasma (organism)"
* $sct#29111009 "Mycobacterium agri (organism)"
* $sct#28732002 "Snowshoe hare virus (organism)"
* $sct#28625000 "Taenia (organism)"
* $sct#28499009 "Rickettsia prowazekii (organism)"
* $sct#28382009 "Vibrio metschnikovii (organism)"
* $sct#28335002 "Rift Valley fever virus (organism)"
* $sct#28109006 "Legionella erythra (organism)"
* $sct#27365009 "Mycobacterium austroafricanum (organism)"
* $sct#27334000 "Ehrlichia (organism)"
* $sct#27268008 "Salmonella (organism)"
* $sct#27142009 "Mycobacterium bovis (organism)"
* $sct#26764003 "Leptospira (organism)"
* $sct#26733000 "Mycobacterium lepraemurium (organism)"
* $sct#26630006 "Yellow fever virus (organism)"
* $sct#26352009 "Junin virus (organism)"
* $sct#26250004 "Brucella (organism)"
* $sct#24986006 "Borrelia turicatae (organism)"
* $sct#24940009 "Non group A rotavirus (organism)"
* $sct#24871004 "Mycobacterium gordonae (organism)"
* $sct#24763006 "Vibrio cholerae serotype Hikojima (organism)"
* $sct#24618002 "Mycobacterium gilvum (organism)"
* $sct#24224000 "Brucella abortus (organism)"
* $sct#23930001 "Francisella tularensis ss. mediasiatica (organism)"
* $sct#23566007 "Listeria (organism)"
* $sct#23498004 "Vesicular stomatitis Indiana virus (organism)"
* $sct#23439005 "Coccidioides immitis (organism)"
* $sct#22592008 "Legionella birminghamensis (organism)"
* $sct#22580008 "Human poliovirus 1 (organism)"
* $sct#22533000 "Coxiella burnetii (organism)"
* $sct#21996001 "Mycobacterium haemophilum (organism)"
* $sct#21927003 "Bacillus anthracis (organism)"
* $sct#21433000 "Mycobacterium nonchromogenicum (organism)"
* $sct#20973006 "Mycobacterium thermoresistibile (organism)"
* $sct#20785008 "Clostridium botulinum, type B (organism)"
* $sct#20498000 "Mycobacterium chubuense (organism)"
* $sct#20141004 "Mycobacterium scrofulaceum (organism)"
* $sct#20017000 "Clostridium botulinum, type C (organism)"
* $sct#19965007 "Human herpes simplex virus (organism)"
* $sct#19708001 "Melao virus (organism)"
* $sct#19551004 "Human alphaherpesvirus 3 (organism)"
* $sct#19084008 "Clostridium butyricum (organism)"
* $sct#19030005 "Human immunodeficiency virus (organism)"
* $sct#18508006 "Plasmodium ovale (organism)"
* $sct#18400002 "Klebsiella pneumoniae ss. pneumoniae (organism)"
* $sct#18279000 "Chlamydophila psittaci variant ovis (organism)"
* $sct#18214000 "Legionella anisa (organism)"
* $sct#18065004 "Clostridium botulinum, type A (organism)"
* $sct#18054009 "Rickettsia rickettsii (organism)"
* $sct#17966003 "Taenia solium (organism)"
* $sct#17894007 "Cysticercus cellulosae (organism)"
* $sct#17872004 "Neisseria meningitidis (organism)"
* $sct#17688001 "Klebsiella pneumoniae ss. rhinoscleromatis (organism)"
* $sct#17579001 "Cryptococcus (organism)"
* $sct#17298000 "Legionella rubrilucens (organism)"
* $sct#17083009 "Legionella feeleii (organism)"
* $sct#16914000 "Mycobacterium piscium (organism)"
* $sct#16439004 "Trichinella spiralis (organism)"
* $sct#16362001 "Human poliovirus 3 (organism)"
* $sct#16241000 "Chlamydia (organism)"
* $sct#15302007 "Human alphaherpesvirus 1 (organism)"
* $sct#14590003 "Chlamydophila psittaci (organism)"
* $sct#14121003 "Legionella steigerwaltii (organism)"
* $sct#13953004 "Vesicular stomatitis virus, Brazil (organism)"
* $sct#13879009 "Acinetobacter junii (organism)"
* $sct#13755001 "Corynebacterium diphtheriae type mitis (organism)"
* $sct#13687007 "Human alphaherpesvirus 2 (organism)"
* $sct#13126002 "Vaccinia virus (organism)"
* $sct#13080008 "Clostridium botulinum (organism)"
* $sct#12220009 "Coxiella (organism)"
* $sct#12006007 "Ureaplasma urealyticum (organism)"
* $sct#11776003 "Vibrio mimicus (organism)"
* $sct#11736008 "Vibrio parahaemolyticus (organism)"
* $sct#11428003 "Western equine encephalomyelitis virus (organism)"
* $sct#10514003 "Norwalk virus (organism)"
* $sct#10262005 "Enterococcus malodoratus (organism)"
* $sct#9939008 "Mycobacterium fallax (organism)"
* $sct#9892000 "Campylobacter concisus (organism)"
* $sct#9861002 "Streptococcus pneumoniae (organism)"
* $sct#9679001 "Mycobacterium moriokaense (organism)"
* $sct#9194001 "Jamestown Canyon virus (organism)"
* $sct#9041007 "Campylobacter hyointestinalis (organism)"
* $sct#8672004 "Coccidioides (organism)"
* $sct#8467002 "Dengue virus, type 3 (organism)"
* $sct#8386006 "Clostridium botulinum, type E (organism)"
* $sct#8147000 "Legionella wadsworthii (organism)"
* $sct#7757008 "Acinetobacter (organism)"
* $sct#7527002 "Legionella (organism)"
* $sct#6895004 "Tahyna virus (organism)"
* $sct#6415009 "Human respiratory syncytial virus (organism)"
* $sct#6387008 "Vibrio furnissii (organism)"
* $sct#6246005 "Treponema pallidum ss. pertenue (organism)"
* $sct#6199007 "Mycobacterium diernhoferi (organism)"
* $sct#5885000 "Mycobacterium flavescens (organism)"
* $sct#5851001 "Corynebacterium diphtheriae (organism)"
* $sct#5595000 "Salmonella enterica subspecies enterica serovar Typhi (organism)"
* $sct#5247005 "Bordetella pertussis (organism)"
* $sct#5210005 "Rubella virus (organism)"
* $sct#5056007 "Mycoplasma genitalium (organism)"
* $sct#4779006 "Cryptosporidium muris (organism)"
* $sct#4716008 "Entamoeba histolytica (organism)"
* $sct#4668009 "Yersinia (organism)"
* $sct#4649006 "Toxoplasma gondii (organism)"
* $sct#4298009 "Shigella sonnei (organism)"
* $sct#3351007 "Anaplasma (organism)"
* $sct#3128001 "Legionella israelensis (organism)"
* $sct#3092008 "Staphylococcus aureus (organism)"
* $sct#2864009 "Rotavirus group E (organism)"
* $sct#2785000 "Enterococcus (organism)"
* $sct#2423009 "Chikungunya virus (organism)"
* $sct#1507005 "Mycobacterium kansasii (organism)"
* $sct#1290001 "Mycoplasma hominis (organism)"
* $sct#909007 "Mycobacterium parafortuitum (organism)"
* $sct#638008 "Legionella oakridgensis (organism)"
* $sct#252000 "Acinetobacter johnsonii (organism)"


// * include codes from system http://snomed.info/sct|http://snomed.info/sct/900000000000207008
//     where constraint = "(< 409822003 |Domain Bacteria| OR < 441649000 |Class Cestoda and/or Class Trematoda and/or Phylum Nemata| OR < 414561005 |Kingdom Fungi| OR < 84676004 |Prion| OR < 49872002 |Virus| OR < 417396000 |Kingdom Protozoa| OR < 419036000 |Domain Archaea (organism)| OR < 426785004 |Kingdom Chromista| OR < 370570004 |Kingdom Protoctista| OR < 417377004 |Kingdom Viridiplantae| OR < 243565002 |Slime Mould|) AND ^ 816080008 |International Patient Summary (foundation metadata concept)|"


ValueSet: VsSezioniRefertoLaboratorio
Id: sezione-referto-laboratorio
Title: "Sezioni Composition Lab Report"
Description: "Valueset contenente i codici LOINC per la specialità di laboratorio."
* ^status = #active
* insert LOINCCopyrightForVS
* $LOINC#18718-7 "Studi di marcatori cellulari"
* $LOINC#18719-5 "Studi di chimica"
* $LOINC#18720-3 "Studi di coagulazione"
* $LOINC#18721-1 "Studi di monitoraggio terapeutico dei farmaci"
* $LOINC#18722-9 "Studi di fertilità"
* $LOINC#18723-7 "Studi di ematologia"
* $LOINC#18724-5 "Studi HLA"
* $LOINC#18725-2 "Studi di microbiologia"
* $LOINC#18727-8 "Studi sierologici"
* $LOINC#18728-6 "Studi tossicologici"
* $LOINC#18729-4 "Studi di analisi delle urine"
* $LOINC#18767-4 "Emogasanalisi"
* $LOINC#18768-2 "Conta cellulare+Studi differenziali"
* $LOINC#18769-0 "Test di suscettibilità microbica" //"Non c'è nella tabella ma https://loinc.org/18769-0/ è attach lab" 
* $LOINC#26435-8 "Studi di patologia molecolare"
* $LOINC#26436-6 "Esami di laboratorio"
* $LOINC#26437-4 "Test di sensibilità a sostanze chimiche"
* $LOINC#26438-2 "Studi di citologia"
* $LOINC#18716-1 "Studi di allergologia"
* $LOINC#26439-0 "Studi di patologia chirurgica"
* $LOINC#18717-9 "Studi della banca del sangue"
* $LOINC#92894-5 "Microbiologia studi sui batteri"
* $LOINC#96397-5 "Microbiologia studi di micobatteriologia"
* $LOINC#96398-3 "Microbiologia studi di micologia"
* $LOINC#92892-9 "Microbiologia studi sui parassiti"
* $LOINC#92893-7 "Microbiologia studi sui virus"
* $LOINC#50008-2 "Studi di miscelazione"
* $LOINC#27898-6 "Studi di patologia"
* $LOINC#28620-3 "Studi di urologia"
* $LOINC#28634-4 "Studi vari"
* $LOINC#56874-1 "Sierologia & banca del sangue, studi"
* $LOINC#92895-2 "Endocrinologia, studi"


ValueSet: VsResultsLaboratoryObservation
Id: risultato-osservazione
Title: "Tipo Osservazione"
Description: "Valueset contente i codici che identificano il tipo di osservazione nel referto di laboratorio."
* ^status = #active
* insert LOINCCopyrightForVS
* include codes from system $LOINC where STATUS = "ACTIVE" and CLASSTYPE = "1"
* exclude codes from system $LOINC
    where CLASS regex /CYTO|HL7\.CYTOGEN|HL7\.GENETICS|^PATH(\..*)?|^MOLPATH(\..*)?|NR STATS|H&P\.HX\.LAB|CHALSKIN|LABORDERS/

// Alias: $cs-observation-code = http://hl7.org/fhir/observation-status
// ValueSet:      VsObservationStatusCodeLabReport
// Id:	       valueset-status-obs-it
// Title:	       "Observation status code"
// Description:   "Valueset contenente i codici di di stato per la risorsa Observation Document - Lab Report."
// * ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
// * include codes from system $cs-observation-code 
// * exclude $cs-observation-code#registered
// * exclude $cs-observation-code#cancelled
// * exclude $cs-observation-code#unknown
// * exclude $cs-observation-code#entered-in-error

ValueSet:      VsLabSpecimenTypesIt
Id:	       tipo-campione-lab-it
Title:	       "Tipo campione"
Description:   "Valueset contenente i codici SNOMED per la risorsa Specimen - Lab Report per la descrizione del tipo di campione di laboratorio."
* ^status = #active
* insert SNOMEDCopyrightForVS
* $sct#119376003	"Tissue specimen"
* $sct#119359002	"Bone marrow specimen"
* $sct#122571007	"Pericardial fluid"
* $sct#119297000	"Blood specimen"
* $sct#418564007	"Pleural fluid"
* $sct#119303007	"Microbial isolate"
* $sct#122554006	"Capillary blood specimen"
* $sct#119326000	"Hair specimen"
* $sct#258450006	"CSF specimen"
* $sct#119327009	"Nail specimen"
* $sct#119361006	"Plasma specimen"
* $sct#119334006	"Sputum specimen"
* $sct#119373006	"Amniotic fluid"
* $sct#119339001	"Faeces specimen"
* $sct#122552005	"Arterial blood specimen"
* $sct#119341000	"Bile specimen"
* $sct#122555007	"Venous blood specimen"
* $sct#119342007	"Saliva specimen"
* $sct#122575003	"Urine specimen"
* $sct#119347001	"Seminal fluid"
* $sct#309051001	"Body fluid"
* $sct#119351004	"Erythrocyte specimen"
* $sct#119364003	"Serum specimen"
* $sct#119312009	"Catheter tip submitted as specimen"
* $sct#258566005	"Deoxyribonucleic acid specimen"
* $sct#258529004	"Throat swab"
* $sct#119323008	"Pus specimen"
* $sct#258607008	"Bronchoalveolar lavage fluid"
* $sct#122556008	"Cord blood specimen"
* $sct#258470000	"Prostatic fluid specimen"
* $sct#122569007	"Sweat specimen"
* $sct#258530009	"Urethral swab"
* $sct#440500007	"Dried blood spot specimen"
* $sct#258574006	"Mid-stream urine specimen"
* $sct#119340004	"Meconium specimen"
* $sct#119360007	"Dialysis fluid"
* $sct#119332005	"Synovial fluid"
* $sct#258455001	"Drainage fluid"
* $sct#119371008	"Specimen from abscess"
* $sct#168139001	"Peritoneal fluid"
* $sct#258565009	"Chorionic villi specimen"
* $sct#442173007	"Urine specimen from nephrostomy tube"
* $sct#309128003	"Eye fluid"
* $sct#119348006	"Seminal plasma specimen"
* $sct#258528007	"Rectal swab"
* $sct#122594008	"Tears specimen"
* $sct#258591005	"White blood cell specimen"
* $sct#127479004	"Specimen from uterus"
* $sct#432825001	"Body secretion specimen"
* $sct#446952006	"Specimen from skin obtained by scraping"
* $sct#258503004	"Skin swab"
* $sct#447103002	"Foreign body submitted as specimen"
* $sct#119318008	"Water specimen"
* $sct#699287008	"Urine specimen obtained via suprapubic indwelling urinary catheter"
* $sct#119298005	"Mixed venous blood specimen"
* $sct#703431007	"Venous cord blood specimen"
* $sct#122565001	"Urinary catheter specimen"
* $sct#705054005	"Muscle specimen"
* $sct#309210009	"Oesophageal brushings specimen"
* $sct#708049000	"Plasma specimen with ethylenediamine tetraacetic acid"
* $sct#440473005	"Contact lens submitted as specimen"
* $sct#733056005	"Fluid specimen from ear"
* $sct#446846006	"Urine specimen obtained via indwelling urinary catheter"
* $sct#258428005	"Products of conception tissue specimen"
* $sct#258508008	"Genital swab"
* $sct#258441009	"Exudate specimen"
* $sct#119338009	"Dentin specimen"
* $sct#119350003	"Calculus specimen"
* $sct#258564008	"Buccal smear specimen"
* $sct#119399004	"Specimen from eye"
* $sct#119329007	"Colostrum specimen"
* $sct#258458004	"Fistula fluid"
* $sct#258589002	"Lymph node specimen"
* $sct#258459007	"Gastric fluid"
* $sct#258603007	"Respiratory specimen"
* $sct#258465007	"Lacrimal fluid"
* $sct#122567009	"Urine sediment specimen"
* $sct#258466008	"Middle ear fluid"
* $sct#309176002	"Bronchial brushings specimen"
* $sct#258469001	"Pharyngeal washings"
* $sct#119300005	"Specimen from blood product"
* $sct#119403008	"Specimen from placenta"
* $sct#439961009	"Implant submitted as specimen"
* $sct#258479004	"Interstitial fluid"
* $sct#119336008	"Exhaled air specimen"
* $sct#258482009	"Vesicle fluid"
* $sct#445160003	"Swab of eye"
* $sct#258498002	"Conjunctival swab"
* $sct#122572000	"Vomitus specimen"
* $sct#258500001	"Nasopharyngeal swab"
* $sct#472929000	"Central venous catheter tip submitted as specimen"
* $sct#168141000	"Nasal fluid"
* $sct#703430008	"Arterial cord blood specimen"
* $sct#257261003	"Swab"
* $sct#703432000	"Venous plasma specimen"
* $sct#258411007	"Nasopharyngeal aspirate"
* $sct#708048008	"Plasma specimen with citrate"
* $sct#258415003	"Biopsy specimen"
* $sct#732976006	"Fluid specimen from external auditory canal"
* $sct#258417006	"Bone tissue specimen"
* $sct#898201001	"Specimen from device"
* $sct#258424007	"Heart valve tissue"
* $sct#1003705007   "Drain tip submitted as specimen"


ValueSet:      VsLabSpecimenAdditiveIt
Id:	       additivo-campione-it
Title:	       "Additivo Campione"
Description:   "Valueset contenente i codici SNOMED per la risorsa Specimen - Lab Report per la descrizione dell'additivo utilizzato per il campione di laboratorio."

* ^status = #active
* insert SNOMEDCopyrightForVS
* $sct#1259913003   "Heparin ammonium (substance)"
* $sct#386961008    "Aprotinin (substance)"
* $sct#29725000 "Heparin calcium (substance)"
* $sct#21611007 "Boric acid (substance)"
* $sct#30531001 "Calcium oxalate (substance)"
* $sct#69519002 "Edetic acid (substance)"
* $sct#372628006    "Edetate (substance)"
* $sct#27763000 "Hydrochloric acid (substance)"
* $sct#414407009    "Hirudin (substance)"
* $sct#1256100007   "Edetate dipotassium (substance)"
* $sct#1256101006   "Edetate tripotassium (substance)"
* $sct#1256102004   "Heparin lithium (substance)"
* $sct#387418006    "Edetate disodium (substance)"
* $sct#412546005    "Sodium citrate (substance)"
* $sct#50045009 "Heparin sodium (substance)"
* $sct#6910009  "Sodium fluoride (substance)"
* $sct#50306007 "Sodium tetraborate (substance)"
* $sct#387168006    "Mannitol (substance)"
* $sct#115281000146102  "Sodium formate (substance)"

ValueSet:      VsLabSpecimenContainerIt
Id:	       campione-container-lab-it
Title:	       "Container Campione"
Description:   "Valueset contenente i codici SNOMED per la risorsa Specimen - Lab Report per la descrizione del container del campione di laboratorio."
* ^status = #active
* insert SNOMEDCopyrightForVS
* $sct#702290003 "Cervical cytology microscopy slide (physical object)"
* $sct#706057008 "Cytology specimen container (physical object)"
* $sct#706052002 "Evacuated blood collection tube (physical object)"
* $sct#702292006 "Evacuated blood collection tube , K3EDTA/sodium fluoride (physical object)"
* $sct#767387006 "Evacuated blood collection tube with citrate and theophylline and adenosine and dipyramidole (physical object)"
* $sct#767384004 "Evacuated blood collection tube with clot activator (physical object)"
* $sct#767390000 "Evacuated blood collection tube with heparin lithium and gelseparator (physical object)"
* $sct#767382000 "Evacuated blood collection tube with heparin sodium (physical object)"
* $sct#767660003 "Evacuated blood collection tube with sodium fluoride (physical object)"
* $sct#767389009 "Evacuated blood collection tube with tripotassium and ethylene diamine tetraacetic acid and aprotinin (physical object)"
* $sct#702279008 "Evacuated blood collection tube, gel separator (physical object)"
* $sct#702293001 "Evacuated blood collection tube, K2EDTA/aprotinin (physical object)"
* $sct#702278000 "Evacuated blood collection tube, no additive/metal-free (physical object)"
* $sct#702280006 "Evacuated blood collection tube, RNA stabiliser (physical object)"
* $sct#702281005 "Evacuated blood collection tube, thrombin/clot activator/gelseparator (physical object)"
* $sct#702310001 "Evacuated saliva specimen container, sodium azide (physical object)"
* $sct#706056004 "Evacuated urine specimen container (physical object)"
* $sct#702302002 "Evacuated urine specimen container, boric acid (H3BO3) (physical object)"
* $sct#702288004 "Evacuated urine specimen container, boric acid (H3BO3)/sodiumformate (physical object)"
* $sct#702289007 "Evacuated urine specimen container, ethyl paraben/sodium propionate/chlorhexidine (physical object)"
* $sct#702303007 "Evacuated urine specimen container, multiple preservative (physical object)"
* $sct#702308003 "Evacuated urine specimen container, no additive (physical object)"
* $sct#706047007 "Fecal specimen container (physical object)"
* $sct#706053007 "General specimen container (physical object)"
* $sct#702268003 "General specimen container, no additive, non-sterile (physical object)"
* $sct#702269006 "General specimen container, no additive, sterile (physical object)"
* $sct#874799005 "Microbial cryotube (physical object)"
* $sct#706050005 "Microcapillary blood collection tube (physical object)"
* $sct#702275002 "Microcapillary blood collection tube, ammonium heparin (physical object)"
* $sct#702276001 "Microcapillary blood collection tube, K2EDTA (physical object)"
* $sct#702277005 "Microcapillary blood collection tube, no additive (physical object)"
* $sct#702304001 "Microcapillary blood transfer tube, clot activator (physical object)"
* $sct#702306004 "Microcapillary blood transfer tube, EDTA (physical object)"
* $sct#702307008 "Microcapillary blood transfer tube, heparin (physical object)"
* $sct#702305000 "Microcapillary sodium fluoride blood transfer tube (physical object)"
* $sct#702224000 "Midstream urine specimen container (physical object)"
* $sct#706051009 "Non-evacuated blood collection tube (physical object)"
* $sct#702283008 "Non-evacuated blood collection tube with gel separator (physical object)"
* $sct#702297000 "Non-evacuated blood collection tube, clot activator (physical object)"
* $sct#702295008 "Non-evacuated blood collection tube, clot activator/gel separator (physical object)"
* $sct#702282003 "Non-evacuated blood collection tube, EDTA (physical object)"
* $sct#702299002 "Non-evacuated blood collection tube, K2EDTA (physical object)"
* $sct#702298005 "Non-evacuated blood collection tube, K3EDTA (physical object)"
* $sct#702284002 "Non-evacuated blood collection tube, lithium heparin (physical object)"
* $sct#702300005 "Non-evacuated blood collection tube, lithium heparin/gel separator,non-sterile (physical object)"
* $sct#702285001 "Non-evacuated blood collection tube, lithium heparin/gel separator,sterile (physical object)"
* $sct#702286000 "Non-evacuated blood collection tube, NaEDTA/sodium fluoride (physical object)"
* $sct#702256007 "Non-evacuated blood collection tube, no additive (physical object)"
* $sct#702287009 "Non-evacuated blood collection tube, potassium oxalate/sodiumfluoride (physical object)"
* $sct#702296009 "Non-evacuated blood collection tube, sodium citrate (physical object)"
* $sct#702264001 "Non-sterile urine specimen container (physical object)"
* $sct#702309006 "Saliva specimen container, no additive (physical object)"
* $sct#706058003 "Secretory specimen container (physical object)"
* $sct#706046003 "Specimen receptacle (physical object)"
* $sct#702223006 "Sputum specimen container (physical object)"
* $sct#702244006 "Sterile urine specimen container (physical object)"
* $sct#702232008 "Sweat specimen container (physical object)"
* $sct#702294007 "Syringe-blood collection tube transfer (physical object)"
* $sct#706054001 "Urine specimen container (physical object)"
* $sct#767385003 "Aerobic blood culture bottle (physical object)"
* $sct#767383005 "Anaerobic blood culture bottle (physical object)"
// Alias: $valueset-observation-value-microorganism = valueset-observation-value-microorganism
// Alias: $valueset-observation-value-bloodgroup = valueset-observation-value-bloodgroup
// Alias: $valueset-observation-value-presence-absence = valueset-observation-value-presence-absence

ValueSet: VsObservationValueCodeableConcept
Id: valueset-valuecodeableconcept-obs-it
Title: "Risultato osservazione codificato"
Description: "Valueset contenente i codici per la risorsa Observation - Lab Report per la descrizione del risultato della rilevazione."
* include codes from valueset valueset-observation-value-microorganism
* include codes from valueset valueset-observation-value-bloodgroup
* include codes from valueset valueset-observation-value-presence-absence
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* insert SNOMEDCopyrightForVS

ValueSet: VsObservationBloodGroup
Id: valueset-observation-value-bloodgroup
Title: "Risultato osservazione codificato gruppo sanguigno"
Description: "Valueset contenente i codici SNOMED di gruppo sanguigno per la risorsa Observation - Lab Report per la descrizione del risultato della rilevazione."
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* insert SNOMEDCopyrightForVS
* include codes from system $sct where concept descendent-of #365636006

ValueSet: VsObservationPresenzaAssenza
Id: valueset-observation-value-presence-absence
Title: "Risultato osservazione codificato presenza/assenza"
Description: "Valueset contenente i codici SNOMED di presenza/assenza per la risorsa Observation - Lab Report per la descrizione del risultato della rilevazione."

* include codes from system $sct where concept descendent-of #272519000 
* include codes from system $sct where concept descendent-of #260411009
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"
* insert SNOMEDCopyrightForVS


ValueSet: VsObservationMicroorganismi
Id: valueset-observation-value-microorganism
Title: "Risultato osservazione codificato microorganismi"
Description: "Valueset contenente i codici SNOMED di microorganismi per la risorsa Observation - Lab Report per la descrizione del risultato della rilevazione."
* insert SNOMEDCopyrightForVS
* include codes from system $sct where concept descendent-of #409822003 
* include codes from system $sct where concept descendent-of #441649000
* include codes from system $sct where concept descendent-of #414561005 
* include codes from system $sct where concept descendent-of #84676004 
* include codes from system $sct where concept descendent-of #49872002
* include codes from system $sct where concept descendent-of #417396000
* include codes from system $sct where concept descendent-of #419036000
* include codes from system $sct where concept descendent-of #426785004
* include codes from system $sct where concept descendent-of #370570004
* include codes from system $sct where concept descendent-of #417377004 
* include codes from system $sct where concept descendent-of #243565002 
* ^meta.profile = "http://hl7.org/fhir/StructureDefinition/shareablevalueset"

ValueSet: VsGruppoSanguigno
Id: results-observation-bloodgroup
Title: "Risultato osservazione codificato - Gruppo Sanguigno IPS di SNOMED CT"
Description: "Valueset che include i codici per i risultati dei gruppi sanguigni dal sottoinsieme SNOMED International Patient Set (IPS) di SNOMED CT."

* ^status = #active
* insert SNOMEDCopyrightForVS
* $sct#278154007 "Blood group AB Rh(D) negative"
* $sct#278153001 "Blood group B Rh(D) negative"
* $sct#278152006 "Blood group A Rh(D) negative"
* $sct#278151004 "Blood group AB Rh(D) positive"
* $sct#278150003 "Blood group B Rh(D) positive"
* $sct#278149003 "Blood group A Rh(D) positive"
* $sct#278148006 "Blood group O Rh(D) negative"
* $sct#278147001 "Blood group O Rh(D) positive"
* $sct#165746003 "RhD negative"
* $sct#165743006 "Blood group AB"
* $sct#112149005 "Blood group B"
* $sct#112144000 "Blood group A"
* $sct#58460004 "Blood group O"
// * include codes from system http://snomed.info/sct|http://snomed.info/sct/900000000000207008 where constraint = "< 365636006 |Finding of blood group (finding)| AND ^ 816080008 |International Patient Summary (foundation metadata concept)|"

ValueSet: VsResultsPresenceAbsenceSnomedCtIpsFreeSet
Id: results-presence-absence-snomed-ct-ips-free-set
Title: "Risultato osservazione codificato -  presenza/assenza IPS di SNOMED CT"
Description: "Valueset che include i codici per i risultati di presenza o assenza dal sottoinsieme SNOMED International Patient Set (IPS) di SNOMED CT."

* insert SNOMEDCopyrightForVS
* $sct#441614007 "Present one plus out of three plus"
* $sct#441521003 "Present three plus out of three plus"
* $sct#441517005 "Present two plus out of three plus"
* $sct#260350009 "++++"
* $sct#260349009 "+++"
* $sct#260348001 "++"
* $sct#260347006 "+"
* $sct#52101004 "Present"
* $sct#2667000 "Absent"
/* 
* include codes from system http://snomed.info/sct|http://snomed.info/sct/900000000000207008
    where constraint = "(< 260411009 |Presence findings (qualifier value)| OR < 272519000 |Absence findings (qualifier value)|) AND ^ 816080008 |International Patient Summary (foundation metadata concept)|" */

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/valuesets/VsMinisteroSaluteEsenzioni.fsh

ValueSet: VsMinisteroSaluteEsenzioni
Id: minsan-esenzioni
Title: "MDS - Esenzioni"
Description: "MDS - Codice Esenzioni"
* ^experimental = false
* ^version = "0.1.0"
* ^status = #active
* include codes from system $minsan-esenzioni where status = #active

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/valuesets/VsStatoCivile.fsh

ValueSet: VsStatoCivile
Id: statoCivile
Title: "Stato Civile"
Description: "Questo value set definisce una serie di codici per rappresentare lo stato civile di una persona. Specializza ed estende il value set http://hl7.org/fhir/ValueSet/marital-status"
* ^version = "4.0.1"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 Italia"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.it/fhir"
* $v3-MaritalStatus#D "Divorziato/a"
* $v3-MaritalStatus#M "Coniugato/a"
* $v3-MaritalStatus#S "Celibe/nubile"
* $v3-MaritalStatus#W "Vedovo/a"
* $v3-MaritalStatus#L "Separato/a Legalmente"
* $v3-MaritalStatus#A "Annullato"
* $v3-NullFlavor#UNK "Sconosciuto"
* CsIstatStatoCivile#6 "Unito civilmente"
* CsIstatStatoCivile#7 "Stato libero a seguito di decesso della parte unita civilmente"
* CsIstatStatoCivile#8 "Stato libero a seguito di scioglimento dell'unione"

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/valuesets/VsSTP.fsh

ValueSet: VsURIIdStp
Id: URI-idStp
Title: "Identificativi per codici STP regionali"
Description: "Identificativi per codici STP regionali."
* ^experimental = false
* $uri#urn:oid:2.16.840.1.113883.2.9.2.10.4.1.1 "Codici STP - Piemonte"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.20.4.1.1 "Codici STP - Valle d`aosta"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.30.4.1.1 "Codici STP - Lombardia"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.41.4.1.1 "Codici STP - prov. auton. bolzan"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.42.4.1.1 "Codici STP - prov. auton. trento"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.50.4.1.1 "Codici STP - Veneto"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.60.4.1.1 "Codici STP - Friuli venezia giulia"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.70.4.1.1 "Codici STP - Liguria"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.80.4.1.1 "Codici STP - Emilia romagna"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.90.4.1.1 "Codici STP - Toscana"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.100.4.1.1 "Codici STP - Umbria"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.110.4.1.1 "Codici STP - Marche"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.120.4.1.1 "Codici STP - Lazio"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.130.4.1.1 "Codici STP - Abruzzo"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.140.4.1.1 "Codici STP - Molise"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.150.4.1.1 "Codici STP - Campania"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.160.4.1.1 "Codici STP - Puglia"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.170.4.1.1 "Codici STP - Basilicata"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.180.4.1.1 "Codici STP - Calabria"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.190.4.1.1 "Codici STP - Sicilia"
* $uri#urn:oid:2.16.840.1.113883.2.9.2.200.4.1.1 "Codici STP - Sardegna"



---

File: repos/hl7-it_SLASH_lab-report/input/fsh/valuesets/VstipoIdentificatore.fsh

ValueSet: VstipoIdentificatore
Id: VstipoIdentificatore
Title: "Tipo identificatore"
Description: "Value set che descrivie i diversi tipi di identificatori. Include i codici della tabella http://terminology.hl7.org/CodeSystem/v2-0203 piu' 'STP' ed 'ENI' "
* ^version = "4.0.1"
* ^status = #active
* ^experimental = false
* ^date = "2019-11-01T09:29:23+11:00"
* ^publisher = "HL7 Italia"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://hl7.it/fhir"
* $v2-0203#DL "Patente di Guida"
* $v2-0203#PPN "Numero Passaporto"
* $v2-0203#BRN "Breed Registry Number"
* $v2-0203#MR "Medical record number"
* $v2-0203#MCN "Microchip Number"
* $v2-0203#EN "Employer number"
* $v2-0203#TAX "Tax ID number"
* $v2-0203#NIIP "National Insurance Payor Identifier (Payor)"
* $v2-0203#PRN "Provider number"
* $v2-0203#MD "Medical License number"
* $v2-0203#DR "Donor Registration Number"
* $v2-0203#ACSN "Accession ID"
* $v2-0203#UDI "Universal Device Identifier"
* $v2-0203#SNO "Serial Number"
* $v2-0203#SB "Social Beneficiary Identifier"
* $v2-0203#PLAC "Placer Identifier"
* $v2-0203#FILL "Filler Identifier"
* include codes from system CsItIdentifierType

---

File: repos/hl7-it_SLASH_lab-report/input/fsh/Aliases.fsh

// GC: Suggest to reoganzie the entries (not always included in the right block )

//------Valueset------//
Alias: $conf = http://terminology.hl7.org/ValueSet/v3-Confidentiality
Alias: $sct = http://snomed.info/sct
Alias: $loinc = http://loinc.org
Alias: $diagn-status = http://hl7.org/fhir/ValueSet/diagnostic-report-status
Alias: $diagnosticreport-category = http://terminology.hl7.org/CodeSystem/v2-0074
Alias: $diagnosticreport-category-valueset = http://hl7.org/fhir/ValueSet/diagnostic-service-sections 
Alias: $ucum = http://unitsofmeasure.org
// Alias: $istat-titoloStudio = http://hl7.it/fhir/lab-report/ValueSet/istat-titoloStudio
Alias: $istat-professione = http://hl7.it/fhir/lab-report/ValueSet/istat-professione   
Alias: $istat-cittadinanza = http://hl7.it/fhir/lab-report/ValueSet/istat-cittadinanza
Alias: $istat-luogoNascita = http://hl7.it/fhir/lab-report/ValueSet/istat-luogoNascita
Alias: $practitionerRole-code = http://terminology.hl7.org/CodeSystem/practitioner-role

//Alias: $asl = 	http://hl7.it/fhir/lab-report/ValueSet/uri-idAslRegione
Alias: $tipo-org = http://hl7.it/fhir/lab-report/ValueSet/tipoOrganizzazione
Alias: $Codice-Observation = http://hl7.org/fhir/uv/ips/ValueSet/results-laboratory-observations-uv-ips
Alias: $tipoIdentificatore = http://hl7.it/fhir/lab-report/ValueSet/VstipoIdentificatore
Alias: $data-absent-reason = 	http://hl7.org/fhir/ValueSet/data-absent-reason
Alias: $MMG-PLS-code-lab-it = 	http://hl7.it/fhir/lab-report/ValueSet/mmgOrPls
Alias: $ucum-valueset = http://hl7.org/fhir/ValueSet/ucum-units
Alias: $results-observation-bloodgroup = http://hl7.it/fhir/lab-report/ValueSet/results-observation-bloodgroup
Alias: $tipo-campione-lab-it = http://hl7.it/fhir/lab-report/ValueSet/tipo-campione-lab-it
Alias: $valueset-valuecodeableconcept-obs-it = http://hl7.it/fhir/lab-report/ValueSet/valueset-valuecodeableconcept-obs-it
Alias: $results-microorganism-snomed-ct-ips-free-set = http://hl7.it/fhir/lab-report/ValueSet/results-microorganism-snomed-ct-ips-free-set
Alias: $results-presence-absence-snomed-ct-ips-free-set = http://hl7.it/fhir/lab-report/ValueSet/results-presence-absence-snomed-ct-ips-free-set
Alias: $additivo-campione-it = http://hl7.it/fhir/lab-report/ValueSet/additivo-campione-it
Alias: $sezione-referto-laboratorio = http://hl7.it/fhir/lab-report/ValueSet/sezione-referto-laboratorio
Alias: $risultato-osservazione = http://hl7.it/fhir/lab-report/ValueSet/risultato-osservazione
Alias: $media-type = http://terminology.hl7.org/CodeSystem/media-type
Alias: $results-laboratory-observations-uv-ips = http://hl7.org/fhir/uv/ips/ValueSet/results-laboratory-observations-uv-ips
Alias: $campione-container-lab-it = http://hl7.it/fhir/lab-report/ValueSet/campione-container-lab-it
//------Profile------//
Alias: $sct-device = http://hl7.org/fhir/ValueSet/device-type
Alias: $observation-status = http://hl7.org/fhir/ValueSet/observation-status
Alias: $encounter-class = http://terminology.hl7.org/ValueSet/encounter-class
Alias: $encounter-status = http://hl7.org/fhir/ValueSet/encounter-status
Alias: $entityCode = http://terminology.hl7.org/ValueSet/v3-EntityCode
Alias: $patient-birthPlace = http://hl7.org/fhir/StructureDefinition/patient-birthPlace
Alias: $gender-code = http://terminology.hl7.org/CodeSystem/v3-AdministrativeGender
Alias: $uri-idRegionali = http://hl7.it/fhir/lab-report/ValueSet/vs-anagrafi-regionali
Alias: $uri-idEni = http://hl7.it/fhir/lab-report/ValueSet/uri-idEni 
Alias: $uri-idStp = http://hl7.it/fhir/lab-report/ValueSet/URI-idStp
Alias: $cf = http://hl7.it/sid/codiceFiscale
Alias: $anpr = http://hl7.it/sid/anpr
Alias: $common-language = 	http://hl7.org/fhir/ValueSet/languages
Alias: $istat-stato = http://hl7.it/fhir/lab-report/ValueSet/istat-stato
Alias: $istat-comune = http://hl7.it/fhir/lab-report/ValueSet/istat-comune
Alias: $istat-provincia = http://hl7.it/fhir/lab-report/ValueSet/istat-provincia
Alias: $istat-regione = http://hl7.it/fhir/lab-report/ValueSet/istat-regione
Alias: $istat-stati = http://hl7.it/fhir/lab-report/CodeSystem/istat-unitaAmministrativeTerritorialiEstere
Alias: $iso21090-SC-coding = http://hl7.org/fhir/StructureDefinition/iso21090-SC-coding
Alias: $iso21090-ADXP-streetName = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName
Alias: $iso21090-ADXP-streetNameBase = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetNameBase
Alias: $iso21090-ADXP-streetNameType = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetNameType
Alias: $iso21090-ADXP-houseNumber = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber
Alias: $istat-dug = 	http://hl7.it/fhir/lab-report/CodeSystem/dug
Alias: $tipoEntita = http://hl7.it/fhir/lab-report/CodeSystem/it-tipoEntita
Alias: $location-type = http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType
Alias: $intent-code = http://hl7.org/fhir/ValueSet/request-intent
Alias: $sct-method = http://hl7.org/fhir/ValueSet/observation-methods
Alias: $MediaType = http://hl7.org/fhir/ValueSet/media-type
Alias: $typeName-device = http://hl7.org/fhir/ValueSet/device-nametype
Alias: $practitionerrole-code-lab-it = http://hl7.org/fhir/ValueSet/practitioner-role
Alias: $v3-Confidentiality = http://terminology.hl7.org/CodeSystem/v3-Confidentiality
Alias: $v3-SpecimenType = http://terminology.hl7.org/CodeSystem/v3-SpecimenType

//-- HL7 EU Profiles
Alias: $Observation-resultslab-eu-lab = http://hl7.eu/fhir/laboratory/StructureDefinition/Observation-resultslab-eu-lab
Alias: $Specimen-eu-lab = http://hl7.eu/fhir/laboratory/StructureDefinition/Specimen-eu-lab
Alias: $Patient-eu-lab = http://hl7.eu/fhir/laboratory/StructureDefinition/Patient-eu-lab
Alias: $Quantity-eu-lab = http://hl7.eu/fhir/laboratory/StructureDefinition/Quantity-eu-lab
Alias: $Practitioner-eu-lab  = http://hl7.eu/fhir/laboratory/StructureDefinition/Practitioner-eu-lab 
Alias: $PractitionerRole-eu-lab  = http://hl7.eu/fhir/laboratory/StructureDefinition/PractitionerRole-eu-lab
Alias: $Organization-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Organization-uv-ips
Alias: $Composition-eu-lab = http://hl7.eu/fhir/laboratory/StructureDefinition/Composition-eu-lab
Alias: $Bundle-eu-lab = http://hl7.eu/fhir/laboratory/StructureDefinition/Bundle-eu-lab
Alias: $DiagnosticReport-eu-lab = http://hl7.eu/fhir/laboratory/StructureDefinition/DiagnosticReport-eu-lab
Alias: $ServiceRequest-eu-lab = http://hl7.eu/fhir/laboratory/StructureDefinition/ServiceRequest-eu-lab
Alias: $Substance-additive-specimen-it-lab = http://hl7.eu/fhir/laboratory/StructureDefinition/Substance-additive-eu-lab // The name will be changed
Alias: $CodeableConcept-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/CodeableConcept-uv-ips
Alias: $SD-data-absent-reason = http://hl7.org/fhir/StructureDefinition/data-absent-reason
Alias: $Range-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Range-uv-ips
Alias: $Ratio-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Ratio-uv-ips
Alias: $Quantity-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Quantity-uv-ips

//---Example
Alias: $serviceRequest-category = http://example.it/FHIR/schema/serviceRequest-category
Alias: $servicerequest-lab = http://example.it/FHIR/schema/servicerequest-englab
Alias: $istat-DUG-CS = 	http://hl7.it/fhir/lab-report/CodeSystem/dug
Alias: $patient-url = http://example.it/Patient/1
Alias: $obs-interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation
Alias: $v2-0074 = http://terminology.hl7.org/CodeSystem/v2-0074
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
//---Extension 
Alias: $ext-dataEnterer-time = dataEnterer-time
Alias: $sequelTo = http://hl7.org/fhir/StructureDefinition/observation-sequelTo
Alias: $diagnostic-report-composition-r5 = http://hl7.org/fhir/5.0/StructureDefinition/extension-DiagnosticReport.composition
Alias: $patient-citizenship = http://hl7.org/fhir/StructureDefinition/patient-citizenship
//---ClinicalDocument
Alias: $clinical-document = http://hl7.org/fhir/StructureDefinition/clinicaldocument
Alias: $CodeableConcept-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/CodeableConcept-uv-ips
//---EU
Alias: $basedOnOrder = http://hl7.eu/fhir/StructureDefinition/composition-basedOn-order-or-requisition
Alias: $informationRecipient = http://hl7.eu/fhir/StructureDefinition/information-recipient
Alias: $it-tipoEntita = http://hl7.it/fhir/lab-report/CodeSystem/it-tipoEntita
Alias: $istat-unitaAmministrativeTerritoriali = http://hl7.it/fhir/lab-report/CodeSystem/istat-unitaAmministrativeTerritoriali
Alias: $minsan-regione = http://hl7.it/fhir/lab-report/CodeSystem/minsan-regione
//Alias: $UriHsp =  http://hl7.it/fhir/lab-report/CodeSystem/cs-mds-idStruttureInterne
Alias: $minsan-idStruttureInterne = http://hl7.it/fhir/lab-report/ValueSet/minsan-idStruttureInterne

Alias: $cs_strttureInterne = http://hl7.it/fhir/lab-report/CodeSystem/cs-mds-idStruttureInterne
Alias: $CS_Estero = http://hl7.it/fhir/lab-report/CodeSystem/istat-unitaAmministrativeTerritorialiEstere
Alias: $uri = urn:ietf:rfc:3986
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $iso3166 = urn:iso:std:iso:3166
Alias: $CS_tipoEntita = http://hl7.it/fhir/lab-report/CodeSystem/it-tipoEntita
Alias: $UriHsp = http://hl7.it/fhir/lab-report/CodeSystem/minsan-hsp
Alias: $LOINC = http://loinc.org
Alias: $oid = urn:ietf:rfc:1155
Alias: $istatUnitaAmministrativeTerritoriali = http://hl7.it/fhir/lab-report/CodeSystem/istat-unitaAmministrativeTerritoriali
Alias: $CS_unitaTerritoriali = http://hl7.it/fhir/lab-report/CodeSystem/istat-unitaAmministrativeTerritoriali
Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $minsan-esenzioni = http://hl7.it/fhir/lab-report/CodeSystem/minsan-esenzioni
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $asl = http://hl7.it/fhir/lab-report/CodeSystem/cs-asl
Alias: $statoCivile = http://hl7.it/fhir/lab-report/CodeSystem/istat-statoCivile
Alias: $CS_TitoloStudioIstat = http://hl7.it/fhir/lab-report/CodeSystem/istat-ctsi03
Alias: $it-V3RoleCode = http://hl7.it/fhir/lab-report/CodeSystem/it-V3RoleCode
// Alias: $it-V3RoleCode = http://hl7.it/fhir/lab-repor/CodeSystem/it-V3RoleCode
Alias: $CS_ProfessioniIstat = http://hl7.it/fhir/lab-report/CodeSystem/istat-professioni
Alias: $V3RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $MinSanRegioni = http://hl7.it/fhir/lab-report/CodeSystem/minsan-regione
Alias: $strutturePub = http://hl7.it/fhir/lab-report/CodeSystem/minsan-hsp
Alias: $aic = http://hl7.it/fhir/lab-report/CodeSystem/aifa-aic
Alias: $aifa-nota = http://hl7.it/fhir/lab-report/CodeSystem/aifa-nota
Alias: $icd-9-cm = http://hl7.org/fhir/sid/icd-9-cm
Alias: $atc = http://www.whocc.no/atc



---

File: repos/hl7-it_SLASH_lab-report/input/images-source/aggiornamento.plantuml

@startuml
alt Interazione FHIR Document
Sender -> Receiver: Aggiornamento Lab Report [PUT]
Receiver --> Sender: PUT Response
else Interazione Risorse FHIR
Sender -> Receiver: Aggiornamento Risorse LAB [PUT]
Receiver --> Sender: PUT Response
end
@enduml


---

File: repos/hl7-it_SLASH_lab-report/input/images-source/aggiornamentoDOC.plantuml

@startuml

Sender -> Receiver: Aggiornamento Bundle Lab Report [PUT]
Receiver --> Sender: PUT Response
@enduml


---

File: repos/hl7-it_SLASH_lab-report/input/images-source/aggiornamentoRES.plantuml

@startuml
Sender -> Receiver: Aggiornamento Risorsa [PUT]
Receiver --> Sender: PUT Response
@enduml


---

File: repos/hl7-it_SLASH_lab-report/input/images-source/alimentazione.plantuml

@startuml
alt Transaction, Batch
    "Sender" -> "Receiver" : Alimentazione Dossier Farmaceutico (Bundle) [POST]
else Singola Risorsa
    "Sender" -> "Receiver" : Invia Singola Risorsa [POST]
end
    "Receiver" --> "Sender" : POST Response
@enduml

---

File: repos/hl7-it_SLASH_lab-report/input/images-source/alimentazioneDOC.plantuml

@startuml
Sender -> Receiver: Invio Bundle Lab Report [POST]
Receiver --> Sender: POST Response
@enduml

---

File: repos/hl7-it_SLASH_lab-report/input/images-source/alimentazioneRES.plantuml

@startuml
Sender -> Receiver: Invio Risorse LAB [POST]
Receiver --> Sender: POST Response
@enduml

---

File: repos/hl7-it_SLASH_lab-report/input/images-source/consultazione.plantuml

@startuml
alt Consultazione per identificativo di prescrizione
    "Consumer" -> "Provider" : Consultazione per order id (operation) [GET/POST]
    "Provider" --> "Consumer" : Operation Response [GET/POST]
else Altre consultazioni
    "Consumer" -> "Provider" : altre consultazioni (FHIR search) [GET/POST]
    "Provider" --> "Consumer" : GET/POST search response [Search Bundle]
end
@enduml

---

File: repos/hl7-it_SLASH_lab-report/input/images-source/consultazioneDOC.plantuml

@startuml
alt  Consultazione documento per paziente [GET/POST]
    Consumer_DOC -> Provider: Ricerca per parametri documento
    Provider --> Consumer_DOC: GET/POST Response
else  Consultazione del documento specifico [GET/POST]
    Consumer_DOC -> Provider: Ricerca per identificativo documento
    Provider --> Consumer_DOC: GET/POST Response 
end
@enduml

---

File: repos/hl7-it_SLASH_lab-report/input/images-source/consultazioneRES.plantuml

@startuml

    Consumer_RES -> Provider: Altre consultazioni (FHIR search) [GET/POST]
    Provider --> Consumer_RES: GET/POST Response 

@enduml

---

File: repos/hl7-it_SLASH_lab-report/input/images-source/creation.plantuml

@startuml

Sender_DOC -> Receiver: Invio Lab Report [POST]

opt Invio FHIR Resources
   Sender_RES -> Receiver: Invio Risorse\n(DiagnosticReport, Observation, Specimen, ecc.) [POST]
end
opt
   Sender_DOC -> Receiver:  Aggiorna Lab Report [PUT]
end
opt
   Sender_RES -> Receiver:  Aggiorna Risorse [PUT]
end
alt consultazione documento FHIR 
      Consumer_DOC -> Receiver: Ricerca per paziente e/o ID prescrizione
      Consumer_DOC -> Receiver: Ricerca per paziente e/o per tipo esame
      Consumer_DOC -> Receiver: Ricerca per paziente e/o per tipo di campione
      Consumer_DOC -> Receiver: Ricerca per paziente e/o per periodo
      Consumer_DOC -> Receiver: Ricerca per paziente e/o per incontro
else consultazione risorse FHIR
      Consumer_RES -> Receiver: Ricerca tramite search parameters
end
@enduml


---

File: repos/hl7-it_SLASH_lab-report/input/images-source/creationDOC.plantuml

@startuml

Sender_DOC -> Receiver: Invio Lab Report [POST]
Receiver -> Sender_DOC: POST Response
@enduml


---

File: repos/hl7-it_SLASH_lab-report/input/images-source/creationRES.plantuml

@startuml

Sender_RES -> Receiver: Invio Risorse\n(DiagnosticReport, Observation, Specimen, ecc.) [POST]
Receiver -> Sender_RES: POST Response
@enduml


---

File: repos/hl7-it_SLASH_lab-report/input/images-source/creazioneBundleDocument.plantuml

@startuml
Placer -> Placer: Creazione ServiceRequest,\nEncounter

Placer -> Filler: Invio ServiceRequest,\nEncounter

alt risposta OK
    Filler -> Filler: ServiceRequest,\n Encounter status UPDATE
    Filler -> Filler: Creazione Specimen
else risposta KO
    Filler --> Placer !!: ServiceRequest status "enterer-in-error"
end

Filler -> ApplicativoClinico: Invio ServiceRequest
    loop ServiceRequest
        ApplicativoClinico-> ApplicativoClinico++: Creazione Observation,\n status=registered 
        ApplicativoClinico-> ApplicativoClinico: Generazione Risultati
        ApplicativoClinico-> ApplicativoClinico--: Aggiornamento Observation,\n status=preliminary 
    end
ApplicativoClinico-> ReportCreator: Invio Observation
ReportCreator -> ReportCreator: Validazione Observation,\n status=final
ReportCreator -> ReportCreator: Creazione DiagnosticReport
ReportCreator -> Sender: Invio  DiagnosticReport
Sender -> Placer: Recupero Patient, Practitioner, Organization, Location
Placer --> Sender: Risposta POST
Sender -> Sender: Creazione Composition
Sender -> Sender: Creazione Bundle
Sender -> Receiver: POST Bundle Laboratory Report
@enduml

---

File: repos/hl7-it_SLASH_lab-report/input/images-source/scenarioDoc.plantuml

@startuml
Sender -> Sender: Crea Lab Report

Sender -> Receiver: Invia Lab Report [POST]

Sender -> Receiver:  Aggiorna Lab Report [PUT]

alt  consultazione documento FHIR specifico 
      Consumer -> Receiver: Ricerca ID Bundle
else consultazione per dati Lab-Report
      Consumer -> Receiver: Ricerca per search parameters
end
@enduml

---

File: repos/hl7-it_SLASH_lab-report/input/images-source/scenarioRes.plantuml

@startuml

Sender -> Receiver: Invia Singola Risorsa [POST]

Sender -> Receiver:  Aggiorna Singola Risorsa [PUT]

Consumer -> Receiver: Consultazione Singola Risorsa (FHIR Search)

@enduml

---

File: repos/hl7-it_SLASH_lab-report/input/images-source/update.plantuml

@startuml
alt Singola Risorsa
    "Sender" -> "Receiver" : Aggiorna Singola Risorsa [PUT/DELETE]
    "Receiver" --> "Sender" : PUT/DELETE Response
else Transaction, Batch
    "Sender" -> "Receiver" : Aggiornamento (Bundle) [POST]
    "Receiver" --> "Sender" : POST Response
end
@enduml

---

File: repos/hl7-it_SLASH_lab-report/input/pagecontent/contesto.md

Coerentemente con quanto stabilito nel DPCM n.178/2015, il Referto di Medicina di Laboratorio è il documento redatto dal medico di medicina di laboratorio, e caratterizzante il core minimo del FSE (Fascicolo Sanitario Elettronico).

Questa Implementation Guide (IG) è il riferimento italiano per le specifiche per l’implementazione del documento clinico “Referto di Medicina di Laboratorio” secondo lo standard HL7 FHIR. Tale IG intende fornire un supporto alla creazione delle risorse utili per i contenuti previsti per il suddetto documento clinico al fine di garantire qualità del dato e facilitare lo scambio di dati clinici tra i vari attori che concorrono all’erogazione dei servizi sanitari.



---

File: repos/hl7-it_SLASH_lab-report/input/pagecontent/copyright.md

### Condizioni d’uso

Questa guida, così come gli altri artefatti sviluppati da HL7 Italia,
sono prodotti da HL7 Italia nei termini previsti dal proprio statuto e
regolamento riguardo la Proprietà Intellettuale, in particolare per
copyright, trademark e brevetti.

Questa guida inoltre contiene materiale sviluppato da HL7®, incluso
terminologie, prodotte da HL7 International nei termini previsti da HL7®
Governance and Operations Manual (Section 16).

Questo documento è rilasciato in licenza Creative Commons (CC BY-SA 4.0)
“Attribution-ShareAlike 4.0 International”.

Questa guida di HL7 Italia contiene e fa riferimento a materiale la cui
proprietà intellettuale è di terzi (“Third Party IP”).

Gli implementatori e chi testa questa specifica DEVONO attenersi ai
termini di licenza previsto da ciascun artefatto, incluso le
terminologie.

Le licenze associate a questi prodotti DEVONO essere ottenute dal
proprietario dell'IP per ciascun sistema di codifica e / o altro
artefatto utilizzato. È esclusiva responsabilità di ciascuna
organizzazione che implementa o verifica questa specifica garantire che
le proprie implementazioni siano conformi ai requisiti di licenza di
ciascuna IP di terze parti.

### Riferimenti

La seguente tabella riporta una lista non esaustiva di terminologie di
terze parti che potrebbero essere usate da guide sviluppate da HL7
Italia o presenti in guide da cui queste guide possono dipendereche
potrebbero richiedere licenze separate:

<table>
<thead>
<tr class="header">
<th><strong>Terminology</strong></th>
<th><strong>Owner/Contact</strong></th>
<th><strong>Links</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Varie codifiche (e.g. DUG, Professioni, unità territoriali, ...)</td>
<td>ISTAT</td>
<td><a href="https://www.istat.it/it/note-legali">https://www.istat.it/it/note-legali</a></td>
</tr>
<tr class="even">
<td>Varie Codifiche (e.g. esenzioni, codifica ASL e strutture di ricovero, …)</td>
<td>Ministero della Salute</td>
<td><a href="http://www.salute.gov.it/portale/p5_0.jsp?lingua=italiano&amp;id=50">http://www.salute.gov.it/portale/p5_0.jsp?lingua=italiano&amp;id=50</a></td>
</tr>
<tr class="odd">
<td>Autorizzazione Immissione in Commercio (AIC)</td>
<td>Agenzia italiana del farmaco (AIFA)</td>
<td><a href="https://www.aifa.gov.it/copyright">https://www.aifa.gov.it/copyright</a></td>
</tr>
<tr class="even">
<td>SNOMED CT®</td>
<td>SNOMED International</td>
<td><a href="http://www.snomed.org/snomed-ct/get-snomed-ct">http://www.snomed.org/snomed-ct/get-snomed-ct</a></td>
</tr>
<tr class="odd">
<td>SNOMED CT® Global Patient Set (GPS)</td>
<td>SNOMED International</td>
<td><a href="https://www.snomed.org/snomed-international/learn-more/global-patient-set">https://www.snomed.org/snomed-international/learn-more/global-patient-set</a></td>
</tr>
<tr class="even">
<td>Logical Observation Identifiers Names &amp; Codes (LOINC®)</td>
<td>Regenstrief Institute, Inc. and the LOINC Committee</td>
<td><a href="https://loinc.org/license/">https://loinc.org/license/</a></td>
</tr>
<tr class="odd">
<td>Unified Codes for Units of Measures (UCUM)</td>
<td>Regenstrief Institute, Inc. and the UCUM Organization</td>
<td><a href="http://unitsofmeasure.org/trac/wiki/TermsOfUse">http://unitsofmeasure.org/trac/wiki/TermsOfUse</a></td>
</tr>
<tr class="even">
<td>International Classification of Diseases (ICD) classification system</td>
<td>World Health Organization (WHO)</td>
<td><a href="https://www.who.int/publishing/copyright/en/">https://www.who.int/publishing/copyright/en/</a></td>
</tr>
<tr class="odd">
<td>Anatomical Therapeutic Chemical (ATC) classification system</td>
<td>World Health Organization (WHO) Collaborating Centre for Drug Statistics Methodology</td>
<td><a href="https://www.whocc.no/use_of_atc_ddd/">https://www.whocc.no/use_of_atc_ddd/</a></td>
</tr>
<tr class="even">
<td>EDQM Standard Terms</td>
<td>European Directorate for the Quality of Medicines</td>
<td><a href="https://www.edqm.eu/en/standard-terms-database">https://www.edqm.eu/en/standard-terms-database</a></td>
</tr>
<tr class="odd">
<td>ISO 3166 Country Code</td>
<td>International Organization for Standardization (ISO)</td>
<td><a href="https://www.iso.org/iso-3166-country-codes.html">https://www.iso.org/iso-3166-country-codes.html</a></td>
</tr>
<tr class="even">
<td>DICOM®</td>
<td>National Electrical Manufacturers Association (NEMA)</td>
<td><a href="https://www.nema.org/About/Pages/Terms-and-Conditions.aspx">https://www.nema.org/About/Pages/Terms-and-Conditions.aspx</a></td>
</tr>
<tr class="odd">
<td>BCP 47 Tags for Identifying Languages</td>
<td>IETF Trust and the persons identified as the document authors.</td>
<td><a href="http://trustee.ietf.org/license-info">http://trustee.ietf.org/license-info</a></td>
</tr>
<tr class="even">
<td>International Standard Classification of Occupations (ISCO)</td>
<td>International Labour Organization (ILO)</td>
<td><a href="http://www.ilo.org/global/copyright/lang--en/index.htm">http://www.ilo.org/global/copyright/lang–en/index.htm</a></td>
</tr>
</tbody>
</table>

HL7®, HEALTH LEVEL SEVEN®, FHIR® and the FHIR ® are trademarks owned by
Health Level Seven International, registered with the United States
Patent and Trademark Office.


---

File: repos/hl7-it_SLASH_lab-report/input/pagecontent/downloads.md

### IG Referto di Laboratorio completa

Download l'intera Implementation Guide [qui](full-ig.zip).

### NPM Package and Definitions

Il seguente file è comprensivo di tutti i valueSet, profili ed estensioni previsti dalla Implementation Guide del Referto di Laboratorio: 

- [NPM Package](package.tgz)

In aggiunta sono disponibili gli stessi nei rispettivi formati:

- [XML](definitions.xml.zip)
- [JSON](definitions.json.zip)
- [TTL](definitions.ttl.zip)

Questi file, contengono tutte le regole che descrivono la validità dei profili e possono essere utilizzati per validare ogni artefatto generato  dalla impementation guide del referto di laboratorio.

Inoltre, in funzione della versione FHIR (R4-R4B), vengono forniti i seguenti package:

#### R4 NPM Package and Definitions

- [R4 NPM Package](package.r4.tgz)

#### R4B NPM Package and Definitions

- [R4B NPM Package](package.r4b.tgz)

### Esempi

Tutti gli esempi utilizzati in questa Implementation Guide sono disponibili per il download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)
- [TTL](examples.ttl.zip)

### Global Profile Definitions
{% include globals-table.xhtml %}

---

File: repos/hl7-it_SLASH_lab-report/input/pagecontent/history.md

### Storico della Guida Implementativa Lab Report
Le seguenti versioni della guida sono state pubblicate. 

#### FHIR Implementation Guide Version 0.1
[Lab Report IG V0.1](https://build.fhir.org/ig/hl7-it/lab-report//index.html)

---

File: repos/hl7-it_SLASH_lab-report/input/pagecontent/index.md

### Scopo
L'obiettivo della seguente guida è quello di definire, secondo lo standard HL7 FHIR versione R4, le specifiche per l'implementazione dei profili che verranno utilizzati nel referto di medicina di laboratorio nel contesto italiano.   

### Definizione del Referto di Medicina di Laboratorio
Il referto di laboratorio appartiene al nucleo minimo dei documenti del Fascicolo Sanitario Elettronico.
Ai sensi dell'articolo 27, comma 1, lettera d), del  decreto n. 178 del 29 settembre 2015,  il referto di laboratorio e' il documento redatto dal medico di medicina di laboratorio. 
Il contenuto informativo del Referto di Laboratorio è disciplinato all'art.2 dal Decreto del 18 maggio 2022 del Ministero della Salute ([Decreto Contenuti](https://www.gazzettaufficiale.it/eli/id/2022/07/11/22A03960)). 

### Contesto
La guida intende fornire delle specifiche adeguate al contesto italiano secondo lo standard HL7 FHIR, per assicurare l’accuratezza dei risultati degli esami di laboratorio e la trasmissione degli stessi, al paziente o ad altra figura professionale, in modo chiaro e corretto.
Questa guida implementativa è stata creata per descrivere in modo più completo gli elementi standard necessari per supportare lo scambio sia semantico che sintattico di informazioni inerenti al referto di laboratorio e viene sviluppata considerando come soggetto la risorsa Patient. 

La guida può essere utilizzata  per descrivere i risultati di laboratorio nei settori chiave della diagnostica in vitro, come:
- biochimica clinica
- ematologia 
- medicina trasfusionale
- microbiologia 
- immunologia.

### Navigazione
Questa guida implementativa utilizza come metodo di pubblicazione i tool web-based offerti dallo standard FHIR. Ciò consente una facile navigazione tra le varie risorse, i data type, i set di valori e altri componenti offerti dallo standard FHIR. 
Questo approccio consente inoltre agli implementatori di accedere facilmente alle informazioni necessarie per lo sviluppo di sistemi di interoperabilità.

### Dipendenze
{% include dependency-table.xhtml %}

### Details
#### Cross-Version Analysis
{% include cross-version-analysis.xhtml %}

### Autori e contributori

<table>
<thead>
<tr class="header">
<th>Ruolo</th>
<th>Nome</th>
<th>Organizzazione</th>
<th>Contatto</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Autore</td>
<td>Leonardo Alcaro</td>
<td>HL7 Italia</td>
<td>leonardo.alcaro@teamdigitale.governo.it</td>
</tr>
<tr class="even">
<td>Autore</td>
<td>Mario Sicuranza</td>
<td>HL7 Italia</td>
<td>mario.sicuranza@icar.cnr.it</td>
</tr>
<tr class="odd">
<td>Autore</td>
<td>Davide Spanu</td>
<td>EY Advisory S.p.A.</td>
<td>davide.spanu@it.ey.com</td>
</tr>
<tr class="odd">
<td>Autore</td>
<td>Valeria Cesaro'</td>
<td>EY Advisory S.p.A.</td>
<td>valeria.cesaro@it.ey.com</td>
</tr>
<tr class="even">
<td>Autore</td>
<td>Maria Giovanna Antida Preziosi</td>
<td>SOGEI</td>
<td>mpreziosi@sogei.it</td>
</tr>
<tr class="odd">
<td>Contributore</td>
<td>Giorgio Cangioli</td>
<td>HL7 Italia</td>
<td>giorgio.cangioli@gmail.com</td>
</tr>
</tbody>
</table>

### Intellectual Property Statements
{% include ip-statements.xhtml %}

---

File: repos/hl7-it_SLASH_lab-report/input/pagecontent/methodology.md

### Approccio generale

Questa guida viene sviluppata seguendo un approccio **iterativo** ed
**incrementale**.

<table>
<tbody>
<tr class="odd">
<td><p><img src="method-1.png" style="width:6.33265in;height:3.44556in" /></p>
<p>Figura 1 - Approccio generale</p></td>
</tr>
</tbody>
</table>

1.  I **requisiti** funzionali sono raccolti, discussi e formalizzati
    come FHIR logical models (**Modelli Logici**)

2.  Il contenuto informativo dei modelli viene poi mappato su una
    rappresentazione fisica basata sullo standard HL7 FHIR, attraverso
    una serie di **profili** e **vocabolari** FHIR.

3.  Questi artefatti FHIR saranno quindi **preadottati** ed utilizzati
    in sessioni di prova (**-a-thon**), i cui risultati saranno usati
    per il miglioramento della qualità della guida stessa.

4.  Una volta consolidati gli artefatti saranno **pubblicati** nella
    loro forma finale, e **adottati** per implementazioni e/o per
    derivare altre guide.

5.  Le informazioni di ritorno provenienti dagli utilizzatori saranno
    infine usate per **manutenere** questi artefatti

### Ambienti di pubblicazione

La pubblicazione degli artefatti prodotti, incluso questa implementation
guide, avviene potenzialmente in tre ambienti diversi (Figura 2 -
Ambienti di pubblicazione):

1.  un ambiente di prova, denominato **sandbox**, in cui sono pubblicati
    i risultati delle prime prototipazioni, non necessariamente legate
    ad una specifica implementation guide. Quest’ambiente potrebbe non
    essere più usato durante la manutenzione di una specifica guida.

2.  un ambiente di sviluppo, **build**, in cui viene pubblicata l’ultima
    versione registrata in *GitHub*. Infine,

3.  un ambiente di rilascio (**produzione**) in cui sono pubblicate le
    versioni consolidate, tipicamente post-ballot.

<table>
<tbody>
<tr class="odd">
<td><blockquote>
<p><img src="method-2.png" style="width:3.78163in;height:2.82007in" /></p>
<p>Figura - Ambienti di pubblicazione</p>
</blockquote></td>
</tr>
</tbody>
</table>

### Ciclo di vita

Negli ambienti di sviluppo e di produzione sono pubblicati le guide nei
loro diversi “gradi di conformità”, e.g. Standard for Trial Use,
Normativa.

Figura 3 mostra un caratteristico ciclo di vita di una guida:

1.  In una prima fase prototipale gli artefatti sono condivisi nel
    sandbox senza alcuna precisa loro caratterizzazione.

2.  Quindi, a meno di non avere una guida di tipo informativo, viene
    preparata una prima pubblicazione come ***Standard for Trial Use**.*
    Tale stato indica una pubblicazione che ha passato varie fasi di
    review, ma che non ha ancora una sufficiente maturità per essere
    considerata definitiva. La maturità viene in questo caso misurata
    anche in termini di reali adozioni.

3.  Quando la guida ha raggiunto un sufficiente livello di maturità, a
    valle anche di eventi tipo -a-thon, viene pubblicata come guida
    ***Normativa.***

<table>
<tbody>
<tr class="odd">
<td><p><img src="method-3.png" style="width:6.11514in;height:1.73061in" /></p>
<p>Figura – Ciclo di vita e versioni di una guida</p></td>
</tr>
</tbody>
</table>

Indipendentemente dalla loro tipologia, le guide sono soggette ad un
processo di manutenzione e continuo aggiornamento, ogni versione
pubblicata è caratterizzata da una *versione esterna* (e.g. STU; STU2;
R1; R1.1) e da un *semantic version, cioè* da un numero di versione
interna (e.g. 0.0.1; 2.0.1). Per ogni versione esterna è possibile avere
più semantic version.

Una pubblicazione STU è sempre associata ad una specifica release,
nell’esempio della figura STU deve essere letto come Release 1, STU 1.

In presenza di una versione pubblicata come normativa (e.g. Rel. 1.2) è
possibile che una versione STU (e.g. Release 2, STU1) venga sviluppata
come evoluzione della precedente guida.


---

File: repos/hl7-it_SLASH_lab-report/input/pagecontent/modelliLogici.md

### Modello Logico
I modelli di dati logici rappresentano un modello di dati astratto, indipendentemente dalle risorse o dai tipi di dati FHIR o da qualsiasi implementazione tecnica. Sono elementi costitutivi che possono essere riutilizzati su altri modelli. Poiché sono disaccoppiati da qualsiasi implementazione tecnica, i modelli logici di dati costituiscono un aspetto fondamentale della progettazione dell'interoperabilità, supportando una comprensione stabile e comune delle esigenze dei dati.

I modelli di dati logici sono destinati agli utenti non tecnici per esprimere e convalidare i requisiti funzionali per lo scambio di informazioni, vedi [Modelli Logici](./artifacts.html#linee-guida-referto-di-laboratorio).

### Diagramma UML
Per mettere in evidenza il legame tra i profili della Implementation Guide del Referto di laboratorio derivati dai modelli logici sono riportate, tramite la rappresentazione class diagram, le referenze che legano le varie risorse.
Vengono inoltre specificati gli attributi obbligatori previsti all'interno delle singole risorse per il contesto del Referto di Laboratorio.

<p><img src="uml.png" style="width:14in;height:7in" /></p>

---

File: repos/hl7-it_SLASH_lab-report/input/pagecontent/scenario.md

<!-- Gli scenari previsti per il dominio di Referto di Laboratorio sono descritti di seguito utilizzando la rappresentazione tramite Sequence Diagram. 
I sequence diagram sono diagrammi UML che ci permettono di descrivere uno scenario. Lo scenario rappresenta una sequenza di azioni per una attività.

In questa sezione sono rappresentati i due scenari per la gestione del Referto di Laboratorio:
- *[Interazione con le risorse Singole](./scenario.html#overview-fhir-interazione-con-risorse-sigole)*
- *[Interazione col Documento](./scenario.html#overview-fhir-interazione-con-il-documento)*

### Overview FHIR Interazione con Risorse Sigole
Gli attori coinvolti nella trasmissione e consultazione delle Risorse Singole del Referto di Laboratorio sono il Sender, il Receiver (o Provider) e il Consumer.

<p>{%include scenarioRes.svg -%}</p>

In questo scenario si delineano i seguenti casi d'uso:
- Alimentazione Risorse Singole
- Aggiornamento Risorse Singole
- Consultazione Risorse Singole

I dettagli di ogni scenario sono descritti di seguito.
#### Alimentazione 

<p>{%include alimentazioneRES.svg -%}</p>

L'attore Sender alimenta il Receiver, attraverso il metodo POST, inviando le informazioni racchiuse nel Referto di Laboratorio in risorse FHIR. Le risorse profilate che è possibile trasmettere sono:
- DiagnosticReport
- Encounter
- ServiceRequest
- Observation 
- Specimen
- Media
- Patient
- Practitioner
- PractitionerRole
- Location
- Organization 

In questo scenario, il Sender invia un'unica risorsa FHIR chiamando il metodo: 

```
POST [base_url]/[Risorsa Singola]
```

Il Receiver processa la richiesta ottenuta e, se non riscontra errori, invia al Sender un messaggio di "OperationOutcome" positivo, creando la nuova istanza della Risorsa Singola inviata all'interno del Receiver. Se invece la pubblicazione fallisce, il Receiver invia al Sender un messaggio di "OperationOutcome" negativo, e il relativo codice di errore.

#### Consultazione Risorsa Singola

<p>{%include consultazioneRES.svg -%}</p>

Un attore Consumer può consultare una Risorsa singola all'interno del Receiver inviando una richiesta che può essere basata sui metodi GET o POST:

```
GET [base_url]/[Risorsa Singola]/?Parametro_di_ricerca1=valoreParametro1&Parametro_di_ricerca2=valoreParametro2&...
```
In questo scenario, i parametri di ricerca sono quello definiti dallo standard FHIR per ogni risorsa.

Il Receiver processa la richiesta ottenuta e, se non riscontra errori, restituisce una Bundle di tipo searchset contenente le risorse conformi ai parametri di ricerca specificati (vedi: *[Bundle searchset](https://hl7.org/fhir/R4/http.html#search)*). 

#### Aggiornamento FHIR Document Referto di Laboratorio

<p>{%include aggiornamentoRES.svg -%}</p>

L’attore Sender aggiorna il contenuto delle Risorse Singole inviando una richiesta al Receiver basata sul metodo PUT.

Per il corretto aggiornamento delle Risorse Singole, il Sender invia la seguente richiesta HTTP:

```
PUT [base_url]/[Risorsa Singola]/[Logical ID-Risorsa Singola]
```

Il Receiver processa la richiesta ottenuta e, se non riscontra errori, invia al Sender un messaggio di "OperationOutcome" positivo, aggiornando la Risorsa Singola  all'interno del server. Se invece la pubblicazione fallisce, il Receiver invia al Sender un messaggio di "OperationOutcome" negativo, e il relativo codice di errore.

### Overview FHIR Interazione con il Documento

Gli attori coinvolti nella trasmissione e consultazione del documento FHIR nativo Referto di Laboratorio sono il Sender, il Receiver (o Provider) e il Consumer.

<p>{%include scenarioDoc.svg -%}</p>

In questo scenario si delineano i seguenti casi d'uso:
- Alimentazione del documento
- Aggiornamento del documento
- Consultazione del documento

I dettagli di ogni scenario sono descritti di seguito.
#### Alimentazione 
Questa transazione è utilizzata per alimentare il repository.
<p>{%include alimentazioneDOC.svg -%}</p>

La creazione del documento è un attività del "document constructor", che per semplicità è incluso nell'attore Sender, è un applicazione. Il documento è creato instaurando una cooperazione tra "document constructor" e "autore" che devono assicurare l'accuratezza e la coerenza del documento lato machine readable e human readable. Prima di inviare il FHIR Document, il Sender deve assicurarsi la conformità ai profili delle risorse che vuole inviare e attestarla (vedi: *[Author/Constructor Obligations](https://www.hl7.org/fhir/documents.html#3.4.3.1)*). 

L’attore Sender alimenta il Receiver trasmettendo, utilizzando il metodo POST, la risorsa Bundle di type `document`. Le informazioni relative al Referto di Laboratorio sono contenute all'interno delle risorse Composition, DiagnosticReport, Observation, Specimen raccolte della risorsa Bundle per mezzo dell'elemento `Bundle.entry.resource`.

Per la corretta alimentazione del Receiver, il Sender invia la seguente richiesta HTTP:

```
POST [base_url]/Bundle
```
<span style="background-color: LightYellow;">Nota: [base_url] è valorizzato con l'indirizzo del Receiver.</span>


Il Receiver processa la richiesta ottenuta e, se non riscontra errori, invia al Sender un messaggio di "OperationOutcome" positivo, creando la nuova istanza della Bundle inviata all'interno del server. Se invece la pubblicazione fallisce, il Receiver invia al Sender un messaggio di "OperationOutcome" negativo, e il relativo codice di errore.
#### Consultazione FHIR Document Referto di Laboratorio

Questa transazione è utilizzata per consultare le risorse presenti nel repository. 
<p>{%include consultazioneDOC.svg -%}</p>

La consultazione della Bundle avviene tramite interrogazione dell'interfaccia FHIR predisposta dal server utilizzando il metodo GET o POST. Il formato della richiesta è strutturato nel seguente modo:

```
GET [base_url]/Bundle?Parametro_di_ricerca1=valoreParametro1&Parametro_di_ricerca2=valoreParametro2&...
```

Come riportato, é possibile esprimere in modo dettagliato una richiesta aggiungendo le coppie parametro di ricerca e valore parametro separate dall'operatore logico `&` (AND).  

Il Receiver processa la richiesta ottenuta e, se non riscontra errori, restituisce una Bundle di tipo searchset contenente le risorse conformi ai parametri di ricerca specificati (vedi: *[Bundle searchset](https://hl7.org/fhir/R4/http.html#search)*). 
#### Aggiornamento FHIR Document Referto di Laboratorio

Questa transazione è utilizzata per aggiornare le risorse presenti nel repository.
<p>{%include aggiornamentoDOC.svg -%}</p>

Nell'eventualità di errori che non rendono più affidabili le risorse della Bundle di tipo document, viene data la possibilità al Sender di aggiornare tali risorse. 
L'aggiornamento richiede la necessità di essere in possesso dell'id univoco della risorsa di tipo Bundle (vedi: *[Logical ID](https://www.hl7.org/fhir/resource.html#id)*).

Per il corretto aggiornamento delle risorse Bundle di tipo *document*, il Sender invia la seguente richiesta HTTP:

```
PUT [base_url]/Bundle/[Logical ID-Bundle]
```

Per evitare la perdita di dati, il processo di aggiornamento deve prevedere l'invio della risorsa Bundle aggiornata correttamente e la dismissione della versione precedente.
Una casistica di aggiornamento della Bundle document è l'aggiunta di risorse (APPEND) alla Bundle. 

Un'altra casistica è la creazione errata della risorsa Composition nel flusso di lavoro: ovvero se la Composition riguarda il paziente sbagliato o è scritta dall'autore sbagliato, e l'errore viene rilevato solo dopo che la Composition è stata consultata o è già stata utilizzata per la creazione di un documento. 
Per supportare la risoluzione di questo caso, la risorsa Composition è aggiornata per essere contrassegnata come "entered-in-error" e può essere creato un nuovo documento derivato. Ciò significa che l'intera serie di documenti derivati è ora considerata creata per errore e i sistemi che ricevono documenti derivati basati su Composition modificate DOVREBBERO rimuovere i dati presi dai documenti precedenti dall'uso di routine e/o intraprendere altre azioni appropriate. 

<span style="background-color: LightYellow;">Nota: Qualora il sender invii anche le risorse contenute nella Bundle in modo atomico, allora queste devono essere aggiornate conseguentemente all'aggiornamento della Bundle cui appartengono.</span>

Il Receiver processa la richiesta ottenuta e, se non riscontra errori, invia al Sender un messaggio di "OperationOutcome" positivo, creando la nuova istanza della Bundle inviata all'interno del server. Se invece la pubblicazione fallisce, il Receiver invia al Sender un messaggio di "OperationOutcome" negativo, e il relativo codice di errore.

#### Esempio di Creazione di una Bundle Document

Si riporta di seguito un esempio di creazione di Bundle document. Gli attori coinvolti nel processo di creazione sono:
- Placer: rappresenta la parte amministrativa;
- Filler: rappresenta la parte di prenotazione e raccolta del campione, ad esempio CUP;
- ApplicativoClinico: rappresenta l'applicativo responsabile di ottenere i risultati delle rilevazioni e creare le risorse Observation;
- ReportCreator: rappresenta l'applicativo in grado di creare report diagnostici;
- Sender: rappresenta l'applicativo che invia il documento al receiver;
- Receiver: rappresenta il server che conserva i Bundle di tipo document.

<p>{%include creazioneBundleDocument.svg -%}</p> -->

---

