// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://louanbardou.github.io',
  base: '/liammocean-blog',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
