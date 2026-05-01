# SPU Website — Full Remediation Plan
### Aligned to Requirements v5.1 | Branch: `refactore`

---

> **How to read this document**
>
> Every task carries a **Req ID** (from the requirements doc), a **Priority** (P1 = launch blocker / P2 = high value / P3 = post-launch), an **Effort** estimate (S = hours, M = 1–2 days, L = 3–5 days, XL = week+), and a **Type** tag (ARCH = architecture, FE = frontend, BE = backend/form, SEO = SEO/meta, A11Y = accessibility, GOV = governance/content).

---

## Phase 0 — Foundation Decisions (Do First, Everything Else Depends on These)

These are not features. They are irreversible architectural choices that affect every other task. Agree on them before writing a single line of new code.

---

### TASK-000 — Decide on Clean URL Strategy
**Req:** FR-NAV02, NFR-SEO-01, MIG-02 | **Priority:** P1 | **Effort:** S | **Type:** ARCH

**Problem:** The requirements use clean URLs (`/about`, `/admissions`, `/facilities`). The current build uses `.html` suffixes (`/about.html`). Every link, sitemap entry, canonical tag, hreflang tag, 301 redirect map, and nav item is affected by this decision.

**Decision options:**

| Option | How | Tradeoff |
|---|---|---|
| A — Keep `.html`, update requirements | Change req doc | Violates SEO spec NFR-SEO-01, non-standard |
| B — Use Vite + server rewrite rules | Configure server to strip `.html` | Clean URLs, no file rename needed |
| C — Rename files to extensionless + folder structure | `/about/index.html` pattern | Clean URLs, requires generator rewrite |

**Recommended: Option B.** Add a `vite.config.js` dev server rewrite and a production server rule (nginx/Apache `.htaccess`) that strips `.html`. Then update `site-pages.json` canonical paths to extensionless slugs.

**Acceptance criteria:**
- `https://spu.edu.sy/about` resolves without redirect
- `https://spu.edu.sy/about.html` 301-redirects to `https://spu.edu.sy/about`
- `src/config/site-pages.json` `canonicalPath` fields updated throughout

---

### TASK-001 — Define the Full Page Registry
**Req:** All FR-* | **Priority:** P1 | **Effort:** M | **Type:** ARCH

**Problem:** `src/config/site-pages.json` currently lists 8 pages. The requirements define 60+ pages across all sections plus the Facilities hub-and-spoke architecture. Every missing page is a dead link or a 404.

**Action:** Expand `site-pages.json` with every page defined in Sections 1–11 of the requirements. Use a hierarchical structure:

```json
{
  "pages": [
    { "name": "home", "path": "/", "fileName": "index.html", ... },
    { "name": "about", "path": "/about", "fileName": "about/index.html", ... },
    { "name": "about-history", "path": "/about/history", "fileName": "about/history/index.html", ... },
    { "name": "about-leadership", "path": "/about/leadership", "fileName": "about/leadership/index.html", ... },
    { "name": "about-directorates", "path": "/about/directorates", "fileName": "about/directorates/index.html", ... },
    { "name": "about-partnerships", "path": "/about/partnerships", "fileName": "about/partnerships/index.html", ... },
    { "name": "admissions", "path": "/admissions", "fileName": "admissions/index.html", ... },
    { "name": "admissions-requirements", "path": "/admissions/requirements", ... },
    { "name": "admissions-tuition", "path": "/admissions/tuition", ... },
    { "name": "admissions-how-to-apply", "path": "/admissions/how-to-apply", ... },
    { "name": "admissions-transfer", "path": "/admissions/transfer", ... },
    { "name": "admissions-calendar", "path": "/admissions/calendar", ... },
    { "name": "admissions-documents", "path": "/admissions/documents", ... },
    { "name": "admissions-faq", "path": "/admissions/faq", ... },
    { "name": "facilities", "path": "/facilities", "fileName": "facilities/index.html", ... },
    { "name": "facilities-ai", "path": "/facilities/ai-engineering", ... },
    { "name": "facilities-ai-overview", "path": "/facilities/ai-engineering/overview", ... },
    { "name": "facilities-ai-departments", "path": "/facilities/ai-engineering/departments", ... },
    { "name": "facilities-ai-study-plan", "path": "/facilities/ai-engineering/study-plan", ... },
    { "name": "facilities-ai-calendar", "path": "/facilities/ai-engineering/calendar", ... },
    { "name": "facilities-ai-research", "path": "/facilities/ai-engineering/research", ... },
    { "name": "facilities-ai-projects", "path": "/facilities/ai-engineering/projects", ... },
    { "name": "facilities-ai-alumni", "path": "/facilities/ai-engineering/alumni", ... },
    { "name": "facilities-ai-valedictorians", "path": "/facilities/ai-engineering/valedictorians", ... },
    "...repeat hub + sub-pages for all 6 facilities...",
    { "name": "research", "path": "/research", ... },
    { "name": "research-publications", "path": "/research/publications", ... },
    { "name": "research-centers", "path": "/research/centers", ... },
    { "name": "research-expert-finder", "path": "/research/expert-finder", ... },
    { "name": "research-conferences", "path": "/research/conferences", ... },
    { "name": "research-library", "path": "/research/library", ... },
    { "name": "research-policies", "path": "/research/policies", ... },
    { "name": "campus-life", "path": "/campus-life", ... },
    { "name": "campus-life-services", "path": "/campus-life/services", ... },
    { "name": "campus-life-hospital", "path": "/campus-life/hospital", ... },
    { "name": "campus-life-dental", "path": "/campus-life/dental", ... },
    { "name": "campus-life-clubs", "path": "/campus-life/clubs", ... },
    { "name": "campus-life-career", "path": "/campus-life/career", ... },
    { "name": "campus-life-health", "path": "/campus-life/health", ... },
    { "name": "campus-life-transport", "path": "/campus-life/transport", ... },
    { "name": "campus-life-sports", "path": "/campus-life/sports", ... },
    { "name": "e-services", "path": "/e-services", ... },
    { "name": "e-services-student-portal", "path": "/e-services/student-portal", ... },
    { "name": "e-services-appeals", "path": "/e-services/appeals", ... },
    { "name": "e-services-library", "path": "/e-services/library", ... },
    { "name": "news", "path": "/news", ... },
    { "name": "news-articles", "path": "/news/articles", ... },
    { "name": "news-announcements", "path": "/news/announcements", ... },
    { "name": "news-events", "path": "/news/events", ... },
    { "name": "news-gallery", "path": "/news/gallery", ... },
    { "name": "news-press-room", "path": "/news/press-room", ... },
    { "name": "contact", "path": "/contact", ... },
    { "name": "contact-map", "path": "/contact/map", ... }
  ]
}
```

