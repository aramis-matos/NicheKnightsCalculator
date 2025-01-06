import { defineStore } from "pinia";
import type {
  OrCharactersQuery,
  OrCharactersQueryVariables,
} from "~/gql/graphql";
import { initialNiche, Operation, type Niches } from "~/models/store";

export const useNiche = defineStore("niche", {
  state: () => ({ ...initialNiche }),
  actions: {
    setValue(value: string, key: keyof Niches) {
      this.$patch({ [key]: [...this.niches[key], value] });
    },
    async getNiches(
      operation: Operation,
    ): Promise<{ name?: string; class?: string }[]> {
      const { useGql } = useGqlWithTypes<
        OrCharactersQuery,
        OrCharactersQueryVariables
      >("orCharacters");

      const res = await useGql({
        branch: this.niches.branches,
        class: this.niches.classes,
        gender: this.niches.genders,
        infection: this.niches.infections,
        place: this.niches.placesOfBirth,
        race: this.niches.races,
      });

      const vals = (Object.keys(res) as (keyof typeof res)[])
        .filter((elem) => elem !== "__typename")
        .filter((elem) => res[elem]!.nodes.length > 0)
        .map((elem) => res[elem]!.nodes);

      if (vals.length === 0) return [];
      if (vals.length === 1) {
        return vals[0]!.map((elem) => ({
          name: elem?.name,
          class: elem?.classByClassId?.name,
        }));
      }
      const comparator = (
        a: { name?: string; class?: string },
        b: typeof a,
      ) => {
        return a.name?.localeCompare((b as { name: string }).name) === 0;
      };

      const items = vals.map((val) =>
        val.map((inner) => ({
          name: inner?.name,
          class: inner?.classByClassId?.name,
        })),
      );

      if (operation === Operation.OR) {
        return useUnionWith(items.flat(), comparator);
      }

      return useIntersectionWith(items[0], ...items.slice(1), comparator);
    },
  },
});
