/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "query allArtists {\n  allArtists {\n    nodes {\n      id\n      name\n    }\n  }\n}": types.AllArtistsDocument,
    "query allBranches {\n  allBranches {\n    nodes {\n      id\n      name\n    }\n  }\n}": types.AllBranchesDocument,
    "query allCharacterArtist($search: String!) {\n  allCharacterArtist(search: $search) {\n    nodes {\n      id\n      name\n    }\n  }\n}": types.AllCharacterArtistDocument,
    "query allClasses {\n  allClasses {\n    nodes {\n      id\n      name\n    }\n  }\n}": types.AllClassesDocument,
    "query allGenders {\n  allGenders {\n    nodes {\n      id\n      name\n    }\n  }\n}": types.AllGendersDocument,
    "query allGeneralSearch($search: String) {\n  allGeneralSearch(search: $search) {\n    nodes {\n      id\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n}": types.AllGeneralSearchDocument,
    "query allInfections {\n  allInfections {\n    nodes {\n      name\n    }\n  }\n}": types.AllInfectionsDocument,
    "query allPlaceOfBirths {\n  allPlaceOfBirths {\n    nodes {\n      name\n    }\n  }\n}": types.AllPlaceOfBirthsDocument,
    "query allRaces {\n  allRaces {\n    nodes {\n      name\n    }\n  }\n}": types.AllRacesDocument,
    "query allRarity {\n  allRarity {\n    nodes\n  }\n}": types.AllRarityDocument,
    "query charactersLessThanHeight($height: Int = 135) {\n  allHeightCharacter(charHeight: $height) {\n    nodes {\n      id\n      name\n    }\n  }\n}\n\nquery allRaceCharacter($race: String) {\n  allRaceCharacter(search: $race) {\n    nodes {\n      id\n      name\n    }\n  }\n}\n\nquery allCharacter($search: String) {\n  allCharacters(condition: {name: $search}) {\n    nodes {\n      id\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n}\n\nquery getOperatorDetails($name: String!) {\n  characterByName(name: $name) {\n    name\n    height\n    placeOfBirthByPlaceOfBirthId {\n      name\n    }\n    raceByRaceId {\n      name\n    }\n    infectionByInfectionId {\n      name\n    }\n    classByClassId {\n      name\n    }\n    branchByBranchId {\n      name\n    }\n    characterArtistsByCharacterId {\n      nodes {\n        artistByArtistId {\n          name\n        }\n      }\n    }\n    genderByGenderId {\n      name\n    }\n  }\n}": types.CharactersLessThanHeightDocument,
    "query orCharacters($class: [String!]!, $place: [String!]!, $race: [String!], $infection: [String!]!, $branch: [String!]!, $gender: [String!]!, $artist: [String!]!, $rarity: [BigFloat!]!) {\n  orPlacesOfBirth(ops: $place) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orRaces(ops: $race) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orInfections(ops: $infection) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orClasses(ops: $class) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orBranches(ops: $branch) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orGenders(ops: $gender) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orArtists(ops: $artist) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orRarity(search: $rarity) {\n    nodes {\n      rarity\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n}": types.OrCharactersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query allArtists {\n  allArtists {\n    nodes {\n      id\n      name\n    }\n  }\n}"): (typeof documents)["query allArtists {\n  allArtists {\n    nodes {\n      id\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query allBranches {\n  allBranches {\n    nodes {\n      id\n      name\n    }\n  }\n}"): (typeof documents)["query allBranches {\n  allBranches {\n    nodes {\n      id\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query allCharacterArtist($search: String!) {\n  allCharacterArtist(search: $search) {\n    nodes {\n      id\n      name\n    }\n  }\n}"): (typeof documents)["query allCharacterArtist($search: String!) {\n  allCharacterArtist(search: $search) {\n    nodes {\n      id\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query allClasses {\n  allClasses {\n    nodes {\n      id\n      name\n    }\n  }\n}"): (typeof documents)["query allClasses {\n  allClasses {\n    nodes {\n      id\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query allGenders {\n  allGenders {\n    nodes {\n      id\n      name\n    }\n  }\n}"): (typeof documents)["query allGenders {\n  allGenders {\n    nodes {\n      id\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query allGeneralSearch($search: String) {\n  allGeneralSearch(search: $search) {\n    nodes {\n      id\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n}"): (typeof documents)["query allGeneralSearch($search: String) {\n  allGeneralSearch(search: $search) {\n    nodes {\n      id\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query allInfections {\n  allInfections {\n    nodes {\n      name\n    }\n  }\n}"): (typeof documents)["query allInfections {\n  allInfections {\n    nodes {\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query allPlaceOfBirths {\n  allPlaceOfBirths {\n    nodes {\n      name\n    }\n  }\n}"): (typeof documents)["query allPlaceOfBirths {\n  allPlaceOfBirths {\n    nodes {\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query allRaces {\n  allRaces {\n    nodes {\n      name\n    }\n  }\n}"): (typeof documents)["query allRaces {\n  allRaces {\n    nodes {\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query allRarity {\n  allRarity {\n    nodes\n  }\n}"): (typeof documents)["query allRarity {\n  allRarity {\n    nodes\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query charactersLessThanHeight($height: Int = 135) {\n  allHeightCharacter(charHeight: $height) {\n    nodes {\n      id\n      name\n    }\n  }\n}\n\nquery allRaceCharacter($race: String) {\n  allRaceCharacter(search: $race) {\n    nodes {\n      id\n      name\n    }\n  }\n}\n\nquery allCharacter($search: String) {\n  allCharacters(condition: {name: $search}) {\n    nodes {\n      id\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n}\n\nquery getOperatorDetails($name: String!) {\n  characterByName(name: $name) {\n    name\n    height\n    placeOfBirthByPlaceOfBirthId {\n      name\n    }\n    raceByRaceId {\n      name\n    }\n    infectionByInfectionId {\n      name\n    }\n    classByClassId {\n      name\n    }\n    branchByBranchId {\n      name\n    }\n    characterArtistsByCharacterId {\n      nodes {\n        artistByArtistId {\n          name\n        }\n      }\n    }\n    genderByGenderId {\n      name\n    }\n  }\n}"): (typeof documents)["query charactersLessThanHeight($height: Int = 135) {\n  allHeightCharacter(charHeight: $height) {\n    nodes {\n      id\n      name\n    }\n  }\n}\n\nquery allRaceCharacter($race: String) {\n  allRaceCharacter(search: $race) {\n    nodes {\n      id\n      name\n    }\n  }\n}\n\nquery allCharacter($search: String) {\n  allCharacters(condition: {name: $search}) {\n    nodes {\n      id\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n}\n\nquery getOperatorDetails($name: String!) {\n  characterByName(name: $name) {\n    name\n    height\n    placeOfBirthByPlaceOfBirthId {\n      name\n    }\n    raceByRaceId {\n      name\n    }\n    infectionByInfectionId {\n      name\n    }\n    classByClassId {\n      name\n    }\n    branchByBranchId {\n      name\n    }\n    characterArtistsByCharacterId {\n      nodes {\n        artistByArtistId {\n          name\n        }\n      }\n    }\n    genderByGenderId {\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query orCharacters($class: [String!]!, $place: [String!]!, $race: [String!], $infection: [String!]!, $branch: [String!]!, $gender: [String!]!, $artist: [String!]!, $rarity: [BigFloat!]!) {\n  orPlacesOfBirth(ops: $place) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orRaces(ops: $race) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orInfections(ops: $infection) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orClasses(ops: $class) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orBranches(ops: $branch) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orGenders(ops: $gender) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orArtists(ops: $artist) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orRarity(search: $rarity) {\n    nodes {\n      rarity\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n}"): (typeof documents)["query orCharacters($class: [String!]!, $place: [String!]!, $race: [String!], $infection: [String!]!, $branch: [String!]!, $gender: [String!]!, $artist: [String!]!, $rarity: [BigFloat!]!) {\n  orPlacesOfBirth(ops: $place) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orRaces(ops: $race) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orInfections(ops: $infection) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orClasses(ops: $class) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orBranches(ops: $branch) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orGenders(ops: $gender) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orArtists(ops: $artist) {\n    nodes {\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n  orRarity(search: $rarity) {\n    nodes {\n      rarity\n      name\n      classByClassId {\n        name\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;