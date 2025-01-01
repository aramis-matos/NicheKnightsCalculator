<template>
  <div class="bg-slate-400">Hello from the main no you!!!?</div>
  <div>
    <ul v-for="{ id, name } of nodes">
      <li>{{ id }} - {{ name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{ nodes: { id: string; name: string }[] }>();
const {
  data: { value },
} = await useAsyncGql("charactersLessThanHeight", { height: 130 });

const nodes = computed(
  () =>
    (value as { allHeightCharacter: { nodes: { id: string; name: string }[] } })
      .allHeightCharacter.nodes
);
</script>
