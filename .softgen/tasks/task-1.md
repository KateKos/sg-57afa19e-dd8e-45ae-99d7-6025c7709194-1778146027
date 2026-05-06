---
title: Landing page
status: in_progress
priority: urgent
type: feature
tags: [landing, design-system]
created_by: agent
created_at: 2026-05-06
position: 1
---

## Notes
Editorial law-firm gravitas direction. This is the first impression — must commit hard to the aesthetic. Includes design-system setup (globals.css, tailwind.config.ts), header, footer, and full landing.

Fictional brand: **Counsel & Chambers** — "Established Counsel for Modern Enterprise". Population: real-feeling practice areas, 4-6 attorney exemplars with proper credentials (J.D. school, year admitted, bar state), realistic case-fee ranges in JetBrains Mono.

## Checklist
- [x] Set up globals.css with oxblood/cream/ink palette + Newsreader/Source Serif 4/JetBrains Mono fonts (imports FIRST, before @tailwind)
- [x] Update tailwind.config.ts: register fonts (serif=Newsreader, sans=Source Serif 4, mono=JetBrains Mono); ensure HSL token wrappers
- [x] Build Header component: small utility bar (top), wordmark "Counsel & Chambers" centered with hairline rule beneath, navigation (Practice Areas, Find Counsel, How It Works, For Attorneys), CTA "Engage Counsel"
- [x] Build Footer: letterhead-style with multiple columns (Practice Areas, Firm, Resources, Contact), small caps section labels, hairline rules, copyright with "MMXXVI"
- [x] Hero section: editorial headline ("Established Counsel for the Modern Enterprise"), centered, oversized Newsreader display, hairline rule above + below, supporting paragraph, twin CTAs, single hero image (leather-bound legal volumes / classical chamber)
- [x] Trust strip: "Counsel admitted in" — list of bar jurisdictions in small caps separated by middle-dots
- [x] Practice Areas section: I. table-of-contents grid (8 areas: Corporate · M&A · Intellectual Property · Employment · Litigation · Real Estate · Tax · Privacy & Data) with brief description + counsel count
- [x] How It Works: II. three-step process with Roman numerals (Brief, Match, Engage), hairline-separated, no card chrome
- [x] Featured Counsel: III. 4 attorney cards with monogram (initials in serif), name, J.D. school + year, practice areas, jurisdiction, hourly range, "View Brief" link — restrained, no photos
- [x] Pull-quote testimonial: large Newsreader italic with attribution, hairline rules
- [x] Stats/credentials strip: 4 figures (counsel engaged, jurisdictions, practice areas, average match time) — Newsreader display numerals
- [x] Closing CTA section: oxblood background, cream type, single CTA
- [x] Generate hero image: leather-bound legal volumes on mahogany desk, warm window light, editorial photography style

## Acceptance
- Landing reads as a law-firm letterhead, not a SaaS dashboard
- Roman numerals mark major sections
- No gradients, no rounded-2xl, no generic blue
- Newsreader visible on headings, Source Serif 4 on body