**Also update `scripts/generate-page-shells.js`** to handle nested directory structures (currently assumes all pages are at root level).

**Acceptance criteria:**
- All 60+ pages have entries in `site-pages.json`
- `npm run generate:pages` creates all HTML shell files in correct folder structure
- `public/sitemap.xml` lists all 60+ clean URLs

---

### TASK-002 — Rename "Faculties" to "Facilities" Throughout
**Req:** Section 6 header | **Priority:** P1 | **Effort:** M | **Type:** ARCH

**Files to rename/update:**

| Current | New |
|---|---|
| `faculties.html` | `facilities/index.html` |
| `src/data/pages/faculties-content.js` | `src/data/pages/facilities-content.js` |
| `src/alpine/pages/faculties-page-stores.js` | `src/alpine/pages/facilities-page-stores.js` |
| `src/data/domains/faculties-catalog.js` | `src/data/domains/facilities-catalog.js` |
| `src/alpine/register-faculty-catalog-store.js` | `src/alpine/register-facility-catalog-store.js` |
| Alpine store `$store.faculties` | `$store.facilities` |
| Alpine store `$store.facultiesPage` | `$store.facilitiesPage` |
| Nav label "Faculties" | "Facilities" |
| All `href="/faculties.html"` links | `href="/facilities"` |

**Add 301 redirect:** `/faculties` → `/facilities` and `/faculties.html` → `/facilities` in nginx/`.htaccess`.

---

### TASK-003 — Rename "Student Life" to "Campus Life"
**Req:** FR-CL-LP, Section 8 | **Priority:** P1 | **Effort:** S | **Type:** ARCH

| Current | New |
|---|---|
| `student-life.html` | `campus-life/index.html` |
| `src/data/pages/student-life-content.js` | `src/data/pages/campus-life-content.js` |
| `src/alpine/pages/student-life-stores.js` | `src/alpine/pages/campus-life-stores.js` |
| `$store.studentLifePage` | `$store.campusLifePage` |
| Nav label "Student Life" | "Campus Life" |
| All links `/student-life.html` | `/campus-life` |

**Add 301 redirect:** `/student-life` → `/campus-life`.

---

## Phase 1 — Navigation & Global Shell (Launch Blockers)

---

### TASK-010 — Rebuild Navigation to v5.0 Model
**Req:** FR-NAV01, FR-NAV02, FR-NAV03, FR-NAV07 | **Priority:** P1 | **Effort:** M | **Type:** FE

**Problem:** Current nav items have incorrect labels, wrong URLs, and the dropdown sub-page list doesn't match Section 1.3 of the requirements.

**Update `src/data/layout-content.js` `navigationMenuItems`:**

```
About       → /about       children: History · Leadership · Directorates · Partnerships
Admissions  → /admissions  children: Requirements · Tuition · How to Apply · Transfer · Calendar · Documents · FAQ
Facilities  → /facilities  children: [all 6 facility names → /facilities/{slug}]
Research    → /research    children: Office · Publications · Centers · Expert Finder · Conferences · Library · Policies
Campus Life → /campus-life children: Services · Hospital · Dental · Clubs · Career · Health · Transport
E-Services  → /e-services  children: Student Portal · Appeals · Library
News        → /news        children: News · Announcements · Events · Gallery · Press Room
Contact     → /contact     children: Contact Info · Campus Map
```

**Also add to utility nav (header):**
- Search icon (expands to search bar — see TASK-080)
- Apply CTA button → `/admissions/how-to-apply`
- Student Portal → `http://my.spu.edu.sy/ar/login` (new tab)

**Active state:** The current `item.page === $store.app.currentPage` logic works. Extend it for sub-pages by checking if `currentPage` starts with the parent slug.

**Acceptance criteria:**
- All 8 nav items navigate to correct landing pages
- Dropdowns show correct sub-page links per Section 1.3
- Apply CTA is visible at all viewport sizes
- Keyboard navigation: Tab through items, Enter activates, Escape closes dropdown
- RTL verified in Arabic

---

### TASK-011 — Add Breadcrumb Component
**Req:** FR-NAV04 | **Priority:** P1 | **Effort:** M | **Type:** FE

**Create:** `public/components/layout/breadcrumb.html`

The breadcrumb must:
- Show `Home > Section > Sub-page` hierarchy
- Be auto-generated from `site-pages.json` metadata (each page entry needs a `parent` field)
- Not show on the homepage
- Be RTL-correct in Arabic (reversed order, flipped chevrons)
- All items except current page are clickable links

**Add `parent` field to `site-pages.json`:**
```json
{ "name": "about-history", "path": "/about/history", "parent": "about", ... }
```

**Add breadcrumb slot to all non-home page shells:**
```html
<div data-layout-slot="breadcrumb"></div>
```

**Add to `layoutComponentMap` in `site-shell.js`:**
```js
breadcrumb: '/components/layout/breadcrumb.html'
```

**Acceptance criteria:**
- Breadcrumbs appear on every sub-page
- Not shown on homepage or section landing pages (optional per design)
- Links are functional
- RTL order correct in Arabic

---

### TASK-012 — Add "Coming Soon" Placeholder State
**Req:** NFR-USE-03 | **Priority:** P1 | **Effort:** S | **Type:** FE

**Create:** `public/components/layout/coming-soon.html`

