File: repos/HL7_SLASH_smart-health-cards-and-links/input/fsh/aliases.fsh

// Aliases used throughout the IG

---

File: repos/HL7_SLASH_smart-health-cards-and-links/input/pagecontent/cards-changelog.md

Below is a log of changes to the SMART Health Cards specification prior to it becoming an HL7 standard. The version numbers below were assigned by the Verifiable Credential Information coalition (VCI).

**VCI 1.4.0**

Deprecate "additional" top-level types like `#covid19`, `#laboratory`, and `#immunization` in favor of classifying cards based on their contents.

<p></p>

**VCI 1.3.0**

* Deprecate "QR chunking" protocol, which has not seen wide adoption in real products and does not support a clean UX for presentation. For SHCs that need to be presented as QRs, we recommend limiting payload size to fit in a single QR (when possible), or else considering [SMART Health Links](links-specification.html).
* Ensure that SHCs can be used for patient summary documents
  * any FHIR `Bundle.type` is allowed
* Update introduction to reflect current status

<p></p>

**VCI 1.2.3**

Clarify that payload size restrictions apply when SHCs are intended for presentation as QRs

<p></p>

**VCI 1.2.2**

Update examples to include 3-dose COVID vaccination histories

<p></p>

**VCI 1.2.1**

Documented optional `exp` claim for expiration

<p></p>

**VCI 1.2.0**

Specified Health Card revocation

<p></p>

**VCI 1.1.1**

Added verifier guidance to ignore unrecognized VC types

<p></p>

**VCI 1.1.0**

Updated TLS requirements for issuer key set

<p></p>

**VCI 1.0.2**

Updated links to the HL7 Implementation Guide

<p></p>

**VCI 1.0.1**

Clarify FHIR API behavior when `$health-cards-issue` doesn't return results

<p></p>

**VCI 1.0.0**

No functional change from 1.0.0-rc; added documentation links and re-worked introduction.

<p></p>

**VCI 1.0.0-rc**

No change from 0.4.5; applying tag for connectathon release

<p></p>

**VCI 0.4.5**

Clarify mapping into VC Data Model, and strip "fixed" fields from payload

<p></p>

**VCI 0.4.4**

Resource.meta is allowed in one special case

<p></p>

**VCI 0.4.3**

Document CORS expectation for `.well-known/jwks.json`

<p></p>

**VCI 0.4.2**

Replace `iat` with `nbf` in JWT payload encoding

<p></p>

**VCI 0.4.1**

Added optional `x5c` in JWKS

<p></p>

**VCI 0.3.1**

Add optional `vcIndex` param on `$health-cards-issue` response's `resourceLink`

<p></p>

**VCI 0.3.0**

Rename `$HealthWallet.issueVc` to `$health-cards-issue`

<p></p>

**VCI 0.2.0**

Chunk-based QR representation of larger Health Cards (JWS > 1195 characters). Defines `shc:/<n>/<c>/` prefix, where `<n>` represents a chunk number and `<c>` represents the total chunk count.

<p></p>

**VCI 0.1.1**

Added `shc:/` prefix for QR representations.

<p></p>

**VCI 0.1.0**

