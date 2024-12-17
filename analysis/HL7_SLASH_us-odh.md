# us-odh: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the lack of standardized representation and exchange of occupational data within and across health IT systems. It tackles the challenge of capturing and sharing structured work information to facilitate clinical care, population health, and public health reporting.
-   **Key clinical/business problems it solves:** It enables clinicians to consider patients' work environments in managing chronic conditions and diagnosing work-related illnesses. It supports population health activities by providing structured data for analysis of work-related health trends. It also facilitates public health reporting of occupational health data.
-   **Intended scope and boundaries:** The scope includes structured data on employment status, retirement date, combat zone period, past or present job details (occupation, industry, work classification, work schedule, job duties, occupational hazards, employer information, related subject, start/end dates), and usual work details (usual occupation, usual industry, usual occupation duration, related subject, start date). It is designed for the social history section of a medical record and is not intended to support billing activities.

## Technical Foundation

-   **Core profiles and extensions:** The IG specifies a set of FHIR profiles based on a composition resource. While not intended as a stand-alone composition, it defines profiles for capturing various aspects of occupational data. Key profiles likely include those for representing employment status, job details, usual work, and related concepts.
-   **Notable operations and interactions:** The IG suggests that the ODH content should be included in broader IGs and made available as a response to requests for ODH information. This implies interactions where systems query for and receive ODH data as part of a larger clinical or public health data exchange.
-   **Key terminology and value sets:** The IG references value sets for Occupation, Industry, Supervisory Level, Work Schedule, Employment Status, and Work Classification. Three of these (Occupation, Industry, and Supervisory Level) are noted as US-specific, while the others use international concepts.
-   **Significant patterns and constraints:** The IG emphasizes that ODH is not designed for billing and administrative needs. It also notes that while multiple retirement dates are supported, they are not linked to specific jobs or usual occupations.

## Technical Essence

This IG defines a structured representation of Occupational Data for Health (ODH) using FHIR R4.0.1, centered around a composition-based model, though not intended as a standalone document. It leverages Observation resources to capture employment status, retirement date, combat zone periods, and detailed job information, including occupation, industry, work classification (using internationally recognized value sets), and work schedule. Each job instance is encapsulated within an Observation, potentially referencing a parent Observation for hierarchical relationships (e.g., job duties under a specific job). Usual work is similarly modeled, with Observations for usual occupation, industry, and duration.  The IG specifies US-specific value sets for occupation, industry, and supervisory level, while employing international concepts for work schedule, employment status, and work classification.  Crucially, the design allows for linking job or usual work information to a related subject (e.g., a household member) via a `subject` reference in the Observation, enabling the capture of occupational data beyond the primary patient.

## Implementation Approach

-   **Critical workflows and interactions:** The IG envisions workflows where ODH data is requested and provided as part of broader clinical data exchanges. Systems would query for ODH information, and the response would include the relevant ODH profiles within a larger composition or document.
-   **Important requirements and guardrails:** Implementers must ensure that the ODH data is used for clinical care, population health, and public health purposes, not for billing. They should also be aware of the limitations regarding the linkage between retirement dates and specific jobs.
-   **Notable design choices and patterns:** The choice of a composition-based model, even though not standalone, allows for a structured and organized representation of ODH data. The use of US-specific and international value sets reflects the IG's intention to support both US and international needs.

## Ecosystem Context

-   **Target systems and users:** The target systems are Electronic Health Records (EHRs) and other health IT systems used in clinical care, population health, and public health settings. The users include clinicians, public health professionals, and researchers.
-   **Relationship to other standards/IGs:** The IG is designed to be incorporated into broader IGs. It mentions the Vital Records Death Reporting (VRDR) IG as an example where a subset of ODH profiles (Usual Work) is used.
-   **Relevant jurisdictions or programs:** The IG is developed for the US Realm but is intended to support international needs as well. It is a project of the National Institute of Occupational Safety and Health (NIOSH), a part of the U.S. Centers for Disease Control and Prevention (CDC).
-   **Primary use cases and scenarios:** The primary use cases include incorporating ODH into clinical decision support, population health activities, value-based care, and public health reporting. Scenarios involve clinicians accessing ODH data to inform patient care, public health agencies using ODH data to track occupational health trends, and researchers analyzing ODH data to study the relationship between work and health.
