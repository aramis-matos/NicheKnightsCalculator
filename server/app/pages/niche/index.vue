<script setup lang="ts">
import type { AllClassesQuery } from "~/gql/graphql";

const classes = reactive<AllClassesQuery>({});
const selectedClasses = ref<string[]>([]);

const allClassesGql = useGqlWithTypes<AllClassesQuery>("allClasses");

classes.allClasses = (
  await allClassesGql.useAsyncGql({})
).data.value.allClasses;
</script>

<template>
  <div class="flex w-full items-center justify-center">
    <div class="grid w-full grid-cols-2 md:grid-cols-3">
      <USelectMenu
        class="w-3/4"
        :options="
          classes.allClasses?.nodes
            .filter((elem) => elem !== null)
            .map((elem) => elem.name)
        "
        v-model="selectedClasses"
        multiple
        placeholder="Select Classes"
      />
    </div>
  </div>
</template>
