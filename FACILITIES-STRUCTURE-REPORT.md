# SPU Website v5.0 — Facilities Section Restructuring Report

**Date:** May 4, 2026  
**Current Status:** v4.0 Faculties structure exists; v5.0 Facilities restructure needed  
**Impact Level:** CRITICAL — P1 Priority

---

## 1. What Currently Exists (v4.0)

### Current Implementation
- **File:** `faculty.html` (root directory)
- **Current URL Pattern:** `/faculty.html` 
- **Current Page Structure:** Single faculties **catalog** page
- **Fragments Used:**
  - `catalog-hero.html` — Hero section
  - `catalog-facts.html` — Faculty facts
  - `catalog-model.html` — Academic model description
  - `hero.html` — Secondary hero
  - `content.html` — General content
  - `dean.html` — Dean information
  - `stats.html` — Statistics section
  - `highlights.html` — Highlights
  - `additional.html` — Additional content

**Current Limitations:**
- Single "faculties" landing page with all faculties listed
- No individual facility hub pages
- No dedicated sub-pages per facility (overview, departments, study plans, etc.)
- No alumni listings per facility
- No valedictorian tracking per facility
- No facility-specific research or projects pages

### Directory Structure (About Section)
- `about/directorates.html` — Central Directorates (NOT the same as Facilities)
- `about/directorates/` — Sub-directory for specific directorate pages:
  - `it-services.html`
  - `public-relations.html`
  - `scientific-research.html`
  - `student-affairs.html`

**Note:** Central Directorates are separate from Facilities/Faculties. Directorates are administrative units; Facilities are academic schools/colleges.

---

## 2. What v5.0 Requires (Facilities Section)

### v5.0 Navigation Change
- **Old (v4.0):** "Faculties & Programs" → `/faculty.html`
- **New (v5.0):** "Facilities" → `/facilities` (clean URL structure)

### v5.0 URL Architecture

```
/facilities                              ← Landing page
/facilities/artificial-intelligence/     ← Facility 1 Hub
/facilities/artificial-intelligence/overview
/facilities/artificial-intelligence/departments
/facilities/artificial-intelligence/study-plan
/facilities/artificial-intelligence/calendar
/facilities/artificial-intelligence/research
/facilities/artificial-intelligence/projects
/facilities/artificial-intelligence/alumni
/facilities/artificial-intelligence/valedictorians
/facilities/artificial-intelligence/labs              (optional)

/facilities/business-administration/    ← Facility 2 Hub
  [... 10 sub-pages per facility ...]

/facilities/dentistry/                  ← Facility 3 Hub (+ labs)
  [... 10 sub-pages ...]
  /facilities/dentistry/labs            (conditional - Dentistry only)

/facilities/pharmacy/                   ← Facility 4 Hub (+ training)
  [... 10 sub-pages ...]
  /facilities/pharmacy/training         (conditional - Pharmacy only)

/facilities/medicine/                   ← Facility 5 Hub
  [... 10 sub-pages ...]

/facilities/building-construction-engineering/ ← Facility 6 Hub
  [... 10 sub-pages ...]
```

---

## 3. What Each Page Should Contain

### 3.1 `/facilities` — Main Landing Page

**Requirement ID:** FR-FAC-LP01 through FR-FAC-LP04  
**Priority:** MUST (P1)

**Content/Components:**
- [ ] Hero section with introduction to SPU academic model
- [ ] "Explore Our Facilities" introductory text
- [ ] Facility grid — 6 facility cards:
  - Facility image
  - Facility name
  - Short descriptor (e.g., "Cutting-edge AI research & applied intelligence")
  - "Explore" CTA button → links to facility hub
- [ ] Academic model section (CMS-editable) describing:
  - Clinical teaching approach
  - Applied/research-led methodology
  - International partnerships
  - Industry collaboration
- [ ] Stats strip (aggregated across all facilities):
  - Total programs offered
  - Total research labs
  - Total enrolled students
- [ ] Accessibility: keyboard navigable cards, responsive 320px–1440px+

**Example Card Data:**
```
Card 1: Artificial Intelligence
  Image: [Faculty photo]
  Name: "Artificial Intelligence"
  Descriptor: "Cutting-edge AI research, machine learning applications, data science"
  Button: "Explore AI Faculty"
```

---

### 3.2 `/facilities/{facility}/` — Facility Hub Page (6 total)