A designed placeholder page component — not a blank page, not a 404 — that renders when a page exists in the nav but has no published content yet. It must include SPU header + footer, a page title, a bilingual "coming soon" message, and a homepage link.

**Use this as the component list for any not-yet-built page** in `site-pages.json`:
```json
"components": ["/components/layout/coming-soon.html"]
```

**Acceptance criteria:**
- No page in the nav returns 404 or blank
- Placeholder renders with header + footer
- Includes bilingual message and homepage link

---

### TASK-013 — Emergency Notice Zone
**Req:** FR-NAV01 (utility nav), Section 3 Block 10 | **Priority:** P1 | **Effort:** S | **Type:** FE

Add a conditional high-contrast banner above the nav in `header.html`. Controlled by a CMS flag (or for now, an Alpine store boolean `$store.app.emergencyNotice.active`). Hidden when `active = false`. No layout shift when hidden.

```js
// In layout-content.js
emergencyNotice: {
  active: false,
  messageEn: '',
  messageAr: ''
}
```

---

### TASK-014 — Cookie Consent Banner
**Req:** NFR-SEC-10 | **Priority:** P1 | **Effort:** S | **Type:** FE

Add a GDPR-compliant cookie consent banner that:
- Appears on first visit (stored in `localStorage`)
- Has Accept / Decline buttons
- Links to privacy policy page
- Is keyboard accessible
- Available in AR + EN

Create: `public/components/layout/cookie-banner.html`

---

### TASK-015 — Fix Footer
**Req:** Section 3 Block 10 | **Priority:** P1 | **Effort:** S | **Type:** FE

Current footer is missing:
- Accessibility report link (required by NFR-ACC-07) → links to `/e-services/appeals` with pre-filled category
- Privacy Policy link → `/privacy` (stub page)
- Cookie Policy link
- Sitemap link → `/sitemap.xml`
- Copyright year should auto-update (`new Date().getFullYear()` in Alpine expression)

---

### TASK-016 — "Last Reviewed" Date Component
**Req:** NFR-ACC-08 | **Priority:** P1 | **Effort:** S | **Type:** FE

Create a reusable inline component tag that shows "Last reviewed: Month Year" on: admissions pages, tuition, hospital, dental, scholarship, and campus service pages.

Create: `public/components/shared/last-reviewed.html`

```html
<div x-data class="last-reviewed-badge font-hacen" x-show="$store.app.currentLang">
  <span x-text="$store.app.currentLang === 'ar' ? 'آخر مراجعة: ' : 'Last reviewed: '"></span>
  <span translate="no" x-text="reviewDate"></span>
</div>
```

Add `reviewDate` to the relevant page content stores. This is a MUST — absence at launch blocks go-live per NFR-ACC-08.

---

### TASK-017 — Add Skip Navigation Link
**Req:** NFR-ACC-05 | **Priority:** P1 | **Effort:** S | **Type:** A11Y

Add as the very first focusable element in `header.html`:

```html
<a href="#main-content" class="skip-nav sr-only focus:not-sr-only">
  Skip to main content
</a>
```

Add `id="main-content"` to the `<main>` element in all page shells.

---

## Phase 2 — Section Landing Pages (All 8 Sections Need Real Landing Pages)

Each section currently either doesn't exist or is a single-page dump. Every section needs a proper landing page per the requirements.

---

### TASK-020 — About Landing Page
**Req:** FR-ABT-LP | **Priority:** P1 | **Effort:** M | **Type:** FE

**URL:** `/about`

The current `/about.html` is fine as a base but needs:
- A hero with the SPU **mission statement** (currently the hero has a generic title)
- An **overview card grid** linking to all 4 sub-pages: History, Leadership, Directorates, Partnerships
- A **stats strip** (students, programs, years established) — the values already exist in `about-content.js`

**Create sub-page cards component:** `public/components/pages/about/subpage-cards.html`

---

### TASK-021 — About Sub-Pages (4 missing)
**Req:** FR-ABT01, FR-ABT04, FR-ABT05, FR-ABT06 | **Priority:** P1 | **Effort:** M | **Type:** FE

| Page | URL | Status | Action |
|---|---|---|---|
| History & Founding | `/about/history` | Content exists in store | Extract to own page + route |
| Leadership | `/about/leadership` | Content exists in store | Extract to own page + route |
| Central Directorates | `/about/directorates` | ❌ No content | Create content + page |
| Partnerships | `/about/partnerships` | ❌ No content | Create content + page |

**For directorates:** Add to `about-content.js`:
```js
directorates: [
  { titleEn: 'Admissions Directorate', titleAr: 'مديرية القبول', summaryEn: '...', summaryAr: '...' },
  { titleEn: 'Student Affairs Directorate', ... },
  { titleEn: 'Quality Assurance Directorate', ... },
  // ...
]
```

---

### TASK-022 — Admissions Landing Page Rebuild
**Req:** FR-ADM-LP | **Priority:** P1 | **Effort:** M | **Type:** FE

**URL:** `/admissions`

Current page has a hero + steps + requirements in one file. Needs:
- Sub-page card grid linking to all 7 admissions sub-pages
- Key dates strip (next intake deadline) — add `nextIntake` field to `admissions-content.js`
- Request Info form link / embed (FR-CRM-01)
- Apply Now CTA visible at page level

---

### TASK-023 — Admissions Sub-Pages (5 missing)
**Req:** FR-ADM02–07 | **Priority:** P1 | **Effort:** L | **Type:** FE

| Page | URL | Requirements | Notes |
|---|---|---|---|
| Tuition & Fees | `/admissions/tuition` | FR-ADM02 | Fee tables per faculty + payment methods. Add `lastReviewed` date. |
| How to Apply | `/admissions/how-to-apply` | FR-ADM03 | Visual step-by-step. Apply CTA at each step. |
| Transfer & International | `/admissions/transfer` | FR-ADM04 | Credit transfer policy, visa guide |
| Academic Calendar | `/admissions/calendar` | FR-ADM05 | All key dates. Downloadable PDF link. |
| Documents Checklist | `/admissions/documents` | FR-ADM06 | Downloadable checklist per application type |
| Admissions FAQ | `/admissions/faq` | FR-ADM07 | ≥ 25 Q&As, expandable, searchable |

