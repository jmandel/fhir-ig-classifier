# fhir-military-service: Analysis

## Core Purpose & Scope
- **Primary interoperability challenges this IG addresses:** This IG primarily addresses the challenge of representing and exchanging military service history and veteran status information in a standardized way using FHIR. It focuses on enabling verification of veteran status and sharing of military service details, including deployments and occupations.
- **Key clinical/business problems it solves:** It solves the problem of inconsistent or non-standardized recording of military service history, which can impact healthcare delivery for veterans. It also facilitates administrative workflows related to veteran benefits and supports the assessment of health risks associated with military service.
- **Intended scope and boundaries:** The scope is primarily focused on the US realm, specifically addressing Title 38 Veteran Benefits requirements. It is designed to be extensible to other realms/jurisdictions. The IG does not address prior authorization, applying for healthcare coverage, or scheduling service-connected visits, which were deemed out-of-scope.

## Technical Foundation
- **Core profiles and extensions:**
    - **USVeteran:** Extends US Core Patient, adding the `USVeteranStatus` extension (boolean) to indicate confirmed veteran status.
    - **MilitaryServiceEpisode:** An Observation profile representing a period of military service, referencing `DeploymentHistoryEpisode` and `MilitaryOccupation`.
    - **DeploymentHistoryEpisode:** An Observation profile detailing a completed deployment, including location, mission, and dates.
    - **MilitaryOccupation:** An Observation profile, similar to ODH PastOrPresentJob, representing military occupations held during service.
- **Notable operations and interactions:** The IG specifies a `$veteranStatus` operation on the Patient resource to verify veteran status. It also outlines search interactions using the `subject`, `patient`, and `code` parameters to retrieve military service history.
- **Key terminology and value sets:**
    - **MilitaryBranchVS:** Subset of ODH Occupation value set, representing military branches.
    - **PayGradeVS:** Subset of OHD Supervisory Role value set, limited to military pay grade codes.
    - **SeparationReasonVS:** Contains concepts for reasons for separation from service.
    - **DischargeStatusVS:** Identifies gaps in SNOMED CT for discharge status concepts.
    - **DeploymentEpisodeMissionVS:** Example value set for combat mission codes.
- **Significant patterns and constraints:** The IG heavily utilizes the Observation resource to represent military service history, deployments, and occupations. It leverages `hasMember` to link related observations. Components are used within observations to represent specific data elements like military branch, discharge status, and deployment country.

## Technical Essence
This IG defines a FHIR-based approach for representing and exchanging military service history and veteran status, primarily leveraging the Observation resource. The `USVeteran` profile extends `USCorePatient` with a boolean `USVeteranStatus` extension. `MilitaryServiceEpisode` Observation represents a period of service, referencing `DeploymentHistoryEpisode` and `MilitaryOccupation` Observations via `hasMember`. `DeploymentHistoryEpisode` details deployments using components for country (ISO 3166 codes), mission (custom value set), and dates. `MilitaryOccupation`, similar to `ODHPastOrPresentJob`, uses LOINC code `11341-5` and components for pay grade (subset of ODH Supervisory Role value set). `MilitaryServiceEpisode` also uses components for military branch (subset of ODH Occupation value set), discharge status (custom value set with SNOMED CT gaps), and separation reason (custom value set). The `$veteranStatus` operation on Patient, along with search parameters on Observation, enables verification and retrieval of this information.

## Implementation Approach
- **Critical workflows and interactions:** The primary workflow involves verifying veteran status using the `$veteranStatus` operation and then retrieving military service history using search operations on the Observation resource.
- **Important requirements and guardrails:** Implementers must support the `USVeteran`, `MilitaryServiceEpisode`, and `DeploymentHistoryEpisode` profiles. Supporting `MilitaryOccupation` is strongly recommended. The IG inherits US Core conformance requirements. Data senders must populate `meta.profile` and follow US Core rules for missing data. Data receivers should validate received instances against the appropriate profiles.
- **Notable design choices and patterns:** The use of Observation as the core resource for representing military service history is a key design choice. The use of components within observations to structure data elements and the `hasMember` element to link related observations are notable patterns.

## Ecosystem Context
- **Target systems and users:** Target systems include EHRs, web applications, patient-facing applications, and systems used by the VA and community providers. Target users include clinicians, veterans, and administrative staff.
- **Relationship to other standards/IGs:** The IG builds upon US Core and ODH, reusing profiles and terminology where applicable. It also references LOINC, SNOMED CT, and CDC ODH concepts.
- **Relevant jurisdictions or programs:** The IG is primarily relevant to the US realm and addresses requirements related to US Department of Veterans Affairs (VA) and Title 38 Veteran Benefits.
- **Primary use cases and scenarios:** The primary use cases are verifying veteran status, recording self-reported military and combat history, and retrieving military service history to assess health risks and support administrative workflows.
