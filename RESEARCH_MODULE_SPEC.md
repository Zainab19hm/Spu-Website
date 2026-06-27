# Research Module Production Requirements — Refined Specification

**Project:** spu.edu.sy — Syrian Private University Website  
**Stack:** Laravel 12 / PHP 8.2 / MySQL 8 / Redis / Filament v3 / Tailwind CSS / Alpine.js  
**Branch context:** `admissions` (post `a3cf6d4`)  
**Date:** June 2026  
**Version:** 1.1 — Updated to include Scopus integration, Webometrics/SEO hardening, Researcher DTOs, and Open Access fields  
**Status:** Implementation-ready specification — do not build without reading Section 17 (Open Questions)

---

## Preamble: How This Document Was Produced

This spec was produced by cross-referencing:

1. **SPU_Requirements_v5.0** (uploaded) — the approved requirements document, April 2026.
2. **The full project prompt** describing the current implementation state, architecture rules, and hardening patterns already applied to News and Facilities.
3. **Inferred codebase state** based on the described file tree, migration history, and service patterns.

Where the two source documents conflict or where the v5.0 requirements are too vague for implementation, this document flags the conflict and proposes the updated production requirement. Old requirements are not silently dropped — they are explicitly superseded or deferred.

---

## 1. Current State Summary

### 1.1 Implemented

Based on the described codebase state:

- **No Research-specific models, migrations, controllers, services, or Filament resources exist yet.** The Research module has not been started.
- The global public layout (header, footer, nav, breadcrumbs) is implemented and shared across all public sections — Research pages will inherit it.
- The News module is fully implemented with production hardening (`NewsAdminWorkflowService`, audit logs, cache invalidation, role scoping). The Research module must match this pattern exactly.
- The Facilities module is fully implemented with production hardening (`FacultyAdminWorkflowService`). Research sub-pages at `/facilities/{faculty}/research` and `/facilities/{faculty}/projects` are referenced in the v5.0 URL pattern but **not yet implemented**.
- The cache service infrastructure (tagged cache, `public-pages`, `seo`, `sitemap` tags) is implemented and available.
- The SEO/sitemap service is implemented.
- The media library (Filament + Spatie Media Library) is implemented.
- The audit log infrastructure is implemented.
- The `faculty_scope_slug` ownership model is implemented.
- The `FacultyDomainPolicy` and role guards (`super_admin`, `editor`, `faculty_editor`) are implemented.
- Architecture guards (`ArchitectureGuardTest`) are active and will enforce no raw model returns from services, no direct controller queries, and no new polymorphic translation tables.

### 1.2 Partially Implemented

- **Facilities sub-page `/facilities/{faculty}/research`** — the URL pattern is listed in v5.0 Section 6 but the page itself is not implemented. This is a faculty-scoped research highlights page, distinct from the standalone `/research` section. It is in scope but treated as a Phase 2 item here.
- **CT-PUBLICATION** — defined in v5.0 Section 18 as a content type with fields (Title, Authors, Journal, Year, DOI, PDF, Abstract, Keywords, Faculty, GS indexed, Citation meta tags) but has no backing model or migration yet.
- **CT-RESEARCH-CENTER** — defined in v5.0 Section 18 but not implemented.
- **CT-PERSON** — partially implemented via existing faculty/staff profile patterns (described in `FacultyHighlight` etc.), but a dedicated researcher profile entity with ORCID/Scopus/Google Scholar fields does not yet exist as a standalone model.
- **Homepage block 06** — "News & Research" block that shows 3 research cards is referenced in v5.0 but the research card data source is not yet wired.

### 1.3 Missing (Full Research Module Gap)

Everything in the following list is missing and must be built:

- `research_publications` table + translations
- `research_projects` table + translations (standalone, distinct from `faculty_student_projects`)
- `research_themes` table + translations (maps to v5.0 "Research Priorities")
- `research_centers` table + translations
- `research_publication_authors` pivot
- `research_publication_files` (PDF/DOI attachments)
- `ResearchPublication`, `ResearchProject`, `ResearchTheme`, `ResearchCenter` Eloquent models
- All DTOs under `app/DTOs/Research/`
- All contracts under `app/Contracts/Research/`
- `ResearchPublicService` + `ResearchAdminWorkflowService`
- Filament resources: `ResearchPublicationResource`, `ResearchProjectResource`, `ResearchThemeResource`, `ResearchCenterResource`
- Public routes and controllers for `/research`, `/research/publications`, `/research/publications/{slug}`, etc.
- Blade views for all Research public pages
- Cache tags `research`, `research-publications`, `research-projects`, `research-centers`
- Sitemap inclusion for Research URLs
- SEO meta + citation meta tags on publication detail pages
- ArchitectureGuard test coverage for Research service interfaces

### 1.4 Unclear / Needs Decision

The following items appear in v5.0 but require explicit decisions before implementation. They are listed here and in Section 17:

- **FR-RES02: `repository.spu.edu.sy` subdomain** — v5.0 calls for a separate subdomain for the institutional repository. This conflicts with the current monolithic Laravel application model. Needs user decision: subdomain or path-based (`/research/publications`)?
- **FR-RES04: Expert Finder / FR-RES-PRF01/02: Researcher Profiles** — now in scope. Decision made: use a new `researchers` table (not the existing `FacultyHighlight` model). See Sections 4, 5, 6, 7 for full spec.
- **`faculty_editor` publish rights** — for News, `faculty_editor` cannot publish. Should the same rule apply to Research publications? Needs explicit decision.
- **Research Centers vs Facilities Labs** — v5.0 lists `CT-LAB` (Facilities) and `CT-RESEARCH-CENTER` (Research) as separate types. Are they the same entity, linked, or independent?

---

## 2. Updated Scope

### 2.1 In Scope — Phase 1 (This Spec)

| # | Feature | Basis |
|---|---------|-------|
| 1 | Research landing page (`/research`) | FR-RES-LP, v5.0 §7.1 |
| 2 | Publications listing page (`/research/publications`) | FR-RES01, v5.0 §7.2 |
| 3 | Publication detail page (`/research/publications/{slug}`) | FR-RES01, NFR-SEO-06 |
| 4 | Research Projects listing page (`/research/projects`) | Derived from Facilities pattern + v5.0 URL pattern |
| 5 | Research Project detail page (`/research/projects/{slug}`) | Derived |
| 6 | Research Themes/Priorities pages (`/research/themes`, `/research/themes/{slug}`) | FR-RES-LP highlight strip, v5.0 dropdown |
| 7 | Research Centers listing page (`/research/centers`) | FR-RES03 |
| 8 | Research Center detail page (`/research/centers/{slug}`) | FR-RES03 |
| 9 | Static/CMS-managed sub-pages: Research Office, Conferences, Library, Policies | FR-RES05, FR-RES07, FR-RES08 |
| 10 | Admin CMS resources for all entities above | FR-CMS01–09, News/Facilities hardening pattern |
| 11 | `ResearchAdminWorkflowService` with audit + cache + role enforcement | News hardening pattern |
| 12 | Draft/scheduled/published workflow with status enforcement | FR-CMS03, FR-CMS04 |
| 13 | Bilingual AR/EN content on all entities | NFR-I18N-01 |
| 14 | Citation meta tags on publication detail pages | NFR-SEO-06 |
| 15 | SEO metadata per locale on all Research pages | NFR-SEO-01–05 |
| 16 | Sitemap inclusion for all published Research URLs | NFR-SEO-03 |
| 17 | Cache invalidation on all Research writes | NFR-PERF-05 |
| 18 | `faculty_editor` scoping for publications/projects by faculty | FR-CMS09 |
| 19 | Audit logs for all Research admin operations | NFR-SEC-07 |
| 20 | Homepage block 06 research cards data source (3 latest publications) | HP block 06 |
| 21 | Facilities sub-page `/facilities/{faculty}/research` (faculty research highlights) | v5.0 §6 URL pattern |
| 22 | Researcher profiles (`/research/researchers`, `/research/researchers/{slug}`) | FR-RES-PRF01/02, v5.0 §7.3 |
| 23 | Expert Finder (`/research/expert-finder`) — searchable directory with expertise tags | FR-RES04, v5.0 §7.2 |

### 2.2 Explicitly Out of Scope — This Phase

| Feature | Reason |
|---------|--------|
| `repository.spu.edu.sy` subdomain | Architecture decision pending (see §17). Path-based (`/research/publications`) used for now. |
| Google Scholar indexing verification (90-day KPI) | Operational, not implementation. Citation meta tags (in scope) are the prerequisite. |
| Conferences detail pages / RSVP | Deferred to Phase 3 (links to CT-EVENT which is not yet built). |
| FR/ES/DE language expansion | Gate-controlled per NFR-I18N-05. Out of scope permanently until gate is met. |
| Full-text Meilisearch indexing | DB search is sufficient for Phase 1. Meilisearch integration deferred. |
| DOI import from external databases (CrossRef API) | Needs user decision. Deferred to Phase 3. |

---

## 3. Public UX Requirements

### 3.1 Route Map

All routes are under the locale prefix. Default locale is `ar`. Secondary is `en`.

```
/{locale}/research                                    → research.index
/{locale}/research/publications                       → research.publications.index
/{locale}/research/publications/{publication:slug}    → research.publications.show
/{locale}/research/projects                           → research.projects.index
/{locale}/research/projects/{project:slug}            → research.projects.show
/{locale}/research/themes                             → research.themes.index
/{locale}/research/themes/{theme:slug}                → research.themes.show
/{locale}/research/centers                            → research.centers.index
/{locale}/research/centers/{center:slug}              → research.centers.show
/{locale}/research/researchers                        → research.researchers.index
/{locale}/research/researchers/{researcher:slug}      → research.researchers.show
/{locale}/research/expert-finder                      → research.expert-finder (alias/redirect to researchers.index with search UI)
/{locale}/research/office                             → research.office (static CMS page)
/{locale}/research/conferences                        → research.conferences (static CMS page)
/{locale}/research/library                            → research.library (static CMS page)
/{locale}/research/policies                           → research.policies (static CMS page)
```

Facilities-scoped research sub-page (handled by existing `FacultyController`, new page slug):
```
/{locale}/facilities/{faculty}/research               → faculties.research (new page slug)
```

### 3.2 Route-by-Route Specification

---

#### Route: `/{locale}/research`

| Field | Value |
|-------|-------|
| **Route name** | `research.index` |
| **Purpose** | Research section landing page. Full content page, not a redirect. |
| **Required data** | Hero content (CMS), highlight stats strip (publication count, active centers count, GS status — CMS-editable), featured publication (latest published), grid of 6 most recent publications (cards), grid of up to 4 research themes (cards), grid of up to 3 research centers (cards), card grid linking to all Research sub-pages. |
| **Empty states** | Stats strip shows "—" if no publications yet. Featured publication card hidden if none published. Sub-page cards always visible regardless of content state. |
| **SEO** | Per-locale title/meta from CMS. Canonical: `/{locale}/research`. JSON-LD `Organization` + `Dataset` for the research section. |
| **Cache** | Tagged `public-pages`, `research`, `seo`. Locale-aware key. Bypass for authenticated users. Invalidated on: any publication publish/unpublish, any center/theme publish/unpublish, CMS hero content update. |
| **Access** | Public, no auth. |
| **hreflang** | `x-default` → `/ar/research`, `ar` → `/ar/research`, `en` → `/en/research`. |

---

#### Route: `/{locale}/research/publications`

| Field | Value |
|-------|-------|
| **Route name** | `research.publications.index` |
| **Purpose** | Browsable, filterable repository of all published research publications. |
| **Required data** | Paginated list of publications (15 per page). Each card: title (locale), authors (names), year, publication type, journal/conference name, faculty affiliation, thumbnail/placeholder, abstract excerpt, "Read more" link to detail page, PDF download link if available. Filter sidebar/bar: year (multi-select), publication type (dropdown), theme (dropdown), faculty (dropdown), free-text search (DB `LIKE`, locale-aware). Sort: newest first (default), oldest first, alphabetical by title. |
| **Empty states** | When filters return nothing: "No publications found matching your filters" message in current locale, with "Clear filters" CTA. When no publications exist at all: "No publications have been added yet" in current locale — no 404. |
| **SEO** | Per-locale title/meta from CMS. Canonical: `/{locale}/research/publications` (filters do not produce separate canonicals — filter parameters are `noindex` via `<meta name="robots" content="noindex, follow">` when active). |
| **Cache** | Tagged `public-pages`, `research`, `research-publications`. Locale-aware. No filter-specific cache — filters are served dynamically. The base unfiltered first page is cached. |
| **Access** | Public. |
| **Pagination** | Standard Laravel paginator, locale-aware URLs. |
| **hreflang** | Standard AR/EN pair. |

---

#### Route: `/{locale}/research/publications/{publication:slug}`

| Field | Value |
|-------|-------|
| **Route name** | `research.publications.show` |
| **Purpose** | Full detail page for a single publication. Primary SEO target for Google Scholar indexing. |
| **Required data** | Full title (locale), all authors with names linked to their profile pages if they exist, abstract (locale, full text — no login gate), journal/conference name + volume/issue/pages if applicable, year, DOI (linked if present), publication type, faculty affiliation, themes (linked), keywords, PDF download button (if hosted media), external DOI link (if no hosted PDF), related publications (up to 3, same faculty or theme). |
| **Citation meta tags** | In `<head>`: `citation_title`, `citation_author` (one per author), `citation_publication_date`, `citation_pdf_url` (if PDF hosted), `citation_doi` (if DOI present), `citation_journal_title`, `citation_volume`, `citation_issue`, `citation_firstpage`, `citation_lastpage`, `citation_keywords`, `citation_abstract_html_url` (canonical URL of this page), `citation_language` (`ar` or `en`). These are the Google Scholar High-Density Citation fields from NFR-SEO-06. |
| **JSON-LD** | `ScholarlyArticle` or `Article` structured data with `author` (array of `Person`), `datePublished`, `publisher` (SPU Organization), `description` (abstract), `identifier` (DOI), `url` (canonical). |
| **Empty/404 states** | Non-existent slug → 404. Draft/scheduled publication → 404 to public (never expose). |
| **SEO** | Title: `{publication title} — SPU Research`. Unique per publication. `robots: index, follow`. |
| **Cache** | Tagged `public-pages`, `research`, `research-publications`, `research-publication-{id}`. Invalidated on: publish, unpublish, update, delete, media change. |
| **Access** | Public. Draft/scheduled never accessible publicly. |
| **hreflang** | AR slug ↔ EN slug. Both slugs must exist if both locales have content. If only Arabic content exists, `en` hreflang points to `/{en}/research/publications` (listing) rather than the unpublished EN detail page. |

