import React from 'react';
import { FlatList } from 'react-native';
import CharacterItem from './CharacterItem';

interface CharacterListProps {
  characters: any[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  const renderItem = ({ item }: { item: any }) => (
    <CharacterItem character={item} />
  );

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.url}
      renderItem={renderItem}
    />
  );
};

export default CharacterList;