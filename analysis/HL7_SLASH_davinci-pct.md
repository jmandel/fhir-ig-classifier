# davinci-pct: Analysis

## Core Purpose & Scope

The Da Vinci Patient Cost Transparency (PCT) Implementation Guide (IG) addresses the interoperability challenges related to providing patients with accurate and timely cost estimates for healthcare services. It primarily focuses on enabling providers to submit Good Faith Estimates (GFEs) to payers and receive Advanced Explanations of Benefits (AEOBs) in return, using FHIR-based standards. The IG also supports the coordination of GFE collection among multiple providers involved in a patient's care. The scope is bounded by the requirements of the No Surprises Act, specifically focusing on the exchange of financial information to support patient decision-making. It does not cover aspects like eligibility, prior authorization, or coordination of benefits beyond a single coverage.

## Technical Foundation

The technical foundation of the PCT IG rests on FHIR R4, with dependencies on US Core 3.1.1, HRex 1.0.0, and FHIR R5 extensions.

**Core Profiles:**

-   **PCTGFEBundle:** A Bundle containing GFE resources (Claims of type predetermination) and supporting data.
-   **PCTAEOBBundle:** A Bundle containing AEOB resources (ExplanationOfBenefits of type predetermination) and supporting data.
-   **PCTGFEProfessional/Institutional:** Profiles on Claim for submitting professional and institutional GFEs.
-   **PCTAdvancedEOB:** Profile on ExplanationOfBenefit for representing AEOBs.
-   **PCTGFESummary:** Profile on ExplanationOfBenefit for summarizing multiple AEOBs.
-   **PCTGFECollectionBundle:** A Bundle containing multiple GFE Bundles from different providers.
-   **PCTGFECoordinationTask:** A Task resource used to organize a GFE across providers.
-   **PCTGFEContributorTask:** A Task resource used to assign a GFE contributor task to a specific provider.
-   **PCTGFEInformationBundle:** A Bundle containing information necessary for GFE contributors to create their estimates.
-   **PCTGFEMissingBundle:** A Bundle used to indicate when a GFE Contributor task request was made, but no GFE Bundle was submitted.
-   **PCTServiceRequest, PCTMedicationRequest, PCTDeviceRequest:** Profiles for requesting GFEs for specific services, medications, and devices.
-   **PCTServiceLocation:** Profile for providing information about the location where the service is to be performed.
-   **PCTOrganization, PCTPractitioner:** Profiles for representing organizations and practitioners involved in the GFE/AEOB process.
-   **PCTCoverage:** Profile for capturing coverage information.

**Notable Operations:**

-   **`$gfe-submit`:** Operation for submitting a GFE Bundle to a payer. It follows the asynchronous interaction request pattern, returning a URL for polling the status of AEOB processing.
-   **`$gfe-retrieve`:** Operation for retrieving a GFE Collection Bundle based on a GFE Coordination Task.

**Key Terminology:**

-   Value sets for diagnosis types, procedure types, organization types, coverage copay types, supporting info types, and various code systems like CPT, HCPCS, ICD-10, and NUBC codes.
-   Code systems for GFE frequency, care team roles, organization contact purposes, adjudication categories, and financial types.

**Significant Patterns:**

-   Use of FHIR Bundles to encapsulate related resources.
-   Asynchronous interaction pattern for GFE submission and AEOB retrieval.
-   Slicing of resources like `identifier`, `diagnosis`, `procedure`, `careTeam`, `supportingInfo`, `adjudication`, and `total` to define specific constraints.
-   Use of extensions to capture additional information like service descriptions, disclaimers, and provider event methodology.
-   Use of Task resources to manage the GFE coordination workflow.

## Technical Essence

The PCT IG's core functionality revolves around the submission of a `PCTGFECollectionBundle` containing one or more `PCTGFEBundle` resources, each representing a GFE from a contributing provider, to a payer's `$gfe-submit` operation endpoint. Each `PCTGFEBundle` includes `PCTGFEProfessional` or `PCTGFEInstitutional` (Claim) resources, along with referenced `Patient`, `Coverage`, `Organization`, and `Practitioner` resources, all profiled according to PCT specifications. The payer processes the GFE(s) asynchronously and generates an `PCTAEOBBundle` containing `PCTAdvancedEOB` (ExplanationOfBenefit) resources, referencing the original GFE Bundle. The submitter polls the status URL returned by `$gfe-submit` and eventually retrieves the `PCTAEOBBundle`. For multi-provider scenarios, a `PCTGFECoordinationTask` is created by a coordinating provider, referencing a `PCTGFEInformationBundle` with patient and service details.  `PCTGFEContributorTask` resources are assigned to each contributing provider, who then attach their `PCTGFEBundle` to their respective task. The coordinating provider retrieves all contributed GFEs using the `$gfe-retrieve` operation, which returns a `PCTGFECollectionBundle`.  `PCTGFEMissingBundle` resources are used to indicate missing GFE contributions. Key technical aspects include the use of `Bundle` resources for grouping, the asynchronous pattern with polling, specific profiles on `Claim` and `ExplanationOfBenefit` with extensions for GFE/AEOB-specific data, and the use of `Task` resources for workflow management.

## Implementation Approach

Implementers will need to support the creation and consumption of the defined FHIR profiles, particularly the GFE and AEOB Bundles. They must implement the `$gfe-submit` operation on the payer side, adhering to the asynchronous pattern. Providers will need to construct valid GFE Bundles, potentially coordinating with other providers using the GFE Coordination workflow and the `$gfe-retrieve` operation. Systems must handle the various status codes and error conditions defined in the IG. Security and privacy considerations, as outlined in the HRex IG, must be addressed, particularly regarding authentication and authorization.

## Ecosystem Context

The PCT IG targets healthcare providers, payers, and health IT vendors, including billing management systems and revenue cycle management systems. It is primarily relevant to the US healthcare market, driven by the No Surprises Act. The IG builds upon US Core and HRex, leveraging their profiles and security mechanisms. It also references other standards like CARIN Blue Button. The primary use cases involve patients scheduling services or requesting cost estimates, triggering the GFE submission and AEOB generation process. The IG aims to improve patient transparency and enable informed decision-making regarding healthcare costs.
