import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    configFile: './tailwind.config.cjs'
  }), sitemap()],
  output: "server",
  adapter: vercel({
    functionPerRoute: true,
    speedInsights: {
      enabled: true,
    },
  }),
});