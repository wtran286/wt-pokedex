import { render, fireEvent } from '@testing-library/react';
import { PokeSearch } from '../../components/PokeSearch/PokeSearch';
import '@testing-library/jest-dom';

jest.mock('../../components/PokeSearch/PokeSearch.module.scss', () => ({
    pokeSearch: 'pokeSearchMock',
  }));


describe('PokeSearch', () => {
  const mockProps = {
    handleKeyDown: jest.fn(),
    handleHistClick: jest.fn(),
    handleInput: jest.fn(),
    handleSearch: jest.fn(),
    searchText: '',
    searchHistory: ['Pikachu', 'Charmander', 'Bulbasaur'],
  };

  it('renders PokeSearch', () => {
    const { getByLabelText, getByText, getAllByTestId } = render(
      <PokeSearch {...mockProps} />
    );

    const inputElement = getByLabelText('searchText');
    const searchButton = getByText('Search');
    const recentSearchesTitle = getByText('recent searches:');
    const historyItems = getAllByTestId('history-item');

    expect(inputElement).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(recentSearchesTitle).toBeInTheDocument();
    expect(historyItems).toHaveLength(mockProps.searchHistory.length);
  });

  it('calls handleKeyDown', () => {
    const { getByLabelText } = render(<PokeSearch {...mockProps} />);
    const inputElement = getByLabelText('searchText');

    fireEvent.keyDown(inputElement, { key: 'Enter' });

    expect(mockProps.handleKeyDown).toHaveBeenCalled();
  });

  it('calls handleHistClick', () => {
    const { getAllByTestId } = render(<PokeSearch {...mockProps} />);
    const historyItems = getAllByTestId('history-item');

    fireEvent.click(historyItems[0]);

    expect(mockProps.handleHistClick).toHaveBeenCalledWith(mockProps.searchHistory[0]);
  });

  it('calls handleInput', () => {
    const { getByLabelText } = render(<PokeSearch {...mockProps} />);
    const inputElement = getByLabelText('searchText');

    fireEvent.change(inputElement, { target: { value: 'Pikachu' } });

    expect(mockProps.handleInput).toHaveBeenCalledWith(expect.any(Object));
  });

  it('calls handleSearch', () => {
    const { getByText } = render(<PokeSearch {...mockProps} />);
    const searchButton = getByText('Search');

    fireEvent.click(searchButton);

    expect(mockProps.handleSearch).toHaveBeenCalled();
  });
});
