// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://liammocean.bzh',
  base: '/decouvrir',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
