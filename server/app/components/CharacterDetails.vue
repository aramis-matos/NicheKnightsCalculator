<script setup lang="ts">
import type {
  GetOperatorDetailsQuery,
  GetOperatorDetailsQueryVariables,
} from "~/gql/graphql";
import { useSelectedCharacter } from "~/store/selectedCharacter";
import Index from "@/pages/operator/index.vue";

const operator = reactive<GetOperatorDetailsQuery>({});
const store = useSelectedCharacter();
const { useAsyncGql } = useGqlWithTypes<
  GetOperatorDetailsQuery,
  GetOperatorDetailsQueryVariables
>("getOperatorDetails");

async function setCharacter() {
  return (await useAsyncGql({ name: store.name as string })).data.value
    .characterByName;
}
operator.characterByName = await setCharacter();

watch(
  () => store.name,
  async () => {
    operator.characterByName = await setCharacter();
  },
);
</script>

<template>
  <div class="w-full max-w-4xl" v-if="store.name !== ''">
    <div
      class="card bg-base-100 text-base-content shadow-base-content flex w-full items-center justify-center drop-shadow-xl"
    >
      <div class="card-body w-full flex-col items-start">
        <div class="card-title flex gap-8">
          <Icon :class="operator.characterByName?.classByClassId?.name" />
          <h1 class="text-4xl">{{ operator.characterByName?.name }}</h1>
        </div>
        <div class="flex w-full justify-between">
          <div class="flex w-1/2 flex-col">
            <Attribute
              attr="Class"
              :val="operator.characterByName?.classByClassId?.name"
            />
            <Attribute
              attr="Branch"
              :val="operator.characterByName?.branchByBranchId?.name"
            />
            <Attribute attr="Gender" :val="operator.characterByName?.gender" />
            <Attribute
              attr="Height"
              :val="`${operator.characterByName?.height.toString()} cm`"
            />
            <Attribute
              attr="Place of Birth"
              :val="
                operator.characterByName?.placeOfBirthByPlaceOfBirthId?.name
              "
            />
            <Attribute
              attr="Race"
              :val="operator.characterByName?.raceByRaceId?.name"
            />
            <Attribute
              attr="Infection Status"
              :val="operator.characterByName?.infectionByInfectionId?.name"
            />
          </div>
          <NuxtImg src="/logo.png" class="w-1/2 max-w-48" />
        </div>
      </div>
    </div>
  </div>
</template>
