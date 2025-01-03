/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: { input: any; output: any; }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: any; output: any; }
};

export type Artist = Node & {
  __typename?: 'Artist';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  rowId: Scalars['BigInt']['output'];
};

/** A condition to be used against `Artist` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ArtistCondition = {
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['BigInt']['input']>;
};

/** A connection to a list of `Artist` values. */
export type ArtistConnection = {
  __typename?: 'ArtistConnection';
  /** A list of edges which contains the `Artist` and cursor to aid in pagination. */
  edges: Array<Maybe<ArtistEdge>>;
  /** A list of `Artist` objects. */
  nodes: Array<Maybe<Artist>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Artist` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Artist` edge in the connection. */
export type ArtistEdge = {
  __typename?: 'ArtistEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Artist` at the end of the edge. */
  node?: Maybe<Artist>;
};

/** Methods to use when ordering `Artist`. */
export enum ArtistOrderBy {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC'
}

export type Branch = Node & {
  __typename?: 'Branch';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  rowId: Scalars['BigInt']['output'];
};

/** A condition to be used against `Branch` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BranchCondition = {
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['BigInt']['input']>;
};

/** A connection to a list of `Branch` values. */
export type BranchConnection = {
  __typename?: 'BranchConnection';
  /** A list of edges which contains the `Branch` and cursor to aid in pagination. */
  edges: Array<Maybe<BranchEdge>>;
  /** A list of `Branch` objects. */
  nodes: Array<Maybe<Branch>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Branch` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Branch` edge in the connection. */
export type BranchEdge = {
  __typename?: 'BranchEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Branch` at the end of the edge. */
  node?: Maybe<Branch>;
};

/** Methods to use when ordering `Branch`. */
export enum BranchOrderBy {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC'
}

export type Character = Node & {
  __typename?: 'Character';
  /** Reads a single `Branch` that is related to this `Character`. */
  branchByBranchId?: Maybe<Branch>;
  branchId: Scalars['BigInt']['output'];
  /** Reads and enables pagination through a set of `CharacterArtist`. */
  characterArtistsByCharacterId: CharacterArtistConnection;
  /** Reads a single `Class` that is related to this `Character`. */
  classByClassId?: Maybe<Class>;
  classId: Scalars['BigInt']['output'];
  gender: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  /** Reads a single `Infection` that is related to this `Character`. */
  infectionByInfectionId?: Maybe<Infection>;
  infectionId: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /** Reads a single `PlaceOfBirth` that is related to this `Character`. */
  placeOfBirthByPlaceOfBirthId?: Maybe<PlaceOfBirth>;
  placeOfBirthId: Scalars['BigInt']['output'];
  /** Reads a single `Race` that is related to this `Character`. */
  raceByRaceId?: Maybe<Race>;
  raceId: Scalars['BigInt']['output'];
  rowId: Scalars['BigInt']['output'];
};


export type CharacterCharacterArtistsByCharacterIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CharacterArtistCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CharacterArtistOrderBy>>;
};

export type CharacterArtist = Node & {
  __typename?: 'CharacterArtist';
  /** Reads a single `Artist` that is related to this `CharacterArtist`. */
  artistByArtistId?: Maybe<Artist>;
  artistId: Scalars['BigInt']['output'];
  /** Reads a single `Character` that is related to this `CharacterArtist`. */
  characterByCharacterId?: Maybe<Character>;
  characterId: Scalars['BigInt']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
};

/**
 * A condition to be used against `CharacterArtist` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CharacterArtistCondition = {
  /** Checks for equality with the object’s `characterId` field. */
  characterId?: InputMaybe<Scalars['BigInt']['input']>;
};

/** A connection to a list of `CharacterArtist` values. */
export type CharacterArtistConnection = {
  __typename?: 'CharacterArtistConnection';
  /** A list of edges which contains the `CharacterArtist` and cursor to aid in pagination. */
  edges: Array<Maybe<CharacterArtistEdge>>;
  /** A list of `CharacterArtist` objects. */
  nodes: Array<Maybe<CharacterArtist>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CharacterArtist` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `CharacterArtist` edge in the connection. */
export type CharacterArtistEdge = {
  __typename?: 'CharacterArtistEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `CharacterArtist` at the end of the edge. */
  node?: Maybe<CharacterArtist>;
};

/** Methods to use when ordering `CharacterArtist`. */
export enum CharacterArtistOrderBy {
  CharacterIdAsc = 'CHARACTER_ID_ASC',
  CharacterIdDesc = 'CHARACTER_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/**
 * A condition to be used against `Character` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CharacterCondition = {
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['BigInt']['input']>;
};

/** A connection to a list of `Character` values. */
export type CharacterConnection = {
  __typename?: 'CharacterConnection';
  /** A list of edges which contains the `Character` and cursor to aid in pagination. */
  edges: Array<Maybe<CharacterEdge>>;
  /** A list of `Character` objects. */
  nodes: Array<Maybe<Character>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Character` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Character` edge in the connection. */
export type CharacterEdge = {
  __typename?: 'CharacterEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Character` at the end of the edge. */
  node?: Maybe<Character>;
};

