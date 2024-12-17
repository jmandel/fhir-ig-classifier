# ITI.mXDE: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The Mobile Cross-Enterprise Document Data Element Extraction (mXDE) IG addresses the challenge of accessing and utilizing fine-grained data elements extracted from coarse-grained clinical documents shared within a health information exchange. It bridges the gap between document-level and data element-level granularity, enabling efficient access to both.
-   **Key clinical/business problems it solves:** mXDE facilitates clinical decision support by allowing clinicians to query for specific data elements (e.g., vital signs, medications) across multiple documents and then trace back to the source documents for contextual information. It improves data usability for consuming applications that may not be able to process or find the information they need within the structure of a given document.
-   **Intended scope and boundaries:** mXDE focuses on defining how data elements are extracted from shared structured documents and linked back to their source documents. It leverages existing IHE profiles like [QEDm](https://profiles.ihe.net/PCC/QEDm/index.html) for querying data elements and [XDS](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html), [MHD](https://profiles.ihe.net/ITI/MHD/index.html) for document sharing. The mapping of document content to data elements is out of scope and left to specific deployments.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `IHE.ITI.mXDE.Provenance`: A profile on the FHIR Provenance resource to link extracted data elements (FHIR Resources) to their source documents (DocumentReference).
-   **Notable operations and interactions:**
    -   Uses QEDm's `PCC-44` transaction to query for data elements and request associated Provenance.
    -   Leverages document sharing transactions (e.g., XDS, MHD) to retrieve source documents based on Provenance information.
-   **Key terminology and value sets:**
    -   `urn:ihe:iti:mxde:2023:document-provenance-policy`: A policy value indicating mXDE-produced provenance.
    -   `http://hl7.org/fhir/w3c-provenance-activity-type#Derivation`: Activity code indicating derivation of data elements from documents.
    -   `http://terminology.hl7.org/CodeSystem/provenance-participant-type#assembler`: Agent type for the software/service performing the extraction.
-   **Significant patterns and constraints:**
    -   Requires the `Data Element Extractor` to be grouped with a QEDm `Clinical Data Source` and a Content Consumer (e.g., XDS Document Consumer).
    -   Requires the `Clinical Data Consumer` to be grouped with a QEDm `Clinical Data Consumer` (with Document Provenance Option) and a Content Consumer.
    -   Mandates the use of the `IHE.ITI.mXDE.Provenance` profile to link data elements to source documents.
    -   Specifies that the Provenance `target` shall point to all data elements extracted from a document.
    -   Defines the `agent` in Provenance to represent the software/service performing the extraction, with type `assembler`.
    -   Requires the `entity` in Provenance to point to the `DocumentReference` of the source document.

## Technical Essence

The mXDE IG enables fine-grained data access from document-based exchanges by mandating a specific Provenance pattern. A `Data Element Extractor` actor, triggered by document availability or QEDm queries, retrieves documents from a grouped Content Consumer, decomposes them into FHIR Resources, and updates or creates these resources in a grouped QEDm `Clinical Data Source`. Crucially, for each document processed, it generates an `IHE.ITI.mXDE.Provenance` resource. This Provenance links all extracted resources via its `target` field, indicates the extraction activity as `Derivation`, identifies the extracting software/service as an `assembler` type `agent`, and points to the source `DocumentReference` via its `entity` field with a role of `source`. A `Clinical Data Consumer`, grouped with a QEDm `Clinical Data Consumer` and a Content Consumer, can then query for data elements using QEDm's `PCC-44`, receive the associated `IHE.ITI.mXDE.Provenance`, and use the `entity.what` reference to retrieve the original document via the Content Consumer, thus bridging data element and document-level access.

## Implementation Approach

-   **Critical workflows and interactions:**
    1.  Documents are published to a document sharing infrastructure (XDS, XCA, MHD).
    2.  The `Data Element Extractor` is triggered (e.g., by polling, QEDm query, document publication).
    3.  The `Data Element Extractor` retrieves documents, extracts data elements, and updates/creates FHIR Resources in the QEDm `Clinical Data Source`.
    4.  The `Data Element Extractor` creates an `IHE.ITI.mXDE.Provenance` resource for each document, linking extracted resources and the source document.
    5.  The `Clinical Data Consumer` queries for data elements using QEDm `PCC-44`, requesting associated Provenance.
    6.  The `Clinical Data Consumer` receives data elements and `IHE.ITI.mXDE.Provenance`.
    7.  The `Clinical Data Consumer` uses the Provenance to identify and retrieve source documents via the grouped Content Consumer.
-   **Important requirements and guardrails:**
    -   Strict adherence to the `IHE.ITI.mXDE.Provenance` profile.
    -   Proper grouping of actors as specified in the IG.
    -   Implementation of appropriate triggers for the `Data Element Extractor`.
    -   Consideration of security and access control, especially regarding the broad access needed by the `Data Element Extractor`.
-   **Notable design choices and patterns:**
    -   Leveraging Provenance to link data elements and documents.
    -   Using QEDm for data element queries and MHD/XDS for document access.
    -   Defining specific deployment models for different architectural scenarios.

## Ecosystem Context

-   **Target systems and users:**
    -   **Systems:** EHRs, PHRs, clinical data repositories, health information exchanges.
    -   **Users:** Clinicians, patients, researchers, applications consuming health data.
-   **Relationship to other standards/IGs:**
    -   **Builds upon:** QEDm, MHD, XDS, XCA, ATNA, IUA, BPPC, APPC.
    -   **Relates to:** Other IHE profiles for document sharing and data access.
-   **Relevant jurisdictions or programs:**
    -   Potentially applicable to any jurisdiction or program implementing document-based health information exchange.
-   **Primary use cases and scenarios:**
    -   Accessing a patient's current medications extracted from multiple documents.
    -   Retrieving a patient's vital signs history and tracing back to the source documents for context.
    -   Supporting clinical decision support by providing both fine-grained data and document-level context.
    -   Enabling patient access to their health information through a PHR application.
    -   Facilitating research by providing access to structured data elements across a population.
