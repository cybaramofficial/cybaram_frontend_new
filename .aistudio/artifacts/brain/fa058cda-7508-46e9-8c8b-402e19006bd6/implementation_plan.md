# CybAram Cyber Puzzles — Unified Interactive Learning Experience

A complete redesign combining CybAram Cyber Quest and Spot the Scam into one unified, casual digital-safety puzzle game with 200 real scenarios, 10 varied interaction mechanics, original caricature visual storytelling, an endless adventure run with milestone posters, and selectable difficulty tiers.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following user preferences from Phase 1 are integrated as foundational requirements:
> - **Game Structure**: Endless adventure run with cumulative scoring and 5-activity milestone checkpoints where players can view/share achievement posters or keep playing.
> - **Phone Call & Dialogue Scenarios**: Presented as illustrated comic scenes with speech bubbles, audio sound cues, and character reactions (accessible, lightweight, zero microphone requirement).
> - **Difficulty Progression**: Selectable difficulty tiers before starting (*Everyday Explorer* / Beginner, *Vigilant Citizen* / Intermediate, *Master Defender* / Full 200+ Mix).

---

## 1. Overview & Core Concept

- **What It Does**: Unifies the website's digital-safety practice activities into **CybAram Cyber Puzzles** (*"Learn digital safety by playing, exploring, and solving"*). Players embark on a casual puzzle adventure, helping relatable characters solve everyday technology challenges—spotting fraud, securing accounts, inspecting links, and recovering after mistakes.
- **Target Audience**: Everyday digital citizens in India—families, students, work-from-home professionals, seniors, and small business owners who use UPI, WhatsApp, net banking, and social apps.
- **Key Value**: Replaces examination questions with playful, visual puzzles that teach proactive security habits through hands-on interaction and immediate, supportive feedback.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Hub Entry (`/vilaiyaattu`)**:
   - Single polished entry card for **CybAram Cyber Puzzles** featuring a minimalist 16:9 illustration of diverse people collaborating around a smartphone.
   - Tagline: *"Learn digital safety by playing, exploring, and solving."*
   - Description: *"Explore interactive puzzles that help you protect accounts, spot warning signs, and make safer digital decisions."*
   - Difficulty tier selector pills: *Everyday Explorer (Foundational)*, *Vigilant Citizen (Practical)*, *Master Defender (All Challenges)*.
   - Prominent **Play Now** button that starts the energetic 124 BPM puzzle adventure music.

2. **Active Puzzle Canvas**:
   - **Top HUD**: Cumulative score counter, current quest milestone (e.g. *Quest 4 · Streak x3*), difficulty badge, independent Music & SFX toggles, and Exit button.
   - **Instruction Bar**: Clear, short objective prompt that never reveals or spoils the answer (e.g. *"Help Priya identify the setting that adds a second login verification step."*).
   - **Illustrated Scene & Character**: Hand-crafted vector caricature character (Priya, Rohan, Murugan, Thatha, Ravi, or Arun) with dynamic expressions (curious, celebrating, cautious).
   - **Interactive Stage**: One focused interactive mechanic per puzzle (drag-and-drop vault, multi-option security toggles, magnifying glass inspection, permission switches, sequence sorting, character comparison dialogues).
   - **Neutral Base State**: All choices and interactive targets start in neutral `#FFF1C2` / `#F6F8F6` / `#172B4D` styling. No green/red color hints before interaction.

3. **Feedback & Progression**:
   - **Post-Action State**: Revealing safe outcomes with green accents, gentle warnings with amber/rose accents, character animations (clapping, victory thumbs up), and pleasant audio chimes.
   - **One-Sentence Safety Habit**: Displaying a concise, memorable takeaway (e.g. *"Two-Factor Authentication (2FA) blocks 99% of unauthorized logins even if someone steals your password."*).
   - **Next Activity**: Single prominent action button to smoothly transition to the next puzzle in the adventure run without reloading or restarting music.

4. **Milestone Checkpoint & Result Poster (Every 5 Puzzles)**:
   - Compact achievement screen fitting entirely within a single desktop viewport.
   - Cumulative points, accuracy percentage, milestone badges, and encouraging tier classification (*Cyber Defender*, *Vigilant User*, *Safety Learner*).
   - **Download Result Poster**: Instant local download of high-resolution 1080×1350 PNG poster generated on HTML5 canvas.
   - **Share Poster Image**: Native Web Share API integration attaching the generated PNG image directly to WhatsApp/social media.
   - **Continue Adventure**: Seamless button to keep going and climb the adventure score leaderboard.

