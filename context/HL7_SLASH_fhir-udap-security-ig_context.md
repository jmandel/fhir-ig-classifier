File: repos/HL7_SLASH_fhir-udap-security-ig/input/fsh/README.md

# udap-security-fsh
UDAP Security using FHIR Shorthand 


---

File: repos/HL7_SLASH_fhir-udap-security-ig/input/images-source/authz.plantuml

@startuml
skinparam sequenceMessageAlign left
skinparam shadowing false
hide footbox
participant "Client App" as App
participant "Authorization Server" as Server
App -> Server : Authorization request
Server --> Server : Server incorporates user input\ninto authorization decision
App <-- Server : Authorization response
@enduml

---

File: repos/HL7_SLASH_fhir-udap-security-ig/input/images-source/discovery.plantuml

@startuml
skinparam sequenceMessageAlign left
skinparam shadowing false
hide footbox
participant "Client App" as App
participant "FHIR Server" as Server

App -> Server : Discovery request
App <-- Server : Discovery response
@enduml

---

File: repos/HL7_SLASH_fhir-udap-security-ig/input/images-source/registration.plantuml

@startuml
skinparam sequenceMessageAlign left
skinparam shadowing false
hide footbox
participant "Client App" as App
participant "Authorization Server" as Server

App -> Server : Registration request
App <-- Server : Registration response
@enduml

---

File: repos/HL7_SLASH_fhir-udap-security-ig/input/images-source/tiered.plantuml

@startuml
skinparam sequenceMessageAlign left
skinparam shadowing false
hide footbox
participant "Client App" as App
participant "Data Holder's\nAuthorization Server" as Server
participant "Identity Provider's\nAuthorization Server" as IDP
App -> Server : Authorization request\n(including idp parameter)
Server->IDP: Discovery request
Server<--IDP: Discovery response
Server->IDP: Registration request (if needed)
Server<--IDP: Registration response
Server -> IDP: Authentication request\n(including openid scope)
IDP-->IDP: IdP incorporates user input\n into authentication decision
Server <-- IDP : Authentication response
Server -> IDP: Token request
Server <-- IDP: Token response\n(including id_token)
Server-->Server: Data Holder incorporates user\ninput into authorization decision
App <-- Server : Authorization response
@enduml

---

File: repos/HL7_SLASH_fhir-udap-security-ig/input/images-source/token.plantuml

@startuml
skinparam sequenceMessageAlign left
skinparam shadowing false
hide footbox
participant "Client App" as App
participant "Authorization Server" as Server
App -> Server : Token request
App <-- Server : Token response
@enduml

---

File: repos/HL7_SLASH_fhir-udap-security-ig/input/includes/link-list.md

[Table of Contents]: toc.html
[Home]: index.html
[Discovery]: discovery.html
[Registration]: registration.html
[Consumer-Facing]: consumer.html
[Business-to-Business]: b2b.html
[Tiered OAuth for User Authentication]: user.html
[General Guidance]: general.html
[FHIR Artifacts]: artifacts.html
[Section 1.2]: index.html#json-web-token-jwt-requirements
[Section 1.2.3]: index.html#jwt-headers
[Section 1.2.4]: index.html#jwt-claims
[Section 2.1]: discovery.html#discovery-of-endpoints
[Section 2.2]: discovery.html#required-udap-metadata
[Section 2.3]: discovery.html#signed-metadata-elements
[Section 2.4]: discovery.html#multiple-trust-communities
[Section 3]: registration.html#registration
[Section 3.1]: registration.html#software-statement
[Section 4.1]: consumer.html#obtaining-an-authorization-code
[Section 4.2.1]: consumer.html#constructing-authentication-token
[Section 4.2.2]: consumer.html#submitting-a-token-request
[Section 5.1]: b2b.html#obtaining-an-authorization-code
[Section 5.2.1]: b2b.html#constructing-authentication-token
[Section 5.2.1.1]: b2b.html#b2b-authorization-extension-object
[Section 5.2.2]: b2b.html#submitting-a-token-request
[Section 6]: user.html
[Section 7.1]: general.html#authorization-code-flow
[Section 7.3]: general.html#certification-example-for-client-applications
[CapabilityStatement]: StructureDefinition-udap-security-capabilitystatement.html
[Carequality FHIR-Based Exchange IG]: https://carequality.org/wp-content/uploads/2020/12/Carequality-FHIR-Implementation-Guide.pdf
[UDAP Server Metadata]: https://www.udap.org/udap-server-metadata-stu1.html
[UDAP Tiered OAuth for User Authentication]: https://www.udap.org/udap-user-auth-stu1.html
[UDAP Tiered OAuth]: https://www.udap.org/udap-user-auth-stu1.html
[RFC 3986]: https://datatracker.ietf.org/doc/html/rfc3986
[Section 1.5 of RFC 6749]: https://datatracker.ietf.org/doc/html/rfc6749#section-1.5
[Section 4.1.2.1 of RFC 6749]: https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1
[Section 5 of RFC 6749]: https://datatracker.ietf.org/doc/html/rfc6749#section-5
[Section 6 of RFC 6749]: https://datatracker.ietf.org/doc/html/rfc6749#section-6
[Section 3.2.1 of RFC 7591]: https://datatracker.ietf.org/doc/html/rfc7591#section-3.2.1
[Section 2.1 of RFC 8414]: https://datatracker.ietf.org/doc/html/rfc8414#section-2.1
[Section 3.1.2.1 of OIDC Core]: https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
[Section 3.1.3.1 of OIDC Core]: https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest
[Section 3.1.3.5 of OIDC Core]: https://openid.net/specs/openid-connect-core-1_0.html#TokenResponseValidation
[Section 5.3 of OIDC Core]: https://openid.net/specs/openid-connect-core-1_0.html#UserInfo

---

File: repos/HL7_SLASH_fhir-udap-security-ig/input/pagecontent/about.md

### Package File

The following package file includes an NPM package file used by many FHIR tools. It includes all the value sets, profiles, extensions, list of pages and urls in the IG, etc. for this version of the Implementation Guide. This file should be the first choice when generating any implementation artifacts as it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the contents of this specification and the applicable profiles in order to make a conformant implementation. See the overview on validating [FHIR profiles and resources](http://hl7.org/fhir/R4/validation.html):

[Package](package.tgz)

### Downloadable Copy of Entire Specification

The following ZIP file contains a downloadable version of this IG that can be hosted locally:
[Downloadable Copy](full-ig.zip)

### Cross Version Analysis 

{% include cross-version-analysis.xhtml %} 

### Dependency Table 

{% include dependency-table-short.xhtml %} 

### Globals Table 

{% include globals-table.xhtml %} 

### Notices

HL7&reg;, FHIR&reg;, the HL7&reg; logo, and the FHIR&reg; flame design are registered trademarks of Health Level Seven International.
UDAP&trade; and the gear design are trademarks of UDAP.org.
{% include ip-statements.xhtml %} 

### Credits

Editor: Luis C. Maas, EMR Direct and UDAP.org

This implementation guide was made possible by the thoughtful contributions and feedback of the following people and organizations:

The members of the ONC FHIR at Scale Taskforce (FAST) Security Tiger Team<br>
The members of the HL7/UDAP.org joint project working group<br>
The members of the HL7 Security Work Group


---

File: repos/HL7_SLASH_fhir-udap-security-ig/input/pagecontent/b2b.md

This guide supports B2B client applications using either the client credentials or authorization code grant types. The B2B transactions in this guide occur between a requesting organization (the Requestor operating the client application) and a responding organization (the Responder operating the OAuth Server and Resource Server holding the data of interest to the Requestor). In some cases, the Requestor's client app operates in an automated manner. In other cases, there will also be a local user from the requesting organization (the User interacting with the Requestor's client application). The client credentials grant type is always used for automated (aka "headless") client apps. However, when a User is involved, either the client credentials or authorization code grant may be used, as discussed below.

For client credentials flow, any necessary User authentication and authorization is performed by the Requestor as a prerequisite, before the Requestor's client app interacts with the Responder's servers, i.e. the Requestor is responsible for ensuring that only its authorized Users access the client app and only make requests allowed by the Requestor. How the Requestor performs this is out of scope for this guide but will typically rely on internal user authentication and access controls.

<div class="stu-note" markdown="1">
 Examples of automated client apps that use the client credentials grant type include SMART App Launch Backend Services and certain IUA Authorization Clients.
</div>

For authorization code flow, the User is expected to be interacting with the Requestor's client app in real time, at least during the initial authorization of the client app with the Responder's OAuth Server. Typically, the User must authenticate to the Responder's system at the time of initial authorization. If the local user has been issued credentials by the Responder to use for this purpose, the authorization code flow will typically involve use of those credentials. However, it is anticipated that in some workflows, the local user will not have their own credentials on the Responder's system, but will instead have credentials on their "home" system. In these cases, the UDAP Tiered OAuth workflow is used so that the Responder's OAuth Server can interact with the Requestor's OIDC Server in an automated manner to authenticate the User, as described in [Section 6].

Thus, this guide provides two different paths (client credentials grants and authorization code grants with Tiered OAuth) that a user affiliated with the Requestor without credentials on the Responder's system may use to obtain access to data held by the Responder.

B2B client applications registered to use the authorization code grant **SHALL** obtain an access token for access to FHIR resources by following the OAuth 2.0 authorization code grant flow described in [Section 4.1](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1) of RFC 6749, with the additional options and constraints discussed below. 

Client applications registered to use the client credentials grant **SHALL** obtain an access token for access to FHIR resources by following the OAuth 2.0 client credentials grant flow described in [Section 4.4](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4) of RFC 6749, and with the additional options and constraints discussed below. As noted in [Section 3], the Requestor is responsible for ensuring that the Requestor's User, if applicable, is using the app only as authorized by the Requestor.

### Obtaining an authorization code

The section does not apply to client applications registered to use the client credentials grant.

The workflow for obtaining an authorization code is summarized in the following diagram:
<br>
<div>
{% include authz.svg %}
</div>

Client applications registered to use the authorization code grant **SHALL** request an authorization code as per [Section 4.1.1](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.1) of RFC 6749, with the following additional constraints. Client applications that also support the SMART App Launch IG are **NOT REQUIRED** to include a launch scope or launch context requirement scope. Client applications and servers **MAY** optionally support UDAP Tiered OAuth for User Authentication to allow for cross-organizational or third party user authentication as described in [Section 6].

Servers **SHALL** handle and respond to authorization code requests as per [Section 4.1.2](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2) of RFC 6749.

Client applications and Authorization Servers using the authorization code flow **SHALL** conform to the additional constraints for authorization code flow found in [Section 7.1] of this guide.

### Obtaining an access token

The workflow for obtaining an access token is summarized in the following diagram:
<br>
<div>
{% include token.svg %}
</div>

