import { AbilityInfo, MoveInfo, PokeType, SpritesInfo } from "./PokeInfo";

export type SearchPokemonResponse = {
    abilities: Array<AbilityInfo>;
    moves: Array<MoveInfo>;
    searchText: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    species: any;
    sprites: SpritesInfo;
    types: Array<PokeType>;
  }