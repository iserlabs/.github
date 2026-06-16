# Handoff — Iser Labs Brand Kit & Design System

## Overview

This bundle is the complete brand identity and design system for **Iser Labs**, a small independent research studio for computational tools. It defines the logo, color, typography, iconography, UI components, applications (collateral), and operating posture (voice + motion).

## About the design files

The files in this bundle are **design references created in HTML/JSX** — prototypes showing the intended look of the brand system, not production code to ship directly. The task is to **recreate these designs in your target codebase's environment** (React, Vue, Astro, SwiftUI, native, etc.) using its established patterns and libraries. If no codebase exists yet, choose the most appropriate framework and implement there.

The brand tokens (`brand.css`) are framework-agnostic and can be lifted directly into a real stylesheet, Tailwind config, or token JSON.

## Fidelity

**High-fidelity.** Final colors, type, spacing, components and applications. Treat the visual decisions as canonical. Layout and interactions may need to be reflowed for real product surfaces, but the visual language is locked.

---

## Brand essence

- **Name:** Iser Labs
- **Tagline (long):** "A small, independent research studio for computational tools — software, interfaces, and the systems that hold them together."
- **Tagline (short):** "A research studio for computational tools."
- **Posture:** Editorial-meets-technical. Paper, ink, sodium flare. Quiet, precise, signed.
- **Naming convention:** Projects are "specimens" with serial numbers (`ISR-014`, `ISR-013`, …) and revision letters (`Rev. A`).

---

## Design tokens

### Colors

| Token              | Hex       | Role |
|--------------------|-----------|------|
| `--ink`            | `#0F0E0C` | Primary text, surfaces, marks |
| `--paper`          | `#F2EDE3` | Canvas / default background |
| `--signal`         | `#F26418` | **Sodium flare** — single accent, used deliberately |
| `--signal-deep`    | `#B83F00` | Signal pressed state |
| `--bone`           | `#E4DDCB` | Secondary surface |
| `--mist`           | `#CFC8B7` | Hover / fill |
| `--stone`          | `#A39B89` | Mid neutral, rules |
| `--shadow`         | `#6B655A` | Tertiary text |
| `--graphite`       | `#3A3631` | Secondary text |
| `--pulse`          | `#C8553D` | Errors, urgency — used rarely |
| `--moss`           | `#5C6F4A` | Success — used rarely |

**Distribution target:** Paper 60% · Ink 28% · Neutrals 8% · Signal 4%.

**Approved pairings:**
- Paper / Ink (default)
- Ink / Paper (inverse)
- Signal / Ink (headline)
- Ink / Signal (emphasis)

### Typography

Three families, no others.

| Family               | Source       | Role                        | Cuts used                    |
|----------------------|--------------|-----------------------------|------------------------------|
| **Space Grotesk**    | Google Fonts | Display & UI                | 300, 400, 500, 600, 700      |
| **JetBrains Mono**   | Google Fonts | Technical / meta / serials  | 400, 500, 700                |
| **Instrument Serif** | Google Fonts | Editorial flourish (italic) | 400 italic                   |

Google Fonts import (already in `brand.css`):
```
https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;700&family=Instrument+Serif:ital@0;1&display=swap
```

**Type scale** (1.250 perfect fourth, rounded):

| Role     | Size  | Weight | Letter-spacing | Family            |
|----------|-------|--------|----------------|-------------------|
| Display  | 96px  | 500    | -0.045em       | Space Grotesk     |
| H1       | 64px  | 500    | -0.030em       | Space Grotesk     |
| H2       | 40px  | 500    | -0.020em       | Space Grotesk     |
| H3       | 28px  | 500    | -0.015em       | Space Grotesk     |
| Body L   | 20px  | 400    | -0.005em       | Space Grotesk     |
| Body     | 16px  | 400    | 0              | Space Grotesk     |
| Caption  | 13px  | 500    | 0              | Space Grotesk     |
| Mono     | 13px  | 400    | 0.02em         | JetBrains Mono    |
| Kicker   | 11px  | 400    | 0.18em (UPPER) | JetBrains Mono    |

Instrument Serif italic is reserved for pull-quotes, taglines, and rare emotional accents — never UI labels or body copy.

