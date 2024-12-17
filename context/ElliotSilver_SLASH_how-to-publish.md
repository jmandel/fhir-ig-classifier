File: repos/ElliotSilver_SLASH_how-to-publish/sushi-config.yaml

# ╭─────────────────────────Commonly Used ImplementationGuide Properties───────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. The most commonly   │
# │  used properties are included. For a list of all supported properties and their functions,     │
# │  see: https://fshschool.org/docs/sushi/configuration/.                                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: ca.argentixinfo.howtopub
canonical: http://argentixinfo.com/ig/howtopub
name: HowToPubIG
title: How to Publish a FHIR Implementation Guide
description: A Guide to HL7 IG Publisher's -go-publish feature
status: draft # draft | active | retired | unknown
version: 1.1.0-ci
fhirVersion: 4.0.1 # https://www.hl7.org/fhir/valueset-FHIR-version.html
copyrightYear: 2024+
releaseLabel: ci-build # ci-build | draft | qa-preview | ballot | trial-use | release | update | normative+trial-use
license: CC-BY-NC-4.0 # https://www.hl7.org/fhir/valueset-spdx-license.html
jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001
publisher:
  name: Argentix Informatics, Inc.
  url: http://argentixinfo.com
  email: elliot@argentixinfo.com
  
# The dependencies property corresponds to IG.dependsOn. The key is the
# package id and the value is the version (or dev/current). For advanced
# use cases, the value can be an object with keys for id, uri, and version.
#
# dependencies:
#   hl7.fhir.us.core: 3.1.0
#   hl7.fhir.us.mcode:
#     id: mcode
#     uri: http://hl7.org/fhir/us/mcode/ImplementationGuide/hl7.fhir.us.mcode
#     version: 1.0.0
#
#
# The pages property corresponds to IG.definition.page. SUSHI can
# auto-generate the page list, but if the author includes pages in
# this file, it is assumed that the author will fully manage the
# pages section and SUSHI will not generate any page entries.
# The page file name is used as the key. If title is not provided,
# then the title will be generated from the file name.  If a
# generation value is not provided, it will be inferred from the
# file name extension.  Any subproperties that are valid filenames
# with supported extensions (e.g., .md/.xml) will be treated as
# sub-pages.
#
pages:
  index.md:
    title: Home
  setup.md:
    title: Setting up the Publication Environment
  publication.md:
    title: Using IG Publisher -go-publish
  references.md:
    title: References
  artifacts.xml:
  about.md:

#
# The parameters property represents IG.definition.parameter. Rather
# than a list of code/value pairs (as in the ImplementationGuide
# resource), the code is the YAML key. If a parameter allows repeating
# values, the value in the YAML should be a sequence/array.
# For parameters defined by core FHIR see:
# http://build.fhir.org/codesystem-guide-parameter-code.html
# For parameters defined by the FHIR Tools IG see:
# http://build.fhir.org/ig/FHIR/fhir-tools-ig/branches/master/CodeSystem-ig-parameters.html
#
# parameters:
#   excludettl: true
#   validation: [allow-any-extensions, no-broken-links]
#   special-url:  http://example.org/foo
#
# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │ The menu property will be used to generate the input/menu.xml file. The menu is represented    │
# │ as a simple structure where the YAML key is the menu item name and the value is the URL.       │
# │ The IG publisher currently only supports one level deep on sub-menus. To provide a             │
# │ custom menu.xml file, do not include this property and include a `menu.xml` file in            │
# │ input/includes. To use a provided input/includes/menu.xml file, delete the "menu"              │
# │ property below.                                                                                │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  Table of Contents: toc.html
  Setup: setup.html
  Publication: publication.html
  References: references.html
  About: about.html
  Artifacts: artifacts.html

# ╭───────────────────────────Less Common Implementation Guide Properties──────────────────────────╮
# │  Uncomment the properties below to configure additional properties on the ImplementationGuide  │
# │  resource. These properties are less commonly needed than those above.                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
#
# Those who need more control or want to add additional details to the contact values can use
# contact directly and follow the format outlined in the ImplementationGuide resource and
# ContactDetail.
#
contact:
  - name: Elliot Silver
    telecom:
      - system: email # phone | fax | email | pager | url | sms | other
        value: elliot@argentixinfo.com
        use: work
      - system: url # email | phone | fax | email | pager | url | sms | other
        value: http://argentixinfo.com
        use: work
