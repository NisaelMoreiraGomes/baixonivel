// @ts-check
import { defineConfig } from 'astro/config';
import { SITE_CONFIG } from './src/const';

// https://astro.build/config
export default defineConfig({
    site: SITE_CONFIG.url
});
