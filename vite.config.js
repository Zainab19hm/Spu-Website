import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const sitePages = JSON.parse(readFileSync(new URL('./src/config/site-pages.json', import.meta.url), 'utf8'));
const input = Object.fromEntries(
  sitePages.pages.map((page) => [page.name, fileURLToPath(new URL(`./${page.fileName}`, import.meta.url))])
);

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input,
    },
  },
  server: {
    allowedHosts: ['justiceless-subpreputial-brooklynn.ngrok-free.dev']
  }
});