### Visual Identity & Palette

- **Canvas (60%)**: `#F6F8F6` crisp off-white with subtle notebook lines and perforated spiral top styling.
- **Structural Surfaces (30%)**: `#FFFFFF` cards, `#DCECE3` soft sage dividers, `#172B4D` navy typography.
- **Accents (10%)**: `#123C35` deep forest green primary actions, `#FFF1C2` / `#D8A84E` warm yellow puzzle interactive targets, `#10B981` success emerald, `#C53030` alert red.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Single Unified Game Card replacing two separate game choices**
  - *Chosen Approach*: Replace the dual "Cyber Quest" and "Spot the Scam" cards on the hub with one hero entry card for "CybAram Cyber Puzzles". Both scenario sets and mechanics (link inspection, forensic clues, device toggles, OTP vaults) are merged into one rich experience.
  - *Why*: Eliminates user confusion, prevents cannibalization between games, and delivers a much more diverse round containing both message forensics and device settings.
- **Decision 2: 200 Structured Scenarios in a Modular Data Bank**
  - *Chosen Approach*: Implement a typed, modular bank of 200 distinct scenarios partitioned cleanly across 8 core digital safety categories in a dedicated dataset (`scenariosCyberPuzzles200.ts`).
  - *Why*: Allows easy maintenance, avoids hardcoding questions into UI components, and ensures rounds never feel repetitive.
- **Decision 3: Non-Linear Puzzle Mechanics (10 Distinct Types A–J)**
  - *Chosen Approach*: Build a modular puzzle renderer supporting 10 distinct mechanics (Mistake Tapping, Vault Dragging, Magnifier Inspection, 2FA Activation, Character Dialogues, Step Ordering, Bill & Fee Calculations, Pressure Animations, Call Dialogues, Post-Incident Recovery).
  - *Why*: Prevents the game from devolving into a repetitive multiple-choice quiz or questionnaire.

---

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       CYBARAM VILAIYAATTU HUB                                │
│                         (/vilaiyaattu Page)                                  │
│  - Cyber Umbrella Banner                                                    │
│  - Single Entry Card: "CybAram Cyber Puzzles"                                │
│  - Difficulty Tier Selector (Explorer / Vigilant / Master)                  │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Launches Game Session
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                     CYBARAM CYBER PUZZLES ENGINE                             │
│                      (CyberPuzzlesGame.tsx)                                 │
│  - State Machine: [INTRO] -> [PLAYING] -> [MILESTONE_SUMMARY]                │
│  - Session Manager: Shuffles 200 scenarios, filters recently played          │
│  - Audio Engine: 124 BPM Upbeat BGM + SFX chimes via soundEffects.ts        │
└───────────────────┬─────────────────────────────────────────────────────────┘
                    │ Renders Current Puzzle Data
                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                 MODULAR PUZZLE BOARD (PuzzleBoard.tsx)                      │
│                                                                             │
│  ┌───────────────────────────────┐     ┌─────────────────────────────────┐  │
│  │ Expressive Caricature Mascot  │     │ 10 Interactive Puzzle Mechanics │  │
│  │ (Priya, Rohan, Thatha, Ravi)  │     │ A: Spot Mistake   F: Order Steps│  │
│  │ States: Neutral/Curious,      │ ──> │ B: Drag to Vault  G: Number Calc│  │
│  │ Celebrating, Cautious         │     │ C: Magnify Clue   H: Pressure   │  │
│  │ (ExpressiveCaricature.tsx)    │     │ D: Activate 2FA   I: Call Audio │  │
│  └───────────────────────────────┘     │ E: Who is Right?  J: Recovery   │  │
│                                        └─────────────────────────────────┘  │
└───────────────────┬─────────────────────────────────────────────────────────┘
                    │ On Milestone / Round Complete
                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│              MILESTONE CHECKPOINT & RESULT POSTER ENGINE                     │
│                       (ResultCelebration.tsx)                               │
│  - Single-Screen Balanced Layout (No scrolling required)                    │
│  - Canvas Generator: 1080x1350 High-Res PNG (resultPosterGenerator.ts)      │
│  - Web Share API (File Attachment) + Direct PNG Download                    │
│  - "Continue Adventure" button to keep the endless run going                │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Scenario Data Model (`CyberPuzzleScenario`)

