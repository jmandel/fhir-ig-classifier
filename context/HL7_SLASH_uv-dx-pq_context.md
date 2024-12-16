File: repos/HL7_SLASH_uv-dx-pq/input/images/README.md

# uv-dx-pq
This folder contains .png and other files to be used in the dx-PQ IG.

Source files for these images should be contained in the images-source folder of this repository.


---

File: repos/HL7_SLASH_uv-dx-pq/input/images-source/README.md

# uv-dx-pq
Files contained in this folder are the sources for images contained in the images folder of this repository.

---

File: repos/HL7_SLASH_uv-dx-pq/input/pagecontent/anal_proc_rend_p.md

The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.P.5 Control of Drug Product, subsection 3.2.P.5.2 Analytical Procedures.
<html>
<body>
<div class="divBody">
<p>
						This is the same data as in the example files here in <a href="Bundle-bundle-analytical-procedure-pq-ex1-prod.xml.html">xml</a> and in <a href="Bundle-bundle-analytical-procedure-pq-ex1-prod.json.html">json</a>, presented for easier viewing.
						Hovering on words below will show the corresponding sections of the underlying data.
					</p>
</div>
<div class="greyable">
<div class="divBody">
<div style="position:relative" class="summaryUnit">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-analytical-procedure-pq-ex1-prod)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-analytical-procedure-pq 

<Bundle>
    <id value=&quot;bundle-analytical-procedure-pq-ex1-prod&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-analytical-procedure-pq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <entry>
        <fullUrl value=&quot;urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
        <resource>
            <PlanDefinition>
                <id value=&quot;analyticalProcedure&quot;/>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
                <title value=&quot;Analytical Procedure&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;analytical-procedure&quot;/>
                        <display value=&quot;Analytical Procedure&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </subjectReference>
                <action>
                    <title value=&quot;Preparation and Analysis of Drug Product Samples&quot;/>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/diluent&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Diluent&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;diluent&quot;/>
                                <display value=&quot;Diluent&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <title value=&quot;Sample Preparation&quot;/>
                        <action>
                            <title value=&quot;Instructions&quot;/>
                            <description value=&quot;Transfer 5 tablets into a volumetric flask. Add a portion of the diluent and shake on mechanical shaker until tablets are completely disintegrated. Dilute to volume with diluent. Do not exceed 2 mg/mL in the initial dilution. Filter or centrifuge.&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;Sample Analysis&quot;/>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                        </action>
                    </action>
                </action>
            </PlanDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8035565f81&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;diluent&quot;/>
                <name>
                    <name value=&quot;0.05 % trifluoroacetic acid (TFA) in 50:50 acetonitrile: water (v/v)&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8035565f82&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;resultingMaterial&quot;/>
                <name>
                    <name value=&quot;Stelbat in Diluent (approximately 0.36 mg/mL)&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;SampleAnalysis&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                <title value=&quot;Sample Analysis&quot;/>
                <status value=&quot;active&quot;/>
                <description value=&quot;Number of Injections: 1 of each preparation&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>
                </code>
                <specimen>
                    <reference value=&quot;SpecimenDefinition/specimendefinition&quot;/>
                </specimen>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/Assay&quot;/>
                </hasMember>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/Identity&quot;/>
                </hasMember>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d045e&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Assay&quot;/>
                <text>
                    <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/showText&quot;>
                        <valueBoolean value=&quot;true&quot;/>
                    </extension>
                    <status value=&quot;additional&quot;/>
                    <div xmlns=&quot;http://www.w3.org/1999/xhtml&quot;>
                        <div style=&quot;font-family: 'Times New Roman', Times, serif;&quot;>
                            <p>Determine the amount of Stelbat in each sample replicate as follows:</p>
                            <p>
                                <img alt=&quot;formula&quot; width=&quot;203&quot; height=&quot;34&quot; style=&quot;display: block; margin-left: auto; margin-right: auto;&quot; src=&quot;#imageResource&quot;/>
                            </p>
                            <p>
                                <span>Where:</span>
                            </p>
                            <p>
                                <span> A
                                
                                    <sub>SPL</sub>       =  Area of Stelbat in the sample 
                            
                                </span>
                            </p>
                            <p>
                                <span>ANSR   =  Average normalized standard response factor of standard injections</span>
                            </p>
                            <p>
                                <span>DF     =  Overall sample dilution factor</span>
                            </p>
                            <p>
                                <span>N      = Number of tablets in sample preparation</span>
                            </p>
                            <p>
                                <span>Determine the % label claim of the sample as follows:</span>
                            </p>
                            <p>
                                <img alt=&quot;formula&quot; width=&quot;220&quot; height=&quot;34&quot; style=&quot;display: block; margin-left: auto; margin-right: auto;&quot; src=&quot;#imageResource2&quot;/>
                            </p>
                            <p>
                                <span>Where:</span>
                            </p>
                            <p>
                                <span>LC       =          Label claim (mg/tablet) of tested sample</span>
                            </p>
                        </div>
                    </div>
                </text>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d045e&quot;/>
                <title value=&quot;Assay (w/w%)&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay (w/w%)&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;The %RSD between the two assay results must be ≤ 1.5%&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:12e7e672-40a6-4036-3c2f-b8ba6a7d046e&quot;/>
        <resource>
            <Binary>
                <id value=&quot;imageResource&quot;/>
                <!-- example format -->
                <contentType value=&quot;image/png&quot;/>
                <!-- data is base 64 encoded, actual bytes of the image png file -->
                <data value=&quot;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&quot;/>
            </Binary>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:12e7e672-40a6-4036-3c3f-b8ba6a7d046e&quot;/>
        <resource>
            <Binary>
                <id value=&quot;imageResource2&quot;/>
                <!-- example format -->
                <contentType value=&quot;image/png&quot;/>
                <!-- data is base 64 encoded, actual bytes of the image png file -->
                <data value=&quot;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&quot;/>
            </Binary>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d046e&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Identity&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d046e&quot;/>
                <title value=&quot;Identity&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identity&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;1. The retention time ratio of the sample peak to standard peak is within 0.95 to 1.05.&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;2. The UV spectrum of the sample peak compares favorably to the UV spectrum of the standard peak from 210 nm to 400 nm.&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:3a0cde98-4a73-6d67-1dfc-08e3fc9646a2&quot;/>
        <resource>
            <SpecimenDefinition>
                <id value=&quot;specimendefinition&quot;/>
                <url value=&quot;http://example-server.com/fhir/SpecimenDefinition/3a0cde98-4a73-6d67-1dfc-08e3fc9646a2&quot;/>
                <status value=&quot;active&quot;/>
                <description value=&quot;Number of Preparations: 2 (only 1 is required for identity)&quot;/>
                <typeTested>
                    <preference value=&quot;preferred&quot;/>
                    <handling>
                        <maxDuration>
                            <value value=&quot;4&quot;/>
                            <unit value=&quot;days&quot;/>
                        </maxDuration>
                        <instruction value=&quot;at ambient or refrigerated conditions protected from light (may be extended with supporting data)&quot;/>
                    </handling>
                </typeTested>
            </SpecimenDefinition>
        </resource>
    </entry>
    <!-- MedicinalProductDefinition - the main resource in any product scenario -->
    <entry>
        <fullUrl value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/>
        <resource>
            <MedicinalProductDefinition>
                <id value=&quot;medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                <combinedPharmaceuticalDoseForm>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;10225000&quot;/>
                        <display value=&quot;Gastro-resistant tablet&quot;/>
                    </coding>
                </combinedPharmaceuticalDoseForm>
                <route>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;20053000&quot;/>
                        <display value=&quot;Oral use&quot;/>
                    </coding>
                </route>
                <name>
                    <productName value=&quot;Stelbat Tablets, 20mg&quot;/>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example&quot;/>
                            <code value=&quot;Proprietary&quot;/>
                            <display value=&quot;Proprietary&quot;/>
                        </coding>
                    </type>
                    <part>
                        <part value=&quot;20mg&quot;/>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/medicinal-product-name-part-type&quot;/>
                                <code value=&quot;StrengthPart&quot;/>
                                <display value=&quot;Strength part&quot;/>
                            </coding>
                        </type>
                    </part>
                </name>
            </MedicinalProductDefinition>
        </resource>
    </entry>" id="Bundle-bundle-analytical-procedure-pq-ex1-prod">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-analytical-procedure-pq-ex1-prod</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-analytical-procedure-pq&quot;>">Profile: </span><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-analytical-procedure-pq&quot;>">http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-analytical-procedure-pq</span></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: </span><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>"><span>collection</span></span></div>
</div>
</div>
<div>
<div class="indent mpd summaryUnit"><a class="plainLink"><span class="bold" title="MedicinalProductDefinition (id: medicinalproductdefinition-drug-product-dxpq-ex1)(fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5)

<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <id value=&quot;medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                <combinedPharmaceuticalDoseForm>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;10225000&quot;/>
                        <display value=&quot;Gastro-resistant tablet&quot;/>
                    </coding>
                </combinedPharmaceuticalDoseForm>
                <route>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;20053000&quot;/>
                        <display value=&quot;Oral use&quot;/>
                    </coding>
                </route>
                <name>
                    <productName value=&quot;Stelbat Tablets, 20mg&quot;/>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example&quot;/>
                            <code value=&quot;Proprietary&quot;/>
                            <display value=&quot;Proprietary&quot;/>
                        </coding>
                    </type>
                    <part>
                        <part value=&quot;20mg&quot;/>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/medicinal-product-name-part-type&quot;/>
                                <code value=&quot;StrengthPart&quot;/>
                                <display value=&quot;Strength part&quot;/>
                            </coding>
                        </type>
                    </part>
                </name>" id="MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1">Product</span></a><span class="summaryHiddenOff"><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medicinalproductdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medicinalproductdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medicinalproductdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: medicinalproductdefinition-drug-product-dxpq-ex1</div>
<div class="debugOff"> fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5</div></span><div class="summaryHiddenOff"></div><span class="summaryShowsOff"><b> - </b></span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <name>
                    <productName value=&quot;Stelbat Tablets, 20mg&quot;/>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example&quot;/>
                            <code value=&quot;Proprietary&quot;/>
                            <display value=&quot;Proprietary&quot;/>
                        </coding>
                    </type>
                    <part>
                        <part value=&quot;20mg&quot;/>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/medicinal-product-name-part-type&quot;/>
                                <code value=&quot;StrengthPart&quot;/>
                                <display value=&quot;Strength part&quot;/>
                            </coding>
                        </type>
                    </part>" class="bold"><span class="summaryHiddenOff">Name: </span><span>Stelbat Tablets, 20mg</span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <name>
                    ...
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example&quot;/>
                            <code value=&quot;Proprietary&quot;/>
                            <display value=&quot;Proprietary&quot;/>
                        </coding>">Name type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <name>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example&quot;/>
                            <code value=&quot;Proprietary&quot;/>
                            <display value=&quot;Proprietary&quot;/>">Proprietary<span class="greyOff"> [Proprietary]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example)</span></span></div>
<div title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <name>
                    ...
                    <part>
                        <part value=&quot;20mg&quot;/>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/medicinal-product-name-part-type&quot;/>
                                <code value=&quot;StrengthPart&quot;/>
                                <display value=&quot;Strength part&quot;/>
                            </coding>
                        </type>"><span>Strength name part: </span><span>20mg</span></div>
</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <route>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;20053000&quot;/>
                        <display value=&quot;Oral use&quot;/>
                    </coding>">Route of Administration: </span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <route>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;20053000&quot;/>
                        <display value=&quot;Oral use&quot;/>">Oral use<span class="greyOff"> [20053000]</span><span class="greyOff"> (http://standardterms.edqm.eu)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <combinedPharmaceuticalDoseForm>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;10225000&quot;/>
                        <display value=&quot;Gastro-resistant tablet&quot;/>
                    </coding>">Dose Form (combination of all parts): </span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <combinedPharmaceuticalDoseForm>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;10225000&quot;/>
                        <display value=&quot;Gastro-resistant tablet&quot;/>">Gastro-resistant tablet<span class="greyOff"> [10225000]</span><span class="greyOff"> (http://standardterms.edqm.eu)</span></span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="indent plan summaryUnit"><sup class="rotate-left" title="arrow indicates that this PlanDefinition resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via PlanDefinition.subjectReference">↸</sup><span class="debugOff">arrow indicates that this PlanDefinition resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via PlanDefinition.subjectReference<br></span><a class="plainLink"><span class="bold" title="PlanDefinition (id: analyticalProcedure)(fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)

