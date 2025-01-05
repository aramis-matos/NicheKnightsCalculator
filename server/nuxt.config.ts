// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: ["nuxt-graphql-client", "@pinia/nuxt", "@nuxt/ui"],

  tailwindcss: {
    configPath: "@/assets/tailwind.config.ts",
    cssPath: "@/assets/tailwind.css",
  },

  "graphql-client": {
    codegen: false,
  },
});
