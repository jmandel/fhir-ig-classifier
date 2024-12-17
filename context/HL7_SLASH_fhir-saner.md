File: repos/HL7_SLASH_fhir-saner/sushi-config.yaml

id: hl7.fhir.uv.saner
canonical: http://hl7.org/fhir/uv/saner
version: 1.0.1
name: SituationalAwarenessforNovelEpidemicResponse
title: Situational Awareness for Novel Epidemic Response
status: active
publisher:
  - name: HL7 International / Public Health
  - url: http://www.hl7.org/Special/committees/pher
  - email: pher@lists.hl7.org
contact:
  - name: Keith W. Boone
    telecom:
      - system: email
        value: mailto:kboone@ainq.com
description: The Situational Awareness for Novel Epidemic Response Implementation Guide
  enables transmission of high level situational awareness information from
  healthcare facilities to centralized data repositories to support the treatment
  of the novel coronavirus illness.
jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001 "World"
license: CC0-1.0
fhirVersion: 4.0.1
dependencies: 
  hl7.fhir.uv.tools: current
parameters:
  show-inherited-invariants: false
  usage-stats-opt-out: true
  logging: progress
  auto-oid-root: 2.16.840.1.113883.4.642.40.42
copyrightYear: 2020+
releaseLabel: CI Build
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: pher

pages:
  index.md:
    title: Home
    generation: markdown
  intro.md:
    title: Introduction and Overview
    generation: markdown
    introduction.md:
      title: Introduction
      generation: markdown
    situational_awareness_measures.md:
      title: Situational Awareness Measures
      generation: markdown
    use_cases.md:
      title: Use Cases
      generation: markdown
    ConceptualModel.md:
      title: Conceptual Model
      generation: markdown
    glossary.md:
      title: Glossary of Terms
      generation: markdown
  spec.md:
    title: Specification Details
    generation: markdown
    Architecture_and_Implementation.md:
      title: Architecture and Implementation
      generation: markdown
    security_considerations.md:
      title: Security Considerations
      generation: markdown
    actors.md:
      title: Actors
      generation: markdown
  transactions.md:
    title: Transactions
    generation: markdown
    transaction-1.md:
      title: Query Measure
      generation: markdown
    transaction-2.md:
      title: Produce Measure
      generation: markdown
    transaction-3.md:
      title: Query Measure Definition
      generation: markdown
    transaction-4.md:
      title: Compute Measure
      generation: markdown
    transaction-5.md:
      title: Communicate Results
      generation: markdown
#    transaction-6.md:
#      title: Query Data
#      generation: markdown
  integration.md:
    title: Integration with Existing Systems
    generation: markdown
    technology_environment.md:
      title: Technology Environment
      generation: markdown
    CSV_Conversion.md:
      title: Exchanging data via CSV Files
      generation: markdown
    measure_aggregation.md:
      title: Aggregating Measure Reports
      generation: markdown
    measure_automation.md:
        title: Computing Measures
        generation: markdown
  conformance.md:
    title:  Testing and Conformance
    generation: markdown
    profiles_and_extensions.md:
      title: Profiles and Extensions
      generation: markdown
    vocabulary.md:
      title: Terminology Resources
      generation: markdown
    test_plan.md:
      title: Test Plan
      generation: markdown
    examples.md:
      title: Examples
      generation: markdown
      hospital_capacity_examples.md:
        title: Hospital Capacity Measures and Reports
        generation: markdown
      laboratory_reporting_examples.md:
        title: Laboratory Reporting Examples
        generation: markdown
      automation_testing_examples.md:
        title: Automation Testing Examples
        generation: markdown
    techanalysis.md:
      title: Technical Analysis
      generation: markdown
  measure_creation.md:
    title: Defining a Measure from Essential Elements of Information
    generation: markdown
    phrase_book.md:
      title: A Phrase Book for Measures Supporting Automation
      generation: markdown
    measure_group_covid19_patients.md:
      title: Creating the Patients with COVID 19 Group
      generation: markdown
    measure_group_hospital_acquired_covid19_patients.md:
      title: Creating the Hospital Acquired COVID 19 Group
      generation: markdown
    measure_group_covid19_deaths.md:
      title: Creating the COVID 19 Deaths Group
      generation: markdown
    measure_group_ventilators.md:
      title: Creating the Ventilator Availability Group
      generation: markdown
    measure_group_beds.md:
      title: Creating the Bed Availability Group
      generation: markdown
    measure_library.md:
      title: Sample Measure Library
      generation: markdown
  supporting_vocabulary.md:
    title: Supporting Vocabulary
    generation: markdown
  fluent_query.md:
    title: Fluent Query
    generation: markdown

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To control the menu.xml using this config, uncomment and set the "menu" property.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  IG Home: index.html
  Contents: toc.html

  Introduction:
    Scope: introduction.html
    Situational Awareness Measures: situational_awareness_measures.html
    Use Cases: use_cases.html
    Conceptual Model: ConceptualModel.html

  Architecture & Implementation:
    Architecture: Architecture_and_Implementation.html
    Security Considerations: security_considerations.html
    Actors: actors.html
    Transactions: transactions.html
    Query Measure: transaction-1.html
    Produce Measure: transaction-2.html
    Query Measure Definition: transaction-3.html
    Compute Measure: transaction-4.html
    Communicate Results: transaction-5.html
    Profiles and Extensions: profiles_and_extensions.html

  Integrating with Existing Systems:
    Technology Environment: technology_environment.html
    Exchanging data via CSV Files: CSV_Conversion.html
    Aggregating Measure Reports: measure_aggregation.html
    Computing Measures: measure_automation.html

  Testing & Conformance:
    Profiles and Extensions: profiles_and_extensions.html
    Terminology Resources: vocabulary.html
    Test Plan: test_plan.html
    Hospital Capacity Measure and Report Examples: hospital_capacity_examples.html
    Laboratory Reporting Measure and Report Examples: laboratory_reporting_examples.html
    Automation Testing Data: automation_testing_examples.html
    Technical Analysis: techanalysis.html

  Defining Measures:
    Defining a Measure from Essential Elements of Information: measure_creation.html
    A Phrase Book for Measures Supporting Automation: phrase_book.html
    Creating the Patients with COVID 19 Group: measure_group_covid19_patients.html
    Creating the Hospital Acquired COVID 19 Group: measure_group_hospital_acquired_covid19_patients.html
    Creating the COVID 19 Deaths Group: measure_group_covid19_deaths.html
    Creating the Ventilator Availability Group: measure_group_ventilators.html
    Creating the Bed Availability Group: measure_group_beds.html
    Creating the Measure Library: measure_library.html
    Supporting Vocabulary: supporting_vocabulary.html

  Artifact Index: artifacts.html


---

// File: input/pagecontent/actors.md


This section defines the actors in this implementation guide.

Figure 1.1-1 below shows the actors directly
involved in the SANER
Profile and the relevant transactions between them.


<figure>
{% include ActorsAndTransactions.svg%}
<figcaption>Figure 3-1: SANER Actor Diagram</figcaption>
</figure>

Table 3-1 lists the transactions for each actor directly involved in the SANER Implementation Guide. To claim compliance with this guide, an actor **shall**
support all required transactions (labeled "R").

<table border="1" borderspacing="0" style='border: 1px solid black; border-collapse: collapse'>
<caption><b>Table 3-1: SANER Implementation Guide - Actors and Transactions</b></caption>
<thead>
<tr>
<th>Actors</th>
<th>Transactions</th>
<th>Optionality</th>
</tr>
</thead>
<tbody>
<tr><td rowspan="2"><a href="#measure-source">Measure Source</a></td>
<td><a href='transaction-1.html'>Query Measure [PULL-TX]</a></td>
<td align='center'>C<sup> 1</sup></td>
</tr>

<tr>
<td><a href='transaction-2.html'>Produce Measure [PUSH-TX]</a></td>
<td align='center'>C<sup> 2</sup></td>
</tr>

<tr>
<td rowspan="3"><a href="#measure-consumer">Measure Consumer</a></td>

<td><a href='transaction-5.html'>Communicate Results [REPORT-TX]</a></td>
<td align='center'>R</td>
</tr>

<tr>
<td><a href='transaction-1.html'>Query Measure [PULL-TX]</a></td>
<td align='center'>C<sup> 1</sup></td>
</tr>

<tr>
<td><a href='transaction-2.html'>Produce Measure [PUSH-TX]</a></td>
<td align='center'>C<sup> 2</sup></td>
</tr>

<tr>
<td rowspan="9"><a href="#measure-intermediary">Measure Intermediary</a></td>
<td><a href='transaction-1.html'>Query Measure [PULL-TX]</a><br/><i>As Measure Source</i></td>
<td align='center'>C<sup> 1</sup></td>
</tr>

<tr>
<td><a href='transaction-2.html'>Produce Measure [PUSH-TX]</a><br/><i>As Measure Source</i></td>
<td align='center'>C<sup> 2</sup></td>
</tr>

<tr>
<td><a href='transaction-5.html'>Communicate Results [REPORT-TX]</a><br/><i>As Measure Consumer</i></td>
<td align='center'>R</td>
</tr>

<tr>
<td><a href='transaction-1.html'>Query Measure [PULL-TX]</a><br/><i>As Measure Consumer</i></td>
<td align='center'>C<sup> 1</sup></td>
</tr>

<tr>
<td><a href='transaction-2.html'>Produce Measure [PUSH-TX]</a><br/><i>As Measure Consumer</i></td>
<td align='center'>C<sup> 2</sup></td>
</tr>

<tr>
<td><a href='transaction-1.html'>Query Measure [PULL-TX]</a><br/><i>As Measure Intermediary</i></td>
<td align='center'>C<sup> 1</sup></td>
</tr>

<tr>
<td><a href='transaction-2.html'>Produce Measure [PUSH-TX]</a><br/><i>As Measure Intermediary</i></td>
<td align='center'>C<sup> 3</sup></td>
</tr>

<tr>
<td><a href='transaction-1.html'>Query Measure [PULL-TX]</a><br/><i>As Measure Intermediary</i></td>
<td align='center'>C<sup> 1</sup></td>
</tr>

<tr>
<td><a href='transaction-2.html'>Produce Measure [PUSH-TX]</a><br/><i>As Measure Intermediary</i></td>
<td align='center'>C<sup> 3</sup></td>
</tr>

<tr>
<td rowspan="1"><a href="#measure-definition-source">Measure Definition Source</a></td>
<td><a href='transaction-3.html'>Query Measure Definition [PULL-MX]</a></td>
<td align='center'>R</td>
</tr>

<tr><td rowspan="1"><a href="#measure-definition-consumer">Measure Definition Consumer</a></td>
<td><a href='transaction-3.html'>Query Measure Definition [PULL-MX]</a></td>
<td align='center'>R</td>
</tr>

<tr>
<td rowspan="7"><a href="#measure-computer">Measure Computer</a></td>
<td><a href='transaction-1.html'>Query Measure [PULL-TX]</a><br/><i>As Measure Source</i></td>
<td align='center'>C<sup> 1</sup></td>
</tr>

<tr>
<td><a href='transaction-2.html'>Produce Measure [PUSH-TX]</a><br/><i>As Measure Source</i></td>
<td align='center'>C<sup> 2</sup></td>
</tr>

<tr>
<td><a href='transaction-3.html'>Query Measure Definition [PULL-MX]</a><br/><i>As Measure Definition Consumer</i></td>
<td align='center'>R</td>
</tr>

<tr>
<td><a href='transaction-3.html'>Query Measure Definition [PULL-MX]</a><br/><i>As Measure Computer</i></td>
<td align='center'>R</td>
</tr>

<tr>
<td><a href='transaction-4.html'>Compute Measure [COMPUTE-MX]</a><br/><i>As Measure Computer</i></td>
<td align='center'>R</td>
</tr>

<tr>
<td><a href='transaction-1.html'>Query Measure [PULL-TX]</a><br/><i>As Measure Computer</i></td>
<td align='center'>C<sup> 1</sup></td>
</tr>

<tr>
<td><a href='transaction-2.html'>Produce Measure [PUSH-TX]</a><br/><i>As Measure Computer</i></td>
<td align='center'>C<sup> 3</sup></td>
</tr>

<tr>
<td rowspan="1"><a href="#data-source">Data Source</a></td>
<td><a href='transaction-4.html'>Compute Measure [COMPUTE-MX]</a></td>
<td align='center'>R</td>
</tr>

</tbody>
</table>


**Notes:**

1. This transaction is required when the actor implements the [Pull Option](#pull-option).

2. This transaction is required when the actor implements the [Push Option](#push-option), or [Supplemental Data Option](#supplemental-data-option).

3. This transaction is required when the actor implements the [Push Option](#push-option).

### Actor Descriptions
The actors in this profile are described in more detail in the sections below.

#### Measure Source

The Measure Source Actor reports results Measures for a single facility, collection of facilities or aggregated
data for a region.


In a single facility, or organization, the Measure Source Actor will compile data directly from the facility
or organization source systems.

A Measure Source may also exist in an Aggregator, Intermediary or Bridging role. In this guide we will use the term Intermediary
to describe these roles.

A Measure Source provides the FHIR data that is used by a Measure Consumer.


##### Measure Source Requirements

1. The Measure Source **shall** implement either the Pull Option or the Push Option.
2. A Measure Source that implements the Pull Option **shall** provide a CapabilityStatement when queried via
[base]/metadata.
3. A Measure Source that implements the Supplemental Data Option **shall** support creation of MeasureReport and Supplemental Data
            resources through the [HTTP Batch](https://www.hl7.org/fhir/http.html#transaction) operation and endpoint.
4. A Measure Source that implements the Supplemental Data option **shall** also implement the Push Option

##### Measure Source Conformance

See the following CapabilityStatement resources for conformance requirements:
* [CapabilityStatement-MeasureSource-Aggregate](CapabilityStatement-MeasureSource-Aggregate.html) Defines the requirements for the Measure Source implementing the Aggregate Option.
* [CapabilityStatement-MeasureSource-CSV-Pull](CapabilityStatement-MeasureSource-CSV-Pull.html) Defines the requirements for the Measure Source implementing the CSV Option and the Pull Option.
* [CapabilityStatement-MeasureSource-CSV-Push](CapabilityStatement-MeasureSource-CSV-Push.html) Defines the requirements for the Measure Source implementing the CSV Option and the Push Option.
* [CapabilityStatement-MeasureSource-Pull](CapabilityStatement-MeasureSource-Pull.html) Defines the requirements for the Measure Source implementing the Pull Option.
* [CapabilityStatement-MeasureSource-Push](CapabilityStatement-MeasureSource-Push.html) Defines the requirements for the Measure Source implementing the Push Option.
* [CapabilityStatement-MeasureSource-SupplementalData](CapabilityStatement-MeasureSource-SupplementalData.html) Defines the requirements for the Measure Source implementing the Supplemental Data Option.
#### Measure Consumer

The Measure Consumer provides access to aggregated or fine-grained
data gathered from one or more Measure Sources.


The Measure Consumer provides the ability to report on data from one or more Measure Sources.

In the case of a single facility or organization the Measure Consumer is reporting the data at aggregated
or varying levels of granularity using data extracted from a Measure Source.


##### Measure Consumer Requirements

1. The Measure Consumer **shall** implement either the Pull Option or the Push Option.
2. A Measure Consumer that implements the Push Option **shall** provide a CapabilityStatement when queried via
				[base]/metadata.
3. A Measure Consumer that implements the Supplemental Data Option **shall** support creation of MeasureReport and Supplemental Data
            resources through the [HTTP Batch](https://www.hl7.org/fhir/http.html#transaction) operation and endpoint.
4. A Measure Consumer that implements the Supplemental Data option **shall** also implement the Push Option

##### Measure Consumer Conformance

See the following CapabilityStatement resources for conformance requirements:
* [CapabilityStatement-MeasureConsumer-Aggregate](CapabilityStatement-MeasureConsumer-Aggregate.html) Defines the requirements for the Measure Consumer implementing the Aggregate Option.
* [CapabilityStatement-MeasureConsumer-CSV-Pull](CapabilityStatement-MeasureConsumer-CSV-Pull.html) Defines the requirements for the Measure Consumer implementing the CSV Option and the Pull Option.
* [CapabilityStatement-MeasureConsumer-CSV-Push](CapabilityStatement-MeasureConsumer-CSV-Push.html) Defines the requirements for the Measure Consumer implementing the CSV Option and the Push Option.
* [CapabilityStatement-MeasureConsumer-Pull](CapabilityStatement-MeasureConsumer-Pull.html) Defines the requirements for the Measure Consumer implementing the Pull Option.
* [CapabilityStatement-MeasureConsumer-Push](CapabilityStatement-MeasureConsumer-Push.html) Defines the requirements for the Measure Consumer implementing the Push Option.
* [CapabilityStatement-MeasureConsumer-SupplementalData](CapabilityStatement-MeasureConsumer-SupplementalData.html) Defines the requirements for the Measure Consumer implementing the Supplemental Data Option.
#### Measure Intermediary

The Measure Intermediary is a grouping of a Measure Source with a Measure Consumer.


This actor represents the composition of a [Measure Source](actors.html#measure-source) with a [Measure Source](actors.html#measure-source).

The Measure Intermediary role can aggregate data from multiple Measure Sources. Data from Measure Sources may
be pulled in by the Intermediary, or pushed to the Intermediary by the Measure Source.

The Measure Intermediary may also provide the capabilities of a Measure Consumer to enable data to be
reported at an aggregated level.

The Measure Intermediary role may aggregate data from other Measure Intermediaries. Since the Intermediary
is exposing a Measure Source capability this method allows data to be aggregated in a hierarchy such as:

- Supporting multiple data inputs within a single facility to create a complete measure from multiple partial reports,
- Enabling aggregation of data for Groups of hospitals in a health system, a hospital service area, or referral region,
- Aggregating to county or state levels for local and regional Public Health agencies
- Communicating aggregated data to National / Federal Agencies such as CDC or FEMA.


#### Bridging between Incompatible Options
In networking parlance, a Bridge is a system that connects between different protocols. The different options in this
Implementation Guide
can create incompatibilities, but these can be bridged by an Intermediary.

For example, a Measure Intermediary that implements the Push Option in the Measure Consumer, that groups with a Measure Source
implementing the Push Option can bridge between a Measure Source implementing the Pull option to enable
communication with a Measure Consumer implementing the Pull option.

In this example, the Bridge is simply a FHIR Server. A FHIR Server that supports CRUD operations on MeasureReport and Measure
effectively implements both the Measure Consumer with the Push Option
and the Measure Source actor implementing the Pull Option.
<figure>
{% include FHIRServer.svg %}
</figure>



##### Measure Intermediary Requirements

1. A Measure Intermediary whose Consumer implements the Push Option **shall** provide a CapabilityStatement when
				queried via [base]/metadata.
2. A Measure Intermediary whose Source implements the Pull Option **shall** provide a CapabilityStatement when
				queried via [base]/metadata.

##### Measure Intermediary Conformance

See the following CapabilityStatement resources for conformance requirements:
#### Measure Definition Source

The Measure Definition Source Actor provides access to Measures defined by public health and emergency response
authorities.


The Measure Definition Source actor is responsible for maintaining measures for systems that are using this
implementation guide to automate measure reporting.


##### Measure Definition Source Requirements

1. A Measure Definition Source **shall** provide a CapabilityStatement when queried via [base]/metadata.

##### Measure Definition Source Conformance

See the following CapabilityStatement resources for conformance requirements:
* [CapabilityStatement-MeasureDefinitionSource](CapabilityStatement-MeasureDefinitionSource.html) Defines the requirements for the Measure Definition Source.
#### Measure Definition Consumer

The Measure Definition Consumer Actor accesses Measures defined by public health and emergency response
authorities.


The Measure Definition Consumer actor is responsible for retrieving measures from publishing systems to automate
measure reporting.



##### Measure Definition Consumer Conformance

See the following CapabilityStatement resources for conformance requirements:
* [CapabilityStatement-MeasureDefinitionConsumer](CapabilityStatement-MeasureDefinitionConsumer.html) Defines the requirements for the Measure Definition Consumer.
#### Measure Computer

The Measure Computer Actor is responsible for computing measures from definitions provided through its grouping
with a Measure Definition Consumer actor,
and reporting these measures through its grouping with the Measure Source actor.


##### Measure Computer Requirements

1. The Measure Computer **shall** implement either the Pull Option or the Push Option.
2. A Measure Computer that implements the Pull Option **shall** provide a CapabilityStatement when queried via
				[base]/metadata.

##### Measure Computer Conformance

See the following CapabilityStatement resources for conformance requirements:
* [CapabilityStatement-MeasureComputer](CapabilityStatement-MeasureComputer.html) Defines the requirements for the Measure Computer.
#### Data Source

The Data Source actor is responsible for supplying data to a MeasureComputer.


The Data Source supplies data via FHIR Queries supported by national standards.


##### Data Source Requirements

1. A Data Source **shall** provide a CapabilityStatement when queried via [base]/metadata.

##### Data Source Conformance

See the following CapabilityStatement resources for conformance requirements:
* [CapabilityStatement-DataSource](CapabilityStatement-DataSource.html) Defines the requirements for the Data Source.
### Actor Options

Options that may be selected for each actor in this guide, are listed in Table 3.2-1 below. Dependencies
between options when applicable are specified in notes.

<table border="1" style="border: 1px solid black; border-collapse: collapse">
    <caption><b>Table 3.2-1 Actor Options</b></caption>
    <thead>
        <tr style="background: gray;" class="odd">
            <td>Actor</td>
            <td>Option Name</td>
        </tr>
    </thead>
    <tbody>

                <tr>
                    <td rowspan='4'>Measure Source</td>
                <td><a href="#csv-option">CSV Option</a></td>
                </tr>

                <tr>
                <td><a href="#push-option">Push Option</a></td>
                </tr>

                <tr>
                <td><a href="#pull-option">Pull Option</a></td>
                </tr>

                <tr>
                <td><a href="#supplemental-data-option">Supplemental Data Option</a></td>
                </tr>

                <tr>
                    <td rowspan='4'>Measure Consumer</td>
                <td><a href="#csv-option">CSV Option</a></td>
                </tr>

                <tr>
                <td><a href="#push-option">Push Option</a></td>
                </tr>

                <tr>
                <td><a href="#pull-option">Pull Option</a></td>
                </tr>

                <tr>
                <td><a href="#supplemental-data-option">Supplemental Data Option</a></td>
                </tr>

                <tr><td>Measure Intermediary</td>
                <td><i>No Options Defined</i></td></tr>

                <tr><td>Measure Definition Source</td>
                <td><i>No Options Defined</i></td></tr>

                <tr><td>Measure Definition Consumer</td>
                <td><i>No Options Defined</i></td></tr>

                <tr><td>Measure Computer</td>
                <td><i>No Options Defined</i></td></tr>

                <tr><td>Data Source</td>
                <td><i>No Options Defined</i></td></tr>

    </tbody>
</table>


The options in this guide are describe in more detail the sections below.

#### CSV Option

An actor implementing the CSV Option supports the ability to exchange
MeasureReport resources in CSV format using FHIR Operations

This option applies to the actors as described below.

##### Measure Source


A
[Measure Source](actors.html#measure-source)
actor implementing the CSV option supports a FHIR Operation to provide data in CSV format.


##### Measure Consumer


A
[Measure Consumer](actors.html#measure-consumer)
actor implementing the CSV option supports a FHIR Operation to consume data in CSV format.


#### Push Option

An actor implementing the Push Option supports the periodic push of resources
describing the current status of health delivery resources to a centralized collection point.



This option applies to the actors as described below.

##### Measure Source


A Measure Source implementing the Push Option periodically sends updates to a
[Measure Consumer](actors.html#measure-consumer)
using the
[Produce Measure](transactions.html#produce-measure)
transaction.


##### Measure Consumer


An Measure Consumer implementing the Push Option periodically receives updates from the
[Measure Source](actors.html#measure-source)
using the
[Produce Measure](transactions.html#produce-measure)
transaction.


#### Pull Option

An actor implementing the Pull Option supports the periodic pull resources
describing the current status of selected health delivery resources.



This option applies to the actors as described below.

##### Measure Source


A Measure Source implementing the Pull Option is periodically queried by an
[Measure Consumer](actors.html#measure-consumer)
using the
[Query Measure](transactions.html#query-measure)
transaction to enable collection of the current status.


##### Measure Consumer


An Measure Consumer implementing the Pull Option periodically queries a
[Measure Source](actors.html#measure-source)
using the
[Query Measure](transactions.html#query-measure)
transaction to enable collection of the current status.


#### Supplemental Data Option

An actor implementing the Supplemental Data Option supports the use of Bundle in Push transactions
used with the MeasureReport resource. Actors implementing the Supplemental Data Option **shall** also implement
the Push Option.

This option applies to the actors as described below.

##### Measure Source

A MeasureSource implementing the Supplemental Data Option will send measures containing Supplemental Data using
the HTTP Batch operation with a FHIR Collection bundle to the Bundle endpoint for the receiving
Measure Consumer. The MeasureReport resource will be the first resource in this bundle, and all following resources
in the Bundle will be the resources representing the supplemental data referenced by that MeasureReport.


##### Measure Consumer

A MeasureConsumer implementing the Supplemental Data Option can receive measures containing
supplemental data at its Bundle endpoint, and will store the resources following the requirements of
the HTTP Batch operation.


#### Aggregate Option

An actor implementing the Aggregate option enables aggregation of multiple MeasureReport resources into a
consolidated
MeasureReport.


This option enables multiple reports to be aggregated:
* From multiple systems reporting partial results within a facility into a singular consolidated report.
* From multiple reports over a period of time from a given location, e.g., to aggregate daily measure reports into a weekly
report.
* From multiple subjects within a geographic region into a MeasureReport describing that region.

This option applies to the actors as described below.


---

// File: input/pagecontent/Architecture_and_Implementation.md

This guide envisions a system architecture comprised of small, easily deliverable
components that can be used together to support deployment of reporting, analysis,
alerting and data aggregation tools to support fast deployment of solutions supporting
public health situational awareness.

The technology uses for SANER includes both FHIR Servers and clients,
implemented in or along side other [Health IT Systems](technology_environment.html) to
support the [use cases](use_cases.html) of this IG.  The use cases in turn are supported
by the definitions of [actors](actors.html) that implement various [transactions](transactions.html)
to implement the functionality described in this guide. These transactions exchange data
conforming to [profiles](profiles_and_extensions.html) and using the [vocabulary](vocabulary.html) defined
in this guide.

### Major Components
The major design components described by this guide support the following functions:

* Reporting - Generates the data to be reported and make it available.
* Presentation - Analyzes and display data.
* Adaptation - Adapts between systems
* FHIR Server - A FHIR Server is an obvious component in a FHIR based implementation guide.
* External Storage - Stores data for later access.

These functions are described in more detail in the sections below.

### Reporting
The reporting component is responsible for reporting utilization data known by an
authoritative system in the hospital. There may be multiple authoritative systems
for different kinds of reporting data.  A reporting component will create FHIR Measurement
Reports documenting the measures that are known to the authoritative system.  These
reports will be collected in some form of centralized storage or transmission solution.
That solution could be as simple as a file system, or more complex (e.g., using
cloud-based storage), and could involve different protocols, including S3, Azure Blob
Storage, SFTP, or FHIR RESTful APIs and a FHIR Server.

In this guide, the Reporting component is implemented by the [Measure Source](actors.html#measure-source) actor.

### Presentation
The presentation component selects some subset of available data and presents it to
end users providing those users with the ability to interpret and act on the presented
information.  These components may generate maps showing hot spots based on some aspect
of the measured data, charts and annotations of recent trends (e.g., current values
plus projections over time), or other visualizations.

In this guide, the Presentation component is implemented by the [Measure Consumer](actors.html#measure-consumer) actor.

### Adapters
Adapters bridge systems lacking certain capabilities with other systems requiring
those capabilities, much like a ground adapter does with two pronged electrical outlet.

In this guide, the Adapter component is implemented by the [Measure Intermediary](actors.html#measure-intermediary) actor.

### FHIR Server
Several off the shelf FHIR Server components exist, which can be stood up in a data center or in the cloud to provide functionality that supports the FHIR Project. HL7 offers a page filled with [Open Source FHIR Servers](https://wiki.hl7.org/Open_Source_FHIR_implementations) (and client) implementation software.

The figure below shows a FHIR Server acting as an Intermediary between a Hospital and Public Health

<figure>
{%include FHIRServer.svg%}
</figure>



However, a Hospital could simply configure its own FHIR Server, and Public Health could then pull the data they need from it.
<figure>
{%include PublicHealthPullFromHospital.svg%}
</figure>


Or, Public Health can configure its own FHIR Server, and a Hospital can push the data to it.
<figure>
{%include HospitalPushToPublicHealth.svg%}
</figure>


### External Storage
Deployments can also use external storage, for example a file system, message queue, network or cloud storage, SFTP, or even Direct Messaging
to exchange data.  In the figure below, a hospital pushes data to its own external storage, and public health pulls data from it.
<figure>
{%include PublicHealthPullFromHospitalStorage.svg%}
</figure>



But a hospital might as easily push data to public health's external storage system.

<figure>
{%include HospitalPushToPublicHealthStorage.svg%}
</figure>



### Deployment
System components are designed such that they can be individually deployed and configured.

The following diagrams depict several different deployments with different responsibilities owned by a Hospital or Public Health Agency

#### Hospital Supported Infrastructure

<figure>
{%include HospitalPushToExternalStorageAdaptedToPullAPI-0.svg%}
</figure>



#### Middle of the Road

<figure>
{%include HospitalPushToExternalStorageAdaptedToPullAPI-1.svg%}
</figure>



#### Public Health Supported Infrastructure

<figure>
{%include HospitalPushToExternalStorageAdaptedToPullAPI-2.svg%}
</figure>



---

// File: input/pagecontent/automation_testing_examples.md

Test data for the Automation Test Data Set includes a Measure, Location, and Organization resources for
a single facility, and test data representing two days of patient activity for a small group of test
cases, designed to illustrate the capability of the automated system to distinguish the difference
between cases to be included or excluded from the measure.

### Automation Test Data

The test data were developed with the following questions in mind. Using data gathered electronically from an EHR:

* Can it accurately and consistently be discerned that an inpatient with COVID-19 was admitted on the previous day?
* Can it accurately and consistently be discerned that an inpatient had a positive viral laboratory result for SARS-Co-V-2, the organisms causing COVID-19? Likewise can it accurately and consistently be discerned when they did not?
* Can it accurately and consistently be discerned if a patient is suspected of COVID-19 by ICD-10-CM / SNOMED CT diagnosis or problem list codes in the absence of a positive laboratory test for SARS-Co-V-2, the organisms causing COVID-19? Likewise can it accurately and consistently be discerned when they did not?
* Can it accurately and consistently be determined that a patient has had a specimen collected in the previous 14 days that was positive for SARS-Co-V-2, the organisms causing COVID-19? The scenarios tested will include those where specimens were collected prior to admission. Likewise can it accurately and consistently be discerned when they did not?
* Can it accurately and consistently be determined that the only prior positive viral laboratory result for SARS-Co-V-2, the organisms causing COVID-19 was collected on the day of Connectathon?
* Can it be identified accurately and consistently that an inpatient’s location is or is not an intensive care unit?
* Can it accurately and consistently be determined that a patient is located in the Emergency Department at the time of Connectathon, or that patient is not?
* Can it accurately and consistently be determined that a patient was on a mechanical ventilator on the day of Connectathon, or that he was not?

This data can be be used to prepopulate a FHIR Server to support test cases for the Measure Computer Actor.

### Predefined Measure for the Automation Test Data Set
This implementation guide includes a sample measure describing the measurements that were required to be reported
to CDC/NHSN earlier this year for Patient Impact and Hospital Capacity.  It is similar to the measure provided
for the [hospital capacity examples](hospital_capacity_examples.html), but includes the necessary features to
automate computation from data available via a FHIR Server.

* [Computable CDC/NHSN Patient Impact and Hospital Capacity Reporting Measures](Measure-ComputableCDCPatientImpactAndHospitalCapacity.html)
  defines a computable measure that is aligned with the reporting previously required by the
  [National Healthcare Safety Network (CDC/NHSN)](https://www.cdc.gov/nhsn/index.html) using the COVID-19 Patient Impact and
  Hospital Capacity module.


---

// File: input/pagecontent/automation.md

This chapter describes the support for automation of measure reporting provided by this guide.

1. [Computing Measures](measure_automation.html) - Describes mechanisms to automate measure computation.
2. [Phrase Book](phrase_book.html) - A Phrase Book for creating automatable Measures
3. [Creating an Automated Measure](measure_creation.html) - A detailed walk through the steps for creating an automated measure.<br/>
This section includes examples for the following measurements:
   1. [Encounters](measure_group_covid19_patients.html): Patients in the hospital who have suspected or confirmed COVID-19.
   2. [AcquiredCovid](measure_group_hospital_acquired_covid19_patients.html): Patients in the hospital who have acquired suspected or confirmed COVID-19 14 days or more after admission.
   3. [CovidDeaths](measure_group_covid19_deaths.html): Deaths in the hospital during the reporting period
   4. [Ventilators](measure_group_ventilators.html): Utilization of ventilators.
   5. [Beds](measure_group_beds.html): Utilization of Beds in  different locations.


---

// File: input/pagecontent/ConceptualModel.md

Each of the  measures or counts of groups of things such as available beds, ventilators, tests ordered, et cetera, with accompanying instructions describe (to a human) of what to include in a group creates a Measure which combine into a MeasureReport .  A conceptual model of the Measure and MeasureReport artifacts appears below.
<figure>
{%include ConceptualModel.svg%}
</figure>

#### FHIR Resources
The HL7 FHIR standard has similarly named resources that perform the same functions.
A more detailed model about how these are related follows.
* [MeasureReport](https://hl7.org/fhir/R4/MeasureReport)
* [Measure](https://hl7.org/fhir/R4/Measure)

<figure>
{%include Model.svg%}
</figure>


---

// File: input/pagecontent/conformance.md

This chapter enumerates the FHIR conformance resources used for validating implementations, provides a test
plan for evaluating actors in this guide, and test data testing implementations.


<ol>
    <li id='capabilities'><details><summary>Capability Statements</summary><ol>
		<p>
			A system can declare conformance to this implementation guide by implementing one of the [defined actors](actors.html)
			and including the requisite content in the CapabilityStatement from the list below.</p>
           {% include list-simple-capabilitystatements.xhtml %}
        </ol></details>
    </li>
    <li><details><summary>Operations</summary><ol>
           {% include list-simple-operationdefinitions.xhtml %}
        </ol></details>
    </li>
    <li><details><summary>Search Parameters</summary><ol>
           {% include list-simple-searchparameters.xhtml %}
        </ol></details>
    </li>
    <li><details><summary>Profiles</summary><ol>
           {% include list-simple-profiles.xhtml %}
        </ol></details>
    </li>
    <li><details><summary>Extensions</summary><ol>
           {% include list-simple-extensions.xhtml %}
        </ol></details>
    </li>
    <li><details><summary>Value Sets</summary><ol>
           {% include list-simple-valuesets.xhtml %}
        </ol></details>
    </li>
    <li><details><summary>Code Systems</summary><ol>
           {% include list-simple-codesystems.xhtml %}
        </ol></details>
    </li>
    <li><details><summary><a href='test_plan.html'>Test Plan</a></summary></li><ol>
      <li><a href='test_plan.html#actors'>Supported Actors</a></li>
      <li><a href='test_plan.html#scenarios'>Integration Test Scenarios</a></li>
      <li><a href='test_plan.html#csvformat'>Reporting in CSV Format</a></li>
      <li><a href='test_plan.html#genstore'>Generate and Store a MeasureReport</a></li>
      <li><a href='test_plan.html#query'>Query for MeasureReport Resources</a></li>
      <li><a href='test_plan.html#forward'>Forward a MeasureReport</a></li>
      <li><a href='test_plan.html#aggregate'>Aggregate MeasureReport Resources</a></li>
      <li><a href='test_plan.html#unittest'>Unit Test Procedures</a></li>
      </ol></details>
    <li><details><summary>Test Data Sets</summary><ol>
        <li><a href='hospital_capacity_examples.html'>Hospital Capacity Measure and Report Examples</a></li>
        <li><a href='laboratory_reporting_examples.html'>Laboratory Reporting Measure and Report Examples</a></li>
        <li><a href='automation_testing_examples.html'>Automation Testing Data</a></li>
        </ol></details>
    </li>
</ol>


---

// File: input/pagecontent/CSV_Conversion.md

Some Health IT systems in a facility may not yet support HL7 FHIR.  To incorporate data from these systems, this guide enables reports to be
provided in CSV format through a simplified interface.

This interface provides operations that support conversion of a MeasureReport to CSV format and from CSV format to a MeasureReport.  Conversion is handled in a
two stage process which includes both a conversion step, and a column remapping step.

The Conversion step assumes that there is a canonical CSV representation of a MeasureReport.
This canonical representation makes the following assumptions.

1. There are no populations or groups whose code has the value subject, reporter, period.start, period.end, stratifier or stratum.
2. The first code in MeasureReport.group.code or MeasureReport.group.population.code matches the column head for scores and counts.
3. The value sets for MeasureReport.group.coding[0].code and MeasureReport.group.population.coding[0].code do not contain identical code values.
4. Order is preserved in transmission of CodeableConcept values between systems using FHIR, so that the order of codes in a coding are not changed.
5. MeasureReport.group.stratifier.stratum.population.code and MeasureReport.group.population.code are bound to the same value set within any Measure.

### Conversion from MeasureReport to CSV Format
The process described below can be used to convert a MeasureReport to its canonical CSV Format. If the canonical format is sufficient for conversion operations
then only this process need be followed.  However, the CSV report may need to be modified to remap and/or reorder column values using the map argument in operations
supporting CSV conversion.  See the section on [Remapping](#remapping) below for details on this step.

Given a collection of MeasureReport resources using the same Measure Resource, and a value set of codes used for conversion

   1. Produce the column heads for the MeasureReport resources

      1. Add the "subject" column represents the subject of the report (e.g., a location)
      2. Add the "reporter" column represents the reporter providing the data (e.g., a system or facility)
      3. Add the "period-start" and "period-end" columns represent the reporting period.  This may be
         simplified to "period" if period-start and period-end have the same value for the report.

      4. If there are strata in the MeasureReport

         1. Add the "stratifier" column to represent which stratifier is being reporting on (e.g., age, gender, race, ethnicity, etc.)
         2. Add the "stratum" column to represent the stratum within the stratifier (e.g., male, female).

      5. For each group in the MeasureReport,

         1. Add a column using the code from group.code in the conversion value set to represent the column that contains the measureScore value.
         2. For each population in in the group

            1. Add a column using the code from group.population.code in the conversion value set to represent the column that contains the count value.

   2. Produce the rows for each group within the MeasureReport

      1. Produce a row for each population within the group which contains:

         1. The identifier of the subject
         2. The identifier of the reporter
         3. The period or period-start and period-end for the reporting period
         4. If there are strata for the population

            1. A blank value for the code identifying the type of stratum
            2. A blank value for the code identifying the category within the stratum

         5. The count of the total in for each population
         6. The measure score for each population

      2. For each stratifier within the group

         1. For each population within each stratum of the stratifier

            1. Produce a row for each population which contains values the population within the stratum, including:

               1. The identifier of the subject (MeasureReport.subject.identifier.value)
               2. The identifier of the reporter (MeasureReport.reporter.identifier.value)
               3. The period or period-start and period-end for the reporting period (MeasureReport.period.start and MeasureReport.period.end)
               4. A code identifying the type of stratum (e.g., gender) (stratifier.code.coding[0].code)
               5. A code identifying the category of the stratum (e.g., male) (stratum.code.coding[0].code)
               6. The count of the number in the stratum for each population (stratum.population.code.coding[0].code)
               7. The measure score for the stratum for each population (stratum.measureScore)

### Conversion from CSV format to MeasureReport
The process described below can be used to convert from the canonical CSV Format to a MeasureReport.  If the canonical format is sufficient for conversion operations
then only this process need be followed.  However, the CSV report may need to be modified prior to conversion to remap and/or reorder column values using the
map argument in operations supporting CSV conversion.  See the section on [Remapping](#remapping) below for details on this step.

Given a Measure, a CSV file, and a value set of codes used for conversion:

    1. Extract the column heads from the CSV file.
    2. For each group of rows with the same period-start, period-end, subject and reporter values:

       1. Produce a MeasureReport resource for the group.
       2. Set MeasureReport.measure to the canonical URL of the Measure being reported on.
       3. Set MeasureReport.date to the current dateTime value.
       4. Set MeasureReport.status to complete
       5. Set MeasureReport.type to summary
       6. Set MeasureReport.subject.identifier to the value found in the first subject column in the group of rows.
       7. Set MeasureReport.reporter.identifier to the value found in the first reporter column in the group of rows.
       8. Set MeasureReport.period from the period-start and period-end columns in the first row of the group.
       9. For each row without a value in the Stratifier column (or if a Stratifier is not present, each row of the group)

          1. For each unused column value in the row

             1. If the column name matches Measure.group.code in the conversion value set for some group, copy the column value to
                the measureValue field for the named group.
             2. Otherwise if the column name matches Measure.group.population.code in the conversion value set for some population, copy the column
                value to the count field for the named population.
          2. For each unmatched group.measureValue or population.count, add a

       10. If the CSV file contains a Stratifier column

           1. If there is more than one row in the group which contains the same pair of values for stratum and stratifier, this is an error.
           2. For the unique row in the group which contains a distinct pair for stratum and stratifier

              1. For each unused column value in the row:

                 1. If the column name matches a Measure.group.stratifier.stratum.code in the conversion value set for some group, copy the column value to the measureValue field for the named group into the identified stratifier and stratum.

                 2. Otherwise if the column name matches Measure.stratifier.stratum.population.coding[0].code in the conversion value set for some population, copy the column value to the count field for the named population into the identified stratifier and stratum.

#### Remapping
The mapping processes described above will produce a canonical mapping from one or more MeasureReports to a CSV file given a Measure and value set for conversion codes.  Over time, the names of columns may change in a CSV file, or additional columns may be added, and others might be removed.  For example, the CSV format for the [CDC COVID-19 Patient Capacity](https://web.archive.org/web/20200429021826/https://www.cdc.gov/nhsn/pdfs/covid19/import-covid19-data-508.pdf#page=6) module made many of these changes to expand upon reported data and clarify the content of certain fields.

To support reporting under these circumstances, the canonical form of the CSV file needs to be remapped to support
reporting of existing data fields using new field names, or to remove fields from the report that do not need to
be reported.  This is a process involving mapping from concepts from one value set to another, and can be supported
by the FHIR [ConceptMap](http://www.hl7.org/fhir/R4/ConceptMap) resource.

However, many systems needing remapping will not generally have FHIR API capabilities, and so an alternate form of expression is
needed that can be used in API calls.

This IG defines a representation using the map parameter in queries and operations.  This is a composite parameter representing
a code in the conversion value set, and a string in thee output CSV. Each value given for the map parameter represents one
of the mappings from the Measure value set, to the CSV column headings. These mappings are reversible.  Use of this parameter
to perform remapping is shown below.

    map=fromSystem1|fromCode1$toColumnName1,fromSystem2|fromCode2$toColumnName2,...,fromSystemN|fromCodeN$toColumnNameN

When the code systems used for a Measure can be inferred from the code value, the following representation is also valid:

    map=fromCode1$toColumnName1,fromCode2$toColumnName2,...,fromCodeN$toColumnNameN

When a map is given to a conversion operation, an entry must be provided for every column that **should** appear in the CSV file (either input or output) that
is being mapped to a MeasureReport.  If no mapping is provided for a given column, then that column is not used during the conversion (i.e., it is not output on
conversion to CSV, nor is it read on conversion from CSV format).

When the code and column name are the same, the column name part of the composite
may be omitted. This allows for:

    map=code1,code2,...,codeN

This would specify that column heads be named code1 code2 … codeN in the CSV file used during conversion.

Although FHIR does not generally specify the importance of ordering in multi-valued parameters, implementations **should** use the order
to manage the order of the columns in the CSV output.  Thus:

    map=code2,code1, … ,codeN

This specify that column heads be output in the order code2 code1 … codeN in the CSV file (reversing the order of code1 and code2).


---

// File: input/pagecontent/definitions.md

[Delete this content or figure out where to put it](#todo)

Definitions are critical during times of crisis. Knowing and understanding these definitions
enables the implementers of this specification to operate from a common understanding
of meaning, and those using the data produced from those implementations to respond
accordingly.

## Bed Categories
There are a number of different counts for tracking hospital beds that are relevant in bed availability:

   1. The number of beds a facility is licensed for (licensed).
   2. The number of beds that it are occupied (census).
   3. The number of beds that a facility can staff (staffed).
   4. The physical number of beds that a facility has.
   5. The number of temporary beds (overflow or surge).

Under normal circumstances the relationship between this is that
occupied <= staffed <= licensed.  In crises situations, those relationships need not
hold.  Governments have the authority to waive licensing and staffing restrictions in
order to provide adequate care.

The State of Louisiana describes these different categories in their [Definition of Bed
Poll Terms](https://esf8.dhh.la.gov/documentportal/Download/Public/Definitions%20of%20Bed%20Poll%20Terms.pdf)
documentation, which is informed by the Standardized Hospital Bed Definitions from the
AHRQ HAvBED project.

Licensed Beds
: The maximum number of beds for which a hospital holds a license to operate. Many hospitals do
not operate all of the beds for which they are licensed.

Physically Available Beds
: Beds that are licensed, physically set up, and available for use. These are beds
regularly maintained in the hospital for the use of patients, which furnish
accommodations with supporting services (such as food, laundry, and housekeeping).
These beds may or may not be staffed but are physically available.

Staffed Beds
: Beds that are licensed and physically available for which staff is on hand to attend to the
patient who occupies the bed. Staffed beds include those that are occupied and those that are vacant.

Unstaffed Beds
: Beds that are licensed and physically available and have no current staff on hand to attend
to a patient who would occupy the bed.

Occupied Beds
: Beds that are licensed, physically available, staffed, and occupied by a patient.

Vacant/Available Beds
: Beds that are vacant and to which patients can be transported immediately. These
must include supporting space, equipment, medical material, ancillary and support services, and staff to
operate under normal circumstances. These beds are licensed, physically available, and have staff on hand to
attend to the patient who occupies the bed.

To these definitions this specification adds:

Overflow Beds
: Beds that are vacant and and to which patients can be transported immediately, but for which
there may NOT be adequate supporting space, equipment, medical material, ancillary or support services to
operate under normal circumstances. These beds **ARE NOT** necessarily licensed, though they **ARE**
physically available, and have staff on hand to attend to the patient under emergency circumstances.

Temporary space is already being planned for in Philadelphia, using an event space at
Temple University according to an [Action News report](https://6abc.com/health/philly-moving-on-from-fmr-hahnemann-covid-19-plan/6054770/).
Information about these facilities will likely need to be manually reported until systems
can be configured to track and manage them.

### Intensive Care Unit vs. Critical Care Unit

## Ventilation Support

Similarly, ventilators can be shared, so the important number for ventilators may not
be the number of devices, but rather the number of patients that can be accommodated
(ventilator outputs). New York-Presbyterian Hospital began ventilator sharing in late
March as reported in a [March 26 New York Times article](https://www.nytimes.com/2020/03/26/health/coronavirus-ventilator-sharing.html).

There are also numerous efforts to increase the supply of ventilator devices, and various
organizations are created plans to construct and actually build mechanical ventilators
from readily available hardware.

Others have noted that respiratory assistance can be provided by non-invasive ventilation
(e.g, a CPAP or BiPAP(r) machine or similar device).

Ventilator
: A regulated medical device capable of providing ventilation support.  Use of a ventilator
requires intubation with an endotracheal tube to provide ventilation support, and is
considered to be an "invasive procedure", usually requiring the kind of monitoring performed
in an intensive care unit.

Non-Invasive Ventilation Equipment
: Non-invasive ventilation refers to ventilation support that does not require the patient
to be intubated with an endotracheal tube to provide ventilation support.  Non-invasive
equipment includes both CPAP and BiPAP described below.

CPAP
: A regulated medical device providing continuous positive airway pressure.

BiPAP
: BiPAP is the trade name for Respironics Bilevel Positive Airway Pressure equipment.
These are regulated medical devices similar to CPAP, but with adjusted pressure levels
during the cycles of breathing in and out.

Ventilator Output
: A component of a ventilator that is where the airflow comes out. Presently all regulated
ventilators have one output slot (and serve one patient).  However, simple alterations enable
the one slot to be multiplied by two or four to support multiple patients.

## Test Kits
Test kits are consumable medical devices that support the completion of a diagnostic
test for a given disease. There are many medical devices that operate on a variety of
different principles that can support COVID testing.  Viral testing ranges from decoding
the RNA of viral samples, to looking for specific antibodies in the blood that react
to specialized reagents (manufactured chemicals or biologics that react in a certain
way in the present of specific molecules in a specimen) and others.

To be clear, this section is talking about **diagnostic** quality tests, which can confirm
or deny the presence of disease, rather than screening tests which might readily rule out
disease, but will cannot adequately confirm it.

Reagents can be packaged in quantity to support more than a single use, thus a definition
of a test kit is needed in order to enable counting of test kits, since they may not
be individually packaged.

Presently, [most](https://www.rapidmicrobiology.com/test-method/testing-for-the-wuhan-coronavirus-a-k-a-covid-19-sars-cov-2-and-2019-ncov)
COVID-19 testing is performed using specimens collected using a nasal (nasopharyngeal
to use the precise language) swab and collection technique.  However, there are already
existing blood tests and manufacturers are working quickly to deliver point of care
blood testing systems.

Test Kit
: A quantity of materials sufficient to perform a single test on a single specimen
for a given disease.

Viral Test Kit
: A quantity of materials sufficient to perform a single test on a single specimen
for a given viral disease.  A Viral Test Kit is a type of test kit.

COVID Test Kit
: A quantity of materials sufficient to perform a single test on a single specimen
to diagnosis COVID-19.

COVID Test Kit for Swab
: A quantity of materials sufficient to perform a single test on a single specimen
collected using a nasal swab in order to diagnosis COVID-19.

COVID Test Kit for Blood
: A quantity of materials sufficient to perform a single test on a single specimen
collected from blood or blood products in order to diagnosis COVID-19.


---

// File: input/pagecontent/fluent_query.md

This appendix describes a collection of FHIRPath functions that can be used to simplify the construction
of queries to a FHIR Server, making the underlying FHIRPath source code more readable and reliable.

It is provided as an informative component in this guide to make the measure walkthrough and FHIRPath
expressions more accessible to clinical analysts.  The functions described herein could be added to a FHIRPath
implementation as extension functions, and are not part of FHIRPath proper.

### Examples of FHIRPath without FluentQuery
This is best illustrated by showing the following two examples, and then expressing them using the functions
described in this section.

**Example 1: A FHIR Query expressed natively in FHIRPath**
```
( %Base + 'Encounter?' +
  '_include=Encounter:subject&_include=Encounter:condition&' +
  '_include=Encounter:reasonReference' +
  '&status=in-progress,finished' +
  '&date=ge' + %ReportingPeriod.start.toString() +
  '&date=lt' + %ReportingPeriod.end.toString()
).resolve().select(entry.resource)
```

**Example 2: Another FHIR Query expressed natively in FHIRPath**
```
Patient.distinct().where(
  %Base + 'Observation?_count=1' +
  '&status=registered,preliminary,final,amended,corrected' +
  '&patient=' + $this.id +
  '&date=gt' + (%ReportingPeriod.start - 14 'days').toString() +
  '&code:in=' + %Covid19Labs.url +
  '&value-concept:in=' + %PositiveResults.url
).resolve().select(entry.resource as Observation)
```

### Examples of FHIRPath with FluentQuery
**Example 1: A FHIR Query expressed using FluentQuery**
```
findAll('Encounter',
  including('subject','condition','reasonReference'),
  with('status').equalTo('in-progress'|'finished'),
  with('date').within(%ReportingPeriod)
).onServers(%Base)
```

**Example 2: Another FHIR Query expressed using FluentQuery**
```
Patient.distinct()
  .whereExists('Observation',
    for('patient', $this),
    with('status').equalTo(
     'registered' | 'preliminary' | 'final' | 'amended' | 'corrected'),
    with('date').greaterThan(%ReportingPeriod.start - 14 'days'),
    with('code').in(%CovidLabs),
    with('value-concept).in(%PositiveResults)
   ).onServers(%Base)
```

### FluentQuery Functions
The functions supporting FluentQuery are defined below.

####Search Functions
##### `findAll(ResourceType [, QueryFunctionExpression]*)`
<span id='findAll'> </span>
The `findAll` function constructs a relative search URL for the specified resource type, appending
the queries specified by any of the QueryFunctionExpression values separated by an `&`, and returns
this in a string.  When executed, this query will return all results including those returned via
pagination.

##### `whereExists(ResourceType [, QueryFunctionExpression]*)`
<span id='whereExists'> </span>
The `whereExists` function constructs a relative search URL for the specified resource type, adds
`_count=1` to it, and appends the queries specified by any of the QueryFunctionExpression values
separated by an `&`, and returns this in a string.  This query is used for existence tests.

#### Query Execution Functions
##### `onServers([reliability, ] Servers*)`
<span id='onServers'> </span>
The onServers function executes a search on the specified servers.  Servers is a list of fully qualified
base URLs.  findAll queries resolve the data on all servers (including all pages from each server), and
then selects entry.resource from all returned Bundle resources.  The `whereExists` query returns the first
resource found after finding at least one match on any server, returning the first matching resource
(and any included resources associated with it) .  Implementations are free to execute searches serially
or in parallel.

The optional reliability parameter indicates how to handle failures during a search, and can take the
value of 'skip', or 'fail'.  Skip means if any server fails to respond, or responds with an error code
(or exception of some sort), that the resolution should act as if a Bundle was returned with a singular
OperationOutcome resource that describes the kind of error that occurred.  This ensures that queries
succeed, but there may be missing data. If the value is fail, it indicates that if any server should
fail to respond, the expression should throw an exception.  This allows expression writers some limited
control over how to handle error conditions when a server is being queried.  Implementations should
consider retrying failed queries in either case.

The following executions are equivalent:
```
onServers('http:example.com/server1','http://example.com/server2')
onServers('http:example.com/server1'|'http://example.com/server2')
```

#### Query Parameter Name Functions
The query parameter name functions start the first half of a query parameter to add to the query URL.  They
simply return the name as a string

##### `with(Name)`
<span id='with'> </span>
The with function constructs the first half of a named query parameter.  It should be followed by a Query
Parameter Value Function to construct the second half (the part containing the equals sign).

##### `for(Name, Reference|Resource|Identifier)`
<span id='for'> </span>
The for function constructs a complete query parameter that matches a resource or identifier.

If the first parameter is a reference or resource id, the query parameter is written as Name=Reference.

If the second parameter is a resource, this is converted to a reference to that resource, and treated as
above.

If the second parameter is an identifier, this is converted to a reference by identifier search, and
written as `Name:identifer=Identifier`.

##### `including(Names)`
<span id='including'> </span>
The including function specifies what other resources should be included.  If any value in `Names` doesn't
start with a resource type, it is prepended with the `ResourceType` value(s) specified in `findAll` or
`whereExists` above.

##### `has(Name)`
<span id='has'> </span>
The `has` function constructs the first half of a named query parameter supporting
[_has](https://www.hl7.org/fhir/search.html#has) searches.  The value will be `_has:Name`.  Chained
has are possible. It should be followed by a Query Parameter Value function to construct the second
half (the part containing the equals sign).

#### Query Parameter Value Functions
Query parameter value functions produce the second half of a query parameter (the part containing the
equals sign).

A value can be a primitive, Quantity, Coding, or CodeableConcept, or Reference type.

For Quantity type, value will be expressed in number|system|code form as required by Quantity parameters.
If system and code are empty, but unit is present, a Quantity value will be expressed as `number||unit` with
no system.  If neither of system, code or unit are present, a quantity value will be expressed as number.

For Coding type, value will be expressed in system|code form as required of Token parameters.

Period parameter values work with Date, DateTime, Instant and Period data types.  A date promotes to an
appropriate Period in these cases.

##### `equalTo(Values*)`
<span id='equalTo'> </span>
Appends =Values[1],Values[2],...,Values[n] to the query parameter.  Note that Values can repeat, or be a
list, or both.  The following three expressions are equivalent:
```
equalTo('in-progress','finished')
equalTo('in-progress'|'finished')
equalTo('in-progress,finished')
```
##### `equalToComposite(Value1, Value2)`
<span id='equalToComposite'> </span>
Appends =Value1$Value2 to the query.

##### `notEqualTo(Values*)`
<span id='notEqualTo'> </span>
Appends =neValues[1],Values[2],...,Values[n] to the query parameter. Note that Values can repeat, or be a
list, or both. The following three expressions are equivalent:
```
notEqualTo('in-progress','finished')
notEqualTo('in-progress'|'finished')
notEqualTo('in-progress,finished')
```

##### `greaterThan(Value)`, `greaterThanOrEqualTo(Value)`, `lessThan(Value)`, `lessThanOrEqualTo(Value)`, `approximately(Value)`
<span id='greaterThan'> </span>
<span id='greaterThanOrEqualTo'> </span>
<span id='lessThan'> </span>
<span id='lessThanOrEqualTo'> </span>
<span id='approximately'> </span>
Appends =prefixValue to the query parameter, where prefix is gt, ge, lt, le, or ap appropriately.  Value
must be a singular value.

##### `startsAfter(Period)`, `endsBefore(Period)`
<span id='startsAfter'> </span>
<span id='endsBefore'> </span>
If Period is any date type, promotes that to a Period first.
Appends `=prefixValue` to the query parameter, where prefix is sa or eb respectively, and Value is `Period.start`
or `Period.end` respectively.

##### `within(Period)`
<span id='within'> </span>
If Period is any date type, promotes that to a Period first.
Given name is the Query Parameter name, appends `=gtPeriod.start&name=ltPeriod.end` to the query parameter.  If end is not present
(an open period at the end), then it only appends =gtPeriod.start to the query parameter (this is one of the functions that
needs access to the focus)

##### `not(token)`, `text(token)`, `above(token|uri)`, `below(token|uri)`, `in(uri)`, `notIn(uri)`
<span id='not'> </span>
<span id='text'> </span>
<span id='above'> </span>
<span id='below'> </span>
<span id='in'> </span>
<span id='notIn'> </span>
Appends `:modifier=token|uri` to the query parameter, where modifier is `not`, `text`, `above`, `below`, `in`,
or `not-in` appropriately.


---

// File: input/pagecontent/glossary.md

The following terms and initialisms/acronyms are used within the SANER FHIR IG:

|Term|Definition|
|---|---|
AHIC| American Health Information Community
AHRQ|Agency for Healthcare Research and Quality
COVID-19|coronavirus disease 2019
ED|Emergency Department
EDXL|Emergency Data Exchange Language
EEI|essential elements of information
EHR|electronic health record
FHIR|Fast Health Interoperability Resources
HAvBED|Hospital Available Beds for Emergencies and Disasters
HAvBED2|Hospital Available Beds for Emergencies and Disasters Version 2
HAVE|Hospital Availability Exchange
HITSP|The American National Standards Institute (ANSI) Healthcare Information Technology Standards Panel
ICU|Intensive Care Unit
LOINC|Logical Observation Identifiers Names and Codes
MERS| Middle East Respiratory Syndrome
NHSN| Centers for Disease Control’s National Healthcare Safety Network
NICU| Neonatal Intensive Care Unit
OASIS|A standards development organization
ONC| Office of the National Coordinator for Health Information Technology
SARS-Cov-2| Severe Acute Respiratory Syndrome Associated Coronavirus 2
SNOMED|Systemized Nomenclature of Medicine
SOA| Service-oriented architecture
tern|Terns are seabirds in the family Laridae that have a worldwide distribution and are normally found near the sea, rivers, or wetlands.
USCDI| United States Core Data for Interoperability


---

// File: input/pagecontent/hospital_capacity_examples.md

Test data for the Hospital Capacity Test Data Set includes a sample measure, and locations and organizations
resources representing hospitals in Cook County, Illinois, and in the State of Rhode Island, as well as data for the
State of New Jersey (aggregated reports).

### Predefined Measure for the Hospital Capacity Test Data Set
This implementation guide includes a sample measure describing the measurements
that were required to be reported to CDC/NHSN earlier this year for Patient Impact and Hospital Capacity.
This measure is only provided as examples to illustrate measure development and reporting.  Official reporting
requirements are established by HHS and other US Federal agencies and not by this guide.

* [CDC/NHSN Patient Impact and Hospital Capacity Reporting Measures](Measure-CDCPatientImpactAndHospitalCapacity.html)
  defines a measure that is aligned with the reporting previously required by the
  [National Healthcare Safety Network (CDC/NHSN)](https://www.cdc.gov/nhsn/index.html) using the COVID-19 Patient
  Impact and Hospital Capacity module.


#### Cook County, Illinois and Rhode Island Hospitals
The organizations and locations referenced in this data set exist in the real world, but the measure report data included for
those is all test data, and is not related to any actual events occurring in real life.

This data can be used to prepopulate a FHIR Server to support test cases for the Measure Consumer, and
Measure Source actors, and the Measure Intermediary actors.

Test data for this example can be found at https://github.com/HL7/fhir-saner/blob/master/testcasedata/FHIR-Examples.zip


---

// File: input/pagecontent/index.md


The Situational Awareness for Novel Epidemic Response Implementation Guide enables transmission
of high level situational awareness information from inpatient facilities to centralized data repositories
to support the treatment of novel influenza-like illness.


### Organization of This Guide
This guide is organized into five main sections:

* Chapter I: Introduction and Overview
1. [Introduction](introduction.html) - Provides an Introduction to this IG
2. [Measuring Situational Awareness](situational_awareness_measures.html) - Describes situational awareness and how to measure it.
3. [Use Cases](use_cases.html) - Illustrates Key Uses Cases addressed by this guide.
* Chapter II: Technical Implementation
1. [Architecture and Implementation](Architecture_and_Implementation.html) - Illustrates the Microservice Architecture.
2. [Security Considerations](security_considerations.html) - Documents security concerns and mitigations.
3. [Actors and Transactions](actors.html) - Provides an overview of technical components

* Chapter III: Integrating with Existing Systems
1. [Technology Environment](technology_environment.html) - Identifies existing information systems containing situational awareness data.
2. [Integrating via CSV Files](CSV_Conversion.html) - Describes how CSV Conversions are performed.
3. [Aggregating Data](measure_aggregation.html) - Describes how to aggregate Measure data.

* Chapter IV: Conformance and Testing
<ol>
    <li><details><summary><a href="artifacts.html#behavior-capability-statements">Capability Statements</a></summary>
      <ol>

        {% include list-name-capabilitystatements.xhtml %}

      </ol></details>
    </li>
    <li><details><summary><a href="artifacts.html#behavior-operation-definitions">Operations</a></summary><ol>
        <li><a href='OperationDefinition-Measure-evaluate-measure.html'>Measure/$evaluate-measure</a> Evaluate the Measure</li>
        <li><a href='OperationDefinition-Measure-report-csv.html'>Measure/$report-csv</a> Create or update a MeasureReport from CSV Format</li>
        <li><a href='OperationDefinition-MeasureReport-aggregate.html'>MeasureReport/$aggregate</a>Aggregate MeasureReport resources</li>
        <li><a href='OperationDefinition-MeasureReport-read-csv.html'>MeasureReport/$read-csv</a> Read in CSV Format</li>
        <li><a href='OperationDefinition-MeasureReport-search-csv.html'>MeasureReport/$search-csv</a> Search in CSV Format</li>
        </ol></details>
    </li>
    <li><details><summary>Search Parameters</summary><ol>
        <li><a href='SearchParameter-SearchParameter-code.html'>code</a> - Enables Measure, MeasureReport, Questionnaire and QuestionnaireResponse resources to be discovered by codes used in the resource</li>
        <li><a href='SearchParameter-SearchParameter-definition-text.html'>definition-text</a> - Enables definition resources to be discovered from text used in the resource definition</li>
        <li><a href='SearchParameter-SearchParameter-disposition.html'>disposition</a> - Enables query of encounters by discharge disposition</li>
        </ol></details>
    </li>
    <li><details><summary><a href='profiles_and_extensions.html'>Profiles and Extensions</a></summary><ol>
      <li><a href='profiles_and_extensions.html#resources'>Resource Profiles</a></li>
      <li><a href='profiles_and_extensions.html#audit'>Audit Records</a></li>
      <li><a href='profiles_and_extensions.html#datatypes'>DataType Profiles</a></li>
      <li><a href='profiles_and_extensions.html#extensions'>Extensions</a></li>
      </ol></details></li>
    <li><details><summary><a href='vocabulary.html'>Terminology Resources</a></summary><ol>
      <li><a href='vocabulary.html#valuesets'>Value Sets</a></li>
      <li><a href='vocabulary.html#codesystems'>Code Systems</a></li>
      <li><a href='vocabulary.html#ageranges'>Recommendations for Coding Age Ranges</a></li>
      </ol></details></li>
    <li><details><summary><a href='test_plan.html'>Test Plan</a></summary><ol>
      <li><a href='test_plan.html#actors'>Supported Actors</a></li>
      <li><a href='test_plan.html#scenarios'>Integration Test Scenarios</a></li>
      <li><a href='test_plan.html#csvformat'>Reporting in CSV Format</a></li>
      <li><a href='test_plan.html#genstore'>Generate and Store a MeasureReport</a></li>
      <li><a href='test_plan.html#query'>Query for MeasureReport Resources</a></li>
      <li><a href='test_plan.html#forward'>Forward a MeasureReport</a></li>
      <li><a href='test_plan.html#aggregate'>Aggregate MeasureReport Resources</a></li>
      <li><a href='test_plan.html#unittest'>Unit Test Procedures</a></li>
      </ol></details></li>
    <li><details><summary id='test-data'>Test Data Sets</summary><ol>
        <li><a href='hospital_capacity_examples.html'>Hospital Capacity Measure and Report Examples</a></li>
        <li><a href='laboratory_reporting_examples.html'>Laboratory Reporting Measure and Report Examples</a></li>
        <li id='automation-data'><a href='automation_testing_examples.html'>Automation Testing Data</a></li>
        </ol></details>
    </li>
</ol>

* Chapter V: Defining Measures from Essential Elements of Information
1. [Computing Measures](measure_automation.html) - Describes mechanisms to automate measure computation.
2. [Phrase Book](phrase_book.html) - A Phrase Book for creating automatable Measures
3. [Creating an Automated Measure](measure_creation.html) - A detailed walk through the steps for creating an automated measure.

* [Appendix A: Supporting Terminology](supporting_vocabulary.html)
* [Appendix B: Fluent Query](fluent_query.html)
* Downloads
  * [this entire guide](full-ig.zip),
  * the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
  * the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.
  * The source code for this Implementation Guide can be found on [https://github.com/HL7/fhir-saner](https://github.com/HL7/fhir-saner).

Click on any of the links above, head on over the [table of contents](toc.html), or
if you are looking for a specific artifact, check out the [index](artifacts.html).

![The SANER Project Logo](SANERLogo.png)
<div style='float: clear'/>
**Fighting COVID-19 with FHIR®**

### Copyrights and Acknowledgements

Value Sets in this guide include:

* Vocabulary Content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards
Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT
is not covered by this agreement.

* Vocabulary Content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and
the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license
at LOINC/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc

* Vocabulary Content developed by the US National Library of Medicine: Reference to specific
commercial products, manufacturers, companies, or trademarks does not constitute its endorsement or recommendation
by the U.S. Government, Department of Health and Human Services, or NLM. Source materials are available from the
NLM Website at no charge at https://www.nlm.nih.gov/research/umls/rxnorm/index.html

* Vocabulary Content developed by CDC: Reference to specific commercial products, manufacturers, companies, or
trademarks does not constitute its endorsement or recommendation by the U.S. Government, Department of Health and
Human Services, or Centers for Disease Control and Prevention. Source materials are available from the CDC Website
at no charge at https://www.cdc.gov/nhsn/cdaportal/terminology/codesystem/hsloc.html

* The SANER Logo was created by Adrian "Kingsley" McDermott, additional imagery by [@RoseFyreWolf](https://www.instagram.com/rosefyrewolf/)

#### Contributors


| Name | Organization | Role |
| --- | --- | --- |
| Keith Boone | Audacious Inquiry | Project Lead, Lead Developer |
| Gino Canessa | Microsoft | Developer |
| Michael Donnelly | Epic | Developer |
| Rick Geimer | Lantana | Measure Computer |
| John Moehrke | Bylight | Security and Testing Advisor |
| Austin Kreisler | Leidos | Subject Matter Expert |
| Josh Mandel | Microsoft | Subject Matter Expert |
| Abigail Watson | Symptomatic.io |  Subject Matter Expert |
| David Pyke | Audacious Inquiry | HL7 Liaison, Developer |

### Legal Statements
 While this implementation guide and the underlying FHIR are licensed as public domain under the FHIR license. The license page also describes rules for the use of the FHIR name and logo.

This guide includes examples making use of terminologies such as LOINC, SNOMED CT and RxNorm codes that have more restrictive licensing requirements. Implementers should make themselves familiar with licensing and any other constraints of terminologies, questionnaires, and other components used as part of their implementation process. In some cases, licensing requirements may limit the systems that data captured using certain Definitions may be shared with. 

{% include ip-statements.xhtml %}

---

// File: input/pagecontent/integration.md

This chapter describes how the capabilities of this guide can be integrated with existing information systems.

1. [Technology Environment](technology_environment.html) - Identifies existing information systems containing situational awareness data.
2. [Integrating via CSV Files](CSV_Conversion.html) - Describes how CSV Conversions are performed.
3. [Aggregating Data](measure_aggregation.html) - Describes how to aggregate Measure data.
4. [Computing Measures](measure_automation.html) - Describes automating the computation of Measures


---

// File: input/pagecontent/intro.md

This chapter describes the scope of this guide, provides background information about situational awareness, and key concepts
and describes the use cases supported by this implementation guide.

1. [Introduction](introduction.html) - Provides an Introduction to this IG
2. [Measuring Situational Awareness](situational_awareness_measures.html) - Describes situational awareness and how to measure it.
3. [Use Cases](use_cases.html) - Illustrates Key Uses Cases addressed by this guide.
4. [Conceptual Model](ConceptualModel.html) - Describes the basic models for the SANER IG
5. [Glossary](glossary.html) - Glossary of terms used in the SANER IG


---

// File: input/pagecontent/introduction.md

The Situational Awareness for Novel Epidemic Response Implementation Guide enables transmission of
situational awareness information from healthcare facilities to centralized data
repositories to support the focus and response to novel influenza-like illness, such as COVID-19.
The COVID-19 pandemic has caused a need to have immediate awareness of available aggregate facility status, patient outcomes and resource availability for public health and emergency response agencies to support
monitoring, coordination, and management. Similar outbreaks and other public health emergencies
can immediately benefit from the work in this project to support public health emergency preparedness
and response.

### Scope

The scope of this project is to support reporting of data required by public health and emergency
response agencies to address management of the COVID-19 Pandemic. The project will develop solutions that address COVID-19 and similar public health emergencies.

#### Principles
The following principles were established for development of this guide:
1.  The solution needs to be focused on providing high return on investment (ROI).
2.  The solution should not duplicate existing efforts.
3.  The solution needs to work with existing Health IT products currently deployed.
4.  The uplift needed to enable an existing product to support public health information
requirements needs to be low enough to effectively deliver quickly.

#### Approach
This guide will focus on existing FHIR Release 4 resources with extensions where necessary.
The project team assessed past efforts to support situational awareness, including:
* Existing standards,
* Existing HL7 FHIR resources, and
* Terminology

Based on these assessments, this IG prioritized its focus on supporting bed and ventilator
availability, but includes support for other reporting efforts (e.g., PPE supplies, staffing).

#### Assessment
1.  Existing work by [Johns Hopkins University](https://coronavirus.jhu.edu/map.html) in aggregating
case data sets and visualizing them addresses national and even regional (at the county level) trends.
2.  Bed availability is an area where there is a great deal of existing
work [^1]<sup>,</sup>[^2]<sup>,</sup>[^3]<sup>,</sup>[^4], but not much prior success, although there
are existing Health IT solutions that have this data (not just in the EHR).  If the solution can be
interfaced rather than integrated, an implementation can be piloted much faster.
3.  Other resource utilization data is available in inventory control or central monitoring
solutions, but are not necessarily readily available in the EHR.  This is a natural
evolution from Bed Availability.

[^1]: [HITSP C47: Resource Utilization Message](http://www.hitsp.org/ConstructSet_Details.aspx?&PrefixAlpha=4&PrefixNumeric=47)

[^2]: [HAvBED2: Hospital Available Beds for Emergencies and Disasters](https://archive.ahrq.gov/prep/havbed2/)

[^3]: [Emergency Data Exchange Language (EDXL) Hospital Availability Exchange (HAVE) v1.0 incorporating Approved Errata](https://www.oasis-open.org/standards#edxlhave-v1.0)

[^4]: [HL7/OASIS Cross Paradigm Implementation Guide: Emergency Data Exchange Language (EDXL) Hospital Availability Exchange (HAVE) Version 2.0 (EDXL-HAVE), Release 1](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=489)


##### Bed Availability
The key data for bed availability is found in Bed Management solutions integrated with
current inpatient EHR Systems, and in departmental ICU and Central Monitoring systems.
Such solutions support management of bed assignment for admissions and provide direction to
housekeeping staff regarding bed-turnover activities (e.g., cleaning) or departmental systems,
that provide ICU and Nursing central monitoring capabilities.  They are often separate components
or modules, Standalone solutions, or third party solutions which integrate with an
EHR System.

##### Prior Solutions and Existing Standards
Prior standards developed to address these issues have been profiled through past efforts.  These are briefly
outlined below.

###### HAvBED and OASIS EDXL/HAVE Standards
Most notably, the OASIS Emergency Data Exchange Language (EDXL), and the OASIS Hospital Availability Exchange
were profiled by ANSI/HITSP in response to the American Health Information Community (AHIC)  Emergency Responder Use Case.  This work was advanced by AHRQ to develop what is now known as the HAvBED solution, which became a federally-mandated program for states
to collect and report bed availability data.  Health and Human Services suspended the HAvBED program in 2016.
Some of the challenges with HAvBED included:

* Manually entered data in many automated bed availability systems is labor-intensive, untimely, resulting in data quality issues.
* Technology standards have evolved, and HAvBED requirements did not keep pace.
* Facilities and states were often reluctant to share bed availability data.

###### HL7 Version 2
Other standards that contain information about bed availability include HL7 Version 2
(e.g., the [ADT_A20 Bed Status Update](http://www.hl7.eu/refactored/msgADT_A20.html) message),
and general observations profiled by ANSI/HITSP to support organizational reporting of bed availability using HL7 Version 2 OBX segments.

###### HL7 Version 3
No HL7 Version 3 standards were developed to support Bed management or availability.
The HL7 SOA Workgroup Collaborated with the OASIS EDXL Committee to develop a [Cross
Paradigm](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=489)
specification supporting the communication of bed availability information.


#### HL7 FHIR Resources Supporting Situational Awareness Reporting
In HL7 FHIR the [Location](https://hl7.org/fhir/R4/location.html) resource can describe information about any bed within a facility. The [Group](https://hl7.org/fhir/R4/group.html) resource can report on specific quantities of groups of resources available that match a specific set of characteristics. The [MeasureReport](https://hl7.org/fhir/R4/measurereport.html) resource can report on measures using counts and other metrics over a variety of resources.

##### Device Resource
The [Device](https://hl7.org/fhir/R4/device.html) Resource can report on medical devices, including ventilators, respirators, personal protective equipment such as masks, and viral test kits. Device is not widely used by systems reporting on device quantities or status.

##### Location Resource
While the [Location](https://hl7.org/fhir/R4/location.html) resource can report on beds, it can also be used to describe buildings, wards, geographic area, or any other sort of place, including "mobile" places such as a mobile clinic or ambulance. Given its broad application, would need to be profiled to support use for bed availability.

While many existing Certified EHR Systems support the FHIR standard and the Location resource today, there's little use of the Location resource to report data about beds. It is more commonly used to report Location data associated with the [Common Clinical Data Set](https://www.healthit.gov/sites/default/files/commonclinicaldataset_ml_11-4-15.pdf) (a precursor to the US Core Data for Interoperability or [USCDI](https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi)) required by the ONC 2015 Certification regulations. These uses of Location are found in the Encounter, Procedure and Practitioner resources to describe the facility where an encounter occurs, the location where a procedure is performed, or the location of a practitioner or facility.

##### Group Resource
While the [Group](https://hl7.org/fhir/R4/group.html) resource can be used to support aggregate reporting on beds, as it allows reporting of quantities of an item without referencing an individual item, it has not been deployed in this way by any known system. This resource can also be used to report on other types of resources, such as ventilators, respirators, and N95 masks.

NOTE: While Group doesn't specifically support groups of Location resources, it can be used to report on any group of things that can be defined by characteristics, it simply cannot enumerate those resources. That is not essential for the use cases in this implementation guide.

The Group resource is more lightly deployed in existing EHR products.

##### Immunization
The [Immunization](https://hl7.org/fhir/R4/immunization.html) resource can be used to determine the quantity of immunizations dispensed to vaccinate patients. The Immunization resource is included in USCDI and generally available in EHR systems in the US.

##### MedicationDispense, MedicationAdministration
 The [MedicationDispense](https://hl7.org/fhir/R4/medicationdispense.html) resource can be used to determine the quantity of specific types of medications dispensed to treat patients (e.g., Remdesivir). MedicationAdministration would be used to determine the quantity of medications given. MedicationDispense and MedicationAdministration are not widely available through EHR systems generally.

##### SupplyRequest and SupplyDelivery
The [SupplyDelivery](https://hl7.org/fhir/R4/supplydelivery.html) resources can be used to determine quantities of supplies, such as PPE or disposable items used during treatment. These resources are relatively new and not widely available.

##### Measure and MeasureReport Resource
 The [Measure](https://hl7.org/fhir/R4/measure.html) and [MeasureReport](https://hl7.org/fhir/R4/measurereport.html) resource can be used to support reporting of a variety of measures, including simple counts, tracking of inventory (e.g., PPE, medication supply), or used with measures over different strata. It is not readily searchable at the stratum level. MeasureReport is beginning to gain traction because of efforts using it in the [DaVinci Project](https://www.hl7.org/about/davinci/) and in clinical quality reporting efforts.

##### Questionnaire Response
The [QuestionnaireResponse](https://hl7.org/fhir/R4/questionnaireresponse.html) resource has been profiled for use in reporting to CDC's National Healthcare Safety Network (NHSN) in two implementation guides to report the occurrence of Healthcare Acquired Infections. These guides have seen limited implementation and testing.

#### Terminology
Terminology plays an important role in this implementation guide.
It can be used to describe:
* The kind of location where the bed is located (e.g., ED, med/surgery, ICU, Pediatric,
NICU, Isolation)
* The status of a bed (e.g., available, in use, isolated, contaminated, housekeeping)
* Other types of resources (e.g., ventilators, respirators, masks, et cetera)

##### Location Type
The HL7 Version 3 [Service Delivery Location Role Type](https://www.hl7.org/fhir/v3/ServiceDeliveryLocationRoleType/vs.html)
Value Set has been adopted as the [Preferred](https://www.hl7.org/fhir/terminologies.html#preferred) classification system for `Location.type` in the Location resource in FHIR
R4.

##### Bed Status
HL7 Version 2 Table 0116 [Bed Status Provides Vocabulary](https://www.hl7.org/fhir/v2/0116/index.html) that can describe the status
of a bed, and has been adopted as the [Extensible](https://www.hl7.org/fhir/terminologies.html#extensible) vocabulary
for `Location.operationalStatus` in the Location resource in FHIR R4.

##### Codes used for Stratifying Populations
Other codes are essential for stratifying populations to determine the impact of disease,
by age, gender or race and ethnicity, either to determine risk factors, or identify
disparities in treatment.  Existing code sets are available to support these sorts of
stratification efforts.

##### New Codes
Until COVID-19 and SARS-Cov-2 were discovered, codes to describe the disease, diagnostic
tests, antibody tests, or test results did not exist because these concepts did not
yet exist.  Since then organizations like AMA, WHO, Regenstrief and IHTSDO, responsible for managing code
systems used by EHR and other Health IT systems have produced codes where needed, and developed value
sets and guidelines for coding conditions and situations related to COVID-19 including
diagnosis, evaluation, treatment, procedures, and medications associated with the disease.

These new codes and guidelines for use of existing codes support:

* Laboratory Testing and Results
* Diagnosis of COVID-19
* Suspected Diagnosis of COVID-19
* Suspected or actual Exposure to COVID-19
---------


---

// File: input/pagecontent/laboratory_reporting_examples.md

Test data for the Laboratory Reporting Test Data Set includes a measure, measure reports, and locations
and organizations resources representing aggregate reports for the State of New Jersey over time.  This data
comes from publicly reported data sets published via [The COVID Tracking Project](https://covidtracking.com/), or the New Jersey
department of public health.  The data is based on real world reports provided at the state level, but should
NOT be considered an authoritative source.

This data can be used to prepopulate a FHIR Server to support test cases for the Measure Consumer, and
Measure Source actors, and the Measure Intermediary actors.

### Predefined Measure for the Laboratory Reporting Test Data Set
This implementation guide includes a sample measure describing the measurements that were required to be reported
to the US Federal Emergency Management Agency (FEMA) earlier this year for hospital laboratory reporting.

* [FEMA Daily Hospital COVID-19 Reporting Measures](Measure-FEMADailyHospitalCOVID19Reporting.html)
  defines a measure that was aligned with the reporting required by the
  [Federal Emergency Management Agency (FEMA)](https://www.aha.org/advisory/2020-03-30-coronavirus-update-administration-requests-hospitals-report-daily-covid-19)
  for reporting COVID-19 test results from Hospital in-house laboratories.

This data set can be used to test aggregation of measure reports over time for cumulative measurements.

[Example Location for the State of New Jersey](Location-states-NJ.html)<br/>
[Example Organization for the New Jersey Department of Public Health](Organization-NJ-DPH.html)<br/>

[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/04/2020](MeasureReport-ExampleNJ-20200404-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/05/2020](MeasureReport-ExampleNJ-20200405-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/06/2020](MeasureReport-ExampleNJ-20200406-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/07/2020](MeasureReport-ExampleNJ-20200407-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/08/2020](MeasureReport-ExampleNJ-20200408-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/09/2020](MeasureReport-ExampleNJ-20200409-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/10/2020](MeasureReport-ExampleNJ-20200410-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/11/2020](MeasureReport-ExampleNJ-20200411-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/12/2020](MeasureReport-ExampleNJ-20200412-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/13/2020](MeasureReport-ExampleNJ-20200413-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/14/2020](MeasureReport-ExampleNJ-20200414-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/15/2020](MeasureReport-ExampleNJ-20200415-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/16/2020](MeasureReport-ExampleNJ-20200416-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/17/2020](MeasureReport-ExampleNJ-20200417-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/18/2020](MeasureReport-ExampleNJ-20200418-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/19/2020](MeasureReport-ExampleNJ-20200419-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/20/2020](MeasureReport-ExampleNJ-20200420-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/21/2020](MeasureReport-ExampleNJ-20200421-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/22/2020](MeasureReport-ExampleNJ-20200422-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/23/2020](MeasureReport-ExampleNJ-20200423-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/24/2020](MeasureReport-ExampleNJ-20200424-FEMADailyHospitalCOVID19Reporting.html)<br/>
[Example MeasureReport of FEMADailyHospitalCOVID19Reporting for NJ on 04/25/2020](MeasureReport-ExampleNJ-20200425-FEMADailyHospitalCOVID19Reporting.html)<br/>


---

// File: input/pagecontent/measure_aggregation.md

There are four different ways to consolidate a collection of MeasureReport resources referencing a common Measure into an aggregated MeasureReport:
1. Consolidating data within a facility from multiple reporting agents.
2. Over time, e.g., consolidating daily reports into a weekly report,
3. Over a larger geographic location, e.g., consolidating reports for all hospitals in a city or county, or
4. Consolidating data over both time and geography, e.g., consolidating all daily reports for all hospitals in a county for a week.

All MeasureReport resources being consolidated must reference a common Measure in MeasureReport.measure.

The process to perform this aggregation is the same for all of the above cases, and is defined in more detail in the [Aggregate operation](OperationDefinition-MeasureReport-aggregate.html). That operation can be used by an Intermediary to consolidate MeasureReport resources into an aggregated MeasureReport for further processing.

The MeasureReport resource can be used to report on situational awareness not just for individual facilities, but also on geographic regions such as cities, towns, counties, states, provinces, territories, and other ad hoc geographic regions. They can also be used for reporting of non-geographically identified groups (e.g., all facilities managed by the same organization).

Group reports by aggregation region. This implementation guide does not specify how these groupings are created, but there are several mechanisms that might be used in an implementation:

1. Aggregate within a Facility to support consolidated reporting from multiple agents (e.g., information systems) within a facility for external reporting.
2. Aggregate by geolocation - When an implementation provides geographic coordinates, aggregates can be defined by polygons defining the set of geographic regions.
3. Aggregate by address - Some geographies can be aggregated by postal address.  Postal addresses identify some geopolitical boundaries, including:
   * [Cities](http://www.hl7.org/fhir/datatypes-definitions.html#Address.city),
   * Counties or parishes (known as the [district](http://www.hl7.org/fhir/datatypes-definitions.html#Address.district) in the FHIR Address data type),
   * [States](http://www.hl7.org/fhir/datatypes-definitions.html#Address.state),
   * [Country](http://www.hl7.org/fhir/datatypes-definitions.html#Address.country), and
   * [Zip Code or Postal Code](http://www.hl7.org/fhir/datatypes-definitions.html#Address.postalCode).
   * Provider or Hospital Service Areas or Referral Regions (see [Dartmouth Atlas](supporting_vocabulary.html#dartmouth) in Supporting Vocabulary).
4. Aggregate by a [List](http://hl7.org/fhir/list.html) - A list of Location resources can be created by enumerating every Location resource within the List resource.

While the most common use case is aggregation by geopolitical boundary (e.g., city, county, state), other useful geographic regions exist. Neighborhood or (in the US, a Census Tract) can define regions that are smaller than a city or county. Smaller geographic regions can support additional analysis, e.g., in regard to social determinants of health, or geographic regions addressing patterns of referral or service areas (e.g., hospital referral regions and service areas).

The [Aggregate](OperationDefinition-MeasureReport-aggregate.html) operation defines the algorithm for aggregating measure reports.

### Aggregation of Population Counts
The aggregation of population.count requires special attention.

For a given facility and time period, measures can be aggregated in different ways depending on the [scoring of the measure](CodeSystem-PublicHealthMeasureScoring.html).
The scoring of measures implies the way that which rate aggregation can be performed:

* Capacity<br/>
  Measures **point in time** capacity or utilization
* Event Growth<br/>
  Measures **cumulative** growth by counting current and cumulative events over time
* Queue Length<br/>
  Measures the number of activities awaiting completion at a **point in time**.
* Service Time<br/>
  Measures the **aggregate** total time to complete activities / total number of activities
* Availability
  Measures the **point in time** availability of resources

Measure population values can be aggregated across multiple measures to report across a wider group. The aggregation method is indicated in the rateAggregation field found in the MeasureGroupAttributes extension on the Measure.group element.  These values come from the [Measure Rate Aggregation Values](ValueSet-MeasureRateAggregationValues.html) value set. Each of these values describes the method of aggregation.

* count<br/>
  A count of events that happened, or changes in status, or of things consumed or performed over that period in
  time (e.g., admissions, deaths, tests performed).   These are aggregated within and across subjects by summing all values for each MeasureReport.
* point-in-time<br/>
  Point in time measurements (e.g., bed occupancy, ventilators in use) represent the current state at a point in time. Group the MeasureReport resources by MeasureReport.subject, and aggregate within each group by taking the most receent point-in-time value.  Then aggregate across groups by summing the most recent values.
* cumulative<br/>
  Cumulative measures are a combination of count and point-in-time measurements. These represent a count of the current quantity (e.g., tests performed) in the numerator over the total performed over "all time" (e.g., cumulative total tests performed) in the denominator. The numerator is aggregated as for a count.  The denominator is aggregated as for point-in-time.

Across subjects (locations or facilities), counts are always summed. This assumes that subjects are non-overlapping (one is not trying to aggregate county data with the data for an entire state that contains the county).

### Coding Geographic Locations
See [Recommended Coding Systems and Value Sets for Location.identifer](supporting_vocabulary.html#coding-location) in Supporting Vocabulary for recommendations on how to identify geographic locations.


---

// File: input/pagecontent/measure_automation.md

Several studies have shown that automation and standardization for electronic reporting improves
data quality, timeliness, and the quantity of available data in public health reporting [^1][^2].
Developers of a system focusing on reporting for pandemic management in British Columbia note the challenges
of one-off reporting solutions, including operational disruptions to address changing needs[^3].

Among institutions, barriers to reporting include having available systems to report to,
and challenges in interfacing to facility Health IT infrastructure and extracting data from EHR systems[^4].

Thus, measures **should** be automatable where feasible, and integrate with existing Health IT system capabilities.
Automation of measurement is possible when:
1. There is a common information model:
   1. A commonly understood information model and terminology that enables data collection requirements to be
      specified consistently across disparate systems, or <br/>
   2. A general information model which can be easily adapted via local translations.<br/>
2. There are common workflows that will not significantly impact the interpretation of data.  For example, the workflow
for reporting that a patient is on a ventilator could rely on orders for ventilation, or on flowsheet observations
related to ventilator reported measurements.

3. There are mechanisms to query for information from systems.

### Common Information Model
This IG requires adoption of a national model or implementation guide to ensure that there is a common model for a region.
An incomplete list of national models is provided below:

* [Australian Base](http://hl7.org.au/fhir/aubase1.1/profiles.html)
* [Belgium Core](https://ehealthplatformstandards.github.io/artifacts.html#core-profiles)
* [Canadian Core](https://build.fhir.org/ig/scratch-fhir-profiles/CA-Core/artifacts.html)
* [Denmark Core](http://build.fhir.org/ig/hl7dk/dk-core-r4/artifacts.html)
* [India National Digital Health Mission](https://simplifier.net/NDHM/~resources?fhirVersion=R4&sortBy=DisplayName)
* [Swiss Core](http://build.fhir.org/ig/hl7ch/ch-core/artifacts.html)
* [UK Core](https://simplifier.net/guide/UKCoreDevelopment/Profiles)
* [US Core](https://www.hl7.org/fhir/us/core/#us-core-profiles)

Use of these models ensures consistent use of terminology and approach for recording data within a country that
enables broad use of the same Measure across the states, provinces, territories, or other regional divisions.

#### Localizing Value Sets for Implementation
The mechanisms chosen for automation in this guide use value sets for critical vocabulary used to identify relevant
resources for computing measures.  This use of value sets enables an implementation to replace a value set defined
based on the national implementation model for a region with translations to local codes to simplify localization.

The value sets used to automate the computation of a measure must be available to systems that are computing the measure.
These **shall** be recorded in [Library.relatedArtifact](https://www.hl7.org/fhir/library-definitions.html#Library.relatedArtifact)
in at least one of the [library](https://www.hl7.org/fhir/measure-definitions.html#Measure.library)
components referenced by the Measure.

### Data Access for Computation
Data access is encouraged through one of three mechanisms, all of which rely on core [FHIR search](https://www.hl7.org/fhir/search.html) capabilities.
These mechanisms are described in order from lowest to highest implementation complexity.
1. [FHIR Search](http://hl7.org/fhir/R4/search.html) is the basic capability supporting automation. Applications can support counting by using FHIR queries to select appropriate data elements for evaluation, and then compute measures based on the responses.  This is the most limited and "chatty" of mechanisms supporting integration, as many servers to not provide search capabilities supporting query across resource boundaries using different kinds of joins (e.g., chaining and _has search capabilities). Combining FHIR queries with other FHIR capabilities such as [Bulk Data Access](https://hl7.org/fhir/uv/bulkdata/) or [R5 Subscriptions](https://build.fhir.org/subscription.html) can make this a more efficient process, but integrating with these specifications is beyond the scope of this implementation guide.

2. [FHIRPath](http://hl7.org/fhirpath) is a standalone specification that works with hierarchical models in structured representations (e.g., JSON) originally designed for use with FHIR.  It is similar in form and capability to [XPath](https://www.w3.org/TR/xpath-31/), but has application to more general models than those represented by an XML document. When [FHIRPath is used within a FHIR Server](https://www.hl7.org/fhir/fhirpath.html) context, the language includes capabilities which support automation of queries, and resolution of resources matching the specified path.

3. [Clinical Quality Language](https://cql.hl7.org/) is an language designed to automate the computation of measures from FHIR and other data models. It enables localization of models to support variations in organizational workflows and data models.  Several open source implementations of CQL interpreters are available, but this technology has not yet reached the maturity of other sorts of systems, and it is not always widely available for users of systems supporting FHIR.

While measures conforming to this guide may use any of the above in expressions, FHIRPath is the preferred format because open source
implementations of FHIRPath are [generally available](https://confluence.hl7.org/display/FHIR/Open+Source+Implementations) for multiple
platforms including Java, JavaScript, .Net, and it supports most of the necessary functions to support comparisons for measures, including
measures with complex date relationships (e.g., Patients acquiring COVID-19 14 days after admission).

A measure **shall** use the same language for all population criteria in the measure.
A measure **should** use the same language for all stratifiers in the measure.

#### Measure Definition Criteria
A Measure is defined by the computable criteria contained in definitions for the Measure
[population](https://www.hl7.org/fhir/measure-definitions.html#Measure.group.population.criteria),
[stratifier](https://www.hl7.org/fhir/measure-definitions.html#Measure.group.stratifier.criteria) and other criteria components within the measure.
These criteria elements are defined using the [Expression](https://www.hl7.org/fhir/metadatatypes.html#Expression) datatype.  This datatype
requires the language used for the criteria to be defined using one of the following values (corresponding to mechanisms listed in the
list above):

1. application/x-fhir-query<br/>
   Expressions defined using FHIR Search are defined by the URLs allowed by FHIR [Search](https://www.hl7.org/fhir/search.html). The URLs provided
   in the [Expression.expression](https://www.hl7.org/fhir/metadatatypes-definitions.html#Expression.expression) field **shall** be provided as
   relative to the _base_ address of the server that would be queried, and **shall** be expressed in URL syntax according to
   [RFC 3986](https://tools.ietf.org/html/rfc3986) with appropriate %-encoding of the URL components.<br/>
   Conforming systems may, at their own discretion apply [Postel's law](https://en.wikipedia.org/wiki/Robustness_principle) in regard
   to the formatting of URLs. Such expressions **should** use search capabilities defined by national models. Extended search parameters
   are permitted, but these must be defined in a [SearchParameter](https://www.hl7.org/fhir/SearchParameter) available in one of the
   [libraries](https://www.hl7.org/fhir/measure-definitions.html#Measure.library) referenced by the measure.

2. text/fhirpath<br/>
   Expressions defined in FHIRPath **shall** conform to [FHIRPath](http://hl7.org/fhirpath) and are permitted to use the
   [FHIRPath functions and syntax elements](https://www.hl7.org/fhir/fhirpath.html) defined specifically for FHIR.

3. text/cql<br/>
   Expressions defines in CQL **shall** conform to the [Clinical Quality Language](https://cql.hl7.org/), and are permitted to
   use CQL modules referenced by one of the [libraries](https://www.hl7.org/fhir/measure-definitions.html#Measure.library)
   referenced by the measure.

#### Implementation and Conformance
The computable criteria found definitions for the Measure in
[population](https://www.hl7.org/fhir/measure-definitions.html#Measure.group.population.criteria),
[stratifier](https://www.hl7.org/fhir/measure-definitions.html#Measure.group.stratifier.criteria) and other criteria
components within the measure are deemed to be the "normative" definition of the measure.  However, measure developers may wish to provide
alternative implementations to support application environments that cannot support FHIRPath, or which have access to a high quality CQL
engine. These definitions can be supplied using the [Measure Alternate Criteria](StructureDefinition-MeasureAlternateCriteria.html) extension. This extension allows alternate criteria to be supplied which can support evaluation on systems not having support for the preferred (and normative) specification for the measure.

### Other Measure Definition Content
A computable public health measure may reference [ValueSet](https://www.hl7.org/fhir/ValueSet), [ConceptMap](https://www.hl7.org/fhir/), [CQL definitions](https://cql.hl7.org/), [SearchParameter](https://www.hl7.org/fhir/SearchParameter) and
other FHIR conformance resources to support automation. The [PublicHealthMeasureLibrary](StructureDefinition-PublicHealthMeasureLibrary.html) defines the constraints relevant to referencing the FHIR resources needed to automate measure computation.

### Automated Measure Computation

The process for measure computation relies on several preconditions:

1. The measure establishes the initial context for evaluation by defining libraries, value sets, code systems or other resources necessary for automating the computation. These can be found in the Library resources defined by the measure.
2. A measure is broken up into groups, populations and strata which facilitate evaluation.
3. A group evaluates a measurement associated with a specific kind of resource or event, e.g., a patient, an admission or patient encounter, a lab result, et cetera. This is defined in the groups of the measure as described in the [Measure Group Attributes](StructureDefinition-MeasureGroupAttributes.html) extension.
4. Populations are evaluated based on queries of resources associated with the group, and may depend on other resources defined within the context of the measure.  Populations may be defined by refining other populations within the group or measure, but at least one population (normally the initial population) does not have any unresolved context references.  The result of an evaluation is either a collection, in which case the population count is computed based on the number of elements in the collection, OR it is a singular numeric result or quantity, in which case the count is the numeric value.
5. Once a population has been evaluated, it establishes a element within the measure context that uses a computable name established by the criteria.  This element may enable the evaluation of other populations with the measure.  This element contains the collection or
   singular numeric result or quantity returned by the evaluation process.
6. Having evaluated a population, the strata within the population may be computable, but could require evaluation of other populations.
   Evaluation of strata follow a similar pattern to evaluation of populations.

The general algorithm is:

Given a Measure, find a population or strata within a group of the measure that does not reference an unresolved contextual element. Evaluate that population or strata and update the context with the evaluated result. If the population has strata without an unresolved contextual reference, evaluate its strata.

If there are no more unevaluated populations or strata, then evaluation is complete. There should not be a population or strata that cannot be resolved because of a missing dependency.  If an implementation detects a case where a population or stratum cannot be evaluated, it should report an evaluation error.  It may populate the unpopulated components of the measure (e.g., count or score) using the [data-absent-reason](http://hl7.org/fhir/StructureDefinition/data-absent-reason) extension, indicating that the value is unavailable due to an [error](http://hl7.org/fhir/R4/codesystem-data-absent-reason.html#data-absent-reason-error) in order to support reporting of partial results while the error condition is being corrected.

#### Resolving Parameters and Computed Content
Named parameters are essential to support automated measure evaluation. They are used to constrain queries using FHIR Search, FHIRPath
or CQL in order to limit the data retrieved to that which is relevant for measure computation.  The names of parameters used in Measure resources
conforming to this guide **shall** start with an upper case letter, and may contain lowercase letters and numbers, and may contain a period to
match the regular expression [A-Z][A-Za-z0-9.]+.  They **should** be in _PascalCase_.

FHIRPath and CQL provide mechanisms to provide named parameters (e.g., reporting period) and collections of FHIR resources during their evaluation.

* FHIR Search<br/>
  To support named parameters in FHIR Queries, this guide uses the notation @_Name_ to indicate a named parameter in a FHIR Query.
  NOTE: @ is general only found in e-mail addresses, which are not relevant for queries used in this guide.

* FHIRPath<br/>
  Parameters in FHIRPath are supported via FHIRPath [Environment Variables](https://www.hl7.org/fhir/fhirpath.html#vars).
  This will be shown as %_Name_ in this guide.

* CQL<br/>
  CQL provides for [named parameters](https://cql.hl7.org/02-authorsguide.html#parameters).  This guide uses the notation
  _Name_ to indicate a named parameter in a CQL Expression.

#### Parameter Types
Parameters have a data type, either a FHIR Primitive type such as date, dateTime, or string, or complex types such as Coding, Quantity, Period or
Resource and any of its subtypes (e.g., Patient, Encounter).  The fields of the parameter are accessible via dot notation.

For example:
```
Encounters?status=in-progress,finished&date=gt@ReportingPeriod.start&date=lt@ReportingPeriod.end
```
Will produce a query that selects those encounters which are either active or which finished during the reporting period.

#### Parameters Defined in this Guide
The following parameters are predefined by this guide:

##### Server Details
Base
: The Base parameter is of the FHIR string data type and contains the base address of the FHIR Server associated with a Measure Computer. The Measure
Computer must supply this information. Note that this base endpoint **shall not** end with a "/". This may be used to specify FHIR queries that
should be resolved by the FHIRPath engine within the expression.  This **shall** be the same value found in the
[implementation.url](https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.implementation.url) field of the server's
CapabilityStatement.

Metadata
: The Metadata parameter is of the FHIR CapabilityStatement resource type, and contains the Capability statement that would be resolved
by the CapabilityStatement resource. The Measure Computer must supply this information. This **shall** be the equivalent of what is returned
by (%Base + "/metadata").[resolve](https://www.hl7.org/fhir/fhirpath.html#functions)().

##### Measure Details
Measure
: The Measure parameter is of the FHIR Measure resource type, and represents the measure being computed.

MeasureReport
: The MeasureReport parameter is of the FHIR MeasureReport resource type, and represents the current
MeasureReport that is being computed.

PriorReport
: The PriorReport parameter is of the FHIR MeasureReport resource type, and represents the details of the
most recent version (e.g., including any corrections) of the MeasureReport that was computed for the prior
reporting period. This simplifies computations for cumulative results, and enables reuse of infrequently
changing values (e.g., total ventilators).

Reporter
: The Reporter parameter is of the FHIR Organization resource type and represents the reporter of
the MeasureReport.  A reference to the reporter can be found in %MeasureReport.reporter.

Subject
: The Subject parameter is of the FHIR Location resource type and represents the subject of the
MeasureReport.  A reference to this subject can be found in %MeasureReport.subject.

ValueSet
: The ValueSet parameter is a reference (preferably canonical) to a ValueSet resource that
can be used to select matching resources for populations within a MeasureGroup.  It is populated from
the Measure.group.extension[MeasureGroupAttributes].extension[SubjectValueSet].valueReference parameter
supplied in the measure when evaluating a population.

##### Date Parameters
Date parameters are essential to support appropriate filters for queries.  This enables essential dates such as the date of evaluation and the
reporting period to be communicated correctly when evaluating the measure.

ReportingPeriod
: The ReportingPeriod parameter is of the FHIR Period data type and contains the starting (inclusive) and ending time (exclusive) of
the reporting period.  It is determined based on the current reporting period as defined in the [ReportingPeriod](StructureDefinition-ReportingPeriod.html)
extension appearing within the Measure. If the reporting period is daily, midnight to midnight, and report is being generated "today", then the reporting
period for it is "yesterday".

PriorReportingPeriod
: The PriorReportingPeriod parameter is of the FHIR Period data type, and contains the starting (inclusive) and ending time (exclusive) of
the immediately prior reporting period. It is determined based on the current reporting period as defined in the
[ReportingPeriod](StructureDefinition-ReportingPeriod.html) extension appearing within the Measure.  If the reporting period is daily, midnight to midnight, and a report
is being generated "today", then the prior reporting period for it is "the day before yesterday". The Prior Reporting period is helpful for obtaining
data from prior measures, for example, to support reporting of cumulative totals.

Today
: This parameter is the "as of" date for the report and is of the FHIR Date data type.  This is functionally equivalent to the FHIRPath
[today()](http://hl7.org/fhirpath/#current-date-and-time-functions) or CQL
[Today()](https://cql.hl7.org/02-authorsguide.html#datetime-operators) functions, save that it is the "date of reporting" rather
than the current time stamp.  It should be used for calculating age of events that are based on the date of reporting.
Generally, this is the day after the reporting period ends for daily measures.

Tomorrow
: This parameter is the day after the "as of date" and is of the FHIR Date data type. It works like the FHIRPath today() function,
but returns the day after today() with respect to the date associated with the report.

Yesterday
: This parameter is the day before the "as of date" and is of the FHIR Date data type. It works like the FHIRPath today() function,
but returns the day before today() with respect to the date associated with the report.

##### Library Resources
Attachments in Library resources referenced by a Measure (through Measure.library) are also available as parameters using the name given
to the Attachment in the Attachment.id element (see the notes on [Internal Id Scope](https://www.hl7.org/fhir/element.html#id) for Elements in FHIR).

NOTE: The use of Attachment.id to provide a computable name for the component referenced by the measure addresses the issue that while
ValueSet and other definition resources include a "computable name" intended to support automation. This name is not appropriate for
several reasons:

1. Value Set developers and publishers do not follow the recommendations for computable names, which results in value sets (and other definition resources)
having names that include spaces and other special characters (e.g.
"[COVID_19 (Organism or Substance in Lab Results)](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1146.1203/expansion/Latest)").
2. Measure developers may rely on value sets from multiple sources, which can result in value set names which conflict. However
measure developers can control the names used in the Library resources they use to support a measure.

This guide chose to use a name specified in the id element of the resource because these names

For a give Measure resource, if Measure.library[0].content references a ValueSet resource, Measure.library[0].content.id is
"ReferencedValueSet", then @_ReferencedValueSet_ is a parameter that can be used in a FHIR Query string.  It is available in
a FHIRPath expression as %_ReferencedValueSet_, and in CQL simply as _ReferencedValueSet_.  These parameters are of the type of
the referenced resource.

If "VentPatients" is the id given for an attachment referencing the [Observations for Patients on a Ventilator](ValueSet-PatientsOnVentilator.html)
value set, then @_VentPatients_ may be used in a FHIR Query as follows:

```
Observation?date=gt@ReportingPeriod.start&date=lt@ReportingPeriod.end&code:in=@VentPatients.url&status:not=cancelled&status:not=entered-in-error
```

This query will select all observations whose code in the Value Set referenced by the Attachment whose id is "VentPatients".

The use of value sets in writing measures for automation is critical to avoid mistakes in entering long lists of codes, but pragmatically,
many FHIR implementations will not support the :in or :not-in modifiers.  A MeasureComputer implementing queries **shall** translate these into the
appropriate notation using the FHIR notation for [combining query parameters](https://www.hl7.org/fhir/search.html#combining) for servers which
do not understand :in and :not-in.

Servers can declare support for :in and :not-in by fully defining the search capabilities in referenced
[SearchParameter](https://www.hl7.org/fhir/searchparameter.html) resources, but in practice, few do.  A MeasureComputer should either verify that
:in and :not-in modifiers are supported (e.g., by executing test queries), or simply translate for all cases.

##### Population Parameters
Populations are often computed iteratively.  For example, it is common to first identify the initial population via a search, and then
the compute the denominator by filtering results from the initial population matching a given criteria, and finally, the numerator by
filtering results from the denominator.

These components can be used in the criteria of other components using FHIRPath or CQL (but not when using FHIR Queries).  To assign a name to the
one of these components, assign an name value to expression defining the population.

#### Illustrating the Use of Parameters
The example below illustrates the use of three different kinds parameters in evaluation:

```
<Measure>
   ...
   <group>
     ...
     <population>
        ...
        <criteria>
           <name value='InitialPop'/>
           <expression value='Encounter.where(...)'/>
        </criteria>
     </population>
     <population>
        ...
        <criteria>
           <name value='VentilatedPatients'/>
           <expression value='Observation.where(
                encounter = %Foo.id and
                code.memberOf(%VentPatients.url)).patient and
                effectiveDateTime >= %ReportingPeriod.start and effectiveDateTime < %ReportingPeriod.end'/>
        </criteria>
     </population>

     ...
   </group>
</Measure>
```

The criteria for the population of the first group of a Measure has the name value of "InitialPop" in the example above.  References to
%_InitialPop_ in other FHIRPath expressions will resolve to the value returned by execution of criteria.expression where
criteria.name = "InitialPop".  So, the example above:

1. Selects a particular set of encounters for the initial population, and defines the variable %_InitialPop_ to reference it by.
2. It defines a second population in terms of the initial population, selecting the
   distinct Patients that have observations that reference encounters found in %_InitialPop_ identified in the previous population,
3. including only those Observations having a code in the ValueSet represented by %VentPatients
4. and which occur during the predefined %_ReportingPeriod_ parameter.
5. Finally, these patients will now be addressable as %_VentilatedPatients_ in other populations in this measure.

For CQL, this value will be a named parameter in the execution of other CQL Expressions.

### Invariants
1. Within a measure, values in population.criteria.expression which are expressed in FHIRPath **may** use:
   1. Variables predefined by [FHIRPath](http://hl7.org/fhirpath/N1/#environment-variables), e.g., %ucum, %context
   2. Variables predefined by [FHIR in its use of FHIRPath](https://www.hl7.org/fhir/fhirpath.html#vars), e.g., %sct, %loinc, %"vs-[name]", %"ext-[name]", %resource
   3. Variables explicitely defined by [this guide](#parameters-defined-in-this-guide), e.g., %_ReportingPeriod_, %_Today_, %_Tomorrow_, %_Yesterday_
   4. Variables which have been named in any [Libary.content](#library-resources) item referenced by the Measure, e.g., %_VentPatients_
   5. Variables which have been identified in other [population.criteria.name](#population-parameters) elements found in the Measure. e.g., %_InitialPop_, %_VentilatedPatients_
2. Any other parmeters found **should** be reported as a warning, as implementation may agree on additional parameters.
3. No two parameters **shall** be provided in the context of a single measure with the same name having different values.
   NOTE: The same resource may be referenced by two different libraries. So long as the URL and content of the resource is the same, the
   name given to it in the referenced measure libraries **may** be identical.
   1. More specifically, a Library **shall not** name a resource with any of the names defined by items 1-3 in rule 1 above,
   2. A Measure **shall not** name a criteria with any of the names defined from items 1-4.
   3. Parameter Names **shall not** be duplicated within a measure or library.


### Implementation Strategies
The MeasureComputer actor is free to use whichever search strategies best fit. Implementers should remember the constraints on Measure
Populations to ensure correct evaluation (e.g., an item in the denominator must be present in the initial population).

While expressions are written in a way that supports use of FHIR Search, a MeasureComputer is NOT required to use FHIR Search capabilities depending
upon how it is implemented.  It may perform queries using [FHIR Bulk Data](https://hl7.org/fhir/uv/bulkdata/), FHIR [Batch](https://www.hl7.org/fhir/http.html#transaction)
mode queries, internal [data access mechanisms](https://hapifhir.io/hapi-fhir/apidocs/hapi-fhir-jpaserver-api/ca/uhn/fhir/jpa/api/dao/IFhirResourceDao.html) such
as those found FHIR Server implementations, or through integration with
[CQL](https://cql.hl7.org/10-c-referenceimplementations.html#appendix-c-reference-implementations) or FHIRPath engines
supporting internal server access.

Measure Computer implementations should consider strategies for data access that avoid overwhelming a connected FHIR Server with repeated requests for
large amounts of data. Depending on the implementation, it may be more efficient to query using easy to evaluate criteria that returns
more than what the measure is looking for, and then filter the results after they have been returned to the Measure Computer.

Measure developers should consider writing evaluation criteria in ways that simplify implementation. For example, when using FHIRPath,
the first part of the expression can be of the form:
```
     (%Base + '/Resource?_include=Resource:*'
            + '&status=allowed-status-values'
            + '&date=ge' + %ReportingPeriod.start
            + '&date=lt' + %ReportingPeriod.end
            + 'other search criteria'

     ).resolve().select(resource)
```
This enables the Measure Computer to start evaluations with data automatically extracted via a FHIR Search.  The _Resource_
should name the type of resource to query for, and _search criteria_ should be a widely supported search that limits the
resources being returned for subsequent filtering by the remainder of thee FHIRPath expression. Consider the use of date
and/or _lastUpdated parameters to restrict the data to the time period relevant to the search.

The second part of the expression should be a [where() or select()](http://hl7.org/fhirpath/#filtering-and-projection)
clause which filters out or projects to other relevant content. This where clause can make use of the FHIRPath
[iif()] function to support short-circuit evaluation of logical expressions.

Additional retrievals can appear in this clause, but should be done after other filtering that can be performed using
available data through FHIRPath. This helps to eliminate excessive queries to the server.

**Footnotes**

[^1]: Effler P, Ching-Lee M, Bogard A, Ieong MC, Nekomoto T, Jernigan D. Statewide system of electronic notifiable disease reporting from clinical laboratories: comparing automated reporting with conventional methods. JAMA. 1999 Nov 17;282(19):1845-50. doi: 10.1001/jama.282.19.1845. Erratum in: JAMA 2000 Jun 14;283(22):2937. PMID: 10573276. Available on the web at https://pubmed.ncbi.nlm.nih.gov/10573276/

[^2]: Overhage JM, Grannis S, McDonald CJ. A comparison of the completeness and timeliness of automated electronic laboratory reporting and spontaneous reporting of notifiable conditions. Am J Public Health. 2008 Feb;98(2):344-50. doi: 10.2105/AJPH.2006.092700. Epub 2008 Jan 2. PMID: 18172157; PMCID: PMC2376898. Available on the web at https://pubmed.ncbi.nlm.nih.gov/18172157/

[^3]: Rizi SA, Roudsari A. Development of a public health reporting data warehouse: lessons learned. Stud Health Technol Inform. 2013;192:861-5. PMID: 23920680. Available on the web at http://ebooks.iospress.nl/volumearticle/34122

[^4]: Holmgren AJ, Apathy NC, Adler-Milstein J. Barriers to Hospital Electronic Public Health Reporting and Implications for the COVID-19 Pandemic. J Am Med Inform Assoc. 2020 May 22:ocaa112. doi: 10.1093/jamia/ocaa112. Epub ahead of print. PMID: 32442266. Available on the web at https://pubmed.ncbi.nlm.nih.gov/32442266/


---

// File: input/pagecontent/measure_creation.md

This section of the implementation guide walks through an example for automating computation of a measure.

### Conventions in this Section
The definitions for these proposed groupings appear below.  For simplicity and brevity, the definitions below are provided in a
slightly modified version of the [FHIR Shorthand](http://hl7.org/fhir/uv/shorthand/2020May/HL7/fhir-shorthand/) notation.  The modification
introduces "with _fieldparts_ do" keyword to shorten repetitions.

For example:
```
* with name do
**   given[] = "Robert"
**   given[] = "Rob"
**   last = "Williams"
```
Would be the same as
```
*   name.given[0] = "Robert"
*   name.given[1] = "Rob"
*   name.last = "Williams"
```

FHIRPath Expressions used for this measure will use the functions defined by [FluentQuery](fluent_query.html) defined
in Appendix B of this guide to make the expressions more readable.

NOTE: The [completed measure](Measure-ComputableCDCPatientImpactAndHospitalCapacity.html) may vary slightly from the
text in this section.

### Patient Impact and Hospital Capacity Module Definition
Like the phrase book, this walkthrough is based on the measure derived from the CDC Patient Impact and Hospital Capacity module shown below.  This measure example is provided for the purposes of discussion, it is neither an official CDC publication nor a normative artifact in this guide.

![CDC Patient Impact and Hospital Capacity module](57.130-covid19-pimhc-blank-p.png)<br clear="all">

### Measure Header
The top part of the measure contains the metadata describing the measure itself, giving it a name, an identifier, author and publisher, et cetera.  These components are described in more detail below.

#### Author Information
The measure begins by describing the author and providing contact information using an e-mail address. This enables those with access to the measure content to easily contact the organization which authored it.
```
 * author.name = "Centers for Disease Control/National Healthcare Safety Network (CDC/NHSN)"
 * author.telecom.system = #email
 * author.telecom.value = "mailto:nhsn@cdc.gov"
```

#### Suggested Reporting Frequency
This measure should be reported daily.  This makes uses of the [ReportingPeriod](StructureDefinition-ReportingPeriod.html) extension and the [MeasureReportingTiming](StructureDefinition-MeasureReportingTiming.html) profile to identify how often to report the measure.

```
* extension[measureTiming].valueTiming.repeat.frequency = 1
* extension[measureTiming].valueTiming.repeat.period = 1
* extension[measureTiming].valueTiming.repeat.periodUnit =  http://unitsofmeasure.org#d "day"
```

#### Measure Name and Title
Each measure has both a human readable title, and computation oriented name, and a URL which uniquely identifies it.

```
 * name = "ComputableCDCPatientImpactAndHospitalCapacity"
 * url = "http://hl7.org/fhir/uv/saner/Measure/ComputableCDCPatientImpactAndHospitalCapacity"
 * title = "Patient Impact and Hospital Capacity"
```

#### Related Documentation
A measure is expected to be documented, and that documentation should contain the details necessary for implement the measure itself.
```
 * relatedArtifact[0].type = http://hl7.org/fhir/ValueSet/library-type#documentation
 * relatedArtifact[0].url = "https://web.archive.org/web/20200501215043/https://www.cdc.gov/nhsn/acute-care-hospital/covid19/"
 * relatedArtifact[0].label = "NHSN COVID-19 Reporting"  // Descriptive Text to display in a Link
 * relatedArtifact[0].display = "CDC/NHSN COVID-19 Patient Impact & Hospital Capacity Module Home Page" // Title of the link target page
```
Multiple relatedArtifact elements can be provided, the text above shows only the first of four relatedArtifact entries included in the actual example measure.

#### Measure Library
Every measure must have at least one Library resource conforming to the
[PublicHealthMeasureLibrary](StructureDefinition-PublicHealthMeasureLibrary.html) profile that provides the essential value sets and other resources that may be used to evaluate the measure. Details about the measure library for this sample measure can be found in the [Sample Measure Library](measure_library.html) page.

```
 * library = "http://hl7.org/fhir/uv/saner/Library/ComputableNHSNMeasureLibrary"
```

### Patient Impact Data Elements
This measure first addresses the Impact of COVID-19 on hospital patients, stratifying data by hospital location (inpatient vs. ED/Overflow), ventilation status, and patient death on the date of reporting.

There are multiple sets of patients to report upon for this section.

The initial patient population is Patients in the Hospital with Confirmed or Suspected COVID-19.
  1. Live Patients in any location.
     1. The subset of these in an inpatient bed.
        1. The subset of these who are on a ventilator.
        2. The subset of these who acquired COVID-19 14 days or more after admission.
     2. The subset of these in an ED or overflow bed with an admission order (i.e., those who are intended to be an inpatient).
        1. The subset of these who are on a ventilator.
  2. Dead Patients

Patients on a ventilator are of interest, patients not on a ventilator are a stratum that need not be counted because that number can be determined mathematically from the data already provided.

Each of the values above is essentially counting an event, an admission to a location, or such admission with the use of ventilator equipment, or a death, but are not reporting cumulative totals. These would then be reported as different cohorts with potentially overlapping values.

Patients who acquired COVID-19 while in the hospital are a separate strata from patients on a ventilator.

The Venn Diagram below illustrates the different subsets of patients in this measure.
![Venn Diagram](venn.png)<br clear="all">

To simplify this section, this measure should be divided into at least three separate groups. Each group and stratum is preceded by the name used to identify it.

1. [Encounters](measure_group_covid19_patients.html): Patients in the hospital during the reporting period who have suspected or confirmed COVID-19.<br/>
   This last group should be stratified by the [cartesian product](https://en.wikipedia.org/wiki/Cartesian_product) of location and ventilator status.
   1. InpNotVentilated: Inpatient Setting and Non-Ventilated
   2. InpVentilated: Inpatient Setting and Ventilated
   3. OFNotVentilated: ED/Overflow Setting and Non-Ventilated
   4. OFVentilated: ED/Overflow Setting and Ventilated
2. [AcquiredCovid](measure_group_hospital_acquired_covid19_patients.html): Patients in the hospital during the reporting period who have acquired suspected or confirmed COVID-19 14 days or more after admission.
3. [CovidDeaths](measure_group_covid19_deaths.html): Deaths in the hospital during the reporting period

### Hospital Capacity
The next section of this measure addresses hospital capacity with respect to all beds, inpatient beds, ICU beds, and ventilators. These are all clearly [Capacity and Utilization](situational_awareness_measures.html#capacity-and-utilization) measures. It can be clearly divided into two groups, with stratification of the Bed group in across three categories to support all reporting needs.

This portion of the measure makes two assumptions: the total number of licensed and staffed beds and ventilators changes infrequently, and that measure data is reviewed and adjusted (e.g., to account for institutional changes in staffing levels or bed counts) before being sent forward, so that prior measure reports and transmission review processes can be used to manage counts of total beds or ventilators).

1. [Ventilators](measure_group_ventilators.html): Utilization of ventilators.
2. [Beds](measure_group_beds.html): Utilization of Beds in the different locations.

   NOTE: The requested data for Beds is at different levels than the proposed measure. However, the data request is accessible from the proposed location categories below as follows:

   * All Beds -- The sum of all three strata below: NumICUBeds, NumImpBeds and NumAmbBeds
   * All Inpatient Beds -- The sum of the first two strata: NumICUBeds and NumImpBeds
   * All ICU Beds -- The first strata: NumICUBeds

   1. NumICUBeds: ICU Beds -- Utilization of staffed inpatient intensive care unit (ICU) beds.
   2. NumImpBeds: Inpatient Non-ICU Beds -- Utilization of staffed inpatient non-ICU beds.
   3. NumAmbBeds: Outpatient Beds -- Utilization of non-inpatient (e.g., ED, Ambulatory, Overflow) beds.

These are provided in a different order in the measure because the group for Beds builds on a similar framework as is used for Ventilators, but includes complexity around stratification.

NOTE: The Beds group uses strata to reduce repetition in this exposition. However, this would prevent further stratification by social determinants such as age, race, ethnicity and gender.  Any stratification layer can be "bumped" up a level into a numerator population by the addition of a final filter by the criteria which distinguishes it.

```
    .where(fieldToStratifyBy = 'ValueToMatch')
```

---

// File: input/pagecontent/measure_group_beds.md

#### Hospital Beds
The "All Hospital Beds" measurement does not include both "available" and "in use" beds, and so would not normally be considered to be a
capacity measurement, however, it is included with other measures that clearly provide an approximation of the in use and available beds.
The Bed Venn Diagram below illustrates stratification of beds such that all desirable capacities can be determined from the measure.

![Bed Venn Diagram](venn2.png)

### Describing the Group

The first step in describing the group is to identify it with a code.  Measure developers will generally
define the codes used for the measure groups they create.

```
 * with group[4].code
 ** coding = MeasureGroupSystem#Beds
 ** coding.display = "Beds"
 ** text = "Bed Reporting"
```
#### <a name='capacity-example'/>Measure Group Attributes
The measure group for Bed Availability has the same attributes as for Ventilator Availability, with the
exception of the subject, which is Beds rather than ventilators.

```
 * with group[4].extension[groupAtts]
 ** extension[scoring].valueCodeableConcept = http://hl7.org/fhir/uv/saner/CodeSystem/PublicHealthMeasureScoring#capacity
 ** extension[type].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-type#structure
 ** extension[improvementNotation].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#decrease
 ** extension[subject].valueCodeableConcept.coding[ResourceType] = http://hl7.org/fhir/resource-types#Device
 ** extension[subject].valueCodeableConcept.coding[Snomed] = http://snomed.info/sct#91537007 "Hospital Bed"
 ** extension[subject].valueCodeableConcept.text = "Bed capacity"
 ** extension[rateAggregation].valueString = "point-in-time"
```
### Define each Population
The next step for the bed capacity measure is to define the denominator, numerator and numerator-complement populations:

```
 * with group[4].population[0]
 ** code.coding[0] = http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numTotBeds "All Hospital Beds"
 ** code.coding[1] = http://terminology.hl7.org/CodeSystem/measure-population#denominator
 ** code.text = "Total number of beds"
 ** description = """
 Total number of all Inpatient and outpatient beds, including all staffed, ICU,
 licensed, and overflow (surge) beds used for inpatients or outpatients"""

 * with group[4].population[1]
 ** code.coding[0] = http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numTotBedsOcc "Hospital Beds Occupied"
 ** code.coding[1] = http://terminology.hl7.org/CodeSystem/measure-population#numerator
 ** code.text = "Total number of beds in use"
 ** description = "Total number of all Inpatient and outpatient beds that are occupied"

 * with group[4].population[2]
 ** code.coding[0] = http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numTotBedsAvail "Hospital Beds Available"
 ** code.coding[1] = http://hl7.org/fhir/uv/saner/CodeSystem/MeasurePopulationSystem#numerator-complement
 ** code.text = "Total number of hospital beds available"
 ** description = "Total number of all hospital inpatient and outpatient beds that are available"
```

```
 * with group[4].population[0]
 * criteria.name = "NumTotBeds"
 * criteria.description = """Computes the total number of beds from the previously reported MeasureReport"""
 * criteria.language = #text/fhirpath
 * criteria.expression = "%PriorReport.group[3].population[0].count"
```
#### Describe the Evaluation Criteria
Name the criteria and give a description for what qualifies to to be included.

```
 * criteria.name = "NumTotBedsOcc"
 * criteria.description = """
 Identifies the number of beds in use by counting the most recent location in the
 most recent Encounter for each patient where the encounter
 was in-progress or finished within the period.
   """
 * criteria.language = #text/fhirpath
 * criteria.expression = """
       // Find all active encounters
       findAll('Encounter',
        including('subject','condition','reasonReference'),
        with('status').equalTo('in-progress'),
        with('date').within(%ReportingPeriod)
       ).onServers(%Base)
       // Select the most recent encounter for each location
       // Assumes that encounters are returned in reverse chonological order
       // and that the most recent location is reported first in the list
       // of locations.
       .aggregate(
          iif($total.select(location[0]).location contains $this.location.location.first(),
              {},
              $total | $this
          )
       )
       // NOTE: Aggregate returns a list of both Encounter and Location resources
       // representing beds in use.
       // From Encounter, one can get to both the Patient (via Encounter.subject) and
       // Location resources (via Encounter.location.location).  This enables the result
       // to be stratifed by patient demographics, or location type.
 """
```
```
 * criteria.name = "NumTotBedsAvail"
 * criteria.description = """Computes the number of beds  available by substracting the number of beds in use
 determined by population 1 from the total number of beds given in population 0
 """
 * criteria.language = #text/fhirpath
 * criteria.expression = "%NumTotBeds - %NumTotBedsOcc.count()"
```

Finally, the measure group defines a stratifier to break the measure
down into groups by type of location where the bed is found.
```
 * with group[4].stratifier
 ** code.text = "By Type of Location"
 ** description = "Inpatient Non-ICU, Inpatient ICU, Other"
 ** criteria.description = """
 Determines the location of the encounter based on the membership
 of location.type in the InpatientNonICU and InpatientICU ValueSet resources.
 When location.type is assigned to any other value, it is reported to be Other
 """
 ** criteria.language = #text/fhirpath
 ** criteria.expression = """
    Encounter.location.location.resolve()
    .iif(type.memberOf(%NonICU.memberOf(.url),
        'Inpatient Non-ICU',
        iif (type.memberOf(%ICULocations.url),
             'Inpatient ICU',
             'Other'
        )
    )
"""
```

---

// File: input/pagecontent/measure_group_covid19_deaths.md

Deaths in the hospital during the reporting period is half of an [event growth measure](situational_awareness_measures.html#event-growth),
it does not include the cumulative total number of deaths.  There are several good reasons to use an event growth measure in this case:
   1. Loss of a single report does not damage the cumulative total value.  When the next report is sent, a new cumulative total will also
      be sent, allowing the receiver to adjust for the missing data.
   2. Reporting both the incremental, and cumulative total allows the receiver to detect potential reporting errors over time.
   3. Using the Event Growth measure supports data correction over time. During a public health emergency where there are limited resources,
      activities are triaged to protect life first. Death reporting may be delayed for facilities under extreme stress.
   4. Event growth measures support the [BASE Consistency](https://en.wikipedia.org/wiki/Eventual_consistency) model, which means that prior
      reports don't need to be corrected for the reported data to eventually become consistent.

NOTE: When using an event growth measure, it is important to establish a convention for how to accumulate the total.  By convention,
this is based on the date the sender started reporting data (the simplest to implement), but may be altered to be based on reporting as of
a given date or other criteria (more complicated).


### <a name='event-growth-example'/>Measure Definition for Deaths in the Hospital
The first step in describing the group is to identify it with a code.  Measure developers will generally
define the codes used for the measure groups they create.
```
 * with group[2].code do
 ** coding = MeasureGroupSystem#CovidDeaths
 ** coding.display = "COVID-19 Deaths"
 ** text =  "COVID-19 Patient Death Reporting"
```
#### Measure Group Attributes
Each group must be described by the [Measure Group Attributes](StructureDefinition-MeasureGroupAttributes.html) extension to
further describe the measure group content.

The first step in describing these attributes is to indicate how the measure is scored.  This measure group is scored as an event
growth measure because that reports both current and cumulative incidence.  This supports reporting of the growth rate for hospital
deaths within a facility or region.

```
 * with group[2].extension[groupAtts] do
 ** extension[scoring].valueCodeableConcept = http://hl7.org/fhir/uv/saner/CodeSystem/PublicHealthMeasureScoring#event-growth
```

Next, the measure describes the type of measure (e.g., structure, process or outcome). This measure is an outcome measure,
representing the outcome of death while in the hospital.
```
 ** extension[type].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-type#outcome
```

An indication of how the scoring system works is then provided (e.g., increase, decrease). Lower numbers are "better", with regard
to event growth for deaths in this case.
```
 ** extension[improvementNotation].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#decrease
```

The type of resource associated with this measure expresses what to count for the measure implementer.  For this case, it is a
patients with COVID-19 who have died. This tells "what to count". The ResourceType slice identifies the FHIR Resource
which is likely being counted.  The SNOMED slice can be used to provide a more fine grained code to describe the resource
(e.g. a specific condition, medication, type of encounter, patient, practitioner, et cetera), and might be a code found or used
to find resources based on the code field associated with it. This information is descriptive, rather than semantically exact content.
It is meant to convey information to an implementer, rather than to automated systems.
```
 ** with extension[subject] do
 *** valueCodeableConcept.coding[ResourceType] = http://hl7.org/fhir/resource-types#Patient
 *** valueCodeableConcept.coding[Snomed] = #419620001 "Death"
 *** valueCodeableConcept.coding[Snomed].display = "Death"
 *** valueCodeableConcetp.coding.text = "Patient Deaths"
 *** valueCodeableConcept.text = "Patients with conformed or suspected COVID-19 who have died"
```

Finally, the method for aggregating scores is specified.
Growth rate measures aggregate according to cumulative aggregation rules.
```
 ** extension[rateAggregation].valueString = "cumulative"
```

### Define Each Population

Each population for the measure is described. For this case, there are three populations,
the Initial Population, a Numerator (the new infections), and a Denominator (the cumulative total).

Provide a code describing each population.
```
 * with group[2].population[0].code do
 ** coding = http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numC19Pats
 ** coding.display = "All COVID-19 Confirmed or Suspected Patients"
 ** coding[1] = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
 ** text = "Patients with suspected or confirmed COVID-19 in any location."

 * with group[2].population[1].code do
 ** coding = http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numC19HOPats
 ** coding.display = "Hospital Onset COVID-19 Patients"
 ** coding[1] = http://terminology.hl7.org/CodeSystem/measure-population#numerator
 ** text = "Hospital Onset COVID-19 Patients"

 * with group[2].population[2].code do
 ** coding = http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#cumC19HOPats
 ** coding.display = "Cumulative Hospital Onset COVID-19 Patients"
 ** coding[1] = http://terminology.hl7.org/CodeSystem/measure-population#denominator
 ** text = "Cumulative Hospital Onset COVID-19 Patients"
```

NOTE: The initial population for this measure group is identical to the population used for
the [first measure group](measure_group_covid19_patients.html). This is intentional, as that
population will already have been evaluated and can be further refined to identify patients
who have died.

#### Describe the Evaluation Criteria
Name the criteria and give a description for what qualifies to be included.
NOTE: The description **shall** be given in detail for each population and provide enough information for a competent human reader to correctly implement the computation.
```
 * with group[2].population[0].criteria do
 ** name = "NumC19HospPats"
 // This criteria does not have a name because it duplicates a previously computed criteria
 ** description = """
Identifies patients with suspected or confirmed COVID-19 in any location based
 on the existence of an encounter, observation or condition related to COVID that was
 active in the last 14 days"""

 * with group[2].population[1].criteria do
 ** name = "NumC19Died"
 ** description = """
Filters the initial population by selecting those who have died."""

 * with group[2].population[2].criteria do
 ** name = "CumC19Died"
 ** description = """
Computes the cumulative total from the prior measure report and the number of new deaths in the current reporting period."""
```

#### Provide the Computable Content
The computable content "implements" the automated computation of the measure.

The first population is easily computed as it is the same as %NumC19HospPats which is computed
in the group reporting on [hospital acquired COVID-19](measure_group_hospital_acquired_covid19_patients.html)
of the measure. This also illustrates the value of reporting multiple measures in one measure report, as it
enables reuse of common subexpressions reducing evaluation overhead.

Measure Developers **should** consider the order of presentation of groups within measures.
While this walkthrough follows the original order in which the groups are presented, a different
order would present the groups and populations which need to be computed first to the implementer.
This reduces opportunities for cognitive overload, simplifies implementations and avoid errors.

```
 * with group[2].population[0].criteria do
 ** language = #text/fhirpath
 ** expression = "%NumC19HospPats"
```

The next population identifies patients who have died.
```
 * with group[2].population[1].criteria do
 // This expression will be reused to compute the value for the CumC19HOPats
 // population so it must have a name.
 ** name = "NumC19Died"
 ** language = #text/fhirpath
 ** expression = """
    Encounter.where(
      iif(
        hospitalization.where(
          dispositionCode.memberOf(%PatientDeaths.url)
        ),
        true,
        subject.resolve().where(deceasedBoolean = true | deceasedDateTime.exists())
      )
    )
    // Resolve to patient to simplify stratification
    .select(subject).resolve()
 """
```
Again, note the use of nested iif() calls in the query to ensure short-circuit evaluation.
```
 * with group[2].population[2].criteria do
 ** name = "CumC19Died"
 ** language = #text/fhirpath
 ** expression = "iif(%PriorReport.empty(),0,%PriorReport.group[2].population[2].count) + %NumC29Died)"
```
NOTE: This expression simply returns a numeric value based on the previously reported value plus the number of new infections
detected.


### Stratification
Social determinants of health, such as age, race, ethnicity and gender can have negative impacts on
patient treatment.  This measure group is also stratified by age group, race, ethnicity and gender to illustrate
the use of stratification in a cumulative measure.

It uses exactly the same criteria for stratification as [shown previously](measure_group_hospital_acquired_covid19_patients.html),
for age group, gender, and ethnicity, and therefore are not repeated below.

#### Stratification by Race
As previously noted, stratification by Race is more complicated, because there are multiple possible
combinations supporting reporting of up to 5 different race categories, a value for unknown, a value for
asked but unknown, and the possibility that no value is provided whatsoever.

The selection of appropriate categories for reporting is regionally sensitive, which suggests that
reporting should still be at a higher level of granularity.

The expression below shows an alternate strategy of reporting at nearly the maximum granularity.
It combines unknown, asked but unknown, and no response in one group.  Reporting in this way provides
more granularity than would be commonly used in a dashboard, but a dashboard can always roll up
these values into appropriate groupings.
```
 * with group[2].stratifier[3] do
 ** code.text = "By Race"
 ** description = "Stratifies the population by Race"
 ** criteria.name = "Race"
 ** criteria.language = #text/fhirpath
 ** criteria.expression = """
    Patient
    .extension('http://hl7.org/fhir/us/core/StructureDefinition/us-core-race')
    .extension('ombCategory')
    .select(
      iif(valueCoding.code contains '1992-5', 'A', ' ') +
      iif(valueCoding.code contains '2054-5', 'B', ' ') +
      iif(valueCoding.code contains '2076-8', 'H', ' ') +
      iif(valueCoding.code contains '2028-9', 'S', ' ') +
      iif(valueCoding.code contains '2106-3', 'W', ' ')
    )
    """
```


---

// File: input/pagecontent/measure_group_covid19_patients.md

The first group to address is Suspected or Confirmed COVID-19 Patients Stratified by Location and Ventilator Status.
This measure is a [Queue Length](situational_awareness_measures.html#queue-length) measure. It measures patients in the hospital (in
an inpatient setting or overflow area) awaiting completion of treatment. This is especially evident in the case for patients in an
ED/Overflow area awaiting an inpatient bed, but generally true for all the different strata.

### Describing the Group

The first step in describing the group is to identify it with a code.  Measure developers will generally
define the codes used for the measure groups they create.
```
 * with group[0].code do
 ** coding = MeasureGroupSystem#Encounters
 ** coding.display = "Encounters"
 ** text = "Hospital COVID-19 Patient Encounters Reporting"
```
#### <a name='queue-length-example'/>Measure Group Attributes

Each group must be described by the [Measure Group Attributes](StructureDefinition-MeasureGroupAttributes.html) extension to
further describe the measure group content.

The first step in describing these attributes is to indicate how the measure is scored.
```
 * with group[0].extension[groupAtts] do
 ** extension[scoring].valueCodeableConcept = http://hl7.org/fhir/uv/saner/CodeSystem/PublicHealthMeasureScoring#queue-length
```

Next, the measure describes the type of measure (e.g., structure, process or outcome). This measure is a structural measure,
representing the current patient load on a hospital.
```
 ** extension[type].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-type#structure
```

An indication of how the scoring system works is then provided (e.g., increase, decrease). Lower numbers are "better", with regard
to load in this case.
```
 ** extension[improvementNotation].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#decrease
```

The type of resource associated with this measure expresses what to count for the measure implementer.  For this case, it is a
patients with an active inpatient or ED Encounter. This tells "what to count". The ResourceType slice identifies the FHIR Resource
which is likely being counted.  The SNOMED slice can be used to provide a more fine grained code to describe the resource
(e.g. a specific condition, medication, type of encounter, patient, practitioner, et cetera), and might be a code found or used
to find resources based on the code field associated with it. This information is descriptive, rather than semantically exact content.
It is meant to convey information to an implementer, rather than to automated systems.
```
 ** with extension[subject] do
 *** valueCodeableConcept.coding[ResourceType] = http://hl7.org/fhir/resource-types#Encounter
 *** valueCodeableConcept.coding[Snomed] = http://snomed.info/sct#398284004
 *** valueCodeableConcept.coding[Snomed].display = "Patient in room"
 *** valueCodeableConcept.text = "Patient in room"
```

The question of what to count is sometime difficult to evaluate initially. This measure could be counting patients
or it could be counting the most recent patient encounters for a patient in the reporting period. Either would work
but using encounters makes more sense for this measure because of the need to stratify by measure location, which
is done more readily starting from the Encounter resource. Since the automation code ensures that there is one
encounter for each patient, this method of counting works.

Finally, the method for aggregating scores is specified.
Queue Length measures aggregate according to point-in-time aggregation rules.
```
 ** extension[rateAggregation].valueString = "point-in-time"
```

### Define each Population

The population definitions provide both descriptive and computable content for the measure, describing it to the
implementer, and to the system that automates its computation.  Each population for the measure is described. For this first case,
there is only an initial population, because the Measure Population and Initial Population would otherwise be identical.  In
other cases, it may be easier to define an initial population and then further filter it to construct
the Measure Population.

NOTE: Queue Length Measures support both an initial population and a measure population because
data in the initial population may be reused in later stratification of the measure population.

Provide a code describing the initial population.
```
 * with group[0].population[0] do
 ** with code do
 *** coding = http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numC19Pats
 *** coding.display = "All COVID-19 Confirmed or Suspected Patients"
 *** coding[1] = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
 *** text = "Patients with suspected or confirmed COVID-19 in any location."
```

#### Describe the Evaluation Criteria
Name the criteria and give a description for what qualifies to be included.
NOTE: The description **shall** be given in detail for each population and provide enough
information for a competent human reader to correctly implement the computation.
```
 ** with criteria do
 *** name = "NumC19Pats"  // Note: Follow PascalCase conventions for names
 *** description = """Active encounters where the encounter diagnosis is suspected or confirmed COVID-19,
 or a Condition of suspected or confirmed COVID-19 was created during that encounter.  This includes the patients with laboratory-confirmed
 or clinically diagnosed COVID-19.

Confirmed
: A patient with a laboratory confirmed COVID-19 diagnosis

Suspected
: A patient without a laboratory confirmed COVID-19 diagnosis who, in accordance with CDC’s Interim Public Health Guidance
for Evaluating Persons Under Investigation (PUIs), has signs and symptoms compatible with COVID-19 (most patients with confirmed
COVID-19 have developed fever and/or symptoms of acute respiratory illness, such as cough, shortness of breath or myalgia/fatigue)."""
```

#### Provide the Computable Content
The computable content "implements" the automated computation of the measure.

```
 *** language = #text/fhirpath
 *** expression = """
     // Start with encounters that were active during the reporting period. Note, this may find the same patient twice
     // because they may have had an ED encounter followed by an inpatient encounter both within the reporting period.
     findAll('Encounter',
        including('subject','condition','reasonReference'),
        with('status').equalTo('in-progress'|'finished'),
        with('date').within(%ReportingPeriod)
     ).onServers(%Base).where(
       iif(
         // The reason is a positive lab test result
         Observation.where(code.memberOf(%Covid19Labs.url) and value.memberOf(%PositiveResults.url)) or

         // The reason or diagnosis associated with the encounter is COVID-19
         ( Encounter.reasonCode | Condition.code ).memberOf(%SuspectedOrConfirmedCOVID19Diagnoses.url),

         iif(
           Patient.distinct()
              .whereExists('Observation',
                for('patient', $this),
                with('status').equalTo(
                    'registered' | 'preliminary' | 'final' | 'amended' | 'corrected'),
                with('date').greaterThan(%ReportingPeriod.start - 14 'days'),
                with('code').in(%CovidLabs),
                with('value-concept).in(%PositiveResults)
           ).onServers(%Base), true,
           Patient.distinct()
              .whereExists('Condition',
                for('patient', $this),
                with('verification-status').notEqualTo('refuted'|'entered-in-error').
                with('date').greaterThan(%ReportingPeriod.start - 14 'days'),
                with('code').in(%SuspectedOrConfirmedCOVID19Diagnoses.url)
            // Missing onServers()
           ).exists()
         )
      )
    )
    // Finally, resolve to the unique list of encounters (just in case)
    .distinct()
    // And remove duplicate encounters for the same patient
    // NOTE! Assumes that encounters are returned in order by most to least recent
    // This assumption holds commonly on many implementations, but may not be true
    // for all cases. In the worst case scenario where it does not, the situation
    // will be corrected in the very next reporting period, where only the most
    // recent encounter will appear.
    .aggregate(
      iif($total.subject contains $this.subject,
          {}, $total | $this
      )
    )
 """
```

#### The Initial Query
The first part of the computable content creates a query that will be resolved by the FHIRPath engine.
```
     findAll('Encounter',
        including('subject','condition','reasonReference'),
        with('status').equalTo('in-progress'|'finished'),
        with('date').within(%ReportingPeriod)
     ).onServers(%Base).
```
The [`findAll()`](fluent_query.html#findAll) function is used to resolve the query into a Resource
(the Bundle returned from the query).  This query is designed to extract most of the essential data from
Encounters during the reporting period. This is the exact kind of query that
[FHIR Bulk Data Access](https://hl7.org/fhir/uv/bulkdata/) is intended to support. It uses
[`including('subject','condition','reasonReference')`](fluent_query.html#including) to ensure that referenced resources are also
returned.

#### Filtering Criteria by included resources
The next part of the query is a where() clause which filters the resources returned by the first query.
This where clause includes the use of the iif() function to enable short circuit evaluation, so that
additional queries are only performed when necessary.

The first clause in the iif() uses Observation, Encounter and Condition resources returned by the initial
query, and check for codes and values that are members of value sets established in the [library](measure_library.html)
associated with the measure.  If an encounter matches for either of these reasons, then there is no reason
to look further.

The first part filters the returned resources by type (Observation) and then evaluates
whether the observation matches one of the appropriate codes for a Covid-19 lab test and has a
positive result.
```
       iif(
         // The reason is a positive lab test result
         Observation.where(code.memberOf(%Covid19Labs.url) and value.memberOf(%PositiveResult.url)) or
```

NOTE: For lab results, Observations may have quantitative (numeric values with units),
qualitative (codes), or simply string values to report a result. When defining measures to evaluate
lab results, consider carefully how to evaluate positive/negative result values, and how to evaluate
values reported only as text.

The second part evaluates the codes associated with the Encounter.reasonCode or Condition.code to
determine whether the encounter is for suspected or confirmed COVID-19.
```
         // The reason or diagnosis associated with the encounter is COVID-19
         ( Encounter.reasonCode | Condition.code ).memberOf(%SuspectedOrConfirmedCOVID19Diagnoses.url),
```

<span id='fhir-queries'> </span>
#### Filtering Criteria by other resources not included in the initial query
Sometimes the initial query is insufficient to determine if the returned resources qualify
for inclusion in the population, and additional data may be necessary.  This is the "chatty"
part of the protocol, because it can result in a query to test each case not already included,
and is the reason for use of the outer iif() in first part, and in the inner iif() in this
second part of FHIRPath expression.

The first of the two queries identifies patients for whom there is at least one positive
diagnostic test for COVID-19 in the past two weeks.
```
      iif(
         // The patient has at least one laboratory diagnostic test confirming COVID-19 in the past 14 days
          Patient.distinct()
              .whereExists('Observation',
                for('patient', $this),
                with('status').equalTo(
                    'registered' | 'preliminary' | 'final' | 'amended' | 'corrected'),
                with('date').greaterThan(%ReportingPeriod.start - 14 'days'),
                with('code').in(%CovidLabs),
                with('value-concept).in(%PositiveResults)
           ).onServers(%Base),
```

The use of Patient.distinct() ensures that the query is performed ONLY once for each patient for whom their
is an encounter, given that a patient may have multiple encounters on the same day.  It may be omitted if it
can be confirmed to be unneccessary.  However, a single skipped round-trip to perform a query is enough
to make up for the use of the distinct() method.

The `whereExists()` function establishes a limit on the number of results return to 1 using `_count=1` in the
query above. This is because any matching result is sufficient to include the patient in the cohort, and limits the work
of the server performing the query. This is an optimization that functions in some way similar to an EXISTS clause in SQL.

The query next ensures that only Observations with valid status values are returned (e.g., avoiding cancelled or entered-in-error
test results).  This ensures that entered-in-error results aren't counted as positive.

The query is performed on a per patient basis using  [`for('patient', $this)`](fluent_query.html#for), and restricts the
Observations to be only those for the selected the patient resource.  Some FHIR Servers limit the results that can be
returned by a query to ensure that they are only for the given patient. Including this parameter
1. Ensures compatibility with this server restriction criteria, and
2. also ensures that the query does not include the patient when there is a positive result for a different patient.

<span id='two-weeks'> </span>
The query further restricts results to those whose effective time is within a two week time period before the reporting period using
`'&date=gt' + (%ReportingPeriod.start - 14 days)`. This is established to limit results to only clinically relevant tests during a
reasonable time period. The two week time period is arbitrary, and may be changed based on further clinical guidance.

Finally, the query restricts observations to only those matching codes in the [COVID-19 Labs](ValueSet-Covid19Labs.html) value set
where the resulting value is positive using the [Positive Results](ValueSet-PositiveResults.html) value set.
```
         // The patient has at least one condition with confirmed or suspected COVID-19 in the past 14 days
         Patient.distinct().whereExists('Condition',
            for('patient', $this),
            with('verification-status').notEqualTo('refuted'|'entered-in-error').
            with('date').greaterThan(%ReportingPeriod.start - 14 'days'),
            with('code').in(%SuspectedOrConfirmedCOVID19Diagnoses.url)
         ).exists()
     )
```
NOTE: Some lab results may be reported in a panel form using observation.component.code and observation.component.value. To query for lab
results using this form, change code and value-concept in the query above to component-code and component-value-concept respectively. To query
for both, add a third iif() statement which includes both.  It is not included in this example simply for brevity.

The last section of the expression requires some explanation.
```
    .distinct()
    // And remove duplicate encounters for the same patient
    // NOTE! Assumes that encounters are returned in order by most to least recent
    // This assumption holds commonly on many implementations, but may not be true
    // for all cases. In the worst case scenario where it does not, the situation
    // will be corrected in the very next reporting period, where only the most
    // recent encounter will appear.
    .aggregate(
      iif($total.subject contains $this.subject,
          {}, $total | $this
      )
    )
```
The `distinct()` function simply ensures that the list of encounters is unique (no encounter appears twice).
The `aggregate` expression iterates over each encounter, and if the patient in the encounter is already
found in an encounter in the current $total, skips the encounter (because the newest encounter was already added),
otherwise, adds the encounter to the new $total list.

To ensure that this works all of the time, the encounters must be sorted in order by most to least recent, but FHIRPath
lacks a sort() function.

### <a name='measure-alternate-criteria'>Providing an Alternate Evaluation Method for Criteria
Criteria can be specified using different languages to count the results.  The example above shows a criteria element
in FHIRPath. To provide an alternate criterion, add the alternate definition to the criteria element as shown below.
```
 ** with criteria.extension[MeasureAlternateCriteria].valueExpression do
 *** name = "NumC19Pats"  // Note: Follow PascalCase conventions for names
 *** description = """Alternate definition for Active encounters using CQL"""
 *** language = #text/cql
 *** expression = "NumberOfCOVID19Patients"
```

For measures defined in CQL, the language **shall** be text/cql as shown above.
The expression **shall** be the name of the CQL expression in the CQL statement that computes the value for the measure.


### Stratification
The use of different strata for this measure helps with the prioritization of additional resource assignments to assist facilities in need, improves accuracy and provides for error detection and resiliency. The count for the overall population of patients with suspected or confirmed COVID-19 in the hospital) must be equal to the sum counts over each stratum.  This provides for additional opportunity for
error detection by both the sender and the receiver.  It may also help to identify special cases that may not have been included in
the design or logic of the measure or its stratifying criteria.

NOTE: When designing measures for manual implementation, the use of redundant data assigns more work for the users manually collecting and reporting the data.  When measures are automatically computed, the work is being done by computer systems implementing software algorithms. It is very little addition work for the software to do some additional arithmetic, but additional value in providing cross-checks on data accuracy for automated systems.

Strata for this measure are the possible combinations (a cartesian product) of patient location and ventilator status.

Expressions used for stratification return the value by which the measure is stratified for a counted element, thus, one of four values must be returned by the stratification criteria expression. The expressions for stratification are evaluated in the context of the matched
element.  In this first case, that is a patient encounter.

```
 * with group[0].stratifier[0] do
 ** code.text = "By Location and Ventilator Status"
 ** description = "Stratifies the population by Location (inpatient vs ED/Overflow/Other) and Ventilator Status (Ventilated vs Not Ventilated)"
 ** criteria.name = "LocationAndVentStatus"
 ** criteria.language = #text/fhirpath
 ** criteria.expression = """
      iif(%NumVentUse.id contains Encounter.subject,
          iif(Encounter.location.resolve().type.memberOf(%InpatientLocations.url), 'InpVentilated', 'OFVentilated')
          iif(Encounter.location.resolve().type.memberOf(%InpatientLocations.url), 'InpNotVentilated', 'OFNotVentilated')
      )
 """
```
This expression returns one of four values: 'InpVentilated', 'OFVentilated', 'InpNotVentilated', 'OFNotVentilated').
It first determines whether the patient has been ventilated by comparing patients using a ventilator (computed as shown below)
with the subject of this encounter.  While patients on a ventilator is calculated "later" in the measure, the strata for this
group cannot be computed until that computation is finished.

This expression returns one of four values: 'InpVentilated', 'OFVentilated', 'InpNotVentilated', 'OFNotVentilated').
It first determines whether the patient has been ventilated by comparing patients using a ventilator with the subject of this encounter.
`%NumVentUse` is computed as shown in the [ventilators measure group](measure_group_ventilators.html).

While patients on a ventilator is calculated "later" in the measure, the strata for this group cannot be computed until
that computation is finished.  Once that computation has completed, the next step is to compare the type location where
the encounter has occurred with a value set describing inpatient encounter locations.  If that matches, the patient is considered
to be in a normal inpatient location (including the ICU), and if not, an overflow location (such as an ED or other location).

### <a name='service-time-example'/>Enhancing a Queue Length Measure to a Service Time Measure
Any queue length measure can be enhanced to become a service time measure by adding a Duration population
and changing the scoring attribute to service time as shown below.
```
 * with group[0].extension[groupAtts] do
 ** extension[scoring].valueCodeableConcept = http://hl7.org/fhir/uv/saner/CodeSystem/PublicHealthMeasureScoring#queue-length
```
The denominator population named NumC19Pats in this example collects and counts the encounters in which patients have been
admitted.  The expression %NumC19Pats can be used to access this collection of encounters in the definition
of the Period population for this measure as follows:

Provide a code describing the initial population.
```
 * with group[0].population[1] do
 ** with code do
 *** coding = http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#durationC19Pats
 *** coding.display = "Duration of treatment for all COVID-19 Confirmed or Suspected Patients"
 *** coding[1] = http://terminology.hl7.org/CodeSystem/measure-population#duration
 *** text = "Elapsed encounter time for patients with suspected or confirmed COVID-19 in any location."
```

#### Describe the Evaluation Criteria for Duration
Name the criteria and give a description for what qualifies to be included.
```
 ** with criteria do
 *** name = "DurationC19Pats"  // Note: Follow PascalCase conventions for names
 *** description = """Duration of active or completed encounters where the encounter diagnosis is suspected
 or confirmed COVID-19, or a Condition of suspected or confirmed COVID-19 was created during that encounter."""
```

#### Provide the Computable Content
The computable content implements the automated computation of the measure.

```
 *** language = #text/fhirpath
 *** expression = """%NumC19Pats.select(iif(period.end,period.end,%ReportinPeriod.end) - period.start)"""
```

This expression first tests to see if there is an end dateTime reported for the encounter, and if so uses that value,
otherwise it uses the ending dateTime associated with the reporting period. This is because uncompleted encounters
do not yet have an end time associated with the encounter.  Next, it simply computes the duration as that ending value
minus the start dateTime for the encounter. These values are summed, and the evaluated measure is the sum of durations
divided by the sum of time, giving an average time per encounter.

This measure could be further extended by including the duration-squared population to support computation of
service-time variance.

---

// File: input/pagecontent/measure_group_hospital_acquired_covid19_patients.md

The measure group counting patients acquiring COVID-19 14 days or more after admission includes criteria that depends on the timing of two different events.  It cannot be easily evaluated via a FHIR Query
because FHIR Queries do not support complex join criteria (e.g., Observation.date - Observation.encounter.date > 14 days).  Such criteria
can be evaluated using FHIRPath [Date/Time Arithmetic](http://hl7.org/fhirpath/#datetime-arithmetic) or
[CQL Date and Time Operators](https://cql.hl7.org/02-authorsguide.html#datetime-operators).
Several measures consider dates and times that have a relative offset to the reporting period, or an event occurring during the
reporting period.

### Describing the Group

The first step in describing the group is to identify it with a code.  Measure developers will generally
define the codes used for the measure groups they create.
```
 * with group[1].code do
 ** coding = MeasureGroupSystem#AcquiredCovid
 ** coding.display = "Acquired COVID-19 in Hospital"
 ** text = "Hospital Onset COVID-19 Patient Encounters Reporting"
```
#### Measure Group Attributes
Each group must be described by the [Measure Group Attributes](StructureDefinition-MeasureGroupAttributes.html) extension to
further describe the measure group content.

The first step in describing these attributes is to indicate how the measure is scored.  This measure group is scored as an event
growth measure because that reports both current and cumulative incidence.  This supports reporting of the growth rate for hospital
onset infections within a facility or region.

```
 * with group[1].extension[groupAtts] do
 ** extension[scoring].valueCodeableConcept = http://hl7.org/fhir/uv/saner/CodeSystem/PublicHealthMeasureScoring#event-growth
```

Next, the measure describes the type of measure (e.g., structure, process or outcome). This measure is an outcome measure,
representing the outcome of acquiring an infection while in the hospital.
```
 ** extension[type].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-type#outcome
```

An indication of how the scoring system works is then provided (e.g., increase, decrease). Lower numbers are "better", with regard
to event growth for infections in this case.
```
 ** extension[improvementNotation].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#decrease
```

The type of resource associated with this measure expresses what to count for the measure implementer.  For this case, it is a
patients with an active inpatient or ED Encounter. This tells "what to count". The ResourceType slice identifies the FHIR Resource
which is likely being counted.  The SNOMED slice can be used to provide a more fine grained code to describe the resource
(e.g. a specific condition, medication, type of encounter, patient, practitioner, et cetera), and might be a code found or used
to find resources based on the code field associated with it. This information is descriptive, rather than semantically exact content.
It is meant to convey information to an implementer, rather than to automated systems.
```
 ** with extension[subject] do
 *** valueCodeableConcept.coding[ResourceType] = http://hl7.org/fhir/resource-types#Patient
 *** valueCodeableConcept.coding[Snomed] = #"116154003|Patient|: 20401003|With| = (840539006|Disease caused by 2019 novel coronavirus|: 246512002|Timing| = 277056009|Hospital Acquired|)"
 *** valueCodeableConcept.coding[Snomed].display = "Patient where With = Disease caused by 2019 novel coronavirus where Timing = Hospital acquired"
 *** valueCodeableConcept.text = "Hospital Acquired COVID-19"
```
NOTE: This measure counts Patients having hospital acquired COVID-19, thus Patient is the right code for ResourceType,
and the post-coordinated SNOMED CT expresses the notion of a patient with hospital acquired COVID-19.  Once again, the semantics need
not be perfect, only illustrative to an implementer.

Finally, the method for aggregating scores is specified.
Growth rate measures aggregate according to cumulative aggregation rules.
```
 ** extension[rateAggregation].valueString = "cumulative"
```

### Define each Population

Each population for the measure is described. For this case, there are three populations,
the Initial Population, a Numerator (the new infections), and a Denominator (the cumulative total).

Provide a code describing each population.
```
 * with group[1].population[1].code do
 ** coding = http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numC19HospPats
 ** coding.display = "Hospitalized COVID-19 Patients"
 ** coding[1] = http://terminology.hl7.org/CodeSystem/measure-population#initial-population
 ** text = "Patients with suspected or confirmed COVID-19 in an inpatient location"

 * with group[1].population[2].code do
 ** coding = http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numC19HOPats
 ** coding.display = "Hospital Onset COVID-19 Patients"
 ** coding[1] = http://terminology.hl7.org/CodeSystem/measure-population#numerator
 ** text = "Hospital Onset COVID-19 Patients"

 * with group[1].population[3].code do
 ** coding = http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#cumC19HOPats
 ** coding.display = "Cumulative Hospital Onset COVID-19 Patients"
 ** coding[1] = http://terminology.hl7.org/CodeSystem/measure-population#denominator
 ** text = "Cumulative Hospital Onset COVID-19 Patients"
```

NOTE: The initial population for this measure group is identical to the population used for
the [first measure group](measure_group_covid19_patients.html). This is intentional, as that
population will already have been evaluated and can be further refined to identify patients
with hospital onset COVID-19.

#### Describe the Evaluation Criteria
Name the criteria and give a description for what qualifies to be included.
NOTE: The description **shall** be given in detail for each population and provide enough
information for a competent human reader to correctly implement the computation.
```
 * with group[1].population[1].criteria do
 ** name = "NumC19HospPats"
 ** description = """Patients in the hospital in an inpatient setting with confirmed or suspected COVID-19"""
 """

 * with group[1].population[2].criteria do
 ** name = "NumC19HOPats"
 ** description = """Filters the initial population by ruling out those patients whose first suspected or
 confirmed diagnosis or lab result appears less than 14 days from admission."""

 * with group[1].population[3].criteria do
 ** name = "CumC19HOPats"
 ** description = """Computes the cumulative total from the prior measure report and the number of new
 infections detected in the current reporting period."""
```

#### Provide the Computable Content
The computable content "implements" the automated computation of the measure.

The first population includes patients in the hospital who are in an inpatient setting.

```
 * with group[1].population[1].criteria do
 ** language = #text/fhirpath
 ** expression = "%NumC19Pats.where(location.location.resolve.type().memberOf(%InpatientLocations.url))"
```

The next population rules out patients whose first suspected or confirmed diagnosis
or positive lab result was less than 14 days after admission, and not older than
14 days before admission.  See [the note](measure_group_covid19_patients.html) on
this latter two week period in the discussion for the prior measure group.
```
 * with group[1].population[1].criteria do
 // This expression will be reused to compute the value for the CumC19HOPats
 // population so it must have a name.
 ** name = "NumC19HOPats"
 ** language = #text/fhirpath
 ** expression = """
    Encounter.where(
      iif(
        // Rule out any encounter that is less than 14 days old.
        period.start + 14 days > today(),
        // return false to rule out this encounter.
        false,
        iif(
          // Rule out patients who have a diagnosis of suspected or confirmed
          // Covid prior between period.start - 14 days and period.start + 14 days
          whereExists('Condition',
            with('status').notEqualTo('refuted'|'entered-in-error'),
            with('patient').equalTo($this.subject),
            with('verificationStatus').notEqualTo('refuted'|'entered-in-error'),
            with('date').greaterThan($this.period.start - 14 'days'),
            with('date').lessThanOrEqualTo($this.period.start - 14 'days'),
            with('code').in(%SuspectedOrConfirmedCOVID19Diagnoses.url)
          ).onServers(%Base),
          // return false to rule out this encounter
          false,
          // Rule out remaining patients who have a positive lab result between
          // period.start - 14 days and period.start + 14 days
          whereExists('Observation',
            with('status').equalTo('registered'|'preliminary'|'final'|'amended'|'corrected'),
            with('patient').equalTo($this.subject),
            with('date').greaterThan($this.period.start - 14 'days'),
            with('date').lessThanOrEqualTo($this.period.start - 14 'days'),
            with('code').in(%Covid19Labs.url)
            with('value-concept').in(%PositiveResults.url)
          ).onServers(%Base).not()
        )
      )
    )
    // Resolve to patient to simplify stratification
    .select(patient).resolve()
 """
```
Again, note the use of nested iif() calls and _count=1 in the query to ensure short-circuit evaluation.
Also note that these queries are almost identical to the [queries](measure_group_covid19_patients.html#fhir-queries)
used in the first measure group.
```
 * with group[1].population[2].criteria do
 ** name = "CumC19HOPats"
 ** language = #text/fhirpath
 ** expression = "iif(%PriorReport.empty(),0,%PriorReport.group[1].population[2].count) + %NumC19HOPats)"
```
NOTE: This expression simply returns a numeric value based on the previously reported value plus the number of new infections
detected.  Populations whose values are computed in this manner will not be able to report stratification data
within the measure report for the cumulative total.

### Stratification
Stratification enables reporting by subgroups within a population.  In this example, subgroups are created
based on social determinants of health, such as age, race, ethnicity and gender.  Reeporting on social determinant subgroups
can show the negative impacts of membership in the subgroup on patient treatment.  This measure is stratified by age group, race,
ethnicity and gender to illustrate the use of stratification in a cumulative measure.

For this example, the population is stratified by orthogonal subgroups, i.e., a patient is a member of
only on subgroup within the strata.  However, subgroups need not be orthogonal. The expression in
the criteria for a stratifier returns the list of subgroups to which the population member belongs.

#### Stratification by Age Group
Stratification by age group involves determining the age of the patient. There is no
way to do arithmetic with two dates (to compute a difference), but a birth date plus
an age can be compared to today's date, and that's sufficient.  The codes used for
age group come from the [IHE_ADX_AgeRange](CodeSystem-IHE-ADX-agerange.html) code system,
which derives its values from the [ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html)
specification for durations.
```
 * with group[1].stratifier[0] do
 ** code.text = "By Age Group"
 ** description = "Stratifies the population by Age Group"
 ** criteria.language = #text/fhirpath
 ** criteria.expression = """
    Patient.select(
      iif(birthDate + 20 years < today(), 'P0Y--P20Y',
        iif(birthDate + 30 years < today(), 'P20Y--P30Y',
          iif(birthDate + 40 years < today(), 'P30Y--P40Y',
            iif(birthDate + 50 years < today(), 'P40Y--P50Y',
              iif(birthDate + 60 years < today(), 'P50Y--P60Y',
                iif(birthDate + 70 years < today(), 'P60Y--P70Y',
                  iif(birthDate + 80 years < today(), 'P70Y--P80Y', 'P80Y-P9999Y')
                )
              )
            )
          )
        )
      )
    )
 """
```

#### Stratification by Gender
Stratification by gender is straightforward. The expression simply returns Paient.gender
```
 * with group[1].stratifier[1] do
 ** code.text = "By Gender"
 ** description = "Stratifies the population by Gender"
 ** criteria.name = "Gender"
 ** criteria.language = #text/fhirpath
 ** criteria.expression = "Patient.gender"
```

#### Stratification by Ethnicity
Stratification by ethnicity is also relatively straightforward, but requires use of
US Core extensions and the FHIR defined [extension()](https://www.hl7.org/fhir/fhirpath.html#functions)
function.
```
 * with group[1].stratifier[2] do
 ** code.text = "By Ethnicity"
 ** description = "Stratifies the population by Ethnicity"
 ** criteria.name = "Ethnicity"
 ** criteria.language = #text/fhirpath
 ** criteria.expression = """
    Patient.extension('http://hl7.org/fhir/us/core/StructureDefinition/us-ethnicity-category').extension('ombCategory').valueCoding.code
    """
```

#### Stratification by Race
Stratification by Race is more complicated, because there are multiple possible combinations supporting
reporting of up to 5 different race categories, a value for unknown, a value for asked but unknown, and
the possibility that no value is provided whatsoever, giving 34 combinations in total.  A common solution
for reporting in these cases is to reduce the set to the 5 racial categories and unknown values, and add
a new category to report 'Mixed' race.
```
 * with group[1].stratifier[3] do
 ** code.text = "By Race"
 ** description = "Stratifies the population by Race"
 ** criteria.name = "Race"
 ** criteria.language = #text/fhirpath
 ** criteria.expression = """
    Patient
    .extension('http://hl7.org/fhir/us/core/StructureDefinition/us-core-race')
    .extension('ombCategory')
    .select(
      iif(valueCoding.count() > 1,
         'Mixed',
         iif(valueCoding.system = 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor',
             'Unknown',
             valueCoding.code
         )
    )
    """
```
Some states combine stratification Race and Ethnicity using similar criteria.  For example,
[Massachusetts reports](https://www.mass.gov/doc/covid-19-dashboard-september-7-2020/download#page=15)
data to the public (but may have more detailed results) using the following categories:
* Hispanic
* Non-Hispanic Asian
* Non-Hispanic Black/African American
* Non-Hispanic Other
* Non-Hispanic White
* Unknown/Missing

The selection of appropriate categories for reporting is regionally sensitive, which suggests that
reporting should be at a higher level of granularity.  An alternate strategy is shown for
this strata in the [following group](measure_group_covid19_deaths.html).


---

// File: input/pagecontent/measure_group_ventilators.md

When tracking ventilators, many EHR systems may not directly track ventilator devices in the hospital. Ventilator use is indirectly determined in this measure based on the presence of observations that would only be present in the patient chart
when the patient is being ventilated. Direct tracking of ventilator devices and telemetry is typically the purview of other systems used for asset management or ICU central monitoring.  The number of ventilator devices is generally known, and does not change frequently, and so implementers may provide an alternate mechanism (e.g., a defined parameter) to supply this value.  Thus, while this guide provides an expression for identifying ventilators in this sample measure, more user feedback on how to obtain this value is desired.

### Making the Group Optional for Reporting
```
* with group[3]
** extension[MeasureExpectation].valueCode = http://terminology.hl7.org/CodeSystem/conformance-expectation#SHOULD
```
### Describing the Group

The first step in describing the group is to identify it with a code.  Measure developers will generally define the codes used for the measure groups they create.
```
 * with group[3].code do
 ** coding = MeasureGroupSystem#Ventilators
 ** coding.display = "Ventilators"
 ** text = "Ventilator Reporting"
```
#### Measure Group Attributes

Each group must be described by the [Measure Group Attributes](StructureDefinition-MeasureGroupAttributes.html) extension to
further describe the measure group content.

The first step in describing these attributes is to indicate how the measure is scored.  The ventilator measure is a measure of available and utilized capacity, so the capacity scoring is used.
```
 * with group[3].extension[groupAtts] do
 ** extension[scoring].valueCodeableConcept = http://hl7.org/fhir/uv/saner/CodeSystem/PublicHealthMeasureScoring#capacity
```

Next, the measure describes the type of measure (e.g., structure, process or outcome). This measure is a structural measure,
representing the current ventilator capacity and availability in a hospital.
```
 ** extension[type].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-type#structure
```

An indication of how the scoring system works is then provided (e.g., increase, decrease). The scoring on capacity measures
reports on utilization, so lower numbers are "better", with regard to utilization.
```
 ** extension[improvementNotation].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#decrease
```

The type of resource associated with this measure expresses what to count for the measure implementer.  For this case, it is a
patients with an active inpatient or ED Encounter. This tells "what to count". The ResourceType slice identifies the FHIR Resource
which is likely being counted.  The SNOMED slice can be used to provide a more fine grained code to describe the resource
(e.g. a specific condition, medication, type of encounter, patient, practitioner, et cetera), and might be a code found or used
to find resources based on the code field associated with it. This information is descriptive, rather than semantically exact content.
It is meant to convey information to an implementer, rather than to automated systems.
```
 ** with extension[subject] do
 *** valueCodeableConcept.coding[ResourceType] = http://hl7.org/fhir/resource-types#Device
 *** valueCodeableConcept.coding[Snomed] = http://snomed.info/sct#257463002 "Ventilator Outlet"
 *** valueCodeableConcept.text = "Ventilator capacity"
```

NOTE: The coding of this measure reports that it counts ventilator outlets. During the early period of the COVID Epidemic, a facilities
in New York City and elsewhere used a single ventilator to support more than one patient.  In the US, the FDA issued an emergency
use authorization for such use. CDC issued guidance describing the counting of Bi-level Positive Airway Pressure (BiPAP) equipment
when such equipment and procedures were available within the facility.  This guide makes NO recommendation about the appropriateness
of this use, but notes this so that measure developers will consider such cases when creating measures.

Capacity measures are point in time measures.
```
 ** extension[rateAggregation].valueString = "point-in-time"
```

### Define each Population

The population definitions provide both descriptive and computable content for the measure, describing it to the
implementer, and to the system that automates its computation. Capacity measures have three or four populations:
1. An optional initial population from which the other populations are found.
2. The denominator population, which may simply be the initial population (this is the case for ventilators).
3. The numerator population, which usually applies a filter to the initial population.
4. The numerator-complement population, which represents the population in the denominator not found in the numerator.

The initial population is not used in the Ventilators measure because it would be the same as the denominator population
so the measure starts with the denominator.

```
 * with group[3].population[0] do
 ** with code do
 *** coding[0] = http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numVent "Mechanical Ventilators"
 *** coding[1] = http://terminology.hl7.org/CodeSystem/measure-population#denominator
 *** text = "Total number of ventilators"
 ** description = "Count of all ventilators that can support patient care, whether or not they are presently in use."

 * with group[3].population[1] do
 ** with code do
 *** coding[0] = http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numVentUse "Mechanical Ventilators in Use"
 *** coding[1] = http://terminology.hl7.org/CodeSystem/measure-population#numerator
 *** text = "Total number of ventilators in use"
 ** description = "Count of all ventilators in use."

 * with group[3].population[2] do
 ** with code do
 *** coding[0] = http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#numVentAvail "Mechanical Ventilators Available"
 *** coding[1] = http://hl7.org/fhir/uv/saner/CodeSystem/MeasurePopulationSystem#numerator-complement
 *** text = "Total number of ventilators not presently in use."
 ** description = "Count of all ventilators not presently in use."
```

#### Describe the Evaluation Criteria
Name the criteria and give a description for what qualifies to be included.

```
 * with group[3].population[0].criteria do
 ** name = "NumVent"
 ** description = """Computes the total number of ventilators from the previously reported MeasureReport"""

 * with group[3].population[1].criteria do
 ** name = "NumVentUse"
 ** description = """Identifies the number of ventilators in use by counting Patient with an Observation
 or Procedure resource from an appropriate value set indicating ventilator use."""

 * with group[3].population[2].criteria do
 ** name = "NumVentAvail"
 ** description = """Computes the number of ventilators available by substracting the number of ventilators in use
 determined by population 1 from thee total number of ventilators given in population 0"""
```

#### Provide the Computable Content
The computable content "implements" the automated computation of the measure.

```
 * with group[3].population[0].criteria do
 ** language = #text/fhirpath
 ** expression = "%PriorReport.group[3].population[0].count"
```
 NOTE: The following population is also important for computing the stratification of an earlier
 [measure group](measure_group_hospital_acquired_covid19_patients.html#stratification) by ventilator
 use.  It's important that what it counts are Patients with an observation or procedure implying
 ventilator use.
```
  * with group[3].population[1].criteria do
 ** language = #text/fhirpath
 ** expression = """
       // Find all active encounters
       findAll('Encounter',
        including('subject'),
        with('status').equalTo('in-progress'|'finished'),
        with('date').within(%ReportingPeriod)
       ).onServers(%Base)
       // Filter to patients
       .select(resource as Patient)
       .where(
         iif(
           whereExists('Observation',
             with('status').equalTo('registered'|'preliminary'|'final'|'amended'|'corrected'),
             with('patient').equalTo($this.id),
             with('verificationStatus').notEqualTo('refuted'|'entered-in-error'),
             with('date').within(%ReportingPeriod),
             with('code').in(%VentilatorObservations.url)
           ).onServers(%Base),
           true,
           whereExists('Procedure',
             with('status').equalTo('in-progress'|'completed'),
             with('patient').equalTo($this.id),
             with('date').within(%ReportingPeriod),
             with('code').in(%VentilatorProcedures.url)
           ).onServers(%Base)
         )
       )
 """

 // Compute ventilators available as total number of ventilators - ventilators in use.
 * with group[3].population[2].criteria do
 ** language = #text/fhirpath
 ** expression = "%NumVent - %NumVentUse.count()"
```
### <a name='availability-example'/>Ventilator Supplies
With any resources, including ventilators, require a supply of additional equipment in order to
maintain operations.  In the case of ventilators, this might include tubing which needs replacement
for each patient using the ventilator.  The adequacy of the ventilator tubing supply can be reported
using an availability measure.  The simplest measure of adequacy of supply would be provided
using the example below; either there is tubing available, or it is not.

#### Describing the Ventilator Supplies Group
```
 * with group[3].code do
 ** coding = MeasureGroupSystem#VentilatorSupplies
 ** coding.display = "Ventilator Supplies"
 ** text = "Ventilator Supplies Reporting"
```

#### Ventilator Supplies Measure Group Attributes

The [Measure Group Attributes](StructureDefinition-MeasureGroupAttributes.html) for this group appears below.

This is an availability measure:
```
 * with group[4].extension[groupAtts] do
 ** extension[scoring].valueCodeableConcept = http://hl7.org/fhir/uv/saner/CodeSystem/PublicHealthMeasureScoring#availability
```

This measure is a structural measure, representing the current ventilator supply availability in a hospital.
```
 ** extension[type].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-type#structure
```

Higher numbers (1) represent availability, and so are "better" for this case, but it may vary depending on the question.
```
 ** extension[improvementNotation].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/measure-improvement-notation#increase
```

This example reports on availability of devices (most non-medication supplies are devices)
```
 ** with extension[subject] do
 *** valueCodeableConcept.coding[ResourceType] = http://hl7.org/fhir/resource-types#Device
 *** valueCodeableConcept.coding[Snomed] = http://snomed.info/sct#26412008 "Endotracheal Tube"
 *** valueCodeableConcept.text = "Endotracheal Tube"
```

Supplies are normally tracked in an inventory management system, and these systems do not typically track supplies an an individual
unit level, but rather as a quantity of a specific kind of device that is described.  FHIR does not presently have a resource that
tracks supplies at the quantity level. Supply adequacy is a determination that is made at the facility level, possibly through some
automated logic.
```
 *** extension[subjectValueSet].valueReference.reference = http://example.com/ventilatorSupplies
```
```
 * with group[4].population[0] do
 ** with code do
 *** coding[0] = http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues#VentSuppliesAdequate "Ventilator Supplies"
 *** coding[1] = http://terminology.hl7.org/CodeSystem/measure-population#denominator
 *** text = "Adequacey of ventilator supplies"
 ** description = "Represents the adequacy of ventilator supplies"
```

Lastly, encode the logic that determines the adequacy of ventilator supplies.  That logic is not shown below because it varies by facility.
Knowing the quantity of supplies on hand is a critical input for that decision, but adequacy of supply is also based on the current or projected
rate of consumption, and the lead time for obtaining replacements.

```
 ** with criteria do
 *** language = #text/fhirpath
 *** name = "VentSuppliesAdequate"
 *** description = """Computes the adequecay of ventilator supplies from inventory"""
 *** expression = """See text above"""
```


---

// File: input/pagecontent/measure_library.md

The [Public Health Measure Library](StructureDefinition-PublicHealthMeasureLibrary.html) profile provides access to the resources needed to execute a defined [Public Health Measure](StructureDefinition-PublicHealthMeasure.html).
Each conforming measure must reference at least one, and may reference multiple conforming Library resources.  These libraries provide access to the [Terminology](http://www.hl7.org/fhir/ConceptMap.html),
resources essential for computing the measure.


#### Software Component Name
Computer friendly names enable developers to create software tools that facilitate measure implementation and automation.  This profile
recommends transforming the title into a name by removing spaces and special characters (any character other than A-Z, a-z and 0-9),
using PascalCase to separate boundaries between words. This allows the name to be used in most computing languages and as
the `id` for the resource in systems where user defined identifiers are supported for id values.

1. `Library.name` **shall** be present.
2. `Library.name` **should** match the pattern `[A-Z][A-Za-z0-9]+`.
3. `Library.id` **should** be equal to `Library.name`.

#### Canonical URL
The canonical URL is a unique identifier which represents the Library within Measure resources. Tooling for FHIR
(e.g., the FHIR IG Publisher, SUSHI, Simplifier) follows a protocol for automatically constructing these URLs. This guide makes several
recommendations for URLs used by a publisher.  The example below is used to illustrate the recommendations

     https:\//example.com/saner/covid19ValueSets/Library/MyLibraryName

1. All Library URLs for libraries published by the same organization **should** have the same base URL. The Base URL part **should** be memorable.
   In the example above, `https:\//example.com/saner` is the base URL.
2. The base URL **should** be less than 40 characters in length.
3. The penultimate path part of the URL may be used to categorize libraries in some way, e.g., by topic (e.g., ValueSets, functions). In the example above, `covid19ValueSets` is the category.
4. The last path part in the URL **should** be Library. Following this recommendation simplifies the use of FHIR IG Development tools to
   generate Measure resources.  In the example above, the last path part is `Library`.
5. The computable name given in the Library **should** be the last part of the URL. Again, this simplifies measure development using existing
   FHIR IG Development tools. In the example above, `MyLibraryName` is the name of the library.
6. The URL **should** resolve to an HTML page that describes the measure, or provides access to it as a FHIR Resource and ideally, would
   return HTML, XML or JSON representations based on the requested mime type.

#### Versioning
Library resources can change over time. This guide requires that the Library version information recorded be performed as follows:

1. A library **shall** do one of the following:
   * be recorded in the form defined by [Semantic Versioning](https://semver.org/), e.g.: version 1.2.3 is the third patch to the second minor
     update of the first major release, or
   * be recorded by date using ISO 8601 format with hyphens and no time component, e.g.: 2020-07-25 for the measure released on July 25, 2020.
2. If versions can be updated more frequently than by day, a publisher **shall** use semantic versioning.

The use of semantic versioning is preferred because this is the form required in FHIR implementation guides, and it enables support for versioning
of libraries using FHIR Implementation Guide tools. This is also the format for versioning that has been the most widely adopted by the IT industry.

#### Status of a Library
This profile requires that the publication status of a library be reported (this is a general requirement of all Library resources), and
furthermore, that it's experimental status **shall** also be reported.

The usage of status values is described below:
draft
: The library is presently under development. Libraries presently under development **shall** also be recorded as being experimental.

active
: The library is ready for, or being used, either in pilots or production. The experimental status for the measure **shall** be used to distinguish between
libraries that are being piloted (`experimental=true`) or in production (`experimental=false`).

retired
: The library **should** no longer be used in production. Libraries which are retired before ever becoming active in production **shall** have experimental=true,
while those which have been available for production use **shall** have `experimental=false`.

Libraries which have been used in the past **should** remain available for access for use when data has been used in production to enable systems to
interpret historical data recorded using the measure.


### Library Publication
A library is published by some appropriate authority, for example a governmental agency focused on public health or emergency response,
or an organization working with such a governmental agency. Libraries for situational awareness are not expected to endure a ballot process,
but will instead be created by authorities using a well established governance process. The reason for this is that as the emergent situation
progresses, new libraries will be needed as the situation changes, or existing libraries may need to be updated to address issues found
during use.

Libraries are published by organizations rather than individuals.  This profile requires that the organization be identified in
`Library.publisher`, and furthermore, that there is at least one organizational e-mail address which can be used to contact
that publisher about the Library in `Library.contact`


---

// File: input/pagecontent/overview.md


The Situational Awareness for Novel Epidemic Response Implementation Guide enables transmission
of high level situational awareness information from inpatient facilities to centralized data repositories
to support the treatment of novel influenza-like illness.


### About This Guide
This is a draft implementation guide to promote discussion with leaders in the Health
IT industry, and very much a work in progress. All content in this guide is subject
to discussion and change.

The goal of publishing this guide is to encourage the creation of a community interested
in extremely rapid development of an interface that can support Public Health in this time of
crisis.

### Situational Awareness for Novel Epidemic Response
Situational Awareness has been the focus of attention in health IT circles well before the detection of potentially pandemic flu strains during the early formation of the Office of the National Coordinator in 2005.

2006
: Bird Flu (H5N1)

2009
: Swine Flu (H1N1)

2012
: Middle East Respiratory Syndrome (MERS)

2013
: Another form of Bird Flu (H7N9)

2019
: COVID-19 (SARS-Cov-2)

Situational Data Needs of Public Health
Key situational data needed by public health has remained relatively consistent and well established over this time, and is to support awareness of:

1. Local, Regional and National case rates and trends
2. Bed availability for treatment
3. Other resources availability for treatment
* Staff
* Medications
* Immunizations
* Medical Equipment (e.g., Respirators, N95 Masks)
* Supplies (e.g., Cleaning Supplies, Facemasks)

#### Focusing the Solution Space
In evaluating solutions for the above challenges, we have established the following principles:
1. The solution needs to be focused on providing high ROI.
2. The solution should not duplicate existing efforts.
3. The solution needs to work with existing Health IT products currently deployed.
4. The uplift needed to enable an existing product to support public health information requirements needs to be low enough to effectively deliver quickly.

#### Quick Assessment
1. Existing work by [Johns Hopkins University](https://coronavirus.jhu.edu/map.html) in aggregating case data sets and visualizing them addresses national and even regional (at the county level) trends.
2. Bed availability is an area where there is a great deal of existing work [^1]<sup>,</sup>[^2]<sup>,</sup>[^3]<sup>,</sup>[^4], but not much prior success, although there are existing Health IT solutions that have this data (not just in the EHR). If the solution can be interfaced rather than integrated, an
implementation can be piloted much faster.
3. Other resource utilization is available in inventory control or central monitoring
solutions, but are not necessarily readily available in the EHR. This would be a natural
evolution from Bed Availability.

[^1]: [HITSP C47: Resource Utilization Message](http://www.hitsp.org/ConstructSet_Details.aspx?&PrefixAlpha=4&PrefixNumeric=47)

[^2]: [HAvBED2: Hospital Available Beds for Emergencies and Disasters](https://archive.ahrq.gov/prep/havbed2/)

[^3]: [Emergency Data Exchange Language (EDXL) Hospital AVailability Exchange (HAVE) v1.0 incorporating Approved Errata](https://www.oasis-open.org/standards#edxlhave-v1.0)

[^4]: [HL7/OASIS Cross Paradigm Implementation Guide: Emergency Data Exchange Language (EDXL) Hospital AVailability Exchange (HAVE) Version 2.0 (EDXL-HAVE), Release 1](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=489)

This rapid assessment leads this guide to a focus on bed and ventilator
availability.

### Bed Availability
The key data for bed availability is found in Bed Management solutions integrated with
current inpatient EHR Systems, and in departmental ICU and Central Monitoring systems.
Such solutions support management of bed assignment for admissions and provide direction to
housekeeping staff regarding bed-turnover activities (e.g., cleaning) or departmental systems
which provide ICU and Nursing central monitoring capabilities. They are often separate components
or modules, Standalone solutions, or third party solutions which integrate with an
EHR System (e.g. Forward Advantage with MEDITECH).

#### Prior Solutions and Existing Standards
Prior standards developed to address these issues have been profiled through past efforts. These are briefly
outlined below.

##### HAvBED and OASIS EDXL/HAVE Standards
Most notably, the OASIS Emergency Data Exchange Language (EDXL), and the OASIS Hospital Availability Exchange
were profiled by ANSI/HITSP in response to the AHIC Emergency Responder Use Case. This work was advanced by
AHRQ to develop what is now known as the HAvBED solution, which became a federally-mandated program for states
to collect and report bed availability data. Health and Human Services suspended the HAvBED program in 2016.
Some of the challenges with HAvBED included:

* Manually entered data in many automated bed availability systems is labor-intensive, untimely, resulting in data quality issues.
* Similar issues with to the manual data entry option.
* Technology standards have evolved, and HAvBED requirements did not keep pace.
* Facilities and states were often reluctant to share bed availability data.

##### HL7 Version 2
Other standards which contain information about bed availability include HL7 Version 2
(e.g., the [ADT_A20 Bed Status Update](http://www.hl7.eu/refactored/msgADT_A20.html) message),
and general observations profiled by ANSI/HITSP to support organizational reporting of bed availability using HL7 Version 2 OBX segments.

##### HL7 Version 3
No HL7 Version 3 standards were developed to support Bed management or availability.
The HL7 SOA Workgroup Collaborated with the OASIS EDXL Committee to develop a [Cross
Paradigm](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=489)
specification supporting the communication of bed availability information.


##### HL7 FHIR
In HL7 FHIR the [Location](https://hl7.org/fhir/R4/location.html) resource can describe information about
any bed within a facility. The [Group](https://hl7.org/fhir/R4/group.html) resource
can report on specific quantities of groups of resources available that match a specific
set of characteristics. The [MeasureReport](https://hl7.org/fhir/R4/measurereport.html)
resource can report on measures using counts and other metrics over a variety of resources.

###### Device Resource
The Device Resource can report on medical devices, including ventilators, respirators,
personal protective equipment such as masks, and viral test kits. Device is not widely
used by systems reporting on device quantities or status.

###### Location Resource
While the Location resource can report on beds, it can also be used to describe buildings, wards,
geographic area, or any other sort of place, including "mobile" places such as a mobile clinic or
ambulance. Given its broad application, would need to be profiled to support use for bed availability.

While many existing Certified EHR Systems support the FHIR standard and the Location resource today, there's
little use of the Location resource to report data about beds. It is more commonly used to report
Location data associated with the
[Common Clinical Data Set](https://www.healthit.gov/sites/default/files/commonclinicaldataset_ml_11-4-15.pdf) (now known as the US Core Data for
Interoperability or [USCDI](https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi)) required by the ONC 2015 Certification
regulations. These uses of Location are found in the Encounter, Procedure and Practitioner resources to
describe the facility where an encounter occurs, the location where a procedure is performed, or
the location of a practitioner.

###### Group Resource
While the Group resource can be used to support aggregate reporting on beds, as it allows reporting
of quantities of an item without referencing an individual item, it has not been deployed in this way by
any known system. This resource can also be used to report on other types of resources, such as
ventilators, respirators, and N95 masks.

NOTE: While Group doesn't specifically support groups of Location resources, it can be used to
report on any group of things that can be defined by characteristics, it simply cannot
enumerate those resources. That is not essential for the use cases in this implementation
guide.

The Group resource is more lightly deployed in existing EHR products. It is not
a requirement of the 2015 Certification program.

###### Measure Resource
The MeasureReport resource can be used to support reporting of a variety of measures,
including simple counts, with measures over different strata. It is not readily searchable at
the stratum level. MeasureReport is beginning to gain traction because of efforts using
it in the [DaVinci Project](https://www.hl7.org/about/davinci/).

###### Questionnaire Response
The QuestionnaireResponse resource has been profiled for use in reporting to CDC's National
Healthcare Safety Network (NHSN) in two implementation guides to report the occurrence
of Healthcare Acquired Infections. These guides have seen limited implementation and
testing.

The table below shows the [FHIR Maturity Model](https://www.hl7.org/fhir/R4/versions.html#maturity) Level for each of the resources described
above.

<table class='grid'><thead><tr><th>Resource</th><th>Maturity Level</th></tr></thead>
<tbody>
<tr><td><a href="http://hl7.org/fhir/device.html">Device</a></td><td>2</td></tr>
<tr><td><a href="http://hl7.org/fhir/group.html">Group</a></td><td>1</td></tr>
<tr><td><a href="http://hl7.org/fhir/location.html">Location</a></td><td>3</td></tr>
<tr><td><a href="http://hl7.org/fhir/measurereport.html">MeasureReport</a></td><td>2</td></tr>
<tr><td><a href="http://hl7.org/fhir/questionnaireresponse.html">QuestionnaireResponse</a></td><td>3</td></tr>
</tbody>
</table>

#### Terminology
Terminology plays an important role in this implementation guide.
It can be used to describe:
* The kind of location where the bed is located (e.g., ED, med/surgery, ICU, Pediatric,
NICU, Isolation)
* The status of a bed (e.g., available, in use, isolated, contaminated, housekeeping)
* Other types of resources (e.g., ventilators, respirators, masks, et cetera)

##### Location Type
The HL7 Version 3 [Service Delivery Location Role Type](https://www.hl7.org/fhir/v3/ServiceDeliveryLocationRoleType/vs.html)
Value Set has been adopted as the [Preferred](https://www.hl7.org/fhir/terminologies.html#preferred) classification system for `Location.type` in the Location resource in FHIR
R4.

##### Bed Status
HL7 Version 2 Table 0116 [Bed Status Provides Vocabulary](https://www.hl7.org/fhir/v2/0116/index.html) that can describe the status
of a bed, and has been adopted as the [Extensible](https://www.hl7.org/fhir/terminologies.html#extensible) vocabulary
for `Location.operationalStatus` in the Location resource in FHIR R4.

##### Codes used for Stratifying Populations
Other codes are essential for stratifying populations to determine the impact of disease,
by age, gender or race and ethnicity, either to determine risk factors, or identify
disparities in treatment. Existing code sets are available to support these sorts of
stratification efforts.

##### New Codes
Until COVID-19 and SARS-Cov-2 were discovered, codes to describe the disease, diagnostic
tests, antibody tests, or test results did not exist because these concepts did not
yet exist. Since then organizations like LOINC, SNOMED and CMS responsible for managing code
systems used by EHR and other Health IT systems have produced codes where needed, and developed value
sets and guidelines for coding conditions and situations related to COVID-19 including
diagnosis, evaluation, treatment, procedures, and medications associated with the disease.

These new codes and guidelines for use of existing codes support:

* Laboratory Testing and Results
* Diagnosis of COVID-19
* Suspected Diagnosis of COVID-19
* Suspected or actual Exposure to COVID-19




**Footnotes**
        

---

// File: input/pagecontent/phrase_book.md

This section of the IG explains possible ways to record the expressions used to automate a Measure.  Essentially it is a phrase book from English to the Expression elements used in the PublicHealthMeasure resource to describe the automation.  Due to different workflows and national requirements, these phrases may require translation to different FHIR models to represent the concept being tested.

Preferred models are marked with an asterisk.

The examples below are informative, and show how measures could be developed to support different constraints using existing vocabularies and value sets supported by HL7 FHIR.

In the text below, examples are based on measures analyzed from the CDC Patient Impact and Hospital Capacity module used for reporting in the first half of 2020 and shown below.

![CDC Patient Impact and Hospital Capacity module](57.130-covid19-pimhc-blank-p.png)<br clear="all">


### Active Patient Encounters
Encounters represent interactions between a patient and a healthcare provider in inpatient, outpatient or other settings. Many measures for situational awareness start with a patient encounter as the context for the measurement.

The HOSPITAL INPATIENT BED OCCUPANCY measure can be evaluated through encounters. The initial set of encounters can be retrieved using the `Encounters?status=in-progress` FHIR query, or represented as
`Encounter.where(status='in-progress')` in FHIRPath.

#### Active Encounters Within a Time Frame
Both Encounter.period.start and Encounter.period.end can be tested for occurrence on a specific day, or within a given date range, allowing for tests of Admit/Discharge/Transfer/Death by date.

If looking for encounters started yesterday, and today is September 1, 2020, the appropriate FHIR query is: `Encounter?date=sa2020-08-30T23:59:59&date=le2020-09-01`. This query will find encounters that start after the last second of August 30, and which were present before September 1.  These encounters must have been present Yesterday, and started after the day before yesterday, thus, must have started yesterday.  The same query expressed as a filter in FHIRPath is `Encounter.where(period.start.toDate() = @2020-08-31)`. FHIRPath provides finer grained access than FHIR queries, enabling direct access to the start component of the encounter period.  The start component needs to be converted to a date to ensure that precision matches for the equals operator.

The first and second examples above can be combined to ensure that the encounters in question are still in-progress, and filter out other encounters (e.g., those created in error).  For the FHIR query, this would be `Encounters?status=in-progress&date=sa2020-08-30T23:59:59&date=le2020-09-01`. In FHIRPath, this would be `Encounter.where(period.start.toDate() = @2020-08-31 and status = 'in-progress')`

#### Admission
An admission generally starts an encounter that lasts more than a single day, although might also be used for encounters lasting only a single day (e.g., emergency department encounters which could last more than a day, but often are completed with a single day).

Admission
: An admission is identified from an Encounter that has not yet ended. Encounter.status **should** be "in-progress".  The date (and time) of admission can generally be determined from Encounter.period.start. Encounter.period.end will not be present, and Encounter.hospitalization.dispositionCode will also not be present, but the latter is not generally directly accessible through a search.

##### Examples for Admission

<table border='1' cellspacing='0'>
  <caption>Locating Admissions via the Encounter resource</caption>
  <thead><tr><th>Field</th><th>Description</th><th>FHIR Query</th><th>FHIR Path</th><th>CQL</th></tr></thead>
  <tbody>
     <tr><td>Encounter.status</td>
         <td>Active encounters</td>
         <td>Encounter?status=in-progress</td>
         <td>Encounter.where(status='in-progress')</td>
         <td>[Encounter] E where E.status = 'in-progress'</td>
     </tr>
     <tr><td>Encounter.period.start</td>
         <td>Encounters starting on a given date or within a particular period</td>
         <td>Encounter?date=sa<i>2020-09-07</i>&date=lt<i>2020-09-09</i><br/>
             Because the date search parameter is compared to a period data type, the upper and lower
             bounds must be set in a way that ensures inclusion of the target period.  Using a high
             precision time value for the sa component is less likely to run into implementation
             errors even though sa2020-09-07 **should** be equivalent.
         </td>
         <td>Encounter.where(period.start >= @<i>2020-09-08</i> and period.start < @<i>2020-09-09</i>)<br/>
             It is generally preferable for comparisons in for a time period to use an the inclusive
             lower bound with greater than or equal to (>=) and an exclusive upper bound with
             less-than (<). This is less likely to run into implementation errors affecting date comparisions.
         </td>
         <td>parameter MeasurementPeriod default Interval[@2020-09-08, @2020-09-09)<br/>
             [Encounter] E where E.period starts during <i>MeasurementPeriod</i></td>
     </tr>
  </tbody>
</table>

#### Encounters with a Disposition
The base FHIR specification does not support query by discharge disposition. Some FHIR Servers may be configurable to support this search.  See the [disposition](SearchParameter-SearchParameter-disposition.html) search parameter for an example of a resource that can be used to support this capability.  When present, discharge disposition codes are often populated according to requirements established for payment (e.g., [US Medicare payment requirements](https://www.cms.gov/medicare/medicare-contracting/contractorlearningresources/downloads/ja0801.pdf#page=2), rather than treatment.

\*The date of the disposition (discharge/transfer or death) may be determined from Encounter.period.end.

<table border='1' cellspacing='0'>
  <caption>Locating Discharges, Transfers and Deaths via the Encounter resource</caption>
  <thead><tr><th>Field</th><th>Description</th><th>FHIR Query</th><th>FHIR Path</th><th>CQL</th></tr></thead>
  <tbody>
     <tr><td>Encounter.status</td>
         <td>Encounters that have been completed</td>
         <td>Encounter?status=finished</td>
         <td>Encounter.where(status='finished')</td>
         <td>[Encounter] E where E.status = 'finished'</td>
     </tr>
     <tr><td>Encounter.period.end</td>
         <td>Encounters ending on a given date or within a particular period.</td>
         <td>Encounter?date=ge<i>2020-09-07T23:59:59</i>&date=eb<i>2020-09-09</i><br/>
             Because the date search parameter is compared to a period data type, the upper and lower
             bounds must be set.
         </td>
         <td>Encounter.where(period.end >= @<i>2020-09-08</i> and period.end < @<i>2020-09-09</i>)<br/>
             It is generally preferable for comparisons in for a time period to use an the inclusive
             lower bound with greater than or equal to (>=) and an exclusive upper bound with
             less-than (<). This is less likely to run into implementation errors affecting date comparisons.
         </td>
         <td>parameter MeasurementPeriod default Interval[@2020-09-08, @2020-09-09)<br/>
             [Encounter] E where E.period ends during <i>MeasurementPeriod</i></td>
     </tr>
  </tbody>
</table>

To distinguish between discharge to home vs. a transfer to another facility vs. death, the value of \*Encounter.hospitalization.disposionCode must be examined. Usually discharge means "to home" or other non-healthcare setting (e.g., another family member's home). These cases are shown in more detail below.

##### Discharge
A discharge is represented by an Encounter that has been completed in some way, either Encounter.status is "finished" to indicate normal completion, or in some cases, the Encounter.status may be marked as "cancelled" for special cases. Encounter.hospitalization.dispositionCode **should** be present, and where the the patient was discharged to.

<table border='1' cellspacing='0'>
  <caption>Locating Discharges via the Encounter resource</caption>
  <thead><tr><th>Field</th><th>Description</th><th>FHIR Query</th><th>FHIR Path</th><th>CQL</th></tr></thead>
  <tbody>
    <tr><td>Encounter.hospitalization.dispositionCode</td>
        <td>Transitions to home or similar settings</td>
        <td>Encounter?disposition=<i>http://terminology.hl7.org/CodeSystem/discharge-disposition|home,<br/>
            http://terminology.hl7.org/CodeSystem/discharge-disposition|alt-home</i>,<br/>
            http://terminology.hl7.org/CodeSystem/discharge-disposition|aadvice</i>,<br/>
            http://terminology.hl7.org/CodeSystem/discharge-disposition|oth</i><br/>
        </td>
        <td>Encounter.where(<br/>
            hospitalization.dispositionCode.where(system='http://terminology.hl7.org/CodeSystem/discharge-disposition'<br/>
               and code = ('home'|'alt-home'|'aadvice'|'oth') ) )</td>
        <td>valueset HomeEnvironment http://example.com/valueset/HomeEvironment<br/>
            [Encounter] E where E.hospitalization.dispositionCode in HomeEnvironment</td>
    </tr>
  </tbody>
</table>

##### Transfers
A transfer to another facility (inter-facility transfer) is like a discharge, except that the Encounter.hospitalization.dispositionCode **should** be present and indicates a transfer to a different healthcare setting (e.g., rehabilitation, hospice, long-term care).

<table border='1' cellspacing='0'>
  <caption>Locating Transfers via the Encounter resource</caption>
  <thead><tr><th>Field</th><th>Description</th><th>FHIR Query</th><th>FHIR Path</th><th>CQL</th></tr></thead>
  <tbody>
    <tr><td>Encounter.hospitalization.dispositionCode</td>
        <td>Transitions to other healthcare settings other than home or death</td>
        <td>Encounter?disposition=<i>http://terminology.hl7.org/CodeSystem/discharge-disposition|other-hcf,<br/>
            http://terminology.hl7.org/CodeSystem/discharge-disposition|hosp,<br/>
            http://terminology.hl7.org/CodeSystem/discharge-disposition|long,<br/>
            http://terminology.hl7.org/CodeSystem/discharge-disposition|psy,<br/>
            http://terminology.hl7.org/CodeSystem/discharge-disposition|rehab,<br/>
            http://terminology.hl7.org/CodeSystem/discharge-disposition|snf</i>
        </td>
        <td>Encounter.where(<br/>
            hospitalization.dispositionCode.where(system='http://terminology.hl7.org/CodeSystem/discharge-disposition'<br/>
               and code = ('other-hcf'|'hosp'|'long'|'psy'|'rehab'|'snf') ) )</td>
        <td>valueset TransferEnvironment http://example.com/valueset/TransferEnvironment<br/>
            [Encounter] E where E.hospitalization.dispositionCode in TransferEnvironment</td>
    </tr>
  </tbody>
</table>

Notes
: A transfer within a facility (intra-facility transfer) can mark a change in patient class (e.g., outpatient, emergency, observation, inpatient, long-term care) and type of service being provided, but may also simply indicate movement between locations within a facility.

: Measure developers **should** provide clarity around the distinctions between discharge and transfer.  Is discharge to home-health a "discharge" or a "transfer"?  If "long-term care" is the same as "home" for the patient, how would different hospital workflows vary with regard to coding these values?

##### Death
Not every discharge is a good outcome. Discharge due to death requires special handling because of different hospital workflows used to track the death of a patient.

1. \*The discharge disposition may indicate death in the Encounter.hospitalization.dispositionCode value, or
2. The fact that a patient has died (but not when) may appear in Patient.deceasedBoolean, or
3. \*The date of death may appear in Patient.deceasedDateTime, or
4. A date of death may be recorded in an Observation for the patient, or
5. The Location resource referenced by Encounter.hospitalization.destination may indicate a morgue or autopsy    room in Location.type.

When testing for death during an encounter using date of death (numbers 3 and 4 above), take care to verify that death occurred during the encounter (i.e., date of death is >= Encounter.period.start and <= Encounter.period.end).

<table border='1' cellspacing='0'>
  <caption>Locating Deaths via the Encounter resource</caption>
  <thead><tr><th>Field</th><th>Description</th><th>FHIR Query</th><th>FHIR Path</th><th>CQL</th></tr></thead>
  <tbody>
    <tr><td>Encounter.hospitalization.dispositionCode</td>
        <td>Transitions due to Death</td>
        <td>Encounter?disposition=<i>http://terminology.hl7.org/CodeSystem/discharge-disposition|exp</i></td>
        <td>Encounter.where(<br/>
            hospitalization.dispositionCode.where(system='http://terminology.hl7.org/CodeSystem/discharge-disposition'<br/>
               and code = 'exp') ) )</td>
        <td>valueset PatientExpired http://example.com/valueset/PatientExpired<br/>
            [Encounter] E where E.hospitalization.dispositionCode in PatientExpired</td>
    </tr>
  </tbody>
</table>

<table border='1' cellspacing='0'>
  <caption>Locating Deaths via the Patient resource</caption>
  <thead><tr><th>Field</th><th>Description</th><th>FHIR Query</th><th>FHIR Path</th><th>CQL</th></tr></thead>
  <tbody>
    <tr><td>Patient.deceasedDateTime</td>
        <td>Patient date of death</td>
        <td>Patient?death-date=2020-09-09</td>
        <td>Patient.where(deceasedDateTime = @2020-09-09)</td>
        <td>[Patient] P where P.deceasedDateTime = @2020-09-09</td>
    </tr>
    <tr><td rowspan='2'>Patient.deceased[x]</td>
        <td>Patient has died</td>
        <td>Patient?deceased=true</td>
        <td>// Patient has died, or there is a date of death<br/>Patient.where(deceasedBoolean = true | deceasedDateTime.exists())</td>
        <td>[Patient] P where P.deceasedBoolean = true or P.deceasedDateTime is not null</td>
    </tr>
    <tr><td>Patient has died within this encounter</td>
        <td>// NOTE: This query uses chained search, and will NOT test that the patient died during the encounter <br/>
            // It will return both encounters and patients so that further analysis can<br/>
            // be performed by the client.  This sort of issue should be documented in<br/>
            // <a href='https://www.hl7.org/fhir/metadatatypes-definitions.html#Expression.description'>Expression.description</a> in the measure definition.<br/>
            Encounter?patient.deceased=true&_include=Encounter:subject</td>
        <td>Encounter.where(<br/>
            // Patient has died during the encounter<br/>
            (resolve(patient).deceasedDateTime >= $this.period.start and<br/>
            &#xA0;resolve(patient).deceasedDateTime <= $this.period.end) or<br/>
            // Encounter is in-progress and patient has died<br/>
            &#xA0;&#xA0;($this.status = 'in-progress' and<br/>
            &#xA0;&#xA0;// Patient has died, or there is a date of death<br/>
            &#xA0;&#xA0;&#xA0;resolve(patient).where(deceasedDateTime.exists() or deceasedBoolean = true)<br/>
            &#xA0;&#xA0;)<br/>
            )
        </td>
        <td>Context Encounter <br/>
            [Patient] P where <br/>
            P.id = E.patient and<br/>
            // Patient has died during the encounter<br/>
            &#xA0;(P.deceasedDateTime in E.period or<br/>
            // Encounter is in-progress and patient has died<br/>
            &#xA0;&#xA0;(E.status = 'in-progress' and<br/>
            &#xA0;&#xA0;&#xA0;(P.deceasedBoolean = true or P.deceasedDateTime is not null)<br/>
            &#xA0;&#xA0;)<br/>
            &#xA0;)<br/>
        </td>
    </tr>
  </tbody>
</table>

### For a type of healthcare service (e.g., ED, Observation, Acute, ICU, Outpatient)
The type of healthcare service may be determined in a couple of different ways depending on hospital workflow:

1. \*It may be broadly coded in Encounter.class (e.g., ED, Observation, Acute, ICU, Outpatient), or
2. Deeply coded in Encounter.serviceClass (more detailed encoding for different kinds of services, from which one can infer ED, Observation, et cetera.
3. Encoded in the Location resource referenced by Encounter.location.location in Location.type, again, from which one can infer ED, Observation, et cetera.

Many HL7 standards use the HL7 Version 3 HealthcareServiceLocation vocabulary to describe locations. Based on the U.S. [HSLOC Coding System](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.1.11.20275/expansion/Latest) is used to record the type of healthcare service for the HL7 Healthcare Acquired Infections Implementation Guides in both [CDA](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=20) and [FHIR](http://hl7.org/fhir/us/hai/). This coding system supports development of value set that can be used in the expression to identify a location supporting a specific type of service.

<table border='1' cellspacing='0'>
  <caption>Determining the type of service using Encounter resource</caption>
  <thead><tr><th>Field</th><th>Description</th><th>FHIR Query</th><th>FHIR Path</th><th>CQL</th></tr></thead>
  <tbody>
     <tr><td>Encounter.class</td>
         <td>Inpatient (Acute) Encounters</td>
         <td>Encounter?class=http://terminology.hl7.org/CodeSystem/v3-ActCode|ACUTE</td>
         <td>Encounter.where(status.where(system='http://terminology.hl7.org/CodeSystem/v3-ActCode' and code='ACUTE'))</td>
         <td>valueset AcuteEncounter http://example.com/valueset/AcuteEncounter
             [Encounter] E where E.class in AcuteEncounter</td>
     </tr>
     <tr><td>Encounter.serviceType</td>
         <td>Encounters providing a specific kind of service</td>
         <td>// NOTE: Requires custom search parameter for service-type
             Encounter?serviceType=http://terminology.hl7.org/CodeSystem/service-type|237</td>
         <td>Encounter.where(serviceType.where(system='http://terminology.hl7.org/CodeSystem/service-type' and code='237')
         </td>
         <td>valueset EncounterServiceType http://example.com/valueset/EncounterServiceType<br/>
             [Encounter] E where <br/>
             E.serviceType in EncounterServiceType
         </td>
     </tr>
     <tr><td>Location.type</td>
         <td>Encounters in a specific type of location</td>
         <td>// NOTE: Used chained search for Encounters in a hospital unit
             Encounter?location.type=http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType|HU</td>
         <td>Encounter.where(location.physicalType.where(system='http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType' and code='HU'))</td>
         <td>valueset LocationType http://example.com/valueset/LocationType<br/>
             context Encounter
             [Location] L where <br/>
             L.id = Encounter.location
             L.type in LocationType
         </td>
     </tr>
  </tbody>
</table>

### Temporary/Surge/Overflow
Some facilities, especially under stress will house patients in temporary locations, known as surge or overflow locations.  NHSN defined these thus:

> Overflow locations include any physical locations created to accommodate patients including but not > limited to 24-hour observation units, hallways, parking lots, or tents.

There is no common workflow or model used to represent this sort of situation. This IG recommends the use of a special code within Encounter.location.physicalType to identify a location that is a temporary location.  This value should also appear within Location.physicalType in the location resource referenced by Encounter.location.location.

### With a Given Condition or Symptom
Patient conditions or symptoms may appear in several places, with different degrees of confidence in the patient having the condition (e.g., admission, preliminary, differential, possible, or confirmed diagnosis).

#### Admitted/Seen for:
In the context of a given encounter, the condition may appear in:

1. The Condition resource referenced by Encounter.diagnosis.condition in Condition.code.  When using this field, consider also the value of Encounter.diagnosis.use, which encodes the provider confidence in the diagnosis, or
2. As a coded value in Encounter.reasonCode, or 
3. As a reference to a Condition resource in Encounter.reasonReference, or
4. As a reference to an Observation resource in Encounter.reasonReference
5. As a problem in a Condition resource linked to the encounter, i.e., where Condition.encounter references the Encounter of interest.
6. As a problem in a Condition resource from a prior period or encounter.
7. As an finding reported in an Observation resource linked to the encounter i.e., where Observation.encounter references the encounter of interest.  These observations may report subjective or objective findings during review of systems or physical examination (e.g., shortness of breath, sense of smell, et cetera).
8. As a finding reported in an Observation from a prior period or encounter.

NOTE: In all cases where Condition is used, consider also the values of `Condition.verificationStatus` and `Condition.clinicalStatus` during evaluation.  The `verificationStatus` indicates whether the condition is unconfirmed, provisional, confirmed or even refuted or entered-in-error.  Note that the last two cases the patient does NOT have the condition.  The `clinicalStatus` may describe clinical status of the condition of interest, using the value active, inactive or resolved.  Again, note that resolved indicates the condition is no longer active.

The `Condition.onset[x]` and `Condition.abatement[x]` fields identity the time frame over which the condition was active.  The `Condition.recordedDate` indicates when the provider recorded the condition in the system.

<table border='1' cellspacing='0'>
  <caption>Determining the reason for care using Encounter resources</caption>
  <thead><tr><th>Field</th><th>Description</th><th>FHIR Query</th><th>FHIR Path</th><th>CQL</th></tr></thead>
  <tbody>
     <tr><td>Encounter.reasonCode</td>
         <td>Encounter for a specific disease by code</td>
         <td>Encounter?reason-code=http://snomed.info/sct|186747009,http://snomed.info/sct|713084008,http://snomed.info/sct|840539006,http://snomed.info/sct|840544004</td>
         <td>Encounter.where(reasonCode.where(system='http://snomed.info/sct' and code=('186747009','713084008','840539006','840544004')))</td>
         <td>valueset AcuteEncounter http://example.com/valueset/AcuteEncounter
             [Encounter] E where E.class in AcuteEncounter</td>
     </tr>
     <tr><td>Encounter.reasonReference</td>
         <td>Encounters referencing a condition resource</td>
         <td>// Chained search<br/>
             Encounter.reasonReference.code=http://snomed.info/sct|186747009,<br/>
             http://snomed.info/sct|713084008,<br/>
             http://snomed.info/sct|840539006,<br/>
             http://snomed.info/sct|840544004</td>
         <td>Encounter.where(reasonReference.resolve().code.where(system='http://snomed.info/sct' and <br/>
               code=('186747009','713084008','840539006','840544004'))
         </td>
         <td>valueset COVID19Conditions http://example.com/valueset/COVID19Conditions<br/>
             [Condition] C where <br/>
             C.id = Encounter.reasonReference and<br/>
             C.code in COVID19Conditions
         </td>
     </tr>
     <tr><td>Condition.code</td>
         <td>Condition recorded for a given encounter</td>
         <td>Condition?encounter=<i>encounterId</i>&<br/>
             code=http://snomed.info/sct|186747009,http://snomed.info/sct|713084008,http://snomed.info/sct|840539006,http://snomed.info/sct|840544004
         </td>
         <td>Condition.where(system='http://snomed.info/sct' and <br/>
               code=('186747009','713084008','840539006','840544004')) and<br/>
               encounter=<i>encounterId</i>
         </td>
         <td>valueset COVID19Conditions http://example.com/valueset/COVID19Conditions<br/>
             context Encounter
             [Condition] C where <br/>
             C.encounter = Encounter.id<br/>
             C.code in COVID19Conditions
         </td>
     </tr>
  </tbody>
</table>


### Measures based on codes or results
Several different kinds of measures can be based on codes describing a diagnostic tests, a procedure, or other activity having been performed, and in the case of diagnostic tests, combinations including both the test code and result value.

#### Test / Procedure / Immunization Performed
Electronic laboratory reporting is used to track both the kinds of tested performed as well as the results. A commonly reported measure for COVID-19 is the number of COVID-19 diagnostic tests performed, regardless of outcome, where the results are then stratified by outcome.  This can be counted by looking for the existence of an Observation or Procedure. Reporting of certain kinds of observations (e.g., Fraction of Inhaled Oxygen or Positive End Expiratory Pressure) are commonly reported for patients who are on a ventilator.  Existence of these observations indicate that a patient is on a ventilator.

<table border='1' cellspacing='0'>
  <caption>Determining the reason for care using Encounter resources</caption>
  <thead><tr><th>Field</th><th>Description</th><th>FHIR Query</th><th>FHIR Path</th><th>CQL</th></tr></thead>
  <tbody>
     <tr><td>Observation.code</td>
         <td>Diagnostic Result from a COVID-19 test</td>
         <td>Observation?code=http://loinc.org|94307-6,http://loinc.org|94308-4,http://loinc.org|94309-2,http://loinc.org|94310-0,<br/>
http://loinc.org|94314-2,http://loinc.org|94315-9,http://loinc.org|94316-7,http://loinc.org|94500-6,<br/>
http://loinc.org|94533-7,http://loinc.org|94534-5,http://loinc.org|94558-4,http://loinc.org|94559-2
        </td>
         <td>Observation.where(code.where(system = 'http://loinc.org' and <br/>
             code = ('19994-3','19995-0','19996-8','94310-0','94314-2','94315-9','94316-7','94500-6','94533-7','94534-5','94558-4','94559-2') ) )</td>
         <td>valueset SarsCoV2Labs http://example.com/valueset/SarsCoV2Labs
             [Observation] O where O.code in SarsCoV2Labs</td>
     </tr>
     <tr><td>Observation.code</td>
         <td>Patients with observations indicating that they are on a ventilator</td>
         <td>Observation?code=http://loinc.org|19835-8,http://loinc.org|19994-3,http://loinc.org|20077-4,http://loinc.org|20079-0,http://loinc.org|20103-8,<br/>
http://loinc.org|20112-9,http://loinc.org|20115-2,http://loinc.org|33438-3,http://loinc.org|57655-3,http://loinc.org|76530-5,http://loinc.org|19839-0
        </td>
         <td>Observation.where(code.where(system = 'http://loinc.org' and <br/>
             code = ('19835-8','19994-3','20077-4','20079-0','20103-8','20112-9','20115-2','33438-3','57655-3','76530-5','19839-0') ) )</td>
         <td>valueset PatientsOnVentilator http://example.com/valueset/PatientsOnVentilator
             [Observation] O where O.code in PatientsOnVentilator</td>
     </tr>
  </tbody>
</table>

The handling of Procedure or Immunization resources is similar.  For Procedure, change Observation above to Procedure.  For Immunization, change Observation to Immunization, and code to vaccine-code for FHIR Query, or to vaccineCode for FHIRPath and CQL.

#### Test with a coded result or interpretation
To test for a specific coded result, add the following clauses to the above expressions:

<table border='1' cellspacing='0'>
  <caption>Determining the reason for care using Encounter resources</caption>
  <thead><tr><th>Field</th><th>Description</th><th>FHIR Query</th><th>FHIR Path</th><th>CQL</th></tr></thead>
  <tbody>
     <tr><td>Observation.valueCodeableConcept</td>
         <td>Coded Result matching a particular value</td>
         <td>&value-concept=http://snomed.info/sct|260385009
        </td>
         <td>Observation.where( ... and valueCodeableConcept.where(system='http://snomed.info/sct' and value='260385009'))</td>
         <td>valueset NegativeResults http://example.com/valueset/NegativeResults
             [Observation] O where O.valueCodeableConcept in NegativeResults </td>
     </tr>
     <tr><td>Observation.interpretation</td>
         <td>A result interpretation of a specified value</td>
         <td>// NOTE: Requires custom search parameter for interpretation
             &interpretation=http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation|NEG
        </td>
         <td>Observation.where( ... and interpretation.where(system='http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation' and value='NEG'))</td>
         <td>valueset NegativeInterpretations http://example.com/valueset/NegativeInterpretations
             [Observation] O where O.interpreation in NegativeInterpretations </td>
     </tr>
  </tbody>
</table>

#### Test Value within a Range
<table border='1' cellspacing='0'>
  <caption>Determining the reason for care using Encounter resources</caption>
  <thead><tr><th>Field</th><th>Description</th><th>FHIR Query</th><th>FHIR Path</th><th>CQL</th></tr></thead>
  <tbody>
     <tr><td>Observation.valueQuantity</td>
         <td>Quantity above/below/with a range</td>
         <td>&value-quantity=gt5.4|http://unitsofmeasure.org|mg<br/>
             &value-quantity=lt5.4|http://unitsofmeasure.org|mg<br/>
             &value-quantity=gt5.4|http://unitsofmeasure.org|mg&value-quantity=lt8.0|http://unitsofmeasure.org|mg<br/>
        </td>
         <td>Observation.where( ... and valueQuantity > 5.4 'mg')<br/>
             Observation.where( ... and valueQuantity < 5.4 'mg')<br/>
             Observation.where( ... and valueQuantity > 5.4 'mg' and valueQuantity < 8.0 'mg')<br/>
         </td>
         <td>[Observation] O where O.valueQuantity > 5.4 'mg'<br/>
             [Observation] O where O.valueQuantity < 5.4 'mg'<br/>
             [Observation] O where O.valueQuantity > 5.4 'mg' and O.valueQuantity < 8.0 'mg'<br/>
     </tr>
  </tbody>
</table>

### Handling Temporal Relationships
In the example below, NHSN defined HOSPITAL ONSET for COVID-19 as shown below:

> HOSPITAL ONSET: Patients currently hospitalized in an inpatient bed with onset of suspected or confirmed COVID-19 fourteen or more days after hospital admission due to a condition other than COVID-19

This kind of query cannot be handled directly using a FHIR Search query, as it requires computing a relationship between
to related resources.

In FHIRPath, assuming both the encounter and condition are available in the current set of results, one would write:
```
   Condition.where(resolve(encounter).period.start + 14 'days' < onsetDateTime)
```
This expression will select Condition resources for which the associated Condition.encounter.period.start date plus 14 days is less than the time of onset of the condition.

A similar expression can be written for CQL:
```
 [Condition] C where
 C.encounter = Encounter.id and
 C.code in COVID19Conditions and
 C.onset - 14 days > Encounter.period.start
```


---

// File: input/pagecontent/profiles_and_extensions.md

### Resource Profiles<a name="resources"></a>
* [Public Health Measure](StructureDefinition-PublicHealthMeasure.html) profiles the
  Measure resource to support Public Health and Emergency Response surveillance requirements.  This
  provides the definition of the measurements that will be reported.

* [Public Health Measure Report](StructureDefinition-PublicHealthMeasureReport.html)
  profiles the MeasureReport resource to align it with resources adopting the Public
  Health Measure profile.  These are instances of reports of specific measurements.

* [Public Health Measure Library](StructureDefinition-PublicHealthMeasureLibrary.html) profiles the
  Library resource to ensure that all essential terminology and logic components are available
  for implementation of a measure.

* [Public Health Measure Report Metadata Attachments](StructureDefinition-PublicHealthMeasureMetadataAttachment.html)
  constrains attachments used in libraries described above to ensure that content is available
  for implementers of a given measure.

* [Capability Statement With Slices](StructureDefinition-CapabilityStatementWithSlices.html) assists in the
  automated creation of CapabilityStatement resources for this guide.  Capability statements reported
  by implementers of this guide need not conform to this profile (but may do so if they choose).

#### Audit Records <a name="audit"></a>
This guide includes profiles that support auditing of activity on the MeasureReport and Measure resources
described by this guide.

* [Audit Event Base](StructureDefinition-AuditEventBase.html) is the base profile for all audit event
  resources use by this guide. It defines the core requirements for audit events.


### Supporting DataType Profiles <a name="datatypes"></a>
* [Measure Criteria](StructureDefinition-MeasureCriteria.html) profiles the
  [Expression](https://www.hl7.org/fhir/R4/metadatatypes.html#Expression) data type
  to enforce requirements essential for the creation of measures supporting automatic
  evaluation and reporting.

* [Measured Item Description](StructureDefinition-MeasuredItemDescription.html) describes the slices
  using in the FHIR CodeableConcept to describe what is to be counted:

  1. As a FHIR Resource.
  2. As a more detailed clinical concept in standard vocabulary to describe the specific resources included.

* [Measure Reporting Timing](StructureDefinition-MeasureReportingTiming.html) profiles the Timing datatype
  to uniformly described recommended measure reporting times.

<!--  removed
* [Precise Date Time](StructureDefinition-PreciseDateTime.html) profiles the DateTime data type to
  fix the requirements for at least second precision, including a time zone, for reporting dates of
  reporting and the reporting period for a MeasureReport resource.
-->


### Supporting Extensions<a name="extensions"></a>
* [Measure Expectation](StructureDefinition-MeasureExpectation.html) defines an extension
  that allows parts of a defined measure to be marked as optional or required.

* [Reporting Period](StructureDefinition-ReportingPeriod.html) defines an extension enabling
  a definition for a measure to provide the suggested reporting period.

* [Measure Alternate Criteria](StructureDefinition-MeasureAlternateCriteria.html)
  defines an extension that allows alternate criteria for evaluation to be defined for
  a Measure.  In this way, multiple implementations for counting can be supported based
  on the capabilities of the system available.

* [Measure Group Attributes](StructureDefinition-MeasureGroupAttributes.html) defines
  an extension that enables interpretation the structure of a group as a collection
  of populations that evaluate to a single measured item.


---

// File: input/pagecontent/profiles.md

This page lists all the Profiles and Extensions defined as part of the SANER Implementation Guide.

### Profiles
These Profiles have been defined for this implementation guide.

<ol>
  {% include list-profiles.xhtml %}
</ol>


### Extensions
These Extensions have been defined for this implementation guide.

<ol>
  {% include list-extensions.xhtml %}
</ol>


---

// File: input/pagecontent/security_considerations.md

The data accessed by this implementation guide includes:

* Measures are generally publicly available information that is [Anonymous Read](http://hl7.org/fhir/R4/security.html#Anonymous) sensitive. There may be cases where use or testing of a given measure may be [Business Sensitive](http://hl7.org/fhir/R4/security.html#Business).

* Measure Reports that are generally not sensitive to individual patients or workers. The reported metrics may be perceived as sensitive to the organization publishing them. For this reason the project assesses the Security and Privacy Considerations as Business Sensitive under normal situations, however it may require higher levels of sensitivity where limited data sets exist. For example, when reporting data from a small facility in an area with a very limited population.

* Evaluated and Supplemental Data which includes patient identifiable information (when the supplemental data option is used). This data is [Patient Sensitive](http://hl7.org/fhir/R4/security.html#Patient).

* Value Sets which are generally publicly available information that is [Anonymous Read](http://hl7.org/fhir/R4/security.html#Anonymous) sensitive. There may be cases where use or testing of a given value set may be [Business](http://hl7.org/fhir/R4/security.html#Business) Sensitive.

In some cases the use of this data may require user authentication for purposes unrelated to the sensitivity of the data.

Given this assessment, the main Security Considerations are focused on:

* Assuring the data published is authentic to the organization publishing the data. That is that a consumer of the API can be given assurances that they are connecting to the authentic service endpoint they intended to connect to. This functionally is provided by common use of TLS with server sided authentication, commonly used in HTTPS.

* Taking care to validate that the server certificate validated and authenticated by TLS/HTTPS is the server intended to connect to. This is important management of client side certificate trust store.

* Assuring the data communicated is not modified in transit. The consumer of the API can be given assurances that they are retrieving exactly the data that is published. This functionality is provided by common use of TLS with integrity cyphers such as SHA256.

* Encrypting the data. When evaluated or supplemental data is not used, the Confidentiality of the communicated data is not critical, but having it encrypted may prevent unidentified risks. Given that common use of TLS includes common use of encryption cyphers such as AES256, encryption is strongly recommended for consistency sake.

* The service may choose to request a security token be obtained to provide identity of the client. When a client token is provided the server will have more rich information to make an access control decision or record in an audit log.

* The client and server **should** record an Audit Log event such as FHIR AuditEvent. See Audit Records in the Profiles and Extensions section of this guide for profiles created in this guide for the HL7 FHIR AuditEvent resource.

### Purpose Of Use restrictions
Given that the use-case for this implementation guide is to support Public Health reporting, the use of client context PurposeOfUse of [PUBHLTH](http://hl7.org/fhir/R4/v3/ActReason/cs.html#v3-ActReason-PUBHLTH) is recommended. The communication of PurposeOfUse is not defined in SMART-on-FHIR, so other methods might need to be used. IHE IUA profile provides a OAuth attribute to carry this.

The use of data returned by this API **should** be limited to the Public Health use-case. Re-purposing the data for other uses, such as re-identification, **should** be considered a violation of the API intention.

The setting of the PurposeOfUse to [PUBHLTH](http://hl7.org/fhir/R4/v3/ActReason/cs.html#v3-ActReason-PUBHLTH) may be addressed through policy agreements and thus not communicated in the API communications.

### Local Access Control
The maintenance of the data on the client or server is not specified in this implementation guide. Security considerations must be applied in systems design to assure that the data is appropriately protected from inappropriate use and modification. For example only authorized services and individuals **should** be allowed to update the metrics that would be served by the API defined here.

### Security and Privacy Risks
This section includes an enumeration of some of the risks identified for the use-cases covered and justifying the security and privacy mitigations indicated above.

- Risk to re-identification when the Location (region reporting on) is small enough to identify too few individuals (e.g. k-anonymity); for example, where a region is so small that the community can re-identify a death because it is the only death in that region with the other indirect identifiers (gender, etc.)
- Risk to reputation of a healthcare facility that is serving a community with increased negative incidents
- Risk to community reputation -- if a community is harder hit, it may be perceived negatively on that community. People in that community may be targeted by scams and bullied (cyberbullying).

In addition to the mitigations above, careful definition of regions that would be reported upon **should** assure that the region is large enough so as to lower the risk of re-identification. Where reporting regions are too small, aggregation into larger regions may be necessary.

Where evaluated or supplemental data is used, the following risks **must** also be recognized:

* Direct identification of a patient within a facility, or indirect identification outside the facility.
* Direct identification of a patient to an attacker with access to commonly available data sources.

Combined reports within one dataset increase the risk of re-identification through the correlation of indirect identifiers within the dataset. Independent reports can mitigate this reverse correlation used for re-identification.

### References
* [COVID-19 & HIPAA Bulletin Limited Waiver of HIPAA Sanctions and Penalties During a Nationwide Public Health Emergency](https://www.hhs.gov/sites/default/files/hipaa-and-covid-19-limited-hipaa-waiver-bulletin-508.pdf)
* [IHE Handbook on De-Identification that includes element analysis and mitigation methods](https://wiki.ihe.net/index.php/Healthcare_De-Identification_Handbook)
* [News: Coronavirus fallout: Massachusetts won’t release town-specific COVID-19 data, citing ‘stigma’ and privacy; some towns doing it on their own](https://www.masslive.com/coronavirus/2020/04/coronavirus-fallout-massachusetts-wont-release-town-specific-covid-19-data-citing-stigma-and-privacy-some-towns-doing-it-on-their-own.html) Posted Apr 07, 2020
* [IHE IT Infrastructure De-identification Handbook](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Handbook_De-Identification_Rev1.1_2014-06-06.pdf#page=9)


---

// File: input/pagecontent/situational_awareness_measures.md

The Situational awareness for Novel Epidemic Response Implementation Guide enables transmission
of high level situational awareness information from inpatient facilities to centralized data repositories
to support the treatment of novel influenza-like illness.

The focus of this guide is to inform developers on how to create and use the essential FHIR
Resources necessary to support national and regional reporting efforts on COVID-19 to
public health officials.  It describes how to exchange measures supporting situation
awareness to enable appropriate response to healthcare emergencies affecting a population.  While the
immediate focus of this guide is in support of efforts to manage challenges related to the novel Coronavirus, the
guide is informed by prior efforts supporting the exchange of situation awareness data in support of other
emergencies (e.g., hurricanes, wild fires, mass injury events, et cetera).

### Situational Awareness for Novel Epidemic Response
Situational awareness has been the focus of attention in health IT circles well before the detection of potentially
pandemic flu strains in 2005.  Since then, a number of pandemics  and other regional and national emergencies have emerged requiring some level of situational awareness to support responses by public health agencies.

2006
: Avian Influenza subtype H1N5

2009
: Swine Flu (H1N1)

2012
: Middle East Respiratory Syndrome (MERS)

2013
: Avian Influenza subtype H7N9

2017
: Hurricane Maria

2019
: COVID-19 (SARS-Cov-2)



### Situational Data Needs of Public Health
Situational Data Needs of Public Health Key situational data needed by public health has remained relatively consistent and well established over this time, and is to support awareness of:
1. Local, Regional and National case rates and trends
2. Bed
   * Total Capacity
   * Available (availability for treatment)
   * Surge Capacity
3. Other resources availability for treatment
   * Staff
   * Medications
   * Immunizations
   * Medical Equipment (e.g., Respirators, N95 Masks)
   * Supplies (e.g., Cleaning Supplies, Facemasks, PPE by Class)

### Situational Awareness
Situational awareness represents an understanding of what resources are available or needed,
where, and when, so that decisions can be made about allocating resources where needed, or moving resources
or those in need of them to the appropriate locations so that those resources can be used to support emergency
response efforts.  Resources can include just about anything that can be used to support the effort, food,
medicine, supplies, people (with appropriate skills), equipment, utilities like water, power, et cetera. The key mechanism by which this guide supports situation awareness is through communication of measures related to essential elements of information needed to support emergency preparedness and response activities.

#### Essential Elements of Information
The purpose of situation awareness measures is to collect these essential elements of information (EEI) used to support emergency
response. Briefly, EEIs are the data elements emergency response officials need in order to support critical decision making during an emergency.  In the US, the Office of the Assistant Secretary of Preparedness and Response
[defines EEIs](https://www.phe.gov/Preparedness/planning/hpp/reports/Documents/hpp-pmi-guidance-2017.pdf#page=60) as:

> Essential Elements of Information (EEI)
> : Essential elements of information are discrete types of reportable public health or healthcare-related incident-specific knowledge communicated or received
> concerning a particular fact or circumstance, preferably reported in a standardized manner or format, which assists in generating situational awareness for
> decision-making purposes. EEI are often coordinated and agreed upon pre-incident (and communicated to local partners) as part of information collection request
> templates and emergency response playbooks.

This is a healthcare focused definition of EEIs, rather than a more general definition of the term, but the term EEI is also used in other domains.  A more detailed
discussion of Essential Elements of Information addressing broader domain needs (including healthcare) can be found in
[Essential Elements of Information Publication Guidance](https://www.nisconsortium.org/portal/resources/bin/NISC_EEI_Publication_1426695387.pdf)
published by the National Information Sharing Consortium.

In the ideal world:

1. EEIs will be well defined, understood, and implemented before a crisis occurs, but may need to evolve or be scaled as a crisis evolves and more is understood about the emerging situation.

2. Systems that have EEIs will be able to automatically collect and report them to organizations responsible for emergency response. Time spent manually collecting and reporting data that is not automated often suffers in quality.

3. New and changed EEI criteria can be automatically deployed, and those reporting systems can be rapidly updated to respond to changing information needs.

### Measure Reporting for Situational Awareness
This implementation guide expands the uses for [MeasureReport](https://hl7.org/fhir/R4/MeasureReport) resource to report measures of situational awareness to state, local, territorial, regional, and national agencies, including but not limited to state and territorial public health agencies, regional agencies supporting public health or emergency preparedness and response, or national agencies such as the Centers for Disease Control (CDC) and the Federal Emergency Management Agency in the US.

#### Measurement in HL7
For more than the last decade, HL7 and its members have been deeply involved in the evolution
of measurement standards for clinical quality reporting, from early efforts in developing the
[HL7 Version 3 Health Quality Measure Format](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=97)
specification, to more recent efforts in the publication of the [HL7 FHIR Quality Measure (QM)](http://hl7.org/fhir/us/cqfmeasures/),
and the [DaVinci Data Exchange For Quality Measures (DEQM)](http://hl7.org/fhir/us/davinci-deqm/)
implementation guides. These guides provide excellent reference and background materials
for those interested in learning more about the terminology used in measurement.

According to The American Heritage® Stedman's Medical Dictionary:
> measure <i>v.</i>
>
> To ascertain the dimensions, quantity, or capacity of.
>
> To mark, lay out, or establish dimensions for by measuring.

At its simplest, measurement is counting in units, and then doing some math with
the resulting count or to obtain a value that lets you do something useful.  The approach
used in this guide is the counting of HL7 FHIR resources matching criteria associated
to identify **populations** (of resources), and relate these populations in various ways
to express a measurement.  These measurements describe the capacity, availability, average
service times, et cetera.

#### Example Situational Awareness Measures Used in the U.S.
In late March of 2020, the CDC [published a form](https://www.cdc.gov/nhsn/pdfs/covid19/57.130-covid19-pimhc-blank-p.pdf)
and [instructions](https://www.cdc.gov/nhsn/pdfs/covid19/57.130-toi-508.pdf) for hospital reporting of
bed and ventilator utilization, and FEMA [provided a spreadsheet](Template for Daily Hospital COVID-19 Reporting.xlsx) it expects to be
emailed on a daily basis from in-hospital laboratory testing facilities.  Examples of these documents are provided below.

<table><caption>Samples of requested data. Show for illustration, please use
official sources for reporting.</caption>
<tbody>
<tr>
  <td><img width='80%' src='Template-for-Daily-Hospital-COVID-19-Reporting.png'/></td>
  <td><img width='80%' src='57.130-covid19-pimhc-blank-p.png'/></td>
</tr>
</tbody>
</table>

### Measurement Reporting Approach
The approach of this IG to measurement is to capture all measurements reported to a single
agency in a single FHIR MeasureReport resource, using multiple groups in the report for
each kind of measurement reported.  This approach is aligned with existing workflows associated with
automated systems for receiving measure data. The approach very much treats the MeasureReport
as if it were a report card (as one might receive from a school) describing how a location is doing
on all measured criteria, with each group within the MeasureReport reflecting one of the
"subject areas" being measured.

This is unlike typical workflows for clinical quality measurement, where measures are assessed
one measure at a time, and is reflected in the current structure of the MeasureReport resource.
There is some support in the MeasureReport to support composite measures reporting results
from more than one measure.  However, combining these subject areas into a single MeasureReport
results in data loss when the separate measures in the composite use a different measure approach.
This is due to the lack of an ability to express attributes of each Measured item at the group
level within the Measure. That issue is addressed by this guide by creating an extension (see [Measure
Group Attributes](profiles_and_extensions.html#datatypes)) to allow topic,
scoring and type to be shifted from Measure to Measure.group. To simplify interpretation of Measure
by consumers, Measures created in this guide always include these extensions on Measure.group, even
if they are not strictly needed.

### Types of Measures for Situational Awareness
Just as [quality reporting](https://www.hl7.org/fhir/clinicalreasoning-quality-reporting.html) defines
several types of measures, situational awareness measures also follow several common patterns. Examining the data being captured
for situational awareness during the COVID-19 crisis, this guide has identified the following types
of measures:

* Capacity and Utilization
* Current and Cumulative Event Counting (Event Growth)
* Queue Length
* Service Times
* Availability

These categories describe different ways of scoring of a measure and are included in the
[Public Health Measure Scoring](CodeSystem-PublicHealthMeasureScoring.html) coding system established by this guide.

#### Capacity and Utilization
A Capacity and Utilization measure describes the current capacity and utilization of fixed assets for treatment,
and provides scores showing used and available capacity. It is a specialization of a
[Proportion Measure](https://www.hl7.org/fhir/R4/codesystem-measure-scoring.html#measure-scoring-proportion).
The total system capacity is the denominator for the measure. There can be exclusions from the denominator to
count resources that are temporarily unavailable for care for reasons other than being used for treatment. The
utilization component is the numerator. It describes the number of units in use for treatment. The availability
component is the numerator-complement which describes the number of units available for use. The measure score
is computed as for a proportion measure.

The difference between is Proportion Measure and a Utilization measure is that in a proportion measure available
capacity must be inferred, however, in a Utilization measure, the available capacity is directly reported in
a measurement in the numerator-complement population of the measure.  This implementation guide defines the code for
the numerator-complement population.

In this way, the MeasureReport resource reporting utilization can be directly queried through FHIR APIs for
available capacity to find a location capable of treating or caring for some number of patients (e.g., by available beds
or ventilators at a facility or within a region).

A worked through example of capacity measure is provided in [Measure Group Beds](measure_group_beds.html#capacity-example).

#### Event Growth
An event growth measure reports the number of events occurring during a time period (e.g., tests performed,
positive test results, new cases) over the cumulative total of events (e.g., total tests performed, total
positive results, or total cases) from some defined starting point.  The numerator is the number events occurring
during the period, and the denominator is the cumulative total of events. It represents the point in time rate
of growth during the measure period of events of interest.

This is simply another form of Proportion measure, since what is being counted in the numerator and denominator come from the
same initial population.  A worked through example of an event growth measure is provided
in [Measure Group Covid-19 Deaths](measure_group_covid19_deaths.html#event-growth-example).

NOTE: The score for this measure group **shall** always range from 0 to 1, where 1 represents the highest rate of
cumulative growth.  If there were no prior event, the growth rate will be 1 in the first reporting period because the
number of total events is the same as the number of new events.  The number of total events never exceed the number of new
events because they are counted at the same point in time (new events is part of total events). When the number of new events
is 0, the measure score **shall** be reported as 0. Implementations failing to account for this may generate divide by zero
exceptions, or attempt to report NaN (Not a Number) values, which can result in errors elsewhere.

The [Covid Trends](https://aatishb.com/covidtrends/) site demonstrates use of this measure in a graph to show the
trajectory of confirmed cases. When plotted over time on a log-log scale, this kind of measure illustrates significant changes
in events with exponential rates of growth. An example plot is shown below:

![Graph of Covid Trends in the World as of July 25, 2020](CovidTrends.png)

#### Queue Length
A Queue Length measure is a cohort measure which reports the number of activities awaiting completion (e.g., patients in an overflow
area waiting for a bed, tests awaiting to be resulted, patients in a hospital awaiting discharge). Queue length usually represents
a measure of an unmet need. Queue length measures can be improved to become service time measures by capturing the total time waiting
for an completion of an activity, but this time may not be readily tracked, or queue length may be a sufficient signal of a problem
that needs to be addressed. The benefit of service time measures is that they can be compared between facilities, whereas queue length
is not readily comparable but may be more readily computable.


A worked through example of a queue length measure is provided
in [Measure Group Covid-19 Patients](measure_group_covid19_patients.html#queue-length-example).

#### Service Time
A Service Time measure is a specialization of the ratio measure which reports the total time taken to provide a service
(e.g., wait times, length of stay, time to report a lab test result) for all events in the numerator, and the total number
of events (e.g., services such as inpatient stays, tests performed) provided in the denominator. This is a ratio measure because
the units differ in the numerator and denominator, where the events being counted in the numerator are essentially clock ticks in
some unit (e.g., days, hours, minutes).  The measure score is the average service time. These are generally process measures,
describing the efficacy of the process being measured (e.g., treatment, testing).

Service time measures must report both the total number of events (the denominator) and the total time of service (the numerator)
to support aggregation over time. Consider an organization reporting measures about time taken to produce test result, where
one site results tests in 22.0 hours, and another site reports tests in 12.0 hours.  The rate across both sites together cannot be
computed if the number of tests is not reported.  If the first site performed 100 tests, and the second performed 1000 tests, then
the rate across both sites will be different if the quantities of tests performed is swapped.  This is shown in the two tables below:

<br />
Case 1: Site 1 reports on 100 tests, Site 2 on 1000

|Site|Average Rate|Tests Performed|Total Time|
|---|---|---|---|
|1|100|2,200 hrs|22.0 hrs/result|
|2|1000|12,000 hrs|12.0 hrs/result|
|All|1100|14,200 hrs|12.9 hrs/result|
{: .grid}

<br/>
Case 2: Site 1 reports on 1000 tests, Site 2 on 100

|Site|Tests Performed|Total Time|Average Rate|
|---|---|---|---|
|1|1000|22,000 hrs|22.0 hrs/result|
|2|100|1,200 hrs|12.0 hrs/result|
|All|1100|23,200 hrs|21.1 hrs/result|
{: .grid}

A worked through example of a service time measure is provided
at the end of [Measure Group Covid-19 Patients](measure_group_covid19_patients.html#service-time-example).


#### Availability
Availability measures are subtypes of cohort measures which enable tracking of availability of
critical resources, generally consumables (e.g., PPE, medications, immunizations, oxygen, blood, IV fluids),
or staff to support facility operations (e.g., physicians, nurses, other licensed providers, support and maintenance staff),
or other resources (e.g., electricity, water) or available facility services (e.g., emergency department, helipad, burn unit).

These are generally categorical responses, typically in the form of a yes or no response to indicate availability
or lack of availability. These are recorded in a similar manner to which categorical responses are encoded
for stastical analysis, where a question that has one response that can be answered by selecting one of N values
each value is turned into a separate question, with a yes or no answer, where yes is encoded using a value of 1
and no is encoded with a value of 0.  For more complex questions with three or more categories, similar rules
apply.

For example: PPE inventory quanties might be used to determine if a facility should be instituting conventional, contingent, or crisis optimization
strategies and whether equivalent resupplies are readily available using the same mechanism for
recording yes/no answers.  If this were worded as a multiple choice question (allowing only one answer)
in a questionnaire, a measurement instrument might ask:

What kind of resupply strategy is being used for N95 respirators:
A) Conventional, B) Contingent, or C) Crisis Optimization

The measure would instead request individual count values for Conventional, Contingent or Crisis Optimization
resupply strategy.  A count of 1 would be assigned to the selected strategy, and a count of 0 to unselected
strategies. This allows numerical analysis techniques to be used with categorical data.

A measure report for a single facility **shall** always have a value of 0 or 1 as the count for
an availability measure.  When unstratified, a 1 **shall** mean available, a 0 **shall** mean unavailable.
When stratified the count for each stratum **shall** always be 1 or 0, where a 1 **shall** mean the facility
meets the criteria for a specified stratum, and a 0 **shall** mean it does not.  There **shall** be at most
one stratum whose count is 1, and **should** be one stratum whose count is 1. The sum of values for all
strata **shall** be 0 or 1.

A measure report aggregating over multiple facilities may have a value greater
than one (the sum of all count values for all aggregated reports).  The number "counts" the number of
facilities for which the identified resource is available, or within strata, the number
of facilities for which the stratification criteria were met.

A worked through example of a service time measure is provided
at the end of [Measure Group Ventilators](measure_group_ventilators.html#availability-example).

### Measure Populations in Situation Awareness Measures
In addition to initial population, denominator, denominator-exclusions and numerators, situational awareness measures
may report other populations or population scores.  Unlike quality measures, situational awareness measures do not
use denominator exceptions.  This implementation guide defines four additional types of populations:

* Numerator Complement
* Duration
* Duration Squared
* Supporting

These population types are defined in the [Measure Populations](CodeSystem-MeasurePopulationSystem.html) code system.

#### Numerator Complement
The numerator complement is the quantity in the denominator that match neither the numerator nor the numerator-exclusion criteria.
Summed together, the numerator, numerator-exclusion and numerator-complement must match the value of the denominator - denominator-exclusion value.

In a capacity and utilization measure, the numerator-complement population represents available capacity. By enabling reporting
of available capacity in a measure report, the numerator-complement enables search for locations with available capacity meeting
a specific criteria (e.g., an ICU with 10 open beds, or a hospital with 3 available ventilators).

#### Duration
Duration is a measure-observation provided with time units representing the duration of an activity or event
(e.g. length of stay, time to admission, time for service).

#### Duration Squared
Like Duration, duration-squared is a measure-observation. It represents the sum of squares duration of an activity or event. The sum of squares can be used to calculate other statistics, such as variance and standard deviation. Average and variance are the first two parameters that describe the shape of a distribution. Signal changes may first show up in sum of squares ahead of other statistics. This value can be used to support computation of variance in time of service measures. Increases in variation over time represent areas where service times are changing, and measures of variance allow for hypotheses testing about the distribution of measured events.

#### Supporting
A supporting population represents an intermediate computation helpful in defining a measure, but not needing to be reported.  It
may be used to compute common groups of artifacts which are needed to report other populations.

Supporting populations **should not** be reported in production measures, but may be reported when testing or under other
circumstances. A Measure Consumer that receives a report containing a supporting population **should** simply ignore or perhaps
even discard it from the stored MeasureReport resource.  These are like extra subtotals in spreadsheets, helpful for computing
a final total, but not essential.

#### Specifying Population Criteria
The table below illustrates the populations that are required for computing a situation awareness measure.
Unlike quality measures, situation awareness measures do not require that an initial population be present
for all measure types. It is permitted, and may be helpful in measure computation, but it is not essential
for scoring or reporting.


|MeasureType| Initial<br/>Population | Supporting<br/>Population| Denominator| Denominator<br/>Exclusion| Numerator| Numerator<br/> Exclusion | Numerator<br/>Complement| Duration| Duration<br/>Squared|
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|**Capacity and<br/>Utilization**|O|O|R|O|R|O|R|NP|NP|
|**Event Growth**|O|O|R|O|R|O|NP|NP|NP|
|**Queue Length**|O|O|R|O|NP|NP|NP|NP|NP|
|**Service Time**|O|O|R|O|NP|NP|NP|R|O|
|**Categorical**|O|O|R|O|R|O|R|NP|NP|
{: .grid}

R - Required
O - Optional
NP - Not Permitted

### Optionality in Situation Awareness Measures
Public health or other agencies may define a minimum set of values that are to be reported on, allowing facilities to omit entries in the measure that are either not applicable or not relevant for reporting.  Thus, some measure values are required, and others are optional.  This can be defined in the measure using the Measure Expectation extension in the Measure

A measure may contain sections for reporting that are either not appropriate or not applicable for all settings. In order to pass FHIR Validation, a MeasureReport that references a Measure must however, include all components of the measure.  At the time of this publication, these constraints are hard coded into FHIR Validation tools, and are not generally available in computable form. When reporting these elements, the [data-absent-reason](https://www.hl7.org/fhir/extension-data-absent-reason.html) extension can be used in the MeasureReport resource for these elements to indicate that they are not available.

To enable measure developers to specify which measure components are required, recommended or optional
this IG defines the [Measure Expectation](StructureDefinition-MeasureExpectation.html) extension. This
extension operates identically to the [expectation](https://www.hl7.org/fhir/extension-capabilitystatement-expectation.html)
extension, but can be applied to Measure resources.

The [Profiles and Extensions](profiles_and_extensions.html) page enumerates the various profiles and extensions
created for this guide.


---

// File: input/pagecontent/spec.md

This chapter describes the technical details of this guide.

1. [Architecture](Architecture_and_Implementation.html) - Illustrates the Microservice Architecture.
2. [Security Considerations](security_considerations.html) - Documents security concerns and mitigations.
3. [Actors and Transactions](actors.html) - Provides an overview of technical components


---

// File: input/pagecontent/supporting_vocabulary.md

This page lists ValueSets, CodeSystems and ConceptMaps used in this guide to illustrate
the creation of Measure resources.  These terminology resources are illustrative, but
not required for use of this guide.

### Value Sets
These Value Sets have been defined to illustrate creation of measures using this implementation guide.

#### Bed Locations
1. [Bed Location Operational Status](ValueSet-BedLocationOperationalStatus.html)
2. [Healthcare Service Location](ValueSet-HealthcareServiceLocation.html)
3. [ICU Locations](ValueSet-ICULocations.html)
4. [Inpatient Locations](ValueSet-InpatientLocations.html)

#### COVID-19 Diagnoses

1. [COVID-19 ICD-10-CM Diagnoses](ValueSet-COVID19DXICD10.html)
2. [COVID-19 SNOMED Diagnoses](ValueSet-COVID19DXSNOMED.html)
3. [COVID-19 Exposures](ValueSet-COVID19Exposures.html)
4. [Confirmed COVID-19 Diagnosis Values](ValueSet-ConfirmedCOVID19Diagnoses.html)
5. [Suspected COVID-19 Diagnoses](ValueSet-SuspectedCOVID19Diagnoses.html)
6. [Suspected Or Diagnosed COVID-19](ValueSet-SuspectedOrConfirmedCOVID19Diagnoses.html)

#### COVID-19 Related Medications
1. [Remdesivir](ValueSet-Remdesivir.html)

#### COVID-19 Lab Value Sets

1. [COVID-19 Antibody](ValueSet-COVID19Antibody.html)
2. [COVID-19 Organism](ValueSet-COVID19Organism.html)
3. [COVID-19 Not Detected](ValueSet-NegativeResults.html)
4. [COVID-19 Detected](ValueSet-PositiveResults.html)
5. [SARSCoV2 Genetic Labs](ValueSet-SARSCoV2GeneticLabs.html)
6. [SARSCoV2 Labs](ValueSet-SARSCoV2Labs.html)

#### Ventilator Value Sets
1. [Ventilator Devices](ValueSet-VentilatorDevices.html)
2. [Ventilator Observations](ValueSet-VentilatorObservations.html)
3. [Ventilator Procedures](ValueSet-VentilatorProcedures.html)

#### Patient Death
1. [Patient Died](ValueSet-PatientDeaths.html)

#### Example Value Sets for Measure Groups and Populations
1. [Measure Groups](ValueSet-MeasureGroups.html)
2. [Measure Populations](ValueSet-MeasurePopulations.html)

### Code Systems
These Code Systems have been included to illustrate creation of measures using this implementation guide.

1. [Measure Group System](CodeSystem-MeasureGroupSystem.html)
2. [Situational Awareness Measure Populations](CodeSystem-MeasurePopulationSystem.html)
3. [Measured Values in Sample Measures](CodeSystem-MeasuredValues.html)

The following Code Systems are defined elsewhere and are used in this guide.
1. [Age Range Coding System](CodeSystem-IHE-ADX-agerange.html)

### Concept Maps
This Concept Map provides a mapping from Location codes identified in the HAvBED2 specification
to codes found in HL7 FHIR.
1. [HAvBED2 to FHIR](ConceptMap-HAvBED2toFHIR.html)

<span id='coding-location'> </span>

### Recommended Coding Systems and Value Sets for Location.identifer
This implementation guide requires the Location resource reference by MeasureReport.subject to have both a name and an identifier. This raises the question of
the identifier and identifier system to use for geographic. While facility locations often have identifiers, larger geopolitical boundaries are identified
using codes from a [coding system](https://www.hl7.org/fhir/R4/codesystem.html), such as ISO 3166, or GIS Information standards from INCITS.

When using a Coding system value in a FHIR Identifier, the value that would normally appear in Coding.code appears in Identifier.value.
The value that would normally appear in Coding.system appears in Identifier.system.

The sections below provides a partial list of identifier systems that can be used to identify locations, with a brief description of each one.  Measure
implementers will need to select the appropriate identifier systems.

#### [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) The International Standard for country codes and codes for their subdivisions
The purpose of ISO 3166 is to define internationally recognized codes of letters and/or numbers that we can use when we refer to countries and their subdivisions.  Its use
is described in [Using ISO 3166 Country Codes with FHIR](https://hl7.org/fhir/iso3166.html) in the FHIR specification.

ISO 3166-1 provides codes for countries. When this code system is used for Location.identifier, the value of Location.identifier.system
must be set to urn:iso:std:iso:3166.

ISO 3166-2 provides codes for subdivisions of countries (i.e., states, provinces, territories or similar regions). When this code system is used for
Location.identifier, the value of Location.identifier.system must be set to urn:iso:std:iso:3166:-2.

##### ISO 3166-1 Value Sets
ISO 3166-1 provides three different codes for a country, a two letter code, a three letter code, and a numeric code. The two letter code for the US is 'US', the
three letter code is USA, and the numeric code is 840.  At most one of these codes **should** be used to identify locations at a country level.  The FHIR standard identifies
three different value sets for this use:

* http://hl7.org/fhir/ValueSet/iso3166-1-2 - ISO 3166 Part 1: 2 Letter Codes
* http://hl7.org/fhir/ValueSet/iso3166-1-3 - ISO 3166 Part 1: 3 Letter Codes
* http://hl7.org/fhir/ValueSet/iso3166-1-N - ISO 3166 Part 1: Numeric Codes

Most developers are familiar with the use of ISO 3166 as it is used in [RFC 5646 Tags for Identifying Languages](https://www.ietf.org/rfc/rfc5646.html) which prefers
use of the ISO 3166 Part 1: 2 letter codes.  Measures **should** use the two letter codes when using ISO-3166 Part 1.

#### [INCITS 31-2009[R2019]](https://standards.incits.org/apps/group_public/project/details.php?project_id=2398) Codes for the Identification of Counties and Equivalent Areas of the United States, Puerto Rico, and the Insular Areas
Establishes a structure for the assignment of identifying data codes to counties and county equivalents of the United States and its insular and associated areas,
for the purpose of information interchange among data processing systems.

#### [INCITS 38-2009[R2019]](https://standards.incits.org/apps/group_public/project/details.php?project_id=2399) Codes for the Identification of the States and Equivalent Areas within the United States, Puerto Rico, and the Insular Areas

This standard establishes a structure for the assignment of identifying codes to states and state equivalents of the United States and its insular areas.

#### [FIPS 5-2](https://web.archive.org/web/20090705054444/http://www.itl.nist.gov/fipspubs/fip5-2.htm) Codes for the Identification of the States, the District of Columbia and the Outlying Areas of the United States, and Associated Areas

This standard provides a set of two-digit numeric codes and a set of two-letter alphabetic codes for representing the 50 states, the District of Columbia
and the outlying areas of the United States, and associated areas. The standard covers all land areas under the sovereignty of the United States, the freely
associated states of Federated States of Micronesia and Marshall Islands, and the trust territory of Palau. This revision supersedes FIPS PUB 5-1 in its entirety.

Note: FIPS 5-2 was withdrawn as a US Information Processing standard in 2008 to be replaced by INCITS 31-2009, but was still used for the US 2010 census. Some Geographic
Information Systems used in the US still report the FIPS 5-2 code for a region.

#### [FIPS 6-4](https://web.archive.org/web/20090713035743/http://www.itl.nist.gov/fipspubs/fip6-4.htm) Counties and Equivalent Entities of the United States, Its Possessions, and Associated Areas.

This standard provides the names and codes that represent the counties and other entities treated as the equivalents of counties for legal and/or statistical
purposes in the 50 States, the District of Columbia, and the possessions (American Samoa, Guam, Northern Mariana Islands, Palau, Puerto Rico, and Virgin
Islands of the United States) and freely associated areas (Federated States of Micronesia and Marshall Islands) of the United States. Palau is the last
remaining component of the Trust Territory of the Pacific Islands (TTPI); for presentation purposes, Palau, rather than the TTPI, is treated as the
State-equivalent entity.

Note: FIPS 6-4 was withdrawn as a US Information Processing standard in 2008 to be replaced by INCITS 38-2009, but was still used for the US 2010 census. Some Geographic
Information Systems used in the US still report the FIPS 6-4 code for a region.

<span id='dartmouth'> </span>
#### [Dartmouth Atlas](https://atlasdata.dartmouth.edu/static/supp_research_data) Geographic Boundary Files
The Dartmouth Atlas defines three different kinds of Geographic regions in the US. These regions describe service areas and referral regions with common characteristics
based on geography and population, and are used for some forms of statistical health research. These identifiers are often found in data sets provided by geographic
information systems. Cross walks and geographic boundary files for each of these areas can be found at the link above.

##### Hospital Service Area (HSA)
An HSA is a collection of ZIP codes whose residents receive most of their hospitalizations from the hospitals in that area.
The identifier system for HSA is http://terminology.hl7.org/codesystem/dartmouthatlas/HSA.

##### Hospital Referral Region (HRR)
HRRs were defined by assigning HSAs to the region where the greatest proportion of major cardiovascular procedures were performed,
with minor modifications to achieve geographic contiguity, a minimum population size of 120,000, and a high localization index.
The identifier system for HRR is http://terminology.hl7.org/codesystem/dartmouthatlas/HRR

##### Primary Care Service Area (PCSA)
A PCSA is the smallest geographic area (identified by ZIP code) that can be considered a discrete service area for primary care.
The identifier system for PCSA is http://terminology.hl7.org/codesystem/dartmouthatlas/PCSA

#### Postal Codes
National codes used with postal systems also define geographic areas. These code systems are generally managed by national postal services.
A list of known values to use for the postal code system is provided below:

* United States [http://terminology.hl7.org/CodeSystem/USZIPCODES](https://terminology.hl7.org/1.0.0/CodeSystem-USZIPCODES.html)
* Germany [https://demis.rki.de/fhir/CodeSystem/postalCode](https://simplifier.net/Covid-19Labormeldung/postalCode)

### Identifier System Selection Guidance
For measure reporting used within a single country, systems **should** use nationally recognized standard coding systems for Location.identifier,
or if there is no such standard, ISO 3166. For measure reporting that supports reporting from multiple countries, systems **should** use ISO 3166.


---

// File: input/pagecontent/techanalysis.md

### Cross Version Analysis
{% include cross-version-analysis.xhtml %}

### Dependency Table
{% include dependency-table.xhtml %}

### Globals Table
{% include globals-table.xhtml %}

---

// File: input/pagecontent/technology_environment.md

Resource utilization data can be provided from a number of sources:

* **Systems Having Clinical Data**
  + Electronic Health Record (EHR) systems
  + Departmental Systems
    - Emergency Department (ED) systems
    - ICU and/or Nursing Central Monitoring systems (or stations)
    - Labor and Delivery systems
    - Laboratory Information Systems (LIS)
    - Picture Archival and Communication Systems (PACS)
    - Radiology Information Systems (RIS)
  + Clinical Data Repository (CDR)
  + Care Management Systems
  + Command and Control Systems
  + Master Patient Index
  + Security Infrastructure
  + Revenue Cycle Management/Billing Systems
  + Public Health Case Reporting Solutions
  + Immunization Information Systems (Immunization Registries)
  + Electronic Laboratory Reporting Solutions
* **Systems unlikely to have Clinical Data**
  + Bed Management (a.k.a., Housekeeping) systems
  + Asset Management systems
  + Surgery/Operating Room Scheduling systems
  + Workforce Management/Staff Scheduling systems
  + Inventory Control systems
<figure>
{%include technology-environment.svg%}
</figure>

## Systems Having Clinical Data
Systems in this category have access to some or all of the health records (problems,
medications, lab results, procedures, etc.) for a patient, and so can often provide information
indicating COVID-19 positive or suspected patients, as well as associated problems, patient
demographics, and patient acuity (severity of illness) data.

These systems are often used to place or discontinue orders that involve medical
equipment or diagnostics (ventilators, viral tests), and so may be used to determine in use (in
the case of ventilators) or consumed (in the case of test kits) equipment or
supplies.  Some orders might also indicate use of special equipment (e.g., isolation
rooms).

### EHR Systems
Comprehensive Hospital EHR solutions may include the capabilities of the other systems
listed above, or may be integrated with other systems but not have direct access
to all data available to the other systems. Even when those capabilities are available
in the comprehensive EHR solution, other solutions may still be chosen by the facility
for a variety of reasons (features, cost, legacy, et cetera).

An EHR may have access to beds in use (because it has access to the active patient
census), but may not be able to report status of beds as known by the bed management
or housekeeping system (e.g., beds available for use, beds needing cleaning, beds
taken out of or added into service, et cetera).

An EHR may also be able to make an educated guess about number of ventilators in use
based on the number of orders for ventilation on the patients it knows about, and the
current status of the order.  But it may not ever know if the ventilator actually
showed up.

### Departmental Systems
Departmental systems are specialized "EHR" systems facilitating the operations of a
departmental setting. Several departmental systems are described in more detail in subsections
below.

#### Emergency Department Systems
Emergency department systems are simply specialized EHR systems that facilitate patient
care in an emergency room setting.  They may also support or be integrated with central
monitoring solutions enabling ED staff to monitor the status of patients on monitoring
equipment.

#### Labor and Delivery Systems
Labor and Delivery systems are another form of specialized EHR system that facilitate
treatment of mothers about to give birth in the hospital.  They generally support the
ongoing monitoring of the pregnant mother, and integrate with specialized equipment
used to support newborn delivery (e.g., fetal heart rate monitors, infusion pumps used
for anesthesia, et cetera), as well as routine charting while a mother is still in labor
but not yet ready to deliver.

#### ICU/Central Monitoring Systems
These systems bring real-time data from the EHR together with a variety of monitoring
and treatment equipment, often to provide clinical decision support for patients
needing intensive ongoing treatment and monitoring.  As a result, these systems have
awareness of the use of medical equipment (e.g., ventilators), patient acuity,
disease progression, as well as the in-use status of ICU beds, and perhaps the total
bed capacity of an ICU (but not necessarily the availability).

#### Laboratory Information Systems (LIS)
These systems are used to track and control incoming laboratory orders, to manage
laboratory automation equipment, and to manage outgoing reports on orders.  They have
some access to patient clinical and demographic data, usually enough to facilitate the
interpretation of the laboratory test, but may not have access to more data.  Some
data available in an LIS might be used to assess patient acuity, but the EHR would
be a better source of this assessment.

An LIS may also be connected to external public health reporting systems to support
biosurveillance efforts (tracking of disease in populations).  Just the placement of
certain kinds of laboratory orders may be used as a trigger to initiate alerting to
public health (e.g., highly contagious disease such as COVID-19, Ebola or Zika, or a condition
which may indicate a high risk situation in the community such as food poisoning).

Past biosurveillance efforts have not generally considered the impact of disease (such
as COVID) on available beds, but the impact of COVID on hospital bed capacity has now
made this a significant consideration.  Some organizations do use data from internal
laboratory information systems to track the prevalence, type and locations associated
healthcare acquired infections (HAI) (e.g., due to antibiotic resistant strains of
bacteria), in order to provide appropriate treatment and infection mitigation precautions.

#### Picture Archival and Communication Systems (PACS)
Within an imaging center or department, the PACS provides storage for images generated
from various imaging procedures (CT, MRI, Ultrasound, X-Ray, et cetera) and in some
solutions, the diagnostic reports (structured or unstructured) that are generated
based on those images.

These systems will generally be aware of the types of imaging studies performed, the
patients on whose behalf these studies were performed, the dates and times of the
procedure, and possibly the results (in structured reports) of the study.

#### Radiology Information Systems (RIS)
These RIS is a departmental systems used in imaging centers or departments to manage
the imaging workflow in the department.  The RIS provide a means by which imaging procedures
are scheduled and coordinated across the necessary equipment, personnel (e.g., imaging
technicians, reading radiologists), and patients, and through which orders are received, and
results transmitted back to ordering providers.

These systems will generally be aware of the procedures being requested, the results
of those procedures, the dates and times of those procedures, and the number and types
of procedures performed on behalf of different parties (e.g., ordering physicians
and organizations).
#### Care Management Systems
Care Management Systems support referral and transition between the hospital and follow-up
care environments (e.g., post-acute care, rehabilitation referrals), or referrals to other types of care
(tertiary care from ED, referral to behavioral health, etc.).  These are often used to
support discharge/transfer planning, and may also involve coordination with payers to
ensure treatment will be covered at the referred to facility.

### Command and Control Systems
Command and Control Systems are used to provide a view throughout a facility of the
overall operations, including patient flow, transfers, ED, et cetera, allowing a facility
to understand its current load, forecast capacity demand, and manage logistics.  See
[Operational Command Centers](https://klasresearch.com/resources/blogs/2019/01/10/operational-command-centers)
for more details.

### Clinical Data Repository (CDR)
Hospitals (especially those affiliated with academic medical centers) utilized CDRs
for long term storage of clinical data to support analysis, research, measurement and
quality improvement efforts.

CDRs may have information about the long term impacts of disease, treatment procedures
and other factors on hospital operations might be used to aid research, but do not
generally have real-time data that could support utilization reporting.  Some of the
data in a CDR might show impacts of high utilization on hospital operations, which could
aid in identifying and addressing long term monitoring efforts.

### Revenue Cycle Management/Billing Systems
These systems maintain data used for billing, often gathered after treatment has been
completed.  This includes diagnoses, procedures, and other aspects of treatment for
which some form of payment or compensation or reporting is performed.

## Systems Not Having Clinical Data
Systems in this category do not generally have access to detailed health records for a patient,
but may have information about the status of hospital equipment and supplies, or generalized
information about a patient or group of patients.

### Security Infrastructure
Security infrastructure systems are relied upon by many software components within a
hospital, and are potentially able to deliver information about who is actively using
hospital resources (e.g., logged into the EHR or other information system), or which
patient records are currently being accessed.

### Master Patient Index
The Master Patient Index (MPI) is used by health systems to coordinate patient identities
across multiple information systems. It generally has information
Since many systems within a hospital rely on an MPI, it is often the first system to
become aware of activity for any given patient.

The MPI will generally have information about a patient including demographics, place
of residence, place of employment, insurers, and potentially other providers and/or
sources of information available that are associated with a given individual.

### Bed Management (a.k.a. Housekeeping) systems
Bed Management systems are designed specifically to keep track of the status of beds
as it impacts the operations of the housekeeping in a facility.  After a patient is
discharged, the bed and room in which they resided need to be cleaned, special precautions
may be needed when rooms have been contaminated (exposed to blood, or infectious organism),
et cetera. These systems may also have operational data about ongoing bed turnaround
time (e.g., from unoccupied to available for use) which can also impact availability.

In smaller hospitals, the classic method of bed management is a bed board, which can
be as simple as a whiteboard with a table drawn on it, with room numbers, more complex
systems might use a magnetic board with pretty colored magnets. Modern bed boards get
really fancy, with ward layouts and color codes, and all sorts of bells and whistles
and reports and graphs.

### Asset Management systems
Asset management systems usually involve solutions that enable a facility to manage
equipment inventory, tags that can be attached to equipment for tracking, and sensors
that can detect nearby tags deployed in the hospital environment.  Sensors typically
need to be connected in some way to the hospital network, and the tags need to be able
to operate in a radio-frequency and sound and barrier rich environment.  This is combined
with mapping software which can plot the location of a device in a facility (in 3
dimensions).

A typical small hospital might have 10 ICU beds.  With an average ventilator utilization
ranging somewhere between 15-45% (see https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3840149/),
a facility could reasonably get by with a half dozen or so ventilators for the ICU.
Under **normal** circumstances, such a small number would be reasonably managed with manual
processes, and for that reason, many facilities may not use asset management systems
to track ventilator locations.

### Surgery/Operating Room Scheduling systems
In certain crises, the availability of an open OR for a patient needing immediate emergency
surgery would be a critical piece of facility resource utilization data.  Operating
rooms use a variety of complex, expensive medical equipment and resources.  Hospitals
that want to optimize use of these spaces and equipment will use information systems designed to
ensure greater utilization of available capacity.  These systems will be aware of the
availability of operating room schedules and equipment needs.

### Workforce Management/Staff Scheduling systems
Workforce Management (a.k.a., Staff scheduling) in a hospital is an ongoing effort of looking at
current patient load, forecast load, existing staff schedules and available surge staffing resources.
Again, in smaller facilities, much of the essential management might be done through
human effort, and on a whiteboard. In larger facilities, software might be used to address
optimization of schedules, improving staff utilization.

### Inventory Control systems
Inventory control systems are used to track expendable supplies, and manage replenishment
and distribution across the facility.  These systems may have information about available
supplies such as surgical and N95 masks and personal protective equipment (PPE) that is
frequently replaced.  But these systems don't always automate the counting process that is
often needed to track current inventory levels for this kind of equipment.


---

// File: input/pagecontent/test_plan.md

Overall this guide provides an API between [multiple actors](actors.html#actor-options), and
[Transactions types](transactions.html). The tests that can be executed are limited to the functionality
of the system-under-test (SUT), and the transaction type it implements. Where that SUT has a specific
function, it can be tested.

### Test Plan

The following is the overall test plan for this guide:
* Unit Tests -- automation of testing of the actor alone using a simulator and validator tool
* Integration Tests -- automation of actors interacting through defined communications mechanism
* Validation Tests -- user expectation based testing

<a name="actors"></a>
Tests below support testing for the following actors:
  * [Measure Source](actors.html#measure-source) publishes MeasureReport content
  * [Measure Consumer](actors.html#measure-consumer) consumes MeasureReport content
  * [Measure Computer](actors.html#measure-computer) automates creation of MeasureReport content from a Measure
  * [Measure Definition Source](actors.html#measure-definition-source) provides Measure resource content
  * [Measure Definition Consumer](actors.html#measure-definition-consumer) consumes Measure resource content
  * [Measure Intermediary](actors.html#measure-intermediary) consumes MeasureReport resource from one system as a
  MeasureConsumer and provides (possibly transformed) content to a second system as a MeasureSource.

### Measure Source
The Measure Source reports results for a single facility, results for a collection of facilities, or aggregated data for a region.

#### Measure Source Preparation
1. Be able to produce a MeasureReport resource for the [example Measure](Measure-ComputableCDCPatientImpactAndHospitalCapacity.html).
2. Load realistic sample data into your system to populate a MeasureReport.
3. These data should be sufficiently distinctive that you can recognize them in a MeasureReport or in someone else's system.
4. If you're doing the publication scenario, have a client that can do a [MeasureReport create](transaction-1.html).
5. If you're doing the retrieval scenario, have a server that can respond to a [MeasureReport search](transaction-2.html).

#### Measure Source Success Criteria
* For the publication scenario, the MeasureReport based on the sample data is created at a Measure Consumer system.
* For the retrieval scenario, the MeasureReport based on the sample data is available for retrieval at the Measure Source.

### Measure Consumer
The Measure Consumer provides access to aggregated or fine-grained data gathered from one or more Measure Sources.

#### Measure Consumer Preparation
1. Be able to parse a MeasureReport resource for the example Measure and store it in your system.
2. If you are doing the publication scenario, have a server that can accept a [MeasureReport create](transaction-1.html).
3. If you are doing the retrieval scenario, have a client that can initiate a [MeasureReport search](transaction-2.html).

#### Measure Consumer Success Criteria
* For the publication scenario, a MeasureReport is created on a Measure Consumer system.
* For the retrieval scenario, the MeasureConsumer is able to retrieve the MeasureReport based on the sample data from the Measure Source.

### Measure Definition Source
Measure Definition Source providing Measure resources to a Measure Definition Consumer.

#### Measure Definition Source Preparation
1. Prepare two versions of the same Measure (an original version and one with corrections).
2. Be able to distribute the original version and support retrieval via a [Measure search](transaction-3.html).
3. Be able to Update the original version with the corrected version, again supporting retrieval via [Measure search](transaction-3.html).

#### Measure Definition Source Success Criteria
* The original Measure is available for retrieval by the Measure Definition Consumer actor at the Measure Definition Source.
* The updated Measure is available after correction for retrieval by the Measure Definition Consumer actor at the Measure Definition Source.

### Measure Definition Consumer
Measure Definition Consumer queries for new and updated Measure resources to act upon.

#### Measure Definition Consumer Preparation
1. Be able to read and search for a Measure resource using [Measure read and search](transaction-3.html).

#### Measure Definition Consumer Success Criteria
* The original Measure can be searched for and read by the Measure Definition Consumer from a Measure Definition Source.
* The updated Measure can be accessed after publication at the Measure Definition Source by the Measure Definition Consumer.

### Measure Computer
The Measure Computer is a combination of a Measure Definition Consumer and a Measure Source that can evaluate a Computable Measure against a FHIR Server.

#### Measure Computer Preparation
1. Prepare as for Measure Definition Consumer and Measure Source above.
2. Be able to connect to a FHIR Server containing test patient data (see [Automation Test Data](index.html#automation-data)).
3. Compute the measure from the data in the FHIR Server and prepare a report from it via an internal trigger or the [Measure/$evaluate-measure](OperationDefinition-Measure-evaluate-measure.html) operation.
4. If you are doing the publication scenario, store the MeasureReport using [MeasureReport create](transaction-1.html), or
5. If you are doing the retrieval scenario, enable retrieval of it using [MeasureReport search](transaction-2.html).

#### Measure Computer Success Criteria
* The current Measure is retrieved from a Measure Definition Consumer.
* A MeasureReport is computed from the current Measure provided.
* The MeasureReport matches the expected values based on the test data.
* The MeasureReport is created and made available to a MeasureConsumer via publication or retrieval.
* When the Measure is changed, a new report is created.
* The updated report matches the expected test values based on the test data.

### Measure Source using CSV Option
The Measure Source using CSV Option reports results for a single facility, or a collection of facilities using files in Comma Separated Value format.

#### Measure Source using CSV Option Preparation
1. Be able to convert one or more MeasureReport resources into CSV format for the example Measure.
2. Load realistic sample data into your system to populate a CSV file. <br/>
These data should be sufficiently distinctive that you can recognize them in a MeasureReport or in someone else's system.
3. If you're doing the publication scenario, have a client that can call the [Measure/$report-csv](OperationDefinition-Measure-report-csv.html) operation.
4. Call the MeasureReport/$report-csv Operation to submit a CSV file to create one or more MeasureReport resources from the CSV format.
5. If you're doing the retrieval scenario, have a server that can respond to a [MeasureReport/$search-csv](OperationDefinition-MeasureReport-search-csv.html) and [MeasureReport/$read-csv](OperationDefinition-MeasureReport-read-csv.html) operations.
6. Respond to the MeasureReport/$search-csv Operation to retrieve one or more MeasureReport resources in CSV format.
7. Respond to the MeasureReport/$read-csv Operation to read a MeasureReport resource in CSV format.

### Measure Consumer using CSV Option
The Measure Consumer using CSV Option provides access to aggregated or fine-grained data gathered from one or more Measure Sources using files in Comma Separated Value format.

#### Measure Consumer using CSV Option Preparation
1. Be able to parse a MeasureReport resource for the CDC Measure and store it in your system.
2. Download example resources from this guide.
3. If you're doing the publication scenario, have a server that supports the [Measure/$report-csv](OperationDefinition-Measure-report-csv.html) operation.
4. Respond to the MeasureReport/$convert Operation to convert a CSV file to convert from the CSV format to one or more MeasureReport resources .
5. Respond to the MeasureReport/$report Operation to submit a CSV file to create from the CSV format one or more MeasureReport resources.
6. If you're doing the retrieval scenario, have a client that can initiate a [MeasureReport/$search-csv](OperationDefinition-MeasureReport-search-csv.html) and [MeasureReport/$read-csv](OperationDefinition-MeasureReport-read-csv.html) operations.
7. Send a MeasureReport/$search-csv Operation to retrieve one or more MeasureReport resources in CSV format.
8. Respond to the MeasureReport/$read-csv Operation to read a MeasureReport resource in CSV format.

### Integration Test Scenarios <a name="scenarios"></a>
The following integration test scenarios included in this test plan:
1. Automated Measure Computation and Reporting
2. Exchanging Updated Measure Definitions
3. Reporting in CSV Format
4. Accessing MeasureReport Resources in CSV Format
5. Generate and Store a MeasureReport
6. Query for MeasureReport Resources
7. Forward a MeasureReport
8. Aggregate MeasureReport Resources

#### Automated Measure Computation and Reporting
A provider organization application executes the following actions in appropriate roles in the scenario.

1. Application in the role of Measure Definition Consumer retrieves (PULL) a Computable Measure (definition) from a Measure Definition Source
2. Application in the role of Measure Computer uses the Computable Measure to compute against a FHIR Server
3. Application in the role of Measure Source creates a Measure Report based on the Computable Measure, and sends (PUSH) the Measure Report to  Measure Consumer
4. A public health organization application acts as both a Measure Definition Source and a Measure Consumer
   * Measure Definition Source supports queries for a Computable Measure
   * Measure Consumer accepts Measure Reports based on a Computable Measure

##### Automated Measure Computation Preconditions
* Measure Definition Source prepopulated with a Computable Measure
* FHIR Server prepopulated with test data for computing measures

##### Automated Measure Computation Success Criteria
* Measure Report pushed to the Measure Consumer
* Computed measurements match known results for the Computable Measure applied to the provided test data
* Bonus point: Provide evidence of FHIR Path/CQL calculations<br/>
For example, identify the FHIR Patient resources in the measure report that were used to calculate the data.

#### Exchanging Updated Measure Definitions
This scenario is planned for the second cycle of testing and involves the Measure Definition Source making a new Computable Measure Definition available for use. The new Computable Measure Definition will result in at least one different calculated result in a Measure Report based on the provided test data.  This scenario otherwise follows the Automated Measure Computation and Reporting scenario

### Reporting in CSV Format <a name="csvformat"></a>
Send CSV Data to a system for reporting.

#### Reporting in CSV Format Preconditions
1. The Measure Source implements the Push and CSV options
2. The Measure Source has measure data loaded to support the Measure being reported.
3. The Measure Consumer implements the Push and CSV options

#### Reporting in CSV Format Success Criteria
* When $report-csv is called, a new MeasureReport is created with appropriate values based on the CSV test data in the Measure Consumer.
* Bonus Point: The Measure Consumer and Measure Source interact using normal FHIR Create or Update operations, but with a mime type or _format value of csv, application/csv, or text/csv and the CSV formats are used instead of a FHIR Resource.

### Accessing MeasureReport Resources in CSV Format
A Measure Consumer implementing the CSV and Pull options queries a Measure Source implementing the CSV and Pull options to retrieve resources in CSV format.


#### Accessing MeasureReport Resources in CSV Format Preconditions
1. The Measure Source implements the Pull and CSV options
2. The Measure Source has MeasureReport resources loaded to support the Measure resource being reported upon.
3. The Measure Consumer implements the Pull and CSV options

#### Success Criteria
* The Measure Consumer calls $search-csv to find multiple matching MeasureReport resources.
* When $search-csv is called, multiple matching MeasureReport resources are reported in CSV format.
* The Measure Consumer calls $read-csv to read a single MeasureReport resources.
* When $read-csv is called, the identified MeasureReport resource is provided in CSV format.
* Bonus Point: The Measure Consumer and Measure Source interact using normal FHIR Search and FHIR Read operations, but with a mime type or _format value of csv, application/csv, or text/csv and the CSV formats are returned.

### Generate and Store a MeasureReport <a name="genstore"></a>

A Measure Source generates a MeasureReport for the CDC Measure resource (available as part of a ZIP with multiple example resources) using realistic sample data from its system.  Participants manually transmit this MeasureReport by whatever means are expedient.  A Measure Consumer consumes the MeasureReport and stores the measure data.

#### Generate and Store a MeasureReport Preconditions
* The Measure Source system is preloaded with whatever data it needs to populate the MeasureReport.

#### Generate and Store a MeasureReport Preconditions
* The Measure Source calls the create operation on a MeasureReport
* The Measure Consumer has the Measure Source's data stored in its system.
* The Measure Source calls the update operation on a MeasureReport
* The Measure Consumer has the Measure Source's updated data stored in its system.

### Produce Measure
The Measure Source creates a MeasureReport on a Measure Consumer using the [Produce Measure Transaction](transaction-2.html).

#### Preconditions:
* The Measure Source system is preloaded with whatever data it needs to populate the MeasureReport.
* The Measure Consumer's server exposes an endpoint for the MeasureReport create interaction.

#### Success Criteria:
* The Measure Consumer has the Measure Source's data stored in its system.
* Bonus Point: The Measure Consumer performs the Communicate Results transaction<br/>
This can be demonstrated by generation of a report, summary, or other artifact, or by transmission of resource availability
data or some computation over it to another system.

### Query for MeasureReport Resources <a name="query"></a>
1. The Measure Consumer searches for MeasureReport resources on the Measure Source's system using the [Query Measure Transaction](transaction-1.html).
2. The Measure Consumer reads a single MeasureReport.


#### Query for MeasureReport Resources Preconditions
* The Measure Source system is preloaded with whatever data it needs to populate the MeasureReport.
* The Measure Source and Measure Consumer agree
* The Measure Consumer's server exposes an endpoint for the MeasureReport create interaction.

#### Success Criteria
* The Measure Consumer performs a search operation meeting the requirements of the Query Measure Transaction.
* The Measure Source returns the correct results for the search.
* The Measure Consumer performs a read operation meeting the requirements of the Query Measure Transaction.
* The Measure Source returns the correct results for the read.
* Bonus Point: The Measure Consumer uses _include to read referenced resources, and the Measure Source correctly handles the _include values.

### Forward a MeasureReport <a name="forward"></a>
1. Acting as a Measure Consumer, the Measure Intermediary obtains one MeasureReport resource following the steps of either
   1. Query for MeasureReport OR
   2. Generate and Store a MeasureReport
2. Acting as a Measure Source, the Measure Intermediary makes that MeasureReport resource available to a second Measure Consumer following the steps of either
   1. Generate and Store a MeasureReport OR
   2. Query for MeasureReport


#### Forward a MeasureReport Preconditions
As for Query for MeasureReport and Generate and Store a MeasureReport where the Measure Source is a different system for
these two steps

#### Forward a MeasureReport Success Criteria
* A MeasureReport is obtained from a first measure source
* The MeasureReport is communicated to a second measure source

### Aggregate MeasureReport Resources <a name="aggregate"></a>
A Measure Intermediary is able to aggregate multiple MeasureReport resources:
1. Over a period of time, turning 7 daily reports into a weekly report for different types of Measures (count, point-in-time, and cumulative).
2. Over multiple sites, turning MeasureReport resources from multiple facilities in the same region to a MeasureReport describing the region.
3. Within a facility, collecting data from several reporting systems into a singular MeasureReport containing data from all systems.

#### Aggregate MeasureReport Resources Preconditions
1. MeasureReport resources are available from a single facility covering a period of 7 consecutive days for different types of Measures (count, point-in-time, and cumulative).
2. MeasureReport resources are available from multiple facilities within a region (e.g. Cook County, IL, the State of Rhode Island).
3. MeasureReport resources for the same measure and time period are available within a single facility, covering different sets of data.

#### Aggregate MeasureReport Resources Preconditions
1. A MeasureReport is created where data is aggregated appropriately for different the measure types in the MeasureReport resources.
2. A MeasureReport resource is communicated to a MeasureConsumer that contains a consolidated report across facilities.
3. A MeasureReport resource is created that contains a consolidated report within a single facility having appropriate values.

### Unit Test Procedures <a name="unittest"></a>
Unit Tests in this context is where a system under test is tested against a simulator or validator.  A simulator is a
implementation of an actor that is designed specifically to test the opposite pair actor. The simulator
might be a reference implementation or may be a specially designed test-bench. Where a reference
implementation is used the negative tests are harder to simulate. A validator is a implementation
that can check conformance. A validator may be a simulator, but may also be a standalone tool used
to validate only a message encoding. Some reference implementations may be able to validate to a
StructureDefinition profile, but often these do not include sufficient constraints given the
overall actor conformance criteria.

### Unit Testing
Unit Tests for Measure Source and Measure Definition Source actor test that these actors can produce valid content.

##### Positive Test Scenarios
* Provide a CapabilityStatement resource with indications of support of the SANER Measure Source or Measure Definition Source actors
* Test output from Measure Source or Measure Definition Source is valid
  * Validate content to the StructureDefinition for Measure Source
    * [PublicHealthMeasureReport](StructureDefinition-PublicHealthMeasure.html)
	* [PublicHealthMeasure](StructureDefinition-PublicHealthMeasureReport.html)
  * Validate content to the StructureDefinition for Measure Definition Source
    * [PublicHealthMeasure](StructureDefinition-PublicHealthMeasureReport.html)
    * [PublicHealthMeasureLibrary](StructureDefinition-PublicHealthMeasureLibrary.html)
* Test output from Measure Source or Measure Definition Source is accurate to expected values published
* Verify that audit events exist and conform to the profiles in this guide.

##### Negative Test Scenarios
Negative tests are deliberate deviations from "happy path". They would not all be failure-modes. They must
all be handled gracefully in a way appropriate to the SUT functionality.
* Measure Intermediary or Measure Consumer returns failure-mode, Measure Consumer handles failure gracefully

#### Measure Consumer
Unit Tests for Measure Consumer actor test that it can consume valid and invalid content robustly.

##### Positive Test Scenarios
* Measure Consumer provides a CapabilityStatement indicating support of the Measure Consumer actor
* Submit sample measures from SANER examples are consumed and made available in the Measure Consumer as expected by system functionality
  * [Public Health Measure Examples](StructureDefinition-PublicHealthMeasure-examples.html)
  * [Public Health Measure Report Examples](StructureDefinition-PublicHealthMeasureReport.html)
* Verify that audit events exist and conform to the profiles in this guide.

##### Negative Test Scenarios
Negative tests are deliberate deviations from "happy path". They would not all be failure-modes. They must all be
handled gracefully in a way appropriate to the SUT functionality.
* Submit a non-FHIR data (random data)
  * The receiver should fail (except in the case where allowances have been made for CSV conversion).
* Submit a valid FHIR Observation (from FHIR core in one of the examples)
  * e.g., http://hl7.org/fhir/R4/observation-example-f001-glucose.html
  * The receiver should fail, as the resource does not meet the expectations from the API.
* Submit a valid FHIR Measure that is not SANER compliant (e.g. one of the Measure examples in the Core FHIR specification).
  * e.g., http://hl7.org/fhir/R4/measurereport-cms146-cat3-example.html
  * The receiver may succeed or fail.  If the receiver as a FHIR Server, it would generally accept resources for a wide variety of use
    cases.  A receiver designed specifically to support only those capabilities defined by this guide may reject the submission because
    it does not meet the business rules associated with the use of this endpoint.


---

// File: input/pagecontent/transaction-1.md

_This section describes the PULL-TX of this guide. This transaction is used by the Measure Source and Measure Consumer actors.

### Scope

The Query Measure transaction allows a Measure Consumer to
periodically query about the availability of a resource from an Measure Source.


This transaction enables a MeasureConsumer actor to access Measure, MeasureReport, Location and Organization
resources from a MeasureSource actor. It defines the query parameters that the actors **shall** and **should** support for search,
and the read operations that **shall** be supported.


### Actors Roles
<figure>
{% include transaction-1-uc.svg%}
</figure>


**Table 2.1-1: Actor Roles**

|Actor|Role|
| ------ | ------- |
|[Measure Source](actors.html#measure-source)|Reports on selected data in response to a query.|
|[Measure Consumer](actors.html#measure-consumer)|Collects data for reporting|
{:.grid}

### Referenced Standards


**Table 3.71.3-1: Referenced Standards**
|Standard|Name|
|---|---|
|FHIR-R4|[HL7 FHIR Release 4.0](http://www.hl7.org/FHIR/R4)|
|RFC-7230|[Hypertext Transfer Protocol - HTTP/1.1](https://ietf.org/rfc/rfc7230.html)|
|NDJSON|[Newline Delimited JSON](http://ndjson.org/)|
{:.grid }

### Interactions

<figure>{% include transaction-1-seq.svg%}
<figcaption>Figure 2.1-2: Query Measure Interactions</figcaption>
</figure>


#### Search Request

##### Trigger Event - Reporting Period Elapsed

The current reporting period has elapsed.


See the [Reporting Period](StructureDefinition-ReportingPeriod.html) extension


##### Message Semantics

The Measure Consumer sends a query
using an HTTP GET or POST transaction to the Measure Source requesting information on
available resources.


The following are general requirements of the interaction.


1. **Server Business Rules**.
A server may implement business rules that restrict the combinations of parmeters that may be used in a search in order to ensure appropriate performance. For example, when searching for a MeasureReport, a server may require the presence of the measure or _id parameters, and may require other parameters to restrict the size of the query. For example, it may require the use of a location parameter, or a date range for the measure period, in order to limit the results that may be returned. 
A client can expect that a server will return results on a query for a MeasureReport given a measure and a date range.


2. **Formats**. 
All servers **shall** support the _format parameter for any read or search and the standard values defined by FHIR for JSON and XML output. This value **shall** override the Accept: header when present in an exchange. Servers **shall** also support the Accept: header, and **shall** support any value in Accept: that can be given to _format for consistency. Servers are also free to support other output formats (e.g. turtle as defined in the base FHIR specifications, or other formats such as CSV which might be easier for clients to present or use). Servers should support other commonly used expressions representing JSON or XML outputs without complaint, including those specified in prior releases (e.g., the DSTU2 application/xml+fhir or application/json+fhir types that have since changed in R4).



|Parameter|Cardinality|Measure Source Expectation|Measure Consumer Expectation|
|---|---|---|---|
|_format=application/fhir+xml\|application/fhir+json|0..1|**shall**|**shall**|
|_format=xml\|json\|text/xml\|application/json\|application/xml\|application/xml+fhir\|application/json+fhir|0..1|**should**|**should not**|
|Accept:=application/fhir+xml\|application/fhir+json|0..1|**shall**|**shall**|
|Accept:=xml,json\|text/xml\|application/json\|application/xml\|application/xml+fhir\|application/json+fhir|0..1|**should**|**should not**|
{:.grid }
3. The server **shall** support the _count parameter for queries. Servers **should** use a default value for _count if no value is provided to avoid server overloading. This guide recommends a default value of 100 based on existing implementation experience.

|Parameter|Cardinality|Measure Source Expectation|Measure Consumer Expectation|
|---|---|---|---|
|_count|0..1|**shall**|**shall**
{:.grid }
4. **Include Support**. 
To reduce transaction overhead, a client system may wish to retrieve all the resources referenced by the selected resource when obtaining it. This can be accomplished by using a search with an _id parameter, combined with
_include=\*.
This guide does not further specify specify resource includes beyond required support for \*.
Systems that support _include generally handle _include=*, in fact, in some ways it is easier to implement than more selective _include operations. Recursive includes can be a source of server loading issues, as an incorrectly implemented include with recursive includes could wind up retrieving far more data than the client expected. Thus, these are not recommended.



| Parameter| Cardinality | Measure Source Expectation | Measure Consumer Expectation |
|----------------------|-------------|-----------------------------|-------------------------------|
| _include=* | 0..1 | **shall** | **shall** |
| _include:iterate |  | **should not**| **should not**|
{:.grid }

###### Read on Required Resources

A client **shall** be able to read individual resources that are returned or referenced within resources returned by a query. Since MeasureReport references at the very least, Measure, Organization, and Location these **shall** all be able to be read.

The server **shall** support the FHIR read operation on the Location, MeasureReport, Measure and Organization resources.

###### Read in CSV Format

Read a given MeasureReport using the CSV Format. See [CSV Conversion](CSV_Conversion.html) for details.

The client **may** support the FHIR \$read-csv operation on the MeasureReport resource with the following parameters.
The server **shall** demonstrate the FHIR \$read-csv operation on the MeasureReport resource with the following parameters.

1. **Convert Instance**

| Parameter | Cardinality | Measure Source Expectation | Measure Consumer Expectation |
|---|---|---|---|
| map | 0..* |  |  |
| return | 1..1 |  |  |
{: .grid}

###### Search in CSV Format

Search Measure Report resources using the CSV Format. See [CSV Conversion](CSV_Conversion.html) for details.

The client and server **shall** support the FHIR $search-csv operation on  the MeasureReport resource with the following parameters.

1. **Search Instances**

|Parameter|Cardinality|Measure Source Expectation|Measure Consumer Expectation|
|----|----|----|----|
|_lastUpdated |0..2 |**SHALL** |**SHALL**|
|date |0..2 |**SHALL** |**SHALL**|
|period |1..2 |**SHALL** |**SHALL**|
|measure |1..* |**SHALL** |**SHALL**|
|measure.title |0..* |**SHOULD** |**SHOULD**|
|subject |0..* |**SHALL** |**SHALL**|
|subject:identifier |0..* |**SHALL** |**SHALL**|
|subject:Location.near |0..1 |**SHOULD** |**SHOULD**|
|reporter |0..* |**SHALL** |**SHALL**|
|reporter:identifier |0..* |**SHALL** |**SHALL**|
|map |0..* |||
|return |1..1 |||
{:.grid }


###### Search by _id on Required Resources
The server **shall** support the FHIR search operation on  the Location, MeasureReport, Measure and Organization resources with the following parameters.

1. **Search by _id**. 
A client **shall** be able to read individual resources that are returned or referenced within resources returned by a query. Client systems may save resource references for future use, retrieving them later as needed. To reduce overhead, a client system may also wish to retrieve the resources referenced by the selected resource. This can be accomplished by using a search with an _id parameter, combined with _include=\*


|Parameter|Cardinality|Measure Source Expectation|
Measure Consumer Expectation|
|---|---|---|---|
|_id|1..*|**shall**|**shall**
###### Search by name or identifier on Referenced Resources
The MeasureSource **shall**demonstrate the FHIR search operation on  the Location and Organization resources with the following parameters.

1. **Search by name or identifier**.  
A client **shall** be able to read resources that are referenced within resources returned by a query by name or identifier.

|Parameter|Cardinality|Measure Source Expectation|Measure Consumer Expectation|
|---|---|---|---|
|name|0..*|**shall**|**shall**|
|identifier|0..*|**shall**|**shall**|
{:.grid}
###### Search on Definition Resources

A client system **shall** be able to retrieve the data they need, be it about beds, ventilators, PPE, or other measure.

Measures can be identified by codes used in the measure, or by the measure title, its canonical URL, or by something easier for a user to recall, such as the text of the measure or a code within it. Multiple measures may report on the same kind of thing (e.g., beds), so retrieval by code, or by code within a value set **should** be supported. There may be multiple measures which identify the kind of thing that the client system is interested in learning more about. Search by code **should** be met by implementing the [SearchParameter-code](SearchParameter-SearchParameter-code.html) search parameter.

However, search by code is not supported by default by many off-the-shelf systems, and so this is not a strict requirement for implementers. Also, chained searching is also not always readily available, and so search by measure title is also not a hard requirement. At the very least, a server **shall** be able to search by measure, and a client **shall** also ensure the greatest interoperability between systems with differing capabilities.

The server **shall** support the FHIR search operation on  the Measure resource with the following parameters.

1. **Search by Text or Code**.  
A client system **should** be able to search for Measure or other definition resources
associated with by text within the definition. This requirement can be met through support of the
[_text or _content search parameters](http://hl7.org/fhir/search.html#text) </a>, or by implementation
of the [definition-text SearchParameter](SearchParameter-SearchParameter-definition-text.html).


Parameter|Cardinality|Measure Source Expectation|Measure Consumer Expectation|
|---|---|---|---|
|_text |0..* |**SHOULD** |**SHOULD**|
|_content |0..* |**SHOULD** |**SHOULD**|
|definition-text |0..* |**SHOULD** |**SHOULD**|
|code |0..* |**SHOULD** |**SHOULD**|
|code:in |0..* |**SHOULD** |**SHOULD**|
{:.grid}

###### Search on Required Resources
A client and server **shall** support the FHIR search operation on  the MeasureReport resource with the following parameters.

1. **Search by Date and Measure**.  
A client **shall** be able to search by Measure for relevant dates, e.g., the date of _lastUpdate of a previously retrieved resource to see if it has changed (e.g., in cases where data needs to be refreshed), the date it was reported, or the period it applies to.
In order to enable querys within a geographic region, search **shall** allow for a client to at least enumerate locations by a well defined identifier (e.g., an NPI, a HIFLD location identifier, or some other readily and publicly available facility identifier.) This enables systems to use publicly available data to identify facilities within a particular region.
Further geographic search can be enabled by chaining to location, and using the near search operation location, which allows search to be performed based on geographic coordinates and a distance measure to specify a search within a region. This enables systems without extensive geographic capabilities to come close in identifying a facility within a particular distance (some implementations e.g., HAPI, use a bounding box, rather than a circle, because it increases search efficiency).
All date searches **shall** allow a range to be specified, but need not allow more than one range. Approximate ranges are not required to be supported because server support for these is not commonly available, nor implemented in readily reproducable fashions (the definition of an approximate date can have different meanings for different servers). Simple eq, le, lt, ge, and gt **should** be sufficient to specify date ranges. 

Parameter|Cardinality|Measure Source Expectation|Measure Consumer Expectation|
|--|---|---|---|
|_text |0..* |**SHOULD** |**SHOULD**|
|_content |0..* |**SHOULD** |**SHOULD**|
|definition-text |0..* |**SHOULD** |**SHOULD**|
|code |0..* |**SHOULD** |**SHOULD**|
|code:in |0..* |**SHOULD** |**SHOULD**|

##### Expected Actions

###### Search for MeasureReport

Measure Consumer requests data from a Measure Source.

The Measure Consumer performs a FHIR Search operation to retrieve the selected resources.

#### Search Response

The Measure Source returns the requested results results.

##### Trigger Event - Resources have been requested by a Measure Consumer.

##### Message Semantics

The Measure Source responds with requested resources.

The resources will conform to the profiles for the MeasureReport, Location or Organization described elsewhere in this Implementation Guide

##### Expected Actions

###### Returns Matching Resources

The Measure Source returns the requested resource.

### Conformance

See the following CapabilityStatement resources for conformance requirements:

* [CapabilityStatement-MeasureSource-QueryMeasure-CSV-Pull](CapabilityStatement-MeasureSource-QueryMeasure-CSV-Pull.html) Defines the requirements for the Measure Source implementing the Query Measure transaction with the CSV Option and the Pull Option.
* [CapabilityStatement-MeasureConsumer-QueryMeasure-CSV-Pull](CapabilityStatement-MeasureConsumer-QueryMeasure-CSV-Pull.html) Defines the requirements for the Measure Consumer implementing the Query Measure transaction with the CSV Option and the Pull Option.
* [CapabilityStatement-MeasureSource-QueryMeasure-Pull](CapabilityStatement-MeasureSource-QueryMeasure-Pull.html) Defines the requirements for the Measure Source implementing the Query Measure transaction with the Pull Option.
* [CapabilityStatement-MeasureConsumer-QueryMeasure-Pull](CapabilityStatement-MeasureConsumer-QueryMeasure-Pull.html) Defines the requirements for the Measure Consumer implementing the Query Measure transaction with the Pull Option.

---

// File: input/pagecontent/transaction-2.md

This section describes the PUSH-TX of this guide. This transaction is used by the Measure Source and Measure Consumer actors.

### Scope

The Produce Measure transaction allows an Measure Source to periodically report on availability of resources to a Measure Consumer.


This transaction defines the create and update operations that a MeasureConsumer and MeasureSource actor **shall** support.


### Actors Roles
{% include transaction-2-uc.svg%}

**Figure 2.2-1: Produce Measure Use Case Diagram**
|Actor|Role|
| ------ | ------- |
|[Measure Source](actors.html#measure-source)|Periodically generates data for a Measure Consumer.|
|[Measure Consumer](actors.html#measure-consumer)|Collects data for reporting|
{:.grid}

### Referenced Standards


Table 3.71.3-1: Referenced Standards
|Standard|Name|
|---|---|
|FHIR-R4|[HL7 FHIR Release 4.0](http://www.hl7.org/FHIR/R4)|
|RFC-7230|[Hypertext Transfer Protocol - HTTP/1.1](https://ietf.org/rfc/rfc7230.html)|
|NDJSON|[Newline Delimited JSON](http://ndjson.org/)|
{:.grid }

### Interactions
<figure>{% include transaction-2-seq.svg%}
<figcaption>Figure 2.2-2: Produce Measure Interactions</figcaption>
</figure>


#### Push Measure

##### Trigger Event - Reporting Period Elapsed

The current reporting period has elapsed, or the operation is triggered by automation (e.g. for manual testing, diagnostics or error recovery).

See the [Reporting Period](StructureDefinition-ReportingPeriod.html) extension.


##### Message Semantics

A MeasureReport is created or updated by the MeasureSource on the MeasureConsumer.

The MeasureReport sends a MeasureReport to the MeasureConsumer using the FHIR [create](https://www.hl7.org/fhir/http.html#create) or [update](https://www.hl7.org/fhir/http.html#update) interactions. A MeasureSource supporting the CSV option sends the CSV file to the MeasureConsumer using the $report-csv operation.


##### Expected Actions

###### Send MeasureReport Resource

The Measure Source creates resources and sends them to a Measure Consumer

The Measure Source performs the FHIR create operation on the MeasureReport resource at a Measure Consumer.


###### Aggregate MeasureReport Resources

###### Accept Resource

The Measure Consumer reports success using 200 OK, 201 Created, or 204 No Content to indicate a successful update.

### Conformance
See the following CapabilityStatement resources for conformance requirements:

* [CapabilityStatement-MeasureSource-ProduceMeasure-CSV-Push](CapabilityStatement-MeasureSource-ProduceMeasure-CSV-Push.html) Defines the requirements for the Measure Source implementing the Produce Measure transaction with the CSV Option and the Push Option.
* [CapabilityStatement-MeasureConsumer-ProduceMeasure-CSV-Push](CapabilityStatement-MeasureConsumer-ProduceMeasure-CSV-Push.html) Defines the requirements for the Measure Consumer implementing the Produce Measure transaction with the CSV Option and the Push Option.
* [CapabilityStatement-MeasureSource-ProduceMeasure-Push](CapabilityStatement-MeasureSource-ProduceMeasure-Push.html) Defines the requirements for the Measure Source implementing the Produce Measure transaction with the Push Option.
* [CapabilityStatement-MeasureConsumer-ProduceMeasure-Push](CapabilityStatement-MeasureConsumer-ProduceMeasure-Push.html) Defines the requirements for the Measure Consumer implementing the Produce Measure transaction with the Push Option.
* [CapabilityStatement-MeasureSource-ProduceMeasure-SupplementalData](CapabilityStatement-MeasureSource-ProduceMeasure-SupplementalData.html) Defines the requirements for the Measure Source implementing the Produce Measure transaction with the Supplemental Data Option.
* [CapabilityStatement-MeasureConsumer-ProduceMeasure-SupplementalData](CapabilityStatement-MeasureConsumer-ProduceMeasure-SupplementalData.html) Defines the requirements for the Measure Consumer implementing the Produce Measure transaction with the Supplemental Data Option.

---

// File: input/pagecontent/transaction-3.md

This section describes the PULL-MX of this guide. This transaction is used by the Measure Definition Source and Measure Definition Consumer actors.

### Scope

The Query Measure Definition transaction allows a Measure Definition Consumer to periodically query about the availability of a resource from an Measure Definition Source.

This transaction enables a MeasureDefinition Consumer actor to access Measure resources from a MeasureDefinitionSource actor. It defines the query parameters that the actors **shall** and **should** support for search and read operations that **shall** be supported.


### Actors Roles
<figure>
{% include transaction-3-uc.svg%}
<figcaption>Figure 2.3-1: Query Measure Definition Use Case Diagram</figcaption>
</figure>

**Table 2.3-1: Actor Roles**

|Actor|Role|
| ------ | ------- |
|[Measure Definition Source](actors.html#measure-definition-source)|Reports on available measures in response to a query.|
|[Measure Consumer](actors.html#measure-definition-consumer)|Queries for available measures and components.|
{:.grid}


### Referenced Standards
Table 3.71.3-1: Referenced Standards
|Standard|Name|
|---|---|
|FHIR-R4|[HL7 FHIR Release 4.0](http://www.hl7.org/FHIR/R4)|
|RFC-7230|[Hypertext Transfer Protocol - HTTP/1.1](https://ietf.org/rfc/rfc7230.html)|
|NDJSON|[Newline Delimited JSON](http://ndjson.org/)|
{:.grid }

### Interactions

<figure>
{% include transaction-3-seq.svg%}
<figcaption>Figure 2.3-2: Query Measure Definition Interactions</figcaption>
</figure>

#### Search Request

##### Trigger Event - A Query is Initiated by User/System

##### Message Semantics

The Measure Definition Consumer sends a query using an HTTP GET or POST transaction to the Measure Definition Source requesting information on available measures.


The following are general requirements of the interaction.

1. **Formats**.  All servers **shall** support the _format parameter for any read or search and the standard values defined by FHIR for JSON and XML output. This value **shall** override the Accept: header when present in an exchange. Servers **shall** also support the Accept: header, and **shall** support any value in Accept: that can be given to _format for consistency. Servers are also free to support other output formats (e.g. turtle as defined in the base FHIR specifications, or other formats such as CSV which might be easier for clients to present or use). Servers should support other commonly used expressions representing JSON or XML outputs without complaint, including those specified in prior releases (e.g., the DSTU2 application/xml+fhir or application/json+fhir types that have since changed in R4).

|Parameter|Cardinality|Measure Definition Source Expectation|Measure Definition Consumer Expectation|
|---|---|---|---|
|_format=application/fhir+xml\|application/fhir+json |0..1 |**shall** |**shall**|
|_format=xml\|json\|text/xml\|application/json\|application/xml\|application/xml+fhir\|application/json+fhir |0..1 |**should** |**should not**|
|Accept:=application/fhir+xml\|application/fhir+json |0..1 |**shall** |**shall**|
|Accept:=xml\|json\|text/xml\|application/json\|application/xml\|application/xml+fhir\|application/json+fhir |0..1 |**should** |**should not**|
{:.grid}

2. **Include Support**.  To reduce transaction overhead, a client system may wish to retrieve all the resources referenced by the selected resource when obtaining it. This can be accomplished by using a search with an _id parameter, combined with _include=\*.
This guide does not further specify specify resource includes beyond required support for *.
Systems that support _include generally handle _include=*, in fact, in some ways it is easier to implement than more selective _include operations. Recursive includes can be a source of server loading issues, as an incorrectly implemented include with recursive includes could wind up retrieving far more data than the client expected. Thus, these are not recommended.

|Parameter|Cardinality|Measure Definition Source Expectation|Measure Definition Consumer Expectation|
|---|---|---|---|
|_include=* |0..1 |shall |shall|
|_include:iterate ||should not |should not|
{:.grid}

3. The server **shall** support the _count parameter for queries. Servers **should** use a default value for _count if no value is provided to avoid server overloading. This guide recommends a default value of 100 based on existing implementation experience.

|Parameter|Cardinality|Measure Definition Source Expectation|Measure Definition Consumer Expectation|
|---|---|---|---|
|_count|0..1|shall|shall|
{:.grid}

###### Read on Required Resources

A client **shall** be able to read individual Measure and Library resources that are returned by a query.

The server **shall** demonstrate the FHIR read operation on  the Measure, Library, ValueSet, CodeSystem and ConceptMap resources.

###### Search by _id on Measure and Library Resources

A client **should**support the FHIR search operation on  the Measure, Library, ValueSet, CodeSystem and ConceptMap resources with the following parameters.
The server  **shall**demonstrate the FHIR search operation on  the Measure, Library, ValueSet, CodeSystem and ConceptMap resources with the following parameters.


1. **Search by _id**.  
A client **shall** be able to read individual resources that are returned or referenced within resources returned by a query. Client systems may save resource references for future use, retrieving them later as needed. To reduce overhead, a client system may also wish to retrieve the resources referenced by the selected resource. This can be accomplished by using a search with an _id parameter, combined with _include=*

|Parameter|Cardinality|Measure Definition Source Expectation|Measure Definition Consumer Expectation|
|---|---|---|---|
|_id|1..*|shall|shall|
{:.grid}

2. **Search by _url**.  
A client **shall** be able to read individual resources that are returned or referenced within a measure by the canonical url that is used to identify them. Client systems may save resource references for future use, retrieving them later as needed.

|Parameter|Cardinality|Measure Definition Source Expectation|Measure Definition Consumer Expectation|
|---|---|---|---|
|url|1..*|shall|shall|
{:.grid}

###### Search on Measure Definition Resources

Systems **shall** be able to retrieve measures needed for automation.

Measures can be identified by codes used in the measure, or by the measure title, its canonical URL, or by something easier for a user to recall, such as the text of the measure or a code within it. Multiple measures may report on the same kind of thing (e.g., beds), so retrieval by code, or by code within a value set **should** be supported. There may be multiple measures which identify the kind of thing that the client system is interested in learning more about. Search by code **should** be met by implementing the [SearchParameter-code](SearchParameter-SearchParameter-code.html) search parameter.

However, search by code is not supported by default by many off-the-shelf systems, and so this is not a strict requirement for implementers. Also, chained searching is also not always readily available, and so search by measure title is also not a hard requirement. At the very least, a server **shall** be able to search by measure, and a client **shall** also to ensure the greatest interoperability between systems with differing capabilities.

A client **should** support the FHIR search operation on the Measure resource with the following parameters.
The server **shall** demonstrate the FHIR search operation on the Measure resource with the following parameters.

1. Search by Text or Code. 
A client system **should** be able to search for Measure definitions. This requirement can be met through support of the [_text or _content search parameters](http://hl7.org/fhir/search.html#text), or by implementation of the [definition-text SearchParameter](SearchParameter-SearchParameter-definition-text.html).

|Parameter|Cardinality|Measure Definition Source Expectation|Measure Definition Consumer Expectation|
|---|---|---|---|
|_text |0..* |**SHOULD** |**SHOULD**|
|_content |0..* |**SHOULD** |**SHOULD**|
|definition-text |0..* |**SHOULD** |**SHOULD**|
|code |0..* |**SHOULD** |**SHOULD**|
|code:in |0..* |**SHOULD** |**SHOULD**|
{:.grid}


##### Expected Actions

###### Search for Measure

The Measure Definition Consumer performs a FHIR Search operation to retrieve the selected measures.

#### Search Response

The Measure Definition Source returns the requested results results.

##### Trigger Event - Resources have been requested by a Measure Definition Consumer.

##### Message Semantics

The Measure Definition Source responds with requested resources.

The resources will conform to the profile for the Public Health Measure described elsewhere in this Implementation Guide


##### Expected Actions

###### Returns Matching Measure Resources

The Measure Definition Source returns the requested resource.


### Conformance
See the following CapabilityStatement resources for conformance requirements:

* [CapabilityStatement-MeasureDefinitionSource-QueryMeasureDefinition](CapabilityStatement-MeasureDefinitionSource-QueryMeasureDefinition.html) Defines the requirements for the Measure Definition Source implementing the Query Measure Definition transaction.
* [CapabilityStatement-MeasureDefinitionConsumer-QueryMeasureDefinition](CapabilityStatement-MeasureDefinitionConsumer-QueryMeasureDefinition.html) Defines the requirements for the Measure Definition Consumer implementing the Query Measure Definition transaction.

---

// File: input/pagecontent/transaction-4.md

This section describes the COMPUTE-MX of this guide. This transaction is used by the Measure Source, Measure Consumer, Measure Computer and Data Source actors.

### Scope

The Compute Measure transaction describes the behavior of the Measure Computer actor in periodically computing
and reporting on measures.


This transaction enables automatic computing of measure reports and manual retriggering of report generation for
diagnostics or error recovery.


### Actors Roles
<figure>
{% include transaction-4-uc.svg%}
<figcaption>Figure 2.4-1: Compute Measure Use Case Diagram</figcaption>
</figure>


**Table 2.4-1: Actor Roles**
|Actor|Role|
|----|----|
|Measure Source ||
|Measure Consumer ||
|Measure Computer |Pull data for, computes and reports a measure.|
|Data Source |Responds to queries for data used to compute measures or collect supplemental data.|

### Referenced Standards

**Table 3.71.3-1: Referenced Standards**
|Standard|Name|
|---|---|
|FHIR-R4|[HL7 FHIR Release 4.0](http://www.hl7.org/FHIR/R4)|
|RFC-7230|[Hypertext Transfer Protocol - HTTP/1.1](https://ietf.org/rfc/rfc7230.html)|
|NDJSON|[Newline Delimited JSON](http://ndjson.org/)|
{:.grid }

### Interactions
<figure>
{% include transaction-4-seq.svg%}
<figcaption>Figure 2.4-2: Compute Measure Interactions</figcaption>
<figure>


#### Compute Measure


The Measure Computer computes the measure report for the current reporting period.


##### Trigger Event - Reporting Period Elapsed

The current reporting period has elapsed, or the operation is triggered by automation (e.g. for manual testing, diagnostics or error recovery).


See the [Reporting Period](StructureDefinition-ReportingPeriod.html) extension.


##### Message Semantics

The Measure Computer prepares a Measure Report.


##### Expected Actions

###### Compute Measure

When the reporting period has elapsed, or the operation is externally triggered, a MeasureReport for the specified Measure is computed from available data and the grouped MeasureSource is invoked below to store the created or updated MeasureReport resource


#### Search FHIR Resources




##### Trigger Event - Data Query

Data is needed to compute a measure.


##### Message Semantics

The Measure Computer sends a query using an HTTP GET or POST to a Data Source supporting the [FHIR Search](https://www.hl7.org/fhir/search.html) capabilities using an appropriate national implementation guide.


##### Expected Actions

###### Search for Data

Measure Computer requests data from a Data Source.


The Measure Computer performs a FHIR Search operation to retrieve the selected resources.


#### Search Response


The Data Source returns the requested data.


##### Trigger Event - Resources have been requested by a Measure Computer.

##### Message Semantics

The Data Source responds with requested resources.


The resources will conform to the profiles specified in a national or regional Implementation Guide


##### Expected Actions

###### Returns Matching Resources

The Data Source returns the requested resources.


#### Report Measure


The Measure Computer reports the newly computed measure for the current reporting period.


##### Trigger Event - MeasureReport Available

A new MeasureReport resource is available for reporting.


##### Message Semantics

The Measure Computer reports the computed result via the grouped MeasureSource actor.


##### Expected Actions

###### Send MeasureReport Resource

The MeasureSource stores the MeasureReport by creating or updating it on the MeasureConsumer


###### Accept MeasureReport Resource

The MeasureConsumer processes the MeasureReport given in the create/update interaction.


#### Query Measure


The Measure Computer responds to a query for a Measure Report with the newly computed report for the current reporting period.


##### Trigger Event - MeasureReport Requested

The Measure Consumer has requested measure reports with criteria matching the newly created report.


##### Message Semantics

The Measure Computer reports the computed result via the grouped MeasureSource actor.


##### Expected Actions

###### Store MeasureReport Resource

The MeasureSource stores the MeasureReport and is prepared to respond to queries for the MeasureReport resource by the MeasureConsumer


###### Query for MeasureReport Resource

The MeasureConsumer queries for the MeasureReport from the MeasureSource


### Conformance
See the following CapabilityStatement resources for conformance requirements:

* [CapabilityStatement-MeasureComputer-ComputeMeasure](CapabilityStatement-MeasureComputer-ComputeMeasure.html) Defines the requirements for the Measure Computer implementing the Compute Measure transaction.
* [CapabilityStatement-DataSource-ComputeMeasure](CapabilityStatement-DataSource-ComputeMeasure.html) Defines the requirements for the Data Source implementing the Compute Measure transaction.

---

// File: input/pagecontent/transaction-5.md

This section describes the REPORT-TX of this guide. This transaction is used by the Measure Consumer actors.

### Scope

The Communicate Results transaction allows users (e.g., Public Health Officials) to view current resource
availability, or other systems to access resource availability data.


### Actors Roles
<figure>
{% include transaction-5-uc.svg%}
<figcaption>Figure 2.5-1: Communicate Results Use Case Diagram</figcaption>
</figure>


|Actor|Role|
|----|----|
|Measure Consumer |Display or transmits reports using availability data|


### Referenced Standards

<table border='1' borderspacing='0'>
**Table 3.71.3-1: Referenced Standards**
|Standard|Name|
|---|---|
|RFC-7230|[Hypertext Transfer Protocol - HTTP/1.1](https://ietf.org/rfc/rfc7230.html)|

### Interactions
<figure>
{% include transaction-5-seq.svg%}
<figcaption>Figure 2.5-2: Communicate Results Interactions</figcaption>
</figure>


#### Communicate Measure


Upon completion of this transaction, resource availability data will have been communicated to a user or system. This can be demonstrated by generation of a report, summary, or other artifact, or by transmission of resource availability data or some computation over it to another system.

This requirement can be met by a Measure Consumer that consumes and displays data in a Web Browser, consumes data and transmits it in another format to a public health agency (e.g., using the CDC CSV format), or as a Measure Intermediary that consumes data from one system and communicates it to another, or transforms it and communicates it back to the original system or to another system.



---

// File: input/pagecontent/transactions.md

The transactions in this profile are summarized in the sections below.

### Query Measure

The Query Measure transaction allows a Measure Consumer to
periodically query about the availability of a resource from an Measure Source.


This transaction enables a MeasureConsumer actor to access Measure, MeasureReport, Location and Organization
resources from a MeasureSource actor. It defines the query parameters that the actors **shall** and **should** support for search,
and the read operations that **shall** be supported.


For more details see the detailed [transaction description](transaction-1.html)

### Produce Measure

The Produce Measure transaction allows an Measure Source to periodically report on availability of resources to a Measure Consumer.


This transaction defines the create and update operations that a MeasureConsumer and MeasureSource actor **shall** support.


For more details see the detailed [transaction description](transaction-2.html)

### Query Measure Definition

The Query Measure Definition transaction allows a Measure Definition Consumer to periodically query about the availability of a resource from an Measure Definition Source.


This transaction enables a MeasureDefinition Consumer actor to access Measure resources from a MeasureDefinitionSource actor.
It defines the query parameters that the actors **shall** and **should** support for search and read operations that **shall** be supported.


For more details see the detailed [transaction description](transaction-3.html)

### Compute Measure

The Compute Measure transaction describes the behavior of the Measure Computer actor in periodically computing
and reporting on measures.


This transaction enables automatic computing of measure reports and manual retriggering of report generation for
diagnostics or error recovery.


For more details see the detailed [transaction description](transaction-4.html)

### Communicate Results

The Communicate Results transaction allows users (e.g., Public Health Officials) to view current resource
availability,
or other systems to access resource availability data.


For more details see the detailed [transaction description](transaction-5.html)


---

// File: input/pagecontent/use_cases.md

The following use cases were used to identify the requirements addressed by this guide:

* [Collecting Hospital and Ventilator Measures](#collecting-hospital-and-ventilator-measures)
* [Accessing Measure Reports](#accessing-measure-reports)
* [Distributing Measure Definitions](#distributing-measure-definitions)
* [Automating Measure Computation](#automating-measure-computation)
* [Reporting Supplemental Data](#reporting-supplemental-data)


These are described in more detail in the sections that follow.


### Collecting Hospital and Ventilator Measures

This use case addresses the collection and exchange of data from several information systems in a Facility
to a centralized reporting system that communicates to Public Health. The ICU/Central Monitoring System collects data
for multiple data elements by examining messages received and data in its database, and then reports these to a Measure
Collector
within the hospital.


This use case is supported by the following

* Actors

  - [Measure Source](actors.html#measure-source)

  - [Measure Consumer](actors.html#measure-consumer)

* Transactions

  - [Query Measure](transaction-1.html)

  - [Produce Measure](transaction-2.html)

#### Collecting Hospital and Ventilator Measures Process Flow

Measure report data can come from multiple systems within a facility. For example, the CDC/NHSN Patient Impact
and Hospital Capacity Module asks for the following data elements:

1. **Patient Impact**
1. Hospitalized Patients w/ COVID-19
2. Hospitalized and Ventilated Patients w/ COVID-19
3. Patients with Hospital Onset of COVID-19
4. Patients in ED/Overflow w/ COVID-19
5. Ventilated Patients in ED/Overflow w/ COVID-19
6. Patient Deaths due to COVID-19
2. **Hospital Bed/ Intensive Care Unit (ICU)/ Ventilator Capacity**
1. Total number of available (inpatient and outpatient) beds
2. Total Acute staffed beds
3. Total Occupied Beds
4. Total ICU Beds
5. Total Occupied ICU Beds
6. Total Ventilators
7. Total Ventilators in Use


These data elements are often not available through a single system. For example, an
[ICU/Central Monitoring System](technology_environment.html#icucentral-monitoring-systems) might
have knowledge of 1.2,5 and 2.4-7 above, while the
[Bed Management System](technology_environment.html#bed-management-aka-housekeeping-systems) could report
on 2.1-3, the Hospital's [EHR](technology_environment.html#ehr-systems) is aware of 1.1, 1.3 and 1.6, and the
[Emergency Department system](technology_environment.html#emergency-department-systems) can provide
an update on 1-4.

In order to automate capture of this information, a central reporting system (e.g., a FHIR Server) can be made
available to accept partial reports for data. This data can then be aggregated from reports made by the various
information systems, and forwarded to a public endpoint for reporting.

<figure>
{% include usecase1-processflow.svg %}
<figcaption>Figure 2.3.1.1-1: Collecting Hospital and Ventilator Measures Process Flow</figcaption>
</figure>


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="GETVALUES">ICU/Central Monitoring System collects data</html:span>

   The ICU/Central Monitoring System is triggered (by request or schedule) to generate a report on ICU beds and equipment, including ventilated patients in ED/Overflow w/ COVID-19, Total ICU Beds, Occupied ICU Beds, Total Ventilators, Ventilators in Use.



1. The system collects information about ventilators outside the ICU for which the associated patient was admitted for suspected or confirmed COVID-19. It can makes the determination of suspected/confirmed COVID-19 from the DG1 segment of the ADT message it recieved regarding the patient.
2. The system counts the number of ICU beds that it has been configured to recognize and which are operational
3. The system counts the number of ICU beds that are transmitting telemetry (patient monitoring) information.
4. The system counts the number of ventilators that it has been configured to recognize and which are operational
5. The system counts the number of ventilators that are transmitting telemetry data to it in the ICU.


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="REPORTVALUES-1.5-2.4-7">ICU/Central Monitoring System Reports
on multiple data elements (measure populations)</html:span>

   Multiple collected values are aggregated into a report which is then transmitted to the Measure Collector.


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="GETHOSPITALBEDS">Bed Management System Reports
on multiple data elements (measure populations)</html:span>

   The Hospitals Bed Management System collects data for multiple data elements by examining messages recieved and data in its database, and then reports these to a Measure Collector within the hospital.



1. The Bed Management System examines master file data to count the total number of beds in the hospital, as well as those beds specifically identified as being for acute (inpatient) care. The Bed Management solution can be a component of the EHR, or as occurs in some hospital settings, a third party solution that integrates with the EHR (usually through ADT and master file
messages).
2. The bed management system counts the occupied beds (based on current state of each bed) as tracked through state changes communicated through ADT messages. The Bed Management solution might be used to support housekeeping, or to support an [electronic bedboard](https://it.johnshopkins.edu/services/applications/administrative/ebb.html) that might used by a hospital "[Bed Czar](http://www.ihi.org/resources/Pages/Changes/RealTimeDemandCapacityManagement.aspx)."


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="GETCOVID19DATA">EHR System reports on multiple data elements (measure populations)</html:span>

   The Hospital's EHR collects data for multiple data elements.



1. The EHR collects data on hospitalized patients w/ COVID-19.
2. The EHR collects data on hospitalized patients diagnosed with COVID-19 14 days after admission.
3. The EHR collects data on patient deaths due to COVID-19.


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="GETEDDATA">The ED System reports on patients in the ED and/or overflow area.</html:span>

1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="BED-STEP1">Measure Collector aggregates reports for transmission to a Public Health Agency</html:span>

   Either periodically on some schedule configured for the hospital, or upon recieving a full set of data, the Measure Collector gathers a set of results from different systems that have communicated them, putting together a complete MeasureReport for later reporting to the Public Health Agency.


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="BED-STEP3">Transmit Aggregated MeasureReport Data</html:span>

   In a "push" model, the Measure Collector sends the aggregated MeasureReport to a MeasureConsumer (e.g., a Public Health endpoint used for measure transmission).


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="BED-STEP4">A Public Health Agency queries the hospitals Measure Collector for the most recent reports.</html:span>

   As an alternative to push, the Public Health Agency can also "pull" data by querying the Hospitals "Measure Collector" endpoint (in fact, a FHIR Server with some additional features supporting aggregation). 

1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="BED-STEP5">Transmit Aggregated MeasureReport Data</html:span>

   The Measure Collector sends the aggregated MeasureReports to the requesting Public Health Agency.


### Accessing Measure Reports

A public health user queries a reporting system to report on a measure for a region.


This use case is supported by the following

* Actors

  - [Measure Consumer](actors.html#measure-consumer)

  - [Measure Intermediary](actors.html#measure-intermediary)

* Transactions

  - [Communicate Results](transaction-1.html)

#### Accessing Measure Reports Process Flow

In this use case, we see the classic "dashboard" panel, where a public health user selects a region, and one or more measures (or functions of measures) to report on, and the data is presented to them in an easy to view format.

<figure>
{% include usecase2-processflow.svg %}
<figcaption>Figure 2.3.1.2-1: Accessing Measure Reports Process Flow</figcaption>
</figure>


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="Aggregating-STEP2">Measure Intermediary aggregates data from one or Measure Sources</html:span>

   The Measure Intermediary, acting as a Measure Consumer gathers and aggregates data (possibly computing a function with other associated data) from one or more Measure Sources, and makes them available through a Measure Source interface it provides.


   The specific ordering in which gathering and aggregation is performed is not further specified by this implementation guide. It is shown as occuring before the user initiates the query here, but could also occur after. However, for many cases, geospatial systems can likely do a better job if the aggregation is done ahead of time. The application of a function to the data can enable a measure such as # of cases to be combined with other data such as population for the area to report # of cases per 10K population, or similar functions to better present data in a way that allows it to be reported using comparable scales.


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="Reporting-STEP1">User Initiates Search</html:span>

   The Public Health User navigates to a web page where collected data is reported.


   The user selects a geographic region and an issue of concern (e.g., beds, ventilators, PPE). The Measure Consumer collects the appropriate reports and displays the results.


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="Data-Collection-Step-1">Get Aggregated Results</html:span>

   The reporting system requests aggregated results from the analytics system


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="">Aggregated Results</html:span>

   The analytics system returns the aggregated results


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="">Display Results</html:span>

   The Measure Consumer displays an overview of aggregated regional results to the user, and additional links which enable navigation to finer grained or alternative displays.


   Data can be displayed as aggregated or fine-grained status information based on the current focus of the public health user. It may be shown as a map, a table, or a graph.


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="Reporting-STEP2">User refines Focus or Form of Display</html:span>

   The Public Health User selects a new form of display (e.g., Map, table or graph) or refines their focus (e.g., wider or smaller region).


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="Data-Collection-Step-2">Get Aggregated Results</html:span>

   The reporting system requests aggregated results from the analytics system


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="">Aggregated Results</html:span>

   The analytics system returns the aggregated results


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="">Display Refined Results</html:span>

   The Measure Repository modifies the users focus and reporting format


### Distributing Measure Definitions

A public health or emergency response agency distributes updated Measure definitions, a hospital or intermediary
retrieves these definitions for reporting.


This use case is supported by the following

* Actors

  - [Measure Definition Source](actors.html#measure-definition-source)

  - [Measure Definition Consumer](actors.html#measure-definition-consumer)

* Transactions

  - [Query Measure Definition](transaction-1.html)

#### Distributing Measure Definitions Process Flow

Measures created for tracking a public health emergency may be revised periodically to support changing needs. This use case supports the need to distribute updated measure definitions to organizations who report on these measures.

<figure>
{% include usecase3-processflow.svg %}
<figcaption>Figure 2.3.1.3-1: Distributing Measure Definitions Process Flow</figcaption>
</figure>



1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="Search for updated Measures">Query for New or Updated Measures</html:span>

   An organization required to report queries for for updated from one or public health or emergency response agencies to identify reporting requirements.




1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="BED-STEP5">Return matching measure specifications</html:span>

   The agency sends the new or updated definitions to the requesting reporting organization.


### Automating Measure Computation

A reporting organization (e.g., a hospital) automatically computes and reports measure data.


This use case is supported by the following

* Actors

  - [Measure Source](actors.html#measure-source)

  - [Measure Consumer](actors.html#measure-consumer)

  - [Measure Definition Consumer](actors.html#measure-definition-consumer)

  - [Measure Computer](actors.html#measure-computer)

  - [Data Source](actors.html#data-source)

* Transactions

  - [Compute Measure](transaction-1.html)

#### Automating Measure Computation Process Flow

Automating measure reporting reduces the burden on users for manual data collection. When a measure has been
automated, it
can be computed using FHIR APIs from supporting information systems provided by the organization.

<figure>
{% include usecase4-processflow.svg %}
<figcaption>Figure 2.3.1.4-1: Automating Measure Computation Process Flow</figcaption>
</figure>



1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="Check for New or Updated Measures">Query for New or Updated Measures</html:span>

   The reporting organization checks for new measures see [Distributing Measure Definitions](#distributing-measure-definitions) above.


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="ComputeMeasures">Compute Measure</html:span>

   The hospital information system collects data and computes the measures, returning a completed report.


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="GatherData">Gather Data</html:span>

   The hospital information system queries the local EHR or FHIR Server for applicable FHIR resources used in measure computation.


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="FHIRData">Returns Matching FHIR Resources</html:span>

   The local EHR or FHIR Server returns the requested data and included resources.


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="Send Measures">Send Measures to a Measure Consumer</html:span>

   The reporting organization sends the computer measure to the public health agency.


### Reporting Supplemental Data

A reporting organization (e.g., a hospital) collects and reports supplemental data with a measure report.


This use case is supported by the following

* Actors

  - [Measure Source](actors.html#measure-source)

  - [Measure Consumer](actors.html#measure-consumer)

  - [Measure Computer](actors.html#measure-computer)

  - [Data Source](actors.html#data-source)

* Transactions

  - [Compute Measure](transaction-1.html)

#### Reporting Supplemental Data Process Flow

Supplemental data enables additional data analysis to be performed. The MeasureReport itself provides the capacity to detect a signal, e.g., increased strain on institutional resources, but does not by itself enable deeper analysis with regard to level or impact of this strain. Exchange of additional data elements allow deeper analysis, as might be used to support risk adjustment, or cause or impact analysis.

Consider the case where patient comorbidities (e.g., Cardiovascular Disease, Smoking Status) are known to impact patient risk and associated complications, but where detailed analysis of these risk effects is unknown. Communication of supplemental data that include presence or absence of cardiovascuar disease, or the patient smoking status, and presence of absence of complications allows the recieving public health agencies to further analyze this data retrospectively.

In the initial stages, this analysis can be used to assess strain, by comparing the impact of comorbidities on complications over time in facilities with otherwise similar measures of utilization. In later stages, this data can be used to further assess and refine strain created by disease burden based on associated complications.

<figure>
{% include usecase5-processflow.svg %}
<figcaption>Figure 2.3.1.5-1: Reporting Supplemental Data Process Flow</figcaption>
</figure>


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="ComputeMeasures">Compute Measure</html:span>

   The hospital information system collects data and computes the measures, returing a completed report.


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="GatherMeasureData">Gather Measure Data</html:span>

   The hospital information system queries the local EHR or FHIR Server for applicable FHIR resources used in measure computation.


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="FHIRMeasureData">Returns Matching FHIR Resources</html:span>

   The local EHR or FHIR Server returns the requested data and included resources.


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="GatherSupplementalData">Gather Supplemental Data</html:span>

   The hospital information system queries the local EHR or FHIR Server for supplemental FHIR resources reported with the measure.


1. <html:span xmlns:html="http://www.w3.org/1999/xhtml" id="FHIRSupplementalData">Returns Supplemental FHIR Resources</html:span>

   The local EHR or FHIR Server returns the supplemental data and included resources.

---

// File: input/pagecontent/vocabulary.md

This page lists the ValueSets and CodeSystems defined in this guide and required for use by
conforming implementations.

### Value Sets <a name="valuesets"></a>
These Value Sets have been defined for this implementation guide.

1. [Event Context](ValueSet-EventContext.html)
2. [Measure Rate Aggregation Value Set](ValueSet-MeasureRateAggregationValues.html)
3. [Measure Scoring](ValueSet-MeasureScoring.html)
4. [Measure Status Values](ValueSet-MeasureStatus.html)
5. [Public Health Measure Attachment Types](ValueSet-PublicHealthMeasureAttachmentTypes.html)

### Code Systems <a name="codesystems"></a>
These Code Systems have been defined for this implementation guide.

1. [Measure Rate Aggregation Coding System](CodeSystem-MeasureRateAggregation.html)
2. [Public Health Measure Scoring](CodeSystem-PublicHealthMeasureScoring.html)
3. [Situational Awareness Measure Populations](CodeSystem-MeasurePopulationSystem.html)

### Recommendations for Coding Age Ranges <a name="ageranges"></a>
The IHE [Age Range Coding System](CodeSystem-IHE-ADX-agerange.html) is a coding system based on
interval encoding described in [ISO 8601 - Data elements and interchange formats](https://www.iso.org/standard/70907.html)
to encode age ranges used in measurement. Typical measures used for COVID-19 reporting stratify patients into age
groups by decade or score (20 years). The following two value sets are defined by this guide to support
stratification in this way.

1. [Age Brackets By Decade](ValueSet-DecadeAgeBrackets.html)
2. [Age Brackets By Score (20)](ValueSet-ScoreAgeBrackets.html)


---

// File: input/includes/CapabilityStatement-MeasureConsumer-API-Pull-intro.md

See <a href='actors.html#measure-consumer'>Measure Consumer</a> and the <a href='actors.html#pull-option'>Pull</a>option in Actors for details.

---

// File: input/includes/CapabilityStatement-MeasureConsumer-API-Pull-Questionnaire-intro.md

See <a href='actors.html#measure-consumer'>Measure Consumer</a> and the <a href='actors.html#pull-option'>Pull</a> and  <a href='actors.html#questionnaire-option'>Questionnaire</a>options in Actors for details.

---

// File: input/includes/CapabilityStatement-MeasureConsumer-API-Push-intro.md

See <a href='actors.html#measure-consumer'>Measure Consumer</a> and the <a href='actors.html#push-option'>Push</a> option in Actors for details.

---

// File: input/includes/CapabilityStatement-MeasureConsumer-CSV-Pull-intro.md

See <a href='actors.html#measure-consumer'>Measure Consumer</a> and the <a href='actors.html#csv-option'>CSV</a> and <a href='actors.html#pull-option'>Pull</a> options in Actors for details.

---

// File: input/includes/CapabilityStatement-MeasureConsumer-CSV-Push-intro.md

See <a href='actors.html#measure-consumer'>Measure Consumer</a> and the <a href='actors.html#csv-option'>CSV</a> and <a href='actors.html#push-option'>Push</a> options in Actors for details.

---

// File: input/includes/CapabilityStatement-MeasureConsumer-ProduceMeasure-API-Push-intro.md

See <a href='transaction-2.html'>Produce Measure</a> for details.

---

// File: input/includes/CapabilityStatement-MeasureConsumer-ProduceMeasure-CSV-Push-intro.md

See <a href='transaction-2.html'>Produce Measure</a> for details.

---

// File: input/includes/CapabilityStatement-MeasureConsumer-QueryMeasure-API-Pull-intro.md

See <a href='transaction-1.html'>Query Measure</a> for details.

---

// File: input/includes/CapabilityStatement-MeasureConsumer-QueryMeasure-API-Pull-Questionnaire-intro.md

See <a href='transaction-1.html'>Query Measure</a> for details.

---

// File: input/includes/CapabilityStatement-MeasureConsumer-QueryMeasure-CSV-Pull-intro.md

See <a href='transaction-1.html'>Query Measure</a> for details.

---

// File: input/includes/CapabilityStatement-MeasureSource-API-Pull-intro.md

See <a href='actors.html#measure-source'>Measure Source</a> and the <a href='actors.html#pull-option'>Pull</a> option in Actors for details.

---

// File: input/includes/CapabilityStatement-MeasureSource-API-Pull-Questionnaire-intro.md

See <a href='actors.html#measure-source'>Measure Source</a> and the <a href='actors.html#pull-option'>Pull</a> and  <a href='actors.html#questionnaire-option'>Questionnaire</a>options in Actors for details.

---

// File: input/includes/CapabilityStatement-MeasureSource-API-Push-intro.md

See <a href='actors.html#measure-source'>Measure Source</a> and the <a href='actors.html#push-option'>Push</a> option in Actors for details.

---

// File: input/includes/CapabilityStatement-MeasureSource-CSV-Pull-intro.md

See <a href='actors.html#measure-source'>Measure Source</a> and the <a href='actors.html#csv-option'>CSV</a> and <a href='actors.html#pull-option'>Pull</a> options in Actors for details.

---

// File: input/includes/CapabilityStatement-MeasureSource-CSV-Push-intro.md

See <a href='actors.html#measure-source'>Measure Source</a> and the <a href='actors.html#csv-option'>CSV</a> and <a href='actors.html#push-option'>Push</a> options in Actors for details.

---

// File: input/includes/CapabilityStatement-MeasureSource-ProduceMeasure-API-Push-intro.md

See <a href='transaction-2.html'>Produce Measure</a> for details.

---

// File: input/includes/CapabilityStatement-MeasureSource-ProduceMeasure-CSV-Push-intro.md

See <a href='transaction-2.html'>Produce Measure</a> for details.

---

// File: input/includes/CapabilityStatement-MeasureSource-QueryMeasure-API-Pull-intro.md

See <a href='transaction-1.html'>Query Measure</a> for details.

---

// File: input/includes/CapabilityStatement-MeasureSource-QueryMeasure-API-Pull-Questionnaire-intro.md

See <a href='transaction-1.html'>Query Measure</a> for details.

---

// File: input/includes/CapabilityStatement-MeasureSource-QueryMeasure-CSV-Pull-intro.md

See <a href='transaction-1.html'>Query Measure</a> for details.

---

// File: input/includes/Measure-CDCPatientImpactAndHospitalCapacity-intro.md

<p>This measure demonstrates reporting on bed availability and use at a facility location based on CDC/NHSN reporting requirements.</p>

<div>
<h3>Related artifacts</h3>
<ul>
<li><a href='https://www.cdc.gov/nhsn/acute-care-hospital/covid19/'>CDC/NHSN COVID-19 Acute Care Module Home Page</a></li>
<li><a href='https://www.cdc.gov/nhsn/pdfs/covid19/import-covid19-data-508.pdf'>Facility - How to Upload COVID-19 CSV Data Files</a></li>
<li><a href='https://www.cdc.gov/nhsn/pdfs/covid19/fac-analysis-qrg-508.pdf'>NHSN COVID-19 Module Analysis Reports</a></li>
<li><a href='https://www.cdc.gov/nhsn/pdfs/covid19/57.130-toi-508.pdf'>Instructions for Completion of the COVID-19 Patient Impact and Hospital Capacity Pathway (CDC 57.130)</a></li>
<li><a href='https://www.cdc.gov/nhsn/pdfs/covid19/57.130-covid19-pimhc-blank-p.pdf'>Patient Impact and Hospital Capacity Pathway Form</a></li>
<li><a href='https://www.cdc.gov/nhsn/pdfs/covid19/covid19-test-csv-import.csv'>CDC/NHSN COVID-19 Acute Care Patient Impact Reporting CSV File Template</a></li>
</div>

<div>
<h3>Definitions</h3>
<dl>
<dt>Ventilator</dt>
<dd>Any device used to support, assist or control respiration (inclusive of the weaning period) through the application of positive
pressure to the airway when delivered via an artificial airway, specifically an oral/nasal endotracheal or tracheostomy tube.
Note: Ventilation and lung expansion devices that deliver positive pressure to the airway (for example: CPAP, BiPAP, bi-level, IPPB and
PEEP) via non-invasive means (for example: nasal prongs, nasal mask, full face mask, total mask, etc.) are not considered ventilators
unless positive pressure is delivered via an artificial airway (oral/nasal endotracheal or tracheostomy tube).</dd>

<dt>Beds</dt>
<dd>Baby beds in mom's room count as 1 bed, even if there are multiple baby beds
Follow-up in progress if staffed is less than licensed.
Total includes all beds, even if with surge beds it exceeds licensed beds.</dd>

<dt>ICU beds</dt>
<dd>Include NICU (from CDC Webinar 31-Mar-2020) (outstanding question on burn unit)</dd>
</dl>
</div>

<div>
<h3>Group Definitions</h3>

<table class='grid'>
<thead>
<tr><th>Group System</th><th>Group Code</th><th>Population System</th><th>Population Code</th></tr>
</thead>
<tbody>
<tr><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasureGroupSystem</td><td>Beds</td><td><nobr/></td><td><nobr/></td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population</td><td>numTotBeds<br/>initial-population</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numBeds</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numBedsOcc</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numICUBeds</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numICUBedsOcc</td></tr>
<tr><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasureGroupSystem</td><td>Ventilators</td><td><nobr/></td><td><nobr/></td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population</td><td>numVent<br/>initial-population</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numVentUse</td></tr>
<tr><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasureGroupSystem</td><td>Encounters</td><td><nobr/></td><td><nobr/></td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numC19HospPats</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numC19MechVentPats</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numC19HOPats</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numC19OverflowPats</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numC19OFMechVentPats</td></tr>
<tr><td><nobr/></td><td><nobr/></td><td>http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues</td><td>numC19Died</td></tr>
</tbody>
</table>
</div>

---

// File: input/includes/Measure-FEMADailyHospitalCOVID19Reporting-intro.md


<p>This measure demonstrates reporting about Daily Laboratory Testing at a inpatient test sites capturing laboratory orders and results daily increase and cumulative counts.</p>

<div>
<h3>Related artifacts</h3>

<ul>
<li><a href='https://www.cms.gov/newsroom/press-releases/trump-administration-engages-americas-hospitals-unprecedented-data-sharing'>Trump Administration Engages America�s Hospitals in Unprecedented Data Sharing
<li><a href='https://www.whitehouse.gov/briefings-statements/text-letter-vice-president-hospital-administrators/'>Text of a Letter from the Vice President to Hospital Administrators</a></li>
<li><a href='https://www.aha.org/advisory/2020-03-30-coronavirus-update-administration-requests-hospitals-report-daily-covid-19'>Administration Requests Hospitals Report Daily on COVID-19 Testing Results, Bed and Ventilator</a></li>
<li><a href='https://images.magnetmail.net/images/clients/AHA_MCHF/attach/2020/March/0330/Template_for_Daily_Hospital_COVID19_Reporting.xlsx'>Template for Daily Hospital COVID-19 Reporting.xlsx</a></li>
</ul>

<div>
<h3>Group Definitions</h3>

Group System|Group Code|Population System|Population Code
------------|----------|-----------------|---------------
http://hl7.org/fhir/uv/saner/CodeSystem/MeasureGroupSystem|positiveIncreasePercent|<nobr/>|<nobr/>
<nobr/>|<nobr/>|http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population|totalOrdersIncrease<br/>initial-population
<nobr/>|<nobr/>|http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population|totalTestResultsIncrease<br/>denominator
<nobr/>|<nobr/>|http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population|positiveIncrease<br/>numerator
http://hl7.org/fhir/uv/saner/CodeSystem/MeasureGroupSystem|positivePercent|<nobr/>|<nobr/>
<nobr/>|<nobr/>|http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population|totalOrders<br/>initial-population
<nobr/>|<nobr/>|http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population|totalTestResults<br/>denominator
<nobr/>|<nobr/>|http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population|positive<br/>numerator
<nobr/>|<nobr/>|http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues<br/>http://terminology.hl7.org/CodeSystem/measure-population|rejected<br/>denominator-exclusion


---

// File: input/includes/OperationDefinition-MeasureReport-aggregate-intro.md

This operation enables multiple reports to be aggregated:
* From multiple systems reporting partial results within a facility into a singular consolidated report which can be reported to local, regional and national agencies.
* From multiple reports over a period of time from a given location, e.g., to aggregate daily measure reports into a weekly report.
* From multiple subjects within a geographic region into a MeasureReport describing that region.


### Aggregating MeasureReport Resources
The process for aggregating MeasureReport resources up to a geographic region or time period
follows the steps below:

1. Collect all MeasureReport resources to be aggregated.
   Note: All MeasureReport resources being aggregated **shall** refererence a common Measure in MeasureReport.measure.
2. Determine the subject of the report (the larger location)
3. Compute the start of the time period for the aggregate as the minimum of MeasureReport.period.start for all MeasureReport resources being aggregated.
4. Compute the end of the time period for the aggregate as the maximum of MeasureReport.period.end for all MeasureReport resources being aggregated.
5. Compute the population.count values found in group.population and group.stratifier.stratum.population from the matching population.count values in
the MeasureReport
6. Compute the group.measureScore and group.stratifier.stratum.measure score for each group and stratum from the computed counts.

### Aggregating Population count values
Measures aggregate values according to the [Measure Rate Aggregation Values](ValueSet-MeasureRateAggregationValues.html) value set.
Across facilities, population counts are always summed. Within a facility the different population types are aggregated differently when
aggregating over a larger time period.

* count<br/>
  All population count values are summed.
* point-in-time<br/>
  The most recent population count value is the "aggregated" value, representing the final point-in-time
  measure.
* cumulative<br/>
  The initial population and numerator are summed, being a count of individual events.
  The denominator population takes on the value of the report at the end of the time period (the most recent value), beeing a cumulative count.

Measure scores are recomputed based on measure populations after aggregation following the usual rules for measure scoring.


---

// File: input/includes/StructureDefinition-PublicHealthMeasure-intro.md

This Implementation Guide defines a profile for Measure to be used for Public Health reporting for Situational Awareness, rather than Quality Reporting.
The measures using this profile are intended to support reporting about the health system capacity to provide adequate care for patients during a health system
emergency, whether it is regional, national or global.  In this, the purpose and function of situational awareness measures have a different focus and intent
than those used for quality reporting.

### Describing and Identifying a Measure
Each measure has a Title, the name by which it is commonly known by people, and by which it can be readily found in an information system.
Titles **should** not be overly long (to enable recall by people), but **should** be descriptive enough to distinguish different measures published
by the same organization.  A subtitle may be present to provide additional descriptive detail.

1. `Measure.title` **should** be less than 64 characters in length.
2. `Measure.subtitle` **may** be present.

#### Software Component Name
Computer friendly names enable developers to create software tools that facilitate measure implementation and automation.  This profile
recommends transforming the title into a name by removing spaces and special characters (any character other than A-Z, a-z and 0-9),
using PascalCase to seperate boundaries between words. This allows the name to be used in most computing languages and as
the `id` for the resource in systems where user defined identifiers are supported for id values.

1. `Measure.name` **shall** be present.
2. `Measure.name` **should** match the pattern `[A-Z][A-Za-z0-9]+`.
3. `Measure.id` **should** be equal to `Measure.name`.

#### Canonical URL
The canonical URL is a unique identifier which represents the Measure within MeasureReport resources defined by that Measure. Tooling for FHIR
(e.g., the FHIR IG Publisher, SUSHI, Simplifier) follows a protocol for automatically constructing these URLs. This guide makes several
recommendations for URLs used by a publisher.  The example below is used to illustrate the recommendations

     https:\//example.com/saner/covid19/Measure/MyMeasureName

1. All Measure URLs for measures published by the same organization **should** have the same base URL. The Base URL part **should** be memorable.
   In the example above, `https:\//example.com/saner` is the base URL.
2. The base URL **should** be less than 40 characters in length.
3. The penultimate path part of the URL may be used to categorize measures in some way, e.g., by topic (e.g., COVID-19, Hurricane) or type of
   facility (e.g., Hospital, Ambulatory, LTC) to which they apply. In the example above, `covid19` is the category.  This category **should**
   also be encoded in Measure.useContext (see [Classifying Measures](#classifying-measures) below).
4. The last path part in the URL **should** be Measure. Following this recomendation simplifies the use of FHIR IG Development tools to
   generate Measure resources.  In the example above, the last path part is `Measure`.
5. The computable name given in the Measure **should** be the last part of the URL. Again, this simplifies measure development using existing
   FHIR IG Development tools. In the example above, `MyMeasureName` is the name of the measure.
6. The URL **should** resolve to an HTML page that describes the measure, or provides access to it as a FHIR Resource and ideally, would
   return HTML, XML or JSON representations based on the requested mime type.

#### Versioning
Measures can change over time. This guide requires that the Measure version information recorded be performed as follows:

1. A measure **shall** do one of the following:
   * be recorded in the form defined by [Semantic Versioning](https://semver.org/), e.g.: version 1.2.3 is the third patch to the second minor
     update of the first major release, or
   * be recorded by date using ISO 8601 format with hyphens and no time component, e.g.: 2020-07-25 for the measure released on July 25, 2020.
2. If versions can be updated more frequently than by day, a publisher **shall** use semantic versioning.

The use of semantic versioning is preferred because this is the form required in FHIR implementation guides, and it enables support for versioning
of measures using FHIR Implementation Guide tools. This is also the format for versioning that has been the most widely adopted by the IT industry.

##### Meanings of Major, Minor and Patch with respect to Measures

Major
: A major update adds one or more required elements to the Measure that **shall** be present in a MeasureReport to be considered valid
  by the receiving system. The definition of valid is defined by the measure developer, and need not be the same as that performed
  by FHIR validation tools. The FHIR Validator will fail a MeasureReport that does not include all the groups, populations and strata
  defined in the Measure, even though these components might otherwise be considered optional by the measure developer.

Minor
: A minor update adds one or more recommended or optional elements to the Measure.

Patch
: A patch can clarify or correct information that does not impact the interpretation of the measure.

#### Status of a Measure
This profile requires that the publication status of a measure be reported (this is a general requirement of all Measure resources), and
furthermore, that it's experimental status **shall** also be reported.

The usage of status values is described below:
draft
: The measure is presently under development. Measures presently under development **shall** also be recorded as being experimental.

active
: The measure is ready for, or being used, either in pilots or production. The experimental status for the measure **shall** be used to distinguish between
measures that are being piloted (`experimental=true`) or in production (`experimental=false`).

retired
: The measure **should** no longer be used in production. Measures which are retired before ever becoming active in production **shall** have experimental=true,
while those which have been available for production use **shall** have `experimental=false`.

Measures which have been used in the past **should** remain available for access for use when data has been used in production to enable systems to
interpret historical data recorded using the measure.

### The Subject of Measurement
In quality measurement, the subject of a measure in FHIR describes to whom or what the measure applies.  For situational awareness, this guide restricts the
subject of measurement to locations, representing a specific facility, site within a facility, or a broader geographic region (which can be defined as
a collection of facilities within that geographic region). These measures can also be used by an organization to manage sites and facilities based on
other organizing criteria, but are generally intended to support geographic rather than organizational boundaries.

1. `Measure.subjectCodeableConcept` **shall** have the value `http://hl7.org/fhir/resource-types#Location`

### Classifying Measures
Measures can be classified in different ways, e.g., by clinical venue, program, type of healthcare provider, et cetera.

In the following: **shall** indicates a [required](http://hl7.org/fhir/codesystem-binding-strength.html#binding-strength-required) binding for
the vocabulary, and **should** indicates a [preferred](http://hl7.org/fhir/codesystem-binding-strength.html#binding-strength-preferred) binding.

#### Measures Focused on a Particular Disease
1. Measures focusing on a particular disease **shall** record that focus in Measure.useContext, where:<br/>
`Measure.useContext.code = [http://terminology.hl7.org/CodeSystem/usage-context-type#focus](https://www.hl7.org/fhir/codesystem-usage-context-type.html#usage-context-type-focus)`<br/>
and<br/>
2. `Measure.useContext.valueCodableConcept` is an appropriate code from a vocabulary identifying the disease of interest.
It **should** come from SNOMED CT codes descending from
[64572001 Disease (disorder)](https://browser.ihtsdotools.org/?perspective=full&conceptId1=64572001).

#### Measures Focused on a Particular Kind of Event
1. Measures focusing on a particular kind of event (e.g., Pandemic, Hurricane, Fire, Flood) **shall** record their focus in Measure.useContext, where:<br/>
`Measure.useContext.code = `[http://snomed.info/sct#272379006 Event](https://browser.ihtsdotools.org/?perspective=full&conceptId1=272379006)<br/>
and<br/>
2. `Measure.useContext.valueCodableConcept` **should** come from SNOMED CT Codes descending from 276746005 Environmental Event
to classify the type of event. See [Event Context](ValueSet-EventContext.html) for the Value Set for this classification.

#### Measures Focused on a Particular Specialty
1. Measures focusing on a particular specialty **shall** record the specialty in Measure.useContext, where:<br/>
`Measure.useContext.code = `[http://terminology.hl7.org/CodeSystem/usage-context-type#user](https://www.hl7.org/fhir/codesystem-usage-context-type.html#usage-context-type-user)<br/>
and<br/>
2. `Measure.useContext.valueCodableConcept` **shall** be an appropriate code from a vocabulary identifying the provider specialty.
3. The value **should** come from SNOMED CT terms descending from [394658006 Clinical Specialty](https://browser.ihtsdotools.org/?perspective=full&conceptId1=394658006).

#### Measures Focused on a Clinical <span id="venue">Venue</span> (e.g., hospital, long-term care, ambulatory care)
1. Measures focused on a particular clinical venue **shall** record the type of venue in Measure.useContext, where<br/>
`Measure.useContext.code = [http://terminology.hl7.org/CodeSystem/usage-context-type#venue](https://www.hl7.org/fhir/codesystem-usage-context-type.html#usage-context-type-venue)`<br/>
and<br/>
2. `Measure.useContext.valueCodableConcept` **shall** be an appropriate code from a vocabulary identifying the venue (e.g., hospitals, pharmacies, long term care facilities).
3. These codes **should** come from:
   * http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType OR
   * Terms descending from SNOMED CT [43741000 Environment](https://browser.ihtsdotools.org/?perspective=full&conceptId1=276339004)

#### Measures from a Given Program
1. Measures developed to support a given program (e.g., the CDC National Healthcare Safety Network) **shall** identify the program in Measure.useContext, where<br/>
`Measure.useContext.code = [http://terminology.hl7.org/CodeSystem/usage-context-type#program](https://www.hl7.org/fhir/codesystem-usage-context-type.html#usage-context-type-program)`<br/>
and<br/>
2. `Measure.useContext.valueCodableConcept.text` is a string identifying the program of work (e.g., the CDC National Healthcare Safety Network).

### Measure Publication
A measure is published by some appropriate authority, for example a governmental agency focused on public health or emergency response,
or an organization working with such a governmental agency. Measures for situational awareness are not expected to endure a ballot process,
but will instead be created by authorities using a well established governance process. The reason for this is that as the emergent situation
progresses, new measures will be needed as the situation changes, or existing measures may need to be updated to address issues found during use.

Measures are published by organizations rather than individuals.  This profile requires that the organization be identified in `Measure.publisher`,
and furthermore, that there is at least one organizational e-mail address which can be used to contact that publisher about the Measure in `Measure.contact`

### <span id='national-cores'>Use of Appropriate National Models</span>
Many countries have developed national healthcare information models in various states of completion. This IG requires the use of national core standards
or guides to localize the PublicHealthMeasure to ensure a consistent data model for automation.

1. A conforming PublicHealthMeasure **shall** specify a jurisdiction to enable support for validation against national requirements.
2. A measure defined for international use **may** specify an international juristiction, or multiple jurisdictions where that is feasible.

Setting the Measure jurisdiction ensures that resources referenced by the Measure or MeasureReport conform to appropriate national standards.

### Measure Reporting Period
A measure **shall** suggest the approrpriate reporting frequency and period using the [ReportingPeriod](StructureDefinition-ReportingPeriod.html] extension.

### Measure Requirements
A measure may indicate the requirements for sending the content of a measure group, population or stratum within a MeasureReport by
using the  [MeasureExpection](StructureDefinition-MeasureExpectation.html) extension on the Measure.group, Measure.group.population or Measure.group.stratifier element. The MeasureExpectation
extension works like the [Expectation extension](https://www.hl7.org/fhir/extension-capabilitystatement-expectation.html) on CapabilityStatement resources,
but applies to the requirements for the content of a MeasureReport.

### Stratifiers
Stratifiers partition a measure so that it counts subsets of the measure population
within the numerator or other measure population by some attribute that classifies the population.
Common stratifications often used in healthcare settings include age, sex at birth[^2] and race and ethnicity.
Constraints on the [Measure.group.stratifier](https://hl7.org/fhir/measure-definitions.html#Measure.group.stratifier)
component of a Measure and further describes the elements of that component to support strata.

[^2]: Also commonly referred to as gender, but is then confused with self-reported gender identity, so this guide uses the term sex at birth.

Each stratifier has the following features:

name
: The human readable name for the stratifier.
This can be found in `stratifier.code.coding.display`

code
: A code that uniquely identifies the stratifier (e.g., age, sex at birth, race, ethnicity).
This can be found in `stratifier.code.coding.code` and `stratifier.code.coding.system`
1. Codes used in this attribute **should** descend
from [SNOMED CT 363787002 Observable Entity](https://browser.ihtsdotools.org/?perspective=full&conceptId1=363787002)

description
: A description of the purpose of the stratifier, explaining what function it serves.
This can be found in `stratifier.code.text`

value set
: A list of values that describe the different categories into which counted elements are classified for stratification.
Individual values in this value set can be found in `stratifier.component.code` and an explaination of their function
appears in `stratifier.component.description`.
1. Codes used in this attribute **should** descend
from [SNOMED CT 404684003 Clinical Finding](https://browser.ihtsdotools.org/?perspective=full&conceptId1=404684003)



---

// File: input/includes/StructureDefinition-ReportingPeriod-intro.md

This Implementation Guide defines an exenstion supporting the definition of a recommended reporting period for a measure using the
[Timing](https://www.hl7.org/fhir/datatypes.html#Timing) data type.  Specifying the reporting period enables systems to schedule automated reporting activities.


### Specifying the frequncy and period for Measure Reporting
1. The timing ***shall** contain one repeat describing the reporting frequency and period, more than one repeat component is not necessary for
almost all cases of measures reported for COVID-19 to date.
2. The repeat.frequency **shall** be one, so that the Timing value simply indicates the duration of the reporting period (e.g., every 8 hours, every day, every week).
3. The base period for reporting **shall** be specified (e.g., daily, weekly, monthly) in [repeat.periodUnit](https://www.hl7.org/fhir/datatypes-definitions.html#Timing.repeat.periodUnit).
4. The number of periods to include **shall** be specified [repeat.period](https://www.hl7.org/fhir/datatypes-definitions.html#Timing.repeat.period).
5. The value of repeat.boundsPeriod.start **may** be specified to indicate the offset.

### Specifying the days of week or time of day for reporting
1. The starting time for the reporting period with a period of 1 day or larger **shall** be midnight local time unless otherwise specified.
2. The starting time offset or day for reporting period **may** be specified in [boundsPeriod.start](https://www.hl7.org/fhir/datatypes-definitions.html#Timing.repeat.boundsPeriod)
   to indicate the offset hour, day of week or day of month.


### Examples
See the [CDC Patient Impact and Hospital Capacity example Measure](Measure-CDCPatientImpactAndHospitalCapacity.json.html) for an example use of this extension in a resource.

The example below illustrates a measure with a reporting period of one report provided every one day for data as of midnight.
```
   "extension": [
     {
       "url": "http://hl7.org/fhir/uv/saner/StructureDefinition/ReportingPeriod",
       "valueTiming": {
         "repeat": {
           "frequency": 1,    // one report
           "period": 1,       // every one
           "periodUnit": "d", //          day
           "boundsPeriod": {
             "start":  "2020-09-01T00:00:00"  // reported starting on midnight 9/1/2020
           }
         }
       }
     }
   ]
```

The example below illustrates a measure with a reporting period every 8 hours (i.e., three reports per day) for data as of 2am, 10am and 6pm.

```
   "extension": [
     {
       "url": "http://hl7.org/fhir/uv/saner/StructureDefinition/ReportingPeriod",
       "valueTiming": {
         "repeat": {
           "frequency": 1,    // one report
           "period": 8,       // every eight
           "periodUnit": "h", //          hours
           "boundsPeriod": {
             "start":  "2020-09-01T02:00:00"  // reported starting on 2am as of 9/1/2020
           }
         }
       }
     }
   ]
```

The example below illustrates a measure with a reporting period of once a week on Monday 8/31/2020 at midnight

```
   "extension": [
     {
       "url": "http://hl7.org/fhir/uv/saner/StructureDefinition/ReportingPeriod",
       "valueTiming": {
         "repeat": {
           "frequency": 1,    // one report
           "period": 1,       // every one
           "periodUnit": "w", //          week
           "boundsPeriod": {
             "start":  "2020-08-31T00:00:00"  // reported starting on 8/31/2020 at midnight
           }
         }
       }
     }
   ]
```


---

// File: input/includes/ValueSet-2.16.840.1.113762.1.4.1032.116-intro.md

<h3 id='vsac-snapshot'>This ValueSet is a SNAPSHOT of a ValueSet in VSAC</h3>
<p>This ValueSet resource is a snapshot of a ValueSet made available through the US Value Set Authority
Center (VSAC).  It is included as an aid to interpretation of the implementation guide, and to support initial
implementation.  The ValueSet resource **should** be obtained directly from VSAC using the
following URL:</p>

<p><a href='http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.116'>http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.116</a></p>

<p>To download ValueSet resources or their expansions from VSAC, users must have a Unified Medical Language System (UMLS) User Account.  Accounts
can be requested via the <a href='https://uts.nlm.nih.gov/license.html'>US National Institutes of Health UMLS License page</a>.  While licenses are free,
it can take up to 3 business days to activate a license, and requests are only processed between 9am and 5pm during normal business hours.
</p>


---

// File: input/includes/ValueSet-2.16.840.1.113762.1.4.1032.117-intro.md

<h3 id='vsac-snapshot'>This ValueSet is a SNAPSHOT of a ValueSet in VSAC</h3>
<p>This ValueSet resource is a snapshot of a ValueSet made available through the US Value Set Authority
Center (VSAC).  It is included as an aid to interpretation of the implementation guide, and to support initial
implementation.  The ValueSet resource **should** be obtained directly from VSAC using the
following URL:</p>

<p><a href='http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.117'>http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.117</a></p>

<p>To download ValueSet resources or their expansions from VSAC, users must have a Unified Medical Language System (UMLS) User Account.  Accounts
can be requested via the <a href='https://uts.nlm.nih.gov/license.html'>US National Institutes of Health UMLS License page</a>.  While licenses are free,
it can take up to 3 business days to activate a license, and requests are only processed between 9am and 5pm during normal business hours.
</p>


---

// File: input/includes/ValueSet-2.16.840.1.113762.1.4.1032.120-intro.md

<h3 id='vsac-snapshot'>This ValueSet is a SNAPSHOT of a ValueSet in VSAC</h3>
<p>This ValueSet resource is a snapshot of a ValueSet made available through the US Value Set Authority
Center (VSAC).  It is included as an aid to interpretation of the implementation guide, and to support initial
implementation.  The ValueSet resource **should** be obtained directly from VSAC using the
following URL:</p>

<p><a href='http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.120'>http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.120</a></p>

<p>To download ValueSet resources or their expansions from VSAC, users must have a Unified Medical Language System (UMLS) User Account.  Accounts
can be requested via the <a href='https://uts.nlm.nih.gov/license.html'>US National Institutes of Health UMLS License page</a>.  While licenses are free,
it can take up to 3 business days to activate a license, and requests are only processed between 9am and 5pm during normal business hours.
</p>


---

// File: input/includes/ValueSet-2.16.840.1.113762.1.4.1032.127-intro.md

<h3 id='vsac-snapshot'>This ValueSet is a SNAPSHOT of a ValueSet in VSAC</h3>
<p>This ValueSet resource is a snapshot of a ValueSet made available through the US Value Set Authority
Center (VSAC).  It is included as an aid to interpretation of the implementation guide, and to support initial
implementation.  The ValueSet resource **should** be obtained directly from VSAC using the
following URL:</p>

<p><a href='http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.127'>http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.127</a></p>

<p>To download ValueSet resources or their expansions from VSAC, users must have a Unified Medical Language System (UMLS) User Account.  Accounts
can be requested via the <a href='https://uts.nlm.nih.gov/license.html'>US National Institutes of Health UMLS License page</a>.  While licenses are free,
it can take up to 3 business days to activate a license, and requests are only processed between 9am and 5pm during normal business hours.
</p>


---

// File: input/pagecontent/examples.md

### Measures
The following measures have been defined in this implementation guide.
<ol>
   {% include list-name-measures.xhtml %}
</ol>

### Measure Reports
The following measure report examples have been produced to demonstrate the use of measures defined in this
implementation guide.

<ol>
   {% include list-name-measurereports.xhtml %}
</ol>

### Locations and Organizations
The following example resources have been produced to support the example Measure Reports in this
implementation guide.

<ol>
   {% include list-name-locations.xhtml %}
   {% include list-name-organizations.xhtml %}
</ol>



---

// File: input/fsh/aliases.fsh

Alias: $Base = http://hl7.org/fhir/uv/saner
Alias: HSLOC = https://www.cdc.gov/nhsn/cdaportal/terminology/codesystem/hsloc.html
Alias: ICD10CM = http://hl7.org/fhir/sid/icd-10-cm
Alias: SCT = http://snomed.info/sct
Alias: LOINC = http://loinc.org
Alias: RXNORM = http://www.nlm.nih.gov/research/umls/rxnorm
Alias: ROLECODE = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: UCUM = http://unitsofmeasure.com
Alias: CPT = http://www.ama-assn.org/go/cpt
Alias: SCORING = http://terminology.hl7.org/CodeSystem/measure-scoring
Alias: MTYPE = http://terminology.hl7.org/CodeSystem/measure-type
Alias: RESTYPE = http://hl7.org/fhir/resource-types
Alias: MESIMP = http://terminology.hl7.org/CodeSystem/measure-improvement-notation
Alias: SPECTYPE = http://terminology.hl7.org/CodeSystem/special-values
Alias: MEASVALS = http://hl7.org/fhir/uv/saner/CodeSystem/MeasuredValues
Alias: MEASPOP = http://terminology.hl7.org/CodeSystem/measure-population
Alias: LIBTYPE = http://terminology.hl7.org/CodeSystem/library-type


---

// File: input/fsh/CapabilityStatement-DataSource-ComputeMeasure.fsh


Instance: DataSource-ComputeMeasure
InstanceOf: CapabilityStatementWithSlices
Usage: #definition
Description: """
Defines the requirements for the Data Source implementing the Compute Measure transaction."""
* insert SanerDefinitionContent
* name = "DataSource_ComputeMeasure"
* title = "Data Source implementing the Compute Measure transaction."
* date = "2021-07-26"
* kind = #requirements
* description = "Defines the requirements for the Data Source implementing the Compute Measure transaction."
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1

* rest[serverSlice].mode = #server

* rest[serverSlice].resource[PatientSlice].type = #Patient

* rest[serverSlice].resource[PatientSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[PatientSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[PatientSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[PatientSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[PatientSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[PatientSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[PatientSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[PatientSlice].searchParam[1].name = "date"
* rest[serverSlice].resource[PatientSlice].searchParam[1].type = #date
* rest[serverSlice].resource[PatientSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[PatientSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[PatientSlice].searchParam[2].name = "class"
* rest[serverSlice].resource[PatientSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[PatientSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[PatientSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[PatientSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[PatientSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[PatientSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[PatientSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[0].valueString = "_id"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[1].url = "required"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[1].valueString = "class"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[2].url = "optional"
* rest[serverSlice].resource[PatientSlice].extension[1].extension[2].valueString = "date"

* rest[serverSlice].resource[EncounterSlice].type = #Encounter

* rest[serverSlice].resource[EncounterSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[EncounterSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[EncounterSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[EncounterSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[1].name = "date"
* rest[serverSlice].resource[EncounterSlice].searchParam[1].type = #date
* rest[serverSlice].resource[EncounterSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[2].name = "class"
* rest[serverSlice].resource[EncounterSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[EncounterSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[3].name = "patient"
* rest[serverSlice].resource[EncounterSlice].searchParam[3].type = #reference
* rest[serverSlice].resource[EncounterSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[4].name = "encounter"
* rest[serverSlice].resource[EncounterSlice].searchParam[4].type = #reference
* rest[serverSlice].resource[EncounterSlice].searchParam[4].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[4].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].searchParam[5].name = "code"
* rest[serverSlice].resource[EncounterSlice].searchParam[5].type = #token
* rest[serverSlice].resource[EncounterSlice].searchParam[5].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[EncounterSlice].searchParam[5].extension.valueCode = #SHALL

* rest[serverSlice].resource[EncounterSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[EncounterSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[0].extension[0].valueString = "_id"

* rest[serverSlice].resource[EncounterSlice].extension[1].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[0].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[0].valueString = "_id"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[1].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[1].valueString = "class"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[2].url = "optional"
* rest[serverSlice].resource[EncounterSlice].extension[1].extension[2].valueString = "date"

* rest[serverSlice].resource[EncounterSlice].extension[2].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[0].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[0].valueString = "_id"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[1].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[1].valueString = "patient"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[2].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[2].valueString = "encounter"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[3].url = "required"
* rest[serverSlice].resource[EncounterSlice].extension[2].extension[3].valueString = "code"

* rest[serverSlice].resource[AllergyIntoleranceSlice].type = #AllergyIntolerance

* rest[serverSlice].resource[AllergyIntoleranceSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[AllergyIntoleranceSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[AllergyIntoleranceSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[3].type = #token
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[AllergyIntoleranceSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[AllergyIntoleranceSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[ConditionSlice].type = #Condition

* rest[serverSlice].resource[ConditionSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[ConditionSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConditionSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConditionSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[ConditionSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[ConditionSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConditionSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConditionSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[ConditionSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[ConditionSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConditionSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConditionSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[ConditionSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[ConditionSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConditionSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConditionSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[ConditionSlice].searchParam[3].type = #token
* rest[serverSlice].resource[ConditionSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ConditionSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[ConditionSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[ConditionSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[DiagnosticReportSlice].type = #DiagnosticReport

* rest[serverSlice].resource[DiagnosticReportSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[DiagnosticReportSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DiagnosticReportSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[3].type = #token
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DiagnosticReportSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[DiagnosticReportSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[MedicationRequestSlice].type = #MedicationRequest

* rest[serverSlice].resource[MedicationRequestSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[MedicationRequestSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationRequestSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationRequestSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationRequestSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationRequestSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationRequestSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[3].type = #token
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationRequestSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationRequestSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[MedicationRequestSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[ObservationSlice].type = #Observation

* rest[serverSlice].resource[ObservationSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[ObservationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ObservationSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ObservationSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[ObservationSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[ObservationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ObservationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ObservationSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[ObservationSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[ObservationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ObservationSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ObservationSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[ObservationSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[ObservationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ObservationSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[ObservationSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[ObservationSlice].searchParam[3].type = #token
* rest[serverSlice].resource[ObservationSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ObservationSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[ObservationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[ObservationSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[ProcedureSlice].type = #Procedure

* rest[serverSlice].resource[ProcedureSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[ProcedureSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ProcedureSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ProcedureSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[ProcedureSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[ProcedureSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ProcedureSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ProcedureSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[ProcedureSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[ProcedureSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ProcedureSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ProcedureSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[ProcedureSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[ProcedureSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ProcedureSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[ProcedureSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[ProcedureSlice].searchParam[3].type = #token
* rest[serverSlice].resource[ProcedureSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ProcedureSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[ProcedureSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[ProcedureSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[ServiceRequestSlice].type = #ServiceRequest

* rest[serverSlice].resource[ServiceRequestSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[ServiceRequestSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ServiceRequestSlice].interaction[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ServiceRequestSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[ServiceRequestSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[ServiceRequestSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[ServiceRequestSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[3].type = #token
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[ServiceRequestSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[ServiceRequestSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[ServiceRequestSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[DocumentReferenceSlice].type = #DocumentReference

* rest[serverSlice].resource[DocumentReferenceSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[DocumentReferenceSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DocumentReferenceSlice].interaction[0].extension.valueCode = #SHOULD

* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[3].type = #token
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[DocumentReferenceSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[DocumentReferenceSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[FamilyMemberHistorySlice].type = #FamilyMemberHistory

* rest[serverSlice].resource[FamilyMemberHistorySlice].interaction[0].code = #search-type
* rest[serverSlice].resource[FamilyMemberHistorySlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[FamilyMemberHistorySlice].interaction[0].extension.valueCode = #SHOULD

* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[0].type = #reference
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[1].type = #reference
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[2].type = #reference
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[3].name = "code"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[3].type = #token
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[FamilyMemberHistorySlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[FamilyMemberHistorySlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[MedicationAdministrationSlice].type = #MedicationAdministration

* rest[serverSlice].resource[MedicationAdministrationSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[MedicationAdministrationSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationAdministrationSlice].interaction[0].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[3].type = #token
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationAdministrationSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[MedicationAdministrationSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[MedicationDispenseSlice].type = #MedicationDispense

* rest[serverSlice].resource[MedicationDispenseSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[MedicationDispenseSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationDispenseSlice].interaction[0].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[3].type = #token
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationDispenseSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[MedicationDispenseSlice].extension[0].extension[3].valueString = "code"

* rest[serverSlice].resource[MedicationStatementSlice].type = #MedicationStatement

* rest[serverSlice].resource[MedicationStatementSlice].interaction[0].code = #search-type
* rest[serverSlice].resource[MedicationStatementSlice].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationStatementSlice].interaction[0].extension.valueCode = #SHOULD

* rest[serverSlice].resource[MedicationStatementSlice].searchParam[0].name = "_id"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[0].type = #reference
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[0].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationStatementSlice].searchParam[1].name = "patient"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[1].type = #reference
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[1].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationStatementSlice].searchParam[2].name = "encounter"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[2].type = #reference
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[2].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationStatementSlice].searchParam[3].name = "code"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[3].type = #token
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[3].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[serverSlice].resource[MedicationStatementSlice].searchParam[3].extension.valueCode = #SHALL

* rest[serverSlice].resource[MedicationStatementSlice].extension[0].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[0].url = "required"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[0].valueString = "_id"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[1].url = "required"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[1].valueString = "patient"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[2].url = "required"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[2].valueString = "encounter"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[3].url = "required"
* rest[serverSlice].resource[MedicationStatementSlice].extension[0].extension[3].valueString = "code"


---

