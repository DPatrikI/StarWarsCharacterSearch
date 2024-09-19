import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import SearchBar from './components/SearchBar';
import CharacterList from './components/CharacterList';
import PaginationControls from './components/PaginationControls';
import PageSizeSelector from './components/PageSizeSelector';
import { fetchCharacters } from './services/api';

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [allCharacters, setAllCharacters] = useState<any[]>([]);
  const [displayedCharacters, setDisplayedCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(25);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    if (searchTerm.length > 0) {
      fetchAllCharacters();
    } else {
      setAllCharacters([]);
      setDisplayedCharacters([]);
      setTotalCount(0);
    }
  }, [searchTerm]);

  useEffect(() => {
    updateDisplayedCharacters();
  }, [allCharacters, page, pageSize]);

  const fetchAllCharacters = async () => {
    setLoading(true);
    setAllCharacters([]);
    setPage(1);
    try {
      let fetchedCharacters: any[] = [];
      let nextPageUrl = `https://swapi.dev/api/people/?search=${encodeURIComponent(
        searchTerm
      )}`;
      do {
        const data = await fetchCharacters(nextPageUrl);
        fetchedCharacters = [...fetchedCharacters, ...data.results];
        nextPageUrl = data.next;
        setTotalCount(data.count);
      } while (nextPageUrl);
      const sortedCharacters = sortCharacters(fetchedCharacters);
      setAllCharacters(sortedCharacters);
    } catch (error) {
      console.error(error);
      setAllCharacters([]);
      setTotalCount(0);
    } finally {
      setLoading(false);
    }
  };

  const updateDisplayedCharacters = () => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageData = allCharacters.slice(startIndex, endIndex);
    setDisplayedCharacters(pageData);
  };

  const sortCharacters = (charactersList: any[]) => {
    const blueEyed = charactersList.filter(
      (char) => char.eye_color.toLowerCase() === 'blue'
    );
    const others = charactersList.filter(
      (char) => char.eye_color.toLowerCase() !== 'blue'
    );

    blueEyed.sort((a, b) => a.name.localeCompare(b.name));

    others.sort(
      (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
    );

    return [...blueEyed, ...others];
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setPage(1);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setPage={setPage}
      />
      <PageSizeSelector
        pageSize={pageSize}
        setPageSize={handlePageSizeChange}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <CharacterList characters={displayedCharacters} />
          {displayedCharacters.length > 0 ? (
            <PaginationControls
              page={page}
              setPage={setPage}
              totalPages={Math.ceil(allCharacters.length / pageSize)}
              loading={loading}
            />
          ) : (
            !loading && <Text>No results found.</Text>
          )}
        </>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50,
  },
});