# smart-app-launch: Analysis

## Core Purpose & Scope

This IG, known as SMART App Launch, addresses the primary interoperability challenge of securely connecting third-party applications to Electronic Health Record (EHR) data via FHIR APIs. It solves the key problem of enabling apps to launch from within or outside an EHR, authenticate users, obtain authorization, and access patient-specific or user-level data in a standardized way. The IG's scope is bounded to defining the authorization and authentication protocols, discovery mechanisms, and a set of scopes for controlling access to FHIR resources. It also includes experimental features for app state management and user-access brands. It does not dictate the internal authorization policies of EHRs, nor does it address context synchronization beyond the initial launch.

## Technical Foundation

The technical foundation of SMART App Launch rests on OAuth 2.0 and OpenID Connect, leveraging FHIR for data representation.

-   **Core Profiles and Extensions**: The IG defines profiles for `Endpoint` and `Organization` resources to support user-access brands. It also defines experimental profiles for managing app state using the `Basic` resource.
-   **Notable Operations and Interactions**: Key interactions include a `.well-known/smart-configuration` discovery endpoint, OAuth 2.0 authorization and token endpoints, and FHIR API interactions for data access. Token introspection is also defined.
-   **Key Terminology and Value Sets**: The IG defines a set of SMART-specific OAuth scopes (e.g., `patient/*.rs`, `launch/patient`) and capabilities (e.g., `launch-ehr`, `client-confidential-asymmetric`). It leverages standard FHIR resource types and search parameters.
-   **Significant Patterns and Constraints**: The IG specifies two launch modes (EHR and Standalone), two client types (public and confidential), and two authentication methods (asymmetric and symmetric). It mandates PKCE for all apps and defines a specific JSON structure for the `.well-known/smart-configuration` response.

## Technical Essence

SMART App Launch enables secure app integration with FHIR servers via a standardized OAuth 2.0 flow, enhanced with specific launch contexts and granular scopes. Clients register with the EHR, potentially using asymmetric keys for authentication. A discovery document at `.well-known/smart-configuration` exposes authorization and token endpoints, supported grant types (including `authorization_code` and `client_credentials`), and capabilities like `launch-ehr` or `launch-standalone`.  Apps initiate an OAuth 2.0 flow, requesting scopes like `patient/*.rs` for read/search access to all resources of a contextually-provided patient or `launch/patient` to trigger patient selection. Confidential clients authenticate via JWT assertions or client secrets. Upon authorization, the EHR issues an access token and optionally a refresh token, along with launch context parameters like `patient` or `encounter` IDs. The access token is then used as a Bearer token in FHIR API requests, with the server enforcing access based on granted scopes and internal policies. The experimental `smart-app-state` capability allows apps to persist state using `POST`, `PUT`, `DELETE`, and `GET` on `/Basic` resources, scoped by a custom code and optionally a subject reference.

## Implementation Approach

Implementers must support the defined launch modes, client types, and authentication methods. EHRs expose a `.well-known/smart-configuration` endpoint and manage client registration, potentially using dynamic client registration. Apps use the discovery document to construct authorization requests, including appropriate scopes and PKCE parameters. The authorization server validates requests, optionally interacts with the user for consent, and issues access tokens with appropriate context parameters. Resource servers validate access tokens and enforce scope-based access control. Refresh tokens can be used to obtain new access tokens. The experimental app state feature requires EHRs to manage `Basic` resources associated with app-defined codes and optional subjects, enforcing access control based on app authorization.

## Ecosystem Context

The IG targets EHR systems, third-party app developers, and end-users (clinicians and patients). It relates to other standards like OAuth 2.0, OpenID Connect, and FHIR. It is relevant to jurisdictions and programs promoting health data interoperability, such as the US 21st Century Cures Act and TEFCA. Primary use cases include patient-facing apps launching from patient portals, clinician-facing apps launching from within EHRs, and backend services performing data synchronization or analytics. The experimental user-access brands feature aims to improve the user experience when connecting apps to health data providers.
