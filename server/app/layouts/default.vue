<template>
  <div class="bg-base-100 w-screen h-screen" data-theme="coffee">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Main</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
    <slot class="" />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: "%s - NicheKnights"
})
</script>