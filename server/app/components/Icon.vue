<template>
  <NuxtImg :src="`${props.class}.webp`" class="size-5"/>
</template>

<script setup lang="ts">
const props = defineProps<{ class: string }>();
</script>