<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;analyticalProcedure&quot;/>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
                <title value=&quot;Analytical Procedure&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;analytical-procedure&quot;/>
                        <display value=&quot;Analytical Procedure&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </subjectReference>
                <action>
                    <title value=&quot;Preparation and Analysis of Drug Product Samples&quot;/>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/diluent&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Diluent&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;diluent&quot;/>
                                <display value=&quot;Diluent&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <title value=&quot;Sample Preparation&quot;/>
                        <action>
                            <title value=&quot;Instructions&quot;/>
                            <description value=&quot;Transfer 5 tablets into a volumetric flask. Add a portion of the diluent and shake on mechanical shaker until tablets are completely disintegrated. Dilute to volume with diluent. Do not exceed 2 mg/mL in the initial dilution. Filter or centrifuge.&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;Sample Analysis&quot;/>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                        </action>
                    </action>
                </action>" id="PlanDefinition-analyticalProcedure">Plan</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/plandefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/plandefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/plandefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: analyticalProcedure</div>
<div class="debugOff"> fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <title value=&quot;Analytical Procedure&quot;>">Title: </span><span>Analytical Procedure</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;analytical-procedure&quot;/>
                        <display value=&quot;Analytical Procedure&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>">Workflow Definition<span class="greyOff"> [workflow-definition]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/plan-definition-type)</span></span>, <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <type>
                    ...
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;analytical-procedure&quot;/>
                        <display value=&quot;Analytical Procedure&quot;/>">Analytical Procedure<span class="greyOff"> [analytical-procedure]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type)</span></span></div>
<div class="summaryHiddenOff">
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <action>
                    <title value=&quot;Preparation and Analysis of Drug Product Samples&quot;/>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/diluent&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Diluent&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;diluent&quot;/>
                                <display value=&quot;Diluent&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <title value=&quot;Sample Preparation&quot;/>
                        <action>
                            <title value=&quot;Instructions&quot;/>
                            <description value=&quot;Transfer 5 tablets into a volumetric flask. Add a portion of the diluent and shake on mechanical shaker until tablets are completely disintegrated. Dilute to volume with diluent. Do not exceed 2 mg/mL in the initial dilution. Filter or centrifuge.&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;Sample Analysis&quot;/>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                        </action>
                    </action>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Preparation and Analysis of Drug Product Samples&quot;>"> - Preparation and Analysis of Drug Product Samples</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Preparation and Analysis of Drug Product Samples&quot;>">Title: </span><span>Preparation and Analysis of Drug Product Samples</span></div>
<div class="indent planl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/diluent&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Diluent&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;diluent&quot;/>
                                <display value=&quot;Diluent&quot;/>
                            </coding>
                        </role>">Participant</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        ...
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;diluent&quot;/>
                                <display value=&quot;Diluent&quot;/>
                            </coding>">Role: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        ...
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;diluent&quot;/>
                                <display value=&quot;Diluent&quot;/>
                            </coding>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;diluent&quot;/>
                                <display value=&quot;Diluent&quot;/>">Diluent<span class="greyOff"> [diluent]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/manufacturing-participant-role)</span></span></span></div>
<div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <typeReference>
                            ...
                            <display value=&quot;Diluent&quot;>">Display: Diluent</span></div>
</div>
<div class="indent sbd summaryUnit">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: analyticalProcedure fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: diluent)(fullUrl: urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8035565f81)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;diluent&quot;/>
                <name>
                    <name value=&quot;0.05 % trifluoroacetic acid (TFA) in 50:50 acetonitrile: water (v/v)&quot;/>
                </name>" id="SubstanceDefinition-diluent">Substance</span></a><span class="summaryShowsOff"><b> - 0.05 % trifluoroacetic acid (TFA) in 50:50 acetonitrile: water (v/v)</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: diluent</div>
<div class="debugOff"> fullUrl: urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8035565f81</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;0.05 % trifluoroacetic acid (TFA) in 50:50 acetonitrile: water (v/v)&quot;>">Name: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;0.05 % trifluoroacetic acid (TFA) in 50:50 acetonitrile: water (v/v)&quot;>"><span>0.05 % trifluoroacetic acid (TFA) in 50:50 acetonitrile: water (v/v)</span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
</div>
<div class="indent planl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>">Participant</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        ...
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>">Role: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        ...
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>">Resulting Material<span class="greyOff"> [ResultingMaterial]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/manufacturing-participant-role)</span></span></span></div>
<div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <typeReference>
                            ...
                            <display value=&quot;Resulting material&quot;>">Display: Resulting material</span></div>
</div>
<div class="indent sbd summaryUnit">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: analyticalProcedure fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: resultingMaterial)(fullUrl: urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8035565f82)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;resultingMaterial&quot;/>
                <name>
                    <name value=&quot;Stelbat in Diluent (approximately 0.36 mg/mL)&quot;/>
                </name>" id="SubstanceDefinition-resultingMaterial">Substance</span></a><span class="summaryShowsOff"><b> - Stelbat in Diluent (approximately 0.36 mg/mL)</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: resultingMaterial</div>
<div class="debugOff"> fullUrl: urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8035565f82</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbat in Diluent (approximately 0.36 mg/mL)&quot;>">Name: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbat in Diluent (approximately 0.36 mg/mL)&quot;>"><span>Stelbat in Diluent (approximately 0.36 mg/mL)</span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <title value=&quot;Sample Preparation&quot;/>
                        <action>
                            <title value=&quot;Instructions&quot;/>
                            <description value=&quot;Transfer 5 tablets into a volumetric flask. Add a portion of the diluent and shake on mechanical shaker until tablets are completely disintegrated. Dilute to volume with diluent. Do not exceed 2 mg/mL in the initial dilution. Filter or centrifuge.&quot;/>
                        </action>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Sample Preparation&quot;>"> - Sample Preparation</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Sample Preparation&quot;>">Title: </span><span>Sample Preparation</span></div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <action>
                            <title value=&quot;Instructions&quot;/>
                            <description value=&quot;Transfer 5 tablets into a volumetric flask. Add a portion of the diluent and shake on mechanical shaker until tablets are completely disintegrated. Dilute to volume with diluent. Do not exceed 2 mg/mL in the initial dilution. Filter or centrifuge.&quot;/>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <title value=&quot;Instructions&quot;>"> - Instructions</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <title value=&quot;Instructions&quot;>">Title: </span><span>Instructions</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            ...
                            <description value=&quot;Transfer 5 tablets into a volumetric flask. Add a portion of the diluent and shake on mechanical shaker until tablets are completely disintegrated. Dilute to volume with diluent. Do not exceed 2 mg/mL in the initial dilution. Filter or centrifuge.&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            ...
                            <description value=&quot;Transfer 5 tablets into a volumetric flask. Add a portion of the diluent and shake on mechanical shaker until tablets are completely disintegrated. Dilute to volume with diluent. Do not exceed 2 mg/mL in the initial dilution. Filter or centrifuge.&quot;>">Transfer 5 tablets into a volumetric flask. Add a portion of the diluent and shake on mechanical shaker until tablets are completely disintegrated. Dilute to volume with diluent. Do not exceed 2 mg/mL in the initial dilution. Filter or centrifuge.</span></div>
</div>
</div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <title value=&quot;Sample Analysis&quot;/>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                        </action>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Sample Analysis&quot;>"> - Sample Analysis</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Sample Analysis&quot;>">Title: </span><span>Sample Analysis</span></div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: analyticalProcedure fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: SampleAnalysis)(fullUrl: urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046e)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;SampleAnalysis&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                <title value=&quot;Sample Analysis&quot;/>
                <status value=&quot;active&quot;/>
                <description value=&quot;Number of Injections: 1 of each preparation&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>
                </code>
                <specimen>
                    <reference value=&quot;SpecimenDefinition/specimendefinition&quot;/>
                </specimen>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/Assay&quot;/>
                </hasMember>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/Identity&quot;/>
                </hasMember>" id="ObservationDefinition-SampleAnalysis">Observation Definition<span class="summaryShowsOff"> - <div style="display: inline"> (<span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>">Data Absent Reason: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>"><span>unsupported</span></span>)</div></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: SampleAnalysis</div>
<div class="debugOff"> fullUrl: urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046e</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Sample Analysis&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Sample Analysis&quot;>">Sample Analysis</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>"><div style="display: inline"> (<span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>">Data Absent Reason: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>"><span>unsupported</span></span>)</div></span></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <description value=&quot;Number of Injections: 1 of each preparation&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <description value=&quot;Number of Injections: 1 of each preparation&quot;>">Number of Injections: 1 of each preparation</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <specimen>
                    <reference value=&quot;SpecimenDefinition/specimendefinition&quot;/>">Specimen</span><div class="indent org summaryUnit"><a class="plainLink"><span class="bold" title="SpecimenDefinition (id: specimendefinition)(fullUrl: urn:uuid:3a0cde98-4a73-6d67-1dfc-08e3fc9646a2)

