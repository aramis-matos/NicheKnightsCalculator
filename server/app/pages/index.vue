<template>
  <div class="bg-slate-400">Hello from the main no you!!!?</div>
  <div>
    <ul v-for="value in allHeightCharacter?.nodes">
      <li :key="value?.id">{{ value?.name }}</li>
    </ul>
  </div>
  <div class="flex justify-center items-center w-full max-h-80 overflow-hidden">
    <CharacterSearch />
  </div>
</template>

<script setup lang="ts">
import type {
  CharactersLessThanHeightQuery,
  CharactersLessThanHeightQueryVariables,
} from "~/gql/graphql";

const {
  data: {
    value: { allHeightCharacter },
  }
} = await useAsyncGqlWithTypes<
  CharactersLessThanHeightQuery,
  CharactersLessThanHeightQueryVariables
>("charactersLessThanHeight", { height: 130 });
</script>
