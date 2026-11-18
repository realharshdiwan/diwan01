# Diwan Mercantile

Independent software studio, Bengaluru. The site is the studio: a warm paper
field, one oversized wordmark, and enough silence to let the words do the work.
Parchi is one line in the footer.

Structure follows [by-kin.com](https://by-kin.com) — full-bleed wordmark as the
image, nav top-right, statement mid-left, an index rail at the bottom left, one
`1 / 2` layout toggle. The words, palette, and type are our own. No
photography, no case studies, and no numbers we cannot stand behind.

## Stack

Next.js 16.3.4 (App Router, Turbopack) · React 19 · TypeScript · Tailwind v4.
**Instrument Sans** (display and body) and **JetBrains Mono** (labels only) via
`next/font`. No UI library. One client component, the native `<details>` mobile
menu; the layout toggle is CSS only.

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
| `--color-field` | `#f4f2ed` | Page field |
| `--color-paper` | `#fffdf7` | Plates, menu panel |
| `--color-ink` | `#14120f` | Text, wordmark, rules |
| `--color-ink-2` | `#5f584d` | Body copy |
| `--color-ink-3` | `#6b6459` | Labels and captions (5.2:1 on field) |
| `--color-line` | `#dad5c8` | Section rules, plate borders |
| `--color-line-2` | `#e7e2d6` | Secondary rules |
| `--color-accent` | `#b32a20` | Link and email hover only |

Type: **Instrument Sans** at 400, 450 (statement), and 600 (wordmark).
**JetBrains Mono** at 10–11px for `.label` and registration numbers. Body
measure is capped at 46–62ch.

Rules:

- No images. The wordmark is the hero image; it is cropped by the viewport.
- One accent, on hover only. No gradients, no decorative shadows.
- `.label` is the only caption style: 10px mono, uppercase, 0.14em tracking.
- `.plate` is the only ornament: a 44px bordered square holding an index number.
- Motion is two 0.15–0.18s hover transitions. Everything else is static and
  disabled under `prefers-reduced-motion`.
- Contrast floor: 4.5:1 for all text.
- The hero grid is one `grid-template-areas` block; the `1 / 2` toggle flips
  those areas via `:has(#hero-layout-2:checked)`. No script, no layout shift.

## Structure

```
src/app/layout.tsx             metadata, fonts, skip link, JSON-LD
src/app/page.tsx               Hero → Studio → Capabilities → Contact
src/app/icon.svg               favicon
src/app/globals.css            tokens, base, hero, shell
src/components/hero.tsx        wordmark, statement, index rail, toggle
src/components/ui.tsx          cx, Label
src/components/mobile-nav.tsx  mobile menu (only client component)
src/components/site-header.tsx
src/components/site-footer.tsx
src/lib/site.ts                site constants, registrations, nav
```

## Homepage order

Hero → Studio (positioning and facts) → Capabilities (four items) → Contact →
Footer. There is no Work section until there is work to show.

## Next

Real project pages when there are real projects. Until then, the index rail
points at capabilities, not at invented case studies.
