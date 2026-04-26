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
│  ├─ directorates.html
│  ├─ history.html
│  ├─ leadership.html
│  └─ partnership.html
├─ about.html
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
├─ contact.html
├─ index.html
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
│  │  ├─ arab-uni.png
│  │  ├─ arcticons_emoji-classical-building.svg
│  │  ├─ bytesize_book.svg
│  │  ├─ campus-feature-01.webp
│  │  ├─ campus-feature-02.webp
│  │  ├─ corsera.png
│  │  ├─ dsc-1060.webp
│  │  ├─ dsc-1075.webp
│  │  ├─ DSC_1060.jpg
│  │  ├─ faculty-admin-sciences-banner.png
│  │  ├─ faculty-admin-sciences-logo.png
│  │  ├─ faculty-admin-sciences-logo.webp
│  │  ├─ faculty-ai-engineering-banner.png
│  │  ├─ faculty-ai-engineering-logo.png
│  │  ├─ faculty-ai-engineering-logo.webp
│  │  ├─ faculty-construction-engineering-banner.png
│  │  ├─ faculty-construction-engineering-logo.png
│  │  ├─ faculty-construction-engineering-logo.webp
│  │  ├─ faculty-dentistry-banner.png
│  │  ├─ faculty-dentistry-logo.png
│  │  ├─ faculty-dentistry-logo.webp
│  │  ├─ faculty-medicine-banner.png
│  │  ├─ faculty-medicine-logo.png
│  │  ├─ faculty-medicine-logo.webp
│  │  ├─ faculty-petroleum-engineering-banner.png
│  │  ├─ faculty-petroleum-engineering-logo.png
│  │  ├─ faculty-petroleum-engineering-logo.webp
│  │  ├─ faculty-pharmacy-banner.png
│  │  ├─ faculty-pharmacy-logo.png
│  │  ├─ faculty-pharmacy-logo.webp
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
│  │  ├─ ic_outline-language.svg
│  │  ├─ logo-spu (1).png
│  │  ├─ logo-spu.png
│  │  ├─ people-outline.svg
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
│  │  ├─ unsplash_s9CC2SKySJM.webp
│  │  ├─ unsplash_VckdJzo7ig0.webp
│  │  ├─ Vector-3.svg
│  │  ├─ Vector-4.svg
│  │  ├─ words-logo.png
│  │  └─ world-health.png
│  ├─ robots.txt
│  ├─ site.webmanifest
│  └─ sitemap.xml
├─ README.md
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
├─ src
│  ├─ alpine
│  │  ├─ pages
│  │  │  ├─ about-stores.js
│  │  │  ├─ admissions-stores.js
│  │  │  ├─ contact-stores.js
│  │  │  ├─ faculties-page-stores.js
│  │  │  ├─ home-stores.js
│  │  │  ├─ news-stores.js
│  │  │  ├─ research-stores.js
│  │  │  ├─ services-stores.js
│  │  │  └─ student-life-stores.js
│  │  ├─ register-faculty-catalog-store.js
│  │  ├─ register-layout-stores.js
│  │  └─ register-stores.js
│  ├─ config
│  │  ├─ site-pages.json
│  │  └─ site-routes.js
│  ├─ data
│  │  ├─ domains
│  │  │  ├─ faculties-catalog.js
│  │  │  └─ portal-access.js
│  │  ├─ layout-content.js
│  │  └─ pages
│  │     ├─ about-content.js
│  │     ├─ admissions-content.js
│  │     ├─ contact-content.js
│  │     ├─ home-content.js
│  │     ├─ news-content.js
│  │     ├─ research-content.js
│  │     ├─ services-content.js
│  │     └─ student-life-content.js
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
│  │  │  ├─ contact
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
│  │  │  ├─ research
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
│  │     │  ├─ hero.html
│  │     │  ├─ process.html
│  │     │  └─ requirements.html
│  │     ├─ contact
│  │     │  ├─ channels.html
│  │     │  ├─ hero.html
│  │     │  └─ visit.html
│  │     ├─ faculties
│  │     │  └─ faculty.html
│  │     ├─ home
│  │     │  ├─ events.html
│  │     │  ├─ faculties.html
│  │     │  ├─ healthcare.html
│  │     │  ├─ hero.html
│  │     │  ├─ honor-panel.html
│  │     │  ├─ news.html
│  │     │  ├─ paths.html
│  │     │  ├─ research.html
│  │     │  └─ stats.html
│  │     ├─ news
│  │     │  ├─ archive.html
│  │     │  ├─ featured.html
│  │     │  └─ hero.html
│  │     ├─ research
│  │     │  ├─ hero.html
│  │     │  ├─ initiatives.html
│  │     │  └─ priorities.html
│  │     ├─ services
│  │     │  ├─ access.html
│  │     │  └─ hero.html
│  │     └─ student-life
│  │        ├─ hero.html
│  │        ├─ highlights.html
│  │        └─ services.html
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
├─ student-life.html
└─ vite.config.js

```