import { defineStore } from "pinia";
import type {
  OrCharactersQuery,
  OrCharactersQueryVariables,
} from "~/gql/graphql";
import { initialNiche, type Niches } from "~/models/store";

export const useNiche = defineStore("niche", {
  state: () => ({ ...initialNiche }),
  getters: {
    getNichesAmount: (store) =>
      Object.values(store.niches).filter((elem) => elem.length > 0).length,
    canExclude(store) {
      return (
        Object.values(store.niches).filter((elem) => elem.length > 0).length > 1
      );
    },
    canCompute(store) {
      return (
        Object.values(store.niches).filter((elem) => elem.length > 0).length > 0
      );
    },
  },
  actions: {
    setValue(values: string[], key: keyof Niches) {
      this.$patch({ niches: { ...this.niches, [key]: values } });
    },
    initialize() {
      this.$patch({ ...initialNiche });
    },
    async getNiches(): Promise<{ name?: string; class?: string }[]> {
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
        artist: this.niches.artists,
        rarity: this.niches.rarity.map((elem) => elem.split(" ")[0]),
        trait: this.niches.traits,
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

      if (!this.isAnd) {
        return useUnionWith(items.flat(), comparator);
      }

      return useIntersectionWith(items[0], ...items.slice(1), comparator);
    },
  },
});
