<script setup lang="ts">
const items = [
  {
    label: "What is NicheKnights?",
    icon: "i-heroicons-information-circle-solid",
    // content:
    //   "A calculator to make it easier to build unique and create teams for Arknights.",
    slot: "what_is",
  },
  {
    label: "Section - Operator",
    icon: "i-heroicons-user",
    content:
      "Find your favorite operator, click on them and see their details. All details that are presented can be used as a basis for creating a new team.",
  },
  {
    label: "Section - Niche",
    icon: "i-heroicons-variable",
    slot: "niche",
  },
  {
    label: "Section - About Us",
    icon: "i-material-symbols-info-outline",
    content:
      "Information on how to contact the maintainer and how to contribute to the project",
  },
  {
    label: "Section - Theme",
    icon: "i-heroicons-moon-20-solid",
    content: "Toggle in between light and dark mode",
  },
];

const links = [
  {
    label: "Nuxt",
    icon: "i-logos-nuxt-icon",
    to: "https://nuxt.com/",
  },
  {
    label: "Postgraphile",
    icon: "i-logos-postgresql",
    to: "https://postgraphile.org/",
  },
  {
    label: "Bun",
    icon: "i-logos-bun",
    to: "https://bun.sh/",
  },
];

useSeoMeta({
  title: "Home",
});
useHead({
  title: "Home",
});
</script>
<template>
  <UCard>
    <div class="flex flex-col gap-4">
      <h1 class="text-4xl">Welcome to NicheKnights!</h1>
      <p>Find Your New Favorite Niche!</p>
      <UAccordion :items="items">
        <template #what_is>
          <div class="flex flex-col">
            <h3 class="text-2xl">
              A calculator to make it easier to build unique and create teams
              for Arknights.
            </h3>
            <div class="flex flex-col justify-center">
              <h4 class="mt-8 text-xl">Created with:</h4>
              <UVerticalNavigation class="md:hidden" :links="links" />
              <UHorizontalNavigation class="hidden md:flex" :links="links" />
            </div>
            <p>
              Created as a test project on
              <UIcon name="i-logos-graphql" /> GraphQL and Nuxt.
            </p>
            <p>
              Feel free to use the Graphql server to learn how to use Graphql
              since there aren't many open APIs to learn from
            </p>
          </div>
        </template>
        <template #niche>
          <article class="prose dark:prose-invert w-full">
            <ContentDoc path="/niche_examples" />
          </article>
        </template>
      </UAccordion>
    </div>
  </UCard>
</template>
