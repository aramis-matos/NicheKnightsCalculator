<template>
  <div
    class="card bg-base-100 shadow-base-300 w-full gap-4 divide-y-2 px-4 pt-4 shadow-md"
  >
    <label class="input input-bordered flex items-center gap-1">
      <input
        type="text"
        class="grow"
        placeholder="Search for Operator"
        id="search-character"
        v-model="input.search"
      />
      <Search aria-label="search" />
    </label>
    <div class="card-body w-full">
      <h2 class="card-title">
        Operators Found:
        <div class="badge badge-secondary">
          {{ allCharacters.allCharacters?.nodes.length }}
        </div>
      </h2>
      <div class="flex max-h-48 flex-col gap-2 overflow-y-scroll">
        <div
          class="flex w-full"
          :key="vals?.id"
          v-for="vals in allCharacters.allCharacters?.nodes"
        >
          <div class="hover:bg-base-300 flex items-center justify-end w-full transition-all">
            <p>{{ vals?.classByClassId?.name }}</p>
            <p>{{ vals?.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from "lucide-vue-next";
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
    input.search === "" ? {} : input,
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
  }, 500);

  timeoutId.value = id;
});
</script>
