# SPU Website Frontend

Frontend for the Syrian Private University website using `Vite`, `Alpine.js`, and `Tailwind CSS`.

## Scripts

- `npm run generate:pages` regenerates the HTML entry files, sitemap, robots file, and web manifest from the page registry.
- `npm run dev` starts the local development server.
- `npm run audit:fragments` verifies every shared/page fragment starts with an Alpine root (`x-data`).
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run inspect:html` runs the local HTML inspection helper against the dev server.

## Project Structure

- `src/config/site-pages.json` is the single source of truth for page metadata, entry files, and fragment lists.
- `scripts/generate-page-shells.js` regenerates the root HTML entry files and basic SEO assets from the page registry.
- `index.html` and the other root `*.html` files are generated shells that declare the active page with `data-page`.
- `src/main.js` bootstraps Alpine, shared layout, and page loading.
- `src/config/site-shell.js` exposes the page registry to the runtime and maps shared layout fragments and page sections.
- `src/alpine/register-layout-stores.js` registers stores shared across pages such as app language, navigation, and footer.
- `src/alpine/register-faculty-catalog-store.js` registers shared faculty data used across pages.
- `src/alpine/pages/` contains page-specific store registration for each major section of the site.
- `src/data/layout-content.js` contains content shared across pages.
- `src/data/domains/` contains shared domain data such as the faculty catalogue.
- `src/data/pages/` contains content used only by individual pages.
- `src/features/` contains focused UI behaviors such as the calendar, reveal animations, and research slider.
- `src/lib/` contains infrastructure utilities such as static component loading.
- `src/utils/` contains small reusable helpers.
- `public/components/layout/` contains shared fragments such as the header and footer.
- `public/components/pages/` contains page sections grouped by page name.
- `public/images/` and `public/fonts/` contain static assets copied as-is by Vite.
- `dist/` is generated output and should not be edited manually.

## Development Notes

- Edit source files in `src/` and static assets in `public/`.
- Do not edit `dist/`; regenerate it with `npm run build`.
- Do not hand-edit the root HTML entry files; regenerate them with `npm run generate:pages`.
- `public/` is source static content, while `dist/` is the compiled production output.
- Shared layout belongs under `layout/`; page-only fragments belong under `pages/<page-name>/`.
- `npm run build` automatically runs the fragment root audit first so missing `x-data` roots are caught before shipping.


```
Spu-Website
├─ about-directorates.html
├─ about-history.html
├─ about-leadership.html
├─ about-partnerships.html
├─ about.html
├─ admissions
│  ├─ fees
│  │  └─ index.html
│  ├─ process
│  │  └─ index.html
│  └─ requirements
│     └─ index.html
├─ admissions.html
├─ contact.html
├─ faculties.html
├─ index.html
├─ news.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ components
│  │  ├─ layout
│  │  │  ├─ footer.html
│  │  │  └─ header.html
│  │  └─ pages
│  │     ├─ about
│  │     │  ├─ directorates
│  │     │  │  └─ index.html
│  │     │  ├─ history
│  │     │  │  └─ index.html
│  │     │  ├─ leadership
│  │     │  │  └─ index.html
│  │     │  └─ partnerships
│  │     │     └─ index.html
│  │     ├─ admissions
│  │     │  ├─ certificate-filter.html
│  │     │  ├─ content.html
│  │     │  ├─ hero.html
│  │     │  ├─ payment-methods.html
│  │     │  ├─ process.html
│  │     │  ├─ quick-access-cards.html
│  │     │  ├─ requirements.html
│  │     │  ├─ stats.html
│  │     │  └─ tuition-fees-table.html
│  │     ├─ contact
│  │     │  ├─ channels.html
│  │     │  ├─ hero.html
│  │     │  └─ visit.html
│  │     ├─ faculties
│  │     │  ├─ catalog.html
│  │     │  ├─ hero.html
│  │     │  └─ support.html
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
│  │     └─ student-life
│  │        ├─ hero.html
│  │        ├─ highlights.html
│  │        └─ services.html
│  ├─ fonts
│  │  ├─ Hacen Tunisia Bold Regular.ttf
│  │  └─ Hacen Tunisia Regular.ttf
│  ├─ images
│  │  ├─ 1.png
│  │  ├─ arcticons_emoji-classical-building.svg
│  │  ├─ bytesize_book.svg
│  │  ├─ DJI_20251222154016_0010_D copy.jpg
│  │  ├─ DJI_20251222154530_0015_D copy.jpg
│  │  ├─ DSC_1015.JPG
│  │  ├─ DSC_1016.JPG
│  │  ├─ DSC_1060.jpg
│  │  ├─ DSC_1066.JPG
│  │  ├─ DSC_1075.JPG
│  │  ├─ faculty-admin-sciences-banner.png
│  │  ├─ faculty-admin-sciences-logo.png
│  │  ├─ faculty-ai-engineering-banner.png
│  │  ├─ faculty-ai-engineering-logo.png
│  │  ├─ faculty-construction-engineering-banner.png
│  │  ├─ faculty-construction-engineering-logo.png
│  │  ├─ faculty-dentistry-banner.png
│  │  ├─ faculty-dentistry-logo.png
│  │  ├─ faculty-medicine-banner.png
│  │  ├─ faculty-medicine-logo.png
│  │  ├─ faculty-petroleum-engineering-banner.png
│  │  ├─ faculty-petroleum-engineering-logo.png
│  │  ├─ faculty-pharmacy-banner.png
│  │  ├─ faculty-pharmacy-logo.png
│  │  ├─ flowbite_user-graduate-outline.svg
│  │  ├─ Frame 114.png
│  │  ├─ Gemini_Generated_Image_c89yjwc89yjwc89y.png
│  │  ├─ Gemini_Generated_Image_rrcjc2rrcjc2rrcj.png
│  │  ├─ healthcare-dental.png
│  │  ├─ healthcare-hospital.png
│  │  ├─ healthcare-main.png
│  │  ├─ ic_outline-language.svg
│  │  ├─ logo copy.png
│  │  ├─ logo-spu (1).png
│  │  ├─ logo-spu.png
│  │  ├─ people-outline.svg
│  │  ├─ single-logo.png
│  │  ├─ slider-1.jpeg
│  │  ├─ slider-2.jpg
│  │  ├─ slider-3.jpg
│  │  ├─ slider-4.jpg
│  │  ├─ SPU LOGO 1.png
│  │  ├─ SPU LOGO.png
│  │  ├─ student.svg
│  │  ├─ time.svg
│  │  ├─ unsplash_s9CC2SKySJM.png
│  │  ├─ unsplash_VckdJzo7ig0.png
│  │  ├─ Vector-3.svg
│  │  ├─ Vector-4.svg
│  │  └─ words-logo.png
│  ├─ robots.txt
│  ├─ site.webmanifest
│  └─ sitemap.xml
├─ README.md
├─ research.html
├─ scripts
│  ├─ audit-fragment-roots.js
│  ├─ generate-page-shells.js
│  ├─ inspect-html.js
│  └─ patch-generator.js
├─ SPU_Requirements_v5 (Repaired).htmL
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
│  │  │  └─ student-life-stores.js
│  │  ├─ register-faculty-catalog-store.js
│  │  ├─ register-layout-stores.js
│  │  └─ register-stores.js
│  ├─ config
│  │  ├─ site-pages.json
│  │  └─ site-shell.js
│  ├─ data
│  │  ├─ domains
│  │  │  └─ faculties-catalog.js
│  │  ├─ layout-content.js
│  │  └─ pages
│  │     ├─ about-content.js
│  │     ├─ admissions-content.js
│  │     ├─ contact-content.js
│  │     ├─ faculties-content.js
│  │     ├─ home-content.js
│  │     ├─ news-content.js
│  │     ├─ research-content.js
│  │     └─ student-life-content.js
│  ├─ features
│  │  ├─ calendar.js
│  │  ├─ research-slider.js
│  │  └─ reveal-sections.js
│  ├─ lib
│  │  └─ load-static-components.js
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