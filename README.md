# SPU Website Frontend

Frontend for the Syrian Private University website using `Vite`, `Alpine.js`, and `Tailwind CSS`.

## Scripts

- `npm run validate:pages` validates the page registry, internal routes, hash targets, and referenced public assets before any generated output is written.
- `npm run optimize:images` resizes and recompresses the curated high-impact image set used by the live site.
- `npm run generate:pages` regenerates the HTML entry files, sitemap, robots file, and web manifest from the page registry.
- `npm run dev` validates the registry, regenerates page shells, and starts the local development server.
- `npm run audit:fragments` verifies every fragment has a valid root element and that shared layout fragments expose an Alpine root.
- `npm run build` validates the registry, regenerates the page shells, audits fragments, and creates the production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run inspect:html` runs the local HTML inspection helper against the dev server.

## Project Structure

- `src/config/site-pages.json` is the single source of truth for route paths, entry files, SEO metadata, and fragment order.
- `src/config/site-routes.js` exposes route helpers backed by `site-pages.json`, so runtime content does not hand-maintain page URLs.
- `scripts/generate-page-shells.js` validates the registry, composes the authored fragments into generated HTML shells, and emits the sitemap, robots file, and web manifest.
- `scripts/validate-site-pages.js` validates registry completeness, internal route/hash references, and public asset references used by source files.
- `index.html`, `about.html`, `admissions.html`, and the other route entry files are generated files committed to the repo as deployment-facing Vite entry points. Do not edit them manually.
- `src/fragments/layout/` contains shared layout fragments such as the header and footer.
- `src/fragments/pages/` contains page-specific fragments grouped by page name.
- `src/main.js` bootstraps Alpine on top of already-rendered page markup.
- `src/alpine/register-layout-stores.js` registers shared stores such as app language, navigation, footer content, and protected services state.
- `src/alpine/register-faculty-catalog-store.js` registers shared faculty catalogue data used across pages.
- `src/alpine/pages/` contains page-specific store registration for each major section of the site.
- `src/data/layout-content.js` contains content shared across pages.
- `src/data/domains/` contains shared domain configuration and structured data such as the faculty catalogue and portal access config.
- `src/data/pages/` contains content used only by individual pages.
- `src/features/` contains focused UI behaviors such as the calendar, reveal animations, and research slider.
- `src/styles/` contains global foundations, layout styles, and section-specific styling.
- `src/utils/` contains small reusable helpers.
- `public/images/` and `public/fonts/` contain static assets copied as-is by Vite.
- `assets-legacy/` contains archived, non-shipping assets that were intentionally removed from the public deploy surface.
- `dist/` is generated output and should not be edited manually.

## Development Notes

- Edit authored source in `src/` and static assets in `public/`.
- Do not hand-edit generated route shells or generated SEO assets. Regenerate them with `npm run generate:pages`.
- Do not edit `dist/`; regenerate it with `npm run build`.
- Fragment source belongs under `src/fragments/layout/` or `src/fragments/pages/<page-name>/`.
- The page registry in `src/config/site-pages.json` is the single source of truth for page metadata and structure. Update it whenever you add, remove, or reorder a page.
- Runtime page links should come from `src/config/site-routes.js`, not duplicated string literals.
- Protected portal destinations can be overridden with `VITE_SPU_PORTAL_URL` when a deployment environment needs a different portal origin.

## Folder Snapshot

```
Spu-Website
├─ about
│  ├─ directorates
│  │  └─ index.html
│  ├─ directorates.html
│  ├─ history
│  │  └─ index.html
│  ├─ history.html
│  ├─ index.html
│  ├─ leadership
│  │  └─ index.html
│  ├─ leadership.html
│  ├─ partnership
│  │  └─ index.html
│  └─ partnership.html
├─ about.html
├─ admissions
│  ├─ calendar
│  │  └─ index.html
│  ├─ documents
│  │  └─ index.html
│  ├─ faq
│  │  └─ index.html
│  ├─ how-to-apply
│  │  └─ index.html
│  ├─ index.html
│  ├─ requirements
│  │  └─ index.html
│  ├─ transfer
│  │  └─ index.html
│  └─ tuition
│     └─ index.html
├─ admissions.html
├─ assets-legacy
│  ├─ images
│  │  ├─ campus-photo-01.jpg
│  │  ├─ campus-photo-02.jpg
│  │  ├─ campus-photo-03.jpg
│  │  ├─ dji-campus-aerial-01.jpg
│  │  ├─ dji-campus-aerial-02.jpg
│  │  ├─ faculty-admin-sciences-banner.png
│  │  ├─ faculty-ai-engineering-banner.png
│  │  ├─ faculty-construction-engineering-banner.png
│  │  ├─ faculty-dentistry-banner.png
│  │  ├─ faculty-medicine-banner.png
│  │  ├─ faculty-petroleum-engineering-banner.png
│  │  ├─ faculty-pharmacy-banner.png
│  │  ├─ logo-spu-uppercase-01.png
│  │  ├─ logo-spu-uppercase-02.png
│  │  ├─ logo-spu-variant.png
│  │  ├─ logo-variant-copy.png
│  │  └─ logo-wordmark-legacy.png
│  └─ README.md
├─ campus-life
│  ├─ career
│  │  └─ index.html
│  ├─ clubs
│  │  └─ index.html
│  ├─ dental
│  │  └─ index.html
│  ├─ health
│  │  └─ index.html
│  ├─ hospital
│  │  └─ index.html
│  ├─ index.html
│  └─ services
│     └─ index.html
├─ campus-life.html
├─ contact
│  └─ index.html
├─ contact.html
├─ e-services
│  ├─ appeals
│  │  └─ index.html
│  ├─ index.html
│  ├─ library
│  │  └─ index.html
│  └─ student-portal
│     └─ index.html
├─ e-services.html
├─ facilities
│  ├─ ai-engineering
│  │  └─ index.html
│  ├─ ai-engineering.html
│  ├─ construction-engineering
│  │  └─ index.html
│  ├─ construction-engineering.html
│  ├─ dentistry
│  │  └─ index.html
│  ├─ dentistry.html
│  ├─ index.html
│  ├─ medicine
│  │  └─ index.html
│  ├─ medicine.html
│  ├─ petroleum-engineering
│  │  └─ index.html
│  ├─ petroleum-engineering.html
│  ├─ pharmacy
│  │  └─ index.html
│  └─ pharmacy.html
├─ facilities.html
├─ faculty.html
├─ generate.js
├─ index.html
├─ news
│  ├─ announcements
│  │  └─ index.html
│  ├─ events
│  │  └─ index.html
│  └─ index.html
├─ news.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ fonts
│  │  ├─ Hacen Tunisia Bold Regular.ttf
│  │  └─ Hacen Tunisia Regular.ttf
│  ├─ images
│  │  ├─ about-hero-1.jpg
│  │  ├─ about-hero-1.webp
│  │  ├─ about-hero-2.jpg
│  │  ├─ about-hero-2.webp
│  │  ├─ about-highlight-1.webp
│  │  ├─ ai-dean.jpeg
│  │  ├─ arab-uni.png
│  │  ├─ arcticons_emoji-classical-building.svg
│  │  ├─ business-dean.jpg
│  │  ├─ bytesize_book.svg
│  │  ├─ campus-feature-01.webp
│  │  ├─ campus-feature-02.webp
│  │  ├─ corsera.png
│  │  ├─ dental-clin-lab.jpg
│  │  ├─ dental-dean.jpg
│  │  ├─ dental-place.JPG
│  │  ├─ dsc-1060.webp
│  │  ├─ dsc-1075.webp
│  │  ├─ DSC_1060.jpg
│  │  ├─ faculty-ai-engineering-logo.png
│  │  ├─ faculty-business-logo.png
│  │  ├─ faculty-construction-engineering-logo.png
│  │  ├─ faculty-dentistry-logo.png
│  │  ├─ faculty-medicine-logo.png
│  │  ├─ faculty-petroleum-engineering-logo.png
│  │  ├─ faculty-pharmacy-logo.png
│  │  ├─ flowbite_user-graduate-outline.svg
│  │  ├─ frame-114.webp
│  │  ├─ Gemini_Generated_Image_c89yjwc89yjwc89y.webp
│  │  ├─ Gemini_Generated_Image_rrcjc2rrcjc2rrcj.webp
│  │  ├─ healthcare-dental.png
│  │  ├─ healthcare-dental.webp
│  │  ├─ healthcare-hospital.png
│  │  ├─ healthcare-hospital.webp
│  │  ├─ healthcare-main.png
│  │  ├─ healthcare-main.webp
│  │  ├─ icon-arrow-left-outline.svg
│  │  ├─ icon-arrow-right-outline.svg
│  │  ├─ icon-award-outline.svg
│  │  ├─ icon-bars-outline.svg
│  │  ├─ icon-book-outline.svg
│  │  ├─ icon-calendar-outline.svg
│  │  ├─ icon-check-circle-outline.svg
│  │  ├─ icon-check-outline.svg
│  │  ├─ icon-chevron-down-outline.svg
│  │  ├─ icon-chevron-left-outline.svg
│  │  ├─ icon-chevron-right-outline.svg
│  │  ├─ icon-close-outline.svg
│  │  ├─ icon-envelope-outline.svg
│  │  ├─ icon-facebook-outline.svg
│  │  ├─ icon-file-outline.svg
│  │  ├─ icon-globe-outline.svg
│  │  ├─ icon-handshake-outline.svg
│  │  ├─ icon-history-outline.svg
│  │  ├─ icon-instagram-outline.svg
│  │  ├─ icon-map-outline.svg
│  │  ├─ icon-phone-outline.svg
│  │  ├─ icon-search-outline.svg
│  │  ├─ icon-sitemap-outline.svg
│  │  ├─ icon-telegram-outline.svg
│  │  ├─ icon-university-outline.svg
│  │  ├─ icon-user-graduate-outline.svg
│  │  ├─ icon-users-outline.svg
│  │  ├─ icon-youtube-outline.svg
│  │  ├─ icons
│  │  │  ├─ ai.svg
│  │  │  ├─ award.svg
│  │  │  ├─ bim.svg
│  │  │  ├─ book.svg
│  │  │  ├─ business.svg
│  │  │  ├─ chair.svg
│  │  │  ├─ check-circle.svg
│  │  │  ├─ clinic.svg
│  │  │  ├─ dept.svg
│  │  │  ├─ exchange.svg
│  │  │  ├─ field.svg
│  │  │  ├─ file.svg
│  │  │  ├─ globe.svg
│  │  │  ├─ handshake.svg
│  │  │  ├─ history.svg
│  │  │  ├─ hospital.svg
│  │  │  ├─ hours.svg
│  │  │  ├─ lab-eng.svg
│  │  │  ├─ lab.svg
│  │  │  ├─ lang.svg
│  │  │  ├─ oil.svg
│  │  │  ├─ research.svg
│  │  │  ├─ sitemap.svg
│  │  │  ├─ software.svg
│  │  │  ├─ training.svg
│  │  │  ├─ users.svg
│  │  │  └─ years.svg
│  │  ├─ ic_outline-language.svg
│  │  ├─ logo-spu (1).png
│  │  ├─ logo-spu.png
│  │  ├─ medicine-dean.jpg
│  │  ├─ people-outline.svg
│  │  ├─ petroleom-dean.jpg
│  │  ├─ pharmacy-dean.jpg
│  │  ├─ pharmacy-place.jpg
│  │  ├─ research-applied-ai.webp
│  │  ├─ research-clinical-simulation.webp
│  │  ├─ research-digital-dentistry.webp
│  │  ├─ research-pharmaceutical-sciences.webp
│  │  ├─ research-smart-construction.webp
│  │  ├─ single-logo.png
│  │  ├─ slider-1.jpeg
│  │  ├─ slider-1.webp
│  │  ├─ slider-2.jpg
│  │  ├─ slider-2.webp
│  │  ├─ slider-3.jpg
│  │  ├─ slider-3.webp
│  │  ├─ slider-4.jpg
│  │  ├─ slider-4.webp
│  │  ├─ SPU LOGO 1.png
│  │  ├─ SPU LOGO.png
│  │  ├─ student.svg
│  │  ├─ time.svg
│  │  ├─ uni-main-place.JPG
│  │  ├─ unsplash_s9CC2SKySJM.webp
│  │  ├─ unsplash_VckdJzo7ig0.webp
│  │  ├─ vantom-lab-den.jpg
│  │  ├─ Vector-3.svg
│  │  ├─ Vector-4.svg
│  │  ├─ words-logo.png
│  │  ├─ world-health.png
│  │  ├─ كلية الصيدلة 1.png
│  │  └─ كلية الطب 1.png
│  ├─ robots.txt
│  ├─ site.webmanifest
│  └─ sitemap.xml
├─ README.md
├─ requirements.md
├─ research
│  ├─ centers
│  │  └─ index.html
│  ├─ expert-finder
│  │  └─ index.html
│  ├─ index.html
│  ├─ library
│  │  └─ index.html
│  └─ publications
│     └─ index.html
├─ research.html
├─ scripts
│  ├─ audit-fragment-roots.js
│  ├─ generate-page-shells.js
│  ├─ generate-research-images.js
│  ├─ inspect-html.js
│  ├─ optimize-all-images.js
│  ├─ optimize-images.js
│  └─ validate-site-pages.js
├─ services.html
├─ site-pages-fix.js
├─ SPU_Refactor_Todo.txt
├─ src
│  ├─ alpine
│  │  ├─ pages
│  │  │  ├─ about-stores.js
│  │  │  ├─ admissions-stores.js
│  │  │  ├─ campus-life-stores.js
│  │  │  ├─ contact-stores.js
│  │  │  ├─ facilities-page-stores.js
│  │  │  ├─ facilities-store.js
│  │  │  ├─ facility-hub-stores.js
│  │  │  ├─ home-stores.js
│  │  │  ├─ news-stores.js
│  │  │  ├─ research-stores.js
│  │  │  └─ services-stores.js
│  │  ├─ register-facility-catalog-store.js
│  │  ├─ register-layout-stores.js
│  │  └─ register-stores.js
│  ├─ config
│  │  ├─ redirects.json
│  │  ├─ site-pages.json
│  │  └─ site-routes.js
│  ├─ data
│  │  ├─ domains
│  │  │  ├─ facilities-catalog.js
│  │  │  └─ portal-access.js
│  │  ├─ layout-content.js
│  │  └─ pages
│  │     ├─ about-content.js
│  │     ├─ admissions-content.js
│  │     ├─ campus-life-content.js
│  │     ├─ contact-content.js
│  │     ├─ e-services-content.js
│  │     ├─ facilities-content.js
│  │     ├─ facility-hub-content.js
│  │     ├─ home-content.js
│  │     ├─ news-content.js
│  │     ├─ research-content.js
│  │     └─ services-content.js
│  ├─ features
│  │  ├─ calendar.js
│  │  ├─ font-awesome.js
│  │  ├─ research-slider.js
│  │  └─ reveal-sections.js
│  ├─ fragments
│  │  ├─ layout
│  │  │  ├─ about
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ about-directorates
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ about-history
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ about-leadership
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ about-partnership
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ admissions
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ admissions-calendar
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ admissions-documents
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ admissions-faq
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ admissions-how-to-apply
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ admissions-requirements
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ admissions-transfer
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ admissions-tuition
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ campus-life
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ campus-life-career
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ campus-life-clubs
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ campus-life-dental
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ campus-life-health
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ campus-life-hospital
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ campus-life-services
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ contact
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ e-services
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ e-services-appeals
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ e-services-library
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ e-services-student-portal
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ facilities
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ facilities-ai-engineering
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ facilities-construction-engineering
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ facilities-dentistry
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ facilities-medicine
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ facilities-petroleum-engineering
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ facilities-pharmacy
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ faculties
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ footer.html
│  │  │  ├─ header.html
│  │  │  ├─ home
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ news
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ news-announcements
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ news-events
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ research
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ research-centers
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ research-expert-finder
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ research-library
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ research-publications
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  ├─ services
│  │  │  │  ├─ boot-screen.html
│  │  │  │  └─ head.html
│  │  │  └─ student-life
│  │  │     ├─ boot-screen.html
│  │  │     └─ head.html
│  │  └─ pages
│  │     ├─ about
│  │     │  ├─ directorates
│  │     │  │  └─ content.html
│  │     │  ├─ history
│  │     │  │  └─ content.html
│  │     │  ├─ leadership
│  │     │  │  └─ content.html
│  │     │  ├─ navigation.html
│  │     │  ├─ overview.html
│  │     │  └─ partnership
│  │     │     └─ content.html
│  │     ├─ admissions
│  │     │  ├─ calendar-content.html
│  │     │  ├─ documents-content.html
│  │     │  ├─ faq-content.html
│  │     │  ├─ hero.html
│  │     │  ├─ how-to-apply-content.html
│  │     │  ├─ process.html
│  │     │  ├─ requirements-content.html
│  │     │  ├─ requirements.html
│  │     │  ├─ transfer-content.html
│  │     │  └─ tuition-content.html
│  │     ├─ campus-life
│  │     │  ├─ career-content.html
│  │     │  ├─ clubs-content.html
│  │     │  ├─ dental-content.html
│  │     │  ├─ health-content.html
│  │     │  ├─ hero.html
│  │     │  ├─ highlights.html
│  │     │  ├─ hospital-content.html
│  │     │  ├─ services-content.html
│  │     │  └─ services.html
│  │     ├─ contact
│  │     │  ├─ channels.html
│  │     │  ├─ hero.html
│  │     │  └─ visit.html
│  │     ├─ e-services
│  │     │  ├─ access.html
│  │     │  ├─ appeals-content.html
│  │     │  ├─ hero.html
│  │     │  ├─ library-content.html
│  │     │  └─ student-portal-content.html
│  │     ├─ facilities
│  │     │  ├─ additional.html
│  │     │  ├─ ai-engineering
│  │     │  │  └─ hub.html
│  │     │  ├─ construction-engineering
│  │     │  │  └─ hub.html
│  │     │  ├─ content.html
│  │     │  ├─ dean.html
│  │     │  ├─ dentistry
│  │     │  │  └─ hub.html
│  │     │  ├─ hero.html
│  │     │  ├─ highlights.html
│  │     │  ├─ medicine
│  │     │  │  └─ hub.html
│  │     │  ├─ petroleum-engineering
│  │     │  │  └─ hub.html
│  │     │  ├─ pharmacy
│  │     │  │  └─ hub.html
│  │     │  └─ stats.html
│  │     ├─ home
│  │     │  ├─ events.html
│  │     │  ├─ facilities.html
│  │     │  ├─ healthcare.html
│  │     │  ├─ hero.html
│  │     │  ├─ honor-panel.html
│  │     │  ├─ news.html
│  │     │  ├─ paths.html
│  │     │  ├─ research.html
│  │     │  └─ stats.html
│  │     ├─ news
│  │     │  ├─ admissions-sub
│  │     │  ├─ announcements-content.html
│  │     │  ├─ archive.html
│  │     │  ├─ campus-life-sub
│  │     │  ├─ events-content.html
│  │     │  ├─ featured.html
│  │     │  └─ hero.html
│  │     └─ research
│  │        ├─ centers-content.html
│  │        ├─ expert-finder-content.html
│  │        ├─ hero.html
│  │        ├─ initiatives.html
│  │        ├─ library-content.html
│  │        ├─ priorities.html
│  │        └─ publications-content.html
│  ├─ loader
│  │  └─ page-loader.js
│  ├─ main.js
│  ├─ style.css
│  ├─ styles
│  │  ├─ foundation.css
│  │  ├─ heroes.css
│  │  ├─ home-sections.css
│  │  ├─ honor-slider.css
│  │  ├─ layout.css
│  │  ├─ navigation.css
│  │  ├─ reveal.css
│  │  ├─ stats.css
│  │  └─ utilities.css
│  └─ utils
│     ├─ animate-counter.js
│     └─ clone.js
├─ todo-list.md
└─ vite.config.js

```