### Borders & rules
- `--rule`: `1px solid var(--ink)` — section dividers
- `--hair`: 1px solid 22% ink — subtle dividers, tile borders

### Spacing
- Base gutter: `24px`
- Frames use generous internal padding (`64px` for full brand sheets)

### Radii
**None.** The brand uses square corners throughout — buttons, badges, cards, inputs. This is deliberate.

---

## Logo system

### Monogram — "the Shift mark"
A chunky forward slash inside a square frame. Reads as the `/` in iser/labs, a vector, an italicized I.

**Construction (CSS):** see `.aperture` class in `brand.css`. Square frame, 1.5px stroke. Inside: a parallelogram bar at 22% width, skewed `-22deg`, with 10% top/bottom padding. Two small registration ticks at top-left and bottom-right corners.

### Wordmark
- "Iser Labs" set in Space Grotesk Medium (500), `letter-spacing: -0.03em`, `line-height: 1`.
- The trailing period (`.`) is rendered in `--signal` — this is the brand's signal punctuation.

### Lockups
1. **Horizontal (primary):** Shift mark + wordmark, gap = 0.34em
2. **Stacked:** Shift mark above wordmark, smaller text (0.52× the mark size)
3. **Mono fallback:** plain text `iser/labs` in JetBrains Mono — used when image assets aren't possible (favicons, footers, system messages)

### Clear space
Minimum 1 × monogram width on all sides.

### Minimum sizes
- 36px — UI nav
- 20px — favicon floor
- 14px — absolute minimum

### Misuse — never
- Stretch or skew
- Rotate
- Outline / hollow
- Off-palette accent colors
- Swap the period color away from signal

---

## Iconography

- **Grid:** 24 × 24, 2px margin
- **Stroke:** 1.5px, round caps & joins
- **Style:** Single-stroke, no fills, no gradients
- **Angles:** Right angles and multiples of 45°
- **Centering:** Optical, not geometric

The kit includes 12 icons drawn in this style (see `frames/iconography.jsx`):
Aperture, Specimen, Gauge, Beaker, Caliper, Notebook, Signal, Vector, Stack, Crosshair, Tag, Archive.

Use a permissive icon library (e.g. Lucide) tuned to match these rules, or draw new icons inline as SVG.

---

## Components

All components live in `frames/components.jsx`. Reproduce these in your framework using your design system's primitives.

### Buttons
- **Primary:** ink bg, paper text, 1px ink border, square corners
- **Secondary:** paper bg, ink text, 1px ink border
- **Ghost:** transparent, ink text, no border
- **Signal:** signal bg, ink text, 1px ink border — for emphasis CTAs only
- **Sizes:** small (7×12 padding, 13px) / regular (11×18, 14px)
- All buttons are `border-radius: 0`

### Inputs
- Underlined field style — no boxed inputs
- Label: JetBrains Mono 10px, uppercase, 0.12em tracking
- Field: 16px Space Grotesk, ink-colored value or stone-colored placeholder
- Border-bottom: `1px solid var(--ink)`

### Toggles & checkboxes
- 16px square checkboxes, ink border, ink fill when checked
- Toggles: 36×18, signal fill when on, 14px ink knob

### Badges
- JetBrains Mono 10px, uppercase, 0.1em tracking, 3×8 padding
- Variants: default (bone), signal (orange + leading dot), ink, outline (dashed), pulse (red, hollow)

### Cards (Specimen pattern)
- 1px ink border, 18px padding, paper bg
- Header row: serial number (mono) + status badge
- Title: Space Grotesk 22px Medium
- Body: 13px graphite, 1.5 line-height
- Footer divider (hair) + revision date

### Navigation
- 14px wordmark on left, ellipsis menu on right
- Nav items: 13px, active = ink bg / paper text

### Data tables
- Header: JetBrains Mono 10px uppercase, 0.1em tracking, graphite
- Row dividers: hair rules
- Lot column uses mono; status uses badges

---

## Graphic language

Recurring marks that signal "this is Iser Labs":

