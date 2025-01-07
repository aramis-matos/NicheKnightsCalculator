<script setup lang="ts">
import { useNiche } from "~/store/niches";
const store = useNiche();

const results = ref<{ name?: string; class?: string }[]>([]);

async function getNiches(): Promise<void> {
  results.value = await store.getNiches();
}
</script>

<template>
  <div class="w-full">
    <UContainer class="w-full max-w-6xl">
      <UCard class="">
        <div class="flex items-center justify-end gap-4">
          <p class="font-semibold">Exclusive</p>
          <UToggle color="primary" v-model="store.isAnd" />
        </div>
        <div class="grid grid-cols-1 gap-4">
          <div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <NicheSelect
              query="allClasses"
              resKey="allClasses"
              title="Classes"
              niche="classes"
            />
            <NicheSelect
              query="allBranches"
              resKey="allBranches"
              title="Branches"
              niche="branches"
            />
            <NicheSelect
              query="allArtists"
              resKey="allArtists"
              title="Artists"
              niche="artists"
            />
            <NicheSelect
              query="allPlaceOfBirths"
              resKey="allPlaceOfBirths"
              title="Places of Birth"
              niche="placesOfBirth"
            />
            <NicheSelect
              query="allRaces"
              resKey="allRaces"
              title="Races"
              niche="races"
            />
            <NicheSelect
              query="allGenders"
              resKey="allGenders"
              title="Genders"
              niche="genders"
            />
            <NicheSelect
              query="allInfections"
              resKey="allInfections"
              title="Is Infected?"
              niche="infections"
            />
          </div>
          <div class="flex items-center justify-center">
            <UButton @click="getNiches" size="md" variant="soft"
              >Calculate</UButton
            >
          </div>
        </div>
      </UCard>
    </UContainer>
    <UContainer class="mt-8 w-full max-w-6xl" v-if="results.length > 0">
      <UCard>
        <ul
          class="grid max-h-96 grid-cols-2 place-content-center gap-4 overflow-y-auto md:grid-cols-3"
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
    </UContainer>
  </div>
</template>
