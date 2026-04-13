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
