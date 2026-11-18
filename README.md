# Diwan Mercantile

Independent software studio, Bengaluru. Site rebuilt from scratch on the
"Instrument" direction: one hue, line-drawn, measured. The studio is the
subject — products stay on the periphery.

## Stack

Next.js 16.3.4 (App Router, Turbopack) · React 19 · TypeScript · Tailwind v4
tokens · Geist + Geist Mono via `next/font`. No UI library, no client JS on the
homepage.

## Run

```bash
npm install
npm run dev -- --port 3001
```

Port 3000 may be occupied by another local project.

## Design system

Tokens live in `src/app/globals.css` under `@theme`. Change them there, never
inline.

| Token | Value | Use |
| --- | --- | --- |
| `--color-field` | `#f2f1ec` | Page field |
| `--color-paper` | `#faf9f5` | Raised surfaces, plates |
| `--color-plate` | `#e9e8df` | Recessed surfaces |
| `--color-ink` | `#0b3d2e` | Text, solid buttons, contact band |
| `--color-ink-2` | `#3e5b4e` | Body copy (6.6:1 on field) |
| `--color-ink-3` | `#506358` | Labels and captions (5.7:1 on field) |
| `--color-line` | `#d9d6c7` | Hairlines |
| `--color-line-strong` | `#b4c0b5` | Section rules, rails |

Type: one family, one mono. Display uses tight tracking (`-0.035em`) and fluid
`clamp()` sizes. Every number and label is mono, tabular.

Rules:

- One hue. No second accent, no gradients, no shadows except the sticky header.
- Hairlines carry structure; borders are 1px, radii are 4px / 10px only.
- `.mono-label` is the only caption style: 10.5px, uppercase, 0.18em tracking.
- Motion is a single 0.65s rise, disabled under `prefers-reduced-motion`.
- Contrast floor: 4.5:1 for all text. `--color-ink-3` is the lightest text
  allowed on `--color-field`.

## Structure

```
src/app/layout.tsx        metadata, fonts, rails, skip link, JSON-LD
src/app/page.tsx          homepage sections
src/app/icon.svg          favicon
src/app/globals.css       tokens + base + utilities
src/components/ui.tsx     Button, Mono, SectionHead, Plate
src/components/instrument.tsx  engraved dial (inline SVG)
src/components/site-header.tsx
src/components/site-footer.tsx
src/lib/site.ts           site constants, registrations, nav
```

## Homepage order

Hero → spec strip → 01 The standard → 02 Capabilities → 03 Method →
Parchi (one line) → Contact → Footer.

## Next

Phase 1 adds `/studio`, `/capabilities`, `/work`, `/contact` and a Resend-backed
contact route. Phase 2 adds the Parchi page and case studies. No portal until
applicants outgrow a form.
