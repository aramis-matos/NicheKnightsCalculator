<template>
  <div class="bg-slate-400">Hello from the main no you!!!?</div>
  <div>
    <ul v-for="value in allHeightCharacter?.nodes">
      <li :key="value?.id">{{ value?.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type {
  AllCharacterQuery,
  CharactersLessThanHeightQuery,
  CharactersLessThanHeightQueryVariables,
} from "~/gql/graphql";

const {
  data: {
    value: { allHeightCharacter },
  },
  status
} = await useAsyncGqlWithTypes<
  CharactersLessThanHeightQuery,
  CharactersLessThanHeightQueryVariables
>("charactersLessThanHeight", { height: 130 });

</script>
