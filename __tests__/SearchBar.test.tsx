import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchBar from '../components/SearchBar';

describe('<SearchBar />', () => {
  test('updates search term and resets page on input change', () => {
    const setSearchTermMock = jest.fn();
    const setPageMock = jest.fn();

    const { getByPlaceholderText } = render(
      <SearchBar
        searchTerm=""
        setSearchTerm={setSearchTermMock}
        setPage={setPageMock}
      />
    );

    const searchInput = getByPlaceholderText('Search for a character');

    fireEvent.changeText(searchInput, 'Leia');

    expect(setSearchTermMock).toHaveBeenCalledWith('Leia');
    expect(setPageMock).toHaveBeenCalledWith(1);
  });
});