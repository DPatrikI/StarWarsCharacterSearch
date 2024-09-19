import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface PageSizeSelectorProps {
  pageSize: number;
  setPageSize: (size: number) => void;
}

const PageSizeSelector: React.FC<PageSizeSelectorProps> = ({
  pageSize,
  setPageSize,
}) => {
  const sizes = [25, 50, 100, 150];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Page Size:</Text>
      <View style={styles.buttonsContainer}>
        {sizes.map((size) => (
          <TouchableOpacity
            key={size}
            style={[
              styles.button,
              pageSize === size && styles.activeButton,
            ]}
            onPress={() => setPageSize(size)}
          >
            <Text
              style={[
                styles.buttonText,
                pageSize === size && styles.activeButtonText,
              ]}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PageSizeSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    color: '#FFFFFF',
    marginRight: 10,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 5,
    backgroundColor: '#1a1a1a',
  },
  activeButton: {
    backgroundColor: '#FFD700',
    borderColor: '#FFD700',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  activeButtonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});