<template>
  <div class="bg-base-100 size-full" data-theme="synthwave">
    <nav>
      <NavBar />
    </nav>
    <slot />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: "%s - NicheKnights",
});
</script>

<style>
body,
html {
  @apply bg-base-100 h-screen w-screen;
}

div#__nuxt {
  @apply h-screen w-screen;
}
</style>
