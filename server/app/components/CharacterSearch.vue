<template>
  <div
    class="card bg-base-100 shadow-base-300 w-full gap-4 divide-y-2 px-4 pt-4 drop-shadow-2xl"
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
          {{ allCharacters.allGeneralSearch?.nodes.length }}
        </div>
      </h2>
      <div
        class="flex max-h-48 flex-col gap-2 overflow-x-hidden overflow-y-scroll"
      >
        <div class="grid w-full grid-cols-3 gap-4">
          <div
            class="hover:bg-base-300 flex w-full items-center justify-start gap-4 p-2 transition-all"
            :key="vals?.id"
            v-for="vals in allCharacters.allGeneralSearch?.nodes"
            @click="setName(vals!.name)"
          >
            <Icon :class="vals?.classByClassId?.name as string" />
            <p class="text-left">{{ vals?.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from "lucide-vue-next";
import Icon from "@/components/Icon.vue";
import { useSelectedCharacter } from "~/store/selectedCharacter";
import type {
  AllGeneralSearchQuery,
  AllGeneralSearchQueryVariables,
} from "~/gql/graphql";

const input = reactive<AllGeneralSearchQueryVariables>({});
const allCharacters = reactive<AllGeneralSearchQuery>({});
const timeoutId = ref<NodeJS.Timeout>();
const router = useRouter();
const store = useSelectedCharacter();

const { useAsyncGql, useGql } = useGqlWithTypes<
  AllGeneralSearchQuery,
  AllGeneralSearchQueryVariables
>("allGeneralSearch");

allCharacters.allGeneralSearch = (
  await useAsyncGql()
).data.value.allGeneralSearch;

watch(input, async () => {
  clearTimeout(timeoutId.value);

  const id = setTimeout(async () => {
    const { allGeneralSearch: returnedCharacters } = await useGql(
      input.search === "" ? {} : input,
    );
    allCharacters.allGeneralSearch = returnedCharacters;
  }, 500);

  timeoutId.value = id;
});

function setName(name: string) {
  router.push({
    query: { op: name },
  });
  store.setName(name);
}
</script>
