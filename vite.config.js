import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const sitePages = JSON.parse(readFileSync(new URL('./src/config/site-pages.json', import.meta.url), 'utf8'));
const input = Object.fromEntries(
  sitePages.pages.map((page) => [page.name, fileURLToPath(new URL(`./${page.fileName}`, import.meta.url))])
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function processIncludes(html) {
  return html.replace(/<include\s+src="([^"]+)"\s*><\/include>/gi, (match, src) => {
    try {
      const content = readFileSync(resolve(__dirname, src), 'utf-8');
      return processIncludes(content);
    } catch (e) {
      console.error(`[html-include] Error loading ${src}:`, e.message);
      return match;
    }
  });
}

function htmlIncludePlugin() {
  return {
    name: 'html-include',
    enforce: 'pre',
    transformIndexHtml(html) {
      return processIncludes(html);
    }
  };
}

export default defineConfig({
  plugins: [
    htmlIncludePlugin(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input,
    },
  },
  server: {
    allowedHosts: [
      'viable-image-enjoying.ngrok-free.dev'
    ]
  }
});
