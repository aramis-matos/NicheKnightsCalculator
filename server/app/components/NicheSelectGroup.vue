<template>
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
</template>
