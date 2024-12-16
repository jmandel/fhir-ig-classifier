# kl-gateway-prevention: Analysis

1. **What is this IG trying to achieve, in what context, and for whom?**
   This IG aims to standardize the reporting of data related to health promotion and disease prevention interventions (specifically under §119 of the Danish Health Act) delivered by Danish municipalities to the KL Gateway. It provides a structured way for municipalities to report information about citizens, their conditions, the care plans and interventions they receive, and the encounters they have with healthcare staff, all within the context of §119.

2. **How does this IG improve upon previous approaches?**
   This IG introduces a set of FHIR profiles that enforce specific constraints on data elements, datatypes, and cardinalities for reporting §119 interventions. It defines mandatory fields (e.g., CPR number, SOR code, status codes) and enforces the use of controlled vocabularies (e.g., KL codes, FSIII codes) for specific data elements. It also introduces invariants that check the validity of the data, like ensuring `statusReason` is populated when a careplan is cancelled. This standardization makes the reporting more consistent and reliable compared to previous unspecified methods. The IG also specifies the use of a bundle to group different resource types, and how the resources should be referenced, thereby improving the reporting process. The IG also aims for compliance with Danish core profiles and the current work on a shared information model (FKI).

3. **What are the key features and technical approaches of this IG?**
   Key features include:
   - **FHIR Profiles:** Defines profiles for `CarePlan`, `Condition`, `Encounter`, `Organization`, `Patient` (renamed to `KLGateway119Citizen`), `ServiceRequest`, and a custom `Bundle` profile (`KLGateway119DeliveryReport`). It also defines a `PlannedIntervention` profile, which is a specialization of `CarePlan`.
   - **ValueSets:** Uses ValueSets for controlled vocabularies (e.g., `CancellationTypes`, `ServiceTypes119`, `KLInterventionCodes119`, `KLConditionCodes119`, `CarePlanCategories119`, `DeliveryTypes119`, `EncounterClassCodes`).
   - **Extensions:** Defines custom extensions for `Encounter` (`BasedOnCarePlanExtension`) and `CarePlan` (`BasedOnServiceRequestExtension`, `DeliveryType`) to capture specific relationships.
   - **Invariants:** Includes FHIRPath invariants to enforce business rules, such as requiring a cancellation reason when an activity is cancelled and ensuring planned interventions are linked to a careplan when appropriate.
   - **Bundling:** Uses a `Bundle` resource to group all related resources for a delivery report, including the citizen, organization, service requests, conditions, care plans, and encounters.
   - **Danish descriptions:** Adds Danish descriptions to the elements of the profiles to make the IG more accessible to Danish users.
   - **Example instances:** Provides example instances for each of the profiles to demonstrate how they should be used.

4. **How does this IG relate to broader healthcare standards and regulations?**
    This IG is built upon the HL7 FHIR standard. It specifically references and uses the Danish core profiles (`http://hl7.dk/fhir/core/StructureDefinition/dk-core-patient`, `http://hl7.dk/fhir/core/StructureDefinition/dk-core-organization`, `http://hl7.dk/fhir/core/StructureDefinition/dk-core-condition`) and aims for compliance with the Danish shared information model (FKI). It is designed to support the reporting requirements related to §119 of the Danish Health Act, which governs health promotion and disease prevention initiatives in municipalities.

5. **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users of this IG are the IT vendors and developers responsible for building and maintaining the systems used by Danish municipalities to document and report data related to §119 health promotion and disease prevention activities. The beneficiaries are:
    - **Municipalities:** They benefit from having a standardized way to report data to KL Gateway, which should lead to better data quality and comparability.
    - **KL (Local Government Denmark):** They benefit from receiving consistent and reliable data that is needed for overview and analysis of the §119 interventions.
    - **Patients:** Indirectly, patients benefit from improved data quality and analysis, which may lead to improved care and better health outcomes. The IG, however, does not directly interface with patients.
