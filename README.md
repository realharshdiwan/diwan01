# Diwan Mercantile

Independent software studio, Bengaluru. Site built on the **48 Columns**
direction: a thermal-receipt system — character grid, dot-matrix display type,
hairline rules, no images. The studio is the subject; Parchi is one line on the
slip.

The rejected "Instrument" build is preserved on branch `instrument`.

## Stack

Next.js 16.3.4 (App Router, Turbopack) · React 19 · TypeScript · Tailwind v4
tokens · Handjet (display) + JetBrains Mono (body) via `next/font`. No UI
library. One client component (the mobile menu); the rest is static HTML.

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
| `--color-field` | `#f7f5ef` | Thermal paper |
| `--color-paper` | `#fffdf7` | Receipts, raised slips |
| `--color-ink` | `#14120f` | Text, solid buttons, rules |
| `--color-ink-2` | `#5f584d` | Body copy (6.4:1 on field) |
| `--color-ink-3` | `#6b6459` | Labels and captions (5.4:1 on field) |
| `--color-line` | `#dad5c8` | Hairlines |
| `--color-line-soft` | `#e8e3d6` | Table rules |
| `--color-accent` | `#b32a20` | Status only — `IN DEV`, `COUNTER OPEN` (4.8:1) |

Type: **Handjet** for display only, never below 24px, always uppercase.
**JetBrains Mono** for everything else. Body measure is capped at 62ch.

Rules:

- No images, ever. Diagrams are ASCII.
- One accent, status only. No gradients, no shadows, no textures.
- `.label` is the only caption style: 10px, uppercase, 0.16em tracking.
- `.leader` is the only list ornament: dot leaders, as on a printed invoice.
- `.ascii` sits on a fixed character cell — ASCII diagrams use `+ - |` only,
  because the `next/font` Latin subset has no box-drawing glyphs and would
  fall back to a mismatched face.
- Motion is one 0.5s feed, disabled under `prefers-reduced-motion`.
- Contrast floor: 4.5:1 for all text.

## Structure

```
src/app/layout.tsx        metadata, fonts, skip link, JSON-LD
src/app/page.tsx          homepage sections
src/app/icon.svg          favicon
src/app/globals.css       tokens, base, components, motion
src/components/ui.tsx     Label, Btn, SectionHead
src/components/receipt.tsx    hero slip (DOM, not an image)
src/components/mobile-nav.tsx  mobile menu (only client component)
src/components/site-header.tsx
src/components/site-footer.tsx
src/lib/site.ts           site constants, registrations, nav
```

## Homepage order

Hero (headline + counter slip) → spec strip → 01 The ledger →
02 Capabilities → 03 Method → 04 The lab → 05 Counter open → Footer.

## Next

Phase 1 adds `/studio`, `/capabilities`, `/work`, `/notes`, and a
Resend-backed contact route. Phase 2 adds the Parchi page and case studies.
