SYRIAN PRIVATE UNIVERSITY
spu.edu.sy

Official Website — Requirements Database
v5.0 — Navigation Architecture Redesign
Version	5.0  (supersedes v4.0)
Date	April 2026
Status	Approved for Build
Based on	SPU_Requirements_v4_Final.docx
 
0.  How to Read This Document
This is the single authoritative requirements specification for the SPU website redesign. It supersedes v4.0. Every requirement carries an ID, Title, Description with Acceptance Criteria (AC), Priority, and Tag.

Priority	Meaning
MUST	Non-negotiable for v1.0 go-live. Failure blocks launch.
SHOULD	High value. Must have documented reason if deferred to v1.1.
REC	Best-practice enhancement. Can move to v1.2.

Tag	Type
FR	Functional Requirement
NFR	Non-Functional Requirement (performance, security, accessibility, SEO, i18n, reliability)
GOV	Governance — editorial ownership, workflow, standards
CT	Structured Content Type
KPI	Analytics / Success Metric
MIG	Migration — URL mapping, redirects, archive
I18N	Internationalisation / translation operations
 
1.  Navigation Architecture — v5.0 Model
The v5.0 navigation model replaces the v4.0 mega-menu / anchor-link approach. The new model works as follows:

•	Clicking top-level header item navigates to a dedicated landing page at its own URL (e.g. /about, /admissions).
•	top-level items could also have a dropdown menu listing its sub-pages, allowing users to jump directly to a specific sub-page without first visiting the landing page.
•	Landing pages are full content pages with a hero section and overview content — not redirects or anchor-scroll pages.
•	The dropdown appears on hover/tap and is keyboard accessible.

Navigation principle: Click header label → landing page at /slug. Hover header label → dropdown with sub-page links. Both routes work independently.

1.1  Top-Level Navigation Items — v5.0
Header Item	Landing Page URL
About	/about
Admissions	/admissions
Facilities	/facilities
Research	/research
Campus Life	/campus-life
E-Services	/e-services
News	/news
Contact	/contact

Note: 'Faculties & Programs' from v4.0 is renamed 'Facilities' in v5.0. See Section 7 for Facilities placeholder requirements.

1.2  Utility Navigation (Persistent — all pages)
Utility Item	Behaviour
Language Switcher (AR / EN)	Always visible. Switches page language in place. No 404 on switch.
Search	Expands to search bar. Live suggestions after 2 characters. Cmd+K / Ctrl+K shortcut.
Apply	High-contrast CTA button. Routes to /admissions/how-to-apply. Visible on all pages.
Student Portal	Links to Electronic Student Gate. Opens in new tab.
Staff Access	Links to staff portal / CMS login. Visually distinct from public nav.
Emergency Notice	Conditional — shown only when active. High-contrast banner above nav.

1.3  Dropdown Sub-Pages per Header Item
Each top-level item has a dropdown listing its sub-pages. Sub-pages are full pages at their own URLs. The dropdown appears on hover/tap and is keyboard navigable.

Header Item	Dropdown Sub-Pages
About	History & Founding · Leadership · Central Directorates · Partnerships
Admissions	Admission Requirements · Tuition & Fees · How to Apply · Transfer & International · Academic Calendar · Documents Checklist · FAQs
Facilities	PLACEHOLDER — see Section 7
Research	Research Office · Publications · Research Centers & Labs · Expert Finder · Conferences · Library · Policies & Ethics
Campus Life	Campus Services · Transport · Health & Insurance · Clubs & Activities · · Career Development · Community Service · University Hospital · Dental Clinics
E-Services	Student Portal · Appeals & Forms · Staff Email 
News	News · Announcements · Events Calendar · Media Gallery · Press Room
Contact	Contact Information · Campus Map
 
2.  Navigation Functional Requirements
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-NAV01	Global Navigation Bar	Persistent on every page. SPU logo links to homepage. 8 top-level items + utility nav. Apply CTA button always visible. Language switcher. Sticky on scroll. Mobile: hamburger with full nav tree. RTL layout in Arabic. AC: nav on every page; Apply CTA visible at all viewport sizes; hamburger opens correctly; RTL verified in Arabic; sticky behaviour verified on desktop and mobile.	MUST	FR
FR-NAV02	Top-Level Item → Landing Page	Clicking any of the 8 top-level header labels navigates to a dedicated landing page at its own URL. No anchor-scroll. No redirect to homepage. AC: each top-level click opens the correct /slug page; back-button returns to previous page correctly.	MUST	FR
FR-NAV03	Dropdown Sub-Navigation	Hovering or tapping a top-level item opens a dropdown listing its sub-pages. Each sub-page link navigates directly to the sub-page URL without visiting the landing page first. Dropdown closes on click-away or Escape key. AC: dropdown renders for all 8 top-level items; each sub-page link opens correct URL; keyboard accessible (Tab + Enter navigates, Escape closes); touch works on mobile.	MUST	FR
FR-NAV04	Breadcrumb Navigation	All pages below homepage display a breadcrumb trail. All items clickable except current page. RTL order in Arabic. AC: breadcrumbs on all sub-pages; links work; RTL correct in Arabic.	MUST	FR
FR-NAV05	Smart Scroll Navbar	Navbar hides on downscroll, reappears on upscroll. Max height 72px. Logo always visible. AC: behaviour verified on desktop and mobile; logo never hidden.	SHOULD	FR
FR-NAV06	3-Click Maximum Depth	Any primary content page reachable in ≤ 3 clicks from homepage. Validated by IA audit before build begins. AC: manual audit confirms; IA diagram signed off before dev starts.	MUST	FR
FR-NAV07	Active State Indicators	Current top-level section and current sub-page are visually indicated in the navbar and dropdown. AC: active state visible on top-level and sub-page items; colour/weight distinction from non-active items; RTL correct.	MUST	FR
 
3.  Homepage Requirements — 10 Blocks
The homepage is the root URL (/). It is independent of all section landing pages. Blocks are in scroll order.

#	Block	Content / Acceptance Criteria	Priority	Benchmark	Tag
01	Hero	Full-bleed image. Dark gradient overlay. Headline ≤ 8 words (Rector-approved). Sub-headline ≤ 18 words. CTA 1: Explore Programs. CTA 2: Apply Now. AC: image renders; 2 CTAs link correctly; contrast ≥ 4.5:1.	MUST	AUS/Stanford	FR
02	Audience Entry Paths	4 cards: Prospective Students · Current Students · Faculty & Staff · Alumni. Icon + label + one-line description. Each routes to a real audience landing page. Keyboard navigable. AC: all 4 cards render; each routes to distinct page; keyboard accessible.	MUST	AUS/Stanford	FR
03	Why SPU Trust Panel	4 items: accreditation badge/link, clinical assets (Hospital + Dental), key faculty quality stat, international partnership count. Hard facts only. AC: 4 items render; accreditation links to accreditation page; stats CMS-editable.	MUST	Imperial/KAUST	FR
04	SPU in Numbers	4 animated counters: students enrolled, programs, faculty, years. Verified before launch. Dark background. Reduced-motion: show final value. AC: all 4 counters show verified values; zero not permitted at launch.	MUST	KSU/Imperial	FR
05	Hospital & Dental Strip	2 named cards (Hospital, Dental Clinic) each with description, photo, CTA. Visually distinct. AC: both cards render; CTAs open correct destinations; CMS-editable.	MUST	NEW	FR
06	News & Research	3 news cards (headline, date, category, thumbnail). 3 research cards by publishing colleges (headline, date, category, thumbnail). Freshness SLA: ≤ 30 days. 'See all news' and 'Browse publications' CTAs. AC: 3 news items < 30 days; dates explicit.	MUST	MIT/KSU	FR
07	Campus Life Preview	3 real SPU photos + real attributed student quote. 4 campus highlights. 'Explore Campus Life' + 'Virtual Tour' CTAs. AC: SPU originals only; quote named and attributed; CTAs link correctly.	REC	AUS	FR
08	Events & Quick Access	Single large card with calendar. Displays events (image, category, headline, date). Calendar highlights important days. AC: ≥ 3 future events shown; calendar renders on mobile.	MUST	AIU/KSU	FR
09	Milestones / Important News	Quote section featuring important achievement or milestone. Image alongside quote. AC: quote and image render; editable by CMS.	MUST	—	FR
10	Footer	4-column: brand+social+accreditation | nav links | student resources | contact+language switcher. Bottom bar: Copyright · Privacy · Cookie · Accessibility · Sitemap. Emergency notice zone. AC: all elements present; copyright year auto-updates; accessibility link present.	MUST	MIT/KSU	FR
 
