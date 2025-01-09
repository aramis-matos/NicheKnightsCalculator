// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    "nuxt-graphql-client",
    "@pinia/nuxt",
    "@nuxt/ui",
    "@nuxt/image",
    "nuxt-lodash",
  ],

  tailwindcss: {
    configPath: "@/assets/tailwind.config.ts",
    cssPath: "@/assets/tailwind.css",
  },

  "graphql-client": {
    codegen: false,
    tokenStorage: {
      name: "__session",
      mode: "cookie", // default
      cookieOptions: {
        path: "/",
        httpOnly: true, // Only accessible via HTTP(S)
        maxAge: 60 * 60 * 24 * 5, // 5 days
      },
    },
  },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