**Add fee data to `admissions-content.js`:**
```js
tuition: {
  lastReviewed: 'April 2026',
  faculties: [
    { nameEn: 'Medicine', nameAr: 'الطب', annualFeeUSD: '...', annualFeeSYP: '...' },
    // ...
  ],
  paymentMethods: [...],
  installmentOptions: [...]
}
```

---

### TASK-024 — CRM Lead Capture Form
**Req:** FR-CRM-01 | **Priority:** P1 | **Effort:** M | **Type:** BE

This is a **MUST** requirement. A "Request Info" form must be reachable from:
1. Homepage utility nav area
2. All admissions pages
3. All facility/program pages

**Create:** `public/components/shared/request-info-form.html`

**Fields:** Name, Email, Phone, Nationality, Faculty of interest (dropdown), Level (UG/PG)

**On submit:**
1. Auto-reply email to the prospect (requires backend endpoint)
2. Lead record stored (admin dashboard — see TASK-110)
3. UTM source parameters captured from URL

**For the frontend build**, create the form component with:
- Client-side validation
- A `fetch()` POST to a configurable endpoint (`/api/leads`)
- Success/error state in AR + EN
- UTM parameter capture from `window.location.search`

---

### TASK-025 — Facilities Landing Page
**Req:** FR-FAC-LP01–04 | **Priority:** P1 | **Effort:** M | **Type:** FE

**URL:** `/facilities`

**Create:** `public/components/pages/facilities/landing-hero.html` and `public/components/pages/facilities/facilities-grid.html`

Content:
- Hero + SPU academic model description
- Grid of all 6 facilities (image, name, short descriptor, CTA to `/facilities/{slug}`)
- Aggregated metrics strip (total programs, labs, enrolled students)

**Update `site-pages.json`** to add this as the `facilities` page.

**Update nav dropdown** so Facilities items link to `/facilities/{slug}` hub pages, not `/faculties.html#faculty-N`.

---

### TASK-026 — Facility Hub Pages (6 facilities)
**Req:** FR-FAC-HUB01–04 | **Priority:** P1 | **Effort:** L | **Type:** FE

**URL pattern:** `/facilities/{slug}` for each of:
- `medicine` · `dentistry` · `pharmacy` · `ai-engineering` · `construction-engineering` · `business-administration`

Each hub page needs:
- Hero image (use existing faculty banner images)
- Quick facts strip (enrolled students, departments, programs)
- Navigation card grid to all sub-pages: Overview, Departments, Study Plan, Calendar, Research, Projects, Alumni, Valedictorians

**Create shared template:** `public/components/pages/facilities/hub-nav-cards.html` — driven by data, not 6 separate files.

**Create Alpine store pattern:**
```js
// src/alpine/pages/facilities-hub-stores.js
Alpine.store('currentFacility', {
  slug: document.body.dataset.facilitySlug,
  data: facilitiesCatalog.find(f => f.slug === slug)
})
```

Add `data-facility-slug` to each facility hub's `<body>` tag.

---

### TASK-027 — Facility Sub-Pages (Overview, Departments, Study Plan, Calendar)
**Req:** FR-FAC-OV01–03, FR-FAC-DEP01, FR-FAC-ST01–03, FR-FAC-CAL01–02 | **Priority:** P1 | **Effort:** XL | **Type:** FE

These are the core academic pages. Build shared templates, not 6×4=24 unique files.

**Overview** (`/facilities/{slug}/overview`):
- Faculty description, vision
- Dean message (photo + text)
- Faculty council member list (CT-PERSON cards)

**Departments** (`/facilities/{slug}/departments`):
- All departments with name, description, degree types

**Study Plan** (`/facilities/{slug}/study-plan`):
- Programs grouped by department + level
- Downloadable PDF links per program (add PDF paths to `facilities-catalog.js`)
- `lastReviewed` date visible

**Calendar** (`/facilities/{slug}/calendar`):
- Academic year calendar with key dates
- Download PDF button

**Data model extension for `facilities-catalog.js`:**
```js
{
  slug: 'medicine',
  dean: { nameEn: '...', nameAr: '...', photoUrl: '...', messageEn: '...', messageAr: '...' },
  departments: [
    { nameEn: 'Internal Medicine', nameAr: 'الطب الباطني', degrees: ['MD'] }
  ],
  studyPlan: { pdfUrl: '/documents/study-plans/medicine-2025.pdf', lastReviewed: 'September 2025' },
  calendar: { pdfUrl: '/documents/calendars/medicine-2025-2026.pdf' }
}
```

---

### TASK-028 — Alumni & Valedictorian Pages
**Req:** FR-FAC-ALM01–03, FR-FAC-VAL01–04 | **Priority:** P1 | **Effort:** L | **Type:** FE

**Alumni** (`/facilities/{slug}/alumni`):
- Card grid: photo, name, graduation year, program, current role, company
- Filter by graduation year and program (Alpine reactive filtering, no page reload)
- CT-ALUMNI-STORY content type enforced

**Valedictorians** (`/facilities/{slug}/valedictorians`):
- Grouped by academic year → First Semester / Second Semester
- Card: photo, name, program, semester, academic year, optional GPA
- Newest first

**Add alumni + valedictorian data arrays to each facility in `facilities-catalog.js`.**

---

### TASK-029 — Research Landing Page Rebuild
**Req:** FR-RES-LP | **Priority:** P2 | **Effort:** M | **Type:** FE

**URL:** `/research`

Current page is a single-file display. Needs:
- Research mission statement in hero
- Highlight strip: publication count, active research centers, Google Scholar index status
- Sub-page card grid linking to all research sub-pages
- Featured publication card (most recent)

---

### TASK-030 — Research Sub-Pages
**Req:** FR-RES01–08 | **Priority:** P2 | **Effort:** XL | **Type:** FE + BE

