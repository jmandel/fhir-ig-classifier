File: repos/HL7_SLASH_genomics-reporting/sushi-config.yaml

id: genomics-reporting
extension:
#  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
#    valueCode: trial-use
#  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
#    valueInteger: 2
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: cg
canonical: http://hl7.org/fhir/uv/genomics-reporting
packageId: hl7.fhir.uv.genomics-reporting
version: 3.0.0
name: GenomicsReporting
title: Genomics Reporting Implementation Guide
status: active
publisher:
  name: HL7 International / Clinical Genomics
  url: http://www.hl7.org/Special/committees/clingenomics
  email: cg@lists.HL7.org
jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001 "World"
description: Guidelines for reporting of clinical genomics results using HL7 FHIR.
license: CC0-1.0
fhirVersion: 4.0.1
parameters:
  apply-publisher: true
  apply-version: true
  shownav: 'true'
  special-url:
    - http://terminology.hl7.org/CodeSystem/sequence-phase-relationship-cs
    - http://terminology.hl7.org/CodeSystem/variant-confidence-status-cs
copyrightYear: 2022+
releaseLabel: STU3

pages:
  index.html:
    title: Home Page
  background.html:
    title: Genomic Background
  general.html:
    title: General Genomic Reporting
  sequencing.html:
    title: Variant Reporting
  pharmacogenomics.html:
    title: Pharmacogenomic Reporting
    generation: markdown
  somatics.html:
    title: Somatic Reporting
  histocompatibility.html:
    title: Histocompatibility and Immunogenetic Reporting
  operations.html:
    title: Genomic Operations
  downloads.html:
    title: Useful Downloads
  v2.html:
    title: "Appendix A: Relation to v2 reporting"
  cgapps.html:
    title: "Appendix B: Clinical Genomic Apps"
  domain.html:
    title: "Appendix C: HL7 Domain Analysis Model"
  usecases.html:
    title: "Appendix D: Query Guidance"
  codings.html:
    title: "Appendix E: External Coding Systems"
    generation: markdown
  conversion.html:
    title: "Appendix F: Conversion from FHIR Core STU3"
  molecularSequence.html:
    title: "Appendix G: Molecular Sequence"
  groupingGuidance.html:
    title: "Appendix H: Grouping Guidance"
  Glossary.html:
    title: "Appendix I: Glossary"
  changes.html:
    title: "Change Log"
    generation: markdown
#  artifacts.html:
#    title: Artifact List


---

// File: input/pages/changes.md

### Version = STU3
- FHIR version: 4.0.1

#### Summary of updates
  
- Introduction of new operations along with extensive implementation guidance and examples. Refer to [here](operations.html) for details.
- Addition of support for GenomicStudy to capture structed, study level metadata. This is back porting a resource introduced in R5 as a set of profiles, code systems, and value sets into this R4 based IG. This includes structured extensions to capture region studied details, and the existing profile was removed. See [here](StructureDefinition-genomic-study.html) for more information.
- Broadening support for biomarker observations by introducing a new, more generic MolecularBiomarker profile, along with refactoring existing profiles and examples. Explore the new profile [here](StructureDefinition-molecular-biomarker.html).
- Improved guidance on the Somatic Reporting page, including a detailed synthetic report and additional example instances. See the new page [here](somatics.html).
- Update in the representation of molecular consequences through the creation of a new Molecular Consequences observation profile that is treated as an Implication. This is a non-passive change, as several Variant(Observation).component and DiagnosticImplication(Observation).component slices were moved to the new profile. See [here](StructureDefinition-molecular-consequence.html) for the new profile. A list of changes includes: 
  * Variant
    * rename component:coding-hgvs to component:representative-coding-hgvs (same LOINC code)
    * rename component:transcript-ref-seq to component:representative-transcript-ref-seq (same LOINC code)
    * rename component:protein-hgvs to component:representative-protein-hgvs (same LOINC code)
    * delete component:amino-acid-change-type
    * move component:molecular-consequence to Molecular Consequence profile, renamed component:feature-consequence
  * DiagnosticImplication
    * move component:functional-effect to Molecular Consequence profile
- Support repeat expansions on the Variant profile. See [here](sequencing.html#defining-repeat-expansion-variants) for guidance on the new slices.

#### Trackers

|JIRA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|Summary|
|----|-------|
|[FHIR-25170](https://jira.hl7.org/browse/FHIR-25170)|Send related artifacts at the Observation.component level|
|[FHIR-28943](https://jira.hl7.org/browse/FHIR-28943)|Introduced new MolecularBiomarker artifacts|
|[FHIR-31030](https://jira.hl7.org/browse/FHIR-31030)|Add pattern for GenomicReport.code for LOINC 51969-4|
|[FHIR-31506](https://jira.hl7.org/browse/FHIR-31506)|Add genetics category to observation profiles|
|[FHIR-32101](https://jira.hl7.org/browse/FHIR-32101)|Observation.component to capture variant inheritance basis|
|[FHIR-32696](https://jira.hl7.org/browse/FHIR-32696)|Improved somatic reporting guidance|
|[FHIR-34418](https://jira.hl7.org/browse/FHIR-34418)|Support repeat expansions|
|[FHIR-35864](https://jira.hl7.org/browse/FHIR-35864)|Add GenomicStudy to support study-level metadata|
|[FHIR-36041](https://jira.hl7.org/browse/FHIR-36041)|New operations, additional guidance|
|[FHIR-37892](https://jira.hl7.org/browse/FHIR-37892)|Add phase data to find subject variants operation|
|[FHIR-37893](https://jira.hl7.org/browse/FHIR-37893)|Add ranges parameter to subject phenotype operations|
|[FHIR-40320](https://jira.hl7.org/browse/FHIR-40320)|Create a new MolecularConsequence profile|
|[FHIR-40805](https://jira.hl7.org/browse/FHIR-40805)|Support copy number range and decimal in Variant profile|
|[FHIR-41245](https://jira.hl7.org/browse/FHIR-41245)|Merge predicted-therapeutic-implication slice into therapeutic-implication|
|[FHIR-41246](https://jira.hl7.org/browse/FHIR-41246)|Remove prognosis slice from implications, and prognostic-implication TBD code|
|[FHIR-41247](https://jira.hl7.org/browse/FHIR-41247)|For therapy- and medication-assessed extensions, move extensions to corresponding component slices|
|[FHIR-41248](https://jira.hl7.org/browse/FHIR-41248)|Add region studied meta data to Genomic Study and remove existing profile|
|[FHIR-41355](https://jira.hl7.org/browse/FHIR-41355)|Add new molecular consequence phenotype operations|
|[FHIR-41587](https://jira.hl7.org/browse/FHIR-41587)|Additional meta data for Genomic Study for regions: studied, called, uncalled|
|[FHIR-41610](https://jira.hl7.org/browse/FHIR-41610)|Guidance for consistently representing Variant value (especially for pertinent negatives)|
|[FHIR-42850](https://jira.hl7.org/browse/FHIR-42850)|Cleanup guidance for star alleles|
|[FHIR-43574](https://jira.hl7.org/browse/FHIR-43574)|Resolve discrepancies on Somatic page|
|[FHIR-43517](https://jira.hl7.org/browse/FHIR-43517)|Enhance somatic table of examples|
|[FHIR-43744](https://jira.hl7.org/browse/FHIR-43744)|Add additional GenomicStudyAnalysis metadata|
|[FHIR-43745](https://jira.hl7.org/browse/FHIR-43745)|Advance several GenomicStudyAnalysis value sets to Preferred|
|[FHIR-45434](https://jira.hl7.org/browse/FHIR-45434)|Add clarity to representation of Significance and Evidence in implication profiles|
|[FHIR-43691](https://jira.hl7.org/browse/FHIR-43691)|Remove Overall Interpretation profile and provide [guidance](StructureDefinition-genomic-report.html#overall-interpretation-and-conclusion) for GenomicsReport attributes for conclusion and conclusionCode.
|[FHIR-43745](https://jira.hl7.org/browse/FHIR-43745)|Advance several GenomicStudyAnalysis value sets to Preferred|


---

// File: input/pages/codings.md

Genomics covers a broad landscape involving many organizations outside of HL7 that have established codes and name systems for different use cases. The <a href="https://confluence.hl7.org/display/TA">HL7 Terminology Authority (HTA)</a> governs the use of terminologies that are external to HL7 and they have begun to document these. As a part of the <a href="https://confluence.hl7.org/display/TSMG">Terminology Services Management Group</a>, the HTA is working with these organizations to establish canonical URIs that can be used as HL7 code and name systems. HL7 has established <a href="https://terminology.hl7.org">terminology.hl7.org (THO)</a> as the authoritative source for code system information, including <a href="https://terminology.hl7.org/external_terminologies.html">external terminologies</a> Many of these are also listed in <a href="{{site.data.fhir.path}}terminologies-systems.html">the core specification guidance</a>.

We have listed many, but not all, of genomics-related systems below. In this table, we provide links for more information -- to the THO or HTA entries when available, or to the organization home page if not. We also list a URI that has been approved by the THO/HTA or by <a href="https://confluence.hl7.org/display/VOC/Vocabulary+Work+Group">Vocabulary Work Group</a>, and a coding system label defined in the <a href="http://www.hl7.org/implement/standards/product_brief.cfm?product_id=279">HL7 Version 2.5.1 Implementation Guide: Laboratory Results Interface</a> (LRI).

For those organizations that list the URI as "Not Assigned," or "Not Official," check the <a href="https://terminology.hl7.org/external_terminologies.html">THO</a> or <a href="https://confluence.hl7.org/display/TA/External+Terminologies+-+Information">HTA sites</a> to see if it has been added since the publication of this IG. If not, we recommend following the <a href="https://confluence.hl7.org/display/TA/External+Code+System+Owner+Engagement+Process">External Code System Owner Engagement Processing</a>. As a last resort, we suggest using the organization site URL, change any "https" to "http", and remove trailing slashes.

Please contact the <a href="https://confluence.hl7.org/display/CGW">Clinical Genomics Workgroup</a> co-chairs if you have any questions about using these genomics code systems.

<style type="text/css">
    table {
        border-collapse: collapse;
        border: 1px solid grey;
        overflow-y: scroll;
        table-layout: fixed;
        overflow: hidden;
        word-break: break-word;
    }
    tbody {
        overflow-x: hidden;
    }
    th {
        background-color: lightgrey;
        border: 1px solid gray;
        border-bottom-width: 0px;
        text-align: center;
        vertical-align: middle;
    }
    td {
        border: 1px solid gray;
        border-width: 1px;
        text-align: left;
        vertical-align: top
    }
    tr:first-child td {
        border-top-width: 0;
        border-left-width: 0;
    }
    tr:nth-child(even) {
        background-color: #eee;
    }
    th:nth-child(1), td:nth-child(1) {
      width: 15%;
    }
    th:nth-child(2), td:nth-child(2) {
      width: 55%;
    }
    th:nth-child(3), td:nth-child(3) {
      width: 30%;
    }
</style>

|Coding System|Description|URI<br><br>LRI Code|
|---|---|---|
|<a href="https://clinicaltrials.gov/">ClinicalTrials.gov</a>|Database of privately and publicly funded clinical studies conducted around the world.|**URI:** http://clinicaltrials.gov (Not Official)<br><br>**LRI Code:** None|
|<a href="https://terminology.hl7.org/CodeSystem-ClinVarV.html">ClinVar Variant ID</a>|ClinVar processes submissions reporting variants found in patient samples, assertions made regarding their clinical significance, information about the submitter, and other supporting data. The alleles described in submissions are mapped to reference sequences, and reported according to the HGVS standard. ClinVar includes simple and complex variants composed of multiple small variants. However, it now also includes large structural variants, which have a known clinical implication. So now simple, complex and many structural variants can all be found in ClinVar. The ClinVar records have a field for Allele ID and for Variant ID. We focus on the variant ID in this guide. This coding system uses the variant ID as the code and the variant name from NCBI’s "variant_summary.txt.gz" file as the code’s print string. The "variant_summary.txt.gz" file caries more than 20 useful fields, including the separate components of the variant name, the cytogenetic location, the genomic reference, etc. So based on the Variant ID, you can use ClinVar to find most you would ever want to know about the variant. In the LHC Clinical Table Search Service and LHC-Forms, we have indexed many of these attributes to assist users and applications that need to find the ID for a particular variant.|**URI:** http://www.ncbi.nlm.nih.gov/clinvar<br><br>**LRI Code:** CLINVAR-V|
|<a href="https://cancer.sanger.ac.uk/cosmic">COSMIC</a>|COSMIC, the Catalogue Of Somatic Mutations In Cancer, is the world's largest and most comprehensive resource for exploring the impact of somatic mutations in human cancer. COSMIC includes only simple somatic (cancer) mutations, one per unique mutation ID. The code is the COSMIC mutation ID, and the name is constructed from Ensembl transcript reference sequences and p.HGVS that use the single letter codes for amino acids. It carries fields analogous to most of the key fields in ClinVar, but its reference sequences are Ensembl transcript reference sequences with prefixes of ENST; it specifies amino acid changes with the older HGVS single letter codes and it carries examples of primary cancers and primary tissues - fields that are not in ClinVar. COSMIC's source table includes multiple records per mutation - one per submission. The COSMIC- SimpleVariants table that we have extracted from the original file includes only one record per unique mutation – a total of more than 3 million records. These contents are copyright COSMIC (http://cancer.sanger.ac.uk/cosmic/license). LHC has produced a lookup table for these records, and for users to look up particular mutation IDs, both with permission from COSMIC. However, interested parties must contact COSMIC directly for permission to download these records.|**URI:** http://cancer.sanger.ac.uk/cancergenome/projects/cosmic (Not Official)<br><br>**LRI Code:** COSMIC-Smpl, COSMIC-Stru|
|<a href="https://medlineplus.gov/genetics/understanding/howgeneswork/genelocation/">Cytogenetic (chromosome) location</a>|Chromosome location (AKA chromosome locus or cytogenetic location), is the standardized syntax for recording the position of genes and large variants. It consists of three parts: the Chromosome number (e.g. 1-22, X, Y), an indicator of which arm – either “p” for the short or “q” for the long, and then generally a series of numbers separated by dots that indicate the region and any applicable band, sub-band, and sub-sub-band of the locus (e.g. 2p16.3). There are other conventions for reporting ranges and locations at the ends of the chromosomes. The table of these chromosome locations was loaded with all of the locations found in NCBI’s ClinVar variation tables. It will expand as additional sources become available. This does not include all finely grained chromosome locations that exist. Users can add to it as needed.|**URI:** (Not Assigned)<br><br>**LRI Code:** Chrom-Loc|
|<a href="https://terminology.hl7.org/CodeSystem-v3-dbSNP.html">dbSNP</a>|The Short Genetic Variations database (dbSNP) is a public-domain archive maintained by NCBI for a broad collection of short genetic polymorphisms. The SNP ID is unique for each position and length of DNA change. For example, a change of three nucleotides will have a different SNP ID than a change of four nucleotides at the same locus, but the code will be the same for all changes at the same locus and with the same length. So, to specify a variation in relation to a reference sequence, both the alt allele and the SNP code must be included.|**URI:** http://www.ncbi.nlm.nih.gov/projects/SNP<br><br>**LRI Code:** dbSNP|
|<a href="https://www.ncbi.nlm.nih.gov/dbvar/">dbVar</a>|dbVar is NCBI's database of genomic structural variations (including copy number variants) that are larger than 50 contiguous base pairs. It is the complement of dbSNP, which identifies variants occurring in 50 or fewer contiguous base pairs. dbVar contains insertions, deletions, duplications, inversions, multi-nucleotide substitutions, mobile element insertions, translocations, and complex chromosomal rearrangements. dbVar carries structured Germline and Somatic variants in separate files. Accordingly, we have divided the coding system for dbVar the same way. This coding system represents the Germline dbVar variants. Its record ID may begin with one of four prefixes: nsv, nssv, esv and essv. These are accession prefixes for variant regions (nsv) and variant calls (or instances, nssv), respectively. Typically, one or more variant instances (nssv – variant calls based directly on experimental evidence) are merged into one variant region (nsv – a pair of start-stop coordinates reflecting the submitters’ assertion of the region of the genome that is affected by the variant instances). The “n” preceding sv or indicates that the variants were submitted to NCBI (dbVar). The prefix, “e” for esv and essv represent variant entities (corresponding to NCBI’s nsv and nssv) that were submitted to EBI (DGVa). The relation between variant call, and variant region, instances is many to one. The LHC lookup table for dbVar germline variations includes both variant instances (essv or nssv) and the variant region records (nsv, esv). Users can sub-select by searching on the appropriate prefix.|**URI:** (Not Assigned)<br><br>**LRI Code:** dbVar-GL, dbVar-Som|
|<a href="https://www.ncbi.nlm.nih.gov/gene">NCBI Gene Codes</a>|Gene supplies gene-specific connections in the nexus of map, sequence, expression, structure, function, citation, and homology data.When applicable, this variable identifies the gene on which the variant is located. The gene identifier is also carried in the transcript reference sequence database, and is part of a full HGVS expression. Not all genes have HGNC names and codes so NCBI has created gene IDs that cover the genes that are not registered by HGNC. For example, SHOX (HGNC:10853) is in the pseudoautosomal region of ChrX and ChrY. NCBI gene symbols are 'SHOX' on ChrX and 'SHOX-2' on ChrY.|**URI:** (Not Assigned)<br><br>**LRI Code:** NCBI-gene|
|<a href="http://glstring.org">GL String</a>|The GL String Code (GLSC) code system combines Genotype List String (GL String) grammar with established HLA and KIR nomenclatures, thereby specifying a syntax for encoding of nomenclature-level genotyping results. The established HLA and KIR nomenclatures are primarily concerned with identification and characterization of individual alleles, and do not incorporate a grammar for genotyping results. GL String grammar is a string format for genotyping results from genetic systems with defined nomenclatures, such as HLA and KIR. In addition to genotyping results, the grammar can also describe data analysis artifacts such as multi-locus (multi-gene) haplotypes. From a terminology standpoint, the result of adding a compositional grammar to an established code system such as HLA or KIR nomenclature is a new code system, because the grammar may be used to construct expressions not explicitly defined in the original system as concept codes.|**URI:** http://glstring.org (Not Official)<br><br>**LRI Code:** None|
|<a href="https://terminology.hl7.org/CodeSystem-v3-hgnc.html">HGNC</a>|The HUGO Gene Nomenclature Committee (HGNC) table carries the gene ID, gene symbol and full gene name. Gene IDs must be sent as codes and begin with "HGNC:". Gene symbols should be sent as display. GENE IDs are specific to the species, whereas gene symbols and names are shared by all species with the same gene. The HGNC-Symb table provided by HUGO carries only human genes and is available in a table by LHC. The code for this coding system is the HGNC gene code, the "name" or print string is the HGNC gene symbol. More than 28,000 human gene symbols and names have been assigned so far, including almost all of the protein coding genes. NCBI creates what might be thought of as interim codes. Older systems might send HGNC gene IDs without the "HGNC:" prefix. This is not following the guidance of the creators of the code system, and introduces ambiguity. So caution must be taken to confirm alignment. HGNC also provides an index on gene families/groups. GeneGroup IDs do not begin with "HGNC:", so care must be made to ensure alignment of concepts when viewing an HGNC ID from an older system that may be referring to the GeneID and not a gene group. For example, <a href="https://www.genenames.org/data/genegroup/#!/group/588">588</a> refers to the HLA gene family, but <a href="https://www.genenames.org/data/gene-symbol-report/#!/hgnc_id/HGNC:588">HGNC:588</a> identifies the ATG12 gene.|**URI:** http://www.genenames.org (Gene)<br>http://www.genenames.org/genegroup (Group)<br><br>**LRI Code:** HGNC-Symb|
|<a href="https://terminology.hl7.org/CodeSystem-v3-hgvs.html">HGVS</a>|The HGVS Nomenclature is an internationally-recognized standard for the description of DNA, RNA, and protein sequence variants. It is used to convey variants in clinical reports and to share variants in publications and databases. The format of the HGVS representation is "reference:description" where the reference is the reference sequence, and the description has the format of "prefix.position(s) change," where the prefix indicates indicates the type of reference sequence used, and the position(s) change describes the location of the change, and the nucleotide(s) changed.|**URI:** http://varnomen.hgvs.org<br><br>**LRI Code:** HGVS.g, HGVS.p, HGVS.c|
|<a href="https://www.ebi.ac.uk/ipd/imgt/hla/">HLA Nomenclature</a>|Human leukocyte antigen (HLA) is a gene family found in the Major Histocompatibility Complex (MHC) of Chromosome 6 in humans. This family includes more than 50 genes. A subset of these are commonly used as markers for histocompatibility testing for stem cell and solid organ transplantation, drug sensitivity, and disease association. The WHO Nomenclature Committee for Factors of the HLA System is responsible for a common nomenclature of HLA alleles, allele sequences, and quality control, to communicate histocompatibility typing information to match donors and recipients. An HLA allele is defined as any set of variations found on a sequence of DNA comprising a HLA gene. So, if there are five variations found in this one gene sequence, this set is defined as one allele (vs. the definition of an allele being the variation found between the test specimen and the reference along a contiguous stretch of DNA). In the case of HLA, the contiguous stretch of DNA represents the entire gene, and the variations do not need to be contiguous within the gene sequence. Each HLA allele name has a unique name consisting of the gene name followed by up to four fields, each containing at least two digits, separated by colons. There are also optional suffixes added to indicate expression status. Individual HLA genes may have thousands of different alleles. For the full specification, please go to this website: http://hla.alleles.org/nomenclature/naming.html. HLA nomenclature can also be used to represent sets of alleles that share sequence identity in the Antigen Recognition Site (ARS). G-groups are alleles that have identical DNA sequences in the ARS, while P-groups are alleles that have identical protein sequences in the ARS. These are described, respectively, in <a href="http://hla.alleles.org/alleles/g_groups.html">http://hla.alleles.org/alleles/g_groups.html</a> and <a href="http://hla.alleles.org/alleles/p_groups.html">http://hla.alleles.org/alleles/p_groups.html</a>.|**URI:** http://www.ebi.ac.uk/ipd/imgt/hla (Not Official)<br><br>**LRI Code:** HLA-Allele|
|<a href="https://terminology.hl7.org/CodeSystem-HPO.html">Human Phenotype Ontology</a>|The Human Phenotype Ontology (HPO) aims to provide a standardized vocabulary of phenotypic abnormalities encountered in human disease. Each term in the HPO describes a phenotypic abnormality, such as atrial septal defect.|**URI:** http://human-phenotype-ontology.org<br><br>**LRI Code:** HPO|
|<a href="https://terminology.hl7.org/CodeSystem-ISCN.html">ISCN</a>|Like HGVS, The International System for Human Cytogenetic Nomenclature (ISCN) is a syntax. It came out of cytopathology and deals with reporting karyotypes down to the chromosome fusions and many types of small copy number variants. However, cytogenetics is out of the scope in this guide. ISCN syntax is often used to report large deletion-duplications in structural variants and to include other variants that have been observed.|**URI:** https://iscn.karger.com<br><br>**LRI Code:** ISCN|
|<a href="https://terminology.hl7.org/CodeSystem-MONDO.html">Mondo Disease Ontology</a>|The Mondo Disease Ontology is a semi-automatically constructed ontology that merges in multiple disease resources to yield a coherent merged ontology that contains cross-species disease terminology. <br/><br/> Numerous sources for disease definitions and data models currently exist, which include HPO, OMIM, SNOMED CT, ICD, PhenoDB, MedDRA, MedGen, ORDO, DO, GARD, etc; however, these sources partially overlap and sometimes conflict, making it difficult to know definitively how they relate to each other. This has resulted in a proliferation of mappings between disease entries in different resources; however mappings are problematic: collectively, they are expensive to create and maintain. Most importantly, the mappings lack completeness, accuracy, and precision; as a result, mapping calls are often inconsistent between resources. The UMLS provides intermediate concepts through which other resources can be mapped, but these mappings suffer from the same challenges: they are not guaranteed to be one-to-one, especially in areas with evolving disease concepts such as rare disease.|**URI:** http://purl.obolibrary.org/obo/mondo.owl<br><br>**LRI Code:** MONDO|
|<a href="https://www.pharmvar.org/">PHARMVAR</a>|The Pharmacogene Variation (PharmVar) Consortium is a central repository for pharmacogene (PGx) variation that focuses on haplotype structure and allelic variation. The major focus of PharmVar is to catalogue allelic variation of genes impacting drug metabolism, disposition and response and provide a unifying designation system (nomenclature) for the global pharmacogenetic/genomic community. Efforts are synchronized between PharmVar, the Pharmacogenomic KnowledgeBase, and the Clinical Pharmacogenetic Implementation Consortium.|**URI:** http://www.pharmvar.org<br><br>**LRI Code:** Star-Allele|
|<a href="https://terminology.hl7.org/CodeSystem-v3-refSeq.html">RefSeq</a>|The NCBI Reference Sequence Database (RefSeq) is a set of reference sequences including genomic, transcript, and protient. RefSeqs include a prefix to describe the type of reference, such as NC_ or NG_. Those prefixed with "NC_" represent the whole genomic RefSeq for individual chromosomes. Those prefixed with "NG_" represent genes with all of their introns and flanking regions and other larger or smaller genomic sequences. These are available separately in the NCBI source data file, which includes all human RefSeqs (including those with prefix of NR_ or XM_): see ftp://ftp.ncbi.nlm.nih.gov/genomes/Homo_sapiens|**URI:** http://www.ncbi.nlm.nih.gov/refseq<br><br>**LRI Code:** RefSeq-G, RefSeq-P, RefSeq-T|
|<a href="https://terminology.hl7.org/CodeSystem-SO.html">Sequence Ontology</a>|Collaborative ontology project for the definition of sequence features used in biological sequence annotation.|**URI:** http://www.sequenceontology.org<br><br>**LRI Code:** None|


---

// File: input/pages/pharmacogenomics.md


### Building a Pharmacogenomic Report: An Example

This section provides a walk-through of mapping from an example Pharmacogenomics (PGx) report to FHIR using the structure definitions and guidance defined in this IG. The PGx report is represented as a Genomic Report. The related observations and other resources are available as links in the table at the bottom of this section. The JSON representation of this report can be found [here](DiagnosticReport-PGxGenomicReportEMERGE.json.html).

A PGx report focuses on the impacts of a patient's genetics to the behavior of medications, and can provide recommended adjustments to medication based on these impacts. The intention of this page is to provide a “User Guide”, based on a specific report example, highlighting how the defined profiles can be used together to encode important relations in PGx reporting. The report and images for this guide are built upon work done by the eMERGE (Electronic Medical Records and Genomics) program, funded by the National Human Genome Research Institute (NHGRI). The Clinical Genomics Working Group has worked closely with eMERGE to integrate community feedback from their initial mapping into this PGx user guide.

### Ordering a Pharmacogenomic Test

In order to receive a PGx report, you must first order a PGx test. Genomic tests, like all laboratory tests, are ordered using the [Service Request](http://hl7.org/fhir/servicerequest.html) resource. The example report in this section is based on a pre-coordinated gene panel defined by the sequencing laboratory. As such, the “code” element on the PGx report aligns with a pre-coordinated “code” element on the corresponding ServiceRequest, though the laboratory may provide additional codes as well. Additional structure may be in scope for the report if additional “orderDetail” data are present in the Service Request or if supporting information such as current medications are available during generation. An overview of the general relationships involved in ordering a report and receiving the results can be found [here](general.html#relationships).

```xml
<ServiceRequest xmlns="http://hl7.org/fhir">
 <id value="eMERGEServiceRequest"/>
 ...
 <intent value="order"/>
 <code>
   <coding>
     <system value="http://example.org/hgsc.bcm.edu/lab-test-codes/"/>
     <code value="emerge-seq-ngs-pnl"/>
   </coding>
 </code>
 <subject>
   <reference value="Patient/CGPatientExample01"/>
 </subject>
 <specimen>
   <reference value="Specimen/GenomicSpecimenExample01"/>
 </specimen>
</ServiceRequest>
```

### How to use the Report Mapping Images

The guide is based on three figures. Figure 1 is an overview of the components of a PGx report. Figure 2 is a schema describing the use of the components from the HL7 Clinical Genomics WG Implementation Guide, and figure 3 is an example report with each element of the report mapped to the schema in figure 2. Use the numbers in each figure to find where the section/element goes. For example, #7 in figure 1 is information about the performing lab. In figure 2, #7 indicates an instance of the Organization Resource for the performer which would be a link through the performer element in the Genetics Diagnostic report. In figure 3, #7 indicates specific information about the performing lab found in the sample report. Thus, the specific performing lab information in figure 3 maps to an instance profile of Organization Resource linked to the Genetic Diagnostic report (#7 in figure 2).

In addition to the numbers, the colors in Figure 1 are intended to help guide the grouping of information in the report.

These images should provide you with a clear understanding of how the various FHIR PGx resources may be used when constructing a PGx report.

{% include img.html img="pgx-guidance-figure-1.jpg" caption="Figure 1: Color-coded/Numbered “Legend” for PGx Report" %}

### Example Schema for PGx Reporting

The Schema below depicts a “decomposition” of the PGx FHIR resources used to construct the example report. The color coding and numbers in the schema are mapped via the legend (image above) to the detailed PGx report shown in Figure #3.

{% include img.html img="pgx-guidance-figure-2.jpg" caption="Figure 2: Example PGx Report Schema" %}

This PGx report, like all genomic reporting, is packaged with the [diagnostic report](StructureDefinition-genomic-report.html) profile. It conveys metadata about the overall report via the [genomic study profile](StructureDefinition-genomic-study.html) and carries multiple “result” [Observations]({{site.data.fhir.path}}observation.html).
All of the observation findings may “hang” directly off of the [Genomic Report](StructureDefinition-genomic-report.html). <!--However, they can also be part of group referenced by a grouping observation. The grouping observation here has observation.code for the 'Group'/'Panel' NCI Metathesaurus term. It is used in this example PGx report to group all PGx-specific content (Therapeutic Implications and their derived Variants and Genotypes) into one section for viewing purposes. Note that the grouping by this profile does not add additional meaning to its child Observations. It is used just for convenience of presentation. Other configurations of one or more grouping Observations would also be valid, as no pre-coordinated groupings are recommended in this IG. If a group represents a specific panel then a specific panel code (such as a LOINC code) could be used as the observation.code for the grouping observation to give the grouping observation meaning.-->

All pharmacogenomic implications are intended to be communicated using components within the [Therapeutic Implication](StructureDefinition-therapeutic-implication.html) profile. The Medication-assessed component of the Therapeutic Implication profile, is the place to communicate the medication whose implication is being described, including a place for the coded value of the medication. Because this is an international profile, no guidance is provided on the medication coding system to be used. Instead, the appropriate code system for the jurisdiction, can and should be used.

To associate a Therapeutic-implication instance with a proposed recommended action (e.g., discontinuing a medication, altering dosage, or "choose alternative medication") one can use the [Medication Recommendation](StructureDefinition-medication-recommendation.html), potentially with a [MedicationStatement](http://hl7.org/fhir/R4/medicationstatement.html) instance. Use [RelatedArtifact](http://hl7.org/fhir/R4/extension-workflow-relatedartifact.html) in Therapeutic-implication to supply additional or supporting information, such as CPIC guidelines. In this report example, the text which explains the methodology of the test, was modeled using the [PlanDefinition](https://www.hl7.org/fhir/plandefinition.html) resource (#5 in the schema). The clinical genomics work group has not yet determined the value of providing a profile on PlanDefinition, and requests community feedback on encoding testing methodology details.

{% include img.html img="pgx-guidance-figure-3.jpg" caption="Figure 3: Detailed PGx Report Example - Mapped to Schema" %}

### Creating the Example FHIR PGx Report

In the example used in this User Guide, the PGx results are based on diplotypes (star alleles), and the underlying variant observations, found in each relevant PGx gene that is covered by the PGx gene panel. These diplotypes are then used as a basis for relating PGx gene-drug knowledge implications. Note that there was also the choice in this use case, to derive Implication statements from one or more genotype Observations and not from variants directly.

Below is one of the therapeutic implications in the report:

```xml
<Observation xmlns="http://hl7.org/fhir">
...
 <extension url="http://hl7.org/fhir/StructureDefinition/workflow-relatedArtifact">
   <valueRelatedArtifact>
     <type value="citation"/>
     <url value="https://cpicpgx.org/guidelines/guideline-for-warfarin-and-cyp2c9-and-vkorc1/"/>
   </valueRelatedArtifact>
 </extension>
 <code>
   <coding>
     <system value="http://hl7.org/fhir/uv/genomics-reporting/CodeSystem/tbd-codes-cs"/>
     <code value="therapeutic-implication"/>
   </coding>
 </code>
 <derivedFrom>
   <reference value="Observation/Pgx-geno-1002"/>
   <display value="CYP2C9*1/*1"/>
 </derivedFrom>
 <derivedFrom>
   <reference value="Observation/Pgx-geno-1003"/>
   <display value="VKORC1 rs9923231 C/T"/>
 </derivedFrom>
 <component>
   <code>
     <coding>
       <system value="http://loinc.org"/>
       <code value="51963-7"/>
     </coding>
   </code>
   <valueCodeableConcept>
     <coding>
       <system value="http://ncimeta.nci.nih.gov"/>
       <code value="C0043031"/>
       <display value="warfarin"/>
     </coding>
   </valueCodeableConcept>
 </component>
 <component>
   <code>
     <coding>
       <system value="http://hl7.org/fhir/uv/genomics-reporting/CodeSystem/tbd-codes-cs"/>
       <code value="therapeutic-implication"/>
     </coding>
   </code>
   <valueCodeableConcept>
     <system value="http://loinc.org"/>
     <code value="LA25391-6"/>
     <display value="Normal Metabolizer"/>
   </valueCodeableConcept>
 </component>
 <component>
   <code>
     <coding>
       <system value="http://hl7.org/fhir/uv/genomics-reporting/CodeSystem/tbd-codes-cs"/>
       <code value="conclusion-string"/>
     </coding>
   </code>
   <valueString value="This individual is homozygous for the normal allele for the CYP2C9 gene. Based on the genotype result, this patient is predicted to have normal CYP2C9 function. This individual is also heterozygous for the variant allele for the VKORC1 gene. Expression level of the VKORC1 gene is associated with warfarin sensitivity. Based on the genotype result, this patient is predicted to have medium sensitivity to warfarin."/>
 </component>
</Observation>
```

The following table contains additional information regarding the profiles used in mapping this example PGx report to FHIR, as well as individual example instances

| **_Profile_**| **_Description of PGx usage_**| **_Example links_**| **_Example Notes_**|
| --- | --- | --- | --- |
| [Genomic Report](StructureDefinition-genomic-report-definitions.html) | Intended to capture a single report, with a Code element aligning with a Service Request and multiple genomic result Observations. Will also capture report conclusions.<br/> Not suitable for displaying summary information covering multiple reports. Extensions on DiagnosticReport can point to other reports. | [#DiagnosticReport-PGxGenomicReportEMERGE.html](DiagnosticReport-PGxGenomicReportEMERGE.html) | <!--Results may be on the report directly or referenced through grouping observations. -->This report has results directly referenced<!-- and 3 Observations used to group the PGX data into sections for viewing purposes. For an example without the grouping observations see [Emerge report without grouping](DiagnosticReport-PGxGenomicReportEMERGE.html)--> |
| [Genomic Study](StructureDefinition-genomic-study.html) | Describes the metadata about the study that was performed, including references to various analyses that were performed, and references to files created during the process. Will also create a reference describing metadata like the Regions Studied. |  [#Procedure-PGXGenomicStudy.html](Procedure-PGXGenomicStudy.html) | A simple example of a Genomic Study profile for a PGX panel. |
| [Genotype](StructureDefinition-genotype.html) | Connects haplotype or variant observations for homologous positions in the genome, or sets of homologous positions. In practice, it takes the capability of performing bioinformatic calculations to normalize across variant data to bring genotypes together. Genotype allows the sender to communicate a relationship between variant observations without the recipient needing to calculate the relationship. | [#Observation-Pgx-geno-1001.html](Observation-Pgx-geno-1001.html) <br/> [#Observation-Pgx-geno-1002.html](Observation-Pgx-geno-1002.html) <br/> [#Observation-Pgx-geno-1003.html](Observation-Pgx-geno-1003.html) | Genotype names such as star-alleles can appear in PGx reports either with or without a full description of the underlying coded haplotypes and observed variants. Genotype names MAY be coded, but will oftentimes be textual descriptions only. PGx guidance is often available at the level of these genotypes. |
| [Haplotype](StructureDefinition-haplotype.html) | Connects variant observations for changes in the same chromosome. In practice, it takes the capability of performing bioinformatic calculations to normalize across variant data to bring haplotypes together. Haplotype allows the sender to communicate a relationship between variant observations without the recipient needing to calculate the relationship. | (examples TBD) | Haplotype names will be star-alleles and can appear in PGx reports either with or without a full description of the underlying observed variants. Haplotype names SHOULD be coded values. PGx guidance is often available at the level of genotypes (diplotypes). |
| [Variant](StructureDefinition-variant.html) | Intended for communication of positional information derived from the patient’s sample. The data should be suitable for calculations involving variant level details, such as clinical decision support or presence of a specific variant in a patient. Variant also carries important observational information about the occurrence of the variant in the patient/sample, and some pre-coordinated annotations such as gene name. More complex annotations such as pathogenicity should use the DiagnosticImplication profile for additional structure.<br/>Not all variants observed in a patient’s sample are required to be included in a report. | [#Observation-Pgx-var-1011.html](Observation-Pgx-var-1011.html)<br/>[#Observation-Pgx-var-1012.html](Observation-Pgx-var-1012.html) <br/>[#Observation-Pgx-var-1013.html](Observation-Pgx-var-1013.html) <br/>[#Observation-Pgx-var-1014.html](Observation-Pgx-var-1014.html) <br/>[#Observation-Pgx-var-1015.html](Observation-Pgx-var-1015.html) <br/>[#Observation-Pgx-var-1016.html](Observation-Pgx-var-1016.html) <br/>[#Observation-Pgx-var-1017.html](Observation-Pgx-var-1017.html) <br/>[#Observation-Pgx-var-1018.html](Observation-Pgx-var-1018.html) | In this example, variants are represented primarily using HGVS, with an Observation value of ‘Present’. This provides a computable observation of change, position in a reference sequence. <br/> Other components could be used to “define” the variant in question, for example ClinVar codes or a VCF column-like representation as seen in other examples. |
| [Therapeutic Implication](StructureDefinition-therapeutic-implication.html) | All pharmacogenomic implications are intended to be communicated using components within the Therapeutic Implication profile, which has properties for observations that convey the potential impact of genomic characteristics on a medication or non-medicinal therapy. The medication-assessed component can be repeated to represent combination therapies. Otherwise, the recommendation is to limit Observations to one drug each to maintain semantic relationships in downstream systems. | [#Observation-TxImp01.html](Observation-TxImp01.html) <br/>[#Observation-TxImp02.html](Observation-TxImp02.html) <br/>[#Observation-TxImp03.html](Observation-TxImp03.html) <br/>[#Observation-TxImp04.html](Observation-TxImp04.html) <br/>[#Observation-TxImp05.html](Observation-TxImp05.html) | In addition to the coded components, the conclusion-string component can provide text that the lab would normally include in a report narrative.<br /><br />Note that one implication can be derived from multiple genotypes and/or variant Observations, and those Observations may derive multiple implications. |
| [Medication Recommendation](StructureDefinition-medication-recommendation.html) | The Medication Recommendation is a recommended action Task describing what sort of change (if any) should be made for a specific medication based on an identified finding. This is a computable specific recommendation for action on a specific medication, such as changing a dose. It is a structured means of reporting recommendations. Here tied to a Therapeutic Implication to provide guidance such as changes to a dose or alternative medications. | [#Task-PGxRecEx01.html](Task-PGxRecEx01.html) <br/>[#Task-PGxRecEx02.html](Task-PGxRecEx02.html)<br/>[#Task-PGxRecEx03.html](Task-PGxRecEx03.html)<br/>[#Task-PGxRecEx04.html](Task-PGxRecEx04.html)<br/>[#Task-PGxRecEx05.html](Task-PGxRecEx05.html) | Not included in this example, ‘Task.focus’ can be used to refer to a MedicationStatement for the patient, if available. <br/>See an alternative example using this pattern at [#Task-MedicationRecommendationExample1.html](Task-MedicationRecommendationExample1.html). |
| [Recommended Action](StructureDefinition-recommended-action.html) (extension) | The recommended action (extension) references a proposed action that is recommended based on the results of the diagnostic report. It is not linked to individual variants and medications. Another possible type of recommendation is for additional follow-up testing of the subject or family members. This is an extension and may not be understood by all systems so care must be made that receivers are able to consume Task resources not normally linked with DiagnosticReports. It is intended as a textual recommendation. The information could also appear in the ‘text’ element of the diagnostic report, which may be improved to support coded data in future releases of FHIR. | | Note that extensions may not be included in generated narrative summaries. |
| [Related Artifact](http://hl7.org/fhir/R4/extension-workflow-relatedartifact.html) (extension) | Captures citations, evidence and other supporting documentation for the observation or report. Included on the DiagnosticReport and Implication Observation structure through an extension.<br /><br />This dataType allows more structure than what would easily be represented in a text narrative.<br /><br />Useful for referring to guidelines, infobutton, lab methodology or any other supporting documentation. | | Note that extensions may not be included in generated narrative summaries. |
| [Genomic Risk Assessment](StructureDefinition-genomic-risk-assessment.html) | While not used in the eMERGE example, the Genomic Risk Assessment is used in a diagnostic report or observation to refer to a RiskAssessment resource. The RiskAssessment resource captures predicted outcomes for a patient or population on the basis of source information. Examples include: A prognosis statement for a particular condition; Risk of health outcome (heart attack, particular type of cancer) on the basis of lifestyle factors and/or family history; List of potential health risks based on a patient's genetic analysis.<br /><br />This resource can be used to represent the results of formal scoring/decision support tools that evaluate risk. It can also be used to capture a practitioner's subjective assessment of the patient's risk based on existing knowledge and previous experience. | | Not used in this example |
| [Plan Definition](https://www.hl7.org/fhir/plandefinition.html) | A plan definition is a pre-defined group of actions to be taken in particular circumstances, often including conditional elements, options, and other decision points. The resource is flexible enough to be used to represent a variety of workflows, as well as clinical decision support and quality improvement assets, including order sets, protocols, and decision support rules. | | In the eMERGE report, this is used to provide additional methodology information, as an alternative to using related artifact or Observation.method. This use is still experimental and has not been included in our example. It is labeled as 'X1' in the figures. |

{: .grid}

This [Artifact List](artifacts.html) provides a comprehensive listing of the FHIR artifacts defined as part of the Genomics Implementation Guide and may be helpful when developing the PGx report.

### Mapping to eMERGE III FHIR Template

Notable changes from the [eMERGE III FHIR Template](https://emerge-fhir-spec.readthedocs.io/en/latest/) docs include:

1. Scope - this example focuses on the PGx panel within the eMERGE report and does not include a separate diagnostic panel.
1. Extensions - the eMERGE ‘summary interpretation text extension’ is now supported through an Observation component. The eMERGE usage of the ‘report disclaimer text extension’ is not included in our example but is seen by the 'X2' label in the figures.
1. Medication Recommendation - the original eMERGE spec did not structure medication recommendation proposals, which were left in plain text comments.

For further information about the eMERGE Program, see: [Pre-Print Journal Article: "Genomic Considerations for FHIR; eMERGE Implementation Lessons"](https://www.biorxiv.org/content/10.1101/2021.01.31.429037v1.full) and [eMERGE Network Website](https://emerge-network.org/).


---

// File: input/pages/spec.md

<!-- spec.md {% comment %}
*****************************************************************************************
*                            WARNING: DO NOT EDIT THIS FILE                             *
*                                                                                       *
* This file is generated by SUSHI. Any edits you make to this file will be overwritten. *
*                                                                                       *
* To change the contents of this file, edit the original source file at:                *
* genomics-reporting/input/pages/spec.md                                                *
*****************************************************************************************
{% endcomment %} -->
### A Heading
You can also use markdown if that's your thing

And an icon: ![resource](icon-resource.png)


---

// File: input/fsh/Aliases.fsh

// Code Systems
Alias: $LNC = http://loinc.org
Alias: $SCT = http://snomed.info/sct
Alias: $UCUM = http://unitsofmeasure.org
Alias: $NCIT = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl
Alias: $ICD10CM = http://hl7.org/fhir/sid/icd-10-cm
Alias: $RXN = http://www.nlm.nih.gov/research/umls/rxnorm
Alias: $GTR = http://www.ncbi.nlm.nih.gov/gtr
Alias: $CLINVAR = http://www.ncbi.nlm.nih.gov/clinvar
Alias: $IDTYPE = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $HGNCID = 	http://www.genenames.org
Alias: $HGNCGROUP = http://www.genenames.org/genegroup
Alias: $HGVS = http://varnomen.hgvs.org
Alias: $SPECIMENTYPE = http://terminology.hl7.org/CodeSystem/v2-0487
Alias: $SEQONT = http://www.sequenceontology.org
Alias: $OBSCAT = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $OBSINT = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation
Alias: $DIAGNOSTICSERVICE = http://terminology.hl7.org/CodeSystem/v2-0074
Alias: $TASKSTATUS = http://hl7.org/fhir/task-status
Alias: $TASKINTENT = http://hl7.org/fhir/task-intent
Alias: $REQUESTINTENT = http://hl7.org/fhir/request-intent
Alias: $REQUESTSTATUS = http://hl7.org/fhir/request-status
Alias: $RISKQUAL = 	http://terminology.hl7.org/CodeSystem/risk-probability
Alias: $NCTTRIAL = http://clinicaltrials.gov
Alias: $HPO = http://human-phenotype-ontology.org
Alias: $NCBIREFSEQ = http://www.ncbi.nlm.nih.gov/refseq
Alias: $HLAALLELE = http://www.ebi.ac.uk/ipd/imgt/hla
Alias: $GLSTRING = http://glstring.org
Alias: $PHARMVAR = http://www.pharmvar.org
Alias: $SNP = http://www.ncbi.nlm.nih.gov/projects/SNP
Alias: $ISCN = https://iscn.karger.com //defined in THO with https
Alias: $PARTICIPATIONTYPE = http://terminology.hl7.org/CodeSystem/v3-ParticipationType
Alias: $CONFIDENTIALITY = http://terminology.hl7.org/CodeSystem/v3-Confidentiality
Alias: $GSMETHODTYPE = http://hl7.org/fhir/uv/genomics-reporting/CodeSystem/genomic-study-method-type-cs
Alias: $GSFILETYPE = http://hl7.org/fhir/uv/genomics-reporting/CodeSystem/genomic-study-data-format-cs
Alias: $BIOMARKER = http://hl7.org/fhir/uv/genomics-reporting/CodeSystem/molecular-biomarker-ontology-cs
Alias: $MONDO = http://purl.obolibrary.org/obo/mondo.owl

//Extensions
Alias: operationAllowedType = http://hl7.org/fhir/StructureDefinition/operationdefinition-profile


---

// File: input/fsh/CGCodeSystem.fsh

CodeSystem: SequencePhaseRelationshipCS
Id: sequence-phase-relationship-cs
Title: "Sequence Phase Relationship Codes"
Description: "Code System for specific types of relationships"
* ^url = "http://terminology.hl7.org/CodeSystem/sequence-phase-relationship-cs"
* ^caseSensitive = true
* ^experimental = false
* #Cis "Cis" "Phase is in cis (same chromosome)"
* #Trans "Trans" "Phase is in trans (different chromosomes)"
* #Indeterminate "Indeterminate" "Phase is unable to be determined"
* #Unknown "Unknown" "Phase is unknown"

CodeSystem: TbdCodesCS
Id: tbd-codes-cs
Title: "To Be Determined Codes"
Description: "These codes are 'TBD' codes, meaning they are important concepts but codes have not been identifed in available code systems. The CG WG anticpates these codes maturing over time. We may remove some codes as we refine the concepts, or identify suitable replacement codes from other code systems. As we approach normative and these concepts are validated, for codes that remain, we plan to request formal LOINC codes to replace these temporary codes."
* ^caseSensitive = true
* ^experimental = true
* #associated-therapy "Associated Therapy" "The non-medication therapy (procedure) associated with this implication."
* #molecular-consequence "Molecular Consequence" "The calculated or observed effect of a DNA variant on its downstream transcript and, if applicable, ensuing protein sequence."
* #feature-consequence "Feature Consequence" "The structural implications of a variant (e.g. the variant disrupts a regulatory region, the variant is an inframe insertion)."
* #diagnostic-implication "Diagnostic Implication" "An observation linking a genomic finding with a knowledge base, providing context that may aid in diagnosing a patient with a particular phenotype or condition."
* #therapeutic-implication "Therapeutic Implication" "An observation linking a genomic finding with a knowledge base, providing potential evidence of an interaction with a specified medication or non-medicinal therapy. Ramifications may include alterations in drug metabolism (or pharmacokinetics) that determine the concentration of the drug, prodrug, and/or break-down products over time; alterations in drug efficacy (or pharmacodynamics) that determine how effective a drug is at a given concentration; alterations that alter the risk of adverse drug events, or other types of implications that indicate altered responsiveness to other types of therapies."
* #functional-effect "Functional Effect" "The effect of a variant on downstream biological products or pathways (from Sequence Ontology)."
* #conclusion-string "Conclusion Text" "Clinical conclusion (interpretation) of the observation."
* #condition-inheritance "Condition Inheritance" "The transmission pattern of the condition/phenotype in a pedigree."
* #variant-confidence-status "Variant Confidence Status" "The confidence of a true positive variant call."
* #repeat-motif "Repeat Expansion Motif" "Nucleotides of a repeat expansion motif."
* #repeat-number "Number of Repeat Expansions" "Number of repeats of a repeat expansion."
* #biomarker-category "A characterization of a given biomarker observation."
* #protein-ref-seq "An identifier for the protein reference sequence."

CodeSystem: ClinVarEvidenceLevelCustomCS
Id: clinvar-evidence-level-custom-cs
Title: "ClinVar Evidence Level Example Codes"
Description: "ClinVar contains examples of evidence level concepts that are not conflated with clinical significance. These can be found on  ClinVar https://www.ncbi.nlm.nih.gov/clinvar/docs/review_status/ . These examples are informational only, for copyright information contact the relevant source."
* ^caseSensitive = true
* ^experimental = true
* #4-star	"4 star"	"Supported by practice guideline"
* #3-star	"3 star"	"Supported by expert panel review"
* #2-star	"2 star"	"Supported by submission by multiple-submitters with documentation of criteria for assertion"
* #1-star	"1 star"	"Single submitter providing interpretation and documentation of criteria for assertion"
* #no-star	"no star"	"submitted, no evidence"

CodeSystem: PharmGKBEvidenceLevelCustomCS
Id: pharmgkb-evidence-level-custom-cs
Title: "PharmGKB Evidence Level Example Codes"
Description: "PharmGKB contains examples of evidence level concepts that are not conflated with clinical significance. These can be found on PharmGKB https://www.pharmgkb.org/page/clinAnnLevels. These examples are informational only, for copyright information contact the relevant source."
* ^caseSensitive = true
* ^experimental = true
* #1A	"PGKB 1A"	"High level of evidence. Supported by a guideline or FDA label with variant specific prescribing guidance. Additionally, supported by at least one publication."
* #1B	"PGKB 1B"	"High level of evidence. But, NOT supported by a guideline or FDA label with variant specific prescribing guidance. Additionally, supported by at least one publication."
* #2A	"PGKB 2A"	"Moderate level of evidence. Supported by being a KNOWN pharmacogene on https://www.pharmgkb.org/vips. Also, found in multiple studies but may have a minority of studies that did not support the majority opinion. Supported by at least two indpendent publications."
* #2B	"PGKB 2B"	"Moderate level of evidence. NOT in the list of very important, KNOWN pharmacogenes. Found in multiple studies but may have a minority of studies that did not support the majority opinion. Supported by at least two indpendent publications."
* #3	"PGKB 3"	"Low-level of evidence. Where either the assocation is based on a single study, failed to be reproduced, or preliminary evidence."
* #4	"PGKB 4"	"The evidence does not support an association between the variant and the drug phenotype. (negative)"

CodeSystem: VariantConfidenceStatusCS
Id: variant-confidence-status-cs
Title: "Variant Confidence Status Codes"
Description: "A code that represents the confidence of a true positive variant call."
* ^url = "http://terminology.hl7.org/CodeSystem/variant-confidence-status-cs"
* ^caseSensitive = true
* ^experimental = true
* #high	        "High"	        "High confidence true positive variant call. Suitable for clinical reporting."
* #intermediate	"Intermediate"	"Candidate true positive variant call. Unable to confirm without additional testing."
* #low	        "Low"	        "High confidence false positive variant call."

CodeSystem: CodedAnnotationTypesCS
Id: coded-annotation-types-cs
Title: "Coded Annotation Type Codes"
Description: "Code System for specific types of coded annotations"
* ^caseSensitive = true
* ^experimental = true
* #test-disclaimer "Test Disclaimer" "Test disclaimer with the report"
* #test-methodology "Test Methodology" "Additional details regarding the test methdology"
* #result-confirmation "Result Confirmation" "Additional details regarding the confirmation of the results"

CodeSystem: MolecularBiomarkerOntologyCS
Id: molecular-biomarker-ontology-cs
Title: "Molecular Biomarker Ontology Codes"
Description: "This (experimental) code system provides for a draft categorization of biomarkers along several axes. Based on ballot feedback, the committee anticipates significant revisions."
* ^status = #active
* ^content = #complete
* ^version = "1.0.0"
* ^caseSensitive = true
* ^experimental = true
* ^hierarchyMeaning = #is-a
* #_physiologyBiomarkerCategory "Molecular biomarker physiologic role category" "A category based on the normal bodily function of the biomarker."
  * #antibody "antibody category" "Molecular biomarker physiologic role is an antibody."
  * #antgen "antigen category" "Molecular biomarker physiologic role is an antigen."
  * #cellReceptor "cell receptor category" "Molecular biomarker physiologic role is a cell receptor."
  * #cellReceptorLigand "cell receptor ligand category" "Molecular biomarker physiologic role is a cell receptor ligand."
* #_moleculeTypeBiomarkerCategory "Molecular biomarker molecular type category" "A category based on the type of biomarker molecule."
  * #carbohydrate "carbohydrate category" "Molecular biomarker molecule type is a carbohydrate."
  * #lipid "lipid category" "Molecular biomarker molecule type is a lipid."
  * #nucleicAcid "nucleic acid category" "Molecular biomarker molecule type is a nucleic acid."
  * #protein "protein category" "Molecular biomarker molecule type is a protein. Includes single or multi-subunit proteins with or without post-translational modifications."
* #_methodBiomarkerCategory "Molecular biomarker method type category" "A category based on the measurement ascertainment method of the biomarker. (Methods are drawn from LOINC (https://loinc.org/kb/users-guide/major-parts-of-a-loinc-term/#type-of-method-6th-part) and NCBI Genetic Testing Registry (https://www.ncbi.nlm.nih.gov/gtr/))."
  * #enzymeAssay "enzyme assay category" "Molecular biomarker method is enzyme assay."
  * #flowCytometry "flow cytometry category" "Molecular biomarker method is flow cytometry."
  * #immuneStain "immune stain category" "Molecular biomarker method is immune stain."
  * #immunoassay "immunoassay category" "Molecular biomarker method is immunoassay."
  * #methylationAnalysis "methylation analysis category" "Molecular biomarker method is methylation analysis."
  * #molgen "molecular sequence adjacent category" "Molecular biomarker method is molecular sequence adjacent observation."



---

// File: input/fsh/CGConceptMaps.fsh

// Concept Maps
Instance: dna-change-type-map
InstanceOf: ConceptMap
Usage: #definition
Description: "Mapping from http://loinc.org ValueSet for DNA Change Type to http://www.sequenceontology.org codes"
* title = "DNA Change Type Map"
* experimental = false
* name = "DNAChangeType"
* status = #draft
* copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* publisher = "HL7 International Clinical Genomics Work Group"
* description = "LOINC and SequenceOntology mappings for dna change type"
* sourceCanonical = "http://loinc.org/vs/LL379-9"
* targetCanonical = "http://hl7.org/fhir/uv/genomics-reporting/ValueSet/dna-change-type-vs"
* group[0].source = $LNC
* group[0].target = $SEQONT
* group[0].element[0].code = $LNC#LA9658-1
* group[0].element[0].display = "Wild type"
* group[0].element[0].target[0].code = $SEQONT#SO:0002073
* group[0].element[0].target[0].display = "no_sequence_alteration"
* group[0].element[0].target[0].equivalence = #equivalent
* group[0].element[1].code = $LNC#LA6692-3
* group[0].element[1].display = "Deletion"
* group[0].element[1].target[0].code = $SEQONT#SO:0000159
* group[0].element[1].target[0].display = "deletion"
* group[0].element[1].target[0].equivalence = #equivalent
* group[0].element[2].code = $LNC#LA6686-5
* group[0].element[2].display = "Duplication"
* group[0].element[2].target[0].code = $SEQONT#SO:1000035
* group[0].element[2].target[0].display = "duplication"
* group[0].element[2].target[0].equivalence = #equivalent
* group[0].element[3].code = $LNC#LA6687-3
* group[0].element[3].display = "Insertion"
* group[0].element[3].target[0].code = $SEQONT#SO:0000667
* group[0].element[3].target[0].display = "insertion"
* group[0].element[3].target[0].equivalence = #equivalent
* group[0].element[4].code = $LNC#LA6688-1
* group[0].element[4].display = "Insertion/Deletion"
* group[0].element[4].target[0].code = $SEQONT#SO:1000032
* group[0].element[4].target[0].display = "delins"
* group[0].element[4].target[0].equivalence = #equivalent
* group[0].element[5].code = $LNC#LA6689-9
* group[0].element[5].display = "Inversion"
* group[0].element[5].target[0].code = $SEQONT#SO:1000036
* group[0].element[5].target[0].display = "inversion"
* group[0].element[5].target[0].equivalence = #equivalent
* group[0].element[6].code = $LNC#LA6690-7
* group[0].element[6].display = "Substitution"
* group[0].element[6].target[0].code = $SEQONT#SO:1000002
* group[0].element[6].target[0].display = "substitution"
* group[0].element[6].target[0].equivalence = #equivalent

---

// File: input/fsh/CGDatatypes.fsh

Profile:        CodedAnnotation
Parent:         Annotation
Id:             coded-annotation
Title:          "Coded Annotation"
Description:    "Annotation DataType with added CodeableConcept extension element"
* extension contains AnnotationCode named code 0..1


---

// File: input/fsh/CGExamples.fsh

Instance: HG00403 
InstanceOf: Patient
Description: "Example for Patient. Supports references to subject for multiple genomics reporting profile conforming instances."
* id = "HG00403"
// * text = "Patient example used for subject reference by CG FHIR examples"
* identifier.use = #usual
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#MR "Medical Record Number"
* identifier.system = "http://hospital.example.org"
* identifier.value = "m234"
* name.family = "Everyone"
* name.given[0] = "Alanine"
* name.given[1] = "B."
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "555-555-5555"
* contact.telecom[0].use = #home
* contact.telecom[1].system = #email
* contact.telecom[1].value = "alanine.everyone@example.com"
* gender = #unknown
* birthDate = "1951-01-20"
* address.line = "123 Main St"
* address.city = "Anytown"
* address.postalCode = "12345"
* address.country = "US"
* communication.language = urn:ietf:bcp:47#en-US "English (Region=United States)"
* communication.language.text = "English"

Instance: VariantExample
InstanceOf: Variant
Description: "Example for Variant NM_004448.4(ERBB2):c.2264_2278del"
* id = "VariantExample"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* subject = Reference(HG00403)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code.coding = http://loinc.org#48013-7 "Genomic reference sequence [ID]"
* component[0].valueCodeableConcept.coding = $NCBIREFSEQ#NC_000017.11
* component[1].code.coding = http://loinc.org#69547-8 "Ref nucleotide"
* component[1].valueString = "ATTGAGGGAAAACACAT"
* component[2].code.coding = http://loinc.org#69551-0 "Alt allele"
* component[2].valueString = "T"
* component[3].code.coding = http://loinc.org#81254-5 "Genomic allele start-end"
* component[3].valueRange.low.value = 39723965
* component[4].code.coding = http://loinc.org#92822-6 "Genomic coord system"
* component[4].valueCodeableConcept.coding = http://loinc.org#LA30100-4


Instance: GenomicSpecimenExample01 
InstanceOf: Specimen
Description: "Example for Genomic Specimen"
* id = "GenomicSpecimenExample01"
// * text = "Genomic specimen example"
* status = #available "Available"
* subject = Reference(CGPatientExample01)
* processing.timeDateTime = "2020-10-05"
* type = $SPECIMENTYPE#TISS "Tissue"

Instance: CGPatientExample01 
InstanceOf: Patient
Description: "Example for Patient. Supports references to subject for multiple genomics reporting profile conforming instances."
* id = "CGPatientExample01"
// * text = "Patient example used for subject reference by CG FHIR examples"
* identifier.use = #usual
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#MR "Medical Record Number"
* identifier.system = "http://hospital.example.org"
* identifier.value = "m123"
* name.family = "Everyman"
* name.given[0] = "Adam"
* name.given[1] = "B."
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "555-555-5555"
* contact.telecom[0].use = #home
* contact.telecom[1].system = #email
* contact.telecom[1].value = "adam.everyman@example.com"
* gender = #male
* birthDate = "1951-01-20"
* address.line = "123 Main St"
* address.city = "Anytown"
* address.postalCode = "12345"
* address.country = "US"
* communication.language = urn:ietf:bcp:47#en-US "English (Region=United States)"
* communication.language.text = "English"

Instance: TumorMutationBurdenExample01
InstanceOf: MolecularBiomarker
Description: "Example for Tumor Mutation Burden"
* id = "TumorMutationBurdenExample01"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/molecular-biomarker"
* status = #final "final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#94076-7 "Mutations/Megabase [# Ratio] in Tumor"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueQuantity.value = 250
* component[biomarker-category].code = TbdCodesCS#biomarker-category
* component[biomarker-category].valueCodeableConcept.coding = MolecularBiomarkerOntologyCS#molgen "molecular sequence adjacent category"

Instance: MicrosatelliteInstabilityExample01
InstanceOf: MolecularBiomarker
Description: "Example for MSI"
* id = "MicrosatelliteInstabilityExample01"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/molecular-biomarker"
* status = #final "final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#81695-9 "Microsatellite instability [Interpretation] in Cancer specimen Qualitative"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA14122-8 "Stable"
* component[biomarker-category].code = TbdCodesCS#biomarker-category
* component[biomarker-category].valueCodeableConcept.coding = MolecularBiomarkerOntologyCS#molgen "molecular sequence adjacent category"

Instance: HER2byImmuneStainExample
InstanceOf: MolecularBiomarker
Description: "Example for HER2 by immune stain"
* id = "HER2byImmuneStainExample"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/molecular-biomarker"
* status = #final "final"
* category[labCategory] = $OBSCAT#laboratory
* code = $LNC#18474-7 "HER2 Ag [Presence] in Tissue by Immune stain"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[gene-studied].code = $LNC#48018-6 "Gene studied [ID]"
* component[gene-studied].valueCodeableConcept = http://www.genenames.org#HGNC:3430 "ERBB2"
* component[biomarker-category][0].code = TbdCodesCS#biomarker-category
* component[biomarker-category][0].valueCodeableConcept = MolecularBiomarkerOntologyCS#immuneStain "immune stain category"
* component[biomarker-category][1].code = TbdCodesCS#biomarker-category
* component[biomarker-category][1].valueCodeableConcept = MolecularBiomarkerOntologyCS#cellReceptor	        "cell receptor category"
* component[biomarker-category][2].code = TbdCodesCS#biomarker-category
* component[biomarker-category][2].valueCodeableConcept = MolecularBiomarkerOntologyCS#protein	"protein category"

Instance: HER2byImmunoassayExample
InstanceOf: MolecularBiomarker
Description: "Example for HER2 by immunoassay"
* id = "HER2byImmunoassayExample"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/molecular-biomarker"
* status = #final "final"
* category[labCategory] = $OBSCAT#laboratory
* code = $LNC#72382-5 "HER2 [Units/volume] in Tissue by Immunoassay"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueQuantity.value = 20
* valueQuantity.unit = "IU/mL"
* component[gene-studied].code = $LNC#48018-6 "Gene studied [ID]"
* component[gene-studied].valueCodeableConcept = http://www.genenames.org#HGNC:3430 "ERBB2"
* component[biomarker-category][0].code = TbdCodesCS#biomarker-category
* component[biomarker-category][0].valueCodeableConcept = MolecularBiomarkerOntologyCS#immunoassay	"immunoassay category"
* component[biomarker-category][1].code = TbdCodesCS#biomarker-category
* component[biomarker-category][1].valueCodeableConcept = MolecularBiomarkerOntologyCS#cellReceptor	        "cell receptor category"
* component[biomarker-category][2].code = TbdCodesCS#biomarker-category
* component[biomarker-category][2].valueCodeableConcept = MolecularBiomarkerOntologyCS#protein	"protein category"

Instance: GenomicServiceRequestExample01
InstanceOf: ServiceRequest
Description: "Example for Service Request"
* id = "GenomicServiceRequestExample01"
* status = $REQUESTSTATUS#completed "completed"
* code = $LNC#94231-8 "G6PD gene full mutation analysis in Blood or Tissue by Sequencing"
* subject = Reference(CGPatientExample01)
* intent = $REQUESTINTENT#order "Order"
* specimen = Reference(GenomicSpecimenExample01)

Instance: VariantExample1
InstanceOf: Variant
Description: "Example for Variant given by HGVS"
* id = "VariantExample1"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
//* interpretation = $SCT#10828004 "Positive (qualifier value)"
//* component[gene-studied].valueCodeableConcept = $HGNCID#HGNC:11389 "STK11"
//* component[variation-code].valueCodeableConcept = $CLINVAR#619728 "NC_000019.8:g.1171707G>A"
* component[genomic-hgvs].valueCodeableConcept = $HGVS#NC_000019.8:g.1171707G>A "NC_000019.8:g.1171707G>A"
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6684-0 "Somatic"

Instance: VariantExample2
InstanceOf: Variant
Description: "Example for genomic Variant given by VCF columns"
* id = "VariantExample2"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
//* component[0].code.coding = http://loinc.org#62374-4 "Human Reference Sequence Assembly"
//* component[0].valueCodeableConcept.coding = http://loinc.org#LA14029-5 "GRCh37"
* component[0].code.coding = http://loinc.org#48013-7 "Genomic reference sequence [ID]"
* component[0].valueCodeableConcept.coding = $NCBIREFSEQ#NC_000010.10
* component[1].code.coding = http://loinc.org#53034-5 "Allelic State"
* component[1].valueCodeableConcept.coding = http://loinc.org#LA6706-1 "heterozygous"
* component[2].code.coding = http://loinc.org#69547-8 "Ref nucleotide"
* component[2].valueString = "C"
* component[3].code.coding = http://loinc.org#69551-0 "Alt allele"
* component[3].valueString = "A"
* component[4].code.coding = http://loinc.org#81254-5 "Genomic allele start-end"
* component[4].valueRange.low.value = 96527334
//* component[6].code.coding = http://loinc.org#92822-6 "Genomic coord system"
//* component[6].valueCodeableConcept.coding = http://loinc.org#LA30102-0

Instance: ExampleOrg
InstanceOf: Organization
Description: "Example Org"
* id = "ExampleOrg"
* name = "some lab"

Instance: TherapeuticImplicationExample1
InstanceOf: TherapeuticImplication
Description: "Example of a Therapeutic Implication for Carbamazepine"
* id = "TherapeuticImplicationExample1"
//* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/therapeutic-implication"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#therapeutic-implication
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* component[0].code.coding = TbdCodesCS#therapeutic-implication "Therapeutic Implication"
* component[0].valueCodeableConcept.coding = $LNC#LA19541-4 "High risk"
* component[1].code.coding = $LNC#51963-7 "Medication assessed"
* component[1].valueCodeableConcept.coding = http://www.nlm.nih.gov/research/umls/rxnorm#2002 "Carbamazepine"
//* component[2].code.coding = $LNC#93044-6 "Level of evidence"
//* component[2].valueCodeableConcept.coding = $LNC#LA30200-2 "Very strong evidence pathogenic"
* derivedFrom = Reference(GenotypeExample1)
* status = #final

Instance: AnnotationExample
InstanceOf: DiagnosticImplication
Description: "Example of a Diagnostic Implication for Familial hypercholesterolemia"
* id = "AnnotationExample"
//* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/therapeutic-implication"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#diagnostic-implication
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* component[clinical-significance].valueCodeableConcept = $LNC#LA6668-3 "Pathogenic"
* component[predicted-phenotype].valueCodeableConcept = $SCT#398036000 "Familial hypercholesterolemia (disorder)"
* derivedFrom = Reference(VariantExample2)
* status = #final


Instance: GenotypeExample1
InstanceOf: Genotype
Description: "Example of a Genotype, Medication Recommendation, and MedicationStatement"
* id = "GenotypeExample1"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept.coding = $CLINVAR#14909 "HLA-B*15:02"
* component.code.coding = $LNC#48018-6 "Gene studied [ID]"
* component.valueCodeableConcept.coding = http://www.genenames.org#HGNC:4932 "HLA-B"
* specimen = Reference(GenomicSpecimenExample01)
* status = #final

Instance: MedicationRecommendationExample1
InstanceOf: MedicationRecommendation
Description: "Example of a Medication Recommendation"
* id = "MedicationRecommendationExample1"
* code = $LNC#LA26421-0
* description = "Patients positive for this allele should not be treated with CBZ, unless the benefits clearly outweigh the risk. Therapy should be discontinued immediately if symptoms of SJS or TEN develop. Alternative medication should be used as first line therapy. Consideration in the choice for alternative medications should be given to potential cross-reactivity with structurally similar aromatic antiepileptic drugs such as oxcarbazepine, phenytoin, fosphenytoin and lamotrigine, which can also moderately increase risk for SJS/TEN in association with HLA-B*15:02 positivity."
* for = Reference(CGPatientExample01)
* intent = #proposal
* reasonReference = Reference(TherapeuticImplicationExample1)
* status = #requested

Instance: GenomicReportExample01
InstanceOf: GenomicReport
Description: "Example of a Report carrying a Genotype, Therapeutic Implication, and Medication Recommendation"
* id = "GenomicReportExample01"
* basedOn = Reference(GenomicServiceRequestExample01)
* code.coding[+] = $LNC#51969-4
* code.coding[+] = $LNC#57979-7 "HLA-B*15:02 [Presence]"
* effectiveDateTime = "2016"
* extension[RecommendedAction][0].valueReference = Reference(MedicationRecommendationExample1)
* issued = "2018-03-06T00:00:00-05:00"
* performer = Reference(ExampleOrg)
* result[0].display = "impact for high risk allele"
* result[0] = Reference(TherapeuticImplicationExample1)
* result[1] = Reference(GenotypeExample1)
* status = #final
* subject = Reference(CGPatientExample01)
* extension[workflow-relatedArtifact][0].valueRelatedArtifact.type = #citation
* extension[workflow-relatedArtifact][0].valueRelatedArtifact.url = "https://cpicpgx.org/guidelines/guideline-for-clopidogrel-and-cyp2c19)"
* conclusionCode[+] = $LNC#LA6576-8 "Positive"
* conclusion = "Patient is positive for high risk allele HLA-B*15:02 and should not be treated with CBZ."

Instance: SequencePhaseRelationExample1
InstanceOf: SequencePhaseRelationship
Description: "Example for sequence phase relation."
* id = "SequencePhaseRelationExample1"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/sequence-phase-relationship"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* derivedFrom[0] = Reference(VariantExample1)
* derivedFrom[1] = Reference(VariantExample2)
* issued = "2019-03-05T16:04:44+00:00"
* status = #final
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = SequencePhaseRelationshipCS#Cis "Cis"

Instance: Pgx-var-1011
InstanceOf: Variant
Description: "Example variant 1011"
* id = "Pgx-var-1011"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* effectiveDateTime = "2020-01-01"
* valueCodeableConcept = $LNC#LA9633-4 "Present"
//* component[genomic-hgvs].valueCodeableConcept = $HGVS#NC_000010.10:g.96521657C=
* component[genomic-ref-seq].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10 "b37 Chr10"
* component[coordinate-system].valueCodeableConcept = $LNC#LA30102-0 "1-based character counting"
* component[exact-start-end].valueRange.low.value = 96521657
* component[exact-start-end].valueRange.high.value = 96521657
* component[ref-allele].valueString = "C"
* component[alt-allele].valueString = "C"
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6683-2 "Germline"
* component[allelic-state].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[gene-studied].valueCodeableConcept = $HGNCID#HGNC:262 "CYP2C19"
* component[coding-change-type].valueCodeableConcept = $SEQONT#SO:0002073 "wild type"
* component[allelic-read-depth].valueQuantity.value = 20
* component[allelic-read-depth].valueQuantity.comparator = #>
* component[variant-confidence-status].valueCodeableConcept = VariantConfidenceStatusCS#high

Instance: Pgx-var-1012
InstanceOf: Variant
Description: "Example variant 1012"
* id = "Pgx-var-1012"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
//* component[genomic-hgvs].valueCodeableConcept = $HGVS#NC_000010.10:g.96522463A=
* component[genomic-ref-seq].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10 "b37 Chr10"
* component[coordinate-system].valueCodeableConcept = $LNC#LA30102-0 "1-based character counting"
* component[exact-start-end].valueRange.low.value = 96522463
* component[exact-start-end].valueRange.high.value = 96522463
* component[ref-allele].valueString = "A"
* component[alt-allele].valueString = "A"
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6683-2 "Germline"
* component[allelic-state].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[gene-studied].valueCodeableConcept = $HGNCID#HGNC:2621 "CYP2C19"
* component[coding-change-type].valueCodeableConcept = $SEQONT#SO:0002073 "wild type"
* component[allelic-read-depth].valueQuantity.value = 20
* component[allelic-read-depth].valueQuantity.comparator = #>
* component[variant-confidence-status].valueCodeableConcept = VariantConfidenceStatusCS#high

Instance: Pgx-var-1013
InstanceOf: Variant
Description: "Example variant 1013"
* id = "Pgx-var-1013"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
//* component[genomic-hgvs].valueCodeableConcept = $HGVS#NC_000010.10:g.96535173T=
* component[genomic-ref-seq].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10 "b37 Chr10"
* component[coordinate-system].valueCodeableConcept = $LNC#LA30102-0 "1-based character counting"
* component[exact-start-end].valueRange.low.value = 96535173
* component[exact-start-end].valueRange.high.value = 96535173
* component[ref-allele].valueString = "T"
* component[alt-allele].valueString = "T"
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6683-2 "Germline"
* component[allelic-state].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[gene-studied].valueCodeableConcept = $HGNCID#HGNC:2621 "CYP2C19"
* component[coding-change-type].valueCodeableConcept = $SEQONT#SO:0002073 "wild type"
* component[allelic-read-depth].valueQuantity.value = 20
* component[allelic-read-depth].valueQuantity.comparator = #>
* component[variant-confidence-status].valueCodeableConcept = VariantConfidenceStatusCS#high


Instance: Pgx-var-1014
InstanceOf: Variant
Description: "Example variant 1014"
* id = "Pgx-var-1014"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
//* component[genomic-hgvs].valueCodeableConcept = $HGVS#NC_000010.10:g.96535210G=
* component[genomic-ref-seq].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10 "b37 Chr10"
* component[coordinate-system].valueCodeableConcept = $LNC#LA30102-0 "1-based character counting"
* component[exact-start-end].valueRange.low.value = 96535210
* component[exact-start-end].valueRange.high.value = 96535210
* component[ref-allele].valueString = "G"
* component[alt-allele].valueString = "G"
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6683-2 "Germline"
* component[allelic-state].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[gene-studied].valueCodeableConcept = $HGNCID#HGNC:2621 "CYP2C19"
* component[coding-change-type].valueCodeableConcept = $SEQONT#SO:0002073 "wild type"
* component[allelic-read-depth].valueQuantity.value = 20
* component[allelic-read-depth].valueQuantity.comparator = #>
* component[variant-confidence-status].valueCodeableConcept = VariantConfidenceStatusCS#high

Instance: Pgx-var-1015
InstanceOf: Variant
Description: "Example variant 1015"
* id = "Pgx-var-1015"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[genomic-hgvs].valueCodeableConcept = $HGVS#NC_000010.10:g.96540410G>A
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6683-2 "Germline"
* component[allelic-state].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[gene-studied].valueCodeableConcept = $HGNCID#HGNC:2621 "CYP2C19"
* component[coding-change-type].valueCodeableConcept = $SEQONT#SO:1000002 "substitution"
* component[allelic-read-depth].valueQuantity.value = 20
* component[allelic-read-depth].valueQuantity.comparator = #>
* component[variant-confidence-status].valueCodeableConcept = VariantConfidenceStatusCS#high

Instance: Pgx-var-1016
InstanceOf: Variant
Description: "Example variant 1016"
* id = "Pgx-var-1016"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
//* component[genomic-hgvs].valueCodeableConcept = $HGVS#NC_000010.10:g.96541616G=
* component[genomic-ref-seq].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10 "b37 Chr10"
* component[coordinate-system].valueCodeableConcept = $LNC#LA30102-0 "1-based character counting"
* component[exact-start-end].valueRange.low.value = 96541616
* component[exact-start-end].valueRange.high.value = 96541616
* component[ref-allele].valueString = "G"
* component[alt-allele].valueString = "G"
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6683-2 "Germline"
* component[allelic-state].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[gene-studied].valueCodeableConcept = $HGNCID#HGNC:2621 "CYP2C19"
* component[coding-change-type].valueCodeableConcept = $SEQONT#SO:1000002 "wild type"
* component[allelic-read-depth].valueQuantity.value = 20
* component[allelic-read-depth].valueQuantity.comparator = #>
* component[variant-confidence-status].valueCodeableConcept = VariantConfidenceStatusCS#high

Instance: Pgx-var-1017
InstanceOf: Variant
Description: "Example variant 1017"
* id = "Pgx-var-1017"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
//* component[genomic-hgvs].valueCodeableConcept = $HGVS#NC_000010.10:g.96541756T=
* component[genomic-ref-seq].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10 "b37 Chr10"
* component[coordinate-system].valueCodeableConcept = $LNC#LA30102-0 "1-based character counting"
* component[exact-start-end].valueRange.low.value = 96541756
* component[exact-start-end].valueRange.high.value = 96541756
* component[ref-allele].valueString = "T"
* component[alt-allele].valueString = "T"
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6683-2 "Germline"
* component[allelic-state].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[gene-studied].valueCodeableConcept = $HGNCID#HGNC:2621 "CYP2C19"
* component[coding-change-type].valueCodeableConcept = $SEQONT#SO:1000002 "wild type"
* component[allelic-read-depth].valueQuantity.value = 20
* component[allelic-read-depth].valueQuantity.comparator = #>
* component[variant-confidence-status].valueCodeableConcept = VariantConfidenceStatusCS#high

Instance: Pgx-var-1018
InstanceOf: Variant
Description: "Example variant 1018"
* id = "Pgx-var-1018"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
//* component[genomic-hgvs].valueCodeableConcept = $HGVS#NC_000010.10:g.96612495C=
* component[genomic-ref-seq].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10 "b37 Chr10"
* component[coordinate-system].valueCodeableConcept = $LNC#LA30102-0 "1-based character counting"
* component[exact-start-end].valueRange.low.value = 96612495
* component[exact-start-end].valueRange.high.value = 96612495
* component[ref-allele].valueString = "C"
* component[alt-allele].valueString = "C"
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6683-2 "Germline"
* component[allelic-state].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[gene-studied].valueCodeableConcept = $HGNCID#HGNC:2621 "CYP2C19"
* component[coding-change-type].valueCodeableConcept = $SEQONT#SO:1000002 "wild type"
* component[allelic-read-depth].valueQuantity.value = 20
* component[allelic-read-depth].valueQuantity.comparator = #>
* component[variant-confidence-status].valueCodeableConcept = VariantConfidenceStatusCS#high

Instance: Pgx-var-1019
InstanceOf: Variant
Description: "Example variant 1019"
* id = "Pgx-var-1019"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[genomic-hgvs].valueCodeableConcept = $HGVS#NC_000016.9:g.31096368G>T
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6683-2 "Germline"
* component[allelic-state].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[gene-studied].valueCodeableConcept = $HGNCID#HGNC:23663 "VKORC1"
* component[coding-change-type].valueCodeableConcept = $SEQONT#SO:1000002 "substitution"
* component[allelic-read-depth].valueQuantity.value = 20
* component[allelic-read-depth].valueQuantity.comparator = #>
* component[variant-confidence-status].valueCodeableConcept = VariantConfidenceStatusCS#high
* note.extension[AnnotationCode].valueCodeableConcept = CodedAnnotationTypesCS#result-confirmation
* note.text = """
This variant was confirmed with SANGER sequencing
"""

Instance: Pgx-var-1020
InstanceOf: Variant
Description: "Example variant 1020"
* id = "Pgx-var-1020"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
//* component[genomic-hgvs].valueCodeableConcept = $HGVS#NC_000010.10:g.96702047C=
* component[genomic-ref-seq].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10 "b37 Chr10"
* component[coordinate-system].valueCodeableConcept = $LNC#LA30102-0 "1-based character counting"
* component[exact-start-end].valueRange.low.value = 96702047
* component[exact-start-end].valueRange.high.value = 96702047
* component[ref-allele].valueString = "C"
* component[alt-allele].valueString = "C"
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6683-2 "Germline"
* component[allelic-state].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[gene-studied].valueCodeableConcept = $HGNCID#HGNC:2623 "CYP2C9"
* component[coding-change-type].valueCodeableConcept = $SEQONT#SO:1000002 "wild type"
* component[allelic-read-depth].valueQuantity.value = 20
* component[allelic-read-depth].valueQuantity.comparator = #>
* component[variant-confidence-status].valueCodeableConcept = VariantConfidenceStatusCS#high
* note.extension[AnnotationCode].valueCodeableConcept = CodedAnnotationTypesCS#result-confirmation
* note.text = """
This variant was confirmed with SANGER sequencing
"""

Instance: Pgx-var-1021
InstanceOf: Variant
Description: "Example variant 1021"
* id = "Pgx-var-1021"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
//* component[genomic-hgvs].valueCodeableConcept = $HGVS#NC_000010.10:g.96741053A=
* component[genomic-ref-seq].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10 "b37 Chr10"
* component[coordinate-system].valueCodeableConcept = $LNC#LA30102-0 "1-based character counting"
* component[exact-start-end].valueRange.low.value = 96741053
* component[exact-start-end].valueRange.high.value = 96741053
* component[ref-allele].valueString = "A"
* component[alt-allele].valueString = "A"
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6683-2 "Germline"
* component[allelic-state].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[gene-studied].valueCodeableConcept = $HGNCID#HGNC:2623 "CYP2C9"
* component[coding-change-type].valueCodeableConcept = $SEQONT#SO:1000002 "wild type"
* component[allelic-read-depth].valueQuantity.value = 20
* component[allelic-read-depth].valueQuantity.comparator = #>
* component[variant-confidence-status].valueCodeableConcept = VariantConfidenceStatusCS#intermediate
* note.extension[AnnotationCode].valueCodeableConcept = CodedAnnotationTypesCS#result-confirmation
* note.text = """
This variant was confirmed with SANGER sequencing
"""

Instance: Pgx-geno-1001
InstanceOf: Genotype
Description: "Example of a Genotype from eMERGE"
* id = "Pgx-geno-1001"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* valueCodeableConcept.coding = $CLINVAR#638797 "CYP2C19*2/*2"
* component[gene-studied].valueCodeableConcept = $HGNCID#HGNC:2621 "CYP2C19"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* specimen = Reference(GenomicSpecimenExample01)
* status = #final
* derivedFrom[0] = Reference(Pgx-var-1011)
* derivedFrom[1] = Reference(Pgx-var-1012)
* derivedFrom[2] = Reference(Pgx-var-1013)
* derivedFrom[3] = Reference(Pgx-var-1014)
* derivedFrom[4] = Reference(Pgx-var-1015)
* derivedFrom[5] = Reference(Pgx-var-1016)
* derivedFrom[6] = Reference(Pgx-var-1017)
* derivedFrom[7] = Reference(Pgx-var-1018)

Instance: TxImp01
InstanceOf: TherapeuticImplication
Description: "Example of a Therapeutic Implication from eMERGE"
* id = "TxImp01"
//* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/therapeutic-implication"
* text.status = #generated
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>Poor metabolizer of Clopidogrel</div>"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#therapeutic-implication
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* component[medication-assessed].valueCodeableConcept = $RXN#32968 "clopidogrel"
* component[therapeutic-implication].valueCodeableConcept = $LNC#LA9657-3 "Poor metabolizer"
* component[conclusion-string].valueString = "For clopidogrel, individuals with this diplotype are expected to have significantly reduced platelet inhibition, increased residual platelet aggregation and increased risk for adverse cardiovascular events in response to clopidogrel. Alternative antiplatelet therapy (if no contraindication) is recommended. Refer to current guidelines for dosage and recommendations at https://cpicpgx.org/guidelines/guideline- for-clopidogrel-and-cyp2c19/"
* extension[workflow-relatedArtifact].valueRelatedArtifact.type = #citation
* extension[workflow-relatedArtifact].valueRelatedArtifact.url = "https://cpicpgx.org/guidelines/guideline-for-clopidogrel-and-cyp2c19)"
* derivedFrom = Reference(Pgx-geno-1001)
* status = #final

Instance: TxImp02
InstanceOf: TherapeuticImplication
Description: "Example of a Therapeutic Implication from eMERGE"
* id = "TxImp02"
* text.status = #generated
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>Poor metabolizer of Voriconazole</div>"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#therapeutic-implication
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* component[medication-assessed].valueCodeableConcept = $RXN#121243 "voriconazole"
* component[therapeutic-implication].valueCodeableConcept = $LNC#LA9657-3 "Poor metabolizer"
* component[conclusion-string].valueString = "For voriconazole, higher dose-adjusted trough concentrations of voriconazole are expected in individuals with this genotype and may increase the probability of adverse events. An alternative agent that is not dependent on CYP2C19 metabolism such as isavuconazole, liposomal amphotericin B, or posaconazole is recommended as primary therapy in lieu of voriconazole. A lower than standard dosage of voriconazole with careful therapeutic drug monitoring is another alternative. Refer to current guidelines for dosage and recommendations at https://cpicpgx.org/guidelines/guideline-for-voriconazole-and-cyp2c19/."
* extension[workflow-relatedArtifact].valueRelatedArtifact.type = #citation
* extension[workflow-relatedArtifact].valueRelatedArtifact.url = "https://cpicpgx.org/guidelines/guideline-for-voriconazole-and-cyp2c19/"
* derivedFrom = Reference(Pgx-geno-1001)
* status = #final

Instance: TxImp03
InstanceOf: TherapeuticImplication
Description: "Example of a Therapeutic Implication from eMERGE"
* id = "TxImp03"
* text.status = #generated
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>Poor metabolizer of Citalopram</div>"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#therapeutic-implication
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* component[medication-assessed].valueCodeableConcept = $RXN#2556 "citalopram"
* component[therapeutic-implication].valueCodeableConcept = $LNC#LA9657-3 "Poor metabolizer"
* component[conclusion-string].valueString = "For citalopram, a 50% reduction in starting dose is recommended with therapeutic drug monitoring to guide dose adjustment or select an alternate drug not predominantly metabolized by CYP2C19. Refer to current guidelines for dosage and recommendations at https://cpicpgx.org/guidelines/guideline-for-selective-serotonin-reuptake-inhibitors-and-cyp2d6-and-cyp2c19/. If CYP2D6 genotyping is available, refer to the current guidelines for dosing recommendations."
* extension[workflow-relatedArtifact].valueRelatedArtifact.type = #citation
* extension[workflow-relatedArtifact].valueRelatedArtifact.url = "https://cpicpgx.org/guidelines/guideline-for-selective-serotonin-reuptake-inhibitors-and-cyp2d6-and-cyp2c19/"
* derivedFrom = Reference(Pgx-geno-1001)
* status = #final

Instance: TxImp04
InstanceOf: TherapeuticImplication
Description: "Example of a Therapeutic Implication from eMERGE"
* id = "TxImp04"
* text.status = #generated
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>Poor metabolizer of Escitalopram</div>"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#therapeutic-implication
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* component[medication-assessed].valueCodeableConcept = $RXN#321988 "escitalopram"
* component[therapeutic-implication].valueCodeableConcept = $LNC#LA9657-3 "Poor metabolizer"
* component[conclusion-string].valueString = "For escitalopram, a 50% reduction in starting dose is recommended with therapeutic drug monitoring to guide dose adjustment or select an alternate drug not predominantly metabolized by CYP2C19. Refer to current guidelines for dosage and recommendations at https://cpicpgx.org/guidelines/guideline-for-selective-serotonin-reuptake-inhibitors-and-cyp2d6-and-cyp2c19/. If CYP2D6 genotyping is available, refer to the current guidelines for dosing recommendations."
* extension[workflow-relatedArtifact].valueRelatedArtifact.type = #citation
* extension[workflow-relatedArtifact].valueRelatedArtifact.url = "https://cpicpgx.org/guidelines/guideline-for-selective-serotonin-reuptake-inhibitors-and-cyp2d6-and-cyp2c19/"
* derivedFrom = Reference(Pgx-geno-1001)
* status = #final

Instance: TxImp05
InstanceOf: TherapeuticImplication
Description: "Example of a Therapeutic Implication from eMERGE"
* id = "TxImp05"
* text.status = #generated
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>Poor metabolizer of Amitriptyline</div>"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#therapeutic-implication
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* component[medication-assessed].valueCodeableConcept = $RXN#704 "amitriptyline"
* component[therapeutic-implication].valueCodeableConcept = $LNC#LA9657-3 "Poor metabolizer"
* component[conclusion-string].valueString = "For amitriptyline, a 50% reduction in starting dose is recommended with therapeutic drug monitoring to guide dose adjustment. Refer to current guidelines for dosage and recommendations at https://cpicpgx.org/guidelines/guideline-for- tricyclic-antidepressants-and-cyp2d6-and-cyp2c19/. If CYP2D6 genotyping is available, refer to the current guidelines for dosing recommendations."
* extension[workflow-relatedArtifact].valueRelatedArtifact.type = #citation
* extension[workflow-relatedArtifact].valueRelatedArtifact.url = "https://cpicpgx.org/guidelines/guideline-for-tricyclic-antidepressants-and-cyp2d6-and-cyp2c19/"
* derivedFrom = Reference(Pgx-geno-1001)
* status = #final

Instance: Pgx-geno-1002
InstanceOf: Genotype
Description: "Example of a Genotype from eMERGE"
* id = "Pgx-geno-1002"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept.text = "CYP2C9*1/*1"
* component[gene-studied].valueCodeableConcept = $HGNCID#HGNC:2623 "CYP2C9"
* specimen = Reference(GenomicSpecimenExample01)
* derivedFrom = Reference(Pgx-var-1020)
* derivedFrom = Reference(Pgx-var-1021)
* status = #final
//* derivedFrom[0] = Reference(Pgx-var-1011)

Instance: Pgx-geno-1003
InstanceOf: Genotype
Description: "Example of a Genotype from eMERGE"
* id = "Pgx-geno-1003"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept.text = "VKORC1 rs9923231 C/T"
* component[gene-studied].valueCodeableConcept = $HGNCID#HGNC:23663 "VKORC1"
* specimen = Reference(GenomicSpecimenExample01)
* derivedFrom = Reference(Pgx-var-1019)
* status = #final
//* derivedFrom[0] = Reference(Pgx-var-1011)

Instance: TxImp06
InstanceOf: TherapeuticImplication
Description: "Example of a Therapeutic Implication from eMERGE"
* id = "TxImp06"
* text.status = #generated
* text.div = "<div xmlns='http://www.w3.org/1999/xhtml'>Normal metabolizer of Warfarin</div>"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#therapeutic-implication
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* component[medication-assessed].valueCodeableConcept = $RXN#11289 "warfarin"
* component[therapeutic-implication].valueCodeableConcept = $LNC#LA25391-6 "Normal metabolizer"
* component[conclusion-string].valueString = "This individual is homozygous for the normal allele for the CYP2C9 gene. Based on the genotype result, this patient is predicted to have normal CYP2C9 function. This individual is also heterozygous for the variant allele for the VKORC1 gene. Expression level of the VKORC1 gene is associated with warfarin sensitivity. Based on the genotype result, this patient is predicted to have medium sensitivity to warfarin. See https://cpicpgx.org/guidelines/guideline-for-warfarin-and-cyp2c9-and-vkorc1/ guidelines for detail."
* extension[workflow-relatedArtifact].valueRelatedArtifact.type = #citation
* extension[workflow-relatedArtifact].valueRelatedArtifact.url = "https://cpicpgx.org/guidelines/guideline-for-warfarin-and-cyp2c9-and-vkorc1/"
* derivedFrom[0] = Reference(Pgx-geno-1002) "CYP2C9*1/*1"
* derivedFrom[1] = Reference(Pgx-geno-1003) "VKORC1 rs9923231 C/T"
* status = #final

Instance: GrouperEx01
InstanceOf: Observation
Description: "Generic grouping of Therapeutic Implication observations"
* id = "GrouperEx01"
* category[+].coding = $OBSCAT#laboratory
* category[+].coding = $DIAGNOSTICSERVICE#GE
* code = $NCIT#C43359 "Group"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* status = #final
* hasMember[0] = Reference(TxImp01) "clopidogrel, poor metabolizer"
* hasMember[1] = Reference(TxImp02) "voriconazole, poor metabolizer"
* hasMember[2] = Reference(TxImp03) "citalopram, poor metabolizer"
* hasMember[3] = Reference(TxImp04) "escitalopram, poor metabolizer"
* hasMember[4] = Reference(TxImp05) "amitriptyline, poor metabolizer"
* hasMember[5] = Reference(TxImp06) "medium sensitivity to warfarin"

Instance: GrouperEx02
InstanceOf: Observation
Description: "Generic grouping of Genotype observations"
* id = "GrouperEx02"
* category[+].coding = $OBSCAT#laboratory
* category[+].coding = $DIAGNOSTICSERVICE#GE
* code = $NCIT#C43359 "Group"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* status = #final
* hasMember[0] = Reference(Pgx-geno-1001)
* hasMember[1] = Reference(Pgx-geno-1003)
* hasMember[2] = Reference(Pgx-geno-1002)


Instance: GrouperEx03
InstanceOf: Observation
Description: "Generic grouping of Regions Studied and Variant observations"
* id = "GrouperEx03"
* category[+].coding = $OBSCAT#laboratory
* category[+].coding = $DIAGNOSTICSERVICE#GE
* code = $NCIT#C43359 "Group"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* status = #final
* hasMember[0] = Reference(Pgx-var-1011) "NC_000010.10(CYP2C19):g.96521657C="
* hasMember[1] = Reference(Pgx-var-1012) "NC_000010.10(CYP2C19):g.96522463A="
* hasMember[2] = Reference(Pgx-var-1013) "NC_000010.10(CYP2C19):g.96535173T="
* hasMember[3] = Reference(Pgx-var-1014) "NC_000010.10(CYP2C19):g.96535210G="
* hasMember[4] = Reference(Pgx-var-1015) "NC_000010.10(CYP2C19):g.96540410G>A"
* hasMember[5] = Reference(Pgx-var-1016) "NC_000010.10(CYP2C19):g.96541616G="
* hasMember[6] = Reference(Pgx-var-1017) "NC_000010.10(CYP2C19):g.96541756T="
* hasMember[7] = Reference(Pgx-var-1018) "NC_000010.10(CYP2C19):g.96612495C="
* hasMember[8] = Reference(Pgx-var-1019) "NC_000016.9(VKORC1):g.31096368C>T"
* hasMember[9] = Reference(Pgx-var-1020) "NC_000010.10(CYP2C9):g.96702047C="
* hasMember[10] = Reference(Pgx-var-1021) "NC_000010.10(CYP2C9):g.96741053A="

//* variants if needed
Instance: PGxGenomicReportEMERGE
InstanceOf: GenomicReport
Description: "Example of a Report carrying multiple Therapeutic Implications, Genotypes, and Variants"
* extension[GenomicStudyReference][+].valueReference = Reference(PGXGenomicStudy)
* id = "PGxGenomicReportEMERGE"
* basedOn = Reference(eMERGEServiceRequest)
* code.coding[+] = $LNC#51969-4
* code.coding[+] = http://example.org/hgsc.bcm.edu/lab-test-codes/#emerge-seq-ngs-pnl
* effectiveDateTime = "2020-01-01T00:00:00-05:00"
* issued = "2020-01-01T00:00:00-05:00"
* performer = Reference(ExampleOrg)
* subject = Reference(CGPatientExample01)
* result[+] = Reference(TxImp01) "clopidogrel, poor metabolizer"
* result[+] = Reference(TxImp02) "voriconazole, poor metabolizer"
* result[+] = Reference(TxImp03) "citalopram, poor metabolizer"
* result[+] = Reference(TxImp04) "escitalopram, poor metabolizer"
* result[+] = Reference(TxImp05) "amitriptyline, poor metabolizer"
* result[+] = Reference(TxImp06) "medium sensitivity to warfarin"
* result[+] = Reference(Pgx-geno-1001) "CYP2C19*2/*2"
* result[+] = Reference(Pgx-geno-1003) "VKORC1 rs9923231 C/T"
* result[+] = Reference(Pgx-geno-1002) "CYP2C9*1/*1"
* result[+] = Reference(Pgx-var-1011) "NC_000010.10(CYP2C19):g.96521657C="
* result[+] = Reference(Pgx-var-1012) "NC_000010.10(CYP2C19):g.96522463A="
* result[+] = Reference(Pgx-var-1013) "NC_000010.10(CYP2C19):g.96535173T="
* result[+] = Reference(Pgx-var-1014) "NC_000010.10(CYP2C19):g.96535210G="
* result[+] = Reference(Pgx-var-1015) "NC_000010.10(CYP2C19):g.96540410G>A"
* result[+] = Reference(Pgx-var-1016) "NC_000010.10(CYP2C19):g.96541616G="
* result[+] = Reference(Pgx-var-1017) "NC_000010.10(CYP2C19):g.96541756T="
* result[+] = Reference(Pgx-var-1018) "NC_000010.10(CYP2C19):g.96612495C="
* result[+] = Reference(Pgx-var-1019) "NC_000016.9(VKORC1):g.31096368C>T"
* result[+] = Reference(Pgx-var-1020) "NC_000010.10(CYP2C9):g.96702047C="
* result[+] = Reference(Pgx-var-1021) "NC_000010.10(CYP2C9):g.96741053A="
* extension[RecommendedAction][+].valueReference = Reference(PGxRecEx01) "No clopidogrel"
* extension[RecommendedAction][+].valueReference = Reference(PGxRecEx02) "No voriconazole"
* extension[RecommendedAction][+].valueReference = Reference(PGxRecEx03) "50% citalopram"
* extension[RecommendedAction][+].valueReference = Reference(PGxRecEx04) "50% escitalopram"
* extension[RecommendedAction][+].valueReference = Reference(PGxRecEx04) "50% amitriptyline"
* extension[GenomicReportNote][+].valueAnnotation.extension[AnnotationCode].valueCodeableConcept = CodedAnnotationTypesCS#test-disclaimer
* extension[GenomicReportNote][=].valueAnnotation.text = """
This test was developed and its performance determined by this laboratory. It has not been cleared or approved by U.S. Food and Drug Administration.
Since FDA Approval is not required for clinical use of this test, this laboratory has established and validated the test's accuracy and precision,
pursuant to the requirement of CLIA '88. This laboratory is licensed and/or accredited under CLIA and CAP (CAP# xxxxxxx / CLIA# xxxxxxxxxx).
"""
* status = #final
* conclusionCode[+] = $LNC#LA6576-8 "Positive"
* conclusion = "Based on the genotype result, this patient is predicted to have a CYP2C19 poor metabolizer phenotype. This genotype information can be used by patients and clinicians as part of the shared decision-making process for several drugs metabolized by CYP2C19 including clopidogrel, voriconazole, amitriptyline, citalopram and escitalopram."

Instance: PGXGenomicStudy
InstanceOf: GenomicStudy
Description: "Example of PGX sequencing panel"
Usage: #example
* extension[GenomicStudyAnalysisExt][+].valueReference = Reference(PGXGenomicStudyAnalysis)
* status = #completed
* code.text = "PGX sequencing panel"
* category = $OBSCAT#laboratory
* subject = Reference(CGPatientExample01)
* performedDateTime = "2021-01-01"
* basedOn = Reference(eMERGEServiceRequest)
* note.text = "For technical reasons, PIK3CB was deemed uncallable."

Instance: PGXGenomicStudyAnalysis
InstanceOf: GenomicStudyAnalysis
Description: "Example of PGX Sequence analysis"
Usage: #example
* extension[GenomicStudyAnalysisGenomeBuild][+].valueCodeableConcept = $LNC#LA26806-2 "GRCh38"
* extension[GenomicStudyAnalysisMetrics].extension[sequencing-coverage].valueQuantity.value = 100
* extension[GenomicStudyAnalysisRegions]
  * extension[description].valueString = "protein-coding and exon-splicing regions"
  * extension[studied][+].valueCodeableConcept = $HGNCID#HGNC:2621 "CYP2C19"
  * extension[studied][+].valueCodeableConcept = $HGNCID#HGNC:2623 "CYP2C9"
  * extension[studied][+].valueCodeableConcept = $HGNCID#HGNC:23663 "VKORC1"
* status = #completed
* category = $OBSCAT#laboratory
* performedDateTime = "2021-01-01T01:01:10-06:00"
* subject = Reference(CGPatientExample01)

Instance: PGxGenomicReportEMERGE-withGrouping
InstanceOf: GenomicReport
Description: "Example of a Report carrying multiple Therapeutic Implications, Genotypes, and Variants"
* id = "PGxGenomicReportEMERGE-withGrouping"
* basedOn = Reference(eMERGEServiceRequest)
* code.coding[+] = $LNC#51969-4
* code.coding[+] = http://example.org/hgsc.bcm.edu/lab-test-codes/#emerge-seq-ngs-pnl
* effectiveDateTime = "2020-01-01T00:00:00-05:00"
* issued = "2020-01-01T00:00:00-05:00"
* performer = Reference(ExampleOrg)
* subject = Reference(CGPatientExample01)
* result[+] = Reference(GrouperEx01) "Therapeutic Implications"
* result[+] = Reference(GrouperEx02) "Genotypes"
* result[+] = Reference(GrouperEx03) "Regions studied and Variants"
* extension[RecommendedAction][0].valueReference = Reference(PGxRecEx01) "No clopidogrel"
* extension[RecommendedAction][1].valueReference = Reference(PGxRecEx02) "No voriconazole"
* extension[RecommendedAction][2].valueReference = Reference(PGxRecEx03) "50% citalopram"
* extension[RecommendedAction][3].valueReference = Reference(PGxRecEx04) "50% escitalopram"
* extension[RecommendedAction][4].valueReference = Reference(PGxRecEx04) "50% amitriptyline"
* status = #final


Instance: PGxRecEx01
InstanceOf: FollowupRecommendation
Description: "Example of a Medication Recommendation for alternatives to clopidogrel"
* id = "PGxRecEx01"
* code = $LNC#LA26421-0 "Consider alternative medication"
* description = "For clopidogrel, individuals with this diplotype are expected to have significantly reduced platelet inhibition, increased residual platelet aggregation and increased risk for adverse cardiovascular events in response to clopidogrel. Alternative antiplatelet therapy (if no contraindication) is recommended. Refer to current guidelines for dosage and recommendations at https://cpicpgx.org/guidelines/guideline- for-clopidogrel-and-cyp2c19/"
* for = Reference(CGPatientExample01)
* reasonReference = Reference(TxImp01) "Poor metabolizer"

Instance: PGxRecEx02
InstanceOf: FollowupRecommendation
Description: "Example of a Medication Recommendation for alternatives to voriconazole"
* id = "PGxRecEx02"
* code = $LNC#LA26421-0 "Consider alternative medication"
* description = "voriconazole - An alternative agent that is not dependent on CYP2C19 metabolism such as isavuconazole, liposomal amphotericin B, or posaconazole is recommended as primary therapy in lieu of voriconazole. A lower than standard dosage of voriconazole with careful therapeutic drug monitoring is another alternative. Refer to current guidelines for dosage and recommendations at https://cpicpgx.org/guidelines/guideline-for-voriconazole-and-cyp2c19/."
* for = Reference(CGPatientExample01)
* reasonReference = Reference(TxImp02) "Poor metabolizer"

Instance: PGxRecEx03
InstanceOf: FollowupRecommendation
Description: "Example of a Medication Recommendation for decreasing dosage for citalopram"
* id = "PGxRecEx03"
* code = $LNC#LA26422-8 "Decrease dose"
* description = "For citalopram, a 50% reduction in starting dose is recommended with therapeutic drug monitoring to guide dose adjustment or select an alternate drug not predominantly metabolized by CYP2C19. Refer to current guidelines for dosage and recommendations at https://cpicpgx.org/guidelines/guideline-for-selective-serotonin-reuptake-inhibitors-and-cyp2d6-and-cyp2c19/. If CYP2D6 genotyping is available, refer to the current guidelines for dosing recommendations."
* for = Reference(CGPatientExample01)
* reasonReference = Reference(TxImp03) "Poor metabolizer"

Instance: PGxRecEx04
InstanceOf: FollowupRecommendation
Description: "Example of a Medication Recommendation for decreasing dosage for escitalopram"
* id = "PGxRecEx04"
* code = $LNC#LA26422-8 "Decrease dose"
* description = "For escitalopram, a 50% reduction in starting dose is recommended with therapeutic drug monitoring to guide dose adjustment or select an alternate drug not predominantly metabolized by CYP2C19. Refer to current guidelines for dosage and recommendations at https://cpicpgx.org/guidelines/guideline-for-selective-serotonin-reuptake-inhibitors-and-cyp2d6-and-cyp2c19/. If CYP2D6 genotyping is available, refer to the current guidelines for dosing recommendations."
* for = Reference(CGPatientExample01)
* reasonReference = Reference(TxImp04) "Poor metabolizer"

Instance: PGxRecEx05
InstanceOf: FollowupRecommendation
Description: "Example of a Medication Recommendation for decreasing dosage for amitriptyline"
* id = "PGxRecEx05"
* code = $LNC#LA26422-8 "Decrease dose"
* description = "For amitriptyline, a 50% reduction in starting dose is recommended with therapeutic drug monitoring to guide dose adjustment. Refer to current guidelines for dosage and recommendations at https://cpicpgx.org/guidelines/guideline-for- tricyclic-antidepressants-and-cyp2d6-and-cyp2c19/. If CYP2D6 genotyping is available, refer to the current guidelines for dosing recommendations."
* for = Reference(CGPatientExample01)
* reasonReference = Reference(TxImp05) "Poor metabolizer"

Instance: eMERGEServiceRequest
InstanceOf: ServiceRequest
Description: "Example PGx Service Request"
* id = "eMERGEServiceRequest"
* status = $REQUESTSTATUS#completed "completed"
* code = http://example.org/hgsc.bcm.edu/lab-test-codes/#emerge-seq-ngs-pnl
* subject = Reference(CGPatientExample01)
* intent = $REQUESTINTENT#order "Order"
* specimen = Reference(GenomicSpecimenExample01)
//* instantiatesCanonical = Reference(eMERGEPD)

/*
Instance: eMERGEPD
InstanceOf: PlanDefinition
Description: "Example Plan Definition from eMERGE"
* id = "eMERGEPD"
* url = "urn:uuid:69aaa45b-5c23-44cf-bfae-fd2d7b74a656"
* type.coding = http://terminology.hl7.org/CodeSystem/plan-definition-type#protocol
* status = #active
* description = "This test interrogates the protein-coding and exon-splicing regions of 109 genes as well as 1551 single-nucleotide polymorphisms that may impact human health and disease. Clinical interpretation and reporting are provided for pathogenic and likely pathogenic variants for genes and single nucleotide polymorphisms as described in the methodology section.",
//* relatedArtifact[0].type = #citation
//* relatedArtifact[0].citation = "Illumina, Inc. (2011) Multiplexing Sample Preparation Guide (Part # 1005361 Rev. D). 2011."
* action[0].prefix = "1"
* action[0].description = "1. eMERGE-Seq Version 2 NGS Panel: for the paired-end pre-capture library procedure, genome DNA is fragmented by sonicating genome DNA and ligating to the Illumina multiplexing PE adapters (reference 1).  The adapter-ligated DNA is then PCR amplified using primers with sequencing barcodes (indexes). For target enrichment capture procedure, the pre-capture library is enriched by hybridizing to biotin labeled in-solution probes&nbsp;(reference 2) at&nbsp; 56&deg;C for 16 - 19 hours.&nbsp; For massively parallel sequencing, the post-capture library DNA is subjected to sequence analysis on Illumina HiSeq platform for 100 bp paired-end reads. The following quality control metrics of the sequencing data are generally achieved: &gt;70% of reads aligned to target, &gt;99% target base covered at &gt;20X, &gt;98% target base covered at &gt;40X, average coverage of target bases &gt;200X. SNP concordance to SNPTrace genotype array: &gt;99%. This test may not provide detection of certain genes or portions of certain genes due to local sequence characteristics or the presence of closely related pseudogenes. Gross deletions or duplications, changes from repetitive sequences may not be accurately identified by this methodology. Genomic rearrangements cannot be detected by this assay."
*/


Instance: ExampleGermlineCNV
InstanceOf: Variant
Description: "Example for germline CNV"
* id = "ExampleGermlineCNV"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[coding-change-type].valueCodeableConcept = $SEQONT#SO:0001019 "copy_number_variation"
* component[ref-allele].valueString = "T"
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6683-2 "Germline"
* component[genomic-ref-seq].valueCodeableConcept = $NCBIREFSEQ#NC_000022.10
* component[copy-number].valueQuantity.value = 3
* component[copy-number].valueQuantity.code = #1
* component[copy-number].valueQuantity.system = $UCUM
* component[coordinate-system].valueCodeableConcept = $LNC#LA30102-0 "1-based character counting"
* component[inner-start-end].valueRange.low.value = 42523949
* component[inner-start-end].valueRange.high.value = 42533891
* component[variant-inheritance].valueCodeableConcept = $LNC#LA26320-4 "Maternal"
* component[variant-inheritance-basis].valueCodeableConcept = $LNC#LA26426-9 "Directly measured"

Instance: ExampleSomaticCNV
InstanceOf: Variant
Description: "Example for somatic CNV"
* id = "ExampleSomaticCNV"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[coding-change-type].valueCodeableConcept = $SEQONT#SO:0001019 "copy_number_variation"
* component[ref-allele].valueString = "T"
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6684-0 "Somatic"
* component[genomic-ref-seq].valueCodeableConcept = $NCBIREFSEQ#NC_000022.10
* component[copy-number].valueQuantity.value = 3
* component[copy-number].valueQuantity.code = #1
* component[copy-number].valueQuantity.system = $UCUM
* component[coordinate-system].valueCodeableConcept = $LNC#LA30102-0 "1-based character counting"
* component[inner-start-end].valueRange.low.value = 42523949
* component[inner-start-end].valueRange.high.value = 42533891

Instance: ExampleGermlineDEL
InstanceOf: Variant
Description: "Example for germline DEL"
* id = "ExampleGermlineDEL"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[coding-change-type].valueCodeableConcept = $SEQONT#SO:0000159 "deletion"
* component[allelic-state].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[ref-allele].valueString = "C"
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6683-2 "Germline"
* component[genomic-ref-seq].valueCodeableConcept = $NCBIREFSEQ#NC_000001.10
* component[coordinate-system].valueCodeableConcept = $LNC#LA30102-0 "1-based character counting"
* component[inner-start-end].valueRange.low.value = 756295
* component[inner-start-end].valueRange.high.value = 756329

Instance: ExampleSomaticDEL
InstanceOf: Variant
Description: "Example for somatic DEL"
* id = "ExampleSomaticDEL"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[coding-change-type].valueCodeableConcept = $SEQONT#SO:0000159 "deletion"
* component[ref-allele].valueString = "C"
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6684-0 "Somatic"
* component[genomic-ref-seq].valueCodeableConcept = $NCBIREFSEQ#NC_000001.10
* component[copy-number].valueQuantity.value = 1
* component[copy-number].valueQuantity.code = #1
* component[copy-number].valueQuantity.system = $UCUM
* component[coordinate-system].valueCodeableConcept = $LNC#LA30102-0 "1-based character counting"
* component[inner-start-end].valueRange.low.value = 16360078
* component[inner-start-end].valueRange.high.value = 16383337

Instance: ExampleGermlineINV
InstanceOf: Variant
Description: "Example for germline INV"
* id = "ExampleGermlineINV"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[coding-change-type].valueCodeableConcept = $SEQONT#SO:1000036 "inversion"
* component[allelic-state].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[ref-allele].valueString = "C"
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6683-2 "Germline"
* component[genomic-ref-seq].valueCodeableConcept = $NCBIREFSEQ#NC_000001.10
* component[coordinate-system].valueCodeableConcept = $LNC#LA30102-0 "1-based character counting"
* component[inner-start-end].valueRange.low.value = 12855952
* component[inner-start-end].valueRange.high.value = 13448205


Instance: ExampleSomaticINV
InstanceOf: Variant
Description: "Example for somatic INV"
* id = "ExampleSomaticINV"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[coding-change-type].valueCodeableConcept = $SEQONT#SO:1000036 "inversion"
* component[ref-allele].valueString = "T"
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6684-0 "Somatic"
* component[genomic-ref-seq].valueCodeableConcept = $NCBIREFSEQ#NC_000001.10
* component[coordinate-system].valueCodeableConcept = $LNC#LA30102-0 "1-based character counting"
* component[inner-start-end].valueRange.low.value = 70391323
* component[inner-start-end].valueRange.high.value = 70391466

 //* Implication of polygenic risk score X - at risk for Type 2 Diabetes
Instance: PolyGenicDiagnosticImpExample
InstanceOf: DiagnosticImplication
Description: "Example of a Diagnostic Implication for Diabetes Type 2 with a polygenic risk score."
* id = "PolyGenicDiagnosticImpExample"
//* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/therapeutic-implication"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#diagnostic-implication
* status = #final
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* extension[GenomicRiskAssessment][0].valueReference = Reference(GenRiskDiabetesT2) "Polygenic Risk Score"
//Reference(GenomicRiskAssesmPolyGenicScoreRef)
* component[clinical-significance].valueCodeableConcept = $LNC#LA6668-3 "Pathogenic"
* component[predicted-phenotype].valueCodeableConcept = $SCT#44054006 "Diabetes mellitus type 2 (disorder)"
* derivedFrom[0].display = "Variant 1"
* derivedFrom[0].identifier.system = "http://hospital.example.org"
* derivedFrom[0].identifier.value = "11"
* derivedFrom[1].display = "Variant 2"
* derivedFrom[1].identifier.system = "http://hospital.example.org"
* derivedFrom[1].identifier.value = "12"


//Risk assesment for polygenic Diaters2 GenRiskDiabetesT2

Instance: GenRiskDiabetesT2
InstanceOf: RiskAssessment
Description: "Polygenic Risk Score example"
//* id = GenRiskDiabetesT2
* parent = Reference (PolyGenicDiagnosticImpExample)
* status = #final
* subject = Reference(CGPatientExample01)
* basis[0].display = "Variant 1"
* basis[0].identifier.system = "http://hospital.example.org"
* basis[0].identifier.value = "11"
* basis[1].display = "Variant 2"
* basis[1].identifier.system = "http://hospital.example.org"
* basis[1].identifier.value = "12"
* basis[2].display = "Variant 3"
* basis[2].identifier.system = "http://hospital.example.org"
* basis[2].identifier.value = "13"
* basis[3].display = "Variant 4"
* basis[3].identifier.system = "http://hospital.example.org"
* basis[3].identifier.value = "14"
* basis[4].display = "Variant 5"
* basis[4].identifier.system = "http://hospital.example.org"
* basis[4].identifier.value = "15"
* basis[5].display = "Variant 6"
* basis[5].identifier.system = "http://hospital.example.org"
* basis[5].identifier.value = "16"
* basis[6].display = "Variant 7"
* basis[6].identifier.system = "http://hospital.example.org"
* basis[6].identifier.value = "17"

* prediction[0].outcome = $SCT#44054006 "Diabetes mellitus type 2 (disorder)"
* prediction[0].probabilityDecimal = 0.26
* prediction[0].qualitativeRisk = $RISKQUAL#low "Low likelihood"
* prediction[0].relativeRisk = 1.05
* prediction[0].whenRange.high = 53 'a' "years"
//.value = 53.0 'a'
//* prediction[0].whenRange.high.unit = "years"
//* prediction[0].whenRange.high.system = "http://unitsofmeasure.org"
//* prediction[0].whenRange.high.code = a
* prediction[1].outcome = $SCT#44054006 "Diabetes mellitus type 2 (disorder)"
* prediction[1].probabilityDecimal = 0.7
* prediction[1].qualitativeRisk = $RISKQUAL#high "High likelihood"
* prediction[1].relativeRisk = 2.69
* prediction[1].whenRange.high = 65 'a' "years"
//.value = 65.0 'a'
//* prediction[1].whenRange.high.unit = "years"
//* prediction[1].whenRange.high.system = "http://unitsofmeasure.org"
//* prediction[1].whenRange.high.code = a

Instance: Variant-Somatic-Clinical-Trial
InstanceOf: Variant
Description: "Example for Somatic Variant and Clinical Trial"
* id = "Variant-Somatic-Clinical-Trial"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* method = $LNC#LA26398-0 "Sequencing"
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* specimen = Reference(GenomicSpecimenExample01)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* interpretation = $SCT#10828004 "Positive (qualifier value)"
* component[gene-studied].valueCodeableConcept = $HGNCID#HGNC:3689 "FGFR2"
* component[genomic-hgvs].valueCodeableConcept = $HGVS#NC_000010.11:g.121498525T>G "NC_000010.11:g.121498525T>G"
* component[genomic-source-class].valueCodeableConcept = $LNC#LA6684-0 "Somatic"

Instance: Therapeutic-Implication-Clinical-Trial-Somatic
InstanceOf: TherapeuticImplication
Description: "Example of a Therapeutic Implication for Clinical Trial"
* id = "Therapeutic-Implication-Clinical-Trial-Somatic"
//* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/therapeutic-implication"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#therapeutic-implication
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* component[0].code.coding = TbdCodesCS#therapeutic-implication "Therapeutic Implication"
* component[0].valueCodeableConcept.coding = $SCT#399223003 "Patient eligible for clinical trial"
* component[1].code.coding = $LNC#81259-4 // "Phenotypic treatment context"
//#HP:0003002
* component[1].valueCodeableConcept.coding = 	$SCT#254837009 "Breast Cancer"
* component[2].code.coding = TbdCodesCS#associated-therapy "Associated Therapy"
* component[2].valueCodeableConcept.coding = $NCTTRIAL#NCT01234567 "NCT01234567"
* derivedFrom = Reference(Variant-Somatic-Clinical-Trial)
* status = #final


Instance: HaplotypeSet-Clinical-Trial-Example-1of2
InstanceOf: Haplotype
Description: "Example of a Haplotype as part of a Haplotype Set (1 of 2). A complete haplotype set defines a genotype."
* id = "HaplotypeSet-Clinical-Trial-Example-1of2"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept.coding = $CLINVAR#441262 "APOE1"
* component[gene-studied].valueCodeableConcept.coding = http://www.genenames.org#HGNC:613 "APOE"
* specimen = Reference(GenomicSpecimenExample02)
//* derivedFrom = NM_000041.2(APOE):c.526C>T (p.Arg176Cys) - Variation ID 17848
//* derivedFrom =NM_000041.4(APOE):c.434G>A (p.Gly145Asp) - Variation ID 478904
* status = #final

Instance: HaplotypeSet-Clinical-Trial-Example-2of2
InstanceOf: Haplotype
Description: "Example of a Haplotype as part of a Haplotype Set (2 of 2). A complete haplotype set defines a genotype."
* id = "HaplotypeSet-Clinical-Trial-Example-2of2"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept.coding = $CLINVAR#441262 "APOE1"
* component[gene-studied].valueCodeableConcept.coding = http://www.genenames.org#HGNC:613 "APOE"
* specimen = Reference(GenomicSpecimenExample02)
//* derivedFrom = NM_000041.2(APOE):c.526C>T (p.Arg176Cys) - Variation ID 17848
//* derivedFrom =NM_000041.4(APOE):c.434G>A (p.Gly145Asp) - Variation ID 478904
* status = #final

Instance: Genotype-Clinical-Trial-Example-using-haplotypes
InstanceOf: Genotype
Description: "Example of a Genotype. A complete haplotype set defines a genotype. In this example the gneotype is dervied from  observations of the underlying haplotypes."
* id = "Genotype-Clinical-Trial-Example-using-haplotypes"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept.text = "APOE e1/e1"
* component[gene-studied].valueCodeableConcept.coding = http://www.genenames.org#HGNC:613 "APOE"
* specimen = Reference(GenomicSpecimenExample02)
* derivedFrom[0] = Reference(HaplotypeSet-Clinical-Trial-Example-1of2)
* derivedFrom[1] = Reference(HaplotypeSet-Clinical-Trial-Example-2of2)
* status = #final

Instance: Therapeutic-Implication-Clinical-Trial-2
InstanceOf: TherapeuticImplication
Description: "Example of a Therapeutic Implication for Carbamazepine"
* id = "Therapeutic-Implication-Clinical-Trial-2"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#therapeutic-implication
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* specimen = Reference(GenomicSpecimenExample02)
* component[0].code.coding = TbdCodesCS#therapeutic-implication "Therapeutic Implication"
* component[0].valueCodeableConcept.coding = $SCT#444734003 "Does not meet eligibility criteria for clinical trial"
* component[1].code.coding = TbdCodesCS#associated-therapy "Associated Therapy"
* component[1].valueCodeableConcept.coding = $NCTTRIAL#NCT03131453 "NCT03131453"
* derivedFrom = Reference(Genotype-Clinical-Trial-Example-using-haplotypes)
* status = #final

Instance: GenomicSpecimenExample02
InstanceOf: Specimen
Description: "Example for Genomic Specimen from Buccal Swab"
* id = "GenomicSpecimenExample02"
* subject = Reference(CGPatientExample01)
//* text.status = #"generated"
//* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n <pre>Buccal smear sample </pre>\n </div>"
* status = #available "Available"
* processing.timeDateTime = "2020-10-05"
* type = $SCT#258564008 "Buccal smear sample"
* identifier.system  = "http://myorgsurl.com"
* identifier.value = "123"
* accessionIdentifier.system = "http://mylabsurl.com"
* accessionIdentifier.value = "456"

Instance: HaplotypeExamplePharmVar01
InstanceOf: Haplotype
Title: "HaplotypeExamplePharmVar01"
Description: "Example of a Haplotype using PharmVar"
* id = "HaplotypeExamplePharmVar01"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept.coding = http://www.pharmvar.org#PV00155 "CYP2D6*7.001" //https://www.pharmvar.org/api-service/alleles/pv00155
* component[gene-studied].valueCodeableConcept.coding = http://www.genenames.org#HGNC:2625 "CYP2D6"
* specimen = Reference(GenomicSpecimenExample01)
* status = #final

Instance: HaplotypeExamplePharmVar02
InstanceOf: Haplotype
Title: "HaplotypeExamplePharmVar02"
Description: "Example of a Haplotype using PharmVar"
* id = "HaplotypeExamplePharmVar02"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept.coding = http://www.pharmvar.org#PV00126 "CYP2D6*1.001" //https://www.pharmvar.org/api-service/alleles/pv00126
* component[gene-studied].valueCodeableConcept.coding = http://www.genenames.org#HGNC:2625 "CYP2D6"
* specimen = Reference(GenomicSpecimenExample01)
* status = #final

Instance: GenotypeExamplePharmVar
InstanceOf: Genotype
Title: "GenotypeExamplePharmVar"
Description: "Example of a Genotype using Pharmvar Haplotypes"
* id = "GenotypeExamplePharmVar"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept.text = "CYP2D6*7.001 / CYP2D6*1.001"
* component[gene-studied].valueCodeableConcept.coding = http://www.genenames.org#HGNC:2625 "CYP2D6"
* specimen = Reference(GenomicSpecimenExample01)
* status = #final
* derivedFrom[+] = Reference(HaplotypeExamplePharmVar01)
* derivedFrom[+] = Reference(HaplotypeExamplePharmVar02)

Instance: ISCN-NormalExample
InstanceOf: Variant
Description: "Normal example for karyotype Variant expressed in ISCN"
* id = "ISCN-NormalExample"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code.coding = $LNC#81291-7 "Variant ISCN"
* component[0].valueCodeableConcept.coding = $ISCN#46,XX

Instance: ISCN-CMLExample
InstanceOf: Variant
Description: "Basic example for karyotype Variant expressed in ISCN"
* id = "ISCN-CMLExample"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant"
* status = #final "Final"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code.coding = $LNC#81291-7 "Variant ISCN"
* component[0].valueCodeableConcept.coding = $ISCN#46,XX,t(9;22)(q34;q4)

Instance: ISCN-CMLImplication
InstanceOf: DiagnosticImplication
Description: "Basic example of a Diagnostic Implication for CML"
* id = "ISCN-CMLImplication"
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/diagnostic-implication"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#diagnostic-implication
* subject = Reference(CGPatientExample01)
* effectiveDateTime = "2019-04-01"
* performer = Reference(ExampleOrg)
* component[predicted-phenotype].valueCodeableConcept = $SCT#92818009 "Chronic myeloid leukemia"
* derivedFrom = Reference(ISCN-CMLExample)
* status = #final


---

// File: input/fsh/CGExtensions.fsh

Extension:   RecommendedAction
Id:          recommended-action
Title:       "Recommended Action"
Description: "References a proposed action that is recommended based on the results of the diagnostic report."
* ^context[+].type = #element
* ^context[=].expression = "DiagnosticReport"
* ^context[+].type = #element
* ^context[=].expression = "Observation"
* value[x] only Reference(MedicationRecommendation or FollowupRecommendation)

Extension:   GenomicRiskAssessment
Id:          genomic-risk-assessment
Title:       "Genomic Risk Assessment"
Description: "RiskAssessment delivered as part of a genomics report or observation"
* ^context[0].type = #element
* ^context[0].expression = "DiagnosticReport"
* ^context[1].type = #element
* ^context[1].expression = "Observation"
* value[x] only Reference(RiskAssessment)

Extension:   AnnotationCode
Id:          annotation-code
Title:       "Annotation Code"
Description: "Codifies the content of an Annotation"
* ^context[+].type = #element
* ^context[=].expression = "Annotation"
* value[x] only CodeableConcept
* value[x] from CodedAnnotationTypesVS (example)

Extension:   GenomicReportNote
Id:          genomic-report-note
Title:       "Genomic Report Note"
Description: "Adds codified notes to a report to capture additional content"
* ^context[+].type = #element
* ^context[=].expression = "DiagnosticReport"
* value[x] only CodedAnnotation

Extension:   TherapyAssessedReference
Id:          therapy-assessed-reference
Title:       "Therapy Assessed reference to a FHIR resource"
Description: "Used to reference a specific therapy that was assessed (e.g. a FHIR ResearchStudy, a FHIR CarePlan, or a FHIR PlanDefinition)."
* ^context[0].type = #element
* ^context[0].expression = "Observation.component"
* value[x] only Reference(CarePlan or ResearchStudy or PlanDefinition)

Extension:   MedicationAssessedReference
Id:          medication-assessed-reference
Title:       "Medication Assessed reference to a FHIR resource"
Description: "Used to reference a specific medication that was assessed (e.g. a FHIR Medication or a FHIR MedicationKnowledge)."
* ^context[0].type = #element
* ^context[0].expression = "Observation.component"
* value[x] only Reference(Medication or MedicationKnowledge)

Extension:   RepeatMotifOrder
Id:          repeat-motif-order
Title:       "Repeat Motif Order"
Description: "Use to group and order repeat expansion motifs."
* ^context[0].type = #element
* ^context[0].expression = "Observation.component"
* value[x] only positiveInt

Extension:   RelatedArtifactComponent
Id:          workflow-relatedArtifactComponent //use a name that aligns with the 'workflow-relatedArtifact' extension
Title:       "Related Artifact for Observation component"
Description: "Use the RelatedArtifact at the Observation.component element (not valid in the R4 extension)"
* ^context[0].type = #element
* ^context[0].expression = "Observation.component"
* value[x] only RelatedArtifact


---

// File: input/fsh/CGFindings.fsh

Profile:        GenomicFinding
Parent:         GenomicBase
Id:             finding
Title:          "Genomic Finding"
Description:    "Properties common to genetic findings whose results are expressed as computable discrete elements (e.g. genotypes, haplotypes, variants, etc.)."
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* ^abstract = true
// * component ^slicing.discriminator.type = #value
// * component ^slicing.discriminator.path = "code"
// * component ^slicing.rules = #open
// * component ^slicing.description = "Slice based on the component.code pattern"
* component contains gene-studied 0..* and 
    cytogenetic-location 0..* and 
    reference-sequence-assembly 0..* and
    chromosome-identifier 0..*

* component[gene-studied] ^short = "Gene Studied"
* component[gene-studied] ^definition = "The gene(s) on which the variant is located."
* component[gene-studied].code = $LNC#48018-6
* component[gene-studied].code ^short = "48018-6"
* component[gene-studied].value[x] only CodeableConcept
* component[gene-studied].value[x] ^short = "The HGNC gene symbol is to be used as display text and the HGNC gene ID used as the code. If no HGNC code issued for this gene yet, NCBI gene IDs SHALL be used."
* component[gene-studied].value[x] 1..1
* component[gene-studied].value[x] from HGNCVS (extensible)

* component[cytogenetic-location] ^short = "Cytogenetic (Chromosome) Location"
* component[cytogenetic-location] ^definition = "The relevant chromosomal region. The combination of numbers and letters provide a genetic 'address'."
* component[cytogenetic-location].code = $LNC#48001-2
* component[cytogenetic-location].code ^short = "48001-2"
* component[cytogenetic-location].value[x] only CodeableConcept
* component[cytogenetic-location].value[x] 1..1
* component[cytogenetic-location].value[x] ^short = "Example: 1q21.1"

* component[reference-sequence-assembly] ^short = "Human Reference Sequence Assembly"
* component[reference-sequence-assembly] ^definition = "The reference genome/assembly used in this analysis."
* component[reference-sequence-assembly].code = $LNC#62374-4
* component[reference-sequence-assembly].code ^short = "62374-4"
* component[reference-sequence-assembly].value[x] only CodeableConcept
* component[reference-sequence-assembly].value[x] 1..1
* component[reference-sequence-assembly].value[x] ^short = "GRCh37 | GRCh38 | ..."
* component[reference-sequence-assembly].value[x] from http://loinc.org/vs/LL1040-6 (extensible)

* component[chromosome-identifier].code = $LNC#48000-4
* component[chromosome-identifier].code ^short = "48000-4"
* component[chromosome-identifier] ^short = "Chromosome Identifier"
* component[chromosome-identifier] ^definition = "An indicator, enumerated in humans by numbers 1-22, X, and Y, representing the chromosome on which the finding is located."
* component[chromosome-identifier].value[x] only CodeableConcept
* component[chromosome-identifier].value[x] 1..1
* component[chromosome-identifier].value[x] ^short = "Chromosome 1 | Chromosome 2 | ... | Chromosome 22 | Chromosome X | Chromosome Y"
* component[chromosome-identifier].value[x] from http://loinc.org/vs/LL2938-0 (required)

Profile:        Variant
Parent:         GenomicFinding
Id:             variant
Title:          "Variant"
Description:    "Details about a set of changes in the tested sample compared to a reference sequence."
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* . ^short = "Variant"
* code = $LNC#69548-6
* code ^short = "69548-6"
* method from http://loinc.org/vs/LL4048-6 (extensible)
* method ^short = "Sequencing | SNP array | PCR | Computational analysis | ..."
* valueCodeableConcept from http://loinc.org/vs/LL1971-2 (required)
* valueCodeableConcept ^short = "Indeterminate | No call | Present | Absent."
* valueCodeableConcept ^definition = "The presence or absence of the variant described in the components. If not searching for specific variations and merely reporting what's found, the profile's value should be set to 'Present'."
* valueCodeableConcept ^comment = "See [here](sequencing.html#variant-assessment) for usage guidance."
// * component ^slicing.discriminator.type = #value
// * component ^slicing.discriminator.path = "code"
// * component ^slicing.rules = #open
// * component ^slicing.description = "Slice based on the component.code pattern"
* component contains
    representative-coding-hgvs 0..1 and
    genomic-hgvs 0..1 and
    cytogenomic-nomenclature 0..1 and
    genomic-ref-seq 0..1 and
    representative-protein-ref-seq 0..1 and
    representative-transcript-ref-seq 0..1 and
    exact-start-end 0..1 and
    inner-start-end 0..1 and
    outer-start-end 0..1 and
    coordinate-system 0..1 and
    ref-allele 0..1 and
    alt-allele 0..1 and
    coding-change-type 0..1 and
    genomic-source-class 0..1 and
    sample-allelic-frequency 0..1 and
    allelic-read-depth 0..1 and
    allelic-state 0..1 and
    variant-inheritance 0..1 and
    variant-inheritance-basis 0..1 and
    variation-code 0..* and
    representative-protein-hgvs 0..1 and
//  amino-acid-change-type 0..1 and
//  molecular-consequence 0..1 and
    copy-number 0..1 and
    variant-confidence-status 0..1 and
    repeat-motif 0..* and
    repeat-number 0..*

* component[representative-coding-hgvs].code = $LNC#48004-6
* component[representative-coding-hgvs].code ^short = "48004-6"
* component[representative-coding-hgvs] ^short = "DNA change (c.HGVS)"
* component[representative-coding-hgvs] ^definition = "Human Genome Variation Society (HGVS) nomenclature for a single DNA marker. The use of the nomenclature must be extended to describe non-variations (aka. wild types) see samples for wild type examples."
* component[representative-coding-hgvs].value[x] only CodeableConcept
* component[representative-coding-hgvs].value[x] 1..1
* component[representative-coding-hgvs].value[x] from HGVSVS (required) 
* component[representative-coding-hgvs].value[x] ^short = "A valid HGVS-formatted 'c.' string, e.g. NM_005228.5:c.2369C>T."

* component[coding-change-type].code = $LNC#48019-4
* component[coding-change-type].code ^short = "48019-4"
* component[coding-change-type] ^short = "Coding DNA Change Type"
* component[coding-change-type] ^definition = "Type of DNA change observed. Convenience property for variants with exact breakpoints, required otherwise."
* component[coding-change-type].value[x] only CodeableConcept
* component[coding-change-type].value[x] ^short = "deletion | insertion | delins | SNV | copy_number_gain | copy_number_loss | ... (many)"
* component[coding-change-type].value[x] 1..1
* component[coding-change-type].value[x] from DNAChangeTypeVS (extensible)
* component[coding-change-type].value[x] ^binding.description = "Concepts in sequence ontology under SO:0002072"

* component[variation-code].code = $LNC#81252-9
* component[variation-code].code ^short = "81252-9"
* component[variation-code] ^short = "Variation Code"
* component[variation-code] ^definition = "Accession number in a variant database such as ClinVar, given for cross-reference."
* component[variation-code].value[x] only CodeableConcept
* component[variation-code].value[x] ^binding.strength = #example
* component[variation-code].value[x] ^binding.description = "Multiple bindings acceptable"
* component[variation-code].value[x] 1..1
* component[variation-code].value[x] ^short = "ClinVar ID or similar"

* component[genomic-hgvs].code = $LNC#81290-9
* component[genomic-hgvs].code ^short = "81290-9"
* component[genomic-hgvs] ^short = "Genomic (gDNA) Change - gHGVS"
* component[genomic-hgvs] ^definition = "Description of the genomic (gDNA) sequence change using a valid HGVS-formatted string."
* component[genomic-hgvs].value[x] only CodeableConcept
* component[genomic-hgvs].value[x] 1..1
* component[genomic-hgvs].value[x] ^short = "A valid HGVS-formatted 'g.' string, e.g. NC_000016.9:g.2124200_2138612dup"
* component[genomic-hgvs].value[x] from HGVSVS (required)

* component[genomic-source-class].code = $LNC#48002-0
* component[genomic-source-class].code ^short = "48002-0"
* component[genomic-source-class] ^short = "Genomic Source Class"
* component[genomic-source-class] ^definition = "The genomic class of the specimen being analyzed: Germline for inherited genome, somatic for cancer genome, and prenatal for fetal genome."
* component[genomic-source-class].value[x] only CodeableConcept
* component[genomic-source-class].value[x] 1..1
* component[genomic-source-class].value[x] ^short = "Germline | Somatic | Fetal | Likely germline | Likely somatic | Likely fetal | Unknown genomic origin | De novo"
* component[genomic-source-class].value[x] from http://loinc.org/vs/LL378-1 (extensible)

* component[genomic-ref-seq].code = $LNC#48013-7
* component[genomic-ref-seq].code ^short = "48013-7"
* component[genomic-ref-seq] ^short = "Genomic Reference Sequence"
* component[genomic-ref-seq] ^definition = "ID of the genomic reference sequence, which includes transcribed and non transcribed stretches"
* component[genomic-ref-seq].value[x] only CodeableConcept
* component[genomic-ref-seq].value[x] ^short = "Versioned genomic reference sequence identifier"
* component[genomic-ref-seq].value[x] ^binding.strength = #example
* component[genomic-ref-seq].value[x] ^binding.description = "Multiple bindings acceptable (NCBI or LRG)"
* component[genomic-ref-seq].value[x] 1..1

* component[representative-protein-ref-seq].code = TbdCodesCS#protein-ref-seq
* component[representative-protein-ref-seq].code ^short = "protein-ref-seq"
* component[representative-protein-ref-seq] ^short = "Protein Reference Sequence"
* component[representative-protein-ref-seq] ^definition = "ID of the protein reference sequence, which includes transcribed and non transcribed stretches. It covers the entire protein described."
* component[representative-protein-ref-seq].value[x] only CodeableConcept
* component[representative-protein-ref-seq].value[x] ^short = "Versioned protein reference sequence identifier"
* component[representative-protein-ref-seq].value[x] ^binding.strength = #example
* component[representative-protein-ref-seq].value[x] ^binding.description = "Multiple bindings acceptable (NCBI or LRG)"
* component[representative-protein-ref-seq].value[x] 1..1

* component[representative-transcript-ref-seq].code = $LNC#51958-7
* component[representative-transcript-ref-seq].code ^short = "51958-7"
* component[representative-transcript-ref-seq] ^short = "Reference Transcript"
* component[representative-transcript-ref-seq] ^definition = "NCBI's RefSeq ('NM_...'), Ensembl ('ENST...'), and LRG ('LRG...' plus 't1' to indicate transcript)"
* component[representative-transcript-ref-seq].value[x] only CodeableConcept
* component[representative-transcript-ref-seq].value[x] ^binding.strength = #example
* component[representative-transcript-ref-seq].value[x] ^binding.description = "Multiple bindings acceptable (NCBI or LRG)"
* component[representative-transcript-ref-seq].value[x] 1..1
* component[representative-transcript-ref-seq].value[x] ^short = "Versioned transcript reference sequence identifier"

* component[sample-allelic-frequency].code = $LNC#81258-6
* component[sample-allelic-frequency].code ^short = "81258-6"
* component[sample-allelic-frequency] ^short = "Sample Allelic Frequency"
* component[sample-allelic-frequency] ^definition = "The relative frequency of the allele at a given locus in the sample."
* component[sample-allelic-frequency].value[x] only Quantity
* component[sample-allelic-frequency].value[x].system = $UCUM
* component[sample-allelic-frequency].value[x] ^short = "Relative frequency in the sample"

* component[allelic-read-depth].code = $LNC#82121-5
* component[allelic-read-depth].code ^short = "82121-5"
* component[allelic-read-depth] ^short = "Allelic Read Depth"
* component[allelic-read-depth] ^definition = "Specifies the number of reads that identified the allele in question whether it consists of one or a small sequence of contiguous nucleotides. Different methods and purposes require different numbers of reads to be acceptable. Often >400, sometimes as few as 2-4."
* component[allelic-read-depth] ^comment = "See [here](sequencing.html#variant-assessment) for usage guidance."
* component[allelic-read-depth].value[x] only Quantity
* component[allelic-read-depth].value[x] ^short = "Unfiltered count of supporting reads"

* component[allelic-state].code = $LNC#53034-5
* component[allelic-state].code ^short = "53034-5"
* component[allelic-state] ^short = "Allelic State"
* component[allelic-state] ^definition = "The observed level of occurrence of the variant in the set of chromosomes."
* component[allelic-state].value[x] only CodeableConcept
* component[allelic-state].value[x] 1..1
* component[allelic-state].value[x] ^short = "Heteroplasmic | Homoplasmic | Homozygous | Heterozygous | Hemizygous"
* component[allelic-state].value[x] from http://loinc.org/vs/LL381-5 (extensible)

* component[copy-number].code = $LNC#82155-3
* component[copy-number].code ^short = "82155-3"
* component[copy-number] ^short = "Genomic Structural Variant Copy Number"
* component[copy-number] ^definition = "The copy number of the large variant. In HGVS, this is the numeric value following the “X”. It is a unit-less value. If the value determined by the assay is not a whole number, a range or decimal number can be specified. Note that a copy number of 1 can imply a deletion."
* component[copy-number] ^requirements = "There SHALL be a code with a value of '1' if there is a value. If system is present, it SHALL be UCUM."
* component[copy-number] ^comment = """
Copy number variants are often described with a single copy number value. However, due to the nature of assays, such as qPCR and microarray, it can be difficult to assign an exact copy number. Therefore, labs sometimes report a range instead of an exact copy number. They may alternatively choose to report decimal numbers, even if whole numbers are biologically correct.

In general, it can be difficult to estimate a copy number from measurements taken on a heterogenous population of cells, such as a tumor. As indicated in the ISCN 2020 specifications, it is appropriate to express the measurements using a range. Furthermore, regardless of cell population, many assays use fluorescent probes to detect copy number. These testing methodologies do not always provide an exact, discrete value for this data point.
"""
* component[copy-number].value[x] only Quantity or Range

* component[ref-allele].code = $LNC#69547-8
* component[ref-allele].code ^short = "69547-8"
* component[ref-allele] ^short = "Genomic Ref Allele"
* component[ref-allele] ^definition = "Reference values ('normal') examined within the Reference Sequence."
* component[ref-allele].value[x] only string
* component[ref-allele].value[x] ^short = "Normalized string per the VCF format."

* component[alt-allele].code = $LNC#69551-0
* component[alt-allele].code ^short = "69551-0"
* component[alt-allele] ^short = "Genomic Alt Allele"
* component[alt-allele] ^definition = "The genomic alternate allele is the contiguous segment of DNA in the test sample that differs from the reference allele at the same location and thus defines a variant."
* component[alt-allele].value[x] only string
* component[alt-allele].value[x] ^short = "Normalized string per the VCF format."

* component[coordinate-system].code = $LNC#92822-6
* component[coordinate-system].code ^short = "92822-6"
* component[coordinate-system] ^short = "Coordinate System"
* component[coordinate-system] ^definition = "These are different ways of identifying nucleotides or amino acids within a sequence. In the 1-based system, the first unit of the polymer (e.g. the first nucleotide) is counted as number 1. In the 0-based system, the number 0 designates the location before the first nucleotide. Different databases and file types may use different systems."
* component[coordinate-system].value[x] only CodeableConcept
* component[coordinate-system].value[x] 1..1
* component[coordinate-system].value[x] ^short = "0-based interval counting | 0-based character counting | 1-based character counting"
* component[coordinate-system].value[x] from http://loinc.org/vs/LL5323-2 (extensible)

* component[exact-start-end].code = $LNC#81254-5
* component[exact-start-end].code ^short = "81254-5"
* component[exact-start-end] ^short = "Exact Start-End"
* component[exact-start-end] ^definition = "The exact integer-based genomic coordinates of the start and end of the variant region."
* component[exact-start-end].value[x] only Range
* component[exact-start-end].value[x] ^short = "Range in question. 'High' can be omitted for single nucleotide variants."

* component[outer-start-end].code = $LNC#81301-4
* component[outer-start-end].code ^short = "81301-4"
* component[outer-start-end] ^short = "Outer Start-End"
* component[outer-start-end] ^definition = "The genomic coordinates of the widest genomic range in which the variant might reside. Used when the exact boundaries of the variant are not clear."
* component[outer-start-end].value[x] only Range
* component[outer-start-end].value[x] ^short = "Imprecise variant outer-bounding range"

* component[inner-start-end].code = $LNC#81302-2
* component[inner-start-end].code ^short = "81302-2"
* component[inner-start-end] ^short = "Inner Start-End"
* component[inner-start-end] ^definition = "The genomic coordinates of the narrowest genomic range in which the variant might reside. Used when the exact boundaries of the variant are not clear."
* component[inner-start-end].value[x] only Range
* component[inner-start-end].value[x] ^short = "Imprecise variant inner-bounding range"

* component[cytogenomic-nomenclature].code = $LNC#81291-7
* component[cytogenomic-nomenclature].code ^short = "81291-7"
* component[cytogenomic-nomenclature] ^short = "Cytogenomic Nomenclature (ISCN)"
* component[cytogenomic-nomenclature] ^definition = "Fully describes a variant with a single code. Typically a large variant such as a mosaic, abnormal chromosome numbers, etc."
* component[cytogenomic-nomenclature].value[x] only CodeableConcept
* component[cytogenomic-nomenclature].value[x] ^binding.strength = #example
* component[cytogenomic-nomenclature].value[x] ^binding.description = "Binding not yet defined"
* component[cytogenomic-nomenclature].value[x] 1..1

* component[variant-inheritance].code = $LNC#94186-4
* component[variant-inheritance].code ^short = "94186-4"
* component[variant-inheritance] ^short = "Origin of germline genetic variant"
* component[variant-inheritance] ^definition = "The source or inheritance of a specific germline variation found in an individual patient."
* component[variant-inheritance].value[x] only CodeableConcept
* component[variant-inheritance].value[x] 1..1
* component[variant-inheritance].value[x] ^short = "Maternal | Paternal | Unknown"
* component[variant-inheritance].value[x] from http://loinc.org/vs/LL5489-1 (extensible)

* component[variant-inheritance-basis].code = $LNC#82309-6
* component[variant-inheritance-basis].code ^short = "Basis for allelic phase"
* component[variant-inheritance-basis] ^short = "Evidential basis for variant inheritance"
* component[variant-inheritance-basis] ^definition = "The method by which the variant inheritance is determined."
* component[variant-inheritance-basis].value[x] only CodeableConcept
* component[variant-inheritance-basis].value[x] 1..1
* component[variant-inheritance-basis].value[x] ^short = "Directly measured | Family DNA | Family history | Inferred from population data"
* component[variant-inheritance-basis].value[x] from http://loinc.org/vs/LL4050-2 (extensible)

* component[representative-protein-hgvs].code = $LNC#48005-3
* component[representative-protein-hgvs].code ^short = "48005-3"
* component[representative-protein-hgvs] ^short = "Protein (Amino Acid) Change - pHGVS"
* component[representative-protein-hgvs] ^definition = "Description of the protein (amino acid) sequence change using a valid HGVS-formatted string. The description of the variant is surrounded in parentheses if it is calculated rather than directly observed."
* component[representative-protein-hgvs].value[x] only CodeableConcept
* component[representative-protein-hgvs].value[x] 1..1
* component[representative-protein-hgvs].value[x] from HGVSVS (required)
* component[representative-protein-hgvs].value[x] ^short = "A valid HGVS-formatted 'p.' string, e.g. NP_000050.2:p.(Asn1836Lys)"

* component[variant-confidence-status].code = TbdCodesCS#variant-confidence-status
* component[variant-confidence-status].code ^short = "variant-confidence-status"
* component[variant-confidence-status] ^short = "Variant Confidence Status"
* component[variant-confidence-status] ^definition = "A code that represents the confidence of a true positive variant call."
* component[variant-confidence-status] ^comment = "See [here](sequencing.html#variant-assessment) for usage guidance."
* component[variant-confidence-status].value[x] only CodeableConcept
* component[variant-confidence-status].value[x] 1..1
* component[variant-confidence-status].value[x] ^short = "High | Intermediate | Low"
* component[variant-confidence-status].value[x] from VariantConfidenceStatusVS (required)

* component[repeat-motif].code = TbdCodesCS#repeat-motif
* component[repeat-motif].code ^short = "repeat-motif"
* component[repeat-motif] ^short = "Repeat Motif"
* component[repeat-motif] ^definition = "Nucleotides of a repeat expansion motif."
* component[repeat-motif].value[x] only string
* component[repeat-motif].value[x] 1..1
* component[repeat-motif].value[x] ^short = "CAG"
* component[repeat-motif].extension contains RepeatMotifOrder named repeat-motif-order 0..1 
* component[repeat-motif].extension[RepeatMotifOrder] ^requirements = "The value must be a natural number starting from 1 and increasing sequentially"
* component[repeat-motif].extension[RepeatMotifOrder] ^comment = "If there are multiple repeat expansion pairs, this must be used both to indicate the sequence position of a given repeat-motif and repeat-number pair and to group the related components together. Components with the same extension value describe the same motif."

* component[repeat-number].code = TbdCodesCS#repeat-number
* component[repeat-number].code ^short = "repeat-number"
* component[repeat-number] ^short = "Repeat Number"
* component[repeat-number] ^definition = "Number of repeats of a repeat expansion."
* component[repeat-number].value[x] only Quantity
* component[repeat-number].value[x] 1..1
* component[repeat-number].value[x] ^short = "40"
* component[repeat-number].extension contains RepeatMotifOrder named repeat-motif-order 0..1
* component[repeat-number].extension[RepeatMotifOrder] ^requirements = "The value must be a natural number starting from 1 and increasing sequentially"
* component[repeat-number].extension[RepeatMotifOrder] ^comment = "If there are multiple repeat expansion pairs, this must be used both to indicate the sequence position of a given repeat-motif and repeat-number pair and to group the related components together. Components with the same extension value describe the same motif."

Profile:        Haplotype
Parent:         GenomicFinding
Id:             haplotype
Title:          "Haplotype"
Description:    "Assertion of a particular haplotype on the basis of one or more variants."
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* . ^short = "Haplotype"
* code = $LNC#84414-2
* code ^short = "84414-2"
* value[x] only CodeableConcept
* value[x] ^binding.strength = #example
* value[x] ^binding.description = "Binding not yet standardized"
* value[x] 1..1
* value[x] ^short = "Haplotype name"
* method from http://loinc.org/vs/LL4050-2 (extensible)
* method ^short = "Directly measured | Family DNA | Family history | Inferred from population data"
// * derivedFrom ^slicing.discriminator.type = #profile
// * derivedFrom ^slicing.discriminator.path = "resolve()"
// * derivedFrom ^slicing.rules = #open
// * derivedFrom ^slicing.description = "Slice based on the reference profile pattern"
* derivedFrom contains 
        haplotype 0..* 
    and variant 0..* 
    and molecular-sequence 0..*
* derivedFrom[haplotype] only Reference(Haplotype)
* derivedFrom[haplotype] ^short = "Haplotype this haplotype is derived from"
* derivedFrom[variant] only Reference(Variant)
* derivedFrom[variant] ^short = "Variant this haplotype is derived from"
* derivedFrom[molecular-sequence] only Reference(MolecularSequence)
* derivedFrom[molecular-sequence] ^short = "MolecularSequence this haplotype is derived from"

Profile:        Genotype
Parent:         GenomicFinding
Id:             genotype
Title:          "Genotype"
Description:    "Assertion of a particular genotype on the basis of one or more variants or haplotypes."
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* . ^short = "Genotype"
* code = $LNC#84413-4 // Genotype name
* code ^short = "84413-4"
* value[x] only CodeableConcept
* value[x] ^binding.strength = #example
* value[x] ^binding.description = "Binding not yet defined"
* value[x] 1..1
* value[x] ^short = "Genotype name"
// * derivedFrom ^slicing.discriminator.type = #profile
// * derivedFrom ^slicing.discriminator.path = "resolve()"
// * derivedFrom ^slicing.rules = #open
// * derivedFrom ^slicing.description = "Slice based on the reference profile pattern"
* derivedFrom contains 
        haplotype 0..* 
    and variant 0..*
    and molecular-sequence 0..*
* derivedFrom[haplotype] only Reference(Haplotype)
* derivedFrom[haplotype] ^short = "Haplotype this genotype is derived from"
* derivedFrom[variant] only Reference(Variant)
* derivedFrom[variant] ^short = "Variant this genotype is derived from"
* derivedFrom[molecular-sequence] only Reference(MolecularSequence)
* derivedFrom[molecular-sequence] ^short = "MolecularSequence this genotype is derived from"

Profile:        MolecularBiomarker
Parent:         Observation
Id:             molecular-biomarker
Title:          "Molecular Biomarker"
Description:    "This profile is used to represent laboratory measurements of human inherent substances such as gene products, antigens and antibodies, and complex chemicals that result from post-translational processing of multi-gene products."
* code from MolecularBiomarkerCodeVS (example)
* code ^short = "Code for the biomarker"
* code ^definition = "The code is used to represent the biomarker - laboratory measurements of human inherent substances such as gene products, antigens and antibodies, and complex chemicals that result from post-translational processing of multi-gene products."
* derivedFrom ^slicing.discriminator.type = #profile
* derivedFrom ^slicing.discriminator.path = "resolve()"
* derivedFrom ^slicing.rules = #open
* derivedFrom ^slicing.description = "Slice based on the reference profile pattern"
* derivedFrom 0..*
* derivedFrom contains variant 0..* and
    genotype 0..* and
    haplotype 0..*
* derivedFrom[variant] only Reference(Variant)
* derivedFrom[variant] ^short = "Variant the biomarker is derived from"
* derivedFrom[genotype] only Reference(Genotype)
* derivedFrom[genotype] ^short = "Genotype the biomarker is derived from"
* derivedFrom[haplotype] only Reference(Haplotype)
* derivedFrom[haplotype] ^short = "Haplotype the biomarker is derived from"
* category 2..*
* category ^slicing.discriminator.type = #value
* category ^slicing.discriminator.path = "coding"
* category ^slicing.rules = #open
* category ^slicing.description = "Slice based on the category.code pattern"
* category contains 
     labCategory 1..1 and
     mbCategory 1..1 and
     geCategory 0..1
* category[labCategory].coding 1..1
* category[labCategory].coding = $OBSCAT#laboratory
* category[mbCategory].coding 1..1
* category[mbCategory].coding = TbdCodesCS#biomarker-category
* category[geCategory].coding 0..1
* category[geCategory].coding = $DIAGNOSTICSERVICE#GE
* component ^slicing.discriminator.type = #value
* component ^slicing.discriminator.path = "code"
* component ^slicing.rules = #open
* component ^slicing.description = "Slice based on the component.code pattern"
* component contains 
    gene-studied 0..* and 
    biomarker-category 0..*
* component[gene-studied] ^short = "Gene Studied"
* component[gene-studied] ^definition = "The gene(s) directly or indirectly assessed by the biomarker."
* component[gene-studied].code = $LNC#48018-6
* component[gene-studied].code ^short = "48018-6"
* component[gene-studied].value[x] only CodeableConcept
* component[gene-studied].value[x] ^short = "The HGNC gene symbol is to be used as display text and the HGNC gene ID used as the code. If no HGNC code issued for this gene yet, NCBI gene IDs SHALL be used."
* component[gene-studied].value[x] 1..1
* component[gene-studied].value[x] from HGNCVS (extensible)

* component[biomarker-category] ^short = "Biomarker Category"
* component[biomarker-category] ^definition = "A categorization of a given biomarker observation."
* component[biomarker-category] ^comment = """
Component biomarker-category is an optional and repeating field that provides for a categorization of a given biomarker observation. The example 'molecular biomarker ontology' value set provides a categorization of biomarkers along several axes. A given lab test can be associated with more than one category within more than one axis. For example, LOINC code 85337-4 represents Estrogen receptor antigen in tissue by immune stain. It can be categorized by physiologic role of cell receptor and antigen; by molecule type of protein; and by method of immune stain.
"""
* component[biomarker-category].code = TbdCodesCS#biomarker-category
* component[biomarker-category].value[x] only CodeableConcept
* component[biomarker-category].value[x] 1..1
* component[biomarker-category].value[x] ^short = "cell receptor | antigen | protein | immune stain"
* component[biomarker-category].value[x] from MolecularBiomarkerCategoryVS (example)


---

// File: input/fsh/CGGeneral.fsh

Profile:        GenomicBase
Parent:         Observation
Id:             genomic-base
Title:          "Genomic Base"
Description:    "Base profile that defines characteristics shared by all genetic observations."
* ^abstract = true
//* extension contains GenomicStudy named genomic-study 0..*
//* extension[GenomicStudy] ^short = "Reference to full details of an genomic study associated with the diagnostic report"
* extension contains http://hl7.org/fhir/StructureDefinition/observation-secondaryFinding named secondary-finding 0..1
                 and http://hl7.org/fhir/StructureDefinition/bodySite named body-structure 0..1
* derivedFrom ^slicing.discriminator.type = #profile
* derivedFrom ^slicing.discriminator.path = "resolve()"
* derivedFrom ^slicing.rules = #open
* derivedFrom ^slicing.description = "Slice based on the reference profile pattern"

* partOf only Reference(MedicationAdministration or MedicationDispense or MedicationStatement or Procedure or Immunization or ImagingStudy or GenomicStudy)
* category 2..*
* category ^slicing.discriminator.type = #value
* category ^slicing.discriminator.path = "coding"
* category ^slicing.rules = #open
* category ^slicing.ordered = false   // can be omitted, since false is the default
* category ^slicing.description = "Slice based on the category.code pattern"

* category contains labCategory 1..1
                and geCategory 1..1
* category[labCategory].coding 1..1
* category[labCategory].coding = $OBSCAT#laboratory
* category[geCategory].coding 1..1
* category[geCategory].coding = $DIAGNOSTICSERVICE#GE
* note only CodedAnnotation
* note ^short = "Comments about the Observation that also contain a coded type"
* note ^requirements = "Need to be able to provide free text additional information. Notes SHALL NOT contain information which can be captured in a structured way."
* note ^comment = """
May include general statements about the observation, or statements about significant, unexpected or unreliable results values, or information about its source when relevant to its interpretation.
The CodedAnnotation data type, while not allowing for or intending to make the content computable, does allow the author to indicate the type of note. This does not replace the use of interpretation, value, or component values.
One important note is that Annotation is a FHIR data type, this is **NOT** about annotations in the genomic context.
"""
* component ^slicing.discriminator.type = #value
* component ^slicing.discriminator.path = "code"
* component ^slicing.rules = #open
* component ^slicing.description = "Slice based on the component.code pattern"
* component contains conclusion-string 0..1
* component[conclusion-string] ^short = "Clinical Conclusion"
* component[conclusion-string] ^definition = "Concise and clinically contextualized summary conclusion (interpretation/impression) of the observation"
* component[conclusion-string] ^requirements = "Need to be able to provide a conclusion that is not lost among the basic result data."
* component[conclusion-string] ^comment = "An example would be the interpretative information, typically canned, about a variant identified in the patient."
* component[conclusion-string].code = TbdCodesCS#conclusion-string
* component[conclusion-string].code ^short = "conclusion-string"
* component[conclusion-string].value[x] only string
* component[conclusion-string].value[x] ^short = "Summary conclusion (interpretation/impression)"

Profile:        SequencePhaseRelationship
Parent:         GenomicFinding
Id:             sequence-phase-relationship
Title:          "Sequence Phase Relationship"
Description:    "Indicates whether two entities are in Cis (same strand) or Trans (opposite strand) relationship to each other."
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* code = $LNC#82120-7
* code ^short = "82120-7"
* value[x] only CodeableConcept
* value[x] 1..1
* value[x] from SequencePhaseRelationshipVS (required)
* value[x] ^short = "Cis | Trans | Indeterminate | Unknown"
* method from http://loinc.org/vs/LL4050-2 (extensible)
* method ^short = "Directly measured | Family DNA | Family history | Inferred from population data"
// * derivedFrom ^slicing.discriminator.type = #profile
// * derivedFrom ^slicing.discriminator.path = "resolve()"
// * derivedFrom ^slicing.rules = #open
// * derivedFrom ^slicing.description = "Slice based on the profile"
* derivedFrom contains variant 0..* and 
    haplotype 0..*
* derivedFrom[variant] only Reference(Variant)
* derivedFrom[variant] ^short = "Variant in the relationship"
* derivedFrom[haplotype] only Reference(Haplotype)
* derivedFrom[haplotype] ^short = "Haplotype in the relationship"

Alias: $workflow-relatedArtifact = http://hl7.org/fhir/StructureDefinition/workflow-relatedArtifact
Alias: $supporting-info = http://hl7.org/fhir/StructureDefinition/workflow-supportingInfo
Alias: $hla-genotyping-results-allele-database = http://hl7.org/fhir/StructureDefinition/hla-genotyping-results-allele-database
Alias: $hla-genotyping-results-glstring = http://hl7.org/fhir/StructureDefinition/hla-genotyping-results-glstring

Profile:        GenomicReport
Parent:         DiagnosticReport
Id:             genomic-report
Title:          "Genomic Report"
Description:    "Genomic profile of DiagnosticReport."
* extension contains RecommendedAction named recommended-action 0..*
    and GenomicRiskAssessment named genomic-risk-assessment 0..*
    and GenomicReportNote named coded-note 0..*
    and $supporting-info named supporting-info 0..*
    and GenomicStudyReference named genomic-study 0..*
    and $hla-genotyping-results-allele-database named hla-genotyping-results-allele-database 0..1
    and $hla-genotyping-results-glstring named hla-genotyping-results-glstring 0..1
    and $workflow-relatedArtifact named workflow-relatedArtifact 0..*
* extension[GenomicReportNote] ^short = "Comments about the report that also contain a coded type"
* extension[GenomicReportNote] ^requirements = "Need to be able to provide free text additional information. Notes SHALL NOT contain information which can be captured in a structured way."
* extension[GenomicReportNote] ^comment = """
May include general statements about the report, or statements about significant, unexpected or unreliable results values, or information about its source when relevant to its interpretation.
The CodedAnnotation data type, while not allowing for or intending to make the content computable, does allow the author to indicate the type of note. This does not replace the use of results or conclusion or conclusionCode.
One important note is that Annotation is a FHIR data type, this is **NOT** about annotations in the genomic context.
"""
// add this comment to prevent an link error, as the base spec includes a link to 'supportingInfo extension' but the link doesn't convert correctly
* extension[$workflow-relatedArtifact] ^comment = """
Note that in contrast this extension, the supportingInfo extension references other resources from the patient record that were used in creating the resource.
"""

* extension[GenomicStudyReference] ^short = "Reference to full details of an genomic study associated with the diagnostic report"
* code = $LNC#51969-4
* category ^slicing.discriminator.type = #value
* category ^slicing.discriminator.path = "coding"
* category ^slicing.rules = #open
* category ^slicing.description = "Slice based on the category code pattern"
* category contains Genetics 1..1
//* category[Genetics].coding.system = "http://terminology.hl7.org/CodeSystem/v2-0074"
* category[Genetics].coding 1..1
* category[Genetics].coding = $DIAGNOSTICSERVICE#GE
* effective[x] only dateTime
* result ^slicing.discriminator.type = #profile
* result ^slicing.discriminator.path = "resolve()"
* result ^slicing.rules = #open
* result ^slicing.description = "Slice based on the reference profile and code pattern"
* result contains 
    diagnostic-implication 0..* and
    therapeutic-implication 0..* and
	molecular-consequence 0..* and
    variant 0..* and
    sequence-phase-relation 0..* and 
    genotype 0..* and 
    haplotype 0..* and
    biomarker 0..* 
* result[diagnostic-implication] only Reference(DiagnosticImplication)
* result[diagnostic-implication] ^short = "Diagnostic Implication"
* result[therapeutic-implication] only Reference(TherapeuticImplication)
* result[therapeutic-implication] ^short = "Therapeutic Implication"
* result[molecular-consequence] only Reference(MolecularConsequence)
* result[molecular-consequence] ^short = "Molecular Consequence"
* result[variant] only Reference(Variant)
* result[variant] ^short = "Variant"
* result[sequence-phase-relation] only Reference(SequencePhaseRelationship)
* result[sequence-phase-relation] ^short = "Sequence Phase Relationship"
* result[genotype] only Reference(Genotype)
* result[genotype] ^short = "Genotype"
* result[haplotype] only Reference(Haplotype)
* result[haplotype] ^short = "Haplotype"
* result[biomarker] only Reference(MolecularBiomarker)
* result[biomarker] ^short = "MolecularBiomarker"
* conclusion ^short = "Assessment of overall results"
* conclusionCode ^short = "Coarse overall interpretation of the genomic results"

Profile:        GenomicDataFile
Parent:         DocumentReference
Id:             genomic-data-file
Title:          "Genomic Data File"
Description:    "A profile of DocumentReference used to represent a genomics file."
* context.related only Reference(GenomicReport)
* description ^short = "Human-readable description to provide guidance on how the file was generated"


---

// File: input/fsh/CGImplications.fsh

Profile:        GenomicImplication
Parent:         GenomicBase
Id:             implication
Title:          "Genomic Implication"
Description:    "Properties common to genomic implications expressed as computable discrete elements."
* ^abstract = true
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* extension contains $workflow-relatedArtifact named workflow-relatedArtifact 0..*
* extension[$workflow-relatedArtifact] ^requirements = "This SHOULD be used to deliver artifacts that are relevant to the implication."
// add this comment to prevent an link error, as the base spec includes a link to 'supportingInfo extension' but the link doesn't convert correctly
* extension[$workflow-relatedArtifact] ^comment = """
Note that in contrast this extension, the supportingInfo extension references other resources from the patient record that were used in creating the resource.
"""
* value[x] 0..0
// * derivedFrom ^slicing.discriminator.type = #profile
// * derivedFrom ^slicing.discriminator.path = "resolve()"
// * derivedFrom ^slicing.rules = #open
// * derivedFrom ^slicing.description = "Slice based on the resolve().code type"
* derivedFrom 1..*
* derivedFrom contains variant 0..* and
    genotype 0..* and
    haplotype 0..* and 
    biomarker 0..*
* derivedFrom[variant] only Reference(Variant)
* derivedFrom[variant] ^short = "Variant the implication is derived from"
* derivedFrom[genotype] only Reference(Genotype)
* derivedFrom[genotype] ^short = "Genotype the implication is derived from"
* derivedFrom[haplotype] only Reference(Haplotype)
* derivedFrom[haplotype] ^short = "Haplotype the implication is derived from"
* derivedFrom[biomarker] only Reference(MolecularBiomarker)
* derivedFrom[biomarker] ^short = "MolecularBiomarker the implication is derived from"
// * component ^slicing.discriminator.type = #value
// * component ^slicing.discriminator.path = "code"
// * component ^slicing.rules = #open
// * component ^slicing.description = "Slice based on the component.code pattern"
* component contains
    evidence-level 0..* and
    clinical-significance 0..1
* component[evidence-level].code = $LNC#93044-6
* component[evidence-level].code ^short = "93044-6"
* component[evidence-level] ^short = "Level of Evidence"
* component[evidence-level] ^definition = "The amount of observed support for the association between an implication and a variant / haplotype / genotype / biomarker. There are dozens if not hundreds of evidence-level value sets, generally providing an ordinal range of codes from low evidence (e.g. 'predicted', 'case report', '1-star') to high evidence (e.g. 'professional society guideline', 'expert panel consensus', '1A')."
* component[evidence-level].value[x] only CodeableConcept
* component[evidence-level].value[x] 1..1
* component[evidence-level].value[x] from EvidenceLevelExampleVS (example)
* component[evidence-level].value[x] ^binding.description = "PharmGKB or ClinVar"
* component[evidence-level].value[x] ^short = "1A | 1B | 2A | 2B | 3 | 4 | 4-star | 3-star | 2-star | 1-star | no-star"

* component.extension contains RelatedArtifactComponent named workflow-relatedArtifactComponent 0..*
* component.extension[RelatedArtifactComponent] ^requirements = "This SHOULD be used to deliver artifacts that are specific to the component code and value."

* component[clinical-significance] ^short = "Clinical significance"
* component[clinical-significance] ^definition = "The clinical impact of an implication on a person's health. There are dozens if not hundreds of clinical-significance value sets, generally providing an ordinal range of codes from low significance (e.g. 'benign') to high significance (e.g. 'pathogenic', 'oncogenic','predictive of drug response')."
* component[clinical-significance].code = $LNC#53037-8
* component[clinical-significance].code ^short = "53037-8"
* component[clinical-significance].value[x] only CodeableConcept
* component[clinical-significance].value[x] 1..1
* component[clinical-significance].value[x] from http://loinc.org/vs/LL4034-6 (example)
* component[clinical-significance].value[x] ^short = "Pathogenic | Likely pathogenic | Uncertain significance | Likely benign | Benign"

Profile:        DiagnosticImplication
Parent:         GenomicImplication
Id:             diagnostic-implication
Title:          "Diagnostic Implication"
Description:    "Observation stating a diagnostic annotation (e.g. disease risk) on one or more genotype/haplotype/variant/biomarker observations."
* . ^short = "Diagnostic Implication"



* extension contains GenomicRiskAssessment named genomic-risk-assessment 0..*
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* code = TbdCodesCS#diagnostic-implication
* code ^short = "diagnostic-implication"
// * component ^slicing.discriminator.type = #value
// * component ^slicing.discriminator.path = "code"
// * component ^slicing.rules = #open
// * component ^slicing.description = "Slice based on the component.code pattern"
* component contains
    predicted-phenotype 0..* and
    mode-of-inheritance	0..1
* component[predicted-phenotype] ^short = "Predicted phenotype"
* component[predicted-phenotype] ^definition = "An observable characteristic (e.g., condition; disease) of an individual, as predicted by the presence of associated molecular finding(s)associated with the variant.  A code set is not specified, but it is ideal to use terms related to medical findings. Some examples are SNOMED CT descendants of 'Clinical finding' (404684003), ICD-10-CM chapters 1-18 (codes starting with letters A-R), and/or all of Human Phenotype Ontology (HPO). For example, if an individual's variant is associated with Type I Ehlers-Danlos syndrome, a valid response from SNOMED CT would be 'Ehlers-Danlos syndrome, type 1 (code 83470009)'."
* component[predicted-phenotype].code = $LNC#81259-4
* component[predicted-phenotype].code ^short = "81259-4"
* component[predicted-phenotype].value[x] only CodeableConcept
* component[predicted-phenotype].value[x] ^short = "Phenotype code, e.g. from SNOMED CT Clinical finding, ICD-10-CM chapters 1-18, or HPO"
* component[predicted-phenotype].value[x] ^binding.strength = #example
* component[predicted-phenotype].value[x] ^binding.description = "Multiple bindings accepted"
* component[predicted-phenotype].value[x] 1..1
* component[mode-of-inheritance] ^short = "Mode of Inheritance"
* component[mode-of-inheritance] ^definition = "The transmission pattern of the condition/phenotype in a pedigree. Values originally curated by GA4GH." 
* component[mode-of-inheritance].code = TbdCodesCS#condition-inheritance
* component[mode-of-inheritance].code ^short = "condition-inheritance"
* component[mode-of-inheritance].value[x] only CodeableConcept
* component[mode-of-inheritance].value[x] 1..1
* component[mode-of-inheritance].value[x] from ConditionInheritanceModeVS (preferred)
* component[mode-of-inheritance].value[x] ^short = "Autosomal dominant | Autosomal recessive | X-linked | ... (more)"

Profile:        TherapeuticImplication
Parent:         GenomicImplication
Id:             therapeutic-implication
Title:          "Therapeutic Implication"
Description:    "Observation stating a therapeutic annotation (e.g. drug susceptibility, clinical trial eligibility) on one or more genotype/haplotype/variant/biomarker observations."
* . ^short = "Therapeutic Implication"
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* code = TbdCodesCS#therapeutic-implication
* code ^short = "therapeutic-implication"
// * component ^slicing.discriminator.type = #value
// * component ^slicing.discriminator.path = "code"
// * component ^slicing.rules = #open
// * component ^slicing.description = "Slice based on the component.code pattern"
* component contains
    therapeutic-implication 0..* and
    phenotypic-treatment-context 0..* and
    medication-assessed 0..* and
    therapy-assessed 0..*

* component[therapeutic-implication] ^short = "Therapeutic Implication"
* component[therapeutic-implication] ^definition = "A predicted ramification based on the presence of associated molecular finding(s). Ramifications may include alterations in drug metabolism (or pharmacokinetics) that determine the concentration of the drug, prodrug, and/or break-down products over time; alterations in drug efficacy (or pharmacodynamics) that determine how effective a drug is at a given concentration; alterations that alter the risk of adverse drug events, or other types of implications that indicate altered responsiveness to other types of therapies."
* component[therapeutic-implication].code = TbdCodesCS#therapeutic-implication
* component[therapeutic-implication].code ^short = "therapeutic-implication"
* component[therapeutic-implication].value[x] only CodeableConcept
* component[therapeutic-implication].value[x] 1..1
* component[therapeutic-implication].value[x] from GeneticTherapeuticImplicationsVS (extensible)
* component[therapeutic-implication].value[x] ^short = "Responsive | Resistant | Poor metabolizer | Rapid metabolizer | Decreased function | Increased function | Does not meet eligibility criteria for clinical trial | ... (more)"

* component[phenotypic-treatment-context].code = $LNC#81259-4
* component[phenotypic-treatment-context].code ^short = "81259-4"
* component[phenotypic-treatment-context] ^short = "Phenotypic treatment context"
* component[phenotypic-treatment-context] ^definition = "A condition whose treatment in medication-assessed or therapy-assessed is contextually impacted by the variant. A code set is not specified, but it is ideal to use terms related to medical findings. Some examples are SNOMED CT descendants of 'Clinical finding' (404684003), ICD-10-CM chapters 1-18 (codes starting with letters A-R), and all of Human Phenotype Ontology (HPO). For example, if an individual's variant affects the efficacy of imatinib in non-small cell lung cancer, a valid response from SNOMED CT would be 'Non-small cell lung cancer (code 254637007)'."
* component[phenotypic-treatment-context].value[x] only CodeableConcept
* component[phenotypic-treatment-context].value[x] ^binding.strength = #example
* component[phenotypic-treatment-context].value[x] ^binding.description = "Binding not yet defined (examples: SNOMED CT Clinical findings, ICD-10-CM chapters 1-18, HPO terms)"
* component[phenotypic-treatment-context].value[x] 1..1
* component[phenotypic-treatment-context].value[x] ^short = "Contextual phenotype/condition code"

* component[medication-assessed].code = $LNC#51963-7
* component[medication-assessed].code ^short = "51963-7"
* component[medication-assessed] ^short = "Medication Assessed"
* component[medication-assessed] ^definition = "The codified medication whose implication is being described."
* component[medication-assessed] ^requirements = "If this component is used, it should not conflict with the extension also named 'medication-assessed' which allows for more detailed medication data to be shared."
* component[medication-assessed].value[x] only CodeableConcept
* component[medication-assessed].value[x] ^binding.strength = #example
* component[medication-assessed].value[x] ^binding.description = "Binding not yet defined (RxNorm or similar)"
* component[medication-assessed].value[x] 1..1
* component[medication-assessed].value[x] ^short = "Medication code"
* component[medication-assessed].extension contains MedicationAssessedReference named medication-assessed-reference 0..*
* component[medication-assessed].extension[MedicationAssessedReference] ^requirements = "NOTE - If this extension is used, it SHALL NOT conflict with the code delivered in the component.valueCodeableConcept."

* component[therapy-assessed] ^short = "Non-medication therapy assessed"
* component[therapy-assessed] ^definition = "The non-medication therapy (e.g., altered diet, radiation therapy, surgery) implicated with respect to the related finding(s) and cancer/phenotypic treatment context"
* component[therapy-assessed].code = TbdCodesCS#associated-therapy
* component[therapy-assessed].code ^short = "associated-therapy"
* component[therapy-assessed].value[x] only CodeableConcept
* component[therapy-assessed].value[x] ^binding.strength = #example
* component[therapy-assessed].value[x] ^binding.description = "Binding not yet defined"
* component[therapy-assessed].value[x] 1..1
* component[therapy-assessed].extension contains TherapyAssessedReference named therapy-assessed-reference 0..*
* component[therapy-assessed].extension[TherapyAssessedReference] ^requirements = "NOTE - If this extension is used, it SHALL NOT conflict with the code delivered in the component.valueCodeableConcept."

Profile:        MedicationRecommendation
Parent:         Task
Id:             medication-recommendation
Title:          "Medication Recommendation"
Description:    "Task proposing medication recommendations based on the implications of genomic findings."
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* status 1..1
* status = $TASKSTATUS#requested
* intent 1..1
* intent = $TASKINTENT#proposal
* code from http://loinc.org/vs/LL4049-4 
* focus only Reference(MedicationStatement)
* reasonReference only Reference(TherapeuticImplication)

Profile:        FollowupRecommendation
Parent:         Task
Id:             followup-recommendation
Title:          "Followup Recommendation"
Description:    "Task proposing a follow-up that is recommended based on the implications of genomic findings."
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* status 1..1
* status = $TASKSTATUS#requested
* intent 1..1
* intent = $TASKINTENT#proposal
* code from http://loinc.org/vs/LL1037-2 (extensible)
* reasonReference only Reference(TherapeuticImplication or DiagnosticImplication or MolecularConsequence)

Profile:        MolecularConsequence
Parent:         GenomicImplication
Id:             molecular-consequence
Title:          "Molecular Consequence"
Description:    "Profile for communicating the calculated or observed effect of a DNA variant, generally on its downstream transcript and, if applicable, ensuing protein sequence. Molecular consequences may also apply to DNA, such as intergenic regions where there are no transcripts (e.g. 'regulatory_region_variant'). Component 'feature-consequence' categorizes the structural implications of a variant (e.g. the variant disrupts a regulatory region, the variant is an inframe insertion), whereas component 'functional-effect' categorizes how the variant affects overall function (e.g. is predicted to result in loss of gene function)."
* . ^short = "Molecular Consequence"
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* code = TbdCodesCS#molecular-consequence
* code ^short = "molecular-consequence"

//* valueCodeableConcept from http://loinc.org/vs/LL1971-2 (required)
//* valueCodeableConcept ^short = "Indeterminate | No call | Present | Absent."
//* valueCodeableConcept ^definition = "The presence or absence of the variant described in the components. If not searching for specific variations and merely reporting what's found, the profile's value should be set to 'Present'."

// * component ^slicing.discriminator.type = #value
// * component ^slicing.discriminator.path = "code"
// * component ^slicing.rules = #open
// * component ^slicing.description = "Slice based on the component.code pattern"
* component contains
    coding-hgvs 0..1 and
    transcript-ref-seq 0..1 and
    protein-hgvs 0..1 and
    protein-ref-seq 0..1 and
    feature-consequence 0..* and
    functional-effect 0..1

* component[coding-hgvs].code = $LNC#48004-6
* component[coding-hgvs].code ^short = "48004-6"
* component[coding-hgvs] ^short = "DNA change (c.HGVS)"
* component[coding-hgvs] ^definition = "Human Genome Variation Society (HGVS) nomenclature for a single DNA marker. The use of the nomenclature must be extended to describe non-variations (aka. wild types) see samples for wild type examples."
* component[coding-hgvs].value[x] only CodeableConcept
* component[coding-hgvs].value[x] 1..1
* component[coding-hgvs].value[x] from HGVSVS (required) 
* component[coding-hgvs].value[x] ^short = "A valid HGVS-formatted 'c.' string, e.g. NM_005228.5:c.2369C>T."

* component[transcript-ref-seq].code = $LNC#51958-7
* component[transcript-ref-seq].code ^short = "51958-7"
* component[transcript-ref-seq] ^short = "Reference Transcript"
* component[transcript-ref-seq] ^definition = "NCBI's RefSeq ('NM_...'), Ensembl ('ENST...'), and LRG ('LRG...' plus 't1' to indicate transcript)"
* component[transcript-ref-seq].value[x] only CodeableConcept
* component[transcript-ref-seq].value[x] ^binding.strength = #example
* component[transcript-ref-seq].value[x] ^binding.description = "Multiple bindings acceptable (NCBI or LRG)"
* component[transcript-ref-seq].value[x] 1..1
* component[transcript-ref-seq].value[x] ^short = "Versioned transcript reference sequence identifier"

* component[protein-hgvs].code = $LNC#48005-3
* component[protein-hgvs].code ^short = "48005-3"
* component[protein-hgvs] ^short = "Protein (Amino Acid) Change - pHGVS"
* component[protein-hgvs] ^definition = "Description of the protein (amino acid) sequence change using a valid HGVS-formatted string. The description of the variant is surrounded in parentheses if it is calculated rather than directly observed."
* component[protein-hgvs].value[x] only CodeableConcept
* component[protein-hgvs].value[x] 1..1
* component[protein-hgvs].value[x] from HGVSVS (required)
* component[protein-hgvs].value[x] ^short = "A valid HGVS-formatted 'p.' string, e.g. NP_000050.2:p.(Asn1836Lys)"

* component[protein-ref-seq].code = TbdCodesCS#protein-ref-seq
* component[protein-ref-seq].code ^short = "protein-ref-seq"
* component[protein-ref-seq] ^short = "Protein Reference Sequence"
* component[protein-ref-seq] ^definition = "ID of the protein reference sequence, which includes transcribed and non transcribed stretches. It covers the entire protein described."
* component[protein-ref-seq].value[x] only CodeableConcept
* component[protein-ref-seq].value[x] ^short = "Versioned protein reference sequence identifier"
* component[protein-ref-seq].value[x] ^binding.strength = #example
* component[protein-ref-seq].value[x] ^binding.description = "Multiple bindings acceptable (NCBI or LRG)"
* component[protein-ref-seq].value[x] 1..1

* component[feature-consequence].code = TbdCodesCS#feature-consequence
* component[feature-consequence].code ^short = "feature-consequence"
* component[feature-consequence] ^short = "Feature Consequence"
* component[feature-consequence] ^definition = "A feature consequence categorizes the structural implications of a variant (e.g. the variant disrupts a regulatory region, the variant is an inframe insertion). NOTE: The bound Molecular Consequence value set is extensible. Variant annotation tools such as snpEff provide a rich assortment of feature consequences (see http://example.org/pcingola.github.io/SnpEff/se_inputoutput/#effect-prediction-details), some of which are outside the value set. "
* component[feature-consequence].value[x] only CodeableConcept
* component[feature-consequence].value[x] ^short = "stop_lost | stop_gained | inframe_insertion | frameshift_variant | ... (many)"
* component[feature-consequence].value[x] 1..1
* component[feature-consequence].value[x] from MolecularConsequenceVS (extensible)
* component[feature-consequence].value[x] ^binding.description = "Concepts in sequence ontology under SO:0001537."

* component[functional-effect].code = TbdCodesCS#functional-effect
* component[functional-effect].code ^short = "functional-effect"
* component[functional-effect] ^short = "Functional Effect"
* component[functional-effect] ^definition = "A predicted or observed effect of a variant on the ability of its gene(s) or protein product(s) to function."
* component[functional-effect].value[x] only CodeableConcept
* component[functional-effect].value[x] 1..1
* component[functional-effect].value[x] ^short = "gain of function | loss of function | loss of heterozygosity | decreased transcript level | increased transcipt level | dominant negative variant | ... (more)"
* component[functional-effect].value[x] from FunctionalEffectVS (extensible)
* component[functional-effect].value[x] ^binding.description = "Sequence Ontology terms under SO:0001536"

---

// File: input/fsh/CGInvariants.fsh

Invariant:      cnt-3
Description:    "There SHALL be a code with a value of '1' if there is a value. If system is present, it SHALL be UCUM. If present, the value SHALL be a whole number."
Expression:     "(code.exists() or value.empty()) and (system.empty() or system = %ucum) and (code.empty() or code = '1') and (value.empty() or value.hasValue().not() or value.toString().contains('.').not())"
Severity:       #error



---

// File: input/fsh/CGOperations.fsh

Instance: find-subject-variants
InstanceOf: OperationDefinition
Title: "Find Subject Variants"
Usage: #definition
Description: "Determine if simple variants are present that overlap range(s)."
* name = "FindSubjectVariants"
* title = "Find Subject Variants"
* status = #active
* kind = #operation
* publisher = "HL7 International Clinical Genomics Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #subject
  * use = #in
  * min = 1
  * max = "1"
  * documentation = "The subject of interest."
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #ranges
  * use = #in
  * min = 1
  * max = "*"
  * documentation = "List of regions to be searched for variants. Must be in zero-based RefSeq:Integer-range format (e.g. 'NC_000007.14:55174721-55174820')."
  * type = #string
  * searchType = #special
* parameter[+]
  * name = #testIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of test identifiers. Only results originating from one of these tests will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #testDateRange
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Supply a date range. Only results generated during this range will be returned."
  * type = #Period
* parameter[+]
  * name = #specimenIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of specimen identifiers. Only results derived from one of these specimens will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #genomicSourceClass
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Enables an App to limit results to those that are 'germline' or 'somatic'. Default is to include variants irrespective of genomic source class."
  * type = #code
* parameter[+]
  * name = #includeVariants
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Include variants in response if set to true. Default=false."
  * type = #boolean
* parameter[+]
  * name = #includePhasing
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "If true, then assume includeVariants=true, and return variants and sequence-phase-relationships between returned variants. Default=false."
  * type = #boolean
* parameter[+]
  * name = #variants
  * use = #out
  * min = 1
  * max = "*"
  * documentation = "(one for each range in rangeList)"
  * part[+]
    * name = #rangeItem
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "range from rangeList"
    * type = #string
  * part[+]
    * name = #presence
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "True if as least one variant is identified in the range"
    * type = #boolean
  * part[+]
    * name = #variant
    * use = #out
    * min = 0
    * max = "*"
    * documentation = "If includeVariants=true then include variants in the range. Variants must conform to [Profile: http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant] and minimally include valueCodeableConcept; component:genomic-ref-seq; component:ref-allele; component:alt-allele; component:coordinate-system (valued with '0-based interval counting'); component:exact-start-end."
    * type = #Observation
    * extension[operationAllowedType].valueUri = Canonical(Variant)
  * part[+]
    * name = #sequencePhaseRelationship
    * use = #out
    * min = 0
    * max = "*"
    * documentation = "If includePhasing=true and includeVariants=true then include sequence-phase-relationships between returned variants. Sequence phase relationships must conform to [Profile: http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition-sequence-phase-relationship.html] and minimally include valueCodeableConcept and 2..2 derivedFrom:variant references."
    * type = #Observation
    * extension[operationAllowedType].valueUri = Canonical(Variant)

Instance: find-subject-specific-variants
InstanceOf: OperationDefinition
Title: "Find Subject Specific Variants"
Usage: #definition
Description: "Determine if specified simple variants are present."
* name = "FindSubjectSpecificVariants"
* title = "Find Subject Specific Variants"
* status = #active
* kind = #operation
* publisher = "HL7 International Clinical Genomics Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #subject
  * use = #in
  * min = 1
  * max = "1"
  * documentation = "The subject of interest."
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #variants
  * use = #in
  * min = 1
  * max = "*"
  * documentation = "List of variants being sought. Must be in HGVS or SPDI format."
  * type = #string
  * searchType = #string
* parameter[+]
  * name = #testIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of test identifiers. Only results originating from one of these tests will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #testDateRange
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Supply a date range. Only results generated during this range will be returned."
  * type = #Period
* parameter[+]
  * name = #specimenIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of specimen identifiers. Only results derived from one of these specimens will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #genomicSourceClass
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Enables an App to limit results to those that are 'germline' or 'somatic'. Default is to include variants irrespective of genomic source class."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #variants
  * use = #out
  * min = 1
  * max = "*"
  * documentation = "(one for each variant in variantList)"
  * part[+]
    * name = #variantItem
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "variant from variantList"
    * type = #string
  * part[+]
    * name = #presence
    * use = #out
    * min = 1
    * max = "1"
    * type = #boolean
  * part[+]
    * name = #variant
    * use = #out
    * min = 0
    * max = "*"
    * documentation = "Variants must conform to [Profile: http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant] and minimally include valueCodeableConcept; component:genomic-ref-seq; component:ref-allele; component:alt-allele; component:coordinate-system (valued with '0-based interval counting'); component:exact-start-end."
    * type = #Observation
    * extension[operationAllowedType].valueUri = Canonical(Variant)

Instance: find-subject-structural-intersecting-variants
InstanceOf: OperationDefinition
Title: "Find Subject Structural Intersecting Variants"
Usage: #definition
Description: "Determine if structural variants are present that overlap range(s)."
* name = "FindSubjectStructuralIntersectingVariants"
* title = "Find Subject Structural Intersecting Variants"
* status = #active
* kind = #operation
* publisher = "HL7 International Clinical Genomics Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #subject
  * use = #in
  * min = 1
  * max = "1"
  * documentation = "The subject of interest."
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #ranges
  * use = #in
  * min = 1
  * max = "*"
  * documentation = "List of regions to be searched for variants. Must be in zero-based RefSeq:Integer-range format (e.g. 'NC_000007.14:55174721-55174820')."
  * type = #string
  * searchType = #special
* parameter[+]
  * name = #testIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of test identifiers. Only results originating from one of these tests will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #testDateRange
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Supply a date range. Only results generated during this range will be returned."
  * type = #Period
* parameter[+]
  * name = #specimenIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of specimen identifiers. Only results derived from one of these specimens will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #genomicSourceClass
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Enables an App to limit results to those that are 'germline' or 'somatic'. Default is to include variants irrespective of genomic source class."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #includeVariants
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Include variants in response if set to true. Default=false."
  * type = #boolean
* parameter[+]
  * name = #variants
  * use = #out
  * min = 1
  * max = "*"
  * documentation = "(one for each range in rangeList)"
  * part[+]
    * name = #rangeItem
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "range from rangeList"
    * type = #string
  * part[+]
    * name = #presence
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "True if as least one variant is identified that intersects the range"
    * type = #boolean
  * part[+]
    * name = #variant
    * use = #out
    * min = 0
    * max = "*"
    * documentation = "If includeVariants=true then include variants that intersect the range. Variants must conform to [Profile: http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant] and minimally include valueCodeableConcept; component:coding-change-type; component:genomic-ref-seq; component:coordinate-system (valued with '0-based interval counting'); components outer-start-end and/or inner-start-end."
    * type = #Observation
    * extension[operationAllowedType].valueUri = Canonical(Variant)

Instance: find-subject-structural-subsuming-variants
InstanceOf: OperationDefinition
Title: "Find Subject Structural Subsuming Variants"
Usage: #definition
Description: "Determine if structural variants are present that fully subsume a range."
* name = "FindSubjectStructuralSubsumingVariants"
* title = "Find Subject Structural Subsuming Variants"
* status = #active
* kind = #operation
* publisher = "HL7 International Clinical Genomics Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #subject
  * use = #in
  * min = 1
  * max = "1"
  * documentation = "The subject of interest."
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #ranges
  * use = #in
  * min = 1
  * max = "*"
  * documentation = "List of regions to be searched for variants. Must be in zero-based RefSeq:Integer-range format (e.g. 'NC_000007.14:55174721-55174820')."
  * type = #string
  * searchType = #special
* parameter[+]
  * name = #testIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of test identifiers. Only results originating from one of these tests will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #testDateRange
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Supply a date range. Only results generated during this range will be returned."
  * type = #Period
* parameter[+]
  * name = #specimenIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of specimen identifiers. Only results derived from one of these specimens will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #genomicSourceClass
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Enables an App to limit results to those that are 'germline' or 'somatic'. Default is to include variants irrespective of genomic source class."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #includeVariants
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Include variants in response if set to true. Default=false."
  * type = #boolean
* parameter[+]
  * name = #variants
  * use = #out
  * min = 1
  * max = "*"
  * documentation = "(one for each range in rangeList)"
  * part[+]
    * name = #rangeItem
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "range from rangeList"
    * type = #string
  * part[+]
    * name = #presence
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "True if as least one variant is identified that subsumes the range"
    * type = #boolean
  * part[+]
    * name = #variant
    * use = #out
    * min = 0
    * max = "*"
    * documentation = "If includeVariants=true then include variants that subsume the range. Variants must conform to [Profile: http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant] and minimally include valueCodeableConcept; component:coding-change-type; component:genomic-ref-seq; component:coordinate-system (valued with '0-based interval counting'); components outer-start-end and/or inner-start-end."
    * type = #Observation
    * extension[operationAllowedType].valueUri = Canonical(Variant)

Instance: find-subject-haplotypes
InstanceOf: OperationDefinition
Title: "Find Subject Haplotypes"
Usage: #definition
Description: "Retrieve haplotypes/genotypes for specified genes."
* name = "FindSubjectHaplotypes"
* title = "Find Subject Haplotypes"
* status = #active
* kind = #operation
* publisher = "HL7 International Clinical Genomics Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #subject
  * use = #in
  * min = 1
  * max = "1"
  * documentation = "The subject of interest."
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #genes
  * use = #in
  * min = 1
  * max = "*"
  * documentation = "List of genes to be searched. Must be in token or codesystem|code format."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #testIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of test identifiers. Only results originating from one of these tests will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #testDateRange
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Supply a date range. Only results generated during this range will be returned."
  * type = #Period
* parameter[+]
  * name = #specimenIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of specimen identifiers. Only results derived from one of these specimens will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #genomicSourceClass
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Enables an App to limit results to those that are 'germline' or 'somatic'. Default is to include haplotypes irrespective of genomic source class."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #haplotypes
  * use = #out
  * min = 1
  * max = "*"
  * documentation = "(one for each gene in geneList)"
  * part[+]
    * name = #geneItem
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "gene from geneList"
    * type = #string
  * part[+]
    * name = #haplotype
    * use = #out
    * min = 0
    * max = "*"
    * documentation = "Haplotypes must conform to [Profile: http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/haplotype]."
    * type = #Observation
    * extension[operationAllowedType].valueUri = Canonical(Haplotype)
  * part[+]
    * name = #genotype
    * use = #out
    * min = 0
    * max = "*"
    * documentation = "Genotypes must conform to [Profile: http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/genotype]."
    * type = #Observation
    * extension[operationAllowedType].valueUri = Canonical(Genotype)

Instance: find-subject-specific-haplotypes
InstanceOf: OperationDefinition
Title: "Find Subject Specific Haplotypes"
Usage: #definition
Description: "See if specified haplotypes/genotypes are present."
* name = "FindSubjectSpecificHaplotypes"
* title = "Find Subject Specific Haplotypes"
* status = #active
* kind = #operation
* publisher = "HL7 International Clinical Genomics Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #subject
  * use = #in
  * min = 1
  * max = "1"
  * documentation = "The subject of interest."
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #haplotypes
  * use = #in
  * min = 1
  * max = "*"
  * documentation = "List of haplotypes and/or genotypes being sought. Must be in token or codesystem|code format."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #testIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of test identifiers. Only results originating from one of these tests will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #testDateRange
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Supply a date range. Only results generated during this range will be returned."
  * type = #Period
* parameter[+]
  * name = #specimenIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of specimen identifiers. Only results derived from one of these specimens will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #genomicSourceClass
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Enables an App to limit results to those that are 'germline' or 'somatic'. Default is to include haplotypes irrespective of genomic source class."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #haplotypes
  * use = #out
  * min = 1
  * max = "*"
  * documentation = "(one for each haplotype in haplotypeList)"
  * part[+]
    * name = #haplotypeItem
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "haplotype/genotype from haplotypeList"
    * type = #string
  * part[+]
    * name = #presence
    * use = #out
    * min = 1
    * max = "1"
    * type = #boolean
  * part[+]
    * name = #haplotype
    * use = #out
    * min = 0
    * max = "*"
    * documentation = "Haplotypes must conform to [Profile: http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/haplotype]."
    * type = #Observation
    * extension[operationAllowedType].valueUri = Canonical(Haplotype)
  * part[+]
    * name = #genotype
    * use = #out
    * min = 0
    * max = "*"
    * documentation = "Genotypes must conform to [Profile: http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/genotype]."
    * type = #Observation
    * extension[operationAllowedType].valueUri = Canonical(Genotype)

Instance: find-subject-tx-implications
InstanceOf: OperationDefinition
Title: "Find Subject Treatment Implications"
Usage: #definition
Description: "Retrieves genetic therapeutic implications for variants/haplotypes/genotypes."
* name = "FindSubjectTxImplications"
* title = "Find Subject Treatment Implications"
* status = #active
* kind = #operation
* publisher = "HL7 International Clinical Genomics Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #subject
  * use = #in
  * min = 1
  * max = "1"
  * documentation = "The subject of interest."
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #variants
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of variants from which implications are derived. Must be in HGVS or SPDI format."
  * type = #string
  * searchType = #string
* parameter[+]
  * name = #ranges
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of regions to be searched for variants. Must be in zero-based RefSeq:Integer-range format (e.g. 'NC_000007.14:55174721-55174820')."
  * type = #string
  * searchType = #special
* parameter[+]
  * name = #haplotypes
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of haplotypes and/or genotypes from which implications are derived. Must be in token or codesystem|code format."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #treatments
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of medications and/or other therapeutic interventions for which implications are sought. Must be in token or codesystem|code format."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #conditions
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of conditions for which implications are sought. Must be in token or codesystem|code format."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #testIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of test identifiers. Only results originating from one of these tests will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #testDateRange
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Supply a date range. Only results generated during this range will be returned."
  * type = #Period
* parameter[+]
  * name = #specimenIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of specimen identifiers. Only results derived from one of these specimens will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #genomicSourceClass
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Enables an App to limit results to those that are 'germline' or 'somatic'. Default is to include variants irrespective of genomic source class."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #implication
  * use = #out
  * min = 0
  * max = "*"
  * documentation = "Implications must conform to [Profile: http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/therapeutic-implication]. The target(s) of the implication's derivedFrom shall also be included in the response."
  * type = #Observation
  * extension[operationAllowedType].valueUri = Canonical(TherapeuticImplication)
* parameter[+]
  * name = #variant
  * use = #out
  * min = 0
  * max = "*"
  * documentation = "Variants must conform to [Profile: http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant]."
  * type = #Observation
  * extension[operationAllowedType].valueUri = Canonical(Variant)
* parameter[+]
  * name = #haplotype
  * use = #out
  * min = 0
  * max = "*"
  * documentation = "Haplotypes must conform to [Profile: http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/haplotype]."
  * type = #Observation
  * extension[operationAllowedType].valueUri = Canonical(Haplotype)
* parameter[+]
  * name = #genotype
  * use = #out
  * min = 0
  * max = "*"
  * documentation = "Genotypes must conform to [Profile: http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/genotype]."
  * type = #Observation
  * extension[operationAllowedType].valueUri = Canonical(Genotype)

Instance: find-subject-dx-implications
InstanceOf: OperationDefinition
Title: "Find Subject Diagnostic Implications"
Usage: #definition
Description: "Retrieves genetic diagnostic implications for variants."
* name = "FindSubjectDxImplications"
* title = "Find Subject Diagnostic Implications"
* status = #active
* kind = #operation
* publisher = "HL7 International Clinical Genomics Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #subject
  * use = #in
  * min = 1
  * max = "1"
  * documentation = "The subject of interest."
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #variants
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of variants from which implications are derived. Must be in HGVS or SPDI format."
  * type = #string
  * searchType = #string
* parameter[+]
  * name = #ranges
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of regions to be searched for variants. Must be in zero-based RefSeq:Integer-range format (e.g. 'NC_000007.14:55174721-55174820')."
  * type = #string
  * searchType = #special
* parameter[+]
  * name = #conditions
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of conditions for which implications are sought. Must be in token or codesystem|code format."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #testIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of test identifiers. Only results originating from one of these tests will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #testDateRange
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Supply a date range. Only results generated during this range will be returned."
  * type = #Period
* parameter[+]
  * name = #specimenIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of specimen identifiers. Only results derived from one of these specimens will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #genomicSourceClass
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Enables an App to limit results to those that are 'germline' or 'somatic'. Default is to include variants irrespective of genomic source class."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #implication
  * use = #out
  * min = 0
  * max = "*"
  * documentation = "Implications must conform to [Profile: http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/diagnostic-implication]. The target(s) of the implication's derivedFrom shall also be included in the response."
  * type = #Observation
  * extension[operationAllowedType].valueUri = Canonical(DiagnosticImplication)
* parameter[+]
  * name = #variant
  * use = #out
  * min = 0
  * max = "*"
  * documentation = "Variants must conform to [Profile: http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant]."
  * type = #Observation
  * extension[operationAllowedType].valueUri = Canonical(Variant)

Instance: find-subject-molecular-consequences
InstanceOf: OperationDefinition
Title: "Find Subject Molecular Consequences"
Usage: #definition
Description: "Retrieves molecular consequences of a DNA variant."
* name = "FindSubjectMolecularConsequences"
* title = "Find Subject Molecular Consequences"
* status = #active
* kind = #operation
* publisher = "HL7 International Clinical Genomics Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #subject
  * use = #in
  * min = 1
  * max = "1"
  * documentation = "The subject of interest."
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #variants
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of variants from which consequences are derived. Must be in HGVS or SPDI format."
  * type = #string
  * searchType = #string
* parameter[+]
  * name = #ranges
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of regions to be searched for variants. Must be in zero-based RefSeq:Integer-range format (e.g. 'NC_000007.14:55174721-55174820')."
  * type = #string
  * searchType = #special
* parameter[+]
  * name = #featureConsequences
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of consequences sought. Must be in token or codesystem|code format. (These will generally be coded with Sequence Ontology codes under SO:0001537)"
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #testIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of test identifiers. Only results originating from one of these tests will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #testDateRange
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Supply a date range. Only results generated during this range will be returned."
  * type = #Period
* parameter[+]
  * name = #specimenIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "Supply a list of specimen identifiers. Only results derived from one of these specimens will be returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #genomicSourceClass
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Enables an App to limit results to those that are 'germline' or 'somatic'. Default is to include variants irrespective of genomic source class."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #consequence
  * use = #out
  * min = 0
  * max = "*"
  * documentation = "Consequences must conform to [Profile: http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/molecular-consequence]. The target(s) of the consequence's derivedFrom shall also be included in the response."
  * type = #Observation
  * extension[operationAllowedType].valueUri = Canonical(MolecularConsequence)
* parameter[+]
  * name = #variant
  * use = #out
  * min = 0
  * max = "*"
  * documentation = "Variants must conform to [Profile: http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/variant]."
  * type = #Observation
  * extension[operationAllowedType].valueUri = Canonical(Variant)

Instance: find-population-specific-variants
InstanceOf: OperationDefinition
Title: "Find Population Specific Variants"
Usage: #definition
Description: "Retrieve count or list of patients having specified variants."
* name = "FindPopulationSpecificVariants"
* title = "Find Population Specific Variants"
* status = #active
* kind = #operation
* publisher = "HL7 International Clinical Genomics Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #variants
  * use = #in
  * min = 1
  * max = "*"
  * documentation = "List of variants being sought. Must be in HGVS or SPDI format."
  * type = #string
  * searchType = #string
* parameter[+]
  * name = #genomicSourceClass
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Enables an App to limit results to those that are 'germline' or 'somatic'. Default is to include variants irrespective of genomic source class."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #includePatientList
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Include list of matching patients if set to true. Default=false."
  * type = #boolean
* parameter[+]
  * name = #variants
  * use = #out
  * min = 1
  * max = "*"
  * part[+]
    * name = #variantItem
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "variant from variantList"
    * type = #string
  * part[+]
    * name = #numerator
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "Count of patients having this variant"
    * type = #Quantity
  * part[+]
    * name = #denominator
    * use = #out
    * min = 0
    * max = "1"
    * documentation = "Count of patients in the cohort searched"
    * type = #Quantity
  * part[+]
    * name = #subject
    * use = #out
    * min = 0
    * max = "*"
    * documentation = "Patient ID. Include if includePatientList=true"
    * type = #string

Instance: find-population-structural-intersecting-variants
InstanceOf: OperationDefinition
Title: "Find Population Structural Intersecting Variants"
Usage: #definition
Description: "Retrieve count or list of patients having structural intersecting variants in specified regions."
* name = "FindPopulationStructuralIntersectingVariants"
* title = "Find Population Structural Intersecting Variants"
* status = #active
* kind = #operation
* publisher = "HL7 International Clinical Genomics Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #ranges
  * use = #in
  * min = 1
  * max = "*"
  * documentation = "List of regions to be searched for variants. Must be in zero-based RefSeq:Integer-range format (e.g. 'NC_000007.14:55174721-55174820')."
  * type = #string
  * searchType = #special
* parameter[+]
  * name = #genomicSourceClass
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Enables an App to limit results to those that are 'germline' or 'somatic'. Default is to include variants irrespective of genomic source class."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #includePatientList
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Include list of matching patients if set to true. Default=false."
  * type = #boolean
* parameter[+]
  * name = #variants
  * use = #out
  * min = 1
  * max = "*"
  * part[+]
    * name = #rangeItem
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "range from rangeList"
    * type = #string
  * part[+]
    * name = #numerator
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "Count of patients having this variant"
    * type = #Quantity
  * part[+]
    * name = #denominator
    * use = #out
    * min = 0
    * max = "1"
    * documentation = "Count of patients in the cohort searched"
    * type = #Quantity
  * part[+]
    * name = #subject
    * use = #out
    * min = 0
    * max = "*"
    * documentation = "Patient ID. Include if includePatientList=true"
    * type = #string

Instance: find-population-structural-subsuming-variants
InstanceOf: OperationDefinition
Title: "Find Population Structural Subsuming Variants"
Usage: #definition
Description: "Retrieve count or list of patients having structural subsuming variants in specified regions."
* name = "FindPopulationStructuralSubsumingVariants"
* title = "Find Population Structural Subsuming Variants"
* status = #active
* kind = #operation
* publisher = "HL7 International Clinical Genomics Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #ranges
  * use = #in
  * min = 1
  * max = "*"
  * documentation = "List of regions to be searched for variants. Must be in zero-based RefSeq:Integer-range format (e.g. 'NC_000007.14:55174721-55174820')."
  * type = #string
  * searchType = #special
* parameter[+]
  * name = #genomicSourceClass
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Enables an App to limit results to those that are 'germline' or 'somatic'. Default is to include variants irrespective of genomic source class."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #includePatientList
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Include list of matching patients if set to true. Default=false."
  * type = #boolean
* parameter[+]
  * name = #variants
  * use = #out
  * min = 1
  * max = "*"
  * part[+]
    * name = #rangeItem
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "range from rangeList"
    * type = #string
  * part[+]
    * name = #numerator
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "Count of patients having this variant"
    * type = #Quantity
  * part[+]
    * name = #denominator
    * use = #out
    * min = 0
    * max = "1"
    * documentation = "Count of patients in the cohort searched"
    * type = #Quantity
  * part[+]
    * name = #subject
    * use = #out
    * min = 0
    * max = "*"
    * documentation = "Patient ID. Include if includePatientList=true"
    * type = #string

Instance: find-population-specific-haplotypes
InstanceOf: OperationDefinition
Title: "Find Population Specific Haplotypes"
Usage: #definition
Description: "Retrieve count or list of patients having specified genotypes/haplotypes."
* name = "FindPopulationSpecificHaplotypes"
* title = "Find Population Specific Haplotypes"
* status = #active
* kind = #operation
* publisher = "HL7 International Clinical Genomics Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #haplotypes
  * use = #in
  * min = 1
  * max = "*"
  * documentation = "List of haplotypes and/or genotypes being sought. Must be in token or codesystem|code format."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #genomicSourceClass
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Enables an App to limit results to those that are 'germline' or 'somatic'. Default is to include variants irrespective of genomic source class."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #includePatientList
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Include list of matching patients if set to true. Default=false."
  * type = #boolean
* parameter[+]
  * name = #haplotypes
  * use = #out
  * min = 1
  * max = "*"
  * documentation = "(one for each haplotype in haplotypeList)"
  * part[+]
    * name = #haplotypeItem
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "haplotype/genotype from haplotypeList"
    * type = #string
  * part[+]
    * name = #numerator
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "Count of patients having this variant"
    * type = #Quantity
  * part[+]
    * name = #denominator
    * use = #out
    * min = 0
    * max = "1"
    * documentation = "Count of patients in the cohort searched"
    * type = #Quantity
  * part[+]
    * name = #subject
    * use = #out
    * min = 0
    * max = "*"
    * documentation = "Patient ID. Include if includePatientList=true"
    * type = #string

Instance: find-population-tx-implications
InstanceOf: OperationDefinition
Title: "Find Population Treatment Implications"
Usage: #definition
Description: "Retrieve count or list of patients having therapeutic implications."
* name = "FindPopulationTxImplications"
* title = "Find Population Treatment Implications"
* status = #active
* kind = #operation
* publisher = "HL7 International Clinical Genomics Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #variants
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of variants from which implications are derived. Must be in HGVS or SPDI format."
  * type = #string
  * searchType = #string
* parameter[+]
  * name = #haplotypes
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of haplotypes from which implications are derived. Must be in token or codesystem|code format."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #treatments
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of medications and/or other therapeutic interventions for which implications are sought. Must be in token or codesystem|code format."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #conditions
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of conditions for which implications are sought. Must be in token or codesystem|code format."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #genomicSourceClass
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Enables an App to limit results to those that are 'germline' or 'somatic'. Default is to include variants irrespective of genomic source class."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #includePatientList
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Include list of matching patients if set to true. Default=false."
  * type = #boolean
* parameter[+]
  * name = #implications
  * use = #out
  * min = 1
  * max = "1"
  * part[+]
    * name = #numerator
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "Count of patients having this variant"
    * type = #Quantity
  * part[+]
    * name = #denominator
    * use = #out
    * min = 0
    * max = "1"
    * documentation = "Count of patients in the cohort searched"
    * type = #Quantity
  * part[+]
    * name = #subject
    * use = #out
    * min = 0
    * max = "*"
    * documentation = "Patient ID. Include if includePatientList=true"
    * type = #string

Instance: find-population-dx-implications
InstanceOf: OperationDefinition
Title: "Find Population Diagnostic Implications"
Usage: #definition
Description: "Retrieve count or list of patients having diagnostic implications."
* name = "FindPopulationDxImplications"
* title = "Find Population Diagnostic Implications"
* status = #active
* kind = #operation
* publisher = "HL7 International Clinical Genomics Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #variants
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of variants from which implications are derived. Must be in HGVS or SPDI format."
  * type = #string
  * searchType = #string
* parameter[+]
  * name = #haplotypes
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of haplotypes from which implications are derived. Must be in token or codesystem|code format."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #conditions
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of conditions for which implications are sought. Must be in token or codesystem|code format."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #genomicSourceClass
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Enables an App to limit results to those that are 'germline' or 'somatic'. Default is to include variants irrespective of genomic source class."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #includePatientList
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Include list of matching patients if set to true. Default=false."
  * type = #boolean
* parameter[+]
  * name = #implications
  * use = #out
  * min = 1
  * max = "1"
  * part[+]
    * name = #numerator
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "Count of patients having this variant"
    * type = #Quantity
  * part[+]
    * name = #denominator
    * use = #out
    * min = 0
    * max = "1"
    * documentation = "Count of patients in the cohort searched"
    * type = #Quantity
  * part[+]
    * name = #subject
    * use = #out
    * min = 0
    * max = "*"
    * documentation = "Patient ID. Include if includePatientList=true"
    * type = #string

Instance: find-population-molecular-consequences
InstanceOf: OperationDefinition
Title: "Find Population Molecular Consequences"
Usage: #definition
Description: "Retrieve count or list of patients having molecular consequences."
* name = "FindPopulationMolecularConsequences"
* title = "Find Population Molecular Consequences"
* status = #active
* kind = #operation
* publisher = "HL7 International Clinical Genomics Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #variants
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of variants from which implications are derived. Must be in HGVS or SPDI format."
  * type = #string
  * searchType = #string
* parameter[+]
  * name = #featureConsequences
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of consequences sought. Must be in token or codesystem|code format. (These will generally be coded with Sequence Ontology codes under SO:0001537)"
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #genomicSourceClass
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Enables an App to limit results to those that are 'germline' or 'somatic'. Default is to include variants irrespective of genomic source class."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #includePatientList
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Include list of matching patients if set to true. Default=false."
  * type = #boolean
* parameter[+]
  * name = #consequences
  * use = #out
  * min = 1
  * max = "1"
  * part[+]
    * name = #numerator
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "Count of patients meeting criteria"
    * type = #Quantity
  * part[+]
    * name = #denominator
    * use = #out
    * min = 0
    * max = "1"
    * documentation = "Count of patients in the cohort searched"
    * type = #Quantity
  * part[+]
    * name = #subject
    * use = #out
    * min = 0
    * max = "*"
    * documentation = "Patient ID. Include if includePatientList=true"
    * type = #string

Instance: find-study-metadata
InstanceOf: OperationDefinition
Title: "Find Study Metadata"
Usage: #definition
Description: "Retrieve metadata about sequencing studies performed on a subject."
* name = "FindStudyMetadata"
* title = "Find Study Metadata"
* status = #active
* kind = #operation
* publisher = "HL7 International Clinical Genomics Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #subject
  * use = #in
  * min = 1
  * max = "1"
  * documentation = "The subject of interest."
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #testIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of test identifiers. Metadata for each test is returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #testDateRange
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Metadata for each test performed during the range is returned."
  * type = #Period
* parameter[+]
  * name = #specimenIdentifiers
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of specimen identifiers. Metadata for each test based on a supplied specimen identifier is returned."
  * type = #string
  * searchType = #token
* parameter[+]
  * name = #ranges
  * use = #in
  * min = 0
  * max = "*"
  * documentation = "List of regions for which additional study information is sought. If ranges are supplied, then each returned test will include studied and uncallable regions. Must be in zero-based RefSeq:Integer-range format (e.g. 'NC_000007.14:55174721-55174820')."
  * type = #string
  * searchType = #special
* parameter[+]
  * name = #tests
  * use = #out
  * min = 0
  * max = "*"
  * part[+]
    * name = #testId
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "test identifier"
    * type = #string
  * part[+]
    * name = #testDate
    * use = #out
    * min = 1
    * max = "1"
    * documentation = "test date"
    * type = #dateTime
  * part[+]
    * name = #specimenId
    * use = #out
    * min = 0
    * max = "1"
    * documentation = "specimen identifier"
    * type = #string
  * part[+]
    * name = #genomicBuild
    * use = #out
    * min = 0
    * max = "1"
    * documentation = "preferred codes: https://loinc.org/LL1040-6/"
    * type = #CodeableConcept
  * part[+]
    * name = #dnaChangeType
    * use = #out
    * min = 0
    * max = "1"
    * documentation = "preferred codes: http://www.sequenceontology.org/browser/current_release/term/SO:0002072"
    * type = #CodeableConcept
  * part[+]
    * name = #regionStudied
    * use = #out
    * min = 0
    * max = "1"
    * documentation = "List of non-overlapping regions, each in zero-based RefSeq:Integer-range format; or 'unknown'"
    * type = #string
  * part[+]
    * name = #uncallableRegions
    * use = #out
    * min = 0
    * max = "1"
    * documentation = "List of non-overlapping regions, each in zero-based RefSeq:Integer-range format; or 'unknown'"
    * type = #string

---

// File: input/fsh/CGRuleSets.fsh

/*
 * Rulesets
 */


---

// File: input/fsh/CGValueSets.fsh

ValueSet:       HGNCVS
Id:             hgnc-vs
Title:          "HUGO Gene Nomenclature Committee Gene Names (HGNC)"
Description:    "This value set includes all HGNC Codes, which includes multiple code systems. In this guide, Gene IDs from HGNC are used as CodeableConcepts, which must be sent with the HGNC gene ID including the prefix 'HGNC:' as the code and the HGNC 'gene symbol' as display. CAUTION: HGNC also indexes gene groups by numeric ID (without a prefix), and older systems may send HGNC gene IDs without the prefix, so care must be taken to confirm alignment. We have separately included the genegroup code system to draw attention to this ambiguity and potential error."
* ^experimental = false
* include codes from system $HGNCID
* include codes from system $HGNCGROUP

ValueSet:       HGVSVS
Id:             hgvs-vs
Title:          "Human Genome Variation Society (HGVS) Nomenclature"
Description:    "HGVS-nomenclature is used to report and exchange information regarding variants found in DNA, RNA and protein sequences and serves as an international standard. (source: varnomen.hgvs.org)"
* ^experimental = false
* include codes from system $HGVS

ValueSet:       DNAChangeTypeVS
Id:             dna-change-type-vs
Title:          "DNA Change Type"
Description:    "DNA Change Type of a variant."
* ^experimental = false
* include codes from system $SEQONT where concept is-a #SO:0002072

ValueSet:       TBDCodesVS
Id:             tbd-codes-vs
Title:          "To Be Determined Value Set"
Description:    "Value Set for codes yet to be defined in LOINC"
* ^experimental = true
* include codes from system TbdCodesCS

ValueSet:       MolecularConsequenceVS
Id:             molecular-consequence-vs
Title:          "Molecular Consequence Value Set"
Description:    "The calculated or observed effect of a variant on its downstream transcript and, if applicable, ensuing protein sequence."
* ^experimental = false
* include codes from system $SEQONT where concept is-a #SO:0001537

ValueSet:       FunctionalEffectVS
Id:             functional-effect-vs
Title:          "Functional Effect Value Set"
Description:    "The effect of a variant on downstream biological products or pathways."
* ^experimental = false
* include codes from system $SEQONT where concept is-a #SO:0001536

ValueSet:       SequencePhaseRelationshipVS
Id:             sequence-phase-relationship-vs
Title:          "Sequence Phase Relationships"
Description:    "Value Set for specific types of relationships"
* ^experimental = false
* codes from system SequencePhaseRelationshipCS

ValueSet:       ConditionInheritanceModeVS
Id:             condition-inheritance-mode-vs
Title:          "Condition Inheritance Patterns"
Description:    "Value Set for specific transmission patterns of a condition in a pedigree"
* ^experimental = false
// GENO (http://www.ebi.ac.uk/ols/ontologies/geno) is not yet a valid CodeSystem, so commenting out for now
// * $GENO#0000892	"Mitochondrial inheritance (primarily or exclusively heteroplasmic)"
// * $GENO#0000893	"Mitochondrial inheritance (primarily or exclusively homoplasmic)"
* $HPO#HP:0000006	"Autosomal dominant inheritance"
* $HPO#HP:0000007	"Autosomal recessive inheritance"
* $HPO#HP:0001417	"X-linked inheritance"
* $HPO#HP:0001419	"X-linked recessive inheritance"
* $HPO#HP:0001423	"X-linked dominant inheritance"
* $HPO#HP:0001426	"Multifactorial inheritance"
* $HPO#HP:0001427	"Mitochondrial inheritance"
* $HPO#HP:0001442	"Typified by somatic mosaicism"
* $HPO#HP:0001450	"Y-linked inheritance"
* $HPO#HP:0001470	"Sex-limited expression"
* $HPO#HP:0003743	"Genetic anticipation"
* $HPO#HP:0003745	"Sporadic"
* $HPO#HP:0010983	"Oligogenic inheritance"
* $HPO#HP:0012274	"Autosomal dominant inheritance with paternal imprinting"
* $HPO#HP:0012275	"Autosomal dominant inheritance with maternal imprinting"
* $HPO#HP:0025352	"Typically de novo"
* $HPO#HP:0032113	"Semidominant inheritance"

ValueSet:       GeneticTherapeuticImplicationsVS
Id:             genetic-therapeutic-implications-vs
Title:          "Genetic Therapeutic Implications"
Description:    "Value Set for terms that describe a predicted ramification based on the presence of associated molecular finding(s)."
* ^copyright = """
This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc.
This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.
"""
* ^experimental = false
* $LNC#LA10315-2	"Ultrarapid metabolizer"
* $LNC#LA25391-6	"Normal metabolizer"
* $LNC#LA25390-8	"Rapid metabolizer"
* $LNC#LA10317-8	"Intermediate metabolizer"
* $LNC#LA9657-3	"Poor metabolizer"
* $LNC#LA19542-2	"Low Risk"
* $LNC#LA19541-4	"High Risk"
* $LNC#LA6676-6 	"Resistant"
* $LNC#LA6677-4 	"Responsive"
* $LNC#LA9660-7 	"Presumed resistant"
* $LNC#LA9661-5 	"Presumed responsive"
* $LNC#LA6682-4 	"Unknown Significance"
* $LNC#LA6675-8 	"Benign"
* $LNC#LA6674-1 	"Presumed Benign"
* $LNC#LA9662-3 	"Presumed non-responsive"
* $LNC#LA25392-4	"Increased function"
* $LNC#LA25393-2	"Normal function"
* $LNC#LA25395-7	"Decreased function"
* $LNC#LA25394-0	"Poor function"
* $SCT#444734003 "Does not meet eligibility criteria for clinical trial (finding)"
* $SCT#399223003	"Patient eligible for clinical trial (finding)"

ValueSet:       EvidenceLevelExampleVS
Id:             evidence-level-example-vs
Title:          "Evidence Level Examples"
Description:    "Example sources of values for Evidence Level"
* ^experimental = true
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* codes from system ClinVarEvidenceLevelCustomCS
* codes from system PharmGKBEvidenceLevelCustomCS

ValueSet:       VariantConfidenceStatusVS
Id:             variant-confidence-status-vs
Title:          "Variant Confidence Status"
Description:    "A code that classifies the confidence for calling this variant."
* ^experimental = false
* codes from system VariantConfidenceStatusCS

ValueSet:       CodedAnnotationTypesVS
Id:             coded-annotation-types-vs
Title:          "Coded Annotation Types"
Description:    "Value Set for specific types of coded annotations"
* ^experimental = false
* codes from system CodedAnnotationTypesCS

ValueSet:       MolecularBiomarkerCategoryVS
Id:             molecular-biomarker-category-vs
Title:          "Molecular Biomarker Categories"
Description:    "This value set is drawn from the Molecular Biomarker Ontology code system, which provides codes that characterize a molecular biomarker."
* ^experimental = true
* include codes from system MolecularBiomarkerOntologyCS

ValueSet:       MolecularBiomarkerCodeVS
Id:             molecular-biomarker-code-vs
Title:          "Molecular Biomarker Codes"
Description:    "Value Set for terms that can be used as Biomarkers."
* ^copyright = """
This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc.
This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.
"""
* ^experimental = false
* $LNC#85337-4 "Estrogen receptor Ag Immune stain Ql (Breast cancer specimen)"
* $LNC#72382-5 "HER2 IA Qn (Tiss)" 
* $LNC#77637-7 "HLA-A and B and C (class I) IgG panel IA [Identifier]"
* $LNC#40557-1 "Progesterone receptor Ag Immune stain Ql (Tiss)"
* $LNC#85147-7 "PD-L1 by clone 22C3 Immune stain Doc (Tiss)"
* $LNC#59025-7 "Neutrophil Ab FC Qn (S)"
* $LNC#59003-4 "Lactoferrin Ab IA Qn (S)"
* $LNC#10495-0 "Insulin Ag Immune stain Ql (Tiss)"
* $LNC#16550-6 "Carbohydrates Nom (U)"
* $LNC#2569-2 "Lipids (S) [Mass/Vol]"
* $LNC#4551-8 "Hemoglobin A2 (Bld) [Mass fraction]"
* $LNC#19195-7 "Prostate specific Ag Qn"
* $LNC#64083-9 "MGMT gene methylation score Molgen (Tiss) [Ratio]"
* $LNC#62862-8 "Microsatellite instability Immune stain Ql (Tiss)"
* $LNC#81704-9 "Microsatellite instability marker D17S250 Ql (Cancer specimen)"
* $LNC#94077-5 "Tumor mutation burden Ql (Tumor) [Interp]"
* $NCIT#C120465 "Homologous Recombination Repair Deficiency"

---

// File: input/fsh/GGGenomicStudy.fsh

Extension:   GenomicStudyReference
Id:          genomic-study-reference
Title:      "Genomic Study Reference"
Description: "Used to reference a GenomicStudy profile"
* ^context[+].type = #element
* ^context[=].expression = "DiagnosticReport"
* ^context[+].type = #element
* ^context[=].expression = "Observation"
* value[x] only Reference(GenomicStudy)

Extension:   GenomicStudyAnalysisExt
Id:          genomic-study-analysis-ext
Title:      "Genomic Study Analysis Extension"
Description: "Used to transmit the one or more analysis per GenomimcStudy"
* ^context[+].type = #element
* ^context[=].expression = "Procedure"
* value[x] only Reference(GenomicStudyAnalysis)

Extension:   GenomicStudyReferrerExt
Id:          genomic-study-referrer-ext
Title:      "Genomic Study Referrer Extension"
Description: "Used to reference to the referrer of the study"
* ^context[+].type = #element
* ^context[=].expression = "Procedure"
* value[x] only Reference(Practitioner or PractitionerRole)

Profile: GenomicStudy
Parent: Procedure
Id: genomic-study
Title: "Genomic Study"
Description: "A genomic study is a set of analyses performed to analyze and generate genomic data."
* extension contains GenomicStudyAnalysisExt named genomic-study-analysis 0..* 
  and GenomicStudyReferrerExt named referrer 0..1
* extension[GenomicStudyAnalysisExt] ^short = "GenomicStudy.analysis"
* extension[GenomicStudyReferrerExt] ^short = "GenomicStudy.referrer"
* text ^short = "GenomicStudy.description"
* identifier ^short = "GenomicStudy.identifier"
* instantiatesCanonical only Canonical(PlanDefinition)
  * ^short = "GenomicStudy.instantiatesCanonical"
* instantiatesUri ^short = "GenomicStudy.instantiatesUri"
* status 
  * ^short = "GenomicStudy.status"
  * ^definition = "GenomicStudy.status is different from Procedure.status, see [mapping](ConceptMap-GenomicStudyStatusMap.html)"
* category 1..1
* category.coding 1..1
* category.coding = $OBSCAT#laboratory
* code from GenomicStudyTypeVS (example)
  * ^short = "GenomicStudy.type"
* subject ^short = "GenomicStudy.subject"
* encounter ^short = "GenomicStudy.encounter"
* performed[x] only dateTime
* performedDateTime ^short = "GenomicStudy.startDate"
* basedOn only Reference(ServiceRequest)
  * ^short = "GenomicStudy.basedOn"
* asserter only Reference(Practitioner or PractitionerRole)
  * ^short = "GenomicStudy.interpreter"
* reasonCode ^short = "GenomicStudy.reason"
* reasonReference only Reference(Condition or Observation)
  * ^short = "GenomicStudy.reason"
* note ^short = "GenomicStudy.note"
* partOf 0..0
* statusReason 0..0
* recorder 0..0
* location 0..0
* bodySite 0..0
* outcome 0..0
* report 0..0
* complication 0..0
* complicationDetail 0..0
* followUp 0..0
* focalDevice 0..0
* usedReference 0..0
* usedCode 0..0

Extension:   GenomicStudyAnalysisGenomicSourceClass
Id:          genomic-study-analysis-genomic-source-class
Title:      "Genomic Study Analysis Source Class"
Description: "The genomic class of the specimen being analyzed: Germline for inherited genome, somatic for cancer genome, and prenatal for fetal genome."
* ^context[+].type = #element
* ^context[=].expression = "Procedure"
* value[x] only CodeableConcept
* value[x] ^short = "Germline | Somatic | Fetal | Likely germline | Likely somatic | Likely fetal | Unknown genomic origin | De novo"
* valueCodeableConcept from http://loinc.org/vs/LL378-1 (extensible)

Extension:   GenomicStudyAnalysisMethodType
Id:          genomic-study-analysis-method-type
Title:      "Genomic Study Analysis Method Type"
Description: "Defines a method type for a genomic analysis"
* ^context[+].type = #element
* ^context[=].expression = "Procedure"
* value[x] only CodeableConcept
* value[x] ^short = "cytogenetics | deletion-duplication-analysis | fish | sequence-analysis-of-the-entire-coding-region | ... (many)"
* valueCodeableConcept from GenomicStudyMethodTypeVS (preferred)

Extension:   GenomicStudyAnalysisChangeType
Id:          genomic-study-analysis-change-type
Title:      "Genomic Study Analysis Change Type"
Description: "Defines the types of alterations detectable by a given genomic analysis"
* ^context[+].type = #element
* ^context[=].expression = "Procedure"
* value[x] only CodeableConcept
* value[x] ^short = "SNV | MNV | delins | gene_fusion | ... (many)"
* valueCodeableConcept from GenomicStudyChangeTypeVS (preferred)

Extension:   GenomicStudyAnalysisGenomeBuild
Id:          genomic-study-analysis-genome-build
Title:      "Genomic Study Analysis Genome Build"
Description: "Defines the genome build for a genomic analysis"
* ^context[+].type = #element
* ^context[=].expression = "Procedure"
* value[x] only CodeableConcept
* valueCodeableConcept from http://loinc.org/vs/LL1040-6 (extensible)

Extension:      GenomicStudyAnalysisInput
Id:             genomic-study-analysis-input
Title:         "Genomic Study Analysis Input"
Description:   "Genomic Study Analysis Input"
* ^context[+].type = #element
* ^context[=].expression = "Procedure"
* extension contains
    file 0..1 and
    type 0..1 and
    generatedBy 0..1
* extension[file] ^short = "GenomicStudy.analysis.input.file"
* extension[file].value[x] only Reference(GenomicDataFile)
* extension[type] ^short = "GenomicStudy.analysis.input.type"
* extension[type].value[x] only CodeableConcept
* extension[type].value[x] ^short = "bam | bed | vcf | ... (many)"
* extension[type].valueCodeableConcept from GenomicStudyDataFormatVS (preferred)
* extension[generatedBy] ^short = "GenomicStudy.analysis.input.generatedBy"
* extension[generatedBy].value[x] only Identifier or Reference(GenomicStudy)

Extension:      GenomicStudyAnalysisOutput
Id:             genomic-study-analysis-output
Title:         "Genomic Study Analysis Output"
Description:   "Genomic Study Analysis Output"
* ^context[+].type = #element
* ^context[=].expression = "Procedure"
* extension contains
    file 0..1 and
    type 0..1 
* extension[file] ^short = "GenomicStudy.analysis.output.file"
* extension[file].value[x] only Reference(GenomicDataFile)
* extension[type] ^short = "GenomicStudy.analysis.output.type"
* extension[type].value[x] only CodeableConcept
* extension[type].value[x] ^short = "bam | bed | vcf | ... (many)"
* extension[type].valueCodeableConcept from GenomicStudyDataFormatVS (preferred)

Extension:   GenomicStudyAnalysisTitle
Id:          genomic-study-analysis-title
Title:      "Genomic Study Analysis Title"
Description: "Defines a title for a genomic analysis"
* ^context[+].type = #element
* ^context[=].expression = "Procedure"
* value[x] only string

Extension:   GenomicStudyAnalysisFocus
Id:          genomic-study-analysis-focus
Title:      "Genomic Study Analysis Focus"
Description: "Defines a focus for a genomic analysis"
* ^context[+].type = #element
* ^context[=].expression = "Procedure"
* value[x] only Reference(Resource)

Extension:   GenomicStudyAnalysisSpecimen
Id:          genomic-study-analysis-specimen
Title:      "Genomic Study Analysis Specimen"
Description: "Defines a specimen for a genomic analysis"
* ^context[+].type = #element
* ^context[=].expression = "Procedure"
* value[x] only Reference(Specimen)

Extension:   GenomicStudyAnalysisProtocolPerformed
Id:          genomic-study-analysis-protocol-performed
Title:      "Genomic Study Analysis Protocol Performed"
Description: "Defines a protocol that was performed for a genomic analysis"
* ^context[+].type = #element
* ^context[=].expression = "Procedure"
* value[x] only Reference(Procedure or Task)

Extension:   GenomicStudyAnalysisMetrics
Id:          genomic-study-analysis-metrics
Title:       "Genomic Study Analysis Metrics"
Description: "Metrics about the sequencing analysis that was performed"
* ^context[+].type = #element
* ^context[=].expression = "Procedure"
* extension contains
    read-depth 0..1 and
    sequencing-coverage 0..1 and
    metrics-description 0..1
* extension[read-depth] ^short = "Read Depth"
* extension[read-depth] ^definition = "The average read depth (number of reads for a position) for the sequencing test"
* extension[read-depth] ^requirements = "This value is typically represented with an 'x' after the number (30x). Simply share the quantity here."
* extension[read-depth].value[x] only SimpleQuantity
* extension[read-depth].value[x] ^short = "30, 100"
* extension[sequencing-coverage] ^short = "Sequencing Coverage"
* extension[sequencing-coverage] ^definition = "The percentage of the studied regions that were sequenced"
* extension[sequencing-coverage] ^requirements = "This value is typically represented with an '%' after the number (95%). Simply share the quantity here."
* extension[sequencing-coverage].value[x] only SimpleQuantity
* extension[sequencing-coverage].value[x] ^short = "95, 100"
* extension[metrics-description] ^short = "Metrics Description"
* extension[metrics-description] ^definition = "Freetext description of the coverage metrics for the sequencing test"
* extension[metrics-description].value[x] only string

Extension:   GenomicStudyAnalysisRegions
Id:          genomic-study-analysis-regions
Title:       "Genomic Study Analysis Regions"
Description: "Defines the regions studied, regions called, and regions deemed uncallable (generally due to low coverage)"
* ^context[+].type = #element
* ^context[=].expression = "Procedure"
* extension contains
    description 0..1 and
    studied 0..* and
    called 0..* and
    uncalled 0..*
* extension[description] ^short = "Regions Studied Description"
* extension[description] ^definition = "Freetext description of the regions studied for the sequencing test"
* extension[description].value[x] only string

* extension[studied] ^short = "Genes or Regions Studied (GenomicStudy.analysis.regionsStudied)"
* extension[studied] ^definition = "The genes or regions that were studied in the analysis."
* extension[studied] ^requirements = "Shared as a coded list of HGNC gene symbols or a BED file. For coded genes, the HGNC gene symbol is to be used as display text and the HGNC gene ID used as the code. If no HGNC code issued for this gene yet, NCBI gene IDs SHALL be used. If details beyond a coded list of genes are needed, a BED file SHALL be used to further describe the regions studied in the analysis."
* extension[studied].value[x] only CodeableConcept or Reference(GenomicDataFile)
* extension[studied].value[x] 1..1
* extension[studied].value[x] ^short = "Gene codes or BED file"
* extension[studied].value[x] from HGNCVS (extensible)

* extension[called] ^short = "Genes or Regions Called (GenomicStudy.analysis.regionsCalled)"
* extension[called] ^definition = "The genes or regions that were studied for the analysis with sufficient coverage and quality to be called."
* extension[called] ^requirements = "Shared as a coded list of HGNC gene symbols or a BED file. For coded genes, the HGNC gene symbol is to be used as display text and the HGNC gene ID used as the code. If no HGNC code issued for this gene yet, NCBI gene IDs SHALL be used. If details beyond a coded list of genes are needed, a BED file SHALL be used to further describe the regions deemed callable."
* extension[called].value[x] only CodeableConcept or Reference(GenomicDataFile)
* extension[called].value[x] 1..1
* extension[called].value[x] ^short = "Gene codes or BED file"
* extension[called].value[x] from HGNCVS (extensible)

* extension[uncalled] ^short = "Genes or Regions Uncalled"
* extension[uncalled] ^definition = "The genes or regions that were studied for the analysis but were deemed uncallable."
* extension[uncalled] ^requirements = "Shared as a coded list of HGNC gene symbols or a BED file. For coded genes, the HGNC gene symbol is to be used as display text and the HGNC gene ID used as the code. If no HGNC code issued for this gene yet, NCBI gene IDs SHALL be used. If details beyond a coded list of genes are needed, a BED file SHALL be used to further describe the regions deemed uncallable."
* extension[uncalled].value[x] only CodeableConcept or Reference(GenomicDataFile)
* extension[uncalled].value[x] 1..1
* extension[uncalled].value[x] ^short = "Gene codes or BED file"
* extension[uncalled].value[x] from HGNCVS (extensible)

Extension:      GenomicStudyAnalysisDevice
Id:             genomic-study-analysis-device
Title:         "Genomic Study Analysis Device"
Description:   "Genomic Study Analysis Device"
* ^context[+].type = #element
* ^context[=].expression = "Procedure"
* extension contains
    device 0..1 and
    function 0..1 
* extension[device] ^short = "GenomicStudy.analysis.device.device"
* extension[device].value[x] only Reference(Device)
* extension[function] ^short = "GenomicStudy.analysis.device.type"
* extension[function].value[x] only CodeableConcept

Profile: GenomicStudyAnalysis
Parent: Procedure
Id: genomic-study-analysis
Title: "Genomic Study Analysis"
Description: "A genomic study analysis is a component of a genomic study."
* extension contains GenomicStudyAnalysisMethodType named method-type 0..*
    and GenomicStudyAnalysisChangeType named change-type 0..*
    and GenomicStudyAnalysisGenomeBuild named genome-build 0..1
    and GenomicStudyAnalysisGenomicSourceClass named genomic-source-class 0..1				 
    and GenomicStudyAnalysisTitle named title 0..1
    and GenomicStudyAnalysisFocus named focus 0..*
    and GenomicStudyAnalysisSpecimen named specimen 0..*
    and GenomicStudyAnalysisMetrics named metrics 0..1
    and GenomicStudyAnalysisRegions named regions 0..1
    and GenomicStudyAnalysisDevice named device 0..*
    and GenomicStudyAnalysisProtocolPerformed named protocol-performed 0..1
    and GenomicStudyAnalysisInput named input 0..*
    and GenomicStudyAnalysisOutput named output 0..*
* extension[GenomicStudyAnalysisMethodType] ^short = "GenomicStudy.analysis.methodType"
* extension[GenomicStudyAnalysisChangeType] ^short = "GenomicStudy.analysis.changeType"
* extension[GenomicStudyAnalysisGenomeBuild] ^short = "GenomicStudy.analysis.genomeBuild"
* extension[GenomicStudyAnalysisGenomicSourceClass] ^short = "GenomicStudy.analysis.genomicSourceClass"
* extension[GenomicStudyAnalysisTitle] ^short = "GenomicStudy.analysis.title"
* extension[GenomicStudyAnalysisFocus] ^short = "GenomicStudy.analysis.focus"
* extension[GenomicStudyAnalysisSpecimen] ^short = "GenomicStudy.analysis.specimen"
* extension[GenomicStudyAnalysisMetrics] ^short = "Genomic Study Analysis Metrics"
* extension[GenomicStudyAnalysisRegions] ^short = "Genomic Study Analysis Regions"
* extension[GenomicStudyAnalysisDevice] ^short = "GenomicStudy.analysis.device"
* extension[GenomicStudyAnalysisProtocolPerformed] ^short = "GenomicStudy.protocolPerformed"
* extension[GenomicStudyAnalysisInput] ^short = "GenomicStudy.analysis.input"
* extension[GenomicStudyAnalysisOutput] ^short = "GenomicStudy.analysis.output"
* identifier ^short = "GenomicStudy.analysis.identifier"
* instantiatesCanonical only Canonical(PlanDefinition or ActivityDefinition)
  * ^short = "GenomicStudy.analysis.instantiatesCanonical"
* instantiatesUri ^short = "GenomicStudy.analysis.instantiatesUri"
* status = #completed
* category 1..1
* category.coding 1..1
* category.coding = $OBSCAT#laboratory
* performed[x] only dateTime
* performedDateTime ^short = "GenomicStudy.analysis.date"
* performer.actor only Reference(Practitioner or PractitionerRole or Organization or Device)
  * ^short = "GenomicStudy.analysis.performer.actor"
* performer.function ^short = "GenomicStudy.analysis.performer.role"
* note ^short = "GenomicStudy.analysis.note"
* basedOn 0..0
* partOf 0..0
* statusReason 0..0
* code 0..0
* encounter 0..0
* recorder 0..0
* asserter 0..0
* location 0..0
* bodySite 0..0
* outcome 0..0
* complication 0..0
* complicationDetail 0..0
* followUp 0..0
* focalDevice 0..0
* usedReference 0..0
* usedCode 0..0
* reasonCode 0..0
* reasonReference 0..0
* report 0..0

// Concept Maps
Instance: GenomicStudyStatusMap
InstanceOf: ConceptMap
Usage: #definition
Description: "Mapping from Procedure's EventStatus (http://hl7.org/fhir/ValueSet/event-status) ValueSet for 'status' to http://hl7.org/fhir/uv/genomics-reporting/ValueSet/genomicstudy-status-vs codes"
* title = "Genomic Study Status Map"
* experimental = false
* name = "GenomicStudyStatusMap"
* description = "Mapping from Procedure's EventStatus (http://hl7.org/fhir/ValueSet/event-status) ValueSet for 'status' to http://hl7.org/fhir/uv/genomics-reporting/ValueSet/genomicstudy-status-vs codes"
* status = #draft
* publisher = "HL7 International Clinical Genomics Work Group"
* sourceCanonical = "http://hl7.org/fhir/ValueSet/event-status"
* targetCanonical = "http://hl7.org/fhir/uv/genomics-reporting/ValueSet/genomic-study-status-vs"
* group[+].source = "http://hl7.org/fhir/event-status"
* group[=].target = "http://hl7.org/fhir/uv/genomics-reporting/CodeSystem/genomic-study-status-cs"
* group[=].element[+].code = http://hl7.org/fhir/event-status#completed
* group[=].element[=].display = "Completed"
* group[=].element[=].target[+].code = http://hl7.org/fhir/uv/genomics-reporting/CodeSystem/genomic-study-status-cs#available
* group[=].element[=].target[=].display = "Available"
* group[=].element[=].target[=].equivalence = #equivalent

* group[=].element[+].code = http://hl7.org/fhir/event-status#preparation
* group[=].element[=].display = "Preparation"
* group[=].element[=].target[+].code = http://hl7.org/fhir/uv/genomics-reporting/CodeSystem/genomic-study-status-cs#registered
* group[=].element[=].target[=].display = "Registered"
* group[=].element[=].target[=].equivalence = #wider
* group[=].element[+].code = http://hl7.org/fhir/event-status#in-progress
* group[=].element[=].display = "In Progress"
* group[=].element[=].target[+].code = http://hl7.org/fhir/uv/genomics-reporting/CodeSystem/genomic-study-status-cs#registered
* group[=].element[=].target[=].display = "Registered"
* group[=].element[=].target[=].equivalence = #wider
* group[=].element[+].code = http://hl7.org/fhir/event-status#on-hold
* group[=].element[=].display = "On Hold"
* group[=].element[=].target[+].code = http://hl7.org/fhir/uv/genomics-reporting/CodeSystem/genomic-study-status-cs#registered
* group[=].element[=].target[=].display = "Registered"
* group[=].element[=].target[=].equivalence = #wider

* group[=].element[+].code = http://hl7.org/fhir/event-status#not-done
* group[=].element[=].display = "Not Done"
* group[=].element[=].target[+].code = http://hl7.org/fhir/uv/genomics-reporting/CodeSystem/genomic-study-status-cs#cancelled
* group[=].element[=].target[=].display = "Cancelled"
* group[=].element[=].target[=].equivalence = #wider
* group[=].element[+].code = http://hl7.org/fhir/event-status#stopped
* group[=].element[=].display = "Stopped"
* group[=].element[=].target[+].code = http://hl7.org/fhir/uv/genomics-reporting/CodeSystem/genomic-study-status-cs#cancelled
* group[=].element[=].target[=].display = "Cancelled"
* group[=].element[=].target[=].equivalence = #wider

* group[=].element[+].code = http://hl7.org/fhir/event-status#entered-in-error
* group[=].element[=].display = "Entered in Error"
* group[=].element[=].target[+].code = http://hl7.org/fhir/uv/genomics-reporting/CodeSystem/genomic-study-status-cs#entered-in-error
* group[=].element[=].target[=].display = "Entered in Error"
* group[=].element[=].target[=].equivalence = #equal
* group[=].element[+].code = http://hl7.org/fhir/event-status#unknown
* group[=].element[=].display = "Unknown"
* group[=].element[=].target[+].code = http://hl7.org/fhir/uv/genomics-reporting/CodeSystem/genomic-study-status-cs#unknown
* group[=].element[=].target[=].display = "Unknown"
* group[=].element[=].target[=].equivalence = #equivalent

CodeSystem: GenomicStudyStatusCS
Id: genomic-study-status-cs
Title: "Genomic Study Status CodeSystem"
Description: "Backport of http://hl7.org/fhir/genomicstudy-status"
* ^caseSensitive = true
* ^experimental = false
* #registered "Registered" "The existence of the genomic study is registered, but there is nothing yet available."
* #available "Available" "At least one instance has been associated with this genomic study."
* #cancelled "Cancelled" "The genomic study is unavailable because the genomic study was not started or not completed (also sometimes called 'aborted')."
* #entered-in-error "Entered in Error" "The genomic study has been withdrawn following a previous final release. This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be 'cancelled' rather than 'entered-in-error'.)."
* #unknown "Unknown" "The system does not know which of the status values currently applies for this request. Note: This concept is not to be used for 'other' - one of the listed statuses is presumed to apply, it's just not known which one."

ValueSet: GenomicStudyStatusVS
Id: genomic-study-status-vs
Title: "Genomic Study Status ValueSet"
Description: "Backport of http://hl7.org/fhir/ValueSet/genomicstudy-status"
* ^experimental = false
* include codes from system GenomicStudyStatusCS

CodeSystem: GenomicStudyTypeCS
Id: genomic-study-type-cs
Title: "Genomic Study Type CodeSystem"
Description: "Backport of http://hl7.org/fhir/genomicstudy-type"
* ^caseSensitive = true
* ^experimental = true
* #alt-splc "Alternative splicing detection" "Identification of multiple different processed mRNA transcripts from the same DNA template"
* #chromatin "Chromatin conformation" "Analysis of the spacial organization of chromatin within a cell"
* #cnv "CNV detection" "Detection of a change in the number of copies of a defined region of genomic DNA sequence resulting in structural variation when compared to the reference sequence"
* #epi-alt-hist "Epigenetic Alterations - histone modifications" "Detection of biochemical modifications covalently bound to the N-terminal tail of a histone protein. These modifications may alter chromatin compaction and gene expression"
* #epi-alt-dna "Epigenetic Alterations -DNA methylation" "Detection of the presence of an additional methyl group on a DNA nucleobase, which may alter gene transcription"
* #fam-var-segr "Familial variant segregation" "Determining if a variant identified in an individual is present in other family members"
* #func-var "Functional variation detection" "Detection of sequence variants which may alter gene expression or gene product function when compared to the reference sequence"
* #gene-expression "Gene expression profiling" "Measurement and characterization of activity from all gene products"
* #post-trans-mod "Post-translational Modification Identification" "Detection of biochemical modifications covalently bound to the amino acid monomers of a processed protein"
* #snp "SNP Detection" "Determination of which nucleotide is base present at a known variable location of the genomic sequence"
* #str "STR count" "Quantification of the number of sequential microsatellite units in a repetitive sequence region"
* #struc-var "Structural variation detection" "Detection of deletions, insertions, or rearrangements of DNA segments compared to the reference sequence"

ValueSet: GenomicStudyTypeVS
Id: genomic-study-type-vs
Title: "Genomic Study Type ValueSet"
Description: "Backport of http://hl7.org/fhir/ValueSet/genomicstudy-type"
* ^experimental = true
* include codes from system GenomicStudyTypeCS

CodeSystem: GenomicStudyMethodTypeCS
Id: genomic-study-method-type-cs
Title: "Genomic Study Method Type CodeSystem"
Description: "Backport of http://hl7.org/fhir/genomicstudy-methodtype"
* ^caseSensitive = true
* ^experimental = true
* #biochemical-genetics "Biochemical Genetics"
* #cytogenetics "Cytogenetics"
* #molecular-genetics "Molecular Genetics"
* #analyte "Analyte"
* #chromosome-breakage-studies "Chromosome breakage studies"
* #deletion-duplication-analysis "Deletion/duplication analysis"
* #detection-of-homozygosity "Detection of homozygosity"
* #enzyme-assay "Enzyme assay"
* #fish-interphase "FISH-interphase"
* #fish-metaphase "FISH-metaphase"
* #flow-cytometry "Flow cytometry"
* #fish "Fluorescence in situ hybridization (FISH)"
* #immunohistochemistry "Immunohistochemistry"
* #karyotyping "Karyotyping"
* #linkage-analysis "Linkage analysis"
* #methylation-analysis "Methylation analysis"
* #msi "Microsatellite instability testing (MSI)"
* #m-fish "Multicolor FISH (M-FISH)"
* #mutation-scanning-of-select-exons "Mutation scanning of select exons"
* #mutation-scanning-of-the-entire-coding-region "Mutation scanning of the entire coding region"
* #protein-analysis "Protein analysis"
* #protein-expression "Protein expression"
* #rna-analysis "RNA analysis"
* #sequence-analysis-of-select-exons "Sequence analysis of select exons"
* #sequence-analysis-of-the-entire-coding-region "Sequence analysis of the entire coding region"
* #sister-chromatid-exchange "Sister chromatid exchange"
* #targeted-variant-analysis "Targeted variant analysis"
* #udp "Uniparental disomy study (UPD)"
* #aspe "Allele-specific primer extension (ASPE)"
* #alternative-splicing-detection "Alternative splicing detection"
* #bi-directional-sanger-sequence-analysis "Bi-directional Sanger Sequence Analysis"
* #c-banding "C-banding"
* #cia "Chemiluminescent Immunoassay (CIA)"
* #chromatin-immunoprecipitation-on-chip "Chromatin Immunoprecipitation on ChIP"
* #comparative-genomic-hybridization "Comparative Genomic Hybridization"
* #damid "DamID"
* #digital-virtual-karyotyping "Digital / Virtual karyotyping"
* #digital-microfluidic-microspheres "Digital microfluidic microspheres"
* #enzymatic-levels "Enzymatic levels"
* #enzyme-activity "Enzyme activity"
* #elisa "Enzyme-Linked Immunosorbent Assays (ELISA)"
* #fluorometry "Fluorometry"
* #fusion-genes-microarrays "Fusion genes microarrays"
* #g-banding "G-banding"
* #gc-ms "Gas chromatographymass spectrometry (GC-MS)"
* #gene-expression-profiling "Gene expression profiling"
* #gene-id "GeneID"
* #gold-nanoparticle-probe-technology "Gold nanoparticle probe technology"
* #hplc "High-performance liquid chromatography (HPLC)"
* #lc-ms "Liquid chromatography mass spectrometry (LC-MS)"
* #lc-ms-ms "Liquid chromatography-tandem mass spectrometry (LC-MS/MS)"
* #metabolite-levels "Metabolite levels"
* #methylation-specific-pcr "Methylation-specific PCR"
* #microarray "Microarray"
* #mlpa "Multiplex Ligation-dependent Probe Amplification (MLPA)"
* #ngs-mps "Next-Generation (NGS)/Massively parallel sequencing (MPS)"
* #ola "Oligonucleotide Ligation Assay (OLA)"
* #oligonucleotide-hybridization-based-dna-sequencing "Oligonucleotide hybridization-based DNA sequencing"
* #other "Other"
* #pcr "PCR"
* #pcr-with-allele-specific-hybridization "PCR with allele specific hybridization"
* #pcr-rflp-with-southern-hybridization "PCR-RFLP with Southern hybridization"
* #protein-truncation-test "Protein truncation test"
* #pyrosequencing "Pyrosequencing"
* #q-banding "Q-banding"
* #qpcr "Quantitative PCR (qPCR)"
* #r-banding "R-banding"
* #rflp "RFLP"
* #rt-lamp "RT-LAMP"
* #rt-pcr "RT-PCR"
* #rt-pcr-with-gel-analysis "RT-PCR with gel analysis"
* #rt-qpcr "RT-qPCR"
* #snp-detection "SNP Detection"
* #silver-staining "Silver staining"
* #sky "Spectral karyotyping (SKY)"
* #t-banding "T-banding"
* #ms-ms "Tandem mass spectrometry (MS/MS)"
* #tetra-nucleotide-repeat-by-pcr-or-southern-blot "Tetra-nucleotide repeat by PCR or Southern Blot"
* #tiling-arrays "Tiling Arrays"
* #trinucleotide-repeat-by-pcr-or-southern-blot "Trinucleotide repeat by PCR or Southern Blot"
* #uni-directional-sanger-sequencing "Uni-directional Sanger sequencing"

ValueSet: GenomicStudyMethodTypeVS
Id: genomic-study-method-type-vs
Title: "Genomic Study Method Type ValueSet"
Description: "Backport of http://hl7.org/fhir/ValueSet/genomicstudy-methodtype"
* ^experimental = false
* include codes from system GenomicStudyMethodTypeCS

CodeSystem: GenomicStudyChangeTypeCS
Id: genomic-study-change-type-cs
Title: "Genomic Study Change Type CodeSystem"
Description: "Backport of http://hl7.org/fhir/genomicstudy-changetype"
* ^caseSensitive = true
* ^experimental = true
* #DNA "DNA change" "Change that involves Deoxyribonucleic acid (DNA) sequences."
* #RNA "RNA change" "Change that involves Ribonucleic Acid (RNA) sequences."
* #AA "Protein/amino Acids change" "Change that involves Amino Acid (AA) or protein sequences."
* #CHR "Chromosomal changes" "Change that involves number or strcture of chromosomes."
* #CNV "Copy number variations" "Change that involves copy number variations among various genomes."

ValueSet: GenomicStudyChangeTypeVS
Id: genomic-study-change-type-vs
Title: "Genomic Study Change Type ValueSet"
Description: "Backport of http://hl7.org/fhir/ValueSet/genomicstudy-changetype"
* ^experimental = false
* include codes from system $SEQONT where concept is-a #SO:0002072
* include codes from system $SEQONT where concept is-a #SO:0001060
* include codes from system GenomicStudyChangeTypeCS

CodeSystem: GenomicStudyDataFormatCS
Id: genomic-study-data-format-cs
Title: "Genomic Study Data Format CodeSystem"
Description: "Backport of http://hl7.org/fhir/genomicstudy-dataformat"
* ^caseSensitive = true
* ^experimental = true
* #bam "BAM"
* #bed "BED"
* #bedpe "BEDPE"
* #bedgraph "BedGraph"
* #bigbed "bigBed"
* #bigWig "bigWig"
* #birdsuite-files "Birdsuite-Files"
* #broadpeak "broadPeak"
* #cbs "CBS"
* #chemical-reactivity-probing-profiles "Chemical-Reactivity-Probing-Profiles"
* #chrom-sizes "chrom-sizes"
* #cn "CN"
* #custom-file-formats "Custom-File-Formats"
* #cytoband "Cytoband"
* #fasta "FASTA"
* #gct "GCT"
* #cram "CRAM"
* #genepred "genePred"
* #gff-gtf "GFF/GTF"
* #gistic "GISTIC"
* #goby "Goby"
* #gwas "GWAS"
* #igv "IGV"
* #loh "LOH"
* #maf-multiple-alignment-format "MAF-Multiple Alignment Format"
* #maf-mutation-annotation-format "MAF-Mutation-Annotation-Format"
* #merged-bam-file "Merged BAM File"
* #mut "MUT"
* #narrowpeak "narrowPeak"
* #psl "PSL"
* #res "RES"
* #rna-secondary-structure-formats "RNA-Secondary-Structure-Formats"
* #sam "SAM"
* #sample-info-attributes-file "Sample-Info-Attributes-file"
* #seg "SEG"
* #tdf "TDF"
* #track-line "Track Line"
* #type-line "Type Line"
* #vcf "VCF"
* #wig "WIG"

ValueSet: GenomicStudyDataFormatVS
Id: genomic-study-data-format-vs
Title: "Genomic Study Data Format ValueSet"
Description: "Backport of http://hl7.org/fhir/ValueSet/genomicstudy-dataformat"
* ^experimental = false
* include codes from system GenomicStudyDataFormatCS


---

// File: input/fsh/examples/bundle-CG-IG-HLA-FullBundle-01.fsh

Instance: bundle-CG-IG-HLA-FullBundle-01
InstanceOf: Bundle
Description: "Example of a HLA bundle"
Usage: #example
* type = #transaction
* entry[0].fullUrl = "urn:uuid:13f34265-335c-4853-bc38-0815315edafa"
* entry[=].resource = CG-IG-HLA-FullBundle-01-1
* entry[=].request.method = #POST
* entry[=].request.url = "Patient"
* entry[+].fullUrl = "urn:uuid:e44fbe33-6084-4ae2-a95e-8bc451c63340"
* entry[=].resource = CG-IG-HLA-FullBundle-01-2
* entry[=].request.method = #POST
* entry[=].request.url = "Specimen"
* entry[+].fullUrl = "urn:uuid:9243cc20-27bd-4f87-ba90-0328ed474950"
* entry[=].resource = CG-IG-HLA-FullBundle-01-3
* entry[=].request.method = #POST
* entry[=].request.url = "Organization"
* entry[+].fullUrl = "urn:uuid:00ef18ad-ed04-4b2c-81ee-b69bb243f0d5"
* entry[=].resource = CG-IG-HLA-FullBundle-01-4
* entry[=].request.method = #POST
* entry[=].request.url = "Organization"
* entry[+].fullUrl = "urn:uuid:99309303-045e-4cf4-90d7-250d7a7476ea"
* entry[=].resource = CG-IG-HLA-FullBundle-01-5
* entry[=].request.method = #POST
* entry[=].request.url = "ServiceRequest"
* entry[+].fullUrl = "urn:uuid:8200dab6-18a2-4550-b913-a7db480c0804"
* entry[=].resource = CG-IG-HLA-FullBundle-01-6
* entry[=].request.method = #POST
* entry[=].request.url = "MolecularSequence"
* entry[+].fullUrl = "urn:uuid:7c393185-f15c-45bc-a714-c0fdbea32675"
* entry[=].resource = CG-IG-HLA-FullBundle-01-7
* entry[=].request.method = #POST
* entry[=].request.url = "MolecularSequence"
* entry[+].fullUrl = "urn:uuid:65c85f14-c3a0-4b72-818f-820e04fcc621"
* entry[=].resource = CG-IG-HLA-FullBundle-01-8
* entry[=].request.method = #POST
* entry[=].request.url = "MolecularSequence"
* entry[+].fullUrl = "urn:uuid:fbba9fe7-0ece-4ec1-9233-a437a8d242a0"
* entry[=].resource = CG-IG-HLA-FullBundle-01-9
* entry[=].request.method = #POST
* entry[=].request.url = "MolecularSequence"
* entry[+].fullUrl = "urn:uuid:b7765bbf-df40-486a-9f2f-404309643de6"
* entry[=].resource = CG-IG-HLA-FullBundle-01-10
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:d98d92a7-0e86-4ae5-b036-b7e1bba6ec32"
* entry[=].resource = CG-IG-HLA-FullBundle-01-11
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:49a86246-4004-42eb-9bdc-f542f93f9228"
* entry[=].resource = CG-IG-HLA-FullBundle-01-12
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:cbabf93e-1b4b-46f2-ba1e-d84862670670"
* entry[=].resource = CG-IG-HLA-FullBundle-01-13
* entry[=].request.method = #POST
* entry[=].request.url = "MolecularSequence"
* entry[+].fullUrl = "urn:uuid:c233ad3d-1572-48d6-93da-0a583535e138"
* entry[=].resource = CG-IG-HLA-FullBundle-01-14
* entry[=].request.method = #POST
* entry[=].request.url = "MolecularSequence"
* entry[+].fullUrl = "urn:uuid:05fa52d7-5c67-460a-8722-d3460b24d6fe"
* entry[=].resource = CG-IG-HLA-FullBundle-01-15
* entry[=].request.method = #POST
* entry[=].request.url = "MolecularSequence"
* entry[+].fullUrl = "urn:uuid:db69e549-6267-4777-b4b9-8813f3329309"
* entry[=].resource = CG-IG-HLA-FullBundle-01-16
* entry[=].request.method = #POST
* entry[=].request.url = "MolecularSequence"
* entry[+].fullUrl = "urn:uuid:e2092243-2970-49d2-a90f-b90d1d49715a"
* entry[=].resource = CG-IG-HLA-FullBundle-01-17
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:792be53e-d4fb-4887-a367-815ef6c706e5"
* entry[=].resource = CG-IG-HLA-FullBundle-01-18
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:60613a43-c4cb-4502-b3e2-cf9215feaa70"
* entry[=].resource = CG-IG-HLA-FullBundle-01-19
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:bb55c2bc-5ad2-4bc1-8ff3-c407d06b12d0"
* entry[=].resource = CG-IG-HLA-FullBundle-01-20
* entry[=].request.method = #POST
* entry[=].request.url = "MolecularSequence"
* entry[+].fullUrl = "urn:uuid:46938bb2-0486-4e87-bfd3-89aab2d5e22f"
* entry[=].resource = CG-IG-HLA-FullBundle-01-21
* entry[=].request.method = #POST
* entry[=].request.url = "MolecularSequence"
* entry[+].fullUrl = "urn:uuid:2ae2ff34-279e-43c2-9018-b054fd3fc1ce"
* entry[=].resource = CG-IG-HLA-FullBundle-01-22
* entry[=].request.method = #POST
* entry[=].request.url = "MolecularSequence"
* entry[+].fullUrl = "urn:uuid:19153ef1-68c6-47a2-9676-c4eefbd39af9"
* entry[=].resource = CG-IG-HLA-FullBundle-01-23
* entry[=].request.method = #POST
* entry[=].request.url = "MolecularSequence"
* entry[+].fullUrl = "urn:uuid:709c5315-9403-4867-9d82-0b953836665f"
* entry[=].resource = CG-IG-HLA-FullBundle-01-24
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:8b2aa21c-1426-4717-8ab0-a84d83df7d47"
* entry[=].resource = CG-IG-HLA-FullBundle-01-25
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:0e0a780e-4486-4cd0-bfae-7243c579f208"
* entry[=].resource = CG-IG-HLA-FullBundle-01-26
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:b0a4b18e-94e7-4b1b-8031-c7ae4bdd8db9"
* entry[=].resource = CG-IG-HLA-FullBundle-01-27
* entry[=].request.method = #POST
* entry[=].request.url = "DiagnosticReport"

Instance: CG-IG-HLA-FullBundle-01-1
InstanceOf: Patient
Usage: #inline
* identifier.use = #usual
* identifier.type = $IDTYPE#DR
* identifier.system = "urn:oid:0.0.0.0.0.0.0"
* identifier.value = "12345"
* identifier.period.start = "2012-11-10"
* identifier.assigner.display = "aDonorRegistry"
* name[0].use = #official
* name[=].text = "John Storm"
* name[=].family = "Storm"
* name[=].given = "John"
* name[+].use = #nickname
* name[=].text = "Johnny Storm"
* name[=].family = "Storm"
* name[=].given = "Johnny"
* name[+].use = #nickname
* name[=].text = "The Human Torch"
* gender = #male
* birthDate = "1986-12-31"

Instance: CG-IG-HLA-FullBundle-01-2
InstanceOf: Specimen
Usage: #inline
* identifier.system = "http://myorgsurl.com"
* identifier.value = "123"
* accessionIdentifier.system = "http://mylabsurl.com"
* accessionIdentifier.value = "456"
* type = $SCT#122555007 "Venous blood specimen"
* subject = Reference(urn:uuid:13f34265-335c-4853-bc38-0815315edafa) "John Storm"
  * type = "Patient"

Instance: CG-IG-HLA-FullBundle-01-3
InstanceOf: Organization
Usage: #inline
* name = "aTypingLab Inc"
* alias = "aTL"
* telecom.system = #phone
* telecom.value = "1-800-555-1234"
* telecom.use = #work
* telecom.rank = 1
* address.use = #work
* address.type = #both
* address.text = "123 Main St, Sometown, ND 99999"
* address.line = "123 Main St"
* address.city = "Sometown"
* address.state = "ND"
* address.postalCode = "99999"
* address.country = "USA"

Instance: CG-IG-HLA-FullBundle-01-4
InstanceOf: Organization
Usage: #inline
* name = "aDonorRegistry"
* alias = "ADR"
* telecom.system = #phone
* telecom.value = "1-800-555-6789"
* telecom.use = #work
* telecom.rank = 1
* address.use = #work
* address.type = #both
* address.text = "456 Main St, Anytown ND, 00000"
* address.line = "456 Main St"
* address.city = "Anytown"
* address.state = "ND"
* address.postalCode = "00000"
* address.country = "USA"

Instance: CG-IG-HLA-FullBundle-01-5
InstanceOf: ServiceRequest
Usage: #inline
* status = #completed
* intent = #order
* code = $LNC#13303-3 "HLA-A+B+C (class I) [Type]"
* subject = Reference(urn:uuid:13f34265-335c-4853-bc38-0815315edafa) "John Storm"
  * type = "Patient"
* authoredOn = "2016-11-15"
* requester = Reference(urn:uuid:00ef18ad-ed04-4b2c-81ee-b69bb243f0d5) "aDonorRegistry"
  * type = "Organization"
* performer = Reference(urn:uuid:9243cc20-27bd-4f87-ba90-0328ed474950) "aTypingLab, Inc"
  * type = "Organization"
* reasonCode.text = "tissue typing for donor registry"

Instance: CG-IG-HLA-FullBundle-01-6
InstanceOf: MolecularSequence
Usage: #inline
* type = #dna
* coordinateSystem = 0
* referenceSeq.referenceSeqId.coding.version = "3.23"
* referenceSeq.referenceSeqId.coding = $HLAALLELE#HLA00001
* referenceSeq.referenceSeqId.text = "HLA-A*01:01:01:01"
* referenceSeq.windowStart = 503
* referenceSeq.windowEnd = 773
* observedSeq = "GCTCCCACTCCATGAGGTATTTCTTCACATCCGTGTCCCGGCCCGGCCGCGGGGAGCCCCGCTTCATCGCCGTGGGCTACGTGGACGACACGCAGTTCGTGCGGTTCGACAGCGACGCCGCGAGCCAGAAGATGGAGCCGCGGGCGCCGTGGATAGAGCAGGAGGGGCCGGAGTATTGGGACCAGGAGACACGGAATATGAAGGCCCACTCACAGACTGACCGAGCGAACCTGGGGACCCTGCGCGGCTACTACAACCAGAGCGAGGACG"

Instance: CG-IG-HLA-FullBundle-01-7
InstanceOf: MolecularSequence
Usage: #inline
* type = #dna
* coordinateSystem = 0
* referenceSeq.referenceSeqId.coding.version = "3.23"
* referenceSeq.referenceSeqId.coding = $HLAALLELE#HLA00001
* referenceSeq.referenceSeqId.text = "HLA-A*01:01:01:01"
* referenceSeq.windowStart = 1014
* referenceSeq.windowEnd = 1290
* observedSeq = "GTTCTCACACCATCCAGATAATGTATGGCTGCGACGTGGGGCCGGACGGGCGCTTCCTCCGCGGGTACCGGCAGGACGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGACCTGCGCTCTTGGACCGCGGCGGACATGGCAGCTCAGATCACCAAGCGCAAGTGGGAGGCGGTCCATGCGGCGGAGCAGCGGAGAGTCTACCTGGAGGGCCGGTGCGTGGACGGGCTCCGCAGATACCTGGAGAACGGGAAGGAGACGCTGCAGCGCACGG"

Instance: CG-IG-HLA-FullBundle-01-8
InstanceOf: MolecularSequence
Usage: #inline
* type = #dna
* coordinateSystem = 0
* referenceSeq.referenceSeqId.coding.version = "3.23"
* referenceSeq.referenceSeqId.coding = $HLAALLELE#HLA00002
* referenceSeq.referenceSeqId.text = "HLA-A*01:02"
* referenceSeq.windowStart = 503
* referenceSeq.windowEnd = 773
* observedSeq = "GCTCCCACTCCATGAGGTATTTCTCCACATCCGTGTCCCGGCCCGGCAGTGGAGAGCCCCGCTTCATCGCAGTGGGCTACGTGGACGACACGCAGTTCGTGCGGTTCGACAGCGACGCCGCGAGCCAGAAGATGGAGCCGCGGGCGCCGTGGATAGAGCAGGAGGGGCCGGAGTATTGGGACCAGGAGACACGGAATATGAAGGCCCACTCACAGACTGACCGAGCGAACCTGGGGACCCTGCGCGGCTACTACAACCAGAGCGAGGACG"

Instance: CG-IG-HLA-FullBundle-01-9
InstanceOf: MolecularSequence
Usage: #inline
* type = #dna
* coordinateSystem = 0
* referenceSeq.referenceSeqId.coding.version = "3.23"
* referenceSeq.referenceSeqId.coding = $HLAALLELE#HLA00002
* referenceSeq.referenceSeqId.text = "HLA-A*01:02"
* referenceSeq.windowStart = 1014
* referenceSeq.windowEnd = 1290
* observedSeq = "GTTCTCACACCATCCAGATAATGTATGGCTGCGACGTGGGGCCGGACGGGCGCTTCCTCCGCGGGTACCGGCAGGACGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGACCTGCGCTCTTGGACCGCGGCGGACATGGCAGCTCAGATCACCAAGCGCAAGTGGGAGGCGGTCCATGCGGCGGAGCAGCGGAGAGTCTACCTGGAGGGCCGGTGCGTGGACGGGCTCCGCAGATACCTGGAGAACGGGAAGGAGACGCTGCAGCGCACGG"

Instance: CG-IG-HLA-FullBundle-01-10
InstanceOf: Haplotype
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#84414-2 "Haplotype name"
* subject = Reference(urn:uuid:13f34265-335c-4853-bc38-0815315edafa) "John Storm"
  * type = "Patient"
* effectiveDateTime = "2016-12-15"
* performer = Reference(urn:uuid:9243cc20-27bd-4f87-ba90-0328ed474950) "aTypingLab, Inc"
* valueCodeableConcept.coding.version = "3.23"
* valueCodeableConcept.coding = $HLAALLELE#HLA-A*01:01:01G "HLA-A*01:01:01G"
* method = $GTR#GTR000000000.0
  * text = "NGS based Class I HLA-A, -B, -C genotyping"
* specimen = Reference(urn:uuid:e44fbe33-6084-4ae2-a95e-8bc451c63340) "buccal swab from John Storm"
* derivedFrom[0] = Reference(urn:uuid:8200dab6-18a2-4550-b913-a7db480c0804) "HLA-A*01:01:01:01, exon 2"
* derivedFrom[=].type = "MolecularSequence"
* derivedFrom[+] = Reference(urn:uuid:7c393185-f15c-45bc-a714-c0fdbea32675) "HLA-A*01:01:01:01, exon 3"
  * type = "MolecularSequence"
* component.code = $LNC#48018-6 "Gene studied [ID]"
* component.valueCodeableConcept = $HGNCID#HGNC:4931 "HLA-A"

Instance: CG-IG-HLA-FullBundle-01-11
InstanceOf: Haplotype
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#84414-2 "Haplotype name"
* subject = Reference(urn:uuid:13f34265-335c-4853-bc38-0815315edafa) "John Storm"
  * type = "Patient"
* effectiveDateTime = "2016-12-15"
* performer = Reference(urn:uuid:9243cc20-27bd-4f87-ba90-0328ed474950) "aTypingLab, Inc"
* valueCodeableConcept.coding.version = "3.23"
* valueCodeableConcept.coding = $HLAALLELE#HLA-A*01:02 "HLA-A*01:02"
* method = $GTR#GTR000000000.0
  * text = "NGS based Class I HLA-A, -B, -C genotyping"
* specimen = Reference(urn:uuid:e44fbe33-6084-4ae2-a95e-8bc451c63340) "buccal swab from John Storm"
* derivedFrom[0] = Reference(urn:uuid:65c85f14-c3a0-4b72-818f-820e04fcc621) "HLA-A*01:02, exon 2"
* derivedFrom[=].type = "MolecularSequence"
* derivedFrom[+] = Reference(urn:uuid:fbba9fe7-0ece-4ec1-9233-a437a8d242a0) "HLA-A*01:02, exon 3"
  * type = "MolecularSequence"
* component.code = $LNC#48018-6 "Gene studied [ID]"
* component.valueCodeableConcept = $HGNCID#HGNC:4931 "HLA-A"

Instance: CG-IG-HLA-FullBundle-01-12
InstanceOf: Genotype
Usage: #inline
* basedOn = Reference(urn:uuid:99309303-045e-4cf4-90d7-250d7a7476ea) "Class I HLA genotyping for John Storm"
  * type = "ServiceRequest"
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#84413-4 "Genotype display name"
* subject = Reference(urn:uuid:13f34265-335c-4853-bc38-0815315edafa) "John Storm"
  * type = "Patient"
* effectiveDateTime = "2016-12-15"
* performer = Reference(urn:uuid:9243cc20-27bd-4f87-ba90-0328ed474950) "aTypingLab, Inc"
* valueCodeableConcept.coding.version = "1.0"
* valueCodeableConcept.coding = $GLSTRING#hla#3.23.0#HLA-A:01:01G+HLA-A*01:02
* method = $GTR#GTR000000000.0
  * text = "NGS based Class I HLA-A, -B, -C genotyping"
* specimen = Reference(urn:uuid:e44fbe33-6084-4ae2-a95e-8bc451c63340) "buccal swab from John Storm"
* derivedFrom[0] = Reference(urn:uuid:b7765bbf-df40-486a-9f2f-404309643de6) "HLA-A*01:01:01G, exons 2 and 3"
* derivedFrom[=].type = "Observation"
* derivedFrom[+] = Reference(urn:uuid:d98d92a7-0e86-4ae5-b036-b7e1bba6ec32) "HLA-A*01:02, exons 2 and 3"
  * type = "Observation"
* component.code = $LNC#48018-6 "Gene studied [ID]"
* component.valueCodeableConcept = $HGNCID#HGNC:4931 "HLA-A"

Instance: CG-IG-HLA-FullBundle-01-13
InstanceOf: MolecularSequence
Usage: #inline
* type = #dna
* coordinateSystem = 0
* referenceSeq.referenceSeqId.coding.version = "3.23"
* referenceSeq.referenceSeqId.coding = $HLAALLELE#HLA00162
* referenceSeq.referenceSeqId.text = "HLA-B*15:01:01:01"
* referenceSeq.windowStart = 486
* referenceSeq.windowEnd = 756
* observedSeq = "GCTCCCACTCCATGAGGTATTTCTACACCGCCATGTCCCGGCCCGGCCGCGGGGAGCCCCGCTTCATCGCAGTGGGCTACGTGGACGACACCCAGTTCGTGAGGTTCGACAGCGACGCCGCGAGTCCGAGGATGGCGCCCCGGGCGCCATGGATAGAGCAGGAGGGGCCGGAGTATTGGGACCGGGAGACACAGATCTCCAAGACCAACACACAGACTTACCGAGAGAGCCTGCGGAACCTGCGCGGCTACTACAACCAGAGCGAGGCCG"

Instance: CG-IG-HLA-FullBundle-01-14
InstanceOf: MolecularSequence
Usage: #inline
* type = #dna
* coordinateSystem = 0
* referenceSeq.referenceSeqId.coding.version = "3.23"
* referenceSeq.referenceSeqId.coding = $HLAALLELE#HLA00162
* referenceSeq.referenceSeqId.text = "HLA-B*15:01:01:01"
* referenceSeq.windowStart = 1001
* referenceSeq.windowEnd = 1277
* observedSeq = "GGTCTCACACCCTCCAGAGGATGTACGGCTGCGACGTGGGGCCGGACGGGCGCCTCCTCCGCGGGCATGACCAGTCCGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGACCTGAGCTCCTGGACCGCGGCGGACACGGCGGCTCAGATCACCCAGCGCAAGTGGGAGGCGGCCCGTGAGGCGGAGCAGTGGAGAGCCTACCTGGAGGGCCTGTGCGTGGAGTGGCTCCGCAGATACCTGGAGAACGGGAAGGAGACGCTGCAGCGCGCGG"

Instance: CG-IG-HLA-FullBundle-01-15
InstanceOf: MolecularSequence
Usage: #inline
* type = #dna
* coordinateSystem = 0
* referenceSeq.referenceSeqId.coding.version = "3.23"
* referenceSeq.referenceSeqId.coding = $HLAALLELE#HLA00381
* referenceSeq.referenceSeqId.text = "HLA-B*57:01:01"
* referenceSeq.windowStart = 485
* referenceSeq.windowEnd = 755
* observedSeq = "GCTCCCACTCCATGAGGTATTTCTACACCGCCATGTCCCGGCCCGGCCGCGGGGAGCCCCGCTTCATCGCAGTGGGCTACGTGGACGACACCCAGTTCGTGAGGTTCGACAGCGACGCCGCGAGTCCGAGGATGGCGCCCCGGGCGCCATGGATAGAGCAGGAGGGGCCGGAGTATTGGGACGGGGAGACACGGAACATGAAGGCCTCCGCGCAGACTTACCGAGAGAACCTGCGGATCGCGCTCCGCTACTACAACCAGAGCGAGGCCG"

Instance: CG-IG-HLA-FullBundle-01-16
InstanceOf: MolecularSequence
Usage: #inline
* type = #dna
* coordinateSystem = 0
* referenceSeq.referenceSeqId.coding.version = "3.23"
* referenceSeq.referenceSeqId.coding = $HLAALLELE#HLA00381
* referenceSeq.referenceSeqId.text = "HLA-B*57:01:01"
* referenceSeq.windowStart = 1001
* referenceSeq.windowEnd = 1277
* observedSeq = "GGTCTCACATCATCCAGGTGATGTATGGCTGCGACGTGGGGCCGGACGGGCGCCTCCTCCGCGGGCATGACCAGTCCGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGACCTGAGCTCCTGGACCGCGGCGGACACGGCGGCTCAGATCACCCAGCGCAAGTGGGAGGCGGCCCGTGTGGCGGAGCAGCTGAGAGCCTACCTGGAGGGCCTGTGCGTGGAGTGGCTCCGCAGATACCTGGAGAACGGGAAGGAGACGCTGCAGCGCGCGG"

Instance: CG-IG-HLA-FullBundle-01-17
InstanceOf: Haplotype
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#84414-2 "Haplotype name"
* subject = Reference(urn:uuid:13f34265-335c-4853-bc38-0815315edafa) "John Storm"
  * type = "Patient"
* effectiveDateTime = "2016-12-15"
* performer = Reference(urn:uuid:9243cc20-27bd-4f87-ba90-0328ed474950) "aTypingLab, Inc"
* valueCodeableConcept.coding.version = "3.23"
* valueCodeableConcept.coding = $HLAALLELE#HGG00041 "HLA-B*15:01:01G"
* method = $GTR#GTR000000000.0
  * text = "NGS based Class I HLA-A, -B, -C genotyping"
* specimen = Reference(urn:uuid:e44fbe33-6084-4ae2-a95e-8bc451c63340) "buccal swab from John Storm"
* derivedFrom[0] = Reference(urn:uuid:cbabf93e-1b4b-46f2-ba1e-d84862670670) "HLA-B*15:01:01:01, exon 2"
* derivedFrom[=].type = "MolecularSequence"
* derivedFrom[+] = Reference(urn:uuid:c233ad3d-1572-48d6-93da-0a583535e138) "HLA-B*15:01:01:01, exon 3"
  * type = "MolecularSequence"
* component.code = $LNC#48018-6 "Gene studied [ID]"
* component.valueCodeableConcept = $HGNCID#HGNC:4932 "HLA-B"

Instance: CG-IG-HLA-FullBundle-01-18
InstanceOf: Haplotype
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#84414-2 "Haplotype name"
* subject = Reference(urn:uuid:13f34265-335c-4853-bc38-0815315edafa) "John Storm"
  * type = "Patient"
* effectiveDateTime = "2016-12-15"
* performer = Reference(urn:uuid:9243cc20-27bd-4f87-ba90-0328ed474950) "aTypingLab, Inc"
* valueCodeableConcept.coding.version = "3.23"
* valueCodeableConcept.coding = $HLAALLELE#HLA-B*57:01:01G "HLA-B*57:01:01G"
* method = $GTR#GTR000000000.0
  * text = "NGS based Class I HLA-A, -B, -C genotyping"
* specimen = Reference(urn:uuid:e44fbe33-6084-4ae2-a95e-8bc451c63340) "buccal swab from John Storm"
* derivedFrom[0] = Reference(urn:uuid:05fa52d7-5c67-460a-8722-d3460b24d6fe) "HLA-B*57:01:01, exon 2"
* derivedFrom[=].type = "MolecularSequence"
* derivedFrom[+] = Reference(urn:uuid:db69e549-6267-4777-b4b9-8813f3329309) "HLA-B*57:01:01, exon 3"
  * type = "MolecularSequence"
* component.code = $LNC#48018-6 "Gene studied [ID]"
* component.valueCodeableConcept = $HGNCID#HGNC:4932 "HLA-B"

Instance: CG-IG-HLA-FullBundle-01-19
InstanceOf: Genotype
Usage: #inline
* basedOn = Reference(urn:uuid:99309303-045e-4cf4-90d7-250d7a7476ea) "Class I HLA genotyping for John Storm"
  * type = "ServiceRequest"
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#84413-4 "Genotype display name"
* subject = Reference(urn:uuid:13f34265-335c-4853-bc38-0815315edafa) "John Storm"
  * type = "Patient"
* effectiveDateTime = "2016-12-15"
* performer = Reference(urn:uuid:9243cc20-27bd-4f87-ba90-0328ed474950) "aTypingLab, Inc"
* valueCodeableConcept.coding.version = "1.0"
* valueCodeableConcept.coding = $GLSTRING#hla#3.23.0#HLA-B*15:01:01G+HLA-B*57:01:01G
* method = $GTR#GTR000000000.0
  * text = "NGS based Class I HLA-A, -B, -C genotyping"
* specimen = Reference(urn:uuid:e44fbe33-6084-4ae2-a95e-8bc451c63340) "buccal swab from John Storm"
* derivedFrom[0] = Reference(urn:uuid:e2092243-2970-49d2-a90f-b90d1d49715a) "HLA-B*15:01:01G, exons 2 and 3"
* derivedFrom[=].type = "Observation"
* derivedFrom[+] = Reference(urn:uuid:792be53e-d4fb-4887-a367-815ef6c706e5) "HLA-B*57:01:01G, exons 2 and 3"
  * type = "Observation"
* component.code = $LNC#48018-6 "Gene studied [ID]"
* component.valueCodeableConcept = $HGNCID#HGNC:4932 "HLA-B"

Instance: CG-IG-HLA-FullBundle-01-20
InstanceOf: MolecularSequence
Usage: #inline
* type = #dna
* coordinateSystem = 0
* referenceSeq.referenceSeqId.coding.version = "3.23"
* referenceSeq.referenceSeqId.coding = $HLAALLELE#HLA00401
* referenceSeq.referenceSeqId.text = "HLA-C*01:02:01"
* referenceSeq.windowStart = 486
* referenceSeq.windowEnd = 756
* observedSeq = "GCTCCCACTCCATGAAGTATTTCTTCACATCCGTGTCCCGGCCTGGCCGCGGAGAGCCCCGCTTCATCTCAGTGGGCTACGTGGACGACACGCAGTTCGTGCGGTTCGACAGCGACGCCGCGAGTCCGAGAGGGGAGCCGCGGGCGCCGTGGGTGGAGCAGGAGGGGCCGGAGTATTGGGACCGGGAGACACAGAAGTACAAGCGCCAGGCACAGACTGACCGAGTGAGCCTGCGGAACCTGCGCGGCTACTACAACCAGAGCGAGGCCG"

Instance: CG-IG-HLA-FullBundle-01-21
InstanceOf: MolecularSequence
Usage: #inline
* type = #dna
* coordinateSystem = 0
* referenceSeq.referenceSeqId.coding.version = "3.23"
* referenceSeq.referenceSeqId.coding = $HLAALLELE#HLA00401
* referenceSeq.referenceSeqId.text = "HLA-C*01:02:01"
* referenceSeq.windowStart = 1002
* referenceSeq.windowEnd = 1278
* observedSeq = "GGTCTCACACCCTCCAGTGGATGTGTGGCTGCGACCTGGGGCCCGACGGGCGCCTCCTCCGCGGGTATGACCAGTACGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGACCTGCGCTCCTGGACCGCCGCGGACACCGCGGCTCAGATCACCCAGCGCAAGTGGGAGGCGGCCCGTGAGGCGGAGCAGCGGAGAGCCTACCTGGAGGGCACGTGCGTGGAGTGGCTCCGCAGATACCTGGAGAACGGGAAGGAGACGCTGCAGCGCGCGG"

Instance: CG-IG-HLA-FullBundle-01-22
InstanceOf: MolecularSequence
Usage: #inline
* type = #dna
* coordinateSystem = 0
* referenceSeq.referenceSeqId.coding.version = "3.23"
* referenceSeq.referenceSeqId.coding = $HLAALLELE#HLA00413
* referenceSeq.referenceSeqId.text = "HLA-C*03:04:01:01"
* referenceSeq.windowStart = 486
* referenceSeq.windowEnd = 756
* observedSeq = "GCTCCCACTCCATGAGGTATTTCTACACCGCTGTGTCCCGGCCCGGCCGCGGGGAGCCCCACTTCATCGCAGTGGGCTACGTGGACGACACGCAGTTCGTGCGGTTCGACAGCGACGCCGCGAGTCCGAGAGGGGAGCCGCGGGCGCCGTGGGTGGAGCAGGAGGGGCCGGAGTATTGGGACCGGGAGACACAGAAGTACAAGCGCCAGGCACAGACTGACCGAGTGAGCCTGCGGAACCTGCGCGGCTACTACAACCAGAGCGAGGCCG"

Instance: CG-IG-HLA-FullBundle-01-23
InstanceOf: MolecularSequence
Usage: #inline
* type = #dna
* coordinateSystem = 0
* referenceSeq.referenceSeqId.coding.version = "3.23"
* referenceSeq.referenceSeqId.coding = $HLAALLELE#HLA00413
* referenceSeq.referenceSeqId.text = "HLA-C*03:04:01:01"
* referenceSeq.windowStart = 1001
* referenceSeq.windowEnd = 1277
* observedSeq = "GGTCTCACATCATCCAGAGGATGTATGGCTGCGACGTGGGGCCCGACGGGCGCCTCCTCCGCGGGTATGACCAGTACGCCTACGACGGCAAGGATTACATCGCCCTGAACGAGGATCTGCGCTCCTGGACCGCCGCGGACACGGCGGCTCAGATCACCCAGCGCAAGTGGGAGGCGGCCCGTGAGGCGGAGCAGCTGAGAGCCTACCTGGAGGGCCTGTGCGTGGAGTGGCTCCGCAGATACCTGAAGAATGGGAAGGAGACGCTGCAGCGCGCGG"

Instance: CG-IG-HLA-FullBundle-01-24
InstanceOf: Haplotype
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#84414-2 "Haplotype name"
* subject = Reference(urn:uuid:13f34265-335c-4853-bc38-0815315edafa) "John Storm"
  * type = "Patient"
* effectiveDateTime = "2016-12-15"
* performer = Reference(urn:uuid:9243cc20-27bd-4f87-ba90-0328ed474950) "aTypingLab, Inc"
* valueCodeableConcept.coding.version = "3.23"
* valueCodeableConcept.coding = $HLAALLELE#HLA-C*01:02:01G "HLA-C*01:02:01G"
* method = $GTR#GTR000000000.0
  * text = "NGS based Class I HLA-A, -B, -C genotyping"
* specimen = Reference(urn:uuid:e44fbe33-6084-4ae2-a95e-8bc451c63340) "buccal swab from John Storm"
* derivedFrom[0] = Reference(urn:uuid:bb55c2bc-5ad2-4bc1-8ff3-c407d06b12d0) "HLA-C*01:02:01, exon 2"
* derivedFrom[=].type = "MolecularSequence"
* derivedFrom[+] = Reference(urn:uuid:46938bb2-0486-4e87-bfd3-89aab2d5e22f) "HLA-C*01:02:01, exon 3"
  * type = "MolecularSequence"
* component.code = $LNC#48018-6 "Gene studied [ID]"
* component.valueCodeableConcept = $HGNCID#HGNC:4933 "HLA-C"

Instance: CG-IG-HLA-FullBundle-01-25
InstanceOf: Haplotype
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#84414-2 "Haplotype name"
* subject = Reference(urn:uuid:13f34265-335c-4853-bc38-0815315edafa) "John Storm"
  * type = "Patient"
* effectiveDateTime = "2016-12-15"
* performer = Reference(urn:uuid:9243cc20-27bd-4f87-ba90-0328ed474950) "aTypingLab, Inc"
* valueCodeableConcept.coding.version = "3.23"
* valueCodeableConcept.coding = $HLAALLELE#HLA-C*01:02:01G "HLA-C*01:02:01G"
* method = $GTR#GTR000000000.0
  * text = "NGS based Class I HLA-A, -B, -C genotyping"
* specimen = Reference(urn:uuid:e44fbe33-6084-4ae2-a95e-8bc451c63340) "buccal swab from John Storm"
* derivedFrom[0] = Reference(urn:uuid:2ae2ff34-279e-43c2-9018-b054fd3fc1ce) "HLA-C*03:04:01:01, exon 2"
* derivedFrom[=].type = "MolecularSequence"
* derivedFrom[+] = Reference(urn:uuid:19153ef1-68c6-47a2-9676-c4eefbd39af9) "HLA-C*03:04:01:01, exon 3"
  * type = "MolecularSequence"
* component.code = $LNC#48018-6 "Gene studied [ID]"
* component.valueCodeableConcept = $HGNCID#HGNC:4933 "HLA-C"

Instance: CG-IG-HLA-FullBundle-01-26
InstanceOf: Genotype
Usage: #inline
* basedOn = Reference(urn:uuid:99309303-045e-4cf4-90d7-250d7a7476ea) "Class I HLA genotyping for John Storm"
  * type = "ServiceRequest"
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#84413-4 "Genotype display name"
* subject = Reference(urn:uuid:13f34265-335c-4853-bc38-0815315edafa) "John Storm"
  * type = "Patient"
* effectiveDateTime = "2016-12-15"
* performer = Reference(urn:uuid:9243cc20-27bd-4f87-ba90-0328ed474950) "aTypingLab, Inc"
* valueCodeableConcept.coding.version = "1.0"
* valueCodeableConcept.coding = $GLSTRING#hla#3.23.0#HLA-C*01:02:01G+HLA-C*03:04:01G
* method = $GTR#GTR000000000.0
  * text = "NGS based Class I HLA-A, -B, -C genotyping"
* specimen = Reference(urn:uuid:e44fbe33-6084-4ae2-a95e-8bc451c63340) "buccal swab from John Storm"
* derivedFrom[0] = Reference(urn:uuid:8b2aa21c-1426-4717-8ab0-a84d83df7d47) "HLA-C*03:04:01G, exons 2 and 3"
* derivedFrom[=].type = "Observation"
* derivedFrom[+] = Reference(urn:uuid:709c5315-9403-4867-9d82-0b953836665f) "HLA-C*01:02:01G, exons 2 and 3"
  * type = "Observation"
* component.code = $LNC#48018-6 "Gene studied [ID]"
* component.valueCodeableConcept = $HGNCID#HGNC:4933 "HLA-C"

Instance: CG-IG-HLA-FullBundle-01-27
InstanceOf: GenomicReport
Usage: #inline
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/hla-genotyping-results-allele-database"
* extension[=].valueCodeableConcept.coding.system = "http://www.ebi.ac.uk/ipd/imgt/hla"
* extension[=].valueCodeableConcept.coding.version = "3.23"
* extension[+].extension[0].url = "text"
* extension[=].extension[=].valueString = "HLA-A*01:01:01G+HLA-A*01:02^HLA-B*15:01:01G+HLA-B*57:01:01G^HLA-C*01:02:01G+HLA-C*03:04:01G"
* extension[=].extension[+].url = "url"
* extension[=].extension[=].valueUri = "https://gl.nmdp.org/imgt-hla/3.23.0/multilocus-unphased-genotype/ex"
* extension[=].url = "http://hl7.org/fhir/StructureDefinition/hla-genotyping-results-glstring"
* basedOn = Reference(urn:uuid:99309303-045e-4cf4-90d7-250d7a7476ea) "Class I HLA genotyping for John Storm"
  * type = "ServiceRequest"
* status = #final
* category[Genetics] = $DIAGNOSTICSERVICE#GE "Genetics"
* code.coding[0] = $LNC#51969-4 "Genetic analysis report"
* code.coding[+] = $HGNCID#HGNC:588 "Histocompatibility complex (HLA)"
* subject = Reference(urn:uuid:13f34265-335c-4853-bc38-0815315edafa) "John Storm"
  * type = "Patient"
* effectiveDateTime = "2016-12-15"
* performer = Reference(urn:uuid:9243cc20-27bd-4f87-ba90-0328ed474950) "aTypingLab, Inc"
* issued = "2016-12-15T14:15:30-06:00"
* performer = Reference(urn:uuid:9243cc20-27bd-4f87-ba90-0328ed474950) "aTypingLab Inc"
  * type = "Organization"
* specimen = Reference(urn:uuid:e44fbe33-6084-4ae2-a95e-8bc451c63340) "buccal swab from John Storm"
* result[0] = Reference(urn:uuid:49a86246-4004-42eb-9bdc-f542f93f9228) "HLA-A: HLA-A:01:01:01G+HLA-A*01:02"
* result[=].type = "Observation"
* result[+] = Reference(urn:uuid:60613a43-c4cb-4502-b3e2-cf9215feaa70) "HLA-B: HLA-B*15:01:01G+HLA-B*57:01:01G"
  * type = "Observation"
* result[+] = Reference(urn:uuid:0e0a780e-4486-4cd0-bfae-7243c579f208) "HLA-C: HLA-C*01:02:01G+HLA-C*03:04:01G"
  * type = "Observation"

---

// File: input/fsh/examples/bundle-cgexample-withGrouping.fsh

Instance: bundle-cgexample-withGrouping
InstanceOf: Bundle
Description: "Example bundle showing a variety of profiles, including how groupings of Observations might be delivered."
Usage: #example
* type = #collection
* entry[0].fullUrl = "http://example.org/fhir/DiagnosticReport/report-withGrouping"
* entry[=].resource = report-withGrouping
* entry[+].fullUrl = "http://example.org/fhir/Patient/ExamplePatient"
* entry[=].resource = ExamplePatient
* entry[+].fullUrl = "http://example.org/fhir/Specimen/ExampleSpecimen"
* entry[=].resource = ExampleSpecimen
* entry[+].fullUrl = "http://example.org/fhir/Organization/ExampleLab"
* entry[=].resource = ExampleLab
* entry[+].fullUrl = "http://example.org/fhir/ServiceRequest/ExampleServiceRequest"
* entry[=].resource = ExampleServiceRequest
* entry[+].fullUrl = "http://example.org/fhir/Observation/discrete-variant-1a"
* entry[=].resource = discrete-variant-1a
* entry[+].fullUrl = "http://example.org/fhir/Observation/dis-path-1a"
* entry[=].resource = dis-path-1a
* entry[+].fullUrl = "http://example.org/fhir/Observation/complex-variant-1a"
* entry[=].resource = complex-variant-1a
* entry[+].fullUrl = "http://example.org/fhir/Observation/complex-dis-path-1a"
* entry[=].resource = complex-dis-path-1a
* entry[+].fullUrl = "http://example.org/fhir/Observation/complex-component-D-1a"
* entry[=].resource = complex-component-D-1a
* entry[+].fullUrl = "http://example.org/fhir/Observation/complex-component-E-1a"
* entry[=].resource = complex-component-E-1a
* entry[+].fullUrl = "http://example.org/fhir/Observation/pharmPanel-1a"
* entry[=].resource = pharmPanel-1a
* entry[+].fullUrl = "http://example.org/fhir/Observation/haplotype-1a"
* entry[=].resource = haplotype-1a
* entry[+].fullUrl = "http://example.org/fhir/Observation/genotype-1a"
* entry[=].resource = genotype-1a
* entry[+].fullUrl = "http://example.org/fhir/Observation/metab-1a"
* entry[=].resource = metab-1a
* entry[+].fullUrl = "http://example.org/fhir/Observation/efficacy-1a"
* entry[=].resource = efficacy-1a
* entry[+].fullUrl = "http://example.org/fhir/Observation/highrisk-1a"
* entry[=].resource = highrisk-1a
* entry[+].fullUrl = "http://example.org/fhir/Task/usage-1a"
* entry[=].resource = usage-1a


Instance: report-withGrouping
InstanceOf: GenomicReport
Usage: #inline
* basedOn = Reference(ExampleServiceRequest)
* status = #final
* category[Genetics] = $DIAGNOSTICSERVICE#GE
* code.coding = $LNC#51969-4 "Genetic analysis report"
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* result[+] = Reference(discrete-variant-1a)
* result[+] = Reference(dis-path-1a)
* result[+] = Reference(complex-variant-1a)
* result[+] = Reference(complex-dis-path-1a)
* result[+] = Reference(pharmPanel-1a)
* result[+] = Reference(haplotype-1a)
* result[+] = Reference(genotype-1a)
* result[+] = Reference(metab-1a)
* result[+] = Reference(efficacy-1a)
* presentedForm.contentType = #text/plain
* presentedForm.data = "UHV0IHRoZSByZXBvcnQgdGV4dCBoZXJlIC0gbWltZS1lbmNvZGVk"
* conclusionCode[0] = $LNC#LA6576-8 "Positive"
* conclusionCode[+] = $SCT#10828004 "Positive"

Instance: dis-path-1a
InstanceOf: DiagnosticImplication
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#diagnostic-implication
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* derivedFrom = Reference(discrete-variant-1a)
* component[0].code = $LNC#53037-8
* component[=].valueCodeableConcept.coding = $LNC#LA6668-3 "Pathogenic"
* component[+].code = $LNC#81259-4
* component[=].valueCodeableConcept.coding = $MONDO#MONDO:0012624 "acyl-CoA dehydrogenase 9 deficiency"

Instance: complex-variant-1a
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* specimen = Reference(ExampleSpecimen)
* hasMember[0] = Reference(complex-component-D-1a)
* hasMember[+] = Reference(complex-component-E-1a)
/* extra slice
* component.code = $LNC#81263-6
* component.valueCodeableConcept = $LNC#LA26218-0 "Haplotype"
*/

Instance: complex-dis-path-1a
InstanceOf: DiagnosticImplication
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#diagnostic-implication
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* derivedFrom = Reference(complex-variant-1a)
* component[0].code = $LNC#53037-8
* component[=].valueCodeableConcept.coding = $LNC#LA6668-3 "Pathogenic"
* component[+].code = $LNC#81259-4
* component[=].valueCodeableConcept.coding = $SCT#293498008 "Debrisoquine adverse reaction (disorder)"

Instance: pharmPanel-1a
InstanceOf: Observation
Usage: #inline
* extension.url = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/recommended-action"
* extension.valueReference = Reference(usage-1a)
* status = #final
* category[+].coding = $OBSCAT#laboratory
* category[+].coding = $DIAGNOSTICSERVICE#GE
* code = $NCIT#C43359 "Group"
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* hasMember[0] = Reference(haplotype-1a)
* hasMember[+] = Reference(genotype-1a)
* hasMember[+] = Reference(metab-1a)
* hasMember[+] = Reference(efficacy-1a)

Instance: haplotype-1a
InstanceOf: Haplotype
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#84414-2
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* valueCodeableConcept.coding = $HLAALLELE#*2
* specimen = Reference(ExampleSpecimen)
* derivedFrom = Reference(discrete-variant-1a)

Instance: genotype-1a
InstanceOf: Genotype
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#84413-4
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* valueCodeableConcept = $PHARMVAR#CYP2C9*2*5" "CYP2C9 *2/*5"
* specimen = Reference(ExampleSpecimen)
* derivedFrom = Reference(haplotype-1a)
* component[0].code = $LNC#48018-6
* component[=].valueCodeableConcept.coding = $HGNCID#HGNC:2623 "CYP2C9"
* component[+].code = $LNC#48018-6
* component[=].valueCodeableConcept.coding = $HGNCID#HGNC:23663 "VKORC1"

Instance: metab-1a
InstanceOf: TherapeuticImplication
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#therapeutic-implication
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* derivedFrom = Reference(genotype-1a)
* component[0].code = $LNC#51963-7
* component[=].valueCodeableConcept.coding = $RXN#11289 "Warfarin"
* component[+].code = TbdCodesCS#therapeutic-implication
* component[=].valueCodeableConcept.coding = $LNC#LA25390-8 "Rapid metabolizer"

Instance: efficacy-1a
InstanceOf: TherapeuticImplication
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#therapeutic-implication
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* derivedFrom = Reference(genotype-1a)
* component[0].code = TbdCodesCS#therapeutic-implication
* component[=].valueCodeableConcept.coding = $LNC#LA6676-6 "Resistant"
* component[+].code = $LNC#51963-7
* component[=].valueCodeableConcept.coding = $RXN#11289 "Warfarin"

Instance: highrisk-1a
InstanceOf: TherapeuticImplication
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#therapeutic-implication
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* derivedFrom = Reference(genotype-1a)
* component[0].code = TbdCodesCS#therapeutic-implication
* component[=].valueCodeableConcept.coding = $LNC#LA19542-2 "Low risk"
* component[+].code = $LNC#51963-7
* component[=].valueCodeableConcept.coding = $RXN#11289 "Warfarin"

Instance: usage-1a
InstanceOf: MedicationRecommendation
Usage: #inline
* status = #requested
* intent = #proposal
* code.coding = $LNC#LA26423-6 "Increase dose"
* code.text = "May need higher dosage than usual."
* focus = Reference(MedicationStatementWarfarin)
* for = Reference(ExamplePatient)
* requester = Reference(ExampleLab)
* reasonReference = Reference(metab-1a)

Instance: complex-component-D-1a
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* valueCodeableConcept.coding = $LNC#LA9633-4 "Present"
* specimen = Reference(ExampleSpecimen)
* component[0].code = $LNC#81252-9 "Discrete genetic variant"
* component[=].valueCodeableConcept.coding = $CLINVAR#31934 "NM_000106.5(CYP2D6):c.886C>T (p.Arg296Cys)"
* component[+].code = $LNC#51958-7
* component[=].valueCodeableConcept.coding = $NCBIREFSEQ#NM_000106.5
* component[+].code = $LNC#48004-6
* component[=].valueCodeableConcept.coding = $HGVS#NM_000106.5:c.886C>T
* component[+].code = $LNC#48005-3
* component[=].valueCodeableConcept.coding = $HGVS#NP_000097.3:p.Arg296Cys
* component[+].code = $LNC#48019-4
* component[=].valueCodeableConcept.coding = $LNC#LA6690-7 "Substitution"

Instance: complex-component-E-1a
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* specimen = Reference(ExampleSpecimen)
* component[0].code = $LNC#81252-9 "Discrete genetic variant"
* component[=].valueCodeableConcept.coding = $CLINVAR#38486 "NM_000106.5(CYP2D6):c.1457G>C (p.Ser486Thr)"
* component[+].code = $LNC#51958-7
* component[=].valueCodeableConcept = $NCBIREFSEQ#NM_000106.5
* component[+].code = $LNC#48004-6
* component[=].valueCodeableConcept.coding = $HGVS#NM_000106.5:c.1457G>C

Instance: discrete-variant-1a
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* valueCodeableConcept.coding = $LNC#LA9633-4 "Present"
* specimen = Reference(ExampleSpecimen)
* component[0].code = $LNC#81252-9 "Discrete genetic variant"
* component[=].valueCodeableConcept.coding = $CLINVAR#30880 "NM_014049.4(ACAD9):c.1249C>T (p.Arg417Cys)"
* component[+].code = $LNC#48018-6
* component[=].valueCodeableConcept.coding = $HGNCID#HGNC:21497 "ACAD9"
* component[+].code = $LNC#51958-7
* component[=].valueCodeableConcept.coding = $NCBIREFSEQ#NM_014049.4
* component[+].code = $LNC#48013-7
* component[=].valueCodeableConcept.coding = $NCBIREFSEQ#NG_017064.1
* component[+].code = $LNC#81290-9
* component[=].valueCodeableConcept.coding = $HGVS#NC_000003.11:g.128625063C>T
* component[+].code = $LNC#81252-9
* component[=].valueCodeableConcept.coding = $SNP#rs368949613
* component[+].code = $LNC#48004-6
* component[=].valueCodeableConcept.coding = $HGVS#NM_014049.4:c.1249C>T
* component[+].code = $LNC#48005-3
* component[=].valueCodeableConcept.coding = $HGVS#NP_054768.2:p.Arg417Cys
* component[+].code = $LNC#48019-4
* component[=].valueCodeableConcept.coding = $LNC#LA6690-7 "Substitution"
* component[+].code = $LNC#69547-8
* component[=].valueString = "C"
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 31731
* component[=].valueRange.high.value = 31731
* component[+].code = $LNC#69551-0
* component[=].valueString = "T"
* component[+].code = $LNC#48001-2
* component[=].valueCodeableConcept.text = "3q21"
* component[+].code = $LNC#48002-0
* component[=].valueCodeableConcept.coding = $LNC#LA6683-2 "Germline"
* component[+].code = $LNC#53034-5
* component[=].valueCodeableConcept.coding = $LNC#LA6706-1 "Heterozygous"
* component[+].code = $LNC#81258-6
* component[=].valueQuantity = 47 '%'
* component[+].code = $LNC#82121-5
* component[=].valueQuantity = 208 '1'
* component[+].code = $LNC#82155-3
* component[=].valueQuantity = 1 '1'
* component[+].code = $LNC#81301-4
* component[=].valueRange.low.value = 13200589
* component[=].valueRange.high.value = 15592000
* component[+].code = $LNC#81302-2
* component[=].valueRange.low.value = 14184616
* component[=].valueRange.high.value = 15581544
/* - extra slices
* component[+].code = $LNC#81299-0
* component[=].valueQuantity.value = 0.48
* component[+].code = $LNC#81300-6
* component[=].valueQuantity = 1396929 '1'
*/


---

// File: input/fsh/examples/bundle-cgexample.fsh

Instance: bundle-cgexample
InstanceOf: Bundle
Description: "Example bundle showing a variety of profiles."
Usage: #example
* type = #collection
* entry[0].fullUrl = "http://example.org/fhir/DiagnosticReport/report"
* entry[=].resource = report
* entry[+].fullUrl = "http://example.org/fhir/Patient/ExamplePatient"
* entry[=].resource = ExamplePatient
* entry[+].fullUrl = "http://example.org/fhir/Specimen/ExampleSpecimen"
* entry[=].resource = ExampleSpecimen
* entry[+].fullUrl = "http://example.org/fhir/Organization/ExampleLab"
* entry[=].resource = ExampleLab
* entry[+].fullUrl = "http://example.org/fhir/ServiceRequest/ExampleServiceRequest"
* entry[=].resource = ExampleServiceRequest
* entry[+].fullUrl = "http://example.org/fhir/Observation/discrete-variant"
* entry[=].resource = discrete-variant
* entry[+].fullUrl = "http://example.org/fhir/Observation/dis-path"
* entry[=].resource = dis-path
* entry[+].fullUrl = "http://example.org/fhir/Observation/complex-variant"
* entry[=].resource = complex-variant
* entry[+].fullUrl = "http://example.org/fhir/Observation/complex-dis-path"
* entry[=].resource = complex-dis-path
* entry[+].fullUrl = "http://example.org/fhir/Observation/complex-component-D"
* entry[=].resource = complex-component-D
* entry[+].fullUrl = "http://example.org/fhir/Observation/complex-component-E"
* entry[=].resource = complex-component-E
* entry[+].fullUrl = "http://example.org/fhir/Observation/haplotype"
* entry[=].resource = haplotype
* entry[+].fullUrl = "http://example.org/fhir/Observation/genotype"
* entry[=].resource = genotype
* entry[+].fullUrl = "http://example.org/fhir/Observation/metab"
* entry[=].resource = metab
* entry[+].fullUrl = "http://example.org/fhir/Observation/efficacy"
* entry[=].resource = efficacy
* entry[+].fullUrl = "http://example.org/fhir/Observation/highrisk"
* entry[=].resource = highrisk
* entry[+].fullUrl = "http://example.org/fhir/Task/usage"
* entry[=].resource = usage

Instance: report
InstanceOf: GenomicReport
Usage: #inline
* basedOn = Reference(ExampleServiceRequest)
* status = #final
* category[Genetics] = $DIAGNOSTICSERVICE#GE
* code.coding = $LNC#51969-4 
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* result[+] = Reference(discrete-variant)
* result[+] = Reference(dis-path)
* result[+] = Reference(complex-variant)
* result[+] = Reference(complex-dis-path)
* result[+] = Reference(haplotype)
* result[+] = Reference(genotype)
* result[+] = Reference(metab)
* result[+] = Reference(efficacy)
* presentedForm.contentType = #text/plain
* presentedForm.data = "UHV0IHRoZSByZXBvcnQgdGV4dCBoZXJlIC0gbWltZS1lbmNvZGVk"
* conclusionCode[+] = $LNC#LA6576-8 "Positive"
* conclusionCode[+] = $SCT#10828004 "Positive"

Instance: discrete-variant
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* valueCodeableConcept.coding = $LNC#LA9633-4 "Present"
* specimen = Reference(ExampleSpecimen)
* component[0].code = $LNC#81252-9 "Discrete genetic variant"
* component[=].valueCodeableConcept.coding = $CLINVAR#30880 "NM_014049.4(ACAD9):c.1249C>T (p.Arg417Cys)"
* component[+].code = $LNC#48018-6
* component[=].valueCodeableConcept.coding = $HGNCID#HGNC:21497 "ACAD9"
* component[+].code = $LNC#51958-7
* component[=].valueCodeableConcept.coding = $NCBIREFSEQ#NM_014049.4
* component[+].code = $LNC#48013-7
* component[=].valueCodeableConcept.coding = $NCBIREFSEQ#NG_017064.1
* component[+].code = $LNC#81290-9
* component[=].valueCodeableConcept.coding = $HGVS#NC_000003.11:g.128625063C>T
* component[+].code = $LNC#81252-9
* component[=].valueCodeableConcept.coding.version = "137"
* component[=].valueCodeableConcept.coding = $SNP#rs368949613
* component[+].code = $LNC#48004-6
* component[=].valueCodeableConcept.coding = $HGVS#NM_014049.4:c.1249C>T
* component[+].code = $LNC#48005-3
* component[=].valueCodeableConcept.coding = $HGVS#NP_054768.2:p.Arg417Cys
* component[+].code = $LNC#48019-4
* component[=].valueCodeableConcept.coding = $LNC#LA6690-7 "Substitution"
* component[+].code = $LNC#69547-8
* component[=].valueString = "C"
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 31731
* component[=].valueRange.high.value = 31731
* component[+].code = $LNC#69551-0
* component[=].valueString = "T"
* component[+].code = $LNC#48001-2
* component[=].valueCodeableConcept.text = "3q21"
* component[+].code = $LNC#48002-0
* component[=].valueCodeableConcept.coding = $LNC#LA6683-2 "Germline"
* component[+].code = $LNC#53034-5
* component[=].valueCodeableConcept.coding = $LNC#LA6706-1 "Heterozygous"
* component[+].code = $LNC#81258-6
* component[=].valueQuantity = 47 '%'
* component[+].code = $LNC#82121-5
* component[=].valueQuantity = 208 '1'
* component[+].code = $LNC#82155-3
* component[=].valueQuantity = 1 '1'
* component[+].code.coding = $LNC#81299-0
* component[=].valueQuantity.value = 0.48
* component[+].code = $LNC#81300-6
* component[=].valueQuantity = 1396929 '1'
* component[+].code = $LNC#81301-4
* component[=].valueRange.low.value = 13200589
* component[=].valueRange.high.value = 15592000
* component[+].code = $LNC#81302-2
* component[=].valueRange.low.value = 14184616
* component[=].valueRange.high.value = 15581544

Instance: dis-path
InstanceOf: DiagnosticImplication
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#diagnostic-implication
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* derivedFrom = Reference(discrete-variant)
* component[0].code = $LNC#53037-8
* component[=].valueCodeableConcept.coding = $LNC#LA6668-3 "Pathogenic"
* component[+].code = $LNC#81259-4
* component[=].valueCodeableConcept.coding = $MONDO#MONDO:0012624 "acyl-CoA dehydrogenase 9 deficiency"

Instance: complex-variant
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* specimen = Reference(ExampleSpecimen)
* hasMember[0] = Reference(complex-component-D)
* hasMember[+] = Reference(complex-component-E)
/* - example of open slicing - commenting this out as it causes numerous other cascading Slicing Information issues (everywhere this resource is referenced)
* component.code = $LNC#81263-6
* component.valueCodeableConcept = $LNC#LA26218-0 "Haplotype"
*/

Instance: complex-dis-path
InstanceOf: DiagnosticImplication
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#diagnostic-implication
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* derivedFrom = Reference(complex-variant)
* component[0].code = $LNC#53037-8
* component[=].valueCodeableConcept.coding = $LNC#LA6668-3 "Pathogenic"
* component[+].code = $LNC#81259-4
* component[=].valueCodeableConcept.coding = $SCT#293498008 "Debrisoquine adverse reaction (disorder)"

Instance: complex-component-D
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* valueCodeableConcept.coding = $LNC#LA9633-4 "Present"
* specimen = Reference(ExampleSpecimen)
* component[0].code = $LNC#81252-9 "Discrete genetic variant"
* component[=].valueCodeableConcept.coding = $CLINVAR#31934 "NM_000106.5(CYP2D6):c.886C>T (p.Arg296Cys)"
* component[+].code = $LNC#51958-7
* component[=].valueCodeableConcept.coding = $NCBIREFSEQ#NM_000106.5
* component[+].code = $LNC#48004-6
* component[=].valueCodeableConcept.coding = $HGVS#NM_000106.5:c.886C>T
* component[+].code = $LNC#48005-3
* component[=].valueCodeableConcept.coding = $HGVS#NP_000097.3:p.Arg296Cys
* component[+].code = $LNC#48019-4
* component[=].valueCodeableConcept.coding = $LNC#LA6690-7 "Substitution"

Instance: complex-component-E
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* specimen = Reference(ExampleSpecimen)
* component[0].code = $LNC#81252-9 "Discrete genetic variant"
* component[=].valueCodeableConcept.coding.version = "???"
* component[=].valueCodeableConcept.coding = $CLINVAR#38486 "NM_000106.5(CYP2D6):c.1457G>C (p.Ser486Thr)"
* component[+].code = $LNC#51958-7
* component[=].valueCodeableConcept = $NCBIREFSEQ#NM_000106.5
* component[+].code = $LNC#48004-6
* component[=].valueCodeableConcept.coding = $HGVS#NM_000106.5:c.1457G>C

Instance: haplotype
InstanceOf: Haplotype
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#84414-2
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* valueCodeableConcept.coding = $HLAALLELE#*2
* specimen = Reference(ExampleSpecimen)
* derivedFrom = Reference(discrete-variant)

Instance: genotype
InstanceOf: Genotype
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#84413-4
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* valueCodeableConcept = $PHARMVAR#"CYP2C9 *2/*5" "CYP2C9 *2/*5"
* specimen = Reference(ExampleSpecimen)
* derivedFrom = Reference(haplotype)
* component[0].code = $LNC#48018-6
* component[=].valueCodeableConcept.coding = $HGNCID#HGNC:2623 "CYP2C9"
* component[+].code = $LNC#48018-6
* component[=].valueCodeableConcept.coding = $HGNCID#HGNC:23663 "VKORC1"

Instance: metab
InstanceOf: TherapeuticImplication
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#therapeutic-implication
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* derivedFrom = Reference(genotype)
* component[0].code = $LNC#51963-7
* component[=].valueCodeableConcept.coding = $RXN#11289 "Warfarin"
* component[+].code = TbdCodesCS#therapeutic-implication
* component[=].valueCodeableConcept.coding = $LNC#LA25390-8 "Rapid metabolizer"

Instance: efficacy
InstanceOf: TherapeuticImplication
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#therapeutic-implication
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* derivedFrom = Reference(genotype)
* component[0].code = TbdCodesCS#therapeutic-implication
* component[=].valueCodeableConcept.coding = $LNC#LA6676-6 "Resistant"
* component[+].code = $LNC#51963-7
* component[=].valueCodeableConcept.coding = $RXN#11289 "Warfarin"

Instance: highrisk
InstanceOf: TherapeuticImplication
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#therapeutic-implication
* subject = Reference(ExamplePatient)
* effectiveDateTime = "2016"
* issued = "2016-09-06T00:00:00-05:00"
* performer = Reference(ExampleLab)
* derivedFrom = Reference(genotype)
* component[0].code = TbdCodesCS#therapeutic-implication
* component[=].valueCodeableConcept.coding = $LNC#LA19542-2 "Low risk"
* component[+].code = $LNC#51963-7
* component[=].valueCodeableConcept.coding = $RXN#11289 "Warfarin"

Instance: usage
InstanceOf: MedicationRecommendation
Usage: #inline
* status = #requested
* intent = #proposal
* code.coding = $LNC#LA26423-6 "Increase dose"
* code.text = "May need higher dosage than usual."
* focus = Reference(MedicationStatementWarfarin)
* for = Reference(ExamplePatient)
* requester = Reference(ExampleLab)
* reasonReference = Reference(metab)



---

// File: input/fsh/examples/bundle-complexVariant-nonHGVS.fsh

Instance: bundle-complexVariant-nonHGVS
InstanceOf: Bundle
Description: "Example bundle with compound heterozygous variant, where the specific changes are represented without HGVS."
Usage: #example
* type = #transaction
* entry[0].fullUrl = "urn:uuid:16fdd5fc-e665-48af-99e4-48d603f3e12d"
* entry[=].resource = Inline-Instance-for-complexVariant-nonHGVS-1
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:16fdd5fc-e665-48af-99e4-48d603f3e12e"
* entry[=].resource = Inline-Instance-for-complexVariant-nonHGVS-2
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:16fdd5fc-e665-48af-99e4-48d603f3e12a"
* entry[=].resource = Inline-Instance-for-complexVariant-nonHGVS-3
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab"
* entry[=].resource = performingLab
* entry[=].request.method = #POST
* entry[=].request.url = "Organization"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac"
* entry[=].resource = patient
* entry[=].request.method = #POST
* entry[=].request.url = "Patient"


Instance: Inline-Instance-for-complexVariant-nonHGVS-1
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#51958-7 "Transcript ref sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NM_022787.3 "NM_022787.3"
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 769
* component[=].valueRange.high.value = 769
* component[+].code = $LNC#69547-8 "Genomic ref allele [ID]"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Genomic alt allele [ID]"
* component[=].valueString = "A"
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "Heterozygous"


Instance: Inline-Instance-for-complexVariant-nonHGVS-2
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#51958-7 "Transcript ref sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NM_022787.3 "NM_022787.3"
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 53
* component[=].valueRange.high.value = 53
* component[+].code = $LNC#69547-8 "Genomic ref allele [ID]"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Genomic alt allele [ID]"
* component[=].valueString = "G"
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "Heterozygous"

Instance: Inline-Instance-for-complexVariant-nonHGVS-3
InstanceOf: Genotype
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#84413-4
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $CLINVAR#RCV000664188.1 "NM_022787.3(NMNAT1):c.[53A>G];[769G>A] AND Cone-rod dystrophy"
* hasMember[0] = Reference(urn:uuid:16fdd5fc-e665-48af-99e4-48d603f3e12e) "unpacked representation of NM_022787.3:c.53A>G"
* hasMember[+] = Reference(urn:uuid:16fdd5fc-e665-48af-99e4-48d603f3e12d) "unpacked representation of NM_022787.3:c.769G>A"


---

// File: input/fsh/examples/bundle-compound-heterozygote.fsh

Instance: bundle-compound-heterozygote
InstanceOf: Bundle
Description: "Example bundle with compound heterozygous variant, where the specific changes are represented with HGVS."
Usage: #example
* type = #transaction
* entry[0].fullUrl = "urn:uuid:16fdd5fc-e665-48af-99e4-48d603f3e12d"
* entry[=].resource = Inline-Instance-for-compound-heterozygote-1
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:16fdd5fc-e665-48af-99e4-48d603f3e12e"
* entry[=].resource = Inline-Instance-for-compound-heterozygote-2
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:16fdd5fc-e665-48af-99e4-48d603f3e12a"
* entry[=].resource = Inline-Instance-for-compound-heterozygote-3
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab"
* entry[=].resource = performingLab
* entry[=].request.method = #POST
* entry[=].request.url = "Organization"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac"
* entry[=].resource = patient
* entry[=].request.method = #POST
* entry[=].request.url = "Patient"

Instance: Inline-Instance-for-compound-heterozygote-1
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[+].code = $LNC#48004-6 "DNA change (c.HGVS)"
* component[=].valueCodeableConcept = $HGVS#NM_022787.3:c.769G>A "NM_022787.3:c.769G>A"
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "Heterozygous"


Instance: Inline-Instance-for-compound-heterozygote-2
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* code = $LNC#69548-6 "Genetic variant assessment"
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[+].code = $LNC#48004-6 "DNA change (c.HGVS)"
* component[=].valueCodeableConcept = $HGVS#NM_022787.3:c.53A>G "NM_022787.3:c.53A>G"
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "Heterozygous"

Instance: Inline-Instance-for-compound-heterozygote-3
InstanceOf: Genotype
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* code = $LNC#84413-4
* valueCodeableConcept = $CLINVAR#RCV000664188.1 "NM_022787.3(NMNAT1):c.[53A>G];[769G>A] AND Cone-rod dystrophy"
* hasMember[0] = Reference(urn:uuid:16fdd5fc-e665-48af-99e4-48d603f3e12e) "NM_022787.3:c.53A>G"
* hasMember[+] = Reference(urn:uuid:16fdd5fc-e665-48af-99e4-48d603f3e12d) "NM_022787.3:c.769G>A"


---

// File: input/fsh/examples/bundle-CYP2C19.fsh

Instance: bundle-CYP2C19
InstanceOf: Bundle
Description: "Example bundle containing CYP2C19 report and variants"
Usage: #example
* type = #transaction
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe01"
* entry[=].resource = dv-5c7e9e1ca62b5
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe02"
* entry[=].resource = dv-5c7e9e1ca6342
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe03"
* entry[=].resource = dv-5c7e9e1ca63bf
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe04"
* entry[=].resource = dv-5c7e9e1ca643a
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe05"
* entry[=].resource = dv-5c7e9e1ca64b5
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe06"
* entry[=].resource = dv-5c7e9e1ca6531
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe07"
* entry[=].resource = dv-5c7e9e1ca65ac
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe08"
* entry[=].resource = dv-5c7e9e1ca6627
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe09"
* entry[=].resource = dv-5c7e9e1ca66a1
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe10"
* entry[=].resource = dv-5c7e9e1ca671c
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe11"
* entry[=].resource = dv-5c7e9e1ca6797
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe12"
* entry[=].resource = dv-5c7e9e1ca6812
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe13"
* entry[=].resource = dv-5c7e9e1ca688c
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe14"
* entry[=].resource = dv-5c7e9e1ca6922
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe15"
* entry[=].resource = dv-5c7e9e1ca69a3
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe16"
* entry[=].resource = dv-5c7e9e1ca6a1d
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe17"
* entry[=].resource = dv-5c7e9e1ca6a97
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe18"
* entry[=].resource = dv-5c7e9e1ca6b11
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe19"
* entry[=].resource = dv-5c7e9e1ca6b86
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe20"
* entry[=].resource = dv-5c7e9e1ca6c31
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe21"
* entry[=].resource = dv-5c7e9e1ca6ccc
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe22"
* entry[=].resource = dv-5c7e9e1ca6d4b
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe23"
* entry[=].resource = dv-5c7e9e1ca6de3
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe24"
* entry[=].resource = dv-5c7e9e1ca6e86
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe25"
* entry[=].resource = dv-5c7e9e1ca6f11
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe26"
* entry[=].resource = dv-5c7e9e1ca6fa5
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe27"
* entry[=].resource = dv-5c7e9e1ca7025
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe28"
* entry[=].resource = dv-5c7e9e1ca70a2
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe29"
* entry[=].resource = dv-5c7e9e1ca7141
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe30"
* entry[=].resource = dv-5c7e9e1ca71bf
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe31"
* entry[=].resource = dv-5c7e9e1ca724a
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe32"
* entry[=].resource = dv-5c7e9e1ca72e4
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe33"
* entry[=].resource = dv-5c7e9e1ca7377
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe34"
* entry[=].resource = dv-5c7e9e1ca740a
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe35"
* entry[=].resource = dv-5c7e9e1ca7497
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe36"
* entry[=].resource = dv-5c7e9e1ca7513
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe37"
* entry[=].resource = dv-5c7e9e1ca758e
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe38"
* entry[=].resource = dv-5c7e9e1ca7609
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe39"
* entry[=].resource = dv-5c7e9e1ca7684
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe40"
* entry[=].resource = dv-5c7e9e1ca76ff
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe41"
* entry[=].resource = dv-5c7e9e1ca7779
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe42"
* entry[=].resource = dv-5c7e9e1ca77f4
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe43"
* entry[=].resource = dv-5c7e9e1ca786f
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe44"
* entry[=].resource = dv-5c7e9e1ca78eb
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe45"
* entry[=].resource = dv-5c7e9e1ca7967
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe46"
* entry[=].resource = dv-5c7e9e1ca79ef
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe47"
* entry[=].resource = dv-5c7e9e1ca7a79
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe48"
* entry[=].resource = dv-5c7e9e1ca7afb
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe49"
* entry[=].resource = dv-5c7e9e1ca7bcb
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe50"
* entry[=].resource = dv-5c7e9e1ca7c49
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe51"
* entry[=].resource = dv-5c7e9e1ca7cd3
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe52"
* entry[=].resource = dv-5c7e9e1ca7d94
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe53"
* entry[=].resource = dv-5c7e9e1ca7e45
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe54"
* entry[=].resource = dv-5c7e9e1ca7ed6
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe55"
* entry[=].resource = dv-5c7e9e1ca7f69
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe56"
* entry[=].resource = dv-5c7e9e1ca7ffd
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe57"
* entry[=].resource = dv-5c7e9e1ca8085
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe58"
* entry[=].resource = dv-5c7e9e1ca811f
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe59"
* entry[=].resource = dv-5c7e9e1ca81b9
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe60"
* entry[=].resource = dv-5c7e9e1ca8252
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:20ac0aeb-6bd4-4e92-a891-d44a807bfe01"
* entry[=].resource = dv-5c7e9e1ca82e4
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe62"
* entry[=].resource = dv-5c7e9e1ca837c
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe63"
* entry[=].resource = dv-5c7e9e1ca8410
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe64"
* entry[=].resource = dv-5c7e9e1ca8493
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe65"
* entry[=].resource = dv-5c7e9e1ca8514
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe66"
* entry[=].resource = dv-5c7e9e1ca8596
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe67"
* entry[=].resource = dv-5c7e9e1ca8618
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe68"
* entry[=].resource = dv-5c7e9e1ca869c
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe69"
* entry[=].resource = dv-5c7e9e1ca871e
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe70"
* entry[=].resource = dv-5c7e9e1ca879f
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe71"
* entry[=].resource = dv-5c7e9e1ca8820
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe72"
* entry[=].resource = dv-5c7e9e1ca88a5
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe73"
* entry[=].resource = dv-5c7e9e1ca8927
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe74"
* entry[=].resource = dv-5c7e9e1ca89a8
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe75"
* entry[=].resource = sid-5c7e9e1ca8a29
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeaa"
* entry[=].resource = report-CYP2C19
* entry[=].request.method = #POST
* entry[=].request.url = "DiagnosticReport"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab"
* entry[=].resource = performingLab
* entry[=].request.method = #POST
* entry[=].request.url = "Organization"
* entry[+].fullUrl = "urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac"
* entry[=].resource = patient
* entry[=].request.method = #POST
* entry[=].request.url = "Patient"

Instance: patient
InstanceOf: Patient
Usage: #inline
* name[0].use = #official
* name[=].text = "John Storm"
* name[=].family = "Storm"
* name[=].given = "John"
* name[+].use = #nickname
* name[=].text = "Johnny Storm"
* name[=].family = "Storm"
* name[=].given = "Johnny"
* name[+].use = #nickname
* name[=].text = "The Human Torch"
* gender = #male
* birthDate = "1986-12-31"

Instance: performingLab
InstanceOf: Organization
Usage: #inline
* name = "aTypingLab Inc"
* alias = "aTL"
* telecom.system = #phone
* telecom.value = "1-800-555-1234"
* telecom.use = #work
* telecom.rank = 1
* address.use = #work
* address.type = #both
* address.text = "123 Main St, Sometown, ND 99999"
* address.line = "123 Main St"
* address.city = "Sometown"
* address.state = "ND"
* address.postalCode = "99999"
* address.country = "USA"

Instance: report-CYP2C19
InstanceOf: GenomicReport
Usage: #inline
* status = #final
* category[Genetics] = $DIAGNOSTICSERVICE#GE
* code = $LNC#51969-4
  * text = "Genetic analysis report"
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe01)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe02)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe03)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe04)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe05)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe06)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe07)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe08)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe09)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe10)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe11)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe12)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe13)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe14)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe15)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe16)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe17)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe18)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe19)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe20)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe21)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe22)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe23)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe24)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe25)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe26)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe27)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe28)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe29)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe30)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe31)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe32)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe33)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe34)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe35)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe36)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe37)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe38)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe39)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe40)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe41)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe42)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe43)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe44)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe45)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe46)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe47)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe48)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe49)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe50)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe51)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe52)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe53)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe54)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe55)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe56)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe57)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe58)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe59)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe60)
* result[+] = Reference(urn:uuid:20ac0aeb-6bd4-4e92-a891-d44a807bfe01)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe62)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe63)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe64)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe65)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe66)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe67)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe68)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe69)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe70)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe71)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe72)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe73)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe74)
* result[+] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe75)



Instance: dv-5c7e9e1ca62b5
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96448129

Instance: dv-5c7e9e1ca6342
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96448380

Instance: dv-5c7e9e1ca63bf
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "C"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96448994

Instance: dv-5c7e9e1ca643a
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "A"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96454156

Instance: dv-5c7e9e1ca64b5
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "A"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96454241

Instance: dv-5c7e9e1ca6531
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96456161

Instance: dv-5c7e9e1ca65ac
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96462109

Instance: dv-5c7e9e1ca6627
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96464087

Instance: dv-5c7e9e1ca66a1
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "C"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96465938

Instance: dv-5c7e9e1ca671c
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96466078

Instance: dv-5c7e9e1ca6797
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "A"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96466342

Instance: dv-5c7e9e1ca6812
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96466824

Instance: dv-5c7e9e1ca688c
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "T"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "TATA"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96466884

Instance: dv-5c7e9e1ca6922
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "T"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "C"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96468808

Instance: dv-5c7e9e1ca69a3
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96469632

Instance: dv-5c7e9e1ca6a1d
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96469669

Instance: dv-5c7e9e1ca6a97
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "C"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96470954

Instance: dv-5c7e9e1ca6b11
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96475154

Instance: dv-5c7e9e1ca6b86
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "C"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96476401

Instance: dv-5c7e9e1ca6c31
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "A"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96477558

Instance: dv-5c7e9e1ca6ccc
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "A"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96478608

Instance: dv-5c7e9e1ca6d4b
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96480890

Instance: dv-5c7e9e1ca6de3
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "GT"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96484540

Instance: dv-5c7e9e1ca6e86
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "A"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96484599

Instance: dv-5c7e9e1ca6f11
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "T"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96484998

Instance: dv-5c7e9e1ca6fa5
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96485680

Instance: dv-5c7e9e1ca7025
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96486504

Instance: dv-5c7e9e1ca70a2
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "CAA"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96487380

Instance: dv-5c7e9e1ca7141
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96487451

Instance: dv-5c7e9e1ca71bf
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96487749

Instance: dv-5c7e9e1ca724a
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "A"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96488888

Instance: dv-5c7e9e1ca72e4
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "A"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96490629

Instance: dv-5c7e9e1ca7377
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "C"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96491109

Instance: dv-5c7e9e1ca740a
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96491772

Instance: dv-5c7e9e1ca7497
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96493358

Instance: dv-5c7e9e1ca7513
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96493709

Instance: dv-5c7e9e1ca758e
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96495232

Instance: dv-5c7e9e1ca7609
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96499931

Instance: dv-5c7e9e1ca7684
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96500106

Instance: dv-5c7e9e1ca76ff
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96503400

Instance: dv-5c7e9e1ca7779
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96504557

Instance: dv-5c7e9e1ca77f4
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "T"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "TA"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96504737

Instance: dv-5c7e9e1ca786f
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "T"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "C"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96506173

Instance: dv-5c7e9e1ca78eb
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "A"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96509779

Instance: dv-5c7e9e1ca7967
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96511926

Instance: dv-5c7e9e1ca79ef
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "GA"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96512422

Instance: dv-5c7e9e1ca7a79
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "CA"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96513643

Instance: dv-5c7e9e1ca7afb
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96515933

Instance: dv-5c7e9e1ca7bcb
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96516778

Instance: dv-5c7e9e1ca7c49
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96517909

Instance: dv-5c7e9e1ca7cd3
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96517959

Instance: dv-5c7e9e1ca7d94
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96519061

Instance: dv-5c7e9e1ca7e45
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96521422

Instance: dv-5c7e9e1ca7ed6
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96521657

Instance: dv-5c7e9e1ca7f69
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96522989

Instance: dv-5c7e9e1ca7ffd
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "A"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96525536

Instance: dv-5c7e9e1ca8085
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "T"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "TTGTA"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96526061

Instance: dv-5c7e9e1ca811f
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "A"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96526109

Instance: dv-5c7e9e1ca81b9
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "AT"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "A"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96527152

Instance: dv-5c7e9e1ca8252
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "A"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96527334

Instance: dv-5c7e9e1ca82e4
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96527722

Instance: dv-5c7e9e1ca837c
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6705-3 "homozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96529912

Instance: dv-5c7e9e1ca8410
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96530504

Instance: dv-5c7e9e1ca8493
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "T"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "C"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96532327

Instance: dv-5c7e9e1ca8514
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96532545

Instance: dv-5c7e9e1ca8596
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "A"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96532688

Instance: dv-5c7e9e1ca8618
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96533050

Instance: dv-5c7e9e1ca869c
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "G"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "A"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96534584

Instance: dv-5c7e9e1ca871e
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "T"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "C"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96535689

Instance: dv-5c7e9e1ca879f
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "A"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "G"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96535743

Instance: dv-5c7e9e1ca8820
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "ATTC"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "TATT"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96536045

Instance: dv-5c7e9e1ca88a5
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "T"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "A"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96536455

Instance: dv-5c7e9e1ca8927
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96536708

Instance: dv-5c7e9e1ca89a8
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48013-7 "Genomic reference sequence ID"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NC_000010.10
* component[+].code = $LNC#53034-5 "Allelic state"
* component[=].valueCodeableConcept = $LNC#LA6706-1 "heterozygous"
* component[+].code = $LNC#69547-8 "Ref nucleotide"
* component[=].valueString = "C"
* component[+].code = $LNC#69551-0 "Alt allele"
* component[=].valueString = "T"
* component[+].code = $LNC#92822-6 "Genomic coord system"
* component[=].valueCodeableConcept = $LNC#LA30102-0
* component[+].code = $LNC#81254-5
* component[=].valueRange.low.value = 96537137

Instance: sid-5c7e9e1ca8a29
InstanceOf: SequencePhaseRelationship
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#82120-7 "Allelic phase"
* subject = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeac)
* effectiveDateTime = "2019-03-05"
* issued = "2019-03-05T16:04:44+00:00"
* performer = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfeab)
* valueCodeableConcept = SequencePhaseRelationshipCS#Cis "Cis"
* derivedFrom[0] = Reference(urn:uuid:19ac0aeb-6bd4-4e92-a891-d44a807bfe60)
* derivedFrom[+] = Reference(urn:uuid:20ac0aeb-6bd4-4e92-a891-d44a807bfe01)


---

// File: input/fsh/examples/bundle-oncology-diagnostic.fsh

Instance: bundle-oncology-diagnostic
InstanceOf: Bundle
Description: "Example of an oncology report, TMB, variants, and implications."
Usage: #example
* type = #transaction
* entry[0].fullUrl = "urn:uuid:d0b4affa-91d6-46d1-af01-b30d9f16ef6d"
* entry[=].resource = Inline-Instance-for-oncology-diagnostic-1
* entry[=].request.method = #POST
* entry[=].request.url = "Patient"
* entry[+].fullUrl = "urn:uuid:a48256f8-db37-44e0-a0f6-d7af16c7c9ef"
* entry[=].resource = Inline-Instance-for-oncology-diagnostic-2
* entry[=].request.method = #POST
* entry[=].request.url = "Practitioner"
* entry[+].fullUrl = "urn:uuid:a5d6a6a9-4859-480e-85b2-56974fef3b9d"
* entry[=].resource = Inline-Instance-for-oncology-diagnostic-3
* entry[=].request.method = #POST
* entry[=].request.url = "Specimen"
* entry[+].fullUrl = "urn:uuid:40e85eda-4d31-4bd2-a5a0-c39d63f9824f"
* entry[=].resource = Inline-Instance-for-oncology-diagnostic-4
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:16fdd5fc-e665-48af-99e4-48d603f3e12d"
* entry[=].resource = Inline-Instance-for-oncology-diagnostic-5
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:1bf9642d-fd1c-4819-8c5d-44fae4bad524"
* entry[=].resource = Inline-Instance-for-oncology-diagnostic-6
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:ad7a499b-a43b-4cc8-bf46-cac62d9ecae5"
* entry[=].resource = Inline-Instance-for-oncology-diagnostic-7
* entry[=].request.method = #POST
* entry[=].request.url = "DiagnosticReport"

Instance: Inline-Instance-for-oncology-diagnostic-1
InstanceOf: Patient
Usage: #inline
* identifier.value = "1007"
* name.given[0] = "Carrot"
* name.given[+] = "John"
* name.given[+] = "Mr"
* gender = #male
* birthDate = "1962-12-31"
* generalPractitioner = Reference(urn:uuid:a48256f8-db37-44e0-a0f6-d7af16c7c9ef)

Instance: Inline-Instance-for-oncology-diagnostic-2
InstanceOf: Practitioner
Usage: #inline
* identifier.value = "4654765876"
* name.given[0] = "Akerman"
* name.given[+] = "Philip"
* name.given[+] = "Prof"
* address.city = "Castro Valley"
* address.state = "CA"

Instance: Inline-Instance-for-oncology-diagnostic-3
InstanceOf: Specimen
Usage: #inline
* identifier.value = "076e1948-2217-11e9-94d8-12e241dc1f66"
* status = #available
* subject = Reference(urn:uuid:d0b4affa-91d6-46d1-af01-b30d9f16ef6d)
* collection.collector = Reference(urn:uuid:a48256f8-db37-44e0-a0f6-d7af16c7c9ef)

Instance: Inline-Instance-for-oncology-diagnostic-4
InstanceOf: MolecularBiomarker
Usage: #inline
* status = #final
* meta.profile = "http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/molecular-biomarker"
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#94076-7 "Mutations/Megabase [# Ratio] in Tumor"
* subject = Reference(urn:uuid:d0b4affa-91d6-46d1-af01-b30d9f16ef6d)
* effectiveDateTime = "2019-03-05"
* performer = Reference(urn:uuid:a48256f8-db37-44e0-a0f6-d7af16c7c9ef)
* valueQuantity = 25.0 '1/1000000' "Mutations/Megabase"
* specimen = Reference(urn:uuid:a5d6a6a9-4859-480e-85b2-56974fef3b9d)
* component[biomarker-category].code = TbdCodesCS#biomarker-category
* component[biomarker-category].valueCodeableConcept.coding = MolecularBiomarkerOntologyCS#molgen "molecular sequence adjacent category"

Instance: Inline-Instance-for-oncology-diagnostic-5
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:d0b4affa-91d6-46d1-af01-b30d9f16ef6d)
* effectiveDateTime = "2019-03-05"
* performer = Reference(urn:uuid:a48256f8-db37-44e0-a0f6-d7af16c7c9ef)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* method = $LNC#LA26398-0 "Sequencing"
* specimen = Reference(urn:uuid:a5d6a6a9-4859-480e-85b2-56974fef3b9d)
* component[0].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#81290-9 "Genomic DNA change (gHGVS)"
* component[=].valueCodeableConcept = $HGVS#NC_000007.13:g.140453136A>T "NC_000007.13:g.140453136A>T"
* component[+].code = $LNC#81252-9 "Discrete genetic variant"
* component[=].valueCodeableConcept = $CLINVAR#13961 "Clinvar ID 13961"
* component[+].code = $LNC#48005-3 "Amino acid change (pHGVS)"
* component[=].valueCodeableConcept = $HGVS#NP_004324.2:p.Val600Glu "NP_004324.2:p.Val600Glu"
* component[+].code = $LNC#48018-6 "Gene studied ID"
* component[=].valueCodeableConcept = $HGNCID#HGNC:1097 "BRAF"

Instance: Inline-Instance-for-oncology-diagnostic-6
InstanceOf: DiagnosticImplication
Usage: #inline
* extension[workflow-relatedArtifact].valueRelatedArtifact.type = #justification
* extension[workflow-relatedArtifact].valueRelatedArtifact.display = "https://pmkb.weill.cornell.edu/therapies/103"
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = TbdCodesCS#diagnostic-implication "Diagnostic Implication"
* subject = Reference(urn:uuid:d0b4affa-91d6-46d1-af01-b30d9f16ef6d)
* effectiveDateTime = "2019-03-05"
* performer = Reference(urn:uuid:a48256f8-db37-44e0-a0f6-d7af16c7c9ef)
* method = $LNC#LA26811-2 "Computational analysis"
* specimen = Reference(urn:uuid:a5d6a6a9-4859-480e-85b2-56974fef3b9d)
* derivedFrom = Reference(urn:uuid:16fdd5fc-e665-48af-99e4-48d603f3e12d)
* component[0].code = $LNC#53037-8 "Genetic variation clinical significance [Imp]"
* component[=].valueCodeableConcept = $LNC#LA6668-3 "Pathogenic"
* component[+].code = $LNC#93044-6 "Level of Evidence"
* component[=].valueCodeableConcept = $LNC#LA30200-2 "Very strong evidence pathogenic"
* component[+].code = $LNC#81259-4
* component[=].valueCodeableConcept.text = "melanoma"

Instance: Inline-Instance-for-oncology-diagnostic-7
InstanceOf: GenomicReport
Usage: #inline
* status = #final
* category[Genetics] = $DIAGNOSTICSERVICE#GE
* code = $LNC#51969-4
  * text = "Genetic analysis report"
* subject = Reference(urn:uuid:d0b4affa-91d6-46d1-af01-b30d9f16ef6d)
* effectiveDateTime = "2019-03-05"
* performer = Reference(urn:uuid:a48256f8-db37-44e0-a0f6-d7af16c7c9ef)
* specimen = Reference(urn:uuid:a5d6a6a9-4859-480e-85b2-56974fef3b9d)
* result[0] = Reference(urn:uuid:16fdd5fc-e665-48af-99e4-48d603f3e12d) "BRAF V600E mutation observed"
* result[+] = Reference(urn:uuid:1bf9642d-fd1c-4819-8c5d-44fae4bad524) "melanoma implicated"


---

// File: input/fsh/examples/bundle-oncology-report-example.fsh

Instance: bundle-oncology-report-example
InstanceOf: Bundle
Description: "Example oncology bundle including report, variants, and other resources."
Usage: #example
* type = #transaction
* entry[0].fullUrl = "urn:uuid:fc16d84c-8584-4e1d-baae-64e2f95bfe17"
* entry[=].resource = Inline-Instance-for-oncology-report-example-1
* entry[=].request.method = #POST
* entry[=].request.url = "Organization"
* entry[=].request.ifNoneExist = "identifier=http://molit.eu/fhir/genomics/NamingSystem/organization|CEGAT"
* entry[+].fullUrl = "urn:uuid:f7a438e6-f484-453d-97e8-aa4d51008648"
* entry[=].resource = Inline-Instance-for-oncology-report-example-2
* entry[=].request.method = #POST
* entry[=].request.url = "Patient"
* entry[=].request.ifNoneExist = "identifier=http://molit.eu/fhir/genomics/NamingSystem/cegat/patID|11111"
* entry[+].fullUrl = "urn:uuid:a2041c83-b73d-4fc8-9466-4ba4a92da516"
* entry[=].resource = Inline-Instance-for-oncology-report-example-3
* entry[=].request.method = #POST
* entry[=].request.url = "Specimen"
* entry[=].request.ifNoneExist = "identifier=http://molit.eu/fhir/genomics/NamingSystem/cegat/tissueID|UNKNOWN"
* entry[+].fullUrl = "urn:uuid:dac358c3-403a-4dbb-b478-4259aed882ae"
* entry[=].resource = Inline-Instance-for-oncology-report-example-4
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:1d773d66-cec7-44a2-b92a-46d00adeae00"
* entry[=].resource = Inline-Instance-for-oncology-report-example-5
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:842d9ab9-d940-4f0c-adf9-e5c528f5c0e5"
* entry[=].resource = Inline-Instance-for-oncology-report-example-6
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:9a9f9a4a-52e3-4738-bd0b-a25374bbf358"
* entry[=].resource = Inline-Instance-for-oncology-report-example-7
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:58828523-8893-45fc-973b-16290366c5e5"
* entry[=].resource = Inline-Instance-for-oncology-report-example-8
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:2c28b23f-3e9f-4c03-8c8f-0e76bc5dc9c2"
* entry[=].resource = Inline-Instance-for-oncology-report-example-9
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:41bebbe5-e06f-4867-aa22-7c06db69dbd1"
* entry[=].resource = Inline-Instance-for-oncology-report-example-10
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:1642f190-e2c6-4999-8040-b9b2a70618bf"
* entry[=].resource = Inline-Instance-for-oncology-report-example-11
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:c3587931-242f-4129-93f9-be24500c8f29"
* entry[=].resource = Inline-Instance-for-oncology-report-example-12
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:41695fc0-1fd5-4cc8-95e6-82b2848a5cb6"
* entry[=].resource = Inline-Instance-for-oncology-report-example-13
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:58eb14f6-4059-4168-86a9-155ae61d30e2"
* entry[=].resource = Inline-Instance-for-oncology-report-example-14
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:1a71e80f-b044-4a91-80e1-eadbe5a53dca"
* entry[=].resource = Inline-Instance-for-oncology-report-example-15
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "urn:uuid:6a80003f-822d-489e-8286-1f1dcba56dfa"
* entry[=].resource = Inline-Instance-for-oncology-report-example-16
* entry[=].request.method = #POST
* entry[=].request.url = "DiagnosticReport"

Instance: Inline-Instance-for-oncology-report-example-1
InstanceOf: Organization
Usage: #inline
* identifier.system = "http://molit.eu/fhir/genomics/NamingSystem/organization"
* identifier.value = "CEGAT"
* name = "CEGAT"

Instance: Inline-Instance-for-oncology-report-example-10
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:f7a438e6-f484-453d-97e8-aa4d51008648)
* effectiveDateTime = "2023-03-05"
* performer = Reference(urn:uuid:fc16d84c-8584-4e1d-baae-64e2f95bfe17)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* method = $LNC#LA26398-0 "Sequencing"
* specimen.identifier.system = "http://molit.eu/fhir/genomics/NamingSystem/cegat/tissueID"
* specimen.identifier.value = "UNKNOWN"
* component[0].code = $LNC#48002-0 "Genomic source class"
* component[=].valueCodeableConcept = $LNC#LA6684-0 "Somatic"
* component[+].code = $LNC#48018-6 "Gene studied [ID]"
* component[=].valueCodeableConcept = $HGNCID#HGNC:1787 "CDKN2A"
* component[+].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48004-6 "DNA change (c.HGVS)"
* component[=].valueCodeableConcept = $HGVS#NM_000077.4:c.9_32del
* component[+].code = $LNC#48019-4 "DNA change type"
* component[=].valueCodeableConcept = $SEQONT#SO:0000159 "deletion"
* component[+].code = $LNC#48005-3 "Amino acid change (pHGVS)"
* component[=].valueCodeableConcept = $HGVS#NP_000068.1:p.Ala4_Pro11del
* component[+].code = $LNC#51958-7 "Transcript reference sequence [ID]"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NM_000077.4 "NM_000077.4"
* component[+].code = $LNC#69547-8 "Genomic ref allele [ID]"
* component[=].valueString = "AGGCTCCATGCTGCTCCCCGCCGCC"
* component[+].code = $LNC#81258-6 "Sample VAF"
* component[=].valueQuantity = 0.0536 '1' "relative frequency of a particular allele in the specimen"
* component[+].code = $LNC#82121-5 "Allelic read depth"
* component[=].valueQuantity = 112 '1' "reads per base pair"

Instance: Inline-Instance-for-oncology-report-example-11
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:f7a438e6-f484-453d-97e8-aa4d51008648)
* effectiveDateTime = "2023-03-05"
* performer = Reference(urn:uuid:fc16d84c-8584-4e1d-baae-64e2f95bfe17)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* method = $LNC#LA26398-0 "Sequencing"
* specimen.identifier.system = "http://molit.eu/fhir/genomics/NamingSystem/cegat/tissueID"
* specimen.identifier.value = "UNKNOWN"
* component[0].code = $LNC#48002-0 "Genomic source class"
* component[=].valueCodeableConcept = $LNC#LA6684-0 "Somatic"
* component[+].code = $LNC#48018-6 "Gene studied [ID]"
* component[=].valueCodeableConcept = $HGNCID#HGNC:9949 "RECQL4"
* component[+].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48004-6 "DNA change (c.HGVS)"
* component[=].valueCodeableConcept = $HGVS#NM_004260.4:c.2086C>T 
* component[+].code = $LNC#48019-4 "DNA change type"
* component[=].valueCodeableConcept = $SEQONT#SO:1000002 "substitution"
* component[+].code = $LNC#48005-3 "Amino acid change (pHGVS)"
* component[=].valueCodeableConcept = $HGVS#NP_004251.4:p.Arg696Cys 
* component[+].code = $LNC#51958-7 "Transcript reference sequence [ID]"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NM_004260.4 "NM_004260.4"
* component[+].code = $LNC#69547-8 "Genomic ref allele [ID]"
* component[=].valueString = "G"
* component[+].code = $LNC#81258-6 "Sample VAF"
* component[=].valueQuantity = 0.2568 '1' "relative frequency of a particular allele in the specimen"
* component[+].code = $LNC#82121-5 "Allelic read depth"
* component[=].valueQuantity = 148 '1' "reads per base pair"

Instance: Inline-Instance-for-oncology-report-example-12
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:f7a438e6-f484-453d-97e8-aa4d51008648)
* effectiveDateTime = "2023-03-05"
* performer = Reference(urn:uuid:fc16d84c-8584-4e1d-baae-64e2f95bfe17)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* method = $LNC#LA26398-0 "Sequencing"
* specimen.identifier.system = "http://molit.eu/fhir/genomics/NamingSystem/cegat/tissueID"
* specimen.identifier.value = "UNKNOWN"
* component[0].code = $LNC#48002-0 "Genomic source class"
* component[=].valueCodeableConcept = $LNC#LA6684-0 "Somatic"
* component[+].code = $LNC#48018-6 "Gene studied [ID]"
* component[=].valueCodeableConcept = $HGNCID#HGNC:10483 "RYR1"
* component[+].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48004-6 "DNA change (c.HGVS)"
* component[=].valueCodeableConcept = $HGVS#NM_000540.3:c.4964G>A
* component[+].code = $LNC#48019-4 "DNA change type"
* component[=].valueCodeableConcept = $SEQONT#SO:1000002 "substitution"
* component[+].code = $LNC#48005-3 "Amino acid change (pHGVS)"
* component[=].valueCodeableConcept = $HGVS#NP_000531.2:p.Arg1655Leu
* component[+].code = $LNC#51958-7 "Transcript reference sequence [ID]"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NM_000540.2 "NM_000540.3"
* component[+].code = $LNC#69547-8 "Genomic ref allele [ID]"
* component[=].valueString = "G"
* component[+].code = $LNC#81258-6 "Sample VAF"
* component[=].valueQuantity = 0.2151 '1' "relative frequency of a particular allele in the specimen"
* component[+].code = $LNC#82121-5 "Allelic read depth"
* component[=].valueQuantity = 93 '1' "reads per base pair"

Instance: Inline-Instance-for-oncology-report-example-13
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:f7a438e6-f484-453d-97e8-aa4d51008648)
* effectiveDateTime = "2023-03-05"
* performer = Reference(urn:uuid:fc16d84c-8584-4e1d-baae-64e2f95bfe17)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* method = $LNC#LA26398-0 "Sequencing"
* specimen.identifier.system = "http://molit.eu/fhir/genomics/NamingSystem/cegat/tissueID"
* specimen.identifier.value = "UNKNOWN"
* component[0].code = $LNC#48002-0 "Genomic source class"
* component[=].valueCodeableConcept = $LNC#LA6684-0 "Somatic"
* component[+].code = $LNC#48018-6 "Gene studied [ID]"
* component[=].valueCodeableConcept = $HGNCID#HGNC:10519 "SACS"
* component[+].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48004-6 "DNA change (c.HGVS)"
* component[=].valueCodeableConcept = $HGVS#NM_014363.5:c.12118G>A
* component[+].code = $LNC#48019-4 "DNA change type"
* component[=].valueCodeableConcept = $SEQONT#SO:1000002 "substitution"
//KP - unable to validate what the right p. is
//* component[+].code = $LNC#48005-3 "Amino acid change (pHGVS)"
//* component[=].valueCodeableConcept.text = "p.A4040T" //$HGVS#p.A4040T
* component[+].code = $LNC#51958-7 "Transcript reference sequence [ID]"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NM_014363.5 "NM_014363.5"
* component[+].code = $LNC#69547-8 "Genomic ref allele [ID]"
* component[=].valueString = "C"
* component[+].code = $LNC#81258-6 "Sample VAF"
* component[=].valueQuantity = 0.3333 '1' "relative frequency of a particular allele in the specimen"
* component[+].code = $LNC#82121-5 "Allelic read depth"
* component[=].valueQuantity = 60 '1' "reads per base pair"

Instance: Inline-Instance-for-oncology-report-example-14
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:f7a438e6-f484-453d-97e8-aa4d51008648)
* effectiveDateTime = "2023-03-05"
* performer = Reference(urn:uuid:fc16d84c-8584-4e1d-baae-64e2f95bfe17)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* method = $LNC#LA26398-0 "Sequencing"
* specimen.identifier.system = "http://molit.eu/fhir/genomics/NamingSystem/cegat/tissueID"
* specimen.identifier.value = "UNKNOWN"
* component[0].code = $LNC#48002-0 "Genomic source class"
* component[=].valueCodeableConcept = $LNC#LA6684-0 "Somatic"
* component[+].code = $LNC#48018-6 "Gene studied [ID]"
* component[=].valueCodeableConcept = $HGNCID#HGNC:11086 "SLIT2"
* component[+].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48004-6 "DNA change (c.HGVS)"
* component[=].valueCodeableConcept = $HGVS#NM_004787.3:c.1290C>A
* component[+].code = $LNC#48019-4 "DNA change type"
* component[=].valueCodeableConcept = $SEQONT#SO:1000002 "substitution"
//kp - unable to validate p.
//* component[+].code = $LNC#48005-3 "Amino acid change (pHGVS)"
//* component[=].valueCodeableConcept.text = "p.N430K" //$HGVS#p.N430K
* component[+].code = $LNC#51958-7 "Transcript reference sequence [ID]"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NM_004787.3 "NM_004787.3"
* component[+].code = $LNC#69547-8 "Genomic ref allele [ID]"
* component[=].valueString = "C"
* component[+].code = $LNC#81258-6 "Sample VAF"
* component[=].valueQuantity = 0.2642 '1' "relative frequency of a particular allele in the specimen"
* component[+].code = $LNC#82121-5 "Allelic read depth"
* component[=].valueQuantity = 53 '1' "reads per base pair"

Instance: Inline-Instance-for-oncology-report-example-15
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:f7a438e6-f484-453d-97e8-aa4d51008648)
* effectiveDateTime = "2023-03-05"
* performer = Reference(urn:uuid:fc16d84c-8584-4e1d-baae-64e2f95bfe17)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* method = $LNC#LA26398-0 "Sequencing"
* specimen.identifier.system = "http://molit.eu/fhir/genomics/NamingSystem/cegat/tissueID"
* specimen.identifier.value = "UNKNOWN"
* component[0].code = $LNC#48002-0 "Genomic source class"
* component[=].valueCodeableConcept = $LNC#LA6684-0 "Somatic"
* component[+].code = $LNC#48018-6 "Gene studied [ID]"
* component[=].valueCodeableConcept = $HGNCID#HGNC:11100 "SMARCA4"
* component[+].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48004-6 "DNA change (c.HGVS)"
* component[=].valueCodeableConcept = $HGVS#NM_003072.5:c.2372C>T
* component[+].code = $LNC#48019-4 "DNA change type"
* component[=].valueCodeableConcept = $SEQONT#SO:1000002 "substitution"
* component[+].code = $LNC#48005-3 "Amino acid change (pHGVS)"
* component[=].valueCodeableConcept = $HGVS#NP_003063.2:p.Ala791Val
* component[+].code = $LNC#51958-7 "Transcript reference sequence [ID]"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NM_003072.5 "NM_003072.5"
* component[+].code = $LNC#69547-8 "Genomic ref allele [ID]"
* component[=].valueString = "C"
* component[+].code = $LNC#81258-6 "Sample VAF"
* component[=].valueQuantity = 0.1938 '1' "relative frequency of a particular allele in the specimen"
* component[+].code = $LNC#82121-5 "Allelic read depth"
* component[=].valueQuantity = 160 '1' "reads per base pair"

Instance: Inline-Instance-for-oncology-report-example-16
InstanceOf: GenomicReport
Usage: #inline
* identifier.system = "http://molit.eu/fhir/genomics/NamingSystem/cegat/reportID"
* identifier.value = "42867"
* status = #final
* code = $LNC#51969-4 "Genetic analysis report"
* subject = Reference(urn:uuid:f7a438e6-f484-453d-97e8-aa4d51008648)
* issued = "2019-09-15T11:35:05.722-04:00"
* performer = Reference(urn:uuid:fc16d84c-8584-4e1d-baae-64e2f95bfe17)
* specimen = Reference(urn:uuid:a2041c83-b73d-4fc8-9466-4ba4a92da516)
* result[0] = Reference(urn:uuid:dac358c3-403a-4dbb-b478-4259aed882ae)
* result[+] = Reference(urn:uuid:1d773d66-cec7-44a2-b92a-46d00adeae00)
* result[+] = Reference(urn:uuid:842d9ab9-d940-4f0c-adf9-e5c528f5c0e5)
* result[+] = Reference(urn:uuid:9a9f9a4a-52e3-4738-bd0b-a25374bbf358)
* result[+] = Reference(urn:uuid:58828523-8893-45fc-973b-16290366c5e5)
* result[+] = Reference(urn:uuid:2c28b23f-3e9f-4c03-8c8f-0e76bc5dc9c2)
* result[+] = Reference(urn:uuid:41bebbe5-e06f-4867-aa22-7c06db69dbd1)
* result[+] = Reference(urn:uuid:1642f190-e2c6-4999-8040-b9b2a70618bf)
* result[+] = Reference(urn:uuid:c3587931-242f-4129-93f9-be24500c8f29)
* result[+] = Reference(urn:uuid:41695fc0-1fd5-4cc8-95e6-82b2848a5cb6)
* result[+] = Reference(urn:uuid:58eb14f6-4059-4168-86a9-155ae61d30e2)
* result[+] = Reference(urn:uuid:1a71e80f-b044-4a91-80e1-eadbe5a53dca)

Instance: Inline-Instance-for-oncology-report-example-2
InstanceOf: Patient
Usage: #inline
* identifier.system = "http://molit.eu/fhir/genomics/NamingSystem/cegat/patID"
* identifier.value = "11111"

Instance: Inline-Instance-for-oncology-report-example-3
InstanceOf: Specimen
Usage: #inline
* identifier.system = "http://molit.eu/fhir/genomics/NamingSystem/cegat/tissueID"
* identifier.value = "UNKNOWN"
* type = $SPECIMENTYPE#TUMOR "Tumor"
* subject = Reference(urn:uuid:f7a438e6-f484-453d-97e8-aa4d51008648)
* collection.method.text = "Biopsy"
* collection.bodySite = $ICD10CM#C16.0

Instance: Inline-Instance-for-oncology-report-example-4
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:f7a438e6-f484-453d-97e8-aa4d51008648)
* effectiveDateTime = "2023-03-05"
* performer = Reference(urn:uuid:fc16d84c-8584-4e1d-baae-64e2f95bfe17)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* method = $LNC#LA26398-0 "Sequencing"
* specimen.identifier.system = "http://molit.eu/fhir/genomics/NamingSystem/cegat/tissueID"
* specimen.identifier.value = "UNKNOWN"
* component[0].code = $LNC#48002-0 "Genomic source class"
* component[=].valueCodeableConcept = $LNC#LA6684-0 "Somatic"
* component[+].code = $LNC#48018-6 "Gene studied [ID]"
* component[=].valueCodeableConcept = $HGNCID#HGNC:8975 "PIK3CA"
* component[+].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48004-6 "DNA change (c.HGVS)"
* component[=].valueCodeableConcept = $HGVS#NM_006218.4:c.3140A>G "NM_006218.4:c.3140A>G"
* component[+].code = $LNC#48019-4 "DNA change type"
* component[=].valueCodeableConcept = $SEQONT#SO:1000002 "substitution"
* component[+].code = $LNC#48005-3 "Amino acid change (pHGVS)"
* component[=].valueCodeableConcept = $HGVS#NP_006209.2:p.His1047Arg "NP_006209.2:p.His1047Arg"
* component[+].code = $LNC#51958-7 "Transcript reference sequence [ID]"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NM_006218.3 "NM_006218.4"
* component[+].code = $LNC#69547-8 "Genomic ref allele [ID]"
* component[=].valueString = "A"
* component[+].code = $LNC#81258-6 "Sample VAF"
* component[=].valueQuantity = 0.2188 '1' "relative frequency of a particular allele in the specimen"
* component[+].code = $LNC#82121-5 "Allelic read depth"
* component[=].valueQuantity = 64 '1' "reads per base pair"

Instance: Inline-Instance-for-oncology-report-example-5
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:f7a438e6-f484-453d-97e8-aa4d51008648)
* effectiveDateTime = "2023-03-05"
* performer = Reference(urn:uuid:fc16d84c-8584-4e1d-baae-64e2f95bfe17)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* method = $LNC#LA26398-0 "Sequencing"
* specimen.identifier.system = "http://molit.eu/fhir/genomics/NamingSystem/cegat/tissueID"
* specimen.identifier.value = "UNKNOWN"
* component[0].code = $LNC#48002-0 "Genomic source class"
* component[=].valueCodeableConcept = $LNC#LA6684-0 "Somatic"
* component[+].code = $LNC#48018-6 "Gene studied [ID]"
* component[=].valueCodeableConcept = $HGNCID#HGNC:7989 "NRAS"
* component[+].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48004-6 "DNA change (c.HGVS)"
* component[=].valueCodeableConcept = $HGVS#NM_002524.4:c.34G>T "NM_002524.4:c.34G>T"
* component[+].code = $LNC#48019-4 "DNA change type"
* component[=].valueCodeableConcept = $SEQONT#SO:1000002 "substitution"
//kp - unable to validate p.
// * component[+].code = $LNC#48005-3 "Amino acid change (pHGVS)"
// * component[=].valueCodeableConcept.text = "p.G12C" //$HGVS#p.G12C
* component[+].code = $LNC#51958-7 "Transcript reference sequence [ID]"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NM_002524.4 "NM_002524.4"
* component[+].code = $LNC#69547-8 "Genomic ref allele [ID]"
* component[=].valueString = "C"
* component[+].code = $LNC#81258-6 "Sample VAF"
* component[=].valueQuantity = 0.1793 '1' "relative frequency of a particular allele in the specimen"
* component[+].code = $LNC#82121-5 "Allelic read depth"
* component[=].valueQuantity = 145 '1' "reads per base pair"

Instance: Inline-Instance-for-oncology-report-example-6
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:f7a438e6-f484-453d-97e8-aa4d51008648)
* effectiveDateTime = "2023-03-05"
* performer = Reference(urn:uuid:fc16d84c-8584-4e1d-baae-64e2f95bfe17)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* method = $LNC#LA26398-0 "Sequencing"
* specimen.identifier.system = "http://molit.eu/fhir/genomics/NamingSystem/cegat/tissueID"
* specimen.identifier.value = "UNKNOWN"
* component[0].code = $LNC#48002-0 "Genomic source class"
* component[=].valueCodeableConcept = $LNC#LA6684-0 "Somatic"
* component[+].code = $LNC#48018-6 "Gene studied [ID]"
* component[=].valueCodeableConcept = $HGNCID#HGNC:16712 "FBXW7"
* component[+].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48004-6 "DNA change (c.HGVS)"
* component[=].valueCodeableConcept = $HGVS#NM_001349798.2:c.1394G>A "NM_001349798.2:c.1394G>A"
* component[+].code = $LNC#48019-4 "DNA change type"
* component[=].valueCodeableConcept = $SEQONT#SO:1000002 "substitution"
* component[+].code = $LNC#48005-3 "Amino acid change (pHGVS)"
* component[=].valueCodeableConcept = $HGVS#NP_001336727.1:p.Arg465His "NP_001336727.1:p.Arg465His"
* component[+].code = $LNC#51958-7 "Transcript reference sequence [ID]"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NM_001349798.2 "NM_001349798.2"
* component[+].code = $LNC#69547-8 "Genomic ref allele [ID]"
* component[=].valueString = "C"
* component[+].code = $LNC#81258-6 "Sample VAF"
* component[=].valueQuantity = 0.1053 '1' "relative frequency of a particular allele in the specimen"
* component[+].code = $LNC#82121-5 "Allelic read depth"
* component[=].valueQuantity = 57 '1' "reads per base pair"

Instance: Inline-Instance-for-oncology-report-example-7
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:f7a438e6-f484-453d-97e8-aa4d51008648)
* effectiveDateTime = "2023-03-05"
* performer = Reference(urn:uuid:fc16d84c-8584-4e1d-baae-64e2f95bfe17)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* method = $LNC#LA26398-0 "Sequencing"
* specimen.identifier.system = "http://molit.eu/fhir/genomics/NamingSystem/cegat/tissueID"
* specimen.identifier.value = "UNKNOWN"
* component[0].code = $LNC#48002-0 "Genomic source class"
* component[=].valueCodeableConcept = $LNC#LA6684-0 "Somatic"
* component[+].code = $LNC#48018-6 "Gene studied [ID]"
* component[=].valueCodeableConcept = $HGNCID#HGNC:7133 "KMT2D"
* component[+].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48004-6 "DNA change (c.HGVS)"
* component[=].valueCodeableConcept = $HGVS#NM_003482.3:c.7900_7901delCA "NM_003482.3:c.7900_7901delCA"
* component[+].code = $LNC#48019-4 "DNA change type"
* component[=].valueCodeableConcept = $SEQONT#SO:0000159 "deletion"
// kp unable to validation p.
// * component[+].code = $LNC#48005-3 "Amino acid change (pHGVS)"
// * component[=].valueCodeableConcept.text = "p.Q2634Afs*20" //$HGVS#p.Q2634Afs*20
* component[+].code = $LNC#51958-7 "Transcript reference sequence [ID]"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NM_003482.3 "NM_003482.3"
* component[+].code = $LNC#69547-8 "Genomic ref allele [ID]"
* component[=].valueString = "CTG"
* component[+].code = $LNC#81258-6 "Sample VAF"
* component[=].valueQuantity = 0.188 '1' "relative frequency of a particular allele in the specimen"
* component[+].code = $LNC#82121-5 "Allelic read depth"
* component[=].valueQuantity = 117 '1' "reads per base pair"

Instance: Inline-Instance-for-oncology-report-example-8
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:f7a438e6-f484-453d-97e8-aa4d51008648)
* effectiveDateTime = "2023-03-05"
* performer = Reference(urn:uuid:fc16d84c-8584-4e1d-baae-64e2f95bfe17)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* method = $LNC#LA26398-0 "Sequencing"
* specimen.identifier.system = "http://molit.eu/fhir/genomics/NamingSystem/cegat/tissueID"
* specimen.identifier.value = "UNKNOWN"
* component[0].code = $LNC#48002-0 "Genomic source class"
* component[=].valueCodeableConcept = $LNC#LA6684-0 "Somatic"
* component[+].code = $LNC#48018-6 "Gene studied [ID]"
* component[=].valueCodeableConcept = $HGNCID#HGNC:8975 "PIK3CA"
* component[+].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48004-6 "DNA change (c.HGVS)"
* component[=].valueCodeableConcept = $HGVS#NM_006218.3:c.333G>T "NM_006218.3:c.333G>T"
* component[+].code = $LNC#48019-4 "DNA change type"
* component[=].valueCodeableConcept = $SEQONT#SO:1000002 "substitution"
// kp unable to validation p.
// * component[+].code = $LNC#48005-3 "Amino acid change (pHGVS)"
// * component[=].valueCodeableConcept.text = "p.K111N" //$HGVS#p.K111N
* component[+].code = $LNC#51958-7 "Transcript reference sequence [ID]"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NM_006218.3 "NM_006218.3"
* component[+].code = $LNC#69547-8 "Genomic ref allele [ID]"
* component[=].valueString = "G"
* component[+].code = $LNC#81258-6 "Sample VAF"
* component[=].valueQuantity = 0.1471 '1' "relative frequency of a particular allele in the specimen"
* component[+].code = $LNC#82121-5 "Allelic read depth"
* component[=].valueQuantity = 68 '1' "reads per base pair"

Instance: Inline-Instance-for-oncology-report-example-9
InstanceOf: Variant
Usage: #inline
* status = #final
* category[labCategory] = $OBSCAT#laboratory
* category[geCategory] = $DIAGNOSTICSERVICE#GE
* code = $LNC#69548-6 "Genetic variant assessment"
* subject = Reference(urn:uuid:f7a438e6-f484-453d-97e8-aa4d51008648)
* effectiveDateTime = "2023-03-05"
* performer = Reference(urn:uuid:fc16d84c-8584-4e1d-baae-64e2f95bfe17)
* valueCodeableConcept = $LNC#LA9633-4 "Present"
* method = $LNC#LA26398-0 "Sequencing"
* specimen.identifier.system = "http://molit.eu/fhir/genomics/NamingSystem/cegat/tissueID"
* specimen.identifier.value = "UNKNOWN"
* component[0].code = $LNC#48002-0 "Genomic source class"
* component[=].valueCodeableConcept = $LNC#LA6684-0 "Somatic"
* component[+].code = $LNC#48018-6 "Gene studied [ID]"
* component[=].valueCodeableConcept = $HGNCID#HGNC:6126 "IRS2"
* component[+].code = $LNC#62374-4 "Human reference sequence assembly version"
* component[=].valueCodeableConcept = $LNC#LA14029-5 "GRCh37"
* component[+].code = $LNC#48004-6 "DNA change (c.HGVS)"
* component[=].valueCodeableConcept = $HGVS#NM_003749.2:c.3960C>T "NM_003749.2:c.3960C>T"
* component[+].code = $LNC#48019-4 "DNA change type"
* component[=].valueCodeableConcept = $SEQONT#SO:1000002 "substitution"
//kp unable to validate p.
// * component[+].code = $LNC#48005-3 "Amino acid change (pHGVS)"
// * component[=].valueCodeableConcept.text = "p.=" //$HGVS#p.=
* component[+].code = $LNC#51958-7 "Transcript reference sequence [ID]"
* component[=].valueCodeableConcept = $NCBIREFSEQ#NM_003749.2 "NM_003749.2"
* component[+].code = $LNC#69547-8 "Genomic ref allele [ID]"
* component[=].valueString = "G"
* component[+].code = $LNC#81258-6 "Sample VAF"
* component[=].valueQuantity = 0.1343 '1' "relative frequency of a particular allele in the specimen"
* component[+].code = $LNC#82121-5 "Allelic read depth"
* component[=].valueQuantity = 134 '1' "reads per base pair"


---

