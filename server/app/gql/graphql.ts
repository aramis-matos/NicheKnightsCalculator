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

/** An input for mutations affecting `Artist` */
export type ArtistInput = {
  name: Scalars['String']['input'];
  rowId?: InputMaybe<Scalars['BigInt']['input']>;
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

/** Represents an update to a `Artist`. Fields that are set will be updated. */
export type ArtistPatch = {
  name?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Character = Node & {
  __typename?: 'Character';
  /** Reads and enables pagination through a set of `CharacterArtist`. */
  characterArtistsByCharacterId: CharacterArtistConnection;
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

/** An input for mutations affecting `CharacterArtist` */
export type CharacterArtistInput = {
  artistId: Scalars['BigInt']['input'];
  characterId: Scalars['BigInt']['input'];
};

/** Methods to use when ordering `CharacterArtist`. */
export enum CharacterArtistOrderBy {
  CharacterIdAsc = 'CHARACTER_ID_ASC',
  CharacterIdDesc = 'CHARACTER_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Represents an update to a `CharacterArtist`. Fields that are set will be updated. */
export type CharacterArtistPatch = {
  artistId?: InputMaybe<Scalars['BigInt']['input']>;
  characterId?: InputMaybe<Scalars['BigInt']['input']>;
};

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

/** An input for mutations affecting `Character` */
export type CharacterInput = {
  gender: Scalars['String']['input'];
  height: Scalars['Int']['input'];
  infectionId?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  placeOfBirthId?: InputMaybe<Scalars['BigInt']['input']>;
  raceId?: InputMaybe<Scalars['BigInt']['input']>;
  rowId?: InputMaybe<Scalars['BigInt']['input']>;
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

/** Represents an update to a `Character`. Fields that are set will be updated. */
export type CharacterPatch = {
  gender?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  infectionId?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  placeOfBirthId?: InputMaybe<Scalars['BigInt']['input']>;
  raceId?: InputMaybe<Scalars['BigInt']['input']>;
  rowId?: InputMaybe<Scalars['BigInt']['input']>;
};

/** All input for the create `Artist` mutation. */
export type CreateArtistInput = {
  /** The `Artist` to be created by this mutation. */
  artist: ArtistInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Artist` mutation. */
export type CreateArtistPayload = {
  __typename?: 'CreateArtistPayload';
  /** The `Artist` that was created by this mutation. */
  artist?: Maybe<Artist>;
  /** An edge for our `Artist`. May be used by Relay 1. */
  artistEdge?: Maybe<ArtistEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Artist` mutation. */
export type CreateArtistPayloadArtistEdgeArgs = {
  orderBy?: Array<ArtistOrderBy>;
};

/** All input for the create `CharacterArtist` mutation. */
export type CreateCharacterArtistInput = {
  /** The `CharacterArtist` to be created by this mutation. */
  characterArtist: CharacterArtistInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `CharacterArtist` mutation. */
export type CreateCharacterArtistPayload = {
  __typename?: 'CreateCharacterArtistPayload';
  /** The `CharacterArtist` that was created by this mutation. */
  characterArtist?: Maybe<CharacterArtist>;
  /** An edge for our `CharacterArtist`. May be used by Relay 1. */
  characterArtistEdge?: Maybe<CharacterArtistEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `CharacterArtist` mutation. */
export type CreateCharacterArtistPayloadCharacterArtistEdgeArgs = {
  orderBy?: Array<CharacterArtistOrderBy>;
};

/** All input for the create `Character` mutation. */
export type CreateCharacterInput = {
  /** The `Character` to be created by this mutation. */
  character: CharacterInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Character` mutation. */
export type CreateCharacterPayload = {
  __typename?: 'CreateCharacterPayload';
  /** The `Character` that was created by this mutation. */
  character?: Maybe<Character>;
  /** An edge for our `Character`. May be used by Relay 1. */
  characterEdge?: Maybe<CharacterEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Character` mutation. */
export type CreateCharacterPayloadCharacterEdgeArgs = {
  orderBy?: Array<CharacterOrderBy>;
};

/** All input for the create `Infection` mutation. */
export type CreateInfectionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Infection` to be created by this mutation. */
  infection: InfectionInput;
};

/** The output of our create `Infection` mutation. */
export type CreateInfectionPayload = {
  __typename?: 'CreateInfectionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Infection` that was created by this mutation. */
  infection?: Maybe<Infection>;
  /** An edge for our `Infection`. May be used by Relay 1. */
  infectionEdge?: Maybe<InfectionEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Infection` mutation. */
export type CreateInfectionPayloadInfectionEdgeArgs = {
  orderBy?: Array<InfectionOrderBy>;
};

/** All input for the create `PlaceOfBirth` mutation. */
export type CreatePlaceOfBirthInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `PlaceOfBirth` to be created by this mutation. */
  placeOfBirth: PlaceOfBirthInput;
};

/** The output of our create `PlaceOfBirth` mutation. */
export type CreatePlaceOfBirthPayload = {
  __typename?: 'CreatePlaceOfBirthPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `PlaceOfBirth` that was created by this mutation. */
  placeOfBirth?: Maybe<PlaceOfBirth>;
  /** An edge for our `PlaceOfBirth`. May be used by Relay 1. */
  placeOfBirthEdge?: Maybe<PlaceOfBirthEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `PlaceOfBirth` mutation. */
export type CreatePlaceOfBirthPayloadPlaceOfBirthEdgeArgs = {
  orderBy?: Array<PlaceOfBirthOrderBy>;
};

/** All input for the create `Race` mutation. */
export type CreateRaceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Race` to be created by this mutation. */
  race: RaceInput;
};

/** The output of our create `Race` mutation. */
export type CreateRacePayload = {
  __typename?: 'CreateRacePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Race` that was created by this mutation. */
  race?: Maybe<Race>;
  /** An edge for our `Race`. May be used by Relay 1. */
  raceEdge?: Maybe<RaceEdge>;
};


/** The output of our create `Race` mutation. */
export type CreateRacePayloadRaceEdgeArgs = {
  orderBy?: Array<RaceOrderBy>;
};

/** All input for the `deleteArtistByName` mutation. */
export type DeleteArtistByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** All input for the `deleteArtistByRowId` mutation. */
export type DeleteArtistByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['BigInt']['input'];
};

/** All input for the `deleteArtist` mutation. */
export type DeleteArtistInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Artist` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `Artist` mutation. */
export type DeleteArtistPayload = {
  __typename?: 'DeleteArtistPayload';
  /** The `Artist` that was deleted by this mutation. */
  artist?: Maybe<Artist>;
  /** An edge for our `Artist`. May be used by Relay 1. */
  artistEdge?: Maybe<ArtistEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedArtistId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Artist` mutation. */
export type DeleteArtistPayloadArtistEdgeArgs = {
  orderBy?: Array<ArtistOrderBy>;
};

/** All input for the `deleteCharacterArtistByCharacterIdAndArtistId` mutation. */
export type DeleteCharacterArtistByCharacterIdAndArtistIdInput = {
  artistId: Scalars['BigInt']['input'];
  characterId: Scalars['BigInt']['input'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the `deleteCharacterArtist` mutation. */
export type DeleteCharacterArtistInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `CharacterArtist` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `CharacterArtist` mutation. */
export type DeleteCharacterArtistPayload = {
  __typename?: 'DeleteCharacterArtistPayload';
  /** The `CharacterArtist` that was deleted by this mutation. */
  characterArtist?: Maybe<CharacterArtist>;
  /** An edge for our `CharacterArtist`. May be used by Relay 1. */
  characterArtistEdge?: Maybe<CharacterArtistEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedCharacterArtistId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `CharacterArtist` mutation. */
export type DeleteCharacterArtistPayloadCharacterArtistEdgeArgs = {
  orderBy?: Array<CharacterArtistOrderBy>;
};

/** All input for the `deleteCharacterByName` mutation. */
export type DeleteCharacterByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** All input for the `deleteCharacterByRowId` mutation. */
export type DeleteCharacterByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['BigInt']['input'];
};

/** All input for the `deleteCharacter` mutation. */
export type DeleteCharacterInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Character` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `Character` mutation. */
export type DeleteCharacterPayload = {
  __typename?: 'DeleteCharacterPayload';
  /** The `Character` that was deleted by this mutation. */
  character?: Maybe<Character>;
  /** An edge for our `Character`. May be used by Relay 1. */
  characterEdge?: Maybe<CharacterEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedCharacterId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Character` mutation. */
export type DeleteCharacterPayloadCharacterEdgeArgs = {
  orderBy?: Array<CharacterOrderBy>;
};

/** All input for the `deleteInfectionByName` mutation. */
export type DeleteInfectionByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** All input for the `deleteInfectionByRowId` mutation. */
export type DeleteInfectionByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['BigInt']['input'];
};

/** All input for the `deleteInfection` mutation. */
export type DeleteInfectionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Infection` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `Infection` mutation. */
export type DeleteInfectionPayload = {
  __typename?: 'DeleteInfectionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedInfectionId?: Maybe<Scalars['ID']['output']>;
  /** The `Infection` that was deleted by this mutation. */
  infection?: Maybe<Infection>;
  /** An edge for our `Infection`. May be used by Relay 1. */
  infectionEdge?: Maybe<InfectionEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Infection` mutation. */
export type DeleteInfectionPayloadInfectionEdgeArgs = {
  orderBy?: Array<InfectionOrderBy>;
};

/** All input for the `deletePlaceOfBirthByName` mutation. */
export type DeletePlaceOfBirthByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** All input for the `deletePlaceOfBirthByRowId` mutation. */
export type DeletePlaceOfBirthByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['BigInt']['input'];
};

/** All input for the `deletePlaceOfBirth` mutation. */
export type DeletePlaceOfBirthInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `PlaceOfBirth` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `PlaceOfBirth` mutation. */
export type DeletePlaceOfBirthPayload = {
  __typename?: 'DeletePlaceOfBirthPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedPlaceOfBirthId?: Maybe<Scalars['ID']['output']>;
  /** The `PlaceOfBirth` that was deleted by this mutation. */
  placeOfBirth?: Maybe<PlaceOfBirth>;
  /** An edge for our `PlaceOfBirth`. May be used by Relay 1. */
  placeOfBirthEdge?: Maybe<PlaceOfBirthEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `PlaceOfBirth` mutation. */
export type DeletePlaceOfBirthPayloadPlaceOfBirthEdgeArgs = {
  orderBy?: Array<PlaceOfBirthOrderBy>;
};

/** All input for the `deleteRaceByName` mutation. */
export type DeleteRaceByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** All input for the `deleteRaceByRowId` mutation. */
export type DeleteRaceByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['BigInt']['input'];
};

/** All input for the `deleteRace` mutation. */
export type DeleteRaceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Race` to be deleted. */
  id: Scalars['ID']['input'];
};

/** The output of our delete `Race` mutation. */
export type DeleteRacePayload = {
  __typename?: 'DeleteRacePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedRaceId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Race` that was deleted by this mutation. */
  race?: Maybe<Race>;
  /** An edge for our `Race`. May be used by Relay 1. */
  raceEdge?: Maybe<RaceEdge>;
};


/** The output of our delete `Race` mutation. */
export type DeleteRacePayloadRaceEdgeArgs = {
  orderBy?: Array<RaceOrderBy>;
};

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

/** An input for mutations affecting `Infection` */
export type InfectionInput = {
  name: Scalars['String']['input'];
  rowId?: InputMaybe<Scalars['BigInt']['input']>;
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

/** Represents an update to a `Infection`. Fields that are set will be updated. */
export type InfectionPatch = {
  name?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['BigInt']['input']>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Artist`. */
  createArtist?: Maybe<CreateArtistPayload>;
  /** Creates a single `Character`. */
  createCharacter?: Maybe<CreateCharacterPayload>;
  /** Creates a single `CharacterArtist`. */
  createCharacterArtist?: Maybe<CreateCharacterArtistPayload>;
  /** Creates a single `Infection`. */
  createInfection?: Maybe<CreateInfectionPayload>;
  /** Creates a single `PlaceOfBirth`. */
  createPlaceOfBirth?: Maybe<CreatePlaceOfBirthPayload>;
  /** Creates a single `Race`. */
  createRace?: Maybe<CreateRacePayload>;
  /** Deletes a single `Artist` using its globally unique id. */
  deleteArtist?: Maybe<DeleteArtistPayload>;
  /** Deletes a single `Artist` using a unique key. */
  deleteArtistByName?: Maybe<DeleteArtistPayload>;
  /** Deletes a single `Artist` using a unique key. */
  deleteArtistByRowId?: Maybe<DeleteArtistPayload>;
  /** Deletes a single `Character` using its globally unique id. */
  deleteCharacter?: Maybe<DeleteCharacterPayload>;
  /** Deletes a single `CharacterArtist` using its globally unique id. */
  deleteCharacterArtist?: Maybe<DeleteCharacterArtistPayload>;
  /** Deletes a single `CharacterArtist` using a unique key. */
  deleteCharacterArtistByCharacterIdAndArtistId?: Maybe<DeleteCharacterArtistPayload>;
  /** Deletes a single `Character` using a unique key. */
  deleteCharacterByName?: Maybe<DeleteCharacterPayload>;
  /** Deletes a single `Character` using a unique key. */
  deleteCharacterByRowId?: Maybe<DeleteCharacterPayload>;
  /** Deletes a single `Infection` using its globally unique id. */
  deleteInfection?: Maybe<DeleteInfectionPayload>;
  /** Deletes a single `Infection` using a unique key. */
  deleteInfectionByName?: Maybe<DeleteInfectionPayload>;
  /** Deletes a single `Infection` using a unique key. */
  deleteInfectionByRowId?: Maybe<DeleteInfectionPayload>;
  /** Deletes a single `PlaceOfBirth` using its globally unique id. */
  deletePlaceOfBirth?: Maybe<DeletePlaceOfBirthPayload>;
  /** Deletes a single `PlaceOfBirth` using a unique key. */
  deletePlaceOfBirthByName?: Maybe<DeletePlaceOfBirthPayload>;
  /** Deletes a single `PlaceOfBirth` using a unique key. */
  deletePlaceOfBirthByRowId?: Maybe<DeletePlaceOfBirthPayload>;
  /** Deletes a single `Race` using its globally unique id. */
  deleteRace?: Maybe<DeleteRacePayload>;
  /** Deletes a single `Race` using a unique key. */
  deleteRaceByName?: Maybe<DeleteRacePayload>;
  /** Deletes a single `Race` using a unique key. */
  deleteRaceByRowId?: Maybe<DeleteRacePayload>;
  /** Updates a single `Artist` using its globally unique id and a patch. */
  updateArtist?: Maybe<UpdateArtistPayload>;
  /** Updates a single `Artist` using a unique key and a patch. */
  updateArtistByName?: Maybe<UpdateArtistPayload>;
  /** Updates a single `Artist` using a unique key and a patch. */
  updateArtistByRowId?: Maybe<UpdateArtistPayload>;
  /** Updates a single `Character` using its globally unique id and a patch. */
  updateCharacter?: Maybe<UpdateCharacterPayload>;
  /** Updates a single `CharacterArtist` using its globally unique id and a patch. */
  updateCharacterArtist?: Maybe<UpdateCharacterArtistPayload>;
  /** Updates a single `CharacterArtist` using a unique key and a patch. */
  updateCharacterArtistByCharacterIdAndArtistId?: Maybe<UpdateCharacterArtistPayload>;
  /** Updates a single `Character` using a unique key and a patch. */
  updateCharacterByName?: Maybe<UpdateCharacterPayload>;
  /** Updates a single `Character` using a unique key and a patch. */
  updateCharacterByRowId?: Maybe<UpdateCharacterPayload>;
  /** Updates a single `Infection` using its globally unique id and a patch. */
  updateInfection?: Maybe<UpdateInfectionPayload>;
  /** Updates a single `Infection` using a unique key and a patch. */
  updateInfectionByName?: Maybe<UpdateInfectionPayload>;
  /** Updates a single `Infection` using a unique key and a patch. */
  updateInfectionByRowId?: Maybe<UpdateInfectionPayload>;
  /** Updates a single `PlaceOfBirth` using its globally unique id and a patch. */
  updatePlaceOfBirth?: Maybe<UpdatePlaceOfBirthPayload>;
  /** Updates a single `PlaceOfBirth` using a unique key and a patch. */
  updatePlaceOfBirthByName?: Maybe<UpdatePlaceOfBirthPayload>;
  /** Updates a single `PlaceOfBirth` using a unique key and a patch. */
  updatePlaceOfBirthByRowId?: Maybe<UpdatePlaceOfBirthPayload>;
  /** Updates a single `Race` using its globally unique id and a patch. */
  updateRace?: Maybe<UpdateRacePayload>;
  /** Updates a single `Race` using a unique key and a patch. */
  updateRaceByName?: Maybe<UpdateRacePayload>;
  /** Updates a single `Race` using a unique key and a patch. */
  updateRaceByRowId?: Maybe<UpdateRacePayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateArtistArgs = {
  input: CreateArtistInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCharacterArgs = {
  input: CreateCharacterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCharacterArtistArgs = {
  input: CreateCharacterArtistInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateInfectionArgs = {
  input: CreateInfectionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePlaceOfBirthArgs = {
  input: CreatePlaceOfBirthInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRaceArgs = {
  input: CreateRaceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteArtistArgs = {
  input: DeleteArtistInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteArtistByNameArgs = {
  input: DeleteArtistByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteArtistByRowIdArgs = {
  input: DeleteArtistByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCharacterArgs = {
  input: DeleteCharacterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCharacterArtistArgs = {
  input: DeleteCharacterArtistInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCharacterArtistByCharacterIdAndArtistIdArgs = {
  input: DeleteCharacterArtistByCharacterIdAndArtistIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCharacterByNameArgs = {
  input: DeleteCharacterByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCharacterByRowIdArgs = {
  input: DeleteCharacterByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInfectionArgs = {
  input: DeleteInfectionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInfectionByNameArgs = {
  input: DeleteInfectionByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInfectionByRowIdArgs = {
  input: DeleteInfectionByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlaceOfBirthArgs = {
  input: DeletePlaceOfBirthInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlaceOfBirthByNameArgs = {
  input: DeletePlaceOfBirthByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePlaceOfBirthByRowIdArgs = {
  input: DeletePlaceOfBirthByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRaceArgs = {
  input: DeleteRaceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRaceByNameArgs = {
  input: DeleteRaceByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRaceByRowIdArgs = {
  input: DeleteRaceByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateArtistArgs = {
  input: UpdateArtistInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateArtistByNameArgs = {
  input: UpdateArtistByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateArtistByRowIdArgs = {
  input: UpdateArtistByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCharacterArgs = {
  input: UpdateCharacterInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCharacterArtistArgs = {
  input: UpdateCharacterArtistInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCharacterArtistByCharacterIdAndArtistIdArgs = {
  input: UpdateCharacterArtistByCharacterIdAndArtistIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCharacterByNameArgs = {
  input: UpdateCharacterByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCharacterByRowIdArgs = {
  input: UpdateCharacterByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInfectionArgs = {
  input: UpdateInfectionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInfectionByNameArgs = {
  input: UpdateInfectionByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInfectionByRowIdArgs = {
  input: UpdateInfectionByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlaceOfBirthArgs = {
  input: UpdatePlaceOfBirthInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlaceOfBirthByNameArgs = {
  input: UpdatePlaceOfBirthByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePlaceOfBirthByRowIdArgs = {
  input: UpdatePlaceOfBirthByRowIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRaceArgs = {
  input: UpdateRaceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRaceByNameArgs = {
  input: UpdateRaceByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRaceByRowIdArgs = {
  input: UpdateRaceByRowIdInput;
};

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

/** An input for mutations affecting `PlaceOfBirth` */
export type PlaceOfBirthInput = {
  name: Scalars['String']['input'];
  rowId?: InputMaybe<Scalars['BigInt']['input']>;
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

/** Represents an update to a `PlaceOfBirth`. Fields that are set will be updated. */
export type PlaceOfBirthPatch = {
  name?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['BigInt']['input']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `Character`. */
  allArtistCharacters?: Maybe<CharacterConnection>;
  /** Reads and enables pagination through a set of `Artist`. */
  allArtists?: Maybe<ArtistConnection>;
  /** Reads and enables pagination through a set of `CharacterArtist`. */
  allCharacterArtists?: Maybe<CharacterArtistConnection>;
  /** Reads and enables pagination through a set of `Character`. */
  allCharacters?: Maybe<CharacterConnection>;
  /** Reads and enables pagination through a set of `Character`. */
  allHeightCharacter?: Maybe<CharacterConnection>;
  /** Reads and enables pagination through a set of `Character`. */
  allInfectionCharacter?: Maybe<CharacterConnection>;
  /** Reads and enables pagination through a set of `Infection`. */
  allInfections?: Maybe<InfectionConnection>;
  /** Reads and enables pagination through a set of `Character`. */
  allPlaceOfBirthCharacters?: Maybe<CharacterConnection>;
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
export type QueryAllPlaceOfBirthCharactersArgs = {
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

/** An input for mutations affecting `Race` */
export type RaceInput = {
  name: Scalars['String']['input'];
  rowId?: InputMaybe<Scalars['BigInt']['input']>;
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

/** Represents an update to a `Race`. Fields that are set will be updated. */
export type RacePatch = {
  name?: InputMaybe<Scalars['String']['input']>;
  rowId?: InputMaybe<Scalars['BigInt']['input']>;
};

/** All input for the `updateArtistByName` mutation. */
export type UpdateArtistByNameInput = {
  /** An object where the defined keys will be set on the `Artist` being updated. */
  artistPatch: ArtistPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** All input for the `updateArtistByRowId` mutation. */
export type UpdateArtistByRowIdInput = {
  /** An object where the defined keys will be set on the `Artist` being updated. */
  artistPatch: ArtistPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['BigInt']['input'];
};

/** All input for the `updateArtist` mutation. */
export type UpdateArtistInput = {
  /** An object where the defined keys will be set on the `Artist` being updated. */
  artistPatch: ArtistPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Artist` to be updated. */
  id: Scalars['ID']['input'];
};

/** The output of our update `Artist` mutation. */
export type UpdateArtistPayload = {
  __typename?: 'UpdateArtistPayload';
  /** The `Artist` that was updated by this mutation. */
  artist?: Maybe<Artist>;
  /** An edge for our `Artist`. May be used by Relay 1. */
  artistEdge?: Maybe<ArtistEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Artist` mutation. */
export type UpdateArtistPayloadArtistEdgeArgs = {
  orderBy?: Array<ArtistOrderBy>;
};

/** All input for the `updateCharacterArtistByCharacterIdAndArtistId` mutation. */
export type UpdateCharacterArtistByCharacterIdAndArtistIdInput = {
  artistId: Scalars['BigInt']['input'];
  /** An object where the defined keys will be set on the `CharacterArtist` being updated. */
  characterArtistPatch: CharacterArtistPatch;
  characterId: Scalars['BigInt']['input'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the `updateCharacterArtist` mutation. */
export type UpdateCharacterArtistInput = {
  /** An object where the defined keys will be set on the `CharacterArtist` being updated. */
  characterArtistPatch: CharacterArtistPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `CharacterArtist` to be updated. */
  id: Scalars['ID']['input'];
};

/** The output of our update `CharacterArtist` mutation. */
export type UpdateCharacterArtistPayload = {
  __typename?: 'UpdateCharacterArtistPayload';
  /** The `CharacterArtist` that was updated by this mutation. */
  characterArtist?: Maybe<CharacterArtist>;
  /** An edge for our `CharacterArtist`. May be used by Relay 1. */
  characterArtistEdge?: Maybe<CharacterArtistEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `CharacterArtist` mutation. */
export type UpdateCharacterArtistPayloadCharacterArtistEdgeArgs = {
  orderBy?: Array<CharacterArtistOrderBy>;
};

/** All input for the `updateCharacterByName` mutation. */
export type UpdateCharacterByNameInput = {
  /** An object where the defined keys will be set on the `Character` being updated. */
  characterPatch: CharacterPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** All input for the `updateCharacterByRowId` mutation. */
export type UpdateCharacterByRowIdInput = {
  /** An object where the defined keys will be set on the `Character` being updated. */
  characterPatch: CharacterPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rowId: Scalars['BigInt']['input'];
};

/** All input for the `updateCharacter` mutation. */
export type UpdateCharacterInput = {
  /** An object where the defined keys will be set on the `Character` being updated. */
  characterPatch: CharacterPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Character` to be updated. */
  id: Scalars['ID']['input'];
};

/** The output of our update `Character` mutation. */
export type UpdateCharacterPayload = {
  __typename?: 'UpdateCharacterPayload';
  /** The `Character` that was updated by this mutation. */
  character?: Maybe<Character>;
  /** An edge for our `Character`. May be used by Relay 1. */
  characterEdge?: Maybe<CharacterEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Character` mutation. */
export type UpdateCharacterPayloadCharacterEdgeArgs = {
  orderBy?: Array<CharacterOrderBy>;
};

/** All input for the `updateInfectionByName` mutation. */
export type UpdateInfectionByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Infection` being updated. */
  infectionPatch: InfectionPatch;
  name: Scalars['String']['input'];
};

/** All input for the `updateInfectionByRowId` mutation. */
export type UpdateInfectionByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Infection` being updated. */
  infectionPatch: InfectionPatch;
  rowId: Scalars['BigInt']['input'];
};

/** All input for the `updateInfection` mutation. */
export type UpdateInfectionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Infection` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Infection` being updated. */
  infectionPatch: InfectionPatch;
};

/** The output of our update `Infection` mutation. */
export type UpdateInfectionPayload = {
  __typename?: 'UpdateInfectionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Infection` that was updated by this mutation. */
  infection?: Maybe<Infection>;
  /** An edge for our `Infection`. May be used by Relay 1. */
  infectionEdge?: Maybe<InfectionEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Infection` mutation. */
export type UpdateInfectionPayloadInfectionEdgeArgs = {
  orderBy?: Array<InfectionOrderBy>;
};

/** All input for the `updatePlaceOfBirthByName` mutation. */
export type UpdatePlaceOfBirthByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `PlaceOfBirth` being updated. */
  placeOfBirthPatch: PlaceOfBirthPatch;
};

/** All input for the `updatePlaceOfBirthByRowId` mutation. */
export type UpdatePlaceOfBirthByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `PlaceOfBirth` being updated. */
  placeOfBirthPatch: PlaceOfBirthPatch;
  rowId: Scalars['BigInt']['input'];
};

/** All input for the `updatePlaceOfBirth` mutation. */
export type UpdatePlaceOfBirthInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `PlaceOfBirth` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `PlaceOfBirth` being updated. */
  placeOfBirthPatch: PlaceOfBirthPatch;
};

/** The output of our update `PlaceOfBirth` mutation. */
export type UpdatePlaceOfBirthPayload = {
  __typename?: 'UpdatePlaceOfBirthPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `PlaceOfBirth` that was updated by this mutation. */
  placeOfBirth?: Maybe<PlaceOfBirth>;
  /** An edge for our `PlaceOfBirth`. May be used by Relay 1. */
  placeOfBirthEdge?: Maybe<PlaceOfBirthEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `PlaceOfBirth` mutation. */
export type UpdatePlaceOfBirthPayloadPlaceOfBirthEdgeArgs = {
  orderBy?: Array<PlaceOfBirthOrderBy>;
};

/** All input for the `updateRaceByName` mutation. */
export type UpdateRaceByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Race` being updated. */
  racePatch: RacePatch;
};

/** All input for the `updateRaceByRowId` mutation. */
export type UpdateRaceByRowIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Race` being updated. */
  racePatch: RacePatch;
  rowId: Scalars['BigInt']['input'];
};

/** All input for the `updateRace` mutation. */
export type UpdateRaceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Race` to be updated. */
  id: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Race` being updated. */
  racePatch: RacePatch;
};

/** The output of our update `Race` mutation. */
export type UpdateRacePayload = {
  __typename?: 'UpdateRacePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Race` that was updated by this mutation. */
  race?: Maybe<Race>;
  /** An edge for our `Race`. May be used by Relay 1. */
  raceEdge?: Maybe<RaceEdge>;
};


/** The output of our update `Race` mutation. */
export type UpdateRacePayloadRaceEdgeArgs = {
  orderBy?: Array<RaceOrderBy>;
};

export type CharactersLessThanHeighQueryVariables = Exact<{
  height?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CharactersLessThanHeighQuery = { __typename?: 'Query', allHeightCharacter?: { __typename?: 'CharacterConnection', nodes: Array<{ __typename?: 'Character', id: string, name: string } | null> } | null };


export const CharactersLessThanHeighDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"charactersLessThanHeigh"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"height"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"135"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allHeightCharacter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"charHeight"},"value":{"kind":"Variable","name":{"kind":"Name","value":"height"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CharactersLessThanHeighQuery, CharactersLessThanHeighQueryVariables>;