| Page | URL | Priority | Key Requirements |
|---|---|---|---|
| Publications Repository | `/research/publications` | MUST | HTML page per publication, PDF download, citation meta tags in `<head>` |
| Research Centers | `/research/centers` | SHOULD | CT-RESEARCH-CENTER cards, ≥ 3 at launch |
| Expert Finder | `/research/expert-finder` | SHOULD | Search by name/faculty/keyword, CT-PERSON cards |
| Conferences | `/research/conferences` | SHOULD | Past + upcoming, downloadable proceedings |
| Library | `/research/library` | MUST | Physical + e-books + licensed databases |
| Research Policies | `/research/policies` | SHOULD | Policy PDFs, academic integrity standards |

**Highest priority sub-page is Publications** — this is the single highest-leverage action for Webometrics (KPI-09). Each publication needs its own HTML page with Google Scholar citation meta tags:

```html
<meta name="citation_title" content="...">
<meta name="citation_author" content="...">
<meta name="citation_publication_date" content="YYYY">
<meta name="citation_pdf_url" content="https://spu.edu.sy/...">
```

Add publication data to `research-content.js` and generate static pages via the shell generator.

---

### TASK-031 — Campus Life Landing Page + Sub-Pages
**Req:** FR-CL-LP, FR-LFE01–09 | **Priority:** P1/P2 | **Effort:** L | **Type:** FE

**Landing page** (`/campus-life`):
- Hero with real SPU campus photography (no stock for campus content)
- Sub-page card grid
- Student testimonial strip
- Counters: clubs count, sports teams, hospital departments

**MUST sub-pages (build first):**

| Page | URL | Key Content |
|---|---|---|
| Hospital | `/campus-life/hospital` | Departments, hours, appointment process, emergency contact. `lastReviewed` date. |
| Dental Clinic | `/campus-life/dental` | Services, hours, booking for students + public. `lastReviewed` date. |
| Student Clubs | `/campus-life/clubs` | Directory of ≥ 15 clubs: name, description, how to join |
| Health & Insurance | `/campus-life/health` | Insurance details, coverage, how to use |

**SHOULD sub-pages (build after launch blockers):**
- `/campus-life/career`
- `/campus-life/transport`
- `/campus-life/sports`
- `/campus-life/services`

---

### TASK-032 — E-Services Landing Page + Sub-Pages
**Req:** FR-ES-LP, FR-ES01–04 | **Priority:** P1 | **Effort:** M | **Type:** FE

**URL:** `/e-services`

Currently a nav item with no dedicated page at all.

**Landing page:** Icon-grid of all digital services, each linking to its sub-page or external service.

**Sub-pages:**

| Page | URL | Notes |
|---|---|---|
| Student Portal | `/e-services/student-portal` | Link to `my.spu.edu.sy` + step-by-step first-login guide |
| Appeals & Forms | `/e-services/appeals` | Online form for appeals/complaints/suggestions. Auto email confirmation. |
| Library Access | `/e-services/library` | Instructions for e-library + licensed databases |

---

### TASK-033 — News Landing Page Rebuild + Sub-Pages
**Req:** FR-NEWS-LP, FR-NEWS01–03, FR-EVT01, FR-MEDIA01, FR-PRESS01 | **Priority:** P2 | **Effort:** L | **Type:** FE

**Landing page** (`/news`):
- Tabbed or sectioned layout: Latest News, Announcements, Upcoming Events
- Featured news card (hero size, CMS-selectable)
- Events calendar highlight strip

**Sub-pages:**

| Page | URL | Priority |
|---|---|---|
| News Listing | `/news/articles` | MUST — card grid, pagination, category filter |
| News Article | `/news/articles/{slug}` | MUST — full article page per item |
| Announcements | `/news/announcements` | MUST — official announcements with download |
| Events Calendar | `/news/events` | MUST — monthly + list view, iCal export |
| Media Gallery | `/news/gallery` | REC — lazy-loaded photography |
| Press Room | `/news/press-room` | SHOULD — press releases, spokesperson directory, brand kit |

**For article pages**, the generator needs to create individual HTML pages per news item. Add a `slug` field to each item in `newsItems` (home-content.js) and generate static article pages.

---

### TASK-034 — Contact Landing Page Rebuild
**Req:** FR-CON-LP, FR-CON01 | **Priority:** P1 | **Effort:** M | **Type:** FE + BE

**URL:** `/contact`

Current page has channels + offices + visit sections. Needs:
- A proper **contact form** with server-side validation (currently there is no form at all)
  - Fields: name, email, subject, message
  - On submit: email to configured address + admin dashboard entry
- **Campus map** sub-page at `/contact/map`
  - Interactive embedded map (Google Maps iframe or Leaflet)
  - Pinned locations: buildings, hospital, dental, library, sports, parking, main gate
  - Search within map for building name

---

## Phase 3 — SEO, Meta & Structured Data

---

### TASK-040 — Fix Canonical URLs + hreflang Tags
**Req:** NFR-SEO-04 | **Priority:** P1 | **Effort:** S | **Type:** SEO

**Update `scripts/generate-page-shells.js`** to add `<link rel="alternate">` hreflang tags to every page shell:

```html
<link rel="alternate" hreflang="ar" href="https://spu.edu.sy/ar{page.canonicalPath}">
<link rel="alternate" hreflang="en" href="https://spu.edu.sy{page.canonicalPath}">
<link rel="alternate" hreflang="x-default" href="https://spu.edu.sy{page.canonicalPath}">
```

Also ensure canonical tags use clean URLs (no `.html`).

---

### TASK-041 — JSON-LD Structured Data
**Req:** NFR-SEO-02 | **Priority:** P2 | **Effort:** M | **Type:** SEO

Add JSON-LD to the shell generator per content type:

```js
// Homepage
{ "@type": "EducationalOrganization", "name": "Syrian Private University", ... }

// News articles
{ "@type": "NewsArticle", "headline": "...", "datePublished": "...", ... }

// Events
{ "@type": "Event", "name": "...", "startDate": "...", ... }

// Researcher profiles
{ "@type": "ProfilePage", "mainEntity": { "@type": "Person", "name": "...", ... } }

// Programs
{ "@type": "Course", "name": "...", "provider": { ... }, ... }
```

