# core-clinical: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the lack of standardized clinical data exchange in Belgium, specifically focusing on transversal clinical information. It aims to establish a common framework for representing and sharing core clinical concepts across different healthcare systems and applications.
-   **Key clinical/business problems it solves:** It facilitates the exchange of essential clinical information, such as problems, scores, encounters, and service requests, improving care coordination, reducing data duplication, and enabling better clinical decision-making. It also provides a foundation for more specialized IGs in the future.
-   **Intended scope and boundaries:** The scope is limited to core clinical concepts deemed relevant for transversal exchange within the Belgian healthcare context. It does not cover domain-specific clinical information, which is expected to be addressed by other, more specialized IGs. The IG focuses on defining profiles and extensions for existing FHIR resources, rather than creating new ones.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** BeAppointment, BeCarePlan, BeClinicalImpression, BeEncounter, BeGoal, BeObservation, BeProblem, BeProcedure, BeQuestionnaireResponse, BeScoreResult, BeServiceRequest.
    -   **Extensions:** BeExtLaterality, BeExtProblemOriginType.
-   **Notable operations and interactions:** The IG does not define specific operations or interactions beyond the standard FHIR RESTful API.
-   **Key terminology and value sets:**
    -   **Value Sets:** BeVSBodySite, BeVSLaterality, BeVSProblemCategory, BeVSProblemCode, BeVSProblemOriginType, BeVSReactionManifestationCode, BeVSScore, BeVSScoreCategory.
    -   **Code Systems:** BeCSBodySite, BeCSProblemCategory, BeCSProblemOriginType, BeCSScore, BeCSScoreCategory.
-   **Significant patterns and constraints:**
    -   Profiles constrain base FHIR resources to align with Belgian requirements, often restricting cardinality, specifying code systems, and mandating specific extensions.
    -   The BeObservation profile introduces a supporting profile, BeObservationCodeableConcept, to guide the expression of LOINC and SNOMED-CT codes.
    -   The BeProblem profile mandates the use of the BeExtProblemOriginType extension and defines specific value sets for category, code, and body site.
    -   The BeScoreResult profile defines a standardized way to exchange scores, including category, code, subject, effective period, issued date, performer, value, interpretation, body site, reference range, and derived from.

## Technical Essence

This IG establishes a Belgian national framework for transversal clinical data exchange using FHIR R4. It defines a set of core profiles (e.g., BeProblem, BeScoreResult, BeEncounter) that constrain base FHIR resources to meet Belgian requirements. These profiles mandate specific extensions like BeExtLaterality and BeExtProblemOriginType, and enforce the use of defined value sets (e.g., BeVSBodySite, BeVSProblemCategory) and code systems (e.g., BeCSScore). For instance, BeProblem requires a category from BeVSProblemCategory, a code from BeVSProblemCode, a body site from BeVSBodySite with an optional BeExtLaterality, and a BeExtProblemOriginType. BeScoreResult mandates a category from BeVSScoreCategory, a code from a specific eHealth platform URL, a subject (BePatient or Group), an effectivePeriod, an issued timestamp, a performer, a value, and allows for interpretation, body site with optional laterality, reference ranges, and derivation information. The IG leverages SNOMED-CT as the preferred terminology, but allows for other systems like LOINC in specific contexts, as exemplified by the BeObservationCodeableConcept profile.

## Implementation Approach

-   **Critical workflows and interactions:** The IG does not explicitly define specific workflows but implies standard FHIR interactions for creating, reading, updating, and searching resources based on the defined profiles.
-   **Important requirements and guardrails:**
    -   Implementers must adhere to the constraints defined in the profiles, including cardinality restrictions, code system bindings, and extension usage.
    -   SNOMED-CT is the preferred terminology, but other systems are allowed where appropriate.
    -   References to other resources must be resolvable.
-   **Notable design choices and patterns:**
    -   The use of extensions to capture Belgium-specific data elements, such as laterality and problem origin type.
    -   The definition of supporting profiles, like BeObservationCodeableConcept, to provide guidance on coding practices.
    -   The consistent use of value sets and code systems to ensure semantic interoperability.

## Ecosystem Context

-   **Target systems and users:** The target systems are any healthcare IT systems in Belgium that need to exchange core clinical information. The target users are healthcare providers, patients, and other stakeholders involved in the Belgian healthcare system.
-   **Relationship to other standards/IGs:** This IG builds upon the FHIR R4 standard and is intended to be used in conjunction with other, more specialized IGs that will be developed for specific clinical domains. It also references the hl7.fhir.be.core dependency.
-   **Relevant jurisdictions or programs:** This IG is specifically designed for the Belgian healthcare context, as indicated by the jurisdiction code "BE" and the involvement of the eHealth Platform.
-   **Primary use cases and scenarios:**
    -   Exchanging patient problem lists between primary care providers and hospitals.
    -   Sharing score results, such as pain assessments or risk scores, between different care settings.
    -   Recording and sharing encounter information between healthcare providers.
    -   Exchanging service requests between different healthcare organizations.
