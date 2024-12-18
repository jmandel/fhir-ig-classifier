# davinci-pdex-plan-net: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the challenge of exposing health insurer's insurance plans, their associated networks, and the organizations and providers participating in these networks through a standardized FHIR API. It focuses on enabling third-party applications to query this data, facilitating the discovery of in-network providers and organizations.
-   **Key clinical/business problems it solves:** The IG aims to improve the accuracy and accessibility of provider directory information, enabling consumers and providers to easily find in-network providers. This can lead to improved care coordination, reduced out-of-network costs, and enhanced patient choice. It also supports regulatory compliance with requirements for payers to publish provider directories.
-   **Intended scope and boundaries:** The scope is limited to a read-only FHIR API for querying payer provider directory information. It does not support updates to the directory data (no PUT or POST operations). The IG assumes that the client already knows the directory endpoint and does not address endpoint discovery. It is based conceptually on the VHDir IG but tailored for the US payer context.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** PlannetEndpoint, PlannetHealthcareService, PlannetInsurancePlan, PlannetLocation, PlannetNetwork, PlannetOrganization, PlannetOrganizationAffiliation, PlannetPractitioner, PlannetPractitionerRole. These profiles are based on FHIR R4 resources, with many adapted from US Core.
    -   **Extensions:** Accessibility, CommunicationProficiency, ContactPointAvailableTime, DeliveryMethod, EndpointUsecase, LocationReference, NetworkReference, NewPatients, OrgDescription, PractitionerQualification, Qualification, ViaIntermediary. These extensions capture additional data elements specific to the payer directory use case.
-   **Notable operations and interactions:** The IG focuses on search operations using the GET method. Key search parameters include name, specialty, location, network, and lastUpdated.
-   **Key terminology and value sets:**
    -   **CodeSystems:** AcceptingPatientsCS, AccessibilityCS, DeliveryMethodCS, VirtualModalitiesCS, EndpointConnectionTypeCS, EndpointPayloadTypeCS, LanguageProficiencyCS, HealthcareServiceCategoryCS, InsuranceProductTypeCS, InsurancePlanTypeCS, OrgTypeCS, QualificationStatusCS, ProviderRoleCS, OrganizationAffiliationRoleCS.
    -   **ValueSets:** AccessibilityVS, AcceptingPatientsVS, DeliveryMethodVS, EndpointConnectionTypeVS, EndpointPayloadTypeVS, HealthcareServiceCategoryVS, InsuranceProductTypeVS, InsurancePlanTypeVS, LanguageProficiencyVS, NetworkTypeVS, OrgTypeVS, OrganizationAffiliationRoleVS, PractitionerRoleVS, QualificationStatusVS, SpecialtiesVS, SpecialtyAndDegreeLicenseCertificateVS, VirtualModalitiesVS.
-   **Significant patterns and constraints:** The IG uses a consistent pattern of referencing related resources, such as linking InsurancePlans to Networks, Organizations to Networks via OrganizationAffiliation, and Practitioners to Organizations and Networks via PractitionerRole. Constraints are applied to ensure data consistency and validity, such as requiring active status for most resources and specifying cardinality requirements.

## Technical Essence

This IG defines a read-only FHIR API for querying payer provider networks, leveraging core profiles like `PlannetOrganization`, `PlannetNetwork`, `PlannetPractitioner`, and `PlannetPractitionerRole`, often adapted from US Core. `PlannetInsurancePlan` profiles link to networks via `network` and specify coverage areas using `coverageArea`. `PlannetOrganizationAffiliation` connects organizations to networks and services. `PlannetPractitionerRole` links practitioners to organizations, networks, and `PlannetHealthcareService` resources, optionally without a direct `Practitioner` reference. Key extensions include `NewPatients` (specifying acceptance criteria), `DeliveryMethod` (with `virtualModalities`), and `Accessibility`. Searches are supported on elements like `name`, `specialty`, `location`, and `network`. Implementers must ensure data consistency, such as active status for resources and adherence to cardinality constraints. The API is designed for efficient retrieval of in-network provider and organization information, enabling third-party applications to build user-friendly provider directories.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves clients querying the FHIR API using search parameters to retrieve information about insurance plans, networks, organizations, and practitioners.
-   **Important requirements and guardrails:**
    -   Servers must support the defined search parameters and return results conforming to the specified profiles.
    -   Servers should not require authentication for accessing the directory data.
    -   Servers should not maintain records that could associate consumers with queried entities.
    -   Clients must interpret missing Must Support data elements as data not present in the server's system.
-   **Notable design choices and patterns:**
    -   The use of OrganizationAffiliation to represent the relationship between organizations and networks.
    -   The use of PractitionerRole to link practitioners to organizations, networks, and services, even without a direct Practitioner reference.
    -   The use of extensions to capture additional data elements specific to the payer directory use case.

## Ecosystem Context

-   **Target systems and users:** The target systems are payer systems hosting provider directory data and third-party applications consuming this data. The target users are consumers, providers, and other stakeholders seeking information about in-network providers and organizations.
-   **Relationship to other standards/IGs:** The IG is based conceptually on the VHDir IG and aligns with US Core profiles where possible. It also references other relevant standards, such as NUCC provider taxonomy codes.
-   **Relevant jurisdictions or programs:** The IG is designed for the US healthcare context and is relevant to programs like the Da Vinci Project, which aims to improve data sharing in healthcare.
-   **Primary use cases and scenarios:**
    -   Consumers searching for in-network providers based on specialty, location, and insurance plan.
    -   Providers verifying network participation for referrals.
    -   Third-party applications building provider directories and other tools based on payer data.
    -   Payers fulfilling regulatory requirements for publishing provider directories.