Add a `schemaType` field to `site-pages.json` entries, and generate the correct JSON-LD block in the shell generator.

---

### TASK-042 — Research Citation Meta Tags
**Req:** NFR-SEO-06, FR-RES01 | **Priority:** P1 | **Effort:** S | **Type:** SEO

For every publication page, inject into `<head>`:

```html
<meta name="citation_title" content="...">
<meta name="citation_author" content="...">
<meta name="citation_publication_date" content="YYYY">
<meta name="citation_pdf_url" content="https://...">
<meta name="citation_doi" content="...">
<meta name="citation_keywords" content="...">
```

Extend the shell generator to handle `schemaType: "publication"` pages with these tags.

---

### TASK-043 — Image SEO
**Req:** NFR-SEO-08 | **Priority:** P1 | **Effort:** S | **Type:** SEO

Audit all Alpine `x-bind:alt` expressions. Ensure every `<img>` has:
- Meaningful `alt` text (not empty, not filename)
- Descriptive filename in `public/images/` (rename generic files like `slider-1.jpeg` → `spu-campus-main-building.jpg`)
- Lazy loading (`loading="lazy"`) on all images not in the above-fold hero

**Exception:** Hero/LCP images must NOT be lazy-loaded. Add `<link rel="preload">` for the hero image.

---

### TASK-044 — Sitemap + robots.txt Update
**Req:** NFR-SEO-03 | **Priority:** P1 | **Effort:** S | **Type:** SEO

The current `writeSitemap()` in the generator works but needs:
- Clean URLs (no `.html`)
- `<lastmod>` dates per page
- `<priority>` weights (homepage = 1.0, section landings = 0.8, sub-pages = 0.6)
- `<changefreq>` values
- An image sitemap for the media library

Also ensure `robots.txt` explicitly **disallows** `/admin/`, `/api/`, `/_vite/` and **allows** everything else.

---

## Phase 4 — Accessibility

---

### TASK-050 — Semantic HTML Audit
**Req:** NFR-ACC-02 | **Priority:** P1 | **Effort:** M | **Type:** A11Y

Go through every fragment in `public/components/` and verify:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>` used correctly
- `<nav>` has `aria-label` (e.g., "Primary navigation", "Breadcrumb")
- Dropdowns use `role="menu"` + `role="menuitem"` with `aria-expanded` on the trigger
- Carousel/slider has `aria-label`, `aria-roledescription="carousel"`, `aria-live`
- Modal/dialog uses `role="dialog"` + `aria-modal="true"` + focus trap
- Stat counters use `aria-label` with the full value (not just the animated number)

---

### TASK-051 — Colour Contrast Audit
**Req:** NFR-ACC-03 | **Priority:** P1 | **Effort:** S | **Type:** A11Y

Run automated contrast check. Known issues to fix:
- `text-white/60`, `text-white/55`, `text-white/50` classes used on dark backgrounds — many will fail the 4.5:1 ratio for small text
- `text-slate-400` on white backgrounds
- Hero eyebrow text at `text-white/60`

**Fix:** Increase opacity values to meet minimum contrast, or switch to a higher-contrast colour.

---

### TASK-052 — Reduced Motion
**Req:** NFR-ACC-06 | **Priority:** P1 | **Effort:** S | **Type:** A11Y

Update `src/styles/reveal.css` and all animation CSS:

```css
@media (prefers-reduced-motion: reduce) {
  .reveal, .reveal-visible, .reveal-item {
    opacity: 1 !important;
    transition: none !important;
  }
  /* Disable hero slider auto-rotate */
  /* Show final counter value immediately */
}
```

Update `src/utils/animate-counter.js` to check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` and skip animation if true.

Update `honor-panel.html` auto-rotation — if `prefers-reduced-motion` is active, disable the `setInterval`.

---

### TASK-053 — Focus Management & Keyboard Nav
**Req:** NFR-ACC-01 | **Priority:** P1 | **Effort:** M | **Type:** A11Y

- All interactive elements reachable by Tab
- Focus ring visible (add `focus-visible:ring-2 focus-visible:ring-spu-blue` to all buttons/links)
- Dropdown menus: trap focus when open, Escape closes and returns focus to trigger
- Mobile nav: when open, focus trapped inside the panel
- Calendar: arrow keys navigate between dates
- Honor panel slider: keyboard controls (left/right arrow keys)

---

### TASK-054 — Accessibility Issue Report Route
**Req:** NFR-ACC-07 | **Priority:** P1 | **Effort:** S | **Type:** A11Y + BE

Add to the global footer:
```html
<a href="/e-services/appeals?category=accessibility">
  Report an accessibility issue
</a>
```

The appeals form (TASK-032) should accept a `category` URL parameter to pre-fill the subject field.

---

## Phase 5 — Performance

---

### TASK-060 — Hero LCP Image Preload
**Req:** NFR-PERF-03 | **Priority:** P1 | **Effort:** S | **Type:** FE

The current hero uses Alpine `x-for` to cycle through images. The first image must be preloaded:

```html
<!-- In page shell <head> for homepage -->
<link rel="preload" as="image" href="/images/spu-campus-hero.jpg">
```

Consider making the first hero image a static `<img>` (not Alpine-rendered) to ensure it is in the initial HTML response, not added by JavaScript.

---

### TASK-061 — Lazy Loading Audit
**Req:** NFR-PERF-04 | **Priority:** P2 | **Effort:** S | **Type:** FE

- Add `loading="lazy"` to all `<img>` tags not in the above-fold viewport
- Add `decoding="async"` to all images
- Ensure images in Alpine `<template x-for>` use `:loading="index > 2 ? 'lazy' : 'eager'"`

---

### TASK-062 — Content Visibility
**Req:** NFR-PERF-02 | **Priority:** P2 | **Effort:** S | **Type:** FE

