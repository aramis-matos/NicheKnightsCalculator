<script setup lang="ts">
import { useSelectedCharacter } from "~/store/selectedCharacter";
import type {
  AllGeneralSearchQuery,
  AllGeneralSearchQueryVariables,
} from "~/gql/graphql";

const allCharacters = reactive<AllGeneralSearchQuery>({});
const router = useRouter();
const store = useSelectedCharacter();
const selected = ref<{ id: string; label: string }>();

const { useAsyncGql, useGql } = useGqlWithTypes<
  AllGeneralSearchQuery,
  AllGeneralSearchQueryVariables
>("allGeneralSearch");

allCharacters.allGeneralSearch = (
  await useAsyncGql({})
).data.value.allGeneralSearch;

function setName(name: string) {
  router.push({
    query: { op: name },
  });
  store.setName(name === store.name ? "" : name);
}

const operators = computed(() =>
  allCharacters.allGeneralSearch?.nodes.map((elem) => ({
    id: elem!.id,
    label: elem?.name,
    avatar: { src: `/${elem?.classByClassId?.name}.webp`, loading: "lazy" },
  })),
);

watch(
  () => selected.value,
  () => {
    setName(selected.value!.label);
  },
);
</script>

<template>
  <UCommandPalette
    :groups="[{ key: 'operator', commands: operators }]"
    v-model="selected"
    :fuse="{ resultLimit: -1 }"
    class="max-h-96 overflow-y-auto"
  />
</template>
