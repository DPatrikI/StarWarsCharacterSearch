import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setPage: (page: number) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  setPage,
}) => {
  const handleSearchTermChange = (text: string) => {
    setSearchTerm(text);
    setPage(1);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a character!"
        placeholderTextColor="#999999"
        value={searchTerm}
        onChangeText={handleSearchTermChange}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  searchInput: {
    height: 50,
    borderColor: '#FFD700',
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    color: '#FFFFFF',
    fontSize: 18,
    backgroundColor: '#1a1a1a',
  },
});