**Requirement IDs:** FR-FAC-HUB01 through FR-FAC-HUB04  
**Priority:** MUST (P1)

**URL Slugs (must match exactly):**
1. `/facilities/artificial-intelligence/`
2. `/facilities/business-administration/`
3. `/facilities/dentistry/`
4. `/facilities/pharmacy/`
5. `/facilities/medicine/`
6. `/facilities/building-construction-engineering/`

**Content/Components (per Hub):**
- [ ] Hero section with facility image + name
- [ ] Quick facts strip (CMS-editable):
  - Enrolled students count
  - Number of departments
  - Number of programs
- [ ] Navigation card grid to all sub-pages:
  - Overview
  - Departments
  - Study Plan
  - Calendar
  - Research
  - Projects
  - Alumni
  - Valedictorians
  - Labs (Dentistry only)
  - Training (Pharmacy only)
- [ ] Featured content section (optional):
  - 1 featured research item
  - 1 featured student project
  - 1 featured alumni story

---

### 3.3 `/facilities/{facility}/overview` — Facility Overview Page

**Requirement IDs:** FR-FAC-OV01 through FR-FAC-OV03  
**Priority:** MUST

**Content Required:**
- [ ] Facility description (rich text, AR + EN):
  - Mission/vision statement
  - Facility overview paragraph(s)
  - Key achievements or accreditations
- [ ] Dean message section:
  - Dean photo (profile picture)
  - Dean full name (AR + EN)
  - Dean title
  - Signed message/welcome text
  - Contact email
- [ ] Facility council/leadership listing (using CT-PERSON):
  - Faculty council members
  - Department heads
  - Program coordinators
  - Photo + name + title per person
- [ ] Breadcrumb: Home > Facilities > {Facility Name} > Overview
- [ ] Language: AR + EN (independent fields)

**Example Structure:**
```
Overview Page: Medicine Faculty
├─ Hero/Banner
├─ Mission Statement
├─ Faculty Overview (2–3 paragraphs)
├─ Key Stats (students, programs, departments)
├─ Dean's Message
│  ├─ Photo
│  ├─ Name & Title
│  └─ Message text
├─ Faculty Council
│  ├─ Council Member 1 (photo, name, title)
│  ├─ Council Member 2
│  └─ ...
└─ Breadcrumbs
```

---

### 3.4 `/facilities/{facility}/departments` — Departments Page

**Requirement ID:** FR-FAC-DEP01  
**Priority:** MUST

**Content Required:**
- [ ] All departments within facility listed with:
  - Department name (AR + EN)
  - Short description (what the department teaches/researches)
  - Degree types offered (Bachelor, Master, PhD, Diploma)
  - Department head name + photo (link to CT-PERSON profile)
  - Number of programs offered
- [ ] Organized layout: grid or list format
- [ ] CTA per department: "View department details" or "View programs"
- [ ] Breadcrumb: Home > Facilities > {Facility} > Departments
- [ ] Language: AR + EN

**Example Structure:**
```
Medicine Faculty — Departments
├─ Anatomy Department
│  ├─ Photo: [Department head]
│  ├─ Description: "Study of human body structures..."
│  ├─ Head: Dr. Ahmad Al-Hassan
│  ├─ Degrees: Bachelor, Master
│  └─ Programs: 3
├─ Physiology Department
│  ├─ Photo: [Department head]
│  ├─ Description: "Study of body functions..."
│  ├─ Head: Dr. Layla Al-Rashid
│  ├─ Degrees: Bachelor, Master, PhD
│  └─ Programs: 4
└─ ...
```

---

### 3.5 `/facilities/{facility}/study-plan` — Study Plan & Programs Page

**Requirement IDs:** FR-FAC-ST01 through FR-FAC-ST03  
**Priority:** MUST

**Content Required:**
- [ ] Programs grouped by:
  - Department
  - Level (Bachelor, Master, PhD)
- [ ] Per program:
  - Program name (AR + EN)
  - Duration (e.g., "4 years")
  - Language(s) of instruction (Arabic, English, Bilingual)
  - Credit hours
  - Degree awarded
  - Program description
- [ ] Study plan documents (downloadable PDFs):
  - Course list per semester
  - Course specifications
  - Learning outcomes
  - Each document:
    - Dated (issue date)
    - Versioned (v1.0, v1.1, v2.0, etc.)
    - Last reviewed date