4.  About — Landing Page & Sub-Pages
URL: /about  |  Sub-pages: /about/history · /about/leadership · /about/vision-mission · /about/accreditation · /about/partnerships · /about/directorates · /about/why-spu

4.1  About Landing Page
The /about landing page is a full content page — not a redirect. It contains a hero section with the SPU mission statement, followed by overview cards linking to each sub-page. It communicates SPU's identity, achievements, and differentiators at a glance.

ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-ABT-LP	About Landing Page	Full page at /about. Hero with mission statement. Overview card grid linking to all About sub-pages: History, Leadership, Directorates. Stats strip (students, programs, years established). AC: page renders in AR + EN; all sub-page cards link correctly; stats are CMS-editable; hero renders on mobile.	MUST	FR

4.2  About Sub-Pages
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-ABT01	History & Founding	Dedicated page at /about/history narrating SPU's founding and development. Well-structured timeline or narrative. AC: page renders in AR + EN; complete content present; no placeholder text.	MUST	FR
FR-ABT04	Leadership	Page at /about/leadership. CT-PERSON profiles for Rector, VPs, Deans, Council members. Photo, title, message, contact. AC: profiles render in AR + EN; no broken or empty profiles at launch.	MUST
		FR
FR-ABT05	Central Directorates	Page at /about/directorates. All central directorates listed with brief descriptions and links to sub-pages. AC: all directorates accessible; descriptions present; pages load in AR + EN.	MUST	FR
FR-ABT06	Partnerships	Page at /about/partnerships. Active and historical cooperation agreements: partner name, scope, date, logo where available. AC: agreements listed; page renders in AR + EN.	MUST	FR
 
5.  Admissions — Landing Page & Sub-Pages
URL: /admissions  |  Sub-pages: /admissions/requirements · /admissions/tuition · /admissions/how-to-apply · /admissions/transfer · /admissions/calendar · /admissions/documents · /admissions/faq
Governance rule: Zero placeholder pages. Every admissions page must have complete content in AR + EN at launch. Admissions Director sign-off required before go-live.

5.1  Admissions Landing Page
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-ADM-LP	Admissions Landing Page	Full page at /admissions. Hero with Apply Now CTA. Step overview of the admissions journey. Card grid linking to all Admissions sub-pages. Key dates strip (next intake deadline). Request Info form accessible from this page (FR-CRM-01). AC: page renders in AR + EN; Apply CTA functional; sub-page cards all link correctly; Request Info form present.	MUST	FR

5.2  Admissions Sub-Pages
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-ADM01	Admission Requirements	Page at /admissions/requirements. Structured requirements per student type: new entrants, transfer, equivalency. Self-assessment possible without contacting staff. AC: requirements per type visible; AR + EN; 'Last reviewed' date visible.	MUST	FR
FR-ADM02	Tuition & Fees	Page at /admissions/tuition. Complete fees by faculty and student type. Payment methods, instalments, scholarships. AC: fees by faculty + type; payment methods listed; AR + EN; 'Last reviewed' date visible.	MUST	FR
FR-ADM03	How to Apply — Step-by-Step	Page at /admissions/how-to-apply. Visual numbered steps with timeline, required documents, deadlines. Apply CTA at every step. Academic degrees and certificates listed. Graduation requirements. AC: all steps visible; Apply CTA present; AR + EN; no dead ends.	MUST	FR
FR-ADM04	Transfer & International Students	Page at /admissions/transfer. Credit transfer policy, language requirements, visa guide, country-specific notes. AC: page renders in AR + EN; all listed items present.	SHOULD	FR
FR-ADM05	Academic Calendar	Page at /admissions/calendar. Current academic year calendar with all key dates. Downloadable PDF. AC: calendar displays all dates; PDF download works; reflects current year.	MUST	FR
FR-ADM06	Documents Checklist	Page at /admissions/documents. Downloadable checklist of required documents per application category. Study system and GPA explanation. Academic warnings policy. AC: checklist downloadable per category; AR + EN.	MUST	FR
FR-ADM07	Admissions FAQ	Page at /admissions/faq. ≥ 25 questions organised by topic with expandable Q&A. Searchable. AC: FAQ renders; expandable items work; searchable; AR + EN.	MUST	FR

5.3  Admissions CRM & Lead Capture
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-CRM-01	Request Info Form	Accessible from homepage utility nav, all admissions pages, and all program pages. Fields: name, email, phone, nationality, faculty of interest, level (UG/PG). On submit: (1) auto-reply email to prospect, (2) lead record created in CRM / admin dashboard, (3) Comms team notified. UTM source parameters stored per submission. AC: form submits; auto-reply sent; lead visible in admin; UTM params stored; accessible from ≥ 3 entry points.	MUST	FR
FR-CRM-02	Lead Dashboard in Admin	Super Admin and Admissions Director can view all captured leads: name, email, faculty interest, source, date, status (New / Contacted / Enrolled). Export to CSV. AC: lead list visible in admin; CSV export works; only authorised roles can access.	SHOULD	FR
FR-CRM-03	Apply Form (Post-Acceptance)	Form for students who have been accepted. Submitted to Admissions for review. Admissions sends email confirming appointment time and required documents. AC: form submits; confirmation email sent; submission stored in admin.	SHOULD	FR
 
6.  Facilities — Full Specification (v5.1 Addendum)
Status: Defined — replaces placeholder Section 6 in v5.0.  Supersedes: FR-FAC-PH01, FR-FAC-PH02.  Scope: Complete Facilities architecture, pages, and content model.

6.1  Overview
The Facilities section is the structured academic core of the SPU website. It replaces "Faculties & Programs" from v4.0 and provides a scalable, CMS-driven system for presenting: Faculties (Facilities), Departments, Study plans and academic materials, Research and projects, Alumni and valedictorians, and facility-specific assets (labs, training).
Each facility follows a standardised hub-and-spoke architecture with reusable templates and structured content types.

