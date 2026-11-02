# CRITICAL FIX: CybAram Cyber Puzzles — 100 Unique, Fully Interactive Puzzles

Update the existing CybAram Cyber Puzzles implementation. Fix the multi-select behaviour shown in the supplied screenshot and replace the unreliable repetitive puzzle-generation logic with a structured bank of **100 genuinely distinct, fully defined puzzles**.

Do not merely change the visual design, shuffle the same questions, or generate 100 copies with different wording. Inspect and update the actual application code, puzzle data, answer validation, game-session state, and progress tracking.

Preserve the existing website, routes, branding, music, sound effects, scoring system, responsive layout, and results poster.

---

## PART 1 — FIX THE MULTI-SELECT BUG FIRST

### Current problem

In the “Spot the Symptoms” puzzle, the options include:

- Urgent deadline
- Friendly greeting
- Unrealistic offer
- Proper company name

The correct answers are “Urgent deadline” and “Unrealistic offer”. However, selecting one immediately marks the puzzle as correct and reveals the result.

This is incorrect because the activity requires multiple answers.

### Required interaction

Implement a real multi-select interaction for this puzzle type.

1. Initially, all four options must have neutral styling.
2. The player can select “Urgent deadline”.
3. The selected option gets a neutral selection indicator, such as a checkmark or highlighted border, but no green correctness feedback.
4. The player can then select “Unrealistic offer”.
5. The player can deselect either option before submitting.
6. The player clicks **“Check Answers”** to submit the complete selection.
7. Only after submission should the game validate the selected answers.
8. Green feedback should appear only for correct answers after validation.
9. Incorrectly selected answers should be indicated in red.
10. Explain why the correct symptoms are suspicious.

Provide a clear “Check Answers” button and an optional “Clear Selection” button.

### Validation rules

Use set-based validation, not single-answer validation.

- Expected correct IDs: urgent_deadline and unrealistic_offer.
- Selecting only one correct answer must not mark the puzzle as fully correct.
- Selecting both correct answers and no incorrect answers should earn full credit.
- Selecting a correct answer and an incorrect answer should not earn full credit.
- If partial credit is supported, calculate it consistently and clearly.
- Do not reveal the correct answers before submission.
- Prevent accidental double scoring if the player clicks “Check Answers” repeatedly.
- Disable answer changes after final submission unless the player explicitly chooses to retry.
- Do not automatically advance to the next puzzle before the feedback is displayed.

### Apply the same logic everywhere

Audit all puzzle types and use the correct validation model:

- Single-select: exactly one answer.
- Multi-select: all required answers, with no incorrect selections.
- Tap-to-discover: required scene objects must be tapped.
- Drag-and-drop: items must be placed in their correct destinations.
- Matching: all required pairs must be matched.
- Ordering: the complete sequence must be correct.
- Text entry: compare against accepted answers or validated rules.
- Simulated settings: verify the required settings state.

Never use a single-select handler for a multi-select puzzle.

---

## PART 2 — CREATE A FIXED BANK OF 100 DISTINCT PUZZLES

Create a dedicated puzzle data module or equivalent structured data source containing exactly 100 authored puzzle records.

Do not rely on a prompt or a random text generator to invent questions during gameplay.

Every puzzle must have:

- A unique, permanent ID.
- A category.
- A unique scenario.
- A short instruction.
- A defined interaction type.
- An illustrated scene or relevant visual elements.
- Interactive elements or selectable options.
- Correct answer IDs or validation rules.
- A concise explanation.
- A practical safety tip.
- A scoring rule.
- A difficulty level.
- Any required asset references.

Suggested structure:

id, category, title, instruction, scenario, interactionType, sceneAssets, options, correctAnswerIds, acceptedAnswers, validationRule, explanation, safetyTip, difficulty.

Use stable IDs, not question text, to track uniqueness.

All 100 records must be populated before the game is considered complete. Do not create placeholder records, duplicate questions, empty answer fields, or records that all use the same generic scenario.

### The 100-puzzle category allocation

Create 10 categories with 10 distinct puzzles per category.

**Category 1: Romance & Emotional Manipulation — Puzzles 001–010**