Add `content-visibility: auto` to long-scroll page sections (currently only the research section has it). Apply to all section components that are likely off-screen on load.

---

## Phase 6 — Search

---

### TASK-080 — Site Search
**Req:** FR-SRCH01, FR-SRCH02 | **Priority:** P2 | **Effort:** XL | **Type:** FE + BE

**The requirements mandate global search with live suggestions.** For a static Vite build, the practical options are:

| Option | Approach |
|---|---|
| A — Client-side (Fuse.js) | Pre-build a search index JSON from all `site-pages.json` + content files. Ship it with the bundle. |
| B — External service | Algolia DocSearch, Typesense, or Meilisearch |
| C — Server-side endpoint | PHP/Node search API (requires backend) |

**Recommend Option A for now** (pure frontend, no backend dependency):

1. Add a build script `scripts/generate-search-index.js` that reads all content files and outputs `/public/search-index.json`
2. Install Fuse.js: `npm install fuse.js`
3. Build search UI: expandable search bar in header, live suggestions after 2 chars, results page at `/search?q=`
4. Keyboard shortcut: `Ctrl+K` / `Cmd+K` opens search

**Search index structure:**
```json
[
  { "title": "Faculty of Medicine", "url": "/facilities/medicine", "type": "facility", "body": "..." },
  { "title": "Admission Requirements", "url": "/admissions/requirements", "type": "page", "body": "..." },
  { "title": "ICPC Orientation", "url": "/news/articles/icpc-2026", "type": "news", "body": "...", "date": "..." }
]
```

---

## Phase 7 — Content & Governance

---

### TASK-090 — Populate Missing Content in Stores
**Req:** GOV-04 (no placeholder policy) | **Priority:** P1 | **Effort:** L | **Type:** GOV

Every page must have real content in AR + EN at launch. Current stub content in stores that needs proper copy:

- `about-content.js` → directorates section (missing entirely)
- `about-content.js` → partnerships section (missing entirely)
- `facilities-catalog.js` → dean messages, council members, department lists, study plan details
- `campus-life-content.js` → hospital details, dental clinic details, club directory
- `research-content.js` → publication list with DOIs, research center details

**Governance rule (GOV-04):** "Under preparation" or empty tables are not permitted on live public pages.

---

### TASK-091 — Add `slug` Field to All Content Items
**Req:** FR-NEWS02 (article pages), FR-FAC-* (facility sub-pages) | **Priority:** P1 | **Effort:** S | **Type:** ARCH

Every content item that will have its own URL (news articles, publications, facility pages, events) needs a URL-safe `slug` field:

```js
// In newsItems
{ id: 1, slug: 'university-digital-expansion-2026', titleEn: '...', ... }

// In researchItems  
{ id: 1, slug: 'clinical-simulation-2026', titleEn: '...', ... }
```

The shell generator reads these slugs to create individual HTML pages.

---

### TASK-092 — Privacy Policy + Cookie Policy Pages
**Req:** NFR-SEC-10 | **Priority:** P1 | **Effort:** S | **Type:** GOV

Create stub pages at:
- `/privacy` — Privacy Policy (AR + EN)
- `/cookie-policy` — Cookie Policy (AR + EN)

Add to `site-pages.json`. Add links in footer. These pages must exist at launch even if the legal copy is minimal.

---

### TASK-093 — Custom 404 + 500 Pages
**Req:** NFR-USE-02 | **Priority:** P1 | **Effort:** S | **Type:** FE

Create:
- `public/404.html` — branded SPU design, bilingual message, homepage link, no stack trace
- `public/500.html` — same pattern

Configure in `vite.config.js` and server configuration.

---

## Phase 8 — Migration & Redirects

---

### TASK-100 — 301 Redirect Map
**Req:** MIG-02, MIG-03 | **Priority:** P1 | **Effort:** M | **Type:** ARCH

Create `public/_redirects` (Netlify format) or `nginx.conf` redirect rules for:

```
/faculties.html         → /facilities
/faculties              → /facilities
/student-life.html      → /campus-life
/student-life           → /campus-life
/about.html             → /about
/admissions.html        → /admissions
/research.html          → /research
/news.html              → /news
/contact.html           → /contact
/faculties.html#faculty-1 → /facilities/medicine
/faculties.html#faculty-2 → /facilities/dentistry
/faculties.html#faculty-3 → /facilities/pharmacy
/faculties.html#faculty-4 → /facilities/ai-engineering
/faculties.html#faculty-5 → /facilities/construction-engineering
/faculties.html#faculty-7 → /facilities/business-administration
```

All must be HTTP 301, not 302.

---

### TASK-101 — Legacy Parameter URL Cleanup
**Req:** MIG-04 | **Priority:** P1 | **Effort:** S | **Type:** ARCH

Any legacy `?page=show&cat_id=` URLs from the old SPU site must be mapped in the redirect configuration. Crawl the old site with Screaming Frog before launch to extract the full list.

---

## Phase 9 — Admin & Backend (Post-Launch or Parallel Track)

These are backend requirements. If the current build is purely frontend/static, these need a separate Laravel/PHP backend sprint.

---

### TASK-110 — CMS Admin Dashboard
**Req:** Section 16 (FR-CMS01–10) | **Priority:** P2 | **Effort:** XL | **Type:** BE

Key requirements:
- Bilingual WYSIWYG page builder (FR-CMS01)
- Per-page SEO metadata editing (FR-CMS02)
- Draft + Published states (FR-CMS03)
- Scheduled publishing (FR-CMS04)
- Role-based access: Super Admin, Editor, Faculty Editor (FR-CMS09)
- MFA on all admin accounts (NFR-SEC-09)
- Full audit trail (NFR-SEC-07)

---

### TASK-111 — Lead Capture Backend (CRM)
**Req:** FR-CRM-01, FR-CRM-02 | **Priority:** P1 | **Effort:** M | **Type:** BE

- `POST /api/leads` endpoint
- Auto-reply email to prospect
- Lead stored in database with UTM params
- Admin dashboard view: name, email, faculty interest, source, date, status
- CSV export

---

