# HeroText + Timeline Duplication Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Collapse the duplicated desktop/mobile DOM blocks in HeroText (unify diverged copy) and Timeline (de-duplicate the meta markup) into a single source each.

**Architecture:** HeroText becomes one block using the desktop wording with responsive font-size/alignment. Timeline defines the duration/title/company meta markup once as a local helper and calls it at both placement sites; layout, sticky positioning, ResizeObserver, and the animated line are untouched.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, motion/react. CSS-only responsiveness (no `react-responsive`/JS branching).

## Global Constraints

- Package manager: **npm**. Never commit or push without the user's explicit go-ahead.
- Responsiveness is **CSS only** (Tailwind `md:` breakpoints) — do not introduce JS media-query branching.
- Do **not** touch `FlipWords`, `heroEntrance`, `heroEntrance` delays (1 / 1.2 / 1.5 / 1.8), experience data, or Timeline's `ResizeObserver` / `useScroll` / `useTransform` / animated gradient line.
- Typecheck command for this repo: `npx tsc -b` (no standalone `typecheck` script; there is no runnable unit-test surface for these presentational components — Vitest here is node-only).
- Canonical hero wording: **desktop** copy.

---

### Task 1: Unify HeroText into one responsive block

**Files:**
- Modify: `src/components/HeroText.tsx` (replace both desktop `md:flex` and mobile `md:hidden` blocks with one block)

**Interfaces:**
- Consumes: `FlipWords` (`./FlipWords.tsx`), `FlipHeroTextWords` (`../../constants`), `heroEntrance` (`../utils/heroEntrance.ts`), `motion` (`motion/react`) — all unchanged.
- Produces: default-exported `HeroText` component (unchanged signature).

- [ ] **Step 1: Replace the component body with the single unified block**

Replace the entire return in `src/components/HeroText.tsx` so the file reads exactly:

```tsx
import { FlipWords } from "./FlipWords.tsx";
import { FlipHeroTextWords } from "../../constants";
import { motion } from "motion/react";
import { heroEntrance } from "../utils/heroEntrance.ts";

const HeroText = () => {
  return (
    <div
      className={
        "z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text"
      }
    >
      <div className={"flex flex-col c-space"}>
        <motion.h1 className={"text-4xl font-medium"} {...heroEntrance(1)}>
          Hi, I'm Sajana!
        </motion.h1>
        <div className={"flex flex-col items-center md:items-start"}>
          <motion.p
            className={"text-4xl md:text-5xl font-medium text-neutral-300"}
            {...heroEntrance(1.2)}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div {...heroEntrance(1.5)}>
            <FlipWords
              words={FlipHeroTextWords}
              className={"font-black text-white text-5xl md:text-8xl"}
            />
          </motion.div>

          <motion.p
            className={"text-3xl md:text-4xl font-medium text-neutral-300"}
            {...heroEntrance(1.8)}
          >
            AI Enabled Web Solutions
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
```

Notes on the reconciliation decisions (why, not just what):
- Single `<h1>` (mobile previously used a `<p>` for the name — this fixes the one-heading semantic).
- Font sizes are `mobile md:desktop` pairs, taking each side's existing value: name `text-4xl` (same both), tagline `text-4xl md:text-5xl`, FlipWords `text-5xl md:text-8xl`, closing line `text-3xl md:text-4xl`.
- Inner group uses `items-center md:items-start` so centered on mobile / left-aligned on desktop, matching the outer `text-center md:text-left`.
- Delays unchanged.

- [ ] **Step 2: Typecheck**

Run: `npx tsc -b`
Expected: exits 0, no errors.

- [ ] **Step 3: Verify in-browser**

