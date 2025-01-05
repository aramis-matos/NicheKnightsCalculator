<script setup lang="ts">
defineProps<{ to: string; text: string }>();
</script>
<template>
  <li>
    <NuxtLink
      :to="to"
      active-class="active"
      class="flex items-center justify-center gap-4"
    >
      <slot></slot>
      <p>{{ text }}</p>
    </NuxtLink>
  </li>
</template>