### TASK-112 — Contact + Appeals Form Backend
**Req:** FR-CON-LP, FR-ES02 | **Priority:** P1 | **Effort:** S | **Type:** BE

- `POST /api/contact` — email to configured address + admin notification
- `POST /api/appeals` — submission stored + email confirmation to submitter

---

## Summary Checklist by Priority

### P1 — Launch Blockers (must be done before go-live)

- [ ] TASK-000 — Clean URL strategy decision
- [ ] TASK-001 — Full page registry (site-pages.json)
- [ ] TASK-002 — Rename Faculties → Facilities
- [ ] TASK-003 — Rename Student Life → Campus Life
- [ ] TASK-010 — Rebuild navigation (v5.0 model)
- [ ] TASK-011 — Breadcrumb component
- [ ] TASK-012 — Coming Soon placeholder state
- [ ] TASK-013 — Emergency notice zone
- [ ] TASK-014 — Cookie consent banner
- [ ] TASK-015 — Fix footer (accessibility link, privacy, copyright)
- [ ] TASK-016 — "Last Reviewed" date component
- [ ] TASK-017 — Skip navigation link
- [ ] TASK-020 — About landing page
- [ ] TASK-021 — About sub-pages (History, Leadership, Directorates, Partnerships)
- [ ] TASK-022 — Admissions landing page rebuild
- [ ] TASK-023 — Admissions sub-pages (Tuition, How to Apply, Transfer, Calendar, Documents, FAQ)
- [ ] TASK-024 — CRM lead capture form
- [ ] TASK-025 — Facilities landing page
- [ ] TASK-026 — Facility hub pages (6 facilities)
- [ ] TASK-027 — Facility sub-pages (Overview, Departments, Study Plan, Calendar)
- [ ] TASK-028 — Alumni + Valedictorian pages
- [ ] TASK-031 — Campus Life landing page + MUST sub-pages (Hospital, Dental, Clubs, Health)
- [ ] TASK-032 — E-Services landing page + sub-pages
- [ ] TASK-034 — Contact form + campus map
- [ ] TASK-040 — Canonical URLs + hreflang tags
- [ ] TASK-042 — Research citation meta tags
- [ ] TASK-043 — Image SEO
- [ ] TASK-044 — Sitemap + robots.txt update
- [ ] TASK-050 — Semantic HTML audit
- [ ] TASK-051 — Colour contrast audit
- [ ] TASK-052 — Reduced motion
- [ ] TASK-053 — Focus management
- [ ] TASK-054 — Accessibility issue report route
- [ ] TASK-060 — Hero LCP image preload
- [ ] TASK-090 — Populate missing content in stores
- [ ] TASK-091 — Add slug fields to content items
- [ ] TASK-092 — Privacy + Cookie policy pages
- [ ] TASK-093 — Custom 404 + 500 pages
- [ ] TASK-100 — 301 redirect map
- [ ] TASK-101 — Legacy parameter URL cleanup
- [ ] TASK-111 — Lead capture backend
- [ ] TASK-112 — Contact + appeals form backend

### P2 — High Value (should ship within 2 weeks of launch)

- [ ] TASK-029 — Research landing page rebuild
- [ ] TASK-030 — Research sub-pages (Publications repository is highest priority)
- [ ] TASK-033 — News landing page rebuild + sub-pages
- [ ] TASK-041 — JSON-LD structured data
- [ ] TASK-061 — Lazy loading audit
- [ ] TASK-062 — Content visibility
- [ ] TASK-080 — Site search (Fuse.js)
- [ ] TASK-093 — Custom error pages
- [ ] TASK-110 — Admin CMS dashboard

### P3 — Post-Launch Enhancements

- [ ] Campus Life SHOULD sub-pages (Career, Transport, Sports)
- [ ] News Press Room
- [ ] News Media Gallery
- [ ] Expert Finder (researcher directory)
- [ ] Research Centers + Conferences pages
- [ ] Alumni portal + alumni stories CMS workflow
- [ ] Events iCal export
- [ ] FR/ES/DE language expansion (gate-controlled)
- [ ] Full WCAG 2.1 AA screen reader audit (NVDA + VoiceOver)
- [ ] Search analytics (KPI-04)
- [ ] Webometrics monitoring setup (KPI-16)

---

## Dependency Graph (Build Order)

```
TASK-000 (URL strategy)
  └── TASK-001 (page registry)
        ├── TASK-002 (rename Facilities)
        ├── TASK-003 (rename Campus Life)
        ├── TASK-012 (coming soon placeholder)  ← fill all new routes immediately
        ├── TASK-010 (navigation)               ← depends on correct URLs
        ├── TASK-011 (breadcrumbs)              ← depends on page registry parent fields
        ├── TASK-040 (canonical + hreflang)     ← depends on clean URLs
        └── TASK-044 (sitemap)                  ← depends on full page list

TASK-024 (CRM form)
  └── TASK-111 (lead backend)                   ← backend dependency

TASK-025 (Facilities landing)
  └── TASK-026 (facility hubs)
        └── TASK-027 (facility sub-pages)
              └── TASK-028 (alumni/valedictorians)

TASK-022 (Admissions landing)
  └── TASK-023 (admissions sub-pages)
        └── TASK-024 (CRM form on all pages)
```

---

## Quick Wins (Under 2 Hours Each)

These can be done in parallel while larger tasks are in progress:

1. Add `loading="lazy"` to all off-hero images across all components
2. Fix footer copyright year to use dynamic expression
3. Add `aria-label` to all `<nav>` elements
4. Add `focus-visible:ring-2` utility to all buttons
5. Add skip nav link to header
6. Create stub privacy policy page
7. Create stub cookie policy page
8. Add `lastReviewed` field to admissions store (even if date is approximate)
9. Add `slug` field to all news items
10. Rename image files from generic names to descriptive names
11. Add `meta name="robots"` tags to admin/api paths in robots.txt
12. Fix `text-white/60` opacity values that fail contrast ratio

---

*SPU Remediation Plan — Generated against v5.1 requirements — Branch: `refactore`*
