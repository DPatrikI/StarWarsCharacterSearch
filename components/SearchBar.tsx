import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setPage: (page: number) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, setPage }) => {
  const handleSearchTermChange = (text: string) => {
    setSearchTerm(text);
    setPage(1);
  };

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a character!"
        value={searchTerm}
        onChangeText={handleSearchTermChange}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});