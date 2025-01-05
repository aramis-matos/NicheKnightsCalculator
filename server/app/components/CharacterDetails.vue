<script setup lang="ts">
import {
  type AllCharacterArtistQuery,
  type AllCharacterArtistQueryVariables,
  type GetOperatorDetailsQuery,
  type GetOperatorDetailsQueryVariables,
} from "~/gql/graphql";
import { useSelectedCharacter } from "~/store/selectedCharacter";

const operator = reactive<GetOperatorDetailsQuery>({});
const artists = reactive<AllCharacterArtistQuery>({});
const store = useSelectedCharacter();
const { useAsyncGql, useGql } = useGqlWithTypes<
  GetOperatorDetailsQuery,
  GetOperatorDetailsQueryVariables
>("getOperatorDetails");

const { useGql: artGql, useAsyncGql: artAsyncGql } = useGqlWithTypes<
  AllCharacterArtistQuery,
  AllCharacterArtistQueryVariables
>("allCharacterArtist");

operator.characterByName = (
  await useAsyncGql({ name: store.name })
).data.value.characterByName;

artists.allCharacterArtist = (
  await artAsyncGql({ search: store.name })
).data.value.allCharacterArtist;

watch(
  () => store.name,
  async () => {
    operator.characterByName = (
      await useGql({ name: store.name })
    ).characterByName;

    artists.allCharacterArtist = (
      await artGql({ search: store.name })
    ).allCharacterArtist;
  },
);
</script>

<template>
  <div class="flex gap-8 items-center pb-4">
    <NuxtImg :src="`/${operator.characterByName?.classByClassId?.name}.webp`" class="size-10" />
    <h1 class="text-4xl">{{ operator.characterByName?.name }}</h1>
  </div>
  <div class="flex w-full justify-between items-center">
    <div class="flex w-1/2 flex-col">
      <Attribute attr="Class" :val="operator.characterByName?.classByClassId?.name" />
      <Attribute attr="Branch" :val="operator.characterByName?.branchByBranchId?.name" />
      <Attribute attr="Gender" :val="operator.characterByName?.genderByGenderId?.name" />
      <Attribute attr="Height" :val="`${operator.characterByName?.height.toString()} cm`" />
      <Attribute attr="Place of Birth" :val="operator.characterByName?.placeOfBirthByPlaceOfBirthId?.name
        " />
      <Attribute attr="Race" :val="operator.characterByName?.raceByRaceId?.name" />
      <Attribute attr="Infection Status" :val="operator.characterByName?.infectionByInfectionId?.name" />

      <div class="flex">
        <div class="flex flex-col w-1/2">
          <p><span class="font-semibold">Artists</span>:</p>
          <ul class="list-inside list-disc">
            <li v-for="artist of artists.allCharacterArtist?.nodes" :key="artist?.id">
              {{ artist?.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <NuxtImg src="/logo.png" class="w-1/2 max-w-48" />
  </div>
</template>
