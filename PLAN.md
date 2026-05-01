## Architecture & Structure Remediation Plan (Hybrid Scope, Canonical Slugs, Facilities v5.1)

### Summary
- Deliver a two-phase architecture fix:
1. Phase 1: close all launch-critical navigation and route-structure gaps from v5 (MUST-first).
2. Phase 2: complete remaining section route parity and implement full Facilities v5.1 hub-and-spoke model.
- Standardize canonical URLs to requirements slugs and preserve existing links with permanent redirects.
- Make global navigation match requirements behavior (top-level landing pages + dropdowns + full utility nav).

### Implementation Changes
- Canonical route matrix:
1. Keep the 8 top-level landing routes as canonical.
2. Add all missing required sub-routes in About, Research, Campus Life, E-Services, News, and Contact.
3. Rename mismatched slugs to requirements canonical forms (for example `/about/partnerships`) and add 301s from old slugs.
- Navigation architecture:
1. Ensure each top-level item click goes to its landing page URL.
2. Ensure dropdowns list required sub-pages per section and are keyboard/touch accessible.
3. Add utility nav items globally: Language switcher, Search, Apply CTA (`/admissions/how-to-apply`), Student Portal (new tab), Staff Access, conditional Emergency Notice.
- Facilities v5.1 structure:
1. Keep `/facilities` as landing page with facility cards.
2. For each launch facility, use `/facilities/{facility}` as hub.
3. Add subpages under each facility: `overview`, `departments`, `study-plan`, `calendar`, `research`, `projects`, `alumni`, `valedictorians`, and conditional `labs`, `training`.
4. Add redirects from current flat/legacy facility URLs to canonical hub/subpage routes.
- Routing/config contract updates:
1. In [site-pages.json](/c:/Users/HASEEB/Desktop/Spu-Website/src/config/site-pages.json), every page entry uses one canonical `route`; add optional `legacyRoutes` array for migrated aliases.
2. In [layout-content.js](/c:/Users/HASEEB/Desktop/Spu-Website/src/data/layout-content.js), align dropdown definitions exactly to required IA and include utility-nav model.
3. In [redirects.json](/c:/Users/HASEEB/Desktop/Spu-Website/src/config/redirects.json), add complete 301 map for renamed and legacy paths.

### Test Plan
- Route coverage checks:
1. Assert all required canonical routes resolve to real pages.
2. Assert no required sub-route is missing in route config or generated output.
- Navigation behavior checks:
1. Desktop: top-level click vs dropdown behavior works independently.
2. Mobile: hamburger tree includes full IA and submenu behavior.
3. Keyboard: Tab/Enter navigation and Escape close behavior for dropdowns.
- Redirect and canonical checks:
1. Old/mismatched URLs return 301 to canonical targets.
2. Canonical tags match the canonical route for each page.
- IA acceptance checks:
1. Breadcrumbs appear on all non-home pages.
2. Primary content routes are reachable within 3 clicks from homepage.
3. Utility nav appears on all pages and links to correct destinations.

### Assumptions & Defaults
- Scope choice: Hybrid.
- URL policy: canonical requirements slugs + permanent redirects from existing slugs.
- Facilities choice: full v5.1 architecture implemented in Phase 2, after Phase 1 IA stabilization.
- “Structure complete” means route topology + navigation behavior are compliant; content-depth completeness can proceed in parallel after route scaffolding is live.
