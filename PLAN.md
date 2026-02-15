# kurtneiswender.com — Unified Personal + Academic Site

## Context

Kurt has 6+ projects scattered across separate Vercel deployments, a GitBook digital garden, and two Obsidian vaults. The goal is to consolidate everything under one cohesive domain (`kurtneiswender.com`) that aligns with four pillars: **learning in public, teaching, practice, and media**. The grading dashboard stays separate (future private faculty site).

**What we're unifying:**
- 3 interactive tools (hvac-calculator, acoustics-visualizer/EchoTrace, mass-timber-designer)
- 1 digital garden (31 markdown files from GitBook)
- Teaching content (LTU Comp Design, EDRA57 workshop)
- Media (Coffee Sketch Podcast, speaking, publications)
- Professional identity (CV, bio, awards)

---

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | **Astro 5.x** | Static-first, markdown content collections, React islands where needed |
| UI | React 18 | For any interactive components; tools stay separate SPAs |
| Styling | Tailwind CSS 4.x | Matches existing tool stack |
| Content | Astro Content Collections | Native markdown/MDX with schema validation |
| Deployment | Vercel | Already used for all projects |
| Domain | kurtneiswender.com | Custom domain on main Vercel project |

---

## Tool Integration: Vercel Rewrites

The 3 tool SPAs stay as independent repos/deployments. Vercel path rewrites serve them under `kurtneiswender.com/tools/*`.

---

## Implementation Phases

### Phase 1: Scaffold + Tools Integration ✅
### Phase 2: Garden
### Phase 3: Teaching + Media + About
### Phase 4: Polish
### Phase 5 (Future): Supabase → Vercel Backend Migration
