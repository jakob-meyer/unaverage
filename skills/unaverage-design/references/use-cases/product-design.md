# Product design

As of 2026-10-10. Profiles follow the schema in [README.md](README.md) 1; case matrix and R0 in [README.md](README.md) 2, gates in 4, render path R-UI in 5. Evidence strength: high, medium (also a measured reference), H (derivation); sources [n] at the end.

**Cases:** Case C1 to Case C6, Case C8, Case C9, Case X4, Case C10. Case C7 in [startup.md](startup.md), Case G7 in [b2b-marketing.md](b2b-marketing.md).

## Group rules

The Operate register applies in full ([directions/README.md](../directions/README.md) 2.1); the direction supplies only the skin. In addition:

1. **States first:** matrix in Case C5, for AI also Case C10; mockup: main screen plus one state; three rendered states from stage 4 on and as a gate (medium, cluster product UI).
2. **Sample data as a case story:** one consistent world (names, IDs, amounts, times) across all views instead of single values; never Acme, Lorem, round fantasy numbers (G7, tell E5).
3. **Conventional frame, own skin:** novelty costs (high [1][2]). Platform components before custom builds.
4. **Emphasis in exactly one place per screen:** the main action or current state expressive, everything repeated calm (medium [3]).
5. **Judge product and marketing shell separately** (Reference: Copilot Money: strong app, generic website). The shell runs through Case B1 or Case B2, where PRO may carry.
6. **Generic check in medium `ui`:** index at most 1 (stricter than the universal 2). Visual check of tell P1 to P4 and V18. UI mockups in web mode trigger tell D7 and D8 as a measurement artifact ([review.md](../review.md)).
7. **Access and law:** targets, contrast, focus following G6. When consumers conclude contracts in an app or web app (purchase, subscription, account), accessibility law applies where the market requires it, for the whole flow including sign-up and payment, plus an accessibility statement ([accessibility.md](../accessibility.md) 2.3 app; [compliance.md](../compliance.md) 3; EU and DACH: [markets/eu-dach-compliance.md](../markets/eu-dach-compliance.md) 2 and 3).

## Case C1 Web app

Who: S very high, B2B. Register Operate. Top 12, rank 12. Evidence: Reference: Linear, Reference: Carbon.

- **Specs:** desktop 1440 x 900, minimum width 1280; breakpoints 320 (4 columns), 672 (8), 1056, 1312, 1584 (16), gutter 32 px (high [4]); spacing on a 4 or 8 px base by level: 0 to 8 px inside elements, 12 to 24 px inside components, 32 to 80 px between areas (high [5]); floating elements cover nothing.
- **Minimum type size:** gate 12 px; target text 13 to 14 px; page title up to a factor of 4, otherwise a scale of at most 2.5 per screen (high [6][7]); consumer apps: [directions/README.md](../directions/README.md) 2.1, last row.
- **Situation:** power users with keyboard and mouse, routines; errors cost time or money (H).
- **Success:** core task without help; all states designed (including no permission); routines fast (visible keyboard shortcuts); nothing jumps on a state change.
- **AI failure modes:** "John Doe" and round numbers (tell E5); cards in cards (tell C7); emoji as icons (tell C9); unchanged shadcn values (tell B6); only the success case, status only as a text badge (tell V18); one row height around 53 px with a line under every row (tell P2); permanent dark with glow without a tool reason (tell B5, C3; ground rule G9).
- **Pros:** task analysis and information architecture first; density as a parameter with a coupled toolbar (high [8]); selection as a mode change, a batch bar replaces the toolbar (Reference: Carbon); relative time, IDs as a gray prefix, codes in mono chips (Reference: Linear); a theme from a few OKLCH variables (high [9]); order by the user's question (when, which step) instead of by area.
- **Directions:** home ORD, STI. Starter set (R0 ORD, shadcn tile look): near ORD (team tool, principle from Reference: Carbon), also DAT (data-heavy, fit 2); edge STI (calm solo work, Reference: Things), also RUL (Reference: Copilot Money) or WRM (personal app, each fit 2); bold RAW only for developer tools. Excluded EDI, HER, ONE, TYP.
- **Assets:** required: domain data with edge cases, roles, core tasks, brand color. Substitute: test data following domain rules, recognizable as an example.
- **Output:** clickable HTML prototype, PNG per state, tokens as CSS variables; R-UI.
- **Check:** states rendered (at least empty, loading, error, data-rich, overflow at 320 px); scale per screen; saturated pixels in the product area (team tool at most 2%); Nielsen heuristics as a checklist; every feature of the brief as a control, state or result on a requested screen; details people plan with at the register's text size ([craft.md](../craft.md) 6.1).
- **Consumer web app** (personal, household, leisure): fit row "C1 Web app B2C" ([directions/README.md](../directions/README.md) 10) and the row Consumer app of the Operate register (2.1 there): tinted ground, a second voice by default for content names and key numbers, one color area per screen; saturated pixels up to 22% instead of 2%; visual check "does it read like a wireframe?". In the empty state, the settings the core promise depends on stand as direct controls, not behind a link, with at most one main action.

