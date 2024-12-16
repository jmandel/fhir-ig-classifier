# ITI.DSUBm: Analysis

1. **What is this IG trying to achieve, in what context, and for whom? Explain its objectives in simple terms.**
   This IG, ITI.DSUBm, aims to define a standard way for mobile applications and other RESTful systems to subscribe to and receive notifications about changes to healthcare documents and related resources. It provides a mechanism for these systems to be alerted when new documents, folders, or submission sets are created, updated, or deleted, or when their status changes, allowing them to react in real-time. The context is a RESTful environment where systems need to be notified of document-related events. The target audience is developers of mobile health apps and other RESTful systems that need to receive document-related notifications.

2. **How does this IG improve upon previous approaches? (Use only information from the input files; avoid speculation.)**
    This IG builds upon the existing IHE DSUB profile, adding RESTful search capabilities for subscriptions and subscription topics. It also leverages FHIR R4 and aims to be compliant with Subscriptions R5 Backport, offering more granular control over subscriptions and notifications, including filtering and payload content options. The IG introduces specific profiles for different subscription types (DocumentReference, SubmissionSet, and Folder) with options for minimal update, full events, and basic folder subscription. It also defines specific audit events for different parts of the subscription process.

3. **What are the key features and technical approaches of this IG?**
    Key features include:
    - Use of FHIR R4 and compliance with the Subscriptions R5 Backport specification.
    - Definition of specific FHIR profiles for Subscriptions, using `Basic` resources as SubscriptionTopics and `Parameters` as SubscriptionStatus.
    - Support for different subscription types based on DocumentReference, SubmissionSet and Folder resources, with options for minimal update, full events, and basic folder subscriptions.
    - Definition of RESTful transactions (ITI-110, ITI-111, ITI-112, ITI-113, ITI-114) for managing subscriptions, publishing events, and receiving notifications.
    - Use of a push mechanism for notifications with optional heartbeat and handshake.
    - Definition of specific search parameters for Subscription and SubscriptionTopic resources.
    - Use of Bundle resources to transmit notifications and publish events.
    - Support for both JSON and XML encoding.
    - Focus on security, including support for ATNA, IHE-IUA, and SMART-app-launch.
    - Definition of audit events for each transaction.

4. **How does this IG relate to broader healthcare standards and regulations?**
   This IG is an IHE profile that builds on HL7 FHIR and is intended to be used in conjunction with other IHE profiles, such as MHD and XDS. It leverages FHIR's RESTful architecture and data formats. It also makes recommendations for security using ATNA, IHE-IUA or SMART-app-launch. The IG aims to align with the FHIR Subscription framework, providing a standard method for subscribing to and receiving notifications about healthcare data. It also addresses the requirements of mobile applications to receive these notifications in a reliable way.

5. **Who are the primary users or beneficiaries of this IG, including patients if applicable?**
   The primary users are developers of mobile health applications, backend systems, and other RESTful applications that need to be notified of document-related events in healthcare systems. Beneficiaries include healthcare providers who can be alerted to new information, and ultimately, patients who benefit from more timely and efficient access to their healthcare data via these systems. While patients are not direct users of the IG, they benefit from the improved communication between systems enabled by this profile.
