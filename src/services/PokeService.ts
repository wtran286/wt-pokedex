
import { SearchPokemonResponse } from '../types/SearchPokemon';
import { BaseHttpService } from './BaseHttpService';  
import { endpoints } from '../constants/endpoints';

  
  export class PokeService extends BaseHttpService {
    constructor() {
      super({});
    }
    searchPokemon = (pokemon: string | number) => {
        try {
            return (
               this.get<SearchPokemonResponse>(endpoints.searchPokemon(pokemon))
            );
        } catch (error) {
            console.error(error);
            return error;
        }

    };
  }
  