## Case C2 Dashboard

Who: S very high, B2B. Register Operate. Top 12, rank 12 (with Case C1). Evidence: Reference: Copilot Money, Reference: Gentler Streak, Reference: Flighty.

- **Specs:** one screen on which the most important things can be monitored at a glance (medium [10]); check at 1440 x 900; charts following [craft.md](../craft.md) 9.
- **Minimum type size:** gate 12 px, also for axes and chart labels; the most important number is the largest element of the module, unit and currency one step smaller (medium, Reference: Flighty).
- **Situation:** a daily glance or an alert; the decision whether action is needed (H).
- **Success:** deviations stand out; from every number a path leads to an action.
- **AI failure modes:** 6 to 8 identical KPI cards with trend badges (tell P1, D3, D4); opposite trends in the same color (tell V17); pie charts, gradient fills (tell V17, C1); palette chart-1 to chart-5 (tell P4); invented growth rates (tell E5).
- **Pros:** ask which decision is made daily; few metrics with a reference (target, previous period, corridor, plan); actual against plan with a dashed target path (Reference: Copilot Money); a corridor instead of a target line where values may fluctuate (Reference: Gentler Streak); bullet graph or sparkline (medium [10]); a task list ("2 varieties almost out") instead of a wall of tiles.
- **Directions:** home ORD, DAT. Starter set (R0 DAT as a tile dashboard): near DAT or ORD; edge RUL (category as a color pill with a symbol), also STI or WRM; bold: no viable option, RAW only quietly and with consent (example Lagerlicht). Excluded EDI, HER, DRW, ONE, TYP.
- **Assets:** required: a realistic data set with a time series and target values. Substitute: domain data with edge cases, labeled.
- **Output:** HTML with SVG charts, PNG; R-UI; plus a data visualization skill, if available.
- **Check:** like Case C1; count tiles of equal size; every metric with a reference; trend color by meaning (rising costs not green); areas proportional ([craft.md](../craft.md) 9.3); the empty state of first use rendered.

## Case C3 Mobile app

Who: S high, B2C medium. Register Operate. Evidence: Reference: Flighty, Reference: Gentler Streak, Reference: Crouton.

