# NuRegen — Marketing Landing Page

## Problem Statement (verbatim)
Build a single-page marketing site for NuRegen, a climate-tech / carbon-markets company based in Bhubaneswar, India. Sections (in order): Nav (sticky) · Hero · Who We Are · Did You Know? · The Problem + embedded Carbon Clock · Our Solution · Technology Expertise · Our Process · Value Pillars · Mission Video · Partner Logos marquee · News & Insights · Footer with contact/partner-inquiry form. Serene paper background with subtle navy/green gradient hints, Fraunces / Inter / JetBrains Mono typography, exact-uploaded brand logo, and one intentional dark accent panel (Carbon Clock). Contact form submissions go to info@nuregen.earth.

## Architecture
- **Backend (FastAPI + MongoDB)**
  - `POST /api/contact` — validates + stores partner inquiries in `contact_inquiries` collection
  - `GET /api/contact` — retrieves stored inquiries (admin utility)
  - `POST /api/status`, `GET /api/status` — preserved from template
- **Frontend (React 19 + Tailwind + Sonner + framer-motion available)**
  - 13 section components under `src/components/nuregen/*`
  - Custom scroll reveal via IntersectionObserver (see `App.js` `usePageReveal`)
  - Brand tokens defined as CSS custom properties in `src/index.css`
  - Fonts loaded via Google Fonts (Fraunces, Inter, JetBrains Mono)
  - Assets registry in `src/lib/assets.js` (logo lockup + partner logos + Unsplash placeholders)

## Personas
- Corporate carbon buyers evaluating high-integrity ag credits
- Climate/impact investors and philanthropic funders
- Prospective partner organizations (bio, MRV, agri-tech)

## Core Requirements
1. Single-page marketing site, no auth/DB except contact submissions
2. Exact-file logo usage (no recolor/regenerate) — icon crop in nav, full lockup in footer
3. Serene light background with subtle navy/green gradient hints
4. Visible navy/green diagonal gradient on all sub-pointer cards
5. Carbon Clock = one intentional dark panel (compact, single ticking number)
6. Sections fade + rise on scroll (staggered)
7. Sticky nav gains blur/shadow when scrolled
8. Cards lift on hover; hover-to-reveal detail behaviour on solution/tech/pillar cards
9. Six-step Our Process with an animated connecting line
10. Auto-scrolling grayscale partner logo marquee, full colour on hover
11. Contact/partner form stored in MongoDB; target address surfaced as `info@nuregen.earth`
12. Fraunces / Inter / JetBrains Mono applied consistently, no font mixing

## Implemented (Dec 2025)
- All 13 sections wired end-to-end
- Contact endpoint stores inquiries in MongoDB and echoes forward-to address
- Live-ticking Carbon Clock with per-second increment
- Count-up animation on Did You Know stats
- Marquee partner logos w/ per-logo mix-blend-mode (multiply / lighten) so pre-processed logos merge cleanly on light + dark surfaces
- Toast feedback on contact submit success/failure

## Deferred / Backlog (P1/P2)
- Real hero + mission video URLs (user will provide) — currently high-quality still image placeholders with a play affordance
- Optional email delivery (Resend/SendGrid) — currently DB-only
- Rate-limiting / spam protection on `/api/contact`
- CMS-driven News & Insights entries (currently hardcoded sample titles)
- SEO metadata (title, description, OG image)

## Next Tasks
1. Testing agent verification (backend + frontend flows)
2. Swap in real hero + mission videos when user provides URLs
3. Add SEO tags + favicon using the NuRegen mark
