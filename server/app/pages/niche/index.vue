<script setup lang="ts">
import { useNiche } from "~/store/niches";
const store = useNiche();

async function getNiches(): Promise<void> {
  const vals = await store.getNiches();
  console.log(vals);
}
</script>

<template>
  <UContainer class="w-full max-w-6xl">
    <UCard class="flex w-full flex-col items-center gap-8">
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
      <button @click="getNiches">Calculate</button>
    </UCard>
  </UContainer>
</template>
