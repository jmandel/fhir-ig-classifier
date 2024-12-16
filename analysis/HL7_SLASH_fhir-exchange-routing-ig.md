# fhir-exchange-routing-ig: Analysis

1.  **What is this IG trying to achieve, in what context, and for whom?** This IG aims to standardize how FHIR RESTful interactions are routed through intermediaries (like clearinghouses or HIEs) in healthcare. It acknowledges that many healthcare organizations use intermediaries for various reasons (e.g., scalability, security, operational support) and seeks to enable these intermediary-facilitated exchanges without adding complexity for the originating client. The context is the existing healthcare ecosystem that includes direct point-to-point FHIR interactions as well as interactions that use intermediaries. This IG is for implementers of systems that act as originators, destinations, or intermediaries in FHIR exchanges.

2.  **How does this IG improve upon previous approaches?** This IG provides a unified model that supports both point-to-point FHIR interactions and those involving intermediaries, without requiring the initiating actor to know whether an intermediary is present. It establishes conventions for FHIR exchanges involving intermediaries, which may not have been previously standardized. The IG does not require the originator to address requests to anything other than the destination's public URL. It also defines how intermediaries should passively pass through security tokens and other artifacts. It ensures the destination system's public FHIR service base URL is used in returned FHIR resources.

3.  **What are the key features and technical approaches of this IG?** Key features include:
    *   A passive intermediary approach where the intermediary 'passes through' the interaction, remaining transparent to the originating system.
    *   The use of the destination's public FHIR service base URL by the originator and in returned FHIR resources.
    *   Pass-through security, where trust is established solely between the originator and the destination, with intermediaries passively conveying security tokens.
    *   Support for synchronous and asynchronous FHIR exchanges, including bulk data retrieval using the FHIR Asynchronous Pattern.
    *   Clear guidance on exception handling, with specific HTTP status codes for various error scenarios.
    *   The intermediary is positioned as a reverse proxy.
    *   The IG specifies that the destination server SHALL populate references to itself within FHIR resources it returns (e.g., in the Bundle.entry.fullUrl element) and in HTTP header parameters (e.g., Content-Location within the FHIR Asynchronous Pattern) with its public FHIR service base URL.
    *   Intermediaries SHALL support the JSON source format and SHOULD support the XML source format.
    *   Intermediaries SHALL implement Transport Layer Security (TLS).

4.  **How does this IG relate to broader healthcare standards and regulations?** This IG is built on the FHIR standard and aligns with core FHIR security principles. It references FHIR Security and Privacy guidelines, and may be used with the HL7 / UDAP Security for Scalable Registration, Authentication, and Authorization FHIR Implementation Guide. It is designed to support RESTful FHIR interactions, which are a core part of FHIR interoperability. It also references the IETF standards for HTTP headers, such as rfc7239 and rfc2068, to support additional routing information between intermediary and destination.

5.  **Who are the primary users or beneficiaries of this IG, including patients if applicable?** The primary users are implementers of systems that act as originators, destinations, or intermediaries in FHIR exchanges. Specifically, this includes organizations like payers, providers, hospitals, clearinghouses and HIEs. While patients are not direct users of the technical specifications, they benefit indirectly by having more seamless and secure data exchange between healthcare systems, which can improve care coordination and access to their health information.