1. Identify a sudden emergency money request from a new online partner.
2. Match flattering messages to emotional bonding tactics.
3. Identify pressure to keep a relationship secret.
4. Compare a request for money with a respectful boundary-setting reply.
5. Spot excuses for repeatedly avoiding live identity verification.
6. Identify a request for travel money before an alleged first meeting.
7. Recognize guilt-tripping when someone refuses to send money.
8. Sort relationship behaviours into healthy boundaries and manipulation.
9. Identify a suspicious request for gift cards or cryptocurrency.
10. Choose safe next steps after discovering a potentially fake dating profile.

**Category 2: Video-Call Scams & Impersonation — Puzzles 011–020**

1. Spot threats made by someone posing as a police officer.
2. Identify instructions to remain on a video call and pay immediately.
3. Match impersonated roles to their suspicious requests.
4. Choose a safe response to an unknown video call.
5. Identify a fake official asking for Aadhaar details or an OTP.
6. Spot pressure to install remote-access software.
7. Distinguish a suspicious caller from a verified official contact.
8. Arrange safe actions after receiving an impersonation threat.
9. Type a short refusal to an unverified caller.
10. Identify warning signs in a simulated video-call screen.

**Category 3: UPI, OTP & Banking — Puzzles 021–030**

1. Identify a fake payment screenshot.
2. Distinguish a UPI collect request from receiving money.
3. Spot a phishing link in a simulated bank alert.
4. Identify a caller asking for an OTP.
5. Match QR-code scenarios with safe actions.
6. Identify a fake KYC-update message.
7. Choose how to verify an unexpected debit independently.
8. Identify a suspicious request for a UPI PIN.
9. Sort payment scenarios into safe and unsafe actions.
10. Arrange steps for responding to a suspected banking scam.

**Category 4: Shopping & Fake Offers — Puzzles 031–040**

1. Compare two stores selling the same smartphone using product images.
2. Identify a suspiciously discounted product from an unknown seller.
3. Spot a social media shop requesting full advance payment.
4. Match fake shipping messages to warning signs.
5. Identify suspicious return-policy and seller-contact details.
6. Compare secure payment choices for an unfamiliar merchant.
7. Identify a fake giveaway that requests a processing fee.
8. Spot a counterfeit-looking shopping website through multiple clues.
9. Choose safe actions after an order confirmation never arrives.
10. Sort shopping offers by credibility using several independent clues.

**Category 5: Fake Jobs & Task Scams — Puzzles 041–050**

1. Spot a work-from-home job that asks for a registration fee.
2. Identify a task scam promising payment for repeated deposits.
3. Recognize a fake recruiter asking for banking credentials.
4. Compare a job offer with a credible recruitment process.
5. Identify a suspicious request to recharge a task account.
6. Match job-scam messages to the tactics they use.
7. Choose a safe response to a guaranteed-income promise.
8. Spot a fake employer requesting identity documents too early.
9. Sort legitimate hiring steps from suspicious payment demands.
10. Select safe actions after paying a fraudulent recruiter.

**Category 6: Investment & Trading Scams — Puzzles 051–060**

1. Identify a guaranteed-return investment promise.
2. Spot a fake stock-market expert offering paid tips.
3. Match investment claims to unrealistic-return warning signs.
4. Identify a suspicious trading group that shows fabricated profits.
5. Choose independent checks before investing.
6. Spot pressure to borrow money for an investment.
7. Identify a request to transfer funds to a personal account.
8. Compare a verified financial source with an unverified channel.
9. Arrange safe steps before making an investment.
10. Identify a scammer demanding extra fees to release supposed profits.

**Category 7: Malicious Links, APKs & Device Security — Puzzles 061–070**

1. Spot a suspicious parcel-tracking link.
2. Identify a fake e-challan message containing an APK download.
3. Choose safe actions when an unknown APK is offered.
4. Identify excessive permissions requested by a suspicious app.
5. Simulate reviewing app permissions and disabling unnecessary access.
6. Spot a fake customer-care number in a search result.
7. Match suspicious file attachments to safe handling actions.
8. Identify a fake software-update popup.
9. Arrange steps to secure a device after installing a suspicious app.
10. Identify a suspicious browser page requesting credentials.

**Category 8: Account Security & Privacy — Puzzles 071–080**

1. Choose the strongest password from safe fictional examples.
2. Match passwords with the risks of reuse.
3. Simulate enabling two-factor authentication.
4. Identify a suspicious login notification.
5. Sort personal information into appropriate sharing categories.
6. Spot a request for an account recovery code.
7. Choose the safe response to an unexpected password-reset message.
8. Match privacy settings to their protective purpose.
9. Arrange account-recovery steps after a suspected takeover.
10. Identify suspicious social media account impersonation.

