<script setup lang="ts">
import { Gem, Home, Notebook, UserSearch } from "lucide-vue-next";
</script>

<template>
  <NavBarOption to="/" text="Home">
    <Home class="icon" />
  </NavBarOption>
  <NavBarOption to="/operator" text="Operator">
    <UserSearch class="icon" />
  </NavBarOption>
  <NavBarOption to="/niche" text="Niche">
    <Gem class="icon" />
  </NavBarOption>
  <NavBarOption to="/about" text="About Us">
    <Notebook class="icon" />
  </NavBarOption>
</template>

<style scoped>
.icon {
  @apply stroke-base-content size-4;
}
</style>