```typescript
export type PuzzleCategory =
  | 'scam_impersonation'
  | 'account_otp_passwords'
  | 'privacy_permissions_social'
  | 'browsing_links_downloads'
  | 'payments_shopping_jobs'
  | 'device_updates_security'
  | 'incident_response_recovery'
  | 'legitimate_verification';

export type PuzzleDifficulty = 'beginner' | 'intermediate' | 'advanced';

export type PuzzleMechanicType =
  | 'spot_mistake'        // Tap unsafe detail
  | 'drag_vault'          // Drag OTP or card to private vault
  | 'magnify_clue'        // Reveal hidden URL or deceptive email headers
  | 'activate_feature'    // Select and toggle 2FA or security setting
  | 'who_is_right'        // Two characters with speech bubbles; pick safer approach
  | 'order_sequence'      // Arrange 3-4 response steps in logical order
  | 'visual_calculation'  // Compare fees, fake discounts, or transaction receipts
  | 'pressure_scene'      // Short timed/urgency decision with panic resistance
  | 'call_investigation'  // Comic call scene with speech bubbles and phone audio
  | 'incident_recovery';  // Post-mistake immediate damage mitigation

export interface CyberPuzzleScenario {
  id: string;
  category: PuzzleCategory;
  difficulty: PuzzleDifficulty;
  instruction: string;
  situation: string;
  character: 'priya' | 'rohan' | 'murugan' | 'thatha' | 'ravi' | 'arun';
  mechanic: PuzzleMechanicType;
  payload: Record<string, unknown>;
  correctActionId: string;
  keyTakeaway: string;
  points: number;
}
```

### 200-Puzzle Library Distribution

| Category | Target Scenarios | Mechanics Used |
|---|---:|---|
| **Scam & impersonation recognition** | 35 | `spot_mistake`, `call_investigation`, `who_is_right` |
| **Account protection, OTP & passwords** | 30 | `activate_feature`, `drag_vault`, `who_is_right` |
| **Privacy, app permissions & social** | 25 | `spot_mistake`, `activate_feature`, `who_is_right` |
| **Safe browsing, links & downloads** | 25 | `magnify_clue`, `spot_mistake`, `pressure_scene` |
| **Digital payments, shopping & jobs** | 25 | `visual_calculation`, `drag_vault`, `spot_mistake` |
| **Device updates & everyday security** | 20 | `activate_feature`, `who_is_right`, `order_sequence` |
| **Incident response & recovery** | 20 | `incident_recovery`, `order_sequence`, `call_investigation` |
| **Legitimate alerts & verification** | 20 | `who_is_right`, `magnify_clue`, `activate_feature` |
| **Total** | **200** | Across all 10 mechanics |

---

## 5. Execution Steps (Post-Approval)

1. **Step 1: Scenario Dataset (`scenariosCyberPuzzles200.ts`)**:
   - Consolidate existing 100 ClickOrSkip and 100 SpotTheScam scenarios into a unified, strictly typed bank of 200 puzzles matching the 8 category quotas and 10 interaction mechanics.
2. **Step 2: Interactive Puzzle Mechanics (`PuzzleBoard.tsx` & subcomponents)**:
   - Implement the 10 clean, neutral-styled interaction engines with touch and mouse support.
   - Integrate expressive SVG caricatures (Priya, Rohan, Murugan, Thatha, Ravi, Arun) with dynamic facial reaction states.
3. **Step 3: Game Flow Engine (`CyberPuzzlesGame.tsx`)**:
   - Implement the Endless Adventure state machine with difficulty selection, cumulative score, 5-puzzle milestone pauses, session randomization without duplicate questions, and smooth BGM looping.
4. **Step 4: Single-Screen Milestone & Poster (`ResultCelebration.tsx` & `resultPosterGenerator.ts`)**:
   - Update canvas generator and celebration view to produce the unified *CybAram Cyber Puzzles* social achievement poster with Web Share API and PNG download.
5. **Step 5: Unified Vilaiyaattu Hub (`VilaiyaattuPage.tsx`)**:
   - Replace the two separate game cards with the single, minimalist entry card for *CybAram Cyber Puzzles* and difficulty selector.
6. **Step 6: Build Verification**:
   - Run compilation and linting to ensure zero TypeScript errors, perfect responsive layout, and intact navigation.
