# dk-medcom-carecommunication: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?**
    This IG aims to enable secure electronic communication of personally identifiable information for ad hoc communication between healthcare parties in Denmark, particularly in areas where no other MedCom standard is available and not for acute cases. It provides a FHIR standard for "CareCommunication" (Danish: Korrespondancemeddelelse).

2.  **How does this IG improve upon previous approaches?**
    This IG introduces a FHIR-based standard for care communication, replacing or complementing the previous DIS91/XDIS91 standards. It supports digital files (attachments), automatic categorization, message topics, clarified sender information (name, role, phone number), and communication history tracking. It also includes structured author information and a reference to an episode of care identifier.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    *   Use of FHIR R4 messaging framework.
    *   Specific profiles for MessageHeader, Communication, Patient, Practitioner, PractitionerRole, Organization, CareTeam, Encounter and Provenance.
    *   Standardized categories for messages using ValueSets.
    *   Support for message segments with message text and/or attachments.
    *   Structured author information.
    *   Use of UUIDs for identifiers.
    *   Use of SOR and EAN identifiers for organizations.
    *   Versioning of the message definition.
    *   Transition plan with simultaneous operation of older standards.
    *   Support for a more specific recipient and sender.
    *   Support for a more specific receiver, called a recipient.
    *   Support for an episode of care identifier.
    *   Tracking of message activity.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    This IG is developed by MedCom, which is an organization that develops standards for the Danish healthcare sector. It builds upon HL7 FHIR R4 and depends on the MedCom Core and Messaging IGs and DK-core v. 2.0.0, which is defined by HL7 Denmark. It specifies how personal identifiable information should be handled in a secure way, and specifies which national identifiers that should be used, such as SOR and EAN for organizations and CPR-numbers for patients. The IG specifies the use of message segments and how information about the author should be included. 

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    Primary users are healthcare professionals across various settings in Denmark, including doctors, home care providers, physiotherapists, occupational therapists, care teams, nurses, psychologists, and psychiatrists. Patients indirectly benefit through improved communication and coordination of their care. The IG also allows for the inclusion of social care in the municipality.
