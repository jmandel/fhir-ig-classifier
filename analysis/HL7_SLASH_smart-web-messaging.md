# smart-web-messaging: Analysis

1. **Objectives and Context:**

The SMART Web Messaging IG aims to enable smoother and tighter integration between Electronic Health Records (EHRs) and SMART apps (web applications that can access and interact with EHR data). It seeks to address the limitations of existing approaches like RESTful APIs, which are not ideal for real-time interactions and access to temporary or draft data within the EHR's user interface. The goal is to improve clinical workflows by allowing apps to communicate decisions, access temporary data (like draft orders), and provide user interface suggestions directly to the EHR, enhancing user experience and efficiency.

2. **Improvements over Previous Approaches:**

- **Enhanced UI Integration:** Unlike previous methods like redirecting to an "I'm done" URL, which were one-way and limited in data exchange, SMART Web Messaging uses HTML5's Web Messaging for bidirectional communication, enabling richer interactions between apps and EHRs.
- **Access to Draft Data:** It allows access to the EHR's "scratchpad" (temporary storage for draft orders and data not yet persisted in the FHIR server), which was previously inaccessible via standard APIs. This enables apps to interact with in-progress clinical decisions.
- **Direct UI Influence:** Apps can now directly suggest UI changes in the EHR, like closing the app window or navigating to a specific activity within the EHR, leading to a more integrated and user-friendly experience.

3. **Key Features and Technical Approaches:**

- **HTML5 Web Messaging:** Leverages the browser's `window.postMessage` function for secure, cross-domain communication between embedded apps and the EHR.
- **SMART App Launch Integration:** Integrates with the SMART App Launch framework for authorization and context establishment, using OAuth scopes to grant apps specific permissions for web messaging functionalities.
- **Scratchpad Interactions:** Defines message types for interacting with the EHR's scratchpad, allowing apps to create, read, update, and delete temporary FHIR resources.
- **FHIR Server Interactions:** Offers a `fhir.http` message type to enable apps to interact with the EHR's FHIR server through web messaging, even when direct HTTPS connections are not possible.
- **Activity Catalog:** Provides a standardized set of activities (like `problem-review`, `order-review`) that apps can request the EHR to navigate to, promoting interoperability.

4. **Relation to Healthcare Standards and Regulations:**

- **FHIR:** SMART Web Messaging relies heavily on FHIR (Fast Healthcare Interoperability Resources) for data exchange and representation, aligning with a widely adopted healthcare data standard.
- **OAuth 2.0:** Utilizes OAuth 2.0 for authorization and security, ensuring that apps only access data and functionalities they are permitted to.
- **SMART App Launch:** Builds upon the SMART App Launch framework, a standard for launching and authorizing apps within EHR systems.
- **CDS Hooks:** Designed to be compatible with CDS Hooks, a standard for integrating clinical decision support services into EHR workflows.

5. **Primary Users and Beneficiaries:**

- **Clinicians:** Benefit from improved workflows, reduced clicks, and a more integrated user experience within their EHRs.
- **EHR Developers:** Gain a standardized way to enable richer integrations with SMART apps.
- **App Developers:** Can build apps that offer tighter UI integration and access to previously unavailable EHR functionalities, leading to more powerful and useful clinical applications.
- **Patients (Indirectly):** Potentially benefit from improved clinical decision-making and care coordination facilitated by the enhanced capabilities of SMART apps. 
