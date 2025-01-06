<script setup lang="ts" generic="
    T extends { [x: string]: { nodes: { name: string }[] } },
    K extends keyof T
  ">
  import { useNiche } from "@/store/niches";
  import type { GqlOps } from "#gql";
  import type { Niches } from "~/models/store";

  const props = defineProps<{
    query: GqlOps;
    resKey: K;
    title: string;
    niche: keyof Niches;
  }>();

  const res = reactive<{ all: { nodes: { name: string }[] } }>({
    all: { nodes: [] },
  });
  const store = useNiche();
  const selectedValues = ref<string[]>(store.niches[props.niche]);

  const allResGql = useGqlWithTypes<T>(props.query);

  //@ts-expect-error
  res.all = (await allResGql.useAsyncGql({})).data.value[props.resKey];

  watch(selectedValues, () => {
    store.setValue(selectedValues.value, props.niche);
  });
</script>

<template>
  <div class="flex w-full flex-col items-center justify-center">
    <div class="flex w-full flex-col">
      <h1 class="pb-4 text-3xl">{{ props.title }}</h1>
      <USelectMenu searchable class="w-full" :options="res.all?.nodes
        .filter((elem) => elem !== null)
        .map((elem) => elem.name)
        " v-model="selectedValues" multiple placeholder="Select Classes">
        <template #label>
          <p v-if="selectedValues.length === 0">Select Classes</p>
          <div class="flex h-fit w-full max-w-sm flex-wrap gap-4 pb-1 md:max-w-xl" v-if="selectedValues.length > 0">
            <span v-for="value of selectedValues" :key="value">
              <UBadge color="primary">{{ value }}</UBadge>
            </span>
          </div>
        </template>
      </USelectMenu>
    </div>
  </div>
</template>
