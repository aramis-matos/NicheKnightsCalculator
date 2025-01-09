<script setup lang="ts">
import { useNiche } from "~/store/niches";
const store = useNiche();

const results = ref<{ name?: string; class?: string }[]>([]);

const clicked = ref(false);

async function getNiches(): Promise<void> {
  results.value = await store.getNiches();
  clicked.value = true;
}
</script>

<template>
  <div class="w-full">
    <!-- <UContainer class="w-full max-w-6xl"> -->
    <UCard class="">
      <div class="flex items-center justify-end gap-4">
        <p class="font-semibold">Exclusive</p>
        <UToggle color="primary" v-model="store.isAnd" />
      </div>
      <div class="grid grid-cols-1 gap-4">
        <div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <NicheSelect
            query="allRarity"
            resKey="allRarity"
            title="Rarity"
            niche="rarity"
            placeholder="Rarity"
          />
          <NicheSelect
            query="allClasses"
            resKey="allClasses"
            title="Classes"
            niche="classes"
            placeholder="Classes"
          />
          <NicheSelect
            query="allBranches"
            resKey="allBranches"
            title="Branches"
            niche="branches"
            placeholder="Branches"
          />
          <NicheSelect
            query="allArtists"
            resKey="allArtists"
            title="Artists"
            niche="artists"
            placeholder="Artists"
          />
          <NicheSelect
            query="allPlaceOfBirths"
            resKey="allPlaceOfBirths"
            title="Places of Birth"
            niche="placesOfBirth"
            placeholder="Places of Birth"
          />
          <NicheSelect
            query="allRaces"
            resKey="allRaces"
            title="Races"
            niche="races"
            placeholder="Places of Birth"
          />
          <NicheSelect
            query="allGenders"
            resKey="allGenders"
            title="Genders"
            niche="genders"
            placeholder="Genders"
          />
          <NicheSelect
            query="allInfections"
            resKey="allInfections"
            title="Is Infected?"
            niche="infections"
            placeholder="Infection Status"
          />
          <NicheSelect
            query="allCustomTraits"
            resKey="allCustomTraits"
            title="Misc. Traits"
            niche="traits"
            placeholder="Misc Traits"
          />
        </div>
        <div class="flex items-center justify-center">
          <UButton @click="getNiches" size="md" variant="soft"
            >Calculate</UButton
          >
        </div>
      </div>
    </UCard>
    <!-- </UContainer> -->
    <transition mode="out-in">
      <!-- <UContainer > -->
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
      <!-- </UContainer> -->
      <!-- <UContainer
      > -->
      <UCard
        class="calculation"
        v-else-if="clicked && results.length === 0"
        key="no_res"
      >
        <div class="flex items-center justify-center">
          <p class="text-3xl font-semibold">No Results</p>
        </div>
      </UCard>
      <!-- </UContainer> -->
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
