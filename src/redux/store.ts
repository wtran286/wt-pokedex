import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pokeReducer from './slices/PokeSlice';


const store = configureStore({
  reducer: {
    poke: pokeReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