**Category 9: AI Voice Cloning, Deepfakes & Family Impersonation — Puzzles 081–090**

1. Respond to an urgent money request from a supposed family member.
2. Identify why a familiar voice is not sufficient proof of identity.
3. Choose a safe callback method for a suspicious voice message.
4. Spot an unusual request in a simulated video message.
5. Match deepfake warning signs to appropriate verification steps.
6. Identify a fake executive asking an employee to transfer funds.
7. Type a safe response to an urgent voice message.
8. Arrange steps to verify a family emergency independently.
9. Distinguish verified information from unverified viral media.
10. Select safe actions after receiving a suspected cloned-voice call.

**Category 10: Recovery Scams, Delivery & Incident Response — Puzzles 091–100**

1. Identify a recovery agent demanding an upfront fee to retrieve lost money.
2. Spot a fake courier requesting a small redelivery payment through a link.
3. Identify a fraudulent government-benefit registration fee.
4. Recognize a scammer pretending to be a cybercrime investigator.
5. Choose safe steps after disclosing an OTP.
6. Arrange the first actions after a suspected financial fraud.
7. Match official reporting channels to their purpose.
8. Identify evidence that should be preserved after a scam.
9. Choose safe actions after a social media account is compromised.
10. Complete a final scenario combining verification, reporting, and account protection.

These are the minimum scenario themes. Expand each into a complete puzzle record with its own content, visual assets, interaction, and answer logic. Do not treat this list alone as the finished puzzle bank.

---

## PART 3 — REQUIRE REAL VARIETY IN INTERACTIONS

Use a balanced mixture of gameplay mechanics across the 100 records.

Target approximately:

- 15 tap-to-discover puzzles.
- 15 single-select puzzles.
- 15 multi-select puzzles.
- 15 drag-and-drop puzzles.
- 10 matching puzzles.
- 10 ordering puzzles.
- 10 text-entry puzzles.
- 10 simulated settings or visual comparison puzzles.

These are target counts, not a reason to force an unsuitable mechanic onto a scenario. Every puzzle must have a meaningful interaction.

For each puzzle, the player should have something specific to inspect, move, match, configure, or enter. Do not merely present a paragraph and two generic buttons.

### Visual requirements

- Use original, consistent illustrated characters and realistic-looking fictional interface elements.
- Include relevant objects such as phones, messages, store cards, bank alerts, profiles, QR codes, permission screens, and app settings.
- In shopping comparisons, show the same product in both stores.
- Keep text short enough to read comfortably on a mobile screen.
- Avoid using the same scene with only different words.
- Avoid making every scenario a red-flag list.
- Use fictional names, phone numbers, account details, and payment information.
- Never request a real password, OTP, UPI PIN, bank account number, or other sensitive information from the player.

Use only images that are available, bundled, or reliably loaded. Include graceful fallbacks if an asset fails to load.

---

## PART 4 — ENFORCE UNIQUENESS IN CODE

Create a central puzzle registry and validate it before allowing a round to start.

### Required safeguards

1. All 100 puzzle IDs must be unique.
2. All 100 records must have complete required fields.
3. Each puzzle must have a valid interaction type and working answer-validation logic.
4. No duplicate IDs may be silently accepted.
5. A round must sample distinct IDs from the validated registry.
6. Maintain a set of played IDs for the entire round, including across categories.
7. Never clear the played-ID set when a five-question batch ends.
8. Never repeat a question after an incorrect answer or retry.
9. Never substitute an already-played puzzle merely because the requested category has run out.
10. If the requested game length exceeds the available unique records, show an explicit error rather than duplicating puzzles.

If semantic duplicate detection is feasible, add a validation check for identical scenarios or substantially identical answer logic. Use a reviewable scenario key or fingerprint, but do not rely on text similarity alone.

### Game length

Allow the player to choose 5, 10, 15, 25, 50, or 100 puzzles.

For every selected length:

- Display the correct total in the progress indicator.
- Use the same selected sequence until the round finishes.
- Keep scores and accuracy consistent with the actual number of puzzles.
- Generate the result poster from real session data.

---

## PART 5 — TEST BEFORE DECLARING COMPLETION

Run actual tests against the implementation.

### Multi-select tests