- **Serial numbers:** `ISR-014/A` format, JetBrains Mono
- **Hair rules:** 1px ink dividers between everything
- **Frame chrome:** every layout carries a serial in the top-left corner and a label in the top-right (mono, 11px, uppercase, 0.04em tracking)
- **Tick rows:** small vertical bars at varying heights — used as a graphic mark
- **Spec blocks:** key/value pairs (e.g. `LOT — A · 26`)
- **Signal dots:** 8–16px circles in `--signal`, sometimes with a halo
- **Construction grid:** 48px ink-at-8% lines, used for hero/cover backgrounds (see `.grid-bg` in `brand.css`)
- **Corner ticks:** 10px L-shaped corner brackets around hero artwork
- **Period accent:** every wordmark ends with `.` in signal color

---

## Applications

See `frames/applications.jsx` for layouts. Implement as needed:

1. **Business card** — recto: monogram + wordmark + "EST · MMXXV"; verso: ink background, contact in mono
2. **Social square (1080)** — paper bg, kicker + display headline with signal period, footer with URL + signal dot
3. **Site hero** — construction grid bg, balanced display headline, instrument-serif italic accent, status strip with signal dot
4. **Letterhead** — A4-ish, header strip with mark + date, italic sign-off
5. **Deck cover** — ink bg, large display headline, vertical mono caption on the right rail, page counter footer
6. **Stickers / seal** — circular seal with rotating mono text + monogram center; rectangular signal-orange sticker with serial chrome

---

## Voice & tone

Five postures. Each is "X, not Y" — both halves matter.

| Yes        | Not          | Example                                     |
|------------|--------------|---------------------------------------------|
| Precise    | Vague        | "ISR-014 ships May 11."                     |
| Plain      | Performative | "It's a markdown editor."                   |
| Warm       | Corporate    | "We made this for ourselves first."         |
| Curious    | Certain      | "We don't know yet — let's try it."         |
| Specific   | Inflated     | "6 KB, zero deps, runs offline."            |

**Do**
- Sign work. Use serials.
- Show your math.
- Pick one accent and use it sparingly.
- Leave whitespace alone.
- Write like a person who has read a book.

**Don't**
- Add gradients, glows, or fake textures.
- Use emoji as decoration.
- Stack five icons in a row.
- Reach for a second accent color.
- Open a sentence with "In today's fast-paced…"

---

## Motion principles

Four rules, applied to every transition:

1. **Brief** — 120–220ms for state. Anything longer needs a reason.
2. **Linear-ish** — `cubic-bezier(.2, .7, .3, 1)`. No springs, no bounces.
3. **Mechanical** — translate, scale, opacity. No blur, glow, or parallax.
4. **Honest** — loading states show real progress, not generic spinners.

Suggested CSS:
```css
--motion-duration: 160ms;
--motion-ease: cubic-bezier(.2, .7, .3, 1);
```

---

## Files in this bundle

```
design_handoff_iser_labs/
├── README.md                       — this document
├── Iser Labs Brand Kit.html        — main canvas, opens the full system
├── brand.css                       — tokens + .aperture monogram + utility classes
├── design-canvas.jsx               — pan/zoom canvas wrapper (presentation only, not needed in product code)
└── frames/
    ├── cover.jsx                   — §00 Cover
    ├── logo.jsx                    — §01 Logo system, lockups, clear space, misuse
    ├── colors.jsx                  — §02 Color (swatches, ratio bar, pairings)
    ├── typography.jsx              — §03 Typography (specimens, scale)
    ├── iconography.jsx             — §04 Iconography (12 icons, construction)
    ├── components.jsx              — §05 UI components
    ├── applications.jsx            — §06 Business card, social, web, letterhead, deck, stickers
    ├── voice-motion.jsx            — §07 Voice & motion principles
    └── index-page.jsx              — §08 Index & colophon
```

To view locally: open `Iser Labs Brand Kit.html` in a browser. Fonts load from Google Fonts CDN.

## Implementation notes

- `brand.css` is production-portable as-is. Lift the `:root` block straight into your stylesheet or convert to your token format.
- The `.aperture` class is a pure-CSS monogram — no SVG required. It scales with `font-size` or explicit `width`. Color inherits via `currentColor`.
- Wordmark is plain text; render with the typography rules above. The trailing period must always be `var(--signal)` colored.
- Components in the JSX files are illustrative React snippets. Don't ship them — recreate in your framework using your existing primitives, matching the visual decisions.
- The "design-canvas" wrapper is presentation chrome only. Ignore it in product code.
