import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

interface PaginationControlsProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  loading: boolean;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  page,
  setPage,
  totalPages,
  loading,
}) => {
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Previous"
        onPress={handlePrevious}
        disabled={page === 1 || loading}
      />
      <Text>
        Page {page} of {totalPages}
      </Text>
      <Button
        title="Next"
        onPress={handleNext}
        disabled={loading || page === totalPages}
      />
    </View>
  );
};

export default PaginationControls;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});