6.2  URL Structure
Page	URL
Facilities Landing	/facilities
Facility Hub	/facilities/{facility}
Overview	/facilities/{facility}/overview
Departments	/facilities/{facility}/departments
Study Plan	/facilities/{facility}/study-plan
Calendar	/facilities/{facility}/calendar
Research	/facilities/{facility}/research
Projects	/facilities/{facility}/projects
Alumni	/facilities/{facility}/alumni
Valedictorians	/facilities/{facility}/valedictorians
Labs (conditional)	/facilities/{facility}/labs
Training (conditional)	/facilities/{facility}/training

Facilities included at launch:
●	Artificial Intelligence
●	Business Administration
●	Dentistry
●	Pharmacy
●	Medicine
●	Building & Construction Engineering

6.3  Facilities Landing Page
URL: /facilities
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-FAC-LP01	Facilities Landing Page	Full page at /facilities. Hero + introduction to SPU academic model. Grid of all facilities (≥ 4 at launch). Each card links to the facility hub page. AC: all facilities visible; cards link correctly; AR + EN supported.	MUST	FR
FR-FAC-LP02	Academic Model Section	Section describing SPU teaching model (clinical, applied, research-led, etc.). CMS-editable. AC: content editable by Super Admin; renders in AR + EN.	SHOULD	FR
FR-FAC-LP03	Facilities Grid Cards	Each facility card includes image, name, short descriptor, and CTA. AC: cards render consistently; responsive layout verified at 320px and 1280px; keyboard accessible.	MUST	FR
FR-FAC-LP04	Facilities Stats Strip	Displays aggregated metrics (total programs, labs, enrolled students). CMS-editable. AC: values editable via admin; no zero values at launch.	SHOULD	FR

6.4  Facility Home Page (Hub)
URL: /facilities/{facility}
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-FAC-HUB01	Facility Hub Page	Overview page with hero image, quick facts strip, and navigation cards to all sub-pages. AC: page renders in AR + EN; all navigation cards link correctly; no broken links at launch.	MUST	FR
FR-FAC-HUB02	Navigation Cards	Card-based navigation to all sub-pages: Overview, Departments, Study Plan, Calendar, Research, Projects, Alumni, Valedictorians (and conditional: Labs, Training). AC: all cards visible; keyboard accessible; links verified before launch.	MUST	FR
FR-FAC-HUB03	Quick Facts Strip	Displays key metrics per facility (enrolled students, departments, programs). CMS-editable by Faculty Editor. AC: values editable; responsive layout.	SHOULD	FR
FR-FAC-HUB04	Featured Content	Highlights selected research item, student project, and alumni story. AC: at least one item per category displayed; content CMS-editable; no hard-coded content.	REC	FR

6.5  Facility Sub-Pages
6.5.1  Overview Page
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-FAC-OV01	Facility Overview	Full introduction to the facility: description, vision, dean message, and facility council listing. AC: dean message present; council listed; all fields populated in AR + EN at launch.	MUST	FR
FR-FAC-OV02	Dean Message	Profile section with dean photo and signed message. AC: photo + text present; no empty fields at launch; Faculty Editor can update via CMS.	MUST	FR
FR-FAC-OV03	Facility Council	Structured list of council members using CT-PERSON. AC: profiles render; no broken or empty entries at launch.	MUST	FR
6.5.2  Departments Page
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-FAC-DEP01	Departments Listing	All departments within the facility listed with name, description, and degree types offered. AC: all departments visible; AR + EN; no placeholder departments at launch.	MUST	FR
6.5.3  Study Plan Page
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-FAC-ST01	Study Plan Structure	Programs displayed with structured study plans grouped by department and level. AC: programs grouped logically; clear structure; AR + EN.	MUST	FR
FR-FAC-ST02	Downloadable Documents	Course materials, course specifications, and study plans available as downloadable PDFs. Each document dated and versioned. AC: all documents downloadable; correct file type (PDF only); opens in new tab.	MUST	FR
FR-FAC-ST03	Program Data Integration	Study plan page uses CT-PROGRAM and CT-DOCUMENT content types. AC: CMS enforces all required fields; no missing data at launch; Faculty Editor manages via scoped workspace.	MUST	FR
6.5.4  Calendar Page
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-FAC-CAL01	Facility Calendar	Displays the facility-specific academic calendar for the current year including key dates, exam periods, and registration deadlines. AC: dates visible; AR + EN; reflects current academic year.	MUST	FR
FR-FAC-CAL02	Calendar PDF Download	Downloadable calendar PDF for current academic year. AC: PDF download works; file is current year only; outdated versions not publicly accessible.	MUST	FR
6.5.5  Research Page
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-FAC-RES01	Facility Research Output	Displays research publications and outputs from this facility, linked to the central repository (FR-RES03). Each item: title, author (CT-PERSON link), date, DOI. AC: items visible; links functional; Browse all link to central repository.	MUST	FR
6.5.6  Projects Page
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-FAC-PRJ01	Student Projects	Grid of student projects with title, description, supervising faculty member, and media (image or video). AC: ≥ 6 projects at launch per facility; AR + EN; Faculty Editor can add via CMS.	SHOULD	FR

6.6  Alumni Page
URL: /facilities/{facility}/alumni
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-FAC-ALM01	Alumni Listing	Grid of alumni cards per facility. Each card displays: photo, full name, graduation year, program, current role, and company/organisation. AC: cards render correctly; all required fields populated; AR + EN.	MUST	FR
FR-FAC-ALM02	Alumni Filters	Filter alumni by graduation year and program. AC: filters work correctly; results update dynamically without full page reload; clearing filters restores full listing.	SHOULD	FR
FR-FAC-ALM03	Alumni Content Type	Uses CT-ALUMNI-STORY with additional structured fields: graduation year, program, company. AC: CMS enforces all required fields; Faculty Editor can manage alumni for own facility only.	MUST	FR

6.7  Valedictorians Page
URL: /facilities/{facility}/valedictorians
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-FAC-VAL01	Valedictorian Listing	Structured listing of all valedictorians for this facility, grouped chronologically by year and semester. AC: grouping visible; chronological order correct (newest first); AR + EN.	MUST	FR
FR-FAC-VAL02	Semester Grouping	Each academic year split into First Semester and Second Semester groups. AC: correct grouping enforced by CMS; no mixing of semesters.	MUST	FR
FR-FAC-VAL03	Valedictorian Cards	Each card displays: photo, full name, program, semester, academic year, and optional GPA. AC: all required fields present; photo mandatory; GPA optional.	MUST	FR
FR-FAC-VAL04	Valedictorian Content Type (CT-VALEDICTORIAN)	New content type CT-VALEDICTORIAN with structured fields: name (AR + EN), photo, program (FK), semester (First/Second), academic year, GPA (optional). AC: CMS enforces year and semester fields; Faculty Editor can add per facility.	MUST	FR

6.8  Conditional Pages
Dentistry — Labs
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-FAC-LAB01	Labs Page	Dedicated labs page at /facilities/dentistry/labs listing all dental labs with equipment description, photos, and supervising faculty member. AC: ≥ 2 labs at launch; CT-LAB content type used; images present for each lab.	SHOULD	FR
Pharmacy — Training / Apprenticeship
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-FAC-TRN01	Training / Apprenticeship Page	Dedicated page at /facilities/pharmacy/training describing the apprenticeship programme structure, partner pharmacies/hospitals, application process, and duration. AC: page renders in AR + EN; no placeholder content at launch.	SHOULD	FR

