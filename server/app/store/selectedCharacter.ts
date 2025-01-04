import { defineStore } from "pinia";
import { initialSelectedCharacter } from "~/models/store";

export const useSelectedCharacter = defineStore("selectedCharacter", {
  state: () => ({ ...initialSelectedCharacter }),
  actions: {
    setName(rowId: string) {
      this.name = rowId;
    },
  },
});
