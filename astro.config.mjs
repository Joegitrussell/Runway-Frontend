import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: netlify(),
  scripts: [
    // Import the Urbanist font
    {
      type: "module",
      src: require.resolve("@fontsource/urbanist"),
    },
  ],
});
