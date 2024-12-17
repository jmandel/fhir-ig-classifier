# phd: Analysis

## Core Purpose & Scope

This Implementation Guide (IG) addresses the interoperability challenges of integrating data from Personal Health Devices (PHDs) into FHIR-based systems. It focuses on mapping observations and device data from PHDs, typically used in remote patient monitoring, to FHIR resources. The IG primarily solves the problem of standardizing the representation of PHD data in FHIR, enabling consistent data exchange between PHDs, Personal Health Gateways (PHGs), and healthcare systems. The scope is limited to *communicating* PHDs that use protocols based on IEEE 11073-10206 or IEEE 11073-20601, or for which a mapping to the IEEE 11073-10206 Abstract Content Model can be defined. It does not cover manually entered data or non-communicating devices.

## Technical Foundation

The IG's technical foundation rests on profiles of FHIR `Patient`, `Device`, `DeviceMetric`, and `Observation` resources. Key profiles include:

-   **PhdBaseObservation:** A base profile defining common elements for all PHD observation types.
-   **PhdNumericObservation, PhdCompoundNumericObservation, PhdCodedEnumerationObservation, PhdBitsEnumerationObservation, PhdStringEnumerationObservation, PhdRtsaObservation:** Profiles for specific measurement value types (numeric, compound numeric, coded, BITs, string, and sample array).
-   **PhdCoincidentTimeStampObservation:** Profile for managing time synchronization and auditing.
-   **PhdDevice:** Profile for representing PHD device information.
-   **PhgDevice:** Profile for representing PHG device information.
-   **PhdPatient:** Profile for representing patient data, with options for minimal or no PII.

Notable operations include conditional creation of resources to prevent data duplication. Key terminology includes the IEEE 11073-10101 (MDC) nomenclature, UCUM for units, and a custom ASN1ToHL7 code system for mapping BITs measurements. Significant patterns include the use of `Observation.component` for additional measurement details and the `Observation.derivedFrom` element to link related observations. Constraints include the mandatory presence of MDC codes for observation types and the use of specific coding systems for various elements.

## Technical Essence

This IG defines a FHIR-based data model for PHD observations and device data, leveraging IEEE 11073-10206 as a conceptual foundation. PHG devices, acting as intermediaries, map PHD data to `Observation` resources, using specialized profiles for different measurement types (numeric, coded, BITs, string, sample array, compound).  `PhdNumericObservation` uses `valueQuantity`, while `PhdCodedEnumerationObservation` uses `valueCodeableConcept`. `PhdBitsEnumerationObservation` represents bitstring measurements using a custom `ASN1ToHL7` code system within `Observation.component`, with each bit mapped to a code. `PhdRtsaObservation` uses `valueSampledData` for periodic data. `PhdCompoundNumericObservation` uses `Observation.component` to represent each element of a compound measurement.  `PhdCoincidentTimeStampObservation` captures PHG and PHD time differences for timestamp validation. `PhdDevice` and `PhgDevice` profiles detail device properties, including identifiers, manufacturer, model, and specializations. `PhdPatient` allows for minimal or no PII. Conditional creation using a concatenated identifier (device, patient, type, timestamp, etc.) prevents observation duplication. All observations link to `Patient`, `PhdDevice`, and `PhgDevice` resources. Vital signs observations require additional LOINC codes.

## Implementation Approach

Implementations primarily involve PHGs that receive data from PHDs, map it to FHIR resources according to the defined profiles, and upload it to a FHIR server. Key workflows include:

1.  Receiving PHD data via IEEE 11073-10206 or a mappable protocol.
2.  Generating a `PhdCoincidentTimeStampObservation` if the PHD provides a timestamp.
3.  Creating `PhdDevice` and `PhgDevice` resources based on device information.
4.  Creating a `PhdPatient` resource (or using a pre-assigned logical ID).
5.  Generating `Observation` resources for each measurement, using the appropriate profile based on the measurement type.
6.  Populating `Observation` elements with mapped data, including code, timestamp, value, and components.
7.  Generating a unique identifier for each `Observation` to enable conditional creation.
8.  Uploading resources to a FHIR server, either individually or in a transaction Bundle.

Important requirements include handling various time stamp types, mapping MDC codes to UCUM units, and supporting conditional create operations. The IG emphasizes a generic and extensible approach, allowing PHGs to handle diverse PHD types without prior knowledge of specific specializations.

## Ecosystem Context

The primary target systems are PHGs and FHIR servers used in remote patient monitoring. Target users include patients, healthcare providers, and potentially researchers. The IG relates to other standards like IEEE 11073-10206, IEEE 11073-20601, Bluetooth SIG Generic Health Sensor profile, and the Continua Design Guidelines. It is relevant to jurisdictions or programs focused on remote patient monitoring and personal health data management. Primary use cases include chronic disease management (e.g., diabetes, cardiovascular), post-operative care, fitness tracking, and medical research involving PHD data. The IG complements the IHE Point of Care Devices (PoCD) IG, which focuses on acute care settings.
