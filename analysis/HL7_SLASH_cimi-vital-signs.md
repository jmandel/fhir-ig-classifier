# cimi-vital-signs: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG tackles the challenge of consistently representing vital signs observations in FHIR, particularly when those observations include qualifying information. It aims to standardize the structure and vocabulary used for vital signs, enabling semantic interoperability across different systems and devices, including patient wearables.
-   **Key clinical/business problems it solves:** The IG facilitates the recording, searching, and retrieval of vital signs with enhanced context. This supports clinical decision-making, patient care, and research by providing a richer, more nuanced understanding of vital signs data. It also addresses the need for a common syntax and vocabulary to achieve semantic interoperability, particularly in the context of patient-generated health data.
-   **Intended scope and boundaries:** The IG focuses on a core set of vital signs: heart rate, respiratory rate, body temperature, blood pressure, body height/length, weight, head circumference, oxygen saturation, and BMI. It includes profiles for individual vital signs and panels (Blood Pressure Panel, Vital Signs Panel). The scope is currently limited to the US realm.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** Vital Signs Panel, Blood Pressure Panel, Average Blood Pressure, Twenty Four Hour Blood Pressure, Blood Pressure Device, Body Height, Body Length, Body Mass Index, Body Temperature, Body Weight, Head Occipital Frontal Circumference, Heart Rate, Oxygen Saturation in Arterial Blood by Pulse Oximetry, Oxygen Saturation in Arterial blood, Respiratory Rate.
    -   **Extensions:** Associated Situation, Blood Pressure Cuff Size, Exercise Association, Measurement Protocol, Measurement Setting, Observation - Body Position, Observation - Device Type, Sensor Description, Sleep Status.
-   **Notable operations and interactions:** The IG does not define any custom operations. It relies on standard FHIR RESTful interactions for creating, reading, updating, and searching for Observation resources.
-   **Key terminology and value sets:** The IG heavily utilizes LOINC for observation codes (e.g., 85354-9 for Blood Pressure Panel, 8867-4 for Heart Rate) and UCUM for units of measure (e.g., mm[Hg], /min, Cel). It also defines several value sets, primarily based on SNOMED CT, to constrain the values of extensions and elements like body position, device type, measurement method, and associated situations.
-   **Significant patterns and constraints:**
    -   The IG extends the base FHIR Observation resource and the US Core vital signs profiles.
    -   It mandates the use of LOINC codes for observation codes and UCUM units for value quantities.
    -   It defines extensions to capture qualifying information relevant to each vital sign.
    -   It uses Observation.component to represent components of panels (e.g., systolic and diastolic blood pressure within the Blood Pressure Panel).
    -   It constrains Observation.valueQuantity to be present when a numeric result is available and requires a Data Absent Reason when it's not.

## Technical Essence

This IG defines a set of FHIR Observation profiles for capturing vital signs with enhanced context. Each profile mandates a specific LOINC code for the `Observation.code` (e.g., `8310-5` for Body Temperature) and UCUM units for `Observation.valueQuantity` (e.g., `Cel` or `[degF]` for temperature). Qualifying information is captured using extensions like `AssociatedSituationExt`, `MeasurementSettingExt`, and `ExtBodyPosition`, which are bound to SNOMED CT-based value sets. For example, a Body Temperature observation might include an `AssociatedSituationExt` with a value from the `BodyTempAssociatedSituationvalueset` (e.g., `SCT#128978002` "Post exercise state"). The Blood Pressure Panel profile (`85354-9`) uses `Observation.component` to represent Systolic (`8480-6`), Diastolic (`8462-4`), and optionally Mean Arterial (`8478-0`) blood pressures, each with its own `valueQuantity`. The `BloodPressureDevice` profile extends `Device` to include a `BloodPressureCuffSizeExt`. Average and 24-hour blood pressure profiles are also defined, using specific LOINC codes and components for systolic and diastolic means.

## Implementation Approach

-   **Critical workflows and interactions:** Implementations will primarily involve creating and querying Observation resources that conform to the defined profiles. Systems will need to capture and store the core vital sign data along with the qualifying information provided through extensions.
-   **Important requirements and guardrails:**
    -   Strict adherence to the specified LOINC codes and UCUM units is crucial.
    -   Proper use of the defined extensions to capture contextual information is essential.
    -   Systems must be able to handle both individual vital sign observations and panel observations.
    -   Data provenance should be tracked, ideally following US Core guidelines.
-   **Notable design choices and patterns:** The use of extensions to capture qualifying information allows for flexibility and extensibility while maintaining a consistent core structure. The use of panels provides a way to group related observations.

## Ecosystem Context

-   **Target systems and users:** EHR systems, patient portals, personal health record (PHR) systems, remote patient monitoring systems, and research databases. Users include clinicians, patients, researchers, and public health agencies.
-   **Relationship to other standards/IGs:** This IG builds upon the base FHIR specification (R4) and extends the US Core vital signs profiles. It aligns with the work of the Clinical Information Modeling Initiative (CIMI) and was informed by Intermountain Healthcare's clinical element models, the Federal Health Information Model, and the American Medical Association's home blood pressure monitoring use cases.
-   **Relevant jurisdictions or programs:** Primarily the US, but the principles and patterns could be adapted to other regions. It is relevant to programs focused on interoperability, patient engagement, and value-based care.
-   **Primary use cases and scenarios:** Recording vital signs during clinical encounters, remote patient monitoring, patient self-reporting of vital signs, population health management, and clinical research.
