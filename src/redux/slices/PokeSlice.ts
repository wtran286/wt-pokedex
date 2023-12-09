import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { PokeService } from '../../services/PokeService';
import { SearchPokemonResponse } from '../../types/SearchPokemon';

export interface Poke {
    selected: null | SearchPokemonResponse;
    status: string;
    history: Array<string>;
}

const initialState: Poke = {
    selected: null,
    status: '',
    history: [],
  };
const pokeService = new PokeService();

export const getPokemon = createAsyncThunk(
  'poke/getPokemon',
  async (id: string | number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const resp : any = await pokeService.searchPokemon(id);
    resp.data.searchText = id;
    return resp.data as SearchPokemonResponse;
  },
);

export const pokeSlice = createSlice({
  name: 'poke',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(getPokemon.fulfilled, (state, action: PayloadAction<SearchPokemonResponse>) => {
      const { abilities, moves, searchText, species, sprites, types } = action.payload;
      state.selected = { abilities, moves, species, sprites, types } as SearchPokemonResponse;
      state.status = 'success';
      state.history.push(searchText);
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .addCase(getPokemon.rejected, (state, action: any) => {
      state.selected = null;
      state.status = 'failed';
      state.history.push(action?.meta?.arg);
    })
  },
});

export const selectPoke = (state: RootState) => state.poke.selected;
export const selectHistory = (state: RootState) => state.poke.history;

export default pokeSlice.reducer;


