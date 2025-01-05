<template>
  <label class="flex items-center gap-1">
    <UInput class="mb-4 grow" placeholder="Search for Operator" id="search-character"
      v-model="(input.search as string | undefined)" />
  </label>
  <UDivider class="py-4" label="Results" />
  <h2 class="flex gap-2">
    Operators Found:
    <UBadge color="primary" variant="subtle">
      {{ allCharacters.allGeneralSearch?.nodes.length }}
    </UBadge>
  </h2>
  <div
    class="flex max-h-48 md:max-h-96 flex-col gap-2 overflow-x-hidden overflow-y-scroll mt-4 drop-shadow-xl shadow-xl rounded-lg p-2">
    <div class="grid w-full grid-cols-2 place-items-center gap-4 px-4 py-2 text-lg md:grid-cols-3 md:p-0">
      <button
        class="hover:bg-primary hover:cursor-pointer flex w-fit items-center justify-start gap-4 p-2 transition-all md:w-full"
        :key="vals?.id" v-for="vals in allCharacters.allGeneralSearch?.nodes" @click="setName(vals!.name)">
        <CharIcon :class="(vals?.classByClassId?.name as string)" />
        <p class="text-left">{{ vals?.name }}</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSelectedCharacter } from "~/store/selectedCharacter";
import type {
  AllGeneralSearchQuery,
  AllGeneralSearchQueryVariables,
} from "~/gql/graphql";

const input = reactive<AllGeneralSearchQueryVariables>({});
const allCharacters = reactive<AllGeneralSearchQuery>({});
const timeoutId = ref(-1);
const router = useRouter();
const store = useSelectedCharacter();

const { useAsyncGql, useGql } = useGqlWithTypes<
  AllGeneralSearchQuery,
  AllGeneralSearchQueryVariables
>("allGeneralSearch");

allCharacters.allGeneralSearch = (
  await useAsyncGql({})
).data.value.allGeneralSearch;

watch(input, async () => {
  clearTimeout(timeoutId.value);

  const id = setTimeout(async () => {
    const { allGeneralSearch: returnedCharacters } = await useGql(
      input.search === "" ? {} : input,
    );
    allCharacters.allGeneralSearch = returnedCharacters;
  }, 500);

  timeoutId.value = id as unknown as number;
});

function setName(name: string) {
  router.push({
    query: { op: name },
  });
  store.setName(name);
}
</script>
