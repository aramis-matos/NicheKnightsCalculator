<template>

  <div class="flex flex-col gap-4">
    <UContainer class="w-full max-w-6xl">
      <UCard>
        <CharacterSearch />
      </UCard>
    </UContainer>
    <UContainer v-if="store.name !== ''" class="w-full max-w-6xl">
      <UCard>
        <CharacterDetails />
      </UCard>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useSelectedCharacter } from "~/store/selectedCharacter";

const { query } = useRoute();
const store = useSelectedCharacter();

store.setName((query.op as string | undefined) ?? "");
</script>

<style scoped>
.center {
  @apply flex items-center justify-center;
}
</style>