#
#
# The global property corresponds to the IG.global property, but it
# uses the type as the YAML key and the profile as its value. Since
# FHIR does not explicitly disallow more than one profile per type,
# neither do we; the value can be a single profile URL or an array
# of profile URLs. If a value is an id or name, SUSHI will replace
# it with the correct canonical when generating the IG JSON.
#
# global:
#   Patient: http://example.org/fhir/StructureDefinition/my-patient-profile
#   Encounter: http://example.org/fhir/StructureDefinition/my-encounter-profile
#
#
# The resources property corresponds to IG.definition.resource.
# SUSHI can auto-generate all of the resource entries based on
# the FSH definitions and/or information in any user-provided
# JSON or XML resource files. If the generated entries are not
# sufficient or complete, however, the author can add entries
# here. If the reference matches a generated entry, it will
# replace the generated entry. If it doesn't match any generated
# entries, it will be added to the generated entries. The format
# follows IG.definition.resource with the following differences:
#   * use IG.definition.resource.reference.reference as the YAML key.
#   * if the key is an id or name, SUSHI will replace it with the
#     correct URL when generating the IG JSON.
#   * specify "omit" to omit a FSH-generated resource from the
#     resource list.
#   * if the exampleCanonical is an id or name, SUSHI will replace
#     it with the correct canonical when generating the IG JSON.
#   * groupingId can be used, but top-level groups syntax may be a
#     better option (see below).
# The following are simple examples to demonstrate what this might
# look like:
#
# resources:
#   Patient/my-example-patient:
#     name: My Example Patient
#     description: An example Patient
#     exampleBoolean: true
#   Patient/bad-example: omit
#
#
# Groups can control certain aspects of the IG generation.  The IG
# documentation recommends that authors use the default groups that
# are provided by the templating framework, but if authors want to
# use their own instead, they can use the mechanism below.  This will
# create IG.definition.grouping entries and associate the individual
# resource entries with the corresponding groupIds. If a resource
# is specified by id or name, SUSHI will replace it with the correct
# URL when generating the IG JSON.
#
# groups:
#   GroupA:
#     name: Group A
#     description: The Alpha Group
#     resources:
#     - StructureDefinition/animal-patient
#     - StructureDefinition/arm-procedure
#   GroupB:
#     name: Group B
#     description: The Beta Group
#     resources:
#     - StructureDefinition/bark-control
#     - StructureDefinition/bee-sting
#
#
# The ImplementationGuide resource defines several other properties
# not represented above. These properties can be used as-is and
# should follow the format defined in ImplementationGuide:
# * date
# * meta
# * implicitRules
# * language
# * text
# * contained
# * extension
# * modifierExtension
# * experimental
# * useContext
# * copyright
# * packageId
#
#
# ╭──────────────────────────────────────────SUSHI flags───────────────────────────────────────────╮
# │  The flags below configure aspects of how SUSHI processes FSH.                                 │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
# The FSHOnly flag indicates if only FSH resources should be exported.
# If set to true, no IG related content will be generated.
# The default value for this property is false.
#
# FSHOnly: false
#
#
# When set to true, the "short" and "definition" field on the root element of an Extension will
# be set to the "Title" and "Description" of that Extension. Default is true.
#
# applyExtensionMetadataToRoot: true
#
#
# The instanceOptions property is used to configure certain aspects of how SUSHI processes instances.
# See the individual option definitions below for more detail.
#
instanceOptions:
  # When set to true, slices must be referred to by name and not only by a numeric index in order to be used
  # in an Instance's assignment rule. All slices appear in the order in which they are specified in FSH rules.
  # While SUSHI defaults to false for legacy reasons, manualSliceOrding is recommended for new projects.
  manualSliceOrdering: true # true | false
  # Determines for which types of Instances SUSHI will automatically set meta.profile
  # if InstanceOf references a profile:
  #
  # setMetaProfile: always # always | never | inline-only | standalone-only
  #
  #
  # Determines for which types of Instances SUSHI will automatically set id
  # if InstanceOf references a profile:
  #
  # setId: always # always | standalone-only


---

// File: input/pagecontent/about.md

