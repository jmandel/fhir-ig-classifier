# fhir-shorthand: Analysis

## 1. Objectives and Context

This Implementation Guide (IG) defines FHIR Shorthand (FSH), a domain-specific language for creating and managing FHIR artifacts used in FHIR Implementation Guides. Its objective is to simplify the process of authoring FHIR profiles, extensions, value sets, and other conformance resources, making it easier and more efficient for IG creators to express their intent and produce high-quality IGs. 

## 2. Improvements over Previous Approaches

FSH offers several advantages over existing methods for FHIR IG development:

- **Conciseness and Readability:** Compared to hand-editing FHIR JSON or XML, FSH is more concise and easier to read, allowing authors to focus on their intent rather than intricate FHIR mechanics.
- **Version Control and Collaboration:** Being text-based, FSH enables efficient version control using tools like Git, facilitating collaboration and tracking changes. This contrasts with the cumbersome nature of managing binary Excel spreadsheets or navigating complex graphical interfaces.
- **Agility and Refactoring:** FSH's textual nature allows for easy editing, cutting, pasting, search and replace, making it more agile for refactoring and revising definitions compared to graphical tools.

## 3. Key Features and Technical Approaches

- **Text-Based Syntax:** FSH uses a simple, human-readable syntax with keywords and rules to define FHIR artifacts.
- **Data Types and Path Expressions:**  It leverages FHIR's data types and a specialized path grammar to reference and constrain elements within FHIR resources.
- **Aliases:**  Authors can define aliases for URLs and OIDs, enhancing readability and maintainability.
- **Rule Sets:** Reusable sets of rules can be defined and inserted into multiple definitions, reducing redundancy.
- **SUSHI Compiler:** A reference implementation called SUSHI translates FSH into formal FHIR JSON artifacts.

## 4. Relation to Healthcare Standards and Regulations

FSH directly supports the creation of FHIR Implementation Guides, which are essential for implementing FHIR in specific healthcare contexts and ensuring interoperability. While it doesn't directly address specific regulations, it facilitates the development of IGs that can be used to meet regulatory requirements for data exchange and terminology use.

## 5. Primary Users and Beneficiaries

- **IG Authors:** The primary users of FSH are FHIR IG authors who use it to define and manage FHIR profiles, extensions, value sets, and other conformance resources.
- **Implementers:**  Developers and implementers of FHIR-based systems benefit from the clearly defined and well-structured IGs produced using FSH, facilitating consistent and interoperable implementations.
- **Healthcare Organizations:**  Organizations implementing FHIR benefit from the use of FSH, as it leads to better quality IGs and ultimately improved interoperability, data exchange, and patient care. 
- **Patients (Indirectly):**  While patients don't directly interact with FSH, they indirectly benefit from improved interoperability and data sharing facilitated by the use of FSH in developing high-quality FHIR IGs. 
