<template>
  <div class="flex flex-col gap-4">
    <UCard>
      <CharacterSearch />
    </UCard>
    <transition>
      <UCard v-if="store.name !== ''" class="w-full">
        <CharacterDetails />
      </UCard>
    </transition>
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

.v-enter-active {
  @apply animate-fade-down animate-duration-500;
}

.v-leave-active {
  @apply animate-fade-down animate-reverse animate-duration-500;
}
</style>