---

#### Route: `/{locale}/research/projects`

| Field | Value |
|-------|-------|
| **Route name** | `research.projects.index` |
| **Purpose** | Listing of all published standalone research projects (university-level, not faculty-student projects). |
| **Required data** | Paginated cards (12 per page). Each card: title (locale), lead researcher/PI name, faculty affiliation, theme(s), status (ongoing/completed), year started, thumbnail image or placeholder, short description excerpt, "View project" link. Filters: status (ongoing/completed), faculty, theme, year. Sort: newest first (default). |
| **Empty states** | Same pattern as publications listing. |
| **SEO** | Per-locale title/meta from CMS. Canonical: `/{locale}/research/projects`. |
| **Cache** | Tagged `public-pages`, `research`, `research-projects`. Locale-aware. |
| **Access** | Public. |

---

#### Route: `/{locale}/research/projects/{project:slug}`

| Field | Value |
|-------|-------|
| **Route name** | `research.projects.show` |
| **Purpose** | Full detail page for a single research project. |
| **Required data** | Title (locale), description/overview (locale, rich text), principal investigator(s), collaborators (internal/external), faculty affiliation, themes, status, start/end dates, funding source (if CMS-provided), associated publications (linked cards), associated research center (if applicable), downloadable files (reports, datasets — via media library), external project URL (if applicable). |
| **SEO** | Per-locale title/meta from CMS. JSON-LD `ResearchProject` (schema.org). |
| **Cache** | Tagged `public-pages`, `research`, `research-projects`, `research-project-{id}`. |
| **Access** | Public. Draft/scheduled never exposed. |

---

#### Route: `/{locale}/research/themes`

| Field | Value |
|-------|-------|
| **Route name** | `research.themes.index` |
| **Purpose** | Overview of all SPU research priority themes/areas. |
| **Required data** | All published themes as cards: name (locale), short description (locale), icon/image, publication count, "Explore" link. |
| **SEO** | Per-locale. Canonical: `/{locale}/research/themes`. |
| **Cache** | Tagged `public-pages`, `research`, `research-themes`. |

---

#### Route: `/{locale}/research/themes/{theme:slug}`

| Field | Value |
|-------|-------|
| **Route name** | `research.themes.show` |
| **Purpose** | Landing page for a specific research priority theme, showing all associated publications and projects. |
| **Required data** | Theme name (locale), full description (locale, rich text), hero image, list of all published publications tagged with this theme (paginated, same cards as publications listing), list of all published projects tagged with this theme. |
| **SEO** | Per-locale. JSON-LD breadcrumbs. |
| **Cache** | Tagged `public-pages`, `research`, `research-themes`, `research-theme-{id}`. Invalidated when publications/projects tagged to this theme are published/unpublished. |

---

#### Route: `/{locale}/research/centers`

| Field | Value |
|-------|-------|
| **Route name** | `research.centers.index` |
| **Purpose** | Grid of all published research centers. |
| **Required data** | All published centers as cards: name (locale), mission excerpt (locale), director name, affiliated faculty, publication count, project count, "Learn more" link. |
| **SEO** | Per-locale. Canonical: `/{locale}/research/centers`. |
| **Cache** | Tagged `public-pages`, `research`, `research-centers`. |

---

#### Route: `/{locale}/research/centers/{center:slug}`

| Field | Value |
|-------|-------|
| **Route name** | `research.centers.show` |
| **Purpose** | Full profile page for a research center. Maps to CT-RESEARCH-CENTER from v5.0. |
| **Required data** | Center name (locale), mission statement (locale, rich text), director (CT-PERSON card: name, photo, title), affiliated faculty list (names + links to their profiles if they exist), gallery images (media library), associated publications (paginated), associated projects (paginated), contact information, external website link (if applicable). |
| **SEO** | Per-locale. JSON-LD `Organization` (sub-org of SPU). |
| **Cache** | Tagged `public-pages`, `research`, `research-centers`, `research-center-{id}`. |

---

#### Route: `/{locale}/research/researchers`

| Field | Value |
|-------|-------|
| **Route name** | `research.researchers.index` |
| **Purpose** | Browsable, searchable directory of all published SPU researcher profiles. This is also the destination for the nav item "Expert Finder" from v5.0 §1.3. |
| **Required data** | Paginated list of researchers (20 per page). Each card: photo (or initials placeholder), full name (locale), title, department, faculty, expertise tags (up to 5 shown), research interests excerpt, ORCID link (if set), Google Scholar link (if set), "View profile" link. Filter bar: free-text search (name, expertise, department), faculty dropdown, expertise tag filter, department filter. Sort: alphabetical by name (default), by faculty. |
| **Empty states** | When filters return nothing: "No researchers found matching your criteria" with "Clear filters" CTA. When no researchers exist: "Researcher profiles are being added" — no 404. |
| **SEO** | Per-locale title/meta from CMS. Canonical: `/{locale}/research/researchers`. `robots: index, follow` on unfiltered page; `noindex, follow` when filters active. |
| **Cache** | Tagged `public-pages`, `research`, `research-researchers`. Locale-aware. Unfiltered first page is cached. |
| **Access** | Public, no auth. |
| **hreflang** | Standard AR/EN pair. |
| **Note on `/research/expert-finder`** | The v5.0 nav dropdown lists "Expert Finder" as a sub-page. This route is implemented as a permanent `301` redirect from `/{locale}/research/expert-finder` to `/{locale}/research/researchers`. This preserves the v5.0 nav label while using a cleaner canonical URL structure. |

---

#### Route: `/{locale}/research/researchers/{researcher:slug}`

| Field | Value |
|-------|-------|
| **Route name** | `research.researchers.show` |
| **Purpose** | Full researcher profile page. Maps to CT-PERSON from v5.0. |
| **Required data** | Full name AR + EN, photo, title, department, faculty affiliation, bio/research interests (locale, rich text), ORCID iD (linked to `https://orcid.org/{orcid_id}`), Google Scholar URL (linked), Scopus Author Profile (linked to `https://www.scopus.com/authid/detail.uri?authorId={scopus_id}` — shown only if `scopus_id` is set), expertise tags (all, each linking to a filtered researchers listing), email (optional, configurable visibility), office hours (optional), list of publications where this researcher is an author (linked cards, paginated), list of research projects where this researcher is an investigator (linked cards). |
| **SEO** | Per-locale. `meta_title` = `{name} — SPU Researcher Profile`. JSON-LD `ProfilePage` wrapping `Person` with `affiliation` = SPU Organization, `identifier` = ORCID if set, `sameAs` = array of: ORCID URL (if set) + Google Scholar URL (if set) + Scopus Author Profile URL (if `scopus_id` set). The `sameAs` array signals to crawlers that this page refers to the same person on external academic identity systems. |
| **Cache** | Tagged `public-pages`, `research`, `research-researchers`, `research-researcher-{id}`. Invalidated on: profile update, new publication linked, publish/unpublish. |
| **Access** | Public. Draft profiles never exposed. |
| **hreflang** | AR slug ↔ EN slug. |
| **Note on author linking** | When a publication detail page lists an author, if that author has `researcher_id` set, the author name links to this profile page. If `researcher_id` is null (external author), no link. |

---

#### Static/CMS-managed Research sub-pages

These four pages share a common pattern: they are CMS-managed rich-text pages with no dynamic entity listing. They follow the same pattern as static Facilities sub-pages.

| Route | Route Name | Purpose |
|-------|-----------|---------|
| `/{locale}/research/office` | `research.office` | Research Office description, staff, mandate |
| `/{locale}/research/conferences` | `research.conferences` | Past/upcoming SPU-hosted conferences, downloadable proceedings |
| `/{locale}/research/library` | `research.library` | Physical library + e-databases + borrowing rules |
| `/{locale}/research/policies` | `research.policies` | Research ethics, publication guidelines, academic integrity PDFs |

Each of these: CMS-editable rich-text body (AR + EN independent), hero, downloadable documents section (via media library), per-locale SEO meta, cached `public-pages` + `research`, locale-aware cache keys. Draft → never public.

---

#### Route: `/{locale}/facilities/{faculty}/research`

| Field | Value |
|-------|-------|
| **Route name** | `faculties.research` (new page slug: `faculty-research`) |
| **Handled by** | Existing `FacultyController` / `FacultyPageService` (new page type added) |
| **Purpose** | Faculty-scoped research highlights page. Shows publications, projects, and labs belonging to this specific faculty. NOT the same as the standalone `/research` section — this is a curated highlights sub-page within the faculty hub. |
| **Required data** | Faculty publications (latest 6, cards linking to `/research/publications/{slug}`), faculty projects (latest 4), faculty research labs (existing `FacultyLab` model), optional "See all publications" CTA linking to `/research/publications?faculty={slug}`. |
| **Implementation note** | This is a new FacultyPage type, not a new controller. Add page slug `faculty-research` to `FacultyModuleSeeder` and `FacultyPageService`. The research data is fetched from the Research service layer, not from the Faculty service. |

---

## 4. Data Model Requirements

### 4.1 `research_themes` table

```
id                    BIGINT UNSIGNED PK AI
slug                  VARCHAR(255) UNIQUE NOT NULL
icon                  VARCHAR(255) NULLABLE  -- media library disk path or icon name
sort_order            SMALLINT UNSIGNED DEFAULT 0
status                ENUM('draft','published') DEFAULT 'draft'
published_at          TIMESTAMP NULLABLE
created_at, updated_at TIMESTAMPS
```

**Translation strategy:** Explicit locale columns (no polymorphic translation model).

### 4.2 `research_theme_translations` table

```
id                    BIGINT UNSIGNED PK AI
research_theme_id     BIGINT UNSIGNED FK → research_themes.id ON DELETE CASCADE
locale                CHAR(2) NOT NULL  -- 'ar' or 'en'
name                  VARCHAR(255) NOT NULL
description           TEXT NULLABLE     -- short description for cards
body                  LONGTEXT NULLABLE -- full rich-text for theme detail page
meta_title            VARCHAR(255) NULLABLE
meta_description      VARCHAR(500) NULLABLE
UNIQUE (research_theme_id, locale)
```

---

### 4.3 `research_publications` table

```
id                      BIGINT UNSIGNED PK AI
slug                    VARCHAR(255) UNIQUE NOT NULL  -- locale-neutral, derived from English title
faculty_scope_slug      VARCHAR(100) NULLABLE FK → faculties.slug  -- scoping for faculty_editor
publication_type        ENUM('journal_article','conference_proceeding','thesis','dissertation','book_chapter','working_paper','report') NOT NULL
journal_conference_name VARCHAR(500) NULLABLE
volume                  VARCHAR(50) NULLABLE
issue                   VARCHAR(50) NULLABLE
pages                   VARCHAR(50) NULLABLE   -- e.g. "123-145"
year                    SMALLINT UNSIGNED NOT NULL
doi                     VARCHAR(255) NULLABLE UNIQUE
external_url            VARCHAR(2083) NULLABLE  -- DOI resolved URL or publisher link
is_open_access          BOOLEAN DEFAULT TRUE    -- whether the publication is openly accessible (affects DC.rights meta and Webometrics Open Access signal)
gs_indexed              BOOLEAN DEFAULT FALSE
citation_count          SMALLINT UNSIGNED NULLABLE  -- manually updated or future API-populated; used for Webometrics impact display
featured                BOOLEAN DEFAULT FALSE   -- for homepage block 06 / landing page featured card
status                  ENUM('draft','scheduled','published') DEFAULT 'draft'
published_at            TIMESTAMP NULLABLE
scheduled_at            TIMESTAMP NULLABLE
created_at, updated_at  TIMESTAMPS
INDEX(status, published_at)
INDEX(faculty_scope_slug)
INDEX(publication_type)
INDEX(year)
INDEX(featured)
INDEX(is_open_access)
```

**Important architectural constraint:** `faculty_scope_slug` uses the same ownership model as `FacultyStudentProject` and `FacultyLab`. A `faculty_editor` can only see/edit publications where `faculty_scope_slug` matches their assigned faculty.

---

### 4.4 `research_publication_translations` table

```
id                        BIGINT UNSIGNED PK AI
research_publication_id   BIGINT UNSIGNED FK → research_publications.id ON DELETE CASCADE
locale                    CHAR(2) NOT NULL
title                     VARCHAR(500) NOT NULL
abstract                  TEXT NULLABLE
keywords                  TEXT NULLABLE  -- comma-separated or JSON array
meta_title                VARCHAR(255) NULLABLE
meta_description          VARCHAR(500) NULLABLE
UNIQUE (research_publication_id, locale)
FULLTEXT INDEX (title, abstract, keywords)  -- for DB-based search
```

---

### 4.5 `research_publication_authors` table

This is a pivot between publications and author records. Authors can be internal (linked to an eventual CT-PERSON/researcher record) or external (free-text name only).

```
id                          BIGINT UNSIGNED PK AI
research_publication_id     BIGINT UNSIGNED FK → research_publications.id ON DELETE CASCADE
author_name                 VARCHAR(255) NOT NULL   -- denormalized name for display
author_name_ar              VARCHAR(255) NULLABLE   -- Arabic name if known
researcher_id               BIGINT UNSIGNED NULLABLE FK → researchers.id ON DELETE SET NULL  -- internal researcher link
scopus_author_id            VARCHAR(100) NULLABLE   -- Scopus Author ID for external authors with known Scopus profile (e.g. "35798025300")
sort_order                  TINYINT UNSIGNED DEFAULT 0  -- author order (1st author first)
INDEX (research_publication_id, sort_order)
```

