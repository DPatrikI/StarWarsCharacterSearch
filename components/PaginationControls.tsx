import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
      <TouchableOpacity
        onPress={handlePrevious}
        disabled={page === 1 || loading}
        style={[
          styles.button,
          (page === 1 || loading) && styles.disabledButton,
        ]}
      >
        <Text style={styles.buttonText}>Previous</Text>
      </TouchableOpacity>
      <Text style={styles.pageInfo}>
        Page {page} of {totalPages}
      </Text>
      <TouchableOpacity
        onPress={handleNext}
        disabled={loading || page === totalPages}
        style={[
          styles.button,
          (loading || page === totalPages) && styles.disabledButton,
        ]}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
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
  button: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#1a1a1a',
  },
  disabledButton: {
    borderColor: '#555555',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  pageInfo: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});