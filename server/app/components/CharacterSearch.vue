<template>
  <input type="text" v-model="input.search" />
  <select
    class="select select-bordered select-lg w-1/3 bg-base-100 text-base-content h-full max-h-52 overflow-hidden"
  >
    <option disabled selected>Select Operator</option>
    <option v-for="val in allCharacters?.allCharacters?.nodes" :key="val?.id">
      {{ val?.name }}
    </option>
  </select>
  {{ input.search }}
</template>

<script setup lang="ts">
import type {
  AllCharacterQuery,
  AllCharacterQueryVariables,
} from "~/gql/graphql";

const input = reactive<AllCharacterQueryVariables>({ search: "" });
const allCharacters = reactive<AllCharacterQuery>({});
const timeoutId = ref<NodeJS.Timeout>();

async function getData() {
  const {
    data: {
      value: { allCharacters },
    },
  } = await useAsyncGqlWithTypes<AllCharacterQuery, AllCharacterQueryVariables>(
    "allCharacter",
    input.search === "" ? {} : input
  );
  return allCharacters;
}

allCharacters.allCharacters = await getData();

watch(input, async () => {
  clearTimeout(timeoutId.value);

  const id = setTimeout(async () => {
    const GqlInstance = useGql();
    const { allCharacters: returnedCharacters } = await GqlInstance<
      "allCharacter",
      Promise<AllCharacterQuery>,
      {}
    >("allCharacter", input);
    allCharacters.allCharacters = returnedCharacters;
    console.log("hewe")
  }, 500);

  timeoutId.value = id;
});
</script>