**Note on `researcher_id`:** The `researchers` table is deferred (Expert Finder phase). Add the FK column now as `NULLABLE` so the pivot is future-proof without requiring the Expert Finder phase to proceed.

**Note on `scopus_author_id`:** For external collaborators (non-SPU authors) who have a known Scopus profile, storing their `scopus_author_id` allows the publication detail page to link directly to their Scopus author page (`https://www.scopus.com/authid/detail.uri?authorId={id}`). This improves Scopus discoverability without requiring a full internal researcher record.

---

### 4.6 `research_publication_theme` pivot table

```
research_publication_id   BIGINT UNSIGNED FK → research_publications.id ON DELETE CASCADE
research_theme_id         BIGINT UNSIGNED FK → research_themes.id ON DELETE CASCADE
PRIMARY KEY (research_publication_id, research_theme_id)
```

---

### 4.7 `research_projects` table

These are university-level research projects managed by the Research Office. They are **distinct from `faculty_student_projects`**, which are student-led academic projects within a faculty. The naming must be explicit to avoid confusion.

```
id                      BIGINT UNSIGNED PK AI
slug                    VARCHAR(255) UNIQUE NOT NULL
faculty_scope_slug      VARCHAR(100) NULLABLE FK → faculties.slug
research_center_id      BIGINT UNSIGNED NULLABLE FK → research_centers.id ON DELETE SET NULL
status_type             ENUM('ongoing','completed','paused') DEFAULT 'ongoing'
start_date              DATE NULLABLE
end_date                DATE NULLABLE
funding_source          VARCHAR(500) NULLABLE
external_project_url    VARCHAR(2083) NULLABLE
publish_status          ENUM('draft','scheduled','published') DEFAULT 'draft'
published_at            TIMESTAMP NULLABLE
scheduled_at            TIMESTAMP NULLABLE
featured                BOOLEAN DEFAULT FALSE
created_at, updated_at  TIMESTAMPS
INDEX(publish_status, published_at)
INDEX(faculty_scope_slug)
INDEX(research_center_id)
```

---

### 4.8 `research_project_translations` table

```
id                      BIGINT UNSIGNED PK AI
research_project_id     BIGINT UNSIGNED FK → research_projects.id ON DELETE CASCADE
locale                  CHAR(2) NOT NULL
title                   VARCHAR(500) NOT NULL
description             LONGTEXT NULLABLE   -- rich text
meta_title              VARCHAR(255) NULLABLE
meta_description        VARCHAR(500) NULLABLE
UNIQUE (research_project_id, locale)
```

---

### 4.9 `research_project_theme` pivot table

```
research_project_id   BIGINT UNSIGNED FK → research_projects.id ON DELETE CASCADE
research_theme_id     BIGINT UNSIGNED FK → research_themes.id ON DELETE CASCADE
PRIMARY KEY (research_project_id, research_theme_id)
```

---

### 4.10 `research_centers` table

```
id                      BIGINT UNSIGNED PK AI
slug                    VARCHAR(255) UNIQUE NOT NULL
director_name           VARCHAR(255) NULLABLE   -- denormalized for display
director_name_ar        VARCHAR(255) NULLABLE
director_researcher_id  BIGINT UNSIGNED NULLABLE FK → researchers.id ON DELETE SET NULL  -- future
contact_email           VARCHAR(255) NULLABLE
contact_phone           VARCHAR(50) NULLABLE
external_website        VARCHAR(2083) NULLABLE
faculty_scope_slug      VARCHAR(100) NULLABLE   -- which faculty this center belongs to (if any)
status                  ENUM('draft','published') DEFAULT 'draft'
published_at            TIMESTAMP NULLABLE
sort_order              SMALLINT UNSIGNED DEFAULT 0
created_at, updated_at  TIMESTAMPS
INDEX(status, published_at)
```

---

### 4.11 `research_center_translations` table

```
id                    BIGINT UNSIGNED PK AI
research_center_id    BIGINT UNSIGNED FK → research_centers.id ON DELETE CASCADE
locale                CHAR(2) NOT NULL
name                  VARCHAR(255) NOT NULL
mission               TEXT NULLABLE          -- short mission statement (for cards)
body                  LONGTEXT NULLABLE      -- full rich-text profile page body
meta_title            VARCHAR(255) NULLABLE
meta_description      VARCHAR(500) NULLABLE
UNIQUE (research_center_id, locale)
```

---

### 4.12 `research_center_faculty` pivot (if centers span multiple faculties)

```
research_center_id    BIGINT UNSIGNED FK → research_centers.id ON DELETE CASCADE
faculty_slug          VARCHAR(100)  -- denormalized faculty slug
PRIMARY KEY (research_center_id, faculty_slug)
```

---

### 4.13 `researchers` table

This is the CT-PERSON entity for SPU researchers and academic staff. It is a **new standalone table**, not an extension of the existing `FacultyHighlight` model (which is a CMS highlight widget, not a personnel record). The `researcher_id` FK already exists as `NULLABLE` in `research_publication_authors` and `research_centers` — this migration provides the referenced table.

```
id                    BIGINT UNSIGNED PK AI
slug                  VARCHAR(255) UNIQUE NOT NULL  -- locale-neutral, typically en-name-slugified
faculty_scope_slug    VARCHAR(100) NULLABLE FK → faculties.slug  -- for faculty_editor scoping
department            VARCHAR(255) NULLABLE   -- denormalized for filtering; stored in English
email                 VARCHAR(255) NULLABLE
email_public          BOOLEAN DEFAULT TRUE    -- whether to show email publicly
orcid_id              VARCHAR(50) NULLABLE    -- e.g. "0000-0002-1825-0097"
google_scholar_url    VARCHAR(2083) NULLABLE
scopus_id             VARCHAR(100) NULLABLE   -- Scopus Author ID, e.g. "35798025300"
                                              -- Scopus profile URL is computed: https://www.scopus.com/authid/detail.uri?authorId={scopus_id}
                                              -- Do NOT store the full URL; derive it at the DTO/view layer
status                ENUM('draft','published') DEFAULT 'draft'
published_at          TIMESTAMP NULLABLE
sort_order            SMALLINT UNSIGNED DEFAULT 0  -- for ordering within faculty
created_at, updated_at TIMESTAMPS
INDEX(status, published_at)
INDEX(faculty_scope_slug)
INDEX(department)
```

---

### 4.14 `researcher_translations` table

```
id              BIGINT UNSIGNED PK AI
researcher_id   BIGINT UNSIGNED FK → researchers.id ON DELETE CASCADE
locale          CHAR(2) NOT NULL
name            VARCHAR(255) NOT NULL         -- full official name in this locale
title           VARCHAR(255) NULLABLE         -- e.g. "Professor", "Associate Professor", "Dr."
bio             LONGTEXT NULLABLE             -- rich text research interests / bio
office_hours    VARCHAR(500) NULLABLE
meta_title      VARCHAR(255) NULLABLE
meta_description VARCHAR(500) NULLABLE
UNIQUE (researcher_id, locale)
FULLTEXT INDEX (name, bio)  -- for Expert Finder search
```

---

### 4.15 `researcher_expertise_tags` table

Expertise tags are a flat taxonomy scoped to researchers. They are not shared with themes (themes are research area categories; expertise tags are granular skill/domain descriptors like "Oncology", "Structural Engineering", "Islamic Finance").

```
id              BIGINT UNSIGNED PK AI
slug            VARCHAR(255) UNIQUE NOT NULL
name_ar         VARCHAR(255) NOT NULL
name_en         VARCHAR(255) NULLABLE
sort_order      SMALLINT UNSIGNED DEFAULT 0
created_at, updated_at TIMESTAMPS
INDEX(slug)
```

---

### 4.16 `researcher_expertise_tag` pivot table

```
researcher_id           BIGINT UNSIGNED FK → researchers.id ON DELETE CASCADE
researcher_expertise_tag_id  BIGINT UNSIGNED FK → researcher_expertise_tags.id ON DELETE CASCADE
PRIMARY KEY (researcher_id, researcher_expertise_tag_id)
```

---

### 4.17 Media Attachments

All four main entities (publications, projects, themes, centers) use Spatie Media Library via `HasMedia` trait on their Eloquent models, following the existing pattern in the codebase.

Collection names:
- `publication_pdf` — single PDF file for publications
- `publication_thumbnail` — optional cover image
- `project_thumbnail` — project featured image
- `project_files` — supplementary downloads (reports, datasets)
- `center_logo` — center logo image
- `center_gallery` — multiple gallery images
- `theme_icon` — theme icon image

---

### 4.14 Conflict Flag: `research_publication_translations` vs Old Polymorphic Translation Model

**Old requirement (v5.0):** does not specify a translation strategy, just field lists in CT-PUBLICATION.  
**Current codebase direction:** explicit locale-specific translation tables (per the migration away from the global polymorphic translation model).  
**Recommended updated requirement:** Use explicit `*_translations` tables as specified above. Do not create or reference any global polymorphic translation model. This is confirmed by the architecture guard test that enforces no new polymorphic translation tables.

---

## 5. Admin/CMS Requirements

All Filament resources follow the News and Facilities hardening pattern: thin Filament resource + writes routed through `ResearchAdminWorkflowService`, which handles validation, role enforcement, audit logging, and cache invalidation.

### 5.1 `ResearchPublicationResource`

| Attribute | Value |
|-----------|-------|
| **Navigation group** | "Research" |
| **Access** | `super_admin`: all. `editor`: all publications. `faculty_editor`: own faculty only (`faculty_scope_slug`). |
| **List columns** | Title (locale), Type badge, Authors (first author name), Year, Faculty, Status badge, Published At, Featured toggle. |
| **Filters** | Status, Publication Type, Faculty (scoped for `faculty_editor`), Year, Featured. |
| **Create/Edit fields** | |
| — Tab: Content (AR) | Title AR, Abstract AR, Keywords AR |
| — Tab: Content (EN) | Title EN, Abstract EN, Keywords EN |
| — Tab: Publication Details | Type (select), Journal/Conference Name, Volume, Issue, Pages, Year, DOI, External URL, GS Indexed toggle, Faculty (scoped select) |
| — Tab: Authors | Repeater: author_name, author_name_ar, sort_order. (researcher_id: hidden field for future use) |
| — Tab: Themes | Multi-select from published themes |
| — Tab: Media | PDF upload (single file, media collection `publication_pdf`), Thumbnail upload |
| — Tab: Publish | Status select, Published At datetime picker, Scheduled At datetime picker |
| — Tab: SEO | Meta Title AR, Meta Description AR, Meta Title EN, Meta Description EN |
| **Status control** | `faculty_editor` cannot set status to `published` or `scheduled`. `editor` and `super_admin` can. (Same enforcement as News.) |
| **Validation** | Title AR required. Year required. Publication type required. If status = `scheduled`, `scheduled_at` required and must be future. |
| **Delete behavior** | Soft delete through service (sets status to `archived` virtual state, not a real DB column — OR hard delete through service which fires audit event and cache invalidation). Decision: prefer service-routed hard delete with audit log. |
| **Audit requirements** | created, updated, published, unpublished, scheduled, media_changed, deleted — all through `ResearchAdminWorkflowService`. |

---

### 5.2 `ResearchProjectResource`

| Attribute | Value |
|-----------|-------|
| **Navigation group** | "Research" |
| **Access** | Same as publications: `faculty_editor` scoped by `faculty_scope_slug`. |
| **List columns** | Title (locale), Status Type badge, Faculty, Publish Status badge, Featured toggle, Start Date. |
| **Filters** | Publish Status, Status Type (ongoing/completed/paused), Faculty, Research Center, Featured. |
| **Create/Edit fields** | |
| — Tab: Content (AR) | Title AR, Description AR (rich text) |
| — Tab: Content (EN) | Title EN, Description EN (rich text) |
| — Tab: Project Details | Status Type (ongoing/completed/paused), Start Date, End Date, Funding Source, External Project URL, Featured toggle, Faculty (scoped), Research Center (select from published centers) |
| — Tab: Themes | Multi-select from published themes |
| — Tab: Investigators | Repeater: name, name_ar, role (PI/Co-PI/Collaborator) — free text for now, linked to researcher records in future phase |
| — Tab: Media | Thumbnail, Additional files (project reports, datasets) |
| — Tab: Publish | Publish status, Published At, Scheduled At |
| — Tab: SEO | Meta Title AR/EN, Meta Description AR/EN |
| **Status control** | Same `faculty_editor` publish restriction as publications. |
| **Audit requirements** | created, updated, published, unpublished, scheduled, deleted, media_changed. |

---

### 5.3 `ResearchThemeResource`

| Attribute | Value |
|-----------|-------|
| **Navigation group** | "Research" |
| **Access** | `editor` and `super_admin` only. `faculty_editor` cannot manage themes (themes are university-wide taxonomies, not faculty-scoped). |
| **List columns** | Name (locale), Status badge, Sort Order, Publication Count, Project Count. |
| **Create/Edit fields** | Name AR, Name EN, Description AR (short), Description EN (short), Body AR (rich text, for theme detail page), Body EN (rich text), Icon image (media), Sort Order, Status, Published At. |
| **Validation** | Name AR required. Name EN required. |
| **Audit requirements** | created, updated, published, deleted. |

---

### 5.4 `ResearchCenterResource`

