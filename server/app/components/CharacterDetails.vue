<script setup lang="ts">
import type {
  AllTraitsCharacterQuery,
  AllCharacterArtistQuery,
  AllCharacterArtistQueryVariables,
  AllTraitsCharacterQueryVariables,
  GetOperatorDetailsQuery,
  GetOperatorDetailsQueryVariables,
} from "~/gql/graphql";
import { useSelectedCharacter } from "~/store/selectedCharacter";

const operator = reactive<GetOperatorDetailsQuery>({});
const artists = reactive<AllCharacterArtistQuery>({});
const traits = reactive<AllTraitsCharacterQuery>({});
const store = useSelectedCharacter();

const { useAsyncGql, useGql } = useGqlWithTypes<
  GetOperatorDetailsQuery,
  GetOperatorDetailsQueryVariables
>("getOperatorDetails");

const { useGql: artGql, useAsyncGql: artAsyncGql } = useGqlWithTypes<
  AllCharacterArtistQuery,
  AllCharacterArtistQueryVariables
>("allCharacterArtist");

const { useGql: traitGql, useAsyncGql: asyncTraitGql } = useGqlWithTypes<
  AllTraitsCharacterQuery,
  AllTraitsCharacterQueryVariables
>("allTraitsCharacter");

operator.characterByName = (
  await useAsyncGql({ name: store.name })
).data.value.characterByName;

artists.allCharacterArtist = (
  await artAsyncGql({ search: store.name })
).data.value.allCharacterArtist;

traits.allTraitsCharacter = (
  await asyncTraitGql({ search: store.name })
).data.value.allTraitsCharacter;

watch(
  () => store.name,
  async () => {
    operator.characterByName = (
      await useGql({ name: store.name })
    ).characterByName;

    artists.allCharacterArtist = (
      await artGql({ search: store.name })
    ).allCharacterArtist;

    traits.allTraitsCharacter = (
      await traitGql({ search: store.name })
    ).allTraitsCharacter;
  },
);

function getHeight(height?: number): string {
  return height !== -1 ? `${height} cm` : "Unknown";
}
</script>

<template>
  <div class="flex items-center gap-8 pb-4">
    <NuxtImg
      :src="`/${operator.characterByName?.classByClassId?.name}.webp`"
      class="size-10 invert dark:invert-0"
    />
    <h1 class="text-4xl">{{ operator.characterByName?.name }}</h1>
  </div>
  <div class="flex w-full items-center justify-between">
    <div class="flex w-1/2 flex-col">
      <Attribute
        attr="Rarity"
        :val="operator.characterByName?.rarity.toString() + ' Star'"
      />
      <Attribute
        attr="Class"
        :val="operator.characterByName?.classByClassId?.name"
      />
      <Attribute
        attr="Branch"
        :val="operator.characterByName?.branchByBranchId?.name"
      />
      <Attribute
        attr="Gender"
        :val="operator.characterByName?.genderByGenderId?.name"
      />
      <Attribute
        attr="Height"
        :val="getHeight(operator.characterByName?.height)"
      />
      <Attribute
        attr="Place of Birth"
        :val="operator.characterByName?.placeOfBirthByPlaceOfBirthId?.name"
      />
      <Attribute
        attr="Race"
        :val="operator.characterByName?.raceByRaceId?.name"
      />
      <Attribute
        attr="Infection Status"
        :val="operator.characterByName?.infectionByInfectionId?.name"
      />
      <div class="flex w-1/2 flex-col">
        <p><span class="font-semibold">Artists</span>:</p>
        <ul class="list-inside list-disc">
          <li
            v-for="artist of artists.allCharacterArtist?.nodes"
            :key="artist?.id"
          >
            {{ artist?.name }}
          </li>
        </ul>
      </div>
      <div
        class="flex max-h-48 w-1/2 flex-col overflow-x-auto"
        v-if="traits.allTraitsCharacter!.nodes.length > 0"
      >
        <p><span class="font-semibold">Traits</span>:</p>
        <ul class="list-inside list-disc">
          <li
            v-for="trait of traits.allTraitsCharacter?.nodes"
            :key="trait?.id"
          >
            {{ trait?.name }}
          </li>
        </ul>
      </div>
    </div>
    <NuxtImg
      :src="`thumbnails/${operator.characterByName?.rarity}star/100px-${operator.characterByName?.name.replaceAll(' ', '_')}_icon.png`"
      class="w-1/2 max-w-48"
    />
  </div>
</template>
