# public-health: Analysis

1. **What is this IG trying to achieve, in what context, and for whom?**
   This IG aims to standardize the exchange of information related to population-based cancer screenings in Belgium. It provides a framework for managing the workflow of recurring screenings, including invitations, participation, results, and follow-up actions. The context is public health, specifically cancer screening programs, and it is intended for organizations involved in managing and tracking these programs. The IG provides a model for one iteration of a screening called an episode, and how a patient can have multiple episodes for a specific screening.

2. **How does this IG improve upon previous approaches?**
   The IG introduces structured FHIR resources for representing screening data, like `BePopulationBasedScreeningEpisodeOfCare`, `BePopulationScreeningAppointment`, `BePopulationScreeningEncounter`, `BePopulationScreeningObservation`, and `BePopulationScreeningFollowUp`. It defines specific profiles for these resources, along with value sets and code systems, to standardize the data elements and terminologies used in cancer screening data exchange. This provides a defined way to exchange the data, and allows different actors to have consistent data representation. The IG also addresses the need to provide a human readable indication for the patient about future invitations.

3. **What are the key features and technical approaches of this IG?**
    Key features include:
    *   **Profiles:** Defining specific profiles for FHIR resources (Appointment, Encounter, Observation, ServiceRequest, CarePlan, Communication) to represent screening events, results, and follow-up.
    *   **Extensions:** Using extensions to add specific data elements, such as `PopulationScreeningNextInvitationIndication` for indicating the type and date of the next invitation.
    *   **Code Systems and Value Sets:** Defining code systems (`BeCSDisplayTemplate`, `BeCSPopulationScreeningNextInvitationType`) and value sets (`BeVSPopulationScreeningNextInvitationType`, `BeVSPopulationScreeningType`, `BePopulationScreeningResultVS`, `BeVSPopulationScreeningFollowUpAdvice`, `BeVSPopulationScreeningBodySiteLocation`) to standardize the terminologies used.
    *   **Logical Models:** Defining logical models (`BeModelPopulationScreening`, `BeModelPopulationScreeningPlan`) to represent the structure of screening data and the overall plan.
    *   **Transactions:** Defining a transaction for submitting/updating screening information using a Batch Bundle, with a focus on consistent handling and error management.
    *   **Use of SNOMED CT:** The IG heavily uses SNOMED CT for coding screening types, results and follow-up actions.
    *  **Human readable text**: The IG introduces the concept of display templates (using placeholders) for the different languages, to display information to the end user/patient.

4. **How does this IG relate to broader healthcare standards and regulations?**
   The IG is built on the FHIR standard, using FHIR R4 resources and data types. It incorporates SNOMED CT, a widely used clinical terminology. It is also aligned with the Belgian eHealth standards for patient identification, using the `BePatient` profile. The IG aims to provide an interoperable solution for data exchange in the context of the Belgian public health system, specifically cancer screening. The IG uses the FMM extension to express the maturity of the different resources.

5. **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
   Primary users are organizations involved in managing and tracking population-based cancer screening programs in Belgium, such as the "Centrum voor Kankeropsporing" (CvKO). This includes organizations that need to exchange data about screening events. Patients are indirect beneficiaries, as the IG aims to improve the efficiency and consistency of cancer screening programs, potentially leading to better outcomes. The patient also receives human readable information, and the IG provides a way to manage the communication about next invitations.