<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                <id value=&quot;specimendefinition&quot;/>
                <url value=&quot;http://example-server.com/fhir/SpecimenDefinition/3a0cde98-4a73-6d67-1dfc-08e3fc9646a2&quot;/>
                <status value=&quot;active&quot;/>
                <description value=&quot;Number of Preparations: 2 (only 1 is required for identity)&quot;/>
                <typeTested>
                    <preference value=&quot;preferred&quot;/>
                    <handling>
                        <maxDuration>
                            <value value=&quot;4&quot;/>
                            <unit value=&quot;days&quot;/>
                        </maxDuration>
                        <instruction value=&quot;at ambient or refrigerated conditions protected from light (may be extended with supporting data)&quot;/>
                    </handling>
                </typeTested>" id="SpecimenDefinition-specimendefinition">Specimen Definition</span><div></div></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/specimendefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/specimendefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/specimendefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: specimendefinition</div><div class="debugOff"> fullUrl: urn:uuid:3a0cde98-4a73-6d67-1dfc-08e3fc9646a2</div><div class="debugOff">url (canonical): http://example-server.com/fhir/SpecimenDefinition/3a0cde98-4a73-6d67-1dfc-08e3fc9646a2</div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                ...
                <description value=&quot;Number of Preparations: 2 (only 1 is required for identity)&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                ...
                <description value=&quot;Number of Preparations: 2 (only 1 is required for identity)&quot;>">Number of Preparations: 2 (only 1 is required for identity)</span></div><div class="summaryHiddenOff"><div class="indent org2">
				Type
				<div class="indent org3"><div><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                <typeTested>
                    <preference value=&quot;preferred&quot;>">Preference: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                <typeTested>
                    <preference value=&quot;preferred&quot;>">preferred</span></div>
						Handling
						<div class="indent org3"><div><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                <typeTested>
                    <handling>
                        <maxDuration>
                            <value value=&quot;4&quot;/>
                            <unit value=&quot;days&quot;/>">Max Duration: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                <typeTested>
                    <handling>
                        <maxDuration>
                            <value value=&quot;4&quot;/>
                            <unit value=&quot;days&quot;/>">4 days</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                <typeTested>
                    <handling>
                        ...
                        <instruction value=&quot;at ambient or refrigerated conditions protected from light (may be extended with supporting data)&quot;>">Instruction: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                <typeTested>
                    <handling>
                        ...
                        <instruction value=&quot;at ambient or refrigerated conditions protected from light (may be extended with supporting data)&quot;>">at ambient or refrigerated conditions protected from light (may be extended with supporting data)</span></div></div></div></div></div></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <hasMember>
                    <reference value=&quot;ObservationDefinition/Assay&quot;/>
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <hasMember>
                    <reference value=&quot;ObservationDefinition/Identity&quot;/>">Member</span><div class="indent summaryUnit obsDef"><div class="debugOff"><span>Found a parent (ObservationDefinition/hasMember, id: SampleAnalysis fullUrl: urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046eurl (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Assay)(fullUrl: urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d045e)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Assay&quot;/>
                <text>
                    <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/showText&quot;>
                        <valueBoolean value=&quot;true&quot;/>
                    </extension>
                    <status value=&quot;additional&quot;/>
                    <div xmlns=&quot;http://www.w3.org/1999/xhtml&quot;>
                        <div style=&quot;font-family: 'Times New Roman', Times, serif;&quot;>
                            <p>Determine the amount of Stelbat in each sample replicate as follows:</p>
                            <p>
                                <img alt=&quot;formula&quot; width=&quot;203&quot; height=&quot;34&quot; style=&quot;display: block; margin-left: auto; margin-right: auto;&quot; src=&quot;#imageResource&quot;/>
                            </p>
                            <p>
                                <span>Where:</span>
                            </p>
                            <p>
                                <span> A
                                
                                    <sub>SPL</sub>       =  Area of Stelbat in the sample 
                            
                                </span>
                            </p>
                            <p>
                                <span>ANSR   =  Average normalized standard response factor of standard injections</span>
                            </p>
                            <p>
                                <span>DF     =  Overall sample dilution factor</span>
                            </p>
                            <p>
                                <span>N      = Number of tablets in sample preparation</span>
                            </p>
                            <p>
                                <span>Determine the % label claim of the sample as follows:</span>
                            </p>
                            <p>
                                <img alt=&quot;formula&quot; width=&quot;220&quot; height=&quot;34&quot; style=&quot;display: block; margin-left: auto; margin-right: auto;&quot; src=&quot;#imageResource2&quot;/>
                            </p>
                            <p>
                                <span>Where:</span>
                            </p>
                            <p>
                                <span>LC       =          Label claim (mg/tablet) of tested sample</span>
                            </p>
                        </div>
                    </div>
                </text>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d045e&quot;/>
                <title value=&quot;Assay (w/w%)&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay (w/w%)&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;The %RSD between the two assay results must be ≤ 1.5%&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-Assay">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [ASSAY]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Assay (w/w%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Assay</div><div class="debugOff"> fullUrl: urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d045e</div><div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d045e</div><div class="indent obsDefl2"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <text>
                    <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/showText&quot;>
                        <valueBoolean value=&quot;true&quot;/>
                    </extension>
                    <status value=&quot;additional&quot;/>
                    <div xmlns=&quot;http://www.w3.org/1999/xhtml&quot;>
                        <div style=&quot;font-family: 'Times New Roman', Times, serif;&quot;>
                            <p>Determine the amount of Stelbat in each sample replicate as follows:</p>
                            <p>
                                <img alt=&quot;formula&quot; width=&quot;203&quot; height=&quot;34&quot; style=&quot;display: block; margin-left: auto; margin-right: auto;&quot; src=&quot;#imageResource&quot;/>
                            </p>
                            <p>
                                <span>Where:</span>
                            </p>
                            <p>
                                <span> A
                                
                                    <sub>SPL</sub>       =  Area of Stelbat in the sample 
                            
                                </span>
                            </p>
                            <p>
                                <span>ANSR   =  Average normalized standard response factor of standard injections</span>
                            </p>
                            <p>
                                <span>DF     =  Overall sample dilution factor</span>
                            </p>
                            <p>
                                <span>N      = Number of tablets in sample preparation</span>
                            </p>
                            <p>
                                <span>Determine the % label claim of the sample as follows:</span>
                            </p>
                            <p>
                                <img alt=&quot;formula&quot; width=&quot;220&quot; height=&quot;34&quot; style=&quot;display: block; margin-left: auto; margin-right: auto;&quot; src=&quot;#imageResource2&quot;/>
                            </p>
                            <p>
                                <span>Where:</span>
                            </p>
                            <p>
                                <span>LC       =          Label claim (mg/tablet) of tested sample</span>
                            </p>
                        </div>
                    </div>" id="urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d045e">Text</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <text>
                    ...
                    <status value=&quot;additional&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <text>
                    ...
                    <status value=&quot;additional&quot;>"><span>additional</span></span></div><div class="indent white" title="
                        <div style=&quot;font-family: 'Times New Roman', Times, serif;&quot;>
                            <p>Determine the amount of Stelbat in each sample replicate as follows:</p>
                            <p>
                                <img alt=&quot;formula&quot; width=&quot;203&quot; height=&quot;34&quot; style=&quot;display: block; margin-left: auto; margin-right: auto;&quot; src=&quot;#imageResource&quot;/>
                            </p>
                            <p>
                                <span>Where:</span>
                            </p>
                            <p>
                                <span> A
                                
                                    <sub>SPL</sub>       =  Area of Stelbat in the sample 
                            
                                </span>
                            </p>
                            <p>
                                <span>ANSR   =  Average normalized standard response factor of standard injections</span>
                            </p>
                            <p>
                                <span>DF     =  Overall sample dilution factor</span>
                            </p>
                            <p>
                                <span>N      = Number of tablets in sample preparation</span>
                            </p>
                            <p>
                                <span>Determine the % label claim of the sample as follows:</span>
                            </p>
                            <p>
                                <img alt=&quot;formula&quot; width=&quot;220&quot; height=&quot;34&quot; style=&quot;display: block; margin-left: auto; margin-right: auto;&quot; src=&quot;#imageResource2&quot;/>
                            </p>
                            <p>
                                <span>Where:</span>
                            </p>
                            <p>
                                <span>LC       =          Label claim (mg/tablet) of tested sample</span>
                            </p>
                        </div>"><div xmlns="http://www.w3.org/1999/xhtml"><div style="font-family: 'Times New Roman', Times, serif;"><p>Determine the amount of Stelbat in each sample replicate as follows:</p><p><img alt="formula" width="203" height="34" style="display: block; margin-left: auto; margin-right: auto;" src="data:image/png;base64, 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"/></p><p><span>Where:</span></p><p><span>A
                                <sub>SPL</sub>      =  Area of Stelbat in the sample 
                            </span></p><p><span>ANSR   =  Average normalized standard response factor of standard injections</span></p><p><span>DF     =  Overall sample dilution factor</span></p><p><span>N      = Number of tablets in sample preparation</span></p><p><span>Determine the % label claim of the sample as follows:</span></p><p><img alt="formula" width="220" height="34" style="display: block; margin-left: auto; margin-right: auto;" src="data:image/png;base64, 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"/></p><p><span>Where:</span></p><p><span>LC       =          Label claim (mg/tablet) of tested sample</span></p></div></div></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Assay (w/w%)&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Assay (w/w%)&quot;>">Assay (w/w%)</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay (w/w%)&quot;/>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay (w/w%)&quot;/>"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [ASSAY]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Assay (w/w%)</span></span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;The %RSD between the two assay results must be ≤ 1.5%&quot;/>
                    </extension>">
		Acceptable Value
		<div title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;The %RSD between the two assay results must be ≤ 1.5%&quot;/>
                    </extension>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;The %RSD between the two assay results must be ≤ 1.5%&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;The %RSD between the two assay results must be ≤ 1.5%&quot;/>"><span>The %RSD between the two assay results must be ≤ 1.5%</span></span></div></div></div><div class="summaryHiddenOff"></div></div><div class="indent summaryUnit obsDef"><div class="debugOff"><span>Found a parent (ObservationDefinition/hasMember, id: SampleAnalysis fullUrl: urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046eurl (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Identity)(fullUrl: urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d046e)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Identity&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d046e&quot;/>
                <title value=&quot;Identity&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identity&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;1. The retention time ratio of the sample peak to standard peak is within 0.95 to 1.05.&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;2. The UV spectrum of the sample peak compares favorably to the UV spectrum of the standard peak from 210 nm to 400 nm.&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-Identity">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [IDT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Identity</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Identity</div><div class="debugOff"> fullUrl: urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d046e</div><div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d046e</div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Identity&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Identity&quot;>">Identity</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identity&quot;/>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identity&quot;/>"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [IDT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Identity</span></span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;1. The retention time ratio of the sample peak to standard peak is within 0.95 to 1.05.&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;2. The UV spectrum of the sample peak compares favorably to the UV spectrum of the standard peak from 210 nm to 400 nm.&quot;/>
                    </extension>">
		Acceptable Value
		<div title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;1. The retention time ratio of the sample peak to standard peak is within 0.95 to 1.05.&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;2. The UV spectrum of the sample peak compares favorably to the UV spectrum of the standard peak from 210 nm to 400 nm.&quot;/>
                    </extension>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;1. The retention time ratio of the sample peak to standard peak is within 0.95 to 1.05.&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;1. The retention time ratio of the sample peak to standard peak is within 0.95 to 1.05.&quot;/>"><span>1. The retention time ratio of the sample peak to standard peak is within 0.95 to 1.05.</span></span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;2. The UV spectrum of the sample peak compares favorably to the UV spectrum of the standard peak from 210 nm to 400 nm.&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;2. The UV spectrum of the sample peak compares favorably to the UV spectrum of the standard peak from 210 nm to 400 nm.&quot;/>"><span>2. The UV spectrum of the sample peak compares favorably to the UV spectrum of the standard peak from 210 nm to 400 nm.</span></span></div></div></div><div class="summaryHiddenOff"></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div></div>
</div>
</div>
</div>
</div>
</div>
<div class="debugOff"></div>
</div>
</div>
</body>
<style>

