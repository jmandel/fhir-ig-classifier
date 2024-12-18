# davinci-atr: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The DaVinci Member Attribution (ATR) IG addresses the lack of standardization in the exchange of Member Attribution Lists between payers and providers, which are crucial for risk-based contracts, value-based care, care gap closures, and quality reporting. It aims to replace the current non-standard methods (e.g., CSV files, SFTP) with a FHIR-based approach.
-   **Key clinical/business problems it solves:** Streamlines the process of establishing and exchanging Member Attribution Lists, enabling providers to identify patients for whom they are responsible, manage care prospectively, track costs, perform reconciliations, and monitor membership trends.
-   **Intended scope and boundaries:** The IG focuses on defining the APIs, data structures, and value sets for exchanging Member Attribution Lists. It covers the exchange of full lists, requesting changes, and receiving notifications of changes. It does not delve into the internal processes of payers or providers for creating or managing these lists beyond what is necessary for the exchange.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `atr-group`: Represents the Member Attribution List, extending the base `Group` resource. Includes extensions like `ext-attributedProvider`, `ext-coverageReference`, `ext-contractValidityPeriod`, and `ext-changeType`.
    -   `atr-patient`: Represents a patient/member in the list, based on `US Core Patient` with added support for the district.
    -   `atr-coverage`: Associates a specific coverage instance to a member, extending the base `Coverage` resource.
    -   `atr-organization`: Represents payer, settlement entity, or provider organization.
    -   `atr-practitioner` and `atr-practitionerrole`: Represent attributed providers.
    -   `atr-location`: Represents the location associated with a provider.
    -   `atr-relatedperson`: Represents a subscriber to a plan.
    -   `davinci-patient-list`: A generic patient list profile that `atr-group` inherits from.
-   **Notable operations and interactions:**
    -   `$davinci-data-export`: A profiled version of the Bulk Data Export operation used to retrieve the Member Attribution List and related data.
    -   `$member-add`: Adds a member and attributed provider to the list.
    -   `$member-remove`: Removes a member and their attributions from the list.
    -   `$confirm-attribution-list`: Indicates that the reconciliation process is complete.
    -   `$attribution-status`: Retrieves the attribution status for a specific member.
    -   Discovery of Group resources using search parameters (e.g., NPI, TIN, contract identifier).
-   **Key terminology and value sets:**
    -   `davinci-group-characteristic`: CodeSystem and ValueSet for characteristics of a DaVinci Patient List.
-   **Significant patterns and constraints:**
    -   Uses Bulk Data IG for asynchronous retrieval of Member Attribution Lists.
    -   Leverages SMART on FHIR Backend Services Authorization for security.
    -   Defines specific requirements for representing contracts, plans, coverage, identifiers, attribution period, and attributed providers within the `atr-group` profile.
    -   Specifies the use of `Group.member.inactive` and `Group.member.extension.ext-changeType` to indicate member status and changes.

## Technical Essence

The DaVinci ATR IG defines a FHIR-based solution for exchanging Member Attribution Lists using a specialized `Group` profile (`atr-group`) that acts as a container for attributed members (`atr-patient`), their associated coverage (`atr-coverage`), and attributed providers (`atr-practitioner`/`atr-practitionerrole`).  A core interaction pattern involves a Consumer discovering the relevant `atr-group` instance via search parameters like NPI or contract identifier, then initiating a bulk data export using the `$davinci-data-export` operation, which is a constrained version of the standard `$export` operation, specifying an `exportType` of `hl7.fhir.us.davinci-atr` and required resource types (`Group`, `Patient`, `Coverage`). Reconciliation is supported through `$member-add` and `$member-remove` operations, allowing Consumers to propose changes to the list, with a `$confirm-attribution-list` operation to signal completion of reconciliation. The IG mandates SMART on FHIR Backend Services Authorization for secure access, requiring specific scopes (`system/*.read`, `system/*.write`).  The `atr-group` profile includes extensions to capture contract validity periods, attributed providers, coverage references, and change types for members.  Producers must support specific combinations of parameters for the reconciliation operations and handle the `Group.member.inactive` flag appropriately based on the list's status (draft or final).

## Implementation Approach

-   **Critical workflows and interactions:**
    1.  Consumer discovers the relevant `atr-group` resource using search parameters.
    2.  Consumer requests the Member Attribution List using `$davinci-data-export`.
    3.  Consumer polls the content location for request completion.
    4.  Consumer retrieves the NDJSON files representing the list.
    5.  Consumer may request changes using `$member-add` and `$member-remove`.
    6.  Consumer signals completion of reconciliation using `$confirm-attribution-list`.
    7.  Consumer may query for a member's attribution status using `$attribution-status`.
-   **Important requirements and guardrails:**
    -   Producers must support the `$davinci-data-export` operation with specific parameters and resource types.
    -   Producers must support SMART on FHIR Backend Services Authorization.
    -   Producers must adhere to specific requirements for representing contracts, plans, coverage, identifiers, attribution period, and attributed providers.
    -   Producers must handle the `Group.member.inactive` flag and `ext-changeType` extension appropriately.
    -   Consumers must be able to process NDJSON files.
-   **Notable design choices and patterns:**
    -   Use of Bulk Data IG for asynchronous retrieval.
    -   Use of operations for reconciliation.
    -   Use of extensions to capture specific attribution-related information.

## Ecosystem Context

-   **Target systems and users:** Payers (Producers) and providers (Consumers), including provider organizations, ACOs, and potentially other entities involved in value-based care.
-   **Relationship to other standards/IGs:** Builds upon FHIR R4, US Core 3.1.1, Bulk Data IG, and SMART on FHIR Backend Services Authorization. It also relates to other DaVinci IGs like PDex and CDex.
-   **Relevant jurisdictions or programs:** Primarily relevant to the U.S. healthcare system, particularly in the context of CMS programs like Data at Point of Care (DPC) and Beneficiary Claims Data API (BCDA).
-   **Primary use cases and scenarios:**
    -   Exchange of Member Attribution Lists for risk-based contracts.
    -   Reconciliation of Member Attribution Lists between payers and providers.
    -   Supporting quality reporting and care gap closure initiatives.
    -   Enabling CMS DPC and BCDA use cases.
    -   Facilitating Payer to Payer data exchange (via Pdex).
