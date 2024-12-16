# dk-medcom-hospitalnotification: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?**
    This IG aims to facilitate the exchange of hospital admission information between hospitals and municipalities in Denmark. It provides a standardized way to notify a municipality about a patient's hospitalization, including admission, leave, return from leave, discharge, and death. This is done to ensure continuity of care by informing the patient's primary care providers about changes in their hospital status. The primary users are hospitals and municipalities.

2.  **How does this IG improve upon previous approaches?**
    The IG replaces older OIOXML standards (XDIS17 and XDIS20) with a FHIR-based approach. This move standardizes the data exchange format and leverages the broader FHIR ecosystem. The IG provides a structured approach for message exchange, with specific profiles for encounters, message headers, and provenance information.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    *   **FHIR Profiles:** It defines specific profiles based on core FHIR resources, such as `MedComHospitalNotificationMessage`, `MedComHospitalNotificationMessageHeader`, and `MedComHospitalNotificationEncounter`, to represent hospital notification data.
    *   **Messaging Pattern:** It leverages the MedCom messaging framework, specifying message structure and requirements.
    *   **Encounter Management:** It handles the complexities of hospital encounters, including admissions, leaves, and discharges, with specific status and class codes.
    *   **Provenance Tracking:** It uses `MedComMessagingProvenance` to track the activity related to the notification, such as admission or discharge.
    *   **Timestamps:** It uses multiple timestamps to accurately represent the timing of events during a patient's hospital stay, including encounter start and end, leave periods, and message creation.
    *   **Episode of Care Identifier:** It mandates the inclusion of at least one episode of care identifier, which is crucial for linking related messages.
    *   **Report of Admission Flag:** It includes an extension to request a report of admission from the municipality when necessary.
    *   **Mandatory Patient CPR:** It enforces that the patient identifier system is an official Danish CPR-number.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    This IG aligns with MedCom's overall FHIR messaging strategy and depends on the MedCom Core IG, MedCom Messaging IG and the DK-core v. 2.0.0 defined by HL7 Denmark. It adheres to Danish legislation concerning data exchange without patient consent, limiting the amount of information that can be included in the message. The use of FHIR itself is a key component of international interoperability standards in healthcare.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary users are:
    *   **Hospitals:** They use the IG to send notifications about their patients' hospitalizations to the relevant municipalities.
    *   **Municipalities:** They receive the notifications and can use the information to plan and coordinate care for their citizens.
    *   **Patients:** While patients are not direct users, they benefit from improved care coordination between hospitals and municipalities, which helps to ensure a smooth transition between care settings.
