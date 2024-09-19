import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../App';
import * as api from '../services/api';

jest.mock('../services/api');

describe('<App />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('renders search bar and page size selector', () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    expect(getByPlaceholderText('Search for a character!')).toBeTruthy();
    expect(getByText('Page Size:')).toBeTruthy();
  });

  test('fetches and displays characters on search', async () => {
    const mockCharacters = [
      {
        name: 'Luke Skywalker',
        eye_color: 'blue',
        created: '2014-12-09T13:50:51.644000Z',
        url: 'https://swapi.dev/api/people/1/',
      },
      {
        name: 'Darth Vader',
        eye_color: 'yellow',
        created: '2014-12-10T15:18:20.704000Z',
        url: 'https://swapi.dev/api/people/4/',
      }
    ];

    (api.fetchCharacters as jest.Mock).mockResolvedValueOnce({
      results: mockCharacters,
      next: null,
      count: mockCharacters.length,
    });

    const { getByPlaceholderText, getByText, findByText } = render(<App />);

    const searchInput = getByPlaceholderText('Search for a character'!);

    fireEvent.changeText(searchInput, 'Luke');

    await waitFor(() => expect(getByText('Page 1 of 1')).toBeTruthy());

    expect(await findByText('Luke Skywalker')).toBeTruthy();
  });
});