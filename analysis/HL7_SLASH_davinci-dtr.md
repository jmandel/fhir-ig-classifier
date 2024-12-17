# davinci-dtr: Analysis

## Core Purpose & Scope

The Da Vinci Documentation Templates and Rules (DTR) Implementation Guide addresses the interoperability challenges surrounding the collection and exchange of patient documentation required by payers for processes like prior authorization and claims processing. It aims to solve the problem of inefficient, manual, and error-prone documentation workflows that delay payer interactions and burden providers. The IG's scope is focused on enabling payers to express their documentation requirements in a computable format using FHIR Questionnaires, allowing providers to gather and submit necessary information in a context-specific way, minimizing manual data entry and leveraging existing EHR data where possible. It is designed to work in conjunction with other Da Vinci IGs, specifically Coverage Requirements Discovery (CRD), Prior Authorization Support (PAS), and Clinical Data Exchange (CDex), but can also be implemented stand-alone.

## Technical Foundation

The DTR IG is built on FHIR R4 and leverages several key technical building blocks:

-   **Core Profiles and Extensions:**
    -   `DTR Standard Questionnaire` and `DTR Adaptive Questionnaire` profiles, based on SDC Questionnaire, define how payers express documentation requirements.
    -   `DTR QuestionnaireResponse` profile, based on SDC QuestionnaireResponse, defines how providers capture and submit documentation.
    -   `DTR Questionnaire Package Bundle` profile defines the structure for exchanging Questionnaires, Libraries, and ValueSets.
    -   `qr-context` extension links QuestionnaireResponses to relevant resources (e.g., ServiceRequest, Coverage).
    -   `information-origin` extension indicates the source of data in QuestionnaireResponse answers (e.g., auto-populated, manual entry).
    -   `coverage-information` extension (from CRD) to convey coverage determinations in adaptive forms.
-   **Notable Operations and Interactions:**
    -   `$questionnaire-package` operation allows clients to retrieve Questionnaire packages from payers.
    -   `$next-question` operation (from SDC) supports adaptive forms by providing the next question based on previous answers.
    -   `$log-questionnaire-errors` operation allows clients to report errors encountered with Questionnaires or CQL.
-   **Key Terminology and Value Sets:**
    -   Leverages standard terminologies like SNOMED CT, LOINC, ICD-10-CM, and HCPCS.
    -   Defines value sets for specific concepts like information origins, metric data, and supported payers.
-   **Significant Patterns and Constraints:**
    -   Uses CQL for pre-population logic and to define dynamic behavior within Questionnaires.
    -   Relies on SMART on FHIR for application launch and authorization.
    -   Employs a combination of standard and adaptive Questionnaires to accommodate different payer needs.
    -   Defines specific CapabilityStatements for different actor types (Light DTR EHR, Full DTR EHR, SMART DTR Client, DTR Payer Service).

## Technical Essence

The DTR IG's core functionality revolves around a payer-defined FHIR Questionnaire, optionally accompanied by CQL Libraries and ValueSets, packaged into a Bundle retrieved via the `$questionnaire-package` operation. This operation accepts Coverage, order (e.g., ServiceRequest), and/or CRD context IDs as input to determine the relevant Questionnaire(s). For standard forms, the Questionnaire contains all logic for display, population, and validation. For adaptive forms, the `$next-question` operation is used iteratively, with the payer providing subsequent questions based on prior answers in the QuestionnaireResponse. DTR clients, either SMART apps or EHRs with native support, execute CQL to pre-populate answers from the EHR, adhering to US Core and HRex data access constraints. Users review and complete the QuestionnaireResponse, with the client enforcing constraints and managing the `information-origin` extension to track data provenance. Completed QuestionnaireResponses are stored in the EHR and can be bundled with referenced resources for submission to downstream systems. Adaptive forms may include a `coverage-information` extension in the final QuestionnaireResponse, conveying payer determinations.

## Implementation Approach

Implementation of the DTR IG involves several key workflows:

1.  **Configuration:** EHRs and payers establish trust relationships and register DTR apps, ensuring secure communication and defining supported payers.
2.  **Launch:** DTR is launched either from a CRD system action or directly from the EHR, with context passed via SMART launch parameters (e.g., patient, user, Coverage, order/encounter, or existing QuestionnaireResponse).
3.  **Questionnaire Retrieval:** The DTR client invokes the `$questionnaire-package` operation on the payer's endpoint, providing context information to retrieve the relevant Questionnaire package.
4.  **Pre-population:** The client executes CQL within the Questionnaire to automatically populate answers from the EHR, adhering to defined data access constraints.
5.  **User Interaction:** The client renders the Questionnaire, allows the user to review, complete, and potentially override answers, and validates the QuestionnaireResponse against defined constraints.
6.  **Storage and Submission:** The completed QuestionnaireResponse is stored in the EHR and can be packaged into a Bundle with referenced resources for submission to downstream systems (e.g., PAS, CDex, claims).

Key requirements include support for SMART on FHIR Backend Services for authentication, CQL execution for pre-population, and adherence to SDC Questionnaire rendering and behavior rules. The IG also provides guidance on handling errors, managing sensitive data, and supporting both standard and adaptive forms.

## Ecosystem Context

The DTR IG is designed for use by provider organizations (EHRs and SMART apps) and payer organizations. It is primarily targeted at the US healthcare market, as evidenced by its reliance on US Core and its focus on prior authorization and claims processes. The IG is part of the broader Da Vinci project, which aims to improve value-based care through FHIR-based interoperability. DTR's relationship with CRD, PAS, and CDex is crucial, as it provides the mechanism for gathering documentation identified as necessary by CRD and used by PAS and CDex. The primary use cases involve streamlining prior authorization, claims submission, and other coverage-related documentation workflows. The IG also mentions alignment with CMS regulations (CMS-0057-F) related to prior authorization.
