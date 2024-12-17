// File: input/pagecontent/capabilitystatements.md


{% include table-capabilitystatements.xhtml %}

---

// File: input/pagecontent/downloads.md

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

// File: input/pagecontent/ImplementationGuide-tw.gov.mohw.twcore.md

<table class="grid rwd-table" style="background-color: #ffffe6;width: 100%;">
    <tbody>
    <tr>
      <td colspan="4"><i>Official URL</i>: <span class="copy-text">https://twcore.mohw.gov.tw/ig/twcore/ImplementationGuide/tw.gov.mohw.twcore<button title="" class="btn-copy" data-clipboard-text="https://twcore.mohw.gov.tw/ig/twcore/ImplementationGuide/tw.gov.mohw.twcore" data-original-title="複製URL"></button></span></td>
      <td><i>Version</i>:<span class="copy-text">0.3.2 <button title="" class="btn-copy" data-clipboard-text="https://twcore.mohw.gov.tw/ig/twcore/ImplementationGuide/tw.gov.mohw.twcore|0.3.2" data-original-title="複製含版本資訊的URL"></button></span></td>
    </tr>
    <tr>
      <td colspan="4"><i>NPM package name</i>: tw.gov.mohw.twcore</td>
      <td><i>Computable Name</i>: <span style="font-family: monospace;">TWCore</span></td>
    </tr>
  </tbody>
</table>

- [XML](ImplementationGuide-tw.gov.mohw.twcore.xml)
- [JSON](ImplementationGuide-tw.gov.mohw.twcore.json)

#### Cross Version Analysis

{% capture cross-version-analysis %}{% include cross-version-analysis.xhtml %}{% endcapture %}{{ cross-version-analysis | remove: '<p>' | remove: '</p>'}}

#### IG Dependencies

This IG Contains the following dependencies on other IGs.

{% include dependency-table.xhtml %}

#### Global Profiles

{% include globals-table.xhtml %}

#### Copyrights

{% capture ip-statement %}{% include ip-statements.xhtml %}{% endcapture %}

{{ ip-statement | remove: '<p>' | remove: '</p>'}}

---

// File: input/pagecontent/index.md

<div class="bg-warning" style="ol { counter-reset: item } li { display: block } li:before { content: counters（item, ">
因考量實作需求，於2024/12/12異動以下內容：
<ol>  
	<li>因實務需求，工研院次世代數位醫療平台專案辦公室新增<a href="twcdi.html">TWCDI</a>內容說明。</li>
  	<li>更新代碼系統<a href="CodeSystem-icd-10-cm-2023-tw.html">臺灣健保署2023年中文版ICD-10-CM</a>，並新增property："USE" 表「代碼有效/無效」以利專案使用。</li>
	<li>更新代碼系統<a href="CodeSystem-icd-10-pcs-2023-tw.html">臺灣健保署2023年中文版ICD-10-PCS</a>，並新增property："USE" 表「代碼有效/無效」以利專案使用。</li>
	<li>更新代碼系統<a href="CodeSystem-medical-service-payment-tw.html">臺灣健保署醫療服務給付項目</a>，以利專案使用。</li>
</ol>
請留意這些異動，以避免影響您的實作。
</div>


### 介紹

<div style="padding-left: 10px;">
<p>臺灣核心實作指引（Taiwan Core Implementation Guide，簡稱TW core IG）採用HL7® FHIR® standard（Fast Healthcare Interoperability Resources）IG建置方法，在<a href="http://hl7.org/fhir/R4/"  target="_blank">FHIR R4.0.1</a>之標準基礎上，參考了<a href="https://build.fhir.org/ig/HL7/fhir-ips/" target="_blank">國際病人摘要（International Patient Summary，IPS）1.1.0-CI Build</a>及<a href="https://www.hl7.org/fhir/us/core/" target="_blank">美國核心實作指引（US Core Implementation Guide）</a>，進一步定義適用於臺灣健康照護資料交換需求的Resources（類似資料表）、其中的資料項目（意即欄位）、基數（意即0..1、0..*、1..1或1..*）、資料類型（文字、日期時間、代碼等）、可綁定的代碼（及其綁定的強制程度）及查詢參數等，旨在提供健康照護資訊系統開發與實作者以TW Core IG為基礎，再進一步訂定其實務專案所需之資料交換格式以應用於專案中。TW Core IG的實作方式有兩種：</p>
<ol>
<li><strong>僅支援Profiles</strong>：系統僅支援TW Core Profiles以呈現健康照護相關資料。</li>
<li><strong>支援Profiles + RESTful互動</strong>：系統支援TW Core Profiles及RESTful互動以呈現健康照護相關資料。</li>
</ol>
</div>

### 背景

<div style="padding-left: 10px;">
<p>TW Core IG由衛生福利部(以下簡稱衛福部)資訊處2022年3月招標之「111年度智慧健康雲專案辦公室營運案專案」經費支應下建置，TW Core IG註冊於<a href="http://fhir.org/guides/registry/" target="_blank">國際平臺</a>及衛生福利部資訊處之<a href="https://twcore.mohw.gov.tw/twregistry/#/data" target="_blank">IG管理平臺</a>以供查找與參考。</p>
<p>鑑於TW Core IG設計之初，FHIR R5處於投票階段、國際應用多採用 R4 、以及R5相關配套工具尚未成熟，故TW Core IG的設計主要以FHIR R4.0.1 為基礎，並同時參考其他國家作法以規劃TW Core IG 網站。為使制訂之IG符合臺灣的實作需求，TW Core IG 內容將在未來的版本中持續更新，各版本亦將附有版本異動說明。</p></div>


### 衛福部資訊處在TW Core IG的角色與發展主責

<div style="padding-left: 10px;">衛福部資訊處作為台灣醫療及健康照護資訊標準化的主要推動單位，在TW Core IG的制定和發展中扮演了核心角色，主要包括：
	<ul>
	<li><strong><span>領導 TW Core IG 的標準制定</span></strong><span>：積極協調其所屬機關、平行機構、醫療機構、學術單位及相關專業組織，以確保 TW Core IG 能夠滿足台灣的醫療服務、健康照護、公共衛生、臨床研究等領域資訊交換的核心資料需求，並與國際標準（如 FHIR及相關配套專門術語標準）接軌。</span></li>
	<li><strong><span>監督國際標準專門術語之維護與運作</span></strong><span>：負責監督國際標準專門術語（如 SNOMED CT、LOINC 等）的維護與更新，確保這些術語在 TW Core IG 的應用中保持一致性與準確性，並且與國際標準的變動同步發展，以促進台灣醫療資訊體系的國際接軌。</span></li>
	<li><strong><span>納入資訊安全相關規範於TW Core IG</span></strong><span>：積極將各種交易的稽核日誌(audit logs)、</span><a href="https://http://hl7.org/fhir/R4/security.html#http" target="_blank" rel="noopener"><span>FHIR通訊安全（Communications Security）</span></a><span>、</span><a href="http://www.hl7.org/fhir/smart-app-launch/history.cfml" target="_blank" rel="noopener"><span>SMART App執行框架（launch framework）</span></a><span>納入TW Core IG的資訊安全性規範，以提升台灣醫療機構在智慧型應用程式和跨機構數據共享中的應用能力，從而支持更安全且一致的健康資訊交換，強化互通性和資料整合。</span></li>
	<li><strong><span>推廣 TW Core IG 於實務專案的應用</span></strong><span>：致力於推動相關補助計畫，提供可公用的標準技術工具、並鼓勵醫療機構及相關機構採用及繼承 TW Core IG，實現台灣醫療資料的高度互通與共享，以增進資料使用效率及醫療品質。</span></li>
	</ul>
	<p><span>衛福部資訊處的長期任務：</span></p>
	<ul>
	<li><strong><span>持續更新與維護</span></strong><span>：根據國內外醫療需求、技術進步及國際標準的變化，定期更新TW Core IG及相關國際標準專門術語，並適時納入必要的規範，以確保 TW Core 標準不僅符合當前醫療資訊技術的發展，亦能滿足未來醫療服務的需求。</span></li>
	<li><strong><span>推廣與應用</span></strong><span>：協助全台醫療機構及相關單位採用並遵循 TW Core 標準，以確保這些標準被廣泛應用於臨床與公共衛生資料的傳輸與共享，促進台灣醫療資訊的整體應用效率。</span></li>
	<li><strong><span>促進全台醫療資訊的可互通性</span></strong><span>：持續強化台灣醫療資訊的標準化，確保醫療資料能在不同機構間無縫共享，以提升醫療服務品質。</span></li>
	</ul>
</div>


### 繼承TW Core IG版本的考量

<div style="padding-left: 10px;">
	<p>關於實務專案型FHIR IG是否需要繼承最新版本TW Core IG或者要等<a href="https://build.fhir.org/ig/cctwFHIRterm/MOHW_TWCoreIG_Build/index.html" target="_blank">TW Core IG持續建置版本 (CI-build) </a>正式定版後作繼承？通常，各專案可依據各自專案的需求決定，但 IG 設計師需審慎評估，以決定是否繼承最新版TW Core IG：
	<br>(1) 須留意TW Core IG的CI-build版本是否影響專案資料欄位或值集範圍設計，建議可預先在設計階段納入CI-build的設計概念及內容，待CI-Build發布新版時可直接繼承，以減少更新繼承對規格設計造成影響、
	<br>(2) 須評估專案型IG是否需要<a href="https://emr.mohw.gov.tw/myemr/Html/EmrInfo#emrinfo_0" target="_blank">申請註冊</a>於衛生福利部資訊處 <a href="https://twcore.mohw.gov.tw/twregistry/#/data" target="_blank">IG 管理平臺</a>以供各界參閱以及讓您的專案IG出現於國際HL7提供的線上免費驗證工具 (<a href="https://validator.fhir.org/" target="_blank">https://validator.fhir.org/</a>) 中的IG驗證清單中，增加驗證的方便性。若要申請註冊且無特殊理由下，則建議使用審查期間最新版之TW Core IG版本。</p>
	<p>不論如何，基於全國健康照護資料標準化及促進資料可互通，<b>「強力建議」</b>實務專案型IG 繼承最新版TW Core IG，以確保您的IG規格與全國一致，亦可避免後續人工檢核專案IG與TW Core IG是否一致之工作量。</p>
	<p>2024年5月起依據衛生福利部資訊處電子病歷標準發展工作小組決議，預計每年正式更版一至二次，由於資料標準化是一個持續演進的過程，TW Core IG 亦會持續接受各界意見並評估適用性後放修改於<a href="https://build.fhir.org/ig/cctwFHIRterm/MOHW_TWCoreIG_Build/index.html" target="_blank">TW Core IG持續建置版本 (CI-build) </a>，經確認後才會更新為正式版本，需請 IG 設計師 留意此一異動對您所設計IG之影響。</p>
</div>


### TW Core Profiles的成熟度（Maturity Level）

<div  style="padding-left: 10px;">

所有經進一步定義的 Resources 或 Profiles，皆稱為 Profiles，各 Profiles 依據其可被在地實際採用的程度與不再修改的程度，將標記其「成熟度」，被稱之為FMM（根據眾所周知的CMM级別）。FMM等級（level）可被實作者用来判斷一個規範文件的進階程度，也就是穩定度。以下是已被定義的FMM等級，實務上會視情況調整以符合定義：</p>

<p><strong>DRAFT 0</strong> 此Resource或Profile（規範文件） 已被發佈於目前的建置，這個等級意即草稿。</p>
<p><strong>FMM 1</strong> 滿足DRAFT 0條件，而且此規範文件在建置的過程沒有任何的警語，負責的工作小組已指明他們認為這份規範文件基本上已完成並可供實作使用。</p>
<p><strong>FMM 2</strong> 滿足FMM 1條件，而且此規範文件已被測試，並成功支援至少三套獨立系統之間的可互操作性（意即至少有三套系統實作此規範成功地互通資料），這些系統利用大部分的規範文件（例如至少80%的核心資料），使用基於此規範文件的至少一個聲明範圍的半真實資料及情境（例如在聯測）。這些互操作結果要求被報告及被工作小組接受。</p>
<p><strong>FMM 3</strong> 滿足FMM 2條件，而且此規範文件已被工作小组驗證應遵從的《<a href="https://confluence.hl7.org/display/FHIR/Conformance+QA+Criteria">Conformance Resource Quality Guidelines</a>》；已經通過一輪正式投票；至少有10位來自至少3家機構不同的實作者提出意見，並造成至少一項實質性的改變。</p>
<p><strong>FMM 4</strong> 滿足FMM 3條件，而且此規範文件已正式出版（例如：FHIR IG v1.0.0），並已實際應用於多個雛型專案。同時，負責的工作小組同意此規範文件足夠穩定，在後續的非向下相容（non-backward compatible）的異動中需與實作者協商與諮詢。</p>
<p><strong>FMM 5</strong> 滿足FMM 4條件，而且此規範文件於在FMM 1以上等級（意即：試用等級）的兩個正式出版品發佈週期中出版，並已實際應用於至少五套獨立的產品系統。</p>
<p><strong>Normative（規範）</strong> 此規範文件已被認定為穩定，不再作修改。</p>

<p>本版本TW Core IG 中所有Profiles的FMM等級如下：</p>
<div  style="padding-left: 10px;">
<table class="grid">
<thead>
  <tr>
	<th style="width:5%">成熟度</th>
	<th style="width:90%">TW Core Profiles名稱</th>
	<th style="width:5%">數量</th>
  </tr>
</thead>
<tbody>
  <tr>
	<td><span style="font-weight:bold">FMM1</span></td>
	<td>BundleDocument、CarePlan、CareTeam、Coverage、ImplantableDevice、Goal、Immunization、MedicationStatement、ObservationAverageBloodPressure、ObservationCareExperiencePreference、ObservationClinicalResult、ObservationOccupation、ObservationPregnancyIntent、ObservationPregnancyStatus、ObservationScreeningAssessment、ObservationSexualOrientation、ObservationSimple、ObservationSmokingStatus、ObservationBloodPressure、ObservationBMI、ObservationTreatmentInterventionPrference、ObservationPediatricBMIforAge、ObservationPediatricWeightforHeight、ObservationBodyTemperature、ObservationBodyWeight、ObservationHeadCircumference、ObservationHeartRate、ObservationPulseOximetry、ObservationRespiratoryRate、ObservationPediatricHeadOccipitalFrontalCircumferencePercentile、OrganizationGovt、OrganizationHosp、OrganizationCo、PractitionerRole、Procedure、Provenance、QuestionnaireResponse、RelatedPerson、ServiceRequest、Specimen</td>
	<td>40</td>
  </tr>
  <tr>
	<td><span style="font-weight:bold">FMM2</span></td>
	<td>AllergyIntolerance、BundleMessage、DocumentReference、ImagingStudy、Location、MedicationDispense</td>
	<td>6</td>
  </tr>
  <tr>
	<td><span style="font-weight:bold">FMM3</span></td>
	<td>Bundle、Composition、Condition、DiagnosticReport、Encounter、Media、Medication、MedicationRequest、ObservationLaboratoryResult、ObservationVitalSigns、Organization、Patient、Practitioner、Specimen、CodingTW、CodeableConceptTW、AddressTW</td>
	<td>17</td>
  </tr>
</tbody>
</table>
</div>
</div>

### 如何閱讀這個實作指引（IG）

<div  style="padding-left: 10px;">
<p>TW Core IG之網站架構圖如下圖所示。各功能說明如下：</p>

<img class="figure-img img-responsive img-rounded center-block" src="index/structure.jpg" alt="IG架構圖" style="display: block;margin-left: auto;margin-right: auto;width: 70%;"/>
<div style="clear:both;"></div>

<ul>
	<li><strong><a href="index.html">應用說明</a></strong>：TW Core IG介紹及背景說明。</li>
	<li><strong><a href="artifacts.html">規範文件</a></strong>
	<ul>
		<li><strong><a href="capabilitystatements.html">能力聲明</a>
			</strong>：應用TW Core IG於建置業務目的使用的FHIR Server時，該FHIR Server必須及建議應該支援的操作功能。
		</li>
		<li><strong><a href="searchparameters-and-operation.html">查詢參數及操作定義</a>
			</strong>：查詢FHIR Server的Profiles時，針對各Profiles可使用的查詢參數及操作定義。
		</li>
		<li><strong><a href="models.html">邏輯模型</a>
			</strong>：TW Core IG的所有邏輯模型（Logical Models），各邏輯模型會定義相應情境下使用的所有資料欄位。為了便於實作者快速理解，資料欄位會使用易於理解的命名，實作者再透過邏輯模型中的功能頁籤「Mappings」瞭解各資料欄位實際使用本IG的哪個Profiles的哪個資料項目（element）。
		</li>
		<li><strong><a href="profiles-and-extensions.html">FHIR Profiles及Extensions</a></strong>：
			<ul>
				<li>TW Core IG的所有Profiles之定義與範例及Extensions。</li>
				<li>各資料項目不同實作強制程度的Terminology。</li>
				<li>各資料項目的限制（Constraints）。</li>
				<li>查詢依據TW Core IG實作之FHIR Server的特定Profiles時，可使用的查詢參數。</li>
				<li>有哪些Profiles具有查詢參數以及Server必須支援哪些必要的查詢參數功能。</li>
			</ul>
		</li>
		<li><strong><a href="terminologies.html">專門術語</a>
			</strong>：TW Core IG網站所使用的專門術語，包括代碼系統（Code Systems）及值集（Value Sets），內容主要依據全國專門術語服務平臺（TW terminology services）建置。
		</li>
	</ul>
	</li>
	<li><strong><a href="examples.html">範例</a></strong>：遵從TW Core IG所定義Profiles之範例。</li>
	<li><strong><a href="downloads.html">結構定義與範例檔下載</a></strong>：實作者若不偏好使用FHIR RESTful API驗證資料是否遵從Profiles，可直接下載所需的格式驗證檔，包括XML、JSON及Turtle三種格式，亦可於此下載完整範例。</li>
	<li><strong><a href="security.html">安全性</a></strong>：主要說明採用TW Core IG網站進行實作時，有關資料存取授權的作法。</li>
	<li><strong><a href="validates.html">驗證教學</a></strong>：如何驗證實作檔是否遵從TW Core IG規範。</li>
	<li><strong><a href="https://twcore.mohw.gov.tw/ig/twcore/history.html">版本異動</a></strong>：若TW Core IG網站的版本有所異動，皆可透過<a href="https://twcore.mohw.gov.tw/ig/twcore/history.html">異動說明頁</a>得以瞭解版本間的異動差異。</li>
</ul>
</div>

----

### 專有名詞定義

#### Profiles相關

<div  style="padding-left: 10px;">
<table class="grid">
<thead>
  <tr>
	<th style="width:10%">英文名</th>
	<th style="width:10%">中文名</th>
	<th style="width:80%">說明</th>
  </tr>
</thead>
<tbody>
  <tr>
	<td><span style="font-weight:bold">Name</span></td>
	<td>名稱</td>
	<td>resource的資料項目名稱（意即XML元素名稱；JSON或RDF屬性名稱）。有些名稱末端為[x]，圖示為<img class="figure-img img-responsive img-rounded center-block" src="icon_choice.gif" alt="multipleBirth[x]範例" />，意即可以選擇適用的資料類型表述該資料項目內容值,故需依據資料類型填入適當的內容值，例如Patient.multipleBirth[x]。<br/>
	<img class="figure-img img-responsive img-rounded center-block" src="index/multipleX.png" alt="multipleBirth[x]範例" width="250px"/>
	<br/>如果系統只知病人是否多胞胎，則資料項目名稱為multipleBirthBoolean，內容值為「true」；如果系統中有病人多胞胎之出生順序為第2序位，則資料項目名稱為multipleBirthInteger，內容值為「2」。更多符號說明，請參閱<a href="http://hl7.org/fhir/R4/formats.html#table" target="_blank"><span style="color:#905">FHIR官網相關說明</span></a>。</td>
  </tr>
  <tr>
	<td rowspan="5"><span style="font-weight:bold">Flags</span></td>
	<td>標記</td>
	<td>一組有關影響實作者如何操作資料項目的資訊，範例如下。</td>
  </tr>
  <tr>
	<td><img class="figure-img img-responsive img-rounded center-block" src="index/MustSupport.png" alt="A MustSupport image"/></td>
	<td>必須支援（MustSupport），表示用戶端（Client）所傳送之資料項目，伺服端（Server）必須有能力接收並儲存此資料項目。繼承使用時可再依據專案需求，對MS做出延伸定義，但必須於應用說明說明其延伸定義的具體說明。詳可參閱<a href="http://hl7.org/fhir/R4/conformance-rules.html#mustSupport" target="_blank"><span style="color:#905">MustSupport</span></a>。</td>
  </tr>
  <tr>
	<td><img class="figure-img img-responsive img-rounded center-block" src="index/modifier.png" alt="A modifier image"/></td>
	<td>表示此資料項目可能會完全修正或改變其他資料項目的意涵，需特別留意。詳可參閱<a href="http://hl7.org/fhir/R4/conformance-rules.html#isModifier" target="_blank"><span style="color:#905">Modifier</span></a>。</td>
  </tr>
  <tr>
	<td><img class="figure-img img-responsive img-rounded center-block" src="index/summary.png" alt="A summary searches image"/></td>
	<td>表示此資料項目為摘要的一部分，詳可參閱<a href="http://hl7.org/fhir/R4/search.html#summary" target="_blank"><span style="color:#905">Summary searches</span></a>。</td>
  </tr>
  <tr>
	<td><img class="figure-img img-responsive img-rounded center-block" src="index/constraints.png" alt="A contraint image"/></td>
	<td>表示此資料項目受規範設定的限制（constraints）影響，例如：Patient.name的限制為「name.text（完整中文姓名）」或name.family（英文姓）或者兩者必須填寫」，詳可參閱<a href="http://hl7.org/fhir/R4/conformance-rules.html#constraints" target="_blank"><span style="color:#905">Constraints</span></a>。
	<br/>
	<img class="figure-img img-responsive img-rounded center-block" src="index/constraints_example1.png" alt="constraints" width="600px" /></td>
  </tr>
  <tr>
	<td><span style="font-weight:bold">Card.</span></td>
	<td>基數</td>
	<td>此資料項目允許出現在這個resource的最小至最大次數，意即例如某一資料項目的基數若為0..1，表示可不填寫或至多填入1筆；若為1..1，表示必須（只能）填入1筆；若為0..*，表示可不填寫或填入多筆（不限筆數）；若為1..*，表示至少要填入1筆或填入多筆（不限筆數）。</td>
  </tr>
  <tr>
	<td><span style="font-weight:bold">Type</span></td>
	<td>資料類型</td>
	<td>資料項目的資料類型（可超連結至該型別的定義），例如：boolean、integer、dateTime等。</td>
  </tr>
  <tr>
	<td><span style="font-weight:bold">Description &amp;Constraints</span></td>
	<td>描述與限制</td>
	<td>此資料項目的描述及詳細的限制。尤其編碼的資料項目可使用何種代碼填寫，如果有特定需要綁定的代碼，則會以<span style="font-weight:bold">Binding</span>陳述。</td>
  </tr>
</tbody>
</table>
</div>

#### 限制與綁定值集（ValueSet）

<div  style="padding-left: 10px;">
如下圖所示，Patient.name的限制為「name.text（完整中文姓名）」或name.family（英文姓）或者兩者必須填寫」；Patient.name.use要求使用NameUse這個值集，而且要求使用（Required）使用該值集中的任一代碼，TW Core Patient規定必須填入「official」。

<img class="figure-img img-responsive img-rounded center-block" src="index/constraints_example2.png" alt="constraints" width="800px"/>
<div style="clear:both;"></div>
</div>

#### 綁定值集（value set）的強度

<div  style="padding-left: 10px;">
<table class="grid">
  <thead>
	<tr>
	  <th>英文名</th>
	  <th>中文名</th>
	  <th>說明</th>
	</tr>
  </thead>
  <tbody>
	<tr>
	  <td>Required</td>
	  <td>要求使用</td>
	  <td>應填入值集中的其中一個代碼</td>
	</tr>
	<tr>
	  <td>Extensible</td>
	  <td>可擴充</td>
	  <td>應填入值集中適合的代碼，確定無適合的代碼才可以使用其他值集的代碼來表示。</td>
	</tr>
	<tr>
	  <td>Preferred</td>
	  <td>鼓勵使用</td>
	  <td>鼓勵使用值集中的代碼，但不強制一定要使用此值集，你也可使用其他值集的代碼或單純以文字表示。</td>
	</tr>
	<tr>
	  <td>Example</td>
	  <td>範例</td>
	  <td>可參考值集，但此值集只是針對這個欄位的一個可能值的範例，不預期也不鼓勵使用者一定要使用此值集的代碼。</td>
	</tr>
  </tbody>
</table>
如下圖所示，telecom.system應使用ContactPointSystem代碼表（或稱代碼系統）中的其中一個代碼，telecom.use及gender也都有應該搭配使用的代碼表，否則以此IG驗證格式時會出現錯誤訊息。 <br/>
<img class="figure-img img-responsive img-rounded center-block" src="index/bindingDegree.png" alt="required examples" width="800px" />
<div style="clear:both;"></div>
</div>

#### 遵從度用語（Conformance Language），或可理解為「應遵從規範的程度」

<div  style="padding-left: 10px;">
<p>FHIR使用RFC 2119中定義的遵從度動詞<b>必須（SHALL）</b>、<b>建議應該（SHOULD）</b>和<b>可能可以（MAY）</b>。而FHIR與RFC 2119不同的是，FHIR允許不同的應用程式因使用可選功能的方式而無法達到可互操作性，特別是：  </p>
<div  style="padding-left: 10px;">
<p>1. <b>必須（SHALL）</b>：所有實作絕對要遵從要求。</p>
<p>2. <b>必須沒有（SHALL NOT）</b>：所有實作絕對禁止的要求。</p>
<p>3. <b>建議應該（SHOULD）/建議不應該（SHOULD NOT）</b>：實作者在特定實作的情境下考慮的最佳或建議實作方法；雖然忽略一個項目可能有正當理由，但在選擇不同的程序之前，必須了解並慎重衡量所有含義。</p>
<p>4. <b>可能可以（MAY）</b>：這是實作者真正可選的要求；可根據實作者的決定使用或不使用，不會造成任何影響。</p>
</div>
</div>

#### FHIR發佈和版本劃分
<div  style="padding-left: 10px;">
<p>（資料來源：<a href="https://www.hl7.org/fhir/versions.html" target="_blank">Versions - FHIR v4.3.0 （hl7.org）</a>） </p>
<p>FHIR的新版本的發佈週期約為18-24個月，此頻率主要基於需向實作者諮詢、開發和審查新內容、以及ANSI批准的標準所需的正式投票和核對過程所需的時間，這個發佈週期也確保了有機會將實作者對標準規範早期版本的回饋意見納入後續版本，在滿足實作者需求的情況下，偶爾也會出現時間較短的有限範圍的發佈。</p>
<p>每個新版本都有一個獨特的版本號。FHIR的版本政策是基於<a href="http://semver.org/" target="_blank">Semantic versioning</a>（或可閱讀下表精簡整理），但由於FHIR是一個標準規範，而不是一個軟體API，因此有一些區別。</p>
<table class="grid">
	<tbody>
		<tr>
			<td><b>Major</b></td>
			<td>當你對API進行不相容的修改時</td>
		</tr>
		<tr>
			<td><b>Minor</b></td>
			<td>當你以向下相容的方式增加功能時</td>
		</tr>
		<tr>
			<td><b>Patch</b></td>
			<td>你進行向下相容的錯誤修復時</td>
		</tr>
	</tbody>
</table>
<p>FHIR有單一的開發版本，它經由HL7管理的開發週期，每個主要的開發週期都透過正式投票（或不止一次）後才發佈新的標準規範。從版本控管的角度來看，每份發佈的標準規範都是開發主幹的一個分支，然後隨著HL7對發佈的標準規範的維護，其本身可能會發生進一步的改變（儘管這種改變通常是最小的，僅限於必要的技術修正或安全警示）。</p>
<p>每個FHIR版本由4個部分組成的字串來識別：major.minor.patch-label。
IG的實作亦遵循此規則，其中的major異動將由「<b>電子病歷交換標準工作小組</b>」決定，minor及patch可由相關工作小組討論後作調整：</p>
<table class="grid">
	<thead>
	<tr>
	  <th>版本</th>
	  <th>定義</th>
	  <th>可能時機</th>
	</tr>
  </thead>
	<tbody>
		<tr>
			<td rowspan="6">major</td>
			<td>當HL7將FHIR作為一個重要的新規格版本發佈時，如FHIR試用版（Trial Use）或標準規範版（Normative），就會增加此序號。</td>
			<td></td>
		</tr>
		<tr>
			<td>● 第1次的試用版（Trial Use）是第0版</td>
			<td>以0.1.0開始進行版本控管</td>
		</tr>
		<tr>
			<td>● 第2次發行（DSTU）是第1版</td>
			<td>當所有profiles為FMM2時</td>
		</tr>
		<tr>
			<td>● 第3次發行（STU）是第3版（依據實作者要求以統一major序號故跳過「2」）</td>
			<td>當所有profiles為FMM3時</td>
		</tr>
		<tr>
			<td>● 第4次發行（Normative + STU）是第4版</td>
			<td>當所有profiles為FMM4時</td>
		</tr>
		<tr>
			<td>● 第5次發行（STU）是第5版</td>
			<td>當所有profiles為FMM5時</td>
		</tr>
		<tr>
			<td rowspan="4">minor</td>
			<td>包括微小實質改變的修改（可能包括有限的破壞性改變）</td>
			<td rowspan="4">在既有版本上，新增StructureDefinition內容時</td>
		</tr>
		<tr>
			<td>● 只要有新版本（major）發佈，minor就重置為0，而在開發分支中為1。</td>
		</tr>
		<tr>
			<td>● HL7不會對已發佈的版本進行重大改變（技術性修正），所以這些版本總是有一個版本號X.n.0。</td>
		</tr>
		<tr>
			<td>● 開發中的版本是持續分析、辯論、投票和反復修改，因此可預期STU內容可能會有改變。 FHIR第4B版（僅STU改變）為4.3.0版本。</td>
		</tr>
		<tr>
			<td rowspan="2">patch</td>
			<td>表示更新，包括對先前版本的技術性修正</td>
			<td rowspan="2">針對既有版本的StructureDefinition作修改及刪除時</td>
		</tr>
		<tr>
			<td>● 只要minor版本改變，patch就會被重置為0例如：4.0.1代表對4.0.0版本的第一次技術性修正 。</td>
		</tr>
		<tr>
			<td rowspan="12">label</td>
			<td>版本末端有一個標籤，代表一個正在建立的標準規範的 「工作 」版本，並正在建立到指定的發行版本；例如，5.0.0-ballot1、5.0.0-snapshot2等。</td>
			<td rowspan="12">目前仍持續在修訂與新增TW Core IG內容，故label為cibuild。</td>
		</tr>
		<tr>
			<td>● 標籤前端的序號表示在投票、審查結束後的「預期」版本序號。</td>
		</tr>
		<tr>
			<td>● label可以是任何字串，然而典型的標籤是：</td>
		</tr>
	<tr>
			<td>  ○ 「<b>snapshotN</b>」：由於聯測（connectathon）、投票相依性或其他原因，標準規範的凍結版本。</td>
		</tr>
		<tr>
			<td>  ○ 「<b>ballotN</b>」：在投票過程中使用的凍結版本。</td>
		</tr>
		<tr>
			<td>  ○ 「<b>draftN</b>」：指的是一個為非投票審查或者為了品質保證（QA）目的發佈的凍結版本。</td>
		</tr>
		<tr>
			<td>  ○ 「<b>ci-build</b>」：一個 「特殊」的版本標籤，指的是一個非穩定的版本，隨著每次提交而改變。</td>
		</tr>
		<tr>
			<td>  ○ 「<b>qa-preview</b>」：用於非投票反饋的凍結快照。</td>
		</tr>
		<tr>
			<td>  ○ 「<b>trial-use</b>」：具有「試用」狀態的正式發佈。</td>
		</tr>
		<tr>
			<td>  ○ 「<b>release</b>」：正式發佈版本。</td>
		</tr>
		<tr>
			<td>  ○ 「<b>update</b>」：具有試用狀態且未經投票的 STU 更新。</td>
		</tr>
		<tr>
			<td>  ○ 「<b>normative+trial-use</b>」：同時包含試用與正式內容的混合發佈。</td>
		</tr>
	</tbody>
</table>
</div>

### 作者與貢獻者

<div  style="padding-left: 10px;">
<table class="grid rwd-table">
	<thead>
		<tr class="header">
			<th style="width:10%; vertical-align: middle;">角色</th>
	  <th style="width:10%; vertical-align: middle;">貢獻版次</th>
			<th style="width:25%; vertical-align: middle;">機構名稱</th>
			<th style="width:15%; vertical-align: middle;">姓名</th>
			<th style="width:30%; vertical-align: middle;">所屬單位</th>
			<th style="vertical-align: middle;">聯絡方式</th>
		</tr>
	</thead>
	<tbody>
			<tr>
			<td style="vertical-align: middle;">作者</td>
			<td style="vertical-align: middle;">v0.1.1、v0.2.0、v0.2.1、v0.2.2、v0.3.0、v0.3.1、v0.3.2</td>
			<td rowspan="19" style="vertical-align: middle;">衛生福利部資訊處</td>
			<td style="vertical-align: middle;">李麗惠（Li-Hui Lee）</td>
			<td rowspan="5" style="vertical-align: middle;">國立臺北護理健康大學－健康事業管理系<br />
			（Department of Health Care Management, National Taipei University of Nursing and Health Sciences）</td>
			<td style="vertical-align: middle;">
				<a href="mailto:cclhlee@gmail.com">cclhlee@gmail.com</a>
				<br />
				<a href="mailto:cclhlee@ntunhs.edu.tw">cclhlee@ntunhs.edu.tw</a>
			</td>
			</tr>
			<tr>
			<td style="vertical-align: middle;">作者</td>
			<td style="vertical-align: middle;">v0.1.1、v0.2.0、v0.2.1、v0.2.2、v0.3.0、v0.3.1、v0.3.2</td>
			<td style="vertical-align: middle;">曾鈺珈（Yu-Jia Tseng）</td>
			<td style="vertical-align: middle;">
				<a href="mailto:yujia151645@gmail.com">yujia151645@gmail.com</a>
			</td>
			</tr>
			<tr>
			<td style="vertical-align: middle;">作者</td>
			<td style="vertical-align: middle;">v0.1.1、v0.2.0</td>
			<td style="vertical-align: middle;">林伃瑤（Yu-Yao Lin）</td>
			<td style="vertical-align: middle;">
				<a href="mailto:yujia151645@gmail.com">a28485251@gmail.com</a>
				<br />
				<a href="mailto:082114224@ntunhs.edu.tw">082114224@ntunhs.edu.tw</a>
			</td>
			</tr>
			<tr>
			<td style="vertical-align: middle;">作者</td>
			 <td style="vertical-align: middle;">v0.2.0、v0.2.1、v0.2.2、v0.3.0、v0.3.1、v0.3.2</td>
			<td style="vertical-align: middle;">李奇安（Chi-An Lee）</td>
			<td style="vertical-align: middle;">
				<a href="mailto:ec460520@gmail.com">ec460520@gmail.com</a>
			</td>
			</tr>
			<tr>
			<td style="vertical-align: middle;">貢獻者</td>
			<td style="vertical-align: middle;">v0.1.1</td>
			<td style="vertical-align: middle;">歐陽渝（Yang-Yu Ou）</td>
			<td style="vertical-align: middle;">
				<a href="mailto:ouyangyu0326@gmail.com">ouyangyu0326@gmail.com</a>
			</td>
			</tr>
			<tr>
			<td style="vertical-align: middle;">貢獻者</td>
			<td style="vertical-align: middle;">v0.1.1、v0.2.0</td>
			<td style="vertical-align: middle;">連中岳（Chung-Yueh Lien）</td>
			<td rowspan="9" style="vertical-align: middle;">國立臺北護理健康大學－資訊管理系<br />
			（Department of Information Management, National Taipei University of Nursing and Health Sciences）</td>
			<td style="vertical-align: middle;">
				<a href="mailto:chungyueh@ntunhs.edu.tw">chungyueh@ntunhs.edu.tw</a>
			</td>
			</tr>
			<tr>
			<td style="vertical-align: middle;">貢獻者</td>
			<td style="vertical-align: middle;">v0.1.1</td>
			<td style="vertical-align: middle;">徐建業（Chien-Yeh Hsu）</td>
			<td style="vertical-align: middle;">
				<a href="mailto:cyhsu@ntunhs.edu.tw">cyhsu@ntunhs.edu.tw</a>
			</td>
			</tr>
			<tr>
			<td style="vertical-align: middle;">貢獻者</td>
			<td style="vertical-align: middle;">v0.1.1</td>
			<td style="vertical-align: middle;">陳欣怡（Hsin-Yi Chen）</td>
			<td style="vertical-align: middle;">
				<a href="mailto:c86976@gmail.com">c86976@gmail.com</a>
			</td>
			</tr>
			<tr>
			<td style="vertical-align: middle;">貢獻者</td>
			<td style="vertical-align: middle;">v0.1.1</td>
			<td style="vertical-align: middle;">郭俐君（Li-Chun Kuo）</td>
			<td style="vertical-align: middle;">
				<a href="mailto:lily220487@gmail.com">lily220487@gmail.com</a>
			</td>
			</tr>
			<tr>
			<td style="vertical-align: middle;">貢獻者</td>
			<td style="vertical-align: middle;">v0.1.1</td>
			<td style="vertical-align: middle;">丁子芸（Tzu-Yun Ting）</td>
			<td style="vertical-align: middle;">
				<a href="mailto:aewqoo832456@gmail.com">aewqoo832456@gmail.com</a>
			</td>
			</tr>
			<tr>
			<td style="vertical-align: middle;">貢獻者</td>
			<td style="vertical-align: middle;">v0.2.0</td>
			<td style="vertical-align: middle;">陳杏宜（Hsin-Yi Chen）</td>
			<td style="vertical-align: middle;">
				<a href="mailto:aewqoo832456@gmail.com">bii901231@gmail.com</a>
			</td>
			</tr>
			<tr>
			<td style="vertical-align: middle;">貢獻者</td>
			<td style="vertical-align: middle;">v0.2.0</td>
			<td style="vertical-align: middle;">蔡姍紜（Shan-Yun Tsai）</td>
			<td style="vertical-align: middle;">
				<a href="mailto:aewqoo832456@gmail.com">appletsai319@gmail.com</a>
			</td>
			</tr>
			<tr>
				<td style="vertical-align: middle;">貢獻者</td>
			<td style="vertical-align: middle;">v0.2.0</td>
				<td style="vertical-align: middle;">黃睿駿（Hrui-Jun Huang）</td>
				<td style="vertical-align: middle;">
					<a href="mailto:aewqoo832456@gmail.com">a27114171@gmail.com</a>
				</td>
			</tr>
		<tr>
			<tr>
			<td style="vertical-align: middle;">貢獻者</td>
			<td style="vertical-align: middle;">v0.1.1</td>
			<td style="vertical-align: middle;">李祥豪（Siang-Hao Lee）</td>
			<td style="vertical-align: middle;">康統醫學科技股份有限公司（KENKONE）</td>
			<td style="vertical-align: middle;">
				<a href="mailto:shvoidlee@gmail.com">shvoidlee@gmail.com</a>
			</td>
			</tr>
			<tr>
			<td style="vertical-align: middle;">貢獻者</td>
			<td style="vertical-align: middle;">v0.1.1、v0.2.0</td>
			<td style="vertical-align: middle;">李修安（Hsiu-An Lee）</td>
			<td style="vertical-align: middle;">國家衛生研究院 - 癌症研究所<br />
			（National Health Research Institutes - The National Institute of Cancer Research）</td>
			<td style="vertical-align: middle;">
				<a href="mailto:billy72325@gmail.com">billy72325@gmail.com</a>
			</td>
			</tr>
			<tr>
			<td style="vertical-align: middle;">貢獻者</td>
			<td style="vertical-align: middle;">v0.2.0</td>
			<td style="vertical-align: middle;">劉貞沂（Zhen-Yi Liu）</td>
			<td style="vertical-align: middle;">國家衛生研究院 - 癌症研究所 <br />
				（National Health Research Institutes - The National Institute of Cancer Research）</td>
			<td style="vertical-align: middle;">
				<a href="mailto:ceo@sita.tech">ceo@sita.tech</a>
			</td>
			</tr>
			<tr>
			<td style="vertical-align: middle;">貢獻者</td>
			<td style="vertical-align: middle;">v0.2.0</td>
			<td style="vertical-align: middle;">燕洛嫺（Luo-Xian Yan）</td>
			<td style="vertical-align: middle;">社團法人台灣醫學資訊學會<br />
				（Taiwan Association for Medical Information）</td>
			<td style="vertical-align: middle;">
				<a href="mailto:ceo@sita.tech">ceo@sita.tech</a>
			</td>
			</tr>
			<tr>
			<td style="vertical-align: middle;">貢獻者</td>
			<td style="vertical-align: middle;">v0.1.1</td>
			<td style="vertical-align: middle;">楊宇凡（Lorex L. Yang）</td>
			<td style="vertical-align: middle;">矽塔資訊服務有限公司（Sitatech）</td>
			<td style="vertical-align: middle;">
				<a href="mailto:ceo@sita.tech">ceo@sita.tech</a>
			</td>
			</tr>
		</tr>
	</tbody>
</table>
</div>

---

// File: input/pagecontent/models.md

以下為臺灣核心實作指引(TW Core IG)所有的邏輯模型。

{% include table-logicals.xhtml %}

---

// File: input/pagecontent/profiles-and-extensions.md

### Resources之Profiles
以下為臺灣核心實作指引（TW Core IG）使用到的所有Profiles。

#### AllergyIntolerance
- [臺灣核心-過敏或不耐症（TW Core AllergyIntolerance）](StructureDefinition-AllergyIntolerance-twcore.html) 

#### Bundle
- [臺灣核心-資料交換基本單位（TW Core Bundle）](StructureDefinition-Bundle-twcore.html) 
  - [臺灣核心-資料交換基本單位-文件（TW Core Bundle Document）](StructureDefinition-Bundle-document-twcore.html) 
  - [臺灣核心-資料交換基本單位-訊息（TW Core Bundle Message）](StructureDefinition-Bundle-message-twcore.html) 

#### CarePlan
- [<span class="bg-success">臺灣核心-照護計畫（TW Core CarePlan）</span>](StructureDefinition-CarePlan-twcore.html) 

#### CareTeam
- [<span class="bg-success">臺灣核心-照護團隊（TW Core CareTeam）</span>](StructureDefinition-CareTeam-twcore.html) 

#### Composition
- [臺灣核心-臨床文件架構（TW Core Composition）](StructureDefinition-Composition-twcore.html) 

#### Condition
- [臺灣核心-病情、問題或診斷（TW Core Condition）](StructureDefinition-Condition-twcore.html) 

#### Coverage
- [<span class="bg-success">臺灣核心-給付範圍（TW Core Coverage）</span>](StructureDefinition-Coverage-twcore.html) 

#### Device
- [<span class="bg-success">臺灣核心-植入式裝置（TW Core Implantable Device）</span>](StructureDefinition-Device-twcore.html) 

#### DiagnosticReport
- [臺灣核心-診斷報告（TW Core DiagnosticReport）](StructureDefinition-DiagnosticReport-twcore.html) 

#### DocumentReference
- [臺灣核心-文件參照（TW Core DocumentReference）](StructureDefinition-DocumentReference-twcore.html) 

#### Encounter
- [臺灣核心-就醫事件（TW Core Encounter）](StructureDefinition-Encounter-twcore.html) 

#### Goal
- [<span class="bg-success">臺灣核心-目標（TW Core Goal）</span>](StructureDefinition-Goal-twcore.html)

#### ImagingStudy
- [臺灣核心-影像檢查（TW Core ImagingStudy）](StructureDefinition-ImagingStudy-twcore.html) 

#### Immunization
- [<span class="bg-success">臺灣核心-疫苗接種（TW Core Immunization）</span>](StructureDefinition-Immunization-twcore.html)


#### Location
- [臺灣核心-地點（TW Core Location) ](StructureDefinition-Location-twcore.html) 

#### Media
- [臺灣核心-多媒體（TW Core Media）](StructureDefinition-Media-twcore.html) 

#### Medication
- [臺灣核心-藥品（TW Core Medication）](StructureDefinition-Medication-twcore.html) 

#### MedicationRequest
- [臺灣核心-藥品請求（TW Core MedicationRequest）](StructureDefinition-MedicationRequest-twcore.html) 

#### MedicationDispense
- [臺灣核心-配藥或藥品調劑（TW Core MedicationDispense）](StructureDefinition-MedicationDispense-twcore.html) 

#### MedicationStatement
- [臺灣核心-用藥聲明（TW Core  MedicationStatement）](StructureDefinition-MedicationStatement-twcore.html) 

#### MessageHeader
- [臺灣核心-訊息表頭（TW Core MessageHeader）](StructureDefinition-MessageHeader-twcore.html) 

#### Observation
- [<span class="bg-success">臺灣核心-平均血壓（TW Core Observation Average Blood Pressure）</span>](StructureDefinition-Observation-averageBloodPressure-twcore.html) 
- [<span class="bg-success">臺灣核心-病人照護偏好註記（TW Core Observation Care Experience Preference）</span>](StructureDefinition-Observation-careExperiencePreference-twcore.html) 
- [<span class="bg-success">臺灣核心-臨床檢驗檢查（TW Core Observation Clinical Result）</span>](StructureDefinition-Observation-clinical-result-twcore.html) 
  - [臺灣核心-實驗室檢驗檢查（TW Core Observation Laboratory Result）](StructureDefinition-Observation-laboratoryResult-twcore.html) 
- [<span class="bg-success">臺灣核心-職業（TW Core Observation Occupation）</span>](StructureDefinition-Observation-occupation-twcore.html) 
- [<span class="bg-success">臺灣核心-妊娠計畫（TW Core Observation Pregnancy Intent）</span>](StructureDefinition-Observation-pregnancy-intent-twcore.html) 
- [<span class="bg-success">臺灣核心-妊娠狀態（TW Core Observation Pregnancy Status）</span>](StructureDefinition-Observation-pregnancy-status-twcore.html) 
- [<span class="bg-success">臺灣核心-健康狀態篩檢與評估（TW Core Observation Screening Assessment）</span>](StructureDefinition-Observation-screening-assessment-twcore.html) 
- [<span class="bg-success">臺灣核心-性傾向（TW Core Observation Sexual Orientation）</span>](StructureDefinition-Observation-sexual-orientation-twcore.html) 
- [<span class="bg-success">臺灣核心-通用檢驗檢查（TW Core Simple Observation）</span>](StructureDefinition-Observation-simple-twcore.html) 
- [<span class="bg-success">臺灣核心-吸菸狀態（TW Core Smoking Status Observation）</span>](StructureDefinition-Observation-smoking-status-twcore.html) 
- [<span class="bg-success">臺灣核心-病人治療偏好註記（TW Core Observation Treatment Intervention Preference）</span>](StructureDefinition-Observation-treatment-intervention-preference-twcore.html) 
- [臺灣核心-生命體徵（TW Core Observation Vital Signs）](StructureDefinition-Observation-vitalSigns-twcore.html) 
  - [<span class="bg-success">臺灣核心-兒童及青少年身體質量指數（TW Core Pediatric BMI for Age Observation）</span>](StructureDefinition-Observation-pediatric-bmi-age-twcore.html) 
  - [<span class="bg-success">臺灣核心-兒童生長曲線（TW Core Pediatric Weight for Height Observation）</span>](StructureDefinition-Observation-pediatric-weight-height-twcore.html) 
  - [臺灣核心-血壓（TW Core Observation Blood Pressure）](StructureDefinition-Observation-bloodPressure-twcore.html) 
  - [臺灣核心-身體質量指數（TW Core Observation BMI）](StructureDefinition-Observation-bmi-twcore.html) 
  - [<span class="bg-success">臺灣核心-身高（TW Core Observation Body Height）</span>](StructureDefinition-Observation-body-height-twcore.html) 
  - [<span class="bg-success">臺灣核心-體溫（TW Core Observation Body Temperature）</span>](StructureDefinition-Observation-body-temperature-twcore.html) 
  - [<span class="bg-success">臺灣核心-體重（TW Core Observation Body Weight）</span>](StructureDefinition-Observation-body-weight-twcore.html) 
  - [<span class="bg-success">臺灣核心-頭圍（TW Core Observation Head Circumference）</span>](StructureDefinition-Observation-head-circumference-twcore.html) 
  - [<span class="bg-success">臺灣核心-心率（TW Core Observation Heart Rate）</span>](StructureDefinition-Observation-heart-rate-twcore.html) 
  - [<span class="bg-success">臺灣核心-脈搏血氧飽和度（TW Core Observation Pulse Oximetry）</span>](StructureDefinition-Observation-pulse-oximetry-twcore.html) 
  - [<span class="bg-success">臺灣核心-呼吸速率（TW Core Observation Respiratory Rate）</span>](StructureDefinition-Observation-respiratory-rate-twcore.html) 
  - [<span class="bg-success">臺灣核心-兒童頭圍百分位數（TW Core Observation Pediatric Head Occipital Frontal Circumference Percentile）</span>](StructureDefinition-Observation-pediatric-head-circumference-twcore.html)

#### Organization
- [臺灣核心-機構（TW Core Organization）](StructureDefinition-Organization-twcore.html) 
  - [臺灣核心-政府機構（TW Core Organization Government）](StructureDefinition-Organization-govt-twcore.html) 
  - [臺灣核心-醫事機構（TW Core Organization Hospital Department）](StructureDefinition-Organization-hosp-twcore.html) 
  - [臺灣核心-公司行號（TW Core Organization Company）](StructureDefinition-Organization-co-twcore.html) 
  
#### Patient
- [臺灣核心-病人（TW Core Patient）](StructureDefinition-Patient-twcore.html) 

#### Practitioner
- [臺灣核心-健康照護服務提供者（TW Core Practitioner）](StructureDefinition-Practitioner-twcore.html) 

#### PractitionerRole
- [臺灣核心-健康照護服務提供者角色（TW Core PractitionerRole）](StructureDefinition-PractitionerRole-twcore.html) 

#### Procedure
- [臺灣核心-處置或手術（TW Core Procedure）](StructureDefinition-Procedure-twcore.html) 

#### Provenance
- [<span class="bg-success">臺灣核心-出處（TW Core Provenance）</span>](StructureDefinition-Provenance-twcore.html)

#### QuestionnaireResponse
- [<span class="bg-success">臺灣核心-問卷題目回覆（TW Core QuestionnaireResponse）</span>](StructureDefinition-QuestionnaireResponse-twcore.html) 

#### RelatedPerson
- [<span class="bg-success">臺灣核心-相關人士（TW Core RelatedPerson）</span>](StructureDefinition-RelatedPerson-twcore.html) 

#### ServiceRequest
- [<span class="bg-success">臺灣核心-服務請求（TW Core ServiceRequest）</span>](StructureDefinition-ServiceRequest-twcore.html)

#### Specimen
- [臺灣核心-檢體（TW Core Specimen）](StructureDefinition-Specimen-twcore.html) 


-------

### Data Types之Profiles
- [TW Coding](StructureDefinition-Coding-tw.html)
- [TW CodeableConcept](StructureDefinition-CodeableConcept-tw.html)
- [臺灣核心-地址（TW Core Address）](StructureDefinition-Address-tw.html)

-------

### Extensions
以下[Extensions]({{site.data.fhir.path}}extensibility.html)已定義為臺灣核心實作指引（TW Core IG）的一部分。
- [識別碼後綴詞（Identifier Suffix）](StructureDefinition-identifier-suffix.html)
- [年齡（Person Age）](StructureDefinition-person-age.html)
- [臺灣郵遞區號（TW Postal code）](StructureDefinition-tw-postal-code.html)
- [臺灣地址欄位-村（里)（TW Village）](StructureDefinition-tw-village.html)
- [臺灣地址欄位-鄰（TW Neighborhood）](StructureDefinition-tw-neighborhood.html)
- [臺灣地址欄位-段（TW Section）](StructureDefinition-tw-section.html)
- [臺灣地址欄位-巷（TW Lane）](StructureDefinition-tw-lane.html)
- [臺灣地址欄位-弄（TW Alley）](StructureDefinition-tw-alley.html)
- [臺灣地址欄位-號（TW Number）](StructureDefinition-tw-number.html)
- [臺灣地址欄位-樓（TW Floor）](StructureDefinition-tw-floor.html)
- [臺灣地址欄位-室（TW Room）](StructureDefinition-tw-room.html)
- [<span class="bg-success">Questionnaire Url</span>](StructureDefinition-questionnaire-url.html)

---

// File: input/pagecontent/searchparameters-and-operation.md

以下為臺灣核心實作指引（TW Core IG）使用到的所有操作定義（OperationDefinition）。 

### Patient 
- [$everything](OperationDefinition-Patient-everything.html)

------

以下為臺灣核心實作指引（TW Core IG）使用到的所有查詢參數（SearchParameter）。  

### AllergyIntolerance
- [_id](SearchParameter-AllergyIntolerance-id.html)
- [clinical-status](SearchParameter-AllergyIntolerance-clinical-status.html)

### Bundle
- [_id](SearchParameter-Bundle-id.html)
- [identifier](SearchParameter-Bundle-identifier.html)

### CarePlan
- [patient](SearchParameter-CarePlan-patient.html)
- [category](SearchParameter-CarePlan-category.html)
- [date](SearchParameter-CarePlan-date.html)
- [status](SearchParameter-CarePlan-status.html)

### CareTeam
- [patient](SearchParameter-CareTeam-patient.html)
- [status](SearchParameter-CareTeam-status.html)
- [role](SearchParameter-CareTeam-role.html)

### Composition
- [_id](SearchParameter-Composition-id.html)
- [status](SearchParameter-Composition-status.html)
- [type](SearchParameter-Composition-type.html)
- [subject](SearchParameter-Composition-subject.html)

### Condition
- [_id](SearchParameter-Condition-id.html)
- [clinical-status](SearchParameter-Condition-clinical-status.html)
- [code](SearchParameter-Condition-code.html)
- [subject](SearchParameter-Condition-subject.html)
- [onset-date](SearchParameter-Condition-onset-date.html)
- [abatement-date](SearchParameter-Condition-abatement-date.html)
- [severity](SearchParameter-Condition-severity.html)

### Coverage
- [patient](SearchParameter-Coverage-patient.html)

### Device
- [patient](SearchParameter-Device-patient.html)
- [type](SearchParameter-Device-type.html)
- [status](SearchParameter-Device-status.html)

### DiagnosticReport
- [_id](SearchParameter-DiagnosticReport-id.html)
- [status](SearchParameter-DiagnosticReport-status.html)
- [subject](SearchParameter-DiagnosticReport-subject.html)
- [category](SearchParameter-DiagnosticReport-category.html)
- [code](SearchParameter-DiagnosticReport-code.html)
- [date](SearchParameter-DiagnosticReport-date.html)

### DocumentReference
- [_id](SearchParameter-DocumentReference-id.html)
- [status](SearchParameter-DocumentReference-status.html)
- [subject](SearchParameter-DocumentReference-subject.html)

### Encounter
- [_id](SearchParameter-Encounter-id.html)
- [class](SearchParameter-Encounter-class.html)
- [date](SearchParameter-Encounter-date.html)
- [identifier](SearchParameter-Encounter-identifier.html)
- [location](SearchParameter-Encounter-location.html)
- [subject](SearchParameter-Encounter-subject.html)
- [status](SearchParameter-Encounter-status.html)

### Goal
- [patient](SearchParameter-Goal-patient.html)
- [lifecycle-status](SearchParameter-Goal-lifecycle-status.html)
- [target-date](SearchParameter-Goal-target-date.html)
- [description](SearchParameter-Goal-description.html)

### ImagingStudy
- [_id](SearchParameter-ImagingStudy-id.html)
- [status](SearchParameter-ImagingStudy-status.html)
- [subject](SearchParameter-ImagingStudy-subject.html)
- [encounter](SearchParameter-ImagingStudy-encounter.html)
- [started](SearchParameter-ImagingStudy-started.html)

### Immunization
- [patient](SearchParameter-Immunization-patient.html)
- [date](SearchParameter-Immunization-date.html)
- [status](SearchParameter-Immunization-status.html)

### Location
- [_id](SearchParameter-Location-id.html)
- [address](SearchParameter-Location-address.html)
- [name](SearchParameter-Location-name.html)

### Media
- [_id](SearchParameter-Media-id.html)
- [status](SearchParameter-Media-status.html)
- [subject](SearchParameter-Media-subject.html)

### Medication
- [_id](SearchParameter-Medication-id.html)
- [code](SearchParameter-Medication-code.html)

### MedicationRequest
- [_id](SearchParameter-MedicationRequest-id.html)
- [status](SearchParameter-MedicationRequest-status.html)
- [intent](SearchParameter-MedicationRequest-intent.html)
- [subject](SearchParameter-MedicationRequest-subject.html)
- [medication](SearchParameter-MedicationRequest-medication.html)
- [encounter](SearchParameter-MedicationRequest-encounter.html)
- [authoredon](SearchParameter-MedicationRequest-authoredon.html)

### MedicationDispense
- [_id](SearchParameter-MedicationDispense-id.html)
- [status](SearchParameter-MedicationDispense-status.html)
- [subject](SearchParameter-MedicationDispense-subject.html)
- [medication](SearchParameter-MedicationDispense-medication.html)

### MedicationStatement
- [_id](SearchParameter-MedicationStatement-id.html)
- [status](SearchParameter-MedicationStatement-status.html)
- [subject](SearchParameter-MedicationStatement-subject.html)
- [medication](SearchParameter-MedicationStatement-medication.html)

### MessageHeader
- [_id](SearchParameter-MessageHeader-id.html)
- [author](SearchParameter-MessageHeader-author.html)
- [sender](SearchParameter-MessageHeader-sender.html)

### Observation
- [_id](SearchParameter-Observation-id.html)
- [category](SearchParameter-Observation-category.html)
- [code](SearchParameter-Observation-clinical-code.html)
- [date](SearchParameter-Observation-date.html)
- [performer](SearchParameter-Observation-performer.html)
- [status](SearchParameter-Observation-status.html)
- [subject](SearchParameter-Observation-subject.html)
- [patient](SearchParameter-Observation-patient.html)
- [_lastUpdated](SearchParameter-Observation-lastupdated.html)

### Organization 
- [_id](SearchParameter-Organization-id.html)
- [identifier](SearchParameter-Organization-identifier.html)
- [name](SearchParameter-Organization-name.html)
- [type](SearchParameter-Organization-type.html)

### Patient 
- [_id](SearchParameter-Patient-id.html)
- [birthdate](SearchParameter-Patient-birthdate.html)
- [gender](SearchParameter-Patient-gender.html)
- [identifier](SearchParameter-Patient-identifier.html)
- [name](SearchParameter-Patient-name.html)

### Practitioner
- [_id](SearchParameter-Practitioner-id.html)
- [identifier](SearchParameter-Practitioner-identifier.html)
- [name](SearchParameter-Practitioner-name.html)

### PractitionerRole
- [_id](SearchParameter-PractitionerRole-id.html)
- [identifier](SearchParameter-PractitionerRole-identifier.html)
- [specialty](SearchParameter-PractitionerRole-specialty.html)

### Procedure
- [_id](SearchParameter-Procedure-id.html)
- [code](SearchParameter-Procedure-code.html)
- [status](SearchParameter-Procedure-status.html)
- [subject](SearchParameter-Procedure-subject.html)
- [date](SearchParameter-Procedure-date.html)

#### Provenance
- [_id](SearchParameter-Provenance-id.html)
- [patient](SearchParameter-Provenance-patient.html)


### QuestionnaireResponse
- [_id](SearchParameter-QuestionnaireResponse-id.html)
- [patient](SearchParameter-QuestionnaireResponse-patient.html)
- [status](SearchParameter-QuestionnaireResponse-status.html)
- [authored](SearchParameter-QuestionnaireResponse-authored.html)
- [questionnaire](SearchParameter-QuestionnaireResponse-questionnaire.html)

### RelatedPerson
- [_id](SearchParameter-RelatedPerson-id.html)
- [patient](SearchParameter-RelatedPerson-patient.html)
- [name](SearchParameter-RelatedPerson-name.html)

### ServiceRequest
- [_id](SearchParameter-ServiceRequest-id.html)
- [patient](SearchParameter-ServiceRequest-patient.html)
- [category](SearchParameter-ServiceRequest-category.html)
- [authored](SearchParameter-ServiceRequest-authored.html)
- [status](SearchParameter-ServiceRequest-status.html)
- [code](SearchParameter-ServiceRequest-code.html)

### Specimen
- [_id](SearchParameter-Specimen-id.html)
- [status](SearchParameter-Specimen-status.html)
- [identifier](SearchParameter-Specimen-identifier.html)
- [subject](SearchParameter-Specimen-subject.html)


---

// File: input/pagecontent/security.md

實作者**建議應該（SHOULD）**了解與FHIR交易相關的[安全考量](http://hl7.org/fhir/R4/security.html)，特別是與以下相關:

-   [通訊（Communication）](http://hl7.org/fhir/R4/security.html#http)
-   [驗證（Authentication）](http://hl7.org/fhir/R4/security.html#authentication)
-   [授權/存取控制（Authorization/Access Control）](http://hl7.org/fhir/R4/security.html#authorization/access%20control)
-   [稽核日誌（Audit Logging）](http://hl7.org/fhir/R4/security.html#audit%20logging)
-   [數位簽章（Digital Signatures）](http://hl7.org/fhir/R4/security.html#digital%20signatures)
-   [安全標籤（Security Labels）](http://hl7.org/fhir/R4/security-labels.html)
-   [說明（Narrative）](http://hl7.org/fhir/R4/security.html#narrative)

就TW Core而言，安全一致性要求如下。

- 系統**建議應該（SHOULD）** 保留各種交易的稽核日誌(audit logs)
- 系統**建議應該（SHOULD）** 符合[FHIR通訊安全（Communications Security）](http://hl7.org/fhir/R4/security.html#http)要求
- 對於認證和授權，系統**建議應該（SHOULD）** 支援用於用戶端<-->伺服器互動的[SMART App執行框架（launch framework）](http://www.hl7.org/fhir/smart-app-launch/history.cfml)。注意：FHIR上的SMART規範包括啟用安全決策所需的OAuth 2.0範圍。
- 系統**建議應該（SHOULD）** 依據國家、地方和機構政策實作同意要求。業務夥伴協定(Business Associate Agreements)**建議應該（SHOULD）** 記錄系統相互同意的要求。
-   系統**可以（MAY）** 透過加密和相關存取控制來保護資料的機密性。所使用的策略和方法不在此規範的範圍內。

---

// File: input/pagecontent/terminologies.md

這頁列出本IG必須及可能需要使用的所有專門術語(terminology)

### 值集(ValueSets)
- [LOINC Code Document Section值集](ValueSet-loinc-doc-section-code.html)
- [LOINC Code Document Type值集](ValueSet-loinc-type-doc-code.html)
- [LOINC Document Class值集](ValueSet-loinc-document-classcodes.html)
- [LOINC生命體徵值集](ValueSet-vital-signs-tw.html)
- [LOINC實驗室檢驗檢查值集](ValueSet-loinc-observation-code.html)
- [LOINC篩檢與評估值集](ValueSet-loinc-survey-codes.html)
- [LOINC +  HL7 NullFlavor妊娠計畫值集](ValueSet-loinc-pregnancy-intent-code.html)
- [RxNorm藥品代碼值集](ValueSet-medication-rxnorm-tw.html)
- [HL7 OrderableDrugForm藥品劑型值集](ValueSet-v3-orderableDrugForm.html)
- [SNOMED CT診斷代碼值集](ValueSet-condition-code-sct-tw.html)
- [對應至 SNOMED CT之就醫科別 + 診療科別值集](ValueSet-medical-department-sct-tw.html)
- [SNOMED CT + HL7 NullFlavor性傾向值集](ValueSet-snomed-sexual-orientation-code.html)
- [SNOMED CT + HL7 NullFlavor妊娠狀態值集](ValueSet-snomed-pregnancy-status-code.html)
- [SNOMED CT + LOINC吸菸狀態種類向值集](ValueSet-smoking-status-type-code.html)
- [SNOMED CT + 臺灣健保署給藥途徑值集](ValueSet-medication-path-sct-tw.html)
- [SNOMED CT + 臺灣醫事司醫事人員類別值集](ValueSet-health-professional-sct-tw.html)
- [SNOMED CT 吸菸狀態綜合評估值集](ValueSet-smoking-status-comprehensive-code.html)
- [無法對應至 SNOMED CT之臺灣健保署就醫科別值集](ValueSet-medical-consultation-department-tw.html)
- [無法對應至 SNOMED CT之臺灣健保署診療科別值集](ValueSet-medical-treatment-department-tw.html)
- [HL7 TimingAbbreviation + 臺灣健保署藥品使用頻率值集](ValueSet-medication-frequency-hl7-tw.html)
- [HL7 Provenance participant type + 臺灣衛福部資訊處Provenance參與類型](ValueSet-provenance-participant-type-hl7-tw.html)
- [IdentifierType + 臺灣衛福部資訊處識別碼類型值集](ValueSet-identifier-type-tw.html)
- [臺灣壽險公會傷害保險個人職業分類表值集](ValueSet-occupation-lia-roc-tw.html)
- [臺灣勞動部職業標準分類值集](ValueSet-occupation-mol-tw.html)
- [行政院主計總處行業分類值集](ValueSet-industry-dgbas-tw.html)
- [臺灣戶政司婚姻狀態值集](ValueSet-marital-status-tw.html)
- [臺灣醫事司醫事人員類別值集](ValueSet-health-professional-tw.html)
- [臺灣醫事司醫事機構代碼值集](ValueSet-organization-identifier-tw.html)
- [臺灣衛福部資訊處類型代碼值集](ValueSet-category-code-tw.html)
- [臺灣衛福部資訊處Narrative狀態值集](ValueSet-narrative-status.html)
- [臺灣衛福部資訊處Observation Clinical Result類型值集](ValueSet-observation-clinical-result-category.html)
- [臺灣衛福部資訊處Observation Screening Assessment類型值集](ValueSet-observation-screening-assessment-category.html)
- [臺灣衛福部資訊處ServiceRequest類型值集](ValueSet-serviceRequest-category.html)
- [臺灣中華郵政3碼郵遞區號值集](ValueSet-postal-code3-tw.html)
- [臺灣中華郵政5碼郵遞區號值集](ValueSet-postal-code5-tw.html)
- [臺灣中華郵政6碼郵遞區號值集](ValueSet-postal-code6-tw.html)
- [臺灣健保署2001年中文版ICD-9-CM值集](ValueSet-icd-9-cm-2001-tw.html)
- [臺灣健保署2014年中文版ICD-10-CM值集](ValueSet-icd-10-cm-2014-tw.html)
- [臺灣健保署2014年中文版ICD-10-PCS值集](ValueSet-icd-10-pcs-2014-tw.html)
- [臺灣健保署2021年中文版ICD-10-CM值集](ValueSet-icd-10-cm-2021-tw.html)
- [臺灣健保署2021年中文版ICD-10-PCS值集](ValueSet-icd-10-pcs-2021-tw.html)
- [臺灣健保署2023年中文版ICD-10-CM值集](ValueSet-icd-10-cm-2023-tw.html)
- [臺灣健保署2023年中文版ICD-10-PCS值集](ValueSet-icd-10-pcs-2023-tw.html)
- [臺灣健保署用藥品項代碼值集](ValueSet-medication-nhi-tw.html)
- [臺灣健保署中藥用藥品項值集](ValueSet-nhi-medication-ch-herb-tw.html)
- [臺灣健保署就醫科別值集](ValueSet-medical-consultation-department-nhi-tw.html)
- [臺灣健保署藥品使用頻率值集](ValueSet-medication-frequency-nhi-tw.html)
- [臺灣健保署診療科別值集](ValueSet-medical-treatment-department-nhi-tw.html)
- [臺灣健保署醫療服務給付項目-處置或手術值集](ValueSet-procedure-tw.html)
- [臺灣健保署醫療服務給付項目-檢驗值集](ValueSet-laboratory-category-tw.html)
- [臺灣健保署給藥途徑值集](ValueSet-medication-path-tw.html)
- [臺灣食藥署藥品及醫療器材代碼值集](ValueSet-medication-fda-tw.html)
- [臺灣食藥署藥品藥理治療分類ATC碼值集](ValueSet-medcation-atc-tw.html)


### 代碼系統(CodeSystems)
- [臺灣壽險公會傷害保險個人職業分類表](CodeSystem-occupation-lia-roc-tw.html)
- [臺灣勞動部職業標準分類](CodeSystem-occupation-mol-tw.html)
- [行政院主計總處行業分類](CodeSystem-industry-dgbas-tw.html)
- [臺灣醫事司醫事人員類別](CodeSystem-health-professional-tw.html)
- [臺灣醫事司醫事機構代碼](CodeSystem-organization-identifier-tw.html)
- [臺灣戶政司婚姻狀態](CodeSystem-marital-status-tw.html)
- [臺灣衛福部資訊處識別碼類型](CodeSystem-v2-0203.html)
- [臺灣衛福部資訊處照護計畫類別](CodeSystem-careplan-category-tw.html)
- [臺灣衛福部資訊處類型代碼](CodeSystem-category-code-tw.html)
- [臺灣衛福部資訊處Provenance參與類型](CodeSystem-provenance-participant-type-tw.html)
- [臺灣中華郵政3碼郵遞區號](CodeSystem-postal-code3-tw.html)
- [臺灣中華郵政5碼郵遞區號](CodeSystem-postal-code5-tw.html)
- [臺灣中華郵政6碼郵遞區號](CodeSystem-postal-code6-tw.html)
- [臺灣健保署2001年中文版ICD-9-CM](CodeSystem-icd-9-cm-2001-tw.html)
- [臺灣健保署2014年中文版ICD-10-CM](CodeSystem-icd-10-cm-2014-tw.html)
- [臺灣健保署2014年中文版ICD-10-PCS](CodeSystem-icd-10-pcs-2014-tw.html)
- [臺灣健保署2021年中文版ICD-10-CM](CodeSystem-icd-10-cm-2021-tw.html)
- [臺灣健保署2021年中文版ICD-10-PCS](CodeSystem-icd-10-pcs-2021-tw.html)
- [臺灣健保署2023年中文版ICD-10-CM](CodeSystem-icd-10-cm-2023-tw.html)
- [臺灣健保署2023年中文版ICD-10-PCS](CodeSystem-icd-10-pcs-2023-tw.html)
- [臺灣健保署用藥品項](CodeSystem-medication-nhi-tw.html)
- [臺灣健保署中藥用藥品項](CodeSystem-nhi-medication-ch-herb-tw.html)
- [臺灣健保署就醫科別](CodeSystem-medical-consultation-department-nhi-tw.html)
- [臺灣健保署藥品使用頻率](CodeSystem-medication-frequency-nhi-tw.html)
- [臺灣健保署診療科別](CodeSystem-medical-treatment-department-nhi-tw.html)
- [臺灣健保署醫療服務給付項目](CodeSystem-medical-service-payment-tw.html)
- [臺灣健保署給藥途徑](CodeSystem-medication-path-tw.html)
- [臺灣食藥署藥品許可證](CodeSystem-medication-fda-tw.html)
- [臺灣食藥署醫療器材許可證](CodeSystem-medication-device-fda-tw.html)
- [臺灣食藥署藥品藥理治療分類ATC碼](CodeSystem-medcation-atc-tw.html)


### 概念對應(ConceptMaps)
- [臺灣健保署診療科別代碼對應SNOMED CT](ConceptMap-medical-treatment-department-nhi-tw.html)
- [臺灣健保署就醫科別代碼對應SNOMED CT](ConceptMap-medical-consultation-department-nhi-tw.html)
- [臺灣健保署給藥途徑代碼對應SNOMED CT](ConceptMap-medication-path-tw.html)
- [臺灣健保署藥品使用頻率代碼對應對應HL7 TimingAbbreviation](ConceptMap-medication-frequency-tw.html)
- [臺灣醫事司醫事人員類別代碼對應SNOMED CT及臺灣醫事司醫事人員類別](ConceptMap-health-professional-tw.html)
- [臺灣戶政司婚姻狀態代碼對應HL7 MaritalStatus](ConceptMap-marital-status-tw.html)

---

// File: input/pagecontent/twcdi.md

<style>
  table {
    border: 1.5px solid #d1d9e0;
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 20px;
  }
  th, td {
    border: 1px solid #d1d9e0;
    padding: 10px;
    text-align: left;
  }
  th {
    background-color: #f6f8fa;
  }
  td:first-child {
    width: 500px;
  }

</style>

### **TWCDI資料元素與TW Core Profiles之對應關係與使用**
TW Core IG後續將會定期更新該實作指引，以滿足後續的台灣核心資料互通性（TWCDI）應用需求。TWCDI和TW Core是互補的存在，TWCDI定義高階資料要求，TW Core則提供詳細的基於FHIR 的設定檔（Profiles），以滿足這些要求。
- TWCDI資料類別和元素名稱可能與TW Core設定檔（Profile）名稱和元素名稱不同。
- 並非每個TWCDI資料類別和元素都對應到單一設定檔（Profile）。
- 許多TW Core Profile元素不會完全對應到TWCDI資料類別和元素，因為TW Core的用途更為廣泛，並且需要額外的TW Core元素來實現FHIR。


#### **與接觸某種物質相關的有害或不良的生理反應：**

<table>
  <thead>
    <tr>
      <th align="left">
        <strong>Allergies and Intolerances（過敏和不耐受）</strong>
      </th>
      <th align="left">
        <a
          href="StructureDefinition-AllergyIntolerance-twcore.html"
          >臺灣核心-過敏或不耐症（TW Core AllergyIntolerance）</a
        >
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- Substance （Medication）</td>
      <td align="left">
        <a
          href="StructureDefinition-AllergyIntolerance-twcore.html"
          >臺灣核心-過敏或不耐症（TW Core AllergyIntolerance）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Substance （Drug Class）</td>
      <td align="left">
        <a
          href="StructureDefinition-AllergyIntolerance-twcore.html"
          >臺灣核心-過敏或不耐症（TW Core AllergyIntolerance）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Substance （Non-Medication）</td>
      <td align="left">
        <a
          href="StructureDefinition-AllergyIntolerance-twcore.html"
          >臺灣核心-過敏或不耐症（TW Core AllergyIntolerance）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Reaction</td>
      <td align="left">
        <a
          href="StructureDefinition-AllergyIntolerance-twcore.html"
          >臺灣核心-過敏或不耐症（TW Core AllergyIntolerance）</a
        >
      </td>
    </tr>
  </tbody>
</table>


#### **有關參與或預計參與患者護理的人員資訊：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Care Team Members</strong></th>
      <th align="left">
        <a
          href="StructureDefinition-CareTeam-twcore.html"
          >臺灣核心-照護團隊（TW Core CareTeam）</a
        >
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- Name</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Practitioner-twcore.html"
            >臺灣核心-健康照護服務提供者（TW Core Practitioner）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Patient-twcore.html"
            >臺灣核心-病人（TW Core Patient）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-RelatedPerson-twcore.html"
            >臺灣核心-相關人士（TW Core RelatedPerson）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Identifier</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Practitioner-twcore.html"
            >臺灣核心-健康照護服務提供者（TW Core Practitioner）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Patient-twcore.html"
            >臺灣核心-病人（TW Core Patient）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Location</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-PractitionerRole-twcore.html"
            >臺灣核心-健康照護服務提供者角色（TW Core PractitionerRole）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Practitioner-twcore.html"
            >臺灣核心-健康照護服務提供者（TW Core Practitioner）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Patient-twcore.html"
            >臺灣核心-病人（TW Core Patient）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-RelatedPerson-twcore.html"
            >臺灣核心-相關人士（TW Core RelatedPerson）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Telecom</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-PractitionerRole-twcore.html"
            >臺灣核心-健康照護服務提供者角色（TW Core PractitionerRole）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Practitioner-twcore.html"
            >臺灣核心-健康照護服務提供者（TW Core Practitioner）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Patient-twcore.html"
            >臺灣核心-病人（TW Core Patient）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-RelatedPerson-twcore.html"
            >臺灣核心-相關人士（TW Core RelatedPerson）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Role</td>
      <td align="left">
        <a
          href="StructureDefinition-CareTeam-twcore.html"
          >臺灣核心-照護團隊（TW Core CareTeam）</a
        >
      </td>
    </tr>
  </tbody>
</table>


#### **描述性患者臨床資料：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Clinical Notes</strong></th>
      <th align="left">
        <p>
          <a
            href="StructureDefinition-DocumentReference-twcore.html"
            >臺灣核心-文件參照（TW Core DocumentReference）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-DiagnosticReport-twcore.html"
            >臺灣核心-診斷報告（TW Core DiagnosticReport）</a
          >
        </p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- Consultation Note</td>
      <td align="left">
        <a
          href="StructureDefinition-DocumentReference-twcore.html"
          >臺灣核心-文件參照（TW Core DocumentReference）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Discharge Summary Note</td>
      <td align="left">
        <a
          href="StructureDefinition-DocumentReference-twcore.html"
          >臺灣核心-文件參照（TW Core DocumentReference）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- History &amp; Physical</td>
      <td align="left">
        <a
          href="StructureDefinition-DocumentReference-twcore.html"
          >臺灣核心-文件參照（TW Core DocumentReference）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Imaging Narrative</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-DocumentReference-twcore.html"
            >臺灣核心-文件參照（TW Core DocumentReference）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-DiagnosticReport-twcore.html"
            >臺灣核心-診斷報告（TW Core DiagnosticReport）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Procedure Note</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-DocumentReference-twcore.html"
            >臺灣核心-文件參照（TW Core DocumentReference）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-DiagnosticReport-twcore.html"
            >臺灣核心-診斷報告（TW Core DiagnosticReport）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Progress Note</td>
      <td align="left">
        <a
          href="StructureDefinition-DocumentReference-twcore.html"
          >臺灣核心-文件參照（TW Core DocumentReference）</a
        >
      </td>
    </tr>
  </tbody>
</table>


#### **進行非影像和非實驗室測試，得出針對患者的結構化或非結構化結果，以促進病情的診斷和管理：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Clinical Tests</strong></th>
      <th align="left">
        <p>
          <a
            href="StructureDefinition-Observation-laboratoryResult-twcore.html"
            >臺灣核心-實驗室檢驗檢查（TW Core Observation Laboratory Result）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-DiagnosticReport-twcore.html"
            >臺灣核心-診斷報告（TW Core DiagnosticReport）</a
          >
        </p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- Clinical Test</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Observation-laboratoryResult-twcore.html"
            >臺灣核心-實驗室檢驗檢查（TW Core Observation Laboratory Result）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-DiagnosticReport-twcore.html"
            >臺灣核心-診斷報告（TW Core DiagnosticReport）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Clinical Test Result/Report</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Observation-laboratoryResult-twcore.html"
            >臺灣核心-實驗室檢驗檢查（TW Core Observation Laboratory Result）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-DiagnosticReport-twcore.html"
            >臺灣核心-診斷報告（TW Core DiagnosticReport）</a
          >
        </p>
      </td>
    </tr>
  </tbody>
</table>


#### **產生需要具有資格的專業人士解讀的醫學影像測試：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Diagnostic Imaging</strong></th>
      <th align="left">
        <p>
          <a
            href="StructureDefinition-Observation-clinical-result-twcore.html"
            >臺灣核心-臨床檢驗檢查（TW Core Observation Clinical Result）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-DiagnosticReport-twcore.html"
            >臺灣核心-診斷報告（TW Core DiagnosticReport）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-ImagingStudy-twcore.html"
            >臺灣核心-影像檢查（TW Core ImagingStudy）</a
          >
        </p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- Diagnostic Imaging Test</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Observation-clinical-result-twcore.html"
            >臺灣核心-臨床檢驗檢查（TW Core Observation Clinical Result）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-DiagnosticReport-twcore.html"
            >臺灣核心-診斷報告（TW Core DiagnosticReport）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-ImagingStudy-twcore.html"
            >臺灣核心-影像檢查（TW Core ImagingStudy）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Diagnostic Imaging Result/Report</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Observation-clinical-result-twcore.html"
            >臺灣核心-臨床檢驗檢查（TW Core Observation Clinical Result）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-DiagnosticReport-twcore.html"
            >臺灣核心-診斷報告（TW Core DiagnosticReport）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-ImagingStudy-twcore.html"
            >臺灣核心-影像檢查（TW Core ImagingStudy）</a
          >
        </p>
      </td>
    </tr>
  </tbody>
</table>


#### **與醫療保健提供者和患者之間的互動相關的資訊：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Encounter</strong></th>
      <th align="left">
        <a
          href="StructureDefinition-Encounter-twcore.html"
          >臺灣核心-就醫事件（TW Core Encounter）</a
        >
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- Identifier</td>
      <td align="left">
        <a
          href="StructureDefinition-Encounter-twcore.html"
          >臺灣核心-就醫事件（TW Core Encounter）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Type</td>
      <td align="left">
        <a
          href="StructureDefinition-Encounter-twcore.html"
          >臺灣核心-就醫事件（TW Core Encounter）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Diagnosis</td>
      <td align="left">
        <a
          href="StructureDefinition-Condition-twcore.html"
          >臺灣核心-病情、問題或診斷（TW Core Condition）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Time</td>
      <td align="left">
        <a
          href="StructureDefinition-Encounter-twcore.html"
          >臺灣核心-就醫事件（TW Core Encounter）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Location</td>
      <td align="left">
        <a
          href="StructureDefinition-Encounter-twcore.html"
          >臺灣核心-就醫事件（TW Core Encounter）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Disposition</td>
      <td align="left">
        <a
          href="StructureDefinition-Encounter-twcore.html"
          >臺灣核心-就醫事件（TW Core Encounter）</a
        >
      </td>
    </tr>
  </tbody>
</table>


#### **可用服務或資源的實體位置：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Facility Information</strong></th>
      <th align="left">
        <a
          href="StructureDefinition-Location-twcore.html"
          >臺灣核心-地點（TW Core Location）</a
        >
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- Identifier</td>
      <td align="left">
        <a
          href="StructureDefinition-Location-twcore.html"
          >臺灣核心-地點（TW Core Location）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Type</td>
      <td align="left">
        <a
          href="StructureDefinition-Location-twcore.html"
          >臺灣核心-地點（TW Core Location）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Name</td>
      <td align="left">
        <a
          href="StructureDefinition-Location-twcore.html"
          >臺灣核心-地點（TW Core Location）</a
        >
      </td>
    </tr>
  </tbody>
</table>


#### **目標：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Goals and Preferences</strong></th>
      <th align="left">
        <a
          href="StructureDefinition-Goal-twcore.html"
          >臺灣核心-目標（TW Core Goal）</a
        >
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- Patient Goals</td>
      <td align="left">
        <a
          href="StructureDefinition-Goal-twcore.html"
          >臺灣核心-目標（TW Core Goal）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- SDOH Goals</td>
      <td align="left">
        <a
          href="StructureDefinition-Goal-twcore.html"
          >臺灣核心-目標（TW Core Goal）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Treatment Intervention Preference</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-treatment-intervention-preference-twcore.html"
          >臺灣核心-病人治療偏好註記（TW Core Observation Treatment Intervention
          Preference）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Care Experience Preference</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-careExperiencePreference-twcore.html"
          >臺灣核心-病人照護偏好註記（TW Core Observation Care Experience
          Preference）</a
        >
      </td>
    </tr>
  </tbody>
</table>


#### **與個人醫療保險範圍相關的資料：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Health Insurance Information</strong></th>
      <th align="left">
        <p>
          <a
            href="StructureDefinition-Coverage-twcore.html"
            >臺灣核心-給付範圍（TW Core Coverage）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Organization-twcore.html"
            >臺灣核心-機構（TW Core Organization）</a
          >
        </p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- Coverage Status</td>
      <td align="left">
        <a
          href="StructureDefinition-Coverage-twcore.html"
          >臺灣核心-給付範圍（TW Core Coverage）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Coverage Type</td>
      <td align="left">
        <a
          href="StructureDefinition-Coverage-twcore.html"
          >臺灣核心-給付範圍（TW Core Coverage）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Relationship to Subscriber</td>
      <td align="left">
        <a
          href="StructureDefinition-Coverage-twcore.html"
          >臺灣核心-給付範圍（TW Core Coverage）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Member Identifier</td>
      <td align="left">
        <a
          href="StructureDefinition-Coverage-twcore.html"
          >臺灣核心-給付範圍（TW Core Coverage）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Subscriber Identifier</td>
      <td align="left">
        <a
          href="StructureDefinition-Coverage-twcore.html"
          >臺灣核心-給付範圍（TW Core Coverage）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Group Number</td>
      <td align="left">
        <a
          href="StructureDefinition-Coverage-twcore.html"
          >臺灣核心-給付範圍（TW Core Coverage）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Payer Identifier</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Coverage-twcore.html"
            >臺灣核心-給付範圍（TW Core Coverage）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Organization-twcore.html"
            >臺灣核心-機構（TW Core Organization</a
          >
        </p>
      </td>
    </tr>
  </tbody>
</table>


#### **對患者、患者家屬或患者的醫療保健提供者感興趣、重要性或擔憂的健康相關問題進行評估，以識別需求、問題或狀況：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Health Status Assessments</strong></th>
      <th align="left">
        <p>
          <a
            href="StructureDefinition-Observation-simple-twcore.html"
            >臺灣核心-通用檢驗檢查（TW Core Simple Observation）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Condition-twcore.html"
            >臺灣核心-病情、問題或診斷（TW Core Condition）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Observation-screening-assessment-twcore.html"
            >臺灣核心-健康狀態篩檢與評估（TW Core Observation Screening
            Assessment）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-QuestionnaireResponse-twcore.html"
            >臺灣核心-問卷題目回覆（TW Core QuestionnaireResponse）</a
          >
        </p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- Health Concerns</td>
      <td align="left">
        <a
          href="StructureDefinition-Condition-twcore.html"
          >臺灣核心-病情、問題或診斷（TW Core Condition）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Functional Status</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Observation-simple-twcore.html"
            >臺灣核心-通用檢驗檢查（TW Core Simple Observation）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Condition-twcore.html"
            >臺灣核心-病情、問題或診斷（TW Core Condition）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Observation-screening-assessment-twcore.html"
            >臺灣核心-健康狀態篩檢與評估（TW Core Observation Screening
            Assessment）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-QuestionnaireResponse-twcore.html"
            >臺灣核心-問卷題目回覆（TW Core QuestionnaireResponse）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Disability Status</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Observation-simple-twcore.html"
            >臺灣核心-通用檢驗檢查（TW Core Simple Observation）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Condition-twcore.html"
            >臺灣核心-病情、問題或診斷（TW Core Condition）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Observation-screening-assessment-twcore.html"
            >臺灣核心-健康狀態篩檢與評估（TW Core Observation Screening
            Assessment）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-QuestionnaireResponse-twcore.html"
            >臺灣核心-問卷題目回覆（TW Core QuestionnaireResponse）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Mental/Cognitive Status</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Observation-simple-twcore.html"
            >臺灣核心-通用檢驗檢查（TW Core Simple Observation）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Condition-twcore.html"
            >臺灣核心-病情、問題或診斷（TW Core Condition）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Observation-screening-assessment-twcore.html"
            >臺灣核心-健康狀態篩檢與評估（TW Core Observation Screening
            Assessment）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-QuestionnaireResponse-twcore.html"
            >臺灣核心-問卷題目回覆（TW Core QuestionnaireResponse）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Pregnancy Status</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Observation-pregnancy-status-twcore.html"
            >臺灣核心-妊娠狀態（TW Core Observation Pregnancy Status）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Observation-pregnancy-intent-twcore.html"
            >臺灣核心-妊娠計畫（TW Core Observation Pregnancy Intent）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Alcohol Use</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Observation-simple-twcore.html"
            >臺灣核心-通用檢驗檢查（TW Core Simple Observation）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Condition-twcore.html"
            >臺灣核心-病情、問題或診斷（TW Core Condition）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Observation-screening-assessment-twcore.html"
            >臺灣核心-健康狀態篩檢與評估（TW Core Observation Screening
            Assessment）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-QuestionnaireResponse-twcore.html"
            >臺灣核心-問卷題目回覆（TW Core QuestionnaireResponse）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Substance Use</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Observation-simple-twcore.html"
            >臺灣核心-通用檢驗檢查（TW Core Simple Observation）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Condition-twcore.html"
            >臺灣核心-病情、問題或診斷（TW Core Condition）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Observation-screening-assessment-twcore.html"
            >臺灣核心-健康狀態篩檢與評估（TW Core Observation Screening
            Assessment）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-QuestionnaireResponse-twcore.html"
            >臺灣核心-問卷題目回覆（TW Core QuestionnaireResponse）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Physical Activity</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Observation-simple-twcore.html"
            >臺灣核心-通用檢驗檢查（TW Core Simple Observation）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Condition-twcore.html"
            >臺灣核心-病情、問題或診斷（TW Core Condition）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Observation-screening-assessment-twcore.html"
            >臺灣核心-健康狀態篩檢與評估（TW Core Observation Screening
            Assessment）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-QuestionnaireResponse-twcore.html"
            >臺灣核心-問卷題目回覆（TW Core QuestionnaireResponse）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- SDOH Assessment</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Observation-simple-twcore.html"
            >臺灣核心-通用檢驗檢查（TW Core Simple Observation）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Condition-twcore.html"
            >臺灣核心-病情、問題或診斷（TW Core Condition）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Observation-screening-assessment-twcore.html"
            >臺灣核心-健康狀態篩檢與評估（TW Core Observation Screening
            Assessment）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-QuestionnaireResponse-twcore.html"
            >臺灣核心-問卷題目回覆（TW Core QuestionnaireResponse）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Smoking Status</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-smoking-status-twcore.html"
          >臺灣核心-吸菸狀態（TW Core Smoking Status Observation）</a
        >
      </td>
    </tr>
  </tbody>
</table>


#### **疫苗接種記錄：**

<table>
  <thead>
    <tr>
      <th align="left" style="width: 500px"><strong>Immunizations</strong></th>
      <th align="left">
        <a
          href="StructureDefinition-Immunization-twcore.html"
          >臺灣核心-疫苗接種（TW Core Immunization）</a
        >
      </th>
    </tr>
  </thead>
</table>


#### **用於醫療目的的儀器、機器、器具、植入物、軟體或其他物品：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Medical Devices</strong></th>
      <th align="left">
        <a
          href="StructureDefinition-Device-twcore.html"
          >臺灣核心-植入式裝置（TW Core Implantable Device）</a
        >
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">
        - Unique Device Identifier（s） for a Patient&#39;s Implantable Device（s）
      </td>
      <td align="left">
        <a
          href="StructureDefinition-Device-twcore.html"
          >臺灣核心-植入式裝置（TW Core Implantable Device）</a
        >
      </td>
    </tr>
  </tbody>
</table>


#### **分析臨床樣本以獲得有關患者健康的資訊：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Laboratory</strong></th>
      <th align="left">
        <p>
          <a
            href="StructureDefinition-Observation-laboratoryResult-twcore.html"
            >臺灣核心-實驗室檢驗檢查（TW Core Observation Laboratory Result）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-DiagnosticReport-twcore.html"
            >臺灣核心-診斷報告（TW Core DiagnosticReport）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Specimen-twcore.html"
            >臺灣核心-檢體（TW Core Specimen）</a
          >
        </p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- Tests</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Observation-laboratoryResult-twcore.html"
            >臺灣核心-實驗室檢驗檢查（TW Core Observation Laboratory Result）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-DiagnosticReport-twcore.html"
            >臺灣核心-診斷報告（TW Core DiagnosticReport）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Values/Results</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Observation-laboratoryResult-twcore.html"
            >臺灣核心-實驗室檢驗檢查（TW Core Observation Laboratory Result）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-DiagnosticReport-twcore.html"
            >臺灣核心-診斷報告（TW Core DiagnosticReport）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Specimen Type</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Observation-laboratoryResult-twcore.html"
            >臺灣核心-實驗室檢驗檢查（TW Core Observation Laboratory Result）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Specimen-twcore.html"
            >臺灣核心-檢體（TW Core Specimen）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Result Status</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Observation-laboratoryResult-twcore.html"
            >臺灣核心-實驗室檢驗檢查（TW Core Observation Laboratory Result）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-DiagnosticReport-twcore.html"
            >臺灣核心-診斷報告（TW Core DiagnosticReport）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Result Unit of Measure</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-laboratoryResult-twcore.html"
          >臺灣核心-實驗室檢驗檢查（TW Core Observation Laboratory Result）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Result Reference Range</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-laboratoryResult-twcore.html"
          >臺灣核心-實驗室檢驗檢查（TW Core Observation Laboratory Result）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Result Interpretation</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-laboratoryResult-twcore.html"
          >臺灣核心-實驗室檢驗檢查（TW Core Observation Laboratory Result）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Specimen Identifier</td>
      <td align="left">
        <a
          href="StructureDefinition-Specimen-twcore.html"
          >臺灣核心-檢體（TW Core Specimen）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Specimen Source Site</td>
      <td align="left">
        <a
          href="StructureDefinition-Specimen-twcore.html"
          >臺灣核心-檢體（TW Core Specimen）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Specimen Condition Acceptability</td>
      <td align="left">
        <a
          href="StructureDefinition-Specimen-twcore.html"
          >臺灣核心-檢體（TW Core Specimen）</a
        >
      </td>
    </tr>
  </tbody>
</table>


#### **用於診斷、治癒、緩解、治療或預防疾病的藥物：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Medications</strong></th>
      <th align="left">
        <p>
          <a
            href="StructureDefinition-Medication-twcore.html"
            >臺灣核心-藥品（TW Core Medication）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-MedicationRequest-twcore.html"
            >臺灣核心-藥品請求（TW Core MedicationRequest）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-MedicationDispense-twcore.html"
            >臺灣核心-配藥或藥品調劑（TW Core MedicationDispense）</a
          >
        </p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- Medications</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Medication-twcore.html"
            >臺灣核心-藥品（TW Core Medication）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-MedicationRequest-twcore.html"
            >臺灣核心-藥品請求（TW Core MedicationRequest）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Dose</td>
      <td align="left">
        <a
          href="StructureDefinition-MedicationRequest-twcore.html"
          >臺灣核心-藥品請求（TW Core MedicationRequest）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Dose Unit of Measure</td>
      <td align="left">
        <a
          href="StructureDefinition-MedicationRequest-twcore.html"
          >臺灣核心-藥品請求（TW Core MedicationRequest）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Indication</td>
      <td align="left">
        <a
          href="StructureDefinition-MedicationRequest-twcore.html"
          >臺灣核心-藥品請求（TW Core MedicationRequest）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Medication Instructions</td>
      <td align="left">
        <a
          href="StructureDefinition-MedicationRequest-twcore.html"
          >臺灣核心-藥品請求（TW Core MedicationRequest）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Medication Adherence</td>
      <td align="left">
        <a
          href="StructureDefinition-MedicationRequest-twcore.html"
          >臺灣核心-藥品請求（TW Core MedicationRequest）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Fill Status</td>
      <td align="left">
        <a
          href="StructureDefinition-MedicationRequest-twcore.html"
          >臺灣核心-藥品請求（TW Core MedicationRequest）</a
        >
      </td>
    </tr>
  </tbody>
</table>


#### **用於對個人進行分類以進行識別、記錄匹配和其他目的的資料：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Patient Demographics</strong></th>
      <th align="left">
        <p>
          <a
            href="StructureDefinition-Patient-twcore.html"
            >臺灣核心-病人（TW Core Patient）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Observation-sexual-orientation-twcore.html"
            >臺灣核心-性傾向（TW Core Observation Sexual Orientation）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Observation-occupation-twcore.html"
            >臺灣核心-職業（TW Core Observation Occupation）</a
          >
        </p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- First Name</td>
      <td align="left">
        <a
          href="StructureDefinition-Patient-twcore.html"
          >臺灣核心-病人（TW Core Patient）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Last Name</td>
      <td align="left">
        <a
          href="StructureDefinition-Patient-twcore.html"
          >臺灣核心-病人（TW Core Patient）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Previous Name</td>
      <td align="left">
        <a
          href="StructureDefinition-Patient-twcore.html"
          >臺灣核心-病人（TW Core Patient）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Sex</td>
      <td align="left">
        <a
          href="StructureDefinition-Patient-twcore.html"
          >臺灣核心-病人（TW Core Patient）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Date of Birth</td>
      <td align="left">
        <a
          href="StructureDefinition-Patient-twcore.html"
          >臺灣核心-病人（TW Core Patient）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Date of Death</td>
      <td align="left">
        <a
          href="StructureDefinition-Patient-twcore.html"
          >臺灣核心-病人（TW Core Patient）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Race</td>
      <td align="left">-</td>
    </tr>
    <tr>
      <td align="left">- Gender Identity</td>
      <td align="left">
        <a
          href="StructureDefinition-Patient-twcore.html"
          >臺灣核心-病人（TW Core Patient）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Sexual Orientation</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-sexual-orientation-twcore.html"
          >臺灣核心-性傾向（TW Core Observation Sexual Orientation）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Address</td>
      <td align="left">
        <a
          href="StructureDefinition-Patient-twcore.html"
          >臺灣核心-病人（TW Core Patient）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Previous Address</td>
      <td align="left">
        <a
          href="StructureDefinition-Patient-twcore.html"
          >臺灣核心-病人（TW Core Patient）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Email</td>
      <td align="left">
        <a
          href="StructureDefinition-Patient-twcore.html"
          >臺灣核心-病人（TW Core Patient）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Phone Number</td>
      <td align="left">
        <a
          href="StructureDefinition-Patient-twcore.html"
          >臺灣核心-病人（TW Core Patient）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Related Person&#39;s Name</td>
      <td align="left">
        <a
          href="StructureDefinition-RelatedPerson-twcore.html"
          >臺灣核心-相關人士（TW Core RelatedPerson）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Related Person&#39;s Relationship</td>
      <td align="left">
        <a
          href="StructureDefinition-RelatedPerson-twcore.html"
          >臺灣核心-相關人士（TW Core RelatedPerson）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Occupation</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-occupation-twcore.html"
          >臺灣核心-職業（TW Core Observation Occupation）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Occupation Industry</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-occupation-twcore.html"
          >臺灣核心-職業（TW Core Observation Occupation）</a
        >
      </td>
    </tr>
  </tbody>
</table>


#### **指導患者治療的結論和工作假設以及未來治療的建議：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Patient Summary and Plan</strong></th>
      <th align="left">
        <a
          href="StructureDefinition-CarePlan-twcore.html"
          >臺灣核心-照護計畫（TW Core CarePlan）</a
        >
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- Assessment and Plan of Treatment</td>
      <td align="left">
        <a
          href="StructureDefinition-CarePlan-twcore.html"
          >臺灣核心-照護計畫（TW Core CarePlan）</a
        >
      </td>
    </tr>
  </tbody>
</table>


#### **診斷或就醫的原因：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Problems</strong></th>
      <th align="left">
        <a
          href="StructureDefinition-Condition-twcore.html"
          >臺灣核心-病情、問題或診斷（TW Core Condition）</a
        >
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- Date of Resolution</td>
      <td align="left">
        <a
          href="StructureDefinition-Condition-twcore.html"
          >臺灣核心-病情、問題或診斷（TW Core Condition）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Date of Diagnosis</td>
      <td align="left">
        <a
          href="StructureDefinition-Condition-twcore.html"
          >臺灣核心-病情、問題或診斷（TW Core Condition）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- SDOH Problems/Health Concerns</td>
      <td align="left">
        <a
          href="StructureDefinition-Condition-twcore.html"
          >臺灣核心-病情、問題或診斷（TW Core Condition）</a
        >
      </td>
    </tr>
  </tbody>
</table>


#### **作為提供護理的一部分，為患者或在患者身上進行的活動：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Procedures</strong></th>
      <th align="left">
        <p>
          <a
            href="StructureDefinition-Procedure-twcore.html"
            >臺灣核心-處置或手術（TW Core Procedure）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-ServiceRequest-twcore.html"
            >臺灣核心-服務請求（TW Core ServiceRequest）</a
          >
        </p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- Procedure</td>
      <td align="left">
        <a
          href="StructureDefinition-Procedure-twcore.html"
          >臺灣核心-處置或手術（TW Core Procedure）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Performance Time</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-Procedure-twcore.html"
            >臺灣核心-處置或手術（TW Core Procedure）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-DiagnosticReport-twcore.html"
            >臺灣核心-診斷報告（TW Core DiagnosticReport）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Immunization-twcore.html"
            >臺灣核心-疫苗接種（TW Core Immunization）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- Reason for Referral</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-ServiceRequest-twcore.html"
            >臺灣核心-服務請求（TW Core ServiceRequest）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Procedure-twcore.html"
            >臺灣核心-處置或手術（TW Core Procedure）</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td align="left">- SDOH Interventions</td>
      <td align="left">
        <p>
          <a
            href="StructureDefinition-ServiceRequest-twcore.html"
            >臺灣核心-服務請求（TW Core ServiceRequest）</a
          >
        </p>
        <p>
          <a
            href="StructureDefinition-Procedure-twcore.html"
            >臺灣核心-處置或手術（TW Core Procedure）</a
          >
        </p>
      </td>
    </tr>
  </tbody>
</table>


#### **元資料（metadata）或有關資料的額外資訊，涉及資料創建者和創建時間（電子/數位簽章）：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Provenance</strong></th>
      <th align="left">
        <a
          href="StructureDefinition-Provenance-twcore.html"
          >臺灣核心-出處（TW Core Provenance）</a
        >
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- Author Time Stamp</td>
      <td align="left">
        <a
          href="StructureDefinition-Provenance-twcore.html"
          >臺灣核心-出處（TW Core Provenance）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Author Organization</td>
      <td align="left">
        <a
          href="StructureDefinition-Provenance-twcore.html"
          >臺灣核心-出處（TW Core Provenance）</a
        >
      </td>
    </tr>
  </tbody>
</table>


#### **患者的生理測量，顯示身體維持生命功能的狀態：**

<table>
  <thead>
    <tr>
      <th align="left"><strong>Vital Signs</strong></th>
      <th align="left">
        <a
          href="StructureDefinition-Observation-vitalSigns-twcore.html"
          >臺灣核心-生命體徵（TW Core Observation Vital Signs）</a
        >
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">- Average Blood Pressure</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-averageBloodPressure-twcore.html"
          >臺灣核心-平均血壓（TW Core Observation Average Blood Pressure）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Diastolic blood pressure</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-bloodPressure-twcore.html"
          >臺灣核心-血壓（TW Core Observation Blood Pressure）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Systolic blood pressure</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-bloodPressure-twcore.html"
          >臺灣核心-血壓（TW Core Observation Blood Pressure）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Body height</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-body-height-twcore.html"
          >臺灣核心-身高（TW Core Observation Body Height）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Body weight</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-body-temperature-twcore.html"
          >臺灣核心-體溫（TW Core Observation Body Temperature）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Heart rate</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-heart-rate-twcore.html"
          >臺灣核心-心率（TW Core Observation Heart Rate）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Respiratory rate</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-respiratory-rate-twcore.html"
          >臺灣核心-呼吸速率（TW Core Observation Respiratory Rate）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Body temperature</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-body-temperature-twcore.html"
          >臺灣核心-體溫（TW Core Observation Body Temperature）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Pulse oximetry</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-pulse-oximetry-twcore.html"
          >臺灣核心-脈搏血氧飽和度（TW Core Observation Pulse Oximetry）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Inhaled oxygen concentration</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-pulse-oximetry-twcore.html"
          >臺灣核心-脈搏血氧飽和度（TW Core Observation Pulse Oximetry）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- BMI Percentile （2-20 years old）</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-pediatric-bmi-age-twcore.html"
          >臺灣核心-兒童及青少年身體質量指數（TW Core Pediatric BMI for Age
          Observation）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">- Weight-for-length Percentile （Birth - 36 months）</td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-pediatric-weight-height-twcore.html"
          >臺灣核心-兒童生長曲線（TW Core Pediatric Weight for Height
          Observation）</a
        >
      </td>
    </tr>
    <tr>
      <td align="left">
        - Occipital Frontal Head Circumference Percentile （Birth - 36 months）
      </td>
      <td align="left">
        <a
          href="StructureDefinition-Observation-pediatric-head-circumference-twcore.html"
          >臺灣核心-兒童頭圍百分位數（TW Core Observation Pediatric Head
          Occipital Frontal Circumference Percentile）</a
        >
      </td>
    </tr>
  </tbody>
</table>


---

// File: input/pagecontent/validates.md

<style>
body{font-family: arial,"Microsoft JhengHei","微軟正黑體",sans-serif !important;}
</style>

本頁將說明如何驗證實作檔是否符合TW Core IG規範。

### IG驗證公開資源參考
- HL7總會線上驗證工具：[https://validator.fhir.org/](https://validator.fhir.org/){:target="_blank"} （於HL7總會與衛生福利部註冊之IG才能使用此驗證方式）


### 使用國際HL7提供的公開免費驗證器validator_cli.jar檔，以命令提示字元測試驗證。

若IG已註冊可直接跳至Step 3，若無則須從Step 1開始。



#### Step 1：手動下載IG Package

<div style="padding-left: 10px;">
<p>於「<a href="downloads.html">結構定義與範例檔案下載</a>」頁下載<a href="package.tgz">整個 TW Core IG 的 Package</a>。</p>
<img src="validates/1-1.png" alt="Downloading the Pacakge" style="display: block;margin-left: auto;margin-right: auto;width: 80%;margin-bottom: 15px;" class="figure-img img-responsive img-rounded center-block"/>


<div class="bg-warning">
<p><b>下載下來的package.tgz檔案，請先解壓縮成Packag資料夾檔案！<br/>
  解壓縮第一次還是package.tar壓縮檔案，解壓縮第二次才是package資料夾。</b> 
</p>
<img src="validates/1-2.gif" alt="Unzip the Pacakge" style="display: block;margin-left: auto;margin-right: auto;width: 70%;" class="figure-img img-responsive img-rounded center-block"/>
<br/>
</div>
<div style="clear:both;"></div>
</div>



#### Step 2：放置 IG Package檔案

<div style="padding-left: 10px;"> 
<p>Package Cache檔案路徑如下：</p>
<li>Windows：c:\users\&lt;username&gt;\.fhir\packages</li>
<li>MacOS/Unix/Linux：/~/.fhir/packages</li>
<p>可試跑語法確認Package Cache路徑與所設定路徑一致。</p>
<p>在packages路徑下創建一個資料夾並命名為<code>tw.gov.mohw.twcore#0.1.1</code>，將package.tgz解壓縮的package資料夾放置於此。（此處以0.1.1版為例，請根據實際所需的版本更改內容）</p>
<div class="bg-warning"><p><b>若是第一次執行，須自行新增「.fhir」資料夾及其項下的「packages」資料夾。</b></p></div>
<img src="validates/2.png" alt="Downloading the Pacakge" style="display: block;margin-left: auto;margin-right: auto;width: 80%;margin-bottom: 15px;" class="figure-img img-responsive img-rounded center-block"/>
<div style="clear:both;"></div>
</div>


#### Step 3：下載validator_cli.jar檔

<div style="padding-left: 10px;"> 
<p>進入HL7驗證說明官網(<a href="https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator#UsingtheFHIRValidator-Downloadingthevalidator">Confluence Pages of Health Level 7 (HL7) International</a>)後尋找「Downloading the validator」項目，下載「<a href="https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar">validator_cli.jar</a>」檔。</p>
<img src="validates/3.png" alt="Downloading the Pacakge" style="display: block;margin-left: auto;margin-right: auto;width: 80%;margin-bottom: 15px;" class="figure-img img-responsive img-rounded center-block"/>

<div style="clear:both;"></div>
</div>



#### Step 4：使用您的實例JSON檔或下載範例JSON檔

<div style="padding-left: 10px;"> 
<p>如果您的手邊已經有一個依據TW Core IG實作的JSON檔，你可以使用你的實例檔案，如果你沒有這樣的檔案，則可以下載如下圖所示的TW Core IG的「病人基本資料」範例。如下圖所示，請於TW Core IG網站上，找到範例檔頁面中的「<a href="Patient-pat-example.json">病人基本資料</a>」，點選「JSON」頁籤中的「Download」，若沒有自動下載，請按右鍵，選擇「另存新檔...」。（此處以Patient Profile的範例為例）</p>
<img class="figure-img img-responsive img-rounded center-block" src="validates/4-1.png" alt="病人基本資料" style="display: block;margin-left: auto;margin-right: auto;width: 80%;"/>
<div style="clear:both;"></div>
<img class="figure-img img-responsive img-rounded center-block" src="validates/4-2.png" alt="病人基本資料JSON檔" style="display: block;margin-left: auto;margin-right: auto;width: 80%;"/> 
<div style="clear:both;"></div>
</div>

#### Step 5：放置validator_cli.jar檔與範例檔

<div style="padding-left: 10px;"> 
<p>請將Step 4下載之範例JSON檔(或您自己的實例JSON檔)及Step 3 validator_cli.jar檔，放置於「C:\」目錄中。</p>
<div class="bg-warning"><p style="color: firebrick;"><b>這邊只是為了方便驗證時簡化語法及避免太複雜的說明，而將上述兩個檔案放在相同目錄，使用者/實作者可視情況放在不同的目錄，但後續驗證語法也要自行做相對應的調整。</b></p></div>
<img src="validates/5.png" alt="put the files" style="display: block;margin-left: auto;margin-right: auto;width: 70%;" class="figure-img img-responsive img-rounded center-block"/>
<div style="clear:both;"></div>
</div>


#### Step 6：驗證檔案是否符合Profiles格式

##### Windows


<div style="padding-left: 10px;"> 




<p>請開啟「命令提示字元」，將檔案路徑指向至Step 5檔案所放至之目錄。</p>
<li>方式①：在資料夾的檔案路徑顯示列中直接輸入「cmd」並按Enter鍵。</li>
<li>方式②：打開命令提示字元，輸入「cd &lt;檔案所放至之目錄&gt;」將檔案路徑指向所指定目錄。</li>


<img src="validates/6-1.png" alt="cmd" style="display: block;margin-left: auto;margin-right: auto;width: 80%;" class="figure-img img-responsive center-block"/>
<div class="bg-warning"><p style="color: firebrick;"><b>若執行失敗，請以系統管理員身分執行命令提示字元。</b></p></div>



##### MacOS


<p>請開啟「終端機(terminal)」，將檔案路徑指向至Step 5檔案所放至之目錄。</p>
<li>方式①：按滑鼠右鍵，點選「服務」中的「新增位於檔案夾位置的終端機視窗」。</li>
<li>方式②：打開終端機，輸入「cd "&lt;檔案所放至之目錄&gt;"」將檔案路徑指向所指定目錄。</li>

<img src="validates/6-2.png" alt="cmd" style="display: block;margin-left: auto;margin-right: auto;width: 80%;" class="figure-img img-responsive center-block"/>





<p>請於「命令提示字元」依序輸入以下語法：<br/>
　1. FHIR提供的驗證程式－<b style="color: red;">紅色①</b>『<code>java -jar validator_cli.jar</code>』<br/>
　2. 要驗證的Profile實例(即JSON檔)－<b style="color: #4D82B8;">藍色②</b>『<code>Patient-pat-example.json</code>』(即為您於Step5所放置於C:\的JSON檔案名稱)<br/>
　3. 驗證的IG及其版本號－<b style="color: #E78E46;">橘色③</b>『<code>-version 4.0 -ig tw.gov.mohw.twcore</code>』，鍵入Enter，即可查看驗證結果<br />
　<b style="color: red;">①</b>、<b style="color: #4D82B8;">②</b>、<b style="color: #E78E46;">③</b>之間需有空格，完整語法即：<code>java -jar validator_cli.jar Patient-pat-example.json -version 4.0 -ig tw.gov.mohw.twcore</code></p>
  <img src="validates/6-3.png" alt="validates" style="display: block;margin-left: auto;margin-right: auto;width: 80%;margin-bottom: 15px;" class="figure-img img-responsive img-rounded center-block"/>
  <div style="clear:both;"></div>


<p>若驗證「通過」，可看到「Success: 0 errors, 0 warnings, 3 notes」，原則上看到0 errors即代表通過驗證，warning及note可參考就好，不影響實作。後續的更版可能會解決其中幾個notes (即Information)。</p>
<img src="validates/6-4.png" alt="validates success" style="display: block;margin-left: auto;margin-right: auto;width: 80%;margin-bottom: 15px;" class="figure-img img-responsive center-block"/>
<p>若驗證「不通過」，可看到「*FAILURE*: ...」，可看出Patient裡的contact有錯誤，位置於第106行及第108行。再依據錯誤訊息修改實例後重新驗證，直到驗證成功為止，即表示實例符合Profile定義。</p>
<img src="validates/6-5.png" alt="validates failure" style="display: block;margin-left: auto;margin-right: auto;width: 80%;margin-bottom: 15px;" class="figure-img img-responsive center-block"/>
<div style="clear:both;"></div>
</div>




---

// File: input/includes/quickstart-intro.md

---

**快速啟動**{:#search style="font-size: 20px;"}
<a name="quick-start"> </a>

---


---

// File: input/includes/quickstart-note.md

---

**快速啟動**{:#search style="font-size: 20px;"}
<a name="quick-start"> </a>

---
   
以下概述了此Profile所需的RESTful FHIR互動功能。有關TW Core IG支援的RESTful互動功能的完整清單，請參閱[TW Core Server能力聲明](CapabilityStatement-CapabilityStatementTWCoreServer.html)。

---

// File: input/intro-notes/StructureDefinition-AllergyIntolerance-twcore-intro.md

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

// File: input/intro-notes/StructureDefinition-AllergyIntolerance-twcore-notes.md

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

// File: input/intro-notes/StructureDefinition-Bundle-document-twcore-notes.md

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

// File: input/intro-notes/StructureDefinition-Bundle-message-twcore-notes.md

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

// File: input/intro-notes/StructureDefinition-Bundle-twcore-intro.md

{% include quickstart-intro.md %}

## Resource Bundle - 內容

一個用於儲存一組resources的容器（container）。

### 範圍與使用

常見的操作是將一堆 resources 集合在一起，放到一個單獨的地方，同時保留它們的相關訊息。在 FHIR 中，這個操作叫做「bundling resources」。這樣做對於很多不同的情境都很有用，例如：

* 在伺服器操作中返回符合某些準則的一組 resources（參見 [RESTful Search](http://hl7.org/fhir/R4/http.html#search)）
* 在伺服器上的歷史紀錄操作中返回 resources 的一組版本（參見 [History](http://hl7.org/fhir/R4/http.html#history)）
* 將一組 resources 作為訊息交換的一部分發送（參見 [Messaging](http://hl7.org/fhir/R4/messaging.html)）
* 將一組內嵌（self-contained）的 resources 集合在一起，形成可互換且可保存的集合，具有臨床完整性，例如臨床文件。（參見 [Documents](http://hl7.org/fhir/R4/documents.html)）
* 在伺服器上作為單一操作創建/更新/刪除一組 resources（包括作為單個原子交易進行，意即一個不可再分的、不可切分的交易，它要麼完全執行，要麼完全不執行。）（參見 [Transactions](http://hl7.org/fhir/R4/http.html#transaction)）
* 儲存一組resources

### 界限與關聯

有兩種方式可以將 resources 聚集在一起以便於傳輸和永久化：分別為「[內嵌的resources](http://hl7.org/fhir/R4/references.html#contained)」和「bundles」。兩者之間有一個重要的區別：

* 內嵌的 resources 是「在」容器內部：它們只能在容器的上下文中被解釋和/或改變。
* bundle是一組可以獨立存在的 resources ：例如，它們也可能直接透過[RESTful API](http://hl7.org/fhir/R4/http.html)被存取

除了這兩種技術機制之外，還有三種行政和基礎建設的 resources ，也支援內容的分組（grouping）。這些 resources 不直接包含其他 resources ，而是使用「Reference」來指向被分組的resources：


* [List（清單）](http://hl7.org/fhir/R4/list.html) resource — 列舉一組平面的 resources 並提供管理這組 resources 的功能。雖然一個特定的List實例可能代表某一個時刻的一個「快照（snapshot）」為這個清單提供一個內容視圖，但從業務過程的角度來看，「List」的概念是動態的 ，它會隨著時間的流逝，項目會被增加和移除。这种動態性使得List成为一个靈活的工具，可以用来跟踪和管理隨著時間變化的 resources 集合．List resource參照其他 resources ，它的使用可能有特定的業務意義。
* [Group（群體）](http://hl7.org/fhir/R4/group.html) resource — 透過列舉或描述群組成員的特質來定義特定的人員、動物、裝置等的Group。Group resource 可能會隱式地參照其他 resources 。Group旨在作為一個整體被操作或觀察；例如：對一個Group進行治療、計算一個群體的風險等。這個 resource 通常用於公共衛生（例如：描述一個高風險人群）、臨床試驗（例如：定義一個試驗對象）和類似目的。
* [Composition（臨床文件架構）](StructureDefinition-Composition-twcore.html) resource — 定義了一組健康相關的資訊，這些資訊被組合在一起形成一份單一邏輯的文件，提供了一個連貫的意義聲明，建立了其自身的上下文，並對於誰在做出聲明提供臨床證明。Composition resource 提供了一個FHIR [文件（document）](https://hl7.org/fhir/R4/documents.html)的基本結構。文件的全部內容使用Bundle來表達，Compositions經常參照Lists作為特定小節（<code>sections</code>）的焦點（<code>focus</code>）。

這三個 resources 代表它們所參照的 resources 的有意義的分組（例如：一個出院用藥的List，一個臨床試驗參與者的Group，一組已簽名文件的resources），而一個bundle僅僅是用於傳輸和儲存的 resources 的容器。這些未必詳盡，其他的 resources 也提供了群組功能。

---

// File: input/intro-notes/StructureDefinition-Bundle-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Bundle-id.html)** 查詢所有Bundle：               
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Bundle?_id=[id]`  
    `GET [base]/Bundle/[id]`

    例子：  
      (1) GET [base]/Bundle?_id=bun-example  
      (2) GET [base]/Bundle/bun-example


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`identifier`](SearchParameter-Bundle-identifier.html)** 查詢所有Bundle：              
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Bundle?identifier={system|}[code]`

    例子：  
      (1) GET [base]/Bundle?identifier=https://www.cdc.gov.tw/|01014857930415100059403

---

// File: input/intro-notes/StructureDefinition-CarePlan-twcore-notes.md

{% include quickstart-note.md %}

#### 必須支援以下查詢參數：

1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-CarePlan-patient.html)** 及 **[`category`](SearchParameter-CarePlan-category.html)** 查詢所有CarePlan：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/CarePlan?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/careplan-category-twy|assess-plan`

    例子：  
      (1) GET [base]/CarePlan?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/careplan-category-tw|assess-plan

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-CarePlan-patient.html)** 、 **[`category`](SearchParameter-CarePlan-category.html)** 及 **[`date`](SearchParameter-CarePlan-date.html)** 查詢所有CarePlan：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))   
    `GET [base]/CarePlan?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/careplan-category-twy|assess-plan&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/CarePlan?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/careplan-category-tw|assess-plan&date=ge2019-01-01T00:00:00Z  
      (2) GET [base]/CarePlan?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/careplan-category-tw|assess-plan&date=ge2018-01-01T00:00:00Z&date=le2019-01-01T00:00:00Z


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-CarePlan-patient.html)** 、 **[`category`](SearchParameter-CarePlan-category.html)** 及 **[`status`](SearchParameter-CarePlan-status.html)** 查詢所有CarePlan：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/CarePlan?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/careplan-category-twy|assess-plan&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/CarePlan?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/careplan-category-tw|assess-plan&status=active


3. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-CarePlan-patient.html)** 、 **[`category`](SearchParameter-CarePlan-category.html)** 、 **[`status`](SearchParameter-CarePlan-status.html)** 及 **[`date`](SearchParameter-CarePlan-date.html)** 查詢所有CarePlan：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))   
    `GET [base]/CarePlan?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/careplan-category-twy|assess-plan&status={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/CarePlan?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/careplan-category-tw|assess-plan&status=active&date=ge2019-01-01T00:00:00Z  
      (2) GET [base]/CarePlan?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/careplan-category-tw|assess-plan&status=active&date=ge2018-01-01T00:00:00Z&date=le2019-01-01T00:00:00Z


---

// File: input/intro-notes/StructureDefinition-CareTeam-twcore-notes.md

{% include quickstart-note.md %}

#### 必須支援以下查詢參數：

1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-CareTeam-patient.html)** 及 **[`status`](SearchParameter-CareTeam-status.html)** 查詢所有CareTeam：               
    - 包含支援透過以下`_include`參數：`CareTeam:participant:PractitionerRole,CareTeam:participant:Practitioner,CareTeam:participant:Patient,CareTeam:participant:RelatedPerson`    
  ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
  ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/CareTeam?patient={Type/}[id]&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/CareTeam?patient=Patient/pat-example&status=active  
      (1) GET [base]/CareTeam?patient=Patient/pat-example&status=active&_include=CareTeam:participant:RelatedPerson&_include=CareTeam:participant:Patient&_include=CareTeam:participant:Practitioner&_include=CareTeam:participant:PractitionerRole

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-CareTeam-patient.html)** 及 **[`role`](SearchParameter-CareTeam-role.html)** 查詢所有CareTeam：               
    - 包含支援透過以下`_include`參數：`CareTeam:participant:PractitionerRole,CareTeam:participant:Practitioner,CareTeam:participant:Patient,CareTeam:participant:RelatedPerson`    
  ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
  ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/CareTeam?patient={Type/}[id]&role={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/CareTeam?patient=Patient/pat-example&role=http://snomed.info/sct|17561000

---

// File: input/intro-notes/StructureDefinition-Composition-twcore-intro.md

{% include quickstart-intro.md %}

## Resource Composition - 內容

一組醫療相關資訊會被整合成一個單一邏輯套件（package），這個套件提供了一個連貫的意義表達，並確立了它自己的上下文。它包含了臨床上的證明，明確指出是誰做出這些陳述。Composition定義了一份文件所需的結構和敘述內容。但是單一個Composition本身並不構成一份完整的文件。反之，Composition必須是在Bundle中的第一個條目，且該`Bundle.type`必須是document。此外，從Composition參照的任何其他resources都必須作為後續條目包含在該Bundle中（例如：病人（Patient）、健康照護服務提供者（Practitioner）、就醫紀錄（Encounter）等）。

### 範圍與使用 

Composition是FHIR文件（[documents.html](https://hl7.org/fhir/R4/documents.html)）的基本結構，這些文件是不可更改的bundle，包含經過認證的敘述。一個單一的邏輯Composition可能與一系列衍生文件相關聯，每一份衍生文件都是該Composition的一個固定副本。
例如：想像您是一位醫生，正在使用一個電子健康紀錄（Electronic Health Record）系統。您為一位病人創建了一份初診報告，這份報告就是使用Composition為報告結構。它包括病人的基本資訊、症狀、初步診斷和治療計劃，當這份報告完成並保存後，它就成為Composition的一個「固定副本」，即不可更改的文件。隨後，每當這位病人回診，您都會基於最初的那份報告來創建新的隨訪記錄。這些隨訪記錄也是Composition的衍生文件，每份都是Composition獨立且不可更改的固定副本。它們可能包括更新的診斷、治療反應和新的治療計劃。

因此，「每一份都是該Composition的固定版本」在這個醫療場景中意味著，無論是原始的初診報告還是基於它創建的任何隨訪記錄，都是獨立且不可更改的文件，保留了創建時的準確資訊。

需要注意的是，Composition在EN13606及FHIR這兩項醫療資訊標準中的概念不完全相同。[EN 13606](http://en.wikipedia.org/wiki/EN_13606)中「Composition」這一專門術語是用來指一次對EHR系統的提交，常見的例子包括包含諮詢記錄、進程紀錄、報告或信件、調查報告、處方單或一組床邊護理觀察紀錄的Composition。在EHR中使用Composition作為經過認證的提交是Composition resource的有效應用。但在FHIR中，通常會進行更細微的更新，並為每次更新提供來源聲明。

臨床文件 Profile（[Clinical Document profile](https://hl7.org/fhir/R4/composition-clinicaldocument.html)）對Composition作進一步定義，使其專門用於指定臨床文件（以符合[CDA](https://hl7.org/fhir/R4/comparison-cda.html)格式）。關於與CDA的比較，也有進一步的資訊可供參考。

### 界限與關聯

Composition 是用於將資訊分組的結構，這種結構主要用於資訊的持久保存和可證明性。在 FHIR 中，除了 Composition 外，還有其他幾種用於不同目的的分組結構：

* [List](https://hl7.org/fhir/R4/list.html) resource 主要用於列舉一系列平行結構的 resources，並為管理這些 resources 集合提供功能。一個特定的 List instance 可能代表一個瞬間的「快照（snapshot）」，但從業務流程的角度來看，List 是動態變化會隨時間的推移，會不斷有項目被添加或移除。List resource 會參照其他的 resources。List 可以被精心策劃，並具有特定的業務含義。
* [Group](https://hl7.org/fhir/R4/group.html) resource 在 FHIR 中用於確定一組特定的人群、動物、設備等。這種確定可以是透過直接列出它們，或者描述這些組成成員共有的特質來完成。Group resource 可能會間接地關聯到其他的 resources。Group 的設計初衷是作為一個整體來進行操作或監測，例如：對整個群體進行治療、計算群體的風險等。這個 resource 常用於公共衛生（比如描述一個高風險人群）、臨床試驗（例如確定一組試驗對象）以及其他類似的用途。
* [Bundle](StructureDefinition-Bundle-twcore.html) resource 是 FHIR 中的一種基礎架構容器，用於封裝一組 resources。它不包含敘事性質的內容，而是用於對 resources 進行分組，以便於傳送、保存或處理。這些處理包括訊息傳遞（messages）、文件管理（documents）、異動處理（transactions）、查詢回應（query responses）等。Bundle 中的內容一般是基於特定交換或保存需求，透過演算法自動決定的。
* [Composition](StructureDefinition-Composition-twcore.html) resource 在 FHIR 中的作用是將一組與健康照護相關的資訊整合成一份單一的邏輯文件。這份文件不僅提供了完整且一致的意義表述，而且還設置了自己的上下文環境，並包含了關於聲明者的臨床認證資訊。Composition resource 是構成 FHIR [文件（document）](https://hl7.org/fhir/R4/documents.html)基本架構的核心部分。為了表達文件的完整內容，會使用一個 [Bundle](StructureDefinition-Bundle-twcore.html) resource，這個 [Bundle](StructureDefinition-Bundle-twcore.html) 包括了 Composition 本身和與該 Composition 相關聯的各個 resource 的條目（entry）。

Composition resource 在 FHIR 中用於將臨床和行政內容組織成多個小節。每個小節都包含敘事內容，並參照其他 resources 來提供支持數據。在 Composition 的不同小節中，敘事內容得到了小節條目中參照的 resources 的支持。為了形成完整的文件，需要將 Composition resource 與直接或間接關聯到 Composition 的各種 resources 結合起來，並將它們全部匯集到一個 [Bundle](StructureDefinition-Bundle-twcore.html) 中，以便於傳輸和保存。與以下 Composition 參照相關的 resources **必須（SHALL）** 包含在這個 [Bundle](StructureDefinition-Bundle-twcore.html) 中。


* [<code> Composition.subject</code>](StructureDefinition-Composition-twcore-definitions.html#diff_Composition.subject)（文件描述之對象，通常指病人）
* [<code> Composition.encounter</code>](StructureDefinition-Composition-twcore-definitions.html#diff_Composition.encounter) （就醫事件，通常指此文件所記錄的就醫事實之依據）
* [<code> Composition.author</code>](StructureDefinition-Composition-twcore-definitions.html#diff_Composition.author) （作者，撰寫此份文件者）
* [<code> Composition.attester.party</code>](StructureDefinition-Composition-twcore-definitions.html#diff_Composition.attester.party) （證明文件正確無誤的參與者，或稱認證者）
* [<code> Composition.custodian</code>](StructureDefinition-Composition-twcore-definitions.html#diff_Composition.custodian) （文件保管機構）
* [<code> Composition.event.detail</code>](StructureDefinition-Composition-twcore-definitions.html#diff_Composition.event.detail)（文件描述事件之細節）
* [<code> Composition.section.author</code>](StructureDefinition-Composition-twcore-definitions.html#diff_Composition.section.author) （文件小節之作者）
* [<code> Composition.section.focus</code>](StructureDefinition-Composition-twcore-definitions.html#diff_Composition.section.focus) （文件小節之焦點）
* [<code> Composition.section.entry</code>](StructureDefinition-Composition-twcore-definitions.html#diff_Composition.section.entry) （文件小節之條目）

當 FHIR 中的 Composition 參照其他 resources 時，這些被參照的 resources 是否包含在 Bundle 中，取決於創建這些 resources 的系統。這種決策會在該系統的操作定義中進行記載（例如：透過 <b><i>$document</i></b> 操作來說明），或者會依照適用的 profiles 進行具體規定。 **簡言之，是否將這些額外的 resources 包括在 Bundle 中，是由創建它的系統根據自己的規則和標準來決定的。FHIR並未規定Bundle是否一定要包含或者一定不要包含這些相關聯的 resources。**

## 背景
### Composition狀態代碼（Status Codes）

每個 Composition 都包含一個資料項目稱為「狀態（<code>status</code>）」，它用來描述 Composition 內容的當前狀態，這個狀態是從一系列特定的代碼中選擇的。

### Composition的工作流程或臨床狀態 


<table class="grid rwd-table">
  <tr>
    <th>狀態代碼</th>
    <th style="width: 150px;">中文翻譯</th>
    <th>代碼定義說明</th>
  </tr>
  <tr>
    <td><code class=" highlighter-rouge language-plaintext">preliminary</code></td>
    <td>初步的</td>
    <td>這是一個初步的 composition 或文件（也稱為初始或暫時的）。其內容可能是不完整的或未經驗證的。</td>
  </tr>
  <tr>
    <td><code class=" highlighter-rouge language-plaintext">final</code></td>
    <td>最終的</td>
    <td>這版本的 composition 已經被相關人士完整地完成並進行了驗證，且不打算進行進一步的修改或添加。如果有任何後續的更新，將會在該 composition 的新版本中進行。</td>
  </tr>
  <tr>
    <td><code class=" highlighter-rouge language-plaintext">amended</code></td>
    <td>修正的</td>
    <td>當一份 composition 被標記為「<code class=" highlighter-rouge language-plaintext">amended</code>」，這表示在該 composition 被定義為「final」後，它的內容或所參照的 resources 已經遭到修改（經過編輯或增加）。此外，這份已修改的 composition 也已由授權人員完成並進行了驗證。</td>
  </tr>
  <tr>
    <td><code class=" highlighter-rouge language-plaintext">entered-in-error</code></td>
    <td>錯誤輸入</td>
    <td>這個狀態表示該 composition 或文件最初是錯誤地創建或發布的。此一代碼是用來指出整個系列的文件都不應該被認為是有效的。</td>
  </tr>
</table>

	

Composition 狀態通常只會按照以下順序變化：從 `preliminary` 變為 `final` ，然後可能進一步變為 `amended`。值得注意的是，在許多工作流程中，只有 `final` 狀態的 compositions 被公開使用，而 `preliminary` 狀態則不會被使用。

在工作流程中，有極少數的 Composition 是完全錯誤地創建的，通常是涉及錯誤的病人或錯誤的作者所寫，而這個錯誤在 Composition 已經被使用或已從中衍生出文件後才被發現。為了解決這類情況，會將錯誤的 Composition 更新為「`entered-in-error`」狀態，並可以創建一份新的衍生文件。這表示基於該 Composition 衍生出的所有文件系列都被認為是錯誤創建的。因此，那些接收這些基於已撤回 Composition 衍生的文件的系統應從常規使用中移除之前文件的資料，或採取其他適合行動。雖然系統不必強制提供這種工作流程或支持從已撤回的 Composition 衍生的文件，但它們絕不能忽視「`entered-in-error`」的狀態。需要注意的是，那些處理 Composition 或衍生文件但不支援錯誤狀態處理的系統，需要找到其他方法來處理錯誤創建的 Composition；即使這不常見，但有些臨床系統沒有辦法從病人紀錄中移除錯誤資訊，用戶也無法知道這些資訊不適用，這是不安全的。

### 針對熟悉 CDA 的讀者的注意事項

很多使用這個規範的用戶都對[臨床文件架構（Clinical Document Architecture，簡稱 CDA）](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7)及其相關的規範有所了解。CDA 是構成 Composition resource 的一個重要設計來源，除此之外，還包括其他 HL7 的文件規範和 EN13606。在 CDA 和 Composition resource 這兩者之間，存在著三個主要的結構上的不同。

* Composition是一個邏輯架構，它的識別碼（<code>identifier</code>）對應於CDA ClinicalDocument的setId。Composition resource 被封裝在[Document](https://hl7.org/fhir/R4/documents.html)結構中，用於交換整個套件（包括Composition及其各部分）。這個被封裝和密封的單位相當於CDA文件，其中Bundle的id在功能上相似於ClinicalDocument的id，但在將 Composition 轉換為CDA文件或反轉過程中，這兩個不會完全對應，因為這涉及到格式間的轉換）。
* Composition的小節定義了文件的一部分（或子小節）。但不同於CDA，這裡的小節條目實際上是對其他[resources](https://hl7.org/fhir/R4/resourcelist.html)的參照，這些 resource 保存了支持該小節的資料內容，這種設計意味著這些資料可以以許多其他方式被重用。
* CDA中定義的上層資訊自動適用於其文件中的所有部分，其屬上下文流程模型（context flow model）；但不同於CDA，在 Composition 中定義的上下文（例如保密級別、文件對象、作者、事件、事件時間和就醫事件）只適用於Composition本身，並不直接適用於從<code>section.entry</code>參照的其他 resources 。FHIR中沒有一個上下文流動的模型，所以從 Composition 中參照的每一個 resource 都會表達它自己的特定上下文。因此，臨床內容可以安全地從 Composition 中分離出來。

另外需要注意的是，代碼列表（例如[<code>Composition.status</code>](https://hl7.org/fhir/R4/valueset-composition-status.html)）和 Composition resource 本身都被[對應](https://hl7.org/fhir/R4/composition-mappings.html)到[HL7 v3](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186)和/或CDA標準。這意味著Composition中使用的特定標準資料項目和值，如其狀態代碼，已經適配於這些更廣泛應用的健康資訊標準中。這種映射確保了不同系統和框架間的相容性和可互操作性。

此外，Composition resource 不僅僅參照自身，還被[Contract](https://hl7.org/fhir/R4/contract.html#Contract)和[Procedure](StructureDefinition-Procedure-twcore.html)等其他FHIR resources 所參照。在FHIR架構中，這種互相參照的設計使得資料項目和資料結構能夠在不同的臨床和行政場景中被重複使用，增強了資料的連接性和一致性。例如：一個特定的 Composition 可能與某個特定的醫療處置或合約直接相關，從而使得這些相關 resources 的關聯和管理變得更加清晰和有序。

---

// File: input/intro-notes/StructureDefinition-Composition-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Composition-id.html)** 查詢所有Composition：                
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Composition?_id=[id]`  
    `GET [base]/Composition/[id]`

    例子：  
      (1) GET [base]/Composition?_id=com-example  
      (2) GET [base]/Composition/com-example

2. **建議應該（SHOULD）** 支援透過查詢參數 **[`status`](SearchParameter-Composition-status.html)** 查詢所有Composition：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Composition?status=[code]`

    例子：  
      (1) GET [base]/Composition?status=final

3. **建議應該（SHOULD）** 支援透過查詢參數 **[`type`](SearchParameter-Composition-type.html)** 查詢所有Composition：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Composition?type={system|}[code]`

    例子：  
      (1) GET [base]/Composition?type=http://loinc.org|18842-5  

4. **建議應該（SHOULD）** 支援透過查詢參數 **[`subject`](SearchParameter-Composition-subject.html)** 查詢所有Composition：  
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))  
    `GET [base]/Composition?subject={Type/}[id]`

    例子：:  
      (1) GET [base]/Composition?subject=Patient/pat-example

#### Constraints 限制 

<table class="grid rwd-table" style="width: 1280px;">
  <thead>
    <tr>
    <th>id</th>
    <th>Level</th>
    <th>位置</th>
    <th>說明</th>
    <th>運算式</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>cmp-1</td>
    <td>Rule</td>
    <td>Composition.section</td>
    <td>小節必須包含至少一項：文本、條目或子小節。</td>
    <td>text.exists() or entry.exists() or section.exists()</td>
    </tr>
    <tr>
    <td>cmp-2</td>
    <td>Rule</td>
    <td>Composition.section</td>
    <td>小節是空的才可設定emptyReason</td>
    <td>emptyReason.empty() or entry.empty()</td>
    </tr>
  </tbody>
</table>

### 實作注意事項

* 通常文件的作者和認證者是同一人，但在某些臨床工作流程中，兩者可能不相同。
* 認證者（attester）的職責是對document resource、subject resource以及 <code>Composition.section.content</code> 參照的 resources 內容進行確認及認證，因為這些文件往往是基於 Composition 衍生而來，且 Composition 的認證被認為適用於相關文件，因此當認證者審查 Composition 的內容時，[應該使用一種類似審查最終文件那樣嚴謹和仔細](https://hl7.org/fhir/R4/documents.html#presentation)。這意味者，在 Composition 階段，即使文件還沒有最終完成，認證者也應以正式及詳細的方式來審核內容，就像他們在審核最終文件進行審核一樣。
* 保管者負責維護Composition以及由其衍生的任何文件。對於這些文件，他們還需負責制定有關文件持久性的政策。儘管他們不必一定要保留文件的副本，但 **建議應該（SHOULD）** 這樣做。
* Composition只包含敘述性文字（<code>Composition.section.text</code>）而不包含任何條目（<code>Composition.section.entry</code>）也是可以接受的。 
 
### 關於多個實體的Compositions 

一般來說，一份Composition是針對某個對象製作的，例如：一位病人、一群病人、某個位置或裝置。Composition與描述對象之間的區別在於，Composition是對對象的描述。但是，有些文件中包含的是與文件對象相關的其他參與者或實體的資料。這裡有一些例子：

* 一份新生兒出院病摘，其中包含了有關母親的資訊。
* 一份家族病史文件，包含了針對不同家庭成員的多個小節。
* 一份社交健康評估文件，其中包含了病人家庭成員的資訊。
* 一份處置報告，詳述了植入病人體內的裝置的細節。

在這些例子中，雖然文件主要對象是一位病人，但一些細節實際上與其他人或實體有關。當出現這種情況時，這些其他相關的人員或實體會在 <code>Composition.section.focus</code>資料項目中被具體說明。如果沒有明確指出<code>focus</code>，那麼預設Composition的主要<code>suject</code>即是<code>focus</code>。

如果明確指定了<code>focus</code>，那麼與該小節相關的resources **必須（SHALL）** 當遵守以下其中一項條件：

* 它們應該明確表示其<code>subject</code>（不管是以病人或其他名稱標示）或如果有<code>focus</code>資料項目，則該資料項目應該是所指的focus。此外，這些resources不應該包含subject資料項目。
* 有些Composition實際上涉及多個對象—即不同小節關於不同的對象。在這種情況下，<code>Composition.subject</code>應該省略，並且在每個小節中使用[section-subject](https://hl7.org/fhir/R4/extension-composition-section-subject.html)這個擴充資料項目來指示相應的對象。





---

// File: input/intro-notes/StructureDefinition-Condition-twcore-intro.md

{% include quickstart-intro.md %}

## Resource Condition - 內容

就是指某個健康問題或病情已經到了需要特別注意或處理的地步。

### 範圍與使用

Condition 是FHIR中用於記錄和關注特定臨床狀況、問題、診斷或其他相關事件的一種 resource。它在FHIR的[工作流程](http://hl7.org/fhir/R4/workflow.html)中被劃分為一種[event](http://hl7.org/fhir/R4/workflow.html#event) resource，用來捕捉那些需要特別關注的健康狀況。例如：Condition可以用來記錄在一次診療過程中的診斷，或者記錄在醫生的問題清單（Problem List）上的某個項目，甚至是一些還沒有列入問題清單的關注點。

Condition不僅限於醫生基於臨床推理所做出的診斷，也包括那些醫生認為可能對病人有害或需要進一步調查、持續監測和管理的健康問題。例如：如果一個病人被診斷出有心臟疾病的風險，這將被記錄為一個Condition，因為它需要醫生和病人的持續關注和管理。

Condition resource 也可以用來記錄病人某種通常不會帶來負面結果的健康狀態，例如：懷孕。它也可以用來記錄手術後的狀況，比如截肢手術後的截肢狀況。

雖然 Condition 經常是基於醫生對病人健康狀況某一方面的評估和斷言，但病人、相關人士或任何照護團隊成員也可能表達 Condition。醫生可能會對病人的某個狀況（例如：厭食）感到擔憂，而病人本人可能對此不關心。同樣地，病人可能有一個狀況（例如：脫髮），但這個狀況可能不足夠重要，以至於不需要被列入醫生的問題清單上。

例如以下每一種 Condition 都可能因為直接或間接影響病人健康而變得重要，以至於應該被列入問題或關注清單上。例如：「易跌倒」的Condition可能會讓醫生增加對病人的跌倒預防措施，而「家族心血管疾病史」的Condition則提示醫生和病人需要對心血管健康給予更多的關注。這些Condition的記錄有助於提供一個全面的病人健康概況，並指導臨床決策和病人照護計劃。

* 失業
* 缺乏交通工具（或其他障礙）
* 易跌倒
* 暴露於傳染病
* 家族心血管疾病史
* 對癌症的恐懼
* 安裝心臟起搏器
* 截肢-BKA
* 旅行到某國後的茲卡病毒風險
* 曾經吸煙者
* 計劃旅行到某國（需要接種疫苗）
* 交通事故
* 病人曾經進行過冠狀動脈搭橋手術

這些例子也可以使用其他 resources 來表示，例如：家庭成員病史（[FamilyMemberHistory](http://hl7.org/fhir/R4/familymemberhistory.html)）、檢驗檢查（[Observation](StructureDefinition-Observation-laboratoryResult-twcore.html)）或處置（[Procedure](StructureDefinition-Procedure-twcore.html)）。

### 界限與關聯

Condition resource 在 FHIR 中是一個關鍵工具，用於記錄那些達到需要關注程度的健康狀況，如疾病、診斷或其他臨床問題。例如：當一位病人被診斷出有糖尿病時，這個狀態就會被記錄為一個 Condition，這不僅對醫生有重要意義，也關係到病人的未來治療計劃。這個 resource 通常被其他 FHIR resources 參照作為某些行動的「原因」。舉個例子，如果一個病人需要特定的藥物來控制他們的高血壓，藥品請求（[MedicationRequest](StructureDefinition-MedicationRequest-twcore.html)） resource就可能參照一個 Condition resource 來解釋為什麼需要這種藥品。同樣地，一項處置或手術（[Procedure](StructureDefinition-Procedure-twcore.html)）或服務請求（[ServiceRequest](http://hl7.org/fhir/R4/servicerequest.html)）也可能參照 Condition 來說明進行手術或提供服務的原因。

然而，Condition resource 並不是用來記錄導致 Condition 記錄的初步跡象和症狀(不論主觀或客觀資訊)。這些資訊通常是用檢驗檢查（[Observation](StructureDefinition-Observation-laboratoryResult-twcore.html)）resources 來紀錄。例如一位病人初次出現頭痛時，這可能會作為一個 Observation 被記錄，但如果頭痛持續且成為了關注的重點，進而可能與腦膜炎相關，那麼它就可能作為一個 Condition 被記錄下來。

當一個症狀解決了且不需要長期管理時，或當一個症狀有助於確立一個 Condition 時，應該使用 Observation resource。反之，當一個症狀需要長期管理或跟踪，或在醫生尚未確定具體診斷時用作問題的代表時，就應該使用 Condition resource。

特別是在涉及到過敏或不耐症時，Condition 和 [AllergyIntolerance](StructureDefinition-AllergyIntolerance-twcore.html) resources 都可能被使用。但是，為了讓這些資訊對決策支持有實際幫助，僅使用 Condition resource 是不夠的，因為過敏或不耐症需要以 [AllergyIntolerance](StructureDefinition-AllergyIntolerance-twcore.html) 的形式來具體表示。

Condition resource 被廣泛參照於多種 FHIR resources 中，如醫療不良事件（[AdverseEvent](http://hl7.org/fhir/R4/adverseevent.html#AdverseEvent)）、預約（[Appointment](http://hl7.org/fhir/R4/appointment.html#Appointment)）、照護計畫（[CarePlan](http://hl7.org/fhir/R4/careplan.html#CarePlan)）、照護團隊（[CareTeam](http://hl7.org/fhir/R4/careteam.html#CareTeam)）理賠申請（[Claim](http://hl7.org/fhir/R4/claim.html#Claim)）、臨床臆斷（[ClinicalImpression](http://hl7.org/fhir/R4/clinicalimpression.html#ClinicalImpression)）、通訊（[Communication](http://hl7.org/fhir/R4/communication.html#Communication)）、 通訊請求（[CommunicationRequest](http://hl7.org/fhir/R4/communicationrequest.html#CommunicationRequest)）、合約（[Contract](http://hl7.org/fhir/R4/contract.html#Contract)）、承保範圍資格請求（[CoverageEligibilityRequest](http://hl7.org/fhir/R4/coverageeligibilityrequest.html#CoverageEligibilityRequest)）、設備請求（[DeviceRequest](http://hl7.org/fhir/R4/devicerequest.html#DeviceRequest)）、設備使用聲明（[DeviceUseStatement](http://hl7.org/fhir/R4/deviceusestatement.html#DeviceUseStatement)）、就醫事件（[Encounter](StructureDefinition-Encounter-twcore.html)）、照護事件（[EpisodeOfCare](http://hl7.org/fhir/R4/episodeofcare.html#EpisodeOfCare)）、利益說明（[ExplanationOfBenefit](http://hl7.org/fhir/R4/explanationofbenefit.html#ExplanationOfBenefit)）、家族成員病史（[FamilyMemberHistory](https://hl7.org/fhir/R4/familymemberhistory.html#FamilyMemberHistory)）、目標（[Goal](http://hl7.org/fhir/R4/goal.html#Goal)）、指導回應（[GuidanceResponse](http://hl7.org/fhir/R4/guidanceresponse.html#GuidanceResponse)）、 影像檢查（[ImagingStudy](StructureDefinition-ImagingStudy-twcore.html)）、疫苗接種（[Immunization](http://hl7.org/fhir/R4/immunization.html#Immunization)）、給藥（[MedicationAdministration](https://hl7.org/fhir/R4/medicationadministration.html#MedicationAdministration)）、藥品請求（[MedicationRequest](StructureDefinition-MedicationRequest-twcore.html)、用藥聲明（[MedicationStatement](StructureDefinition-MedicationStatement-twcore.html)）、處置或手術（[Procedure](StructureDefinition-Procedure-twcore.html)）、一組請求（[RequestGroup](http://hl7.org/fhir/R4/requestgroup.html#RequestGroup)）、風險評估（[RiskAssessment](http://hl7.org/fhir/R4/riskassessment.html#RiskAssessment)）、服務請求（[ServiceRequest](http://hl7.org/fhir/R4/servicerequest.html#ServiceRequest)）及供應品請求（[SupplyRequest](http://hl7.org/fhir/R4/supplyrequest.html#SupplyRequest)），顯示了它在整個醫療和照護過程中，從診斷到治療計劃制定，再到長期健康管理的關鍵作用。

---

// File: input/intro-notes/StructureDefinition-Condition-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Condition-id.html)** 查詢所有Condition：               
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Condition?_id=[id]`  
    `GET [base]/Condition/[id]`

    例子：  
      (1) GET [base]/Condition?_id=con-example  
      (2) GET [base]/Condition/con-example


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`clinical-status`](SearchParameter-Condition-clinical-status.html)** 查詢所有Condition：      
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Condition?clinical-status=[code]`

    例子：  
      (1) GET [base]/Condition?clinical-status=remission


3. **建議應該（SHOULD）** 支援透過查詢參數 **[`code`](SearchParameter-Condition-code.html)** 查詢所有Condition：    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Condition?code={system|}[code]`

    例子：  
      (1) GET [base]/Condition?code=hhttps://twcore.mohw.gov.tw/ig/twcore/CodeSystem/icd-10-cm-2021-tw|E08.649


4. **建議應該（SHOULD）** 支援透過查詢參數 **[`subject`](SearchParameter-Condition-subject.html)** 查詢所有Condition：    
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    `GET [base]/Condition?subject={Type/}[id]`

    例子：  
      (1) GET [base]/Condition?subject=Patient/pat-example


5. **建議應該（SHOULD）** 支援透過查詢參數 **[`onset-date`](SearchParameter-Condition-onset-date.html)** 查詢所有Condition：    
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Condition?onset-date={gt|lt|ge|le}[date]`

    例子：  
      (1) GET [base]/Condition?onset-date=gt2022-08-01


6. **建議應該（SHOULD）** 支援透過查詢參數 **[`abatement-date`](SearchParameter-Condition-abatement-date.html)** 查詢所有Condition：    
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))     
    `GET [base]/Condition?abatement-date={gt|lt|ge|le}[date]`

    例子：  
      (1) GET [base]/Condition?abatement-date=gt2022-08-01


7. **建議應該（SHOULD）** 支援透過查詢參數 **[`severity`](SearchParameter-Condition-severity.html)** 查詢所有Condition：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Condition?severity={system|}[code]`  

    例子：  
      (1) GET [base]/Condition?severity=http://loinc.org|LA6752-5

---

// File: input/intro-notes/StructureDefinition-Coverage-twcore-notes.md

{% include quickstart-note.md %}

#### 必須支援以下查詢參數：

1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Coverage-patient.html)** 查詢所有Coverage：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    `GET [base]/Coverage?patient={Type/}[id]`

    例子：  
      (1) GET [base]/Coverage?patient=Patient/pat-example

---

// File: input/intro-notes/StructureDefinition-Device-twcore-notes.md

{% include quickstart-note.md %}

#### 必須應該支援以下查詢參數：

1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Device-patient.html)** 查詢所有Device：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    `GET [base]/Device?patient={Type/}[id]`

    例子：  
      (1) GET [base]/Device?patient=Patient/pat-example

#### 建議應該支援以下查詢參數：

2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Device-patient.html)** 及  **[`type`](SearchParameter-Device-type.html)** 查詢所有Device：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Device?patient={Type/}[id]&type={system|}[code]`

    例子：  
      (1) GET [base]/Device?patient=Patient/pat-example&type=http://snomed.info/sct|468063009


3. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Device-patient.html)** 及  **[`status`](SearchParameter-Device-status.html)** 查詢所有Device：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Device?patient={Type/}[id]&status=[code]`

    例子：  
      (1) GET [base]/Device?patient=Patient/pat-example&status=active

---

// File: input/intro-notes/StructureDefinition-DiagnosticReport-twcore-intro.md

{% include quickstart-intro.md %}

## Resource DiagnosticReport - 內容

對病人、病人群體、設備、地點，以及/或從這些來源獲得的檢體進行的診斷性檢查的結果和解釋。報告包含了諸如請求和健康照護服務提供者資訊這樣的臨床背景，以及一些無法再細分的結果、影像、文字和編碼的解釋，還有診斷報告的格式化呈現。

### 範圍及使用

**從 FHIR 工作流的觀點來看，resources 依其性質被區分為三類：定義、請求及事件。DiagnosticReport resource 被歸類為「事件」類 resource。有關更多資訊，請查看[工作流程（workflow）](https://hl7.org/fhir/R4/workflow.html)。Orders 和 Observation 工作小組的目標是讓 DiagnosticReport resource 在概念上和實作上都符合工作流標準中所認定的「[事件 resource](https://hl7.org/fhir/R4/workflow.html#event)」。**

DiagnosticReport 是診斷服務在調查完成後通常提供的資訊集，可能由無法再細分的結果、文字報告、影像和代碼所組成。根據診斷程序的不同，以及某些情況下調查結果的特性，這此組成會有所不同。在 FHIR 中，報告可以透過多種方式傳達，包括[Document （文件）](https://hl7.org/fhir/R4/documents.html)、[RESTful API](https://hl7.org/fhir/R4/http.html) 或[訊息 （Message）](https://hl7.org/fhir/R4/messaging.html) 框架。在這些方式中，都會包含 DiagnosticReport resource 本身。

DiagnosticReport resource 包含診斷報告本身的資訊，關於報告對象的資訊，在實驗室檢驗案例中還包括檢體資訊。它也可以照請求細節和無法再細分的檢驗檢查細節或影像實例。報告結論可以以簡單的文本形式、結構化編碼資料，或作為一個附加的完整格式化報告（如 PDF）來表達。

DiagnosticReport resource 適用於以下類型的診斷報告：

* 實驗室（如臨床化學、血液學、微生物學等）
* 病理學/組織病理學及相關學科
* 影像檢查（如 X 光、CT、MRI 等）
* 其他診斷 - 如心臟病學、胃腸病學等

DiagnosticReport resource 並不是用來支援累積結果呈現（在 resource 中表格形式展示過去和現在的結果），而且，DiagnosticReport resouce 目前還不完全支援詳細結構化的序列報告，這一功能預計將在未來的版本中實現。

### 背景 
**Diagnostic Report 的一些名稱** 
在討論 Diagnostic Report 的各部分時，「tests」、「results」、「observations」、「panels」 和 「batteries」 等詞彙經常被互換使用，這造成了不少混淆。這種命名混淆之所以加劇，是因為 Diagnostic investigation 的結果形式多樣，正如前面所描述的那樣。而且，非英語的語言中對這一主題也各有其變體。

這個 resource 採用了一套特定的術語。一位醫療專業人員「請求」一系列的「tests」。隨後，診斷服務返回一份「report」，這份 report 可能包含一個「narrative」— 結果的文字總結，和/或一些「results」— 每個 result 都是一個「observation」。這些 results 被組織在各組的檢驗檢查中，各組檢驗檢查是嵌套的 Observations 結構（傳統上實驗室稱為「panels」或「batteries」），用於表示個別資料項目之間的關係。

### 界限與關聯

請注意，許多診斷過程本質上都是進行觀察和生成診斷報告的程序。在很多情況下，這類檢驗檢查並不需要明確表示用於創建檢驗檢查的過程。但是，如果對於診斷程序的具體執行細節感興趣，那麼可以使用 [Procedure](StructureDefinition-Procedure-twcore.html) resource 來詳細描述這一活動。

與 [Observation](StructureDefinition-Observation-laboratoryResult-twcore.html) resource 相比，DiagnosticReport resource 通常會包含更多的臨床背景資訊，以及各種形式的結果，如無分再細分的結果、影像、影像報告、文字和編碼的解釋，以及診斷報告的格式化表示。無論是實驗室報告、病理報告還是影像報告，都應該使用 DiagnosticReport resource 來進行表示。透過參照 Observation resource，DiagnosticReport 為特定調查提供了無法再細分的結果。

如果你擁有一個高度結構化的報告，那麼就應該使用 DiagnosticReport — 它為資料和工作流提供了支持。診斷調查的請求細節被記錄在各種「請求」 resources 中（例如：[ServiceRequest](https://hl7.org/fhir/R4/servicerequest.html)），這使得報告能夠與臨床工作流相連接。對於更注重敘述、工作流較少的報告（比如組織學/解剖學等），[Composition](StructureDefinition-Composition-twcore.html) resource 更為合適。

報告及其支援影像的影像和多媒體表示方式在 DiagnosticReport resource 中有所參照。這些細節和實際的影像實例可以直接在 DiagnosticReport 中透過「<code>media</code>」資料項目參照，或者透過「<code>imagingStudy</code>」 [ImagingStudy](StructureDefinition-ImagingStudy-twcore.html) resources 間接參照，後者代表了在 DICOM 影像學檢查中產生的內容或病人的一組 DICOM 實例。

Patient Resource被以下Resources所參照：照護計畫（[CarePlan](https://hl7.org/fhir/R4/careplan.html#CarePlan)）、費用項目（[ChargeItem](https://hl7.org/fhir/R4/chargeitem.html#ChargeItem)）、臨床臆斷（[ClinicalImpression](https://hl7.org/fhir/R4/clinicalimpression.html#ClinicalImpression)）、通訊（[Communication](https://hl7.org/fhir/R4/communication.html#Communication)）、通訊請求（[CommunicationRequest](https://hl7.org/fhir/R4/communicationrequest.html#CommunicationRequest)）、病情、問題或診斷（[Condition](StructureDefinition-Condition-twcore.html)）、合約（[Contract](https://hl7.org/fhir/R4/contract.html#Contract)）、設備請求（[DeviceRequest](https://hl7.org/fhir/R4/devicerequest.html#DeviceRequest)）、設備使用聲明（[DeviceUseStatement](https://hl7.org/fhir/R4/deviceusestatement.html#DeviceUseStatement)）、家庭成員病史（[FamilyMemberHistory](https://hl7.org/fhir/R4/familymemberhistory.html#FamilyMemberHistory)）、指導回應（[GuidanceResponse](https://hl7.org/fhir/R4/guidanceresponse.html#GuidanceResponse)）、影像檢查（[ImagingStudy](StructureDefinition-ImagingStudy-twcore.html)）、疫苗接種（[Immunization](https://hl7.org/fhir/R4/immunization.html#Immunization)）、給藥（[MedicationAdministration](https://hl7.org/fhir/R4/medicationadministration.html#MedicationAdministration)）、用藥聲明（[MedicationStatement](StructureDefinition-MedicationStatement-twcore.html)）、處置（[Procedure](StructureDefinition-Procedure-twcore.html)）、一組請求（[RequestGroup](https://hl7.org/fhir/R4/requestgroup.html#RequestGroup)）、風險評估（[RiskAssessment](https://hl7.org/fhir/R4/riskassessment.html#RiskAssessment)）、服務請求（[ServiceRequest](https://hl7.org/fhir/R4/servicerequest.html#ServiceRequest)）及供應品請求（[SupplyRequest](https://hl7.org/fhir/R4/supplyrequest.html#SupplyRequest)）。

---

// File: input/intro-notes/StructureDefinition-DiagnosticReport-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-DiagnosticReport-id.html)** 查詢所有DiagnosticReport：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/DiagnosticReport?_id=[id]`  
    `GET [base]/DiagnosticReport/[id]`

    例子：  
      (1) GET [base]/DiagnosticReport?_id=dia-example  
      (2) GET [base]/DiagnosticReport/dia-example

2. **建議應該（SHOULD）** 支援透過查詢參數 **[`status`](SearchParameter-DiagnosticReport-status.html)** 查詢所有DiagnosticReport：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/DiagnosticReport?status=[code]`

    例子：  
      (1) GET [base]/DiagnosticReport?status=registered

3. **建議應該（SHOULD）** 支援透過查詢參數 **[`subject`](SearchParameter-DiagnosticReport-subject.html)** 查詢所有DiagnosticReport：  
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    `GET [base]/DiagnosticReport?subject={Type/}[id]`

    例子：  
      (1) GET [base]/DiagnosticReport?subject=Patient/pat-example

4. **建議應該（SHOULD）** 支援透過查詢參數 **[`category`](SearchParameter-DiagnosticReport-category.html)** 查詢所有DiagnosticReport：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/DiagnosticReport?category={system|}[code]`  
    `GET [base]/DiagnosticReport?category=[code]`

    例子：  
      (1) GET [base]/DiagnosticReport?identifier=http://terminology.hl7.org/CodeSystem/v2-0074|LAB

5. **建議應該（SHOULD）** 支援透過查詢參數 **[`code`](SearchParameter-DiagnosticReport-code.html)** 查詢所有DiagnosticReport：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/DiagnosticReport?code={system|}[code]`  
    `GET [base]/DiagnosticReport?code=[code]`

    例子：  
      (1) GET [base]/DiagnosticReport?code=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medical-service-payment-tw|09002C

6. **建議應該（SHOULD）** 支援透過查詢參數 **[`date`](SearchParameter-DiagnosticReport-date.html)** 查詢所有DiagnosticReport：  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/DiagnosticReport?date={gt|lt|ge|le}[date]`

    例子：  
      (1) GET [base]/DiagnosticReport?date=gt2022-08-01

---

// File: input/intro-notes/StructureDefinition-DocumentReference-twcore-intro.md

{% include quickstart-intro.md %}

## Resource DocumentReference - 內容

這是一個指向任何種類、用於任何用途的文件的參照。它提供了文件的基本資訊，幫助我們找到並管理這個文件。文件可以是任何有MIME類型的序列化物件，包括專門針對病人的正式文件（如CDA）、臨床筆記、掃描過的紙本文件，以及像是政策文件這樣不特定於病人的文件。

### 範圍與使用

DocumentReference resource 是用來索引文件、臨床筆記和其他以二進制格式存儲的資料物件，使它們能被醫療系統存取。文件是一系列可以被識別的位元組序列，它建立了自己的上下文（例如：可以向使用者展示什麼主題、作者等），並且有明確的更新管理。DocumentReference resource 可以用於任何具有公認MIME類型且符合此定義的文件格式。

通常，DocumentReference resources 被用在文件索引系統中，像是[IHE XDS](http://wiki.ihe.net/index.php?title=Cross-Enterprise_Document_Sharing)，如同在[IHE行動式存取健康紀錄文件（Mobile access to Health Documents，MHD)](http://wiki.ihe.net/index.php/Mobile_access_to_Health_Documents_（MHD)）中概述的那樣。

DocumentReference是描述文件的metadata，比如：
* 在FHIR系統中的[CDA](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7)文件
* 存儲在其他地方的[FHIR文件](https://hl7.org/fhir/R4/documents.html)（即遵循XDS Profile的註冊中心/儲存庫）
* [PDF文件](http://en.wikipedia.org/wiki/Portable_Document_Format)、掃描的紙本文件和傳真的數位紀錄
* 各種形式的臨床筆記
* 影像文件（例如：JPEG、GIF、TIFF）
* 非標準格式（例如：WORD）
* 其他類型的文件，如處方或疫苗接種記錄

### 界限與關聯

FHIR不僅定義[文件](https://hl7.org/fhir/R4/documents.html)格式，還定義了文件參照DocumentReference。FHIR文件是指那些在FHIR中創建和組裝的文件，DocumentReference主要是透用參照找到那些已經組裝好的文件。

被參照的文件可以是另一個伺服器上的FHIR文件、或者儲存在特殊的[FHIR 二進制 resource （Binary Resource）](https://hl7.org/fhir/R4/http.html#binary)中，或者存儲在其他任何伺服器上。DocumentReference也能夠指向透過服務呼叫來查詢文件，例如XDS.b的RetrieveDocumentSet操作、DICOM交換、或是[HL7 v2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=185)訊息查詢 — 但這些服務的具體運作方式需要在其外部標準或其他文件中明確說明。

DocumentReference 描述另一份文件，這意味著這裡涉及到兩套「基本資訊（provenance）」，意即「文件本身」以及「DocumentReference」的出處、版本號、創建日期等基本資訊。有時候，這些基本資訊是密切相關的，比如當文件製作者也製作了 DocuementReference 時；但在其他工作流中，DocumentReference 可能由其他角色在後續階段產生。在 DocumentReference resource 中， [meta](https://hl7.org/fhir/R4/resource.html#Meta) 內容段指的是參照本身的基本資訊，而其 resource下半部內容描述涉及它所參照的文件。
就像其他所有 resources 一樣， DocumentReference resource 主要資訊和在[Provenance](https://hl7.org/fhir/R4/provenance.html) resource 中的資訊之間有重疊。這在[Provenance resource的描述](https://hl7.org/fhir/R4/provenance.html#overlap)有討論。

這個 resource 被許多其他 FHIR resources 參照，包括醫療不良事件[（AdverseEvent)](https://hl7.org/fhir/R4/adverseevent.html#AdverseEvent)、照護計畫（[CarePlan](https://hl7.org/fhir/R4/careplan.html#CarePlan)）、通訊 （[Communication](https://hl7.org/fhir/R4/communication.html#Communication)）、 通訊請求（[CommunicationRequest](https://hl7.org/fhir/R4/communicationrequest.html#CommunicationRequest)）、同意書（[Consent](https://hl7.org/fhir/R4/consent.html#Consent)）、合約（[Contract](https://hl7.org/fhir/R4/contract.html#Contract)）、設備請求（[DeviceRequest](https://hl7.org/fhir/R4/devicerequest.html#DeviceRequest)）、設備使用聲明（[DeviceUseStatement](https://hl7.org/fhir/R4/deviceusestatement.html#DeviceUseStatement)）、文件參照（DocumentReference）、家庭成員病史（[FamilyMemberHistory](https://hl7.org/fhir/R4/familymemberhistory.html#FamilyMemberHistory)）、指導回應（[GuidanceResponse](https://hl7.org/fhir/R4/guidanceresponse.html#GuidanceResponse)）、影像檢査（[ImagingStudy](StructureDefinition-ImagingStudy-twcore.html)）、 藥品知識（[MedicationKnowledge](https://hl7.org/fhir/R4/medicationknowledge.html#MedicationKnowledge)）、醫藥產品（[MedicinalProduct](https://hl7.org/fhir/R4/medicinalproduct.html#MedicinalProduct)）、檢驗檢查（[Observation](StructureDefinition-Observation-laboratoryResult-twcore.html)）、 處置（[Procedure](StructureDefinition-Procedure-twcore.html)）、一組請求（[RequestGroup](https://hl7.org/fhir/R4/requestgroup.html#RequestGroup)）、 風險評估（[RiskAssessment](https://hl7.org/fhir/R4/riskassessment.html#RiskAssessment)）、服務請求（[ServiceRequest](https://hl7.org/fhir/R4/servicerequest.html#ServiceRequest)）、物質參照資訊（[SubstanceReferenceInformation](https://hl7.org/fhir/R4/substancereferenceinformation.html#SubstanceReferenceInformation)）、物質規格（[SubstanceSpecification](https://hl7.org/fhir/R4/substancespecification.html#SubstanceSpecification)）及供應品請求（[SupplyRequest](https://hl7.org/fhir/R4/supplyrequest.html#SupplyRequest)）DocumentReference resource 在FHIR框架中扮演著一個重要的角色，連接不同的 resources 和提供關於文件的重要基本資訊。




---

// File: input/intro-notes/StructureDefinition-DocumentReference-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-DocumentReference-id.html)** 查詢所有DocumentReference：                
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/DocumentReference?_id=[id]`  
    `GET [base]/DocumentReference/[id]`

    例子：  
      (1) GET [base]/DocumentReference?_id=documentReference-example

      (2) GET [base]/DocumentReference/documentReference-example
	  
2. **建議應該（SHOULD）** 支援透過查詢參數 **[`status`](SearchParameter-DocumentReference-status.html)** 查詢所有DocumentReference：      
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/DocumentReference?status=[code]`

    例子：  
      (1) GET [base]/DocumentReference?status=completed

3. **建議應該（SHOULD）** 支援透過查詢參數 **[`subject`](SearchParameter-DocumentReference-subject.html)** 查詢所有DocumentReference：    
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    `GET [base]/DocumentReference?subject={Type/}[id]`

    例子：  
      (1) GET [base]/DocumentReference?subject=Patient/pat-example   

### 實作注意事項

* 在[臨床文件架構描述 (Composition description)](https://hl7.org/fhir/R4/composition.html#status)中有討論如何使用`.docStatus`代碼。這是關於文件目前狀態（如草稿、最終版等）的一種標記。
*  Resources 之間保持著一種單向的關係，這種關係是向後指的 (backwards)：比如，一個取代另一份文件的文件會指回它所取代的那個文件。我們可以利用從 Resources 建立的索引追溯這種反向的關係。如果要取得文件的完整資訊，需考慮到一份文件可能會被其他文件取代或添加，所以當用戶端存取文件時，應該先確認及瞭解這些關係，再透過查詢參數來取得所需的相應文件。
    *  舉個例子，假設有一份關於病人的健康報告（稱為文件A），後來有了一個更新版的健康報告（稱為文件B）來取代它。在這種情況下，文件B會有一個指向文件 A 的參照，表明 B 是 A 的更新版。如果有人查看文件A，系統可以通過這種單向關係指示，該使用者可能想要查看最新的文件B來獲得最準確的資訊。

### 產生一份文件參照

用戶端可以要求伺服器從一份已有的文件中創建一個DocumentReference。伺服器會檢視這份文件，然後創建一個匹配的DocumentReference Rresource，或者如果之前已經創建過，就直接回傳那個已創建的DocumentReference。對於以下類型的文件，伺服器可能可以創建或回傳DocumentReference：

<table class="grid rwd-table">
    <thead>
        <tr>
        <th style="width: 150px;">類型（Type）</th>
        <th>意見（Comments）</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td><a href="https://hl7.org/fhir/R4/documents.html">FHIR 文件</a></td>
        <td>uri（網址）直接指向一份現有的文件。</td>
        </tr>
        <tr>
        <td><a href="http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7">CDA 文件</a></td>
        <td>uri是一個指向<a href="https://hl7.org/fhir/R4/binary.html">Binary</a>端點的網址，這個端點返回CDA文件或一些CDA套件，伺服器知道如何處理這些文件（例如：一個IHE .zip檔案）。</td>
        </tr>
        <tr>
        <td>其他</td>
        <td>伺服器也可以被要求為其他類型的文件創建 DocumentReference。例如：PDF文件。只有當服務器已經有了這份文件的DocumentReference，或者對該文件有特殊的了解時，才能提供DocumentReference。</td>
        </tr>
    </tbody>
</table>


伺服器可能會回傳一個包含單一DocumentReference的查詢結果，或者一個錯誤訊息。如果URI指向的是另一個伺服器，是否去查詢那個文件或回傳錯誤，則由伺服器自己決定。

啟動這個過程是透過在/DocumentReference端點使用_query=generate進行的已命名查詢，像這樣：

    GET [service-url]/DocumentReference/?_query=generate&uri=:url&...

這裡的「uri」參數是指向上述某種文件類型的一個網址。還可以提供其他的參數：

<table class="grid rwd-table" style="width: 1280px;">
    <thead>
        <tr>
        <th>名稱（Name）</th>
        <th>意義（Meaning）</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>persist</td>
        <td>表示一旦文件被創建，是否需要在伺服器的文件端點（Document）儲存這份文件。值可以是true（是）或false（否），預設值則取決於伺服器。</td>
        </tr>
    </tbody>
</table>





---

// File: input/intro-notes/StructureDefinition-Encounter-twcore-intro.md

{% include quickstart-intro.md %}

## Resource Encounter - 內容
涉及病人和健康照護服務提供者之間的互動，目的是為了提供健康照護服務或評估病人的健康狀況。

### 範圍與使用

病人的就醫事件根據發生的環境有所不同，包括門診、急診、家庭健康照護、住院和虛擬就醫。一次就醫事件涵蓋從入院前、實際的就醫事件（門診情況下）、入院、住院到出院的全過程（住院情況下）。期間，病人可能會接受不同健康照護服務提供者的照顧，並可能轉移至不同的地點。

由於就醫事件的範疇非常廣泛，不是所有資料項目在所有情況下都適用。因此，與入院/出院相關的資訊被分開存放在就醫事件的<code>hospitalization</code>。利用 <code>class</code> 資料項目來區分這些不同的就醫環境，進而指導相關的驗證和業務規則的應用。

不同的機構（以及不同的行政管轄區和國家）在決定哪些業務事件應該視為一個新的Encounter的開始，或者如何聚合 Encounter，存在著顯著的差異。例如：在住院期間，每一次醫生的看診可能會記錄為一個新的 Encounter 實例，但根據當地的實務和系統的不同，也可能會將這些看診聚合為整個住院期間的單一事件。在一些行政管轄區，出於財務或其他原因，可能會對就醫事件進行更多的聚合。可以使用<code>Encounter.partOf</code> 資料項目將就醫事件聚合或分組於其他Encounter之下。參考下方（[below](https://hl7.org/fhir/R4/encounter.html#examples)）提供的範例。

Encounter 實例也可能在實際就醫發生之前就已經存在，用來傳達入院前資訊，包括計劃的開始日期或預計的就醫地點。在這種情況下，<code>Encounter.status</code>資料項目會設定為 `planned`。

<code>Encounter.hospitalization</code>旨在存儲與住院相關的更多資訊。這些資訊通常與就醫事件本身的期間相同。如果住院期間與Encounter期間有所不同時，則應使用另一個就醫事件實例來記錄這些資訊，並將其作為這個就醫事件實例的一部分。

Procedure 和 Encounter相互參照，這些參照應該指向不同的 Procedures。一種情況是指在 Encounter 期間進行的 Procedure，這會儲存在<code>Procedure.encounter</code>（Encounter）中；另一種情況是Encounter是另一個 Procedure 的結果，這會被記錄在<code>Encounter.reasonReference</code>（Procedure），例如：為了解決之前 Procedure  出現的併發症而進行的後續 Encounter。

#### 狀態管理（Status Management）

在一個就醫事件的生命週期內，它會經歷多個階段，這些階段通常是根據健康照護服務提供者的工作流程來排列的，比如「`planned`」、「`in-progress`」和「`finished` / `cancelled`」。這些階段的資訊經常被用於其他目的，而且分析這些階段的歷史紀錄經常是必要的。這個分析可以透過檢查就醫事件的所有版本，確認每個版本的持續時間，然後進行一些後期的處理來完成。為了減輕這個負擔（或在系統不支援 resources 歷史紀錄的情況下），可善用 status 歷史紀錄元件（status history component）。

單靠<code>Encounter.status</code>欄位本身，我們無法直接判斷一次就醫事件是否被視為「已入院（`admitted`）」。就醫事件的具體情況和健康照護服務提供者的業務實務、政策、工作流程、類型都可能影響這一定義（例如：在急性照護機構、老人照護中心、門診診所、急診室或社區診所中）。「已到達（`arrived`）」、「已檢傷分類（`triaged`）」或「進行中（`in progress`）」等狀態可能被視為入院的開始，此時還會引入填寫<code>Encounter.hospitalization</code>。

「外出（`onleave`）」狀態可能被包含在入院階段內，也可能不被包含，例如：如果病人被允許在周末或一些其他外出事件期間回家。此外，<code>Encounter.location.status</code> 通常會被更新為「在場（`active`）」的狀態，如下範例。就如同在門診就醫的例子中，比如進行日間手術（如結腸鏡檢查），病人也可能被視為已入院，因此「已入院」的定義並不固定。但最起碼，我們認為當<code>Encounter.status</code>為「進行中（`in-progres`）」時，病人應被視為已入院。

```json
{
  "resourceType": "Encounter",
  "status": "in-progress",
  "location": [
    {
      "location": {
        "display": "病房A"
      },
      "status": "active"
    }
  ]
}
```
### 界限與關聯

在FHIR中，Encounter resource不應被用來儲存有關預約的資訊；相反地，應該使用Appointmentresource 來處理這類資訊。值得一提的是，在許多系統裡，「門診就醫事件」（這是 Encounter resource 所涵蓋的範疇）和「Appointment」常常會被一起使用。在FHIR裡面，「Appointment」被用於安排就醫事件的日期，而「Encounter」則適用於關於實際就醫事件的資訊，也就是說，當病人真正到達時。

因此，一個處於「計劃中（`planned`）」<code>Encounter.status</code> 的就醫事件與安排它的預約並不相同。它代表在實際就醫事件發生之前的階段，並帶有期望該就醫事件隨著時間進展而更新到完成（`finished`）的意圖。病人抵達某地並不一定意味著就醫事件的開始。例如：病人可能比他實際被健康照護服務提供者看診的時間提早一小時到達。

Appointment resource 通常用於預約的規劃階段，包括尋找、確定一個可用的時間，然後進行預約。當這一流程完成且預約即將開始時，則會將該預約（<code>Encounter.appointment</code>（Appointment）之<code>Appointment.status</code>標記為已完成（`fulfilled`），並將其與新創建的Encounter關聯起來。這個新的Encounter可能在病人被接收到機構的某一地點時，以<code>Encounter.status</code> 為「已到達（`arrived`）」開始，之後可能會轉移到病房，此時另一部分的Encounter也許就會開始。

Communicationresource 用於在健康照護服務提供者與病人之間沒有直接接觸的情況下發生的即時互動。例如：透過電話留言或傳輸某些文件。雖然 Communication resource 不記錄持續時間，但它可能包含發送和接收的時間點。

標準擴充資料項目「相關就醫事件（[<code>Associated Encounter</code>](https://www.hl7.org/fhir/2016May/extension-encounter-associatedencounter.html)）」應當被用來參照一個Encounter，特別是在沒有其他屬性已經定義這種關聯的情況下。


Medication resource 被以下 resources 所參照：醫療不良事件（[AdverseEvent](https://hl7.org/fhir/R4/adverseevent.html#AdverseEvent)）、過敏或不耐症（[AllergyIntolerance](StructureDefinition-AllergyIntolerance-twcore.html)）、照護計畫（[CarePlan](https://hl7.org/fhir/R4/careplan.html#CarePlan)）、照護團隊（[CareTeam](https://hl7.org/fhir/R4/careteam.html#CareTeam)）、費用項目（[ChargeItem](https://hl7.org/fhir/R4/chargeitem.html#ChargeItem)）、理賠申請（[Claim](https://hl7.org/fhir/R4/claim.html#Claim)）、臨床臆斷（[ClinicalImpression](https://hl7.org/fhir/R4/clinicalimpression.html#ClinicalImpression)）、通訊（[Communication](https://hl7.org/fhir/R4/communication.html#Communication)）、通訊請求（[CommunicationRequest](https://hl7.org/fhir/R4/communicationrequest.html#CommunicationRequest)）、臨床文件架構（[Composition](StructureDefinition-Composition-twcore.html)）、病情、問題或診斷（[Condition](StructureDefinition-Condition-twcore.html)）、合約（[Contract](https://hl7.org/fhir/R4/contract.html#Contract)）、設備請求（[DeviceRequest](https://hl7.org/fhir/R4/devicerequest.html#DeviceRequest)）、診斷報告（[DiagnosticReport](https://hl7.org/fhir/R4/diagnosticreport.html#DiagnosticReport)）、文件參照（[DocumentReference](StructureDefinition-DocumentReference-twcore.html)）、藥品（[Medication](StructureDefinition-Medication-twcore.html)）、利益說明（[ExplanationOfBenefit](https://hl7.org/fhir/R4/explanationofbenefit.html#ExplanationOfBenefit)）、標記（[Flag](https://hl7.org/fhir/R4/flag.html#Flag)）、指導回應[GuidanceResponse](https://hl7.org/fhir/R4/guidanceresponse.html#GuidanceResponse)）、影像檢查（[ImagingStudy](StructureDefinition-ImagingStudy-twcore.html)）、疫苗接種（[Immunization](https://hl7.org/fhir/R4/immunization.html#Immunization)）、清單（[List](https://hl7.org/fhir/R4/list.html#List)）、多媒體（[Media](StructureDefinition-Media-twcore.html)）、給藥（[MedicationAdministration](https://hl7.org/fhir/R4/medicationadministration.html#MedicationAdministration)）、配藥或藥品調劑（[MedicationDispense](StructureDefinition-MedicationDispense-twcore.html)）、藥品請求（[MedicationRequest](StructureDefinition-MedicationRequest-twcore.html)）、用藥聲明（[MedicationStatement](StructureDefinition-MedicationStatement-twcore.html)）、營養醫令（[NutritionOrder](https://hl7.org/fhir/R4/nutritionorder.html#NutritionOrder)）、檢驗檢查（[Observation](StructureDefinition-Observation-laboratoryResult-twcore.html)）、處置（[Procedure](StructureDefinition-Procedure-twcore.html)）、問卷題目回覆（[QuestionnaireResponse](https://hl7.org/fhir/R4/questionnaireresponse.html#QuestionnaireResponse)）、一組請求（[RequestGroup](https://hl7.org/fhir/R4/requestgroup.html#RequestGroup)）、風險評估（[RiskAssessment](https://hl7.org/fhir/R4/riskassessment.html#RiskAssessment)）、服務請求（[ServiceRequest](https://hl7.org/fhir/R4/servicerequest.html#ServiceRequest)）、任務（[Task](https://hl7.org/fhir/R4/task.html#Task)）及視力處方（[VisionPrescription](https://hl7.org/fhir/R4/visionprescription.html#VisionPrescription)）。



---

// File: input/intro-notes/StructureDefinition-Encounter-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Encounter-id.html)** 查詢所有Encounter：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Encounter?_id=[id]`  
    `GET [base]/Encounter/[id]`

    例子：  
      (1) GET [base]/Encounter?_id=enc-example  
      (2) GET [base]/Encounter/enc-example

2. **建議應該（SHOULD）** 支援透過查詢參數 **[`class`](SearchParameter-Encounter-class.html)** 查詢所有Encounter：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Encounter?class=[code]`

    例子：  
      (1) GET [base]/Encounter?class=PRENC

3. **建議應該（SHOULD）** 支援透過查詢參數 **[`date`](SearchParameter-Encounter-date.html)** 查詢所有Encounter：  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Encounter?date={gt|lt|ge|le}[date]`

    例子：  
      (1) GET [base]/Encounter?date=gt2022-08-01

4. **建議應該（SHOULD）** 支援透過查詢參數 **[`identifier`](SearchParameter-Encounter-identifier.html)** 查詢所有Encounter：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Encounter?identifier={system|}[code]`  
    `GET [base]/Encounter?identifier=[code]`

    例子：  
      (1) GET [base]/Encounter?identifier=http://healthcare.example.org/identifiers/enocunter|E22081702  
      (2) GET [base]/Encounter?identifier=E22081702

5. **建議應該（SHOULD）** 支援透過查詢參數 **[`location`](SearchParameter-Encounter-location.html)** 查詢所有Encounter：  
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))  
    `GET [base]/Encounter?location={Type/}[id]`

    例子：  
      (1) GET [base]/Encounter?location=Location/hospital-example

6. **建議應該（SHOULD）** 支援透過查詢參數 **[`subject`](SearchParameter-Encounter-subject.html)** 查詢所有Encounter：  
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))  
    `GET [base]/Encounter?subject={Type/}[id]`

    例子：  
      (1) GET [base]/Encounter?subject=Patient/pat-example

7. **建議應該（SHOULD）** 支援透過查詢參數 **[`status`](SearchParameter-Encounter-status.html)** 查詢所有Encounter：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Encounter?status=[code]`

    例子：  
      (1) GET [base]/Encounter?status=finished 

### 實作注意事項

* Encounter.class 資料項目用於描述就醫事件發生的環境（如門診/住院等）。由於這對於理解就醫事件的背景、選擇適當的業務規則以執行和管理過程都非常重要，因此該資料項目是必須的。
* 在未來的 FHIR 版本中，將會加入某種形式的收費記錄工具（例如：Account）。

### 範例使用 Example usage

如上所述，Encounter 允許透過「partOf」資料項目來靈活組織嵌套就醫事件。這麼做的例子包括：

- 假設有一位病人入院兩週：這可用 Encounter 來表示，其中指定了整個住院時間的開始和持續時間。透過<code>participant</code>來指定負責入院的醫生和住院期間的負責醫生。
- 在病人的就醫期間，他從住院病房移動到加護病房（Intensive Care unit，ICU），然後再移回來：可創建三個更詳細的額外Encounter，每個代表病人停留的其中一個位置。這些Encounter每個都有一個<code>location</code>（兩次是住院病房，一次是加護病房）和該地點的一位或多位<code>participant</code>。這些 Encounter 可能使用<code>partOf</code>資料項目來表示這些移動發生在更長的整體就醫事件期間。
- 在住院的最後階段，病人被治療他的跨專科團隊成員問診，以進行最後評估：如有必要，對於這些短暫的問診，可以創建一個有一位<code>participant</code>的Encounter。由於這些問診發生在住院的最後階段，<code>partOf</code>資料項目可用來將這些短暫問診關聯到第三次病人移動或是整體的大型Encounter。

Encounter 的具體使用方式取決於來源系統中的可用資訊、每個 Encounter 層級的交換相關性以及訊息交換夥伴的具體需求，期望透過使用特定交換領域的 profiles 來限制 Encounter 的靈活性，以滿足使用案例的要求。



---

// File: input/intro-notes/StructureDefinition-Goal-twcore-notes.md

{% include quickstart-note.md %}

#### 必須支援以下查詢參數：

1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Goal-patient.html)** 查詢所有Goal：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    `GET [base]/Goal?patient={Type/}[id]`

    例子：  
      (1) GET [base]/Goal?patient=Patient/pat-example

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Goal-patient.html)** 及 **[`lifecycle-status`](SearchParameter-Goal-lifecycle-status.html)** 查詢所有Goal：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Goal?patient={Type/}[id]&lifecycle-status={system|}[code]`

    例子：  
      (1) GET [base]/Goal?patient=Patient/pat-example&lifecycle-status=active


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Goal-patient.html)** 及 **[`target-date`](SearchParameter-Goal-target-date.html)** 查詢所有Goal：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))   
    `GET [base]/Goal?patient={Type/}[id]&target-date={gt|lt|ge|le}[date]{&target-date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Goal?patient=Patient/pat-example&target-date=ge2015-01-14&target-date=le2019-01-14

3. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Goal-patient.html)** 及 **[`description`](SearchParameter-Goal-description.html)** 查詢所有Goal：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Goal?patient={Type/}[id]&description={system|}[code]`

    例子：  
      (1) GET [base]/Goal?patient=Patient/pat-example&description=http://snomed.info/sct|1078229009

---

// File: input/intro-notes/StructureDefinition-ImagingStudy-twcore-intro.md

{% include quickstart-intro.md %}

## Resource ImagingStudy - 內容

在DICOM影像檢查（study）中，我們會產生一至多個系列（<code>series</code>）的影像或資料。每一個「<code>series</code>」包含一組特定的影像或資料，這些都是在相同的條件下收集的，都專屬於一種造影儀器，比如X光、CT、MR或超音波。這就意味著在一次影像檢查中，我們可以從多種不同的造影儀器取得資訊，每種儀器提供的影像或資料組成一個<code>series</code>。因此，一次影像檢查可能包含多個<code>serie</code>，每個<code>series</code>展示了從一種特定儀器得到的視角或資訊，共同構成了對病人狀態的全面了解。

每個<code>series</code>由多個SOP實例（Service-Object Pair instances）」組成，這些SOP實例共同描述了某一部分的檢查或治療過程。它是DICOM標準中最基本的資料單元。每個SOP實例代表一個具體的影像或資料項目，例如一張CT掃描影像或一個檢查報告。它們是在某個特定<code>series</code>下被創建和管理的，每個實例都有唯一的標識符（Unique Identifiers，UID）以便於存取和參照。

因此，SOP實例與其所屬的<code>series</code>之間是隸屬關係，即一組SOP實例屬於特定的<code>series</code>，這些<code>series</code>再進一步組成整個影像檢查的完整畫面。透過這樣的結構，DICOM確保醫療影像資料的有序性及易於管理的特性。

### 範圍與使用

ImagingStudy是一種用來提供DICOM影像檢查相關資訊的工具，它包含了檢查中的每一組系列（<code>series</code>）和影像物件。這個工具還告訴我們怎麼去取得這些資料，不管是以原本的DICOM格式，還是轉換成其他格式，比如JPEG圖片。簡而言之，ImagingStudy幫助我們獲取和了解一次完整影像檢查的所有細節，讓這些資訊變得可用。

這個resource就像是一本字典，幫助我們理解DICOM影像檢查中的資料項目與DICOM屬性之間的關聯。每一個DICOM屬性都有一個特殊的標籤，這個標籤用一串特定的數字和字母來表示，比如（0008,103E）。如果你想知道每一個屬性代表什麼，以及它的數據類型是什麼，你可以在[DICOM第6部分資料字典](http://medical.nema.org/medical/dicom/current/output/html/part06.html)中找到答案。更詳細地關於這些屬性如何在影像資訊中被使用的說明，可以在[DICOM第3部分資訊物件定義](http://medical.nema.org/medical/dicom/current/output/html/part03.html)裡找到。
想像我們有一個DICOM屬性叫做「影像標題」，在DICOM中，它有一個特定的標籤（0008,103E），它可以存放的資料類型是文字。這個「影像標題」屬性是如何被使用的呢？在一次DICOM影像檢查中，每一個影像都可以有一個標題，用來描述該影像的內容或者是拍攝的具體情況。比如一個胸部X光的影像標題可能是「胸部正位」。這個標題幫助醫生快速了解影像的關鍵信息，而不需要打開影像就能得知一些基本情況。
而一些在DICOM查詢中特別用到的屬性，像是「影像檢查中的實例數量」，則在[DICOM第4部分附錄C](http://medical.nema.org/medical/dicom/current/output/html/part04.html#chapter_C)中有說明。

ImagingStudy的作用是讓我們能夠方便地獲取DICOM影像檢查中重要的資訊，這種情況只適用於非常簡單的案例，它並不能完全取代所有的DICOM查詢功能，比如QIDO-RS。QIDO-RS（Query based on ID for DICOM Objects by RESTful Services）是一種基於RESTful服務的DICOM標準查詢協議，它讓我們能夠透過網路，以一種簡單且標準化的方式，查詢DICOM伺服器上存儲的影像檢查資料。要注意的是：DICOM的影像或資料並不直接儲存在ImagingStudy resource裡，如果需要存取這些影像或資料，還是要透過DICOM WADO-RS服務器或其他的存儲方式。

簡單來說，一個ImagingStudy會對應到一次DICOM影像檢查，可能只包含該檢查的一部分資料。有時，多個ImagingStudy可能會參照同一次DICOM影像檢查，或者是該檢查的不同部分。

### 界限與關聯

TW Core IG繼承FHIR R4版，ImagingStudy用於DICOM影像及相關資訊的管理。對於非DICOM的影像、影片或音檔，則使用[Media](StructureDefinition-Media-twcore.html) resource來追踪、[Binary](https://hl7.org/fhir/R4/binary.html)resource可用於儲存任意內容、[DocumentReference](StructureDefinition-DocumentReference-twcore.html)允許對具有相關metadata的臨床「文件（document）」進行索引和查詢。

FHIR R4版中ImagingStudy resource被[ChargeItem](https://hl7.org/fhir/R4/chargeitem.html#ChargeItem)、[ClinicalImpression](https://hl7.org/fhir/R4/clinicalimpression.html#ClinicalImpression)、[DiagnosticReport](StructureDefinition-DiagnosticReport-twcore.html)和[Observation](StructureDefinition-Observation-laboratoryResult-twcore.html)參照。

**未來若有FHIR版本異動規畫的實作者可能須留意，FHIR R5版中已無Media resource，對於有相關metadata的非DICOM影像、影片及音檔使用[DocumentReference](StructureDefinition-DocumentReference-twcore.html)resource、使用[Binary](https://hl7.org/fhir/r4/binary.html)resource於儲存任意內容、並使用[ImagingSelection](https://hl7.org/fhir/r5/imagingselection.html) resource來存儲特定一組DICOM影像、影格或其他DICOM實例的參照。**

---

// File: input/intro-notes/StructureDefinition-ImagingStudy-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-ImagingStudy-id.html)** 查詢所有ImagingStudy：                
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/ImagingStudy?_id=[id]`  
    `GET [base]/ImagingStudy/[id]`

    例子：  
      (1) GET [base]/ImagingStudy?_id=img-example  
      (2) GET [base]/ImagingStudy/img-example

2. **建議應該（SHOULD）** 支援透過查詢參數 **[`status`](SearchParameter-ImagingStudy-status.html)** 查詢所有ImagingStudy：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/ImagingStudy?status=[code]`

    例子：  
      (1) GET [base]/ImagingStudy?status=available

3. **建議應該（SHOULD）** 支援透過查詢參數 **[`subject`](SearchParameter-ImagingStudy-subject.html)** 查詢所有ImagingStudy：  
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))  
    `GET [base]/ImagingStudy?subject={Type/}[id]`

    例子：:  
      (1) GET [base]/ImagingStudy?subject=Patient/pat-example

4. **建議應該（SHOULD）** 支援透過查詢參數 **[`encounter`](SearchParameter-ImagingStudy-encounter.html)** 查詢所有ImagingStudy：  
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))  
    `GET [base]/ImagingStudy?encounter={Type/}[id]`

    例子：:  
      (1) GET [base]/ImagingStudy?encounter=Encounter/enc-example

5. **建議應該（SHOULD）** 支援透過查詢參數 **[`started`](SearchParameter-ImagingStudy-started.html)** 查詢所有ImagingStudy：  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/ImagingStudy?started={gt|lt|ge|le}[date]`

    例子：  
      (1) GET [base]/ImagingStudy?started=gt2022-08-01

---

// File: input/intro-notes/StructureDefinition-Immunization-twcore-notes.md

{% include quickstart-note.md %}

#### 必須支援以下查詢參數：

1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Immunization-patient.html)** 查詢所有Immunization：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    `GET [base]/Immunization?patient={Type/}[id]`

    例子：  
      (1) GET [base]/Immunization?patient=Patient/pat-example

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Immunization-patient.html)** 及 **[`date`](SearchParameter-Immunization-date.html)** 查詢所有Immunization：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))   
    `GET [base]/Immunization?patient={Type/}[id]&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Immunization?patient=Patient/pat-example&date=ge2024-08-31T00:00:00Z


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Immunization-patient.html)** 及 **[`status`](SearchParameter-Immunization-status.html)** 查詢所有Immunization：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Immunization?patient={Type/}[id]&status={system|}[code]`

    例子：  
      (1) GET [base]/Immunization?patient=Patient/pat-example&status=completed

---

// File: input/intro-notes/StructureDefinition-Location-twcore-intro.md

{% include quickstart-intro.md %}

## Resource Location - 內容

這是關於一個提供服務的具體位置的描述，包括那裡如何存放、查找、包含或安置資源和人員的資訊。

### 範圍與使用

地點（Location）既包括臨時的地方（像是一個沒有提前被指定或批准就用來提供醫療服務的地方），也包括那些被正式確定用於特定目的的地方。這些地點既可以是私有的，也可以是公有的，有的可以移動，有的是固定不動的，大小也各不相同，從小型的冷凍箱到整座醫院大樓或停車場都是。

地點的例子有：

* 建築物、病區、走廊、房間或床位
* 流動診所
* 冷凍箱、孵育器
* 車輛或升降機
* 家裡、小屋或車庫
* 道路、停車位、公園
* 救護車（通稱）
* 救護車（具體指某一輛）
* 病人的家（通稱）
* 行政管轄區

這裡提到的地點位置不是指病人身上發生了什麼（比如病人的腿斷了那裡），而是指病人腿斷發生時的地點（比如在遊樂場）。

### 界限與關聯

地點（Location）和機構（Organization）是兩種密切相關的resources，但它們的用途有所不同。地點專注於描述具體的實體空間，這些空間由機構管理或運營。相比之下，機構更多地代表組織結構上的概念層次，例如：管理一間病房。

在某些情況下，地點可以不需要具體的地址就有效，例如：透過地理編碼描述偏遠地區，或由裝置記錄的位置。那些模式為「`kind`」的地點通常也不會有地址，因為它們只是表示一種地點的類型，但如果這些地點有一個具體地址可以找到，那麼也可以記錄地址。

地點還可以用來描述一個管轄區域，這可能是基於實體邊界和其他特定因素組合而定的一個範圍，例如：

- 國家 - 涵蓋全國的社區或聯邦政府（如：衛生部/衛生福利部）；
- 省份或州 （社區或政府）；
- 業務 （跨越整個企業）；
- 業務範圍 - 如疾病管制署（CDC）或食品藥物管理署（FDA）；
- 業務部門 - 如英國的藥局。

這個 resource 被多個其他 FHIR resources 參照，包括[使用上下文/情境（UsageContext）](https://hl7.org/fhir/R4/metadatatypes.html#UsageContext)、[帳戶（Account）](https://hl7.org/fhir/R4/account.html#Account)、[活動定義（ActivityDefinition）](https://hl7.org/fhir/R4/activitydefinition.html#ActivityDefinition)、[醫療不良事件（AdverseEvent）](https://hl7.org/fhir/R4/adverseevent.html#AdverseEvent)、[預約（Appointment）](https://hl7.org/fhir/R4/appointment.html#Appointment)、[預約回應（AppointmentResponse）](https://hl7.org/fhir/R4/appointmentresponse.html#AppointmentResponse)等。

### 註釋（Notes）
* 多個機構（Organization）或健康照護服務提供者（Practitioner）可能在同一個地點（Location）提供服務。這些參照資訊不會被保存在Location resource中，而是可以在[機構（Organization）](StructureDefinition-Organization-twcore.html)和[健康照護服務提供者（Practitioner）](StructureDefinition-Practitioner-twcore.html)的模型中找到。
* 地點可以範圍從整棟建築到小櫃子；使用地點的partOf資料項目可以將較小的地點與包含它的較大地點關聯起來。
* 地點的位置（<code>Location.position</code>）使用與Google Earth的KML文件相同的語法、基準和參照系統表示，詳見[Google/OGS的KML](http://www.opengeospatial.org/standards/kml)標準。

#### Location Mode 
<code>Location.mode</code>資料項目可以用來指示一個 Location resource 是代表一個特定的（可能可識別的）地點（「<code class=" highlighter-rouge language-plaintext">instance</code>」），還是某類地點（「<code class=" highlighter-rouge language-plaintext">kind</code>」）。特別是在涉及醫令、排程、計劃和定義的時，可能會參照處於「<code class=" highlighter-rouge language-plaintext">kind</code>」mode的地點。在這些領域，往往不需要指向一個具體的地點，而是指向某類地點。這在計劃時尤其明顯，比如我們需要為一位病人分配「一間隔離室」，或者在特定時間派遣「一輛救護車」。在這些情況下，沒有必要確切識別哪一個隔離室或哪一輛救護車被分配，只需指出是一種地點的「<code class=" highlighter-rouge language-plaintext">kind</code>」就足夠了。

需要注意的是：當你有一個具體的地點參與，但缺少該地點的具體識別資訊時，應該使用「`instance`」mode，即使無法提供該地點的完整識別資訊。這是因為「`instance`」模式用於表示一個具體的、特定的地點實例，即使某些具體細節（如<code>identifier</code>）未知。

而「kind」 mode則不應用於試圖填補關於具體地點實例缺失資訊的情況，而是用於表示某類地點，即一個通用類別或地點的類型，而不是指向一個具體的、可識別的單一地點。

所以，如果我們知道某個具體事件（如病人乘救護車到達）涉及一個具體的地點實例，但我們不知道是哪一輛救護車，我們仍然應該使用「instance」mode並嘗試提供盡可能多的資料，而不是使用「`kind`」mode。「`kind`」是用於當我們需要參用一個廣泛的地點類別，而不是特定的地點實例時。

當mode為「`instance`」時，一些資料項目才適用；當mode為「`kind`」時以下這些資料項目通常不使用：*（不過，如果某些資訊對於描述某類地點來說仍然有意義，即使它是特定於某個範圍的通用而非全球通用的，例如：代表Burgers Medical Centre的某一輛救護車，這時這些資料項目還是可以被包含進來的。）*

* 地點的唯一識別碼（<code>Location.identifier</code>）
* 地點的聯絡方式（<code>Location.telecom</code>）
* 地點的地址（<code>Location.address</code>）
* 地點的位置（<code>Location.position</code>）
* 地點的狀態（<code>Location.status</code>）
* 管理地點的機構（<code>Location.managingOrganization</code>）


---

// File: input/intro-notes/StructureDefinition-Location-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Location-id.html)** 查詢所有Location：                
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Location?_id=[id]`  
    `GET [base]/Location/[id]`

    例子：  
      (1) GET [base]/Location?_id=loc-ent-example  
      (2) GET [base]/Location/loc-ent-example

2. **建議應該（SHOULD）** 支援透過查詢參數 **[`address`](SearchParameter-Location-address.html)** 查詢所有Location：                
    ([如何透過string查詢](http://hl7.org/fhir/R4/search.html#string))   
    `GET [base]/Location?address=[string]`  

    例子：  
      (1) GET [base]/Location?address=新北市

3. **建議應該（SHOULD）** 支援透過查詢參數 **[`name`](SearchParameter-Location-name.html)** 查詢所有Location：      
    ([如何透過string查詢](http://hl7.org/fhir/R4/search.html#string))  
    `GET [base]/Location?name=[string]`

    例子：  
      (1) GET [base]/Location?name=衛生福利部臺北醫院


---

// File: input/intro-notes/StructureDefinition-Media-twcore-intro.md

{% include quickstart-intro.md %}

## Resource Media - 內容

Media resource 涵蓋了在健康照護中獲取或使用的影像、影片和音檔。這些內容可能直接嵌入或透過直接參照提供。

### 範圍與使用

**試用階段注意事項:** 國際HL7「醫令和檢驗檢查工作小組」想讓大家知道，需要附加資料類型的檢驗檢查現在應該用 Media resource 來記錄，而不是用Observation。為了讓 Media resource 能更好地和[檢驗檢查（Observation）](StructureDefinition-Observation-laboratoryResult-twcore.html)以及工作流[事件（event）](https://hl7.org/fhir/R4/event.html)模式結合，他們對 Media resource 做了幾個重要的調整：

1. 新增了[<code>partOf</code>](https://hl7.org/fhir/R4/media-definitions.html#Media.partOf)和[<code>issued</code>](https://hl7.org/fhir/R4/media-definitions.html#issued)資料項目。
2. 把必填的 <code>type</code> 改成了 選填的類別（<code>category</code>），並將 <code>subtype</code> 資料項目更名為[儀器（<code>modality</code>）](StructureDefinition-Media-twcore-definitions.html#Media.modality)。
3. 為<code>subject</code>、<code>operator</code>和<code>basedOn</code>元素增加了更多參照對象。
4. 加入了幾個標準的[事件之擴充資料項目（<code>event extensions</code>）](https://hl7.org/fhir/R4/media-profiles.html#extensions)。

Media resource 包括影像、影片和音檔，是醫療過程中不可或缺的一部分。常見的使用情境包括：

* 記錄診斷或照護過程的影像和影片。
* 診斷報告中的影像。

### 界限與關聯

這個 Media resource 專門記錄那些以音檔、影片或影像作為結果的檢驗檢查[（Observation）](StructureDefinition-Observation-laboratoryResult-twcore.html)。這種格式的資料優先使用此 resource 記錄，是因為它能提供讓我們理解這些資料的重要背景資訊（例如： metadata）。但要注意，有時候在一些舊的系統中，這類的多媒體資料可能會被記錄在 Observation 裡。

Media resource 可以包括用DICOM格式儲存的醫學影像。這些影像也可以透過 ImagingStudy resource 來存取，這個 resource 能直接連結到 WADO-RS 伺服器上的影像。

使用 WADO-RS 框架來呈現這些影像是首選的方法，因為它可能包括了根據 DICOM 標準加上的註釋和顯示參數。

另一方面，當 WADO-RS 服務無法使用時，Media resource 也提供了一個穩定的方式來傳送影像。所以，醫學影像同樣可以在 Media resource 表示，但<code>Media.content.url</code>應該指向一個可以存取影像的WADO-RS服務。

這個 resource 被醫療不良事件[（AdverseEvent）](https://hl7.org/fhir/R4/adverseevent.html#AdverseEvent)、臨床臆斷[（ClinicalImpression）](https://hl7.org/fhir/R4/clinicalimpression.html#ClinicalImpression)、設備使用聲明[（DeviceUseStatement）](https://hl7.org/fhir/R4/deviceusestatement.html#DeviceUseStatement)、診斷報告[（DiagnosticReport）](StructureDefinition-DiagnosticReport-twcore.html)、影像檢查[（ImagingStudy）](StructureDefinition-ImagingStudy-twcore.html)、藥品知識[（MedicationKnowledge）](https://hl7.org/fhir/R4/medicationknowledge.html#MedicationKnowledge)和檢驗檢查[（Observation）](StructureDefinition-Observation-laboratoryResult-twcore.html)等多個其他FHIR resources 參照。

#### 實作注意事項
Media resource 包含幾個日期/時間的資料項目：
* <code>Media.created[x]</code> - 是指拍攝或錄製的具體日期（或時間），或者是進行拍攝或錄製的時間段。
* <code>Media.duration</code> - 表示多媒體內容的持續時間。如果在錄製過程中有暫停，這個持續時間可能會與實際錄製的時間段<code>Media.createdPeriod</code>有所不同。
* [<code>Media.content.creation</code>](https://hl7.org/fhir/R4/datatypes-definitions.html#Attachment.creation)- 這個時間應該與<code>Media.created[x]</code>保持一致，但如果音檔有被部分剪輯或編輯，時間上可能會有差異。

這個resource允許透過<code>attachment.data</code> 直接嵌入影像或影片。不過，一般推薦的做法是使用<code>attachment.url</code>指向一個 Binary resource。這樣做的原因是伺服器通常能夠把 Binary resources 儲存在專門設計來存放可能很大的文件的儲庫中，這樣更加合適。

---

// File: input/intro-notes/StructureDefinition-Media-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Media-id.html)** 查詢所有Media：                
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Media?_id=[id]`  
    `GET [base]/Media/[id]`

    例子：  
      (1) GET [base]/Media?_id=media-example

      (2) GET [base]/Media/media-example
	  
2. **建議應該（SHOULD）** 支援透過查詢參數 **[`status`](SearchParameter-Media-status.html)** 查詢所有Media：      
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Media?status=[code]`

    例子：  
      (1) GET [base]/Media?status=completed

3. **建議應該（SHOULD）** 支援透過查詢參數 **[`subject`](SearchParameter-Media-subject.html)** 查詢所有Media：    
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    `GET [base]/Media?subject={Type/}[id]`

    例子：  
      (1) GET [base]/Media?subject=Patient/pat-example   

---

// File: input/intro-notes/StructureDefinition-Medication-twcore-intro.md

{% include quickstart-intro.md %}

## Resource Medication  - 內容
這個 resource 主要被用來識別和定義開處方、配藥、給藥、以及藥品使用聲明之藥品。

### 範圍與使用
在大部分健康照護環境中，描述藥品通常涉及從一個清單中選擇一項藥品，然後將選擇的藥品的參照資訊轉達給與病人相關的 resources 或其他應用程序。經常會提供額外的藥品資訊來進行人工確認，但是藥品的完整組成和功效的詳細資訊是透過參照藥典並使用它們定義的代碼來傳達的。有時候，當需要同時識別藥品和它的包裝，例如在配製一個有特定藥品包裝的藥品時，就需要識別更多細節。也有一些情況（例如：自製配方）需要表明藥品的組成。在這些情況下，需要具體指明藥品的成分和含量，儘管 Medication resource 並不提供完整的細節。

Medication resource 允許藥品透過其藥品劑型和成分（或多個成分）以及包裝方式進行描述。藥品將包括其成分及其強度，而包裝則包括特定容器中包含的量（例如：藥片數量、體積等），比如一瓶含100粒阿莫西林500毫克膠囊（100 capsules of Amoxicillin 500mg per bottle）。

用於描述藥局在配藥時製造的複方（即時配藥或處方藥）時，可以使用 Medication resource。這種情況下會有多種成分，通常是基本化學物質（例如：氫化可的松粉），也可能包括製成品（例如：Glaxal Base）作為其他成分。

當藥品包括包裝時，可以進一步提供有關其組成的詳細資訊。包裝通常包含一個容器（例如：真空包裝盒、罐子等）以及包裝中的產品或其他包裝的清單。

Medication resource 被以下 resources 所參照：活動定義（[ActivityDefinition](https://hl7.org/fhir/R4/activitydefinition.html#ActivityDefinition)）、醫療不良事件（[AdverseEvent](https://hl7.org/fhir/R4/adverseevent.html#AdverseEvent)）、照護計畫（[CarePlan](https://hl7.org/fhir/R4/careplan.html#CarePlan)）、目錄內的條目（[CatalogEntry](https://hl7.org/fhir/R4/catalogentry.html#CatalogEntry)）、費用項目（ [ChargeItem](https://hl7.org/fhir/R4/chargeitem.html#ChargeItem)）、費用項目定義（[ChargeItemDefinition](https://hl7.org/fhir/R4/chargeitemdefinition.html#ChargeItemDefinition)）、標記（[Flag](https://hl7.org/fhir/R4/flag.html#Flag)）、群體（[Group](https://hl7.org/fhir/R4/group.html#Group)）、藥品（Medication）、給藥（[MedicationAdministration](https://hl7.org/fhir/R4/medicationadministration.html#MedicationAdministration)）、配藥或調劑藥品（[MedicationDispense](StructureDefinition-MedicationDispense-twcore.html)）、藥品知識（[MedicationKnowledge](https://hl7.org/fhir/R4/medicationknowledge.html#MedicationKnowledge)）、藥品請求（[MedicationRequest](StructureDefinition-MedicationRequest-twcore.html)）、用藥聲明（[MedicationStatement](StructureDefinition-MedicationStatement-twcore.html)）、醫藥產品禁忌（[MedicinalProductContraindication](https://hl7.org/fhir/R4/medicinalproductcontraindication.html#MedicinalProductContraindication)）、醫藥產品適應症（[MedicinalProductIndication](https://hl7.org/fhir/R4/medicinalproductindication.html#MedicinalProductIndication)）、醫藥產品交互作用（[MedicinalProductInteraction](https://hl7.org/fhir/R4/medicinalproductinteraction.html#MedicinalProductInteraction)）、醫藥產品不良反應（[MedicinalProductUndesirableEffect](https://hl7.org/fhir/R4/medicinalproductundesirableeffect.html#MedicinalProductUndesirableEffect)）、處置（[Procedure](StructureDefinition-Procedure-twcore.html)）、供應品遞送（[SupplyDelivery](https://hl7.org/fhir/R4/supplydelivery.html#SupplyDelivery)）及供應品請求（[SupplyRequest](https://hl7.org/fhir/R4/supplyrequest.html#SupplyRequest)）

---

// File: input/intro-notes/StructureDefinition-Medication-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Medication-id.html)** 查詢所有Medication：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Medication?_id=[id]`  
    `GET [base]/Medication/[id]`

    例子：  
      (1) GET [base]/Medication?_id=med-example  
      (2) GET [base]/Medication/med-example

2. **建議應該（SHOULD）** 支援透過查詢參數 **[`code`](SearchParameter-Medication-code.html)** 查詢所有Medication：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Medication?code={system|}[code]`  

    例子：  
      (1) GET [base]/Medication?code=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/medication-fda-tw|衛署藥輸字第025485號

---

// File: input/intro-notes/StructureDefinition-MedicationDispense-twcore-intro.md

{% include quickstart-intro.md %}

## Resource MedicationDispense - 內容

這指的是已經或即將為特定的人或病人配藥或調劑藥品，包括對所提供的藥品及如何使用這些藥品的指導說明。藥局依據藥品處方進行配藥或調劑藥品。

### 範圍與使用
這個 resource 涵蓋了向病人供應藥品的過程。例子包括從門診或社區藥局領藥和調劑藥品，從住院藥局向病房病人配藥，以及從病房庫存發放單一劑量給病人服用。 藥品調劑（MedicationDispense）是藥局回應藥品處方的結果。

從 FHIR 工作流程的角度來看，MedicationDispense 是一個事件 resource - 參見 [工作流程事件 （Workflow Event）](https://hl7.org/fhir/R4/workflow.html#relationships)。

### 界限與關聯
**The Medication domain includes a number of related resources**

<table class="grid rwd-table">
  <tr>
    <th style="width: 240px;">Resource</th>
    <th>說明</th>
  </tr>
  <tr>
    <td><a href="StructureDefinition-MedicationRequest-twcore.html">MedicationRequest</a>（藥品請求）</td>
    <td>一個關於供應藥品及病人服藥或用藥指示的醫令。</td>
  </tr>
  <tr>
    <td><a href="StructureDefinition-MedicationDispense-twcore.html">MedicationDispense</a>（配藥或調劑藥品）</td>
    <td>提供一批藥品，旨在隨後由病人使用或服用（通常是回應處方）。</td>
  </tr>
  <tr>
    <td><a href="https://hl7.org/fhir/R4/medicationadministration.html">MedicationAdministration</a>（給藥）</td>
    <td>當病人實際使用藥品或者以其他方式給予病人藥品時。</td>
  </tr>
  <tr>
    <td><a href="StructureDefinition-MedicationStatement-twcore.html">MedicationStatement</a> （用藥聲明）</td>
    <td>這是一項紀錄，記錄了病人服用藥品或藥品已經給予病人，其中紀錄是基於病人或另一位臨床醫生的報告。藥品聲明不是「處方開立-&gt;配藥-&gt;給藥」過程中的一部分，而是一個報告，表明這樣的過程（或至少其一部分）確實發生了，從而認為病人已經接受了特定的藥品。</td>
  </tr>
</table>


這個 resource 不涉及向病人供應或移交非藥品相關項目。非藥品相關項目例如醫療器材、照護用品相關物資等，包括從基本的生活輔助用品到專門的醫療設備或治療用品。

### 背景

供應和相關的用藥指示可能不會完全遵循原始的處方，這可能是因為在這個過程中某些細節留待此時完成，或因為配藥者運用其臨床判斷進行了一些適當的修改。

這個 resource 被 [費用項目（ChargeItem）](https://hl7.org/fhir/R4/chargeitem.html#ChargeItem)、[用藥聲明 （MedicationStatement）](StructureDefinition-MedicationStatement-twcore.html)和[檢驗檢查 （Observation）](StructureDefinition-Observation-laboratoryResult-twcore.html)參照。



---

// File: input/intro-notes/StructureDefinition-MedicationDispense-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-MedicationDispense-id.html)** 查詢所有MedicationDispense：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/MedicationDispense?_id=[id]`  
    `GET [base]/MedicationDispense/[id]`

    例子：  
      (1) GET [base]/MedicationDispense?_id=med-dis-ref-example  
      (2) GET [base]/MedicationDispense/med-dis-ref-example

2. **建議應該（SHOULD）** 支援透過查詢參數 **[`status`](SearchParameter-MedicationDispense-status.html)** 查詢所有MedicationDispense：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/MedicationDispense?status=[code]`

    例子：  
      (1) GET [base]/MedicationDispense?status=completed

3. **建議應該（SHOULD）** 支援透過查詢參數 **[`subject`](SearchParameter-MedicationDispense-subject.html)** 查詢所有MedicationDispense：  
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))  
    `GET [base]/MedicationDispense?subject={Type/}[id]`

    例子：:  
      (1) GET [base]/MedicationDispense?subject=Patient/pat-example

4. **建議應該（SHOULD）** 支援透過查詢參數 **[`medication`](SearchParameter-MedicationDispense-medication.html)** 查詢所有MedicationDispense：  
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))  
    `GET [base]/MedicationDispense?medication={Type/}[id]`

    例子：:  
      (1) GET [base]/MedicationDispense?medication=Medication/med-example

#### Constraints 限制
<table class="grid rwd-table">
  <thead>
    <tr>
    <th style="width: 60px;">id</th>
    <th>Level</th>
    <th>位置</th>
    <th style="width: 300px;">說明</th>
    <th>運算式</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><strong>mdd-1</strong></td>
    <td><a href="https://hl7.org/fhir/R4/conformance-rules.html#rule">Rule</a></td>
    <td>(base)</td>
    <td>藥品發放的時間 (whenHandedOver) 不可早於藥品包裝和審核時間 (whenPrepared)</td>
    <td>whenHandedOver.empty() or whenPrepared.empty() or whenHandedOver &gt;= whenPrepared</td>
    </tr>
  </tbody>
</table>



---

// File: input/intro-notes/StructureDefinition-MedicationRequest-twcore-intro.md

{% include quickstart-intro.md %}

## Resource MedicationRequest - 內容

一份包含藥品供應和給病人使用藥品指示的醫令或請求稱為「藥品請求 （MedicationRequest）」。之所以選用「藥品請求」而不是「藥品處方 （MedicationPrescription）」或「藥品醫令 （MedicationOrder）」作為名稱，是為了讓這個resource能夠適用於更廣泛的場景，包括住院和門診環境、護理計畫等，同時也為了與現有的工作流程模式相協調。

### 範圍與使用

這個resource是用來記錄針對病人的各種藥品醫令，包括住院和社區中的藥品醫令（不論是由開立處方醫生還是由藥局給藥），它不僅適用於處方藥，還包括非處方藥物如阿司匹林、全腸外營養和飲食/維他命補充品的醫令。此外，這個resource還可以用於藥品相關裝置的醫令，但是，它不用於開立特定飲食的醫令，或是非藥品相關項目（如眼鏡、耗材等）醫令。MedicationRequest還可以用來匯報來自外部系統的醫令/請求，這些只是作為資訊分享，並非正式執行的醫令（例如：不預期進行配藥或給藥）。

從FHIR工作流程的角度看，MedicationRequest是一個用於「請求」的resource，旨在協助處理藥品相關的工作流程需求——詳見[工作流程請求](https://hl7.org/fhir/R4/workflow.html#request)。

如果需要一次開立多種藥品，則需使用MedicationRequest的多個實例來完成，並根據實際工作流程的需求將這些實例相互關聯。如需了解如何組織多個醫令，可以參考[請求模式](https://hl7.org/fhir/R4/request.html#compound)的指導。

### 界限與關聯

MedicationRequest resource是用來為病人請求或開立藥品醫令的。此外，當需要在不同機構或來源之間交流有關藥品請求或醫令的資訊時，也可以使用此resource。如果要請求耗材或醫療裝置，且這些請求涉及到病人使用指示時，則應該選擇使用[SupplyRequest](https://hl7.org/fhir/R4/supplyrequest.html)或[DeviceRequest](https://hl7.org/fhir/R4/devicerequest.html)。而當需要記錄和報告病人對藥品的使用情況時，則應該使用[MedicationStatementt](StructureDefinition-MedicationStatement-twcore.html)。這樣的安排確保了每種醫療需求都能通過最合適的resource來處理，從而提高了資訊交流的效率和準確性。


**藥品領域包括多個相關resources**

<table class="grid rwd-table">
  <thead>
    <tr>
      <th style="width: 240px;">Resource</th>
      <th>說明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="StructureDefinition-MedicationRequest-twcore.html">MedicationRequest</a>（藥品請求）</td>
      <td>一個關於供應藥品及病人服藥或用藥指示的醫令。</td>
    </tr>
    <tr>
      <td><a href="StructureDefinition-MedicationDispense-twcore.html">MedicationDispense</a>（配藥或調劑藥品）</td>
      <td>提供一批藥品，旨在隨後由病人使用或服用（通常是回應處方）。</td>
    </tr>
    <tr>
      <td><a href="https://hl7.org/fhir/R4/medicationadministration.html">MedicationAdministration</a>（給藥）</td>
      <td>當病人實際使用藥品或者以其他方式給予病人藥品時。</td>
    </tr>
    <tr>
      <td><a href="StructureDefinition-MedicationStatement-twcore.html">MedicationStatement</a> （用藥聲明）</td>
      <td>這是一項紀錄，記錄了病人服用藥品或藥品已經給予病人，其中紀錄是基於病人或另一位臨床醫生的報告。藥品聲明不是「處方開立-&gt;配藥-&gt;給藥」過程中的一部分，而是一個報告，表明這樣的過程（或至少其一部分）確實發生了，從而認為病人已經接受了特定的藥品。</td>
    </tr>
  </tbody>
</table>


這個resource被多個其他resources參照，包括照護計畫（[CarePlan](https://hl7.org/fhir/R4/careplan.html#CarePlan)）、理賠申請（[Claim](https://hl7.org/fhir/R4/claim.html#Claim)）、診斷報告（[DiagnosticReport](StructureDefinition-DiagnosticReport-twcore.html)）、利益說明（[ExplanationOfBenefit](https://hl7.org/fhir/R4/explanationofbenefit.html#ExplanationOfBenefit)）、給藥（[MedicationAdministration](https://hl7.org/fhir/R4/medicationadministration.html#MedicationAdministration)）、配藥或調劑藥品（[MedicationDispense](StructureDefinition-MedicationDispense-twcore.html)）、藥品請求（MedicationRequest）、用藥聲明（[MedicationStatement](StructureDefinition-MedicationStatement-twcore.html)）、檢驗檢查（[Observation](StructureDefinition-Observation-laboratoryResult-twcore.html)） 和服務請求（[ServiceRequest](https://hl7.org/fhir/R4/servicerequest.html#ServiceRequest)）。


---

// File: input/intro-notes/StructureDefinition-MedicationRequest-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：ounter

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-MedicationRequest-id.html)** 查詢所有MedicationRequest：               
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/MedicationRequest?_id=[id]`  
    `GET [base]/MedicationRequest/[id]`

    例子：  
      (1) GET [base]/MedicationRequest?_id=med-req-ref-example  
      (2) GET [base]/MedicationRequest/med-req-ref-example


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`status`](SearchParameter-MedicationRequest-status.html)** 查詢所有MedicationRequest：      
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/MedicationRequest?status=[code]`

    例子：  
      (1) GET [base]/MedicationRequest?status=active


3. **建議應該（SHOULD）** 支援透過查詢參數 **[`intent`](SearchParameter-MedicationRequest-intent.html)** 查詢所有MedicationRequest：    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/MedicationRequest?intent=[code]`

    例子：  
      (1) GET [base]/MedicationRequest?intent=order


4. **建議應該（SHOULD）** 支援透過查詢參數 **[`subject`](SearchParameter-MedicationRequest-subject.html)** 查詢所有MedicationRequest：    
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    `GET [base]/MedicationRequest?subject={Type/}[id]`

    例子：  
      (1) GET [base]/MedicationRequest?subject=Patient/pat-example   


5. **建議應該（SHOULD）** 支援透過查詢參數 **[`medication`](SearchParameter-MedicationRequest-medication.html)** 查詢所有MedicationRequest：        
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    `GET [base]/MedicationRequest?medication={Type/}[id]`

    例子：  
      (1) GET [base]/MedicationRequest?medication=Medication/med-example  


6. **建議應該（SHOULD）** 支援透過查詢參數 **[`encounter`](SearchParameter-MedicationRequest-encounter.html)** 查詢所有MedicationRequest：        
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    `GET [base]/MedicationRequest?encounter={Type/}[id]`

    例子：  
      (1) GET [base]/MedicationRequest?encounter=Encounter/enc-example


7. **建議應該（SHOULD）** 支援透過查詢參數 **[`authoredon`](SearchParameter-MedicationRequest-authoredon.html)** 查詢所有MedicationRequest：    
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/MedicationRequest?authoredon={gt|lt|ge|le}[date]`

    例子：  
      (1) GET [base]/MedicationRequest?authoredon=gt2022-08-01


### 劑量指示
在劑量指示過於複雜，難以進行編碼時，可以採用純文字形式來進行說明。這個屬性的內容不會包含藥品的名稱或其描述。即便存在編碼化的指示，純文字形式的劑量指示仍可用於展示給服藥或給藥的人員。預計這些文字指示將始終被填寫完整。如果劑量的時間（<code>dosage.timing</code>）也被提供，那麼劑量的純文字說明（<code>dosage.text</code>）應該反映與劑量時間相同的資訊。



---

// File: input/intro-notes/StructureDefinition-MedicationStatement-twcore-intro.md

{% include quickstart-intro.md %}

## Resource MedicationStatement - 內容

病人正在用藥的紀錄。一份用藥聲明 （MedicationStatement） 可能表明病人目前正在、曾經或將來會使用藥品。此資訊的來源可能是病人、重要他人（如家庭成員或配偶）或臨床醫生。病人就診或住院期間的病史記錄過程是獲取此類資訊的常見場景。藥品資訊可能來自病人的記憶、處方瓶或病人、臨床醫師或其他方維護的藥品清單。

用藥聲明 （medication statement） 與給藥（medication administration）之間的主要區別在於：給藥具有完整的用藥資訊，並且基於實際由給藥者提供的用藥資訊為基礎。相對而言，用藥聲明通常較為籠統，不會具體記錄用藥的日期或時間，實際上，我們只知道有來源報告說病人目前正在服用這種藥品，但關於用藥的時間、劑量、比例甚至藥物產品的詳細資訊可能不完整、缺失或不太精確。正如前面所提到的，用藥聲明的資訊可能來自病人的記憶、處方瓶或病人、臨床醫生或其他人維護的藥品清單。相比之下，給藥紀錄則更為正式，包含了詳細的用藥資訊。

### 範圍與使用

用藥聲明 （MedicationStatement） 的常見應用包括：

- 記錄非處方藥及/或娛樂性藥品的使用。
- 在病人入院時記錄其正使用的藥品清單。
- 在病人檔案中總結其正使用的藥品 （active medications）。

用藥聲明 （MedicationStatement） 可用於記錄物質濫用（substance abuse）或其他作用劑（agents）的使用，例如：煙草或酒精。需要這類紀錄的情境是當這些物質需要被包含在臨床決策支援系統的檢核中—像是藥物相互作用的檢核，它將被視為正在服用的藥品清單的一部分。若目標是為了紀錄社交史並加入額外資訊，像是戒菸的願望、每日使用量、及負面的健康影響，則建議將這些資訊記錄為檢驗檢查 （Observation），以便於後續填入社交史中。

這個resource本身不直接產生藥品清單，但它可以產生個人的用藥聲明，這些聲明後續可在 List resource 中被用來構建不同類型的藥品清單。值得注意的是，其他類型的藥品清單也可透過其他Pharmacy resources，像是MedicationRequest、MedicationAdministration來建立。

用藥聲明不屬於「開立處方 -> 調劑 -> 給藥」過程中的一部分，而是病人、其重要他人或臨床醫生所報告的情況，指出開立處方、調劑或給藥的一個或多個動作已經發生，從而認為病人正在使用、已經使用或將要使用某種特定的藥品。

從FHIR工作流程的視角來看，MedicationStatement是一個事件類型的resource——詳見[Workflow Event](https://hl7.org/fhir/R4/workflow.html#relationships)。

### 界限與關聯

用藥聲明 （MedicationStatement） resource 用於記錄病人報告的藥品或物質使用情況，包括正在使用、未使用、過去使用過或未來可能使用的。它也可用於記錄從其他記錄（如MedicationRequest）中衍生的藥品使用情況。該聲明不用於開立醫令請求藥品、供應品或設備。當需要請求藥品、供應品或設備，且有關於其使用的病人或指示時，應使用藥品請求（[MedicationRequest](StructureDefinition-MedicationRequest-twcore.html)）、供應品請求（[SupplyRequest](https://hl7.org/fhir/R4/supplyrequest.html)） 或設備請求（[DeviceRequest](https://hl7.org/fhir/R4/devicerequest.html)）。

**藥品領域包括多個相關resources**

<table class="grid rwd-table">
  <tr>
    <th style="width: 240px;">Resource</th>
    <th>說明</th>
  </tr>
  <tr>
    <td><a href="StructureDefinition-MedicationRequest-twcore.html">MedicationRequest</a>（藥品請求）</td>
    <td>一個關於供應藥品及病人服藥或用藥指示的醫令。</td>
  </tr>
  <tr>
    <td><a href="StructureDefinition-MedicationDispense-twcore.html">MedicationDispense</a>（配藥或調劑藥品）</td>
    <td>提供一批藥品，旨在隨後由病人使用或服用（通常是回應處方）。</td>
  </tr>
  <tr>
    <td><a href="https://hl7.org/fhir/R4/medicationadministration.html">MedicationAdministration</a>（給藥）</td>
    <td>當病人實際使用藥品或者以其他方式給予病人藥品時。</td>
  </tr>
  <tr>
    <td><a href="StructureDefinition-MedicationStatement-twcore.html">MedicationStatement</a> （用藥聲明）</td>
    <td>這是一項紀錄，記錄了病人服用藥品或藥品已經給予病人，其中紀錄是基於病人或另一位臨床醫生的報告。藥品聲明不是「處方開立-&gt;配藥-&gt;給藥」過程中的一部分，而是一個報告，表明這樣的過程（或至少其一部分）確實發生了，從而認為病人已經接受了特定的藥品。</td>
  </tr>
</table>



這個 resource 與藥品請求（[MedicationRequest](StructureDefinition-MedicationRequest-twcore.html)）、配藥或調劑藥品（[MedicationDispense](StructureDefinition-MedicationDispense-twcore.html)） 和給藥（ [MedicationAdministration](https://hl7.org/fhir/R4/medicationadministration.html)） 不同。這些 resources 分別指向特定的事件 — 處方、藥品的具體提供或給藥。用藥聲明 （MedicationStatement） 是一個更廣泛的聲明，涵蓋更長的時間範圍，且與特定事件無關。任何前述三種類型的 resource 實例的存在，都可以用來推斷一份用藥聲明。然而，用藥聲明也可以基於其他資訊來取得，包括病人或護理人員的聲明、實驗室檢驗的結果等。

這個 resource 被醫療不良事件（[AdverseEvent](https://hl7.org/fhir/R4/adverseevent.html#AdverseEvent)）、目標（[Goal](https://hl7.org/fhir/R4/goal.html#Goal)）、用藥聲明（MedicationStatement）和檢驗檢查（[Observation](StructureDefinition-Observation-laboratoryResult-twcore.html)）參照。

---

// File: input/intro-notes/StructureDefinition-MedicationStatement-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-MedicationStatement-id.html)** 查詢所有MedicationStatement：               
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/MedicationStatement?_id=[id]`  
    `GET [base]/MedicationStatement/[id]`

    例子：  
      (1) GET [base]/MedicationStatement?_id=med-sta-example
      (2) GET [base]/MedicationStatement/med-sta-example


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`status`](SearchParameter-MedicationStatement-status.html)** 查詢所有MedicationStatement：      
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/MedicationStatement?status=[code]`

    例子：  
      (1) GET [base]/MedicationStatement?status=active


3. **建議應該（SHOULD）** 支援透過查詢參數 **[`medication`](SearchParameter-MedicationStatement-medication.html)** 查詢所有MedicationStatement：        
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    `GET [base]/MedicationStatement?medication={Type/}[id]`

    例子：  
      (1) GET [base]/MedicationStatement?medication=Medication/med-example  

4. **建議應該（SHOULD）** 支援透過查詢參數 **[`subject`](SearchParameter-MedicationStatement-subject.html)** 查詢所有MedicationStatement：    
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    `GET [base]/MedicationRequest?subject={Type/}[id]`

    例子：  
      (1) GET [base]/MedicationStatement?subject=Patient/pat-example   


---

// File: input/intro-notes/StructureDefinition-MessageHeader-twcore-intro.md

{% include quickstart-intro.md %}

## Resource MessageHeader - 內容

當我們在進行訊息交換，不論是發出請求還是回應某個請求時，都會用到一個特別的表頭，我們稱之為訊息標頭（MessageHeader）。這個表頭裡面會包含這次請求涉及的主要內容參照（比如是關於哪些資料的操作）以及其他一些相關資訊。這些資訊通常會被打包在一個 bundle 中發送出去，而MessageHeader resource 則是這個bundle裡的第一個 resource，就像是包裹的首頁或封面一樣，告訴接收者這個包裹的主要內容和目的。

### 範圍與使用

MessageHeader Resource 是為了支援[利用 FHIR Resources 進行訊息傳遞](https://hl7.org/fhir/R4/messaging.html)而設計的。當進行訊息交換時，主要會使用到 MessageHeader Resource。

MessageHeader Resource 也可以在 RESTful 架構中使用，它有一個標準的 resource 端點（[base-url]/MessageHeader），可以透過這個端點管理一組訊息 resources及建立過去訊息的儲存庫。就像是在電腦裡保存的一個資料夾，裡面存放著所有曾經發送和接收的郵件。**但要注意，僅僅是保存這些訊息紀錄，並不意味著這些事件還在發生，或者可以透過保存的紀錄來觸發任何相關的操作或事件。** 它只是一個方便我們回顧和管理過去訊息的方法。



---

// File: input/intro-notes/StructureDefinition-MessageHeader-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數： 

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-MessageHeader-id.html)** 查詢所有MessageHeader：                
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/MessageHeader?_id=[id]`  
    `GET [base]/MessageHeader/[id]`

    例子：  
      (1) GET [base]/MessageHeader?_id=mes-example  

2. **建議應該（SHOULD）** 支援透過查詢參數 **[`author`](SearchParameter-MessageHeader-author.html)** 查詢所有MessageHeader：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    `GET [base]/MessageHeader?author={Type/}[id]`  

    例子：  
      (1) GET [base]/MessageHeader?author= https://twcore.mohw.gov.tw/ig/twcore/Practitioner-pra-example


3. **建議應該（SHOULD）** 支援透過查詢參數 **[`sender`](SearchParameter-MessageHeader-sender.html)** 查詢所有MessageHeader：           
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))   
   `GET [base]/MessageHeader?sender={Type/}[id]`  
    
	例子：    
		(1) GET [base]/MessageHeader?sender= https://twcore.mohw.gov.tw/ig/twcore/org-hosp-example

### 實作注意事項

* 當我們發送一個訊息 bundle 時，我們可以選擇是否要把跟訊息有關的資訊（比如由誰輸入的、誰是作者、誰是負責這項工作的人的訊息）一起打包發送，但如果接收者(或其他中介軟體)能夠定位或解析這些參照的resources資訊，我們就可以選擇不把它們包含在訊息裡。把所有訊息都打包發送比較適合那些系統間連接不那麼緊密的情況；而對於那些系統間連接很緊密的情況，可以不用這麼做。傳送訊息的規格及系統存取能力都定義在結構定義（[Structure Definition](https://hl7.org/fhir/R4/structuredefinition.html)），我們可以透過它了解如何進行選擇。
* 訊息中特別關注的部分（例如：是關於哪一件事的訊息，我們稱之為 **focus resources - 焦點 resources**）和它具體包含哪些訊息，是根據每次發送的訊息事件所決定的（可以參考[傳送訊息事件說明](https://hl7.org/fhir/R4/messaging.html#events)），這部分訊息總是會被包含在訊息的bundle中。
* 如果MessageHeader裡面的<code>source.endpoint</code>和<code>destination.endpoint</code>是實際可存取的網址，那麼它們應該指向訊息可以被送達的地方。如果這些地址是邏輯上的（也就是說你不能直接用網路存取），那麼負責傳遞訊息的中介軟體必須知道怎麼把訊息正確送到目的地。
* 訊息發生的具體時間會記錄在 focus resource 裡，而訊息發送的時間則會記錄在[<code>Bundle.timestamp</code>](https://hl7.org/fhir/R4/bundle-definitions.html#Bundle.timestamp)。
* 訊息的作者和接收者並不是指實際操作系統的技術設備，而是使用這些技術設備的人或機構。
* 即使一條訊息沒有明確指出接收者是誰，接收方也沒有義務拒絕這條訊息。例如：一個追蹤系統可能會收到本來發給別的系統的訊息。
* MessageEvent 值集是由那些定義事件的 resources 的作者所填寫的。

---

// File: input/intro-notes/StructureDefinition-Observation-averageBloodPressure-twcore-notes.md

{% include quickstart-note.md %}

#### 必須支援以下查詢參數：

1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|8867-4,http://loinc.org|85354-9,http://loinc.org|96607-7


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date=ge2020-01-01T00:00:00Z

#### 建議應該支援以下查詢參數：


4. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&status=final


5. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&_lastUpdated=ge2024-01-01T00:00:00Z


6. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|8867-4,http://loinc.org|85354-9,http://loinc.org|96607-7&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-bloodPressure-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Observation-id.html)** 查詢所有Observation：               
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?_id=[id]`  
    `GET [base]/Observation/[id]`

    例子：  
      (1) GET [base]/Observation?_id=obs-bloodPressure-example  
      (2) GET [base]/Observation/obs-bloodPressure-example


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))    
    `GET [base]/Observation?category={system|}[code]`

    例子：  
      (1) GET [base]/Observation?category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs


3. **建議應該（SHOULD）** 支援透過查詢參數 **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：      
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?code={system|}[code]`

    例子：  
      (1) GET [base]/Observation?code=http://loinc.org|85354-9


4. **建議應該（SHOULD）** 支援透過查詢參數 **[`performer`](SearchParameter-Observation-performer.html)** 查詢所有Observation：    
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    `GET [base]/Observation?performer={Type/}[id]`

    例子：  
      (1) GET [base]/Observation?performer=Practitioner/pra-dr-example


5. **建議應該（SHOULD）** 支援透過查詢參數 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：      
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?status=[code]`

    例子：  
      (1) GET [base]/Observation?status=registered


6. **建議應該（SHOULD）** 支援透過查詢參數 **[`subject`](SearchParameter-Observation-subject.html)** 查詢所有Observation：      
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    `GET [base]/Observation?subject={Type/}[id]`

    例子：  
      (1) GET [base]/Observation?subject=Patient/pat-example


7. **建議應該（SHOULD）** 支援透過查詢參數 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?date={gt|lt|ge|le}[date]`

    例子：  
      (1) GET [base]/Observation?date=gt2022-07-31

---

// File: input/intro-notes/StructureDefinition-Observation-bmi-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Observation-id.html)** 查詢所有Observation：               
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?_id=[id]`  
    `GET [base]/Observation/[id]`

    例子：  
      (1) GET [base]/Observation?_id=obs-bmi-example  
      (2) GET [base]/Observation/obs-bmi-example


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：      
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?category={system|}[code]`

    例子：  
      (1) GET [base]/Observation?category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs


3. **建議應該（SHOULD）** 支援透過查詢參數 **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：      
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?code={system|}[code]`

    例子：  
      (1) GET [base]/Observation?code=http://loinc.org|39156-5


4. **建議應該（SHOULD）** 支援透過查詢參數 **[`performer`](SearchParameter-Observation-performer.html)** 查詢所有Observation：        
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))   
    `GET [base]/Observation?performer={Type/}[id]`

    例子：  
      (1) GET [base]/Observation?performer=Practitioner/pra-dr-example


5. **建議應該（SHOULD）** 支援透過查詢參數 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：      
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?status=[code]`

    例子：  
      (1) GET [base]/Observation?status=registered


6. **建議應該（SHOULD）** 支援透過查詢參數 **[`subject`](SearchParameter-Observation-subject.html)** 查詢所有Observation：        
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))   
    `GET [base]/Observation?subject={Type/}[id]`

    例子：  
      (1) GET [base]/Observation?subject=Patient/pat-example


7. **建議應該（SHOULD）** 支援透過查詢參數 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?date={gt|lt|ge|le}[date]`

    例子：  
      (1) GET [base]/Observation?date=gt2022-07-31

---

// File: input/intro-notes/StructureDefinition-Observation-body-height-twcore-notes.md

{% include quickstart-note.md %}
#### 必須支援以下查詢參數： 


1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|8302-2


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date=ge2020-01-01T00:00:00Z


#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&status=final


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&_lastUpdated=ge2024-01-01T00:00:00Z


3. 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|8302-2&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-body-temperature-twcore-notes.md

{% include quickstart-note.md %}
#### 必須支援以下查詢參數： 


1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|8310-5


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date=ge2020-01-01T00:00:00Z


#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&status=final


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&_lastUpdated=ge2024-01-01T00:00:00Z


3. 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|8310-5&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-body-weight-twcore-notes.md

{% include quickstart-note.md %}
#### 必須支援以下查詢參數： 


1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|29463-7


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date=ge2020-01-01T00:00:00Z


#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&status=final


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&_lastUpdated=ge2024-01-01T00:00:00Z


3. 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|29463-7&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-careExperiencePreference-twcore-notes.md

{% include quickstart-note.md %}

#### 必須支援以下查詢參數：

1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=care-experience-preference`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=care-experience-preference


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|95541-9


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=care-experience-preference&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=care-experience-preference&date=ge2020-01-01T00:00:00Z

#### 建議應該支援以下查詢參數：

4. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=care-experience-preference&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=care-experience-preference&status=final


5. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=care-experience-preference&_lastUpdated=ge2024-01-01T00:00:00Z


6. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|95541-9&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-clinical-result-twcore-notes.md

{% include quickstart-note.md %}

#### 必須支援以下查詢參數： 

1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|laboratory`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|laboratory


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|44974-4,http://loinc.org|44963-7,http://loinc.org|8601-7


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|laboratory&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|laboratory&date=ge2020-01-01T00:00:00Z



#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|laboratoryh&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|laboratory&status=final


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|laboratory&_lastUpdated=ge2024-01-01T00:00:00Z


3. 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|8867-4,http://loinc.org|85354-9,http://loinc.org|96607-7&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-head-circumference-twcore-notes.md

{% include quickstart-note.md %}
#### 必須支援以下查詢參數： 


1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|9843-4


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date=ge2020-01-01T00:00:00Z


#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&status=final


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&_lastUpdated=ge2024-01-01T00:00:00Z


3. 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|9843-4&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-heart-rate-twcore-notes.md

{% include quickstart-note.md %}
#### 必須支援以下查詢參數： 


1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|8867-4


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date=ge2020-01-01T00:00:00Z


#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&status=final


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&_lastUpdated=ge2024-01-01T00:00:00Z


3. 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|8867-4&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-laboratoryResult-twcore-intro.md

{% include quickstart-intro.md %}

## Resource Observation - 內容

關於病人、裝置或其他對象所做的測量和簡單聲明。

### 範圍與使用

這個resource 從 FHIR 工作流程的角度來看是一個 [事件resource](https://hl7.org/fhir/R4/workflow.html#event) - 請參見[工作流程（Workflow）](https://hl7.org/fhir/R4/workflow.html)。

Observations 是健康照護中的核心元素，用來幫助診斷、追踪病情進展、確定基準和模式，甚至記錄人口統計特徵。大部分的 observations 都是一些帶有附加資料的簡單名稱/值配對聲明，但有些observations會邏輯上將其他observations結合起來，或者甚至是包含多個部分的observations。需要注意的是，[診斷報告（DiagnosticReport）](StructureDefinition-DiagnosticReport-twcore.html) resource提供了一組 observations 的臨床或工作流程上下文，透過參照 Observation resource 來呈現實驗室、影像學和其他臨床及診斷資料，從而形成一份完整的報告。

Observation resource的使用案例包括：

* 基本生命體徵：如[體重](Observation-obs-bmi-example.html)、[血壓](Observation-obs-bloodPressure-example.html)和[體溫](https://hl7.org/fhir/R4/observation-example-f202-temperature.html)
* 實驗室數據：比如[血糖](https://hl7.org/fhir/R4/observation-example-f001-glucose.html)或[估算腎過濾率（eGFR）](https://hl7.org/fhir/R4/observation-example-f205-egfr.html)
* 影像結果：如[骨密度](https://hl7.org/fhir/R4/observation-example-bmd.html)或胎兒尺寸測量
* 臨床發現：比如[腹部壓痛](https://hl7.org/fhir/R4/observation-example-abdo-tender.html)
* 裝置測量：如[EKG數據](https://hl7.org/fhir/R4/observation-example-sample-data.html)或[血氧飽和度](https://hl7.org/fhir/R4/observation-example-satO2.html)
* 臨床評估工具：例如[APGAR評分](https://hl7.org/fhir/R4/observation-example-5minute-apgar-score.html)或[Glasgow昏迷評分](https://hl7.org/fhir/R4/observation-example-glasgow.html)
* 個人特徵：如[眼睛顏色](https://hl7.org/fhir/R4/observation-example-eye-color.html)
* 社交史：例如吸煙習慣、家庭支持或認知狀態
* 核心特質：如懷孕狀態或死亡聲明

*在醫學本體論（ontology）中，臨床發現和疾病之間的界限仍是一個挑戰。參考下方和[病情、問題或診斷（Condition）](StructureDefinition-Condition-twcore.html)中的界限與關聯小節以獲得一般指導。這些界限可以透過針對特定使用案例的 Observation 進行細化來明確界定。*

#### Observation核心Profiles試用

Observation resource已經定義了一些核心的[profiles](https://hl7.org/fhir/R4/profiling.html)，也就是特定的profile。如果系統或應用程式在使用這個 resource 來記錄特定 profile 中的概念時，它們**必須遵守**以下的profiles：

 <table class="grid rwd-table" style="width: 1280px;">
        <tr>
            <th>Profile</th>
            <th>描述</th>
        </tr>
        <tr>
            <td><a href="https://hl7.org/fhir/R4/observation-vitalsigns.html">Vital signs</a></td>
            <td>FHIR 生命體徵（Vital Signs）profile 確立了使用 Observation resource 來記錄、查詢和取得病人的生命體徵（比如體溫、血壓、呼吸速率等）的最小資料集要求。</td>
        </tr>
    </table>

### 界限與關聯

簡單來說，Observation 讓我們可以記錄名稱和值的配對（name-value pair），或者一系列有結構的名稱和值的配對。這意味著它可以用來記錄任何類型的資訊。但是它主要不是用來取代其他 FHIR resources 已經涵蓋的特定情況和用途，例如：如果是要記錄病人的過敏情況，就應該用[AllergyIntolerance](StructureDefinition-AllergyIntolerance-twcore.html) resorce；記錄病人服用的藥品，就用[MedicationStatement](StructureDefinition-MedicationStatement-twcore.html) resource；記錄病人的家族病史，就用[FamilyMemberHistory](https://hl7.org/fhir/R4/familymemberhistory.html) resource；記錄病人的處置紀錄，就用[Procedure](StructureDefinition-Procedure-twcore.html)resource；紀錄一組問題及其答案就用[QuestionnaireResponse](https://hl7.org/fhir/R4/questionnaireresponse.html) resource ；Observation 主要是用來記錄測量數據和主觀的評估，而不是用來記錄臨床診斷，這類應該用[Condition](StructureDefinition-Condition-twcore.html) resource 或[ClinicalImpression](https://hl7.org/fhir/R4/clinicalimpression.html) resource 來記錄。

Condition resource 經常參照 Observation resource 來提供特定的主觀和客觀數據以支持其斷言。然而，會有重疊的情況出現。例如：對於「你有沒有吸食過非法藥品」的問題，理論上可以用 MedicationStatement 記錄，但大多數系統會把這種資訊當作一個 Observation 來處理。有時候，特別是當資料來自某些特定來源，比如 HL7 v2 資料流，系統可能難以區分哪些是診斷、過敏等「特殊」類型的檢驗檢查，哪些是應該用 Observation 來記錄的實驗室結果或生命體徵。在這些不確定能否完全區分檢驗檢查類型的情況下，這些特殊類型的檢驗檢查也可能使用 Observation 來記錄，這樣的慣例作法是可被接受的。如果實作者不確定實作提議使用 Observation 的適當性，很建議可以在[chat.fhir.org implementer's stream](https://chat.fhir.org/)上向全球實作者諮詢。

另外，[Media](StructureDefinition-Media-twcore.html) resource 是用來特別記錄影像、影片或音檔的檢驗檢查，Media 跟 Observation 不同，是因為 Media 提供了解釋這些資訊所需要的額外 metadata。查看 Media 的界限與關聯以了解 Media（和 Observation）與 [ImagingStudy](StructureDefinition-ImagingStudy-twcore.html)和[DocumentReference](StructureDefinition-DocumentReference-twcore.html)的區別。

與Observation resource相比，[DiagnosticReport](StructureDefinition-DiagnosticReport-twcore.html) resource 則包含了更多的臨床上下文和結果、影像、影像報告、文字表述、編碼解釋及格式化混合呈現，例如實驗室報告、病理報告和影像報告等，DiagnosticReport 透過參照 Observation 來提供具體的結果數據。實驗室裡經常會根據幾個具體的檢驗結果來做一個總結的評語，我們一般叫這個評語為「臆斷（impression）」或者「解釋（interpretations）」。有時候，這些評語是根據特定的演算法來的，有時候則是病理學家給出的專業判斷，這些評語會記錄在 Observation 或者 DiagnosticReport 這兩種 resources 裡，這些記錄並不等同於對病人進行的臨床診斷。臨床診斷通常是基於綜合評估病人的整體狀況後所做的判斷，並且更多的是被記錄在臨床臆斷（[Clinical Impression](https://hl7.org/fhir/R4/clinicalimpression.html)）resource 或 Condition resources中。

總之，Observation resource 用來記錄測量數據和主觀評估，不適合用來記錄臨床診斷等已被其他 resource 覆蓋的情況。


Observation resource 被以下 resources 所參照：醫療不良事件（[AdverseEvent](https://hl7.org/fhir/R4/adverseevent.html#AdverseEvent)）、預約（[Appointment](https://hl7.org/fhir/R4/appointment.html#Appointment)）、照護計畫（[CarePlan](https://hl7.org/fhir/R4/careplan.html#CarePlan)）、費用項目（[ChargeItem](https://hl7.org/fhir/R4/chargeitem.html#ChargeItem)）、臨床臆斷（[ClinicalImpression](https://hl7.org/fhir/R4/clinicalimpression.html#ClinicalImpression)）、通訊（[Communication](https://hl7.org/fhir/R4/communication.html#Communication)）、通訊請求（[CommunicationRequest](https://hl7.org/fhir/R4/communicationrequest.html#CommunicationRequest)）、病情、問題或診斷（[Condition](StructureDefinition-Condition-twcore.html)）、合約（[Contract](https://hl7.org/fhir/R4/contract.html#Contract)）、設備請求（[DeviceRequest](https://hl7.org/fhir/R4/devicerequest.html#DeviceRequest)）、設備使用聲明（[DeviceUseStatement](https://hl7.org/fhir/R4/deviceusestatement.html#DeviceUseStatement)）、診斷報告（[DiagnosticReport](StructureDefinition-DiagnosticReport-twcore.html)）、就醫事件（[Encounter](StructureDefinition-Encounter-twcore.html)）、家庭成員病史（[FamilyMemberHistory](https://hl7.org/fhir/R4/familymemberhistory.html#FamilyMemberHistory)）、目標（[Goal](https://hl7.org/fhir/R4/goal.html#Goal)）、指導回應、（[GuidanceResponse](https://hl7.org/fhir/R4/guidanceresponse.html#GuidanceResponse)）、影像檢查（[ImagingStudy](StructureDefinition-ImagingStudy-twcore.html)）、疫苗接種（[Immunization](https://hl7.org/fhir/R4/immunization.html#Immunization)）、給藥（[MedicationAdministration](https://hl7.org/fhir/R4/medicationadministration.html#MedicationAdministration)）、藥品請求（[MedicationRequest](StructureDefinition-MedicationRequest-twcore.html)）、用藥聲明（[MedicationStatement](StructureDefinition-MedicationStatement-twcore.html)）、分子序列（[MolecularSequence](https://hl7.org/fhir/R4/molecularsequence.html#MolecularSequence)）、檢驗檢查（Observation）、處置或手術（[Procedure](StructureDefinition-Procedure-twcore.html)）、題目回覆（[QuestionnaireResponse](https://hl7.org/fhir/R4/questionnaireresponse.html#QuestionnaireResponse)）、一組請求（[RequestGroup](https://hl7.org/fhir/R4/requestgroup.html#RequestGroup)）、風險評估（[RiskAssessment](https://hl7.org/fhir/R4/riskassessment.html#RiskAssessment)）、服務請求（[ServiceRequest](https://hl7.org/fhir/R4/servicerequest.html#ServiceRequest)）及供應品請求（[SupplyRequest](https://hl7.org/fhir/R4/supplyrequest.html#SupplyRequest)）。



---

// File: input/intro-notes/StructureDefinition-Observation-laboratoryResult-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Observation-id.html)** 查詢所有Observation：               
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?_id=[id]`  
    `GET [base]/Observation/[id]`

    例子：  
      (1) GET [base]/Observation?_id=obs-loinc-example  
      (2) GET [base]/Observation/obs-loinc-example


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：        
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?category={system|}[code]`

    例子：  
      (1) GET [base]/Observation?category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory


3. **建議應該（SHOULD）** 支援透過查詢參數 **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：        
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?code={system|}[code]`

    例子：  
      (1) GET [base]/Observation?code=http://loinc.org|10449-7


4. **建議應該（SHOULD）** 支援透過查詢參數 **[`performer`](SearchParameter-Observation-performer.html)** 查詢所有Observation：        
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))   
    `GET [base]/Observation?performer=[performer]`

    例子：  
      (1) GET [base]/Observation?performer=Practitioner/pra-dr-example


5. **建議應該（SHOULD）** 支援透過查詢參數 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：        
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?status=[code]`

    例子：  
      (1) GET [base]/Observation?status=registered


6. **建議應該（SHOULD）** 支援透過查詢參數 **[`subject`](SearchParameter-Observation-subject.html)** 查詢所有Observation：        
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))   
    `GET [base]/Observation?subject={Type/}[id]`

    例子：  
      (1) GET [base]/Observation?subject=Patient/pat-example


7. **建議應該（SHOULD）** 支援透過查詢參數 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?date={gt|lt|ge|le}[date]`

    例子：  
      (1) GET [base]/Observation?date=gt2022-07-31


#### Constraints 限制

<table class="grid rwd-table" >
    <thead>
        <tr>
        <th style="width: 60px;">id</th>
        <th>Level</th>
        <th>位置</th>
        <th>說明</th>
        <th><a href="https://hl7.org/fhir/R4/fhirpath.html">運算式（Expression）</a></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>obs-3</td>
        <td><a href="https://hl7.org/fhir/R4/conformance-rules.html#rule">Rule</a></td>
        <td><code>Observation.referenceRange</code></td>
        <td>至少必須有<code>low</code>、<code>high</code>或<code>text</code></td>
        <td>low.exists() or high.exists() or text.exists()</td>
        </tr>
        <tr>
        <td>obs-6</td>
        <td><a href="https://hl7.org/fhir/R4/conformance-rules.html#rule">Rule</a></td>
        <td>(base)</td>
        <td>如果<code>Observation.value[x]</code>不存在，<code>dataAbsentReason</code> 必須存在</td>
        <td>dataAbsentReason.empty() or value.empty()</td>
        </tr>
        <tr>
        <td>obs-7</td>
        <td><a href="https://hl7.org/fhir/R4/conformance-rules.html#rule">Rule</a></td>
        <td>(base)</td>
        <td>如果 <code>Observation.code</code> 與 <code>Observation.component.code</code> 相同，則與該代碼相關聯的 value 元素不得出現（SHALL NOT present）。</td>
        <td>value.empty() or component.code.where(coding.intersect(%resource.code.coding).exists()).empty()</td>
        </tr>
    </tbody>
</table>

### 實作注意事項

#### 進一步定義 Observation（Profiling Observation）

最簡單的 Observation 實例可以只需要包括一個代碼（code）、一個值（value），以及一個表示狀態的標記（status flag）。根據檢驗檢查的類型不同，其他的屬性的重要性及相關性也會有所變化。通常會建立[Profiles](https://hl7.org/fhir/R4/observation-profiles.html)來為特定情境下某些類型的檢驗檢查表達所需記錄的內容及系統能力(資料類型、基數、是否綁定值集、查詢參數及系統的資料存取能力等)。Observation resource 主要關注大部分系統所記錄的細節程度，因而相對比較沒有太多的要求限制。但是，對於某些特定的用途，可能還需要額外的限制和在特定情況下才相關的更多資訊。正如對待其他resources一樣，可以使用擴充資料項目（[extensions](https://hl7.org/fhir/R4/extensibility.html)）來添加這類額外的複雜性資料。


#### Observation的檢驗檢查對象

通常，檢驗檢查是關於某個對象進行的，這可能是一位病人、一群病人、某個地點或某個裝置。這項檢驗檢查和我們實際測量的東西之間的差別，大多是直接從檢驗檢查的名字就能看出來，比如說「血糖」，所以我們不需要再特別去說明它。但是，如果我們關注的重點不是這個對象本身，我們就有三種資料項目來幫助我們描述這個焦點。例如<code>specimen</code>和<code>bodySite</code>資料項目它們用來代表我們是在對象的哪個檢體或身體哪個部位進行測量，而<code>focus</code>則是用來指出，我們關注的是對象的哪個特定方面，比如另一項檢驗檢查或者植入病人體內的一個裝置。

#### Observation組合（Grouping）

許多檢驗檢查之間存在重要的關聯，需要被組合在一起。為了達成這一點，已經定義了以下結構：DiagnosticReport 和 <code>DiagnosticReport.result</code>，以及 Observation 和它的幾個資料項目：<code>Observation.component</code>、<code>Observation.hasMember</code>和<code>Observation.derivedFrom</code>。下面的小節將提供關於如何選擇使用哪一種結構的指導，因為決定哪些檢驗檢查需要被組合通常非常依賴於具體情境，並且基於最終使用者的觀點，所以選擇哪種結構將受到法規、機構實務和情境的驅動。通常，實作時需要進行適當的Profiling。

##### DiagnosticReport.result

DiagnosticReport 直接關聯到一個醫令（ServiceRequest）。<code>DiagnosticReport.code</code> 用來命名檢驗檢查組合，並且作為組合資料項目，這在實驗室通常被稱為「一組/組套檢驗（panel）」或「一套/組套檢驗（battery）」。<code>DiagnosticReport.result</code> 資料項目參照了單項檢驗檢查。有幾個[範例](https://hl7.org/fhir/R4/diagnosticreport-examples.html)展示了使用 DiagnosticReport 作為組合結構進行檢驗檢查組合的情況。

##### Observation.component
<code>Observation.component</code>是用來描述那些只有在它們所屬的檢驗檢查內部才有意義的支持性結果。換句話說，這些 component 可能是構成一個檢驗檢查的各個部分，或者提供一些額外資訊來幫助理解<code>Observation.code</code>，例如透過查看[<code>$stats</code>操作](https://hl7.org/fhir/R4/observation-operation-stats.html)來獲得更多細節。因此，要完全理解一個檢驗檢查的含義，我們需要考慮所有主要檢驗檢查之代碼-值對（code-value），以及所有組成之檢驗檢查的代碼值對（component.code-component.value pairs）。當一項檢驗檢查雖然是單一的，但它可能需要記錄多個不同方面或Components的資訊，
**只涉及一種測量方法、一次檢驗、一位操作者、一個裝置，並且是在同一時間進行時，我們才會用到component**。

這種結構特別適用於以下情況：

- 那些通常一起生成並一起解讀的檢驗檢查。例如：收縮壓和舒張壓就是作為一個[血壓組合](Observation-obs-bloodPressure-example.html)來呈現的。
- 那些通常一起生成並一起解讀的評估工具結果。例如：新生兒的[Apgar評分](https://hl7.org/fhir/R4/observation-example-5minute-apgar-score.html)就是一個包含五個Components的單一檢驗檢查。
- 用於表示對一個問題的多個回答，例如：報告病人飲用的[酒精類型](https://hl7.org/fhir/R4/observation-example-alcohol-type.html)。

但是某些檢驗檢查看似為Component但實際不適合放Component，像是那些有臨床上意義的檢驗檢查，它們應該作為獨立的檢驗檢查來呈現。例如：[身體質量指數（Body Mass Index，BMI）](Observation-obs-bmi-example.html)檢驗檢查就不應該包含身高和體重Compoents，因為這兩項資料本身就是有臨床意義的檢驗檢查，應該分別使用獨立的檢驗檢查來記錄。下面的部分將解釋如何關聯這些獨立的檢驗檢查。

##### Observation.hasMember 及 Observation.derivedFrom
<code>Observation.hasMember</code>及<code>Observation.derivedFrom</code> 及核心擴充資料項目：[Observation-sequelTo](http://hl7.org/fhir/StructureDefinition/observation-sequelTo)及[Observation-replaces](http://hl7.org/fhir/StructureDefinition/observation-replaces)
用於任何可以獨立解釋和使用的支援結果，並且具有一個或多個不同的方法、檢驗檢查、執行者、設備、時間和/或錯誤病情、問題或診斷值。使用這種結構的兩個常見用例是：

1. 對相關檢驗檢查結果進行組合，例如「一組/組套檢驗(panel)」或「一套/組套檢驗(battery)」：舉個例子，想象一下你去醫院做了一個血液檢查，這個檢查包括了多項不同的測試，如紅血球計數、白血球計數和血小板計數。在這種情況下，每一項檢驗都是一個獨立的檢驗檢查結果，但它們都屬於同一個血液檢查「panel/battery」，此panel/battery 將以<code>Observation.code</code>表示，通常不呈現 <code>Observation.value[x]</code>，並且將要組合的檢驗檢查呈現在 <code>Observation.hasMember</code> 中 (請參見以下json範例)。當與 DiagnosticReport 一起使用時，這種結構允許嵌套分組（例如：[複雜的微生物分離和敏感性報告](https://hl7.org/fhir/R4/diagnosticreport-micro1.html)）。


```json
{
  "resourceType": "Observation",
  "id": "blood-panel-example",
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "laboratory",
          "display": "Laboratory"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "XXX-XXXX",
        "display": "Complete blood count (CBC) panel"
      }
    ],
    "text": "血液檢查套組"
  },
  "subject": {
    "reference": "Patient/example",
    "display": "病人範例"
  },
  "effectiveDateTime": "2024-03-06",
  "hasMember": [
    {
      "reference": "Observation/rbc-count-example"
    },
    {
      "reference": "Observation/wbc-count-example"
    },
    {
      "reference": "Observation/platelet-count-example"
    }
  ],
  "issued": "2024-03-06T10:00:00.000+00:00",
  "performer": [
    {
      "reference": "Practitioner/example-lab-technician",
      "display": "實驗室技術人員範例"
    }
  ]
}

```
2. 其次，當我們想要顯示一項檢驗檢查結果是如何從其他檢驗檢查結果衍生出來的。以身體質量指數（（[（BMI）](https://hl7.org/fhir/R4/observation-example-bmi-using-related.html)）為例，BMI 的計算需要用到體重和身高兩個值，體重和身高的測量是獨立的檢驗查結果，而 BMI 則是基於這兩項數值計算得出。在這種情況下，<code>Observation.code</code>和<code>Observation.value[x]</code>都呈現，並且身高與體重值列在<code>Observation.derivedFrom</code>中。請參閱以下JSON範例。

```json
{
  "resourceType": "Observation",
  "id": "bmi-example",
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "vital-signs",
          "display": "Vital Signs"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "39156-5",
        "display": "Body Mass Index (BMI) [Ratio]"
      }
    ],
    "text": "身體質量指數（BMI）"
  },
  "subject": {
    "reference": "Patient/example",
    "display": "病人範例"
  },
  "effectiveDateTime": "2024-03-06",
  "valueQuantity": {
    "value": 22.2,
    "unit": "kg/m2",
    "system": "http://unitsofmeasure.org",
    "code": "kg/m2"
  },
  "derivedFrom": [
    {
      "reference": "Observation/weight-example"
    },
    {
      "reference": "Observation/height-example"
    }
  ],
  "issued": "2024-03-06T10:00:00.000+00:00",
  "performer": [
    {
      "reference": "Practitioner/example-nutritionist",
      "display": "營養師範例"
    }
  ]
}
```

##### 在 Observation 中使用代碼

最後，關於 <code>valueCodeableConcept</code>的使用，這是當檢驗檢查結果的值需要用預定義的概念來表示時使用的。這意味著，如果檢驗檢查結果的值不是一個簡單的數字或文字表述，而是一個具有特定意義的概念，我們會使用一個代碼來表示這個概念。例如：在記錄病人的血型時，我們不會直接記錄「AB陰性」，而是使用一個對應於「AB陰性」這一概念的標準化代碼。為達這樣的目的，通常需要針對資料項目綁定（[bound](https://hl7.org/fhir/R4/terminologies.html)）值集，例如：SNOMED CT 或當地的代碼系統（local codes）。

##### 多重編碼（Multiple Codings）

檢驗檢查的結果可以根據不同的代碼系統被編碼到多個值集中。這些值集可以透過使用 ConceptMap resource 進行對應，或者可以直接在資料項目中提供作為附加的代碼，正如下面的例子所展示的。

LOINC 代碼 43304-5 Chlamydia trachomatis rRNA [Presence] in Specimen by NAA with probe detection 用於表示在非特定檢體中檢驗沙眼衣原體（Chlamydia Trachomatis）是否存在，這通常與代碼的presence（存在）/absence（不存在）概念相關，若此例的檢驗結果為不存在，則使用「Negative」（陰性）的代碼值，並且按照標準編碼進行翻譯時，<code>valueCodeableConcept</code> 將會是：


```json
    "valueCodeableConcept": {
		"coding": [
			{
				"system": "http://snomed.info/sct",
				"code": "260385009",
				"display": "Negative"
			}, {
				"system": "https://acme.lab/resultcodes",
				"code": "NEG",
				"display": "Negative"
			}
		],
		"text": "Negative for Chlamydia Trachomatis rRNA"
	} 
```

##### 檢驗檢查結果代碼的的 text 值: 

如果這些資料項目通常被編碼、或者相關資料項目的資料類型需要一個代碼<code>code</code>時，即使沒有合適的代碼只有 text 可用，也應使用<code>valueCodeableConcept</code>。例如：僅使用text時，<code>valueCodeableConcept</code>資料項目將會是：

```json

    "valueCodeableConcept": {
		"text": "uncoded free text result"
	}

```

當編碼答案的清單中包括一個表示「其他（other）」的概念代碼，而且這個概念還有一段文字表述時，我們就應該使用 <code>valueCodeableConcept.text</code>資料項目來充分捕捉這個來源的完整意義。舉例來說，在以下的情況中，答案代碼「其他」被放在<code>valueCodeableConcept</code>資料項目裡，同時，提供的文字表述被放在<code>CodeableConcept.text</code>資料項目裡。這樣做的目的是為了確保那些額外的、描述性的資訊——這些資訊可能無法僅僅透過一個預先定義的代碼來完全傳遞——能夠被準確地記錄和保存下來。

```json
    {
        "resourceType": "Observation",
        ... snip ...
        "code": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": "74076-1",
                    "display": "Medication or substance involved"
                }
            ]
        },
        .. snip ...
        "valueCodeableConcept": {
            "coding": [
                {
                    "system": "http://loinc.org",
                    "code": " LA20343-2",
                    "display": "Other substance: PLEASE SPECIFY"
                }
            ],
            "text": "Other: Blue pills I found under my couch"
        }
        .. snip ...
    }
```

##### 在 FHIR 中使用代碼值對（code value pairs）時的互操作性問題

在 FHIR 記錄檢驗檢查資料時，一個常見的挑戰是如何正確填寫檢驗檢查的代碼和結果。這對於實驗室檢查來說相對直觀，但對於其他類型的檢驗檢查，比如疾病診斷、家族病史等，就可能變得不太清晰。這裡的重點是討論怎樣用<code>Observation.code</code>及<code>Observation.value</code>資料項目來準確描述這些檢驗檢查及其結果。

FHIR 檢驗檢查包括兩個關鍵資料項目：

- 做了哪些操作來獲得檢驗查的結果，或者說明了我們對什麼特性進行了檢查。例如，進行血紅蛋白含量的測量。
- 檢驗檢查的具體結果，像是血紅蛋白值是 14 g/dl。

我們可以用不同的方式，組合<code>Observation.code</code>及<code>Observation.value</code>資料項目來表示同一資訊。但是，過度自由地選擇不同的表示方式，會對理解和解釋來自不同來源的資料造成困難。以下是四種可能的表示方法，它們都能合理地反應相同的情況。鑑於檢驗檢查resources要滿足多種用途，確定具體使用哪種模式，最好是按照各自實作 FHIR 的地區或組織發布的標準和指引來操作：

* 案例一、使用<code>Observation.code</code>來描述檢驗檢查的類型，用<code>Observation.value</code>代碼來表示非數字的檢驗檢查結果。例如：
    * code=[檢查（Examination）]
    * value=[腹部疼痛（Abdomen tender）]
* 案例二、這種方式與第一種類似，但是重點從<code>Observation.code</code>的細節有所不同，從值改為代碼。例如：
    * code=[腹部檢查（Abdominal examination）]
    * value=[壓痛（Tenderness）]
* 案例三、在這種方式中，<code>Observation.code</code>直接表示了檢驗檢查發現，而不是檢驗檢查的動作。<code>Observation.value</code>用來確認或否定這個發現。例如：
   - 代碼=[腹部壓痛（Abdominal tenderness）]
   - 結果=[發現/是（found/true）]
* 案例四、與案例三相似，但<code>Observation.code</code>不具體指出做了哪種檢驗檢查但指明檢驗檢過的發現，並且省略了<code>Observation.value</code>。例如：
   - 代碼=[腹部壓痛（Abdominal tenderness）]
   - 結果被省略

總之，我們有多種方法可以表達檢驗檢查資料，但選擇哪一種需要根據實際情況和指引來決定。

##### 指引

1. 對案例一和二之模型所建議的規則：
   * <code>Observation.code</code>最好使用[LOINC](https://loinc.org/)概念代碼。
       * 如果使用[SNOMED CT](http://snomed.info/sct) 概念代碼，表達式應該代表363787002（Observable entity （Observable entity））或386053000（Evaluation procedure（evaluation procedure））。
   * 對於非數字值，<code>Observation.value</code>最好使用 SNOMED CT 概念代碼。
   
2. 對案例三之模型所建議的規則：
   * <code>Observation.code</code> 最好是 LOINC 或 SNOMED CT 概念代碼。
       * 如果使用 SNOMED CT 概念代碼，表達式應該代表 404684003（Clinical finding（（finding））、413350009（Finding with explicit context （finding））或 272379006（Event（event））。
   * <code>Observation.value</code>可以表示為：
       * valueBoolean
       * valueCodeableConcept 最好使用：
           * SNOMED CT，其中概念是 362981000（Qualifier value（qualifier value））
           * [v2 Yes/no Indicator](https://hl7.org/fhir/R4/v2/0136/index.html)
           * [v2 Expanded Yes/no Indicator](https://hl7.org/fhir/R4/v2/0136/index.html)（遺憾的是缺少「not given」選項）
3. 對案例四之模型所建議的規則：
   * <code>Observation.code</code> 最好是 SNOMED CT 概念代碼，其中概念是 404684003（Clinical finding （finding））、413350009（Finding with explicit context(finding)）或 272379006（Event（event））。
   * 省略 <code>Observation.value</code>，預設解釋是 <code>Observation.code</code> 中表示的概念（單一代碼或表達式）存在於病人身上。**建議應該（SHOULD）** 使用 <code>Observation.dataAbsentReason</code> 值 clinical-finding 表明預期值缺失的原因。
4. **必須沒有（SHALL NOT）** 使用如 [HL7 第三版實作指引：TermInfo - 在 CDA R2 模型中使用 SNOMED CT，第一版](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=418) 中描述的斷言模式 (Assertion pattern)。例如一位醫生在病人的健康記錄中想要記錄一項斷言，比如病人有糖尿病。在使用斷言模式時，這個記錄可能會這樣表示：
    * 代碼（code）：'ASSERTION'
    * 值（value）：一個 SNOMED CT 的代碼，代表「糖尿病」這個臨床診斷。

    這種做法在某些情況下可能很有用，但在 HL7 第三版實作指引中，建議不使用這種模式，主要是因為它可能會在不同系統之間引起解釋上的混淆或互操作性問題。

#### 在進一步解釋檢驗檢查結果時，使用額外的代碼（codes）或其他檢驗檢查資料（Observations）可以提供更多的背景資訊，這可能會改變對檢驗檢查結果的解釋。
以下是一些建議，指導如何利用這些額外的代碼或資料來精確解釋檢驗檢查：

1.盡可能使用最具體的代碼。例如：

```json
{
"resourceType": "Observation",
... snip ...
"code": {
	"coding": [
		{
			"system": "http://loinc.org",
			"code": "6689-4",
			"display": "Glucose [Mass/​volume] in Blood --2 hours post meal"
		}
	]
},
... snip ...
}
```
2.或者，如上所述，在<code>Observation.code</code>中使用額外的代碼。

    例如：<code>Observation.code</code> = coding-1: 59408-5 動脈血氧飽和度透过脈搏血氧儀測量（"Oxygen saturation in Arterial blood by Pulse oximetry）,coding-2: 20564-1 血氧飽和度（Oxygen saturation in Blood）
```json
{
"resourceType": "Observation",
... snip ...
"code": {
	"coding": [
		{
			"system": "http://loinc.org",
			"code": "59408-5",
			"display": "Oxygen saturation in Arterial blood by Pulse oximetry"
		},
		{
			"system": "http://loinc.org",
			"code": "20564-1",
			"display": "Oxygen saturation in Blood"
		}
	]
},
... snip ...
}
```

3.如上所述，通常將檢驗檢查結果彙集在一起，以提供正確理解和解釋檢驗檢查所需的額外資訊。作為彙集檢驗檢查的另一種方法，也可以使用擴充資料項目(extensions)來參照其他檢驗檢查的資料，有助於我們更好地理解和解釋某項檢驗檢查結果。

#### Value[x] and Datatypes

* <code>Observation.value[x]</code>資料項目，其變數名稱依據其資料類型而定，如下所示：
     * valueQuantity
     * valueCodeableConcept
     * valueString
     * valueBoolean
     * valueInteger
     * valueRange
     * valueRatio
     * valueSampledData
     * valueTime
     * valueDateTime
     * valuePeriod

* 請看上述關於[使用代碼來表示檢驗檢查結果](https://hl7.org/fhir/R4/observation.html#usingcodes)的說明：

    * 因為大部分檢驗檢查結果的資料並非完全是對或錯，例如會有「未知」這種特殊值，所以很少直接用布林值（是或否）來表示<code>value[x]</code>。反之，建議使用CodeableConcept資料類型，從[http://terminology.hl7.org/ValueSet/v2-0136](http://terminology.hl7.org/ValueSet/v2-0136)挑選代碼（這些代碼可以用來表示「是/否」，或者根據需要轉換成「真/假」等其他明確互斥的詞彙）。

    * 對於特殊的值，如「E」表示錯誤、「L」表示低於限制和「U」表示高於限制，在SampledData資料類型中有所使用。但是，如果在檢驗檢查中要表示某個資料高於或低於限制，應該使用<code>valueQuantity</code>，並明確標出限制值及其比較條件。此外，當有錯誤發生時，應該使用<code>dataAbsentReason</code>資料項目指明具體是「錯誤」或「非數值」。比如，如果某個資料低於限制，比如小於2.0 mmol/L，那麼<code>valueQuantity</code>應該如何表示呢？


```json
    "valueQuantity": {
            "value": 2.0,
            "comparator": "<",
            "unit": "mmol/l",
            "system": "http://unitsofmeasure.org",
            "code": "mmol/L"
        }
```

如果該值是「NaN」（即一個錯誤），則<code>valueCodeableConcept</code>資料項目將會缺失，而<code>dataAbsentReason</code>資料項目則應該是：

```json
    "dataAbsentReason": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/data-absent-reason",
                    "code": "NaN",
                    "display": "Not a Number"
                }
            ]
        }
```
因為允許多種類型的資料用於value資料項目，所以定義了多個查詢 value 的參數。沒有標準參數用於查詢類型為 Ratio 的值。

#### 檢驗檢查的生理相關時間

<code>effectiveDateTime</code>或<code>effectivePeriod</code>表示檢驗檢查與受檢者最相關的時間點。對於生物體（例如：病人）來說，這是檢驗檢查的生理相關時間點。在使用檢體進行檢驗的情況下，它代表檢體收集的開始與結束時間（例如：24小時尿鈉檢查），但如果收集時間相當短，則會被報告為單一時間點的值（例如：常規的靜脈穿刺）。直接從受檢者得到的檢驗檢查結果（例如：血壓檢查、胸部X光檢查）則記錄檢驗過程的開始與結束時間，這通常也會被報告為單一時間點。

#### 參考範圍

大多數常見的檢驗檢查結果僅有一個通用參考範圍。參考範圍對於實驗室檢測和其他測量（例如：收縮壓）很有用，但對於「懷孕狀態」之類的測量則關聯較小。系統可能(MAY)只提供基於對病人資訊的了解（例如：針對病人的年齡、性別、體重和其他因素的特定參考範圍），但這可能不總是可行或適當的。當提供多個參考範圍時，應該在參考範圍和/或年齡屬性中說明它們之間的區別，主要是因為參考範圍可能會根據病人的年齡、性別、體重和其他健康因素有所不同。這種差異化確保了檢驗檢查結果的評估更加個人化和精準，從而提供了更有價值的醫療訊息。例如：某些檢測指標的正常範圍可能在兒童和成人之間有顯著差異，或者男性和女性之間的正常值可能不同。

#### 取消或中止的檢驗檢查

如果一項測量或檢驗無法完成（例如，如果樣品不合格或醫令被取消），則狀態值應更新為「取消」並詳細說明原因，最好是在<code>dataAbsentReason</code>或<code>valueCodeableConcept</code>資料項目中以編碼值的形式提供。額外的訊息也可以透過<code>note</code>資料項目提供。[檢體拒絕的範例](https://hl7.org/fhir/R4/observation-example-unsat.html)展示了如何使用<code>dataAbsentReason</code>中的編碼值來表示不合格的檢體。

#### 遺傳檢驗檢查
遺傳報告大量依賴於DiagnosticReport和Observation resource。描述如何表達遺傳結果的實作指引可以在[這裡](http://hl7.org/fhir/uv/genomics-reporting/index.html)找到。

### 針對Observation定義的操作

#### 查詢最後N次檢驗檢查

*lastn* 查詢操作滿足了對於查詢受檢者最新或「最後已知」檢驗檢查結果的常見需求。這項查詢可以用於以下例子：

* 查詢一位病人最後5次的體溫，以觀察趨勢。
* 獲取一位病人最近的實驗室檢測結果。
* 查詢一位病人所有重要生命體徵的最後3次結果。

更多資訊和範例，請參考[最後N次檢驗檢查](https://hl7.org/fhir/R4/observation-operation-lastn.html)查詢部分的Observation resource 操作頁面。

#### 取得實驗室檢驗檢查結果的統計資訊

stats操作對一系列臨床測量進行了一組統計計算，如血壓測量，這些測量儲存在服務器上。該操作專注於具有UCUM單位代碼的<code>valueQuantity</code>資料項目的Observation resource。這項操作可用於以下情況：

* 為一位病人獲取一系列血壓測量的平均值、最小值、最大值及次數。
* 在一定時間範圍內，對於一系列進行的測量（比如血壓測量、血糖水平等），可以計算出這些測量值中的第20百分位數和第80百分位數。

更多資訊和範例，請參考[Observation統計](https://hl7.org/fhir/R4/observation-operation-stats.html)部分的Observation resource 操作頁面。

---

// File: input/intro-notes/StructureDefinition-Observation-occupation-twcore-notes.md

{% include quickstart-note.md %}

#### 必須支援以下查詢參數：

1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=social-history`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=social-history


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|11341-5


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=social-history&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=social-history&date=ge2020-01-01T00:00:00Z

#### 建議應該支援以下查詢參數：


4. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=social-history&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=social-history&status=final


5. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=social-history&_lastUpdated=ge2024-01-01T00:00:00Z


6. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|11341-5&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-pediatric-bmi-age-twcore-notes.md

{% include quickstart-note.md %}
#### 必須支援以下查詢參數： 


1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|59576-9


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date=ge2020-01-01T00:00:00Z


#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&status=final


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&_lastUpdated=ge2024-01-01T00:00:00Z


3. 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|59576-9&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-pediatric-head-circumference-twcore-notes.md

{% include quickstart-note.md %}
#### 必須支援以下查詢參數： 


1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|8289-1


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date=ge2020-01-01T00:00:00Z


#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&status=final


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&_lastUpdated=ge2024-01-01T00:00:00Z


3. 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|8289-1&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-pediatric-weight-height-twcore-notes.md

{% include quickstart-note.md %}
#### 必須支援以下查詢參數： 


1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|77606-2


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|survey&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date=ge2020-01-01T00:00:00Z


#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&status=final


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&_lastUpdated=ge2024-01-01T00:00:00Z


3. 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|77606-2&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-pregnancy-intent-twcore-notes.md

{% include quickstart-note.md %}

#### 必須支援以下查詢參數： 


1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|social-history`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|social-history


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|86645-9


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|social-history&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|social-history&date=ge2020-01-01T00:00:00Z



#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|social-history&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|social-history&status=final


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|laboratory&_lastUpdated=ge2024-01-01T00:00:00Z


3. 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|886645&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-pregnancy-status-twcore-notes.md

{% include quickstart-note.md %}


#### 必須支援以下查詢參數： 

1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|social-history`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|social-history


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|82810-3


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|social-history&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|social-history&date=ge2020-01-01T00:00:00Z

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|social-history&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|social-history&status=final


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|laboratory&_lastUpdated=ge2024-01-01T00:00:00Z


3. 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|886645&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-pulse-oximetry-twcore-notes.md

{% include quickstart-note.md %}
#### 必須支援以下查詢參數： 


1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|59408-5,http://loinc.org|2708-6


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date=ge2020-01-01T00:00:00Z


#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&status=final


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&_lastUpdated=ge2024-01-01T00:00:00Z


3. 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|59408-5,http://loinc.org|2708-6&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-respiratory-rate-twcore-notes.md

{% include quickstart-note.md %}
#### 必須支援以下查詢參數： 


1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|9279-1


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&date=ge2020-01-01T00:00:00Z


#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&status=final


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs&_lastUpdated=ge2024-01-01T00:00:00Z


3. 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|9279-1&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-screening-assessment-twcore-notes.md

{% include quickstart-note.md %}

#### 必須支援以下查詢參數： 

1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|survey`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|survey


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|9271-8,http://loinc.org|32405-3,http://loinc.org|32403-8


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|survey&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|survey&date=ge2020-01-01T00:00:00Z

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|survey&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|survey&status=final


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|survey&_lastUpdated=ge2024-01-01T00:00:00Z


3. 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|9271-8&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-sexual-orientation-twcore-notes.md

{% include quickstart-note.md %}
#### 必須支援以下查詢參數： 


1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|76690-7


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|social-history&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|social-history&date=ge2020-01-01T00:00:00Z


#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory&status=final


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory&_lastUpdated=ge2024-01-01T00:00:00Z


3. 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|76690-7&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-simple-twcore-notes.md

{% include quickstart-note.md %}

#### 必須支援以下查詢參數：

1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|sdoh`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|sdoh


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|8867-4,http://loinc.org|85354-9,http://loinc.org|96607-7


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|sdoh&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|sdoh&date=ge2020-01-01T00:00:00Z

#### 建議應該支援以下查詢參數：


4. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|sdoh&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|sdoh&status=final


5. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/category-code-tw|sdoh&_lastUpdated=ge2024-01-01T00:00:00Z


6. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|8867-4,http://loinc.org|85354-9,http://loinc.org|96607-7&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-smoking-status-twcore-notes.md

{% include quickstart-note.md %}
#### 必須支援以下查詢參數： 


1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|social-history`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|social-history


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|72166-2


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|social-history&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|social-history&date=ge2020-01-01T00:00:00Z


#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|social-history&status=final


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|social-history&_lastUpdated=ge2024-01-01T00:00:00Z


3. 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|72166-2&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-treatment-intervention-preference-twcore-notes.md

{% include quickstart-note.md %}
#### 必須支援以下查詢參數： 


1. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|treatment-intervention-preference`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|treatment-intervention-preference


2. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 及  **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|75773-2


3. **必須（SHALL）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|treatment-intervention-preference&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|treatment-intervention-preference&date=ge2020-01-01T00:00:00Z


#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Observation?patient={Type/}[id]&category=http://terminology.hl7.org/CodeSystem/observation-category|laboratory&status={system|}[code]{,{system|}[code],...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|treatment-intervention-preference&status=final


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`category`](SearchParameter-Observation-category.html)** 及 **[`_lastUpdated`](SearchParameter-Observation-lastupdated.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&_lastUpdated={gt|lt|ge|le}[date]{&_lastUpdated={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&category=http://terminology.hl7.org/CodeSystem/observation-category|treatment-intervention-preference&_lastUpdated=ge2024-01-01T00:00:00Z


3. 支援透過查詢參數 **[`patient`](SearchParameter-Observation-patient.html)** 、 **[`code`](SearchParameter-Observation-clinical-code.html)** 及 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：               
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))    
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    例子：  
      (1) GET [base]/Observation?patient=Patient/pat-example&code=http://loinc.org|75773-2&date=ge2020-01-01T00:00:00Z

---

// File: input/intro-notes/StructureDefinition-Observation-vitalSigns-twcore-intro.md

{% include quickstart-intro.md %}

## Resource Observation Vital Signs - 內容

生命徵象將會是最先需要一套統一且全球通用的術語體系的領域之一，目的是為了能夠隨時隨地存取和重用這些資料。這個需求在病人使用可穿戴設備時尤其突顯，因為他們希望或需要分享這些設備上的資訊。為了滿足這個需求，我們必須採用一套一致的術語和通用的語法，以實現資料意義能夠被不同系統理解和使用。FHIR 的生命徵象Profile為記錄、查詢和獲取與病人相關的生命徵象設定了基本標準，不僅包括主要的生命徵象，還有身高、體重和BMI等額外測量資料。在下面的快速開始部分定義了對 resource 進行基本強制性查詢的支援。當一個FHIR實作支援下面列出的任何生命徵象時，該實作 **必須（SHALL）** 遵循此 Profile 對生命徵象檢驗檢查的規定。

這些要求最初是在FHIR DSTU2版本中，作為美國ONC支援的資料存取框架（DAF）專案的一部分而開發、審議和發布的，並且隨後被更新，以定義存取由美國Argonaut專案試點實作所確定的病人資料所需要的最基本的遵循要求。

### 範圍及使用 

**範例使用情境：**

以下是使用這個 Profile 的一些範例情境：

- 查詢特定病人的生命徵象

#### 必填資料項目及專門術語

以下資料項目是必須要有的，換句話說，這些資料 **必須（SHALL）** 被填入。我們用簡單明了的方式來解釋這些資料項目，同時也提供了適用於特定 Profile 的指引和有效的範例。需注意的是，許多範例的內容超出了最低的規格要求，連結到所提供的 Profile 定義，你將可看到關於 Profile 更正式的內容、描述、對應以及 JSON 和 XML 的 StructureDefinitions 。

**每一項檢驗檢查(Observation)必須包含：**

1. 狀態(status)
2. 「生命徵象」的類別代碼(category code)
3. 指出正在測量的內容的一個「特定值(magic value)」
    - 選擇 LOINC 作為「特定值」，因為這與大多數國家一致，但它可以簡單地被視為一套固定的共通代碼來傳達基本的生命徵象。需要使用不同代碼系統的實作者仍可以相應地進行對應。
4. 病人
5. 測量的時間
6. 一個數值結果值和來自下表單位代碼 (Unit Code) 欄的標準 UCUM 單位。
    - 注意：如果沒有數值結果，則必須提供原因。

### Profile 的正式內容

[生命徵象 Profile](http://hl7.org/fhir/R4/vitalsigns.html)提供了生命徵象的官方定義連結。

- 下表列出了一組基本的生命徵象概念，包括必需使用的代碼「特定值」，以及用來表示生命徵象檢驗檢查結果的UCUM單位代碼。當系統支援下表中任一生命徵象時，必須使用這些代碼來表示。如果有血壓的檢驗檢查結果，那麼必須包括收縮壓和舒張壓的數值，但如果缺少這些數值，則需要提供缺數據的原因。

- 下表的第一列提供了指向每個生命徵象個別 Profile 的正式定義的連結。

- 如果記錄更具體的代碼或需要使用另一個代碼系統，實作者必須同時支援下列的LOINC值和轉換後的代碼，例如：特定方法的LOINC代碼、SNOMED CT概念或是特定系統的本地代碼。

- 此外，實作者可以選擇除了這裡定義的標準代碼之外，還提供其他代碼。範例顯示了如何使用其他代碼作為轉換。

- 其他 Profile 可能會規定哪些生命徵象必須記錄，或作為「一組/組套檢驗(panel)」的一部分出現，或者可能擴充這個列表以包括更多的生命徵象。針對使用LOINC的實作者，下面的注意事項提供了選填的代碼。

<table class="grid rwd-table">
<thead>
<tr>
<th style="width: 270px;">Profile 名稱</th>
<th>特定值 (LOINC)</th>
<th style="width: 600px;">LOINC 名稱及意見</th>
<th>UCUM 單位代碼</th>
<th>範例</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="http://hl7.org/fhir/R4/vitalspanel.html">一組生命徵象檢驗檢查（Vital Signs Panel）</a></td>
<td>85353-1</td>
<td>生命徵象、體重、身高、頭圍、氧飽和度和一組BMI檢驗 - 它代表了在此表中列出的一組生命徵象。需要注意的是，一組檢驗中的所有檢驗項目都是選填的，這種情況下的<code> Observation.valueQuantity</code> 並未呈現在Observation，這意味者查詢一組檢驗可能會漏掉不屬於這一組檢驗的個別結果；而是會有一些相關連結（hasMember）參照生命徵象檢驗檢查（例如：呼吸率、心率、血壓等）。這個代碼取代了已被淘汰的代碼 8716-3 - 生命徵象，該代碼在 Argonaut 資訊查詢實作指引（Argonaut Data Query Implementation Guide）中被使用。</td>
<td>-</td>
<td><a href="http://hl7.org/fhir/R4/observation-example-vitals-panel.html">一組生命徵象檢驗檢查範例</a></td>
</tr>
<tr>
<td><a href="http://hl7.org/fhir/R4/resprate.html">呼吸率（Respiratory Rate）</a></td>
<td>9279-1</td>
<td>呼吸率 - /每分鐘</td>
<td>-</td>
<td><a href="http://hl7.org/fhir/R4/observation-example-respiratory-rate.html">呼吸率範例</a></td>
</tr>
<tr>
<td><a href="http://hl7.org/fhir/R4/heartrate.html">心率（Heart rate）</a></td>
<td>8867-4</td>
<td>心率 - 為了更完整地記錄這項生命徵象，**可能可以(MAY)** 選擇性地加入 8887-2 - 心率設備類型（device type）作為一個附加的檢驗檢查數據。</td>
<td>/分鐘</td>
<td><a href="http://hl7.org/fhir/R4/observation-example-heart-rate.html">心率範例（Heart Rate Example）</a></td>
</tr>
<tr>
<td><a href="http://hl7.org/fhir/R4/oxygensat.html">血氧飽和度（Oxygen saturation）</a></td>
<td>2708-6</td>
<td>動脈血氧飽和度 - 此代碼用來取代了原有的代碼 59408-5，即透過脈搏血氧儀測量的動脈血中氧飽和度，59408-5 **可能可以（MAY）** 作為一個額外的檢驗檢查代碼被納入。</td>
<td>%</td>
<td><a href="http://hl7.org/fhir/R4/observation-example-satO2.html">血氧飽和度範例</a></td>
</tr>
<tr>
<td><a href="http://hl7.org/fhir/R4/bodytemp.html">體溫（Body temperature）</a></td>
<td>8310-5</td>
<td>體溫 - 為了進一步補充這項生命徵象的檢驗檢查資料，**可能可以（MAY）** 使用代碼 8327-9 來指明體溫的測量部位（如口腔、額頭、直腸等），並且代碼 8326-1 可以用來描述測量體溫的類型，這些都可以作為附加的檢驗檢查資料。</td>
<td>攝氏、[華氏]</td>
<td><a href="http://hl7.org/fhir/R4/observation-example-body-temperature.html">體溫範例</a></td>
</tr>
<tr>
<td><a href="http://hl7.org/fhir/R4/bodyheight.html">身高（Body height）</a></td>
<td>8302-2</td>
<td>身高 - 為了進一步補充這項生命徵象的檢驗檢查，代碼 8306-3，即躺著時的身體高度（亦即身體長度，這一測量通常用於嬰兒），**可能可以（MAY）** 被作為一個附加的檢驗檢查代碼加入。</td>
<td>cm, [in_i]</td>
<td><a href="http://hl7.org/fhir/R4/observation-example-body-height.html">身高範例</a></td>
</tr>
<tr>
<td><a href="http://hl7.org/fhir/R4/headcircum.html">頭圍（Head circumference）</a></td>
<td>9843-4</td>
<td>頭圍-枕額週長（Head Occipital-frontal circumference）</td>
<td>cm, [in_i]</td>
<td><a href="http://hl7.org/fhir/R4/observation-example-head-circumference.html">頭圍範例</a></td>
</tr>
<tr>
<td><a href="http://hl7.org/fhir/R4/bodyweight.html">體重（Body weight）</a></td>
<td>29463-7</td>
<td>體重 - 為了更全面地記錄這項生命徵象的檢驗檢查，代碼8352-7指的是測量時穿著的衣物，以及代碼 8361-8，指的是體重測量時身體相對於重力的位置（例如：站立、坐著、躺著等），**可能都可以（MAY）** 作為額外的檢驗檢查代碼加入。</td>
<td>g, kg,[lb_av]</td>
<td><a href="http://hl7.org/fhir/R4/observation-example.html">Body Weight Example</a></td>
</tr>
<tr>
<td><a href="StructureDefinition-Observation-bmi-twcore.html">身體質量指數（Body mass index）</a></td>
<td>39156-5</td>
<td>身體質量指數（Body mass index ，BMI）[比率（Ratio）]</td>
<td>kg/m2</td>
<td><a href="Observation-obs-bmi-example.html">BMI 範例</a></td>
</tr>
<tr>
<td><a href="StructureDefinition-Observation-bloodPressure-twcore.html">收縮壓及舒張壓（Blood pressure systolic and diastolic）</a></td>
<td>85354-9</td>
<td>一組血壓檢查包含所有可選的子項目 - 這是一個由多個部分組成的檢查。在 <code>Observation.valueQuantity</code>中它不包含具體的值，但至少包括一個component，即收縮壓和/或舒張壓。為了進一步補充這項生命徵象檢驗檢查，可以使用以下額外的檢驗檢查項目：8478-0 - 表示平均血壓、8357-6 - 表示血壓測量方法、41904-4 - 表示血壓測量部位、8358-4 - 表示血壓計袖帶的大小、以及41901-0 - 表示使用的血壓計的類型，**可能都可以(MAY)** 作為額外的檢驗檢查代碼加入。</td>
<td>-</td>
<td><a href="Observation-obs-bloodPressure-example.html">一組血壓檢查範例</a>, <a href="http://hl7.org/fhir/R4/observation-example-bloodpressure-dar.html">一組血壓檢查範例但缺少舒張壓的值</a></td>
</tr>
<tr>
<td><a href="StructureDefinition-Observation-bloodPressure-twcore.html">收縮壓（Systolic blood pressure）</a></td>
<td>8480-6</td>
<td>用於收縮壓檢查的<code>Observation.component.code</code></td>
<td>mm[Hg]</td>
<td><a href="Observation-obs-bloodPressure-example.html">一組血壓檢查範例</a></td>
</tr>
<tr>
<td><a href="StructureDefinition-Observation-bloodPressure-twcore.html">舒張壓（Diastolic blood pressure）</a></td>
<td>8462-4</td>
<td>用於舒張檢查的<code>Observation.component.code</code></td>
<td>mm[Hg]</td>
<td><a href="Observation-obs-bloodPressure-example.html">一組血壓檢查範例</a></td>
</tr>
</tbody>
</table>

---

// File: input/intro-notes/StructureDefinition-Observation-vitalSigns-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Observation-id.html)** 查詢所有Observation：               
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?_id=[id]`  
    `GET [base]/Observation/[id]`

    例子：  
      (1) GET [base]/Observation?_id=obs-vital  
      (2) GET [base]/Observation/obs-vital


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`category`](SearchParameter-Observation-category.html)** 查詢所有Observation：        
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?category={system|}[code]`

    例子：  
      (1) GET [base]/Observation?category=http://terminology.hl7.org/CodeSystem/observation-category|vital-signs


3. **建議應該（SHOULD）** 支援透過查詢參數 **[`code`](SearchParameter-Observation-clinical-code.html)** 查詢所有Observation：        
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?code={system|}[code]`

    例子：  
      (1) GET [base]/Observation?code=http://loinc.org|39156-5


4. **建議應該（SHOULD）** 支援透過查詢參數 **[`performer`](SearchParameter-Observation-performer.html)** 查詢所有Observation：          
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))  
    `GET [base]/Observation?performer={Type/}[id]`

    例子：  
      (1) GET [base]/Observation?performer=Practitioner/pra-dr-example


5. **建議應該（SHOULD）** 支援透過查詢參數 **[`status`](SearchParameter-Observation-status.html)** 查詢所有Observation：        
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Observation?status=[code]`

    例子：  
      (1) GET [base]/Observation?status=registered


6. **建議應該（SHOULD）** 支援透過查詢參數 **[`subject`](SearchParameter-Observation-subject.html)** 查詢所有Observation：          
    ([如何透過reference查詢](http://hl7.org/fhir/R4/search.html#reference))  
    `GET [base]/Observation?subject={Type/}[id]`

    例子：  
      (1) GET [base]/Observation?subject=Patient/pat-example


7. **建議應該（SHOULD）** 支援透過查詢參數 **[`date`](SearchParameter-Observation-date.html)** 查詢所有Observation：  
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Observation?date={gt|lt|ge|le}[date]`

    例子：  
      (1) GET [base]/Observation?date=gt2022-07-31


### Quick Start 

以下是必要的查詢及讀取操作之說明。

**用戶端(Clients)**

用戶端已連接到伺服器，並透過使用下列指令按檢驗檢查類別查詢取得某位病人的所有生命徵象：

```sql
GET [base]/Observation?patient=[id]&category=vital-signs
```
用戶端已連接到伺服器，並透過使用下列指令按類別代碼和日期範圍查詢取得某位病人的所有生命徵象：
```sql
GET [base]/Observation?patient=[id]&category=vital-signs&date=[date]{&date=[date]}
```
用戶端已連接到伺服器，並透過使用下列指令按一個或多個上述列出的代碼查詢來取得某位病人的任何生命徵象：
```sql
GET [base]/Observation?patient=[id]&code[vital sign LOINC{,LOINC2,LOINC3,...}]
```
用戶端 **應該(SHOULD)** 能夠連接到伺服器，並透過使用下列指令按一個或多個上述列出的代碼和日期範圍查詢取得某位病人的任何生命徵象：

```sql
GET [base]/Observation?patient=[id]&code=[LOINC{,LOINC2...}]vital-signs&date=[date]{&date=[date]}
```

**伺服器端(Server)**

伺服器能夠使用下列指令返回它支援的某位病人的所有生命徵象：
```sql
GET [base]/Observation?patient=[id]&category=vital-signs
```
伺服器能夠使用下列指令按日期範圍查詢返回某位病人的所有生命徵象：

```sql
GET [base]/Observation?patient=[id]&category=vital-signs&date=[date]{&date=[date]}
```
伺服器能夠使用下列指令按一個或多個上述列出的代碼查詢返回某位病人的任何生命徵象：
 
```sql
GET [base]/Observation?patient=[id]&code[vital sign LOINC{,LOINC2,LOINC3,...}]
```
伺服器 **應該(SHOULD)** 能夠使用下列指令按一個或多個上述列出的代碼和日期範圍查詢返回某位病人的任何生命徵象：
```sql
GET [base]/Observation?patient=[id]&code=[LOINC{,LOINC2...}]vital-signs&date=[date]{&date=[date]}
```
伺服器確保每一次API請求都包括一個有效的授權令牌，通過以下方式提供：Authorization: Bearer {server-specific-token-here}。

伺服器透過返回HTTP 401 Unauthorized 回應代碼來拒絕任何未經授權的請求。

##### GET [base]/Observation?patient=[id]&category=vital-signs 

**範例：** 查詢某位病人的所有生命徵象測量數據

[GET [base]/Observation?patient=1186747&category=vital-signs](http://hl7.org/fhir/R4/observation-vitalsigns.html#.html)

*支援：* 必須支援透過 category 代碼作查詢。

*實作注意事項：* 這種查詢是基於生命徵象的 category 代碼進行的，透過這個查詢方法，你可以取得一個包含所有category為「vital-signs」 的 Observation resource的集合，這些resources是針對指定病人的。要了解如何根據參照進行查詢，你可以參考[如何按參照查詢](http://hl7.org/fhir/R4/search.html#reference)，以及要了解如何根據令牌進行查詢，可以參考[如何按令牌查詢](http://hl7.org/fhir/R4/search.html#token)。表中列出的是最基本的生命徵象集合，但是也允許包括更多的生命徵象。

*回應類型：

* (Status 200)：成功的操作(successful operation)
* (Status 400): 無效的參數(invalid parameter)
* (Status 401/4xx): 末授權的請求(unauthorized request)
* (Status 403): 不適當的範圍(insufficient scope)


##### GET [base]/Observation?patient=[id]&code=[vital sign LOINC{,LOINC2,LOINC3,...}] 

**範例：** 查詢某位病人的所有心率檢查：

[GET [base]/Observation?patient=1186747&code=8867-4](http://hl7.org/fhir/R4/observation-vitalsigns.html#.html)

**範別：** 查詢某位病人的所有心率、呼吸率及血壓檢查數據:

[GET [base]/Observation?patient=1186747&code=8867-4,9279-1,85354-9](http://hl7.org/fhir/R4/observation-vitalsigns.html#.html)

*支援：* 必須支援上述表格之生命徵象LOINC代碼查詢

實作注意事項: 

(1) 透過基於生命徵象的LOINC代碼進行查詢，你可以取得一系列專門針對指定病人的、並且列在上述表中的特定生命徵象的 Observation resource 的集合。要了解如何透過參照進行查詢，你可以參考[如何按參照查詢](http://hl7.org/fhir/R4/search.html#reference)，以及要了解如何根據令牌進行查詢，可以參考[如何按令牌查詢](http://hl7.org/fhir/R4/search.html#token)。

(2) 「code」 參數專門用於查詢 <code> Observation.code</code>。舉例來說，當查詢血壓資料時，只有當查詢基於85354-9（代表收縮壓和舒張壓）時，相關resources才會被返回。如果使用<code> Observation.compodnet.code</code>如8480-6（代表收縮壓）或8462-4（代表舒張壓），則不會返回任何resources。如果你希望在一次查詢中同時查詢 <code> Observation.code</code> 和 <code> Observation.component.code</code>，應該使用 「combo-code」作為查詢參數。

*回應類型：

* (Status 200)：成功的操作(successful operation)
* (Status 400): 無效的參數(invalid parameter)
* (Status 401/4xx): 末授權的請求(unauthorized request)
* (Status 403): 不適當的範圍(insufficient scope)

##### GET [base]/Observation?patient=[id]&category=vital-signs&date=[date]{&date=[date]} 

**範例：** 查找2015-01-14之後的所有血壓紀錄

[GET [base]/Observation?patient=555580&code=85354-9&date=ge2015-01-14](http://hl7.org/fhir/R4/observation-vitalsigns.html#.hml)

*支援：* 必須支援透過category 代碼及日期查詢

實作注意事項：基於生命徵象category代碼和日期進行查詢。這將取得一組所有擁有「vital-signs」cateogry、針對特定病人、並且在特定時間段內的 Observation resources的集合。要了解如何透過參照進行查詢，你可以參考[如何按參照查詢](http://hl7.org/fhir/R4/search.html#reference)，以及要了解如何根據令牌進行查詢，可以參考[如何按令牌查詢](http://hl7.org/fhir/R4/search.html#token)。

*回應類型：

* (Status 200)：成功的操作(successful operation)
* (Status 400): 無效的參數(invalid parameter)
* (Status 401/4xx): 末授權的請求(unauthorized request)
* (Status 403): 不適當的範圍(insufficient scope)


---

// File: input/intro-notes/StructureDefinition-Organization-co-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Organization-id.html)** 查詢所有Organization：               
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Organization?_id=[id]`  
    `GET [base]/Organization/[id]`

    例子：  
      (1) GET [base]/Organization?_id=org-co-example  
      (2) GET [base]/Organization/org-co-example


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`identifier`](SearchParameter-Organization-identifier.html)** 查詢所有Organization：          
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Organization?identifier={system|}[code]`

    例子：  
      (1) GET [base]/Organization?identifier=https://gcis.nat.gov.tw|06100268


3. **建議應該（SHOULD）** 支援透過查詢參數 **[`name`](SearchParameter-Organization-name.html)** 查詢所有Organization：             
    ([如何透過string查詢](http://hl7.org/fhir/R4/search.html#string))  
    `GET [base]/Organization?name=[name]`

    例子：  
      (1) GET [base]/Organization?name=莉梓股份有限公司


4. **建議應該（SHOULD）** 支援透過查詢參數 **[`type`](SearchParameter-Organization-type.html)** 查詢所有Organization：           
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Organization?type={system|}[code]`

    例子：   
      (1) GET [base]/Organization?type=http://terminology.hl7.org/CodeSystem/organization-type|bus

---

// File: input/intro-notes/StructureDefinition-Organization-govt-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Organization-id.html)** 查詢所有Organization：               
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Organization?_id=[id]`  
    `GET [base]/Organization/[id]`

    例子：  
      (1) GET [base]/Organization?_id=org-govt-example  
      (2) GET [base]/Organization/org-govt-example


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`identifier`](SearchParameter-Organization-identifier.html)** 查詢所有Organization：           
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Organization?identifier={system|}[code]`

    例子：  
      (1) GET [base]/Organization?identifier=https://oid.nat.gov.tw/|A21000000I


3. **建議應該（SHOULD）** 支援透過查詢參數 **[`name`](SearchParameter-Organization-name.html)** 查詢所有Organization：                
    ([如何透過string查詢](http://hl7.org/fhir/R4/search.html#string))  
    `GET [base]/Organization?name=[name]`

    例子：  
      (1) GET [base]/Organization?name=衛生福利部


4. **建議應該（SHOULD）** 支援透過查詢參數 **[`type`](SearchParameter-Organization-type.html)** 查詢所有Organization：           
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))    
    `GET [base]/Organization?type={system|}[code]`

    例子：   
      (1) GET [base]/Organization?type=http://terminology.hl7.org/CodeSystem/organization-type|govt

---

// File: input/intro-notes/StructureDefinition-Organization-hosp-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Organization-id.html)** 查詢所有Organization：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Organization?_id=[id]`  
    `GET [base]/Organization/[id]`

    例子：  
      (1) GET [base]/Organization?_id=org-hosp-example  
      (2) GET [base]/Organization/org-hosp-example

2. **建議應該（SHOULD）** 支援透過查詢參數 **[`identifier`](SearchParameter-Organization-identifier.html)** 查詢所有Organization：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Organization?identifier={system|}[code]`

    例子：  
      (1) GET [base]/Organization?identifier=https://twcore.mohw.gov.tw/ig/twcore/CodeSystem/organization-identifier-tw|0131060029

3. **建議應該（SHOULD）** 支援透過查詢參數 **[`name`](SearchParameter-Organization-name.html)** 查詢所有Organization：  
    ([如何透過string查詢](http://hl7.org/fhir/R4/search.html#string))  
    `GET [base]/Organization?name=[name]`

    例子：  
      (1) GET [base]/Organization?name=衛生福利部臺北醫院

4. **建議應該（SHOULD）** 支援透過查詢參數 **[`type`](SearchParameter-Organization-type.html)** 查詢所有Organization：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Organization?type={system|}[code]`

    例子：  
      (1) GET [base]/Organization?type=http://terminology.hl7.org/CodeSystem/organization-type|prov

---

// File: input/intro-notes/StructureDefinition-Organization-twcore-intro.md

{% include quickstart-intro.md %}

## Resource Organization - 內容

這是指一群人或機構，他們不論是正式或非正式地被認可，都是為了達成某種共同行動的目的而聚集在一起。這樣的群體包括了各種形式，如公司、學校、企業、部門、社群（區）團體、健康照護服務團隊以及醫療費用支付者（payer）如健保署（全民健保）、僱主（提供員工健康保險福利）或收取保費提供健康保險的機構或公司（insurer）等。

### 範圍與使用

這個 resource 既可以用來在一個共享註冊處登記各種機構的聯絡方式和其他資訊，也可以單純作為支援其他需要參照機構資訊的resource，比如作為一份[文件（docuement）](https://hl7.org/fhir/R4/documents.html)、一則[訊息（message）](https://hl7.org/fhir/R4/messaging.html)或者作為一個[內嵌（contained）](https://hl7.org/fhir/R4/references.html#contained)
 resource 。如果採用註冊處的方式，那麼完全有可能存在多個註冊處，其中每一個都專門處理不同類型或不同層級的機構資訊。

### 界限與關聯

Organization resource 用於描述一群人為了共同的目標而聚集的情形。與之相對，[Group](https://hl7.org/fhir/R4/group.html) 則用來標識一群出於分析目的或需要被採取行動對的人（或動物、設備等），但這群體本身不預期會採取任何行動。

Organization resource 通常會形成一個層級結構，透過使用 part-of 屬性來顯示子Organization與其父Organization之間的聯繫。這種機構的層級結構幫助闡明概念上的結構，而 Location resource 則提供了這種層級結構的實體上表示。

Organization 與 Location 之間的關聯是從 Location 層級結構中的每一點到 Organization 層級結構中適當層級的連接。這些連結不一定都指向最頂層的 Organization。

在構建 Organization 和 Location 的層級結構時，雖然這兩者間可能不容易區分，但為了幫助進行判斷，Location 總被用來記錄服務發生的地點，從而與 Encounter 和 Observation 有所聯繫。這意味著，resource 上的 Organization 屬性可能不反應服務發生的真實位置。

Organization resource 被以下 resources 所參照：
註釋（[Annotation](https://hl7.org/fhir/R4/datatypes.html#Annotation)）、識別碼（[Identifier](https://hl7.org/fhir/R4/datatypes.html#Identifier)）、簽章（[Signature](https://hl7.org/fhir/R4/datatypes.html#Signature)）、使用情境（[UsageContext](https://hl7.org/fhir/R4/metadatatypes.html#UsageContext)）、帳戶（[Account](https://hl7.org/fhir/R4/account.html#Account)）、稽核事件（[AuditEvent](https://hl7.org/fhir/R4/auditevent.html#AuditEvent)）基本（[Basic](https://hl7.org/fhir/R4/basic.html#Basic)）、生物衍生產品（[BiologicallyDerivedProduct](https://hl7.org/fhir/R4/biologicallyderivedproduct.html#BiologicallyDerivedProduct)）、能力聲明（[CapabilityStatement](https://hl7.org/fhir/R4/capabilitystatement.html#CapabilityStatement)）、照護計畫（[CarePlan](https://hl7.org/fhir/R4/careplan.html#CarePlan)）、照護團隊（[CareTeam](https://hl7.org/fhir/R4/careteam.html#CareTeam)）、目錄內的條目（[CatalogEntry](https://hl7.org/fhir/R4/catalogentry.html#CatalogEntry)）、費用項目（[ChargeItem](https://hl7.org/fhir/R4/chargeitem.html#ChargeItem)）、理賠申請（[Claim](https://hl7.org/fhir/R4/claim.html#Claim)）、理賠申請回應（[ClaimResponse](https://hl7.org/fhir/R4/claimresponse.html#ClaimResponse)）、通訊（[Communication](https://hl7.org/fhir/R4/communication.html#Communication)）、通訊請求（[CommunicationRequest](https://hl7.org/fhir/R4/communicationrequest.html#CommunicationRequest)）、臨床文件架構（[Composition](StructureDefinition-Composition-twcore.html)）、同意書（[Consent](https://hl7.org/fhir/R4/consent.html#Consent)）、同意書（[Consent](https://hl7.org/fhir/R4/consent.html#Consent)）、合約（[Contract](https://hl7.org/fhir/R4/contract.html#Contract)）、給付範圍（[Coverage](https://hl7.org/fhir/R4/coverage.html#Coverage)）、給付資格請求（[CoverageEligibilityRequest](https://hl7.org/fhir/R4/coverageeligibilityrequest.html#CoverageEligibilityRequest)）、給付資格回應（[CoverageEligibilityResponse](https://hl7.org/fhir/R4/coverageeligibilityresponse.html#CoverageEligibilityResponse)）、設備（[Device](https://hl7.org/fhir/R4/device.html#Device)）、設備定義（[DeviceDefinition](https://hl7.org/fhir/R4/devicedefinition.html#DeviceDefinition)）、設備請求（[DeviceRequest](https://hl7.org/fhir/R4/devicerequest.html#DeviceRequest)）、診斷報告（[DiagnosticReport](StructureDefinition-DiagnosticReport-twcore.html)）、文件清單（[DocumentManifest](https://hl7.org/fhir/R4/documentmanifest.html#DocumentManifest)）、文件參照（[DocumentReference](StructureDefinition-DocumentReference-twcore.html)）、就醫（[Encounter](StructureDefinition-Encounter-twcore.html)）、端點（[Endpoint](https://hl7.org/fhir/R4/endpoint.html#Endpoint)）、加入或退出保險計畫請求（[EnrollmentRequest](https://hl7.org/fhir/R4/enrollmentrequest.html#EnrollmentRequest)）、 加入或退出保險計畫回應（[EnrollmentResponse](https://hl7.org/fhir/R4/enrollmentresponse.html#EnrollmentResponse)）、照護事件（[EpisodeOfCare](https://hl7.org/fhir/R4/episodeofcare.html#EpisodeOfCare)）、利益說明（[ExplanationOfBenefit](https://hl7.org/fhir/R4/explanationofbenefit.html#ExplanationOfBenefit)）、標記（[Flag](https://hl7.org/fhir/R4/flag.html#Flag)）、目標（[Goal](https://hl7.org/fhir/R4/goal.html#Goal)）、群體（[Group](https://hl7.org/fhir/R4/group.html#Group)）、健康照護服務（[HealthcareService](https://hl7.org/fhir/R4/healthcareservice.html#HealthcareService)）、影像檢查（[ImagingStudy](StructureDefinition-ImagingStudy-twcore.html)）、疫苗接種（[Immunization](https://hl7.org/fhir/R4/immunization.html#Immunization)）、疫苗接種評估（[ImmunizationEvaluation](https://hl7.org/fhir/R4/immunizationevaluation.html#ImmunizationEvaluation)）、疫苗接種建議（[ImmunizationRecommendation](https://hl7.org/fhir/R4/immunizationrecommendation.html#ImmunizationRecommendation)）、保險計畫（[InsurancePlan](https://hl7.org/fhir/R4/insuranceplan.html#InsurancePlan)）、發票或費用清單（[Invoice](https://hl7.org/fhir/R4/invoice.html#Invoice)）、連結（[Linkage](https://hl7.org/fhir/R4/linkage.html#Linkage)）、地點（[Location](StructureDefinition-Location-twcore.html)）、測量報告（[MeasureReport](https://hl7.org/fhir/R4/measurereport.html#MeasureReport)）、多媒體（[Media](StructureDefinition-Media-twcore.html)）、藥品（[Medication](StructureDefinition-Medication-twcore.html)）、配藥或藥品調劑（[MedicationDispense](StructureDefinition-MedicationDispense-twcore.html)）、藥品知識（[MedicationKnowledge](https://hl7.org/fhir/R4/medicationknowledge.html#MedicationKnowledge)）藥品請求（[MedicationRequest](StructureDefinition-MedicationRequest-twcore.html)）、用藥聲明（[MedicationStatement](StructureDefinition-MedicationStatement-twcore.html)）、醫藥產品（[MedicinalProduct](https://hl7.org/fhir/R4/medicinalproduct.html#MedicinalProduct)）、醫藥產品授權（[MedicinalProductAuthorization](https://hl7.org/fhir/R4/medicinalproductauthorization.html#MedicinalProductAuthorization)）、醫藥產品成份（[MedicinalProductIngredient](https://hl7.org/fhir/R4/medicinalproductingredient.html#MedicinalProductIngredient)）、醫藥產品製造（[MedicinalProductManufactured](https://hl7.org/fhir/R4/medicinalproductmanufactured.html#MedicinalProductManufactured)）、醫藥產品包裝（[MedicinalProductPackaged](https://hl7.org/fhir/R4/medicinalproductpackaged.html#MedicinalProductPackaged)）、訊息表頭（[MessageHeader](StructureDefinition-MessageHeader-twcore.html)）、分子序列（[MolecularSequence](https://hl7.org/fhir/R4/molecularsequence.html#MolecularSequence)）、檢驗檢查（[Observation](StructureDefinition-Observation-laboratoryResult-twcore.html)）、機構（Organization）、機構隸屬關係（[OrganizationAffiliation](https://hl7.org/fhir/R4/organizationaffiliation.html#OrganizationAffiliation)）、病人（[Patient](StructureDefinition-Patient-twcore.html)）、付款通知（[PaymentNotice](https://hl7.org/fhir/R4/paymentnotice.html#PaymentNotice)）、付款對帳（[PaymentReconciliation](https://hl7.org/fhir/R4/paymentreconciliation.html#PaymentReconciliation)）、人（[Person](https://hl7.org/fhir/R4/person.html#Person)）、健康照護服務提供者（[Practitioner](StructureDefinition-Practitioner-twcore.html)）、健康照護服務提供者角色（[PractitionerRole](StructureDefinition-PractitionerRole-twcore.html)）、處置（[Procedure](StructureDefinition-Procedure-twcore.html)）、出處（[Provenance](https://hl7.org/fhir/R4/provenance.html#Provenance)）、問卷題目回覆（[QuestionnaireResponse](https://hl7.org/fhir/R4/questionnaireresponse.html#QuestionnaireResponse)）、研究（[ResearchStudy](https://hl7.org/fhir/R4/researchstudy.html#ResearchStudy)）、服務請求（[ServiceRequest](https://hl7.org/fhir/R4/servicerequest.html#ServiceRequest)）、供應品供應品遞交（[SupplyDelivery](https://hl7.org/fhir/R4/supplydelivery.html#SupplyDelivery)）、供應品請求（[SupplyRequest](https://hl7.org/fhir/R4/supplyrequest.html#SupplyRequest)）、任務（[Task](https://hl7.org/fhir/R4/task.html#Task)）及驗證結果（[VerificationResult](https://hl7.org/fhir/R4/verificationresult.html#VerificationResult)）。

---

// File: input/intro-notes/StructureDefinition-Organization-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Organization-id.html)** 查詢所有Organization：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Organization?_id=[id]`  
    `GET [base]/Organization/[id]`

    例子：  
      (1) GET [base]/Organization?_id=org-example  
      (2) GET [base]/Organization/org-example

2. **建議應該（SHOULD）** 支援透過查詢參數 **[`identifier`](SearchParameter-Organization-identifier.html)** 查詢所有Organization：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Organization?identifier={system|}[code]`

    例子：  
      (1) GET [base]/Organization?identifier=http://ns.electronichealth.net.au/id/hi/hpio/1.0|8003621566684455

3. **建議應該（SHOULD）** 支援透過查詢參數 **[`name`](SearchParameter-Organization-name.html)** 查詢所有Organization：  
    ([如何透過string查詢](http://hl7.org/fhir/R4/search.html#string))  
    `GET [base]/Organization?name=[name]`

    例子：  
      (1) GET [base]/Organization?name=Downunder Hospital

4. **建議應該（SHOULD）** 支援透過查詢參數 **[`type`](SearchParameter-Organization-type.html)** 查詢所有Organization：  
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Organization?type={system|}[code]`

    例子：   
      (1) GET [base]/Organization?type=http://terminology.hl7.org/CodeSystem/organization-type|prov

---

// File: input/intro-notes/StructureDefinition-Patient-twcore-intro.md

{% include quickstart-intro.md %}

## Resource Patient - 內容

關於接受照顧或其他健康相關服務的個人或動物的人口統計學和其他行政資訊。

### 範圍與使用

此 resource 覆蓋了參與廣泛健康相關活動的病人和動物的資料，包括：

* 治療活動
* 精神病照護
* 社會服務
* 孕期照護
* 護理和輔助生活
* 飲食服務
* 個人健康和運動資料追蹤

這個 Rresource 涵蓋了關於病人的「誰」訊息：其屬性專注於支援行政、財務和物流程序所必需的人口統計學資料。一般而言，每個提供病人照護的機構都會創建和維護病人紀錄。因此，在多個機構接受照護的病人或動物可能會在多個 Patient resources 中擁有其資料。

並非所有概念都包含在基本 resource 中（如種族race、民族ethnicity、器官捐贈者狀態等），但可能在為特定行政管轄區定義的[profiles](https://hl7.org/fhir/R4/patient-profiles.html)或[standard extensions](https://hl7.org/fhir/R4/patient-extensions.html)中找到。這些欄位在不同的行政管轄區之間差異很大，並且經常對類似概念有不同的名稱和值集，這樣的不一致性使得這些欄位難以直接對應或交換，因為它們之間的相似度不足以進行這樣的操作。

這個 resource 被以下 resources 所參照：
註釋（[Annotation](https://hl7.org/fhir/R4/datatypes.html#Annotation)）、簽章（[Signature](https://hl7.org/fhir/R4/datatypes.html#Signature)）、 帳號（[Account](https://hl7.org/fhir/R4/account.html#Account)）、醫療不良事件（[AdverseEvent](https://hl7.org/fhir/R4/adverseevent.html#AdverseEvent)）、過敏或不耐症（[AllergyIntolerance](StructureDefinition-AllergyIntolerance-twcore.html)）、預約（[Appointment](https://hl7.org/fhir/R4/appointment.html#Appointment)）、預約回應（[AppointmentResponse](https://hl7.org/fhir/R4/appointmentresponse.html#AppointmentResponse)）、稽核事件（[AuditEvent](https://hl7.org/fhir/R4/auditevent.html#AuditEvent)）、基本（[Basic](https://hl7.org/fhir/R4/basic.html#Basic)）、生物衍生產品（[BiologicallyDerivedProduct](https://hl7.org/fhir/R4/biologicallyderivedproduct.html#BiologicallyDerivedProduct)）、身體結構（[BodyStructure](https://hl7.org/fhir/R4/bodystructure.html#BodyStructure)）、照護計畫（[CarePlan](https://hl7.org/fhir/R4/careplan.html#CarePlan)）、照護團隊（[CareTeam](https://hl7.org/fhir/R4/careteam.html#CareTeam)）、費用項目（[ChargeItem](https://hl7.org/fhir/R4/chargeitem.html#ChargeItem)）、理賠申請（[Claim](https://hl7.org/fhir/R4/claim.html#Claim)）、理賠申請回應（[ClaimResponse](https://hl7.org/fhir/R4/claimresponse.html#ClaimResponse)）、臨床臆斷（[ClinicalImpression](https://hl7.org/fhir/R4/clinicalimpression.html#ClinicalImpression)）、通訊（[Communication](https://hl7.org/fhir/R4/communication.html#Communication)）、通訊請求（[CommunicationRequest](https://hl7.org/fhir/R4/communicationrequest.html#CommunicationRequest)）、臨床文件架構（[Composition](StructureDefinition-Composition-twcore.html)）、病情、問題或診斷（[Condition](StructureDefinition-Condition-twcore.html)）、同意書（[Consent](https://hl7.org/fhir/R4/consent.html#Consent)）、合約（[Contract](https://hl7.org/fhir/R4/contract.html#Contract)）、給付範圍（[Coverage](https://hl7.org/fhir/R4/coverage.html#Coverage)）、給付資格請求（[CoverageEligibilityRequest](https://hl7.org/fhir/R4/coverageeligibilityrequest.html#CoverageEligibilityRequest)）、給付資格回應（[CoverageEligibilityResponse](https://hl7.org/fhir/R4/coverageeligibilityresponse.html#CoverageEligibilityResponse)）、檢測到的問題（[DetectedIssue](https://hl7.org/fhir/R4/detectedissue.html#DetectedIssue)）、設備（[Device](https://hl7.org/fhir/R4/device.html#Device)）、設備請求（[DeviceRequest](https://hl7.org/fhir/R4/devicerequest.html#DeviceRequest)）、設備使用聲明（[DeviceUseStatement](https://hl7.org/fhir/R4/deviceusestatement.html#DeviceUseStatement)）、診斷報告（[DiagnosticReport](StructureDefinition-DiagnosticReport-twcore.html)）、文件清單（[DocumentManifest](https://hl7.org/fhir/R4/documentmanifest.html#DocumentManifest)）、文件參照（[DocumentReference](StructureDefinition-DocumentReference-twcore.html)）、就醫事件（[Encounter](StructureDefinition-Encounter-twcore.html)）、加入或退出保險計畫請求（[EnrollmentRequest](https://hl7.org/fhir/R4/enrollmentrequest.html#EnrollmentRequest)）、照護事件（[EpisodeOfCare](https://hl7.org/fhir/R4/episodeofcare.html#EpisodeOfCare)）、利益說明（[ExplanationOfBenefit](https://hl7.org/fhir/R4/explanationofbenefit.html#ExplanationOfBenefit)）、家族成員病史（[FamilyMemberHistory](https://hl7.org/fhir/R4/familymemberhistory.html#FamilyMemberHistory)）、標記（[Flag](https://hl7.org/fhir/R4/flag.html#Flag)）、目標（[Goal](https://hl7.org/fhir/R4/goal.html#Goal)）、群體（[Group](https://hl7.org/fhir/R4/group.html#Group)）、指導回應（[GuidanceResponse](https://hl7.org/fhir/R4/guidanceresponse.html#GuidanceResponse)）、影像檢查（[ImagingStudy](StructureDefinition-ImagingStudy-twcore.html)）、疫苗接種（[Immunization](https://hl7.org/fhir/R4/immunization.html#Immunization)）、疫苗接種評估（[ImmunizationEvaluation](https://hl7.org/fhir/R4/immunizationevaluation.html#ImmunizationEvaluation)）、疫苗接種建議（[ImmunizationRecommendation](https://hl7.org/fhir/R4/immunizationrecommendation.html#ImmunizationRecommendation)）、發票或費用清單（[Invoice](https://hl7.org/fhir/R4/invoice.html#Invoice)）、清單（[List](https://hl7.org/fhir/R4/list.html#List)）、測量報告（[MeasureReport](https://hl7.org/fhir/R4/measurereport.html#MeasureReport)）、多媒體（[Media](StructureDefinition-Media-twcore.html)）、給藥（[MedicationAdministration](https://hl7.org/fhir/R4/medicationadministration.html#MedicationAdministration)）、配藥或藥品調劑（[MedicationDispense](StructureDefinition-MedicationDispense-twcore.html)）、藥品請求（[MedicationRequest](StructureDefinition-MedicationRequest-twcore.html)）、用藥聲明（[MedicationStatement](StructureDefinition-MedicationStatement-twcore.html)）、分子序列（[MolecularSequence](https://hl7.org/fhir/R4/molecularsequence.html#MolecularSequence)）、營養醫令（[NutritionOrder](https://hl7.org/fhir/R4/nutritionorder.html#NutritionOrder)）、檢驗檢查（[Observation](StructureDefinition-Observation-laboratoryResult-twcore.html)）、病人（Patient）、人（[Person](https://hl7.org/fhir/R4/person.html#Person)）、處置（[Procedure](StructureDefinition-Procedure-twcore.html)）、出處（[Provenance](https://hl7.org/fhir/R4/provenance.html#Provenance)）、問卷題目回覆（[QuestionnaireResponse](https://hl7.org/fhir/R4/questionnaireresponse.html#QuestionnaireResponse)）、相關人士（[RelatedPerson](https://hl7.org/fhir/R4/relatedperson.html#RelatedPerson)）、一組請求（[RequestGroup](https://hl7.org/fhir/R4/requestgroup.html#RequestGroup)）、研究對象（[ResearchSubject](https://hl7.org/fhir/R4/researchsubject.html#ResearchSubject)）、風險評估（[RiskAssessment](https://hl7.org/fhir/R4/riskassessment.html#RiskAssessment)）、 時間表（[Schedule](https://hl7.org/fhir/R4/schedule.html#Schedule)）、服務請求（[ServiceRequest](https://hl7.org/fhir/R4/servicerequest.html#ServiceRequest)）、檢體（[Specimen](StructureDefinition-Specimen-twcore.html)）、供應品遞交（[SupplyDelivery](https://hl7.org/fhir/R4/supplydelivery.html#SupplyDelivery)）、供應品請求（[SupplyRequest](https://hl7.org/fhir/R4/supplyrequest.html#SupplyRequest)）、任務（[Task](https://hl7.org/fhir/R4/task.html#Task)）及視力處方（[VisionPrescription](https://hl7.org/fhir/R4/visionprescription.html#VisionPrescription)）。



---

// File: input/intro-notes/StructureDefinition-Patient-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Patient-id.html)** 查詢所有Patient：               
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Patient?_id=[id]`  
    `GET [base]/Patient/[id]`

    例子：  
      (1) GET [base]/Patient?_id=pat-example  
      (2) GET [base]/Patient/pat-example


2. **建議應該（SHOULD）** 支援透過查詢參數 **[`birthdate`](SearchParameter-Patient-birthdate.html)** 查詢所有Patient：    
    ([如何透過date查詢](http://hl7.org/fhir/R4/search.html#date))  
    `GET [base]/Patient?birthdate={gt|lt|ge|le}[date]`

    例子：  
      (1) GET [base]/Patient?birthdate=1990-01-01


3. **建議應該（SHOULD）** 支援透過查詢參數 **[`gender`](SearchParameter-Patient-gender.html)** 查詢所有Patient：                 
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))  
    `GET [base]/Patient?gender=[code]`

    例子：  
      (1) GET [base]/Patient?gender=female


4. **建議應該（SHOULD）** 支援透過查詢參數 **[`identifier`](SearchParameter-Patient-identifier.html)** 查詢所有Patient：              
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Patient?identifier={system|}[code]`

    例子：  
      (1) GET [base]/Patient?identifier=http://www.moi.gov.tw|A123456789


5. **建議應該（SHOULD）** 支援透過查詢參數 **[`name`](SearchParameter-Patient-name.html)** 查詢所有Patient，該查詢可能與 HumanName 中的任何字串匹配，包括完整的中文姓名(text)、英文姓(family)、英文名(given)、姓名前面的頭銜(prefix)、姓名後面的稱謂(suffix)：                 
    ([如何透過string查詢](http://hl7.org/fhir/R4/search.html#string))  
    `GET [base]/Patient?name=[name]`

    例子：  
      (1) GET [base]/Patient?name=陳加玲


#### Constraints 限制

<table class="grid rwd-table" style="width: 1280px;">
    <thead>
        <tr>
        <th>id</th>
        <th>Level</th>
        <th>位置</th>
        <th>說明</th>
        <th><a href="https://hl7.org/fhir/R4/fhirpath.html">運算式(Expression)</a></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td><strong>pat-1</strong></td>
        <td><a href="https://hl7.org/fhir/R4/conformance-rules.html#rule">Rule</a></td>
        <td>Patient.contact</td>
        <td>必須（SHALL）至少包含聯絡的細節或參照至一個機構</td>
        <td>name.exists() or telecom.exists() or address.exists() or organization.exists()</td>
        </tr>
    </tbody>
</table>


注意事項：

- <code>multipleBirth</code>資料項目可以是布林值來指示病人是否為多胞胎，或者是整數來顯示病人在多胞胎中的出生順序。
- 病人紀錄只有兩種狀態：使用中（<code>active</code>=`true`）和停用（<code>active</code> =`false`）。正常使用的紀錄標記為<code>active</code> =`true`。如果紀錄因重複、錯誤或不再需要而被創建，則可設為停用（<code>active</code> =`false`），這樣的紀錄無需與其他紀錄建立關聯即可獨立標記為停用。
- <code>link</code> 資料項目用來證明兩個或更多的Patient resources是關於同一位實際病人的。更多細節將在後文討論。
- 每位病人的溝通方式中只能選擇一種作為偏好語言（<code>communication.preferred</code>=`true`）。
- 病人的聯繫資訊中可以包含一個<code>contact.organization</code>資料項目，主要用於監護人或業務相關聯繫。這個屬性提供的是專門聯繫相關機構的資訊，與常規針對個人的聯繫方式不同。

### 病人識別碼 (identifier) 與Patient resource的識別碼 (id)

病人記錄的[Resource Id](https://hl7.org/fhir/R4/resource.html#id)永遠不變。因此，病歷號(MRN)或單位記錄(UR)這類變動的識別碼不應用作Resource Id，因它們可能隨機構而異。MRN或UR應記錄在<code>Patient.identifier</code>清單中，方便管理。這對於隨時間合併病人資料系統的機構特別有用，有助於識別重複紀錄和易於追蹤、更新病人資訊。

當需要自動化生成病人紀錄的MRN時，可以在Patient Resource 中預留一個未賦值的MRN type的identifier。隨後，系統根據內部規則自動分配一個或多個新的identifier。


 **案例**：李小姐在A醫院有一個MRN是「A123」。後來，由於個人因素，她希望轉院至B醫院並將她在A醫院的病歷也轉到B醫院。在B醫院，李小姐的新病歷需要創建，需要一個新的MRN時，她在A醫院的MRN 「A123」不會直接用作她在B醫院的identifier，B醫院系統根據內部規則自動產生一個新的MRN，比如「B456」，填入至空白identifier。

此外，為保持在A醫院的病歷連接，B醫院在李小姐的病人資料中可能也會保存標明來自A醫院的MRN之identifier，以保持病歷的完整性和連續性。

### 連結病人
<code>link </code> 資料項目用於聲明Patient resources 的資訊指的是同一位病人，它用於支援以下情境，即存在多筆病人紀錄的情況：

#### 重複的病人紀錄 

管理病人註冊是一個常見的挑戰，約有2%的註冊過程中會出現錯誤，大多數情況下是因為重複的紀錄。有時候，這些重複的紀錄會在累積過多資料之前被快速發現並撤銷。但在其他情況下，可能已經積累了大量資料。為了處理這一問題，我們可以使用<code>link.type</code>為 `replaced-by` 的<code>link</code>，這樣的連結會將包含它的紀錄標記為重複的，並指向一個應該被用作替代的紀錄。需要注意的是，指向的紀錄本身也可能是因錯誤而被創建的，並可能進一步指向另一個Patient resource。在這種情況下，替換了另一紀錄的紀錄將使用<code>link.type</code>為 `replaces` 的<code>link</code>指回被替換的舊紀錄，從而建立一個清晰的連結鏈。

**案例**：林先生在醫院系統中有兩個紀錄，一個紀錄的MRN是X666，另一個是X000。後來發現，這兩個紀錄實際上是同一位病人的重複紀錄。為了解決這個問題，醫院選擇保留MRN為X666的紀錄，並將MRN為X000的紀錄標記為`replaced-by`，指向MRN為X666的紀錄。這樣，MRN為123的紀錄就成了主要使用的紀錄，而MRN為X000的紀錄則被清楚地標記為重複且不再使用。

#### Patient 索引中心的病人紀錄

當病人紀錄被納入作為病人索引的系統時，該系統不僅保留了病人資訊摘要，還列出了一個或多個擁有該病人更完整或官方紀錄的伺服器清單。在這種情況下，我們使用<code>link.type</code>為 `refer` 的<code>link</code>來標明這種關聯。重要的是，連接的紀錄可能包含矛盾的資訊，而被參考的紀錄並不指回參考它的紀錄，保持了資訊的獨立性。


案例：李小姐在台北市和宜蘭縣的兩家醫院都有病人紀錄，假設衛生福利部(國家級)有一套健康資訊系統作為病人索引使用，收集了指向這兩家醫院紀錄的連結，當李小姐到桃園市的醫院就診時，桃園市醫院的醫生可以通過這個索引找到她在台北市和宜蘭縣的完整醫療資訊。這個過程是透過設置<code>link.type</code>為 `refer` 的link實現的，使得李小姐的健康資訊可以跨醫院共享，但各自紀錄的來源保持獨立。


#### 分散式病人紀錄 

在分散式架構中，多個系統分別儲存著同一病人的獨立病人紀錄。這些紀錄並不被看作是重複的，而是呈現了病人資料的分散式且可能重疊的視角。每份這樣的紀錄可能關於不同的事件或健康問題或者由不同的機構維護，而且並不需要一份紀錄比另一份更完整或具權威性。在這種情況下，可以使用<code>link.type</code>為`refer` 指向其他病人紀錄，而且並不要求這樣的連結是雙向的。

#### Patient.link.type 完整代碼定義

<table class="grid rwd-table">
    <thead>
        <tr>
        <th style="width: 80px;">Code</th>
        <th>名稱(Display)</th>
        <th>定義</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>replaced-by</td>
        <td>由…所取代</td>
        <td>內含此link的Patient resource不得再使用，此連結若指向另一個Patient resource，則必須使用該Patient resource來取代內含此連結Patient resource。</td>
        </tr>
        <tr>
        <td>replaces</td>
        <td>取代</td>
        <td>包含此連結的Patient resource是當前使用中的病人紀錄。此連結指向已併入該 resource 的不使用 Patient resource，應查閱該 resource 以獲取更多參考資訊。</td>
        </tr>
        <tr>
        <td>refer</td>
        <td>參照</td>
        <td>包含此連結的 Patient resource 正在使用且有效，但不被視為Patient resource的主要來源。此連結指向另一個Patient resource，查詢其他病人資訊時應查閱該Patient resource。</td>
        </tr>
        <tr>
        <td>seealso</td>
        <td>參見</td>
        <td>包含此連結的Patient resource正在使用且有效，但指向另一個已知包含相同人資料的Patient resource。此 resource 中的資料可能與另一Patient resource中的資訊重疊或矛盾。此連結並不表示相關 Rresource 的相對重要性，兩者應被視為同等有效。</td>
        </tr>
    </tbody>
</table>



### Patient vs. Person vs. Patient.link vs. Linkage 

Person resource 看起來與 Patient resource 非常相似，而且它的使用方式與使用 <code>Patient.link</code> 功能非常類似。Person resource 的目的是能夠將相信是同一個人的 resources 實例連結在一起，這包括其他 resource 類型，如 RelatedPerson、Practitioner、Patient、甚至其他 Person resources；**但是 <code>Patient.link</code> 僅用於 Patient resources。**

Person resource 的主要用途是能夠支援不必然具有健康照護情境的個人註冊，並能夠識別和量化這是同一人的信心等級，這可能包括一個允許個人存取和管理與自身資訊的網站，比如可管理個人健康記錄、預約和其他個人服務的網站，其中人員資訊的維護者是實際的本人。系統可以使用 Person 紀錄來交叉檢查紀錄的一部分資訊或另一套系統的值的變更；例如：當搬家時，消費者在他的 Person resource 更新他的聯絡電話和地址，然後病人管理系統能夠看到這些資料已更改，並提示機構跟進與 Person resource 連結的Patient resources，以確認病人是否希望更新個人資訊，或者是否病人不再需要原有的照護或健康相關醫療服務，因為他們已從該地區搬走。

[Linkage](https://hl7.org/fhir/R4/linkage.html) resource 和 <code>Patient.link</code> 資料項目在概念上執行 FHIR 中類似的功能，兩者都提供了指向同一個人的多個 resources 實例之間連結的主張。當 Patient resource 被連結/合併時，則需要有一個內部指示，可透過使用 <code>Patient.link</code> 資料項目表明參照其他紀錄時應該考慮另一個 Patient resource。另一種作法是使用Linkage resource 來合併或連結記錄。
但在應用或查詢病人完整紀錄時，要特別留意這兩種設計的差異。前者只要查找Patient即可找到相關Patient resources的連結，但後者可能需要額外的查詢步驟來找出所有相關的Patient resources，以確保沒有遺漏任何病人關聯資訊(例如以下Linage resource案例中的查詢語法二)。

**但Linkage resource中若有應記錄卻因未發現或作業疏失而未記錄的連結，這可能意味著相關臨床紀錄未被發現及未被呈現，這可能會影響病人安全，這也是相對於 Patient.link，Linkage resource 較不適合存放病人關聯資訊的理由。另一個相對建議使用Patient.link來為病人資訊建立關聯的理由是Patient resource已是一規範(Normative，未來不會再異動)，而Linkage resource的成熟度在FHIR第4版及第5版都為0，表示此resource的設計於未來仍可能有異動。**


**Patient.link 案例**：(假設所有機構病歷都在同一台FHIR Server)
林先生在A醫院有一個病人紀錄（Patient ID: 001），在B醫院也有一個病人紀錄（Patient ID: 002）。使用 Patient.link，我們可以在A醫院的紀錄中添加一個連接指向B醫院的紀錄，反之亦然，從而表明這兩個紀錄實際上是同一個人的不同紀錄。
```json
{
  "resourceType": "Patient",
  "id": "001",
  "link": [
    {
      "other": {
        "reference": "Patient/002"
      },
      "type": "refer"
    }
  ]
}
```
*若要取得病人 001 資料，查詢語法如下，將會回傳上面的這份Patient resource。實作者可從中得知與其相關的病人 002 之連結。*
```sql
GET /Patient/001
```
**Linkage resource 案例**：如果林先生的病人紀錄（在A醫院和B醫院）需要與他的治療計劃紀錄或診斷報告紀錄關聯起來，可以使用 Linkage resource 來建立這些關聯。
```json
{
  "resourceType": "Linkage",
  "item": [
    {
      "type": "source",
      "resource": {
        "reference": "Patient/001"
      }
    },
    {
      "type": "alternate",
      "resource": {
        "reference": "Patient/002"
      }
    },
    {
      "type": "alternate",
      "resource": {
        "reference": "CarePlan/123"
      }
    }
  ]
}
```
*若要取得病人 001 及其相關資料之連結，查詢語法一如下，將會回傳上面的這份Linkage resource。實作者可從中得知與其相關的病人資訊 002 之連結 及照護計畫 123 之連結。*
```sql
GET /Linkage?item=Patient/001
```
```json
{
  "resourceType": "Bundle",
  "type": "searchset",
  "entry": [
    {
      "resource": {
        "resourceType": "Linkage",
        "id": "linkage1",
        "item": [
          {
            "type": "source",
            "resource": {
              "reference": "Patient/001"
            }
          },
          {
            "type": "alternate",
            "resource": {
              "reference": "Patient/002"
            }
          }
        ]
      }
    }
  ]
}
```

*查詢語法二：僅限在FHIR Server有提供_revinclude查詢參數功能時才有辦法進行以下查詢。這個查詢將返回病人 001 的資料，以及所有透過 Linkage resources 與之相關聯的其他resources 的連結。有別於查詢語法一，查詢語法二便於在單一操作中獲取到病人紀錄及其所有相關 resources 的連結。*
```sql
GET /Patient/001?_revinclude=Linkage:item
```
```json
{
  "resourceType": "Bundle",
  "type": "searchset",
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "id": "001",        
        "name": [
          {
            "text": "林某某"            
          }
        ],
        "gender": "female"
      }
    },
    {
      "resource": {
        "resourceType": "Linkage",
        "id": "linkage1",
        "item": [
          {
            "type": "source",
            "resource": {
              "reference": "Patient/001"
            }
          },
          {
            "type": "alternate",
            "resource": {
              "reference": "Patient/002"
            }
          }
        ]
      }
    }
  ]
}
```

### Patient.contact vs. RelatedPerson 

在 Patient resource 中，contact 資料項目被專門設計來儲存聯絡人的細節。因此，這些資訊總是伴隨著 Patient resource 一同被傳遞，而且這些聯絡人資訊並不能直接被其他 resources 作為參照的目標。這就意味著，如果在其他 resources 中（像是 CarePlan.participant、Encounter.participant、DocumentReference.author、Appointment.participant）需要參照到病人的相關人士，那麼我們就必須要使用 RelatedPerson resource 來實現這一點。

此外，這些紀錄並不是用來記錄病人的主要照護提供者的資訊。相對地，這種類型的資訊應該被儲存在 Patient.generalPractitioner 資料項目中。這樣的安排確保了資訊的清晰劃分，使得病人的聯絡人資訊和照護提供者資訊各自存放在最合適的位置，從而方便了資訊的查詢和使用。

### Patient Gender 和 Sex 

很多系統和機構只用一個單一的值來嘗試代表病人的性別和性別認同的所有面向。然而，在記錄和交換有關性別和性別認同的資訊時，存在許多需要考慮的點。接下來列出的是在健康照護場景中相關的各種社會和生物屬性，以及如何傳達每一種資訊。

* **行政性別（Administrative Gender）** - 為了與那些只使用一個通用屬性的系統進行互操作，<code>[Patient.gender](https://hl7.org/fhir/R4/patient-definitions.html#Patient.gender)</code>  資料項目表示了一種行政性別。這是指病人在行政和記錄保存上被認定的性別。這個資料項目常常被用於病人匹配算法中。

   除了這個行政性別外，還可以表示其他種類的性別或性別屬性：
   
* **臨床性別（Clinical Sex）** - 關於病人某個生物特質的可測試檢驗檢查。臨床性別有幾種不同的類型，包括染色體/遺傳/染色體、性腺、管的(ductal)、表型等。臨床性別檢驗檢查應該使用 [Observation](https://hl7.org/fhir/R4/observation.html)，並且用LOINC和/或SNOMED的適當臨床代碼來具體說明。

* **臨床性別認同（Clinical Gender）** - 通常作為社交史紀錄的一部分收集的關於病人的檢驗檢查，並且用 [Observation](https://hl7.org/fhir/R4/observation.html)（[範例](https://hl7.org/fhir/R4/observation-example-clinical-gender.html)）和例如LOINC代碼 76691-5 來表示。臨床性別認同檢驗檢查可以提供歷史和隱私保護，這是 <code>genderIdentity</code> 擴充資料項目(extension)做不到的。

* **性別認同（Gender Identity）** - 病人表達他們自認為的性別。這可能影響病人希望如何被照顧者和其他人稱呼。可以使用標準的 <code>[genderIdentity](https://hl7.org/fhir/R4/extension-patient-genderidentity.html)</code> 擴充資料項目來傳遞這個屬性。當性別認同是公開知道的時候，使用這個擴充資料項目是恰當的。

* **出生時指定的性別（Sex assigned at Birth）** - 出生登記上紀錄的性別。有些國家允許登記時選擇如「未決定( not yet determined )」、「未知( unknown )」或「無法區分( undifferentiated )」等選項，而有些則不允許。有些國家還允許更改出生登記上的資訊。美國為這個特性定義了一個特定的擴充資料項目。或者，如果你想用檢驗檢查來表示這個概念，你可以使用LOINC代碼 [76689-9](http://loinc.org/76689-9)。

* **法律性別（Legal Sex）** - 地區和國家通常使用單一的法律性別值來分類公民。病人的法律性別可能因地區和國家的不同而有所不同。一個病人在不同的司法管轄區可能同時有多個法律性別值。如果<code>Patient.gender</code>行政屬性不足以傳達法律性別，則應使用特定領域的擴充資料項目。

對於獸醫使用，動物擴充資料項目還包括了指示絕育資訊的 <code>genderStatus</code>。

### 母新與新生兒的關係 

表示母親與新生兒之間關係有幾種方式，這取決於記錄的時間和記錄的目的：

* 如果目的是表達家庭關係和因此而產生的法律責任，比如用於行政目的，那麼應該使用 Patient/RelatedPerson 結構。這個結構隨著時間的推移是保持一致的，意味著無論何時查看，表示的關係和責任都是相同的。
* 為了連接母親和她的寶寶在產科就醫的情況，這涉及行政和計費目的，可以使用 <code>[Encounter.partof](https://hl7.org/fhir/R4/encounter-definitions.html#Encounter.partOf)</code> 資料項目。
* 如果需要收集關於病人家庭成員的資訊，而且這些資訊可能與病人的醫療狀況相關時，則應使用 [FamilyMemberHistory](https://hl7.org/fhir/R4/familymemberhistory.html)  resource。

在產科就醫期間，母親的 Patient 和 Encounter resources 會存在。寶寶出生後，將創建新的 Patient、Encounter 和 RelatedPerson（針對母親）紀錄，應該使用寶寶的Encounter.partOf 資料項目參照母親的Encounter。Patient/RelatedPerson 結構也應該為持續使用而創建，如此範例所示：

```xml
<Patient>
	<id value="child"/>
	<!-- The details of the child -->
</Patient>
<RelatedPerson>
	<id value="rp-mom"/>
	<patient>
		<reference value="Patient/child"/>
	</patient>
</RelatedPerson>
<Patient>
	<id value="pat-mom"/>
	<!-- The details of the mom -->
	<link>
		<other value="rp-mom"/>
		<type value="see-also"/>
	</link>
</Patient>
<Encounter>
	<id value="mom-enc"/>
	<status value="in-progress"/>
	<class value="inpatient"/>
	<patient>
		<reference value="Patient/mom"/>
	</patient>
</Encounter>
<Encounter>
	<id value="child-enc"/>
	<status value="in-progress"/>
	<class value="inpatient"/>
	<patient>
		<reference value="Patient/child"/>
	</patient>
	<partOf>
		<reference value="Encounter/mom-enc"/>
	</partOf>
</Encounter>
```

### 合併紀錄

這份規範並沒有指定合併功能：如果發現多個病人紀錄是重複的，它們可以如上所述被連結在一起。這些連結僅僅表達了紀錄之間的關係，並且在替換連結的情況下，指出了一個「主要(master)」紀錄。這份規範並不強制要求 FHIR 伺服器在發現這樣的連結時，將資訊從一個紀錄遷移到另一個紀錄。請注意：

- 健康資訊管理者可能會稱這個過程為「合併(merging)」，但在紀錄層面上，它通常被實作為「連結(linking)」。
- 即便這不是一項強制要求，伺服器也被允許實作合併/紀錄遷移(record migration)功能。

### 使用MPI匹配病人 

主要病人索引（Master Patient Index，MPI）是一種服務，它在有多個病人資料庫存在的情境下，用來管理病人的識別工作。健康照護的應用程式和中介軟體使用MPI在這些資料庫之間尋找匹配的病人記錄，並處理新發現的病人資料。MPI是特別設計的應用程式，通常會根據醫療機構所服務的病人類型進行大量客製化。MPI的運作範圍可以是區域性的，也可以是國家級的。

當需要MPI來尋找一個病人的匹配時，用戶端會執行一個叫做病人的 [$match](https://hl7.org/fhir/R4/patient-operation-match.html) 操作。這個操作處理一個包含病人完整或部分資料的Parameters resource，以及一些控制參數，提供給MPI 的  Patient resource 不需要完全符合驗證標準（如必填欄位或規則），因為這份資料不會被儲存，但它必須是一個能被解析的實例。接著，MPI會使用這份resource的資料項目作為輸入，並透過其內部演算法來處理這些資訊，以判定最適合的病人匹配。MPI可能不會利用所有提供的資料項目，並可能會忽略一些資訊。

如果需要定義 MPI 演算法所需的特定參數，可以設定一個特定的Profile，包括必須提供的欄位和規則。

```sql
POST [base]/Patient/$match
     [包括指定 content-type 為 XML 或 JSON 的一些表頭（headers）]
     [帶有內含 Patitne resoruce 的參數主體]
```
當你使用 MPI 的 $match 功能來尋找病人時，它會回傳一系列的病人紀錄。這些紀錄會按照匹配的可能性高低來排序，從最可能的匹配到最不可能的匹配。如果沒有找到任何匹配的病人，MPI **必須（SHALL）** 回傳一個沒有任何記錄的空結果集，這時不會報錯，但它可能會附加一個提供額外建議的 [操作結果(operation outcome)](https://hl7.org/fhir/R4/operationoutcome.html)。每筆病人記錄都會被打上一個從 0 到 1 的分數，這裡的 1 代表最確定的匹配。此外，還會有一個名為 [「match-grade」](https://hl7.org/fhir/R4/extension-match-grade.html) 的 [擴充的資料項目(extension)](https://hl7.org/fhir/R4/extensibility.html)，用來表示 MPI 對這次匹配的品質。

```xml
 <entry> 
   <resource>
     <Patient>
       <!-- 病人細節-->
     </Patient>
    </resource>
    <search>
      <extension url="http://hl7.org/fhir/StructureDefinition/match-grade">
        <valueCode value="probable"/>
      </extension>
      <score value="0.80"/>
    </search>
  </entry> 
```

這個 match-grade 擴充資料項目可填入[以下幾種代碼](https://hl7.org/fhir/R4/valueset-match-grade.html)其中一種：

<table class="grid rwd-table">
  <thead>
    <tr>
    <th style="width: 80px;">代碼</th>
    <th>定義</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>certain</td>
    <td>這筆紀錄滿足了自動判定為完全匹配所需的匹配條件。</td>
    </tr>
    <tr>
    <td>probable</td>
    <td>這筆紀錄非常接近於匹配，但並不能確定完全匹配。因此，在確認為匹配之前，可能需要更進一步的檢查（比如，需要人來進行評估）。</td>
    </tr>
    <tr>
    <td>possible</td>
    <td>這筆紀錄可能是一個匹配的紀錄。在將其用作匹配之前，<strong>應該(SHOULD)</strong> 進行額外的審查（例如：由人工進行）。</td>
    </tr>
    <tr>
    <td>certainly-not</td>
    <td>這筆紀錄確定不是我們要找的匹配對象。一般來說，不符合條件的紀錄我們是不會看到的，但有些特殊情況下，那些之前可能被認為是匹配，或者很有可能被當作匹配考慮的紀錄，匹配系統會特別標記為不匹配。</td>
    </tr>
  </tbody>
</table>


使用主要病人索引（MPI）查詢而不是一般查詢目的，主要是因為MPI查詢專門設計來精確找到一位特定的病人，目的是為了在記錄資訊時減少因選錯病人而產生的錯誤。如果查詢條件不夠充分，比如只提供了部分姓氏，MPI通常不會返回任何結果。這和一般查詢不同，一般查詢可用於查找一系列病人，例如查找住在同一地區或處於同一年齡段的病人群，這對於進行人口分析很有幫助。

MPI $match 操作的[官方定義](https://hl7.org/fhir/R4/operation-patient-match.html)已經發布。

### Veterinary Care

獸醫照護完全適用於 FHIR 標準，Patient resource 同樣可以用來記錄病人為動作的資訊。為此，FHIR 提供了一個專門的 [patient-animal 擴充的資料項目](https://hl7.org/fhir/R4/extension-patient-animal.html)，這個擴充資料項目允許記錄動物的種類、品種和性別狀況等細節。但是，這個擴充資料項目並不打算包含獸醫照護中所有重要的屬性，對於更專業的領域，比如實驗室檢驗、動物園照護或畜牧業照護，我們預計會用到更多相關領域的擴充資料項目。

至於獸醫的客戶，也就是動物的「主人(owner)」，則透過 RelatedPerson resource 來表示。



---

// File: input/intro-notes/StructureDefinition-Practitioner-twcore-intro.md

{% include quickstart-intro.md %}

## Resource Practitioner - 內容
直接或間接地參與健康照護服務提供的人員

### 範圍與使用
Practitioner 涵蓋了所有參與健康照護過程和與健康照護相關的服務的人員，作為他們正式職責的一部分，而這個 Resource 被用來對這些人員進行的活動和責任進行歸屬。Practitioners 包括（但不限於）：

* 醫生、牙醫、藥劑師
* 醫師助理、護士、書記
* 助產士、營養師、治療師、驗光師、護理人員
* 醫檢師、實驗室科學家、義肢技術人員、放射技師
* 社工、專業家庭照護提供者、官方志工
* 病人掛號行政櫃台人員
* 負責合併或分離病人紀錄的 IT 人員
* 服務動物（例如：被分配到病房的狗，能夠在病人中檢測出癌症）

### 界限與關聯
這個 Resource **必須不用（SHALL NOT）** 於那些沒有正式責任的參與者，比如照顧朋友、親戚或鄰居的個人。這些人可以登記為病人的聯絡人。如果正在執行某些動作或被另一個 resource 參照，請使用 [RelatedPerson](https://hl7.org/fhir/R4/relatedperson.html) resource。

Practitioner 和 RelatedPerson 之間的主要區別基於：

* 如果這個人員或動物是代表照護提供機構對多位病人進行操作的（Practitioner），或者
* 如果這個人員或動物並未與該機構關聯，而是特別為 RelatedPerson 的病人分配任務（RelatedPerson）。


一個標準的擴充資料項目動物的物種 （[<code>animalSpecies</code>](https://hl7.org/fhir/R4/extension-practitioner-animalspecies.html) ）可以用來指出服務動物的物種。

[PractitionerRole](https://hl7.org/fhir/R4/practitionerrole.html) resource 提供了健康照護服務提供者被批准執行的角色的細節，這些角色對於哪些機構（在哪些位置，以及可選的是什麼服務）。

practitioner也經常根據角色獨立地被分組進入照護團隊（[CareTeams](https://hl7.org/fhir/R4/careteam.html)），在這裡，CareTeam 定義了他們在團隊內履行的具體角色，並且可能會或可能不會為 practitioner 創建實際的PractitionerRole resources （並且在care team的情境下，還涉及practitioner代表的機構）。

### 背景
Practitioner 在同一個或甚至不同的機構中擔任不同的角色。根據不同的行政區域和習慣，可能需要針對每個這樣的角色維持一個專門的 Practitioner Resource，或者有一個單獨的 Practitioner 同時具備多個角色。這個角色可能只限於一定的時間範圍，在這段時間之後，對這個角色的授權就會結束。值得注意的是，代表的機構不必然是 Practitioner 的（直接）雇主。

Practitioner resource 被以下 resources 所參照：註釋（[Annotation](https://hl7.org/fhir/R4/datatypes.html#Annotation)）、簽章（[Signature](https://hl7.org/fhir/R4/datatypes.html#Signature)）、帳戶（[Account](https://hl7.org/fhir/R4/account.html#Account)）、醫療不良事件（[AdverseEvent](https://hl7.org/fhir/R4/adverseevent.html#AdverseEvent)）、過敏或不耐症（[AllergyIntolerance](StructureDefinition-AllergyIntolerance-twcore.html)）、預約（[Appointment](https://hl7.org/fhir/R4/appointment.html#Appointment)）、預約回應（[AppointmentResponse](https://hl7.org/fhir/R4/appointmentresponse.html#AppointmentResponse)）、稽核事件（[AuditEvent](https://hl7.org/fhir/R4/auditevent.html#AuditEvent)）、基本（[Basic](https://hl7.org/fhir/R4/basic.html#Basic)）、生物衍生產品（[BiologicallyDerivedProduct](https://hl7.org/fhir/R4/biologicallyderivedproduct.html#BiologicallyDerivedProduct)）、照護計畫（[CarePlan](https://hl7.org/fhir/R4/careplan.html#CarePlan)）、照護團隊（[CareTeam](https://hl7.org/fhir/R4/careteam.html#CareTeam)）、目錄內的條目（[CatalogEntry](https://hl7.org/fhir/R4/catalogentry.html#CatalogEntry)）、費用項目（[ChargeItem](https://hl7.org/fhir/R4/chargeitem.html#ChargeItem)）、理賠申請（[Claim](https://hl7.org/fhir/R4/claim.html#Claim)）、理賠申請回應（[ClaimResponse](https://hl7.org/fhir/R4/claimresponse.html#ClaimResponse)）、臨床臆斷（[ClinicalImpression](https://hl7.org/fhir/R4/clinicalimpression.html#ClinicalImpression)）、通訊（[Communication](https://hl7.org/fhir/R4/communication.html#Communication)）、通訊請求（[CommunicationRequest](https://hl7.org/fhir/R4/communicationrequest.html#CommunicationRequest)）、臨床文件架構（[Composition](StructureDefinition-Composition-twcore.html)）、病情、問題或診斷（[Condition](StructureDefinition-Condition-twcore.html)）、同意書（[Consent](https://hl7.org/fhir/R4/consent.html#Consent)）、合約（[Contract](https://hl7.org/fhir/R4/contract.html#Contract)）、給付資格請求（[CoverageEligibilityRequest](https://hl7.org/fhir/R4/coverageeligibilityrequest.html#CoverageEligibilityRequest)）、給付資格回應（[CoverageEligibilityResponse](https://hl7.org/fhir/R4/coverageeligibilityresponse.html#CoverageEligibilityResponse)）、檢測到的問題（[DetectedIssue](https://hl7.org/fhir/R4/detectedissue.html#DetectedIssue)）、設備請求（[DeviceRequest](https://hl7.org/fhir/R4/devicerequest.html#DeviceRequest)）、設備使用聲明（[DeviceUseStatement](https://hl7.org/fhir/R4/deviceusestatement.html#DeviceUseStatement)）、診斷報告（[DiagnosticReport](StructureDefinition-DiagnosticReport-twcore.html)）、文件清單（[DocumentManifest](https://hl7.org/fhir/R4/documentmanifest.html#DocumentManifest)）、文件參照（[DocumentReference](StructureDefinition-DocumentReference-twcore.html)）、就醫事件（[Encounter](StructureDefinition-Encounter-twcore.html)）、加入或退出保險計畫請求（[EnrollmentRequest](https://hl7.org/fhir/R4/enrollmentrequest.html#EnrollmentRequest)）、加入或退出保險計畫回應（[EnrollmentResponse](https://hl7.org/fhir/R4/enrollmentresponse.html#EnrollmentResponse)）、照護事件（[EpisodeOfCare](https://hl7.org/fhir/R4/episodeofcare.html#EpisodeOfCare)）、利益說明（[ExplanationOfBenefit](https://hl7.org/fhir/R4/explanationofbenefit.html#ExplanationOfBenefit)）、標記（[Flag](https://hl7.org/fhir/R4/flag.html#Flag)）、目的（[Goal](https://hl7.org/fhir/R4/goal.html#Goal)）、群體（[Group](https://hl7.org/fhir/R4/group.html#Group)）、影像檢查（[ImagingStudy](StructureDefinition-ImagingStudy-twcore.html)）、疫苗接種（[Immunization](https://hl7.org/fhir/R4/immunization.html#Immunization)）、發票或費用清單（[Invoice](https://hl7.org/fhir/R4/invoice.html#Invoice)）、連結（[Linkage](https://hl7.org/fhir/R4/linkage.html#Linkage)）、清單（[List](https://hl7.org/fhir/R4/list.html#List)）、測量報告（[MeasureReport](https://hl7.org/fhir/R4/measurereport.html#MeasureReport)）、多媒體（[Media](StructureDefinition-Media-twcore.html)）、給藥（[MedicationAdministration](https://hl7.org/fhir/R4/medicationadministration.html#MedicationAdministration)）、配藥或調劑藥品（[MedicationDispense](https://hl7.org/fhir/R4/medicationdispense.html#MedicationDispense)）、藥品請求（[MedicationRequest](https://hl7.org/fhir/R4/medicationrequest.html#MedicationRequest)）、用藥聲明（[MedicationStatement](StructureDefinition-MedicationStatement-twcore.html)）、訊息表頭（[MessageHeader](StructureDefinition-MessageHeader-twcore.html)）、營養醫令（[NutritionOrder](https://hl7.org/fhir/R4/nutritionorder.html#NutritionOrder)）、檢驗檢查（[Observation](StructureDefinition-Observation-laboratoryResult-twcore.html)）、病人（[Patient](StructureDefinition-Patient-twcore.html)）、付款通知（[PaymentNotice](https://hl7.org/fhir/R4/paymentnotice.html#PaymentNotice)）、付款對帳（[PaymentReconciliation](https://hl7.org/fhir/R4/paymentreconciliation.html#PaymentReconciliation)）、人（[Person](https://hl7.org/fhir/R4/person.html#Person)）、 健康照護服務提供者角色 （[PractitionerRole](StructureDefinition-PractitionerRole-twcore.html)）、 處置（[Procedure](StructureDefinition-Procedure-twcore.html)）、出處（[Provenance](https://hl7.org/fhir/R4/provenance.html#Provenance)）、問卷題目回覆（[QuestionnaireResponse](https://hl7.org/fhir/R4/questionnaireresponse.html#QuestionnaireResponse)）、一組請求（[RequestGroup](https://hl7.org/fhir/R4/requestgroup.html#RequestGroup)）、研究（[ResearchStudy](https://hl7.org/fhir/R4/researchstudy.html#ResearchStudy)）、風險評估（[RiskAssessment](https://hl7.org/fhir/R4/riskassessment.html#RiskAssessment)）、時間表（[Schedule](https://hl7.org/fhir/R4/schedule.html#Schedule)）、服務請求（[ServiceRequest](https://hl7.org/fhir/R4/servicerequest.html#ServiceRequest)）、檢體（[Specimen](StructureDefinition-Specimen-twcore.html)）、供應品遞交（[SupplyDelivery](https://hl7.org/fhir/R4/supplydelivery.html#SupplyDelivery)）、供應品請求（[SupplyRequest](https://hl7.org/fhir/R4/supplyrequest.html#SupplyRequest)）、任務（[Task](https://hl7.org/fhir/R4/task.html#Task)）、驗證結果（[VerificationResult](https://hl7.org/fhir/R4/verificationresult.html#VerificationResult)）及視力處方（[VisionPrescription](https://hl7.org/fhir/R4/visionprescription.html#VisionPrescription)）


---

// File: input/intro-notes/StructureDefinition-Practitioner-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-Practitioner-id.html)** 查詢所有Practitioner：                
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Practitioner?_id=[id]`  
    `GET [base]/Practitioner/[id]`

    例子：  
      (1) GET [base]/Practitioner?_id=pra-dr-example  
      (2) GET [base]/Practitioner/pra-dr-example
	  
2. **建議應該（SHOULD）** 支援透過查詢參數 **[`identifier`](SearchParameter-Practitioner-identifier.html)** 查詢所有Practitioner：                
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/Practitioner?identifier={system|}[code]`

    例子：  
      (1) GET [base]/Practitioner?identifier=https://www.tph.mohw.gov.tw|KP00017


3. **建議應該（SHOULD）** 支援透過查詢參數 **[`name`](SearchParameter-Practitioner-name.html)** 查詢所有Practitioner，該查詢可能與 HumanName 中的任何字串匹配，包括完整的中文姓名(text)、英文姓(family)、英文名(given)、姓名前面的頭銜(prefix)、姓名後面的稱謂(suffix)：                   
    ([如何透過string查詢](http://hl7.org/fhir/R4/search.html#string))  
    `GET [base]/Practitioner?name=[name]`

    例子：
      (1) GET [base]/Practitioner?name=王依昇

---

// File: input/intro-notes/StructureDefinition-PractitionerRole-twcore-intro.md

{% include quickstart-intro.md %}

## Resource PractitionerRole - 內容

這是指健康照護服務提供者在某個機構中，一段時間內可以擔任的不同角色、在不同地點提供的服務類型、專業領域等。

### 範圍與使用

健康照護服務提供者角色（PractitionerRole）主要用來記錄健康照護服務提供者（Practitioner）能夠在機構內提供的服務種類和服務地點。

如果需要，可以在PractitionerRole的其他實例中重複記錄角色、專長領域、地點的聯絡資訊和HealthcareService（健康照護服務）的詳情。有的系統會為一個地點記錄一系列服務，有的則是記錄一項服務和它可提供的所有地點。這兩種記錄方式都是可以的。
如果所有健康照護服務或地點的可用性、聯絡方式或其他細節不相同，那麼就應該為每種不同的實例創建一個單獨的PractitionerRole resource。

### 界限與關聯

從Practitioner resource 中獲得的資格認證，雖然不直接代表他們的工作角色，但在機構分配Practitioner到特定角色時可能會考慮到這些資格認證。這些資格認證可能包含一些重要資訊（如有效期限），在某些情況下需要追蹤，以確保Practitioner持續符合特定角色的資格。

照護團隊 （[CareTeam](https://hl7.org/fhir/R4/careteam.html)） resource 也經常用來詳細說明分配給Practitioner的角色，但通常這些角色涉及更細致的照護範疇，並且往往是在特定的 [Patient](StructureDefinition-Patient-twcore.html)背景或功能角色（例如：危機規劃團隊）內。相比之下，PractitionerRole則更廣泛地用於涵蓋 Practitioner 被分配工作的所有地點，以及與那個角色相關的具體細節—如特定的聯絡號碼或電子服務端點 （<code>endpoint</code>）。

### 背景

Practitioner 有時候會在同一家或不同家機構中擔任多種不同的工作角色。根據不同地區的法律規定和習慣，有時我們需要為每個角色分別建立一個專門的Pratitioner檔案，或者我們可以只建立一個檔案來記錄這個人的多重角色。這些角色有可能只在一段時間內有效，過了這段時間之後，這個人可能就不再有權擔任這個角色。要注意的是：這裡提到的機構不一定直接雇用了這位Practitioner。

這個 resource 被很多其他的 FHIR resources 參照，像是[簽章（Signature）](https://hl7.org/fhir/R4/datatypes.html#Signature)、[帳戶（Account）](https://hl7.org/fhir/R4/account.html#Account)、[醫療不良事件（AdverseEvent）](https://hl7.org/fhir/R4/adverseevent.html#AdverseEvent)、[過敏或不耐症（AllergyIntolerance）](StructureDefinition-AllergyIntolerance-twcore.html)、[預約（Appointment）](https://hl7.org/fhir/R4/appointment.html#Appointment)等，它們覆蓋了從病人照護到行政管理等多個健康照護領域的活動。


---

// File: input/intro-notes/StructureDefinition-PractitionerRole-twcore-notes.md

{% include quickstart-note.md %}

#### 建議應該支援以下查詢參數：

1. **建議應該（SHOULD）** 支援透過查詢參數 **[`_id`](SearchParameter-PractitionerRole-id.html)** 查詢所有PractitionerRole：                
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/PractitionerRole?_id=[id]`  
    `GET [base]/PractitionerRole/[id]`

    例子：  
      (1) GET [base]/PractitionerRole?_id=praro-dr-example  
      (2) GET [base]/PractitionerRole/praro-dr-example
	  
2. **建議應該（SHOULD）** 支援透過查詢參數 **[`identifier`](SearchParameter-PractitionerRole-identifier.html)** 查詢所有PractitionerRole：             
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/PractitionerRole?identifier={system|}[code]`

    例子：  
      (1) GET [base]/PractitionerRole?identifier=https://www.tph.mohw.gov.tw|KP00017


3. **建議應該（SHOULD）** 支援透過查詢參數 **[`specialty`](SearchParameter-PractitionerRole-specialty.html)** 查詢所有PractitionerRole：             
    ([如何透過token查詢](http://hl7.org/fhir/R4/search.html#token))   
    `GET [base]/PractitionerRole?specialty={system|}[code]`

    例子：
      (1) GET [base]/PractitionerRole?specialty=418960008

---