6.9  Navigation Integration
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-FAC-NAV01	Facilities Dropdown	The Facilities header item dropdown lists all facilities by name (no placeholder items). Each links to the corresponding /facilities/{facility} hub page. AC: all 7 launch facilities visible in dropdown; links correct; no "Coming Soon" items at launch.	MUST	FR
FR-FAC-NAV02	Breadcrumbs on All Facility Pages	All pages under /facilities/* display breadcrumb navigation: Home > Facilities > {Facility Name} > {Sub-page}. AC: correct hierarchy on all levels; breadcrumb links functional; RTL order correct in Arabic.	MUST	FR

6.10  Content Governance (Facilities-Specific)
ID	Title	Description / Acceptance Criteria	Priority	Tag
GOV-FAC-01	Facility Ownership	Each facility has a named Owner (responsible for content accuracy) and a Faculty Editor (CMS access scoped to own facility). Ownership matrix maintained in CMS and reviewed each semester. AC: all 6 launch facilities have named owner and editor documented before go-live.	MUST	GOV
GOV-FAC-02	Study Plan Accuracy	Study plans reviewed and re-approved before each academic year. Outdated study plan PDFs retired from public access on re-approval. AC: review date visible on study plan page; outdated documents flagged in CMS.	MUST	GOV
GOV-FAC-03	Alumni Content Updates	Alumni listings reviewed and updated at least annually. New graduates added within one semester of graduation. AC: review date tracked in CMS; stale entries flagged after 12 months without update.	SHOULD	GOV
GOV-FAC-04	Valedictorian Updates	Valedictorian entries added within 2 weeks of each semester's official results. AC: CMS shows date of last entry; Faculty Editor notified by system when semester end date passes without new entry.	MUST	GOV

Supersession note: FR-FAC-PH01 and FR-FAC-PH02 are retired. All v4.0 faculty requirements (FR-FAC01 through FR-FAC09) are subsumed into this section under the /facilities/* URL structure. CT-FACULTY, CT-PROGRAM, CT-LAB, and CT-PERSON content types from Section 9 remain valid and apply to this section.

 
7.  Research — Landing Page & Sub-Pages
URL: /research  |  Sub-pages: /research/office · /research/publications · /research/centers · /research/expert-finder · /research/conferences · /research/postgraduate · /research/library · /research/policies
Strategic note: SPU can be the first Syrian private university with a fully open DOI repository indexed in Google Scholar. This is the single highest-leverage Webometrics action.

7.1  Research Landing Page
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-RES-LP	Research Landing Page	Full page at /research. Hero with research mission statement. Highlight strip: recent publication count, active research centers, Google Scholar status. Card grid linking to all Research sub-pages. Featured publication card. AC: page renders in AR + EN; all sub-page cards link correctly; stats CMS-editable.	MUST	FR

7.2  Research Sub-Pages
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-RES01	Research Repository / Publications	Page at /research/publications. Every thesis, dissertation, conference proceeding, and working paper published as a permanent indexable HTML page: visible abstract (no login), one downloadable PDF, Google Scholar citation meta tags in <head>. AC: HTML page with abstract; PDF downloadable; citation_title/author/date/pdf_url meta tags verified in source.	MUST	FR
FR-RES02	Open Institutional Repository	Publicly accessible at repository.spu.edu.sy. All faculty publications with full text or DOI link. Google Scholar-indexed within 90 days. robots.txt allows Googlebot. AC: GS inclusion criteria met; indexed confirmed via GS within 90 days.	MUST	FR
FR-RES03	Research Centers & Labs	Page at /research/centers. CT-RESEARCH-CENTER: mission, director, affiliated faculty, projects, publications, contact. AC: ≥ 3 centers profiled at launch; all CT fields populated.	SHOULD	FR
FR-RES04	Expert Finder	Page at /research/expert-finder. Searchable, publicly accessible directory of all SPU academic staff. Search by name, faculty, department, or expertise keyword. Results show CT-PERSON profile cards: photo, title, department, research interests, contact. Expertise tags searchable and browsable. AC: search by name and keyword returns correct results; all active faculty appear; accessible without login.	SHOULD	FR
FR-RES05	Conferences & Seminars	Page at /research/conferences. Past + upcoming conferences hosted by SPU. Proceedings downloadable where available. AC: page renders; PDFs downloadable; upcoming events linked to CT-EVENT.	SHOULD	FR
FR-RES07	Scientific Library	Page at /research/library. Physical library + e-books + licensed databases + borrowing rules + contact librarian. AC: library accessible from Research section; external databases link correctly.	MUST	FR
FR-RES08	Research Policies & Ethics	Page at /research/policies. Research ethics policies, publication guidelines, academic integrity standards. Downloadable PDFs. AC: page renders; PDFs downloadable; AR + EN.	SHOULD	FR

7.3  Researcher Profiles
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-RES-PRF01	Researcher Profiles (CT-PERSON)	All faculty in research: official name AR + EN, department, SPU affiliation string, email, ORCID iD (linked), Google Scholar URL (linked), Scopus ID (linked). Names consistent across all profiles. 100% of active faculty profiled at launch. AC: all required fields display; ORCID/Scopus linked; names consistent.	MUST	FR
FR-RES-PRF02	Expertise Tags on Profiles	Each CT-PERSON profile has a structured list of expertise tags (e.g. Oncology, Structural Engineering, Islamic Finance). Tags searchable and browsable. Clicking a tag returns all faculty with that tag. AC: tags editable by Faculty Editor in CMS; tag filtering returns correct results.	SHOULD	FR
 
8.  Campus Life — Landing Page & Sub-Pages
URL: /campus-life  |  Sub-pages: /campus-life/services · /campus-life/transport · /campus-life/health · /campus-life/clubs · /campus-life/sports · /campus-life/career · /campus-life/community · /campus-life/hospital · /campus-life/dental

8.1  Campus Life Landing Page
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-CL-LP	Campus Life Landing Page	Full page at /campus-life. Hero with real SPU campus photography (no stock). Overview cards linking to all Campus Life sub-pages. Student testimonial strip. Highlight counters: clubs count, sports teams, hospital departments. AC: page renders in AR + EN; real SPU photography only; sub-page cards link correctly; counters CMS-editable.	MUST	FR

8.2  Campus Life Sub-Pages
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-LFE01	Campus Services Hub	Page at /campus-life/services. Transport, health, IT, cafeteria, accommodation — each as CT-SERVICE with name, description, access route, contact. AC: all services listed; each links to detail or external service; AR + EN.	MUST	FR
FR-LFE02	University Hospital (Signature Asset)	Dedicated page at /campus-life/hospital. Departments, medical services, hours, appointment process, insurance, emergency contact. 'Last reviewed' date visible. AC: page renders in AR + EN; all listed elements present; review date visible; accessible ≤ 2 clicks from homepage.	MUST	FR
FR-LFE03	Dental Clinics (Signature Asset)	Dedicated page at /campus-life/dental. Services, clinic hours, booking process, patient types (student/public). 'Last reviewed' date. AC: page renders in AR + EN; booking route present; review date visible.	MUST	FR
FR-LFE04	Student Clubs & Activities	Page at /campus-life/clubs. Directory of active clubs (≥ 15 at launch): name, description, how to join. AC: all clubs listed; page renders in AR + EN.	MUST	FR
FR-LFE05	Career Development	Page at /campus-life/career. Career center: events, job board link, CV workshops, internship listings, employer partners. AC: page renders; links functional.	SHOULD	FR
FR-LFE06	Health & Insurance	Page at /campus-life/health. Student health insurance details, coverage, how to use, contact. AC: page renders in AR + EN; contact present.	MUST	FR
FR-LFE07	Transport	Page at /campus-life/transport. Transport routes, schedules, fees, how to register. AC: page renders in AR + EN; schedule current.	SHOULD	FR
FR-LFE08	Sports	Page at /campus-life/sports. Sports facilities, teams, schedules, how to join. AC: page renders in AR + EN.	SHOULD	FR
FR-LFE09	Community Service	Page at /campus-life/community. Community engagement programs, volunteer opportunities, achievements. AC: page renders in AR + EN.	REC	FR
 
9.  E-Services — Landing Page & Sub-Pages
URL: /e-services  |  Sub-pages: /e-services/student-portal · /e-services/registration · /e-services/library · /e-services/appeals · /e-services/staff-email · /e-services/it-support

9.1  E-Services Landing Page
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-ES-LP	E-Services Landing Page	Full page at /e-services. Icon-grid listing all digital services with name, brief description, and link. Each service card links directly to the service or to a dedicated instruction sub-page. AC: all services listed; page accessible as top-level nav item; AR + EN.	MUST	FR

9.2  E-Services Sub-Pages
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-ES01	Student Portal	Page at /e-services/student-portal. Direct link to Electronic Student Gate in a new tab. Step-by-step first-login guide. AC: link opens correct portal; guide present; AR + EN.	MUST	FR
FR-ES02	Appeals & Forms	Page at /e-services/appeals. Online form for student appeals, complaints, suggestions. Email confirmation auto-sent. AC: form submits; confirmation sent; submission stored in admin.	MUST	FR
FR-ES04	Library Access	Page at /e-services/library. Access instructions for e-library and licensed databases. AC: page renders; external database links correct.	SHOULD	FR
 
10.  News — Landing Page & Sub-Pages
URL: /news  |  Sub-pages: /news/articles · /news/announcements · /news/events · /news/gallery · /news/press-room

10.1  News Landing Page
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-NEWS-LP	News Landing Page	Full page at /news. Tabbed or sectioned layout: Latest News, Announcements, Upcoming Events. Featured news card (hero size). Sidebar or strip: Events calendar highlight. AC: page renders in AR + EN; all three sections present; featured card CMS-selectable.	MUST	FR

10.2  News Sub-Pages
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-NEWS01	News Listing	Page at /news/articles. All published news as card grid: featured image, headline, date (explicit), category tag, excerpt. Pagination. Category filter. AC: ≥ 10 items on listing; all fields visible; pagination works; filter works; responsive.	MUST	FR
FR-NEWS02	News Article Page	Full article: headline (AR + EN), rich-text body, date, category, author tag, embedded images, social sharing (OG metadata correct). AC: article renders; social sharing uses correct metadata.	MUST	FR
FR-NEWS03	Announcements	Page at /news/announcements. Official announcements listing: date, title, body, downloadable attachment where applicable. AC: listing renders; attachments downloadable; AR + EN.	MUST	FR
FR-EVT01	Events Calendar	Page at /news/events. Monthly calendar + list view. Toggle between views. CT-EVENT: title, date/time, location, description, image, RSVP link, iCal export. AC: both views render; toggle works; iCal export works; social sharing correct.	MUST	FR
FR-MEDIA01	Media Gallery	Page at /news/gallery. High-resolution SPU photography organised by theme. Lazy-loaded. No stock photography for campus/student content. AC: gallery renders with optimised images; lazy loading verified.	REC	FR
FR-PRESS01	Press Room	Page at /news/press-room. Sections: Press Releases, Spokesperson Directory, Media Contact, Brand Assets, Press Kit. Press releases filterable by keyword and date, downloadable as PDF. Spokesperson directory: name, title, expertise areas, contact route. Dedicated media contact email separate from admissions contact. Downloadable brand kit: SPU logos (SVG + PNG, AR + EN versions), colour palette, typeface reference. AC: all sections present; press releases downloadable; spokesperson list visible; media contact distinct from admissions; brand files downloadable at stable URLs.	SHOULD	FR
 
11.  Contact — Landing Page & Sub-Pages
URL: /contact  |  Sub-pages: /contact/map

ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-CON-LP	Contact Landing Page	Full page at /contact. Phone, WhatsApp, email, physical address, office hours, social media links. Embedded map preview. Contact form with server-side validation. On submit: (1) email to configured address, (2) admin dashboard notification. AC: all fields correct; social links open correct accounts; form submits and is received by email AND admin; AR + EN.	MUST	FR
FR-CON01	Campus Map	Full interactive campus map at /contact/map. Search bar within map: user types building name or service and map zooms and highlights result. Pinned locations: all buildings, hospital, dental clinic, library, sports facilities, parking, main gate, emergency exit. Accessibility routes marked. Clinic + hospital routing with 'Get Directions' CTA. Mobile: GPS position shown where permission granted. AC: map renders; search by building name returns correct pin; clinic and hospital pins visible; accessibility routes visible; GPS on mobile with permission.	SHOULD	FR
 
12.  Search
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-SRCH01	Site Search with Live Suggestions	Global search in navbar. Live dropdown suggestions after 2 chars. Enter/click → results page. Results sortable by date / alphabetical / content type. Content types: news, events, PDFs, pages, programs, people, publications. Covers AR + EN. AC: suggestions after 2 chars; results page loads; sorting works; Arabic search returns correct results; PDFs appear.	MUST	FR
FR-SRCH02	Typo Tolerance	Fuzzy/typo-tolerant matching. Near-matches return results. No zero-result page for near-matches. AC: 'mediicne' returns Medicine-related results; zero-result handled with guidance.	MUST	FR
FR-SRCH03	Search Analytics	Search queries, zero-result queries, click-through rates reported monthly to web team. AC: analytics data visible in admin; zero-result queries identifiable.	MUST	KPI
 
13.  Non-Functional Requirements
13.1  Performance
ID	Title	Description / Acceptance Criteria	Priority	Tag
NFR-PERF-01	Page Load ≤ 2s on 3G	All public pages load ≤ 2s on emulated 3G. Validated by synthetic testing. AC: synthetic test confirms <2s on 3G emulation.	MUST	NFR
NFR-PERF-02	Lighthouse Performance ≥ 90	Homepage + ≥ 3 inner pages. AC: Lighthouse Performance ≥ 90 on homepage, a section landing page, admissions page, news article.	MUST	NFR
NFR-PERF-03	Core Web Vitals	LCP ≤ 2.5s · FID ≤ 100ms · CLS < 0.1 at P75 (Google Search Console). LCP hero image preloaded via <link rel='preload'> — NOT lazy-loaded. AC: GSC confirms P75 targets; preload tag in source.	MUST	NFR
NFR-PERF-04	Automatic Image Optimisation	Every uploaded image auto-generates responsive WebP variants. Correct variant served per viewport. AC: uploaded JPEG/PNG produces WebP variants.	SHOULD	NFR
NFR-PERF-05	Server-Side Caching	All public pages served via server-side cache. Cache invalidation automatic and immediate on publish. AC: invalidation fires on publish; stale content not served.	MUST	NFR
NFR-PERF-06	Laravel / PHP 8 Capacity	100–200 RPS under normal load. Response time <500ms for majority of requests. CPU ≤ 70% during stress testing. AC: load test (k6 or Locust) confirms targets.	MUST	NFR
NFR-PERF-07	CDN for Static Assets	All CSS, JS, images via CDN. AC: CDN headers present on static assets.	MUST	NFR

13.2  Security
ID	Title	Description / Acceptance Criteria	Priority	Tag
NFR-SEC-01	HTTPS Enforcement	All traffic served exclusively over HTTPS. HTTP → HTTPS redirect. No mixed content. AC: all pages HTTPS; no mixed content warnings.	MUST	NFR
NFR-SEC-02	Input Validation & Sanitisation	All inputs — public forms + admin editors — validated and sanitised server-side. HTML/iframes in editor: allowlist sanitiser to prevent XSS. AC: pentest/code review confirms server-side validation; XSS attempts blocked.	MUST	NFR
NFR-SEC-03	Account Lockout	Admin accounts locked after configurable failed login attempts. AC: account locks at threshold; unlock mechanism works.	MUST	NFR
NFR-SEC-04	Session Timeout	Admin sessions expire after configurable inactivity. AC: session expires; re-auth required.	MUST	NFR
NFR-SEC-05	Rate Limiting	Admin login + all public form endpoints: rate limiting. AC: 429 on threshold exceeded; legitimate users unaffected.	MUST	NFR
NFR-SEC-06	CSRF & Secure Cookies	All state-changing admin actions protected with CSRF tokens. Session cookies: HttpOnly + Secure flags. AC: CSRF tokens on all mutating forms; cookies confirmed HttpOnly + Secure.	MUST	NFR
NFR-SEC-07	Full Admin Audit Trail	Every admin action (create/edit/delete/publish/login/logout): immutable log entry recording user, action, entity, timestamp. Viewable by Super Admin only. AC: all action types generate entries.	MUST	NFR
NFR-SEC-08	File Upload Validation	MIME type + binary file signature validation server-side. Accepted: JPG, PNG, WebP (images); PDF (documents). Any other type rejected. AC: valid uploads succeed; invalid types rejected.	MUST	NFR
NFR-SEC-09	MFA on Admin Accounts	All CMS admin accounts require Multi-Factor Authentication. No exceptions. AC: MFA enforced on all admin login paths.	MUST	NFR
NFR-SEC-10	GDPR / Privacy	Cookie consent banner compliant with applicable law. Privacy policy in all active languages. AC: consent banner present; privacy policy accessible in AR + EN at launch.	MUST	NFR

13.3  Accessibility
ID	Title	Description / Acceptance Criteria	Priority	Tag
NFR-ACC-01	WCAG 2.1 Level AA	Full WCAG 2.1 AA conformance. Automated scanning + manual keyboard/screen-reader testing (NVDA + VoiceOver). AC: automated audit passes; keyboard navigation reaches all elements.	MUST	NFR
NFR-ACC-02	Semantic HTML	All pages: semantic elements (header/nav/main/article/aside/footer) with correct ARIA roles on dynamic components. AC: code review confirms semantic structure.	MUST	NFR
NFR-ACC-03	Colour Contrast	Normal text ≥ 4.5:1, large text ≥ 3:1, UI components ≥ 3:1. AC: automated contrast audit zero failures.	MUST	NFR
NFR-ACC-04	Lighthouse Accessibility ≥ 90	All template page types. Blocks go-live if not met. AC: Lighthouse Accessibility ≥ 90 on all core page types.	MUST	NFR
NFR-ACC-05	Skip Navigation	'Skip to main content' as first focusable element. AC: skip link present; keyboard focus goes to main content on activation.	MUST	NFR
NFR-ACC-06	Reduced Motion	All animations respect prefers-reduced-motion. AC: counters show final value; animations disable when preference set.	MUST	NFR
NFR-ACC-07	Public Accessibility Issue Report Route	'Report an accessibility issue' link in the global footer. Routes to a form: issue description, page URL (auto-filled), email (optional). Submissions delivered to web team inbox. AC: link in footer; form submits; submission received by web team; email optional.	MUST	FR
NFR-ACC-08	Visible Review Dates	All admissions, tuition, hospital, dental, scholarship, and campus service pages display a visible 'Last reviewed: [Month Year]' date. Date updated automatically on CMS publish. AC: review date visible on all listed page types; date updates on publish.	MUST	FR

13.4  Usability
ID	Title	Description / Acceptance Criteria	Priority	Tag
NFR-USE-01	Mobile-First Responsive	Designed mobile-first. Layouts fluid from 320px to 1440px+. No horizontal scrollbars at standard viewports. AC: no scrollbars at 320px/768px/1280px; Lighthouse Mobile ≥ 85.	MUST	NFR
NFR-USE-02	Custom Error Pages	Branded 404 + 500 pages: SPU header/footer, bilingual message, homepage link. No technical details exposed. AC: 404/500 render correctly; no stack traces visible.	MUST	NFR
NFR-USE-03	Empty / Coming Soon States	Every page in navigation without published content: designed placeholder state (not blank or 404). Includes SPU header + footer + page title + coming soon message + homepage link. AC: no blank pages in navigation; placeholder renders correctly.	MUST	FR
NFR-USE-04	Button Hover States & Dropdown Behaviour	All buttons: visible hover state. Dropdowns: smooth animation on open, consistent across all instances. AC: hover verified on all button types; dropdown animation consistent.	MUST	FR
 
14.  SEO & Research Visibility
ID	Title	Description / Acceptance Criteria	Priority	Tag
NFR-SEO-01	Unique Titles & Meta Descriptions	Every public page: unique admin-editable title + meta description per language. No duplicates. AC: site audit confirms unique titles; editable per language in admin.	MUST	NFR
NFR-SEO-02	Structured Data (JSON-LD)	CMS auto-generates JSON-LD per content type: Organization (homepage), NewsArticle, Event, Course, Dataset (research), ProfilePage (researchers). AC: validated via Google Rich Results Test.	SHOULD	NFR
NFR-SEO-03	Localized Sitemaps & robots.txt	Sitemap index with localized sitemaps per language + image sitemap. robots.txt excludes admin paths. IndexNow ping on content updates. AC: sitemap index contains localized entries; robots.txt excludes /admin; IndexNow fires on publish.	MUST	NFR
NFR-SEO-04	hreflang & Canonical Tags	All multilingual pages: hreflang + canonical tags. AC: hreflang + canonical present and correctly configured on all pages.	MUST	NFR
NFR-SEO-05	Server-Side Rendering	All public pages server-rendered or statically generated. No page relies exclusively on client-side JS for primary content. AC: all pages return complete HTML in initial server response.	MUST	NFR
NFR-SEO-06	Research Citation Metadata	Every thesis/dissertation/conference proceeding: citation_title, citation_author, citation_publication_date, citation_pdf_url in HTML <head> + DOI + ORCID + ROR ID + keywords + license + dept. AC: all citation tags present and correctly formatted.	MUST	NFR
NFR-SEO-07	Lighthouse SEO ≥ 90	Homepage + ≥ 3 inner pages. AC: Lighthouse SEO ≥ 90 on homepage/section landing/admissions/news.	MUST	NFR
NFR-SEO-08	Image SEO & Alt Text	All images: meaningful alt text, descriptive caption, human-readable filename. Rendered as HTML <img> — not CSS background-image for content. AC: all media library images have alt text.	MUST	NFR
NFR-SEO-09	Legacy URL Redirect Map	All legacy spu.edu.sy/index.php?... URLs → 301 redirects to clean new URLs. No legacy URL returns 404. AC: all legacy URLs 301-redirect; no 404s from legacy links.	MUST	NFR
 
15.  Internationalisation (i18n)
ID	Title	Description / Acceptance Criteria	Priority	Tag
NFR-I18N-01	Full Bilingual Content Support	All public content: independent AR + EN fields per CMS item. No machine translation as fallback. AC: independent AR + EN fields on all content items.	MUST	I18N
NFR-I18N-02	In-Place Language Switching	Language switch from any page preserves page context. No 404 errors on switch. AC: switching stays on equivalent translated page.	MUST	I18N
NFR-I18N-03	Missing Translation Fallback	Content unavailable in selected language: fall back to Arabic OR display 'not yet translated' notice. No blank/broken pages. AC: fallback works; notice displayed.	MUST	I18N
NFR-I18N-04	RTL/LTR Layout Testing	AR (RTL) and EN (LTR) tested on same device and screen size. Zero layout breaks, overlaps, or untranslated UI strings. AC: test results documented; zero failures before launch sign-off.	MUST	I18N
NFR-I18N-05	FR/ES/DE Expansion Gate	FR/ES/DE expansion triggered only when: named translator under contract, CMS workspace set up, owner assigned, 30-page roadmap approved. AC: expansion not started without all gate criteria signed off.	MUST	I18N
 
16.  Admin Dashboard & CMS Requirements
ID	Title	Description / Acceptance Criteria	Priority	Tag
FR-CMS01	WYSIWYG Bilingual Page Builder	Rich WYSIWYG editor with independent AR + EN fields. Supports: headings, paragraphs, lists, hyperlinks, images, configurable buttons, iframes, tables, sanitised HTML. Non-technical staff build complete pages without coding. AC: bilingual page with image + button created and published; RTL renders correctly in AR field.	MUST	FR
FR-CMS02	Per-Page SEO Metadata	Editable per-page: title, meta description, OG tags — independently per language, rendered in HTML <head>. AC: SEO fields in page source for AR + EN; OG preview metadata correct.	SHOULD	FR
FR-CMS03	Draft & Published States	All content types support Draft + Published. Draft never publicly accessible. AC: draft not accessible publicly; states clearly differentiated in admin.	MUST	FR
FR-CMS04	Scheduled Content Publishing	Future publish date/time on any page or article. Content not visible before scheduled time. AC: scheduled content not visible before time; goes live automatically at correct time.	MUST	FR
FR-CMS05	Drag-and-Drop Navigation Menu Builder	Visual drag-and-drop menu management. Items support nesting ≤ 2 levels. Enable/disable without deletion. AC: nested items create correctly; disabled items hidden from public.	MUST	FR
FR-CMS06	Section Landing Page Management	Super Admin and authorised editors update section landing page blocks (hero, stats, cards) via admin dashboard. No developer involvement for routine updates. AC: hero/stats/cards update after admin edit; no code changes required.	SHOULD	FR
FR-CMS07	Live Preview with RTL Modes	Authors preview page across desktop/tablet/mobile breakpoints + AR (RTL) / EN (LTR) mode before publishing. AC: preview renders as public site; breakpoints switchable; RTL preview correctly mirrors layout.	MUST	FR
FR-CMS08	Content Type Enforcement	CMS enforces all CT fields. Mandatory fields cannot be published empty. AC: empty mandatory field blocks publish with clear error.	MUST	FR
FR-CMS09	Role-Based Access Control	Three roles: Super Admin (all), Editor (news/events/general pages), Faculty Editor (scoped to own faculty). Faculty Editor cannot access other faculties. AC: each role limited to permitted actions.	MUST	FR
FR-CMS10	Broken Link Detection	Automated weekly check for broken internal + external links. Report emailed to web team. AC: report generated weekly; broken links identified.	SHOULD	FR
 
17.  Content Governance
ID	Title	Description / Acceptance Criteria	Priority	Tag
GOV-01	Ownership Matrix	Every page: named Owner (accuracy) + Editor (CMS updates). Matrix in CMS, reviewed each semester. AC: all published pages have named owner; matrix viewable in CMS by Super Admin.	MUST	GOV
GOV-02	Editorial Workflow	Draft → Review → Approve → Publish enforced by CMS. Approvers are senior staff, not developers. AC: workflow enforced; no content live without Approver sign-off.	MUST	GOV
GOV-03	Content Freshness SLAs	News: ≥ 1 item/week during academic term. Events: created ≥ 2 weeks before event. Fees + admissions: reviewed before each intake. Faculty profiles: reviewed annually. Hospital/clinic: reviewed monthly. AC: freshness reports in admin; stale items flagged.	MUST	GOV
GOV-04	No Placeholder Policy	'Under preparation', 'coming soon', empty tables NOT permitted on live public pages (except FR-FAC-PH01 which is an explicitly designed placeholder). CMS blocks publishing of empty body content. AC: no unauthorised placeholder on live site at launch.	MUST	GOV
GOV-05	Image Standards	All images: real SPU people/places (no stock for campus/student content), WebP, descriptively named, alt-tagged, privacy-compliant. AC: stock photography absent from campus/student content at launch.	SHOULD	GOV
GOV-06	Hospital & Clinic Currency	Hospital and Dental Clinic pages reviewed monthly. Specialist lists, hours, booking information never > 30 days stale. AC: 'Last reviewed' date updated monthly.	MUST	GOV
 
18.  Structured Content Types
Type	Name	Required Fields
CT-PROGRAM	Program / Degree	Name (all active languages) · Faculty · Dept · Level · Duration · Language · Credit hours · Accreditation · Learning outcomes · Career paths · Study plan PDF (dated + versioned) · Tuition fees · Admission requirements · Apply CTA
CT-FACULTY	Faculty / School	Name · Dean (CT-PERSON) · Overview · Departments list · Programs list · Labs list · Key facts · Accreditation badge · Apply CTA · Contact
CT-PERSON	Person / Profile	Full name AR + EN · Photo · Title · Role type · Department · Faculty · Bio · Research interests · ORCID iD · Google Scholar URL · Scopus ID · Publications · Office hours · Email · Expertise tags
CT-NEWS	News Article	Headline · Date published (explicit) · Author · Body · Featured image · Category tag · Related faculty/program · Language variants · Social sharing OG metadata
CT-EVENT	Event	Title (AR + EN) · Start/end datetime · Location · Description · RSVP link · iCal export · Category · Language variants · Expiry (auto-hide after date)
CT-PUBLICATION	Research Publication	Title · Authors (CT-PERSON) · Journal/conference · Year · DOI · Open-access PDF · Abstract · Keywords · Faculty · GS indexed (yes/no) · Citation meta tags
CT-DOCUMENT	Official Document	Title · Type · Date issued · Version · Language · PDF · Responsible unit · Review date · Status (current/archived)
CT-LAB	Lab / Research Facility	Name · Faculty · Photos · Description · Equipment · Supervising faculty (CT-PERSON) · Associated publications
CT-SERVICE	Campus / Student Service	Name · Description · How to access · Contact · Audience · Related E-Service link
CT-SCHOLARSHIP	Scholarship	Name · Value · Eligibility · Application deadline · Required documents · Apply link · Renewable (yes/no)
CT-ALUMNI-STORY	Alumni Story	Name · Graduation year · Program · Current role/company · Quote · Photo · Outcome statement · Consent · Homepage flag (Super Admin only)
CT-FAQ	FAQ Entry	Question (all active languages) · Answer · Category · Related page · Last reviewed date
CT-RESEARCH-CENTER	Research Center	Name · Mission · Director (CT-PERSON) · Affiliated faculty · Projects · Publications · Contact
CT-HOSPITAL-CLINIC	Hospital / Clinic Service	Facility name · Specialties/departments · Services · Patient types · Booking method · Hours · Location · Emergency contact · Responsible unit · Last reviewed date
CT-LEAD	CRM Lead	Name · Email · Phone · Nationality · Faculty interest · Level interest · Source (UTM) · Date captured · Status (New/Contacted/Enrolled) · Notes
 
19.  Analytics & Success KPIs
ID	KPI	Measurement	Year-1 Target	Owner
KPI-01	Admissions CTR	% Admissions visitors clicking Apply Now	≥ 8%	Admissions Director
KPI-02	Lead Capture Rate	% homepage visitors completing Request Info	≥ 3%	Comms / Marketing
KPI-03	Program Discovery	% Program Finder sessions resulting in program page view	≥ 60%	Web Team
KPI-04	Search Success Rate	% searches resulting in page visit (not bounce)	≥ 70%	Web Team
KPI-05	Document Download Rate	Downloads of application form, study plans, fee tables	Baseline + 30%	Web Team
KPI-06	Core Web Vitals LCP	Google Search Console P75	≤ 2.5s	Dev Team
KPI-07	Lighthouse SEO	Lighthouse SEO audit score	≥ 90	Dev Team
KPI-08	Lighthouse Accessibility	Lighthouse Accessibility score	≥ 90	Dev Team
KPI-09	Google Scholar Indexed	Publications indexed in Google Scholar	100% within 90 days	Research Office
KPI-10	News Freshness	% news items < 30 days old	≥ 90%	Comms / PR
KPI-11	Homepage Bounce Rate	Single-page sessions on homepage	≤ 45%	Web Team
KPI-12	Hospital/Clinic Freshness	Days since last review of Hospital/Clinic pages	≤ 30 days always	Student Affairs
KPI-13	Multilingual Core Coverage	% of core pages in AR + EN	100% at launch	Translation Ops
KPI-14	Zero Placeholder Pages	Live public pages with unauthorised placeholder content	= 0 at launch	Web Team
KPI-15	Accessibility Issue Reports	Issues reported per month via FR-ACCFB-01 route	< 5/month steady state	Web Team
KPI-16	Webometrics Improvement	Visibility + Transparency + Excellence scores	≥ 20% in 12 months	Rector's Office
 
20.  Migration Plan
ID	Title	Description / Acceptance Criteria	Priority	Tag
MIG-01	Full URL Audit	Before build: crawl all of spu.edu.sy + all faculty subdomains. Export every public URL. AC: complete URL list delivered to dev team before build starts.	MUST	MIG
MIG-02	301 Redirect Map	Every changed URL → 301 redirect. No current URL returns 404 after go-live. All v4.0 /faculties/* URLs mapped to new /facilities/* structure (to be defined in Facilities addendum). Delivered 4 weeks before launch. AC: all legacy URLs 301-redirect; zero 404s from legacy links.	MUST	MIG
MIG-03	Faculty Subdomain Migration	All /med/, /dent/, /pharm/ etc. → new /facilities/{slug}/ structure. Old subdomains → 301. DNS decommissioned 6 months post-launch. AC: no subdomain serves public content at go-live.	MUST	MIG
MIG-04	Parameter URL Elimination	All ?page=show&cat_id= URLs → clean slugs. Canonical tags on all migrated content. AC: zero parameter URLs in public sitemap after migration.	MUST	MIG
MIG-05	Content Migration Triage	Rate each page: Migrate / Rewrite / Archive / Retire. Rewrite items: named author + deadline before launch. AC: triage document complete; all rewrite items have owner and deadline.	MUST	MIG
MIG-06	Staged Rollout	New site on staging ≥ 30 days parallel with old (read-only). Old site → full 301 after 30 days. AC: staging period completed; old site set to 301 on schedule.	MUST	MIG
MIG-07	Post-Launch Scan	Automated scan (Screaming Frog or equivalent) within 48h of launch. All 404s resolved within 5 business days. AC: scan report generated; zero unresolved 404s after 5 days.	MUST	MIG
 
21.  Build Priority Roadmap — v5.0
P	Deliverable	Key Requirements	Success Signal	Tag
P1	Navigation architecture — landing pages + dropdowns for all 8 sections	FR-NAV01–07	All landing pages live; dropdowns functional; keyboard accessible	FR
P1	Homepage — all 10 blocks	Section 3	Bounce ≤ 45%; all CTAs functional	FR
P1	About — landing page + all 7 sub-pages	Section 4	Zero placeholders; AR + EN complete	FR
P1	Admissions — landing page + all sub-pages + CRM lead capture	Section 5	Leads captured; zero placeholders	FR
P1	Facilities — placeholder only	FR-FAC-PH01/02	Placeholder renders; dropdown shows Coming Soon	FR
P1	Security stack + CSRF + MFA	NFR-SEC-01–10	Pentest passed; MFA on all admin	NFR
P1	Core Web Vitals + mobile-first foundation	NFR-PERF-01–07	LCP ≤ 2.5s; CLS < 0.1	NFR
P1	Content Governance Framework	Section 17	All pages have named owner	GOV
P1	URL audit + 301 redirect map	MIG-01–04	Delivered 4 weeks before launch	MIG
P1	AR + EN translation ops	Section 15	Core pages AR + EN complete	I18N
P2	Research — landing page + all sub-pages	Section 7	DOI repository live; GS-indexed within 90 days	FR
P2	Campus Life — landing page + all sub-pages incl. Hospital + Dental	Section 8	Both signature asset pages live; review dates visible	FR
P2	E-Services — landing page + sub-pages	Section 9	All services linked; portal link functional	FR
P2	News — landing page + sub-pages + Press Room	Section 10	Press releases + media contact live	FR
P2	Contact — landing page + searchable campus map	Section 11	Building search works; accessibility routes visible	FR
P2	Expert Finder (People Directory + expertise tags)	FR-RES04, FR-RES-PRF01/02	Directory searchable; expertise tags live	FR
P2	Accessibility feedback route + review dates	NFR-ACC-07/08	Report route in footer; review dates on critical pages	FR
P2	Analytics KPI dashboard (all 16 KPIs)	Section 19	All 16 KPIs tracked from day 1	KPI
P2	Migration execution + post-launch scan	MIG-05–07	0 post-launch 404s	MIG
P3	Facilities — full specification (post addendum)	Facilities Addendum	Gate: addendum signed off before build begins	FR
P3	Alumni portal + alumni stories	CT-ALUMNI-STORY	Registration live; 3+ stories	FR
P3	Events calendar + RSVP + iCal	CT-EVENT, FR-EVT01	3+ events with iCal and RSVP	FR
P3	Research centers + conferences	FR-RES03/05	3+ centers profiled	FR
P3	CRM lead dashboard + CSV export	FR-CRM-02	Lead list + export functional	FR
P3	FR/ES/DE expansion (gate-controlled)	NFR-I18N-05	Gate criteria met and signed off first	I18N
P3	WCAG 2.1 AA full audit + screen reader test	NFR-ACC-01–06	Accessibility Lighthouse ≥ 90	NFR



SPU Website Requirements v5.0 — Navigation Architecture Redesign — Approved for Build