| Attribute | Value |
|-----------|-------|
| **Navigation group** | "Research" |
| **Access** | `editor` and `super_admin` only for global centers. A `faculty_editor` can edit a center if `faculty_scope_slug` matches their faculty. |
| **List columns** | Name (locale), Director Name, Faculty, Status badge, Sort Order. |
| **Create/Edit fields** | |
| — Tab: Content (AR) | Name AR, Mission AR, Body AR (rich text) |
| — Tab: Content (EN) | Name EN, Mission EN, Body EN (rich text) |
| — Tab: Center Details | Director Name, Director Name AR, Contact Email, Contact Phone, External Website, Faculty scope, Sort Order |
| — Tab: Media | Logo (single), Gallery (multiple) |
| — Tab: Publications | Relation manager — list of publications linked to this center (read-only in center resource, linked via publication's research_center_id FK or via a tag; see open question §17) |
| — Tab: Projects | Relation manager — list of projects linked to this center |
| — Tab: Publish | Status, Published At |
| — Tab: SEO | Meta Title AR/EN, Meta Description AR/EN |
| **Audit requirements** | created, updated, published, deleted, media_changed. |

---

### 5.5 `ResearcherResource`

| Attribute | Value |
|-----------|-------|
| **Navigation group** | "Research" |
| **Access** | `super_admin`: all researchers. `editor`: all researchers. `faculty_editor`: own faculty only (`faculty_scope_slug`). |
| **List columns** | Photo (thumbnail), Name (locale), Title, Department, Faculty, Scopus ID (with external link icon), Status badge, Sort Order. |
| **Filters** | Status, Faculty (scoped for `faculty_editor`), Department, Has ORCID (boolean), Has Scopus ID (boolean). |
| **Create/Edit fields** | |
| — Tab: Identity (AR) | Name AR, Title AR, Bio AR (rich text), Office Hours AR |
| — Tab: Identity (EN) | Name EN, Title EN, Bio EN (rich text), Office Hours EN |
| — Tab: Academic IDs | ORCID iD (with format hint "0000-0002-1825-0097" and link preview), Google Scholar URL, Scopus Author ID (with format hint and link preview showing `https://www.scopus.com/authid/detail.uri?authorId={value}`) |
| — Tab: Contact & Affiliation | Email, Email Public toggle, Department, Faculty (scoped select), Sort Order |
| — Tab: Expertise Tags | Multi-select from `researcher_expertise_tags` |
| — Tab: Photo | Single photo upload (media collection `researcher_photo`) |
| — Tab: Publish | Status (draft/published), Published At |
| — Tab: SEO | Meta Title AR/EN, Meta Description AR/EN |
| **Status control** | `faculty_editor` cannot publish. `editor` and `super_admin` can. |
| **Validation** | Name AR required. Name EN required (used for slug). ORCID iD: validate format `\d{4}-\d{4}-\d{4}-\d{3}[\dX]` if set. Scopus Author ID: validate numeric string if set. |
| **Audit requirements** | created, updated, published, unpublished, deleted, media_changed. |

---

### 5.6 Static CMS Page Management

The four static sub-pages (Office, Conferences, Library, Policies) do not need dedicated Filament resources. They should be managed through the existing generic CMS page / FacultyPage-equivalent system, or through a simple `ResearchPage` model if one is added. Each static page has:

- Rich-text body AR + EN
- Hero title + subtitle AR + EN
- Downloadable documents section (media library attachments)
- Per-locale SEO meta
- Status (draft/published)

If the existing system for static CMS pages (as used for Facilities static pages) can accommodate these, use that system. Do not create a separate Filament resource for each.

---

## 6. Service Layer Requirements

### 6.1 Contracts

```
app/Contracts/Research/
├── ResearchPublicServiceInterface.php
└── ResearchAdminWorkflowServiceInterface.php
```

All controllers and Filament resources depend on these interfaces only. Services are bound in `AppServiceProvider`.

---

### 6.2 `ResearchPublicServiceInterface`

All public methods return DTOs or collections of DTOs. Never return Eloquent models.

```php
interface ResearchPublicServiceInterface
{
    // Landing page composite payload
    public function landingPageData(string $locale): ResearchLandingPageDTO;

    // Publications
    public function listPublications(ResearchFilterDTO $filter, string $locale): LengthAwarePaginator; // paginator of ResearchPublicationCardDTO
    public function publicationBySlug(string $slug, string $locale): ?ResearchPublicationDetailDTO;
    public function latestPublications(int $limit, string $locale): Collection; // of ResearchPublicationCardDTO — for homepage block

    // Projects
    public function listProjects(ResearchFilterDTO $filter, string $locale): LengthAwarePaginator; // paginator of ResearchProjectCardDTO
    public function projectBySlug(string $slug, string $locale): ?ResearchProjectDetailDTO;

    // Themes
    public function listThemes(string $locale): Collection; // of ResearchThemeDTO
    public function themeBySlug(string $slug, string $locale): ?ResearchThemeDetailDTO;
    public function publicationsByTheme(int $themeId, ResearchFilterDTO $filter, string $locale): LengthAwarePaginator;
    public function projectsByTheme(int $themeId, string $locale): Collection;

    // Centers
    public function listCenters(string $locale): Collection; // of ResearchCenterCardDTO
    public function centerBySlug(string $slug, string $locale): ?ResearchCenterDetailDTO;

    // Researchers / Expert Finder
    public function listResearchers(ResearcherFilterDTO $filter, string $locale): LengthAwarePaginator; // paginator of ResearcherCardDTO
    public function researcherBySlug(string $slug, string $locale): ?ResearcherDetailDTO;
    public function listExpertiseTags(string $locale): Collection; // of ResearcherExpertiseTagDTO — for filter dropdowns

    // Faculty-scoped (for /facilities/{faculty}/research page)
    public function facultyResearchHighlights(string $facultySlug, string $locale): FacultyResearchHighlightsDTO;
}
```

**Return type constraints:**
- `landingPageData` returns `ResearchLandingPageDTO` (composite structured array is acceptable only if the DTO count would be excessive — prefer explicit DTO).
- Paginator items must contain DTOs, not Eloquent models. Use `->through()` transformer or manual mapping.
- `?` (nullable) return types on `bySlug` methods: controller checks for null and returns 404.
- `latestPublications` used by homepage controller — must be fast, cached.

---

### 6.3 `ResearchAdminWorkflowServiceInterface`

```php
interface ResearchAdminWorkflowServiceInterface
{
    // Publications
    public function createPublication(ResearchPublicationWriteDTO $data, User $actor): ResearchPublication;
    public function updatePublication(ResearchPublication $publication, ResearchPublicationWriteDTO $data, User $actor): bool;
    public function publishPublication(ResearchPublication $publication, User $actor): bool;
    public function unpublishPublication(ResearchPublication $publication, User $actor): bool;
    public function schedulePublication(ResearchPublication $publication, \DateTimeImmutable $scheduledAt, User $actor): bool;
    public function deletePublication(ResearchPublication $publication, User $actor): bool;

    // Projects
    public function createProject(ResearchProjectWriteDTO $data, User $actor): ResearchProject;
    public function updateProject(ResearchProject $project, ResearchProjectWriteDTO $data, User $actor): bool;
    public function publishProject(ResearchProject $project, User $actor): bool;
    public function unpublishProject(ResearchProject $project, User $actor): bool;
    public function scheduleProject(ResearchProject $project, \DateTimeImmutable $scheduledAt, User $actor): bool;
    public function deleteProject(ResearchProject $project, User $actor): bool;

    // Themes
    public function createTheme(ResearchThemeWriteDTO $data, User $actor): ResearchTheme;
    public function updateTheme(ResearchTheme $theme, ResearchThemeWriteDTO $data, User $actor): bool;
    public function publishTheme(ResearchTheme $theme, User $actor): bool;
    public function deleteTheme(ResearchTheme $theme, User $actor): bool;

    // Centers
    public function createCenter(ResearchCenterWriteDTO $data, User $actor): ResearchCenter;
    public function updateCenter(ResearchCenter $center, ResearchCenterWriteDTO $data, User $actor): bool;
    public function publishCenter(ResearchCenter $center, User $actor): bool;
    public function deleteCenter(ResearchCenter $center, User $actor): bool;

    // Researchers
    public function createResearcher(ResearcherWriteDTO $data, User $actor): Researcher;
    public function updateResearcher(Researcher $researcher, ResearcherWriteDTO $data, User $actor): bool;
    public function publishResearcher(Researcher $researcher, User $actor): bool;
    public function unpublishResearcher(Researcher $researcher, User $actor): bool;
    public function deleteResearcher(Researcher $researcher, User $actor): bool;

    // Scoping helpers (used by Filament resources for faculty_editor option lists)
    public function getFacultyOptionsForActor(User $actor): array; // [slug => name]
}
```

**Critical enforcement in implementation (matches News hardening pattern):**
- `publishPublication` throws `AuthorizationException` if `$actor` role is `faculty_editor`.
- `unpublishPublication` throws `AuthorizationException` if `$actor` role is `faculty_editor` and publication is currently `published` or `scheduled`.
- Any method that changes `status` on a `published`/`scheduled` entity must verify `$actor` has rights.
- Every method fires an audit event via the audit service before returning.
- Every write method calls the cache invalidation service after success.

**Note:** `createPublication` etc. return the Eloquent model because the calling Filament resource needs the `id` for redirect. This is an exception to the "never return Eloquent models from public service methods" rule — it applies to public-facing service interfaces. Admin workflow service returning a model to trigger a Filament redirect is acceptable, matching the News pattern. Alternatively return the ID only. Align with the existing pattern in `NewsAdminWorkflowService`.

---

### 6.4 `ResearchPublicController`

Located at `app/Http/Controllers/Public/ResearchController.php`. Thin. Depends on `ResearchPublicServiceInterface` via constructor injection. No Eloquent imports.

Methods: `index`, `publicationsIndex`, `publicationShow`, `projectsIndex`, `projectShow`, `themesIndex`, `themeShow`, `centersIndex`, `centerShow`, `researchersIndex`, `researcherShow`, `officePage`, `conferencesPage`, `libraryPage`, `policiesPage`.

Each method: call service → check null for 404 → pass DTO to view → return response.

---

## 7. DTO Requirements

All DTOs are `final readonly` PHP 8.2 classes in `app/DTOs/Research/`.

### 7.1 Read DTOs (Public Service → View)

```
ResearchLandingPageDTO
    stats: ResearchStatsDTO
    featuredPublication: ?ResearchPublicationCardDTO
    latestPublications: array<ResearchPublicationCardDTO>
    themes: array<ResearchThemeDTO>
    centers: array<ResearchCenterCardDTO>
    seo: SeoDTO  (existing class)

ResearchStatsDTO
    publicationCount: int
    activeCenterCount: int
    activeProjectCount: int
    gsIndexedCount: ?int

ResearchPublicationCardDTO
    id: int
    slug: string
    title: string          -- locale-resolved
    authors: array<string>  -- formatted author names, e.g. ['Smith, J.', 'Al-Hassan, M.']
    year: int
    publicationType: string  -- enum value or display label
    journalConferenceName: ?string
    abstractExcerpt: ?string  -- 250-char truncated abstract
    facultyName: ?string
    pdfUrl: ?string
    externalUrl: ?string
    doi: ?string
    themes: array<string>  -- theme names
    url: string            -- public detail page URL

ResearchPublicationDetailDTO
    (all fields of ResearchPublicationCardDTO, plus:)
    abstractFull: ?string
    keywords: array<string>
    volume: ?string
    issue: ?string
    pages: ?string
    gsIndexed: bool
    authors: array<ResearchAuthorDTO>
    themes: array<ResearchThemeDTO>
    relatedPublications: array<ResearchPublicationCardDTO>
    citationMeta: ResearchCitationMetaDTO
    seo: SeoDTO

ResearchAuthorDTO
    name: string
    nameAr: ?string
    sortOrder: int
    profileUrl: ?string  -- null until Expert Finder is built

ResearchCitationMetaDTO
    citationTitle: string
    citationAuthors: array<string>
    citationPublicationDate: string  -- YYYY-MM-DD (stored); rendered as YYYY/MM/DD in meta tag
    citationPdfUrl: ?string
    citationDoi: ?string
    citationJournalTitle: ?string
    citationVolume: ?string
    citationIssue: ?string
    citationFirstpage: ?string
    citationLastpage: ?string
    citationKeywords: ?string
    citationAbstractHtmlUrl: string
    citationLanguage: string
    -- Dublin Core fields (Webometrics / institutional harvester support)
    dcIdentifierUrl: string          -- DOI URL if DOI present, else canonical page URL
    dcRights: ?string                -- "Open Access" if is_open_access = true, else null (tag omitted)
    pdfAlternateUrl: ?string         -- same as citationPdfUrl; used for <link rel="alternate" type="application/pdf">

ResearchProjectCardDTO
    id: int
    slug: string
    title: string
    descriptionExcerpt: ?string
    facultyName: ?string
    statusType: string    -- 'ongoing'|'completed'|'paused'
    startDate: ?string
    themes: array<string>
    centerName: ?string
    thumbnailUrl: ?string
    url: string

ResearchProjectDetailDTO
    (all fields of ResearchProjectCardDTO, plus:)
    descriptionFull: ?string  -- rich text / HTML
    endDate: ?string
    fundingSource: ?string
    externalProjectUrl: ?string
    investigators: array<ResearchInvestigatorDTO>
    publications: array<ResearchPublicationCardDTO>
    center: ?ResearchCenterCardDTO
    files: array<ResearchFileDTO>
    seo: SeoDTO

ResearchInvestigatorDTO
    name: string
    nameAr: ?string
    role: string  -- 'PI'|'Co-PI'|'Collaborator'

ResearchThemeDTO
    id: int
    slug: string
    name: string
    description: ?string
    iconUrl: ?string
    publicationCount: int
    projectCount: int
    url: string

ResearchThemeDetailDTO
    (all fields of ResearchThemeDTO, plus:)
    bodyHtml: ?string
    publications: LengthAwarePaginator  -- of ResearchPublicationCardDTO
    projects: array<ResearchProjectCardDTO>
    seo: SeoDTO

ResearchCenterCardDTO
    id: int
    slug: string
    name: string
    mission: ?string
    directorName: ?string
    affiliatedFacultyName: ?string
    publicationCount: int
    projectCount: int
    logoUrl: ?string
    url: string

ResearchCenterDetailDTO
    (all fields of ResearchCenterCardDTO, plus:)
    bodyHtml: ?string
    contactEmail: ?string
    contactPhone: ?string
    externalWebsite: ?string
    galleryUrls: array<string>
    publications: LengthAwarePaginator
    projects: array<ResearchProjectCardDTO>
    seo: SeoDTO

FacultyResearchHighlightsDTO
    facultyName: string
    latestPublications: array<ResearchPublicationCardDTO>
    latestProjects: array<ResearchProjectCardDTO>
    labs: array  -- existing FacultyLabDTO type
    allPublicationsUrl: string

ResearcherCardDTO
    id: int
    slug: string
    name: string              -- locale-resolved
    nameAr: ?string           -- always Arabic name (for bilingual display)
    title: ?string            -- e.g. "Professor", "Dr."
    department: ?string
    facultyName: ?string
    expertiseTags: array<string>   -- tag names in current locale (max shown: 5 on card)
    researchInterestsExcerpt: ?string  -- 200-char truncated bio
    photoUrl: ?string
    orcidUrl: ?string          -- null if orcid_id not set; else "https://orcid.org/{orcid_id}"
    googleScholarUrl: ?string
    scopusUrl: ?string         -- null if scopus_id not set; else "https://www.scopus.com/authid/detail.uri?authorId={scopus_id}"
    publicationCount: int
    url: string               -- public profile page URL

ResearcherDetailDTO
    id: int
    slug: string
    name: string
    nameAr: ?string
    title: ?string
    department: ?string
    facultyName: ?string
    facultySlug: ?string
    bioHtml: ?string           -- full rich-text bio, HTML-safe
    officeHours: ?string
    email: ?string             -- null if email_public = false
    expertiseTags: array<ResearcherExpertiseTagDTO>
    photoUrl: ?string
    orcidUrl: ?string
    googleScholarUrl: ?string
    scopusUrl: ?string         -- computed from scopus_id
    scopusId: ?string          -- raw ID, for display ("Scopus ID: 35798025300")
    publications: LengthAwarePaginator   -- of ResearchPublicationCardDTO
    projects: array<ResearchProjectCardDTO>
    seo: SeoDTO

ResearcherExpertiseTagDTO
    slug: string
    name: string               -- locale-resolved (name_ar or name_en)
    filteredResearchersUrl: string  -- URL to /research/researchers?expertise={slug}

ResearchFilterDTO
    locale: string
    search: ?string
    year: ?int
    publicationType: ?string
    themeId: ?int
    facultySlug: ?string
    centerId: ?int
    statusType: ?string   -- for projects only
    page: int
    perPage: int
    sortBy: string  -- 'newest'|'oldest'|'alphabetical'

ResearcherFilterDTO
    locale: string
    search: ?string           -- searches name + bio (FULLTEXT on researcher_translations)
    facultySlug: ?string
    department: ?string
    expertiseTagSlug: ?string
    page: int
    perPage: int
    sortBy: string  -- 'alphabetical' (default)|'faculty'
```

### 7.2 Write DTOs (Admin → Workflow Service)

```
ResearchPublicationWriteDTO
    titleAr: string
    titleEn: ?string
    abstractAr: ?string
    abstractEn: ?string
    keywordsAr: ?string
    keywordsEn: ?string
    publicationType: string
    journalConferenceName: ?string
    volume: ?string
    issue: ?string
    pages: ?string
    year: int
    doi: ?string
    externalUrl: ?string
    isOpenAccess: bool
    gsIndexed: bool
    citationCount: ?int
    featured: bool
    facultyScopeSlug: ?string
    themeIds: array<int>
    authors: array<ResearchAuthorWriteDTO>
    pdfUpload: ?UploadedFile
    thumbnailUpload: ?UploadedFile

ResearchAuthorWriteDTO
    name: string
    nameAr: ?string
    sortOrder: int
    scopusAuthorId: ?string   -- for external authors with known Scopus profile

ResearchProjectWriteDTO  (similar structure — omitted for brevity, follows same pattern)

ResearchThemeWriteDTO
    nameAr: string
    nameEn: ?string
    descriptionAr: ?string
    descriptionEn: ?string
    bodyAr: ?string
    bodyEn: ?string
    sortOrder: int
    iconUpload: ?UploadedFile

ResearchCenterWriteDTO  (similar structure — omitted for brevity)

ResearcherWriteDTO
    nameEn: string            -- English full name (used for slug generation)
    nameAr: string            -- Arabic full name
    titleEn: ?string          -- e.g. "Professor", "Associate Professor"
    titleAr: ?string
    department: ?string       -- stored in English for filtering
    facultyScopeSlug: ?string
    email: ?string
    emailPublic: bool
    bioAr: ?string            -- rich text research interests / bio in Arabic
    bioEn: ?string
    officeHoursAr: ?string
    officeHoursEn: ?string
    orcidId: ?string          -- raw ID only, e.g. "0000-0002-1825-0097"
    googleScholarUrl: ?string
    scopusId: ?string         -- raw Scopus Author ID, e.g. "35798025300"
    expertiseTagIds: array<int>
    metaTitleAr: ?string
    metaTitleEn: ?string
    metaDescriptionAr: ?string
    metaDescriptionEn: ?string
    photoUpload: ?UploadedFile
    sortOrder: int
```

---

## 8. Authorization & Role Rules

### 8.1 Policy

Create `app/Policies/ResearchDomainPolicy.php`. Register in `AppServiceProvider`.

Follows the same structure as `FacultyDomainPolicy`.

### 8.2 Role Matrix

| Action | `super_admin` | `editor` | `faculty_editor` |
|--------|---------------|----------|-----------------|
| View all publications (admin) | ✅ | ✅ | Own faculty only |
| Create publication | ✅ | ✅ | Own faculty only |
| Edit publication | ✅ | ✅ | Own faculty, draft/scheduled only |
| Publish publication | ✅ | ✅ | ❌ |
| Schedule publication | ✅ | ✅ | ❌ |
| Unpublish publication | ✅ | ✅ | ❌ |
| Delete publication | ✅ | ✅ | Draft only, own faculty |
| View all projects (admin) | ✅ | ✅ | Own faculty only |
| Create project | ✅ | ✅ | Own faculty only |
| Edit project | ✅ | ✅ | Own faculty, draft/scheduled only |
| Publish project | ✅ | ✅ | ❌ |
| Delete project | ✅ | ✅ | Draft only, own faculty |
| Manage themes | ✅ | ✅ | ❌ |
| Manage centers | ✅ | ✅ | Own faculty center only (edit only) |
| Publish themes/centers | ✅ | ✅ | ❌ |
| View all researchers (admin) | ✅ | ✅ | Own faculty only |
| Create researcher | ✅ | ✅ | Own faculty only |
| Edit researcher | ✅ | ✅ | Own faculty, draft only |
| Publish researcher | ✅ | ✅ | ❌ |
| Delete researcher | ✅ | ✅ | Draft only, own faculty |
| Manage expertise tags | ✅ | ✅ | ❌ |
| View Research admin panel | ✅ | ✅ | ✅ |

### 8.3 Cross-Faculty Restrictions

- A `faculty_editor` with `faculty_scope_slug = 'medicine'` cannot view, create, or edit research publications where `faculty_scope_slug = 'engineering'`.
- A `faculty_editor` cannot assign a publication to a faculty other than their own.
- The Filament faculty select field for `faculty_editor` must be populated via `ResearchAdminWorkflowService::getFacultyOptionsForActor()`, not via a direct unscoped query on the faculties table.
- If a `faculty_editor` attempts to publish by submitting a manipulated form payload, `ResearchAdminWorkflowService::publishPublication()` must throw `AuthorizationException` server-side regardless of what the form sent.

### 8.4 Draft/Scheduled Visibility Rules

- A publication with `status = 'draft'` is **never** accessible on any public route, including direct URL access by slug.
- A publication with `status = 'scheduled'` where `scheduled_at > now()` is **never** accessible publicly.
- A publication with `status = 'published'` and `published_at <= now()` is accessible.
- The `ResearchPublicService` must scope all public queries to `status = 'published' AND published_at <= NOW()`. This scope must not be bypassable via filter parameters.
- A `faculty_editor` in the admin viewing their own drafts is fine — the admin list does not apply the public scope.

### 8.5 Locked Account Behavior

Unchanged from global rule: five failed login attempts lock the account. Research adds no new auth rules on top of this.

---

## 9. Publish Workflow

### 9.1 States

| State | Meaning | Public visibility |
|-------|---------|-------------------|
| `draft` | Work in progress | Never |
| `scheduled` | Will go live at `scheduled_at` | Never (until datetime passes) |
| `published` | Live and visible | Yes, if `published_at <= now()` |

There is no `archived` state in the database enum. To take content offline, editors use `unpublish` which sets `status = 'draft'` and clears `published_at`. This matches the News pattern.

### 9.2 Transition Rules

```
draft → scheduled    (requires: actor is editor/super_admin; scheduled_at is future)
draft → published    (requires: actor is editor/super_admin; sets published_at = now() if not set)
scheduled → published (automatic via scheduler; or manual by editor/super_admin)
published → draft    (unpublish: sets status = 'draft', clears published_at)
scheduled → draft    (cancel schedule: sets status = 'draft', clears scheduled_at)
```

### 9.3 Scheduler Command

Add a `ResearchScheduledPublishCommand` (or extend existing scheduled publish command if one exists for News) that:
- Runs every minute via `schedule()`.
- Queries `research_publications WHERE status = 'scheduled' AND scheduled_at <= NOW()`.
- Calls `ResearchAdminWorkflowService::publishPublication()` with a system actor.
- Same for `research_projects`.

### 9.4 Cache Invalidation on Publish/Unpublish

When any publication/project/theme/center is published or unpublished:

```
Cache::tags(['research', 'research-publications'])->flush()  -- on publication change
Cache::tags(['research', 'research-projects'])->flush()      -- on project change
Cache::tags(['research', 'research-themes'])->flush()        -- on theme change
Cache::tags(['research', 'research-centers'])->flush()       -- on center change
Cache::tags(['sitemap'])->flush()                            -- always (sitemap must regenerate)
Cache::tags(['seo'])->flush()                               -- if SEO meta changed
Cache::tags(['public-shell'])->flush()                      -- only if nav-visible counts changed
```

Additionally, invalidate the specific entity cache tag:
```
Cache::tags(["research-publication-{$id}"])->flush()
```

### 9.5 Sitemap Updates

The existing sitemap service must be extended to include Research URLs. On any publish/unpublish event, the sitemap cache tag is flushed and the sitemap regenerated on next request.

Sitemap inclusion rules:
- Published publications: `/{locale}/research/publications/{slug}` — both locales.
- Published projects: `/{locale}/research/projects/{slug}` — both locales.
- Published themes: `/{locale}/research/themes/{slug}` — both locales.
- Published centers: `/{locale}/research/centers/{slug}` — both locales.
- Static Research sub-pages (office, conferences, library, policies): always included if published.
- Draft/scheduled: excluded from sitemap.

### 9.6 Audit Log Events

All logged via the existing audit service. Events:

| Entity | Event | Actor Captured | Entity ID Captured |
|--------|-------|---------------|-------------------|
| ResearchPublication | created | ✅ | publication.id |
| ResearchPublication | updated | ✅ | publication.id |
| ResearchPublication | published | ✅ | publication.id |
| ResearchPublication | unpublished | ✅ | publication.id |
| ResearchPublication | scheduled | ✅ | publication.id + scheduled_at |
| ResearchPublication | deleted | ✅ | publication.id |
| ResearchPublication | media_changed | ✅ | publication.id + collection_name |
| ResearchProject | created/updated/published/unpublished/scheduled/deleted | ✅ | project.id |
| ResearchTheme | created/updated/published/deleted | ✅ | theme.id |
| ResearchCenter | created/updated/published/deleted | ✅ | center.id |
| Researcher | created/updated/published/unpublished/deleted | ✅ | researcher.id |
| Researcher | `scopus_id_changed` | ✅ | researcher.id + old_scopus_id + new_scopus_id |

---

## 10. Search/Filtering Requirements

### 10.1 Public Publications Filter

DB-based search (Meilisearch deferred). Implementation uses MySQL FULLTEXT index on `research_publication_translations(title, abstract, keywords)`.

| Filter | Implementation |
|--------|---------------|
| Free-text search | FULLTEXT `MATCH() AGAINST()` on title, abstract, keywords for current locale's translation. Falls back to `LIKE '%query%'` if FULLTEXT returns nothing. Minimum 3 characters to trigger. |
| Year | WHERE year = ? |
| Publication type | WHERE publication_type = ? |
| Theme | JOIN research_publication_theme WHERE research_theme_id = ? |
| Faculty | WHERE faculty_scope_slug = ? |
| Sort: newest first | ORDER BY published_at DESC (default) |
| Sort: oldest first | ORDER BY published_at ASC |
| Sort: alphabetical | ORDER BY title ASC (join to translation table on locale) |
| Pagination | 15 per page, standard Laravel LengthAwarePaginator |
| Status scope | ALWAYS: WHERE status = 'published' AND published_at <= NOW() — not overrideable |

### 10.2 Public Projects Filter

| Filter | Implementation |
|--------|---------------|
| Free-text search | FULLTEXT on `research_project_translations(title, description)` for current locale |
| Status type | WHERE status_type = ? (ongoing/completed/paused) |
| Faculty | WHERE faculty_scope_slug = ? |
| Theme | JOIN research_project_theme |
| Year (start year) | WHERE YEAR(start_date) = ? |
| Sort: newest first | ORDER BY published_at DESC |
| Pagination | 12 per page |

### 10.3 Public Researchers Filter (Expert Finder)

| Filter | Implementation |
|--------|---------------|
| Free-text search | FULLTEXT `MATCH() AGAINST()` on `researcher_translations(name, bio)` for current locale. Minimum 2 characters. |
| Faculty | WHERE faculty_scope_slug = ? |
| Department | WHERE department = ? (case-insensitive) |
| Expertise tag | JOIN researcher_expertise_tag WHERE researcher_expertise_tag_id = ? |
| Sort: alphabetical (default) | ORDER BY name ASC (join to translation table on locale) |
| Sort: by faculty | ORDER BY faculty_scope_slug ASC, name ASC |
| Status scope | ALWAYS: WHERE status = 'published' AND published_at <= NOW() |
| Pagination | 20 per page |

### 10.4 Admin-Side Filters

Filament table filters for each resource (in addition to the global Filament search bar):

Publications: Status, Type, Faculty (scoped for `faculty_editor`), Year, Featured, GS Indexed, Open Access.
Projects: Publish Status, Status Type, Faculty, Research Center, Featured.
Themes: Status.
Centers: Status, Faculty.
Researchers: Status, Faculty (scoped for `faculty_editor`), Department, Has ORCID, Has Scopus ID.

### 10.4 Filter URL Behavior

Public filter state is passed as GET query parameters (`?year=2024&type=journal_article`). Filter pages with active parameters get `<meta name="robots" content="noindex, follow">`. The base listing page at `/research/publications` (no filters) remains `index, follow`.

---

## 11. SEO, Sitemap, Metadata

### 11.1 Per-Locale SEO

Every Research page has independently CMS-editable `meta_title` and `meta_description` per locale. Defaults:
- `meta_title` defaults: `{publication title} — Research — SPU` (for publications), `{center name} — Research Centers — SPU` (for centers), etc.
- `meta_description` defaults: truncated abstract (for publications), mission statement (for centers).

### 11.2 Canonical URLs

Format: `https://spu.edu.sy/{locale}/research/publications/{slug}` (absolute URL with locale prefix).

The Blade layout must emit `<link rel="canonical">` on every Research page. The canonical is always the current locale's URL (not cross-locale).

### 11.3 hreflang

Every Research page emits:
```html
<link rel="alternate" hreflang="ar" href="https://spu.edu.sy/ar/research/publications/{ar-slug}">
<link rel="alternate" hreflang="en" href="https://spu.edu.sy/en/research/publications/{en-slug}">
<link rel="alternate" hreflang="x-default" href="https://spu.edu.sy/ar/research/publications/{ar-slug}">
```

If a publication has no English translation, the `en` hreflang points to the publications listing (`/en/research/publications`), not to a non-existent page.

### 11.4 OpenGraph

Every Research detail page emits:
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">  <!-- abstract excerpt -->
<meta property="og:type" content="article">     <!-- for publications -->
<meta property="og:url" content="...">
<meta property="og:image" content="...">        <!-- publication thumbnail or SPU default OG image -->
<meta property="og:locale" content="ar_SY">    <!-- or en_US -->
<meta property="og:locale:alternate" content="en_US">
```

### 11.5 Citation Meta Tags (Google Scholar + Scopus — CRITICAL)

On every publication detail page, in `<head>`, emit (per NFR-SEO-06):

```html
<!-- Google Scholar High-Density Citation Tags -->
<meta name="citation_title" content="...">
<meta name="citation_author" content="Last, First">  <!-- one tag per author -->
<meta name="citation_publication_date" content="YYYY/MM/DD">
<meta name="citation_pdf_url" content="https://...">  <!-- if hosted PDF -->
<meta name="citation_doi" content="10.xxxx/...">       <!-- if DOI present -->
<meta name="citation_journal_title" content="...">
<meta name="citation_volume" content="...">
<meta name="citation_issue" content="...">
<meta name="citation_firstpage" content="...">
<meta name="citation_lastpage" content="...">
<meta name="citation_keywords" content="...">
<meta name="citation_abstract_html_url" content="https://...">
<meta name="citation_language" content="ar">

<!-- Dublin Core Tags (Webometrics crawlers + institutional harvesters) -->
<meta name="DC.title" content="...">
<meta name="DC.creator" content="Last, First">  <!-- one per author -->
<meta name="DC.subject" content="...">           <!-- keywords -->
<meta name="DC.description" content="...">       <!-- abstract excerpt -->
<meta name="DC.publisher" content="Syrian Private University">
<meta name="DC.date" content="YYYY-MM-DD">
<meta name="DC.type" content="Text">
<meta name="DC.format" content="application/pdf">  <!-- if PDF hosted -->
<meta name="DC.identifier" content="https://doi.org/...">  <!-- DOI URL if present, else canonical URL -->
<meta name="DC.language" content="ar">           <!-- or "en" -->
<meta name="DC.rights" content="Open Access">    <!-- only if is_open_access = true -->

<!-- PDF alternate link in <head> (Webometrics rich file signal) -->
<!-- emit only if PDF is hosted -->
<link rel="alternate" type="application/pdf" href="https://...">
```

These tags are generated from `ResearchCitationMetaDTO` in the Blade layout for publication detail pages. The DTO is part of `ResearchPublicationDetailDTO`.

**Scopus Author Tags on Researcher Profile Pages:**

On every researcher profile page (`/research/researchers/{slug}`), in `<head>`, emit:

```html
<!-- If researcher has scopus_id -->
<meta name="DC.identifier" content="https://www.scopus.com/authid/detail.uri?authorId={scopus_id}">
<!-- If researcher has orcid_id -->
<meta name="DC.identifier" content="https://orcid.org/{orcid_id}">
```

These signals help Scopus and other academic identity systems associate the SPU profile page with the researcher's external profiles.

### 11.6 JSON-LD Structured Data

| Page | JSON-LD Type |
|------|-------------|
| Publication detail | `ScholarlyArticle` with `author` (array of `Person`), `datePublished`, `publisher`, `description`, `identifier` (DOI), `url`, `keywords` |
| Project detail | `ResearchProject` (schema.org) |
| Center detail | `Organization` (sub-org) with `parentOrganization` = SPU |
| Theme detail | `Thing` with `description` |
| Research landing | `WebPage` with `about` = array of theme names |

### 11.7 robots.txt

The existing robots.txt must explicitly allow Googlebot and academic crawlers on all public Research URLs. Verify and update robots.txt to include:

```
# Allow academic crawlers and Googlebot on all public research content
User-agent: Googlebot
Allow: /ar/research/
Allow: /en/research/

# General crawlers
User-agent: *
Allow: /ar/research/
Allow: /en/research/
Disallow: /admin/
Disallow: /filament/

# Sitemap references
Sitemap: https://spu.edu.sy/sitemap.xml
Sitemap: https://spu.edu.sy/sitemap-research.xml
```

**Critical:** No `/research` path must appear in any `Disallow` rule. Draft/scheduled publications are protected by returning HTTP 404 (not by robots.txt) — do not rely on robots.txt for content gating.

### 11.8 Research-Specific Sitemap (`sitemap-research.xml`)

In addition to inclusion in the main sitemap, generate a **dedicated research sitemap** at `/sitemap-research.xml`. This is submitted separately to Google Search Console and can be referenced by Scopus and other academic indexers.

Structure:
```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- Publication detail pages (both locales) -->
  <url>
    <loc>https://spu.edu.sy/ar/research/publications/{slug}</loc>
    <lastmod>YYYY-MM-DD</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>{thumbnail_url}</image:loc>  <!-- if thumbnail exists -->
    </image:image>
  </url>
  <!-- ... EN locale equivalent ... -->
  <!-- Researcher profile pages -->
  <!-- Research center pages (priority 0.7) -->
  <!-- Research landing + listing pages (priority 0.6, changefreq weekly) -->
</urlset>
```

The sitemap service must be extended with a `generateResearchSitemap()` method that writes this file. Cache tag `sitemap-research` is flushed on any Research entity publish/unpublish. Priority and changefreq values:

| Page type | priority | changefreq |
|-----------|----------|------------|
| Publication detail | 0.8 | monthly |
| Researcher profile | 0.7 | monthly |
| Center detail | 0.7 | monthly |
| Theme detail | 0.6 | monthly |
| Research landing page | 0.7 | weekly |
| Publications/Projects listing | 0.6 | weekly |

---

## 12. Cache Requirements

### 12.1 Cache Tags

New cache tags to add to the existing tagged cache service:

| Tag | Scope |
|-----|-------|
| `research` | All Research public pages (parent tag — flush everything Research) |
| `research-publications` | Publications listing + any page showing publication cards |
| `research-publication-{id}` | Individual publication detail page |
| `research-projects` | Projects listing + any page showing project cards |
| `research-project-{id}` | Individual project detail page |
| `research-themes` | Themes listing + theme show pages |
| `research-theme-{id}` | Individual theme detail page |
| `research-centers` | Centers listing + center show pages |
| `research-center-{id}` | Individual center detail page |
| `research-researchers` | Researchers listing (Expert Finder) |
| `research-researcher-{id}` | Individual researcher profile page |

### 12.2 Cache Key Strategy

Follow existing `FacultyPageService` pattern:

```
research.landing.{locale}                          → landing page composite
research.publications.listing.{locale}.page{n}    → publications listing (unfiltered)
research.publication.{slug}.{locale}              → publication detail
research.projects.listing.{locale}.page{n}        → projects listing (unfiltered)
research.project.{slug}.{locale}                  → project detail
research.themes.listing.{locale}                  → all themes
research.theme.{slug}.{locale}                    → theme detail
research.centers.listing.{locale}                 → all centers
research.center.{slug}.{locale}                   → center detail
research.researchers.listing.{locale}.page{n}     → researchers listing (unfiltered)
research.researcher.{slug}.{locale}               → researcher profile detail
research.expertise-tags.{locale}                  → expertise tag list (for filter dropdowns)
research.latest-publications.{locale}.{limit}     → homepage block data
```

Filtered results (e.g. `?year=2024&type=journal_article`) are NOT cached — they are served dynamically. Only the unfiltered base pages are cached.

### 12.3 Cache TTL

- Publication/project/center detail pages: `null` (indefinite, tag-based invalidation only)
- Listing pages (unfiltered first page): 3600 seconds as safety TTL, overridden by tag invalidation
- Latest publications for homepage: 1800 seconds + tag invalidation

### 12.4 Cache Bypass

Public cache is bypassed (following existing pattern) for:
- Authenticated users
- Admin routes
- Preview flows (if preview is implemented)
- Non-GET requests
- Filtered requests (dynamic — no caching)

### 12.5 Write Invalidation Matrix

| Write action | Tags to flush |
|---|---|
| Publish/unpublish publication | `research`, `research-publications`, `research-publication-{id}`, `sitemap`, `sitemap-research`, `seo` |
| Update publication | `research-publication-{id}`, `research-publications`, `seo`, `sitemap-research` (if slug or title changed) |
| Publish/unpublish project | `research`, `research-projects`, `research-project-{id}`, `sitemap`, `sitemap-research` |
| Publish/unpublish theme | `research`, `research-themes`, `research-theme-{id}`, `sitemap`, `sitemap-research` + flush publication/project listings |
| Publish/unpublish center | `research`, `research-centers`, `research-center-{id}`, `sitemap`, `sitemap-research` |
| Publish/unpublish researcher | `research`, `research-researchers`, `research-researcher-{id}`, `sitemap`, `sitemap-research` |
| Update researcher profile | `research-researcher-{id}`, `research-researchers` (listing card may have changed), `sitemap-research` (if name/slug changed) |
| Any Research write | `research` (umbrella tag — safe to always flush) |
| Homepage "featured" flag toggled on publication | `research`, `public-pages` (homepage block cache) |

---

## 13. Audit Requirements

### 13.1 Audit Events — Full List

All events are recorded via the existing audit service (not a new audit system). Each event stores: event_type (string), entity_type (string, e.g. `research_publication`), entity_id (int), actor_id (int), actor_role (string), extra_data (JSON), created_at (timestamp).

| Entity | Event | Extra Data |
|--------|-------|-----------|
| ResearchPublication | `created` | faculty_scope_slug, publication_type |
| ResearchPublication | `updated` | changed_fields (array of field names) |
| ResearchPublication | `published` | published_at |
| ResearchPublication | `unpublished` | previous_status |
| ResearchPublication | `scheduled` | scheduled_at |
| ResearchPublication | `schedule_cancelled` | — |
| ResearchPublication | `deleted` | title (for traceability after deletion) |
| ResearchPublication | `media_changed` | collection_name, media_id |
| ResearchPublication | `status_tamper_blocked` | attempted_status, actor_role — logged when `faculty_editor` attempts publish |
| ResearchProject | (same set as publication) | project-specific fields |
| ResearchTheme | `created`, `updated`, `published`, `deleted` | theme name |
| ResearchCenter | `created`, `updated`, `published`, `deleted` | center name |

### 13.2 Audit Log Visibility

Audit logs are visible in the Filament admin panel to `super_admin` only. No change from existing behavior.

---

## 14. Frontend Integration Requirements

### 14.1 Frontend Source Investigation

Based on the project context, the frontend source is at `C:\Users\hamza\Spu-Website\Spu-Website\src`. The following frontend Research files must be inspected before implementing views:

**Files to check:**
- `src/config/site-pages.json` — verify Research routes are listed, check slug/URL structure used in frontend
- `src/fragments/pages/research/` — if present, contains HTML fragment for Research pages
- `src/data/domains/` — check for `research.js`, `publications.js`, or similar data domain files
- `src/alpine/pages/` — check for `research-stores.js` or `publication-stores.js`
- `src/styles/` — check for `research.css` or `publications.css`

**Critical instruction (from Study Plan lesson):** Before implementing any Blade view, inspect the corresponding frontend fragment. If the frontend has a designed interactive behavior (e.g. a filter panel with Alpine.js state, a card hover animation, a publication type badge system, a search-as-you-type behavior), that behavior must be ported faithfully — not replaced with a simplified server-rendered approximation.

### 14.2 Expected Frontend Integration Patterns

Based on the project's established patterns:

**Alpine.js data:** If the frontend uses `x-data` with inline objects or Alpine stores for Research pages, translate them to named Alpine component data functions in `resources/js/alpine/research*.js` files, following the `studyPlan.js` pattern. Do not use `$store` unless the app's architecture supports it (verify with ARCHITECTURE.md).

**CSS:** Research-specific styles from frontend `src/styles/research.css` (if present) must be copied to `resources/css/frontend/research.css` and imported in the Vite manifest.

**No `x-cloak` leaks:** All Alpine components using `x-show` or `x-if` must have `[x-cloak]` CSS rule in the base stylesheet. Verify `resources/css/app.css` or similar has `[x-cloak] { display: none !important; }`.

**No raw `<include>` or Blade-side components that duplicate public layout:** Use the existing `@extends('layouts.public')` or equivalent layout inheritance pattern.

**Filter panel:** The publications filter sidebar/bar should use Alpine.js for client-side filter state management, with form submission (GET) for actual filtering. Server-rendered results, not AJAX — consistent with the project's server-rendering philosophy (NFR-SEO-05).

### 14.3 Porting Checklist per View

Before implementing each Blade view:

1. Check `site-pages.json` for the route/slug.
2. Check `src/fragments/pages/research/` for the HTML fragment.
3. Check `src/alpine/pages/` for Alpine store files.
4. Check `src/styles/` for Research-specific CSS.
5. Port CSS to `resources/css/frontend/research.css`.
6. Port Alpine store to `resources/js/alpine/researchPublications.js` (or equivalent).
7. Adapt the HTML fragment to Blade syntax using DTO data.
8. Run `npm run build` and verify.

### 14.4 Known Frontend/Backend Mismatch Pattern

From the Study Plan experience: if the frontend uses client-side data (`src/data/domains/study-plans.js`) rather than a server API, the Laravel implementation must seed that data into the database and serve it via the service layer. The view must not hardcode the frontend data domain file's structure — it must receive DTO data from the controller.

If `src/data/domains/` contains a `publications.js` or `research.js` file with static research data, that data must be seeded into `research_publications` and related tables via a `ResearchSeeder`, following the `FacultyModuleSeeder` pattern.

---

## 15. Acceptance Criteria

All criteria must pass before the Research module is considered production-ready.

### 15.1 Route Status

- [ ] `GET /{locale}/research` returns HTTP 200 in both `ar` and `en`
- [ ] `GET /{locale}/research/publications` returns HTTP 200 in both locales
- [ ] `GET /{locale}/research/publications/{slug}` returns HTTP 200 for a published publication, HTTP 404 for a draft, HTTP 404 for a non-existent slug
- [ ] `GET /{locale}/research/projects` returns HTTP 200
- [ ] `GET /{locale}/research/projects/{slug}` returns HTTP 200 for published, HTTP 404 for draft
- [ ] `GET /{locale}/research/themes` returns HTTP 200
- [ ] `GET /{locale}/research/themes/{slug}` returns HTTP 200 for published theme
- [ ] `GET /{locale}/research/centers` returns HTTP 200
- [ ] `GET /{locale}/research/centers/{slug}` returns HTTP 200 for published center
- [ ] `GET /{locale}/research/office`, `/library`, `/policies`, `/conferences` return HTTP 200
- [ ] `GET /{locale}/facilities/{faculty}/research` returns HTTP 200 for valid faculty
- [ ] `php artisan route:list` shows all Research routes
- [ ] `php artisan route:list` shows no duplicate Research route names

### 15.2 Draft/Scheduled Visibility

- [ ] A publication with `status = 'draft'` returns HTTP 404 on its public detail URL
- [ ] A publication with `status = 'scheduled'` and `scheduled_at` in the future returns HTTP 404 publicly
- [ ] A publication with `status = 'scheduled'` and `scheduled_at` in the past is treated as published and returns HTTP 200
- [ ] A draft publication does NOT appear in the publications listing
- [ ] A draft publication does NOT appear in homepage block 06 research cards
- [ ] A draft publication does NOT appear in the sitemap
- [ ] Setting a publication to published via the scheduler command makes it publicly visible within 1 minute

### 15.3 Role/Scoping

- [ ] A `faculty_editor` scoped to faculty `medicine` cannot see publications with `faculty_scope_slug = 'engineering'` in the admin list
- [ ] A `faculty_editor` submitting a publish request for a publication throws a server-side `AuthorizationException` (not just a UI restriction)
- [ ] A `faculty_editor` cannot change the status of a `published` publication to `draft`
- [ ] An `editor` can publish a `draft` publication
- [ ] A `super_admin` can publish, unpublish, schedule, and delete any publication
- [ ] The faculty select field in the Filament publication create form is scoped (shows only the actor's faculty options) when the actor is `faculty_editor`

### 15.4 Cache Invalidation

- [ ] After publishing a publication, the publications listing cache is invalidated (next request fetches fresh data)
- [ ] After unpublishing a publication, it disappears from the public listing on the next request (not after cache TTL)
- [ ] After updating a publication's title, the publication detail page cache is invalidated
- [ ] After publishing a new theme, the research landing page shows the updated themes list on the next request
- [ ] The sitemap cache is invalidated on publish/unpublish of any Research entity

### 15.5 Audit Log

- [ ] Creating a publication generates an audit event `research_publication.created` with actor_id
- [ ] Publishing a publication generates `research_publication.published`
- [ ] A `faculty_editor` attempting to publish generates `research_publication.status_tamper_blocked`
- [ ] Deleting a publication generates `research_publication.deleted` with the title in extra_data
- [ ] Audit log is visible to `super_admin` in the Filament admin panel
- [ ] Audit log is NOT visible to `faculty_editor`

### 15.6 SEO/Sitemap

- [ ] Every published publication detail page has a unique `<title>` tag
- [ ] Every published publication detail page has `citation_title`, `citation_author`, `citation_publication_date`, `citation_abstract_html_url` meta tags in `<head>`
- [ ] A publication with a hosted PDF has `citation_pdf_url` meta tag and `<link rel="alternate" type="application/pdf">` in `<head>`
- [ ] A publication with a DOI has `citation_doi` meta tag
- [ ] Every publication detail page has Dublin Core `DC.title`, `DC.creator`, `DC.date` tags in `<head>`
- [ ] A publication with `is_open_access = true` has `<meta name="DC.rights" content="Open Access">` in `<head>`
- [ ] Every Research detail page has `<link rel="canonical">` pointing to the correct locale URL
- [ ] Every Research detail page has `<link rel="alternate" hreflang="ar">` and `<link rel="alternate" hreflang="en">` tags
- [ ] `GET /sitemap.xml` (or sitemap index) includes published publication URLs in both locales
- [ ] `GET /sitemap-research.xml` exists and includes published publication, researcher, and center URLs
- [ ] `GET /sitemap-research.xml` does NOT include draft publication URLs
- [ ] Publication detail pages have `<meta property="og:type" content="article">`
- [ ] JSON-LD `ScholarlyArticle` block is valid per Google Rich Results Test
- [ ] Researcher profile pages with `scopus_id` set have `<meta name="DC.identifier">` pointing to the Scopus author profile URL
- [ ] Researcher profile pages with `orcid_id` set have `<meta name="DC.identifier">` pointing to the ORCID URL
- [ ] Researcher profile pages with `scopus_id` set have `sameAs` in JSON-LD `Person` including the Scopus author profile URL
- [ ] robots.txt allows crawling of `/ar/research/` and `/en/research/` and references `/sitemap-research.xml`

### 15.7 Bilingual / i18n

- [ ] A publication with Arabic title only renders the Arabic title in `ar` locale and falls back to Arabic title in `en` locale (no blank/broken page)
- [ ] A publication with both AR and EN titles renders each in its respective locale
- [ ] The language switcher on a publication detail page correctly switches between `/ar/research/publications/{slug}` and `/en/research/publications/{slug}`
- [ ] Research listing page in Arabic has RTL layout (verified visually)
- [ ] Research listing page in English has LTR layout
- [ ] All admin Filament Research resource labels are bilingual (AR + EN tab labels)

### 15.8 Admin Resource Access

- [ ] A `faculty_editor` can access the Research admin panel and see their own publications
- [ ] A `faculty_editor` cannot navigate to a publication from another faculty
- [ ] An `editor` can access all Research admin resources
- [ ] A `super_admin` can access all Research admin resources
- [ ] The Research navigation group appears in the Filament sidebar for all authorized roles

### 15.9 Architecture Guards

- [ ] `php artisan test --filter=ArchitectureGuardTest` passes after adding Research module
- [ ] No Research service public method returns a raw Eloquent model (enforced by the guard test)
- [ ] No Research controller imports an Eloquent model directly
- [ ] No Research migration uses a polymorphic translation pattern
- [ ] All Research service bindings are registered in `AppServiceProvider` (verified by existence of binding and a test that resolves the interface)
- [ ] `ResearchPublicServiceInterface` can be resolved from the container in a unit test

### 15.10 Frontend Parity

- [ ] Research publication listing page matches the frontend design from `src/fragments/pages/research/` (if present) — verified by visual comparison
- [ ] No Research public page renders blank due to missing Alpine component data
- [ ] No `x-cloak` flickering on Research pages
- [ ] `npm run build` completes without errors after adding Research CSS/JS assets

---

## 16. Implementation Plan

### Phase 1: Data Model & Service Foundation

**Objective:** Create the full Research data model, migrations, models, DTOs, contracts, and service skeletons. No public routes or views yet. ArchitectureGuardTest must pass.

**Files to create:**
- `database/migrations/xxxx_create_research_themes_table.php`
- `database/migrations/xxxx_create_research_theme_translations_table.php`
- `database/migrations/xxxx_create_research_publications_table.php`
- `database/migrations/xxxx_create_research_publication_translations_table.php`
- `database/migrations/xxxx_create_research_publication_authors_table.php`
- `database/migrations/xxxx_create_research_publication_theme_table.php`
- `database/migrations/xxxx_create_research_projects_table.php`
- `database/migrations/xxxx_create_research_project_translations_table.php`
- `database/migrations/xxxx_create_research_project_theme_table.php`
- `database/migrations/xxxx_create_research_centers_table.php`
- `database/migrations/xxxx_create_research_center_translations_table.php`
- `app/Models/Research/ResearchTheme.php`
- `app/Models/Research/ResearchPublication.php`
- `app/Models/Research/ResearchProject.php`
- `app/Models/Research/ResearchCenter.php`
- `app/Models/Research/Researcher.php`
- `app/Models/Research/ResearcherExpertiseTag.php`
- All DTOs listed in Section 7 (including `ResearcherCardDTO`, `ResearcherDetailDTO`, `ResearcherExpertiseTagDTO`, `ResearcherFilterDTO`, `ResearcherWriteDTO`)
- `app/Contracts/Research/ResearchPublicServiceInterface.php`
- `app/Contracts/Research/ResearchAdminWorkflowServiceInterface.php`
- `app/Services/Research/ResearchPublicService.php` (stub — all methods throw `NotImplementedException`)
- `app/Services/Research/ResearchAdminWorkflowService.php` (stub)
- `app/Policies/ResearchDomainPolicy.php`
- `AppServiceProvider` bindings for Research interfaces
- `tests/Unit/ResearchAdminWorkflowServiceTest.php` (skeleton with failing tests)
- `tests/Unit/ResearchPublicServiceTest.php` (skeleton)

**Migrations:** All 11 migrations listed above, plus:
- `database/migrations/xxxx_create_researchers_table.php`
- `database/migrations/xxxx_create_researcher_translations_table.php`
- `database/migrations/xxxx_create_researcher_expertise_tags_table.php`
- `database/migrations/xxxx_create_researcher_expertise_tag_table.php` (pivot)

**Note:** These researcher migrations must be created in Phase 1 even if the researcher public routes are implemented in a later phase, because `research_publication_authors.researcher_id` and `research_centers.director_researcher_id` already reference the `researchers` table as nullable FKs.

**Verification commands:**
```bash
php artisan migrate --force
php artisan test --filter=ArchitectureGuardTest
```

---

### Phase 2: Public Research Landing & Publications

**Objective:** Implement the Research landing page and publications listing/detail pages with full caching, SEO, and service implementation.

**Files to create/change:**
- `app/Services/Research/ResearchPublicService.php` (implement `landingPageData`, `listPublications`, `publicationBySlug`, `latestPublications`)
- `app/Http/Controllers/Public/ResearchController.php` (methods: `index`, `publicationsIndex`, `publicationShow`)
- `routes/web.php` (add research routes for index, publications.index, publications.show)
- `resources/views/public/research/index.blade.php`
- `resources/views/public/research/publications/index.blade.php`
- `resources/views/public/research/publications/show.blade.php`
- `resources/css/frontend/research.css` (ported from frontend if present)
- `resources/js/alpine/researchPublications.js` (filter state Alpine component)
- Sitemap service extension for Research publication URLs
- Cache tag registration (verify tagged cache service covers new tags)

**Tests:**
- `tests/Feature/ResearchPublicRoutesTest.php` (route 200/404 checks)
- `tests/Unit/ResearchPublicServiceTest.php` (implement tests for `listPublications` with scope, `publicationBySlug` draft rejection)

**Verification commands:**
```bash
php artisan migrate --force
php artisan route:list | grep research
php artisan view:cache
npm run build
php artisan test --filter=ResearchPublicRoutesTest
```

---

### Phase 3: Projects, Themes, Centers

**Objective:** Implement projects, themes, centers listing/detail pages.

**Files to create/change:**
- `ResearchPublicService` — implement all remaining methods
- `ResearchController` — add methods: `projectsIndex`, `projectShow`, `themesIndex`, `themeShow`, `centersIndex`, `centerShow`
- Routes for projects, themes, centers
- Blade views for all above
- Sitemap extension for projects/themes/centers
- `database/seeders/ResearchSeeder.php` — if frontend has static research data domain files, seed them here

**Verification commands:**
```bash
php artisan test --filter=ResearchPublicRoutesTest
php artisan test --filter=ResearchPublicServiceTest
```

---

### Phase 4: Admin CMS Resources & Workflow Hardening

**Objective:** Implement all Filament resources and the full `ResearchAdminWorkflowService` with role enforcement, audit logs, and cache invalidation. This phase must produce the same hardening level as `NewsAdminWorkflowService`.

**Files to create/change:**
- `app/Services/Research/ResearchAdminWorkflowService.php` (full implementation)
- `app/Filament/Resources/ResearchPublicationResource.php` + Pages (List, Create, Edit)
- `app/Filament/Resources/ResearchProjectResource.php` + Pages
- `app/Filament/Resources/ResearchThemeResource.php` + Pages
- `app/Filament/Resources/ResearchCenterResource.php` + Pages
- `app/Filament/Resources/ResearcherResource.php` + Pages (List, Create, Edit)
- `app/AppServiceProvider` policy registration for `ResearchDomainPolicy`

**Tests:**
- `tests/Unit/ResearchAdminWorkflowServiceTest.php` (full implementation — cover: faculty_editor publish blocked, audit event fired, cache flushed, scheduled_at enforcement, cross-faculty restriction)

**Verification commands:**
```bash
php artisan test --filter=ResearchAdminWorkflowServiceTest
php artisan test --filter=ArchitectureGuardTest
```

---

### Phase 5: Static Sub-pages, Facilities Integration, SEO Hardening

**Objective:** Implement the four static Research sub-pages, the `/{locale}/facilities/{faculty}/research` page, complete SEO/citation meta output, and homepage block 06 research cards.

**Files to create/change:**
- Route additions for `research.office`, `research.conferences`, `research.library`, `research.policies`
- Blade views for static sub-pages (with CMS body + downloadable documents section)
- `FacultyPageService` and `FacultyController` updates for `faculty-research` page slug
- `FacultyModuleSeeder` addition for `faculty-research` page type
- Homepage controller/service update to call `ResearchPublicService::latestPublications(3, $locale)` for block 06
- Citation meta tags component/include in publication detail Blade view
- JSON-LD output for publication detail pages
- hreflang + canonical tags verification

**Verification commands:**
```bash
php artisan test --filter=ResearchPublicRoutesTest
php artisan route:list | grep facilities | grep research
npm run build
```

---

### Phase 6: Search, Filter, Scheduler

**Objective:** Implement DB full-text search for publications and projects, implement the scheduled publish command, verify filter URL behavior.

**Files to create/change:**
- `app/Console/Commands/ResearchScheduledPublishCommand.php`
- Registration in `routes/console.php` or `Console/Kernel` (Laravel 11 schedule)
- Verify FULLTEXT indexes exist on translation tables (add in Phase 1 migrations if not done)
- Filter state handling in `ResearchPublicService::listPublications()`
- `noindex` meta tag on filtered listing pages

**Tests:**
- Scheduler test: publication with past `scheduled_at` is published by command

**Verification commands:**
```bash
php artisan research:publish-scheduled  (or the actual artisan command name)
php artisan test --filter=Research
```

---

### Phase 7: Production Verification

**Objective:** Full test suite green. All acceptance criteria from Section 15 verified.

**Verification commands:**
```bash
php artisan migrate:fresh --seed
php artisan test  # full suite
php artisan route:list
php artisan view:cache
php artisan sitemap:generate  # or equivalent
npm run build
```

**Manual checks:**
- Visual review of Research pages in AR (RTL) and EN (LTR)
- Google Rich Results Test on a publication detail page
- View page source to verify citation meta tags
- Verify draft publication is 404 publicly
- Verify `faculty_editor` publish block server-side (not just UI)
- Verify audit log entry appears after publish

---

## 17. Open Questions

These questions require explicit user decisions. The spec above makes defensible default assumptions where decisions are not yet made, but the assumptions are called out here.

### Q1: `repository.spu.edu.sy` subdomain (FR-RES02)

**v5.0 says:** Separate subdomain `repository.spu.edu.sy` for the institutional repository.  
**Current assumption in this spec:** Path-based, within the main Laravel app at `/research/publications`.  
**Why it matters:** A separate subdomain would require a separate Laravel app or subdomain routing configuration. It also affects robots.txt, SEO strategy, and Google Scholar indexing setup.  
**Decision needed:** Subdomain or path-based for Phase 1? (Recommendation: path-based for Phase 1, subdomain migration in Phase 3 if needed.)

### Q2: Expert Finder — unified People Directory or Research-only?

**v5.0 says:** `/research/expert-finder` — searchable directory of all SPU academic staff.  
**Current assumption:** Deferred. Researcher profiles are partially built (author names only as strings).  
**Decision needed:** Should Expert Finder use the existing faculty staff records (FacultyHighlight?) or a new `researchers` table? This decision gates the `researcher_id` FK in `research_publication_authors`.

### Q3: `faculty_editor` publish rights for Research

**v5.0 FR-CMS09 says:** Faculty Editor scoped to own faculty.  
**News hardening pattern:** `faculty_editor` CANNOT publish.  
**This spec assumes:** Same restriction for Research — `faculty_editor` cannot publish publications or projects.  
**Decision needed:** Confirm this restriction applies to Research, or specify if Research requires a different approval model (e.g., `faculty_editor` can publish their own publications but not others).

### Q4: Research Centers vs Facilities Labs

**v5.0 defines:** `CT-LAB` (within Facilities, for physical labs) and `CT-RESEARCH-CENTER` (within Research, for research centers with mission/director/publications).  
**Current assumption:** These are separate entities. `research_centers` is a new table. Existing `faculty_labs` table is kept for Facilities.  
**Decision needed:** Should a Research Center be able to "claim" multiple Facilities Labs? If so, add a pivot table `research_center_faculty_labs`. If not, keep them separate.

### Q5: DOI import from external databases (CrossRef/ORCID API)

**v5.0 mentions** DOI in CT-PUBLICATION but does not specify import.  
**This spec assumes:** Manual entry of DOI via CMS. No CrossRef/ORCID API integration in Phase 1.  
**Decision needed:** Should Phase 3 include an "import by DOI" feature in the Filament resource (paste a DOI, auto-fill title/authors/journal/year from CrossRef)?

### Q6: PDF hosting strategy

**v5.0 says:** `Open-access PDF` in CT-PUBLICATION; FR-RES01 says "one downloadable PDF."  
**This spec assumes:** PDFs hosted in the Laravel media library (Spatie Media Library). Single PDF per publication.  
**Decision needed:** Are all PDFs hosted in the media library, or should some publications link to an external DOI/publisher URL only (no local PDF)? If both, the `citation_pdf_url` should only emit when a local PDF is hosted.

### Q7: Publication type taxonomy

**v5.0 CT-PUBLICATION says:** "Journal/conference" (implying two types).  
**This spec defines:** `ENUM('journal_article','conference_proceeding','thesis','dissertation','book_chapter','working_paper','report')`.  
**Decision needed:** Confirm this enum is complete or revise. Missing types? Is `thesis` different from `dissertation` in SPU's context?

### Q8: Seed data requirement

**The Study Plan lesson:** frontend data domain files must be seeded into the DB.  
**Unknown:** Whether `src/data/domains/` contains a research/publications data domain file.  
**Decision needed:** After inspecting `src/data/domains/` — if a static publications file exists, is it seed data for development only, or are those real SPU publications that must appear at launch?

### Q9: Google Scholar indexing confirmation

**KPI-09 says:** 100% of publications indexed in GS within 90 days.  
**This requires:** robots.txt allows Googlebot on publication detail pages AND citation meta tags are correctly formatted.  
**Action item (not a code decision):** After Phase 2 is deployed to staging, verify citation tags with Google's guidelines and submit the sitemap to Google Search Console. This is an operational step, not a development task.

### Q10: Conferences detail pages — separate or linked to CT-EVENT?

**v5.0 FR-RES05:** Conferences page shows past + upcoming conferences, proceedings downloadable.  
**Current assumption:** `research/conferences` is a static CMS-managed page (Phase 5) with a downloadable files section. No dynamic conference entity model.  
**Decision needed:** If SPU regularly hosts multiple conferences with separate proceedings pages, this should be a `research_conferences` entity (Phase 3). If it's one page updated periodically, a static CMS page is sufficient.

---

### Q11: Scopus Author ID Auto-Lookup (Phase 3 candidate)

**Current spec:** `scopus_id` is stored manually in the `researchers` table. The Filament `ResearcherResource` shows a format hint and a link preview but does not validate against or fetch from Scopus.  
**Potential Phase 3 feature:** Add a "Lookup Scopus" button in the Filament researcher edit form that, given the `scopus_id`, calls the Elsevier Scopus Author API (`https://api.elsevier.com/content/author/author_id/{id}`) to verify the ID and optionally pre-fill name, affiliation, and publication count.  
**Decision needed:**
1. Does SPU have or intend to obtain an Elsevier API key for Scopus access?
2. If yes, should Phase 3 include a "Verify Scopus ID" helper in Filament (read-only lookup, not a sync)?
3. Should the `citation_count` field on publications be auto-populated from Scopus citation data in a future phase?  
**Current assumption:** Manual entry only. No Elsevier API integration in Phase 1 or 2.

---

### Q12: Open Access Policy & `is_open_access` Default

**Current spec:** `is_open_access BOOLEAN DEFAULT TRUE` — new field added to `research_publications`.  
**Rationale:** Webometrics and academic indexers (including Scopus) give weight to open access content. Most university institutional repositories default publications to open access unless a publisher embargo applies.  
**Decision needed:**
1. Should the default be `TRUE` (assume open unless publisher restricts) or `FALSE` (require explicit opt-in)?
2. Should the Filament publication form show a visible "Open Access" toggle with a tooltip explaining the DC.rights implication?
3. If a publication has a DOI pointing to a paywalled journal, should `is_open_access` be forced to `FALSE` or left to the editor's discretion?  
**Current assumption:** Default `TRUE`, visible toggle in Filament, editor's discretion for paywalled DOIs.

---

## Recommended Next Prompt for Implementation (Phase 1)

Paste the following into your AI coding agent to begin Phase 1:

---

```
You are implementing Phase 1 of the Research module for the SPU website (spu.edu.sy).

Repository: C:\Users\hamza\SPU_Website
Branch: admissions
Stack: Laravel 12 / PHP 8.2 / MySQL 8 / Filament v3

Your task is strictly Phase 1: data model and service foundation. Do not create public routes, controllers, or Blade views yet.

Follow these architecture rules without exception:
- No polymorphic translation tables. Use explicit *_translations tables.
- DTOs in app/DTOs/Research/ — PHP 8.2 final readonly classes.
- Contracts in app/Contracts/Research/.
- Services in app/Services/Research/ — stub only, all methods throw \RuntimeException('Not implemented').
- Register bindings in AppServiceProvider.
- Register ResearchDomainPolicy in AppServiceProvider.
- No Eloquent models returned from public service interface methods.
- Models contain only relationships, scopes, casts, and lightweight helpers.

Create the following migrations (use php artisan make:migration, then implement the schema):
1. create_research_themes_table
2. create_research_theme_translations_table  
3. create_research_publications_table
4. create_research_publication_translations_table (include FULLTEXT INDEX on title, abstract, keywords)
5. create_research_publication_authors_table
6. create_research_publication_theme_table (pivot)
7. create_research_projects_table
8. create_research_project_translations_table
9. create_research_project_theme_table (pivot)
10. create_research_centers_table
11. create_research_center_translations_table
12. create_researchers_table
13. create_researcher_translations_table (include FULLTEXT INDEX on name, bio)
14. create_researcher_expertise_tags_table
15. create_researcher_expertise_tag_table (pivot: researcher_id + researcher_expertise_tag_id)

Schema for each table is in RESEARCH_MODULE_SPEC.md Section 4.

Create Eloquent models:
- app/Models/Research/ResearchTheme.php
- app/Models/Research/ResearchPublication.php
- app/Models/Research/ResearchProject.php
- app/Models/Research/ResearchCenter.php
- app/Models/Research/Researcher.php
- app/Models/Research/ResearcherExpertiseTag.php

Each model must implement HasMedia (Spatie) where applicable, have the correct relationships (translations hasMany, authors hasMany for publications, themes belongsToMany, expertiseTags belongsToMany for researchers, etc.), a published() scope, and no business logic.

Create these DTOs (final readonly, PHP 8.2):
ResearchLandingPageDTO, ResearchStatsDTO, ResearchPublicationCardDTO, ResearchPublicationDetailDTO, 
ResearchAuthorDTO, ResearchCitationMetaDTO, ResearchProjectCardDTO, ResearchProjectDetailDTO,
ResearchInvestigatorDTO, ResearchThemeDTO, ResearchThemeDetailDTO, ResearchCenterCardDTO, 
ResearchCenterDetailDTO, FacultyResearchHighlightsDTO, ResearchFilterDTO,
ResearchPublicationWriteDTO, ResearchAuthorWriteDTO, ResearchProjectWriteDTO, 
ResearchThemeWriteDTO, ResearchCenterWriteDTO,
ResearcherCardDTO, ResearcherDetailDTO, ResearcherExpertiseTagDTO, ResearcherFilterDTO, ResearcherWriteDTO

Field definitions are in RESEARCH_MODULE_SPEC.md Section 7.

Create:
- app/Contracts/Research/ResearchPublicServiceInterface.php
- app/Contracts/Research/ResearchAdminWorkflowServiceInterface.php
- app/Services/Research/ResearchPublicService.php (stub)
- app/Services/Research/ResearchAdminWorkflowService.php (stub)
- app/Policies/ResearchDomainPolicy.php

Method signatures are in RESEARCH_MODULE_SPEC.md Sections 6.2 and 6.3.

Register in AppServiceProvider:
- ResearchPublicServiceInterface → ResearchPublicService
- ResearchAdminWorkflowServiceInterface → ResearchAdminWorkflowService
- ResearchDomainPolicy for ResearchPublication, ResearchProject, ResearchTheme, ResearchCenter models

Create a skeleton test file:
- tests/Unit/ResearchAdminWorkflowServiceTest.php

After completing all the above, run:
php artisan migrate --force
php artisan test --filter=ArchitectureGuardTest

Both must pass before Phase 1 is complete. Fix any architecture violations before proceeding.
```

---

*End of Research Module Production Requirements — Refined Specification*  
*Version 1.0 — Based on SPU_Requirements_v5.0 (April 2026) + current codebase state analysis*
