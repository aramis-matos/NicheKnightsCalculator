<script setup lang="ts">
defineProps<{
  title: string;
  options?: { id: string; name: string }[];
}>();
</script>

<template>
  <label class="form-control w-full">
    <div class="label">
      <span class="label-text">{{ title }}</span>
    </div>
    <select class="select select-bordered" multiple="true">
      <option disabled selected>Pick multiple</option>
      <option v-for="op of options" :value="op" :key="op.id">
        {{ op.name }}
      </option>
    </select>
  </label>
</template>
