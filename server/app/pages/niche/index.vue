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
  <div class="flex flex-col w-full items-center justify-center">
    <div class="flex flex-col w-1/2">
      <h1 class="text-3xl pb-4">Classes</h1>
      <USelectMenu class="w-full" :options="classes.allClasses?.nodes
        .filter((elem) => elem !== null)
        .map((elem) => elem.name)
        " v-model="selectedClasses" multiple placeholder="Select Classes">
        <template #label>
          <p v-if="selectedClasses.length === 0">Select Classes</p>
          <div class="flex gap-4 w-full max-w-sm md:max-w-xl
           h-fit flex-wrap pb-1" v-if="selectedClasses.length > 0">
            <span v-for="value of selectedClasses" :key="value">
              <UBadge color="primary">{{ value }}</UBadge>
            </span>
          </div>
        </template>
      </USelectMenu>
    </div>

  </div>
</template>