- [ ] Tuition information per program (linked or embedded)
- [ ] Admission requirements per program (linked or embedded)
- [ ] "Download Study Plan" buttons for each program
- [ ] Breadcrumb: Home > Facilities > {Facility} > Study Plan
- [ ] Language: AR + EN

**Example Structure:**
```
Medicine Faculty — Study Plans
├─ Bachelor in Medicine
│  ├─ Duration: 6 years
│  ├─ Language: English + Arabic
│  ├─ Total Credits: 242
│  ├─ Study Plan PDF (v2.1, Last reviewed: March 2026)
│  ├─ Course Specifications PDF
│  └─ Tuition: [linked]
├─ Master in Surgery
│  ├─ Duration: 3 years
│  ├─ Language: English
│  ├─ Study Plan PDF (v1.0, Last reviewed: Jan 2026)
│  └─ [...]
```

---

### 3.6 `/facilities/{facility}/calendar` — Facility Academic Calendar

**Requirement IDs:** FR-FAC-CAL01 through FR-FAC-CAL02  
**Priority:** MUST

**Content Required:**
- [ ] Facility-specific academic calendar for current academic year:
  - Semester start/end dates
  - Registration deadlines
  - Exam periods
  - Holiday breaks
  - Add/drop deadlines
  - Grade submission deadlines
- [ ] Interactive calendar display
- [ ] Monthly or timeline view
- [ ] Downloadable calendar PDF:
  - Current academic year only
  - All key dates included
  - Printable format (A4)
  - Available in AR + EN
- [ ] "Download Calendar" button
- [ ] Last updated date (auto-tracked from CMS)
- [ ] Language: AR + EN

---

### 3.7 `/facilities/{facility}/research` — Facility Research Output

**Requirement ID:** FR-FAC-RES01  
**Priority:** MUST

**Content Required:**
- [ ] List of research publications from this facility:
  - Publication title (AR + EN)
  - Author(s) — linked to CT-PERSON profiles
  - Publication date (explicit date)
  - Journal/conference name
  - DOI link (if available)
  - Abstract (visible without login)
  - Full PDF (downloadable)
- [ ] Organized by:
  - Year (newest first)
  - Or by department
- [ ] Search/filter by author, year, keyword
- [ ] "Browse all publications" CTA → links to central Research section (FR-RES01)
- [ ] Pagination if ≥ 10 items
- [ ] Breadcrumb: Home > Facilities > {Facility} > Research
- [ ] Language: AR + EN

---

### 3.8 `/facilities/{facility}/projects` — Student Projects Showcase

**Requirement ID:** FR-FAC-PRJ01  
**Priority:** SHOULD (minimum 6 projects at launch per facility)

**Content Required:**
- [ ] Grid of student projects:
  - Project title (AR + EN)
  - Project description (100–200 words)
  - Student name(s)
  - Supervising faculty member (CT-PERSON link)
  - Year/semester completed
  - Project category (e.g., "Capstone", "Research", "Internship")
  - Media (project photo, video embed, or both)
- [ ] Minimum projects: ≥ 6 per facility at launch
- [ ] Filter/search by category or year
- [ ] Responsive grid layout (2–3 columns)
- [ ] Breadcrumb: Home > Facilities > {Facility} > Projects
- [ ] Language: AR + EN (independent descriptions)
- [ ] Add/edit by: Faculty Editor (scoped to own facility)

**Example:**
```
AI Faculty — Student Projects
├─ Project 1: "Facial Recognition System for Security"
│  ├─ Students: Ahmed Hassan, Fatima Al-Rashid
│  ├─ Supervisor: Dr. Mohammad Farah
│  ├─ Category: Capstone
│  ├─ Year: 2026
│  ├─ Description: [...]
│  └─ Media: [video embed]
├─ Project 2: "Natural Language Processing in Arabic"
│  └─ [...]
```

---

### 3.9 `/facilities/{facility}/alumni` — Alumni Listings

**Requirement IDs:** FR-FAC-ALM01 through FR-FAC-ALM03  
**Priority:** MUST

**Content Required (per alumni card):**
- [ ] Alumni photo (profile picture)
- [ ] Full name (AR + EN)
- [ ] Graduation year
- [ ] Program/degree completed
- [ ] Current role/job title
- [ ] Current company/organization
- [ ] Optional: LinkedIn profile link
- [ ] Optional: Alumni quote/success story

**Page Features:**
- [ ] Grid layout (3–4 columns responsive)
- [ ] Filters (optional):
  - By graduation year
  - By program
  - Dynamic filtering without full page reload