Client applications using the authorization code flow **SHALL** exchange authorization codes for access tokens as per [Section 4.1.3](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.3) of RFC 6749, with the following additional options and constraints. Client applications using the client credentials flow do not use authorization codes when requesting an access token.

Client applications using the authorization code flow **SHALL** include a `code_verifier` parameter and value in the token request as per Section 4.5 of RFC 7636.

#### Constructing Authentication Token

Client apps following this guide will have registered to authenticate using a private key rather than a shared `client_secret`. Thus, the client **SHALL** use its private key to sign an Authentication Token as described in this section, and include this JWT in the `client_assertion` parameter of its token request as described in [Section 5.1](https://www.udap.org/udap-jwt-client-auth-stu1.html) of UDAP JWT-Based Client Authentication and detailed further in [Section 5.2.2] of this guide.

Authentication Tokens submitted by client apps **SHALL** conform to the general JWT header requirements above and **SHALL** include the following parameters in the JWT claims defined in [Section 4](https://www.udap.org/udap-jwt-client-auth-stu1.html) of UDAP JWT-Based Client Authentication:

<table class="table">
  <thead>
    <th colspan="3">Authentication JWT Claims</th>
  </thead>
  <tbody>
    <tr>
      <td><code>iss</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        The application's <code>client_id</code> as assigned by the Authorization Server during the registration process
      </td>
    </tr>
    <tr>
      <td><code>sub</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        The application's <code>client_id</code> as assigned by the Authorization Server during the registration process
      </td>
    </tr>
    <tr>
      <td><code>aud</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        The FHIR Authorization Server's token endpoint URL
      </td>
    </tr>
    <tr>
      <td><code>exp</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Expiration time integer for this authentication JWT, expressed in seconds since the "Epoch" (1970-01-01T00:00:00Z UTC)
      </td>
    </tr>
    <tr>
      <td><code>iat</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Issued time integer for this authentication JWT, expressed in seconds since the "Epoch"
      </td>
    </tr>
    <tr>
      <td><code>jti</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        A nonce string value that uniquely identifies this authentication JWT. See <a href="index.html#jwt-claims">Section 1.2.4</a> for additional requirements regarding reuse of values.
      </td>
    </tr>
    <tr>
      <td><code>extensions</code></td>
      <td><span class="label label-warning">conditional</span></td>
      <td>
        A JSON object containing one or more extensions. The HL7 B2B Authorization Extension Object defined below is required for B2B client apps using the <code>client_credentials</code> flow; omit for client apps using the <code>authorization_code</code> flow
      </td>
    </tr>
  </tbody>
</table>

The maximum lifetime for an Authentication Token **SHALL** be 5 minutes, i.e. the value of `exp` minus the value of `iat` **SHALL** NOT exceed 300 seconds. The Authorization Server **MAY** ignore any unrecognized claims in the Authentication Token. The Authentication Token **SHALL** be signed and serialized using the JSON compact serialization method.

##### B2B Authorization Extension Object

The B2B Authorization Extension Object is used by client apps following the `client_credentials` flow to provide additional information regarding the context under which the request for data would be authorized. The client app constructs a JSON object containing the following keys and values and includes this object in the `extensions` object of the Authentication JWT as the value associated with the key name `hl7-b2b`. Servers that support the B2B `client credentials` flow described in this guide **SHALL** support this B2B Authorization Extension Object.

<table class="table">
  <thead>
    <th colspan="3">B2B Authorization Extension Object<br>Key Name: "hl7-b2b"</th>
  </thead>
  <tbody>
    <tr>
      <td><code>version</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        String with fixed value: <code>"1"</code>
      </td>
    </tr>
    <tr>
      <td><code>subject_name</code></td>
      <td><span class="label label-warning">conditional</span></td>
      <td>
        String containing the human readable name of the human or non-human requestor; required if known.
      </td>
    </tr>
    <tr>
      <td><code>subject_id</code></td>
      <td><span class="label label-warning">conditional</span></td>
      <td>
        String containing a unique identifier for the requestor; required if known for human requestors when the <code>subject_name</code> parameter is present. For US Realm, the value <strong>SHALL</strong> be the subject's individual National Provider Identifier (NPI); omit for non-human requestors and for requestors who have not been assigned an NPI. See Section 5.2.1.2 below for the preferred format of the identifier value string.
      </td>
    </tr>
    <tr>
      <td><code>subject_role</code></td>
      <td><span class="label label-warning">conditional</span></td>
      <td>
        String containing a code identifying the role of the requestor; required if known for human requestors when the <code>subject_name</code> parameter is present. For US Realm, trust communities <strong>SHOULD</strong> constrain the allowed values and formats, and are encouraged to draw from the National Uniform Claim Committee (NUCC) Provider Taxonomy Code Set, but are not required to do so to be considered conformant. See Section 5.2.1.2 below for the preferred format of the code value string.
      </td>
    </tr>
    <tr>
      <td><code>organization_name</code></td>
      <td><span class="label label-warning">optional</span></td>
      <td>
        String containing the human readable name of the organizational requestor. If a subject is named, the organizational requestor is the organization represented by the subject.
      </td>
    </tr>
    <tr>
      <td><code>organization_id</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        String containing a unique identifier for the organizational requestor. If a subject is named, the organizational requestor is the organization represented by the subject. The identifier <strong>SHALL</strong> be a Uniform Resource Identifier (URI). Trust communities <strong>SHALL</strong> define the allowed URI scheme(s). If a URL is used, the issuer <strong>SHALL</strong> include a URL that is resolvable by the receiving party.
      </td>
    </tr>
    <tr>
      <td><code>purpose_of_use</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        An array of one or more strings, each containing a code identifying a purpose for which the data is being requested. For US Realm, trust communities <strong>SHOULD</strong> constrain the allowed values, and are encouraged to draw from the HL7 <a href="http://terminology.hl7.org/ValueSet/v3-PurposeOfUse">PurposeOfUse</a> value set, but are not required to do so to be considered conformant. See Section 5.2.1.2 below for the preferred format of each code value string array element.
      </td>
    </tr>
    <tr>
      <td><code>consent_policy</code></td>
      <td><span class="label label-warning">optional</span></td>
      <td>
        An array of one or more strings, each containing a URI identifiying a privacy consent directive policy or other policy consistent with the value of the <code>purpose_of_use</code> parameter.
      </td>
    </tr>
    <tr>
      <td><code>consent_reference</code></td>
      <td><span class="label label-warning">conditional</span></td>
      <td>
        An array of one or more strings, each containing an absolute URL consistent with a <a href="https://www.hl7.org/fhir/R4/references.html#literal">literal reference</a> to a FHIR <a href="https://www.hl7.org/fhir/R4/consent.html">Consent</a> or <a href="https://www.hl7.org/fhir/R4/documentreference.html">DocumentReference</a> resource containing or referencing a privacy consent directive relevant to a purpose identified by the <code>purpose_of_use</code> parameter and the policy or policies identified by the <code>consent_policy</code> parameter. The issuer of this Authorization Extension Object <strong>SHALL</strong> only include URLs that are resolvable by the receiving party. If a referenced resource does not include the raw document data inline in the resource or as a contained resource, then it <strong>SHALL</strong> include a URL to the attachment data that is resolvable by the receiving party. Omit if <code>consent_policy</code> is not present.
      </td>
    </tr>
  </tbody>
</table>

##### Preferred format for identifiers and codes

The preferred format to represent an identifier or code as a string value within an authorization extension object is as a Uniform Resource Identifier (URI) as defined in [RFC 3986]. Trust communities are encouraged to use this preferred format, but are not required to do so to be considered conformant with this guide. 

If the identifier or code is itself a URI, then the native representation is preferred. Otherwise, the preferred method to construct a URI is as follows:

For identifiers, concatenate a URI identifying the namespace, the '#' character, and the unique identifier assigned within the namespace. 

For codes, concatenate a URI identifying the code system, the '#' character, and a code taken from the code system.

For example, the U.S. NPI number 1234567890 can be represented as `urn:oid:2.16.840.1.113883.4.6#1234567890` and the purpose of use treatment can be represented as `urn:oid:2.16.840.1.113883.5.8#TREAT`.

#### Submitting a token request

##### Authorization code grant

Client applications using the authorization code grant and authenticating with a private key and Authentication Token as per [Section 5.2.1] **SHALL** submit a POST request to the Authorization Server's token endpoint containing the following parameters as per [Section 5.1](https://www.udap.org/udap-jwt-client-auth-stu1.html) of UDAP JWT-Based Client Authentication. Client apps authenticating in this manner **SHALL NOT** include an HTTP Authorization header or client secret in its token endpoint request. The token request **SHALL** include the following parameters:

<table class="table">
  <thead>
    <th colspan="3">Token request parameters</th>
  </thead>
  <tbody>
    <tr>
      <td><code>grant_type</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Fixed value: <code>authorization_code</code>
      </td>
    </tr>
    <tr>
      <td><code>code</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        The code that the app received from the Authorization Server
      </td>
    </tr>
    <tr>
      <td><code>redirect_uri</code></td>
      <td><span class="label label-warning">conditional</span></td>
      <td>
        The client application's redirection URI. This parameter <strong>SHALL</strong> be present only if the <code>redirect_uri</code> parameter was included in the authorization request in Section 5.1, and their values <strong>SHALL</strong> be identical.
      </td>
    </tr>
    <tr>
      <td><code>client_assertion_type</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Fixed value: <code>urn:ietf:params:oauth:client-assertion-type:jwt-bearer</code>
      </td>
    </tr>
    <tr>
      <td><code>client_assertion</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        The signed Authentication Token JWT
      </td>
    </tr>
    <tr>
      <td><code>udap</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Fixed value: <code>1</code>
      </td>
    </tr>
  </tbody>
</table>

##### Client credentials grant

Client applications using the client credentials grant and authenticating with a private key and Authentication Token as per [Section 5.2.1] **SHALL** submit a POST request to the Authorization Server's token endpoint containing the following parameters as per [Section 5.2](https://www.udap.org/udap-jwt-client-auth-stu1.html) of UDAP JWT-Based Client Authentication. Client apps authenticating in this manner **SHALL NOT** include an HTTP Authorization header or client secret in its token endpoint request. The token request **SHALL** include the following parameters:

<table class="table">
  <thead>
    <th colspan="3">Token request parameters</th>
  </thead>
  <tbody>
    <tr>
      <td><code>grant_type</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Fixed value: <code>client_credentials</code>
      </td>
    </tr>
    <tr>
      <td><code>client_assertion_type</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Fixed value: <code>urn:ietf:params:oauth:client-assertion-type:jwt-bearer</code>
      </td>
    </tr>
    <tr>
      <td><code>client_assertion</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        The signed Authentication Token JWT
      </td>
    </tr>
    <tr>
      <td><code>udap</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Fixed value: <code>1</code>
      </td>
    </tr>
  </tbody>
</table>

#### Server processing of token requests

An Authorization Server receiving token requests containing Authentication Tokens as above **SHALL** validate and respond to the request as per [Sections 6 and 7](https://www.udap.org/udap-jwt-client-auth-stu1.html) of UDAP JWT-Based Client Authentication.

For client applications using an authorization code grant, the Authorization Server **SHALL** return an error as per Section 4.6 of RFC 7636 if the client included a `code_challenge` in its authorization request but did not include the correct `code_verfier` value in the corresponding token request.

For all successful token requests, the Authorization Server **SHALL** issue access tokens with a lifetime no longer than 60 minutes.

<div class="stu-note" markdown="1">
This guide does not currently constrain the type or format of access tokens issued by Authorization Servers. Note that other implementation guides (e.g. SMART App Launch, IUA, etc.), when used together with this guide, may limit the allowed access token types (e.g. Bearer) and/or formats (e.g. JWT).
</div>

### Refresh tokens

This guide supports the use of refresh tokens, as described in [Section 1.5 of RFC 6749]. Authorization Servers **MAY** issue refresh tokens to B2B client applications that use the authorization code grant type as per [Section 5 of RFC 6749]. Refresh tokens are not used with the client credentials grant type. Client apps that have been issued refresh tokens **MAY** make refresh requests to the token endpoint as per [Section 6 of RFC 6749]. Client apps authenticate to the Authorization Server for refresh requests by constructing and including an Authentication Token in the same manner as for initial token requests.

{% include link-list.md %}


---

File: repos/HL7_SLASH_fhir-udap-security-ig/input/pagecontent/changelog.md

Changes from the previous version are summarized below with links to the corresponding HL7 ticket. The summaries below are non-normative.

### Version 2.0.0-ballot - STU2 Ballot

|Ticket|Ticket Description|
|---------|----------|
|[FHIR-41520](https://jira.hl7.org/browse/FHIR-41520)|Clarify "state" parameter required for authorization code flow|
|[FHIR-42958](https://jira.hl7.org/browse/FHIR-42958)|Add guidance for use of PKCE|
|[FHIR-43005](https://jira.hl7.org/browse/FHIR-43005)|Clarify server may grant a subset of "scopes_supported"|
|[FHIR-43024](https://jira.hl7.org/browse/FHIR-43024)|Add STU Note regarding concurrent use with SMART|
|[FHIR-45173](https://jira.hl7.org/browse/FHIR-45173)|Add certification example for privacy disclosures|
|[FHIR-46113](https://jira.hl7.org/browse/FHIR-46113)|Add certification example for exchange purposes|
|[FHIR-46448](https://jira.hl7.org/browse/FHIR-46448)|Add scope guidance based on TEFCA SOP|

### Version 1.1.0 - STU1 Update 1

|Ticket|Ticket Description|
|---------|----------|
|[FHIR-40459](https://jira.hl7.org/browse/FHIR-40459)|Clarify client is required to validate signed_metadata as per the UDAP server metadata profile|
|[FHIR-40579](https://jira.hl7.org/browse/FHIR-40579)|Correct inactive link in Required UDAP Metadata|
|[FHIR-40601](https://jira.hl7.org/browse/FHIR-40601)|Correct invalid link to HL7 SMART App Launch IG history|
|[FHIR-40791](https://jira.hl7.org/browse/FHIR-40791)|Clarify "aud" value in authentication JWTs|
|[FHIR-41517](https://jira.hl7.org/browse/FHIR-41517)|Clarify algorithm used by servers to sign UDAP metadata|
|[FHIR-43002](https://jira.hl7.org/browse/FHIR-43002)|Clarify that support for B2B extension is required for servers that support client credentials grants|
|[FHIR-43007](https://jira.hl7.org/browse/FHIR-43007)|Clarify conformance strength of algorithms by listing as a table|
|[FHIR-43008](https://jira.hl7.org/browse/FHIR-43008)|Clarify "jti" reuse is permitted after expiration of any previous JWTs using same value|
|[FHIR-43014](https://jira.hl7.org/browse/FHIR-43014)|Correct status code to be returned by server when community is not recognized or not supported|
|[FHIR-43021](https://jira.hl7.org/browse/FHIR-43021)|Add missing hyperlinks for certain UDAP profiles|
|[FHIR-43048](https://jira.hl7.org/browse/FHIR-43048)|Clarify servers must respond to GET requests for metadata|
|[FHIR-43116](https://jira.hl7.org/browse/FHIR-43116)|Clarify that registration updates are requested within the context of the client's trust community|
|[FHIR-43121](https://jira.hl7.org/browse/FHIR-43121)|Remove duplicated requirements for "iss" parameter in software statement|
|[FHIR-43554](https://jira.hl7.org/browse/FHIR-43554)|Clarify allowed registration claims returned by server may be different than claims submitted in software statement|

<style>
table, th, td 
{
  border: 1px solid Silver; 
  padding: 5px
}
th {
  background: Azure; 
}
</style>

---

File: repos/HL7_SLASH_fhir-udap-security-ig/input/pagecontent/consumer.md

This guide supports consumer-facing client applications using the authorization code grant type. 

Consumer-facing client applications **SHALL** obtain an access token for access to FHIR resources by following the OAuth 2.0 authorization code grant flow, with the additional options and constraints discussed below.

### Obtaining an authorization code

The workflow for obtaining an authorization code is summarized in the following diagram:
<br>
<div>
{% include authz.svg %}
</div>

Client applications **SHALL** request an authorization code as per [Section 4.1.1](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.1) of RFC 6749, with the following additional constraints. Client applications that also support the SMART App Launch IG are **NOT REQUIRED** to include a launch scope or launch context requirement scope. Client applications and servers **MAY** optionally support UDAP Tiered OAuth for User Authentication to allow for cross-organizational or third party user authentication as described in [Section 6].

Servers **SHALL** handle and respond to authorization code requests as per [Section 4.1.2](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2) of RFC 6749. 

Client applications and Authorization Servers **SHALL** conform to the additional constraints for authorization code flow found in [Section 7.1] of this guide.

### Obtaining an access token

The workflow for obtaining an access token is summarized in the following diagram:
<br>
<div>
{% include token.svg %}
</div>

Client applications **SHALL** exchange authorization codes for access tokens as per [Section 4.1.3](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.3) of RFC 6749, with the following additional options and constraints.

Client applications **SHALL** include a `code_verifier` parameter and value in the token request as per Section 4.5 of RFC 7636.

#### Constructing Authentication Token

If the client app has registered to authenticate using a private key rather than a shared client_secret, then the client **SHALL** use its private key to sign an Authentication Token as described in this section, and include this JWT in the `client_assertion` parameter of its token request as described in [Section 5.1](https://www.udap.org/udap-jwt-client-auth-stu1.html) of UDAP JWT-Based Client Authentication and detailed further in [Section 4.2.2] of this guide. For clients and servers that also support the SMART App Launch IG, this overrides the requirement for the client to use HTTP Basic Authentication with a client_secret in [Section 7.1.3](http://hl7.org/fhir/smart-app-launch/1.0.0/index.html#step-3-app-exchanges-authorization-code-for-access-token) of the SMART App Launch IG v1.0.0.

Authentication Tokens submitted by client apps **SHALL** conform to the general JWT header requirements above and **SHALL** include the following parameters in the JWT claims defined in [Section 4](https://www.udap.org/udap-jwt-client-auth-stu1.html) of UDAP JWT-Based Client Authentication:

<table class="table">
  <thead>
    <th colspan="3">Authentication JWT Claims</th>
  </thead>
  <tbody>
    <tr>
      <td><code>iss</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        The application's <code>client_id</code> as assigned by the Authorization Server during the registration process
      </td>
    </tr>
    <tr>
      <td><code>sub</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        The application's <code>client_id</code> as assigned by the Authorization Server during the registration process
      </td>
    </tr>
    <tr>
      <td><code>aud</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        The FHIR Authorization Server's token endpoint URL
      </td>
    </tr>
    <tr>
      <td><code>exp</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Expiration time integer for this authentication JWT, expressed in seconds since the "Epoch" (1970-01-01T00:00:00Z UTC).
      </td>
    </tr>
    <tr>
      <td><code>iat</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Issued time integer for this authentication JWT, expressed in seconds since the "Epoch"
      </td>
    </tr>
    <tr>
      <td><code>jti</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        A nonce string value that uniquely identifies this authentication JWT. See <a href="index.html#jwt-claims">Section 1.2.4</a> for additional requirements regarding reuse of values.
      </td>
    </tr>
  </tbody>
</table>

The maximum lifetime for an Authentication Token **SHALL** be 5 minutes, i.e. the value of `exp` minus the value of `iat` **SHALL NOT** exceed 300 seconds. The Authorization Server **MAY** ignore any unrecognized claims in the Authentication Token. The Authentication Token **SHALL** be signed and serialized using the JSON compact serialization method. 

#### Submitting a token request

For client applications authenticating with a shared secret, the client application and server **SHALL** follow the token request and response protocol in Section 4.1.3 and Section 4.1.4 of RFC 6749.

Client applications authenticating with a private key and Authentication Token as per [Section 4.2.1] **SHALL** submit a POST request to the Authorization Server's token endpoint containing the following parameters as per [Section 5.1](https://www.udap.org/udap-jwt-client-auth-stu1.html) of UDAP JWT-Based Client Authentication. Client apps authenticating in this manner **SHALL NOT** include an HTTP Authorization header or client secret in its token endpoint request. The token request **SHALL** include the following parameters:

<table class="table">
  <thead>
    <th colspan="3">Token request parameters</th>
  </thead>
  <tbody>
    <tr>
      <td><code>grant_type</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Fixed value: <code>authorization_code</code>
      </td>
    </tr>
    <tr>
      <td><code>code</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        The code that the app received from the Authorization Server
      </td>
    </tr>
    <tr>
      <td><code>redirect_uri</code></td>
      <td><span class="label label-warning">conditional</span></td>
      <td>
        The client application's redirection URI. This parameter <strong>SHALL</strong> be present only if the <code>redirect_uri</code> parameter was included in the authorization request in Section 4.1, and their values <strong>SHALL</strong> be identical.
      </td>
    </tr>
    <tr>
      <td><code>client_assertion_type</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Fixed value: <code>urn:ietf:params:oauth:client-assertion-type:jwt-bearer</code>
      </td>
    </tr>
    <tr>
      <td><code>client_assertion</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        The signed Authentication Token JWT
      </td>
    </tr>
    <tr>
      <td><code>udap</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Fixed value: <code>1</code>
      </td>
    </tr>
  </tbody>
</table>

#### Server processing of token requests

An Authorization Server receiving token requests containing Authentication Tokens as above **SHALL** validate and respond to the request as per [Sections 6 and 7](https://www.udap.org/udap-jwt-client-auth-stu1.html) of UDAP JWT-Based Client Authentication.

The Authorization Server **SHALL** return an error as per Section 4.6 of RFC 7636 if the client included a `code_challenge` in its authorization request but did not include the correct `code_verfier` value in the corresponding token request.

For all successful token requests, the Authorization Server **SHALL** issue access tokens with a lifetime no longer than 60 minutes. 

<div class="stu-note" markdown="1">
This guide does not currently constrain the type or format of access tokens issued by Authorization Servers. Note that other implementation guides (e.g. SMART App Launch, IUA, etc.), when used together with this guide, may limit the allowed access token types (e.g. Bearer) and/or formats (e.g. JWT).
</div>

### Refresh tokens

This guide supports the use of refresh tokens, as described in [Section 1.5 of RFC 6749]. Authorization Servers **MAY** issue refresh tokens to consumer-facing client applications as per [Section 5 of RFC 6749]. Client apps that have been issued refresh tokens **MAY** make refresh requests to the token endpoint as per [Section 6 of RFC 6749]. Client apps authenticate to the Authorization Server for refresh requests by constructing and including an Authentication Token in the same manner as for initial token requests.

{% include link-list.md %}

---

File: repos/HL7_SLASH_fhir-udap-security-ig/input/pagecontent/discovery.md

The requirements in this section are applicable to both consumer-facing and B2B apps and the servers that support them. The client and the server **SHALL** conform to the underlying server metadata profile in [UDAP Server Metadata].

### Discovery of Endpoints

A FHIR Server **SHALL** make its Authorization Server's authorization, token, and registration endpoints, and associated metadata available for discovery by client applications. Servers **SHALL** respond to `GET` requests to the following metadata URL by unregistered client applications and without requiring client authentication, where {baseURL} represents the base FHIR URL for the FHIR server: {baseURL}/.well-known/udap

The discovery workflow is summarized in the following diagram:
<br>
<div>
{% include discovery.svg %}
</div>

UDAP metadata **SHALL** be structured as a JSON object as per section 1 of [UDAP Server Metadata](https://www.udap.org/udap-server-metadata-stu1.html#section-1) and discussed further in [Section 2.2].

If a server returns a `404 Not Found` response to a `GET` request to the UDAP metadata endpoint, the client application **SHOULD** conclude that the server does not support UDAP workflows.

Note: Servers conforming to this guide are generally expected, but not required, to also support the HL7 SMART App Launch Framework, which defines additional discovery and metadata requirements.
{:.bg-info}

### Required UDAP Metadata

The metadata returned from the UDAP metadata endpoint defined above **SHALL** represent the server's capabilities with respect to the UDAP workflows described in this guide. If no UDAP workflows are supported, the server **SHALL** return a `404 Not Found` response to the metadata request. For elements that are represented by JSON arrays, clients **SHALL** interpret an empty array value to mean that the corresponding capability is NOT supported by the server.

Note: For servers that also support the SMART App Launch Framework, there is some expected overlap in the UDAP metadata elements defined below and metadata that a server may return for other workflows, e.g. OAuth 2.0 authorization and token endpoints are also included in metadata defined in the SMART App Launch Framework. Having different metadata endpoints permits servers to return different metadata values for different workflows. For example, a server could operate a different token endpoint to handle token requests from clients conforming to this guide. Thus, for the workflows defined in this guide, client applications **SHALL** use the applicable values returned in a server's UDAP metadata.


<table class="table">
  <thead>
    <th colspan="3">Metadata parameter values</th>
  </thead>
  <tbody>
    <tr>
      <td><code>udap_versions_supported</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        A fixed array with one string element: <code>["1"]</code>
      </td>
    </tr>
    <tr>
      <td><code>udap_profiles_supported</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        An array of two or more strings identifying the core UDAP profiles supported by the Authorization Server.
        The array <strong>SHALL</strong> include: 
        <br><code>"udap_dcr"</code> for UDAP Dynamic Client Registration, and
        <br><code>"udap_authn"</code> for UDAP JWT-Based Client Authentication.
        <br>If the <code>grant_types_supported</code> parameter includes the string <code>"client_credentials"</code>, then the array <strong>SHALL</strong> also include:
        <br><code>"udap_authz"</code> for UDAP Client Authorization Grants using JSON Web Tokens to indicate support for Authorization Extension Objects.
        <br>If the server supports the user authentication workflow described in <a href="user.html#tiered-oauth-for-user-authentication">Section 6</a>, then the array <strong>SHALL</strong> also include:
        <br><code>"udap_to"</code> for UDAP Tiered OAuth for User Authentication.
      </td>
    </tr>
    <tr>
      <td><code>udap_authorization_extensions_supported</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        An array of zero or more recognized key names 
        for Authorization Extension Objects supported by the Authorization Server. If the Authorization Server supports the B2B Authorization Extension Object defined in <a href="b2b.html#b2b-authorization-extension-object">Section 5.2.1.1</a>, then the following key name <strong>SHALL</strong> be included:<br>
        <code>["hl7-b2b"]</code>
      </td>
    </tr>
    <tr>
      <td><code>udap_authorization_extensions_required</code></td>
      <td><span class="label label-warning">conditional</span></td>
      <td>
        An array of zero or more recognized key names 
        for Authorization Extension Objects required by the Authorization Server in every token request. This metadata parameter <strong>SHALL</strong> be present if the value of the <code>udap_authorization_extensions_supported</code> parameter is not an empty array. If the Authorization Server requires the B2B Authorization Extension Object defined in <a href="b2b.html#b2b-authorization-extension-object">Section 5.2.1.1</a> in every token request, then the following key name <strong>SHALL</strong> be included:<br>
        <code>["hl7-b2b"]</code>
      </td>
    </tr>
    <tr>
      <td><code>udap_certifications_supported</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        An array of zero or more certification URIs supported by the Authorization Server, e.g.:<br>
        <code>["https://www.example.com/udap/profiles/example-certification"]</code>
      </td>
    </tr>
    <tr>
      <td><code>udap_certifications_required</code></td>
      <td><span class="label label-warning">conditional</span></td>
      <td>
        An array of zero or more certification URIs required by the Authorization Server. This metadata parameter <strong>SHALL</strong> be present if the value of the <code>udap_certifications_supported</code> parameter is not an empty array. Example:<br>
        <code>["https://www.example.com/udap/profiles/example-certification"]</code>
      </td>
    </tr>
    <tr>
      <td><code>grant_types_supported</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        An array of one or more grant types supported by the Authorization Server, e.g.:<br>
        <code>["authorization_code", "refresh_token",  "client_credentials"]</code><br>
        The <code>"refresh_token"</code> grant type <strong>SHALL</strong> only be included if the
        <code>"authorization_code"</code> grant type is also included.
      </td>
    </tr>
    <tr>
      <td><code>scopes_supported</code></td>
      <td><span class="label label-info">optional</span></td>
      <td>
        An array of one or more strings containing scopes supported by the Authorization Server. The server <strong>MAY</strong> grant different subsets of these scopes for different client types or entities. Example for a server that also supports SMART App Launch v1 scopes:<br>
        <code>["openid", "launch/patient", "system/Patient.read", "system/AllergyIntolerance.read", "system/Procedures.read"]</code>
      </td>
    </tr>
    <tr>
      <td><code>authorization_endpoint</code></td>
      <td><span class="label label-warning">conditional</span></td>
      <td>
        A string containing the absolute URL of the Authorization Server's authorization endpoint. This parameter <strong>SHALL</strong> be present if the value of the <code>grant_types_supported</code> parameter includes the string <code>"authorization_code"</code>
      </td>
    </tr>
    <tr>
      <td><code>token_endpoint</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        A string containing the absolute URL of the Authorization Server's token endpoint for UDAP JWT-Based Client Authentication.
      </td>
    </tr>
    <tr>
      <td><code>token_endpoint_auth_methods_supported</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Fixed array with one value: <code>["private_key_jwt"]</code>
      </td>
    </tr>
    <tr>
      <td><code>token_endpoint_auth_signing_alg_values_supported</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Array of strings identifying one or more signature algorithms supported by the Authorization Server for validation of signed JWTs submitted to the token endpoint for client authentication. For example:<br>
        <code>["RS256", "ES384"]</code>
      </td>
    </tr>
    <tr>
      <td><code>registration_endpoint</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        A string containing the absolute URL of the Authorization Server's registration endpoint.
      </td>
    </tr>
    <tr>
      <td><code>registration_endpoint_jwt_signing_alg_values_supported</code></td>
      <td><span class="label label-info">recommended</span></td>
      <td>
        Array of strings identifying one or more signature algorithms supported by the Authorization Server for validation of signed software statements, certification, and endorsements submitted to the registration endpoint. For example:<br>
        <code>["RS256", "ES384"]</code>
      </td>
    </tr>
    <tr>
      <td><code>signed_metadata</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        A string containing a JWT listing the server's endpoints, as defined in <a href="#signed-metadata-elements">Section 2.3</a> below.
      </td>
    </tr>
  </tbody>
</table>

An Authorization Server **MAY** include additional metadata elements in its metadata response as described in [UDAP Server Metadata]. However, a conforming client application might not support additional metadata elements.

### Signed metadata elements

A server's UDAP metadata **SHALL** include the `signed_metadata` element. The value of this element is a JWT constructed as described in [Section 1.2] and containing the claims in the table below. This JWT **SHALL** be signed using the [RS256](index.html#signature-algorithm-identifiers) signature algorithm.

<table class="table">
  <thead>
    <th colspan="3">Signed Metadata JWT claims</th>
  </thead>
  <tbody>
        <tr>
      <td><code>iss</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Issuer of the JWT -- unique identifying server URI. This <strong>SHALL</strong> match the value of a uniformResourceIdentifier entry in the Subject Alternative Name extension of the server's certificate included in the <code>x5c</code> JWT header, and <strong>SHALL</strong> be equal to the server's {baseURL}
      </td>
    </tr>
    <tr>
      <td><code>sub</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Same as <code>iss</code>.
      </td>
    </tr>
    <tr>
      <td><code>exp</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Expiration time integer for this JWT, expressed in seconds since the "Epoch" (1970-01-01T00:00:00Z UTC). The <code>exp</code> time <strong>SHALL</strong> be no more than 1 year after the value of the <code>iat</code> claim.
      </td>
    </tr>
    <tr>
      <td><code>iat</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Issued time integer for this JWT, expressed in seconds since the "Epoch"
      </td>
    </tr>
    <tr>
      <td><code>jti</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        A nonce string value that uniquely identifies this JWT. See <a href="index.html#jwt-claims">Section 1.2.4</a> for additional requirements regarding reuse of values.
      </td>
    </tr>
    <tr>
      <td><code>authorization_endpoint</code></td>
      <td><span class="label label-warning">conditional</span></td>
      <td>
        A string containing the absolute URL of the server's authorization endpoint, <strong>REQUIRED</strong> if the <code>authorization_endpoint</code> parameter is included in the unsigned metadata
      </td>
    </tr>
    <tr>
      <td><code>token_endpoint</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        A string containing the absolute URL of the server's token endpoint
      </td>
    </tr>
    <tr>
      <td><code>registration_endpoint</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        A string containing the absolute URL of the server's registration endpoint
      </td>
    </tr>
  </tbody>
</table>

The client **SHALL** validate the signed metadata returned by the server as per Section 3 of [UDAP Server Metadata].

Note: The use of the `signed_metadata` parameter in this guide is intended to align with [Section 2.1 of RFC 8414]. However, the requirements specified in this section are stricter than the corresponding requirements in RFC 8414.

### Multiple Trust Communities

A server that participates in more than one trust community may be issued different certificates from each community. However, the serialization method used to sign server metadata in the previous section of this guide requires the server to select only one certificate for use in assembling the signed JWT returned for the `signed_metadata` element. This can lead to scenarios where a client application might not trust the certificate that was selected by the server, but would have trusted one of the server's other certificates for a different trust community. 

To address this, a client application **MAY** add the optional query parameter `community` to the metadata request URL described in [Section 2.1] to indicate that it trusts certificates issued by the community identified by the parameter value. The value of the parameter **SHALL** be a URI as determined by the trust community for this purpose.

Server support for the `community` parameter is optional. If a server supports this parameter and recognizes the URI value, it **SHALL** select a certificate intended for use within the identified trust community, if it has been issued such a certificate, and use that certificate when generating the signed JWT returned for the `signed_metadata` element. If a server supports different UDAP capabilities for different communities, it **MAY** also return different values for other metadata elements described in [Section 2.2] as appropriate for the identified community. If the server does not recognize the community URI or does not have a suitable certificate for the identified community, it **MAY** return a `204 No Content` response to the metadata request to indicate that no UDAP workflows are supported by server in the context of that community, or it **MAY** return its default metadata, i.e. the metadata that it would have returned if the `community` parameter was not included in the request.

Note: The authors recommend that the client be prepared to handle server metadata signed with a key for a different trust community than expected, regardless if the community parameter was used.

{% include link-list.md %}


---

File: repos/HL7_SLASH_fhir-udap-security-ig/input/pagecontent/general.md

This section contains general guidance applicable to multiple authorization and authentication workflows.

### Authorization code flow

The constraints in the following subsections apply to all workflows utilizing the authorization code flow.

#### The state parameter
A Client application **SHALL** include the `state` parameter in its authorization request. An Authorization Server **SHALL** return an error code of `invalid_request` as per Section 4.1.2.1 of RFC 6749 if a client application does not include a `state` value in its authorization request.

Servers **SHALL** include the `state` parameter and corresponding value provided by the client application in the authorization response as per RFC 6749. The client application **SHALL NOT** proceed if the `state` parameter is not included in the authorization response or its value does not match the value provided by the client application in the corresponding authorization request.

#### Proof Key for Code Exchange (PKCE)

Client applications and Authorization Servers **SHALL** utilize Proof Key for Code Exchange (PKCE) with `code_challenge_method` of `S256` as defined in RFC 7636. An Authorization Server **SHOULD** return an error as per Section 4.4.1 of RFC 7636 if a client application does not include a `code_challenge` is its authorization request. 

The Authorization Server **SHALL** return an error in response to a token request as per Section 4.6 of RFC 7636 if the client included a `code_challenge` in its authorization request but did not include the correct `code_verfier` value in the corresponding token request.

### Scope negotiation

<div class="note-to-balloters" markdown="1">
The following constraints have been adapted from the TEFCA Faciliated FHIR SOP. Some of the constraints in that SOP conflict with constraints found elsewhere in this IG, or relate to requirements in other IGs such as the SMART App Launch IG. This will need to be resolved prior to STU2 publication. Feedback is requested.
</div>

A wildcard scope is a scope that can be alternatively represented as a set of non-wildcard scopes. An example of a wildcard scope is the SMART App Launch v1.0.0 scope `patient/Observation.*` which can expanded to the set of two non-wildcard scopes: `patient/Observation.read` and `patient/Observation.write`. Granting the wildcard scope to a client application is equivalent to granting the corresponding expanded set of non-wildcard scopes.

The constraints enumerated below apply for scope negotiation between client applications and servers. Unless otherwise specified, these constraints apply for both registration requests and access token requests made by client applications, and the corresponding responses returned by servers.

1. The `scopes_supported` metadata **SHALL** be present in the .well-known/smartconfiguration or .well-known/udap object, as applicable, and **SHALL** list all scopes supported including all supported wildcard scopes.

    <div class="note-to-balloters">
    `scopes_supported` is currently optional in the Discovery section of this guide. References to SMART specific content should be removed.
    </div>

1. Client applications and servers **MAY** support wildcard scopes.
1. A client application **MAY** request a wildcard scope only if wildcards are specified in the server's `scopes_supported` metadata list.
1. If a client application requests a wildcard scope and the server supports wildcards, then the server **SHOULD** return either the wildcard scope or an expanded set of scopes that the client has been granted in its response.
1. If a client application requests a wildcard scope and the server does **NOT** support wildcard scopes, then the server **SHOULD** respond with an error of "invalid_scope".

    <div class="bg-info">
    Note: "invalid_client_metadata" is the corresponding registration request error.
    </div>

1. If a server supports OIDC or SMART App Launch scopes, the server **SHOULD** put the corresponding scopes (e.g. "openid", "offline_access", "email", "fhirUser", etc.) in their `scopes_supported` metadata.
1. A server **MAY** grant fewer scopes than requested by the client application if the client application cannot have a scope specified in the request based on technical or policy guidelines at the responding organization or if the server does not recognize one or more of the requested scopes.
1. A server **SHOULD** respond with "invalid_scope" only if a wildcard scope is requested and not supported, or if none of the requested scopes are supported.

    <div class="bg-info">
    Note: "invalid_client_metadata" is the corresponding registration request error.
    </div>

1. At the time of a token request, an authorization server **MAY** grant additional scopes that are not in the set of scopes requested by the client application if the application has been registered with the server with a different set of scopes than was requested at registration based on technical or policy guidelines at the responding organization.
1. The scopes granted by a server to a client application at the time of an access token request **MAY** be the same as the set from registration or **MAY** be a subset.
1. The scopes granted by a server to a client application at the time of an access token request **MAY** be the same as the set of scopes requested by the client application or **MAY** be a subset.
1. An application **SHOULD** be able to receive a superset of the scopes requested if the server’s policies dictate that a request with a certain system or user/user role is granted specific scopes that are not part of the original request.
1. A server **SHOULD** return "invalid_scope" only if none of the scopes requested are available and/or not part of the scopes requested during registration.

    <div class="bg-info">
    Note: "invalid_client_metadata" is the corresponding registration request error.
    </div>

1. A server **SHALL** include the `scope` parameter in a token response if the set of scopes granted by the server to the client application is not identical to the set of scopes requested by the client application, or if the client application does not include a set of requested scopes in its request.

### Certification example for client applications

This section provides an example UDAP Certification that can be used by client applications or third parties to declare additional information about the client application at the time of registration.

A client application or third party **MAY** construct a certification by constructing a signed JWT as detailed in this section. The certification **SHALL** contain the required header elements specified in [Section 1.2.3] of this guide and the JWT claims listed in the table below. The certification **SHALL** be signed by the client application operator or by a third party using the signature algorithm identified in the `alg` header of the certification and with the private key that corresponds to the public key listed in the client’s X.509 certificate identified in the `x5c` header of the certification. Recognized Certification JWT claims and server processing rules for Certifications submitted by a client application are detailed in [UDAP Certifications and Endorsements for Client Applications](https://www.udap.org/udap-certifications-and-endorsements-stu1.html). A trust community **MAY** define additional keys to be included in the `extensions` object, as demonstrated in the example below.

<table class="table">
  <thead>
    <th colspan="3">Example Client Application Certification JWT Claims</th>
  </thead>
  <tbody>
    <tr>
      <td><code>iss</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Issuer of the JWT -- unique identifying URI of the signing entity. This <strong>SHALL</strong> match the value of a uniformResourceIdentifier entry in the Subject Alternative Name extension of the signer's certificate included in the <code>x5c</code> JWT header and <strong>SHALL</strong> uniquely identify a single signing entity over time.
      </td>
    </tr>
    <tr>
      <td><code>sub</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Subject of the JWT -- unique identifying client URI. This <strong>SHALL</strong> match the value of a uniformResourceIdentifier entry in the Subject Alternative Name extension of the client's certificate and <strong>SHALL</strong> uniquely identify a single client app operator and applications over time.
        For a self-signed certification, this is same as <code>iss</code>.
      </td>
    </tr>
    <tr>
      <td><code>aud</code></td>
      <td><span class="label label-warning">optional</span></td>
      <td>
        The "registration URL" of the intended Authorization server(s), i.e. the same URL to which the registration request will be posted. If absent, this certification is intended for all Authorization Servers. The value can be a single string or array of strings.
      </td>
    </tr>
    <tr>
      <td><code>exp</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Expiration time integer for this software statement, expressed in seconds since the "Epoch" (1970-01-01T00:00:00Z UTC). The <code>exp</code> time <strong>SHALL</strong> be no more than 3 years after the value of the <code>iat</code> claim.
      </td>
    </tr>
    <tr>
      <td><code>iat</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Issued time integer for this software statement, expressed in seconds since the "Epoch"
      </td>
    </tr>
    <tr>
      <td><code>jti</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        A nonce string value that uniquely identifies this software statement. See <a href="index.html#jwt-claims">Section 1.2.4</a> for additional requirements regarding reuse of values.
      </td>
    </tr>
    <tr>
      <td><code>certification_name</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        string with fixed value: "Example HL7 Client App Certification"
      </td>
    </tr>
    <tr>
      <td><code>certification_uris</code></td>
      <td><span class="label label-warning">required</span></td>
      <td>
        array of one string with fixed value: ["URI TBD"]
      </td>
    </tr>
    <tr>
      <td><code>grant_types</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Array of strings, each representing a requested grant type, from the following list: <code>"authorization_code"</code>, <code>"refresh_token"</code>, <code>"client_credentials"</code>. The array <strong>SHALL</strong> include either <code>"authorization_code"</code> or <code>"client_credentials"</code>, but not both. The value <code>"refresh_token"</code> <strong>SHALL NOT</strong> be present in the array unless <code>"authorization_code"</code> is also present.
      </td>
    </tr>
    <tr>
      <td><code>response_types</code></td>
      <td><span class="label label-warning">conditional</span></td>
      <td>
        Array of strings. If <code>grant_types</code> contains <code>"authorization_code"</code>, then this element <strong>SHALL</strong> have a fixed value of <code>["code"]</code>, and <strong>SHALL</strong> be omitted otherwise
      </td>
    </tr>
    <tr>
      <td><code>scope</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        String containing a space delimited list of scopes that may be requested by the client application for use in subsequent requests. The Authorization Server <strong>MAY</strong> consider this list when deciding the scopes that it will allow the application to subsequently request. Note for client apps that also support the SMART App Launch framework: apps requesting the <code>"client_credentials"</code> grant type <strong>SHOULD</strong> request system scopes; apps requesting the <code>"authorization_code"</code> grant type <strong>SHOULD</strong> request user or patient scopes.
      </td>
    </tr>
    <tr>
      <td><code>extensions</code></td>
      <td><span class="label label-success">optional</span></td>
      <td>
        A JSON object containing one or more of the keys listed in the following section.
      </td>
    </tr>
  </tbody>
</table>

Note: A certification self-signed by a client app operator can be used to declare the intended use of the application within a trust community. Certifications signed by a third party, such as the trust community administrator or an independent accreditor, can be used to assist servers in determining what a client application is authorized to do within a trust community. For example, a trust community administrator could use this certification to communicate the exchange purposes for which a particular client application operator has been approved.
#### Certification extension keys example

This section lists two example extension keys that could be considered for inclusion in a Certification. When defining a Certification, a trust community **MAY** define one or more extension keys to be included in the `extensions` object of the Certification JWT. The value of each extension key **SHALL** be a JSON value or a JSON object. For example, a Certification definition could specify a number, an array of strings, or a FHIR [Questionnaire](https://www.hl7.org/fhir/R4/questionnaire.html) resource as the value of an extension key.


<div class="bg-info">
Note: The example keys listed below in the description of the <code>privacy_disclosures</code> extension key are derived from an example Certification previously published by Carequality, which can be viewed <a href="https://carequality.org/wp-content/uploads/2020/12/Carequality-Consumer-Facing-App-Certification-Profile.pdf">here</a>.
</div>

<table class="table">
  <thead>
    <th colspan="3">Example Client Application Certification JWT Extensions Keys</th>
  </thead>
  <tbody>
    <tr>
      <td><code>exchange_purpose</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Array of strings, each containing a URI identifying an exchange purpose recognized by the trust community.
      </td>
    </tr>
    <tr>
      <td><code>privacy_disclosures</code></td>
      <td><span class="label label-warning">optional</span></td>
      <td>
        A JSON object containing a set of privacy-related keys and acceptable values established by the trust community. <br>Examples:
        <br>1. the key <code>funding</code> could be used to express the app's source of funding.
        <br>2. the key <code>data_storage</code> could be used to identify where a patient's data is stored.
        <br>3. the key <code>data_access_notification</code> could be used to indicate whether a user is notified when their data is accessed by someone else.
      </td>
    </tr>
  </tbody>
</table>


---

File: repos/HL7_SLASH_fhir-udap-security-ig/input/pagecontent/index.md

<div class="stu-note" markdown="1">
This Security FHIR&reg; IG has been established upon the recommendations of ONC's FHIR at Scale Taskforce (FAST) Security Tiger Team, and has been adapted from IGs previously published by UDAP.org. The workflows defined in the Unified Data Access Profiles (UDAP&trade;) have been used in several FHIR IGs, including the TEFCA Facilitated FHIR IG, Carequality FHIR IG, Carin BB IG, DaVinci HREX IG, and others. The objective of this IG is to harmonize workflows for both consumer-facing and B2B applications to facilitate cross-organizational and cross-network interoperability.

Additional enhancements include a formal definition for a B2B Authorization Extension Object to facilitate these transactions.
</div>

### Introduction

This implementation guide describes how to extend OAuth 2.0 using UDAP workflows for both consumer-facing apps that implement the authorization code flow, and business-to-business (B2B) apps that implement the client credentials flow or authorization code flow. This guide covers automating the client application registration process and increasing security using asymmetric cryptographic keys bound to digital certificates to authenticate ecosystem participants. This guide also provides a grammar for communicating metadata critical to healthcare information exchange.

The requirements described in this guide are intended to align with the proposed solutions of the ONC FHIR at Scale Taskforce’s Security Tiger Team, the security model and UDAP workflows outlined in the [Carequality FHIR-Based Exchange IG], and implementation guides incorporating UDAP workflows published by the [CARIN Alliance](http://hl7.org/fhir/us/carin-bb/STU1/Authorization_Authentication_and_Registration.html#authorization-and-authentication) and the [Da Vinci Project](http://hl7.org/fhir/us/davinci-hrex/STU1/smart-app-reg.html). This guide is also intended to be compatible and harmonious with client and server use of versions 1 or 2 of the [HL7 SMART App Launch IG](http://hl7.org/fhir/smart-app-launch/history.html).
{:.bg-info}

<div class="stu-note" markdown="1">
The FAST Security project team is working to identify any potential incompatibilities experienced by servers or client applications that support both this IG and the SMART App Launch IG concurrently. For example, while not an incompatibility per se, JWT-based authentication in version 2 of the SMART IG requires server support for either the RS384 or ES384 signature algorithms, while this IG requires server support for RS256. However, this does not present a compatibility issue because RS256 is permitted as an optional algorithm in the SMART IG, while both RS384 and ES384 are permitted as optional algorithms in this IG. Therefore, using any of these three signature algorithms would be compliant with both IGs. Additionally, the question has been raised as to whether this IG can be used for client registration but not used for subsequent authentication. Though adopters of this IG sometimes colloquially refer to its entire workflow as "Dynamic Client Registration", authentication consistent with this IG is also core to a compliant implementation and the HL7 UDAP FAST Security workgroup recommends that trust communities adopting this IG require the use of this IG for <strong>both</strong> client registration and authentication, even when SMART is also used, since omitting the UDAP workflow from the authentication step significantly reduces the security benefits to the community. Implementers are requested to submit feedback regarding any other potential issues they have identified related to the concurrent use of both IGs so these may be addressed and resolved during ballot reconciliation.
</div>

This Guide is divided into several pages which are listed at the top of each page in the menu bar.

- [Home]\: The home page provides the introduction and background for this project, and general requirements that apply to all workflows described in this guide.
- [Discovery]\: This page describes how clients can discover server support for the workflows described in this guide.
- [Registration]\: This page describes workflows for dynamic registration of client applications.
- [Consumer-Facing]\: This page provides detailed guidance for authorization and authentication of consumer-facing apps.
- [Business-to-Business]\: This page provides detailed guidance for authorization and authentication of B2B apps.
- [Tiered OAuth for User Authentication]\: This page provides detailed guidance for user authentication.
- [General Guidance]\: This page provides general guidance applicable to multiple authorization and authentication workflows.
- [FHIR Artifacts]\: This page provides additional conformance artifacts for FHIR resources.

### JSON Web Token (JWT) Requirements

The requirements in this section are applicable to both consumer-facing and B2B apps and the servers that support them.

#### General requirements and serialization

All JSON Web Tokens (JWTs) defined in this guide:
1. **SHALL** conform to the mandatory requirements of [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519).
1. **SHALL** be JSON Web Signatures conforming to the mandatory requirements of [RFC 7515](https://datatracker.ietf.org/doc/html/rfc7515).
1. **SHALL** be serialized using JWS Compact Serialization as per [Section 7.1](https://datatracker.ietf.org/doc/html/rfc7515#section-7.1) of RFC 7515.

#### Signature algorithm identifiers

Signature algorithm identifiers used in this guide are defined in [Section 3.1](https://datatracker.ietf.org/doc/html/rfc7518#section-3.1) of RFC 7518.

<table class="table">
   <thead>
      <th colspan="3">Signature Algorithm Identifier Conformance</th>
   </thead>
   <tbody>
      <tr>
         <td><code>RS256</code></td>
         <td>Implementers <b>SHALL</b> support this algorithm.</td>
      </tr>
      <tr>
         <td><code>ES256</code></td>
         <td>Implementers <b>SHOULD</b> support this algorithm.</td>
      </tr>
      <tr>
         <td><code>RS384</code></td>
         <td>Implementers <b>MAY</b> support this algorithm.</td>
      </tr>
      <tr>
         <td><code>ES384</code></td>
         <td>Implementers <b>MAY</b> support this algorithm.</td>
      </tr>
   </tbody>
</table>

#### JWT headers

All JWTs defined in this guide **SHALL** contain a Javascript Object Signing and Encryption (JOSE) header as defined in [Section 4](https://datatracker.ietf.org/doc/html/rfc7515#section-4) of RFC 7515 that conforms to the following requirements:

<table class="table">
  <thead>
    <th colspan="3">JWT Header Values</th>
  </thead>
  <tbody>
    <tr>
      <td><code>alg</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        A string identifying the signature algorithm used to sign the JWT. For
        example:<br>
        <code>"RS256"</code>
      </td>
    </tr>
    <tr>
      <td><code>x5c</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        An array of one or more strings containing the X.509 certificate or
        certificate chain, where the leaf certificate corresponds to the
        key used to digitally sign the JWT. Each string in the array is the
        base64-encoded DER representation of the corresponding certificate, with the leaf
        certificate appearing as the first (or only) element of the array.<br>
        See <a href="https://tools.ietf.org/html/rfc7515#section-4.1.6">Section 4.1.6 of RFC 7515</a>.
      </td>
    </tr>
  </tbody>
</table>

#### JWT Claims

All JWTs defined in this guide contain the `iss`, `exp`, and `jti` claims. The value of the `jti` claim is a nonce string value that uniquely identifies a JWT until the expiration of that JWT, i.e. until the time specified in the `exp` claim of that JWT has passed. Thus, the issuer of a JWT **SHALL NOT** reuse the same `jti` value in a new JWT with the same `iss` value prior to the expiration of the previous JWT. Implementers who track `jti` values to detect the replay of received JWTs **SHALL** allow a `jti` value to be reused after the expiration of any other previously received JWTs containing the same `iss` and `jti` values.

Additional JWT Claim requirements are defined later in this guide. 

### Trust Community Checklist

This section lists some additional topics to be addressed by trust communities adopting this guide:

1. Assignment of unique URIs to servers for use in certificates and in the `iss` and `sub` claims of signed metadata elements (see [Section 2.3]).
1. URI used to identify the community in metadata requests (see [Section 2.4]).
1. Assignment of unique URIs to client applications for use in certificates and in the `iss` and `sub` claims of software statements (see [Section 3.1]).
1. Assignment of unique URIs to organizational requestors for use in a B2B Authorization Extension Object (see `organization_id` in [Section 5.2.1.1]).
1. Allowed values for requestor roles in a B2B Authorization Extension Object (see `subject_role` in [Section 5.2.1.1]).
1. Permitted purposes of use for which data may be requested in a B2B Authorization Extension Object (see `purpose_of_use` in [Section 5.2.1.1]).
1. Consent and authorization policies that may be asserted in a B2B Authorization Extension Object and supporting documentation (see `consent_policy` and `consent_reference` in [Section 5.2.1.1]).
1. Other community policies or conditions that an actor may need to meet before exchanging data with community participants or with other trust communities. Examples include community legal agreements, certificate policies, policies regarding what claims an actor has the authority to assert, and other community requirements relating to the specific use cases, client types and/or grant types supported by the community.

{% include link-list.md %}


---

File: repos/HL7_SLASH_fhir-udap-security-ig/input/pagecontent/registration.md

The requirements in this section are applicable to both consumer-facing and B2B apps and the servers that support them.

Before FHIR data requests can be made, Client application operators **SHALL** register each of their applications with the Authorization Servers identified by the FHIR servers with which they wish to exchange data.  Client applications **SHALL** use the client_id assigned by an Authorization Server in subsequent authorization and token requests to that server.

Authorization Servers **SHALL** support dynamic registration as specified in the [UDAP Dynamic Client Registration](https://www.udap.org/udap-dynamic-client-registration-stu1.html) profile with the additional options and constraints defined in this guide. Confidential clients that can secure a secret **MAY** use this dynamic client registration protocol as discussed further below to obtain a `client_id`. Other client types **SHOULD** follow the manual registration processes for each Authorization Server. Future versions of this guide may add support for dynamic client registration by public clients which cannot protect a private key.

The dynamic registration workflow is summarized in the following diagram:
<br>
<div>
{% include registration.svg %}
</div>

### Software Statement

To register dynamically, the client application first constructs a software statement as per [section 2](https://www.udap.org/udap-dynamic-client-registration-stu1.html#section-2) of UDAP Dynamic Client Registration.

The software statement **SHALL** contain the required header elements specified in [Section 1.2.3] of this guide and the JWT claims listed in the table below.  The software statement **SHALL** be signed by the client application operator using the signature algorithm identified in the `alg` header of the software statement and with the private key that corresponds to the public key listed in the client's X.509 certificate identified in the `x5c` header of the software statement.

<table class="table">
  <thead>
    <th colspan="3">Software Statement JWT Claims</th>
  </thead>
  <tbody>
    <tr>
      <td><code>iss</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Issuer of the JWT -- unique identifying client URI. This <strong>SHALL</strong> match the value of a uniformResourceIdentifier entry in the Subject Alternative Name extension of the client's certificate included in the <code>x5c</code> JWT header and <strong>SHALL</strong> uniquely identify a single client app operator and application over time.
      </td>
    </tr>
    <tr>
      <td><code>sub</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Same as <code>iss</code>. In typical use, the client application will not yet have a <code>client_id</code> from the Authorization Server
      </td>
    </tr>
    <tr>
      <td><code>aud</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        The Authorization Server's "registration URL" (the same URL to which the registration request will be posted)
      </td>
    </tr>
    <tr>
      <td><code>exp</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Expiration time integer for this software statement, expressed in seconds since the "Epoch" (1970-01-01T00:00:00Z UTC). The <code>exp</code> time <strong>SHALL</strong> be no more than 5 minutes after the value of the <code>iat</code> claim.
      </td>
    </tr>
    <tr>
      <td><code>iat</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Issued time integer for this software statement, expressed in seconds since the "Epoch"
      </td>
    </tr>
    <tr>
      <td><code>jti</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        A nonce string value that uniquely identifies this software statement. See <a href="index.html#jwt-claims">Section 1.2.4</a> for additional requirements regarding reuse of values.
      </td>
    </tr>
    <tr>
      <td><code>client_name</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        A string containing the human readable name of the client application
      </td>
    </tr>
    <tr>
      <td><code>redirect_uris</code></td>
      <td><span class="label label-warning">conditional</span></td>
      <td>
        An array of one or more redirection URIs used by the client application. This claim SHALL be present if <code>grant_types</code> includes <code>"authorization_code"</code> and this claim SHALL be absent otherwise. Each URI SHALL use the https scheme.
      </td>
    </tr>
    <tr>
      <td><code>contacts</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        An array of URI strings indicating how the data holder can contact the app operator regarding the application. The array <strong>SHALL</strong> contain at least one valid email address using the <code>mailto</code> scheme, e.g.<br>
        <code>["mailto:operations@example.com"]</code>
      </td>
    </tr>
    <tr>
      <td><code>logo_uri</code></td>
      <td><span class="label label-warning">conditional</span></td>
      <td>
        A URL string referencing an image associated with the client application, i.e. a logo. If <code>grant_types</code> includes <code>"authorization_code"</code>, client applications <strong>SHALL</strong> include this field, and the Authorization Server <strong>MAY</strong> display this logo to the user during the authorization process. The URL <strong>SHALL</strong> use the https scheme and reference a PNG, JPG, or GIF image file, e.g. <code>"https://myapp.example.com/MyApp.png"</code>
      </td>
    </tr>
    <tr>
      <td><code>grant_types</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Array of strings, each representing a requested grant type, from the following list: <code>"authorization_code"</code>, <code>"refresh_token"</code>, <code>"client_credentials"</code>. The array <strong>SHALL</strong> include either <code>"authorization_code"</code> or <code>"client_credentials"</code>, but not both. The value <code>"refresh_token"</code> <strong>SHALL NOT</strong> be present in the array unless <code>"authorization_code"</code> is also present.
      </td>
    </tr>
    <tr>
      <td><code>response_types</code></td>
      <td><span class="label label-warning">conditional</span></td>
      <td>
        Array of strings. If <code>grant_types</code> contains <code>"authorization_code"</code>, then this element <strong>SHALL</strong> have a fixed value of <code>["code"]</code>, and <strong>SHALL</strong> be omitted otherwise
      </td>
    </tr>
    <tr>
      <td><code>token_endpoint_auth_method</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        Fixed string value: <code>"private_key_jwt"</code>
      </td>
    </tr>
    <tr>
      <td><code>scope</code></td>
      <td><span class="label label-success">required</span></td>
      <td>
        String containing a space delimited list of scopes requested by the client application for use in subsequent requests. The Authorization Server <strong>MAY</strong> consider this list when deciding the scopes that it will allow the application to subsequently request. Note for client apps that also support the SMART App Launch framework: apps requesting the <code>"client_credentials"</code> grant type <strong>SHOULD</strong> request system scopes; apps requesting the <code>"authorization_code"</code> grant type <strong>SHOULD</strong> request user or patient scopes.
      </td>
    </tr>
  </tbody>
</table>


<div class="stu-note" markdown="1">
1. This guide does not currently constrain the URI scheme used to identify clients in the `iss` claim of the Authentication Token. The `https` scheme is used to identify FHIR servers, and can generally also be used for clients. However, other URI schemes can be used by communities where client app operators are not well represented by unique URLs. Communities supporting emerging concepts such as decentralized identifiers to represent client app operators may also consider using the `did` scheme for issuers of UDAP assertions.
</div>

### Example

#### Client Credentials

Example software statement, prior to Base64URL encoding and signature, for a B2B app that is requesting the use of the client credentials grant type (non-normative, the "." between the header and claims objects is a convenience notation only):

```
{
  "alg": "RS256",
  "x5c": ["MIEF.....remainder omitted for brevity"]
}.{
  "iss": "http://example.com/my-b2b-app",
  "sub": "http://example.com/my-b2b-app",
  "aud": "https://oauth.example.net/register",
  "exp": 1597186041,
  "iat": 1597186341,
  "jti": "random-value-109a3bd72"
  "client_name": "Acme B2B App",
  "contacts": ["mailto:b2b-operations@example.com"],
  "grant_types": ["client_credentials"],
  "token_endpoint_auth_method": "private_key_jwt",
  "scope": "system/Patient.read system/Procedure.read"
}
```

#### Authorization Code

Example software statement, prior to Base64URL encoding and signature, for a B2B app that is requesting the use of the client credentials grant type (non-normative, the "." between the header and claims objects is a convenience notation only):

```
{
  "alg": "RS256",
  "x5c": ["MIEF.....remainder omitted for brevity"]
}.{
  "iss": "http://example.com/my-user-b2b-app",
  "sub": "http://example.com/my-user-b2b-app",
  "aud": "https://oauth.example.net/register",
  "exp": 1597186054,
  "iat": 1597186354,
  "jti": "random-value-f83f37a29"
  "client_name": "Acme B2B User App",
  "redirect_uris": ["https://b2b-app.example.com/redirect"],
  "contacts": ["mailto:b2b-operations@example.com"],
  "logo_uri": "https://b2b-app.example.com/B2BApp.png",
  "grant_types": ["authorization_code", "refresh_token"],
  "response_types": ["code"],
  "token_endpoint_auth_method": "private_key_jwt",
  "scope": "user/Patient.read user/Procedure.read"
}
```

#### Request Body

The registration request for use of either grant type is submitted by the client to the Authorization Server's registration endpoint.

```
POST /register HTTP/1.1
Host: oauth.example.net
Content-Type: application/json

{
   "software_statement": "...the signed software statement JWT...",
   "certifications": ["...a signed certification JWT..."]
   "udap": "1"
}
```

The Authorization Server **SHALL** validate the registration request as per [Section 4](https://www.udap.org/udap-dynamic-client-registration-stu1.html#section-4) of UDAP Dynamic Client Registration. This includes validation of the JWT payload and signature, validation of the X.509 certificate chain, and validation of the requested application registration parameters.

If a new registration is successful, the Authorization Server **SHALL** return a registration response with a `201 Created` HTTP response code as per [Section 5.1](https://www.udap.org/udap-dynamic-client-registration-stu1.html#section-5.1) of UDAP Dynamic Client Registration, including the unique `client_id` assigned by the Authorization Server to that client app. Since the UDAP Dynamic Client Registration profile specifies that a successful registration response is returned as per [Section 3.2.1 of RFC 7591], the authorization server **MAY** reject or replace any of the client's requested metadata values submitted during the registration and substitute them with suitable values.

If a new registration is not successful, e.g. it is rejected by the server for any reason, the Authorization Server **SHALL** return an error response as per [Section 5.2](https://www.udap.org/udap-dynamic-client-registration-stu1.html#section-5.2) of UDAP Dynamic Client Registration.

### Inclusion of Certifications and Endorsements

Authorization Servers **MAY** support the inclusion of certifications and endorsements by client application operators using the certifications framework outlined in [UDAP Certifications and Endorsements for Client Applications](https://www.udap.org/udap-certifications-and-endorsements-stu1.html). Authorization Servers **SHALL** ignore unsupported or unrecognized certifications.

Authorization Servers **MAY** require registration requests to include one or more certifications. If an Authorization Server requires the inclusion of a certain certification, then the Authorization Server **SHALL** communicate this by including the corresponding certification URI in the `udap_certifications_required` element of its UDAP metadata.

An example template application to declare additional information about the client application at the time of registration is described in [Section 7.3] of this guilde.

### Modifying and Cancelling Registrations

Within a trust community, the client URI in the Subject Alternative Name of an X.509 certificate uniquely identifies a single application and its operator over time. Thus, a registered client application **MAY** request a modification of its registration with an Authorization Server by submitting another registration request to the same Authorization Server's registration endpoint with a software statement containing a certificate corresponding to the same trust community and with the same `iss` value as was used in the original registration request. An Authorization Server accepting such a request **SHALL** only update the registration previously made in the context of the corresponding trust community, as detailed in the next paragraph, and **SHALL NOT** overwrite an existing registration made in the context of a different trust community.

If an Authorization Server receives a valid registration request with a software statement containing a certificate corresponding to the same trust community and with the same `iss` value as an earlier software statement but with a different set of claims or claim values, or with a different (possibly empty) set of optional certifications and endorsements, the server **SHALL** treat this as a request to modify the registration parameters for the client application by replacing the information from the previous registration request with the information included in the new request. For example, an Application operator could use this mechanism to update a redirection URI or to remove or update a certification. If the registration modification request is accepted, the Authorization Server **SHOULD** return the same `client_id` in the registration response as for the previous registration. If it returns a different `client_id`, it **SHALL** cancel the registration for the previous `client_id`.

If an Authorization Server receives a valid registration request with a software statement that contains an empty `grant_types` array from a previously registered application as per the previous paragraph, the server **SHOULD** interpret this as a request to cancel the previous registration. A client application **SHALL** interpret a registration response that contains an empty `grant_types` array as a confirmation that the registration for the `client_id` listed in the response has been cancelled by the Authorization Server.

If the Authorization Server returns the same `client_id` in the registration response for a modification request, it SHOULD also return a `200 OK` HTTP response code. If the Authorization Server returns a new `client_id` in the registration response, the client application **SHALL** use only the new `client_id` in subsequent transactions with the Authorization Server.

{% include link-list.md %}

---

File: repos/HL7_SLASH_fhir-udap-security-ig/input/pagecontent/user.md

The requirements in this section are applicable to both consumer-facing and B2B apps and the servers that support them.

Client applications registered to use the authorization code grant MAY utilize the user authentication workflow described in [UDAP Tiered OAuth for User Authentication], as profiled below. The UDAP Tiered OAuth workflow allows the client application to include the base URL of a preferred OpenID Connect Identity Provider (IdP) service in the initial request to the data holder's OAuth authorization endpoint. If Tiered OAuth is supported by the data holder and the data holder trusts the IdP indicated by the client, then the data holder will request that the IdP authenticate the user, and return authentication results and optional identity information directly to the data holder using standard OIDC workflows. Note that the client application does not interact directly with the IdP as part of this workflow.

The Tiered OAuth workflow is summarized in the following diagram:
<br>
<div>
{% include tiered.svg %}
</div>

### Client Authorization Request to Data Holder

The client app indicates the preferred Identity Provider to the data holder as per Section 2 of the [UDAP Tiered OAuth] specification by modifying the authorization endpoint request described in [Section 4.1] for consumer-facing apps or [Section 5.1] for business-to-business apps as follows:
1. Add `udap` to the list of scopes provided in the value of the `scope` query parameter, and
1. Add the extension query parameter `idp` with a value equal to the base URL of the preferred OIDC IdP.

The meaning of the extension parameter `idp` is undefined if `udap` is absent from the list of requested scopes. The IdP's base URL is the URL listed in the `iss` claim of ID tokens issued by the IdP as detailed in [Section 2](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) of the OpenID Connect Core 1.0 specification (OIDC Core).

### Data Holder Authentication Request to IdP

For the purposes of the interactions between the data holder and the IdP, the data holder takes on the role of client app and the IdP takes on the role of server/data holder and interacts as per Section 3 of [UDAP Tiered OAuth], as detailed below.

This section describes the interactions between a data holder and an IdP where both parties support this implementation guide and where trust can be established via UDAP certificates. Note that this does not preclude data holders from validating trust with an IdP via other non-UDAP means that are outside the scope of this document, or from making authentication requests to IdPs that do not support UDAP workflows.
{:.bg-info}

Upon receiving an authorization request with a preferred IdP, the data holder first determines whether or not it trusts the IdP to perform user authentication, by retrieving and validating the IdP's UDAP metadata from `{baseURL}/.well-known/udap`, as discussed in [Section 2.2]. At a minimum, IdPs that support this guide **SHALL** include `"openid"` and `"udap"` in the array of scopes returned for the `scopes_supported` parameter. 

If the IdP is trusted and the data holder is not yet registered as a client with the IdP and the IdP supports UDAP Dynamic Registration, then the data holder **SHALL** register as a client with the IdP as per [Section 3] of this guide.

If the IdP is not trusted by the data holder, or if the data holder does not have and cannot obtain a client_id to use with the IdP, the data holder **MAY** reject the client app's authorization request by returning an error as per [Section 4.1.2.1 of RFC 6749], using the extension error code of `invalid_idp`. Alternatively, the data holder **MAY** attempt to authenticate the user with a different trusted IdP or its own IdP, and **MAY** interact with the user to determine a suitable alternative. A client app that receives an error code of `invalid_idp` **MAY** attempt to obtain authorization again by specifying a different IdP base URL in the `idp` authorization request parameter, or by making a new authorization request without using the Tiered OAuth workflow.

 If the IdP is trusted by the data holder, and the data holder is registered as a client with the IdP, then the data holder, acting as an OIDC client, **SHALL** make an authentication request to the IdP's authorization endpoint as per [Section 3.1.2.1 of OIDC Core] and Section 3.4 of [UDAP Tiered OAuth]. The `scope` query parameter of the authentication request **SHALL** contain at least the following two values: `openid` and `udap`. The IdP **SHALL** authenticate the user as per [Sections 3.1.2.2 - 3.1.2.6 of OIDC Core](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequestValidation) and Sections 4.1 - 4.2 of [UDAP Tiered OAuth]. 

The data holder **SHALL** validate the `state` parameter value returned in the response from the IdP. If the IdP does not return a valid `state` parameter value in its authentication response, the data holder **SHALL** return a `server_error` error response to the client app and terminate this workflow as per Section 4.1 of [UDAP Tiered OAuth]. If the IdP returns an error response with a valid `state` parameter value, the data holder **SHALL** return a suitable error response to the client app and terminated this workflow as per Section 4.2 of [UDAP Tiered OAuth].

If the IdP returns a successful authentication response with valid `state` parameter value and an authorization code, the data holder **SHALL** exchange the code for an access token and ID Token by making a request to the IdP's token endpoint as per [Section 3.1.3.1 of OIDC Core] and Section 4.3 of [UDAP Tiered OAuth]. For this request, the data holder as client app **SHALL** utilize the JWT-based authentication process as described in [Section 4.2.2] of this guide. ID Tokens issued by the IdP **SHALL** conform to the requirements of [Section 1.2] of this guide and Section 4.3 of [UDAP Tiered OAuth].

If the IdP returns an ID Token, the data holder **SHALL** then validate the ID Token as per [Section 3.1.3.5 of OIDC Core]. If the IdP does not return an ID Token, or the ID Token cannot be successfully validated, or an error response is retured by the IdP, the data holder **MAY** return an `invalid_idp` error code to the client app or attempt an alternate user authentication as described above.

### Data holder interaction with user after authentication

When an ID Token has been returned and validated, the data holder **SHOULD** use the ID Token to attempt to match the authenticated user to a user or role in its own system, as appropriate for the resources requested. As discussed in Sections 4.4 and 4.5 of [UDAP Tiered OAuth], the `iss` and `sub` values of the ID Token can be used together by the data holder to identify a single person over time, i.e. the data holder can attempt to map the pair (`iss`,`sub`) to a known users in the data holder's system. If the data holder has previously performed this mapping or has otherwise bound the pair (`iss`,`sub`) to a local user or role, it **MAY** rely on this previous mapping for subsequent authentications. If the ID Token does not contain sufficient information to perform the mapping, the data holder **MAY** attempt to retrieve additional information for the IdP's UserInfo endpoint as described in [Section 5.3 of OIDC Core]. In many cases, the information provided by the IdP will allow the data holder to resolve the authenticated user to a single local user or role with high confidence. If necessary, the data holder **MAY** interact with the user following the redirection from the IdP back to the data holder's redirection URI to increase confidence in the resolution process. For example, if there is more than one possible match, the data holder may transmit a one-time code to an electronic address of record known to the data holder to confirm a specific match. If the data holder is unable to resolve the authenticated user to a local user or role, as appropriate for the resources requested, it **SHALL** return an `access_denied` error response to the client app's authorization request and terminate the workflow.

If the data holder successfully maps the authenticated user to a user or role in its own system, as appropriate for the resources requested, it **SHALL** also obtain authorization from the user for the scopes requested by the client app, if such authorization is required, as per Section 4.5 of [UDAP Tiered OAuth], returning to the workflow defined in [Section 4.1] or [Section 5.1] of this guide, for consumer-facing or B2B apps, respectively.

### Examples

Note: These examples are non-normative. Line breaks and indentations have been added for readability and would not be part of an actual request or response. Additional examples can be found in the [UDAP Tiered OAuth] specification.

#### Example client app authorization request

```
GET /authorize?
  response_type=code&
  state=client_random_state&
  client_id=myIdIssuedByResourceHolder&
  scope=udap+user/*.read&
  idp=https://preferred-idp.example.com/optionalPathComponent&
  redirect_uri=https://client.example.net/redirect HTTP/1.1
Host: resourceholder.example.com
```


#### Example data holder error response

```
HTTP/1.1 302 Found
Location: https://client.example.net/clientredirect?
  error=invalid_idp&
  error_description=The+requested+identity+provider+cannot+be+used+to+sign+in+to+this+system
  state=client_random_state
```


#### Example data holder authentication request to IdP

```
HTTP/1.1 302 Found
Location: https://idp.example.com/optionalpath/authorize?
  response_type=code&
  state=resource_holder_random_state&
  client_id=resourceHolderClientIDforIdP&
  scope=openid+udap&
  nonce=resource_holder_nonce&
  redirect_uri=https://resourceholder.example.net/redirect
```


#### Example data holder token request to IdP

```
POST /optionalpath/token HTTP/1.1
Host: idp.example.com
Content-type: application/x-www-form-urlencoded

grant_type=authorization_code&
  code=authz_code_from_idp&
  client_assertion_type=urn:ietf:params:oauth:grant-type:jwt-bearer&
  client_assertion=eyJh[…remainder of AnT omitted for brevity…]&
  udap=1
```
 
{% include link-list.md %}

---

