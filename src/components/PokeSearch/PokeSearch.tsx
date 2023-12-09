import styles from './PokeSearch.module.scss';

interface PokeSearchProps {
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleHistClick: (e: string) => void;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
    searchText: string;
    searchHistory: string[];
}

export const PokeSearch: React.FC<PokeSearchProps> = ({ handleKeyDown, handleHistClick, handleInput,handleSearch, searchHistory, searchText}) => {
  return (
    <div className={styles.searchWrapper}>
        <input
            aria-label="searchText"
            name="searchText"
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            type='text'
            value={searchText || ""}
        />
        <button
            name='search'
            onClick={handleSearch}
        >
            Search
        </button>
        { searchHistory && searchHistory.length !== 0 &&  <h3>recent searches: </h3> }
        { searchHistory && searchHistory.map((search: string, i: number) => <div className={styles.history} data-testid='history-item' key={`${i}-${search}`} onClick={() => handleHistClick(search)}>{search}</div>) }
    </div>
  );
};