- [ ] "Clear filters" option to restore full listing
- [ ] Pagination if ≥ 20 alumni
- [ ] Search by name or company
- [ ] Breadcrumb: Home > Facilities > {Facility} > Alumni
- [ ] Language: AR + EN
- [ ] Managed by: Faculty Editor (scoped to own facility)

**Content Type:** Uses CT-ALUMNI-STORY with fields:
- Full name (AR + EN) — mandatory
- Photo — mandatory
- Graduation year — mandatory
- Program/Degree — mandatory (FK to CT-PROGRAM)
- Current role — mandatory
- Current company — mandatory
- Company link — optional
- Alumni story/quote — optional
- Story visibility — Faculty Editor can manage

---

### 3.10 `/facilities/{facility}/valedictorians` — Top Scholars Listing

**Requirement IDs:** FR-FAC-VAL01 through FR-FAC-VAL04  
**Priority:** MUST

**Content Required (per valedictorian card):**
- [ ] Photo (profile picture) — mandatory
- [ ] Full name (AR + EN) — mandatory
- [ ] Program/degree — mandatory
- [ ] Academic semester (First/Second) — mandatory
- [ ] Academic year — mandatory (2025, 2026, etc.)
- [ ] GPA — optional
- [ ] Honors/distinction (e.g., "With Distinction", "With High Distinction") — optional

**Page Features:**
- [ ] Organized chronologically by:
  - Academic year (newest first)
  - Then by semester (First/Second)
- [ ] Grouped sections per year:
  ```
  2026 — Academic Year
  ├─ First Semester Valedictorians
  │  ├─ Card 1: [Photo | Name | Program | GPA]
  │  ├─ Card 2
  ├─ Second Semester Valedictorians
  │  ├─ Card 1
  │  ├─ Card 2
  
  2025 — Academic Year
  ├─ First Semester
  ├─ Second Semester
  ```
- [ ] Card grid layout (2–3 columns)
- [ ] Breadcrumb: Home > Facilities > {Facility} > Valedictorians
- [ ] Language: AR + EN
- [ ] Managed by: Faculty Editor (scoped to own facility)

**Content Type:** CT-VALEDICTORIAN with fields:
- Full name (AR + EN) — mandatory
- Photo — mandatory
- Program (FK to CT-PROGRAM) — mandatory
- Semester (dropdown: First/Second) — mandatory
- Academic year (number: 2025, 2026, etc.) — mandatory
- GPA (decimal: 3.50, 3.75, etc.) — optional
- Honors (text) — optional
- Facility (FK to CT-FACILITY) — mandatory

---

### 3.11 `/facilities/dentistry/labs` — Dentistry Labs (CONDITIONAL)

**Requirement ID:** FR-FAC-LAB01  
**Priority:** SHOULD

**When Required:** Dentistry facility only

**Content Required (per lab card):**
- [ ] Lab name
- [ ] Lab photo(s)
- [ ] Equipment description:
  - List of equipment with capabilities
  - Or narrative description
- [ ] Number of workstations
- [ ] Supervising faculty member (CT-PERSON link)
- [ ] Lab hours / access process
- [ ] Minimum labs at launch: ≥ 2 labs

**Example Labs:**
```
Dentistry Faculty — Labs
├─ Operative Lab
│  ├─ Photo: [lab setup image]
│  ├─ Equipment: "20 dental chairs, CAD/CAM units, digital impression systems"
│  ├─ Workstations: 25
│  ├─ Supervisor: Dr. Hana Al-Khatib
│  └─ Access: By appointment or scheduled classes
├─ Prosthodontics Lab
│  └─ [...]
```

---

### 3.12 `/facilities/pharmacy/training` — Pharmacy Training / Apprenticeship (CONDITIONAL)

**Requirement ID:** FR-FAC-TRN01  
**Priority:** SHOULD

**When Required:** Pharmacy facility only

**Content Required:**
- [ ] Training/apprenticeship program overview:
  - Program name
  - Duration (e.g., "12 weeks", "1 year")
  - Required prerequisites
  - Program objectives
- [ ] Structure description:
  - Classroom vs. practical ratio
  - Partner organizations/pharmacies
  - Hospital partnerships
- [ ] Application process:
  - Who can apply
  - Eligibility criteria
  - How to apply (form link or contact)
  - Application deadline(s)
