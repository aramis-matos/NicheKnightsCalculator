export type Niches = {
  placesOfBirth: string[];
  races: string[];
  infections: string[];
  classes: string[];
  branches: string[];
  genders: string[];
  artists: string[];
  rarity: string[];
  traits: string[];
};

export type SelectedCharacterInitialState = {
  name: string;
};

export type NicheInitialState = {
  niches: Niches;
  isAnd: boolean;
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
    artists: [],
    rarity: [],
    traits: [],
  },
  isAnd: false,
};