- **Specs:** 390 x 844 pt; Dynamic Island and home indicator free; touch targets 44 x 44 pt, minimum 28 x 28 pt, about 12 pt padding (high [11][12]); Material 48 x 48 dp (medium); text scalable to 200%, with large text rebuild the layout instead of truncating (high [12]).
- **Minimum type size:** gate 12 px (iOS 12 pt) for must-read text, input fields 16 px; target body 16 to 17 pt, Large Title 34 pt (high [6]); iOS Caption 2 and Material Label Small (11 each) only without must-read content; small type never in Ultralight, Thin, Light.
- **Situation:** on the go, one hand, short sessions, often outdoors (H).
- **Success:** core task with the thumb; platform conventions kept; text stays readable with a larger system text size.
- **AI failure modes:** a shrunk web layout (tell V22); touch targets too small; hamburger menu instead of a tab bar; card stack (tell D3); fake status bar; glass without a contrast measurement (tell C4, [modules.md](../directions/modules.md) M-TRD).
- **Pros:** tab bar with few destinations, thumb zone, native components; one fast core interaction; microcopy in the brand voice; user status as a system state ("On a Break", Reference: Gentler Streak); one step per view when hands are busy (Reference: Crouton); the same module on phone, lock screen and watch (Reference: Flighty).
- **Directions:** home STI, WRM. Starter set (R0 DRW, flat characters): near WRM (personal app, photos, warm neutrals); edge RUL or MAX quietly (emphasis only on the main action and current state); bold STI (calm solo work), also ORD (fit 2). Excluded EDI, HER, ONE, TYP. DRW only with a character of its own in a simple SVG technique.
- **Assets:** core task, content, brand color, photos if any. Substitute: content from the brief as a case story.
- **Output:** HTML in a device frame 390 x 844, PNG per state; R-UI with `--viewports 390x844`. For purchase, subscription, account: accessibility law (group rule 7).
- **Check:** measure touch targets; view with 200% text (CSS simulation, H); states; safe areas free; contrast over images; a screen reader label on every control (H).

## Case C4 Onboarding

Who: S high. Register Operate. Evidence: rule-based.

