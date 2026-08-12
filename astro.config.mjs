// @ts-check
import { defineConfig } from 'astro/config';
import { SITE_CONFIG } from './src/const';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: SITE_CONFIG.url,
    integrations: [sitemap(), mdx()]
});