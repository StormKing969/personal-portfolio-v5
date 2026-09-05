# HeroText + Timeline duplication refactor

**Date:** 2026-09-05
**Status:** Approved, ready for implementation plan
**Source finding:** `project-portfolio-review-findings.md` — last open item: "Content duplicated across desktop+mobile DOM blocks (HeroText, Timeline) → drift risk."

## Problem

Two components each render separate desktop (`md:flex`) and mobile (`md:hidden`) DOM blocks. But they are two *different* problems:

- **HeroText** — the blocks contain **hardcoded strings that have already diverged** (desktop "A Developer / Dedicated to Crafting … AI Enabled Web Solutions" vs mobile "Building … Web Applications"). This is genuine content drift.
- **Timeline** — both blocks render the **same data expressions** (`item.duration`, `item.title`, `item.company`). Content cannot drift; only the 3-line markup structure and its styling/placement are duplicated.

## Decisions

- HeroText divergence is **unintended drift** → unify to one copy. **Desktop wording is canonical.**
- Timeline → **Approach A (render-once helper)**, not a full CSS-grid single-DOM rewrite. Kills the structural duplication with a small, low-risk diff; the negligible cost is one `display:none` meta copy per breakpoint remaining in the DOM.

## Design

### HeroText (`src/components/HeroText.tsx`)

Collapse the two blocks into **one**, using responsive font-size + alignment instead of duplicated markup.

| Element | Copy (desktop wording) | Classes |
|---|---|---|
| `h1` | Hi, I'm Sajana! | `text-4xl font-medium` |
| `p` | A Developer `<br />` Dedicated to Crafting | `text-4xl md:text-5xl font-medium text-neutral-300` |
| `FlipWords` | `FlipHeroTextWords` | `font-black text-white text-5xl md:text-8xl` |
| `p` | AI Enabled Web Solutions | `text-3xl md:text-4xl font-medium text-neutral-300` |

- Outer wrapper keeps `text-center md:text-left` and the existing container classes.
- `heroEntrance(1)`, `heroEntrance(1.2)`, `heroEntrance(1.5)`, `heroEntrance(1.8)` delays unchanged.
- Mobile's stray `<p>` for the name becomes the single `<h1>` (semantic fix, one heading).
- The `flex flex-col items-start` grouping / `space-y` spacing is reconciled into one set of responsive classes so vertical rhythm reads well at both sizes.

**Guardrail:** the FlipWords `text-5xl md:text-8xl` size gap is *legitimate* responsive styling, deliberately kept — not treated as duplication.

### Timeline (`src/components/Timeline.tsx`)

Define the meta markup **once** and call it at both placement sites (desktop sticky sidebar, mobile inline-above-description). No layout rewrite.

- Add a local helper (module-scope function or inline `const`) `renderMeta(item)` returning the three `h3`s (duration / title / company).
- Inner classes become responsive so one definition serves both sizes:
  - duration: `text-lg md:text-xl text-neutral-400`
  - title: `text-2xl md:text-3xl`
  - company: `text-xl md:text-2xl text-neutral-500`
- Desktop call site: wrapper keeps `hidden gap-2 font-bold md:flex md:pl-20 text-neutral-300` (visibility + placement).
- Mobile call site: wrapper keeps `block mb-4 font-bold text-left text-neutral-300 md:hidden`.
- The `ResizeObserver` height logic, `useScroll`/`useTransform`, the animated gradient line, and the `relative` container are **untouched**.

## Non-goals

- No CSS-grid single-DOM rewrite of Timeline rows (Approach B, rejected — risk vs. cosmetic gain).
- No change to `FlipWords`, `heroEntrance`, experience data, or animation timing.
- No unrelated refactoring of surrounding sections.

## Testing / verification

- `npm run typecheck` (or `tsc --noEmit` per project config) clean.
- HeroText: no unit test warranted — it is presentational JSX with no logic branch (YAGNI; project's vitest is node-only for pure fns). Verify rendered copy + responsive sizing in-browser at 375px and desktop; confirm all four lines read `opacity:1` (motion) via `getAnimations().finish()` given the frozen-rAF pane caveat.
- Timeline: `renderMeta` is a pure `(item) => JSX` helper — one small runnable check asserting it emits the three field values is cheap and honest if a node-side render is feasible; otherwise verify in-browser that desktop sidebar + mobile inline meta both still show identical field values. No change to the RO/scroll logic means its existing verified behavior is preserved.

## Risk

Low. HeroText is presentational. Timeline touches only the meta markup definition, not the layout, sticky positioning, or the animated line. Frozen-rAF pane can't play scroll/sticky motion — real-device glance recommended but not a regression source here (layout unchanged).
