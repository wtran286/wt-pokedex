
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getPokemon, selectHistory, selectPoke } from '../../redux/slices/PokeSlice';
import { LeftScreen } from '../../components/LeftScreen/LeftScreen';
import { RightScreen } from '../../components/RightScreen/RightScreen';

import styles from './Pokedex.module.scss';
import { PokeSearch } from '../../components/PokeSearch/PokeSearch';

export const Pokedex: React.FC = () => {
  const [searchText, setSearchText] =  useState('');
  const dispatch = useAppDispatch();

  const pokeData = useAppSelector(selectPoke);
  const searchHistory = useAppSelector(selectHistory) || null;

  const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  const handleSearch = () => {
    dispatch(getPokemon(searchText));
  }

  const handleHistClick = (text: string) => {
    setSearchText(text);
    dispatch(getPokemon(text));
  }

  return (
    <div className={styles.pokedex}>
      <div>
          <div className={styles.row}>
            <span className={styles.topSpace} />
          </div>
          <div className={styles.row}>
            <div className={styles.columnBorder}>
              <LeftScreen 
              name={pokeData?.species?.name}
              image={pokeData?.sprites?.other?.['official-artwork']?.front_default }
              />
              <PokeSearch
                handleKeyDown={handleKeyDown}
                handleHistClick={handleHistClick}
                handleInput={handleInput}
                handleSearch={handleSearch}
                searchText={searchText}
                searchHistory={searchHistory}
              />
            </div>
            <div className={styles.column}>
              <RightScreen
                abilities={pokeData?.abilities}
                moves={pokeData?.moves}
                sprites={pokeData?.sprites}
                types={pokeData?.types}
              />
            </div>
          </div>
          <div className={styles.row}>
            <span className={styles.bottomSpace} />
          </div>
      </div>
    </div>
  );
};
