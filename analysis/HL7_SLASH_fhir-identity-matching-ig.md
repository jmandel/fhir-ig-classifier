# fhir-identity-matching-ig: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the challenges of accurately and reliably matching patient identities across different healthcare organizations and systems, especially in the context of cross-organizational data exchange. It also tackles issues related to identity verification and assurance in digital health transactions.
-   **Key clinical/business problems it solves:** The IG aims to reduce patient matching errors, improve data quality, enhance patient safety, streamline care coordination, and facilitate secure access to health information. It also provides a framework for establishing and managing digital identities in healthcare.
-   **Intended scope and boundaries:** The IG focuses on profiling the FHIR patient `$match` operation for cross-organizational use, providing guidance on identity verification and assurance, and defining best practices for using verified matching attributes. It also covers digital identity management, including the use of Digital Identifiers and Enterprise Identifiers. Security is generally out of scope, except for specific requirements related to patient-initiated workflows and the use of B2B with User Authorization Extension Object.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `IDI-Patient`: Base profile for patient information used in the `$IDI-match` operation.
    -   `IDI-Patient-L0`, `IDI-Patient-L1`: Profiles with weighted input requirements for improved matching accuracy.
    -   `FASTIDUDAPPerson`: Profile on `Person` for use with the IG.
    -   `IDIMatchBundle`: Bundle requirements for responders of a `$IDI-match` request.
    -   `IDIMatchInputParameters`, `IDIMatchOutputParameters`: Define the inputs and outputs of the `$IDI-match` operation.
-   **Notable operations and interactions:**
    -   `$IDI-match`: An extension of the FHIR `$match` operation, constrained to meet the IG's requirements. It uses one of the `IDI-Patient` profiles as input and returns an `IDIMatchBundle`.
-   **Key terminology and value sets:**
    -   `IdentityIdentifierCodeSystem`: Defines codes for specialized identifiers (e.g., `STID`, `SSN4`).
    -   `IdentityIdentifierValueSet`: Includes codes from `IdentityIdentifierCodeSystem` and `identifier-type` value set.
    -   `HL7Identifier`: A naming system for Digital Identifiers used in patient matching.
-   **Significant patterns and constraints:**
    -   Weighted input requirements for `IDI-Patient-L0` and `IDI-Patient-L1` based on the value of different data elements.
    -   Invariants to ensure data quality and consistency in match requests.
    -   Requirements for identity verification at different Identity Assurance Levels (IALs).
    -   Use of `meta.profile` to indicate conformance to specific profiles.

## Technical Essence

This IG defines a specialized `$IDI-match` operation extending FHIR's `$match` to enhance cross-organizational patient identity matching. It mandates the use of `IDI-Patient` profiles (Base, L0, or L1) for input, each with increasing data quality requirements. `IDI-Patient-L0` and `L1` enforce weighted input criteria (e.g., Digital Identifier = 10, First Name & Last Name = 3) and invariants (e.g., `idi-L0`, `idi-L1`) to ensure a minimum data quality threshold (9 for L0, 10 for L1). The operation returns an `IDIMatchBundle` containing matched `Patient` resources and the responding `Organization`. The IG defines a `HL7Identifier` naming system for Digital Identifiers and specifies their use in `Patient.identifier`. It also introduces the `FASTIDUDAPPerson` profile for representing individuals in digital identity contexts. Responders are expected to use a scoring system informed by the provided quality levels (Best, Superior, Very Good, Good) based on matched elements, and return this score in `Bundle.entry.search.score`.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Identity Proofing Workflow: Establishes the required level of identity assurance and verifies the individual's identity.
    -   Match Workflow: Involves a requesting system sending a match request with an `IDI-Patient` resource, and a receiving system performing matching and returning an `IDIMatchBundle`.
    -   Digital Identity Creation: Involves generating and binding a Digital Identifier to an OpenID Connect credential.
-   **Important requirements and guardrails:**
    -   Match requests must use one of the `IDI-Patient` profiles.
    -   Identity verification must be performed at IAL1.5 or higher for most workflows, and IAL1.8/AAL2 for consumer-facing match requests.
    -   Responders must implement weighting and scoring algorithms as defined in the IG.
    -   Specific requirements for Consumer Match, including higher confidence thresholds and use of B2B with User Authorization Extension Object.
-   **Notable design choices and patterns:**
    -   Use of weighted input requirements to improve matching accuracy.
    -   Definition of specific IALs (IAL1.2-1.8) tailored for healthcare settings.
    -   Emphasis on matching against sets of linked records (identities) rather than individual records.
    -   Guidance on scoring matches and returning a quality score to requesters.

## Ecosystem Context

-   **Target systems and users:** The IG targets healthcare organizations, health information exchanges (HIEs), payers, identity providers, and application developers involved in patient matching and digital identity management.
-   **Relationship to other standards/IGs:** The IG builds upon the FHIR standard and references other relevant standards such as NIST 800-63-3, UDAP Security, and SMART App Launch. It also mentions IHE profiles related to patient identity management.
-   **Relevant jurisdictions or programs:** The IG is relevant to the US healthcare system and aligns with initiatives like ONC's FAST and TEFCA.
-   **Primary use cases and scenarios:**
    -   Patient-Directed B2C: Patients accessing their health information through third-party apps.
    -   Patient-Mediated B2C: Patients managing their data through a PHR app and authorizing access to third parties.
    -   App-Mediated B2B with Patient User: Patients using apps to access their records without credentials from the data holder.
    -   B2B TPO / Coverage Determination: Cross-organizational data exchange for treatment, payment, operations, and eligibility determination.
    -   Digital Identity Creation and use in various healthcare transactions.
