# ITI.sIPS: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The primary challenge addressed is the standardized exchange of the HL7 International Patient Summary (IPS) using established IHE Document Sharing infrastructures. It bridges the gap between the IPS content specification and the mechanisms for sharing it across different systems and settings.
-   **Key clinical/business problems it solves:** It facilitates the availability of a patient's essential health information for unplanned care, especially in cross-border scenarios. By enabling the exchange of IPS documents, it improves care coordination, reduces redundant tests, and enhances patient safety when individuals seek care outside their usual healthcare environment.
-   **Intended scope and boundaries:** The scope is limited to defining how the HL7 FHIR IPS is communicated using IHE Document Sharing profiles (XDS, XCA, XDM, XDR, MHD, MHDS). It does not modify the IPS specification itself but provides the necessary mappings and guidance for its exchange. The focus is on the FHIR version of IPS, not the CDA version.

## Technical Foundation

-   **Core profiles and extensions:**
    -   Relies on the [HL7 FHIR IPS Implementation Guide](http://hl7.org/fhir/uv/ips) for the content definition.
    -   Leverages IHE MHD profiles for DocumentReference.
-   **Notable operations and interactions:**
    -   Publishing an IPS document.
    -   Making an IPS document available on-demand.
    -   Retrieving an IPS document.
    -   Pushing an IPS document to a recipient.
    -   Utilizes standard Document Sharing transactions (e.g., Provide and Register, Registry Stored Query, Retrieve Document Set).
-   **Key terminology and value sets:**
    -   Primarily uses terminology and value sets defined in the HL7 FHIR IPS IG.
    -   References LOINC for document type codes (e.g., 60591-5 "Patient summary Document").
    -   Uses SNOMED CT for facility and practice setting codes.
-   **Significant patterns and constraints:**
    -   Defines the mapping between FHIR Composition resource elements and XDS DocumentEntry/MHD DocumentReference metadata elements.
    -   Specifies the use of the canonical URI `{{site.data.fhir.hl7ips}}/StructureDefinition/Bundle-uv-ips` as the `formatCode` for IPS documents.
    -   Addresses the handling of multiple mime-type encodings (JSON, XML) by registering multiple Document Entries and indicating transform relationships.
    -   Provides guidance on representing On-Demand IPS documents in Document Sharing metadata.

## Technical Essence

This IG enables the exchange of HL7 FHIR IPS documents via IHE Document Sharing by defining a precise mapping between the IPS Composition resource and Document Sharing metadata. Content Creators serialize the IPS as a FHIR Bundle with a Composition as the first entry, adhering to the IPS profiles. This Bundle is then registered in Document Sharing infrastructure (e.g., XDS, MHD) using a DocumentReference resource. The DocumentReference's `type` and `category` are set to LOINC code 60591-5, `formatCode` is the IPS Bundle profile's canonical URI, and `content.attachment.url` points to the retrievable IPS Bundle. Metadata fields like `author`, `date`, `securityLabel`, and `context` are populated from corresponding elements in the IPS Composition. For multiple mime-types, separate DocumentReference instances are created, linked via `relatesTo` with a `transforms` code. On-Demand IPS availability is indicated by a DocumentReference with no `size` and `hash`, and its creation may trigger a new "snapshot" DocumentReference. The IG mandates conformance to both the HL7 FHIR IPS specification for content and IHE Document Sharing profiles for exchange.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Content Creator creates an IPS document conforming to the HL7 FHIR IPS specification.
    -   Content Creator maps the IPS Composition to Document Sharing metadata (DocumentReference).
    -   Content Creator publishes the IPS document and metadata using a Document Sharing transaction (e.g., Provide and Register Document Set).
    -   Content Consumer discovers IPS documents through Document Sharing queries (e.g., Registry Stored Query).
    -   Content Consumer retrieves IPS documents using Document Sharing transactions (e.g., Retrieve Document Set).
    -   For On-Demand, Content Consumer requests document creation, and the system may use the IPS `$summary` operation.
-   **Important requirements and guardrails:**
    -   Strict adherence to the HL7 FHIR IPS specification for document content.
    -   Accurate mapping of IPS Composition elements to Document Sharing metadata.
    -   Proper handling of On-Demand document requests and creation.
    -   Support for both XML and JSON encodings of the IPS document.
-   **Notable design choices and patterns:**
    -   Leveraging existing Document Sharing infrastructure for IPS exchange.
    -   Using the `formatCode` to clearly identify the document as an IPS.
    -   Employing the `relatesTo` element to link different encodings of the same IPS document.
    -   Utilizing the On-Demand mechanism to provide access to the most current IPS data.

## Ecosystem Context

-   **Target systems and users:**
    -   EHR systems, HIE platforms, personal health record systems, and other health IT systems involved in sharing patient summaries.
    -   Clinicians, patients, and other stakeholders who need access to essential health information, particularly in unplanned care scenarios.
-   **Relationship to other standards/IGs:**
    -   Builds upon the HL7 FHIR IPS IG and IHE Document Sharing profiles (XDS, XCA, XDM, XDR, MHD, MHDS).
    -   Complements other IHE profiles related to patient identity management, provider directories, and security/privacy.
-   **Relevant jurisdictions or programs:**
    -   Applicable globally, particularly relevant for initiatives promoting cross-border health information exchange.
    -   Aligns with efforts to standardize patient summaries internationally (e.g., ISO 27269, EN 17269).
-   **Primary use cases and scenarios:**
    -   Sharing a patient's summary with a healthcare provider in a different country during travel.
    -   Providing a patient's essential health information to an emergency department in an unfamiliar location.
    -   Enabling access to a patient's summary across different healthcare organizations within a region or country.
    -   Supporting the exchange of patient summaries between different HIE networks.
