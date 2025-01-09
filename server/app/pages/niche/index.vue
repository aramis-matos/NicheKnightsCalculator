<script setup lang="ts">
import { useNiche } from "~/store/niches";
const store = useNiche();

const results = ref<{ name?: string; class?: string }[]>([]);

const clicked = ref(false);

async function getNiches(): Promise<void> {
  results.value = await store.getNiches();
  clicked.value = true;
}

onBeforeUnmount(() => {
  store.initialize();
});
</script>

<template>
  <div class="w-full">
    <UCard class="">
      <div
        :class="`flex items-center justify-end gap-4 ${store.canExclude ? 'animate-shake' : ''}`"
      >
        <p class="font-semibold">Exclusive</p>
        <UToggle
          color="primary"
          v-model="store.isAnd"
          :disabled="!store.canExclude"
        />
      </div>
      <div class="grid grid-cols-1 gap-4">
        <NicheSelectGroup />
        <div class="flex items-center justify-center">
          <UButton
            @click="getNiches"
            size="md"
            variant="soft"
            :disabled="!store.canCompute"
            >Calculate</UButton
          >
        </div>
      </div>
    </UCard>
    <transition mode="out-in">
      <UCard class="calculation" v-if="results.length > 0" key="has_res">
        <ul
          class="grid h-1/2 max-h-96 grid-cols-2 gap-4 overflow-y-auto md:grid-cols-3"
        >
          <li
            v-for="op of results"
            :key="`${op.name}+${op.class}`"
            class="flex gap-4"
          >
            <CharIcon :class="op.class" />
            <p>{{ op.name }}</p>
          </li>
        </ul>
      </UCard>
      <UCard
        class="calculation"
        v-else-if="clicked && results.length === 0"
        key="no_res"
      >
        <div class="flex items-center justify-center">
          <p class="text-3xl font-semibold">No Results</p>
        </div>
      </UCard>
    </transition>
  </div>
</template>

<style scoped>
.v-enter-active {
  @apply animate-fade-down animate-duration-500;
}

.v-leave-active {
  @apply animate-fade-down animate-reverse animate-duration-500;
}

.calculation {
  @apply mt-8 w-full;
}
</style>