- Selecting only urgent_deadline must not mark the puzzle fully correct.
- Selecting both required symptoms must not reveal correctness until “Check Answers” is clicked.
- Selecting an additional incorrect option must not receive full credit.
- Deselecting an option before submission must work.
- Submitting the same answer twice must not award points twice.

### Uniqueness tests

- Validate that the registry contains exactly 100 distinct puzzle IDs.
- Confirm that the 100 scenarios are complete and playable.
- Play 5, 10, 15, 25, 50, and 100-puzzle rounds.
- Verify that each round contains exactly the requested number of distinct IDs.
- Confirm no repeats across categories or internal batches.
- Confirm that a retry does not replace the current puzzle.
- Confirm that starting a genuinely new game creates a new selection without changing the previous result.

### Final verification

Test all interaction types, answer colours, scoring, progress, sound controls, result screens, and mobile layouts.

Do not claim that 100 unique puzzles have been implemented unless all 100 records exist and the validation tests pass.

**Deliver the actual code and content changes, not another mockup or a description of the intended changes.** At completion, report the number of fully implemented puzzles, interaction-type counts, validation results, and any remaining limitations.


---

## PART 6 — ADD A CREDIBLE IMPACT STATISTICS AREA TO THE EXISTING HOMEPAGE

Add a polished, minimal **“Our Impact”** section to the existing CybAram homepage. This is an addition to the existing application, not a replacement for the Cyber Puzzles work described above.

Before changing the homepage, inspect the current project structure, homepage components, styling system, routes, and existing data sources. Reuse the existing design system and components where practical. Do not rebuild the website or refactor unrelated sections.

### A. Section placement and visual direction

Place the Impact Statistics section in a suitable position on the homepage, where it naturally follows the introduction to CybAram and precedes or leads into the research/services content. Follow the existing page flow rather than inserting it arbitrarily.

The visual style must be professional, mature, calm, and trustworthy:

- Use the established CybAram palette: forest green, navy, off-white, white, and restrained pale-sage accents.
- Use three clean statistic cards in one row on desktop and stack them neatly on mobile.
- Use a clear heading, one short supporting sentence, three large metric values, brief labels, and simple line icons.
- Use subtle borders and restrained shadows; avoid heavy gradients, excessive decoration, oversized illustrations, or a dashboard-like appearance.
- Do not use a wall of brand logos, “Trusted by” logos, or named-company logos in this section.
- Do not make the design imply that CybAram has a commercial relationship with, endorsement from, or confirmed findings about any named organisation.
- Preserve accessibility, readable contrast, keyboard usability, and responsive layouts.

Suggested heading:
**Creating a safer digital world, together.**

Suggested supporting text:
“Through awareness, guidance and research, we help individuals and organisations better understand online risks.”

### B. Three impact metrics

Use these three cards, with wording that accurately describes what is being measured.

**Card 1 — Awareness Reach**
- Primary metric: total verified views of CybAram’s cyber-safety awareness content across supported social platforms.
- Supporting label: “Content views across social platforms”
- Optional detail: a compact platform-by-platform breakdown, only when current, verified figures are available.
- Count views, not unique people reached, unless a platform actually supplies a comparable unique-reach metric.
- If metrics are collected from different platforms, document the reporting period and aggregation method. Avoid counting the same metric twice.
- Do not fabricate views, engagement figures, platform names, or API results.

**Card 2 — People Supported**
- Primary metric: the number of distinct individuals who have received qualifying CybAram guidance or support.
- Supporting label: “Individuals guided and supported”
- Include free support where appropriate, but do not count every message, session, or follow-up as a separate person.
- Use a consistent, privacy-conscious counting method. Do not expose names, contact details, case information, or any identifying information.
- Do not imply that CybAram prevented a loss or resolved a case unless that outcome has been reliably established.

**Card 3 — Digital Ecosystem Insights**
- Primary metric: the number of documented research assessments or outputs completed, if that is the metric CybAram can substantiate.
- Supporting label: “Research assessments and outputs” or another precise label that matches the actual measurement.
- Describe the work in a positive, professional way: research into suspicious websites and domains, fraudulent applications, impersonation attempts, and deceptive online campaigns.
- Prefer counting documented assessments or outputs over simply counting brands mentioned. If the organisation instead chooses to count organisations or entities analysed, label the metric explicitly and use a consistent counting rule.
- Do not suggest that every organisation or brand reviewed has experienced a confirmed incident, is a client, or has a relationship with CybAram.
- Do not use a brand’s logo or name merely to provoke curiosity or imply an association.

