<script setup lang="ts">
defineProps<{ title: string; options?: string[] }>();
</script>

<template>
  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">{{ title }}</span>
    </div>
    <select class="select select-bordered" multiple="true">
      <option disabled selected>Pick multiple</option>
      <option v-for="op of options" :value="op">{{ op }}</option>
    </select>
  </label>
</template>
