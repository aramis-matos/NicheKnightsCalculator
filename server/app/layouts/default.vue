<template>
  <div class="size-full">
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

<style></style>
