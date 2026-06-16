# Iser Labs — brand assets

Generated from `../docs/design_handoff_iser_labs` (brand.css + frames/logo.jsx).
The monogram is a chunky forward slash in a square frame with two registration
ticks — it reads as the `/` in `iser/labs`.

## Palette

| Token | Hex | Use |
|---|---|---|
| Ink | `#0F0E0C` | primary / text |
| Paper | `#F2EDE3` | canvas / background |
| Signal | `#F26418` | single accent (the period, active states) |
| Graphite | `#3A3631` | secondary text |
| Stone | `#A39B89` | dividers / mid neutral |
| Bone | `#E4DDCB` | secondary surface |
| Pulse | `#C8553D` | errors / urgent only |

## Type

- **Display:** Space Grotesk (500 for the wordmark)
- **Mono:** JetBrains Mono
- **Editorial:** Instrument Serif (italic)

## Files

| File | What | Use |
|---|---|---|
| `mark.svg` | monogram, ink, transparent | scalable source / favicon |
| `mark-signal.svg` | monogram, amber slash, transparent | accent source |
| `mark-reverse.svg` | monogram, paper, transparent | for dark backgrounds |
| `avatar-paper-{1024,512}.png` | ink monogram on paper | GitHub org avatar (faithful) |
| `avatar-signal-{1024,512}.png` | amber slash on paper | GitHub org avatar (most distinctive — recommended) |
| `avatar-ink-{1024,512}.png` | paper monogram on ink | dark-context avatar |
| `favicon-32.png`, `favicon-apple-180.png` | small icons | site favicon / touch icon |
| `mark-1024.png` | ink monogram, transparent | flexible raster |
| `wordmark-light.png` | lockup, ink text, **transparent** | README header (light mode) |
| `wordmark-dark.png` | lockup, paper text, **transparent** | README header (dark mode) |
| `wordmark.svg` | lockup vector (Google webfont) | websites (not GitHub README) |

## Set the GitHub org avatar (manual — no API for this)

`github.com/organizations/iserlabs/settings/profile` → **Profile picture** →
**Upload a picture** → choose `avatar-signal-512.png` (or `avatar-paper-512.png`).
GitHub crops square and rounds the corners.

## README header snippet (auto light/dark)

```html
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/iserlabs/.github/main/brand/wordmark-dark.png">
  <img alt="Iser Labs" src="https://raw.githubusercontent.com/iserlabs/.github/main/brand/wordmark-light.png" width="420">
</picture>
```

## Regenerate

Rasterized with ImageMagick. Note: IM's SVG coder forces a white canvas unless
`-background none` precedes the SVG input — keep that flag order. Weight 500 needs
`fonttools varLib.instancer SpaceGrotesk[wght].ttf wght=500` (falls back to the
variable default otherwise).
