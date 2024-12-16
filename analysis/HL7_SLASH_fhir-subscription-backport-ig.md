# fhir-subscription-backport-ig: Analysis

## 1. Objectives and Context

This Implementation Guide (IG), "Subscription R5 Backport," aims to enable older FHIR servers (specifically R4 and R4B) to implement a key feature from the newer FHIR R5 standard: **topic-based subscriptions.** This allows these older systems to send real-time notifications to clients (other systems or applications) when specific events or data changes happen.

**In simpler terms:** Imagine a hospital system wants to be notified whenever a patient is admitted to a specific department. This IG provides the blueprint for how that notification system can be built using older FHIR technology, ensuring compatibility with the latest standards.

## 2. Improvements over Previous Approaches

The IG explicitly addresses several limitations of the older "query-defined" subscription model used in FHIR versions before R5:

* **Scalability:** The older approach required servers to constantly re-run queries to check for changes, which was inefficient for large datasets and many clients. This IG introduces a more efficient topic-based model.
* **Discoverability:** It was difficult for clients to know what events a server could notify them about. This IG defines a standardized way for servers to advertise their supported topics.
* **Granularity:**  The older model lacked detail about why a notification was triggered. This IG provides more specific event information.
* **Bundling:** Servers could only send one notification per event, leading to many small messages. This IG allows for bundling multiple notifications together.
* **Efficiency:** Clients had to re-query the server for details after each notification. This IG allows servers to include more information in the notification itself.

## 3. Key Features and Technical Approaches

* **Topic-Based Model:** This IG introduces the concept of "Subscription Topics," which define specific events or data changes that trigger notifications. Servers define these topics, and clients subscribe to them.
* **Subscription Resource Extensions:** The IG defines extensions to the existing `Subscription` resource in FHIR R4 and R4B to support the new topic-based model.
* **Notification Bundles:** Notifications are sent as FHIR Bundles, containing status information and, optionally, the actual resources that triggered the notification.
* **Payload Types:**  The IG defines three payload types for notifications: `empty` (no data), `id-only` (resource identifiers), and `full-resource` (complete resources). This balances security concerns with client needs.
* **Channels:** The IG supports multiple communication channels for notifications, including REST-hook (HTTP), Websockets, Email, and FHIR Messaging.
* **Error Handling:**  The IG provides mechanisms for both servers and clients to detect and recover from errors in notification delivery.

## 4. Relation to Healthcare Standards and Regulations

While the IG does not explicitly mention specific healthcare regulations, its focus on secure notification of sensitive patient data is aligned with the general principles of healthcare data privacy and security, such as HIPAA in the US. The use of different payload types and secure communication channels (e.g., HTTPS) helps address these concerns.

## 5. Primary Users and Beneficiaries

* **Healthcare Application Developers:** The primary audience for this IG is developers building healthcare applications that need to receive real-time updates from FHIR servers.
* **Healthcare Providers:** By enabling more efficient and reliable data exchange, this IG can indirectly benefit healthcare providers by improving the timeliness and accuracy of information they receive.
* **Patients:**  While patients are not direct users of this IG, they can benefit from improved healthcare coordination and decision-making enabled by real-time data sharing. For example, a patient's primary care physician could be automatically notified when the patient is discharged from the hospital. 
