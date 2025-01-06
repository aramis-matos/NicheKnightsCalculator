export enum Operation {
  AND,
  OR,
}

export type Niches = {
  placesOfBirth: string[];
  races: string[];
  infections: string[];
  classes: string[];
  branches: string[];
  genders: string[];
};

export type SelectedCharacterInitialState = {
  name: string;
};

export type NicheInitialState = {
  niches: Niches;
  operation: Operation;
};

export const initialSelectedCharacter: SelectedCharacterInitialState = {
  name: "",
};

export const initialNiche: NicheInitialState = {
  niches: {
    placesOfBirth: [],
    races: [],
    infections: [],
    classes: [],
    branches: [],
    genders: [],
  },
  operation: Operation.OR,
};
