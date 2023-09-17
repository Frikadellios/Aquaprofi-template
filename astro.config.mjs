import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({configFile: './tailwind.config.cjs'}), sitemap()],
  site: 'https://aquaprofi.com',
  output: "server",
  adapter: netlify({
    dist: new URL('./dist/', import.meta.url),
    builders: true,
  })
});