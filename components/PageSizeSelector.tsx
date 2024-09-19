import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface PageSizeSelectorProps {
  pageSize: number;
  setPageSize: (size: number) => void;
}

const PageSizeSelector: React.FC<PageSizeSelectorProps> = ({ pageSize, setPageSize }) => {
  const sizes = [25, 50, 100, 150];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Page Size:</Text>
      <View style={styles.buttonsContainer}>
        {sizes.map((size) => (
          <Button
            key={size}
            title={size.toString()}
            onPress={() => setPageSize(size)}
            color={pageSize === size ? 'blue' : 'gray'}
          />
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
    marginRight: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});