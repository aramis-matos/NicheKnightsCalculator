<script setup lang="ts">
import type { AllClassesQuery } from "~/gql/graphql";

const classes = reactive<AllClassesQuery>({});

const allClassesGql = useGqlWithTypes<AllClassesQuery>("allClasses");

classes.allClasses = (
  await allClassesGql.useAsyncGql({})
).data.value.allClasses;
</script>

<template>
  <div class="flex w-full items-center justify-center">
    <div class="grid w-full max-w-fit grid-cols-2 md:grid-cols-3">
      <Select
        title="Classes"
        :options="classes.allClasses?.nodes.filter((elem) => elem !== null)"
      />
    </div>
  </div>
</template>