- **Specs:** sizes like Case C1 or Case C3; short, skippable, findable again later; permissions in context with a reason; no license texts, no waiting for downloads (high [13]).
- **Minimum type size:** like Case C1 or Case C3; display type only here and in empty states.
- **Situation:** first contact after download or sign-up; the user wants the first real benefit fast.
- **Success:** few steps to the first result; few drop-offs.
- **AI failure modes:** three cards with an illustration and "Next" (high [14]); Corporate Memphis figures from free sets (tell V14, V20).
- **Pros:** straight into the product with sample data; hints at the place of action; questions only when they adapt the product at once (H); if the brief asks for cards (example Nadelöhr), every card shows the real product and an action.
- **Directions:** home WRM, DRW. Starter set (R0 DRW): near DRW in best form (a character of its own from the product's world) or WRM; edge MAX (main action expressive); bold ORD, also STI. Excluded HER, TYP, RAW.
- **Assets:** the core benefit in one sentence, sample data; a character of its own only in a simple SVG technique or commissioned. Substitute: the real product with sample data instead of a character.
- **Output:** HTML flow, PNG per step; R-UI.
- **Check:** steps to the first benefit; skip present; permission in context; no card tutorial without an explicit brief; sign-up without puzzles, password can be pasted ([accessibility.md](../accessibility.md) 2.2).

## Case C5 States (Empty, Loading, Error, Success, Overflow)

Who: S high, every product UI. Register Operate. Evidence: Reference: Gentler Streak, Reference: Flighty. AI states in Case C10.

- **Specs:** matrix per interactive component (medium [15]): default; hover only with `@media (hover: hover)`; focus visible (2 px, 3:1, never covered); active (scale 0.96 to 0.97); loading; disabled (state the reason); selected (mirrored in the URL); error; success; empty; overflow (short, medium, very long); destructive (confirmation or undo window). Empty states: first use, cleared by the user, no search results, loading error, no permission (medium [16], the last three H). Loading: under 1 s nothing, 2 to 10 s a skeleton with the real structure or a spinner for single modules, over 10 s progress with cancel (high [17][18]).
- **Minimum type size:** like the product; error texts not smaller than the field text (H).
- **Situation:** moments of uncertainty decide trust and drop-off (H).
- **Success:** empty state with system status, a learning hint and a direct action (medium [16]); errors in place, specific, with a solution, input preserved, not blaming (medium [19]); the skeleton shows the real structure.
- **AI failure modes:** "No data"; stock illustration without an action (tell V14); toast "Something went wrong"; only default and hover designed (tell V18); fade-up on everything (tell V25); a spinner for everything.
- **Pros:** design the states together with the main state; a faint preview of what will appear; templates or import as a shortcut; brand voice in one sentence; optimistic update with fallback; submit stays active until the request starts, then "Saving"; encode certainty (confirmed, warning, forecast; Reference: Flighty).
- **Directions:** follow the product direction; only the dose is chosen. Home DRW. Starter set (R0 DRW, stock illustration): near DRW in best form (a character of its own with a role), also WRM (fit 2); edge RUL (primitive in the empty state and loading animation) or ONE (at most one punchline in the empty or success moment); bold ORD or STI (status, hint, action without an image). Excluded EDI, HER, TYP. MAX only for celebration and reward.
- **Assets:** none extra; for DRW a character of its own. Substitute: an objective state without an image.
- **Output:** HTML, PNG per state; R-UI with `--selector .state`. States by email as Case G7.
- **Check:** check off five empty contexts and eleven states; every error message names the solution; focus on the first error on submit; overflow short, medium, very long at 320 px; reduced motion.

## Case C6 Settings

Who: S medium. Register Operate. Evidence: rule-based.

- **Specs:** platform conventions: macOS its own window via Command-comma, iOS permissions in the system Settings (high [20]); native apps with their own windows instead of modals (high [21]).
- **Minimum type size:** like Case C1 or Case C3.
- **Situation:** a rare visit with a concrete goal ("where do I turn this off?"); fear of breaking something (H).
- **Success:** good defaults, most people change nothing; the option sought in one step; the effect visible at once (high [20]).
- **AI failure modes:** long lists of identical switches; a save button for options that take effect immediately; a destructive action without confirmation; every group as a card (tell C6, D3).
- **Pros:** few options; task-related options directly in the task; groups by the users' mental model; search when there are many options; a danger zone, separate and confirmed.
- **Directions:** home ORD, STI. Starter set (R0 ORD): near ORD; edge STI, also WRM (fit 2); bold: no viable option. Excluded EDI, HER, DRW, ONE, MAX, TYP.
- **Assets:** options with defaults. Substitute: options from the brief; options not named are dropped in the presentation view and listed in the review view.
- **Output:** HTML; R-UI.
- **Check:** number of options; immediately effective options without save; destructive action with confirmation or undo; label and control as one target.

## Case C8 Forms and checkout

Who: S high, B2C high, B2B medium. Register Operate. Evidence: rule-based.

- **Specs:** a minimal number of fields (average 11.3, ideal 8; fields weigh more than steps, high [22]); inline validation when leaving the field, not while typing, remove errors at once while correcting, positive confirmation (high [23]); fitting input types and `autocomplete`; the label focuses the field; on submit, focus on the first error; concrete button labels (medium [15]). Checkout with consumers: the order button worded as the market's law requires, summary and button in one viewport at 390 px, cancellation and withdrawal reachable ([compliance.md](../compliance.md) 3; EU and DACH: [markets/eu-dach-compliance.md](../markets/eu-dach-compliance.md) 3); accessibility law (group rule 7).
- **Minimum type size:** input fields 16 px (otherwise iOS zooms, medium [15]); labels gate 12 px, target 13 to 14 px desktop, 16 px mobile; error texts as large as the labels (H).
- **Situation:** the user wants to be done; every follow-up question costs drop-offs; on mobile the keyboard covers half the surface (H).
- **Success:** completion rate; few failed attempts; no input is lost.
- **AI failure modes:** placeholders instead of labels; validation while typing; errors as a toast at the top; required fields without marking; two columns on mobile; "Submit" or "Next" as the label (tell V21).
- **Pros:** single column; field width by expected input; format examples; guest checkout; security information at payment in plain words (medium, cluster Germany).
- **Directions:** home ORD, STI. Starter set (R0 ORD): near ORD; edge STI, also WRM (fit 2); bold: no viable option; expression only in the success moment (DRW or MAX quietly). Excluded EDI, HER, ONE, TYP.
- **Assets:** field list with required and optional, validation rules, error and mandatory texts. Substitute: a quiet gap in place, `[REQUIRED: ...]` only in the review view ([compliance.md](../compliance.md) 2).
- **Output:** HTML; R-UI at 1440 x 900 and 390 x 844.
- **Check:** number of fields; time of validation; error at the field with a solution; keyboard pass; input 16 px on mobile; target sizes; no overflow at 320 px; wording of the order button by text search in the DOM.

## Case C9 Design system and component library

Who: S medium to high (from the second product team on), B2B medium. Register Operate, output as tokens and docs. Evidence: Reference: Geist, Reference: Carbon, Reference: Material 3.

- **Specs:** tokens before the first screen. Color scales with 10 to 12 steps and fixed roles (surfaces with states, borders, solid surfaces, text; high [24]); contrast as a property of the scale (five steps apart for small text, four for icons and large text, high [25]); type in roles (label, copy, heading; productive and expressive, high [7]); motion tokens short 50 to 200 ms, medium 250 to 400 ms, long 450 to 600 ms, emphasized `cubic-bezier(0.2, 0, 0, 1)` (high [26]); state matrix per component (Case C5).
- **Minimum type size:** the smallest must-read role 12 px (iOS 11 pt and Material Label Small 11 sp only without must-read content); text role 14 px desktop, 16 px mobile.
- **Situation:** teams build from it daily; one error multiplies in every screen (H).
- **Success:** new screens without single values outside the scales; contrast guaranteed instead of checked afterwards; themes from a few variables; the docs say when a component fits.
- **AI failure modes:** unchanged Tailwind and shadcn values (tell B6); one radius everywhere (shadcn 0.625 rem, tell C6); few semantic tokens for all states; palette chart-1 to chart-5 not tied to status (tell P4); mixed icon sets.
- **Pros:** set steps with roles once, do not keep adding; radii by size and nesting, smaller inside; icon stroke width coupled to the type weight; do and don't per component; a generator for rule-based variation where the brand has a primitive (Reference: Vevo, Reference: Faculty).
- **Directions:** the system translates the brand direction into tokens. Home ORD, RUL. Starter set (R0 ORD, shadcn default): near ORD (principle from Reference: Carbon), also DAT (data products, fit 2); edge RUL (primitive from the logo or category as a token family); bold MAX, DRW or RAW as a skin, only on key elements. Excluded ONE, TYP.
- **Assets:** brand colors, house typeface with license, logo, inventory of existing screens, component list. Substitute: system font and starter palette from [directions/README.md](../directions/README.md) 2.1.
- **Output:** tokens as CSS variables and JSON; HTML docs of all components in all states; system sheet as PNG; R-UI, R-Web. Handover following [craft.md](../craft.md) 13. For Figma or PowerPoint teams Case J4 ([b2b-marketing.md](b2b-marketing.md)).
- **Check:** contrast matrix of all text and surface pairs (4.5:1, 3:1); every step has a role; single values outside the scales in the sample screen (target 0); contact sheet of all components in all states, light and dark; inner radii smaller than outer; tabular figures active.

## Case X4 Docs, changelog and developer portal

Who: S high, B2B medium. Register Read with controls. Evidence: Reference: Geist, Reference: Carbon (system docs); changelog and API docs rule-based.

- **Specs:** Read register ([directions/README.md](../directions/README.md) 2): reading text 16 to 18 px, line 45 to 75 characters, at most three heading levels; code in mono with a copy button; sidebar and search; the URL mirrors the section (medium [15]).
- **Minimum type size:** web gate; code target 13 to 14 px.
- **Situation:** a developer looks for an answer under time pressure and copies code (H).
- **Success:** the answer in one step through search; code works when copied; the changelog shows what changes for the user.
- **AI failure modes:** mono as costume (tell A5, V12); terminal aesthetics as decoration; neon on near-black (tell B4); cards instead of a list in navigation (tell D3); template docs without character.
- **Pros:** text first, visible construction, underlined links, states with text rather than color alone; mono only for code; versions and relative time in the changelog; examples with real resources instead of placeholders (principle from Reference: Stripe).
- **Directions:** home ORD, RAW. Starter set (R0 PRO, dev tool costume): near ORD, also PRO (product crop in the changelog, fit 2); edge RAW (Workshop mode); bold: no viable option. Excluded EDI, HER, WRM, ONE, MAX, TYP.
- **Assets:** real API resources, versions, code examples. Substitute: examples from the existing API; if one is missing, it is dropped or appears as a recognizable example (draft based on the brief); never invented endpoints presented as real.
- **Output:** HTML; R-Web.
- **Check:** line length; heading levels; contrast of syntax colors (4.5:1); copy function; search; a dark version only with a scene reason (G9) and system-controlled.

## Case C10 AI product UI

Who: S very high, B2B high. Register Operate, answers with reading density. Evidence: Reference: Linear (agents), Reference: Perplexity, Reference: Raycast.

- **Specs:** sizes like Case C1 and Case C3. Forms: chat; copilot as a sidebar (320 to 420 px) or inline action; agent with a session page and a plan. Answer column 640 to 768 px; input field fixed at the bottom, from 44 px high, grows to about 40% of the window height; send and stop in the same place; history sidebar 240 to 300 px; artifact area on the right from about 1024 px (H). History with `role="log"`, an announcement per finished section (high [27]).
- **Minimum type size:** gate 12 px (UI, timestamps, source chips), target 13 to 14 px; answer text target 15 to 16 px (H); mobile input 16 px.
- **Situation:** open outcome; unclear what the system can do; waits from seconds to minutes; errors cost trust faster here (H).
- **Success:** the user checks where needed; can stop, correct and undo at any time; sees whether the system is thinking, acting, waiting or done; no risk level 3 action without individual approval.
- **AI failure modes:** sparkles as the only AI sign, violet gradient, glow around the input field (tell B1, C1, C3, V9; high [28]); brain, network or robot as the anchor (tell V1); neon stage (tell B4, B5); dots without text (tell D10); generic suggestions in a 2 x 2 grid (tell D3, C8); "Magic" (tell E1); invented sources (tell E5); terminal costume (tell A5); robot stickers (tell V20); only the success case (tell V18); percent confidence; "Continue?" without content.
- **Pros:** state as text with an activity; the agent as a colleague with a label who uses the platform's normal actions (Reference: Linear); tool calls visible (Reference: Raycast); mode chips with text, brand color instead of industry purple (Reference: Perplexity); the brand primitive as the state indicator instead of sparkles.
- **Directions:** home ORD, STI. Starter set (R0 PRO as AI costume: dark stage, violet, sparkles, glow): near ORD (team tool), also DAT (analysis copilot); edge STI (solo work), also RUL (logo primitive as state), WRM (personal assistant) or RAW (developer tool), each fit 2; bold: no viable option, DRW only with a character of its own as the state carrier. Excluded EDI, HER, ONE, TYP. M-MOT only for state transitions.
- **Assets:** required: domain data with edge cases, checkable sample sources, a tool list with risk levels, capabilities and limits in one sentence. Substitute: sample conversations from the brief, recognizable as examples; source chips from the brief's sample sources, also recognizable as examples (group rule 2); real sources as an asset request in the review view.
- **Output:** HTML prototype, PNG per state; R-UI with `--selector .state` at 1440 x 900 and 390 x 844. Question in the kickoff: "Which actions may the assistant take without asking?"
- **Check:** at least Empty, Thinking, Streaming, Citing, Approval, Error, Stopped rendered; stop in the send position; approval dialog with the exact action; AI notice as text; `role="log"`; generic index `ui` at most 1; no sparkles without a text label.

**AI state matrix** (in addition to Case C5, one `.state` surface per state; high [29][30], medium [31], text patterns H; examples from a freight forwarder, German originals in [markets/german.md](../markets/german.md) 2):

| State | Show and control | Text pattern |
|---|---|---|
| Empty | capability and limit in one sentence; 2 to 4 suggestions with a verb from the context, inserted into the field rather than sent; AI notice if not obvious | "Ask about shipments, routes or damage claims. I can only see this branch." |
| Typing | send only with content; attachments, mode and model as labeled chips; limit shown only from about 80%; Enter sends | placeholder as an example, never as a label |
| Thinking | status line with the activity, later the duration; reasoning collapsed | "Checking 27 shipments", then "Worked for 8 s" |
| Streaming | section by section; code and tables reserve space, nothing jumps; auto-scroll only at the end | |
| Citing | number at the sentence; card with title, site, date; preview with a jump to the passage; sources can be excluded | "According to route plan week 42, stop 7 [2]" |
| Uncertain | follow-up question or 2 to 3 alternatives; uncertainty named in the sentence | "Two shipments match. Do you mean the pallet to Kassel or the part load to Fulda?" |
| Tool running | step with verb and object; status per step; input and output expandable; plan with check marks | "Searching archive: damage report", then "Found 3 reports" |
| Approval needed | purpose, exact action, consequences, reversibility, scope; the agent waits visibly | "Send delivery notice to 3 recipients? This can't be undone." |
| Error | what happened, what was kept, next step; distinguish the kind (network, model, tool, policy) | "The source isn't responding. The answer so far is kept. Try again?" |
| Stopped | partial output stays, marked; steps carried out; continue, new, undo | "Stopped after step 2 of 4. Route created, delivery notice not sent." |
| Limit reached | warn from about 80%, time until the limit resets, alternatives; no upsell wall | "3 messages left until 6:40 PM." |
| Done | actions on the result, also on touch; for agents keep or discard per change | "3 files changed" |
| Stale | last activity, nothing runs anymore; restart or cancel | "No activity for 2 hours." |

- **Time:** under 1 s nothing; 1 to 10 s a status line; over 10 s steps or progress plus cancel (high [30]); agent runs over 1 minute in the background with a notification (H).
- **Sources and confidence:** cite only what was retrieved (medium [31]); confidence only when it changes an action, categorical or as alternatives, percent only with a reference (high [32]); a warning at the risky statement, one fixed sentence on error-proneness under the field (high [29]).
- **Control:** stop during the whole output (Esc, H); regenerate as a browsable variant, never overwriting; editing creates a branch; agent changes undoable one by one, an undo window instead of a confirmation; memory visible and deletable; the agent steps back on request (high [29][33], medium [31]).
- **Labeling** following [compliance.md](../compliance.md) 3 (EU: [markets/eu-dach-compliance.md](../markets/eu-dach-compliance.md) 13); label actions, not features ("Summarized with AI" instead of an "AI" badge; German wording in [markets/german.md](../markets/german.md) 2); AI content through a label or a gray surface, never through color alone (H).

**Approvals by risk** (levels H, based on [29][31][34][35]): 0 Read (search, permitted files): without asking, visible in the log. 1 Reversible write (draft, file in the project, status): without asking or with a session approval, undo visible. 2 External effect (send, publish, network command, third-party domain): approval per action, session scope possible. 3 Irreversible, money, law, security (delete, pay, cancel, rights, credentials): always individual approval with the consequences, never "always allow".

Dialog: title by tool, purpose, the exact action as text, reversibility; Yes, Yes for a named pattern, No; a standing approval only when the dialog shows everything the rule allows; full automation only after a warning; approve fetching third-party content and acting on it separately (high [34][35]). Plan before execution. Agents carry a name plus the label "Agent"; a human stays responsible and visibly assigned (high [33]).

## Sources

1. Browser Company, Arc 2025: https://browsercompany.substack.com/p/letter-to-arc-members-2025
2. Figma, Behind our redesign UI3: https://www.figma.com/blog/behind-our-redesign-ui3/
3. Google, Expressive Design: https://design.google/library/expressive-material-design-google-research
4. IBM Carbon, 2x Grid: https://carbondesignsystem.com/elements/2x-grid/overview/
5. IBM Carbon, Spacing: https://carbondesignsystem.com/elements/spacing/overview/
6. Apple HIG, Typography: https://developer.apple.com/design/human-interface-guidelines/typography
7. IBM Carbon, Type sets: https://carbondesignsystem.com/elements/typography/type-sets/
8. IBM Carbon, Data table: https://carbondesignsystem.com/components/data-table/style/
9. Linear, redesign of the Linear UI: https://linear.app/now/how-we-redesigned-the-linear-ui
10. Few, Bullet Graph: https://www.perceptualedge.com/articles/misc/Bullet_Graph_Design_Spec.pdf
11. Apple HIG, Buttons: https://developer.apple.com/design/human-interface-guidelines/buttons
12. Apple HIG, Accessibility: https://developer.apple.com/design/human-interface-guidelines/accessibility
13. Apple HIG, Onboarding: https://developer.apple.com/design/human-interface-guidelines/onboarding
14. NN/g, Mobile Tutorials: https://www.nngroup.com/articles/mobile-tutorials/
15. Vercel Labs, Web Interface Guidelines: https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
16. NN/g, Empty States: https://www.nngroup.com/articles/empty-state-interface-design/
17. NN/g, Skeleton Screens: https://www.nngroup.com/articles/skeleton-screens/
18. NN/g, Response Times: https://www.nngroup.com/articles/response-times-3-important-limits/
19. NN/g, Error Messages: https://www.nngroup.com/articles/error-message-guidelines/
20. Apple HIG, Settings: https://developer.apple.com/design/human-interface-guidelines/settings
21. Raycast, Technical deep dive: https://www.raycast.com/blog/a-technical-deep-dive-into-the-new-raycast
22. Baymard, Checkout Form Fields: https://baymard.com/blog/checkout-flow-average-form-fields
23. Baymard, Inline Validation: https://baymard.com/blog/inline-form-validation
24. Vercel Geist, Colors: https://vercel.com/geist/colors
25. Stripe, Accessible color systems: https://stripe.com/blog/accessible-color-systems
26. Material 3, MotionTokens: https://raw.githubusercontent.com/androidx/androidx/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/tokens/MotionTokens.kt
27. MDN, ARIA log role: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/log_role
28. NN/g, AI Sparkles Icon: https://www.nngroup.com/articles/ai-sparkles-icon-problem/
29. Apple HIG, Generative AI: https://developer.apple.com/design/human-interface-guidelines/generative-ai ; Amershi et al., CHI 2019: https://www.microsoft.com/en-us/research/uploads/prod/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf
30. Cloudscape, GenAI Loading States: https://cloudscape.design/patterns/genai/genai-loading-states/
31. Shape of AI: https://www.shapeof.ai/
32. Google PAIR, Explainability and Trust: https://pair.withgoogle.com/chapter/People%20+%20AI%20Guidebook%20-%20Explainability%20+%20Trust.pdf
33. Linear, Agent Interaction Guidelines: https://linear.app/developers/aig
34. Claude Code, Permissions: https://code.claude.com/docs/en/permissions
35. VS Code, Approvals: https://code.visualstudio.com/docs/agents/approvals
