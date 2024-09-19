import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CharacterItemProps {
  character: any;
}

const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.detail}>Eye Color: {character.eye_color}</Text>
      <Text style={styles.detail}>
        Created: {new Date(character.created).toLocaleDateString()}
      </Text>
    </View>
  );
};

export default CharacterItem;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#333333',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFD700',
    marginBottom: 5,
  },
  detail: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});