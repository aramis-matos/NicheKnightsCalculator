<script setup lang="ts">
const colorMode = useColorMode();

const icon = ref("i-heroicons-moon-20-solid");

const links = ref([
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
  {
    label: "Theme",
    icon,
    click: () => {
      colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
  },
]);

watch(colorMode, () => {
  icon.value =
    colorMode.value === "dark"
      ? "i-heroicons-moon-20-solid"
      : "i-heroicons-sun-20-solid";
});
</script>

<template>
  <div
    class="flex flex-col items-baseline justify-between gap-4 pl-4 pt-4 md:flex-row md:gap-0"
  >
    <NuxtLink class="flex justify-center gap-4" to="/">
      <NuxtImg src="/logo.png" class="hidden size-8 md:block" />
      <p class="text-2xl font-bold">NicheKnights</p>
    </NuxtLink>

    <div>
      <UVerticalNavigation
        :links="links"
        class="navbar-spacing flex md:hidden"
      />
      <UHorizontalNavigation
        :links="links"
        class="navbar-spacing hidden md:flex"
      />
      <!-- <UButton
        :icon="
          isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
        "
        color="gray"
        variant="ghost"
        aria-label="Theme"
        @click="isDark = !isDark"
      /> -->
    </div>
  </div>
</template>

<style scoped>
.navbar-spacing {
  @apply mb-2 pl-0 md:mb-8 md:pl-4;
}
</style>
