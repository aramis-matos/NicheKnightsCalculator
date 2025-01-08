<template>
  <NuxtImg
    :src="`${props.class}.webp`"
    class="dark: size-5 invert dark:invert-0"
  />
</template>

<script setup lang="ts">
const props = defineProps<{ class?: string }>();
</script>

<style scoped></style>
