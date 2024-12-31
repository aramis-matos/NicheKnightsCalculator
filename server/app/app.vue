<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Home",
  description: "Find Your New Favorite Arknights Niche!",
  ogTitle: "Home",
  ogDescription: "Find Your New Favorite Arknights Niche!",
  ogImage: "/logo.png",
  ogUrl: "[og:url]",
  twitterTitle: "Home",
  twitterDescription: "Find Your New Favorite Arknights Niche!",
  twitterImage: "/logo.png",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/logo.png",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap",
      crossorigin: "anonymous"
    }
  ],
});

</script>
