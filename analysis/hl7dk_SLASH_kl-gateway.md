# kl-gateway: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?**
    This IG aims to standardize the reporting of care delivery data from Danish municipalities to the KL Gateway. It provides a structured way to transmit information about citizens, their conditions, goals, planned and completed interventions, and follow-up activities. The context is the exchange of care delivery data between municipalities and a central gateway. The intended users are the software systems within the municipalities that manage and report this care data.

2.  **How does this IG improve upon previous approaches?**
    This IG improves upon previous approaches by providing a specific, constrained set of FHIR profiles tailored for reporting to the KL Gateway. It restricts the information to a necessary subset of data defined by FSIII and FKI, focusing on structured information and omitting free text. It also introduces a new `GeneralEncounter` resource and deprecates the `FollowUpEncounterExtension`, `CitizensOwnObservation`, and `MatterOfInterestObservation` in the long term, aiming for a more streamlined approach. It also enforces a more strict use of the `Patient.deceased` attribute.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    *   Use of FHIR R4 profiles to represent care delivery concepts.
    *   Specific profiles for `Citizen`, `Condition`, `Goal`, `PlannedIntervention`, `CompletedIntervention`, `Encounter` (`GeneralEncounter` in the new version), `FollowUpObservation`, `CitizensOwnObservation`, and `MatterOfInterestObservation`.
    *   Use of FSIII codes for conditions, interventions, goals, and observation results, with a transition plan to enforce UUIDs and current titles from FK-klassifikation.
    *   Use of `DeliveryReport` (a `Bundle`) to encapsulate all resources related to one citizen’s care.
    *   Use of extensions to add specific context to resources, e.g. `DeliveryType`, `FindingContextAtRiskExtension`, and `BasedOnInterventionExtension`.
    *   Invariants defined using FHIRPath expressions to enforce business rules.
    *   Clear descriptions of each attribute and their mapping to FHIR resources.
    *   Use of slicing and closed rules for `code.coding` to enforce coding system usage.
    *   Support for both old and new FSIII codes during a transition period.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    This IG is built on the FHIR R4 standard and uses the Danish core profiles. It aims for compliance with FSIII (the Danish standard for eldercare and health data) and the ongoing work on a shared information model (FKI) for data in the Danish municipalities. It also takes into account the specific requirements and regulations for reporting care delivery data to the KL Gateway.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users of this IG are the software developers and vendors who create systems that manage and report care delivery data for Danish municipalities. The primary beneficiaries are the municipalities, as this IG provides a standardized and consistent way to report data to the KL Gateway. Indirectly, patients benefit from the improved data exchange, as it facilitates more efficient and coordinated care delivery. While not direct users, patients are the subject of the data being reported.
