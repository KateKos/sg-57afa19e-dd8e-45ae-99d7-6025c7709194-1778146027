---
title: Find Counsel directory page
status: done
priority: high
type: feature
tags:
- directory
created_by: agent
created_at: 2026-05-06
position: 2
---

## Notes
Browse attorneys with filters. Editorial directory style — like a law-firm rolodex, not a search results page.

## Checklist
- [x] Create src/pages/find-counsel.tsx
- [x] Sidebar filters: practice area (checkboxes), jurisdiction (state list), hourly rate range, years admitted, language
- [x] Result list: 12-15 attorneys, each row with monogram, name, credentials line (J.D. + year admitted + state bar), 2-3 practice areas as small-caps tags, hourly range in mono, brief 2-line bio, "View Brief" CTA
- [x] Top of page: count of available counsel + sort dropdown (Most Engaged · Newly Admitted · Hourly: Low to High)
- [x] Hairline rules between rows, no cards
- [x] Pagination at bottom (Roman numerals or classical pagination)

## Acceptance
- Page feels like browsing a printed bar registry
- Filters clearly affect visible counsel