/** Methods to use when ordering `Character`. */
export enum CharacterOrderBy {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC'
}

export type Class = Node & {
  __typename?: 'Class';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  rowId: Scalars['BigInt']['output'];
};

/** A condition to be used against `Class` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ClassCondition = {
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['BigInt']['input']>;
};

/** A connection to a list of `Class` values. */
export type ClassConnection = {
  __typename?: 'ClassConnection';
  /** A list of edges which contains the `Class` and cursor to aid in pagination. */
  edges: Array<Maybe<ClassEdge>>;
  /** A list of `Class` objects. */
  nodes: Array<Maybe<Class>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Class` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Class` edge in the connection. */
export type ClassEdge = {
  __typename?: 'ClassEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Class` at the end of the edge. */
  node?: Maybe<Class>;
};

/** Methods to use when ordering `Class`. */
export enum ClassOrderBy {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC'
}

export type Infection = Node & {
  __typename?: 'Infection';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  rowId: Scalars['BigInt']['output'];
};

/**
 * A condition to be used against `Infection` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type InfectionCondition = {
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['BigInt']['input']>;
};

/** A connection to a list of `Infection` values. */
export type InfectionConnection = {
  __typename?: 'InfectionConnection';
  /** A list of edges which contains the `Infection` and cursor to aid in pagination. */
  edges: Array<Maybe<InfectionEdge>>;
  /** A list of `Infection` objects. */
  nodes: Array<Maybe<Infection>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Infection` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Infection` edge in the connection. */
export type InfectionEdge = {
  __typename?: 'InfectionEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Infection` at the end of the edge. */
  node?: Maybe<Infection>;
};

/** Methods to use when ordering `Infection`. */
export enum InfectionOrderBy {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC'
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type PlaceOfBirth = Node & {
  __typename?: 'PlaceOfBirth';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  rowId: Scalars['BigInt']['output'];
};

/**
 * A condition to be used against `PlaceOfBirth` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PlaceOfBirthCondition = {
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['BigInt']['input']>;
};

/** A connection to a list of `PlaceOfBirth` values. */
export type PlaceOfBirthConnection = {
  __typename?: 'PlaceOfBirthConnection';
  /** A list of edges which contains the `PlaceOfBirth` and cursor to aid in pagination. */
  edges: Array<Maybe<PlaceOfBirthEdge>>;
  /** A list of `PlaceOfBirth` objects. */
  nodes: Array<Maybe<PlaceOfBirth>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PlaceOfBirth` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `PlaceOfBirth` edge in the connection. */
export type PlaceOfBirthEdge = {
  __typename?: 'PlaceOfBirthEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `PlaceOfBirth` at the end of the edge. */
  node?: Maybe<PlaceOfBirth>;
};

/** Methods to use when ordering `PlaceOfBirth`. */
export enum PlaceOfBirthOrderBy {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `Character`. */
  allArtistCharacters?: Maybe<CharacterConnection>;
  /** Reads and enables pagination through a set of `Artist`. */
  allArtists?: Maybe<ArtistConnection>;
  /** Reads and enables pagination through a set of `Character`. */
  allBranchCharacter?: Maybe<CharacterConnection>;
  /** Reads and enables pagination through a set of `Branch`. */
  allBranches?: Maybe<BranchConnection>;
  /** Reads and enables pagination through a set of `CharacterArtist`. */
  allCharacterArtists?: Maybe<CharacterArtistConnection>;
  /** Reads and enables pagination through a set of `Character`. */
  allCharacters?: Maybe<CharacterConnection>;
  /** Reads and enables pagination through a set of `Character`. */
  allClassCharacter?: Maybe<CharacterConnection>;
  /** Reads and enables pagination through a set of `Class`. */
  allClasses?: Maybe<ClassConnection>;
  /** Reads and enables pagination through a set of `Character`. */
  allGeneralSearch?: Maybe<CharacterConnection>;
  /** Reads and enables pagination through a set of `Character`. */
  allHeightCharacter?: Maybe<CharacterConnection>;
  /** Reads and enables pagination through a set of `Character`. */
  allInfectionCharacter?: Maybe<CharacterConnection>;
  /** Reads and enables pagination through a set of `Infection`. */
  allInfections?: Maybe<InfectionConnection>;
  /** Reads and enables pagination through a set of `Character`. */
  allPlaceOfBirthCharacter?: Maybe<CharacterConnection>;
  /** Reads and enables pagination through a set of `PlaceOfBirth`. */
  allPlaceOfBirths?: Maybe<PlaceOfBirthConnection>;
  /** Reads and enables pagination through a set of `Character`. */
  allRaceCharacter?: Maybe<CharacterConnection>;
  /** Reads and enables pagination through a set of `Race`. */
  allRaces?: Maybe<RaceConnection>;
  /** Reads a single `Artist` using its globally unique `ID`. */
  artist?: Maybe<Artist>;
  /** Get a single `Artist`. */
  artistByName?: Maybe<Artist>;
  /** Get a single `Artist`. */
  artistByRowId?: Maybe<Artist>;
  /** Reads a single `Branch` using its globally unique `ID`. */
  branch?: Maybe<Branch>;
  /** Get a single `Branch`. */
  branchByName?: Maybe<Branch>;
  /** Get a single `Branch`. */
  branchByRowId?: Maybe<Branch>;
  /** Reads a single `Character` using its globally unique `ID`. */
  character?: Maybe<Character>;
  /** Reads a single `CharacterArtist` using its globally unique `ID`. */
  characterArtist?: Maybe<CharacterArtist>;
  /** Get a single `CharacterArtist`. */
  characterArtistByCharacterIdAndArtistId?: Maybe<CharacterArtist>;
  /** Get a single `Character`. */
  characterByName?: Maybe<Character>;
  /** Get a single `Character`. */
  characterByRowId?: Maybe<Character>;
  /** Reads a single `Class` using its globally unique `ID`. */
  class?: Maybe<Class>;
  /** Get a single `Class`. */
  classByName?: Maybe<Class>;
  /** Get a single `Class`. */
  classByRowId?: Maybe<Class>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  id: Scalars['ID']['output'];
  /** Reads a single `Infection` using its globally unique `ID`. */
  infection?: Maybe<Infection>;
  /** Get a single `Infection`. */
  infectionByName?: Maybe<Infection>;
  /** Get a single `Infection`. */
  infectionByRowId?: Maybe<Infection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads a single `PlaceOfBirth` using its globally unique `ID`. */
  placeOfBirth?: Maybe<PlaceOfBirth>;
  /** Get a single `PlaceOfBirth`. */
  placeOfBirthByName?: Maybe<PlaceOfBirth>;
  /** Get a single `PlaceOfBirth`. */
  placeOfBirthByRowId?: Maybe<PlaceOfBirth>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `Race` using its globally unique `ID`. */
  race?: Maybe<Race>;
  /** Get a single `Race`. */
  raceByName?: Maybe<Race>;
  /** Get a single `Race`. */
  raceByRowId?: Maybe<Race>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllArtistCharactersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllArtistsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ArtistCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ArtistOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllBranchCharacterArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllBranchesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BranchCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BranchOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCharacterArtistsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CharacterArtistCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CharacterArtistOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCharactersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CharacterCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CharacterOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllClassCharacterArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllClassesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ClassCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClassOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllGeneralSearchArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllHeightCharacterArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  charHeight?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllInfectionCharacterArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllInfectionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<InfectionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InfectionOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPlaceOfBirthCharacterArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPlaceOfBirthsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<PlaceOfBirthCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PlaceOfBirthOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllRaceCharacterArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllRacesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RaceCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RaceOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryArtistArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryArtistByNameArgs = {
  name: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryArtistByRowIdArgs = {
  rowId: Scalars['BigInt']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBranchArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBranchByNameArgs = {
  name: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBranchByRowIdArgs = {
  rowId: Scalars['BigInt']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCharacterArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCharacterArtistArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCharacterArtistByCharacterIdAndArtistIdArgs = {
  artistId: Scalars['BigInt']['input'];
  characterId: Scalars['BigInt']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCharacterByNameArgs = {
  name: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCharacterByRowIdArgs = {
  rowId: Scalars['BigInt']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryClassArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryClassByNameArgs = {
  name: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryClassByRowIdArgs = {
  rowId: Scalars['BigInt']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInfectionArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInfectionByNameArgs = {
  name: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInfectionByRowIdArgs = {
  rowId: Scalars['BigInt']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPlaceOfBirthArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPlaceOfBirthByNameArgs = {
  name: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPlaceOfBirthByRowIdArgs = {
  rowId: Scalars['BigInt']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRaceArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRaceByNameArgs = {
  name: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRaceByRowIdArgs = {
  rowId: Scalars['BigInt']['input'];
};

export type Race = Node & {
  __typename?: 'Race';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  rowId: Scalars['BigInt']['output'];
};

/** A condition to be used against `Race` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RaceCondition = {
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `rowId` field. */
  rowId?: InputMaybe<Scalars['BigInt']['input']>;
};

/** A connection to a list of `Race` values. */
export type RaceConnection = {
  __typename?: 'RaceConnection';
  /** A list of edges which contains the `Race` and cursor to aid in pagination. */
  edges: Array<Maybe<RaceEdge>>;
  /** A list of `Race` objects. */
  nodes: Array<Maybe<Race>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Race` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Race` edge in the connection. */
export type RaceEdge = {
  __typename?: 'RaceEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Race` at the end of the edge. */
  node?: Maybe<Race>;
};

/** Methods to use when ordering `Race`. */
export enum RaceOrderBy {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RowIdAsc = 'ROW_ID_ASC',
  RowIdDesc = 'ROW_ID_DESC'
}

export type AllGeneralSearchQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type AllGeneralSearchQuery = { __typename?: 'Query', allGeneralSearch?: { __typename?: 'CharacterConnection', nodes: Array<{ __typename?: 'Character', id: string, name: string, classByClassId?: { __typename?: 'Class', name: string } | null } | null> } | null };

export type CharactersLessThanHeightQueryVariables = Exact<{
  height?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CharactersLessThanHeightQuery = { __typename?: 'Query', allHeightCharacter?: { __typename?: 'CharacterConnection', nodes: Array<{ __typename?: 'Character', id: string, name: string } | null> } | null };

export type AllRaceCharacterQueryVariables = Exact<{
  race?: InputMaybe<Scalars['String']['input']>;
}>;


export type AllRaceCharacterQuery = { __typename?: 'Query', allRaceCharacter?: { __typename?: 'CharacterConnection', nodes: Array<{ __typename?: 'Character', id: string, name: string } | null> } | null };

export type AllCharacterQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type AllCharacterQuery = { __typename?: 'Query', allCharacters?: { __typename?: 'CharacterConnection', nodes: Array<{ __typename?: 'Character', id: string, name: string, classByClassId?: { __typename?: 'Class', name: string } | null } | null> } | null };

export type GetOperatorDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOperatorDetailsQuery = { __typename?: 'Query', characterByName?: { __typename?: 'Character', name: string, gender: string, height: number, placeOfBirthByPlaceOfBirthId?: { __typename?: 'PlaceOfBirth', name: string } | null, raceByRaceId?: { __typename?: 'Race', name: string } | null, infectionByInfectionId?: { __typename?: 'Infection', name: string } | null, classByClassId?: { __typename?: 'Class', name: string } | null, branchByBranchId?: { __typename?: 'Branch', name: string } | null, characterArtistsByCharacterId: { __typename?: 'CharacterArtistConnection', nodes: Array<{ __typename?: 'CharacterArtist', artistByArtistId?: { __typename?: 'Artist', name: string } | null } | null> } } | null };


export const AllGeneralSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allGeneralSearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allGeneralSearch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"classByClassId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllGeneralSearchQuery, AllGeneralSearchQueryVariables>;
export const CharactersLessThanHeightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"charactersLessThanHeight"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"height"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"135"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allHeightCharacter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"charHeight"},"value":{"kind":"Variable","name":{"kind":"Name","value":"height"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CharactersLessThanHeightQuery, CharactersLessThanHeightQueryVariables>;
export const AllRaceCharacterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allRaceCharacter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"race"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allRaceCharacter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"race"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AllRaceCharacterQuery, AllRaceCharacterQueryVariables>;
export const AllCharacterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allCharacter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allCharacters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"classByClassId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllCharacterQuery, AllCharacterQueryVariables>;
export const GetOperatorDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOperatorDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"characterByName"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"Dorothy","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"placeOfBirthByPlaceOfBirthId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"raceByRaceId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"infectionByInfectionId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"classByClassId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"branchByBranchId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"characterArtistsByCharacterId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artistByArtistId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOperatorDetailsQuery, GetOperatorDetailsQueryVariables>;