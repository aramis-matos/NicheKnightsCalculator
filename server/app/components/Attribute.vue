<script setup lang="ts">
defineProps<{ attr: string; val?: string }>();
</script>
<template>
  <div class="flex gap-4">
    <h2>
      <span class="font-semibold">{{ attr }}</span
      >:
    </h2>
    <p>{{ val }}</p>
  </div>
</template>
