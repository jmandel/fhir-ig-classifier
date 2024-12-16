# smart-health-cards-and-links: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?**
    This IG aims to enable individuals to receive, store, and share their health information in a verifiable and tamper-proof digital format. It addresses the problems of lost, damaged, or unauthenticated paper medical records. The context is the need for individuals to have readily available and shareable health information, such as vaccination records or lab results, across different organizations and jurisdictions. The target audience includes patients, healthcare providers, schools, employers, and public health agencies.

2.  **How does this IG improve upon previous approaches?**
    This IG moves away from paper-based records and associated issues of loss, damage, and difficulty in verification. It also deprecates the "QR chunking" protocol, in favor of using single QR codes (when possible) or SMART Health Links.  It simplifies the process of issuing verifiable credentials by removing the need to bind an issuer to a holder ahead of time, using hosted JSON Web Keys for key discovery, and standardizing the way FHIR resources are packaged into verifiable credentials. It also provides a mechanism for revoking individual credentials.

3.  **What are the key features and technical approaches of this IG?**
    Key features include:
    *   **SMART Health Cards:**  Uses JSON Web Signatures (JWS) to create cryptographically signed verifiable credentials. These credentials package FHIR resources into a `Bundle` within a `credentialSubject`. The JWS payload is minified and compressed for QR code representation.
    *   **SMART Health Links:**  Provides a mechanism for sharing larger datasets, dynamic data, or access to FHIR APIs. It uses encrypted cloud storage for data and allows for passcode protection and time-limited access.
    *   **Key Management:** Uses Elliptic Curve keys (P-256) for signing and publishes public keys as JSON Web Key Sets (JWKS) at well-known URLs.
    *   **Revocation:** Allows for individual Health Card revocation using a revocation identifier (`rid`) and Card Revocation Lists (CRLs).
    *   **FHIR Integration:**  Leverages FHIR resources to represent clinical data and provides an operation (`$health-cards-issue`) for requesting Health Cards from FHIR servers.
    *   **Data Minimization:** Focuses on including only the minimum necessary data in each Health Card for privacy.
    *   **QR Code Encoding:** Defines a numeric encoding method for representing JWS payloads in QR codes.
    *   **Deep Linking:** Recommends a format for deep linking to import SMART Health Cards into Health Wallet apps using a secure protocol.

4.  **How does this IG relate to broader healthcare standards and regulations?**
    This IG builds upon the FHIR standard for representing health data and W3C Verifiable Credentials (VC) for creating tamper-proof digital credentials. It is designed to be independent of any specific trust framework, allowing different frameworks to be layered on top. It references standards like IETF RFCs for JSON Web technologies, DEFLATE compression, and X.509 certificates. It also references the HL7 International Patient Summary (IPS) standard for broader clinical information.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
    The primary beneficiaries include:
    *   **Patients:** They gain control over their health data, can easily share it, and can keep a copy on their devices or as a printout.
    *   **Healthcare Providers:** Can receive and verify patient health information efficiently, potentially through integration into EHR systems.
    *  **Organizations:** Such as schools, employers, and public health agencies can verify health information for compliance or data collection.
    *   **Application Developers:** Can build wallet apps, verifier apps, and sharing platforms that leverage these standards.
