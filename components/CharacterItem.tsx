import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CharacterItemProps {
  character: any;
}

const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{character.name}</Text>
      <Text>Eye Color: {character.eye_color}</Text>
      <Text>Created: {new Date(character.created).toLocaleDateString()}</Text>
    </View>
  );
};

export default CharacterItem;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  name: {
    fontWeight: 'bold',
  },
});