Start the dev server (`preview_start` with the project's launch config, or `npm run dev`). At **desktop** width and **375px**:
- Confirm the copy reads the desktop wording at both sizes ("A Developer / Dedicated to Crafting", "AI Enabled Web Solutions").
- Confirm font sizes shrink on mobile (name/tagline/flipwords/closing all smaller) and text is centered on mobile, left on desktop.
- Because the in-app Browser pane freezes `requestAnimationFrame`, confirm the four lines are visible by running `document.querySelectorAll('h1,p') …` and/or `el.getAnimations().forEach(a=>a.finish())` then reading `opacity` — all four motion lines must resolve to `opacity:1`. (See findings tooling caveat.)

- [ ] **Step 4: Commit** (only after user go-ahead per Global Constraints)

```bash
git add src/components/HeroText.tsx
git commit -m "Refactor: unify HeroText desktop/mobile into one responsive block"
```

---

### Task 2: De-duplicate Timeline meta markup (render-once helper)

**Files:**
- Modify: `src/components/Timeline.tsx` (add a `renderMeta` helper; replace the two inline meta blocks with calls to it; make inner `h3` sizes responsive)

**Interfaces:**
- Consumes: `ExperienceType` (`../../types`) — the `item` passed to `renderMeta` is one `ExperienceType`.
- Produces: no exported surface change; `Timeline` named export unchanged.

- [ ] **Step 1: Add the `renderMeta` helper**

Above the `Timeline` component (module scope, after the imports) in `src/components/Timeline.tsx`, add:

```tsx
// Single definition of the duration/title/company meta, rendered at both the
// desktop sticky-sidebar site and the mobile inline site. Responsive h3 sizes
// serve both breakpoints so there is one source for the markup.
const renderMeta = (item: ExperienceType) => (
  <>
    <h3 className={"text-lg md:text-xl text-neutral-400"}>{item.duration}</h3>
    <h3 className={"text-2xl md:text-3xl"}>{item.title}</h3>
    <h3 className={"text-xl md:text-2xl text-neutral-500"}>{item.company}</h3>
  </>
);
```

- [ ] **Step 2: Replace the desktop meta block with a call**

In the sticky column, replace:

```tsx
              <div
                className={
                  "flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-3xl text-neutral-300"
                }
              >
                <h3 className={"text-xl text-neutral-400"}>{item.duration}</h3>
                <h3 className={"text-3xl"}>{item.title}</h3>
                <h3 className={"text-2xl text-neutral-500"}>{item.company}</h3>
              </div>
```

with:

```tsx
              <div
                className={
                  "flex-col hidden gap-2 font-bold md:flex md:pl-20 text-neutral-300"
                }
              >
                {renderMeta(item)}
              </div>
```

(The per-`h3` sizes moved into `renderMeta`, so the wrapper's `text-xl`/`md:text-3xl` are dropped to avoid conflicting inherited sizing; visibility `hidden md:flex`, placement `md:pl-20`, and `gap-2 font-bold text-neutral-300` are kept.)

- [ ] **Step 3: Replace the mobile meta block with a call**

In the description column, replace:

```tsx
              <div
                className={
                  "block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden"
                }
              >
                <h3 className={"text-lg text-neutral-400"}>{item.duration}</h3>
                <h3 className={"text-2xl"}>{item.title}</h3>
                <h3 className={"text-xl text-neutral-500"}>{item.company}</h3>
              </div>
```

with:

```tsx
              <div
                className={
                  "block mb-4 font-bold text-left text-neutral-300 md:hidden"
                }
              >
                {renderMeta(item)}
              </div>
```

(Dropped the wrapper `text-2xl` for the same reason; `block md:hidden`, `mb-4 font-bold text-left text-neutral-300` kept.)

- [ ] **Step 4: Typecheck**

Run: `npx tsc -b`
Expected: exits 0, no errors.

- [ ] **Step 5: Verify in-browser**

At desktop and 375px, confirm each timeline item shows duration/title/company with the *same* field values as before, sticky sidebar on desktop and inline-above-description on mobile, at the same visual sizes (desktop `xl/3xl/2xl`, mobile `lg/2xl/xl`). Confirm the animated gradient line and scroll behavior are unchanged (layout was not touched).

- [ ] **Step 6: Commit** (only after user go-ahead per Global Constraints)

```bash
git add src/components/Timeline.tsx
git commit -m "Refactor: render Timeline meta from one source (render-once helper)"
```

---

## Self-Review

**1. Spec coverage:**
- HeroText unify to one block, desktop wording, responsive sizes/alignment, single `<h1>`, delays unchanged → Task 1. ✓
- Timeline render-once helper, responsive inner classes, layout/RO/scroll/line untouched → Task 2. ✓
- Non-goals (no grid rewrite, no FlipWords/heroEntrance/data changes) → respected in both tasks. ✓
- Testing = typecheck + in-browser (no unit surface) → both tasks' verify steps. ✓

**2. Placeholder scan:** No TBD/TODO/"handle edge cases"; full final code shown for every code step. ✓

**3. Type consistency:** `renderMeta(item: ExperienceType)` is the only new symbol; used consistently in Steps 2–3. No cross-task symbol mismatch (tasks touch different files). ✓
