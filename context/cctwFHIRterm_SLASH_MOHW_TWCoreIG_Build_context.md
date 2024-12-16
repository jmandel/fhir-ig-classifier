File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/datatype/codeableConcept.fsh

Profile: CodeableConceptTW
Parent: CodeableConcept
Id: CodeableConcept-tw
Title: "TW CodeableConcept"
Description: "此臺灣CodeableConcept Profile說明本IG如何進一步定義FHIR的CodeableConcept資料類型以呈現CodeableConcept  [[*FMM1*](http://build.fhir.org/versions.html#maturity)]"
* ^version = "0.3.2"
* coding only CodingTW
* coding MS
* text MS
* . ^short = "概念（Concept）— 參照一個專門術語或只是文字表述"
* id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* extension ^short = "擴充的資料項目"
* extension ^definition = "擴充的資料項目"
* coding ^short = "由專門術語系統（terminology system）定義的代碼"
* coding ^definition = "由專門術語系統（terminology system）所定義之代碼的參照"
* coding ^requirements = "允許代碼系統中的替代編碼，以及翻譯到其他編碼系統。"
* coding ^comment = "代碼可以在列舉清單（enumerations）或代碼清單（code lists）中非常隨意地定義，直至有非常正式的定義，例如：SNOMED CT—更多資訊見HL7 v3核心原則（Core Principles ）。編碼的排序是未定義的因而 **必須沒有（SHALL NOT）** 被用來推斷意義。一般來說，最多只有一個編碼值（coding values）會被標記為UserSelected = true。"
* text ^short = "概念的文字表示法"
* text ^definition = "輸入資料的使用者所見／所選／所說的人類可讀文字表述，和（或）其代表使用者的預期含義。"
* text ^requirements = "專門術語中的代碼並不總是能捕捉人類使用的細微差別的正確意義，或者根本就沒有合適的代碼；這些情況下，文字表述被用來捕捉來源的全部意義。"
* text ^comment = "很多時候，此文字表述與其中一個代碼的顯示名稱相同。"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/datatype/coding.fsh

Profile: CodingTW
Parent: Coding
Id: Coding-tw
Title: "TW Coding"
Description: "此臺灣Coding Profile說明本IG如何進一步定義FHIR的Coding資料類型以呈現Coding  [[*FMM1*](http://build.fhir.org/versions.html#maturity)]"
* ^version = "0.3.2"
* system MS
* code MS
* display MS
* . ^short = "由專門術語系統（terminology system）定義的代碼"
* . ^definition = "由專門術語系統（terminology system）所定義之代碼的參照"
* . ^comment = "代碼可以在列舉清單（enumerations）或代碼清單（code lists）中非常隨意地定義，直至有非常正式的定義，例如：SNOMED CT—更多資訊見HL7 v3核心原則（Core Principles ）。編碼的排序是未定義的因而 **必須沒有（SHALL NOT）** 被用來推斷意義。一般來說，最多只有一個編碼值（coding values）會被標記為UserSelected = true。"
* id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* id ^definition = "resource中資料項目的唯一ID（用於內部參照），這可以是任何不含空格的字串。"
* extension ^short = "擴充的資料項目"
* extension ^definition = "可用於表示不屬於此資料項目基本定義的附加資訊。為了擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。"
* extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何污名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* system ^short = "專門術語系統（terminology system）的識別"
* system ^definition = "定義代碼中符號意義的代碼系統識別"
* system ^requirements = "需要明確說明符號定義的來源"
* system ^comment = "URI可以是一個OID（urn:oid:...）或一個UUID（urn:uuid:...）；OID和UUID **必須（SHALL）** 參照HL7 OID註冊中心；否則，URI應該來自HL7的FHIR定義的特殊URI列表，或者它應該參照一些明確建立的系统定義。"
* version ^short = "系統的版本—如果相關的話"
* version ^definition = "選擇此代碼時使用的代碼系統版本；請注意，一個維護良好的代碼系統不需要版本報告，因為代碼的意義在不同系統版本中是一致的；然而，不能始終保證這點，當不能保證意義一致時， **必須（SHALL）** 將版本資訊也一併作交換。"
* version ^comment = "如果專門術語沒有明確定義應該使用什麼字串來識別代碼系統的版本，建議使用版本正式發布的日期（用FHIR日期格式表示）作為版本日期。"
* code ^short = "系統定義的語法之符號"
* code ^definition = "系統定義的語法之符號；符號可能是一個預先定義的代碼，也可能是代碼系統定義的語法中的表達式（如後組合配對／後組合式）。"
* code ^requirements = "需要參照系統中的一個特定代碼"
* display ^short = "由系統定義的表示法"
* display ^definition = "遵循系統的規則以呈現代碼含義的表示法"
* display ^requirements = "需要能為不了解此系統的讀者呈現可讀的代碼含義"
* userSelected ^short = "此編碼是否由使用者直接選擇？"
* userSelected ^definition = "表明此編碼是由使用者直接選擇，例如：從可用項目（代碼或顯示名稱）的清單中選擇。"
* userSelected ^requirements = "已被確定為一個臨床安全準則—此確切的系統／代碼對(code pair)是被明確選擇的，而不是由系統根據一些規則或是程式語言處理判斷。"
* userSelected ^comment = "在一系列備選方案中，直接選擇的代碼是新翻譯最合適的起點；關於「直接選擇」的確切意義，存在模糊不清之處，可能需要貿易夥伴的同意，以更完整澄清此資料項目的使用及其後果。"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/AllergyIntolerance-all-cat-example.fsh

Alias: $sct = http://snomed.info/sct

Instance: all-cat-example
InstanceOf: AllergyIntolerance
Usage: #example
* clinicalStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-verification#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* type = #allergy
* category = #environment
* criticality = #high
* code = http://snomed.info/sct#717234006 "Allergy to animal protein"
* code.text = "對貓毛過敏"
* patient = Reference(Patient/pat-example) "陳加玲"
* onsetDateTime = "2023-12-05T14:00:00+08:00"
* recordedDate = "2023-12-05T15:30:00+08:00"
* recorder = Reference(Practitioner/pra-dr-example) "王依昇"
* asserter = Reference(Practitioner/pra-nurse-example) "陳莉"
* lastOccurrence = "2023-12-05T15:30:00+08:00"
* note.text = "患者對貓毛過敏，可能導致打噴嚏、呼吸急促"
* reaction.manifestation = $sct#490008 "Upper respiratory tract hypersensitivity reaction"
* reaction.description = "打噴嚏、呼吸急促"
* reaction.severity = #mild
* reaction.exposureRoute = $sct#447694001 "Respiratory tract route"
* reaction.exposureRoute.text = "呼吸道途徑"
* reaction.note.text = "患者接觸貓毛後出現打噴嚏和呼吸急促，症狀於2023年12月5日下午3:30發作"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>貓毛過敏</b>
	</h3>
	<p>
		<b>臨床狀態</b>：Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical\">AllergyIntoleranceClinicalStatusCodes</a>#active) </span>
	</p>
    <p>
		<b>驗證狀態</b>：Confirmed <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification\">AllergyIntoleranceVerificationStatusCodes</a>#confirmed) </span>
	</p>
    <p>
		<b>根本原因或運作機制</b>：Allergy <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/allergy-intolerance-type\">AllergyIntoleranceType</a>#allergy) </span>
	</p>
    <p>
		<b>確定的物質的類別</b>：Environment <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/allergy-intolerance-category\">AllergyIntoleranceCategory</a>#environment) </span>
	</p>
    <p>
		<b>嚴重程度</b>：High Risk <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/allergy-intolerance-criticality\">AllergyIntoleranceCriticality</a>#high) </span>
	</p>
	<p>
		<b>過敏或不耐症的識別</b>：患者對貓毛過敏，可能導致打噴嚏、呼吸急促(Allergy to animal protein) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#717234006) </span>
	</p>
	<p>
		<b>過敏或不耐症被識別的時間</b>：2023-12-05T14:00:00
	</p>
	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
    <p>
		<b>紀錄者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
	<p>
        <b>被記錄的日期</b>：2023-12-05T15:30:00
	</p>
	<p>
		<b>關於過敏的資訊來源</b>：<a href=\"Practitioner-pra-nurse-example.html\">Practitioner/pra-nurse-example</a> \"陳莉\"
	</p>
	<p>
		<b>最後一次已知反應發生的日期與時間</b>：2023-12-05T15:30:00
	</p>

	
	<p><b>暴露於此過敏或不耐症物質的不良反應</b>：</p>
    <blockquote>
    <p><b>與此事件相關的臨床症狀/體徵</b>：Upper respiratory tract hypersensitivity reaction <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#490008) </span></p>
	<p><b>對整個過敏事件的描述</b>：打噴嚏、呼吸急促</p>
	<p><b>嚴重程度</b>：Mild <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/reaction-event-severity\">AllergyIntoleranceSeverity</a>#mild) </span></p>
	<p><b>如何接觸到該物質</b>：呼吸道途徑(Respiratory tract route) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#447694001) </span></p>
	<p><b>備註</b>：患者接觸貓毛後出現打噴嚏和呼吸急促，症狀於2023年12月5日下午3:30發作</p>
    </blockquote>

</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/AllergyIntolerance-all-medication-example.fsh

Alias: $sct = http://snomed.info/sct

Instance: all-medication-example
InstanceOf: TWCoreAllergyIntolerance
Usage: #example
* clinicalStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-verification#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* type = #allergy
* category = #medication
* criticality = #high
* code.coding = $sct#91936005 "Penicillin allergy"
* code.text = "青黴素過敏"
* patient = Reference(Patient/pat-example) "陳加玲"
* onsetDateTime = "2023-10-15T08:45:00Z"
* recordedDate = "2023-10-15T12:00:00Z"
* recorder = Reference(Practitioner/pra-dr-example) "王依昇"
* asserter = Reference(Practitioner/pra-nurse-example) "陳莉"
* lastOccurrence = "2023-10-15T12:00:00Z"
* note.text = "患者對青黴素過敏，可能導致呼吸急促、皮膚發紅"
* reaction.substance = $sct#6369005 "Medicinal product containing penicillin and acting as antibacterial agent (product)"
* reaction.substance.text = "青黴素"
* reaction.manifestation.coding = $sct#490008 "Upper respiratory tract hypersensitivity reaction"
* reaction.description = "呼吸急促、皮膚發紅"
* reaction.severity = #severe
* reaction.exposureRoute = $sct#26643006 "Oral use"
* reaction.exposureRoute.text = "口服"
* reaction.note.text = "患者在服用青黴素後出現呼吸急促和皮膚發紅，症狀於2023年10月15日中午12:00發作"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>藥物過敏</b>
	</h3>
	<p>
		<b>臨床狀態</b>：Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical\">AllergyIntoleranceClinicalStatusCodes</a>#active) </span>
	</p>
    <p>
		<b>驗證狀態</b>：Confirmed <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification\">AllergyIntoleranceVerificationStatusCodes</a>#confirmed) </span>
	</p>
    <p>
		<b>根本原因或運作機制</b>：Allergy <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/allergy-intolerance-type\">AllergyIntoleranceType</a>#allergy) </span>
	</p>
    <p>
		<b>確定的物質的類別</b>：Medication <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/allergy-intolerance-category\">AllergyIntoleranceCategory</a>#medication) </span>
	</p>
    <p>
		<b>嚴重程度</b>：High Risk <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/allergy-intolerance-criticality\">AllergyIntoleranceCriticality</a>#high) </span>
	</p>
	<p>
		<b>過敏或不耐症的識別</b>：青黴素過敏(Penicillin allergy) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#91936005) </span>
	</p>
	<p>
		<b>過敏或不耐症被識別的時間</b>：2023-10-15T08:45:00
	</p>
	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
    <p>
		<b>紀錄者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
	<p>
        <b>被記錄的日期</b>：2023-10-15T12:00:00
	</p>
	<p>
		<b>關於過敏的資訊來源</b>：<a href=\"Practitioner-pra-nurse-example.html\">Practitioner/pra-nurse-example</a> \"陳莉\"
	</p>
	<p>
		<b>最後一次已知反應發生的日期與時間</b>：2023-12-05T15:30:00
	</p>
    <p><b>過敏或不耐受物質的不良反應紀錄</b>：</p>
    <blockquote>
    <p><b>過敏產生的特定物質或醫藥產品</b>：青黴素(Medicinal product containing penicillin and acting as antibacterial agent (product)) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#6369005) </span></p>
    <p><b>與此事件相關的臨床症狀/體徵)</b>：Upper respiratory tract hypersensitivity reaction <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#490008) </span></p>
	<p><b>對整個過敏事件的描述</b>：呼吸急促、皮膚發紅</p>
	<p><b>嚴重程度</b>：Severe <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/reaction-event-severity\">AllergyIntoleranceSeverity</a>#severe) </span></p>
	<p><b>如何接觸到該物質</b>：口服(Oral use) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#26643006) </span></p>
	<p><b>備註</b>：患者在服用青黴素後出現呼吸急促和皮膚發紅，症狀於2023年10月15日中午12:00發作</p>
    </blockquote>
	
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/AllergyIntolerance-all-nut-example.fsh

Instance: all-nut-example
InstanceOf: TWCoreAllergyIntolerance
Usage: #example
* clinicalStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-verification#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* type = http://hl7.org/fhir/allergy-intolerance-type#allergy
* category = http://hl7.org/fhir/allergy-intolerance-category#food
* criticality = http://hl7.org/fhir/allergy-intolerance-criticality#high
* code.coding = http://snomed.info/sct#91934008 "Nut allergy"
* code.text = "堅果過敏"
* patient = Reference(Patient/pat-example) "陳加玲"
* onsetDateTime = "2023-09-03T10:15:00Z"
* recordedDate = "2023-09-03T14:30:00Z"
* recorder = Reference(Practitioner/pra-dr-example) "王依昇"
* asserter = Reference(Practitioner/pra-nurse-example) "陳莉"
* lastOccurrence = "2023-09-03T14:30:00Z"
* note.text = "患者對堅果與添加堅果的食品過敏，可能導致皮膚發癢、紅腫"
* reaction.substance = http://snomed.info/sct#3193000 "alpha-1,4-Glucan-protein synthase (uridine diphosphate-forming)"
* reaction.substance.text = "alpha-1,4-Glucan-protein synthase (uridine diphosphate-forming)"
* reaction.manifestation.coding = http://snomed.info/sct#39579001	"Anaphylaxis (disorder)"
* reaction.description = "皮膚發癢、紅腫"
* reaction.severity = #severe
* reaction.exposureRoute = http://snomed.info/sct#26643006 "Oral use"
* reaction.exposureRoute.text = "口服"
* reaction.note.text = "患者在食用堅果後出現皮膚發癢和紅腫，症狀於2023年9月3日下午2:30發作"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>堅果過敏</b>
	</h3>
	<p>
		<b>臨床狀態</b>：Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical\">AllergyIntoleranceClinicalStatusCodes</a>#active) </span>
	</p>
    <p>
		<b>驗證狀態</b>：Confirmed <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification\">AllergyIntoleranceVerificationStatusCodes</a>#confirmed) </span>
	</p>
    <p>
		<b>根本原因或運作機制</b>：Allergy <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/allergy-intolerance-type\">AllergyIntoleranceType</a>#allergy) </span>
	</p>
    <p>
		<b>確定的物質的類別</b>：Food <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/allergy-intolerance-category\">AllergyIntoleranceCategory</a>#food) </span>
	</p>
    <p>
		<b>嚴重程度</b>：High Risk <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/allergy-intolerance-criticality\">AllergyIntoleranceCriticality</a>#high) </span>
	</p>
	<p>
		<b>過敏或不耐症的識別</b>：堅果過敏(Nut allergy) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#91934008) </span>
	</p>
    <p>
		<b>過敏或不耐症被識別的時間</b>：2023-09-03T10:15:00
	</p>
	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
    <p>
		<b>紀錄者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>    
	<p>
        <b>被記錄的日期</b>：2023-09-03T14:30:00
	</p>
    <p>
		<b>關於過敏的資訊來源</b>：<a href=\"Practitioner-pra-nurse-example.html\">Practitioner/pra-nurse-example</a> \"陳莉\"
	</p>
	<p>
		<b>最後一次已知反應發生的日期與時間</b>：2023-09-03T14:30:00
	</p>
    <p><b>暴露於此過敏或不耐症物質的不良反應</b>：</p>
    <blockquote>
    <p><b>過敏產生的特定物質或醫藥產品</b>：alpha-1,4-Glucan-protein synthase (uridine diphosphate-forming)(Medicinal product containing penicillin and acting as antibacterial agent (product)) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#3193000) </span></p>
    <p><b>與此事件相關的臨床症狀/體徵</b>：Anaphylaxis (disorder))<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#39579001) </span></p>
	<p><b>對整個過敏事件的描述</b>：皮膚發癢、紅腫</p>
	<p><b>嚴重程度</b>：Severe <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/reaction-event-severity\">AllergyIntoleranceSeverity</a>#severe) </span></p>
	<p><b>如何接觸到該物質</b>：口服(Oral use) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#26643006) </span></p>
    <p><b>備註</b>：患者在食用堅果後出現皮膚發癢和紅腫，症狀於2023年9月3日下午2:30發作</p>
    </blockquote>
    
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/AllergyIntolerance-all-seafood-example.fsh

Alias: $sct = http://snomed.info/sct

Instance: all-seafood-example
InstanceOf: TWCoreAllergyIntolerance
Usage: #example
* clinicalStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-verification#confirmed "Confirmed"
* verificationStatus.text = "Confirmed"
* type = #allergy
* category = #food
* criticality = #high
* code.coding = $sct#91937001 "Seafood allergy"
* code.text = "海鮮過敏"
* patient = Reference(Patient/pat-example) "陳加玲"
* onsetDateTime = "2023-02-10T18:45:00Z"
* recordedDate = "2023-02-11T10:00:00Z"
* recorder = Reference(Practitioner/pra-dr-example) "王依昇"
* asserter = Reference(Practitioner/pra-nurse-example) "陳莉"
* lastOccurrence = "2024-02-11T10:00:00Z"
* note.text = "患者對海鮮過敏，可能導致皮膚發癢、呼吸急促"
* reaction.substance = $sct#44027008 "Seafood"
* reaction.substance.text = "海鮮"
* reaction.manifestation.coding = $sct#490008 "Upper respiratory tract hypersensitivity reaction"
* reaction.description = "皮膚發癢、呼吸急促"
* reaction.severity = #severe
* reaction.exposureRoute = $sct#26643006 "Oral use"
* reaction.exposureRoute.text = "口服"
* reaction.note.text = "患者食用海鮮後出現皮膚發癢和呼吸急促，症狀於2023年2月11日上午10:00發作"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>海鮮過敏</b>
	</h3>
	<p>
		<b>臨床狀態</b>：Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical\">AllergyIntoleranceClinicalStatusCodes</a>#active) </span>
	</p>
    <p>
		<b>驗證狀態</b>：Confirmed <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/allergyintolerance-verification\">AllergyIntoleranceVerificationStatusCodes</a>#confirmed) </span>
	</p>
    <p>
		<b>根本原因或運作機制</b>：Allergy <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/allergy-intolerance-type\">AllergyIntoleranceType</a>#allergy) </span>
	</p>
    <p>
		<b>確定的物質的類別</b>：Food <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/allergy-intolerance-category\">AllergyIntoleranceCategory</a>#food) </span>
	</p>
    <p>
		<b>嚴重程度</b>：High Risk <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/allergy-intolerance-criticality\">AllergyIntoleranceCriticality</a>#high) </span>
	</p>
	<p>
		<b>過敏或不耐症的識別</b>：海鮮過敏(Seafood allergy) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#91937001) </span>
	</p>
    <p>
		<b>過敏或不耐症被識別的時間</b>：2023-02-10T18:45:00
	</p>
	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
    <p>
		<b>紀錄者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
	<p>
        <b>被記錄的日期</b>：2023-02-11T10:00:00
	</p>
	<p>
		<b>關於過敏的資訊來源</b>：<a href=\"Practitioner-pra-nurse-example.html\">Practitioner/pra-nurse-example</a> \"陳莉\"
	</p>
	<p>
		<b>最後一次已知反應發生的日期與時間</b>：2023-09-03T14:30:00
	</p>
    <p><b>暴露於此過敏或不耐症物質的不良反應</b>：</p>
    <blockquote>
    <p><b>過敏產生的特定物質或醫藥產品</b>：海鮮(Seafood)<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#44027008) </span></p>
	<p><b>與此事件相關的臨床症狀/體徵</b>：Upper respiratory tract hypersensitivity reaction <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#490008) </span></p>
	<p><b>對整個過敏事件的描述</b>：皮膚發癢、呼吸急促</p>
	<p><b>嚴重程度</b>：Severe <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/reaction-event-severity\">AllergyIntoleranceSeverity</a>#severe) </span></p>
	<p><b>如何接觸到該物質</b>：口服(Oral use) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#26643006) </span></p>
    <p><b>備註</b>：患者食用海鮮後出現皮膚發癢和呼吸急促，症狀於2023年2月11日上午10:00發作</p>
    </blockquote>
    
</div>"


---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Bundle-bun-document-example.fsh

Instance: bun-document-example
InstanceOf: TWCoreBundleDocument
Usage: #example
* identifier.system = "https://www.tph.mohw.gov.tw"
* identifier.value = "01010905170415100000000"
* type = http://hl7.org/fhir/bundle-type#document 
* timestamp = "2023-11-18T12:34:56.000Z"

* entry[0].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/Composition/com-example"
* entry[0].resource = com-example

* entry[1].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/Practitioner/pra-dr-example"
* entry[1].resource = pra-dr-example

* entry[2].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/Patient/pat-example"
* entry[2].resource = pat-example

* entry[3].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/Observation/obs-lab-example"
* entry[3].resource = obs-lab-example

* entry[4].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/Observation/obs-bloodPressure-example"
* entry[4].resource = obs-bloodPressure-example

* entry[5].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/Organization/org-hosp-example"
* entry[5].resource = org-hosp-example

* entry[6].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/MedicationRequest/med-req-cod-example"
* entry[6].resource = med-req-cod-example

* entry[7].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/Encounter/enc-example"
* entry[7].resource = enc-example

* entry[8].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/Location/loc-ent-example"
* entry[8].resource = loc-ent-example

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Bundle-bun-document-uuid-example.fsh

Instance: bun-document-uuid-example
InstanceOf: TWCoreBundleDocument
Usage: #example
* identifier.system = "https://www.mohw.gov.tw/"
* identifier.value = "urn:uuid:d8b288cc-7a2b-4c30-b878-300d4ddd0ac0"
* type = http://hl7.org/fhir/bundle-type#document 
* timestamp = "2024-05-18T12:34:56.000Z"

* entry[0].fullUrl = "urn:uuid:110860b4-9ab4-4595-9f03-7dca4c1021f8"
* entry[0].resource = Inline-Composition-example

* entry[1].fullUrl = "urn:uuid:0511b38b-2841-473c-9843-4d04c0c9c30e"
* entry[1].resource = Inline-Practitioner-example

* entry[2].fullUrl = "urn:uuid:38bc075a-2e1d-4f8c-b623-4d15770d9844"
* entry[2].resource = Inline-Patient-example

* entry[3].fullUrl = "urn:uuid:6b744ffd-c264-4353-89ae-e9df7132536e"
* entry[3].resource = Inline-Observation-example

* entry[4].fullUrl = "urn:uuid:e874d417-c6e5-4872-8dd7-62e6c5a9d08e"
* entry[4].resource = Inline-ObservationBloodPressure-example

* entry[5].fullUrl = "urn:uuid:c89f7cb5-8755-4848-b96a-a9fa34120588"
* entry[5].resource = Inline-Organization-example

* entry[6].fullUrl = "urn:uuid:7127fcd8-c858-4824-802b-51e0d472c6d2"
* entry[6].resource = Inline-MedicationRequest-example

* entry[7].fullUrl = "urn:uuid:bde4b381-a715-4a2e-a95a-abb52407aba1"
* entry[7].resource = Inline-Encounter-example

* entry[8].fullUrl = "urn:uuid:347ae3ea-82f3-41c8-9c95-88519f50a7c9"
* entry[8].resource = Inline-Location-example


Instance: Inline-Patient-example
InstanceOf: TWCorePatient
Usage: #inline
* identifier[idCardNumber].use = #official
//* identifier[idCardNumber].type.coding.system = "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/v2-0203"
* identifier[idCardNumber].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[idCardNumber].type.coding.code = #NNxxx
* identifier[idCardNumber].type.coding.code.extension.url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/identifier-suffix"
* identifier[idCardNumber].type.coding.code.extension.extension[0].url = "suffix"
* identifier[idCardNumber].type.coding.code.extension.extension[=].valueString = "TWN"
* identifier[idCardNumber].type.coding.code.extension.extension[+].url = "valueSet"
* identifier[idCardNumber].type.coding.code.extension.extension[=].valueCanonical = "http://hl7.org/fhir/ValueSet/iso3166-1-3"
* identifier[idCardNumber].system = "http://www.moi.gov.tw"
* identifier[idCardNumber].value = "A123456789"
* identifier[medicalRecord].use = #official
* identifier[medicalRecord].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[medicalRecord].type.coding.code = #MR
* identifier[medicalRecord].system = "https://www.tph.mohw.gov.tw"
* identifier[medicalRecord].value = "8862168"
* active = true
* name.use = #official
* name.family = "Chen"
* name.given = "Chia Lin"
* name.text = "陳加玲"
* telecom.system = #phone
* telecom.value = "0911327999"
* telecom.use = #mobile
* telecom.period.start = "2022-07-31"
* telecom.period.end = "2024-07-31"
* gender = #female
* birthDate = "1990-01-01"
* extension[0].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/person-age"
//* extension[=].valueInteger = 32
* extension[=].valueAge.value = 32
* extension[=].valueAge.system = "http://unitsofmeasure.org"
* extension[=].valueAge.code = #a
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/patient-nationality"
* extension[=].extension.url = "code"
* extension[=].extension.valueCodeableConcept = urn:iso:std:iso:3166#TW
* address.country = "TW"
* address.district = "大同區"
* address.city = "臺北市"
* address.line = "承德路"
* address.extension[0].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-section"
* address.extension[=].valueString = "三段"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-number"
* address.extension[=].valueString = "210號"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-village"
* address.extension[=].valueString = "大有里"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-neighborhood"
* address.extension[=].valueString = "19鄰"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-lane"
* address.extension[=].valueString = "52巷"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-alley"
* address.extension[=].valueString = "6弄"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-floor"
* address.extension[=].valueString = "2樓"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-room"
* address.extension[=].valueString = "B室"
* address.text = "臺北市大同區大有里19鄰承德路三段52巷6弄210號2樓B室"
* address.postalCode.extension.url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-postal-code"
* address.postalCode.extension.valueCodeableConcept.coding.system = "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/postal-code3-tw"
* address.postalCode.extension.valueCodeableConcept.coding.code = #103
* maritalStatus.coding.system = "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
* maritalStatus.coding.code = #U
* photo.contentType = #image/png
* photo.data = "R0lGODlhEwARAPcAAAAAAAAA/+9aAO+1AP/WAP/eAP/eCP/eEP/eGP/nAP/nCP/nEP/nIf/nKf/nUv/nWv/vAP/vCP/vEP/vGP/vIf/vKf/vMf/vOf/vWv/vY//va//vjP/3c//3lP/3nP//tf//vf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEAAAEALAAAAAATABEAAAi+AAMIDDCgYMGBCBMSvMCQ4QCFCQcwDBGCA4cLDyEGECDxAoAQHjxwyKhQAMeGIUOSJJjRpIAGDS5wCDly4AALFlYOgHlBwwOSNydM0AmzwYGjBi8IHWoTgQYORg8QIGDAwAKhESI8HIDgwQaRDI1WXXAhK9MBBzZ8/XDxQoUFZC9IiCBh6wEHGz6IbNuwQoSpWxEgyLCXL8O/gAnylNlW6AUEBRIL7Og3KwQIiCXb9HsZQoIEUzUjNEiaNMKAAAA7"
* photo.url = "patient.png"
* contact.relationship.coding.system = "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
* contact.relationship.coding.code = #FTH
* contact.name.use = #official
* contact.name.family = "Li"
* contact.name.given = "Li Wei"
* contact.name.text = "李立偉"
* contact.telecom.system = #phone
* contact.telecom.value = "0917159753"
* contact.telecom.use = #mobile
* contact.telecom.period.start = "2022-07-31"
* contact.telecom.period.end = "2024-07-31"
* communication.language = urn:ietf:bcp:47#zh-TW
* managingOrganization = Reference(urn:uuid:c89f7cb5-8755-4848-b96a-a9fa34120588)
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>病人基本資料-身分證字號</b>
	</h3>
	<blockquote>
		<p>
			<b>識別碼型別</b>：National Person Identifier <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#NNxxx <b>[extension: <a href=\"StructureDefinition-identifier-suffix.html\">Identifier Suffix</a>]：</b>TWN） </span>
			<br />
			<b>身分證字號（official）</b>：A123456789 （http://www.moi.gov.tw）
		</p>
	</blockquote>
	<blockquote>
		<p>
			<b>識別碼型別</b>：Medical record number <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#MR） </span>
			<br />
			<b>病歷號（official）</b>：8862168 （https://www.tph.mohw.gov.tw）
		</p>
	</blockquote>
	<p>
		<b>病人的紀錄（active）</b>：使用中
	</p>
	<p>
		<b>姓名（official）</b>：陳加玲 Chan, Chia Lin
	</p>
	<p>
		<b>性別</b>：女性
	</p>
	<p>
		<b>出生日期</b>：1990-01-01
	</p>
	<p>
		<b>年齡[extension: <a href=\"StructureDefinition-person-age.html\">person-age</a>]</b>：32
	</p>
	<p>
		<b>國籍[extension: <a href=\"http://hl7.org/fhir/StructureDefinition/patient-nationality\">patient-nationality</a>]</b>：<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://terminology.hl7.org/CodeSystem-ISO3166Part1.html\">ISO3166Part1</a>#TW） </span>
	</p>
	<p>
		<b>聯絡方式</b>：Phone <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span>
		<br />
		<b>聯絡電話</b>：（Mobile）0911327999 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://build.fhir.org/codesystem-contact-point-use.html\">ContactPointUse</a>#mobile） </span>
		<br />
		<b>聯絡電話使用效期</b>：2022-07-31至2024-07-31
	</p>
	<p>
		<b>聯絡地址</b>：(103)臺北市大同區大有里19鄰承德路三段52巷6弄210號2樓B室<br />
		<b>  郵遞區號（postalCode） [extension: <a href=\"StructureDefinition-tw-postal-code.html\">tw-postal-code</a>] </b>： <a href=\"CodeSystem-postal-code3-tw.html\">103</a> <br />
		<b>  縣/市（city）</b>：臺北市 <br />
		<b>  鄉/鎮/市/區（district）</b>：大同區 <br />
		<b>  村(里)（village） [extension: <a href=\"StructureDefinition-tw-village.html\">tw-village</a>] </b>：大有里 <br />
		<b>  鄰（neighborhood） [extension: <a href=\"StructureDefinition-tw-neighborhood.html\">tw-neighborhood</a>] </b>：19鄰 <br />
		<b>  路/街（line）</b>：承德路 <br />
		<b>  段(section) [extension: <a href=\"StructureDefinition-tw-section.html\">tw-section</a>] </b>：三段 <br />
		<b>  巷/衖（lane） [extension: <a href=\"StructureDefinition-tw-lane.html\">tw-lane</a>] </b>：52巷 <br />
		<b>  弄（alley） [extension: <a href=\"StructureDefinition-tw-alley.html\">tw-alley</a>] </b>：6弄 <br />
		<b>  號（number） [extension: <a href=\"StructureDefinition-tw-number.html\">tw-number</a>] </b>：210號 <br />
		<b>  樓（floor） [extension: <a href=\"StructureDefinition-tw-floor.html\">tw-floor</a>] </b>：2樓 <br />
		<b>  室（room） [extension: <a href=\"StructureDefinition-tw-room.html\">tw-room</a>] </b>：B室 <br />
		<b>  國家（country）</b>：臺灣 <br />
		<br />
	</p>
	<p>
		<b>婚姻狀態</b>：unmarried <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v3-MaritalStatus\">臺灣婚姻狀態值集</a>#U） </span>
	</p>
	<p>
		<b>聯絡人（official）</b>：李立偉 Li, Li Wei <br />
		<b>  關係</b>：father <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v3-RoleCode\">PatientRelationshipType</a>#FTH） </span>
		<br />
		<b>  聯絡方式</b>：Phone <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span>
		<br />
		<b>  聯絡電話</b>：（Mobile）0917159753 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://build.fhir.org/codesystem-contact-point-use.html\">ContactPointUse</a>#mobile） </span>
		<br />
		<b>  聯絡電話使用效期</b>：2022-07-31至2024-07-31
	</p>
	<p>
		<b>向病人說明健康狀態時所使用的語言</b>：中文
	</p>
	<p>
		<b>紀錄的保管機構</b>： <a href=\"Bundle-bun-document-uuid-example.html#urn-uuid-c89f7cb5-8755-4848-b96a-a9fa34120588\">Organization Inline-Organization-example</a> \"衛生福利部臺北醫院\"
	</p>
	<p>
		<b>病人影像</b>： <a href=\"https://2.bp.blogspot.com/-v3yEwItkXKQ/VaMN_1Nx6TI/AAAAAAAAvhM/zDXN_eZw_UE/s800/youngwoman_42.png\">patient.png</a>
		<br />
		<img src=\"https://2.bp.blogspot.com/-v3yEwItkXKQ/VaMN_1Nx6TI/AAAAAAAAvhM/zDXN_eZw_UE/s800/youngwoman_42.png\" width=\"250px\" />
	</p>
</div>"

Instance: Inline-Organization-example
InstanceOf: TWCoreOrganization
Usage: #inline
* identifier.use = #official
* identifier.system = "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/organization-identifier-tw"
* identifier.value = "0131060029"
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#PRN
* type = http://terminology.hl7.org/CodeSystem/organization-type#prov
* name = "衛生福利部臺北醫院"
* telecom.system = #phone
* telecom.value = "0222765566"


Instance: Inline-Practitioner-example
InstanceOf: TWCorePractitioner
Usage: #inline
* name.use = #official
* name.family = "Wang"
* name.given = "Yi Sheng"
* name.text = "王依昇"
* identifier[idCardNumber].use = #official
* identifier[idCardNumber].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[idCardNumber].type.coding.code = #NNxxx
* identifier[idCardNumber].system = "http://www.moi.gov.tw"
* identifier[idCardNumber].value = "D123456789"
* identifier[medicalLicenseNumber].use = #official
* identifier[medicalLicenseNumber].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[medicalLicenseNumber].type.coding.code = #MD
* identifier[medicalLicenseNumber].value = "KP00017"
* identifier[medicalLicenseNumber].system = "https://www.tph.mohw.gov.tw"
* active = true
* gender = #male
* birthDate = "1980-11-11"
* telecom.system = #phone
* telecom.value = "0993277826"
* telecom.use = #mobile
* telecom.period.start = "2022-07-31"
* telecom.period.end = "2024-07-31"
* address.country = "TW"
* address.district = "桃園市"
* address.city = "桃園區"
* address.line = "五福五街"
* address.extension[0].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-number"
* address.extension[=].valueString = "31號"
* address.text = "桃園市桃園區五福五街31號"
* address.postalCode.extension.url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-postal-code"
* address.postalCode.extension.valueCodeableConcept.coding.system = "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/postal-code3-tw"
* address.postalCode.extension.valueCodeableConcept.coding.code = #330
* photo.contentType = #image/png
* photo.data = "TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4="
* photo.url = "doctor.png"
* qualification.code = http://snomed.info/sct#394802001 "General medicine"
* qualification.period.start = "2005-05-25"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <h3>
    <b>醫師基本資料</b>
  </h3>
	<blockquote>
		<p>
			<b>識別碼型別</b>：National Person Identifier <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#NNxxx） </span>
			<br />
			<b>身分證字號（official）</b>：D123456789 （http://www.moi.gov.tw）
		</p>
	</blockquote>
	<blockquote>
  <p>
    <b>識別碼型別</b>：Medical License number <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#MD） </span><br/>
    <b>員工編號（official）</b>：KP00017 （https://www.tph.mohw.gov.tw）
  </p>
	</blockquote>
  <p>
    <b>健康照護服務提供者的紀錄（active）</b>：使用中
  </p>
  <p>
    <b>姓名（official）</b>：王依昇 Wang, Yi Sheng
  </p>
  <p>
    <b>性別</b>：男性
  </p>
  <p>
    <b>出生日期</b>：1980-11-11
  </p>
  <p>
    <b>聯絡方式</b>：Phone<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span><br/>
    <b>聯絡電話</b>：（Mobile）0993277826<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://build.fhir.org/codesystem-contact-point-use.html\">ContactPointUse</a>#mobile） </span><br/>
    <b>聯絡電話使用效期</b>：2022-07-31至2024-07-31
  </p>
  <p>
    <b>聯絡地址</b>：(330)桃園市桃園區五福五街31號 <br />
    <b>  郵遞區號（postalCode）[extension: <a href=\"StructureDefinition-tw-postal-code.html\">tw-postal-code</a>]</b>：<a href=\"CodeSystem-postal-code3-tw.html\">330</a>
    <br />
    <b>  縣/市（district）</b>：桃園市 <br />
    <b>  鄉/鎮/市/區（city）</b>：桃園區 <br />
    <b>  路/街（line）</b>：五福五街 <br />
    <b>  號（number）[extension: <a href=\"StructureDefinition-tw-number.html\">tw-number</a>]</b>：31號 <br />
    <b>  國家（country）</b>：臺灣 <br />
  </p>
  <p>
     <b>資格證書的型別</b>：西醫師 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://snomed.info/sct\">SNOMED CT</a>#394802001） </span><br/>
     <b>資格證書的開始日期</b>：2005-05-25
  </p>
  <p>
    <b>照護服務提供人員影像</b>： <a href=\"https://1.bp.blogspot.com/-6dSaKA-5r0c/UZSs9HLyutI/AAAAAAAATBc/lxpq2MB3_mc/s400/doctor.png\">doctor.png</a>
    <br />
    <img src=\"https://1.bp.blogspot.com/-6dSaKA-5r0c/UZSs9HLyutI/AAAAAAAATBc/lxpq2MB3_mc/s400/doctor.png\" width=\"250px\" />
  </p>
</div>"

Instance: Inline-Composition-example
InstanceOf: TWCoreComposition
Usage: #inline
* status = http://hl7.org/fhir/composition-status#final
* type = http://loinc.org#11503-0 "Medical records"
* category = http://loinc.org#47039-3
* subject = Reference(urn:uuid:38bc075a-2e1d-4f8c-b623-4d15770d9844)
* date = "2023-09-10T10:30:00Z"
* author = Reference(urn:uuid:0511b38b-2841-473c-9843-4d04c0c9c30e)
* title = "陳加玲的病摘"
* confidentiality = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R "restricted"
* attester.mode = http://hl7.org/fhir/composition-attestation-mode#personal "Personal"
* attester.time = "2023-09-10T11:00:00Z"
* attester.party = Reference(urn:uuid:0511b38b-2841-473c-9843-4d04c0c9c30e)
* custodian = Reference(urn:uuid:c89f7cb5-8755-4848-b96a-a9fa34120588)
* event.code = http://terminology.hl7.org/CodeSystem/v3-ActCode#MEDLIST "medication list"
* event.period.start = "2023-09-10T08:00:00Z"
* event.period.end = "2023-09-15T09:30:00Z"
* section.entry[0] = Reference(urn:uuid:0511b38b-2841-473c-9843-4d04c0c9c30e)
* section.entry[1] = Reference(urn:uuid:e874d417-c6e5-4872-8dd7-62e6c5a9d08e)
* section.entry[2] = Reference(urn:uuid:7127fcd8-c858-4824-802b-51e0d472c6d2)


Instance: Inline-Observation-example
InstanceOf: TWCoreObservationLaboratoryResult
Usage: #inline
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#laboratory
* code = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medical-service-payment-tw#09002C
* code.text = "血中尿素氮"
* subject = Reference(urn:uuid:38bc075a-2e1d-4f8c-b623-4d15770d9844)
* effectiveDateTime = "2022-07-31"
* performer = Reference(urn:uuid:c89f7cb5-8755-4848-b96a-a9fa34120588)
* valueQuantity.value = 16.6
* valueQuantity.unit = "mg/dL"


Instance: Inline-ObservationBloodPressure-example
InstanceOf: TWCoreObservationBloodPressure
Usage: #inline
* status = #final
* category[VSCat] = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs "Vital Signs"
* code = http://loinc.org#85354-9 "Blood pressure panel with all children optional"
* code.text = "Blood pressure panel with all children optional"
* subject = Reference(urn:uuid:38bc075a-2e1d-4f8c-b623-4d15770d9844)
* effectiveDateTime = "2022-07-31"
* performer = Reference(urn:uuid:0511b38b-2841-473c-9843-4d04c0c9c30e)
* component[SystolicBP].code = http://loinc.org#8480-6 "Systolic blood pressure"
* component[SystolicBP].valueQuantity = 110 'mm[Hg]' "mmHg"
* component[DiastolicBP].code = http://loinc.org#8462-4 "Diastolic blood pressure"
* component[DiastolicBP].valueQuantity = 56 'mm[Hg]' "mmHg"


Instance: Inline-MedicationRequest-example
InstanceOf: TWCoreMedicationRequest
Usage: #inline
* identifier.system = "http://www.moi.gov.tw"
* identifier.value = "7077"
* status = #active
* statusReason = http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason#clarif
* intent = #order
* category = http://terminology.hl7.org/CodeSystem/medicationrequest-category#discharge
* medicationCodeableConcept = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-fda-tw#衛署藥輸字第025485號 "阿立批挫"
* medicationCodeableConcept.text = "阿立批挫"
* subject = Reference(urn:uuid:38bc075a-2e1d-4f8c-b623-4d15770d9844)
* encounter = Reference(urn:uuid:bde4b381-a715-4a2e-a95a-abb52407aba1)
* authoredOn = "2022-08-01T18:00:14+08:00"
* requester = Reference(urn:uuid:0511b38b-2841-473c-9843-4d04c0c9c30e)
* reasonReference = Reference(urn:uuid:6b744ffd-c264-4353-89ae-e9df7132536e)
* dosageInstruction.timing.code = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-frequency-nhi-tw#PC
* dosageInstruction.timing.code.text = "三餐飯後"
* dosageInstruction.text = "三餐飯後，口服"
* dosageInstruction.route.coding = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-path-tw#PO
* dosageInstruction.doseAndRate.type = http://terminology.hl7.org/CodeSystem/dose-rate-type#ordered
* dispenseRequest.validityPeriod.start = "2022-08-01T18:00:14+08:00"
* dispenseRequest.validityPeriod.end = "2022-08-08T18:00:14+08:00"

Instance: Inline-Encounter-example
InstanceOf: TWCoreEncounter
Usage: #inline
* identifier.system = "http://healthcare.example.org/identifiers/enocunter"
* identifier.value = "E22081702"
* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#PRENC
* type = http://terminology.hl7.org/CodeSystem/encounter-type#ADMS
* serviceType = http://snomed.info/sct#394589003 "Nephrology"
* serviceType.text = "腎臟內科"
* subject = Reference(urn:uuid:38bc075a-2e1d-4f8c-b623-4d15770d9844)
* participant.type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#PPRF
* participant.period.start = "2022-08-01T17:00:14+08:00"
* participant.period.end = "2022-08-01T18:00:14+08:00"
* participant.individual = Reference(urn:uuid:0511b38b-2841-473c-9843-4d04c0c9c30e)
* period.start = "2022-08-01T17:00:14+08:00"
* period.end = "2022-08-01T18:00:14+08:00"
* reasonCode = http://snomed.info/sct#160303001 "FH: Diabetes mellitus"
* hospitalization.dischargeDisposition = http://terminology.hl7.org/CodeSystem/discharge-disposition#home
* location.location = Reference(urn:uuid:347ae3ea-82f3-41c8-9c95-88519f50a7c9)

Instance: Inline-Location-example
InstanceOf: TWCoreLocation
Usage: #inline
* status = #active
* name = "衛生福利部臺北醫院耳鼻喉科"
* description = "診治各種耳、鼻、咽、喉等上呼吸道疾病及頭頸部腫瘤 , 包括 : 感冒、咳嗽、頭痛、喉嚨痛、聲音沙啞、吞嚥困難、呼吸不順、鼻塞、鼻竇炎、鼻過敏、鼻息肉、扁桃腺肥大、耳鳴、耳痛、中耳炎、顏面神經麻痺、顎顳關節痛、口乾舌燥、打鼾、語言障礙、食道異物取出、頭頸部腫瘤、舌及口咽腫瘤手術"
* mode = #kind
* type = http://terminology.hl7.org/CodeSystem/v3-RoleCode#ENT "Otorhinolaryngology clinic"
* managingOrganization =  Reference(urn:uuid:c89f7cb5-8755-4848-b96a-a9fa34120588)
* telecom.system = http://hl7.org/fhir/contact-point-system#phone
* telecom.value = "02-2276-5566"
* telecom.use = http://hl7.org/fhir/contact-point-use#work
* address.use = http://hl7.org/fhir/address-use#work
* address.type = http://hl7.org/fhir/address-type#both
* address.text = "242新北市新莊區思源路127號"
* address.line = "思源路127號"
* address.city = "新莊區"
* address.district = "新北市"
* address.postalCode = "242"
* position.longitude = 25.043085494729105
* position.latitude = 121.45941895179722
* hoursOfOperation.daysOfWeek[0] = #mon
* hoursOfOperation.daysOfWeek[+] = #tue
* hoursOfOperation.daysOfWeek[+] = #wed
* hoursOfOperation.daysOfWeek[+] = #thu
* hoursOfOperation.daysOfWeek[+] = #fri
* hoursOfOperation.allDay = true


---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Bundle-bun-example.fsh

Instance: bun-example
InstanceOf: TWCoreBundle
Usage: #example
* identifier.system = "https://www.tph.mohw.gov.tw"
* identifier.value = "01014857930415100059403"
* type = http://hl7.org/fhir/bundle-type#transaction 
* timestamp = "2023-12-11T12:00:00.000Z"

* entry[0].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/Patient/pat-example"
* entry[0].resource = pat-example
* entry[0].request.method = #PUT
* entry[0].request.url = "Patient/pat-example"

* entry[1].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/Medication/med-example"
* entry[1].resource = med-example
* entry[1].request.method = #PUT
* entry[1].request.url = "Medication/med-example"



---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Bundle-bun-message-request-example.fsh

Instance: bun-message-request-example
InstanceOf: TWCoreBundleMessage
Usage: #example
* identifier.system = "https://www.tph.mohw.gov.tw"
* identifier.value = "01014857930415100000000"
* type = http://hl7.org/fhir/bundle-type#message 
* timestamp = "2023-12-01T12:34:56.000Z"

* entry[0].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/MessageHeader/mes-request-example"
* entry[0].resource = mes-request-example

* entry[1].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/Patient/pat-example"
* entry[1].resource = pat-example

* entry[2].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/Observation/obs-lab-example"
* entry[2].resource = obs-lab-example

* entry[3].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/DiagnosticReport/dia-example"
* entry[3].resource = dia-example

* entry[4].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/Practitioner/pra-dr-example"
* entry[4].resource = pra-dr-example

* entry[5].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/Organization/org-hosp-example"
* entry[5].resource = org-hosp-example



---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Bundle-bun-message-response-example.fsh

Instance: bun-message-response-example
InstanceOf: TWCoreBundleMessage
Usage: #example
* identifier.system = "https://www.tph.mohw.gov.tw"
* identifier.value = "01014857930415100000000"
* type = http://hl7.org/fhir/bundle-type#message 
* timestamp = "2023-12-02T12:34:56.000Z"


* entry[0].fullUrl = "https://twcore.mohw.gov.tw/ig/twcore/MessageHeader/mes-response-example"
* entry[0].resource = mes-response-example



---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/CarePlan-careplan-example.fsh

Instance: careplan-example
InstanceOf: TWCoreCarePlan
Usage: #example
* status = #active
* intent = #order
* category[AssessPlan] = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/careplan-category-tw#assess-plan
* subject = Reference(Patient/pat-example)

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/CareTeam-careteam-example.fsh

Instance: careteam-example
InstanceOf: TWCoreCareTeam
Usage: #example
* status = #active
* subject = Reference(Patient/pat-example)
* participant[0].role = http://snomed.info/sct#21450003 "Neuropsychiatrist"
* participant[=].member = Reference(Practitioner/pra-dr-example)
* participant[+].role = http://snomed.info/sct#224535009 "Registered nurse"
* participant[=].member = Reference(Practitioner/pra-nurse-example)
* participant[+].role = http://snomed.info/sct#46255001 "Pharmacist"
* participant[=].member = Reference(Practitioner/pra-phc-example)
* participant[+].role = http://snomed.info/sct#159016003 "Medical radiographer"
* participant[=].member = Reference(Practitioner/pra-radio-example)

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Composition-com-example.fsh

Instance: com-example
InstanceOf: TWCoreComposition
Usage: #example
* status = http://hl7.org/fhir/composition-status#final
* type = http://loinc.org#11503-0 "Medical records"
* category = http://loinc.org#47039-3
* subject = Reference(Patient/pat-example)
* date = "2023-09-10T10:30:00Z"
* author = Reference(Practitioner/pra-dr-example)
* title = "陳加玲的病摘"
* confidentiality = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R "restricted"
* attester.mode = http://hl7.org/fhir/composition-attestation-mode#personal "Personal"
* attester.time = "2023-09-10T11:00:00Z"
* attester.party = Reference(Practitioner/pra-dr-example)
* custodian = Reference(Organization/org-hosp-example)
* event.code = http://terminology.hl7.org/CodeSystem/v3-ActCode#MEDLIST "medication list"
* event.period.start = "2023-09-10T08:00:00Z"
* event.period.end = "2023-09-15T09:30:00Z"
* section.entry[0] = Reference(Practitioner/pra-dr-example)
* section.entry[1] = Reference(Observation/obs-bloodPressure-example)
* section.entry[2] = Reference(MedicationRequest/med-req-cod-example)
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
    <h3>
        <b>陳加玲的病摘</b>
    </h3>
    <p>
		<b>臨床狀態</b>：Final <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://hl7.org/fhir/composition-status\">CompositionStatus</a>#final) </span>
	</p>
	<p>
		<b>種類</b>：Medical records <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://loinc.org\">LOINC</a>#11503-0) </span>
	</p>
    <p>
		<b>分類</b>： Hospital Admission history and physical note <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://loinc.org\">LOINC</a>#47039-3) </span>
	</p>
    <p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
	<p>
		<b>編輯時間</b>：2023-09-10T10:30:00
	</p>
    <p>
		<b>病摘創建者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
	<p>
		<b>根據特定技術領域的定義</b>：restricted <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v3-Confidentiality/\">v3 Code System Confidentiality</a>#R) </span>
	</p>

    <p><b>證明準確性</b>：</p>

    <blockquote>
        <p><b>認證者提供的認證類型</b>：Personal <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/composition-attestation-mode/\">CompositionAttestationMode</a>#personal) </span></p>
        <p><b>被證明的時間</b>：2023-09-10T11:00:00</p>
        <p><b>負責證明的人員</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"</p>
        <p><b>負責維護機構</b>：<a href=\"Organization-org-hosp-example.html\">Organization/org-hosp-example</a> \"衛生福利部臺北醫院\"</p>
	</blockquote>

    <p><b>正在記錄的臨床服務</b>：</p>
    <blockquote>
        <p><b>被記錄的主要臨床行為代碼</b>：medication list <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v3-ActCode/\">ActCode</a>#MEDLIST) </span></p>
        <p><b>文件所涵蓋的時間區間</b>：2023-09-10T08:00:00 ～ 2023-09-15T09:30:00 </p>
	</blockquote>

    <p><b>病摘小節內容：</b></p>
    <blockquote>
   	<p><b>section.entry[Observation]</b>：<a href=\"Observation-obs-bloodPressure-example.html\">Observation/obs-bloodPressure-example</a></p>
    <p><b>section.entry[Practitioner]</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a></p>
    <p><b>section.entry[MedicationRequest]</b>：<a href=\"MedicationRequest-med-req-cod-example.html\">MedicationRequest/med-req-cod-example</a></p>
    </blockquote>	

</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Composition-com-surgery-example.fsh

Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode

Instance: com-surgery-example
InstanceOf: Composition
Usage: #example
* status = http://hl7.org/fhir/composition-status#final
* type = http://loinc.org#11503-0 "Medical records"
* category = http://loinc.org#11504-8 
* subject = Reference(Patient/pat-example)
* date = "2023-11-05T14:45:00Z"
* author = Reference(Practitioner/pra-dr-example) "王依昇"
* title = "手術摘要報告"
* confidentiality = #N
* attester.mode = #personal
* attester.time = "2023-11-05T15:30:00Z"
* attester.party = Reference(Practitioner/pra-dr-example) "王依昇"
* custodian = Reference(Organization/org-hosp-example) "衛生福利部臺北醫院"
* event.code = $v3-ActCode#SURG "Surgical"
* event.period.start = "2023-11-05T12:00:00Z"
* event.period.end = "2023-11-05T16:00:00Z"
* section.entry = Reference(Procedure/pro-appendectomy-example)
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
    <h3>
        <b>手術摘要報告</b>
    </h3>
    <p>
		<b>臨床狀態</b>：Final <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://hl7.org/fhir/composition-status\">CompositionStatus</a>#final) </span>
	</p>
	<p>
		<b>種類</b>：Medical records <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://loinc.org\">LOINC</a>#11503-0) </span>
	</p>
    <p>
		<b>分類</b>：Surgical operation note <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://loinc.org\">LOINC</a>#11504-8) </span>
	</p>
    <p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
	<p>
		<b>編輯時間</b>：2023-11-05T14:45:00
	</p>
    <p>
		<b>報告創建者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
	<p>
		<b>根據特定技術領域的定義</b>：normal <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v3-Confidentiality/\">v3 Code System Confidentiality</a>#N) </span>
	</p>

    <p><b>證明準確性</b>：</p>
    <blockquote>
        <p><b>認證者提供的認證類型</b>：Personal <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/composition-attestation-mode/\">CompositionAttestationMode</a>#personal) </span></p>
        <p><b>被證明的時間</b>：2023-11-05T15:30:00</p>
        <p><b>負責證明的人員</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"</p>
        <p><b>負責維護機構</b>：<a href=\"Organization-org-hosp-example.html\">Organization/org-hosp-example</a> \"衛生福利部臺北醫院\"</p>
	</blockquote>

    <p><b>正在記錄的臨床服務</b>：</p>
    <blockquote>
        <p><b>被記錄的主要臨床行為代碼</b>：Surgical <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v3-ActCode/\">ActCode</a>#SURG) </span></p>
        <p><b>文件所涵蓋的時間區間</b>：2023-11-05T12:00:00 ～ 2023-11-05T16:00:00 </p>
	</blockquote>

    <p><b>報告小節內容：</b>  <a href=\"Procedure-pro-appendectomy-example.html\">Procedure/pro-appendectomy-example</a></p>	
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Condition-con-example.fsh

Instance: con-example
InstanceOf: TWCoreCondition
Usage: #example
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#remission
* verificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status#confirmed
* category = http://terminology.hl7.org/CodeSystem/condition-category#encounter-diagnosis
* severity = http://loinc.org#LA6752-5
* code = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/icd-10-cm-2021-tw#E08.649
* code.text = "起因於潛在病的糖尿病，伴有低血糖，未伴有昏迷"
* subject = Reference(Patient/pat-example)
* onsetDateTime = "2022-08-01T17:00:14+08:00"
* abatementDateTime = "2022-08-01T18:00:14+08:00"
* asserter = Reference(Practitioner/pra-dr-example)
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>病情、問題或診斷資料</b>
	</h3>
	<p>
		<b>臨床狀態</b>：Remission <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/condition-clinical\">ConditionClinicalStatusCodes</a>#remission) </span>
	</p>
	<p>
		<b>驗證狀態</b>：Confirmed <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/condition-ver-status\">ConditionVerificationStatus</a>#confirmed) </span>
	</p>
	<p>
		<b>病情、問題或診斷分類</b>：Encounter Diagnosis <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/condition-category\">Condition Category Codes</a>#encounter-diagnosis) </span>
	</p>
	<p>
		<b>嚴重程度</b>：Mild <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"https://loinc.org/\">LOINC</a>#LA6752-5) </span>
	</p>
	<p>
		<b>病情、問題或診斷識別</b>：起因於潛在病的糖尿病，伴有低血糖，未伴有昏迷 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"CodeSystem-icd-10-cm-2021-tw.html\">臺灣2021年中文版ICD-10-CM</a>#E08.649) </span>
	</p>
	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
	<p>
		<b>實際日期</b>：2022-08-01 05:00:14-0500
	</p>
	<p>
		<b>緩解日期</b>：2022-08-01 06:00:14-0500
	</p>
	<p>
		<b>診斷者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Coverage-coverage-example.fsh

Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $sopt = https://nahdo.org/sopt
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $subscriber-relationship = http://terminology.hl7.org/CodeSystem/subscriber-relationship
Alias: $coverage-class = http://terminology.hl7.org/CodeSystem/coverage-class

Instance: coverage-example
InstanceOf: TWCoreCoverage
Usage: #example
* identifier.type = $v2-0203#MB "Member Number"
* identifier.system = "http://example.org/fhir/memberidentifier"
* identifier.value = "88800933501"
* status = #active
* type.coding[0] = $sopt#3712 "PPO"
* type.coding[+] = $v3-ActCode#PPO "preferred provider organization policy"
* type.text = "PPO"
* subscriberId = "888009335"
* beneficiary = Reference(Patient/pat-example)
* relationship = $subscriber-relationship#self
* relationship.text = "Self"
* period.start = "2020-01-01"
* payor = Reference(Organization/org-co-example) 
* class[group].type = $coverage-class#group "Group"
* class[group].type.text = "An employee group"
* class[group].value = "xyz"
* class[group].name = "XYZ employee Group Plan"
* class[plan].type = $coverage-class#plan "Plan"
* class[plan].type.text = "A specific suite of benefits."
* class[plan].value = "gold"
* class[plan].name = "Acme Gold Plan"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Device-dev-example.fsh

Instance: dev-example
InstanceOf: TWCoreImplantableDevice
Usage: #example
* udiCarrier.deviceIdentifier = "09504000059118"
* udiCarrier.carrierHRF = "(01)09504000059118(17)141120(10)7654321D(21)10987654d321"
* status = #active
* expirationDate = "2014-11-20"
* lotNumber = "7654321D"
* serialNumber = "10987654d321"
* type.coding.version = "http://snomed.info/sct/731000124108"
* type.coding = http://snomed.info/sct#468063009 "Coated femoral stem prosthesis, modular"
* patient = Reference(Patient/pat-example)

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/DiagnosticReport-dia-example.fsh

Instance: dia-example
InstanceOf: TWCoreDiagnosticReport
Usage: #example
* status = #registered
* category = http://terminology.hl7.org/CodeSystem/v2-0074#LAB "Laboratory"
* category.text = "Laboratory"
* code = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medical-service-payment-tw#09002C "血中尿素氮"
* code.text = "血中尿素氮"
* subject = Reference(Patient/pat-example)
* effectiveDateTime = "2022-08-01T17:00:14+08:00"
* issued = "2022-08-01T18:00:14+08:00"
* performer = Reference(Practitioner/pra-dr-example)
* result = Reference(Observation/obs-lab-example)
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>診斷報告</b>
	</h3>
	<p>
		<b>診斷狀態</b>：Remission <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/valueset-diagnostic-report-status.html\">DiagnosticReportStatus</a>#registered) </span>
	</p>
	<p>
		<b>診斷分類</b>：Laboratory <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/valueset-diagnostic-service-sections.html\">DiagnosticServiceSectionCodes</a>#LAB) </span>
	</p>
	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
	<p>
		<b>臨床相關報告時間</b>：2022-08-01 05:00:14-0500
	</p>
	<p>
		<b>診斷報告時間</b>：2022-08-01 06:00:14-0500
	</p>
	<p>
		<b>病情、問題或診斷識別</b>：血中尿素氮<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://loinc.org\">LOINC</a>#09002C) </span>
	</p>
	<p>
		<b>診斷結果</b>：<a href=\"Observation-obs-lab-example.html\">Observation/obs-lab-example</a>
	</p>
	<p>
		<b>診斷者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/DocumentReference-doc-outpatient-example.fsh

Instance: doc-outpatient-example
InstanceOf: TWCoreDocumentReference
Usage: #example
* status = #current
* type = http://loinc.org#34108-1 "Outpatient Note"
* type.text = "門診紀錄"
* subject = Reference(Patient/pat-example)
* date = "2024-01-23T12:34:56Z"
* author = Reference(Practitioner/pra-dr-example)
* custodian = Reference(Organization/org-hosp-example)
* content.attachment.contentType = #application/pdf
* content.attachment.url = "ConsultationReport.pdf"
* content.attachment.title = "Consultation Report"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>門診紀錄</b>
	</h3>
	<p>
		<b>狀態</b>：Current <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-document-reference-status.html\">DocumentReferenceStatus</a>#current) </span>
	</p>
	<p>
		<b>類型(type)</b>：門診紀錄(Outpatient Note) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://loinc.org\">LOINC</a>#34108-1) </span>
	</p>
	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
    <p>
		<b>日期</b>：2024-01-23T12:34:56
	</p>
    <p>
		<b>紀錄者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
    <p>
		<b>紀錄維護機構</b>：<a href=\"Organization-org-hosp-example.html\">Organization/org-hosp-example</a> \"衛生福利部臺北醫院\"
	</p>

	<p><b>紀錄中使用的檔案</b>：</p>
    
    <blockquote>
    <p><b>檔案類型(type)</b>：application/pdf </p>
    <p><b>檔案</b>：<a href=\"ConsultationReport.pdf\"> ConsultationReport.pdf </a> </p>
    </blockquote>

</div>"


---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/DocumentReference-doc-wound-example.fsh

Instance: doc-wound-example
InstanceOf: TWCoreDocumentReference
Usage: #example
* status = #current
* type = http://loinc.org#74209-8 "Injury event summary Document"
* type.text = "驗傷報告"
* subject = Reference(Patient/pat-example)
* date = "2024-01-23T15:45:00Z"
* author = Reference(Practitioner/pra-dr-example)
* custodian = Reference(Organization/org-hosp-example)
* content.attachment.contentType = #image/jpeg
* content.attachment.url = "https://obs.line-scdn.net/0hJczFr9HRFUxHPzhi5CVqG31pFiN0UwZPIwlETwRRS3g5ClpKL1wPImRrSCg6D1ISKQlYKGY7Dn1jBlZPf1sP/w1200"
* content.attachment.title = "Wound Photo"
* context.encounter = Reference(Encounter/enc-example)
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>驗傷報告</b>
	</h3>
	<p>
		<b>狀態</b>：Current <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-document-reference-status.html\">DocumentReferenceStatus</a>#current) </span>
	</p>
	<p>
		<b>類型(type)</b>：驗傷報告(Injury event summary Document) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://loinc.org\">LOINC</a>#74209-8) </span>
	</p>
	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
    <p>
		<b>日期</b>：2024-01-23T15:45:00
	</p>
    <p>
		<b>紀錄者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
    <p>
		<b>就醫資料</b>：<a href=\"Encounter-enc-example.html\">Encounter/enc-example</a> \"就醫資料\"
	</p>

	<p><b>紀錄中使用的檔案</b>：</p>
    
    <blockquote>
    <p><b>檔案類型(type)</b>：image/jpeg </p>
    <p><b>檔案</b>：<a href=\"https://obs.line-scdn.net/0hJczFr9HRFUxHPzhi5CVqG31pFiN0UwZPIwlETwRRS3g5ClpKL1wPImRrSCg6D1ISKQlYKGY7Dn1jBlZPf1sP/w1200\"> Wound Photo </a> </p>
    </blockquote>

</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Encounter-enc-example.fsh

Instance: enc-example
InstanceOf: TWCoreEncounter
Usage: #example
* identifier.system = "http://healthcare.example.org/identifiers/enocunter"
* identifier.value = "E22081702"
* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#PRENC
* type = http://terminology.hl7.org/CodeSystem/encounter-type#ADMS
//* serviceType = http://terminology.hl7.org/CodeSystem/service-type#318 "Diabetes"
//* serviceType.text = "糖尿病"
* serviceType = http://snomed.info/sct#394589003 "Nephrology (qualifier value)"
* serviceType.text = "腎臟內科"
* subject = Reference(Patient/pat-example)
* participant.type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#PPRF
* participant.period.start = "2022-08-01T17:00:14+08:00"
* participant.period.end = "2022-08-01T18:00:14+08:00"
* participant.individual = Reference(Practitioner/pra-dr-example)
* period.start = "2022-08-01T17:00:14+08:00"
* period.end = "2022-08-01T18:00:14+08:00"
* reasonCode = http://snomed.info/sct#160303001 "FH: Diabetes mellitus"
* hospitalization.dischargeDisposition = http://terminology.hl7.org/CodeSystem/discharge-disposition#home
* location.location = Reference(Location/loc-ent-example)
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>就醫資料</b>
	</h3>
	<p>
		<b>識別碼</b>：E22081702
	</p>
	<p>
		<b>就醫現況</b>：finished
	</p>
	<p>
		<b>就醫分類</b>：pre-admission <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"https://terminology.hl7.org/4.0.0/ValueSet-v3-ActEncounterCode.html\">ActEncounterCode</a>#PRENC) </span>
	</p>
	<p>
		<b>就醫種類</b>：Annual diabetes mellitus screening <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-encounter-type.html\">Encounter type</a>#ADMS) </span>
	</p>
	<p>
		<b>服務型別</b>：腎臟內科(Nephrology (qualifier value)) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">Service type</a>#394589003) </span>
	</p>
	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
	<p>
		<b>出院後的地點</b>：Home <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-encounter-discharge-disposition.html\">Discharge disposition</a>#home) </span>
	</p>
	<p>
		<b>就醫發生的地點</b>：<a href=\"Location-loc-ent-example.html\">Location/loc-ent-example</a> \"衛生福利部臺北醫院\"
	</p>
	<h3>參與就醫的健康照護服務提供者</h3>
	<table class=\"grid\">
		<tr>
			<td>-</td>
			<td>
				<b>角色</b>
			</td>
			<td>
				<b>參與時段</b>
			</td>
			<td>
				<b>參與人</b>
			</td>
		</tr>
		<tr>
			<td>*</td>
			<td>primary performer <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"https://terminology.hl7.org/4.0.0/CodeSystem-v3-ParticipationType.html\">ParticipationType</a>#PPRF) </span>
			</td>
			<td>2022-08-01 17:00:14+08:00 --&gt; 2022-08-01 18:00:14+08:00</td>
			<td>
				<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
			</td>
		</tr>
	</table>
	<p>
		<b>就醫的開始和結束時間</b>：2022-08-01 17:00:14+08:00 --&gt; 2022-08-01T18:00:14 08:00
	</p>
	<p>
		<b>就醫原因</b>：FH: Diabetes mellitus <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#160303001) </span>
	</p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Goal-goa-example.fsh

Instance: goa-example
InstanceOf: TWCoreGoal
Usage: #example
* lifecycleStatus = #active
* description.text = "Patient is targeting a pulse oximetry of 92% and a weight of 195 lbs"
* subject = Reference(Patient/pat-example) 
* target.dueDate = "2016-04-05"



---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/ImagingStudy-img-ct-example.fsh

Alias: $icd-10-pcs-2021-tw = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/icd-10-pcs-2021-tw
Alias: $DCM = http://dicom.nema.org/resources/ontology/DCM

Instance: img-ct-example
InstanceOf: TWCoreImagingStudy
Usage: #example
* identifier[0].use = #official
* identifier[=].system = "urn:dicom:uid"
* identifier[=].value = "urn:oid:2.16.886.103.102695.988079582344471175076015633105"
* identifier[+].use = #usual
* identifier[=].value = "a173095681219824"
* status = #available
* subject = Reference(Patient/pat-example)
* started = "1986-09-28T12:04:56+08:00"
//* endpoint = Reference(Endpoint/siim-dicomweb)
//* endpoint.type = "Endpoint"
* procedureCode = $icd-10-pcs-2021-tw#BR27ZZZ "胸椎電腦斷層掃描"
* series[0].uid = "2.16.886.103.102695.227571573286142502566010959726"
* series[=].number = 3
* series[=].modality = $DCM#CT
* series[=].description = "Abdomen 5.0 B20f"
* series[=].bodySite.display = "CHEST"
* series[=].instance[0].uid = "2.16.886.103.102695.212912695636234135693070447763"
* series[=].instance[=].sopClass = urn:ietf:rfc:3986#urn:oid:1.2.840.10008.5.1.4.1.1.2
* series[=].instance[=].number = 1
* series[=].instance[=].title = "ORIGINAL\\PRIMARY\\AXIAL\\CT_SOM5 SPI"
* series[=].instance[+].uid = "2.16.886.103.102695.154619478553564561574922203964"
* series[=].instance[=].sopClass = urn:ietf:rfc:3986#urn:oid:1.2.840.10008.5.1.4.1.1.2
* series[=].instance[=].number = 2
* series[=].instance[=].title = "ORIGINAL\\PRIMARY\\AXIAL\\CT_SOM5 SPI"
* series[=].instance[+].uid = "2.16.886.103.102695.143863457172810804031650949757"
* series[=].instance[=].sopClass = urn:ietf:rfc:3986#urn:oid:1.2.840.10008.5.1.4.1.1.2
* series[=].instance[=].number = 3
* series[=].instance[=].title = "ORIGINAL\\PRIMARY\\AXIAL\\CT_SOM5 SPI"
* series[=].instance[+].uid = "2.16.886.103.102695.158154616477252779922391910665"
* series[=].instance[=].sopClass = urn:ietf:rfc:3986#urn:oid:1.2.840.10008.5.1.4.1.1.2
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>胸椎電腦斷層掃描</b>
	</h3>
	<p>
		<b>識別碼(official)</b>：urn:oid:2.16.886.103.102695.988079582344471175076015633105 <br />
        <b>識別碼(usual)</b>：a173095681219824
	</p>
	<p>
		<b>狀態</b>：Available<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/valueset-imagingstudy-status.html\">ImagingStudyStatus</a>#available) </span>
	</p>
    <p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
	<p>
		<b>檢查開始日期與時間</b>：1986-09-28T12:04:56+08:00
	</p> 	
    <p>
		<b>執行的處置或手術代碼</b>：胸椎電腦斷層掃描<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"CodeSystem-icd-10-pcs-2021-tw.html\">臺灣健保署2021年中文版ICD-10-PCS</a>#BR27ZZZ) </span>
	</p>

    <blockquote>
	<p><b>系列(series)實例</b>：</p>
    <p>
    <b>DICOM系列實例UID</b>：2.16.886.103.102695.227571573286142502566010959726 <br />
    <b>數字識別碼</b>： 6 <br />
	<b>所使用的成像儀器</b>： Computed Tomography <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://dicom.nema.org/resources/ontology/DCM\">CID 29 Acquisition Modality</a>#CT) </span><br />
	<b>摘要</b>： Abdomen 5.0 B20f <br />
    <b>身體部位</b>：CHEST
	</p>
            <blockquote>
            <p><b>SOP實例(1)</b>：</p>
            <p>
            <b>UID</b>：2.16.886.103.102695.164912026667369755433481996914 <br />
            <b>DICOM class 類型</b>： urn:oid:1.2.840.10008.5.1.4.1.1.2<br />
            <b>序號</b>： 1 <br />
            <b>實例的描述</b>： ORIGINAL&amp;PRIMARY&amp;LOCALIZER&amp;CT_SOM5 TOP <br />
            </p>
            </blockquote>

            <blockquote>
            <p><b>SOP實例(2)</b>：</p>
            <p>
            <b>UID</b>：2.16.886.103.102695.211371491775300429718822081671 <br />
            <b>DICOM class 類型</b>： urn:oid:1.2.840.10008.5.1.4.1.1.2 <br />
            <b>序號</b>： 2 <br />
            <b>實例的描述</b>： DERIVED&amp;SECONDARY&amp;LOCALIZER&amp;CT_SOM5 TOP&amp;CSA RESAMPLED <br />
            </p>
            </blockquote>

            <blockquote>
            <p><b>SOP實例(3)</b>：</p>
            <p>
            <b>UID</b>：2.16.886.103.102695.157108816098836770904535991652 <br />
            <b>DICOM class 類型</b>： urn:oid:1.2.840.10008.5.1.4.1.1.2<br />
            <b>序號</b>： 3 <br />
            <b>實例的描述</b>：ORIGINAL&amp;PRIMARY&amp;AXIAL&amp;CT_SOM5 SPI <br />
            </p>
            </blockquote>

    </blockquote>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/ImagingStudy-img-example.fsh

Alias: $icd-10-pcs-2021-tw = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/icd-10-pcs-2021-tw

Instance: img-example
InstanceOf: TWCoreImagingStudy
Usage: #example
//* identifier[0].use = #official
//* identifier[=].type = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/v2-0203#SIUID "Study instancce UID"
//* identifier[=].system = "urn:dicom:uid"
//* identifier[=].value = "urn:oid:2.25.284733062255854756631429402605810248731"
* status = #available
* identifier[+].use = #official
* identifier[=].type = http://terminology.hl7.org/CodeSystem/v2-0203#ACSN "Accession ID"
* identifier[=].system = "http://www.moi.gov.tw"
* identifier[=].value = "2ffe0c20-50d8-49df-85f6-6452d1d201b9"
* started = "2022-08-01T19:00:14+08:00"
* subject = Reference(Patient/pat-example)
* encounter = Reference(Encounter/enc-example)
//* endpoint = Reference(Endpoint/end-example)
* numberOfSeries = 1
* numberOfInstances = 1
* procedureReference = Reference(Procedure/pro-example)
* procedureCode.coding[icd10-pcs-2021] = $icd-10-pcs-2021-tw#BW40ZZZ "腹部超音波"
* series.uid = "2.25.88017001449189502323411118737039844242"
* series.modality = http://dicom.nema.org/resources/ontology/DCM#US
* series.bodySite = http://snomed.info/sct#251007 "Pectoral region"
* series.performer.actor = Reference(Practitioner/pra-radio-example)
* series.instance.uid = "2.25.284548087604447302186649612333159050027"
* series.instance.sopClass.system = "urn:ietf:rfc:3986"
* series.instance.sopClass.code = #urn:oid:1.2.840.10008.5.1.4.1.1.3.1
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
    <h3>
		<b>腹部超音波</b>
	</h3>
	<p>
		<b>狀態</b>：Available <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/imagingstudy-status\">ImagingStudyStatus</a>#available) </span>
    </p>
    <p>
		<b>識別碼(official)</b>：2ffe0c20-50d8-49df-85f6-6452d1d201b9
	</p>
    <p>
		<b>檢查開始日期與時間</b>：2022-08-01T19:00:14
	</p>
    <p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
    <p>
		<b>就醫事件</b>：<a href=\"Encounter-enc-example.html\">Encounter/enc-example</a> \"就醫資料\"
	</p>
    <p>
        <b>檢查相關Series的數量</b>：1
    </p>
    <p>
        <b>檢查相關Instances的數量</b>：1
    </p>

    <p>
		<b>處置或手術</b>：<a href=\"Procedure-pro-example.html\">Procedure/pro-example</a> \"處置或手術基本資料\"  
        <br/>
		<b>執行的處置或手術代碼</b>：腹部超音波<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"CodeSystem-icd-10-pcs-2021-tw.html\">TW2021ICD10PCS</a>#BW40ZZZ) </span>
	</p>

    <blockquote>
	<p><b>系列(series)實例</b>：</p>
    <p>
    <b>DICOM系列實例UID</b>：2.25.88017001449189502323411118737039844242<br />
	<b>所使用的成像儀器</b>： Ultrasound <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://dicom.nema.org/resources/ontology/DCM\">CID 29 Acquisition Modality</a>#US) </span><br />
    <b>身體部位</b>：Pectoral region <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#251007) </span><br />
	<b>檢查執行者</b>：<a href=\"Practitioner-pra-radio-example.html\">Practitioner/pra-radio-example</a> \"王曉明\"
	</p>
            <blockquote>
            <p>
            <p><b>SOP實例</b>：</p>
            <b>UID</b>：2.25.284548087604447302186649612333159050027<br />
            <b>DICOM class 類型</b>： urn:oid:1.2.840.10008.5.1.4.1.1.3.1
            </p>
            </blockquote>
        
    </blockquote>

</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/ImagingStudy-img-mr-example.fsh

Alias: $icd-10-pcs-2021-tw = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/icd-10-pcs-2021-tw
Alias: $DCM = http://dicom.nema.org/resources/ontology/DCM

Instance: img-mr-example
InstanceOf: TWCoreImagingStudy
Usage: #example
* meta.profile = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/ImagingStudy-twcore"
* identifier[0].use = #official
* identifier[=].system = "urn:dicom:Uid"
* identifier[=].value = "urn:oid:2.16.886.103.102695.210984610692795733666714058539"
* identifier[+].use = #usual
* identifier[=].value = "a085557173658239"
* status = #available
* subject = Reference(Patient/pat-example)
* started = "2008-04-19T09:14:28+08:00"
* procedureCode = $icd-10-pcs-2021-tw#BH32ZZZ "雙側乳房磁振造影"
* description = "MRI Breast Bilateral with and without Contrast"
* series[0].uid = "2.16.886.103.102695.146297080074792942851314092932"
* series[=].number = 701
* series[=].modality = $DCM#MR
* series[=].description = "AX BLISS_AUTO SENSE"
* series[=].bodySite.display = "BREAST"
* series[=].instance[0].uid = "2.16.886.103.102695.121913313496219293911851524363"
* series[=].instance[=].sopClass = urn:ietf:rfc:3986#1.2.840.10008.5.1.4.1.1.4
* series[=].instance[=].number = 1
* series[=].instance[=].title = "ORIGINAL\\PRIMARY\\M_FFE\\M\\FFE"

* series[=].number = 401
* series[=].modality = $DCM#MR
* series[=].description = "STIR SENSE"
* series[=].bodySite.display = "BREAST"
* series[=].instance[0].uid = "2.16.886.103.102695.163339141228950338477395854866"
* series[=].instance[=].sopClass = urn:ietf:rfc:3986#urn:oid:1.2.840.10008.5.1.4.1.1.4
* series[=].instance[=].number = 1
* series[=].instance[=].title = "ORIGINAL\\PRIMARY\\M_IR\\M\\IR"
* series[=].instance[+].uid = "2.16.886.103.102695.214225290980747163090417854498"
* series[=].instance[=].sopClass = urn:ietf:rfc:3986#urn:oid:1.2.840.10008.5.1.4.1.1.4
* series[=].instance[=].number = 2
* series[=].instance[=].title = "ORIGINAL\\PRIMARY\\M_IR\\M\\IR"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>雙側乳房磁振造影</b>
	</h3>
	<p>
		<b>識別碼(official)</b>：urn:oid:2.16.886.103.102695.210984610692795733666714058539 <br />
        <b>識別碼(usual)</b>：a085557173658239
	</p>
	<p>
		<b>狀態</b>：Available<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/valueset-imagingstudy-status.html\">ImagingStudyStatus</a>#available) </span>
	</p>
    <p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
	<p>
		<b>檢查開始日期與時間</b>：2008-04-19T09:14:28+08:00
	</p> 	
    <p>
		<b>執行的處置或手術代碼</b>雙側乳房磁振造影 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"CodeSystem-icd-10-pcs-2021-tw.html\">臺灣健保署2021年中文版ICD-10-PCS</a>#BH32ZZZ) </span>
	</p>
	<p>
		<b>影像描述</b>：MRI Breast Bilateral with and without Contrast
	</p> 	
    <blockquote>
	<p><b>系列(series)實例(701)</b>：</p>
    <p>
    <b>DICOM系列實例UID</b>：2.16.886.103.102695.146297080074792942851314092932 <br />
    <b>數字識別碼</b>： 701 <br />
	<b>所使用的成像儀器</b>： Magnetic Resonance <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://dicom.nema.org/resources/ontology/DCM\">CID 29 Acquisition Modality</a>#MR) </span><br />
	<b>摘要</b>： AX BLISS_AUTO SENSE <br />
    <b>身體部位</b>：BREAST
	</p>

            <blockquote>
            <p><b>SOP實例</b>：</p>
            <p>
            <b>UID</b>：2.16.886.103.102695.121913313496219293911851524363 <br />
            <b>DICOM class 類型</b>： 1.2.840.10008.5.1.4.1.1.4 <br />
            <b>序號</b>： 1 <br />
            <b>實例的描述</b>： ORIGINAL&amp;PRIMARY&amp;M_FFE&amp;M&amp;FFE <br />
            </p>
            </blockquote>

    </blockquote>
        
    <blockquote>
	<p><b>系列(series)實例(401)</b>：</p>
    <p>
    <b>DICOM系列實例UID</b>：2.16.886.103.102695.146297080074792942851314092932 <br />
    <b>數字識別碼</b>： 401 <br />
	<b>所使用的成像儀器</b>： MR <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://dicom.nema.org/resources/ontology/DCM\">CID 29 Acquisition Modality</a>#MR) </span><br />
	<b>摘要</b>： STIR SENSE <br />
    <b>身體部位</b>：BREAST
	</p>
            <blockquote>
            <p><b>SOP實例(1)</b>：</p>
            <p>
            <b>UID</b>：2.16.886.103.102695.163339141228950338477395854866 <br />
            <b>DICOM class 類型</b>：urn:oid:1.2.840.10008.5.1.4.1.1.4 <br />
            <b>序號</b>： 1 <br />
            <b>實例的描述</b>： ORIGINAL&amp;PRIMARY&amp;M_IR&amp;M&amp;IR <br />
            </p>
            </blockquote>

            <blockquote>
            <p><b>SOP實例(2)</b>：</p>
            <p>
            <b>UID</b>：2.16.886.103.102695.214225290980747163090417854498 <br />
            <b>DICOM class 類型</b>：urn:oid:1.2.840.10008.5.1.4.1.1.4 <br />
            <b>序號</b>： 2 <br />
            <b>實例的描述</b>： ORIGINAL&amp;PRIMARY&amp;M_IR&amp;M&amp;IR <br />
            </p>
            </blockquote>

    </blockquote>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/ImagingStudy-img-pet-example.fsh

Alias: $DCM = http://dicom.nema.org/resources/ontology/DCM

Instance: img-pet-example
InstanceOf: TWCoreImagingStudy
Usage: #example
* meta.profile = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/ImagingStudy-twcore"
* identifier[0].use = #official
* identifier[=].system = "urn:dicom:uid"
* identifier[=].value = "urn:oid:2.16.886.103.102695.312603252934799756197864329946"
* identifier[+].use = #usual
* identifier[=].value = "a142485449496602"
* status = #available
* subject = Reference(Patient/pat-example)
* started = "1996-05-14T12:56:26+08:00"
//* endpoint = Reference(Endpoint/siim-dicomweb)
//* endpoint.type = "Endpoint"
* description = "PET WB/reg Restag Hd/Nck Ca"
* series[0].uid = "2.16.886.103.102695.308323898107272214360495873340"
* series[=].number = 607
* series[=].modality = $DCM#PT
* series[=].description = "CORONALS [MPR Range]"
* series[=].bodySite.display = "HEADNECK"
* series[=].instance[0].uid = "2.16.886.103.102695.204472109808701101171643476459"
* series[=].instance[=].sopClass = urn:ietf:rfc:3986#urn:oid:1.2.840.10008.5.1.4.1.1.128
* series[=].instance[=].number = 1
* series[=].instance[=].title = "DERIVED\\SECONDARY\\OTHER\\CSA MPR\\CSAMANIPULATED"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b> Positron emission tomography </b>
	</h3>
    <p>
		<b>識別碼(official)</b>：urn:oid:2.16.886.103.102695.312603252934799756197864329946 <br />
        <b>識別碼(usual)</b>：a142485449496602a142485449496602
	</p>
    <p>
		<b>狀態</b>：Available<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/valueset-imagingstudy-status.html\">ImagingStudyStatus</a>#available) </span>
	</p>
    <p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
	<p>
		<b>檢查開始日期與時間</b>：1996-05-14T12:56:26+08:00
	</p> 
    	
    <p>
		<b>影像描述</b>：PET WB &amp; reg Restag Hd &amp; Nck Ca
	</p> 

    <blockquote>
	<p><b>系列(series)實例</b>：</p>
    <p>
    <b>DICOM系列實例UID</b>：2.16.886.103.102695.308323898107272214360495873340 <br />
    <b>數字識別碼</b>： 607 <br />
	<b>所使用的成像儀器</b>： Positron emission tomography <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://dicom.nema.org/resources/ontology/DCM\">CID 29 Acquisition Modality</a>#PT) </span><br />
	<b>摘要</b>：CORONALS [MPR Range] <br />
    <b>身體部位</b>：HEADNECK
	</p>
            <blockquote>
            <p><b>SOP實例(1)</b>：</p>
            <p>
            <b>UID</b>：2.16.886.103.102695.204472109808701101171643476459 <br />
            <b>DICOM class 類型</b>： urn:oid:1.2.840.10008.5.1.4.1.1.128 <br />
            <b>序號</b>： 1 <br />
            <b>實例的描述</b>： DERIVED&amp;SECONDARY&amp;OTHER&amp;CSA MPR&amp;CSAMANIPULATED <br />
            </p>
            </blockquote>

            <blockquote>
            <p><b>SOP實例(2)</b>：</p>
            <p>
            <b>UID</b>：2.16.886.103.102695.211371491775300429718822081671 <br />
            <b>DICOM class 類型</b>： urn:oid:1.2.840.10008.5.1.4.1.1.2<br />
            <b>序號</b>： 2 <br />
            <b>實例的描述</b>： DERIVED&amp;SECONDARY&amp;LOCALIZER&amp;CT_SOM5 TOP&amp;CSA RESAMPLED <br />
            </p>
            </blockquote>

            <blockquote>
            <p><b>SOP實例(3)</b>：</p>
            <p>
            <b>UID</b>：2.16.886.103.102695.157108816098836770904535991652 <br />
            <b>DICOM class 類型</b>： urn:oid:1.2.840.10008.5.1.4.1.1.2 <br />
            <b>序號</b>： 3 <br />
            <b>實例的描述</b>：ORIGINAL&amp;PRIMARY&amp;AXIAL&amp;CT_SOM5 SPI <br />
            </p>
            </blockquote>

    </blockquote>
</div>"




---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/ImagingStudy-img-sm-example.fsh

Instance: img-sm-example
InstanceOf: TWCoreImagingStudy
Usage: #example
* identifier[0].use = #official
* identifier[=].system = "urn:dicom:uid"
* identifier[=].value = "urn:oid: 2.16.886.103.102695.293755960071087971037154104444119427201"
* identifier[+].use = #usual
* identifier[=].value = "A20210527083803"
* identifier[+].use = #secondary
* identifier[=].value = "D1M_18S_1"
* status = #available
* subject = Reference(Patient/pat-example)
* numberOfSeries = 1
* numberOfInstances = 6
* started = "2021-05-27T00:00:00+08:00"
* series.uid = "2.16.886.103.102695.7661805881534741258144674448294792877"
* series.modality = http://dicom.nema.org/resources/ontology/DCM#SM "Slide Microscopy"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>Slide Microscopy</b>
	</h3>
	<p>
		<b>識別碼(official)</b>：urn:oid: 2.16.886.103.102695.293755960071087971037154104444119427201 <br />
        <b>識別碼(usual)</b>：A20210527083803
        <b>識別碼(secondary)</b>：D1M_18S_1
	</p>
	<p>
		<b>狀態</b>：Available<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/valueset-imagingstudy-status.html\">ImagingStudyStatus</a>#available) </span>
	</p>
    <p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
    <p>
        <b>檢查相關Series的數量</b>：1
    </p>
    <p>
        <b>檢查相關Instances的數量</b>：6
    </p>
	<p>
		<b>檢查開始日期與時間</b>：2021-05-27T00:00:00+08:00
	</p> 	
    <blockquote>
	<p><b>系列(series)實例</b>：</p>
    <p>
    <b>DICOM系列實例UID</b>：2.16.886.103.102695.7661805881534741258144674448294792877 <br />
	<b>所使用的成像儀器</b>： Slide Microscopy <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://dicom.nema.org/resources/ontology/DCM\">CID 29 Acquisition Modality</a>#SM) </span><br />
	</p>
    </blockquote>
</div>"





---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Immunization-imm-example.fsh

Alias: $cvx = http://hl7.org/fhir/sid/cvx
Alias: $ndc = http://hl7.org/fhir/sid/ndc

Instance: imm-example
InstanceOf: TWCoreImmunization
Usage: #example
* status = #completed
* vaccineCode.coding[0] = $cvx#197 "influenza, high-dose, quadrivalent"
* vaccineCode.coding[+] = $ndc#49281012165 "FLUZONE High-Dose Quadrivalent Northern Hemisphere, 10 SYRINGE, GLASS in 1 PACKAGE (49281-121-65) > .7 mL in 1 SYRINGE, GLASS (49281-121-88) (package)"
* vaccineCode.text = "influenza, high-dose, quadrivalent"
* patient = Reference(Patient/pat-example) 
* encounter = Reference(Encounter/enc-example) 
* occurrenceDateTime = "2020-11-19T12:46:57-08:00"
* primarySource = false
* location = Reference(Location/loc-ent-example) 


---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Location-loc-ent-example.fsh

Instance: loc-ent-example
InstanceOf: TWCoreLocation
Usage: #example
* status = #active
* name = "衛生福利部臺北醫院耳鼻喉科"
* description = "診治各種耳、鼻、咽、喉等上呼吸道疾病及頭頸部腫瘤 , 包括 : 感冒、咳嗽、頭痛、喉嚨痛、聲音沙啞、吞嚥困難、呼吸不順、鼻塞、鼻竇炎、鼻過敏、鼻息肉、扁桃腺肥大、耳鳴、耳痛、中耳炎、顏面神經麻痺、顎顳關節痛、口乾舌燥、打鼾、語言障礙、食道異物取出、頭頸部腫瘤、舌及口咽腫瘤手術"
* mode = #kind
* type = http://terminology.hl7.org/CodeSystem/v3-RoleCode#ENT "Otorhinolaryngology clinic"
* managingOrganization =  Reference(Organization/org-hosp-example)
* telecom.system = http://hl7.org/fhir/contact-point-system#phone
* telecom.value = "02-2276-5566"
* telecom.use = http://hl7.org/fhir/contact-point-use#work
* address.use = http://hl7.org/fhir/address-use#work
* address.type = http://hl7.org/fhir/address-type#both
* address.text = "242新北市新莊區思源路127號"
* address.line = "思源路127號"
* address.city = "新莊區"
* address.district = "新北市"
* address.postalCode = "242"
* position.longitude = 25.043085494729105
* position.latitude = 121.45941895179722
* hoursOfOperation.daysOfWeek[0] = #mon
* hoursOfOperation.daysOfWeek[+] = #tue
* hoursOfOperation.daysOfWeek[+] = #wed
* hoursOfOperation.daysOfWeek[+] = #thu
* hoursOfOperation.daysOfWeek[+] = #fri
* hoursOfOperation.allDay = true
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>衛生福利部臺北醫院耳鼻喉科</b>
	</h3>
        
	<p>
		<b>地點狀態</b>: Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-location-status.html\">LocationStatus</a>#active) </span>
	</p>
	<p>
		<b>地點類別</b>: Kind <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/valueset-location-mode.html\">LocationMode</a>#kind) </span>
	</p>
	<p>
		<b>地點類型</b>: Otorhinolaryngology clinic <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"https://terminology.hl7.org/CodeSystem-v3-RoleCode.html\">RoleCode</a>#ENT) </span>
	</p>
    <p>
		<b>地點資訊</b>: 診治各種耳、鼻、咽、喉等上呼吸道疾病及頭頸部腫瘤 , 包括 : 感冒、咳嗽、頭痛、喉嚨痛、聲音沙啞、吞嚥困難、呼吸不順、鼻塞、鼻竇炎、鼻過敏、鼻息肉、扁桃腺肥大、耳鳴、耳痛、中耳炎、顏面神經麻痺、顎顳關節痛、口乾舌燥、打鼾、語言障礙、食道異物取出、頭頸部腫瘤、舌及口咽腫瘤手術。
	</p>
	<p>
		<b>負責維護地點的機構</b>: <a href=\"Organization-org-hosp-example.html\">Organization/org-hosp-example</a> \"衛生福利部臺北醫院\"
	</p>
	<p>
		<b>聯絡方式</b>：Phone<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span><br/>
	</p>
	<p>
		<b>聯絡電話（work）</b>：02-2276-5566
  	</p>
	<p>
		<b>聯絡地址（work）</b>：242新北市新莊區思源路127號
  	</p>
    <p>
		<b>地點開放時間</b>：週一 ～ 週五 ， 全天
  	</p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Location-loc-er-example.fsh

Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode

Instance: loc-er-example
InstanceOf: TWCoreLocation
Usage: #example
* status = #active
* name = "衛生福利部臺北醫院急診室"
* description = "24小時全年無休提供緊急醫療服務，醫護人員給予整體性、個別性之醫療照護服務。"
* mode = #kind
* type = $v3-RoleCode#ER "Emergency room"
* telecom.system = #phone
* telecom.value = "02-2276-5566"
* telecom.use = #work
* address.use = #work
* address.type = #both
* address.text = "242新北市新莊區思源路127號"
* address.line = "思源路127號"
* address.city = "新莊區"
* address.district = "新北市"
* address.postalCode = "242"
* position.longitude = 25.043085494729105
* position.latitude = 121.45941895179722
* managingOrganization = Reference(Organization/org-hosp-example)
* hoursOfOperation.daysOfWeek[0] = #mon
* hoursOfOperation.daysOfWeek[+] = #tue
* hoursOfOperation.daysOfWeek[+] = #wed
* hoursOfOperation.daysOfWeek[+] = #thu
* hoursOfOperation.daysOfWeek[+] = #fri
* hoursOfOperation.daysOfWeek[+] = #sat
* hoursOfOperation.daysOfWeek[+] = #sun
* hoursOfOperation.allDay = true
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>衛生福利部臺北醫院急診室位置</b>
	</h3>
        
	<p>
		<b>地點狀態</b>: Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-location-status.html\">LocationStatus</a>#active) </span>
	</p>
    <p>
		<b>地點類別</b>: Kind <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/location-mode\">LocationMode</a>#kind) </span>
	</p>
	<p>
		<b>地點類型</b>: Emergency room <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"https://terminology.hl7.org/CodeSystem-v3-RoleCode.html\">RoleCode</a>#ER) </span>
	</p>
    <p>
		<b>地點資訊</b>: 24小時全年無休提供緊急醫療服務，醫護人員給予整體性、個別性之醫療照護服務。
	</p>
	<p>
		<b>負責維護地點的機構</b>: <a href=\"Organization-org-hosp-example.html\">Organization/org-hosp-example</a> \"衛生福利部臺北醫院\"
	</p>
	<p>
		<b>聯絡方式</b>：Phone<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span><br/>
	</p>
	<p>	
		<b>聯絡電話（work）</b>：02-2276-5566
  	</p>
	<p>
		<b>聯絡地址（work）</b>：242新北市新莊區思源路127號
  	</p>
    <p>
		<b>地點開放時間</b>：週一 ～ 週五 ， 全天
  	</p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Location-loc-hrad-example.fsh

Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode

Instance: loc-hrad-example
InstanceOf: TWCoreLocation
Usage: #example
* status = #active
* name = "衛生福利部臺北醫院X光室"
* description = "執行X光放射線之診療業務。"
* mode = #instance
* type = $v3-RoleCode#HRAD "radiology unit"
* telecom.system = #phone
* telecom.value = "02-2276-5566"
* telecom.use = #work
* address.use = #work
* address.type = #both
* address.text = "242新北市新莊區思源路127號"
* address.line = "思源路127號"
* address.city = "新莊區"
* address.district = "新北市"
* address.postalCode = "242"
* position.longitude = 25.043085494729105
* position.latitude = 121.45941895179722
* managingOrganization = Reference(Organization/org-hosp-example)
* hoursOfOperation.daysOfWeek[0] = #mon
* hoursOfOperation.daysOfWeek[+] = #tue
* hoursOfOperation.daysOfWeek[+] = #wed
* hoursOfOperation.daysOfWeek[+] = #thu
* hoursOfOperation.daysOfWeek[+] = #fri
* hoursOfOperation.allDay = false
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>衛生福利部臺北醫院X光室位置</b>
	</h3>
        
	<p>
		<b>地點狀態</b>: Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-location-status.html\">LocationStatus</a>#active) </span>
	</p>
    <p>
		<b>地點類別</b>: Instance <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/location-mode\">LocationMode</a>#instance) </span>
	</p>
	<p>
		<b>地點類型</b>: radiology unit <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"https://terminology.hl7.org/CodeSystem-v3-RoleCode.html\">RoleCode</a>#HRAD) </span>
	</p>
    <p>
		<b>地點資訊</b>: 執行X光放射線之診療業務。
	</p>
	<p>
		<b>負責維護地點的機構</b>: <a href=\"Organization-org-hosp-example.html\">Organization/org-hosp-example</a> \"衛生福利部臺北醫院\"
	</p>
	<p>
		<b>聯絡方式</b>：Phone<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span><br/>
	</p>
	<p>	
		<b>聯絡電話（work）</b>：02-2276-5566
  	</p>
	<p>
		<b>聯絡地址（work）</b>：242新北市新莊區思源路127號
  	</p>
    <p>
		<b>地點開放時間</b>：週一 ～ 週五 
  	</p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Location-loc-oph-example.fsh

Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode

Instance: loc-oph-example
InstanceOf: TWCoreLocation
Usage: #example
* status = #active
* name = "明捷眼科診所"
* description = "專精於無痛白內障吸出術，及近視控制角膜塑型術"
* mode = #kind
* type = $v3-RoleCode#OPH "Opthalmology clinic"
* telecom.system = #phone
* telecom.value = "02-2276-7788"
* telecom.use = #work
* hoursOfOperation.daysOfWeek[0] = #mon
* hoursOfOperation.daysOfWeek[+] = #tue
* hoursOfOperation.daysOfWeek[+] = #wed
* hoursOfOperation.daysOfWeek[+] = #thu
* hoursOfOperation.daysOfWeek[+] = #fri
* hoursOfOperation.allDay = false
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>明捷眼科診所位置</b>
	</h3>
        
	<p>
		<b>地點狀態</b>: Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-location-status.html\">LocationStatus</a>#active) </span>
	</p>
    <p>
		<b>地點類別</b>: Kind <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/location-mode\">LocationMode</a>#kind) </span>
	</p>
	<p>
		<b>地點類型</b>: Opthalmology clinic <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"https://terminology.hl7.org/CodeSystem-v3-RoleCode.html\">RoleCode</a>#OPH) </span>
	</p>
    <p>
		<b>地點資訊</b>: 專精於無痛白內障吸出術，及近視控制角膜塑型術。
	</p>
	<p>
		<b>聯絡方式</b>：Phone<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span><br/>
	</p>
	<p>		
		<b>聯絡電話（work）</b>：02-2276-7788
  	</p>
    <p>
		<b>地點開放時間</b>：週一 ～ 週五
  	</p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Location-loc-pharm-example.fsh

Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode

Instance: loc-pharm-example
InstanceOf: TWCoreLocation
Usage: #example
* status = #active
* name = "第二藥局"
* description = "提供各式人氣營養保健、樂齡輔具、醫美保養、母嬰用品等"
* mode = #kind
* type = $v3-RoleCode#PHARM "Pharmacy"
* telecom.system = #phone
* telecom.value = "02-2276-7777"
* telecom.use = #work
* hoursOfOperation.daysOfWeek[0] = #mon
* hoursOfOperation.daysOfWeek[+] = #tue
* hoursOfOperation.daysOfWeek[+] = #wed
* hoursOfOperation.daysOfWeek[+] = #thu
* hoursOfOperation.daysOfWeek[+] = #fri
* hoursOfOperation.allDay = false
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>第二藥局位置</b>
	</h3>
        
	<p>
		<b>地點狀態</b>: Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-location-status.html\">LocationStatus</a>#active) </span>
	</p>
    <p>
		<b>地點類別</b>: Kind <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/location-mode\">LocationMode</a>#kind) </span>
	</p>
	<p>
		<b>地點類型</b>: Pharmacy <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"https://terminology.hl7.org/CodeSystem-v3-RoleCode.html\">RoleCode</a>#PHARM) </span>
	</p>
    <p>
		<b>地點資訊</b>: 提供各式人氣營養保健、樂齡輔具、醫美保養、母嬰用品等。
	</p>
	<p>
		<b>聯絡方式</b>：Phone<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span><br/>
	</p>
	<p>
		<b>聯絡電話（work）</b>：02-2276-7777
  	</p>
    <p>
		<b>地點開放時間</b>：週一 ～ 週五
  	</p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Media-media-example.fsh

Instance: media-example
InstanceOf: TWCoreMedia
Usage: #example
* status = http://hl7.org/fhir/event-status#completed
* type = http://terminology.hl7.org/CodeSystem/media-type#image
* subject = Reference(Patient/pat-example) "陳加玲"
//* modality = http://dicom.nema.org/resources/ontology/DCM#MR "Magnetic Resonance"
* view = http://snomed.info/sct#260442004 "Erect lateral"
* view.text = "Erect lateral"
* createdDateTime = "2023-11-04T15:30:00Z"
* issued = "2023-11-04T16:00:00Z"
* operator = Reference(Practitioner/pra-phc-example)
* reasonCode = http://snomed.info/sct#151004 "Gonococcal meningitis"
* bodySite = http://snomed.info/sct#3295003 "Ventral anterior nucleus"
* deviceName = "MAGNETOM Skyra 3 Tesla"
* height = 512
* width = 512
* content.id = "image1"
* content.contentType = #image/png
* content.data = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAqFBMVEX8whv///8vLy/KysqWlpZiVCpiYmKVeCTvuBx7ZSfjsB78xCP8z0z+5JqviiL94IzInR/+6rBVSis7Ny5IQCz91WH8yDT+5qL+/PbUpR3+8MVWVlb92W/912iigSNuXCj92nfl5eV9fX27kyCIbiX/8s3/+emjo6PX19f93oP+7Ln+4pT/9NT++Ob8yz1vb2+9vb2JiYk8PDzy8vL8z0tJSUk1My7+6KrnRMnfAAAGG0lEQVR4nO2bbXuiOhCGUwVRAUURpajV2korYre72z3+/392SCAIZBKCgH7x+dBrZSNzO3mbTBL0dGehB8AD4AHwALjqW+5pP1mMD9uVE2m1PYwXk/3JvQ2AH4ydOQI1d46B3yqAG2y/YNsXfW2DSq6QB9iPjTLjVMZ43zhAuNVlzWPp21OjAIFTxXosJ2gKwDVLKx7WlynRGsoBAk6bl9G83AtlAKcrnJ+VU9YWSgAWlZoeJH1RA8Cv+fMTJwgHJxGAV6P2s5qLRgUBQFDb/VS6oC3yAY5Nmcc6VgZwV03aR2hVFWDdrH0+AQzgNtL883LgYREGaMF+RCAP0HD9U4G1AAEc2rGP0FgOYNKWfYSA8YAFCBsbf1jpYTmAe+XkL6cvpiswAC01QCqmIRYBvHbts82gAOA3NAHyNfeFAI2PwKzWIoB9+/YR2gsAfm4BYPABzrewj9CEB+C23gJjzV0OgCn4kqVpG1XT3krfPhxp7+pAe3kWlDFhAL4DhgO7Q7WxROZH07TgTOvzSmVdkAEYc4r3B52c1CHvxW+zXEH7hVfQBAE4DnjOvxW/mFMR78WCHZXjhDkEwJmF32zmtZ3OCCo5AApOOQQTAABOPzxT+9N3TdNUAQG1b2+igoOZmMBgAeBBsJ/Y15J672vxA5tp5C9J06NoVgK7gV0QMgBbsJwW/4yMuWHczgfFkjbzOEGC++O2CODDcZDKurFPCNRiSWIs3+xH5BncbXW3AMAZhPA77EK3I9WiFUvOAHcT/3E67aIAwMuAvc+mzE94ntrvTMHhZjZgGpw2m/LGTiMPcOIUa1F+DqDRpbCczByAdA6yORlZgDvUAEKnDMDiHgDnDEArq+EyrS8AbourMb7isYgAtL4ageWlAK2tx8UapwA3icZZGRTAvY/9uBEgbhPQoth2ZHHjP2kNrTdtoLLzBIrXSIg3DmuXwE6N4vGIxbJEoXbephVZxYG8mgZ0TACB4tEY8UaBNPpiZKt8QQFkEioBNtYJABgOQyFmHTERTKSvGMAH3ThqGICNICK5BCAAAYb4W78+lF2vV8Nsr/dLUX7jf4GBiUcAOLEADv3+keEaE3x0v5VIv3tL8t4lYGzZi//ucMHv7gcul37fBm2YBICTliLd4Ju+oEuj2C5+TD88KdEHJf3UKRYkAK/4MdQJSGyMuMFIXAcNAOzwYzg2NggAbyokHfG1NgBxANQJI+kYgBsNWdQF9QCIA8DFJMKRKRLMxdPkhbUAPvFDm5cq8CIAfjhGXLCsCUD6CzdRcI4AeHkJlLQCpRaAImgBCIcESJQcJh2h060BQEpzugDWKgIQLQnIWPBneTXA8g9+BI7CsZwIQJieJ5Xw52oAYn/GTVbh6QhxhwGiIZ1frwMgPUAURehPqCQeoyma6wF4Q0AsF8GT8UXJtPxRGUCJv8jtgbF8FJYAUAKlIkBin0lkFBQiOBoACJafFQC6Sxn/R/KQxCYdTRXuXiUBXncdKf9HCpDMwnhIM8C7TwmAT2p+JhFFT5AoRX5RmoVdKiUAShosbQT9P9UCSSZnrEsaXAxANSvP7GMdkWAuymuUTVovd1HU9zcF+NvtRuFi5v/tstZPNUbyK+P+C5M350iwVVDUoQJAJGsjYV6Vcz4F2FYBiNwwGvCXX53Of+qo2nL2gK7YK36OVruA8elGE27nNAdANLReNLyDQJbOmnbtOv4g2w3bkikxF7SqoHQ6blk+uk+SkgrHhHetgwCvDe/oAocsTk93SdRi6ac4R3SvSiDHDEmmtMWjSyKR8yxxun5yh1rQ4+3bZMsmvNHZhYvmyd4p3bY73XjXyKDnjS+b1/WPEMtLP6dmM+cH/JZPcV20yhxmyp2iCW8yJjm5I3WFk1Re603B8PIWmdN0FW8yVJO+ZQ4UAicq/WvvE5TpZwEcrIVP1bbgBuDHCwDIhZoGx6Y5/+qN6HT9fmw04AhdfOem7IbF/si71iT1y51j2YUfmVs2vmeujIoYc2NlejLXruQvOrlhYB6cn5JK0X/WBzMI5S9bVb/s5oZeMDmbR3zXbe0YhrPGt92O5nkSeHBDbxigYT0AHgAPgAfA//t0Zd4BDU/jAAAAAElFTkSuQmCC"
* content.creation = "2023-12-28"
* note.text = "腦部MRI"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
    <h3>
		<b>腦部MRI</b>
	</h3>
        
	<p>
		<b>狀態</b>: Completed <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-event-status.html\">EventStatus</a>#completed) </span>
	</p>
    	
    <p>
		<b>多媒體種類</b>: Image <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/valueset-media-type.html\">MediaType</a>#image) </span>
	</p>

    <p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
        
    <p>
		<b>影像檢視</b>: Erect lateral <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#260442004) </span>
	</p>

    <p>
		<b>記錄資料收集日期與時間</b>: 2023-11-04T15:30:00
	</p>

    <p>
		<b>資料發行日期與時間</b>: 2023-11-04T16:00:00
	</p>

    <p>
        <b>執行者</b>：<a href=\"Practitioner-pra-radio-example.html\">Practitioner/pra-radio-example</a> \"王曉明\"
    </p>

    <p>
        <b>記錄產生的原因識別</b>：Gonococcal meningitis <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#151004) </span>
    </p>

    <p>
        <b>記錄的身體部位</b>：Ventral anterior nucleus <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#3295003) </span>
    </p>

    <p>
        <b>記錄使用的設備</b>：MAGNETOM Skyra 3 Tesla
    </p>

    <p><b>影像資料：</b></p>
    <blockquote>
    <p><b>ID</b>：image1</p>
    <p><b>資料種類</b>：image/png</p>
    <p><b>影像長</b>：512</p>
    <p><b>影像寬</b>：512</p>
    <p><b>data</b>：(base64 data - 1800 bytes)</p>
    <p><b>影像產生日期</b>：2023-12-28</p>
    </blockquote>
    
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Medication-med-example.fsh

Instance: med-example
InstanceOf: TWCoreMedication
Usage: #example
* code = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-fda-tw#衛署藥輸字第025485號 "阿立批挫"
* code.text = "阿立批挫"
* form = http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm#POWD
* form.text = "粉"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>藥品的詳細資料</b>
	</h3>
	<p>
		<b>藥品</b>：阿立批挫 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"CodeSystem-medication-fda-tw.html\">臺灣藥品及醫療器材代碼值集</a>#衛署藥輸字第025485號) </span>
	</p>
	<p>
		<b>藥品劑型</b>：粉 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm\">Orderable Drug Form</a>#POWD) </span>
	</p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/MedicationDispense-med-dis-drop-example.fsh

Alias: $medicationdispense-category = http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category
Alias: $medication-fda-tw = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-fda-tw

Instance: med-dis-drop-example
InstanceOf: TWCoreMedicationDispense
Usage: #example
* status = http://hl7.org/fhir/R4/codesystem-medicationdispense-status#completed 
* category = $medicationdispense-category#inpatient 
* medicationCodeableConcept = $medication-fda-tw#衛署藥輸字第005728號  "每瞳令-普益點眼液"
* subject = Reference(Patient/pat-example) 
* context = Reference(Encounter/enc-example)
* performer.actor = Reference(Practitioner/pra-phc-example)
* type = http://terminology.hl7.org/CodeSystem/v3-ActCode#DF "Daily Fill"
* quantity.value = 30 
* quantity.unit = "Ophthalmic Drops"
* quantity.system = "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm"
* quantity.code = #OPDROP
* daysSupply.value = 30
* daysSupply.unit = "days"
* whenPrepared = "2022-08-01T11:45:00+08:00"
* whenHandedOver = "2022-08-01T12:00:00+08:00"
* dosageInstruction.text = "每日2次，每次1滴或1-2滴"
* dosageInstruction.timing.repeat.frequency = 2
* dosageInstruction.timing.repeat.period = 1
* dosageInstruction.timing.repeat.periodUnit = http://unitsofmeasure.org#d
* substitution.wasSubstituted = false
* substitution.type.coding = http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution#N "none"
* substitution.reason.coding = http://terminology.hl7.org/CodeSystem/v3-ActReason#FP "formulary policy"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>每瞳令-普益點眼液藥品配藥資料</b>
	</h3>
	<p>
		<b>配藥的狀態</b>：Completed <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/valueset-medicationdispense-status.html\">MedicationDispense Status Codes</a>#completed) </span>
	</p>

    <p>
		<b>配藥的分類</b>： Inpatient <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-medicationdispense-category.html\">MedicationDispense Category Codes</a>#inpatient) </span>
	</p>

	<p>
		<b>配藥的類型</b>：Daily Fill <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/implement/standards/fhir/R4/v3/ActPharmacySupplyType/vs.html\">V3 Value SetActPharmacySupplyType</a>#DF) </span>
	</p>

    <p>
		<b>藥品</b>：每瞳令-普益點眼液 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"CodeSystem-medication-fda-tw.html\">臺灣藥品許可證</a>#衛署藥輸字第005728號) </span>
	</p>

	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>

	<p>
		<b>就醫資料</b>：<a href=\"Encounter-enc-example.html\">Encounter/enc-example</a>
	</p>

    <p>
		<b>配藥者</b>：<a href=\"Practitioner-pra-phc-example.html\">Practitioner/pra-phc-example</a> \"陳耀詩\"
	</p>

    <blockquote>
	<p><b>配藥資料</b>：</p>
    <p>
    <b>藥品總劑量</b>：1 Ophthalmic Drops <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm\">OrderableDrugForm</a>#OPDROP) </span> <br />
    <b>藥品天數</b>：30 days <br />
	<b>藥品使用方法</b>：每日2次，每次1滴或1-2滴 <br />
	<b>藥品包裝和審核時間</b>：2022-08-01T11:45:00 <br />
    <b>藥品發放的時間</b>：2022-08-01T12:00:00
	</p>
    </blockquote>

	<blockquote>
	<p><b>藥品替代資料</b>：</p>
    <p>
    <b>配藥時是否進行了藥品替代</b>： 否 <br />
    <b>配藥是否與處方要求不同</b>：none <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution\">SubstanceAdminSubstitution</a>#N) </span> <br />
	<b>替代原因</b>：formulary policy <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v3-ActReason\">ActReason</a>#FP) </span>
	</p>
    </blockquote>
</div>"



---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/MedicationDispense-med-dis-inflamed-example.fsh

Alias: $medicationdispense-category = http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category
Alias: $medication-fda-tw = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-fda-tw
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $v3-substanceAdminSubstitution = http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution
Alias: $v3-ActReason = http://terminology.hl7.org/CodeSystem/v3-ActReason

Instance: med-dis-inflamed-example
InstanceOf: TWCoreMedicationDispense
Usage: #example
* status = #completed
* category = $medicationdispense-category#inpatient
* medicationCodeableConcept = $medication-fda-tw#內衛藥製字第006008號 "鹽酸四環素眼藥膏"
* medicationCodeableConcept.text = "鹽酸四環素眼藥膏"
* subject = Reference(Patient/pat-example)
* context = Reference(Encounter/enc-example)
* performer.actor = Reference(Practitioner/pra-phc-example)
* type = $v3-ActCode#DF "Daily Fill"
* quantity.value = 1
* quantity.unit = "Topical Cream"
* quantity.system = "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm"
* quantity.code = http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm#TOPCRM 
* daysSupply.value = 7
* daysSupply.unit = "days"
* whenPrepared = "2022-08-01T09:30:00+08:00"
* whenHandedOver = "2022-08-01T10:00:00+08:00"
* dosageInstruction.text = "每天早晚擦拭傷口處"
* dosageInstruction.timing.repeat.frequency = 2
* dosageInstruction.timing.repeat.period = 1
* dosageInstruction.timing.repeat.periodUnit = #d
* substitution.wasSubstituted = false
* substitution.type = $v3-substanceAdminSubstitution#N "none"
* substitution.reason = $v3-ActReason#FP "formulary policy"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>鹽酸四環素眼藥膏藥品配藥資料</b>
	</h3>
	<p>
		<b>配藥的狀態</b>：Completed <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-medicationdispense-status.html\">MedicationDispense Status Codes</a>#completed) </span>
	</p>

    <p>
		<b>配藥的分類</b>： Inpatient <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-medicationdispense-category.html\">MedicationDispense Category Codes</a>#inpatient) </span>
	</p>

	<p>
		<b>配藥的類型</b>：Daily Fill <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/implement/standards/fhir/R4/v3/ActPharmacySupplyType/vs.html\">V3 Value SetActPharmacySupplyType</a>#DF) </span>
	</p>

    <p>
		<b>藥品</b>：鹽酸四環素眼藥膏 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"CodeSystem-medication-fda-tw.html\">臺灣藥品許可證</a>#內衛藥製字第006008號) </span>
	</p>

	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>

	<p>
		<b>就醫資料</b>：<a href=\"Encounter-enc-example.html\">Encounter/enc-example</a>
	</p>

    <p>
		<b>配藥者</b>：<a href=\"Practitioner-pra-phc-example.html\">Practitioner/pra-phc-example</a> \"陳耀詩\"
	</p>

    <blockquote>
	<p><b>配藥資料</b>：</p>
    <p>
    <b>藥品總劑量</b>：1 Topical Cream <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm\">OrderableDrugForm</a>#TOPCRM) </span> <br />
    <b>藥品天數</b>：7 days <br />
	<b>藥品使用方法</b>：每天早晚擦拭傷口處 <br />
	<b>藥品包裝和審核時間</b>：2022-08-01T09:30:00 <br />
    <b>藥品發放的時間</b>：2022-08-01T10:00:00
	</p>
    </blockquote>

	<blockquote>
	<p><b>藥品替代資料</b>：</p>
    <p>
    <b>配藥是否與處方要求不同</b>：none <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution\">SubstanceAdminSubstitution</a>#N) </span> <br />
	<b>替代原因</b>：formulary policy <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v3-ActReason\">ActReason</a>#FP) </span>
	</p>
    </blockquote>
</div>"



---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/MedicationDispense-med-dis-injection-example.fsh

Alias: $medicationdispense-category = http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category
Alias: $medication-fda-tw = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-fda-tw
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $v3-substanceAdminSubstitution = http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution
Alias: $v3-ActReason = http://terminology.hl7.org/CodeSystem/v3-ActReason

Instance: med-dis-injection-example
InstanceOf: TWCoreMedicationDispense
Usage: #example
* status = #completed
* category = $medicationdispense-category#inpatient
* medicationCodeableConcept = $medication-fda-tw#衛部菌疫輸字第001080號 "爽胰達注射劑100單位+50微克"
* medicationCodeableConcept.text = "爽胰達注射劑100單位+50微克"
* subject = Reference(Patient/pat-example)
* context = Reference(Encounter/enc-example)
* performer.actor = Reference(Practitioner/pra-phc-example)
* type = $v3-ActCode#DF "Daily Fill"
* quantity.value = 1
* quantity.unit = "Intravenous Solution"
* quantity.system = "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm"
* quantity.code = http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm#IVSOL
* daysSupply.value = 3
* daysSupply.unit = "days"
* whenPrepared = "2022-08-01T11:45:00+08:00"
* whenHandedOver = "2022-08-01T12:00:00+08:00"
* dosageInstruction.text = "每日注射一次，於餐前一小時內注射，建議固定在同一餐的餐前注射"
* dosageInstruction.timing.repeat.frequency = 1
* dosageInstruction.timing.repeat.period = 1
* dosageInstruction.timing.repeat.periodUnit = #d
* substitution.wasSubstituted = false
* substitution.type = $v3-substanceAdminSubstitution#N "none"
* substitution.reason = $v3-ActReason#FP "formulary policy"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>爽胰達注射劑100單位50微克藥品配藥資料</b>
	</h3>
	<p>
		<b>配藥的狀態</b>：Completed <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-medicationdispense-status.html\">MedicationDispense Status Codes</a>#completed) </span>
	</p>

    <p>
		<b>配藥的分類</b>： Inpatient <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-medicationdispense-category.html\">MedicationDispense Category Codes</a>#inpatient) </span>
	</p>

	<p>
		<b>配藥的類型</b>：Daily Fill <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/implement/standards/fhir/R4/v3/ActPharmacySupplyType/vs.html\">V3 Value SetActPharmacySupplyType</a>#DF) </span>
	</p>

    <p>
		<b>藥品</b>：爽胰達注射劑100單位50微克 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"CodeSystem-medication-fda-tw.html\">臺灣藥品許可證</a>#衛部菌疫輸字第001080號) </span>
	</p>

	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>

	<p>
		<b>就醫資料</b>：<a href=\"Encounter-enc-example.html\">Encounter/enc-example</a>
	</p>

    <p>
		<b>配藥者</b>：<a href=\"Practitioner-pra-phc-example.html\">Practitioner/pra-phc-example</a> \"陳耀詩\"
	</p>

    <blockquote>
	<p><b>配藥資料</b>：</p>
    <p>
    <b>藥品總劑量</b>：1 Intravenous Solution <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm\">OrderableDrugForm</a>#IVSOL) </span> <br />
    <b>藥品天數</b>：3 days <br />
	<b>藥品使用方法</b>：每日注射一次，於餐前一小時內注射，建議固定在同一餐的餐前注射 <br />
	<b>藥品包裝和審核時間</b>：2022-08-01T11:45:00 <br />
    <b>藥品發放的時間</b>：2022-08-01T12:00:00
	</p>
    </blockquote>

	<blockquote>
	<p><b>藥品替代資料</b>：</p>
    <p>
    <b>配藥是否與處方要求不同</b>：none <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution\">SubstanceAdminSubstitution</a>#N) </span> <br />
	<b>替代原因</b>：formulary policy <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v3-ActReason\">ActReason</a>#FP) </span>
	</p>
    </blockquote>
</div>"



---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/MedicationDispense-med-dis-ref-example.fsh

Alias: $medicationdispense-category = http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category
Instance: med-dis-ref-example
InstanceOf: TWCoreMedicationDispense
Usage: #example
* status = http://hl7.org/fhir/R4/codesystem-medicationdispense-status#completed 
* category = $medicationdispense-category#inpatient 
* medicationReference = Reference(Medication/med-example)
//* authorizingPrescription = Reference(MedicationRequest/med-req-ref-example)
* subject = Reference(Patient/pat-example) 
* context = Reference(Encounter/enc-example)
* performer.actor = Reference(Practitioner/pra-phc-example)
* type = http://terminology.hl7.org/CodeSystem/v3-ActCode#DF "Daily Fill"
* quantity.value = 30 
* quantity.unit = "TAB"
* quantity.system = "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm"
* quantity.code = http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm#TAB
* daysSupply.value = 30
* daysSupply.unit = "days"
* whenPrepared = "2022-08-01T07:00:14+08:00"
* whenHandedOver = "2022-08-01T08:15:14+08:00"
* dosageInstruction.text = "每天早上口服一次"
* dosageInstruction.timing.repeat.frequency = 1
* dosageInstruction.timing.repeat.period = 1
* dosageInstruction.timing.repeat.periodUnit = http://unitsofmeasure.org#d
* substitution.wasSubstituted = false
* substitution.type.coding = http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution#N "none"
* substitution.reason.coding = http://terminology.hl7.org/CodeSystem/v3-ActReason#FP "formulary policy"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>阿立批挫藥品配藥資料</b>
	</h3>
	<p>
		<b>配藥的狀態</b>：Completed <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/valueset-medicationdispense-status.html\">MedicationDispense Status Codes</a>#completed) </span>
	</p>

    <p>
		<b>配藥的分類</b>： Inpatient <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/valueset-medicationdispense-category.html\">MedicationDispense Category Codes</a>#inpatient) </span>
	</p>

	<p>
		<b>配藥的類型</b>：Daily Fill <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/implement/standards/fhir/R4/v3/ActPharmacySupplyType/vs.html\">V3 Value SetActPharmacySupplyType</a>#DF) </span>
	</p>

    <p>
		<b>藥品</b>：<a href=\"Medication-med-example.html\">Medication/med-example</a>
	</p>

	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>

	<p>
		<b>就醫資料</b>：<a href=\"Encounter-enc-example.html\">Encounter/enc-example</a>
	</p>

    <p>
		<b>配藥者</b>：<a href=\"Practitioner-pra-phc-example.html\">Practitioner/pra-phc-example</a> \"陳耀詩\"
	</p>

    <blockquote>
	<p><b>配藥資料</b>：</p>
    <p>
    <b>藥品總劑量</b>：30 Tablet <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm\">OrderableDrugForm</a>#TAB) </span> <br />
    <b>藥品天數</b>：30 days <br />
	<b>藥品使用方法</b>：每天早上口服一次 <br />
	<b>藥品包裝和審核時間</b>：2022-08-01T07:00:14 <br />
    <b>藥品發放的時間</b>：2022-08-01T08:15:14
	</p>
    </blockquote>

	<blockquote>
	<p><b>藥品替代資料</b>：</p>
    <p>
    <b>配藥時是否進行了藥品替代</b>： 否 <br />
    <b>配藥是否與處方要求不同</b>：none <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution\">SubstanceAdminSubstitution</a>#N) </span> <br />
	<b>替代原因</b>：formulary policy <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v3-ActReason\">ActReason</a>#FP) </span>
	</p>
    </blockquote>
</div>"



---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/MedicationRequest-med-req-cod-example.fsh

Instance: med-req-cod-example
InstanceOf: TWCoreMedicationRequest
Usage: #example
* identifier.system = "http://www.moi.gov.tw"
* identifier.value = "7077"
* status = #active
* statusReason = http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason#clarif
* intent = #order
* category = http://terminology.hl7.org/CodeSystem/medicationrequest-category#discharge
* medicationCodeableConcept = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-fda-tw#衛署藥輸字第025485號 "阿立批挫"
* medicationCodeableConcept.text = "阿立批挫"
* subject = Reference(Patient/pat-example)
* encounter = Reference(Encounter/enc-example)
* authoredOn = "2022-08-01T18:00:14+08:00"
* requester = Reference(Practitioner/pra-dr-example)
* reasonReference = Reference(Observation/obs-lab-example)
* dosageInstruction.timing.code = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-frequency-nhi-tw#PC
* dosageInstruction.timing.code.text = "三餐飯後"
* dosageInstruction.text = "三餐飯後，口服"
* dosageInstruction.route.coding = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-path-tw#PO
* dosageInstruction.doseAndRate.type = http://terminology.hl7.org/CodeSystem/dose-rate-type#ordered
* dispenseRequest.validityPeriod.start = "2022-08-01T18:00:14+08:00"
* dispenseRequest.validityPeriod.end = "2022-08-08T18:00:14+08:00"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>藥品請求的詳細資料</b>
	</h3>
	<p>
		<b>藥品請求的識別碼</b>：7077 （http://www.moi.gov.tw）
	</p>
	<p>
		<b>藥品請求的狀態</b>：Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason\">MedicationRequest Status Reason Codes</a>#clarif) </span>
	</p>
	<p>
		<b>藥品請求的意圖</b>：Order <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/CodeSystem/medicationrequest-intent\">medicationRequest Intent</a>#order) </span>
	</p>
	<p>
		<b>藥品請求的類別</b>：Discharge <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/medicationrequest-category\">MedicationRequest Category Codes</a>#discharge) </span>
	</p>
	<p>
		<b>藥品</b>：阿立批挫 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"CodeSystem-medication-fda-tw.html\">臺灣藥品及醫療器材代碼值集</a>#衛署藥輸字第025485號) </span>
	</p>
	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
	<p>
		<b>就醫事件</b>：<a href=\"Encounter-enc-example.html\">Encounter/enc-example</a>
	</p>
	<p>
		<b>最初請求時間</b>：2022-08-01 06:00:14-0500
	</p>
	<p>
		<b>提出藥品請求請求者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
	<p>
		<b>開立處方的原因</b>：<a href=\"Observation-obs-lab-example.html\">Observation/obs-lab-example</a>
	</p>
	<p>
		<b>處方可用以配藥的有效期限</b>：2022-08-01 06:00:14-0500 --&gt; 2022-08-08 06:00:14-0500
	</p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/MedicationRequest-med-req-ref-example.fsh

Instance: med-req-ref-example
InstanceOf: TWCoreMedicationRequest
Usage: #example
* identifier.system = "http://www.moi.gov.tw"
* identifier.value = "7077"
* status = #active
* statusReason = http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason#clarif
* intent = #order
* category = http://terminology.hl7.org/CodeSystem/medicationrequest-category#discharge
* medicationReference = Reference(Medication/med-example)
* subject = Reference(Patient/pat-example)
* encounter = Reference(Encounter/enc-example)
* authoredOn = "2022-08-01T18:00:14+08:00"
* requester = Reference(Practitioner/pra-dr-example)
* reasonReference = Reference(Observation/obs-lab-example)
* dosageInstruction.timing.code = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-frequency-nhi-tw#PC
* dosageInstruction.timing.code.text = "三餐飯後"
* dosageInstruction.text = "三餐飯後，口服"
* dosageInstruction.route.coding = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-path-tw#PO
* dosageInstruction.doseAndRate.type = http://terminology.hl7.org/CodeSystem/dose-rate-type#ordered
* dispenseRequest.validityPeriod.start = "2022-08-01T18:00:14+08:00"
* dispenseRequest.validityPeriod.end = "2022-08-08T18:00:14+08:00"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>藥品請求的詳細資料</b>
	</h3>
	<p>
		<b>藥品請求的識別碼</b>：7077 （http://www.moi.gov.tw）
	</p>
	<p>
		<b>藥品請求的狀態</b>：Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason\">MedicationRequest Status Reason Codes</a>#clarif) </span>
	</p>
	<p>
		<b>藥品請求的意圖</b>：Order <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/CodeSystem/medicationrequest-intent\">medicationRequest Intent</a>#order) </span>
	</p>
	<p>
		<b>藥品請求的類別</b>：Discharge <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/medicationrequest-category\">MedicationRequest Category Codes</a>#discharge) </span>
	</p>
	<p>
		<b>藥品</b>：<a href=\"Medication-med-example.html\">Medication/med-example</a>
	</p>
	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
	<p>
		<b>就醫事件</b>：<a href=\"Encounter-enc-example.html\">Encounter/enc-example</a>
	</p>
	<p>
		<b>最初請求時間</b>：2022-08-01 06:00:14-0500
	</p>
	<p>
		<b>提出藥品請求請求者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
	<p>
		<b>開立處方的原因</b>：<a href=\"Observation-obs-lab-example.html\">Observation/obs-lab-example</a>
	</p>
	<p>
		<b>處方可用以配藥的有效期限</b>：2022-08-01 06:00:14-0500 --&gt; 2022-08-08 06:00:14-0500
	</p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/MedicationStatement-med-sta-drop-example.fsh

Alias: $medication-fda-tw = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-fda-tw

Instance: med-sta-drop-example
InstanceOf: TWCoreMedicationStatement
Usage: #example
* status = #active
* category.coding = http://terminology.hl7.org/CodeSystem/medication-statement-category#outpatient "outpatient"
* category.text = "門診" 
* medicationCodeableConcept = $medication-fda-tw#衛署藥輸字第005728號 "每瞳令-普益點眼液"
* medicationCodeableConcept.text = "每瞳令-普益點眼液"
* subject = Reference(Patient/pat-example)
* effectiveDateTime = "2023-11-05T08:00:00+08:00"
* dateAsserted = "2023-11-05T10:00:00+08:00"
* reasonCode.coding = http://snomed.info/sct#232133000 "Simple myopia"
* reasonCode.text = "近視"
* note.text = "每日2次，每次1滴或1-2滴"
* dosage.text = "每日2次，每次1滴或1-2滴"
* dosage.route.coding = http://snomed.info/sct#54485002 "Ophthalmic use"
* dosage.route.text = "眼用"
* dosage.timing.repeat.frequency = 2
* dosage.timing.repeat.period = 1
* dosage.timing.repeat.periodUnit = #d
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">

	<h3>
		<b>近視的用藥聲明資料</b>
	</h3>
	<p>
		<b>用藥聲明的狀態</b>：Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-medication-statement-status.html\">Medication Status Codes</a>#active) </span>
	</p>

    <p>
		<b>用藥聲明的分類</b>： Outpatient <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-medication-statement-category.html\">MedicationDispense Category Codes</a>#outpatient) </span>
	</p>

    <p>
		<b>藥品</b>：每瞳令-普益點眼液 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"CodeSystem-medication-fda-tw.html\">臺灣食藥署藥品許可證</a>#衛署藥輸字第005728號) </span>
	</p>

	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
    <p>
	    <b>用藥的日期與時間</b>：2023-11-05T08:00:00
    </p>
    <p>
	    <b>提出聲明日期與時間</b>：2023-11-05T10:00:00
    </p>

	<p>
		<b>聲明原因</b>：近視(Simple myopia) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#232133000) </span>
	</p>
    
    <blockquote>
	<p><b>藥品使用方式：</b></p>
    <p>
    <b>使用時間</b>：每日使用2次 <br />
	<b>方式</b>：眼用(Ophthalmic use)  <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#54485002) </span> <br /> 
	<b>備註</b>：每日2次，每次1滴或1-2滴。 
	</p>
    </blockquote>

</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/MedicationStatement-med-sta-example.fsh

Alias: $medication-nhi-tw = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-nhi-tw


Instance: med-sta-example
InstanceOf: TWCoreMedicationStatement
Usage: #example
* status = #active
* category.coding = http://terminology.hl7.org/CodeSystem/medication-statement-category#outpatient "outpatient"
* category.text = "門診" 
* medicationCodeableConcept = $medication-nhi-tw#A003092100 "ASPIRIN TABLETS 500MG \"S.Y.\""
* medicationCodeableConcept.text = "阿司匹林"
* subject = Reference(Patient/pat-example)
* effectiveDateTime = "2023-11-05T08:00:00+08:00"
* dateAsserted = "2023-11-05T10:00:00+08:00"
* reasonCode.coding = http://snomed.info/sct#303002 "Apoplectic pancreatitis"
* reasonCode.text = "胰臟炎"
* note.text = "每日早晚各一次"
* dosage.text = "每次一片"
* dosage.route.coding = http://snomed.info/sct#26643006 "Oral route"
* dosage.route.text = "口服"
* dosage.timing.repeat.frequency = 2
* dosage.timing.repeat.period = 1
* dosage.timing.repeat.periodUnit = #d
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">

	<h3>
		<b>胰臟炎的用藥聲明資料</b>
	</h3>
	<p>
		<b>用藥聲明的狀態</b>：Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-medication-statement-status.html\">Medication Status Codes</a>#active) </span>
	</p>

    <p>
		<b>用藥聲明的分類</b>： Outpatient <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-medication-statement-category.html\">MedicationDispense Category Codes</a>#outpatient) </span>
	</p>

    <p>
		<b>藥品</b>：阿司匹林(ASPIRIN TABLETS 500MG S.Y.) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"CodeSystem-medication-nhi-tw.html\">臺灣健保用藥品項</a>#A003092100) </span>
	</p>

	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
    <p>
	    <b>用藥的日期與時間</b>：2023-11-05T08:00:00
    </p>
    <p>
	    <b>提出聲明日期與時間</b>：2023-11-05T10:00:00
    </p>

	<p>
		<b>聲明原因</b>：胰臟炎(Apoplectic pancreatitis) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#303002) </span>
	</p>
    
    <blockquote>
	<p><b>藥品使用方式：</b></p>
    <p>
    <b>時間間隔</b>：2 per 1 days <br />
	<b>方式</b>：口服(Oral route)  <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#26643006) </span> <br /> 
	<b>備註</b>：每日早晚各一次，每次一片。 
	</p>
    </blockquote>

</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/MedicationStatement-med-sta-inflamed-example.fsh

Alias: $medication-fda-tw = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-fda-tw

Instance: med-sta-inflamed-example
InstanceOf: TWCoreMedicationStatement
Usage: #example
* status = #active
* category.coding = http://terminology.hl7.org/CodeSystem/medication-statement-category#outpatient "outpatient"
* category.text = "門診" 
* medicationCodeableConcept = $medication-fda-tw#內衛藥製字第006008號 "鹽酸四環素眼藥膏"
* medicationCodeableConcept.text = "鹽酸四環素眼藥膏"
* subject = Reference(Patient/pat-example)
* effectiveDateTime = "2023-11-05T08:00:00+08:00"
* dateAsserted = "2023-11-05T10:00:00+08:00"
* reasonCode.coding = http://snomed.info/sct#8211008 "Simple chronic conjunctivitis"
* reasonCode.text = "慢性結膜炎"
* note.text = "每天早晚塗抹發炎處"
* dosage.text = "每天早晚塗抹發炎處"
* dosage.route.coding = http://snomed.info/sct#6064005 "Topical route"
* dosage.route.text = "外用"
* dosage.timing.repeat.frequency = 2
* dosage.timing.repeat.period = 1
* dosage.timing.repeat.periodUnit = #d
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">

	<h3>
		<b>慢性結膜炎的用藥聲明資料</b>
	</h3>
	<p>
		<b>用藥聲明的狀態</b>：Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-medication-statement-status.html\">Medication Status Codes</a>#active) </span>
	</p>

    <p>
		<b>用藥聲明的分類</b>： Outpatient <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-medication-statement-category.html\">MedicationDispense Category Codes</a>#outpatient) </span>
	</p>

    <p>
		<b>藥品</b>：鹽酸四環素眼藥膏<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"CodeSystem-medication-fda-tw.html\">臺灣食藥署藥品許可證</a>#內衛藥製字第006008號) </span>
	</p>

	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
    <p>
	    <b>用藥的日期與時間</b>：2023-11-05T08:00:00
    </p>
    <p>
	    <b>提出聲明日期與時間</b>：2023-11-05T10:00:00
    </p>

	<p>
		<b>聲明原因</b>：慢性結膜炎(Simple chronic conjunctivitis) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#8211008) </span>
	</p>
    
    <blockquote>
	<p><b>藥品使用方式：</b></p>
    <p>
    <b>使用時間</b>：每日使用2次 <br />
	<b>方式</b>：外用(Topical route)  <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#6064005) </span> <br /> 
	<b>備註</b>：每天早晚塗抹發炎處。 
	</p>
    </blockquote>

</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/MedicationStatement-med-sta-injection-example.fsh

Alias: $medication-fda-tw = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-fda-tw

Instance: med-sta-injection-example
InstanceOf: TWCoreMedicationStatement
Usage: #example
* status = #active
* category.coding = http://terminology.hl7.org/CodeSystem/medication-statement-category#outpatient "outpatient"
* category.text = "門診" 
* medicationCodeableConcept = $medication-fda-tw#衛部菌疫輸字第001080號 "爽胰達注射劑100單位+50微克"
* medicationCodeableConcept.text = "爽胰達注射劑100單位+50微克"
* subject = Reference(Patient/pat-example)
* effectiveDateTime = "2023-11-05T08:00:00+08:00"
* dateAsserted = "2023-11-05T10:00:00+08:00"
* reasonCode.coding = http://snomed.info/sct#46635009 "Type 1 diabetes mellitus"
* reasonCode.text = "第一型糖尿病"
* note.text = "每日注射一次，於餐前一小時內注射，建議固定在同一餐的餐前注射"
* dosage.text = "每日注射一次，於餐前一小時內注射"
* dosage.route.coding = http://snomed.info/sct#34206005 "SC use"
* dosage.route.text = "皮下注射"
* dosage.timing.repeat.frequency = 1
* dosage.timing.repeat.period = 1
* dosage.timing.repeat.periodUnit = #d
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">

	<h3>
		<b>第一型糖尿病的用藥聲明資料</b>
	</h3>
	<p>
		<b>用藥聲明的狀態</b>：Active <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-medication-statement-status.html\">Medication Status Codes</a>#active) </span>
	</p>

    <p>
		<b>用藥聲明的分類</b>： Outpatient <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-medication-statement-category.html\">MedicationDispense Category Codes</a>#outpatient) </span>
	</p>

    <p>
		<b>藥品</b>：爽胰達注射劑100單位+50微克(ASPIRIN TABLETS 500MG S.Y.) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"CodeSystem-medication-fda-tw.html\">臺灣食藥署藥品許可證</a>#衛部菌疫輸字第001080號) </span>
	</p>

	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
    <p>
	    <b>用藥的日期與時間</b>：2023-11-05T08:00:00
    </p>
    <p>
	    <b>提出聲明日期與時間</b>：2023-11-05T10:00:00
    </p>

	<p>
		<b>聲明原因</b>：第一型糖尿病(Type 1 diabetes mellitus) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#46635009) </span>
	</p>
    
    <blockquote>
	<p><b>藥品使用方式：</b></p>
    <p>
    <b>使用時間</b>：每日使用1次 <br />
	<b>方式</b>：皮下注射(SC use)  <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#34206005) </span> <br /> 
	<b>備註</b>：每日注射一次，於餐前一小時內注射，建議固定在同一餐的餐前注射。 
	</p>
    </blockquote>

</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/MessageHeader-mes-request-example.fsh

Instance: mes-request-example
InstanceOf: TWCoreMessageHeader
Usage: #example
* eventCoding = http://loinc.org#11502-2 "Laboratory report"
* source.endpoint = "https://tpech.gov.taipei/"
* focus[0].reference = "DiagnosticReport/dia-example"
* focus[1].reference = "Patient/pat-example"
* focus[2].reference = "Observation/obs-lab-example"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
    <h3>
		<b>訊息表頭－request</b>
	</h3>
        
	<p>
		<b>訊息事件代碼</b>: Laboratory report <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://loinc.org\">LOINC</a>#11502-2) </span>
	</p>
    <p>
		<b>訊息發送來源</b>: https://tpech.gov.taipei/
	</p>
    <p><b>訊息內容</b>：</p>
    <blockquote>
    <p><b>檢驗報告</b>：<a href=\"DiagnosticReport-dia-example.html\">DiagnosticReport/dia-example</a></p>
    <p><b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\" </p>
    <p><b>檢驗檢查資料</b>：<a href=\"Observation-obs-lab-example.html\">Observation/obs-lab-example</a></p>
    </blockquote>

    </div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/MessageHeader-mes-response-example.fsh

Instance: mes-response-example
InstanceOf: TWCoreMessageHeader
Usage: #example
* eventCoding = http://loinc.org#11502-2 "Laboratory report"
* source.endpoint = "https://www.cdc.gov.tw/"
* response.identifier = "efdd266b-0e09-4164-883e-35cf3871715f"
* response.code = http://hl7.org/fhir/response-code#ok

* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
    <h3>
		<b>訊息表頭－response</b>
	</h3>
    <p>
		<b>訊息回應識別碼</b>: efdd266b-0e09-4164-883e-35cf3871715f
	</p> 
	<p>
		<b>訊息回應的事件代碼</b>: Laboratory report <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://loinc.org\">LOINC</a>#11502-2) </span>
	</p>
    <p>
		<b>訊息回應來源</b>: https://www.cdc.gov.tw/
	</p>
    <p>
		<b>訊息回應類型</b>: OK <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/response-code\">ResponseType</a>#ok) </span>
	</p>

    </div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-averageBloodPressure-example.fsh

Instance: obs-averageBloodPressure-example
InstanceOf: TWCoreObservationAverageBloodPressure
Usage: #example
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs "Vital Signs"
* code = http://loinc.org#96607-7 "Blood pressure panel mean systolic and mean diastolic"
* code.text = "平均血壓"
* subject.reference = "Patient/pat-example"
* effectiveDateTime = "2024-01-01"
* performer.reference = "Practitioner/pra-nurse-example"
* component[Systolic].code.coding.system = "http://loinc.org"
* component[Systolic].code.coding.code = #96608-5
* component[Systolic].valueQuantity.value = 120
* component[Systolic].valueQuantity.unit = "mm[Hg]"
* component[Systolic].valueQuantity.system = "http://unitsofmeasure.org"
* component[Systolic].valueQuantity.code = #mm[Hg]

* component[Diastolic].code.coding.system = "http://loinc.org"
* component[Diastolic].code.coding.code = #96609-3
* component[Diastolic].valueQuantity.value = 80
* component[Diastolic].valueQuantity.unit = "mm[Hg]"
* component[Diastolic].valueQuantity.system = "http://unitsofmeasure.org"
* component[Diastolic].valueQuantity.code = #mm[Hg]

* component[Number].code.coding.system = "http://snomed.info/sct"
* component[Number].code.coding.code = #246432004
* component[Number].valueQuantity.value = 3
//* component[=].valueQuantity.unit = "#"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-bloodPressure-example.fsh

Instance: obs-bloodPressure-example
InstanceOf: TWCoreObservationBloodPressure
Usage: #example
* status = #final
* category[VSCat] = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs "Vital Signs"
* code = http://loinc.org#85354-9 "Blood pressure panel with all children optional"
* code.text = "Blood pressure panel with all children optional"
* subject.reference = "Patient/pat-example"
* effectiveDateTime = "2022-07-31"
* performer = Reference(Practitioner/pra-dr-example)
* component[SystolicBP].code = http://loinc.org#8480-6 "Systolic blood pressure"
* component[SystolicBP].valueQuantity = 110 'mm[Hg]' "mmHg"
* component[DiastolicBP].code = http://loinc.org#8462-4 "Diastolic blood pressure"
* component[DiastolicBP].valueQuantity = 56 'mm[Hg]' "mmHg"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <h3>
    <b>檢驗檢查資料</b>
  </h3>
  <p>
    <b>狀態</b>：final
  </p>
  <p>
    <b>分類</b>：Vital Signs <span style=\"background: LightGoldenRodYellow; margin：4px; border：1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-observation-category.html\">Observation Category Codes</a>#vital-signs) </span>
  </p>
  <p>
    <b>檢驗項目</b>：Blood pressure panel with all children optional <span style=\"background: LightGoldenRodYellow; margin：4px; border：1px solid khaki\"> ( <a href=\"http://loinc.org\">LOINC</a>#85354-9 \"Blood pressure panel with all children optional\") </span>
  </p>
  <p>
    <b>病人</b>： <a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
  </p>
  <p>
		<b>檢查者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
  <p>
    <b>執行日期</b>：2022-07-31
  </p>
  <p>
    <b>檢驗結果</b>
  </p>
  <blockquote>
    <p>
      <b>檢驗項目</b>：Systolic blood pressure <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://loinc.org\">LOINC</a>#8480-6) </span>
    </p>
    <p>
      <b>檢驗值</b>：110 mmHg <span style=\"background: LightGoldenRodYellow\"></span>
    </p>
  </blockquote>
  <blockquote>
    <p>
      <b>檢驗項目</b>：Diastolic blood pressure <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://loinc.org\">LOINC</a>#8462-4) </span>
    </p>
    <p>
      <b>檢驗值</b>：56 mmHg
    </p>
  </blockquote>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-bmi-example.fsh

Instance: obs-bmi-example
InstanceOf: TWCoreObservationBMI
Usage: #example
* status = #final
* category[VSCat] = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs "Vital Signs"
* code = http://loinc.org#39156-5 "Body mass index (BMI) [Ratio]"
* code.text = "Body mass index (BMI) [Ratio]"
* subject.reference = "Patient/pat-example"
* effectiveDateTime = "2022-07-31"
* performer = Reference(Practitioner/pra-dr-example)
* valueQuantity = 18.3 'kg/m2' "kg/m2"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <h3>
    <b>檢驗檢查資料</b>
  </h3>
  <p>
    <b>狀態</b>：final
  </p>
  <p>
    <b>分類</b>：Vital Signs <span style=\"background: LightGoldenRodYellow; margin：4px; border：1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-observation-category.html\">Observation Category Codes</a>#vital-signs) </span>
  </p>
  <p>
    <b>檢驗項目</b>：Body mass index (BMI) [Ratio] <span style=\"background: LightGoldenRodYellow; margin：4px; border：1px solid khaki\"> ( <a href=\"http://loinc.org\">LOINC</a>#39156-5 \"Body mass index (BMI) [Ratio]\") </span>
  </p>
  <p>
    <b>病人</b>： <a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
  </p>
  <p>
		<b>檢查者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
  <p>
    <b>執行日期</b>：2022-07-31
  </p>
  <p>
    <b>檢驗值</b>：18.3 kg/m<sup>2</sup>
  </p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-careExp-example.fsh

Instance: obs-careExp-example
InstanceOf: TWCoreObservationCareExperiencePreference
Usage: #example
* status = #final
* category = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw#care-experience-preference "Care experience preference"
* code = http://loinc.org#95541-9
* subject.reference = "Patient/pat-example"
* effectiveDateTime = "2024-01-01"
* performer.reference = "Practitioner/pra-nurse-example"
* valueString = "For critical or end-of-life care, here are some examples of the things that I would like to have near me, music that I’d like to hear, and other details of my care that would help to keep me happy and relaxed: Like Bach, especially the cantatas.  St. Martin in the Fields"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-clinical-result-example.fsh

Alias: $loinc = http://loinc.org

Instance: obs-clinical-result-example
InstanceOf: TWCoreObservationClinicalResult
Usage: #example
* status = #final
* category[twcore] = http://terminology.hl7.org/CodeSystem/observation-category#exam "Exam"
* category[twcore].text = "Exam"
* code = $loinc#44963-7
* code.text = "Capillary refill Time Nail Bed"
* subject = Reference(Patient/pat-example) 
* encounter = Reference(Encounter/enc-example) 
* effectiveDateTime = "2021-11-10T16:48:57.246958-08:00"
* valueQuantity = 1 's' "s"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-example.fsh

Instance: obs-lab-example
InstanceOf: TWCoreObservationLaboratoryResult
Usage: #example
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#laboratory
* code = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medical-service-payment-tw#09002C
* code.text = "血中尿素氮"
* subject.reference = "Patient/pat-example"
* effectiveDateTime = "2022-07-31"
* performer.reference = "Organization/org-hosp-example"
* valueQuantity.value = 16.6
* valueQuantity.unit = "mg/dL"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <h3>
    <b>檢驗檢查資料</b>
  </h3>
  <p>
    <b>狀態</b>：最終版(final)
  </p>
  <p>
    <b>分類</b>：Laboratory <span style=\"background: LightGoldenRodYellow; margin：4px; border：1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-observation-category.html\">Observation Category Codes</a>#laboratory) </span>
  </p>
  <p>
    <b>檢驗項目</b>：血中尿素氮 <span style=\"background: LightGoldenRodYellow; margin：4px; border：1px solid khaki\"> ( <a href=\"CodeSystem-medical-service-payment-tw.html\">臺灣醫療服務給付項目</a>#09002C) </span>
  </p>
  <p>
    <b>病人</b>： <a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
  </p>
  <p>
    <b>執行日期</b>：2022-07-31
  </p>
  <p>
    <b>負責機構</b>： <a href=\"Organization-org-hosp-example.html\">Organization/org-hosp-example</a> \"衛生福利部臺北醫院\"
  </p>
  <p>
    <b>檢驗值</b>：16.6 mg/dL
  </p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-head-circumference-example.fsh

Instance: obs-head-circumference-example
InstanceOf: TWCoreObservationHeadCircumference
Usage: #example
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs "Vital Signs"
* category.text = "生命體徵"
* code = http://loinc.org#9843-4 "Head Occipital-frontal circumference"
* code.text = "頭圍"
* subject = Reference(Patient/pat-child-example)
* effectiveDateTime = "2020-11-18T16:19:31+08:00"
* valueQuantity = 56.2 'cm' "cm"
* performer.reference = "Organization/org-hosp-example"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-heart-rate-example.fsh

Instance: obs-heart-rate-example
InstanceOf: TWCoreObservationHeartRate
Usage: #example
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs "Vital Signs"
* category.text = "生命體徵"
* code = http://loinc.org#8867-4
* code.text = "心率"
* subject = Reference(Patient/pat-example)
* effectiveDateTime = "1999-07-02"
* valueQuantity = 44 '/min' "beats/min"
* performer.reference = "Organization/org-hosp-example"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-height-example.fsh

Instance: obs-height-example
InstanceOf: TWCoreObservationBodyHeight
Usage: #example
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs "Vital Signs"
* category.text = "生命體徵"
* code = http://loinc.org#8302-2 "Body height"
* code.text = "身高"
* subject = Reference(Patient/pat-example)
* effectiveDateTime = "2022-07-31"
* valueQuantity = 151.5 'cm' "cm"
* performer.reference = "Organization/org-hosp-example"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-loinc-example.fsh

Instance: obs-loinc-example
InstanceOf: TWCoreObservationLaboratoryResult
Usage: #example
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#laboratory
* code = http://loinc.org#101309-3	
* code.text = "Glucose [Mass/volume] in Serum or Plasma --2 hours post dose arginine"
* subject.reference = "Patient/pat-example"
* effectiveDateTime = "2022-07-31"
* performer.reference = "Organization/org-hosp-example"
* valueQuantity.value = 86
* valueQuantity.unit = "mg/dL"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h3><b>檢驗檢查資料</b></h3><p><b>狀態</b>：final</p><p><b>分類</b>：Laboratory<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-observation-category.html\">Observation Category Codes</a>#laboratory) </span></p><p><b>檢驗項目</b>：Glucose [Mass/volume] in Serum or Plasma --2 hours post dose arginine<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://loinc.org\">LOINC檢驗檢查</a>#101309-3	) </span></p><p><b>病人</b>： <a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"</p><p><b>執行日期</b>：2022-07-31</p><p><b>負責機構</b>： <a href=\"Organization-org-hosp-example.html\">Organization/org-hosp-example</a> \"衛生福利部臺北醫院\"</p><p><b>檢驗值</b>：86 mg/dL</p></div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-occupation-example.fsh

Instance: obs-occupation-example
InstanceOf: TWCoreObservationOccupation
Usage: #example
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#social-history
* code = http://loinc.org#11341-5 "History of Occupation"
* subject = Reference(Patient/pat-example)
* effectivePeriod.start = "2015-04-24"
* performer.reference = "Practitioner/pra-nurse-example"
* valueCodeableConcept = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/occupation-lia-roc-tw#10010021 "一般護理人員(護士、護理師)"
* component.code = http://loinc.org#86188-0 "History of Occupation industry"
* component.valueCodeableConcept = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/industry-dgbas-tw#861 "醫院"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-ofc-percentile-example.fsh

Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $loinc = http://loinc.org

Instance: obs-ofc-percentile-example
InstanceOf: TWCoreObservationPediatricHeadOccipitalFrontalCircumferencePercentile
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* category[VSCat].text = "Vital Signs"
* code = $loinc#8289-1 "Head Occipital-frontal circumference Percentile"
* code.text = "Head Occipital-frontal circumference Percentile"
* subject = Reference(Patient/pat-child-example)
* effectiveDateTime = "2020-07-01"
* valueQuantity = 82 '%' "%"
* note.text = "WHO Males, 0-2 years Chart"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-pediatric-bmi-age-example.fsh

Instance: obs-pediatric-bmi-age-example
InstanceOf: TWCoreObservationPediatricBMIforAge
Usage: #example
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs "Vital Signs"
* category.text = "生命體徵"
* code = http://loinc.org#59576-9 "Body mass index (BMI) [Percentile] Per age and sex"
* code.text = "BMI"
* subject = Reference(Patient/pat-child-example)
* effectiveDateTime = "2022-07-31"
* valueQuantity = 65 '%' "%"
* performer.reference = "Organization/org-hosp-example"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-pediatric-weight-height-example.fsh

Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $loinc = http://loinc.org

Instance: obs-pediatric-weight-height-example
InstanceOf: TWCoreObservationPediatricWeightforHeight
Usage: #example

* status = #final
* category = $observation-category#vital-signs "Vital Signs"
* category.text = "生命體徵"
* code = $loinc#77606-2 "Weight-for-length Per age and sex"
* code.text = "Weight-for-length Per age and sex"
* subject = Reference(Patient/pat-child-example)
* effectiveDateTime = "2020-07-02"
* valueQuantity = 65 '%' "%"
* note.text = "臺灣國民健康署 0-7歲兒童生長曲線"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-pregnancy-intent-example.fsh

Instance: obs-pregnancy-intent-example
InstanceOf: TWCoreObservationPregnancyIntent
Usage: #example
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#social-history "Social History"
* category.text = "Social History"
* code = http://loinc.org#86645-9 "Pregnancy intention in the next year - Reported"
* code.text = "Pregnancy Intent"
* subject = Reference(Patient/pat-example)
* effectiveDateTime = "2022-09-23T22:39:43Z"
/** valueCodeableConcept = http://snomed.info/sct#454381000124105 "Finding related to pregnancy intention (finding)"
* valueCodeableConcept.text = "Pregnant"*/
* valueCodeableConcept = LOINC#LA26438-4 "Yes, I want to become pregnant"
* performer.reference = "Organization/org-hosp-example"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-pregnancy-status-example.fsh

Instance: obs-pregnancy-status-example
InstanceOf: TWCoreObservationPregnancyStatus
Usage: #example
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#social-history "Social History"
* category.text = "Social History"
* code = http://loinc.org#82810-3 "Pregnancy status"
* code.text = "Pregnancy Status"
* subject = Reference(Patient/pat-example)
* effectiveDateTime = "2022-09-23T22:39:43Z"
* valueCodeableConcept.coding.version = "http://snomed.info/sct/731000124108"
* valueCodeableConcept.coding = http://snomed.info/sct#77386006 "Pregnancy"
* valueCodeableConcept.text = "Pregnant"
* performer.reference = "Organization/org-hosp-example"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-pulse-oximetry-example.fsh

Instance: obs-pulse-oximetry-example
InstanceOf: TWCoreObservationPulseOximetry
Usage: #example
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs "Vital Signs"
* category.text = "生命體徵"

* code.coding[PulseOx] = http://loinc.org#59408-5 "Oxygen saturation in Arterial blood by Pulse oximetry"
* code.coding[OxygenSatCode] = http://loinc.org#2708-6 "Oxygen saturation in Arterial blood"
* code.text = "脈搏血氧飽和度"
* subject = Reference(Patient/pat-example)
* effectiveDateTime = "2022-07-31"
* valueQuantity = 99 '%' "%"
* component[0].code = $loinc#3151-8 "Inhaled oxygen flow rate"
* component[=].code.text = "吸入氧氣流速"
* component[=].valueQuantity = 6 'L/min' "liters/min"
* component[+].code = $loinc#3150-0 "Inhaled oxygen concentration"
* component[=].code.text = "吸入氧氣濃度"
* component[=].valueQuantity = 21 '%' "%"
* performer.reference = "Organization/org-hosp-example"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-respiratory-rate-example.fsh

Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $loinc = http://loinc.org

Instance: obs-respiratory-rate-example
InstanceOf: TWCoreObservationRespiratoryRate
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* category[VSCat].text = "Vital Signs"
* code = $loinc#9279-1 "Respiratory rate"
* code.text = "respiratory_rate"
* subject = Reference(Patient/pat-example) 
* encounter = Reference(Encounter/enc-example) 
* effectiveDateTime = "1999-07-02"
* valueQuantity = 26 '/min' "breaths per minute"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-screening-assessment-example.fsh

Instance: obs-screening-assessment-example
InstanceOf: TWCoreObservationScreeningAssessment
Usage: #example
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey "Survey"
* category.text = "Survey"
* code = http://loinc.org#32401-2 "10 minute Apgar Color"
* code.text = "Apgar color score"
* subject = Reference(Patient/pat-example)
* effectiveDateTime = "2016-05-18T22:33:22+00:00"
* performer = Reference(Practitioner/pra-dr-example)
* valueCodeableConcept.coding.extension.url = "http://hl7.org/fhir/StructureDefinition/ordinalValue"
* valueCodeableConcept.coding.extension.valueDecimal = 2
* valueCodeableConcept.coding = http://loinc.org#LA6724-4 "Good color all over"
* valueCodeableConcept.text = "2. Good color all over"
* valueCodeableConcept.text = "Pregnant"
* performer.reference = "Organization/org-hosp-example"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-sexualOrientation-example.fsh

Instance: obs-sexual-orientation-example
InstanceOf: TWCoreObservationSexualOrientation
Usage: #example
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#social-history "Social History"
* code = http://loinc.org#76690-7 "Sexual orientation"
* code.text = "Sexual orientation"
* subject = Reference(Patient/pat-example)
* effectiveDateTime = "2021-11-11"
* performer = Reference(Practitioner/pra-dr-example)
* valueCodeableConcept = http://snomed.info/sct#38628009 "Homosexuality"
* valueCodeableConcept.text = "Homosexuality"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-simple-example.fsh

Instance: obs-simple-example
InstanceOf: TWCoreObservationSimple
Usage: #example
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#survey "Survey"
* code = http://loinc.org#75276-6 "Functional status [Interpretation]"
* code.text = "老年評估"
* subject = Reference(Patient/pat-example)
* effectiveDateTime = "2023-11-24T21:26:59Z"
* performer = Reference(Practitioner/pra-nurse-example)
* valueCodeableConcept = http://snomed.info/sct#129035000 "Independent with dressing (finding)"
* valueCodeableConcept.text = "獨立穿脫衣服"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-smoking-status-example.fsh

Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $sct = http://snomed.info/sct

Instance: obs-smoking-status-example
InstanceOf: TWCoreObservationSmokingStatus
Usage: #example
* status = #final
* category[twcore] = $observation-category#social-history "Social History"
* category[twcore].text = "Social History"
* code = $sct#401201003 "Cigarette pack-years (observable entity)"
* code.text = "Cigarette pack-years"
* subject = Reference(Patient/pat-example) 
* effectiveDateTime = "2016-03-18T05:27:04Z"
* valueQuantity = 26 '{pack-years}' "pack-years"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-temperature-example.fsh

Instance: obs-temperature-example
InstanceOf: TWCoreObservationBodyTemperature
Usage: #example
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs "Vital Signs"
* category.text = "生命體徵"
* code = http://loinc.org#8310-5 "Body temperature"
* code.text = "體溫"
* subject = Reference(Patient/pat-example)
* effectiveDateTime = "2022-07-31"
* valueQuantity = 36.55556 'Cel' "Cel"
* performer.reference = "Organization/org-hosp-example"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-treatment-intervention-preference-example.fsh

Alias: $us-core-category = http://hl7.org/fhir/us/core/CodeSystem/us-core-category
Alias: $loinc = http://loinc.org

Instance: obs-treatment-intervention-preference-example
InstanceOf: TWCoreObservationTreatmentInterventionPreference
Usage: #example
* status = #final
* category = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw#treatment-intervention-preference "Treatment Intervention preference"
* category.text = "Treatment Intervention Preference"
* code = $loinc#75773-2 "Goals, preferences, and priorities for medical treatment [Reported]"
* code.text = "preferences for medical treatment"
* subject = Reference(Patient/pat-example) 
* effectiveDateTime = "2023-08-30"
* performer = Reference(Patient/pat-example) 
* valueString = "If I am having significant pain or suffering, I would like my doctors to consult a Supportive and Palliative Care Team to help treat my physical, emotional and spiritual discomfort, and to support my family."

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-vital.fsh

Instance: obs-vital
InstanceOf: TWCoreObservationVitalSigns
Usage: #example
* status = #final
* category[VSCat] = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs "Vital Signs"
* code = http://loinc.org#39156-5 "Body mass index (BMI) [Ratio]"
* code.text = "Body mass index (BMI) [Ratio]"
* subject.reference = "Patient/pat-example"
* effectiveDateTime = "2022-07-31"
* performer = Reference(Practitioner/pra-dr-example)
* valueQuantity = 18.3 'kg/m2' "kg/m2"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <h3>
    <b>檢驗檢查資料</b>
  </h3>
  <p>
    <b>狀態</b>：final
  </p>
  <p>
    <b>分類</b>：Vital Signs <span style=\"background: LightGoldenRodYellow; margin：4px; border：1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/R4/codesystem-observation-category.html\">Observation Category Codes</a>#vital-signs) </span>
  </p>
  <p>
    <b>檢驗項目</b>：Body mass index (BMI) [Ratio] <span style=\"background: LightGoldenRodYellow; margin：4px; border：1px solid khaki\"> ( <a href=\"http://loinc.org\">LOINC</a>#39156-5 \"Body mass index (BMI) [Ratio]\") </span>
  </p>
  <p>
    <b>病人</b>： <a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
  </p>
  <p>
		<b>檢查者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
  <p>
    <b>執行日期</b>：2022-07-31
  </p>
  <p>
    <b>檢驗值</b>：18.3 kg/m<sup>2</sup>
  </p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Observation-obs-weight-example.fsh

Instance: obs-weight-example
InstanceOf: TWCoreObservationBodyWeight
Usage: #example
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs "Vital Signs"
* category.text = "生命體徵"
* code = http://loinc.org#29463-7
* code.text = "體重"
* subject = Reference(Patient/pat-example)
* effectiveDateTime = "2022-07-31"
* valueQuantity = 52.7 'kg' "kg"
* performer.reference = "Organization/org-hosp-example"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Organization-org-co-example.fsh

Instance: org-co-example
InstanceOf: TWCoreOrganizationCo
Usage: #example
* type = http://terminology.hl7.org/CodeSystem/organization-type#bus
* identifier.use = #official
* identifier.type = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/v2-0203#UBN
* identifier.system = "https://gcis.nat.gov.tw"
* identifier.value = "06100268"
* name = "莉梓股份有限公司"
* telecom.system = #email
* telecom.value = "litzu@qmail.com"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <h3>
    <b>公司行號基本資料</b>
  </h3>
  <p>
    <b>機構名稱</b>：莉梓股份有限公司
  </p>
  <p>
    <b>識別碼型別</b>：Unified Business number<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\">（ <a href=\"CodeSystem-v2-0203.html\">臺灣識別碼類型值集</a>#UBN） </span>  <br/>
    <b>公司或企業統一編號（official）</b>：06100268 (https://gcis.nat.gov.tw)
  </p>
  <p>
    <b>機構種類</b>：Non-Healthcare Business or Corporation <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\">（ <a href=\"http://hl7.org/fhir/R4/codesystem-organization-type.html\">OrganizationType</a>#bus） </span>
  </p>
  <p>
    <b>聯絡方式</b>：Email<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#email） </span><br/>
    <b>聯絡信箱</b>：litzu@qmail.com
  </p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Organization-org-example.fsh

Instance: org-example
InstanceOf: TWCoreOrganization
Usage: #example
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#PRN
* identifier.system = "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/organization-identifier-tw"
* identifier.value = "0132010014"
* active = true
* name = "衛生福利部桃園醫院"
* telecom.system = #phone
* telecom.value = "03-369-9721"
* telecom.use = #work
* address.use = #work
* address.extension[0].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-number"
* address.extension[=].valueString = "1492號"
* address.line = "中山路"
* address.city = "桃園區"
* address.district = "桃園市"
* address.country = "TW"
* address.postalCode = "330"
* address.text = "330桃園市桃園區中山路1492號"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <h3>
    <b>機構基本資料</b>
  </h3>
  <p>
    <b>機構名稱</b>：國立臺灣大學醫學院附設醫院
  </p>
  <p>
    <b>機構識別碼</b>：0132010014 (https://twcore.mohw.gov.tw/tsfhir/CodeSystem/organization-identifier-tw)
  </p>
  <p>
    <b>識別碼型別</b>：Provider number<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\">（ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">IdentifierType</a>#PRN） </span> 
  </p>
  <p>
    <b>機構的紀錄（active）</b>：使用中
  </p>
  <p>
    <b>聯絡方式</b>：Phone<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span><br/>
    <b>聯絡信箱（work）</b>：03-369-9721
  </p>
  <p>
    <b>機構地址（work）</b>：(330)桃園市桃園區中山路1492號<br />
    <b>  郵遞區號（postalCode）</b>：330
    <b>  縣/市（district）</b>：桃園市 <br />
    <b>  鄉/鎮/市/區（city）</b>：桃園區 <br />
    <b>  路/街（line）</b>：中山路 <br />
    <b>  號（number）</b>[extension: <a href=\"StructureDefinition-tw-number.html\">tw-number</a>]：1492號 <br />
    <b>  國家（country）</b>：臺灣 <br />

  </p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Organization-org-govt-example.fsh

Instance: org-govt-example
InstanceOf: TWCoreOrganizationGovt
Usage: #example
* identifier.use = #official
* identifier.system = "https://oid.nat.gov.tw/"
* identifier.value = "A21000000I"
* identifier.type = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/v2-0203#GOI
* type =  http://terminology.hl7.org/CodeSystem/organization-type#govt
* name = "衛生福利部"
* telecom.system = #url
* telecom.value = "https://www.mohw.gov.tw/mp-1.html"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <h3>
    <b>政府機構基本資料</b>
  </h3>
  <p>
    <b>機構名稱</b>：衛生福利部
  </p>
  <p>
     <b>識別碼型別</b>：Government Organization Identifier<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\">（ <a href=\"CodeSystem-v2-0203.html\">臺灣識別碼類型值集</a>#GOI） </span>  <br/>
    <b>機關代號（official）</b>：A21000000I (https://oid.nat.gov.tw/)
  </p>
  <p>
    <b>機構種類</b>：Government <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\">( <a href=\"http://hl7.org/fhir/R4/codesystem-organization-type.html\">OrganizationType</a>#govt) </span>
  </p>
  <p>
    <b>聯絡方式</b>：URL<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#url） </span><br/>
    <b>網站連結</b>： <a href=\"https://www.mohw.gov.tw/mp-1.html\">https://www.mohw.gov.tw/mp-1.html</a>
  </p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Organization-org-hosp-example.fsh

Instance: org-hosp-example
InstanceOf: TWCoreOrganizationHosp
Usage: #example
* identifier.use = #official
* identifier.system = "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/organization-identifier-tw"
* identifier.value = "0131060029"
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#PRN
* type = http://terminology.hl7.org/CodeSystem/organization-type#prov
* name = "衛生福利部臺北醫院"
* telecom.system = #phone
* telecom.value = "0222765566"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <h3>
    <b>醫事機構基本資料</b>
  </h3>
  <p>
    <b>機構名稱</b>：衛生福利部臺北醫院
  </p>
  <p>
    <b>識別碼型別</b>：Provider number<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\">（ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">IdentifierType</a>#PRN） </span>   <br/>
    <b>機構代碼（official）</b>：0131060029 (https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/organization-identifier-tw)
  </p>
  <p>
    <b>機構種類</b>：Healthcare Provider <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\">( <a href=\"http://hl7.org/fhir/R4/codesystem-organization-type.html\">OrganizationType</a>#prov) </span>
  </p>
  <p>
    <b>聯絡方式</b>：Phone<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span><br/>
    <b>聯絡電話</b>：0222765566
  </p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Patient-pat-child-example.fsh

Instance: pat-child-example
InstanceOf: TWCorePatient
Usage: #example
* identifier[idCardNumber].use = #official
* identifier[idCardNumber].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[idCardNumber].type.coding.code = #NNxxx
* identifier[idCardNumber].type.coding.code.extension.url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/identifier-suffix"
* identifier[idCardNumber].type.coding.code.extension.extension[0].url = "suffix"
* identifier[idCardNumber].type.coding.code.extension.extension[=].valueString = "TWN"
* identifier[idCardNumber].type.coding.code.extension.extension[+].url = "valueSet"
* identifier[idCardNumber].type.coding.code.extension.extension[=].valueCanonical = "http://hl7.org/fhir/ValueSet/iso3166-1-3"
* identifier[idCardNumber].system = "http://www.moi.gov.tw"
* identifier[idCardNumber].value = "H122345678"
* identifier[medicalRecord].use = #official
* identifier[medicalRecord].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[medicalRecord].type.coding.code = #MR
* identifier[medicalRecord].system = "https://www.tph.mohw.gov.tw"
* identifier[medicalRecord].value = "8862200"
* active = true
* name.use = #official
* name.family = "Lee"
* name.given = "Bella Lee"
* name.text = "李貝拉"
* telecom.system = #phone
* telecom.value = "03-5555555"
* telecom.use = #home
* telecom.period.start = "2020-07-31"
* telecom.period.end = "2024-07-31"
* gender = #female
* birthDate = "2019-11-26"
* extension[0].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/person-age"
* extension[=].valueAge.value = 4
* extension[=].valueAge.system = "http://unitsofmeasure.org"
* extension[=].valueAge.code = #a
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/patient-nationality"
* extension[=].extension.url = "code"
* extension[=].extension.valueCodeableConcept = urn:iso:std:iso:3166#TW
* address.country = "TW"
* address.district = "桃園市"
* address.city = "桃園區"
* address.line = "成功路"
* address.extension[0].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-section"
* address.extension[=].valueString = "三段"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-number"
* address.extension[=].valueString = "38號"
* address.text = "桃園市桃園區成功路三段38號"
* address.postalCode.extension.url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-postal-code"
* address.postalCode.extension.valueCodeableConcept.coding.system = "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/postal-code3-tw"
* address.postalCode.extension.valueCodeableConcept.coding.code = #330
* contact.relationship.coding.system = "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
* contact.relationship.coding.code = #MTH
* contact.name.use = #official
* contact.name.text = "陳加玲"
* contact.name.family = "Chen"
* contact.name.given = "Chia Lin"
* contact.telecom.system = #phone
* contact.telecom.value = "0911327999"
* contact.telecom.use = #mobile
* contact.telecom.period.start = "2022-07-31"
* contact.telecom.period.end = "2024-07-31"
* communication.language = urn:ietf:bcp:47#zh-TW
* managingOrganization.reference = "Organization/org-hosp-example"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>病人基本資料-身分證字號及病歷號</b>
	</h3>
	<blockquote>
		<p>
			<b>識別碼型別</b>：National Person Identifier <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#NNxxx <b>[extension: <a href=\"StructureDefinition-identifier-suffix.html\">Identifier Suffix</a>]：</b>TWN） </span>
			<br />
			<b>身分證字號（official）</b>：H122345678 （http://www.moi.gov.tw）
		</p>
	</blockquote>
	<blockquote>
		<p>
			<b>識別碼型別</b>：Medical record number <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#MR） </span>
			<br />
			<b>病歷號（official）</b>：8862200 （https://www.tph.mohw.gov.tw）
		</p>
	</blockquote>
	<p>
		<b>病人的紀錄（active）</b>：使用中
	</p>
	<p>
		<b>姓名（official）</b>：李貝拉
	</p>
	<p>
		<b>性別</b>：女性
	</p>
	<p>
		<b>出生日期</b>：2019-11-26
	</p>
	<p>
		<b>年齡[extension: <a href=\"StructureDefinition-person-age.html\">person-age</a>]</b>：4
	</p>
	<p>
		<b>國籍[extension: <a href=\"http://hl7.org/fhir/StructureDefinition/patient-nationality\">patient-nationality</a>]</b>：<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://terminology.hl7.org/CodeSystem-ISO3166Part1.html\">ISO3166Part1</a>#TW） </span>
	</p>
	<p>
		<b>聯絡方式</b>：Phone <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span>
		<br />
		<b>聯絡電話</b>：（Mobile）0911327999 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://build.fhir.org/codesystem-contact-point-use.html\">ContactPointUse</a>#mobile） </span>
		<br />
		<b>聯絡電話使用效期</b>：2022-07-31至2024-07-31
	</p>
	<p>
		<b>聯絡地址</b>：(330)桃園市桃園區成功路三段38號<br />
		<b>  郵遞區號（postalCode） [extension: <a href=\"StructureDefinition-tw-postal-code.html\">tw-postal-code</a>] </b>： <a href=\"CodeSystem-postal-code3-tw.html\">330</a> <br />
		<b>  縣/市（district）</b>：桃園市 <br />
		<b>  鄉/鎮/市/區（city）</b>：桃園區 <br />
		<b>  路/街（line）</b>：成功路 <br />
		<b>  段(section) [extension: <a href=\"StructureDefinition-tw-section.html\">tw-section</a>] </b>：三段 <br />
		<b>  號（number） [extension: <a href=\"StructureDefinition-tw-number.html\">tw-number</a>] </b>：38號 <br />
		<b>  國家（country）</b>：臺灣 <br />
		<br />
	</p>
	<p>
		<b>聯絡人（official）</b>：陳加玲 Chan, Chia Lin <br />
		<b>  關係</b>：mother <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v3-RoleCode\">PatientRelationshipType</a>#MTH） </span>
		<br />
		<b>  聯絡方式</b>：Phone <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span>
		<br />
		<b>  聯絡電話</b>：（Mobile）0911327999 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://build.fhir.org/codesystem-contact-point-use.html\">ContactPointUse</a>#mobile） </span>
		<br />
		<b>  聯絡電話使用效期</b>：2022-07-31至2024-07-31
	</p>
	<p>
		<b>向病人說明健康狀態時所使用的語言</b>：中文
	</p>
	<p>
		<b>紀錄的保管機構</b>： <a href=\"Organization-org-hosp-example.html\">Organization/org-hosp-example</a> \"衛生福利部臺北醫院\"
	</p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Patient-pat-example.fsh

Instance: pat-example
InstanceOf: TWCorePatient
Usage: #example
* identifier[idCardNumber].use = #official
//* identifier[idCardNumber].type.coding.system = "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/v2-0203"
* identifier[idCardNumber].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[idCardNumber].type.coding.code = #NNxxx
* identifier[idCardNumber].type.coding.code.extension.url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/identifier-suffix"
* identifier[idCardNumber].type.coding.code.extension.extension[0].url = "suffix"
* identifier[idCardNumber].type.coding.code.extension.extension[=].valueString = "TWN"
* identifier[idCardNumber].type.coding.code.extension.extension[+].url = "valueSet"
* identifier[idCardNumber].type.coding.code.extension.extension[=].valueCanonical = "http://hl7.org/fhir/ValueSet/iso3166-1-3"
* identifier[idCardNumber].system = "http://www.moi.gov.tw"
* identifier[idCardNumber].value = "A123456789"
* identifier[medicalRecord].use = #official
* identifier[medicalRecord].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[medicalRecord].type.coding.code = #MR
* identifier[medicalRecord].system = "https://www.tph.mohw.gov.tw"
* identifier[medicalRecord].value = "8862168"
* active = true
* name.use = #official
* name.family = "Chen"
* name.given = "Chia Lin"
* name.text = "陳加玲"
* telecom.system = #phone
* telecom.value = "0911327999"
* telecom.use = #mobile
* telecom.period.start = "2022-07-31"
* telecom.period.end = "2024-07-31"
* gender = #female
* birthDate = "1990-01-01"
* extension[0].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/person-age"
//* extension[=].valueInteger = 32
* extension[=].valueAge.value = 32
* extension[=].valueAge.system = "http://unitsofmeasure.org"
* extension[=].valueAge.code = #a
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/patient-nationality"
* extension[=].extension.url = "code"
* extension[=].extension.valueCodeableConcept = urn:iso:std:iso:3166#TW
* address.country = "TW"
* address.district = "臺北市"
* address.city = "大同區"
* address.line = "承德路"
* address.extension[0].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-section"
* address.extension[=].valueString = "三段"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-number"
* address.extension[=].valueString = "210號"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-village"
* address.extension[=].valueString = "大有里"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-neighborhood"
* address.extension[=].valueString = "19鄰"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-lane"
* address.extension[=].valueString = "52巷"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-alley"
* address.extension[=].valueString = "6弄"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-floor"
* address.extension[=].valueString = "2樓"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-room"
* address.extension[=].valueString = "B室"
* address.text = "臺北市大同區大有里19鄰承德路三段52巷6弄210號2樓B室"
* address.postalCode.extension.url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-postal-code"
* address.postalCode.extension.valueCodeableConcept.coding.system = "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/postal-code3-tw"
* address.postalCode.extension.valueCodeableConcept.coding.code = #103
* maritalStatus.coding.system = "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus"
* maritalStatus.coding.code = #U
* photo.contentType = #image/jpeg
//* photo.data = "R0lGODlhEwARAPcAAAAAAAAA/+9aAO+1AP/WAP/eAP/eCP/eEP/eGP/nAP/nCP/nEP/nIf/nKf/nUv/nWv/vAP/vCP/vEP/vGP/vIf/vKf/vMf/vOf/vWv/vY//va//vjP/3c//3lP/3nP//tf//vf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEAAAEALAAAAAATABEAAAi+AAMIDDCgYMGBCBMSvMCQ4QCFCQcwDBGCA4cLDyEGECDxAoAQHjxwyKhQAMeGIUOSJJjRpIAGDS5wCDly4AALFlYOgHlBwwOSNydM0AmzwYGjBi8IHWoTgQYORg8QIGDAwAKhESI8HIDgwQaRDI1WXXAhK9MBBzZ8/XDxQoUFZC9IiCBh6wEHGz6IbNuwQoSpWxEgyLCXL8O/gAnylNlW6AUEBRIL7Og3KwQIiCXb9HsZQoIEUzUjNEiaNMKAAAA7"
//* photo.url = "https://2.bp.blogspot.com/-v3yEwItkXKQ/VaMN_1Nx6TI/AAAAAAAAvhM/zDXN_eZw_UE/s800/youngwoman_42.png"
* photo.url = "patient.png"
* contact.relationship.coding.system = "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
* contact.relationship.coding.code = #FTH
* contact.name.use = #official
* contact.name.family = "Li"
* contact.name.given = "Li Wei"
* contact.name.text = "李立偉"
* contact.telecom.system = #phone
* contact.telecom.value = "0917159753"
* contact.telecom.use = #mobile
* contact.telecom.period.start = "2022-07-31"
* contact.telecom.period.end = "2024-07-31"
* communication.language = urn:ietf:bcp:47#zh-TW
* managingOrganization.reference = "Organization/org-hosp-example"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>病人基本資料-身分證字號及病歷號</b>
	</h3>
	<blockquote>
		<p>
			<b>識別碼型別</b>：National Person Identifier <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#NNxxx <b>[extension: <a href=\"StructureDefinition-identifier-suffix.html\">Identifier Suffix</a>]：</b>TWN） </span>
			<br />
			<b>身分證字號（official）</b>：A123456789 （http://www.moi.gov.tw）
		</p>
	</blockquote>
	<blockquote>
		<p>
			<b>識別碼型別</b>：Medical record number <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#MR） </span>
			<br />
			<b>病歷號（official）</b>：8862168 （https://www.tph.mohw.gov.tw）
		</p>
	</blockquote>
	<p>
		<b>病人的紀錄（active）</b>：使用中
	</p>
	<p>
		<b>姓名（official）</b>：陳加玲 Chan, Chia Lin
	</p>
	<p>
		<b>性別</b>：女性
	</p>
	<p>
		<b>出生日期</b>：1990-01-01
	</p>
	<p>
		<b>年齡[extension: <a href=\"StructureDefinition-person-age.html\">person-age</a>]</b>：32
	</p>
	<p>
		<b>國籍[extension: <a href=\"http://hl7.org/fhir/StructureDefinition/patient-nationality\">patient-nationality</a>]</b>：<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://terminology.hl7.org/CodeSystem-ISO3166Part1.html\">ISO3166Part1</a>#TW） </span>
	</p>
	<p>
		<b>聯絡方式</b>：Phone <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span>
		<br />
		<b>聯絡電話</b>：（Mobile）0911327999 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://build.fhir.org/codesystem-contact-point-use.html\">ContactPointUse</a>#mobile） </span>
		<br />
		<b>聯絡電話使用效期</b>：2022-07-31至2024-07-31
	</p>
	<p>
		<b>聯絡地址</b>：(103)臺北市大同區大有里19鄰承德路三段52巷6弄210號2樓B室<br />
		<b>  郵遞區號（postalCode） [extension: <a href=\"StructureDefinition-tw-postal-code.html\">tw-postal-code</a>] </b>： <a href=\"CodeSystem-postal-code3-tw.html\">103</a> <br />
		<b>  縣/市（district）</b>：臺北市 <br />
		<b>  鄉/鎮/市/區（city）</b>：大同區 <br />
		<b>  村(里)（village） [extension: <a href=\"StructureDefinition-tw-village.html\">tw-village</a>] </b>：大有里 <br />
		<b>  鄰（neighborhood） [extension: <a href=\"StructureDefinition-tw-neighborhood.html\">tw-neighborhood</a>] </b>：19鄰 <br />
		<b>  路/街（line）</b>：承德路 <br />
		<b>  段(section) [extension: <a href=\"StructureDefinition-tw-section.html\">tw-section</a>] </b>：三段 <br />
		<b>  巷/衖（lane） [extension: <a href=\"StructureDefinition-tw-lane.html\">tw-lane</a>] </b>：52巷 <br />
		<b>  弄（alley） [extension: <a href=\"StructureDefinition-tw-alley.html\">tw-alley</a>] </b>：6弄 <br />
		<b>  號（number） [extension: <a href=\"StructureDefinition-tw-number.html\">tw-number</a>] </b>：210號 <br />
		<b>  樓（floor） [extension: <a href=\"StructureDefinition-tw-floor.html\">tw-floor</a>] </b>：2樓 <br />
		<b>  室（room） [extension: <a href=\"StructureDefinition-tw-room.html\">tw-room</a>] </b>：B室 <br />
		<b>  國家（country）</b>：臺灣 <br />
		<br />
	</p>
	<p>
		<b>婚姻狀態</b>：unmarried <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v3-MaritalStatus\">臺灣婚姻狀態值集</a>#U） </span>
	</p>
	<p>
		<b>聯絡人（official）</b>：李立偉 Li, Li Wei <br />
		<b>  關係</b>：father <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v3-RoleCode\">PatientRelationshipType</a>#FTH） </span>
		<br />
		<b>  聯絡方式</b>：Phone <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span>
		<br />
		<b>  聯絡電話</b>：（Mobile）0917159753 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://build.fhir.org/codesystem-contact-point-use.html\">ContactPointUse</a>#mobile） </span>
		<br />
		<b>  聯絡電話使用效期</b>：2022-07-31至2024-07-31
	</p>
	<p>
		<b>向病人說明健康狀態時所使用的語言</b>：中文
	</p>
	<p>
		<b>紀錄的保管機構</b>： <a href=\"Organization-org-hosp-example.html\">Organization/org-hosp-example</a> \"衛生福利部臺北醫院\"
	</p>
	<p>
		<b>病人影像</b>： <a href=\"https://2.bp.blogspot.com/-v3yEwItkXKQ/VaMN_1Nx6TI/AAAAAAAAvhM/zDXN_eZw_UE/s800/youngwoman_42.png\">patient.png</a>
		<br />
		<img src=\"https://2.bp.blogspot.com/-v3yEwItkXKQ/VaMN_1Nx6TI/AAAAAAAAvhM/zDXN_eZw_UE/s800/youngwoman_42.png\" width=\"250px\" />
	</p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Patient-pat-residentNumber-example.fsh

Instance: pat-residentNumber-example
InstanceOf: TWCorePatient
Usage: #example
* identifier[residentNumber].use = #official
//* identifier[idCardNumber].type.coding.system = "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/v2-0203"
* identifier[residentNumber].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[residentNumber].type.coding.code = #PRC
* identifier[residentNumber].system = "http://www.immigration.gov.tw"
* identifier[residentNumber].value = "Z596839485"
* identifier[medicalRecord].use = #official
* identifier[medicalRecord].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[medicalRecord].type.coding.code = #MR
* identifier[medicalRecord].system = "https://www.tph.mohw.gov.tw"
* identifier[medicalRecord].value = "4958603"
* active = true
* name.use = #official
* name.family = "Chen"
* name.given = "Xiao Ming"
* name.text = "陳曉明"
* telecom.system = #phone
* telecom.value = "0939405869"
* telecom.use = #mobile
* telecom.period.start = "2023-01-01"
* telecom.period.end = "2026-01-01"
* gender = #male
* birthDate = "1999-04-20"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>病人基本資料-居留證號碼及病歷號</b>
	</h3>
	<blockquote>
		<p>
			<b>識別碼型別</b>：Permanent Resident Card Number <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#PRC） </span>
			<br />
			<b>身分證字號（official）</b>：Z596839485 （http://www.immigration.gov.tw）
		</p>
	</blockquote>
	<blockquote>
		<p>
			<b>識別碼型別</b>：Medical record number <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#MR） </span>
			<br />
			<b>病歷號（official）</b>：4958603 （https://www.tph.mohw.gov.tw）
		</p>
	</blockquote>
	<p>
		<b>病人的紀錄（active）</b>：使用中
	</p>
	<p>
		<b>姓名（official）</b>：陳曉明 Chan, Xiao Ming
	</p>
	<p>
		<b>性別</b>：男性
	</p>
	<p>
		<b>出生日期</b>：1999-04-20
	</p>
	<p>
		<b>聯絡方式</b>：Phone <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span>
		<br />
		<b>聯絡電話</b>：（Mobile）0939405869 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://build.fhir.org/codesystem-contact-point-use.html\">ContactPointUse</a>#mobile） </span>
		<br />
		<b>聯絡電話使用效期</b>：2023-01-01至2026-01-01
	</p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Practitioner-pra-dr-example.fsh

Instance: pra-dr-example
InstanceOf: TWCorePractitioner
Usage: #example
* name.use = #official
* name.family = "Wang"
* name.given = "Yi Sheng"
* name.text = "王依昇"
* identifier[idCardNumber].use = #official
* identifier[idCardNumber].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[idCardNumber].type.coding.code = #NNxxx
* identifier[idCardNumber].system = "http://www.moi.gov.tw"
* identifier[idCardNumber].value = "D123456789"
* identifier[medicalLicenseNumber].use = #official
* identifier[medicalLicenseNumber].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[medicalLicenseNumber].type.coding.code = #MD
* identifier[medicalLicenseNumber].value = "KP00017"
* identifier[medicalLicenseNumber].system = "https://www.tph.mohw.gov.tw"
* active = true
* gender = #male
* birthDate = "1980-11-11"
* telecom.system = #phone
* telecom.value = "0993277826"
* telecom.use = #mobile
* telecom.period.start = "2022-07-31"
* telecom.period.end = "2024-07-31"
* address.country = "TW"
* address.district = "桃園市"
* address.city = "桃園區"
* address.line = "五福五街"
* address.extension[0].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-number"
* address.extension[=].valueString = "31號"
* address.text = "桃園市桃園區五福五街31號"
* address.postalCode.extension.url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-postal-code"
* address.postalCode.extension.valueCodeableConcept.coding.system = "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/postal-code3-tw"
* address.postalCode.extension.valueCodeableConcept.coding.code = #330
* photo.contentType = #image/png
* photo.data = "TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4="
//* photo.url = "https://1.bp.blogspot.com/-6dSaKA-5r0c/UZSs9HLyutI/AAAAAAAATBc/lxpq2MB3_mc/s400/doctor.png"
* photo.url = "doctor.png"
* qualification.code = http://snomed.info/sct#394802001 "General medicine"
* qualification.period.start = "2005-05-25"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <h3>
    <b>醫師基本資料</b>
  </h3>
	<blockquote>
		<p>
			<b>識別碼型別</b>：National Person Identifier <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#NNxxx） </span>
			<br />
			<b>身分證字號（official）</b>：D123456789 （http://www.moi.gov.tw）
		</p>
	</blockquote>
	<blockquote>
  <p>
    <b>識別碼型別</b>：Medical License number <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#MD） </span><br/>
    <b>員工編號（official）</b>：KP00017 （https://www.tph.mohw.gov.tw）
  </p>
	</blockquote>
  <p>
    <b>健康照護服務提供者的紀錄（active）</b>：使用中
  </p>
  <p>
    <b>姓名（official）</b>：王依昇 Wang, Yi Sheng
  </p>
  <p>
    <b>性別</b>：男性
  </p>
  <p>
    <b>出生日期</b>：1980-11-11
  </p>
  <p>
    <b>聯絡方式</b>：Phone<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span><br/>
    <b>聯絡電話</b>：（Mobile）0993277826<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://build.fhir.org/codesystem-contact-point-use.html\">ContactPointUse</a>#mobile） </span><br/>
    <b>聯絡電話使用效期</b>：2022-07-31至2024-07-31
  </p>
  <p>
    <b>聯絡地址</b>：(330)桃園市桃園區五福五街31號 <br />
    <b>  郵遞區號（postalCode）[extension: <a href=\"StructureDefinition-tw-postal-code.html\">tw-postal-code</a>]</b>：<a href=\"CodeSystem-postal-code3-tw.html\">330</a>
    <br />
    <b>  縣/市（district）</b>：桃園市 <br />
    <b>  鄉/鎮/市/區（city）</b>：桃園區 <br />
    <b>  路/街（line）</b>：五福五街 <br />
    <b>  號（number）[extension: <a href=\"StructureDefinition-tw-number.html\">tw-number</a>]</b>：31號 <br />
    <b>  國家（country）</b>：臺灣 <br />
  </p>
  <p>
     <b>資格證書的型別</b>：西醫師 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://snomed.info/sct\">SNOMED CT</a>#394802001） </span><br/>
     <b>資格證書的開始日期</b>：2005-05-25
  </p>
  <p>
    <b>照護服務提供人員影像</b>： <a href=\"https://1.bp.blogspot.com/-6dSaKA-5r0c/UZSs9HLyutI/AAAAAAAATBc/lxpq2MB3_mc/s400/doctor.png\">doctor.png</a>
    <br />
    <img src=\"https://1.bp.blogspot.com/-6dSaKA-5r0c/UZSs9HLyutI/AAAAAAAATBc/lxpq2MB3_mc/s400/doctor.png\" width=\"250px\" />
  </p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Practitioner-pra-nurse-example.fsh


Instance: pra-nurse-example
InstanceOf: TWCorePractitioner
Usage: #example
* name.use = #official
* name.family = "Chen"
* name.given = "Li"
* name.text = "陳莉"
* identifier.use = #official
* identifier.type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier.type.coding.code = #MD
* identifier.value = "KP00019"
* identifier.system = "https://www.tph.mohw.gov.tw"
* active = true
* gender = #female
* birthDate = "1995-11-26"
* telecom.system = #phone
* telecom.value = "0993547828"
* telecom.use = #mobile
* telecom.period.start = "2022-07-31"
* telecom.period.end = "2024-07-31"
* address.country = "TW"
* address.district = "桃園市"
* address.city = "桃園區"
* address.line = "五福五街"
* address.extension[0].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-number"
* address.extension[=].valueString = "3號"
* address.text = "桃園市桃園區五福五街3號"
* address.postalCode.extension.url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-postal-code"
* address.postalCode.extension.valueCodeableConcept.coding.system = "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/postal-code3-tw"
* address.postalCode.extension.valueCodeableConcept.coding.code = #330
* photo.contentType = #image/jpeg
* photo.data = "TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4="
* photo.url = "https://1.bp.blogspot.com/-0f1bsVB8aw8/Xtt6h79dCpI/AAAAAAABZRM/dnB0z8WkS149nP2XskcmSa3FbmiznjicwCNcBGAsYHQ/s1600/medical_scrub_woman_white.png"
* qualification.code = http://snomed.info/sct#106292003 "Professional nurse"
* qualification.period.start = "2005-01-01"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <h3>
    <b>護士基本資料</b>
  </h3>
  <p>
    <b>識別碼型別</b>：Medical License number <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#MD） </span><br/>
    <b>員工編號（official）</b>：KP00018 （https://www.tph.mohw.gov.tw）
  </p>
  <p>
    <b>健康照護服務提供者的紀錄（active）</b>：使用中
  </p>
  <p>
    <b>姓名（official）</b>：陳莉 Chen, Li
  </p>
  <p>
    <b>性別</b>：女性
  </p>
  <p>
    <b>出生日期</b>：1995-11-26
  </p>
  <p>
    <b>聯絡方式</b>：Phone<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span><br/>
    <b>聯絡電話</b>：（Mobile）0993547828<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://build.fhir.org/codesystem-contact-point-use.html\">ContactPointUse</a>#mobile） </span><br/>
    <b>聯絡電話使用效期</b>：2022-07-31至2024-07-31
  </p>
  <p>
    <b>聯絡地址</b>：(330)桃園市桃園區五福五街3號 <br />
    <b>  郵遞區號（postalCode）</b>[extension: <a href=\"StructureDefinition-tw-postal-code.html\">tw-postal-code</a>]： <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"CodeSystem-postal-code3-tw.html\">330</a># </span>
    <br />
    <b>  縣/市（district）</b>：桃園市 <br />
    <b>  鄉/鎮/市/區（city）</b>：桃園區 <br />
    <b>  路/街（line）</b>：五福五街 <br />
    <b>  號（number）</b>[extension: <a href=\"StructureDefinition-tw-number.html\">tw-number</a>]：3號 <br />
    <b>  國家（country）</b>：臺灣 <br />
  </p>
  <p>
     <b>資格證書的型別</b>：護士 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://snomed.info/sct\">SNOMED CT</a>#106292003） </span><br/>
     <b>資格證書的開始日期</b>：2005-01-01
  </p>
  <p>
    <b>照護服務提供人員影像</b>： <a href=\"https://1.bp.blogspot.com/-0f1bsVB8aw8/Xtt6h79dCpI/AAAAAAABZRM/dnB0z8WkS149nP2XskcmSa3FbmiznjicwCNcBGAsYHQ/s1600/medical_scrub_woman_white.png\">https://1.bp.blogspot.com/-0f1bsVB8aw8/Xtt6h79dCpI/AAAAAAABZRM/dnB0z8WkS149nP2XskcmSa3FbmiznjicwCNcBGAsYHQ/s1600/medical_scrub_woman_white.png</a>
    <br />
    <img src=\"https://1.bp.blogspot.com/-0f1bsVB8aw8/Xtt6h79dCpI/AAAAAAABZRM/dnB0z8WkS149nP2XskcmSa3FbmiznjicwCNcBGAsYHQ/s1600/medical_scrub_woman_white.png\" width=\"250px\" />
  </p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Practitioner-pra-phc-example.fsh

Instance: pra-phc-example
InstanceOf: TWCorePractitioner
Usage: #example
* name.use = #official
* name.family = "Chen"
* name.given = "Yao shi"
* name.text = "陳耀詩"
* identifier.use = #official
* identifier.type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier.type.coding.code = #MD
* identifier.value = "KP00020"
* identifier.system = "https://www.tph.mohw.gov.tw"
* active = true
* gender = #male
* birthDate = "1988-12-08"
* telecom.system = #phone
* telecom.value = "0912475693"
* telecom.use = #mobile
* telecom.period.start = "2022-01-31"
* telecom.period.end = "2024-12-31"
* address.country = "TW"
* address.district = "桃園市"
* address.city = "桃園區"
* address.line = "五福三街"
* address.extension[0].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-number"
* address.extension[=].valueString = "1號"
* address.text = "桃園市桃園區五福三街1號"
* address.postalCode.extension.url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-postal-code"
* address.postalCode.extension.valueCodeableConcept.coding.system = "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/postal-code3-tw"
* address.postalCode.extension.valueCodeableConcept.coding.code = #330
* photo.contentType = #image/jpeg
* photo.data = "TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4="
* photo.url = "https://3.bp.blogspot.com/--puyGLwGGDI/VbnRxTNap3I/AAAAAAAAwRU/5WyDLwhKguo/s800/yakuzaishi_man.png"
* qualification.code = http://snomed.info/sct#46255001 "Pharmacist"
* qualification.period.start = "2006-08-14"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <h3>
    <b>藥師基本資料</b>
  </h3>
  <p>
    <b>識別碼型別</b>：Medical License number <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#MD） </span><br/>
    <b>員工編號（official）</b>：KP00020 （https://www.tph.mohw.gov.tw）
  </p>
  <p>
    <b>健康照護服務提供者的紀錄（active）</b>：使用中
  </p>
  <p>
    <b>姓名（official）</b>：陳耀詩 Chen, Yao shi
  </p>
  <p>
    <b>性別</b>：男性
  </p>
  <p>
    <b>出生日期</b>：1988-12-08
  </p>
  <p>
    <b>聯絡方式</b>：Phone<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span><br/>
    <b>聯絡電話</b>：（Mobile）0912475693<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://build.fhir.org/codesystem-contact-point-use.html\">ContactPointUse</a>#mobile） </span><br/>
    <b>聯絡電話使用效期</b>：2022-07-31至2024-12-31
  </p>
  <p>
    <b>聯絡地址</b>：(330)桃園市桃園區五福三街1號 <br />
    <b>  郵遞區號（postalCode）</b>[extension: <a href=\"StructureDefinition-tw-postal-code.html\">tw-postal-code</a>]： <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"CodeSystem-postal-code3-tw.html\">330</a># </span>
    <br />
    <b>  縣/市（district）</b>：桃園市 <br />
    <b>  鄉/鎮/市/區（city）</b>：桃園區 <br />
    <b>  路/街（line）</b>：五福三街 <br />
    <b>  號（number）</b>[extension: <a href=\"StructureDefinition-tw-number.html\">tw-number</a>]：1號 <br />
    <b>  國家（country）</b>：臺灣 <br />
  </p>
  <p>
     <b>資格證書的型別</b>：藥師 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://snomed.info/sct\">SNOMED CT</a>#46255001） </span><br/>
     <b>資格證書的開始日期</b>：2005-05-25
  </p>
  <p>
    <b>照護服務提供人影像</b>： <a href=\"https://3.bp.blogspot.com/--puyGLwGGDI/VbnRxTNap3I/AAAAAAAAwRU/5WyDLwhKguo/s800/yakuzaishi_man.png\">https://3.bp.blogspot.com/--puyGLwGGDI/VbnRxTNap3I/AAAAAAAAwRU/5WyDLwhKguo/s800/yakuzaishi_man.png</a>
    <br />
    <img src=\"https://3.bp.blogspot.com/--puyGLwGGDI/VbnRxTNap3I/AAAAAAAAwRU/5WyDLwhKguo/s800/yakuzaishi_man.png\" width=\"250px\" />
  </p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Practitioner-pra-radio-example.fsh

Instance: pra-radio-example
InstanceOf: TWCorePractitioner
Usage: #example
* name.use = #official
* name.family = "Wang"
* name.given = "Xiao Ming"
* name.text = "王曉明"
* identifier.use = #official
* identifier.type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier.type.coding.code = #MD
* identifier.value = "KP00018"
* identifier.system = "https://www.tph.mohw.gov.tw"
* active = true
* gender = #male
* birthDate = "1988-01-16"
* telecom.system = #phone
* telecom.value = "0993277827"
* telecom.use = #mobile
* telecom.period.start = "2022-07-31"
* telecom.period.end = "2024-07-31"
* address.country = "TW"
* address.district = "桃園市"
* address.city = "桃園區"
* address.line = "五福五街"
* address.extension[0].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-number"
* address.extension[=].valueString = "31號"
* address.text = "桃園市桃園區五福五街31號"
* address.postalCode.extension.url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-postal-code"
* address.postalCode.extension.valueCodeableConcept.coding.system = "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/postal-code3-tw"
* address.postalCode.extension.valueCodeableConcept.coding.code = #330
* photo.contentType = #image/jpeg
* photo.data = "TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4="
* photo.url = "https://1.bp.blogspot.com/-aee3S1fF82s/Xtt6fVkK9rI/AAAAAAABZQk/YEZzdVTp_w4kHSLtq4oZt8z6qyrqagC1wCNcBGAsYHQ/s1600/medical_scrub_man_darkblue.png"
* qualification.code = http://snomed.info/sct#66862007 "Radiologist"
* qualification.period.start = "2005-01-01"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <h3>
    <b>醫事放射師基本資料</b>
  </h3>
  <p>
    <b>識別碼型別</b>：Medical License number <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#MD） </span><br/>
    <b>員工編號（official）</b>：KP00018 （https://www.tph.mohw.gov.tw）
  </p>
  <p>
    <b>健康照護服務提供者的紀錄（active）</b>：使用中
  </p>
  <p>
    <b>姓名（official）</b>：王曉明 Wang, Xiao Ming
  </p>
  <p>
    <b>性別</b>：男性
  </p>
  <p>
    <b>出生日期</b>：1988-01-16
  </p>
  <p>
    <b>聯絡方式</b>：Phone<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span><br/>
    <b>聯絡電話</b>：（Mobile）0993277827<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://build.fhir.org/codesystem-contact-point-use.html\">ContactPointUse</a>#mobile） </span><br/>
    <b>聯絡電話使用效期</b>：2022-07-31至2024-07-31
  </p>
  <p>
    <b>聯絡地址</b>：(330)桃園市桃園區五福五街31號 <br />
    <b>  郵遞區號（postalCode）</b>[extension: <a href=\"StructureDefinition-tw-postal-code.html\">tw-postal-code</a>]： <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"CodeSystem-postal-code3-tw.html\">330</a># </span>
    <br />
    <b>  縣/市（district）</b>：桃園市 <br />
    <b>  鄉/鎮/市/區（city）</b>：桃園區 <br />
    <b>  路/街（line）</b>：五福五街 <br />
    <b>  號（number）</b>[extension: <a href=\"StructureDefinition-tw-number.html\">tw-number</a>]：31號 <br />
    <b>  國家（country）</b>：臺灣 <br />
  </p>
  <p>
     <b>資格證書的型別</b>：醫事放射師(Radiologist) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://snomed.info/sct\">SNOMED CT</a>#66862007） </span><br/>
     <b>資格證書的開始日期</b>：2005-01-01
  </p>
  <p>
    <b>照護服務提供人員影像</b>： <a href=\"https://1.bp.blogspot.com/-aee3S1fF82s/Xtt6fVkK9rI/AAAAAAABZQk/YEZzdVTp_w4kHSLtq4oZt8z6qyrqagC1wCNcBGAsYHQ/s1600/medical_scrub_man_darkblue.png\">https://1.bp.blogspot.com/-aee3S1fF82s/Xtt6fVkK9rI/AAAAAAABZQk/YEZzdVTp_w4kHSLtq4oZt8z6qyrqagC1wCNcBGAsYHQ/s1600/medical_scrub_man_darkblue.png</a>
    <br />
    <img src=\"https://1.bp.blogspot.com/-aee3S1fF82s/Xtt6fVkK9rI/AAAAAAABZQk/YEZzdVTp_w4kHSLtq4oZt8z6qyrqagC1wCNcBGAsYHQ/s1600/medical_scrub_man_darkblue.png\" width=\"250px\" />
  </p>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/PractitionerRole-praro-dr-example.fsh

Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Instance: praro-dr-example
InstanceOf: TWCorePractitionerRole
Usage: #example
* identifier.use = #official
* identifier.type = $v2-0203#MD
* identifier.system = "https://www.tph.mohw.gov.tw"
* identifier.value = "KP00017"
* active = true
* period.start = "2022-07-31"
* period.end = "2024-07-31"
* practitioner = Reference(Practitioner/pra-dr-example) "王依昇"
* code = http://snomed.info/sct#394802001 "General medicine"
* specialty = http://snomed.info/sct#418960008 "Otolaryngology (qualifier value)"
* location = Reference(Location/loc-ent-example) "衛生福利部臺北醫院耳鼻喉科"
* telecom.system = #phone
* telecom.value = "0993277826"
* telecom.use = #mobile
* availableTime.daysOfWeek[0] = #mon
* availableTime.daysOfWeek[+] = #tue
* availableTime.daysOfWeek[+] = #wed
* availableTime.daysOfWeek[+] = #thu
* availableTime.daysOfWeek[+] = #fri
* availableTime.allDay = false
* availableTime.availableStartTime = "08:00:00"
* availableTime.availableEndTime = "16:00:00"
* notAvailable.description = "家中有事請假"
* notAvailable.during.start = "2023-08-01"
* notAvailable.during.end = "2023-08-15"
* availabilityExceptions = "若遇到緊急狀況可能會影響工作日"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <h3>
    <b>醫師角色基本資料</b>
  </h3>
  <p>
    <b>識別碼型別</b>：Medical License number <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#MD） </span><br/>
    <b>員工編號（official）</b>：KP00017 （https://www.tph.mohw.gov.tw）
  </p>
  <p>
    <b>紀錄狀態（active）</b>：使用中
  </p>
  <p>
    <b>授權可執業時間範圍</b>：2022-07-31 ～ 2024-07-31
  </p>
  <p>
	<b>健康照護服務提供者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
  </p>
  <p>
	<b>地點</b>：<a href=\"Location-loc-ent-example.html\">Location/loc-ent-example</a> \"衛生福利部臺北醫院耳鼻喉科\"
  </p>
  <p>
    <b>角色</b>：西醫師(General medicine) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://snomed.info/sct\">SNOMED CT</a>#394802001） </span>
  </p>
  <p>
    <b>角色專業</b>：耳鼻喉科(Otolaryngology (qualifier value)) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://snomed.info/sct\">SNOMED CT</a>#418960008） </span>
  </p>

  <p>
    <b>聯絡方式</b>：Phone<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span><br/>
    <b>聯絡電話</b>：（Mobile）0993277826<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://build.fhir.org/codesystem-contact-point-use.html\">ContactPointUse</a>#mobile） </span><br/>
    <b>聯絡時間</b>：週一 ～ 週五 ， 08:00-16:00 <br/>
    <b>聯絡注意事項</b>：若遇到緊急狀況可能會影響工作日。
  </p>

  <p>
    <b>此期間無提供服務</b>：2023-08-01 ～ 2023-08-15 <br/>
    <b>無法提供原因</b>：家中有事請假。 <br/>
  </p>
 
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/PractitionerRole-praro-nurse-example.fsh

Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203

Instance: praro-nurse-example
InstanceOf: TWCorePractitionerRole
Usage: #example
* identifier.use = #official
* identifier.type = $v2-0203#MD
* identifier.system = "https://www.tph.mohw.gov.tw"
* identifier.value = "KP00019"
* active = true
* period.start = "2022-07-31"
* period.end = "2024-07-31"
* practitioner = Reference(Practitioner/pra-nurse-example) "陳莉"
* code = http://snomed.info/sct#224535009 "Registered nurse"
* specialty = http://snomed.info/sct#773568002 "Emergency medicine"
* location = Reference(Location/loc-er-example) "衛生福利部臺北醫院急救室"
* telecom.system = #phone
* telecom.value = "0993547828"
* telecom.use = #mobile
* availableTime.daysOfWeek[0] = #mon
* availableTime.daysOfWeek[+] = #tue
* availableTime.daysOfWeek[+] = #wed
* availableTime.daysOfWeek[+] = #thu
* availableTime.daysOfWeek[+] = #fri
* availableTime.allDay = false
* availableTime.availableStartTime = "08:00:00"
* availableTime.availableEndTime = "16:00:00"
* notAvailable.description = "家中有事請假"
* notAvailable.during.start = "2023-08-01"
* notAvailable.during.end = "2023-08-15"
* availabilityExceptions = "若遇到緊急狀況可能會影響工作日"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <h3>
    <b>護士角色基本資料</b>
  </h3>
  <p>
    <b>識別碼型別</b>：Medical License number <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#MD） </span><br/>
    <b>員工編號（official）</b>：KP00019 （https://www.tph.mohw.gov.tw）
  </p>
  <p>
    <b>紀錄狀態（active）</b>：使用中
  </p>
  <p>
    <b>授權可執業時間範圍</b>：2022-07-31 ～ 2024-07-31
  </p>
  <p>
	<b>健康照護服務提供者</b>：<a href=\"Practitioner-pra-nurse-example.html\">Practitioner/pra-nurse-example</a> \"陳莉\"
  </p>
  <p>
	<b>地點</b>：<a href=\"Location-loc-er-example.html\">Location/loc-er-example</a> \"衛生福利部臺北醫院急救室\"
  </p>
  <p>
    <b>角色</b>：護士(Registered nurse) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://snomed.info/sct\">SNOMED CT</a>#224535009） </span>
  </p>
  <p>
    <b>角色專業</b>：急診醫學科(Emergency medicine)<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://snomed.info/sct\">SNOMED CT</a>#773568002） </span>
  </p>

  <p>
    <b>聯絡方式</b>：Phone<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span><br/>
    <b>聯絡電話</b>：（Mobile）0993547828<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://build.fhir.org/codesystem-contact-point-use.html\">ContactPointUse</a>#mobile） </span><br/>
    <b>聯絡時間</b>：週一 ～ 週五 ， 08:00-16:00 <br/>
    <b>聯絡注意事項</b>：若遇到緊急狀況可能會影響工作日。
  </p>

  <p>
    <b>此期間無提供服務</b>：2023-08-01 ～ 2023-08-15 <br/>
    <b>無法提供原因</b>：家中有事請假。 <br/>
  </p>
 
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/PractitionerRole-praro-phc-example.fsh

Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203

Instance: praro-phc-example
InstanceOf: TWCorePractitionerRole
Usage: #example
* identifier.use = #official
* identifier.type = $v2-0203#MD
* identifier.system = "https://www.tph.mohw.gov.tw"
* identifier.value = "KP00020"
* active = true
* period.start = "2022-07-31"
* period.end = "2024-07-31"
* practitioner = Reference(Practitioner/pra-phc-example) "陳耀詩"
* code = http://snomed.info/sct#46255001 "Pharmacist"
* location = Reference(Location/loc-pharm-example) "第二藥局"
* telecom.system = #phone
* telecom.value = "0912475693"
* telecom.use = #mobile
* availableTime.daysOfWeek[0] = #mon
* availableTime.daysOfWeek[+] = #tue
* availableTime.daysOfWeek[+] = #wed
* availableTime.daysOfWeek[+] = #thu
* availableTime.daysOfWeek[+] = #fri
* availableTime.allDay = false
* availableTime.availableStartTime = "08:00:00"
* availableTime.availableEndTime = "16:00:00"
* notAvailable.description = "家中有事請假"
* notAvailable.during.start = "2023-08-01"
* notAvailable.during.end = "2023-08-15"
* availabilityExceptions = "若遇到緊急狀況可能會影響工作日"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <h3>
    <b>藥師角色基本資料</b>
  </h3>
  <p>
    <b>識別碼型別</b>：Medical License number <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#MD） </span><br/>
    <b>員工編號（official）</b>： KP00020 （https://www.tph.mohw.gov.tw）
  </p>
  <p>
    <b>紀錄狀態（active）</b>：使用中
  </p>
  <p>
    <b>授權可執業時間範圍</b>：2022-07-31 ～ 2024-07-31
  </p>
  <p>
	<b>健康照護服務提供者</b>：<a href=\"Practitioner-pra-phc-example.html\">Practitioner/pra-phc-example</a> \"陳耀詩\"
  </p>
  <p>
	<b>地點</b>：<a href=\"Location-loc-pharm-example.html\">Location/loc-pharm-example</a> \"第二藥局\"
  </p>
  <p>
    <b>角色</b>：藥師(Pharmacist) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://snomed.info/sct\">SNOMED CT</a>#46255001） </span>
  </p>

  <p>
    <b>聯絡方式</b>：Phone<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span><br/>
    <b>聯絡電話</b>：（Mobile）0912475693<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://build.fhir.org/codesystem-contact-point-use.html\">ContactPointUse</a>#mobile） </span><br/>
    <b>聯絡時間</b>：週一 ～ 週五 ， 08:00-16:00 <br/>
    <b>聯絡注意事項</b>：若遇到緊急狀況可能會影響工作日。
  </p>

  <p>
    <b>此期間無提供服務</b>：2023-08-01 ～ 2023-08-15 <br/>
    <b>無法提供原因</b>：家中有事請假。 <br/>
  </p>
 
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/PractitionerRole-praro-radio-example.fsh

Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203

Instance: praro-radio-example
InstanceOf: TWCorePractitionerRole
Usage: #example
* meta.profile = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/PractitionerRole-twcore"
* identifier.use = #official
* identifier.type = $v2-0203#MD
* identifier.system = "https://www.tph.mohw.gov.tw"
* identifier.value = "KP00018"
* active = true
* period.start = "2022-07-31"
* period.end = "2024-07-31"
* practitioner = Reference(Practitioner/pra-radio-example) "王曉明"
* code = http://snomed.info/sct#159016003 "Medical radiographer"
* specialty = http://snomed.info/sct#394914008 "Radiology - specialty (qualifier value)"
* location = Reference(Location/loc-hrad-example) "衛生福利部臺北醫院X光室"
* telecom.system = #phone
* telecom.value = "0993277827"
* telecom.use = #mobile
* availableTime.daysOfWeek[0] = #mon
* availableTime.daysOfWeek[+] = #tue
* availableTime.daysOfWeek[+] = #wed
* availableTime.daysOfWeek[+] = #thu
* availableTime.daysOfWeek[+] = #fri
* availableTime.allDay = false
* availableTime.availableStartTime = "08:00:00"
* availableTime.availableEndTime = "16:00:00"
* notAvailable.description = "家中有事請假"
* notAvailable.during.start = "2023-08-01"
* notAvailable.during.end = "2023-08-15"
* availabilityExceptions = "若遇到緊急狀況可能會影響工作日"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
  <h3>
    <b>醫學放射技師角色基本資料</b>
  </h3>
  <p>
    <b>識別碼型別</b>：Medical License number <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://terminology.hl7.org/CodeSystem/v2-0203\">Identifier Type Codes</a>#MD） </span><br/>
    <b>員工編號（official）</b>： KP00018 （https://www.tph.mohw.gov.tw）
  </p>
  <p>
    <b>紀錄狀態（active）</b>：使用中
  </p>
  <p>
    <b>授權可執業時間範圍</b>：2022-07-31 ～ 2024-07-31
  </p>
  <p>
	<b>健康照護服務提供者</b>：<a href=\"Practitioner-pra-radio-example.html\">Practitioner/pra-radio-example</a> \"王曉明\"
  </p>
  <p>
	<b>地點</b>：<a href=\"Location-loc-hrad-example.html\">Location/loc-hrad-example</a> \"衛生福利部臺北醫院X光室\"
  </p>
  <p>
    <b>角色</b>： 醫學放射技師（Medical radiographer) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://snomed.info/sct\">SNOMED CT</a>#159016003） </span>
  </p>
  <p>
    <b>角色專業</b>：放射線科(Radiology - specialty (qualifier value)) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"http://snomed.info/sct\">SNOMED CT</a>#394914008） </span>
  </p>

  <p>
    <b>聯絡方式</b>：Phone<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://hl7.org/fhir/R4/valueset-contact-point-system.html\">ContactPointSystem</a>#phone） </span><br/>
    <b>聯絡電話</b>：（Mobile）0993277827<span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> （ <a href=\"https://build.fhir.org/codesystem-contact-point-use.html\">ContactPointUse</a>#mobile） </span><br/>
    <b>聯絡時間</b>：週一 ～ 週五 ， 08:00-16:00 <br/>
    <b>聯絡注意事項</b>：若遇到緊急狀況可能會影響工作日。
  </p>

  <p>
    <b>此期間無提供服務</b>：2023-08-01 ～ 2023-08-15 <br/>
    <b>無法提供原因</b>： 家中有事請假。 <br/>
  </p>
 
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Procedure-pro-appendectomy-example.fsh

Alias: $sct = http://snomed.info/sct

Instance: pro-appendectomy-example
InstanceOf: TWCoreProcedure
Usage: #example
* status = #completed
* code = $sct#80146002 "Appendectomy"
* code.text = "闌尾切除術"
* subject = Reference(Patient/pat-example)
* performedDateTime = "2023-11-10T14:00:00Z"
* outcome = $sct#300309008 "Appendix absent"
* outcome.text = "闌尾成功切除"
* followUp = http://snomed.info/sct#274474001 "Bone immobilization"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>處置或手術基本資料</b>
	</h3>
	<p>
		<b>處置或手術狀態</b>：completed
	</p>
	<p>
		<b>處置或手術的識別碼</b>：闌尾切除術(Appendectomy) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#80146002) </span>
	</p>
	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
	<p>
		<b>執行時間</b>：2023-11-10T14:00:00
	</p>
	<p>
		<b>處置或手術的結果識別碼</b>：闌尾成功切除(Appendix absent) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#300309008) </span>
	</p>
    <p>
		<b>追蹤說明識別碼</b>： Bone immobilization  <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#274474001) </span>
	</p>

</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Procedure-pro-example.fsh

Instance: pro-example
InstanceOf: TWCoreProcedure
Usage: #example
* status = http://hl7.org/fhir/event-status#completed
* code = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/icd-10-pcs-2021-tw#BU46ZZZ
* code.text = "子宮超音波"
* subject = Reference(Patient/pat-example)
* performedDateTime = "2022-08-12"
* asserter = Reference(Practitioner/pra-dr-example)
* performer.actor = Reference(Practitioner/pra-dr-example)
* performer.onBehalfOf = Reference(Organization/org-hosp-example)
* bodySite = http://snomed.info/sct#9258009
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>處置或手術基本資料</b>
	</h3>
	<p>
		<b>處置或手術狀態</b>：completed
	</p>
	<p>
		<b>處置或手術的識別碼</b>：子宮超音波 <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"CodeSystem-icd-10-pcs-2021-tw.html\">臺灣2021年中文版ICD-10-PCS</a>#BU46ZZZ) </span>
	</p>
	<p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
	<p>
		<b>執行時間</b>：2022-08-12
	</p>
	<p>
		<b>診斷者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
	<p>
		<b>身體部位</b>：Gravid uterus <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#9258009) </span>
	</p>
	<h3>執行處置或手術的人員</h3>
	<table class=\"grid\">
		<tr>
			<td>-</td>
			<td>
				<b>角色</b>
			</td>
			<td>
				<b>所屬機構</b>
			</td>
		</tr>
		<tr>
			<td>*</td>
			<td>
				<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
			</td>
			<td>
				<a href=\"Organization-org-hosp-example.html\">Organization/org-hosp-example</a> \"衛生福利部臺北醫院\"
			</td>
		</tr>
	</table>
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Provenance-pov-example.fsh

Alias: $provenance-participant-type = http://terminology.hl7.org/CodeSystem/provenance-participant-type

Instance: pov-example
InstanceOf: TWCoreProvenance
Usage: #example
* target.extension.url = "http://hl7.org/fhir/StructureDefinition/targetElement"
* target.extension.valueUri = "race"
* target = Reference(Patient/pat-example)
* recorded = "2023-02-28T15:26:23.217+00:00"
* agent.type = $provenance-participant-type#informant "Informant"
* agent.who = Reference(Patient/pat-example)
* entity.role = #source
* entity.what.display = "admission form"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/QuestionnaireResponse-qr-example.fsh

Alias: $loinc = http://loinc.org

Instance: qr-example
InstanceOf: TWCoreQuestionnaireResponse
Usage: #example
* questionnaire = "http://hl7.org/fhir/uv/sdc/Questionnaire/questionnaire-sdc-profile-example-loinc|3.0"
* status = #completed
* subject = Reference(Patient/pat-example)
* authored = "2023-08-14T20:40:49.675Z"
* author = Reference(Practitioner/pra-dr-example)
* author.type = "Practitioner"
* item[0].linkId = "Medication/header"
* item[=].item[0].linkId = "0"
* item[=].item[=].text = "Form ID:"
* item[=].item[=].answer.valueString = "000"
* item[=].item[+].linkId = "74080-3/74081-1"
* item[=].item[=].text = "Event ID:"
* item[=].item[=].answer.valueString = "456"
* item[=].item[+].linkId = "74080-3/30947-6"
* item[=].item[=].text = "Initial Report Date (HERF Q1)"
* item[=].item[=].answer.valueString = "2016-03-14"
* item[+].linkId = "Medication/SEC00"
* item[=].text = "Medication or Other Substance"
* item[=].item[0].linkId = "Medication/SEC01/74080-3"
* item[=].item[=].item[0].linkId = "74080-3/74076-1"
* item[=].item[=].item[=].text = "What type of medication/substance was involved?"
* item[=].item[=].item[=].answer.valueCoding = $loinc#LA20271-5 "Medications"
* item[=].item[=].item[=].answer.item.linkId = "74080-3/74075-3"
* item[=].item[=].item[=].answer.item.text = "What type of medication?"
* item[=].item[=].item[=].answer.item.answer.valueCoding = $loinc#LA20278-0 "Prescription or over-the-counter (including herbal supplements)"
* item[=].item[=].item[+].linkId = "74080-3/74072-0"
* item[=].item[=].item[=].text = "Which of the following best characterizes the event?"
* item[=].item[=].item[=].answer.valueCoding = $loinc#LA20275-6 "Incorrect action (process failure or error) (e.g., such as administering overdose or incorrect medication)"
* item[=].item[=].item[+].linkId = "74080-3/74071-2"
* item[=].item[=].item[=].text = "What was the incorrect action?"
* item[=].item[=].item[=].answer.valueCoding = $loinc#LA20276-4 "Incorrect patient"
* item[=].item[=].item[+].linkId = "74080-3/74063-9"
* item[=].item[=].item[=].text = "At what stage in the process did the event originate, regardless of the stage at which it was discovered?"
* item[=].item[=].item[=].answer.valueCoding = $loinc#LA20296-2 "Administering"
* item[=].item[+].linkId = "74080-3/74078-7"
* item[=].item[=].item[0].linkId = "74080-3/74078-7/74062-1"
* item[=].item[=].item[=].text = "Generic name or investigational drug name"
* item[=].item[=].item[=].answer.valueString = "Acetaminophen"
* item[=].item[=].item[+].linkId = "74080-3/74078-7/74055-5"
* item[=].item[=].item[=].text = "Dosage form of Product"
* item[=].item[=].item[=].answer.valueString = "Tablet"
* item[=].item[=].item[+].linkId = "74080-3/74078-7/74053-0"
* item[=].item[=].item[=].text = "Was this medication/substance prescribed for this patient?"
* item[=].item[=].item[=].answer.valueCoding = $loinc#LA32-8 "No"
* item[=].item[=].item[+].linkId = "Medication/74052-2"
* item[=].item[=].item[=].text = "Was this medication/substance given to this patient?"
* item[=].item[=].item[=].answer.valueCoding = $loinc#LA33-6 "Yes"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/RelatedPerson-rel-example.fsh

Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $postal-code3-tw = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/postal-code3-tw

Instance: rel-example
InstanceOf: TWCoreRelatedPerson
Usage: #example
* active = true
* patient = Reference(Patient/pat-example)
* relationship = $v3-RoleCode#NIECE "niece"
* name.use = #official
* name.text = "陳簡伊"
* name.family = "Chen"
* name.given = "Jian Yi"
* telecom.system = #phone
* telecom.value = "0911595995"
* telecom.use = #mobile
* birthDate = "1996-01-28"
* address.extension[0].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-section"
* address.extension[=].valueString = "三段"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-number"
* address.extension[=].valueString = "210號"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-village"
* address.extension[=].valueString = "大有里"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-neighborhood"
* address.extension[=].valueString = "19鄰"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-lane"
* address.extension[=].valueString = "52巷"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-alley"
* address.extension[=].valueString = "6弄"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-floor"
* address.extension[=].valueString = "2樓"
* address.extension[+].url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-room"
* address.extension[=].valueString = "C室"
* address.text = "臺北市大同區大有里19鄰承德路三段52巷6弄210號2樓C室"
* address.line = "承德路"
* address.city = "臺北市"
* address.district = "大同區"
* address.postalCode.extension.url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-postal-code"
* address.postalCode.extension.valueCodeableConcept = $postal-code3-tw#103
* address.country = "TW"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/ServiceRequest-sr-example.fsh

Instance: sr-example
InstanceOf: TWCoreServiceRequest
Usage: #example
* status = #active
* intent = #order
* category[twcore] = http://snomed.info/sct#387713003  "Surgical procedure (procedure)"
* code.coding = $sct#104001 "Excision of lesion of patella (procedure)"
* subject = Reference(Patient/pat-example)
* occurrenceDateTime = "2021-11-20"
* authoredOn = "2021-11-12T10:59:38-08:00"
* requester = Reference(Practitioner/pra-dr-example)

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Specimen-spe-acne-example.fsh

Alias: $sct = http://snomed.info/sct
Alias: $v2-0916 = http://terminology.hl7.org/CodeSystem/v2-0916

Instance: spe-ance-example
InstanceOf: TWCoreSpecimen
Usage: #example
* status = #available
* type = $sct#309068002 "Skin lesion sample"
* subject = Reference(Patient/pat-example) "陳加玲"
* collection.collector = Reference(Practitioner/pra-dr-example) "王依昇"
* collection.collectedDateTime = "2023-11-07T08:30:08.000Z"
* collection.method.coding = $sct#430820001 "Procedure on tissue specimen"
* collection.method.text = "組織樣本採集"
* collection.bodySite.coding = $sct#119199005 "Lung part"
* collection.bodySite.text = "肺部"
* collection.quantity.value = 2
* collection.quantity.unit  = "g"
* collection.fastingStatusCodeableConcept.coding = $v2-0916#FNA "Fasting not asked of the patient at time of procedure."
* receivedTime = "2023-11-07T09:00:00.000Z"
* processing.description = "顯微鏡檢查"
* processing.procedure.coding = $sct#309733006 "Examination of organ under microscope"
* processing.procedure.text = "Examination of organ under microscope"
* processing.timeDateTime = "2023-11-07T09:30:00.000Z"
* container.description = "組織儲存容器"
* container.type.coding = $sct#706047007 "Fecal specimen container"
* container.capacity.value = 20
* container.capacity.unit = "mL"
* container.specimenQuantity.value = 10
* container.specimenQuantity.unit = "g"
* note.text = "此組織樣本來自患者的肺部手術組織"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>組織樣本</b>
	</h3>
	<p>
		<b>檢體狀態</b>：Available <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/specimen-status\">SpecimenStatus</a>#available) </span>
	</p>
    <p>
		<b>檢體類型</b>：Skin lesion sample <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SpecimenType</a>#309068002) </span>
	</p>
    <p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
    <p>
		<b>病人採檢前禁食狀況</b>：Fasting not asked of the patient at time of procedure. <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v2-0916\">v2 Relevant Clincial Information</a>#FNA) </span>
    </p>
    <p>
		<b>檢查者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
    <blockquote>
	<p><b>檢體資料</b></p>
    <p>
		<b>採集檢體的時間</b>：2023-11-07T08:30:08<br />
		<b>執行檢體採集的技術</b>：Procedure on tissue specimen <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#430820001) </span> <br />
		<b>解剖採集部位</b>：肺部(Lung part) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#119199005) </span> <br />
		<b>採集檢體的數量</b>：2 g 
    </p>
    </blockquote>

    <blockquote>
	<p><b>檢體處理資料</b></p>
	    <b>處理步驟</b>：顯微鏡檢查(Examination of organ under microscope) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#309733006) </span><br />
	    <b>檢體處理的日期和時間</b>：2023-11-07T09:30:00 <br />

	<p><b>檢體容器資料</b></p>
    <p>
	    <b>容器類型</b>：Fecal specimen container <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#706047007) </span> <br />
	    <b>容器說明</b>：組織儲存容器 <br />
		<b>容器的大小</b>：20 mL <br />
		<b>容器內的檢體量</b>：10 g 
	</p>	
    </blockquote>

    <p>
		<b>備註</b>：此組織樣本來自患者的肺部手術組織
    </p>    
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Specimen-spe-blood-example.fsh

Instance: spe-blood-example
InstanceOf: TWCoreSpecimen
Usage: #example
* identifier.system = "https://www.tph.mohw.gov.tw"
* identifier.value = "1a3f5b7d-9e2c-4f6a-8c1e-0b2d4e6f8a9c"
* accessionIdentifier.value = "20150816-0001"
* status = http://hl7.org/fhir/specimen-statuss#available
* type = http://snomed.info/sct#119297000 "Blood specimen"
* subject = Reference(Patient/pat-example) "陳加玲"
* collection.collector = Reference(Practitioner/pra-dr-example) "王依昇"
* collection.collectedDateTime = "2023-11-03T08:30:08.000Z"
* collection.method.coding = http://snomed.info/sct#278450005 "Finger-prick sampling"
* collection.method.text = "Phlebotomy"
* collection.bodySite.coding = http://snomed.info/sct#53130003 "Venous Blood"
* collection.bodySite.text = "Venous Blood"
* collection.quantity.value = 4
* collection.quantity.unit = "mL"
* collection.quantity.system = "http://unitsofmeasure.org"
* collection.quantity.code = http://unitsofmeasure.org#mL
* collection.fastingStatusCodeableConcept.coding = http://terminology.hl7.org/CodeSystem/v2-0916#F "Patient was fasting prior to the procedure."
* receivedTime = "2023-11-04T09:00:00.000Z"
* processing[0].description = "Centrifugation"
* processing[0].procedure.coding = http://snomed.info/sct#85457002 "Centrifugation"
* processing[0].procedure.text = "Centrifugation"
* processing[0].timeDateTime = "2023-11-04T09:30:00.000Z"
* processing[1].description = "Freezing"
* processing[1].procedure.coding = http://snomed.info/sct#48103003 "Freezing"
* processing[1].procedure.text = "Freezing"
* processing[1].timeDateTime = "2023-11-04T10:00:00.000Z"
* container.description = "真空採血管"
* container.type.coding = http://snomed.info/sct#701516009 "Evacuated blood collection tube transport container"
* container.capacity.value = 6
* container.capacity.unit = "mL"
* container.capacity.system = "http://unitsofmeasure.org"
* container.capacity.code = http://unitsofmeasure.org#mL
* container.specimenQuantity.value = 4
* container.specimenQuantity.unit = "mL"
* container.specimenQuantity.system = "http://unitsofmeasure.org"
* container.specimenQuantity.code = http://unitsofmeasure.org#mL
* note.text = "此血液檢體來自患者的最後一次例行檢查"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>血液檢體</b>
	</h3>
	<p>
		<b>檢體狀態</b>：Available <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/specimen-status\">SpecimenStatus</a>#available) </span>
	</p>
    <p>
		<b>檢體識別碼</b>：1a3f5b7d-9e2c-4f6a-8c1e-0b2d4e6f8a9c
	</p>
    <p>
		<b>實驗室識別碼</b>：20150816-0001
	</p>
    <p>
		<b>檢體類型</b>：Blood, Autopsy <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#119297000) </span>
	</p>
    <p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
    <p>
		<b>病人採檢前禁食狀況</b>：Patient was fasting prior to the procedure. <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v2-0916\">v2 Relevant Clincial Information</a>#F) </span>
    </p>
    <p>
		<b>檢查者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
    <blockquote>
	<p><b>檢體資料</b></p>
    <p>
		<b>採集檢體的時間</b>：2023-11-03T08:30:08.000Z<br />
		<b>執行檢體採集的技術</b>：Finger-prick sampling <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#278450005) </span> <br />
		<b>解剖採集部位</b>：Venous Blood <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#53130003) </span> <br />
		<b>採集檢體的數量</b>：4 mL <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://unitsofmeasure.org\">UCUM</a>#mL) </span>
    </p>
    </blockquote>

    <blockquote>
	<p><b>檢體處理資料</b></p>
	    <b>處理步驟(一)</b>：Centrifugation <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#85457002) </span><br />
	    <b>檢體處理的日期和時間(一)</b>：2023-11-04T09:30:00.000Z 
<br /> 
	    <b>處理步驟(二)</b>：Freezing <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#48103003) </span> <br />
	    <b>檢體處理的日期和時間(二)</b>：2023-11-04T10:00:00.000Z
<br />
	<p><b>檢體容器資料</b></p>
    <p>
	    <b>容器類別</b>：Evacuated blood collection tube transport container <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#701516009) </span> <br />
	    <b>容器說明</b>：真空採血管 <br />
		<b>容器的大小</b>：6 mL <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://unitsofmeasure.org\">UCUM</a>#mL) </span> <br />
		<b>容器內的檢體量</b>：4 mL <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://unitsofmeasure.org\">UCUM</a>#mL) </span>
	</p>	
    </blockquote>
    <p>
		<b>備註</b>：此血液檢體來自患者的最後一次例行檢查
    </p>    
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Specimen-spe-stool-example.fsh

Alias: $v2-0916 = http://terminology.hl7.org/CodeSystem/v2-0916

Instance: spe-stool-example
InstanceOf: TWCoreSpecimen
Usage: #example
* meta.profile = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/Specimen-twcore"
* status = #available
* type = http://snomed.info/sct#119339001 "Stool specimen"
* subject = Reference(Patient/pat-example) "陳加玲"
* collection.collector = Reference(Practitioner/pra-dr-example) "王依昇"
* collection.collectedDateTime = "2023-11-05T08:30:08.000Z"
* collection.method.coding = http://snomed.info/sct#225105004 "Collection of stool specimen"
* collection.method.text = "糞便採集"
* collection.bodySite.coding = http://snomed.info/sct#123956007 "Anus part"
* collection.bodySite.text = "肛門"
* collection.quantity.value = 10
* collection.quantity.unit = "g"
* collection.fastingStatusCodeableConcept.coding = $v2-0916#NF "The patient indicated they did not fast prior to the procedure."
* receivedTime = "2023-11-05T09:00:00.000Z"
* processing.description = "糞便隱血試驗"
//* processing.procedure.coding = http://snomed.info/sct#167665003 "Fecal occult blood test"
//* processing.procedure.text = "Fecal occult blood test"
* processing.timeDateTime = "2023-11-05T09:30:00Z"
* container.description = "糞便標本容器"
* container.type.coding = http://snomed.info/sct#706047007 "Fecal specimen container"
* container.capacity.value = 20
* container.capacity.unit = "mL"
* container.specimenQuantity.value = 10
* container.specimenQuantity.unit = "g"
* note.text = "此糞便樣本來自患者的排便觀察"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>糞便樣本</b>
	</h3>
	<p>
		<b>檢體狀態</b>：Available <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/specimen-status\">SpecimenStatus</a>#available) </span>
	</p>
    <p>
		<b>檢體類型</b>：Stool specimen <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SpecimenType</a>#119339001) </span>
	</p>
    <p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
    <p>
		<b>病人採檢前禁食狀況</b>：The patient indicated they did not fast prior to the procedure. <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v2-0916\">v2 Relevant Clincial Information</a>#NF) </span>
    </p>
    <p>
		<b>檢驗檢查者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
    <blockquote>
	<p><b>檢體資料</b></p>
    <p>
		<b>採集檢體的時間</b>：2023-11-05T08:30:08<br />
		<b>執行檢體採集的技術</b>：糞便採集(Collection of stool specimen) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#225105004) </span> <br />
		<b>解剖採集部位</b>：肛門(Anus part) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#123956007) </span> <br />
		<b>採集檢體的數量</b>：10 g 
    </p>
    </blockquote>

    <blockquote>
	<p><b>檢體處理資料</b></p>
	    <b>處理步驟</b>：糞便隱血試驗<br />
	    <b>檢體處理的日期和時間</b>：2023-11-05T09:30:00 <br />

	<p><b>檢體容器資料</b></p>
    <p>
	    <b>容器類型</b>：Fecal specimen container <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#706047007) </span> <br />
	    <b>容器說明</b>：糞便標本容器 <br />
		<b>容器的大小</b>：20 mL <br />
		<b>容器內的檢體量</b>：10 g 
	</p>	
    </blockquote>
    <p>
		<b>備註</b>：此糞便樣本來自患者的排便觀察
    </p>    
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/example/Specimen-spe-ur-example.fsh

Alias: $sct = http://snomed.info/sct
Alias: $v2-0916 = http://terminology.hl7.org/CodeSystem/v2-0916

Instance: spe-ur-example
InstanceOf: TWCoreSpecimen
Usage: #example
* status = #available
* type = $sct#122575003 "Urine specimen"
* subject = Reference(Patient/pat-example) "陳加玲"
* collection.collector = Reference(Practitioner/pra-dr-example) "王依昇"
* collection.collectedDateTime = "2023-11-06T08:30:08.000Z"
//* collection.method = $loinc#144454001 "Urine examination"
* collection.method = $sct#167217005 "Urine examination"
* collection.method.text = "尿液採集"
* collection.bodySite = $sct#119222001 "Urethra part"
* collection.bodySite.text = "尿道"
* collection.quantity.value = 50
* collection.quantity.unit = "mL"
* collection.fastingStatusCodeableConcept = $v2-0916#F "Patient was fasting prior to the procedure."
* receivedTime = "2023-11-06T09:00:00.000Z"
* processing.description = "尿液檢驗試紙分析"
//* processing.procedure = $sct#231121000000101 "Test strip urinalysis"
//* processing.procedure.text = "Test strip urinalysis"
* processing.timeDateTime = "2023-11-06T09:30:00Z"
* container.description = "尿液檢體容器"
* container.type = $sct#706054001 "Urine specimen container"
* container.capacity.value = 60
* container.capacity.unit = "mL"
* container.specimenQuantity.value = 50
* container.specimenQuantity.unit = "mL"
* note.text = "此尿液樣本來自患者的尿液分析"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">
	<h3>
		<b>尿液樣本</b>
	</h3>
	<p>
		<b>檢體狀態</b>：Available <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://hl7.org/fhir/specimen-status\">SpecimenStatus</a>#available) </span>
	</p>
    <p>
		<b>檢體類型</b>：Urine <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SpecimenType</a>#122575003) </span>
	</p>
    <p>
		<b>病人</b>：<a href=\"Patient-pat-example.html\">Patient/pat-example</a> \"陳加玲\"
	</p>
    <p>
		<b>病人採檢前禁食狀況</b>：Patient was fasting prior to the procedure. <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://terminology.hl7.org/CodeSystem/v2-0916\">v2 Relevant Clincial Information</a>#F) </span>
    </p>
    <p>
		<b>檢查者</b>：<a href=\"Practitioner-pra-dr-example.html\">Practitioner/pra-dr-example</a> \"王依昇\"
	</p>
    <blockquote>
	<p><b>檢體資料</b></p>
    <p>
		<b>採集檢體的時間</b>：2023-11-06T09:00:00<br />
		<b>執行檢體採集的技術</b>：尿液採集(Urine examination) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#167217005) </span> <br />
		<b>解剖採集部位</b>：尿道(Urethra part) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#119222001) </span> <br />
		<b>採集檢體的數量</b>：50 mL
    </p>
    </blockquote>

    <blockquote>
	<p><b>檢體處理資料</b></p>
	    <b>處理步驟</b>：尿液檢驗試紙分析<br />
	    <b>檢體處理的日期和時間</b>：2023-11-06T09:30:00 
<br />
	<p><b>檢體容器資料</b></p>
    <p>
	    <b>容器類別</b>：Urine specimen container <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> ( <a href=\"http://snomed.info/sct\">SNOMED CT</a>#706054001) </span> <br />
	    <b>容器說明</b>：尿液檢體容器 <br />
		<b>容器的大小</b>：60 mL <br />
		<b>容器內的檢體量</b>：50 mL
	</p>	
    </blockquote>
    <p>
		<b>備註</b>：此尿液樣本來自患者的尿液分析
    </p>    
</div>"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/extensions/identifier-suffix.fsh

Extension: IdentifierSuffix
Id: identifier-suffix
Title: "Identifier Suffix"
Description: "
- 增加Practitioner.identifier.type.coding.code欄位也可使用此Extension，以利實務專案使用  

識別碼後綴詞"
* ^url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/identifier-suffix"
* ^version = "0.3.2"
* ^status = #active
* ^context[0].type = #element
* ^context[=].expression = "Patient.identifier.type.coding.code"
* ^context[+].type = #element
* ^context[=].expression = "Practitioner.identifier.type.coding.code"
* extension contains
    suffix 0..1 and
    valueSet 0..1
* extension[suffix] only Extension
* extension[suffix] ^short = "國家代碼"
* extension[suffix] ^definition = "國家代碼"
* extension[suffix].url only uri
* extension[suffix].value[x] 1..1
* extension[suffix].value[x] only string
* extension[valueSet] only Extension
* extension[valueSet] ^short = "值集"
* extension[valueSet] ^definition = "ISO 3166三位字母代碼（alpha-3）的值集"
* extension[valueSet].url only uri
* extension[valueSet].value[x] 1..1
* extension[valueSet].value[x] only canonical
* extension[valueSet].valueCanonical = "http://hl7.org/fhir/ValueSet/iso3166-1-3"

* . 0..1
* . ^short = "識別碼後綴詞"
* id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* url ^short = "擴充的資料項目名稱"
* url ^definition = "擴充的資料項目之定義連結—一個邏輯名稱或URL"
* url ^comment = "此定義可直接指向可計算的或人類可讀的擴充資料項目的定義，也可以是其他規範中聲明的邏輯URI。此定義**必須（SHALL）** 定義擴充的結構定義的URI。"
//* value[x] ^short = "擴充的資料項目的內容值"
//* value[x] ^definition = "擴充的資料項目的內容值—必須是一組受限制的data type中的一個（清單請見[Extensibility](http://hl7.org/fhir/2021Mar/extensibility.html)）"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/extensions/person-age.fsh

Extension: PersonAge
Id: person-age
Title: "Person Age"
Description: "年齡"
* ^url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/person-age"
* ^version = "0.3.2"
* ^status = #active
* ^context.type = #element
* ^context.expression = "Patient"
//* value[x] only integer
* value[x] only Age

* . ^short = "年齡"
* id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* url ^short = "擴充的資料項目名稱"
* url ^definition = "擴充的資料項目之定義連結—一個邏輯名稱或URL"
* url ^comment = "此定義可直接指向可計算的或人類可讀的擴充資料項目的定義，也可以是其他規範中聲明的邏輯URI。此定義**必須（SHALL）** 定義擴充的結構定義的URI。"
* value[x] ^short = "擴充的資料項目的內容值"
* value[x] ^definition = "擴充的資料項目的內容值—必須是一組受限制的data type中的一個（清單請見[Extensibility](http://hl7.org/fhir/2021Mar/extensibility.html)）"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/extensions/questionnaire-url.fsh

Extension: QuestionnaireUrl
Id: questionnaire-url
Title: "Questionnaire Url"
Description: "Questionnaire URI"
* ^url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/questionnaire-url"
* ^version = "0.3.2"
* ^status = #active
* ^context.type = #element
* ^context.expression = "QuestionnaireResponse"
* url only uri
* value[x] only uri

//* . ^short = "The location where a non-FHIR questionnaire/survey form can be found."
//* . ^definition = "This extension is used when the survey,form, or questionnaire which is being anwered is not a FHIR [Questionnaire](https://www.hl7.org/fhir/questionnaire.html), otherwise the [canonical url](https://www.hl7.org/fhir/questionnaire.html#canonical) for the FHIR Questionnaire is used."

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/extensions/tw-address-alley.fsh

Extension: TWAlley
Id: tw-alley
Title: "TW Alley"
Description: "臺灣地址欄位-弄"
* ^url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-alley"
* ^version = "0.3.2"
* ^status = #active
* ^context.type = #element
* ^context.expression = "Address"
* value[x] only string

* . ^short = "臺灣地址欄位－弄"
* id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* url ^short = "擴充的資料項目名稱"
* url ^definition = "擴充的資料項目之定義連結—一個邏輯名稱或URL"
* url ^comment = "此定義可直接指向可計算的或人類可讀的擴充資料項目的定義，也可以是其他規範中聲明的邏輯URI。此定義**必須（SHALL）** 定義擴充的結構定義的URI。"
* value[x] ^short = "擴充的資料項目的內容值"
* value[x] ^definition = "擴充的資料項目的內容值—必須是一組受限制的data type中的一個（清單請見[Extensibility](http://hl7.org/fhir/2021Mar/extensibility.html)）"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/extensions/tw-address-floor.fsh

Extension: TWFloor
Id: tw-floor
Title: "TW Floor"
Description: "臺灣地址欄位-樓"
* ^url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-floor"
* ^version = "0.3.2"
* ^status = #active
* ^context.type = #element
* ^context.expression = "Address"
* value[x] only string

* . ^short = "臺灣地址欄位－樓"
* id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* url ^short = "擴充的資料項目名稱"
* url ^definition = "擴充的資料項目之定義連結—一個邏輯名稱或URL"
* url ^comment = "此定義可直接指向可計算的或人類可讀的擴充資料項目的定義，也可以是其他規範中聲明的邏輯URI。此定義**必須（SHALL）** 定義擴充的結構定義的URI。"
* value[x] ^short = "擴充的資料項目的內容值"
* value[x] ^definition = "擴充的資料項目的內容值—必須是一組受限制的data type中的一個（清單請見[Extensibility](http://hl7.org/fhir/2021Mar/extensibility.html)）"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/extensions/tw-address-lane.fsh

Extension: TWLane
Id: tw-lane
Title: "TW Lane"
Description: "臺灣地址欄位-巷"
* ^url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-lane"
* ^version = "0.3.2"
* ^status = #active
* ^context.type = #element
* ^context.expression = "Address"
* value[x] only string

* . ^short = "臺灣地址欄位－巷"
* id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* url ^short = "擴充的資料項目名稱"
* url ^definition = "擴充的資料項目之定義連結—一個邏輯名稱或URL"
* url ^comment = "此定義可直接指向可計算的或人類可讀的擴充資料項目的定義，也可以是其他規範中聲明的邏輯URI。此定義**必須（SHALL）** 定義擴充的結構定義的URI。"
* value[x] ^short = "擴充的資料項目的內容值"
* value[x] ^definition = "擴充的資料項目的內容值—必須是一組受限制的data type中的一個（清單請見[Extensibility](http://hl7.org/fhir/2021Mar/extensibility.html)）"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/extensions/tw-address-neighborhood.fsh

Extension: TWNeighborhood
Id: tw-neighborhood
Title: "TW Neighborhood"
Description: "臺灣地址欄位-鄰"
* ^url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-neighborhood"
* ^version = "0.3.2"
* ^status = #active
* ^context.type = #element
* ^context.expression = "Address"
* value[x] only string

* . ^short = "臺灣地址欄位－鄰"
* id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* url ^short = "擴充的資料項目名稱"
* url ^definition = "擴充的資料項目之定義連結—一個邏輯名稱或URL"
* url ^comment = "此定義可直接指向可計算的或人類可讀的擴充資料項目的定義，也可以是其他規範中聲明的邏輯URI。此定義**必須（SHALL）** 定義擴充的結構定義的URI。"
* value[x] ^short = "擴充的資料項目的內容值"
* value[x] ^definition = "擴充的資料項目的內容值—必須是一組受限制的data type中的一個（清單請見[Extensibility](http://hl7.org/fhir/2021Mar/extensibility.html)）"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/extensions/tw-address-number.fsh

Extension: TWNumber
Id: tw-number
Title: "TW Number"
Description: "臺灣地址欄位-號"
* ^url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-number"
* ^version = "0.3.2"
* ^status = #active
* ^context.type = #element
* ^context.expression = "Address"
* value[x] only string

* . ^short = "臺灣地址欄位－號"
* id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* url ^short = "擴充的資料項目名稱"
* url ^definition = "擴充的資料項目之定義連結—一個邏輯名稱或URL"
* url ^comment = "此定義可直接指向可計算的或人類可讀的擴充資料項目的定義，也可以是其他規範中聲明的邏輯URI。此定義**必須（SHALL）** 定義擴充的結構定義的URI。"
* value[x] ^short = "擴充的資料項目的內容值"
* value[x] ^definition = "擴充的資料項目的內容值—必須是一組受限制的data type中的一個（清單請見[Extensibility](http://hl7.org/fhir/2021Mar/extensibility.html)）"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/extensions/tw-address-room.fsh

Extension: TWRoom
Id: tw-room
Title: "TW Room"
Description: "臺灣地址欄位-室"
* ^url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-room"
* ^version = "0.3.2"
* ^status = #active
* ^context.type = #element
* ^context.expression = "Address"
* value[x] only string

* . ^short = "臺灣地址欄位－室"
* id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* url ^short = "擴充的資料項目名稱"
* url ^definition = "擴充的資料項目之定義連結—一個邏輯名稱或URL"
* url ^comment = "此定義可直接指向可計算的或人類可讀的擴充資料項目的定義，也可以是其他規範中聲明的邏輯URI。此定義**必須（SHALL）** 定義擴充的結構定義的URI。"
* value[x] ^short = "擴充的資料項目的內容值"
* value[x] ^definition = "擴充的資料項目的內容值—必須是一組受限制的data type中的一個（清單請見[Extensibility](http://hl7.org/fhir/2021Mar/extensibility.html)）"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/extensions/tw-address-section.fsh

Extension: TWSection
Id: tw-section
Title: "TW Section"
Description: "臺灣地址欄位-段"
* ^url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-section"
* ^version = "0.3.2"
* ^status = #active
* ^context.type = #element
* ^context.expression = "Address"
* value[x] only string

* . ^short = "臺灣地址欄位－段"
* id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* url ^short = "擴充的資料項目名稱"
* url ^definition = "擴充的資料項目之定義連結—一個邏輯名稱或URL"
* url ^comment = "此定義可直接指向可計算的或人類可讀的擴充資料項目的定義，也可以是其他規範中聲明的邏輯URI。此定義**必須（SHALL）** 定義擴充的結構定義的URI。"
* value[x] ^short = "擴充的資料項目的內容值"
* value[x] ^definition = "擴充的資料項目的內容值—必須是一組受限制的data type中的一個（清單請見[Extensibility](http://hl7.org/fhir/2021Mar/extensibility.html)）"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/extensions/tw-address-village.fsh

Extension: TWVillage
Id: tw-village
Title: "TW Village"
Description: "臺灣地址欄位-村(里)"
* ^url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-village"
* ^version = "0.3.2"
* ^status = #active
* ^context.type = #element
* ^context.expression = "Address"
* value[x] only string

* . ^short = "臺灣地址欄位－村（里）"
* id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* url ^short = "擴充的資料項目名稱"
* url ^definition = "擴充的資料項目之定義連結—一個邏輯名稱或URL"
* url ^comment = "此定義可直接指向可計算的或人類可讀的擴充資料項目的定義，也可以是其他規範中聲明的邏輯URI。此定義**必須（SHALL）** 定義擴充的結構定義的URI。"
* value[x] ^short = "擴充的資料項目的內容值"
* value[x] ^definition = "擴充的資料項目的內容值—必須是一組受限制的data type中的一個（清單請見[Extensibility](http://hl7.org/fhir/2021Mar/extensibility.html)）"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/extensions/tw-postal-code.fsh

Extension: TWPostalCode
Id: tw-postal-code
Title: "TW Postal code"
Description: "臺灣郵遞區號"
* ^url = "https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-postal-code"
* ^version = "0.3.2"
* ^status = #active
* ^context.type = #element
* ^context.expression = "Address.postalCode"
* value[x] only CodeableConceptTW
* valueCodeableConcept.coding ^slicing.discriminator.type = #pattern
* valueCodeableConcept.coding ^slicing.discriminator.path = "system"
* valueCodeableConcept.coding ^slicing.ordered = false
* valueCodeableConcept.coding ^slicing.rules = #open
* valueCodeableConcept.coding contains PostalCode3 0..1 MS and PostalCode5 0..1 MS and PostalCode6 0..1 MS
* valueCodeableConcept.coding[PostalCode3] from TWPostalCode3
* valueCodeableConcept.coding[PostalCode3].code 1.. MS
* valueCodeableConcept.coding[PostalCode3].system MS
* valueCodeableConcept.coding[PostalCode3].display MS
* valueCodeableConcept.coding[PostalCode3].system = "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/postal-code3-tw"
* valueCodeableConcept.coding[PostalCode5] from TWPostalCode5
* valueCodeableConcept.coding[PostalCode5].code 1.. MS
* valueCodeableConcept.coding[PostalCode5].system MS
* valueCodeableConcept.coding[PostalCode5].display MS
* valueCodeableConcept.coding[PostalCode5].system = "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/postal-code5-tw"
* valueCodeableConcept.coding[PostalCode6] from TWPostalCode6
* valueCodeableConcept.coding[PostalCode6].code 1.. MS
* valueCodeableConcept.coding[PostalCode6].system MS
* valueCodeableConcept.coding[PostalCode6].display MS
* valueCodeableConcept.coding[PostalCode6].system = "https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/postal-code6-tw"

* . ^short = "臺灣郵遞區號"
* id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* url ^short = "擴充的資料項目名稱"
* url ^definition = "擴充的資料項目之定義連結—一個邏輯名稱或URL"
* url ^comment = "此定義可直接指向可計算的或人類可讀的擴充資料項目的定義，也可以是其他規範中聲明的邏輯URI。此定義**必須（SHALL）** 定義擴充的結構定義的URI。"
* value[x] ^short = "擴充的資料項目的內容值"
* value[x] ^definition = "擴充的資料項目的內容值—必須是一組受限制的data type中的一個（清單請見[Extensibility](http://hl7.org/fhir/2021Mar/extensibility.html)）"
* value[x] ^comment = "並非所有的專門術語使用都符合這個一般模式。在某些情況下，資料模型不應該使用CodeableConcept，而應直接使用Coding，並提供他們自己的結構來管理文字、編碼、翻譯、資料項目之間的關係、先組合配對（pre-）和後組合配對（post-coordination）。"
* valueCodeableConcept ^short = "擴充的資料項目的內容值"
* valueCodeableConcept ^definition = "擴充的資料項目的內容值—必須是一組受限制的data type中的一個（清單請見[Extensibility](http://hl7.org/fhir/2021Mar/extensibility.html)）"
* valueCodeableConcept.id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* valueCodeableConcept.id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* valueCodeableConcept.extension ^short = "擴充的資料項目"
* valueCodeableConcept.extension ^definition = "可用於表示不屬於此資料項目基本定義的附加資訊。為了擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。"
* valueCodeableConcept.extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何污名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* valueCodeableConcept.coding ^short = "由專門術語系統（terminology system）定義的代碼"
* valueCodeableConcept.coding ^definition = "由專門術語系統（terminology system）所定義之代碼的參照"
* valueCodeableConcept.coding ^requirements = "允許代碼系統中的替代編碼，以及翻譯到其他編碼系統。"
* valueCodeableConcept.coding ^comment = "代碼可以在列舉清單（enumerations）或代碼清單（code lists）中非常隨意地定義，直至有非常正式的定義，例如：SNOMED CT—更多資訊見HL7 v3核心原則（Core Principles ）。編碼的排序是未定義的因而 **必須沒有（SHALL NOT）** 被用來推斷意義。一般來說，最多只有一個編碼值（coding values）會被標記為UserSelected = true。"
* valueCodeableConcept.coding[PostalCode3] ^short = "由專門術語系統（terminology system）定義的代碼"
* valueCodeableConcept.coding[PostalCode3] ^binding.description = "應填入所綁定值集中的其中一個代碼"
* valueCodeableConcept.coding[PostalCode3] ^definition = "由專門術語系統（terminology system）所定義之代碼的參照"
* valueCodeableConcept.coding[PostalCode3] ^requirements = "允許代碼系統中的替代編碼，以及翻譯到其他編碼系統。"
* valueCodeableConcept.coding[PostalCode3] ^comment = "代碼可以在列舉清單（enumerations）或代碼清單（code lists）中非常隨意地定義，直至有非常正式的定義，例如：SNOMED CT—更多資訊見HL7 v3核心原則（Core Principles ）。編碼的排序是未定義的因而 **必須沒有（SHALL NOT）** 被用來推斷意義。一般來說，最多只有一個編碼值（coding values）會被標記為UserSelected = true。"
* valueCodeableConcept.coding[PostalCode3].id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* valueCodeableConcept.coding[PostalCode3].id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* valueCodeableConcept.coding[PostalCode3].extension ^short = "擴充的資料項目"
* valueCodeableConcept.coding[PostalCode3].extension ^definition = "可用於表示不屬於此資料項目基本定義的附加資訊。為了擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。"
* valueCodeableConcept.coding[PostalCode3].extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何污名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* valueCodeableConcept.coding[PostalCode3].system ^short = "專門術語系統（terminology system）的識別"
* valueCodeableConcept.coding[PostalCode3].system ^definition = "定義代碼中符號意義的代碼系統識別"
* valueCodeableConcept.coding[PostalCode3].system ^requirements = "需要明確說明符號定義的來源"
* valueCodeableConcept.coding[PostalCode3].system ^comment = "URI可以是一個OID（urn:oid:...）或一個UUID（urn:uuid:...）；OID和UUID **必須（SHALL）** 參照HL7 OID註冊中心；否則，URI應該來自HL7的FHIR定義的特殊URI列表，或者它應該參照一些明確建立的系统定義。"
* valueCodeableConcept.coding[PostalCode3].version ^short = "系統的版本—如果相關的話"
* valueCodeableConcept.coding[PostalCode3].version ^definition = "選擇此代碼時使用的代碼系統版本；請注意，一個維護良好的代碼系統不需要版本報告，因為代碼的意義在不同系統版本中是一致的；然而，不能始終保證這點，當不能保證意義一致時， **必須（SHALL）** 將版本資訊也一併作交換。"
* valueCodeableConcept.coding[PostalCode3].version ^comment = "如果專門術語沒有明確定義應該使用什麼字串來識別代碼系統的版本，建議使用版本正式發布的日期（用FHIR日期格式表示）作為版本日期。"
* valueCodeableConcept.coding[PostalCode3].code ^short = "系統定義的語法之符號"
* valueCodeableConcept.coding[PostalCode3].code ^definition = "系統定義的語法之符號；符號可能是一個預先定義的代碼，也可能是代碼系統定義的語法中的表達式（如後組合配對／後組合式）。"
* valueCodeableConcept.coding[PostalCode3].code ^requirements = "需要參照系統中的一個特定代碼"
* valueCodeableConcept.coding[PostalCode3].display ^short = "由系統定義的表示法"
* valueCodeableConcept.coding[PostalCode3].display ^definition = "遵循系統的規則以呈現代碼含義的表示法"
* valueCodeableConcept.coding[PostalCode3].display ^requirements = "需要能為不了解此系統的讀者呈現可讀的代碼含義"
* valueCodeableConcept.coding[PostalCode3].userSelected ^short = "此編碼是否由使用者直接選擇？"
* valueCodeableConcept.coding[PostalCode3].userSelected ^definition = "表明此編碼是由使用者直接選擇，例如：從可用項目（代碼或顯示名稱）的清單中選擇。"
* valueCodeableConcept.coding[PostalCode3].userSelected ^requirements = "已被確定為一個臨床安全準則—此確切的系統／代碼對(code pair)是被明確選擇的，而不是由系統根據一些規則或是程式語言處理判斷。"
* valueCodeableConcept.coding[PostalCode3].userSelected ^comment = "在一系列備選方案中，直接選擇的代碼是新翻譯最合適的起點；關於「直接選擇」的確切意義，存在模糊不清之處，可能需要貿易夥伴的同意，以更完整澄清此資料項目的使用及其後果。"
* valueCodeableConcept.coding[PostalCode5] ^short = "由專門術語系統（terminology system）定義的代碼"
* valueCodeableConcept.coding[PostalCode5] ^binding.description = "應填入所綁定值集中的其中一個代碼"
* valueCodeableConcept.coding[PostalCode5] ^definition = "由專門術語系統（terminology system）所定義之代碼的參照"
* valueCodeableConcept.coding[PostalCode5] ^requirements = "允許代碼系統中的替代編碼，以及翻譯到其他編碼系統。"
* valueCodeableConcept.coding[PostalCode5] ^comment = "代碼可以在列舉清單（enumerations）或代碼清單（code lists）中非常隨意地定義，直至有非常正式的定義，例如：SNOMED CT—更多資訊見HL7 v3核心原則（Core Principles ）。編碼的排序是未定義的因而 **必須沒有（SHALL NOT）** 被用來推斷意義。一般來說，最多只有一個編碼值（coding values）會被標記為UserSelected = true。"
* valueCodeableConcept.coding[PostalCode5].id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* valueCodeableConcept.coding[PostalCode5].id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* valueCodeableConcept.coding[PostalCode5].extension ^short = "擴充的資料項目"
* valueCodeableConcept.coding[PostalCode5].extension ^definition = "可用於表示不屬於此資料項目基本定義的附加資訊。為了擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。"
* valueCodeableConcept.coding[PostalCode5].extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何污名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* valueCodeableConcept.coding[PostalCode5].system ^short = "專門術語系統（terminology system）的識別"
* valueCodeableConcept.coding[PostalCode5].system ^definition = "定義代碼中符號意義的代碼系統識別"
* valueCodeableConcept.coding[PostalCode5].system ^requirements = "需要明確說明符號定義的來源"
* valueCodeableConcept.coding[PostalCode5].system ^comment = "URI可以是一個OID（urn:oid:...）或一個UUID（urn:uuid:...）；OID和UUID **必須（SHALL）** 參照HL7 OID註冊中心；否則，URI應該來自HL7的FHIR定義的特殊URI列表，或者它應該參照一些明確建立的系统定義。"
* valueCodeableConcept.coding[PostalCode5].version ^short = "系統的版本—如果相關的話"
* valueCodeableConcept.coding[PostalCode5].version ^definition = "選擇此代碼時使用的代碼系統版本；請注意，一個維護良好的代碼系統不需要版本報告，因為代碼的意義在不同系統版本中是一致的；然而，不能始終保證這點，當不能保證意義一致時， **必須（SHALL）** 將版本資訊也一併作交換。"
* valueCodeableConcept.coding[PostalCode5].version ^comment = "如果專門術語沒有明確定義應該使用什麼字串來識別代碼系統的版本，建議使用版本正式發布的日期（用FHIR日期格式表示）作為版本日期。"
* valueCodeableConcept.coding[PostalCode5].code ^short = "系統定義的語法之符號"
* valueCodeableConcept.coding[PostalCode5].code ^definition = "系統定義的語法之符號；符號可能是一個預先定義的代碼，也可能是代碼系統定義的語法中的表達式（如後組合配對／後組合式）。"
* valueCodeableConcept.coding[PostalCode5].code ^requirements = "需要參照系統中的一個特定代碼"
* valueCodeableConcept.coding[PostalCode5].display ^short = "由系統定義的表示法"
* valueCodeableConcept.coding[PostalCode5].display ^definition = "遵循系統的規則以呈現代碼含義的表示法"
* valueCodeableConcept.coding[PostalCode5].display ^requirements = "需要能為不了解此系統的讀者呈現可讀的代碼含義"
* valueCodeableConcept.coding[PostalCode5].userSelected ^short = "此編碼是否由使用者直接選擇？"
* valueCodeableConcept.coding[PostalCode5].userSelected ^definition = "表明此編碼是由使用者直接選擇，例如：從可用項目（代碼或顯示名稱）的清單中選擇。"
* valueCodeableConcept.coding[PostalCode5].userSelected ^requirements = "已被確定為一個臨床安全準則—此確切的系統／代碼對(code pair)是被明確選擇的，而不是由系統根據一些規則或是程式語言處理判斷。"
* valueCodeableConcept.coding[PostalCode5].userSelected ^comment = "在一系列備選方案中，直接選擇的代碼是新翻譯最合適的起點；關於「直接選擇」的確切意義，存在模糊不清之處，可能需要貿易夥伴的同意，以更完整澄清此資料項目的使用及其後果。"
* valueCodeableConcept.coding[PostalCode6] ^short = "由專門術語系統（terminology system）定義的代碼"
* valueCodeableConcept.coding[PostalCode6] ^binding.description = "應填入所綁定值集中的其中一個代碼"
* valueCodeableConcept.coding[PostalCode6] ^definition = "由專門術語系統（terminology system）所定義之代碼的參照"
* valueCodeableConcept.coding[PostalCode6] ^requirements = "允許代碼系統中的替代編碼，以及翻譯到其他編碼系統。"
* valueCodeableConcept.coding[PostalCode6] ^comment = "代碼可以在列舉清單（enumerations）或代碼清單（code lists）中非常隨意地定義，直至有非常正式的定義，例如：SNOMED CT—更多資訊見HL7 v3核心原則（Core Principles ）。編碼的排序是未定義的因而 **必須沒有（SHALL NOT）** 被用來推斷意義。一般來說，最多只有一個編碼值（coding values）會被標記為UserSelected = true。"
* valueCodeableConcept.coding[PostalCode6].id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* valueCodeableConcept.coding[PostalCode6].id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* valueCodeableConcept.coding[PostalCode6].extension ^short = "擴充的資料項目"
* valueCodeableConcept.coding[PostalCode6].extension ^definition = "可用於表示不屬於此資料項目基本定義的附加資訊。為了擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。"
* valueCodeableConcept.coding[PostalCode6].extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何污名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* valueCodeableConcept.coding[PostalCode6].system ^short = "專門術語系統（terminology system）的識別"
* valueCodeableConcept.coding[PostalCode6].system ^definition = "定義代碼中符號意義的代碼系統識別"
* valueCodeableConcept.coding[PostalCode6].system ^requirements = "需要明確說明符號定義的來源"
* valueCodeableConcept.coding[PostalCode6].system ^comment = "URI可以是一個OID（urn:oid:...）或一個UUID（urn:uuid:...）；OID和UUID **必須（SHALL）** 參照HL7 OID註冊中心；否則，URI應該來自HL7的FHIR定義的特殊URI列表，或者它應該參照一些明確建立的系统定義。"
* valueCodeableConcept.coding[PostalCode6].version ^short = "系統的版本—如果相關的話"
* valueCodeableConcept.coding[PostalCode6].version ^definition = "選擇此代碼時使用的代碼系統版本；請注意，一個維護良好的代碼系統不需要版本報告，因為代碼的意義在不同系統版本中是一致的；然而，不能始終保證這點，當不能保證意義一致時， **必須（SHALL）** 將版本資訊也一併作交換。"
* valueCodeableConcept.coding[PostalCode6].version ^comment = "如果專門術語沒有明確定義應該使用什麼字串來識別代碼系統的版本，建議使用版本正式發布的日期（用FHIR日期格式表示）作為版本日期。"
* valueCodeableConcept.coding[PostalCode6].code ^short = "系統定義的語法之符號"
* valueCodeableConcept.coding[PostalCode6].code ^definition = "系統定義的語法之符號；符號可能是一個預先定義的代碼，也可能是代碼系統定義的語法中的表達式（如後組合配對／後組合式）。"
* valueCodeableConcept.coding[PostalCode6].code ^requirements = "需要參照系統中的一個特定代碼"
* valueCodeableConcept.coding[PostalCode6].display ^short = "由系統定義的表示法"
* valueCodeableConcept.coding[PostalCode6].display ^definition = "遵循系統的規則以呈現代碼含義的表示法"
* valueCodeableConcept.coding[PostalCode6].display ^requirements = "需要能為不了解此系統的讀者呈現可讀的代碼含義"
* valueCodeableConcept.coding[PostalCode6].userSelected ^short = "此編碼是否由使用者直接選擇？"
* valueCodeableConcept.coding[PostalCode6].userSelected ^definition = "表明此編碼是由使用者直接選擇，例如：從可用項目（代碼或顯示名稱）的清單中選擇。"
* valueCodeableConcept.coding[PostalCode6].userSelected ^requirements = "已被確定為一個臨床安全準則—此確切的系統／代碼對(code pair)是被明確選擇的，而不是由系統根據一些規則或是程式語言處理判斷。"
* valueCodeableConcept.coding[PostalCode6].userSelected ^comment = "在一系列備選方案中，直接選擇的代碼是新翻譯最合適的起點；關於「直接選擇」的確切意義，存在模糊不清之處，可能需要貿易夥伴的同意，以更完整澄清此資料項目的使用及其後果。"
* valueCodeableConcept.text ^short = "概念的文字表示法"
* valueCodeableConcept.text ^definition = "輸入資料的使用者所見／所選／所說的人類可讀文字表述，和（或）其代表使用者的預期含義。"
* valueCodeableConcept.text ^requirements = "專門術語中的代碼並不總是能捕捉人類使用的細微差別的正確意義，或者根本就沒有合適的代碼；這些情況下，文字表述被用來捕捉來源的全部意義。"
* valueCodeableConcept.text ^comment = "很多時候，此文字表述與其中一個代碼的顯示名稱相同。"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_allergyintolerance.fsh

Logical: TWAllergyIntoleranceModel
Id: TWAllergyIntolerance
Title: "臺灣核心-過敏或不耐症(TW Core AllergyIntolerance) 之資料模型"
Description: "臺灣核心-過敏或不耐症(TW Core AllergyIntolerance) 之資料模型"
* ^version = "0.3.2"
* clinicalStatus 0..1 CodeableConcept "過敏或不耐受的臨床狀態。" "過敏或不耐受的臨床狀態。"
* verificationStatus 0..1 CodeableConcept "關於對特定物質反應的傾向或潜在風險的確定性聲明。" "關於對特定物質反應的傾向或潜在風險的確定性聲明。"
* code 1..1 CodeableConcept "指明此過敏或不耐受的代碼。" "指明此過敏或不耐受的代碼。"
* patient 1..1 Patient "誰有此過敏或不耐受？" "誰有此過敏或不耐受？"
* reaction 0..* BackboneElement "暴露於此過敏或不耐受物質的不良反應。" "暴露於此過敏或不耐受物質的不良反應。"
/* recordedDate 0..1	dateTime "resource實例的第一個版本被記錄的日期。" "resource實例的第一個版本被記錄的日期。"
* recorder 0..1 BackboneElement "誰記錄了過敏或不耐受。" "誰記錄了過敏或不耐受。"
* recorder.practitioner 0..1  Practitioner "某健康照護服務提供者紀錄了這個過敏或不耐受。" "某健康照護服務提供者紀錄了這個過敏或不耐受。"
* recorder.practitionerRole 0..1  PractitionerRole "某健康照護服務角色紀錄了這個過敏或不耐受。" "某健康照護服務角色紀錄了這個過敏或不耐受。"
* recorder.RelatedPerson 0..1  RelatedPerson "某相關人士紀錄了這個過敏或不耐受。" "某相關人士紀錄了這個過敏或不耐受。"
* note 0..* Annotation "其他欄位中沒有記錄的額外文字陳述。" "其他欄位中沒有記錄的額外文字陳述。"*/

Mapping: TWAllergyIntolerance
Id: TWAllergyIntolerance
Title: "TW Core IG"
Source: TWAllergyIntoleranceModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreAllergyIntolerance"
* clinicalStatus -> "TWCoreAllergyIntolerance.clinicalStatus"
* verificationStatus -> "TWCoreAllergyIntolerance.verificationStatus"
* code -> "TWCoreAllergyIntolerance.code"
* patient -> "TWCoreAllergyIntolerance.subject.Reference(TW Core Patient)"
* reaction -> "TWCoreAllergyIntolerance.reaction"
/* recordedDate -> "TWCoreAllergyIntolerance.recordedDate"
* recorder.practitioner -> "TWCoreAllergyIntolerance.recorder.Reference(TW Core Practitioner)"
* recorder.practitionerRole -> "TWCoreAllergyIntolerance.recorder.Reference(TW Core PractitionerRole)"
* recorder.RelatedPerson -> "TWCoreAllergyIntolerance.recorder.Reference(RelatedPerson)"
* note -> "TWCoreAllergyIntolerance.note"*/

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_bundle.fsh

Logical: TWBundleModel
Id: TWBundle
Title: "臺灣核心-資料交換基本單位(TW Core Bundle) 之資料模型"
Description: "臺灣核心-資料交換基本單位(TW Core Bundle) 之資料模型"
* ^version = "0.3.2"
* identifier 1..1 Identifier "一組Reources的捆綁/打包/捆包(Bundle)的識別碼。" "一組Reources的捆綁/打包/捆包(Bundle)的識別碼。"
* timestamp 0..1 instant "組成Bundle的時間。" "組成Bundle的時間。"


Mapping: TWBundle
Id: TWBundle
Title: "TW Core IG"
Source: TWBundleModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreBundle"
* identifier -> "TWCoreBundle.identifier"
* timestamp -> "TWCoreBundle.timestamp"


---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_composition.fsh

Logical: TWCompositionModel
Id: TWComposition
Title: "臺灣核心-臨床文件架構(TW Core Composition) 之資料模型"
Description: "臺灣核心-臨床文件架構(TW Core Composition) 之資料模型"
* ^version = "0.3.2"
* identifier 0..1 Identifier "不分版本的臨床文件架構(Composition)識別碼。" "不分版本的臨床文件架構(臨床文件架構)識別碼。"
* status 1..1 code "臨床文件架構的工作流程/臨床狀態。" "臨床文件架構的工作流程/臨床狀態。"
* type 1..1 CodeableConcept "臨床文件架構的種類(如果可能請使用LOINC)。" "臨床文件架構的種類(如果可能請使用LOINC)。"
* subject 0..1 BackboneElement "臨床文件架構是關於誰和/或什麼。" "臨床文件架構是關於誰和/或什麼。"
//* subject[x] 0..1 Patient or Group or Device or Substance or Location "臨床文件架構是關於誰和/或什麼。" "臨床文件架構是關於誰和/或什麼。"
* subject.patient 0..1 Patient "關於某病人。" "關於某病人。"
* subject.group 0..1 Group "關於某團體/群體。" "關於某團體/群體。"
* subject.device 0..1 Device "關於某設備。" "關於某設備。"
* subject.substance 0..1 Substance "關於某物質。" "關於某物質。"
* subject.location 0..1 Location  "關於某地點。" "關於某地點。"
* date 1..1 dateTime "臨床文件架構的編輯時間。" "臨床文件架構的編輯時間。"
* author 1..* BackboneElement "誰和/或什麼創建了這個臨床文件架構。" "誰和/或什麼創建了這個臨床文件架構。"
//* author[x] 1..* Practitioner or PractitionerRole or Organization or Patient or Device or RelatedPerson "誰和/或什麼創建了這個臨床文件架構。" "誰和/或什麼創建了這個臨床文件架構。"
* author.practitioner 0..*  Practitioner "某健康照護服務提供者創建這個臨床文件架構。" "某健康照護服務提供者創建這個臨床文件架構。"
* author.practitionerRole 0..*  PractitionerRole "某健康照護服務角色創建這個臨床文件架構。" "健康照護服務角色創建這個臨床文件架構。"
* author.organization 0..*  Organization "某機構創建這個臨床文件架構。" "某機構創建這個臨床文件架構。"
* author.patient 0..*  Patient "某病人創建這個臨床文件架構。" "某病人創建這個臨床文件架構。"
* author.device 0..*  Device "某設備創建這個臨床文件架構。" "某設備創建這個臨床文件架構。"
* author.relatedPerson 0..*  RelatedPerson "某相關人士創建這個臨床文件架構。" "某相關人士創建這個臨床文件架構。"
* title 1..1 string "人類可讀的名稱/標題。" "人類可讀的名稱/標題。"
* attester 0..* BackboneElement "證明臨床文件架構的準確性。" "證明臨床文件架構的準確性。"
* custodian 0..1 Organization "維護臨床文件架構的機構。" "維護臨床文件架構的機構。" 
* section 0..* BackboneElement "臨床文件架構被分成一個或數個小節。" "臨床文件架構被分成一個或數個小節。"


Mapping: TWComposition
Id: TWComposition
Title: "TW Core IG"
Source: TWCompositionModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreComposition"
* identifier -> "TWCoreComposition.identifier"
* status -> "TWCoreComposition.status"
* type -> "TWCoreComposition.type"
* subject.patient -> "TWCoreComposition.subject.Reference(TW Core Patient)"
* subject.group -> "TWCoreComposition.subject.Reference(Group)"
* subject.device -> "TWCoreComposition.subject.Reference(Device)"
* subject.substance -> "TWCoreComposition.subject.Reference(Substance)"
* subject.location -> "TWCoreComposition.subject.Reference(TW Core Location)"
* date -> "TWCoreComposition.date"
* author.practitioner -> "TWCoreComposition.author.Reference(TW Core Practitioner)"
* author.practitionerRole -> "TWCoreComposition.author.Reference(TW Core PractitionerRole)"
* author.organization -> "TWCoreComposition.author.Reference(TW Core Organization Hospital Department)"
* author.patient -> "TWCoreComposition.author.Reference(TW Core Patient)"
* author.device -> "TWCoreComposition.author.Reference(Device)"
* author.relatedPerson -> "TWCoreComposition.author.Reference(RelatedPerson)"
* title -> "TWCoreComposition.title"
* attester -> "TWCoreComposition.attester"
* custodian -> "TWCoreComposition.custodian"
* section -> "TWCoreComposition.section"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_condition.fsh

Logical: TWConditionModel
Id: TWCondition
Title: "臺灣核心-病情、問題或診斷(TW Core Condition) 之資料模型"
Description: "臺灣核心-病情、問題或診斷(TW Core Condition) 之資料模型"
* ^version = "0.3.2"
//* text 0..1 Narrative "內容摘要以供人閱讀" "內容摘要以供人閱讀"
* clinicalStatus 1..1 CodeableConcept "病情、問題或診斷的臨床狀態。" "病情、問題或診斷的臨床狀態。"
* verificationStatus 0..1 CodeableConcept "病情、問題或診斷的臨床狀態的驗證狀態。" "病情、問題或診斷的臨床狀態的驗證狀態。"
* category 1..1 CodeableConcept "病情、問題或診斷的類別。" "病情、問題或診斷的類別。"
* severity 0..1 CodeableConcept "病情、問題或診斷的主觀嚴重程度。" "病情、問題或診斷的主觀嚴重程度。"
* code 1..1 CodeableConcept "病情、問題或診斷的識別。" "病情、問題或診斷的識別。"
* bodySite 0..* CodeableConcept "解剖位置。" "解剖位置。"
* subject 0..1 Patient "有此病情、問題或診斷的病人。" "有此病情、問題或診斷的病人。"
* onset 0..1 dateTime "估計的或實際的日期。" "估計的或實際的日期。"
* abatement 0..1 dateTime "何時解決/緩解。" "何時解決/緩解。"
//* asserter[x] 0..1 Practitioner or PractitionerRole or Patient or RelatedPerson "聲稱有此病情、問題或診斷的人。" "聲稱有此病情、問題或診斷的人。"
* asserter 0..1 BackboneElement "聲稱有此病情、問題或診斷的人。" "聲稱有此病情、問題或診斷的人。"
* asserter.practitioner 0..1 Practitioner "聲稱有此病情、問題或診斷的某健康照護服務提供者。" "聲稱有此病情、問題或診斷的某健康照護服務提供者。"
* asserter.practitionerRole 0..1 PractitionerRole "聲稱有此病情、問題或診斷的某健康照護服務角色。" "聲稱有此病情、問題或診斷的某健康照護服務角色。"
* asserter.patient 0..1 Patient "聲稱有此病情、問題或診斷的某病人。" "聲稱有此病情、問題或診斷的某病人。"
* asserter.relatedPerson 0..1 RelatedPerson "聲稱有此病情、問題或診斷的某相關人士。" "聲稱有此病情、問題或診斷的某相關人士。"

Mapping: TWCondition
Id: TWCondition
Title: "TW Core IG"
Source: TWConditionModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreCondition"
//* text -> "TWCoreCondition.text"
* clinicalStatus -> "TWCoreCondition.clinicalStatus"
* verificationStatus -> "TWCoreCondition.verificationStatus"
* category -> "TWCoreCondition.category"
* severity -> "TWCoreCondition.severity"
* code -> "TWCoreCondition.code"
* bodySite -> "TWCoreCondition.bodySite"
* subject -> "TWCoreCondition.subject.Reference(TW Core Patient | Group)"
* onset -> "TWCoreCondition.onsetDateTime"
//* abatement -> "TWCoreCondition.abatementDateTime"
* abatement -> "TWCoreCondition.abatement.as(dateTime)"
//* asserter[x] -> "TWCoreCondition.asserter.Reference(TW Core Practitioner | PractitionerRole | TW Core Patient | RelatedPerson)"
* asserter.practitioner -> "TWCoreCondition.asserter.Reference(TW Core Practitioner)"
* asserter.practitionerRole -> "TWCoreCondition.asserter.Reference(TW Core PractitionerRole)"
* asserter.patient -> "TWCoreCondition.asserter.Reference(TW Core Patient)"
* asserter.relatedPerson -> "TWCoreCondition.asserter.Reference(RelatedPerson)"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_diagnosticReport.fsh

Logical: TWDiagnosticReportModel
Id: TWDiagnosticReport
Title: "臺灣核心-診斷報告(TW Core DiagnosticReport) 之資料模型"
Description: "臺灣核心-診斷報告(TW Core DiagnosticReport) 之資料模型"
* ^version = "0.3.2"
* status 1..1 code "診斷報告的狀態。" "診斷報告的狀態。"
* category 0..1 CodeableConcept "診斷報告的類別。" "診斷報告的類別。"
* code 1..1 CodeableConcept "診斷報告。" "診斷報告。"
//* subject[x] 0..1 Patient or Group or Device or Location "診斷對象。" "診斷對象。"
* subject 0..1 BackboneElement "診斷對象。" "診斷對象。"
* subject.patient 0..1 Patient "診斷某病人。" "診斷某病人。"
* subject.group 0..1 Group "診斷某團體/群體。" "診斷某團體/群體。"
* subject.device 0..1 Device "診斷某設備。" "診斷某設備。"
* subject.location 0..1 Location "診斷某地點。" "診斷某地點。"
* effective 0..1 dateTime "臨床相關報告時間。" "臨床相關報告時間。"
* issued 0..1 instant "診斷報告時間。" "診斷報告時間。"
//* performer[x] 0..* Practitioner or PractitionerRole or Organization or CareTeam "負責此診斷報告人員/機構。" "負責此診斷報告人員/機構。"
* performer 0..* BackboneElement "負責此診斷報告人員/機構。" "負責此診斷報告人員/機構。"
* performer.practitioner 0..* Practitioner "負責此診斷的某健康照護服務提供。" "負責此診斷的某健康照護服務提供者。"
* performer.practitionerRole 0..* PractitionerRole "負責此診斷的某健康照護服務角色。" "負責此診斷的某健康照護服務角色。"
* performer.organization 0..* Organization "負責此診斷的某機構。" "負責此診斷的某機構。"
* performer.careTeam 0..* CareTeam "負責此診斷的某照護團隊。" "負責此診斷的某照護團隊。"
* result 0..* Observation "診斷報告結果。" "診斷報告結果。"

Mapping: TWDiagnosticReport
Id: TWDiagnosticReport
Title: "TW Core IG"
Source: TWDiagnosticReportModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreDiagnosticReport"
//* text -> "TWCoreDiagnosticReport.text"
* status -> "TWCoreDiagnosticReport.status"
* category -> "TWCoreDiagnosticReport.category"
* code -> "TWCoreDiagnosticReport.code"
//* subject[x] -> "TWCoreDiagnosticReport.subject.Reference(TW Core Patient | Group | Device | Location)"
* subject.patient -> "TWCoreDiagnosticReport.subject.Reference(TW Core Patient)"
* subject.group -> "TWCoreDiagnosticReport.subject.Reference(Group)"
* subject.device -> "TWCoreDiagnosticReport.subject.Reference(Device)"
* subject.location -> "TWCoreDiagnosticReport.subject.Reference(TW Core Location)"
* effective -> "TWCoreDiagnosticReport.effective[x]"
* issued -> "TWCoreDiagnosticReport.issued"
//* performer[x] -> "TWCoreDiagnosticReport.performer"
* performer.practitioner -> "TWCoreDiagnosticReport.performer.Reference(TW Core Practitioner)"
* performer.practitionerRole -> "TWCoreDiagnosticReport.performer.Reference(TW Core PractitionerRole)"
* performer.organization -> "TWCoreDiagnosticReport.performer.Reference(TW Core Organization)"
* performer.careTeam -> "TWCoreDiagnosticReport.performer.Reference(CareTeam)"
* result -> "TWCoreDiagnosticReport.result"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_documentReference.fsh

Logical: TWDocumentReferenceModel
Id: TWDocumentReference
Title: "臺灣核心-文件參照(TW Core DocumentReference) 之資料模型"
Description: "臺灣核心-文件參照(TW Core DocumentReference) 之資料模型"
* ^version = "0.3.2"
/* author 0..* BackboneElement "誰以及/或什麼創建了文件。" "誰以及/或什麼創建了文件。"
* author.practitioner 0..*  Practitioner "某健康照護服務提供者創建這個文件。" "某健康照護服務提供者創建這個臨床文件。"
* author.practitionerRole 0..*  PractitionerRole "某健康照護服務角色創建這個文件。" "健康照護服務角色創建這個文件。"
* author.organization 0..*  Organization "某機構創建這個文件。" "某機構創建這個文件。"
* author.patient 0..*  Patient "某病人創建這個文件。" "某病人創建這個文件。"
* author.device 0..*  Device "某設備創建這個文件。" "某設備創建這個文件。"
* author.relatedPerson 0..*  RelatedPerson "某相關人士創建這個文件。" "某相關人士創建這個文件。"
* date 0..1	instant	"文件參照的創建時間是何時？" "文件參照的創建時間是何時？"*/
* masterIdentifier 0..1 Identifier "主要版本的文件參照識別碼。" "主要版本的文件參照識別碼。"
* status 1..1 CodeableConcept "文件引用的狀態。" "文件引用的狀態。"
* subject 0..1 BackboneElement "文件參照的對象。" "文件參照的對象。"
* subject.patient 0..1 Patient "文件參照的某病人。" "文件參照的某病人。"
* subject.practitioner 0..1 Practitioner  "文件參照的某健康照護服務提供者。" "文件參照的某健康照護服務提供者。"
* subject.group 0..1 Group "文件參照的某團體/群體。" "文件參照的某團體/群體。"
* subject.device 0..1 Device "文件參照的某設備。" "文件參照的某設備。"

Mapping: TWDocumentReference
Id: TWDocumentReference
Title: "TW Core IG"
Source: TWDocumentReferenceModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreDocumentReference"
/* author.practitioner -> "TWDocumentReference.author.Reference(TW Core Practitioner)"
* author.practitionerRole -> "TWDocumentReference.author.Reference(TW Core PractitionerRole)"
* author.organization -> "TWDocumentReference.author.Reference(TW Core Organization Hospital Department)"
* author.patient -> "TWDocumentReference.author.Reference(TW Core Patient)"
* author.device -> "TWDocumentReference.author.Reference(Device)"
* author.relatedPerson -> "TWDocumentReference.author.Reference(RelatedPerson)"
* date -> "TWCoreDocumentReference.date"*/
* masterIdentifier -> "TWCoreDocumentReference.masterIdentifier"
* status -> "TWCoreDocumentReference.status"
* subject.patient -> "TWCoreDocumentReference.subject.Reference(TW Core Patient)"
* subject.practitioner -> "TWCoreDocumentReference.subject.Reference(TW Core practitioner)"
* subject.group -> "TWCoreDocumentReference.subject.Reference(Group)"
* subject.device -> "TWCoreDocumentReference.subject.Reference(Device)"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_encounter.fsh

Logical: TWEncounterModel
Id: TWEncounter
Title: "臺灣核心-就醫事件(TW Core Encounter) 之資料模型"
Description: "臺灣核心-就醫事件(TW Core Encounter) 之資料模型"
* ^version = "0.3.2"
//* text 0..1 Narrative "內容摘要以供人閱讀" "內容摘要以供人閱讀"
* identifier 0..* Identifier "就醫事件的識別碼。" "就醫事件的識別碼。"
* status 1..1 code "就醫現況。" "就醫現況。"
* class 1..1 Coding "就醫的分類。" "就醫的分類。"
* serviceType 0..1 CodeableConcept "服務的特定型別。" "服務的特定型別。"
//* subject[x] 0..1 Patient or Group "就醫的病人或實體集合（Group）。" "就醫的病人或實體集合（Group）。"
* subject 0..1 BackboneElement "就醫的病人或實體集合（Group）。" "就醫的病人或實體集合（Group）。"
* subject.patient 0..1 Patient "就醫的病人。" "就醫的病人。"
* subject.group 0..1 Group "就醫的實體集合。" "就醫的實體集合。"
* participant 0..* BackboneElement "參與就醫的健康照護服務提供者。" "參與就醫的健康照護服務提供者。"
* period 0..1 Period "就醫的開始和結束時間。" "就醫的開始和結束時間。"
* reasonCode 0..* CodeableConcept "發生此就醫事件的原因。" "發生此就醫事件的原因。"
* dischargeDisposition 0..1 CodeableConcept "出院後的地點類別或種類。" "出院後的地點類別或種類。"
* location 0..* BackboneElement "病人曾去過的一個或多個地點。" "病人曾去過的一個或多個地點。"

Mapping: TWEncounter
Id: TWEncounter
Title: "TW Core IG"
Source: TWEncounterModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreEncounter"
//* text -> "TWCoreEncounter.text"
* identifier -> "TWCoreEncounter.identifier"
* status -> "TWCoreEncounter.status"
* class -> "TWCoreEncounter.class"
* serviceType -> "TWCoreEncounter.serviceType"
//* subject[x] -> "TWCoreEncounter.subject.Reference(TW Core Patient | Group)"
* subject.patient -> "TWCoreEncounter.subject.Reference(TW Core Patient)"
* subject.group  -> "TWCoreEncounter.subject.Reference(Group)"
* participant -> "TWCoreEncounter.participant"
* period -> "TWCoreEncounter.period"
* reasonCode -> "TWCoreEncounter.reasonCode"
* dischargeDisposition -> "TWCoreEncounter.hospitalization.dischargeDisposition"
* location -> "TWCoreEncounter.location"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_imagingstudy.fsh

Logical: TWImagingStudyModel
Id: TWImagingStudy
Title: "臺灣核心-影像檢查(TW Core ImagingStudy) 之資料模型"
Description: "臺灣核心-影像檢查(TW Core ImagingStudy) 之資料模型"
* ^version = "0.3.2"
* identifier 0..* Identifier "整個影像檢查的識別碼。" "整個影像檢查的識別碼。"
* modality 0..* Coding "如果是實際的照影儀器，所有系列的儀器。" "如果是實際的照影儀器，所有系列的儀器。"
//* subject[x] 1..1 Patient or Device or Group "影像檢查的對象。" "影像檢查的對象。"
* subject 1..1 BackboneElement "影像檢查的對象。" "影像檢查的對象。"
* subject.patient 0..1 Patient "影像檢查的某病人。" "影像檢查的某病人。"
* subject.device 0..1 Device "影像檢查的某設備。" "影像檢查的某設備。"
* subject.group 0..1 Group "影像檢查的某團體/群體。" "影像檢查的某團體/群體。"
* started 0..1 dateTime "影像檢查何時開始。" "影像檢查何時開始。"
* procedureCode 0..* CodeableConcept "影像檢查的處置或手術代碼。" "影像檢查的處置或手術代碼。" 
* reasonCode 0..* CodeableConcept "為什麼進行影像檢查。"  "為什麼進行影像檢查。"
* series 0..* BackboneElement "每項影像檢查有一個或多個實例系列。" "每項影像檢查有一個或多個實例系列。"

Mapping: TWImagingStudy
Id: TWImagingStudy
Title: "TW Core IG"
Source: TWImagingStudyModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreImagingStudy"
* identifier -> "TWCoreImagingStudy.identifier"
* modality -> "TWCoreImagingStudy.modality"
* subject.patient -> "TWCoreImagingStudy.subject.Reference(TW Core Patient)"
* subject.device -> "TWCoreImagingStudy.subject.Reference(Device)"
* subject.group -> "TWCoreImagingStudy.subject.Reference(Group)"
* started -> "TWCoreImagingStudy.started"
* procedureCode -> "TWCoreImagingStudy.procedureCode"
* reasonCode -> "TWCoreImagingStudy.reasonCode"
* series -> "TWCoreImagingStudy.series"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_location.fsh

Logical: TWLocationModel
Id: TWLocation
Title: "臺灣核心-地點(TW Core Location) 之資料模型"
Description: "臺灣核心-地點(TW Core Location) 之資料模型"
* ^version = "0.3.2"
* status 0..1 code "地點的狀態，指示該地點是否仍在使用中。" "地點的狀態，指示該地點是否仍在使用中。"
* name 1..1 string "地點的名稱。" "地點的名稱。"
* telecom 0..* ContactPoint "地點的聯絡細節。" "地點的聯絡細節。"
* address 0..1 Address "使用郵政規範表達的地址（相對於GPS或其他位置定義格式）" "使用郵政規範表達的地址（相對於GPS或其他位置定義格式）"
* managingOrganization 0..1 Organization "負責地點的提供與維護之組織。" "負責地點的提供與維護之組織。"

Mapping: TWLocation
Id: TWLocation
Title: "TW Core IG"
Source: TWLocationModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreLocation"
* status -> "TWCoreLocation.status"
* name -> "TWCoreLocation.name"
* telecom -> "TWCoreLocation.telecom"
* address -> "TWCoreLocation.address"
* managingOrganization -> "TWCoreLocation.managingOrganization"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_media.fsh

Logical: TWMediaModel
Id: TWMedia
Title: "臺灣核心-多媒體(TW Core Media) 之資料模型"
Description: "臺灣核心-多媒體(TW Core Media) 之資料模型"
* ^version = "0.3.2"
//* subject[x] 0..1 Patient or Practitioner or PractitionerRole or Group or Device or Specimen or Location "多媒體的對象。" "多媒體的對象。"
* subject 0..1 BackboneElement "多媒體的對象。" "多媒體的對象。"
* subject.patient 0..1 Patient "多媒體的某病人。" "多媒體的某病人。"
* subject.practitioner 0..1 Practitioner  "多媒體的某健康照護服務提供者。" "多媒體的某健康照護服務提供者。"
* subject.practitionerRole 0..1 PractitionerRole "多媒體的某健康照護服務角色。" "多媒體的某健康照護服務角色。"
* subject.group 0..1 Group "多媒體的某團體/群體。" "多媒體的某團體/群體。"
* subject.device 0..1 Device "多媒體的某設備。" "多媒體的某設備。"
* subject.specimen 0..1 Specimen "多媒體的某檢體。" "多媒體的某檢體。"
* subject.location 0..1 Location "多媒體的某地點。" "多媒體的某地點。"


Mapping: TWMedia
Id: TWMedia
Title: "TW Core IG"
Source: TWMediaModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreMedia"
* subject.patient -> "TWCoreMedia.subject.Reference(TW Core Patient)"
* subject.practitioner -> "TWCoreMedia.subject.Reference(TW Core Practitioner)"
* subject.practitionerRole -> "TWCoreMedia.subject.Reference(TW Core PractitionerRole)"
* subject.group -> "TWCoreMedia.subject.Reference(Group)"
* subject.device -> "TWCoreMedia.subject.Reference(Device)"
* subject.specimen -> "TWCoreMedia.subject.Reference(TW Core Specimen)"
* subject.location -> "TWCoreMedia.subject.Reference(TW Core Location)"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_medication.fsh

Logical: TWMedicationModel				
Id: TWMedication				
Title: "臺灣核心-藥品(TW Core Medication) 之資料模型"				
Description:  "臺灣核心-藥品(TW Core Medication) 之資料模型"
* ^version = "0.3.2"
//* text 0..1 Narrative "內容摘要以供人閱讀。" "內容摘要以供人閱讀。"			
* code 0..1 CodeableConcept "指明這種藥品的代碼。" "指明這種藥品的代碼。"			
* form 0..1 CodeableConcept "藥品劑型。" "藥品劑型。"
//--- END				
//--- END				
//--- END

Mapping: TWMedication
Id: TWMedication
Title: "TW Core IG"
Source: TWMedicationModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreMedication"
//* text -> "TWCoreMedication.text"
* code -> "TWCoreMedication.code"
* form -> "TWCoreMedication.form"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_medicationDispense.fsh

Logical: TWMedicationDispenseModel
Id: TWMedicationDispense
Title: "臺灣核心-配藥或藥品調劑(TW Core MedicationDispense) 之資料模型"
Description: "臺灣核心-配藥或藥品調劑(TW Core MedicationDispense) 之資料模型"
* ^version = "0.3.2"
* identifier 0..* Identifier "配藥/藥品調劑的外部識別碼。" "配藥/藥品調劑的外部識別碼。"
* status 1..1 code "一個編碼概念，用以具體說明配藥/藥品調劑事件的狀態。" "一個編碼概念，用以具體說明配藥/藥品調劑事件的狀態。"
* category 0..1	CodeableConcept  "配藥/藥品調劑的類別，描述預期將服用或用藥的地點之代碼。" "配藥/藥品調劑的類別，描述預期將服用或用藥的地點之代碼。"
//* medication[x] 1..1 Medication or CodeableConcept "服用的藥品。" "服用的藥品。"
* medication 1..1 BackboneElement "服用的藥品。" "服用的藥品。"
* medication.medication 0..1 Medication "藥品的定義。" "藥品的定義。"
* medication.code 0..1 CodeableConcept "服用的藥品。" "服用的藥品。"
//* subject[x] 1..1 Patient or Group "配藥/藥品調劑的對象。" "配藥/藥品調劑的對象。"
* subject 1..1 BackboneElement "配藥/藥品調劑的對象。" "配藥/藥品調劑的對象。"
* subject.patient 0..1 Patient "配藥/藥品調劑的某病人。" "配藥/藥品調劑的某病人。"
* subject.group 0..1 Group "配藥/藥品調劑的某團體/群體。" "配藥/藥品調劑的某團體/群體。"
* context 0..1	Encounter  "與此配藥/藥品調劑密切相關的就醫事件(Encounter/Episode)。" "與此配藥/藥品調劑密切相關的就醫事件(Encounter/Episode)。"
* performer 0..* BackboneElement "執行此配藥/藥品調劑的人員。" "執行此配藥/藥品調劑的人員。"
* authorizingPrescription 0..* 	MedicationRequest "授權此配藥/藥品調劑的處方。" "授權此配藥/藥品調劑的處方。"
* type 0..1 CodeableConcept "執行的配藥/藥品調劑事件類型。例如：試用填充、試用完成、部分填充、緊急填充、樣品等" "執行的配藥/藥品調劑事件類型。例如：試用填充、試用完成、部分填充、緊急填充、樣品等"
* quantity 0..1 SimpleQuantity "配藥/藥品調劑的量。" "配藥/藥品調劑的量。"
* whenHandedOver 0..1 dateTime "藥品發放的時間。" "藥品發放的時間。"
* dosageInstruction 0..* Dosage "應該如何用藥或者由照護者給藥。" "應該如何用藥或者由照護者給藥。"


Mapping: TWMedicationDispense
Id: TWMedicationDispense
Title: "TW Core IG"
Source: TWMedicationDispenseModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreMedicationDispense"
* identifier -> "TWCoreMedicationDispense.identifier"
* status -> "TWCoreMedicationDispense.status"
* category -> "TWCoreMedicationDispense.category"
* medication.medication -> "TWCoreMedicationDispense.Medication"
* medication.code -> "TWCoreMedicationDispense.Medication.code"
* subject.patient -> "TWCoreMedicationDispense.subject.Reference(TW Core Patient)"
* subject.group -> "TWCoreMedicationDispense.subject.Reference(Group)"
* context -> "TWCoreMedicationDispense.context.Reference(TW Core Encounter)"
* performer -> "TWCoreMedicationDispense.performer"
* authorizingPrescription -> "TWCoreMedicationDispense.authorizingPrescription.Reference(TW Core MedicationRequest)"
* type -> "TWCoreMedicationDispense.type"
* quantity -> "TWCoreMedicationDispense.quantity"
* whenHandedOver -> "TWCoreMedicationDispense.whenHandedOver"
* dosageInstruction -> "TWCoreMedicationDispense.dosageInstruction"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_medicationRequest.fsh

Logical: TWMedicationRequestModel
Id: TWMedicationRequest
Title: "臺灣核心-藥品請求(TW Core MedicationRequest) 之資料模型"
Description: "臺灣核心-藥品請求(TW Core MedicationRequest) 之資料模型"
* ^version = "0.3.2"
* identifier 0..1 Identifier "藥品請求的外部識別碼。" "藥品請求的外部識別碼。"
* status 1..1 code "藥品請求的狀態。" "藥品請求的狀態。"
* intent 1..1 code "藥品請求的意圖。" "藥品請求的意圖。"
* category 0..1 CodeableConcept "藥品請求的類別。" "藥品請求的類別。"
//* medication[x] 1..1 Medication or CodeableConcept "服用的藥品。" "服用的藥品。"
* medication 1..1 BackboneElement "服用的藥品。" "服用的藥品。"
* medication.medication 0..1 Medication "藥品的定義。" "藥品的定義。"
* medication.code 0..1 CodeableConcept "服用的藥品。" "服用的藥品。"
//* subject[x] 1..1 Patient or Group "開立此藥品請求的對象。" "開立此藥品請求的對象。"
* subject 1..1 BackboneElement "開立此藥品請求的對象。" "開立此藥品請求的對象。"
* subject.patient 0..1 Patient "開立此藥品請求的某病人。" "開立此藥品請求的某病人。"
* subject.group 0..1 Group "開立此藥品請求的某團體/群體。" "開立此藥品請求的某團體/群體。"
* encounter 0..1 Encounter "與此藥品請求紀錄密切相關的就醫。" "與此藥品請求紀錄密切相關的就醫。"
* authoredOn 0..1 dateTime "藥品請求最初請求時間。" "藥品請求最初請求時間。"
//* requester[x] 0..1 Practitioner or PractitionerRole or Organization or Patient or RelatedPerson or Device "提出藥品請求的人／對象。" "提出藥品請求的人／對象。"
* requester 0..1 BackboneElement "提出藥品請求的人／對象。" "提出藥品請求的人／對象。"
* requester.practitioner 0..1 Practitioner "提出藥品請求的某健康照護服務提供者。" "提出藥品請求的某健康照護服務提供者。"
* requester.practitionerRole 0..1 PractitionerRole "提出藥品請求的某健康照護服務角色。" "提出藥品請求的某健康照護服務角色。"
* requester.organization 0..1 Organization "提出藥品請求的某機構。" "提出藥品請求的某機構。"
* requester.patient 0..1 Patient "提出藥品請求的某病人。" "提出藥品請求的某病人。"
* requester.relatedPerson 0..1 RelatedPerson "提出藥品請求的某相關人士。" "提出藥品請求的某相關人士。"
* requester.device 0..1 Device "提出藥品請求的某設備。" "提出藥品請求的某設備。"
//* reasonReference[x] 0..* Condition or Observation "開立處方的原因。" "開立處方的原因。"
* reasonReference 0..* BackboneElement "開立處方的原因。" "開立處方的原因。"
* reasonReference.condition 0..* Condition "開立處方的病情、問題或診斷原因。" "開立處方的病情、問題或診斷原因。"
* reasonReference.observation 0..* Observation "開立處方的檢驗檢查原因。" "開立處方的檢驗檢查原因。"
* note 0..* Annotation "關於處方的資訊。" "關於處方的資訊。"
* dosageInstruction 0..* Dosage "應該如何用藥。" "應該如何用藥。"
* dispenseRequest 0..1 BackboneElement "藥品供應授權。" "藥品供應授權。"
* dispenseRequest.validityPeriod 0..1 Period "處方可用以配藥的有效期限。" "處方可用以配藥的有效期限。"
* dispenseRequest.numberOfRepeatsAllowed 0..1 unsignedInt "可重複領藥的次數。" "可重複領藥的次數。"
* dispenseRequest.expectedSupplyDuration 0..1 Duration "每次配藥可持續的天數。" "每次配藥可持續的天數。"

Mapping: TWMedicationRequest
Id: TWMedicationRequest
Title: "TW Core IG"
Source: TWMedicationRequestModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreMedicationRequest"
//* text -> "TWCoreMedicationRequest.text"
* identifier -> "TWCoreMedicationRequest.identifier"
* status -> "TWCoreMedicationRequest.status"
* intent -> "TWCoreMedicationRequest.intent"
* category -> "TWCoreMedicationRequest.category"
//* medication[x] -> "TWCoreMedicationRequest.medication[x]"
* medication.medication -> "TWCoreMedicationRequest.medication.Reference(TW Core Medication)"
* medication.code -> "TWCoreMedicationRequest.medication"
//* subject[x] -> "TWCoreMedicationRequest.subject.Reference(TW Core Patient | Group)"
* subject.patient -> "TWCoreMedicationRequest.subject.Reference(TW Core Patient)"
* subject.group -> "TWCoreMedicationRequest.subject.Reference(Group)"
* encounter -> "TWCoreMedicationRequest.encounter.Reference(TW Core Encounter)"
* authoredOn -> "TWCoreMedicationRequest.authoredOn"
//* requester[x] -> "TWCoreMedicationRequest.requester.Reference(TW Core Practitioner | PractitionerRole | TW Core Organization Hospital Department | TW Core Patient | RelatedPerson | Device)"
* requester.practitioner -> "TWCoreMedicationRequest.requester.Reference(TW Core Practitioner)"
* requester.practitionerRole -> "TWCoreMedicationRequest.requester.Reference(TW Core PractitionerRole)"
* requester.organization -> "TWCoreMedicationRequest.requester.Reference(TW Core Organization Hospital Department)"
* requester.patient -> "TWCoreMedicationRequest.requester.Reference(TW Core Patient)"
* requester.relatedPerson -> "TWCoreMedicationRequest.requester.Reference(RelatedPerson)"
* requester.device -> "TWCoreMedicationRequest.requester.Reference(Device)"
//* reasonReference[x] -> "TWCoreMedicationRequest.reasonReference.Reference(TW Core Condition | TW Core Observation Laboratory Result)"
* reasonReference.condition -> "TWCoreMedicationRequest.reasonReference.Reference(TW Core Condition)"
* reasonReference.observation -> "TWCoreMedicationRequest.reasonReference.Reference(TW Core Observation Laboratory Result)"
* note -> "TWCoreMedicationRequest.note"
* dosageInstruction -> "TWCoreMedicationRequest.dosageInstruction"
* dispenseRequest -> "TWCoreMedicationRequest.dispenseRequest"
* dispenseRequest.validityPeriod -> "TWCoreMedicationRequest.dispenseRequest.validityPeriod"
* dispenseRequest.numberOfRepeatsAllowed -> "TWCoreMedicationRequest.dispenseRequest.numberOfRepeatsAllowed"
* dispenseRequest.expectedSupplyDuration -> "TWCoreMedicationRequest.dispenseRequest.expectedSupplyDuration"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_medicationStatement.fsh

Logical: TWMedicationStatementModel
Id: TWMedicationStatement
Title: "臺灣核心-用藥聲明(TW Core  MedicationStatement) 之資料模型"
Description: "臺灣核心-用藥聲明(TW Core  MedicationStatement) 之資料模型"
* ^version = "0.3.2"
* identifier 0..* Identifier "用藥聲明的外部識別碼。" "用藥聲明的外部識別碼。"
* status 1..1 code "一個編碼概念，用以指明用藥聲明的當前狀態。" "一個編碼概念，用以指明用藥聲明的當前狀態。"
* category 0..1	CodeableConceptTW  "一個編碼概念，用以識別用藥聲明中包含的藥品預期將在哪裡被服用或用藥。" "一個編碼概念，用以識別用藥聲明中包含的藥品預期將在哪裡被服用或用藥。"
//* medication[x] 1..1 Medication or CodeableConcept "服用的藥品。" "服用的藥品。"
* medication 1..1 BackboneElement "服用的藥品。" "服用的藥品。"
* medication.medication 0..1 Medication "藥品的定義。" "藥品的定義。"
* medication.code 0..1 CodeableConcept "服用的藥品。" "服用的藥品。"
//* subject[x] 1..1 Patient or Group "用藥聲明的對象。" "用藥聲明的對象。"
* subject 1..1 BackboneElement "用藥聲明的對象。" "用藥聲明的對象。"
* subject.patient 0..1 Patient "用藥聲明的某病人。" "用藥聲明的某病人。"
* subject.group 0..1 Group "用藥聲明的某團體/群體。" "用藥聲明的某團體/群體。"
//* context[x] 0..1	Encounter or EpisodeOfCare  "與此用藥聲明密切相關的就醫事件(Encounter / Episode)。" "與此用藥聲明密切相關的就醫事件(Encounter / Episode)。"
* context 0..1	BackboneElement  "與此用藥聲明密切相關的就醫事件(Encounter / Episode)。" "與此用藥聲明密切相關的就醫事件(Encounter / Episode)。"
* context.encounter 0..1 Encounter "與此用藥聲明密切相關的某就醫事件。" "與此用藥聲明密切相關的某就醫事件。"
* context.episodeOfCare 0..1 EpisodeOfCare "與此用藥聲明密切相關的某照護事件。" "與此用藥聲明密切相關的某照護事件。"
//* effective[x] 0..1 dateTime or Period  "用藥的日期/時間或間隔。" "用藥的日期/時間或間隔。"
* effective 0..1 BackboneElement  "用藥的日期/時間或間隔。" "用藥的日期/時間或間隔。"
//* effective.dateTime 0..1 dateTime "用藥的有效日期時間。" "用藥的有效日期時間。"
//* effective.period 0..1 Period "用藥的有效期間。" "用藥的有效期間。"
* dosage 0..* Dosage "藥品現在如何被/曾經被服用或應該如何服用的細節。" "藥品現在如何被/曾經被服用或應該如何服用的細節。"


Mapping:  TWMedicationStatement
Id:  TWMedicationStatement
Title: "TW Core IG"
Source:  TWMedicationStatementModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreMedicationStatement"
* identifier -> "TWCoreMedicationStatement.identifier"
* status -> "TWCoreMedicationStatement.status"
* category -> "TWCoreMedicationStatement.category"
* medication.medication -> "TWCoreMedicationStatement.Medication"
* medication.code -> "TWCoreMedicationStatement.Medication.code"
* subject.patient -> "TWCoreMedicationStatement.subject.Reference(TW Core Patient)"
* subject.group -> "TWCoreMedicationStatement.subject.Reference(Group)"
* context.encounter -> "TWCoreMedicationStatement.context.Reference(TW Core Encounter)"
* context.episodeOfCare -> "TWCoreMedicationStatement.context.Reference(episodeOfCare)"
* effective -> "TWCoreMedicationStatement.effective"
* dosage -> "TWCoreMedicationStatement.dosage"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_messageHeader.fsh

Logical: TWMessageHeaderModel
Id: TWMessageHeader
Title: "臺灣核心-訊息表頭(TW Core MessageHeader) 之資料模型"
Description: "臺灣核心-訊息表頭(TW Core MessageHeader) 之資料模型"
* ^version = "0.3.2"
* sender 0..1 BackboneElement "訊息的實際發送端" "訊息的實際發送端"
* sender.practitioner 0..1  Practitioner "某健康照護服務提供者發送訊息。" "某健康照護服務提供者發送訊息。"
* sender.practitionerRole 0..1  PractitionerRole "某健康照護服務角色發送訊息。" "某健康照護服務角色發送訊息。"
* sender.organization 0..1  Organization "某機構發送訊息。" "某機構發送訊息。"
* focus 0..* Resource "訊息的實際內容。" "訊息的實際內容。"

Mapping: TWMessageHeader
Id: TWMessageHeader
Title: "TW Core IG"
Source: TWMessageHeaderModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWMessageHeader"
* sender.practitioner -> "TWMessageHeader.sender.Reference(TW Core Practitioner)"
* sender.practitionerRole -> "TWMessageHeader.sender.Reference(TW Core PractitionerRole)"
* sender.organization -> "TWMessageHeader.sender.Reference(TW Core Organization Hospital Department)"
* focus -> "TWMessageHeader.focus.Reference(Resource)"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_observation.fsh

Logical: TWObservationModel
Id: TWObservation
Title: "臺灣核心-檢驗檢查(TW Core Observation) 之資料模型"
Description: "臺灣核心-檢驗檢查(TW Core Observation) 之資料模型"
* ^version = "0.3.2"
* resultStatus 1..1 code "檢驗檢查結果之狀態。" "檢驗檢查結果之狀態。"
* category 0..* CodeableConcept "檢驗檢查的類別。" "檢驗檢查的類別。"
* observationCode 1..1 CodeableConcept "檢驗檢查代碼，此代碼通常是用來識別所進行的檢驗檢查是哪一項，例如身高、體重、血壓等。" "檢驗檢查代碼，此代碼通常是用來識別所進行的檢驗檢查是哪一項，例如身高、體重、血壓等。"
* subject 1..1 Patient "檢驗檢查的對象。" "檢驗檢查的對象。"
* dateTime 1..1 dateTime "檢驗檢查的日期(時間)。" "檢驗檢查的日期(時間)。"
//* performer[x] 0..* Practitioner or Organization or Patient or PractitionerRole or CareTeam "負責檢驗檢查的人員。" "負責檢驗檢查的人員。"
* performer 0..* BackboneElement "負責檢驗檢查的人員。" "負責檢驗檢查的人員。"
* performer.practitioner 0..* Practitioner "負責檢驗檢查的某健康照護服務提供者。" "負責檢驗檢查的某健康照護服務提供者。"
* performer.organization 0..* Organization "負責檢驗檢查的某機構。" "負責檢驗檢查的某機構。"
* performer.patient 0..* Patient "負責檢驗檢查的某病人。" "負責檢驗檢查的某病人。"
* performer.practitionerRole 0..* PractitionerRole "負責檢驗檢查的某健康照護服務角色。" "負責檢驗檢查的某健康照護服務角色。"
* performer.careTeam 0..* CareTeam "負責檢驗檢查的某照護團隊。" "負責檢驗檢查的某照護團隊。"
* results 0..1 BackboneElement "檢驗檢查結果。" "檢驗檢查結果。"
* subResults 0..* BackboneElement "子項檢驗檢查之結果。" "子項檢驗檢查之結果。"

Mapping: TWObservation
Id: TWObservation
Title: "TW Core IG"
Source: TWObservationModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreObservationLaboratoryResult 或 TWCoreObservationBloodPressure 或 TWCoreObservationBMI"
//* text -> "TWCoreObservationLaboratoryResult.text 或 TWCoreObservationBloodPressure.text 或 TWCoreObservationBMI.text"
* resultStatus -> "TWCoreObservationLaboratoryResult.status 或 TWCoreObservationBloodPressure.status 或 TWCoreObservationBMI.status"
* category -> "TWCoreObservationLaboratoryResult.category 或 TWCoreObservationBloodPressure.category 或 TWCoreObservationBMI.category"
* observationCode -> "TWCoreObservationLaboratoryResult.code 或 TWCoreObservationBloodPressure.code 或 TWCoreObservationBMI.code"
* subject -> "TWCoreObservationLaboratoryResult.subject.Reference(TW Core Patient) 或 TWCoreObservationBloodPressure.subject.Reference(TW Core Patient) 或 TWCoreObservationBMI.subject.Reference(TW Core Patient)"
* dateTime -> "TWCoreObservationLaboratoryResult.effectiveDateTime 或 TWCoreObservationBloodPressure.effectiveDateTime 或 TWCoreObservationBMI.effectiveDateTime"
//* performer[x] -> "TWCoreObservationLaboratoryResult.performer.Reference(TWCorePractitioner | TWCoreOrganization | TWCorePatient | PractitionerRole | CareTeam) 或 TWCoreObservationBloodPressure.performer.Reference(TWCorePractitioner | TWCoreOrganization | TWCorePatient | PractitionerRole | CareTeam) 或 TWCoreObservationBMI.performer.Reference(TWCorePractitioner | TWCoreOrganization | TWCorePatient | PractitionerRole | CareTeam)"
* performer.practitioner -> "TWCoreObservationLaboratoryResult.performer.Reference(TW Core Practitioner)"
* performer.organization -> "TWCoreObservationLaboratoryResult.performer.Reference(TW Core Organization)"
* performer.patient -> "TWCoreObservationLaboratoryResult.performer.Reference(TW Core Patient)"
* performer.practitionerRole -> "TWCoreObservationLaboratoryResult.performer.Reference(TW Core PractitionerRole)"
* performer.careTeam -> "TWCoreObservationLaboratoryResult.performer.Reference(CareTeam)"
* results -> "TWCoreObservationLaboratoryResult.value[x] 或 TWCoreObservationBMI.value[x]"
* subResults -> "TWCoreObservationBloodPressure.valueQuantity"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_organization.fsh

Logical: TWOrganizationModel
Id: TWOrganization
Title: "臺灣核心-機構(TW Core Organization)之資料模型"
Description: "臺灣核心-機構(TW Core Organization)之資料模型"
* ^version = "0.3.2"
* identifier 1..* Identifier "機構唯一識別碼(例如：醫事機構代碼、政府機關代號、統一編碼等)。" "機構唯一識別碼(例如：醫事機構代碼、政府機關代號、統一編碼等)。"
* active 0..1 boolean "此機構基本資料是否使用中。" "此機構基本資料是否使用中。"
* organizationType 0..1 CodeableConcept "機構種類。" "機構種類。"
* name 1..1 string "機構名稱。" "機構名稱。"
* telecom 0..* ContactPoint "聯絡方式。" "聯絡方式。"

Mapping: TWOrganization
Id: TWOrganization
Title: "TW Core IG"
Source: TWOrganizationModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreOrganization"
//* text -> "TWCoreOrganization.text"
* identifier -> "TWCoreOrganization.identifier"
* active -> "TWCoreOrganization.active"
* organizationType -> "TWCoreOrganization.type"
* name -> "TWCoreOrganization.name"
* telecom -> "TWCoreOrganization.telecom"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_patient.fsh

Logical: TWPatientModel
Id: TWPatient
Title: "臺灣核心-病人(TW Core Patient)之資料模型"
Description: "臺灣核心-病人(TW Core Patient)之資料模型"
* ^version = "0.3.2"
* identifier 1..* Identifier "身份識別碼(病歷號、身分證字號、護照號碼、居留證號碼等)" "身份識別碼(病歷號、身分證字號、護照號碼、居留證號碼等)。"
* active 0..1 boolean "此基本資料是否使用中。" "此基本資料是否使用中。"
* name 0..* HumanName "姓名，包括病人身分證或護照上的姓名、新生兒報戶口（戶籍登記）前的暫時性姓名、或研究用之匿名化病人姓名等。" "姓名，包括病人身分證或護照上的姓名、新生兒報戶口（戶籍登記）前的暫時性姓名、或研究用之匿名化病人姓名等。"
* telecom 0..* ContactPoint "聯絡方式。" "聯絡方式。"
* gender 1..1 code "性別。" "性別。"
* birthDate 1..1 date "出生日期。" "出生日期。"
* address 0..* Address "地址(戶籍/現居/工作等)。" "地址(戶籍/現居/工作等)。"
* maritalStatus 0..1 CodeableConcept "婚姻狀態。" "婚姻狀態。"
* photo 0..* Attachment "病人的影像（照片）。" "病人的影像（照片）。"
* contact 0..* BackboneElement "緊急聯絡人。" "緊急聯絡人。"
* communicationLanguage 0..* CodeableConcept "溝通語言。" "溝通語言。"
* organization 0..1 Organization "此紀錄的保管機構。" "此紀錄的保管機構。"

Mapping: TWCore
Id: TWCore
Title: "TW Core IG"
Source: TWPatientModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCorePatient"
//* text -> "text"
* identifier -> "identifier"
* active -> "active"
* name -> "name"
* telecom -> "telecom"
* gender -> "gender"
* birthDate -> "birthDate"
* address -> "address"
* maritalStatus -> "maritalStatus"
* photo -> "photo"
* contact -> "contact"
* communicationLanguage -> "communication.language"
* organization -> "managingOrganization.Reference(TW Core Organization)"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_practitioner.fsh

Logical: TWPractitionerModel
Id: TWPractitioner
Title: "臺灣核心-健康照護服務提供者(TW Core Practitioner)之資料模型"
Description: "臺灣核心-健康照護服務提供者(TW Core Practitioner)之資料模型"
* ^version = "0.3.2"
* identifier 1..* Identifier "人員識別碼(例如：員工編號等)。" "人員識別碼(例如：員工編號等)。"
* active 0..1 boolean "此健康照護服務人員的基本資料是否使用中。" "此健康照護服務人員的基本資料是否使用中。"
* name 1..* HumanName "姓名。" "姓名。"
* telecom 0..* ContactPoint "聯絡方式。" "聯絡方式。"
* address 0..* Address "地址(戶籍/現居/等)。" "地址(戶籍/現居/等)。"
* gender 0..1 code "性別。" "性別。"
* birthDate 0..1 date "出生日期。" "出生日期。"
* photo 0..* Attachment "人員影像。" "人員影像。"

Mapping: TWPractitioner
Id: TWPractitioner
Title: "TW Core IG"
Source: TWPractitionerModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCorePractitioner"
//* text -> "TWCorePractitioner.text"
* identifier -> "TWCorePractitioner.identifier"
* active -> "TWCorePractitioner.active"
* name -> "TWCorePractitioner.name"
* telecom -> "TWCorePractitioner.telecom"
* address -> "TWCorePractitioner.address"
* gender -> "TWCorePractitioner.gender"
* birthDate -> "TWCorePractitioner.birthDate"
* photo -> "TWCorePractitioner.photo"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_practitionerRole.fsh

Logical: TWPractitionerRoleModel
Id: TWPractitionerRole
Title: "臺灣核心-健康照護服務提供者角色(TW Core PractitionerRole) 之資料模型"
Description: "臺灣核心-健康照護服務提供者角色(TW Core PractitionerRole) 之資料模型"
* ^version = "0.3.2"
/* identifier 0..* Identifier "與角色(role)/地點(location0相關的特定業務識別碼。" "與角色(role)/地點(location0相關的特定業務識別碼。"
* active 0..1 boolean "此健康照護服務提供者角色紀錄是否有效。" "此健康照護服務提供者角色紀錄是否有效。"*/
* practitioner 0..1	Practitioner "能夠為機構提供所定義服務的健康照護服務提供者。" "能夠為機構提供所定義服務的健康照護服務提供者。"
* organization 0..1	Organization "提供此健康照護服務提供者角色的機構。" "提供此健康照護服務提供者角色的機構。"
* code 0..*	CodeableConcept "此健康照護服務提供者可能執行的角色。" "此健康照護服務提供者可能執行的角色。"
* specialty 0..* CodeableConcept "與機構相關的特定專業。" "與機構相關的特定專業。"
* location 0..* Location "此健康照護服務提供者提供照護的地點。" "此健康照護服務提供者提供照護的地點。"
* telecom 0..* ContactPoint	"此健康照護服務提供者角色/地點/服務的聯絡細節。" "此健康照護服務提供者角色/地點/服務的聯絡細節。"

Mapping: TWPractitionerRole
Id: TWPractitionerRole
Title: "TW Core IG"
Source: TWPractitionerRoleModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCorePractitionerRole"
/* identifier -> "TWCorePractitionerRole.identifier"
* active -> "TWCorePractitionerRole.active"*/
* practitioner -> "TWCorePractitionerRole.practitioner.Reference(TW Core Practitioner)"
* organization -> "TWCorePractitionerRole.organization.Reference(TW Core Organization Hospital Department)"
* code -> "TWCorePractitionerRole.code"
* specialty -> "TWCorePractitionerRole.specialty"
* location -> "TWCorePractitionerRole.location.Reference(TW Core Location)"
* telecom -> "TWCorePractitionerRole.telecom"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_procedure.fsh

Logical: TWProcedureModel
Id: TWProcedure
Title: "臺灣核心-處置或手術(TW Core Procedure)之資料模型"
Description: "臺灣核心-處置或手術(TW Core Procedure)之資料模型"
* ^version = "0.3.2"
* status 1..1 code "處置或手術的狀態。" "處置或手術的狀態。"
* code 1..1 CodeableConcept "處置或手術的識別碼。" "處置或手術的識別碼。"
* subject 1..1 Patient "處置或手術服務的對象。" "處置或手術服務的對象。"
* performedDateTime 0..1 dateTime "處置或手術執行時間。" "處置或手術執行時間。"
//* asserter[x] 0..1 Patient or RelatedPerson or Practitioner or PractitionerRole "聲稱有此處置或手術的人員。" "聲稱有此處置或手術的人員。"
* asserter 0..1 BackboneElement "聲稱有此處置或手術的人員。" "聲稱有此處置或手術的人員。"
* asserter.patient 0..1 Patient "聲稱有此處置或手術的病人。" "聲稱有此處置或手術的病人。"
* asserter.relatedPerson 0..1 RelatedPerson "聲稱有此處置或手術的相關人士。" "聲稱有此處置或手術的相關人士。"
* asserter.practitioner 0..1 Practitioner "聲稱有此處置或手術的某健康照護服務提供者。" "聲稱有此處置或手術的某健康照護服務提供者。"
* asserter.practitionerRole 0..1 PractitionerRole "聲稱有此處置或手術的某健康照護服務角色。" "聲稱有此處置或手術的某健康照護服務角色。"
//* performer[x] 0..* Practitioner or PractitionerRole or Organization or Patient or RelatedPerson or Device "執行處置或手術的人員。" "執行處置或手術的人員。"
* performer 0..* BackboneElement "執行處置或手術的人員。" "執行處置或手術的人員。"
* performer.practitioner 0..* Practitioner "執行處置或手術的某健康照護服務提供者。" "執行處置或手術的某健康照護服務提供者。"
* performer.practitionerRole 0..* PractitionerRole "執行處置或手術的某健康照護服務角色。" "執行處置或手術的某健康照護服務角色。"
* performer.organization 0..* Organization "執行處置或手術的某機構。" "執行處置或手術的某機構。"
* performer.patient 0..* Patient "執行處置或手術的某病人。" "執行處置或手術的某病人。"
* performer.relatedPerson 0..* RelatedPerson "執行處置或手術的某相關人士。" "執行處置或手術的某相關人士。"
* performer.device 0..* Device "執行處置或手術的某設備。" "執行處置或手術的某設備。"
* bodySite 0..* CodeableConcept "目標身體部位。" "目標身體部位。"

Mapping: TWProcedure
Id: TWProcedure
Title: "TW Core IG"
Source: TWProcedureModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreProcedure"
//* text -> "TWCoreProcedure.text"
* status -> "TWCoreProcedure.status"
* code -> "TWCoreProcedure.code"
* subject -> "TWCoreProcedure.subject.Reference(TW Core Patient)"
* performedDateTime -> "TWCoreProcedure.performedDateTime"
//* asserter[x] -> "TWCoreProcedure.asserter.Reference(TW Core Patient | RelatedPerson | TW Core Practitioner | PractitionerRole)"
* asserter.patient -> "TWCoreProcedure.asserter.Reference(TW Core Patient)"
* asserter.relatedPerson -> "TWCoreProcedure.asserter.Reference(RelatedPerson)"
* asserter.practitioner -> "TWCoreProcedure.asserter.Reference(TW Core Practitioner)"
* asserter.practitionerRole -> "TWCoreProcedure.asserter.Reference(TW Core PractitionerRole)"
//* performer[x] -> "TWCoreProcedure.performer.actor.Reference(TW Core Practitioner | PractitionerRole | TW Core Organization Hospital Department | TW Core Patient | RelatedPerson | Device)"
* performer.practitioner -> "TWCoreProcedure.performer.actor.Reference(TW Core Practitioner)"
* performer.practitionerRole -> "TWCoreProcedure.performer.actor.Reference(TW Core PractitionerRole)"
* performer.organization -> "TWCoreProcedure.performer.actor.Reference(TW Core Organization Hospital Department)"
* performer.patient -> "TWCoreProcedure.performer.actor.Reference(TW Core Patient)"
* performer.relatedPerson -> "TWCoreProcedure.performer.actor.Reference(RelatedPerson)"
* performer.device -> "TWCoreProcedure.performer.actor.Reference(Device)"
* bodySite -> "TWCoreProcedure.bodySite"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/models/model_specimen.fsh

Logical: TWSpecimenModel
Id: TWSpecimen
Title: "臺灣核心-檢體(TW Core Specimen) 之資料模型"
Description: "臺灣核心-檢體(TW Core Specimen) 之資料模型"
* ^version = "0.3.2"
* identifier 0..* Identifier "檢體的外部識別碼。" "檢體的外部識別碼。"
* type 0..1	CodeableConcept "檢體的類型。" "檢體的類型。"
//* subject[x] 1..1 Patient or Group or Device or Substance or Location "這可能來自病人、某個地點（例如環境樣本的來源），或是對某種物質或裝置的採樣。" "這可能來自病人、某個地點（例如環境樣本的來源），或是對某種物質或裝置的採樣。"
* subject 1..1 BackboneElement "這可能來自病人、某個地點（例如環境樣本的來源），或是對某種物質或裝置的採樣。" "這可能來自病人、某個地點（例如環境樣本的來源），或是對某種物質或裝置的採樣。"
* subject.patient 0..1 Patient "這可能來自某病人的採樣。" "這可能來自某病人的採樣。"
* subject.group 0..1 Group "這可能來自某團體/群體的採樣。" "這可能來自某團體/群體的採樣。"
* subject.device 0..1 Device "這可能來自某設備的採樣。" "這可能來自某設備的採樣。"
* subject.substance 0..1 Substance "這可能來自某物質的採樣。" "這可能來自某物質的採樣。"
* subject.location 0..1 Location "這可能來自某地點的採樣。" "這可能來自某地點的採樣。"

Mapping: TWSpecimen
Id: TWSpecimen
Title: "TW Core IG"
Source: TWSpecimenModel
Target: "https://twcore.mohw.gov.tw/ig/twcore"
* -> "TWCoreSpecimen"
* identifier -> "TWCoreSpecimen.identifier"
* type -> "TWCoreSpecimen.type"
* subject.patient -> "TWCoreSpecimen.subject.Reference(TW Core Patient)"
* subject.group -> "TWCoreSpecimen.subject.Reference(Group)"
* subject.device -> "TWCoreSpecimen.subject.Reference(Device)"
* subject.substance -> "TWCoreSpecimen.subject.Reference(Substance)"
* subject.location -> "TWCoreSpecimen.subject.Reference(TW Core Location)"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/profiles/profiles_address.fsh

Alias: $tw-postal-code = https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-postal-code
Alias: $tw-village = https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-village
Alias: $tw-neighborhood = https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-neighborhood
Alias: $tw-section = https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-section
Alias: $tw-lane = https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-lane
Alias: $tw-alley = https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-alley
Alias: $tw-number = https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-number
Alias: $tw-floor = https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-floor
Alias: $tw-room = https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition/tw-room


Profile: AddressTW
Parent: Address
Id: Address-tw
Title: "TW Core Address"
Description: "此臺灣核心-地址（TW Core Address） Profile說明本IG如何進一步定義FHIR的Address資料類型以呈現臺灣地址。  
本Profile之擴充的資料項目（Extension）為參照[初診基本資料表](https://www.eck.org.tw/wp-content/uploads/2019/10/ECK_FIRSTVIEW_INFOR.pdf)之欄位與[中華郵政地址英譯寫法](https://www.post.gov.tw/post/internet/Postal/sz_a_e_ta1.jsp)，若貴機構有詳細地址資訊之需求，可依情況填選；若無需區分詳細地址資訊，可使用原生欄位`text`、`line`、`district`呈現。"
* ^version = "0.3.2"
* ^kind = #complex-type
* use and type and postalCode and line and city and district and country MS
* postalCode.extension contains $tw-postal-code named PostalCode 0..1 MS
* postalCode.extension[PostalCode].valueCodeableConcept	 MS
* line 0..1
* line ^short = "路/街"
* line ^alias[0] = "路"
* line ^alias[+] = "街"
* city ^short = "鄉/鎮/市/區，定義上與國際的等級一致。原文為：Name of city, town etc.。"
* city ^alias[0] = "鄉"
* city ^alias[+] = "鎮"
* city ^alias[+] = "市"
* city ^alias[+] = "區"
* district ^short = "縣/市，定義上與國際的等級一致。原文為：District name (aka county)。"
* district ^alias[0] = "縣"
* district ^alias[=] = "市"
* extension contains
    $tw-room named room 0..1 and
    $tw-floor named floor 0..1 and
    $tw-number named number 0..1 and
    $tw-alley named alley 0..1 and
    $tw-lane named lane 0..1 and
    $tw-section named section 0..1 and
    $tw-neighborhood named neighborhood 0..1 and
    $tw-village named village 0..1
* extension[village] ^short = "村(里)"
* extension[village] ^alias[0] = "村"
* extension[village] ^alias[+] = "里"
* extension[neighborhood] ^short = "鄰"
* extension[section] ^short = "段"
* extension[lane] ^short = "巷/衖"
* extension[lane] ^alias[0] = "巷"
* extension[lane] ^alias[+] = "衖"
* extension[alley] ^short = "弄"
* extension[number] ^short = "號"
* extension[floor] ^short = "樓"
* extension[room] ^short = "室"
* extension[village] and extension[neighborhood] and extension[section] and extension[lane] and extension[alley] and extension[number] and extension[floor] and extension[room] MS

* . ^short = "使用郵政規範表達的地址（相對於GPS或其他位置定義格式）"
* . ^definition = "使用郵政規範表達的地址（相對於GPS或其他位置定義格式）。這種data type可用於傳達投遞郵件的位址，以及用於訪問可能對郵件投遞無效的位置，這世界定義了各種郵政地址格式。"
* . ^comment = "注意：地址的目的是描述用於管理目的之郵政地址，而不是描述絕對的地理座標。郵政地址經常被用作實體位置的代表（亦可見[Location](http://hl7.org/fhir/R4/location.html#)resource）。"
* id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* use ^short = "home ｜ work ｜ temp ｜ old ｜ billing － 此地址的用途"
* use ^binding.description = "應填入AddressUse值集中的其中一個代碼"
* use ^definition = "此地址的用途"
* use ^requirements = "允許從清單中挑選適當的地址用途"
* use ^comment = "應用程式可假定一個地址是目前使用中，除非它明確說它是暫時的或舊的。"
* type ^short = "postal ｜ physical ｜ both"
* type ^binding.description = "應填入AddressType值集中的其中一個代碼"
* type ^definition = "區分實際地址（你可以拜訪的地址）和郵寄地址（如郵政信箱和轉遞地址），大多數地址都是這兩種。"
* type ^comment = "地址的定義指出「地址旨在描述郵政地址，而不是實體位置」。但許多應用程式追蹤一個地址是否具有雙重目的，既是一個可以拜訪的地點，亦是一個有效的投遞目的地，郵政地址經常被用作實體位置的代表（亦可見[Location](http://hl7.org/fhir/R4/location.html#)resource）。"
* text ^short = "地址的文字表述"
* text ^definition = "具體說明整個地址，因為它應該顯示在郵政標籤上，這可替代或與特定的部分一起提供。"
* text ^requirements = "一個可呈現的、未編碼的形式。"
* text ^comment = "可以同時提供文字表述和各部分的地址資料項目內容。更新地址的應用程式 **必須（SHALL）** 確保當文字表述和各部分的地址資料項目內容都存在時，文字表述不包括各部分的地址資料項目內容中沒有的內容，意即兩者內容會一致。"
* line ^definition = "此部分包含門牌號碼、公寓號碼、街道名稱、街道方向、郵政信箱號碼、送貨提示以及類似的地址資訊。"
* city ^definition = "市、鄉、鎮、村或其他社區或配送中心的名稱。"
* district ^definition = "行政區域（縣）的名稱"
* district ^comment = "區（district）有時被稱為縣（country），但在一些區域（regions），「縣（country）」被用來代替市（直轄市），所以縣名應該用市名來代替傳達。"
* state ^short = "國家的子單位（縮寫也可以）。原文為：Sub-unit of country (abbreviations ok)。"
* state ^definition = "一個國家的子單位，在聯邦組織的國家中擁有有限的主權。如果代碼被普遍使用，可使用代碼（例如：美國2個字母的州代碼）。"
* postalCode ^short = "郵遞區號"
* postalCode ^definition = "指定一個由郵政服務定義的區域之郵遞區號"
* postalCode.id ^short = "xml：id（或JSON格式）。"
* postalCode.id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* postalCode.extension ^short = "擴充的資料項目"
* postalCode.extension ^definition = "擴充的資料項目"
* postalCode.extension[PostalCode].value[x] ^comment = "並非所有的專門術語使用都符合這個一般模式。在某些情況下，資料模型不應該使用CodeableConcept，而應直接使用Coding，並提供他們自己的結構來管理文字、編碼、翻譯、資料項目之間的關係、先組合配對（pre-）和後組合配對（post-coordination）。"
* postalCode.extension[PostalCode].valueCodeableConcept.id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* postalCode.extension[PostalCode].valueCodeableConcept.id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* postalCode.extension[PostalCode].valueCodeableConcept.extension ^short = "擴充的資料項目"
* postalCode.extension[PostalCode].valueCodeableConcept.extension ^definition = "可用於表示不屬於此資料項目基本定義的附加資訊。為了擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。"
* postalCode.extension[PostalCode].valueCodeableConcept.extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何污名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding ^short = "由專門術語系統（terminology system）定義的代碼"
* postalCode.extension[PostalCode].valueCodeableConcept.coding ^definition = "由專門術語系統（terminology system）所定義之代碼的參照"
* postalCode.extension[PostalCode].valueCodeableConcept.coding ^requirements = "允許代碼系統中的替代編碼，以及翻譯到其他編碼系統。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding ^comment = "代碼可以在列舉清單（enumerations）或代碼清單（code lists）中非常隨意地定義，直至有非常正式的定義，例如：SNOMED CT—更多資訊見HL7 v3核心原則（Core Principles）。編碼的排序是未定義的因而 **必須沒有（SHALL NOT）** 被用來推斷意義。一般來說，最多只有一個編碼值（coding values）會被標記為UserSelected = true。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3] ^short = "由專門術語系統（terminology system）定義的代碼"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3] ^binding.description = "應填入所綁定值集中的其中一個代碼"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3] ^definition = "由專門術語系統（terminology system）所定義之代碼的參照"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3] ^requirements = "允許代碼系統中的替代編碼，以及翻譯到其他編碼系統。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3] ^comment = "代碼可以在列舉清單（enumerations）或代碼清單（code lists）中非常隨意地定義，直至有非常正式的定義，例如：SNOMED CT—更多資訊見HL7 v3核心原則（Core Principles）。編碼的排序是未定義的因而 **必須沒有（SHALL NOT）** 被用來推斷意義。一般來說，最多只有一個編碼值（coding values）會被標記為UserSelected = true。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].extension ^short = "擴充的資料項目"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].extension ^definition = "可用於表示不屬於此資料項目基本定義的附加資訊。為了擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何污名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].system ^short = "專門術語系統（terminology system）的識別"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].system ^definition = "定義代碼中符號意義的代碼系統識別"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].system ^requirements = "需要明確說明符號定義的來源"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].system ^comment = "URI可以是一個OID（urn:oid:...）或一個UUID（urn:uuid:...）；OID和UUID **必須（SHALL）** 參照HL7 OID註冊中心；否則，URI應該來自HL7的FHIR定義的特殊URI列表，或者它應該參照一些明確建立的系统定義。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].version ^short = "系統的版本—如果相關的話"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].version ^definition = "選擇此代碼時使用的代碼系統版本；請注意，一個維護良好的代碼系統不需要版本報告，因為代碼的意義在不同系統版本中是一致的；然而，不能始終保證這點，當不能保證意義一致時， **必須（SHALL）** 將版本資訊也一併作交換。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].version ^comment = "如果專門術語沒有明確定義應該使用什麼字串來識別代碼系統的版本，建議使用版本正式發布的日期（用FHIR日期格式表示）作為版本日期。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].code ^short = "系統定義的語法之符號"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].code ^definition = "系統定義的語法之符號；符號可能是一個預先定義的代碼，也可能是代碼系統定義的語法中的表達式（如後組合配對／後組合式）。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].code ^requirements = "需要參照系統中的一個特定代碼"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].display ^short = "由系統定義的表示法"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].display ^definition = "遵循系統的規則以呈現代碼含義的表示法"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].display ^requirements = "需要能為不了解此系統的讀者呈現可讀的代碼含義"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].userSelected ^short = "此編碼是否由使用者直接選擇？"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].userSelected ^definition = "表明此編碼是由使用者直接選擇，例如：從可用項目（代碼或顯示名稱）的清單中選擇。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].userSelected ^requirements = "已被確定為一個臨床安全準則—此確切的系統／代碼對(code pair)是被明確選擇的，而不是由系統根據一些規則或是程式語言處理判斷。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode3].userSelected ^comment = "在一系列備選方案中，直接選擇的代碼是新翻譯最合適的起點；關於「直接選擇」的確切意義，存在模糊不清之處，可能需要貿易夥伴的同意，以更完整澄清此資料項目的使用及其後果。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5] ^short = "由專門術語系統（terminology system）定義的代碼"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5] ^binding.description = "應填入所綁定值集中的其中一個代碼"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5] ^definition = "由專門術語系統（terminology system）所定義之代碼的參照"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5] ^requirements = "允許代碼系統中的替代編碼，以及翻譯到其他編碼系統。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5] ^comment = "代碼可以在列舉清單（enumerations）或代碼清單（code lists）中非常隨意地定義，直至有非常正式的定義，例如：SNOMED CT—更多資訊見HL7 v3核心原則（Core Principles）。編碼的排序是未定義的因而 **必須沒有（SHALL NOT）** 被用來推斷意義。一般來說，最多只有一個編碼值（coding values）會被標記為UserSelected = true。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].extension ^short = "擴充的資料項目"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].extension ^definition = "可用於表示不屬於此資料項目基本定義的附加資訊。為了擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何污名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].system ^short = "專門術語系統（terminology system）的識別"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].system ^definition = "定義代碼中符號意義的代碼系統識別"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].system ^requirements = "需要明確說明符號定義的來源"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].system ^comment = "URI可以是一個OID（urn:oid:...）或一個UUID（urn:uuid:...）；OID和UUID **必須（SHALL）** 參照HL7 OID註冊中心；否則，URI應該來自HL7的FHIR定義的特殊URI列表，或者它應該參照一些明確建立的系统定義。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].version ^short = "系統的版本—如果相關的話"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].version ^definition = "選擇此代碼時使用的代碼系統版本；請注意，一個維護良好的代碼系統不需要版本報告，因為代碼的意義在不同系統版本中是一致的；然而，不能始終保證這點，當不能保證意義一致時， **必須（SHALL）** 將版本資訊也一併作交換。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].version ^comment = "如果專門術語沒有明確定義應該使用什麼字串來識別代碼系統的版本，建議使用版本正式發布的日期（用FHIR日期格式表示）作為版本日期。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].code ^short = "系統定義的語法之符號"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].code ^definition = "系統定義的語法之符號；符號可能是一個預先定義的代碼，也可能是代碼系統定義的語法中的表達式（如後組合配對／後組合式）。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].code ^requirements = "需要參照系統中的一個特定代碼"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].display ^short = "由系統定義的表示法"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].display ^definition = "遵循系統的規則以呈現代碼含義的表示法"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].display ^requirements = "需要能為不了解此系統的讀者呈現可讀的代碼含義"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].userSelected ^short = "此編碼是否由使用者直接選擇？"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].userSelected ^definition = "表明此編碼是由使用者直接選擇，例如：從可用項目（代碼或顯示名稱）的清單中選擇。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].userSelected ^requirements = "已被確定為一個臨床安全準則—此確切的系統／代碼對(code pair)是被明確選擇的，而不是由系統根據一些規則或是程式語言處理判斷。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode5].userSelected ^comment = "在一系列備選方案中，直接選擇的代碼是新翻譯最合適的起點；關於「直接選擇」的確切意義，存在模糊不清之處，可能需要貿易夥伴的同意，以更完整澄清此資料項目的使用及其後果。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6] ^short = "由專門術語系統（terminology system）定義的代碼"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6] ^binding.description = "應填入所綁定值集中的其中一個代碼"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6] ^definition = "由專門術語系統（terminology system）所定義之代碼的參照"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6] ^requirements = "允許代碼系統中的替代編碼，以及翻譯到其他編碼系統。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6] ^comment = "代碼可以在列舉清單（enumerations）或代碼清單（code lists）中非常隨意地定義，直至有非常正式的定義，例如：SNOMED CT—更多資訊見HL7 v3核心原則（Core Principles）。編碼的排序是未定義的因而 **必須沒有（SHALL NOT）** 被用來推斷意義。一般來說，最多只有一個編碼值（coding values）會被標記為UserSelected = true。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].extension ^short = "擴充的資料項目"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].extension ^definition = "可用於表示不屬於此資料項目基本定義的附加資訊。為了擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何污名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].system ^short = "專門術語系統（terminology system）的識別"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].system ^definition = "定義代碼中符號意義的代碼系統識別"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].system ^requirements = "需要明確說明符號定義的來源"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].system ^comment = "URI可以是一個OID（urn:oid:...）或一個UUID（urn:uuid:...）；OID和UUID **必須（SHALL）** 參照HL7 OID註冊中心；否則，URI應該來自HL7的FHIR定義的特殊URI列表，或者它應該參照一些明確建立的系统定義。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].version ^short = "系統的版本—如果相關的話"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].version ^definition = "選擇此代碼時使用的代碼系統版本；請注意，一個維護良好的代碼系統不需要版本報告，因為代碼的意義在不同系統版本中是一致的；然而，不能始終保證這點，當不能保證意義一致時， **必須（SHALL）** 將版本資訊也一併作交換。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].version ^comment = "如果專門術語沒有明確定義應該使用什麼字串來識別代碼系統的版本，建議使用版本正式發布的日期（用FHIR日期格式表示）作為版本日期。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].code ^short = "系統定義的語法之符號"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].code ^definition = "系統定義的語法之符號；符號可能是一個預先定義的代碼，也可能是代碼系統定義的語法中的表達式（如後組合配對／後組合式）。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].code ^requirements = "需要參照系統中的一個特定代碼"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].display ^short = "由系統定義的表示法"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].display ^definition = "遵循系統的規則以呈現代碼含義的表示法"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].display ^requirements = "需要能為不了解此系統的讀者呈現可讀的代碼含義"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].userSelected ^short = "此編碼是否由使用者直接選擇？"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].userSelected ^definition = "表明此編碼是由使用者直接選擇，例如：從可用項目（代碼或顯示名稱）的清單中選擇。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].userSelected ^requirements = "已被確定為一個臨床安全準則—此確切的系統／代碼對(code pair)是被明確選擇的，而不是由系統根據一些規則或是程式語言處理判斷。"
* postalCode.extension[PostalCode].valueCodeableConcept.coding[PostalCode6].userSelected ^comment = "在一系列備選方案中，直接選擇的代碼是新翻譯最合適的起點；關於「直接選擇」的確切意義，存在模糊不清之處，可能需要貿易夥伴的同意，以更完整澄清此資料項目的使用及其後果。"
* postalCode.extension[PostalCode].valueCodeableConcept.text ^short = "概念的文字表示法"
* postalCode.extension[PostalCode].valueCodeableConcept.text ^definition = "輸入資料的使用者所見／所選／所說的人類可讀文字表述，和（或）其代表使用者的預期含義。"
* postalCode.extension[PostalCode].valueCodeableConcept.text ^requirements = "專門術語中的代碼並不總是能捕捉人類使用的細微差別的正確意義，或者根本就沒有合適的代碼；這些情況下，文字表述被用來捕捉來源的全部意義。"
* postalCode.extension[PostalCode].valueCodeableConcept.text ^comment = "很多時候，此文字表述與其中一個代碼的顯示名稱相同。"
* postalCode.value ^short = "郵遞區號"
* postalCode.value ^definition = "實際值"
* country ^short = "國家（例如：ISO 3166的2個或3個字母代碼）。"
* country ^definition = "國家—通常被理解為或普遍被接受的一個國家。"
* country ^comment = "可用ISO 3166的3個字母代碼來代替人類可讀的國家名"
* period ^short = "此地址曾經／正在使用的時間區間"
* period ^definition = "此地址曾經／正在使用的時間區間"
* period ^requirements = "允許將地址依時間排放"



---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/profiles/profiles_allergyintolerance.fsh

Profile: TWCoreAllergyIntolerance
Parent: AllergyIntolerance
Id: AllergyIntolerance-twcore
Title: "TW Core AllergyIntolerance"
Description: "此臺灣核心-過敏或不耐症（TW Core AllergyIntolerance） Profile說明本IG如何進一步定義FHIR的AllergyIntolerance Resource以呈現過敏與不耐症的詳細資料。"
* ^version = "0.3.2"
* language ^example.label = "Value"
* language ^example.valueString = "zh-TW"
* clinicalStatus and verificationStatus and code and patient and reaction and reaction.manifestation and recordedDate and recorder and note MS
* patient only Reference(TWCorePatient)
* encounter only Reference(TWCoreEncounter)
* recorder only Reference(TWCorePractitioner or TWCorePractitionerRole or TWCorePatient or TWCoreRelatedPerson)
* asserter only Reference(TWCorePatient or TWCoreRelatedPerson or TWCorePractitioner or TWCorePractitionerRole)
* clinicalStatus only CodeableConceptTW 
* verificationStatus only CodeableConceptTW 
* code only CodeableConceptTW 
* reaction.substance only CodeableConceptTW 
* reaction.manifestation only CodeableConceptTW 
* reaction.exposureRoute only CodeableConceptTW 
* code 1.. 
* code from AllergyIntoleranceSubstance/Product,ConditionAndNegationCodes (extensible)
* reaction.substance from http://hl7.org/fhir/ValueSet/substance-code (extensible)
* reaction.manifestation from SNOMEDCTClinicalFindings (extensible)
* reaction.exposureRoute from http://hl7.org/fhir/ValueSet/route-codes (extensible)

* . ^short = "過敏或不耐症（通常指：對某種物質有不良反應的風險）"
* . ^definition = "可能對個人產生有害或不希望的生理反應的風險，這種反應是與暴露於某種物質相關的，並且對每個人來說都是獨特的。"
//* . ^requirements = "記錄對個人在未來接觸特定物質或物質類別時，可能會產生不良反應的傾向或風險的臨床評估。"
* . ^comment = "物質包括但不限於：適合個人的劑量正確使用的治療性物質、食品、來自植物或動物的材質、或昆蟲叮咬所釋放的毒液。"

* id ^short = "不重複的ID用以識別儲存在特定FHIR Server中的AllergyIntolerance紀錄，通常又稱為邏輯性ID。"
* id ^definition = "resource的邏輯ID，在resource的URL中使用。一旦指定，這個值永遠不會改變。"
* id ^comment = "一個resource使用新增操作（create operation）提交給伺服器時，此resource沒有id，它的id在resource被創建後由伺器分配/指定。"
* meta ^short = "此AllergyIntolerance Resource的metadata"
* meta ^definition = "關於resource的metadata。這是由基礎建設維護的內容。內容的更改可能並不總是與resource的版本更改相關聯。"
* implicitRules ^short = "創建此內容所依據的一組規則"
* implicitRules ^definition = "構建resource時遵循的一系列規則的參照，在處理內容時必須理解這些規則。通常這是對IG所定義之特殊規則及其他profiles的參照。"
* implicitRules ^comment = "宣告這套規則限制了內容只能被有限的交易夥伴所理解。這從本質上限制了資料的長期有用性。然而，現有的健康生態體系高度分裂，還沒有準備好以普遍可計算的方式定義、收集和交換資料。只要有可能，實作者和/或規範編寫者應該避免使用這個資料項目。通常在使用時，此URL是對IG的參照，此IG將這些特殊規則與其他profiles、value sets等一起定義為其敘述的一部分。"
* language ^short = "用以表述AllergyIntolerance Resource內容的語言。"
* language ^definition = "編寫此resource的語言"
* language ^binding.description = "人類語言；鼓勵使用CommonLanguages代碼表中的代碼，但不強制一定要使用此代碼表，你也可使用其他代碼表的代碼或單純以文字表示。"
* language ^comment = "提供語言是為了支援索引和可存取性（通常，文字表述轉語音等服務使用此語言標籤）。html lanuage tag適用於此敘述。resource上的語言標籤可用於指定從resource中的資料所產成的其他表述之語言。不是所有的內容都必須使用此語言。不應該假定Resource.language自動適用於敘述。如果指定語言，它也應該被指定在html中的div資料項目（關於xml:lang和html lang屬性之間的關係，見HTML5中的規則）。"
* text ^short = "AllergyIntolerance Resource之內容摘要以供人閱讀"
* text ^definition = "人可讀的敘述，包含resource的摘要，可用於向人表述resource的內容。敘述不需要對所有的結構化資料進行編碼，但需要包含足夠的細節使人在閱讀敘述時理解「臨床安全性」。resource定義有哪些內容應該在敘述中表示，以確保臨床安全。"
* text ^comment = "內嵌（contained）的resource沒有敘述，非內嵌（contained）的resource則 **建議應該（SHOULD）** 有敘述。有時resource可能只有文字表述，很少或沒有額外的結構化資料（只要滿足所有minOccurs=1的資料項目）。這可能出現在舊系統的資料，當資訊以 「文字表述區塊（text blob） 」的形式被取得，或者文字表述是原始輸入或說明，而編碼資訊稍後再添加。"
/* contained ^short = "內嵌的（contained）、行內的Resources"
* contained ^definition = "這些resource內嵌（contains）的resource不會另外存於任何FHIR伺服器，意即它們無法在任何FHIR伺服器中被找到，也無法有自己獨立的資料異動／交易（transaction）範圍。"
* contained ^comment = "當內容可以從任何FHIR伺服器找到時，不應該以內嵌（contained）resource的方式呈現，因為一旦失去識別，再次恢復它是非常困難的（並且取決於情境）。內嵌（contained）的resource可在它們的meta資料項目中表述profiles和tag，但不應該有安全標號（security labels）。"
* extension ^short = "擴充的資料項目"
* extension ^definition = "可用於表示不屬於此resource基本定義的額外資訊。為了擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，**必須（SHALL）** 滿足一系列要求。"
* extension ^comment = "任何應用程式、專案或標準使用擴充時，都不應該帶有任何負面的聯想。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* modifierExtension ^short = "此擴充的資料項目可能會完全修正或改變其他資料項目的意涵，需特別留意。"
* modifierExtension ^definition = "可以用來表示不屬於此resource的基本定義的額外資訊，並修改包含它所內嵌（contained）的資料項目的理解和/或對包含資料項目之後續使用的理解。通常修飾用的資料項目提供否定或限定的資訊。為了使擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。雖然任何實作者都可以定義一個擴充，但在定義擴充時 **必須（SHALL）** 滿足一組要求。處理resource的應用程式需要檢查修飾用的擴充資料項目。  
修飾用的擴充資料項目 **必須沒有（SHALL NOT）** 改變resource或DomainResource上任何資料項目的含義（包括不能改變modifierExtension本身的含義）。"
* modifierExtension ^requirements = "修飾用的資料項目擴充允許將不能安全地忽略的擴充，與絕大多數可以安全地忽略的擴充明確區分開來。這樣做有助於促進可互操作性，因為無需禁止實作者使用擴充，想要瞭解更多資訊，請參見[修飾用的資料項目擴充之定義]（http://hl7.org/fhir/R4/extensibility.html#modifierExtension）。"
* modifierExtension ^comment = "任何應用程式、專案或標準使用擴充時，都不應該帶有任何負面的聯想。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"*/

* identifier ^short = "過敏或不耐症之外部識別碼"
* identifier ^definition = "由執行者或其他系統指定給這個AllergyIntolerance的業務識別碼，隨著resource更新和從伺服器到伺服器的傳送，這些識別碼保持不變。"
* identifier ^requirements = "允許各參與系統按照一致的方式，在不同伺服器之間確認並識別 AllergyIntolerance。"
* identifier ^comment = "這是過敏或不耐症紀錄的業務識別碼，不是一個 resource 識別碼（請參見討論小節）。最好的做法是該識別碼只出現在單一個resource實例上，但是實務上有時會要求具有相同識別碼的多個resource實例共存，這些 resources 實例甚至可能屬於不同的resource類型。例如：多個 Patient及一個Person resource實例可能共用同一個社會保險碼(此處是指美國民眾會有唯一可識別的社會保險碼)。"

* clinicalStatus ^short = "active | inactive | resolved ，過敏或不耐症的臨床狀態。"
* clinicalStatus ^binding.description = "應填入所綁定值集中的其中一個代碼。"
* clinicalStatus ^definition = "過敏或不耐症的臨床狀態"
* clinicalStatus ^comment = "如果 clincalStatus 缺少資料，請查閱討論小節。其資料類型是CodeableConcept，這是因為clinicalStatus涉及到一些臨床判斷，可能需要的具體性超過FHIR值集所要求的範圍。例如：SNOMED代碼可能提供額外的的具體性。"

* verificationStatus ^short = "unconfirmed | confirmed | refuted | entered-in-error ，一個人對特定物質產生反應的可能性或風險有多確定的陳述。"
* verificationStatus ^binding.description = "應填入所綁定值集中的其中一個代碼。"
* verificationStatus ^definition = "一個人對某已識別物質（包括醫藥產品）產生反應的可能性或風險有多確定的陳述"

* type ^short = "allergy | intolerance - 根本原因或運作機制（如果知道）。"
* type ^binding.description = "確定反應風險的基本生理機制；應填入所綁定值集中的其中一個代碼。"
* type ^definition = "為什麼某人對特定物質（如藥物或食物）會有反應的生理根本原因"
* type ^comment = "過敏反應通常是我們身體免疫系統的一種反應，它被認為可能預示著未來有更嚴重的健康風險。然而，現代醫學研究顯示，有些過去被認為是免疫反應的情況實際上可能並不是，但仍然可能對生命造成危害。有時候，醫生難以確定一個特定反應的機制是免疫相關還是非免疫相關的。此外，「過敏」這個詞經常被廣泛地使用，並且可能與「不耐症」這個詞的使用有所重疊。在實際應用中，這兩個概念的界限可能不太清晰或不容易理解。儘管如此，醫療紀錄中仍然包含了有關過敏反應的資訊，因為許多既有的醫療系統都已經收集了這些資料。免疫學檢測可以提供一些證據幫助確定反應的基礎和引起反應的物質，但這些檢測並不總是百分之百準確，無法100％確定對特定物質的敏感性。如果不清楚反應是否由過敏引起還是由不耐症引起，那麼在醫療紀錄中最好不要具體指定反應的類型，即可忽略及不填寫此資料項目。"

* category ^short = "food | medication | environment | biologic"
* category ^definition = "被識別的物質的類別"
* category ^comment = "這個資料資料項目被包括在內，因為它目前正在一些臨床系統中被採集。這個資料可以從使用編碼系統的物質中得到，在這種情況下實際上是多餘的。當按類別查詢時，考慮沒有類別的AllergyIntoleranceresource的影響。例如，當查詢類別=藥品時，沒有類別價值的藥品過敏將不會被返回。關於如何用:缺失修飾符查詢類別以獲得沒有類別的過敏，請參考查詢的更多資訊。此外，類別應謹慎使用，因為類別可能是基於寄件者的主觀因素。"
* category ^binding.description = "確定的物質的類別；應填入所綁定值集中的其中一個代碼。"

* criticality ^short = "low | high | unable-to-assess"
* criticality ^definition = "對已識別物質的反應的潛在臨床危害程度，或稱嚴重性估計。"
* criticality ^comment = "對於任何對可能引發不良反應的傾向，預設的危險程度應該設定為「低風險」，這表示 **至少相對不建議** 有意或自願接觸這種物質。如果醫生識別出對更嚴重或可能危及生命的反應，如過敏性休克的傾向，則將其標記為「高風險」，這表示 **絕對不建議** 有意或自願接觸這種物質。如果缺少這個資料項目，則表示危險程度未知（雖然在其他地方可能已知）。取得疾病層次(condition level)危險性(criticality))的現有系統實際上是在表示危險性的概念，而在反應層次(reaction level)記錄的嚴重性(severity)表示真正的反應嚴重性。現有系統同時記錄疾病危險性和反應嚴重性，可能使用「嚴重性(severity)」一詞來表示兩者。危險性是未來可能出現的最糟糕情況（即不考慮具體情境），而嚴重性則依賴於特定情境。"
* criticality ^binding.description = "對已識別物質的反應的潛在臨床危害程度，或稱嚴重性估計；應填入所綁定值集中的其中一個代碼。"

* code ^short = "表明此過敏或不耐症的代碼"
* code ^definition = "此資料項目是用來代碼化表示有關過敏或不耐症的資訊。它可以表示對某種物質或藥物產品引發不良反應風險的代碼（例如：「乳膠」），也可以表示有關過敏或不耐症的代碼（例如：「乳膠過敏」），或者是表示對特定物質或類別的否定或排除情況的代碼（例如：「無乳膠過敏」），還可以表示一般性的否定性聲明（例如：「無已知過敏」，「無已知藥品過敏」）。需要注意的是：特定反應的物質可能不同於被認為引發風險的物質，但它們之間必須是一致的，在處理這些資訊時，只處理「code」而忽略「reaction.substance」在臨床上必須在是安全的。如果接收系統無法確認AllergyIntolerance.reaction.substance是否符合AllergyIntolerance.code的語義範圍，則應該忽略AllergyIntolerance.reaction.substance。"
* code ^comment = "建議在填寫過敏或不耐症相關資料時，儘量使用專業術語。常用的專門術語包括RxNorm、SNOMED CT、DM+D、NDFRT、ICD-9、IDC-10、UNII和ATC等。如果找不到合適的專業術語，則可以用文字表述。文字表述還可以提供更多詳細資訊。

當我們為「code」資料項目指定特定物質或產品代碼時，通常意味著該病人對這種物質或產品有過敏或不耐受反應。在SNOMED CT的過敏模型中，這些物質或產品被視為「過敏物質(Causative agent)」。

另外，還有一個名為「substanceExposureRisk」的擴充資料項目，它比「code」資料項目提供更多靈活性，可以用來描述對特定物質或產品的過敏或不耐受反應，無論是正面還是負面。這個擴充資料項目特別有用於表達「沒有已知過敏」或「沒有不良反應風險」的情況，即使對於那些沒有預先確定「無過敏」概念的物質或產品也適用。如果使用了「substanceExposureRisk」擴充資料項目，則應該省略AllergyIntolerance.code資料項目。"
* code ^binding.description = "應填入所綁定值集中適合的代碼，確定無適合的代碼才可以使用其他值集的代碼來表示。"

* patient ^short = "誰有此過敏或不耐受？"
* patient ^definition = "患有過敏或不耐症的病人"

* encounter ^short = "過敏或不耐症被確認時的就醫事件(Encounter)"
* encounter ^definition = "過敏症或不耐症被確認的就醫事件(Encounter)"

* onset[x] ^short = "過敏或不耐症被識別的時間"
* onset[x] ^definition = "過敏或不耐症被識別的估計或實際日期、日期時間或年齡。"

* recordedDate ^short = "resource實例的第一個版本被記錄的日期"
* recordedDate ^definition = "recordedDate指的是這個特定的過敏不耐症紀錄在系統中建立的日期，通常是由系統產生的日期。"

* recorder ^short = "誰記錄了過敏或不耐受"
* recorder ^definition = "記錄此紀錄並對其內容負責的個人"

* asserter ^short = "關於過敏的資訊來源"
* asserter ^definition = "有關過敏紀錄的資訊來源"
* asserter ^comment = "記錄者要對內容負有責任，但可以參照他們獲得資訊的來源。"

* lastOccurrence ^short = "最後一次已知反應發生的日期（/時間）"
* lastOccurrence ^definition = "表示最後已知的過敏反應事件發生的日期和/或時間。"
* lastOccurrence ^comment = "這個日期可能會與某個反應開始日期重複。如果需要以文字表述最後發生的日期，例如：「在童年時」或「10年前」，應該使用 Comment 資料項目。"

* note ^short = "其他欄位中沒有記錄的額外文字陳述"
* note ^definition = "有關不良反應的可能性，這些資訊是未被記錄在其他資料項目中的補充敘述。"
* note ^comment = "例如：包括標記為「高風險」的原因，以及與將來接觸或使用該物質相關的指示，比如在重症照護病房內使用或在使用時需要皮質類固醇保護。這些註釋應該與過敏或不耐症作為一般狀況有關，而不是特定事件。對於特定事件的描述和註釋，請使用 AllergyIntolerance.event.description 和 AllergyIntolerance.event.notes。"

* reaction ^short = "暴露於此過敏或不耐症物質的不良反應"
* reaction ^definition = "關於每次接觸特定物質所引起的不良反應事件的細節"

/*
* reaction.id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* reaction.id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* reaction.extension ^short = "擴充的資料項目"
* reaction.extension ^definition = "擴充的資料項目"
* reaction.extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* reaction.modifierExtension ^short = "此擴充的資料項目可能會完全修正或改變其他資料項目的意涵，需特別留意。"
* reaction.modifierExtension ^definition = "可以用來表示不屬於資料項目的基本定義的附加資訊，並且修改對它所內嵌（contained）的資料項目的理解和（或）對包含資料項目之後續使用的理解。通常，修飾用的資料項目提供否定或限定。為了使擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。處理resource的應用程式被要求檢查修飾用的擴充資料項目。 
 修飾用的擴充資料項目 **必須沒有（SHALL NOT）** 改變resource或DomainResource上任何資料項目的含義（包括不能改變modifierExtension本身的含義）。"
* reaction.modifierExtension ^requirements = "修飾用的資料項目擴充將不能安全地忽略的擴充與絕大多數可以安全地忽略的擴充明確區分開來。透過消除禁止實作者擴充存在的需求來促進可互通性。更多訊息，請參見[修飾用的資料項目擴充之定義](http://hl7.org/fhir/R4/extensibility.html#modifierExtension)。"
* reaction.modifierExtension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
*/

* reaction.substance ^short = "被認為是事件原因的特定物質或醫藥產品"
* reaction.substance ^binding.description = "應填入所綁定值集中適合的代碼，確定無適合的代碼才可以使用其他值集的代碼來表示。"
* reaction.substance ^definition = "確定與不良反應事件有關的特定物質（或藥品）。注意：對於特定反應而言，所涉及的物質可能與被認為是風險原因的物質不同，但它必須與之一致。例如：它可能是一種更具體的物質（例如：品牌藥物）或包含被確認的物質的複合產品。在臨床上，僅處理「code」而忽略「reaction.substance」必須是安全的。如果接收系統無法確定 AllergyIntolerance.reaction.substance 是否在 AllergyIntolerance.code 的語義範圍內，則接收系統應忽略 AllergyIntolerance.reaction.substance。"
* reaction.substance ^comment = "表現形式可以用一個詞、短語或簡短的描述來表達。例如：噁心、皮疹或無反應。在可能的情況下，最好用專門術語對表現形式進行編碼。這裡輸入的值可作為不良反應清單的一部分顯示在應用螢幕上，正如英國國家醫療服務體系CUI 指南中所建議的那樣，常用的專門術語包括，但不限於SNOMED CT或ICD10。"

* reaction.manifestation ^short = "與此事件相關的臨床症狀/體徵"
* reaction.manifestation ^binding.description = "應填入所綁定值集中適合的代碼，確定無適合的代碼才可以使用其他值集的代碼來表示。"
* reaction.manifestation ^definition = "觀察到的或與不良反應事件相關的臨床症狀和/或體徵"
* reaction.manifestation ^comment = "表現形式可以用一個詞、短語或簡短的描述來表達。例如：噁心、皮疹或無反應。在可能的情況下，最好用術語對表現形式進行編碼。這裡輸入的數值可作為不良反應清單的一部分顯示在應用螢幕上，正如英國國家醫療服務體系CUI指南中所建議的那樣。常用的術語包括，但不限於SNOMED CT或ICD10。"

* reaction.description ^short = "對整個活動的描述"
* reaction.description ^definition = "關於整個反應的文字描述，如果必要則包括表現形式的細節。"
* reaction.description ^comment = "使用描述來提供發生反應的特定事件的任何細節，如情況、反應細節、之前/之後發生了什麼。與事件有關的資訊，但不描述特定的照護應在comment資料項目中記錄。例如：病人在四歲時因鏈球菌感染被注射青黴素，隨後出現嚴重的蕁麻疹。"

* reaction.onset ^short = "症狀顯現的日期（/時間）"
* reaction.onset ^definition = "記錄反應開始的日期和/或時間"

* reaction.severity ^short = "mild | moderate | severe"
* reaction.severity  ^binding.description = "整個事件的程度，應填入所綁定值集中的其中一個代碼。"
* reaction.severity ^definition = "對整個反應事件的臨床評估，可能會考慮多個不同的表現，以確定反應的嚴重程度。"
* reaction.severity ^comment = "這種評估是非常主觀的。可能有一些特定的實務領域已經應用了客觀的評分標準，客觀的評分標準可以作為擴充資料項目包含在這個模型中。"

* reaction.exposureRoute ^short = "此對象如何接觸到該物質"
* reaction.exposureRoute  ^binding.description = "應填入所綁定值集中適合的代碼，確定無適合的代碼才可以使用其他值集的代碼來表示。"
* reaction.exposureRoute ^definition = "確認此對象是透過哪種途徑接觸到該物質"
* reaction.exposureRoute ^comment = "應盡可能使用專門術語對接觸途徑進行編碼。"

* reaction.note ^short = "其他資料項目未記錄之關於事件的文字表述"
* reaction.note ^definition = "其他關於不良反應事件的文字表述，這些資訊未在其他資料項目中記錄。"
* reaction.note ^comment = "使用此資料項目記錄與特定事件間接相關的資訊，但在其他資料項目未記錄的資訊。例如：如果臨床紀錄不再可用，則可根據病人母親提供的資訊來紀錄，儘管病人的母親已經過世。"




---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/profiles/profiles_bundle_document.fsh

Profile: TWCoreBundleDocument
Parent: TWCoreBundle
Id: Bundle-document-twcore
Title: "TW Core Bundle Document"
Description: "此臺灣核心-資料交換基本單位-文件（TW Core Bundle Document） Profile說明本IG如何進一步定義臺灣核心-資料交換基本單位(TW Core Bundle） Profile以呈現 Bundle 文件 的詳細資料。"
* ^version = "0.3.2"
* language ^example.label = "Value"
* language ^example.valueString = "zh-TW"
* type = #document
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry contains
	TWCoreComposition 1..1 MS
* entry[TWCoreComposition].resource only TWCoreComposition

* identifier 1..
* timestamp 1..

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/profiles/profiles_bundle_message.fsh

Profile: TWCoreBundleMessage
Parent: TWCoreBundle
Id: Bundle-message-twcore
Title: "TW Core Bundle Message"
Description: "此臺灣核心-資料交換基本單位-訊息（TW Core Bundle Message） Profile說明本IG如何進一步定義臺灣核心-資料交換基本單位(TW Core Bundle） Profile以呈現 Bundle Message 的詳細資料。"
* ^version = "0.3.2"
* language ^example.label = "Value"
* language ^example.valueString = "zh-TW"
* type = #message
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry contains
	TWCoreMessageHeader 1..1 MS
* entry[TWCoreMessageHeader].resource only TWCoreMessageHeader

* identifier 1..
* timestamp 1..

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/profiles/profiles_bundle.fsh

Profile: TWCoreBundle
Parent: Bundle
Id: Bundle-twcore
Title: "TW Core Bundle"
Description: "此臺灣核心-資料交換基本單位（TW Core Bundle） Profile說明本IG如何進一步定義FHIR的Bundle Resource以呈現資料交換基本單位的詳細資料。"
* ^version = "0.3.2"
* language ^example.label = "Value"
* language ^example.valueString = "zh-TW"
* identifier and timestamp MS 

* . ^short = "包含resourceBundle"
* . ^definition = "用於存於一組Resources的結構或物件"
* id ^short = "不重複的ID用以識別儲存在特定FHIR Server中的Bundle紀錄，通常又稱為邏輯性ID。"
* id ^definition = "resource的邏輯ID，在resource的URL中使用。一旦指定，這個值永遠不會改變。"
* id ^comment = "一個resource使用新增操作（create operation）提交給伺服器時，此resource沒有id，它的id在resource被創建後由伺器分配/指定。"
* meta ^short = "此Bundle Resource的metadata"
* meta ^definition = "關於resource的metadata。這是由基礎建設維護的內容。內容的更改可能並不總是與resource的版本更改相關聯。"
* implicitRules ^short = "創建此內容所依據的一組規則"
* implicitRules ^definition = "構建resource時遵循的一系列規則的參照，在處理內容時必須理解這些規則。通常這是對IG所定義之特殊規則及其他profiles的參照。"
* implicitRules ^comment = "宣告這套規則限制了內容只能被有限的交易夥伴所理解。這從本質上限制了資料的長期有用性。然而，現有的健康生態體系高度分裂，還沒有準備好以普遍可計算的方式定義、收集和交換資料。只要有可能，實作者和/或規範編寫者應該避免使用這個資料項目。通常在使用時，此URL是對IG的參照，此IG將這些特殊規則與其他profiles、value sets等一起定義為其敘述的一部分。"
* language ^short = "用以表述Bundle Resource內容的語言。"
* language ^definition = "編寫此resource的語言"
* language ^binding.description = "人類語言；鼓勵使用CommonLanguages代碼表中的代碼，但不強制一定要使用此代碼表，你也可使用其他代碼表的代碼或單純以文字表示。"
* language ^comment = "提供語言是為了支援索引和可存取性（通常，文字表述轉語音等服務使用此語言標籤）。html lanuage tag適用於此敘述。resource上的語言標籤可用於指定從resource中的資料所產成的其他表述之語言。不是所有的內容都必須使用此語言。不應該假定Resource.language自動適用於敘述。如果指定語言，它也應該被指定在html中的div資料項目（關於xml:lang和html lang屬性之間的關係，見HTML5中的規則）。"

* identifier ^short = "一組Resources的資料交換基本單位（Bundle）的識別碼。"
* identifier ^definition = "Bundle的永久識別碼，識別碼不會因為Bundle從一個伺服器複製到另一個伺服器而改變。。"
* identifier ^comment = "永久的識別通常只對Document、Message和Collection的批次處理是重要。它通常不會被填入到searh和history的結果中，伺服器在處理batches和transactions時會忽略Bundle.identifier。但對於Documents的identifier **必須（SHALL）** 被填入，其為全球唯一的識別碼。"

* type ^short = "document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection"
* type ^binding.description = "Bundle類型；應填入所綁定值集中的其中一個代碼。"
* type ^definition = "表明這個Bundle的目的-期望如何使用。"
* type ^comment = "Bundle也可以用於其他目的（例如，document可以作為transaction被接受）。這主要是為了給某些Bundle類型制定特定的規則。"

* timestamp ^short = "組成Bundle的時間。"
* timestamp ^definition = "Bundle組裝的日期/時間 - 也就是resources被放入Bundle的時間。"
* timestamp ^comment = "對很多Bundle而言，時間戳記同等於.meta.lastUpdated，因為它們不會被儲存（例如：查詢結果）。當一個Bundl被放置在一個持久化存儲中（a persistent store）時，.meta.lastUpdated通常會被伺服器改變。當Bundle是一個Message時，中介軟體（即使沒有存儲）**建議應該（SHOULD）**更新.meta.lastUpdated。.timestamp用於追踪Bundle的原始時間，並且**建議應該（SHOULD）**被填入。

使用方法：
* document : 文件的創建日期。注意：composition的創建可能早於Bundle的創鍵，或者composition會與多個文件相關聯。composition的編輯日期可能早於Bundle的組成時間。
* mssage：訊息內容被組成的日期。這個日期不會被中介軟體引擎改變，除非他們增加了額外的資料，改變了訊息的時間含義。
* history : 歷史紀錄被組成的日期。這個時間將被用於查詢_since（自此）時間後的後續更新紀錄。
* searchset : 查詢結果集：是指查詢結果組合起來的時間。要注意的是，不同的頁面**可能（MAY）**會有不同的時間標記，但不是必須的。即使時間標記不同，也不代表隨後的頁面會顯示或包含從最初查詢後所做的變更。

transaction | transaction-response | batch | batch-response | collection : 沒有特別指定的含義。
時間戳記的值應該比Bundle中的resources的 lastUpdated 和其他時間戳記還要新，而且應該等於或早於Bundle本身的 .meta.lastUpdated 相同或更早。"

* total ^short = "查詢時符合條件的總筆數"
* total ^definition = "如果有一組查詢結果相符，這個數字代表所有頁面中 type「match」條目的總數。這個總數不包括search.mode=「include」 或 「outcome」的查詢結果，也不表示Bundle內全部條目的數量。"
* total ^comment = "只在Bundle是查詢結果集時使用。這個總數不包括像是OperationOutcome和Bundle中包含的resources等，只計算匹配的resources的總數。"

* link ^short = "與此Bundle相關的連結"
* link ^definition = "一系列連結，為這個Bundle提供上下文。"
* link ^comment = "Bundle.link和Bundle.entry.link的設計是為了在使用Bundle時（例如實現HATEOAS時）提供更多的上下文資訊。

如果entry中的resource是直接被讀取的，那麼Bundle.entry.link就對應於HTTP header中的連結。

雖然這個規範對於查詢和分頁有一些Bundle.link的特定使用方式，但對於Bundle.entry.link沒有特定的使用方式，也沒有在transaction過程中定義其功能 - 它的具體意義取決於實際的應用方式。"

/*
* link.id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* link.id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* link.extension ^short = "擴充的資料項目"
* link.extension ^definition = "擴充的資料項目"
* link.extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* link.modifierExtension ^short = "此擴充的資料項目可能會完全修正或改變其他資料項目的意涵，需特別留意。"
* link.modifierExtension ^definition = "可以用來表示不屬於資料項目的基本定義的附加資訊，並且修改對它所內嵌（contained）的資料項目的理解和（或）對包含資料項目之後續使用的理解。通常，修飾用的資料項目提供否定或限定。為了使擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。處理resource的應用程式被要求檢查修飾用的擴充資料項目。 
 修飾用的擴充資料項目 **必須沒有（SHALL NOT）** 改變resource或DomainResource上任何資料項目的含義（包括不能改變modifierExtension本身的含義）。"
* link.modifierExtension ^requirements = "修飾用的資料項目擴充將不能安全地忽略的擴充與絕大多數可以安全地忽略的擴充明確區分開來。透過消除禁止實作者擴充存在的需求來促進可互通性。更多訊息，請參見[修飾用的資料項目擴充之定義]（http://hl7.org/fhir/R4/extensibility.html#modifierExtension）。"
* link.modifierExtension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
*/

* link.relation ^short = "參見 [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1)"
* link.relation ^definition = "詳細說明該連結功能用途的名稱 - 參見[http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1)"

* link.url ^short = "連結的參照細節"
* link.url ^definition = "連結的參照細節"

* entry ^short = "在bundle中的條目 - 將會有一個resource或資訊，這個重複的資料項目順序：對於type為「document」和「message」的bundles，第一個resource是特殊的（必須分別是Composition或MessageHeader）。對於所有bundles，條目順序的意義取決於bundle的type。"
* entry ^definition = "Bundle resource中的條目 - 將包含一個resource或是關於resource的資訊（僅限transactions和history）。"

/*
* entry.id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* entry.id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* entry.extension ^short = "擴充的資料項目"
* entry.extension ^definition = "擴充的資料項目"
* entry.extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* entry.modifierExtension ^short = "此擴充的資料項目可能會完全修正或改變其他資料項目的意涵，需特別留意。"
* entry.modifierExtension ^definition = "可以用來表示不屬於資料項目的基本定義的附加資訊，並且修改對它所內嵌（contained）的資料項目的理解和（或）對包含資料項目之後續使用的理解。通常，修飾用的資料項目提供否定或限定。為了使擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。處理resource的應用程式被要求檢查修飾用的擴充資料項目。 
 修飾用的擴充資料項目 **必須沒有（SHALL NOT）** 改變resource或DomainResource上任何資料項目的含義（包括不能改變modifierExtension本身的含義）。"
* entry.modifierExtension ^requirements = "修飾用的資料項目擴充將不能安全地忽略的擴充與絕大多數可以安全地忽略的擴充明確區分開來。透過消除禁止實作者擴充存在的需求來促進可互通性。更多訊息，請參見[修飾用的資料項目擴充之定義]（http://hl7.org/fhir/R4/extensibility.html#modifierExtension）。"
* entry.modifierExtension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
*/

* entry.link ^short = "與本條目相關的連結"
* entry.link ^definition = "為本條目提供情境背景的一系列連結。"

* entry.fullUrl ^short = "Resource的 URI（絕對 URL 伺服器地址或 UUID/OID 的 URI）"
* entry.fullUrl ^definition = "resource的絕對URL。fullUrl **必須沒有(SHALL NOT)**與resource中的 id 不一致，也就是說如果 fullUrl 不是 urn:uuid，則 URL 應為與 Resource.id 一致的不分版本的URL。fullUrl 是對resource的不分版本參照。fullUrl 資料項目必須有一個值，但以下情況除外：

在 POST 時，fullUrl 可以為空（雖然在 bundle 中包含暫時 id 時，fullUrl 不需要為空）
操作結果可能涉及未被識別的resources。"

* entry.fullUrl ^comment = "fullUrl 在resource上下文中可能不是唯一的。請注意：由於 FHIR resource不需要透過 FHIR API 提供服務，因此 fullURL 可能是一個 URN 或絕對 URL，而不是以resource的邏輯 id（Resource.id）結尾。但是，如果 fullUrl 看起來確實像 RESTful 伺服器 URL（例如：符合正則表達式regex，則 fullUrl 的 「id」部分 **必須（SHALL）** 以 Resource.id 結尾。

請注意：fullUrl 與 canonical URL（正準URL） 並不相同，fullUrl是為resource提供服務的端點的絕對 URL（這些在為 resource 帶有 canonical URL 的 Canonical 伺服器上將具有相同的值）。"

* entry.resource ^short = "Bundle中的resource"
* entry.resource ^definition = "Bundle中的resource。resource的目的/含義由 Bundle.type 決定。"

* entry.search ^short = "查詢有關的資訊"
* entry.search ^definition = "有關如何進行查詢才能創建此條目的解釋資訊。"

/*
* entry.search.id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* entry.search.id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* entry.search.extension ^short = "擴充的資料項目"
* entry.search.extension ^definition = "擴充的資料項目"
* entry.search.extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* entry.search.modifierExtension ^short = "此擴充的資料項目可能會完全修正或改變其他資料項目的意涵，需特別留意。"
* entry.search.modifierExtension ^definition = "可以用來表示不屬於資料項目的基本定義的附加資訊，並且修改對它所內嵌（contained）的資料項目的理解和（或）對包含資料項目之後續使用的理解。通常，修飾用的資料項目提供否定或限定。為了使擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。處理resource的應用程式被要求檢查修飾用的擴充資料項目。 
 修飾用的擴充資料項目 **必須沒有（SHALL NOT）** 改變resource或DomainResource上任何資料項目的含義（包括不能改變modifierExtension本身的含義）。"
* entry.search.modifierExtension ^requirements = "修飾用的資料項目擴充將不能安全地忽略的擴充與絕大多數可以安全地忽略的擴充明確區分開來。透過消除禁止實作者擴充存在的需求來促進可互通性。更多訊息，請參見[修飾用的資料項目擴充之定義]（http://hl7.org/fhir/R4/extensibility.html#modifierExtension）。"
* entry.search.modifierExtension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
*/

* entry.search.mode ^short = "match | include | outcome"
* entry.search.mode ^binding.description = "Resource出現在Bundle中的原因；應填入所綁定值集中的其中一個代碼。"
* entry.search.mode ^definition = "此條目出現在結果集中的原因--是因為符合match要求還是因為 _include 要求，或者是為了傳達有關查詢過程的資訊或警告資訊。 "
* entry.search.mode ^comment = "只有一種模式。在某些情況下，一個resource可能會被包含，因為它既是match也是include的resource。在這種情況下，「match」優先。"

* entry.search.score ^short = "查詢排名（0至1之間）"
* entry.search.score ^definition = "查詢時，該條目在伺服器上的查詢排名得分。"
* entry.search.score ^comment = "伺服器無需返回排名得分，1 表示最相關，0 表示最不相關。通常情況下，查詢結果按得分排序，但用戶可指定不同的排序順序。

請參閱「病人匹配（Patient Match）」以了解與此資料項目相關的 EMPI 查詢。請參閱[Patient Match]（http://hl7.org/fhir/R4/patient-operation-match.html），了解與此要素相關的 EMPI 查詢。"

* entry.request ^short = "其他執行資訊（transaction/batch/history）"
* entry.request ^definition = "關於如何將條目作為transaction或batch的一部分進行處理的附加資訊。對於history，它顯示如何處理條目以創建條目中包含的版本。"

/*
* entry.request.id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* entry.request.id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* entry.request.extension ^short = "擴充的資料項目"
* entry.request.extension ^definition = "擴充的資料項目"
* entry.request.extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* entry.request.modifierExtension ^short = "此擴充的資料項目可能會完全修正或改變其他資料項目的意涵，需特別留意。"
* entry.request.modifierExtension ^definition = "可以用來表示不屬於資料項目的基本定義的附加資訊，並且修改對它所內嵌（contained）的資料項目的理解和（或）對包含資料項目之後續使用的理解。通常，修飾用的資料項目提供否定或限定。為了使擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。處理resource的應用程式被要求檢查修飾用的擴充資料項目。 
 修飾用的擴充資料項目 **必須沒有（SHALL NOT）** 改變resource或DomainResource上任何資料項目的含義（包括不能改變modifierExtension本身的含義）。"
* entry.request.modifierExtension ^requirements = "修飾用的資料項目擴充將不能安全地忽略的擴充與絕大多數可以安全地忽略的擴充明確區分開來。透過消除禁止實作者擴充存在的需求來促進可互通性。更多訊息，請參見[修飾用的資料項目擴充之定義]（http://hl7.org/fhir/R4/extensibility.html#modifierExtension）。"
* entry.request.modifierExtension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
*/

* entry.request.method ^short = "GET | HEAD | POST | PUT | DELETE | PATCH"
* entry.request.method ^binding.description = "應填入所綁定值集中的其中一個代碼。"
* entry.request.method ^definition = "在 transaction 或 batch 中，這是此條目要執行的 HTTP 操作。在history Bundle中，這表示發生的 HTTP 操作。"

* entry.request.url ^short = "此Bundle HTTP 對應的 URL"
* entry.request.url ^definition = "此條目相對於根地址（請求發布的地址）的 URL。"
* entry.request.url ^comment = "例如：對於 病人創建（Patient Create），方法是 「POST」，URL 是 「Patient」。對於病人更新（Patient Update），方法是 「PUT」，URL 是 「Patient/[id]」。"

* entry.request.ifNoneMatch ^short = "用於管理緩存當前狀態"
* entry.request.ifNoneMatch ^definition = "如果 ETag 值匹配，則返回 304 未修改狀態（Not Modified）。請參閱「[有條件讀取（Conditional Read）]（http://hl7.org/fhir/R4/http.html#cread）」的 API 文件。"

* entry.request.ifModifiedSince ^short = "用於管理緩存當前狀態"
* entry.request.ifModifiedSince ^definition = "僅在最後更新日期匹配時執行操作。請參閱 「[有條件讀取（Conditional Read）]（http://hl7.org/fhir/R4/http.html#cread）」的 API 文件。"

* entry.request.ifMatch ^short = "用於管理更新衝突"
* entry.request.ifMatch ^definition = "只有在 Etag 值匹配時才執行操作。有關詳細資訊，請參閱 API 部分 「[管理resource衝突]（http://hl7.org/fhir/R4/http.html#concurrency）」。"

* entry.request.ifNoneExist ^short = "用於有條件建立"
* entry.request.ifNoneExist ^definition = "如果指定的resource已經存在，則指示伺服器不執行創建。有關詳細資訊，請參閱 「[有條件創建 （Conditional Creage）]（http://hl7.org/fhir/R4/http.html#ccreate）」的 API 文件。這只是 URL 的查詢部分，即「? 」後面的內容（不包括「?」）。"

* entry.response ^short = "執行結果（transaction/batch/history）"
* entry.response ^definition = "表表示 batch 或 transaction 中相應「請求」條目的處理結果，或返回history時的操作結果。"

/*
* entry.response.id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* entry.response.id ^definition = "resource中資料項目的唯一ID（用於內部參照）。這可以是任何不含空格的字串。"
* entry.response.extension ^short = "擴充的資料項目"
* entry.response.extension ^definition = "擴充的資料項目"
* entry.response.extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* entry.response.modifierExtension ^short = "此擴充的資料項目可能會完全修正或改變其他資料項目的意涵，需特別留意。"
* entry.response.modifierExtension ^definition = "可以用來表示不屬於資料項目的基本定義的附加資訊，並且修改對它所內嵌（contained）的資料項目的理解和（或）對包含資料項目之後續使用的理解。通常，修飾用的資料項目提供否定或限定。為了使擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。處理resource的應用程式被要求檢查修飾用的擴充資料項目。 
 修飾用的擴充資料項目 **必須沒有（SHALL NOT）** 改變resource或DomainResource上任何資料項目的含義（包括不能改變modifierExtension本身的含義）。"
* entry.response.modifierExtension ^requirements = "修飾用的資料項目擴充將不能安全地忽略的擴充與絕大多數可以安全地忽略的擴充明確區分開來。透過消除禁止實作者擴充存在的需求來促進可互通性。更多訊息，請參見[修飾用的資料項目擴充之定義]（http://hl7.org/fhir/R4/extensibility.html#modifierExtension）。"
* entry.response.modifierExtension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名（stigma）。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
*/

* entry.response.status ^short = "狀態回應代碼（文字選填）"
* entry.response.status ^definition = "處理此條目時返回的狀態編碼。狀態 **必須（SHALL）** 以三位 HTTP 編碼（如 404）開頭，並可包含與狀態編碼相關的標準 HTTP 描述。"

* entry.response.location ^short = "位置（如果操作返回位置）"
* entry.response.location ^definition = "處理該操作時創建的位置表頭（location header），如果該操作返回位置，則填入該位地置表頭。"

* entry.response.etag ^short = "resource的 Etag（如果有相關）"
* entry.response.etag ^definition = "resource的 Etag，如果條目的操作產生了版本化resource（請參閱 「[Resource Metadata及版本化和管理resource衝突」]（http://hl7.org/fhir/R4/http.html#versioning））。"
* entry.response.etag ^comment = "Etag 與 Resource.meta.versionId 匹配。如果包含resource，ETag 必須與表頭中的版本 ID 相匹配。"

* entry.response.lastModified ^short = "修改時之伺服器日期時間"
* entry.response.lastModified ^definition = "此resource在伺服器上被修改的日期/時間。"
* entry.response.lastModified ^comment = "如果包含resource，則必須與meta.lastUpdated中的時間一致。"

* entry.response.outcome ^short = "帶提示和警告的OperationOutcome（用於batch/transaction）"
* entry.response.outcome ^definition = "操作結果（OperationOutcome），包含在batch或transaction中處理此條目時產生的提示和警告。"
* entry.response.outcome ^comment = "對於 POST/PUT 操作，這是 prefer = operationoutcome 將返回的等價結果，但無論是否返回結果，resource都會被返回。此結果不用於批次處理/異動處理中的錯誤響應，僅用於提示和警告。在批次處理操作中，錯誤將出現在 Bundle.entry.response 中，而在異動處理中，如果出現錯誤，將只有一個 OperationOutcome 而不是一個 bundle。"

* signature ^short = "數位簽章"
* signature ^definition = "數位簽章 - base64 編碼。XML-DSig 或 JWT。"
* signature ^comment = "簽章可以由bundle的「作者（author）」或是發起的設備所創建。關於是否要包含簽章、如何驗證簽章，以及如何處理已簽章與未簽章的bundle，這些要求會根據實作的環境而有所不同。"
* signature ^requirements = "簽章（Signature）以 FHIR 可存取的形式保存簽章及其支持上下文的電子表述。簽章可以是加密類型（XML DigSig 或 JWS），能夠提供不可否認性證明，也可以是表示簽章或簽章過程的圖形化圖像。該資料項目允許截取 document、message、transation甚至search回應上的簽章，以支持內容驗證、不可否認性或其他業務情況。這主要適用於Bundle可能透過多節點傳輸或其他機制傳輸的情況，因為 HTTPS 的不可否認性是不夠的。"

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/profiles/profiles_careplan.fsh

Profile:        TWCoreCarePlan
Parent:         CarePlan
Id:             CarePlan-twcore
Title:          "TW Core CarePlan"
Description:    "此臺灣核心-照護計畫（TW Core CarePlan） Profile說明本IG如何進一步定義FHIR的CarePlan Resource以呈現照護計畫資料。"
* ^version = "0.3.2"
* text MS
* text ^short = "CarePlan Resource之內容摘要以供人閱讀"
* text.status MS
* text.status from TWNarrativeStatus
* text.status ^short = "generated | additional"
* text.status ^binding.description = "Constrained value set of narrative statuses."
* text.div MS
* text.div ^short = "Limited xhtml content"
* status MS
* status from RequestStatus (required)
* status ^requirements = "Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record."
* status ^binding.description = "Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record."
* intent MS
* intent from CarePlanIntent (required)
* intent ^binding.description = "Codes indicating the degree of authority/intentionality associated with a care plan"
* category MS
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^definition = "Type of plan."
* category ^requirements = "Identifies what \"kind\" of plan this is to support differentiation between multiple co-existing plans; e.g., \"Home health\", \"psychiatric\", \"asthma\", \"disease management\", \"wellness plan\", etc."
* category contains AssessPlan 1..1 MS
* category[AssessPlan] = https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/careplan-category-tw#assess-plan
* category[AssessPlan] ^definition = "Type of plan."
* category[AssessPlan] ^requirements = "Identifies what \"kind\" of plan this is to support differentiation between multiple co-existing plans; e.g., \"Home health\", \"psychiatric\", \"asthma\", \"disease management\", \"wellness plan\", etc."
* subject only Reference(TWCorePatient or Group)
* subject MS
* subject ^definition = "Who care plan is for."
* subject ^requirements = "Identifies the patient or group whose intended care is described by the plan."
* subject ^type.targetProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* subject ^type.targetProfile[=].extension.valueBoolean = true
* subject ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* subject ^type.targetProfile[=].extension.valueBoolean = false

* basedOn only Reference(TWCoreCarePlan)
* replaces only Reference(TWCoreCarePlan)
* partOf only Reference(TWCoreCarePlan)
* encounter only Reference(TWCoreEncounter)
* author only Reference(TWCorePatient or TWCorePractitioner or TWCorePractitionerRole or TWCoreImplantableDevice or TWCoreRelatedPerson or TWCoreOrganization or TWCoreCareTeam)
* contributor only Reference(TWCorePatient or TWCorePractitioner or TWCorePractitionerRole or TWCoreImplantableDevice or TWCoreRelatedPerson or TWCoreOrganization or TWCoreCareTeam)
* careTeam only Reference(TWCoreCareTeam)
* addresses only Reference(TWCoreCondition)
* activity.reference only Reference(Appointment or CommunicationRequest or DeviceRequest or TWCoreMedicationRequest or NutritionOrder or Task or ServiceRequest or VisionPrescription or RequestGroup)
//* activity.detail.instantiatesCanonical only Reference(PlanDefinition or ActivityDefinition or Questionnaire or Measure or OperationDefinition)
* activity.detail.reasonReference only Reference(TWCoreCondition or TWCoreObservationClinicalResult or TWCoreDiagnosticReport or TWCoreDocumentReference)
* activity.detail.location only Reference(TWCoreLocation)
* activity.detail.performer only Reference(TWCorePractitioner or TWCorePractitionerRole or TWCoreOrganization or TWCoreRelatedPerson or TWCorePatient or TWCoreCareTeam or  HealthcareService or TWCoreImplantableDevice)
* activity.detail.productReference only Reference(TWCoreMedication or Substance)

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/profiles/profiles_careteam.fsh

Profile:        TWCoreCareTeam
Parent:         CareTeam
Id:             CareTeam-twcore
Title:          "TW Core CareTeam"
Description:    "此臺灣核心-照護團隊（TW Core CareTeam） Profile說明本IG如何進一步定義FHIR的CareTeam Resource以呈現照護團隊資料。"
* ^version = "0.3.2"
* status MS
* subject 1.. MS
* subject only Reference(TWCorePatient or Group)
* subject ^type.targetProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* subject ^type.targetProfile[=].extension.valueBoolean = true
* subject ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* subject ^type.targetProfile[=].extension.valueBoolean = false
* participant 1.. MS
* participant.role 1..1 MS
* participant.role from http://hl7.org/fhir/ValueSet/participant-role (extensible)
* participant.member 1.. MS
* participant.member only Reference(TWCorePractitioner or TWCoreOrganization or TWCorePatient or TWCorePractitionerRole or TWCoreCareTeam or TWCoreRelatedPerson)
* participant.member ^type.targetProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* participant.member ^type.targetProfile[=].extension.valueBoolean = true
* participant.member ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* participant.member ^type.targetProfile[=].extension.valueBoolean = false
* participant.member ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* participant.member ^type.targetProfile[=].extension.valueBoolean = false
* participant.member ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* participant.member ^type.targetProfile[=].extension.valueBoolean = true
* participant.member ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* participant.member ^type.targetProfile[=].extension.valueBoolean = false
* participant.member ^type.targetProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* participant.member ^type.targetProfile[=].extension.valueBoolean = true

* encounter only Reference(TWCoreEncounter)
* participant.onBehalfOf only Reference(TWCoreOrganization)
* reasonReference only Reference(TWCoreCondition)
* managingOrganization only Reference(TWCoreOrganization)

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/profiles/profiles_composition.fsh

Profile: TWCoreComposition
Parent: Composition
Id: Composition-twcore
Title: "TW Core Composition"
Description: "此臺灣核心-臨床文件架構（TW Core Composition） Profile說明本IG如何進一步定義FHIR的Composition Resource以呈現臨床文件架構的詳細資料。"
* ^version = "0.3.2"
* language ^example.label = "Value"
* language ^example.valueString = "zh-TW"
* identifier and status and subject and attester and type and date and author and custodian and title and section and section.code and section.text and section.entry MS
* subject only Reference(TWCorePatient or Group or Device or Substance or TWCoreLocation)
* encounter only Reference(TWCoreEncounter)
* author only Reference(TWCorePractitioner or TWCorePractitionerRole or TWCoreOrganization or TWCorePatient or Device or TWCoreRelatedPerson)
* attester.party only Reference(TWCorePatient or TWCoreRelatedPerson or TWCorePractitioner or TWCorePractitionerRole or TWCoreOrganization)
* custodian only Reference(TWCoreOrganization)
* section.author only Reference(TWCorePractitioner or TWCorePractitionerRole or TWCoreOrganization or TWCorePatient or Device or TWCoreRelatedPerson)
* type only CodeableConceptTW 
* category only CodeableConceptTW 
* event.code only CodeableConceptTW 
* section.code only CodeableConceptTW 
* section.orderedBy only CodeableConceptTW 
* section.emptyReason only CodeableConceptTW 

//* type from FHIRDocumentTypeCodes (extensible)
//* section.code from DocumentSectionCodes (extensible)
* category from LOINCDocumentClass (extensible)

* type from LOINCDocumentType (extensible)
* section.code from LOINCDocumentSection (extensible)
//* category from LOINCDocumentCategory (extensible)

* . ^short = "將一組resources組成一份連貫的臨床聲明，並附有臨床證明。"
* . ^definition = "一組與健康照護相關的資訊，這些訊息被組合成一個單一的邏輯套件，提供一個單一的連貫的意義陳述，建立自己的上下文，並且提供有關於是誰做出陳述的臨床認證。"
//* . ^requirements = "為了支援文件，同時為了捕捉 EN13606 中關於對病人電子健康紀錄所作的經過證實的提交這一概念，以及允許在資訊/工程層面上將一系列不同resources彙集成一個臨床聲明。"
* . ^comment = "雖然此規範的重點在於特定於病人的臨床聲明，但此resource也可適用於其他與健康照護相關的聲明，如研究方案設計、醫療發票和其他不必然與特定於病人或臨床相關的活動。"
* id ^short = "不重複的ID用以識別儲存在特定FHIR Server中的Composition紀錄，通常又稱為邏輯性ID。"
* id ^definition = "resource的邏輯ID，在resource的URL中使用。一旦指定，這個值永遠不會改變。"
* id ^comment = "一個resource使用新增操作(create operation)提交給伺服器時是此resource唯一沒有id的時刻"
* meta ^short = "此Composition Resource的metadata"
* meta ^definition = "關於resource的metadata。這是由基礎建設維護的內容。對內容的改變可能並不總是與resource的版本改變相關。"
* implicitRules ^short = "創建此內容所依據的一組規則"
* implicitRules ^definition = "構建resource時遵循的一系列規則的參照，在處理內容時必須理解這些規則。通常這是IG定義特殊規則及其他profiles的參照。"
* implicitRules ^comment = "宣告這套規則限制了內容只能被有限的貿易夥伴所理解。這從本質上限制了資料的長期有用性。然而，現有的健康生態體系高度分裂，還沒有準備好以普遍可計算的方式定義、收集和交換資料。只要有可能，實作者和(或)規範編寫者應該避免使用這個資料項目。通常，在使用時，此URL是對實作指引的參照，此指引將這些特殊規則與其他profiles、value sets等一起定義為其敘述的一部分。"
* language ^short = "用以表述Composition Resource內容的語言"
* language ^binding.description = "人類語言；鼓勵使用所綁定值集中的代碼，但不強制一定要使用此值集，你也可使用其他值集的代碼或單純以文字表示。"
* language ^definition = "編寫此resource的基礎語言"
* language ^comment = "提供語言是為了支援索引和可存取性(通常，文字表述轉語音等服務使用此語言標籤)。html lanuage tag適用於此敘述。resource上的語言標籤可用於指定從resource中的資料所產成的其他表述之語言。不是所有的內容都必須使用此基礎語言。不應該假定Resource.language自動適用於敘述。如果指定語言，它也應該被指定在html中的div元素(關於xml:lang和html lang屬性之間的關係，見HTML5中的規則)。"
* text ^short = "Composition Resource之內容摘要以供人閱讀"
* text ^definition = "人可讀的敘述，包含resource的摘要，可用於向人表述resource的內容。敘述不需要對所有的結構化資料進行編碼，但需要包含足夠的細節使人在閱讀敘述時理解「臨床安全性」。resource定義可定義哪些內容應該在敘述中表示，以確保臨床安全。"
* text ^comment = "內嵌(contained)的resource沒有敘述，非內嵌(contained)的resource則 **建議應該(SHOULD)** 有敘述。在某些情況下，resource可能只有文字表述，很少或沒有額外的離散資料(只要滿足所有minOccurs=1的資料項目)。這對於來自舊有系統的資料可能是必要的，在這些系統中，從 「文字表述區塊(text blob) 」獲取訊息，或者文字表述是額外的原始輸入或敘述，而編碼訊息是後來添加的。"
* contained ^short = "內嵌的(contained)、行內的Resources"
* contained ^definition = "這些resource內嵌(contains)的resource不會另外存於任何FHIR伺服器，意即它們無法在任何FHIR伺服器中被找到，也無法有自己獨立的資料異動／交易(transaction)範圍。"
* contained ^comment = "內嵌(contained)的resource沒有敘述，非內嵌(contained)的resource則 **建議應該(SHOULD)** 有敘述。在某些情況下，resource可能只有文字表述，很少或沒有額外的離散資料(只要滿足所有minOccurs=1的資料項目)。這對於來自舊有系統的資料可能是必要的，在這些系統中，從 「文字表述區塊(text blob) 」獲取訊息，或者文字表述是額外的原始輸入或敘述，而編碼訊息是後來添加的。"
* extension ^short = "擴充的資料項目"
* extension ^definition = "可用於表示不屬於此資料項目基本定義的附加資訊。為了擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。"
* extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何污名(stigma)。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* modifierExtension ^short = "此擴充的資料項目可能會完全修正或改變其他資料項目的意涵，需特別留意。"
* modifierExtension ^definition = "可以用來表示不屬於資料項目的基本定義的附加資訊，並且修改對它所內嵌(contained)的資料項目的理解和(或)對包含資料項目之後續使用的理解。通常，修飾用的資料項目提供否定或限定。為了使擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。處理resource的應用程式被要求檢查修飾用的擴充資料項目。  
修飾用的擴充資料項目 **必須沒有(SHALL NOT)** 改變resource或DomainResource上任何資料項目的含義(包括不能改變modifierExtension本身的含義)。"
* modifierExtension ^requirements = "修飾用的資料項目擴充將不能安全地忽略的擴充與絕大多數可以安全地忽略的擴充明確區分開來。透過消除禁止實作者擴充存在的需求來促進可互操作性。更多訊息，請參見[修飾用的資料項目擴充之定義](http://hl7.org/fhir/R4/extensibility.html#modifierExtension)。"
* modifierExtension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何污名(stigma)。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"

* identifier ^short = "不分版本的臨床文件架構(Composition)識別碼。"
* identifier ^definition = "與版本無關的Composition識別碼。隨著時間的推移，該識別碼將保持不變。"
* identifier ^comment = "類似於 CDA 中的 ClinicalDocument/setId。請參閱resource定義中的討論，了解它們之間的關係。"

* status ^short = "registered | partial | preliminary | final | amended | corrected +"
* status ^binding.description = "Composition的工作流程/臨床狀態；應填入所綁定值集中的其中一個代碼。"
* status ^definition = "此composition的工作流程/臨床狀態。狀態是指文件的臨床狀態的標識。"
* status ^requirements = "需要能夠標記為臨時(interim)、修改(amended)或撤回(withdrawn)的composition或文件。"
* status ^comment = "如果一個composition被標記為撤回(withdraw)，那麼該系列中的composition/文件或者此composition或文件系列中的資料，若未被明確標記為(該撤回)不可信的情況下，則不應向用戶展示。「錯誤輸入 (entered-in-error)標籤是此composition為何被標記為修飾用資料項目(modifier)的原因。
某些報告工作流程要求最終文件的原始敘述永不更改；意即只能添加新的敘述。composition resource 沒有明確的狀態(status)來明確註明是否適用此業務規則。如有需要，這將透過擴充來處理。"

* type ^short = "Composition的種類（如果可能請使用LOINC）"
* type ^definition = "指定特定類型的composition（如病史和體檢、出院摘要、病程紀錄）。這通常等同於製作composition的目的。"
* type ^requirements = "描述composition的關鍵metadata資料項目，用於查詢/篩選。"
* type ^binding.description = "應填入所綁定值集中適合的代碼，確定無適合的代碼才可以使用其他值集的代碼來表示。"

* category ^short = "Composition的分類"
* category ^definition = "composition類型的分類 - 有助於索引和查詢。這可能是由 Composition Type 中指定的代碼隱含或衍生出來的。"
* category ^comment = "這是來自XDS/MHD的metadata欄位"。
* category ^requirements = "幫助人類在檢視composition或規範文件時評估composition是否感興趣。"
* category ^binding.description = "應填入所綁定值集中適合的代碼，確定無適合的代碼才可以使用其他值集的代碼來表示。"

* subject ^short = "Composition是關於誰和/或什麼"
* subject ^definition = "composition是關於誰或什麼的。composition可以是關於一個人（病人或醫護人員）、一個設備（如機器），甚至是一群對象（如關於一群牲畜的文件，或一群有共同曝露的病人）。"
* subject ^requirements = "查詢composition的基本metadata，指明compoisition/文件的作者和/或內容。"
* subject ^comment = "對於臨床文件來說，這通常是指病人。"

* encounter ^short = "Composition的情境"
* encounter ^definition = "描述與該文件相關的臨床就醫事件或照護類型。"
* encounter ^requirements = "為composition提供情境並支持查詢。"

* date ^short = "Composition的編輯時間"
* date ^definition = "composition編輯時間，即作者最後一次邏輯上更改composition的時間。"
* date ^requirements = "dateTime 用於追蹤、組織版本和查詢。請注意：這是創作此版本Composition的時間。打包成文檔時，Bundle.timestamp 是打包日期。"
* date ^comment = "composition上的最後修改日期可能在文件被證明日期之後而未更改。這意味著修改過的文件上的日期是修改日期，而非原始撰寫之日期。"

* author ^short = "誰和/或什麼創建了這個Composition"
* author ^definition = "指明誰對composition中的資訊負責，而不一定是誰輸入了它。"
* author ^requirements = "指明誰對內容負責"

* title ^short = "人類可讀的名稱/標題"
* title ^definition = "composition的正式可讀標籤"
* title ^comment = "對於許多composition來說，標題與文本或 Composition.type 的顯示名稱相同（如 「會診﹙consultation﹚」或 「病程紀錄﹙progress note﹚」）。請注意：CDA 並不強制要求標題，但目前還沒有發現省略標題有用的情況，因此在此強制要求標題。歡迎在試用區間對這一要求提出反饋意見。"

* confidentiality ^short = "根據特定技術領域的定義"
* confidentiality ^binding.description = "應填入所綁定值集中的其中一個代碼。"
* confidentiality ^definition = "具體說明Composition保密等級的代碼"
* confidentiality ^comment = "此資料項目的確切使用，以及與高度敏感文件相關的執行和問題超出了基本規範的範圍，並委託給實作Profiles（見安全小節）。 此資料項目被標記為修飾用，因為高度機密的文件不能被當作非機密文件處理。"

* attester ^short = "證明Composition的準確性"
* attester ^definition = "證明composition/文件準確無誤的參與者"
* attester ^comment = "每位參與者只需每位證明者只列一次"
* attester ^requirements = "指明對composition內容準確性的責任"

/*
* attester.id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* attester.id ^definition = "resource中資料項目的唯一ID(用於內部參照)。這可以是任何不含空格的字串。"
* attester.extension ^short = "擴充的資料項目"
* attester.extension ^definition = "擴充的資料項目"
* attester.extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名(stigma)。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* attester.modifierExtension ^short = "此擴充的資料項目可能會完全修正或改變其他資料項目的意涵，需特別留意。"
* attester.modifierExtension ^definition = "可以用來表示不屬於資料項目的基本定義的附加資訊，並且修改對它所內嵌(contained)的資料項目的理解和(或)對包含資料項目之後續使用的理解。通常，修飾用的資料項目提供否定或限定。為了使擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。處理resource的應用程式被要求檢查修飾用的擴充資料項目。 
 修飾用的擴充資料項目 **必須沒有(SHALL NOT)** 改變resource或DomainResource上任何資料項目的含義(包括不能改變modifierExtension本身的含義)。"
* attester.modifierExtension ^requirements = "修飾用的資料項目擴充將不能安全地忽略的擴充與絕大多數可以安全地忽略的擴充明確區分開來。透過消除禁止實作者擴充存在的需求來促進可互通性。更多訊息，請參見[修飾用的資料項目擴充之定義](http://hl7.org/fhir/R4/extensibility.html#modifierExtension)。"
* attester.modifierExtension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名(stigma)。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
*/

* attester.mode ^short = "personal | professional | legal | official"
* attester.mode ^binding.description = "認證者提供的認證類型；應填入所綁定值集中的其中一個代碼。"
* attester.mode ^definition = "認證者提供的認證類型"
* attester.mode ^requirements = "指明認證的權威程度"

* attester.time ^short = "此Composition被證明的時間"
* attester.time ^definition = "當composition被該方證實的時間"
* attester.time ^requirements = "指明composition中的資訊何時被認為是準確的。（自那時起可能發生了變化）。"

* attester.party ^short = "誰證明了此Composition"
* attester.party ^definition = "誰以指定的方式證明了此composition"
* attester.party ^requirements = "指明由誰承擔composition內容準確性的責任"

* custodian ^short = "維護Composition的機構"
* custodian ^definition = "指明負責持續維護和存取composition/文件資訊的機構或團體"
* custodian ^requirements = "指明在哪裡可以找到當前版本、在哪裡可以報告問題等"
* custodian ^comment = "當此文件是衍生自composition時非常有用。它提供了如何獲取文件的最新版本的指導。這是可選項，因為有時編寫系統並不知道可以根據情境推斷。不過，在處理派生文件時，了解這一資訊非常重要，因此鼓勵提供一個保管者。"

* relatesTo ^short = "與其他Composition/文件之間的關係"
* relatesTo ^definition = "此composition與其他已有的composition或文件之間的關係"
* relatesTo ^comment = "要參照（使用 relatesTo）「document」type的 Bundle 或其他只有識別碼的 Composition，請使用帶有識別碼的 resourceReference。"

/*
* relatesTo.id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* relatesTo.id ^definition = "resource中資料項目的唯一ID(用於內部參照)。這可以是任何不含空格的字串。"
* relatesTo.extension ^short = "擴充的資料項目"
* relatesTo.extension ^definition = "擴充的資料項目"
* relatesTo.extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名(stigma)。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* relatesTo.modifierExtension ^short = "此擴充的資料項目可能會完全修正或改變其他資料項目的意涵，需特別留意。"
* relatesTo.modifierExtension ^definition = "可以用來表示不屬於資料項目的基本定義的附加資訊，並且修改對它所內嵌(contained)的資料項目的理解和(或)對包含資料項目之後續使用的理解。通常，修飾用的資料項目提供否定或限定。為了使擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。處理resource的應用程式被要求檢查修飾用的擴充資料項目。 
 修飾用的擴充資料項目 **必須沒有(SHALL NOT)** 改變resource或DomainResource上任何資料項目的含義(包括不能改變modifierExtension本身的含義)。"
* relatesTo.modifierExtension ^requirements = "修飾用的資料項目擴充將不能安全地忽略的擴充與絕大多數可以安全地忽略的擴充明確區分開來。透過消除禁止實作者擴充存在的需求來促進可互通性。更多訊息，請參見[修飾用的資料項目擴充之定義](http://hl7.org/fhir/R4/extensibility.html#modifierExtension)。"
* relatesTo.modifierExtension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名(stigma)。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
*/

* relatesTo.code ^short = "replaces | transforms | signs | appends"
* relatesTo.code ^binding.description = "檔案之間的關係型別；應填入所綁定值集中的其中一個代碼。"
* relatesTo.code ^definition = "此composition與另一個compoisition或文件的關系類型"
* relatesTo.code ^comment = "如果此文件附加了另一個文件，那麼如果不存取參照的文件，就無法完全理解此文件。"

* relatesTo.target[x] ^short = "此關係的目標文件"
* relatesTo.target[x] ^definition = "此關係的目標composition/文件"

* event ^short = "正在記錄的臨床服務"
* event ^definition = "記錄的臨床服務，例如：結腸鏡檢查或闌尾切除術。"
* event ^comment = "事件需要與類型資料項目保持一致，但如果需求，也可以提供更多的詳細資訊。"
* event ^requirements = "為composition提供情境背景，並在描述事件的resource和為描述事件而創建的composition之間建立連結。"

/*
* event.id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* event.id ^definition = "resource中資料項目的唯一ID(用於內部參照)。這可以是任何不含空格的字串。"
* event.extension ^short = "擴充的資料項目"
* event.extension ^definition = "擴充的資料項目"
* event.extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名(stigma)。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* event.modifierExtension ^short = "此擴充的資料項目可能會完全修正或改變其他資料項目的意涵，需特別留意。"
* event.modifierExtension ^definition = "可以用來表示不屬於資料項目的基本定義的附加資訊，並且修改對它所內嵌(contained)的資料項目的理解和(或)對包含資料項目之後續使用的理解。通常，修飾用的資料項目提供否定或限定。為了使擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。處理resource的應用程式被要求檢查修飾用的擴充資料項目。 
 修飾用的擴充資料項目 **必須沒有(SHALL NOT)** 改變resource或DomainResource上任何資料項目的含義(包括不能改變modifierExtension本身的含義)。"
* event.modifierExtension ^requirements = "修飾用的資料項目擴充將不能安全地忽略的擴充與絕大多數可以安全地忽略的擴充明確區分開來。透過消除禁止實作者擴充存在的需求來促進可互通性。更多訊息，請參見[修飾用的資料項目擴充之定義](http://hl7.org/fhir/R4/extensibility.html#modifierExtension)。"
* event.modifierExtension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名(stigma)。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
*/

* event.code ^short = "此代碼表代表了正在被記錄的主要臨床行為"
* event.code ^binding.description = "可參考所綁定值集，但此值集只是針對這個欄位的一個可能值的範例，不預期也不鼓勵使用者一定要使用此值集的代碼。"
* event.code ^definition = "一個概念可能透過正式參照專門術語或本體論來定義，或者可以由文字提供。"
* event.code ^comment = "一個事件可以進一步專門化 typeCode 中固有的行為，例如：當它僅僅是「處置報告」，而該處置是「結腸鏡檢查」。如果包含一個或多個事件，它們 **必須沒有(SHALL NOT)** 與 classCode、practiceSettingCode 或 typeCode 中固有的值相衝突，因為這樣的衝突會造成模糊不清的情況。這個簡短的代碼清單提供用作某些類型查詢的關鍵字。"

* event.period ^short = "文件所涵蓋的時間區間"
* event.period ^definition = "此文件涵蓋的時間區間，這並不是聲明此文件是這一個時間區間的完整代表，而只是表明它記錄了這段時間內發生的事件。"

* event.detail ^short = "在描述被記錄下來的事件，這些事件可以是以代碼的形式、參考資料的形式，或者兩者都有的形式來呈現。"
* event.detail ^definition = "它描述了正在被記錄的主要臨床活動，比如說進行一次結腸鏡檢查或是闌尾切除手術。在某些情況下，這些臨床事件本身就包含在其typeCode中，例如：在「病史與體檢報告」中，所記錄的過程就必然是進行「病史與體檢」的行為。這些臨床事件可以以代碼的形式被記錄，或者作為對其他resource的參照。"
* event.detail ^comment = "事件可以進一步細化類型編碼中的固有行為，例如，事件只是程序報告，而程序是結腸鏡檢查。如果包含一個或多個事件，它們不得與類別編碼、診療設置編碼或類型代碼中固有的值相衝 突，因為這樣的衝突會造成模稜兩可的情況。本編碼簡表可用作某些類型查詢的關鍵詞。"

* section ^short = "Composition被分成一個或數個小節"
* section ^definition = "構成composition的各小節"

/*
* section.id ^short = "唯一可識別ID，以供資料項目間相互參照。"
* section.id ^definition = "resource中資料項目的唯一ID(用於內部參照)。這可以是任何不含空格的字串。"
* section.extension ^short = "擴充的資料項目"
* section.extension ^definition = "擴充的資料項目"
* section.extension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名(stigma)。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
* section.modifierExtension ^short = "此擴充的資料項目可能會完全修正或改變其他資料項目的意涵，需特別留意。"
* section.modifierExtension ^definition = "可以用來表示不屬於資料項目的基本定義的附加資訊，並且修改對它所內嵌(contained)的資料項目的理解和(或)對包含資料項目之後續使用的理解。通常，修飾用的資料項目提供否定或限定。為了使擴充的使用安全和可管理，對擴充的定義和使用有一套嚴格的管理。儘管任何實作者都可以定義一個擴充，但作為擴充定義的一部分，有一套要求 **必須（SHALL）** 滿足。處理resource的應用程式被要求檢查修飾用的擴充資料項目。 
 修飾用的擴充資料項目 **必須沒有(SHALL NOT)** 改變resource或DomainResource上任何資料項目的含義(包括不能改變modifierExtension本身的含義)。"
* section.modifierExtension ^requirements = "修飾用的資料項目擴充將不能安全地忽略的擴充與絕大多數可以安全地忽略的擴充明確區分開來。透過消除禁止實作者擴充存在的需求來促進可互通性。更多訊息，請參見[修飾用的資料項目擴充之定義](http://hl7.org/fhir/R4/extensibility.html#modifierExtension)。"
* section.modifierExtension ^comment = "無論使用或定義擴充的機構或管轄區，任何應用程式、專案或標準使用擴充都不背負任何汙名(stigma)。使用擴充是允許FHIR規範為每個人保留一個核心的簡易性。"
*/

* section.title ^short = "小節標籤(例如：目錄ToC)"
* section.title ^definition = "此特定小節的標籤。這將是文件呈現內容的一部分，通常用於建立目錄。"
* section.title ^requirements = "不同類型的文件常常會有標準化的小節標題，這些標題為人們提供如何組織文件的指引。"
* section.title ^comment = "標題為人類讀者指明小節。標題必須與作為 section.content 參照目標的resource的敘述一致。通常章節 **建議應該(SHOULD)** 有標題，但在某些文件中，這可能是不必要的或不適當的。通常情況下，當一個小節有其自己足夠區分的標題的子小節，或只有單一小節的文件時，就會這樣。大多數IG會要求小節標題是必填的資料項目。"

* section.code ^short = "小節分類(建議)"
* section.code ^definition = "一個用於指明小節中所含內容種類的代碼，這個代碼必須與小節的標題相一致。"
* section.code ^requirements = "提供給文件中主題的標籤是標準化的，並且可以被電腦程式識別和處理。"
* section.code ^binding.description = "應填入所綁定值集中適合的代碼，確定無適合的代碼才可以使用其他值集的代碼來表示。"

* section.author ^short = "誰和/或什麼人撰寫了該小節"
* section.author ^definition = "指明誰對小節中的資訊負責，而不一定是誰輸入了它。"
* section.author ^requirements = "指明誰對內容負責"

* section.focus ^short = "當小節與composition描述的對象無關時，此小節是關於誰/什麼。"
* section.focus ^definition = "當小節的實際焦點不是composition描述的對象，而是代表與對象相關的某事物或某人時，例如：（對於病人對象）配偶、父母、胎兒或捐贈者。如果沒有指定焦點，則假定焦點為父小節的焦點，或者對於Composition本身中的小節，為Composition的對象。具有焦點的小節只 **必須（SHALL）** 包含對象（病人、對象、焦點等）與小節焦點相匹配的resources，或者是沒有對象的resources（少數resources）。"
* section.focus ^comment = "通常，文件中的小節是關於該文件的描述對象，無論是病人、一群病人、位置、設備或其他。對於某些種類的文件，有些小節實際上包含有關的實體資料。典型的例子包括新生兒出院病摘中關於母親的小節，或者家族病史文件中關於每個家庭成員的小節，當然還有很多其他例子。"

* section.text ^short = "將文件中特定小節的內容簡化成容易理解的文字形式，便於人類閱讀和解釋。"
* section.text ^definition = "一個供人閱讀的敘述，包含小節的核實內容，用以展現resource的內容供人類閱讀。這段敘述不需要涵蓋所有結構化的資料，但必須包含足夠的細節，確保僅透過閱讀這段敘述的人能夠在臨床上獲得安全且準確的資訊。"
* section.text ^comment = "文件Profile可能會定義應在敘述中呈現哪些內容，以確保臨床安全。"

* section.mode ^short = "適用於此小節的處理模式"
* section.mode ^binding.description = "應填入所綁定值集中的其中一個代碼。"
* section.mode ^definition = "條目清單是如何準備的 - 它是一個適合持續維護的工作清單，還是代表從另一個來源截取的項目清單的快照，或者是一個準備好的清單，在該清單中，項目可能被標記為已添加、修改或刪除。"
* section.mode ^comment = "這個資料項目被標記為修飾用，是因為不應將變更清單(a change list)誤解為完整清單(a complete list)。"
* section.mode ^requirements = "小節有多種使用方式，因此必須清楚地了解如何安全地使用其中的條目。"

* section.orderedBy ^short = "小節條目的順序"
* section.orderedBy ^definition = "指定應用於小節條目的項目順序"
* section.orderedBy ^requirements = "這對於展示和呈現是重要的，清單可能會進行排序，以便將重要的資訊放在前面，或將相關的條目分組。"
* section.orderedBy ^comment = "應用程式 **建議應該(SHOULD)** 按照給定的順序來顯示有序清單，但也可以允許用戶按照他們自己的偏好進行重新排序。如果沒有明確指定順序，則該順序是不確定的，雖然清單可能仍有某種排列順序。"
* section.orderedBy ^binding.description = "鼓勵使用所綁定值集中的代碼，但不強制一定要使用此值集，你也可使用其他值集的代碼或單純以文字表示。"


* section.entry ^short = "提供一個連結用於參照或查看支持此小節內容的資料"
* section.entry ^definition = "指向那些提供小節中敘述內容的實際resource的參照"
* section.entry ^comment = "如果清單中沒有條目，則 **建議應該(SHOULD)** 提供 emptyReason。"

* section.emptyReason ^short = "為什麼此小節是空的原因"
* section.emptyReason ^definition = "如果小節為空，則說明清單為空的原因。一個空的小節通常有一些文字說明空的原因。"
* section.emptyReason ^requirements = "允許捕捉像是「不存在」或「未詢問」這樣的情況，這對於大多數清單來說可能很重要。"
* section.emptyReason ^comment = "當一個小節是空的，其空白的原因對於理解該小節非常重要。需要注意的是，這個代碼是用於當整個小節的內容都沒有被包括時，它並不適用於個別項目被省略的情形，若為個別項目被省略的情況，開發者可以考慮在該條目中添加文字說明或標記。"
* section.emptyReason ^binding.description = "鼓勵使用所綁定值集中的代碼，但不強制一定要使用此值集，你也可使用其他值集的代碼或單純以文字表示。"


* section.section ^short = "嵌套的小節"
* section.section ^definition = "此小節中嵌套的小節"
* section.section ^comment = "嵌套小節主要是為了幫助讀者快速找到文件中的特定內容"


---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/fsh/Alias.fsh

Invariant: id-card-number
Description: "身分證號共十碼，首碼以英文字母代表直轄市、縣（市）別，第二碼至第十碼為數字碼。"
Expression: "value.matches('^[A-Za-z][0-9]{9}$')"
Severity: #error

Invariant:   tw-core-1
Description: "Patient.name.text or Patient.name.family or both SHALL be present"
Expression:  "text.exists() or family.exists()"
Severity:    #error
XPath:       "f:text or f:given"

Invariant: tw-core-2
Description: "If there is no value a data absent reason must be present"
* severity = #error
* expression = "value.exists() or dataAbsentReason.exists()"

Invariant: tw-core-3
Description: "Datetime must be at least to day."
* severity = #error
* expression = "$this is dateTime implies $this.toString().length() >= 10"

Invariant: tw-core-4
Description: "If there is no component or hasMember element then either a value[x] or a data absent reason must be present."
* severity = #error
* expression = "(component.empty() and hasMember.empty()) implies (dataAbsentReason.exists() or value.exists())"

Invariant: tw-core-5
Description: "SHALL use UCUM for coded quantity units."
* severity = #error
* expression = "ofType(Quantity).system.empty() or ofType(Quantity).system = 'http://unitsofmeasure.org'"

Invariant: tw-core-6
Description: "應至少提供姓名或關係。"
* severity = #error
* expression = "name.exists() or relationship.exists()"

Invariant: tw-core-7
Description: "Observation.code 72166-2|Tobacco smoking status or 11367-0|History of Tobacco use SHALL use valueCodeableConcept。"
* severity = #error
* expression = "code.coding.where(code in '72166-2'|'11367-0').exists() implies value.is(CodeableConcept)"

Invariant: tw-core-8
Description: "For Observation.code 401201003|Cigarette pack-years or 782516008|Number of calculated smoking pack years SHOULD use valueQuantity。"
* severity = #warning
* expression = "code.coding.where(code in '401201003'|'782516008').exists() implies value.is(Quantity)"

Invariant: tw-core-9
Description: "Member Id in Coverage.identifier or Coverage.subscriberId SHALL be present"
* severity = #error
* expression = "identifier.type.coding.where(system='http://terminology.hl7.org/CodeSystem/v2-0203' and code='MB').exists() or subscriberId.exists()"
* xpath = "f:identifier or f:subscriberId"

Invariant: tw-core-10
Description: "SHOULD have a translation to the NDC value set"
* severity = #warning
* expression = "vaccineCode.coding.where(system='http://hl7.org/fhir/sid/cvx').exists() implies vaccineCode.coding.where(system='http://hl7.org/fhir/sid/ndc').exists()"
* xpath = "(exists(f:vaccineCode/f:coding/f:system[@value='http://hl7.org/fhir/sid/ndc']) and exists(f:vaccineCode/f:coding/f:system[@value='http://hl7.org/fhir/sid/cvx'])) or exists(f:vaccineCode/f:coding/f:system[@value='http://hl7.org/fhir/sid/cvx'])not()"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice"
* extension[0].valueBoolean = true

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/includes/quickstart-intro.md

---

**快速啟動**{:#search style="font-size: 20px;"}
<a name="quick-start"> </a>

---


---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/includes/quickstart-note.md

---

**快速啟動**{:#search style="font-size: 20px;"}
<a name="quick-start"> </a>

---
   
以下概述了此Profile所需的RESTful FHIR互動功能。有關TW Core IG支援的RESTful互動功能的完整清單，請參閱[TW Core Server能力聲明](CapabilityStatement-CapabilityStatementTWCoreServer.html)。

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/intro-notes/StructureDefinition-AllergyIntolerance-twcore-intro.md

{% include quickstart-intro.md %}

## Resource AllergyIntolerance - 內容

這是指一個人在接觸某種物質後，可能會出現的對該個人來說獨有的有害或不想要的生理反應的風險。

### 範圍與使用

這是一份關於臨床評估過敏或不耐症的紀錄；一個人對於在未來接觸特定物質或類別物質時，可能出現不良反應的傾向或潛在風險。

當這種傾向被識別出來時，會記錄有關反應事件的資訊或證據，該事件是由於個人接觸已識別的物質或類別物質而觸發的，特點是對該個人來說特有的有害或不希望的生理反應。

物質包括但不限於：對個人以適當劑量正確施用的治療性物質、食物、從植物或動物中提取的材料（material）、或昆蟲叮咬的毒液。

**國際HL7給FHIR審稿人的注意事項，實作者亦可留意**

目前這個 resource （R4版） 面臨的開放性問題包括：

* 這個 resource 代表一種對某些物質的過敏狀態，包含支援事件和（或）症狀的清單，但與事件通報沒有直接關係；當 FHIR 中加入不良事件通報 resource（s）和（或） profiles 時，將重新評估此事。
* 其他的 HL7 模型和 openEHR archetype 包含了「暴露日期（exposure date）」，但在調查的任何系統中都未發現此資料項目，因此它將被當作一個擴充資料項目（更適合於不良事件通報）。

### 界限與關聯

這個 resource 提供一個統一的位置，在健康紀錄中記錄關於對某些物質或產品的不良反應的各種臨床描述，包括：

* 評估個人在再次接觸時可能會有的潛在反應
* 紀錄每次接觸後反應的詳細資訊，如果沒有反應也要記錄下來

使用這個 resource 來記錄有關不良反應風險存在的資訊，目的是：

* 支援個人的直接臨床照護
* 作為管理不良反應或過敏/不耐症清單的一部分
* 促進有關不良反應傾向和事件的資訊交流
* 幫助通報不良反應
* 支援如臨床決策支援和警示等電腦化的基於知識的活動

用於記錄對廣泛物質的不良反應資訊，包括：生物和血品、藥物製劑中的賦形劑（Excipients）、食物、金屬鹽、以及有機化學化合物。

不良反應可能是：

* 過敏（通常是I型過敏反應，加上其他「類過敏」反應，包括偽過敏）
* 不耐症（通常是非免疫性的不良反應，這些反應沒有被確定或認為是過敏或「類過敏」的，並且在某種程度上是特異性的或個別特有的[即在類似情況下，並非預期會在大多數或所有病人中發生的反應]）

在臨床實務中，區分過敏或不耐症是困難的，可能也不實際。通常「過敏」一詞被相當泛化地使用，可能與「不耐症」重疊，這兩個概念之間的界限可能不是很明確或被理解。如上所述，「不耐症」一詞通常應用於不良反應的傾向，這種傾向要麼被確定（在可能的範圍內），要麼被認為不是過敏或「類過敏」的。如果無法確定某個特定的傾向狀態是過敏還是不耐症，那麼應該從 resource 中省略該類型（<code>type</code>）資料項目。識別反應的<code>type</code>不代表對病人的嚴重性或傷害風險的評估，若要進行這類的評估，應該透過記錄臨床表現和評估危急程度來明確表達。

每個人對過敏或不耐症的敏感性是獨特的，這與食物或藥物的毒性、過量、藥物間的交互作用等情況引起的反應不同（這些是在相同情況下任何人都可能發生的反應）。

在沒有識別出可能導致的物質（包括藥品產品）或物質類別的情況下，不應記錄不良反應事件或表現的風險。如果不確定某一特定物質是原因，可以使用「<code>verificationStatus</code>」資料項目來記錄這種不確定性。如果有多個可能的物質可能導致反應/表現，則應為每種物質使用這個 resource 的單獨實例進行記錄，並將「<code>verificationStatus</code>」設定為「未確認（`unconfirmed`）」，以便在臨床系統中支援不良反應檢查。如果後來證明某種物質、劑量或類別不是某一反應的原因，則「<code>verificationStatus</code>」可以修改為「否認其正確性/已駁斥（`refuted`）」。

這個 resource 旨在允許記錄關於特定物質（例如：阿莫西林、牡蠣或蜜蜂蜇傷毒素）或藥品產品，或者物質的類別（例如：青霉素）的資訊。如果記錄了物質類別，則可以根據每次接觸的情況記錄確切的物質。

這個 FHIR resource 的範圍專注於識別一個在大多數臨床系統中使用或適合大多數常見臨床情境的實用資料集；如果需要，可以使用擴充資料項目來添加更多細節。在需要擴充的臨床情況包括：詳細的過敏科/免疫科評估、通報給監管機構、或在臨床試驗中使用等。

在健康記錄裡記錄任何不良反應涉及臨床評估，評估的是如果個人將來再次接觸到相同的物質/產品/類別時，可能會面臨的潛在風險。換句話說，這相當於一個相對的不宜使用提示，如果沒有更多資訊顯示更高的潛在風險，則應將預設的「危急程度（<code>criticality</code>）」設定為「低風險（Low Risk）」。如果醫生認為讓個人再次接觸該物質/產品不安全，比如發生生命威脅的過敏性休克，那麼「危急程度（<code>criticality</code>）」應該改為「高風險（High Risk）」。

向監管機構提交的正式不良事件報告是一份包含了除了不良反應具體細節外還有廣泛資訊的文件。這份報告可以使用這個 resource 的部分內容，並根據不同地區的要求添加額外資料。

不良反應或過敏/不耐症清單是記錄了個人對未來接觸某物質、產品、類別時所有已識別的不良反應傾向，並提供了查看每次反應事件細節（例如：反應表現）的機會。

當臨床醫生需要評估未來反應的可能性時，第一手重要資訊包括：

- 關於之前接觸後臨床表現的聲明
- 資訊/報告來源
- 「危急程度」標記

從每次接觸事件中，我們可以獲得更進一步的資訊，並且如果記錄中有的話，還可以連接到其他的詳細資訊，如病史、檢查和診斷等。

**過敏不耐症與風險評估**

AllergyIntolerance 描述的是對某種物質或產品有反應的特定風險類型，而[風險評估（RiskAssessment）](https://hl7.org/fhir/R4/riskassessment.html) 則是針對個人的一般風險，這種風險通常不是基於某種反應。

**過敏或不耐症與免疫接種反應**

[疫描接種反應（<code>Immunization.reaction</code>）](https://hl7.org/fhir/R4/immunization-definitions.html#Immunization.reaction) 可能表示某人對某物質過敏或不耐症。如果確定是這樣的情況，應該另外創建一筆過敏或不耐症（AllergyIntolerance）紀錄來指出這一點，因為大部分系統不會去查詢過去的疫苗接種反應。

**注意誤用的情況**
* 過敏或不耐症清單是為了保障病人安全而設，用來在開藥和安排飲食時提供決策支援，並指導臨床治療。但是那些由如光、熱、冷、壓力、振動等物理刺激引發的反應，這些可能看起來像是過敏或不耐症反應，應該在問題清單中作為[病情、問題或診斷（Condition）](StructureDefinition-Condition-twcore.html)紀錄，而不是用過敏或不耐症（AllergyIntolerance）來記錄。
* 不應該用來記錄不良事件，這包括臨床流程、介入措施或產品的失敗情況。例如：錯誤使用藥物或物質、給藥劑量不正確、標籤錯誤、因介入措施或處置導致的傷害、藥品過量/中毒等情況。
* 不應作為不良事件報告的代用品。如上所述，它可以作為不良事件報告的一部分使用。
* 不適合用來記錄警示。警示應該使用[標記（Flag）](https://hl7.org/fhir/R4/flag.html) 或在涉及特定事件時，使用[檢測到的問題（DetectedIssue）](https://hl7.org/fhir/R4/detectedissue.html)。
* 不應用於記錄治療無效的情況。

這個 resource 被 [醫療不良事件（AdverseEvent）](https://hl7.org/fhir/R4/adverseevent.html#AdverseEvent)、[臨床臆斷（ClinicalImpression）](https://hl7.org/fhir/R4/clinicalimpression.html#ClinicalImpression)、[家庭成員病史（FamilyMemberHistory）](https://hl7.org/fhir/R4/familymemberhistory.html#FamilyMemberHistory) 和 [營養醫令（NutritionOrder）](https://hl7.org/fhir/R4/nutritionorder.html#NutritionOrder)參照。

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/intro-notes/StructureDefinition-AllergyIntolerance-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-AllergyIntolerance-id.html)** 查詢所有AllergyIntolerance：                
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/AllergyIntolerance?_id=[id]`  
    `GET [base]/AllergyIntolerance/[id]`

    例子：  
      (1) GET [base]/AllergyIntolerance?_id=all-nut-example  
      (2) GET [base]/AllergyIntolerance/all-nut-example

2. **建議應該（SHOULD）** 支援透過查詢參數 **[`clinical-status`](SearchParameter-AllergyIntolerance-clinical-status.html)** 查詢所有AllergyIntolerance：      
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/AllergyIntolerance?clinical-status=[code]`

    例子：  
      (1) GET [base]/AllergyIntolerance?clinical-status=active

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/intro-notes/StructureDefinition-Bundle-document-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Bundle-id.html)** 查詢所有Bundle：               
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Bundle?_id=[id]`  
    `GET [base]/Bundle/[id]`

    例子：  
      (1) GET [base]/Bundle?_id=bun-document-example  
      (2) GET [base]/Bundle/bun-document-example


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`identifier`](SearchParameter-Bundle-identifier.html)** 查詢所有Bundle：              
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Bundle?identifier={system|}[code]`

    例子：  
      (1) GET [base]/Bundle?identifier=https://www.cdc.gov.tw/|01010905170415100000000

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/intro-notes/StructureDefinition-Bundle-message-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Bundle-id.html)** 查詢所有Bundle：               
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Bundle?_id=[id]`  
    `GET [base]/Bundle/[id]`

    例子：  
      (1) GET [base]/Bundle?_id=bun-message-request-example  
      (2) GET [base]/Bundle/bun-message-request-example


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`identifier`](SearchParameter-Bundle-identifier.html)** 查詢所有Bundle：              
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Bundle?identifier={system|}[code]`

    例子：  
      (1) GET [base]/Bundle?identifier=https://www.cdc.gov.tw/|01014857930415100000000

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/pagecontent/capabilitystatements.md


{% include table-capabilitystatements.xhtml %}

---

File: repos/cctwFHIRterm_SLASH_MOHW_TWCoreIG_Build/input/pagecontent/downloads.md

<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://hl7.org/fhir ../../input-cache/schemas/R5/fhir-single.xsd">
{% assign excludexml = site.data.info.excludexml | downcase | slice: 0 %}
{% assign excludejson = site.data.info.excludejson | downcase | slice: 0 %}
{% assign excludettl = site.data.info.excludettl | downcase | slice: 0 %}
	<p>
    <a href="full-ig.zip">點我</a>下載整個實作指引
	</p><p>
    <a href="package.tgz">點我</a>下載Package
	</p>
	<table>
		<tbody>
			<tr>
				<th>文件定義</th>
{% unless excludexml == 'y' %}
				<td>
					<a href="definitions.xml.zip">XML</a>
				</td>
{% endunless %}
{% unless excludejson == 'y' %}
				<td>
					<a href="definitions.json.zip">JSON</a>
				</td>
{% endunless %}
{% unless excludettl == 'y' %}
				<td>
					<a href="definitions.ttl.zip">Turtle</a>
				</td>
{% endunless %}
			</tr>
			<tr>
				<th>範例</th>
{% unless excludexml == 'y' %}
				<td>
					<a href="examples.xml.zip">XML</a>
				</td>
{% endunless %}
{% unless excludejson == 'y' %}
				<td>
					<a href="examples.json.zip">JSON</a>
				</td>
{% endunless %}
{% unless excludettl == 'y' %}
				<td>
					<a href="examples.ttl.zip">Turtle</a>
				</td>
{% endunless %}
			</tr>
		</tbody>
	</table>
</div>

---

