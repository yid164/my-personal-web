# Personal Site Roadmap

This roadmap is designed for your Astro + Tailwind personal site and organized into clear phases with deliverables and checklists.

---

## Goals

- Build a modern, professional, and memorable personal site.
- Showcase your iOS/mobile engineering background with measurable impact.
- Keep performance, accessibility, and maintainability strong.

---

## Suggested Timeline (3-4 Day Sprint)

- **Day 1:** Foundation + visual polish (Phase 1)
- **Day 2:** Core content + resume page (Phase 2)
- **Day 3:** Fancy interactions + UX polish (Phase 3)
- **Day 4:** SEO, performance, accessibility, deploy verification (Phase 4)

Optional Phase 5 items can be added after launch.

---

## Phase 1: Foundation and Visual System (Quick Wins)

### Deliverables
- [ ] Consistent typography and spacing scale
- [ ] Color palette (with dark/light support)
- [ ] Sticky navigation with smooth section links
- [ ] Polished hero section with CTA buttons

### Tasks
- [ ] Create a design token section in `src/styles/global.css` (colors, spacing, text sizes)
- [ ] Add a theme toggle (dark/light mode) and persist preference
- [ ] Improve `src/pages/index.astro` layout hierarchy (hero, about, skills, experience, contact)
- [ ] Add responsive nav and active section highlights

### Acceptance Criteria
- Site looks cohesive across mobile/tablet/desktop
- Visual style feels intentional, not template-like

---

## Phase 2: Core Content and Professional Positioning

### Deliverables
- [ ] Strong project portfolio section (4–6 projects)
- [ ] Experience timeline with impact-focused bullets
- [ ] Dedicated resume page (`/resume`)
- [ ] Strong contact section

### Tasks
- [ ] Replace placeholder cards with real projects (title, stack, summary, links)
- [ ] Add “impact” metrics where possible (performance improvements, feature ownership, scale)
- [ ] Create `src/pages/resume.astro` with clean readable layout
- [ ] Add resume download link (PDF in `public/`)
- [ ] Add contact links (email, LinkedIn, GitHub) with polished UX

### Acceptance Criteria
- A recruiter can understand your profile in under 60 seconds
- Every featured project has clear value and role context

---

## Phase 3: Fancy Interactions and Experience

### Deliverables
- [ ] Subtle scroll-reveal animations
- [ ] Improved hover/motion interactions
- [ ] Optional project filtering by category/tech

### Tasks
- [ ] Add section reveal transitions (lightweight and performance-safe)
- [ ] Add tasteful hover effects for cards/buttons/links
- [ ] Add project filter chips (e.g., iOS, Security, Web)
- [ ] Add motion-reduced fallback for accessibility

### Acceptance Criteria
- Interactions feel smooth and modern, not distracting
- No major performance regressions from animations

---

## Phase 4: SEO, Performance, and Accessibility

### Deliverables
- [ ] SEO metadata + social previews
- [ ] Lighthouse optimization pass
- [ ] Accessibility pass (keyboard + contrast + semantics)
- [ ] Basic analytics integration

### Tasks
- [ ] Add proper `<title>`, description, Open Graph, and Twitter tags
- [ ] Add site preview image in `public/`
- [ ] Optimize image sizes and lazy loading
- [ ] Run Lighthouse and fix high-impact issues
- [ ] Validate heading hierarchy and keyboard navigation
- [ ] Add privacy-friendly analytics (optional)

### Acceptance Criteria
- Strong Lighthouse scores (Performance/SEO/Accessibility best effort)
- Social links render high-quality preview cards

---

## Phase 5: Standout Features (Optional)

Pick one or two to avoid overbuilding:

- [ ] Blog or notes section using Astro content collections
- [ ] “Now” page (`/now`) for current focus
- [ ] Detailed case-study pages for major projects
- [ ] Multilingual support (EN + Chinese)
- [ ] Command palette for navigation/search

---

## Implementation Order (Recommended)

1. Foundation polish (Phase 1)
2. Real content and resume page (Phase 2)
3. Fancy interactions (Phase 3)
4. SEO/performance/accessibility hardening (Phase 4)
5. Optional standout additions (Phase 5)

---

## Daily Tracking Template (for this sprint)

Use this checklist at the end of each day:

- [ ] Planned scope for today is clear
- [ ] Completed UI changes are responsive
- [ ] Build passes (`npm run build`)
- [ ] Deployment to GitHub Pages verified
- [ ] Notes added for tomorrow’s priorities

---

## Definition of “Done”

The site is “done enough” for launch when:

- Core sections are complete and polished
- Projects and resume clearly communicate your value
- Mobile experience is smooth and readable
- SEO metadata and social preview are configured
- Deployment is stable and repeatable