@media all {

    /* Rik - consolas works better if text has to align but doesn't look so good.
       text size adjust gives better scaling on mobile devices, and also overrides default behaviour where
       only "full with" text gets scaled (so some divs do, and others dont) 150% looks ok on iPad Safari, but too big on iPad Chrome */
    .divBody { font:10pt 'Verdana'; margin-right:1.5em; margin-top:0.5em; -webkit-text-size-adjust:150%; }

    .indent {
        margin-left:1em; 	/* controls line to line indent */
        text-indent:-1em; 	/* moves text back to right, so that other parts of the div are still at the left */
        margin-right:1em;
        text-indent:0em;
        margin-right:0em;
        margin-top:0.2em;
        margin-bottom:-0.1em;
        padding-bottom:0.1em; /* at bottom of text */
        background-Color:#E6E0E1;
        border:2px solid white;
	    transform:translate(-2px, -2px);
	    border-radius: 5px;
	    visibility:visible; /* this is so that the outer border doesn't hide these */
    }
    .indent-right {
        margin-right:0.7em;
    }
    .indent-no-border {
        margin-left:1em; 	/* controls line to line indent */
        text-indent:-1em; 	/* moves text back to right, so that other parts of the div are still at the left */
        margin-right:1em;
        text-indent:0em;
        margin-right:0em;
        margin-top:0.2em;
        margin-bottom:-0.1em;
        padding-bottom:0.1em; /* at bottom of text */
	    transform:translate(-2px, -2px);
		visibility:visible;
    }
	.bundle { background-Color: #e0dede }
    .bundleBorder {
        border:2px solid #cfcfcf;
	    border-radius: 5px;
	    margin: -1px;
        background-Color: #e0dede;
    }
    .visible { visibility:visible }

    .modifierExtension { font-weight:bold; color:red; }

    .white { background-Color:white }

    .pat { background-Color:#ffe699 }
    .patl2 { background-Color:#fae8b1 }
    .patl3 { background-Color:#fff1c7 }
    .patl4 { background-Color:#fff4d4 }
    
    .body { background-Color:#e3cd8a }
    .bodyl2 { background-Color:#e0cf99 }

    .comp { background-Color:#F5DEB3 }
    .compl2 { background-Color:#f5e4c4 }
    .compl3 { background-Color:#f5e8d0 }
    .compText { background-Color:#f5e8d0 }

    .mpd { background-Color:#ffe699 }
    .mpdl2 { background-Color:#fcebb6 }
    .mpdl3 { background-Color:#fcf0ca }
    .mpdl4 { background-Color:#fff6d9 }
    .mpdl5 { background-Color:#fffaeb }

    .task { background-Color:#fcb568 }
    .task2 { background-Color:#ffd8ad }
    .task3 { background-Color:#ffdfbd }

    .proc { background-Color:#fcb568 }
    .procl2 { background-Color:#ffd8ad }
    .procl3 { background-Color:#ffdfbd }

    .prov { background-Color:#b4b4b4 }

    .cui { background-Color:#d9d2e9 }
    .cuidetails { background-Color:#e6e1f0 }
    .cuidetails2 { background-Color:#ebe9f0 }

    .sbd,.hcs { background-Color:#affad5 }
    .sbddetails,.hcsl2 { background-Color:#c7fce2 }
    .sbddetails2,.hcsl3 { background-Color:#d4fae8 }
    .sbddetails3 { background-Color:#e3fcf0 }

    .apd { background-Color:#d5a6bd; word-wrap:break-all; }
    .apdl2 { background-Color:#e3c5d4; }
    .apdl3 { background-Color:#edd1df; }

    .allergy { background-Color:#d5a6bd; }
    .allergyl2 { background-Color:#d6bcc9; }
    .allergyl3 { background-Color:#d9cad1; }
    .allergyl4 { background-Color:#d9d4d6; }

    .adverseEvent { background-Color:#d6bcc9; }
    .adverseEventl2 { background-Color:#d9cad1; }
    .adverseEventl3 { background-Color:#d9d4d6; }

    .ppd { background-Color:#b6d7a8; width:70%; }
    .ppdl2, .ppdpackage { background-Color:#c2deb6 }
    .ppdl3, .ppdpackageitem { background-Color:#daf0d1 }
    .ppdl4  { background-Color:#e4f2df }

    .obs { background-Color:#b6d7a8; width:75%; }
    .obsl2 { background-Color:#c2deb6 }
    .obsl3 { background-Color:#d4ebca }

    .obsDef { background-Color:#93ad87; width:75%; }
    .obsDefl2 { background-Color:#a8c79b; }
    .obsDefl3 { background-Color:#b6d7a8; }

    .enc { background-Color:#d8f7a3 }
    .encl2 { background-Color: #e1fcb3 }
    .encl3 { background-Color:#e7ffbd }

    .prr { background-Color:#bfbfbf }
    .prrl2 { background-Color:#cfcfcf }
    
    .orgdark { background-Color:#bfbfbf }
    .file { background-Color:#bfbfbf }

    .pra { background-Color:#cfcfcf }
    .org { background-Color:#cfcfcf }
    .act { background-Color:#cfcfcf }
    .plan { background-Color:#cfcfcf }

    .imm { background-Color:#83bdd6 }
    .imml2 { background-Color: #afcedb }
    .imml3 { background-Color: #bde1f0 }

    .org2,.act2,.pral2,.planl2 { background-Color:#dfdfdf }
    .loc { background-Color:#dfdfdf }
    .org3,.act3,.planl3 { background-Color:#ededed }
	.org4,.act4,.planl4 { background-Color:#f2f2f2 }
	.org5 { background-Color:#f7f7f7 }

    .man {  background-Color:#a4c1f4 }
    .manl2 { background-Color:#c2d7fc }
    .manl3 { background-Color:#d9e7ff }
    .manl4 { background-Color:#e8f1ff }
    .manl5 { background-Color:#f5f9ff }

    .med {  background-Color:#a4c1f4 }
    .medl2 { background-Color:#b8cef5 }
    .medl3 { background-Color:#cedcf5 }
    .medl4 { background-Color:#dfe7f7 }

    .ing { background-Color:#f4cccc }
    .ingsub { background-Color:#f7d7d7 }
    .ingsubstr { background-Color:#fce3e3 }
    .ingrefsub { background-Color:#ffeded }

    .subd { background-Color:#b4a7d6 }
    .regauth { background-Color:#82e0dc }
    .regauthl2 { background-Color:#98ebe7 }
    .regauthcase { background-Color:#98ebe7 }
    .regauthcaseapp { background-Color:#aaf2ef }

    .medreq { background-Color:#82e0dc }
    .medreql2 { background-Color:#98ebe7 }

    .medstat { background-Color:#82e0dc }
    .medstatl2 { background-Color:#c2fffc }
    .medstatl3 { background-Color:#d4fffd }
    .medstatl4 { background-Color:#e8fcfc }
    .medstatl5 { background-Color:#f2fcfc }

    .serviceReq { background-Color:#c2fffc }
    .serviceReql2 { background-Color:#d4fffd }
    .serviceReql3 { background-Color:#e8fcfc }
    .serviceReql4 { background-Color:#f2fcfc }

    .supplyDel { background-Color:#5dded8 }
    .supplyDell2 { background-Color:#93ede9 }

	.cond { background-Color:#f4cccc }
    .condl2 { background-Color:#f5dcdc }
    .condl3 { background-Color:#f5e6e6 }

    .devd { background-Color:#b7b7b7 }
    .devdl2 { background-Color:#cfcfcf }
    .devdl3  { background-Color:#e3e3e3 }

    .flag { background-Color:#fffd8f }
    .flagl2 { background-Color:#fffda1 }
    .flagl3 { background-Color:#fcfbb6 }

    .consent { background-Color:#ffb68f }
    .consentl2 { background-Color:#fcc7ac }
    .consentl3 { background-Color: #ffd3bd }
    .consentl4 { background-Color: #ffe0d1 }

	.openButton { width: 12px;
					position: absolute;
        			top: 0px;
       				right: 2px;
       				color:white;
       				visibility:hidden }

 	div:has(div.summaryHidden) > span.openButton { visibility:visible }

	.noUnderline { text-decoration: none; color: inherit; }
	.noUnderline:hover { text-decoration: underline; color: revert; }

    .grey { color:dimgray  }
    .greyOff { color:dimgray; display:none  }
    .debug { color:#990000  }
    .debugOff { display:none }
    .debugBorder { visibility:visible }
    .debugOffBorder { visibility:hidden }

    .summaryHiddenOff { }
    .summaryHidden { display:none }
    .summaryShowsOff { display:none }
    .summaryShows { }

    .remove,.imageRemove,.commentRemove,.provenanceRemove,.taskRemove,.htmlTableRemove { }
    .removeOff,.imageRemoveOff,.commentRemoveOff,.provenanceRemoveOff,.taskRemoveOff,.htmlTableRemoveOff { display:none }

    .resetDebug { visibility:visible; }

	.controls { position: sticky;
				top:8px;
				float:right;
				clear:right;
				width:290px;
				overflow: hidden;
				height:18px;
				border: solid 1px grey;
				border-radius: 5px;
				margin-right: 23px;
				z-index:99;
				background-Color:#ffe699;
				font:10pt 'Verdana';
	}

	.image { position: sticky;
				top:8px;
				float:right;
				clear:right;
				border: solid 1px grey;
				border-radius: 5px;
				padding: 2px;
				z-index:99;
				margin-right: 23px;
				background-color:white;
				font:10pt 'Verdana';
	}

	.comment { position: sticky;
				top:8px;
				width:297.5px;
				border-radius: 5px;
				float:right;
				clear:right;
				border: solid 1px grey;
				z-index:99;
				margin-right: 23px;
				padding-left: 8px;
				background-color:white;
				font:10pt 'Verdana';
	}
	.instanceComment { text-decoration-line: underline;
					   text-decoration-style: dotted;
					   text-decoration-color: red; cursor: help; }

	.narrativeLink { text-decoration-line: underline;
					   text-decoration-style: dotted;
					   text-decoration-color: green; }
					   
    .bold { font-weight:bold; }
    .italic { font-style:italic; }

	.hand { cursor: pointer; }
    .button { text-decoration:underline; cursor: pointer; color:gray; }
    .buttonLabel { color:gray; }
    .buttonNoUnderline { cursor: pointer; color:gray; }
    .buttonNoUnderlineHidden { cursor: pointer; color:#ffe699; }
    .buttonNoUnderlineHidden:hover { color:gray; }

	sup { cursor: default; }
	.rotate-left { transform: rotate(-90deg) }

	.plainLink  { text-decoration: none; color: inherit; }
	.plainLink:visited { text-decoration: none; color: inherit; }

	.greyScale { -moz-filter:grayscale(100%);webkit-filter:grayscale(100%);filter:gray;filter:grayscale(100%) }
	
    .json-key { color:#000096 }
    .json-string { color:#994328 }
    .json-number { color:blue }
    .json-boolean { color:red }
    .json-null { color:green }
	
	th { background-color: #81BEF7; }
	td { padding: 3px; font:10pt 'Verdana'; }
	th { padding: 3px; font:10pt 'Verdana'; } /* seems to need setting explicitly, on site */

	.raised-border-td {
	  position: relative;
	}
	.raised-border-td::before {
	  content: "";
	  position: absolute;
	  top: -1px; /* Raise the border by 1px */
	  left: 0;
	  width: 100%;
	  border-top: 1px solid #000; /* 1px solid black border on the top */
	}
	
	table.rounded-corners {
	 	/* Change these properties */
	 	--border: 1px solid black;
	 	border-radius: 5px;
		font:10pt 'Verdana';
	
	 	/* Don't change these properties */
	 	border-spacing: 0;
	 	border-collapse: separate;
	 	border: var(--border);
	 	overflow: hidden;
	}
	table.white { background-color:white; }
	
	/* Apply a border to the right of all but the last column */
	table.rounded-corners th:not(:last-child),
	table.rounded-corners td:not(:last-child) {
	 border-right: var(--border);
	}
	
	/* Apply a border to the bottom of all but the last row */
	table.rounded-corners>thead>tr:not(:last-child)>th,
	table.rounded-corners>thead>tr:not(:last-child)>td,
	table.rounded-corners>tbody>tr:not(:last-child)>th,
	table.rounded-corners>tbody>tr:not(:last-child)>td,
	table.rounded-corners>tfoot>tr:not(:last-child)>th,
	table.rounded-corners>tfoot>tr:not(:last-child)>td,
	table.rounded-corners>tr:not(:last-child)>td,
	table.rounded-corners>tr:not(:last-child)>th,
	table.rounded-corners>thead:not(:last-child),
	table.rounded-corners>tbody:not(:last-child),
	table.rounded-corners>tfoot:not(:last-child) {
	 border-bottom: var(--border);
	}
	td.centred { text-align:center; }
}
	</style><!--
		Status information:
		First resource in bundle:PlanDefinition
		Single resource bundle:false
		Single resource bundle Not Patient Or Bundle:false
		Single resource Not Patient:false
		Patient document:false
		General Bundle:false
		Not patient related:true
		=>Patient Centric Mode:false
		SubstanceDef Centric Mode:false
		Assumed profile:-->
</html>


---

File: repos/HL7_SLASH_uv-dx-pq/input/pagecontent/anal_proc_rend_s.md

The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.S.4 Control of Drug Substance, subsection 3.2.S.4.2 Analytical Procedures.
<html>
<body>
<div class="divBody">
<p>
						This is the same data as in the example files here in <a href="Bundle-bundle-analytical-procedure-pq-ex2-sub.xml.html">xml</a> and in <a href="Bundle-bundle-analytical-procedure-pq-ex2-sub.json.html">json</a>, presented for easier viewing.
						Hovering on words below will show the corresponding sections of the underlying data.
					</p>
</div>
<div class="greyable">
<div class="divBody">
<div style="position:relative" class="summaryUnit">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-analytical-procedure-pq-ex2-sub)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-analytical-procedure-pq 

<Bundle>
    <id value=&quot;bundle-analytical-procedure-pq-ex2-sub&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-analytical-procedure-pq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <entry>
        <fullUrl value=&quot;urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
        <resource>
            <PlanDefinition>
                <id value=&quot;analyticalProcedure&quot;/>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
                <title value=&quot;Analytical Procedure&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;analytical-procedure&quot;/>
                        <display value=&quot;Analytical Procedure&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                </subjectReference>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;OPTICAL&quot;/>
                                    <display value=&quot;Optical properties&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;Same as for blue light&quot;/>
                        </extension>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;THEORY&quot;/>
                                    <display value=&quot;Theory&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;MIE&quot;/>
                        </extension>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;STIR&quot;/>
                                    <display value=&quot;Stir Time&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;minute&quot;/>
                                <!-- todo ucum -->
                            </valueQuantity>
                        </extension>
                    </extension>
                    <title value=&quot;Determination of Particle Size of Stelbat by Laser Diffraction (G1112)&quot;/>
                    <!-- can have device here or as ObsDef.device -->
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/dispersant&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Dispersant&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;dispersant&quot;/>
                                <display value=&quot;Dispersant&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <title value=&quot;Sample Preparation&quot;/>
                        <action>
                            <title value=&quot;Instructions&quot;/>
                            <description value=&quot;Vortex approximately 30 seconds. Mix briefly by vortexing immediately before use.&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;Sample Analysis&quot;/>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--definitionCanonical value=&quot;ObservationDefinition/ParticleSize&quot;/-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;Sample Calculation&quot;/>
                        <description value=&quot;The particle size result is calculated automatically by the instrument software for each sample.&quot;/>
                        <code>
                            <text value=&quot;Calculation&quot;/>
                        </code>
                    </action>
                    <action>
                        <title value=&quot;Reporting&quot;/>
                        <description value=&quot;Report the average value as per specification&quot;/>
                        <code>
                            <text value=&quot;Reporting&quot;/>
                        </code>
                    </action>
                </action>
            </PlanDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance1&quot;/>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8135565f82&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;dispersant&quot;/>
                <property>
                    <type>
                        <text value=&quot;Shelf life&quot;/>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Refer to local laboratory expiration date (may be extended with supporting data)&quot;/>
                    </valueCodeableConcept>
                </property>
                <name>
                    <name value=&quot;0.1% Sorbitan monooleate (Span 80) in hexanes (m/v)&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8035565f82&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;resultingMaterial&quot;/>
                <name>
                    <name value=&quot;Stelbat in dispersant (approximately 10 mg/mL)&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleSize&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                <title value=&quot;Particle Size&quot;/>
                <status value=&quot;active&quot;/>
                <description value=&quot;Number of Analyses: 1 replicate for each sample preparation&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>
                </code>
                <specimen>
                    <reference value=&quot;SpecimenDefinition/specimendefinition&quot;/>
                </specimen>
                <device>
                    <reference value=&quot;DeviceDefinition/laser&quot;/>
                </device>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleSizeObscuration&quot;/>
                </hasMember>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleRI&quot;/>
                </hasMember>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleSizeRSD&quot;/>
                </hasMember>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d045e&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleSizeObscuration&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d045e&quot;/>
                <title value=&quot;Obscuration&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Obscuration&quot;/>
                        <display value=&quot;Obscuration&quot;/>
                    </coding>
                    <text value=&quot;Obscuration (%)&quot;/>
                </code>
                <qualifiedValue>
                    <range>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-target-pq&quot;>
                            <valueQuantity>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;%&quot;/>
                            </valueQuantity>
                        </extension>
                        <low>
                            <value value=&quot;10&quot;/>
                            <unit value=&quot;%&quot;/>
                        </low>
                        <high>
                            <value value=&quot;30&quot;/>
                            <unit value=&quot;%&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:12e7e672-41a6-4036-3c1f-b8ba6a7d045e&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleRI&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-41a6-4036-3c1f-b8ba6a7d045e&quot;/>
                <title value=&quot;Particle refractive index&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Refractive index&quot;/>
                        <display value=&quot;Refractive index&quot;/>
                    </coding>
                    <text value=&quot;Particle refractive index&quot;/>
                </code>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </low>
                        <high>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </high>
                    </range>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d046e&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleSizeRSD&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d046e&quot;/>
                <title value=&quot;Particle Size RSD&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Particle Size RSD&quot;/>
                        <display value=&quot;Particle Size RSD&quot;/>
                    </coding>
                    <text value=&quot;Particle Size RSD&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;The %RSD for the D(v, 0.9) must be not more than 15%&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:3a0cde98-4a73-6d67-1dfc-08e3fc9646a2&quot;/>
        <resource>
            <SpecimenDefinition>
                <id value=&quot;specimendefinition&quot;/>
                <url value=&quot;http://example-server.com/fhir/SpecimenDefinition/3a0cde98-4a73-6d67-1dfc-08e3fc9646a2&quot;/>
                <status value=&quot;active&quot;/>
                <description value=&quot;Number of Preparations: 3&quot;/>
            </SpecimenDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bad9495c&quot;/>
        <resource>
            <DeviceDefinition>
                <id value=&quot;laser&quot;/>
                <description value=&quot;Analyzer with disperser and temperature control accessory, or equivalent&quot;/>
                <classification>
                    <type>
                        <text value=&quot;Particle Size Analyzer with Laser Diffraction&quot;/>
                    </type>
                </classification>
            </DeviceDefinition>
        </resource>
    </entry>" id="Bundle-bundle-analytical-procedure-pq-ex2-sub">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-analytical-procedure-pq-ex2-sub</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-analytical-procedure-pq&quot;>">Profile: </span><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-analytical-procedure-pq&quot;>">http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-analytical-procedure-pq</span></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: </span><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>"><span>collection</span></span></div>
</div>
</div>
<div>
<div class="indent sbd summaryUnit">
<div class="debugOff"><span>Found a parent (PlanDefinition/subjectReference, id: analyticalProcedure fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance1)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance1&quot;/>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                </name>" id="SubstanceDefinition-substance1">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance1</div>
<div class="debugOff"> fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbatolol&quot;>">Name: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbatolol&quot;>"><span>Stelbatolol</span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="indent plan summaryUnit"><sup class="rotate-left" title="arrow indicates that this PlanDefinition resource points back to the parent SubstanceDefinition, instead of being linked forwards from it - via PlanDefinition.subjectReference">↸</sup><span class="debugOff">arrow indicates that this PlanDefinition resource points back to the parent SubstanceDefinition, instead of being linked forwards from it - via PlanDefinition.subjectReference<br></span><a class="plainLink"><span class="bold" title="PlanDefinition (id: analyticalProcedure)(fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f)

<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;analyticalProcedure&quot;/>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
                <title value=&quot;Analytical Procedure&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;analytical-procedure&quot;/>
                        <display value=&quot;Analytical Procedure&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                </subjectReference>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;OPTICAL&quot;/>
                                    <display value=&quot;Optical properties&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;Same as for blue light&quot;/>
                        </extension>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;THEORY&quot;/>
                                    <display value=&quot;Theory&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;MIE&quot;/>
                        </extension>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;STIR&quot;/>
                                    <display value=&quot;Stir Time&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;minute&quot;/>
                                <!-- todo ucum -->
                            </valueQuantity>
                        </extension>
                    </extension>
                    <title value=&quot;Determination of Particle Size of Stelbat by Laser Diffraction (G1112)&quot;/>
                    <!-- can have device here or as ObsDef.device -->
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/dispersant&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Dispersant&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;dispersant&quot;/>
                                <display value=&quot;Dispersant&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <title value=&quot;Sample Preparation&quot;/>
                        <action>
                            <title value=&quot;Instructions&quot;/>
                            <description value=&quot;Vortex approximately 30 seconds. Mix briefly by vortexing immediately before use.&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;Sample Analysis&quot;/>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--definitionCanonical value=&quot;ObservationDefinition/ParticleSize&quot;/-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;Sample Calculation&quot;/>
                        <description value=&quot;The particle size result is calculated automatically by the instrument software for each sample.&quot;/>
                        <code>
                            <text value=&quot;Calculation&quot;/>
                        </code>
                    </action>
                    <action>
                        <title value=&quot;Reporting&quot;/>
                        <description value=&quot;Report the average value as per specification&quot;/>
                        <code>
                            <text value=&quot;Reporting&quot;/>
                        </code>
                    </action>
                </action>" id="PlanDefinition-analyticalProcedure">Plan</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/plandefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/plandefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/plandefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: analyticalProcedure</div>
<div class="debugOff"> fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <title value=&quot;Analytical Procedure&quot;>">Title: </span><span>Analytical Procedure</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;analytical-procedure&quot;/>
                        <display value=&quot;Analytical Procedure&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>">Workflow Definition<span class="greyOff"> [workflow-definition]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/plan-definition-type)</span></span>, <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <type>
                    ...
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;analytical-procedure&quot;/>
                        <display value=&quot;Analytical Procedure&quot;/>">Analytical Procedure<span class="greyOff"> [analytical-procedure]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type)</span></span></div>
<div class="summaryHiddenOff">
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;OPTICAL&quot;/>
                                    <display value=&quot;Optical properties&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;Same as for blue light&quot;/>
                        </extension>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;THEORY&quot;/>
                                    <display value=&quot;Theory&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;MIE&quot;/>
                        </extension>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;STIR&quot;/>
                                    <display value=&quot;Stir Time&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;minute&quot;/>
                                <!-- todo ucum -->
                            </valueQuantity>
                        </extension>
                    </extension>
                    <title value=&quot;Determination of Particle Size of Stelbat by Laser Diffraction (G1112)&quot;/>
                    <!-- can have device here or as ObsDef.device -->
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/dispersant&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Dispersant&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;dispersant&quot;/>
                                <display value=&quot;Dispersant&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <title value=&quot;Sample Preparation&quot;/>
                        <action>
                            <title value=&quot;Instructions&quot;/>
                            <description value=&quot;Vortex approximately 30 seconds. Mix briefly by vortexing immediately before use.&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;Sample Analysis&quot;/>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--definitionCanonical value=&quot;ObservationDefinition/ParticleSize&quot;/-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;Sample Calculation&quot;/>
                        <description value=&quot;The particle size result is calculated automatically by the instrument software for each sample.&quot;/>
                        <code>
                            <text value=&quot;Calculation&quot;/>
                        </code>
                    </action>
                    <action>
                        <title value=&quot;Reporting&quot;/>
                        <description value=&quot;Report the average value as per specification&quot;/>
                        <code>
                            <text value=&quot;Reporting&quot;/>
                        </code>
                    </action>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <title value=&quot;Determination of Particle Size of Stelbat by Laser Diffraction (G1112)&quot;>"> - Determination of Particle Size of Stelbat by Laser Diffraction (G1112)</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <title value=&quot;Determination of Particle Size of Stelbat by Laser Diffraction (G1112)&quot;>">Title: </span><span>Determination of Particle Size of Stelbat by Laser Diffraction (G1112)</span></div>
<div class="indent planl3 summaryHiddenOff" title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;OPTICAL&quot;/>
                                    <display value=&quot;Optical properties&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;Same as for blue light&quot;/>
                        </extension>">
					Parameters
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;OPTICAL&quot;/>
                                    <display value=&quot;Optical properties&quot;/>
                                </coding>
                            </valueCodeableConcept>">Parameter: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;OPTICAL&quot;/>
                                    <display value=&quot;Optical properties&quot;/>
                                </coding>
                            </valueCodeableConcept>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;OPTICAL&quot;/>
                                    <display value=&quot;Optical properties&quot;/>">Optical properties<span class="greyOff"> [OPTICAL]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/process-parameter)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        ...
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;Same as for blue light&quot;/>">Value Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        ...
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;Same as for blue light&quot;/>"><span>Same as for blue light</span></span></div>
</div>
<div class="indent planl3 summaryHiddenOff" title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;THEORY&quot;/>
                                    <display value=&quot;Theory&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;MIE&quot;/>
                        </extension>">
					Parameters
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;THEORY&quot;/>
                                    <display value=&quot;Theory&quot;/>
                                </coding>
                            </valueCodeableConcept>">Parameter: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;THEORY&quot;/>
                                    <display value=&quot;Theory&quot;/>
                                </coding>
                            </valueCodeableConcept>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;THEORY&quot;/>
                                    <display value=&quot;Theory&quot;/>">Theory<span class="greyOff"> [THEORY]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/process-parameter)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        ...
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;MIE&quot;/>">Value Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        ...
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;MIE&quot;/>"><span>MIE</span></span></div>
</div>
<div class="indent planl3 summaryHiddenOff" title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;STIR&quot;/>
                                    <display value=&quot;Stir Time&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;minute&quot;/>
                                <!-- todo ucum -->
                            </valueQuantity>
                        </extension>">
					Parameters
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;STIR&quot;/>
                                    <display value=&quot;Stir Time&quot;/>
                                </coding>
                            </valueCodeableConcept>">Parameter: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;STIR&quot;/>
                                    <display value=&quot;Stir Time&quot;/>
                                </coding>
                            </valueCodeableConcept>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;STIR&quot;/>
                                    <display value=&quot;Stir Time&quot;/>">Stir Time<span class="greyOff"> [STIR]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/process-parameter)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;minute&quot;/>
                                <!-- todo ucum -->">Value Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;minute&quot;/>
                                <!-- todo ucum -->">1 minute</span></div>
</div>
<div class="indent planl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/dispersant&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Dispersant&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;dispersant&quot;/>
                                <display value=&quot;Dispersant&quot;/>
                            </coding>
                        </role>">Participant</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        ...
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;dispersant&quot;/>
                                <display value=&quot;Dispersant&quot;/>
                            </coding>">Role: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        ...
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;dispersant&quot;/>
                                <display value=&quot;Dispersant&quot;/>
                            </coding>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;dispersant&quot;/>
                                <display value=&quot;Dispersant&quot;/>">Dispersant<span class="greyOff"> [dispersant]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/manufacturing-participant-role)</span></span></span></div>
<div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <typeReference>
                            ...
                            <display value=&quot;Dispersant&quot;>">Display: Dispersant</span></div>
</div>
<div class="indent sbd summaryUnit">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: analyticalProcedure fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: dispersant)(fullUrl: urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8135565f82)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;dispersant&quot;/>
                <property>
                    <type>
                        <text value=&quot;Shelf life&quot;/>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Refer to local laboratory expiration date (may be extended with supporting data)&quot;/>
                    </valueCodeableConcept>
                </property>
                <name>
                    <name value=&quot;0.1% Sorbitan monooleate (Span 80) in hexanes (m/v)&quot;/>
                </name>" id="SubstanceDefinition-dispersant">Substance</span></a><span class="summaryShowsOff"><b> - 0.1% Sorbitan monooleate (Span 80) in hexanes (m/v)</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: dispersant</div>
<div class="debugOff"> fullUrl: urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8135565f82</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;0.1% Sorbitan monooleate (Span 80) in hexanes (m/v)&quot;>">Name: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;0.1% Sorbitan monooleate (Span 80) in hexanes (m/v)&quot;>"><span>0.1% Sorbitan monooleate (Span 80) in hexanes (m/v)</span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <property>
                    <type>
                        <text value=&quot;Shelf life&quot;/>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Refer to local laboratory expiration date (may be extended with supporting data)&quot;/>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <text value=&quot;Shelf life&quot;/>">Type: <span style="white-space:normal;">Shelf life</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Refer to local laboratory expiration date (may be extended with supporting data)&quot;/>">Value: <span style="white-space:normal;">Refer to local laboratory expiration date (may be extended with supporting data)</span></span></div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
<div class="indent planl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>">Participant</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        ...
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>">Role: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        ...
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>">Resulting Material<span class="greyOff"> [ResultingMaterial]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/manufacturing-participant-role)</span></span></span></div>
<div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <typeReference>
                            ...
                            <display value=&quot;Resulting material&quot;>">Display: Resulting material</span></div>
</div>
<div class="indent sbd summaryUnit">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: analyticalProcedure fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: resultingMaterial)(fullUrl: urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8035565f82)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;resultingMaterial&quot;/>
                <name>
                    <name value=&quot;Stelbat in dispersant (approximately 10 mg/mL)&quot;/>
                </name>" id="SubstanceDefinition-resultingMaterial">Substance</span></a><span class="summaryShowsOff"><b> - Stelbat in dispersant (approximately 10 mg/mL)</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: resultingMaterial</div>
<div class="debugOff"> fullUrl: urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8035565f82</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbat in dispersant (approximately 10 mg/mL)&quot;>">Name: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbat in dispersant (approximately 10 mg/mL)&quot;>"><span>Stelbat in dispersant (approximately 10 mg/mL)</span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <title value=&quot;Sample Preparation&quot;/>
                        <action>
                            <title value=&quot;Instructions&quot;/>
                            <description value=&quot;Vortex approximately 30 seconds. Mix briefly by vortexing immediately before use.&quot;/>
                        </action>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Sample Preparation&quot;>"> - Sample Preparation</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Sample Preparation&quot;>">Title: </span><span>Sample Preparation</span></div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <action>
                            <title value=&quot;Instructions&quot;/>
                            <description value=&quot;Vortex approximately 30 seconds. Mix briefly by vortexing immediately before use.&quot;/>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <title value=&quot;Instructions&quot;>"> - Instructions</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <title value=&quot;Instructions&quot;>">Title: </span><span>Instructions</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            ...
                            <description value=&quot;Vortex approximately 30 seconds. Mix briefly by vortexing immediately before use.&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            ...
                            <description value=&quot;Vortex approximately 30 seconds. Mix briefly by vortexing immediately before use.&quot;>">Vortex approximately 30 seconds. Mix briefly by vortexing immediately before use.</span></div>
</div>
</div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <title value=&quot;Sample Analysis&quot;/>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--definitionCanonical value=&quot;ObservationDefinition/ParticleSize&quot;/-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                        </action>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Sample Analysis&quot;>"> - Sample Analysis</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Sample Analysis&quot;>">Title: </span><span>Sample Analysis</span></div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--definitionCanonical value=&quot;ObservationDefinition/ParticleSize&quot;/-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: analyticalProcedure fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: ParticleSize)(fullUrl: urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046e)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleSize&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                <title value=&quot;Particle Size&quot;/>
                <status value=&quot;active&quot;/>
                <description value=&quot;Number of Analyses: 1 replicate for each sample preparation&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>
                </code>
                <specimen>
                    <reference value=&quot;SpecimenDefinition/specimendefinition&quot;/>
                </specimen>
                <device>
                    <reference value=&quot;DeviceDefinition/laser&quot;/>
                </device>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleSizeObscuration&quot;/>
                </hasMember>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleRI&quot;/>
                </hasMember>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleSizeRSD&quot;/>
                </hasMember>" id="ObservationDefinition-ParticleSize">Observation Definition<span class="summaryShowsOff"> - <div style="display: inline"> (<span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>">Data Absent Reason: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>"><span>unsupported</span></span>)</div></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: ParticleSize</div>
<div class="debugOff"> fullUrl: urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046e</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Particle Size&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Particle Size&quot;>">Particle Size</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>"><div style="display: inline"> (<span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>">Data Absent Reason: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>"><span>unsupported</span></span>)</div></span></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <description value=&quot;Number of Analyses: 1 replicate for each sample preparation&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <description value=&quot;Number of Analyses: 1 replicate for each sample preparation&quot;>">Number of Analyses: 1 replicate for each sample preparation</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <specimen>
                    <reference value=&quot;SpecimenDefinition/specimendefinition&quot;/>">Specimen</span><div class="indent org summaryUnit"><a class="plainLink"><span class="bold" title="SpecimenDefinition (id: specimendefinition)(fullUrl: urn:uuid:3a0cde98-4a73-6d67-1dfc-08e3fc9646a2)

<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                <id value=&quot;specimendefinition&quot;/>
                <url value=&quot;http://example-server.com/fhir/SpecimenDefinition/3a0cde98-4a73-6d67-1dfc-08e3fc9646a2&quot;/>
                <status value=&quot;active&quot;/>
                <description value=&quot;Number of Preparations: 3&quot;/>" id="SpecimenDefinition-specimendefinition">Specimen Definition</span><div></div></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/specimendefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/specimendefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/specimendefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: specimendefinition</div><div class="debugOff"> fullUrl: urn:uuid:3a0cde98-4a73-6d67-1dfc-08e3fc9646a2</div><div class="debugOff">url (canonical): http://example-server.com/fhir/SpecimenDefinition/3a0cde98-4a73-6d67-1dfc-08e3fc9646a2</div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                ...
                <description value=&quot;Number of Preparations: 3&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                ...
                <description value=&quot;Number of Preparations: 3&quot;>">Number of Preparations: 3</span></div></div>
</div>
<div class="summaryHiddenOff">
<div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleSize&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                <title value=&quot;Particle Size&quot;/>
                <status value=&quot;active&quot;/>
                <description value=&quot;Number of Analyses: 1 replicate for each sample preparation&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>
                </code>
                <specimen>
                    <reference value=&quot;SpecimenDefinition/specimendefinition&quot;/>
                </specimen>
                <device>
                    <reference value=&quot;DeviceDefinition/laser&quot;/>
                </device>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleSizeObscuration&quot;/>
                </hasMember>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleRI&quot;/>
                </hasMember>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleSizeRSD&quot;/>
                </hasMember>">Device</span><div class="indent devd summaryUnit"><div class="debugOff"><span>Found a parent (ObservationDefinition/device, id: ParticleSize fullUrl: urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046eurl (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DeviceDefinition (id: laser)(fullUrl: urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bad9495c)

<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <id value=&quot;laser&quot;/>
                <description value=&quot;Analyzer with disperser and temperature control accessory, or equivalent&quot;/>
                <classification>
                    <type>
                        <text value=&quot;Particle Size Analyzer with Laser Diffraction&quot;/>
                    </type>
                </classification>" id="DeviceDefinition-laser">Device</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/devicedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/devicedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/devicedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: laser</div><div class="debugOff"> fullUrl: urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bad9495c</div><div class="summaryHiddenOff"></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                ...
                <description value=&quot;Analyzer with disperser and temperature control accessory, or equivalent&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                ...
                <description value=&quot;Analyzer with disperser and temperature control accessory, or equivalent&quot;>">Analyzer with disperser and temperature control accessory, or equivalent</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <classification>
                    <type>
                        <text value=&quot;Particle Size Analyzer with Laser Diffraction&quot;/>">Type: </span><span style="white-space:normal;">Particle Size Analyzer with Laser Diffraction</span></div><div class="summaryHiddenOff"></div></div></span></div>
<div class="indent obsDefl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleSizeObscuration&quot;/>
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleRI&quot;/>
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleSizeRSD&quot;/>">Member</span><div class="indent summaryUnit obsDef"><div class="debugOff"><span>Found a parent (ObservationDefinition/hasMember, id: ParticleSize fullUrl: urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046eurl (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: ParticleSizeObscuration)(fullUrl: urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d045e)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleSizeObscuration&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d045e&quot;/>
                <title value=&quot;Obscuration&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Obscuration&quot;/>
                        <display value=&quot;Obscuration&quot;/>
                    </coding>
                    <text value=&quot;Obscuration (%)&quot;/>
                </code>
                <qualifiedValue>
                    <range>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-target-pq&quot;>
                            <valueQuantity>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;%&quot;/>
                            </valueQuantity>
                        </extension>
                        <low>
                            <value value=&quot;10&quot;/>
                            <unit value=&quot;%&quot;/>
                        </low>
                        <high>
                            <value value=&quot;30&quot;/>
                            <unit value=&quot;%&quot;/>
                        </high>
                    </range>
                </qualifiedValue>" id="ObservationDefinition-ParticleSizeObscuration">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Obscuration&quot;/>
                        <display value=&quot;Obscuration&quot;/>">Obscuration<span class="greyOff"> [Obscuration]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Obscuration (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: ParticleSizeObscuration</div><div class="debugOff"> fullUrl: urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d045e</div><div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d045e</div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Obscuration&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Obscuration&quot;>">Obscuration</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Obscuration&quot;/>
                        <display value=&quot;Obscuration&quot;/>
                    </coding>
                    <text value=&quot;Obscuration (%)&quot;/>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Obscuration&quot;/>
                        <display value=&quot;Obscuration&quot;/>
                    </coding>
                    <text value=&quot;Obscuration (%)&quot;/>"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Obscuration&quot;/>
                        <display value=&quot;Obscuration&quot;/>">Obscuration<span class="greyOff"> [Obscuration]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Obscuration (%)</span></span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <range>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-target-pq&quot;>
                            <valueQuantity>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;%&quot;/>
                            </valueQuantity>
                        </extension>
                        <low>
                            <value value=&quot;10&quot;/>
                            <unit value=&quot;%&quot;/>
                        </low>
                        <high>
                            <value value=&quot;30&quot;/>
                            <unit value=&quot;%&quot;/>
                        </high>
                    </range>">
		Acceptable Value
		<div title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <range>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-target-pq&quot;>
                            <valueQuantity>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;%&quot;/>
                            </valueQuantity>
                        </extension>
                        <low>
                            <value value=&quot;10&quot;/>
                            <unit value=&quot;%&quot;/>
                        </low>
                        <high>
                            <value value=&quot;30&quot;/>
                            <unit value=&quot;%&quot;/>
                        </high>
                    </range>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-target-pq&quot;>
                            <valueQuantity>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;%&quot;/>
                            </valueQuantity>
                        </extension>
                        <low>
                            <value value=&quot;10&quot;/>
                            <unit value=&quot;%&quot;/>
                        </low>
                        <high>
                            <value value=&quot;30&quot;/>
                            <unit value=&quot;%&quot;/>
                        </high>">Range: </span>from <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        ...
                        <low>
                            <value value=&quot;10&quot;/>
                            <unit value=&quot;%&quot;/>">10%</span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        ...
                        <high>
                            <value value=&quot;30&quot;/>
                            <unit value=&quot;%&quot;/>">30%</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-target-pq&quot;>
                            <valueQuantity>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;%&quot;/>">Target: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-target-pq&quot;>
                            <valueQuantity>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;%&quot;/>">15%</span></div></div></div></div><div class="summaryHiddenOff"></div></div><div class="indent summaryUnit obsDef"><div class="debugOff"><span>Found a parent (ObservationDefinition/hasMember, id: ParticleSize fullUrl: urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046eurl (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: ParticleRI)(fullUrl: urn:uuid:12e7e672-41a6-4036-3c1f-b8ba6a7d045e)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleRI&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-41a6-4036-3c1f-b8ba6a7d045e&quot;/>
                <title value=&quot;Particle refractive index&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Refractive index&quot;/>
                        <display value=&quot;Refractive index&quot;/>
                    </coding>
                    <text value=&quot;Particle refractive index&quot;/>
                </code>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </low>
                        <high>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </high>
                    </range>
                </qualifiedValue>" id="ObservationDefinition-ParticleRI">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Refractive index&quot;/>
                        <display value=&quot;Refractive index&quot;/>">Refractive index<span class="greyOff"> [Refractive index]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Particle refractive index</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: ParticleRI</div><div class="debugOff"> fullUrl: urn:uuid:12e7e672-41a6-4036-3c1f-b8ba6a7d045e</div><div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-41a6-4036-3c1f-b8ba6a7d045e</div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Particle refractive index&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Particle refractive index&quot;>">Particle refractive index</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Refractive index&quot;/>
                        <display value=&quot;Refractive index&quot;/>
                    </coding>
                    <text value=&quot;Particle refractive index&quot;/>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Refractive index&quot;/>
                        <display value=&quot;Refractive index&quot;/>
                    </coding>
                    <text value=&quot;Particle refractive index&quot;/>"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Refractive index&quot;/>
                        <display value=&quot;Refractive index&quot;/>">Refractive index<span class="greyOff"> [Refractive index]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Particle refractive index</span></span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </low>
                        <high>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </high>
                    </range>">
		Acceptable Value
		<div title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </low>
                        <high>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </high>
                    </range>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </low>
                        <high>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </high>">Range: </span>from <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->">1.75</span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        ...
                        <high>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->">1.75</span></div></div></div><div class="summaryHiddenOff"></div></div><div class="indent summaryUnit obsDef"><div class="debugOff"><span>Found a parent (ObservationDefinition/hasMember, id: ParticleSize fullUrl: urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046eurl (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: ParticleSizeRSD)(fullUrl: urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d046e)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleSizeRSD&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d046e&quot;/>
                <title value=&quot;Particle Size RSD&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Particle Size RSD&quot;/>
                        <display value=&quot;Particle Size RSD&quot;/>
                    </coding>
                    <text value=&quot;Particle Size RSD&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;The %RSD for the D(v, 0.9) must be not more than 15%&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-ParticleSizeRSD">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Particle Size RSD&quot;/>
                        <display value=&quot;Particle Size RSD&quot;/>">Particle Size RSD<span class="greyOff"> [Particle Size RSD]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Particle Size RSD</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: ParticleSizeRSD</div><div class="debugOff"> fullUrl: urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d046e</div><div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d046e</div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Particle Size RSD&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Particle Size RSD&quot;>">Particle Size RSD</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Particle Size RSD&quot;/>
                        <display value=&quot;Particle Size RSD&quot;/>
                    </coding>
                    <text value=&quot;Particle Size RSD&quot;/>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Particle Size RSD&quot;/>
                        <display value=&quot;Particle Size RSD&quot;/>
                    </coding>
                    <text value=&quot;Particle Size RSD&quot;/>"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Particle Size RSD&quot;/>
                        <display value=&quot;Particle Size RSD&quot;/>">Particle Size RSD<span class="greyOff"> [Particle Size RSD]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Particle Size RSD</span></span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;The %RSD for the D(v, 0.9) must be not more than 15%&quot;/>
                    </extension>">
		Acceptable Value
		<div title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;The %RSD for the D(v, 0.9) must be not more than 15%&quot;/>
                    </extension>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;The %RSD for the D(v, 0.9) must be not more than 15%&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;The %RSD for the D(v, 0.9) must be not more than 15%&quot;/>"><span>The %RSD for the D(v, 0.9) must be not more than 15%</span></span></div></div></div><div class="summaryHiddenOff"></div></div>
</div>
</div>
</div>
</div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <title value=&quot;Sample Calculation&quot;/>
                        <description value=&quot;The particle size result is calculated automatically by the instrument software for each sample.&quot;/>
                        <code>
                            <text value=&quot;Calculation&quot;/>
                        </code>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Sample Calculation&quot;>"> - Sample Calculation</span> - <span style="white-space:normal;">Calculation</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Sample Calculation&quot;>">Title: </span><span>Sample Calculation</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <code>
                            <text value=&quot;Calculation&quot;/>">Code: </span><span style="white-space:normal;">Calculation</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <description value=&quot;The particle size result is calculated automatically by the instrument software for each sample.&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <description value=&quot;The particle size result is calculated automatically by the instrument software for each sample.&quot;>">The particle size result is calculated automatically by the instrument software for each sample.</span></div>
</div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <title value=&quot;Reporting&quot;/>
                        <description value=&quot;Report the average value as per specification&quot;/>
                        <code>
                            <text value=&quot;Reporting&quot;/>
                        </code>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Reporting&quot;>"> - Reporting</span> - <span style="white-space:normal;">Reporting</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Reporting&quot;>">Title: </span><span>Reporting</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <code>
                            <text value=&quot;Reporting&quot;/>">Code: </span><span style="white-space:normal;">Reporting</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <description value=&quot;Report the average value as per specification&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <description value=&quot;Report the average value as per specification&quot;>">Report the average value as per specification</span></div>
</div>
</div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
</div>
<div class="debugOff"></div>
</div>
</div>
</body>
<style>

@media all {

    /* Rik - consolas works better if text has to align but doesn't look so good.
       text size adjust gives better scaling on mobile devices, and also overrides default behaviour where
       only "full with" text gets scaled (so some divs do, and others dont) 150% looks ok on iPad Safari, but too big on iPad Chrome */
    .divBody { font:10pt 'Verdana'; margin-right:1.5em; margin-top:0.5em; -webkit-text-size-adjust:150%; }

    .indent {
        margin-left:1em; 	/* controls line to line indent */
        text-indent:-1em; 	/* moves text back to right, so that other parts of the div are still at the left */
        margin-right:1em;
        text-indent:0em;
        margin-right:0em;
        margin-top:0.2em;
        margin-bottom:-0.1em;
        padding-bottom:0.1em; /* at bottom of text */
        background-Color:#E6E0E1;
        border:2px solid white;
	    transform:translate(-2px, -2px);
	    border-radius: 5px;
	    visibility:visible; /* this is so that the outer border doesn't hide these */
    }
    .indent-right {
        margin-right:0.7em;
    }
    .indent-no-border {
        margin-left:1em; 	/* controls line to line indent */
        text-indent:-1em; 	/* moves text back to right, so that other parts of the div are still at the left */
        margin-right:1em;
        text-indent:0em;
        margin-right:0em;
        margin-top:0.2em;
        margin-bottom:-0.1em;
        padding-bottom:0.1em; /* at bottom of text */
	    transform:translate(-2px, -2px);
		visibility:visible;
    }
	.bundle { background-Color: #e0dede }
    .bundleBorder {
        border:2px solid #cfcfcf;
	    border-radius: 5px;
	    margin: -1px;
        background-Color: #e0dede;
    }
    .visible { visibility:visible }

    .modifierExtension { font-weight:bold; color:red; }

    .white { background-Color:white }

    .pat { background-Color:#ffe699 }
    .patl2 { background-Color:#fae8b1 }
    .patl3 { background-Color:#fff1c7 }
    .patl4 { background-Color:#fff4d4 }
    
    .body { background-Color:#e3cd8a }
    .bodyl2 { background-Color:#e0cf99 }

    .comp { background-Color:#F5DEB3 }
    .compl2 { background-Color:#f5e4c4 }
    .compl3 { background-Color:#f5e8d0 }
    .compText { background-Color:#f5e8d0 }

    .mpd { background-Color:#ffe699 }
    .mpdl2 { background-Color:#fcebb6 }
    .mpdl3 { background-Color:#fcf0ca }
    .mpdl4 { background-Color:#fff6d9 }
    .mpdl5 { background-Color:#fffaeb }

    .task { background-Color:#fcb568 }
    .task2 { background-Color:#ffd8ad }
    .task3 { background-Color:#ffdfbd }

    .proc { background-Color:#fcb568 }
    .procl2 { background-Color:#ffd8ad }
    .procl3 { background-Color:#ffdfbd }

    .prov { background-Color:#b4b4b4 }

    .cui { background-Color:#d9d2e9 }
    .cuidetails { background-Color:#e6e1f0 }
    .cuidetails2 { background-Color:#ebe9f0 }

    .sbd,.hcs { background-Color:#affad5 }
    .sbddetails,.hcsl2 { background-Color:#c7fce2 }
    .sbddetails2,.hcsl3 { background-Color:#d4fae8 }
    .sbddetails3 { background-Color:#e3fcf0 }

    .apd { background-Color:#d5a6bd; word-wrap:break-all; }
    .apdl2 { background-Color:#e3c5d4; }
    .apdl3 { background-Color:#edd1df; }

    .allergy { background-Color:#d5a6bd; }
    .allergyl2 { background-Color:#d6bcc9; }
    .allergyl3 { background-Color:#d9cad1; }
    .allergyl4 { background-Color:#d9d4d6; }

    .adverseEvent { background-Color:#d6bcc9; }
    .adverseEventl2 { background-Color:#d9cad1; }
    .adverseEventl3 { background-Color:#d9d4d6; }

    .ppd { background-Color:#b6d7a8; width:70%; }
    .ppdl2, .ppdpackage { background-Color:#c2deb6 }
    .ppdl3, .ppdpackageitem { background-Color:#daf0d1 }
    .ppdl4  { background-Color:#e4f2df }

    .obs { background-Color:#b6d7a8; width:75%; }
    .obsl2 { background-Color:#c2deb6 }
    .obsl3 { background-Color:#d4ebca }

    .obsDef { background-Color:#93ad87; width:75%; }
    .obsDefl2 { background-Color:#a8c79b; }
    .obsDefl3 { background-Color:#b6d7a8; }

    .enc { background-Color:#d8f7a3 }
    .encl2 { background-Color: #e1fcb3 }
    .encl3 { background-Color:#e7ffbd }

    .prr { background-Color:#bfbfbf }
    .prrl2 { background-Color:#cfcfcf }
    
    .orgdark { background-Color:#bfbfbf }
    .file { background-Color:#bfbfbf }

    .pra { background-Color:#cfcfcf }
    .org { background-Color:#cfcfcf }
    .act { background-Color:#cfcfcf }
    .plan { background-Color:#cfcfcf }

    .imm { background-Color:#83bdd6 }
    .imml2 { background-Color: #afcedb }
    .imml3 { background-Color: #bde1f0 }

    .org2,.act2,.pral2,.planl2 { background-Color:#dfdfdf }
    .loc { background-Color:#dfdfdf }
    .org3,.act3,.planl3 { background-Color:#ededed }
	.org4,.act4,.planl4 { background-Color:#f2f2f2 }
	.org5 { background-Color:#f7f7f7 }

    .man {  background-Color:#a4c1f4 }
    .manl2 { background-Color:#c2d7fc }
    .manl3 { background-Color:#d9e7ff }
    .manl4 { background-Color:#e8f1ff }
    .manl5 { background-Color:#f5f9ff }

    .med {  background-Color:#a4c1f4 }
    .medl2 { background-Color:#b8cef5 }
    .medl3 { background-Color:#cedcf5 }
    .medl4 { background-Color:#dfe7f7 }

    .ing { background-Color:#f4cccc }
    .ingsub { background-Color:#f7d7d7 }
    .ingsubstr { background-Color:#fce3e3 }
    .ingrefsub { background-Color:#ffeded }

    .subd { background-Color:#b4a7d6 }
    .regauth { background-Color:#82e0dc }
    .regauthl2 { background-Color:#98ebe7 }
    .regauthcase { background-Color:#98ebe7 }
    .regauthcaseapp { background-Color:#aaf2ef }

    .medreq { background-Color:#82e0dc }
    .medreql2 { background-Color:#98ebe7 }

    .medstat { background-Color:#82e0dc }
    .medstatl2 { background-Color:#c2fffc }
    .medstatl3 { background-Color:#d4fffd }
    .medstatl4 { background-Color:#e8fcfc }
    .medstatl5 { background-Color:#f2fcfc }

    .serviceReq { background-Color:#c2fffc }
    .serviceReql2 { background-Color:#d4fffd }
    .serviceReql3 { background-Color:#e8fcfc }
    .serviceReql4 { background-Color:#f2fcfc }

    .supplyDel { background-Color:#5dded8 }
    .supplyDell2 { background-Color:#93ede9 }

	.cond { background-Color:#f4cccc }
    .condl2 { background-Color:#f5dcdc }
    .condl3 { background-Color:#f5e6e6 }

    .devd { background-Color:#b7b7b7 }
    .devdl2 { background-Color:#cfcfcf }
    .devdl3  { background-Color:#e3e3e3 }

    .flag { background-Color:#fffd8f }
    .flagl2 { background-Color:#fffda1 }
    .flagl3 { background-Color:#fcfbb6 }

    .consent { background-Color:#ffb68f }
    .consentl2 { background-Color:#fcc7ac }
    .consentl3 { background-Color: #ffd3bd }
    .consentl4 { background-Color: #ffe0d1 }

	.openButton { width: 12px;
					position: absolute;
        			top: 0px;
       				right: 2px;
       				color:white;
       				visibility:hidden }

 	div:has(div.summaryHidden) > span.openButton { visibility:visible }

	.noUnderline { text-decoration: none; color: inherit; }
	.noUnderline:hover { text-decoration: underline; color: revert; }

    .grey { color:dimgray  }
    .greyOff { color:dimgray; display:none  }
    .debug { color:#990000  }
    .debugOff { display:none }
    .debugBorder { visibility:visible }
    .debugOffBorder { visibility:hidden }

    .summaryHiddenOff { }
    .summaryHidden { display:none }
    .summaryShowsOff { display:none }
    .summaryShows { }

    .remove,.imageRemove,.commentRemove,.provenanceRemove,.taskRemove,.htmlTableRemove { }
    .removeOff,.imageRemoveOff,.commentRemoveOff,.provenanceRemoveOff,.taskRemoveOff,.htmlTableRemoveOff { display:none }

    .resetDebug { visibility:visible; }

	.controls { position: sticky;
				top:8px;
				float:right;
				clear:right;
				width:290px;
				overflow: hidden;
				height:18px;
				border: solid 1px grey;
				border-radius: 5px;
				margin-right: 23px;
				z-index:99;
				background-Color:#ffe699;
				font:10pt 'Verdana';
	}

	.image { position: sticky;
				top:8px;
				float:right;
				clear:right;
				border: solid 1px grey;
				border-radius: 5px;
				padding: 2px;
				z-index:99;
				margin-right: 23px;
				background-color:white;
				font:10pt 'Verdana';
	}

	.comment { position: sticky;
				top:8px;
				width:297.5px;
				border-radius: 5px;
				float:right;
				clear:right;
				border: solid 1px grey;
				z-index:99;
				margin-right: 23px;
				padding-left: 8px;
				background-color:white;
				font:10pt 'Verdana';
	}
	.instanceComment { text-decoration-line: underline;
					   text-decoration-style: dotted;
					   text-decoration-color: red; cursor: help; }

	.narrativeLink { text-decoration-line: underline;
					   text-decoration-style: dotted;
					   text-decoration-color: green; }
					   
    .bold { font-weight:bold; }
    .italic { font-style:italic; }

	.hand { cursor: pointer; }
    .button { text-decoration:underline; cursor: pointer; color:gray; }
    .buttonLabel { color:gray; }
    .buttonNoUnderline { cursor: pointer; color:gray; }
    .buttonNoUnderlineHidden { cursor: pointer; color:#ffe699; }
    .buttonNoUnderlineHidden:hover { color:gray; }

	sup { cursor: default; }
	.rotate-left { transform: rotate(-90deg) }

	.plainLink  { text-decoration: none; color: inherit; }
	.plainLink:visited { text-decoration: none; color: inherit; }

	.greyScale { -moz-filter:grayscale(100%);webkit-filter:grayscale(100%);filter:gray;filter:grayscale(100%) }
	
    .json-key { color:#000096 }
    .json-string { color:#994328 }
    .json-number { color:blue }
    .json-boolean { color:red }
    .json-null { color:green }
	
	th { background-color: #81BEF7; }
	td { padding: 3px; font:10pt 'Verdana'; }
	th { padding: 3px; font:10pt 'Verdana'; } /* seems to need setting explicitly, on site */

	.raised-border-td {
	  position: relative;
	}
	.raised-border-td::before {
	  content: "";
	  position: absolute;
	  top: -1px; /* Raise the border by 1px */
	  left: 0;
	  width: 100%;
	  border-top: 1px solid #000; /* 1px solid black border on the top */
	}
	
	table.rounded-corners {
	 	/* Change these properties */
	 	--border: 1px solid black;
	 	border-radius: 5px;
		font:10pt 'Verdana';
	
	 	/* Don't change these properties */
	 	border-spacing: 0;
	 	border-collapse: separate;
	 	border: var(--border);
	 	overflow: hidden;
	}
	table.white { background-color:white; }
	
	/* Apply a border to the right of all but the last column */
	table.rounded-corners th:not(:last-child),
	table.rounded-corners td:not(:last-child) {
	 border-right: var(--border);
	}
	
	/* Apply a border to the bottom of all but the last row */
	table.rounded-corners>thead>tr:not(:last-child)>th,
	table.rounded-corners>thead>tr:not(:last-child)>td,
	table.rounded-corners>tbody>tr:not(:last-child)>th,
	table.rounded-corners>tbody>tr:not(:last-child)>td,
	table.rounded-corners>tfoot>tr:not(:last-child)>th,
	table.rounded-corners>tfoot>tr:not(:last-child)>td,
	table.rounded-corners>tr:not(:last-child)>td,
	table.rounded-corners>tr:not(:last-child)>th,
	table.rounded-corners>thead:not(:last-child),
	table.rounded-corners>tbody:not(:last-child),
	table.rounded-corners>tfoot:not(:last-child) {
	 border-bottom: var(--border);
	}
	td.centred { text-align:center; }
}
	</style><!--
		Status information:
		First resource in bundle:PlanDefinition
		Single resource bundle:false
		Single resource bundle Not Patient Or Bundle:false
		Single resource Not Patient:false
		Patient document:false
		General Bundle:false
		Not patient related:true
		=>Patient Centric Mode:false
		SubstanceDef Centric Mode:true
		Assumed profile:-->
</html>


---

File: repos/HL7_SLASH_uv-dx-pq/input/pagecontent/anal_proc.md

Details about test methods used to analyze substances and products, including compendial and non-compendial testing.

### Product 

<table>
<tr><td><img src="analytical procedures.png" width="600"/></td></tr>
</table>

#### Resources
<table>

<tr><td>MedicinalProductDefinition</td><td>The drug product (Stelbat tablets, 20mg)</td></tr>
<tr><td>SubstanceDefinition</td><td>Substances used during the analysis process</td></tr>
<tr><td>PlanDefinition</td><td>Describes the analysis process</td></tr>
<tr><td>SpecimenDefinition</td><td>Describes the storage conditions and duration for each test</td></tr>
<tr><td>Observation Definition</td><td>Each individual analysis test and acceptance criteria; also used to group tests</td></tr>
</table>

#### Examples
**CTD section synthetic source data samples** (PDF):
- 3.2.P.5 Control of Drug Product
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.5.2_Analytical_Procedures-G1113-Assay-ID-Deg-Sample-Prep.pdf ">3.2.P.5.2 Analytical Procedures</a>

**XML and JSON examples** of synthetic quality data:
- <a href="Bundle-bundle-analytical-procedure-pq-ex1-prod.xml.html">Product Analytical Procedure example XML</a>
- <a href="Bundle-bundle-analytical-procedure-pq-ex1-prod.json.html">Product Analytical Procedure example JSON</a>

**HTML presentation examples** of synthetic quality data:
- <a href="anal_proc_rend_p.html">Drug Product Analytical Procedures</a> - Note that HTML examples represent ways to create human-readable output using structured quality data (see section 1.2 Scope).

### Substance
<table>
<tr><td><img src="substance_analytical_procedures.png" width="600"/></td></tr>

</table>
 
#### Resources
<table>

<tr><td>SubstanceDefinition</td><td>Substances to be analyzed and also ones used during the analysis process</td></tr>
<tr><td>PlanDefinition</td><td>Describes the analysis process</td></tr>
<tr><td>DeviceDefinition</td><td>Devices/equipment used during testing</td></tr>
<tr><td>SpecimenDefinition</td><td>Describes the storage conditions and duration for each test</td></tr>
<tr><td>Observation Definition</td><td>Each individual analysis test and acceptance criteria; also used to group tests</td></tr>
</table>

#### Examples
**CTD section samples** (PDF):
- 3.2.S.4 Control of Drug Substance
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.4.2_Analytical_Procedures-G1112-PSD-Method.pdf ">3.2.S.4.2 Analytical Procedures</a>

**XML and JSON examples** of synthetic quality data:
- <a href="Bundle-bundle-analytical-procedure-pq-ex2-sub.xml.html">Substance Analytical Procedure example XML</a>
- <a href="Bundle-bundle-analytical-procedure-pq-ex2-sub.json.html">Substance Analytical Procedure example JSON</a>

**HTML rendering** of synthetic quality data:
- <a href="anal_proc_rend_s.html">Drug Substance Analytical Procedures</a> - Note that HTML examples represent ways to create human-readable output using structured quality data (see section 1.2 Scope).

### Profiles 
See [Artifacts Index: Domain Bundle Profiles](artifacts.html#domain-bundle-profiles)


---

