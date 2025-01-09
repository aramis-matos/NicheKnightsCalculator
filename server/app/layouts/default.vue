<template>
  <UContainer class="mb-4 w-full max-w-7xl">
    <NavBar />
    <slot />
  </UContainer>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: "%s - NicheKnights",
});
</script>

<style></style>
