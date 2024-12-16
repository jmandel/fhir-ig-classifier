# kl-ffb-messaging: Analysis

1. **What is this IG trying to achieve, in what context, and for whom?**
   This IG aims to define a standard for exchanging messages related to social care and support for citizens within the Danish context, specifically focusing on the "FFB" (possibly a local or regional authority). It seeks to enable the electronic communication of orders and related information between authorities and service providers. The objective is to facilitate a structured exchange of data related to care plans, citizen objectives, interventions, and assessments.

2. **How does this IG improve upon previous approaches?**
   The IG introduces structured profiles for FHIR resources like `Account`, `Organization`, `Citizen`, `Consent`, `CarePlan`, `Goal`, `Condition`, `Encounter`, `DocumentReference`, and `MessageHeader`. It defines specific extensions, code systems, and value sets tailored to the FFB messaging domain. This standardization enables interoperability and reduces ambiguity in data exchange, which is an improvement over unstructured or ad-hoc methods. It uses slicing for identifiers and telecoms to allow for multiple instances with different systems.

3. **What are the key features and technical approaches of this IG?**
    *   **Profiles:** It defines profiles for standard FHIR resources, constraining and extending them to meet FFB's specific needs. Examples include `KLMessagingFFBAccount`, `KLMessagingFFBCitizen`, `KLMessagingFFBOrderCarePlan`, and `KLMessagingFFBIntervention`.
    *   **Extensions:** It introduces custom extensions like `KLMessagingFFBActingMunicipalityExtension`, `KLMessagingFFBGuardianshipFormExtension`, and `KLMessagingFFBParticipationDescriptionExtension` to capture additional information.
    *   **Code Systems and Value Sets:** It defines custom code systems and value sets for message events, relationship types, guardianship forms, consent policies, and participant roles.
    *   **Message Structure:** It defines a `KLMessagingFFBOrderMessage` profile based on the `Bundle` resource to encapsulate the message, along with a corresponding `KLMessagingFFBOrderMessageHeader` profile to describe the message context.
    *   **Resource Relationships:** The IG models relationships between resources such as CarePlan and interventions, information gathering and conditions, and accounts and owners.
    *   **Example Instance:** It provides a complete example message instance illustrating the usage of the defined profiles and resources.
    *   **Use of KL Common:** It reuses structure definitions from `http://kl.dk/fhir/common/caresocial/StructureDefinition/` and value sets from `http://kl.dk/fhir/common/caresocial/ValueSet/`.

4. **How does this IG relate to broader healthcare standards and regulations?**
   The IG is built upon the HL7 FHIR standard, which provides a framework for healthcare data exchange. It uses concepts from v2 and v3 HL7 standards. The IG also seems to be aligned with Danish healthcare context by using codes from `http://hl7.dk/fhir/core/CodeSystem/dk-core-municipality-codes`. It references consent scope codes from `http://terminology.hl7.org/CodeSystem/consentscope`. It uses the consent policy codes, presumably related to the Danish data protection laws.

5. **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    *   **Primary Users:** Authorities (e.g., municipalities) responsible for ordering social care services and service provider organizations that deliver those services.
    *   **Beneficiaries:** Citizens receiving social care and support from the FFB system indirectly benefit from the improved communication and coordination between authorities and providers. The IG aims to streamline the process of care delivery. While citizens are not direct users, their information is central to the data exchanged.