This Implementation Guide was originally presented during [FHIR North](https://fhirnorth.mohawkcollege.ca), on October 23, 2024.

### Contact Us

For questions or comments about this Style Guide, please contact [the author](mailto:elliot@argentixinfo.com), or propose a [change](https://github.com/ElliotSilver/how-to-publish/issues) via Github.

### Content

Resource content from this guide is available as an NPM package [here](./package.tgz).

The complete guide, including narrative pages, may be downloaded [here](./full-ig.zip).

### Dependencies

This guide is based on release 4 of the HL7&reg; FHIR&reg; standard, which may be viewed [here](http://hl7.org/fhir/R4).

#### Additional Dependencies

{% include dependency-table.xhtml %}

### Cross-version Analysis

{% include cross-version-analysis.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### Copyright Notices and Licensing

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="http://argentixinfo.com/ig/howtopub">How to Publish a FHIR Implementation Guide</a> is &copy; 2024 <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="http://argentixinfo.com">Argentix Informatics, Inc.</a> and is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a></p>

#### HL7

The HL7&reg; FHIR&reg; standard is copyright HL7 International, and used in accordance with the [FHIR license](http://hl7.org/fhir/R4/license.html#license).

> *HL7, FHIR and the FHIR [FLAME DESIGN] are the registered trademarks of Health Level Seven International and their use does not constitute endorsement by HL7.*

#### Third parties

This publication may include content used under license. Some content (for example, LOINC,&reg; SNOMED CT, or CPT&reg; terminologies) may be included which may require separate licensing for depending on use, such as implementation. Directly review any third-party licensing terms to ensure they permit your intended use.

Automated analysis detected that the following may apply:

> {% include ip-statements.xhtml %}

This analysis may not be complete or accurate. You are responsible for identifying and complying with applicable licensing.


---

// File: input/pagecontent/index.md

Many implementation guide (IG) authors are familiar with using [HL7](http://hl7.org)'s [IG Publisher](https://github.com/HL7/fhir-ig-publisher) to author and build an implementation guide. However the process of actually "publishing" an authored IG is less familiar to many. To make an IG available to the public (or at least to a larger audience than the author), it should be on an accessible website. Further, various FHIR tooling depends being able to find an IG and its packages listed in the central registries. This IG documents the process of publishing an IG to a website using IG Publisher. It also discusses the differences between "publishing" a FHIR IG by simply uploading the IG build output to your web server; and, by uploading the results of the IG Publisher `-go-publish` functionality.

This IG is not a tutorial on IG authoring; on general IG Publisher usage; or, on related tooling, such as [SUSHI](https://fshschool.org).

Once an IG has been authored using IG Publisher, there are several ways to make it available to the public:

* Using the HL7 [Auto-build](#ci-auto-build) functionality to publish the IG.
* Uploading the IG Publisher build output [directly](#upload) to a website
* Using the [IG Publisher `-go-publish`](#using-ig-publishers--go-publish-function) function to stage an IG publication, then upload it to a website.

Alternatively, the IG could be authored and published through [Firely](https://fire.ly)'s [Simplifier](https://simplifier.net) product.

Let's briefly consider each of these approaches.

### CI Auto-build

IG Publisher users who store their projects on [Github](http://github.com) can make use of the [IG auto-build](https://github.com/FHIR/auto-ig-builder) to "publish" their IG to the FHIR continuous integration site under `build.fhir.org`. This is a convenient way to allow others to see your implementation guide.

However, there are some drawbacks:

* Warnings at the top of each page of the IG that the document is "not an authorized publication," is the "continuous integration build," and "changes regularly."
* Canonical URLs are not permitted to be located under <http://build.fhir.org>
* Canonical URLs are not redirected to the appropriate resource or resource page (see below)
* Extremely limited support for multiple releases. Although different branches of an IG repo can be uploaded, there is no cross-referencing between them.
* No history page is generated, and any links to "directory of published versions" are broken
* No registration of the IG and IG package with FHIR tooling feeds
* Unstable availability (see below)

"Canonical redirect" is the resolution of the canonical URLs which identify the IG as well as IG profiles, CodeSystem, ValueSet, and so on, to the appropriate content. For example, the url [`http://example.com/ig/myig/StructureDefinition/MyPatient`](http://example.com/ig/myig/StructureDefinition/MyPatient) is expected to return an HTML descriptive page, or JSON- or XML-formatted StructureDefinition resource representation depending on the web request. This capability depends on both the IG being published at the location that the canonical URL references, and having appropriate website configuration or redirect scripts.

The fact that the CI build content changes any time an update is made to your repository makes using the auto-build unsuitable for long-term availability of milestone releases. Further, CI build content for your IG's non-main branch may be purged to save space; the main branch content has also occasionally been purged. The CI auto-build is not a good approach to long-term publishing.

On the other hand, the auto-build is a decent way to make your continuous integration builds, or other temporary IG versions, available for a limited time, such as sharing your in-progress work with your collaborators.

Note that the IG Publisher publication process described in this IG can reference auto-built IGs as part of the history of published versions, and in the registry feeds.

### Upload to a Web Server or Github Pages {#upload}

Another option to make your content available, is to upload the contents of the IG Publisher-generated `output` directory directly to a web server, or to copy it to [Github Pages](http://github.io). (Setting up automated builds and copying to Github Pages is covered in the [author's blog](http://www.argentixinfo.com/archives/156).)

This is essentially the same as using the auto-build, except that the output ends up on your website, rather than on [build.fhir.org](http://build.fhir.org/ig). And, this approach has many of the same issues as the CI auto-build.

* A "local development build" warning box on each page of the IG
* Canonical URLs are not redirected to the appropriate resource or resource page (although your web server configuration could theoretically address this)
* Extremely limited support for multiple releases. Although different releases of an IG could be uploaded, there is no cross-referencing between them.
* No history page is generated, and any links to "directory of published versions" are broken
* No registration of the IG and IG package with FHIR tooling feeds

Although uploading to your own web server won't be subject to unplanned removal of IG versions, it offers few other benefits compared to use of the auto-build.

Note that the IG Publisher publication process described in this IG can reference continuous integration builds uploaded to your website as part of the history of published versions, and in the registry feeds.

### Publication using Simplifier

One of key and early decisions in authoring an IG is whether to use HL7's IG publisher or [Firely](https://fire.ly)'s [Simplifier](https://simplifier.net). Factors to consider between the two include:

* Commercial vs open source model, and associated factors including cost, license, support, stability
* Enforcement of "best practices," error checking and "correctness"
* Integration with resource authoring tools such as [Firely's Forge](https://fire.ly/products/forge/) or HL7's [FSH](http://hl7.org/fhir/uv/shorthand/) language compiler, [SUSHI](https://fshschool.org). (Both tools can be used with either publication mechanism)
* Command-line "compiler"-style interface vs. WYSIWYG
* Content management and versioning approach during authoring (including "release" management and Github integration)
* Control over look-and-feel, ADA compliance, and multi-language support
* Local vs. online; desktop control vs. SaaS.

However, for the purposes of this IG, the biggest difference is that a Simplifier license includes a website to publish the IG to. IG Publisher requires you to have a website to host your publication.

Publishing on your own website provides an additional level of control, and sense of ownership, that many prefer. Note though, that it is possible to download and self-host a Simplifier IG.

If you use the Simplifier development tooling, the publication considerations discussed in this document don't apply. As pointed out above, though, publication considerations should be only one part of the decision. Both the IG publisher and Simplifier continue to evolve, and the comparative features and differentiators will change.

### Using IG Publisher's `-go-publish` Function

The HL7 IG Publisher can be used to build an IG from source resources and narrative content. The output of an IG Publisher build may be uploaded to a website or made available through the CI auto-build, as described above. Using the IG Publisher's `-go-publish` functionality, it can also be used to prepare the generated content for publication, addressing several deficiencies in the basic output:

* The box at the top of each page is modified to indicate that this is a proper publication of the IG; it indicates which IG version you are viewing, what the current (most recent) version is, and includes a link to a history page with all published IG versions listed.
* The necessary redirect configuration or scripts are included so that canonical URLs in your IG will resolve correctly depending on whether the requesting client prefers HTML, JSON or XML.
* The publication directory is structured to support multiple IG publications.
* Updates to the publication feed files are prepared, so that the IG publication can be registered with HL7 tooling.

Once built using IG publisher, the IG can be uploaded to a website for wider availability.

Using this `-go-publish` functionality is the subject of this IG.

### Next Steps

The remainder of this implementation guide discusses the one-time process needed to [set up](./setup.html) an environment for publication, and the process needed to publish each release of [each publication](./publication.html).

As a pre-requisite for the processes described in this guide, you should have write access to a website that you control, and be familiar with the process for uploading content to it. This guide assumes your publication website aligns with the canonical URLs for your IGs. (Alignment of canonicals is not strictly necessary; however, this is the most common approach, and some functionality won't work unless the canonicals align.) You should also be familiar with basic use of the IG Publisher, use of the `git` source control tool, and have access to the [Github](http://github.com) website. Github access is needed to obtain or modify certain HL7 resources. The guide describes use of Github to manage your IG as well, however you may use other (or no) content management tools for your IG and publication.

[References](./references.html) to background material are included, as is a trivial profile of a [resource](./artifacts.html) which can be used to observe canonical resolution behaviour.

<div class="dragon" markdown=1>
The HL7 IG Publisher and publishing ecosystem (templates, terminology servers, registries, etc.) are under continual improvement. The content of this IG is believed to correctly describe the processes as it exists at the time of publication. If the process changes, or an inaccuracy is found, please provide let the IG author know. The sources listed on the [references](./references.html) page may be more up-to-date, however, they may also lag.
</div>
<br>


---

// File: input/pagecontent/publication.md

The steps below describe how to publish an implementation guide using IG Publisher. Perform these steps for each release of each IG you want to publish. You should have already [set up](./setup.html) your publication environment, and will need to be able to upload content to your website.

### Prepare your Implementation Guide

1. Clone your IG repository to your local system.

    ```sh
    $ cd ~/src
    $ git clone git@github.com:ExampleOrg/my-ig.git
    $ cd my-ig
    ```

   (If the repo is already on your system, ensure all changes have been committed.)

1. Create a release branch of your IG repo and switch to it

   ```sh
   $ git checkout -b v1.0.0
   ```

1. Review your IG's ImplementationGuide resource (or `sushi-config.yaml`) and update as needed.

   * IG canonical aligns with your main publication location (e.g. `http://example.org/ig/myig`)
   * IG `status` (see [Publication Status](http://hl7.org/fhir/ValueSet/publication-status)), `releaseLabel` (see [IG Parameters](http://hl7.org/fhir/tools/CodeSystem/ig-parameters)), `date` (if explicitly set), and `version` elements are all correct for your published IG.
   * Dependencies (including the template specified in `igi.ini`) are up to date and set to specific versions.
  
1. Ensure you are starting from a known state.

   * Delete contents of your FHIR cache directory `~/.fhir`, except for `fhir-settings.json` if it exists
   * Delete `fsh-generated`, `input-cache`, `output`, `temp`, and `template` directories from the IG project
   * Use the most current releases of IG tooling:

      ```sh
      $ ./_updatePublisher.sh
      $ npm update -g fsh-sushi
      ```

1. Create (or update) `publication-request.json` in your IG root directory, filling it out appropriately for your IG:

   ```json
   {
      "package-id" : "org.example.myig",
      "version" : "1.0.0",
      "path" : "http://example.org/ig/myig/1.0.0",
      "mode" : "milestone",
      "status" : "release",
      "sequence" : "Releases",
      "desc" : "Initial release as presented at FHIR North.",
      "first" : true,
      "title" : "How to Publish a FHIR Implementation Guide",
      "ci-build" : "http://build.fhir.org/ig/ExampleOrg/myig",
      "category" : "Infrastructure",
      "introduction" : "An instructional guide showing how to use the HL7 IG Publisher's -go-publish feature to publish an implementation guide to a website."
   }
   ```

   This file is used to populate the publication feeds. Several elements are only for the first publication of an IG. See [IG Publication Request Documentation](https://confluence.hl7.org/display/FHIR/IG+Publication+Request+Documentation) for complete details, including some additional elements.

   | Attribute | First&nbsp; Only&nbsp; | Description |
   |---|:---:|---|
   | `package-id` | | The IG package id, matching the value from `sushi-config.yaml` or your ImplementationGuide resource |
   | `version`    | | The IG version, matching the value from `sushi-config.yaml` or your ImplementationGuide resource |
   | `path`       | | The permanent full URL at which the IG will be available. This must be of the form `[canonical]/[label]`, where `[canonical]` is the canonical URL of your IG, and `[label]` is the version or another label for this release (e.g. "STU1"). |
   | `mode`       | | {::nomarkdown}One of:<ul><li><code class=" highlighter-rouge language-plaintext">working</code> (publish at <code class=" highlighter-rouge language-plaintext">path</code>, but don't update which publication is "current");</li><li><code class=" highlighter-rouge language-plaintext">milestone</code> (publish at <code class=" highlighter-rouge language-plaintext">path</code> and at the canonical, making this the "current" release);</li><li><code class=" highlighter-rouge language-plaintext">technical-correction</code> (replace the content at <code class=" highlighter-rouge language-plaintext">path</code>; if the content at <code class=" highlighter-rouge language-plaintext">path</code> is the "current" release, replace the content at the canonical also)</ul>{:/nomarkdown} |
   | `status`     | | The IG release status, typically `release`, `trial-use`, `draft`, or `normative` (or [other options](https://confluence.hl7.org/display/FHIR/IG+Publication+Request+Documentation)); often matches the IG `releaselabel`. |
   | `sequence`   | | The release sequence, e.g. "Release 1," that this publication is part of; or, "Publication," "Release," or similar, if not using release sequences. This determines grouping on the history page. |
   | `desc`<br>`descmd` | | The description of the release shown on the IG history page, as plain text (desc), or as markdown (descmd). Markdown is read from the file specified using "@[filename.md]". |
   | `changes`    | | An optional relative link to a "Change Log" page in the IG |
   | `first`      | | Set to `true` on first publication of this IG; `false` or omit otherwise |
   | `title`      | &#10003; | The human readable name of the IG |
   | `ci-build`   | &#10003; | The location of the continuous integration build of the IG; often under [`http://build.fhir.org/ig/`](http://build.fhir.org/ig/) |
   | `category`   | &#10003; | A category for the guide; see the categories on the [FHIR registry](http://fhir.org/guides/registry/). |
   | `introduction` | &#10003; | A human readable description of the intent of the IG; shown on the IG history page. |
   {:.table-striped}

1. Ensure you can do a clean build of the IG.

   ```sh
   $ ./_genonce.sh
   ```

   Check the build command-line output and `output/qa.html` for errors and warnings, and correct if needed.

### Do a Publication Run and Upload

1. If you haven't already, create a branch of the `ig-registry` repo.

   ```sh
   $ cd ~/src/ig-registry
   $ git checkout -b example-org-igs
   ```

1. Switch to the the `publication` directory. Ensure you have a current copy of the IG Publisher.

   ```sh
   $ cd ~/src/publication
   $ curl -L https://github.com/HL7/fhir-ig-publisher/releases/latest/download/publisher.jar -o ~/src/publisher.jar
   ```

1. Run the IG Publisher in "publish" mode:

   ```sh
   $ cd ~/src/publication
   $ java -jar ../publisher.jar -go-publish \
      -source    /home/username/src/my-ig \
      -web       /home/username/src/publication/webroot \
      -history   /home/username/src/ig-history \
      -registry  /home/username/src/ig-registry/fhir-ig-list.json \
      -temp      /home/username/src/publication/temp \
      -templates /home/username/src/publication/templates
   ```

   Files or directories must either be under the `publication` directory or specified using an absolute path.

   * `source` - the IG to publish
   * `web` - the base staging directory to put the generated files into
   * `history` - the source directory for the history templates
   * `registry` - the IG registry list file to update with information about this publication
   * `temp` - a temporary storage location
   * `templates` - your customization files for the generated history, etc.

   Running `-go-publish` may build your IG multiple times as part of the process.

1. Run the Jekyll web server and review the generated IG.

   ```sh
   $ jekyll server -s webroot
   ```

   The IG is accessible at <http://127.0.0.1:4000>.

1. Upload the contents of the `webroot` directory to your website (<http://example.org/ig>), and review the publication.

You have now published your IG to your website.

### Commit changes

Once you are confident that the website is updated correctly, commit your changes.

1. The publication process updates the list of publications known to the general FHIR tooling. In the `ig-registry` repo:

   1. Find the entry for your IG in `fhir-ig-list.json`, and update the missing information (shown as `"??"`). Fill in `description`, `authority` (your organization, or omit for personal sites), and `country` (two letter country codes).

   1. Commit the changes, push the changes upstream, and make a pull request to merge the changes back to the `FHIR/ig-registry` repo. Once these changes are accepted, FHIR ecosystem tooling will be aware of your IG publication.

1. Typically, you'll now want to commit two versions of your implementation guide to your repo.

   1. Commit the as-published version of your IG, and tag it. This will enable you to come back to this version if you need to republish, or issue an update.

   1. Commit a version of your IG ready for the next round of development, and commit. To update your IG for further development,

      * In your ImplementationGuide resource (or `sushi-config.yaml`), update the `status`, `releaseLabel`, and `version` elements as appropriate for the CI build; and revert dependencies to use the `current` version, if desired (also, the template version in `ig.ini`).
      * Remove first-time elements from `publication-request.json`, and update other elements in preparation for the next release.
      * Commit the changes to your implementation guide repo.

1. If you are storing the publication website in a repository, you may wish to commit the contents of the `publication` directory.

### Directory structure

Assuming you were publishing your IG with a release label of "1.0.0" as the current publication, then, at the end of this process, you should have a directory structure like:

```text
📁 .
└─ 📁 myig (or your IG)
   └─ ...
└─ 📁 fhir-web-templates (can be deleted)
   └─ ...
└─ 📁 ig-history
   └─ ...
└─ 📁 ig-registry
   └─ ...
└─ 📁 publication
   └─ 📁 webroot
      └─ package-feed.xml
      └─ package-registry.json
      └─ publication-feed.xml
      └─ publish-setup.json
      └─ 📁 myig
         └─ (contents of the published "current" IG)
         └─ 📁 1.0.0
            └─ (contents of the published "1.0.0" IG)
   └─ 📁 temp
      └─ ...
   └─ 📁 templates
      └─ header.template
      └─ index.template
      └─ postamble.template
      └─ preamble.template
      └─ searchform.template.html
```

The contents of the `myig` and `1.0.0` directories will be (almost) the same.

To see the impact of additional publications, you can update the version of your IG in the ImplementationGuide resource (or `sushi-config.yaml`), and in `publication-request.json` (and the other changes from the first section of this page), and run the `-go-publish` process again.


---

// File: input/pagecontent/references.md

Useful sources of information on publication with the FHIR IG Publisher include:

### IG Publication

#### IG Publisher Publication Resources

Note that these are not controlled publications, so they may change. They also may occasionally conflate things that need to be done for the IG Publisher tool to work correctly with the HL7 organizational processes and requirements.

##### HL7 International Confluence pages

* [Getting Started with IG Publisher](https://hl7.github.io/docs/ig_publisher/getting-started)
* [IG Publisher CLI](http://confluence.hl7.org/display/FHIR/IG+Publisher+CLI)
* [Maintaining a FHIR IG Publication](https://confluence.hl7.org/display/FHIR/Maintaining+a+FHIR+IG+Publication)
* [Process for Publishing a FHIR Implementation Guide](http://confluence.hl7.org/pages/viewpage.action?pageId=104580055) (for non-HL7 IGs)
* [IG Publication Request Documentation](https://confluence.hl7.org/display/FHIR/IG+Publication+Request+Documentation)
* [FHIR Package Registry User Documentation](https://confluence.hl7.org/display/FHIR/FHIR+Package+Registry+User+Documentation)

##### IHE International publication process

* [IHE build process](http://github.com/IHE/supplement-template/wiki/IG-build-for-Publication)

##### HL7 Australia

HL7 Australia has produced a set of instructions for IG publication, that, similar to this document, synthesize much of the above:

* [FHIR IG History](https://confluence.hl7.org/display/HAFWG/FHIR+IG+History) - how to set up your publication
* [Step By Step: running publisher -go-publish](https://confluence.hl7.org/display/HAFWG/Step+By+Step%3A+running+publisher+-go-publish)

### General IG Publisher Resources

* [Guidance for FHIR IG Creation](http://build.fhir.org/ig/FHIR/ig-guidance)
* [Implementation Guide Parameters](http://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters)
* [FHIR Tooling Extensions IG](http://build.fhir.org/ig/FHIR/fhir-tools-ig)
  * in particular, [IG Parameter Codes](http://hl7.org/fhir/tools/CodeSystem/ig-parameters)
* [Using `fhir-settings.json`](http://confluence.hl7.org/display/FHIR/Using+fhir-settings.json)


---

// File: input/pagecontent/setup.md

Before using IG Publisher to publish your implementation guides, you need to set up a local environment to stage your IGs for publication. This is a single workspace that will be used for all releases of all implementation guides published to your website.

1. Clone the HL7 [history](https://github.com/HL7/fhir-ig-history-template), [web templates](https://github.com/HL7/fhir-web-templates), and FHIR [IG registry](https://github.com/FHIR/ig-registry) repositories. You'll need to commit changes to the `ig-registry` repo, so you may need to fork the repo if you have insufficient privileges.

   ```sh
   $ cd ~/src
   $ git clone git@github.com:HL7/fhir-ig-history-template.git ig-history
   $ git clone git@github.com:HL7/fhir-web-templates.git fhir-web-templates
   $ git clone git@github.com:FHIR/ig-registry.git ig-registry
   ```

1. Create a publication directory.

   ```sh
   $ cd ~/src
   $ mkdir publication
   ```

   Alternatively you may want to create a publication repository to keep a copy of your website.

1. Within the `publication` directory, set up the publication resources.

   ```sh
   $ cd publication
   $ mkdir templates webroot
   $ cp ../fhir-web-templates/*template* templates
   ```

   This creates a `webroot` directory, creates a `templates` directory, and populates it with the customizable portion of the history templates.

   You may now delete the `fhir-web-templates` repo.

   ```sh
   $ cd ~/src
   $ rm -rf fhir-web-templates
   ```

1. Edit the files in `publication/templates` to reflect the styling used across your site's IGs. This styling will be applied to the IG history pages and other content generated by the publication process. (Styling for your IG itself is determined by the IG's configured template.) Modify the templates to specify:

   * The correct favicon and CSS style sheets
   * Organizational logos or text in the page header
   * The copyright statement to display

   Supporting files should be added to `webroot/assets-hist`.

1. In the `publication` directory, create the [publication configuration](https://confluence.hl7.org/display/FHIR/Maintaining+a+FHIR+IG+Publication) file `webroot/publish-setup.json`, updating fields as appropriate for your site.

   ```json
   {
      "website": {
         "style": "fhir.layout",
         "url": "http://example.org/ig",
         "server": "apache",
         "org": "Example Organization",
         "search-template": "searchform.template.html",
         "index-template": "index.template"
      },
      "feeds": {
         "package": "package-feed.xml",
         "publication": "publication-feed.xml"
      },
      "layout-rules": [
         {
            "npm": "org.example.*",
            "canonical": "http://example.org/ig/{3}",
            "destination": "/{3}"
         }
      ]
   }
   ```

   This [file](https://confluence.hl7.org/pages/viewpage.action?pageId=81027536#MaintainingaFHIRIGPublication-Documentationforpublish-setup.json) defines the structure of your publication site, and where certain files are found.

   * `url` is the base url of the web site
   * `server` is one of the supported websever types: `apache` (apache or nginx), `litespeed`, `asp-old`, `asp-new`
   * `org` is your organization name
   * `layout-rules` specify how IGs are published under the site. You may specify entries for specific IGs, or patterns that your IGs follow:
      * `npm` is the package id, or pattern (with wildcards) of package ids, that this layout rules applies to. The package id is made up of period-separated components.
      * `canonical` is the canonical URL of IGs following this layout rule. It is either fully specified, or describes how to create canonical URLs from the package id components. This example shows a canonical generated using the third component of the package id.
      * `destination` is the location under the `webroot` directory to stage your IG before uploading. This usually agrees with the information in `canonical`.

1. Create `webroot/publication-feed.xml`, updating fields as appropriate for your publication.

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <rss xmlns:dc="http://purl.org/dc/elements/1.1/"
         xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:fhir="http://hl7.org/fhir/feed"
         xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
         <title>Example Organization FHIR Implementation Guides</title>
         <description>FHIR Implementation Guides published by Example Organization</description>
         <link>http://example.org/ig</link>
         <generator>Example Organization</generator>
         <lastBuildDate>Thu, 23 Mar 2023 12:00:00 GMT</lastBuildDate>
         <atom:link href="http://example.org/ig/publication-feed.xml" rel="self" type="application/rss+xml" />
         <pubDate>Thu, 23 Mar 2023 12:00:00 GMT</pubDate>
         <language>en</language>
         <ttl>600</ttl>
         <item>
         </item>
      </channel>
   </rss>
   ```

   This defines the RSS feed used by the FHIR registry to find all the versions of all the implementation guides published on your site.

1. Copy `webroot/publication-feed.xml` to `webroot/package-feed.xml`, and:

   * Update file name in the `<atom:link>` element
   * Update the description and title as appropriate for "packages" rather than "guides"

   This file defines the RSS feed used by the FHIR registry to find the packages for the implementation guides published on your site.

1. Download the latest HL7 IG Publisher to a convenient location.

   ```sh
   $ curl -L https://github.com/HL7/fhir-ig-publisher/releases/latest/download/publisher.jar -o ~/src/publisher.jar
   ```

1. From the publication directory, generate `webroot/package-registry.json`:

   ```sh
   $ cd ~/src/publisher
   $ java -jar ../publisher.jar -generate-package-registry webroot
   ```

1. In the `ig-registry` repo, create a branch for your changes.

   ```sh
   $ cd ~/src/ig-registry
   $ git checkout -b example-org-igs
   ```

1. Update `package-feeds.xml`, so that the registry will know about your packages. Add your feed to the `feeds` array:

   ```json
   {
     "comment" : "The order of the feeds does not matter, but the order of the package-restrictions does",
     "feeds": [
        ...
        {
           "name": "Example Organization FHIR Implementation Guides",
           "url": "http://example.org/ig/package-feed.xml",
           "errors": "admin|example_org"
        }
     ],
     "package-restrictions": [
        ...
     ]
   }
   ```

   The `errors` element contains the contact email for this feed, replacing `@` and `.` with `|` and `_`.

Your publication workspace is now prepared. If appropriate, you may want to commit the publication directory repository.

To publish an actual IG, proceed to [Using IG Publisher -go-publish](./publication.html).


---

// File: input/fsh/patient.fsh

// This is a simple example of a FSH file.
// This file can be renamed, and additional FSH files can be added.
// SUSHI will look for definitions in any file using the .fsh ending.
Profile: MyPatient
Parent: Patient
Description: "An example profile of the Patient resource."
* name 1..* MS

Instance: PatientExample
InstanceOf: MyPatient
Description: "An example of a patient with a license to krill."
* name
  * given[0] = "James"
  * family = "Pond"

---

// File: input/data/features.yml

---
feedback:
    - active: true
      dashboard:
        label: Propose a change
        url: https://github.com/ElliotSilver/how-to-publish/issues


---