### C. Data integrity and dynamic behaviour

The figures in any design reference or example are placeholders only. Do not publish invented or illustrative numbers as real CybAram results.

Inspect the existing codebase and implement the data approach that best fits the current architecture. If verified metrics or a working data source are not available:

- Use a neutral, intentional empty state, such as “Impact data will be shared as verified figures become available,” or omit the numerical value until it can be substantiated.
- Do not show fake values such as “10M+ views”, “2,500+ people supported”, or “150+ research outputs” unless the actual records support them.
- Do not simulate a live API, scrape social platforms, or claim that figures update automatically unless a real, permitted integration exists and works.
- Do not expose API keys, access tokens, private analytics, personal information, or internal case data in frontend code.
- If a platform integration is not already available, make the metrics easy to update from a legitimate existing data source or a clearly documented configuration/data module.
- Where figures are shown, include a small reporting-period note or “Last updated” date only when that information is available and accurate.
- Keep metrics consistent with the underlying records and recalculate totals from source data where possible.

### D. Add a separate research-focus area beneath the statistics

After the three impact cards, add a visually distinct but cohesive section that explains CybAram’s research focus. It should communicate capability and public value without naming or displaying third-party brands.

Suggested eyebrow label:
**OUR RESEARCH AREAS**

Suggested heading:
**Understanding online risks. Building a safer digital world.**

Suggested paragraph:
“We research online threats such as impersonation campaigns, suspicious websites and applications, and emerging scam patterns to support safer digital experiences for individuals and organisations.”

Show four compact focus cards, using simple icons and short descriptions:

1. **Website & Domain Analysis**  
   “Reviewing suspicious websites, lookalike domains and deceptive pages.”

2. **App & Scam Research**  
   “Studying suspicious applications and online scam patterns.”

3. **Impersonation & Misuse**  
   “Examining suspected misuse of identities and organisational presence.”

4. **Evidence & Reporting**  
   “Documenting relevant findings and identifying appropriate reporting routes.”

Use wording such as “suspected”, “reported”, “under review”, or “confirmed” accurately according to the evidence. Do not state or imply that a specific incident has been confirmed without adequate evidence.

Include one restrained call-to-action button:
**Explore Our Research**

Connect it to an existing, relevant research page or route if one exists. If no such page exists, do not create a broken link or silently invent a route. Either add a simple, useful research landing page consistent with the current architecture or omit the button until the destination is ready. Do not alter unrelated routes.

Add a discreet clarification where appropriate:
“Research examples and focus areas do not imply endorsement, a commercial relationship, or a confirmed incident involving any particular organisation.”

### E. Brand names, logos and public claims

- Do not add third-party logos to the Impact Statistics or Research Areas sections.
- Do not create a “Trusted by”, “Our partners”, or client-logo strip unless the relationships are real, documented, and authorised for public display.
- Do not invent partnerships, clients, endorsements, case studies, research outcomes, takedowns, victims helped, or financial losses prevented.
- If a genuine public-interest case study is later added, ensure claims are evidence-based, clearly distinguish allegations from confirmed findings, use only necessary identifying details, and obtain appropriate legal review where needed.
- Keep the presentation constructive and professional. The purpose is to show CybAram’s research capability and impact, not to shame brands or imply wrongdoing by organisations without evidence.

### F. Implementation and regression checks

- Implement the section in the actual existing homepage code, not as a standalone mockup or screenshot.
- Reuse the current component structure and styling conventions.
- Preserve all existing routes, navigation, puzzle functionality, puzzle data, game state, scoring, sounds, results poster, and responsive behaviour.
- Do not remove, overwrite, or replace any of the Cyber Puzzles requirements in Parts 1–5.
- Check desktop, tablet, and mobile layouts.
- Verify that no example statistic is accidentally presented as a real result.
- Verify that the research CTA works and has a valid destination.
- Check contrast, text wrapping, icon alignment, keyboard navigation, and screen-reader labels.
- Test the homepage and existing puzzle flow after the change.

At completion, report:
1. Which homepage components/files were changed.
2. Where the Impact Statistics section appears.
3. How each metric is sourced or what empty state is shown if verified data is unavailable.
4. Whether the research CTA has a working destination.
5. Which regression and responsive checks were completed.
6. Any remaining data, integration, or content limitations.

**Deliver the actual implementation and tested code changes. Do not claim that metrics are live or verified unless the underlying data and integration have been checked.**