Significant API overhaul to reduce scope and simplify dependencies. See [PR#64](https://github.com/smart-on-fhir/health-cards/pull/64) for details.

* Remove user DIDs from the picture. They were already optional, and in some of our most important flows unlikely to be available.

* Remove the need to bind an issuer to a holder ahead of time. SMART on FHIR clients can now call $HealthWallet.issueVc without having to call $HealthWallet.connect first

* Update $HealthWallet.issueVc response to use `valueString` (avoids the need for base64 encoding in the FHIR Parameters resource)

* Replace DID-based key discovery with hosted JSON Web Key. Establish the requirement that Issuers host `.well-known/jwks.json`

* Define requirements for keeping Health Cards' JWS representation small (small enough to fit in a QR code) -- including size limits and a method for splitting a Health Card into a Health Card Set when the size limit cannot be met

* Document process for embedding Health Cards in QR codes

* Update file extension and MIME type for representing Health Cards as downloadable files (`.smart-health-card` and `application/smart-health-card`)

* Remove SIOP flow For Verifier::Holder communications

<p></p>

**VCI 0.0.12**

Add optional `resourceLink` response parameter on `$HealthWallet.issueVc`

<p></p>

**VCI 0.0.11**

Change canonical domain to https://smarthealth.cards (from https://healthwallet.cards)

<p></p>

**VCI 0.0.10**

Add detail on how to recognize encryption keys, signing keys, and linked domains in a DID Document

<p></p>

**VCI 0.0.9**

Add discovery params to `.well-known/smart-configuration`, allowing SMART on FHIR servers to advertise Health Cards capabilities

<p></p>

**VCI 0.0.8**

* Clarify that `.fhir-backed-vc` files can contain JWS- or JWE-based VCs
* Update JWS signature algorithm to `ES256`

<p></p>

**VCI 0.0.7**

Simplify demographics recommendations with one uniform "minimum set"

<p></p>

**VCI 0.0.6**

Updated encryption to use `"alg": "ECDH-ES"` (with `"enc": "A256GCM"`)

<p></p>

**VCI 0.0.5**

Updated encryption to use `"enc": "A256GCM"`

<p></p>

**VCI 0.0.4**

* Added links to overview / intro video
* Updated SIOP request to identify requested credentials by type URL (`https://healthwallet.cards#covid19` instead of `health-wallet-covid19-card`)

<p></p>

**VCI 0.0.3**

* Update `.well-known` DID links and file URL to match latest spec

<p></p>

**VCI 0.0.2**

* Use `valueUri` (which exists in DSTU2+) for FHIR datatypes rather than `valueUrl` (which was introduced after DSTU2)
* Added `encryptForKeyId` parameter to `$HealthWallet.issueVc` operation, defaulting to absent == no encryption
* Updated example VC JWT representations to ensure that the `.vc.credentialSubject` contains all subject-specific claims
* Defined `OperationOutcome` payload for failed `$HealthWallet.issueVc` operations

<p></p>
<p></p>

---

File: repos/HL7_SLASH_smart-health-cards-and-links/input/pagecontent/cards-credential-modeling.md

# Verifiable Clinical Information in FHIR

This document describes how clinical information, modeled in [FHIR][fhir], can be presented in a form based on [W3C Verifiable Credentials][vc] (VC).

## Content Definition

Any time we want to present verifiable clinical information, we must first make some use-case-specific decisions:

1. Define a set of required and optional **FHIR content resources** (e.g., `Immunization` or `Observation`) that must be packaged and presented together
2. Decide how to bind these FHIR content resources to a person's external identity, via **FHIR identity resources** (e.g., `Patient`)

Once we make these decisions, we can construct a VC with a **credential subject** as follows:

* `credentialSubject` with these top level elements:
    * `fhirVersion`: a string representation of the semantic FHIR version the content is represented in (e.g. `1.0.*` for DSTU2, `4.0.*` for R4, where `*` is a number, not a literal asterisk)
    * `fhirBundle`: a FHIR `Bundle` resource that includes all required FHIR resources (content + identity resources). For the [`Bundle.type`](http://hl7.org/fhir/bundle-definitions.html#Bundle.type), implementers should choose `collection` unless a more specific type applies (e.g. `document`).



Resulting payload for the `"credentialSubject"`:

```js
{
  "...",
  "fhirVersion": "4.0.1",
  "fhirBundle": {
    "resourceType": "Bundle",
    "type": "collection",
    "entry": [
      "..."
    ]
}
```

> Below we focus on the Health Card use case, but the same approach to forming VCs out of FHIR can be applied to other use cases, too.

## Modeling a "Health Card"

A "Health Card" is a VC that conveys results about one discrete topic -- **in this example, a COVID-19 immunization card**, encompassing details about doses given. Other cards could convey details of a RT-PCR test for COVID-19, a clinical diagnosis of COVID-19, TDAP vaccination, and so on.

According to the procedure above, we start with decisions about FHIR content resources and identity resources:

* Which **FHIR content resources** need to be conveyed in a package? For the immunization example, we'd need:
    * `Immunization` with details about a first dose (product, date of administration, and administering provider)
    * `Immunization` with details about a second dose (product, date of administration, and administering provider)

* What **FHIR identity resources** do we need to bind the FHIR content resources to an external identity system? We might eventually define use-case-specific requirements, but we want to start with a recommended set of data elements for inclusion using the FHIR `Patient` resource. Resources MAY include an overall "level of assurance" indicating whether these demographic elements have been verified.

    * Best practices
        * Verifiers should not store identity data conveyed via VC, and should delete data as soon as they are no longer needed for verification purposes
        * Verifiers should not expect all elements in the VC to exactly match their own records, but can still use elements conveyed in the VC.

## Mapping into the W3C VC Data Model

To create a structure matching the W3C Verifiable Credential [JSON-LD Syntax](https://www.w3.org/TR/vc-data-model/#json-ld) from a SMART Health Card JWS:

1. De-compress the JWS payload

2. Add to the `.vc` object:

   ```
   "@context": [
     "https://www.w3.org/2018/credentials/v1",
     {
       "@vocab": "https://smarthealth.cards#",
       "fhirBundle": {
         "@id": "https://smarthealth.cards#fhirBundle",
         "@type": "@json"
       }
     }
   ]
   ```

3. Prepend to the `.vc.type` array: `"VerifiableCredential"`

4. Process the payload according to [JWT Decoding Rules](https://www.w3.org/TR/vc-data-model/#jwt-decoding)

### Health Card Examples

* [Example VC payloads](https://smarthealth.cards/examples/)

[vc]: https://w3c.github.io/vc-data-model/
[fhir]: https://hl7.org/fhir


---

File: repos/HL7_SLASH_smart-health-cards-and-links/input/pagecontent/cards-examples.md

### Example Resources

#### Example 0: Three COVID-19 Vaccine Doses

- [example-00-a-fhirBundle.json](example-00-a-fhirBundle.json)
- [example-00-b-jws-payload-expanded.json](example-00-b-jws-payload-expanded.json)
- [example-00-c-jws-payload-minified.json](example-00-c-jws-payload-minified.json)
- [example-00-d-jws.txt](example-00-d-jws.txt)
- [example-00-e-file.smart-health-card](example-00-e-file.smart-health-card)
- [example-00-f-qr-code-numeric-value-0.txt](example-00-f-qr-code-numeric-value-0.txt)
- [example-00-g-qr-code-0.svg](example-00-g-qr-code-0.svg)


#### Example 1: Three COVID-19 Vaccine Doses

Signed with an issuer key that includes x5c claim. Useful for testing code paths that rely on an X.509-based trust framework.

- [example-01-a-fhirBundle.json](example-01-a-fhirBundle.json)
- [example-01-b-jws-payload-expanded.json](example-01-b-jws-payload-expanded.json)
- [example-01-c-jws-payload-minified.json](example-01-c-jws-payload-minified.json)
- [example-01-d-jws.txt](example-01-d-jws.txt)
- [example-01-e-file.smart-health-card](example-01-e-file.smart-health-card)
- [example-01-f-qr-code-numeric-value-0.txt](example-01-f-qr-code-numeric-value-0.txt)
- [example-01-g-qr-code-0.svg](example-01-g-qr-code-0.svg)


#### Example 2: International Patient Summary (IPS)

In this example, the data [minimization process](cards-specification.html#card-content-minified) was not applied because the payload is too big to fit in a QR.

- [example-02-a-fhirBundle.json](example-02-a-fhirBundle.json)
- [example-02-b-jws-payload-expanded.json](example-02-b-jws-payload-expanded.json)
- [example-02-c-jws-payload-minified.json](example-02-c-jws-payload-minified.json)
- [example-02-d-jws.txt](example-02-d-jws.txt)
- [example-02-e-file.smart-health-card](example-02-e-file.smart-health-card)


#### Example 3: Revoked COVID-19 Credential

Useful for testing code paths that evaluate the revocation status of a JWS.

- [example-03-a-fhirBundle.json](example-03-a-fhirBundle.json)
- [example-03-b-jws-payload-expanded.json](example-03-b-jws-payload-expanded.json)
- [example-03-c-jws-payload-minified.json](example-03-c-jws-payload-minified.json)
- [example-03-d-jws.txt](example-03-d-jws.txt)
- [example-03-e-file.smart-health-card](example-03-e-file.smart-health-card)
- [example-03-f-qr-code-numeric-value-0.txt](example-03-f-qr-code-numeric-value-0.txt)
- [example-03-g-qr-code-0.svg](example-03-g-qr-code-0.svg)

---

File: repos/HL7_SLASH_smart-health-cards-and-links/input/pagecontent/cards-specification.md

## Overview

### Health Cards Conceptual Model

<div>
<p></p>
<figure class="figure">
<figcaption class="figure-caption"><strong><i>Health Cards Conceptual Model</i></strong></figcaption>
  <br />
  <p>
  <img src="health-cards-conceptual.png" style="float:none; width:700px">  
  </p>
</figure>
</div>
<p></p>

_Adapted from Figure 1 of the [W3C Verifiable Credentials specification](https://www.w3.org/TR/vc-data-model)_

<p></p>

* **Issuer** (e.g., a lab, pharmacy, healthcare provider, EHR, public health department, or immunization information system) generates verifiable credentials
* **Holder** stores credentials and presents them at will
* **Verifier** receives credentials from holder and ensures they are properly signed

<p></p>

### Design Goals

* Support **end-to-end workflow** where users receive and present relevant healthcare data
* Enable workflow with **open standards**
* Support strong **cryptographic signatures**
* Enable **privacy preserving** data presentations for specific use cases

<p></p>

### Approach: Start Small -- Think Big

We enable Health Cards by defining building blocks that can be used across healthcare. The core building block allows us to aggregate data into meaningful sets, signed by an issuer, and stored/presented by a consumer as needed. The broader set of use cases should eventually include:

* Managing an immunization record that can be shared with schools or employers, or for travel
* Sharing verifiable health history data with clinical research studies
* Sharing voluntary data with public health agencies
* Sharing questionnaire responses with healthcare providers

When we launched the project, our short-term definition of success included:

* Represent "Health Cards" in a "Health Wallet", focusing on COVID-19 status
* Ensure that each role (issuer, holder, app) can be implemented by any organization following open standards, provided they sign on to the relevant trust framework

<p></p>

### User Experience and Data Flow

* **User Receives** a Health Card from an Issuer. The Health Card is a signed data artifact that the user can obtain through any of these methods:
    * issuer offers a Health Card on paper or PDF, including a QR code (required method)
    * issuer offers a Health Card for download as a `.smart-health-card` file (required method)
    * issuer hosts a Health Card for [FHIR API access](OperationDefinition-patient-i-health-cards-issue.json) via a compatible Health Wallet application. This workflow includes a SMART on FHIR authorization step with an Issuer, where the user grants read access to any resources that will be present in Health Cards (e.g., `Patient`, `Immunization`, `Observation`, `DiagnosticReport`)
* **User Saves** a Health Card, whether on paper or digitally.
* **User Presents** a Health Card to a Verifier. Presentation includes explicit user opt-in and approval, and may involve displaying a QR code, sharing a file, or using an on-device SDK (e.g., for verifier-to-holder app-to-app communications)

<p></p>

### Trust

Anyone can _issue_ Health Cards, and every verifier can make its own decision about which issuers to _trust_. A "trust framework" can help verifiers to externalize these decisions and drive toward more consistent practices. The SMART Health Cards IG is designed to operate independent of any trust framework, while allowing trust frameworks to be layered on top. We anticipate such frameworks will emerge to meet different jurisdictional and use case driven requirements. In all cases, verifiers can discover public keys associated with an issuer via `/.well-known/jwks.json` URLs.

<p></p>

### Privacy

<p></p>

#### Data Minimization

It is an explicit design goal to let the holder **only disclose a minimum amount of information** to a verifier. The information _required_ to be disclosed is use-case dependent, and -- particularly in a healthcare setting -- it can be difficult for lay people to judge which data elements are necessary to be shared.

The granularity of information disclosure will be at the level of an entire credential (i.e., a user can select "which cards" to share from a Health Wallet, and each card is shared wholesale). The credentials are designed to only include the minimum information necessary for a given use case.

<p></p>

#### Granular Sharing

Data holders should have full control over the data they choose to share for a particular use-case. Since Health Cards are signed by the issuer and cannot be altered later, it is important to ensure that Health Cards are created with granular sharing in mind. Therefore, issuers SHOULD only combine distinct data elements into a Health Card when a Health Card FHIR profile requires it.

Commonly, Health Cards will be created to convey information about a specific disease. In such cases, Health Card FHIR Profiles SHOULD only include data that need to be conveyed together. (e.g., immunizations for different diseases should be kept separate. Immunizations and lab results should be kept separate. Immunizations and immunization exemption status should be kept separate.)

In other cases, Health Cards may be created to convey a broader set of clinical information, such as a patient summary document that can be shared in a clinical setting. In these cases, standard FHIR profiles such as [International Patient Summary](https://hl7.org/fhir/uv/ips) should guide the decision about which data to include.

<p></p>

#### Future Considerations

If we identify *optional* data elements for a given use case, we might incorporate them into credentials by including a cryptographic hash of their values instead of embedding values directly. Longer term we can provide more granular options using techniques like zero-knowledge proofs, or by allowing a trusted intermediary to summarize results in a just-in-time fashion.

<p></p>

### Data Model for Specific Use Cases

This framework defines a general approach to **representing demographic and clinical data in FHIR**, outlined in [Modeling Verifiable Credentials in FHIR](cards-credential-modeling.html).

The data model for the Health Card payload at `.vc.credentialSubject.fhirBundle` is specific to a given use case (e.g., a COVID-19 immunization card). These use case-specific details are not included as part of this framework. Instead, they are described in use case-specific FHIR Implementation Guides:

<table class="grid">
    <tbody>
	  <tr>
		<th><b>Use Case</b></th>
		<th><b>FHIR Implementation Guide</b></th>
  	  </tr>
	  <tr>
		<td>Vaccination records and laboratory testing status for infectious diseases</td>
		<td><a href="https://build.fhir.org/ig/HL7/fhir-shc-vaccination-ig">SMART Health Cards: Vaccination & Testing Implementation Guide</a>/</td>
  	  </tr>
  	  <tr>
		<td>Health insurance card information including payer, beneficiary and coverage details</td>
		<td><a href="https://hl7.org/fhir/us/insurance-card">CARIN Digital Insurance Card Implementation Guide</a>/</td>
  	  </tr>
	</tbody>
  </table>
<p></p>


<p></p>

## Protocol Details

### Generating and resolving cryptographic keys

The following key types are used in the Health Cards Framework:

* Elliptic Curve keys using the P-256 curve

<p></p>

#### Signing *Health Cards*

* Issuers sign Health Card VCs (Verifiable Credentials) with a signing key (private key)
* Issuer publish the corresponding public key (public key) at `/.well-known/jwks.json`
* Wallets and Verifiers use the public key to verify Issuer signatures on Health Cards

<p></p>

#### Determining keys associated with an issuer

Each public key used to verify signatures is represented as a JSON Web Key (see [RFC7517](https://tools.ietf.org/html/rfc7517)), with some of its properties encoded using base64url (see section 5 of [RFC4648](https://tools.ietf.org/html/rfc4648#section-5)):

* SHALL have `"kty": "EC"`, `"use": "sig"`, and `"alg": "ES256"`
* SHALL have `"kid"` equal to the base64url-encoded SHA-256 JWK Thumbprint of the key (see [RFC7638](https://tools.ietf.org/html/rfc7638))
* SHALL have `"crv": "P-256`, and `"x"`, `"y"` equal to the base64url-encoded values for the public Elliptic Curve point coordinates (see [RFC7518](https://tools.ietf.org/html/rfc7518#section-6.2))
* SHALL NOT have the Elliptic Curve private key parameter `"d"`
* If the issuer has an X.509 certificate for the public key, SHALL have `"x5c"` equal to an array of one or more base64-encoded (_not_ base64url-encoded) DER representations of the public certificate or certificate chain (see [RFC7517](https://tools.ietf.org/html/rfc7517#section-4.7)).
The public key listed in the first certificate in the `"x5c"` array SHALL match the public key specified by the `"crv"`, `"x"`, and `"y"` parameters of the same JWK entry.
If the issuer has more than one certificate for the same public key (e.g. participation in more than one trust community), then a separate JWK entry is used for each certificate with all JWK parameter values identical except `"x5c"`.

Issuers SHALL publish their public keys as JSON Web Key Sets (see [RFC7517](https://tools.ietf.org/html/rfc7517#section-5)), available at `<<iss value from JWS>>` + `/.well-known/jwks.json`, with [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) enabled, using TLS version 1.2 following the IETF [BCP 195](https://www.rfc-editor.org/info/bcp195) recommendations or TLS version 1.3 (with any configuration).

The URL at `<<iss value from JWS>>` SHALL use the `https` scheme and SHALL NOT include a trailing `/`. For example, `https://smarthealth.cards/examples/issuer` is a valid `iss` value (`https://smarthealth.cards/examples/issuer/` is **not**).

**Signing keys** in the `.keys[]` array can be identified by `kid` following the requirements above (i.e., by filtering on `kty`, `use`, and `alg`).

For example, the following is a fragment of a `jwks.json` file with one signing key:
```json
{
  "keys":[
    {
      "kty": "EC",
      "kid": "_IY9W2kRRFUigDfSB9r8jHgMRrT0w4p5KN93nGThdH8",
      "use": "sig",
      "alg": "ES256",
      "crv": "P-256",
      "x": "7xbC_9ZmFwKqOHpwX6-LnlhIh5SMIuNwl0PW1yVI_sk",
      "y": "7k2fdIRNDHdf93vL76wxdXEPtj_GiMTTyecm7EUUMQo",
    }
  ]
}
```

<p></p>

#### Certificates

X.509 certificates can be used by issuers to indicate the issuer's participation in a PKI-based trust framework.

If the Verifier supports PKI-based trust frameworks and the Health Card issuer includes the `"x5c"` parameter in matching JWK entries from the `.keys[]` array,
the Verifier establishes that the issuer is trusted as follows:

1. Verifier validates the leaf certificate's binding to the Health Card issuer by:
    * matching the `<<iss value from JWS>>` to the value of a `uniformResourceIdentifier`
    entry in the certificate's Subject Alternative Name extension
    (see [RFC5280](https://tools.ietf.org/html/rfc5280#section-4.2.1.6)), and
    * verifying the signature in the Health Card using the public key in the certificate.
2. Verifier constructs a valid certificate path of unexpired and unrevoked certificates to one of its trusted anchors
 (see [RFC5280](https://tools.ietf.org/html/rfc5280#section-6)).

<p></p>

#### Key Management

Issuers SHOULD generate new signing keys at least annually.

When an issuer generates a new key to sign Health Cards, the public key SHALL be added to the
issuer's JWK set in its `jwks.json` file. Retired private keys that are no longer used to sign Health Cards SHALL be destroyed.
Older public key entries that are needed to validate previously
signed Health Cards SHALL remain in the JWK set for as long as the corresponding Health Cards
are clinically relevant. However, if a private signing key is compromised, then the issuer SHALL immediately remove the corresponding public key from the JWK set in its `jwks.json` file and request revocation of all X.509 certificates bound to that public key; verifiers will from then on reject all Health Cards signed using that key.

<p></p>

#### Revocation

Individual Health Cards MAY be revoked using a revocation identifier property `rid` encoded in the `vc` claim of the JWT. This should be a short identifier, meaningless to the verifiers; the only constraint is that the identifier SHALL use the base64url alphabet (but doesn’t need to be base64url encoded, see section 5 of [RFC4648](https://tools.ietf.org/html/rfc4648#section-5)) and be no longer than 24 characters. Issuers MAY use application-specific user identifiers for this purpose, but since these could be publicly listed in revocation lists, issuers SHOULD use a one-way transformation of the data combined with enough entropy to prevent reversal. It is RECOMMENDED to use the base64url encoding of the first 64 bits of the output of HMAC-SHA-256 (as specified in [RFC4868](https://tools.ietf.org/html/rfc4868)) on the user identifier using a 256-bit random secret key concatenated with the `<<kid>>`; i.e.,

```
rid = base64url(hmac-sha-256(secret_key || <<kid>>, user_id)[1..64]).
```
The revocation HMAC secret can be generated once and reused for all the issuer keys and issued Health Cards. If an issuer chooses to change the secret, old values need to be remembered in order to re-calculate previously generated `rid`.

To enable per-card revocation, the issuer creates, for each of its keys, a JSON Card Revocation List (CRL) file with the following content:
```json
{
"kid": "<<kid>>",
"method": "rid",
"ctr": "<<ctr>>",
"rids": [...]
}
```

where

* `"<<kid>>"` is the ID of the corresponding issuer key,
* `"rid"` identifies the revocation method specified in this framework; legacy cards can use different methods specified in external revocation profiles,
* `"<<ctr>>"` is a counter indicating how many times this file has been updated; initial value is 1,
*  `rids` is an array of revoked cards' identifiers `rid` values. These values are represented as strings from the base64url alphabet, plus an optional timestamp suffix consisting of `.` followed by a numerical timestamp (e.g., `.1636977600`)

To revoke a Health Card issued under the key `"<<kid>>"`, an issuer adds its revocation identifier to the `rids` array of the corresponding `<<kid>>`'s revocation file. Since an issuer might want to invalidate a series of Health Cards associated with the user up to a certain time, the `rid` might be followed by a separator `.` a timestamp (encoded as the number of seconds from 1970-01-01T00:00:00Z UTC, as specified by [RFC7519](https://tools.ietf.org/html/rfc7519)). After updating the `rids` array (with one or more items), the `<<ctr>>` is incremented.

As an example, the `rids` array `["AQPCj4wwk6Mt", "lHKzqFUMjhs.1636977600"]` marks as revoked any Health Cards with `rid` equal to `AQPCj4wwk6Mt` and Health Cards with `rid` equal to `lHKzqFUMjhs` issued before November 15, 2021 12:00:00 PM GMT.

The per-key revocation file is made available at `https://"<<Issuer URL>>"/.well-known/crl/"<<kid>>".json`, where

* `"<<Issuer URL>>"` is the issuer URL listed in the Health Card,
* `"<<kid>>"` is the key ID with which the Health Card was signed.

Issuers supporting this revocation method SHALL include in their published JWK set, for each key, a `crlVersion` field encoding the update counter "<<ctr>>" for the corresponding revocation file.

If the `crlVersion` is present in the Issuer's JWK for key `<<kid>>`, Verifiers SHALL

* Download the `https://"<<Issuer URL>>"/.well-known/crl/"<<kid>>".json` file or use a cached version if the counter value has not changed since the last retrieval,
* Reject the Health Card if the calculated `rid` is contained in the CRL's `rids` array and (if a timestamp suffix is present) the Health Card’s `nbf` is value is before the timestamp.

Revocation of Health Cards without a `rid` field (including all pre-v1.2.0 ones) can be done using external mechanisms to calculate a dynamic `rid` value based on the JWS’s content.

If individual revocation of SMART Health Cards is not possible, then an issuer SHOULD revoke its issuing key, and allow users to obtain new Health Cards; limiting the validity period of a key helps to mitigate the adverse effects of this situation. See the [revocation FAQ](frequently-asked-questions.html#what-are-methods-for-revoking-smart-health-cards) for more details.

<p></p>

### Issuer Generates Results

When the issuer is ready to generate a Health Card, the issuer creates a FHIR payload and packs it into a corresponding Health Card VC (or Health Card Set).


<div>
<figure class="figure">
<figcaption class="figure-caption"><strong><i>Issuer Generates a Health Card</i></strong></figcaption>
  <br />
  <p>
  <img src="issuer-generates-results.png" style="float:none; width:500px">  
  </p>
</figure>
</div>

<p></p>

#### Health Cards are encoded as Compact Serialization JSON Web Signatures (JWS)

The VC structure (scaffold) is shown in the following example. The Health Cards framework serializes VCs using the compact JWS serialization, where the payload is a compressed set of JWT claims (see [Appendix 3 of RFC7515](https://tools.ietf.org/html/rfc7515#appendix-A.3) for an example using ECDSA P-256 SHA-256, as required by this specification). Specific encoding choices ensure compatibility with standard JWT claims, as described at [https://www.w3.org/TR/vc-data-model/#jwt-encoding](https://www.w3.org/TR/vc-data-model/#jwt-encoding).

The `type`, and `credentialSubject` properties are added to the `vc` claim of the JWT. The `type` values are defined in [Credential Types](https://terminology.smarthealth.cards/CodeSystem-health-card.html); the `https://smarthealth.cards#health-card` SHALL be present; other types SHOULD be included when they apply. Verifiers and other entities processing SMART Health Cards SHALL ignore any additional `type` elements they do not understand. The `issuer` property is represented by the registered JWT `iss` claim and the `issuanceDate` property is represented by the registered JWT `nbf` ("not before") claim (encoded as the number of seconds from 1970-01-01T00:00:00Z UTC, as specified by [RFC7519](https://tools.ietf.org/html/rfc7519)). Hence, the overall JWS payload matches the following structure (before it is [minified and compressed](#health-cards-are-compact)):

```json
{
  "iss": "<<Issuer URL>>",
  "nbf": 1591037940,
  "vc": {
    "type": [
      "https://smarthealth.cards#health-card",
      "<<Additional Types>>",
    ],
    "credentialSubject": {
      "fhirVersion": "<<FHIR Version, e.g. '4.0.1'>>",
      "fhirBundle":{
        "resourceType": "Bundle",
        "type": "collection",
        "entry": ["<<FHIR Resource>>", "<<FHIR Resource>>", "..."]
      }
    }
  }
}
```

<p></p>

#### Health Cards are Compact

Issuers SHALL ensure that the following constraints apply at the time of issuance:

* JWS Header
    * header includes `alg: "ES256"`
    * header includes `zip: "DEF"`
    * header includes `kid` equal to the base64url-encoded (see section 5 of [RFC4648](https://tools.ietf.org/html/rfc4648#section-5)) SHA-256 JWK Thumbprint of the key (see [RFC7638](https://tools.ietf.org/html/rfc7638))

* JWS Payload
    * payload is minified (i.e., all optional whitespace is stripped)
    * payload is compressed with the DEFLATE (see [RFC1951](https://www.ietf.org/rfc/rfc1951.txt)) algorithm before being signed (note, this should be "raw" DEFLATE compression, omitting any zlib or gz headers)

<div style="margin-left:40px">
<a name="card-content-minified"></a>
<h5>Payload content minified for QR codes</h5>
For Health Cards that will be directly represented as QR codes, issuers SHALL ensure that content is minified as follows:
<p></p>
<div style="margin-left:20px">
JWS payload `.vc.credentialSubject.fhirBundle` is created...
  <ul>
    <li>without `Resource.id` elements</li>
    <li>without `Resource.meta` elements (or if present, `.meta.security` is included and no other fields are included)</li>
    <li>without `DomainResource.text` elements</li>
    <li>without `CodeableConcept.text` elements</li>
    <li>without `Coding.display` elements</li>
    <li>with `Bundle.entry.fullUrl` populated with short `resource`-scheme URIs (e.g., `{"fullUrl": "resource:0"}`)</li>
    <li>with `Reference.reference` populated with short `resource`-scheme URIs (e.g., `{"patient": {"reference": "resource:0"}}`)</li>
  </ul>
  </div>
</div>

For details about how to represent a Health Card as a QR code, [see below](#health-cards-as-qr-codes).

<p></p>

### User Retrieves Health Cards

In this step, the user learns that a new Health Card is available (e.g., by receiving a text message or email notification, or by an in-wallet notification for FHIR-enabled issuers.)

<p></p>

#### via File Download

To facilitate this workflow, the issuer can include a link to help the user download the credentials directly, e.g., from a login-protected page in the Issuer's patient portal. The file SHALL be served with a `.smart-health-card` file extension and SHALL be provided with a MIME type of `application/smart-health-card` (e.g., web servers SHALL include `Content-Type: application/smart-health-card` as an HTTP Response containing a Health Card), so the Health Wallet app can be configured to recognize this extension and/or MIME type. Contents should be a JSON object containing an array of Verifiable Credential JWS strings:

```json
{
  "verifiableCredential": [
    "<<Verifiable Credential as JWS>>",
    "<<Verifiable Credential as JWS>>"
  ]
}
```

<p></p>

#### via QR (Print or Scan)

Alternatively, issuers can represent an individual JWS inside a Health Card available **as a QR code** (for instance, printed on a paper-based vaccination record or after-visit summary document). See [details](#health-cards-as-qr-codes).

Finally, the Health Wallet asks the user if they want to save any/all of the supplied credentials.

<p></p>

#### via "Deep Link"

For a user to import one or more SMART Health Cards to their Health Wallet with one tap or click, issuers can display app-specific "deep links". These are available on most modern operating systems and will open in a native app if the respective app is installed on the computer or smartphone.

Apps can define their own deep link syntax. However, for consistency we recommend Health Wallets support the following format, which re-uses the JSON format defined for [file download](#via-file-download):

```
<<app-specific deep link base URL>>#{"verifiableCredential":["<<Verifiable Credential as JWS>>"<<','0+ more JWS>>]}
```

To follow this recommendation, deep link base URLs SHALL use a secure protocol (e.g., `https://`), and SHOULD end with `/SMARTHealthCard/`.
   
Note that the recommended format serves the JWS content in a `#` fragment to ensure that no data is transmitted to the server in the event that an app-specific deep link is opened in a browser context (e.g., on a device where the app has not been installed).

For a concrete example, consider an app whose deep link base is `https://app.example.com/i/SMARTHealthCard/`. A deep link to import two SMART Health Cards into the app would look something like this (actual JWS payload shortened for readability):

```text
https://app.example.com/i/SMARTHealthCard/#{"verifiableCredential":["eyJhbGc.dVPBbtswDP.Xo3dhlA","eyJhbGc.xVVNc9MwEP.B3KT7OD"]}
```

With proper URL encoding a link will look like:

```html
<a href="https://app.example.com/i/SMARTHealthCard/#%7B%22verifiableCredential%22%3A%5B%22eyJhbGc.dVPBbtswDP.Xo3dhlA%22%2C%22eyJhbGc.xVVNc9MwEP.B3KT7OD%22%5D%7D">
  Link Text
</a>
```

After OS-mediated redirection, the Health Wallet app can now parse each JWS and present the collection for import to the user.

<p></p>

#### via FHIR `$health-cards-issue` Operation

For a more seamless user experience when FHIR API connections are already in place, results may also be conveyed through a FHIR API `$health-cards-issue` operation defined [here](OperationDefinition-patient-i-health-cards-issue.json). For issuers that support SMART on FHIR access, the Health Wallet MAY request authorization with SMART on FHIR scopes (e.g., `launch/patient patient/Immunization.read` for an Immunization use case). This allows the Health Wallet to automatically request issuance of VCs, including requests for periodic updates.

<p></p>

#### Discovery of FHIR Support

A SMART on FHIR Server capable of issuing VCs according to this specification SHALL advertise its support by adding the `health-cards` capability to its `/.well-known/smart-configuration` JSON file. For example:

```json
{
  "authorization_endpoint": "https://ehr.example.com/auth/authorize",
  "token_endpoint": "https://ehr.example.com/auth/token",
  "token_endpoint_auth_methods_supported": ["client_secret_basic"],
  "scopes_supported": ["launch", "launch/patient", "patient/*.*", "offline_access"],
  "response_types_supported": ["code", "code id_token", "id_token", "refresh_token"],
  "capabilities": ["health-cards", "launch-standalone", "context-standalone-patient", "client-confidential-symmetric"]
}
```

<p></p>

### Presenting Health Cards to a Verifier

In this step, the verifier asks the user to share a Health Card. A Health Card
containing the result can be conveyed by presenting a QR code; by uploading a
file; or by leveraging wallet-specific APIs.

When a wallet-specific API is used to manage this sharing workflow, the API
SHOULD ensure that the requester can specify filters for:

1. SMART Health Card resource types, to restrict the request based on FHIR
Resource Types such as "Immunization" or "Observation". See [FHIR Resource
Types](https://hl7.org/fhir/R4/resourcelist.html).  Type-based filters evalute
Health Cards based on the FHIR resource types within the Health Card payload at
`.vc.credentialSubject.fhirBundle.entry[].resource`.

1. SMART Health Card value sets, to further restrict the request by FHIR
content such as "any standardized vaccine code for mpox". See [Health Card
ValueSets](https://terminology.smarthealth.cards/artifacts.html#terminology-value-sets).
Valueset-based filters apply to the FHIR Resources within the Health Card
payload at `.vc.credentialSubject.fhirBundle.entry[].resource`.  For
Immunizations, the `Immunization.vaccineCode` is evaluated. For
Observations, the `Observation.code` is evaluated.

This same filtering approach is used by the [`$health-cards-issue`
operation](#via-fhir-health-cards-issue-operation), via the `credentialType`
and `credentialValueSet` parameters. Over time, we will endeavor to provide
more standardized presentation workflows for on-device and web-based exchange.

<p></p>

### Health Cards as QR Codes

Each JWS string that appears in the `.verifiableCredential[]` of a `.smart-health-card` file can be represented as a QR code, if the payload is small enough. We aim to ensure that printed (or electronically displayed) codes are usable at physical dimensions of 40mmx40mm. This constraint allows us to use QR codes up to Version 22, at 105x105 modules. When representing a JWS as a QR code, implementers SHALL follow the rules for [Encoding QRs](#encoding-qrs).

Ensuring Health Cards can be presented as QR codes:

* Allows basic storage and sharing of Health Cards for users without a smartphone
* Allows smartphone-enabled users to print a usable backup
* Allows full Health Card contents to be shared with a verifier

The following limitations apply when presenting Health Card as QR codes, rather than engaging in device-based workflows:

* Does not capture a digital record of a request for presentation
  * Verifier cannot include requirements in-band
  * Verifier cannot include purposes of use in-band
* Does not capture a digital record of the presentation

<p></p>

  <div  class="smart-styles-alert smart-styles-alert--deprecated ">
    <div >
      <span class="smart-styles-admonitionIcon_kALy">
        <svg viewBox="0 0 14 16">
          <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
        </svg>
      </span>
      DEPRECATED
    </div>
    <b>Chunking Larger SMART Health Cards</b><br/>
<i>Deprecation note: As of December 2022, support for chunking has not been widely adopted in production SHC deployments. For SHCs that need to be presented as QRs, we recommend limiting payload size to fit in a single QR (when possible), or else considering SMART Health Links.</i>
<p></p>
Commonly, SMART Health Cards will fit in a single V22 QR code. Any JWS longer than 1195 characters SHALL be split into "chunks" of length 1191 or smaller; each chunk SHALL be encoded as a separate QR code of V22 or lower, to ensure ease of scanning. Each chunk SHALL be numerically encoded and prefixed with an ordinal as well as the total number of chunks required to re-assemble the JWS, as described below. The <a href="https://github.com/smart-on-fhir/health-cards/blob/main/FAQ/qr.md">QR code FAQ page</a> details max JWS length restrictions at various error correction levels.
<p></p>
To ensure the best user experience when producing and consuming multiple QR codes:
    <ul>
      <li>Producers of QR codes SHOULD balance the sizes of chunks. For example, if a JWS is 1200 characters long, producers should create two ~600 character chunks rather than a 1191 character chunk and a 9 character chunk.</li>
      <li>Consumers of QR codes SHOULD allow for scanning the multiple QR codes in any order. Once the full set is scanned, the JWS can be assembled and validated.</li>
    </ul>
</div>

<p></p>

#### Encoding QRs

When printing or displaying a Health Card using QR codes, let "N" be the total number of chunks required, and let "C" be a variable indicating the index of the current chunk. Each chunk of the JWS string value SHALL be represented as a QR with two data segments:

<ol>
   <li>
      A segment encoded with <code class=" highlighter-rouge language-plaintext">bytes</code> mode consisting of
      <ul>
         <li>the fixed string <code class=" highlighter-rouge language-plaintext">shc:/</code> (registered as an <a href="https://www.iana.org/assignments/uri-schemes/prov/shc">IANA scheme</a>)</li>
      </ul>
   </li>
   <div  class="smart-styles-alert smart-styles-alert--deprecated ">
      <div >
         <span class="smart-styles-admonitionIcon_kALy">
            <svg viewBox="0 0 14 16">
               <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
            </svg>
         </span>
         DEPRECATED
      </div>
      <ul>
         <li>
            plus (only if more than one chunk is required; note this feature is deprecated): 
            <ul>
               <li>decimal representation of “C” (e.g., <code class=" highlighter-rouge language-plaintext">1</code> for the first chunk, <code class=" highlighter-rouge language-plaintext">2</code> for the second chunk, and so on)</li>
               <li>plus the fixed string <code class=" highlighter-rouge language-plaintext">/</code></li>
               <li>plus decimal representation of “N” (e.g., <code class=" highlighter-rouge language-plaintext">2</code> if there are two chunks in total, <code class=" highlighter-rouge language-plaintext">3</code> if there three chunks in total, and so on)</li>
               <li>plus the fixed string <code class=" highlighter-rouge language-plaintext">/</code></li>
            </ul>
         </li>
      </ul>
   </div>
   <p></p>
   <li>A segment encoded with <code class=" highlighter-rouge language-plaintext">numeric</code> mode consisting of the characters <code class=" highlighter-rouge language-plaintext">0</code>-<code class=" highlighter-rouge language-plaintext">9</code>. Each character “c” of the JWS is converted into a sequence of two digits as by taking <code class=" highlighter-rouge language-plaintext">Ord(c)-45</code> and treating the result as a two-digit base ten number. For example, <code class=" highlighter-rouge language-plaintext">'X'</code> is encoded as <code class=" highlighter-rouge language-plaintext">43</code>, since <code class=" highlighter-rouge language-plaintext">Ord('X')</code> is <code class=" highlighter-rouge language-plaintext">88</code>, and <code class=" highlighter-rouge language-plaintext">88-45</code> is <code class=" highlighter-rouge language-plaintext">43</code>. (The constant “45” appears here because it is the ordinal value of <code class=" highlighter-rouge language-plaintext">-</code>, the lowest-valued character that can appear in a compact JWS. Subtracting 45 from the ordinal values of valid JWS characters produces a range between 00 and 99, ensuring that each character of the JWS can be represented in exactly two base-10 numeric digits.)</li>
</ol>


(The reason for representing Health Cards using Numeric Mode QRs instead of Binary Mode (Latin-1) QRs is information density: with Numeric Mode, 20% more data can fit in a given QR, vs Binary Mode. This is because the JWS character set conveys only log_2(65) bits per character (~6 bits); binary encoding requires log_2(256) bits per character (8 bits), which means ~2 wasted bits per character.)

For example:

<ul>
  <li>a single chunk might produce a QR code like <code class=" highlighter-rouge language-plaintext">shc:/56762909524320603460292437404460</code> &lt;snipped for brevity&gt;</li>
</ul>

  <div  class="smart-styles-alert smart-styles-alert--deprecated ">
    <div >
      <span class="smart-styles-admonitionIcon_kALy">
        <svg viewBox="0 0 14 16">
          <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
        </svg>
      </span>
      DEPRECATED
    </div>
    <ul>
      <li>in a longer JWS, the second chunk in a set of three might produce a QR code like: <code class=" highlighter-rouge language-plaintext">shc:/2/3/56762909524320603460292437404460 &lt;snipped for brevity&gt;</code> 
      <br/>(note this feature is deprecated)</li>
    </ul>
</div>

<p></p>

### Expiration of Health Cards

SMART Health Cards contain factual information that is assured to be correct at the point of issuance and does not change with the passage of time. Therefore, **Health Cards generally do not expire** and an expiration date is not used. There are, however, situations where the ability to set an expiration date is beneficial.

One use case for issuing SMART Health Cards with an expiration date is a government entity issuing a vaccination card to foreign visitors for their use while in the destination country. This visitor's vaccination card is issued based on original documents presented by the visitor. Even with robust verification protocols, the government entity may not want to vouch for the validity of the visitor pass for an unlimited period of time. Importantly, the original document may be invalidated at some point in the future, e.g. by its signing keys being revoked. It may be impractical for the government entity issuing the visitor pass to track and reactively revoke the visitor pass. This risk can be mitigated by setting an expiration date on the visitor pass at the time of issuance. The expiration date could, for example, correspond to the visitor's allowed duration of stay in the foreign country.

To address use cases such as the preceding one, an optional SMART Health Card expiration date can be represented by the registered JWT `exp` claim (encoded as the number of seconds from 1970-01-01T00:00:00Z UTC, as specified by [RFC7519](https://tools.ietf.org/html/rfc7519)). Verifiers SHALL check the expiration, if present, and reject SMART Health Cards with an `exp` value that is before the current verification date-time.

<p></p>

### Examples

See the [examples page](cards-examples.html) for examples of SMART Health Cards and components.

<p></p>

### Potential Extension: Standardized presentation workflows

The spec is currently focused on representing Health Cards in a standardized data payload. This allows many simple patterns for sharing, but future work can introduce standardized presentation exchange flows (e.g., OpenID Self-Issued Identity Provider, a.k.a. SIOP)

<p></p>

### Requests for Comment (RFCs)

This [RFC page](https://github.com/smart-on-fhir/health-cards/tree/main/rfcs) in the SMART Health Cards GitHub contains RFCs related to SMART Health Cards.

<p></p>

### References


* Fast Health Interoperability Resources (FHIR): [https://hl7.org/fhir/](https://hl7.org/fhir/)
* DEFLATE Compression: [https://tools.ietf.org/html/rfc1951](https://tools.ietf.org/html/rfc1951)
* JSON Web Token (JWT): [https://tools.ietf.org/html/rfc7519](https://tools.ietf.org/html/rfc7519)
* JSON Web Key (JWK): [https://tools.ietf.org/html/rfc7517](https://tools.ietf.org/html/rfc7517)
* JSON Web Key (JWK) Thumbprint: [https://tools.ietf.org/html/rfc7638](https://tools.ietf.org/html/rfc7638)
* HMAC-SHA-256: [https://tools.ietf.org/html/rfc4868](https://tools.ietf.org/html/rfc4868)

<p></p>
<p></p>

---

File: repos/HL7_SLASH_smart-health-cards-and-links/input/pagecontent/cards-user-stories.md

SMART Health Cards are verified versions of your clinical information, such as vaccination history or test results. They allow you to keep a copy of your important health records on hand and easily share this information with others if you choose. SMART Health Cards contain a secure QR code and may be saved digitally or printed on paper.

An individual receives a SMART Health Card from a qualified issuer. An issuer is any organization authorized by the [Verifiable Clinical Information coalition (VCI)](https://www.vci.org) to generate these cards, including pharmacies, hospitals, healthcare providers, medical labs, public health agencies, and more.

The user stories below describe example situations where SMART Health Cards are used.

<p></p>

### A Patient Receives a Vaccination SMART Health Card
Alice goes to her corner pharmacy (or her doctor's office or other location) to get a vaccination. Afterwards, she receives a SMART Health Card with information about her immunization in one or more ways:

* **A paper copy might be handed to her** at the time of the visit.
* **A paper copy could be mailed to her** by the organization that provided the vaccination.
* **Alice could download the card from a website or app** hosted by the organization. She can then...
  * **print** a copy of the card
  * **save** the card it as a digital file
  * and/or **add the card to a wallet app** such as Apple Wallet or Google Pay.

She now has a record of the vaccination that she can share with others who need to see and verify that information. 
And while Alice received a vaccination in this story, she could have instead had a lab test performed... with the same options for receiving a SMART Health Card containing the test results. SMART Health Cards are not limited to a particular type of clinical information. 

<p></p>

### An Organization Verifies the Patient's Vaccine 
Later in the week, Alice needs to provide information about her vaccination in order to participate in an event. Because the pharmacy digitally signed the data on her SMART Health Card using its "private key", her vaccination information can be confirmed by others using the "public key" that the pharmacy makes available to verifier applications.

Alice can provide her vaccination information in a few differernt ways:
  * If she downloaded the SMART Health Card to her computer, she could **share the digital file** with the event administrator others using any method she chooses
  * If she needs to present proof of her vaccination in person, she can **show the the QR code** on her paper card or wallet app on her phone. The administrator can scan the code and verify the immunization info using an application that supports SMART Health Cards.
  * Using a [personal health record app that supports SMART Health Links](links-user-stories.html#personal-platforms), Alice can combine her vaccination record with other information and share it electronically with others.

<p></p>

### The Patient gets a Booster Dose

Later in the year, Alice goes back to the pharmacy for an immunization booster. 

Because SMART Health Cards do not change over time, she receives a new card containing her updated vaccination record that includes both the original and booster doses.

And if the pharmacy supports SMART Health Links, Alice may also be able to access immunization information through a Link that automatically stays updated as described [here](links-user-stories.html).


<p></p>
<p></p>

---

File: repos/HL7_SLASH_smart-health-cards-and-links/input/pagecontent/frequently-asked-questions.md

<p></p>

<div class="smart-styles-alert smart-styles-alert--info" style="width:67%; margin-bottom:10px">
   <div >
      <span class="smart-styles-admonitionIcon_kALy">
         <svg viewBox="0 0 14 16">
            <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
         </svg>
      </span>
      INFO
   </div>
   <div style="padding-top:10px">
      <p>This page contains additional guidance and information to implementers which is not part of the normative SMART Health Cards and Links specification.</p>
   </div>
</div>

<p></p>

### Looking for a non-technical overview?

See the [SMART Health Cards public landing page](https://smarthealth.cards/).

<p></p>

### Can a SMART Health Card be used as a form of identification?

No. SMART Health Cards are designed for use *alongside* existing forms of identification (e.g., a driver's license in person, or an online ID verification service). A SMART Health Card is a non-forgeable digital artifact analogous to a paper record on official letterhead. Concretely, the problem SMART Health Cards solve is one of provenance: a digitally signed SMART Health Card is a credential that guarantees that a specific issuer generated the record. The duty of verifying that the person presenting a Health Card *is* the subject of the data within the Health Card (or is authorized to act on behalf of this data subject) falls to the person or system receiving and validating a Health Card.

<p></p>

### Which clinical data should be considered in decision-making?

* The data in Health Cards should focus on communicating "immutable clinical facts".
* Each use case will define specific data profiles.
    * For COVID-19 Vaccination Credentials, the [SMART Health Cards: Vaccination and Testing FHIR IG](https://build.fhir.org/ig/HL7/fhir-shc-vaccination-ig) defines requirements.
* When Health Cards are used in decision-making, the verifier is responsible for deciding what rules to apply. For example:
    * decision-making rules may change over time as our understanding of the clinical science improves.
    * decision-making rules may be determined or influenced by international, national and local health authorities.
    * decision-making rules may require many inputs, some of which can be supplied by Health Cards and others of which may come from elsewhere (e.g., by asking the user "are you experiencing any symptoms today?").

<p></p>

### How can we share conclusions like a "Safe-to-fly Pass", instead of sharing clinical results?

Decision-making often results in a narrowly-scoped "Pass" that embodies conclusions like "Person X qualifies for international flight between Country A and Country B, according to Rule Set C". While Health Cards are designed to be long-lived and general-purpose, Passes are highly contextual. We are not attempting to standardize "Passes" in this framework, but Health Cards can provide an important verifiable input for the generation of Passes.

<p></p>

### What testing tools are available to validate SMART Health Cards implementations?

The following tools are helpful to validate Health Card artifacts:

* The [HL7 FHIR Validator](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator) can be used to validate the Health Card's FHIR bundle
* The [Health Cards Dev Tools](https://github.com/smart-on-fhir/health-cards-dev-tools) can be used to validate the various Health Card artifacts.

Other resources that are helpful for learning about and implementing SMART Health Cards include:

* The [code used to generate the examples](https://github.com/smart-on-fhir/health-cards/tree/main/generate-examples) present in the spec.
* A [Jupyter Notebook walkthrough](https://github.com/dvci/health-cards-walkthrough/blob/main/SMART%20Health%20Cards.ipynb) and [demo portals](https://demo-portals.smarthealth.cards/) which demonstrate creating, validating and decoding a SMART Health Card as a QR code.

<p></p>

### Where can I find earlier Requests for Comment (RFCs)?

This [RFC page](https://github.com/smart-on-fhir/health-cards/tree/main/rfcs) in the SMART Health Cards GitHub contains RFCs related to SMART Health Cards.


### What software libraries are available to work with SMART Health Cards?

The [Libraries for SMART Health Cards](https://github.com/smart-on-fhir/health-cards/wiki/Libraries-for-SMART-Health-Cards) wiki page includes suggestions about useful libraries.

<p></p>

### What are security considerations for an issuer?

**Can someone steal my keys?**

The issuer private keys must be generated, stored, and protected with great care, same as with PKI keys. The OWASP key management [cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html) provides guidance on these items. To lower the risk of a key compromise, it is recommended to rotate issuance keys every year.

**Can someone pretend to be me?**

Health cards are digitally signed, using strong, state-of-the-art cryptographic algorithms. Health card forgery is only possible if someone
1. gains access to the issuer private key(s),
2. takes control of the issuer endpoint (encoded in the health card) and replaces the public key set with a fake one, or
3. modifies the issuer’s information in a trust framework directory.

**Can a rogue insider start issuing health cards?**

Anyone with access to the issuer private keys can issue health cards under the issuer’s identity. Make sure these are generated, stored, and protected adequately. The OWASP key management [cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html) provide guidance on these items. To reduce the risk of insider threats, an issuer should have good audit practices, and log when a health card is issued, and by which employee.

**I found fraudulent health cards falsely issued under my name, what should I do?**

Is the key used to issue these fraudulent health cards still in your published issuer public key set? If so, you need to retire that key immediately: delete the public key in the published key set and the corresponding private key. This will also invalidate all real cards issued under that key; contact your users to help them get a new health card.

If you don't recognize the key, are they tricking verifiers into thinking you are part of the same organization? Has the rogue key been listed as trusted in a trust framework? If so, follow the framework's method to have it removed.

**I’m changing my keys, will my previously issued health cards still be valid?**

Expired private keys should be deleted, the corresponding public keys should stay in the issuer published key set to allow verifiers to validate health cards issued using them. Revoked private keys (compromised, issued in error, etc.) should be deleted and removed from the published key set.

**Some cards have been erroneously issued, can they be revoked?**

Starting from v1.2.0, individual health cards issued by mistake can be revoked by listing its revocation identifier in an issuer's revocation list. Legacy health cards can use an external mechanism to derive a revocation identifier based on the health card's content. See [the revocation section](#what-are-methods-for-revoking-smart-health-cards) below for more details.

<p></p>

### What are security considerations for the patient?


**Can someone steal my health card?**

A health card (digital file or paper QR code) is a “bearer” credential, anyone holding it can present it. Since all the contents of the health card is presented to verifiers, an attacker would need to have matching identifying information to use it illegitimately.

<p></p>

**What if I lose my health card?**

A health card file is a normal file, you can make back-ups. The QR code on a paper card contains all the digitally signed information to present to a verifier; presenting a backup photocopy or a picture of the QR code is enough for a verifier to validate the health card information.

<p></p>

**Am I disclosing too much information when presenting a health card?**

All the content of the health card is disclosed when presenting it. Issuers, wallet applications, and QR paper cards should clearly indicate what information is encoded and disclosed when presenting a health card.

<p></p>

### What are security considerations for the verifier?


**How do I recognize forged health cards?**
Health cards are digitally signed, using strong, state-of-the-art cryptographic algorithms. It is infeasible to forge a health card without compromising a trusted issuer private key, and to modify one without invalidating its signature. Never rely solely on the textual elements of a paper card or a wallet app, always verify the cryptographic signature protecting the health card.

<p></p>

**How can I trust the issuer of a health card?**

The specified validation steps ensure that a presented health card was properly signed by an issuer key. How to trust that key is application/organization specific. In most cases, issuers will be part of a trust framework that verifiers will choose to accept (like how merchants accept Visa, Mastercard, AMEX). Verifiers therefore need to make sure the signing key is a valid identity in the frameworks they accept. For keys that are part of a directory-based trust framework, make sure the key is part of the trusted directory. For keys that are part of a PKI-based trust framework, make sure that:
1. the JSON key matches the key in the PKI certificate,
2. the PKI certificate chain is valid (not expired at card issuance time, nor revoked),
3. the PKI certificate chain roots into a trusted identity.

<p></p>

### What is the Max JWS length for a V22 QR at various error correction levels?

A single, non-chunked Version 22 SMART Health Card QR contains two segments
* The first Byte mode segment (`shc:/`) always has 20 header bits and 40 data bits for a total of 60 bits.[<sup>1</sup>](https://www.nayuki.io/page/optimal-text-segmentation-for-qr-codes)
* The second segment (the numeric encoded QR code) always has 16 header bits and a variable number of data bits depending on the QR code length.[<sup>1</sup>](https://www.nayuki.io/page/optimal-text-segmentation-for-qr-codes)

The max JWS size that can fit in a single Version 22 QR code depends on the remaining space, which depends on the error correction used.

76 bits are already reserved for the required segment headers and `shc:/` prefix. The following table lists the total number of bits a Version 22 QR Code can contain.


| Error Correction Level | Total data bits for V22 QR |
| ------------- | ------------- |
| Low  | 8048  |
| Medium  | 6256  |
| Quartile  | 4544  |
| High  | 3536  |

[<sup>(Table Source)</sup>](https://www.qrcode.com/en/about/version.html)


Each JWS character is encoded into two numeric characters (As described in [Encoding Chunks as QR codes](https://spec.smarthealth.cards/#encoding-chunks-as-qr-codes))
and each numeric character requires 20/6 bits.[<sup>1</sup>](https://www.nayuki.io/page/optimal-text-segmentation-for-qr-codes)

Thus we can determine the maximum JWS size for each error correction with the following:

JWS Size
=  ((Total Data Bits - 76 bits reserved) * 6/20 bits per numeric character * 1/2 JWS character per numeric character
= (Total Data Bits - 76)*3/20

The results of the above rounded down to the nearest integer number of characters gives:

| Error Correction Level | Max JWS Length for V22 QR |
| ------------- | ------------- |
| Low  | 1195  |
| Medium  | 927  |
| Quartile  | 670  |
| High  | 519  |

**References:**
1. [Project Nayuki: Optimal text segmentation for QR Codes](https://www.nayuki.io/page/optimal-text-segmentation-for-qr-codes)
2. [QR Code capacities](https://www.qrcode.com/en/about/version.html)

<p></p>

### What are distinctions with respect to the WHO "Smart Vaccination Certificates" RC1?

On March 19th, 2021, the WHO released [Interim guidance for developing a Smart Vaccination Certificate](https://www.who.int/publications/m/item/interim-guidance-for-developing-a-smart-vaccination-certificate). Here are some key distinctions to keep in mind with respect to WHO RC1:

1. Project names

    * "**SMART**" in SMART Health Cards refers to the [SMART Health IT project](https://smarthealthit.org/about-smart-2/), and stands for "_Substitutable Medical Applications, Reusable Technologies_".
    * "**Smart**" in WHO's Smart Vaccination Certificates is unrelated to SMART Health IT or SMART on FHIR.

1. WHO RC1 has a wider scope than SMART Health Cards; WHO's scope includes continuity of care in addition to proof of vaccination.

1. WHO RC1 assumes there will be national-level infrastructure for centralizing records for a given country. SMART Health Cards is designed to operate without this sort of central infrastructure.

1. WHO RC1 does not yet define technical details for active implementation, such as the specific format for QR codes and other artifacts.

1. WHO RC1 defines a data model for what should be included in a proof of vaccination. SMART Health Cards provides a similar data model via the [SMART Health Cards: Vaccination & Testing Implementation Guide](http://vci.org/ig/vaccination-and-testing). The SMART IG aligns closely but not perfectly with WHO RC1 recommendations. Improving this alignment where possible is on the roadmap for the Vaccination & Testing Implementation Guide.

<p></p>

### What are methods for revoking SMART Health Cards?

Starting from v1.2.0 of the SMART Health Card (SHC) framework, individual health cards issued by mistake can be revoked by listing its revocation identifier in an issuer's revocation list. 

#### Main revocation method

**What should I use as a revocation identifier?**

Issuers that keep track of every single issued SHC could create a per-SHC `rid` for fine-grained revocation. In many cases, an issuer will have an internal user ID that can be used to revoke all cards belonging to a particular user; using the timestamp feature allows an issue to invalidate cards up to a certain time.

**Why is a one-way transformation on the user ID recommended for revocation ID?**

Publishing an internal user ID might be a privacy issue. A one-way transform with high-entropy input prevents reversal of the CRL’s content. The proposed HMAC-SHA-256 algorithm using a 256-bit key achieves that.

**Why are Card Revocation Lists tied to a key identifier?**

Since SHC don’t have expiry dates, public keys and revocation information must be publicly available forever. Creating a per-kid CRL allows issuers to cap the size of CRLs, and verifier apps might not need to download the CRLs of old keys when the corresponding SHCs are replaced by newer ones.

**Why is there a limit on the size of the revocation ID?**

Per-design, SHC are small to fit into QR codes. Moreover, verifier applications might need to store the aggregated revocation information from many issuers; capping the `rid` size therefore limits the bandwidth and storage requirements of verifiers.

The recommended methods of taking the base64url encoding of the b4-bit truncated HMAC-SHA-256 output results in 11 characters. The 24-character limit allows the encoding of 128-bit values in base64url, if required by an issuer.

<p></p>

### Where can I find patient-focused information about SMART Health Cards?
The [consumer-facing SMART Health Cards site](https://smarthealth.cards) contains information oriented to patients.

<p></p>

### Are there guidelines for formatting and presenting a SMART Health Card QR code or SMART Health Link QR code to users? 
The community is currently discussing potential conventions for presenting QR codes associated with SMART Health Cards and Links in a consistent way--for example on a card issued by a healthcare agency or insurer--with the goal of helping patients easily recognize and use them.

Two general guidelines can help users recognize a QR as a SMART Health Card or Link and increase the reliability of their experience using it.

**First,** present the QR code in a three-layer stack arrangement that includes: 
- the SMART logo at the top or bottom, to reinforce a recognizable SMART "brand" that patients will become increasingly familiar with over time
- the QR code in the middle
- the name or logo of the entity that issued the code opposite the SMART logo.

<p></p>
<div>
<figure class="figure">
<figcaption class="figure-caption"><strong><i>3-Layer Stack QR Code Presentation</i></strong></figcaption>
  <br />
  <p>
  <img src="qr-stack.png" style="float:none">  
  </p>
</figure>
</div>


**Second,** avoid placing an icon within the QR code. Because SMART Health Cards and Links often hold a large amount of data compared to other QR codes, maximizing the area available for information and fault tolerance is important. And using a smaller icon to reduce the loss of data capacity will likely reduce its legibility.

<p></p>
<p></p>

---

File: repos/HL7_SLASH_smart-health-cards-and-links/input/pagecontent/index.md

### Overview

Paper medical records--such as vaccination histories and insurance cards--are easily lost or damaged, are difficult to authenticate, and are often not on-hand when they’re needed. 

SMART Health Cards and Links are FHIR-based standards that address these challenges, enabling individuals to receive their health information and share it with others in a tamper-proof and verifiable digital form.They provide a digital version of an individual's clinical information that can be kept at the ready and easily shared with others when the need arises--using a QR code, mobile app or web browser.

Together SMART Health Cards and Links provide options that support multiple goals--from keeping a small amount of verifiable medical information close by to authorizing a trusted party to access their entire medical record. They empower individuals with secure, equitable, and privacy-preserving access to their clinical information.

<p></p>

Examples of what an individual can do using these standards include:

- receive proof of critical immunizations on a physical card or in a mobile app and allow others to verify them by scanning the attached QR code
- scan their insurance card's QR code when checking in at their doctor's office--transmitting their member ID and other coverage information directly to the clinic's system
- send an elementary school a link to their child's immunization history, allowing the school to verify the information with the immunization registry and copy in the details if it wishes
- receive a "ticket" to access the results of a lab test when they're ready
- give a provider time-limited or ongoing access to some or all of their medical data, including the ability to search.

<p></p>

### IG Organization
The implementation guide is organized into two sections:

* **SMART Health Cards** describes the protocol that allows an individual to keep a copy of their important health records with them in the form of a secure QR code that may be saved digitally or printed on paper. SMART Health Cards build on international open standards and decentralized infrastructure to provide end-user privacy and the ability to work across organizational and jurisdictional boundaries. This section includes:
  * [Cards User Stories](cards-user-stories.html) 
  * the formal SMART Health Cards [specification](cards-specification.html)
  * the [Issue Verifiable Credential operation](OperationDefinition-patient-i-health-cards-issue.html) for requesting and generating SMART Health Cards
  * [SMART Health Card examples](cards-examples.html)
  * a description of [Cards credential modeling](cards-credential-modeling.html)
  * a [Cards FAQ](frequently-asked-questions.html) and [changelog](cards-changelog.html)

<p></p>

* **SMART Health Links** describes the protocol that enables storage and sharing of more information than can be kept on a single SMART Health Card (using cloud storage) and provides additional sharing options including limited-time access, long-term sharing of data that can evolve over time, and protecting access with a PIN that can be communicated to the recipient out-of-band. This section contains:
  * [Links User Stories](links-user-stories.html) 
  * the formal SMART Health Links [specification](links-specification.html)
  * [SMART Health Link examples](links-examples.html)

<p></p>

### Referenced Specifications
This implementation guide relies on the following external specifications: 

- [IETF (Internet Engineering Task Force) RFC 7515 - JSON Web Signature (JWS)](https://datatracker.ietf.org/doc/html/rfc7515)
- [IETF RFC 7517 - JSON Web Key (JWK)](https://tools.ietf.org/html/rfc7517)
- [IETF RFC 7518 - JSON Web Algorithms (JWA)](https://datatracker.ietf.org/doc/html/rfc7518)
- [IETF RFC 7519 - JSON Web Token (JWT)](https://datatracker.ietf.org/doc/html/rfc7519)
- [IETF RFC 7638 - JSON Web Key (JWK) Thumbprint](https://datatracker.ietf.org/doc/html/rfc7638)
- [IETF Network Working Group RFC 1951 - DEFLATE Compressed Data Format Specification version 1.3](https://www.ietf.org/rfc/rfc1951.txt)
- [IETF Network Working Group RFC 4648 - Base64 Data Encodings](https://datatracker.ietf.org/doc/html/rfc4648)
- [IETF Network Working Group RFC 4868 - Using HMAC-SHA-256, HMAC-SHA-384, and HMAC-SHA-512 with IPsec](https://datatracker.ietf.org/doc/html/rfc4868)
- [IETF Network Working Group RFC 5280 - X.509 Public Key Infrastructure Certificate and Certificate Revocation List (CRL)](https://datatracker.ietf.org/doc/html/rfc5280)
- [IETF BCP 195 - Transport Layer Security (TLS)](https://www.rfc-editor.org/info/bcp195)
- [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) 

<p></p>

### Contributing
The Verifiable Clinical Information (VCI) coalition convened the original consensus group that started the work that led to this implementation guide. The Argonaut Project and CARIN Alliance were also key contributors.

<p></p>

### Sponsoring HL7 Workgroup  
[FHIR Infrastructure](https://confluence.hl7.org/display/FHIRI)

<p></p>

### Authors

<table class="grid">
    <tbody>
	  <tr>
		<td>Editor: Josh Mandel</td>
		<td><a href="mailto:jmandel@gmail.com">jmandel@gmail.com</a></td>
	  </tr>
  	  <tr>
		<td>Assisting author: Frank McKinney</td>
		<td><a href="mailto:fm@frankmckinney.com">fm@frankmckinney.com</a></td>
	  </tr>
  	  <tr>
		<td>Publishing lead: Mark Roberts</td>
		<td><a href="mailto:mark.roberts@leavittpartners.com">mark.roberts@leavittpartners.com</a></td>
	  </tr>
	</tbody>
  </table>

<p></p>

### Dependencies
{% include dependency-table.xhtml %}

### Cross Version Analysis
{% include cross-version-analysis.xhtml %}

### Global Profiles
{% include globals-table.xhtml %}

### IP Statements
{% include ip-statements.xhtml %}


<p></p>
<p></p>

---

File: repos/HL7_SLASH_smart-health-cards-and-links/input/pagecontent/links-examples.md


### International Patient Summary (IPS)
This SMART Health Link provides access to an IPS patient summary document created according to the [International Patient Summary Implementation Guide](https://hl7.org/fhir/uv/ips). It demonstrates the use of the U flag (no manifest required) because manifest links require a backend server.


#### SMART Health Link
- SMART Health Link: [https://viewer.tcpdev.org/shlink.html#shlink:/eyJ1cmwiOiJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Vhbm5vL3NoYy1kZW1vLWRhdGEvbWFpbi9pcHMvSVBTX0lHLWJ1bmRsZS0wMS1lbmMudHh0IiwiZmxhZyI6IkxVIiwia2V5IjoicnhUZ1lsT2FLSlBGdGNFZDBxY2NlTjh3RVU0cDk0U3FBd0lXUWU2dVg3USIsImxhYmVsIjoiRGVtbyBTSEwgZm9yIElQU19JRy1idW5kbGUtMDEifQ](https://viewer.tcpdev.org/shlink.html#shlink:/eyJ1cmwiOiJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Vhbm5vL3NoYy1kZW1vLWRhdGEvbWFpbi9pcHMvSVBTX0lHLWJ1bmRsZS0wMS1lbmMudHh0IiwiZmxhZyI6IkxVIiwia2V5IjoicnhUZ1lsT2FLSlBGdGNFZDBxY2NlTjh3RVU0cDk0U3FBd0lXUWU2dVg3USIsImxhYmVsIjoiRGVtbyBTSEwgZm9yIElQU19JRy1idW5kbGUtMDEifQ)

- SMART Health Link details: [IPS_IG-bundle-01-shl-details.json](IPS_IG-bundle-01-shl-details.json)

- Decrypted SMART Health Link content:  [IPS_IG-bundle-01.json](IPS_IG-bundle-01.json)

<p></p>


### CARIN Insurance Card
This SMART Health Link provides access to a patient insurance card that follows the [CARIN Digital Insurance Card specification](https://build.fhir.org/ig/HL7/carin-digital-insurance-card). The example includes the QR code that a user can scan to view the insurance card details.


#### SMART Health Link
- SMART Health Link: [https://viewer.tcpdev.org/shlink.html#shlink:/eyJ1cmwiOiJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Vhbm5vL3NoYy1kZW1vLWRhdGEvbWFpbi9jYXJkcy9jYXJpbi1pbnN1cmFuY2UtZXhhbXBsZS9qd3MudHh0IiwiZmxhZyI6IkxVIiwia2V5IjoicnhUZ1lsT2FLSlBGdGNFZDBxY2NlTjh3RVU0cDk0U3FBd0lXUWU2dVg3USIsImxhYmVsIjoiRGVtbyBTSEwgZm9yIGNhcmluLWluc3VyYW5jZS1leGFtcGxlIn0](https://viewer.tcpdev.org/shlink.html#shlink:/eyJ1cmwiOiJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2Vhbm5vL3NoYy1kZW1vLWRhdGEvbWFpbi9jYXJkcy9jYXJpbi1pbnN1cmFuY2UtZXhhbXBsZS9qd3MudHh0IiwiZmxhZyI6IkxVIiwia2V5IjoicnhUZ1lsT2FLSlBGdGNFZDBxY2NlTjh3RVU0cDk0U3FBd0lXUWU2dVg3USIsImxhYmVsIjoiRGVtbyBTSEwgZm9yIGNhcmluLWluc3VyYW5jZS1leGFtcGxlIn0)

- SMART Health Link details: [CARIN_INS_CD-bundle-01-shl-details.json](CARIN_INS_CD-bundle-01-shl-details.json)

- Decrypted SMART Health Link content:  [CARIN_INS_CD-bundle-01.json](CARIN_INS_CD-bundle-01.json)

- QR code:

<div>
<figure class="figure">
  <p>
  <img src="CARIN_INS_CD-shl.png" style="float:none;width:300px;height:300px">
  </p>
</figure>
</div>

<p></p>

---

File: repos/HL7_SLASH_smart-health-cards-and-links/input/pagecontent/links-specification.md

### Use Cases
* Share a link to any collection of FHIR data, including signed data
* Share link to a static SMART Health Card that's too big to fit in a QR
* Share link to a "dynamic" SMART Health Card -- i.e., a file that can evolve over time (e.g., "my most recent COVID-19 lab results")
* Share a link to Bundles of patient-supplied data (e.g., "my advance directive" to share with EMS, or "my at-home weight measurements" to share with a weight loss program, or "my active prescriptions" to share with a service that helps you find better drug prices)
  * Note that for specific use cases, these data don't need to be tamper-proof, and could be aggressively stripped down (e.g., for a drug pricing service, just the drug codes and dosage would go a long way)
* Provision access to a patient's SMART on FHIR API endpoint (e.g., "I'm going to see a specialist and by presenting a single QR, I can give them access to the FHIR API from my primary care provider's portal")

<p></p>

### Design Goals
* Allow sharing of tamper-proof data
* Allow sharing of non-tamper-proof data
* Allow long-term sharing of data
* Allow sharing data that can evolve over time
* Mitigate the damage of QRs being leaked or scanned by the wrong party
  * Allow generate of "one-time use" QR (or a limited-time use QR), so at the time of creation there's a limited number of "claims" or a limited time period attached to it
  * Allow protecting the QR with a PIN, which the Sharer can communicate the PIN to the Recipient out-of-band
* Give Data Sharers the option to host files using encrypted cloud storage, so the hosting provider can't see file contents. (This is mainly important in cases where the data originates from a clinical data system but passes through the consumer's hands and then is hosted online in a cloud service of the consumer's choice. For example, a consumer health app might periodically upload a "most recent labs" file compiled from various sources, and the consumer shouldn't need to trust the file hosting service to actually see plaintext lab results.)
* Offer a simple UX where Data Recipients can scans a QR and immediately retrieve the data
* Offer a glide path for upgraded assurance, e.g. allowing Data Sharers to define a PIN or even (someday) require the Data Recipient party to authenticate or id-proof before accessing shared data

<p></p>

### Actors

* Software Applications
  * **SMART Health Links Sharing Application**. Software that is used to create, manage, and share SMART Health Links. Also referred to below as "server". This application can include local software as well as server-side components.
  * **SMART Health Links Receiving Application**.  Software that enables users to receive and access health information shared through SMART Health Links. Also referred to below as a "client", this application can take many forms, including a lightweight web page with Javascript, a full-fledged module in a native EHR system, or a standalone mobile app.
* Users
  * **Sharing User**. An individual working with a SMART Health Links Sharing Application to create/manage/share information
  * **Receiving User**. An individual working with a SMART Health Links Receiving Application to retrieve/display/use information. In autonomous use cases there may be no Receiving User.

<p></p>

### Pre-protocol step: Sharing User configures a new SMART Health Link

Working with a [SMART Health Links Sharing Application](#actors), the Sharing User makes a few decisions up front:

* **What to share**. Depending on the SMART Health Links Sharing Application, the Sharing User might explicitly choose a set of files or define a "sharing policy" that matches different data over time.
* **Whether the SMART Health Links will require a Passcode** to access. Depending on the SMART Health Links Sharing Application, a Passcode may be mandatory.
* **Whether the SMART Health Links will expire** at some pre-specified time. Depending on the SMART Health Links Sharing Application, an expiration time may be mandatory.

<p></p>

Regarding "what to share": a single SMART Health Link at a specific point in time will *resolve* to a manifest of files of the following types:
* `application/smart-health-card`: a JSON file with a `.verifiableCredential` array containing SMART Health Card JWS strings, as specified in the [via File Download](cards-specification.html#via-file-download) section of the SMART Health Cards specification.
* `application/fhir+json`: a JSON file containing any FHIR resource (e.g., an individual resource or a Bundle of resources). Note that this format is not inherently tamper-proof, but the content may be include digital signatures or have other verification processes associated with it, which are not defined here.
* `application/smart-api-access`: a JSON file with a SMART Access Token Response (see [SMART App Launch](https://hl7.org/fhir/smart-app-launch/app-launch.html#response-5)). Two additional properties are defined:
  * `aud` Required string indicating the FHIR Server Base URL where this token can be used (e.g.,  ``"https://server.example.org/fhir"``)
  * `query`: Optional array of strings acting as hints to the client, indicating queries it might want to make (e.g., `["Coverage?patient=123&_tag=family-insurance"]`)

At configuration time, the SMART Health Links Sharing Application SHALL generate a random key used for encrypting/decrypting the files in the manifest (see ["Decryption"](#encrypting-and-decrypting-files)). 

<p></p>

<div class="smart-styles-alert smart-styles-alert--info ">
   <div >
      <span class="smart-styles-admonitionIcon_kALy">
         <svg viewBox="0 0 14 16">
            <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
         </svg>
      </span>
      INFO
   </div>
   <div >
      <p><strong>📓   Design Note: Trust and encryption</strong></p>
      <p>This pattern of encrypting files allows for deployment scenarios where the file server is not trusted to know the information inside the manifest's files. In such scenarios, the Sharing User and Receiving User can consider the server  a blind intermediary. That said: in many deployment scenarios, the file server will be hosted by a healthcare provider or other entity that already has access to such files. For consistency, this protocol always applies encryption.</p>
   </div>
</div>

<p></p>

<div class="smart-styles-alert smart-styles-alert--info ">
   <div >
      <span class="smart-styles-admonitionIcon_kALy">
         <svg viewBox="0 0 14 16">
            <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
         </svg>
      </span>
      INFO
   </div>
   <div >
      <p><strong>📓   Design Note: SMART Health Links Sharing Application "Internals"</strong></p>
      <p>We do not standardize the protocol by which the SMART Health Links Sharing Application's local software communicates with its server-side components. These may be provided by the same vendor and use internal APIs to communicate -- or there may be no "local" software at all.</p>
   </div>
</div>

<p></p>

### SMART Health Links Sharing Application Generates a SMART Health Link URI

#### Establish a SMART Health Link Manifest URL

Based the configuration from (1), the SMART Health Links Sharing Application generates a "manifest URL" for the new SMART Health Links. The manifest URL:

* SHALL include at least **256 bits of entropy**
    * A suggested approach is to generate a cryptographically strong 32-byte random sequence and then base64url-encode this sequence to obtain a 43-character string that is used as a path segment. For example: `https://shl.example.org/manifests/I91rhba3VsuGXGchcnr6VHlQFKxfE28kuZ0ssbEuxno/manifest.json`
* SHALL NOT exceed **128 characters** in length (note, this maximum applies to the `url` field of the SMART Health Link Payload, not to the entire SMART Health Link URI).

The SMART Health Links Sharing Application incorporates the manifest URL into a SMART Health Link as described below.

<p></p>

#### Construct a SMART Health Link Payload

The SMART Health Link Payload is a JSON object including the following properties:

* `url`: Manifest URL for this SMART Health Links
* `key`: Decryption key for processing files returned in the manifest. 43 characters, consisting of 32 random bytes base64urlencoded.
* `exp`: Optional. Number representing expiration time in Epoch seconds, as a hint to help the SMART Health Links Receiving Application determine if this QR is stale. (Note: epoch times should be parsed into 64-bit numeric types.)
* `flag`: Optional. String created by concatenating single-character flags in alphabetical order
  * `L` Indicates the SMART Health Link is intended for long-term use and manifest content can evolve over time 
  * `P` Indicates the SMART Health Link requires a Passcode to resolve
  * `U` Indicates the SMART Health Links's `url` resolves to a single encrypted file accessible via `GET`, bypassing the manifest. SHALL NOT be used in combination with `P`.
* `label`: Optional.  String no longer than 80 characters that provides a short description of the data behind the SMART Health Links. 
* `v`: Optional. Integer representing the SMART Health Links protocol version this SMART Health Link conforms to. MAY be omitted when the default value (`1`) applies.

The JSON Payload is then:
* Minified
* Base64urlencoded
* Prefixed with `shlink:/`
* Optionally prefixed with a viewer URL that ends with `#`

<p></p>

<div class="smart-styles-alert smart-styles-alert--info ">
   <div >
      <span class="smart-styles-admonitionIcon_kALy">
         <svg viewBox="0 0 14 16">
            <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
         </svg>
      </span>
      INFO
   </div>
   <div >
      <p><strong>📓   Design Note: Design Note: Protocol Versioning</strong></p>
      <p>Implementations can rely on the following behaviors:</p><ul class=""><li>SMART Health Link Payload processing for <code>shlink:</code> URIs<ul class=""><li>SMART Health Link Payloads SHALL be constructed as per <code>"v":1</code> (i.e., payloads are Base64urlencoded, minified JSON objects)<ul class=""><li>Any changes to this design will require a new URI scheme, rather than a <code>v</code> bump</li></ul></li></ul></li><li>SMART Health Link Payload stability<ul class=""><li><code>.label</code>, <code>.exp</code>, and <code>.flag</code> SHALL always work as defined for <code>"v":1</code><ul class=""><li>Any changes to this design will require a new URI scheme, rather than a <code>v</code> bump</li></ul></li><li>New properties MAY be introduced without a version bump, as long as they're optional and safe to ignore</li><li>SHL Receiving Application SHALL ignore properties they don't recognize</li><li>Introduction of properties that can't safely be ignored will require a <code>v</code> bump</li></ul></li><li>SMART Health Link Payload flags<ul class=""><li>New flag values MAY be introduced without a version bump, as long as they're safe to ignore. For example, the v1 flag <code>L</code> is safe to ignore because the client will still be able to handle a one-time manifest request. The <code>P</code> flag however cannot be ignored because the server will respond with an error if no passcode is provided.</li><li>SHL Receiver Application SHALL ignore flag values they don't recognize</li><li>Introduction of new flag values that can't safely be ignored will require a <code>v</code> bump</li></ul></li><li>Manifest URL request/response<ul class=""><li>New request parameters or headers MAY be introduced without a version bump, as long as they're optional and safe to ignore, or gated by a flag or property in the SHL Payload</li><li>New response parameters or headers MAY be introduced without a version bump, as long as they're optional and safe to ignore, or gated by a request parameter</li><li>SHL Sharing Application and SHL Receiving Application SHALL ignore parameters and headers they don't recognize</li><li>Introduction of parameters or headers that can't safely be ignored will require a <code>v</code> bump</li></ul></li><li>Encryption and signature schemes<ul class=""><li>Changes to the cryptographic protocol will require a <code>v</code> bump</li></ul></li></ul><p>This means that SHL Receiver Applications can always recognize a SMART Health Link Payload and display its label to the user. If a SHL Receiver Application receives a SMART Health Link with a <code>v</code> newer than what it supports, it SHOULD display an appropriate message to the user and SHOULD NOT proceed with a manifest request, unless it has some reason to believe that proceeding is safe.</p>
   </div>
</div>

<p></p>

<div class="smart-styles-alert smart-styles-alert--info ">
   <div >
      <span class="smart-styles-admonitionIcon_kALy">
         <svg viewBox="0 0 14 16">
            <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
         </svg>
      </span>
      INFO
   </div>
   <div >
      <p><strong>📓   Design Note: Design Note: Viewer URL Prefixes</strong></p>
      <p>By using viewer URLs that end in <code>#</code>, we take advantage of the browser behavior where <code>#</code> fragments are not sent to a server at the time of a request. Thus the SMART Health Link payload will not appear in server-side logs or be available to server-side processing when a link like <code>https://viewer.example.org#shlink:/ey...</code> is opened in a browser.</p>
   </div>
</div>

<p></p>

The following optional step may occur sometime after a SMART Health Link is generated:
* **Optional: Update Shared Files**. For some sharing scenarios, Sharing User MAY update the shared files from time to time (e.g., when new lab results arrive or new immunizations are performed). Updated versions SHALL be encrypted using the same key as the initial version. 

<p></p>

#### Example SMART Health Link Generation
```js
import { encode as b64urlencode } from 'https://deno.land/std@0.82.0/encoding/base64url.ts';

const shlinkJsonPayload = {
  "url": "https://ehr.example.org/qr/Y9xwkUdtmN9wwoJoN3ffJIhX2UGvCL1JnlPVNL3kDWM/m",
  "flag": "LP",
  "key": "rxTgYlOaKJPFtcEd0qcceN8wEU4p94SqAwIWQe6uX7Q",
  "label": "Back-to-school immunizations for Oliver Brown"
}

const encodedPayload = b64urlencode(JSON.stringify(shlinkJsonPayload))
// "eyJ1cmwiOiJodHRwczovL2Voci5leGFtcGxlLm9yZy9xci9ZOXh3a1VkdG1OOXd3b0pvTjNmZkpJaFgyVUd2Q0wxSm5sUFZOTDNrRFdNL20iLCJmbGFnIjoiTFAiLCJrZXkiOiJyeFRnWWxPYUtKUEZ0Y0VkMHFjY2VOOHdFVTRwOTRTcUF3SVdRZTZ1WDdRIiwibGFiZWwiOiJCYWNrLXRvLXNjaG9vbCBpbW11bml6YXRpb25zIGZvciBPbGl2ZXIgQnJvd24ifQ"

const shlinkBare = `shlink:/` + encodedPayload;
// "shlink:/eyJ1cmwiOiJodHRwczovL2Voci5leGFtcGxlLm9yZy9xci9ZOXh3a1VkdG1OOXd3b0pvTjNmZkpJaFgyVUd2Q0wxSm5sUFZOTDNrRFdNL20iLCJmbGFnIjoiTFAiLCJrZXkiOiJyeFRnWWxPYUtKUEZ0Y0VkMHFjY2VOOHdFVTRwOTRTcUF3SVdRZTZ1WDdRIiwibGFiZWwiOiJCYWNrLXRvLXNjaG9vbCBpbW11bml6YXRpb25zIGZvciBPbGl2ZXIgQnJvd24ifQ"

const shlink = `https://viewer.example.org#` + shlinkBare
// "https://viewer.example.org#shlink:/eyJ1cmwiOiJodHRwczovL2Voci5leGFtcGxlLm9yZy9xci9ZOXh3a1VkdG1OOXd3b0pvTjNmZkpJaFgyVUd2Q0wxSm5sUFZOTDNrRFdNL20iLCJmbGFnIjoiTFAiLCJrZXkiOiJyeFRnWWxPYUtKUEZ0Y0VkMHFjY2VOOHdFVTRwOTRTcUF3SVdRZTZ1WDdRIiwibGFiZWwiOiJCYWNrLXRvLXNjaG9vbCBpbW11bml6YXRpb25zIGZvciBPbGl2ZXIgQnJvd24ifQ"
```

<p></p>

####  Sharing User transmits a SMART Health Link

The Sharing User can convey a SMART Health Link by any common means including e-mail, secure messaging, or other text-based communication channels. When presenting a SMART Health Link in person, the Sharing User can also display the link as a QR code using any standard library to create a QR image from the SMART Health Link URI. 

When sharing a SMART Health Link via QR code, the following recommendations apply:

* Create the QR with Error Correction Level M
* Include the [SMART Logo](https://demo.vaxx.link/smart-logo.svg) on a white background over the center of the QR, scaled to occupy 5-6% of the image area (inclusive of the "quiet zone" QR border).

<p></p>

### SMART Health Links Receiving Application processes a SMART Health Link

The SMART Health Links Receiving Application can process a SMART Health Link using the following steps.

* Decode the SMART Health Link JSON payload
* Issue a [SMART Health Link Manifest Request](#smart-health-link-manifest-request) to payload's `url`
* Decrypt and process files from the manifest
* Optional:  When the original QR includes the `L` flag for long-term use, the SMART Health Links Receiving Application can re-fetch the manifest periodically, following [polling guidance](#polling-manifest-for-changes) to avoid issing too many requests
 
<p></p>

### SMART Health Link Manifest Request

When no `U` flag is present, the SMART Health Links Receiving Application SHALL retrieve a SMART Health Links's manifest by issuing a request to the `url` with:

* Method: `POST`
* Headers:
  * `content-type: application/json`
* Body: JSON object including
  * `recipient`: Required. A string describing the recipient (e.g.,the name of an organization or person) suitable for display to the Receiving User
  * `passcode`: Conditional. SHALL be populated with a user-supplied Passcode if the `P` flag was present in the SMART Health Link payload
  * `embeddedLengthMax`: Optional. Integer upper bound on the length of embedded payloads (see [`.files.embedded`](#filesembedded-content))

If the SMART Health Link is no longer active, the Resource Server SHALL respond with a 404.

If an invalid Passcode is supplied, the Resource Server SHALL reject the request and SHALL enforce a total lifetime count of incorrect Passcodes for a given SMART Health Links, to prevent attackers from performing an exhaustive Passcode search. The error response for an invalid Passcode SHALL use the `401` HTTP status code and the response body SHALL be a JSON payload with

* `remainingAttempts`: number of attempts remaining before the SMART Health Links is disabled

<p></p>

<div class="smart-styles-alert smart-styles-alert--info ">
   <div >
      <span class="smart-styles-admonitionIcon_kALy">
         <svg viewBox="0 0 14 16">
            <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
         </svg>
      </span>
      INFO
   </div>
   <div >
      <p><strong>📓   Design Note: Monitoring remaining attempts</strong></p>
      <p>Servers need to enforce a total lifetime count of incorrect Passcodes even in the face of attacks that attempt multiple Passcodes in separate, parallel HTTP requests (i.e., with little or no delay between requests). For example, servers might employ measures to limit the number of in-flight requests for a single SMART Health Link at any given time, ensuring that requests are processed serially through the use of synchronization or shared state.</p>
   </div>
</div>


<p></p>

If the SMART Health Link request is valid, the Resource Server SHALL return a  SMART Health Link Manifest with `content-type: application/json`. The SMART Health Link Manifest is a JSON object with a `files` array where each entry includes:

* `contentType`: One of  the following values:
    * `"application/smart-health-card"` or
    *  `"application/smart-api-access"` or 
    *  `"application/fhir+json"`
* `location` (SHALL be present if no `embedded` content is included): URL to the file.
This URL SHALL be short-lived and intended for single use. For example, it could be a
short-lifetime signed URL to a file hosted in a cloud storage service (see signed URL docs for [S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html), [Azure](https://learn.microsoft.com/en-us/rest/api/storageservices/create-service-sas), and [GCP](https://cloud.google.com/storage/docs/access-control/signed-urls)).
* `embedded` (SHALL be present if no `location` is included): JSON string directly
embedding the encrypted contents of the file as a compact JSON Web Encryption
string (see ["Encrypting"](#encrypting-and-decrypting-files)).

<p></p>

#### Polling manifest for changes
When the original QR includes the `L` flag for long-term use, the client MAY
periodically poll for changes in the manifest. The server MAY provide a
[`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After)
header on successful manifest responses, indicating the minimum time that the
client SHOULD wait before its next polling request. If manifest requests are
issued too frequently, the server MAY respond with HTTP status `429 Too Many
Requests` and a `Retry-After` header indicating the minimum time that a client
SHALL wait before re-issuing a manifest request.

<p></p>

<div class="smart-styles-alert smart-styles-alert--info ">
   <div >
      <span class="smart-styles-admonitionIcon_kALy">
         <svg viewBox="0 0 14 16">
            <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
         </svg>
      </span>
      INFO
   </div>
   <div >
      <p><strong>📓   Design Note: Rate Limiting</strong></p>
      <p>More detailed guidance on polling will require real-world implementation experience. The current guidance provides the client a hint about how often to poll, and provides a way to convey that requests are being issued too frequently. We encourage implementers to experiment with additional capabilities.</p>
   </div>
</div>

<p></p>

####  `.files.location` links

The SMART Health Links Sharing Application SHALL ensure that `.files.location` links can be dereferenced
without additional authentication, and that they are short-lived. The lifetime
of `.files.location` links SHALL NOT exceed one hour. The SMART Health Links Sharing Application MAY create
one-time-use `.files.location` links that are consumed as soon as they are
dereferenced.

Because the manifest and associated files are a single package that may change over time, the SMART Health Links Receiving Application SHALL treat any manifest file locations as short-lived and
potentially limited to one-time use. The SMART Health Links Receiving Application SHALL NOT attempt to
dereference a manifest's `.files.location` link more than one hour after
requesting the manifest, and SHALL be capable of re-fetching the manifest to
obtain fresh `location` links in the event that they have expired or been
consumed.

The SMART Health Links Sharing Application SHALL respond to the `GET` requests for `.files.location` URLs with:

* Headers:
  * `content-type: application/jose`
* Body: JSON Web Encryption as described in <a href="#encrypting-and-decrypting-files">Encrypting and Decrypting Files</a>.

<p></p>

#### `.files.embedded` content

If the client has specified `embeddedLengthMax` in the manifest request, the sever SHALL NOT
embedded payload longer than the client-designated maximum.

If present, the `embedded` value SHALL be up-to-date as of the time the manifest is
requested. If the client has specified `embeddedLengthMax` in the manifest request,
the sever SHALL NOT embedded payload longer than the client-designated maximum.

The embedded content is a JSON Web Encryption as described in <a href="#encrypting-and-decrypting-files">Encrypting and Decrypting Files</a>.

<p></p>

#### Example SMART Health Link Manifest

```json
{
  "files": [{
    "contentType": "application/smart-health-card",
    "location": "https://bucket.cloud.example.org/file1?sas=MFXK6jL3oL3SI_lRfi_-cEfzIs5oHs6rRWmrsCAFzvk"
  }, 
  {
    "contentType": "application/smart-health-card",
    "embedded": "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..8zH0NmUXGwMOqEya.xdGRpgyvE9vNoKzHlr4itKKW2vo<snipped>"
  },
  {
    "contentType": "application/fhir+json",
    "location": "https://bucket.cloud.example.org/file2?sas=T34xzj1XtqTYb2lzcgj59XCY4I6vLN3AwrTUIT9GuSc"
  }]
}
```
<p></p>

#### SMART Health Link Direct File Request (with `U` Flag)

When the `U` flag is present, the SMART Health Links Receiving Application SHALL NOT make a request for the manifest. Instead, the application SHALL retrieve a SMART Health Links's sole encrypted file by issuing a request to the `url` with:

* Method: `GET`
    * Query parameters
        * `recipient`: Required. A string describing the recipient (e.g.,the name of an organization or person) suitable for display to the Data Sharer

<p></p>

### Encrypting and Decrypting Files

SMART Health Link files are always symmetrically encrypted with a SMART Health Links-specific key. Encryption is performed using JSON Web Encryption (JOSE JWE) compact serialization with `"alg": "dir"`, `"enc": "A256GCM"`, and a `cty` header indicating the content type of the payload (e.g., `application/smart-health-card`, `application/fhir+json`, etc). The JWE MAY include a `zip` header with the value `DEF` to indicate that the plaintext of the JWE is compressed using the DEFLATE algorithm as specified in RFC 1951, before being encrypted. (Note, this indicates "raw" DEFLATE compression, omitting any zlib headers.)

<p></p>

#### Example Encryption

```ts
import * as jose from 'https://deno.land/x/jose@v4.7.0/index.ts'
import * as pako from 'https://deno.land/x/pako@v2.0.3/pako.js'

const exampleShcFromWeb = await fetch("https://spec.smarthealth.cards/examples/example-00-e-file.smart-health-card");
const exampleShcBody = new Uint8Array(await exampleShcFromWeb.arrayBuffer());
const exampleContentType = 'application/smart-health-card'

const shlinkPayload =  {
  "key": "rxTgYlOaKJPFtcEd0qcceN8wEU4p94SqAwIWQe6uX7Q",
  // other properties omitted; not relevant for this example
};

const encrypted = await new jose
  .CompactEncrypt(new Uint8Array(exampleShcBody))
  .setProtectedHeader({
    alg: 'dir',
    enc: 'A256GCM',
    cty: exampleContentType,
  })
  .encrypt(jose.base64url.decode(shlinkPayload.key));

console.log(encrypted)
//eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiY3R5IjoiYXBwbGljYXRpb24vc21hcnQtaGVhbHRoLWNhcmQifQ..B9Bd5AW751az-gEx.iah6mxLb5TQe2ZfCwEUs4R1t8WoP0mnFc-TUzN1NIyzUeDwJNOcxv4CY8wV6ys4Dicnr3IhqTvVU1RbR-4eq1GCd4g96faV8_0MbHwXzP246Tz9BDLhQ2zlAjYqvvCi_JuWdyWqGhKeWGX1XibNHFzzVT0FmYensfKF4o0uSeZWQDKVEEhzMSKuALMpUkfwHcmCRfLT-ctANSxq-Zj0IIeT66XbztOomStjlfi-F-FaqBGZfHOARCVvT143CTYELLJCUdD4qUVkrNuLmRZrNuqVpY0g5BjABswkIoDmyoRJAEohuZCamZNA--p-uRqJjRefED1eMrKSppabV2ugaqoFlieujTOE-a3VKib9aC-lFsmLalkwh9ctr_FZqS9H46rqGjGcOxtAXalo1jkMPGupVsE1W-xIH14wbPCYcgfldH9SH7X60462kxD8OFdHpvnnfAvjQnaE4QDqasT5ySpBRtck4GVxs2IRBt62-kOlzoI8lHapLdwIms-Gdt7z38E47ZE3afE4IIbobPGz7wGvjbi3z234ARvGQ4jREgPQb1NRYAEtZlrZNzR6N7ofXD8jF502tw-QWI_Ox0jFP5tynIiMp-hG25ecQ0s4MzPHFC0ZABPamgg3MS-UILl76gMDCHS5Te_JAXZoC1HnkETw5M217SaG5ISAU0F5qETMREfTjZR9E45MDhnw7uY1vo2lffRB3ei1QqGuLh0gUnVU7TUfFYwcOqV15sb0t1lMj0mmyG5v-_dE9H6dYtRKJARltmdfSmc1HisBewx75Xh5ChJQ1hiCEDaZ1wqFjsFJ6SrKgJ7C1N7vx6QKx8YXwFH7ePG2qG39leT5JKZnqAvi9fqc6x-YwfhSjbRKGZoj2o55Fd2fbwtK6CXpiW6AekT7PUcl_7ynTq-DaQ_Yc29WwtmgapcCRNpfcMsoqCD4giu1V3Sj5DQLglwuk1gAMcuV5fo8JpABu2_is83WZ_GJ1WWMUxyZGq6u-EGuZrP96Yewb7-zfnt2lao_LJg1ef5cqDTW7-0MS27wkmLiIi0e-PYvS-UfWVHg1oNbR-MHXMVEQ6gqNg08IgEyPDSFCUbf75HuMILN80bQNtSlFj6FR7uNKHr8sigvKI80k.5flOKKmeqYm0TamwROr8Nw
```
<p></p>

#### Example Decryption

```ts
import * as jose from 'https://deno.land/x/jose@v4.7.0/index.ts'
import * as pako from 'https://deno.land/x/pako@v2.0.3/pako.js'

const shlinkPayload =  {
  "key": "rxTgYlOaKJPFtcEd0qcceN8wEU4p94SqAwIWQe6uX7Q",
  // other properties omitted; not relevant for this example
};

// Output from "encrypt" example above
const fileEncrypted = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiY3R5IjoiYXBwbGljYXRpb24vc21hcnQtaGVhbHRoLWNhcmQifQ..B9Bd5AW751az-gEx.iah6mxLb5TQe2ZfCwEUs4R1t8WoP0mnFc-TUzN1NIyzUeDwJNOcxv4CY8wV6ys4Dicnr3IhqTvVU1RbR-4eq1GCd4g96faV8_0MbHwXzP246Tz9BDLhQ2zlAjYqvvCi_JuWdyWqGhKeWGX1XibNHFzzVT0FmYensfKF4o0uSeZWQDKVEEhzMSKuALMpUkfwHcmCRfLT-ctANSxq-Zj0IIeT66XbztOomStjlfi-F-FaqBGZfHOARCVvT143CTYELLJCUdD4qUVkrNuLmRZrNuqVpY0g5BjABswkIoDmyoRJAEohuZCamZNA--p-uRqJjRefED1eMrKSppabV2ugaqoFlieujTOE-a3VKib9aC-lFsmLalkwh9ctr_FZqS9H46rqGjGcOxtAXalo1jkMPGupVsE1W-xIH14wbPCYcgfldH9SH7X60462kxD8OFdHpvnnfAvjQnaE4QDqasT5ySpBRtck4GVxs2IRBt62-kOlzoI8lHapLdwIms-Gdt7z38E47ZE3afE4IIbobPGz7wGvjbi3z234ARvGQ4jREgPQb1NRYAEtZlrZNzR6N7ofXD8jF502tw-QWI_Ox0jFP5tynIiMp-hG25ecQ0s4MzPHFC0ZABPamgg3MS-UILl76gMDCHS5Te_JAXZoC1HnkETw5M217SaG5ISAU0F5qETMREfTjZR9E45MDhnw7uY1vo2lffRB3ei1QqGuLh0gUnVU7TUfFYwcOqV15sb0t1lMj0mmyG5v-_dE9H6dYtRKJARltmdfSmc1HisBewx75Xh5ChJQ1hiCEDaZ1wqFjsFJ6SrKgJ7C1N7vx6QKx8YXwFH7ePG2qG39leT5JKZnqAvi9fqc6x-YwfhSjbRKGZoj2o55Fd2fbwtK6CXpiW6AekT7PUcl_7ynTq-DaQ_Yc29WwtmgapcCRNpfcMsoqCD4giu1V3Sj5DQLglwuk1gAMcuV5fo8JpABu2_is83WZ_GJ1WWMUxyZGq6u-EGuZrP96Yewb7-zfnt2lao_LJg1ef5cqDTW7-0MS27wkmLiIi0e-PYvS-UfWVHg1oNbR-MHXMVEQ6gqNg08IgEyPDSFCUbf75HuMILN80bQNtSlFj6FR7uNKHr8sigvKI80k.5flOKKmeqYm0TamwROr8Nw"

const decrypted = await jose.compactDecrypt(
  fileEncrypted,
  jose.base64url.decode(shlinkPayload.key),
  {inflateRaw: async (bytes) => pako.inflateRaw(bytes)}
);

console.log(decrypted.protectedHeader.cty)
//application/smart-health-card

const decoded = JSON.parse(new TextDecoder().decode(decrypted.plaintext));
/*
{
  verifiableCredential: [
    "eyJ6aXAiOiJERUYiLCJhbGciOiJFUzI1NiIsImtpZCI6IjNLZmRnLVh3UC03Z1h5eXd0VWZVQUR3QnVtRE9QS01ReC1pRUxMMTFX..."
  ]
}
*/
```
<p></p>

### Use Case Examples

#### Using SMART Health Links to share an interactive experience

While the SMART Health Links spec focuses on providing access to structured data, it's often
useful to share an interactive experience such as a web-based diagnostic portal where the
SMART Health Links Receiving Application can review and add comments to a patient record. This can be accomplished
in SMART Health Links with a manifest entry of type `application/fhir+json` that provides a
[FHIR Endpoint resource](https://hl7.org/fhir/endpoint.html) where:

* `name` describes the interactive experience with sufficient detail for the Receiving User to decide whether to engage
* `connectionType` is `{"system": "https://smarthealthit.org", "code": "shl-interactive-experience"}`
* `address` is the URI for the interactive experience
* `period` optionally documents the window of time when the interactive experience is available

For example, the manifest for an SMART Health Links that offers the user the opportunity to "Review a case"
might include a `application/fhir+json` entry with:

```json
{
  "resourceType": "Endpoint",
  "status": "active",
  "name": "Review and comment on Alice's case in ACME Medical Diagnostic Portal",
  "address": "https://interact.example.org/case-id/521039c3-4bb9-45bd-8271-6001d2f4dea9",
  "period": {"end": "2022-10-20T12:30:00Z"},
  "connectionType": {"system": "https://smarthealthit.org", "code": "shl-interactive-experience"},
  "payloadType": [{"system": "http://terminology.hl7.org/CodeSystem/endpoint-payload-type", "code": "none"}],
}
```
<p></p>

Notes:

* There is no perfect FHIR resource for documenting an interactive experience URL. `Endpoint` and `DocumentReference` are both plausible candidates, and we recommend `Endpoint` here because `DocumentReference` is designed for static payloads.
* If the *only* content being shared via SMART Health Links is a single interactive experience, implementers might consider sharing the interactive experience URL directly, instead of through SMART Health Links. However, since SMART Health Links provides a consistent pattern that users and tools can recognize, starting with SMART Health Links provides a foundation to support future expansion.

<p></p>

#### "Upgrading" from SMART Health Links to a consumer-mediated SMART on FHIR Connection

In addition to providing direct access to a pre-configured data set, SMART Health Linkss can include information
to help establish a consumer-mediated SMART on FHIR connection to the data source. This can be
accomplished with a SMART Health Links manifest entry of type `application/fhir+json` that provides a
[FHIR Endpoint resource](https://hl7.org/fhir/endpoint.html) where:

* `name` describes the SMART on FHIR endpoint with sufficient detail for the Receiving User to decide whether to connect
* `connectionType` is `{"system": "http://terminology.hl7.org/CodeSystem/restful-security-service", "code": "SMART-on-FHIR"}`
* `address` is the FHIR API base URL of the server that supports [SMART App Launch](http://hl7.org/fhir/smart-app-launch/)

For example, the manifest for an SMART Health Links from Labs-R-Us might include a `application/fhir+json` entry with:

```json
{
  "resourceType": "Endpoint",
  "status": "active",
  "name": "Labs-R-Us Application Access",
  "address": "https://fhir.example.org",
  "connectionType": {"system": "http://terminology.hl7.org/CodeSystem/restful-security-service", "code": "SMART-on-FHIR"},
  "payloadType": [{"system": "http://terminology.hl7.org/CodeSystem/endpoint-payload-type", "code": "none"}],
}
```
<p></p>

Notes:

* Clients may need to pre-register with the SMART App Launch enabled service
before they can request a connection. A client might compare `"address"`
against an internal database to determine whether it can connect, retrieve
`{address}/.well-known/smart-configuration` to determine whether the [Dynamic
Client Registration
Protocol](https://hl7.org/fhir/smart-app-launch/app-launch.html#register-app-with-ehr)
is available or come up with another way to determine connectivity in order to
inform the user of how they can act on the SMART Health Links.

* This capability will only work in cases where the user receiving the SMART Health Links is authorized
to approve SMART App Launch requests; other recipients might see the Endpoint
but would be unable to complete a SMART App Launch


---

File: repos/HL7_SLASH_smart-health-cards-and-links/input/pagecontent/links-user-stories.md

SMART Health Links support multiple patterns of sharing. While the technology
is designed for flexibility and reuse in diverse contexts, the user stories
below represent flows that have explicitly informed design of the protocol.

<p></p>

### "Powerful Portals"

Alice signs in to her state's public health portal where she can see her 
vaccination history and recommendations. She selects an option to "Share my
records with SMART Health Links", which prompts her to create a passcode
and then generates a SMART Health Link. 

Alice is presented with options that include:

* **Copy the SMART Health Link to clipboard.**
Alice can share the link with others using any channel she chooses. For example, she could... 
  * paste the SMART Health Link into a "vaccine history" form in her school's vaccine management site as part of an online registration process
  * or share the SMART Health Link and passcode with a friend, caregiver, or healthcare provider. 
  
  The recipient could then view Alice's data online or automatically load the data into a SMART Health Link-enabled app. This workflow can enable integration with clinician-facing EHR systems as well as patient-facing care management apps.

<p></p>

* **Display the SMART Health Link as a QR code.**
Alice can present this QR code to others. For example, she might display it to a school
nurse as part of an on-site registration process.

* **Open the SMART Health Link in a mobile health app.**
Alice can open this link in her personal health app to import her historical vaccine
records. 

  * Her app will prompt her for the passcode and then will automatically 
retrieve the set of vaccine records and recommendations for display within the app. 
  * In addition, the app can periodically re-fetch the link to look for updates.

<p></p>

**Additional use cases for "Powerful Portals":**

* Clinical Summary from a provider portal; can share during an emergency department visit while traveling
* Lab results from a pharmacy portal

<p></p>

### "Paper+"

Alice visits Labs-R-Us, where she has blood drawn for a basic metabolic panel. The lab establishes a passcode (whether randomly, or based on a convention like birth date, or by asking Alice to designate her own), then provides Alice with a print-out including details about the test that was performed together with a QR code labeled as a "SMART Health Link." 

Alice can....

* **Scan the SMART Health Link QR using a generic QR reader app.** This takes her to a Labs-R-Us web-based viewer where she can enter a passcode to view her lab result. Initially she might see a "pending" result, indicating that the analysis
has not been completed. Eventually she will see a "final" result with the details available.

* **Scan the SMART Health Link QR using a SMART Health Link-aware health record management app.** Alice's health record app prompts her for a passcode and automatically retrieves the lab results for display within the app's user interface. Initially this might be a "pending" result which would resolve to a "final" result after the app checks for an update at a later date.

  * _Optional follow-up step: Upgrade to a long-term SMART on FHIR connection._
  If Labs-R-Us supports [SMART on FHIR for patient access](https://hl7.org/fhir/smart-app-launch/), Alice's health record app might prompt Alice to "connect to your full Labs-R-Us record." If she selects this option, she will be taken to the Labs-R-Us authorization screen where she can sign in or create an account and authorize long-term access to her full set of Labs-R-Us data.

<p></p>

* **Share the SMART Health Link with a friend, caregiver, or healthcare provider.**
As in the "Powerful Portals" user story above, Alice can copy/paste the SMART Health Link to share this lab result with a recipient of her choice. (The passcode will be shared separately.) 

  * The recipient can open the link in a web browser or in an SMART Health Link-aware health record management app, just as Alice can. 
  * This workflow can enable integration with clinician-facing EHR systems as well as patient-facing care management apps.

<p></p>

**Additional use cases for "Paper+"**

* Vaccine results after a pharmacy visit
* Vision prescription after an optometrist visit
* Encounter summary after a hospital visit
* Coverage details embedded on an insurance card

<p></p>

### "Personal Platforms" 

Alice uses a personal health record app on her phone. She connects to data from various sources including clinical providers, labs, pharmacies, and others. 

When she wants to share a subset of these data, she selects an option to "Share my records with SMART Health Links", which prompts her to create a passcode and then generates a link. Using this technique, Alice can mix and match data from multiple sources to share a relevant subset of her records that might not exist within any one source. 

Alice taps a "share" button and is prompted to copy the SMART Health Link to her clipboard or display the link as a QR.

Alice can now proceed to share this link as described in ["Powerful Portals"](#powerful-portals), above.

<p></p>
<p></p>

---

File: repos/HL7_SLASH_smart-health-cards-and-links/input/pagecontent/OperationDefinition-patient-i-health-cards-issue-notes.md

A Health Wallet can `POST /Patient/:id/$health-cards-issue` to a FHIR-enabled issuer to request or generate a specific type of Health Card. The body of the POST looks like:

```json
{
  "resourceType": "Parameters",
  "parameter": [{
    "name": "credentialType",
    "valueUri": "Immunization"
  }]
}
```

The `credentialType` parameter is required. This parameter restricts the request
by high-level categories based on FHIR Resource Types such as "Observation" or
"Immunization". See [FHIR Resource Types](https://hl7.org/fhir/R4/resourcelist.html). 

Type-based filters evaluate Health Cards based on the FHIR resource types within the Health Card payload at `.vc.credentialSubject.fhirBundle.entry[].resource`.  Multiple `credentialType` parameters in one request SHALL be interpreted as a request for Health Cards that contain all of the requested types (logical AND). To maintain compatibility with the initial release of this specification, servers SHOULD process
`#immunization` as `Immunization`, and `#laboratory` as `Observation`.

The following parameters are optional; clients MAY include them in a request,
and servers MAY ignore them if present.

* **`credentialValueSet`**. Restricts the request by FHIR
content such as "any standardized vaccine code for mpox". See [Health Card ValueSets](https://terminology.smarthealth.cards/artifacts.html#terminology-value-sets).
Valueset-based filters apply to the FHIR Resources within the Health Card
payload at `.vc.credentialSubject.fhirBundle.entry[].resource`.  For
Immunizations, the `Immunization.vaccineCode` is evaluated. For Observations,
the `Observation.code` is evaluated. Multiple `credentialValueSet` parameters
in one request SHALL be interpreted as a request for credentials with content
from all of the supplied Valuesets (logical AND).

```json
{
  "resourceType": "Parameters",
  "parameter": [{
    "name": "credentialType",
    "valueUri": "Immunization"
  }, {
    "name": "credentialValueSet",
    "valueUri": "https://terminology.smarthealth.cards/ValueSet/immunization-orthopoxvirus-all"
  }]
}
```

* **`includeIdentityClaim`**. By default, the issuer will decide which identity claims to include, based on profile-driven guidance. If the Health Wallet wants to fine-tune identity claims in the generated credentials, it can provide an explicit list of one or more `includeIdentityClaim`s, which will limit the claims included in the VC. For example, to request that only name be included:

```json
{
  "resourceType": "Parameters",
  "parameter": [{
    "name": "credentialType",
    "valueUri": "Immunization"
  }, {
    "name": "includeIdentityClaim",
    "valueString": "Patient.name"
  }]
}
```

* **`_since`**. By default, the issuer will return Health Cards of any age. If the Health Wallet wants to request only cards pertaining to data since a specific point in time, it can provide a `_since` parameter with a `valueDateTime` (which is an ISO8601 string at the level of a year, month, day, or specific time of day using the extended time format; see [FHIR dateTime datatype](http://hl7.org/fhir/datatypes.html#dateTime) for details). For example, to request only COVID-19 data since March 2021:


```json
{
  "resourceType": "Parameters",
  "parameter": [{
    "name": "credentialType",
    "valueUri": "Immunization"
  }, {
    "name": "_since",
    "valueDateTime": "2021-03"
  }]
}
```

The **response** is a `Parameters` resource that includes one more more `verifiableCredential` values like:

```json
{
  "resourceType": "Parameters",
  "parameter":[{
    "name": "verifiableCredential",
    "valueString": "<<Health Card as JWS>>"
  }]
}
```

If no results are available, a `Parameters` resource without any `parameter` is returned:

```json
{
  "resourceType": "Parameters"
}
```

In the response, an optional repeating `resourceLink` parameter can capture the link between any number of hosted FHIR resources and their derived representations within the verifiable credential's `.credentialSubject.fhirBundle`, allowing the health wallet to explicitly understand these correspondences between `bundledResource` and `hostedResource`, without baking details about the hosted endpoint into the signed credential. The optional `vcIndex` value on a `resourceLink` can be used when a response contains more than one VC, to indicate which VC this resource link applies to. The `vcIndex` is a zero-based index of a `verifiableCredential` entry within the top-level `parameter` array.

```json
{
  "resourceType": "Parameters",
  "parameter": [{
    "name": "verifiableCredential",
    "valueString": "<<Health Card as JWS>>"
  }, {
    "name": "resourceLink",
    "part": [{
        "name": "vcIndex",
        "valueInteger": 0
      }, {
        "name": "bundledResource",
        "valueUri": "resource:2"
      }, {
        "name": "hostedResource",
        "valueUri": "https://fhir.example.org/Immunization/123"
    }]
  }]
}
```

<p></p>
<p></p>



---

