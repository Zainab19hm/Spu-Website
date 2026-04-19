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

```text
Spu-Website
|- about/
|- assets-legacy/
|- dist/
|- public/
|  |- fonts/
|  |- images/
|  |- robots.txt
|  |- site.webmanifest
|  `- sitemap.xml
|- scripts/
|  |- audit-fragment-roots.js
|  |- generate-page-shells.js
|  |- inspect-html.js
|  `- validate-site-pages.js
|- src/
|  |- alpine/
|  |- config/
|  |- data/
|  |- features/
|  |- fragments/
|  |  |- layout/
|  |  `- pages/
|  |- styles/
|  |- utils/
|  |- main.js
|  `- style.css
|- about.html
|- admissions.html
|- contact.html
|- faculties.html
|- index.html
|- news.html
|- research.html
|- services.html
|- student-life.html
|- package.json
`- vite.config.js
```
