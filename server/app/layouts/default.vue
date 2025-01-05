<template>
  <UContainer class="w-full">
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
