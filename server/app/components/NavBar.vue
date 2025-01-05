<script setup lang="ts">
const links = [
  { label: "Home", to: "/", icon: "i-heroicons-home" },
  {
    label: "Operator",
    to: "/operator",
    icon: "i-heroicons-user",
  },
  {
    label: "Niche",
    to: "/niche",
    icon: "i-heroicons-variable",
  },
  {
    label: "About Us",
    to: "/about",
    icon: "i-material-symbols-info-outline",
  },
];
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4 md:gap-0 items-baseline justify-between pl-4 pt-4">
    <NuxtLink class="flex justify-center gap-4" to="/">
      <NuxtImg src="/logo.png" class="size-8 hidden md:block" />
      <p class="text-2xl font-bold">NicheKnights</p>
    </NuxtLink>

    <div>
      <UVerticalNavigation :links="links" class="navbar-spacing flex md:hidden" />
      <UHorizontalNavigation :links="links" class="navbar-spacing hidden md:flex" />
    </div>
  </div>
</template>

<style scoped>
.navbar-spacing {
  @apply mb-2 md:mb-8 pl-0 md:pl-4
}
</style>