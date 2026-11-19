# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html). The versions up to 2.5.2 were written in German under the name design-craft; they are summarized below. Before the first release the skill was renamed from design-craft to unaverage-design, under the brand unaverage.

The detailed history of the skill is in [skills/unaverage-design/CHANGELOG.md](skills/unaverage-design/CHANGELOG.md).

## [Unreleased]

Installation straight from GitHub was tested on 18 November 2026, after the repository went public, on macOS, in fresh configurations and without signing in: the `skills` CLI 1.8.1 found exactly this skill and installed it for Claude Code and Codex; Claude Code 2.1.325 added the marketplace, installed the plugin and installed `puppeteer-core` by itself; Codex 0.163.0 listed the skill that the CLI had installed; the release ZIP downloaded from GitHub matched the SHA-256 GitHub lists for it and unpacked to the same files as the skill folder in the repository.

### Changed

- README in English and German: the sentences on social posts, carousels and brand work now say "never measured with 3.4 in a scored round", as `docs/testing.md` does, and "Test results" now also summarizes the blind pair test on the AI look (`docs/testing.md`, section 2.14).

## [3.4.3] - 2026-11-18

First public release, with the skill at version 3.4.3. The English versions 3.0 to 3.4 were built and tested before this release; their changes are in [skills/unaverage-design/CHANGELOG.md](skills/unaverage-design/CHANGELOG.md). The test results of round 3.4 apply to 3.4.0. Version 3.4.1 was checked at its first message only, in probes without builds, 3.4.2 was read against the rules, and 3.4.3 was checked on two result pages in Safari's engine. The effect of all three on builds is unmeasured.

### Added

- One skill, `unaverage-design`, written in English and adapted from the German 2.5.2 rather than only translated. The result follows the language of the brief, and questions come in the user's language. Copy rules for English headlines, spelling by target market (US or UK), English word lists for the generic check, WCAG 2.2 as the international baseline.
- Kickoff that asks first: when the direction is open, the goal is clear and the user has not named things the look should draw on, the first message asks for them, and the directions follow the answers as mockups. With named things, or when the user asks for directions at once, the three ranked directions come in the first message.
- German market module in `references/markets/`: German copy (formal or informal address, anglicisms), typography (compounds, line breaks, quotation marks, Swiss spelling, number formats) and German word lists for the generic check.
- Module for EU and DACH law in `references/markets/`: checklists for the German accessibility act (BFSG), price indication (PAngV), unfair competition (UWG), imprint, fonts and GDPR.
- Claude Code plugin marketplace in `.claude-plugin/marketplace.json` with one plugin.
- Installation for Claude Code and Codex with `npx skills add`, through the Claude Code plugin marketplace, or from the release ZIP. The paths were tested on 14 November 2026 on macOS, each in its own empty configuration and with the repository as a local folder, not yet on a fresh account or straight from GitHub: the `skills` CLI 1.8.1 found exactly this skill and installed it for Claude Code and Codex; Claude Code 2.1.317 added the marketplace, installed the plugin and installed `puppeteer-core` by itself (2.1.62 did not); Codex 0.163 listed the skill once the release ZIP was unpacked into `~/.agents/skills`. In two Codex runs on the same day, one calling the skill by name and one not, it loaded and built both results; in Codex's default sandbox Chrome does not start, so rendering and the measured generic check need permission to run outside the sandbox (not yet tested with 3.4.3). On 16 November 2026 the skill also ran on Windows 11 Pro from the release ZIP, unpacked into `~/.claude/skills` for Claude Code (desktop app 5.11492.5) and into `~/.agents/skills` for the ChatGPT app with its Codex runtime (codex-cli 0.166.0-alpha.5.1): it triggered without being named, both agents ran the generic check and the measuring script after `npm install`, and, called directly, the scripts rendered a page and exported a PDF with Node 26.13.1 and Chrome. In the Claude app the release ZIP was uploaded as a skill on 16 November 2026; in a chat without a project folder it ran only when named, and it ran with fewer checks: at Quick without its reviewer and its measuring script, and without the font check, since the app's cloud workspace could not reach Google Fonts.
- README in English and German, test method, results and limits in `docs/testing.md`.
- Apache License 2.0 and NOTICE.

## History before the public release

These versions were built and tested internally in German and were not published.

### 2.5.2, 2026-10-15

- A rule against first-reach props: the object that comes to mind first for a topic (a stamp, a highlighter, a calendar entry, a sticky note) is a cliché while it only shows the topic; it carries an idea only with the fields of the running case on its carrier, once per surface, in the form of its real model. Motifs rotate across brands like directions and fonts. No new tell, the generic check is unchanged.
- Small review rules from a practice test on a real brief: a rebuilt real interface follows its reference capture and every deviation is named in the wrap-up; every text in the image goes through the language check, not only the caption; in the feed the caption adds what the image does not show; reviewers judge type size, spacing and contrast only at full size or by measurement; the design contract lists all brand colors with their roles.
- Not tested on its own.

### 2.5.1, 2026-10-10

- Hybrid of the generative core of version 1 (one tangible idea from the product's world, real material, the product shown as built, copy that leads with the benefit) and the knowledge of version 2 (13 style directions, registers, a measuring generic check, law and accessibility, independent reviewers, the user decides between directions).
- Six rounds of internal blind tests against version 1, each followed by a revision (2.1.0 to 2.5.1). The last tested version per brief (2.3 to 2.5) lost none of eight briefs: six wins, five of them stable for both judges in both presentation orders, and two ties, including three briefs never used while building the skill. Judges were AI models; method and limits are in `docs/testing.md`.
- 2.5.1 adds two rules after the sixth round (scope follows the brief, a requested core function is visible at a glance) and was not tested on its own.

### 2.0.0, 2026-10-08

- Research-based rebuild from a craft checklist into a full design skill: 14 research reports with fact check and about 70 rendered and measured reference works.
- Eight-stage process with three ranked style directions, direction mockups, effort levels (Quick, Standard, Studio), independent reviewers and a generic check calibrated on human-designed and AI-generated pages.

### 1.0.0, 2026-10-05

- First version: a five-step process, eight craft levers, image sourcing, a quick check and hand-drawn-style accents.

[Unreleased]: https://github.com/jakob-meyer/unaverage/compare/unaverage-design-v3.4.3...HEAD
[3.4.3]: https://github.com/jakob-meyer/unaverage/releases/tag/unaverage-design-v3.4.3
