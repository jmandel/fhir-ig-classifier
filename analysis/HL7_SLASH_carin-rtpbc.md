# carin-rtpbc: Analysis

## 1. Objectives and Context

This implementation guide (IG) aims to standardize the process of a consumer-focused Real-Time Pharmacy Benefit Check (RTPBC) using the HL7 FHIR standard. In simpler terms, it seeks to create a consistent way for patients to easily see how much their prescription drugs will cost and how they are covered by their insurance, including any potential discounts, using a mobile app or website. 

This process is specifically designed for the US healthcare system and focuses on prescription medications covered under pharmacy benefits (excluding drugs administered in hospitals or during medical procedures). 

## 2. Improvements over Previous Approaches

This consumer-focused RTPBC IG improves upon previous approaches by:

* **Tailoring information to patients:** It focuses on providing cost and coverage information that is relevant and understandable to patients, unlike provider-centric approaches that include details more pertinent to prescribers.
* **Expanding data sources:** It includes information from various sources like insurers and discount pricing providers, offering a more comprehensive view of patient costs.
* **Enabling real-time price comparisons:** It supports real-time price checks, allowing patients to compare costs at different pharmacies and consider various options before filling their prescriptions.
* **Establishing a dedicated standard:** It creates a standalone standard for consumer-focused RTPBC, allowing it to evolve independently and better meet patient needs over time.

## 3. Key Features and Technical Approaches

* **FHIR-based:** Utilizes FHIR resources like Claim, ClaimResponse, Patient, Coverage, MedicationRequest, and Organization to structure and exchange information.
* **Predetermination mode:** Leverages the Claim resource in "predetermination" mode to simulate a "what-if" scenario for cost and coverage estimation.
* **Bundled requests and responses:** Uses FHIR Bundles to package related resources for requests and responses, streamlining communication.
* **Standardized benefit restrictions:** Employs a standardized value set for benefit restrictions, ensuring consistent communication of coverage limitations to patients.
* **Support for alternative options:** Allows responders to include information about alternative medications and pharmacies, enhancing patient choice.
* **Error handling:** Defines mechanisms for handling errors and exceptions during the process, ensuring robust communication.
* **Synchronous communication:** Designed for real-time, synchronous communication to support interactive patient applications.

## 4. Relation to Healthcare Standards and Regulations

This IG aligns with broader healthcare standards by adopting the HL7 FHIR standard for data exchange. It also leverages existing terminology used in US pharmacy benefit processing, such as NCPDP codes, to ensure compatibility with existing systems.

While not explicitly mentioned, the IG likely supports HIPAA regulations by enabling secure and private exchange of patient information.

## 5. Primary Users and Beneficiaries

The primary users and beneficiaries of this IG are:

* **Patients:** They gain access to clear and concise information about their prescription costs and coverage, empowering them to make informed decisions.
* **Consumer app developers:** They can use the IG to build applications that integrate with various healthcare systems and provide patients with real-time cost and coverage information.
* **Insurers and pharmacy benefit managers (PBMs):** They can use the IG to standardize their responses to consumer RTPBC requests, improving efficiency and interoperability.
* **Medication pricing sources:** They can leverage the IG to provide standardized pricing information to consumer applications, expanding their reach and market access.