- [ ] Partner list:
  - Community pharmacies
  - Hospital pharmacies
  - Clinic pharmacies
  - Industry partners
- [ ] Career pathways/outcomes
- [ ] Contact person (supervisor or program coordinator)
- [ ] Language: AR + EN

---

### 3.13 Breadcrumb Navigation (All Facility Pages)

**Requirement ID:** FR-FAC-NAV02  
**Priority:** MUST

**Format (Example):**
```
Home > Facilities > Medicine > Study Plan
Home > Facilities > Dentistry > Alumni
Home > Facilities > AI > Overview
```

**Requirements:**
- [ ] Display on all `/facilities/*` pages
- [ ] All items clickable except current page
- [ ] Correct hierarchy
- [ ] RTL-compatible in Arabic (order may reverse)
- [ ] Responsive (visible on mobile)

---

## 4. Missing Pieces — What Needs to Be Created

### 4.1 New Pages to Create (61 total)

| Category | Count | Status |
|---|---|---|
| `/facilities` landing page | 1 | ✗ Missing |
| Facility hubs (6 facilities × 1 hub) | 6 | ✗ Missing |
| Facility sub-pages (6 × 9 standard) | 54 | ✗ Missing |
| Conditional sub-pages (2: labs, training) | 2 | ✗ Missing |
| **TOTAL** | **63** | **0% complete** |

### 4.2 Files to Rename/Restructure

| Current | Should Be | Change Type |
|---|---|---|
| `faculty.html` | Migrate to `/facilities` structure | Architecture change |
| `src/fragments/pages/faculties/` | Move/reorganize to `/facilities` | Rename directory |

### 4.3 Required Content Types (CMS)

These must be structured in the CMS to manage facility content:

- [ ] **CT-FACILITY** — Facility/School/College profile
  - Name (AR + EN)
  - Slug (e.g., "artificial-intelligence")
  - Description
  - Dean (FK to CT-PERSON)
  - Founded year
  - Accreditation badges
  - Contact email

- [ ] **CT-PROGRAM** — Degree/Program
  - Name (AR + EN)
  - Facility (FK to CT-FACILITY)
  - Department (FK to CT-DEPARTMENT)
  - Level (Bachelor, Master, PhD, Diploma)
  - Duration
  - Language of instruction
  - Credit hours
  - Learning outcomes
  - Study plan PDF
  - Tuition

- [ ] **CT-PERSON** — Staff/Researcher (used for: Dean, Department head, Faculty member)
  - Full name (AR + EN)
  - Photo
  - Title (AR + EN)
  - Department (FK)
  - Email
  - Office hours
  - Research interests
  - ORCID iD, Google Scholar URL, Scopus ID

- [ ] **CT-ALUMNI-STORY** — Alumni profile
  - Name (AR + EN)
  - Photo
  - Graduation year
  - Program (FK to CT-PROGRAM)
  - Current role
  - Current company
  - Success story/quote
  - Consent to publish

- [ ] **CT-VALEDICTORIAN** — Top scholar
  - Name (AR + EN)
  - Photo
  - Program (FK to CT-PROGRAM)
  - Semester (First/Second)
  - Academic year
  - GPA (optional)

- [ ] **CT-LAB** — Research/teaching lab
  - Name (AR + EN)
  - Facility (FK)
  - Photos
  - Equipment description
  - Supervising faculty (FK to CT-PERSON)

- [ ] **CT-PUBLICATION** — Research publication
  - Title (AR + EN)
  - Authors (FK to CT-PERSON, multiple)
  - Journal/Conference
  - Year
  - DOI
  - PDF
  - Abstract (AR + EN)

- [ ] **CT-PROJECT** — Student project
  - Title (AR + EN)
  - Description (AR + EN)
  - Student names
  - Supervising faculty (FK to CT-PERSON)
  - Year/semester
  - Category
  - Media (image/video)

---

## 5. URL Mapping — v4.0 to v5.0

### Current (v4.0)
```
/faculty.html                           ← Faculties catalog page
/[faculty-subdomain]/                   ← Subdomain-based faculty pages (legacy)
```

### Required (v5.0)
```
/facilities                             ← Facilities landing page
/facilities/artificial-intelligence
/facilities/artificial-intelligence/overview
/facilities/artificial-intelligence/departments
/facilities/artificial-intelligence/study-plan
/facilities/artificial-intelligence/calendar
/facilities/artificial-intelligence/research
/facilities/artificial-intelligence/projects
/facilities/artificial-intelligence/alumni
/facilities/artificial-intelligence/valedictorians

[... repeat for other 5 facilities ...]
```

