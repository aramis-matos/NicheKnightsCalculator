<script setup lang="ts">
import type { NuxtError } from "nuxt/app";

defineProps({ error: Object as () => NuxtError });
</script>
<template>
  <NuxtLayout>
    <UCard>
      <div class="prose dark:prose-invert">
        <h2>Error - {{ error?.statusCode }}</h2>
        <p>{{ error?.message }}</p>
        <p>Go back <ULink to="/">home</ULink></p>
      </div>
    </UCard>
  </NuxtLayout>
</template>
