# smart-health-cards-and-links: Analysis

## Core Purpose & Scope

This FHIR Implementation Guide (IG) defines the specifications for SMART Health Cards and SMART Health Links, enabling individuals to access, store, and share their health information in a verifiable and privacy-preserving manner. It primarily addresses the interoperability challenges of securely exchanging health data between patients, providers, and other stakeholders, such as public health agencies, schools, and employers. The IG solves key clinical and business problems related to the portability, authenticity, and accessibility of health records, particularly vaccination records, lab results, and insurance information. The scope is bounded to defining the technical framework for creating, issuing, storing, and verifying SMART Health Cards and Links, while allowing flexibility for specific use cases to be defined in separate IGs.

## Technical Foundation

The technical foundation of this IG rests on several building blocks:

-   **Core Profiles and Extensions:** The IG does not define specific FHIR profiles but provides guidance on structuring FHIR resources within the Health Card payload. It references external IGs like the SMART Health Cards: Vaccination & Testing Implementation Guide and the CARIN Digital Insurance Card Implementation Guide for use-case-specific profiles.
-   **Notable Operations and Interactions:** The key operation is `$health-cards-issue`, a FHIR operation that allows Health Wallets to request Health Cards from FHIR-enabled issuers. SMART Health Links interactions involve retrieving encrypted manifests and files via HTTP GET and POST requests.
-   **Key Terminology and Value Sets:** The IG defines a CodeSystem for Health Card types and references external ValueSets for specific clinical concepts (e.g., vaccine codes).
-   **Significant Patterns and Constraints:** Health Cards are encoded as Compact Serialization JSON Web Signatures (JWS) with specific header requirements (e.g., `alg: "ES256"`, `zip: "DEF"`) and payload constraints for QR code compatibility (e.g., minification, removal of certain FHIR elements). SMART Health Links are encoded as base64url-encoded JSON payloads with specific properties (e.g., `url`, `key`, `exp`, `flag`, `label`, `v`).

## Technical Essence

This IG defines a framework for verifiable health data exchange using signed FHIR resources embedded within JWS payloads, termed SMART Health Cards, and encrypted FHIR resources accessible via unique URLs, termed SMART Health Links. Issuers generate Health Cards by creating a FHIR Bundle conforming to a use-case-specific profile, then packaging it into a JWS with a defined structure: `{"iss": "...", "nbf": ..., "vc": {"type": ["https://smarthealth.cards#health-card", ...], "credentialSubject": {"fhirVersion": "...", "fhirBundle": ...}}}`. The JWS header includes `alg: ES256`, `zip: DEF`, and a `kid` corresponding to the issuer's public key published at `/.well-known/jwks.json`. For QR code representation, the payload is minified, removing `Resource.id`, `Resource.meta`, `DomainResource.text`, `CodeableConcept.text`, `Coding.display`, and using short `resource`-scheme URIs for `Bundle.entry.fullUrl` and `Reference.reference`. Health Cards are distributed via file download (`.smart-health-card`), QR codes, or the `$health-cards-issue` operation. SMART Health Links are generated by creating a JSON payload containing a manifest URL, decryption key, optional expiration, flags, label, and version. This payload is minified, base64url-encoded, and prefixed with `shlink:/`. The manifest, retrieved via HTTP POST, contains encrypted file locations or embedded content, decryptable using the provided key and JOSE JWE with `alg: dir`, `enc: A256GCM`.

## Implementation Approach

The IG is designed to be implemented by issuers (e.g., labs, pharmacies, providers), Health Wallet applications, and verifiers. Issuers must generate and sign Health Cards according to the specified format, publish their public keys, and optionally support the `$health-cards-issue` operation. Health Wallet applications retrieve, store, and present Health Cards, and optionally interact with the FHIR API for issuance. Verifiers validate Health Card signatures using issuer public keys and apply use-case-specific rules. SMART Health Links implementations involve generating encrypted manifests and files, handling requests with optional passcodes, and managing long-term links with polling mechanisms. Key requirements include secure key management, adherence to JWS and encryption specifications, and proper handling of QR code encoding and decoding.

## Ecosystem Context

The target systems for this IG include EHRs, immunization information systems, public health systems, personal health record applications, and various verifier systems (e.g., schools, employers, event venues). The IG is designed to work alongside other standards and IGs, such as SMART on FHIR for authorization and use-case-specific FHIR profiles. It is relevant to jurisdictions and programs that require verifiable health data exchange, particularly in the context of vaccination records, lab results, and insurance information. The primary use cases involve individuals sharing their health information with various entities for purposes such as travel, employment, school registration, and clinical care. The IG builds upon the work of the Verifiable Clinical Information (VCI) coalition, the Argonaut Project, and the CARIN Alliance, and is sponsored by the HL7 FHIR Infrastructure workgroup.