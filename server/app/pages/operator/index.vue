<template>
  <div class="flex w-full flex-col justify-center gap-16">
    <div class="center">
      <div class="w-full max-w-4xl">
        <CharacterSearch />
      </div>
    </div>
    <div class="center">
      <CharacterDetails v-if="store.name !== ''" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSelectedCharacter } from "~/store/selectedCharacter";

const store = useSelectedCharacter();
</script>

<style scoped>
.center {
  @apply flex items-center justify-center;
}
</style>