### 301 Redirects Needed
- `/faculty.html` → `/facilities`
- `/[faculty-subdomain]/*` → `/facilities/[facility-slug]/*`

---

## 6. Content Governance — Facilities Section

**Ownership Structure:**
- **Facility Owner** — Department Head or Facility Director (responsible for content accuracy)
- **Facility Editor** — CMS user with scoped access to edit only their own facility

**CMS Scoping:**
- Faculty Editor A can only edit: AI facility pages
- Faculty Editor B can only edit: Medicine facility pages
- Super Admin can edit all facilities

**Content Review SLAs:**
- Study plans: Reviewed & re-approved before each academic year
- Alumni: Updated annually (minimum)
- Valedictorians: Updated within 2 weeks of semester results
- Research: Updated as publications released
- Projects: Updated annually

---

## 7. Implementation Checklist

### Phase 1: Structure & Naming
- [ ] Create `/facilities` directory structure
- [ ] Create `/facilities.html` (or equivalent) for landing page
- [ ] Create 6 facility hub pages
- [ ] Create subdirectories for each facility (9 sub-pages per facility)
- [ ] Rename/migrate `faculty.html` fragments to new structure
- [ ] Rename `student-life.html` → `campus-life.html`
- [ ] Rename `services.html` → `e-services.html`

### Phase 2: Content Types
- [ ] Define CT-FACILITY in CMS
- [ ] Define CT-PROGRAM in CMS
- [ ] Define CT-PERSON in CMS
- [ ] Define CT-ALUMNI-STORY in CMS
- [ ] Define CT-VALEDICTORIAN in CMS
- [ ] Define CT-LAB in CMS
- [ ] Define CT-PUBLICATION in CMS
- [ ] Define CT-PROJECT in CMS

### Phase 3: Content Governance
- [ ] Assign Facility Owners for each of 6 facilities
- [ ] Assign Faculty Editors for each facility
- [ ] Set up CMS scoping rules
- [ ] Create ownership matrix document
- [ ] Define content review SLAs

### Phase 4: Navigation Integration
- [ ] Update header navigation dropdown: "Facilities"
- [ ] Add all 6 facilities to dropdown menu
- [ ] Test dropdown links
- [ ] Update breadcrumb logic for all `/facilities/*` pages

### Phase 5: Data Migration
- [ ] Map v4.0 faculty content → v5.0 structure
- [ ] Gather content for all facility pages:
  - Dean messages (6)
  - Faculty council listings (6)
  - Department descriptions (6+ depts per facility)
  - Study plans (6+ programs)
  - Alumni data (min. 5–10 per facility)
  - Valedictorians (3–5 per facility per year)
  - Research publications (5+ per facility)
  - Student projects (6+ per facility)
  - Lab descriptions (Dentistry)
  - Training program description (Pharmacy)

### Phase 6: Testing & Launch
- [ ] Test all 63 facility pages on desktop & mobile
- [ ] Test breadcrumb navigation on all pages
- [ ] Test filters (alumni by year/program, etc.)
- [ ] Test document downloads (study plan PDFs)
- [ ] Test language switching (AR ↔ EN) on all facility pages
- [ ] Test keyboard navigation
- [ ] Validate accessibility (WCAG 2.1 AA)
- [ ] Set up 301 redirects for legacy URLs
- [ ] Create 30-day parallel run (old site read-only)

---

## 8. Summary

| Aspect | Current (v4.0) | Required (v5.0) | Gap |
|---|---|---|---|
| **Landing Page** | 1 (`faculty.html`) | 1 (`/facilities`) | Rename + restructure |
| **Facility Hubs** | 0 | 6 | **Create 6 pages** |
| **Sub-pages per Facility** | 0 | 9–10 | **Create 54–60 pages** |
| **Total Facility Pages** | 1 | 63–65 | **Create 62–64 pages** |
| **CMS Content Types** | 0 defined | 8 required | **Define 8 types** |
| **Ownership Matrix** | None | Required | **Create & document** |
| **Accreditation** | Partial | Full audit needed | **Complete audit** |

---

**Launch Readiness:** 0% — Entire v5.0 Facilities section must be built from current structure.  
**Estimated Effort:** 4–6 weeks for complete implementation + testing.
