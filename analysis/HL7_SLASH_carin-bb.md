# carin-bb: Analysis

## Core Purpose & Scope

The CARIN Consumer Directed Payer Data Exchange Implementation Guide (CARIN IG for Blue Button®) addresses the primary interoperability challenge of enabling consumers to access their health insurance claims and encounter information via third-party applications. It solves the key business problem of empowering patients with their financial healthcare data, meeting requirements outlined in the CMS Interoperability and Patient Access Final Rule. The IG's scope is focused on defining a set of FHIR R4 resources, primarily centered around the ExplanationOfBenefit (EOB) resource, that payers can expose through a secure API to enable consumer-directed exchange of claims and encounter information. It is bounded by the use case of patient-driven data access and does not cover provider-facing or payer-to-payer data exchange scenarios.

## Technical Foundation

The technical foundation of the CARIN IG for Blue Button® is built upon FHIR R4, leveraging core profiles and extensions to model claims data.

**Core Profiles:**

-   **ExplanationOfBenefit:** Five profiles are defined, including an abstract base profile and four concrete profiles for Inpatient Institutional, Outpatient Institutional, Professional Non-Clinician, Pharmacy, and Oral claims. These profiles constrain the base FHIR ExplanationOfBenefit resource to reflect the specific data elements and structures found in different claim types.
-   **Coverage:** Based on US Core Coverage, it represents insurance coverage information.
-   **Patient:** Based on US Core Patient, it represents the patient/member associated with the claim.
-   **Organization:** Based on US Core Organization, it represents payer and provider organizations.
-   **Practitioner:** Based on US Core Practitioner, it represents individual healthcare providers.
-   **RelatedPerson:** Based on US Core RelatedPerson, it represents individuals related to the patient, such as a guardian or emergency contact.

**Notable Operations and Interactions:**

-   The IG specifies a RESTful API based on the FHIR standard, primarily using the `GET` operation to retrieve EOB and related resources.
-   Search parameters are defined for key fields like `_id`, `_lastUpdated`, `identifier`, `patient`, `type`, `service-date`, `service-start-date`, and `billable-period-start`.
-   Support for the `_include` parameter is mandated to allow retrieval of related resources (e.g., `ExplanationOfBenefit:patient`, `ExplanationOfBenefit:provider`).

**Key Terminology and Value Sets:**

-   **Code Systems:** The IG utilizes numerous code systems, including:
    -   Industry-standard code systems like CPT, HCPCS, ICD-10-CM, ICD-10-PCS, NDC, NUBC revenue codes, and ADA CDT.
    -   Locally defined code systems for specific concepts like adjudication categories, claim types, and supporting information types.
-   **Value Sets:** Value sets are defined to constrain the allowed values for specific data elements, ensuring consistency and interoperability.

**Significant Patterns and Constraints:**

-   The IG defines a set of "Must Support" elements within each profile, indicating data elements that payers are required to populate if they have the data.
-   Specific invariants are defined to enforce data integrity and consistency rules, such as requiring specific code systems for certain fields or ensuring relationships between different data elements.
-   The IG mandates the use of the SMART App Launch Framework's standalone launch sequence for authentication and authorization.

## Technical Essence

The CARIN IG for Blue Button® defines a FHIR R4 API for consumer access to claims data, centered around five ExplanationOfBenefit profiles: an abstract base and four concrete profiles for Inpatient Institutional, Outpatient Institutional, Professional Non-Clinician, Pharmacy, and Oral claims. Each EOB profile mandates a `type` from the `claim-type` codesystem and includes `supportingInfo` slices categorized using a custom `C4BBSupportingInfoType` codesystem, covering details like admission period, type of bill, and facility.  Diagnosis and procedure codes are constrained to specific code systems (ICD-10-CM, ICD-10-PCS, CPT, HCPCS). Adjudication details are captured using slices based on a custom `C4BBAdjudicationDiscriminator` codesystem, with specific codes for billing/rendering network status and benefit payment status. The `item` component details individual services, with `productOrService` constrained to relevant procedure code systems and `adjudication` providing line-level financial details. The `total` component aggregates claim-level amounts. The IG mandates support for retrieving related resources like Patient, Coverage, Organization, and Practitioner via `_include`.  Authentication and authorization follow the SMART App Launch framework, requiring specific scopes for accessing EOB and related resources. Payers must populate "Must Support" elements and adhere to defined invariants, ensuring data consistency and completeness.

## Implementation Approach

The IG is intended to be implemented by payers exposing a FHIR API that conforms to the defined profiles and supports the specified search parameters and operations.

**Critical Workflows and Interactions:**

1.  **Authentication and Authorization:** Consumer applications authenticate users via the SMART App Launch framework, obtaining an access token with appropriate scopes.
2.  **Patient Selection:** The application allows the consumer to select the patient/member for whom they want to retrieve data.
3.  **Data Retrieval:** The application sends `GET` requests to the payer's FHIR API, using search parameters to query for EOB resources based on criteria like patient, service date, or claim type.
4.  **Data Presentation:** The application receives the EOB and related resources in FHIR format and presents the information to the consumer in a user-friendly manner.

**Important Requirements and Guardrails:**

-   Payers must populate all "Must Support" elements in the profiles if they have the data.
-   Payers must adhere to the defined invariants and constraints.
-   Payers must support the specified search parameters and `_include` functionality.
-   Payers must implement the SMART App Launch framework for authentication and authorization.

**Notable Design Choices and Patterns:**

-   The use of an abstract base EOB profile with concrete profiles for different claim types allows for a common structure while accommodating specific requirements for each type.
-   The use of slices for `supportingInfo`, `adjudication`, and `total` provides a structured way to represent complex data elements.
-   The reliance on industry-standard code systems ensures interoperability and consistency.

## Ecosystem Context

**Target Systems and Users:**

-   **Target Systems:** Payer claims systems, consumer-facing health applications.
-   **Target Users:** Patients/members, personal representatives, consumer application developers.

**Relationship to Other Standards/IGs:**

-   **US Core:** The IG builds upon US Core profiles for Patient, Coverage, Organization, and Practitioner.
-   **SMART App Launch:** The IG mandates the use of the SMART App Launch framework for authentication and authorization.
-   **Da Vinci PDex:** The IG complements the Da Vinci Payer Data Exchange (PDex) IG, which focuses on provider access and payer-to-payer data exchange. The "Basis" profiles in this IG are designed to be used by PDex for sharing non-financial claims data.

**Relevant Jurisdictions or Programs:**

-   United States
-   CMS Interoperability and Patient Access Final Rule

**Primary Use Cases and Scenarios:**

-   Consumers accessing their claims and encounter information through third-party applications.
-   Consumers reviewing their EOBs to understand their healthcare costs and benefits.
-   Consumers sharing their claims data with other applications or providers for care coordination or financial management.
-   Supporting the requirements of the CMS Interoperability and Patient Access Final Rule for patient access to claims data.
-   Enabling other IGs, such as Da Vinci PDex, to share non-financial claims data for provider access and payer-to-payer exchange.
