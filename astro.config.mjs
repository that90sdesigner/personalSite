import { defineConfig } from 'astro/config';
export default defineConfig({});

{
    site: 'https://www.shankarux.com'
  }

// vite.config.js
export default {
  build: {
    rollupOptions: {
      external: ['@astrojs/rss']
    }
  }
}